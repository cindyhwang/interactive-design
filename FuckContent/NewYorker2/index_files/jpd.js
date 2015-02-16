/*BANNER WRAPPER */

var jpsecure = (window.location.protocol === 'https:');

if(typeof jpActiveBanners == "undefined") jpActiveBanners = new Array(); 
var fiddefined = (typeof window.fid != "undefined" && window != window.top);
var jpBannerIdGlobal = (fiddefined) ? window.fid : Math.floor(Math.random() * 100000000);
var fid = (fiddefined) ? window.fid : null;
var qfid = (fiddefined) ? true : false;

if(typeof jpUnloadUnits == "undefined") {
	jpUnloadUnits = function() {	
		// Unset the loaded variable
		loadedJp_23572 = null;
		delete loadedJp_23572;
		
		if(typeof JP != "undefined") {
			JP("#jp_swap_embed").remove();
			JP("#jp_overlay").remove();
			JP("#jpsidekick").remove();
			JP("#jppeelbackexpanded").remove();
			JP("#jppeelbackpreview").remove();
			JP("#jpintoverlay").remove();
			JP("#jpeditorialunit").remove();
			JP("#jpplatform").remove();
			JP("#jpd_leftwell").remove();
			JP("#jpd_rightwell").remove();
			JP("#jpsuperheader").remove();
		    JP("#supervideoplayerwrapper").remove();
		    JP("#videowallplayerwrapper").remove();
		    JP(".jpinlineunit").each(function() {
		    	JP(this).remove();
		    });
		    
		    
		    
		    JP("[id^=jpplatform_23572]").each(function() {
		    	if(JP(this).html().length > 0) {
		    		var f = JP(this).attr("id").match(/\d+$/);		    		
		 			JP("#jpiframe_23572_" + f).remove();
		    	}
		    });
		    
		    for(k in jpActiveBanners) {
		    	jpActiveBanners[k] = null;
		    	delete jpActiveBanners[k];
		    }
		    
		    JP(document).trigger("jpUnloadUnits");
	    }
	};
}


jpActiveBanners[jpBannerIdGlobal] = function(jpBannerId) { 

if(typeof console == "undefined") {
	console = {
		log: function() {},
		warn: function() {},
		info: function() {},
		error: function() {},
		debug: function() {},
		time: function() {},
		timeEnd: function() {},
		count: function() {}, 
		trace: function() {}, 
		dir: function() {},
		dirxml:  function() {},
		group: function() {},
		groupEnd: function() {},
		groupCollapsed: function() {},
		exception:  function() {} 
		
	};
	/*(function(){var g=window.debug||/debug=true/.test(document.location.href)||false,e=window.loglimit||299;window.loglimit=e;window.console||(console={});var k=function(){for(var b="info,error,log,warn".split(","),a=0;a<b.length;a++){var c=b[a],d="_"+b[a];console[d]=console[c];console[c]=function(){var j=d;return function(){e--;e==0&&console._log("***LOG LIMIT OF "+loglimit+" HAS BEEN REACHED***");e<1||console[j](Array.prototype.slice.call(arguments).join(" "))}}()}try{console.clear()}catch(m){}},l=
function(){for(var b="info,error,log,warn".split(","),a=0;a<b.length;a++)(function(){var c=b[a],d="_"+b[a];console[d]=console[c];console[c]=function(){console[d](Array.prototype.slice.call(arguments).join(" "))}})()},h=function(b){b=b.split(",");for(var a=0;a<b.length;a++)console[b[a]]=function(){}},i=function(){for(var b="debug,time,timeEnd,assert,count,trace,dir,dirxml,group,groupEnd,groupCollapsed,exception".split(","),a=0;a<b.length;a++)console[b[a]]||(console[b[a]]=function(){})},f=window.navigator.userAgent;
if(g&&/Trident/.test(f)){k();h("debug,time,timeEnd,assert,count,trace,dir,dirxml,group,groupEnd,groupCollapsed,exception")}else if(g&&/WebKit|iPad|iPhone/.test(f)){l();i()}else/IE/.test(f)&&!/Trident/.test(f)||!g||!window.console?h("debug,time,timeEnd,assert,count,trace,dir,dirxml,group,groupEnd,groupCollapsed,exception,info,error,log,warn"):i()})();*/

} else if(typeof console.log == "undefined") {
	console.log = function () {};
}

var jpSiteWidth = parseInt("0".replace("px",""));

function jpGetParameterByName( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null ) {
    return "";
  } else {
    return results[1];
  }
};

function jpGetQueryVariable(variable, query) { 
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
}; 


var scriptSource = (function(scripts) {
    var scripts = document.getElementsByTagName('script');
    var s = scripts[scripts.length - 1];
    
    if(!s || typeof s.getAttribute == "undefined" || !s.getAttribute('src') || !s.getAttribute('src').match(/^http:\/\/.*?\.jetpackdigital/) || !s.getAttribute('src').match(/jpd/) || s.getAttribute('src').indexOf("23572") == -1) {
    	for(var i = scripts.length; i >= 0; i--) {
    		s = scripts[scripts.length - i];
    		if(s && typeof s.getAttribute != "undefined" && s.getAttribute('src') && s.getAttribute('src').match(/^http:\/\/.*?\.jetpackdigital/) && s.getAttribute('src').match(/jpd/) && s.getAttribute('src').match(/lineitem/) && s.getAttribute('src').indexOf("23572") > -1) {
    			break;
    		} else {
    			s = scripts[scripts.length - 1]; 
    		}
    	}
    }

    if (s && typeof s.getAttribute != "undefined" && s.getAttribute.length !== undefined) {
        return s.src;
    } 

    if(s && typeof s.getAttribute != "undefined") {
    	return s.getAttribute('src', -1);
    } else {
    	return null;
    }
}());

//console.log("BANNER SCRIPT SOURCE (23572): " + scriptSource);

var jpiframe = false;
jp_dma = 1200;

/* IGNORE IBUST: 0 */ 
 

