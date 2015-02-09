/* global Swiftype, twig */

////////////////////////
//* Search Functions
////////////////////////

/*

HLR Swiftype Client

Dependencies: twig, JQuery, Switype Search Client, and Swiftype Autocomplete Client
Swiftype API: https://swiftype.com/documentation/

hlr-search.js is an adaptation of swiftype jquery plugins. Some default functions from
the plugin have been adapted to this class. Custom functions for hlr are prefixed with
the word "custom." For example customRenderFunction replaces defaultRenderFunction.
If no custom function is specified in a .swiftype or .swiftypeSearch object, then the
default function from the plugin is being used.

default autocomplete client: swiftype-autocomplete-jquery.js
https://github.com/swiftype/swiftype-autocomplete-jquery/blob/master/README.md

default search client: swiftype-search-jquery.js
https://github.com/swiftype/swiftype-search-jquery/blob/master/README.md

*/

(function($, twig, Swiftype) {
    "use strict";

    var SearchManager = function() {

        this.swiftEngineKey = "DoTEkv1KdzYyqRqpafCa"; // search engine key replace if search engine changes

        this.searchTemplate = twig({
            id: "search_result", // id is optional, but useful for referencing the template later
            href: "/wp-content/themes/hlr/views/mods/st-search-result-tease.twig",
            async: false
        });

        this.autocompleteTemplate = twig({
            id: "autocomplete_result",
            href: "/wp-content/themes/hlr/views/mods/st-autocomplete-result.twig",
            async: false
        });

        this.paginationTemplate = twig({
            id: "page_numbers",
            href: "/wp-content/themes/hlr/views/mods/st-pagination.twig",
            async: false
        });

        this.init = function() {
            var _this = this;

            $().swiftypeSearch({
                engineKey: this.swiftEngineKey,
                fetchFields: {
                    page: ['title']
                }
            });

            var testParams = {
                engine_key: _this.swiftEngineKey,
                q: "law"
            };

            if (jQuery.support.ajax && Swiftype !== undefined) {
                // test if swiftype is returning search results, if not don't set listeners and use default wordpress search
                $.getJSON("https://api.swiftype.com/api/v1/public/engines/search.json?callback=?", testParams).success(function(data) {
                    if (data.records.page.length > 0) {
                        _this.setListeners();
                        $('.st-search-active').css('display', 'block');
                    } else {
                        $('.wp-search-active').css('display', 'block');
                    }
                });
            } else {
                $('.wp-search-active').css('display', 'block');
            }
        };
    };

    var searchManager = new SearchManager();

    SearchManager.prototype.setListeners = function() {

        $('.nav-search-input').keyup(function(event) {
            $(event.target).addClass('user-typing');
        });

        // chegk if home, 404, or other page and set appropriate listeners
        if ($('body').hasClass('search')) {
            this.searchListeners();
        } else if ($('body').hasClass('error404')) {
            this.errorListeners();
        } else {
            this.navListeners();
        }
    };

    ////////////////////////
    //* Search Functions
    ////////////////////////

    // nav bar
    SearchManager.prototype.navListeners = function() {

        // nav autocomplete search
        // default client: swiftype-autocomplete-jquery.js
        $('.nav-search-input').swiftype({
            renderFunction: this.customAutoRenderFunction,
            autocompleteContainingElement: '.js-autocomplete-target',
            dropdownStylesFunction: this.customDropdownStylesFunction,
            suggestionListClass: 'nav-autocomplete',
            engineKey: this.swiftEngineKey,
            resultLimit: 6,
            fetchFields: {
                page: ['url', 'title', 'type']
            }
        });

        // nav basic search
        // default client: swiftype-search-jquery.js
        $('.nav-search-input').swiftypeSearch({
            loadingFunction: this.customPreRenderFunction,
            engineKey: this.swiftEngineKey,
            fetchFields: {
                page: ['title']
            }
        });
    };

    // 404 page
    SearchManager.prototype.errorListeners = function() {

        // autocomplete search
        $('.search-input').swiftype({
            renderFunction: this.customAutoRenderFunction,
            dropdownStylesFunction: this.customSearchDropdownStylesFunction,
            suggestionListClass: 'main-autocomplete',
            engineKey: this.swiftEngineKey,
            resultLimit: 6,
            fetchFields: {
                page: ['url', 'title', 'type']
            }
        });

        // basic search
        $('.search-input').swiftypeSearch({
            loadingFunction: this.customPreRenderFunction,
            engineKey: this.swiftEngineKey,
            fetchFields: {
                page: ['title']
            }
        });
    };

    // search page
    SearchManager.prototype.searchListeners = function() {

        // basic search
        $('.search-input').swiftypeSearch({
            renderResultsFunction: this.customRenderResultsFunction,
            renderFunction: this.customRenderFunction,
            postRenderFunction: this.customPostRenderFunction,
            loadingFunction: customLoadingFunction,
            engineKey: this.swiftEngineKey,
            resultContainingElement: "#st-results-container",
            fetchFields: {
                page: ['url', 'title', 'type', 'image', 'info', 'sections', 'body']
            }
        });

        // autocomplete search
        $('.search-input').swiftype({
            renderFunction: this.customAutoRenderFunction,
            dropdownStylesFunction: this.customSearchDropdownStylesFunction,
            suggestionListClass: 'main-autocomplete',
            engineKey: this.swiftEngineKey,
            resultLimit: 6,
            fetchFields: {
                page: ['url', 'title', 'type']
            }
        });
    };

    ////////////////////////
    //* Render Functions
    ////////////////////////

    SearchManager.prototype.customDropdownStylesFunction = function() {
        // prevents default styles from rendering
        return {};
    };

    SearchManager.prototype.customSearchDropdownStylesFunction = function($this) {
        // styles search box on 404 and search page

        var config = $this.data('swiftype-config-autocomplete');
        var $attachEl = config.attachTo ? $(config.attachTo) : $this;
        var offset = $attachEl.offset();
        var styles = {
            'position': 'absolute',
            'z-index': 9999,
            'left': offset.left
        };
        if (config.setWidth) {
            styles['width'] = $attachEl.outerWidth() - 2;
        }
        return styles;
    };

    SearchManager.prototype.customAutoRenderFunction = function(document_type, item) {

        // fetches data from swiftype, creates an object called postItem to store data
        // passes postItem to twig template to render resurts for AUTOCOMPLETE
        // Swiftype uses bracket notation in their code and documentation

        // get the search engine metadata and set postItem properties
        var postItem = {
            type: item['type'],
            url: item['url']
        };

        // set postItem properties from search engine results
        if (item['title']) {
            // highlight search terms if in title
            if (item.highlight['title'] !== undefined) {
                postItem.title = item.highlight['title'];
            } else {
                postItem.title = item['title'];
            }
        } else {
            postItem.title = item['type'];
        }

        // render results twig
        var outputResult = twig({
            ref: "autocomplete_result"
        }).render({
            'postItem': postItem
        });

        return outputResult;
    };

    SearchManager.prototype.customRenderFunction = function(document_type, item) {

        // fetches data from swiftype, creates an object postItem to store data
        // passes postItem to twig template to render resurts on SEARCH PAGE

        var outputResult;
        var postItem = {};

        try {
            if (item['info'].length > 0) {
                // get the meta json from search engine and parse it to postItem
                postItem = JSON.parse(item['info']);
            }
        } catch (error) {}

        // set postItem properties from search engine results
        if (item['title']) {
            // highlight search terms if in title
            if (item.highlight['title'] !== undefined) {
                postItem.title = item.highlight['title'];
            } else {
                postItem.title = item['title'];
            }
        } else {
            postItem.title = item['type'];
        }

        // change subhead to highlighted body text if not topic page
        if (item['type'] !== "Topic Page") {
            if (item.highlight['body']) {
                postItem.subh = item.highlight['body'];
            }
        }

        if (item['type']) {
            postItem.pageType = item['type'];
        }

        if (item['url']) {
            postItem.url = item['url'];
        }
        postItem.post_type = "post";

        // render results twig
        outputResult = twig({
            ref: "search_result"
        }).render({
            'postItem': postItem
        });

        return outputResult;
    };

    SearchManager.prototype.customPreRenderFunction = function() {

        // redirects to search page when user searches from any other page

        var query = "";

        if (Swiftype.currentQuery !== undefined) {
            query = Swiftype.currentQuery;
        } else {
            query = $(".nav-search-input").val();
        }
        window.location.replace("/search/" + query + "#stq=" + query + "&stp=1");
        return false;
    };

    var customLoadingFunction = function(query, $resultContainer) {

        $resultContainer.html('<div class="loader-mod"></div>');

        $('.loader-mod').append('<div></div>', '<div></div>', '<div></div>')
            .children().map(function(index) {
                $(this).addClass('loader loader-' + (index + 1));
            });
    };

    SearchManager.prototype.customPostRenderFunction = function(data) {

        // Runs after results are rendered.
        // Display total result count or display "sorry no results message"

        var totalResultCount = 0;
        var $resultContainer = this.getContext().resultContainer;
        if (data['info']) {
            $.each(data['info'], function(index, value) {
                totalResultCount += value['total_result_count'];
            });
        }

        if (totalResultCount === 0) {
            $resultContainer.html('<h3 class="search-results-msg">Sorry, we couldn&rsquo;t find any results for&nbsp;your&nbsp;search</h3>');
        }

        var resultString = totalResultCount + " results for '" + Swiftype.currentQuery + "'";
        $('.search-hdr-count').html(resultString);
    };

    SearchManager.prototype.customRenderResultsFunction = function(ctx, data) {

        // Main results function runs when user submits query
        // calls other render functions to display individual results
        // renders all results in resultContainer

        var $resultContainer = ctx.resultContainer,
            config = ctx.config;

        $resultContainer.html('');

        $.each(data.records, function(documentType, items) {
            $.each(items, function(idx, item) {
                ctx.registerResult($(config.renderFunction(documentType, item)).appendTo($resultContainer), item);
            });
        });

        this.customRenderPagination = function(ctx, resultInfo) {

            // renders the pagination data and appends it to the search results container element

            var maxPagesType, maxPages = -1;
            $.each(resultInfo, function(documentType, typeInfo) {
                if (typeInfo.num_pages > maxPages) {
                    maxPagesType = documentType;
                    maxPages = typeInfo.num_pages;
                }
            });
            var currentPage = resultInfo[maxPagesType].current_page,
                totalPages = resultInfo[maxPagesType].num_pages;
            var pages = this.renderPaginationForType(maxPagesType, currentPage, totalPages);
            $(ctx.resultContainer).append(pages);
        };

        this.renderPaginationForType = function(type, currentPage, totalPages) {

            var pages,
                previousPage,
                nextPage;

            var pageData = {};

            if (currentPage !== 1) {
                previousPage = currentPage - 1;
            }
            if (currentPage < totalPages) {
                nextPage = currentPage + 1;
            }
            pageData = {
                currentPage: currentPage,
                totalPages: totalPages,
                previousPage: previousPage,
                nextPage: nextPage
            };

            pages = twig({
                ref: "page_numbers"
            }).render({
                'pageData': pageData
            });

            return pages;
        };

        this.customRenderPagination(ctx, data.info);
    };

    searchManager.init();

})(jQuery, twig, Swiftype);
