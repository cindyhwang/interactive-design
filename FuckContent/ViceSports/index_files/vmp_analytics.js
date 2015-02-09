define(function(){
	var vmp_analytics = {},
	_tracker = {
		interval : null,
		interval_time : 55000, //In milliseconds
		title : 'Page Tracker',
		url : '/tracker',
		accounts : [
			'UA-37305051-1'
		]
	},
	_vmp_analytics = {
		can_log : false,
		total_analytics_accounts : TOTAL_ANALYTICS_ACCOUNTS || 0
	};

	_vmp_analytics.init = function init(){
		if(window.ga !== undefined) this.can_log = true;

		if(this.can_log){
			//Create GA accounts
			for(var i = 0, len = _tracker.accounts.length; i < len; i++){
				ga('create', _tracker.accounts[i], 'auto', {
					name : 'tracker_' + (_vmp_analytics.total_analytics_accounts + i + 1)
				});
			}
		}
	};

	_vmp_analytics.recheck = function recheck(){
		if(window.ga !== undefined && window.ga){
			this.can_log = true;
			return true;
		}

		return false;
	};

	vmp_analytics.logEvent = function logEvent(category, action, label, value, interactive, log_all, callback){
		if(!callback) callback = function(){};

		//Check if Google Analytics is loaded and we can log
		//Check if required parameters have been supplied
		if(!_vmp_analytics.can_log || !_vmp_analytics.recheck() ||
			!category || !category.toString().length ||
			!action || !action.toString().length) return callback.call(vmp_analytics, true);

		label = label && label.toString().length ? label.toString() : null;
		value = value && !isNaN(Number(value)) ? parseInt(value, 10) : null;

		var data = {
			hitType : 'event',
			eventCategory : category,
			eventAction : action,
			nonInteraction : interactive !== undefined ?
				!!interactive : false
		};

		if(label) data.eventLabel = label;
		if(value) data.eventValue = value;

		try{
			for(var i = 0, len = _vmp_analytics.total_analytics_accounts; i < len; i++){
				ga('tracker_' + (i + 1) + '.send', data);
			}

			if(log_all === true){
				i = 0;
				len = _tracker.accounts.length;

				for( ; i < len; i++){
					ga('tracker_' + (_vmp_analytics.total_analytics_accounts + i + 1) + '.send', data);
				}
			}

			return callback.call(vmp_analytics, null, data);
		}catch(err){
			return callback.call(vmp_analytics, true, err);
		}
	};

	vmp_analytics.startTracker = function(){
		//Check if Google Analytics is loaded and we can log
		if(!_vmp_analytics.can_log || !_vmp_analytics.recheck()) return;

		//Clear interval if set
		if(_tracker.interval) clearInterval(_tracker.interval);

		//Set interval
		_tracker.interval = setInterval(function(){
			var data = {
				'hitType' : 'pageview',
				'title' : _tracker.title,
				'page' : _tracker.url
			};

			try{
				for(var i = 0, len = _vmp_analytics.total_analytics_accounts; i < len; i++){
					ga('tracker_' + (i + 1) + '.send', data);
				}

				i = 0;
				len = _tracker.accounts.length;

				//Send page view events to all accounts
				for( ; i < len; i++){
					ga('tracker_' + (_vmp_analytics.total_analytics_accounts + i + 1) + '.send', data);
				}
			}catch(err){

			}
		}, _tracker.interval_time);
	};

	_vmp_analytics.init();

	return vmp_analytics;
});