if(window!=window.top && ((typeof inDapIF != "undefined" && inDapIF == true) || (typeof jpIF != "undefined" && jpIF == true))) {
	jpiframe = true;
	var scr = "http://ads.jetpackdigital.com/lineitems/23572/jpd.js";
	var script = document.createElement("script");
	script.type = "text/javascript";
	var u = null;
	if(scriptSource.indexOf("?u=") > -1) {	
		u = scriptSource.substr(scriptSource.indexOf("?u=") + 3);
	}  else if(scriptSource.indexOf("&u=") > -1) {
		u = scriptSource.substr(scriptSource.indexOf("&u=") + 3);	
	}
	
	if(typeof fid == "undefined" || (fid != jpBannerId && !qfid)) {
     	fid = jpBannerId;
    }
    
    var query = "f=" + fid;
    	
	if(u) {
		query += "&u=" + u;	 
	}
	
	var p = null;
	if(scriptSource.indexOf("?p=") > -1) {	
		p = scriptSource.substr(scriptSource.indexOf("?p=") + 3);
	}  else if(scriptSource.indexOf("&p=") > -1) {
		p = scriptSource.substr(scriptSource.indexOf("&p=") + 3);	
	}
	
	if(p) {
		query += "&p=" + p;
	}
        
	scr = scr + "?" + query;	
	script.src = scr;		
	
	var arrFrames = parent.document.getElementsByTagName("IFRAME");
	for (var i = 0; i < arrFrames.length; i++) {
		if (arrFrames[i].contentWindow == window) {
 			var jpplatdiv = document.createElement("div");
 			jpplatdiv.id = "jpplatform_23572_" + fid;
 			jpplatdiv.rel = "jpplatform_23572_" + fid;
 			jpplatdiv.className = "jpplatform_23572";
 			jpplatdiv.fid = fid;
 			if(u) {
 				jpplatdiv.u = u;
 			}
 			
 			if(p) {
 				jpplatdiv.p = p;
 			}
 			arrFrames[i].parentNode.appendChild(jpplatdiv);
 			arrFrames[i].parentNode.height = "auto";
 			 			
		    var iframe_rect = arrFrames[i].getBoundingClientRect();
			jpplatdiv.style.position = "absolute";
			jpplatdiv.style.top = iframe_rect.top + "px";
            
            var pframe_23572 = arrFrames[i];
            parent.jpHideBannerFrame = function() {
            	pframe_23572.style.display = "none";
				jpplatdiv.style.position = "relative";
				jpplatdiv.style.top = "auto";
		
            };
            
            parent.jpHideBannerFrame_23572 = function() {
            	pframe_23572.style.display = "none";
				jpplatdiv.style.position = "relative";
				jpplatdiv.style.top = "auto";
            };

                               
			arrFrames[i].parentNode.appendChild(script);
	 		break;
	 	}
	}
	

} else if(0 && window!=window.top && typeof(requestedLineItemXDM) == "undefined") {

	// This is an iframe
	jpiframe = true;
	var iframesrc = location.href;
	var hostname = document.referrer.match(/(http.*?\/\/.*?)\//);
	if(hostname == null) {
		hostname = new Array(2);
		hostname[1] = location.href;
	}

	var scrs = window.document.getElementsByTagName("script");
	var scr = "http://ads.jetpackdigital.com/lineitems/23572/jpd.js";
	
		
	iframesrc="";
	
			var xdm = hostname[1] + "/jpd/jpxdm.html?ifr=" + escape(iframesrc);
		
	if(scriptSource.indexOf("?") > -1) {
		var qs = scriptSource.substr(scriptSource.indexOf("?") + 1);
		var jpi = jpGetQueryVariable("jpi",qs);
		if(jpi) {
			xdm = hostname[1] + jpi + "?ifr=" + escape(iframesrc);
		}
	}
	
		
		
		
	if(typeof jpli != "undefined")  {
		xdm += "&jpli=" + jpli;
	} else {
		xdm += "&jpli=23572";
	}
	
	if(typeof fid == "undefined" || (fid != jpBannerId && !qfid)) {
     	fid = jpBannerId;
    }
	xdm += "&fid=" + fid;
	
		
	
	//var u = jpGetQueryVariable("u",scriptSource.substr(scriptSource.indexOf("?") + 1));
	var u = null;
	if(scriptSource.indexOf("?u=") > -1) {	
		u = scriptSource.substr(scriptSource.indexOf("?u=") + 3);
	}  else if(scriptSource.indexOf("&u=") > -1) {
		u = scriptSource.substr(scriptSource.indexOf("&u=") + 3);	
	}
	
	var p = null;
	if(scriptSource.indexOf("?p=") > -1) {	
		p = scriptSource.substr(scriptSource.indexOf("?p=") + 3);
	}  else if(scriptSource.indexOf("&u=") > -1) {
		p = scriptSource.substr(scriptSource.indexOf("&p=") + 3);	
	}
	
	if(u) {
		xdm += "&u=" + escape(u);
		xdm +=  "&src=" + escape(scr + "?u=" + u);
	} else if(p) {
		xdm += "&p=" + escape(p);
		xdm +=  "&src=" + escape(scr + "?p=" + p);
	} else {
		xdm +=  "&src=" + escape(scr);
	}
	
	try {		
		var script = document.createElement("script");
		script.type = "text/javascript";
		
		var query = "f=" + fid;
	
		if(u) {
			query += "&u=" + escape(u);	 
		}
		
		if(p) {
			query += "&p=" + escape(p);
		}	 
        
		scr = scr + "?" + query;
		script.src = scr;	
				
		
		var arrFrames = parent.document.getElementsByTagName("IFRAME");
		
		try {
			parent.window.fid = fid;
		} catch(ex) {
			//console.log("COULDN'T WRITE PARENT FID");
		}
		
		
		var jpfi = false;
		for (var i = 0; i < arrFrames.length; i++) {
 			if (arrFrames[i].contentWindow == window) {
 				 jpfi = true;
 				 /*0*/
 				 	 				 		
 				var jpplatdivfid = document.createElement("div");
 				jpplatdivfid.id = "jpplatform_23572_" + fid;
 				jpplatdivfid.rel = "jpplatform_23572_" + fid;
 				jpplatdivfid.className = "jpplatform_23572";
 				jpplatdivfid.fid = fid;
 				if(u) {
 					jpplatdivfid.u = u;
 				}
 				arrFrames[i].parentNode.appendChild(jpplatdivfid);
 							
 				/*var jpplatdiv = document.createElement("div");
 				jpplatdiv.id = "jpplatform_23572";
 				jpplatdiv.rel = "jpplatform_23572";
 				arrFrames[i].parentNode.appendChild(jpplatdiv);*/
 				arrFrames[i].parentNode.height = "auto";
 				arrFrames[i].parentNode.appendChild(script);
	 		}
		}
	} catch(e) {
		if(typeof console != "undefined") {
			//console.log("ERROR WRITING: " + e.message); 
		}	
		document.write('<iframe id="jp_xdm" src="' + xdm + '" height="1" width="1" style="position: absolute;top:-999px;"></iframe>');
	}

} else if(window!=window.top) {
	// Try to write it to the top window
	
	// This is an iframe
	jpiframe = true;
	var iframesrc = location.href;
	var hostname = document.referrer.match(/(http.*?\/\/.*?)\//);
	if(hostname == null) {
		hostname = new Array(2);
		hostname[1] = location.href;
	}

	var scrs = window.document.getElementsByTagName("script");
	var scr = "http://ads.jetpackdigital.com/lineitems/23572/jpd.js";
	
	
	
	if(typeof fid == "undefined" || (fid != jpBannerId && !qfid)) {
     	fid = jpBannerId;
    }
	
	//var u = jpGetQueryVariable("u",scriptSource.substr(scriptSource.indexOf("?") + 1));
	var u = null;
	if(scriptSource.indexOf("?u=") > -1) {	
		u = scriptSource.substr(scriptSource.indexOf("?u=") + 3);
	}  else if(scriptSource.indexOf("&u=") > -1) {
		u = scriptSource.substr(scriptSource.indexOf("&u=") + 3);	
	}
	
	var p = null;
	if(scriptSource.indexOf("?p=") > -1) {	
		p = scriptSource.substr(scriptSource.indexOf("?p=") + 3);
	}  else if(scriptSource.indexOf("&p=") > -1) {
		p = scriptSource.substr(scriptSource.indexOf("&p=") + 3);	
	}
	
	try {		
		var script = document.createElement("script");
		script.type = "text/javascript";
		
		var query = "f=" + fid;
        
		scr = scr + "?" + query;
		script.src = scr;	
				
		
		var arrFrames = parent.document.getElementsByTagName("IFRAME");
		
		try {
			parent.window.fid = fid;
		} catch(ex) {
			//console.log("COULDN'T WRITE PARENT FID");
		}
		
		
		var jpfi = false;
		for (var i = 0; i < arrFrames.length; i++) {
 			if (arrFrames[i].contentWindow == window) {
 				 jpfi = true;
 				arrFrames[i].style.display = "none";
	 				 		
 				var jpplatdivfid = document.createElement("div");
 				jpplatdivfid.id = "jpplatform_23572_" + fid;
 				jpplatdivfid.rel = "jpplatform_23572_" + fid;
 				jpplatdivfid.className = "jpplatform_23572";
 				jpplatdivfid.fid = fid;
 				if(u) {
 					jpplatdivfid.u = u;
 				}
 				if(p) {
 					jpplatdivfid.p = p;
 				}
 				arrFrames[i].parentNode.appendChild(jpplatdivfid);
 				arrFrames[i].parentNode.height = "auto";
 				arrFrames[i].parentNode.appendChild(script);
	 		}
		}
	} catch(ex) {
		// Force this to write since it's in an iframe already
		fid = 23572;
		jpiframe = false;
	}
} else {
	fid = jpBannerId;
}


if(1 || (typeof jploaded == "undefined" && !jpiframe)) {

if(!jpiframe) {

var plimg = new Image();
var plord = Math.floor(Math.random() * 100000000000);
plimg.src = "http://jptracking.elasticbeanstalk.com/jpt?ord=" + plord + "&lid=23572&c=0&t=preload&u=http://adscdn.jetpackdigital.com/tracking_pixel.gif";





// See if the FID has been passed on the script line

if(scriptSource.indexOf("?f=") > -1) {	
	fid = scriptSource.substr(scriptSource.indexOf("?f=") + 3);
	fid = fid.split("&")[0];
	qfid = true;
}  else if(scriptSource.indexOf("&f=") > -1) {
	fid = scriptSource.substr(scriptSource.indexOf("&f=") + 3);	
	fid = fid.split("&")[0];
	qfid = true;	
}

jpparentpage = location.href;
jploaded = true; 

// Possible units to check for conflict
jpclickableskin = false;
jpsuperheader = false;
jpactiveskin = false;
jpactiveskinandoverlay = false;
jpactiveskincombined = false;
jpbannerunit = false;
jpeditorialunit = false;
jpinterstitialoverlay = false;
jpsiteoverlay = false;
jpswapassetunit = false;
jpsidekick = false;
jpinlineunit = false;
jppeelback = false;
jpsupervideo = false;
jpvideowall = false;
jpactivewall = false;
jpexpandablefooter = false;
jpmobileoverlay = false;
jpmobilebanner = false;
jpmobilebannerandoverlay = false;
jpmobileadhesion = false;
jpnull = null;

jp_skin = false;
jp_clickableskin = false;
jp_superheader = false;
jp_bannerunit = false;
jp_activeskin = false;
jp_activeskinandoverlay = false;
jp_activeskincombined = false;
jp_sidekick = false;
jp_editorialunit = false;
jp_interstitialoverlay = false;
jp_inlineunit = false;
jp_siteoverlay = false;
jp_swapassetunit = false;
jp_peelback = false;
jp_videowall = false;
jp_activewall = false;
jp_expandablefooter = false;
jp_mobileoverlay = false;
jp_mobilebanner = false;
jp_mobilebannerandoverlay = false;
jp_mobileadhesion = false;
jp_null = null;

jp_customunitfunctions = new Array();
jp_customunitindex = 0;

jp_clickthroughmutex = false;

jp_loadingDma = false;

jpDomain = null;
if(!jpDomain) {
	jpDomain = document.domain;
}

var m = jpDomain.match(new RegExp("(.*?)\.((com|net|org|info|coop|int|co\.uk|org\.uk|ac\.uk|uk|tv|me))$"));
if(m) {
	var n = m[1].split(".");
	var o = n[n.length-1];
	jpDomain = o + "." + m[2];
}

var jpCurrentTime = new Date();
var jpmonth = jpCurrentTime.getMonth() + 1;
jpmonth = (jpmonth < 10) ? "0" + jpmonth : jpmonth;
var jpday = jpCurrentTime.getDate();
jpday = (jpday < 10) ? "0" + jpday : jpday;
var jpyear = jpCurrentTime.getFullYear(); 
var jpCurrentDay = jpyear + "-" + jpmonth + "-" + jpday;

if(typeof jpord == "undefined") { 
	jpord = Math.floor(Math.random()*100000000000);
};

if(typeof ord == "undefined") {
	ord = jpord;
} else {
	jpord = ord;
};

var jpBodyReadyInterval = null;
var jpBodyAvailable = false;
function jpBodyReady(func) {
	JP(document).ready(function() { func(); });
};

function jpElementReady(elementId,func) {	
	if(JP("#" + elementId.replace(/#/,"")).length > 0) {
		func();
	} else {
		setTimeout(function() { jpElementReady(elementId, func); }, 100);
	}
};

var anchorelem = null;
var toplevelelem = null;

jpFindMainContentArea = function(elem) {
    var ww = JP(window).width();
    var likelyelem = null;
    var likelyelemwidth = 0;
    var likelyelemlength = 0;
    var likelyelemfull = false;
    JP(elem).children().each(function() {
         if(JP(this).attr("id") == "jpsuperheader") return;
         var cw = JP(this).width();
         var cl = JP(this).html().length;
         if(cl  > likelyelemlength) {
              likelyelemlength = cl;
              likelyelem = JP(this);
              if(cw > 700 && cw < ww) {
                  likelyelemfull = false;
              } else if(cw >= ww) {
                 likelyelemfull = true;
              }
         }
    });
    
    if(likelyelemfull) {
        if(!toplevelelem) {
            toplevelelem = likelyelem;
        }
        likelyelem = jpFindMainContentArea(likelyelem);
    }
    return likelyelem;
};  

function jpLockClickThrough() {
	jp_clickthroughmutex = true;
};

function jpReleaseClickThrough() {
	jp_clickthroughmutex = false;
};

function jpCanClickThrough() {
	if(jpclickableskin && jpsupervideo) {
		return !jp_clickthroughmutex;
	} else {
		return true;
	}
};

function jpGenerateInlineStyles(style_id) {
	var cssstring = JP(style_id).html(); 

	var cssblocks = cssstring.split("}");
	for(i = 0; i < cssblocks.length; i++) {
	  var cssblock = cssblocks[i];
	  
	  if(cssblock == "") {
	  	continue;
	  }
	 
	  var csscom = cssblock.split("{");
	  if(csscom[0] == "") {
	  	continue;
	  }
	  
	  
	  var csselems = csscom[1].split(";");
	  if(!csselems.length) {
	  	csselems = new Array();
	  	csselems[0] = csscom[1];
	  }
	  
	  for(j = 0; j < csselems.length; j++) {
	        if(csselems[j] != "") {
	                var cssitems = csselems[j].split(": ");
	                var cssid = JP.trim(cssitems[0]);
	               
	                var cssvalue = JP.trim(cssitems[1].replace("!important",""));
	             
	             	if(typeof document.styleSheets != "undefined" && document.styleSheets.length && typeof document.styleSheets[0].addRule != "undefined") {
	             		document.styleSheets[0].addRule(csscom[0], cssid + ":" + cssvalue);
	             	} else {
	                	//JP(csscom[0]).css(cssid,cssvalue);
	               }
	        }
	  }
	}
};

function jpLog(message) {
	
};


function jpPrettyDate(time){
	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," "));
		diff = (((new Date()).getTime() - date.getTime()) / 1000);
		day_diff = Math.floor(diff / 86400);
			
	if ( isNaN(day_diff) || day_diff >= 31 ) {
		return;
	}
			
	return day_diff <= 0 && (
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
		day_diff == 1 && "Yesterday" ||
		day_diff < 7 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
};

function jpdSupportsHtml5Storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

function jpdSetCookie( name, value, expires, path, domain, secure )
{
	if(jpdSupportsHtml5Storage() && !expires) {
		localStorage.setItem("JP:" + name, value);
	}
	
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );
	
	
	if(typeof domain == "undefined") {
		domain = document.domain;
	}
	
	var m = domain.match(new RegExp("(.*?)\.((com|net|org|info|coop|int|co\.uk|org\.uk|ac\.uk|uk|tv|me))$"));
	if(m) {
		var n = m[1].split(".");
		var o = n[n.length-1];
		domain = o + "." + m[2];
	}
	
	/*
	if the expires variable is set, make the correct
	expires time, the current script below will set
	it for x number of days, to make it for hours,
	delete * 24, for minutes, delete * 60 * 24
	*/
	if ( expires )
	{
	expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	
	document.cookie = name + "=" +escape( value ) + ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + ( ( path ) ? ";path=" + path : "" ) +( ( domain ) ? ";domain=" + domain : "" ) + ( ( secure ) ? ";secure" : "" );
};

jpdGetCookie = function( check_name ) {
	
	if(jpdSupportsHtml5Storage()) {
		var item = localStorage.getItem("JP:" + check_name);
		if(item) return item;
	}
	
	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f

	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		// now we'll split apart each name=value pair
		a_temp_cookie = a_all_cookies[i].split( '=' );


		// and trim left/right whitespace while we're at it
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

		// if the extracted name matches passed check_name
		if ( cookie_name == check_name )
		{
			b_cookie_found = true;
			// we need to handle case where cookie has no value but exists (no = sign, that is):
			if ( a_temp_cookie.length > 1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			}
			// note that in cases where cookie is initialized but no value, null is returned
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found )
	{
		return null;
	}
};

function jpGenerateUserId() {
	var userId = jpdGetCookie("jpduid");
	if(!userId) {
		// Create random number, set the cookie, and return
		var timestamp = new Date().getTime();
		var random = Math.floor(Math.random()*1000000000);
		userId = "l" + timestamp + random;
		jpdSetCookie("jpduid",userId,365);
	}
		
	return userId;
};


function jpLoadScript(scriptSrc, completeFunc) {
	var head = document.getElementsByTagName('head')[0];
  	var script= document.createElement('script');
   	script.type= 'text/javascript';
    
    script.onreadystatechange= function () {
      if (this.readyState == 'complete' || this.readyState == 'loaded') { 
      	script.onreadystatechange = null;
      	completeFunc();
      }
    };

    
    script.onload=completeFunc;

    script.src= scriptSrc;
    head.appendChild(script);
};

jpGetDatedConfig = function(config) {
	var newconfig = null;
	if(config["dates"]) {
		var currentTime = new Date();
		var month = (currentTime.getMonth() + 1 < 10) ? "0" + (currentTime.getMonth() + 1 ) : currentTime.getMonth() + 1 ;
		var day = (currentTime.getDate() < 10) ? "0" + currentTime.getDate() : currentTime.getDate();
		var year = currentTime.getFullYear();
		var date = month + "/" + day + "/" + year;
		var idate = parseInt(year + "" + month + "" + day);
		
		var od = jpGetParameterByName( "od" );
		if(od) {
			date = od;
			dateparts = date.split("/");
			idate = parseInt(dateparts[2] + "" + dateparts[0] + "" + dateparts[1]);	
		}
				var availDates = new Array();
		for(d in config["dates"]) {
			availDates.push(d);
		}
		availDates.sort();
		
		for(var i = 0; i < availDates.length; i++) {
			var dateparts = availDates[i].split("/");
			var iAvailDate = parseInt(dateparts[2] + "" + dateparts[0] + "" + dateparts[1]);
			if(typeof availableDates != "undefined") {
				if(JP.inArray(availDates[i], availableDates) == -1) {
					availableDates.push(availDates[i]);
				}
			}
			
			var iNextAvailDate = null;
			if(availDates[i+1]) {
				ndateparts = availDates[i+1].split("/");
				iNextAvailDate = parseInt(ndateparts[2] + "" + ndateparts[0] + "" + ndateparts[1]);
			}
			
			if(newconfig == null && idate >= iAvailDate && (iNextAvailDate == null || idate < iNextAvailDate)) {
				var date = availDates[i];
				newconfig = config["dates"][date];
			}	
		}
	} 
	
	if(newconfig == null) newconfig = config;

	return newconfig;
};



// Load jQuery if it isn't loaded already
var dollarFunctionHolder = null;
var jQueryFunctionHolder = null;
var jpRunningUnit = false;

function jpLoadJQuery_23572() {
		if(typeof(JP) != "undefined") {
			jpRunUnits23572();
			return;
		}
			
		if(typeof($) != 'undefined') {
			dollarFunctionHolder = $;
		} 
				
		if(typeof(jQuery) != 'undefined') {
			jQueryFunctionHolder = jQuery;
		}
		
        if((typeof(jQuery) == 'undefined' || ((parseInt(jQuery.fn.jquery.replace(/\./g,"")) < 99)?parseInt(jQuery.fn.jquery.replace(/\./g,""))*10:parseInt(jQuery.fn.jquery.replace(/\./g,""))) < 172) && typeof(JP) == 'undefined'){             
               	if(typeof(loadingJQuery) == 'undefined' || !loadingJQuery) {
               		loadingJQuery = true;
               		var jqueryhost = (jpsecure) ? "https://dn2l2rf4qf6g.cloudfront.net" : "http://adscdn.jetpackdigital.com"; 
               		jqueryhost = "http://adscdn.jetpackdigital.com"; 
               		jpLoadScript(jqueryhost + '/lib/gzip/jquery-1.7.2.min.js',function() {
        				if(jpRunningUnit) return;
        				jpRunningUnit = true;
        				
        				if(typeof(JP) == 'undefined') { 
        					JP=jQuery.noConflict(true);
        				}
        			
        				if(dollarFunctionHolder != null) {
        					$ = dollarFunctionHolder;
        				}
        				if(jQueryFunctionHolder != null) {
        					jQuery = jQueryFunctionHolder;
        				}
        				jpRunUnits23572();
        			});
        		} else {
        									var jptimeout = 100;
										
					if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
 						var ffversion=new Number(RegExp.$1);
 						if (ffversion<4) {
 							if(jptimeout < 1500) {
 								jptimeout = 1500;
 						}
 						}		
 					}
					
        			setTimeout(function() { jpLoadJQuery_23572(); }, jptimeout);
        		}
        		
        } else {
        	
			jpRunningUnit = true;
			
		    // Set JP to be used everywhere
			if(typeof(JP) == 'undefined') {
			 	JP=jQuery;
			}
			
			if(dollarFunctionHolder != null) {
				$ = dollarFunctionHolder;
			}
			if(jQueryFunctionHolder != null) {
        		jQuery = jQueryFunctionHolder;
        	}
        	
			jpRunUnits23572();   
		}
};

var jpCreativeSetPercentages23572 = new Array();
var jpCreatives23572 = new Array();
function jpAddPercentages23572(id, percentage) {
	for(i = 0; i < percentage; i++) {
		jpCreativeSetPercentages23572.push(id);
	}
}

function jpGetPercentageUnit23572() {
	var randomIndex = Math.floor(Math.random() * jpCreativeSetPercentages23572.length);
	return jpCreativeSetPercentages23572[randomIndex];
}

function jpLoadCreativeSet23572(cs_id, companion, classname) {
	var ext = (cs_id > 0) ? "_" + cs_id : "";
		JP.getScript("http://ads.jetpackdigital.com/lineitems/23572/" + companion + "/jpdli" + ext + ".js",function() {	
		var customunit = eval("new " + classname + "()");
		customunit.Init();
		customunit.ReportDelivery();
		customunit.Run();
	});
}

function jpRunUnits23572() {
	
	var loadedLineItems = new Array();
	var requestedLineItems = new Array();
		
		
	/* BEFORE CREATIVE SETS */
			 
var animatebody = false;
var siteWidth = "850px";

jpinlineunit = true;

var bannerunit_844__23572 = function() {
	// Set the lineItemId for this unit
	this.lineItemId = 23572;
	
	var jpActiveBanner = null;
	var jpActiveFID = null;
	
	if(typeof jpBannerId != "undefined") {
		if(scriptSource.indexOf("?f=") > -1) {	
			fid = scriptSource.substr(scriptSource.indexOf("?f=") + 3);
			fid = fid.split("&")[0];
			qfid = true;
		}  else if(scriptSource.indexOf("&u=") > -1) {
			fid = scriptSource.substr(scriptSource.indexOf("&f=") + 3);
			fid = fid.split("&")[0];
			qfid = true;	
		} else {
			fid = jpBannerId;		
		}
	} else {
		//console.log("NO JP BANNER ID");
	} 
	
	var jpbannerid = "jpbanner_23572";
	if(typeof fid != "undefined") {
		jpbannerid += "_" + fid;
	} else {
		//console.log("NO FID");
	}
	
	this.runnable = false;
	this.running = false;

	var headerPoll;
	var bodyLoaded;
	var oldwindowopen;
	
	shStageId = null;
	
	if(typeof ord == "undefined") ord = Math.floor(Math.random()*100000000000); 
	
	var ref = document.referrer;
	try {
		if(window.top.location.href) ref=window.top.location.href;
	} catch(ex) {
		try {
			if(window.parent.location.href) ref=window.parent.location.href;
		} catch(ex2) {
		}
	}
	
	var rawClickThrough = "".replace("[random]",ord);
	var rawcturl = "Xvp%2B%2B4q%2FZpw%3D";
	var clickThroughUrl = "http://jptracking.elasticbeanstalk.com/jpc?ord="+ord+"&lid=23572&sid=844&oid=4636&csid=&c=0&rf=" + escape(ref) + "&ict=" + rawcturl;	
	var parallelClickTracker = null;
	if(typeof console != "undefined") {
		//console.log("WINDOW.JPU: " + window.jpu);
	}
	if(typeof window.jpu != "undefined" && window.jpu) {
		clickThroughUrl = 'http://jptracking.elasticbeanstalk.com/jpt?ord='+ord+'&sid=844&oid=4636&lid=23572&csid=&c=0&rf=' + escape(ref) + '&t=inlineClick&u=' + window.jpu;
	} else if(typeof scriptSource != "undefined" && scriptSource) {
		//console.log("SCRIPT SOURCE (23572): " + scriptSource);
		var inlineClickThrough = scriptSource.substr(scriptSource.indexOf("u=") + 2);
		if(inlineClickThrough && scriptSource.indexOf("u=") != -1) {
			clickThroughUrl = 'http://jptracking.elasticbeanstalk.com/jpt?ord='+ord+'&sid=844&oid=4636&lid=23572&csid=&c=0&rf=' + escape(ref) + '&t=inlineClick&u=' + escape(inlineClickThrough); 
		} else if(scriptSource.indexOf("p=") != -1) {
			parallelClickTracker = jpGetQueryVariable("p", scriptSource.substr(scriptSource.indexOf("?") + 1));
		}
	}
	 
	var cid = "23572";
	var tp = 'http://jptracking.elasticbeanstalk.com/jpt?ord='+ord+'&sid=844&oid=4636&lid=23572&csid=&c=0&rf=' + escape(ref);
	
	if(typeof jpTrackEvent == "undefined") {
		jpTrackEvent = function(eventName) {
			var tpimg = new Image();
			tpimg.src = tp + "&t=" + eventName + "&u=http://ads.jetpackdigital.com/tracking_pixel.gif";
		}
	}
	
	var jpClickThrough = function() {
		if(parallelClickTracker != null) {
			var pct = new Image();
			pct.src = unescape(parallelClickTracker);
		}
		window.open(clickThroughUrl,"_blank");
	};
	
	this.Init = function() {
		
		// Make sure that the page is correct
			
		jpbannerunit = true;
		this.runnable = true;
		
				
															
										
			};

	// Run the clickable skin unit
	this.Run =  function() {
	
		if(!this.runnable) return;
	
		
				
		this.running = true;
		
				
												
			this.RunCustomUnitBannerUnit_23572();
			
			
						
									
				
				
	};
	
	this.RunCustomUnitBannerUnit_23572 =  function() {
				
					JP("[id^=jpplatform_23572]").each(function() {
				var parent = JP(this).parent();
				if(parent.css("display") == "none" || parent.css("visibility") == "hidden" || parent.hasClass("kxinvisible")) return;
				
				JP(this).attr("status","checked");
				
				if(JP(this).html().length == 0 && !jpActiveFID) {
					var localfid = JP(this).attr("id").match(/\d+$/);
					jpActiveBanner = "#" + JP(this).attr("id");
					jpActiveFID = localfid;
					jpbannerid = "jpbanner_23572_" + localfid;  
					JP(this).html("<div id='" + jpbannerid + "' class='jpbanner' rel='test' style='background-color: transparent; height: 600px; width:300px;; z-index: 1; position: relative; margin: 0 auto;'><style> #secondary-featured > .container-rail, .module-container-rail > .container-rail { overflow: visible !important; } </style></div>");
					
					//JP(this).css("z-index","1").css("position","relative");
					
										
					return false;
				}
			});
		
		
		if(jpbannerid && JP("#" + jpbannerid + " > .jpstage").html()) { 
			// Weird IE 9+ issue with timing the banner
			return;
		}
		
		// Forward message to override element
		var overrideElem = jpbannerid;		
	
				var eventElement = '#stage_a2214487058a240c7ee159f0e2066b12';
				  if(typeof jpActiveBanner != 'undefined' && jpActiveBanner) eventElement = jpActiveBanner + ' ' + eventElement;
				  if(typeof jpfn == 'undefined') {                                         
    				window.jpfn = new Array();                                         
				  }                          
                       
				  if(typeof window.jpfn[eventElement] == 'undefined') {                       
    				window.jpfn[eventElement] = {};                                                                                                                        
				  }

				  var $jp = window.jpfn[eventElement];
				  $jp.eventElement = eventElement;
			
if(typeof stagecollapsedlist == "undefined") stagecollapsedlist = new Array();
stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'] = false; 
stagecollapsed = stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'];
jpgsloaded = false;
jpUseResponsive_stage_a2214487058a240c7ee159f0e2066b12 = false;

if(typeof $jp.waitForCPU == "undefined") {
	$jp.waitForCPU = function(arg1, arg2) {
		var func = null;
		var opts = null;
		if(typeof arg1 == "function") func = arg1;
		if(typeof arg1 == "object") opts = arg1; 
		
		if(typeof arg2 == "function") func = arg2;
		if(typeof arg2 == "object") opts = arg2;
		
		$jp.iteration = (opts && opts.iteration) ? opts.iteration : 20;
		$jp.timelimit = (opts && opts.timelimit) ? opts.timelimit : 1100;
		$jp.timeout = Math.floor(($jp.timelimit/$jp.iteration) * .9); 
		$jp.procCounter = 0; 
		$jp.startTime = new Date().getTime(); 
		$jp.procCounterInterval = setInterval(function() {  
											if($jp.procCounter == $jp.iteration) { 
												$jp.now = new Date().getTime(); 
												if($jp.now-$jp.jpStartTime < $jp.timelimit) { 
													clearInterval($jp.procCounterInterval); 
													func(); 
												} else { 
													$jp.jpProcCounter = 1; 
													$jp.jpStartTime = new Date().getTime(); 
												} 
											} else { 
												$jp.procCounter++; 
											}
										 }, $jp.timeout);
	};
}

if(typeof $jp.transitionPanel == "undefined") {
	$jp.transitioning = false; 
	$jp.activePanel = "#panel_0"; 
	$jp.transitionPanel = function(new_panel_id, duration, type, completefunc) { 
		if($jp.transitioning) return; 
		$jp.transitioning = true; 
		if(type == "scrollLeft") { 
			var wid = JP($jp.activePanel).width(); 
			JP($jp.activePanel).addClass("jpActiveScrollLeft"); 
			var newwidth = JP(new_panel_id).width(); 
			var left = wid; 
			 
			JP(new_panel_id).css("top", "0px").css("left",left + "px").css("z-index","50").show(); 
			JP($jp.activePanel).css("z-index","49"); 
			JP(new_panel_id).addClass("jpActiveScrollLeft"); 
			 
			var origActivePanel = $jp.activePanel; 
			var finishedAnimate = false; 
			 
			JP(".jpActiveScrollLeft").animate({"margin-left": "-" + newwidth + "px"}, duration, function() { 
				JP(new_panel_id).css("margin-left","0px").css("left","0px"); 
				JP(origActivePanel).hide().css("margin-left","0px").css("top","-9999px"); 
				$jp.activePanel = new_panel_id; 
				 
				JP(".jpActiveScrollLeft").each(function() { 
					JP(this).removeClass("jpActiveScrollLeft"); 
				}); 
				 
				if(completefunc && !finishedAnimate) { 
					completefunc(); 
				} 
				finishedAnimate = true; 
				$jp.transitioning = false; 
			}); 	 
		} else if(type == "scrollRight") { 
			var wid = JP($jp.activePanel).width(); 
			JP($jp.activePanel).addClass("jpActiveScrollRight"); 
			var newwidth = JP(new_panel_id).width(); 
			var left = wid; 
			 
			JP(new_panel_id).css("top", "0px").css("left", "-" + left + "px").css("z-index","50").show(); 
			JP($jp.activePanel).css("z-index","49"); 
			JP(new_panel_id).addClass("jpActiveScrollRight"); 
			 
			var origActivePanel = $jp.activePanel; 
			var finishedAnimate = false; 
			 
			JP(".jpActiveScrollRight").animate({"margin-left": newwidth + "px"}, duration, function() { 
				JP(new_panel_id).css("margin-left","0px").css("left","0px"); 
				JP(origActivePanel).hide().css("margin-left","0px").css("top","-9999px"); 
				$jp.activePanel = new_panel_id; 
				 
				JP(".jpActiveScrollRight").each(function() { 
					JP(this).removeClass("jpActiveScrollRight"); 
				}); 
				 
				if(completefunc && !finishedAnimate) { 
					completefunc(); 
				} 
				finishedAnimate = true; 
				$jp.transitioning = false; 
			}); 	
			 
		} else if(type == "scrollUp") { 
			var hid = JP($jp.activePanel).height(); 
			JP($jp.activePanel).addClass("jpActiveScrollUp"); 
			var newheight = JP(new_panel_id).height(); 
			var top = hid; 
			 
			JP(new_panel_id).css("top",top + "px").css("z-index","50").show(); 
			JP($jp.activePanel).css("z-index","49"); 
			JP(new_panel_id).addClass("jpActiveScrollUp"); 
			 
			var origActivePanel = $jp.activePanel; 
			var finishedAnimateLeft = false; 
			 
			JP(".jpActiveScrollUp").animate({"margin-top": "-" + newheight + "px"}, duration, function() { 
				JP(new_panel_id).css("margin-top","0px").css("top","0px"); 
				JP(origActivePanel).hide().css("margin-top","0px").css("top","-9999px"); 
				$jp.activePanel = new_panel_id; 
				 
				JP(".jpActiveScrollUp").each(function() { 
					JP(this).removeClass("jpActiveScrollUp"); 
				}); 
				 
				if(completefunc && !finishedAnimateLeft) { 
					completefunc(); 
				} 
				finishedAnimateLeft = true; 
				$jp.transitioning = false; 
			}); 
			 
		} else if(type == "scrollDown") { 
            var hid = JP($jp.activePanel).height(); 
			JP($jp.activePanel).addClass("jpActiveScrollDown"); 
			var newheight = JP(new_panel_id).height(); 
			var top = hid; 
			 
			JP(new_panel_id).css("top", "-" + newheight + "px").css("z-index","50").show(); 
			JP($jp.activePanel).css("z-index","49"); 
			JP(new_panel_id).addClass("jpActiveScrollDown"); 
			 
			var origActivePanel = $jp.activePanel; 
			var finishedAnimateLeft = false; 
			 
			JP(".jpActiveScrollDown").animate({"margin-top": newheight + "px"}, duration, function() { 
				JP(new_panel_id).css("margin-top","0px").css("top","0px"); 
				JP(origActivePanel).hide().css("margin-top","0px").css("top","-9999px"); 
				$jp.activePanel = new_panel_id; 
				 
				JP(".jpActiveScrollDown").each(function() { 
					JP(this).removeClass("jpActiveScrollDown"); 
				}); 
				 
				if(completefunc && !finishedAnimateLeft) { 
					completefunc(); 
				} 
				finishedAnimateLeft = true; 
				$jp.transitioning = false; 
			}); 
			 
		} 
	};
}

if(typeof $jp.events == "undefined") {
	$jp.events = new Array();
}

if(typeof $jp.unbindAllEvents == "undefined") {
	$jp.unbindAllEvents = function() {
		for(i = 0; i < $jp.events.length; i++) {
			JP(document).off($jp.events[i], $jp.eventElement);
		}
		
		$jp.events.length = 0;
	};
}

if(typeof $jp.bind == "undefined") {
	$jp.bind = function(event, func) {
		// Only add it to the events if it doesn't exist
		if(JP.inArray(event,$jp.events) == -1) $jp.events.push(event);
		JP(document).on(event, $jp.eventElement, func);
	}; 
} 

if(typeof $jp.trigger == "undefined") {
	$jp.trigger = function(event, params) {
		JP($jp.eventElement).trigger(event, params);
	}; 
} 

if(typeof jpIsIpad == "undefined") {
	jpIsIpad = function() {
		return (navigator.userAgent.match(/iPad/i))?true:false;
	};
}
$jp.isIpad = jpIsIpad;

if(typeof jpIsIphone == "undefined") {
	jpIsIphone = function() {
		return navigator.userAgent.match(/iPhone/i)?true:false;
	};
}
$jp.isIphone = jpIsIphone;

if(typeof jpIsIOS == "undefined") {
	jpIsIOS = function() {
		return jpIsIpad() || jpIsIphone(); 
	};
}
$jp.isIOS = jpIsIOS;

if(typeof jpIsAndroid == "undefined") {
	jpIsAndroid = function() {
		return navigator.userAgent.match(/Android/i)?true:false;
	};
}
$jp.isAndroid = jpIsAndroid;

if(typeof jpIsMobile == "undefined") {
	jpIsMobile = function() {
		return jpIsIOS() || jpIsAndroid();
	}
}
$jp.isMobile = jpIsMobile;

$jp.orientation = (typeof window.orientation != "undefined") ? window.orientation : -1;
if(window.addEventListener) {
	window.addEventListener("orientationchange", function() {
		// Announce the new orientation number
		$jp.orientation = window.orientation;
		$jp.trigger("orientationChange");
	}, false);
} else {
	window.attachEvent("onorientationchange", function() {
		// Announce the new orientation number
		$jp.orientation = window.orientation;
		$jp.trigger("orientationChange");
	}, false);
}



var jpLayers_stage_a2214487058a240c7ee159f0e2066b12 = new Array();
			jpLayers_stage_a2214487058a240c7ee159f0e2066b12.push("default");
	
var jpLayers_stage_a2214487058a240c7ee159f0e2066b12Depth = new Array();


if(typeof jpVars == "undefined") {
	jpVars = {};
}

if(typeof jpGetAttributes == "undefined") {
	jpGetAttributes = function(config,video) {
		var jpAttributes = new Array();
		if(config.stagestate) {
			var ss = [];
			if(typeof config.stagestate == "string") {
				ss = config.stagestate.split(",");
			} else if(typeof config.stagestate == "object" || typeof config.stagestate == "array") {
				ss = config.stagestate;
			}
	
			for(var i = 0; i < ss.length; i++) {
				if(config[ss[i] + " Height"]) {
					jpAttributes[ss[i] + " Height"] = config[ss[i] + " Height"];
				}
				if(config[ss[i] + " Width"]) {
					jpAttributes[ss[i] + " Width"] = config[ss[i] + " Width"];
				}
				if(config[ss[i] + " Top"]) {
					jpAttributes[ss[i] + " Top"] = config[ss[i] + " Top"];
				}
				if(config[ss[i] + " Left"]) {
					jpAttributes[ss[i] + " Left"] = config[ss[i] + " Left"];
				}
			}
			
			if(!jpAttributes["Normal Height"]) {
				jpAttributes["Normal Height"] = config["height"];
			}
			
			if(!jpAttributes["Normal Width"]) {
				jpAttributes["Normal Width"] = config["width"];
			}
			
			if(!jpAttributes["Normal Top"]) {
				jpAttributes["Normal Top"] = config["top"];
			}
			
			if(!jpAttributes["Normal Left"]) {
				jpAttributes["Normal Left"] = config["left"];
			}
	
		}
		
		return jpAttributes;

	};
};

var defaultStageState = "jp_all";
if(typeof jpGetStageStates == "undefined") {
	jpGetStageStates = function(config,video) {		
		stagestate = defaultStageState;
		if(config.stagestate) {
			var ss = [];
			if(typeof config.stagestate == "string") {
				ss = config.stagestate.split(",");
			} else if(typeof config.stagestate == "object" || typeof config.stagestate == "array") {
				ss = config.stagestate;
			}
	
			for(var i = 0; i < ss.length; i++) {	
				if(video) {		
					stagestate += " jp_vw" + ss[i].toLowerCase();
				} else {
					stagestate += " jp_" + ss[i].toLowerCase();
				}
			}

		}
		
		return stagestate;
	};
};

var Stage_stage_a2214487058a240c7ee159f0e2066b12 = function() {
	
	var rawConfig = '{\"title\":\"HSBS Bank Advance 2015-The New Yorker\",\"stagetype\":\"Normal\",\"usegreensock\":\"false\",\"usejquerymobile\":\"false\",\"usekineticjs\":\"false\",\"useviewport\":\"false\",\"useresponsejs\":\"false\",\"usegeotargetting\":\"false\",\"responsivedesign\":\"false\",\"gdnengagement\":\"false\",\"width\":\"300px\",\"height\":\"600px\",\"multiplane\":\"false\",\"followcursor\":\"false\",\"backgroundColor\":\"transparent\",\"backgroundColor2\":\"transparent\",\"backgroundColor3\":\"transparent\",\"autoexpandbutton\":\"true\",\"freqconsecutive\":\"false\",\"collapsedheight\":\"40px\",\"collapsetime\":\"250\",\"normalheight\":\"600px\",\"expandedheight\":\"600px\",\"expandedwidth\":\"600px\",\"collapsedbackground\":\"background2\",\"normalbackground\":\"background1\",\"expandedbackground\":\"background3\"}';
	var config = eval("(" + rawConfig + ")");
	var origconfig = null;
	
	origconfig = config;
	config = jpGetDatedConfig(config);
	this.conf = config;
	
	var element = null;

	
	var id = "stage_a2214487058a240c7ee159f0e2066b12";
	this.id = id;
	var stage_id = "#stage_a2214487058a240c7ee159f0e2066b12";
	this.stageState = "normal";
	
	var eventElement = stage_id;
	if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
		eventElement = jpActiveBanner + " " + eventElement;
	}
	this.eventElement = eventElement;  
		
	var stylecss = "";

	var backgroundImage =  config.backgroundImage_url;
	var backgroundImage2 = config.backgroundImage2_url;
	var backgroundImage3 = config.backgroundImage3_url;
	var backgroundImage4 = config.backgroundImage4_url;
	var backgroundImage5 = config.backgroundImage5_url;
	var backgroundImage6 = config.backgroundImage6_url;
	var backgroundImage7 = config.backgroundImage7_url;
	var backgroundImage8 = config.backgroundImage8_url;
	
	var backgroundColor = (config.backgroundColor) ? config.backgroundColor: "#ffffff";
	var backgroundColor2 = (config.backgroundColor2) ? config.backgroundColor2: "#ffffff";
	var backgroundColor3 = (config.backgroundColor3) ? config.backgroundColor3: "#ffffff";
	var backgroundColor4 = (config.backgroundColor4) ? config.backgroundColor4: "#ffffff";
	var backgroundColor5 = (config.backgroundColor5) ? config.backgroundColor5: "#ffffff";
	var backgroundColor6 = (config.backgroundColor6) ? config.backgroundColor6: "#ffffff";
	var backgroundColor7 = (config.backgroundColor7) ? config.backgroundColor7: "#ffffff";
	var backgroundColor8 = (config.backgroundColor8) ? config.backgroundColor8: "#ffffff";
	
	var currentBackground = null;
	
	var startTime;
	var trackedTimes = new Array();
	var totalTimeSpent = 0;
	
	var rdwindowwidth = null;
	var origratio = null;
	var stagetargetelement = null;
	
	var collapsed = false;
	this.collapsed = false;
	var collapsing = false;
	
	var collapsedDiv = null;
	
	var animatebody = (config.animatebody=="false" || !config.animatebody) ? false : true;
	
	var config = config;
	
	var repeat = (config.repeat) ? config.repeat : "no-repeat";
	
	this.stylecss = "";

	var jpentrypoint = -1;
	var jplastexitpoint = 0;
	var jpmousedover = false;
	
	if(typeof JP.fn.live == "undefined") {
		JP.fn.live = function(event, func) {
			return this.each(function(){
    			JP(document).on(event, this, func);
 	 		});
 	 	};
	}
	
	if(config.multiplane && config.multiplane == "true") {
		if(config.followcursor && config.followcursor == "true") {
			JP(window).mousemove(function(e) {
				var elem = JP("#" + e.target.id);
				if(e.target.id == "stage_a2214487058a240c7ee159f0e2066b12" || JP(elem).parent().attr("id") == "stage_a2214487058a240c7ee159f0e2066b12" || JP("#" + e.target.id).hasClass("jppanel") || JP("#" + JP(elem).parent().attr("id")).hasClass("jppanel")) {	
				jpmousedover = true;
				var scrollTop = e.pageY;
				if(jpentrypoint == -1) {
					jpentrypoint = scrollTop - jplastexitpoint;
					jplastexitpoint = 0;
				}

				scrollTop = scrollTop - jpentrypoint;
				var windowHeight = JP(eventElement).height();
				var offset = scrollTop/windowHeight;
				for(var i = 0; i < jpLayers_stage_a2214487058a240c7ee159f0e2066b12.length; i++) {
					if(jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i] == "default") {
						continue;
					}
					
					JP(".jp_" + jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i]).each(function() {
						if(!JP(this).attr("toppos")) {
							JP(this).attr("toppos", JP(this).css("top"));
						}
						
						if(!JP(this).attr("leftpos")) {
							JP(this).attr("leftpos", JP(this).css("left"));
						}
						
						var depth = 0;
						if(jpLayers_stage_a2214487058a240c7ee159f0e2066b12Depth[jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i]]) {
							depth = jpLayers_stage_a2214487058a240c7ee159f0e2066b12Depth[jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i]];
						}
						
						if(depth == 0) {
							return;
						}
						
						if(depth == "static") {
							//var stageOffset = JP(stage_id).offset();
							var parent_id = "#" + JP(this).parent().attr("id");
							var stageOffset = JP(parent_id).offset();
							var toppos = parseInt(JP(this).attr("toppos").replace("px",""));
							var leftpos = parseInt(JP(this).attr("leftpos").replace("px"));
							var newleftposition = stageOffset.left + leftpos;
							var newtopposition = stageOffset.top + toppos;
							JP(this).css("position","fixed").css("left",newleftposition).css("top",newtopposition); 
						} else {				
										
							var parent_id = "#" + JP(this).parent().attr("id");
							var stageOffset = JP(parent_id).offset();
							
							var elemoffset = depth * offset;
							var position = parseInt(JP(this).attr("toppos").replace("px",""));
							var toppos = parseInt(JP(this).attr("toppos").replace("px",""));
							var leftpos = parseInt(JP(this).attr("leftpos").replace("px"));
							var newleftposition = stageOffset.left + leftpos;
							var newtopposition = stageOffset.top + toppos;
							
							var newposition = (stageOffset.top + position) + (scrollTop/windowHeight) * depth;
							
							if(jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i] == "NewLayer") {
								JP(this).attr("toppos").replace("px","");
							}

							
							JP(this).css("position","fixed").css("top",newposition + "px").css("left",newleftposition);
						}
					});
				}
				} else {
					if(jpentrypoint > -1 && jpmousedover && jplastexitpoint == 0) {
						jplastexitpoint = e.pageY - jpentrypoint;
					}
					jpentrypoint = -1;
				}

			});
		} else {
			
			JP(window).scroll(function(e) {
				var scrollTop = JP(window).scrollTop();
				var windowHeight = JP(window).height();
				var offset = scrollTop/windowHeight;
				for(var i = 0; i < jpLayers_stage_a2214487058a240c7ee159f0e2066b12.length; i++) {
					if(jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i] == "default") {
						continue;
					}
					
					JP(".jp_" + jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i]).each(function() {
						if(!JP(this).attr("toppos")) {
							JP(this).attr("toppos", JP(this).css("top"));
						}
						
						if(!JP(this).attr("leftpos")) {
							JP(this).attr("leftpos", JP(this).css("left"));
						}
						
						var depth = 0;
						if(jpLayers_stage_a2214487058a240c7ee159f0e2066b12Depth[jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i]]) {
							depth = jpLayers_stage_a2214487058a240c7ee159f0e2066b12Depth[jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i]];
						}
						
						if(depth == 0) {
							return;
						}
						
						if(depth == "static") {
							var parent_id = "#" + JP(this).parent().attr("id");
							var stageOffset = JP(parent_id).offset();
							//var stageOffset = JP(stage_id).offset();
							var toppos = parseInt(JP(this).attr("toppos").replace("px",""));
							var leftpos = parseInt(JP(this).attr("leftpos").replace("px"));
							var newleftposition = stageOffset.left + leftpos;
							var newtopposition = stageOffset.top + toppos;
							var parentOffset = newleftposition - stageOffset.left;
							JP(this).css("position","fixed").attr("parentoffset",parentOffset).css("left",newleftposition).css("top",newtopposition); 
						} else {				
										
							//var stageOffset = JP(stage_id).offset();
							var parent_id = "#" + JP(this).parent().attr("id");
							var stageOffset = JP(parent_id).offset();
							
							
							
							var scrollTop = JP(document).scrollTop();
							var windowHeight = JP(document).height();
							var offset = scrollTop/windowHeight;
							
							//var elemoffset = Math.round(JP(this).height()/depth * offset); 
							var elemoffset = depth * offset;
							var position = parseInt(JP(this).attr("toppos").replace("px",""));
							
							var toppos = parseInt(JP(this).attr("toppos").replace("px",""));
							var leftpos = parseInt(JP(this).attr("leftpos").replace("px"));
							var newleftposition = stageOffset.left + leftpos;
							var newtopposition = stageOffset.top + toppos;
							
							var newposition = (stageOffset.top + position) + (scrollTop/windowHeight) * depth;
							
							if(jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i] == "NewLayer") {
								JP(this).attr("toppos").replace("px","");
							}
							
							var parentOffset = newleftposition - stageOffset.left;
													
							JP(this).css("position","fixed").attr("parentoffset",parentOffset).css("top",newposition + "px").css("left",newleftposition);
						}
					});
				}
			});
			
			
			
			JP(window).resize(function() {
				for(var i = 0; i < jpLayers_stage_a2214487058a240c7ee159f0e2066b12.length; i++) {
					if(jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i] == "default") {
						continue;
					}

					JP(".jp_" + jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i]).each(function() {
						var parent_id = "#" + JP(this).parent().attr("id");
						var stageOffset = JP(parent_id).offset();
						var left = stageOffset.left + parseInt(JP(this).attr("parentoffset"));
						if(typeof(left)=='number'&&parseInt(left)==left) {
							JP(this).css("left",left + "px");
						}
					});
				}

			});
		}
	}
	
	var trackingEvents = new Array();
	
	var track = function(eventName) {
		//if(!trackingEvents[eventName]) {
			var trackingpixel = "http://adscdn.jetpackdigital.com/tracking_pixel.gif?[random]";
                        	 
             var cb = Math.floor(Math.random() * 10000000000);
        	var trackingsrc =trackingpixel.replace("[random]",ord);
       		var trackingimg = new Image();
        	if(typeof tp != "undefined") {
        		trackingimg.src = tp + "&t=" + eventName + "&cb=" + cb + "&u=" + trackingsrc;
			}
			trackingEvents[eventName] = true;
		//}
	};
	
	if(typeof jpTrack == "undefined") {
		jpTrack = function(eventName, force) {
			if(!trackingEvents[eventName] || force) {
				var trackingpixel = "http://adscdn.jetpackdigital.com/tracking_pixel.gif?" + Math.floor(Math.random() * 99999999999);
                        	 
        		var trackingsrc =trackingpixel.replace("[random]");
       			var trackingimg = new Image();
       		 	trackingimg.src = tp + "&t=" + eventName + "&u=" + trackingsrc;
				trackingEvents[eventName] = true;
			}
		}
	};
	
	if(typeof jpOpenLink == "undefined") {
		jpOpenLink = function(eventName, url) {
			window.open(tp + "&t=" + eventName + "&u=" + url, "_blank");
		}
	};
	
	var jpUnloadStage = function() {
		startTime = null;
		trackedTimes = new Array();
		trackedTimes.length = 0;
		totalTimeSpent = 0;
		
		// Remove all event handlers
		$jp.unbindAllEvents();	
		JP(document).unbind("jpUnloadUnits", jpUnloadStage);	
	};
	
	// Unload everything wrt the stage
	JP(document).bind("jpUnloadUnits", jpUnloadStage);
	
	var getConfig = function() {
		return config;
	};
	this.getConfig = getConfig;
	
	this.initializeJqueryFunctions = function() {
		this.$ = JP(element);
	};
	
	var getElement = function() {
		return element;
	};
	this.getElement = getElement;
	
	var updateBackground = function(key, color) {
		if(config[key + "_url"]) {
			JP(element).css("background-image","url(" + config[key + "_url"] + ") no-repeat");
		}
		if(color) {
			JP(element).css("background-color",color);
		}
	};
	this.updateBackground = updateBackground;
	
	var updateSkin = function(key, color, element, important) {
		if(typeof element == "undefined" || !element) element = "body";
		if(typeof color == "undefined" || !color) color = "transparent";
		if(typeof important == "undefined" || !color) important = false;
		var imgurl = config[key + "_url"];
		JP(element).css({
			background: color + " url(" + imgurl + ") no-repeat"
		});

		
		var elstyle = JP(element).attr("style");
		if(!elstyle) {
			JP(element).attr("style","background: " + color + " url(" + imgurl + ") no-repeat top center " + ((important)?" !important":""));
		}		
		createStyleSheet("jpskin_" + key, ".jpskin_" + key + " { background: " + color + " url(" + imgurl + ") no-repeat top center " + ((important)?" !important":"") + ";}");
		
		var classattr = JP(element).attr("class");
		if(classattr) {
			var classes = classattr.split(" ");
			for(i = 0; i < classes.length; i++) {
				var cls = classes[i];
				if(cls.match(/jpskin_/)) {
					JP(element).removeClass(cls);
				}
			}
		}
		JP(element).addClass("jpskin_" + key);				
	};
	this.updateSkin = updateSkin;
	
	var jpInitializeMultiPlane = function() {	

		for(var i = 0; i < jpLayers_stage_a2214487058a240c7ee159f0e2066b12.length; i++) {
			if(jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i] == "default") {
				continue;
			}
			
			JP(".jp_" + jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i]).each(function() {
				if(!JP(this).attr("toppos")) {
					JP(this).attr("toppos", JP(this).css("top"));
				}
				
				if(!JP(this).attr("leftpos")) {
					JP(this).attr("leftpos", JP(this).css("left"));
				}
				
				var depth = 0;
				if(jpLayers_stage_a2214487058a240c7ee159f0e2066b12Depth[jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i]]) {
					depth = jpLayers_stage_a2214487058a240c7ee159f0e2066b12Depth[jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i]];
				}
				
				if(depth == 0) {
					return;
				}
				
				if(depth == "static") {
					var parent_id = "#" + JP(this).parent().attr("id");
					var stageOffset = JP(parent_id).offset();
					//var stageOffset = JP(stage_id).offset();
					var toppos = parseInt(JP(this).attr("toppos").replace("px",""));
					var leftpos = parseInt(JP(this).attr("leftpos").replace("px"));
					var newleftposition = stageOffset.left + leftpos;
					var newtopposition = stageOffset.top + toppos;
					var parentOffset = newleftposition - stageOffset.left;
					JP(this).css("position","fixed").attr("parentoffset",parentOffset).css("left",newleftposition).css("top",newtopposition); 
				} else {				
								
					//var stageOffset = JP(stage_id).offset();
					var parent_id = "#" + JP(this).parent().attr("id");
					var stageOffset = JP(parent_id).offset();
					
					
					
					var scrollTop = JP(document).scrollTop();
					var windowHeight = JP(document).height();
					var offset = scrollTop/windowHeight;
					
					//var elemoffset = Math.round(JP(this).height()/depth * offset); 
					var elemoffset = depth * offset;
					var position = parseInt(JP(this).attr("toppos").replace("px",""));
					
					var toppos = parseInt(JP(this).attr("toppos").replace("px",""));
					var leftpos = parseInt(JP(this).attr("leftpos").replace("px"));
					var newleftposition = stageOffset.left + leftpos;
					var newtopposition = stageOffset.top + toppos;
					
					var newposition = (stageOffset.top + position) + (scrollTop/windowHeight) * depth;
					
					if(jpLayers_stage_a2214487058a240c7ee159f0e2066b12[i] == "NewLayer") {
						JP(this).attr("toppos").replace("px","");
					}
					
					var parentOffset = newleftposition - stageOffset.left;
											
					JP(this).css("position","fixed").attr("parentoffset",parentOffset).css("top",newposition + "px").css("left",newleftposition);
				}
			});
		}
	};

	var getResponsiveStageHeight = function() {
		if(typeof config.responsivedesign != "undefined" && config.responsivedesign == "true") {
			var smratio = JP(window).width() / rdwindowwidth;
			var zoom = smratio / origratio;
			if(zoom > 1) { zoom = 1; }
			var newwidth = parseInt(JP(eventElement).attr("owidth").replace("px","")) * zoom;
			var newheight = parseInt(JP(eventElement).attr("oheight").replace("px","")) * zoom;
			return newheight;
		} else {
			return JP(eventElement).attr("oheight");
		}
	};
	
	var updateResponsiveStage = function() {
		if(typeof config.responsivedesign != "undefined" && config.responsivedesign == "true") {
			var smratio = JP(window).width() / rdwindowwidth;
			var zoom = smratio / origratio;
			if(zoom > 1 || JP(window).width() >= rdwindowwidth) { zoom = 1; }
			var newwidth = parseInt(JP(eventElement).attr("owidth").replace("px","")) * zoom;
			var newheight = parseInt(JP(eventElement).attr("oheight").replace("px","")) * zoom;
			JP(eventElement).css("width",newwidth + "px").css("height",newheight + "px");
		}
	};
	
	var initializeResponsiveModules = function() {
		if(jpUseResponsive_stage_a2214487058a240c7ee159f0e2066b12) {
			JP(stage_id).children().each(function() {
				if(JP(this).attr("skipresp") != "true") {
					JP(this).attr("otop",JP(this).css("top"));
					JP(this).attr("oleft",JP(this).css("left"));
					JP(this).attr("owidth",JP(this).width());
					JP(this).attr("oheight",JP(this).height());
					JP(this).css("background-size","100%");
				}
			});
		}
		
		updateResponsiveModules();
	};

	var updateResponsiveModules = function() {
		if(jpUseResponsive_stage_a2214487058a240c7ee159f0e2066b12) {
			JP(stage_id).children().each(function() {
				if(JP(this).attr("skipresp") != "true") {
					console.log(JP(this) + " : " + typeof(JP(this).attr("id")));
					if(typeof(JP(this).attr("id")) == "undefined") return;
					
					var stageheight = JP(stage_id).height();
					var stagewidth = JP(stage_id).width();
					
					var stageoheight = parseInt(JP(stage_id).attr("oheight").replace("px",""));
					var stageowidth = parseInt(JP(stage_id).attr("owidth").replace("px",""));
					
					if(!JP(this).attr("otop")) {
						JP(this).attr("otop",JP(this).css("top"));
					}
					
					if(!JP(this).attr("oleft")) {
						JP(this).attr("oleft",JP(this).css("left"));
					}
					
					if(!JP(this).attr("owidth")) {
						JP(this).attr("owidth",JP(this).css("width"));
					}
					
					if(!JP(this).attr("oheight")) {
						JP(this).attr("oheight",JP(this).css("height"));
					}
					
					var modtop = parseInt(JP(this).attr("otop").replace("px",""));
					var modleft = parseInt(JP(this).attr("oleft").replace("px",""));
					var modheight = parseInt(JP(this).attr("oheight").replace("px",""));
					var modwidth = parseInt(JP(this).attr("owidth").replace("px",""));
					
					var perctop = (modtop / stageoheight ) * 100;
					var percleft = (modleft / stageowidth ) * 100;
					var percwidth = (modwidth / stageowidth ) * 100;
					var percheight = (modheight / stageoheight ) * 100;
				
					
					JP(this).css("height",percheight + "%");
					JP(this).css("width",percwidth + "%");
					JP(this).css("left",percleft + "%");
					JP(this).css("top",perctop + "%");
				}
			});	
		}	
	};

	var toExpandedHeight = function() {
		if(!config.expandedheight) {
			return;
		}
		
		var collapseTime = config.collapsetime;
		if(!collapsing) {
			JP(eventElement).trigger("stageOpening");  
			JP(eventElement).removeClass("background1").removeClass("background2").removeClass("background3").removeClass("background4").removeClass("background5").removeClass("background6").removeClass("background7").removeClass("background8"); 
			if(config.expandedbackground) {
				JP(eventElement).addClass(config.expandedbackground);
				
				if(config.expandedbackground == "background3") {
					
					if(backgroundImage3) {
						JP(eventElement).css("background-image", "url(" + backgroundImage3 + ")");
					} else {
						JP(eventElement).css("background-image", "url(http://adscdn.jetpackdigital.com/tracking_pixel.gif)");
					}
				}
			} 
			 
			JP(eventElement).attr("oheight",config.expandedheight);
			
			JP(eventElement).animate({height: config.expandedheight},collapseTime, function() { 
				
				if(animatebody) { 
					JP("body").css("background-position","center " + config.expandedheight);
				}
				
				updateResponsiveStage();

				JP(eventElement).trigger("stageExpandedLarge");					
				track("OpenToExpanded");
			}); 
			
						
				JP(eventElement + " .jp_normal").each(function() { JP(this).hide(); });
			    JP(eventElement + " .jp_collapsed").each(function() { JP(this).hide(); });

				JP(eventElement + " .jp_expanded").each(function() {
					if(JP(this).attr("expanded_top")) {
			    		JP(this).css("top",JP(this).attr("expanded_top"));
			    		JP(this).attr("otop",JP(this).attr("expanded_top"));
			    	} 
			    	
			    	if(JP(this).attr("expanded_height")) {
			    		JP(this).css("height",JP(this).attr("expanded_height"));
			    		JP(this).attr("oheight",JP(this).attr("expanded_height"));
			    	} 
			    	
			    	if(JP(this).attr("expanded_left")) {
			    		JP(this).css("left",JP(this).attr("expanded_left"));
			    		JP(this).attr("oleft",JP(this).attr("expanded_left"));
			    	} 
			    	
			    	if(JP(this).attr("expanded_width")) {
			    		JP(this).css("width",JP(this).attr("expanded_width"));
			    		JP(this).attr("owidth",JP(this).attr("expanded_width"));
			    	} 
 
					JP(this).show(); 
				});
			    
			    			    
			    JP(eventElement + " .jp_vwnormal").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });
			    JP(eventElement + " .jp_vwcollapsed").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });

			    JP(eventElement + " .jp_vwexpanded").each(function() { 
			    	JP(this).css("top","0px");
			    	if(JP(this).attr("expanded_top")) {
			    		JP(this).css("top",JP(this).attr("expanded_top"));
			    		JP(this).attr("otop",JP(this).attr("expanded_top"));
			    	} 
			    	
			    	if(JP(this).attr("expanded_height")) {
			    		JP(this).css("height",JP(this).attr("expanded_height"));
			    		JP(this).attr("oheight",JP(this).attr("expanded_height"));
			    	} 
			    	
			    	if(JP(this).attr("expanded_left")) {
			    		JP(this).css("left",JP(this).attr("expanded_left"));
			    		JP(this).attr("oleft",JP(this).attr("expanded_left"));
			    	} 
			    	
			    	if(JP(this).attr("expanded_width")) {
			    		JP(this).css("width",JP(this).attr("expanded_width"));
			    		JP(this).attr("owidth",JP(this).attr("expanded_width"));
			    	} 
			    });
			
			collapsed=false; 
			
			if(config.remembercollapsed == "true") {
				var coll_exp = (config.remembercollapsedexp) ? parseFloat(config.remembercollapsedexp) :  1;
				jpdSetCookie(stage_id.replace("#","") + "_c","0",coll_exp,"/"); 
			}
			
		} else { 
			collapsing = false; 
		}
		
		this.stageState = "expanded";
		
		updateResponsiveModules();
		
		
	};
	this.toExpandedHeight = toExpandedHeight;
	
	var toExpandedWidth = function(w, l, t) {
		if(!w || !l || !t) {
			return;
		}
			
		JP(eventElement).trigger("stageWidthExpanding"); 
		JP(eventElement).removeClass("background1").removeClass("background2").removeClass("background3").removeClass("background4").removeClass("background5").removeClass("background6").removeClass("background7").removeClass("background8"); 
		if(config.expandedbackground) {
			JP(eventElement).addClass(config.expandedbackground);
			
			if(config.expandedbackground == "background3") {		
				if(backgroundImage3) {
					JP(eventElement).css("background-image", "url(" + backgroundImage3 + ")");
				} else {
					JP(eventElement).css("background-image", "url(http://adscdn.jetpackdigital.com/tracking_pixel.gif)");
				}
			}
		} 
		
		
		JP(eventElement).animate({width: w, left: l},t, function() { 

			JP(eventElement).trigger("stageWidthExpanded");					
			track("StageWidthExpanded");
		}); 
				
		    JP(eventElement + " .jp_normal").each(function() { JP(this).hide(); });
		    JP(eventElement + " .jp_collapsed").each(function() { JP(this).hide(); });
			JP(eventElement + " .jp_expanded").each(function() {
				if(JP(this).attr("expanded_top")) {
		    		JP(this).css("top",JP(this).attr("expanded_top"));
		    	} 
		    	
		    	if(JP(this).attr("expanded_height")) {
		    		JP(this).css("height",JP(this).attr("expanded_height"));
		    	} 
		    	
		    	if(JP(this).attr("expanded_left")) {
		    		JP(this).css("left",JP(this).attr("expanded_left"));
		    	} 
		    	
		    	if(JP(this).attr("expanded_width")) {
		    		JP(this).css("width",JP(this).attr("expanded_width"));
		    	} 
				JP(this).show(); 
			});
		    
		   
		    
		    JP(eventElement + " .jp_vwnormal").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });
		    JP(eventElement + " .jp_vwcollapsed").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });
		    JP(eventElement + " .jp_vwexpanded").each(function() { 
		    	JP(this).css("top","0px");
		    	if(JP(this).attr("expanded_top")) {
		    		JP(this).css("top",JP(this).attr("expanded_top"));
		    	} 
		    	
		    	if(JP(this).attr("expanded_height")) {
		    		JP(this).css("height",JP(this).attr("expanded_height"));
		    	} 
		    	
		    	if(JP(this).attr("expanded_left")) {
		    		JP(this).css("left",JP(this).attr("expanded_left"));
		    	} 
		    	
		    	if(JP(this).attr("expanded_width")) {
		    		JP(this).css("width",JP(this).attr("expanded_width"));
		    	} 
		    });
		    
		    this.stageState = "expanded";
		   
		    updateResponsiveModules();
	
	};
	this.toExpandedWidth = toExpandedWidth;
	
	var toNormalHeight = function(skipAnimate) {
		if(!config.normalheight) {
			config.normalheight = config.height;
		}
		
		if(!config.normalbackground && !currentBackground) {
			config.normalbackground = "background1";
		} else if(currentBackground != null) {
			config.normalbackground = currentBackground;
		}
		
		var collapseTime = (config.collapsetime) ? config.collapsetime : 250;
		
		if(!collapsing) {
			JP(eventElement).trigger("stageOpening");
			
			if(config.normalbackground) {
				JP(eventElement).removeClass("background1").removeClass("background2").removeClass("background3").removeClass("background4").removeClass("background5").removeClass("background6").removeClass("background7").removeClass("background8");
				JP(eventElement).addClass(config.normalbackground);
				if(backgroundImage) {
					JP(eventElement).css("background-image", "url(" + backgroundImage + ")");
				} else {
					JP(eventElement).css("background-image", "url(http://adscdn.jetpackdigital.com/tracking_pixel.gif)");
				}
			}  
			
			JP(eventElement).attr("oheight",config.normalheight);
			var norheight = (typeof config.responsivedesign != "undefined" && config.responsivedesign == "true") ? getResponsiveStageHeight() : config.normalheight;
			if(skipAnimate) {
				JP(eventElement).css("height",norheight);
				updateResponsiveStage();
			
				collapsed = false;  
				this.collapsed = false;  
				collapsing = false; 
					
				JP(eventElement).removeClass("background1").removeClass("background2").removeClass("background3").removeClass("background4").removeClass("background5").removeClass("background6").removeClass("background7").removeClass("background8");
				
				if(config.normalbackground) {
					JP(eventElement).addClass(config.normalbackground);
					
					if(config.normalbackground == "background1") {
						
						if(backgroundImage) {
							JP(eventElement).css("background-image", "url(" + backgroundImage + ")");
						} else {
							JP(eventElement).css("background-image", "url(http://adscdn.jetpackdigital.com/tracking_pixel.gif)");
						}
					}
				} 
			    
			    	
				
				JP(eventElement).trigger("stageExpandedNormal");
				/*track("OpenToNormal");*/
				if(typeof activeAutoExpand == "undefined" || !activeAutoExpand) { 
					if(config.remembercollapsed == "true") {
						var coll_exp = (config.remembercollapsedexp) ? parseFloat(config.remembercollapsedexp) :  1;					
						jpdSetCookie(stage_id.replace("#","") + "_c","0",coll_exp,"/");
					} 
				} else {
					activeAutoExpand = false;
				}
				
			} else {
				JP(eventElement).animate({height: norheight}, collapseTime, function() {  
					if(animatebody) { 
						JP("body").css("background-position","center " + config.normalheight);
					} 
					
					updateResponsiveStage();
				
					collapsed = false;  
					this.collapsed = false;  
					collapsing = false; 
						
					JP(eventElement).removeClass("background1").removeClass("background2").removeClass("background3").removeClass("background4").removeClass("background5").removeClass("background6").removeClass("background7").removeClass("background8");
					if(config.normalbackground) {
						JP(eventElement).addClass(config.normalbackground);
						
						if(config.normalbackground == "background1") {
							
							if(backgroundImage) {
								JP(eventElement).css("background-image", "url(" + backgroundImage + ")");
							} else {
								JP(eventElement).css("background-image", "url(http://adscdn.jetpackdigital.com/tracking_pixel.gif)");
							}
						}
					} 
				    
				    	
					
					JP(eventElement).trigger("stageExpandedNormal");
					track("OpenToNormal");
					if(typeof activeAutoExpand == "undefined" || !activeAutoExpand) { 
						if(config.remembercollapsed == "true") {
							var coll_exp = (config.remembercollapsedexp) ? parseFloat(config.remembercollapsedexp) :  1;					
							jpdSetCookie(stage_id.replace("#","") + "_c","0",coll_exp,"/");
						} 
					} else {
						activeAutoExpand = false;
					}
				
				});
			}
			
			JP(eventElement + " .jp_expanded").each(function() { JP(this).hide(); });
			JP(eventElement + " .jp_collapsed").each(function() { JP(this).hide(); });
			JP(eventElement + " .jp_normal").each(function() {
				if(JP(this).attr("normal_top")) {
		    		JP(this).css("top",JP(this).attr("normal_top"));
		    		JP(this).attr("otop",JP(this).attr("normal_top"));
		    	} 
		    	
		    	if(JP(this).attr("normal_height")) {
		    		JP(this).css("height",JP(this).attr("normal_height"));
		    		JP(this).attr("oheight",JP(this).attr("normal_height"));
		    	} 
		    	
		    	if(JP(this).attr("normal_left")) {
		    		JP(this).css("left",JP(this).attr("normal_left"));
		    		JP(this).attr("oleft",JP(this).attr("normal_left"));
		    	} 
		    	
		    	if(JP(this).attr("normal_width")) {
		    		JP(this).css("width",JP(this).attr("normal_width"));
		    		JP(this).attr("owidth",JP(this).attr("normal_width"));
		    	} 

				JP(this).show(); 
			});
		    
		    JP(eventElement + " .jp_vwexpanded").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px"); });
			JP(eventElement + " .jp_vwcollapsed").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });		    

		    JP(eventElement + " .jp_vwnormal").each(function() { 
		    	JP(this).css("top","0px");
		    	if(JP(this).attr("normal_top")) {
		    		JP(this).css("top",JP(this).attr("normal_top"));
		    		JP(this).attr("otop",JP(this).attr("normal_top"));
		    	} 
		    	
		    	if(JP(this).attr("normal_height")) {
		    		JP(this).css("height",JP(this).attr("normal_height"));
		    		JP(this).attr("oheight",JP(this).attr("normal_height"));
		    	} 
		    	
		    	if(JP(this).attr("normal_left")) {
		    		JP(this).css("left",JP(this).attr("normal_left"));
		    		JP(this).attr("oleft",JP(this).attr("normal_left"));
		    	} 
		    	
		    	if(JP(this).attr("normal_width")) {
		    		JP(this).css("width",JP(this).attr("normal_width"));
		    		JP(this).attr("owidth",JP(this).attr("normal_width"));
		    	} 
		    });
			
			
		} else { 
			collapsing = false; 
		}
		this.stageState = "normal";
		
		updateResponsiveModules();
		
	};
	this.toNormalHeight = toNormalHeight;
	
	var toNormalWidth = function(w,l,t) {
		if(!w || !l || !t) {
			return;
		}
		
		if(!config.normalbackground && !currentBackground) {
			config.normalbackground = "background1";
		} else if(currentBackground != null) {
			config.normalbackground = currentBackground;
		}
		
		JP(eventElement).trigger("stageOpening");
		
		 
		
		JP(eventElement).animate({width: w, left: l}, t, function() {  
			if(animatebody) { 
				JP("body").css("background-position","center " + config.normalheight);
			} 
		
			collapsed = false;  
			this.collapsed = false;  
			collapsing = false; 
		
			if(config.normalbackground) {
				JP(eventElement).addClass(config.normalbackground);
				
				if(config.normalbackground == "background1") {
					
					if(backgroundImage) {
						JP(eventElement).css("background-image", "url(" + backgroundImage + ")");
					} else {
						JP(eventElement).css("background-image", "url(http://adscdn.jetpackdigital.com/tracking_pixel.gif)");
					}
				}
			} 
		    

			
			JP(eventElement).trigger("stageExpandedNormal");
			track("OpenToNormal");
			if(typeof activeAutoExpand == "undefined" || !activeAutoExpand) { 
				if(config.remembercollapsed == "true") {
					var coll_exp = (config.remembercollapsedexp) ? parseFloat(config.remembercollapsedexp) :  1;
					jpdSetCookie(stage_id.replace("#","") + "_c","0",coll_exp,"/"); 
				}
			} else {
				activeAutoExpand = false;
			}
		});
		
		JP(eventElement + " .jp_expanded").each(function() { JP(this).hide(); });
		JP(eventElement + " .jp_collapsed").each(function() { JP(this).hide(); });
		JP(eventElement + " .jp_normal").each(function() {
			if(JP(this).attr("normal_top")) {
	    		JP(this).css("top",JP(this).attr("normal_top"));
	    		JP(this).attr("otop",JP(this).attr("normal_top"));
	    	} 
	    	
	    	if(JP(this).attr("normal_height")) {
	    		JP(this).css("height",JP(this).attr("normal_height"));
	    		JP(this).attr("oheight",JP(this).attr("normal_height"));
	    	} 
	    	
	    	if(JP(this).attr("normal_left")) {
	    		JP(this).css("left",JP(this).attr("normal_left"));
	    		JP(this).attr("oleft",JP(this).attr("normal_left"));
	    	} 
	    	
	    	if(JP(this).attr("normal_width")) {
	    		JP(this).css("width",JP(this).attr("normal_width"));
	    		JP(this).attr("owidth",JP(this).attr("normal_width"));
	    	} 

			JP(this).show(); 
		});
	    
	    JP(eventElement + " .jp_vwexpanded").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px"); });
		JP(eventElement + " .jp_vwcollapsed").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });		    

	    JP(eventElement + " .jp_vwnormal").each(function() { 
	    	JP(this).css("top","0px");
	    	if(JP(this).attr("normal_top")) {
	    		JP(this).css("top",JP(this).attr("normal_top"));
	    		JP(this).attr("otop",JP(this).attr("normal_top"));
	    	} 
	    	
	    	if(JP(this).attr("normal_height")) {
	    		JP(this).css("height",JP(this).attr("normal_height"));
	    		JP(this).attr("oheight",JP(this).attr("normal_height"));
	    	} 
	    	
	    	if(JP(this).attr("normal_left")) {
	    		JP(this).css("left",JP(this).attr("normal_left"));
	    		JP(this).attr("oleft",JP(this).attr("normal_left"));
	    	} 
	    	
	    	if(JP(this).attr("normal_width")) {
	    		JP(this).css("width",JP(this).attr("normal_width"));
	    		JP(this).attr("owidth",JP(this).attr("normal_width"));
	    	} 
	    });
		updateResponsiveModules();
	};
	this.toNormalWidth = toNormalWidth;
	
	var toCollapsedHeight = function(skipAnimate) {
		if(!config.collapsedheight) {
			config.collapsedheight = "40px";
		}
		
		var collapseTime = (config.collapsetime) ? config.collapsetime : 250;
		
		if(config.remembercollapsed == "true") {
		    var coll_exp = (config.remembercollapsedexp) ? parseFloat(config.remembercollapsedexp) :  1;
			jpdSetCookie(stage_id.replace("#","") + "_c","1",coll_exp,"/");
		}
		collapsing = true; 
		JP(eventElement).attr("oheight",config.collapsedheight);
		if(skipAnimate) {
			JP(eventElement).css('height',config.collapsedheight);
			
			updateResponsiveStage();
			
			collapsed = true;  
			this.collapsed = true;  
			collapsing = false; 
			
			JP(eventElement).removeClass("background1").removeClass("background2").removeClass("background3").removeClass("background4").removeClass("background5").removeClass("background6").removeClass("background7").removeClass("background8");
			if(config.collapsedbackground) {
				JP(eventElement).addClass(config.collapsedbackground);
				
				if(config.collapsedbackground == "background2") {
					if(backgroundImage2) {
						JP(eventElement).css("background-image", "url(" + backgroundImage2 + ")");
					} else {
						JP(eventElement).css("background-image", "url(http://adscdn.jetpackdigital.com/tracking_pixel.gif)");
					}
				}
			} 
					    
			JP(eventElement).trigger("stageCollapsed");
			
			JP(collapsedDiv).show();
			
			/*track("CloseToCollapsed");*/
		} else {
			JP(eventElement).animate({height: config.collapsedheight}, collapseTime, function() {  
				if(animatebody) { 
					JP("body").css("background-position","center " + config.collapsedheight);
				} 
				
				updateResponsiveStage();
				
				collapsed = true;  
				this.collapsed = true;  
				collapsing = false; 
				
				JP(eventElement).removeClass("background1").removeClass("background2").removeClass("background3").removeClass("background4").removeClass("background5").removeClass("background6").removeClass("background7").removeClass("background8");
				if(config.collapsedbackground) {
					JP(eventElement).addClass(config.collapsedbackground);
					
					if(config.collapsedbackground == "background2") {
						if(backgroundImage2) {
							JP(eventElement).css("background-image", "url(" + backgroundImage2 + ")");
						} else {
							JP(eventElement).css("background-image", "url(http://adscdn.jetpackdigital.com/tracking_pixel.gif)");
						}
					}
				} 
						    
				
	
				JP(eventElement).trigger("stageCollapsed");
				
				JP(collapsedDiv).show();
				
				track("CloseToCollapsed");
			});
		}
		
		JP(eventElement + " .jp_expanded").each(function() { JP(this).hide(); });
		JP(eventElement + " .jp_normal").each(function() { JP(this).hide(); });
		JP(eventElement + " .jp_collapsed").each(function() {
			if(JP(this).attr("collapsed_top")) {
	    		JP(this).css("top",JP(this).attr("collapsed_top"));
	    		JP(this).attr("otop",JP(this).attr("collapsed_top"));
	    	} 
	    	
	    	if(JP(this).attr("collapsed_height")) {
	    		JP(this).css("height",JP(this).attr("collapsed_height"));
	    		JP(this).attr("oheight",JP(this).attr("collapsed_height"));
	    	} 
	    	
	    	if(JP(this).attr("collapsed_left")) {
	    		JP(this).css("left",JP(this).attr("collapsed_left"));
	    		JP(this).attr("oleft",JP(this).attr("collapsed_left"));
	    	} 
	    	
	    	if(JP(this).attr("collapsed_width")) {
	    		JP(this).css("width",JP(this).attr("collapsed_width"));
	    		JP(this).attr("owidth",JP(this).attr("collapsed_width"));
	    	} 

			JP(this).show(); 
		});
	    
	    JP(eventElement + " .jp_vwexpanded").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px"); });
		JP(eventElement + " .jp_vwnormal").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });		    

	    JP(eventElement + " .jp_vwcollapsed").each(function() { 
	    	JP(this).css("top","0px");
	    	if(JP(this).attr("collapsed_top")) {
	    		JP(this).css("top",JP(this).attr("collapsed_top"));
	    		
	    	} 
	    	
	    	if(JP(this).attr("collapsed_height")) {
	    		JP(this).css("height",JP(this).attr("collapsed_height"));
	    		JP(this).attr("oheight",JP(this).attr("collapsed_height"));
	    	} 
	    	
	    	if(JP(this).attr("collapsed_left")) {
	    		JP(this).css("left",JP(this).attr("collapsed_left"));
	    		JP(this).attr("oleft",JP(this).attr("collapsed_left"));
	    	} 
	    	
	    	if(JP(this).attr("collapsed_width")) {
	    		JP(this).css("width",JP(this).attr("collapsed_width"));
	    		JP(this).attr("owidth",JP(this).attr("collapsed_width"));
	    	} 
	    });	
	    
	    this.stageState = "normal";
	    
	    updateResponsiveModules();	

	};
	this.toCollapsedHeight = toCollapsedHeight;
	
	this.getCollapsedState = function() { return this.collapsed; };
	
	var updateStageToNormal = function() {
		JP(collapsedDiv).hide();
		
		JP(eventElement + " .jp_expanded").each(function() { JP(this).hide(); });
			JP(eventElement + " .jp_collapsed").each(function() { JP(this).hide(); });
			JP(eventElement + " .jp_normal").each(function() {
				if(JP(this).attr("normal_top")) {
		    		JP(this).css("top",JP(this).attr("normal_top"));
		    		JP(this).attr("otop",JP(this).attr("normal_top"));
		    	} 
		    	
		    	if(JP(this).attr("normal_height")) {
		    		JP(this).css("height",JP(this).attr("normal_height"));
		    		JP(this).attr("oheight",JP(this).attr("normal_height"));
		    	} 
		    	
		    	if(JP(this).attr("normal_left")) {
		    		JP(this).css("left",JP(this).attr("normal_left"));
		    		JP(this).attr("oleft",JP(this).attr("normal_left"));
		    	} 
		    	
		    	if(JP(this).attr("normal_width")) {
		    		JP(this).css("width",JP(this).attr("normal_width"));
		    		JP(this).attr("owidth",JP(this).attr("normal_width"));
		    	} 

				JP(this).show(); 
			});
		    
		    JP(eventElement + " .jp_vwexpanded").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px"); });
			JP(eventElement + " .jp_vwcollapsed").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });		    

		    JP(eventElement + " .jp_vwnormal").each(function() { 
		    	JP(this).css("top","0px");
		    	if(JP(this).attr("normal_top")) {
		    		JP(this).css("top",JP(this).attr("normal_top"));
		    		JP(this).attr("otop",JP(this).attr("normal_top"));
		    	} 
		    	
		    	if(JP(this).attr("normal_height")) {
		    		JP(this).css("height",JP(this).attr("normal_height"));
		    		JP(this).attr("oheight",JP(this).attr("normal_height"));
		    	} 
		    	
		    	if(JP(this).attr("normal_left")) {
		    		JP(this).css("left",JP(this).attr("normal_left"));
		    		JP(this).attr("oleft",JP(this).attr("normal_left"));
		    	} 
		    	
		    	if(JP(this).attr("normal_width")) {
		    		JP(this).css("width",JP(this).attr("normal_width"));
		    		JP(this).attr("owidth",JP(this).attr("normal_width"));
		    	} 
		   });
		stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'] = false;
		stagecollapsed = stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'];
		
		this.stageState = "normal";
	};
	
	var updateStageToCollapsed = function() {
		JP(collapsedDiv).show();
		JP(eventElement + " .jp_expanded").each(function() { JP(this).hide(); });
		JP(eventElement + " .jp_normal").each(function() { JP(this).hide(); });
		JP(eventElement + " .jp_collapsed").each(function() {
			if(JP(this).attr("collapsed_top")) {
	    		JP(this).css("top",JP(this).attr("collapsed_top"));
	    		JP(this).attr("otop",JP(this).attr("collapsed_top"));
	    	} 
	    	
	    	if(JP(this).attr("collapsed_height")) {
	    		JP(this).css("height",JP(this).attr("collapsed_height"));
	    		JP(this).attr("oheight",JP(this).attr("collapsed_height"));
	    	} 
	    	
	    	if(JP(this).attr("collapsed_left")) {
	    		JP(this).css("left",JP(this).attr("collapsed_left"));
	    		JP(this).attr("oleft",JP(this).attr("collapsed_left"));
	    	} 
	    	
	    	if(JP(this).attr("collapsed_width")) {
	    		JP(this).css("width",JP(this).attr("collapsed_width"));
	    		JP(this).attr("owidth",JP(this).attr("collapsed_width"));
	    	} 

			JP(this).show(); 
		});
	    
	    JP(eventElement + " .jp_vwexpanded").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px"); });
		JP(eventElement + " .jp_vwnormal").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });		    

	    JP(eventElement + " .jp_vwcollapsed").each(function() { 
	    	JP(this).css("top","0px");
	    	if(JP(this).attr("collapsed_top")) {
	    		JP(this).css("top",JP(this).attr("collapsed_top"));
	    		
	    	} 
	    	
	    	if(JP(this).attr("collapsed_height")) {
	    		JP(this).css("height",JP(this).attr("collapsed_height"));
	    		JP(this).attr("oheight",JP(this).attr("collapsed_height"));
	    	} 
	    	
	    	if(JP(this).attr("collapsed_left")) {
	    		JP(this).css("left",JP(this).attr("collapsed_left"));
	    		JP(this).attr("oleft",JP(this).attr("collapsed_left"));
	    	} 
	    	
	    	if(JP(this).attr("collapsed_width")) {
	    		JP(this).css("width",JP(this).attr("collapsed_width"));
	    		JP(this).attr("owidth",JP(this).attr("collapsed_width"));
	    	} 
	    });	

		stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'] = true;
		stagecollapsed = stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'];
		
		this.stageState = "collapsed";
	};
	this.updateStageToCollapsed = updateStageToCollapsed;
	
	var updateStageToExpanded = function() {
		JP(collapsedDiv).hide();
		
		JP(eventElement + " .jp_collapsed").each(function() { JP(this).hide(); });
		JP(eventElement + " .jp_normal").each(function() { JP(this).hide(); });
		JP(eventElement + " .jp_expanded").each(function() {
			if(JP(this).attr("expanded_top")) {
	    		JP(this).css("top",JP(this).attr("expanded_top"));
	    		JP(this).attr("otop",JP(this).attr("expanded_top"));
	    	} 
	    	
	    	if(JP(this).attr("expanded_height")) {
	    		JP(this).css("height",JP(this).attr("expanded_height"));
	    		JP(this).attr("oheight",JP(this).attr("expanded_height"));
	    	} 
	    	
	    	if(JP(this).attr("expanded_left")) {
	    		JP(this).css("left",JP(this).attr("expanded_left"));
	    		JP(this).attr("oleft",JP(this).attr("expanded_left"));
	    	} 
	    	
	    	if(JP(this).attr("expanded_width")) {
	    		JP(this).css("width",JP(this).attr("expanded_width"));
	    		JP(this).attr("owidth",JP(this).attr("expanded_width"));
	    	} 

			JP(this).show(); 
		});
	    
	    JP(eventElement + " .jp_vwcollapsed").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px"); });
		JP(eventElement + " .jp_vwnormal").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });		    

	    JP(eventElement + " .jp_vwexpanded").each(function() { 
	    	JP(this).css("top","0px");
	    	if(JP(this).attr("expanded_top")) {
	    		JP(this).css("top",JP(this).attr("expanded_top"));
	    		
	    	} 
	    	
	    	if(JP(this).attr("expanded_height")) {
	    		JP(this).css("height",JP(this).attr("expanded_height"));
	    		JP(this).attr("oheight",JP(this).attr("expanded_height"));
	    	} 
	    	
	    	if(JP(this).attr("expanded_left")) {
	    		JP(this).css("left",JP(this).attr("expanded_left"));
	    		JP(this).attr("oleft",JP(this).attr("expanded_left"));
	    	} 
	    	
	    	if(JP(this).attr("expanded_width")) {
	    		JP(this).css("width",JP(this).attr("expanded_width"));
	    		JP(this).attr("owidth",JP(this).attr("expanded_width"));
	    	} 
	    });	

		stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'] = false;
		stagecollapsed = stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'];
		
		this.stageState = "expanded";
	};
	this.updateStageToExpanded = updateStageToExpanded;
	
	var swapBackgroundImage = function(image_id) {
		JP(eventElement).removeClass("background1").removeClass("background2").removeClass("background3").removeClass("background4").removeClass("background5").removeClass("background6").removeClass("background7").removeClass("background8");
		var url = config[image_id + "_url"];
		
		JP(eventElement).css("background","transparent url(" + url + ") " + repeat);

	};
	this.swapBackgroundImage = swapBackgroundImage;
	
	var stageVisible = function() {
		var wh = JP(window).height();
		var ww = JP(window).width();
		var st = JP(window).scrollTop();
		
		var sh = JP($jp.eventElement).height();
		var stageOffset = JP($jp.eventElement).offset();
		// The element has to be visible, left is greater than or equal to 0, the unit is at least half on the screen  
		return (JP($jp.eventElement).is(":visible") && stageOffset.left >= 0 && (stageOffset.top + Math.floor(sh/2)) >= st && stageOffset.top <= st + wh); 
	};
	
	var trackTimeSpent = function(time) {
		trackedTimes[time] = true;
		var img = new Image();
		img.src = tp + "&t=TimeSpent_" + time + "&u=http://adscdn.jetpackdigital.com/tracking_pixel.gif";
	};
	
	var startTimeSpentTracker = function() {
		startTime = Math.floor(new Date().getTime()/1000);
		
		trackedTimes[1] = false;
		trackedTimes[5] = false;
		trackedTimes[15] = false;
		trackedTimes[20] = false;
		trackedTimes[30] = false;
		trackedTimes[45] = false;
		trackedTimes[60] = false;
		trackedTimes[90] = false;
		trackedTimes[120] = false;
		trackedTimes[150] = false;
		trackedTimes[180] = false;
		trackedTimes[240] = false;
		trackedTimes[300] = false;
		
		timeSpentInterval = setInterval(function() {
			if(stageVisible()) {
				totalTimeSpent++;
				for( i in trackedTimes ) {
					if(totalTimeSpent >= i && !trackedTimes[i]) {
						trackTimeSpent(i);
					}
				}
	
				if(totalTimeSpent > 300) clearInterval(timeSpentInterval);
			}
		},1000);
	};
	
	this.drawStyleSheet = function() {
        var style = document.createElement( 'style' );
        style.type = 'text/css';
        style.id = "style_stage_a2214487058a240c7ee159f0e2066b12";
		
        if( style.styleSheet )  // IE
                style.styleSheet.cssText = this.stylecss;
        else  // other browsers
                style.appendChild( document.createTextNode(this.stylecss) );

        var head = document.getElementsByTagName('head')[0];
        head.appendChild( style );
    };
    
    var createStyleSheet = function(ss_id, stylecss) {
    	if(document.getElementById(ss_id)) return;
    	
        var style = document.createElement( 'style' );
        style.type = 'text/css';
        style.id = ss_id;
		
        if( style.styleSheet )  // IE
                style.styleSheet.cssText = stylecss;
        else  // other browsers
                style.appendChild( document.createTextNode(stylecss) );

        var head = document.getElementsByTagName('head')[0];
        head.appendChild( style );
    };
    this.createStyleSheet = createStyleSheet;

	var trigger = function(event) {
		JP(eventElement).trigger(event);
	};
	
	var updateStyleSheet = function(stylecss) {
    	this.stylecss += stylecss;
    };
    this.updateStyleSheet = updateStyleSheet;

	this.drawElement = function(targetElement) {
		if(config.includescroller == "true") {
			JP.getScript("http://adscdn.jetpackdigital.com/jquery.scroller.js",function(){});
		} 
		
		this.stage = document.createElement("div");
		this.stage.id = id;
		JP(this.stage).css("position","relative");
		
		JP(targetElement).append(this.stage);
		
		if(config.usegreensock && config.usegreensock == "true") {
			if(typeof TweenMax == "undefined") {
				JP.getScript("http://adscdn.jetpackdigital.com/lib/greensock-v12-js/src/minified_gz/TweenMax.min.js", function() {
					jpgsloaded = true;
					JP($jp.eventElement).trigger("greensockLoaded");
					JP(document).trigger("greensockLoaded");
				});
			} else {
				jpgsloaded = true; 
				JP($jp.eventElement).trigger("greensockLoaded");
				JP(document).trigger("greensockLoaded");
			}
		}
		
		stagetargetelement = targetElement;
		
		if(config.normalheight) {
			config.height = config.normalheight;
		}
		
		var startcollapsed = (config.startcollapsed && config.startcollapsed == "true") ? true : false;
		if(config.expandedfrequencyper24 && config.expandedfrequencyper24 > 0) {
			if(config.freqconsecutive && config.freqconsecutive == "true") {
				var showExpanded = jpdGetCookie("stage_a2214487058a240c7ee159f0e2066b12_e");
				if(!showExpanded) {
					showExpanded = 1;
					startcollapsed = false;
					var exp = 1;
					jpdSetCookie("stage_a2214487058a240c7ee159f0e2066b12_e",showExpanded,exp,"/");
				} else {
					showExpanded++;
					if(config.expandedfrequencyper24 >= showExpanded) {
						startcollapsed = false;
						jpdSetCookie("stage_a2214487058a240c7ee159f0e2066b12_e",showExpanded,exp,"/");
					} else {
						startcollapsed = true;
					}
				}
			} else {
				var showExpanded = jpdGetCookie("stage_a2214487058a240c7ee159f0e2066b12_e");
				if(!showExpanded) {
					startcollapsed = false;
					var exp = 1/(parseInt(config.expandedfrequencyper24));
					jpdSetCookie("stage_a2214487058a240c7ee159f0e2066b12_e","1",exp,"/");
				} else {
					startcollapsed = true;
				}
			}
		}
		
		if(typeof overrideStageState == "undefined" || overrideStageState == null) {
			if(0) {
				overrideStageState = "collapsed";
			} else {
				overrideStageState = "normal";
			}
		}
		
		if(backgroundColor) {
			JP(this.stage).css("background-color",backgroundColor);
		}
		
		if(backgroundImage) {
			JP(this.stage).css("background-image","url(" + backgroundImage +")");
		}
	
		
		if(overrideStageState == "collapsed" || startcollapsed || (config.remembercollapsed == "true" && jpdGetCookie("stage_a2214487058a240c7ee159f0e2066b12_c") == "1")) {
			JP(this.stage).css("height",config.collapsedheight);
			JP(this.stage).attr("oheight",config.collapsedheight);
			JP(this.stage).attr("class",config.collapsedbackground);
			
			if(config.collapsedbackground == "background2") {
				if(backgroundImage2) {
					JP(this.stage).css("background-image", "url(" + backgroundImage2 + ")");
				} else {
					JP(eventElement).css("background-image", "url(http://adscdn.jetpackdigital.com/tracking_pixel.gif)");
				}
			}
			
			collapsed = true;
			this.collapsed = true;
			stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'] = true;
			stagecollapsed = stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'];
			JP(eventElement).bind("stageLoaded",function() { updateStageToCollapsed(); });
			
			if(config.remembercollapsed == "true") {
				var coll_exp = (config.remembercollapsedexp) ? parseFloat(config.remembercollapsedexp) :  1;
				jpdSetCookie("stage_a2214487058a240c7ee159f0e2066b12_c","1",coll_exp,"/");
			}
			
			if(config.stagetype != "VideoWall") {
			
				updateStageToNormal();
				
				JP(eventElement + " .jp_expanded").each(function() { JP(this).hide(); });
				JP(eventElement + " .jp_normal").each(function() { JP(this).hide(); });
				JP(eventElement + " .jp_collapsed").each(function() {
					if(JP(this).attr("collapsed_top")) {
			    		JP(this).css("top",JP(this).attr("collapsed_top"));
			    		if(jpUseResponsive_stage_a2214487058a240c7ee159f0e2066b12) {
			    		/*	alert(JP(this).parent().height());*/
			    			var perctop = (JP(this).attr("collapsed_top") / JP(this).parent().height()) * 100;
							JP(this.module).css("top",perctop+ "%");
						}
			    	} 
			    	
			    	if(JP(this).attr("collapsed_height")) {
			    		JP(this).css("height",JP(this).attr("collapsed_height"));
			    	} 
			    	
			    	if(JP(this).attr("collapsed_left")) {
			    		JP(this).css("left",JP(this).attr("collapsed_left"));
			    	} 
			    	
			    	if(JP(this).attr("collapsed_width")) {
			    		JP(this).css("width",JP(this).attr("collapsed_width"));
			    	} 
		
					JP(this).show(); 
				});
			    
			    JP(eventElement + " .jp_vwexpanded").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px"); });
				JP(eventElement + " .jp_vwnormal").each(function() { JP(this).attr("otop","-9999px"); JP(this).css("top","-9999px") });		    
		
			    JP(eventElement + " .jp_vwcollapsed").each(function() { 
			    	JP(this).css("top","0px");
			    	if(JP(this).attr("collapsed_top")) {
			    		JP(this).css("top",JP(this).attr("collapsed_top"));
			    	} 
			    	
			    	if(JP(this).attr("collapsed_height")) {
			    		JP(this).css("height",JP(this).attr("collapsed_height"));
			    	} 
			    	
			    	if(JP(this).attr("collapsed_left")) {
			    		JP(this).css("left",JP(this).attr("collapsed_left"));
			    	} 
			    	
			    	if(JP(this).attr("collapsed_width")) {
			    		JP(this).css("width",JP(this).attr("collapsed_width"));
			    	} 
			    });	    
		  } else {
		  	//defaultStageState = "jp_none";
		  } 

		} else {
			JP(this.stage).css("height",config.height);
			JP(this.stage).attr("class","background1");
			this.collapsed = false;
			collapsed = false;
			stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'] = false;
			stagecollapsed = stagecollapsedlist['stage_a2214487058a240c7ee159f0e2066b12'];
			JP(this.stage).attr("oheight",config.height);
			if(config.stagetype != "VideoWall") {
				JP(eventElement).bind("stageLoaded",function() { updateStageToNormal(); }); 
			} else {
				defaultStageState = "jp_none";
				JP(eventElement).bind("videoWallPlayerLoaded",function() {
					defaultStageState = "jp_all";
					JP(".jp_none").removeClass("jp_none");
					JP(".jp_videowallwrapper").removeClass("jp_none");
				});
			}
		}
		
		JP(this.stage).addClass("jpstage"); 
		
		JP(this.stage).css("width",config.width);
		JP(this.stage).attr("owidth",config.width);
		
		
		
		if(config.overflow) {
			JP(this.stage).css("overflow",config.overflow);
		} else {
			JP(this.stage).css("overflow","hidden");
		}
		
		JP(this.stage).css("font-size","10px");
		JP(this.stage).css("z-index","88");
		
		if(config.margin) {
			JP(this.stage).css("margin",config.margin);
		}
		
		if(config.zIndex) {
			JP(this.stage).css("z-index",config.zIndex);
		}
		
		element = this.stage;
		this.initializeJqueryFunctions();
		
		// Add the collapsed element 
		collapsedDiv = document.createElement("div");
		JP(collapsedDiv).attr("id",stage_id.replace("#","") + "_collapsed").attr("skipresp","true").addClass("jp_stage_collapsed"); 
		if(config.collapsedheight && (!config.autoexpandbutton || config.autoexpandbutton == "true")) {
			//JP(collapsedDiv).css("height",config.collapsedheight);
				
			JP(collapsedDiv).css("display","none").css("width","100%").css("height","100%").css("cursor","pointer");
			JP(collapsedDiv).css("position","absolute").css("top","0px").css("left","0px").css("z-index","99");
			JP(collapsedDiv).click(function() {
				JP(eventElement).trigger("expandStage");
				JP(this).hide();
				toNormalHeight();
			});
			JP(this.stage).append(JP(collapsedDiv));
			
			if(0 || (config.remembercollapsed == "true" && jpdGetCookie("stage_a2214487058a240c7ee159f0e2066b12_c") == "1")) {
				JP(collapsedDiv).show();
			}
		}
				
		//JP(targetElement).append(this.stage);
		
		if(typeof config.responsivedesign != "undefined" && config.responsivedesign == "true") {
			JP(eventElement).bind("updateResponsiveModules",function() { updateResponsiveModules(); });
			JP(eventElement).bind("stageLoaded",function() { initializeResponsiveModules(); });
			jpUseResponsive_stage_a2214487058a240c7ee159f0e2066b12 = true;
			rdwindowwidth = parseInt(config.rdwindowwidth.replace("px",""));
			origratio = JP(targetElement).width() / JP(window).width();
			unittotargetratio = parseInt(config.width.replace("px",""));
			JP(this.stage).attr("pwidth",JP(targetElement).width());
			
			var unitwidth = parseInt(config.width.replace("px",""));
			if(JP(window).width() < rdwindowwidth) {
				var smratio = JP(window).width() / rdwindowwidth;
				var zoom = smratio / origratio;
				if(zoom > 1) { zoom = 1; }
				var newwidth = parseInt(JP(eventElement).attr("owidth").replace("px","")) * zoom;
				var newheight = parseInt(JP(eventElement).attr("oheight").replace("px","")) * zoom;
				JP(eventElement).css("width",newwidth + "px").css("height",newheight + "px");
				JP(eventElement).css("background-size","100%");
			}
			
			/*
			if(JP(window).width() < JP(targetElement).width()) {
				var smratio = JP(targetElement).width() / JP(window).width();
				var zoom = smratio/ origratio;
				if(zoom > 1) { zoom = 1; }
				
				var newwidth = parseInt(JP(eventElement).attr("owidth").replace("px","")) * zoom;
				var newheight = parseInt(JP(eventElement).attr("oheight").replace("px","")) * zoom;
				JP(eventElement).css("width",newwidth + "px").css("height",newheight + "px");
				JP(eventElement).css("background-size","100%");
			}
			*/
			
			JP(window).resize(function() {
				if(JP(window).width() < rdwindowwidth) {
					var smratio = JP(window).width() / rdwindowwidth;
					var zoom = smratio / origratio;
					if(zoom > 1 ) { zoom = 1; }
					var newwidth = parseInt(JP(eventElement).attr("owidth").replace("px","")) * zoom;
					var newheight = parseInt(JP(eventElement).attr("oheight").replace("px","")) * zoom;
					JP(eventElement).css("width",newwidth + "px").css("height",newheight + "px");
					JP(eventElement).css("background-size","100%");
				} else {
					var newwidth = parseInt(JP(eventElement).attr("owidth").replace("px",""));
					var newheight = parseInt(JP(eventElement).attr("oheight").replace("px",""));
					JP(eventElement).css("width",newwidth + "px").css("height",newheight + "px");
					JP(eventElement).css("background-size","100%");
					//JP(stagetargetelement).css("-moz-transform", "scale(1)");
					//JP(stagetargetelement).css("zoom",1);
				}
			});
		}
		
		//this.stylecss = "";
		
		this.stylecss += ".jp_none { top: -9999px !important;  }";
		
		if(typeof(backgroundImage) != "undefined" && backgroundImage != "") {
			if(!backgroundColor) { backgroundColor = "transparent"; }
			this.stylecss += " " + eventElement + ".background1 { background: " + backgroundColor + " url(" + backgroundImage + ") " + repeat + "} ";
			JP(this.stage).append("<img src='" + backgroundImage + "' style='position: absolute; top: -9999px;'>");
		} 
		
		if(typeof(backgroundImage2) != "undefined" && backgroundImage2 != "") {
			this.stylecss += " " + eventElement + ".background2 { background: " + backgroundColor2 + " url(" + backgroundImage2 + ") " + repeat + "} ";
			JP(this.stage).append("<img src='" + backgroundImage2 + "' style='position: absolute; top: -9999px;'>");
		}
		
		if(typeof(backgroundImage3) != "undefined" && backgroundImage3 != "") {
			this.stylecss += " " + eventElement + ".background3 { background: " + backgroundColor3 + " url(" + backgroundImage3 + ") " + repeat + "} ";
			JP(this.stage).append("<img src='" + backgroundImage3 + "' style='position: absolute; top: -9999px;'>");
		}
		
		if(typeof(backgroundImage4) != "undefined" && backgroundImage4 != "") {
			this.stylecss += " " + eventElement + ".background4 { background: " + backgroundColor4 + " url(" + backgroundImage4 + ") " + repeat + "} ";
			JP(this.stage).append("<img src='" + backgroundImage4 + "' style='position: absolute; top: -9999px;'>");
		}
		
		if(typeof(backgroundImage5) != "undefined" && backgroundImage5 != "") {
			this.stylecss += " " + eventElement + ".background5 { background: " + backgroundColor5 + " url(" + backgroundImage5 + ") " + repeat + "} ";
			JP(this.stage).append("<img src='" + backgroundImage5 + "' style='position: absolute; top: -9999px;'>");
		}
		
		if(typeof(backgroundImage6) != "undefined" && backgroundImage6 != "") {
			this.stylecss += " " + eventElement + ".background6 { background: " + backgroundColor6 + " url(" + backgroundImage6 + ") " + repeat + "} ";
			JP(this.stage).append("<img src='" + backgroundImage6 + "' style='position: absolute; top: -9999px;'>");
		}
		
		if(typeof(backgroundImage7) != "undefined" && backgroundImage7 != "") {
			this.stylecss += " " + eventElement + ".background7 { background: " + backgroundColor7 + " url(" + backgroundImage7 + ") " + repeat + "} ";
			JP(this.stage).append("<img src='" + backgroundImage7 + "' style='position: absolute; top: -9999px;'>");
		}
		
		if(typeof(backgroundImage8) != "undefined" && backgroundImage8 != "") {
			this.stylecss += " " + eventElement + ".background8 { background: " + backgroundColor8 + " url(" + backgroundImage8 + ") " + repeat + "} ";
			JP(this.stage).append("<img src='" + backgroundImage8 + "' style='position: absolute; top: -9999px;'>");
		}
				
		
		var stage = this.stage;
		
		// Update css, if it exists
				if(config.css) {
					var csselements = config.css.split(";");
					for(var i = 0; i < csselements.length; i++) {
						var comps = csselements[i].match(/(.*?):(.*)/);
						if(comps && comps.length == 2) {
							JP(this.stage).css(comps[1].replace(" ",""),comps[2].replace(" ",""));
						}
					}
				}
				
		if(config.overflow && config.overflow != "undefined") {
			JP(this.stage).css("overflow",config.overflow)
		}
				
			
		JP(eventElement).bind("click", function(event) {
			//if(event.currentTarget.id == id) {
				if(config.clickevent) {
					JP(eventElement).trigger(config.clickevent, id);
				}
			//}
		});
		
		JP(eventElement).bind("collapseStage",function() {
			toCollapsedHeight();
		});
		
		JP(eventElement).bind("normalStage",function() {
			toNormalHeight();
		});
		
		JP(eventElement).bind("expandStage",function() {
			toExpandedHeight();
		});
		
		JP($jp.eventElement).bind("stageLoaded",function() {
			startTimeSpentTracker();
		});
		
		if(config.triggeronload) {
			JP(eventElement).attr("loadtrigger",config.triggeronload);
			/*JP(this.stage).bind("load", function(event) {
				JP(eventElement).trigger(config.triggeronload);
			});*/
		}
		
		if(parseInt(config.autocollapsetime) > 0) {
			setTimeout(function() { JP(eventElement).trigger("clickClose"); }, parseInt(config.autocollapsetime) * 1000);
		}
		
		
		
		
	};
};


