(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '72',
      INTERACTION_TIMER: '73',
      INTERACTIVE_IMPRESSION: '74',
      MANUAL_CLOSE: '75',
      BACKUP_IMAGE_IMPRESSION: '76',
      EXPAND_TIMER: '77',
      FULL_SCREEN: '78',
      VIDEO_PLAY: '79',
      VIDEO_VIEW_TIMER: '80',
      VIDEO_COMPLETE: '81',
      VIDEO_INTERACTION: '82',
      VIDEO_PAUSE: '83',
      VIDEO_MUTE: '84',
      VIDEO_REPLAY: '85',
      VIDEO_MIDPOINT: '86',
      VIDEO_STOP: '87',
      VIDEO_UNMUTE: '88',
      DYNAMIC_CREATIVE_IMPRESSION: '',
      HTML5_CREATIVE_IMPRESSION: ''
    },
    exitEvents: [
      {
        name: 'article_01',
        reportingId: '27935051',
        url: 'http://ssl.www8.hp.com/hpmatter/issue-no-3-winter-2015/spotlight-chai-clinton-health-access-initiative',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'article_02',
        reportingId: '27936011',
        url: 'https://ssl.www8.hp.com/hpmatter/issue-no-3-winter-2015/spotlight-counsyl-bringing-genetic-disorder-testing-masses',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'article_03',
        reportingId: '27936251',
        url: 'http://ssl.www8.hp.com/hpmatter/issue-no-3-winter-2015/health-care-informatics-big-data-analytics-impact-patient-care',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'article_04',
        reportingId: '27936491',
        url: 'https://ssl.www8.hp.com/hpmatter/issue-no-3-winter-2015/accidental-disruptor-medical-billing-software-cloud',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'article_05',
        reportingId: '27936731',
        url: 'http://ssl.www8.hp.com/hpmatter/issue-no-3-winter-2015/spotlight-mhealth-mobile-phone-health-technology',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'article_06',
        reportingId: '27936971',
        url: 'https://ssl.www8.hp.com/hpmatter/issue-no-3-winter-2015/prescription-change-non-profit-pharmaceutical-company-comes-through',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'article_07',
        reportingId: '27937211',
        url: '',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'article_08',
        reportingId: '27937451',
        url: '',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'article_09',
        reportingId: '27937691',
        url: '',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'article_10',
        reportingId: '27935291',
        url: '',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'background',
        reportingId: '26552891',
        url: 'http://ad.doubleclick.net/ddm/clk/287140266;114064122;s',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'carousel_header',
        reportingId: '27937931',
        url: '',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'more stories',
        reportingId: '27938171',
        url: '',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'video',
        reportingId: '27938411',
        url: '',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
    ],
    childFiles: [
      {
        name: 'collapsed_bg.png',
        url: '/ads/richmedia/studio/pv2/35274126/20150108120331983/collapsed_bg.png',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: '970x90.js',
        url: '/ads/richmedia/studio/pv2/35274126/20150108120331983/970x90.js',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '35271562',
        artworkType: 'HTML5',
        displayType: 'EXPANDABLE',
        width: '970',
        height: '415',
        servingPath: '/ads/richmedia/studio/pv2/35274126/20150108120331983/pushdown.html',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: null,
        htmlArtworkTypeData: {
          isTransparent: false,
          sdkVersion: '01_47' // Duplicating sdk version in subsequent field as version format not the same.
        },
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: {
          collapsedRect: {
            left: 0,
            top: 0,
            width: 970,
            height: 90
          },
          isPushdown: true,
          pushdownAnimationTime: 1,
          expansionMode: 'NORMAL'
        },
        imageGalleryTypeData: null,
        pageSettings:{
          hideDropdowns: false,
          hideIframes: false,
          hideObjects: false,
          updateZIndex: true
        },
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'html_';
  var rendererFormat = 'expanding';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '74799953891';
  var adId = '0';
  var templateVersion = '200_65';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
