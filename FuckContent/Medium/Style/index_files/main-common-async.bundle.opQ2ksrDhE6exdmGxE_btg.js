(function(z){
var T_ = function(a) {
  a.ni && z.fe(a.ni);
  a.ni = null;
  a.Td && a.Td.close();
  a.Td = null;
};
var U_ = function(a, b, c) {
  z.sS.call(this, a);
  this.Do = b;
  this.Td = c;
  this.xa = new z.Gc;
};
var V_ = function(a) {
  z.He.call(this);
  this.aa = a;
  this.Z = a.get("dialog");
  this.xa = z.Nc(new z.Gc, function() {
    this.xa = null;
  }, this);
  this.Uq = !1;
  this.Do = "";
};
var W_ = function(a) {
  z.He.call(this);
  this.aa = a;
  this.xa = new z.Gc;
  a = window.document.createElement("input");
  a.type = "file";
  a.name = "uploadedFile";
  a.value = "";
  a.style.position = "absolute";
  a.style.left = "-9999px";
  a.style.top = "-9999px";
  this.ib = a;
  this.Uq = !1;
};
var X_ = function(a) {
  return(0,z.I)('\x3cdiv class\x3d"ie9-dialog"\x3e\x3cform action\x3d"/_/iframe-upload" method\x3d"post" accept-charset\x3d"utf-8" enctype\x3d"multipart/form-data" target\x3d"' + z.M(a.NW) + '"\x3e\x3cp\x3e\x3cinput type\x3d"file" name\x3d"uploadedFile"\x3e\x3c/p\x3e\x3c/form\x3e\x3cdiv class\x3d"spinnerOverlay"\x3e\x3c/div\x3e\x3c/div\x3e');
};
z.$ = function(a, b) {
  return z.aa[a] = b;
};
z.Y_ = function(a) {
  z.wS(a);
  return a.wh.yb();
};
z.Z_ = function(a, b) {
  a.By.cancel();
  var c = a.Ia;
  z.t(c, "highlightMenu--measure");
  var d = c.offsetWidth, e = b.left + b.width / 2 - d / 2, g = b.top + -6 - c.offsetHeight;
  e + d > window.document.body.clientWidth ? (e -= d / 2, z.id(c, "far-left", "far-right")) : 0 >= e ? (e += d / 2, z.id(c, "far-right", "far-left")) : z.fd(c, ["far-left", "far-right"]);
  z.gd(c, "is-flushTop", 0 > g);
  var g = Math.max(g, 0), d = 0, h = z.ts(c);
  h && (d = z.us(h).top);
  c.style.left = Math.round(e) + "px";
  c.style.top = Math.round(g + d) + "px";
  z.ph(c.offsetHeight);
  z.id(c, "highlightMenu--measure", "highlightMenu--active");
  a.lw = !0;
  a.R("show");
};
z.$_ = function(a) {
  a.lw && (z.fd(a.Ia, ["highlightMenu--active", "highlightMenu--linkMode"]), a.lw = !1, a.R("hide"));
};
z.a0 = function(a, b, c) {
  return a.vw(b, function() {
    return c;
  });
};
z.b0 = function(a, b) {
  var c = a.vb[b];
  if (!c) {
    throw Error('Called finishLoading on "' + b + '", which looks like it was not in the process of loading.');
  }
  z.q(a.xz[b] || z.Uc(!0), function() {
    delete this.vb[b];
    delete this.xz[b];
    this.Bu[b] = !0;
    c.lb(!0);
  }, a);
};
z.c0 = function(a) {
  a.mz || (a.mz = new z.yt(z.O("currentUser")));
  return a.mz;
};
var d0 = function() {
  this.fF = "";
  this.VN = e0;
};
var f0 = function(a) {
  return a instanceof d0 && a.constructor === d0 && a.VN === e0 ? a.fF : "type_error:Const";
};
z.g0 = function(a) {
  return(0,z.I)(z.K(z.Sp(String(a.wordCount))) + " word" + (1 != a.wordCount ? "s" : ""));
};
var h0 = function(a) {
  function b(a) {
    if (z.ea(a)) {
      (0,z.vb)(a, b);
    } else {
      if (!(a instanceof z.Ro)) {
        var g = null;
        a.KK && (g = a.ts());
        a = z.Uo(z.za(a.sx ? a.pn() : String(a)), g);
      }
      d += z.To(a);
      a = a.ts();
      0 == c ? c = a : 0 != a && c != a && (c = null);
    }
  }
  var c = 0, d = "";
  (0,z.vb)(arguments, b);
  return z.Uo(d, c);
};
var i0 = function(a) {
  if (1 == a.nodeType) {
    return z.Pg(a);
  }
  var b = z.ja(a.kK), c = a;
  a.targetTouches && a.targetTouches.length ? c = a.targetTouches[0] : b && a.Xg.targetTouches && a.Xg.targetTouches.length && (c = a.Xg.targetTouches[0]);
  return new z.Ad(c.clientX, c.clientY);
};
z.j0 = function(a, b) {
  var c = a.style[z.Xa(b)];
  return "undefined" !== typeof c ? c : a.style[z.Hg(a, b)] || "";
};
z.k0 = function() {
  return(0,z.I)("The file you tried to upload is a type we don’t understand. Supported image formats are JPEG, PNG, and GIF. Supported audio formats are MP3, MP4, WEBM, and OGG.");
};
z.l0 = function() {
  var a = z.O("variants.max_upload_size_mb");
  return(0,z.I)("The image you are trying to upload is too big. Please resize it so that it is under " + z.H(a) + "MB.");
};
z.m0 = function() {
  return(0,z.I)("Are you sure you want to leave? Unsaved changes may be lost.");
};
z.n0 = function(a, b, c) {
  return z.Fs(z.ih(a, c), b);
};
z.o0 = function(a) {
  a = a.jn().getBoundingClientRect();
  a = z.xs(a);
  if ("mobile safari" == z.O("useragent.browser")) {
    var b = z.vs();
    a.top -= b.top;
    a.left -= b.left;
  }
  return a;
};
z.p0 = function(a) {
  return function(b) {
    b.stopPropagation();
    b.preventDefault();
    return a ? a.call(this, b) : !1;
  };
};
z.q0 = function(a, b) {
  var c = i0(a), d = i0(b);
  return new z.Ad(c.x - d.x, c.y - d.y);
};
z.r0 = function(a, b) {
  z.yH.call(this, a);
  this.Fa(new z.zH);
  this.Fa(new z.fF(b));
  this.Fa(new z.TH(!1));
  this.Fa(new z.AH);
  this.Fa(new z.VH(!1));
  this.yf = !0;
};
z.s0 = function(a) {
  z.ED.call(this);
  this.Cg = a;
};
var t0 = function(a) {
  var b = a.$().ca(), c = a.Cg - z.is(b).length;
  b.setAttribute("data-chars-remaining", String(c));
  z.gd(b, "display-char-count", c <= .25 * a.Cg);
};
z.p(U_, z.sS);
z.f = U_.prototype;
z.f.ni = null;
z.f.W = function() {
  this.xa.md || this.xa.cancel();
  T_(this);
  this.xa = null;
  U_.F.W.call(this);
};
z.f.cF = function() {
  this.Td.N(z.JL, this.kR, this);
  this.ni = window.document.createElement("iframe");
  this.ni.setAttribute("style", "position:absolute;top:-9999px;left:-9999px;");
  this.ni.setAttribute("id", this.Do);
  this.ni.setAttribute("name", this.Do);
  window.document.body.appendChild(this.ni);
  z.P(this.ni, "load", this.kr, this);
  this.Td && (this.Td.J("form").submit(), z.t(this.Td.J(".js-overlayDialog"), "is-uploadingImage"));
  return this.xa.yb();
};
z.f.kR = function() {
  this.xa.md || this.xa.cancel();
  T_(this);
};
z.f.kr = function() {
  var a = z.is(this.ni.contentWindow.document.body);
  a && (this.xa.lb(a), T_(this));
};
z.p(V_, z.He);
V_.prototype.Td = null;
V_.prototype.W = function() {
  this.Td && this.Td.close();
  this.Td = null;
  this.xa && this.xa.cancel();
  this.xa = null;
  V_.F.W.call(this);
};
V_.prototype.Wj = z.m(316);
V_.prototype.HA = function(a) {
  a.preventDefault();
  a = [new U_(this.aa, this.Do, this.Td)];
  this.xa.lb(a);
};
z.p(W_, z.He);
W_.prototype.W = function() {
  this.xa && this.xa.cancel();
  this.xa = null;
  this.ib && (window.document.body.removeChild(this.ib), this.ib = null);
  W_.F.W.call(this);
};
W_.prototype.Wj = z.m(317);
W_.prototype.DH = z.m(318);
z.yS.prototype.Ll = z.$(319, function() {
  return z.q(this.Wj(!0), function(a) {
    return a[0];
  });
});
W_.prototype.DH = z.$(318, function() {
  if (this.ib && this.ib.files && this.ib.files.length) {
    var a = (z.O("variants.upload_multiple_files") ? z.jb(this.ib.files) : [this.ib.files[0]]).map(function(a) {
      return new z.xS(this.aa, a);
    }, this);
    this.xa.lb(a);
  } else {
    this.xa.cancel();
  }
});
W_.prototype.Wj = z.$(317, function(a) {
  if (this.Uq) {
    throw Error("A picker cannot be used more than once.");
  }
  this.Uq = !0;
  z.O("variants.upload_multiple_files") && !a && (this.ib.multiple = !0);
  window.document.body.appendChild(this.ib);
  z.P(this.ib, "change", this.DH, this);
  this.ib.click();
  return z.Nc(this.xa, function() {
    z.Le(this);
  }, this);
});
V_.prototype.Wj = z.$(316, function() {
  if (this.Uq) {
    throw Error("A picker cannot be used more than once.");
  }
  this.Uq = !0;
  this.Do = "ie9_upload_frame_" + Math.floor(1E3 * Math.random());
  if (this.Td = this.Z.open({title:(0,z.I)("Please choose an image"), bodyHtml:X_({NW:this.Do})})) {
    var a = this.Td.J('input[type\x3d"file"]');
    z.P(a, "change", this.HA, this);
  } else {
    this.xa.cancel();
  }
  return z.s(this.xa, function() {
    this.Td && this.Td.close();
    this.Td = null;
  });
});
z.yS.prototype.Wj = z.$(315, function(a) {
  return("FileReader" in window ? new W_(this.aa) : new V_(this.aa)).Wj(a || !z.O("variants.upload_multiple_files"));
});
z.XH.prototype.Wc = z.$(282, function(a, b) {
  (0,z.vb)(this.fc, a, b);
});
z.GM.prototype.Wc = z.$(281, function(a, b) {
  (0,z.vb)(this.Jb, a, b);
});
z.yH.prototype.dh = z.$(275, function() {
  return!1;
});
z.Ko.prototype.pn = z.$(268, function() {
  return this.oE;
});
z.Oo.prototype.pn = z.$(267, function() {
  return this.Zp;
});
z.Ro.prototype.pn = z.$(266, function() {
  return this.Zp;
});
z.Mh.prototype.cc = z.$(90, function() {
  return z.w(this, "username");
});
z.Ph.prototype.cc = z.$(89, function() {
  return z.w(this, "username");
});
z.Qh.prototype.cc = z.$(88, function() {
  return z.w(this, "username");
});
z.fk.prototype.cc = z.$(87, function() {
  return z.w(this, "username");
});
z.hk.prototype.cc = z.$(86, function() {
  return z.w(this, "username");
});
z.lk.prototype.cc = z.$(85, function() {
  return z.w(this, "username");
});
z.Pk.prototype.cc = z.$(84, function() {
  return z.w(this, "username");
});
z.ol.prototype.cc = z.$(83, function() {
  return z.w(this, "username");
});
z.Am.prototype.cc = z.$(82, function() {
  return z.w(this, "username");
});
z.Lm.prototype.cc = z.$(81, function() {
  return z.w(this, "username");
});
z.co.prototype.cc = z.$(80, function() {
  return z.w(this, "username");
});
z.eo.prototype.cc = z.$(79, function() {
  return z.w(this, "username");
});
z.oo.prototype.cc = z.$(78, function() {
  return z.w(this, "username");
});
var e0 = {};
d0.prototype.sx = !0;
d0.prototype.pn = function() {
  return this.fF;
};
d0.prototype.toString = function() {
  return "Const{" + this.fF + "}";
};
var u0 = /^[-.%_!# a-zA-Z0-9]+$/, v0 = /^[a-zA-Z0-9-]+$/;
z.b0(z.MK, "common-async");
z.p(z.r0, z.yH);
z.r0.prototype.Lp = z.IS;
z.w0 = function(a) {
  var b = !1, c;
  return function() {
    b || (c = a(), b = !0);
    return c;
  };
}(function() {
  if (z.ud) {
    return z.qd("10.0");
  }
  var a = window.document.createElement("div"), b = z.xg(), c = {transition:"opacity 1s linear"};
  b && (c[b + "-transition"] = "opacity 1s linear");
  c = {style:c};
  if (!v0.test("div")) {
    throw Error("Invalid tag name \x3cdiv\x3e.");
  }
  if ("div" in z.oX) {
    throw Error("Tag name \x3cdiv\x3e is not allowed for SafeHtml.");
  }
  var d = null, b = "\x3cdiv";
  if (c) {
    for (var e in c) {
      if (!v0.test(e)) {
        throw Error('Invalid attribute name "' + e + '".');
      }
      var g = c[e];
      if (null != g) {
        if (g instanceof d0) {
          g = f0(g);
        } else {
          if ("style" == e.toLowerCase()) {
            if (!z.ka(g)) {
              throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof g + " given: " + g);
            }
            if (!(g instanceof z.Ko)) {
              var h = "", k = void 0;
              for (k in g) {
                if (!/^[-_a-zA-Z0-9]+$/.test(k)) {
                  throw Error("Name allows only [-_a-zA-Z0-9], got: " + k);
                }
                var l = g[k];
                null != l && (l instanceof d0 ? l = f0(l) : u0.test(l) || (l = "zClosurez"), h += k + ":" + l + ";");
              }
              g = h ? z.No(h) : z.mX;
            }
            g = z.Mo(g);
          } else {
            if (/^on/i.test(e)) {
              throw Error('Attribute "' + e + '" requires goog.string.Const value, "' + g + '" given.');
            }
            if (g instanceof z.Oo) {
              g = z.Qo(g);
            } else {
              if (e.toLowerCase() in z.nX) {
                throw Error('Attribute "' + e + '" requires goog.string.Const or goog.html.SafeUrl value, "' + g + '" given.');
              }
            }
          }
        }
        b += " " + e + '\x3d"' + z.za(String(g)) + '"';
      }
    }
  }
  e = void 0;
  z.ba(e) ? z.ea(e) || (e = [e]) : e = [];
  !0 === z.lX.div ? b += "\x3e" : (d = h0(e), b += "\x3e" + z.To(d) + "\x3c/div\x3e", d = d.ts());
  (c = c && c.dir) && (d = /^(ltr|rtl|auto)$/i.test(c) ? 0 : null);
  b = z.Uo(b, d);
  a.innerHTML = z.To(b);
  return "" != z.j0(a.firstChild, "transition");
});
z.p(z.s0, z.ED);
z.s0.prototype.Sb = z.Xb("CharCounterPlugin");
z.s0.prototype.enable = function(a) {
  z.s0.F.enable.call(this, a);
  this.Li().ua(a, z.UC, this.Nz);
};
z.s0.prototype.qd = function(a) {
  z.yq(a) && window.getSelection().isCollapsed && t0(this);
  return!1;
};
z.s0.prototype.Nz = function() {
  t0(this);
};
})(_mdm);