var stage = null;




if(jpinlineunit || (typeof forcejpinline != "undefined" && forcejpinline)) {
	var telem = "jpbannerunit";
	if(telem != "jpbannerunit") jpActiveBanner = null;
	if(typeof overrideElem != "undefined") {
		telem = overrideElem;
	}
	stage = new Stage_stage_a2214487058a240c7ee159f0e2066b12();
	
	
	if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
		stage.drawElement(jpActiveBanner + " #" + telem);
	} else {
		stage.drawElement("#" + telem);
	}
} else {
	/*JP(document).ready(function() {*/
	var telem = "jpbannerunit";
	if(typeof overrideElem != "undefined") {
		telem = overrideElem;
	}
	stage = new Stage_stage_a2214487058a240c7ee159f0e2066b12();
	jpElementReady(telem,function() {
		stage.drawElement("#" + telem);
		closeJPSuperheader = function() {
			JP(eventElement).trigger("collapseStage");
		};

		expandJPSuperheader = function() {
			JP(eventElement).trigger("expandStage");
			stage.toNormalHeight();
		};
	});
};

if(typeof jpStages == "undefined") {
	jpStages = Array();
} 
$jp.stage = stage;
jpStages[stage.eventElement] = stage;
JP.ajaxSetup({cache: true});
var JPButton_stage_a2214487058a240c7ee159f0e2066b12 = function(settings, rawHandlers, button_id, stg_id) {
	
	var rawConfig = settings; 
	var config = eval("(" + rawConfig + ")");
	var origconfig = null;
	
	origconfig = config;
	config = jpGetDatedConfig(config);
	
	// Update urls to SSL if this is https
	if(typeof jpsecure != "undefined" && jpsecure) {
		for(k in config) {
			if(k.match(/_url/)) {
				config[k] = config[k].replace(/^http:\/\/.*?\//,"https://dn2l2rf4qf6g.cloudfront.net/");
			}
		}
	}
	
	var stage_id = "#" + stg_id;
	var eventHandlers = eval("(" + rawHandlers + ")");
	
	var eventElement = stage_id;
	if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
		eventElement = jpActiveBanner + " " + stage_id;
	}  
	
	var id = button_id;
	var title = config.title;
	var layer = (config.layer) ? "jp_" + config.layer : "jp_default";
	
	var attributes = jpGetAttributes(config,false);
	var stagestate = jpGetStageStates(config,false);
	
	var element = null;
	
	var hoverImage = (config.hoverImage_url) ? config.hoverImage_url : "http://ads.jetpackdigital.com/blank.png";
	var defaultImage = (config.defaultImage_url) ? config.defaultImage_url : "http://ads.jetpackdigital.com/blank.png";
	var selectedImage = (config.selectedImage_url) ? config.selectedImage_url : "http://ads.jetpackdigital.com/blank.png";
	var disabledImage = (config.disabledImage_url) ? config.disabledImage_url : "http://ads.jetpackdigital.com/blank.png";
	var spriteImage = (config.spriteImage_url) ? config.spriteImage_url : null;
	
	var selected = false;
	var disabled = false;
	
	var cursor = (config.cursortype) ? config.cursortype : "pointer";
	
	var trackingEvents = new Array();
	
	function executeFunctionByName(functionName, context /*, args */) {
  		var args = Array.prototype.slice.call(arguments).splice(2);
 		var namespaces = functionName.split(".");
  		var func = namespaces.pop();
  		for(var i = 0; i < namespaces.length; i++) {
    		context = context[namespaces[i]];
  		}
  		return context[func](this, args);
	};
	
	this.initializeJqueryFunctions = function() {
		this.$ = JP(element);
	}; 
	
	var getConfig = function() {
		return config;
	}; 
	this.getConfig = getConfig;
	
	var getElement = function() {
		return element;
	};
	this.getElement = getElement;		

	var css = function(arg1, arg2) {
		return JP(getElement()).css(arg1,arg2);
	};
	this.css = css;
	
	var hide = function() {
		JP(element).hide();
	};
	this.hide = hide;
	
	var show = function() {
		JP(element).show();
	};
	this.show = show;
	
		var width = function() {
		return JP(element).width();
	};
	this.width = width;
	
	var height = function() {
		return JP(element).height();
	};
	this.height = height;
	
	var getTop = function() {
		return JP(element).position().top;
	};
	this.getTop = getTop;
	
	var getLeft = function() {
		return JP(element).position().left;
	};
	this.getLeft = getLeft;
	
	var setTop = function(top) {
		top = (top+'').replace("px","") + "px";
		JP(element).css("top",top);
	};
	this.setTop = setTop;
	
	var setLeft = function(left) {
		left = (left+'').replace("px","") + "px";
		JP(element).css("left",left);
	};
	this.setLeft = setLeft;
	
	var onclick = function(handler) {
		JP(element).click(handler);
	};
	this.onclick = onclick;
	
	var updateImage = function(image_id) {
		var url = config[image_id + "_url"];
		JP(element).css("backgroundImage","url(" + url + ")");
		JP(element).css("backgroundRepeat","no-repeat");
		JP(element).find("img").attr("src",url);
	};
	this.updateImage = updateImage;
	
	var trigger = function(event) {
		JP(eventElement).trigger(event);
		/*JP(stage_id).trigger(event);*/
	};
	this.trigger = trigger;
	
	var track = function(eventName) {
		//if(!trackingEvents[eventName]) {
			var trackingpixel = "http://ads.jetpackdigital.com/tracking_pixel.gif?[random]";
            var cb = Math.floor(Math.random() * 10000000000);	 
        	var trackingsrc =trackingpixel.replace("[random]",ord);
       		var trackingimg = new Image();
        	trackingimg.src = tp + "&t=" + eventName + "&cb=" + cb + "&u=" + trackingsrc;
			trackingEvents[eventName] = true;
		//}
	};

	var disableButton = function() {
		JP(element).attr("class",id + "_disabled " + stagestate);
		if(config.addclass) {
			JP(element).addClass(config.addclass);
		}
		JP(element).css("cursor","default");
		
		disabled = true;
	};
	this.disableButton = disableButton;
	
	var selectButton = function() {
		JP(element).attr("class",id + "_selected " + stagestate);
		if(config.addclass) {
			JP(element).addClass(config.addclass);
		}
		JP(element).css("cursor","default");
		
		JP(element).attr("jpselected","true");
		selected = true;
	};
	this.selectButton = selectButton;
	
	var deselectButton = function() {
		JP(element).attr("class",id + "_default " + stagestate);
		if(config.addclass) {
			JP(element).addClass(config.addclass);
		}
		JP(element).css("cursor","pointer");
		
		JP(element).attr("jpselected","false");
		selected = false;
	};
	this.deselectButton = deselectButton;
	
	this.drawElement = function(targetElement) {
		this.module = document.createElement("div");
		JP(this.module).attr("id",id);
		JP(this.module).attr("module_title",title);
		JP(this.module).attr("class",id + "_default " + layer + " " + stagestate);
		
		if(config.addclass) {
			JP(this.module).addClass(config.addclass);
		}
		
		for(var a in attributes) {
			if(typeof attributes[a] == "string") {
        		JP(this.module).attr(a.replace(" ","_"),attributes[a]);
        	}
        }
		
		JP(this.module).css("position","absolute");
		JP(this.module).css("height",config.height);
		JP(this.module).css("width",config.width);
		JP(this.module).css("left",config.left);
		JP(this.module).css("top",config.top);
		JP(this.module).css("font-size","10px");
		
		/*if(jpUseResponsive_stage_a2214487058a240c7ee159f0e2066b12) {
			JP(this.module).css("height",config.percheight + "%");
			JP(this.module).css("width",config.percwidth + "%");
			JP(this.module).css("left",config.percleft + "%");
			JP(this.module).css("top",config.perctop + "%");
		}*/
		
		// Update css, if it exists
				if(config.css) {
					var csselements = config.css.split(";");
					for(var i = 0; i < csselements.length; i++) {
						var comps = csselements[i].split(":");
						JP(this.module).css(comps[0],comps[1]);
					}
				}
		
		
		
		if(config.zIndex) {
			JP(this.module).css("z-index",config.zIndex);
		}
		
		
		// Get the current date
		var date = new Date();
		var year = date.getFullYear();
		var month = ((date.getMonth() + 1) < 10) ? "0" + (date.getMonth() + 1) : date.getMonth(); 
		var day = ((date.getDate() + 1) < 10) ? "0" + (date.getDate() + 1) : date.getDate(); 
		var currentDate = year + "" + month + "" + day;
		//alert(currentDate  + " " + config.enableOnDate);
		
		if(!config.defaultState || config.defaultState != "disabled" || (config.enableOnDate && parseInt(config.enableOnDate) <= parseInt(currentDate))) {
			JP(this.module).css("cursor",cursor);
		} else {
			JP(this.module).attr("class",id + "_disabled " + stagestate);
			if(config.addclass) {
				JP(element).addClass(config.addclass);
			}
		}
		
		// Check to see if this button should be selected
		if(parseInt(config.enableOnDate) == parseInt(currentDate)) {
			JP(this.module).attr("class", id + "_selected " + stagestate); 
			if(config.addclass) {
				JP(element).addClass(config.addclass);
			}
			selected = true;
			
			JP(element).parent().attr("loadtrigger",config.clickEvent);
			/*JP(stage_id).attr("loadtrigger",config.clickEvent);*/
		}
		
		//JP(this.module).html("Button");
		
		if(config.paddingtop) {
			JP(this.module).css("padding-top",config.paddingtop);	
		}
		
		if(config.fontfamily) {
			JP(this.module).css("font-family",config.fontfamily);	
		}
		
		if(config.fontcolor) {
			JP(this.module).css("color",config.fontcolor);	
		}
		
		if(config.fontsize) {
			JP(this.module).css("font-size",config.fontsize);	
		}
		
		if(config.backgroundcolor) {
			JP(this.module).css("background-color",config.backgroundcolor);
		}
		
		if(config.overflow) {
			JP(this.module).css("overflow",config.overflow);
		}
		
		if(config.display) {
			if(config.display && config.display == "true") { 
				config.display = "block";
			} else if (config.display && config.display == "false") {
				config.display = "none";
			} else if(!config.display) {
				config.display = "block";
			}
			JP(this.module).css("display",config.display);
		}
		
		if(config.displayoncollapse && jpdGetCookie(stage_id.replace("#","") + "_c") == "1") {
			if(config.displayoncollapse == "true") { 
				config.displayoncollapse = "block";
			} else if(config.displayoncollapse == "false") {
				config.displayoncollapse = "none";
			}
			JP(this.module).css("display",config.displayoncollapse);
		}
		
		element = this.module;
		this.initializeJqueryFunctions();
		
		var stylecss = "";
		var loadedSprite = false;
		
		if(typeof spriteImage != "undefined" && spriteImage !=null && config.defaultOffset) {
			if(!config.defaultState || config.defaultState != "disabled" || (config.enableOnDate && parseInt(config.enableOnDate) <= parseInt(currentDate))) {
				stylecss += "." + id + "_default {background: transparent url(" + spriteImage + ") " + config.defaultOffset + " no-repeat; background-size: 100% !important;}";
			} else {
				stylecss += "." + id + "_default {  background: transparent url(" + spriteImage + ") " + config.disabledOffset + " no-repeat; background-size: 100% !important;}";
			}
			
			// Create an off screen image
			if(!loadedSprite) {
				loadedSprite = true;
				JP(element).append("<img src='" + spriteImage + "' style='position: absolute; top: -9999px;'/>");
			}
		} else if(typeof(defaultImage) != "undefined" && defaultImage != "") {
			if(!config.defaultState || config.defaultState != "disabled" || (config.enableOnDate && parseInt(config.enableOnDate) <= parseInt(currentDate))) {
				stylecss += "." + id + "_default {background: transparent url(" + defaultImage + ") no-repeat; background-size: 100%;}";
			} else {
				stylecss += "." + id + "_default {  background: transparent url(" + disabledImage + ") no-repeat; background-size: 100%;}";
			}
			
			JP(element).css("background","transparent url(" + defaultImage + ") no-repeat");
			
			// Create an off screen image
			JP(element).append("<img src='" + defaultImage + "' style='position: absolute; top: -9999px;'/>");
		}
		
		if(typeof spriteImage != "undefined" && spriteImage !=null && config.hoverOffset) {
			stylecss += "." + id + "_hover {  background: transparent url(" + spriteImage + ") " + config.hoverOffset + " no-repeat !important; background-size: 100%;}";
			// Create an off screen image
			if(!loadedSprite) {
				loadedSprite = true;
				JP(element).append("<img src='" + spriteImage + "' style='position: absolute; top: -9999px;'/>");
			}

		} else if(typeof(hoverImage) != "undefined" && hoverImage != "") { 
			stylecss += "." + id + "_hover {  background: transparent url(" + hoverImage + ") no-repeat !important; background-size: 100%;}";	
			JP(element).append("<img src='" + hoverImage + "' style='position: absolute; top: -9999px;'/>");
		}
		
		if(typeof(selectedImage) != "undefined" && selectedImage != "") {
		 	stylecss +=  "." + id + "_selected {  background: transparent url(" + selectedImage + ") no-repeat !important; background-size: 100%;}";
		 	JP(element).append("<img src='" + selectedImage + "' style='position: absolute; top: -9999px;'/>");
		}
		
		if(typeof(disabledImage) != "undefined" && disabledImage != "") {
		 	stylecss +=  "." + id + "_disabled {  background: transparent url(" + disabledImage + ") no-repeat !important; background-size: 100%;}";
		 	JP(element).append("<img src='" + disabledImage + "' style='position: absolute; top: -9999px;'/>");
		}
		
		if(typeof spriteImage != "undefined" && spriteImage != "null") {
			if(config.defaultOffset) {
				
			}
		}
		
		if(config.defaultState && config.defaultState == "jpselected") {
			JP(element).attr("class", id + "_selected " + stagestate); 
			if(config.addclass) {
				JP(element).addClass(config.addclass);
			}
			selected = true;
		}
		
		stage.updateStyleSheet(stylecss);
		
		
		
				
		var cacheHoverImageElement = document.createElement("div");
		JP(cacheHoverImageElement).css("position","absolute");
		JP(cacheHoverImageElement).css("left","-9999px");		
		JP(cacheHoverImageElement).attr("class",id + "_hover " + stagestate);
		if(config.addclass) {
			JP(element).addClass(config.addclass);
		}
		JP(targetElement).append(JP(cacheHoverImageElement));

		
		if(((config.spriteImage && config.hoverOffset) || config.hoverImage) && (!config.defaultState || config.defaultState != "disabled" || (config.enableOnDate && parseInt(config.enableOnDate) <= parseInt(currentDate)))) {
			JP(this.module).mouseover(function() {
				if(JP(element).attr("jpselected") && JP(element).attr("jpselected") != "false" ) {
					selected = true;
				} else {
					selected = false;
				}
				if(!selected && !disabled) {
					
					JP(element).attr("class",id + "_hover " + jpGetStageStates(config,false));
					if(config.addclass) {
						JP(element).addClass(config.addclass);
					}
					JP(element).removeAttr("jpselected");
				} 
			});
			
			JP(this.module).mouseout(function() {
				if(JP(element).attr("jpselected") && JP(element).attr("jpselected") != "false" ) {
					selected = true;
				} else {
					selected = false;
				}
				if(!selected && !disabled) {
					JP(element).attr("class",id + "_default " + jpGetStageStates(config,false));
					if(config.addclass) {
						JP(element).addClass(config.addclass);
					}
					JP(element).removeClass(id + "_hover");
					JP(element).removeClass(id + "_selected");
					JP(element).removeAttr("jpselected");
				}
			});
			//style += "#" + id + "_cache {  background: transparent url(" + hoverImage + ") no-repeat !important;}"; 
			//style += "#" + id + ":hover { background: transparent url(" + hoverImage + ") no-repeat !important;}";
		}
		
		if(jpdGetCookie(stage_id.replace("#","") + "_c") == "1") {
			if(config.displayoncollapse == "false") {
				JP(element).css("display","none");
			} else if(config.displayoncollapse == "true"){
				JP(element).css("display","block");
			} else {
				JP(element).css("display",config.displayoncollapse);
			}
		}
		
		if(config.swfoverlaybutton && config.swfoverlaybutton == "true") {
			var indiv = document.createElement("div");
			JP(indiv).attr("id",id + "_overlay");
			JP(indiv).html("<object id='" + id + "_object' type='img/gif' style='background-color: transparent'><div id='" + id + "_image' style='background: transparent url(http://ads.jetpackdigital.com/tracking_pixel.gif); height: 100%; width: 100%;'></div></object>");
			JP(this.module).append(indiv);
			/*if(!config.defaultState || config.defaultState != "disabled" || (config.enableOnDate && parseInt(config.enableOnDate) <= parseInt(currentDate))) {*/
				JP(indiv).bind("click", function() {
					if(config.clickEvent && !disabled) {
						JP(this.module).trigger("click");
					}
				});
			/*}*/

		}
		
		JP(targetElement).append(this.module);
		
		
		if(!config.defaultState || config.defaultState != "disabled" || (config.enableOnDate && parseInt(config.enableOnDate) <= parseInt(currentDate))) {
			JP(this.module).bind("click", function() {
				if(config.clickEvent && !disabled) {
					JP(eventElement).trigger(config.clickEvent);
					/*JP(stage_id).trigger(config.clickEvent);*/
				}
				
				if(config.clickthroughurl) {
					window.open(tp + "&t=" + config.title + "_clickthrough&u="+config.clickthroughurl, "_blank");
				}

			});
		}
		
		
		if(config.triggeronload) {
			JP(eventElement).trigger(config.triggeronload);
			/*JP(stage_id).trigger(config.triggeronload);*/
		}
		
		if(config.trackClickEvent && config.trackClickEvent == "true") {
			JP(this.module).bind("click",function() {
				var img = new Image();
				img.src = tp + "&t=clicked_" + config.title.replace(/ /g,"_") + "&u=http://ads.jetpackdigital.com/tracking_pixel.gif";			
			});
		}
		
		var handlers = new Array();
		
		for(var i = 0; i < eventHandlers.length; i++) {
			var handler = eventHandlers[i];
			handlers[handler.event] = handler.handlerCode;
			//eval("this." + handler.event + " = function() {" +  handler.handlerCode + "}");
			/*JP(stage_id).bind(handler.event,function(event, param1) {*/
			
			JP(eventElement).bind(handler.event,function(event, param1) {
				try {
					eval(handlers[event.type]);
				} catch(ex) {
					if(typeof console != "undefined") {
						console.log("ERROR WITH: " + event.type + " on " + id + " : " + ex.message);
					}
				}
			});
		}
		
		if(config.mouseOverEvent) {
			JP(this.module).bind("mouseover", function() {
				JP(eventElement).trigger(config.mouseOverEvent);
				/*JP(stage_id).trigger(config.mouseOverEvent);*/
			});
		}
		
		if(config.mouseOutEvent) {
			JP(this.module).bind("mouseout", function() {
				JP(eventElement).trigger(config.mouseOutEvent);
				/*JP(stage_id).trigger(config.mouseOutEvent);*/
			});
		}
	};
};

