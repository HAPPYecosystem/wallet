"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1889], {
        1889: function(e, n, t) {
            t.d(n, {
                Z: function() {
                    return bn
                }
            });
            var r = t(85893),
                o = t(67294),
                i = t(39985),
                s = t(42755),
                c = t(31289),
                l = t(186),
                a = function(e) {
                    var n = (0, o.useRef)();
                    return (0, o.useEffect)((function() {
                        n.current = e
                    }), [e]), n.current
                },
                u = t(7867),
                d = t(52689),
                f = t(47016),
                h = t(23526),
                p = t(67602),
                m = t(59808),
                x = t(97486),
                v = t(20316),
                g = t(36917),
                j = t(27697),
                b = t(49013),
                y = t(11156),
                w = t(45932),
                k = t(41149),
                Z = t(81313),
                C = t(4717),
                I = t(93861);

            function S() {
                var e, n, t = (e = ["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                })));
                return S = function() {
                    return t
                }, t
            }
            var T = l.ZP.div.withConfig({
                componentId: "sc-f2376591-0"
            })(S(), (function(e) {
                var n = e.theme;
                return e.disable ? "transparent" : n.colors.dropdown
            }), (function(e) {
                return !e.disable && "pointer"
            }), (function(e) {
                var n = e.theme;
                return !e.disable && n.colors.background
            }), (function(e) {
                var n = e.theme;
                return e.disable && n.colors.dropdown
            }), (function(e) {
                return e.disable && "0.4"
            }));

            function P(e) {
                var n = e.chainId,
                    t = e.onSelect,
                    o = e.selectedCurrency,
                    i = (0, u.$G)().t;
                return (0, r.jsxs)(w.Tz, {
                    gap: "md",
                    children: [(0, r.jsxs)(k.BA, {
                        children: [(0, r.jsx)(p.Z, {
                            fontSize: "14px",
                            children: i("Common bases")
                        }), (0, r.jsx)(C.Z, {
                            text: i("These tokens are commonly paired with other tokens."),
                            ml: "4px"
                        })]
                    }), (0, r.jsxs)(k.BA, {
                        gap: "auto",
                        children: [(0, r.jsxs)(T, {
                            onClick: function() {
                                o && (0, d.KA)(o, d.c0) || t(d.c0)
                            },
                            disable: o === d.c0,
                            children: [(0, r.jsx)(I.Xw, {
                                currency: d.c0,
                                style: {
                                    marginRight: 8
                                }
                            }), (0, r.jsx)(p.Z, {
                                children: "BNB"
                            })]
                        }), (n ? Z.kx[n] : []).map((function(e) {
                            var n, i, s = (n = o, (null != (i = d.WU) && "undefined" !== typeof Symbol && i[Symbol.hasInstance] ? !!i[Symbol.hasInstance](n) : n instanceof i) && o.address === e.address);
                            return (0, r.jsxs)(T, {
                                onClick: function() {
                                    return !s && t(e)
                                },
                                disable: s,
                                children: [(0, r.jsx)(I.Xw, {
                                    currency: e,
                                    style: {
                                        marginRight: 8,
                                        borderRadius: "50%"
                                    }
                                }), (0, r.jsx)(p.Z, {
                                    children: e.symbol
                                })]
                            }, e.address)
                        }))]
                    })]
                })
            }
            var O = t(1314),
                z = t(54543),
                A = t(21730),
                L = t(29121),
                R = t(76396),
                U = t(9716),
                B = t(81860),
                E = t(70939);

            function M(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function D() {
                var e = M(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto;\n  grid-gap: 10px;\n  align-items: center;\n\n  opacity: ", ";\n\n  ", " {\n    grid-gap: 16px;\n  }\n"]);
                return D = function() {
                    return e
                }, e
            }

            function V() {
                var e = M(["\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n  stroke: ", ";\n"]);
                return V = function() {
                    return e
                }, e
            }

            function $() {
                var e = M(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 140px;\n  font-size: 12px;\n"]);
                return $ = function() {
                    return e
                }, e
            }
            var _ = l.ZP.div.withConfig({
                    componentId: "sc-b0ebf19b-0"
                })(D(), (function(e) {
                    return e.dim ? "0.4" : "1"
                }), (function(e) {
                    return e.theme.mediaQueries.md
                })),
                G = (0, l.ZP)(U.Z).withConfig({
                    componentId: "sc-b0ebf19b-1"
                })(V(), (function(e) {
                    return e.theme.colors.success
                })),
                W = l.ZP.div.withConfig({
                    componentId: "sc-b0ebf19b-2"
                })($());

            function N(e) {
                var n, t, o = e.token,
                    i = e.style,
                    s = e.dim,
                    l = e.showImportView,
                    a = e.setImportToken,
                    d = (0, v.Z)().chainId,
                    f = (0, B.Z)().isMobile,
                    h = (0, u.$G)().t,
                    m = (0, g.qB)(),
                    x = d && (null === m || void 0 === m || null === (n = m[d]) || void 0 === n || null === (t = n[o.address]) || void 0 === t ? void 0 : t.list),
                    j = (0, b.EH)(o),
                    y = (0, b.ZN)(o);
                return (0, r.jsxs)(_, {
                    style: i,
                    children: [(0, r.jsx)(E.Z, {
                        currency: o,
                        size: f ? "20px" : "24px",
                        style: {
                            opacity: s ? "0.6" : "1"
                        }
                    }), (0, r.jsxs)(w.Tz, {
                        gap: "4px",
                        style: {
                            opacity: s ? "0.6" : "1"
                        },
                        children: [(0, r.jsxs)(k.BA, {
                            children: [(0, r.jsx)(p.Z, {
                                mr: "8px",
                                children: o.symbol
                            }), (0, r.jsx)(p.Z, {
                                color: "textDisabled",
                                children: (0, r.jsx)(W, {
                                    title: o.name,
                                    children: o.name
                                })
                            })]
                        }), x && x.logoURI && (0, r.jsxs)(k.DA, {
                            children: [(0, r.jsxs)(p.Z, {
                                fontSize: f ? "10px" : "14px",
                                mr: "4px",
                                color: "textSubtle",
                                children: [h("via"), " ", x.name]
                            }), (0, r.jsx)(I._r, {
                                logoURI: x.logoURI,
                                size: "12px"
                            })]
                        })]
                    }), y || j ? (0, r.jsxs)(k.DA, {
                        style: {
                            minWidth: "fit-content"
                        },
                        children: [(0, r.jsx)(G, {}), (0, r.jsx)(p.Z, {
                            color: "success",
                            children: "Active"
                        })]
                    }) : (0, r.jsx)(c.Z, {
                        scale: f ? "sm" : "md",
                        width: "fit-content",
                        onClick: function() {
                            a && a(o), l()
                        },
                        children: h("Import")
                    })]
                })
            }

            function J(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function K(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function H(e) {
                return function(e) {
                    if (Array.isArray(e)) return J(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return J(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return J(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F() {
                var e = K(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]);
                return F = function() {
                    return e
                }, e
            }

            function Q() {
                var e = K(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-gap: 16px;\n  align-items: center;\n"]);
                return Q = function() {
                    return e
                }, e
            }

            function X() {
                var e = K(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);\n  grid-gap: 8px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"]);
                return X = function() {
                    return e
                }, e
            }

            function q(e) {
                return n = e, (null != (t = d.WU) && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? t[Symbol.hasInstance](n) : n instanceof t) ? e.address : e === d.c0 ? "ETHER" : "";
                var n, t
            }
            var Y = (0, l.ZP)(p.Z).withConfig({
                    componentId: "sc-831c3b86-0"
                })(F()),
                ee = l.ZP.div.withConfig({
                    componentId: "sc-831c3b86-1"
                })(Q());

            function ne(e) {
                var n = e.balance;
                return (0, r.jsx)(Y, {
                    title: n.toExact(),
                    children: n.toSignificant(4)
                })
            }
            var te, re = (0, l.ZP)(k.m0).withConfig({
                componentId: "sc-831c3b86-2"
            })(X(), (function(e) {
                return !e.disabled && "pointer"
            }), (function(e) {
                return e.disabled && "none"
            }), (function(e) {
                var n = e.theme;
                return !e.disabled && n.colors.background
            }), (function(e) {
                var n = e.disabled,
                    t = e.selected;
                return n || t ? .5 : 1
            }));

            function oe(e) {
                var n = e.currency,
                    t = e.onSelect,
                    o = e.isSelected,
                    i = e.otherSelected,
                    s = e.style,
                    c = (0, v.Z)().account,
                    l = (0, u.$G)().t,
                    a = q(n),
                    d = (0, g.z0)(),
                    f = (0, y.wK)(d, n),
                    h = (0, b.EH)(n),
                    m = (0, L._h)(null !== c && void 0 !== c ? c : void 0, n);
                return (0, r.jsxs)(re, {
                    style: s,
                    className: "token-item-".concat(a),
                    onClick: function() {
                        return o ? null : t()
                    },
                    disabled: o,
                    selected: i,
                    children: [(0, r.jsx)(I.Xw, {
                        currency: n,
                        size: "24px"
                    }), (0, r.jsxs)(w.ZP, {
                        children: [(0, r.jsx)(p.Z, {
                            bold: !0,
                            children: n.symbol
                        }), (0, r.jsxs)(p.Z, {
                            color: "textSubtle",
                            small: !0,
                            ellipsis: !0,
                            maxWidth: "200px",
                            children: [!f && h && "".concat(l("Added by user"), " \u2022"), " ", n.name]
                        })]
                    }), (0, r.jsx)(k.DA, {
                        style: {
                            justifySelf: "flex-end"
                        },
                        children: m ? (0, r.jsx)(ne, {
                            balance: m
                        }) : c ? (0, r.jsx)(R.Z, {}) : null
                    })]
                })
            }

            function ie(e) {
                var n = e.height,
                    t = e.currencies,
                    i = e.inactiveCurrencies,
                    s = e.selectedCurrency,
                    c = e.onCurrencySelect,
                    l = e.otherCurrency,
                    a = e.fixedListRef,
                    f = e.showBNB,
                    h = e.showImportView,
                    m = e.setImportToken,
                    x = e.breakIndex,
                    g = (0, o.useMemo)((function() {
                        var e = f ? [d.F.ETHER].concat(H(t), H(i)) : H(t).concat(H(i));
                        return void 0 !== x && (e = H(e.slice(0, x)).concat([void 0], H(e.slice(x, e.length)))), e
                    }), [x, t, i, f]),
                    j = (0, v.Z)().chainId,
                    b = (0, u.$G)().t,
                    y = (0, o.useCallback)((function(e) {
                        var n = e.data,
                            o = e.index,
                            i = e.style,
                            a = n[o],
                            u = Boolean(s && (0, d.KA)(s, a)),
                            f = Boolean(l && (0, d.KA)(l, a)),
                            v = (0, z.pu)(a, j),
                            g = o > t.length;
                        return o !== x && n ? g && v ? (0, r.jsx)(N, {
                            style: i,
                            token: v,
                            showImportView: h,
                            setImportToken: m,
                            dim: !0
                        }) : (0, r.jsx)(oe, {
                            style: i,
                            currency: a,
                            isSelected: u,
                            onSelect: function() {
                                return c(a)
                            },
                            otherSelected: f
                        }) : (0, r.jsx)(ee, {
                            style: i,
                            children: (0, r.jsx)(A.m5, {
                                padding: "8px 12px",
                                borderRadius: "8px",
                                children: (0, r.jsxs)(k.m0, {
                                    children: [(0, r.jsx)(p.Z, {
                                        small: !0,
                                        children: b("Expanded results from inactive Token Lists")
                                    }), (0, r.jsx)(C.Z, {
                                        text: b("Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists."),
                                        ml: "4px"
                                    })]
                                })
                            })
                        })
                    }), [s, l, j, t.length, x, c, b, h, m]),
                    w = (0, o.useCallback)((function(e, n) {
                        return q(n[e])
                    }), []);
                return (0, r.jsx)(O.t7, {
                    height: n,
                    ref: a,
                    width: "100%",
                    itemData: g,
                    itemCount: g.length,
                    itemSize: 56,
                    itemKey: w,
                    children: y
                })
            }

            function se(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ce(e) {
                return function(e) {
                    if (Array.isArray(e)) return se(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return se(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return se(e, n)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function le(e) {
                var n = (0, y.UJ)(e);
                if (n) {
                    var t = n.toLowerCase();
                    return function(e) {
                        return "address" in e && t === e.address.toLowerCase()
                    }
                }
                var r = e.toLowerCase().split(/\s+/).filter((function(e) {
                    return e.length > 0
                }));
                if (0 === r.length) return function() {
                    return !0
                };
                var o = function(e) {
                    var n = e.toLowerCase().split(/\s+/).filter((function(e) {
                        return e.length > 0
                    }));
                    return r.every((function(e) {
                        return 0 === e.length || n.some((function(n) {
                            return n.startsWith(e) || n.endsWith(e)
                        }))
                    }))
                };
                return function(e) {
                    var n = e.symbol,
                        t = e.name;
                    return n && o(n) || t && o(t)
                }
            }

            function ae(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function ue(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function de(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), r.forEach((function(n) {
                        ue(e, n, t[n])
                    }))
                }
                return e
            }

            function fe(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            s = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(s = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); s = !0);
                        } catch (l) {
                            c = !0, o = l
                        } finally {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" === typeof e) return ae(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ae(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var he, pe = function(e) {
                    var n = e.selectedCurrency,
                        t = e.onCurrencySelect,
                        i = e.otherSelectedCurrency,
                        s = e.showCommonBases,
                        c = e.showImportView,
                        l = e.setImportToken,
                        a = (0, u.$G)().t,
                        Z = (0, v.Z)().chainId,
                        C = (0, o.useRef)(),
                        I = (0, o.useState)(""),
                        S = I[0],
                        T = I[1],
                        O = (0, x.Z)(S, 200),
                        z = ((0, o.useState)(!1)[0], (0, b.e_)()),
                        A = (0, b.dQ)(O),
                        L = (0, b.EH)(A),
                        R = fe((0, m.TO)(), 1)[0],
                        U = (0, o.useMemo)((function() {
                            var e = O.toLowerCase().trim();
                            return "" === e || "b" === e || "bn" === e || "bnb" === e
                        }), [O]),
                        B = function(e, n) {
                            return (0, o.useMemo)((function() {
                                if (!e) return [];
                                var t = n.toLowerCase().split(/\s+/).filter((function(e) {
                                    return e.length > 0
                                }));
                                if (t.length > 1) return e;
                                var r = [],
                                    o = [],
                                    i = [];
                                return e.forEach((function(e) {
                                    var s, c;
                                    return (null === (s = e.symbol) || void 0 === s ? void 0 : s.toLowerCase()) === t[0] ? r.push(e) : (null === (c = e.symbol) || void 0 === c ? void 0 : c.toLowerCase().startsWith(n.toLowerCase().trim())) ? o.push(e) : i.push(e)
                                })), ce(r).concat(ce(o), ce(i))
                            }), [e, n])
                        }((0, o.useMemo)((function() {
                            return function(e, n) {
                                if (0 === n.length) return e;
                                var t = (0, y.UJ)(n);
                                if (t) return e.filter((function(e) {
                                    return e.address === t
                                }));
                                var r = n.toLowerCase().split(/\s+/).filter((function(e) {
                                    return e.length > 0
                                }));
                                if (0 === r.length) return e;
                                var o = function(e) {
                                    var n = e.toLowerCase().split(/\s+/).filter((function(e) {
                                        return e.length > 0
                                    }));
                                    return r.every((function(e) {
                                        return 0 === e.length || n.some((function(n) {
                                            return n.startsWith(e) || n.endsWith(e)
                                        }))
                                    }))
                                };
                                return e.filter((function(e) {
                                    var n = e.symbol,
                                        t = e.name;
                                    return n && o(n) || t && o(t)
                                }))
                            }(Object.values(z), O)
                        }), [z, O]), O),
                        E = (0, o.useMemo)((function() {
                            return B
                        }), [B]),
                        M = (0, o.useCallback)((function(e) {
                            t(e), R && (te || (te = new Audio("swap.mp3")), te).play()
                        }), [R, t]),
                        D = (0, o.useRef)();
                    (0, o.useEffect)((function() {
                        D.current.focus()
                    }), []);
                    var V = (0, o.useCallback)((function(e) {
                            var n, t = e.target.value,
                                r = (0, y.UJ)(t);
                            T(r || t), null === (n = C.current) || void 0 === n || n.scrollTo(0)
                        }), []),
                        $ = (0, o.useCallback)((function(e) {
                            if ("Enter" === e.key)
                                if ("bnb" === O.toLowerCase().trim()) M(d.c0);
                                else if (E.length > 0) {
                                var n;
                                (null === (n = E[0].symbol) || void 0 === n ? void 0 : n.toLowerCase()) !== O.trim().toLowerCase() && 1 !== E.length || M(E[0])
                            }
                        }), [E, M, O]),
                        _ = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                t = (0, g.R0)(),
                                r = (0, g.eu)(),
                                i = (0, v.Z)().chainId,
                                s = (0, b.e_)();
                            return (0, o.useMemo)((function() {
                                if (!e || 0 === e.trim().length) return [];
                                var o = le(e),
                                    c = [],
                                    l = {},
                                    a = !0,
                                    u = !1,
                                    d = void 0;
                                try {
                                    for (var f, h = r[Symbol.iterator](); !(a = (f = h.next()).done); a = !0) {
                                        var p = f.value,
                                            m = t[p].current;
                                        if (m) {
                                            var x = !0,
                                                v = !1,
                                                g = void 0;
                                            try {
                                                for (var b, y = m.tokens[Symbol.iterator](); !(x = (b = y.next()).done); x = !0) {
                                                    var w, k, Z, C = b.value,
                                                        I = null !== (Z = null === (k = null === (w = C.tags) || void 0 === w ? void 0 : w.map((function(e) {
                                                            var n;
                                                            if (null === (n = m.tags) || void 0 === n ? void 0 : n[e]) return de({}, m.tags[e], {
                                                                id: e
                                                            })
                                                        }))) || void 0 === k ? void 0 : k.filter((function(e) {
                                                            return Boolean(e)
                                                        }))) && void 0 !== Z ? Z : [];
                                                    if (C.chainId === i && o(C)) {
                                                        var S = new j.DT(C, I);
                                                        if (!(S.address in s) && !l[S.address] && (l[S.address] = !0, c.push(S), c.length >= n)) return c
                                                    }
                                                }
                                            } catch (T) {
                                                v = !0, g = T
                                            } finally {
                                                try {
                                                    x || null == y.return || y.return()
                                                } finally {
                                                    if (v) throw g
                                                }
                                            }
                                        }
                                    }
                                } catch (T) {
                                    u = !0, d = T
                                } finally {
                                    try {
                                        a || null == h.return || h.return()
                                    } finally {
                                        if (u) throw d
                                    }
                                }
                                return c
                            }), [s, i, r, t, n, e])
                        }(O);
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("div", {
                            children: [(0, r.jsxs)(w.Tz, {
                                gap: "16px",
                                children: [(0, r.jsx)(k.ZP, {
                                    children: (0, r.jsx)(f.Z, {
                                        id: "token-search-input",
                                        placeholder: a("Search name or paste address"),
                                        scale: "lg",
                                        autoComplete: "off",
                                        value: S,
                                        ref: D,
                                        onChange: V,
                                        onKeyDown: $
                                    })
                                }), s && (0, r.jsx)(P, {
                                    chainId: Z,
                                    onSelect: M,
                                    selectedCurrency: n
                                })]
                            }), A && !L ? (0, r.jsx)(w.ZP, {
                                style: {
                                    padding: "20px 0",
                                    height: "100%"
                                },
                                children: (0, r.jsx)(N, {
                                    token: A,
                                    showImportView: c,
                                    setImportToken: l
                                })
                            }) : Boolean(null === E || void 0 === E ? void 0 : E.length) || Boolean(null === _ || void 0 === _ ? void 0 : _.length) ? (0, r.jsx)(h.Z, {
                                margin: "24px -24px",
                                children: (0, r.jsx)(ie, {
                                    height: 390,
                                    showBNB: U,
                                    currencies: E,
                                    inactiveCurrencies: _,
                                    breakIndex: Boolean(null === _ || void 0 === _ ? void 0 : _.length) && E ? E.length : void 0,
                                    onCurrencySelect: M,
                                    otherCurrency: i,
                                    selectedCurrency: n,
                                    fixedListRef: C,
                                    showImportView: c,
                                    setImportToken: l
                                })
                            }) : (0, r.jsx)(w.ZP, {
                                style: {
                                    padding: "20px",
                                    height: "100%"
                                },
                                children: (0, r.jsx)(p.Z, {
                                    color: "textSubtle",
                                    textAlign: "center",
                                    mb: "20px",
                                    children: a("No results found.")
                                })
                            })]
                        })
                    })
                },
                me = t(20388),
                xe = t(84206),
                ve = t(31114),
                ge = t(34051),
                je = t.n(ge),
                be = t(55070),
                ye = t(88788),
                we = t(16973),
                ke = t(16936),
                Ze = t(6722),
                Ce = t(25617),
                Ie = t(26693),
                Se = t(35552),
                Te = t(53247),
                Pe = t(38796);
            ! function(e) {
                e[e.search = 0] = "search", e[e.manage = 1] = "manage", e[e.importToken = 2] = "importToken", e[e.importList = 3] = "importList"
            }(he || (he = {}));

            function Oe(e, n, t, r, o, i, s) {
                try {
                    var c = e[i](s),
                        l = c.value
                } catch (a) {
                    return void t(a)
                }
                c.done ? n(l) : Promise.resolve(l).then(r, o)
            }

            function ze(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(n, t);

                        function s(e) {
                            Oe(i, r, o, s, c, "next", e)
                        }

                        function c(e) {
                            Oe(i, r, o, s, c, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function Ae(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function Le() {
                var e = Ae(["\n  width: 100%;\n  height: 100%;\n"]);
                return Le = function() {
                    return e
                }, e
            }

            function Re() {
                var e = Ae(["\n  background-color: ", ";\n  border: solid 1px;\n  border-color: ", ";\n  transition: 200ms;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 20px;\n"]);
                return Re = function() {
                    return e
                }, e
            }

            function Ue() {
                var e = Ae(["\n  padding: 1rem 0;\n  height: 100%;\n  overflow: auto;\n"]);
                return Ue = function() {
                    return e
                }, e
            }
            var Be = (0, l.ZP)(w.ZP).withConfig({
                    componentId: "sc-d2e33889-0"
                })(Le()),
                Ee = (0, l.ZP)(k.ZP).withConfig({
                    componentId: "sc-d2e33889-1"
                })(Re(), (function(e) {
                    var n = e.active,
                        t = e.theme;
                    return n ? "".concat(t.colors.success, "19") : "transparent"
                }), (function(e) {
                    var n = e.active,
                        t = e.theme;
                    return n ? t.colors.success : t.colors.tertiary
                }));

            function Me(e) {
                return "list-row-".concat(e.replace(/\./g, "-"))
            }
            var De = (0, o.memo)((function(e) {
                    var n, t = e.listUrl,
                        i = (0, Ce.v9)((function(e) {
                            return e.lists.byUrl
                        })),
                        s = (0, Ce.I0)(),
                        l = i[t],
                        a = l.current,
                        d = l.pendingUpdate,
                        f = (0, g.EF)(t),
                        h = (0, u.$G)().t,
                        m = (0, o.useCallback)((function() {
                            d && s((0, Te.xJ)(t))
                        }), [s, t, d]),
                        x = (0, o.useCallback)((function() {
                            window.confirm("Please confirm you would like to remove this list") && s((0, Te.J_)(t))
                        }), [s, t]),
                        v = (0, o.useCallback)((function() {
                            s((0, Te.ic)(t))
                        }), [s, t]),
                        j = (0, o.useCallback)((function() {
                            s((0, Te.K$)(t))
                        }), [s, t]),
                        b = (0, be.Z)((0, r.jsxs)("div", {
                            children: [(0, r.jsx)(p.Z, {
                                children: a && (n = a.version, "v".concat(n.major, ".").concat(n.minor, ".").concat(n.patch))
                            }), (0, r.jsx)(ye.Z, {
                                external: !0,
                                href: "https://tokenlists.org/token-list?url=".concat(t),
                                children: h("See")
                            }), (0, r.jsx)(c.Z, {
                                variant: "danger",
                                scale: "xs",
                                onClick: x,
                                disabled: 1 === Object.keys(i).length,
                                children: h("Remove")
                            }), d && (0, r.jsx)(c.Z, {
                                variant: "text",
                                onClick: m,
                                style: {
                                    fontSize: "12px"
                                },
                                children: h("Update list")
                            })]
                        }), {
                            placement: "right-end",
                            trigger: "click"
                        }),
                        y = b.targetRef,
                        Z = b.tooltip,
                        C = b.tooltipVisible;
                    return a ? (0, r.jsxs)(Ee, {
                        active: f,
                        id: Me(t),
                        children: [C && Z, a.logoURI ? (0, r.jsx)(I._r, {
                            size: "40px",
                            style: {
                                marginRight: "1rem"
                            },
                            logoURI: a.logoURI,
                            alt: "".concat(a.name, " list logo")
                        }) : (0, r.jsx)("div", {
                            style: {
                                width: "24px",
                                height: "24px",
                                marginRight: "1rem"
                            }
                        }), (0, r.jsxs)(w.ZP, {
                            style: {
                                flex: "1"
                            },
                            children: [(0, r.jsx)(k.ZP, {
                                children: (0, r.jsx)(p.Z, {
                                    bold: !0,
                                    children: a.name
                                })
                            }), (0, r.jsxs)(k.DA, {
                                mt: "4px",
                                children: [(0, r.jsxs)(p.Z, {
                                    fontSize: "12px",
                                    mr: "6px",
                                    textTransform: "lowercase",
                                    children: [a.tokens.length, " ", h("Tokens")]
                                }), (0, r.jsx)("span", {
                                    ref: y,
                                    children: (0, r.jsx)(we.Z, {
                                        color: "text",
                                        width: "12px"
                                    })
                                })]
                            })]
                        }), (0, r.jsx)(ke.Z, {
                            checked: f,
                            onChange: function() {
                                f ? j() : v()
                            }
                        })]
                    }, t) : null
                })),
                Ve = l.ZP.div.withConfig({
                    componentId: "sc-d2e33889-2"
                })(Ue());
            var $e = function(e) {
                    var n = e.setModalView,
                        t = e.setImportList,
                        i = e.setListUrl,
                        s = (0, o.useState)(""),
                        l = s[0],
                        a = s[1],
                        d = (0, u.$G)().t,
                        h = (0, g.R0)(),
                        m = (0, g.v0)(),
                        x = (0, o.useState)(),
                        v = x[0],
                        j = x[1];
                    (0, o.useEffect)((function() {
                        !v && m && j(m)
                    }), [v, m]);
                    var b = (0, o.useCallback)((function(e) {
                            a(e.target.value)
                        }), []),
                        y = (0, Se.Z)(),
                        Z = (0, o.useMemo)((function() {
                            return (0, Pe.Z)(l).length > 0
                        }), [l]),
                        C = (0, o.useMemo)((function() {
                            return Object.keys(h).filter((function(e) {
                                return Boolean(h[e].current) && !Ie.US.includes(e)
                            })).sort((function(e, n) {
                                var t = h[e].current,
                                    r = h[n].current;
                                if ((null === v || void 0 === v ? void 0 : v.includes(e)) && !(null === v || void 0 === v ? void 0 : v.includes(n))) return -1;
                                if (!(null === v || void 0 === v ? void 0 : v.includes(e)) && (null === v || void 0 === v ? void 0 : v.includes(n))) return 1;
                                if (t && r) {
                                    var o = "pancakeswap";
                                    return t.name.toLowerCase().includes(o) || r.name.toLowerCase().includes(o) || t.name.toLowerCase() < r.name.toLowerCase() ? -1 : t.name.toLowerCase() === r.name.toLowerCase() ? 0 : 1
                                }
                                return t ? -1 : r ? 1 : 0
                            }))
                        }), [h, v]),
                        S = (0, o.useState)(),
                        T = S[0],
                        P = S[1],
                        O = (0, o.useState)(),
                        z = O[0],
                        L = O[1];
                    (0, o.useEffect)((function() {
                        function e() {
                            return (e = ze(je().mark((function e() {
                                return je().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            y(l, !1).then((function(e) {
                                                return P(e)
                                            })).catch((function() {
                                                return L("Error importing list")
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }
                        Z ? function() {
                            e.apply(this, arguments)
                        }() : (P(void 0), "" !== l && L("Enter valid list location")), "" === l && L(void 0)
                    }), [y, l, Z]);
                    var R = Object.keys(h).includes(l),
                        U = (0, o.useCallback)((function() {
                            T && (t(T), n(he.importList), i(l))
                        }), [l, t, i, n, T]);
                    return (0, r.jsxs)(Be, {
                        children: [(0, r.jsxs)(w.Tz, {
                            gap: "14px",
                            children: [(0, r.jsx)(k.ZP, {
                                children: (0, r.jsx)(f.Z, {
                                    id: "list-add-input",
                                    scale: "lg",
                                    placeholder: d("https:// or ipfs://"),
                                    value: l,
                                    onChange: b
                                })
                            }), z ? (0, r.jsx)(p.Z, {
                                color: "failure",
                                style: {
                                    textOverflow: "ellipsis",
                                    overflow: "hidden"
                                },
                                children: z
                            }) : null]
                        }), T && (0, r.jsx)(w.Tz, {
                            style: {
                                paddingTop: 0
                            },
                            children: (0, r.jsx)(A.ZP, {
                                padding: "12px 20px",
                                children: (0, r.jsxs)(k.m0, {
                                    children: [(0, r.jsxs)(k.DA, {
                                        children: [T.logoURI && (0, r.jsx)(I._r, {
                                            logoURI: T.logoURI,
                                            size: "40px"
                                        }), (0, r.jsxs)(w.Tz, {
                                            gap: "4px",
                                            style: {
                                                marginLeft: "20px"
                                            },
                                            children: [(0, r.jsx)(p.Z, {
                                                bold: !0,
                                                children: T.name
                                            }), (0, r.jsxs)(p.Z, {
                                                color: "textSubtle",
                                                small: !0,
                                                textTransform: "lowercase",
                                                children: [T.tokens.length, " ", d("Tokens")]
                                            })]
                                        })]
                                    }), R ? (0, r.jsxs)(k.DA, {
                                        children: [(0, r.jsx)(Ze.Z, {
                                            width: "16px",
                                            mr: "10px"
                                        }), (0, r.jsx)(p.Z, {
                                            children: d("Loaded")
                                        })]
                                    }) : (0, r.jsx)(c.Z, {
                                        width: "fit-content",
                                        onClick: U,
                                        children: d("Import")
                                    })]
                                })
                            })
                        }), (0, r.jsx)(Ve, {
                            children: (0, r.jsx)(w.Tz, {
                                gap: "md",
                                children: C.map((function(e) {
                                    return (0, r.jsx)(De, {
                                        listUrl: e
                                    }, e)
                                }))
                            })
                        })]
                    })
                },
                _e = t(96939),
                Ge = t(47851),
                We = t(83692),
                Ne = t(82733);

            function Je(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function Ke() {
                var e = Je(["\n  width: 100%;\n  height: calc(100% - 60px);\n  position: relative;\n  padding-bottom: 60px;\n"]);
                return Ke = function() {
                    return e
                }, e
            }

            function He() {
                var e = Je(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);
                return He = function() {
                    return e
                }, e
            }
            var Fe = l.ZP.div.withConfig({
                    componentId: "sc-11caa501-0"
                })(Ke()),
                Qe = l.ZP.div.withConfig({
                    componentId: "sc-11caa501-1"
                })(He());

            function Xe(e) {
                var n = e.setModalView,
                    t = e.setImportToken,
                    i = (0, v.Z)().chainId,
                    s = (0, u.$G)().t,
                    l = (0, o.useState)(""),
                    a = l[0],
                    d = l[1],
                    h = (0, o.useRef)(),
                    x = (0, o.useCallback)((function(e) {
                        var n = e.target.value,
                            t = (0, y.UJ)(n);
                        d(t || n)
                    }), []),
                    g = (0, b.dQ)(a),
                    j = (0, Ne.Z)(),
                    Z = (0, m.QG)(),
                    C = (0, o.useCallback)((function() {
                        i && j && j.forEach((function(e) {
                            return Z(i, e.address)
                        }))
                    }), [Z, j, i]),
                    S = (0, o.useMemo)((function() {
                        return i && j.map((function(e) {
                            return (0, r.jsxs)(k.m0, {
                                width: "100%",
                                children: [(0, r.jsxs)(k.DA, {
                                    children: [(0, r.jsx)(I.Xw, {
                                        currency: e,
                                        size: "20px"
                                    }), (0, r.jsx)(_e.Z, {
                                        external: !0,
                                        href: (0, y.s6)(e.address, "address", i),
                                        color: "textSubtle",
                                        ml: "10px",
                                        children: e.symbol
                                    })]
                                }), (0, r.jsxs)(k.DA, {
                                    children: [(0, r.jsx)(Ge.Z, {
                                        variant: "text",
                                        onClick: function() {
                                            return Z(i, e.address)
                                        },
                                        children: (0, r.jsx)(We.Z, {})
                                    }), (0, r.jsx)(ye.Z, {
                                        href: (0, y.s6)(e.address, "address", i)
                                    })]
                                })]
                            }, e.address)
                        }))
                    }), [j, i, Z]),
                    T = "" === a || (0, y.UJ)(a);
                return (0, r.jsx)(Fe, {
                    children: (0, r.jsxs)(w.ZP, {
                        style: {
                            width: "100%",
                            flex: "1 1"
                        },
                        children: [(0, r.jsxs)(w.Tz, {
                            gap: "14px",
                            children: [(0, r.jsx)(k.ZP, {
                                children: (0, r.jsx)(f.Z, {
                                    id: "token-search-input",
                                    scale: "lg",
                                    placeholder: "0x0000",
                                    value: a,
                                    autoComplete: "off",
                                    ref: h,
                                    onChange: x,
                                    isWarning: !T
                                })
                            }), !T && (0, r.jsx)(p.Z, {
                                color: "failure",
                                children: s("Enter valid token address")
                            }), g && (0, r.jsx)(N, {
                                token: g,
                                showImportView: function() {
                                    return n(he.importToken)
                                },
                                setImportToken: t,
                                style: {
                                    height: "fit-content"
                                }
                            })]
                        }), S, (0, r.jsxs)(Qe, {
                            children: [(0, r.jsxs)(p.Z, {
                                bold: !0,
                                color: "textSubtle",
                                children: [null === j || void 0 === j ? void 0 : j.length, " ", 1 === j.length ? s("Custom Token") : s("Custom Tokens")]
                            }), j.length > 0 && (0, r.jsx)(c.Z, {
                                variant: "tertiary",
                                onClick: C,
                                children: s("Clear all")
                            })]
                        })]
                    })
                })
            }

            function qe() {
                var e, n, t = (e = ["\n  width: 100%;\n"], n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                })));
                return qe = function() {
                    return t
                }, t
            }
            var Ye = (0, l.ZP)(xe.Z).withConfig({
                componentId: "sc-875450a9-0"
            })(qe());

            function en(e) {
                var n = e.setModalView,
                    t = e.setImportList,
                    s = e.setImportToken,
                    c = e.setListUrl,
                    l = (0, o.useState)(!0),
                    a = l[0],
                    d = l[1],
                    f = (0, u.$G)().t;
                return (0, r.jsxs)(i.fe, {
                    children: [(0, r.jsxs)(Ye, {
                        activeIndex: a ? 0 : 1,
                        onItemClick: function() {
                            return d((function(e) {
                                return !e
                            }))
                        },
                        scale: "sm",
                        variant: "subtle",
                        mb: "32px",
                        children: [(0, r.jsx)(ve.Z, {
                            width: "50%",
                            children: f("Lists")
                        }), (0, r.jsx)(ve.Z, {
                            width: "50%",
                            children: f("Tokens")
                        })]
                    }), a ? (0, r.jsx)($e, {
                        setModalView: n,
                        setImportList: t,
                        setListUrl: c
                    }) : (0, r.jsx)(Xe, {
                        setModalView: n,
                        setImportToken: s
                    })]
                })
            }
            var nn = t(47711),
                tn = t(19532),
                rn = t(20506),
                on = t(31254);

            function sn(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function cn() {
                var e = sn(["\n  position: relative;\n  width: 100%;\n"]);
                return cn = function() {
                    return e
                }, e
            }

            function ln() {
                var e = sn(["\n  height: 3px;\n  width: 3px;\n  background-color: ", ";\n  border-radius: 50%;\n"]);
                return ln = function() {
                    return e
                }, e
            }
            var an = l.ZP.div.withConfig({
                    componentId: "sc-8988bdbf-0"
                })(cn()),
                un = l.ZP.div.withConfig({
                    componentId: "sc-8988bdbf-1"
                })(ln(), (function(e) {
                    return e.theme.colors.text
                }));
            var dn = function(e) {
                var n, t = e.listURL,
                    i = e.list,
                    s = e.onImport,
                    l = (0, on.Z)().theme,
                    a = (0, Ce.I0)(),
                    d = (0, u.$G)().t,
                    f = (0, o.useState)(!1),
                    h = f[0],
                    m = f[1],
                    x = (0, g.R0)(),
                    v = (0, Se.Z)(),
                    j = Boolean(null === (n = x[t]) || void 0 === n ? void 0 : n.loadingRequestId),
                    b = (0, o.useState)(null),
                    y = b[0],
                    Z = b[1],
                    C = (0, o.useCallback)((function() {
                        j || (Z(null), v(t).then((function() {
                            a((0, Te.ic)(t)), s()
                        })).catch((function(e) {
                            Z(e.message), a((0, Te.J_)(t))
                        })))
                    }), [j, a, v, t, s]);
                return (0, r.jsx)(an, {
                    children: (0, r.jsx)(w.Tz, {
                        gap: "md",
                        children: (0, r.jsxs)(w.Tz, {
                            gap: "md",
                            children: [(0, r.jsx)(A.ZP, {
                                padding: "12px 20px",
                                children: (0, r.jsx)(k.m0, {
                                    children: (0, r.jsxs)(k.DA, {
                                        children: [i.logoURI && (0, r.jsx)(I._r, {
                                            logoURI: i.logoURI,
                                            size: "40px"
                                        }), (0, r.jsxs)(w.Tz, {
                                            gap: "sm",
                                            style: {
                                                marginLeft: "20px"
                                            },
                                            children: [(0, r.jsxs)(k.DA, {
                                                children: [(0, r.jsx)(p.Z, {
                                                    bold: !0,
                                                    mr: "6px",
                                                    children: i.name
                                                }), (0, r.jsx)(un, {}), (0, r.jsxs)(p.Z, {
                                                    small: !0,
                                                    color: "textSubtle",
                                                    ml: "6px",
                                                    children: [i.tokens.length, " tokens"]
                                                })]
                                            }), (0, r.jsx)(_e.Z, {
                                                small: !0,
                                                external: !0,
                                                ellipsis: !0,
                                                maxWidth: "90%",
                                                href: "https://tokenlists.org/token-list?url=".concat(t),
                                                children: t
                                            })]
                                        })]
                                    })
                                })
                            }), (0, r.jsx)(nn.Z, {
                                variant: "danger",
                                children: (0, r.jsxs)(tn.Z, {
                                    flexDirection: "column",
                                    children: [(0, r.jsx)(p.Z, {
                                        fontSize: "20px",
                                        textAlign: "center",
                                        color: l.colors.failure,
                                        mb: "16px",
                                        children: d("Import at your own risk")
                                    }), (0, r.jsx)(p.Z, {
                                        color: l.colors.failure,
                                        mb: "8px",
                                        children: d("By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.")
                                    }), (0, r.jsx)(p.Z, {
                                        bold: !0,
                                        color: l.colors.failure,
                                        mb: "16px",
                                        children: d("If you purchase a token from this list, you may not be able to sell it back.")
                                    }), (0, r.jsxs)(tn.Z, {
                                        alignItems: "center",
                                        children: [(0, r.jsx)(rn.Z, {
                                            name: "confirmed",
                                            type: "checkbox",
                                            checked: h,
                                            onChange: function() {
                                                return m(!h)
                                            },
                                            scale: "sm"
                                        }), (0, r.jsx)(p.Z, {
                                            ml: "10px",
                                            style: {
                                                userSelect: "none"
                                            },
                                            children: d("I understand")
                                        })]
                                    })]
                                })
                            }), (0, r.jsx)(c.Z, {
                                disabled: !h,
                                onClick: C,
                                children: d("Import")
                            }), y ? (0, r.jsx)(p.Z, {
                                color: "failure",
                                style: {
                                    textOverflow: "ellipsis",
                                    overflow: "hidden"
                                },
                                children: y
                            }) : null]
                        })
                    })
                })
            };

            function fn(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function hn(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(n)
                    }
                }))
            }

            function pn() {
                var e = hn(["\n  width: 100%;\n  /* background-color: ", "; */\n  text-align: center;\n"]);
                return pn = function() {
                    return e
                }, e
            }

            function mn() {
                var e = hn(["\n  max-width: 420px;\n  width: 100%;\n"]);
                return mn = function() {
                    return e
                }, e
            }

            function xn() {
                var e = hn(["\n  padding: 24px;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);
                return xn = function() {
                    return e
                }, e
            }
            var vn = l.ZP.div.withConfig({
                    componentId: "sc-6ef299c2-0"
                })(pn(), (function(e) {
                    return e.theme.colors.backgroundAlt
                })),
                gn = (0, l.ZP)(i.F0).withConfig({
                    componentId: "sc-6ef299c2-1"
                })(mn()),
                jn = (0, l.ZP)(i.fe).withConfig({
                    componentId: "sc-6ef299c2-2"
                })(xn());

            function bn(e) {
                var n, t = e.onDismiss,
                    l = void 0 === t ? function() {
                        return null
                    } : t,
                    d = e.onCurrencySelect,
                    f = e.selectedCurrency,
                    h = e.otherSelectedCurrency,
                    p = e.showCommonBases,
                    m = void 0 !== p && p,
                    x = (0, o.useState)(he.search),
                    v = x[0],
                    g = x[1],
                    j = (0, o.useCallback)((function(e) {
                        null === l || void 0 === l || l(), d(e)
                    }), [l, d]),
                    b = a(v),
                    y = (0, o.useState)(),
                    w = y[0],
                    k = y[1],
                    Z = (0, o.useState)(),
                    C = Z[0],
                    I = Z[1],
                    S = (0, o.useState)(),
                    T = S[0],
                    P = S[1],
                    O = (0, u.$G)().t,
                    z = (fn(n = {}, he.search, {
                        title: O("Select a Token"),
                        onBack: void 0
                    }), fn(n, he.manage, {
                        title: O("Manage"),
                        onBack: function() {
                            return g(he.search)
                        }
                    }), fn(n, he.importToken, {
                        title: O("Import Tokens"),
                        onBack: function() {
                            return g(b && b !== he.importToken ? b : he.search)
                        }
                    }), fn(n, he.importList, {
                        title: O("Import List"),
                        onBack: function() {
                            return g(he.search)
                        }
                    }), n);
                return (0, r.jsxs)(gn, {
                    minWidth: "320px",
                    children: [(0, r.jsxs)(i.xB, {
                        children: [(0, r.jsxs)(i.r6, {
                            children: [z[v].onBack && (0, r.jsx)(i.vy, {
                                onBack: z[v].onBack
                            }), (0, r.jsx)(s.Z, {
                                children: z[v].title
                            })]
                        }), (0, r.jsx)(i.ol, {
                            onDismiss: l
                        })]
                    }), (0, r.jsxs)(jn, {
                        children: [v === he.search ? (0, r.jsx)(pe, {
                            onCurrencySelect: j,
                            selectedCurrency: f,
                            otherSelectedCurrency: h,
                            showCommonBases: m,
                            showImportView: function() {
                                return g(he.importToken)
                            },
                            setImportToken: k
                        }) : v === he.importToken && w ? (0, r.jsx)(me.Z, {
                            tokens: [w],
                            handleCurrencySelect: j
                        }) : v === he.importList && C && T ? (0, r.jsx)(dn, {
                            list: C,
                            listURL: T,
                            onImport: function() {
                                return g(he.manage)
                            }
                        }) : v === he.manage ? (0, r.jsx)(en, {
                            setModalView: g,
                            setImportToken: k,
                            setImportList: I,
                            setListUrl: P
                        }) : "", v === he.search && (0, r.jsx)(vn, {
                            children: (0, r.jsx)(c.Z, {
                                scale: "sm",
                                onClick: function() {
                                    return g(he.manage)
                                },
                                className: "list-token-manage-button",
                                children: O("Manage Tokens")
                            })
                        })]
                    })]
                })
            }
        },
        20388: function(e, n, t) {
            var r = t(85893),
                o = t(67294),
                i = t(47711),
                s = t(67602),
                c = t(16108),
                l = t(15316),
                a = t(49766),
                u = t(19532),
                d = t(96939),
                f = t(20506),
                h = t(31289),
                p = t(45932),
                m = t(59808),
                x = t(11156),
                v = t(2349),
                g = t(20316),
                j = t(36917),
                b = t(93861),
                y = t(7867);
            n.Z = function(e) {
                var n = e.tokens,
                    t = e.handleCurrencySelect,
                    w = (0, g.Z)().chainId,
                    k = (0, y.$G)().t,
                    Z = (0, o.useState)(!1),
                    C = Z[0],
                    I = Z[1],
                    S = (0, m._E)(),
                    T = (0, j.qB)();
                return (0, r.jsxs)(p.Tz, {
                    gap: "lg",
                    children: [(0, r.jsx)(i.Z, {
                        variant: "warning",
                        children: (0, r.jsxs)(s.Z, {
                            children: [k("Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."), (0, r.jsx)("br", {}), (0, r.jsx)("br", {}), k("If you purchase an arbitrary token, you may be unable to sell it back.")]
                        })
                    }), n.map((function(e) {
                        var n, t, o = w && (null === T || void 0 === T || null === (n = T[w]) || void 0 === n || null === (t = n[e.address]) || void 0 === t ? void 0 : t.list),
                            i = e.address ? "".concat((0, v.Z)(e.address)) : null;
                        return (0, r.jsxs)(c.Z, {
                            gridTemplateRows: "1fr 1fr 1fr",
                            gridGap: "4px",
                            children: [void 0 !== o ? (0, r.jsxs)(l.Z, {
                                variant: "success",
                                outline: !0,
                                scale: "sm",
                                startIcon: o.logoURI && (0, r.jsx)(b._r, {
                                    logoURI: o.logoURI,
                                    size: "12px"
                                }),
                                children: [k("via"), " ", o.name]
                            }) : (0, r.jsx)(l.Z, {
                                variant: "failure",
                                outline: !0,
                                scale: "sm",
                                startIcon: (0, r.jsx)(a.Z, {
                                    color: "failure"
                                }),
                                children: k("Unknown Source")
                            }), (0, r.jsxs)(u.Z, {
                                alignItems: "center",
                                children: [(0, r.jsx)(s.Z, {
                                    mr: "8px",
                                    children: e.name
                                }), (0, r.jsxs)(s.Z, {
                                    children: ["(", e.symbol, ")"]
                                })]
                            }), w && (0, r.jsxs)(u.Z, {
                                justifyContent: "space-between",
                                width: "100%",
                                children: [(0, r.jsx)(s.Z, {
                                    mr: "4px",
                                    children: i
                                }), (0, r.jsxs)(d.Z, {
                                    href: (0, x.s6)(e.address, "address", w),
                                    external: !0,
                                    children: ["(", k("View on BscScan"), ")"]
                                })]
                            })]
                        }, e.address)
                    })), (0, r.jsxs)(u.Z, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [(0, r.jsxs)(u.Z, {
                            alignItems: "center",
                            onClick: function() {
                                return I(!C)
                            },
                            children: [(0, r.jsx)(f.Z, {
                                scale: "sm",
                                name: "confirmed",
                                type: "checkbox",
                                checked: C,
                                onChange: function() {
                                    return I(!C)
                                }
                            }), (0, r.jsx)(s.Z, {
                                ml: "8px",
                                style: {
                                    userSelect: "none"
                                },
                                children: k("I understand")
                            })]
                        }), (0, r.jsx)(h.Z, {
                            variant: "danger",
                            disabled: !C,
                            onClick: function() {
                                n.forEach((function(e) {
                                    return S(e)
                                })), t && t(n[0])
                            },
                            className: ".token-dismiss-button",
                            children: k("Import")
                        })]
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=1889-1cd7e9184b027785.js.map