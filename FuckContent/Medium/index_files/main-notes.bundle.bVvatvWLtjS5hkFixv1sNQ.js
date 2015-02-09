(function(z){
var y4 = function() {
  return(0,z.I)("Tweet must be 140 characters or less.");
};
var z4 = function(a, b) {
  var c = z.wR(a, !0);
  return 0 < c && 140 >= c ? !0 : (c = b.J(".js-tweetEditor-text"), (new z.FK(c, {name:"shimmy-shake", duration:400})).start(), c = b.J(".js-tweetEditor-error"), z.Lq(c, y4), !1);
};
var A4 = function(a, b, c) {
  return(0,z.Gv)("https://twitter.com/" + z.Cp(c.currentUser.twitterScreenName) + "/status/" + z.Cp(a.id));
};
var B4 = function() {
  this.Fd = {};
  z.B.call(this, void 0);
};
var C4 = function(a, b) {
  a.Ia && z.gd(a.Ia, "u-hide", b);
};
var D4 = function(a) {
  return(0,z.I)(z.K(z.Rp(String(a.content))) + " —" + z.zR(a) + " " + z.H(a.url));
};
var E4 = function(a) {
  return(0,z.I)('\x3chr\x3e\x3cp class\x3d"postTitle"\x3e' + z.H(a.post.title) + '\x3c/p\x3e\x3cp class\x3d"postMeta"\x3e\x3cspan class\x3d"postAuthor"\x3e' + z.H(a.post.creator.name) + "\x3c/span\x3e \x26middot; " + z.H(a.post.virtuals.firstPublishedAtEnglish) + "\x3c/p\x3e");
};
var F4 = function(a, b, c) {
  return(0,z.I)('\x3cdiv class\x3d"tweetEditor u-fillWidth"\x3e\x3cdiv class\x3d"js-tweetEditor-error tweetEditor-error u-textAlignCenter u-danger"\x3e\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-avatar"\x3e' + z.K(z.yB({user:a.user, Gj:!0}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-textContainer"\x3e\x3cdiv class\x3d"js-tweetEditor-text textInput--chromeless u-textAlignLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-imageContainer"\x3e\x3cimg class\x3d"tweetEditor-image u-fillWidth" src\x3d"//' + 
  z.M(c.textshotHost) + "/image?content\x3d" + z.Ap(a.gF) + '"\x3e\x3c/div\x3e\x3c/div\x3e');
};
var G4 = function() {
  return(0,z.I)("Enter tweet text.");
};
var H4 = function(a, b) {
  a.Yq = b;
};
var I4 = function(a, b) {
  a.dG = b;
  return a;
};
var J4 = function(a) {
  return z.w(a, "replies");
};
var K4 = function(a) {
  var b = z.Sv(a.className), c = "DIV" == a.tagName && z.cd(a, "graf--" + z.Wv(14));
  return(!!L4[a.tagName] || c) && !!a.getAttribute("name") && 5 != b && 8 != b && 6 != b && 7 != b;
};
var M4 = function() {
  return(0,z.I)("Tap to leave a recommend note.");
};
var N4 = function() {
  return(0,z.I)("This note is only visible to the author, anyone @ mentioned, and publication editors (if any). The author or editors can choose to make it public.");
};
var O4 = function(a, b, c) {
  this.range = a;
  this.anchor = b;
  this.Tm = b.getAttribute("name");
  this.highlight = c;
};
var P4 = function(a, b, c) {
  z.wt.call(this);
  this.uH = {};
  this.RG = {};
  this.SH = {};
  this.Nk = null;
  this.aa = a;
  this.yh = a.get("request");
  this.wa = a.get("modelStore");
  this.sa = b;
  this.UH = 0;
  this.Xq = c;
  this.hG = !1;
  this.rf = null;
  this.Ra = "";
  this.FL = null;
};
var Q4 = function(a, b) {
  var c = a.uH[b];
  c || (c = a.uH[b] = new z.XH, a.R("new_note_list", c, a));
  return c;
};
var R4 = function(a, b) {
  if (!b) {
    return!1;
  }
  var c = b.V();
  if (a.content == c.substring(a.startIndex, a.endIndex)) {
    return!0;
  }
  var d = new RegExp(z.Sa(a.content), "gi"), e = d.exec(c), c = e && d.exec(c);
  return e && !c ? (c = a.endIndex - a.startIndex, a.startIndex = e.index, a.endIndex = e.index + c, a.content = e[0], !0) : !1;
};
var S4 = function(a, b, c) {
  var d = b.ub(), e = Q4(a, b.Xc()), g = e ? e.indexOf(b) : -1, h = b.Pi();
  b.mf(c);
  "HIDDEN" == c ? a.wa.remove(b) : b = z.tN(a.wa, b);
  var k = e ? e.indexOf(b) : -1;
  return{yd:a.yh.put(z.GW.L({postId:a.sa, noteId:d}), {state:c}, {pa:!0}), sM:function() {
    b.mf(h);
    -1 == k && (-1 == g ? e.add(b) : e.hp(b, g));
  }};
};
var T4 = function(a, b, c) {
  return a.yh.put(z.JW.L({postId:a.sa, noteId:c, replyId:b}), {state:"HIDDEN"}, {pa:!0});
};
var U4 = function(a, b, c) {
  return z.Qy(new z.by(b, c), a, void 0);
};
var V4 = function(a, b) {
  var c = z.Es(a, "title");
  c && b.call(void 0, c);
  (c = z.Es(a, "subtitle")) && b.call(void 0, c);
  a.querySelector(".postField--body") && z.Lx(a.querySelector(".postField--body"), K4, z.$b(b, z.Xb(!0)), void 0);
};
var W4 = function(a) {
  var b;
  b = String(a).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e");
  return z.Wo(a, z.Zo) ? (0,z.I)(b, z.Xo(a)) : b;
};
var X4 = function(a, b, c) {
  for (var d = {}, e = 0;e < a.length;e++) {
    var g = a[e], h = b.call(c, g, e, a);
    z.ba(h) && (d[h] || (d[h] = [])).push(g);
  }
  return d;
};
var Y4 = function(a, b, c) {
  z.Mt.call(this);
  if (!a) {
    throw Error("Missing element for TemplateView");
  }
  this.Ia = a;
  this.Kc = b;
  this.Pm = c;
  this.dA = "list" + z.la(this);
  this.Zq = "";
};
var Z4 = function(a, b) {
  var c = !!b;
  if (a.Xa() && c) {
    for (var c = a.$w(), d = 0;d < c.length;d++) {
      var e = a.Ar(c[d]);
      a.R("after-draw", c[d], e);
    }
  }
};
var $4 = function(a, b) {
  var c = a.rm.call(null, b);
  return a.Gh ? (a.Gh[a.fm] = c, c = z.Kq(a.Pm, a.Gh), delete a.Gh[a.fm], String(c)) : String(z.Kq(a.Pm, c));
};
var a5 = function(a) {
  this.Ro = a;
};
var b5 = function(a, b) {
  return b ? z.Es(a.Ro, b) : null;
};
var c5 = function(a, b, c) {
  V4(a.Ro, function(a) {
    var e = a.getAttribute("name");
    e && b.call(c, a, e);
  });
};
var d5 = function(a, b) {
  return z.oe(a.Ro, b) ? a.Ro : null;
};
var e5 = function(a, b) {
  var c;
  c = d5(a, b);
  return(c = z.ns(b, K4, c)) && c.getAttribute("name") || null;
};
var f5 = function(a, b, c) {
  (a = z.tx(c, d5(a, c))) && z.gd(b, "is-darkBackgrounded", z.cd(a, "is-darkBackgrounded"));
};
var g5 = function(a, b, c, d) {
  z.SH.call(this, a, b, "Leave a note", 400, d || null);
  this.sa = c;
};
var h5 = function(a, b, c) {
  a.Py = b;
  a.NF = c.text;
  a.Qy = c.image;
};
var i5 = function(a, b, c, d) {
  a.bA = b;
  a.aA = c;
  a.QG = d;
};
var j5 = function(a, b, c) {
  b = '\x3cul class\x3d"list list--quotes list--short js-quotesList ' + (a.uE.length ? "" : "is-empty") + '"\x3e\x3cdiv class\x3d"list-title"\x3eHighlights\x3c/div\x3e';
  for (var d = a.uE, e = d.length, g = 0;g < e;g++) {
    for (var h = d[g], k = "", l = h.quotes, n = l.length, r = 0;r < n;r++) {
      k += "" + l[r].quoteId + (r != n - 1 ? "," : "");
    }
    k = z.mp(k);
    b += '\x3cli class\x3d"list-item list-item--inline" data-quote-ids\x3d"' + z.M(k) + '" data-quote-creator-id\x3d"' + z.M(h.user.userId) + '"\x3e' + z.K(z.uB(z.J(a, {user:h.user}), c)) + "\x3c/li\x3e";
  }
  return(0,z.I)(b + "\x3c/ul\x3e");
};
var k5 = function(a, b, c) {
  return(0,z.I)('\x3cdiv class\x3d"paragraphControls u-noUserSelect' + (c.variants.enable_quotes ? "paragraphControls--small" : "") + '"\x3e' + (c.variants.enable_quotes ? l5(a, 0, c) : m5(a)) + "\x3c/div\x3e");
};
var m5 = function(a) {
  var b = '\x3cdiv class\x3d"notesMarker u-noUserSelect" data-action\x3d"select-anchor" data-action-value\x3d"' + z.M(a.Tm) + '"\x3e' + n5({count:a.Ix}) + '\x3c/div\x3e\x3cspan class\x3d"notesMarker-text"\x3e', c = "" + z.K(z.xI(z.J(a, {OD:!0, type:"notes", nc:a.EL, social:a.DL, Xa:a.GL, gL:!0}))), c = (0,z.U)(c), b = b + (z.K(z.BI(z.J(a, {text:c, type:"notes"}))) + "\x3c/span\x3e");
  return(0,z.I)(b);
};
var l5 = function(a, b, c) {
  return(0,z.I)('\x3cdiv class\x3d"paragraphControls-block " data-action\x3d"select-anchor" data-action-value\x3d"' + z.M(a.Tm) + '"\x3e' + (a.Ux ? o5(z.J(a, {type:"quotes", nc:a.Ux, Xa:!1}), c) : "") + o5(z.J(a, {type:"notes", nc:a.EL, social:a.DL, Xa:a.GL}), c) + "\x3c/div\x3e");
};
var o5 = function(a, b) {
  var c = '\x3cdiv class\x3d"paragraphControls-buttonSet paragraphControls-buttonSet--' + z.M(a.type) + '"\x3e' + z.K(z.YA({dc:!0, za:"paragraphControls-item paragraphControls-item--icon", Xa:a.Xa, Ea:(0,z.U)("" + ("notes" == a.type ? '\x3cspan class\x3d"icon icon--notesHollow2"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"icon icon--heart"\x3e\x3c/span\x3e\x3cspan class\x3d"icon icon--heartThin"\x3e\x3c/span\x3e'))}, b));
  if (a.nc) {
    c += '\x3cspan class\x3d"paragraphControls-item paragraphControls-item--count"\x3e\x3cspan class\x3d"paragraphControls-itemText paragraphControls-itemText--social"\x3e';
    if ("notes" == a.type) {
      var d = "" + z.K(z.xI(z.J(a, {OD:!0}))), d = (0,z.U)(d), c = c + z.K(z.BI(z.J(a, {text:d})))
    } else {
      c += z.K(z.xI(a));
    }
    c += '\x3c/span\x3e\x3cspan class\x3d"paragraphControls-itemText paragraphControls-itemText--count"\x3e' + z.H(a.nc) + "\x3c/span\x3e\x3c/span\x3e";
  }
  return(0,z.I)(c + "\x3c/div\x3e");
};
var n5 = function(a) {
  return(0,z.I)("remove" == a.count ? '\x3cspan class\x3d"icon--notesMarker icon icon--notes"\x3e\x3c/span\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3e' : 0 == a.count ? '\x3cspan class\x3d"icon--notesMarker icon icon--notesHollow"\x3e\x3c/span\x3e\x3cspan class\x3d"notesMarker-nocount"\x3e+\x3c/span\x3e' : '\x3cspan class\x3d"icon--notesMarker icon icon--notes"\x3e\x3c/span\x3e\x3cspan class\x3d"notesMarker-count"\x3e' + z.H(a.count) + "\x3c/span\x3e");
};
var p5 = function(a, b, c) {
  return(0,z.I)(z.K(z.gB({za:"button--dismissNotes", action:"dismiss-note", text:(0,z.U)("" + n5({count:"remove"}))}, c)) + '\x3cdiv class\x3d"notesList ' + (c.variants.enable_quotes ? "v-enableQuotes" : "") + '"\x3e' + z.K(j5({uE:[]}, 0, c)) + '\x3cdiv class\x3d"notesItems"\x3e\x3c/div\x3e\x3cdiv class\x3d"newNoteEditor" tabIndex\x3d"-1"\x3e' + z.K(z.gB({za:"button--addNotes", action:"start-note", pg:!0, title:"Leave a note", text:(0,z.U)('\x3cspan class\x3d"icon icon--addCircled icon--addNotes"\x3e\x3c/span\x3e\x3cspan class\x3d"notesAddText"\x3eLeave a note for \x3cspan class\x3d"js-notesPostCreator"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"notesAddCreatorText"\x3eLeave a note\x3c/span\x3e')}, 
  c)) + (c.isAuthenticated ? '\x3cdiv class\x3d"notesEditContainer is-notesEditMode"\x3e\x3cdiv class\x3d"notesAvatar"\x3e' + z.K(z.uB({Gj:!0, user:c.currentUser}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e' + z.H(c.currentUser.name) + '\x3c/div\x3e\x3cdiv class\x3d"notesItemEditor notesEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + z.K(z.gB({isPrimary:!0, Cx:!0, za:"button--editNotesAction", action:"save-note", text:"Save"}, c)) + z.K(z.gB({za:"button--editNotesAction", 
  action:"cancel-note", text:"Cancel"}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesDisclaimer"\x3e' + z.K(N4()) + "\x3c/div\x3e\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/div\x3e");
};
var q5 = function(a, b, c) {
  var d = a.note.author ? a.note.author.userId : null;
  b = '\x3cdiv class\x3d"notesItem-inner"\x3e\x3cdiv class\x3d"notesItem-main"\x3e' + ('\x3cspan class\x3d"notesState-border"\x3e\x3c/span\x3e\x3cdiv class\x3d"notesControls"\x3e' + (a.gl ? '\x3cul class\x3d"notesState notesState-dropdown" data-action\x3d"toggle-note-dropdown"\x3e' + ("NEW" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icon icon--invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icon icon--notesStateDown"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"approve-note" data-action-value\x3d"' + 
  z.M(a.note.noteId) + '"\x3e\x3cspan class\x3d"icon icon--group"\x3e\x3c/span\x3ePublic\x3c/li\x3e' : "PUBLIC" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icon icon--group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icon icon--notesStateDown"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"unapprove-note" data-action-value\x3d"' + z.M(a.note.noteId) + '"\x3e\x3cspan class\x3d"icon icon--invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : "") + (a.nE.userId != d ? '\x3cli data-action\x3d"hide-note" data-action-value\x3d"' + 
  z.M(a.note.noteId) + '"\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : "PUBLIC" != a.note.state ? '\x3cul class\x3d"notesState"\x3e\x3cli data-tooltip\x3d"' + z.M(N4()) + '"\x3e\x3cspan class\x3d"icon icon--invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : "") + ("PUBLIC" == a.note.state ? '\x3cbutton data-action\x3d"show-note-permalink" data-action-value\x3d"' + z.M(a.note.anchor) + "-" + z.M(a.note.noteId) + '" class\x3d"notesLink icon icon--link" data-tooltip\x3d"Click to update the address bar with this note’s shareable link"\x3e' : 
  "") + '\x3c/div\x3e\x3cdiv class\x3d"notesAvatar"\x3e' + z.K(z.uB({user:a.note.author}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e' + (d ? '\x3ca href\x3d"/@' + z.M(a.note.author.username) + '" title\x3d"Go to the profile of ' + z.M(a.note.author.name) + '"\x3e' + z.H(a.note.author.name) + "\x3c/a\x3e" : "\x3ci\x3eUnknown user\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notesContent"\x3e' + W4(z.K(z.Yp(String(a.note.content)))) + "\x3c/div\x3e" + (c.isAuthenticated ? '\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + 
  (d == c.currentUser.userId ? z.K(z.gB({za:"button--notesTextAction", action:"edit-note", Qa:a.note.noteId, text:"Edit"}, c)) + z.K(z.gB({isPrimary:!0, Cx:!0, za:"button--editNotesAction", action:"save-note", Qa:a.note.noteId, text:"Save"}, c)) + z.K(z.gB({za:"button--editNotesAction", action:"cancel-note", Qa:a.note.noteId, text:"Cancel"}, c)) + z.K(z.gB({za:"button--editNotesAction", action:"delete-note", Qa:a.note.noteId, text:"Delete"}, c)) : "") + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
  var e = a.note.replies.length, g = Math.max(a.note.replies.length - a.Il, 0);
  if (e) {
    b += '\x3cdiv class\x3d"notesReplies ' + (0 < g ? "notesReplies--hidden" : "") + '"\x3e\x3cdiv class\x3d"notesReplies-inner"\x3e';
    if (0 < g) {
      b += z.K(z.gB({za:"button--hiddenNotesReplies", action:"show-hidden-note-replies", text:(0,z.U)("View " + z.H(g) + (a.Il ? " more" : "") + (1 < g ? " replies" : " reply"))}, c)) + '\x3cdiv class\x3d"notesReplies-container"\x3e';
      for (var h = a.note.replies, k = h.length, l = 0;l < k;l++) {
        var n = h[l];
        b += l < g ? r5(z.J(a, {Re:n}), c) : "";
      }
      b += "\x3c/div\x3e";
    }
    h = a.note.replies;
    k = h.length;
    for (l = 0;l < k;l++) {
      n = h[l], b += l >= g ? r5(z.J(a, {Re:n}), c) : "";
    }
    b += "\x3c/div\x3e\x3c/div\x3e";
  }
  b += '\x3cdiv class\x3d"notesReplies-footer"\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notesReply notesReply--creator is-notesEditMode"\x3e\x3cdiv class\x3d"notesAvatar"\x3e' + z.K(z.sB({user:c.currentUser}, c)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e\x3ca href\x3d"/@' + z.M(c.currentUser.username) + '" title\x3d"Go to the profile of ' + z.M(c.currentUser.name) + '"\x3e' + z.H(c.currentUser.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"notesReply-editor notesEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + 
  z.K(z.gB({isPrimary:!0, Cx:!0, za:"button--editNotesAction", action:"save-reply", Qa:a.note.noteId, text:"Save"}, c)) + z.K(z.gB({za:"button--editNotesAction", action:"cancel-reply", Qa:a.note.noteId, text:"Cancel"}, c)) + "\x3c/div\x3e\x3c/div\x3e" : "") + z.K(z.gB({isPrimary:!0, za:"button--notesReplyLink", action:"start-reply", Qa:a.note.noteId, pg:!0, title:"Leave a reply", text:(0,z.U)("" + (e || !a.note.author ? "Reply to conversation" : d == c.currentUser.userId ? "Leave a reply" : "Reply to " + 
  z.H(a.note.author.name)))}, c)) + "\x3c/div\x3e\x3c/div\x3e";
  return(0,z.I)(b);
};
var r5 = function(a, b) {
  return(0,z.I)('\x3cdiv class\x3d"notesReply"\x3e' + (a.gl && (null == a.Re.author ? null : a.Re.author.userId) != b.currentUser.userId ? '\x3cdiv class\x3d"notesReply-hider" data-action\x3d"hide-reply" data-action-value\x3d"' + z.M(a.note.noteId) + "," + z.M(a.Re.replyId) + '" data-tooltip\x3d"Dismiss this reply"\x3e\x3cspan class\x3d"icon icon--remove"\x3e\x3c/span\x3e\x3c/div\x3e' : "") + '\x3cdiv class\x3d"notesAvatar"\x3e' + z.K(z.sB({user:a.Re.author}, b)) + '\x3c/div\x3e\x3cdiv class\x3d"notesAuthor"\x3e' + 
  (a.Re.author ? '\x3ca href\x3d"/@' + z.M(a.Re.author.username) + '" title\x3d"Go to the profile of ' + z.M(a.Re.author.name) + '"\x3e' + z.H(a.Re.author.name) + "\x3c/a\x3e" : "\x3ci\x3eUnknown user\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notesContent"\x3e' + W4(z.K(z.Yp(String(a.Re.content)))) + "\x3c/div\x3e" + (b.isAuthenticated ? a.Re.author && a.Re.author.userId == b.currentUser.userId ? '\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + z.K(z.gB({za:"button--notesTextAction", action:"edit-reply", 
  Qa:z.mp("" + a.note.noteId + "," + ("" + a.Re.replyId)), text:"Edit"}, b)) + z.K(z.gB({isPrimary:!0, Cx:!0, za:"button--editNotesAction", action:"save-reply", Qa:a.Re.replyId, text:"Save"}, b)) + z.K(z.gB({za:"button--editNotesAction", action:"cancel-reply", Qa:a.Re.replyId, text:"Cancel"}, b)) + z.K(z.gB({za:"button--editNotesAction", action:"delete-reply", Qa:a.Re.replyId, text:"Delete"}, b)) + "\x3c/div\x3e" : "" : "") + "\x3c/div\x3e");
};
z.cJ = function(a, b, c) {
  return(0,z.I)(z.K(z.gB({za:"notesVote-mobileTapButton", action:"enter-editor-mode", text:(0,z.U)('\x3cdiv class\x3d"u-muted notesVoteEditor--wrapper"\x3e\x3cdiv class\x3d"notesVoteEditor notesEditor"\x3e' + z.K((0,z.I)("Tap here to tell the author and your followers why you recommended this story.")) + "\x3c/div\x3e\x3c/div\x3e")}, c)) + z.K(z.YA({isPrimary:!0, dc:!0, eh:!0, Ea:"Send", action:"enter-editor-mode"}, c)) + z.K(z.YA({dc:!0, Ea:"Skip", action:"exit-editor-mode"}, c)));
};
z.bJ = function(a, b, c) {
  return(0,z.I)(z.K(z.gB({text:(0,z.U)("" + z.K(M4())), za:"notesVote-mobileTapButton", action:"enter-editor-mode"}, c)) + z.K(z.hB({icon:"icon--removeMedia", dc:!0, mg:!0, Si:!0, za:"noteVote-mobileExitButton", action:"exit-editor-mode"}, c)));
};
z.iI = function(a, b, c) {
  a = a || {};
  b = z.I;
  c = z.K(z.hB({dc:!0, mg:!0, Si:!0, za:"noteVote-mobileExitButton", action:"exit-editor-mode", icon:"icon--removeMedia"}, c)) + '\x3cdiv class\x3d"notesVoteEditor--wrapper js-notesVoteEditorWrapper"\x3e\x3cdiv class\x3d"js-notesVoteEditor notesVoteEditor notesEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + z.K(z.gB({isPrimary:!0, text:(0,z.U)("" + z.K((0,z.I)("Send"))), action:"save-notes-vote"}, c)) + z.K(z.gB({isPrimary:!0, text:(0,z.U)("" + z.K((0,z.I)("Skip"))), action:"exit-editor-mode"}, 
  c)) + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"notesVote-message js-notesVoteMessage u-hide"\x3e' + (a.Xj && 0 != a.Xj ? z.K((0,z.I)("Your note will be shared with the author.")) : z.K((0,z.I)("Your note will be shared with the author and visible to your " + z.H(c.productName) + " followers."))) + "\x3c/div\x3e";
  a = a.Xj && 0 != a.Xj ? "" : (0,z.I)('\x3cdiv class\x3d"notesVoteSocialShare"\x3e\x3cspan class\x3d"notesVoteSocialShare-prompt"\x3e' + z.K((0,z.I)("Share this story")) + "\x3c/span\x3e" + s5(z.J(null, {title:(0,z.U)("" + z.K(z.pA())), action:"share-on-twitter", icon:"icon--twitter"})) + s5(z.J(null, {title:(0,z.U)("" + z.K(z.qA())), action:"share-on-facebook", icon:"icon--facebook"})) + s5(z.J(null, {title:(0,z.U)("" + z.K(z.rA())), action:"share-by-email", icon:"icon--email"})) + "\x3c/div\x3e");
  return b(c + a);
};
z.F_ = function(a, b, c) {
  return(0,z.I)(z.K(z.gB({text:(0,z.U)("" + z.K(M4())), za:"notesVote-mobileTapButton", action:"enter-editor-mode"}, c)) + '\x3cdiv class\x3d"notesFooter u-noUserSelect"\x3e' + z.K(z.gB({isPrimary:!0, text:(0,z.U)("" + z.K((0,z.I)("Skip"))), action:"exit-editor-mode"}, c)) + "\x3c/div\x3e");
};
var s5 = function(a) {
  var b = a.x6 ? "span" : "button";
  a = "" + ("\x3c" + z.Pp(b) + ' class\x3d"button button--chromeless" title\x3d"' + z.M(a.title) + '" data-action\x3d"' + z.M(a.action) + '"\x3e\x3cspan class\x3d"icon ' + z.M(a.icon) + '"\x3e\x3c/span\x3e\x3c/' + z.Pp(b) + "\x3e");
  return(0,z.I)(a);
};
var t5 = function(a) {
  var b = "";
  if (10 < a.count) {
    b += '\x3cdiv class\x3d"slideIndicator-fraction"\x3e1 of ' + z.H(a.count) + "\x3c/div\x3e";
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
  return(0,z.I)(b);
};
var u5 = function(a, b, c, d) {
  z.Mt.call(this);
  this.OU = a;
  this.Ba = b;
  this.De = null;
  this.Uf = c;
  this.sa = d;
  a = window.document.createElement("div");
  a.className = "notesMarkers";
  z.de(a, this.OU);
  this.sm = a;
  this.Be = {};
  this.mo = this.Go = null;
};
var v5 = function(a, b) {
  var c = Q4(a.Ba, b), d = a.De ? w5(a.De, b).length : 0, e = c ? c.qb() : 0, g = 0, h = !1, k = {}, l = {};
  c.Wc(function(a) {
    var b = a.Uw();
    b && ((a = J4(a)) && a.forEach(function(a) {
      g++;
      a.author && (a.author.userId == z.O("currentUser").userId && (h = !0), a.author.social && a.author.social.isFollowing && (l[a.author.userId] = a.author), k[a.author.userId] = !0);
    }), k[b.userId] = !0, b.userId == z.O("currentUser").userId && (h = !0), b.social && b.social.isFollowing && (l[b.userId] = b));
  });
  return{postId:a.sa, Tm:b, Ix:e + g, EL:Object.keys(k).length, Ux:d, GL:h, DL:z.zb(l)};
};
var x5 = function(a, b, c) {
  var d = a.Uf.get(b);
  if (d) {
    var e = a.Be[b];
    e && (z.gd(e, "is-active", c), c = z.Ig(d, "float"), e.style.left = "left" == c ? "0" : -1 * z.Zg(d, "margin").right + "px", a = b5(a.Uf, b)) && (b = z.Sv(a.className), z.gd(e, "is-notesSourceFloated", 2 == b || 4 == b), z.gd(e, "u-hide", z.ls(a, !1)), b = 3 == b, z.gd(e, "is-notesSourceOutsetCenter", b), a = b || 7 == z.Ox(a), z.gd(e, "is-withoutSocialLine", a));
  }
};
var y5 = function(a) {
  var b = {};
  c5(a.Uf, function(a, d) {
    if (!(d in b)) {
      var e;
      e = z.q0(a, this.sm).y + z.$g(a).top;
      b[d] = e;
    }
  }, a);
  return b;
};
var z5 = function(a) {
  var b = y5(a), c = {};
  c5(a.Uf, function(a, d) {
    if (!c[d]) {
      var h;
      if (this.Be[d]) {
        h = this.Be[d];
      } else {
        h = v5(this, d);
        var k = z.Mq(k5, h);
        this.sm.appendChild(k);
        if (0 < h.Ix || 0 < h.Ux) {
          z.t(a, "is-withNotes"), z.t(k, "is-withNotes");
        }
        h = this.Be[d] = k;
      }
      h.style.top = b[d] + "px";
      x5(this, d, d == this.Ba.Ra);
      c[d] = !0;
      f5(this.Uf, h, a);
    }
  }, a);
  for (var d in a.Be) {
    c[d] || (z.fe(a.Be[d]), delete a.Be[d]);
  }
};
var A5 = function(a, b, c, d, e) {
  z.SH.call(this, a, b, "Leave a reply", 200, d);
  this.sa = c;
  this.Ev = e || null;
};
var B5 = function(a) {
  z.He.call(this);
  var b = z.jg();
  this.yi = b && new C5(z.ih(b, !0), a);
  this.vk = b && new C5(z.ih(b, !1), a);
};
var C5 = function(a, b) {
  this.Ce = a;
  this.hP = b;
  var c = z.Kx(a.la, b);
  this.PF = (this.Tf = c) && c.getAttribute("name");
  this.wm = c ? z.Fs(a, c) : -1;
};
var D5 = function(a) {
  var b = window.document.body;
  return z.oe(b, a.Ce.la) ? a.Ce : a.Tf && z.oe(b, a.Tf) ? z.Gs(a.wm, a.Tf) : a.PF && (b = z.Es(a.hP, a.PF)) ? z.Gs(a.wm, b) : null;
};
var E5 = function(a, b, c, d) {
  z.wt.call(this);
  this.ay = a;
  this.screen = a.get("screen");
  this.Ur = a.get("app");
  this.post = b;
  this.EI = b.clone();
  var e = b.Bm;
  e && e.N("change", this.LG, this);
  this.Uc = {};
  this.vc = [];
  this.qC = a.get("butter-bar");
  this.hs = a.get("dialog");
  this.Sd = c;
  e = c.querySelector(".notesSource");
  this.anchors = new a5(e);
  var g = z.Qd("div", "layoutSingleColumn notesPositionContainer");
  z.ee(this.Sd, g, 0);
  this.CY = g;
  g = window.document.createElement("div");
  g.className = "notesContainer";
  z.Lq(g, p5);
  this.CY.appendChild(g);
  this.ef = g;
  this.Vr = c.querySelector(".postField--body");
  this.mc = this.ef.querySelector(".notesList");
  this.Ql = z.ts(e);
  this.isAuthenticated = !!z.O("isAuthenticated");
  this.currentUser = z.O("currentUser");
  this.postId = b.Aa();
  this.gl = d;
  this.DD = "true" == this.Vr.contentEditable;
  this.data = new P4(a, this.postId, this.DD);
  this.data.N("new_note_list", this.$R, this);
  this.De = null;
  if (this.Sm = a.get("voteWidget")) {
    a = this.Sm, b = this.data, a.ir = b, a.Xa() && (b = b.load(), z.q(z.Oc(z.OI(a), b), a.KF, a));
  }
  this.dd = new u5(this.ef, this.data, this.anchors, this.postId);
  this.dd.U();
  this.vb = new z.Lt;
  this.ds = z.q(this.data.load(), this.ZD, this);
  z.uw(this.dd.sm).H("select-anchor", this.cE, this);
  z.uw(this.ef).H("show-hidden-note-replies", this.PL, this).H("start-reply", this.FS, this).H("save-reply", this.sS, this).H("edit-reply", this.DR, this).H("cancel-reply", this.iR, this).H("delete-reply", this.tR, this).H("approve-note", this.dR, this).H("unapprove-note", this.NS, this).H("edit-note", this.CR, this).H("save-note", this.rS, this).H("cancel-note", this.hR, this).H("delete-note", this.sR, this).H("hide-note", this.MR, this);
  this.Ur.N("historyUpdate", this.BH, this);
};
var F5 = function(a) {
  if (a.Ed && a.Ed.Hs()) {
    return!0;
  }
  for (var b in a.Uc) {
    if (a.Uc[b].Hs()) {
      return!0;
    }
  }
  return!1;
};
var G5 = function(a) {
  var b = new z.Gc, c = a.hs.open({title:(0,z.I)("Uh oh!"), bodyHtml:(0,z.I)("You have unsaved notes. Are you sure you want to abandon them?"), type:z.J_});
  c ? (c.N(z.eI, b.lb.bind(b, !0)), c.N(z.fI, function() {
    this.fK();
    b.cancel();
  }, a)) : b.cancel();
  return b;
};
var H5 = function(a) {
  z.Le(a.Ed);
  a.Ed = null;
  for (var b in a.Uc) {
    z.Le(a.Uc[b]), delete a.Uc[b];
  }
};
var I5 = function(a, b, c) {
  var d = b.Pi(), e = "PUBLIC" == c ? (0,z.I)("Note was made public.") : "HIDDEN" == c ? (0,z.I)("Note was dismissed.") : "NEW" == c ? (0,z.I)("Note was made private.") : "", g = S4(a.data, b, c);
  z.s(z.q(g.yd, function() {
    z.q(this.qC.U(e, {type:z.qN, Bt:!0}), function() {
      g.sM();
      I5(this, b, d);
    }, this);
    J5(this, z.pY, b, {noteState:c, previousNoteState:d});
  }, a), function(a) {
    this.qC.U((0,z.I)("Could not change note state"), "error");
    g.sM();
    (400 > a.status || 499 < a.status) && I5(this, b, d);
  }, a);
  return g.yd;
};
var K5 = function(a, b) {
  var c = b.value;
  return c ? a.Uc[c] : a.Ed;
};
var L5 = function(a, b) {
  var c = a.data.Lj(a.anchors.get(b));
  return{text:c.V(), image:4 == c.type ? c.od() : null};
};
var M5 = function(a, b) {
  var c = b || a.Pg, d = a.data.Bd(c, a.data.Ra), e = a.mc.querySelector('[data-note-id\x3d"' + c + '"]');
  z.t(e, "is-showingNotesReplyCreator");
  var g = a.Uc["reply_" + c];
  g || (e = e.querySelector(".notesReply-editor"), g = new A5(a.ay, e, a.postId, c), g.N("change", a.Hj, a), g.N("cancel", function() {
    g.clear();
  }, a), g.N("save", function(a) {
    g.clear();
    J4(d).push(a);
    J5(this, z.qY, d, {replyId:a.Pc()});
    this.$h.bq(d);
  }, a), a.Uc["reply_" + c] = g);
  g.focus();
};
var J5 = function(a, b, c, d) {
  d = d || {};
  d.postId = a.postId;
  d.noteId = c.ub();
  d.noteType = c.Th() ? "highlight" : "paragraph";
  z.T(b, d);
};
var N5 = function(a, b, c) {
  var d = z.jg(), d = d && d5(a.anchors, z.of(d)), e = c && d && new B5(d);
  z.q(O5(a, b && b.anchor || a.data.Ra), function() {
    if (b != this.Di) {
      var a = this.Di;
      a && P5(this, a, !1);
      b && P5(this, b, !0);
      this.Di = b;
    }
    (a = e && e.restore()) && a.select();
  }, a);
};
var P5 = function(a, b, c) {
  var d = b.anchor, e = b5(a.anchors, d);
  if (e = a.data.Lj(e)) {
    z.gv(e, 4);
    if (c) {
      if (!R4(b, e)) {
        return;
      }
      z.av(e, z.lv(b.startIndex, b.endIndex, b.id));
    }
    a.anchors.get(d).innerHTML = U4(e, z.Gq, {Jd:!a.DD, isPublished:!!a.post.Kj(), media:null, sections:!0, Vi:!1, Fi:!1, bf:!1});
  }
};
var Q5 = function(a, b, c) {
  if (b != a.Pg) {
    c || z.lL(a.Ur, "");
    (c = a.mc.querySelector(".is-activeNote")) && z.u(c, "is-activeNote");
    c = a.Pg = null;
    if (b && a.data.Ra) {
      var d = a.data.Bd(b, a.data.Ra);
      d && (c = a.mc.querySelector('[data-note-id\x3d"' + b + '"]')) && (z.t(c, "is-activeNote"), a.Pg = b, b = (b = d.Th()) ? a.data.wp(b) : null, N5(a, b || null));
    }
    z.gd(a.mc, "notesItem--selected", !!c);
  }
};
var O5 = function(a, b) {
  var c = b != a.data.Ra;
  if (c && F5(a)) {
    return z.q(G5(a), function() {
      H5(this);
      return O5(this, b);
    }, a);
  }
  a.Di && (P5(a, a.Di, !1), a.Di = null);
  if (!c) {
    return z.Uc();
  }
  Q5(a, null);
  a.data.Ra && x5(a.dd, a.data.Ra, !1);
  H5(a);
  z.Le(a.$h);
  a.$h = null;
  z.t(a.mc, "is-hidingNotesEditor");
  a.data.Ra = b && a.dd.Be[b] ? b : "";
  a.data.Ra ? a.Tr() : a.JC();
  a.Hj();
  return z.Uc();
};
var R5 = function(a, b, c, d) {
  (b = b5(a.anchors, b)) && (0,z.Nb)(b.querySelectorAll(".markup--quote"), function(a) {
    var b = a.getAttribute("data-creator-id") == c;
    z.gd(a, "is-selected", d && b);
  }, a);
};
var S5 = function() {
  var a = (window.document.location.hash ? window.document.location.hash.substr(1) : "").split("-"), b = a[1] || null, c = a[2] || null, d = a[3] || null, e = a[4] || null;
  return b || c ? {yC:c, anchor:a[0], highlight:(b || d && e) && {startIndex:Number(d), endIndex:Number(e), id:b}} : {};
};
var T5 = function(a, b) {
  if (a.isAuthenticated) {
    z.Le(a.Ed);
    var c = a.J(".notesItemEditor"), d = null, e = null;
    if ("string" == typeof b) {
      d = b;
    } else {
      if (b instanceof O4) {
        e = b.highlight, d = e.anchor;
      } else {
        throw Error("Missing assoc for note editor");
      }
    }
    c.innerHTML = "";
    a.Ed = new g5(a.ay, c, a.postId);
    h5(a.Ed, d, L5(a, d));
    e && i5(a.Ed, e.startIndex, e.endIndex, e.content);
    a.Ed.N("change", a.Hj, a);
    a.Ed.N("save", a.YD, a);
    a.Ed.N("cancel", function() {
      Q4(this.data, d).qb() ? z.t(this.mc, "is-hidingNotesEditor") : O5(this, null);
      Q5(this, null);
    }, a);
    z.u(a.mc, "is-hidingNotesEditor");
  }
};
var U5 = function(a, b, c) {
  this.mT = a;
  this.yi = b;
  this.vk = c;
};
var V5 = function(a, b) {
  this.qu = a;
  this.wm = b;
};
var W5 = function(a, b, c, d, e, g) {
  E5.call(this, a, b, c, d);
  this.CB = z.cw(a.get("screen"));
  this.Xq = g;
  this.Wa = a.get("dom-monitor");
  this.Wa.N("resize-end", this.av, this);
  this.Wa.N("inner-resize-end", this.av, this);
  this.td = a.get("element-tracker");
  this.Nr = a.get("twitter");
  z.uw(this.ef).H("hide-reply", this.NR, this).H("start-note", this.ES, this).H("show-note-permalink", this.CS, this);
  e.N("update", this.NH, this);
  e.N("highlight", this.AH, this);
  e.N("twitter", this.zH, this);
  this.Cb = e;
  [this.anchors.Ro].forEach(function(a) {
    this.vc.push(z.P(a, "click", this.yS, this));
  }, this);
  this.Vu = new z.bI;
  this.Vu.U();
  z.Ke(this, this.Vu);
  H4(this.Vu, this.xQ.bind(this));
  this.Vu.N("dismiss", this.vR, this);
};
var X5 = function(a) {
  if (a.Ed) {
    var b = a.CB, c = b.scrollTop, d = b.scrollLeft;
    a.Ed.focus();
    b.scrollTop = c;
    b.scrollLeft = d;
  }
};
var Y5 = function(a, b) {
  for (var c = b ? 1 : -1, d = a.parentNode.childNodes, e = d.length, g = (0,z.eb)(d, a), h = z.gz(a, 0), k = z.Zq(h), h = 1 != z.Dn(h), l = a, g = g + c;0 <= g && g < e;g += c) {
    var n = d[g];
    if ("SECTION" === n.tagName) {
      var r = z.gz(n, 0), A = z.Zq(r), r = 1 != z.Dn(r);
      if (k != A || r || h) {
        break;
      } else {
        l = n;
      }
    }
  }
  return l;
};
var Z5 = function(a) {
  var b = a.Vr.querySelectorAll(".js-is-spacedForNoteList"), c = !1;
  (0,z.vb)(b, function(a) {
    a.style.paddingBottom = "";
    a.style.paddingTop = "";
    z.u(a, "js-is-spacedForNoteList");
    c = !0;
  });
  c && (z5(a.dd), a.td.gh());
};
var $5 = function(a, b) {
  N5(a, b.highlight);
  a6(a, {scroll:!0, gj:!0});
  T5(a, b);
  a.Ed && X5(a);
  a.R("show");
};
var b6 = function(a, b) {
  Q4(a.data, b).qb() || (T5(a, b), a.Ed && X5(a));
};
var c6 = function(a, b) {
  z.q(O5(a, b), function() {
    b6(this, b);
    Z5(this);
    d6(this, {scroll:!0, gj:!0});
    this.mc.style.top = Math.round(z.ss(this.dd.Be[b])) + "px";
    this.Hj();
  }, a);
};
var e6 = function(a, b, c) {
  if (!a.data.Ra) {
    return z.Uc(!0);
  }
  Z5(a);
  var d = z.ss(b);
  c && (d -= z.rs(c, a.mc).y);
  d = Math.round(d + z.$g(b).top);
  a.mc.style.top = d + "px";
  a.Hj();
  if (1 > Math.abs(a.mc.offsetTop - d) || !(0,z.w0)()) {
    return z.Uc(!0);
  }
  b = new z.Gc;
  z.bs(a.mc, z.kS, b.lb.bind(b, a));
  return b;
};
var f6 = function(a, b, c) {
  var d = a.anchors.get(a.data.Ra);
  if (!a.isAuthenticated) {
    var e = a.data.Ra, e = a.Di ? e + ("--highlight-" + a.Di.startIndex + "-" + a.Di.endIndex) : e + "--newNote";
    a.mc.querySelector(".button--addNotes").setAttribute("data-redirect", z.Ur() + "#" + e);
  }
  d && (e = d.querySelector(".markup--highlight"), a = e6(a, c.gj && e ? e : d, b), c.scroll && z.q(a, function() {
    z.As(b, z.G_);
  }));
};
var a6 = function(a, b) {
  var c = a.mc.querySelector(".newNoteEditor");
  c && f6(a, c, b);
};
var g6 = function(a, b, c) {
  b = a.mc.querySelector('[data-note-id\x3d"' + b + '"]');
  f6(a, b, c);
};
var d6 = function(a, b) {
  if (a.data.Ra) {
    var c = Q4(a.data, a.data.Ra), d = c.qb();
    (c = d ? c.gn(0).ub() : null) ? (1 == d && Q5(a, c), b.gj = !1, g6(a, c, b)) : a6(a, b);
  }
};
var h6 = function(a, b) {
  return b == a.data.Ra ? z.q(O5(a, null), z.FD) : z.q(O5(a, b), z.Xb(!!b));
};
var i6 = function(a, b, c) {
  var d = z.Ce(b.target, null, "notesItem");
  !d || b.relatedTarget && z.oe(d, b.relatedTarget) || !(b = a.data.Bd(d.getAttribute("data-note-id"), a.data.Ra)) || (d = null, c ? d = b.Th() : a.Pg && (d = a.data.Bd(a.Pg, a.data.Ra).Th()), N5(a, d ? a.data.wp(d) : null, a.DD));
};
var j6 = function(a) {
  z.He.call(this);
  this.aa = a;
};
var k6 = function(a, b) {
  z.wt.call(this);
  this.aa = a;
  this.Lb = b;
  this.rq();
};
var l6 = function(a) {
  a = z.j0(a.Lb, "transform").match(/translate3d\(([^,]*)/);
  return(0,window.parseInt)(a ? a[1] : 0, 10);
};
var m6 = function(a, b, c, d) {
  var e = b != a.Tv;
  a.Tv = b;
  a.Wu = b * a.Uv;
  z.Gg(a.Lb, "transition-duration", c);
  z.Gg(a.Lb, "transform", "translate3d(" + a.Wu + "px,0,0)");
  if (e || d) {
    c = b = Math.abs(b);
    d = a.Lb.children;
    if (10 < d.length) {
      if (e = a.Lb.parentNode.getElementsByClassName("slideIndicator-fraction")[0]) {
        e.innerHTML = c + 1 + " of " + d.length;
      }
    } else {
      if (d = a.Lb.parentNode.getElementsByClassName("slideIndicators")[0]) {
        (e = d.getElementsByClassName("is-active")[0]) && z.u(e, "is-active"), (e = d.children[c]) && z.t(e, "is-active");
      }
    }
    a.R("slide", b, a);
  }
};
var n6 = function(a, b, c, d) {
  E5.call(this, a, b, c, d);
  this.vH = this.J(".notesItems");
  this.rz = a.get("diagnostics");
  this.Lb = new k6(a, this.vH);
  this.Lb.N("slide", this.LH, this);
  this.Vf = this.Sv = null;
  z.uw(this.ef).H("dismiss-note", this.JA, this).H("toggle-note-dropdown", function(a) {
    z.hd(a.target, "is-open");
  });
  this.vc.push(z.P(this.ef, "click", this.yH, this));
  this.vc.push(z.P(this.Vr, "click", this.yH, this));
  this.vc.push(z.P(this.ef, "focusout", this.KR, this));
};
var o6 = function(a, b) {
  if (a.Di) {
    var c = a.Vr.querySelector(".markup--highlight"), d = a.mc.querySelector(".is-activeNote");
    if (d && c) {
      var d = window.innerHeight - d.offsetHeight + 20, e = c.offsetHeight, c = z.ss(c);
      e < d && (c -= (d - e) / 2);
      a.Vf && a.Vf.cancel();
      b ? a.Vf = new z.QM(a.Ql, "scrollTop", 200, Math.max(c, 0)) : z.qs(a.Ql, 0, c);
    }
  }
};
var p6 = function(a, b) {
  a.Lb.enable();
  z.q(O5(a, b), function() {
    var a = Q4(this.data, this.data.Ra).qb();
    this.Sv = z.Mq(t5, {count:a});
    this.mc.appendChild(this.Sv);
    m6(this.Lb, 0, "0", !0);
  }, a);
};
var q6 = function(a) {
  z.He.call(this);
  this.aa = a;
};
var r6 = function(a, b) {
  z.He.call(this);
  this.Ua = a.get("modelRequest");
  this.wa = a.get("modelStore");
  this.Gv = a.get("request");
  this.sa = b;
  this.he = null;
  this.yv = {};
  this.xh = new z.XH;
  this.xh.N("add", this.YI, this);
  this.xh.N("remove", this.YI, this);
  z.Ke(this, this.xh);
};
var w5 = function(a, b) {
  var c = X4(a.yv[b] || [], function(a) {
    return a.va();
  }, a);
  return z.zb(c).map(function(a) {
    return new s6(a[0].Qc(), a);
  }, a);
};
var t6 = function(a, b, c, d) {
  return z.q(a.load(), function() {
    return this.xh.find(function(a) {
      return a.Ab()[0].getName() == b.name && a.Ad() > c && a.uc() < d;
    }, this);
  }, a);
};
var u6 = function(a, b) {
  return X4(b, function(a) {
    return a.Ab()[0].getName();
  }, a);
};
var s6 = function(a, b) {
  this.user = a;
  this.quotes = b;
};
var v6 = function(a, b, c, d) {
  z.Mt.call(this);
  this.De = new r6(a, c);
  z.Ke(this, this.De);
  a = this.De.xh;
  a.N("add", this.dI, this);
  a.N("remove", this.dI, this);
  this.Sd = b;
  this.xc = d;
  this.kG = [];
};
var w6 = function(a, b, c) {
  var d = (b = z.Es(a.Sd, b)) && z.lz(b);
  d && (z.gv(d, 7), c.forEach(function(a) {
    a.Ab()[0].V() == d.V() && z.av(d, z.mv(a.startOffset, a.endOffset, a.quoteId, a.userId));
  }, a), b.innerHTML = U4(d, z.Gq, {Jd:!0, isPublished:!0, media:null, sections:!0, Vi:!1, Fi:!0, bf:!1}));
};
var x6 = function(a) {
  this.aa = a;
};
z.p(B4, z.Vn);
z.AR.prototype.CG = z.$(314, function(a) {
  return z.wR(a, !0);
});
z.AR.prototype.eJ = z.$(313, function(a, b, c, d) {
  d = d.Oa();
  z4(d, a) && (z.q(this.O.post(z.lW.L(), {tweet:d, gF:c}, {me:!0}), function(a) {
    this.dv(String(z.Kq(A4, {id:a.value})));
  }, this), z.T(z.aY, {postId:b.id, dest:"twitter", shareSource:"textshot"}), a.close());
});
z.KN.prototype.bq = z.$(288, function(a) {
  var b = this.Eo(a);
  this.R("before-clear", a, b);
  b.innerHTML = z.JN(this, a);
  this.R("after-draw", a, b);
});
z.KN.prototype.QE = z.$(287, function(a) {
  this.Zq = a;
  return this;
});
z.pK.prototype.RE = z.$(286, function(a, b) {
  this.rm = a.bind(b);
  this.Jx();
  return this;
});
z.SH.prototype.Hs = z.$(277, function() {
  return this.mm.trim() != this.Oa().trim();
});
z.FM.prototype.Hs = z.$(276, function() {
  return this.mm.trim() != this.Oa().trim();
});
z.Dl.prototype.rt = z.$(242, function(a) {
  return z.x(this, "highlight", a);
});
z.Dl.prototype.wp = z.$(241, function() {
  return z.w(this, "highlight");
});
z.yl.prototype.cx = z.$(240, function() {
  return z.w(this, "quotes");
});
z.LQ.prototype.cx = z.$(239, function(a) {
  return z.q(this.O.get(z.KW.L({postId:a}), {background:!0, pa:!0}), this.ie.bind(this, B4));
});
z.Aj.prototype.Th = z.$(188, function() {
  return z.w(this, "highlightId");
});
z.Dl.prototype.Th = z.$(187, function() {
  return z.w(this, "highlightId");
});
z.Il.prototype.Th = z.$(186, function() {
  return z.w(this, "highlightId");
});
z.Aj.prototype.Ji = z.$(185, function() {
  return z.w(this, "authorId");
});
z.Bj.prototype.Ji = z.$(184, function() {
  return z.w(this, "authorId");
});
z.Rj.prototype.Ji = z.$(183, function() {
  return z.w(this, "authorId");
});
z.Dl.prototype.Ji = z.$(182, function() {
  return z.w(this, "authorId");
});
z.Fl.prototype.Ji = z.$(181, function() {
  return z.w(this, "authorId");
});
z.bj.prototype.mf = z.$(137, function(a) {
  return z.x(this, "state", a);
});
z.Aj.prototype.mf = z.$(136, function(a) {
  return z.x(this, "state", a);
});
z.Bj.prototype.mf = z.$(135, function(a) {
  return z.x(this, "state", a);
});
z.Rk.prototype.mf = z.$(134, function(a) {
  return z.x(this, "state", a);
});
z.Tk.prototype.mf = z.$(133, function(a) {
  return z.x(this, "state", a);
});
z.Dl.prototype.mf = z.$(132, function(a) {
  return z.x(this, "state", a);
});
z.Fl.prototype.mf = z.$(131, function(a) {
  return z.x(this, "state", a);
});
z.Ui.prototype.Bp = z.$(115, function() {
  return z.w(this, "quoteId");
});
z.Qj.prototype.Bp = z.$(114, function() {
  return z.w(this, "quoteId");
});
z.lm.prototype.Bp = z.$(113, function() {
  return z.w(this, "quoteId");
});
z.bi.prototype.Pc = z.$(112, function() {
  return z.w(this, "replyId");
});
z.Ui.prototype.Pc = z.$(111, function() {
  return z.w(this, "replyId");
});
z.Vi.prototype.Pc = z.$(110, function() {
  return z.w(this, "replyId");
});
z.xj.prototype.Pc = z.$(109, function() {
  return z.w(this, "replyId");
});
z.Bj.prototype.Pc = z.$(108, function() {
  return z.w(this, "replyId");
});
z.Dk.prototype.Pc = z.$(107, function() {
  return z.w(this, "replyId");
});
z.Lk.prototype.Pc = z.$(106, function() {
  return z.w(this, "replyId");
});
z.Fl.prototype.Pc = z.$(105, function() {
  return z.w(this, "replyId");
});
z.Jl.prototype.Pc = z.$(104, function() {
  return z.w(this, "replyId");
});
z.Im.prototype.Pc = z.$(103, function() {
  return z.w(this, "replyId");
});
var L4 = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, H4:!0, FIGURE:!0, LI:!0};
z.p(P4, z.wt);
z.f = P4.prototype;
z.f.load = function() {
  this.rf || (this.rf = z.s(z.q(this.yh.get(z.EW.L({postId:this.sa}), {pa:!0, background:!0}), this.sT, this), z.R));
  return this.rf.yb();
};
z.f.Xh = function() {
  return this.hG;
};
z.f.Ap = function() {
  return this.UH;
};
z.f.Lj = function(a) {
  var b = a && a.getAttribute("name");
  if (!b || !a) {
    return null;
  }
  var c = this.SH[b];
  return c && !this.Xq ? c : this.SH[b] = z.lz(a);
};
z.f.wp = function(a) {
  return this.RG[a] || null;
};
z.f.Bd = function(a, b) {
  return Q4(this, b).sp(a);
};
z.f.kD = function() {
  return Q4(this, "vote");
};
z.f.mK = function() {
  var a = z.O("currentUser.userId");
  return this.kD().find(function(b) {
    return b.Ji() == a;
  });
};
z.f.rt = function(a, b) {
  this.RG[a] = b;
};
z.f.Cy = function(a) {
  a = z.tN(this.wa, a);
  Q4(this, a.Xc()).add(a);
};
z.f.ea = function() {
  return this.sa;
};
z.f.sT = function(a) {
  var b = a.references.User;
  this.Nk = b[a.post.creatorId];
  this.UH = a.post.visibility;
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
        g = Q4(this, g);
        e = z.El(e);
        g.add(z.tN(this.wa, e));
      }
    }
  }
  if (a = a.highlights) {
    for (b = 0;b < a.length;b++) {
      this.rt(a[b].id, z.Oh.gb(z.Hl, a[b]));
    }
  }
  this.hG = !0;
};
z.f.W = function() {
  this.rf.cancel();
  P4.F.W.call(this);
};
var y6 = {Jd:!0, isPublished:!0, media:null, sections:!1, Vi:!1, Fi:!0, bf:!1, Pw:!0};
z.p(Y4, z.Mt);
z.f = Y4.prototype;
z.f.rm = function(a) {
  return a.oc();
};
z.f.Gh = null;
z.f.fm = null;
z.f.rA = null;
z.f.ca = function() {
  return this.Ia;
};
z.f.S = function() {
  Y4.F.S.call(this);
  z.Nt(this, this.Kc, "change", this.qR, this);
  z.Nt(this, this.Kc, "add", this.SR, this);
  z.Nt(this, this.Kc, "remove", this.TR, this);
  Z4(this, !0);
};
z.f.oa = function() {
  this.Ia.innerHTML = "";
  delete this.Ia;
  Y4.F.oa.call(this);
};
z.f.getData = function() {
  return this.Kc;
};
z.f.gq = function(a, b) {
  this.Gh = a;
  this.fm = b;
  this.Xa() && Z4(this);
  return this;
};
z.f.RE = function(a, b) {
  this.rm = a.bind(b);
  Z4(this);
  return this;
};
z.f.SR = function(a, b) {
  if (this.Xa()) {
    for (var c = 0;c < a.length;c++) {
      var d = b.indexOf(a[c]), d = this.Ar(a[c], d);
      this.R("after-draw", a[c], d);
    }
  }
};
z.f.TR = function(a) {
  if (this.Xa()) {
    var b = this.Eo(a);
    this.R("before-clear", a, b);
    this.R("destroy", a, b);
    z.fe(b);
  }
};
z.f.qR = function(a) {
  for (var b = 0;b < a.length;b++) {
    this.bq(a[b]);
  }
};
z.f.$w = function() {
  return this.Kc.cf();
};
z.f.QE = function(a) {
  this.Zq = a;
  return this;
};
z.f.bq = function(a) {
  var b = this.Eo(a);
  this.R("before-clear", a, b);
  b.innerHTML = $4(this, a);
  this.R("after-draw", a, b);
};
z.f.Ar = function(a, b) {
  var c = window.document.createElement("div");
  c.className = this.Zq;
  c.id = this.Rq(a);
  c.innerHTML = $4(this, a);
  z.ee(this.Ia, c, "undefined" != typeof b ? b : this.Ia.children.length);
  return c;
};
z.f.Rq = function(a) {
  var b = a.D(), c = a.C();
  if (!b || !c) {
    throw Error("Unable to generate id " + a);
  }
  return this.dA + b + c;
};
z.f.Eo = function(a) {
  return this.Ia.querySelector("#" + this.Rq(a));
};
a5.prototype.get = function(a) {
  return b5(this, a);
};
z.p(g5, z.SH);
z.f = g5.prototype;
z.f.Py = null;
z.f.NF = null;
z.f.Qy = null;
z.f.bA = null;
z.f.aA = null;
z.f.QG = null;
z.f.cD = function() {
  return z.ZH();
};
z.f.rD = function() {
  return z.$H();
};
z.f.vC = function() {
  return!!this.ub();
};
z.f.Fn = function(a) {
  var b = z.Iq();
  return(new z.Dl({postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, replies:[], highlight:a.highlight || null, highlightId:a.highlightId || null})).by(b).Mn(b.va());
};
z.f.oD = function() {
  return this.ub() ? "put" : "post";
};
z.f.ex = function() {
  return this.ub() ? z.FW.L({postId:this.sa, noteId:this.ub()}) : z.DW.L({postId:this.sa});
};
z.f.pD = function(a) {
  a = {content:a};
  this.Py && (a.anchor = this.Py, a.anchorContent = this.NF, a.anchorImage = this.Qy ? this.Qy.oc() : null);
  null != this.bA && null != this.aA && (a.highlightStart = this.bA, a.highlightEnd = this.aA, a.highlightContent = this.QG);
  return a;
};
z.p(u5, z.Mt);
z.f = u5.prototype;
z.f.SE = function(a) {
  this.De = a;
  Object.keys(a.yv).map(this.Ct, this);
  a = a.xh;
  a.N("add", this.ZI, this);
  a.N("remove", this.ZI, this);
};
z.f.ZI = function(a) {
  Object.keys(u6(this.De, a instanceof Array ? a : [a])).map(this.Ct, this);
};
z.f.Ct = function(a) {
  if (this.Ba.Xh()) {
    var b = a || this.Ba.Ra;
    if (a = this.Be[b]) {
      b = v5(this, b), z.O("variants.enable_quotes") ? (z.Lq(a, l5, b), z.gd(a, "is-withNotes", 0 < b.Ix || 0 < b.Ux)) : (z.Lq(a, m5, b), z.gd(a, "is-withNotes", 0 < b.Ix));
    }
  }
};
z.f.bR = function(a) {
  if (a = e5(this.Uf, a.target)) {
    var b = b5(this.Uf, a), c = this.Be[a];
    !c || c === this.Go || !b || z.ls(b, !1) || z.cd(b, "postField--insetLeftImage") || z.cd(b, "postField--outsetLeftImage") || (this.Go && z.u(this.Go, "is-highlighted"), z.t(c, "is-highlighted"), this.Go = c, z.Le(this.mo), this.mo = new z.JR(b), this.mo.be(c), this.mo.U(), this.mo.we("dismiss", function() {
      z.u(c, "is-highlighted");
      this.Go === c && (this.Go = null);
    }, this));
  }
};
z.f.S = function() {
  u5.F.S.call(this);
  z.Pr() || [this.Uf.Ro].forEach(function(a) {
    this.ua(a, "mouseover", this.bR);
  }, this);
};
z.f.La = function() {
  z.Le(this.mo);
  z.fe(this.sm);
  this.Be = this.sm = null;
  u5.F.La.call(this);
};
z.p(A5, z.SH);
z.f = A5.prototype;
z.f.cD = function() {
  return(0,z.I)("Are you sure you want to delete this reply?");
};
z.f.rD = function() {
  return(0,z.I)("Your reply is too long; do you want to abandon your changes?");
};
z.f.vC = function() {
  return!!this.Ev;
};
z.f.Fn = function(a) {
  var b = z.Iq();
  return(new z.Fl({postId:a.postId, noteId:a.noteId, replyId:a.replyId, content:a.content, createdAt:a.createdAt})).by(b).Mn(b.va());
};
z.f.oD = function() {
  return this.Ev ? "put" : "post";
};
z.f.ex = function() {
  return this.Ev ? z.IW.L({postId:this.sa, noteId:this.ub(), replyId:this.Ev}) : z.HW.L({postId:this.sa, noteId:this.ub()});
};
z.f.pD = function(a) {
  return{content:a};
};
z.p(B5, z.gf);
B5.prototype.kt = function() {
  if (!this.yi) {
    return null;
  }
  var a = D5(this.yi);
  if (!a) {
    return null;
  }
  var b = D5(this.vk);
  return b ? z.Uf(a.la, a.offset, b.la, b.offset) : null;
};
z.p(E5, z.wt);
z.f = E5.prototype;
z.f.Ed = null;
z.f.Pg = null;
z.f.Di = null;
z.f.$h = null;
z.f.Il = 0;
z.f.W = function() {
  H5(this);
  O5(this, null);
  var a = this.post.Bm;
  a && a.ob("change", this.LG, this);
  this.Ur.ob("historyUpdate", this.BH, this);
  this.sH && z.cs(this.sH);
  z.cs(this.vc);
  this.vc.length = 0;
  z.xw(this.dd.sm);
  z.xw(this.ef);
  z.fe(this.ef);
  this.data.tc();
  this.ds && this.ds.cancel();
  z.Le(this.dd);
  z.Le(this.vb);
  this.sH = this.De = this.ds = this.data = this.ef = this.anchors = this.dd = null;
  E5.F.W.call(this);
};
z.f.SE = function(a) {
  this.De = a;
  this.dd.SE(a);
};
z.f.LG = function() {
  if (z.O("variants.enable_recommend_notes") && this.EI.qn() != this.post.qn() && (this.EI = this.post.clone(), !this.post.qn())) {
    var a = this.data.mK();
    a && (J5(this, z.oY, a), this.data.kD().remove(a));
  }
};
z.f.ZD = function() {
};
z.f.bE = function() {
};
z.f.YD = function(a) {
  a.wp() && (this.data.rt(a.Th(), a.wp()), a.rt(null));
  this.data.Cy(a);
  J5(this, z.mY, a);
};
z.f.cE = function() {
};
z.f.LL = function() {
};
z.f.Hj = function() {
};
z.f.fK = function() {
};
z.f.mP = function(a) {
  return a.oc();
};
z.f.FS = function(a) {
  M5(this, a.value);
};
z.f.sS = function(a) {
  (a = this.Uc["reply_" + a.value]) && a.save();
};
z.f.iR = function(a) {
  var b = this.Uc["reply_" + a.value];
  b && z.WH(b);
  (a = z.Ce(a.target, null, "notesItem")) && z.u(a, "is-showingNotesReplyCreator");
};
z.f.DR = function(a) {
  function b() {
    var a = this.data.Bd(d, this.data.Ra);
    this.$h.bq(a);
    z.u(g, "is-notesEditMode");
    z.Le(h);
    delete this.Uc["reply_" + e];
  }
  var c = a.value.split(","), d = c[0], e = c[1], c = z.Ce(a.target, null, "notesItem"), g = z.Ce(a.target, null, "notesReply");
  z.t(g, "is-notesEditMode");
  z.u(c, "is-showingNotesReplyCreator");
  a = g.querySelector(".notesContent");
  var h = new A5(this.ay, a, this.postId, d, e);
  h.N("save", function(a) {
    for (var c = this.data.Bd(d, this.data.Ra), g = J4(c), h = 0;h < g.length;h++) {
      if (g[h].Pc() == e) {
        g[h] = a;
        break;
      }
    }
    J5(this, z.rY, c, {replyId:e});
    b.call(this);
  }, this);
  h.N("delete", function() {
    for (var a = this.data.Bd(d, this.data.Ra), c = J4(a), g = 0;g < c.length;g++) {
      if (c[g].Pc() == e) {
        z.gb(c, g);
        break;
      }
    }
    J5(this, z.sY, a, {replyId:e});
    b.call(this);
  }, this);
  h.N("cancel", function() {
    b.call(this);
  }, this);
  h.N("change", this.Hj, this);
  h.focus(!0);
  this.Uc["reply_" + e] = h;
};
z.f.tR = function(a) {
  (a = this.Uc["reply_" + a.value]) && a.MC();
};
z.f.eR = function(a) {
  a = a.ub();
  this.Uc[a] && (z.Le(this.Uc[a]), delete this.Uc[a]);
  this.Uc["reply_" + a] && (z.Le(this.Uc["reply_" + a]), delete this.Uc["reply_" + a]);
};
z.f.aR = function(a, b) {
  z.u(b, "is-showingNotesReplyCreator");
  b.setAttribute("data-note-id", a.ub());
};
z.f.dR = function(a) {
  z.s(I5(this, this.data.Bd(a.value, this.data.Ra), "PUBLIC"), z.yL(this.hs, (0,z.I)("Sorry, we couldn’t approve the note. Please try again later and make sure you are logged in.")));
};
z.f.NS = function(a) {
  z.s(I5(this, this.data.Bd(a.value, this.data.Ra), "NEW"), z.yL(this.hs, (0,z.I)("Sorry, we couldn’t unapprove the note. Please try again later and make sure you are logged in.")));
};
z.f.CR = function(a) {
  function b() {
    z.u(d, "is-notesEditMode");
    z.Le(g);
    delete this.Uc[c];
  }
  var c = a.value, d = z.Ce(a.target, null, "notesItem");
  z.t(d, "is-notesEditMode");
  z.u(d, "is-showingNotesReplyCreator");
  var e = d.querySelector(".notesContent"), g = new g5(this.ay, e, this.postId, a.value);
  g.N("save", function(a) {
    this.data.Cy(a);
    J5(this, z.nY, a);
    b.call(this);
  }, this);
  g.N("delete", function() {
    var a = Q4(this.data, this.data.Ra), d = a.sp(c);
    J5(this, z.oY, d);
    a.remove(d);
    b.call(this);
  }, this);
  g.N("cancel", function() {
    var a = this.data.Bd(c, this.data.Ra);
    this.$h.bq(a);
    b.call(this);
  }, this);
  g.N("change", this.Hj, this);
  g.focus(!0);
  this.Uc[c] = g;
};
z.f.rS = function(a) {
  (a = K5(this, a)) && a.save();
};
z.f.hR = function(a) {
  (a = K5(this, a)) && z.WH(a);
};
z.f.sR = function(a) {
  (a = K5(this, a)) && a.MC();
};
z.f.aS = function(a) {
  for (var b = 0;b < a.length;b++) {
    this.dd.Ct(a[b].Xc());
  }
};
z.f.MR = function(a) {
  a = a.value;
  this.Pg == a && (this.Pg = null);
  z.s(I5(this, this.data.Bd(a, this.data.Ra), "HIDDEN"), z.yL(this.hs, (0,z.I)("Sorry, we couldn’t hide the note. Please try again later and make sure you are logged in.")));
};
z.f.$R = function(a) {
  a.N("add", this.aS, this);
  a.N("change", this.LL, this);
  a.N("remove", this.bE, this);
};
z.f.J = function(a) {
  return this.ef.querySelector(a);
};
z.f.$n = function() {
  z5(this.dd);
  this.dd.Be[this.data.Ra] || O5(this, null);
};
z.f.PL = function(a) {
  this.UE(a);
};
z.f.UE = function(a) {
  (a = z.Ce(a.target, null, "notesReplies")) && z.u(a, "notesReplies--hidden");
};
z.f.Tr = function() {
  var a = this.data.Ra, b = this.J(".notesItems"), c = Q4(this.data, a), d = this.De ? w5(this.De, a) : [], a = this.J(".js-quotesList"), d = z.Mq(j5, {uE:d});
  z.ge(d, a);
  z.Pr() || z.P(d, "mouseover", this.XP, this);
  this.$h = (new Y4(b, c, q5)).QE("notesItem").RE(this.mP).gq({gl:this.gl, nE:this.data.Nk, Il:this.Il}, "note");
  this.$h.N("before-clear", this.eR, this);
  this.$h.N("after-draw", this.aR, this);
  this.$h.U();
  x5(this.dd, this.data.Ra, !0);
  z.t(this.screen.ma(), "is-notesListVisible");
  z.Gt(z.lY);
};
z.f.XP = function(a) {
  if ((a = z.ns(a.target, function(a) {
    return!!a.getAttribute("data-quote-ids");
  }, a.currentTarget)) && this.IF != a) {
    this.cm && this.cm.OJ();
    var b = this.data.Ra, c = a.getAttribute("data-quote-creator-id");
    this.IF = a;
    this.cm = new z.JR(b5(this.anchors, b), 300);
    this.cm.be(a);
    this.cm.N("dismiss", function() {
      R5(this, b, c, !1);
      z.Le(this.cm);
      this.cm = this.IF = null;
    }, this);
    this.cm.U();
    R5(this, b, c, !0);
  }
};
z.f.JC = function() {
  z.lL(this.Ur, "");
  z.u(this.screen.ma(), "is-notesListVisible");
};
z.f.getSelection = function() {
  var a = z.jg();
  if (!a || a.isCollapsed()) {
    return null;
  }
  var b = z.of(a), c = d5(this.anchors, b);
  if (!c) {
    return null;
  }
  c = (b = z.ns(b, K4, c)) && this.data.Lj(b);
  if (!b) {
    return null;
  }
  var d = z.n0(a, b, !0), e = z.n0(a, b, !1);
  return-1 == d || -1 == e ? null : new O4(a, b, new z.Hl({anchor:b.getAttribute("name"), startIndex:d, endIndex:e, content:c.V().substring(d, e)}));
};
z.f.BH = function() {
  this.yw(S5());
};
U5.prototype.SW = function() {
  return z.DD(this.yi.qu, this.yi.wm, this.vk.qu, this.vk.wm);
};
U5.prototype.TW = function() {
  var a = z.ux(this.mT), b = a.indexOf(this.yi.qu), c = a.indexOf(this.vk.qu);
  if (-1 == b || -1 == c) {
    return "";
  }
  for (var d = [];b <= c;b++) {
    d.push(z.lz(a[b]));
  }
  for (var a = this.yi.wm, c = this.vk.wm, b = new z.by(z.Gq, y6), e = [], g = null, h = 0;h < d.length;h++) {
    var k = d[h].clone(), l = 0 == h ? a : 0, n = h == d.length - 1 ? c : k.V().length;
    z.Bv(k);
    z.av(k, z.lv(l, n, "selection"));
    g && e.push(z.Iy(g, k));
    e.push(z.Jy(k, g));
    e.push(z.Ky(b, k, {xw:!0, Kn:null, isFirst:!1, Rj:!1}));
    g = k;
  }
  g && e.push(z.Iy(g, null));
  return e.join("");
};
z.p(W5, E5);
z.f = W5.prototype;
z.f.Il = 3;
z.f.Ak = !1;
z.f.Cb = null;
z.f.ZD = function() {
  var a = (0,z.Go)();
  this.ds = null;
  this.Ak = !0;
  var b = S5();
  this.$n();
  this.isAuthenticated && z.gd(this.mc, "is-notesCreator", this.data.Nk.userId === this.currentUser.userId);
  z.ve(this.J(".js-notesPostCreator"), this.data.Nk.name);
  this.yw(b);
  this.vc.push(z.P(this.ef, "mouseover", this.nR, this));
  this.vc.push(z.P(this.ef, "mouseout", this.mR, this));
  this.vc.push(z.P(this.mc, "click", this.jR, this));
  this.vc.push(z.P(this.Vr, z.kS, this.RA, this));
  z.Ht("notes.renderMarkers", (0,z.Go)() - a);
};
z.f.yw = function(a) {
  if (a.anchor && this.dd.Be[a.anchor]) {
    if ("highlight" == a.yC) {
      c6(this, a.anchor);
      var b = this.anchors.get(a.anchor), c = a.highlight.startIndex, d = a.highlight.endIndex, e = z.DD(b, c, b, d);
      e && (b = new O4(e, b, new z.Hl({anchor:a.anchor, startIndex:c, endIndex:d, content:e.V()})), $5(this, b));
    } else {
      a.highlight ? (z.q(O5(this, a.anchor), function() {
        b6(this, a.anchor);
      }, this), Q5(this, a.highlight.id, !0), g6(this, a.highlight.id, {scroll:!0, gj:!0}), "reply" == a.yC && M5(this)) : "newNote" == a.yC && c6(this, a.anchor);
    }
  }
};
z.f.YD = function(a) {
  W5.F.YD.call(this, a);
  this.Ed.clear();
  Q5(this, a.ub());
  z.t(this.mc, "is-hidingNotesEditor");
};
z.f.fK = function() {
  var a = {scroll:!0, gj:!0};
  if (this.Ed) {
    a6(this, a), X5(this);
  } else {
    var b = z.yb(this.Uc), c = b && b.ub();
    c && (Q5(this, c), g6(this, c, a), b.focus());
  }
};
z.f.Tr = function() {
  W5.F.Tr.call(this);
  f5(this.anchors, this.ef, this.anchors.get(this.data.Ra));
};
z.f.Hj = function() {
  Z5(this);
  var a = (0,window.parseInt)(this.mc.style.top, 10);
  if (!(0,window.isNaN)(a)) {
    var b = this.data.Ra;
    if (b = b ? this.anchors.get(b) : null) {
      if (b = z.tx(b, d5(this.anchors, b))) {
        var c = Y5(b, !1), b = Y5(b, !0), d = !1, e = z.ss(c);
        a < e && (d = e - a, c.style.paddingTop = z.$g(c).top + d + "px", this.mc.style.top = a + d + "px", z.t(c, "js-is-spacedForNoteList"), d = !0);
        a += this.mc.offsetHeight;
        c = z.ss(b) + b.offsetHeight;
        a > c && (a -= c, b.style.paddingBottom = z.$g(b).bottom + a + "px", z.t(b, "js-is-spacedForNoteList"), d = !0);
        d && (z5(this.dd), this.td.gh());
      }
    }
  }
};
z.f.cE = function(a) {
  z.q(h6(this, a.value), function(a) {
    a && (this.data.Ra && Q4(this.data, this.data.Ra).qb() || ((a = this.getSelection()) && a.highlight.anchor == this.data.Ra ? (N5(this, a.highlight), T5(this, a)) : T5(this, this.data.Ra), this.Ed && X5(this), this.R("show")), d6(this, {scroll:!0, gj:!0}));
  }, this);
};
z.f.bE = function(a) {
  this.dd.Ct(a.Xc());
  a.ub() == this.Pg && N5(this, null);
};
z.f.UE = function(a) {
  z.u(z.Ce(a.target, null, "notesReplies"), "notesReplies--hidden");
  this.Hj();
};
z.f.yS = function(a) {
  if (!this.Xq && !z.Ce(a.target, "A") && (z.Pr() || this.data.Ra)) {
    var b = this.getSelection();
    if (!b || b.Tm != this.data.Ra) {
      if (this.data.Ra && 1E3 >= window.innerWidth) {
        return O5(this, null);
      }
      a = e5(this.anchors, a.target);
      z.q(h6(this, a), function(a) {
        a && (b6(this, this.data.Ra), d6(this, {scroll:!0, gj:!0}));
      }, this);
    }
  }
};
z.f.av = function() {
  this.$n();
};
z.f.xQ = function(a) {
  if (!this.data.Ra) {
    return!1;
  }
  a = a.target;
  return z.Hs(a) ? !0 : !!z.ns(a, function(a) {
    return a == this.mc || a == this.dd.sm || a == this.Cb.ca() || a.getAttribute("data-action") && "zoom" != a.getAttribute("data-action");
  }.bind(this));
};
z.f.vR = function() {
  this.data.Ra && O5(this, null);
};
z.f.CS = function(a) {
  z.lL(this.Ur, a.value);
};
z.f.nR = function(a) {
  i6(this, a, !0);
};
z.f.mR = function(a) {
  i6(this, a, !1);
};
z.f.NH = function() {
  if (!this.Xq) {
    var a = z.jg();
    if (!a || a.isCollapsed()) {
      z.$_(this.Cb);
    } else {
      var b = d5(this.anchors, z.of(a)), c;
      if (c = b) {
        c = z.of(a), c = z.ns(c, K4, b);
      }
      c ? z.Z_(this.Cb, z.o0(a)) : z.$_(this.Cb);
    }
  }
};
z.f.AH = function() {
  z.$_(this.Cb);
  var a = this.getSelection();
  a && $5(this, a);
  return!1;
};
z.f.zH = function() {
  z.$_(this.Cb);
  var a = z.jg();
  if (!a || a.isCollapsed()) {
    return!1;
  }
  var b, c = this.Sd, d = z.Kx(a.eb(), c);
  b = z.Kx(a.Ib(), c);
  if ((b = d && b ? new U5(c, new V5(d, z.n0(a, d, !0)), new V5(b, z.n0(a, b, !1))) : null) && z.O("variants.enable_textshots") && z.O("currentUser").twitterScreenName) {
    var a = this.Nr, c = this.post, e = this.currentUser, g = c.creator || {}, d = b.TW() + String(z.Kq(E4, {post:c})), e = {name:g.name || "", username:g.username || "", twitterScreenName:g.twitterScreenName || "", url:z.uR(c, z.Hq("currentUser.userId"), z.Gq).toString(), content:b.SW().V(), user:e, gF:d};
    if (b = a.Z.open({bodyHtml:z.Kq(F4, e), type:"tweet"}, !0)) {
      g = b.J(".js-tweetEditor-text"), g = new z.FM(g, String(z.Kq(G4)), !0), g.Fa(I4(new z.HD(140, !0), a.CG)), e = z.vR(D4, e, z.Gq), g.ec(e), b.N("submit", a.eJ.bind(a, b, c, d, g));
    }
  } else {
    this.Nr.lq(this.post, a.V(), "highlight", D4);
  }
  return!1;
};
z.f.NR = function(a) {
  a = a.value.split(",");
  var b = a[0], c = a[1];
  z.s(z.q(T4(this.data, c, b), function() {
    for (var a = J4(this.data.Bd(b, this.data.Ra)), e = 0;e < a.length;e++) {
      if (a[e].Pc() == c) {
        z.gb(a, e);
        break;
      }
    }
    J5(this, z.tY, this.data.Bd(b, this.data.Ra), {replyId:c});
    this.qC.U((0,z.I)("The reply has been dismissed."), z.qN);
  }, this), z.yL(this.hs, (0,z.I)("Sorry, we couldn’t hide the reply. Please try again later and make sure you are logged in.")));
};
z.f.jR = function(a) {
  a = a.target;
  var b = z.Ce(a, null, "notesItem");
  if (b) {
    var c = b.getAttribute("data-note-id");
    c == this.Pg ? z.ns(a, function(a) {
      return!!a.getAttribute("data-action") || z.cd(a, "editable");
    }, b, !0) == b && Q5(this, null) : (Q5(this, c), g6(this, c, {scroll:!0, gj:!0}));
  }
};
z.f.ES = function() {
  var a = this.getSelection();
  Q5(this, null);
  a && N5(this, a.highlight);
  T5(this, a || this.data.Ra);
  this.Ed && (a && a6(this, {scroll:!0, gj:!0}), X5(this));
};
z.f.RA = function(a) {
  (a = a.target.getAttribute("name")) && b5(this.anchors, a) && x5(this.dd, a, a == this.data.Ra);
};
z.f.$n = function() {
  if (this.Ak) {
    if (this.Cf) {
      return z.Ws(Error("UpdatePositions called after dispose"));
    }
    W5.F.$n.call(this);
    var a = {scroll:!1, gj:!0};
    this.Pg ? g6(this, this.Pg, a) : d6(this, a);
  }
};
z.f.mY = function() {
  if (this.data.Ra) {
    var a = this.anchors.get(this.data.Ra);
    if (!a) {
      O5(this, null);
    } else {
      if (!this.Xq) {
        var b = z.jg();
        b && (b = z.of(b), z.oe(a, b) || O5(this, null));
      }
    }
  }
};
z.f.W = function() {
  this.Wa.ob("resize-end", this.av, this);
  this.Wa.ob("inner-resize-end", this.av, this);
  this.Cb.ob("update", this.NH, this);
  this.Cb.ob("highlight", this.AH, this);
  this.Cb.ob("twitter", this.zH, this);
  W5.F.W.call(this);
};
z.p(j6, z.He);
j6.prototype.CC = function(a, b, c, d, e, g) {
  return new W5(a.Sa(), b, c, d, e, g);
};
z.p(k6, z.wt);
z.f = k6.prototype;
z.f.nr = 0;
z.f.TA = 0;
z.f.lj = 0;
z.f.qz = 0;
z.f.Wu = 0;
z.f.dH = 0;
z.f.Lm = 0;
z.f.uB = 1;
z.f.Uv = 0;
z.f.Tv = 0;
z.f.oI = 0;
z.f.rh = void 0;
z.f.Va = [];
z.f.rq = function() {
  this.Va.length || (this.Va = [z.P(this.Lb, "touchstart", this.MS, this), z.P(this.Lb, "touchmove", this.QA, this), z.P(this.Lb, "touchend", this.LS, this)]);
};
z.f.MS = function(a) {
  var b = this.Lb.firstChild;
  this.qz = this.lj = 0;
  this.oI = b.offsetWidth * this.Lb.children.length;
  this.rh = void 0;
  this.Uv = this.Lb.offsetWidth;
  this.uB = 1;
  this.dH = -(this.Lb.children.length - 1);
  this.Lm = +new Date;
  this.nr = a.touches[0].pageX;
  this.TA = a.touches[0].pageY;
  z.Gg(this.Lb, "transition-duration", 0);
};
z.f.QA = function(a) {
  1 < a.touches.length || (this.lj = a.touches[0].pageX - this.nr, this.qz = a.touches[0].pageY - this.TA, this.nr = a.touches[0].pageX, this.TA = a.touches[0].pageY, "undefined" == typeof this.rh && (this.rh = Math.abs(this.qz) > Math.abs(this.lj)), this.rh || (this.Wu = this.lj / this.uB + l6(this), a.preventDefault(), this.uB = 0 === this.Tv && 0 < this.lj ? this.nr / this.Uv + 1.25 : this.Tv == this.dH && 0 > this.lj ? Math.abs(this.nr) / this.Uv + 1.25 : 1, z.Gg(this.Lb, "transform", "translate3d(" + 
  this.Wu + "px,0,0)")));
};
z.f.LS = function() {
  if (!this.rh) {
    var a = 1E3 > +new Date - this.Lm && 15 < Math.abs(this.lj) ? 0 > this.lj ? -1 : 1 : 0, b = Math[a ? 0 > this.lj ? "ceil" : "floor" : "round"](l6(this) / (this.oI / this.Lb.children.length)), b = Math.min(b + a, 0), b = Math.max(-(this.Lb.children.length - 1), b);
    m6(this, b, ".2s");
  }
};
z.f.disable = function() {
  z.Gg(this.Lb, "transition-duration", "0");
  z.Gg(this.Lb, "transform", "translate3d(0,0,0)");
  z.cs(this.Va);
  this.Va = [];
};
z.f.enable = k6.prototype.rq;
z.p(n6, E5);
z.f = n6.prototype;
z.f.W = function() {
  this.vH = null;
  this.Lb && (this.Lb.disable(), this.Lb.ob("slide", this.LH, this), this.Lb = null);
  this.Vf && (this.Vf.cancel(), this.Vf = null);
  n6.F.W.call(this);
};
z.f.Tr = function() {
  n6.F.Tr.call(this);
  C4(this.rz, !0);
};
z.f.JC = function() {
  C4(this.rz, !1);
  n6.F.JC.call(this);
};
z.f.ZD = function() {
  this.ds = null;
  var a = (0,z.Go)(), b = S5();
  this.$n();
  this.isAuthenticated && z.gd(this.mc, "is-notesCreator", this.data.Nk.userId === this.currentUser.userId);
  z.ve(this.J(".js-notesPostCreator"), this.data.Nk.name);
  this.yw(b);
  z.Ht("notes.renderMarkers", (0,z.Go)() - a);
};
z.f.yw = function(a) {
  a.anchor && this.dd.Be[a.anchor] && p6(this, a.anchor);
};
z.f.LL = function() {
};
z.f.PL = function(a) {
  this.UE(a);
  z.t(this.Ql, "is-showingNotesReplies");
  this.Lb.disable();
  this.$h.gq({gl:this.gl, nE:this.data.Nk, Il:window.Infinity}, "note");
};
z.f.cE = function(a) {
  a = a.value;
  this.dd.Be[a] && (a == this.data.Ra ? O5(this, null) : p6(this, a));
};
z.f.bE = function(a) {
  this.dd.Ct(a.Xc());
  if (!this.data.Ra || !Q4(this.data, this.data.Ra).qb()) {
    return this.JA();
  }
  m6(this.Lb, 0, "0");
};
z.f.KR = function() {
  o6(this, !0);
};
z.f.yH = function(a) {
  this.data.Ra && !z.oe(this.mc, a.target) && (a.stopPropagation(), this.JA());
};
z.f.LH = function(a) {
  if (a = Q4(this.data, this.data.Ra).gn(a)) {
    Q5(this, a.ub());
    if (!a.Th()) {
      a = a.Xc();
      var b = this.anchors.get(a), b = z.is(b);
      N5(this, new z.Hl({anchor:a, startIndex:0, endIndex:b.length - 1, content:b}), !0);
    }
    o6(this, !0);
  }
};
z.f.JA = function() {
  z.cd(this.Ql, "is-showingNotesReplies") ? z.cd(this.Ql, "is-showingNotesReplies") && (z.t(this.mc.querySelector(".is-activeNote .notesReplies"), "notesReplies--hidden"), z.u(this.Ql, "is-showingNotesReplies"), this.Lb.enable(), m6(this.Lb, 0, "0", !0), o6(this, !1), this.$h.gq({gl:this.gl, nE:this.data.Nk, Il:this.Il}, "note")) : z.q(O5(this, null), function() {
    z.u(this.Ql, "is-showingNotesReplies");
    z.u(this.Ql, "is-newNoteEditorActivated");
    z.u(this.ef, "is-showingNewNoteEditor");
    z.u(this.screen.ma(), "is-notesListVisible");
    C4(this.rz, !1);
    this.Sv && z.fe(this.Sv);
    this.Lb.disable();
    this.$n();
  }, this);
};
z.p(q6, z.He);
q6.prototype.CC = function(a, b, c, d, e) {
  if (e) {
    throw Error("Can not initialize mobile notes with menu");
  }
  return new n6(a.Sa(), b, c, d);
};
z.p(r6, z.He);
z.f = r6.prototype;
z.f.load = function() {
  this.he || (this.he = z.q(this.Ua.cx(this.sa), this.KP, this));
  return this.he.yb();
};
z.f.toggle = function(a, b, c) {
  return z.q(t6(this, a, b, c), function(d) {
    return d && d.va() == z.O("currentUser.userId") ? this.remove(d) : this.create(a, b, c);
  }, this);
};
z.f.create = function(a, b, c) {
  return z.q(this.Gv.post(z.KW.L({postId:this.sa}), {paragraphs:[a.gb().oc()], startOffset:b, endOffset:c}, {pa:!0}), function(a) {
    this.xh.add(z.tN(this.wa, z.Oh.gb(z.lm, a.value)));
  }, this);
};
z.f.remove = function(a) {
  this.xh.remove(a);
  this.wa.remove(a);
  return this.Gv.zd(z.LW.L({postId:this.sa, quoteId:a.Bp()}));
};
z.f.KP = function(a) {
  z.hR(this.wa, a);
  this.xh.ld(a.value || []);
  return this.xh;
};
z.f.YI = function() {
  this.yv = u6(this, this.xh.cf());
};
z.p(v6, z.Mt);
v6.prototype.S = function() {
  v6.F.S.call(this);
  z.Nt(this, this.xc, "quote", this.WP, this);
  z.s(this.De.load(), z.R);
};
v6.prototype.WP = function() {
  var a = z.jg();
  if (a && !a.isCollapsed()) {
    var b = z.CD(a, this.Sd), c = b && z.lz(b);
    if (c) {
      var d = z.n0(a, b, !0), a = z.n0(a, b, !1);
      -1 != d && -1 != a && z.s(this.De.toggle(c, d, a), z.R);
    }
  }
};
v6.prototype.dI = function() {
  var a = new B5(this.Sd), b = this.De.yv, c = Object.keys(b).concat(this.kG);
  z.pb(c);
  c.forEach(function(a) {
    w6(this, a, b[a] || []);
  }, this);
  this.kG = Object.keys(b);
  (a = a.restore()) && a.select();
};
x6.prototype.kW = function(a, b, c) {
  return new v6(this.aa, a, b, c);
};
var z6 = z.MK;
z6.Sa().scope("screen").add("notes", j6).add("notes-mobile", q6).add("quotes", x6);
z.b0(z6, "notes");
})(_mdm);