var module = null;
var bcfg_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12 = '{\"id_noedit\":\"ButtonModule_2\",\"title\":\"bg\",\"varname\":\"bg\",\"parent\":\"stage\",\"layer\":\"default\",\"width\":\"300px\",\"height\":\"600px\",\"top\":\"0px\",\"left\":\"0px\",\"zIndex\":\"100\",\"stagestate\":\"Normal\",\"defaultImage_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14236915681_300x600_bg_v2.jpg\",\"defaultImage\":\"14236915681_300x600_bg_v2\",\"clickEvent\":\"clickExpand\",\"trackClickEvent\":\"true\"}';
var behd_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12 = '[]';
var bid_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12 = 'Button_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12';
var bsid_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12 = 'stage_a2214487058a240c7ee159f0e2066b12';

if(jpinlineunit) {
	module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12);
	var parts = $jp.eventElement.split(" ");
	if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
	} else {
		parts.pop();
		module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
	}
	/*if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
		module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
	} else {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
	} */
	
	$jp.bg = module;
} else {
	jpElementReady("stage_a2214487058a240c7ee159f0e2066b12",function() { 
		module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_2_stage_a2214487058a240c7ee159f0e2066b12);
		var parts = $jp.eventElement.split(" ");
		if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
		} else {
			parts.pop();
			module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
		}
		/*
		if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
			module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
		} else {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
		}*/  
		$jp.bg = module;
	});
};

