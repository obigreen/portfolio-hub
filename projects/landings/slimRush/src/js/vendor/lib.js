!(function (a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};
  function p(a, b) {
    b = b || d;
    var c = b.createElement("script");
    (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
  }
  var q = "3.2.1",
    r = function (a, b) {
      return new r.fn.init(a, b);
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function (a, b) {
      return b.toUpperCase();
    };
  (r.fn = r.prototype =
    {
      jquery: q,
      constructor: r,
      length: 0,
      toArray: function () {
        return f.call(this);
      },
      get: function (a) {
        return null == a
          ? f.call(this)
          : a < 0
          ? this[a + this.length]
          : this[a];
      },
      pushStack: function (a) {
        var b = r.merge(this.constructor(), a);
        return (b.prevObject = this), b;
      },
      each: function (a) {
        return r.each(this, a);
      },
      map: function (a) {
        return this.pushStack(
          r.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(f.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (a < 0 ? b : 0);
        return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: h,
      sort: c.sort,
      splice: c.splice,
    }),
    (r.extend = r.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || r.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          h < i;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (r.isPlainObject(d) || (e = Array.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && Array.isArray(c) ? c : []))
                        : (f = c && r.isPlainObject(c) ? c : {}),
                      (g[b] = r.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    r.extend({
      expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === r.type(a);
      },
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        var b = r.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
      },
      isPlainObject: function (a) {
        var b, c;
        return (
          !(!a || "[object Object]" !== k.call(a)) &&
          (!(b = e(a)) ||
            ((c = l.call(b, "constructor") && b.constructor),
            "function" == typeof c && m.call(c) === n))
        );
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? j[k.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        p(a);
      },
      camelCase: function (a) {
        return a.replace(t, "ms-").replace(u, v);
      },
      each: function (a, b) {
        var c,
          d = 0;
        if (w(a)) {
          for (c = a.length; d < c; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(s, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (w(Object(a))
              ? r.merge(c, "string" == typeof a ? [a] : a)
              : h.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : i.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          e,
          f = 0,
          h = [];
        if (w(a))
          for (d = a.length; f < d; f++)
            (e = b(a[f], f, c)), null != e && h.push(e);
        else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
        return g.apply([], h);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e;
        if (
          ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          r.isFunction(a))
        )
          return (
            (d = f.call(arguments, 2)),
            (e = function () {
              return a.apply(b || this, d.concat(f.call(arguments)));
            }),
            (e.guid = a.guid = a.guid || r.guid++),
            e
          );
      },
      now: Date.now,
      support: o,
    }),
    "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return (
      "function" !== c &&
      !r.isWindow(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  var x = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      J =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M =
        "\\[" +
        K +
        "*(" +
        L +
        ")(?:" +
        K +
        "*([*^$|!~]?=)" +
        K +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        L +
        "))|)" +
        K +
        "*\\]",
      N =
        ":(" +
        L +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            K +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            K +
            "*(?:([+-]|)" +
            K +
            "*(\\d+)|))" +
            K +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            K +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            K +
            "*((?:-\\d)?\\d*)" +
            K +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : d < 0
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function (a, b) {
        return b
          ? "\0" === a
            ? "\ufffd"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a;
      },
      da = function () {
        m();
      },
      ea = ta(
        function (a) {
          return a.disabled === !0 && ("form" in a || "label" in a);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      G.apply((D = H.call(v.childNodes)), v.childNodes),
        D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = {
        apply: D.length
          ? function (a, b) {
              F.apply(a, H.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== w && (l = Z.exec(a)))
          if ((f = l[1])) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = l[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return G.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) (s = b), (r = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(ba, ca))
              : b.setAttribute("id", (k = u)),
              (o = g(a)),
              (h = o.length);
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            (r = o.join(",")), (s = ($.test(a) && qa(b.parentNode)) || b);
          }
          if (r)
            try {
              return G.apply(d, s.querySelectorAll(r)), d;
            } catch (x) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(P, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return function (b) {
        return "form" in b
          ? b.parentNode && b.disabled === !1
            ? "label" in b
              ? "label" in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (b.isDisabled !== !a && ea(b) === a)
            : b.disabled === a
          : "label" in b && b.disabled === a;
      };
    }
    function pa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return !!b && "HTML" !== b.nodeName;
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              v !== n &&
                (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener("unload", da, !1)
                  : e.attachEvent && e.attachEvent("onunload", da)),
              (c.attributes = ja(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ja(function (a) {
                return (
                  a.appendChild(n.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = Y.test(n.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }),
                  (d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c ? [c] : [];
                    }
                  }))
                : ((d.filter.ID = function (a) {
                    var b = a.replace(_, aa);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  }),
                  (d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c,
                        d,
                        e,
                        f = b.getElementById(a);
                      if (f) {
                        if (
                          ((c = f.getAttributeNode("id")), c && c.value === a)
                        )
                          return [f];
                        (e = b.getElementsByName(a)), (d = 0);
                        while ((f = e[d++]))
                          if (
                            ((c = f.getAttributeNode("id")), c && c.value === a)
                          )
                            return [f];
                      }
                      return [];
                    }
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  if ("undefined" != typeof b.getElementsByClassName && p)
                    return b.getElementsByClassName(a);
                }),
              (r = []),
              (q = []),
              (c.qsa = Y.test(n.querySelectorAll)) &&
                (ja(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + K + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + K + "*(?:value|" + J + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ja(function (a) {
                  a.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var b = n.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + K + "*[*^$|!~]?="),
                    2 !== a.querySelectorAll(":enabled").length &&
                      q.push(":enabled", ":disabled"),
                    (o.appendChild(a).disabled = !0),
                    2 !== a.querySelectorAll(":disabled").length &&
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = Y.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  (c.disconnectedMatch = s.call(a, "*")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", N);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = Y.test(o.compareDocumentPosition)),
              (t =
                b || Y.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? I(k, a) - I(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b];
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? I(k, a) - I(k, b)
                        : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while ((c = c.parentNode)) g.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) h.unshift(c);
                    while (g[d] === h[d]) d++;
                    return d
                      ? la(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0;
                  }),
              n)
            : n;
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(S, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.escape = function (a) {
        return (a + "").replace(ba, ca);
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(_, aa)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return V.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      T.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(_, aa).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a);
                return null == e
                  ? "!=" === b
                  : !b ||
                      ((e += ""),
                      "=" === b
                        ? e === c
                        : "!=" === b
                        ? e !== c
                        : "^=" === b
                        ? c && 0 === e.indexOf(c)
                        : "*=" === b
                        ? c && e.indexOf(c) > -1
                        : "$=" === b
                        ? c && e.slice(-c.length) === c
                        : "~=" === b
                        ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1
                        : "|=" === b &&
                          (e === c || e.slice(0, c.length + 1) === c + "-"));
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1;
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b;
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n]);
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break;
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ga.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = I(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(P, "$1"));
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0;
              };
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(_, aa)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ia(function (a) {
              return (
                U.test(a || "") || ga.error("unsupported lang: " + a),
                (a = a.replace(_, aa).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: oa(!1),
            disabled: oa(!0),
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return X.test(a.nodeName);
            },
            input: function (a) {
              return W.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: pa(function () {
              return [0];
            }),
            last: pa(function (a, b) {
              return [b - 1];
            }),
            eq: pa(function (a, b, c) {
              return [c < 0 ? c + b : c];
            }),
            even: pa(function (a, b) {
              for (var c = 0; c < b; c += 2) a.push(c);
              return a;
            }),
            odd: pa(function (a, b) {
              for (var c = 1; c < b; c += 2) a.push(c);
              return a;
            }),
            lt: pa(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: pa(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function ra() {}
    (ra.prototype = d.filters = d.pseudos),
      (d.setFilters = new ra()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (c && !(e = Q.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = R.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(P, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = V[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        });
    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d;
    }
    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first
        ? function (b, c, e) {
            while ((b = b[d])) if (1 === b.nodeType || g) return a(b, c, e);
            return !1;
          }
        : function (b, c, i) {
            var j,
              k,
              l,
              m = [w, h];
            if (i) {
              while ((b = b[d]))
                if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || g)
                  if (
                    ((l = b[u] || (b[u] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b;
                  else {
                    if ((j = k[f]) && j[0] === w && j[1] === h)
                      return (m[2] = j[2]);
                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                  }
            return !1;
          };
    }
    function ua(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
      return c;
    }
    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function xa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = xa(d)),
        e && !e[u] && (e = xa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : wa(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = wa(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? I(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
        })
      );
    }
    function ya(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ta(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ta(
            function (a) {
              return I(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        i < f;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
            return xa(
              i > 1 && ua(m),
              i > 1 &&
                sa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(P, "$1"),
              c,
              i < e && ya(a.slice(i, e)),
              e < f && ya((a = a.slice(e))),
              e < f && sa(a)
            );
          }
          m.push(c);
        }
      return ua(m);
    }
    function za(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
              u = wa(u);
            }
            G.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, za(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ga.select =
        function (a, b, c, e) {
          var f,
            i,
            j,
            k,
            l,
            m = "function" == typeof a && a,
            n = !e && g((a = m.selector || a));
          if (((c = c || []), 1 === n.length)) {
            if (
              ((i = n[0] = n[0].slice(0)),
              i.length > 2 &&
                "ID" === (j = i[0]).type &&
                9 === b.nodeType &&
                p &&
                d.relative[i[1].type])
            ) {
              if (
                ((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0]), !b)
              )
                return c;
              m && (b = b.parentNode), (a = a.slice(i.shift().value.length));
            }
            f = V.needsContext.test(a) ? 0 : i.length;
            while (f--) {
              if (((j = i[f]), d.relative[(k = j.type)])) break;
              if (
                (l = d.find[k]) &&
                (e = l(
                  j.matches[0].replace(_, aa),
                  ($.test(i[0].type) && qa(b.parentNode)) || b
                ))
              ) {
                if ((i.splice(f, 1), (a = e.length && sa(i)), !a))
                  return G.apply(c, e), c;
                break;
              }
            }
          }
          return (
            (m || h(a, n))(
              e,
              b,
              !p,
              c,
              !b || ($.test(a) && qa(b.parentNode)) || b
            ),
            c
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(J, function (a, b, c) {
          var d;
          if (!c)
            return a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
        }),
      ga
    );
  })(a);
  (r.find = x),
    (r.expr = x.selectors),
    (r.expr[":"] = r.expr.pseudos),
    (r.uniqueSort = r.unique = x.uniqueSort),
    (r.text = x.getText),
    (r.isXMLDoc = x.isXML),
    (r.contains = x.contains),
    (r.escapeSelector = x.escape);
  var y = function (a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && r(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    z = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    A = r.expr.match.needsContext;
  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function E(a, b, c) {
    return r.isFunction(b)
      ? r.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c;
        })
      : b.nodeType
      ? r.grep(a, function (a) {
          return (a === b) !== c;
        })
      : "string" != typeof b
      ? r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c;
        })
      : D.test(b)
      ? r.filter(b, a, c)
      : ((b = r.filter(b, a)),
        r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        }));
  }
  (r.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? r.find.matchesSelector(d, a)
          ? [d]
          : []
        : r.find.matches(
            a,
            r.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    r.fn.extend({
      find: function (a) {
        var b,
          c,
          d = this.length,
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            r(a).filter(function () {
              for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
            })
          );
        for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
        return d > 1 ? r.uniqueSort(c) : c;
      },
      filter: function (a) {
        return this.pushStack(E(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(E(this, a || [], !0));
      },
      is: function (a) {
        return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1)
          .length;
      },
    });
  var F,
    G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = (r.fn.init = function (a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || F), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : G.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof r ? b[0] : b),
            r.merge(
              this,
              r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            C.test(e[1]) && r.isPlainObject(b))
          )
            for (e in b)
              r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && ((this[0] = f), (this.length = 1)),
          this
        );
      }
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : r.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(r)
        : r.makeArray(a, this);
    });
  (H.prototype = r.fn), (F = r(d));
  var I = /^(?:parents|prev(?:Until|All))/,
    J = { children: !0, contents: !0, next: !0, prev: !0 };
  r.fn.extend({
    has: function (a) {
      var b = r(a, this),
        c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
      });
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && r(a);
      if (!A.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && r.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    },
    index: function (a) {
      return a
        ? "string" == typeof a
          ? i.call(r(a), this[0])
          : i.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    },
  });
  function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  r.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return y(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return y(a, "parentNode", c);
      },
      next: function (a) {
        return K(a, "nextSibling");
      },
      prev: function (a) {
        return K(a, "previousSibling");
      },
      nextAll: function (a) {
        return y(a, "nextSibling");
      },
      prevAll: function (a) {
        return y(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return y(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return y(a, "previousSibling", c);
      },
      siblings: function (a) {
        return z((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return z(a.firstChild);
      },
      contents: function (a) {
        return B(a, "iframe")
          ? a.contentDocument
          : (B(a, "template") && (a = a.content || a),
            r.merge([], a.childNodes));
      },
    },
    function (a, b) {
      r.fn[a] = function (c, d) {
        var e = r.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = r.filter(d, e)),
          this.length > 1 &&
            (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var L = /[^\x20\t\r\n\f]+/g;
  function M(a) {
    var b = {};
    return (
      r.each(a.match(L) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                r.each(b, function (b, c) {
                  r.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== r.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function () {
          return (
            r.each(arguments, function (a, b) {
              var c;
              while ((c = r.inArray(b, f, c)) > -1)
                f.splice(c, 1), c <= h && h--;
            }),
            this
          );
        },
        has: function (a) {
          return a ? r.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function () {
          return f && (f = []), this;
        },
        disable: function () {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (e = g = []), c || b || (f = c = ""), this;
        },
        locked: function () {
          return !!e;
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function () {
          return j.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return j;
  };
  function N(a) {
    return a;
  }
  function O(a) {
    throw a;
  }
  function P(a, b, c, d) {
    var e;
    try {
      a && r.isFunction((e = a.promise))
        ? e.call(a).done(b).fail(c)
        : a && r.isFunction((e = a.then))
        ? e.call(a, b, c)
        : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }
  r.extend({
    Deferred: function (b) {
      var c = [
          [
            "notify",
            "progress",
            r.Callbacks("memory"),
            r.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        d = "pending",
        e = {
          state: function () {
            return d;
          },
          always: function () {
            return f.done(arguments).fail(arguments), this;
          },
          catch: function (a) {
            return e.then(null, a);
          },
          pipe: function () {
            var a = arguments;
            return r
              .Deferred(function (b) {
                r.each(c, function (c, d) {
                  var e = r.isFunction(a[d[4]]) && a[d[4]];
                  f[d[1]](function () {
                    var a = e && e.apply(this, arguments);
                    a && r.isFunction(a.promise)
                      ? a
                          .promise()
                          .progress(b.notify)
                          .done(b.resolve)
                          .fail(b.reject)
                      : b[d[0] + "With"](this, e ? [a] : arguments);
                  });
                }),
                  (a = null);
              })
              .promise();
          },
          then: function (b, d, e) {
            var f = 0;
            function g(b, c, d, e) {
              return function () {
                var h = this,
                  i = arguments,
                  j = function () {
                    var a, j;
                    if (!(b < f)) {
                      if (((a = d.apply(h, i)), a === c.promise()))
                        throw new TypeError("Thenable self-resolution");
                      (j =
                        a &&
                        ("object" == typeof a || "function" == typeof a) &&
                        a.then),
                        r.isFunction(j)
                          ? e
                            ? j.call(a, g(f, c, N, e), g(f, c, O, e))
                            : (f++,
                              j.call(
                                a,
                                g(f, c, N, e),
                                g(f, c, O, e),
                                g(f, c, N, c.notifyWith)
                              ))
                          : (d !== N && ((h = void 0), (i = [a])),
                            (e || c.resolveWith)(h, i));
                    }
                  },
                  k = e
                    ? j
                    : function () {
                        try {
                          j();
                        } catch (a) {
                          r.Deferred.exceptionHook &&
                            r.Deferred.exceptionHook(a, k.stackTrace),
                            b + 1 >= f &&
                              (d !== O && ((h = void 0), (i = [a])),
                              c.rejectWith(h, i));
                        }
                      };
                b
                  ? k()
                  : (r.Deferred.getStackHook &&
                      (k.stackTrace = r.Deferred.getStackHook()),
                    a.setTimeout(k));
              };
            }
            return r
              .Deferred(function (a) {
                c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)),
                  c[1][3].add(g(0, a, r.isFunction(b) ? b : N)),
                  c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
              })
              .promise();
          },
          promise: function (a) {
            return null != a ? r.extend(a, e) : e;
          },
        },
        f = {};
      return (
        r.each(c, function (a, b) {
          var g = b[2],
            h = b[5];
          (e[b[1]] = g.add),
            h &&
              g.add(
                function () {
                  d = h;
                },
                c[3 - a][2].disable,
                c[0][2].lock
              ),
            g.add(b[3].fire),
            (f[b[0]] = function () {
              return (
                f[b[0] + "With"](this === f ? void 0 : this, arguments), this
              );
            }),
            (f[b[0] + "With"] = g.fireWith);
        }),
        e.promise(f),
        b && b.call(f, f),
        f
      );
    },
    when: function (a) {
      var b = arguments.length,
        c = b,
        d = Array(c),
        e = f.call(arguments),
        g = r.Deferred(),
        h = function (a) {
          return function (c) {
            (d[a] = this),
              (e[a] = arguments.length > 1 ? f.call(arguments) : c),
              --b || g.resolveWith(d, e);
          };
        };
      if (
        b <= 1 &&
        (P(a, g.done(h(c)).resolve, g.reject, !b),
        "pending" === g.state() || r.isFunction(e[c] && e[c].then))
      )
        return g.then();
      while (c--) P(e[c], h(c), g.reject);
      return g.promise();
    },
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (r.Deferred.exceptionHook = function (b, c) {
    a.console &&
      a.console.warn &&
      b &&
      Q.test(b.name) &&
      a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }),
    (r.readyException = function (b) {
      a.setTimeout(function () {
        throw b;
      });
    });
  var R = r.Deferred();
  (r.fn.ready = function (a) {
    return (
      R.then(a)["catch"](function (a) {
        r.readyException(a);
      }),
      this
    );
  }),
    r.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (a) {
        (a === !0 ? --r.readyWait : r.isReady) ||
          ((r.isReady = !0),
          (a !== !0 && --r.readyWait > 0) || R.resolveWith(d, [r]));
      },
    }),
    (r.ready.then = R.then);
  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S),
      r.ready();
  }
  "complete" === d.readyState ||
  ("loading" !== d.readyState && !d.documentElement.doScroll)
    ? a.setTimeout(r.ready)
    : (d.addEventListener("DOMContentLoaded", S),
      a.addEventListener("load", S));
  var T = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        r.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(r(a), c);
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    U = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function V() {
    this.expando = r.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (a) {
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            U(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0,
                  }))),
          b
        );
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[r.camelCase(b)] = c;
        else for (d in b) e[r.camelCase(d)] = b[d];
        return e;
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][r.camelCase(b)];
      },
      access: function (a, b, c) {
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? this.get(a, b)
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d = a[this.expando];
        if (void 0 !== d) {
          if (void 0 !== b) {
            Array.isArray(b)
              ? (b = b.map(r.camelCase))
              : ((b = r.camelCase(b)), (b = b in d ? [b] : b.match(L) || [])),
              (c = b.length);
            while (c--) delete d[b[c]];
          }
          (void 0 === b || r.isEmptyObject(d)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function (a) {
        var b = a[this.expando];
        return void 0 !== b && !r.isEmptyObject(b);
      },
    });
  var W = new V(),
    X = new V(),
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function $(a) {
    return (
      "true" === a ||
      ("false" !== a &&
        ("null" === a
          ? null
          : a === +a + ""
          ? +a
          : Y.test(a)
          ? JSON.parse(a)
          : a))
    );
  }
  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Z, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c = $(c);
        } catch (e) {}
        X.set(a, b, c);
      } else c = void 0;
    return c;
  }
  r.extend({
    hasData: function (a) {
      return X.hasData(a) || W.hasData(a);
    },
    data: function (a, b, c) {
      return X.access(a, b, c);
    },
    removeData: function (a, b) {
      X.remove(a, b);
    },
    _data: function (a, b, c) {
      return W.access(a, b, c);
    },
    _removeData: function (a, b) {
      W.remove(a, b);
    },
  }),
    r.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = X.get(f)), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = r.camelCase(d.slice(5))), _(f, d, e[d])));
            W.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              X.set(this, a);
            })
          : T(
              this,
              function (b) {
                var c;
                if (f && void 0 === b) {
                  if (((c = X.get(f, a)), void 0 !== c)) return c;
                  if (((c = _(f, a)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    X.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          X.remove(this, a);
        });
      },
    }),
    r.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = W.get(a, b)),
            c &&
              (!d || Array.isArray(c)
                ? (d = W.access(a, b, r.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function () {
            r.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          W.get(a, c) ||
          W.access(a, c, {
            empty: r.Callbacks("once memory").add(function () {
              W.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    r.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? r.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          r.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = W.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function (a, b) {
      return (
        (a = b || a),
        "none" === a.style.display ||
          ("" === a.style.display &&
            r.contains(a.ownerDocument, a) &&
            "none" === r.css(a, "display"))
      );
    },
    ea = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    };
  function fa(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur();
          }
        : function () {
            return r.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
      k = (r.cssNumber[b] || ("px" !== j && +i)) && ba.exec(r.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), r.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var ga = {};
  function ha(a) {
    var b,
      c = a.ownerDocument,
      d = a.nodeName,
      e = ga[d];
    return e
      ? e
      : ((b = c.body.appendChild(c.createElement(d))),
        (e = r.css(b, "display")),
        b.parentNode.removeChild(b),
        "none" === e && (e = "block"),
        (ga[d] = e),
        e);
  }
  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (d = a[f]),
        d.style &&
          ((c = d.style.display),
          b
            ? ("none" === c &&
                ((e[f] = W.get(d, "display") || null),
                e[f] || (d.style.display = "")),
              "" === d.style.display && da(d) && (e[f] = ha(d)))
            : "none" !== c && ((e[f] = "none"), W.set(d, "display", c)));
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
    return a;
  }
  r.fn.extend({
    show: function () {
      return ia(this, !0);
    },
    hide: function () {
      return ia(this);
    },
    toggle: function (a) {
      return "boolean" == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function () {
            da(this) ? r(this).show() : r(this).hide();
          });
    },
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ma.optgroup = ma.option),
    (ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead),
    (ma.th = ma.td);
  function na(a, b) {
    var c;
    return (
      (c =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
          ? a.querySelectorAll(b || "*")
          : []),
      void 0 === b || (b && B(a, b)) ? r.merge([a], c) : c
    );
  }
  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
  }
  var pa = /<|&#?\w+;/;
  function qa(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        n = 0,
        o = a.length;
      n < o;
      n++
    )
      if (((f = a[n]), f || 0 === f))
        if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
        else if (pa.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (ka.exec(f) || ["", ""])[1].toLowerCase()),
            (i = ma[h] || ma._default),
            (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          r.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (n = 0);
    while ((f = m[n++]))
      if (d && r.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = r.contains(f.ownerDocument, f)),
        (g = na(l.appendChild(f), "script")),
        j && oa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) la.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;
  function va() {
    return !0;
  }
  function wa() {
    return !1;
  }
  function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ya(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = wa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return r().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = r.guid++))),
      a.each(function () {
        r.event.add(this, b, e, d, c);
      })
    );
  }
  (r.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.get(a);
      if (q) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          e && r.find.matchesSelector(ra, e),
          c.guid || (c.guid = r.guid++),
          (i = q.events) || (i = q.events = {}),
          (g = q.handle) ||
            (g = q.handle =
              function (b) {
                return "undefined" != typeof r && r.event.triggered !== b.type
                  ? r.event.dispatch.apply(a, arguments)
                  : void 0;
              }),
          (b = (b || "").match(L) || [""]),
          (j = b.length);
        while (j--)
          (h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = r.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = r.event.special[n] || {}),
              (k = r.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && r.expr.match.needsContext.test(e),
                  namespace: o.join("."),
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (r.event.global[n] = !0));
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.hasData(a) && W.get(a);
      if (q && (i = q.events)) {
        (b = (b || "").match(L) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            (l = r.event.special[n] || {}),
              (n = (d ? l.delegateType : l.bindType) || n),
              (m = i[n] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                r.removeEvent(a, n, q.handle),
              delete i[n]);
          } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    },
    dispatch: function (a) {
      var b = r.event.fix(a),
        c,
        d,
        e,
        f,
        g,
        h,
        i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (
        ((b.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, b) !== !1)
      ) {
        (h = r.event.handlers.call(this, b, j)), (c = 0);
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          (b.currentTarget = f.elem), (d = 0);
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
            (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
              ((b.handleObj = g),
              (b.data = g.data),
              (e = (
                (r.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (b.result = e) === !1 &&
                (b.preventDefault(), b.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++)
              (d = b[c]),
                (e = d.selector + " "),
                void 0 === g[e] &&
                  (g[e] = d.needsContext
                    ? r(e, this).index(j) > -1
                    : r.find(e, this, null, [j]).length),
                g[e] && f.push(d);
            f.length && h.push({ elem: j, handlers: f });
          }
      return (
        (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
      );
    },
    addProp: function (a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b)
          ? function () {
              if (this.originalEvent) return b(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[a];
            },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b,
          });
        },
      });
    },
    fix: function (a) {
      return a[r.expando] ? a : new r.Event(a);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== xa() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === xa() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && B(this, "input"))
            return this.click(), !1;
        },
        _default: function (a) {
          return B(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
  }),
    (r.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (r.Event = function (a, b) {
      return this instanceof r.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? va
                  : wa),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          b && r.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || r.now()),
          void (this[r.expando] = !0))
        : new r.Event(a, b);
    }),
    (r.Event.prototype = {
      constructor: r.Event,
      isDefaultPrevented: wa,
      isPropagationStopped: wa,
      isImmediatePropagationStopped: wa,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = va),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = va),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = va),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    r.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button;
          return null == a.which && sa.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && ta.test(a.type)
            ? 1 & b
              ? 1
              : 2 & b
              ? 3
              : 4 & b
              ? 2
              : 0
            : a.which;
        },
      },
      r.event.addProp
    ),
    r.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        r.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || r.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    r.fn.extend({
      on: function (a, b, c, d) {
        return ya(this, a, b, c, d);
      },
      one: function (a, b, c, d) {
        return ya(this, a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            r(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = wa),
          this.each(function () {
            r.event.remove(this, a, c, b);
          })
        );
      },
    });
  var za =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? r(">tbody", a)[0] || a
      : a;
  }
  function Fa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function Ga(a) {
    var b = Ca.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        W.hasData(a) &&
        ((f = W.access(a)), (g = W.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
      }
      X.hasData(a) && ((h = X.access(a)), (i = r.extend({}, h)), X.set(b, i));
    }
  }
  function Ia(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ja.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e,
      f,
      h,
      i,
      j,
      k,
      l = 0,
      m = a.length,
      n = m - 1,
      q = b[0],
      s = r.isFunction(q);
    if (s || (m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)))
      return a.each(function (e) {
        var f = a.eq(e);
        s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
      });
    if (
      m &&
      ((e = qa(b, a[0].ownerDocument, !1, a, d)),
      (f = e.firstChild),
      1 === e.childNodes.length && (e = f),
      f || d)
    ) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)
        (j = e),
          l !== n &&
            ((j = r.clone(j, !0, !0)), i && r.merge(h, na(j, "script"))),
          c.call(a[l], j, l);
      if (i)
        for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)
          (j = h[l]),
            la.test(j.type || "") &&
              !W.access(j, "globalEval") &&
              r.contains(k, j) &&
              (j.src
                ? r._evalUrl && r._evalUrl(j.src)
                : p(j.textContent.replace(Da, ""), k));
    }
    return a;
  }
  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || r.cleanData(na(d)),
        d.parentNode &&
          (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  r.extend({
    htmlPrefilter: function (a) {
      return a.replace(za, "<$1></$2>");
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = r.contains(a.ownerDocument, a);
      if (
        !(
          o.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          r.isXMLDoc(a)
        )
      )
        for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)
          Ia(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)
            Ha(f[d], g[d]);
        else Ha(a, h);
      return (
        (g = na(h, "script")), g.length > 0 && oa(g, !i && na(a, "script")), h
      );
    },
    cleanData: function (a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if ((b = c[W.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0;
          }
          c[X.expando] && (c[X.expando] = void 0);
        }
    },
  }),
    r.fn.extend({
      detach: function (a) {
        return Ka(this, a, !0);
      },
      remove: function (a) {
        return Ka(this, a);
      },
      text: function (a) {
        return T(
          this,
          function (a) {
            return void 0 === a
              ? r.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return Ja(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return Ja(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (r.cleanData(na(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return r.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return T(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !Aa.test(a) &&
              !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = r.htmlPrefilter(a);
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (r.cleanData(na(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = [];
        return Ja(
          this,
          arguments,
          function (b) {
            var c = this.parentNode;
            r.inArray(this, a) < 0 &&
              (r.cleanData(na(this)), c && c.replaceChild(b, this));
          },
          a
        );
      },
    }),
    r.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        r.fn[a] = function (a) {
          for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
            (c = g === f ? this : this.clone(!0)),
              r(e[g])[b](c),
              h.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function (b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    };
  !(function () {
    function b() {
      if (i) {
        (i.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (i.innerHTML = ""),
          ra.appendChild(h);
        var b = a.getComputedStyle(i);
        (c = "1%" !== b.top),
          (g = "2px" === b.marginLeft),
          (e = "4px" === b.width),
          (i.style.marginRight = "50%"),
          (f = "4px" === b.marginRight),
          ra.removeChild(h),
          (i = null);
      }
    }
    var c,
      e,
      f,
      g,
      h = d.createElement("div"),
      i = d.createElement("div");
    i.style &&
      ((i.style.backgroundClip = "content-box"),
      (i.cloneNode(!0).style.backgroundClip = ""),
      (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
      (h.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      h.appendChild(i),
      r.extend(o, {
        pixelPosition: function () {
          return b(), c;
        },
        boxSizingReliable: function () {
          return b(), e;
        },
        pixelMarginRight: function () {
          return b(), f;
        },
        reliableMarginLeft: function () {
          return b(), g;
        },
      }));
  })();
  function Oa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Na(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
        !o.pixelMarginRight() &&
          Ma.test(g) &&
          La.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function Pa(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = { position: "absolute", visibility: "hidden", display: "block" },
    Ta = { letterSpacing: "0", fontWeight: "400" },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;
  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--) if (((a = Ua[c] + b), a in Va)) return a;
  }
  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }
  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Za(a, b, c, d, e) {
    var f,
      g = 0;
    for (
      f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
      f < 4;
      f += 2
    )
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
        d
          ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)),
            "margin" !== c &&
              (g -= r.css(a, "border" + ca[f] + "Width", !0, e)))
          : ((g += r.css(a, "padding" + ca[f], !0, e)),
            "padding" !== c &&
              (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    return g;
  }
  function $a(a, b, c) {
    var d,
      e = Na(a),
      f = Oa(a, b, e),
      g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f)
      ? f
      : ((d = g && (o.boxSizingReliable() || f === a.style[b])),
        "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
        (f = parseFloat(f) || 0),
        f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Oa(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b),
          j = a.style;
        return (
          i || (b = Xa(h)),
          (g = r.cssHooks[b] || r.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : j[b]
            : ((f = typeof c),
              "string" === f &&
                (e = ba.exec(c)) &&
                e[1] &&
                ((c = fa(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (r.cssNumber[h] ? "" : "px")),
                o.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (j[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i ? j.setProperty(b, c) : (j[b] = c))),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = r.camelCase(b),
        i = Ra.test(b);
      return (
        i || (b = Xa(h)),
        (g = r.cssHooks[b] || r.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Oa(a, b, d)),
        "normal" === e && b in Ta && (e = Ta[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    },
  }),
    r.each(["height", "width"], function (a, b) {
      r.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return !Qa.test(r.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? $a(a, b, d)
              : ea(a, Sa, function () {
                  return $a(a, b, d);
                });
        },
        set: function (a, c, d) {
          var e,
            f = d && Na(a),
            g =
              d &&
              Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = ba.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = r.css(a, b))),
            Ya(a, c, g)
          );
        },
      };
    }),
    (r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(Oa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              ea(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (r.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            d < 4;
            d++
          )
            e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        La.test(a) || (r.cssHooks[a + b].set = Ya);
    }),
    r.fn.extend({
      css: function (a, b) {
        return T(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (Array.isArray(b)) {
              for (d = Na(a), e = b.length; g < e; g++)
                f[b[g]] = r.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
    });
  function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }
  (r.Tween = _a),
    (_a.prototype = {
      constructor: _a,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || r.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (r.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = _a.propHooks[this.prop];
        return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = _a.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                r.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : _a.propHooks._default.set(this),
          this
        );
      },
    }),
    (_a.prototype.init.prototype = _a.prototype),
    (_a.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = r.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function (a) {
          r.fx.step[a.prop]
            ? r.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : r.style(a.elem, a.prop, a.now + a.unit);
        },
      },
    }),
    (_a.propHooks.scrollTop = _a.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (r.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (r.fx = _a.prototype.init),
    (r.fx.step = {});
  var ab,
    bb,
    cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;
  function eb() {
    bb &&
      (d.hidden === !1 && a.requestAnimationFrame
        ? a.requestAnimationFrame(eb)
        : a.setTimeout(eb, r.fx.interval),
      r.fx.tick());
  }
  function fb() {
    return (
      a.setTimeout(function () {
        ab = void 0;
      }),
      (ab = r.now())
    );
  }
  function gb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = ca[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function hb(a, b, c) {
    for (
      var d,
        e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ib(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = "width" in b || "height" in b,
      m = this,
      n = {},
      o = a.style,
      p = a.nodeType && da(a),
      q = W.get(a, "fxshow");
    c.queue ||
      ((g = r._queueHooks(a, "fx")),
      null == g.unqueued &&
        ((g.unqueued = 0),
        (h = g.empty.fire),
        (g.empty.fire = function () {
          g.unqueued || h();
        })),
      g.unqueued++,
      m.always(function () {
        m.always(function () {
          g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
        });
      }));
    for (d in b)
      if (((e = b[d]), cb.test(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        n[d] = (q && q[d]) || r.style(a, d);
      }
    if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
      l &&
        1 === a.nodeType &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = q && q.display),
        null == j && (j = W.get(a, "display")),
        (k = r.css(a, "display")),
        "none" === k &&
          (j
            ? (k = j)
            : (ia([a], !0),
              (j = a.style.display || j),
              (k = r.css(a, "display")),
              ia([a]))),
        ("inline" === k || ("inline-block" === k && null != j)) &&
          "none" === r.css(a, "float") &&
          (i ||
            (m.done(function () {
              o.display = j;
            }),
            null == j && ((k = o.display), (j = "none" === k ? "" : k))),
          (o.display = "inline-block"))),
        c.overflow &&
          ((o.overflow = "hidden"),
          m.always(function () {
            (o.overflow = c.overflow[0]),
              (o.overflowX = c.overflow[1]),
              (o.overflowY = c.overflow[2]);
          })),
        (i = !1);
      for (d in n)
        i ||
          (q
            ? "hidden" in q && (p = q.hidden)
            : (q = W.access(a, "fxshow", { display: j })),
          f && (q.hidden = !p),
          p && ia([a], !0),
          m.done(function () {
            p || ia([a]), W.remove(a, "fxshow");
            for (d in n) r.style(a, d, n[d]);
          })),
          (i = hb(p ? q[d] : 0, d, m)),
          d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
    }
  }
  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = r.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = r.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kb(a, b, c) {
    var d,
      e,
      f = 0,
      g = kb.prefilters.length,
      h = r.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = ab || fb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i
            ? c
            : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: r.extend({}, b),
        opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: ab || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = r.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        },
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); f < g; f++)
      if ((d = kb.prefilters[f].call(j, a, k, j.opts)))
        return (
          r.isFunction(d.stop) &&
            (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
          d
        );
    return (
      r.map(k, hb, j),
      r.isFunction(j.opts.start) && j.opts.start.call(a, j),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always),
      r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
    );
  }
  (r.Animation = r.extend(kb, {
    tweeners: {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b);
          return fa(c.elem, a, ba.exec(b), c), c;
        },
      ],
    },
    tweener: function (a, b) {
      r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(L));
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (kb.tweeners[c] = kb.tweeners[c] || []),
          kb.tweeners[c].unshift(b);
    },
    prefilters: [ib],
    prefilter: function (a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    },
  })),
    (r.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? r.extend({}, a)
          : {
              complete: c || (!c && b) || (r.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !r.isFunction(b) && b),
            };
      return (
        r.fx.off
          ? (d.duration = 0)
          : "number" != typeof d.duration &&
            (d.duration in r.fx.speeds
              ? (d.duration = r.fx.speeds[d.duration])
              : (d.duration = r.fx.speeds._default)),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          r.isFunction(d.old) && d.old.call(this),
            d.queue && r.dequeue(this, d.queue);
        }),
        d
      );
    }),
    r.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(da)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function () {
            var b = kb(this, r.extend({}, a), f);
            (e || W.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = r.timers,
              g = W.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || r.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = W.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = r.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                r.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    r.each(["toggle", "show", "hide"], function (a, b) {
      var c = r.fn[b];
      r.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gb(b, !0), a, d, e);
      };
    }),
    r.each(
      {
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        r.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (r.timers = []),
    (r.fx.tick = function () {
      var a,
        b = 0,
        c = r.timers;
      for (ab = r.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || r.fx.stop(), (ab = void 0);
    }),
    (r.fx.timer = function (a) {
      r.timers.push(a), r.fx.start();
    }),
    (r.fx.interval = 13),
    (r.fx.start = function () {
      bb || ((bb = !0), eb());
    }),
    (r.fx.stop = function () {
      bb = null;
    }),
    (r.fx.speeds = { slow: 3200, fast: 3500, _default: 9500 }),
    (r.fn.delay = function (b, c) {
      return (
        (b = r.fx ? r.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function () {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function () {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (o.checkOn = "" !== a.value),
        (o.optSelected = c.selected),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (o.radioValue = "t" === a.value);
    })();
  var lb,
    mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function (a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    },
  }),
    r.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? r.prop(a, b, c)
            : ((1 === f && r.isXMLDoc(a)) ||
                (e =
                  r.attrHooks[b.toLowerCase()] ||
                  (r.expr.match.bool.test(b) ? lb : void 0)),
              void 0 !== c
                ? null === c
                  ? void r.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : ((d = r.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!o.radioValue && "radio" === b && B(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
      removeAttr: function (a, b) {
        var c,
          d = 0,
          e = b && b.match(L);
        if (e && 1 === a.nodeType) while ((c = e[d++])) a.removeAttribute(c);
      },
    }),
    (lb = {
      set: function (a, b, c) {
        return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = mb[b] || r.find.attr;
      mb[b] = function (a, b, d) {
        var e,
          f,
          g = b.toLowerCase();
        return (
          d ||
            ((f = mb[g]),
            (mb[g] = e),
            (e = null != c(a, b, d) ? g : null),
            (mb[g] = f)),
          e
        );
      };
    });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function (a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    },
  }),
    r.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && r.isXMLDoc(a)) ||
              ((b = r.propFix[b] || b), (e = r.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = r.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : nb.test(a.nodeName) || (ob.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    o.optSelected ||
      (r.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        },
      }),
    r.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        r.propFix[this.toLowerCase()] = this;
      }
    );
  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ");
  }
  function qb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  r.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).addClass(a.call(this, b, qb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).removeClass(a.call(this, b, qb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : r.isFunction(a)
        ? this.each(function (c) {
            r(this).toggleClass(a.call(this, c, qb(this), b), b);
          })
        : this.each(function () {
            var b, d, e, f;
            if ("string" === c) {
              (d = 0), (e = r(this)), (f = a.match(L) || []);
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
            } else (void 0 !== a && "boolean" !== c) || ((b = qb(this)), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
          });
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
          return !0;
      return !1;
    },
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = r.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, r(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : Array.isArray(e) &&
                    (e = r.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  r.valHooks[this.type] ||
                  r.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    r.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = r.find.attr(a, "value");
            return null != b ? b : pb(r.text(a));
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;
            for (d = f < 0 ? i : g ? f : 0; d < i; d++)
              if (
                ((c = e[d]),
                (c.selected || d === f) &&
                  !c.disabled &&
                  (!c.parentNode.disabled || !B(c.parentNode, "optgroup")))
              ) {
                if (((b = r(c).val()), g)) return b;
                h.push(b);
              }
            return h;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    r.each(["radio", "checkbox"], function () {
      (r.valHooks[this] = {
        set: function (a, b) {
          if (Array.isArray(b))
            return (a.checked = r.inArray(r(a).val(), b) > -1);
        },
      }),
        o.checkOn ||
          (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        k,
        m,
        n,
        o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !sb.test(p + r.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (k = p.indexOf(":") < 0 && "on" + p),
          (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : r.makeArray(c, [b])),
          (n = r.event.special[p] || {}),
          f || !n.trigger || n.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (
            j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            o.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : n.bindType || p),
            (m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle")),
            m && m.apply(h, c),
            (m = k && h[k]),
            m &&
              m.apply &&
              U(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = p),
          f ||
            b.isDefaultPrevented() ||
            (n._default && n._default.apply(o.pop(), c) !== !1) ||
            !U(e) ||
            (k &&
              r.isFunction(e[p]) &&
              !r.isWindow(e) &&
              ((i = e[k]),
              i && (e[k] = null),
              (r.event.triggered = p),
              e[p](),
              (r.event.triggered = void 0),
              i && (e[k] = i))),
          b.result
        );
      }
    },
    simulate: function (a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });
      r.event.trigger(d, null, b);
    },
  }),
    r.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          r.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        if (c) return r.event.trigger(a, b, c, !0);
      },
    }),
    r.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (a, b) {
        r.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    r.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    (o.focusin = "onfocusin" in a),
    o.focusin ||
      r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          r.event.simulate(b, a.target, r.event.fix(a));
        };
        r.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b);
            e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = W.access(d, b) - 1;
            e
              ? W.access(d, b, e)
              : (d.removeEventListener(a, c, !0), W.remove(d, b));
          },
        };
      });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }
    return (
      (c && !c.getElementsByTagName("parsererror").length) ||
        r.error("Invalid XML: " + b),
      c
    );
  };
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b))
      r.each(b, function (b, e) {
        c || wb.test(a)
          ? d(a, e)
          : Ab(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== r.type(b)) d(a, b);
    else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  (r.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        var c = r.isFunction(b) ? b() : b;
        d[d.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
      };
    if (Array.isArray(a) || (a.jquery && !r.isPlainObject(a)))
      r.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join("&");
  }),
    r.fn.extend({
      serialize: function () {
        return r.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = r.prop(this, "elements");
          return a ? r.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !r(this).is(":disabled") &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !ja.test(a))
            );
          })
          .map(function (a, b) {
            var c = r(this).val();
            return null == c
              ? null
              : Array.isArray(c)
              ? r.map(c, function (a) {
                  return { name: b.name, value: a.replace(xb, "\r\n") };
                })
              : { name: b.name, value: c.replace(xb, "\r\n") };
          })
          .get();
      },
    });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;
  function Mb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Nb(a, b, c, d) {
    var e = {},
      f = a === Jb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        r.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Ob(a, b) {
    var c,
      d,
      e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a;
  }
  function Pb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Qb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function (b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = r.ajaxSetup({}, c),
        p = o.context || o,
        q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
        s = r.Deferred(),
        t = r.Callbacks("once memory"),
        u = o.statusCode || {},
        v = {},
        w = {},
        x = "canceled",
        y = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (k) {
              if (!h) {
                h = {};
                while ((b = Eb.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return k ? g : null;
          },
          setRequestHeader: function (a, b) {
            return (
              null == k &&
                ((a = w[a.toLowerCase()] = w[a.toLowerCase()] || a),
                (v[a] = b)),
              this
            );
          },
          overrideMimeType: function (a) {
            return null == k && (o.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (k) y.always(a[y.status]);
              else for (b in a) u[b] = [u[b], a[b]];
            return this;
          },
          abort: function (a) {
            var b = a || x;
            return e && e.abort(b), A(0, b), this;
          },
        };
      if (
        (s.promise(y),
        (o.url = ((b || o.url || tb.href) + "").replace(
          Hb,
          tb.protocol + "//"
        )),
        (o.type = c.method || c.type || o.method || o.type),
        (o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""]),
        null == o.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = o.url),
            (j.href = j.href),
            (o.crossDomain =
              Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host);
        } catch (z) {
          o.crossDomain = !0;
        }
      }
      if (
        (o.data &&
          o.processData &&
          "string" != typeof o.data &&
          (o.data = r.param(o.data, o.traditional)),
        Nb(Ib, o, c, y),
        k)
      )
        return y;
      (l = r.event && o.global),
        l && 0 === r.active++ && r.event.trigger("ajaxStart"),
        (o.type = o.type.toUpperCase()),
        (o.hasContent = !Gb.test(o.type)),
        (f = o.url.replace(Cb, "")),
        o.hasContent
          ? o.data &&
            o.processData &&
            0 ===
              (o.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (o.data = o.data.replace(Bb, "+"))
          : ((n = o.url.slice(f.length)),
            o.data && ((f += (vb.test(f) ? "&" : "?") + o.data), delete o.data),
            o.cache === !1 &&
              ((f = f.replace(Db, "$1")),
              (n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n)),
            (o.url = f + n)),
        o.ifModified &&
          (r.lastModified[f] &&
            y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
          r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
        ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) &&
          y.setRequestHeader("Content-Type", o.contentType),
        y.setRequestHeader(
          "Accept",
          o.dataTypes[0] && o.accepts[o.dataTypes[0]]
            ? o.accepts[o.dataTypes[0]] +
                ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "")
            : o.accepts["*"]
        );
      for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
        return y.abort();
      if (
        ((x = "abort"),
        t.add(o.complete),
        y.done(o.success),
        y.fail(o.error),
        (e = Nb(Jb, o, c, y)))
      ) {
        if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k))
          return y;
        o.async &&
          o.timeout > 0 &&
          (i = a.setTimeout(function () {
            y.abort("timeout");
          }, o.timeout));
        try {
          (k = !1), e.send(v, A);
        } catch (z) {
          if (k) throw z;
          A(-1, z);
        }
      } else A(-1, "No Transport");
      function A(b, c, d, h) {
        var j,
          m,
          n,
          v,
          w,
          x = c;
        k ||
          ((k = !0),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (y.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && b < 300) || 304 === b),
          d && (v = Pb(o, y, d)),
          (v = Qb(o, v, y, j)),
          j
            ? (o.ifModified &&
                ((w = y.getResponseHeader("Last-Modified")),
                w && (r.lastModified[f] = w),
                (w = y.getResponseHeader("etag")),
                w && (r.etag[f] = w)),
              204 === b || "HEAD" === o.type
                ? (x = "nocontent")
                : 304 === b
                ? (x = "notmodified")
                : ((x = v.state), (m = v.data), (n = v.error), (j = !n)))
            : ((n = x), (!b && x) || ((x = "error"), b < 0 && (b = 0))),
          (y.status = b),
          (y.statusText = (c || x) + ""),
          j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
          y.statusCode(u),
          (u = void 0),
          l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
          t.fireWith(p, [y, x]),
          l &&
            (q.trigger("ajaxComplete", [y, o]),
            --r.active || r.event.trigger("ajaxStop")));
      }
      return y;
    },
    getJSON: function (a, b, c) {
      return r.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return r.get(a, void 0, b, "script");
    },
  }),
    r.each(["get", "post"], function (a, b) {
      r[b] = function (a, c, d, e) {
        return (
          r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          r.ajax(
            r.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              r.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (r._evalUrl = function (a) {
      return r.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    r.fn.extend({
      wrapAll: function (a) {
        var b;
        return (
          this[0] &&
            (r.isFunction(a) && (a = a.call(this[0])),
            (b = r(a, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (a) {
        return r.isFunction(a)
          ? this.each(function (b) {
              r(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = r(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = r.isFunction(a);
        return this.each(function (c) {
          r(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function (a) {
        return (
          this.parent(a)
            .not("body")
            .each(function () {
              r(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (r.expr.pseudos.hidden = function (a) {
      return !r.expr.pseudos.visible(a);
    }),
    (r.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }),
    (r.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Rb = { 0: 200, 1223: 204 },
    Sb = r.ajaxSettings.xhr();
  (o.cors = !!Sb && "withCredentials" in Sb),
    (o.ajax = Sb = !!Sb),
    r.ajaxTransport(function (b) {
      var c, d;
      if (o.cors || (Sb && !b.crossDomain))
        return {
          send: function (e, f) {
            var g,
              h = b.xhr();
            if (
              (h.open(b.type, b.url, b.async, b.username, b.password),
              b.xhrFields)
            )
              for (g in b.xhrFields) h[g] = b.xhrFields[g];
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
              b.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest");
            for (g in e) h.setRequestHeader(g, e[g]);
            (c = function (a) {
              return function () {
                c &&
                  ((c =
                    d =
                    h.onload =
                    h.onerror =
                    h.onabort =
                    h.onreadystatechange =
                      null),
                  "abort" === a
                    ? h.abort()
                    : "error" === a
                    ? "number" != typeof h.status
                      ? f(0, "error")
                      : f(h.status, h.statusText)
                    : f(
                        Rb[h.status] || h.status,
                        h.statusText,
                        "text" !== (h.responseType || "text") ||
                          "string" != typeof h.responseText
                          ? { binary: h.response }
                          : { text: h.responseText },
                        h.getAllResponseHeaders()
                      ));
              };
            }),
              (h.onload = c()),
              (d = h.onerror = c("error")),
              void 0 !== h.onabort
                ? (h.onabort = d)
                : (h.onreadystatechange = function () {
                    4 === h.readyState &&
                      a.setTimeout(function () {
                        c && d();
                      });
                  }),
              (c = c("abort"));
            try {
              h.send((b.hasContent && b.data) || null);
            } catch (i) {
              if (c) throw i;
            }
          },
          abort: function () {
            c && c();
          },
        };
    }),
    r.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1);
    }),
    r.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (a) {
          return r.globalEval(a), a;
        },
      },
    }),
    r.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    r.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (e, f) {
            (b = r("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Tb.pop() || r.expando + "_" + ub++;
      return (this[a] = !0), a;
    },
  }),
    r.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Ub.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ub.test(b.data) &&
              "data");
      if (h || "jsonp" === b.dataTypes[0])
        return (
          (e = b.jsonpCallback =
            r.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Ub, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            void 0 === f ? r(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Tb.push(e)),
              g && r.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script"
        );
    }),
    (o.createHTMLDocument = (function () {
      var a = d.implementation.createHTMLDocument("").body;
      return (
        (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
      );
    })()),
    (r.parseHTML = function (a, b, c) {
      if ("string" != typeof a) return [];
      "boolean" == typeof b && ((c = b), (b = !1));
      var e, f, g;
      return (
        b ||
          (o.createHTMLDocument
            ? ((b = d.implementation.createHTMLDocument("")),
              (e = b.createElement("base")),
              (e.href = d.location.href),
              b.head.appendChild(e))
            : (b = d)),
        (f = C.exec(a)),
        (g = !c && []),
        f
          ? [b.createElement(f[1])]
          : ((f = qa([a], b, g)),
            g && g.length && r(g).remove(),
            r.merge([], f.childNodes))
      );
    }),
    (r.fn.load = function (a, b, c) {
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = pb(a.slice(h))), (a = a.slice(0, h))),
        r.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          r
            .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
            .done(function (a) {
              (f = arguments),
                g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(this, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
    r.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        r.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (r.expr.pseudos.animated = function (a) {
      return r.grep(r.timers, function (b) {
        return a === b.elem;
      }).length;
    }),
    (r.offset = {
      setOffset: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = r.css(a, "top")),
          (i = r.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      },
    }),
    r.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                r.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d,
          e,
          f = this[0];
        if (f)
          return f.getClientRects().length
            ? ((d = f.getBoundingClientRect()),
              (b = f.ownerDocument),
              (c = b.documentElement),
              (e = b.defaultView),
              {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft,
              })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === r.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                B(a[0], "html") || (d = a.offset()),
                (d = {
                  top: d.top + r.css(a[0], "borderTopWidth", !0),
                  left: d.left + r.css(a[0], "borderLeftWidth", !0),
                })),
            {
              top: b.top - d.top - r.css(c, "marginTop", !0),
              left: b.left - d.left - r.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent;
          while (a && "static" === r.css(a, "position")) a = a.offsetParent;
          return a || ra;
        });
      },
    }),
    r.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function (d) {
          return T(
            this,
            function (a, d, e) {
              var f;
              return (
                r.isWindow(a)
                  ? (f = a)
                  : 9 === a.nodeType && (f = a.defaultView),
                void 0 === e
                  ? f
                    ? f[b]
                    : a[d]
                  : void (f
                      ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                      : (a[d] = e))
              );
            },
            a,
            d,
            arguments.length
          );
        };
      }
    ),
    r.each(["top", "left"], function (a, b) {
      r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
        if (c)
          return (c = Oa(a, b)), Ma.test(c) ? r(a).position()[b] + "px" : c;
      });
    }),
    r.each({ Height: "height", Width: "width" }, function (a, b) {
      r.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          r.fn[d] = function (e, f) {
            var g = arguments.length && (c || "boolean" != typeof e),
              h = c || (e === !0 || f === !0 ? "margin" : "border");
            return T(
              this,
              function (b, c, e) {
                var f;
                return r.isWindow(b)
                  ? 0 === d.indexOf("outer")
                    ? b["inner" + a]
                    : b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((f = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      f["scroll" + a],
                      b.body["offset" + a],
                      f["offset" + a],
                      f["client" + a]
                    ))
                  : void 0 === e
                  ? r.css(b, c, h)
                  : r.style(b, c, e, h);
              },
              b,
              g ? e : void 0,
              g
            );
          };
        }
      );
    }),
    r.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    }),
    (r.holdReady = function (a) {
      a ? r.readyWait++ : r.ready(!0);
    }),
    (r.isArray = Array.isArray),
    (r.parseJSON = JSON.parse),
    (r.nodeName = B),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return r;
      });
  var Vb = a.jQuery,
    Wb = a.$;
  return (
    (r.noConflict = function (b) {
      return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
    }),
    b || (a.jQuery = a.$ = r),
    r
  );
});

/*!
 
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return -1 == n.indexOf(t) && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return -1 != n && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = 0,
          o = i[n];
        t = t || [];
        for (var r = this._onceEvents && this._onceEvents[e]; o; ) {
          var s = r && r[o];
          s && (this.off(e, o), delete r[o]),
            o.apply(this, t),
            (n += s ? 0 : 1),
            (o = i[n]);
        }
        return this;
      }
    }),
    (t.allOff = t.removeAllListeners =
      function () {
        delete this._events, delete this._onceEvents;
      }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      var t = [];
      if (Array.isArray(e)) t = e;
      else if ("number" == typeof e.length)
        for (var i = 0; i < e.length; i++) t.push(e[i]);
      else t.push(e);
      return t;
    }
    function o(e, t, r) {
      return this instanceof o
        ? ("string" == typeof e && (e = document.querySelectorAll(e)),
          (this.elements = n(e)),
          (this.options = i({}, this.options)),
          "function" == typeof t ? (r = t) : i(this.options, t),
          r && this.on("always", r),
          this.getImages(),
          h && (this.jqDeferred = new h.Deferred()),
          void setTimeout(
            function () {
              this.check();
            }.bind(this)
          ))
        : new o(e, t, r);
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var d = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});
/*!
 * VERSION: 1.9.0
 * DATE: 2017-06-19
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  var a = (_gsScope.document || {}).documentElement,
    b = _gsScope,
    c = function (c, d) {
      var e = "x" === d ? "Width" : "Height",
        f = "scroll" + e,
        g = "client" + e,
        h = document.body;
      return c === b || c === a || c === h
        ? Math.max(a[f], h[f]) - (b["inner" + e] || a[g] || h[g])
        : c[f] - c["offset" + e];
    },
    d = function (a) {
      return (
        "string" == typeof a && (a = TweenLite.selector(a)),
        a.length && a !== b && a[0] && a[0].style && !a.nodeType && (a = a[0]),
        a === b || (a.nodeType && a.style) ? a : null
      );
    },
    e = function (c, d) {
      var e = "scroll" + ("x" === d ? "Left" : "Top");
      return (
        c === b &&
          (null != c.pageXOffset
            ? (e = "page" + d.toUpperCase() + "Offset")
            : (c = null != a[e] ? a : document.body)),
        function () {
          return c[e];
        }
      );
    },
    f = function (c, f) {
      var g = d(c).getBoundingClientRect(),
        h = !f || f === b || f === document.body,
        i = (h ? a : f).getBoundingClientRect(),
        j = { x: g.left - i.left, y: g.top - i.top };
      return !h && f && ((j.x += e(f, "x")()), (j.y += e(f, "y")())), j;
    },
    g = function (a, b, d) {
      var e = typeof a;
      return isNaN(a)
        ? "number" === e || ("string" === e && "=" === a.charAt(1))
          ? a
          : "max" === a
          ? c(b, d)
          : Math.min(c(b, d), f(a, b)[d])
        : parseFloat(a);
    },
    h = _gsScope._gsDefine.plugin({
      propName: "scrollTo",
      API: 2,
      global: !0,
      version: "1.9.0",
      init: function (a, c, d) {
        return (
          (this._wdw = a === b),
          (this._target = a),
          (this._tween = d),
          "object" != typeof c
            ? ((c = { y: c }),
              "string" == typeof c.y &&
                "max" !== c.y &&
                "=" !== c.y.charAt(1) &&
                (c.x = c.y))
            : c.nodeType && (c = { y: c, x: c }),
          (this.vars = c),
          (this._autoKill = c.autoKill !== !1),
          (this.getX = e(a, "x")),
          (this.getY = e(a, "y")),
          (this.x = this.xPrev = this.getX()),
          (this.y = this.yPrev = this.getY()),
          null != c.x
            ? (this._addTween(
                this,
                "x",
                this.x,
                g(c.x, a, "x") - (c.offsetX || 0),
                "scrollTo_x",
                !0
              ),
              this._overwriteProps.push("scrollTo_x"))
            : (this.skipX = !0),
          null != c.y
            ? (this._addTween(
                this,
                "y",
                this.y,
                g(c.y, a, "y") - (c.offsetY || 0),
                "scrollTo_y",
                !0
              ),
              this._overwriteProps.push("scrollTo_y"))
            : (this.skipY = !0),
          !0
        );
      },
      set: function (a) {
        this._super.setRatio.call(this, a);
        var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
          e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
          f = e - this.yPrev,
          g = d - this.xPrev,
          i = h.autoKillThreshold;
        this.x < 0 && (this.x = 0),
          this.y < 0 && (this.y = 0),
          this._autoKill &&
            (!this.skipX &&
              (g > i || -i > g) &&
              d < c(this._target, "x") &&
              (this.skipX = !0),
            !this.skipY &&
              (f > i || -i > f) &&
              e < c(this._target, "y") &&
              (this.skipY = !0),
            this.skipX &&
              this.skipY &&
              (this._tween.kill(),
              this.vars.onAutoKill &&
                this.vars.onAutoKill.apply(
                  this.vars.onAutoKillScope || this._tween,
                  this.vars.onAutoKillParams || []
                ))),
          this._wdw
            ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y)
            : (this.skipY || (this._target.scrollTop = this.y),
              this.skipX || (this._target.scrollLeft = this.x)),
          (this.xPrev = this.x),
          (this.yPrev = this.y);
      },
    }),
    i = h.prototype;
  (h.max = c),
    (h.getOffset = f),
    (h.buildGetter = e),
    (h.autoKillThreshold = 7),
    (i._kill = function (a) {
      return (
        a.scrollTo_x && (this.skipX = !0),
        a.scrollTo_y && (this.skipY = !0),
        this._super._kill.call(this, a)
      );
    });
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a) {
    "use strict";
    var b = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[a];
    };
    "undefined" != typeof module && module.exports
      ? (require("../TweenLite.min.js"), (module.exports = b()))
      : "function" == typeof define && define.amd && define(["TweenLite"], b);
  })("ScrollToPlugin");
/*!
 * VERSION: 1.20.3
 * DATE: 2017-10-02
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (a, b, c) {
      var d = function (a) {
          var b,
            c = [],
            d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c;
        },
        e = function (a, b, c) {
          var d,
            e,
            f = a.cycle;
          for (d in f)
            (e = f[d]),
              (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
          delete a.cycle;
        },
        f = function (a, b, d) {
          c.call(this, a, b, d),
            (this._cycle = 0),
            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._repeat && this._uncache(!0),
            (this.render = f.prototype.render);
        },
        g = 1e-10,
        h = c._internals,
        i = h.isSelector,
        j = h.isArray,
        k = (f.prototype = c.to({}, 0.1, {})),
        l = [];
      (f.version = "1.20.3"),
        (k.constructor = f),
        (k.kill()._gc = !1),
        (f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf),
        (f.getTweensOf = c.getTweensOf),
        (f.lagSmoothing = c.lagSmoothing),
        (f.ticker = c.ticker),
        (f.render = c.render),
        (k.invalidate = function () {
          return (
            (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._yoyoEase = null),
            this._uncache(!0),
            c.prototype.invalidate.call(this)
          );
        }),
        (k.updateTo = function (a, b) {
          var d,
            e = this.ratio,
            f = this.vars.immediateRender || a.immediateRender;
          b &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay));
          for (d in a) this.vars[d] = a[d];
          if (this._initted || f)
            if (b) (this._initted = !1), f && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                c._onPluginEvent("_onDisable", this),
              this._time / this._duration > 0.998)
            ) {
              var g = this._totalTime;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(g, !0, !1);
            } else if (
              ((this._initted = !1), this._init(), this._time > 0 || f)
            )
              for (var h, i = 1 / (1 - e), j = this._firstPT; j; )
                (h = j.s + j.c), (j.c *= i), (j.s = h - j.c), (j = j._next);
          return this;
        }),
        (k.render = function (a, b, d) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var e,
            f,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p = this._dirty ? this.totalDuration() : this._totalDuration,
            q = this._time,
            r = this._totalTime,
            s = this._cycle,
            t = this._duration,
            u = this._rawPrevTime;
          if (
            (a >= p - 1e-7 && a >= 0
              ? ((this._totalTime = p),
                (this._cycle = this._repeat),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = t),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed ||
                  ((e = !0),
                  (f = "onComplete"),
                  (d = d || this._timeline.autoRemoveChildren)),
                0 === t &&
                  (this._initted || !this.vars.lazy || d) &&
                  (this._startTime === this._timeline._duration && (a = 0),
                  (0 > u ||
                    (0 >= a && a >= -1e-7) ||
                    (u === g && "isPause" !== this.data)) &&
                    u !== a &&
                    ((d = !0), u > g && (f = "onReverseComplete")),
                  (this._rawPrevTime = n = !b || a || u === a ? a : g)))
              : 1e-7 > a
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== r || (0 === t && u > 0)) &&
                  ((f = "onReverseComplete"), (e = this._reversed)),
                0 > a &&
                  ((this._active = !1),
                  0 === t &&
                    (this._initted || !this.vars.lazy || d) &&
                    (u >= 0 && (d = !0),
                    (this._rawPrevTime = n = !b || a || u === a ? a : g))),
                this._initted || (d = !0))
              : ((this._totalTime = this._time = a),
                0 !== this._repeat &&
                  ((j = t + this._repeatDelay),
                  (this._cycle = (this._totalTime / j) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / j &&
                    a >= r &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * j),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    ((this._time = t - this._time),
                    (o = this._yoyoEase || this.vars.yoyoEase),
                    o &&
                      (this._yoyoEase ||
                        (o !== !0 || this._initted
                          ? (this._yoyoEase = o =
                              o === !0
                                ? this._ease
                                : o instanceof Ease
                                ? o
                                : Ease.map[o])
                          : ((o = this.vars.ease),
                            (this._yoyoEase = o =
                              o
                                ? o instanceof Ease
                                  ? o
                                  : "function" == typeof o
                                  ? new Ease(o, this.vars.easeParams)
                                  : Ease.map[o] || c.defaultEase
                                : c.defaultEase))),
                      (this.ratio = o
                        ? 1 - o.getRatio((t - this._time) / t)
                        : 0))),
                  this._time > t
                    ? (this._time = t)
                    : this._time < 0 && (this._time = 0)),
                this._easeType && !o
                  ? ((k = this._time / t),
                    (l = this._easeType),
                    (m = this._easePower),
                    (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
                    3 === l && (k *= 2),
                    1 === m
                      ? (k *= k)
                      : 2 === m
                      ? (k *= k * k)
                      : 3 === m
                      ? (k *= k * k * k)
                      : 4 === m && (k *= k * k * k * k),
                    1 === l
                      ? (this.ratio = 1 - k)
                      : 2 === l
                      ? (this.ratio = k)
                      : this._time / t < 0.5
                      ? (this.ratio = k / 2)
                      : (this.ratio = 1 - k / 2))
                  : o || (this.ratio = this._ease.getRatio(this._time / t))),
            q === this._time && !d && s === this._cycle)
          )
            return void (
              r !== this._totalTime &&
              this._onUpdate &&
              (b || this._callback("onUpdate"))
            );
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !d &&
              this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = q),
                (this._totalTime = r),
                (this._rawPrevTime = u),
                (this._cycle = s),
                h.lazyTweens.push(this),
                void (this._lazy = [a, b])
              );
            !this._time || e || o
              ? e &&
                this._ease._calcEnd &&
                !o &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
              : (this.ratio = this._ease.getRatio(this._time / t));
          }
          for (
            this._lazy !== !1 && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== q &&
                  a >= 0 &&
                  (this._active = !0)),
              0 === r &&
                (2 === this._initted && a > 0 && this._init(),
                this._startAt &&
                  (a >= 0
                    ? this._startAt.render(a, !0, d)
                    : f || (f = "_dummyGS")),
                this.vars.onStart &&
                  (0 !== this._totalTime || 0 === t) &&
                  (b || this._callback("onStart"))),
              i = this._firstPT;
            i;

          )
            i.f
              ? i.t[i.p](i.c * this.ratio + i.s)
              : (i.t[i.p] = i.c * this.ratio + i.s),
              (i = i._next);
          this._onUpdate &&
            (0 > a &&
              this._startAt &&
              this._startTime &&
              this._startAt.render(a, !0, d),
            b || ((this._totalTime !== r || f) && this._callback("onUpdate"))),
            this._cycle !== s &&
              (b ||
                this._gc ||
                (this.vars.onRepeat && this._callback("onRepeat"))),
            f &&
              (!this._gc || d) &&
              (0 > a &&
                this._startAt &&
                !this._onUpdate &&
                this._startTime &&
                this._startAt.render(a, !0, d),
              e &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !b && this.vars[f] && this._callback(f),
              0 === t &&
                this._rawPrevTime === g &&
                n !== g &&
                (this._rawPrevTime = 0));
        }),
        (f.to = function (a, b, c) {
          return new f(a, b, c);
        }),
        (f.from = function (a, b, c) {
          return (
            (c.runBackwards = !0),
            (c.immediateRender = 0 != c.immediateRender),
            new f(a, b, c)
          );
        }),
        (f.fromTo = function (a, b, c, d) {
          return (
            (d.startAt = c),
            (d.immediateRender =
              0 != d.immediateRender && 0 != c.immediateRender),
            new f(a, b, d)
          );
        }),
        (f.staggerTo = f.allTo =
          function (a, b, g, h, k, m, n) {
            h = h || 0;
            var o,
              p,
              q,
              r,
              s = 0,
              t = [],
              u = function () {
                g.onComplete &&
                  g.onComplete.apply(g.onCompleteScope || this, arguments),
                  k.apply(n || g.callbackScope || this, m || l);
              },
              v = g.cycle,
              w = g.startAt && g.startAt.cycle;
            for (
              j(a) ||
                ("string" == typeof a && (a = c.selector(a) || a),
                i(a) && (a = d(a))),
                a = a || [],
                0 > h && ((a = d(a)), a.reverse(), (h *= -1)),
                o = a.length - 1,
                q = 0;
              o >= q;
              q++
            ) {
              p = {};
              for (r in g) p[r] = g[r];
              if (
                (v &&
                  (e(p, a, q),
                  null != p.duration && ((b = p.duration), delete p.duration)),
                w)
              ) {
                w = p.startAt = {};
                for (r in g.startAt) w[r] = g.startAt[r];
                e(p.startAt, a, q);
              }
              (p.delay = s + (p.delay || 0)),
                q === o && k && (p.onComplete = u),
                (t[q] = new f(a[q], b, p)),
                (s += h);
            }
            return t;
          }),
        (f.staggerFrom = f.allFrom =
          function (a, b, c, d, e, g, h) {
            return (
              (c.runBackwards = !0),
              (c.immediateRender = 0 != c.immediateRender),
              f.staggerTo(a, b, c, d, e, g, h)
            );
          }),
        (f.staggerFromTo = f.allFromTo =
          function (a, b, c, d, e, g, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              f.staggerTo(a, b, d, e, g, h, i)
            );
          }),
        (f.delayedCall = function (a, b, c, d, e) {
          return new f(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0,
          });
        }),
        (f.set = function (a, b) {
          return new f(a, 0, b);
        }),
        (f.isTweening = function (a) {
          return c.getTweensOf(a, !0).length > 0;
        });
      var m = function (a, b) {
          for (var d = [], e = 0, f = a._first; f; )
            f instanceof c
              ? (d[e++] = f)
              : (b && (d[e++] = f), (d = d.concat(m(f, b))), (e = d.length)),
              (f = f._next);
          return d;
        },
        n = (f.getAllTweens = function (b) {
          return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
        });
      (f.killAll = function (a, c, d, e) {
        null == c && (c = !0), null == d && (d = !0);
        var f,
          g,
          h,
          i = n(0 != e),
          j = i.length,
          k = c && d && e;
        for (h = 0; j > h; h++)
          (g = i[h]),
            (k ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              (a
                ? g.totalTime(g._reversed ? 0 : g.totalDuration())
                : g._enabled(!1, !1));
      }),
        (f.killChildTweensOf = function (a, b) {
          if (null != a) {
            var e,
              g,
              k,
              l,
              m,
              n = h.tweenLookup;
            if (
              ("string" == typeof a && (a = c.selector(a) || a),
              i(a) && (a = d(a)),
              j(a))
            )
              for (l = a.length; --l > -1; ) f.killChildTweensOf(a[l], b);
            else {
              e = [];
              for (k in n)
                for (g = n[k].target.parentNode; g; )
                  g === a && (e = e.concat(n[k].tweens)), (g = g.parentNode);
              for (m = e.length, l = 0; m > l; l++)
                b && e[l].totalTime(e[l].totalDuration()),
                  e[l]._enabled(!1, !1);
            }
          }
        });
      var o = function (a, c, d, e) {
        (c = c !== !1), (d = d !== !1), (e = e !== !1);
        for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1; )
          (g = h[j]),
            (i ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              g.paused(a);
      };
      return (
        (f.pauseAll = function (a, b, c) {
          o(!0, a, b, c);
        }),
        (f.resumeAll = function (a, b, c) {
          o(!1, a, b, c);
        }),
        (f.globalTimeScale = function (b) {
          var d = a._rootTimeline,
            e = c.ticker.time;
          return arguments.length
            ? ((b = b || g),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d = a._rootFramesTimeline),
              (e = c.ticker.frame),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d._timeScale = a._rootTimeline._timeScale = b),
              b)
            : d._timeScale;
        }),
        (k.progress = function (a, b) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                  this._cycle * (this._duration + this._repeatDelay),
                b
              )
            : this._time / this.duration();
        }),
        (k.totalProgress = function (a, b) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * a, b)
            : this._totalTime / this.totalDuration();
        }),
        (k.time = function (a, b) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              a > this._duration && (a = this._duration),
              this._yoyo && 0 !== (1 & this._cycle)
                ? (a =
                    this._duration -
                    a +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (a += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(a, b))
            : this._time;
        }),
        (k.duration = function (b) {
          return arguments.length
            ? a.prototype.duration.call(this, b)
            : this._duration;
        }),
        (k.totalDuration = function (a) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (a - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !80)),
              this._totalDuration);
        }),
        (k.repeat = function (a) {
          return arguments.length
            ? ((this._repeat = a), this._uncache(!0))
            : this._repeat;
        }),
        (k.repeatDelay = function (a) {
          return arguments.length
            ? ((this._repeatDelay = a), this._uncache(!0))
            : this._repeatDelay;
        }),
        (k.yoyo = function (a) {
          return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
        }),
        f
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (a, b, c) {
        var d = function (a) {
            b.call(this, a),
              (this._labels = {}),
              (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
              (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var c,
              d,
              e = this.vars;
            for (d in e)
              (c = e[d]),
                i(c) &&
                  -1 !== c.join("").indexOf("{self}") &&
                  (e[d] = this._swapSelfInParams(c));
            i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
          },
          e = 1e-10,
          f = c._internals,
          g = (d._internals = {}),
          h = f.isSelector,
          i = f.isArray,
          j = f.lazyTweens,
          k = f.lazyRender,
          l = _gsScope._gsDefine.globals,
          m = function (a) {
            var b,
              c = {};
            for (b in a) c[b] = a[b];
            return c;
          },
          n = function (a, b, c) {
            var d,
              e,
              f = a.cycle;
            for (d in f)
              (e = f[d]),
                (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
            delete a.cycle;
          },
          o = (g.pauseCallback = function () {}),
          p = function (a) {
            var b,
              c = [],
              d = a.length;
            for (b = 0; b !== d; c.push(a[b++]));
            return c;
          },
          q = (d.prototype = new b());
        return (
          (d.version = "1.20.3"),
          (q.constructor = d),
          (q.kill()._gc = q._forcingPlayhead = q._hasPause = !1),
          (q.to = function (a, b, d, e) {
            var f = (d.repeat && l.TweenMax) || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
          }),
          (q.from = function (a, b, d, e) {
            return this.add(((d.repeat && l.TweenMax) || c).from(a, b, d), e);
          }),
          (q.fromTo = function (a, b, d, e, f) {
            var g = (e.repeat && l.TweenMax) || c;
            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
          }),
          (q.staggerTo = function (a, b, e, f, g, i, j, k) {
            var l,
              o,
              q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming,
              }),
              r = e.cycle;
            for (
              "string" == typeof a && (a = c.selector(a) || a),
                a = a || [],
                h(a) && (a = p(a)),
                f = f || 0,
                0 > f && ((a = p(a)), a.reverse(), (f *= -1)),
                o = 0;
              o < a.length;
              o++
            )
              (l = m(e)),
                l.startAt &&
                  ((l.startAt = m(l.startAt)),
                  l.startAt.cycle && n(l.startAt, a, o)),
                r &&
                  (n(l, a, o),
                  null != l.duration && ((b = l.duration), delete l.duration)),
                q.to(a[o], b, l, o * f);
            return this.add(q, g);
          }),
          (q.staggerFrom = function (a, b, c, d, e, f, g, h) {
            return (
              (c.immediateRender = 0 != c.immediateRender),
              (c.runBackwards = !0),
              this.staggerTo(a, b, c, d, e, f, g, h)
            );
          }),
          (q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              this.staggerTo(a, b, d, e, f, g, h, i)
            );
          }),
          (q.call = function (a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
          }),
          (q.set = function (a, b, d) {
            return (
              (d = this._parseTimeOrLabel(d, 0, !0)),
              null == b.immediateRender &&
                (b.immediateRender = d === this._time && !this._paused),
              this.add(new c(a, 0, b), d)
            );
          }),
          (d.exportRoot = function (a, b) {
            (a = a || {}),
              null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e,
              f,
              g,
              h,
              i = new d(a),
              j = i._timeline;
            for (
              null == b && (b = !0),
                j._remove(i, !0),
                i._startTime = 0,
                i._rawPrevTime = i._time = i._totalTime = j._time,
                g = j._first;
              g;

            )
              (h = g._next),
                (b && g instanceof c && g.target === g.vars.onComplete) ||
                  ((f = g._startTime - g._delay),
                  0 > f && (e = 1),
                  i.add(g, f)),
                (g = h);
            return j.add(i, 0), e && i.totalDuration(), i;
          }),
          (q.add = function (e, f, g, h) {
            var j, k, l, m, n, o;
            if (
              ("number" != typeof f &&
                (f = this._parseTimeOrLabel(f, 0, !0, e)),
              !(e instanceof a))
            ) {
              if (e instanceof Array || (e && e.push && i(e))) {
                for (
                  g = g || "normal", h = h || 0, j = f, k = e.length, l = 0;
                  k > l;
                  l++
                )
                  i((m = e[l])) && (m = new d({ tweens: m })),
                    this.add(m, j),
                    "string" != typeof m &&
                      "function" != typeof m &&
                      ("sequence" === g
                        ? (j = m._startTime + m.totalDuration() / m._timeScale)
                        : "start" === g && (m._startTime -= m.delay())),
                    (j += h);
                return this._uncache(!0);
              }
              if ("string" == typeof e) return this.addLabel(e, f);
              if ("function" != typeof e)
                throw (
                  "Cannot add " +
                  e +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              e = c.delayedCall(0, e);
            }
            if (
              (b.prototype.add.call(this, e, f),
              e._time &&
                e.render(
                  (this.rawTime() - e._startTime) * e._timeScale,
                  !1,
                  !1
                ),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (n = this, o = n.rawTime() > e._startTime; n._timeline; )
                o && n._timeline.smoothChildTiming
                  ? n.totalTime(n._totalTime, !0)
                  : n._gc && n._enabled(!0, !1),
                  (n = n._timeline);
            return this;
          }),
          (q.remove = function (b) {
            if (b instanceof a) {
              this._remove(b, !1);
              var c = (b._timeline = b.vars.useFrames
                ? a._rootFramesTimeline
                : a._rootTimeline);
              return (
                (b._startTime =
                  (b._paused ? b._pauseTime : c._time) -
                  (b._reversed
                    ? b.totalDuration() - b._totalTime
                    : b._totalTime) /
                    b._timeScale),
                this
              );
            }
            if (b instanceof Array || (b && b.push && i(b))) {
              for (var d = b.length; --d > -1; ) this.remove(b[d]);
              return this;
            }
            return "string" == typeof b
              ? this.removeLabel(b)
              : this.kill(null, b);
          }),
          (q._remove = function (a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return (
              d
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (q.append = function (a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
          }),
          (q.insert = q.insertMultiple =
            function (a, b, c, d) {
              return this.add(a, b || 0, c, d);
            }),
          (q.appendMultiple = function (a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
          }),
          (q.addLabel = function (a, b) {
            return (this._labels[a] = this._parseTimeOrLabel(b)), this;
          }),
          (q.addPause = function (a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return (
              (f.vars.onComplete = f.vars.onReverseComplete = b),
              (f.data = "isPause"),
              (this._hasPause = !0),
              this.add(f, a)
            );
          }),
          (q.removeLabel = function (a) {
            return delete this._labels[a], this;
          }),
          (q.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1;
          }),
          (q._parseTimeOrLabel = function (b, c, d, e) {
            var f, g;
            if (e instanceof a && e.timeline === this) this.remove(e);
            else if (e && (e instanceof Array || (e.push && i(e))))
              for (g = e.length; --g > -1; )
                e[g] instanceof a &&
                  e[g].timeline === this &&
                  this.remove(e[g]);
            if (
              ((f =
                "number" != typeof b || c
                  ? this.duration() > 99999999999
                    ? this.recent().endTime(!1)
                    : this._duration
                  : 0),
              "string" == typeof c)
            )
              return this._parseTimeOrLabel(
                c,
                d && "number" == typeof b && null == this._labels[c]
                  ? b - f
                  : 0,
                d
              );
            if (
              ((c = c || 0),
              "string" != typeof b || (!isNaN(b) && null == this._labels[b]))
            )
              null == b && (b = f);
            else {
              if (((g = b.indexOf("=")), -1 === g))
                return null == this._labels[b]
                  ? d
                    ? (this._labels[b] = f + c)
                    : c
                  : this._labels[b] + c;
              (c =
                parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1))),
                (b =
                  g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f);
            }
            return Number(b) + c;
          }),
          (q.seek = function (a, b) {
            return this.totalTime(
              "number" == typeof a ? a : this._parseTimeOrLabel(a),
              b !== !1
            );
          }),
          (q.stop = function () {
            return this.paused(!0);
          }),
          (q.gotoAndPlay = function (a, b) {
            return this.play(a, b);
          }),
          (q.gotoAndStop = function (a, b) {
            return this.pause(a, b);
          }),
          (q.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d,
              f,
              g,
              h,
              i,
              l,
              m,
              n = this._time,
              o = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._startTime,
              q = this._timeScale,
              r = this._paused;
            if (
              (n !== this._time && (a += this._time - n),
              a >= o - 1e-7 && a >= 0)
            )
              (this._totalTime = this._time = o),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((f = !0),
                  (h = "onComplete"),
                  (i = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((0 >= a && a >= -1e-7) ||
                      this._rawPrevTime < 0 ||
                      this._rawPrevTime === e) &&
                    this._rawPrevTime !== a &&
                    this._first &&
                    ((i = !0),
                    this._rawPrevTime > e && (h = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !b || a || this._rawPrevTime === a ? a : e),
                (a = o + 1e-4);
            else if (1e-7 > a)
              if (
                ((this._totalTime = this._time = 0),
                (0 !== n ||
                  (0 === this._duration &&
                    this._rawPrevTime !== e &&
                    (this._rawPrevTime > 0 ||
                      (0 > a && this._rawPrevTime >= 0)))) &&
                  ((h = "onReverseComplete"), (f = this._reversed)),
                0 > a)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((i = f = !0), (h = "onReverseComplete"))
                    : this._rawPrevTime >= 0 && this._first && (i = !0),
                  (this._rawPrevTime = a);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !b || a || this._rawPrevTime === a
                      ? a
                      : e),
                  0 === a && f)
                )
                  for (d = this._first; d && 0 === d._startTime; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), this._initted || (i = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !b) {
                if (a >= n)
                  for (d = this._first; d && d._startTime <= a && !l; )
                    d._duration ||
                      "isPause" !== d.data ||
                      d.ratio ||
                      (0 === d._startTime && 0 === this._rawPrevTime) ||
                      (l = d),
                      (d = d._next);
                else
                  for (d = this._last; d && d._startTime >= a && !l; )
                    d._duration ||
                      ("isPause" === d.data && d._rawPrevTime > 0 && (l = d)),
                      (d = d._prev);
                l &&
                  ((this._time = a = l._startTime),
                  (this._totalTime =
                    a +
                    this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = a;
            }
            if ((this._time !== n && this._first) || c || i || l) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== n &&
                    a > 0 &&
                    (this._active = !0)),
                0 === n &&
                  this.vars.onStart &&
                  ((0 === this._time && this._duration) ||
                    b ||
                    this._callback("onStart")),
                (m = this._time),
                m >= n)
              )
                for (
                  d = this._first;
                  d &&
                  ((g = d._next), m === this._time && (!this._paused || r));

                )
                  (d._active || (d._startTime <= m && !d._paused && !d._gc)) &&
                    (l === d && this.pause(),
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c)),
                    (d = g);
              else
                for (
                  d = this._last;
                  d &&
                  ((g = d._prev), m === this._time && (!this._paused || r));

                ) {
                  if (
                    d._active ||
                    (d._startTime <= n && !d._paused && !d._gc)
                  ) {
                    if (l === d) {
                      for (l = d._prev; l && l.endTime() > this._time; )
                        l.render(
                          l._reversed
                            ? l.totalDuration() -
                                (a - l._startTime) * l._timeScale
                            : (a - l._startTime) * l._timeScale,
                          b,
                          c
                        ),
                          (l = l._prev);
                      (l = null), this.pause();
                    }
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c);
                  }
                  d = g;
                }
              this._onUpdate &&
                (b || (j.length && k(), this._callback("onUpdate"))),
                h &&
                  (this._gc ||
                    ((p === this._startTime || q !== this._timeScale) &&
                      (0 === this._time || o >= this.totalDuration()) &&
                      (f &&
                        (j.length && k(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !b && this.vars[h] && this._callback(h))));
            }
          }),
          (q._hasPausedChild = function () {
            for (var a = this._first; a; ) {
              if (a._paused || (a instanceof d && a._hasPausedChild()))
                return !0;
              a = a._next;
            }
            return !1;
          }),
          (q.getChildren = function (a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; )
              g._startTime < e ||
                (g instanceof c
                  ? b !== !1 && (f[h++] = g)
                  : (d !== !1 && (f[h++] = g),
                    a !== !1 &&
                      ((f = f.concat(g.getChildren(!0, b, d))),
                      (h = f.length)))),
                (g = g._next);
            return f;
          }),
          (q.getTweensOf = function (a, b) {
            var d,
              e,
              f = this._gc,
              g = [],
              h = 0;
            for (
              f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length;
              --e > -1;

            )
              (d[e].timeline === this || (b && this._contains(d[e]))) &&
                (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g;
          }),
          (q.recent = function () {
            return this._recent;
          }),
          (q._contains = function (a) {
            for (var b = a.timeline; b; ) {
              if (b === this) return !0;
              b = b.timeline;
            }
            return !1;
          }),
          (q.shiftChildren = function (a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; )
              e._startTime >= c && (e._startTime += a), (e = e._next);
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
          }),
          (q._kill = function (a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (
              var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1),
                d = c.length,
                e = !1;
              --d > -1;

            )
              c[d]._kill(a, b) && (e = !0);
            return e;
          }),
          (q.clear = function (a) {
            var b = this.getChildren(!1, !0, !0),
              c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; )
              b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0);
          }),
          (q.invalidate = function () {
            for (var b = this._first; b; ) b.invalidate(), (b = b._next);
            return a.prototype.invalidate.call(this);
          }),
          (q._enabled = function (a, c) {
            if (a === this._gc)
              for (var d = this._first; d; ) d._enabled(a, !0), (d = d._next);
            return b.prototype._enabled.call(this, a, c);
          }),
          (q.totalTime = function (b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (q.duration = function (a) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== a &&
                  this.timeScale(this._duration / a),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (q.totalDuration = function (a) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
                  (b = e._prev),
                    e._dirty && e.totalDuration(),
                    e._startTime > f &&
                    this._sortChildren &&
                    !e._paused &&
                    !this._calculatingDuration
                      ? ((this._calculatingDuration = 1),
                        this.add(e, e._startTime - e._delay),
                        (this._calculatingDuration = 0))
                      : (f = e._startTime),
                    e._startTime < 0 &&
                      !e._paused &&
                      ((d -= e._startTime),
                      this._timeline.smoothChildTiming &&
                        ((this._startTime += e._startTime / this._timeScale),
                        (this._time -= e._startTime),
                        (this._totalTime -= e._startTime),
                        (this._rawPrevTime -= e._startTime)),
                      this.shiftChildren(-e._startTime, !0.7, -9999999999),
                      (f = 0)),
                    (c = e._startTime + e._totalDuration / e._timeScale),
                    c > d && (d = c),
                    (e = b);
                (this._duration = this._totalDuration = d), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return a && this.totalDuration()
              ? this.timeScale(this._totalDuration / a)
              : this;
          }),
          (q.paused = function (b) {
            if (!b)
              for (var c = this._first, d = this._time; c; )
                c._startTime === d &&
                  "isPause" === c.data &&
                  (c._rawPrevTime = 0),
                  (c = c._next);
            return a.prototype.paused.apply(this, arguments);
          }),
          (q.usesFrames = function () {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
          }),
          (q.rawTime = function (a) {
            return a &&
              (this._paused ||
                (this._repeat && this.time() > 0 && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
          }),
          d
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (a, b, c) {
        var d = function (b) {
            a.call(this, b),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = this.vars.yoyo === !0),
              (this._dirty = !0);
          },
          e = 1e-10,
          f = b._internals,
          g = f.lazyTweens,
          h = f.lazyRender,
          i = _gsScope._gsDefine.globals,
          j = new c(null, null, 1, 0),
          k = (d.prototype = new a());
        return (
          (k.constructor = d),
          (k.kill()._gc = !1),
          (d.version = "1.20.3"),
          (k.invalidate = function () {
            return (
              (this._yoyo = this.vars.yoyo === !0),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              a.prototype.invalidate.call(this)
            );
          }),
          (k.addCallback = function (a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
          }),
          (k.removeCallback = function (a, b) {
            if (a)
              if (null == b) this._kill(null, a);
              else
                for (
                  var c = this.getTweensOf(a, !1),
                    d = c.length,
                    e = this._parseTimeOrLabel(b);
                  --d > -1;

                )
                  c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
          }),
          (k.removePause = function (b) {
            return this.removeCallback(a._internals.pauseCallback, b);
          }),
          (k.tweenTo = function (a, c) {
            c = c || {};
            var d,
              e,
              f,
              g = {
                ease: j,
                useFrames: this.usesFrames(),
                immediateRender: !1,
              },
              h = (c.repeat && i.TweenMax) || b;
            for (e in c) g[e] = c[e];
            return (
              (g.time = this._parseTimeOrLabel(a)),
              (d =
                Math.abs(Number(g.time) - this._time) / this._timeScale ||
                0.001),
              (f = new h(this, d, g)),
              (g.onStart = function () {
                f.target.paused(!0),
                  f.vars.time !== f.target.time() &&
                    d === f.duration() &&
                    f.duration(
                      Math.abs(f.vars.time - f.target.time()) /
                        f.target._timeScale
                    ),
                  c.onStart &&
                    c.onStart.apply(
                      c.onStartScope || c.callbackScope || f,
                      c.onStartParams || []
                    );
              }),
              f
            );
          }),
          (k.tweenFromTo = function (a, b, c) {
            (c = c || {}),
              (a = this._parseTimeOrLabel(a)),
              (c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                callbackScope: this,
              }),
              (c.immediateRender = c.immediateRender !== !1);
            var d = this.tweenTo(b, c);
            return d.duration(
              Math.abs(d.vars.time - a) / this._timeScale || 0.001
            );
          }),
          (k.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d,
              f,
              i,
              j,
              k,
              l,
              m,
              n,
              o = this._time,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              q = this._duration,
              r = this._totalTime,
              s = this._startTime,
              t = this._timeScale,
              u = this._rawPrevTime,
              v = this._paused,
              w = this._cycle;
            if (
              (o !== this._time && (a += this._time - o),
              a >= p - 1e-7 && a >= 0)
            )
              this._locked ||
                ((this._totalTime = p), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((f = !0),
                  (j = "onComplete"),
                  (k = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((0 >= a && a >= -1e-7) || 0 > u || u === e) &&
                    u !== a &&
                    this._first &&
                    ((k = !0), u > e && (j = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !b || a || this._rawPrevTime === a ? a : e),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (this._time = a = 0)
                  : ((this._time = q), (a = q + 1e-4));
            else if (1e-7 > a)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                (0 !== o ||
                  (0 === q &&
                    u !== e &&
                    (u > 0 || (0 > a && u >= 0)) &&
                    !this._locked)) &&
                  ((j = "onReverseComplete"), (f = this._reversed)),
                0 > a)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((k = f = !0), (j = "onReverseComplete"))
                    : u >= 0 && this._first && (k = !0),
                  (this._rawPrevTime = a);
              else {
                if (
                  ((this._rawPrevTime =
                    q || !b || a || this._rawPrevTime === a ? a : e),
                  0 === a && f)
                )
                  for (d = this._first; d && 0 === d._startTime; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), this._initted || (k = !0);
              }
            else if (
              (0 === q && 0 > u && (k = !0),
              (this._time = this._rawPrevTime = a),
              this._locked ||
                ((this._totalTime = a),
                0 !== this._repeat &&
                  ((l = q + this._repeatDelay),
                  (this._cycle = (this._totalTime / l) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / l &&
                    a >= r &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * l),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    (this._time = q - this._time),
                  this._time > q
                    ? ((this._time = q), (a = q + 1e-4))
                    : this._time < 0
                    ? (this._time = a = 0)
                    : (a = this._time))),
              this._hasPause && !this._forcingPlayhead && !b)
            ) {
              if (
                ((a = this._time),
                a >= o || (this._repeat && w !== this._cycle))
              )
                for (d = this._first; d && d._startTime <= a && !m; )
                  d._duration ||
                    "isPause" !== d.data ||
                    d.ratio ||
                    (0 === d._startTime && 0 === this._rawPrevTime) ||
                    (m = d),
                    (d = d._next);
              else
                for (d = this._last; d && d._startTime >= a && !m; )
                  d._duration ||
                    ("isPause" === d.data && d._rawPrevTime > 0 && (m = d)),
                    (d = d._prev);
              m &&
                m._startTime < q &&
                ((this._time = a = m._startTime),
                (this._totalTime =
                  a + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== w && !this._locked) {
              var x = this._yoyo && 0 !== (1 & w),
                y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                z = this._totalTime,
                A = this._cycle,
                B = this._rawPrevTime,
                C = this._time;
              if (
                ((this._totalTime = w * q),
                this._cycle < w ? (x = !x) : (this._totalTime += q),
                (this._time = o),
                (this._rawPrevTime = 0 === q ? u - 1e-4 : u),
                (this._cycle = w),
                (this._locked = !0),
                (o = x ? 0 : q),
                this.render(o, b, 0 === q),
                b ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = A),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                o !== this._time)
              )
                return;
              if (
                (y &&
                  ((this._cycle = w),
                  (this._locked = !0),
                  (o = x ? q + 1e-4 : -1e-4),
                  this.render(o, !0, !1)),
                (this._locked = !1),
                this._paused && !v)
              )
                return;
              (this._time = C),
                (this._totalTime = z),
                (this._cycle = A),
                (this._rawPrevTime = B);
            }
            if (!((this._time !== o && this._first) || c || k || m))
              return void (
                r !== this._totalTime &&
                this._onUpdate &&
                (b || this._callback("onUpdate"))
              );
            if (
              (this._initted || (this._initted = !0),
              this._active ||
                (!this._paused &&
                  this._totalTime !== r &&
                  a > 0 &&
                  (this._active = !0)),
              0 === r &&
                this.vars.onStart &&
                ((0 === this._totalTime && this._totalDuration) ||
                  b ||
                  this._callback("onStart")),
              (n = this._time),
              n >= o)
            )
              for (
                d = this._first;
                d && ((i = d._next), n === this._time && (!this._paused || v));

              )
                (d._active ||
                  (d._startTime <= this._time && !d._paused && !d._gc)) &&
                  (m === d && this.pause(),
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c)),
                  (d = i);
            else
              for (
                d = this._last;
                d && ((i = d._prev), n === this._time && (!this._paused || v));

              ) {
                if (d._active || (d._startTime <= o && !d._paused && !d._gc)) {
                  if (m === d) {
                    for (m = d._prev; m && m.endTime() > this._time; )
                      m.render(
                        m._reversed
                          ? m.totalDuration() -
                              (a - m._startTime) * m._timeScale
                          : (a - m._startTime) * m._timeScale,
                        b,
                        c
                      ),
                        (m = m._prev);
                    (m = null), this.pause();
                  }
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c);
                }
                d = i;
              }
            this._onUpdate &&
              (b || (g.length && h(), this._callback("onUpdate"))),
              j &&
                (this._locked ||
                  this._gc ||
                  ((s === this._startTime || t !== this._timeScale) &&
                    (0 === this._time || p >= this.totalDuration()) &&
                    (f &&
                      (g.length && h(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !b && this.vars[j] && this._callback(j))));
          }),
          (k.getActive = function (a, b, c) {
            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
            var d,
              e,
              f = [],
              g = this.getChildren(a, b, c),
              h = 0,
              i = g.length;
            for (d = 0; i > d; d++) (e = g[d]), e.isActive() && (f[h++] = e);
            return f;
          }),
          (k.getLabelAfter = function (a) {
            a || (0 !== a && (a = this._time));
            var b,
              c = this.getLabelsArray(),
              d = c.length;
            for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
            return null;
          }),
          (k.getLabelBefore = function (a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1; )
              if (b[c].time < a) return b[c].name;
            return null;
          }),
          (k.getLabelsArray = function () {
            var a,
              b = [],
              c = 0;
            for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
            return (
              b.sort(function (a, b) {
                return a.time - b.time;
              }),
              b
            );
          }),
          (k.invalidate = function () {
            return (this._locked = !1), a.prototype.invalidate.call(this);
          }),
          (k.progress = function (a, b) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                    this._cycle * (this._duration + this._repeatDelay),
                  b
                )
              : this._time / this.duration() || 0;
          }),
          (k.totalProgress = function (a, b) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * a, b)
              : this._totalTime / this.totalDuration() || 0;
          }),
          (k.totalDuration = function (b) {
            return arguments.length
              ? -1 !== this._repeat && b
                ? this.timeScale(this.totalDuration() / b)
                : this
              : (this._dirty &&
                  (a.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (k.time = function (a, b) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                a > this._duration && (a = this._duration),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (a =
                      this._duration -
                      a +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (a += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(a, b))
              : this._time;
          }),
          (k.repeat = function (a) {
            return arguments.length
              ? ((this._repeat = a), this._uncache(!0))
              : this._repeat;
          }),
          (k.repeatDelay = function (a) {
            return arguments.length
              ? ((this._repeatDelay = a), this._uncache(!0))
              : this._repeatDelay;
          }),
          (k.yoyo = function (a) {
            return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
          }),
          (k.currentLabel = function (a) {
            return arguments.length
              ? this.seek(a, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          d
        );
      },
      !0
    ),
    (function () {
      var a = 180 / Math.PI,
        b = [],
        c = [],
        d = [],
        e = {},
        f = _gsScope._gsDefine.globals,
        g = function (a, b, c, d) {
          c === d && (c = d - (d - b) / 1e6),
            a === b && (b = a + (c - a) / 1e6),
            (this.a = a),
            (this.b = b),
            (this.c = c),
            (this.d = d),
            (this.da = d - a),
            (this.ca = c - a),
            (this.ba = b - a);
        },
        h =
          ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        i = function (a, b, c, d) {
          var e = { a: a },
            f = {},
            g = {},
            h = { c: d },
            i = (a + b) / 2,
            j = (b + c) / 2,
            k = (c + d) / 2,
            l = (i + j) / 2,
            m = (j + k) / 2,
            n = (m - l) / 8;
          return (
            (e.b = i + (a - i) / 4),
            (f.b = l + n),
            (e.c = f.a = (e.b + f.b) / 2),
            (f.c = g.a = (l + m) / 2),
            (g.b = m - n),
            (h.b = k + (d - k) / 4),
            (g.c = h.a = (g.b + h.b) / 2),
            [e, f, g, h]
          );
        },
        j = function (a, e, f, g, h) {
          var j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w = a.length - 1,
            x = 0,
            y = a[0].a;
          for (j = 0; w > j; j++)
            (n = a[x]),
              (k = n.a),
              (l = n.d),
              (m = a[x + 1].d),
              h
                ? ((t = b[j]),
                  (u = c[j]),
                  (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
                  (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
                  (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
                  (q =
                    l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
                : ((o = l - (l - k) * e * 0.5),
                  (p = l + (m - l) * e * 0.5),
                  (q = l - (o + p) / 2)),
              (o += q),
              (p += q),
              (n.c = r = o),
              0 !== j ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)),
              (n.da = l - k),
              (n.ca = r - k),
              (n.ba = y - k),
              f
                ? ((s = i(k, y, r, l)),
                  a.splice(x, 1, s[0], s[1], s[2], s[3]),
                  (x += 4))
                : x++,
              (y = p);
          (n = a[x]),
            (n.b = y),
            (n.c = y + 0.4 * (n.d - y)),
            (n.da = n.d - n.a),
            (n.ca = n.c - n.a),
            (n.ba = y - n.a),
            f &&
              ((s = i(n.a, y, n.c, n.d)),
              a.splice(x, 1, s[0], s[1], s[2], s[3]));
        },
        k = function (a, d, e, f) {
          var h,
            i,
            j,
            k,
            l,
            m,
            n = [];
          if (f)
            for (a = [f].concat(a), i = a.length; --i > -1; )
              "string" == typeof (m = a[i][d]) &&
                "=" === m.charAt(1) &&
                (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
          if (((h = a.length - 2), 0 > h))
            return (n[0] = new g(a[0][d], 0, 0, a[0][d])), n;
          for (i = 0; h > i; i++)
            (j = a[i][d]),
              (k = a[i + 1][d]),
              (n[i] = new g(j, 0, 0, k)),
              e &&
                ((l = a[i + 2][d]),
                (b[i] = (b[i] || 0) + (k - j) * (k - j)),
                (c[i] = (c[i] || 0) + (l - k) * (l - k)));
          return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
        },
        l = function (a, f, g, i, l, m) {
          var n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v = {},
            w = [],
            x = m || a[0];
          (l = "string" == typeof l ? "," + l + "," : h), null == f && (f = 1);
          for (o in a[0]) w.push(o);
          if (a.length > 1) {
            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; )
              if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
                t = !1;
                break;
              }
            t &&
              ((a = a.concat()),
              m && a.unshift(m),
              a.push(a[1]),
              (m = a[a.length - 3]));
          }
          for (b.length = c.length = d.length = 0, n = w.length; --n > -1; )
            (o = w[n]),
              (e[o] = -1 !== l.indexOf("," + o + ",")),
              (v[o] = k(a, o, e[o], m));
          for (n = b.length; --n > -1; )
            (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
          if (!i) {
            for (n = w.length; --n > -1; )
              if (e[o])
                for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++)
                  (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0),
                    (d[q] = (d[q] || 0) + r * r);
            for (n = d.length; --n > -1; ) d[n] = Math.sqrt(d[n]);
          }
          for (n = w.length, q = g ? 4 : 1; --n > -1; )
            (o = w[n]),
              (p = v[o]),
              j(p, f, g, i, e[o]),
              t && (p.splice(0, q), p.splice(p.length - q, q));
          return v;
        },
        m = function (a, b, c) {
          b = b || "soft";
          var d,
            e,
            f,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p = {},
            q = "cubic" === b ? 3 : 2,
            r = "soft" === b,
            s = [];
          if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1))
            throw "invalid Bezier data";
          for (m in a[0]) s.push(m);
          for (j = s.length; --j > -1; ) {
            for (
              m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0;
              l > k;
              k++
            )
              (d =
                null == c
                  ? a[k][m]
                  : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1)
                  ? c[m] + Number(o.charAt(0) + o.substr(2))
                  : Number(o)),
                r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
                (i[n++] = d);
            for (l = n - q + 1, n = 0, k = 0; l > k; k += q)
              (d = i[k]),
                (e = i[k + 1]),
                (f = i[k + 2]),
                (h = 2 === q ? 0 : i[k + 3]),
                (i[n++] = o =
                  3 === q
                    ? new g(d, e, f, h)
                    : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
            i.length = n;
          }
          return p;
        },
        n = function (a, b, c) {
          for (
            var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length;
            --p > -1;

          )
            for (
              m = a[p],
                f = m.a,
                g = m.d - f,
                h = m.c - f,
                i = m.b - f,
                d = e = 0,
                k = 1;
              c >= k;
              k++
            )
              (j = o * k),
                (l = 1 - j),
                (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)),
                (n = p * c + k - 1),
                (b[n] = (b[n] || 0) + d * d);
        },
        o = function (a, b) {
          b = b >> 0 || 6;
          var c,
            d,
            e,
            f,
            g = [],
            h = [],
            i = 0,
            j = 0,
            k = b - 1,
            l = [],
            m = [];
          for (c in a) n(a[c], g, b);
          for (e = g.length, d = 0; e > d; d++)
            (i += Math.sqrt(g[d])),
              (f = d % b),
              (m[f] = i),
              f === k &&
                ((j += i),
                (f = (d / b) >> 0),
                (l[f] = m),
                (h[f] = j),
                (i = 0),
                (m = []));
          return { length: j, lengths: h, segments: l };
        },
        p = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.8",
          API: 2,
          global: !0,
          init: function (a, b, c) {
            (this._target = a),
              b instanceof Array && (b = { values: b }),
              (this._func = {}),
              (this._mod = {}),
              (this._props = []),
              (this._timeRes =
                null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
            var d,
              e,
              f,
              g,
              h,
              i = b.values || [],
              j = {},
              k = i[0],
              n = b.autoRotate || c.vars.orientToBezier;
            this._autoRotate = n
              ? n instanceof Array
                ? n
                : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]]
              : null;
            for (d in k) this._props.push(d);
            for (f = this._props.length; --f > -1; )
              (d = this._props[f]),
                this._overwriteProps.push(d),
                (e = this._func[d] = "function" == typeof a[d]),
                (j[d] = e
                  ? a[
                      d.indexOf("set") ||
                      "function" != typeof a["get" + d.substr(3)]
                        ? d
                        : "get" + d.substr(3)
                    ]()
                  : parseFloat(a[d])),
                h || (j[d] !== i[0][d] && (h = j));
            if (
              ((this._beziers =
                "cubic" !== b.type &&
                "quadratic" !== b.type &&
                "soft" !== b.type
                  ? l(
                      i,
                      isNaN(b.curviness) ? 1 : b.curviness,
                      !1,
                      "thruBasic" === b.type,
                      b.correlate,
                      h
                    )
                  : m(i, b.type, j)),
              (this._segCount = this._beziers[d].length),
              this._timeRes)
            ) {
              var p = o(this._beziers, this._timeRes);
              (this._length = p.length),
                (this._lengths = p.lengths),
                (this._segments = p.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length);
            }
            if ((n = this._autoRotate))
              for (
                this._initialRotations = [],
                  n[0] instanceof Array || (this._autoRotate = n = [n]),
                  f = n.length;
                --f > -1;

              ) {
                for (g = 0; 3 > g; g++)
                  (d = n[f][g]),
                    (this._func[d] =
                      "function" == typeof a[d]
                        ? a[
                            d.indexOf("set") ||
                            "function" != typeof a["get" + d.substr(3)]
                              ? d
                              : "get" + d.substr(3)
                          ]
                        : !1);
                (d = n[f][2]),
                  (this._initialRotations[f] =
                    (this._func[d]
                      ? this._func[d].call(this._target)
                      : this._target[d]) || 0),
                  this._overwriteProps.push(d);
              }
            return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
          },
          set: function (b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m = this._segCount,
              n = this._func,
              o = this._target,
              p = b !== this._startRatio;
            if (this._timeRes) {
              if (
                ((k = this._lengths),
                (l = this._curSeg),
                (b *= this._length),
                (e = this._li),
                b > this._l2 && m - 1 > e)
              ) {
                for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; );
                (this._l1 = k[e - 1]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s2 = l[(this._s1 = this._si = 0)]);
              } else if (b < this._l1 && e > 0) {
                for (; e > 0 && (this._l1 = k[--e]) >= b; );
                0 === e && b < this._l1 ? (this._l1 = 0) : e++,
                  (this._l2 = k[e]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s1 = l[(this._si = l.length - 1) - 1] || 0),
                  (this._s2 = l[this._si]);
              }
              if (
                ((c = e),
                (b -= this._l1),
                (e = this._si),
                b > this._s2 && e < l.length - 1)
              ) {
                for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; );
                (this._s1 = l[e - 1]), (this._si = e);
              } else if (b < this._s1 && e > 0) {
                for (; e > 0 && (this._s1 = l[--e]) >= b; );
                0 === e && b < this._s1 ? (this._s1 = 0) : e++,
                  (this._s2 = l[e]),
                  (this._si = e);
              }
              h =
                (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
            } else
              (c = 0 > b ? 0 : b >= 1 ? m - 1 : (m * b) >> 0),
                (h = (b - c * (1 / m)) * m);
            for (d = 1 - h, e = this._props.length; --e > -1; )
              (f = this._props[e]),
                (g = this._beziers[f][c]),
                (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a),
                this._mod[f] && (i = this._mod[f](i, o)),
                n[f] ? o[f](i) : (o[f] = i);
            if (this._autoRotate) {
              var q,
                r,
                s,
                t,
                u,
                v,
                w,
                x = this._autoRotate;
              for (e = x.length; --e > -1; )
                (f = x[e][2]),
                  (v = x[e][3] || 0),
                  (w = x[e][4] === !0 ? 1 : a),
                  (g = this._beziers[x[e][0]]),
                  (q = this._beziers[x[e][1]]),
                  g &&
                    q &&
                    ((g = g[c]),
                    (q = q[c]),
                    (r = g.a + (g.b - g.a) * h),
                    (t = g.b + (g.c - g.b) * h),
                    (r += (t - r) * h),
                    (t += (g.c + (g.d - g.c) * h - t) * h),
                    (s = q.a + (q.b - q.a) * h),
                    (u = q.b + (q.c - q.b) * h),
                    (s += (u - s) * h),
                    (u += (q.c + (q.d - q.c) * h - u) * h),
                    (i = p
                      ? Math.atan2(u - s, t - r) * w + v
                      : this._initialRotations[e]),
                    this._mod[f] && (i = this._mod[f](i, o)),
                    n[f] ? o[f](i) : (o[f] = i));
            }
          },
        }),
        q = p.prototype;
      (p.bezierThrough = l),
        (p.cubicToQuadratic = i),
        (p._autoCSS = !0),
        (p.quadraticToCubic = function (a, b, c) {
          return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }),
        (p._cssRegister = function () {
          var a = f.CSSPlugin;
          if (a) {
            var b = a._internals,
              c = b._parseToProxy,
              d = b._setPluginRatio,
              e = b.CSSPropTween;
            b._registerComplexSpecialProp("bezier", {
              parser: function (a, b, f, g, h, i) {
                b instanceof Array && (b = { values: b }), (i = new p());
                var j,
                  k,
                  l,
                  m = b.values,
                  n = m.length - 1,
                  o = [],
                  q = {};
                if (0 > n) return h;
                for (j = 0; n >= j; j++)
                  (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
                for (k in b) q[k] = b[k];
                return (
                  (q.values = o),
                  (h = new e(a, "bezier", 0, 0, l.pt, 2)),
                  (h.data = l),
                  (h.plugin = i),
                  (h.setRatio = d),
                  0 === q.autoRotate && (q.autoRotate = !0),
                  !q.autoRotate ||
                    q.autoRotate instanceof Array ||
                    ((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)),
                    (q.autoRotate =
                      null != l.end.left
                        ? [["left", "top", "rotation", j, !1]]
                        : null != l.end.x
                        ? [["x", "y", "rotation", j, !1]]
                        : !1)),
                  q.autoRotate &&
                    (g._transform || g._enableTransforms(!1),
                    (l.autoRotate = g._target._gsTransform),
                    (l.proxy.rotation = l.autoRotate.rotation || 0),
                    g._overwriteProps.push("rotation")),
                  i._onInitTween(l.proxy, q, g._tween),
                  h
                );
              },
            });
          }
        }),
        (q._mod = function (a) {
          for (var b, c = this._overwriteProps, d = c.length; --d > -1; )
            (b = a[c[d]]), b && "function" == typeof b && (this._mod[c[d]] = b);
        }),
        (q._kill = function (a) {
          var b,
            c,
            d = this._props;
          for (b in this._beziers)
            if (b in a)
              for (
                delete this._beziers[b], delete this._func[b], c = d.length;
                --c > -1;

              )
                d[c] === b && d.splice(c, 1);
          if ((d = this._autoRotate))
            for (c = d.length; --c > -1; ) a[d[c][2]] && d.splice(c, 1);
          return this._super._kill.call(this, a);
        });
    })(),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (a, b) {
        var c,
          d,
          e,
          f,
          g = function () {
            a.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = g.prototype.setRatio);
          },
          h = _gsScope._gsDefine.globals,
          i = {},
          j = (g.prototype = new a("css"));
        (j.constructor = g),
          (g.version = "1.20.3"),
          (g.API = 2),
          (g.defaultTransformPerspective = 0),
          (g.defaultSkewType = "compensated"),
          (g.defaultSmoothOrigin = !0),
          (j = "px"),
          (g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: "",
          });
        var k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          w = /(?:\d|\-|\+|=|#|\.)*/g,
          x = /opacity *= *([^)]*)/i,
          y = /opacity:([^;]*)/i,
          z = /alpha\(opacity *=.+?\)/i,
          A = /^(rgb|hsl)/,
          B = /([A-Z])/g,
          C = /-([a-z])/gi,
          D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          E = function (a, b) {
            return b.toUpperCase();
          },
          F = /(?:Left|Right|Width)/i,
          G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          I = /,(?=[^\)]*(?:\(|$))/gi,
          J = /[\s,\(]/i,
          K = Math.PI / 180,
          L = 180 / Math.PI,
          M = {},
          N = { style: {} },
          O = _gsScope.document || {
            createElement: function () {
              return N;
            },
          },
          P = function (a, b) {
            return O.createElementNS
              ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a)
              : O.createElement(a);
          },
          Q = P("div"),
          R = P("img"),
          S = (g._internals = { _specialProps: i }),
          T = (_gsScope.navigator || {}).userAgent || "",
          U = (function () {
            var a = T.indexOf("Android"),
              b = P("a");
            return (
              (m =
                -1 !== T.indexOf("Safari") &&
                -1 === T.indexOf("Chrome") &&
                (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3)),
              (o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6),
              (n = -1 !== T.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) &&
                (p = parseFloat(RegExp.$1)),
              b
                ? ((b.style.cssText = "top:1px;opacity:.55;"),
                  /^0.55/.test(b.style.opacity))
                : !1
            );
          })(),
          V = function (a) {
            return x.test(
              "string" == typeof a
                ? a
                : (a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          W = function (a) {
            _gsScope.console && console.log(a);
          },
          X = "",
          Y = "",
          Z = function (a, b) {
            b = b || Q;
            var c,
              d,
              e = b.style;
            if (void 0 !== e[a]) return a;
            for (
              a = a.charAt(0).toUpperCase() + a.substr(1),
                c = ["O", "Moz", "ms", "Ms", "Webkit"],
                d = 5;
              --d > -1 && void 0 === e[c[d] + a];

            );
            return d >= 0
              ? ((Y = 3 === d ? "ms" : c[d]),
                (X = "-" + Y.toLowerCase() + "-"),
                Y + a)
              : null;
          },
          $ = O.defaultView ? O.defaultView.getComputedStyle : function () {},
          _ = (g.getStyle = function (a, b, c, d, e) {
            var f;
            return U || "opacity" !== b
              ? (!d && a.style[b]
                  ? (f = a.style[b])
                  : (c = c || $(a))
                  ? (f =
                      c[b] ||
                      c.getPropertyValue(b) ||
                      c.getPropertyValue(b.replace(B, "-$1").toLowerCase()))
                  : a.currentStyle && (f = a.currentStyle[b]),
                null == e ||
                (f && "none" !== f && "auto" !== f && "auto auto" !== f)
                  ? f
                  : e)
              : V(a);
          }),
          aa = (S.convertToPixels = function (a, c, d, e, f) {
            if ("px" === e || (!e && "lineHeight" !== c)) return d;
            if ("auto" === e || !d) return 0;
            var h,
              i,
              j,
              k = F.test(c),
              l = a,
              m = Q.style,
              n = 0 > d,
              o = 1 === d;
            if ((n && (d = -d), o && (d *= 100), "lineHeight" !== c || e))
              if ("%" === e && -1 !== c.indexOf("border"))
                h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
              else {
                if (
                  ((m.cssText =
                    "border:0 solid red;position:" +
                    _(a, "position") +
                    ";line-height:0;"),
                  "%" !== e &&
                    l.appendChild &&
                    "v" !== e.charAt(0) &&
                    "rem" !== e)
                )
                  m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                else {
                  if (
                    ((l = a.parentNode || O.body),
                    -1 !== _(l, "display").indexOf("flex") &&
                      (m.position = "absolute"),
                    (i = l._gsCache),
                    (j = b.ticker.frame),
                    i && k && i.time === j)
                  )
                    return (i.width * d) / 100;
                  m[k ? "width" : "height"] = d + e;
                }
                l.appendChild(Q),
                  (h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"])),
                  l.removeChild(Q),
                  k &&
                    "%" === e &&
                    g.cacheWidths !== !1 &&
                    ((i = l._gsCache = l._gsCache || {}),
                    (i.time = j),
                    (i.width = (h / d) * 100)),
                  0 !== h || f || (h = aa(a, c, d, e, !0));
              }
            else
              (i = $(a).lineHeight),
                (a.style.lineHeight = d),
                (h = parseFloat($(a).lineHeight)),
                (a.style.lineHeight = i);
            return o && (h /= 100), n ? -h : h;
          }),
          ba = (S.calculateOffset = function (a, b, c) {
            if ("absolute" !== _(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top",
              e = _(a, "margin" + d, c);
            return (
              a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
            );
          }),
          ca = function (a, b) {
            var c,
              d,
              e,
              f = {};
            if ((b = b || $(a, null)))
              if ((c = b.length))
                for (; --c > -1; )
                  (e = b[c]),
                    (-1 === e.indexOf("-transform") || Da === e) &&
                      (f[e.replace(C, E)] = b.getPropertyValue(e));
              else
                for (c in b)
                  (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
            else if ((b = a.currentStyle || a.style))
              for (c in b)
                "string" == typeof c &&
                  void 0 === f[c] &&
                  (f[c.replace(C, E)] = b[c]);
            return (
              U || (f.opacity = V(a)),
              (d = Ra(a, b, !1)),
              (f.rotation = d.rotation),
              (f.skewX = d.skewX),
              (f.scaleX = d.scaleX),
              (f.scaleY = d.scaleY),
              (f.x = d.x),
              (f.y = d.y),
              Fa &&
                ((f.z = d.z),
                (f.rotationX = d.rotationX),
                (f.rotationY = d.rotationY),
                (f.scaleZ = d.scaleZ)),
              f.filters && delete f.filters,
              f
            );
          },
          da = function (a, b, c, d, e) {
            var f,
              g,
              h,
              i = {},
              j = a.style;
            for (g in c)
              "cssText" !== g &&
                "length" !== g &&
                isNaN(g) &&
                (b[g] !== (f = c[g]) || (e && e[g])) &&
                -1 === g.indexOf("Origin") &&
                ("number" == typeof f || "string" == typeof f) &&
                ((i[g] =
                  "auto" !== f || ("left" !== g && "top" !== g)
                    ? ("" !== f && "auto" !== f && "none" !== f) ||
                      "string" != typeof b[g] ||
                      "" === b[g].replace(v, "")
                      ? f
                      : 0
                    : ba(a, g)),
                void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
            if (d) for (g in d) "className" !== g && (i[g] = d[g]);
            return { difs: i, firstMPT: h };
          },
          ea = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ga = function (a, b, c) {
            if ("svg" === (a.nodeName + "").toLowerCase())
              return (c || $(a))[b] || 0;
            if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
              e = ea[b],
              f = e.length;
            for (c = c || $(a, null); --f > -1; )
              (d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0),
                (d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0);
            return d;
          },
          ha = function (a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a)
              return a + " ";
            (null == a || "" === a) && (a = "0 0");
            var c,
              d = a.split(" "),
              e =
                -1 !== a.indexOf("left")
                  ? "0%"
                  : -1 !== a.indexOf("right")
                  ? "100%"
                  : d[0],
              f =
                -1 !== a.indexOf("top")
                  ? "0%"
                  : -1 !== a.indexOf("bottom")
                  ? "100%"
                  : d[1];
            if (d.length > 3 && !b) {
              for (
                d = a.split(", ").join(",").split(","), a = [], c = 0;
                c < d.length;
                c++
              )
                a.push(ha(d[c]));
              return a.join(",");
            }
            return (
              null == f
                ? (f = "center" === e ? "50%" : "0")
                : "center" === f && (f = "50%"),
              ("center" === e ||
                (isNaN(parseFloat(e)) && -1 === (e + "").indexOf("="))) &&
                (e = "50%"),
              (a = e + " " + f + (d.length > 2 ? " " + d[2] : "")),
              b &&
                ((b.oxp = -1 !== e.indexOf("%")),
                (b.oyp = -1 !== f.indexOf("%")),
                (b.oxr = "=" === e.charAt(1)),
                (b.oyr = "=" === f.charAt(1)),
                (b.ox = parseFloat(e.replace(v, ""))),
                (b.oy = parseFloat(f.replace(v, ""))),
                (b.v = a)),
              b || a
            );
          },
          ia = function (a, b) {
            return (
              "function" == typeof a && (a = a(r, q)),
              "string" == typeof a && "=" === a.charAt(1)
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2))
                : parseFloat(a) - parseFloat(b) || 0
            );
          },
          ja = function (a, b) {
            return (
              "function" == typeof a && (a = a(r, q)),
              null == a
                ? b
                : "string" == typeof a && "=" === a.charAt(1)
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b
                : parseFloat(a) || 0
            );
          },
          ka = function (a, b, c, d) {
            var e,
              f,
              g,
              h,
              i,
              j = 1e-6;
            return (
              "function" == typeof a && (a = a(r, q)),
              null == a
                ? (h = b)
                : "number" == typeof a
                ? (h = a)
                : ((e = 360),
                  (f = a.split("_")),
                  (i = "=" === a.charAt(1)),
                  (g =
                    (i
                      ? parseInt(a.charAt(0) + "1", 10) *
                        parseFloat(f[0].substr(2))
                      : parseFloat(f[0])) *
                      (-1 === a.indexOf("rad") ? 1 : L) -
                    (i ? 0 : b)),
                  f.length &&
                    (d && (d[c] = b + g),
                    -1 !== a.indexOf("short") &&
                      ((g %= e),
                      g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
                    -1 !== a.indexOf("_cw") && 0 > g
                      ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e)
                      : -1 !== a.indexOf("ccw") &&
                        g > 0 &&
                        (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                  (h = b + g)),
              j > h && h > -j && (h = 0),
              h
            );
          },
          la = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ma = function (a, b, c) {
            return (
              (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a),
              (255 *
                (1 > 6 * a
                  ? b + (c - b) * a * 6
                  : 0.5 > a
                  ? c
                  : 2 > 3 * a
                  ? b + (c - b) * (2 / 3 - a) * 6
                  : b) +
                0.5) |
                0
            );
          },
          na = (g.parseColor = function (a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a)
              if ("number" == typeof a) c = [a >> 16, (a >> 8) & 255, 255 & a];
              else {
                if (
                  ("," === a.charAt(a.length - 1) &&
                    (a = a.substr(0, a.length - 1)),
                  la[a])
                )
                  c = la[a];
                else if ("#" === a.charAt(0))
                  4 === a.length &&
                    ((d = a.charAt(1)),
                    (e = a.charAt(2)),
                    (f = a.charAt(3)),
                    (a = "#" + d + d + e + e + f + f)),
                    (a = parseInt(a.substr(1), 16)),
                    (c = [a >> 16, (a >> 8) & 255, 255 & a]);
                else if ("hsl" === a.substr(0, 3))
                  if (((c = m = a.match(s)), b)) {
                    if (-1 !== a.indexOf("=")) return a.match(t);
                  } else
                    (g = (Number(c[0]) % 360) / 360),
                      (h = Number(c[1]) / 100),
                      (i = Number(c[2]) / 100),
                      (e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
                      (d = 2 * i - e),
                      c.length > 3 && (c[3] = Number(c[3])),
                      (c[0] = ma(g + 1 / 3, d, e)),
                      (c[1] = ma(g, d, e)),
                      (c[2] = ma(g - 1 / 3, d, e));
                else c = a.match(s) || la.transparent;
                (c[0] = Number(c[0])),
                  (c[1] = Number(c[1])),
                  (c[2] = Number(c[2])),
                  c.length > 3 && (c[3] = Number(c[3]));
              }
            else c = la.black;
            return (
              b &&
                !m &&
                ((d = c[0] / 255),
                (e = c[1] / 255),
                (f = c[2] / 255),
                (j = Math.max(d, e, f)),
                (k = Math.min(d, e, f)),
                (i = (j + k) / 2),
                j === k
                  ? (g = h = 0)
                  : ((l = j - k),
                    (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)),
                    (g =
                      j === d
                        ? (e - f) / l + (f > e ? 6 : 0)
                        : j === e
                        ? (f - d) / l + 2
                        : (d - e) / l + 4),
                    (g *= 60)),
                (c[0] = (g + 0.5) | 0),
                (c[1] = (100 * h + 0.5) | 0),
                (c[2] = (100 * i + 0.5) | 0)),
              c
            );
          }),
          oa = function (a, b) {
            var c,
              d,
              e,
              f = a.match(pa) || [],
              g = 0,
              h = "";
            if (!f.length) return a;
            for (c = 0; c < f.length; c++)
              (d = f[c]),
                (e = a.substr(g, a.indexOf(d, g) - g)),
                (g += e.length + d.length),
                (d = na(d, b)),
                3 === d.length && d.push(1),
                (h +=
                  e +
                  (b
                    ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                    : "rgba(" + d.join(",")) +
                  ")");
            return h + a.substr(g);
          },
          pa =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in la) pa += "|" + j + "\\b";
        (pa = new RegExp(pa + ")", "gi")),
          (g.colorStringFilter = function (a) {
            var b,
              c = a[0] + " " + a[1];
            pa.test(c) &&
              ((b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla(")),
              (a[0] = oa(a[0], b)),
              (a[1] = oa(a[1], b))),
              (pa.lastIndex = 0);
          }),
          b.defaultStringFilter ||
            (b.defaultStringFilter = g.colorStringFilter);
        var qa = function (a, b, c, d) {
            if (null == a)
              return function (a) {
                return a;
              };
            var e,
              f = b ? (a.match(pa) || [""])[0] : "",
              g = a.split(f).join("").match(u) || [],
              h = a.substr(0, a.indexOf(g[0])),
              i = ")" === a.charAt(a.length - 1) ? ")" : "",
              j = -1 !== a.indexOf(" ") ? " " : ",",
              k = g.length,
              l = k > 0 ? g[0].replace(s, "") : "";
            return k
              ? (e = b
                  ? function (a) {
                      var b, m, n, o;
                      if ("number" == typeof a) a += l;
                      else if (d && I.test(a)) {
                        for (
                          o = a.replace(I, "|").split("|"), n = 0;
                          n < o.length;
                          n++
                        )
                          o[n] = e(o[n]);
                        return o.join(",");
                      }
                      if (
                        ((b = (a.match(pa) || [f])[0]),
                        (m = a.split(b).join("").match(u) || []),
                        (n = m.length),
                        k > n--)
                      )
                        for (; ++n < k; )
                          m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
                      return (
                        h +
                        m.join(j) +
                        j +
                        b +
                        i +
                        (-1 !== a.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (a) {
                      var b, f, m;
                      if ("number" == typeof a) a += l;
                      else if (d && I.test(a)) {
                        for (
                          f = a.replace(I, "|").split("|"), m = 0;
                          m < f.length;
                          m++
                        )
                          f[m] = e(f[m]);
                        return f.join(",");
                      }
                      if (((b = a.match(u) || []), (m = b.length), k > m--))
                        for (; ++m < k; )
                          b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
                      return h + b.join(j) + i;
                    })
              : function (a) {
                  return a;
                };
          },
          ra = function (a) {
            return (
              (a = a.split(",")),
              function (b, c, d, e, f, g, h) {
                var i,
                  j = (c + "").split(" ");
                for (h = {}, i = 0; 4 > i; i++)
                  h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
                return e.parse(b, h, f, g);
              }
            );
          },
          sa =
            ((S._setPluginRatio = function (a) {
              this.plugin.setRatio(a);
              for (
                var b,
                  c,
                  d,
                  e,
                  f,
                  g = this.data,
                  h = g.proxy,
                  i = g.firstMPT,
                  j = 1e-6;
                i;

              )
                (b = h[i.v]),
                  i.r ? (b = Math.round(b)) : j > b && b > -j && (b = 0),
                  (i.t[i.p] = b),
                  (i = i._next);
              if (
                (g.autoRotate &&
                  (g.autoRotate.rotation = g.mod
                    ? g.mod(h.rotation, this.t)
                    : h.rotation),
                1 === a || 0 === a)
              )
                for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i; ) {
                  if (((c = i.t), c.type)) {
                    if (1 === c.type) {
                      for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)
                        e += c["xn" + d] + c["xs" + (d + 1)];
                      c[f] = e;
                    }
                  } else c[f] = c.s + c.xs0;
                  i = i._next;
                }
            }),
            function (a, b, c, d, e) {
              (this.t = a),
                (this.p = b),
                (this.v = c),
                (this.r = e),
                d && ((d._prev = this), (this._next = d));
            }),
          ta =
            ((S._parseToProxy = function (a, b, c, d, e, f) {
              var g,
                h,
                i,
                j,
                k,
                l = d,
                m = {},
                n = {},
                o = c._transform,
                p = M;
              for (
                c._transform = null,
                  M = b,
                  d = k = c.parse(a, b, d, e),
                  M = p,
                  f &&
                    ((c._transform = o),
                    l && ((l._prev = null), l._prev && (l._prev._next = null)));
                d && d !== l;

              ) {
                if (
                  d.type <= 1 &&
                  ((h = d.p),
                  (n[h] = d.s + d.c),
                  (m[h] = d.s),
                  f || ((j = new sa(d, "s", h, j, d.r)), (d.c = 0)),
                  1 === d.type)
                )
                  for (g = d.l; --g > 0; )
                    (i = "xn" + g),
                      (h = d.p + "_" + i),
                      (n[h] = d.data[i]),
                      (m[h] = d[i]),
                      f || (j = new sa(d, i, h, j, d.rxp[i]));
                d = d._next;
              }
              return { proxy: m, end: n, firstMPT: j, pt: k };
            }),
            (S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
              (this.t = a),
                (this.p = b),
                (this.s = d),
                (this.c = e),
                (this.n = i || b),
                a instanceof ta || f.push(this.n),
                (this.r = j),
                (this.type = h || 0),
                k && ((this.pr = k), (c = !0)),
                (this.b = void 0 === l ? d : l),
                (this.e = void 0 === m ? d + e : m),
                g && ((this._next = g), (g._prev = this));
            })),
          ua = function (a, b, c, d, e, f) {
            var g = new ta(a, b, c, d - c, e, -1, f);
            return (g.b = c), (g.e = g.xs0 = d), g;
          },
          va = (g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
            (c = c || f || ""),
              "function" == typeof d && (d = d(r, q)),
              (h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
              (d += ""),
              e &&
                pa.test(d + c) &&
                ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
            var m,
              n,
              o,
              p,
              u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C,
              D = c.split(", ").join(",").split(" "),
              E = d.split(", ").join(",").split(" "),
              F = D.length,
              G = k !== !1;
            for (
              (-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) &&
                (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl")
                  ? ((D = D.join(" ").replace(I, ", ").split(" ")),
                    (E = E.join(" ").replace(I, ", ").split(" ")))
                  : ((D = D.join(" ").split(",").join(", ").split(" ")),
                    (E = E.join(" ").split(",").join(", ").split(" "))),
                (F = D.length)),
                F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
                h.plugin = j,
                h.setRatio = l,
                pa.lastIndex = 0,
                m = 0;
              F > m;
              m++
            )
              if (((p = D[m]), (u = E[m]), (x = parseFloat(p)), x || 0 === x))
                h.appendXtra(
                  "",
                  x,
                  ia(u, x),
                  u.replace(t, ""),
                  G && -1 !== u.indexOf("px"),
                  !0
                );
              else if (e && pa.test(p))
                (B = u.indexOf(")") + 1),
                  (B = ")" + (B ? u.substr(B) : "")),
                  (C = -1 !== u.indexOf("hsl") && U),
                  (z = u),
                  (p = na(p, C)),
                  (u = na(u, C)),
                  (y = p.length + u.length > 6),
                  y && !U && 0 === u[3]
                    ? ((h["xs" + h.l] += h.l ? " transparent" : "transparent"),
                      (h.e = h.e.split(E[m]).join("transparent")))
                    : (U || (y = !1),
                      C
                        ? h
                            .appendXtra(
                              z.substr(0, z.indexOf("hsl")) +
                                (y ? "hsla(" : "hsl("),
                              p[0],
                              ia(u[0], p[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", p[1], ia(u[1], p[1]), "%,", !1)
                            .appendXtra(
                              "",
                              p[2],
                              ia(u[2], p[2]),
                              y ? "%," : "%" + B,
                              !1
                            )
                        : h
                            .appendXtra(
                              z.substr(0, z.indexOf("rgb")) +
                                (y ? "rgba(" : "rgb("),
                              p[0],
                              u[0] - p[0],
                              ",",
                              !0,
                              !0
                            )
                            .appendXtra("", p[1], u[1] - p[1], ",", !0)
                            .appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0),
                      y &&
                        ((p = p.length < 4 ? 1 : p[3]),
                        h.appendXtra(
                          "",
                          p,
                          (u.length < 4 ? 1 : u[3]) - p,
                          B,
                          !1
                        ))),
                  (pa.lastIndex = 0);
              else if ((v = p.match(s))) {
                if (((w = u.match(t)), !w || w.length !== v.length)) return h;
                for (o = 0, n = 0; n < v.length; n++)
                  (A = v[n]),
                    (z = p.indexOf(A, o)),
                    h.appendXtra(
                      p.substr(o, z - o),
                      Number(A),
                      ia(w[n], A),
                      "",
                      G && "px" === p.substr(z + A.length, 2),
                      0 === n
                    ),
                    (o = z + A.length);
                h["xs" + h.l] += p.substr(o);
              } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            if (-1 !== d.indexOf("=") && h.data) {
              for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++)
                B += h["xs" + m] + h.data["xn" + m];
              h.e = B + h["xs" + m];
            }
            return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
          }),
          wa = 9;
        for (j = ta.prototype, j.l = j.pr = 0; --wa > 0; )
          (j["xn" + wa] = 0), (j["xs" + wa] = "");
        (j.xs0 = ""),
          (j._next =
            j._prev =
            j.xfirst =
            j.data =
            j.plugin =
            j.setRatio =
            j.rxp =
              null),
          (j.appendXtra = function (a, b, c, d, e, f) {
            var g = this,
              h = g.l;
            return (
              (g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || ""),
              c || 0 === h || g.plugin
                ? (g.l++,
                  (g.type = g.setRatio ? 2 : 1),
                  (g["xs" + g.l] = d || ""),
                  h > 0
                    ? ((g.data["xn" + h] = b + c),
                      (g.rxp["xn" + h] = e),
                      (g["xn" + h] = b),
                      g.plugin ||
                        ((g.xfirst = new ta(
                          g,
                          "xn" + h,
                          b,
                          c,
                          g.xfirst || g,
                          0,
                          g.n,
                          e,
                          g.pr
                        )),
                        (g.xfirst.xs0 = 0)),
                      g)
                    : ((g.data = { s: b + c }),
                      (g.rxp = {}),
                      (g.s = b),
                      (g.c = c),
                      (g.r = e),
                      g))
                : ((g["xs" + h] += b + (d || "")), g)
            );
          });
        var xa = function (a, b) {
            (b = b || {}),
              (this.p = b.prefix ? Z(a) || a : a),
              (i[a] = i[this.p] = this),
              (this.format =
                b.formatter ||
                qa(b.defaultValue, b.color, b.collapsible, b.multi)),
              b.parser && (this.parse = b.parser),
              (this.clrs = b.color),
              (this.multi = b.multi),
              (this.keyword = b.keyword),
              (this.dflt = b.defaultValue),
              (this.pr = b.priority || 0);
          },
          ya = (S._registerComplexSpecialProp = function (a, b, c) {
            "object" != typeof b && (b = { parser: c });
            var d,
              e,
              f = a.split(","),
              g = b.defaultValue;
            for (c = c || [g], d = 0; d < f.length; d++)
              (b.prefix = 0 === d && b.prefix),
                (b.defaultValue = c[d] || g),
                (e = new xa(f[d], b));
          }),
          za = (S._registerPluginProp = function (a) {
            if (!i[a]) {
              var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
              ya(a, {
                parser: function (a, c, d, e, f, g, j) {
                  var k = h.com.greensock.plugins[b];
                  return k
                    ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j))
                    : (W("Error: " + b + " js file not loaded."), f);
                },
              });
            }
          });
        (j = xa.prototype),
          (j.parseComplex = function (a, b, c, d, e, f) {
            var g,
              h,
              i,
              j,
              k,
              l,
              m = this.keyword;
            if (
              (this.multi &&
                (I.test(c) || I.test(b)
                  ? ((h = b.replace(I, "|").split("|")),
                    (i = c.replace(I, "|").split("|")))
                  : m && ((h = [b]), (i = [c]))),
              i)
            ) {
              for (
                j = i.length > h.length ? i.length : h.length, g = 0;
                j > g;
                g++
              )
                (b = h[g] = h[g] || this.dflt),
                  (c = i[g] = i[g] || this.dflt),
                  m &&
                    ((k = b.indexOf(m)),
                    (l = c.indexOf(m)),
                    k !== l &&
                      (-1 === l
                        ? (h[g] = h[g].split(m).join(""))
                        : -1 === k && (h[g] += " " + m)));
              (b = h.join(", ")), (c = i.join(", "));
            }
            return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
          }),
          (j.parse = function (a, b, c, d, f, g, h) {
            return this.parseComplex(
              a.style,
              this.format(_(a, this.p, e, !1, this.dflt)),
              this.format(b),
              f,
              g
            );
          }),
          (g.registerSpecialProp = function (a, b, c) {
            ya(a, {
              parser: function (a, d, e, f, g, h, i) {
                var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
              },
              priority: c,
            });
          }),
          (g.useSVGTransformAttr = !0);
        var Aa,
          Ba =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          Ca = Z("transform"),
          Da = X + "transform",
          Ea = Z("transformOrigin"),
          Fa = null !== Z("perspective"),
          Ga = (S.Transform = function () {
            (this.perspective = parseFloat(g.defaultTransformPerspective) || 0),
              (this.force3D =
                g.defaultForce3D !== !1 && Fa
                  ? g.defaultForce3D || "auto"
                  : !1);
          }),
          Ha = _gsScope.SVGElement,
          Ia = function (a, b, c) {
            var d,
              e = O.createElementNS("http://www.w3.org/2000/svg", a),
              f = /([a-z])([A-Z])/g;
            for (d in c)
              e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e), e;
          },
          Ja = O.documentElement || {},
          Ka = (function () {
            var a,
              b,
              c,
              d = p || (/Android/i.test(T) && !_gsScope.chrome);
            return (
              O.createElementNS &&
                !d &&
                ((a = Ia("svg", Ja)),
                (b = Ia("rect", a, { width: 100, height: 50, x: 100 })),
                (c = b.getBoundingClientRect().width),
                (b.style[Ea] = "50% 50%"),
                (b.style[Ca] = "scaleX(0.5)"),
                (d = c === b.getBoundingClientRect().width && !(n && Fa)),
                Ja.removeChild(a)),
              d
            );
          })(),
          La = function (a, b, c, d, e, f) {
            var h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v = a._gsTransform,
              w = Qa(a, !0);
            v && ((t = v.xOrigin), (u = v.yOrigin)),
              (!d || (h = d.split(" ")).length < 2) &&
                ((n = a.getBBox()),
                0 === n.x &&
                  0 === n.y &&
                  n.width + n.height === 0 &&
                  (n = {
                    x:
                      parseFloat(
                        a.hasAttribute("x")
                          ? a.getAttribute("x")
                          : a.hasAttribute("cx")
                          ? a.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        a.hasAttribute("y")
                          ? a.getAttribute("y")
                          : a.hasAttribute("cy")
                          ? a.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0,
                  }),
                (b = ha(b).split(" ")),
                (h = [
                  (-1 !== b[0].indexOf("%")
                    ? (parseFloat(b[0]) / 100) * n.width
                    : parseFloat(b[0])) + n.x,
                  (-1 !== b[1].indexOf("%")
                    ? (parseFloat(b[1]) / 100) * n.height
                    : parseFloat(b[1])) + n.y,
                ])),
              (c.xOrigin = k = parseFloat(h[0])),
              (c.yOrigin = l = parseFloat(h[1])),
              d &&
                w !== Pa &&
                ((m = w[0]),
                (n = w[1]),
                (o = w[2]),
                (p = w[3]),
                (q = w[4]),
                (r = w[5]),
                (s = m * p - n * o),
                s &&
                  ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s),
                  (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s),
                  (k = c.xOrigin = h[0] = i),
                  (l = c.yOrigin = h[1] = j))),
              v &&
                (f &&
                  ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
                e || (e !== !1 && g.defaultSmoothOrigin !== !1)
                  ? ((i = k - t),
                    (j = l - u),
                    (v.xOffset += i * w[0] + j * w[2] - i),
                    (v.yOffset += i * w[1] + j * w[3] - j))
                  : (v.xOffset = v.yOffset = 0)),
              f || a.setAttribute("data-svg-origin", h.join(" "));
          },
          Ma = function (a) {
            var b,
              c = P(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              d = this.parentNode,
              e = this.nextSibling,
              f = this.style.cssText;
            if (
              (Ja.appendChild(c),
              c.appendChild(this),
              (this.style.display = "block"),
              a)
            )
              try {
                (b = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Ma);
              } catch (g) {}
            else this._originalGetBBox && (b = this._originalGetBBox());
            return (
              e ? d.insertBefore(this, e) : d.appendChild(this),
              Ja.removeChild(c),
              (this.style.cssText = f),
              b
            );
          },
          Na = function (a) {
            try {
              return a.getBBox();
            } catch (b) {
              return Ma.call(a, !0);
            }
          },
          Oa = function (a) {
            return !(
              !Ha ||
              !a.getCTM ||
              (a.parentNode && !a.ownerSVGElement) ||
              !Na(a)
            );
          },
          Pa = [1, 0, 0, 1, 0, 0],
          Qa = function (a, b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i = a._gsTransform || new Ga(),
              j = 1e5,
              k = a.style;
            if (
              (Ca
                ? (d = _(a, Da, null, !0))
                : a.currentStyle &&
                  ((d = a.currentStyle.filter.match(G)),
                  (d =
                    d && 4 === d.length
                      ? [
                          d[0].substr(4),
                          Number(d[2].substr(4)),
                          Number(d[1].substr(4)),
                          d[3].substr(4),
                          i.x || 0,
                          i.y || 0,
                        ].join(",")
                      : "")),
              (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
              !Ca ||
                (!(h = !$(a) || "none" === $(a).display) && a.parentNode) ||
                (h && ((f = k.display), (k.display = "block")),
                a.parentNode || ((g = 1), Ja.appendChild(a)),
                (d = _(a, Da, null, !0)),
                (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                f ? (k.display = f) : h && Va(k, "display"),
                g && Ja.removeChild(a)),
              (i.svg || (a.getCTM && Oa(a))) &&
                (c &&
                  -1 !== (k[Ca] + "").indexOf("matrix") &&
                  ((d = k[Ca]), (c = 0)),
                (e = a.getAttribute("transform")),
                c &&
                  e &&
                  (-1 !== e.indexOf("matrix")
                    ? ((d = e), (c = 0))
                    : -1 !== e.indexOf("translate") &&
                      ((d =
                        "matrix(1,0,0,1," +
                        e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") +
                        ")"),
                      (c = 0)))),
              c)
            )
              return Pa;
            for (e = (d || "").match(s) || [], wa = e.length; --wa > -1; )
              (f = Number(e[wa])),
                (e[wa] = (g = f - (f |= 0))
                  ? ((g * j + (0 > g ? -0.5 : 0.5)) | 0) / j + f
                  : f);
            return b && e.length > 6
              ? [e[0], e[1], e[4], e[5], e[12], e[13]]
              : e;
          },
          Ra = (S.getTransform = function (a, c, d, e) {
            if (a._gsTransform && d && !e) return a._gsTransform;
            var f,
              h,
              i,
              j,
              k,
              l,
              m = d ? a._gsTransform || new Ga() : new Ga(),
              n = m.scaleX < 0,
              o = 2e-5,
              p = 1e5,
              q = Fa
                ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) ||
                  m.zOrigin ||
                  0
                : 0,
              r = parseFloat(g.defaultTransformPerspective) || 0;
            if (
              ((m.svg = !(!a.getCTM || !Oa(a))),
              m.svg &&
                (La(
                  a,
                  _(a, Ea, c, !1, "50% 50%") + "",
                  m,
                  a.getAttribute("data-svg-origin")
                ),
                (Aa = g.useSVGTransformAttr || Ka)),
              (f = Qa(a)),
              f !== Pa)
            ) {
              if (16 === f.length) {
                var s,
                  t,
                  u,
                  v,
                  w,
                  x = f[0],
                  y = f[1],
                  z = f[2],
                  A = f[3],
                  B = f[4],
                  C = f[5],
                  D = f[6],
                  E = f[7],
                  F = f[8],
                  G = f[9],
                  H = f[10],
                  I = f[12],
                  J = f[13],
                  K = f[14],
                  M = f[11],
                  N = Math.atan2(D, H);
                m.zOrigin &&
                  ((K = -m.zOrigin),
                  (I = F * K - f[12]),
                  (J = G * K - f[13]),
                  (K = H * K + m.zOrigin - f[14])),
                  (m.rotationX = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = B * v + F * w),
                    (t = C * v + G * w),
                    (u = D * v + H * w),
                    (F = B * -w + F * v),
                    (G = C * -w + G * v),
                    (H = D * -w + H * v),
                    (M = E * -w + M * v),
                    (B = s),
                    (C = t),
                    (D = u)),
                  (N = Math.atan2(-z, H)),
                  (m.rotationY = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = x * v - F * w),
                    (t = y * v - G * w),
                    (u = z * v - H * w),
                    (G = y * w + G * v),
                    (H = z * w + H * v),
                    (M = A * w + M * v),
                    (x = s),
                    (y = t),
                    (z = u)),
                  (N = Math.atan2(y, x)),
                  (m.rotation = N * L),
                  N &&
                    ((v = Math.cos(N)),
                    (w = Math.sin(N)),
                    (s = x * v + y * w),
                    (t = B * v + C * w),
                    (u = F * v + G * w),
                    (y = y * v - x * w),
                    (C = C * v - B * w),
                    (G = G * v - F * w),
                    (x = s),
                    (B = t),
                    (F = u)),
                  m.rotationX &&
                    Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 &&
                    ((m.rotationX = m.rotation = 0),
                    (m.rotationY = 180 - m.rotationY)),
                  (N = Math.atan2(B, C)),
                  (m.scaleX =
                    ((Math.sqrt(x * x + y * y + z * z) * p + 0.5) | 0) / p),
                  (m.scaleY = ((Math.sqrt(C * C + D * D) * p + 0.5) | 0) / p),
                  (m.scaleZ =
                    ((Math.sqrt(F * F + G * G + H * H) * p + 0.5) | 0) / p),
                  (x /= m.scaleX),
                  (B /= m.scaleY),
                  (y /= m.scaleX),
                  (C /= m.scaleY),
                  Math.abs(N) > o
                    ? ((m.skewX = N * L),
                      (B = 0),
                      "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N)))
                    : (m.skewX = 0),
                  (m.perspective = M ? 1 / (0 > M ? -M : M) : 0),
                  (m.x = I),
                  (m.y = J),
                  (m.z = K),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)),
                    (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
              } else if (
                !Fa ||
                e ||
                !f.length ||
                m.x !== f[4] ||
                m.y !== f[5] ||
                (!m.rotationX && !m.rotationY)
              ) {
                var O = f.length >= 6,
                  P = O ? f[0] : 1,
                  Q = f[1] || 0,
                  R = f[2] || 0,
                  S = O ? f[3] : 1;
                (m.x = f[4] || 0),
                  (m.y = f[5] || 0),
                  (i = Math.sqrt(P * P + Q * Q)),
                  (j = Math.sqrt(S * S + R * R)),
                  (k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0),
                  (l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0),
                  (m.scaleX = i),
                  (m.scaleY = j),
                  (m.rotation = k),
                  (m.skewX = l),
                  Fa &&
                    ((m.rotationX = m.rotationY = m.z = 0),
                    (m.perspective = r),
                    (m.scaleZ = 1)),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)),
                    (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
              }
              Math.abs(m.skewX) > 90 &&
                Math.abs(m.skewX) < 270 &&
                (n
                  ? ((m.scaleX *= -1),
                    (m.skewX += m.rotation <= 0 ? 180 : -180),
                    (m.rotation += m.rotation <= 0 ? 180 : -180))
                  : ((m.scaleY *= -1), (m.skewX += m.skewX <= 0 ? 180 : -180))),
                (m.zOrigin = q);
              for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
            }
            return (
              d &&
                ((a._gsTransform = m),
                m.svg &&
                  (Aa && a.style[Ca]
                    ? b.delayedCall(0.001, function () {
                        Va(a.style, Ca);
                      })
                    : !Aa &&
                      a.getAttribute("transform") &&
                      b.delayedCall(0.001, function () {
                        a.removeAttribute("transform");
                      }))),
              m
            );
          }),
          Sa = function (a) {
            var b,
              c,
              d = this.data,
              e = -d.rotation * K,
              f = e + d.skewX * K,
              g = 1e5,
              h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
              i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
              j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
              k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
              l = this.t.style,
              m = this.t.currentStyle;
            if (m) {
              (c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
              var n,
                o,
                q = this.t.offsetWidth,
                r = this.t.offsetHeight,
                s = "absolute" !== m.position,
                t =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  h +
                  ", M12=" +
                  i +
                  ", M21=" +
                  j +
                  ", M22=" +
                  k,
                u = d.x + (q * d.xPercent) / 100,
                v = d.y + (r * d.yPercent) / 100;
              if (
                (null != d.ox &&
                  ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2),
                  (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2),
                  (u += n - (n * h + o * i)),
                  (v += o - (n * j + o * k))),
                s
                  ? ((n = q / 2),
                    (o = r / 2),
                    (t +=
                      ", Dx=" +
                      (n - (n * h + o * i) + u) +
                      ", Dy=" +
                      (o - (n * j + o * k) + v) +
                      ")"))
                  : (t += ", sizingMethod='auto expand')"),
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (l.filter = b.replace(H, t))
                  : (l.filter = t + " " + b),
                (0 === a || 1 === a) &&
                  1 === h &&
                  0 === i &&
                  0 === j &&
                  1 === k &&
                  ((s && -1 === t.indexOf("Dx=0, Dy=0")) ||
                    (x.test(b) && 100 !== parseFloat(RegExp.$1)) ||
                    (-1 === b.indexOf(b.indexOf("Alpha")) &&
                      l.removeAttribute("filter"))),
                !s)
              ) {
                var y,
                  z,
                  A,
                  B = 8 > p ? 1 : -1;
                for (
                  n = d.ieOffsetX || 0,
                    o = d.ieOffsetY || 0,
                    d.ieOffsetX = Math.round(
                      (q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 +
                        u
                    ),
                    d.ieOffsetY = Math.round(
                      (r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 +
                        v
                    ),
                    wa = 0;
                  4 > wa;
                  wa++
                )
                  (z = fa[wa]),
                    (y = m[z]),
                    (c =
                      -1 !== y.indexOf("px")
                        ? parseFloat(y)
                        : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0),
                    (A =
                      c !== d[z]
                        ? 2 > wa
                          ? -d.ieOffsetX
                          : -d.ieOffsetY
                        : 2 > wa
                        ? n - d.ieOffsetX
                        : o - d.ieOffsetY),
                    (l[z] =
                      (d[z] = Math.round(
                        c - A * (0 === wa || 2 === wa ? 1 : B)
                      )) + "px");
              }
            }
          },
          Ta =
            (S.set3DTransformRatio =
            S.setTransformRatio =
              function (a) {
                var b,
                  c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  o,
                  p,
                  q,
                  r,
                  s,
                  t,
                  u,
                  v,
                  w,
                  x,
                  y,
                  z = this.data,
                  A = this.t.style,
                  B = z.rotation,
                  C = z.rotationX,
                  D = z.rotationY,
                  E = z.scaleX,
                  F = z.scaleY,
                  G = z.scaleZ,
                  H = z.x,
                  I = z.y,
                  J = z.z,
                  L = z.svg,
                  M = z.perspective,
                  N = z.force3D,
                  O = z.skewY,
                  P = z.skewX;
                if (
                  (O && ((P += O), (B += O)),
                  ((((1 === a || 0 === a) &&
                    "auto" === N &&
                    (this.tween._totalTime === this.tween._totalDuration ||
                      !this.tween._totalTime)) ||
                    !N) &&
                    !J &&
                    !M &&
                    !D &&
                    !C &&
                    1 === G) ||
                    (Aa && L) ||
                    !Fa)
                )
                  return void (B || P || L
                    ? ((B *= K),
                      (x = P * K),
                      (y = 1e5),
                      (c = Math.cos(B) * E),
                      (f = Math.sin(B) * E),
                      (d = Math.sin(B - x) * -F),
                      (g = Math.cos(B - x) * F),
                      x &&
                        "simple" === z.skewType &&
                        ((b = Math.tan(x - O * K)),
                        (b = Math.sqrt(1 + b * b)),
                        (d *= b),
                        (g *= b),
                        O &&
                          ((b = Math.tan(O * K)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b))),
                      L &&
                        ((H +=
                          z.xOrigin -
                          (z.xOrigin * c + z.yOrigin * d) +
                          z.xOffset),
                        (I +=
                          z.yOrigin -
                          (z.xOrigin * f + z.yOrigin * g) +
                          z.yOffset),
                        Aa &&
                          (z.xPercent || z.yPercent) &&
                          ((q = this.t.getBBox()),
                          (H += 0.01 * z.xPercent * q.width),
                          (I += 0.01 * z.yPercent * q.height)),
                        (q = 1e-6),
                        q > H && H > -q && (H = 0),
                        q > I && I > -q && (I = 0)),
                      (u =
                        ((c * y) | 0) / y +
                        "," +
                        ((f * y) | 0) / y +
                        "," +
                        ((d * y) | 0) / y +
                        "," +
                        ((g * y) | 0) / y +
                        "," +
                        H +
                        "," +
                        I +
                        ")"),
                      L && Aa
                        ? this.t.setAttribute("transform", "matrix(" + u)
                        : (A[Ca] =
                            (z.xPercent || z.yPercent
                              ? "translate(" +
                                z.xPercent +
                                "%," +
                                z.yPercent +
                                "%) matrix("
                              : "matrix(") + u))
                    : (A[Ca] =
                        (z.xPercent || z.yPercent
                          ? "translate(" +
                            z.xPercent +
                            "%," +
                            z.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        E +
                        ",0,0," +
                        F +
                        "," +
                        H +
                        "," +
                        I +
                        ")"));
                if (
                  (n &&
                    ((q = 1e-4),
                    q > E && E > -q && (E = G = 2e-5),
                    q > F && F > -q && (F = G = 2e-5),
                    !M || z.z || z.rotationX || z.rotationY || (M = 0)),
                  B || P)
                )
                  (B *= K),
                    (r = c = Math.cos(B)),
                    (s = f = Math.sin(B)),
                    P &&
                      ((B -= P * K),
                      (r = Math.cos(B)),
                      (s = Math.sin(B)),
                      "simple" === z.skewType &&
                        ((b = Math.tan((P - O) * K)),
                        (b = Math.sqrt(1 + b * b)),
                        (r *= b),
                        (s *= b),
                        z.skewY &&
                          ((b = Math.tan(O * K)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b)))),
                    (d = -s),
                    (g = r);
                else {
                  if (!(D || C || 1 !== G || M || L))
                    return void (A[Ca] =
                      (z.xPercent || z.yPercent
                        ? "translate(" +
                          z.xPercent +
                          "%," +
                          z.yPercent +
                          "%) translate3d("
                        : "translate3d(") +
                      H +
                      "px," +
                      I +
                      "px," +
                      J +
                      "px)" +
                      (1 !== E || 1 !== F
                        ? " scale(" + E + "," + F + ")"
                        : ""));
                  (c = g = 1), (d = f = 0);
                }
                (k = 1),
                  (e = h = i = j = l = m = 0),
                  (o = M ? -1 / M : 0),
                  (p = z.zOrigin),
                  (q = 1e-6),
                  (v = ","),
                  (w = "0"),
                  (B = D * K),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (i = -s),
                    (l = o * -s),
                    (e = c * s),
                    (h = f * s),
                    (k = r),
                    (o *= r),
                    (c *= r),
                    (f *= r)),
                  (B = C * K),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (b = d * r + e * s),
                    (t = g * r + h * s),
                    (j = k * s),
                    (m = o * s),
                    (e = d * -s + e * r),
                    (h = g * -s + h * r),
                    (k *= r),
                    (o *= r),
                    (d = b),
                    (g = t)),
                  1 !== G && ((e *= G), (h *= G), (k *= G), (o *= G)),
                  1 !== F && ((d *= F), (g *= F), (j *= F), (m *= F)),
                  1 !== E && ((c *= E), (f *= E), (i *= E), (l *= E)),
                  (p || L) &&
                    (p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
                    L &&
                      ((H +=
                        z.xOrigin -
                        (z.xOrigin * c + z.yOrigin * d) +
                        z.xOffset),
                      (I +=
                        z.yOrigin -
                        (z.xOrigin * f + z.yOrigin * g) +
                        z.yOffset)),
                    q > H && H > -q && (H = w),
                    q > I && I > -q && (I = w),
                    q > J && J > -q && (J = 0)),
                  (u =
                    z.xPercent || z.yPercent
                      ? "translate(" +
                        z.xPercent +
                        "%," +
                        z.yPercent +
                        "%) matrix3d("
                      : "matrix3d("),
                  (u +=
                    (q > c && c > -q ? w : c) +
                    v +
                    (q > f && f > -q ? w : f) +
                    v +
                    (q > i && i > -q ? w : i)),
                  (u +=
                    v +
                    (q > l && l > -q ? w : l) +
                    v +
                    (q > d && d > -q ? w : d) +
                    v +
                    (q > g && g > -q ? w : g)),
                  C || D || 1 !== G
                    ? ((u +=
                        v +
                        (q > j && j > -q ? w : j) +
                        v +
                        (q > m && m > -q ? w : m) +
                        v +
                        (q > e && e > -q ? w : e)),
                      (u +=
                        v +
                        (q > h && h > -q ? w : h) +
                        v +
                        (q > k && k > -q ? w : k) +
                        v +
                        (q > o && o > -q ? w : o) +
                        v))
                    : (u += ",0,0,0,0,1,0,"),
                  (u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")"),
                  (A[Ca] = u);
              });
        (j = Ga.prototype),
          (j.x =
            j.y =
            j.z =
            j.skewX =
            j.skewY =
            j.rotation =
            j.rotationX =
            j.rotationY =
            j.zOrigin =
            j.xPercent =
            j.yPercent =
            j.xOffset =
            j.yOffset =
              0),
          (j.scaleX = j.scaleY = j.scaleZ = 1),
          ya(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                d._lastParsedTransform = i;
                var j,
                  k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                "function" == typeof i[c] && ((j = i[c]), (i[c] = b)),
                  k && (i.scale = k(r, a));
                var l,
                  m,
                  n,
                  o,
                  p,
                  s,
                  t,
                  u,
                  v,
                  w = a._gsTransform,
                  x = a.style,
                  y = 1e-6,
                  z = Ba.length,
                  A = i,
                  B = {},
                  C = "transformOrigin",
                  D = Ra(a, e, !0, A.parseTransform),
                  E =
                    A.transform &&
                    ("function" == typeof A.transform
                      ? A.transform(r, q)
                      : A.transform);
                if (
                  ((D.skewType = A.skewType || D.skewType || g.defaultSkewType),
                  (d._transform = D),
                  E && "string" == typeof E && Ca)
                )
                  (m = Q.style),
                    (m[Ca] = E),
                    (m.display = "block"),
                    (m.position = "absolute"),
                    O.body.appendChild(Q),
                    (l = Ra(Q, null, !1)),
                    "simple" === D.skewType &&
                      (l.scaleY *= Math.cos(l.skewX * K)),
                    D.svg &&
                      ((s = D.xOrigin),
                      (t = D.yOrigin),
                      (l.x -= D.xOffset),
                      (l.y -= D.yOffset),
                      (A.transformOrigin || A.svgOrigin) &&
                        ((E = {}),
                        La(
                          a,
                          ha(A.transformOrigin),
                          E,
                          A.svgOrigin,
                          A.smoothOrigin,
                          !0
                        ),
                        (s = E.xOrigin),
                        (t = E.yOrigin),
                        (l.x -= E.xOffset - D.xOffset),
                        (l.y -= E.yOffset - D.yOffset)),
                      (s || t) &&
                        ((u = Qa(Q, !0)),
                        (l.x -= s - (s * u[0] + t * u[2])),
                        (l.y -= t - (s * u[1] + t * u[3])))),
                    O.body.removeChild(Q),
                    l.perspective || (l.perspective = D.perspective),
                    null != A.xPercent &&
                      (l.xPercent = ja(A.xPercent, D.xPercent)),
                    null != A.yPercent &&
                      (l.yPercent = ja(A.yPercent, D.yPercent));
                else if ("object" == typeof A) {
                  if (
                    ((l = {
                      scaleX: ja(
                        null != A.scaleX ? A.scaleX : A.scale,
                        D.scaleX
                      ),
                      scaleY: ja(
                        null != A.scaleY ? A.scaleY : A.scale,
                        D.scaleY
                      ),
                      scaleZ: ja(A.scaleZ, D.scaleZ),
                      x: ja(A.x, D.x),
                      y: ja(A.y, D.y),
                      z: ja(A.z, D.z),
                      xPercent: ja(A.xPercent, D.xPercent),
                      yPercent: ja(A.yPercent, D.yPercent),
                      perspective: ja(A.transformPerspective, D.perspective),
                    }),
                    (p = A.directionalRotation),
                    null != p)
                  )
                    if ("object" == typeof p) for (m in p) A[m] = p[m];
                    else A.rotation = p;
                  "string" == typeof A.x &&
                    -1 !== A.x.indexOf("%") &&
                    ((l.x = 0), (l.xPercent = ja(A.x, D.xPercent))),
                    "string" == typeof A.y &&
                      -1 !== A.y.indexOf("%") &&
                      ((l.y = 0), (l.yPercent = ja(A.y, D.yPercent))),
                    (l.rotation = ka(
                      "rotation" in A
                        ? A.rotation
                        : "shortRotation" in A
                        ? A.shortRotation + "_short"
                        : "rotationZ" in A
                        ? A.rotationZ
                        : D.rotation,
                      D.rotation,
                      "rotation",
                      B
                    )),
                    Fa &&
                      ((l.rotationX = ka(
                        "rotationX" in A
                          ? A.rotationX
                          : "shortRotationX" in A
                          ? A.shortRotationX + "_short"
                          : D.rotationX || 0,
                        D.rotationX,
                        "rotationX",
                        B
                      )),
                      (l.rotationY = ka(
                        "rotationY" in A
                          ? A.rotationY
                          : "shortRotationY" in A
                          ? A.shortRotationY + "_short"
                          : D.rotationY || 0,
                        D.rotationY,
                        "rotationY",
                        B
                      ))),
                    (l.skewX = ka(A.skewX, D.skewX)),
                    (l.skewY = ka(A.skewY, D.skewY));
                }
                for (
                  Fa &&
                    null != A.force3D &&
                    ((D.force3D = A.force3D), (o = !0)),
                    n =
                      D.force3D ||
                      D.z ||
                      D.rotationX ||
                      D.rotationY ||
                      l.z ||
                      l.rotationX ||
                      l.rotationY ||
                      l.perspective,
                    n || null == A.scale || (l.scaleZ = 1);
                  --z > -1;

                )
                  (v = Ba[z]),
                    (E = l[v] - D[v]),
                    (E > y || -y > E || null != A[v] || null != M[v]) &&
                      ((o = !0),
                      (f = new ta(D, v, D[v], E, f)),
                      v in B && (f.e = B[v]),
                      (f.xs0 = 0),
                      (f.plugin = h),
                      d._overwriteProps.push(f.n));
                return (
                  (E = A.transformOrigin),
                  D.svg &&
                    (E || A.svgOrigin) &&
                    ((s = D.xOffset),
                    (t = D.yOffset),
                    La(a, ha(E), l, A.svgOrigin, A.smoothOrigin),
                    (f = ua(
                      D,
                      "xOrigin",
                      (w ? D : l).xOrigin,
                      l.xOrigin,
                      f,
                      C
                    )),
                    (f = ua(
                      D,
                      "yOrigin",
                      (w ? D : l).yOrigin,
                      l.yOrigin,
                      f,
                      C
                    )),
                    (s !== D.xOffset || t !== D.yOffset) &&
                      ((f = ua(
                        D,
                        "xOffset",
                        w ? s : D.xOffset,
                        D.xOffset,
                        f,
                        C
                      )),
                      (f = ua(
                        D,
                        "yOffset",
                        w ? t : D.yOffset,
                        D.yOffset,
                        f,
                        C
                      ))),
                    (E = "0px 0px")),
                  (E || (Fa && n && D.zOrigin)) &&
                    (Ca
                      ? ((o = !0),
                        (v = Ea),
                        (E = (E || _(a, v, e, !1, "50% 50%")) + ""),
                        (f = new ta(x, v, 0, 0, f, -1, C)),
                        (f.b = x[v]),
                        (f.plugin = h),
                        Fa
                          ? ((m = D.zOrigin),
                            (E = E.split(" ")),
                            (D.zOrigin =
                              (E.length > 2 && (0 === m || "0px" !== E[2])
                                ? parseFloat(E[2])
                                : m) || 0),
                            (f.xs0 = f.e =
                              E[0] + " " + (E[1] || "50%") + " 0px"),
                            (f = new ta(D, "zOrigin", 0, 0, f, -1, f.n)),
                            (f.b = m),
                            (f.xs0 = f.e = D.zOrigin))
                          : (f.xs0 = f.e = E))
                      : ha(E + "", D)),
                  o &&
                    (d._transformType =
                      (D.svg && Aa) || (!n && 3 !== this._transformType)
                        ? 2
                        : 3),
                  j && (i[c] = j),
                  k && (i.scale = k),
                  f
                );
              },
              prefix: !0,
            }
          ),
          ya("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          ya("borderRadius", {
            defaultValue: "0px",
            parser: function (a, b, c, f, g, h) {
              b = this.format(b);
              var i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                z = a.style;
              for (
                q = parseFloat(a.offsetWidth),
                  r = parseFloat(a.offsetHeight),
                  i = b.split(" "),
                  j = 0;
                j < y.length;
                j++
              )
                this.p.indexOf("border") && (y[j] = Z(y[j])),
                  (m = l = _(a, y[j], e, !1, "0px")),
                  -1 !== m.indexOf(" ") &&
                    ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                  (n = k = i[j]),
                  (o = parseFloat(m)),
                  (t = m.substr((o + "").length)),
                  (u = "=" === n.charAt(1)),
                  u
                    ? ((p = parseInt(n.charAt(0) + "1", 10)),
                      (n = n.substr(2)),
                      (p *= parseFloat(n)),
                      (s = n.substr((p + "").length - (0 > p ? 1 : 0)) || ""))
                    : ((p = parseFloat(n)), (s = n.substr((p + "").length))),
                  "" === s && (s = d[c] || t),
                  s !== t &&
                    ((v = aa(a, "borderLeft", o, t)),
                    (w = aa(a, "borderTop", o, t)),
                    "%" === s
                      ? ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%"))
                      : "em" === s
                      ? ((x = aa(a, "borderLeft", 1, "em")),
                        (m = v / x + "em"),
                        (l = w / x + "em"))
                      : ((m = v + "px"), (l = w + "px")),
                    u &&
                      ((n = parseFloat(m) + p + s),
                      (k = parseFloat(l) + p + s))),
                  (g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g));
              return g;
            },
            prefix: !0,
            formatter: qa("0px 0px 0px 0px", !1, !0),
          }),
          ya(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (a, b, c, d, f, g) {
                return va(
                  a.style,
                  c,
                  this.format(_(a, c, e, !1, "0px 0px")),
                  this.format(b),
                  !1,
                  "0px",
                  f
                );
              },
              prefix: !0,
              formatter: qa("0px 0px", !1, !0),
            }
          ),
          ya("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (a, b, c, d, f, g) {
              var h,
                i,
                j,
                k,
                l,
                m,
                n = "background-position",
                o = e || $(a, null),
                q = this.format(
                  (o
                    ? p
                      ? o.getPropertyValue(n + "-x") +
                        " " +
                        o.getPropertyValue(n + "-y")
                      : o.getPropertyValue(n)
                    : a.currentStyle.backgroundPositionX +
                      " " +
                      a.currentStyle.backgroundPositionY) || "0 0"
                ),
                r = this.format(b);
              if (
                (-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) &&
                r.split(",").length < 2 &&
                ((m = _(a, "backgroundImage").replace(D, "")),
                m && "none" !== m)
              ) {
                for (
                  h = q.split(" "),
                    i = r.split(" "),
                    R.setAttribute("src", m),
                    j = 2;
                  --j > -1;

                )
                  (q = h[j]),
                    (k = -1 !== q.indexOf("%")),
                    k !== (-1 !== i[j].indexOf("%")) &&
                      ((l =
                        0 === j
                          ? a.offsetWidth - R.width
                          : a.offsetHeight - R.height),
                      (h[j] = k
                        ? (parseFloat(q) / 100) * l + "px"
                        : (parseFloat(q) / l) * 100 + "%"));
                q = h.join(" ");
              }
              return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: ha,
          }),
          ya("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (a) {
              return (a += ""), ha(-1 === a.indexOf(" ") ? a + " " + a : a);
            },
          }),
          ya("perspective", { defaultValue: "0px", prefix: !0 }),
          ya("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          ya("transformStyle", { prefix: !0 }),
          ya("backfaceVisibility", { prefix: !0 }),
          ya("userSelect", { prefix: !0 }),
          ya("margin", {
            parser: ra("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          ya("padding", {
            parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          ya("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (a, b, c, d, f, g) {
              var h, i, j;
              return (
                9 > p
                  ? ((i = a.currentStyle),
                    (j = 8 > p ? " " : ","),
                    (h =
                      "rect(" +
                      i.clipTop +
                      j +
                      i.clipRight +
                      j +
                      i.clipBottom +
                      j +
                      i.clipLeft +
                      ")"),
                    (b = this.format(b).split(",").join(j)))
                  : ((h = this.format(_(a, this.p, e, !1, this.dflt))),
                    (b = this.format(b))),
                this.parseComplex(a.style, h, b, f, g)
              );
            },
          }),
          ya("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          ya("autoRound,strictUnits", {
            parser: function (a, b, c, d, e) {
              return e;
            },
          }),
          ya("border", {
            defaultValue: "0px solid #000",
            parser: function (a, b, c, d, f, g) {
              var h = _(a, "borderTopWidth", e, !1, "0px"),
                i = this.format(b).split(" "),
                j = i[0].replace(w, "");
              return (
                "px" !== j &&
                  (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j),
                this.parseComplex(
                  a.style,
                  this.format(
                    h +
                      " " +
                      _(a, "borderTopStyle", e, !1, "solid") +
                      " " +
                      _(a, "borderTopColor", e, !1, "#000")
                  ),
                  i.join(" "),
                  f,
                  g
                )
              );
            },
            color: !0,
            formatter: function (a) {
              var b = a.split(" ");
              return (
                b[0] +
                " " +
                (b[1] || "solid") +
                " " +
                (a.match(pa) || ["#000"])[0]
              );
            },
          }),
          ya("borderWidth", {
            parser: ra(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          ya("float,cssFloat,styleFloat", {
            parser: function (a, b, c, d, e, f) {
              var g = a.style,
                h = "cssFloat" in g ? "cssFloat" : "styleFloat";
              return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
            },
          });
        var Ua = function (a) {
          var b,
            c = this.t,
            d = c.filter || _(this.data, "filter") || "",
            e = (this.s + this.c * a) | 0;
          100 === e &&
            (-1 === d.indexOf("atrix(") &&
            -1 === d.indexOf("radient(") &&
            -1 === d.indexOf("oader(")
              ? (c.removeAttribute("filter"), (b = !_(this.data, "filter")))
              : ((c.filter = d.replace(z, "")), (b = !0))),
            b ||
              (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
              -1 === d.indexOf("pacity")
                ? (0 === e && this.xn1) ||
                  (c.filter = d + " alpha(opacity=" + e + ")")
                : (c.filter = d.replace(x, "opacity=" + e)));
        };
        ya("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (a, b, c, d, f, g) {
            var h = parseFloat(_(a, "opacity", e, !1, "1")),
              i = a.style,
              j = "autoAlpha" === c;
            return (
              "string" == typeof b &&
                "=" === b.charAt(1) &&
                (b =
                  ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
              j &&
                1 === h &&
                "hidden" === _(a, "visibility", e) &&
                0 !== b &&
                (h = 0),
              U
                ? (f = new ta(i, "opacity", h, b - h, f))
                : ((f = new ta(i, "opacity", 100 * h, 100 * (b - h), f)),
                  (f.xn1 = j ? 1 : 0),
                  (i.zoom = 1),
                  (f.type = 2),
                  (f.b = "alpha(opacity=" + f.s + ")"),
                  (f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
                  (f.data = a),
                  (f.plugin = g),
                  (f.setRatio = Ua)),
              j &&
                ((f = new ta(
                  i,
                  "visibility",
                  0,
                  0,
                  f,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== h ? "inherit" : "hidden",
                  0 === b ? "hidden" : "inherit"
                )),
                (f.xs0 = "inherit"),
                d._overwriteProps.push(f.n),
                d._overwriteProps.push(c)),
              f
            );
          },
        });
        var Va = function (a, b) {
            b &&
              (a.removeProperty
                ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) &&
                    (b = "-" + b),
                  a.removeProperty(b.replace(B, "-$1").toLowerCase()))
                : a.removeAttribute(b));
          },
          Wa = function (a) {
            if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
              this.t.setAttribute("class", 0 === a ? this.b : this.e);
              for (var b = this.data, c = this.t.style; b; )
                b.v ? (c[b.p] = b.v) : Va(c, b.p), (b = b._next);
              1 === a &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        ya("className", {
          parser: function (a, b, d, f, g, h, i) {
            var j,
              k,
              l,
              m,
              n,
              o = a.getAttribute("class") || "",
              p = a.style.cssText;
            if (
              ((g = f._classNamePT = new ta(a, d, 0, 0, g, 2)),
              (g.setRatio = Wa),
              (g.pr = -11),
              (c = !0),
              (g.b = o),
              (k = ca(a, e)),
              (l = a._gsClassPT))
            ) {
              for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next);
              l.setRatio(1);
            }
            return (
              (a._gsClassPT = g),
              (g.e =
                "=" !== b.charAt(1)
                  ? b
                  : o.replace(
                      new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
              a.setAttribute("class", g.e),
              (j = da(a, k, ca(a), i, m)),
              a.setAttribute("class", o),
              (g.data = j.firstMPT),
              (a.style.cssText = p),
              (g = g.xfirst = f.parse(a, j.difs, g, h))
            );
          },
        });
        var Xa = function (a) {
          if (
            (1 === a || 0 === a) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var b,
              c,
              d,
              e,
              f,
              g = this.t.style,
              h = i.transform.parse;
            if ("all" === this.e) (g.cssText = ""), (e = !0);
            else
              for (
                b = this.e.split(" ").join("").split(","), d = b.length;
                --d > -1;

              )
                (c = b[d]),
                  i[c] &&
                    (i[c].parse === h
                      ? (e = !0)
                      : (c = "transformOrigin" === c ? Ea : i[c].p)),
                  Va(g, c);
            e &&
              (Va(g, Ca),
              (f = this.t._gsTransform),
              f &&
                (f.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          ya("clearProps", {
            parser: function (a, b, d, e, f) {
              return (
                (f = new ta(a, d, 0, 0, f, 2)),
                (f.setRatio = Xa),
                (f.e = b),
                (f.pr = -10),
                (f.data = e._tween),
                (c = !0),
                f
              );
            },
          }),
            j = "bezier,throwProps,physicsProps,physics2D".split(","),
            wa = j.length;
          wa--;

        )
          za(j[wa]);
        (j = g.prototype),
          (j._firstPT = j._lastParsedTransform = j._transform = null),
          (j._onInitTween = function (a, b, h, j) {
            if (!a.nodeType) return !1;
            (this._target = q = a),
              (this._tween = h),
              (this._vars = b),
              (r = j),
              (k = b.autoRound),
              (c = !1),
              (d = b.suffixMap || g.suffixMap),
              (e = $(a, "")),
              (f = this._overwriteProps);
            var n,
              p,
              s,
              t,
              u,
              v,
              w,
              x,
              z,
              A = a.style;
            if (
              (l &&
                "" === A.zIndex &&
                ((n = _(a, "zIndex", e)),
                ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
              "string" == typeof b &&
                ((t = A.cssText),
                (n = ca(a, e)),
                (A.cssText = t + ";" + b),
                (n = da(a, n, ca(a)).difs),
                !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)),
                (b = n),
                (A.cssText = t)),
              b.className
                ? (this._firstPT = p =
                    i.className.parse(
                      a,
                      b.className,
                      "className",
                      this,
                      null,
                      null,
                      b
                    ))
                : (this._firstPT = p = this.parse(a, b, null)),
              this._transformType)
            ) {
              for (
                z = 3 === this._transformType,
                  Ca
                    ? m &&
                      ((l = !0),
                      "" === A.zIndex &&
                        ((w = _(a, "zIndex", e)),
                        ("auto" === w || "" === w) &&
                          this._addLazySet(A, "zIndex", 0)),
                      o &&
                        this._addLazySet(
                          A,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (z ? "visible" : "hidden")
                        ))
                    : (A.zoom = 1),
                  s = p;
                s && s._next;

              )
                s = s._next;
              (x = new ta(a, "transform", 0, 0, null, 2)),
                this._linkCSSP(x, null, s),
                (x.setRatio = Ca ? Ta : Sa),
                (x.data = this._transform || Ra(a, e, !0)),
                (x.tween = h),
                (x.pr = -1),
                f.pop();
            }
            if (c) {
              for (; p; ) {
                for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
                (p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p),
                  (p._next = s) ? (s._prev = p) : (u = p),
                  (p = v);
              }
              this._firstPT = t;
            }
            return !0;
          }),
          (j.parse = function (a, b, c, f) {
            var g,
              h,
              j,
              l,
              m,
              n,
              o,
              p,
              s,
              t,
              u = a.style;
            for (g in b) {
              if (
                ((n = b[g]),
                "function" == typeof n && (n = n(r, q)),
                (h = i[g]))
              )
                c = h.parse(a, n, g, this, c, f, b);
              else {
                if ("--" === g.substr(0, 2)) {
                  this._tween._propLookup[g] = this._addTween.call(
                    this._tween,
                    a.style,
                    "setProperty",
                    $(a).getPropertyValue(g) + "",
                    n + "",
                    g,
                    !1,
                    g
                  );
                  continue;
                }
                (m = _(a, g, e) + ""),
                  (s = "string" == typeof n),
                  "color" === g ||
                  "fill" === g ||
                  "stroke" === g ||
                  -1 !== g.indexOf("Color") ||
                  (s && A.test(n))
                    ? (s ||
                        ((n = na(n)),
                        (n =
                          (n.length > 3 ? "rgba(" : "rgb(") +
                          n.join(",") +
                          ")")),
                      (c = va(u, g, m, n, !0, "transparent", c, 0, f)))
                    : s && J.test(n)
                    ? (c = va(u, g, m, n, !0, null, c, 0, f))
                    : ((j = parseFloat(m)),
                      (o = j || 0 === j ? m.substr((j + "").length) : ""),
                      ("" === m || "auto" === m) &&
                        ("width" === g || "height" === g
                          ? ((j = ga(a, g, e)), (o = "px"))
                          : "left" === g || "top" === g
                          ? ((j = ba(a, g, e)), (o = "px"))
                          : ((j = "opacity" !== g ? 0 : 1), (o = ""))),
                      (t = s && "=" === n.charAt(1)),
                      t
                        ? ((l = parseInt(n.charAt(0) + "1", 10)),
                          (n = n.substr(2)),
                          (l *= parseFloat(n)),
                          (p = n.replace(w, "")))
                        : ((l = parseFloat(n)),
                          (p = s ? n.replace(w, "") : "")),
                      "" === p && (p = g in d ? d[g] : o),
                      (n = l || 0 === l ? (t ? l + j : l) + p : b[g]),
                      o !== p &&
                        ("" !== p || "lineHeight" === g) &&
                        (l || 0 === l) &&
                        j &&
                        ((j = aa(a, g, j, o)),
                        "%" === p
                          ? ((j /= aa(a, g, 100, "%") / 100),
                            b.strictUnits !== !0 && (m = j + "%"))
                          : "em" === p ||
                            "rem" === p ||
                            "vw" === p ||
                            "vh" === p
                          ? (j /= aa(a, g, 1, p))
                          : "px" !== p && ((l = aa(a, g, l, p)), (p = "px")),
                        t && (l || 0 === l) && (n = l + j + p)),
                      t && (l += j),
                      (!j && 0 !== j) || (!l && 0 !== l)
                        ? void 0 !== u[g] &&
                          (n || (n + "" != "NaN" && null != n))
                          ? ((c = new ta(
                              u,
                              g,
                              l || j || 0,
                              0,
                              c,
                              -1,
                              g,
                              !1,
                              0,
                              m,
                              n
                            )),
                            (c.xs0 =
                              "none" !== n ||
                              ("display" !== g && -1 === g.indexOf("Style"))
                                ? n
                                : m))
                          : W("invalid " + g + " tween value: " + b[g])
                        : ((c = new ta(
                            u,
                            g,
                            j,
                            l - j,
                            c,
                            0,
                            g,
                            k !== !1 && ("px" === p || "zIndex" === g),
                            0,
                            m,
                            n
                          )),
                          (c.xs0 = p)));
              }
              f && c && !c.plugin && (c.plugin = f);
            }
            return c;
          }),
          (j.setRatio = function (a) {
            var b,
              c,
              d,
              e = this._firstPT,
              f = 1e-6;
            if (
              1 !== a ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                a ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                this._tween._rawPrevTime === -1e-6
              )
                for (; e; ) {
                  if (
                    ((b = e.c * a + e.s),
                    e.r ? (b = Math.round(b)) : f > b && b > -f && (b = 0),
                    e.type)
                  )
                    if (1 === e.type)
                      if (((d = e.l), 2 === d))
                        e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                      else if (3 === d)
                        e.t[e.p] =
                          e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                      else if (4 === d)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4;
                      else if (5 === d)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4 +
                          e.xn4 +
                          e.xs5;
                      else {
                        for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)
                          c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                      }
                    else
                      -1 === e.type
                        ? (e.t[e.p] = e.xs0)
                        : e.setRatio && e.setRatio(a);
                  else e.t[e.p] = b + e.xs0;
                  e = e._next;
                }
              else
                for (; e; )
                  2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a),
                    (e = e._next);
            else
              for (; e; ) {
                if (2 !== e.type)
                  if (e.r && -1 !== e.type)
                    if (((b = Math.round(e.s + e.c)), e.type)) {
                      if (1 === e.type) {
                        for (
                          d = e.l, c = e.xs0 + b + e.xs1, d = 1;
                          d < e.l;
                          d++
                        )
                          c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                      }
                    } else e.t[e.p] = b + e.xs0;
                  else e.t[e.p] = e.e;
                else e.setRatio(a);
                e = e._next;
              }
          }),
          (j._enableTransforms = function (a) {
            (this._transform = this._transform || Ra(this._target, e, !0)),
              (this._transformType =
                (this._transform.svg && Aa) || (!a && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Ya = function (a) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (j._addLazySet = function (a, b, c) {
          var d = (this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2));
          (d.e = c), (d.setRatio = Ya), (d.data = this);
        }),
          (j._linkCSSP = function (a, b, c, d) {
            return (
              a &&
                (b && (b._prev = a),
                a._next && (a._next._prev = a._prev),
                a._prev
                  ? (a._prev._next = a._next)
                  : this._firstPT === a &&
                    ((this._firstPT = a._next), (d = !0)),
                c
                  ? (c._next = a)
                  : d || null !== this._firstPT || (this._firstPT = a),
                (a._next = b),
                (a._prev = c)),
              a
            );
          }),
          (j._mod = function (a) {
            for (var b = this._firstPT; b; )
              "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1),
                (b = b._next);
          }),
          (j._kill = function (b) {
            var c,
              d,
              e,
              f = b;
            if (b.autoAlpha || b.alpha) {
              f = {};
              for (d in b) f[d] = b[d];
              (f.opacity = 1), f.autoAlpha && (f.visibility = 1);
            }
            for (
              b.className &&
                (c = this._classNamePT) &&
                ((e = c.xfirst),
                e && e._prev
                  ? this._linkCSSP(e._prev, c._next, e._prev._prev)
                  : e === this._firstPT && (this._firstPT = c._next),
                c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                (this._classNamePT = null)),
                c = this._firstPT;
              c;

            )
              c.plugin &&
                c.plugin !== d &&
                c.plugin._kill &&
                (c.plugin._kill(b), (d = c.plugin)),
                (c = c._next);
            return a.prototype._kill.call(this, f);
          });
        var Za = function (a, b, c) {
          var d, e, f, g;
          if (a.slice) for (e = a.length; --e > -1; ) Za(a[e], b, c);
          else
            for (d = a.childNodes, e = d.length; --e > -1; )
              (f = d[e]),
                (g = f.type),
                f.style && (b.push(ca(f)), c && c.push(f)),
                (1 !== g && 9 !== g && 11 !== g) ||
                  !f.childNodes.length ||
                  Za(f, b, c);
        };
        return (
          (g.cascadeTo = function (a, c, d) {
            var e,
              f,
              g,
              h,
              i = b.to(a, c, d),
              j = [i],
              k = [],
              l = [],
              m = [],
              n = b._internals.reservedProps;
            for (
              a = i._targets || i.target,
                Za(a, k, m),
                i.render(c, !0, !0),
                Za(a, l),
                i.render(0, !0, !0),
                i._enabled(!0),
                e = m.length;
              --e > -1;

            )
              if (((f = da(m[e], k[e], l[e])), f.firstMPT)) {
                f = f.difs;
                for (g in d) n[g] && (f[g] = d[g]);
                h = {};
                for (g in f) h[g] = k[e][g];
                j.push(b.fromTo(m[e], c, h, f));
              }
            return j;
          }),
          a.activate([g]),
          g
        );
      },
      !0
    ),
    (function () {
      var a = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.6.0",
          priority: -1,
          API: 2,
          init: function (a, b, c) {
            return (this._tween = c), !0;
          },
        }),
        b = function (a) {
          for (; a; ) a.f || a.blob || (a.m = Math.round), (a = a._next);
        },
        c = a.prototype;
      (c._onInitAllProps = function () {
        for (
          var a,
            c,
            d,
            e = this._tween,
            f = e.vars.roundProps.join
              ? e.vars.roundProps
              : e.vars.roundProps.split(","),
            g = f.length,
            h = {},
            i = e._propLookup.roundProps;
          --g > -1;

        )
          h[f[g]] = Math.round;
        for (g = f.length; --g > -1; )
          for (a = f[g], c = e._firstPT; c; )
            (d = c._next),
              c.pg
                ? c.t._mod(h)
                : c.n === a &&
                  (2 === c.f && c.t
                    ? b(c.t._firstPT)
                    : (this._add(c.t, a, c.s, c.c),
                      d && (d._prev = c._prev),
                      c._prev
                        ? (c._prev._next = d)
                        : e._firstPT === c && (e._firstPT = d),
                      (c._next = c._prev = null),
                      (e._propLookup[a] = i))),
              (c = d);
        return !1;
      }),
        (c._add = function (a, b, c, d) {
          this._addTween(a, b, c, c + d, b, Math.round),
            this._overwriteProps.push(b);
        });
    })(),
    (function () {
      _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function (a, b, c, d) {
          var e, f;
          if ("function" != typeof a.setAttribute) return !1;
          for (e in b)
            (f = b[e]),
              "function" == typeof f && (f = f(d, a)),
              this._addTween(
                a,
                "setAttribute",
                a.getAttribute(e) + "",
                f + "",
                e,
                !1,
                e
              ),
              this._overwriteProps.push(e);
          return !0;
        },
      });
    })(),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function (a, b, c, d) {
        "object" != typeof b && (b = { rotation: b }), (this.finals = {});
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;
        for (e in b)
          "useRadians" !== e &&
            ((h = b[e]),
            "function" == typeof h && (h = h(d, a)),
            (j = (h + "").split("_")),
            (f = j[0]),
            (g = parseFloat(
              "function" != typeof a[e]
                ? a[e]
                : a[
                    e.indexOf("set") ||
                    "function" != typeof a["get" + e.substr(3)]
                      ? e
                      : "get" + e.substr(3)
                  ]()
            )),
            (h = this.finals[e] =
              "string" == typeof f && "=" === f.charAt(1)
                ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2))
                : Number(f) || 0),
            (i = h - g),
            j.length &&
              ((f = j.join("_")),
              -1 !== f.indexOf("short") &&
                ((i %= k), i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)),
              -1 !== f.indexOf("_cw") && 0 > i
                ? (i = ((i + 9999999999 * k) % k) - ((i / k) | 0) * k)
                : -1 !== f.indexOf("ccw") &&
                  i > 0 &&
                  (i = ((i - 9999999999 * k) % k) - ((i / k) | 0) * k)),
            (i > l || -l > i) &&
              (this._addTween(a, e, g, g + i, e),
              this._overwriteProps.push(e)));
        return !0;
      },
      set: function (a) {
        var b;
        if (1 !== a) this._super.setRatio.call(this, a);
        else
          for (b = this._firstPT; b; )
            b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]),
              (b = b._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (a) {
        var b,
          c,
          d,
          e = _gsScope.GreenSockGlobals || _gsScope,
          f = e.com.greensock,
          g = 2 * Math.PI,
          h = Math.PI / 2,
          i = f._class,
          j = function (b, c) {
            var d = i("easing." + b, function () {}, !0),
              e = (d.prototype = new a());
            return (e.constructor = d), (e.getRatio = c), d;
          },
          k = a.register || function () {},
          l = function (a, b, c, d, e) {
            var f = i(
              "easing." + a,
              { easeOut: new b(), easeIn: new c(), easeInOut: new d() },
              !0
            );
            return k(f, a), f;
          },
          m = function (a, b, c) {
            (this.t = a),
              (this.v = b),
              c &&
                ((this.next = c),
                (c.prev = this),
                (this.c = c.v - b),
                (this.gap = c.t - a));
          },
          n = function (b, c) {
            var d = i(
                "easing." + b,
                function (a) {
                  (this._p1 = a || 0 === a ? a : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              e = (d.prototype = new a());
            return (
              (e.constructor = d),
              (e.getRatio = c),
              (e.config = function (a) {
                return new d(a);
              }),
              d
            );
          },
          o = l(
            "Back",
            n("BackOut", function (a) {
              return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
            }),
            n("BackIn", function (a) {
              return a * a * ((this._p1 + 1) * a - this._p1);
            }),
            n("BackInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2)
                : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
            })
          ),
          p = i(
            "easing.SlowMo",
            function (a, b, c) {
              (b = b || 0 === b ? b : 0.7),
                null == a ? (a = 0.7) : a > 1 && (a = 1),
                (this._p = 1 !== a ? b : 0),
                (this._p1 = (1 - a) / 2),
                (this._p2 = a),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = c === !0);
            },
            !0
          ),
          q = (p.prototype = new a());
        return (
          (q.constructor = p),
          (q.getRatio = function (a) {
            var b = a + (0.5 - a) * this._p;
            return a < this._p1
              ? this._calcEnd
                ? 1 - (a = 1 - a / this._p1) * a
                : b - (a = 1 - a / this._p1) * a * a * a * b
              : a > this._p3
              ? this._calcEnd
                ? 1 === a
                  ? 0
                  : 1 - (a = (a - this._p3) / this._p1) * a
                : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
              : this._calcEnd
              ? 1
              : b;
          }),
          (p.ease = new p(0.7, 0.7)),
          (q.config = p.config =
            function (a, b, c) {
              return new p(a, b, c);
            }),
          (b = i(
            "easing.SteppedEase",
            function (a, b) {
              (a = a || 1),
                (this._p1 = 1 / a),
                (this._p2 = a + (b ? 0 : 1)),
                (this._p3 = b ? 1 : 0);
            },
            !0
          )),
          (q = b.prototype = new a()),
          (q.constructor = b),
          (q.getRatio = function (a) {
            return (
              0 > a ? (a = 0) : a >= 1 && (a = 0.999999999),
              (((this._p2 * a) | 0) + this._p3) * this._p1
            );
          }),
          (q.config = b.config =
            function (a, c) {
              return new b(a, c);
            }),
          (c = i(
            "easing.RoughEase",
            function (b) {
              b = b || {};
              for (
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i = b.taper || "none",
                  j = [],
                  k = 0,
                  l = 0 | (b.points || 20),
                  n = l,
                  o = b.randomize !== !1,
                  p = b.clamp === !0,
                  q = b.template instanceof a ? b.template : null,
                  r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
                --n > -1;

              )
                (c = o ? Math.random() : (1 / l) * n),
                  (d = q ? q.getRatio(c) : c),
                  "none" === i
                    ? (e = r)
                    : "out" === i
                    ? ((f = 1 - c), (e = f * f * r))
                    : "in" === i
                    ? (e = c * c * r)
                    : 0.5 > c
                    ? ((f = 2 * c), (e = f * f * 0.5 * r))
                    : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                  o
                    ? (d += Math.random() * e - 0.5 * e)
                    : n % 2
                    ? (d += 0.5 * e)
                    : (d -= 0.5 * e),
                  p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
                  (j[k++] = { x: c, y: d });
              for (
                j.sort(function (a, b) {
                  return a.x - b.x;
                }),
                  h = new m(1, 1, null),
                  n = l;
                --n > -1;

              )
                (g = j[n]), (h = new m(g.x, g.y, h));
              this._prev = new m(0, 0, 0 !== h.t ? h : h.next);
            },
            !0
          )),
          (q = c.prototype = new a()),
          (q.constructor = c),
          (q.getRatio = function (a) {
            var b = this._prev;
            if (a > b.t) {
              for (; b.next && a >= b.t; ) b = b.next;
              b = b.prev;
            } else for (; b.prev && a <= b.t; ) b = b.prev;
            return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
          }),
          (q.config = function (a) {
            return new c(a);
          }),
          (c.ease = new c()),
          l(
            "Bounce",
            j("BounceOut", function (a) {
              return 1 / 2.75 > a
                ? 7.5625 * a * a
                : 2 / 2.75 > a
                ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                : 2.5 / 2.75 > a
                ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
            }),
            j("BounceIn", function (a) {
              return (a = 1 - a) < 1 / 2.75
                ? 1 - 7.5625 * a * a
                : 2 / 2.75 > a
                ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                : 2.5 / 2.75 > a
                ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
            }),
            j("BounceInOut", function (a) {
              var b = 0.5 > a;
              return (
                (a = b ? 1 - 2 * a : 2 * a - 1),
                (a =
                  1 / 2.75 > a
                    ? 7.5625 * a * a
                    : 2 / 2.75 > a
                    ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                    : 2.5 / 2.75 > a
                    ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                    : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
                b ? 0.5 * (1 - a) : 0.5 * a + 0.5
              );
            })
          ),
          l(
            "Circ",
            j("CircOut", function (a) {
              return Math.sqrt(1 - (a -= 1) * a);
            }),
            j("CircIn", function (a) {
              return -(Math.sqrt(1 - a * a) - 1);
            }),
            j("CircInOut", function (a) {
              return (a *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - a * a) - 1)
                : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
            })
          ),
          (d = function (b, c, d) {
            var e = i(
                "easing." + b,
                function (a, b) {
                  (this._p1 = a >= 1 ? a : 1),
                    (this._p2 = (b || d) / (1 > a ? a : 1)),
                    (this._p3 =
                      (this._p2 / g) * (Math.asin(1 / this._p1) || 0)),
                    (this._p2 = g / this._p2);
                },
                !0
              ),
              f = (e.prototype = new a());
            return (
              (f.constructor = e),
              (f.getRatio = c),
              (f.config = function (a, b) {
                return new e(a, b);
              }),
              e
            );
          }),
          l(
            "Elastic",
            d(
              "ElasticOut",
              function (a) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * a) *
                    Math.sin((a - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            d(
              "ElasticIn",
              function (a) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * (a -= 1)) *
                  Math.sin((a - this._p3) * this._p2)
                );
              },
              0.3
            ),
            d(
              "ElasticInOut",
              function (a) {
                return (a *= 2) < 1
                  ? -0.5 *
                      (this._p1 *
                        Math.pow(2, 10 * (a -= 1)) *
                        Math.sin((a - this._p3) * this._p2))
                  : this._p1 *
                      Math.pow(2, -10 * (a -= 1)) *
                      Math.sin((a - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          l(
            "Expo",
            j("ExpoOut", function (a) {
              return 1 - Math.pow(2, -10 * a);
            }),
            j("ExpoIn", function (a) {
              return Math.pow(2, 10 * (a - 1)) - 0.001;
            }),
            j("ExpoInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (a - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
            })
          ),
          l(
            "Sine",
            j("SineOut", function (a) {
              return Math.sin(a * h);
            }),
            j("SineIn", function (a) {
              return -Math.cos(a * h) + 1;
            }),
            j("SineInOut", function (a) {
              return -0.5 * (Math.cos(Math.PI * a) - 1);
            })
          ),
          i(
            "easing.EaseLookup",
            {
              find: function (b) {
                return a.map[b];
              },
            },
            !0
          ),
          k(e.SlowMo, "SlowMo", "ease,"),
          k(c, "RoughEase", "ease,"),
          k(b, "SteppedEase", "ease,"),
          o
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a, b) {
    "use strict";
    var c = {},
      d = a.document,
      e = (a.GreenSockGlobals = a.GreenSockGlobals || a);
    if (!e.TweenLite) {
      var f,
        g,
        h,
        i,
        j,
        k = function (a) {
          var b,
            c = a.split("."),
            d = e;
          for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
          return d;
        },
        l = k("com.greensock"),
        m = 1e-10,
        n = function (a) {
          var b,
            c = [],
            d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c;
        },
        o = function () {},
        p = (function () {
          var a = Object.prototype.toString,
            b = a.call([]);
          return function (c) {
            return (
              null != c &&
              (c instanceof Array ||
                ("object" == typeof c && !!c.push && a.call(c) === b))
            );
          };
        })(),
        q = {},
        r = function (d, f, g, h) {
          (this.sc = q[d] ? q[d].sc : []),
            (q[d] = this),
            (this.gsClass = null),
            (this.func = g);
          var i = [];
          (this.check = function (j) {
            for (var l, m, n, o, p = f.length, s = p; --p > -1; )
              (l = q[f[p]] || new r(f[p], [])).gsClass
                ? ((i[p] = l.gsClass), s--)
                : j && l.sc.push(this);
            if (0 === s && g) {
              if (
                ((m = ("com.greensock." + d).split(".")),
                (n = m.pop()),
                (o = k(m.join("."))[n] = this.gsClass = g.apply(g, i)),
                h)
              )
                if (
                  ((e[n] = c[n] = o),
                  "undefined" != typeof module && module.exports)
                )
                  if (d === b) {
                    module.exports = c[b] = o;
                    for (p in c) o[p] = c[p];
                  } else c[b] && (c[b][n] = o);
                else
                  "function" == typeof define &&
                    define.amd &&
                    define(
                      (a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") +
                        d.split(".").pop(),
                      [],
                      function () {
                        return o;
                      }
                    );
              for (p = 0; p < this.sc.length; p++) this.sc[p].check();
            }
          }),
            this.check(!0);
        },
        s = (a._gsDefine = function (a, b, c, d) {
          return new r(a, b, c, d);
        }),
        t = (l._class = function (a, b, c) {
          return (
            (b = b || function () {}),
            s(
              a,
              [],
              function () {
                return b;
              },
              c
            ),
            b
          );
        });
      s.globals = e;
      var u = [0, 0, 1, 1],
        v = t(
          "easing.Ease",
          function (a, b, c, d) {
            (this._func = a),
              (this._type = c || 0),
              (this._power = d || 0),
              (this._params = b ? u.concat(b) : u);
          },
          !0
        ),
        w = (v.map = {}),
        x = (v.register = function (a, b, c, d) {
          for (
            var e,
              f,
              g,
              h,
              i = b.split(","),
              j = i.length,
              k = (c || "easeIn,easeOut,easeInOut").split(",");
            --j > -1;

          )
            for (
              f = i[j],
                e = d ? t("easing." + f, null, !0) : l.easing[f] || {},
                g = k.length;
              --g > -1;

            )
              (h = k[g]),
                (w[f + "." + h] =
                  w[h + f] =
                  e[h] =
                    a.getRatio ? a : a[h] || new a());
        });
      for (
        h = v.prototype,
          h._calcEnd = !1,
          h.getRatio = function (a) {
            if (this._func)
              return (
                (this._params[0] = a), this._func.apply(null, this._params)
              );
            var b = this._type,
              c = this._power,
              d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
            return (
              1 === c
                ? (d *= d)
                : 2 === c
                ? (d *= d * d)
                : 3 === c
                ? (d *= d * d * d)
                : 4 === c && (d *= d * d * d * d),
              1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2
            );
          },
          f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
          g = f.length;
        --g > -1;

      )
        (h = f[g] + ",Power" + g),
          x(new v(null, null, 1, g), h, "easeOut", !0),
          x(
            new v(null, null, 2, g),
            h,
            "easeIn" + (0 === g ? ",easeNone" : "")
          ),
          x(new v(null, null, 3, g), h, "easeInOut");
      (w.linear = l.easing.Linear.easeIn), (w.swing = l.easing.Quad.easeInOut);
      var y = t("events.EventDispatcher", function (a) {
        (this._listeners = {}), (this._eventTarget = a || this);
      });
      (h = y.prototype),
        (h.addEventListener = function (a, b, c, d, e) {
          e = e || 0;
          var f,
            g,
            h = this._listeners[a],
            k = 0;
          for (
            this !== i || j || i.wake(),
              null == h && (this._listeners[a] = h = []),
              g = h.length;
            --g > -1;

          )
            (f = h[g]),
              f.c === b && f.s === c
                ? h.splice(g, 1)
                : 0 === k && f.pr < e && (k = g + 1);
          h.splice(k, 0, { c: b, s: c, up: d, pr: e });
        }),
        (h.removeEventListener = function (a, b) {
          var c,
            d = this._listeners[a];
          if (d)
            for (c = d.length; --c > -1; )
              if (d[c].c === b) return void d.splice(c, 1);
        }),
        (h.dispatchEvent = function (a) {
          var b,
            c,
            d,
            e = this._listeners[a];
          if (e)
            for (
              b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget;
              --b > -1;

            )
              (d = e[b]),
                d &&
                  (d.up
                    ? d.c.call(d.s || c, { type: a, target: c })
                    : d.c.call(d.s || c));
        });
      var z = a.requestAnimationFrame,
        A = a.cancelAnimationFrame,
        B =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        C = B();
      for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z; )
        (z = a[f[g] + "RequestAnimationFrame"]),
          (A =
            a[f[g] + "CancelAnimationFrame"] ||
            a[f[g] + "CancelRequestAnimationFrame"]);
      t("Ticker", function (a, b) {
        var c,
          e,
          f,
          g,
          h,
          k = this,
          l = B(),
          n = b !== !1 && z ? "auto" : !1,
          p = 500,
          q = 33,
          r = "tick",
          s = function (a) {
            var b,
              d,
              i = B() - C;
            i > p && (l += i - q),
              (C += i),
              (k.time = (C - l) / 1e3),
              (b = k.time - h),
              (!c || b > 0 || a === !0) &&
                (k.frame++, (h += b + (b >= g ? 0.004 : g - b)), (d = !0)),
              a !== !0 && (f = e(s)),
              d && k.dispatchEvent(r);
          };
        y.call(k),
          (k.time = k.frame = 0),
          (k.tick = function () {
            s(!0);
          }),
          (k.lagSmoothing = function (a, b) {
            return arguments.length
              ? ((p = a || 1 / m), void (q = Math.min(b, p, 0)))
              : 1 / m > p;
          }),
          (k.sleep = function () {
            null != f &&
              (n && A ? A(f) : clearTimeout(f),
              (e = o),
              (f = null),
              k === i && (j = !1));
          }),
          (k.wake = function (a) {
            null !== f
              ? k.sleep()
              : a
              ? (l += -C + (C = B()))
              : k.frame > 10 && (C = B() - p + 5),
              (e =
                0 === c
                  ? o
                  : n && z
                  ? z
                  : function (a) {
                      return setTimeout(a, (1e3 * (h - k.time) + 1) | 0);
                    }),
              k === i && (j = !0),
              s(2);
          }),
          (k.fps = function (a) {
            return arguments.length
              ? ((c = a),
                (g = 1 / (c || 60)),
                (h = this.time + g),
                void k.wake())
              : c;
          }),
          (k.useRAF = function (a) {
            return arguments.length ? (k.sleep(), (n = a), void k.fps(c)) : n;
          }),
          k.fps(a),
          setTimeout(function () {
            "auto" === n &&
              k.frame < 5 &&
              "hidden" !== d.visibilityState &&
              k.useRAF(!1);
          }, 1500);
      }),
        (h = l.Ticker.prototype = new l.events.EventDispatcher()),
        (h.constructor = l.Ticker);
      var D = t("core.Animation", function (a, b) {
        if (
          ((this.vars = b = b || {}),
          (this._duration = this._totalDuration = a || 0),
          (this._delay = Number(b.delay) || 0),
          (this._timeScale = 1),
          (this._active = b.immediateRender === !0),
          (this.data = b.data),
          (this._reversed = b.reversed === !0),
          X)
        ) {
          j || i.wake();
          var c = this.vars.useFrames ? W : X;
          c.add(this, c._time), this.vars.paused && this.paused(!0);
        }
      });
      (i = D.ticker = new l.Ticker()),
        (h = D.prototype),
        (h._dirty = h._gc = h._initted = h._paused = !1),
        (h._totalTime = h._time = 0),
        (h._rawPrevTime = -1),
        (h._next = h._last = h._onUpdate = h._timeline = h.timeline = null),
        (h._paused = !1);
      var E = function () {
        j &&
          B() - C > 2e3 &&
          ("hidden" !== d.visibilityState || !i.lagSmoothing()) &&
          i.wake();
        var a = setTimeout(E, 2e3);
        a.unref && a.unref();
      };
      E(),
        (h.play = function (a, b) {
          return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
        }),
        (h.pause = function (a, b) {
          return null != a && this.seek(a, b), this.paused(!0);
        }),
        (h.resume = function (a, b) {
          return null != a && this.seek(a, b), this.paused(!1);
        }),
        (h.seek = function (a, b) {
          return this.totalTime(Number(a), b !== !1);
        }),
        (h.restart = function (a, b) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(a ? -this._delay : 0, b !== !1, !0);
        }),
        (h.reverse = function (a, b) {
          return (
            null != a && this.seek(a || this.totalDuration(), b),
            this.reversed(!0).paused(!1)
          );
        }),
        (h.render = function (a, b, c) {}),
        (h.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (this._gc || !this.timeline) && this._enabled(!0),
            this
          );
        }),
        (h.isActive = function () {
          var a,
            b = this._timeline,
            c = this._startTime;
          return (
            !b ||
            (!this._gc &&
              !this._paused &&
              b.isActive() &&
              (a = b.rawTime(!0)) >= c &&
              a < c + this.totalDuration() / this._timeScale - 1e-7)
          );
        }),
        (h._enabled = function (a, b) {
          return (
            j || i.wake(),
            (this._gc = !a),
            (this._active = this.isActive()),
            b !== !0 &&
              (a && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !a && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (h._kill = function (a, b) {
          return this._enabled(!1, !1);
        }),
        (h.kill = function (a, b) {
          return this._kill(a, b), this;
        }),
        (h._uncache = function (a) {
          for (var b = a ? this : this.timeline; b; )
            (b._dirty = !0), (b = b.timeline);
          return this;
        }),
        (h._swapSelfInParams = function (a) {
          for (var b = a.length, c = a.concat(); --b > -1; )
            "{self}" === a[b] && (c[b] = this);
          return c;
        }),
        (h._callback = function (a) {
          var b = this.vars,
            c = b[a],
            d = b[a + "Params"],
            e = b[a + "Scope"] || b.callbackScope || this,
            f = d ? d.length : 0;
          switch (f) {
            case 0:
              c.call(e);
              break;
            case 1:
              c.call(e, d[0]);
              break;
            case 2:
              c.call(e, d[0], d[1]);
              break;
            default:
              c.apply(e, d);
          }
        }),
        (h.eventCallback = function (a, b, c, d) {
          if ("on" === (a || "").substr(0, 2)) {
            var e = this.vars;
            if (1 === arguments.length) return e[a];
            null == b
              ? delete e[a]
              : ((e[a] = b),
                (e[a + "Params"] =
                  p(c) && -1 !== c.join("").indexOf("{self}")
                    ? this._swapSelfInParams(c)
                    : c),
                (e[a + "Scope"] = d)),
              "onUpdate" === a && (this._onUpdate = b);
          }
          return this;
        }),
        (h.delay = function (a) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + a - this._delay),
              (this._delay = a),
              this)
            : this._delay;
        }),
        (h.duration = function (a) {
          return arguments.length
            ? ((this._duration = this._totalDuration = a),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== a &&
                this.totalTime(this._totalTime * (a / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (h.totalDuration = function (a) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(a) : this._totalDuration
          );
        }),
        (h.time = function (a, b) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(a > this._duration ? this._duration : a, b))
            : this._time;
        }),
        (h.totalTime = function (a, b, c) {
          if ((j || i.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (0 > a && !c && (a += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var d = this._totalDuration,
                e = this._timeline;
              if (
                (a > d && !c && (a = d),
                (this._startTime =
                  (this._paused ? this._pauseTime : e._time) -
                  (this._reversed ? d - a : a) / this._timeScale),
                e._dirty || this._uncache(!1),
                e._timeline)
              )
                for (; e._timeline; )
                  e._timeline._time !==
                    (e._startTime + e._totalTime) / e._timeScale &&
                    e.totalTime(e._totalTime, !0),
                    (e = e._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime !== a || 0 === this._duration) &&
                (J.length && Z(), this.render(a, b, !1), J.length && Z());
          }
          return this;
        }),
        (h.progress = h.totalProgress =
          function (a, b) {
            var c = this.duration();
            return arguments.length
              ? this.totalTime(c * a, b)
              : c
              ? this._time / c
              : this.ratio;
          }),
        (h.startTime = function (a) {
          return arguments.length
            ? (a !== this._startTime &&
                ((this._startTime = a),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, a - this._delay)),
              this)
            : this._startTime;
        }),
        (h.endTime = function (a) {
          return (
            this._startTime +
            (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
          );
        }),
        (h.timeScale = function (a) {
          if (!arguments.length) return this._timeScale;
          var b, c;
          for (
            a = a || m,
              this._timeline &&
                this._timeline.smoothChildTiming &&
                ((b = this._pauseTime),
                (c = b || 0 === b ? b : this._timeline.totalTime()),
                (this._startTime =
                  c - ((c - this._startTime) * this._timeScale) / a)),
              this._timeScale = a,
              c = this.timeline;
            c && c.timeline;

          )
            (c._dirty = !0), c.totalDuration(), (c = c.timeline);
          return this;
        }),
        (h.reversed = function (a) {
          return arguments.length
            ? (a != this._reversed &&
                ((this._reversed = a),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (h.paused = function (a) {
          if (!arguments.length) return this._paused;
          var b,
            c,
            d = this._timeline;
          return (
            a != this._paused &&
              d &&
              (j || a || i.wake(),
              (b = d.rawTime()),
              (c = b - this._pauseTime),
              !a &&
                d.smoothChildTiming &&
                ((this._startTime += c), this._uncache(!1)),
              (this._pauseTime = a ? b : null),
              (this._paused = a),
              (this._active = this.isActive()),
              !a &&
                0 !== c &&
                this._initted &&
                this.duration() &&
                ((b = d.smoothChildTiming
                  ? this._totalTime
                  : (b - this._startTime) / this._timeScale),
                this.render(b, b === this._totalTime, !0))),
            this._gc && !a && this._enabled(!0, !1),
            this
          );
        });
      var F = t("core.SimpleTimeline", function (a) {
        D.call(this, 0, a),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      (h = F.prototype = new D()),
        (h.constructor = F),
        (h.kill()._gc = !1),
        (h._first = h._last = h._recent = null),
        (h._sortChildren = !1),
        (h.add = h.insert =
          function (a, b, c, d) {
            var e, f;
            if (
              ((a._startTime = Number(b || 0) + a._delay),
              a._paused &&
                this !== a._timeline &&
                (a._pauseTime =
                  a._startTime +
                  (this.rawTime() - a._startTime) / a._timeScale),
              a.timeline && a.timeline._remove(a, !0),
              (a.timeline = a._timeline = this),
              a._gc && a._enabled(!0, !0),
              (e = this._last),
              this._sortChildren)
            )
              for (f = a._startTime; e && e._startTime > f; ) e = e._prev;
            return (
              e
                ? ((a._next = e._next), (e._next = a))
                : ((a._next = this._first), (this._first = a)),
              a._next ? (a._next._prev = a) : (this._last = a),
              (a._prev = e),
              (this._recent = a),
              this._timeline && this._uncache(!0),
              this
            );
          }),
        (h._remove = function (a, b) {
          return (
            a.timeline === this &&
              (b || a._enabled(!1, !0),
              a._prev
                ? (a._prev._next = a._next)
                : this._first === a && (this._first = a._next),
              a._next
                ? (a._next._prev = a._prev)
                : this._last === a && (this._last = a._prev),
              (a._next = a._prev = a.timeline = null),
              a === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (h.render = function (a, b, c) {
          var d,
            e = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = a; e; )
            (d = e._next),
              (e._active || (a >= e._startTime && !e._paused && !e._gc)) &&
                (e._reversed
                  ? e.render(
                      (e._dirty ? e.totalDuration() : e._totalDuration) -
                        (a - e._startTime) * e._timeScale,
                      b,
                      c
                    )
                  : e.render((a - e._startTime) * e._timeScale, b, c)),
              (e = d);
        }),
        (h.rawTime = function () {
          return j || i.wake(), this._totalTime;
        });
      var G = t(
          "TweenLite",
          function (b, c, d) {
            if (
              (D.call(this, c, d),
              (this.render = G.prototype.render),
              null == b)
            )
              throw "Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : G.selector(b) || b;
            var e,
              f,
              g,
              h =
                b.jquery ||
                (b.length &&
                  b !== a &&
                  b[0] &&
                  (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
              i = this.vars.overwrite;
            if (
              ((this._overwrite = i =
                null == i
                  ? V[G.defaultOverwrite]
                  : "number" == typeof i
                  ? i >> 0
                  : V[i]),
              (h || b instanceof Array || (b.push && p(b))) &&
                "number" != typeof b[0])
            )
              for (
                this._targets = g = n(b),
                  this._propLookup = [],
                  this._siblings = [],
                  e = 0;
                e < g.length;
                e++
              )
                (f = g[e]),
                  f
                    ? "string" != typeof f
                      ? f.length &&
                        f !== a &&
                        f[0] &&
                        (f[0] === a ||
                          (f[0].nodeType && f[0].style && !f.nodeType))
                        ? (g.splice(e--, 1),
                          (this._targets = g = g.concat(n(f))))
                        : ((this._siblings[e] = $(f, this, !1)),
                          1 === i &&
                            this._siblings[e].length > 1 &&
                            aa(f, this, null, 1, this._siblings[e]))
                      : ((f = g[e--] = G.selector(f)),
                        "string" == typeof f && g.splice(e + 1, 1))
                    : g.splice(e--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = $(b, this, !1)),
                1 === i &&
                  this._siblings.length > 1 &&
                  aa(b, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === c &&
                0 === this._delay &&
                this.vars.immediateRender !== !1)) &&
              ((this._time = -m), this.render(Math.min(0, -this._delay)));
          },
          !0
        ),
        H = function (b) {
          return (
            b &&
            b.length &&
            b !== a &&
            b[0] &&
            (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))
          );
        },
        I = function (a, b) {
          var c,
            d = {};
          for (c in a)
            U[c] ||
              (c in b &&
                "transform" !== c &&
                "x" !== c &&
                "y" !== c &&
                "width" !== c &&
                "height" !== c &&
                "className" !== c &&
                "border" !== c) ||
              !(!R[c] || (R[c] && R[c]._autoCSS)) ||
              ((d[c] = a[c]), delete a[c]);
          a.css = d;
        };
      (h = G.prototype = new D()),
        (h.constructor = G),
        (h.kill()._gc = !1),
        (h.ratio = 0),
        (h._firstPT = h._targets = h._overwrittenProps = h._startAt = null),
        (h._notifyPluginsOfEnabled = h._lazy = !1),
        (G.version = "1.20.3"),
        (G.defaultEase = h._ease = new v(null, null, 1, 1)),
        (G.defaultOverwrite = "auto"),
        (G.ticker = i),
        (G.autoSleep = 120),
        (G.lagSmoothing = function (a, b) {
          i.lagSmoothing(a, b);
        }),
        (G.selector =
          a.$ ||
          a.jQuery ||
          function (b) {
            var c = a.$ || a.jQuery;
            return c
              ? ((G.selector = c), c(b))
              : "undefined" == typeof d
              ? b
              : d.querySelectorAll
              ? d.querySelectorAll(b)
              : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
          });
      var J = [],
        K = {},
        L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        M = /[\+-]=-?[\.\d]/,
        N = function (a) {
          for (var b, c = this._firstPT, d = 1e-6; c; )
            (b = c.blob
              ? 1 === a && null != this.end
                ? this.end
                : a
                ? this.join("")
                : this.start
              : c.c * a + c.s),
              c.m
                ? (b = c.m(b, this._target || c.t))
                : d > b && b > -d && !c.blob && (b = 0),
              c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
              (c = c._next);
        },
        O = function (a, b, c, d) {
          var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = [],
            m = 0,
            n = "",
            o = 0;
          for (
            l.start = a,
              l.end = b,
              a = l[0] = a + "",
              b = l[1] = b + "",
              c && (c(l), (a = l[0]), (b = l[1])),
              l.length = 0,
              e = a.match(L) || [],
              f = b.match(L) || [],
              d &&
                ((d._next = null), (d.blob = 1), (l._firstPT = l._applyPT = d)),
              i = f.length,
              h = 0;
            i > h;
            h++
          )
            (k = f[h]),
              (j = b.substr(m, b.indexOf(k, m) - m)),
              (n += j || !h ? j : ","),
              (m += j.length),
              o ? (o = (o + 1) % 5) : "rgba(" === j.substr(-5) && (o = 1),
              k === e[h] || e.length <= h
                ? (n += k)
                : (n && (l.push(n), (n = "")),
                  (g = parseFloat(e[h])),
                  l.push(g),
                  (l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c:
                      ("=" === k.charAt(1)
                        ? parseInt(k.charAt(0) + "1", 10) *
                          parseFloat(k.substr(2))
                        : parseFloat(k) - g) || 0,
                    f: 0,
                    m: o && 4 > o ? Math.round : 0,
                  })),
              (m += k.length);
          return (
            (n += b.substr(m)),
            n && l.push(n),
            (l.setRatio = N),
            M.test(b) && (l.end = null),
            l
          );
        },
        P = function (a, b, c, d, e, f, g, h, i) {
          "function" == typeof d && (d = d(i || 0, a));
          var j,
            k = typeof a[b],
            l =
              "function" !== k
                ? ""
                : b.indexOf("set") ||
                  "function" != typeof a["get" + b.substr(3)]
                ? b
                : "get" + b.substr(3),
            m = "get" !== c ? c : l ? (g ? a[l](g) : a[l]()) : a[b],
            n = "string" == typeof d && "=" === d.charAt(1),
            o = {
              t: a,
              p: b,
              s: m,
              f: "function" === k,
              pg: 0,
              n: e || b,
              m: f ? ("function" == typeof f ? f : Math.round) : 0,
              pr: 0,
              c: n
                ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2))
                : parseFloat(d) - m || 0,
            };
          return (
            ("number" != typeof m || ("number" != typeof d && !n)) &&
              (g ||
              isNaN(m) ||
              (!n && isNaN(d)) ||
              "boolean" == typeof m ||
              "boolean" == typeof d
                ? ((o.fp = g),
                  (j = O(
                    m,
                    n ? parseFloat(o.s) + o.c : d,
                    h || G.defaultStringFilter,
                    o
                  )),
                  (o = {
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: e || b,
                    pr: 0,
                    m: 0,
                  }))
                : ((o.s = parseFloat(m)),
                  n || (o.c = parseFloat(d) - o.s || 0))),
            o.c
              ? ((o._next = this._firstPT) && (o._next._prev = o),
                (this._firstPT = o),
                o)
              : void 0
          );
        },
        Q = (G._internals = {
          isArray: p,
          isSelector: H,
          lazyTweens: J,
          blobDif: O,
        }),
        R = (G._plugins = {}),
        S = (Q.tweenLookup = {}),
        T = 0,
        U = (Q.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
          id: 1,
          yoyoEase: 1,
        }),
        V = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        W = (D._rootFramesTimeline = new F()),
        X = (D._rootTimeline = new F()),
        Y = 30,
        Z = (Q.lazyRender = function () {
          var a,
            b = J.length;
          for (K = {}; --b > -1; )
            (a = J[b]),
              a &&
                a._lazy !== !1 &&
                (a.render(a._lazy[0], a._lazy[1], !0), (a._lazy = !1));
          J.length = 0;
        });
      (X._startTime = i.time),
        (W._startTime = i.frame),
        (X._active = W._active = !0),
        setTimeout(Z, 1),
        (D._updateRoot = G.render =
          function () {
            var a, b, c;
            if (
              (J.length && Z(),
              X.render((i.time - X._startTime) * X._timeScale, !1, !1),
              W.render((i.frame - W._startTime) * W._timeScale, !1, !1),
              J.length && Z(),
              i.frame >= Y)
            ) {
              Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
              for (c in S) {
                for (b = S[c].tweens, a = b.length; --a > -1; )
                  b[a]._gc && b.splice(a, 1);
                0 === b.length && delete S[c];
              }
              if (
                ((c = X._first),
                (!c || c._paused) &&
                  G.autoSleep &&
                  !W._first &&
                  1 === i._listeners.tick.length)
              ) {
                for (; c && c._paused; ) c = c._next;
                c || i.sleep();
              }
            }
          }),
        i.addEventListener("tick", D._updateRoot);
      var $ = function (a, b, c) {
          var d,
            e,
            f = a._gsTweenID;
          if (
            (S[f || (a._gsTweenID = f = "t" + T++)] ||
              (S[f] = { target: a, tweens: [] }),
            b && ((d = S[f].tweens), (d[(e = d.length)] = b), c))
          )
            for (; --e > -1; ) d[e] === b && d.splice(e, 1);
          return S[f].tweens;
        },
        _ = function (a, b, c, d) {
          var e,
            f,
            g = a.vars.onOverwrite;
          return (
            g && (e = g(a, b, c, d)),
            (g = G.onOverwrite),
            g && (f = g(a, b, c, d)),
            e !== !1 && f !== !1
          );
        },
        aa = function (a, b, c, d, e) {
          var f, g, h, i;
          if (1 === d || d >= 4) {
            for (i = e.length, f = 0; i > f; f++)
              if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
              else if (5 === d) break;
            return g;
          }
          var j,
            k = b._startTime + m,
            l = [],
            n = 0,
            o = 0 === b._duration;
          for (f = e.length; --f > -1; )
            (h = e[f]) === b ||
              h._gc ||
              h._paused ||
              (h._timeline !== b._timeline
                ? ((j = j || ba(b, 0, o)), 0 === ba(h, j, o) && (l[n++] = h))
                : h._startTime <= k &&
                  h._startTime + h.totalDuration() / h._timeScale > k &&
                  (((o || !h._initted) && k - h._startTime <= 2e-10) ||
                    (l[n++] = h)));
          for (f = n; --f > -1; )
            if (
              ((h = l[f]),
              2 === d && h._kill(c, a, b) && (g = !0),
              2 !== d || (!h._firstPT && h._initted))
            ) {
              if (2 !== d && !_(h, b)) continue;
              h._enabled(!1, !1) && (g = !0);
            }
          return g;
        },
        ba = function (a, b, c) {
          for (
            var d = a._timeline, e = d._timeScale, f = a._startTime;
            d._timeline;

          ) {
            if (((f += d._startTime), (e *= d._timeScale), d._paused))
              return -100;
            d = d._timeline;
          }
          return (
            (f /= e),
            f > b
              ? f - b
              : (c && f === b) || (!a._initted && 2 * m > f - b)
              ? m
              : (f += a.totalDuration() / a._timeScale / e) > b + m
              ? 0
              : f - b - m
          );
        };
      (h._init = function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = this.vars,
          h = this._overwrittenProps,
          i = this._duration,
          j = !!g.immediateRender,
          k = g.ease;
        if (g.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
            (e = {});
          for (d in g.startAt) e[d] = g.startAt[d];
          if (
            ((e.data = "isStart"),
            (e.overwrite = !1),
            (e.immediateRender = !0),
            (e.lazy = j && g.lazy !== !1),
            (e.startAt = e.delay = null),
            (e.onUpdate = g.onUpdate),
            (e.onUpdateParams = g.onUpdateParams),
            (e.onUpdateScope = g.onUpdateScope || g.callbackScope || this),
            (this._startAt = G.to(this.target, 0, e)),
            j)
          )
            if (this._time > 0) this._startAt = null;
            else if (0 !== i) return;
        } else if (g.runBackwards && 0 !== i)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null);
          else {
            0 !== this._time && (j = !1), (c = {});
            for (d in g) (U[d] && "autoCSS" !== d) || (c[d] = g[d]);
            if (
              ((c.overwrite = 0),
              (c.data = "isFromStart"),
              (c.lazy = j && g.lazy !== !1),
              (c.immediateRender = j),
              (this._startAt = G.to(this.target, 0, c)),
              j)
            ) {
              if (0 === this._time) return;
            } else
              this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = k =
            k
              ? k instanceof v
                ? k
                : "function" == typeof k
                ? new v(k, g.easeParams)
                : w[k] || G.defaultEase
              : G.defaultEase),
          g.easeParams instanceof Array &&
            k.config &&
            (this._ease = k.config.apply(k, g.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (f = this._targets.length, a = 0; f > a; a++)
            this._initProps(
              this._targets[a],
              (this._propLookup[a] = {}),
              this._siblings[a],
              h ? h[a] : null,
              a
            ) && (b = !0);
        else
          b = this._initProps(
            this.target,
            this._propLookup,
            this._siblings,
            h,
            0
          );
        if (
          (b && G._onPluginEvent("_onInitAllProps", this),
          h &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          g.runBackwards)
        )
          for (c = this._firstPT; c; )
            (c.s += c.c), (c.c = -c.c), (c = c._next);
        (this._onUpdate = g.onUpdate), (this._initted = !0);
      }),
        (h._initProps = function (b, c, d, e, f) {
          var g, h, i, j, k, l;
          if (null == b) return !1;
          K[b._gsTweenID] && Z(),
            this.vars.css ||
              (b.style &&
                b !== a &&
                b.nodeType &&
                R.css &&
                this.vars.autoCSS !== !1 &&
                I(this.vars, b));
          for (g in this.vars)
            if (((l = this.vars[g]), U[g]))
              l &&
                (l instanceof Array || (l.push && p(l))) &&
                -1 !== l.join("").indexOf("{self}") &&
                (this.vars[g] = l = this._swapSelfInParams(l, this));
            else if (
              R[g] &&
              (j = new R[g]())._onInitTween(b, this.vars[g], this, f)
            ) {
              for (
                this._firstPT = k =
                  {
                    _next: this._firstPT,
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: g,
                    pg: 1,
                    pr: j._priority,
                    m: 0,
                  },
                  h = j._overwriteProps.length;
                --h > -1;

              )
                c[j._overwriteProps[h]] = this._firstPT;
              (j._priority || j._onInitAllProps) && (i = !0),
                (j._onDisable || j._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0),
                k._next && (k._next._prev = k);
            } else
              c[g] = P.call(
                this,
                b,
                g,
                "get",
                l,
                g,
                0,
                null,
                this.vars.stringFilter,
                f
              );
          return e && this._kill(e, b)
            ? this._initProps(b, c, d, e, f)
            : this._overwrite > 1 &&
              this._firstPT &&
              d.length > 1 &&
              aa(b, this, c, this._overwrite, d)
            ? (this._kill(c, b), this._initProps(b, c, d, e, f))
            : (this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (K[b._gsTweenID] = !0),
              i);
        }),
        (h.render = function (a, b, c) {
          var d,
            e,
            f,
            g,
            h = this._time,
            i = this._duration,
            j = this._rawPrevTime;
          if (a >= i - 1e-7 && a >= 0)
            (this._totalTime = this._time = i),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed ||
                ((d = !0),
                (e = "onComplete"),
                (c = c || this._timeline.autoRemoveChildren)),
              0 === i &&
                (this._initted || !this.vars.lazy || c) &&
                (this._startTime === this._timeline._duration && (a = 0),
                (0 > j ||
                  (0 >= a && a >= -1e-7) ||
                  (j === m && "isPause" !== this.data)) &&
                  j !== a &&
                  ((c = !0), j > m && (e = "onReverseComplete")),
                (this._rawPrevTime = g = !b || a || j === a ? a : m));
          else if (1e-7 > a)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== h || (0 === i && j > 0)) &&
                ((e = "onReverseComplete"), (d = this._reversed)),
              0 > a &&
                ((this._active = !1),
                0 === i &&
                  (this._initted || !this.vars.lazy || c) &&
                  (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0),
                  (this._rawPrevTime = g = !b || a || j === a ? a : m))),
              (!this._initted || (this._startAt && this._startAt.progress())) &&
                (c = !0);
          else if (((this._totalTime = this._time = a), this._easeType)) {
            var k = a / i,
              l = this._easeType,
              n = this._easePower;
            (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
              3 === l && (k *= 2),
              1 === n
                ? (k *= k)
                : 2 === n
                ? (k *= k * k)
                : 3 === n
                ? (k *= k * k * k)
                : 4 === n && (k *= k * k * k * k),
              1 === l
                ? (this.ratio = 1 - k)
                : 2 === l
                ? (this.ratio = k)
                : 0.5 > a / i
                ? (this.ratio = k / 2)
                : (this.ratio = 1 - k / 2);
          } else this.ratio = this._ease.getRatio(a / i);
          if (this._time !== h || c) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !c &&
                this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = h),
                  (this._rawPrevTime = j),
                  J.push(this),
                  void (this._lazy = [a, b])
                );
              this._time && !d
                ? (this.ratio = this._ease.getRatio(this._time / i))
                : d &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              this._lazy !== !1 && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== h &&
                    a >= 0 &&
                    (this._active = !0)),
                0 === h &&
                  (this._startAt &&
                    (a >= 0
                      ? this._startAt.render(a, !0, c)
                      : e || (e = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._time || 0 === i) &&
                    (b || this._callback("onStart"))),
                f = this._firstPT;
              f;

            )
              f.f
                ? f.t[f.p](f.c * this.ratio + f.s)
                : (f.t[f.p] = f.c * this.ratio + f.s),
                (f = f._next);
            this._onUpdate &&
              (0 > a &&
                this._startAt &&
                a !== -1e-4 &&
                this._startAt.render(a, !0, c),
              b ||
                ((this._time !== h || d || c) && this._callback("onUpdate"))),
              e &&
                (!this._gc || c) &&
                (0 > a &&
                  this._startAt &&
                  !this._onUpdate &&
                  a !== -1e-4 &&
                  this._startAt.render(a, !0, c),
                d &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !b && this.vars[e] && this._callback(e),
                0 === i &&
                  this._rawPrevTime === m &&
                  g !== m &&
                  (this._rawPrevTime = 0));
          }
        }),
        (h._kill = function (a, b, c) {
          if (
            ("all" === a && (a = null),
            null == a && (null == b || b === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          b =
            "string" != typeof b
              ? b || this._targets || this.target
              : G.selector(b) || b;
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m =
              c &&
              this._time &&
              c._startTime === this._startTime &&
              this._timeline === c._timeline;
          if ((p(b) || H(b)) && "number" != typeof b[0])
            for (d = b.length; --d > -1; ) this._kill(a, b[d], c) && (i = !0);
          else {
            if (this._targets) {
              for (d = this._targets.length; --d > -1; )
                if (b === this._targets[d]) {
                  (h = this._propLookup[d] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (e = this._overwrittenProps[d] =
                      a ? this._overwrittenProps[d] || {} : "all");
                  break;
                }
            } else {
              if (b !== this.target) return !1;
              (h = this._propLookup),
                (e = this._overwrittenProps =
                  a ? this._overwrittenProps || {} : "all");
            }
            if (h) {
              if (
                ((j = a || h),
                (k =
                  a !== e &&
                  "all" !== e &&
                  a !== h &&
                  ("object" != typeof a || !a._tempKill)),
                c && (G.onOverwrite || this.vars.onOverwrite))
              ) {
                for (f in j) h[f] && (l || (l = []), l.push(f));
                if ((l || !a) && !_(this, c, b, l)) return !1;
              }
              for (f in j)
                (g = h[f]) &&
                  (m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
                  g.pg && g.t._kill(j) && (i = !0),
                  (g.pg && 0 !== g.t._overwriteProps.length) ||
                    (g._prev
                      ? (g._prev._next = g._next)
                      : g === this._firstPT && (this._firstPT = g._next),
                    g._next && (g._next._prev = g._prev),
                    (g._next = g._prev = null)),
                  delete h[f]),
                  k && (e[f] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return i;
        }),
        (h.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              G._onPluginEvent("_onDisable", this),
            (this._firstPT =
              this._overwrittenProps =
              this._startAt =
              this._onUpdate =
                null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            D.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -m), this.render(Math.min(0, -this._delay))),
            this
          );
        }),
        (h._enabled = function (a, b) {
          if ((j || i.wake(), a && this._gc)) {
            var c,
              d = this._targets;
            if (d)
              for (c = d.length; --c > -1; )
                this._siblings[c] = $(d[c], this, !0);
            else this._siblings = $(this.target, this, !0);
          }
          return (
            D.prototype._enabled.call(this, a, b),
            this._notifyPluginsOfEnabled && this._firstPT
              ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
              : !1
          );
        }),
        (G.to = function (a, b, c) {
          return new G(a, b, c);
        }),
        (G.from = function (a, b, c) {
          return (
            (c.runBackwards = !0),
            (c.immediateRender = 0 != c.immediateRender),
            new G(a, b, c)
          );
        }),
        (G.fromTo = function (a, b, c, d) {
          return (
            (d.startAt = c),
            (d.immediateRender =
              0 != d.immediateRender && 0 != c.immediateRender),
            new G(a, b, d)
          );
        }),
        (G.delayedCall = function (a, b, c, d, e) {
          return new G(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            lazy: !1,
            useFrames: e,
            overwrite: 0,
          });
        }),
        (G.set = function (a, b) {
          return new G(a, 0, b);
        }),
        (G.getTweensOf = function (a, b) {
          if (null == a) return [];
          a = "string" != typeof a ? a : G.selector(a) || a;
          var c, d, e, f;
          if ((p(a) || H(a)) && "number" != typeof a[0]) {
            for (c = a.length, d = []; --c > -1; )
              d = d.concat(G.getTweensOf(a[c], b));
            for (c = d.length; --c > -1; )
              for (f = d[c], e = c; --e > -1; ) f === d[e] && d.splice(c, 1);
          } else if (a._gsTweenID)
            for (d = $(a).concat(), c = d.length; --c > -1; )
              (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
          return d || [];
        }),
        (G.killTweensOf = G.killDelayedCallsTo =
          function (a, b, c) {
            "object" == typeof b && ((c = b), (b = !1));
            for (var d = G.getTweensOf(a, b), e = d.length; --e > -1; )
              d[e]._kill(c, a);
          });
      var ca = t(
        "plugins.TweenPlugin",
        function (a, b) {
          (this._overwriteProps = (a || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = b || 0),
            (this._super = ca.prototype);
        },
        !0
      );
      if (
        ((h = ca.prototype),
        (ca.version = "1.19.0"),
        (ca.API = 2),
        (h._firstPT = null),
        (h._addTween = P),
        (h.setRatio = N),
        (h._kill = function (a) {
          var b,
            c = this._overwriteProps,
            d = this._firstPT;
          if (null != a[this._propName]) this._overwriteProps = [];
          else for (b = c.length; --b > -1; ) null != a[c[b]] && c.splice(b, 1);
          for (; d; )
            null != a[d.n] &&
              (d._next && (d._next._prev = d._prev),
              d._prev
                ? ((d._prev._next = d._next), (d._prev = null))
                : this._firstPT === d && (this._firstPT = d._next)),
              (d = d._next);
          return !1;
        }),
        (h._mod = h._roundProps =
          function (a) {
            for (var b, c = this._firstPT; c; )
              (b =
                a[this._propName] ||
                (null != c.n && a[c.n.split(this._propName + "_").join("")])),
                b &&
                  "function" == typeof b &&
                  (2 === c.f ? (c.t._applyPT.m = b) : (c.m = b)),
                (c = c._next);
          }),
        (G._onPluginEvent = function (a, b) {
          var c,
            d,
            e,
            f,
            g,
            h = b._firstPT;
          if ("_onInitAllProps" === a) {
            for (; h; ) {
              for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
              (h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h),
                (h._next = d) ? (d._prev = h) : (f = h),
                (h = g);
            }
            h = b._firstPT = e;
          }
          for (; h; )
            h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
              (h = h._next);
          return c;
        }),
        (ca.activate = function (a) {
          for (var b = a.length; --b > -1; )
            a[b].API === ca.API && (R[new a[b]()._propName] = a[b]);
          return !0;
        }),
        (s.plugin = function (a) {
          if (!(a && a.propName && a.init && a.API))
            throw "illegal plugin definition.";
          var b,
            c = a.propName,
            d = a.priority || 0,
            e = a.overwriteProps,
            f = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_mod",
              mod: "_mod",
              initAll: "_onInitAllProps",
            },
            g = t(
              "plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",
              function () {
                ca.call(this, c, d), (this._overwriteProps = e || []);
              },
              a.global === !0
            ),
            h = (g.prototype = new ca(c));
          (h.constructor = g), (g.API = a.API);
          for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
          return (g.version = a.version), ca.activate([g]), g;
        }),
        (f = a._gsQueue))
      ) {
        for (g = 0; g < f.length; g++) f[g]();
        for (h in q)
          q[h].func ||
            a.console.log("GSAP encountered missing dependency: " + h);
      }
      j = !1;
    }
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  );
/**
 * jQuery-viewport-checker - v1.8.8 - 2017-09-25
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2017 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!(function (a) {
  a.fn.viewportChecker = function (b) {
    var c = {
      classToAdd: "visible",
      classToRemove: "invisible",
      classToAddForFullView: "full-visible",
      removeClassAfterAnimation: !1,
      offset: 100,
      repeat: !1,
      invertBottomOffset: !0,
      callbackFunction: function (a, b) {},
      scrollHorizontal: !1,
      scrollBox: window,
    };
    a.extend(c, b);
    var d = this,
      e = { height: a(c.scrollBox).height(), width: a(c.scrollBox).width() };
    return (
      (this.checkElements = function () {
        var b, f;
        c.scrollHorizontal
          ? ((b = Math.max(
              a("html").scrollLeft(),
              a("body").scrollLeft(),
              a(window).scrollLeft()
            )),
            (f = b + e.width))
          : ((b = Math.max(
              a("html").scrollTop(),
              a("body").scrollTop(),
              a(window).scrollTop()
            )),
            (f = b + e.height)),
          d.each(function () {
            var d = a(this),
              g = {},
              h = {};
            if (
              (d.data("vp-add-class") &&
                (h.classToAdd = d.data("vp-add-class")),
              d.data("vp-remove-class") &&
                (h.classToRemove = d.data("vp-remove-class")),
              d.data("vp-add-class-full-view") &&
                (h.classToAddForFullView = d.data("vp-add-class-full-view")),
              d.data("vp-keep-add-class") &&
                (h.removeClassAfterAnimation = d.data(
                  "vp-remove-after-animation"
                )),
              d.data("vp-offset") && (h.offset = d.data("vp-offset")),
              d.data("vp-repeat") && (h.repeat = d.data("vp-repeat")),
              d.data("vp-scrollHorizontal") &&
                (h.scrollHorizontal = d.data("vp-scrollHorizontal")),
              d.data("vp-invertBottomOffset") &&
                (h.scrollHorizontal = d.data("vp-invertBottomOffset")),
              a.extend(g, c),
              a.extend(g, h),
              !d.data("vp-animated") || g.repeat)
            ) {
              String(g.offset).indexOf("%") > 0 &&
                (g.offset = (parseInt(g.offset) / 100) * e.height);
              var i = g.scrollHorizontal ? d.offset().left : d.offset().top,
                j = g.scrollHorizontal ? i + d.width() : i + d.height(),
                k = Math.round(i) + g.offset,
                l = g.scrollHorizontal ? k + d.width() : k + d.height();
              g.invertBottomOffset && (l -= 2 * g.offset),
                k < f && l > b
                  ? (d.removeClass(g.classToRemove),
                    d.addClass(g.classToAdd),
                    g.callbackFunction(d, "add"),
                    j <= f && i >= b
                      ? d.addClass(g.classToAddForFullView)
                      : d.removeClass(g.classToAddForFullView),
                    d.data("vp-animated", !0),
                    g.removeClassAfterAnimation &&
                      d.one(
                        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                        function () {
                          d.removeClass(g.classToAdd);
                        }
                      ))
                  : d.hasClass(g.classToAdd) &&
                    g.repeat &&
                    (d.removeClass(
                      g.classToAdd + " " + g.classToAddForFullView
                    ),
                    g.callbackFunction(d, "remove"),
                    d.data("vp-animated", !1));
            }
          });
      }),
      ("ontouchstart" in window || "onmsgesturechange" in window) &&
        a(document).bind(
          "touchmove MSPointerMove pointermove",
          this.checkElements
        ),
      a(c.scrollBox).bind("load scroll", this.checkElements),
      a(window).resize(function (b) {
        (e = {
          height: a(c.scrollBox).height(),
          width: a(c.scrollBox).width(),
        }),
          d.checkElements();
      }),
      this.checkElements(),
      this
    );
  };
})(jQuery);
//# sourceMappingURL=jquery.viewportchecker.min.js.map
(function () {
  "use strict";

  /**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */

  /*jslint browser:true, node:true*/
  /*global define, Event, Node*/

  /**
   * Instantiate fast-clicking listeners on the specified layer.
   *
   * @constructor
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */
  function FastClick(layer, options) {
    var oldOnClick;

    options = options || {};

    /**
     * Whether a click is currently being tracked.
     *
     * @type boolean
     */
    this.trackingClick = false;

    /**
     * Timestamp for when click tracking started.
     *
     * @type number
     */
    this.trackingClickStart = 0;

    /**
     * The element being tracked for a click.
     *
     * @type EventTarget
     */
    this.targetElement = null;

    /**
     * X-coordinate of touch start event.
     *
     * @type number
     */
    this.touchStartX = 0;

    /**
     * Y-coordinate of touch start event.
     *
     * @type number
     */
    this.touchStartY = 0;

    /**
     * ID of the last touch, retrieved from Touch.identifier.
     *
     * @type number
     */
    this.lastTouchIdentifier = 0;

    /**
     * Touchmove boundary, beyond which a click will be cancelled.
     *
     * @type number
     */
    this.touchBoundary = options.touchBoundary || 10;

    /**
     * The FastClick layer.
     *
     * @type Element
     */
    this.layer = layer;

    /**
     * The minimum time between tap(touchstart and touchend) events
     *
     * @type number
     */
    this.tapDelay = options.tapDelay || 200;

    /**
     * The maximum time for a tap
     *
     * @type number
     */
    this.tapTimeout = options.tapTimeout || 700;

    if (FastClick.notNeeded(layer)) {
      return;
    }

    // Some old versions of Android don't have Function.prototype.bind
    function bind(method, context) {
      return function () {
        return method.apply(context, arguments);
      };
    }

    var methods = [
      "onMouse",
      "onClick",
      "onTouchStart",
      "onTouchMove",
      "onTouchEnd",
      "onTouchCancel",
    ];
    var context = this;
    for (var i = 0, l = methods.length; i < l; i++) {
      context[methods[i]] = bind(context[methods[i]], context);
    }

    // Set up event handlers as required
    if (deviceIsAndroid) {
      layer.addEventListener("mouseover", this.onMouse, true);
      layer.addEventListener("mousedown", this.onMouse, true);
      layer.addEventListener("mouseup", this.onMouse, true);
    }

    layer.addEventListener("click", this.onClick, true);
    layer.addEventListener("touchstart", this.onTouchStart, false);
    layer.addEventListener("touchmove", this.onTouchMove, false);
    layer.addEventListener("touchend", this.onTouchEnd, false);
    layer.addEventListener("touchcancel", this.onTouchCancel, false);

    // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
    // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
    // layer when they are cancelled.
    if (!Event.prototype.stopImmediatePropagation) {
      layer.removeEventListener = function (type, callback, capture) {
        var rmv = Node.prototype.removeEventListener;
        if (type === "click") {
          rmv.call(layer, type, callback.hijacked || callback, capture);
        } else {
          rmv.call(layer, type, callback, capture);
        }
      };

      layer.addEventListener = function (type, callback, capture) {
        var adv = Node.prototype.addEventListener;
        if (type === "click") {
          adv.call(
            layer,
            type,
            callback.hijacked ||
              (callback.hijacked = function (event) {
                if (!event.propagationStopped) {
                  callback(event);
                }
              }),
            capture
          );
        } else {
          adv.call(layer, type, callback, capture);
        }
      };
    }

    // If a handler is already declared in the element's onclick attribute, it will be fired before
    // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
    // adding it as listener.
    if (typeof layer.onclick === "function") {
      // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
      // - the old one won't work if passed to addEventListener directly.
      oldOnClick = layer.onclick;
      layer.addEventListener(
        "click",
        function (event) {
          oldOnClick(event);
        },
        false
      );
      layer.onclick = null;
    }
  }

  /**
   * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
   *
   * @type boolean
   */
  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

  /**
   * Android requires exceptions.
   *
   * @type boolean
   */
  var deviceIsAndroid =
    navigator.userAgent.indexOf("Android") > 0 && !deviceIsWindowsPhone;

  /**
   * iOS requires exceptions.
   *
   * @type boolean
   */
  var deviceIsIOS =
    /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

  /**
   * iOS 4 requires an exception for select elements.
   *
   * @type boolean
   */
  var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

  /**
   * iOS 6.0-7.* requires the target element to be manually derived
   *
   * @type boolean
   */
  var deviceIsIOSWithBadTarget =
    deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

  /**
   * BlackBerry requires exceptions.
   *
   * @type boolean
   */
  var deviceIsBlackBerry10 = navigator.userAgent.indexOf("BB10") > 0;

  /**
   * Determine whether a given element requires a native click.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element needs a native click
   */
  FastClick.prototype.needsClick = function (target) {
    switch (target.nodeName.toLowerCase()) {
      // Don't send a synthetic click to disabled inputs (issue #62)
      case "button":
      case "select":
      case "textarea":
        if (target.disabled) {
          return true;
        }

        break;
      case "input":
        // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
        if ((deviceIsIOS && target.type === "file") || target.disabled) {
          return true;
        }

        break;
      case "label":
      case "iframe": // iOS8 homescreen apps can prevent events bubbling into frames
      case "video":
        return true;
    }

    return /\bneedsclick\b/.test(target.className);
  };

  /**
   * Determine whether a given element requires a call to focus to simulate click into element.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
   */
  FastClick.prototype.needsFocus = function (target) {
    switch (target.nodeName.toLowerCase()) {
      case "textarea":
        return true;
      case "select":
        return !deviceIsAndroid;
      case "input":
        switch (target.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return false;
        }

        // No point in attempting to focus disabled inputs
        return !target.disabled && !target.readOnly;
      default:
        return /\bneedsfocus\b/.test(target.className);
    }
  };

  /**
   * Send a click event to the specified element.
   *
   * @param {EventTarget|Element} targetElement
   * @param {Event} event
   */
  FastClick.prototype.sendClick = function (targetElement, event) {
    var clickEvent, touch;

    // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
    if (document.activeElement && document.activeElement !== targetElement) {
      document.activeElement.blur();
    }

    touch = event.changedTouches[0];

    // Synthesise a click event, with an extra attribute so it can be tracked
    clickEvent = document.createEvent("MouseEvents");
    clickEvent.initMouseEvent(
      this.determineEventType(targetElement),
      true,
      true,
      window,
      1,
      touch.screenX,
      touch.screenY,
      touch.clientX,
      touch.clientY,
      false,
      false,
      false,
      false,
      0,
      null
    );
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent);
  };

  FastClick.prototype.determineEventType = function (targetElement) {
    //Issue #159: Android Chrome Select Box does not open with a synthetic click event
    if (deviceIsAndroid && targetElement.tagName.toLowerCase() === "select") {
      return "mousedown";
    }

    return "click";
  };

  /**
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.focus = function (targetElement) {
    var length;

    // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
    if (
      deviceIsIOS &&
      targetElement.setSelectionRange &&
      targetElement.type.indexOf("date") !== 0 &&
      targetElement.type !== "time" &&
      targetElement.type !== "month"
    ) {
      length = targetElement.value.length;
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };

  /**
   * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
   *
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.updateScrollParent = function (targetElement) {
    var scrollParent, parentElement;

    scrollParent = targetElement.fastClickScrollParent;

    // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
    // target element was moved to another parent.
    if (!scrollParent || !scrollParent.contains(targetElement)) {
      parentElement = targetElement;
      do {
        if (parentElement.scrollHeight > parentElement.offsetHeight) {
          scrollParent = parentElement;
          targetElement.fastClickScrollParent = parentElement;
          break;
        }

        parentElement = parentElement.parentElement;
      } while (parentElement);
    }

    // Always update the scroll top tracker if possible.
    if (scrollParent) {
      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
    }
  };

  /**
   * @param {EventTarget} targetElement
   * @returns {Element|EventTarget}
   */
  FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
    // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
    if (eventTarget.nodeType === Node.TEXT_NODE) {
      return eventTarget.parentNode;
    }

    return eventTarget;
  };

  /**
   * On touch start, record the position and scroll offset.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchStart = function (event) {
    var targetElement, touch, selection;

    // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
    if (event.targetTouches.length > 1) {
      return true;
    }

    targetElement = this.getTargetElementFromEventTarget(event.target);
    touch = event.targetTouches[0];

    if (deviceIsIOS) {
      // Only trusted events will deselect text on iOS (issue #49)
      selection = window.getSelection();
      if (selection.rangeCount && !selection.isCollapsed) {
        return true;
      }

      if (!deviceIsIOS4) {
        // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
        // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
        // with the same identifier as the touch event that previously triggered the click that triggered the alert.
        // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
        // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
        // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
        // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
        // random integers, it's safe to to continue if the identifier is 0 here.
        if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
          event.preventDefault();
          return false;
        }

        this.lastTouchIdentifier = touch.identifier;

        // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
        // 1) the user does a fling scroll on the scrollable layer
        // 2) the user stops the fling scroll with another tap
        // then the event.target of the last 'touchend' event will be the element that was under the user's finger
        // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
        // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
        this.updateScrollParent(targetElement);
      }
    }

    this.trackingClick = true;
    this.trackingClickStart = event.timeStamp;
    this.targetElement = targetElement;

    this.touchStartX = touch.pageX;
    this.touchStartY = touch.pageY;

    // Prevent phantom clicks on fast double-tap (issue #36)
    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      event.preventDefault();
    }

    return true;
  };

  /**
   * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.touchHasMoved = function (event) {
    var touch = event.changedTouches[0],
      boundary = this.touchBoundary;

    if (
      Math.abs(touch.pageX - this.touchStartX) > boundary ||
      Math.abs(touch.pageY - this.touchStartY) > boundary
    ) {
      return true;
    }

    return false;
  };

  /**
   * Update the last position.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchMove = function (event) {
    if (!this.trackingClick) {
      return true;
    }

    // If the touch has moved, cancel the click tracking
    if (
      this.targetElement !==
        this.getTargetElementFromEventTarget(event.target) ||
      this.touchHasMoved(event)
    ) {
      this.trackingClick = false;
      this.targetElement = null;
    }

    return true;
  };

  /**
   * Attempt to find the labelled control for the given label element.
   *
   * @param {EventTarget|HTMLLabelElement} labelElement
   * @returns {Element|null}
   */
  FastClick.prototype.findControl = function (labelElement) {
    // Fast path for newer browsers supporting the HTML5 control attribute
    if (labelElement.control !== undefined) {
      return labelElement.control;
    }

    // All browsers under test that support touch events also support the HTML5 htmlFor attribute
    if (labelElement.htmlFor) {
      return document.getElementById(labelElement.htmlFor);
    }

    // If no for attribute exists, attempt to retrieve the first labellable descendant element
    // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
    return labelElement.querySelector(
      "button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea"
    );
  };

  /**
   * On touch end, determine whether to send a click event at once.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchEnd = function (event) {
    var forElement,
      trackingClickStart,
      targetTagName,
      scrollParent,
      touch,
      targetElement = this.targetElement;

    if (!this.trackingClick) {
      return true;
    }

    // Prevent phantom clicks on fast double-tap (issue #36)
    if (event.timeStamp - this.lastClickTime < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }

    if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
      return true;
    }

    // Reset to prevent wrong click cancel on input (issue #156).
    this.cancelNextClick = false;

    this.lastClickTime = event.timeStamp;

    trackingClickStart = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0;

    // On some iOS devices, the targetElement supplied with the event is invalid if the layer
    // is performing a transition or scroll, and has to be re-detected manually. Note that
    // for this to function correctly, it must be called *after* the event target is checked!
    // See issue #57; also filed as rdar://13048589 .
    if (deviceIsIOSWithBadTarget) {
      touch = event.changedTouches[0];

      // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
      targetElement =
        document.elementFromPoint(
          touch.pageX - window.pageXOffset,
          touch.pageY - window.pageYOffset
        ) || targetElement;
      targetElement.fastClickScrollParent =
        this.targetElement.fastClickScrollParent;
    }

    targetTagName = targetElement.tagName.toLowerCase();
    if (targetTagName === "label") {
      forElement = this.findControl(targetElement);
      if (forElement) {
        this.focus(targetElement);
        if (deviceIsAndroid) {
          return false;
        }

        targetElement = forElement;
      }
    } else if (this.needsFocus(targetElement)) {
      // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
      // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
      if (
        event.timeStamp - trackingClickStart > 100 ||
        (deviceIsIOS && window.top !== window && targetTagName === "input")
      ) {
        this.targetElement = null;
        return false;
      }

      this.focus(targetElement);
      this.sendClick(targetElement, event);

      // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
      // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
      if (!deviceIsIOS || targetTagName !== "select") {
        this.targetElement = null;
        event.preventDefault();
      }

      return false;
    }

    if (deviceIsIOS && !deviceIsIOS4) {
      // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
      // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
      scrollParent = targetElement.fastClickScrollParent;
      if (
        scrollParent &&
        scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop
      ) {
        return true;
      }
    }

    // Prevent the actual click from going though - unless the target node is marked as requiring
    // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
    if (!this.needsClick(targetElement)) {
      event.preventDefault();
      this.sendClick(targetElement, event);
    }

    return false;
  };

  /**
   * On touch cancel, stop tracking the click.
   *
   * @returns {void}
   */
  FastClick.prototype.onTouchCancel = function () {
    this.trackingClick = false;
    this.targetElement = null;
  };

  /**
   * Determine mouse events which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onMouse = function (event) {
    // If a target element was never set (because a touch event was never fired) allow the event
    if (!this.targetElement) {
      return true;
    }

    if (event.forwardedTouchEvent) {
      return true;
    }

    // Programmatically generated events targeting a specific element should be permitted
    if (!event.cancelable) {
      return true;
    }

    // Derive and check the target element to see whether the mouse event needs to be permitted;
    // unless explicitly enabled, prevent non-touch click events from triggering actions,
    // to prevent ghost/doubleclicks.
    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
      // Prevent any user-added listeners declared on FastClick element from being fired.
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {
        // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        event.propagationStopped = true;
      }

      // Cancel the event
      event.stopPropagation();
      event.preventDefault();

      return false;
    }

    // If the mouse event is permitted, return true for the action to go through.
    return true;
  };

  /**
   * On actual clicks, determine whether this is a touch-generated click, a click action occurring
   * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
   * an actual click which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onClick = function (event) {
    var permitted;

    // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    }

    // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
    if (event.target.type === "submit" && event.detail === 0) {
      return true;
    }

    permitted = this.onMouse(event);

    // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
    if (!permitted) {
      this.targetElement = null;
    }

    // If clicks are permitted, return true for the action to go through.
    return permitted;
  };

  /**
   * Remove all FastClick's event listeners.
   *
   * @returns {void}
   */
  FastClick.prototype.destroy = function () {
    var layer = this.layer;

    if (deviceIsAndroid) {
      layer.removeEventListener("mouseover", this.onMouse, true);
      layer.removeEventListener("mousedown", this.onMouse, true);
      layer.removeEventListener("mouseup", this.onMouse, true);
    }

    layer.removeEventListener("click", this.onClick, true);
    layer.removeEventListener("touchstart", this.onTouchStart, false);
    layer.removeEventListener("touchmove", this.onTouchMove, false);
    layer.removeEventListener("touchend", this.onTouchEnd, false);
    layer.removeEventListener("touchcancel", this.onTouchCancel, false);
  };

  /**
   * Check whether FastClick is needed.
   *
   * @param {Element} layer The layer to listen on
   */
  FastClick.notNeeded = function (layer) {
    var metaViewport;
    var chromeVersion;
    var blackberryVersion;
    var firefoxVersion;

    // Devices that don't support touch don't need FastClick
    if (typeof window.ontouchstart === "undefined") {
      return true;
    }

    // Chrome version - zero for other browsers
    chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

    if (chromeVersion) {
      if (deviceIsAndroid) {
        metaViewport = document.querySelector("meta[name=viewport]");

        if (metaViewport) {
          // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
          if (metaViewport.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }
          // Chrome 32 and above with width=device-width or less don't need FastClick
          if (
            chromeVersion > 31 &&
            document.documentElement.scrollWidth <= window.outerWidth
          ) {
            return true;
          }
        }

        // Chrome desktop doesn't need FastClick (issue #15)
      } else {
        return true;
      }
    }

    if (deviceIsBlackBerry10) {
      blackberryVersion = navigator.userAgent.match(
        /Version\/([0-9]*)\.([0-9]*)/
      );

      // BlackBerry 10.3+ does not require Fastclick library.
      // https://github.com/ftlabs/fastclick/issues/251
      if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
        metaViewport = document.querySelector("meta[name=viewport]");

        if (metaViewport) {
          // user-scalable=no eliminates click delay.
          if (metaViewport.content.indexOf("user-scalable=no") !== -1) {
            return true;
          }
          // width=device-width (or less than device-width) eliminates click delay.
          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    }

    // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
    if (
      layer.style.msTouchAction === "none" ||
      layer.style.touchAction === "manipulation"
    ) {
      return true;
    }

    // Firefox version - zero for other browsers
    firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [
      ,
      0,
    ])[1];

    if (firefoxVersion >= 27) {
      // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

      metaViewport = document.querySelector("meta[name=viewport]");
      if (
        metaViewport &&
        (metaViewport.content.indexOf("user-scalable=no") !== -1 ||
          document.documentElement.scrollWidth <= window.outerWidth)
      ) {
        return true;
      }
    }

    // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
    // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
    if (
      layer.style.touchAction === "none" ||
      layer.style.touchAction === "manipulation"
    ) {
      return true;
    }

    return false;
  };

  /**
   * Factory method for creating a FastClick object
   *
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */
  FastClick.attach = function (layer, options) {
    return new FastClick(layer, options);
  };

  if (
    typeof define === "function" &&
    typeof define.amd === "object" &&
    define.amd
  ) {
    // AMD. Register as an anonymous module.
    define(function () {
      return FastClick;
    });
  } else if (typeof module !== "undefined" && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;
  } else {
    window.FastClick = FastClick;
  }
})();

/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!(function (a, b, c, d) {
  "use strict";
  function e(a, b, c) {
    return setTimeout(j(a, c), b);
  }
  function f(a, b, c) {
    return Array.isArray(a) ? (g(a, c[b], c), !0) : !1;
  }
  function g(a, b, c) {
    var e;
    if (a)
      if (a.forEach) a.forEach(b, c);
      else if (a.length !== d)
        for (e = 0; e < a.length; ) b.call(c, a[e], e, a), e++;
      else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a);
  }
  function h(b, c, d) {
    var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
    return function () {
      var c = new Error("get-stack-trace"),
        d =
          c && c.stack
            ? c.stack
                .replace(/^[^\(]+?[\n$]/gm, "")
                .replace(/^\s+at\s+/gm, "")
                .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
            : "Unknown Stack Trace",
        f = a.console && (a.console.warn || a.console.log);
      return f && f.call(a.console, e, d), b.apply(this, arguments);
    };
  }
  function i(a, b, c) {
    var d,
      e = b.prototype;
    (d = a.prototype = Object.create(e)),
      (d.constructor = a),
      (d._super = e),
      c && la(d, c);
  }
  function j(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }
  function k(a, b) {
    return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a;
  }
  function l(a, b) {
    return a === d ? b : a;
  }
  function m(a, b, c) {
    g(q(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }
  function n(a, b, c) {
    g(q(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }
  function o(a, b) {
    for (; a; ) {
      if (a == b) return !0;
      a = a.parentNode;
    }
    return !1;
  }
  function p(a, b) {
    return a.indexOf(b) > -1;
  }
  function q(a) {
    return a.trim().split(/\s+/g);
  }
  function r(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);
    for (var d = 0; d < a.length; ) {
      if ((c && a[d][c] == b) || (!c && a[d] === b)) return d;
      d++;
    }
    return -1;
  }
  function s(a) {
    return Array.prototype.slice.call(a, 0);
  }
  function t(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length; ) {
      var g = b ? a[f][b] : a[f];
      r(e, g) < 0 && d.push(a[f]), (e[f] = g), f++;
    }
    return (
      c &&
        (d = b
          ? d.sort(function (a, c) {
              return a[b] > c[b];
            })
          : d.sort()),
      d
    );
  }
  function u(a, b) {
    for (
      var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0;
      g < ma.length;

    ) {
      if (((c = ma[g]), (e = c ? c + f : b), e in a)) return e;
      g++;
    }
    return d;
  }
  function v() {
    return ua++;
  }
  function w(b) {
    var c = b.ownerDocument || b;
    return c.defaultView || c.parentWindow || a;
  }
  function x(a, b) {
    var c = this;
    (this.manager = a),
      (this.callback = b),
      (this.element = a.element),
      (this.target = a.options.inputTarget),
      (this.domHandler = function (b) {
        k(a.options.enable, [a]) && c.handler(b);
      }),
      this.init();
  }
  function y(a) {
    var b,
      c = a.options.inputClass;
    return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z);
  }
  function z(a, b, c) {
    var d = c.pointers.length,
      e = c.changedPointers.length,
      f = b & Ea && d - e === 0,
      g = b & (Ga | Ha) && d - e === 0;
    (c.isFirst = !!f),
      (c.isFinal = !!g),
      f && (a.session = {}),
      (c.eventType = b),
      A(a, c),
      a.emit("hammer.input", c),
      a.recognize(c),
      (a.session.prevInput = c);
  }
  function A(a, b) {
    var c = a.session,
      d = b.pointers,
      e = d.length;
    c.firstInput || (c.firstInput = D(b)),
      e > 1 && !c.firstMultiple
        ? (c.firstMultiple = D(b))
        : 1 === e && (c.firstMultiple = !1);
    var f = c.firstInput,
      g = c.firstMultiple,
      h = g ? g.center : f.center,
      i = (b.center = E(d));
    (b.timeStamp = ra()),
      (b.deltaTime = b.timeStamp - f.timeStamp),
      (b.angle = I(h, i)),
      (b.distance = H(h, i)),
      B(c, b),
      (b.offsetDirection = G(b.deltaX, b.deltaY));
    var j = F(b.deltaTime, b.deltaX, b.deltaY);
    (b.overallVelocityX = j.x),
      (b.overallVelocityY = j.y),
      (b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y),
      (b.scale = g ? K(g.pointers, d) : 1),
      (b.rotation = g ? J(g.pointers, d) : 0),
      (b.maxPointers = c.prevInput
        ? b.pointers.length > c.prevInput.maxPointers
          ? b.pointers.length
          : c.prevInput.maxPointers
        : b.pointers.length),
      C(c, b);
    var k = a.element;
    o(b.srcEvent.target, k) && (k = b.srcEvent.target), (b.target = k);
  }
  function B(a, b) {
    var c = b.center,
      d = a.offsetDelta || {},
      e = a.prevDelta || {},
      f = a.prevInput || {};
    (b.eventType !== Ea && f.eventType !== Ga) ||
      ((e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }),
      (d = a.offsetDelta = { x: c.x, y: c.y })),
      (b.deltaX = e.x + (c.x - d.x)),
      (b.deltaY = e.y + (c.y - d.y));
  }
  function C(a, b) {
    var c,
      e,
      f,
      g,
      h = a.lastInterval || b,
      i = b.timeStamp - h.timeStamp;
    if (b.eventType != Ha && (i > Da || h.velocity === d)) {
      var j = b.deltaX - h.deltaX,
        k = b.deltaY - h.deltaY,
        l = F(i, j, k);
      (e = l.x),
        (f = l.y),
        (c = qa(l.x) > qa(l.y) ? l.x : l.y),
        (g = G(j, k)),
        (a.lastInterval = b);
    } else
      (c = h.velocity), (e = h.velocityX), (f = h.velocityY), (g = h.direction);
    (b.velocity = c), (b.velocityX = e), (b.velocityY = f), (b.direction = g);
  }
  function D(a) {
    for (var b = [], c = 0; c < a.pointers.length; )
      (b[c] = {
        clientX: pa(a.pointers[c].clientX),
        clientY: pa(a.pointers[c].clientY),
      }),
        c++;
    return {
      timeStamp: ra(),
      pointers: b,
      center: E(b),
      deltaX: a.deltaX,
      deltaY: a.deltaY,
    };
  }
  function E(a) {
    var b = a.length;
    if (1 === b) return { x: pa(a[0].clientX), y: pa(a[0].clientY) };
    for (var c = 0, d = 0, e = 0; b > e; )
      (c += a[e].clientX), (d += a[e].clientY), e++;
    return { x: pa(c / b), y: pa(d / b) };
  }
  function F(a, b, c) {
    return { x: b / a || 0, y: c / a || 0 };
  }
  function G(a, b) {
    return a === b ? Ia : qa(a) >= qa(b) ? (0 > a ? Ja : Ka) : 0 > b ? La : Ma;
  }
  function H(a, b, c) {
    c || (c = Qa);
    var d = b[c[0]] - a[c[0]],
      e = b[c[1]] - a[c[1]];
    return Math.sqrt(d * d + e * e);
  }
  function I(a, b, c) {
    c || (c = Qa);
    var d = b[c[0]] - a[c[0]],
      e = b[c[1]] - a[c[1]];
    return (180 * Math.atan2(e, d)) / Math.PI;
  }
  function J(a, b) {
    return I(b[1], b[0], Ra) + I(a[1], a[0], Ra);
  }
  function K(a, b) {
    return H(b[0], b[1], Ra) / H(a[0], a[1], Ra);
  }
  function L() {
    (this.evEl = Ta),
      (this.evWin = Ua),
      (this.pressed = !1),
      x.apply(this, arguments);
  }
  function M() {
    (this.evEl = Xa),
      (this.evWin = Ya),
      x.apply(this, arguments),
      (this.store = this.manager.session.pointerEvents = []);
  }
  function N() {
    (this.evTarget = $a),
      (this.evWin = _a),
      (this.started = !1),
      x.apply(this, arguments);
  }
  function O(a, b) {
    var c = s(a.touches),
      d = s(a.changedTouches);
    return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d];
  }
  function P() {
    (this.evTarget = bb), (this.targetIds = {}), x.apply(this, arguments);
  }
  function Q(a, b) {
    var c = s(a.touches),
      d = this.targetIds;
    if (b & (Ea | Fa) && 1 === c.length)
      return (d[c[0].identifier] = !0), [c, c];
    var e,
      f,
      g = s(a.changedTouches),
      h = [],
      i = this.target;
    if (
      ((f = c.filter(function (a) {
        return o(a.target, i);
      })),
      b === Ea)
    )
      for (e = 0; e < f.length; ) (d[f[e].identifier] = !0), e++;
    for (e = 0; e < g.length; )
      d[g[e].identifier] && h.push(g[e]),
        b & (Ga | Ha) && delete d[g[e].identifier],
        e++;
    return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0;
  }
  function R() {
    x.apply(this, arguments);
    var a = j(this.handler, this);
    (this.touch = new P(this.manager, a)),
      (this.mouse = new L(this.manager, a)),
      (this.primaryTouch = null),
      (this.lastTouches = []);
  }
  function S(a, b) {
    a & Ea
      ? ((this.primaryTouch = b.changedPointers[0].identifier), T.call(this, b))
      : a & (Ga | Ha) && T.call(this, b);
  }
  function T(a) {
    var b = a.changedPointers[0];
    if (b.identifier === this.primaryTouch) {
      var c = { x: b.clientX, y: b.clientY };
      this.lastTouches.push(c);
      var d = this.lastTouches,
        e = function () {
          var a = d.indexOf(c);
          a > -1 && d.splice(a, 1);
        };
      setTimeout(e, cb);
    }
  }
  function U(a) {
    for (
      var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0;
      d < this.lastTouches.length;
      d++
    ) {
      var e = this.lastTouches[d],
        f = Math.abs(b - e.x),
        g = Math.abs(c - e.y);
      if (db >= f && db >= g) return !0;
    }
    return !1;
  }
  function V(a, b) {
    (this.manager = a), this.set(b);
  }
  function W(a) {
    if (p(a, jb)) return jb;
    var b = p(a, kb),
      c = p(a, lb);
    return b && c ? jb : b || c ? (b ? kb : lb) : p(a, ib) ? ib : hb;
  }
  function X() {
    if (!fb) return !1;
    var b = {},
      c = a.CSS && a.CSS.supports;
    return (
      ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(
        function (d) {
          b[d] = c ? a.CSS.supports("touch-action", d) : !0;
        }
      ),
      b
    );
  }
  function Y(a) {
    (this.options = la({}, this.defaults, a || {})),
      (this.id = v()),
      (this.manager = null),
      (this.options.enable = l(this.options.enable, !0)),
      (this.state = nb),
      (this.simultaneous = {}),
      (this.requireFail = []);
  }
  function Z(a) {
    return a & sb
      ? "cancel"
      : a & qb
      ? "end"
      : a & pb
      ? "move"
      : a & ob
      ? "start"
      : "";
  }
  function $(a) {
    return a == Ma
      ? "down"
      : a == La
      ? "up"
      : a == Ja
      ? "left"
      : a == Ka
      ? "right"
      : "";
  }
  function _(a, b) {
    var c = b.manager;
    return c ? c.get(a) : a;
  }
  function aa() {
    Y.apply(this, arguments);
  }
  function ba() {
    aa.apply(this, arguments), (this.pX = null), (this.pY = null);
  }
  function ca() {
    aa.apply(this, arguments);
  }
  function da() {
    Y.apply(this, arguments), (this._timer = null), (this._input = null);
  }
  function ea() {
    aa.apply(this, arguments);
  }
  function fa() {
    aa.apply(this, arguments);
  }
  function ga() {
    Y.apply(this, arguments),
      (this.pTime = !1),
      (this.pCenter = !1),
      (this._timer = null),
      (this._input = null),
      (this.count = 0);
  }
  function ha(a, b) {
    return (
      (b = b || {}),
      (b.recognizers = l(b.recognizers, ha.defaults.preset)),
      new ia(a, b)
    );
  }
  function ia(a, b) {
    (this.options = la({}, ha.defaults, b || {})),
      (this.options.inputTarget = this.options.inputTarget || a),
      (this.handlers = {}),
      (this.session = {}),
      (this.recognizers = []),
      (this.oldCssProps = {}),
      (this.element = a),
      (this.input = y(this)),
      (this.touchAction = new V(this, this.options.touchAction)),
      ja(this, !0),
      g(
        this.options.recognizers,
        function (a) {
          var b = this.add(new a[0](a[1]));
          a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
        },
        this
      );
  }
  function ja(a, b) {
    var c = a.element;
    if (c.style) {
      var d;
      g(a.options.cssProps, function (e, f) {
        (d = u(c.style, f)),
          b
            ? ((a.oldCssProps[d] = c.style[d]), (c.style[d] = e))
            : (c.style[d] = a.oldCssProps[d] || "");
      }),
        b || (a.oldCssProps = {});
    }
  }
  function ka(a, c) {
    var d = b.createEvent("Event");
    d.initEvent(a, !0, !0), (d.gesture = c), c.target.dispatchEvent(d);
  }
  var la,
    ma = ["", "webkit", "Moz", "MS", "ms", "o"],
    na = b.createElement("div"),
    oa = "function",
    pa = Math.round,
    qa = Math.abs,
    ra = Date.now;
  la =
    "function" != typeof Object.assign
      ? function (a) {
          if (a === d || null === a)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e !== d && null !== e)
              for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f]);
          }
          return b;
        }
      : Object.assign;
  var sa = h(
      function (a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length; )
          (!c || (c && a[e[f]] === d)) && (a[e[f]] = b[e[f]]), f++;
        return a;
      },
      "extend",
      "Use `assign`."
    ),
    ta = h(
      function (a, b) {
        return sa(a, b, !0);
      },
      "merge",
      "Use `assign`."
    ),
    ua = 1,
    va = /mobile|tablet|ip(ad|hone|od)|android/i,
    wa = "ontouchstart" in a,
    xa = u(a, "PointerEvent") !== d,
    ya = wa && va.test(navigator.userAgent),
    za = "touch",
    Aa = "pen",
    Ba = "mouse",
    Ca = "kinect",
    Da = 25,
    Ea = 1,
    Fa = 2,
    Ga = 4,
    Ha = 8,
    Ia = 1,
    Ja = 2,
    Ka = 4,
    La = 8,
    Ma = 16,
    Na = Ja | Ka,
    Oa = La | Ma,
    Pa = Na | Oa,
    Qa = ["x", "y"],
    Ra = ["clientX", "clientY"];
  x.prototype = {
    handler: function () {},
    init: function () {
      this.evEl && m(this.element, this.evEl, this.domHandler),
        this.evTarget && m(this.target, this.evTarget, this.domHandler),
        this.evWin && m(w(this.element), this.evWin, this.domHandler);
    },
    destroy: function () {
      this.evEl && n(this.element, this.evEl, this.domHandler),
        this.evTarget && n(this.target, this.evTarget, this.domHandler),
        this.evWin && n(w(this.element), this.evWin, this.domHandler);
    },
  };
  var Sa = { mousedown: Ea, mousemove: Fa, mouseup: Ga },
    Ta = "mousedown",
    Ua = "mousemove mouseup";
  i(L, x, {
    handler: function (a) {
      var b = Sa[a.type];
      b & Ea && 0 === a.button && (this.pressed = !0),
        b & Fa && 1 !== a.which && (b = Ga),
        this.pressed &&
          (b & Ga && (this.pressed = !1),
          this.callback(this.manager, b, {
            pointers: [a],
            changedPointers: [a],
            pointerType: Ba,
            srcEvent: a,
          }));
    },
  });
  var Va = {
      pointerdown: Ea,
      pointermove: Fa,
      pointerup: Ga,
      pointercancel: Ha,
      pointerout: Ha,
    },
    Wa = { 2: za, 3: Aa, 4: Ba, 5: Ca },
    Xa = "pointerdown",
    Ya = "pointermove pointerup pointercancel";
  a.MSPointerEvent &&
    !a.PointerEvent &&
    ((Xa = "MSPointerDown"),
    (Ya = "MSPointerMove MSPointerUp MSPointerCancel")),
    i(M, x, {
      handler: function (a) {
        var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = Va[d],
          f = Wa[a.pointerType] || a.pointerType,
          g = f == za,
          h = r(b, a.pointerId, "pointerId");
        e & Ea && (0 === a.button || g)
          ? 0 > h && (b.push(a), (h = b.length - 1))
          : e & (Ga | Ha) && (c = !0),
          0 > h ||
            ((b[h] = a),
            this.callback(this.manager, e, {
              pointers: b,
              changedPointers: [a],
              pointerType: f,
              srcEvent: a,
            }),
            c && b.splice(h, 1));
      },
    });
  var Za = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
    $a = "touchstart",
    _a = "touchstart touchmove touchend touchcancel";
  i(N, x, {
    handler: function (a) {
      var b = Za[a.type];
      if ((b === Ea && (this.started = !0), this.started)) {
        var c = O.call(this, a, b);
        b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1),
          this.callback(this.manager, b, {
            pointers: c[0],
            changedPointers: c[1],
            pointerType: za,
            srcEvent: a,
          });
      }
    },
  });
  var ab = { touchstart: Ea, touchmove: Fa, touchend: Ga, touchcancel: Ha },
    bb = "touchstart touchmove touchend touchcancel";
  i(P, x, {
    handler: function (a) {
      var b = ab[a.type],
        c = Q.call(this, a, b);
      c &&
        this.callback(this.manager, b, {
          pointers: c[0],
          changedPointers: c[1],
          pointerType: za,
          srcEvent: a,
        });
    },
  });
  var cb = 2500,
    db = 25;
  i(R, x, {
    handler: function (a, b, c) {
      var d = c.pointerType == za,
        e = c.pointerType == Ba;
      if (
        !(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)
      ) {
        if (d) S.call(this, b, c);
        else if (e && U.call(this, c)) return;
        this.callback(a, b, c);
      }
    },
    destroy: function () {
      this.touch.destroy(), this.mouse.destroy();
    },
  });
  var eb = u(na.style, "touchAction"),
    fb = eb !== d,
    gb = "compute",
    hb = "auto",
    ib = "manipulation",
    jb = "none",
    kb = "pan-x",
    lb = "pan-y",
    mb = X();
  V.prototype = {
    set: function (a) {
      a == gb && (a = this.compute()),
        fb &&
          this.manager.element.style &&
          mb[a] &&
          (this.manager.element.style[eb] = a),
        (this.actions = a.toLowerCase().trim());
    },
    update: function () {
      this.set(this.manager.options.touchAction);
    },
    compute: function () {
      var a = [];
      return (
        g(this.manager.recognizers, function (b) {
          k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
        }),
        W(a.join(" "))
      );
    },
    preventDefaults: function (a) {
      var b = a.srcEvent,
        c = a.offsetDirection;
      if (this.manager.session.prevented) return void b.preventDefault();
      var d = this.actions,
        e = p(d, jb) && !mb[jb],
        f = p(d, lb) && !mb[lb],
        g = p(d, kb) && !mb[kb];
      if (e) {
        var h = 1 === a.pointers.length,
          i = a.distance < 2,
          j = a.deltaTime < 2050;
        if (h && i && j) return;
      }
      return g && f
        ? void 0
        : e || (f && c & Na) || (g && c & Oa)
        ? this.preventSrc(b)
        : void 0;
    },
    preventSrc: function (a) {
      (this.manager.session.prevented = !0), a.preventDefault();
    },
  };
  var nb = 1,
    ob = 2,
    pb = 4,
    qb = 8,
    rb = qb,
    sb = 16,
    tb = 32;
  (Y.prototype = {
    defaults: {},
    set: function (a) {
      return (
        la(this.options, a),
        this.manager && this.manager.touchAction.update(),
        this
      );
    },
    recognizeWith: function (a) {
      if (f(a, "recognizeWith", this)) return this;
      var b = this.simultaneous;
      return (
        (a = _(a, this)),
        b[a.id] || ((b[a.id] = a), a.recognizeWith(this)),
        this
      );
    },
    dropRecognizeWith: function (a) {
      return f(a, "dropRecognizeWith", this)
        ? this
        : ((a = _(a, this)), delete this.simultaneous[a.id], this);
    },
    requireFailure: function (a) {
      if (f(a, "requireFailure", this)) return this;
      var b = this.requireFail;
      return (
        (a = _(a, this)),
        -1 === r(b, a) && (b.push(a), a.requireFailure(this)),
        this
      );
    },
    dropRequireFailure: function (a) {
      if (f(a, "dropRequireFailure", this)) return this;
      a = _(a, this);
      var b = r(this.requireFail, a);
      return b > -1 && this.requireFail.splice(b, 1), this;
    },
    hasRequireFailures: function () {
      return this.requireFail.length > 0;
    },
    canRecognizeWith: function (a) {
      return !!this.simultaneous[a.id];
    },
    emit: function (a) {
      function b(b) {
        c.manager.emit(b, a);
      }
      var c = this,
        d = this.state;
      qb > d && b(c.options.event + Z(d)),
        b(c.options.event),
        a.additionalEvent && b(a.additionalEvent),
        d >= qb && b(c.options.event + Z(d));
    },
    tryEmit: function (a) {
      return this.canEmit() ? this.emit(a) : void (this.state = tb);
    },
    canEmit: function () {
      for (var a = 0; a < this.requireFail.length; ) {
        if (!(this.requireFail[a].state & (tb | nb))) return !1;
        a++;
      }
      return !0;
    },
    recognize: function (a) {
      var b = la({}, a);
      return k(this.options.enable, [this, b])
        ? (this.state & (rb | sb | tb) && (this.state = nb),
          (this.state = this.process(b)),
          void (this.state & (ob | pb | qb | sb) && this.tryEmit(b)))
        : (this.reset(), void (this.state = tb));
    },
    process: function (a) {},
    getTouchAction: function () {},
    reset: function () {},
  }),
    i(aa, Y, {
      defaults: { pointers: 1 },
      attrTest: function (a) {
        var b = this.options.pointers;
        return 0 === b || a.pointers.length === b;
      },
      process: function (a) {
        var b = this.state,
          c = a.eventType,
          d = b & (ob | pb),
          e = this.attrTest(a);
        return d && (c & Ha || !e)
          ? b | sb
          : d || e
          ? c & Ga
            ? b | qb
            : b & ob
            ? b | pb
            : ob
          : tb;
      },
    }),
    i(ba, aa, {
      defaults: { event: "pan", threshold: 10, pointers: 1, direction: Pa },
      getTouchAction: function () {
        var a = this.options.direction,
          b = [];
        return a & Na && b.push(lb), a & Oa && b.push(kb), b;
      },
      directionTest: function (a) {
        var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;
        return (
          e & b.direction ||
            (b.direction & Na
              ? ((e = 0 === f ? Ia : 0 > f ? Ja : Ka),
                (c = f != this.pX),
                (d = Math.abs(a.deltaX)))
              : ((e = 0 === g ? Ia : 0 > g ? La : Ma),
                (c = g != this.pY),
                (d = Math.abs(a.deltaY)))),
          (a.direction = e),
          c && d > b.threshold && e & b.direction
        );
      },
      attrTest: function (a) {
        return (
          aa.prototype.attrTest.call(this, a) &&
          (this.state & ob || (!(this.state & ob) && this.directionTest(a)))
        );
      },
      emit: function (a) {
        (this.pX = a.deltaX), (this.pY = a.deltaY);
        var b = $(a.direction);
        b && (a.additionalEvent = this.options.event + b),
          this._super.emit.call(this, a);
      },
    }),
    i(ca, aa, {
      defaults: { event: "pinch", threshold: 0, pointers: 2 },
      getTouchAction: function () {
        return [jb];
      },
      attrTest: function (a) {
        return (
          this._super.attrTest.call(this, a) &&
          (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
        );
      },
      emit: function (a) {
        if (1 !== a.scale) {
          var b = a.scale < 1 ? "in" : "out";
          a.additionalEvent = this.options.event + b;
        }
        this._super.emit.call(this, a);
      },
    }),
    i(da, Y, {
      defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
      getTouchAction: function () {
        return [hb];
      },
      process: function (a) {
        var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime > b.time;
        if (((this._input = a), !d || !c || (a.eventType & (Ga | Ha) && !f)))
          this.reset();
        else if (a.eventType & Ea)
          this.reset(),
            (this._timer = e(
              function () {
                (this.state = rb), this.tryEmit();
              },
              b.time,
              this
            ));
        else if (a.eventType & Ga) return rb;
        return tb;
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function (a) {
        this.state === rb &&
          (a && a.eventType & Ga
            ? this.manager.emit(this.options.event + "up", a)
            : ((this._input.timeStamp = ra()),
              this.manager.emit(this.options.event, this._input)));
      },
    }),
    i(ea, aa, {
      defaults: { event: "rotate", threshold: 0, pointers: 2 },
      getTouchAction: function () {
        return [jb];
      },
      attrTest: function (a) {
        return (
          this._super.attrTest.call(this, a) &&
          (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
        );
      },
    }),
    i(fa, aa, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.3,
        direction: Na | Oa,
        pointers: 1,
      },
      getTouchAction: function () {
        return ba.prototype.getTouchAction.call(this);
      },
      attrTest: function (a) {
        var b,
          c = this.options.direction;
        return (
          c & (Na | Oa)
            ? (b = a.overallVelocity)
            : c & Na
            ? (b = a.overallVelocityX)
            : c & Oa && (b = a.overallVelocityY),
          this._super.attrTest.call(this, a) &&
            c & a.offsetDirection &&
            a.distance > this.options.threshold &&
            a.maxPointers == this.options.pointers &&
            qa(b) > this.options.velocity &&
            a.eventType & Ga
        );
      },
      emit: function (a) {
        var b = $(a.offsetDirection);
        b && this.manager.emit(this.options.event + b, a),
          this.manager.emit(this.options.event, a);
      },
    }),
    i(ga, Y, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10,
      },
      getTouchAction: function () {
        return [ib];
      },
      process: function (a) {
        var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          f = a.deltaTime < b.time;
        if ((this.reset(), a.eventType & Ea && 0 === this.count))
          return this.failTimeout();
        if (d && f && c) {
          if (a.eventType != Ga) return this.failTimeout();
          var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
          (this.pTime = a.timeStamp),
            (this.pCenter = a.center),
            h && g ? (this.count += 1) : (this.count = 1),
            (this._input = a);
          var i = this.count % b.taps;
          if (0 === i)
            return this.hasRequireFailures()
              ? ((this._timer = e(
                  function () {
                    (this.state = rb), this.tryEmit();
                  },
                  b.interval,
                  this
                )),
                ob)
              : rb;
        }
        return tb;
      },
      failTimeout: function () {
        return (
          (this._timer = e(
            function () {
              this.state = tb;
            },
            this.options.interval,
            this
          )),
          tb
        );
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function () {
        this.state == rb &&
          ((this._input.tapCount = this.count),
          this.manager.emit(this.options.event, this._input));
      },
    }),
    (ha.VERSION = "2.0.7"),
    (ha.defaults = {
      domEvents: !1,
      touchAction: gb,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [ea, { enable: !1 }],
        [ca, { enable: !1 }, ["rotate"]],
        [fa, { direction: Na }],
        [ba, { direction: Na }, ["swipe"]],
        [ga],
        [ga, { event: "doubletap", taps: 2 }, ["tap"]],
        [da],
      ],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)",
      },
    });
  var ub = 1,
    vb = 2;
  (ia.prototype = {
    set: function (a) {
      return (
        la(this.options, a),
        a.touchAction && this.touchAction.update(),
        a.inputTarget &&
          (this.input.destroy(),
          (this.input.target = a.inputTarget),
          this.input.init()),
        this
      );
    },
    stop: function (a) {
      this.session.stopped = a ? vb : ub;
    },
    recognize: function (a) {
      var b = this.session;
      if (!b.stopped) {
        this.touchAction.preventDefaults(a);
        var c,
          d = this.recognizers,
          e = b.curRecognizer;
        (!e || (e && e.state & rb)) && (e = b.curRecognizer = null);
        for (var f = 0; f < d.length; )
          (c = d[f]),
            b.stopped === vb || (e && c != e && !c.canRecognizeWith(e))
              ? c.reset()
              : c.recognize(a),
            !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c),
            f++;
      }
    },
    get: function (a) {
      if (a instanceof Y) return a;
      for (var b = this.recognizers, c = 0; c < b.length; c++)
        if (b[c].options.event == a) return b[c];
      return null;
    },
    add: function (a) {
      if (f(a, "add", this)) return this;
      var b = this.get(a.options.event);
      return (
        b && this.remove(b),
        this.recognizers.push(a),
        (a.manager = this),
        this.touchAction.update(),
        a
      );
    },
    remove: function (a) {
      if (f(a, "remove", this)) return this;
      if ((a = this.get(a))) {
        var b = this.recognizers,
          c = r(b, a);
        -1 !== c && (b.splice(c, 1), this.touchAction.update());
      }
      return this;
    },
    on: function (a, b) {
      if (a !== d && b !== d) {
        var c = this.handlers;
        return (
          g(q(a), function (a) {
            (c[a] = c[a] || []), c[a].push(b);
          }),
          this
        );
      }
    },
    off: function (a, b) {
      if (a !== d) {
        var c = this.handlers;
        return (
          g(q(a), function (a) {
            b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a];
          }),
          this
        );
      }
    },
    emit: function (a, b) {
      this.options.domEvents && ka(a, b);
      var c = this.handlers[a] && this.handlers[a].slice();
      if (c && c.length) {
        (b.type = a),
          (b.preventDefault = function () {
            b.srcEvent.preventDefault();
          });
        for (var d = 0; d < c.length; ) c[d](b), d++;
      }
    },
    destroy: function () {
      this.element && ja(this, !1),
        (this.handlers = {}),
        (this.session = {}),
        this.input.destroy(),
        (this.element = null);
    },
  }),
    la(ha, {
      INPUT_START: Ea,
      INPUT_MOVE: Fa,
      INPUT_END: Ga,
      INPUT_CANCEL: Ha,
      STATE_POSSIBLE: nb,
      STATE_BEGAN: ob,
      STATE_CHANGED: pb,
      STATE_ENDED: qb,
      STATE_RECOGNIZED: rb,
      STATE_CANCELLED: sb,
      STATE_FAILED: tb,
      DIRECTION_NONE: Ia,
      DIRECTION_LEFT: Ja,
      DIRECTION_RIGHT: Ka,
      DIRECTION_UP: La,
      DIRECTION_DOWN: Ma,
      DIRECTION_HORIZONTAL: Na,
      DIRECTION_VERTICAL: Oa,
      DIRECTION_ALL: Pa,
      Manager: ia,
      Input: x,
      TouchAction: V,
      TouchInput: P,
      MouseInput: L,
      PointerEventInput: M,
      TouchMouseInput: R,
      SingleTouchInput: N,
      Recognizer: Y,
      AttrRecognizer: aa,
      Tap: ga,
      Pan: ba,
      Swipe: fa,
      Pinch: ca,
      Rotate: ea,
      Press: da,
      on: m,
      off: n,
      each: g,
      merge: ta,
      extend: sa,
      assign: la,
      inherit: i,
      bindFn: j,
      prefixed: u,
    });
  var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
  (wb.Hammer = ha),
    "function" == typeof define && define.amd
      ? define(function () {
          return ha;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = ha)
      : (a[c] = ha);
})(window, document, "Hammer");
//# sourceMappingURL=hammer.min.js.map
/*
 * Hamster.js v1.1.2
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

(function (window, document) {
  "use strict";

  /**
   * Hamster
   * use this to create instances
   * @returns {Hamster.Instance}
   * @constructor
   */
  var Hamster = function (element) {
    return new Hamster.Instance(element);
  };

  // default event name
  Hamster.SUPPORT = "wheel";

  // default DOM methods
  Hamster.ADD_EVENT = "addEventListener";
  Hamster.REMOVE_EVENT = "removeEventListener";
  Hamster.PREFIX = "";

  // until browser inconsistencies have been fixed...
  Hamster.READY = false;

  Hamster.Instance = function (element) {
    if (!Hamster.READY) {
      // fix browser inconsistencies
      Hamster.normalise.browser();

      // Hamster is ready...!
      Hamster.READY = true;
    }

    this.element = element;

    // store attached event handlers
    this.handlers = [];

    // return instance
    return this;
  };

  /**
   * create new hamster instance
   * all methods should return the instance itself, so it is chainable.
   * @param   {HTMLElement}       element
   * @returns {Hamster.Instance}
   * @constructor
   */
  Hamster.Instance.prototype = {
    /**
     * bind events to the instance
     * @param   {Function}    handler
     * @param   {Boolean}     useCapture
     * @returns {Hamster.Instance}
     */
    wheel: function onEvent(handler, useCapture) {
      Hamster.event.add(this, Hamster.SUPPORT, handler, useCapture);

      // handle MozMousePixelScroll in older Firefox
      if (Hamster.SUPPORT === "DOMMouseScroll") {
        Hamster.event.add(this, "MozMousePixelScroll", handler, useCapture);
      }

      return this;
    },

    /**
     * unbind events to the instance
     * @param   {Function}    handler
     * @param   {Boolean}     useCapture
     * @returns {Hamster.Instance}
     */
    unwheel: function offEvent(handler, useCapture) {
      // if no handler argument,
      // unbind the last bound handler (if exists)
      if (handler === undefined && (handler = this.handlers.slice(-1)[0])) {
        handler = handler.original;
      }

      Hamster.event.remove(this, Hamster.SUPPORT, handler, useCapture);

      // handle MozMousePixelScroll in older Firefox
      if (Hamster.SUPPORT === "DOMMouseScroll") {
        Hamster.event.remove(this, "MozMousePixelScroll", handler, useCapture);
      }

      return this;
    },
  };

  Hamster.event = {
    /**
     * cross-browser 'addWheelListener'
     * @param   {Instance}    hamster
     * @param   {String}      eventName
     * @param   {Function}    handler
     * @param   {Boolean}     useCapture
     */
    add: function add(hamster, eventName, handler, useCapture) {
      // store the original handler
      var originalHandler = handler;

      // redefine the handler
      handler = function (originalEvent) {
        if (!originalEvent) {
          originalEvent = window.event;
        }

        // create a normalised event object,
        // and normalise "deltas" of the mouse wheel
        var event = Hamster.normalise.event(originalEvent),
          delta = Hamster.normalise.delta(originalEvent);

        // fire the original handler with normalised arguments
        return originalHandler(event, delta[0], delta[1], delta[2]);
      };

      // cross-browser addEventListener
      hamster.element[Hamster.ADD_EVENT](
        Hamster.PREFIX + eventName,
        handler,
        useCapture || false
      );

      // store original and normalised handlers on the instance
      hamster.handlers.push({
        original: originalHandler,
        normalised: handler,
      });
    },

    /**
     * removeWheelListener
     * @param   {Instance}    hamster
     * @param   {String}      eventName
     * @param   {Function}    handler
     * @param   {Boolean}     useCapture
     */
    remove: function remove(hamster, eventName, handler, useCapture) {
      // find the normalised handler on the instance
      var originalHandler = handler,
        lookup = {},
        handlers;
      for (var i = 0, len = hamster.handlers.length; i < len; ++i) {
        lookup[hamster.handlers[i].original] = hamster.handlers[i];
      }
      handlers = lookup[originalHandler];
      handler = handlers.normalised;

      // cross-browser removeEventListener
      hamster.element[Hamster.REMOVE_EVENT](
        Hamster.PREFIX + eventName,
        handler,
        useCapture || false
      );

      // remove original and normalised handlers from the instance
      for (var h in hamster.handlers) {
        if (hamster.handlers[h] == handlers) {
          hamster.handlers.splice(h, 1);
          break;
        }
      }
    },
  };

  /**
   * these hold the lowest deltas,
   * used to normalise the delta values
   * @type {Number}
   */
  var lowestDelta, lowestDeltaXY;

  Hamster.normalise = {
    /**
     * fix browser inconsistencies
     */
    browser: function normaliseBrowser() {
      // detect deprecated wheel events
      if (!("onwheel" in document || document.documentMode >= 9)) {
        Hamster.SUPPORT =
          document.onmousewheel !== undefined
            ? "mousewheel" // webkit and IE < 9 support at least "mousewheel"
            : "DOMMouseScroll"; // assume remaining browsers are older Firefox
      }

      // detect deprecated event model
      if (!window.addEventListener) {
        // assume IE < 9
        Hamster.ADD_EVENT = "attachEvent";
        Hamster.REMOVE_EVENT = "detachEvent";
        Hamster.PREFIX = "on";
      }
    },

    /**
     * create a normalised event object
     * @param   {Function}    originalEvent
     * @returns {Object}      event
     */
    event: function normaliseEvent(originalEvent) {
      var event = {
        // keep a reference to the original event object
        originalEvent: originalEvent,
        target: originalEvent.target || originalEvent.srcElement,
        type: "wheel",
        deltaMode: originalEvent.type === "MozMousePixelScroll" ? 0 : 1,
        deltaX: 0,
        delatZ: 0,
        preventDefault: function () {
          if (originalEvent.preventDefault) {
            originalEvent.preventDefault();
          } else {
            originalEvent.returnValue = false;
          }
        },
        stopPropagation: function () {
          if (originalEvent.stopPropagation) {
            originalEvent.stopPropagation();
          } else {
            originalEvent.cancelBubble = false;
          }
        },
      };

      // calculate deltaY (and deltaX) according to the event

      // 'mousewheel'
      if (originalEvent.wheelDelta) {
        event.deltaY = (-1 / 40) * originalEvent.wheelDelta;
      }
      // webkit
      if (originalEvent.wheelDeltaX) {
        event.deltaX = (-1 / 40) * originalEvent.wheelDeltaX;
      }

      // 'DomMouseScroll'
      if (originalEvent.detail) {
        event.deltaY = originalEvent.detail;
      }

      return event;
    },

    /**
     * normalise 'deltas' of the mouse wheel
     * @param   {Function}    originalEvent
     * @returns {Array}       deltas
     */
    delta: function normaliseDelta(originalEvent) {
      var delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0,
        absDeltaXY = 0,
        fn;

      // normalise deltas according to the event

      // 'wheel' event
      if (originalEvent.deltaY) {
        deltaY = originalEvent.deltaY * -1;
        delta = deltaY;
      }
      if (originalEvent.deltaX) {
        deltaX = originalEvent.deltaX;
        delta = deltaX * -1;
      }

      // 'mousewheel' event
      if (originalEvent.wheelDelta) {
        delta = originalEvent.wheelDelta;
      }
      // webkit
      if (originalEvent.wheelDeltaY) {
        deltaY = originalEvent.wheelDeltaY;
      }
      if (originalEvent.wheelDeltaX) {
        deltaX = originalEvent.wheelDeltaX * -1;
      }

      // 'DomMouseScroll' event
      if (originalEvent.detail) {
        delta = originalEvent.detail * -1;
      }

      // Don't return NaN
      if (delta === 0) {
        return [0, 0, 0];
      }

      // look for lowest delta to normalize the delta values
      absDelta = Math.abs(delta);
      if (!lowestDelta || absDelta < lowestDelta) {
        lowestDelta = absDelta;
      }
      absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
      if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
        lowestDeltaXY = absDeltaXY;
      }

      // convert deltas to whole numbers
      fn = delta > 0 ? "floor" : "ceil";
      delta = Math[fn](delta / lowestDelta);
      deltaX = Math[fn](deltaX / lowestDeltaXY);
      deltaY = Math[fn](deltaY / lowestDeltaXY);

      return [delta, deltaX, deltaY];
    },
  };

  if (typeof window.define === "function" && window.define.amd) {
    // AMD
    window.define("hamster", [], function () {
      return Hamster;
    });
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = Hamster;
  } else {
    // Browser global
    window.Hamster = Hamster;
  }
})(window, window.document);

