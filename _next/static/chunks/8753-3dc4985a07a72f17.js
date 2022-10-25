"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8753], {
        16973: function(n, r, e) {
            var t = e(85893),
                i = (e(67294), e(78491));

            function o(n, r, e) {
                return r in n ? Object.defineProperty(n, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = e, n
            }
            r.Z = function(n) {
                return (0, t.jsx)(i.Z, function(n) {
                    for (var r = 1; r < arguments.length; r++) {
                        var e = null != arguments[r] ? arguments[r] : {},
                            t = Object.keys(e);
                        "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })))), t.forEach((function(r) {
                            o(n, r, e[r])
                        }))
                    }
                    return n
                }({
                    viewBox: "0 0 24 24"
                }, n, {
                    children: (0, t.jsx)("path", {
                        d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                    })
                }))
            }
        },
        45932: function(n, r, e) {
            e.d(r, {
                Tz: function() {
                    return s
                },
                lg: function() {
                    return l
                }
            });
            var t = e(186);

            function i(n, r) {
                return r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                }))
            }

            function o() {
                var n = i(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);
                return o = function() {
                    return n
                }, n
            }

            function u() {
                var n = i(["\n  width: 100%;\n  align-items: center;\n"]);
                return u = function() {
                    return n
                }, n
            }

            function a() {
                var n = i(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"]);
                return a = function() {
                    return n
                }, n
            }
            var c = t.ZP.div.withConfig({
                    componentId: "sc-91e5cc43-0"
                })(o()),
                l = (0, t.ZP)(c).withConfig({
                    componentId: "sc-91e5cc43-1"
                })(u()),
                s = t.ZP.div.withConfig({
                    componentId: "sc-91e5cc43-2"
                })(a(), (function(n) {
                    var r = n.gap;
                    return ("sm" === r ? "8px" : "md" === r && "12px") || "lg" === r && "24px" || r
                }), (function(n) {
                    return n.justify
                }));
            r.ZP = c
        },
        41149: function(n, r, e) {
            e.d(r, {
                BA: function() {
                    return p
                },
                DA: function() {
                    return v
                },
                m0: function() {
                    return d
                }
            });
            var t = e(186),
                i = e(23526);

            function o(n, r) {
                return r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                }))
            }

            function u() {
                var n = o(["\n  width: ", ";\n  display: flex;\n  align-items: ", ";\n  justify-content: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]);
                return u = function() {
                    return n
                }, n
            }

            function a() {
                var n = o(["\n  justify-content: space-between;\n"]);
                return a = function() {
                    return n
                }, n
            }

            function c() {
                var n = o(["\n  display: flex;\n  align-items: flex-end;\n"]);
                return c = function() {
                    return n
                }, n
            }

            function l() {
                var n = o(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"]);
                return l = function() {
                    return n
                }, n
            }

            function s() {
                var n = o(["\n  width: fit-content;\n  margin: ", ";\n"]);
                return s = function() {
                    return n
                }, n
            }
            var f = (0, t.ZP)(i.Z).withConfig({
                    componentId: "sc-2ce7e6d-0"
                })(u(), (function(n) {
                    var r = n.width;
                    return null !== r && void 0 !== r ? r : "100%"
                }), (function(n) {
                    var r = n.align;
                    return null !== r && void 0 !== r ? r : "center"
                }), (function(n) {
                    var r = n.justify;
                    return null !== r && void 0 !== r ? r : "flex-start"
                }), (function(n) {
                    var r = n.padding;
                    return null !== r && void 0 !== r ? r : "0"
                }), (function(n) {
                    return n.border
                }), (function(n) {
                    return n.borderRadius
                })),
                d = (0, t.ZP)(f).withConfig({
                    componentId: "sc-2ce7e6d-1"
                })(a()),
                p = (t.ZP.div.withConfig({
                    componentId: "sc-2ce7e6d-2"
                })(c()), (0, t.ZP)(f).withConfig({
                    componentId: "sc-2ce7e6d-3"
                })(l(), (function(n) {
                    var r = n.gap;
                    return r && "-".concat(r)
                }), (function(n) {
                    return n.justify
                }), (function(n) {
                    return n.gap
                }))),
                v = (0, t.ZP)(f).withConfig({
                    componentId: "sc-2ce7e6d-4"
                })(s(), (function(n) {
                    var r = n.gap;
                    return r && "-".concat(r)
                }));
            r.ZP = f
        },
        76396: function(n, r, e) {
            e.d(r, {
                Z: function() {
                    return d
                }
            });
            var t = e(85893),
                i = e(186);

            function o(n, r, e) {
                return r in n ? Object.defineProperty(n, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = e, n
            }

            function u(n, r) {
                if (null == n) return {};
                var e, t, i = function(n, r) {
                    if (null == n) return {};
                    var e, t, i = {},
                        o = Object.keys(n);
                    for (t = 0; t < o.length; t++) e = o[t], r.indexOf(e) >= 0 || (i[e] = n[e]);
                    return i
                }(n, r);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    for (t = 0; t < o.length; t++) e = o[t], r.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(n, e) && (i[e] = n[e])
                }
                return i
            }

            function a(n, r) {
                return r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                }))
            }

            function c() {
                var n = a(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
                return c = function() {
                    return n
                }, n
            }

            function l() {
                var n = a(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"]);
                return l = function() {
                    return n
                }, n
            }
            var s = (0, i.F4)(c()),
                f = i.ZP.svg.withConfig({
                    componentId: "sc-fa227f0-0"
                })(l(), s, (function(n) {
                    return n.size
                }), (function(n) {
                    return n.size
                }), (function(n) {
                    var r = n.stroke,
                        e = n.theme;
                    return null !== r && void 0 !== r ? r : e.colors.primary
                }));

            function d(n) {
                var r = n.size,
                    e = void 0 === r ? "16px" : r,
                    i = n.stroke,
                    a = u(n, ["size", "stroke"]);
                return (0, t.jsx)(f, function(n) {
                    for (var r = 1; r < arguments.length; r++) {
                        var e = null != arguments[r] ? arguments[r] : {},
                            t = Object.keys(e);
                        "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })))), t.forEach((function(r) {
                            o(n, r, e[r])
                        }))
                    }
                    return n
                }({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    size: e,
                    stroke: i
                }, a, {
                    children: (0, t.jsx)("path", {
                        d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }))
            }
        },
        70939: function(n, r, e) {
            e.d(r, {
                Z: function() {
                    return x
                }
            });
            var t = e(85893),
                i = e(52689),
                o = e(67294),
                u = e(78491);

            function a(n, r, e) {
                return r in n ? Object.defineProperty(n, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = e, n
            }
            var c = function(n) {
                    return (0, t.jsxs)(u.Z, function(n) {
                        for (var r = 1; r < arguments.length; r++) {
                            var e = null != arguments[r] ? arguments[r] : {},
                                t = Object.keys(e);
                            "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                                return Object.getOwnPropertyDescriptor(e, n).enumerable
                            })))), t.forEach((function(r) {
                                a(n, r, e[r])
                            }))
                        }
                        return n
                    }({
                        viewBox: "0 0 96 96"
                    }, n, {
                        children: [(0, t.jsx)("circle", {
                            cx: "48",
                            cy: "48",
                            r: "48",
                            fill: "#F0B90B"
                        }), (0, t.jsx)("path", {
                            d: "M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z",
                            fill: "white"
                        })]
                    }))
                },
                l = e(186),
                s = e(27697),
                f = e(36402),
                d = e(34118),
                p = function(n) {
                    return "https://assets.trustwalletapp.com/blockchains/smartchain/assets/".concat(n, "/logo.png")
                },
                v = e(32798);

            function y(n, r) {
                (null == r || r > n.length) && (r = n.length);
                for (var e = 0, t = new Array(r); e < r; e++) t[e] = n[e];
                return t
            }

            function m(n, r) {
                return null != r && "undefined" !== typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r
            }

            function b(n) {
                return function(n) {
                    if (Array.isArray(n)) return y(n)
                }(n) || function(n) {
                    if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, r) {
                    if (!n) return;
                    if ("string" === typeof n) return y(n, r);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return y(n, r)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h() {
                var n, r, e = (n = ["\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return h = function() {
                    return e
                }, e
            }
            var g = (0, l.ZP)(v.Z).withConfig({
                componentId: "sc-f48fa58b-0"
            })(h(), (function(n) {
                return n.size
            }), (function(n) {
                return n.size
            }));

            function x(n) {
                var r, e, u = n.currency,
                    a = n.size,
                    l = void 0 === a ? "24px" : a,
                    v = n.style,
                    y = (0, d.Z)(m(u, s.DT) ? u.logoURI : void 0),
                    h = (0, o.useMemo)((function() {
                        return u === i.c0 ? [] : m(u, i.WU) ? m(u, s.DT) ? b(y).concat([p(u.address)]) : [p(u.address)] : []
                    }), [u, y]);
                return u === i.c0 ? (0, t.jsx)(c, {
                    width: l,
                    style: v
                }) : (null === (r = u) || void 0 === r ? void 0 : r.address).toLowerCase() === f.HO.toLowerCase() ? (0, t.jsx)("img", {
                    src: "/images/logo.png",
                    alt: "",
                    width: l,
                    style: v
                }) : (0, t.jsx)(g, {
                    size: l,
                    srcs: h,
                    alt: "".concat(null !== (e = null === u || void 0 === u ? void 0 : u.symbol) && void 0 !== e ? e : "token", " logo"),
                    style: v
                })
            }
        },
        93861: function(n, r, e) {
            e.d(r, {
                Xw: function() {
                    return t.Z
                },
                ge: function() {
                    return c
                },
                _r: function() {
                    return p
                }
            });
            var t = e(70939),
                i = e(85893),
                o = e(186);

            function u() {
                var n, r, e = (n = ["\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return u = function() {
                    return e
                }, e
            }
            var a = o.ZP.div.withConfig({
                componentId: "sc-b339c6de-0"
            })(u(), (function(n) {
                return n.margin && "4px"
            }));

            function c(n) {
                var r = n.currency0,
                    e = n.currency1,
                    o = n.size,
                    u = void 0 === o ? 20 : o,
                    c = n.margin,
                    l = void 0 !== c && c;
                return (0, i.jsxs)(a, {
                    margin: l,
                    children: [r && (0, i.jsx)(t.Z, {
                        currency: r,
                        size: "".concat(u.toString(), "px"),
                        style: {
                            marginRight: "4px"
                        }
                    }), e && (0, i.jsx)(t.Z, {
                        currency: e,
                        size: "".concat(u.toString(), "px")
                    })]
                })
            }
            var l = e(34118),
                s = e(32798);

            function f() {
                var n, r, e = (n = ["\n  width: ", ";\n  height: ", ";\n  background-color: white;\n  border-radius: 50%;\n"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return f = function() {
                    return e
                }, e
            }
            var d = (0, o.ZP)(s.Z).withConfig({
                componentId: "sc-6b57d2a0-0"
            })(f(), (function(n) {
                return n.size
            }), (function(n) {
                return n.size
            }));

            function p(n) {
                var r = n.logoURI,
                    e = n.style,
                    t = n.size,
                    o = void 0 === t ? "24px" : t,
                    u = n.alt,
                    a = (0, l.Z)(r);
                return (0, i.jsx)(d, {
                    alt: u,
                    size: o,
                    srcs: a,
                    style: e
                })
            }
        },
        97383: function(n, r, e) {
            var t = e(85893),
                i = e(19532),
                o = e(67602),
                u = e(31289),
                a = e(4717),
                c = e(7867),
                l = e(59808),
                s = e(27697);

            function f(n, r) {
                (null == r || r > n.length) && (r = n.length);
                for (var e = 0, t = new Array(r); e < r; e++) t[e] = n[e];
                return t
            }

            function d(n, r) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, r) {
                    var e = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != e) {
                        var t, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (e = e.call(n); !(u = (t = e.next()).done) && (o.push(t.value), !r || o.length !== r); u = !0);
                        } catch (c) {
                            a = !0, i = c
                        } finally {
                            try {
                                u || null == e.return || e.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(n, r) || function(n, r) {
                    if (!n) return;
                    if ("string" === typeof n) return f(n, r);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return f(n, r)
                }(n, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            r.Z = function() {
                var n = (0, c.$G)().t,
                    r = d((0, l.nF)(), 2),
                    e = r[0],
                    f = r[1];
                return (0, t.jsxs)(i.Z, {
                    flexDirection: "column",
                    children: [(0, t.jsxs)(i.Z, {
                        alignItems: "center",
                        children: [(0, t.jsx)(o.Z, {
                            fontSize: "12px",
                            children: n("Default Transaction Speed (GWEI)")
                        }), (0, t.jsx)(a.Z, {
                            text: n("Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees"),
                            placement: "top-start",
                            ml: "4px"
                        })]
                    }), (0, t.jsxs)(i.Z, {
                        flexWrap: "wrap",
                        children: [(0, t.jsx)(u.Z, {
                            mt: "4px",
                            mr: "4px",
                            scale: "xs",
                            onClick: function() {
                                f(s.j4.default)
                            },
                            variant: e === s.j4.default ? "primary" : "tertiary",
                            children: n("Standard (%gasPrice%)", {
                                gasPrice: s.DB.default
                            })
                        }), (0, t.jsx)(u.Z, {
                            mt: "4px",
                            mr: "4px",
                            scale: "xs",
                            onClick: function() {
                                f(s.j4.fast)
                            },
                            variant: e === s.j4.fast ? "primary" : "tertiary",
                            children: n("Fast (%gasPrice%)", {
                                gasPrice: s.DB.fast
                            })
                        }), (0, t.jsx)(u.Z, {
                            mr: "4px",
                            mt: "4px",
                            scale: "xs",
                            onClick: function() {
                                f(s.j4.instant)
                            },
                            variant: e === s.j4.instant ? "primary" : "tertiary",
                            children: n("Instant (%gasPrice%)", {
                                gasPrice: s.DB.instant
                            })
                        })]
                    })]
                })
            }
        },
        44523: function(n, r, e) {
            var t, i, o = e(85893),
                u = e(67294),
                a = e(11156),
                c = e(19532),
                l = e(67602),
                s = e(31289),
                f = e(23526),
                d = e(47016),
                p = e(7867),
                v = e(59808),
                y = e(4717);

            function m(n, r) {
                (null == r || r > n.length) && (r = n.length);
                for (var e = 0, t = new Array(r); e < r; e++) t[e] = n[e];
                return t
            }

            function b(n, r) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, r) {
                    var e = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != e) {
                        var t, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (e = e.call(n); !(u = (t = e.next()).done) && (o.push(t.value), !r || o.length !== r); u = !0);
                        } catch (c) {
                            a = !0, i = c
                        } finally {
                            try {
                                u || null == e.return || e.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(n, r) || function(n, r) {
                    if (!n) return;
                    if ("string" === typeof n) return m(n, r);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return m(n, r)
                }(n, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }! function(n) {
                n.InvalidInput = "InvalidInput", n.RiskyLow = "RiskyLow", n.RiskyHigh = "RiskyHigh"
            }(t || (t = {})),
            function(n) {
                n.InvalidInput = "InvalidInput"
            }(i || (i = {}));
            var h = RegExp("^\\d*(?:\\\\[.])?\\d*$");
            r.Z = function() {
                var n, r = b((0, v.$2)(), 2),
                    e = r[0],
                    m = r[1],
                    g = b((0, v.A6)(), 2),
                    x = g[0],
                    j = (g[1], (0, u.useState)("")),
                    w = j[0],
                    I = j[1],
                    O = (0, u.useState)(""),
                    S = O[0],
                    P = (O[1], (0, p.$G)().t),
                    Z = "" === w || (e / 100).toFixed(2) === Number.parseFloat(w).toFixed(2),
                    A = "" === S || (x / 60).toString() === S;
                n = "" === w || Z ? Z && e < 50 ? t.RiskyLow : Z && e > 500 ? t.RiskyHigh : void 0 : t.InvalidInput, "" === S || A || i.InvalidInput;
                var C = function(n) {
                    if ("" === n || h.test((0, a.hr)(n))) {
                        I(n);
                        try {
                            var r = Number.parseInt((100 * Number.parseFloat(n)).toString());
                            !Number.isNaN(r) && r < 5e3 && m(r)
                        } catch (e) {
                            console.error(e)
                        }
                    }
                };
                return (0, o.jsx)(c.Z, {
                    flexDirection: "column",
                    children: (0, o.jsxs)(c.Z, {
                        flexDirection: "column",
                        mb: "24px",
                        children: [(0, o.jsxs)(c.Z, {
                            mb: "2px",
                            mt: "10px",
                            children: [(0, o.jsx)(l.Z, {
                                fontSize: "12px",
                                children: P("Slippage Tolerance")
                            }), (0, o.jsx)(y.Z, {
                                text: P("Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."),
                                placement: "top-start",
                                ml: "4px"
                            })]
                        }), (0, o.jsxs)(c.Z, {
                            flexWrap: "wrap",
                            children: [(0, o.jsx)(s.Z, {
                                mt: "4px",
                                mr: "4px",
                                scale: "xs",
                                onClick: function() {
                                    I(""), m(10)
                                },
                                variant: 10 === e ? "primary" : "tertiary",
                                children: "0.1%"
                            }), (0, o.jsx)(s.Z, {
                                mt: "4px",
                                mr: "4px",
                                scale: "xs",
                                onClick: function() {
                                    I(""), m(50)
                                },
                                variant: 50 === e ? "primary" : "tertiary",
                                children: "0.5%"
                            }), (0, o.jsx)(s.Z, {
                                mr: "4px",
                                mt: "4px",
                                scale: "xs",
                                onClick: function() {
                                    I(""), m(100)
                                },
                                variant: 100 === e ? "primary" : "tertiary",
                                children: "1.0%"
                            }), (0, o.jsxs)(c.Z, {
                                alignItems: "center",
                                ml: "4px",
                                children: [(0, o.jsx)(f.Z, {
                                    width: "76px",
                                    mt: "4px",
                                    children: (0, o.jsx)(d.Z, {
                                        scale: "sm",
                                        inputMode: "decimal",
                                        pattern: "^[0-9]*[.,]?[0-9]{0,2}$",
                                        placeholder: (e / 100).toFixed(2),
                                        value: w,
                                        onBlur: function() {
                                            C((e / 100).toFixed(2))
                                        },
                                        onChange: function(n) {
                                            n.currentTarget.validity.valid && C(n.target.value.replace(/,/g, "."))
                                        },
                                        isWarning: !Z,
                                        isSuccess: ![10, 50, 100].includes(e),
                                        style: {
                                            fontSize: "12px",
                                            height: "20px"
                                        }
                                    })
                                }), (0, o.jsx)(l.Z, {
                                    color: "primary",
                                    bold: !0,
                                    ml: "2px",
                                    children: "%"
                                })]
                            })]
                        }), !!n && (0, o.jsx)(l.Z, {
                            fontSize: "12px",
                            color: n === t.InvalidInput ? "red" : "#F3841E",
                            mt: "8px",
                            children: n === t.InvalidInput ? P("Enter a valid slippage percentage") : n === t.RiskyLow ? P("Your transaction may fail") : P("Your transaction may be frontrun")
                        })]
                    })
                })
            }
        },
        4717: function(n, r, e) {
            var t = e(85893),
                i = e(55070),
                o = e(23526),
                u = e(31236);

            function a(n, r, e) {
                return r in n ? Object.defineProperty(n, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = e, n
            }

            function c(n, r) {
                if (null == n) return {};
                var e, t, i = function(n, r) {
                    if (null == n) return {};
                    var e, t, i = {},
                        o = Object.keys(n);
                    for (t = 0; t < o.length; t++) e = o[t], r.indexOf(e) >= 0 || (i[e] = n[e]);
                    return i
                }(n, r);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    for (t = 0; t < o.length; t++) e = o[t], r.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(n, e) && (i[e] = n[e])
                }
                return i
            }

            function l() {
                var n, r, e = (n = ["\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return l = function() {
                    return e
                }, e
            }
            var s = e(186).ZP.div.withConfig({
                componentId: "sc-faba58fd-0"
            })(l());
            r.Z = function(n) {
                var r = n.text,
                    e = n.placement,
                    l = void 0 === e ? "right-end" : e,
                    f = n.size,
                    d = void 0 === f ? "16px" : f,
                    p = c(n, ["text", "placement", "size"]),
                    v = (0, i.Z)(r, {
                        placement: l,
                        trigger: "hover"
                    }),
                    y = v.targetRef,
                    m = v.tooltip,
                    b = v.tooltipVisible;
                return (0, t.jsxs)(o.Z, function(n) {
                    for (var r = 1; r < arguments.length; r++) {
                        var e = null != arguments[r] ? arguments[r] : {},
                            t = Object.keys(e);
                        "function" === typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(e).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })))), t.forEach((function(r) {
                            a(n, r, e[r])
                        }))
                    }
                    return n
                }({}, p, {
                    children: [b && m, (0, t.jsx)(s, {
                        ref: y,
                        children: (0, t.jsx)(u.Z, {
                            color: "textSubtle",
                            width: d
                        })
                    })]
                }))
            }
        },
        77905: function(n, r, e) {
            e.d(r, {
                mP: function() {
                    return j
                },
                AU: function() {
                    return g
                },
                in: function() {
                    return x
                }
            });
            var t = e(52689),
                i = e(81313);

            function o(n, r) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.fI;
                if (n && !r) return !1;
                if (r && !n) return !0;
                if (n && r) {
                    if (n.tradeType !== r.tradeType || !(0, t.KA)(n.inputAmount.currency, r.inputAmount.currency) || !(0, t.KA)(n.outputAmount.currency, r.outputAmount.currency)) throw new Error("Trades are not comparable");
                    return e.equalTo(i.fI) ? n.executionPrice.lessThan(r.executionPrice) : n.executionPrice.raw.multiply(e.add(i.yC)).lessThan(r.executionPrice)
                }
            }
            var u = e(94654),
                a = e.n(u),
                c = e(67294),
                l = e(20316),
                s = e(59808),
                f = e(54941),
                d = e(54543),
                p = e(49013);

            function v(n, r) {
                (null == r || r > n.length) && (r = n.length);
                for (var e = 0, t = new Array(r); e < r; e++) t[e] = n[e];
                return t
            }

            function y(n, r) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, r) {
                    var e = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != e) {
                        var t, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (e = e.call(n); !(u = (t = e.next()).done) && (o.push(t.value), !r || o.length !== r); u = !0);
                        } catch (c) {
                            a = !0, i = c
                        } finally {
                            try {
                                u || null == e.return || e.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(n, r) || b(n, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(n) {
                return function(n) {
                    if (Array.isArray(n)) return v(n)
                }(n) || function(n) {
                    if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || b(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function b(n, r) {
                if (n) {
                    if ("string" === typeof n) return v(n, r);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    return "Object" === e && n.constructor && (e = n.constructor.name), "Map" === e || "Set" === e ? Array.from(e) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? v(n, r) : void 0
                }
            }

            function h(n, r) {
                var e = (0, l.Z)().chainId,
                    t = y(e ? [(0, d.pu)(n, e), (0, d.pu)(r, e)] : [void 0, void 0], 2),
                    o = t[0],
                    u = t[1],
                    s = (0, c.useMemo)((function() {
                        var n, r, t;
                        if (!e) return [];
                        var a, c, l = null !== (t = i.lM[e]) && void 0 !== t ? t : [],
                            s = o && null !== (a = null === (n = i.ck[e]) || void 0 === n ? void 0 : n[o.address]) && void 0 !== a ? a : [],
                            f = u && null !== (c = null === (r = i.ck[e]) || void 0 === r ? void 0 : r[u.address]) && void 0 !== c ? c : [];
                        return m(l).concat(m(s), m(f))
                    }), [e, o, u]),
                    p = (0, c.useMemo)((function() {
                        return a()(s, (function(n) {
                            return s.map((function(r) {
                                return [n, r]
                            }))
                        }))
                    }), [s]),
                    v = (0, c.useMemo)((function() {
                        return o && u ? [
                            [o, u]
                        ].concat(m(s.map((function(n) {
                            return [o, n]
                        }))), m(s.map((function(n) {
                            return [u, n]
                        }))), m(p)).filter((function(n) {
                            return Boolean(n[0] && n[1])
                        })).filter((function(n) {
                            var r = y(n, 2),
                                e = r[0],
                                t = r[1];
                            return e.address !== t.address
                        })).filter((function(n) {
                            var r = y(n, 2),
                                t = r[0],
                                o = r[1];
                            if (!e) return !0;
                            var u = i.IP[e],
                                a = null === u || void 0 === u ? void 0 : u[t.address],
                                c = null === u || void 0 === u ? void 0 : u[o.address];
                            return !a && !c || !(a && !a.find((function(n) {
                                return o.equals(n)
                            }))) && !(c && !c.find((function(n) {
                                return t.equals(n)
                            })))
                        })) : []
                    }), [o, u, s, p, e]),
                    b = (0, f.z$)(v);
                return (0, c.useMemo)((function() {
                    return Object.values(b.filter((function(n) {
                        return Boolean(n[0] === f._G.EXISTS && n[1])
                    })).reduce((function(n, r) {
                        var e, t = y(r, 2)[1];
                        return n[t.liquidityToken.address] = null !== (e = n[t.liquidityToken.address]) && void 0 !== e ? e : t, n
                    }), {}))
                }), [b])
            }

            function g(n, r) {
                var e = h(null === n || void 0 === n ? void 0 : n.currency, r),
                    u = y((0, s.RO)(), 1)[0];
                return (0, c.useMemo)((function() {
                    if (n && r && e.length > 0) {
                        var a;
                        if (u) return null !== (a = t.ho.bestTradeExactIn(e, n, r, {
                            maxHops: 1,
                            maxNumResults: 1
                        })[0]) && void 0 !== a ? a : null;
                        for (var c = null, l = 1; l <= 3; l++) {
                            var s, f = null !== (s = t.ho.bestTradeExactIn(e, n, r, {
                                maxHops: l,
                                maxNumResults: 1
                            })[0]) && void 0 !== s ? s : null;
                            o(c, f, i.Ru) && (c = f)
                        }
                        return c
                    }
                    return null
                }), [e, n, r, u])
            }

            function x(n, r) {
                var e = h(n, null === r || void 0 === r ? void 0 : r.currency),
                    u = y((0, s.RO)(), 1)[0];
                return (0, c.useMemo)((function() {
                    if (n && r && e.length > 0) {
                        var a;
                        if (u) return null !== (a = t.ho.bestTradeExactOut(e, n, r, {
                            maxHops: 1,
                            maxNumResults: 1
                        })[0]) && void 0 !== a ? a : null;
                        for (var c = null, l = 1; l <= 3; l++) {
                            var s, f = null !== (s = t.ho.bestTradeExactOut(e, n, r, {
                                maxHops: l,
                                maxNumResults: 1
                            })[0]) && void 0 !== s ? s : null;
                            o(c, f, i.Ru) && (c = f)
                        }
                        return c
                    }
                    return null
                }), [n, r, e, u])
            }

            function j(n, r) {
                var e = (0, p.l6)(),
                    t = (0, l.Z)().chainId,
                    i = (0, d.pu)(n, t),
                    o = (0, d.pu)(r, t);
                if (e) {
                    if (i && Object.keys(e).includes(i.address)) return !0;
                    if (o && Object.keys(e).includes(o.address)) return !0
                }
                return !1
            }
        },
        34118: function(n, r, e) {
            e.d(r, {
                Z: function() {
                    return o
                }
            });
            var t = e(67294),
                i = e(38796);

            function o(n) {
                return (0, t.useMemo)((function() {
                    return n ? (0, i.Z)(n) : []
                }), [n])
            }
        },
        36402: function(n, r, e) {
            e.d(r, {
                HO: function() {
                    return i
                },
                VN: function() {
                    return t
                },
                g$: function() {
                    return o
                }
            });
            var t = "0x55d398326f99059fF775485246999027B3197955",
                i = "0x5F2D91c698f2Bc1Fd9E4a92b1fcdA4D4aD17e0d3",
                o = "0x5F2D91c698f2Bc1Fd9E4a92b1fcdA4D4aD17e0d3"
        },
        64357: function(n, r, e) {
            e.d(r, {
                jj: function() {
                    return In
                },
                SM: function() {
                    return bn
                },
                _r: function() {
                    return vn
                },
                dU: function() {
                    return pn
                }
            });
            var t = e(34051),
                i = e.n(t),
                o = e(52689),
                u = e(67294),
                a = e(25617),
                c = e(20316),
                l = e(77905),
                s = e(11163),
                f = e(7867),
                d = e(11156),
                p = e(10608);
            var v = e(46151),
                y = e(29121),
                m = e(52394),
                b = e(59808),
                h = e(94224),
                g = e(27429),
                x = e(28687);

            function j() {
                var n, r, e = (n = ["\n  query lastPairDayId($pairId: String) {\n    pairDayDatas(first: 1, where: { pairAddress: $pairId }, orderBy: date, orderDirection: desc) {\n      id\n    }\n  }\n"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return j = function() {
                    return e
                }, e
            }
            var w = (0, x.gql)(j());

            function I() {
                var n, r, e = (n = ["\n  query pairHourDatas($pairId: String, $first: Int) {\n    pairHourDatas(first: $first, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n      hourStartUnix\n      reserve0\n      reserve1\n      reserveUSD\n      pair {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return I = function() {
                    return e
                }, e
            }
            var O = (0, x.gql)(I());

            function S() {
                var n, r, e = (n = ["\n  query pairDayDatasByIdsQuery($pairIds: [String]) {\n    pairDayDatas(where: { id_in: $pairIds }, orderBy: date, orderDirection: desc) {\n      id\n      date\n      reserve0\n      reserve1\n      reserveUSD\n      pairAddress {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return S = function() {
                    return e
                }, e
            }
            var P, Z, A = (0, x.gql)(S());

            function C(n, r, e) {
                return r in n ? Object.defineProperty(n, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = e, n
            }! function(n) {
                n[n.DAY = 0] = "DAY", n[n.WEEK = 1] = "WEEK", n[n.MONTH = 2] = "MONTH", n[n.YEAR = 3] = "YEAR"
            }(P || (P = {}));
            var L, k = (C(Z = {}, P.DAY, 24), C(Z, P.WEEK, 28), C(Z, P.MONTH, 30), C(Z, P.YEAR, 24), Z),
                D = (C(L = {}, P.DAY, null), C(L, P.WEEK, 6), C(L, P.MONTH, 1), C(L, P.YEAR, 15), L),
                T = e(98913),
                N = e.n(T),
                E = function(n) {
                    var r = n.id,
                        e = n.pairId;
                    return r.replace("".concat(e, "-"), "")
                },
                U = function(n) {
                    var r = n.pairAddress,
                        e = n.pairLastId,
                        t = n.timeWindow,
                        i = n.idsCount,
                        o = Number(e);
                    return t === P.DAY ? [] : N()(i, (function(n) {
                        return "".concat(r, "-").concat(o - n * D[t])
                    }))
                };

            function B() {
                var n, r, e = (n = ["\n  query pairDayDatas($pairId: String, $first: Int) {\n    pairDayDatas(first: $first, where: { pairAddress: $pairId }, orderBy: date, orderDirection: desc) {\n      id\n      date\n      reserve0\n      reserve1\n      reserveUSD\n      pairAddress {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return B = function() {
                    return e
                }, e
            }
            var z = (0, x.gql)(B());

            function M() {
                var n, r, e = (n = ["\n  query pairHourDatasByIds($pairIds: [String]) {\n    pairHourDatas(where: { id_in: $pairIds }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n      hourStartUnix\n      reserve0\n      reserve1\n      reserveUSD\n      pair {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return M = function() {
                    return e
                }, e
            }
            var $ = (0, x.gql)(M());

            function F() {
                var n, r, e = (n = ["\n  query lastPairHourId($pairId: String) {\n    pairHourDatas(first: 1, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n    }\n  }\n"], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return F = function() {
                    return e
                }, e
            }
            var H = (0, x.gql)(F());

            function R(n, r, e, t, i, o, u) {
                try {
                    var a = n[o](u),
                        c = a.value
                } catch (l) {
                    return void e(l)
                }
                a.done ? r(c) : Promise.resolve(c).then(t, i)
            }! function() {
                var n, r = (n = i().mark((function n(r) {
                    var e, t, o, u, a, c, l, s, f, d, p, v, y, m, b, x, j;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                e = r.pairId, t = r.timeWindow, o = g.dQ, n.prev = 2, n.t0 = t, n.next = n.t0 === P.DAY ? 6 : n.t0 === P.WEEK ? 10 : n.t0 === P.MONTH ? 23 : n.t0 === P.YEAR ? 27 : 40;
                                break;
                            case 6:
                                return n.next = 8, (0, h.Z)(o, O, {
                                    pairId: e,
                                    first: k[t]
                                });
                            case 8:
                                return u = n.sent, n.abrupt("return", {
                                    data: u,
                                    error: !1
                                });
                            case 10:
                                return n.next = 13, (0, h.Z)(o, H, {
                                    pairId: e
                                });
                            case 13:
                                if (c = n.sent, l = (null === c || void 0 === c ? void 0 : c.pairHourDatas) ? null === (a = c.pairHourDatas[0]) || void 0 === a ? void 0 : a.id : null) {
                                    n.next = 17;
                                    break
                                }
                                return n.abrupt("return", {
                                    data: {
                                        pairHourDatas: []
                                    },
                                    error: !1
                                });
                            case 17:
                                return s = E({
                                    id: l,
                                    pairId: e
                                }), f = U({
                                    pairAddress: e,
                                    pairLastId: s,
                                    timeWindow: t,
                                    idsCount: k[t]
                                }), n.next = 21, (0, h.Z)(o, $, {
                                    pairIds: f
                                });
                            case 21:
                                return d = n.sent, n.abrupt("return", {
                                    data: d,
                                    error: !1
                                });
                            case 23:
                                return n.next = 25, (0, h.Z)(o, z, {
                                    pairId: e,
                                    first: k[t]
                                });
                            case 25:
                                return p = n.sent, n.abrupt("return", {
                                    data: p,
                                    error: !1
                                });
                            case 27:
                                return n.next = 30, (0, h.Z)(o, w, {
                                    pairId: e
                                });
                            case 30:
                                if (y = n.sent, m = (null === y || void 0 === y ? void 0 : y.pairDayDatas) ? null === (v = y.pairDayDatas[0]) || void 0 === v ? void 0 : v.id : null) {
                                    n.next = 34;
                                    break
                                }
                                return n.abrupt("return", {
                                    data: {
                                        pairDayDatas: []
                                    },
                                    error: !1
                                });
                            case 34:
                                return b = E({
                                    id: m,
                                    pairId: e
                                }), x = U({
                                    pairAddress: e,
                                    pairLastId: b,
                                    timeWindow: t,
                                    idsCount: k[t]
                                }), n.next = 38, (0, h.Z)(o, A, {
                                    pairIds: x
                                });
                            case 38:
                                return j = n.sent, n.abrupt("return", {
                                    data: j,
                                    error: !1
                                });
                            case 40:
                                return n.abrupt("return", {
                                    data: null,
                                    error: !1
                                });
                            case 41:
                                n.next = 47;
                                break;
                            case 43:
                                return n.prev = 43, n.t1 = n.catch(2), console.error("Failed to fetch price chart data", n.t1), n.abrupt("return", {
                                    error: !0
                                });
                            case 47:
                            case "end":
                                return n.stop()
                        }
                    }), n, null, [
                        [2, 43]
                    ])
                })), function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(t, i) {
                        var o = n.apply(r, e);

                        function u(n) {
                            R(o, t, i, u, a, "next", n)
                        }

                        function a(n) {
                            R(o, t, i, u, a, "throw", n)
                        }
                        u(void 0)
                    }))
                })
            }();
            e(27361);
            var V = e(36402),
                q = e(75472),
                W = e.n(q),
                Y = e(4034),
                _ = e(80685),
                K = e(28401),
                J = e(12383),
                G = e(84686),
                Q = e(48229),
                X = e(47865);

            function nn() {
                var n, r, e = (n = ["\n      query derivedTokenPriceData {\n        ", "\n      }\n    "], r || (r = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(r)
                    }
                })));
                return nn = function() {
                    return e
                }, e
            }
            var rn = function(n, r) {
                    return r.map((function(r) {
                        return "\n    t".concat(r.timestamp, ':token(id:"').concat(n, '", block: { number: ').concat(r.number, " }) { \n        derivedBNB\n      }\n    ")
                    }))
                },
                en = function(n) {
                    return (0, x.gql)(nn(), n)
                };

            function tn(n, r, e, t, i, o, u) {
                try {
                    var a = n[o](u),
                        c = a.value
                } catch (l) {
                    return void e(l)
                }
                a.done ? r(c) : Promise.resolve(c).then(t, i)
            }

            function on(n) {
                return function() {
                    var r = this,
                        e = arguments;
                    return new Promise((function(t, i) {
                        var o = n.apply(r, e);

                        function u(n) {
                            tn(o, t, i, u, a, "next", n)
                        }

                        function a(n) {
                            tn(o, t, i, u, a, "throw", n)
                        }
                        u(void 0)
                    }))
                }
            }
            var un = function() {
                    var n = on(i().mark((function n(r, e) {
                        var t, o;
                        return i().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, (0, X.L)(en, rn(r, e), Y.JY, 200);
                                case 2:
                                    if (t = n.sent) {
                                        n.next = 6;
                                        break
                                    }
                                    return console.error("Price data failed to load"), n.abrupt("return", null);
                                case 6:
                                    return o = [], Object.keys(t).forEach((function(n) {
                                        var e, i = n.split("t")[1];
                                        i && o.push({
                                            tokenAddress: r,
                                            timestamp: i,
                                            derivedBNB: (null === (e = t[n]) || void 0 === e ? void 0 : e.derivedBNB) ? parseFloat(t[n].derivedBNB) : 0
                                        })
                                    })), n.abrupt("return", W()(o, (function(n) {
                                        return parseInt(n.timestamp, 10)
                                    })));
                                case 9:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(r, e) {
                        return n.apply(this, arguments)
                    }
                }(),
                an = function(n) {
                    switch (n) {
                        case P.DAY:
                            return _.Tb;
                        case P.WEEK:
                            return 4 * _.Tb;
                        case P.MONTH:
                            return _.Bq;
                        case P.YEAR:
                            return 15 * _.Bq;
                        default:
                            return 4 * _.Tb
                    }
                },
                cn = function(n) {
                    switch (n) {
                        case P.DAY:
                            return 1;
                        case P.WEEK:
                            return 7;
                        case P.MONTH:
                            return 30;
                        case P.YEAR:
                            return 365;
                        default:
                            return 7
                    }
                };
            ! function() {
                var n = on(i().mark((function n(r, e, t) {
                    var o, u, a, c, l, s, f, d;
                    return i().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                for (o = an(t), u = (0, K.Z)(new Date), a = (0, K.Z)((0, J.Z)((0, G.Z)(1e3 * u, {
                                        days: cn(t)
                                    }))), c = [], l = a; l <= u;) c.push(l), l += o;
                                return n.prev = 6, n.next = 9, (0, Q.z)(c, "asc", 500);
                            case 9:
                                if ((s = n.sent) && 0 !== s.length) {
                                    n.next = 13;
                                    break
                                }
                                return console.error("Error fetching blocks for timestamps", c), n.abrupt("return", null);
                            case 13:
                                return n.next = 15, un(r, s);
                            case 15:
                                return f = n.sent, n.next = 18, un(e, s);
                            case 18:
                                return d = n.sent, n.abrupt("return", {
                                    token0DerivedBnb: f,
                                    token1DerivedBnb: d
                                });
                            case 22:
                                return n.prev = 22, n.t0 = n.catch(6), console.error("Failed to fetched derived price data for chart", n.t0), n.abrupt("return", null);
                            case 26:
                            case "end":
                                return n.stop()
                        }
                    }), n, null, [
                        [6, 22]
                    ])
                })))
            }();

            function ln(n, r) {
                (null == r || r > n.length) && (r = n.length);
                for (var e = 0, t = new Array(r); e < r; e++) t[e] = n[e];
                return t
            }

            function sn(n, r, e) {
                return r in n ? Object.defineProperty(n, r, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = e, n
            }

            function fn(n, r) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, r) {
                    var e = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != e) {
                        var t, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (e = e.call(n); !(u = (t = e.next()).done) && (o.push(t.value), !r || o.length !== r); u = !0);
                        } catch (c) {
                            a = !0, i = c
                        } finally {
                            try {
                                u || null == e.return || e.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(n, r) || dn(n, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function dn(n, r) {
                if (n) {
                    if ("string" === typeof n) return ln(n, r);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    return "Object" === e && n.constructor && (e = n.constructor.name), "Map" === e || "Set" === e ? Array.from(e) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ln(n, r) : void 0
                }
            }

            function pn() {
                return (0, a.v9)((function(n) {
                    return n.swap
                }))
            }

            function vn() {
                var n = (0, a.I0)(),
                    r = (0, u.useCallback)((function(r, e) {
                        var t, i;
                        n((0, m.j)({
                            field: r,
                            currencyId: (t = e, i = o.WU, (null != i && "undefined" !== typeof Symbol && i[Symbol.hasInstance] ? i[Symbol.hasInstance](t) : t instanceof i) ? e.address : e === o.c0 ? "BNB" : e)
                        }))
                    }), [n]);
                return {
                    onSwitchTokens: (0, u.useCallback)((function() {
                        n((0, m.KS)())
                    }), [n]),
                    onCurrencySelection: r,
                    onUserInput: (0, u.useCallback)((function(r, e) {
                        n((0, m.LC)({
                            field: r,
                            typedValue: e
                        }))
                    }), [n]),
                    onChangeRecipient: (0, u.useCallback)((function(r) {
                        n((0, m.He)({
                            recipient: r
                        }))
                    }), [n])
                }
            }
            var yn = ["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"];

            function mn(n, r) {
                return n.route.path.some((function(n) {
                    return n.address === r
                })) || n.route.pairs.some((function(n) {
                    return n.liquidityToken.address === r
                }))
            }

            function bn(n, r, e, t, i) {
                var o, u, a, s, h, g = (0, c.Z)().account,
                    x = (0, f.$G)().t,
                    j = null !== (o = null === i ? g : (0, d.UJ)(i) || null) && void 0 !== o ? o : null,
                    w = (0, y.K5)(null !== g && void 0 !== g ? g : void 0, [null !== e && void 0 !== e ? e : void 0, null !== t && void 0 !== t ? t : void 0]),
                    I = n === m.gN.INPUT,
                    O = (0, v.Z)(r, null !== (u = I ? e : t) && void 0 !== u ? u : void 0),
                    S = (0, l.AU)(I ? O : void 0, null !== t && void 0 !== t ? t : void 0),
                    P = (0, l.in)(null !== e && void 0 !== e ? e : void 0, I ? void 0 : O),
                    Z = I ? S : P,
                    A = (sn(a = {}, m.gN.INPUT, w[0]), sn(a, m.gN.OUTPUT, w[1]), a),
                    C = (sn(s = {}, m.gN.INPUT, null !== e && void 0 !== e ? e : void 0), sn(s, m.gN.OUTPUT, null !== t && void 0 !== t ? t : void 0), s);
                g || (h = x("Connect Wallet")), O || (h = null !== h && void 0 !== h ? h : x("Enter an amount")), C[m.gN.INPUT] && C[m.gN.OUTPUT] || (h = null !== h && void 0 !== h ? h : x("Select a token"));
                var L = (0, d.UJ)(j);
                j && L ? (-1 !== yn.indexOf(L) || S && mn(S, L) || P && mn(P, L)) && (h = null !== h && void 0 !== h ? h : x("Invalid recipient")) : h = null !== h && void 0 !== h ? h : x("Enter a recipient");
                var k = fn((0, b.$2)(), 1)[0],
                    D = Z && k && (0, p.b5)(Z, k),
                    T = [A[m.gN.INPUT], D ? D[m.gN.INPUT] : null],
                    N = T[0],
                    E = T[1];
                return N && E && N.lessThan(E) && (h = x("Insufficient %symbol% balance", {
                    symbol: E.currency.symbol
                })), {
                    currencies: C,
                    currencyBalances: A,
                    parsedAmount: O,
                    v2Trade: null !== Z && void 0 !== Z ? Z : void 0,
                    inputError: h
                }
            }

            function hn(n) {
                if ("string" === typeof n) {
                    var r = (0, d.UJ)(n);
                    if (r) return r;
                    if ("BNB" === n.toUpperCase()) return "BNB";
                    if (!1 === r) return "BNB"
                }
                return ""
            }

            function gn(n) {
                return "string" !== typeof n || Number.isNaN(parseFloat(n)) ? "" : n
            }

            function xn(n) {
                return "string" === typeof n && "output" === n.toLowerCase() ? m.gN.OUTPUT : m.gN.INPUT
            }
            var jn = /^0x[a-fA-F0-9]{40}$/;

            function wn(n) {
                var r = hn(n.inputCurrency) || V.VN,
                    e = hn(n.outputCurrency) || V.g$;
                r === e && ("string" === typeof n.outputCurrency ? r = "" : e = "");
                var t, i = function(n) {
                    return "string" !== typeof n ? null : (0, d.UJ)(n) || (jn.test(n) ? n : null)
                }(n.recipient);
                return sn(t = {}, m.gN.INPUT, {
                    currencyId: r
                }), sn(t, m.gN.OUTPUT, {
                    currencyId: e
                }), sn(t, m.gN.INPUT_SELL, {
                    currencyId: r
                }), sn(t, m.gN.OUTPUT_SELL, {
                    currencyId: e
                }), sn(t, "typedValue", gn(n.exactAmount)), sn(t, "typedValueSell", gn(n.exactAmount)), sn(t, "independentField", xn(n.exactField)), sn(t, "independentFieldSell", "".concat(xn(n.exactField), "_SELL")), sn(t, "recipient", i), sn(t, "pairDataById", {}), sn(t, "derivedPairDataById", {}), t
            }

            function In() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = n.inputAddress,
                    e = n.outputAddress,
                    t = (0, c.Z)().chainId,
                    i = (0, a.I0)(),
                    o = (0, s.useRouter)().query,
                    l = (0, u.useState)(),
                    f = l[0],
                    d = l[1];
                return (0, u.useEffect)((function() {
                    if (t) {
                        var n = wn(o);
                        i((0, m.mV)({
                            typedValue: n.typedValue,
                            field: n.independentField,
                            inputCurrencyId: r || n[m.gN.INPUT].currencyId,
                            outputCurrencyId: e || n[m.gN.OUTPUT].currencyId,
                            recipient: null
                        })), d({
                            inputCurrencyId: n[m.gN.INPUT].currencyId,
                            outputCurrencyId: n[m.gN.OUTPUT].currencyId
                        })
                    }
                }), [i, t, o, r, e]), f
            }
        },
        17059: function(n, r, e) {
            e.d(r, {
                h7: function() {
                    return a
                },
                kf: function() {
                    return c
                },
                mH: function() {
                    return l
                },
                wB: function() {
                    return s
                }
            });
            var t = e(67294),
                i = e(25617),
                o = e(20316),
                u = e(75398);

            function a() {
                var n = (0, o.Z)(),
                    r = n.chainId,
                    e = n.account,
                    a = (0, i.I0)();
                return (0, t.useCallback)((function(n) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = t.summary,
                        o = t.approval,
                        c = t.claim,
                        l = t.type,
                        s = t.order;
                    if (e && r) {
                        var f = n.hash;
                        if (!f) throw Error("No transaction hash found.");
                        a((0, u.dT)({
                            hash: f,
                            from: e,
                            chainId: r,
                            approval: o,
                            summary: i,
                            claim: c,
                            type: l,
                            order: s
                        }))
                    }
                }), [a, r, e])
            }

            function c() {
                var n, r = (0, o.Z)().chainId,
                    e = (0, i.v9)((function(n) {
                        return n.transactions
                    }));
                return (0, t.useMemo)((function() {
                    return r && null !== (n = e[r]) && void 0 !== n ? n : {}
                }), [r, e])
            }

            function l(n) {
                return (new Date).getTime() - n.addedTime < 864e5
            }

            function s(n, r) {
                var e = c();
                return (0, t.useMemo)((function() {
                    return "string" === typeof n && "string" === typeof r && Object.keys(e).some((function(t) {
                        var i = e[t];
                        if (!i) return !1;
                        if (i.receipt) return !1;
                        var o = i.approval;
                        return !!o && (o.spender === r && o.tokenAddress === n && l(i))
                    }))
                }), [e, r, n])
            }
        },
        29121: function(n, r, e) {
            e.d(r, {
                K5: function() {
                    return y
                },
                Z: function() {
                    return p
                },
                _h: function() {
                    return m
                },
                mM: function() {
                    return v
                },
                v2: function() {
                    return d
                }
            });
            var t = e(52689),
                i = e(67294),
                o = (e(77044), e(69241)),
                u = (e(49013), e(95565)),
                a = e(11156),
                c = e(75472),
                l = e.n(c),
                s = e(12737);

            function f(n, r) {
                return null != r && "undefined" !== typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r
            }

            function d(n, r) {
                var e, u = (0, i.useMemo)((function() {
                        return null !== (e = null === r || void 0 === r ? void 0 : r.filter((function(n) {
                            return !1 !== (0, a.UJ)(null === n || void 0 === n ? void 0 : n.address)
                        }))) && void 0 !== e ? e : []
                    }), [r]),
                    c = (0, i.useMemo)((function() {
                        return u.map((function(n) {
                            return n.address
                        }))
                    }), [u]),
                    l = (0, s._Y)(c, o.ZP, "balanceOf", (0, i.useMemo)((function() {
                        return [n]
                    }), [n])),
                    f = (0, i.useMemo)((function() {
                        return l.some((function(n) {
                            return n.loading
                        }))
                    }), [l]);
                return [(0, i.useMemo)((function() {
                    return n && u.length > 0 ? u.reduce((function(n, r, e) {
                        var i, o, u = null === l || void 0 === l || null === (i = l[e]) || void 0 === i || null === (o = i.result) || void 0 === o ? void 0 : o[0],
                            a = u ? t.QA.BigInt(u.toString()) : void 0;
                        return a && (n[r.address] = new t.dt(r, a)), n
                    }), {}) : {}
                }), [n, u, l]), f]
            }

            function p(n, r) {
                return d(n, r)[0]
            }

            function v(n, r) {
                var e = p(n, [r]);
                if (r) return e[r.address]
            }

            function y(n, r) {
                var e, o, c, d = (0, i.useMemo)((function() {
                        return null !== (e = null === r || void 0 === r ? void 0 : r.filter((function(n) {
                            return f(n, t.WU)
                        }))) && void 0 !== e ? e : []
                    }), [r]),
                    v = p(n, d),
                    y = function(n) {
                        var r = (0, u.gq)(),
                            e = (0, i.useMemo)((function() {
                                return n ? l()(n.map(a.UJ).filter((function(n) {
                                    return !1 !== n
                                }))) : []
                            }), [n]),
                            o = (0, s.es)(r, "getEthBalance", e.map((function(n) {
                                return [n]
                            })));
                        return (0, i.useMemo)((function() {
                            return e.reduce((function(n, r, e) {
                                var i, u, a = null === o || void 0 === o || null === (i = o[e]) || void 0 === i || null === (u = i.result) || void 0 === u ? void 0 : u[0];
                                return a && (n[r] = t.ih.ether(t.QA.BigInt(a.toString()))), n
                            }), {})
                        }), [e, o])
                    }((0, i.useMemo)((function() {
                        return null !== (o = null === r || void 0 === r ? void 0 : r.some((function(n) {
                            return n === t.c0
                        }))) && void 0 !== o && o
                    }), [r]) ? [n] : []);
                return (0, i.useMemo)((function() {
                    return null !== (c = null === r || void 0 === r ? void 0 : r.map((function(r) {
                        if (n && r) return f(r, t.WU) ? v[r.address] : r === t.c0 ? y[n] : void 0
                    }))) && void 0 !== c ? c : []
                }), [n, r, y, v])
            }

            function m(n, r) {
                return y(n, [r])[0]
            }
        },
        46151: function(n, r, e) {
            var t = e(61744),
                i = e(52689);
            r.Z = function(n, r) {
                var e, o;
                if (n && r) try {
                    var u = (0, t.vz)(n, r.decimals).toString();
                    if ("0" !== u) return e = r, (null != (o = i.WU) && "undefined" !== typeof Symbol && o[Symbol.hasInstance] ? o[Symbol.hasInstance](e) : e instanceof o) ? new i.dt(r, i.QA.BigInt(u)) : i.ih.ether(i.QA.BigInt(u))
                } catch (a) {
                    console.debug('Failed to parse input amount: "'.concat(n, '"'), a)
                }
            }
        },
        38796: function(n, r, e) {
            function t(n) {
                switch (n.split(":")[0].toLowerCase()) {
                    case "https":
                        return [n];
                    case "http":
                        return ["https".concat(n.substr(4)), n];
                    case "ipfs":
                        var r, e = null === (r = n.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === r ? void 0 : r[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(e, "/"), "https://ipfs.io/ipfs/".concat(e, "/")];
                    case "ipns":
                        var t, i = null === (t = n.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(i, "/"), "https://ipfs.io/ipns/".concat(i, "/")];
                    default:
                        return []
                }
            }
            e.d(r, {
                Z: function() {
                    return t
                }
            })
        }
    }
]);
//# sourceMappingURL=8753-3dc4985a07a72f17.js.map