var module = null;
var bcfg_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12 = '{\"id_noedit\":\"ButtonModule_4\",\"title\":\"openslide\",\"varname\":\"openslide\",\"parent\":\"stage\",\"layer\":\"default\",\"width\":\"262px\",\"height\":\"13px\",\"top\":\"420px\",\"left\":\"20px\",\"zIndex\":\"200\",\"stagestate\":\"Normal\",\"defaultImage_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566251300x600ctaexpand262x13.png\",\"defaultImage\":\"1300x600ctaexpand262x13\",\"hoverImage_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566261300x600ctaexpandro262x13.png\",\"hoverImage\":\"1300x600ctaexpandro262x13\",\"clickEvent\":\"clickExpand\",\"trackClickEvent\":\"true\"}';
var behd_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12 = '[]';
var bid_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12 = 'Button_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12';
var bsid_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12 = 'stage_a2214487058a240c7ee159f0e2066b12';

if(jpinlineunit) {
	module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12);
	var parts = $jp.eventElement.split(" ");
	if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
	} else {
		parts.pop();
		module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
	}
	/*if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
		module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
	} else {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
	} */
	
	$jp.openslide = module;
} else {
	jpElementReady("stage_a2214487058a240c7ee159f0e2066b12",function() { 
		module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_4_stage_a2214487058a240c7ee159f0e2066b12);
		var parts = $jp.eventElement.split(" ");
		if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
		} else {
			parts.pop();
			module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
		}
		/*
		if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
			module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
		} else {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
		}*/  
		$jp.openslide = module;
	});
};