/*!
 * VERSION: 0.5.6
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
!(function (a) {
  "use strict";
  var b = a.GreenSockGlobals || a,
    c = function (a) {
      var c,
        d = a.split("."),
        e = b;
      for (c = 0; c < d.length; c++) e[d[c]] = e = e[d[c]] || {};
      return e;
    },
    d = c("com.greensock.utils"),
    e = function (a) {
      var b = a.nodeType,
        c = "";
      if (1 === b || 9 === b || 11 === b) {
        if ("string" == typeof a.textContent) return a.textContent;
        for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
      } else if (3 === b || 4 === b) return a.nodeValue;
      return c;
    },
    f = document,
    g = f.defaultView ? f.defaultView.getComputedStyle : function () {},
    h = /([A-Z])/g,
    i = function (a, b, c, d) {
      var e;
      return (
        (c = c || g(a, null))
          ? ((a = c.getPropertyValue(b.replace(h, "-$1").toLowerCase())),
            (e = a || c.length ? a : c[b]))
          : a.currentStyle && ((c = a.currentStyle), (e = c[b])),
        d ? e : parseInt(e, 10) || 0
      );
    },
    j = function (a) {
      return a.length &&
        a[0] &&
        ((a[0].nodeType && a[0].style && !a.nodeType) ||
          (a[0].length && a[0][0]))
        ? !0
        : !1;
    },
    k = function (a) {
      var b,
        c,
        d,
        e = [],
        f = a.length;
      for (b = 0; f > b; b++)
        if (((c = a[b]), j(c)))
          for (d = c.length, d = 0; d < c.length; d++) e.push(c[d]);
        else e.push(c);
      return e;
    },
    l = /(?:\r|\n|\t\t)/g,
    m = /(?:\s\s+)/g,
    n = 55296,
    o = 56319,
    p = 56320,
    q = 127462,
    r = 127487,
    s = 127995,
    t = 127999,
    u = function (a) {
      return ((a.charCodeAt(0) - n) << 10) + (a.charCodeAt(1) - p) + 65536;
    },
    v = f.all && !f.addEventListener,
    w =
      " style='position:relative;display:inline-block;" +
      (v ? "*display:inline;*zoom:1;'" : "'"),
    x = function (a, b) {
      a = a || "";
      var c = -1 !== a.indexOf("++"),
        d = 1;
      return (
        c && (a = a.split("++").join("")),
        function () {
          return (
            "<" + b + w + (a ? " class='" + a + (c ? d++ : "") + "'>" : ">")
          );
        }
      );
    },
    y =
      (d.SplitText =
      b.SplitText =
        function (a, b) {
          if (("string" == typeof a && (a = y.selector(a)), !a))
            throw "cannot split a null element.";
          (this.elements = j(a) ? k(a) : [a]),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = b || {}),
            this.split(b);
        }),
    z = function (a, b, c) {
      var d = a.nodeType;
      if (1 === d || 9 === d || 11 === d)
        for (a = a.firstChild; a; a = a.nextSibling) z(a, b, c);
      else (3 === d || 4 === d) && (a.nodeValue = a.nodeValue.split(b).join(c));
    },
    A = function (a, b) {
      for (var c = b.length; --c > -1; ) a.push(b[c]);
    },
    B = function (a) {
      var b,
        c = [],
        d = a.length;
      for (b = 0; b !== d; c.push(a[b++]));
      return c;
    },
    C = function (a, b, c) {
      for (var d; a && a !== b; ) {
        if ((d = a._next || a.nextSibling))
          return d.textContent.charAt(0) === c;
        a = a.parentNode || a._parent;
      }
      return !1;
    },
    D = function (a) {
      var b,
        c,
        d = B(a.childNodes),
        e = d.length;
      for (b = 0; e > b; b++)
        (c = d[b]),
          c._isSplit
            ? D(c)
            : (b && 3 === c.previousSibling.nodeType
                ? (c.previousSibling.nodeValue +=
                    3 === c.nodeType ? c.nodeValue : c.firstChild.nodeValue)
                : 3 !== c.nodeType && a.insertBefore(c.firstChild, c),
              a.removeChild(c));
    },
    E = function (a, b, c, d, e, h, j) {
      var k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w = g(a),
        x = i(a, "paddingLeft", w),
        y = -999,
        B = i(a, "borderBottomWidth", w) + i(a, "borderTopWidth", w),
        E = i(a, "borderLeftWidth", w) + i(a, "borderRightWidth", w),
        F = i(a, "paddingTop", w) + i(a, "paddingBottom", w),
        G = i(a, "paddingLeft", w) + i(a, "paddingRight", w),
        H = 0.2 * i(a, "fontSize"),
        I = i(a, "textAlign", w, !0),
        J = [],
        K = [],
        L = [],
        M = b.wordDelimiter || " ",
        N = b.span ? "span" : "div",
        O = b.type || b.split || "chars,words,lines",
        P = e && -1 !== O.indexOf("lines") ? [] : null,
        Q = -1 !== O.indexOf("words"),
        R = -1 !== O.indexOf("chars"),
        S = "absolute" === b.position || b.absolute === !0,
        T = b.linesClass,
        U = -1 !== (T || "").indexOf("++"),
        V = [];
      for (
        P &&
          1 === a.children.length &&
          a.children[0]._isSplit &&
          (a = a.children[0]),
          U && (T = T.split("++").join("")),
          l = a.getElementsByTagName("*"),
          m = l.length,
          o = [],
          k = 0;
        m > k;
        k++
      )
        o[k] = l[k];
      if (P || S)
        for (k = 0; m > k; k++)
          (n = o[k]),
            (p = n.parentNode === a),
            (p || S || (R && !Q)) &&
              ((v = n.offsetTop),
              P &&
                p &&
                Math.abs(v - y) > H &&
                "BR" !== n.nodeName &&
                ((q = []), P.push(q), (y = v)),
              S &&
                ((n._x = n.offsetLeft),
                (n._y = v),
                (n._w = n.offsetWidth),
                (n._h = n.offsetHeight)),
              P &&
                (((n._isSplit && p) ||
                  (!R && p) ||
                  (Q && p) ||
                  (!Q &&
                    n.parentNode.parentNode === a &&
                    !n.parentNode._isSplit)) &&
                  (q.push(n), (n._x -= x), C(n, a, M) && (n._wordEnd = !0)),
                "BR" === n.nodeName &&
                  n.nextSibling &&
                  "BR" === n.nextSibling.nodeName &&
                  P.push([])));
      for (k = 0; m > k; k++)
        (n = o[k]),
          (p = n.parentNode === a),
          "BR" !== n.nodeName
            ? (S &&
                ((s = n.style),
                Q ||
                  p ||
                  ((n._x += n.parentNode._x), (n._y += n.parentNode._y)),
                (s.left = n._x + "px"),
                (s.top = n._y + "px"),
                (s.position = "absolute"),
                (s.display = "block"),
                (s.width = n._w + 1 + "px"),
                (s.height = n._h + "px")),
              !Q && R
                ? n._isSplit
                  ? ((n._next = n.nextSibling), n.parentNode.appendChild(n))
                  : n.parentNode._isSplit
                  ? ((n._parent = n.parentNode),
                    !n.previousSibling &&
                      n.firstChild &&
                      (n.firstChild._isFirst = !0),
                    n.nextSibling &&
                      " " === n.nextSibling.textContent &&
                      !n.nextSibling.nextSibling &&
                      V.push(n.nextSibling),
                    (n._next =
                      n.nextSibling && n.nextSibling._isFirst
                        ? null
                        : n.nextSibling),
                    n.parentNode.removeChild(n),
                    o.splice(k--, 1),
                    m--)
                  : p ||
                    ((v = !n.nextSibling && C(n.parentNode, a, M)),
                    n.parentNode._parent && n.parentNode._parent.appendChild(n),
                    v && n.parentNode.appendChild(f.createTextNode(" ")),
                    b.span && (n.style.display = "inline"),
                    J.push(n))
                : n.parentNode._isSplit && !n._isSplit && "" !== n.innerHTML
                ? K.push(n)
                : R &&
                  !n._isSplit &&
                  (b.span && (n.style.display = "inline"), J.push(n)))
            : P || S
            ? (n.parentNode && n.parentNode.removeChild(n),
              o.splice(k--, 1),
              m--)
            : Q || a.appendChild(n);
      for (k = V.length; --k > -1; ) V[k].parentNode.removeChild(V[k]);
      if (P) {
        for (
          S &&
            ((t = f.createElement(N)),
            a.appendChild(t),
            (u = t.offsetWidth + "px"),
            (v = t.offsetParent === a ? 0 : a.offsetLeft),
            a.removeChild(t)),
            s = a.style.cssText,
            a.style.cssText = "display:none;";
          a.firstChild;

        )
          a.removeChild(a.firstChild);
        for (r = " " === M && (!S || (!Q && !R)), k = 0; k < P.length; k++) {
          for (
            q = P[k],
              t = f.createElement(N),
              t.style.cssText =
                "display:block;text-align:" +
                I +
                ";position:" +
                (S ? "absolute;" : "relative;"),
              T && (t.className = T + (U ? k + 1 : "")),
              L.push(t),
              m = q.length,
              l = 0;
            m > l;
            l++
          )
            "BR" !== q[l].nodeName &&
              ((n = q[l]),
              t.appendChild(n),
              r && n._wordEnd && t.appendChild(f.createTextNode(" ")),
              S &&
                (0 === l &&
                  ((t.style.top = n._y + "px"), (t.style.left = x + v + "px")),
                (n.style.top = "0px"),
                v && (n.style.left = n._x - v + "px")));
          0 === m
            ? (t.innerHTML = "&nbsp;")
            : Q || R || (D(t), z(t, String.fromCharCode(160), " ")),
            S && ((t.style.width = u), (t.style.height = n._h + "px")),
            a.appendChild(t);
        }
        a.style.cssText = s;
      }
      S &&
        (j > a.clientHeight &&
          ((a.style.height = j - F + "px"),
          a.clientHeight < j && (a.style.height = j + B + "px")),
        h > a.clientWidth &&
          ((a.style.width = h - G + "px"),
          a.clientWidth < h && (a.style.width = h + E + "px"))),
        A(c, J),
        A(d, K),
        A(e, L);
    },
    F = function (a, b, c, d) {
      var g,
        h,
        i,
        j,
        k,
        p,
        v,
        w,
        x,
        y = b.span ? "span" : "div",
        A = b.type || b.split || "chars,words,lines",
        B = (-1 !== A.indexOf("words"), -1 !== A.indexOf("chars")),
        C = "absolute" === b.position || b.absolute === !0,
        D = b.wordDelimiter || " ",
        E = " " !== D ? "" : C ? "&#173; " : " ",
        F = b.span ? "</span>" : "</div>",
        G = !0,
        H = f.createElement("div"),
        I = a.parentNode;
      for (
        I.insertBefore(H, a),
          H.textContent = a.nodeValue,
          I.removeChild(a),
          a = H,
          g = e(a),
          v = -1 !== g.indexOf("<"),
          b.reduceWhiteSpace !== !1 && (g = g.replace(m, " ").replace(l, "")),
          v && (g = g.split("<").join("{{LT}}")),
          k = g.length,
          h = (" " === g.charAt(0) ? E : "") + c(),
          i = 0;
        k > i;
        i++
      )
        if (((p = g.charAt(i)), p === D && g.charAt(i - 1) !== D && i)) {
          for (h += G ? F : "", G = !1; g.charAt(i + 1) === D; ) (h += E), i++;
          i === k - 1
            ? (h += E)
            : ")" !== g.charAt(i + 1) && ((h += E + c()), (G = !0));
        } else
          "{" === p && "{{LT}}" === g.substr(i, 6)
            ? ((h += B ? d() + "{{LT}}</" + y + ">" : "{{LT}}"), (i += 5))
            : (p.charCodeAt(0) >= n && p.charCodeAt(0) <= o) ||
              (g.charCodeAt(i + 1) >= 65024 && g.charCodeAt(i + 1) <= 65039)
            ? ((w = u(g.substr(i, 2))),
              (x = u(g.substr(i + 2, 2))),
              (j =
                (w >= q && r >= w && x >= q && r >= x) || (x >= s && t >= x)
                  ? 4
                  : 2),
              (h +=
                B && " " !== p
                  ? d() + g.substr(i, j) + "</" + y + ">"
                  : g.substr(i, j)),
              (i += j - 1))
            : (h += B && " " !== p ? d() + p + "</" + y + ">" : p);
      (a.outerHTML = h + (G ? F : "")), v && z(I, "{{LT}}", "<");
    },
    G = function (a, b, c, d) {
      var e,
        f,
        g = B(a.childNodes),
        h = g.length,
        j = "absolute" === b.position || b.absolute === !0;
      if (3 !== a.nodeType || h > 1) {
        for (b.absolute = !1, e = 0; h > e; e++)
          (f = g[e]),
            (3 !== f.nodeType || /\S+/.test(f.nodeValue)) &&
              (j &&
                3 !== f.nodeType &&
                "inline" === i(f, "display", null, !0) &&
                ((f.style.display = "inline-block"),
                (f.style.position = "relative")),
              (f._isSplit = !0),
              G(f, b, c, d));
        return (b.absolute = j), void (a._isSplit = !0);
      }
      F(a, b, c, d);
    },
    H = y.prototype;
  (H.split = function (a) {
    this.isSplit && this.revert(),
      (this.vars = a = a || this.vars),
      (this._originals.length =
        this.chars.length =
        this.words.length =
        this.lines.length =
          0);
    for (
      var b,
        c,
        d,
        e = this.elements.length,
        f = a.span ? "span" : "div",
        g =
          ("absolute" === a.position || a.absolute === !0, x(a.wordsClass, f)),
        h = x(a.charsClass, f);
      --e > -1;

    )
      (d = this.elements[e]),
        (this._originals[e] = d.innerHTML),
        (b = d.clientHeight),
        (c = d.clientWidth),
        G(d, a, g, h),
        E(d, a, this.chars, this.words, this.lines, c, b);
    return (
      this.chars.reverse(),
      this.words.reverse(),
      this.lines.reverse(),
      (this.isSplit = !0),
      this
    );
  }),
    (H.revert = function () {
      if (!this._originals) throw "revert() call wasn't scoped properly.";
      for (var a = this._originals.length; --a > -1; )
        this.elements[a].innerHTML = this._originals[a];
      return (
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.isSplit = !1),
        this
      );
    }),
    (y.selector =
      a.$ ||
      a.jQuery ||
      function (b) {
        var c = a.$ || a.jQuery;
        return c
          ? ((y.selector = c), c(b))
          : "undefined" == typeof document
          ? b
          : document.querySelectorAll
          ? document.querySelectorAll(b)
          : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
      }),
    (y.version = "0.5.6");
})(_gsScope),
  (function (a) {
    "use strict";
    var b = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[a];
    };
    "function" == typeof define && define.amd
      ? define([], b)
      : "undefined" != typeof module &&
        module.exports &&
        (module.exports = b());
  })("SplitText");
