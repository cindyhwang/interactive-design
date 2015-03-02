// Sonobi Morpheus

var sbi_morpheus = {
	loc: '//apex.go.sonobi.com',
	timeout: 600,
	registration: {},
	dfpVariables: {},
	synchronous: true,
	pings: {
		timeout: null,
		user_sync: '//sync.go.sonobi.com/uc.js'
	},
	
	setKeys: function () {
		try {
			var slots = sbi_morpheus.dfpVariables.pubads.getSlots();
			for (var i = 0; i < slots.length; i++) {
				var slotId = slots[i].getSlotId().getDomId();
				for (var keyObj in slots[i]) {
					if (typeof slots[i][keyObj] == 'object' && slots[i][keyObj] != null && 'sbi_aid' in slots[i][keyObj]) {						
						for (var key in slots[i][keyObj]) {
							if(key.substr(0, 3) == 'sbi') delete slots[i][keyObj][key];
						}
						break;
					}
				}
				if (slotId in window.sbi_trinity) {
					for (var key in window.sbi_trinity[slotId]) {
						slots[i].setTargeting(key, window.sbi_trinity[slotId][key]);
					}
				}
			}
			var dc = window.sbi_dc || '';
			sbi_morpheus.dfpVariables.pubads.setTargeting('sbi_dc', dc);
		} catch (e) {}
	},

	launch: function (src, callback) {
		if (src == null) return;
		if (callback == null) callback = function () {};
		try {
			document.write("<scr" + "ipt type='text/javascript' src='"+src+"'></scr" + "ipt>");
			callback();
			callback = function () {};
		} catch (e) {}
	},

	register: function (dfpid, sid) {
		sbi_morpheus.registration[dfpid] = sid;
	},

	single: function (dfpid, sid) {
		sbi_morpheus.registration = {};
		sbi_morpheus.registration[dfpid] = sid;
		sbi_morpheus.callOperator();
	},

	callOperator: function () {
		var pubads = googletag.service_manager_instance;
		for (var services in googletag.slot_manager_instance)
			if ('publisher_ads' in pubads[services]) break;
		sbi_morpheus.dfpVariables.pubads = 'publisher_ads' in pubads[services] ? pubads[services].publisher_ads : null;
		sbi_morpheus.launch(
			sbi_morpheus.loc + '/trinity.js?key_maker=' +
			JSON.stringify(sbi_morpheus.registration) + '&s=' +
			Math.floor(Math.random() * 1000)
		);
	}
};