var module = null;
var bcfg_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12 = '{\"id_noedit\":\"ButtonModule_8\",\"title\":\"close\",\"varname\":\"close\",\"parent\":\"stage\",\"layer\":\"default\",\"width\":\"24px\",\"height\":\"24px\",\"top\":\"15px\",\"left\":\"561px\",\"zIndex\":\"700\",\"stagestate\":\"Expanded\",\"defaultImage_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566242ctaclose24x24.png\",\"defaultImage\":\"2ctaclose24x24\",\"hoverImage_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566262ctaclosero24x24.png\",\"hoverImage\":\"2ctaclosero24x24\",\"clickEvent\":\"clickClose\",\"trackClickEvent\":\"true\",\"Expanded Top\":\"15px\",\"Expanded Left\":\"561px\"}';
var behd_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12 = '[]';
var bid_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12 = 'Button_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12';
var bsid_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12 = 'stage_a2214487058a240c7ee159f0e2066b12';

if(jpinlineunit) {
	module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12);
	var parts = $jp.eventElement.split(" ");
	if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
	} else {
		parts.pop();
		module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
	}
	/*if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
		module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
	} else {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
	} */
	
	$jp.close = module;
} else {
	jpElementReady("stage_a2214487058a240c7ee159f0e2066b12",function() { 
		module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_8_stage_a2214487058a240c7ee159f0e2066b12);
		var parts = $jp.eventElement.split(" ");
		if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
		} else {
			parts.pop();
			module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
		}
		/*
		if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
			module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
		} else {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
		}*/  
		$jp.close = module;
	});
};

