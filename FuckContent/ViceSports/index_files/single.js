require([
	'site_script',
	SITE_PREFIX + '/shared/non_concat/vmp_analytics',
	'accent_strip',
	'side_scroll_tracker',
	'collapsible_share_widget',
	'sharing_widget',
	'subscribe_widget'
], function(Site_Script, Vmp_Analytics, Accent_Strip, Side_Scroll_Tracker, Collapsible_Share_Widget, Sharing_Widget, Subscribe_Widget){
	var Article_Accent_Strip = Accent_Strip.extend({
		setVariables : function(){
			Accent_Strip.prototype.setVariables.call(this);

			this.h1 = this.$('h1');

			this.h1_new = this.h1.clone().css({
				position : 'absolute',
				'top' : 0,
				'left' : 0,
				'text-align' : 'left',
				'opacity' : 0
			}).appendTo(this.h1.parent());

			this.span = this.h1_new.find('span').eq(0);

			this.em_padding = 1.55;
		},

		setAccentWidth : function(){
			this.accent.css('width', this.getContainerWidth() + 'rem');

			this.h1.addClass('accent-set');
		}
	}),
	Article_Site_Script = Site_Script.extend({
		setAccentStrips : function(){
			this.accent_strip_els.each(function(i, el){
				var $el = $(el),
				accent_strip = new Article_Accent_Strip({
					el : $el,
				});

				this.accent_strips.push(accent_strip);
			}.bind(this));
		}
	}),
	App = Backbone.View.extend({
		el : $('.article-single-container'),

		events : {
			'click .sidebar-most-popular .item a' : 'mostPopularItemClicked',
			'click .recommended-widget .item a' : 'recommendedItemClicked',
			'click .topics-widget .topics a' : 'tagItemClicked'
		},

		initialize : function(){
			this.setVariables();

			this.setVisibleDate();
		},

		setVariables : function(){
			this.collapsible_share_widget = new Collapsible_Share_Widget();

			this.site_script = new Article_Site_Script();

			this.is_single_column = this.$el.hasClass('single-column');

			this.article_content_container = this.$('.article-content-container');
			this.article_content_inner = this.$('.article-content-inner');

			// article nav socials
			this.article_share_widget_el = this.$('.article-header-share-widget');

			this.article_share_widget = new Sharing_Widget({
				el : this.article_share_widget_el
			});

			// subscribe widget
			this.subscribe_widget_el = this.$('.subscribe-widget');

			if(this.subscribe_widget_el.length){
				this.subscribe_widget = new Subscribe_Widget({
					el : this.subscribe_widget_el
				});
			}

			// single col vars
			this.horizontal_single_col_share_el = this.$('.horizontal-single-col-share-widget');

			if(this.horizontal_single_col_share_el.length){
				this.horizontal_single_col_share_widget = new Sharing_Widget({
					el : this.horizontal_single_col_share_el
				});
			}

			this.resp_vid_wrapper = this.$('.resp-video-wrapper');
			this.read_more = this.$('.read-more');

			this.visible_date = this.$('.publish-time');
			this.publish_date = this.visible_date.attr('data-publish-date');

			this.article_most_popular_item = this.$('.article-most-popular .item');
			this.recommended_item = this.$('.recommended-widget .item');
			this.article_tag = this.$('.topics-widget .topic');
		},

		mostPopularItemClicked : function(e){
			this.site_script.analyticsItemClicked(e, this.article_most_popular_item, 'ArticleMostPopular');
		},

		recommendedItemClicked : function(e){
			this.site_script.analyticsItemClicked(e, this.recommended_item, 'ArticleRecommended');
		},

		tagItemClicked : function(e){
			this.site_script.analyticsItemClicked(e, this.article_tag, 'ArticleTag');
		},

		setVisibleDate : function(){
			if(!this.publish_date) return;

			this.publish_date = new Date(this.publish_date * 1000);

			var str = this.publish_date.getMonthName();

			str += ' ' + this.publish_date.getDate();
			str += ', ' + this.publish_date.getFullYear();
			str += ' | ';
			str += this.publish_date.getHours() > 12 ?
				this.publish_date.getHours() - 12 :
					(this.publish_date.getHours() === 0 ?
						12 : this.publish_date.getHours());
			str += ':' + this.publish_date.getMinutesPadded();
			str += this.publish_date.getHours() > 11 ? ' PM' : ' AM';

			this.visible_date.html(str);
		}
	});

	$(function(){
		var app = new App();
	});
});
