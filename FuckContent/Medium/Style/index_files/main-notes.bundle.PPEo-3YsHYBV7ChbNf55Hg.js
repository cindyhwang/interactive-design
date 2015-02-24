(function(z){
var o6 = function(a, b, c) {
  return(0,z.kt)("https://" + z.jr(c.textshotHost) + "/image?content\x3d" + z.hr(a.mz) + "\x26title\x3d" + z.hr(a.post.title) + "\x26author\x3d" + z.hr(a.post.creator.name) + "\x26date\x3d" + z.hr(a.post.virtuals.firstPublishedAtEnglish) + "\x26authorAvatarId\x3d" + z.hr(a.post.creator.imageId));
};
var p6 = function(a) {
  return String(z.zv(o6, {post:a.ca, mz:a.YC.mz}));
};
var q6 = function() {
  return(0,z.K)('\x3cspan class\x3d"tweetEditor-imageStatusIcon"\x3e\x26times;\x3c/span\x3e' + z.M((0,z.K)("Failed to load image")));
};
var r6 = function() {
  return(0,z.K)("Tweet must be 140 characters or less.");
};
var s6 = function(a) {
  var b = new z.Kl(p6(a)), c = {};
  b.Te.qf().forEach(function(a) {
    c[a] = b.Te.get(a);
  }, a);
  return c;
};
var t6 = function(a, b) {
  var c = z.TX(b, !0);
  return 0 < c && 140 >= c ? !0 : (c = a.V.J(".js-tweetEditor-text"), (new z.eJ(c, {name:"shimmy-shake", duration:400})).start(), c = a.V.J(".js-tweetEditor-error"), z.Av(c, r6), !1);
};
var u6 = function(a) {
  var b = a.V.J(".js-tweetEditor-image"), c = a.V.J(".js-tweetEditor-imageContainer"), d = a.V.J(".js-tweetEditor-imageStatus");
  b.onload = function() {
    z.u(c, "u-hide");
    z.t(d, "u-hide");
    this.ZA = !0;
  }.bind(a);
  b.onerror = function() {
    z.Av(d, q6);
  };
  z.t(c, "u-hide");
  b.src = p6(a);
};
var v6 = function(a) {
  return(0,z.K)(z.M(z.Su(String(a.content))) + " —" + z.WX(a) + " " + z.I(a.url));
};
var w6 = function(a, b, c) {
  return(0,z.kt)("https://twitter.com/" + z.jr(c.currentUser.twitterScreenName) + "/status/" + z.jr(a.id));
};
var x6 = function(a, b, c) {
  return(0,z.K)('\x3cdiv class\x3d"tweetEditor u-fillWidth"\x3e\x3cdiv class\x3d"js-tweetEditor-error tweetEditor-error u-textAlignCenter u-danger"\x3e\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-avatar"\x3e' + z.M(z.$J({user:a.user, Sj:!0}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-tweetContainer"\x3e\x3cdiv class\x3d"tweetEditor-textContainer"\x3e\x3cdiv class\x3d"js-tweetEditor-text textInput--chromeless u-textAlignLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-textshot"\x3e\x3cdiv class\x3d"js-tweetEditor-imageStatus tweetEditor-imageStatus"\x3e' + 
  (0,z.K)('\x3cspan class\x3d"icon icon--partImage tweetEditor-imageStatusIcon"\x3e\x3c/span\x3e' + z.M((0,z.K)("Loading image attachment…"))) + "\x3c/div\x3e" + z.M(z.lK({icon:"icon--addCircled", yb:!0, wa:"js-tweetEditor-addTextshot tweetEditor-addTextshot u-hide", action:"add-textshot", text:(0,z.S)("" + z.M((0,z.K)("Include quote image")))}, c)) + '\x3cdiv class\x3d"js-tweetEditor-imageContainer tweetEditor-imageContainer"\x3e' + z.M(z.aK({Ea:(0,z.S)("\x26times;"), oh:!0, wa:"js-tweetEditor-removeTextshot tweetEditor-removeTextshot", 
  title:(0,z.S)("" + z.M((0,z.K)("Remove quote image from tweet"))), action:"remove-textshot"}, c)) + '\x3cimg class\x3d"js-tweetEditor-image tweetEditor-image" data-action\x3d"toggle-expand-image"\x3e\x3c/img\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' + (c.variants.textshots_userid ? '\x3cdiv class\x3d"u-danger"\x3eTweet to test account @fuzzyoctopusfee\x3c/div\x3e' : ""));
};
var y6 = function(a) {
  return(0,z.K)('Tweet posted. \x3ca target\x3d"_blank" class\x3d"link link--underline" href\x3d"' + z.N(z.O(a.cO)) + '"\x3e' + z.I(a.cO) + "\x3c/a\x3e");
};
var z6 = function() {
  this.Nd = {};
  z.F.call(this, void 0);
};
var A6 = function(a, b) {
  a.oH = b;
  return a;
};
var B6 = function(a, b) {
  a.Ka && z.kd(a.Ka, "u-hide", b);
};
var C6 = function(a, b, c) {
  z.tm.call(this);
  this.Tq = a.get("dialog");
  this.O = a.get("request");
  this.Ba = a.get("butter-bar");
  this.ca = b;
  this.YC = c;
  this.Sw = this.V = null;
  this.ZA = !1;
};
var D6 = function(a, b) {
  a.qr = b;
};
var E6 = function(a) {
  return z.y(a, "replies");
};
var F6 = function(a) {
  var b = z.Ot(a.className), c = "DIV" == a.tagName && z.gd(a, "graf--" + z.St(14));
  return(!!G6[a.tagName] || c) && !!a.getAttribute("name") && 5 != b && 8 != b && 6 != b && 7 != b;
};
var H6 = function() {
  return(0,z.K)("Tap to leave a recommend note.");
};
var I6 = function() {
  return(0,z.K)("This note is only visible to the author, anyone @ mentioned, and publication editors (if any). The author or editors can choose to make it public.");
};
var J6 = function(a, b, c) {
  this.range = a;
  this.anchor = b;
  this.nn = b.getAttribute("name");
  this.highlight = c;
};
var K6 = function(a, b, c) {
  z.Ax.call(this);
  this.GI = {};
  this.aI = {};
  this.dJ = {};
  this.fl = null;
  this.X = a;
  this.Gh = a.get("request");
  this.qa = a.get("modelStore");
  this.va = b;
  this.fJ = 0;
  this.pr = c;
  this.sH = !1;
  this.Bf = null;
  this.Va = "";
  this.HM = null;
};
var L6 = function(a, b) {
  var c = a.GI[b];
  c || (c = a.GI[b] = new z.xN, a.S("new_note_list", c, a));
  return c;
};
var M6 = function(a, b) {
  if (!b) {
    return!1;
  }
  var c = b.W();
  if (a.content == c.substring(a.startIndex, a.endIndex)) {
    return!0;
  }
  var d = new RegExp(z.Sa(a.content), "gi"), e = d.exec(c), c = e && d.exec(c);
  return e && !c ? (c = a.endIndex - a.startIndex, a.startIndex = e.index, a.endIndex = e.index + c, a.content = e[0], !0) : !1;
};
var N6 = function(a, b, c) {
  var d = b.xb(), e = L6(a, b.bd()), g = e ? e.indexOf(b) : -1, h = b.Yi();
  b.xf(c);
  "HIDDEN" == c ? a.qa.remove(b) : b = z.pD(a.qa, b);
  var k = e ? e.indexOf(b) : -1;
  return{Ed:a.Gh.put(z.J_.L({postId:a.va, noteId:d}), {state:c}, {oa:!0}), qN:function() {
    b.xf(h);
    -1 == k && (-1 == g ? e.add(b) : e.yp(b, g));
  }};
};
var O6 = function(a, b, c) {
  return a.Gh.put(z.M_.L({postId:a.va, noteId:c, replyId:b}), {state:"HIDDEN"}, {oa:!0});
};
var P6 = function(a, b) {
  var c = z.uw(a, "title");
  c && b.call(void 0, c);
  (c = z.uw(a, "subtitle")) && b.call(void 0, c);
  a.querySelector(".postField--body") && z.iy(a.querySelector(".postField--body"), F6, z.ac(b, z.Xb(!0)), void 0);
};
var Q6 = function(a) {
  var b = z.ha("markup--quote") ? ["markup--quote"] : "markup--quote";
  return z.bw(a, function(a) {
    return(0,z.aw)(b, function(b) {
      return z.gd(a, b);
    });
  }, void 0, void 0);
};
var R6 = function(a) {
  var b;
  b = String(a).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e");
  return z.Cq(a, z.Fq) ? (0,z.K)(b, z.Dq(a)) : b;
};
var S6 = function(a, b, c) {
  for (var d = {}, e = 0;e < a.length;e++) {
    var g = a[e], h = b.call(c, g, e, a);
    z.ba(h) && (d[h] || (d[h] = [])).push(g);
  }
  return d;
};
var T6 = function(a, b, c) {
  z.Cx.call(this);
  if (!a) {
    throw Error("Missing element for TemplateView");
  }
  this.Ka = a;
  this.Oc = b;
  this.hn = c;
  this.WA = "list" + z.la(this);
  this.rr = "";
};
var U6 = function(a, b) {
  var c = !!b;
  if (a.bb() && c) {
    for (var c = a.Ox(), d = 0;d < c.length;d++) {
      var e = a.Tr(c[d]);
      a.S("after-draw", c[d], e);
    }
  }
};
var V6 = function(a, b) {
  var c = a.Mm.call(null, b);
  return a.Nh ? (a.Nh[a.Am] = c, c = z.zv(a.hn, a.Nh), delete a.Nh[a.Am], String(c)) : String(z.zv(a.hn, c));
};
var W6 = function(a) {
  this.gp = a;
};
var X6 = function(a, b) {
  return b ? z.uw(a.gp, b) : null;
};
var Y6 = function(a, b, c) {
  P6(a.gp, function(a) {
    var e = a.getAttribute("name");
    e && b.call(c, a, e);
  });
};
var Z6 = function(a, b) {
  return z.re(a.gp, b) ? a.gp : null;
};
var $6 = function(a, b) {
  var c;
  c = Z6(a, b);
  return(c = z.bw(b, F6, c)) && c.getAttribute("name") || null;
};
var a7 = function(a, b, c) {
  (a = z.gy(c, Z6(a, c))) && z.kd(b, "is-darkBackgrounded", z.gd(a, "is-darkBackgrounded"));
};
var b7 = function(a, b, c, d) {
  z.uN.call(this, a, b, "Leave a note", 400, d || null);
  this.va = c;
};
var c7 = function(a, b, c) {
  a.Hz = b;
  a.XG = c.text;
  a.Iz = c.image;
};
var d7 = function(a, b, c, d) {
  a.UA = b;
  a.TA = c;
  a.$H = d;
};
var e7 = function(a, b, c) {
  b = '\x3cul class\x3d"list list--quotes list--short js-quotesList ' + (a.Jy.length ? "" : "is-empty") + '"\x3e' + (a.D_ ? "" : '\x3cdiv class\x3d"list-title"\x3eHighlights\x3c/div\x3e');
  for (var d = a.Jy, e = d.length, g = 0;g < e;g++) {
    for (var h = d[g], k = "", l = h.quotes, n = l.length, r = 0;r < n;r++) {
      k += "" + l[r].quoteId + (r != n - 1 ? "," : "");
    }
    k = z.Uq(k);
    b += '\x3cli class\x3d"list-item list-item--inline" data-quote-ids\x3d"' + z.N(k) + '" data-quote-creator-id\x3d"' + z.N(h.user.userId) + '"\x3e' + z.M(z.XJ(z.L(a, {user:h.user}), c)) + "\x3c/li\x3e";
  }
  return(0,z.K)(b + "\x3c/ul\x3e");
};
var f7 = function(a, b, c) {
  return(0,z.K)('\x3cdiv class\x3d"paragraphControls u-noUserSelect' + (c.variants.enable_quotes ? "paragraphControls--small" : "") + '"\x3e' + (c.variants.enable_quotes ? g7(a, 0, c) : h7(a)) + "\x3c/div\x3e");
};
var h7 = function(a) {
  var b = '\x3cdiv class\x3d"notesMarker u-noUserSelect" data-action\x3d"select-anchor" data-action-value\x3d"' + z.N(a.nn) + '"\x3e' + i7({count:a.yy}) + '\x3c/div\x3e\x3cspan class\x3d"notesMarker-text"\x3e', c = "" + z.M(z.fL(z.L(a, {aF:!0, type:"notes", kc:a.GM, social:a.FM, bb:a.IM, kM:!0}))), c = (0,z.S)(c), b = b + (z.M(z.jL(z.L(a, {text:c, type:"notes"}))) + "\x3c/span\x3e");
  return(0,z.K)(b);
};
var g7 = function(a, b, c) {
  return(0,z.K)('\x3cdiv class\x3d"paragraphControls-block " data-action\x3d"select-anchor" data-action-value\x3d"' + z.N(a.nn) + '"\x3e' + (a.Ky ? j7(z.L(a, {type:"quotes", kc:a.Ky, bb:!1}), c) : "") + j7(z.L(a, {type:"notes", kc:a.GM, social:a.FM, bb:a.IM}), c) + "\x3c/div\x3e");
};
var j7 = function(a, b) {
  var c = '\x3cdiv class\x3d"paragraphControls-buttonSet paragraphControls-buttonSet--' + z.N(a.type) + (0 == a.kc ? " is-empty" : "") + '"\x3e' + z.M(z.aK({yb:!0, wa:"paragraphControls-item paragraphControls-item--icon", bb:a.bb, Ea:(0,z.S)("" + ("notes" == a.type ? '\x3cspan class\x3d"icon icon--notesHollow2"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"icon icon--heart"\x3e\x3c/span\x3e\x3cspan class\x3d"icon icon--heartThin"\x3e\x3c/span\x3e'))}, b));
  if (a.kc) {
    c += '\x3cspan class\x3d"paragraphControls-item paragraphControls-item--count"\x3e\x3cspan class\x3d"paragraphControls-itemText paragraphControls-itemText--social"\x3e';
    if ("notes" == a.type) {
      var d = "" + z.M(z.fL(z.L(a, {aF:!0}))), d = (0,z.S)(d), c = c + z.M(z.jL(z.L(a, {text:d})))
    } else {
      c += z.M(z.fL(a));
    }
    c += '\x3c/span\x3e\x3cspan class\x3d"paragraphControls-itemText paragraphControls-itemText--count"\x3e' + z.I(a.kc) + "\x3c/span\x3e\x3c/span\x3e";
  }
  return(0,z.K)(c + "\x3c/div\x3e");
};
var i7 = function(a) {
  return(0,z.K)("remove" == a.count ? '\x3cspan class\x3d"icon--notesMarker icon icon--notes"\x3e\x3c/span\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3e' : 0 == a.count ? '\x3cspan class\x3d"icon--notesMarker icon icon--notesHollow"\x3e\x3c/span\x3e\x3cspan class\x3d"notesMarker-nocount"\x3e+\x3c/span\x3e' : '\x3cspan class\x3d"icon--notesMarker icon icon--notes"\x3e\x3c/span\x3e\x3cspan class\x3d"notesMarker-count"\x3e' + z.I(a.count) + "\x3c/span\x3e");
};
var k7 = function(a, b, c) {
  return(0,z.K)(z.M(z.jK({wa:"button--dismissNotes", action:"dismiss-note", text:(0,z.S)("" + i7({count:"remove"}))}, c)) + '\x3cdiv class\x3d"notesList ' + (c.variants.enable_quotes ? "v-enableQuotes" : "") + ' js-notesList"\x3e' + z.M(e7({Jy:[]}, 0, c)) + (c.variants.enable_quotes ? '\x3cdiv class\x3d"notesList-title"\x3eNotes\x3c/div\x3e' : "") + '\x3cdiv class\x3d"notesItems"\x3e\x3c/div\x3e\x3cdiv class\x3d"newNoteEditor" tabIndex\x3d"-1"\x3e' + z.M(z.jK({wa:"button--addNotes", action:"start-note", 
  xg:!0, title:"Leave a note", text:(0,z.S)('\x3cspan class\x3d"icon icon--addCircled icon--addNotes"\x3e\x3c/span\x3e\x3cspan class\x3d"notesAddText"\x3eLeave a note for \x3cspan class\x3d"js-notesPostCreator"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"notesAddCreatorText"\x3eLeave a note\x3c/span\x3e')}, c)) + (c.isAuthenticated ? '\x3cdiv class\x3d"notesEditContainer is-notesEditMode"\x3e\x3cdiv class\x3d"notesAvatar"\x3e' + z.M(z.XJ({Sj:!0, user:c.currentUser}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e' + 
  z.I(c.currentUser.name) + '\x3c/div\x3e\x3cdiv class\x3d"notesItemEditor notesEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + z.M(z.jK({isPrimary:!0, sy:!0, wa:"button--editNotesAction", action:"save-note", text:"Save"}, c)) + z.M(z.jK({wa:"button--editNotesAction", action:"cancel-note", text:"Cancel"}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesDisclaimer"\x3e' + z.M(I6()) + "\x3c/div\x3e\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/div\x3e");
};
var l7 = function(a, b, c) {
  var d = a.note.author ? a.note.author.userId : null;
  b = '\x3cdiv class\x3d"notesItem-inner"\x3e\x3cdiv class\x3d"notesItem-main"\x3e' + ('\x3cspan class\x3d"notesState-border"\x3e\x3c/span\x3e\x3cdiv class\x3d"notesControls"\x3e' + (a.Cl ? '\x3cul class\x3d"notesState notesState-dropdown" data-action\x3d"toggle-note-dropdown"\x3e' + ("NEW" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icon icon--invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icon icon--notesStateDown"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"approve-note" data-action-value\x3d"' + 
  z.N(a.note.noteId) + '"\x3e\x3cspan class\x3d"icon icon--group"\x3e\x3c/span\x3ePublic\x3c/li\x3e' : "PUBLIC" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icon icon--group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icon icon--notesStateDown"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"unapprove-note" data-action-value\x3d"' + z.N(a.note.noteId) + '"\x3e\x3cspan class\x3d"icon icon--invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : "") + (a.zF.userId != d ? '\x3cli data-action\x3d"hide-note" data-action-value\x3d"' + 
  z.N(a.note.noteId) + '"\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : "PUBLIC" != a.note.state ? '\x3cul class\x3d"notesState"\x3e\x3cli data-tooltip\x3d"' + z.N(I6()) + '"\x3e\x3cspan class\x3d"icon icon--invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : "") + ("PUBLIC" == a.note.state ? '\x3cbutton data-action\x3d"show-note-permalink" data-action-value\x3d"' + z.N(a.note.anchor) + "-" + z.N(a.note.noteId) + '" class\x3d"notesLink icon icon--link" data-tooltip\x3d"Click to update the address bar with this note’s shareable link"\x3e' : 
  "") + '\x3c/div\x3e\x3cdiv class\x3d"notesAvatar"\x3e' + z.M(z.XJ({user:a.note.author}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e' + (d ? '\x3ca href\x3d"/@' + z.N(a.note.author.username) + '" title\x3d"Go to the profile of ' + z.N(a.note.author.name) + '"\x3e' + z.I(a.note.author.name) + "\x3c/a\x3e" : "\x3ci\x3eUnknown user\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notesContent"\x3e' + R6(z.M(z.Zu(String(a.note.content)))) + "\x3c/div\x3e" + (c.isAuthenticated ? '\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + 
  (d == c.currentUser.userId ? z.M(z.jK({wa:"button--notesTextAction", action:"edit-note", Qa:a.note.noteId, text:"Edit"}, c)) + z.M(z.jK({isPrimary:!0, sy:!0, wa:"button--editNotesAction", action:"save-note", Qa:a.note.noteId, text:"Save"}, c)) + z.M(z.jK({wa:"button--editNotesAction", action:"cancel-note", Qa:a.note.noteId, text:"Cancel"}, c)) + z.M(z.jK({wa:"button--editNotesAction", action:"delete-note", Qa:a.note.noteId, text:"Delete"}, c)) : "") + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
  var e = a.note.replies.length, g = Math.max(a.note.replies.length - a.cm, 0);
  if (e) {
    b += '\x3cdiv class\x3d"notesReplies ' + (0 < g ? "notesReplies--hidden" : "") + '"\x3e\x3cdiv class\x3d"notesReplies-inner"\x3e';
    if (0 < g) {
      b += z.M(z.jK({wa:"button--hiddenNotesReplies", action:"show-hidden-note-replies", text:(0,z.S)("View " + z.I(g) + (a.cm ? " more" : "") + (1 < g ? " replies" : " reply"))}, c)) + '\x3cdiv class\x3d"notesReplies-container"\x3e';
      for (var h = a.note.replies, k = h.length, l = 0;l < k;l++) {
        var n = h[l];
        b += l < g ? m7(z.L(a, {Ue:n}), c) : "";
      }
      b += "\x3c/div\x3e";
    }
    h = a.note.replies;
    k = h.length;
    for (l = 0;l < k;l++) {
      n = h[l], b += l >= g ? m7(z.L(a, {Ue:n}), c) : "";
    }
    b += "\x3c/div\x3e\x3c/div\x3e";
  }
  b += '\x3cdiv class\x3d"notesReplies-footer"\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notesReply notesReply--creator is-notesEditMode"\x3e\x3cdiv class\x3d"notesAvatar"\x3e' + z.M(z.VJ({user:c.currentUser}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e\x3ca href\x3d"/@' + z.N(c.currentUser.username) + '" title\x3d"Go to the profile of ' + z.N(c.currentUser.name) + '"\x3e' + z.I(c.currentUser.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"notesReply-editor notesEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + 
  z.M(z.jK({isPrimary:!0, sy:!0, wa:"button--editNotesAction", action:"save-reply", Qa:a.note.noteId, text:"Save"}, c)) + z.M(z.jK({wa:"button--editNotesAction", action:"cancel-reply", Qa:a.note.noteId, text:"Cancel"}, c)) + "\x3c/div\x3e\x3c/div\x3e" : "") + z.M(z.jK({isPrimary:!0, wa:"button--notesReplyLink", action:"start-reply", Qa:a.note.noteId, xg:!0, title:"Leave a reply", text:(0,z.S)("" + (e || !a.note.author ? "Reply to conversation" : d == c.currentUser.userId ? "Leave a reply" : "Reply to " + 
  z.I(a.note.author.name)))}, c)) + "\x3c/div\x3e\x3c/div\x3e";
  return(0,z.K)(b);
};
var m7 = function(a, b) {
  return(0,z.K)('\x3cdiv class\x3d"notesReply"\x3e' + (a.Cl && (null == a.Ue.author ? null : a.Ue.author.userId) != b.currentUser.userId ? '\x3cdiv class\x3d"notesReply-hider" data-action\x3d"hide-reply" data-action-value\x3d"' + z.N(a.note.noteId) + "," + z.N(a.Ue.replyId) + '" data-tooltip\x3d"Dismiss this reply"\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3e\x3c/div\x3e' : "") + '\x3cdiv class\x3d"notesAvatar"\x3e' + z.M(z.VJ({user:a.Ue.author}, b)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e' + 
  (a.Ue.author ? '\x3ca href\x3d"/@' + z.N(a.Ue.author.username) + '" title\x3d"Go to the profile of ' + z.N(a.Ue.author.name) + '"\x3e' + z.I(a.Ue.author.name) + "\x3c/a\x3e" : "\x3ci\x3eUnknown user\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notesContent"\x3e' + R6(z.M(z.Zu(String(a.Ue.content)))) + "\x3c/div\x3e" + (b.isAuthenticated ? a.Ue.author && a.Ue.author.userId == b.currentUser.userId ? '\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + z.M(z.jK({wa:"button--notesTextAction", action:"edit-reply", 
  Qa:z.Uq("" + a.note.noteId + "," + ("" + a.Ue.replyId)), text:"Edit"}, b)) + z.M(z.jK({isPrimary:!0, sy:!0, wa:"button--editNotesAction", action:"save-reply", Qa:a.Ue.replyId, text:"Save"}, b)) + z.M(z.jK({wa:"button--editNotesAction", action:"cancel-reply", Qa:a.Ue.replyId, text:"Cancel"}, b)) + z.M(z.jK({wa:"button--editNotesAction", action:"delete-reply", Qa:a.Ue.replyId, text:"Delete"}, b)) + "\x3c/div\x3e" : "" : "") + "\x3c/div\x3e");
};
z.bO = function(a, b, c) {
  return(0,z.K)(z.M(z.jK({wa:"notesVote-mobileTapButton", action:"enter-editor-mode", text:(0,z.S)('\x3cdiv class\x3d"u-muted notesVoteEditor--wrapper"\x3e\x3cdiv class\x3d"notesVoteEditor notesEditor"\x3e' + z.M((0,z.K)("Tap here to tell the author and your followers why you recommended this story.")) + "\x3c/div\x3e\x3c/div\x3e")}, c)) + z.M(z.aK({isPrimary:!0, yb:!0, isDisabled:!0, Ea:"Send", action:"enter-editor-mode"}, c)) + z.M(z.aK({yb:!0, Ea:"Skip", action:"exit-editor-mode"}, c)));
};
z.aO = function(a, b, c) {
  return(0,z.K)(z.M(z.jK({text:(0,z.S)("" + z.M(H6())), wa:"notesVote-mobileTapButton", action:"enter-editor-mode"}, c)) + z.M(z.kK({icon:"icon--removeMedia", yb:!0, vf:!0, oh:!0, wa:"noteVote-mobileExitButton", action:"exit-editor-mode"}, c)));
};
z.IN = function(a, b, c) {
  a = a || {};
  b = z.K;
  c = z.M(z.kK({yb:!0, vf:!0, oh:!0, wa:"noteVote-mobileExitButton", action:"exit-editor-mode", icon:"icon--removeMedia"}, c)) + '\x3cdiv class\x3d"notesVoteEditor--wrapper js-notesVoteEditorWrapper"\x3e\x3cdiv class\x3d"js-notesVoteEditor notesVoteEditor notesEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + z.M(z.jK({isPrimary:!0, text:(0,z.S)("" + z.M((0,z.K)("Send"))), action:"save-notes-vote"}, c)) + z.M(z.jK({isPrimary:!0, text:(0,z.S)("" + z.M((0,z.K)("Skip"))), action:"exit-editor-mode"}, 
  c)) + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"notesVote-message js-notesVoteMessage u-hide"\x3e' + (a.ik && 0 != a.ik ? z.M((0,z.K)("Your note will be shared with the author.")) : z.M((0,z.K)("Your note will be shared with the author and visible to your " + z.I(c.productName) + " followers."))) + "\x3c/div\x3e";
  a = a.ik && 0 != a.ik ? "" : (0,z.K)('\x3cdiv class\x3d"notesVoteSocialShare"\x3e\x3cspan class\x3d"notesVoteSocialShare-prompt"\x3e' + z.M((0,z.K)("Share this story")) + "\x3c/span\x3e" + n7(z.L(null, {title:(0,z.S)("" + z.M(z.VC())), action:"share-on-twitter", icon:"icon--twitter"})) + n7(z.L(null, {title:(0,z.S)("" + z.M(z.WC())), action:"share-on-facebook", icon:"icon--facebook"})) + n7(z.L(null, {title:(0,z.S)("" + z.M(z.XC())), action:"share-by-email", icon:"icon--email"})) + "\x3c/div\x3e");
  return b(c + a);
};
z.u4 = function(a, b, c) {
  return(0,z.K)(z.M(z.jK({text:(0,z.S)("" + z.M(H6())), wa:"notesVote-mobileTapButton", action:"enter-editor-mode"}, c)) + '\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + z.M(z.jK({isPrimary:!0, text:(0,z.S)("" + z.M((0,z.K)("Skip"))), action:"exit-editor-mode"}, c)) + "\x3c/div\x3e");
};
var n7 = function(a) {
  var b = a.n6 ? "span" : "button";
  a = "" + ("\x3c" + z.xr(b) + ' class\x3d"button button--chromeless" title\x3d"' + z.N(a.title) + '" data-action\x3d"' + z.N(a.action) + '"\x3e\x3cspan class\x3d"icon ' + z.N(a.icon) + '"\x3e\x3c/span\x3e\x3c/' + z.xr(b) + "\x3e");
  return(0,z.K)(a);
};
var o7 = function(a) {
  var b = "";
  if (10 < a.count) {
    b += '\x3cdiv class\x3d"slideIndicator-fraction"\x3e1 of ' + z.I(a.count) + "\x3c/div\x3e";
  } else {
    if (1 < a.count) {
      b += '\x3cul class\x3d"slideIndicators"\x3e';
      a = a.count;
      for (var c = 0;c < a;c++) {
        b += '\x3cli class\x3d"slideIndicator"\x3e\x3c/li\x3e';
      }
      b += "\x3c/ul\x3e";
    }
  }
  return(0,z.K)(b);
};
var p7 = function(a, b, c, d) {
  z.Cx.call(this);
  this.bW = a;
  this.Ga = b;
  this.nd = null;
  this.cg = c;
  this.va = d;
  a = window.document.createElement("div");
  a.className = "notesMarkers";
  z.ge(a, this.bW);
  this.Nm = a;
  this.Ce = {};
  this.Do = this.Uo = null;
};
var q7 = function(a, b) {
  var c = L6(a.Ga, b), d = a.nd ? r7(a.nd, b).length : 0, e = c ? c.ub() : 0, g = 0, h = !1, k = {}, l = {};
  c.ad(function(a) {
    var b = a.Ix();
    b && ((a = E6(a)) && a.forEach(function(a) {
      g++;
      a.author && (a.author.userId == z.ei().userId && (h = !0), a.author.social && a.author.social.isFollowing && (l[a.author.userId] = a.author), k[a.author.userId] = !0);
    }), k[b.userId] = !0, b.userId == z.ei().userId && (h = !0), b.social && b.social.isFollowing && (l[b.userId] = b));
  });
  return{postId:a.va, nn:b, yy:e + g, GM:Object.keys(k).length, Ky:d, IM:h, FM:z.zb(l)};
};
var s7 = function(a, b, c) {
  var d = a.cg.get(b);
  if (d) {
    var e = a.Ce[b];
    e && (z.kd(e, "is-active", c), c = "left" == z.ho(d, "float") ? 0 : -1 * z.Ao(d, "margin").right, e.style.left = (a.Yo() || 0 !== c ? c : 10) + "px", a = X6(a.cg, b)) && (b = z.Ot(a.className), z.kd(e, "is-notesSourceFloated", 2 == b || 4 == b), z.kd(e, "u-hide", z.$v(a, !1)), b = 3 == b, z.kd(e, "is-notesSourceOutsetCenter", b), a = b || 7 == z.ly(a), z.kd(e, "is-withoutSocialLine", a));
  }
};
var t7 = function(a) {
  var b = {};
  Y6(a.cg, function(a, d) {
    if (!(d in b)) {
      var e;
      e = z.oo(a, this.Nm).y + z.Bo(a).top;
      b[d] = e;
    }
  }, a);
  return b;
};
var u7 = function(a) {
  var b = t7(a), c = {};
  Y6(a.cg, function(a, d) {
    if (!c[d]) {
      var h;
      if (this.Ce[d]) {
        h = this.Ce[d];
      } else {
        h = q7(this, d);
        var k = z.Bv(f7, h);
        this.Nm.appendChild(k);
        if (0 < h.yy || 0 < h.Ky) {
          z.t(a, "is-withNotes"), z.t(k, "is-withNotes");
        }
        h = this.Ce[d] = k;
      }
      h.style.top = b[d] + "px";
      s7(this, d, d == this.Ga.Va);
      c[d] = !0;
      a7(this.cg, h, a);
    }
  }, a);
  for (var d in a.Ce) {
    c[d] || (z.ie(a.Ce[d]), delete a.Ce[d]);
  }
};
var v7 = function(a, b, c, d, e) {
  z.uN.call(this, a, b, "Leave a reply", 200, d);
  this.va = c;
  this.nw = e || null;
};
var w7 = function(a) {
  z.tm.call(this);
  var b = z.Bn();
  this.jg = b && new x7(z.Ko(b, !0), a);
  this.Ai = b && new x7(z.Ko(b, !1), a);
};
var x7 = function(a, b) {
  this.De = a;
  this.pQ = b;
  var c = z.fy(a.ma, b);
  this.ZG = (this.ag = c) && c.getAttribute("name");
  this.Ij = c ? z.ww(a, c) : -1;
};
var y7 = function(a) {
  var b = window.document.body;
  return z.re(b, a.De.ma) ? a.De : a.ag && z.re(b, a.ag) ? z.xw(a.Ij, a.ag) : a.ZG && (b = z.uw(a.pQ, a.ZG)) ? z.xw(a.Ij, b) : null;
};
var z7 = function(a, b, c, d) {
  z.Ax.call(this);
  this.Ry = a;
  this.screen = a.get("screen");
  this.us = a.get("app");
  this.post = b;
  this.OJ = b.clone();
  var e = b.Um;
  e && e.N("change", this.VH, this);
  this.Zc = {};
  this.yc = [];
  this.tD = a.get("butter-bar");
  this.Is = a.get("dialog");
  this.Vc = c;
  e = c.querySelector(".notesSource");
  this.anchors = new W6(e);
  var g = z.Ud("div", "layoutSingleColumn notesPositionContainer");
  z.he(this.Vc, g, 0);
  this.FZ = g;
  g = window.document.createElement("div");
  g.className = "notesContainer";
  z.Av(g, k7);
  this.FZ.appendChild(g);
  this.nf = g;
  this.vs = c.querySelector(".postField--body");
  this.sc = this.nf.querySelector(".notesList");
  this.km = z.hw(e);
  this.isAuthenticated = !!z.fi();
  this.currentUser = z.ei();
  this.postId = b.za();
  this.Cl = d;
  this.NE = "true" == this.vs.contentEditable;
  this.data = new K6(a, this.postId, this.NE);
  this.data.N("new_note_list", this.oT, this);
  this.nd = null;
  if (this.mn = a.get("voteWidget")) {
    a = this.mn, b = this.data, a.Br = b, a.bb() && (b = b.load(), z.q(z.Qc(z.ON(a), b), a.UG, a));
  }
  this.jd = new p7(this.nf, this.data, this.anchors, this.postId);
  this.jd.U();
  this.zb = new z.Yw;
  this.Fs = z.q(this.data.load(), this.lF, this);
  z.OF(this.jd.Nm).H("select-anchor", this.pF, this);
  z.OF(this.nf).H("show-hidden-note-replies", this.PM, this).H("start-reply", this.WT, this).H("save-reply", this.JT, this).H("edit-reply", this.RS, this).H("cancel-reply", this.xS, this).H("delete-reply", this.IS, this).H("approve-note", this.sS, this).H("unapprove-note", this.dU, this).H("edit-note", this.QS, this).H("save-note", this.IT, this).H("cancel-note", this.wS, this).H("delete-note", this.HS, this).H("hide-note", this.ZS, this);
  this.us.N("historyUpdate", this.OI, this);
};
var A7 = function(a) {
  if (a.Kd && a.Kd.ht()) {
    return!0;
  }
  for (var b in a.Zc) {
    if (a.Zc[b].ht()) {
      return!0;
    }
  }
  return!1;
};
var B7 = function(a) {
  var b = new z.Gc, c = a.Is.open({title:(0,z.K)("Uh oh!"), bodyHtml:(0,z.K)("You have unsaved notes. Are you sure you want to abandon them?"), type:z.$I});
  c ? (c.N(z.aJ, b.mb.bind(b, !0)), c.N(z.FN, function() {
    this.mL();
    b.cancel();
  }, a)) : b.cancel();
  return b;
};
var C7 = function(a) {
  z.xm(a.Kd);
  a.Kd = null;
  for (var b in a.Zc) {
    z.xm(a.Zc[b]), delete a.Zc[b];
  }
};
var D7 = function(a, b, c) {
  var d = b.Yi(), e = "PUBLIC" == c ? (0,z.K)("Note was made public.") : "HIDDEN" == c ? (0,z.K)("Note was dismissed.") : "NEW" == c ? (0,z.K)("Note was made private.") : "", g = N6(a.data, b, c);
  z.s(z.q(g.Ed, function() {
    z.q(this.tD.U(e, {type:z.cS, gu:!0}), function() {
      g.qN();
      D7(this, b, d);
    }, this);
    E7(this, z.V1, b, {noteState:c, previousNoteState:d});
  }, a), function(a) {
    this.tD.U((0,z.K)("Could not change note state"), z.jO);
    g.qN();
    (400 > a.status || 499 < a.status) && D7(this, b, d);
  }, a);
  return g.Ed;
};
var F7 = function(a, b) {
  var c = b.value;
  return c ? a.Zc[c] : a.Kd;
};
var G7 = function(a, b) {
  var c = a.data.Yj(a.anchors.get(b));
  return{text:c.W(), image:4 == c.type ? c.wd() : null};
};
var H7 = function(a, b) {
  var c = b || a.$g, d = a.data.Hd(c, a.data.Va), e = a.sc.querySelector('[data-note-id\x3d"' + c + '"]');
  z.t(e, "is-showingNotesReplyCreator");
  var g = a.Zc["reply_" + c];
  g || (e = e.querySelector(".notesReply-editor"), g = new v7(a.Ry, e, a.postId, c), g.N("change", a.Uj, a), g.N("cancel", function() {
    g.clear();
  }, a), g.N("save", function(a) {
    g.clear();
    E6(d).push(a);
    E7(this, z.W1, d, {replyId:a.Tc()});
    this.li.pq(d);
  }, a), a.Zc["reply_" + c] = g);
  g.focus();
};
var E7 = function(a, b, c, d) {
  d = d || {};
  d.postId = a.postId;
  d.noteId = c.xb();
  d.noteType = c.bi() ? "highlight" : "paragraph";
  z.U(b, d);
};
var I7 = function(a, b, c) {
  var d = z.Bn(), d = d && Z6(a.anchors, z.Gm(d)), e = c && d && new w7(d);
  z.q(J7(a, b && b.anchor || a.data.Va), function() {
    if (b != this.Oi) {
      var a = this.Oi;
      a && K7(this, a, !1);
      b && K7(this, b, !0);
      this.Oi = b;
    }
    (a = e && e.restore()) && a.select();
  }, a);
};
var K7 = function(a, b, c) {
  var d = b.anchor, e = X6(a.anchors, d);
  if (e = a.data.Yj(e)) {
    z.Ds(e, 4);
    if (c) {
      if (!M6(b, e)) {
        return;
      }
      z.xs(e, z.Ks(b.startIndex, b.endIndex, b.id));
    }
    a.anchors.get(d).innerHTML = z.Nz(e, z.G, {mode:a.NE ? "edit" : "view", isPublished:!!a.post.Xj(), media:null, sections:!0, ki:!1, Qh:!1, Fe:!1});
  }
};
var L7 = function(a, b, c) {
  if (b != a.$g) {
    c || z.rQ(a.us, "");
    (c = a.sc.querySelector(".is-activeNote")) && z.u(c, "is-activeNote");
    c = a.$g = null;
    if (b && a.data.Va) {
      var d = a.data.Hd(b, a.data.Va);
      d && (c = a.sc.querySelector('[data-note-id\x3d"' + b + '"]')) && (z.t(c, "is-activeNote"), a.$g = b, b = (b = d.bi()) ? a.data.Mp(b) : null, I7(a, b || null));
    }
    z.kd(a.sc, "notesItem--selected", !!c);
  }
};
var J7 = function(a, b) {
  var c = b != a.data.Va;
  if (c && A7(a)) {
    return z.q(B7(a), function() {
      C7(this);
      return J7(this, b);
    }, a);
  }
  a.Oi && (K7(a, a.Oi, !1), a.Oi = null);
  if (!c) {
    return z.Wc();
  }
  L7(a, null);
  a.data.Va && s7(a.jd, a.data.Va, !1);
  C7(a);
  z.xm(a.li);
  a.li = null;
  z.t(a.sc, "is-hidingNotesEditor");
  a.data.Va = b && a.jd.Ce[b] ? b : "";
  a.data.Va ? a.ts() : a.LD();
  a.Uj();
  return z.Wc();
};
var M7 = function(a, b, c, d) {
  (b = X6(a.anchors, b)) && (0,z.Ob)(b.querySelectorAll(".markup--quote"), function(a) {
    var b = a.getAttribute("data-creator-id") == c;
    z.kd(a, "is-selected", d && b);
  }, a);
};
var N7 = function(a, b) {
  if (a.isAuthenticated) {
    z.xm(a.Kd);
    var c = a.J(".notesItemEditor"), d = null, e = null;
    if ("string" == typeof b) {
      d = b;
    } else {
      if (b instanceof J6) {
        e = b.highlight, d = e.anchor;
      } else {
        throw Error("Missing assoc for note editor");
      }
    }
    c.innerHTML = "";
    a.Kd = new b7(a.Ry, c, a.postId);
    c7(a.Kd, d, G7(a, d));
    e && d7(a.Kd, e.startIndex, e.endIndex, e.content);
    a.Kd.N("change", a.Uj, a);
    a.Kd.N("save", a.kF, a);
    a.Kd.N("cancel", function() {
      L6(this.data, d).ub() ? z.t(this.sc, "is-hidingNotesEditor") : J7(this, null);
      L7(this, null);
    }, a);
    z.u(a.sc, "is-hidingNotesEditor");
  }
};
var O7 = function(a, b, c) {
  this.DU = a;
  this.jg = b;
  this.Ai = c;
};
var P7 = function(a, b) {
  this.Dm = a;
  this.Ij = b;
};
var Q7 = function(a, b, c, d, e, g) {
  z7.call(this, a, b, c, d);
  this.BC = z.Ix(a.get("screen"));
  this.pr = g;
  this.Ua = a.get("dom-monitor");
  this.Ua.N("resize-end", this.Kv, this);
  this.Ua.N("inner-resize-end", this.Kv, this);
  this.Zd = a.get("element-tracker");
  this.kn = a.get("twitter");
  z.OF(this.nf).H("hide-reply", this.$S, this).H("start-note", this.VT, this).H("show-note-permalink", this.TT, this);
  e.N("update", this.ZI, this);
  e.N("highlight", this.NI, this);
  e.N("twitter", this.MI, this);
  this.Ab = e;
  [this.anchors.gp].forEach(function(a) {
    this.yc.push(z.T(a, "click", this.PT, this));
  }, this);
  this.Ev = new z.CN;
  this.Ev.U();
  z.wm(this, this.Ev);
  D6(this.Ev, this.KR.bind(this));
  this.Ev.N("dismiss", this.KS, this);
};
var R7 = function(a) {
  if (a.Kd) {
    var b = a.BC, c = b.scrollTop, d = b.scrollLeft;
    a.Kd.focus();
    b.scrollTop = c;
    b.scrollLeft = d;
  }
};
var S7 = function(a, b) {
  for (var c = b ? 1 : -1, d = a.parentNode.childNodes, e = d.length, g = (0,z.fb)(d, a), h = z.cz(a, 0), k = z.Gp(h), h = 1 != z.Ik(h), l = a, g = g + c;0 <= g && g < e;g += c) {
    var n = d[g];
    if ("SECTION" === n.tagName) {
      var r = z.cz(n, 0), x = z.Gp(r), r = 1 != z.Ik(r);
      if (k != x || r || h) {
        break;
      } else {
        l = n;
      }
    }
  }
  return l;
};
var T7 = function(a) {
  var b = a.vs.querySelectorAll(".js-is-spacedForNoteList"), c = !1;
  (0,z.wb)(b, function(a) {
    a.style.paddingBottom = "";
    a.style.paddingTop = "";
    z.u(a, "js-is-spacedForNoteList");
    c = !0;
  });
  c && (u7(a.jd), a.Zd.ph());
};
var U7 = function(a, b) {
  I7(a, b.highlight);
  V7(a, {scroll:!0, oj:!0});
  N7(a, b);
  a.Kd && R7(a);
  a.S("show");
};
var W7 = function(a, b) {
  L6(a.data, b).ub() || (N7(a, b), a.Kd && R7(a));
};
var X7 = function(a, b) {
  z.q(J7(a, b), function() {
    W7(this, b);
    T7(this);
    Y7(this, {scroll:!0, oj:!0});
    this.sc.style.top = Math.round(z.gw(this.jd.Ce[b])) + "px";
    this.Uj();
  }, a);
};
var Z7 = function(a, b, c) {
  if (!a.data.Va) {
    return z.Wc(!0);
  }
  T7(a);
  var d = z.gw(b);
  c && (d -= z.fw(c, a.sc).y);
  d = Math.round(d + z.Bo(b).top);
  a.sc.style.top = d + "px";
  a.Uj();
  if (1 > Math.abs(a.sc.offsetTop - d) || !(0,z.X3)()) {
    return z.Wc(!0);
  }
  b = new z.Gc;
  z.Pv(a.sc, z.EY, b.mb.bind(b, a));
  return b;
};
var $7 = function(a, b, c) {
  var d = a.anchors.get(a.data.Va);
  if (!a.isAuthenticated) {
    var e = a.data.Va, e = a.Oi ? e + ("--highlight-" + a.Oi.startIndex + "-" + a.Oi.endIndex) : e + "--newNote";
    a.sc.querySelector(".button--addNotes").setAttribute("data-redirect", z.Hv() + "#" + e);
  }
  d && (e = d.querySelector(".markup--highlight"), d = c.oj && e ? e : d, (e = z.bw(b, function(a) {
    return z.gd(a, "js-notesList");
  })) && (b = e), a = Z7(a, d, b), c.scroll && z.q(a, function() {
    z.pw(b, z.v4);
  }));
};
var V7 = function(a, b) {
  var c = a.sc.querySelector(".newNoteEditor");
  c && $7(a, c, b);
};
var a8 = function(a, b, c) {
  b = a.sc.querySelector('[data-note-id\x3d"' + b + '"]');
  $7(a, b, c);
};
var Y7 = function(a, b) {
  if (a.data.Va) {
    var c = L6(a.data, a.data.Va), d = c.ub();
    (c = d ? c.xn(0).xb() : null) ? (1 == d && L7(a, c), b.oj = !1, a8(a, c, b)) : V7(a, b);
  }
};
var b8 = function(a, b) {
  return b == a.data.Va ? z.q(J7(a, null), z.uB) : z.q(J7(a, b), z.Xb(!!b));
};
var c8 = function(a, b, c) {
  var d = z.Ee(b.target, null, "notesItem");
  !d || b.relatedTarget && z.re(d, b.relatedTarget) || !(b = a.data.Hd(d.getAttribute("data-note-id"), a.data.Va)) || (d = null, c ? d = b.bi() : a.$g && (d = a.data.Hd(a.$g, a.data.Va).bi()), I7(a, d ? a.data.Mp(d) : null, a.NE));
};
var d8 = function(a) {
  z.tm.call(this);
  this.X = a;
};
var e8 = function(a, b) {
  z.Ax.call(this);
  this.X = a;
  this.Sb = b;
  this.Eq();
};
var f8 = function(a) {
  a = z.go(a.Sb, "transform").match(/translate3d\(([^,]*)/);
  return(0,window.parseInt)(a ? a[1] : 0, 10);
};
var g8 = function(a, b, c, d) {
  var e = b != a.Ew;
  a.Ew = b;
  a.Fv = b * a.Fw;
  z.eo(a.Sb, "transition-duration", c);
  z.eo(a.Sb, "transform", "translate3d(" + a.Fv + "px,0,0)");
  if (e || d) {
    c = b = Math.abs(b);
    d = a.Sb.children;
    if (10 < d.length) {
      if (e = a.Sb.parentNode.getElementsByClassName("slideIndicator-fraction")[0]) {
        e.innerHTML = c + 1 + " of " + d.length;
      }
    } else {
      if (d = a.Sb.parentNode.getElementsByClassName("slideIndicators")[0]) {
        (e = d.getElementsByClassName("is-active")[0]) && z.u(e, "is-active"), (e = d.children[c]) && z.t(e, "is-active");
      }
    }
    a.S("slide", b, a);
  }
};
var h8 = function(a, b, c, d) {
  z7.call(this, a, b, c, d);
  this.HI = this.J(".notesItems");
  this.kA = a.get("diagnostics");
  this.Sb = new e8(a, this.HI);
  this.Sb.N("slide", this.XI, this);
  this.dg = this.Dw = null;
  z.OF(this.nf).H("dismiss-note", this.BB, this).H("toggle-note-dropdown", function(a) {
    z.ld(a.target, "is-open");
  });
  this.yc.push(z.T(this.nf, "click", this.KI, this));
  this.yc.push(z.T(this.vs, "click", this.KI, this));
  this.yc.push(z.T(this.nf, "focusout", this.XS, this));
};
var i8 = function(a, b) {
  if (a.Oi) {
    var c = a.vs.querySelector(".markup--highlight"), d = a.sc.querySelector(".is-activeNote");
    if (d && c) {
      var d = window.innerHeight - d.offsetHeight + 20, e = c.offsetHeight, c = z.gw(c);
      e < d && (c -= (d - e) / 2);
      a.dg && a.dg.cancel();
      b ? a.dg = new z.DR(a.km, "scrollTop", 200, Math.max(c, 0)) : z.ew(a.km, 0, c);
    }
  }
};
var j8 = function(a, b) {
  a.Sb.enable();
  z.q(J7(a, b), function() {
    var a = L6(this.data, this.data.Va).ub();
    this.Dw = z.Bv(o7, {count:a});
    this.sc.appendChild(this.Dw);
    g8(this.Sb, 0, "0", !0);
  }, a);
};
var k8 = function(a) {
  z.tm.call(this);
  this.X = a;
};
var l8 = function(a, b) {
  z.tm.call(this);
  this.Wa = a.get("modelRequest");
  this.qa = a.get("modelStore");
  this.pw = a.get("request");
  this.va = b;
  this.pe = null;
  this.fw = {};
  this.Fh = new z.xN;
  this.Fh.N("add", this.fK, this);
  this.Fh.N("remove", this.fK, this);
  z.wm(this, this.Fh);
};
var r7 = function(a, b) {
  var c = S6(a.fw[b] || [], function(a) {
    return a.sa();
  }, a);
  return z.zb(c).map(function(a) {
    return new m8(a[0].Jc(), a);
  }, a);
};
var n8 = function(a, b, c, d) {
  return z.q(a.load(), function() {
    return this.Fh.find(function(a) {
      return a.Bb()[0].getName() == b.name && a.Gd() > c && a.xc() < d;
    }, this);
  }, a);
};
var o8 = function(a, b) {
  return S6(b, function(a) {
    return a.Bb()[0].getName();
  }, a);
};
var m8 = function(a, b) {
  this.user = a;
  this.quotes = b;
};
var p8 = function(a, b, c, d) {
  z.Cx.call(this);
  this.nd = new l8(a, c);
  z.wm(this, this.nd);
  c = this.nd.Fh;
  c.N("add", this.qJ, this);
  c.N("remove", this.qJ, this);
  this.Vc = b;
  this.Rb = d;
  this.uH = [];
  this.Ca = a.get("popover");
};
var q8 = function(a, b) {
  var c = z.Ln(b);
  if (c) {
    var d = r8(a, c);
    d && z.s(z.q(n8(a.nd, d.Zx, d.start, d.end), function(a) {
      if (a && a.sa() == z.ei().userId) {
        this.Rb.eG(b);
      } else {
        return this.nd.create(d.Zx, d.start, d.end);
      }
    }, a), z.V);
  }
};
var r8 = function(a, b) {
  var c = z.rB(b, a.Vc), d = c && z.hz(c);
  if (!d) {
    return null;
  }
  var e = z.vw(b, c, !0), c = z.vw(b, c, !1);
  return-1 == e || -1 == c ? null : {Zx:d, start:e, end:c};
};
var s8 = function(a, b, c) {
  var d = (b = z.uw(a.Vc, b)) && z.hz(b);
  d && (z.Ds(d, 7), c.forEach(function(a) {
    a.Bb()[0].W() == d.W() && z.xs(d, z.Ls(a.startOffset, a.endOffset, a.quoteId, a.userId));
  }, a), b.innerHTML = z.Nz(d, z.G, z.uz));
};
var t8 = function(a) {
  this.X = a;
};
z.p(z6, z.$k);
z.rS.prototype.pq = z.$(147, function(a) {
  var b = this.So(a);
  this.S("before-clear", a, b);
  b.innerHTML = z.qS(this, a);
  this.S("after-draw", a, b);
});
z.rS.prototype.ZF = z.$(146, function(a) {
  this.rr = a;
  return this;
});
z.wP.prototype.$F = z.$(145, function(a, b) {
  this.Mm = a.bind(b);
  this.zy();
  return this;
});
z.uN.prototype.ht = z.$(138, function() {
  return this.Gm.trim() != this.Pa().trim();
});
z.sR.prototype.ht = z.$(137, function() {
  return this.Gm.trim() != this.Pa().trim();
});
z.eG.prototype.eG = z.$(136, function(a) {
  z.mG(this, z.mw(a));
  this.gn = a;
});
z.yi.prototype.Vt = z.$(112, function(a) {
  return z.A(this, "highlight", a);
});
z.yi.prototype.Mp = z.$(111, function() {
  return z.y(this, "highlight");
});
z.si.prototype.Sx = z.$(110, function() {
  return z.y(this, "quotes");
});
z.jX.prototype.Sx = z.$(109, function(a) {
  return z.q(this.O.get(z.N_.L({postId:a}), {background:!0, oa:!0}), this.qe.bind(this, z6));
});
z.ig.prototype.bi = z.$(77, function() {
  return z.y(this, "highlightId");
});
z.yi.prototype.bi = z.$(76, function() {
  return z.y(this, "highlightId");
});
z.Di.prototype.bi = z.$(75, function() {
  return z.y(this, "highlightId");
});
z.ig.prototype.Ti = z.$(74, function() {
  return z.y(this, "authorId");
});
z.jg.prototype.Ti = z.$(73, function() {
  return z.y(this, "authorId");
});
z.zg.prototype.Ti = z.$(72, function() {
  return z.y(this, "authorId");
});
z.yi.prototype.Ti = z.$(71, function() {
  return z.y(this, "authorId");
});
z.Ai.prototype.Ti = z.$(70, function() {
  return z.y(this, "authorId");
});
z.Jf.prototype.xf = z.$(46, function(a) {
  return z.A(this, "state", a);
});
z.ig.prototype.xf = z.$(45, function(a) {
  return z.A(this, "state", a);
});
z.jg.prototype.xf = z.$(44, function(a) {
  return z.A(this, "state", a);
});
z.wh.prototype.xf = z.$(43, function(a) {
  return z.A(this, "state", a);
});
z.yh.prototype.xf = z.$(42, function(a) {
  return z.A(this, "state", a);
});
z.yi.prototype.xf = z.$(41, function(a) {
  return z.A(this, "state", a);
});
z.Ai.prototype.xf = z.$(40, function(a) {
  return z.A(this, "state", a);
});
z.Bf.prototype.Wi = z.$(23, function() {
  return z.y(this, "quoteId");
});
z.yg.prototype.Wi = z.$(22, function() {
  return z.y(this, "quoteId");
});
z.oh.prototype.Wi = z.$(21, function() {
  return z.y(this, "quoteId");
});
z.gj.prototype.Wi = z.$(20, function() {
  return z.y(this, "quoteId");
});
z.Gj.prototype.Wi = z.$(19, function() {
  return z.y(this, "quoteId");
});
z.Bf.prototype.Tc = z.$(18, function() {
  return z.y(this, "replyId");
});
z.Cf.prototype.Tc = z.$(17, function() {
  return z.y(this, "replyId");
});
z.fg.prototype.Tc = z.$(16, function() {
  return z.y(this, "replyId");
});
z.jg.prototype.Tc = z.$(15, function() {
  return z.y(this, "replyId");
});
z.oh.prototype.Tc = z.$(14, function() {
  return z.y(this, "replyId");
});
z.qh.prototype.Tc = z.$(13, function() {
  return z.y(this, "replyId");
});
z.oi.prototype.Tc = z.$(12, function() {
  return z.y(this, "replyId");
});
z.Ai.prototype.Tc = z.$(11, function() {
  return z.y(this, "replyId");
});
z.Ei.prototype.Tc = z.$(10, function() {
  return z.y(this, "replyId");
});
z.Gj.prototype.Tc = z.$(9, function() {
  return z.y(this, "replyId");
});
z.p(C6, z.tm);
z.f = C6.prototype;
z.f.open = function() {
  this.V = this.Tq.open({bodyHtml:z.zv(x6, this.YC), type:"tweet"}, !0);
  var a = this.V.J(".js-tweetEditor-text");
  this.Sw = new z.sR(a, String((0,z.K)("Enter tweet text.")), !0);
  this.Sw.Ha(A6(new z.oE(140, !0), this.wQ));
  a = z.SX(v6, this.YC, z.G);
  this.Sw.gc(a);
  u6(this);
  z.OF(this.V.Ka).H("remove-textshot", this.GJ.bind(this, !1), this).H("add-textshot", this.GJ.bind(this, !0), this).H("toggle-expand-image", this.zW, this);
  this.V.N("submit", this.UW.bind(this));
};
z.f.UW = function() {
  var a = this.Sw.Pa();
  if (t6(this, a)) {
    var b = this.ZA ? s6(this) : null;
    z.s(z.q(this.O.post(z.o_.L(), {tweet:a, textshotInfo:b}, {oa:!0}), function(a) {
      a = String(z.zv(w6, {id:a.value}));
      this.Ba.U(y6({cO:a}), {type:z.cS, du:1E4});
    }, this), function(a) {
      z.V(a);
      this.Ba.U((0,z.K)("An error occurred, and the tweet wasn’t posted to Twitter."), z.jO);
    }, this);
    z.U(z.G1, {postId:this.ca.id, dest:"twitter", shareSource:"textshot"});
    this.V.close();
  }
};
z.f.GJ = function(a) {
  this.ZA = a;
  z.kd(this.V.J(".js-tweetEditor-imageContainer"), "u-hide", !a);
  z.kd(this.V.J(".js-tweetEditor-addTextshot"), "u-hide", a);
};
z.f.zW = function() {
  var a = this.V.J(".js-tweetEditor-image");
  z.ld(a, "tweetEditor-image-expanded");
};
z.f.wQ = function(a) {
  return z.TX(a, !0);
};
var G6 = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, H4:!0, FIGURE:!0, LI:!0};
z.p(K6, z.Ax);
z.f = K6.prototype;
z.f.load = function() {
  this.Bf || (this.Bf = z.s(z.q(this.Gh.get(z.H_.L({postId:this.va}), {oa:!0, background:!0}), this.IU, this), z.V));
  return this.Bf.Db();
};
z.f.fi = function() {
  return this.sH;
};
z.f.Pp = function() {
  return this.fJ;
};
z.f.Yj = function(a) {
  var b = a && a.getAttribute("name");
  if (!b || !a) {
    return null;
  }
  var c = this.dJ[b];
  return c && !this.pr ? c : this.dJ[b] = z.hz(a);
};
z.f.Mp = function(a) {
  return this.aI[a] || null;
};
z.f.Hd = function(a, b) {
  return L6(this, b).Ip(a);
};
z.f.qE = function() {
  return L6(this, "vote");
};
z.f.tL = function() {
  var a = z.ei().userId;
  return this.qE().find(function(b) {
    return b.Ti() == a;
  });
};
z.f.Vt = function(a, b) {
  this.aI[a] = b;
};
z.f.sz = function(a) {
  a = z.pD(this.qa, a);
  L6(this, a.bd()).add(a);
};
z.f.ba = function() {
  return this.va;
};
z.f.IU = function(a) {
  var b = a.references.User;
  this.fl = b[a.post.creatorId];
  this.fJ = a.post.visibility;
  var c = a.value;
  if (c) {
    for (var d = 0;d < c.length;d++) {
      var e = c[d];
      if ("HIDDEN" != e.state) {
        var g = e.replies, h = b;
        if (g) {
          for (var k = 0;k < g.length;k++) {
            var l = g[k], n = l.authorId || null;
            l.author = n && h[n] || null;
          }
        }
        g = e.anchor;
        h = e.authorId || null;
        e.author = h && b[h] || null;
        g = L6(this, g);
        e = z.zi(e);
        g.add(z.pD(this.qa, e));
      }
    }
  }
  if (a = a.highlights) {
    for (b = 0;b < a.length;b++) {
      this.Vt(a[b].id, z.Bh.gb(z.Ci, a[b]));
    }
  }
  this.sH = !0;
};
z.f.Z = function() {
  this.Bf.cancel();
  K6.F.Z.call(this);
};
var u8 = {mode:"view", isPublished:!0, media:null, sections:!1, ki:!1, Qh:!0, Fe:!1, Ns:!0};
z.p(T6, z.Cx);
z.f = T6.prototype;
z.f.Mm = function(a) {
  return a.dc();
};
z.f.Nh = null;
z.f.Am = null;
z.f.jB = null;
z.f.fa = function() {
  return this.Ka;
};
z.f.R = function() {
  T6.F.R.call(this);
  z.Dx(this, this.Oc, "change", this.FS, this);
  z.Dx(this, this.Oc, "add", this.fT, this);
  z.Dx(this, this.Oc, "remove", this.gT, this);
  U6(this, !0);
};
z.f.ga = function() {
  this.Ka.innerHTML = "";
  delete this.Ka;
  T6.F.ga.call(this);
};
z.f.getData = function() {
  return this.Oc;
};
z.f.vq = function(a, b) {
  this.Nh = a;
  this.Am = b;
  this.bb() && U6(this);
  return this;
};
z.f.$F = function(a, b) {
  this.Mm = a.bind(b);
  U6(this);
  return this;
};
z.f.fT = function(a, b) {
  if (this.bb()) {
    for (var c = 0;c < a.length;c++) {
      var d = b.indexOf(a[c]), d = this.Tr(a[c], d);
      this.S("after-draw", a[c], d);
    }
  }
};
z.f.gT = function(a) {
  if (this.bb()) {
    var b = this.So(a);
    this.S("before-clear", a, b);
    this.S("destroy", a, b);
    z.ie(b);
  }
};
z.f.FS = function(a) {
  for (var b = 0;b < a.length;b++) {
    this.pq(a[b]);
  }
};
z.f.Ox = function() {
  return this.Oc.lf();
};
z.f.ZF = function(a) {
  this.rr = a;
  return this;
};
z.f.pq = function(a) {
  var b = this.So(a);
  this.S("before-clear", a, b);
  b.innerHTML = V6(this, a);
  this.S("after-draw", a, b);
};
z.f.Tr = function(a, b) {
  var c = window.document.createElement("div");
  c.className = this.rr;
  c.id = this.gr(a);
  c.innerHTML = V6(this, a);
  z.he(this.Ka, c, "undefined" != typeof b ? b : this.Ka.children.length);
  return c;
};
z.f.gr = function(a) {
  var b = a.D(), c = a.C();
  if (!b || !c) {
    throw Error("Unable to generate id " + a);
  }
  return this.WA + b + c;
};
z.f.So = function(a) {
  return this.Ka.querySelector("#" + this.gr(a));
};
W6.prototype.get = function(a) {
  return X6(this, a);
};
z.p(b7, z.uN);
z.f = b7.prototype;
z.f.Hz = null;
z.f.XG = null;
z.f.Iz = null;
z.f.UA = null;
z.f.TA = null;
z.f.$H = null;
z.f.gE = function() {
  return z.zN();
};
z.f.xE = function() {
  return z.AN();
};
z.f.yD = function() {
  return!!this.xb();
};
z.f.Un = function(a) {
  var b = z.yv();
  return(new z.yi({postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, replies:[], highlight:a.highlight || null, highlightId:a.highlightId || null})).Ty(b).bo(b.sa());
};
z.f.uE = function() {
  return this.xb() ? "put" : "post";
};
z.f.Ux = function() {
  return this.xb() ? z.I_.L({postId:this.va, noteId:this.xb()}) : z.G_.L({postId:this.va});
};
z.f.vE = function(a) {
  a = {content:a};
  this.Hz && (a.anchor = this.Hz, a.anchorContent = this.XG, a.anchorImage = this.Iz ? this.Iz.dc() : null);
  null != this.UA && null != this.TA && (a.highlightStart = this.UA, a.highlightEnd = this.TA, a.highlightContent = this.$H);
  return a;
};
z.p(p7, z.Cx);
z.f = p7.prototype;
z.f.aG = function(a) {
  this.nd = a;
  Object.keys(a.fw).map(this.hu, this);
  a = a.Fh;
  a.N("add", this.gK, this);
  a.N("remove", this.gK, this);
};
z.f.gK = function(a) {
  Object.keys(o8(this.nd, a instanceof Array ? a : [a])).map(this.hu, this);
};
z.f.Yo = function() {
  return 720 >= window.innerWidth;
};
z.f.hu = function(a) {
  if (this.Ga.fi()) {
    var b = a || this.Ga.Va;
    if (a = this.Ce[b]) {
      b = q7(this, b), z.G.xa().enable_quotes ? (z.Av(a, g7, b), z.kd(a, "is-withNotes", 0 < b.yy || 0 < b.Ky)) : (z.Av(a, h7, b), z.kd(a, "is-withNotes", 0 < b.yy));
    }
  }
};
z.f.qS = function(a) {
  if (a = $6(this.cg, a.target)) {
    var b = X6(this.cg, a), c = this.Ce[a];
    !c || c === this.Uo || !b || z.$v(b, !1) || z.gd(b, "postField--insetLeftImage") || z.gd(b, "postField--outsetLeftImage") || (this.Uo && z.u(this.Uo, "is-highlighted"), z.t(c, "is-highlighted"), this.Uo = c, z.xm(this.Do), this.Do = new z.fY(b), this.Do.Ad(c), this.Do.U(), this.Do.Yd("dismiss", function() {
      z.u(c, "is-highlighted");
      this.Uo === c && (this.Uo = null);
    }, this));
  }
};
z.f.R = function() {
  p7.F.R.call(this);
  z.Cv() || [this.cg.gp].forEach(function(a) {
    this.ua(a, "mouseover", this.qS);
  }, this);
};
z.f.Sa = function() {
  z.xm(this.Do);
  z.ie(this.Nm);
  this.Ce = this.Nm = null;
  p7.F.Sa.call(this);
};
z.p(v7, z.uN);
z.f = v7.prototype;
z.f.gE = function() {
  return(0,z.K)("Are you sure you want to delete this reply?");
};
z.f.xE = function() {
  return(0,z.K)("Your reply is too long; do you want to abandon your changes?");
};
z.f.yD = function() {
  return!!this.nw;
};
z.f.Un = function(a) {
  var b = z.yv();
  return(new z.Ai({postId:a.postId, noteId:a.noteId, replyId:a.replyId, content:a.content, createdAt:a.createdAt})).Ty(b).bo(b.sa());
};
z.f.uE = function() {
  return this.nw ? "put" : "post";
};
z.f.Ux = function() {
  return this.nw ? z.L_.L({postId:this.va, noteId:this.xb(), replyId:this.nw}) : z.K_.L({postId:this.va, noteId:this.xb()});
};
z.f.vE = function(a) {
  return{content:a};
};
z.p(w7, z.zm);
w7.prototype.Qt = function() {
  if (!this.jg) {
    return null;
  }
  var a = y7(this.jg);
  if (!a) {
    return null;
  }
  var b = y7(this.Ai);
  return b ? z.ln(a.ma, a.offset, b.ma, b.offset) : null;
};
z.p(z7, z.Ax);
z.f = z7.prototype;
z.f.Kd = null;
z.f.$g = null;
z.f.Oi = null;
z.f.li = null;
z.f.cm = 0;
z.f.Z = function() {
  C7(this);
  J7(this, null);
  var a = this.post.Um;
  a && a.nb("change", this.VH, this);
  this.us.nb("historyUpdate", this.OI, this);
  this.EI && z.Qv(this.EI);
  z.Qv(this.yc);
  this.yc.length = 0;
  z.RF(this.jd.Nm);
  z.RF(this.nf);
  z.ie(this.nf);
  this.data.wc();
  this.Fs && this.Fs.cancel();
  z.xm(this.jd);
  z.xm(this.zb);
  this.EI = this.nd = this.Fs = this.data = this.nf = this.anchors = this.jd = null;
  z7.F.Z.call(this);
};
z.f.aG = function(a) {
  this.nd = a;
  this.jd.aG(a);
};
z.f.VH = function() {
  if (z.G.xa().enable_recommend_notes && this.OJ.Hn() != this.post.Hn() && (this.OJ = this.post.clone(), !this.post.Hn())) {
    var a = this.data.tL();
    a && (E7(this, z.U1, a), this.data.qE().remove(a));
  }
};
z.f.lF = function() {
};
z.f.oF = function() {
};
z.f.kF = function(a) {
  a.Mp() && (this.data.Vt(a.bi(), a.Mp()), a.Vt(null));
  this.data.sz(a);
  E7(this, z.S1, a);
};
z.f.pF = function() {
};
z.f.MM = function() {
};
z.f.Uj = function() {
};
z.f.mL = function() {
};
z.f.uQ = function(a) {
  return a.dc();
};
z.f.WT = function(a) {
  H7(this, a.value);
};
z.f.JT = function(a) {
  (a = this.Zc["reply_" + a.value]) && a.save();
};
z.f.xS = function(a) {
  var b = this.Zc["reply_" + a.value];
  b && z.wN(b);
  (a = z.Ee(a.target, null, "notesItem")) && z.u(a, "is-showingNotesReplyCreator");
};
z.f.RS = function(a) {
  function b() {
    var a = this.data.Hd(d, this.data.Va);
    this.li.pq(a);
    z.u(g, "is-notesEditMode");
    z.xm(h);
    delete this.Zc["reply_" + e];
  }
  var c = a.value.split(","), d = c[0], e = c[1], c = z.Ee(a.target, null, "notesItem"), g = z.Ee(a.target, null, "notesReply");
  z.t(g, "is-notesEditMode");
  z.u(c, "is-showingNotesReplyCreator");
  a = g.querySelector(".notesContent");
  var h = new v7(this.Ry, a, this.postId, d, e);
  h.N("save", function(a) {
    for (var c = this.data.Hd(d, this.data.Va), g = E6(c), h = 0;h < g.length;h++) {
      if (g[h].Tc() == e) {
        g[h] = a;
        break;
      }
    }
    E7(this, z.X1, c, {replyId:e});
    b.call(this);
  }, this);
  h.N("delete", function() {
    for (var a = this.data.Hd(d, this.data.Va), c = E6(a), g = 0;g < c.length;g++) {
      if (c[g].Tc() == e) {
        z.hb(c, g);
        break;
      }
    }
    E7(this, z.Y1, a, {replyId:e});
    b.call(this);
  }, this);
  h.N("cancel", function() {
    b.call(this);
  }, this);
  h.N("change", this.Uj, this);
  h.focus(!0);
  this.Zc["reply_" + e] = h;
};
z.f.IS = function(a) {
  (a = this.Zc["reply_" + a.value]) && a.OD();
};
z.f.tS = function(a) {
  a = a.xb();
  this.Zc[a] && (z.xm(this.Zc[a]), delete this.Zc[a]);
  this.Zc["reply_" + a] && (z.xm(this.Zc["reply_" + a]), delete this.Zc["reply_" + a]);
};
z.f.pS = function(a, b) {
  z.u(b, "is-showingNotesReplyCreator");
  b.setAttribute("data-note-id", a.xb());
};
z.f.sS = function(a) {
  z.s(D7(this, this.data.Hd(a.value, this.data.Va), "PUBLIC"), z.YI(this.Is, (0,z.K)("Sorry, we couldn’t approve the note. Please try again later and make sure you are logged in.")));
};
z.f.dU = function(a) {
  z.s(D7(this, this.data.Hd(a.value, this.data.Va), "NEW"), z.YI(this.Is, (0,z.K)("Sorry, we couldn’t unapprove the note. Please try again later and make sure you are logged in.")));
};
z.f.QS = function(a) {
  function b() {
    z.u(d, "is-notesEditMode");
    z.xm(g);
    delete this.Zc[c];
  }
  var c = a.value, d = z.Ee(a.target, null, "notesItem");
  z.t(d, "is-notesEditMode");
  z.u(d, "is-showingNotesReplyCreator");
  var e = d.querySelector(".notesContent"), g = new b7(this.Ry, e, this.postId, a.value);
  g.N("save", function(a) {
    this.data.sz(a);
    E7(this, z.T1, a);
    b.call(this);
  }, this);
  g.N("delete", function() {
    var a = L6(this.data, this.data.Va), d = a.Ip(c);
    E7(this, z.U1, d);
    a.remove(d);
    b.call(this);
  }, this);
  g.N("cancel", function() {
    var a = this.data.Hd(c, this.data.Va);
    this.li.pq(a);
    b.call(this);
  }, this);
  g.N("change", this.Uj, this);
  g.focus(!0);
  this.Zc[c] = g;
};
z.f.IT = function(a) {
  (a = F7(this, a)) && a.save();
};
z.f.wS = function(a) {
  (a = F7(this, a)) && z.wN(a);
};
z.f.HS = function(a) {
  (a = F7(this, a)) && a.OD();
};
z.f.pT = function(a) {
  for (var b = 0;b < a.length;b++) {
    this.jd.hu(a[b].bd());
  }
};
z.f.ZS = function(a) {
  a = a.value;
  this.$g == a && (this.$g = null);
  z.s(D7(this, this.data.Hd(a, this.data.Va), "HIDDEN"), z.YI(this.Is, (0,z.K)("Sorry, we couldn’t hide the note. Please try again later and make sure you are logged in.")));
};
z.f.oT = function(a) {
  a.N("add", this.pT, this);
  a.N("change", this.MM, this);
  a.N("remove", this.oF, this);
};
z.f.J = function(a) {
  return this.nf.querySelector(a);
};
z.f.qo = function() {
  u7(this.jd);
  this.jd.Ce[this.data.Va] || J7(this, null);
};
z.f.PM = function(a) {
  this.dG(a);
};
z.f.dG = function(a) {
  (a = z.Ee(a.target, null, "notesReplies")) && z.u(a, "notesReplies--hidden");
};
z.f.ts = function() {
  var a = this.data.Va, b = this.J(".notesItems"), c = L6(this.data, a), d = this.nd ? r7(this.nd, a) : [], a = this.J(".js-quotesList"), d = z.Bv(e7, {Jy:d});
  z.je(d, a);
  z.Cv() || z.T(d, "mouseover", this.gR, this);
  this.li = (new T6(b, c, l7)).ZF("notesItem").$F(this.uQ).vq({Cl:this.Cl, zF:this.data.fl, cm:this.cm}, "note");
  this.li.N("before-clear", this.tS, this);
  this.li.N("after-draw", this.pS, this);
  this.li.U();
  s7(this.jd, this.data.Va, !0);
  z.t(this.screen.aa(), "is-notesListVisible");
  z.Tw(z.R1);
};
z.f.gR = function(a) {
  if ((a = z.bw(a.target, function(a) {
    return!!a.getAttribute("data-quote-ids");
  }, a.currentTarget)) && this.SG != a) {
    this.xm && this.xm.VK();
    var b = this.data.Va, c = a.getAttribute("data-quote-creator-id");
    this.SG = a;
    this.xm = new z.fY(X6(this.anchors, b), 300);
    this.xm.Ad(a);
    this.xm.N("dismiss", function() {
      M7(this, b, c, !1);
      z.xm(this.xm);
      this.xm = this.SG = null;
    }, this);
    this.xm.U();
    M7(this, b, c, !0);
  }
};
z.f.LD = function() {
  z.rQ(this.us, "");
  z.u(this.screen.aa(), "is-notesListVisible");
};
z.f.getSelection = function(a) {
  var b = z.Bn();
  if (!b || b.isCollapsed()) {
    if (a && (b = z.Ln(a)), !b || b.isCollapsed()) {
      return null;
    }
  }
  a = z.Gm(b);
  var c = Z6(this.anchors, a);
  if (!c) {
    return null;
  }
  c = (a = z.bw(a, F6, c)) && this.data.Yj(a);
  if (!a) {
    return null;
  }
  var d = z.vw(b, a, !0), e = z.vw(b, a, !1);
  return-1 == d || -1 == e ? null : new J6(b, a, new z.Ci({anchor:a.getAttribute("name"), startIndex:d, endIndex:e, content:c.W().substring(d, e)}));
};
z.f.OI = function() {
  this.lx(z.xS());
};
O7.prototype.XX = function() {
  return this.jg.Dm == this.Ai.Dm ? [this.jg.Dm.getAttribute("name"), "-share", this.jg.Ij, this.Ai.Ij].join("-") : "";
};
O7.prototype.WX = function() {
  return z.sB(this.jg.Dm, this.jg.Ij, this.Ai.Dm, this.Ai.Ij);
};
O7.prototype.YX = function() {
  var a = z.hy(this.DU), b = a.indexOf(this.jg.Dm), c = a.indexOf(this.Ai.Dm);
  if (-1 == b || -1 == c) {
    return "";
  }
  for (var d = [], e = b;e <= c;e++) {
    d.push(z.hz(a[e]));
  }
  var e = d[0], g = z.Za(d), b = (b = a[b - 1]) && z.hz(b), a = (a = a[c + 1]) && z.hz(a);
  b && b.W() && d.unshift(b);
  a && a.W() && d.push(a);
  e = z.Bu(d.indexOf(e), this.jg.Ij, d.indexOf(g), this.Ai.Ij, !1);
  g = new z.Vt(z.G, u8);
  a = [];
  c = null;
  for (b = 0;b < d.length;b++) {
    var h = d[b].clone();
    z.gt(h);
    if (b >= e.start.Q && b <= e.end.Q) {
      var k = b == e.start.Q ? e.start.offset : 0, l = b == e.end.Q ? e.end.offset : h.W().length;
      z.xs(h, z.Ks(k, l, "selection"));
    }
    c && a.push(z.Zt(c, h));
    a.push(z.$t(h, c));
    a.push(z.bu(g, h, {kx:!0, Zn:null, isFirst:!1, dk:!1}));
    c = h;
  }
  c && a.push(z.Zt(c, null));
  return a.join("");
};
z.p(Q7, z7);
z.f = Q7.prototype;
z.f.cm = 3;
z.f.Rk = !1;
z.f.Ab = null;
z.f.lF = function() {
  var a = (0,z.Vo)();
  this.Fs = null;
  this.Rk = !0;
  var b = z.xS();
  this.qo();
  this.isAuthenticated && z.kd(this.sc, "is-notesCreator", this.data.fl.userId === this.currentUser.userId);
  z.xe(this.J(".js-notesPostCreator"), this.data.fl.name);
  this.lx(b);
  this.yc.push(z.T(this.nf, "mouseover", this.CS, this));
  this.yc.push(z.T(this.nf, "mouseout", this.BS, this));
  this.yc.push(z.T(this.sc, "click", this.yS, this));
  this.yc.push(z.T(this.vs, z.EY, this.KB, this));
  z.Uw("notes.renderMarkers", (0,z.Vo)() - a);
};
z.f.lx = function(a) {
  if (a.Tf && this.jd.Ce[a.Tf]) {
    if ("highlight" == a.Cs) {
      X7(this, a.Tf);
      var b = this.anchors.get(a.Tf), c = a.startIndex, d = a.endIndex;
      if (z.ia(c) && z.ia(d)) {
        var e = z.sB(b, c, b, d);
        e && (b = new J6(e, b, new z.Ci({anchor:a.Tf, startIndex:c, endIndex:d, content:e.W()})), U7(this, b));
      }
    } else {
      a.noteId ? (z.q(J7(this, a.Tf), function() {
        W7(this, a.Tf);
      }, this), L7(this, a.noteId, !0), a8(this, a.noteId, {scroll:!0, oj:!0}), "reply" == a.Cs && H7(this)) : "newNote" == a.Cs && X7(this, a.Tf);
    }
  }
};
z.f.kF = function(a) {
  Q7.F.kF.call(this, a);
  this.Kd.clear();
  L7(this, a.xb());
  z.t(this.sc, "is-hidingNotesEditor");
};
z.f.mL = function() {
  var a = {scroll:!0, oj:!0};
  if (this.Kd) {
    V7(this, a), R7(this);
  } else {
    var b = z.yb(this.Zc), c = b && b.xb();
    c && (L7(this, c), a8(this, c, a), b.focus());
  }
};
z.f.ts = function() {
  Q7.F.ts.call(this);
  a7(this.anchors, this.nf, this.anchors.get(this.data.Va));
};
z.f.Uj = function() {
  T7(this);
  var a = (0,window.parseInt)(this.sc.style.top, 10);
  if (!(0,window.isNaN)(a)) {
    var b = this.data.Va;
    if (b = b ? this.anchors.get(b) : null) {
      if (b = z.gy(b, Z6(this.anchors, b))) {
        var c = S7(b, !1), b = S7(b, !0), d = !1, e = z.gw(c);
        a < e && (d = e - a, c.style.paddingTop = z.Bo(c).top + d + "px", this.sc.style.top = a + d + "px", z.t(c, "js-is-spacedForNoteList"), d = !0);
        a += this.sc.offsetHeight;
        c = z.gw(b) + b.offsetHeight;
        a > c && (a -= c, b.style.paddingBottom = z.Bo(b).bottom + a + "px", z.t(b, "js-is-spacedForNoteList"), d = !0);
        d && (u7(this.jd), this.Zd.ph());
      }
    }
  }
};
z.f.pF = function(a) {
  z.q(b8(this, a.value), function(a) {
    a && (this.data.Va && L6(this.data, this.data.Va).ub() || ((a = this.getSelection()) && a.highlight.anchor == this.data.Va ? (I7(this, a.highlight), N7(this, a)) : N7(this, this.data.Va), this.Kd && R7(this), this.S("show")), Y7(this, {scroll:!0, oj:!0}));
  }, this);
};
z.f.oF = function(a) {
  this.jd.hu(a.bd());
  a.xb() == this.$g && I7(this, null);
};
z.f.dG = function(a) {
  z.u(z.Ee(a.target, null, "notesReplies"), "notesReplies--hidden");
  this.Uj();
};
z.f.PT = function(a) {
  if (!this.pr && !z.Ee(a.target, "A") && (z.Cv() || this.data.Va)) {
    var b = this.getSelection();
    if (!b || b.nn != this.data.Va) {
      if (this.data.Va && 1E3 >= window.innerWidth) {
        return J7(this, null);
      }
      a = $6(this.anchors, a.target);
      z.q(b8(this, a), function(a) {
        a && (W7(this, this.data.Va), Y7(this, {scroll:!0, oj:!0}));
      }, this);
    }
  }
};
z.f.Kv = function() {
  this.qo();
};
z.f.KR = function(a) {
  if (!this.data.Va) {
    return!1;
  }
  a = a.target;
  return z.yw(a) ? !0 : !!z.bw(a, function(a) {
    return a == this.sc || a == this.jd.Nm || a == this.Ab.fa() || a.getAttribute("data-action") && "zoom" != a.getAttribute("data-action");
  }.bind(this));
};
z.f.KS = function() {
  this.data.Va && J7(this, null);
};
z.f.TT = function(a) {
  z.rQ(this.us, a.value);
};
z.f.CS = function(a) {
  c8(this, a, !0);
};
z.f.BS = function(a) {
  c8(this, a, !1);
};
z.f.ZI = function() {
  if (!this.pr) {
    var a = z.Bn();
    if (!a || a.isCollapsed()) {
      z.lG(this.Ab);
    } else {
      var b = Z6(this.anchors, z.Gm(a)), c;
      if (c = b) {
        c = z.Gm(a), c = z.bw(c, F6, b);
      }
      c ? z.mG(this.Ab, z.ow(a)) : z.lG(this.Ab);
    }
  }
};
z.f.NI = function() {
  var a = this.getSelection(this.Ab.gn);
  z.lG(this.Ab);
  a && U7(this, a);
  return!1;
};
z.f.MI = function() {
  var a = z.Bn(), b = this.Ab.gn;
  z.lG(this.Ab);
  if (!a || a.isCollapsed()) {
    if (b && (a = z.Ln(b)), !a || a.isCollapsed()) {
      return!1;
    }
  }
  var b = a, c = this.Vc, d = z.fy(b.jb(), c), e = z.fy(b.Pb(), c);
  if ((b = d && e ? new O7(c, new P7(d, z.vw(b, d, !0)), new P7(e, z.vw(b, e, !1))) : null) && z.G.xa().enable_textshots && z.ei().twitterScreenName) {
    var a = this.kn, c = this.post, d = this.currentUser, e = c.creator || {}, g = b.YX(), h = z.RX(c, z.ei().userId, z.G), k = b.XX();
    k && z.Pl(h, k);
    b = {name:e.name || "", username:e.username || "", twitterScreenName:e.twitterScreenName || "", url:h.toString(), content:b.WX().W(), user:d, mz:g};
    (new C6(a.X, c, b)).open();
  } else {
    this.kn.yk(this.post, a.W(), "highlight", v6);
  }
  return!1;
};
z.f.$S = function(a) {
  a = a.value.split(",");
  var b = a[0], c = a[1];
  z.s(z.q(O6(this.data, c, b), function() {
    for (var a = E6(this.data.Hd(b, this.data.Va)), e = 0;e < a.length;e++) {
      if (a[e].Tc() == c) {
        z.hb(a, e);
        break;
      }
    }
    E7(this, z.Z1, this.data.Hd(b, this.data.Va), {replyId:c});
    this.tD.U((0,z.K)("The reply has been dismissed."), z.cS);
  }, this), z.YI(this.Is, (0,z.K)("Sorry, we couldn’t hide the reply. Please try again later and make sure you are logged in.")));
};
z.f.yS = function(a) {
  a = a.target;
  var b = z.Ee(a, null, "notesItem");
  if (b) {
    var c = b.getAttribute("data-note-id");
    c == this.$g ? z.bw(a, function(a) {
      return!!a.getAttribute("data-action") || z.gd(a, "editable");
    }, b, !0) == b && L7(this, null) : (L7(this, c), a8(this, c, {scroll:!0, oj:!0}));
  }
};
z.f.VT = function() {
  var a = this.getSelection();
  L7(this, null);
  a && I7(this, a.highlight);
  N7(this, a || this.data.Va);
  this.Kd && (a && V7(this, {scroll:!0, oj:!0}), R7(this));
};
z.f.KB = function(a) {
  (a = a.target.getAttribute("name")) && X6(this.anchors, a) && s7(this.jd, a, a == this.data.Va);
};
z.f.qo = function() {
  if (this.Rk) {
    if (this.Nf) {
      return z.Nw(Error("UpdatePositions called after dispose"));
    }
    Q7.F.qo.call(this);
    var a = {scroll:!1, oj:!0};
    this.$g ? a8(this, this.$g, a) : Y7(this, a);
  }
};
z.f.qZ = function() {
  if (this.data.Va) {
    var a = this.anchors.get(this.data.Va);
    if (!a) {
      J7(this, null);
    } else {
      if (!this.pr) {
        var b = z.Bn();
        b && (b = z.Gm(b), z.re(a, b) || J7(this, null));
      }
    }
  }
};
z.f.Z = function() {
  this.Ua.nb("resize-end", this.Kv, this);
  this.Ua.nb("inner-resize-end", this.Kv, this);
  this.Ab.nb("update", this.ZI, this);
  this.Ab.nb("highlight", this.NI, this);
  this.Ab.nb("twitter", this.MI, this);
  Q7.F.Z.call(this);
};
z.p(d8, z.tm);
d8.prototype.ED = function(a, b, c, d, e, g) {
  return new Q7(a.Ma(), b, c, d, e, g);
};
z.p(e8, z.Ax);
z.f = e8.prototype;
z.f.Gr = 0;
z.f.OB = 0;
z.f.sj = 0;
z.f.jA = 0;
z.f.Fv = 0;
z.f.oI = 0;
z.f.bn = 0;
z.f.sC = 1;
z.f.Fw = 0;
z.f.Ew = 0;
z.f.AJ = 0;
z.f.Ah = void 0;
z.f.$a = [];
z.f.Eq = function() {
  this.$a.length || (this.$a = [z.T(this.Sb, "touchstart", this.cU, this), z.T(this.Sb, "touchmove", this.JB, this), z.T(this.Sb, "touchend", this.bU, this)]);
};
z.f.cU = function(a) {
  var b = this.Sb.firstChild;
  this.jA = this.sj = 0;
  this.AJ = b.offsetWidth * this.Sb.children.length;
  this.Ah = void 0;
  this.Fw = this.Sb.offsetWidth;
  this.sC = 1;
  this.oI = -(this.Sb.children.length - 1);
  this.bn = +new Date;
  this.Gr = a.touches[0].pageX;
  this.OB = a.touches[0].pageY;
  z.eo(this.Sb, "transition-duration", 0);
};
z.f.JB = function(a) {
  1 < a.touches.length || (this.sj = a.touches[0].pageX - this.Gr, this.jA = a.touches[0].pageY - this.OB, this.Gr = a.touches[0].pageX, this.OB = a.touches[0].pageY, "undefined" == typeof this.Ah && (this.Ah = Math.abs(this.jA) > Math.abs(this.sj)), this.Ah || (this.Fv = this.sj / this.sC + f8(this), a.preventDefault(), this.sC = 0 === this.Ew && 0 < this.sj ? this.Gr / this.Fw + 1.25 : this.Ew == this.oI && 0 > this.sj ? Math.abs(this.Gr) / this.Fw + 1.25 : 1, z.eo(this.Sb, "transform", "translate3d(" + 
  this.Fv + "px,0,0)")));
};
z.f.bU = function() {
  if (!this.Ah) {
    var a = 1E3 > +new Date - this.bn && 15 < Math.abs(this.sj) ? 0 > this.sj ? -1 : 1 : 0, b = Math[a ? 0 > this.sj ? "ceil" : "floor" : "round"](f8(this) / (this.AJ / this.Sb.children.length)), b = Math.min(b + a, 0), b = Math.max(-(this.Sb.children.length - 1), b);
    g8(this, b, ".2s");
  }
};
z.f.disable = function() {
  z.eo(this.Sb, "transition-duration", "0");
  z.eo(this.Sb, "transform", "translate3d(0,0,0)");
  z.Qv(this.$a);
  this.$a = [];
};
z.f.enable = e8.prototype.Eq;
z.p(h8, z7);
z.f = h8.prototype;
z.f.Z = function() {
  this.HI = null;
  this.Sb && (this.Sb.disable(), this.Sb.nb("slide", this.XI, this), this.Sb = null);
  this.dg && (this.dg.cancel(), this.dg = null);
  h8.F.Z.call(this);
};
z.f.ts = function() {
  h8.F.ts.call(this);
  B6(this.kA, !0);
};
z.f.LD = function() {
  B6(this.kA, !1);
  h8.F.LD.call(this);
};
z.f.lF = function() {
  this.Fs = null;
  var a = (0,z.Vo)(), b = z.xS();
  this.qo();
  this.isAuthenticated && z.kd(this.sc, "is-notesCreator", this.data.fl.userId === this.currentUser.userId);
  z.xe(this.J(".js-notesPostCreator"), this.data.fl.name);
  this.lx(b);
  z.Uw("notes.renderMarkers", (0,z.Vo)() - a);
};
z.f.lx = function(a) {
  a.Tf && this.jd.Ce[a.Tf] && j8(this, a.Tf);
};
z.f.MM = function() {
};
z.f.PM = function(a) {
  this.dG(a);
  z.t(this.km, "is-showingNotesReplies");
  this.Sb.disable();
  this.li.vq({Cl:this.Cl, zF:this.data.fl, cm:window.Infinity}, "note");
};
z.f.pF = function(a) {
  a = a.value;
  this.jd.Ce[a] && (a == this.data.Va ? J7(this, null) : j8(this, a));
};
z.f.oF = function(a) {
  this.jd.hu(a.bd());
  if (!this.data.Va || !L6(this.data, this.data.Va).ub()) {
    return this.BB();
  }
  g8(this.Sb, 0, "0");
};
z.f.XS = function() {
  i8(this, !0);
};
z.f.KI = function(a) {
  this.data.Va && !z.re(this.sc, a.target) && (a.stopPropagation(), this.BB());
};
z.f.XI = function(a) {
  if (a = L6(this.data, this.data.Va).xn(a)) {
    L7(this, a.xb());
    if (!a.bi()) {
      a = a.bd();
      var b = this.anchors.get(a), b = z.Xv(b);
      I7(this, new z.Ci({anchor:a, startIndex:0, endIndex:b.length - 1, content:b}), !0);
    }
    i8(this, !0);
  }
};
z.f.BB = function() {
  z.gd(this.km, "is-showingNotesReplies") ? z.gd(this.km, "is-showingNotesReplies") && (z.t(this.sc.querySelector(".is-activeNote .notesReplies"), "notesReplies--hidden"), z.u(this.km, "is-showingNotesReplies"), this.Sb.enable(), g8(this.Sb, 0, "0", !0), i8(this, !1), this.li.vq({Cl:this.Cl, zF:this.data.fl, cm:this.cm}, "note")) : z.q(J7(this, null), function() {
    z.u(this.km, "is-showingNotesReplies");
    z.u(this.km, "is-newNoteEditorActivated");
    z.u(this.nf, "is-showingNewNoteEditor");
    z.u(this.screen.aa(), "is-notesListVisible");
    B6(this.kA, !1);
    this.Dw && z.ie(this.Dw);
    this.Sb.disable();
    this.qo();
  }, this);
};
z.p(k8, z.tm);
k8.prototype.ED = function(a, b, c, d, e) {
  if (e) {
    throw Error("Can not initialize mobile notes with menu");
  }
  return new h8(a.Ma(), b, c, d);
};
z.p(l8, z.tm);
z.f = l8.prototype;
z.f.load = function() {
  this.pe || (this.pe = z.q(this.Wa.Sx(this.va), this.TQ, this));
  return this.pe.Db();
};
z.f.toggle = function(a, b, c) {
  return z.q(n8(this, a, b, c), function(d) {
    return d && d.sa() == z.ei().userId ? this.remove(d) : this.create(a, b, c);
  }, this);
};
z.f.create = function(a, b, c) {
  return z.q(this.pw.post(z.N_.L({postId:this.va}), {paragraphs:[a.gb().dc()], startOffset:b, endOffset:c}, {oa:!0}), function(a) {
    this.Fh.add(z.pD(this.qa, z.Bh.gb(z.gj, a.value)));
  }, this);
};
z.f.remove = function(a) {
  this.Fh.remove(a);
  this.qa.remove(a);
  return this.pw.td(z.O_.L({postId:this.va, quoteId:a.Wi()}));
};
z.f.TQ = function(a) {
  z.hD(this.qa, a);
  this.Fh.sd(a.value || []);
  return this.Fh;
};
z.f.fK = function() {
  this.fw = o8(this, this.Fh.lf());
};
z.p(p8, z.Cx);
z.f = p8.prototype;
z.f.R = function() {
  p8.F.R.call(this);
  z.Dx(this, this.Rb, "quote", this.XQ, this);
  z.G.xa().enable_hover_over_sentences && this.ua(this.Vc, "click", this.ir, this);
  z.s(this.nd.load(), z.V);
};
z.f.ga = function() {
  p8.F.ga.call(this);
};
z.f.LQ = function(a) {
  if (this.nd && (a = Q6(a.target))) {
    var b = z.fy(a, this.Vc);
    b && (b = r7(this.nd, b.getAttribute("name"))) && b.length && z.kY(z.mY(z.nT(z.mT(z.oT(this.Ca), e7, {Jy:b, D_:!0}), a), "popover--dark popover--quoteAttributions"), new z.fY(a)).U();
  }
};
z.f.ir = function(a) {
  z.bw(a.target, function(a) {
    if (z.gd(a, "markup--sentence")) {
      return q8(this, a), !0;
    }
    if (z.gd(a, "markup--quote") || z.gd(a, "is-me")) {
      var c = z.Ln(a);
      c && (c = r8(this, c)) && z.s(z.q(n8(this.nd, c.Zx, c.start, c.end), this.Rb.eG.bind(this.Rb, a)), z.V);
      return!0;
    }
    return!1;
  }.bind(this));
};
z.f.XQ = function() {
  var a = z.Bn();
  if (!a || a.isCollapsed()) {
    if (this.Rb.gn && (a = z.Ln(this.Rb.gn)), !a) {
      return;
    }
  }
  a = r8(this, a);
  z.s(this.nd.toggle(a.Zx, a.start, a.end), z.V);
  this.Rb.Nn() && (z.lG(this.Rb), z.On());
};
z.f.qJ = function() {
  var a = new w7(this.Vc), b = this.nd.fw, c = Object.keys(b).concat(this.uH);
  z.pb(c);
  c.forEach(function(a) {
    s8(this, a, b[a] || []);
  }, this);
  this.uH = Object.keys(b);
  (a = a.restore()) && a.select();
  if (z.G.xa().enable_hover_over_sentences) {
    for (a = this.Vc.querySelectorAll(".markup--quote"), c = 0;c < a.length;c++) {
      this.ua(a[c], "mouseenter", this.LQ, this);
    }
  }
};
t8.prototype.xX = function(a, b, c) {
  return new p8(this.X, a, b, c);
};
var v8 = z.SP;
v8.Ma().scope("screen").add("notes", d8).add("notes-mobile", k8).add("quotes", t8);
z.H4(v8, "notes");
})(_mdm);