var module = null;
var bcfg_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12 = '{\"id_noedit\":\"ButtonModule_13\",\"title\":\"slideshow\",\"varname\":\"slideshow\",\"parent\":\"stage\",\"layer\":\"default\",\"width\":\"600px\",\"height\":\"600px\",\"top\":\"0px\",\"left\":\"0px\",\"zIndex\":\"400\",\"stagestate\":\"Expanded\",\"defaultImage_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566262slide1shyp600x600.jpg\",\"defaultImage\":\"2slide1shyp600x600\",\"clickEvent\":\"clickThrough\",\"trackClickEvent\":\"true\",\"1_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566262slide1shyp600x600.jpg\",\"1\":\"2slide1shyp600x600\",\"2_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566252slide2classpass600x600.jpg\",\"2\":\"2slide2classpass600x600\",\"3_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566252slide3peek600x600.jpg\",\"3\":\"2slide3peek600x600\",\"4_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232586282slide4blueapron600x600v2.jpg\",\"4\":\"2slide4blueapron600x600v2\",\"5_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232586272slide5glamsquad600x600v2.jpg\",\"5\":\"2slide5glamsquad600x600v2\",\"6_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232586282slide6alfred600x600v2.jpg\",\"6\":\"2slide6alfred600x600v2\",\"Expanded Top\":\"0px\",\"Expanded Left\":\"0px\"}';
var behd_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12 = '[]';
var bid_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12 = 'Button_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12';
var bsid_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12 = 'stage_a2214487058a240c7ee159f0e2066b12';

if(jpinlineunit) {
	module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12);
	var parts = $jp.eventElement.split(" ");
	if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
	} else {
		parts.pop();
		module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
	}
	/*if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
		module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
	} else {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
	} */
	
	$jp.slideshow = module;
} else {
	jpElementReady("stage_a2214487058a240c7ee159f0e2066b12",function() { 
		module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_13_stage_a2214487058a240c7ee159f0e2066b12);
		var parts = $jp.eventElement.split(" ");
		if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
		} else {
			parts.pop();
			module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
		}
		/*
		if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
			module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
		} else {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
		}*/  
		$jp.slideshow = module;
	});
};

var module = null;
var bcfg_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12 = '{\"id_noedit\":\"ButtonModule_15\",\"title\":\"next\",\"varname\":\"next\",\"parent\":\"stage\",\"layer\":\"default\",\"width\":\"26px\",\"height\":\"54px\",\"top\":\"15px\",\"left\":\"15px\",\"zIndex\":\"500\",\"stagestate\":\"Expanded\",\"defaultImage_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566252arrowright24x54.png\",\"defaultImage\":\"2arrowright24x54\",\"hoverImage_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566252arrowrightro24x54.png\",\"hoverImage\":\"2arrowrightro24x54\",\"clickEvent\":\"clickNext\",\"trackClickEvent\":\"true\",\"Expanded Top\":\"265px\",\"Expanded Left\":\"565px\"}';
var behd_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12 = '[]';
var bid_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12 = 'Button_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12';
var bsid_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12 = 'stage_a2214487058a240c7ee159f0e2066b12';

if(jpinlineunit) {
	module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12);
	var parts = $jp.eventElement.split(" ");
	if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
	} else {
		parts.pop();
		module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
	}
	/*if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
		module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
	} else {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
	} */
	
	$jp.next = module;
} else {
	jpElementReady("stage_a2214487058a240c7ee159f0e2066b12",function() { 
		module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_15_stage_a2214487058a240c7ee159f0e2066b12);
		var parts = $jp.eventElement.split(" ");
		if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
		} else {
			parts.pop();
			module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
		}
		/*
		if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
			module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
		} else {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
		}*/  
		$jp.next = module;
	});
};

var module = null;
var bcfg_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12 = '{\"id_noedit\":\"ButtonModule_17\",\"title\":\"previous\",\"varname\":\"previous\",\"parent\":\"stage\",\"layer\":\"default\",\"width\":\"24px\",\"height\":\"54px\",\"top\":\"15px\",\"left\":\"15px\",\"zIndex\":\"600\",\"stagestate\":\"Expanded\",\"defaultImage_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566252arrowleft24x54.png\",\"defaultImage\":\"2arrowleft24x54\",\"hoverImage_url\":\"http:\\/\\/adscdn.jetpackdigital.com\\/sites\\/_uploads\\/14232566242arrowleftro24x54.png\",\"hoverImage\":\"2arrowleftro24x54\",\"clickEvent\":\"clickPrevious\",\"trackClickEvent\":\"true\",\"Expanded Top\":\"265px\",\"Expanded Left\":\"14px\"}';
var behd_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12 = '[]';
var bid_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12 = 'Button_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12';
var bsid_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12 = 'stage_a2214487058a240c7ee159f0e2066b12';

if(jpinlineunit) {
	module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12);
	var parts = $jp.eventElement.split(" ");
	if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
	} else {
		parts.pop();
		module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
	}
	/*if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
		module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
	} else {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
	} */
	
	$jp.previous = module;
} else {
	jpElementReady("stage_a2214487058a240c7ee159f0e2066b12",function() { 
		module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_17_stage_a2214487058a240c7ee159f0e2066b12);
		var parts = $jp.eventElement.split(" ");
		if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
		} else {
			parts.pop();
			module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
		}
		/*
		if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
			module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
		} else {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
		}*/  
		$jp.previous = module;
	});
};

var module = null;
var bcfg_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12 = '{\"id_noedit\":\"ButtonModule_21\",\"title\":\"clickthrough\",\"varname\":\"clickthrough\",\"parent\":\"stage\",\"layer\":\"default\",\"width\":\"147px\",\"height\":\"89px\",\"top\":\"444px\",\"left\":\"151px\",\"zIndex\":\"300\",\"stagestate\":\"Normal\",\"clickEvent\":\"clickThrough\",\"trackClickEvent\":\"true\"}';
var behd_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12 = '[]';
var bid_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12 = 'Button_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12';
var bsid_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12 = 'stage_a2214487058a240c7ee159f0e2066b12';

if(jpinlineunit) {
	module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12);
	var parts = $jp.eventElement.split(" ");
	if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
	} else {
		parts.pop();
		module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
	}
	/*if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
		module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
	} else {
		module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
	} */
	
	$jp.clickthrough = module;
} else {
	jpElementReady("stage_a2214487058a240c7ee159f0e2066b12",function() { 
		module = new JPButton_stage_a2214487058a240c7ee159f0e2066b12(bcfg_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12, behd_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12, bid_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12, bsid_ButtonModule_21_stage_a2214487058a240c7ee159f0e2066b12);
		var parts = $jp.eventElement.split(" ");
		if(parts.length == 1 || "stage_a2214487058a240c7ee159f0e2066b12".match(/panel_/)) {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12");
		} else {
			parts.pop();
			module.drawElement(parts.join(" ") + " #stage_a2214487058a240c7ee159f0e2066b12");
		}
		/*
		if(typeof jpActiveBanner != "undefined" && jpActiveBanner) {
			module.drawElement(jpActiveBanner + " #stage_a2214487058a240c7ee159f0e2066b12", true);
		} else {
			module.drawElement("#stage_a2214487058a240c7ee159f0e2066b12"); 
		}*/  
		$jp.clickthrough = module;
	});
};
stage.updateStyleSheet("");

/* CUSTOM JS */

$jp.bind("clickExpand", function() {   
    JP(".jpstage").animate({width: "600px", left: "-300px"});  
    $jp.stage.toExpandedHeight();    
    $jp.slideCount = 1;   
    $jp.slideshow.updateImage($jp.slideCount);   
});    
    
$jp.bind('clickClose', function() {    
    JP(".jpstage").css({width: "300px", left: "0px"});  
	$jp.stage.toNormalHeight();    
});    
    
$jp.bind("clickThrough", function() {                                                                                      
    jpClickThrough();                                                                                      
});   
   
$jp.bind('clickNext', function() {   
    $jp.slideCount = $jp.slideCount + 1;   
    if ($jp.slideCount > 6)   
        $jp.slideCount = 1;   
    $jp.slideshow.updateImage($jp.slideCount);   
});   
   
$jp.bind('clickPrevious', function() {   
    $jp.slideCount = $jp.slideCount - 1;   
    if ($jp.slideCount < 1)   
        $jp.slideCount = 6;   
    $jp.slideshow.updateImage($jp.slideCount);   
}); 
$jp.bind("clickExpand", function() { 
 
});

/* END CUSTOM JS */


 
			var eventElement = '#stage_a2214487058a240c7ee159f0e2066b12';
			if(typeof jpActiveBanner != 'undefined' && jpActiveBanner) eventElement = jpActiveBanner + ' ' + eventElement;
			if(jpinlineunit) {
				stage.drawStyleSheet();	
				if(JP(eventElement).attr('loadtrigger')) {
					JP(eventElement).trigger(JP(eventElement).attr('loadtrigger'));
				};
				
				JP(eventElement).trigger('preStageLoaded');
				JP(document).trigger('preStageLoaded');
				JP(eventElement).trigger('stageLoaded');
				JP(document).trigger('stageLoaded');
				if(typeof window.jpHideBannerFrame != 'undefined') window.jpHideBannerFrame();
			} else { jpElementReady(eventElement,function() {
				stage.drawStyleSheet();
				if(JP(eventElement).attr('loadtrigger')) {
					JP(eventElement).trigger(JP(eventElement).attr('loadtrigger'));
				};
				
				JP(eventElement).trigger('preStageLoaded');
				JP(document).trigger('preStageLoaded');
				JP(eventElement).trigger('stageLoaded');
				JP(document).trigger('stageLoaded');
				if(typeof window.jpHideBannerFrame != 'undefined') window.jpHideBannerFrame();
			});};
		
		       	
       				JP("body").append("<div id='jp_code'><style> #secondary-featured > .container-rail, .module-container-rail > .container-rail { overflow: visible !important; } </style></div>");
		
		
			};
	
		
	this.ReportDelivery = function() {
		//if(!this.running) return;
		
				
		
		if(typeof ord == 'undefined') ord=Math.random()*1000000000;
		var imgdiv = document.createElement("div");
		JP(imgdiv).css("height","1px");
		JP(imgdiv).css("position","absolute").css("top","-9999px");
		var img = document.createElement("img");
		
		var img = new Image();
		var rawtpurl = "Xvp%2B%2B4q%2FZpw%3D";
		img.src = 'http://jptracking.elasticbeanstalk.com/jpt?ord='+ord+'&sid=844&oid=4636&lid=23572&csid=&c=0&rf=' + escape(ref) + '&itt=' + rawtpurl;
		
			};
	
	this.ShowTracking = function() {
			};
};

var customunit_23572_0 = new bannerunit_844__23572(); customunit_23572_0.Init(); customunit_23572_0.Run(); customunit_23572_0.ReportDelivery();		};

	var scripts = document.getElementsByTagName('script');
	var lastScript = scripts[scripts.length - 1];
	if(0 || lastScript.parentNode.tagName.toLowerCase() != "head") {
      	try{ 
      		if(typeof fid == "undefined" || (fid != jpBannerId && !qfid)) {
      			fid = jpBannerId;
      		}
      		      		
      		if(typeof fid != "undefined") {
      			if(!document.getElementById("jpplatform_23572_" + fid)) {
 					document.write("<div id='jpplatform_23572_" + fid + "' fid='" + fid + "' class='jpplatform_23572' rel='jpplatform_23572_" + fid + "'></div>");
 				}
 			} else {
 				if(!document.getElementById("jpplatform_23572")) {
 					document.write("<div id='jpplatform_23572' rel='jpplatform_23572'></div>");

 				}
 			} 
 		} catch(ex) {  }
 		
	};

		if(typeof loadingswfobject == "undefined" || typeof swfobject == "undefined") {
			loadingswfobject = true;
			
			var swfobjecturl = (jpsecure) ? "https://dn2l2rf4qf6g.cloudfront.net/swfobject.js" : "http://adscdn.jetpackdigital.com/swfobject.js";
			swfobjecturl = "http://adscdn.jetpackdigital.com/swfobject.js";
			jpLoadScript(swfobjecturl,function() { 
				
				
									var jptimeout = 100;
							
				if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
 					var ffversion=new Number(RegExp.$1);
 					if (ffversion<4) {
 						if(jptimeout < 1500) {
 							jptimeout = 1500;
 						}
 					}			
 				}
				setTimeout(function() { jpLoadJQuery_23572(); },jptimeout);	
			});
		} else {
									var jptimeout = 100;
							
				
				/*if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
 					var ffversion=new Number(RegExp.$1);
 					if (ffversion<4) {
 						if(jptimeout < 1500) {
 							jptimeout = 1500;
 						}
 					}		
 				}*/
 				
 				
				setTimeout(function() { jpLoadJQuery_23572(); },jptimeout);
		}
};

};

};

jpActiveBanners[jpBannerIdGlobal](jpBannerIdGlobal);
