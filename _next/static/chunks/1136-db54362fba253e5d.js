(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1136], {
        15746: function(n, e, t) {
            "use strict";
            var r = t(21584);
            e.Z = r.Z
        },
        71230: function(n, e, t) {
            "use strict";
            var r = t(14645);
            e.Z = r.Z
        },
        75708: function(n, e, t) {
            var r;
            "undefined" != typeof self && self, n.exports = (r = t(67294), function(n) {
                function e(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return n[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
                }
                var t = {};
                return e.m = n, e.c = t, e.d = function(n, t, r) {
                    e.o(n, t) || Object.defineProperty(n, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, e.n = function(n) {
                    var t = n && n.__esModule ? function() {
                        return n.default
                    } : function() {
                        return n
                    };
                    return e.d(t, "a", t), t
                }, e.o = function(n, e) {
                    return Object.prototype.hasOwnProperty.call(n, e)
                }, e.p = "", e(e.s = 0)
            }([function(n, e, t) {
                "use strict";

                function r() {
                    return r = Object.assign || function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                        }
                        return n
                    }, r.apply(this, arguments)
                }

                function o(n) {
                    return l(n) || c(n) || a(n) || i()
                }

                function i() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function a(n, e) {
                    if (n) {
                        if ("string" == typeof n) return s(n, e);
                        var t = Object.prototype.toString.call(n).slice(8, -1);
                        return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(n, e) : void 0
                    }
                }

                function c(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }

                function l(n) {
                    if (Array.isArray(n)) return s(n)
                }

                function s(n, e) {
                    (null == e || e > n.length) && (e = n.length);
                    for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                    return r
                }

                function u(n) {
                    return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                        return typeof n
                    } : function(n) {
                        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                    })(n)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var d = t(1),
                    f = t.n(d),
                    p = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect,
                    m = Object(d.forwardRef)((function(n, e) {
                        var t = Object(d.useRef)(),
                            i = Object(d.useRef)();
                        return p((function() {
                            function e() {
                                var e = n.highcharts || "object" === ("undefined" == typeof window ? "undefined" : u(window)) && window.Highcharts,
                                    r = n.constructorType || "chart";
                                e ? e[r] ? n.options ? i.current = e[r](t.current, n.options, n.callback ? n.callback : void 0) : console.warn('The "options" property was not passed.') : console.warn('The "constructorType" property is incorrect or some required module is not imported.') : console.warn('The "highcharts" property was not passed.')
                            }
                            if (i.current) {
                                if (!1 !== n.allowChartUpdate)
                                    if (!n.immutable && i.current) {
                                        var r;
                                        (r = i.current).update.apply(r, [n.options].concat(o(n.updateArgs || [!0, !0])))
                                    } else e()
                            } else e()
                        })), p((function() {
                            return function() {
                                i.current && (i.current.destroy(), i.current = null)
                            }
                        }), []), Object(d.useImperativeHandle)(e, (function() {
                            return {
                                get chart() {
                                    return i.current
                                },
                                container: t
                            }
                        }), []), f.a.createElement("div", r({}, n.containerProps, {
                            ref: t
                        }))
                    }));
                e.default = Object(d.memo)(m)
            }, function(n, e) {
                n.exports = r
            }]))
        },
        47708: function(n, e, t) {
            "use strict";
            var r = t(85893),
                o = (t(67294), t(78491));

            function i(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            e.Z = function(n) {
                return (0, r.jsx)(o.Z, function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(t);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })))), r.forEach((function(e) {
                            i(n, e, t[e])
                        }))
                    }
                    return n
                }({
                    viewBox: "0 0 24 24"
                }, n, {
                    children: (0, r.jsx)("path", {
                        d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"
                    })
                }))
            }
        },
        14667: function(n, e, t) {
            "use strict";
            var r = t(85893),
                o = (t(67294), t(78491));

            function i(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            e.Z = function(n) {
                return (0, r.jsx)(o.Z, function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(t);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })))), r.forEach((function(e) {
                            i(n, e, t[e])
                        }))
                    }
                    return n
                }({
                    viewBox: "0 0 24 24"
                }, n, {
                    children: (0, r.jsx)("path", {
                        d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"
                    })
                }))
            }
        },
        12667: function(n, e, t) {
            "use strict";
            var r = t(85893),
                o = t(77044),
                i = t(8507),
                a = t(27484),
                c = t.n(a),
                l = t(67294),
                s = t(11156),
                u = t(67383),
                d = t(9439),
                f = t(84110),
                p = t.n(f),
                m = t(25617),
                h = t(81313);

            function x(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            c().extend(p()), e.Z = function(n) {
                var e = n.columns,
                    t = void 0 === e ? null : e,
                    a = n.limit,
                    f = void 0 === a ? 1e3 : a,
                    p = (0, m.v9)((function(n) {
                        return n.balanceTransactions.txHistory
                    })).data,
                    g = (0, o.Ge)().account,
                    b = (0, m.v9)((function(n) {
                        return n.balances.balances
                    })),
                    y = (0, l.useMemo)((function() {
                        return b.data.reduce((function(n, e) {
                            return function(n) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = null != arguments[e] ? arguments[e] : {},
                                        r = Object.keys(t);
                                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                                    })))), r.forEach((function(e) {
                                        x(n, e, t[e])
                                    }))
                                }
                                return n
                            }({}, n, x({}, e.tokenSymbol, e))
                        }), {})
                    }), [b.data]);
                return (0, r.jsx)(i.Z, {
                    dataSource: p.slice(0, f).map((function(n, e) {
                        var t = (0, s.VQ)(n.from, n.to, g);
                        return {
                            key: e,
                            time: c().unix(n.timeStamp).fromNow(),
                            network: "BSC",
                            token: n.tokenSymbol,
                            amount: (0, s.fE)(n.value, n.tokenDecimal),
                            action: h.T$[t] || "",
                            TxID: (0, s.Xn)("+" === t || "++" === t ? n.from : n.to),
                            hash: n.hash
                        }
                    })),
                    columns: t || [{
                        title: "Time",
                        dataIndex: "time",
                        key: "time"
                    }, {
                        title: "Action",
                        dataIndex: "action",
                        key: "action",
                        align: "center"
                    }, {
                        title: "Network",
                        dataIndex: "network",
                        key: "network",
                        align: "center"
                    }, {
                        title: "Token",
                        dataIndex: "token",
                        key: "token",
                        render: function(n) {
                            var e;
                            return (0, r.jsxs)(u.kC, {
                                alignItems: "center",
                                children: [(0, r.jsx)("img", {
                                    src: (null === (e = y[n]) || void 0 === e ? void 0 : e.icon) || "/images/none_logo.png",
                                    width: "21",
                                    alt: ""
                                }), (0, r.jsx)(u.xu, {
                                    ml: "0.5rem",
                                    children: (0, r.jsx)(u.xv, {
                                        children: n || "SF"
                                    })
                                })]
                            })
                        }
                    }, {
                        title: "Amount",
                        dataIndex: "amount",
                        key: "amount",
                        align: "center"
                    }, {
                        title: "TxID",
                        dataIndex: "TxID",
                        key: "TxID",
                        align: "center",
                        render: function(n, e) {
                            return (0, r.jsxs)(u.kC, {
                                alignItems: "center",
                                children: [(0, r.jsx)(u.xu, {
                                    mr: "0.5rem",
                                    children: (0, r.jsx)(u.xv, {
                                        children: n
                                    })
                                }), (0, r.jsx)(u.rU, {
                                    href: "".concat(h.iH, "/tx/").concat(e.hash),
                                    children: (0, r.jsx)("img", {
                                        src: "/images/icons/external.png",
                                        width: "12",
                                        alt: ""
                                    })
                                })]
                            })
                        }
                    }, {
                        title: "Status",
                        dataIndex: "Status",
                        key: "Status",
                        render: function() {
                            return (0, r.jsx)(d.Z, {
                                background: "#D5F3E9",
                                borderRadius: "5px",
                                width: "95px",
                                children: (0, r.jsx)(u.xv, {
                                    color: "#44C99C",
                                    bold: !0,
                                    fontSize: "12px",
                                    children: "Completed"
                                })
                            })
                        }
                    }]
                })
            }
        },
        8507: function(n, e, t) {
            "use strict";
            var r = t(85893),
                o = (t(67294), t(13137));

            function i() {
                var n, e, t = (n = ["\n  .ant-table {\n    background: transparent;\n    color: #ffffff;\n    font-size: 16px;\n  }\n  .ant-table-thead > tr > th {\n    background: transparent;\n    color: #919eab;\n    font-size: 16px;\n    font-weight: 600;\n  }\n  .ant-table-tbody > tr.ant-table-row:hover > td,\n  .ant-table-tbody > tr > td.ant-table-cell-row-hover {\n    background: transparent;\n  }\n\n  .ant-table-tbody > tr > td {\n    border: none;\n  }\n\n  .ant-table-thead > tr > th {\n    border-bottom: 1px solid #34384c;\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return i = function() {
                    return t
                }, t
            }
            var a = t(186).ZP.div.withConfig({
                componentId: "sc-cc8f32d0-0"
            })(i());
            e.Z = function(n) {
                var e = n.columns,
                    t = n.dataSource;
                return (0, r.jsx)(a, {
                    children: (0, r.jsx)(o.Z, {
                        dataSource: t,
                        columns: e,
                        pagination: !1,
                        scroll: {
                            x: !0
                        }
                    })
                })
            }
        },
        62302: function(n, e, t) {
            "use strict";
            t.d(e, {
                i: function() {
                    return i
                }
            });
            var r = t(52689),
                o = t(81313);

            function i(n) {
                if (n) return n.currency === r.c0 ? r.QA.greaterThan(n.raw, o.Uz) ? r.ih.ether(r.QA.subtract(n.raw, o.Uz)) : r.ih.ether(r.QA.BigInt(0)) : n
            }
        },
        51136: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return yt
                }
            });
            var r = t(34051),
                o = t.n(r),
                i = t(85893),
                a = t(19532),
                c = t(67602),
                l = t(23526),
                s = t(71230),
                u = t(15746),
                d = t(12667),
                f = t(67294),
                p = t(78840),
                m = t.n(p),
                h = t(75708),
                x = t.n(h);

            function g(n, e) {
                if (null == n) return {};
                var t, r, o = function(n, e) {
                    if (null == n) return {};
                    var t, r, o = {},
                        i = Object.keys(n);
                    for (r = 0; r < i.length; r++) t = i[r], e.indexOf(t) >= 0 || (o[t] = n[t]);
                    return o
                }(n, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < i.length; r++) t = i[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (o[t] = n[t])
                }
                return o
            }
            var b = function(n) {
                    var e = n.height,
                        t = void 0 === e ? "200px" : e,
                        r = (n.range, n.data),
                        o = n.symbol,
                        a = void 0 === o ? "SF" : o,
                        c = (g(n, ["height", "range", "data", "symbol"]), {
                            chart: {
                                zoomType: "x",
                                backgroundColor: "transparent"
                            },
                            title: {
                                text: ""
                            },
                            xAxis: {
                                type: "datetime"
                            },
                            yAxis: {
                                title: {
                                    text: ""
                                },
                                gridLineWidth: 0
                            },
                            legend: {
                                enabled: !1
                            },
                            plotOptions: {
                                areaspline: {
                                    fillColor: {
                                        linearGradient: {
                                            x1: 0,
                                            y1: 0,
                                            x2: 0,
                                            y2: 1
                                        },
                                        stops: [
                                            [0, "rgba(64, 186, 255, 0.17)"],
                                            [1, "rgba(64, 186, 255, 0)"]
                                        ]
                                    },
                                    marker: {
                                        enabled: !1,
                                        radius: 7
                                    },
                                    lineWidth: 2,
                                    states: {
                                        hover: {
                                            enabled: !0
                                        }
                                    },
                                    threshold: null,
                                    lineColor: "#00E39A",
                                    color: "#00E39A"
                                }
                            },
                            series: [{
                                type: "areaspline",
                                name: "".concat(a, " to USD"),
                                data: r
                            }],
                            credits: {
                                enabled: !1
                            }
                        });
                    return (0, i.jsx)("div", {
                        children: (0, i.jsx)(x(), {
                            highcharts: m(),
                            options: c,
                            containerProps: {
                                style: {
                                    height: t
                                }
                            }
                        })
                    })
                },
                y = t(80685),
                v = t(11163),
                w = t(48579),
                j = t(186),
                T = t(68743),
                P = t(99822),
                C = t(11156),
                A = t(64357),
                k = t(49013),
                I = t(52689),
                Z = t(36402),
                O = t(47851),
                U = t(6744),
                S = t(47708),
                N = t(31289),
                E = t(77905),
                D = t(7867),
                M = t(62302),
                z = t(10608),
                B = t(52353),
                F = B.ZP.bondly,
                L = {
                    safemoon: B.ZP.safemoon,
                    bondly: F,
                    itam: B.ZP.itam,
                    ccar: B.ZP.ccar,
                    bttold: B.ZP.bttold
                },
                R = Object.values(L),
                _ = function(n) {
                    return R.some((function(e) {
                        return n.address === e.address
                    }))
                },
                G = t(97383),
                V = t(44523),
                W = t(45932),
                H = t(12436),
                $ = t(41149),
                K = t(76396),
                X = t(21730),
                Y = t(68487),
                q = t(2934),
                Q = t(20316),
                J = t(59808),
                nn = t(2349),
                en = t(81313),
                tn = t(17059);

            function rn(n) {
                return /^0x0*$/.test(n)
            }
            var on, an = t(17849);

            function cn(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : en.gv,
                    t = arguments.length > 2 ? arguments[2] : void 0,
                    r = (0, Q.Z)(),
                    o = r.account,
                    i = r.chainId,
                    a = r.library,
                    c = null === t ? o : t,
                    l = (0, an.Z)();
                return (0, f.useMemo)((function() {
                    if (!n || !c || !a || !o || !i || !l) return [];
                    var t = (0, C.iY)(i, a, o);
                    if (!t) return [];
                    var r = [];
                    return r.push(I.F0.swapCallParameters(n, {
                        feeOnTransfer: !1,
                        allowedSlippage: new I.gG(I.QA.BigInt(e), en.PM),
                        recipient: c,
                        deadline: l.toNumber()
                    })), n.tradeType === I.YL.EXACT_INPUT && r.push(I.F0.swapCallParameters(n, {
                        feeOnTransfer: !0,
                        allowedSlippage: new I.gG(I.QA.BigInt(e), en.PM),
                        recipient: c,
                        deadline: l.toNumber()
                    })), r.map((function(n) {
                        return {
                            parameters: n,
                            contract: t
                        }
                    }))
                }), [o, e, i, l, a, c, n])
            }

            function ln(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function sn(n, e, t, r, o, i, a) {
                try {
                    var c = n[i](a),
                        l = c.value
                } catch (s) {
                    return void t(s)
                }
                c.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function un(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = n.apply(e, t);

                        function a(n) {
                            sn(i, r, o, a, c, "next", n)
                        }

                        function c(n) {
                            sn(i, r, o, a, c, "throw", n)
                        }
                        a(void 0)
                    }))
                }
            }

            function dn(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function fn(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    })))), r.forEach((function(e) {
                        dn(n, e, t[e])
                    }))
                }
                return n
            }

            function pn(n) {
                return function(n) {
                    if (Array.isArray(n)) return ln(n)
                }(n) || function(n) {
                    if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return ln(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ln(n, e)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function mn(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : en.gv,
                    t = arguments.length > 2 ? arguments[2] : void 0,
                    r = (0, Q.Z)(),
                    i = r.account,
                    a = r.chainId,
                    c = r.library,
                    l = (0, J.Fh)(),
                    s = cn(n, e, t),
                    u = (0, D.$G)().t,
                    d = (0, tn.h7)(),
                    p = null === t ? i : t;
                return (0, f.useMemo)((function() {
                    return n && c && i && a ? p ? {
                        state: on.VALID,
                        callback: function() {
                            var e = un(o().mark((function e() {
                                var r, a, c, f, m, h, x, g, b, y, v;
                                return o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 3, Promise.all(s.map((function(n) {
                                                var e, t = n.parameters,
                                                    r = t.methodName,
                                                    o = t.args,
                                                    i = t.value,
                                                    a = n.contract,
                                                    c = !i || rn(i) ? {} : {
                                                        value: i
                                                    };
                                                return (e = a.estimateGas)[r].apply(e, pn(o).concat([c])).then((function(e) {
                                                    return {
                                                        call: n,
                                                        gasEstimate: e
                                                    }
                                                })).catch((function(e) {
                                                    var t;
                                                    return console.error("Gas estimate failed, trying eth_call to extract error", n), (t = a.callStatic)[r].apply(t, pn(o).concat([c])).then((function(t) {
                                                        return console.error("Unexpected successful call after failed estimate gas", n, e, t), {
                                                            call: n,
                                                            error: u("Unexpected issue with estimating the gas. Please try again.")
                                                        }
                                                    })).catch((function(e) {
                                                        return console.error("Call threw error", n, e), {
                                                            call: n,
                                                            error: hn(e, u)
                                                        }
                                                    }))
                                                }))
                                            })));
                                        case 3:
                                            if (a = e.sent, c = a.find((function(n, e, t) {
                                                    return "gasEstimate" in n && (e === t.length - 1 || "gasEstimate" in t[e + 1])
                                                }))) {
                                                e.next = 10;
                                                break
                                            }
                                            if (!((f = a.filter((function(n) {
                                                    return "error" in n
                                                }))).length > 0)) {
                                                e.next = 9;
                                                break
                                            }
                                            throw new Error(f[f.length - 1].error);
                                        case 9:
                                            throw new Error(u("Unexpected error. Could not estimate gas for the swap."));
                                        case 10:
                                            return m = c.call, h = m.contract, x = m.parameters, g = x.methodName, b = x.args, y = x.value, v = c.gasEstimate, e.abrupt("return", (r = h)[g].apply(r, pn(b).concat([fn({
                                                gasLimit: (0, C.yC)(v),
                                                gasPrice: l
                                            }, y && !rn(y) ? {
                                                value: y,
                                                from: i
                                            } : {
                                                from: i
                                            })])).then((function(e) {
                                                var r = n.inputAmount.currency.symbol,
                                                    o = n.outputAmount.currency.symbol,
                                                    a = n.inputAmount.toSignificant(3),
                                                    c = n.outputAmount.toSignificant(3),
                                                    l = "Swap ".concat(a, " ").concat(r, " for ").concat(c, " ").concat(o),
                                                    s = p === i ? l : "".concat(l, " to ").concat(t && (0, C.UJ)(t) ? (0, nn.Z)(t) : t);
                                                return d(e, {
                                                    summary: s
                                                }), e.hash
                                            })).catch((function(n) {
                                                throw 4001 === (null === n || void 0 === n ? void 0 : n.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", n, g, b, y), new Error(u("Swap failed: %message%", {
                                                    message: hn(n, u)
                                                })))
                                            })));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        error: null
                    } : null !== t ? {
                        state: on.INVALID,
                        callback: null,
                        error: "Invalid recipient"
                    } : {
                        state: on.LOADING,
                        callback: null,
                        error: null
                    } : {
                        state: on.INVALID,
                        callback: null,
                        error: "Missing dependencies"
                    }
                }), [n, c, i, a, p, t, s, l, u, d])
            }

            function hn(n, e) {
                for (var t; n;) {
                    var r, o, i, a, c, l;
                    t = null !== (c = null !== (a = null !== (i = n.reason) && void 0 !== i ? i : null === (r = n.data) || void 0 === r ? void 0 : r.message) && void 0 !== a ? a : n.message) && void 0 !== c ? c : t, n = null !== (l = n.error) && void 0 !== l ? l : null === (o = n.data) || void 0 === o ? void 0 : o.originalError
                }
                switch (0 === (null === t || void 0 === t ? void 0 : t.indexOf("execution reverted: ")) && (t = t.substring("execution reverted: ".length)), t) {
                    case "PancakeRouter: EXPIRED":
                        return e("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.");
                    case "PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":
                    case "PancakeRouter: EXCESSIVE_INPUT_AMOUNT":
                        return e("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");
                    case "TransferHelper: TRANSFER_FROM_FAILED":
                        return e("The input token cannot be transferred. There may be an issue with the input token.");
                    case "Pancake: TRANSFER_FAILED":
                        return e("The output token cannot be transferred. There may be an issue with the output token.");
                    default:
                        return -1 !== (null === t || void 0 === t ? void 0 : t.indexOf("undefined is not an object")) ? (console.error(n, t), e("An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.")) : e("Unknown error%reason%. Try increasing your slippage tolerance.", {
                            reason: t ? ': "'.concat(t, '"') : ""
                        })
                }
            }! function(n) {
                n[n.INVALID = 0] = "INVALID", n[n.LOADING = 1] = "LOADING", n[n.VALID = 2] = "VALID"
            }(on || (on = {}));
            var xn, gn = t(46151),
                bn = t(29121),
                yn = t(95565),
                vn = t(20973);

            function wn(n, e, t, r, o, i, a) {
                try {
                    var c = n[i](a),
                        l = c.value
                } catch (s) {
                    return void t(s)
                }
                c.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function jn(n) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(r, o) {
                        var i = n.apply(e, t);

                        function a(n) {
                            wn(i, r, o, a, c, "next", n)
                        }

                        function c(n) {
                            wn(i, r, o, a, c, "throw", n)
                        }
                        a(void 0)
                    }))
                }
            }! function(n) {
                n[n.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", n[n.WRAP = 1] = "WRAP", n[n.UNWRAP = 2] = "UNWRAP"
            }(xn || (xn = {}));
            var Tn = {
                wrapType: xn.NOT_APPLICABLE
            };

            function Pn(n, e, t) {
                var r = (0, D.$G)().t,
                    i = (0, Q.Z)(),
                    a = i.chainId,
                    c = i.account,
                    l = (0, vn.d)().callWithGasPrice,
                    s = (0, yn.J8)(),
                    u = (0, bn._h)(null !== c && void 0 !== c ? c : void 0, n),
                    d = (0, f.useMemo)((function() {
                        return (0, gn.Z)(t, n)
                    }), [n, t]),
                    p = (0, tn.h7)();
                return (0, f.useMemo)((function() {
                    if (!s || !a || !n || !e) return Tn;
                    var t = d && u && !u.lessThan(d);
                    return n === I.c0 && (0, I.KA)(I.DX[a], e) ? {
                        wrapType: xn.WRAP,
                        execute: t && d ? jn(o().mark((function n() {
                            var e;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, l(s, "deposit", void 0, {
                                            value: "0x".concat(d.raw.toString(16))
                                        });
                                    case 3:
                                        e = n.sent, p(e, {
                                            summary: "Wrap ".concat(d.toSignificant(6), " BNB to WBNB")
                                        }), n.next = 10;
                                        break;
                                    case 7:
                                        n.prev = 7, n.t0 = n.catch(0), console.error("Could not deposit", n.t0);
                                    case 10:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: t ? void 0 : r("Insufficient BNB balance")
                    } : (0, I.KA)(I.DX[a], n) && e === I.c0 ? {
                        wrapType: xn.UNWRAP,
                        execute: t && d ? jn(o().mark((function n() {
                            var e;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, l(s, "withdraw", ["0x".concat(d.raw.toString(16))]);
                                    case 3:
                                        e = n.sent, p(e, {
                                            summary: "Unwrap ".concat(d.toSignificant(6), " WBNB to BNB")
                                        }), n.next = 10;
                                        break;
                                    case 7:
                                        n.prev = 7, n.t0 = n.catch(0), console.error("Could not withdraw", n.t0);
                                    case 10:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: t ? void 0 : r("Insufficient WBNB balance")
                    } : Tn
                }), [s, a, n, e, r, d, u, p, l])
            }
            var Cn = t(52394),
                An = t(25617),
                kn = t(96939);

            function In(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Zn() {
                var n = In(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]);
                return Zn = function() {
                    return n
                }, n
            }

            function On() {
                var n = In(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"]);
                return On = function() {
                    return n
                }, n
            }

            function Un() {
                var n = In(["\n  flex: 1;\n  padding: 1rem;\n"]);
                return Un = function() {
                    return n
                }, n
            }

            function Sn() {
                var n = In(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
                return Sn = function() {
                    return n
                }, n
            }
            var Nn = j.ZP.div.withConfig({
                    componentId: "sc-3ae8a5e6-0"
                })(Zn(), (function(n) {
                    return n.theme.colors.backgroundAlt
                })),
                En = j.ZP.div.withConfig({
                    componentId: "sc-3ae8a5e6-1"
                })(On(), (function(n) {
                    var e = n.error,
                        t = n.theme;
                    return e ? t.colors.failure : t.colors.background
                }), (function(n) {
                    return n.error ? "step-end" : "step-start"
                }), (function(n) {
                    return n.error ? "step-end" : "step-start"
                }), (function(n) {
                    return n.theme.colors.backgroundAlt
                })),
                Dn = j.ZP.div.withConfig({
                    componentId: "sc-3ae8a5e6-2"
                })(Un()),
                Mn = j.ZP.input.withConfig({
                    componentId: "sc-3ae8a5e6-3"
                })(Sn(), (function(n) {
                    return n.theme.colors.backgroundAlt
                }), (function(n) {
                    return n.error ? "step-end" : "step-start"
                }), (function(n) {
                    var e = n.error,
                        t = n.theme;
                    return e ? t.colors.failure : t.colors.primary
                }), (function(n) {
                    return n.theme.colors.textDisabled
                }), (function(n) {
                    return n.theme.colors.textDisabled
                }));

            function zn(n) {
                var e = n.id,
                    t = n.value,
                    r = n.onChange,
                    o = (0, Q.Z)().chainId,
                    a = (0, D.$G)().t,
                    l = (0, C.UJ)(t) ? t : void 0,
                    s = (0, f.useCallback)((function(n) {
                        var e = n.target.value.replace(/\s+/g, "");
                        r(e)
                    }), [r]),
                    u = Boolean(t.length > 0 && !l);
                return (0, i.jsx)(Nn, {
                    id: e,
                    children: (0, i.jsx)(En, {
                        error: u,
                        children: (0, i.jsx)(Dn, {
                            children: (0, i.jsxs)(W.Tz, {
                                gap: "md",
                                children: [(0, i.jsxs)($.m0, {
                                    children: [(0, i.jsx)(c.Z, {
                                        children: a("Recipient")
                                    }), l && o && (0, i.jsxs)(kn.Z, {
                                        external: !0,
                                        small: !0,
                                        href: (0, C.s6)(l, "address", o),
                                        children: ["(", a("View on BscScan"), ")"]
                                    })]
                                }), (0, i.jsx)(Mn, {
                                    className: "recipient-address-input",
                                    type: "text",
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    autoCapitalize: "off",
                                    spellCheck: "false",
                                    placeholder: a("Wallet Address"),
                                    error: u,
                                    pattern: "^(0x[a-fA-F0-9]{40})$",
                                    onChange: s,
                                    value: t
                                })]
                            })
                        })
                    })
                })
            }
            var Bn = t(23599),
                Fn = t(14667),
                Ln = t(4717),
                Rn = t(49766);

            function _n(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Gn() {
                var n = _n(["\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem;\n"]);
                return Gn = function() {
                    return n
                }, n
            }

            function Vn() {
                var n = _n(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]);
                return Vn = function() {
                    return n
                }, n
            }

            function Wn() {
                var n = _n(["\n  padding: 2px;\n\n  ", "\n"]);
                return Wn = function() {
                    return n
                }, n
            }

            function Hn() {
                var n = _n(["\n  color: ", ";\n"]);
                return Hn = function() {
                    return n
                }, n
            }

            function $n() {
                var n = _n(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"]);
                return $n = function() {
                    return n
                }, n
            }

            function Kn() {
                var n = _n(["\n  width: 220px;\n"]);
                return Kn = function() {
                    return n
                }, n
            }

            function Xn() {
                var n = _n(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"]);
                return Xn = function() {
                    return n
                }, n
            }

            function Yn() {
                var n = _n(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]);
                return Yn = function() {
                    return n
                }, n
            }

            function qn() {
                var n = _n(["\n  background-color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]);
                return qn = function() {
                    return n
                }, n
            }
            var Qn = (0, j.ZP)(a.Z).withConfig({
                    componentId: "sc-4d6dcedb-0"
                })(Gn()),
                Jn = j.ZP.div.withConfig({
                    componentId: "sc-4d6dcedb-1"
                })(Wn(), (function(n) {
                    return n.clickable ? (0, j.iv)(Vn()) : null
                })),
                ne = (0, j.ZP)(c.Z).withConfig({
                    componentId: "sc-4d6dcedb-2"
                })(Hn(), (function(n) {
                    var e = n.theme,
                        t = n.severity;
                    return 3 === t || 4 === t ? e.colors.failure : 2 === t ? e.colors.warning : 1 === t ? e.colors.text : e.colors.success
                })),
                ee = j.ZP.button.withConfig({
                    componentId: "sc-4d6dcedb-3"
                })($n(), (function(n) {
                    return n.theme.colors.background
                }), (function(n) {
                    return n.theme.colors.text
                }), (function(n) {
                    return n.theme.colors.dropdown
                }), (function(n) {
                    return n.theme.colors.dropdown
                })),
                te = (0, j.ZP)(c.Z).attrs({
                    ellipsis: !0
                }).withConfig({
                    componentId: "sc-4d6dcedb-4"
                })(Kn()),
                re = j.ZP.div.withConfig({
                    componentId: "sc-4d6dcedb-5"
                })(Xn(), (function(n) {
                    var e = n.theme;
                    return "".concat(e.colors.failure, "33")
                }), (function(n) {
                    return n.theme.colors.failure
                })),
                oe = j.ZP.div.withConfig({
                    componentId: "sc-4d6dcedb-6"
                })(Yn(), (function(n) {
                    var e = n.theme;
                    return "".concat(e.colors.failure, "33")
                }));

            function ie(n) {
                var e = n.error;
                return (0, i.jsxs)(re, {
                    children: [(0, i.jsx)(oe, {
                        children: (0, i.jsx)(Rn.Z, {
                            width: "24px"
                        })
                    }), (0, i.jsx)("p", {
                        children: e
                    })]
                })
            }
            var ae = (0, j.ZP)(W.Tz).withConfig({
                componentId: "sc-4d6dcedb-7"
            })(qn(), (function(n) {
                var e = n.theme;
                return "".concat(e.colors.warning, "33")
            }));

            function ce(n) {
                var e = n.priceImpact;
                return (0, i.jsx)(ne, {
                    fontSize: "14px",
                    severity: (0, z.oX)(e),
                    children: e ? e.lessThan(en.IS) ? "<0.01%" : "".concat(e.toFixed(2), "%") : "-"
                })
            }

            function le() {
                var n, e, t = (n = ["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  /* border: 1px solid ", "; */\n  background-color: ", ";\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return le = function() {
                    return t
                }, t
            }
            var se = (0, j.ZP)(W.Tz).withConfig({
                componentId: "sc-d3a89f09-0"
            })(le(), (function(n) {
                return n.theme.radii.default
            }), (function(n) {
                return n.theme.colors.cardBorder
            }), (function(n) {
                return n.theme.colors.background
            }));

            function ue(n) {
                var e, t, r, o, a = n.trade,
                    l = n.onConfirm,
                    s = n.allowedSlippage,
                    u = n.swapErrorMessage,
                    d = n.disabledConfirm,
                    p = n.title,
                    m = (0, D.$G)().t,
                    h = (0, f.useState)(!1),
                    x = h[0],
                    g = h[1],
                    b = (0, f.useMemo)((function() {
                        return (0, z.b5)(a, s)
                    }), [s, a]),
                    y = (0, f.useMemo)((function() {
                        return (0, z.U7)(a)
                    }), [a]),
                    v = y.priceImpactWithoutFee,
                    w = y.realizedLPFee,
                    j = (0, z.oX)(v);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(se, {
                        children: [(0, i.jsxs)($.m0, {
                            align: "center",
                            children: [(0, i.jsx)(c.Z, {
                                fontSize: "14px",
                                children: m("Price")
                            }), (0, i.jsxs)(c.Z, {
                                fontSize: "14px",
                                style: {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    textAlign: "right",
                                    paddingLeft: "10px"
                                },
                                children: [(0, z.Kh)(a, x), (0, i.jsx)(ee, {
                                    onClick: function() {
                                        return g(!x)
                                    },
                                    children: (0, i.jsx)(Fn.Z, {
                                        width: "14px"
                                    })
                                })]
                            })]
                        }), (0, i.jsxs)($.m0, {
                            children: [(0, i.jsxs)($.DA, {
                                children: [(0, i.jsx)(c.Z, {
                                    fontSize: "14px",
                                    children: a.tradeType === I.YL.EXACT_INPUT ? m("Minimum received") : m("Maximum sold")
                                }), (0, i.jsx)(Ln.Z, {
                                    text: m("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."),
                                    ml: "4px"
                                })]
                            }), (0, i.jsxs)($.DA, {
                                children: [(0, i.jsx)(c.Z, {
                                    fontSize: "14px",
                                    children: a.tradeType === I.YL.EXACT_INPUT ? null !== (r = null === (e = b[Cn.gN.OUTPUT]) || void 0 === e ? void 0 : e.toSignificant(4)) && void 0 !== r ? r : "-" : null !== (o = null === (t = b[Cn.gN.INPUT]) || void 0 === t ? void 0 : t.toSignificant(4)) && void 0 !== o ? o : "-"
                                }), (0, i.jsx)(c.Z, {
                                    fontSize: "14px",
                                    marginLeft: "4px",
                                    children: a.tradeType === I.YL.EXACT_INPUT ? a.outputAmount.currency.symbol : a.inputAmount.currency.symbol
                                })]
                            })]
                        }), (0, i.jsxs)($.m0, {
                            children: [(0, i.jsxs)($.DA, {
                                children: [(0, i.jsx)(c.Z, {
                                    fontSize: "14px",
                                    children: m("Price Impact")
                                }), (0, i.jsx)(Ln.Z, {
                                    text: m("The difference between the market price and your price due to trade size."),
                                    ml: "4px"
                                })]
                            }), (0, i.jsx)(ce, {
                                priceImpact: v
                            })]
                        }), (0, i.jsxs)($.m0, {
                            children: [(0, i.jsxs)($.DA, {
                                children: [(0, i.jsx)(c.Z, {
                                    fontSize: "14px",
                                    children: m("Liquidity Provider Fee")
                                }), (0, i.jsx)(Ln.Z, {
                                    text: (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(c.Z, {
                                            mb: "12px",
                                            children: m("For each trade a %amount% fee is paid", {
                                                amount: "0.25%"
                                            })
                                        }), (0, i.jsxs)(c.Z, {
                                            children: ["- ", m("%amount% to LP token holders", {
                                                amount: "0.17%"
                                            })]
                                        }), (0, i.jsxs)(c.Z, {
                                            children: ["- ", m("%amount% to the Treasury", {
                                                amount: "0.03%"
                                            })]
                                        }), (0, i.jsxs)(c.Z, {
                                            children: ["- ", m("%amount% towards CAKE buyback and burn", {
                                                amount: "0.05%"
                                            })]
                                        })]
                                    }),
                                    ml: "4px"
                                })]
                            }), (0, i.jsx)(c.Z, {
                                fontSize: "14px",
                                children: w ? "".concat(null === w || void 0 === w ? void 0 : w.toSignificant(6), " ").concat(a.inputAmount.currency.symbol) : "-"
                            })]
                        })]
                    }), (0, i.jsxs)($.BA, {
                        children: [(0, i.jsx)(N.Z, {
                            variant: j > 2 ? "danger" : "primary",
                            onClick: l,
                            disabled: d,
                            mt: "12px",
                            id: "confirm-swap-or-send",
                            width: "100%",
                            background: "Buy" === p ? "#00E39A" : "#E74A5D",
                            children: m(j > 2 ? "".concat(p, " Anyway") : "Confirm ".concat(p))
                        }), u ? (0, i.jsx)(ie, {
                            error: u
                        }) : null]
                    })]
                })
            }
            var de = t(93861);

            function fe(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function pe(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(n); !(a = (r = t.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                        } catch (l) {
                            c = !0, o = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return fe(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return fe(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function me(n) {
                var e, t, r = n.trade,
                    o = n.allowedSlippage,
                    a = n.recipient,
                    l = n.showAcceptChanges,
                    s = n.onAcceptChanges,
                    u = (0, D.$G)().t,
                    d = (0, f.useMemo)((function() {
                        return (0, z.b5)(r, o)
                    }), [r, o]),
                    p = (0, f.useMemo)((function() {
                        return (0, z.U7)(r)
                    }), [r]).priceImpactWithoutFee,
                    m = (0, z.oX)(p),
                    h = r.tradeType === I.YL.EXACT_INPUT ? null === (e = d[Cn.gN.OUTPUT]) || void 0 === e ? void 0 : e.toSignificant(6) : null === (t = d[Cn.gN.INPUT]) || void 0 === t ? void 0 : t.toSignificant(6),
                    x = r.tradeType === I.YL.EXACT_INPUT ? r.outputAmount.currency.symbol : r.inputAmount.currency.symbol,
                    g = pe((r.tradeType === I.YL.EXACT_INPUT ? u("Output is estimated. You will receive at least %amount% %symbol% or the transaction will revert.", {
                        amount: h,
                        symbol: x
                    }) : u("Input is estimated. You will sell at most %amount% %symbol% or the transaction will revert.", {
                        amount: h,
                        symbol: x
                    })).split("".concat(h, " ").concat(x)), 2),
                    b = g[0],
                    y = g[1],
                    v = a ? (0, nn.Z)(a) : "",
                    w = pe(u("Output will be sent to %recipient%", {
                        recipient: v
                    }).split(v), 2),
                    j = w[0],
                    T = w[1];
                return (0, i.jsxs)(W.Tz, {
                    gap: "md",
                    children: [(0, i.jsxs)($.m0, {
                        align: "flex-end",
                        children: [(0, i.jsxs)($.DA, {
                            gap: "0px",
                            children: [(0, i.jsx)(de.Xw, {
                                currency: r.inputAmount.currency,
                                size: "24px",
                                style: {
                                    marginRight: "12px"
                                }
                            }), (0, i.jsx)(te, {
                                fontSize: "24px",
                                color: l && r.tradeType === I.YL.EXACT_OUTPUT ? "primary" : "text",
                                children: r.inputAmount.toSignificant(6)
                            })]
                        }), (0, i.jsx)($.DA, {
                            gap: "0px",
                            children: (0, i.jsx)(c.Z, {
                                fontSize: "24px",
                                ml: "10px",
                                children: r.inputAmount.currency.symbol
                            })
                        })]
                    }), (0, i.jsx)($.DA, {
                        children: (0, i.jsx)(S.Z, {
                            width: "16px",
                            ml: "4px"
                        })
                    }), (0, i.jsxs)($.m0, {
                        align: "flex-end",
                        children: [(0, i.jsxs)($.DA, {
                            gap: "0px",
                            children: [(0, i.jsx)(de.Xw, {
                                currency: r.outputAmount.currency,
                                size: "24px",
                                style: {
                                    marginRight: "12px"
                                }
                            }), (0, i.jsx)(te, {
                                fontSize: "24px",
                                color: m > 2 ? "failure" : l && r.tradeType === I.YL.EXACT_INPUT ? "primary" : "text",
                                children: r.outputAmount.toSignificant(6)
                            })]
                        }), (0, i.jsx)($.DA, {
                            gap: "0px",
                            children: (0, i.jsx)(c.Z, {
                                fontSize: "24px",
                                ml: "10px",
                                children: r.outputAmount.currency.symbol
                            })
                        })]
                    }), l ? (0, i.jsx)(ae, {
                        justify: "flex-start",
                        gap: "0px",
                        children: (0, i.jsxs)($.m0, {
                            children: [(0, i.jsxs)($.DA, {
                                children: [(0, i.jsx)(Rn.Z, {
                                    mr: "8px"
                                }), (0, i.jsxs)(c.Z, {
                                    bold: !0,
                                    children: [" ", u("Price Updated")]
                                })]
                            }), (0, i.jsx)(N.Z, {
                                onClick: s,
                                children: u("Accept")
                            })]
                        })
                    }) : null, (0, i.jsx)(W.Tz, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "24px 0 0 0px"
                        },
                        children: (0, i.jsxs)(c.Z, {
                            small: !0,
                            color: "textSubtle",
                            textAlign: "left",
                            style: {
                                width: "100%"
                            },
                            children: [b, (0, i.jsxs)("b", {
                                children: [h, " ", x]
                            }), y]
                        })
                    }), null !== a ? (0, i.jsx)(W.Tz, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "12px 0 0 0px"
                        },
                        children: (0, i.jsxs)(c.Z, {
                            color: "textSubtle",
                            children: [j, (0, i.jsx)("b", {
                                title: a,
                                children: v
                            }), T]
                        })
                    }) : null]
                })
            }
            var he = function(n) {
                var e, t, r, o, a, c, l, s, u, d, p = n.trade,
                    m = n.originalTrade,
                    h = n.onAcceptChanges,
                    x = n.allowedSlippage,
                    g = n.onConfirm,
                    b = n.onDismiss,
                    y = n.customOnDismiss,
                    v = n.recipient,
                    w = n.swapErrorMessage,
                    j = n.attemptingTxn,
                    T = n.txHash,
                    P = n.title,
                    C = void 0 === P ? "Swap" : P,
                    A = (0, f.useMemo)((function() {
                        return Boolean(p && m && (e = m, (n = p).tradeType !== e.tradeType || !(0, I.KA)(n.inputAmount.currency, e.inputAmount.currency) || !n.inputAmount.equalTo(e.inputAmount) || !(0, I.KA)(n.outputAmount.currency, e.outputAmount.currency) || !n.outputAmount.equalTo(e.outputAmount)));
                        var n, e
                    }), [m, p]),
                    k = (0, D.$G)().t,
                    Z = (0, f.useCallback)((function() {
                        return p ? (0, i.jsx)(me, {
                            trade: p,
                            allowedSlippage: x,
                            recipient: v,
                            showAcceptChanges: A,
                            onAcceptChanges: h
                        }) : null
                    }), [x, h, v, A, p]),
                    O = (0, f.useCallback)((function() {
                        return p ? (0, i.jsx)(ue, {
                            onConfirm: g,
                            trade: p,
                            disabledConfirm: A,
                            swapErrorMessage: w,
                            allowedSlippage: x,
                            title: C
                        }) : null
                    }), [x, g, A, w, C, p]),
                    U = k("Swapping %amountA% %symbolA% for %amountB% %symbolB%", {
                        amountA: null !== (l = null === p || void 0 === p || null === (e = p.inputAmount) || void 0 === e ? void 0 : e.toSignificant(6)) && void 0 !== l ? l : "",
                        symbolA: null !== (s = null === p || void 0 === p || null === (t = p.inputAmount) || void 0 === t || null === (r = t.currency) || void 0 === r ? void 0 : r.symbol) && void 0 !== s ? s : "",
                        amountB: null !== (u = null === p || void 0 === p || null === (o = p.outputAmount) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== u ? u : "",
                        symbolB: null !== (d = null === p || void 0 === p || null === (a = p.outputAmount) || void 0 === a || null === (c = a.currency) || void 0 === c ? void 0 : c.symbol) && void 0 !== d ? d : ""
                    }),
                    S = (0, f.useCallback)((function() {
                        return w ? (0, i.jsx)(Bn.ht, {
                            onDismiss: b,
                            message: w
                        }) : (0, i.jsx)(Bn.pM, {
                            topContent: Z,
                            bottomContent: O
                        })
                    }), [b, O, Z, w]);
                return (0, i.jsx)(Bn.ZP, {
                    title: k("Confirm ".concat(C)),
                    onDismiss: b,
                    customOnDismiss: y,
                    attemptingTxn: j,
                    hash: T,
                    content: S,
                    pendingText: U,
                    currencyToAdd: null === p || void 0 === p ? void 0 : p.outputAmount.currency
                })
            };

            function xe(n, e) {
                if (!n.lessThan(en.EV)) {
                    var t = "confirm";
                    return window.prompt(e('This swap has a price impact of at least %amount%%. Please type the word "%word%" to continue with this swap.', {
                        amount: en.EV.toFixed(0),
                        word: t
                    })) === t
                }
                return !!n.lessThan(en.Uf) || window.confirm(e("This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.", {
                    amount: en.Uf.toFixed(0)
                }))
            }
            var ge = t(17796),
                be = t(20388),
                ye = function(n) {
                    var e = n.tokens,
                        t = n.onDismiss,
                        r = n.onCancel,
                        o = (0, D.$G)().t;
                    return (0, i.jsx)(ge.Z, {
                        title: o("Import Token"),
                        onDismiss: function() {
                            null === t || void 0 === t || t(), r()
                        },
                        style: {
                            maxWidth: "420px"
                        },
                        children: (0, i.jsx)(be.Z, {
                            tokens: e,
                            handleCurrencySelect: t
                        })
                    })
                };

            function ve(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function we(n, e) {
                if (null == n) return {};
                var t, r, o = function(n, e) {
                    if (null == n) return {};
                    var t, r, o = {},
                        i = Object.keys(n);
                    for (r = 0; r < i.length; r++) t = i[r], e.indexOf(t) >= 0 || (o[t] = n[t]);
                    return o
                }(n, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < i.length; r++) t = i[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (o[t] = n[t])
                }
                return o
            }

            function je(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function Te() {
                var n = je(["\n  width: 50%;\n"]);
                return Te = function() {
                    return n
                }, n
            }

            function Pe() {
                var n = je(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"]);
                return Pe = function() {
                    return n
                }, n
            }

            function Ce() {
                var n = je(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]);
                return Ce = function() {
                    return n
                }, n
            }

            function Ae() {
                var n = je(["\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(\n    90deg,\n    ", "\n      0%,\n    ", "\n      80%\n  );\n  opacity: 0.6;\n"]);
                return Ae = function() {
                    return n
                }, n
            }
            var ke = (0, j.ZP)($.m0).withConfig({
                    componentId: "sc-b6a41b3e-0"
                })(Te()),
                Ie = j.ZP.div.withConfig({
                    componentId: "sc-b6a41b3e-1"
                })(Pe(), (function(n) {
                    var e = n.theme,
                        t = n.confirmed;
                    return n.disabled ? e.colors.backgroundDisabled : t ? e.colors.success : e.colors.primary
                })),
                Ze = j.ZP.div.withConfig({
                    componentId: "sc-b6a41b3e-2"
                })(Ce()),
                Oe = j.ZP.div.withConfig({
                    componentId: "sc-b6a41b3e-3"
                })(Ae(), (function(n) {
                    var e = n.theme,
                        t = n.prevConfirmed;
                    return n.disabled ? e.colors.backgroundDisabled : t ? e.colors.success : e.colors.primary
                }), (function(n) {
                    var e = n.theme,
                        t = n.prevConfirmed;
                    return n.disabled ? e.colors.backgroundDisabled : t ? e.colors.primary : e.colors.backgroundDisabled
                }));

            function Ue(n) {
                var e = n.steps,
                    t = n.disabled,
                    r = void 0 !== t && t,
                    o = we(n, ["steps", "disabled"]);
                return (0, i.jsx)(W.Tz, function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            r = Object.keys(t);
                        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })))), r.forEach((function(e) {
                            ve(n, e, t[e])
                        }))
                    }
                    return n
                }({
                    justify: "center"
                }, o, {
                    children: (0, i.jsxs)(ke, {
                        children: [e.map((function(n, t) {
                            return (0, i.jsxs)(Ze, {
                                children: [(0, i.jsx)(Ie, {
                                    confirmed: n,
                                    disabled: r || !e[t - 1] && 0 !== t,
                                    children: n ? "\u2713" : t + 1
                                }), (0, i.jsx)(Oe, {
                                    prevConfirmed: n,
                                    disabled: r
                                })]
                            }, t)
                        })), (0, i.jsx)(Ie, {
                            disabled: r || !e[e.length - 1],
                            children: e.length + 1
                        })]
                    })
                }))
            }
            var Se = t(39985),
                Ne = t(47711),
                Ee = t(42755),
                De = t(31254),
                Me = function() {
                    var n = (0, D.$G)().t;
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(c.Z, {
                            children: [n("SAFEMOON has been migrated to"), " ", (0, i.jsx)(kn.Z, {
                                style: {
                                    display: "inline"
                                },
                                external: !0,
                                href: "https://bscscan.com/address/0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
                                children: n("a new contract address.")
                            }), " ", n("Trading on the old address may result in the complete loss of your assets. For more information please refer to"), " ", (0, i.jsxs)(kn.Z, {
                                style: {
                                    display: "inline"
                                },
                                external: !0,
                                href: "https://twitter.com/safemoon/status/1477770592031887360",
                                children: [n("Safemoon's announcement"), "."]
                            })]
                        })
                    })
                },
                ze = function() {
                    var n = (0, D.$G)().t;
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(c.Z, {
                            children: [n("ITAM has been rebranded as ITAM CUBE."), " ", (0, i.jsx)(kn.Z, {
                                style: {
                                    display: "inline"
                                },
                                external: !0,
                                href: "https://itam.network/swap",
                                children: n("Please proceed to ITAM bridge to conduct a one-way swap of your ITAM tokens.")
                            }), " ", n("All transfers of the old ITAM token will be disabled after the swap.")]
                        })
                    })
                },
                Be = function() {
                    var n = (0, D.$G)().t;
                    return (0, i.jsx)(c.Z, {
                        children: n("Warning: BONDLY has been compromised. Please remove liquidity until further notice.")
                    })
                },
                Fe = t(20506),
                Le = function(n) {
                    var e = n.handleContinueClick,
                        t = (0, D.$G)().t,
                        r = (0, f.useState)(!1),
                        o = r[0],
                        l = r[1];
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(a.Z, {
                            justifyContent: "space-between",
                            children: [(0, i.jsxs)(a.Z, {
                                alignItems: "center",
                                children: [(0, i.jsx)(Fe.Z, {
                                    name: "confirmed",
                                    type: "checkbox",
                                    checked: o,
                                    onChange: function() {
                                        return l(!o)
                                    },
                                    scale: "sm"
                                }), (0, i.jsx)(c.Z, {
                                    ml: "10px",
                                    style: {
                                        userSelect: "none"
                                    },
                                    children: t("I understand")
                                })]
                            }), (0, i.jsx)(N.Z, {
                                disabled: !o,
                                onClick: e,
                                children: t("Continue")
                            })]
                        })
                    })
                },
                Re = function() {
                    var n = (0, D.$G)().t;
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(c.Z, {
                            children: [n("Crypto Cars (CCAR) has been migrated to"), " ", (0, i.jsx)(kn.Z, {
                                style: {
                                    display: "inline"
                                },
                                external: !0,
                                href: "https://bscscan.com/token/0x322e5015Cc464Ada7f99dE7131CE494dE1834396",
                                children: n("a new contract address.")
                            }), " ", n("Trading on the old address may result in the complete loss of your assets. For more information please refer to"), " ", (0, i.jsx)(kn.Z, {
                                style: {
                                    display: "inline"
                                },
                                external: !0,
                                href: "https://t.me/Crypto_Cars_Official/465037",
                                children: n("the announcement.")
                            })]
                        })
                    })
                },
                _e = t(88788),
                Ge = function() {
                    var n = (0, D.$G)().t;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.Z, {
                            children: n("Please note that this is the old BTT token, which has been swapped to the new BTT tokens in the following ratio:")
                        }), (0, i.jsx)(c.Z, {
                            children: "1 BTT (OLD) = 1,000 BTT (NEW)"
                        }), (0, i.jsxs)(c.Z, {
                            mb: "8px",
                            children: [n("Trade the new BTT token"), " ", (0, i.jsx)(kn.Z, {
                                style: {
                                    display: "inline"
                                },
                                href: "https://pancakeswap.finance/swap?outputCurrency=0x352Cb5E19b12FC216548a2677bD0fce83BaE434B",
                                children: n("here")
                            })]
                        }), (0, i.jsx)(_e.Z, {
                            href: "https://medium.com/@BitTorrent/tutorial-how-to-swap-bttold-to-btt-453264d7142",
                            children: n("For more details on the swap, please refer here.")
                        })]
                    })
                };

            function Ve(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function We(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function He() {
                var n = We(["\n  max-width: 440px;\n"]);
                return He = function() {
                    return n
                }, n
            }

            function $e() {
                var n = We(["\n  align-items: flex-start;\n  justify-content: flex-start;\n"]);
                return $e = function() {
                    return n
                }, n
            }
            var Ke = (0, j.ZP)(Se.F0).withConfig({
                    componentId: "sc-226846f8-0"
                })(He()),
                Xe = (0, j.ZP)(Ne.Z).withConfig({
                    componentId: "sc-226846f8-1"
                })($e()),
                Ye = function(n) {
                    var e, t = n.swapCurrency,
                        r = n.onDismiss,
                        o = (0, D.$G)().t,
                        a = (0, De.Z)().theme;
                    (0, f.useEffect)((function() {
                        var n = function(n) {
                            return n.stopPropagation(), n.preventDefault(), !1
                        };
                        return document.querySelectorAll('[role="presentation"]').forEach((function(e) {
                                e.addEventListener("click", n, !0)
                            })),
                            function() {
                                document.querySelectorAll('[role="presentation"]').forEach((function(e) {
                                    e.removeEventListener("click", n, !0)
                                }))
                            }
                    }), []);
                    var c = (Ve(e = {}, L.safemoon.address, {
                        symbol: L.safemoon.symbol,
                        component: (0, i.jsx)(Me, {})
                    }), Ve(e, L.bondly.address, {
                        symbol: L.bondly.symbol,
                        component: (0, i.jsx)(Be, {})
                    }), Ve(e, L.itam.address, {
                        symbol: L.itam.symbol,
                        component: (0, i.jsx)(ze, {})
                    }), Ve(e, L.ccar.address, {
                        symbol: L.ccar.symbol,
                        component: (0, i.jsx)(Re, {})
                    }), Ve(e, L.bttold.address, {
                        symbol: L.bttold.symbol,
                        component: (0, i.jsx)(Ge, {})
                    }), e)[t.address];
                    return (0, i.jsxs)(Ke, {
                        minWidth: "280px",
                        children: [(0, i.jsx)(Se.xB, {
                            background: a.colors.gradients.cardHeader,
                            children: (0, i.jsx)(Ee.Z, {
                                p: "12px 24px",
                                children: o("Notice for trading %symbol%", {
                                    symbol: c.symbol
                                })
                            })
                        }), (0, i.jsxs)(Se.fe, {
                            p: "24px",
                            children: [(0, i.jsx)(Xe, {
                                variant: "warning",
                                mb: "24px",
                                children: (0, i.jsx)(l.Z, {
                                    children: c.component
                                })
                            }), (0, i.jsx)(Le, {
                                handleContinueClick: r
                            })]
                        })]
                    })
                };

            function qe(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function Qe(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function Je(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(n); !(a = (r = t.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                        } catch (l) {
                            c = !0, o = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return qe(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return qe(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function nt(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function et() {
                var n = nt(["\n  font-size: 12px;\n  font-weight: bold;\n  color: ", ";\n"]);
                return et = function() {
                    return n
                }, n
            }

            function tt() {
                var n = nt(["\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  .icon-up-down {\n    display: none;\n  }\n  &:hover {\n    background-color: ", ";\n    .icon-down {\n      display: none;\n      fill: white;\n    }\n    .icon-up-down {\n      display: block;\n      fill: white;\n    }\n  }\n"]);
                return tt = function() {
                    return n
                }, n
            }

            function rt() {
                var n = nt(["\n  /* background: #101724; */\n  padding-bottom: 2rem;\n\n  padding-left: 24px;\n  padding-right: 24px;\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    @media (min-width: 1024px) {\n      padding-left: 2rem;\n      padding-right: 2rem;\n    }\n  }\n\n  .section-title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: #ffffff;\n\n    @media (min-width: 991px) {\n      font-size: 32px;\n      line-height: 48px;\n    }\n  }\n\n  div {\n    &.blinking {\n      @media (min-width: 991px) {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 37%;\n        height: 73%;\n        animation: 5s ease 0s infinite normal none running blinking;\n        background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n        border-radius: 87px;\n        transform: rotate(25.82deg);\n      }\n    }\n  }\n\n  .section-container {\n    background: #000000;\n    margin-top: 1.5rem;\n    border-radius: 24px;\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"]);
                return rt = function() {
                    return n
                }, n
            }(0, j.ZP)(c.Z).withConfig({
                componentId: "sc-78ebecce-0"
            })(et(), (function(n) {
                return n.theme.colors.secondary
            })), (0, j.ZP)(O.Z).withConfig({
                componentId: "sc-78ebecce-1"
            })(tt(), (function(n) {
                return n.theme.colors.primary
            })), j.ZP.div.withConfig({
                componentId: "sc-78ebecce-2"
            })(rt());

            function ot(n) {
                var e, t, r, o, s, u, d, p, m, h, x = n.urlLoadedTokens,
                    g = (0, v.useRouter)(),
                    b = (((null === g || void 0 === g ? void 0 : g.query) || {}).token, (0, D.$G)().t),
                    y = ((0, f.useState)(!1)[0], (0, k.e_)()),
                    w = x && x.filter((function(n) {
                        return !(n.address in y)
                    })),
                    j = (0, Q.Z)().account,
                    T = Je((0, J.DG)(), 1)[0],
                    P = Je((0, J.$2)(), 1)[0],
                    C = (0, A.dU)(),
                    Z = C.independentField,
                    O = C.typedValue,
                    B = C.recipient,
                    F = C[Cn.gN.INPUT].currencyId,
                    L = C[Cn.gN.OUTPUT].currencyId,
                    R = (0, k.U8)(F),
                    nn = (0, k.U8)(L),
                    en = (0, A.SM)(Z, O, R, nn, B),
                    tn = en.v2Trade,
                    rn = en.currencyBalances,
                    on = en.parsedAmount,
                    an = en.currencies,
                    cn = en.inputError,
                    ln = Pn(an[Cn.gN.INPUT], an[Cn.gN.OUTPUT], O),
                    sn = ln.wrapType,
                    un = ln.execute,
                    dn = ln.inputError,
                    fn = sn !== xn.NOT_APPLICABLE,
                    pn = fn ? void 0 : tn,
                    hn = fn ? (Qe(u = {}, Cn.gN.INPUT, on), Qe(u, Cn.gN.OUTPUT, on), u) : (Qe(d = {}, Cn.gN.INPUT, Z === Cn.gN.INPUT ? on : null === pn || void 0 === pn ? void 0 : pn.inputAmount), Qe(d, Cn.gN.OUTPUT, Z === Cn.gN.OUTPUT ? on : null === pn || void 0 === pn ? void 0 : pn.outputAmount), d),
                    gn = (0, A._r)(),
                    bn = (gn.onSwitchTokens, gn.onCurrencySelection),
                    yn = gn.onChangeRecipient,
                    vn = !cn,
                    wn = Z === Cn.gN.INPUT ? Cn.gN.OUTPUT : Cn.gN.INPUT,
                    jn = (0, An.I0)(),
                    Tn = (0, f.useCallback)((function(n, e) {
                        jn((0, Cn.LC)({
                            field: n,
                            typedValue: e
                        }))
                    }), [jn]),
                    kn = (0, f.useCallback)((function(n) {
                        Tn(Cn.gN.INPUT, n)
                    }), [Tn]),
                    In = (0, f.useCallback)((function(n) {
                        Tn(Cn.gN.OUTPUT, n)
                    }), [Tn]),
                    Zn = (0, f.useState)({
                        tradeToConfirm: void 0,
                        attemptingTxn: !1,
                        swapErrorMessage: void 0,
                        txHash: void 0
                    }),
                    On = Zn[0],
                    Un = On.tradeToConfirm,
                    Sn = On.swapErrorMessage,
                    Nn = On.attemptingTxn,
                    En = On.txHash,
                    Dn = Zn[1],
                    Mn = (Qe(h = {}, Z, O), Qe(h, wn, fn ? null !== (p = null === (e = hn[Z]) || void 0 === e ? void 0 : e.toExact()) && void 0 !== p ? p : "" : null !== (m = null === (t = hn[wn]) || void 0 === t ? void 0 : t.toSignificant(6)) && void 0 !== m ? m : ""), h),
                    Bn = null === pn || void 0 === pn ? void 0 : pn.route,
                    Fn = Boolean(an[Cn.gN.INPUT] && an[Cn.gN.OUTPUT] && (null === (r = hn[Z]) || void 0 === r ? void 0 : r.greaterThan(I.QA.BigInt(0)))),
                    Ln = !Bn,
                    Rn = Je((0, q.re)(pn, P), 2),
                    _n = Rn[0],
                    Gn = Rn[1],
                    Vn = (0, f.useState)(!1),
                    Wn = Vn[0],
                    Hn = Vn[1];
                (0, f.useEffect)((function() {
                    _n === q.UK.PENDING && Hn(!0)
                }), [_n, Wn]);
                var $n = (0, M.i)(rn[Cn.gN.INPUT]),
                    Kn = Boolean($n && (null === (o = hn[Cn.gN.INPUT]) || void 0 === o ? void 0 : o.equalTo($n))),
                    Xn = mn(pn, P, B),
                    Yn = Xn.callback,
                    qn = Xn.error,
                    ne = (0, z.U7)(pn).priceImpactWithoutFee,
                    ee = Je((0, J.RO)(), 1)[0],
                    te = (0, f.useCallback)((function() {
                        ne && !xe(ne, b) || Yn && (Dn({
                            attemptingTxn: !0,
                            tradeToConfirm: Un,
                            swapErrorMessage: void 0,
                            txHash: void 0
                        }), Yn().then((function(n) {
                            Dn({
                                attemptingTxn: !1,
                                tradeToConfirm: Un,
                                swapErrorMessage: void 0,
                                txHash: n
                            })
                        })).catch((function(n) {
                            Dn({
                                attemptingTxn: !1,
                                tradeToConfirm: Un,
                                swapErrorMessage: n.message,
                                txHash: void 0
                            })
                        })))
                    }), [ne, Yn, Un, b]),
                    re = (0, f.useState)(!1),
                    oe = (re[0], re[1], (0, z.oX)(ne)),
                    ae = !cn && (_n === q.UK.NOT_APPROVED || _n === q.UK.PENDING || Wn && _n === q.UK.APPROVED) && !(oe > 3 && !T),
                    ce = (0, f.useCallback)((function() {
                        Dn({
                            tradeToConfirm: Un,
                            attemptingTxn: Nn,
                            swapErrorMessage: Sn,
                            txHash: En
                        }), En && Tn(Cn.gN.INPUT, "")
                    }), [Nn, Tn, Sn, Un, En]),
                    le = (0, f.useCallback)((function() {
                        Dn({
                            tradeToConfirm: pn,
                            swapErrorMessage: Sn,
                            txHash: En,
                            attemptingTxn: Nn
                        })
                    }), [Nn, Sn, pn, En]),
                    se = (0, f.useState)(null),
                    ue = se[0],
                    de = se[1],
                    fe = Je((0, U.Z)((0, i.jsx)(Ye, {
                        swapCurrency: ue
                    }), !0, !1, "modal-1"), 1)[0];
                (0, f.useEffect)((function() {
                    ue && fe()
                }), [ue]);
                var pe = (0, f.useCallback)((function(n) {
                        Hn(!1), bn(Cn.gN.INPUT, n);
                        var e = _(n);
                        de(e ? n : null)
                    }), [bn]),
                    me = (0, f.useCallback)((function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
                        $n && Tn(Cn.gN.INPUT, (+$n.toExact() * n / 100).toString())
                    }), [$n, Tn]),
                    ge = (0, f.useCallback)((function(n) {
                        bn(Cn.gN.OUTPUT, n);
                        var e = _(n);
                        de(e ? n : null)
                    }), [bn]),
                    be = (0, E.mP)(null === an || void 0 === an ? void 0 : an.INPUT, null === an || void 0 === an ? void 0 : an.OUTPUT),
                    ve = Je((0, U.Z)((0, i.jsx)(ye, {
                        tokens: w,
                        onCancel: function() {
                            return g.push("/swap")
                        }
                    }), !0, !1, "ImportTokenWarningModal"), 1)[0];
                (0, f.useEffect)((function() {
                    w.length > 0 && ve()
                }), [w.length]);
                var we, je = Je((0, U.Z)((0, i.jsx)(he, {
                    trade: pn,
                    originalTrade: Un,
                    onAcceptChanges: le,
                    attemptingTxn: Nn,
                    txHash: En,
                    recipient: B,
                    allowedSlippage: P,
                    onConfirm: te,
                    swapErrorMessage: Sn,
                    customOnDismiss: ce,
                    title: "Buy"
                }), !0, !0, "confirmSwapModal"), 1)[0];
                Boolean(on);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(Qn, {
                        id: "swap-page",
                        children: [(0, i.jsx)(G.Z, {}), (0, i.jsx)(V.Z, {}), (0, i.jsxs)(W.Tz, {
                            gap: "sm",
                            children: [(0, i.jsx)(c.Z, {
                                bold: !0,
                                fontSize: "20px",
                                children: "Buy"
                            }), (0, i.jsxs)(l.Z, {
                                mt: "1.5rem",
                                children: [(0, i.jsxs)(a.Z, {
                                    justifyContent: "space-between",
                                    children: [(0, i.jsx)(c.Z, {
                                        small: !0,
                                        color: "secondary",
                                        children: "From"
                                    }), (0, i.jsx)(a.Z, {
                                        children: [25, 50, 100].map((function(n) {
                                            return (0, i.jsx)(l.Z, {
                                                ml: "1rem",
                                                onClick: function() {
                                                    me(n)
                                                },
                                                children: (0, i.jsxs)(c.Z, {
                                                    small: !0,
                                                    color: "secondary",
                                                    children: [n, "%"]
                                                })
                                            }, n)
                                        }))
                                    })]
                                }), (0, i.jsx)(H.Z, {
                                    label: Z === Cn.gN.OUTPUT && !fn && pn ? b("From (estimated)") : b("From"),
                                    value: Mn[Cn.gN.INPUT],
                                    showMaxButton: !Kn,
                                    currency: an[Cn.gN.INPUT],
                                    onUserInput: kn,
                                    onMax: me,
                                    onCurrencySelect: pe,
                                    otherCurrency: an[Cn.gN.OUTPUT],
                                    id: "swap-currency-input"
                                })]
                            }), (0, i.jsxs)(l.Z, {
                                mt: "1.5rem",
                                children: [(0, i.jsx)(a.Z, {
                                    justifyContent: "space-between",
                                    children: (0, i.jsx)(c.Z, {
                                        small: !0,
                                        color: "secondary",
                                        children: "To"
                                    })
                                }), (0, i.jsx)(H.Z, {
                                    value: Mn[Cn.gN.OUTPUT],
                                    onUserInput: In,
                                    label: Z === Cn.gN.INPUT && !fn && pn ? b("To (estimated)") : b("To"),
                                    showMaxButton: !1,
                                    currency: an[Cn.gN.OUTPUT],
                                    onCurrencySelect: ge,
                                    otherCurrency: an[Cn.gN.INPUT],
                                    id: "swap-currency-output",
                                    disableCurrencySelect: !0
                                })]
                            }), T && null !== B && !fn ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)($.BA, {
                                    justify: "space-between",
                                    style: {
                                        padding: "0 1rem"
                                    },
                                    children: [(0, i.jsx)(Jn, {
                                        clickable: !1,
                                        children: (0, i.jsx)(S.Z, {
                                            width: "16px"
                                        })
                                    }), (0, i.jsx)(N.Z, {
                                        variant: "text",
                                        id: "remove-recipient-button",
                                        onClick: function() {
                                            return yn(null)
                                        },
                                        children: b("- Remove send")
                                    })]
                                }), (0, i.jsx)(zn, {
                                    id: "recipient",
                                    value: B,
                                    onChange: yn
                                })]
                            }) : null]
                        }), (0, i.jsxs)(l.Z, {
                            mt: "2rem",
                            children: [be ? (0, i.jsx)(N.Z, {
                                width: "100%",
                                disabled: !0,
                                children: b("Unsupported Asset")
                            }) : j ? fn ? (0, i.jsx)(N.Z, {
                                width: "100%",
                                disabled: Boolean(dn),
                                onClick: un,
                                children: null !== dn && void 0 !== dn ? dn : sn === xn.WRAP ? "Wrap" : sn === xn.UNWRAP ? "Unwrap" : null
                            }) : Ln && Fn ? (0, i.jsxs)(X.h2, {
                                style: {
                                    textAlign: "center",
                                    padding: "0.75rem"
                                },
                                children: [(0, i.jsx)(c.Z, {
                                    color: "textSubtle",
                                    children: b("Insufficient liquidity for this trade.")
                                }), ee && (0, i.jsx)(c.Z, {
                                    color: "textSubtle",
                                    children: b("Try enabling multi-hop trades.")
                                })]
                            }) : ae ? (0, i.jsxs)($.m0, {
                                children: [(0, i.jsx)(N.Z, {
                                    variant: _n === q.UK.APPROVED ? "success" : "primary",
                                    onClick: Gn,
                                    disabled: _n !== q.UK.NOT_APPROVED || Wn,
                                    width: "48%",
                                    children: _n === q.UK.PENDING ? (0, i.jsxs)($.BA, {
                                        gap: "6px",
                                        justify: "center",
                                        children: [b("Enabling"), " ", (0, i.jsx)(K.Z, {
                                            stroke: "white"
                                        })]
                                    }) : Wn && _n === q.UK.APPROVED ? b("Enabled") : b("Enable %asset%", {
                                        asset: null !== (we = null === (s = an[Cn.gN.INPUT]) || void 0 === s ? void 0 : s.symbol) && void 0 !== we ? we : ""
                                    })
                                }), (0, i.jsx)(N.Z, {
                                    variant: vn && oe > 2 ? "danger" : "primary",
                                    onClick: function() {
                                        T ? te() : (Dn({
                                            tradeToConfirm: pn,
                                            attemptingTxn: !1,
                                            swapErrorMessage: void 0,
                                            txHash: void 0
                                        }), je())
                                    },
                                    width: "48%",
                                    id: "swap-button",
                                    disabled: !vn || _n !== q.UK.APPROVED || oe > 3 && !T,
                                    children: b(oe > 3 && !T ? "Price Impact High" : oe > 2 ? "Swap Anyway" : "BUY")
                                })]
                            }) : (0, i.jsx)(N.Z, {
                                variant: vn && oe > 2 && !qn ? "danger" : "primary",
                                onClick: function() {
                                    T ? te() : (Dn({
                                        tradeToConfirm: pn,
                                        attemptingTxn: !1,
                                        swapErrorMessage: void 0,
                                        txHash: void 0
                                    }), je())
                                },
                                id: "swap-button",
                                width: "100%",
                                disabled: !vn || oe > 3 && !T || !!qn,
                                background: "#00E39A",
                                color: "#FFFFFF",
                                children: cn || b(oe > 3 && !T ? "Price Impact Too High" : oe > 2 ? "Swap Anyway" : "BUY")
                            }) : (0, i.jsx)(Y.Z, {
                                width: "100%"
                            }), ae && (0, i.jsx)(W.ZP, {
                                style: {
                                    marginTop: "1rem"
                                },
                                children: (0, i.jsx)(Ue, {
                                    steps: [_n === q.UK.APPROVED]
                                })
                            }), T && Sn ? (0, i.jsx)(ie, {
                                error: Sn
                            }) : null]
                        })]
                    })
                })
            }

            function it(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function at(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function ct(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(n); !(a = (r = t.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                        } catch (l) {
                            c = !0, o = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return it(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return it(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function lt(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function st() {
                var n = lt(["\n  font-size: 12px;\n  font-weight: bold;\n  color: ", ";\n"]);
                return st = function() {
                    return n
                }, n
            }

            function ut() {
                var n = lt(["\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  .icon-up-down {\n    display: none;\n  }\n  &:hover {\n    background-color: ", ";\n    .icon-down {\n      display: none;\n      fill: white;\n    }\n    .icon-up-down {\n      display: block;\n      fill: white;\n    }\n  }\n"]);
                return ut = function() {
                    return n
                }, n
            }

            function dt() {
                var n = lt(["\n  /* background: #101724; */\n  padding-bottom: 2rem;\n\n  padding-left: 24px;\n  padding-right: 24px;\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    @media (min-width: 1024px) {\n      padding-left: 2rem;\n      padding-right: 2rem;\n    }\n  }\n\n  .section-title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: #ffffff;\n\n    @media (min-width: 991px) {\n      font-size: 32px;\n      line-height: 48px;\n    }\n  }\n\n  div {\n    &.blinking {\n      @media (min-width: 991px) {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 37%;\n        height: 73%;\n        animation: 5s ease 0s infinite normal none running blinking;\n        background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n        border-radius: 87px;\n        transform: rotate(25.82deg);\n      }\n    }\n  }\n\n  .section-container {\n    background: #000000;\n    margin-top: 1.5rem;\n    border-radius: 24px;\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"]);
                return dt = function() {
                    return n
                }, n
            }(0, j.ZP)(c.Z).withConfig({
                componentId: "sc-f8f2785-0"
            })(st(), (function(n) {
                return n.theme.colors.secondary
            })), (0, j.ZP)(O.Z).withConfig({
                componentId: "sc-f8f2785-1"
            })(ut(), (function(n) {
                return n.theme.colors.primary
            })), j.ZP.div.withConfig({
                componentId: "sc-f8f2785-2"
            })(dt());

            function ft(n) {
                var e, t, r, o, s, u, d, p, m, h, x = n.urlLoadedTokens,
                    g = (0, v.useRouter)(),
                    b = (((null === g || void 0 === g ? void 0 : g.query) || {}).token, (0, D.$G)().t),
                    y = ((0, f.useState)(!1)[0], (0, k.e_)()),
                    w = x && x.filter((function(n) {
                        return !(n.address in y)
                    })),
                    j = (0, Q.Z)().account,
                    T = ct((0, J.DG)(), 1)[0],
                    P = ct((0, J.$2)(), 1)[0],
                    C = (0, A.dU)(),
                    Z = C.independentFieldSell,
                    O = C.typedValueSell,
                    B = C.recipient,
                    F = C[Cn.gN.INPUT].currencyId,
                    L = C[Cn.gN.OUTPUT].currencyId,
                    R = Z,
                    nn = O,
                    en = (0, k.U8)(F),
                    tn = (0, k.U8)(L),
                    rn = (0, A.SM)(R, nn, tn, en, B),
                    on = rn.v2Trade,
                    an = rn.currencyBalances,
                    cn = rn.parsedAmount,
                    ln = rn.currencies,
                    sn = rn.inputError,
                    un = Pn(ln[Cn.gN.INPUT], ln[Cn.gN.OUTPUT], nn),
                    dn = un.wrapType,
                    fn = un.execute,
                    pn = un.inputError,
                    hn = dn !== xn.NOT_APPLICABLE,
                    gn = hn ? void 0 : on,
                    bn = hn ? (at(u = {}, Cn.gN.INPUT, cn), at(u, Cn.gN.OUTPUT, cn), u) : (at(d = {}, Cn.gN.INPUT, R === Cn.gN.INPUT ? cn : null === gn || void 0 === gn ? void 0 : gn.inputAmount), at(d, Cn.gN.OUTPUT, R === Cn.gN.OUTPUT ? cn : null === gn || void 0 === gn ? void 0 : gn.outputAmount), d),
                    yn = (0, A._r)(),
                    vn = (yn.onSwitchTokens, yn.onCurrencySelection),
                    wn = yn.onChangeRecipient,
                    jn = !sn,
                    Tn = R === Cn.gN.INPUT ? Cn.gN.OUTPUT : Cn.gN.INPUT,
                    kn = (0, An.I0)(),
                    In = (0, f.useCallback)((function(n, e) {
                        kn((0, Cn.Vv)({
                            field: n,
                            typedValue: e
                        }))
                    }), [kn]),
                    Zn = (0, f.useCallback)((function(n) {
                        In(Cn.gN.INPUT, n)
                    }), [In]),
                    On = (0, f.useCallback)((function(n) {
                        In(Cn.gN.OUTPUT, n)
                    }), [In]),
                    Un = (0, f.useState)({
                        tradeToConfirm: void 0,
                        attemptingTxn: !1,
                        swapErrorMessage: void 0,
                        txHash: void 0
                    }),
                    Sn = Un[0],
                    Nn = Sn.tradeToConfirm,
                    En = Sn.swapErrorMessage,
                    Dn = Sn.attemptingTxn,
                    Mn = Sn.txHash,
                    Bn = Un[1],
                    Fn = (at(h = {}, R, nn), at(h, Tn, hn ? null !== (p = null === (e = bn[R]) || void 0 === e ? void 0 : e.toExact()) && void 0 !== p ? p : "" : null !== (m = null === (t = bn[Tn]) || void 0 === t ? void 0 : t.toSignificant(6)) && void 0 !== m ? m : ""), h),
                    Ln = null === gn || void 0 === gn ? void 0 : gn.route,
                    Rn = Boolean(ln[Cn.gN.INPUT] && ln[Cn.gN.OUTPUT] && (null === (r = bn[R]) || void 0 === r ? void 0 : r.greaterThan(I.QA.BigInt(0)))),
                    _n = !Ln,
                    Gn = ct((0, q.re)(gn, P), 2),
                    Vn = Gn[0],
                    Wn = Gn[1],
                    Hn = (0, f.useState)(!1),
                    $n = Hn[0],
                    Kn = Hn[1];
                (0, f.useEffect)((function() {
                    Vn === q.UK.PENDING && Kn(!0)
                }), [Vn, $n]);
                var Xn = (0, M.i)(an[Cn.gN.INPUT]),
                    Yn = Boolean(Xn && (null === (o = bn[Cn.gN.INPUT]) || void 0 === o ? void 0 : o.equalTo(Xn))),
                    qn = mn(gn, P, B),
                    ne = qn.callback,
                    ee = qn.error,
                    te = (0, z.U7)(gn).priceImpactWithoutFee,
                    re = ct((0, J.RO)(), 1)[0],
                    oe = (0, f.useCallback)((function() {
                        te && !xe(te, b) || ne && (Bn({
                            attemptingTxn: !0,
                            tradeToConfirm: Nn,
                            swapErrorMessage: void 0,
                            txHash: void 0
                        }), ne().then((function(n) {
                            Bn({
                                attemptingTxn: !1,
                                tradeToConfirm: Nn,
                                swapErrorMessage: void 0,
                                txHash: n
                            })
                        })).catch((function(n) {
                            Bn({
                                attemptingTxn: !1,
                                tradeToConfirm: Nn,
                                swapErrorMessage: n.message,
                                txHash: void 0
                            })
                        })))
                    }), [te, ne, Nn, b]),
                    ae = (0, f.useState)(!1),
                    ce = (ae[0], ae[1], (0, z.oX)(te)),
                    le = !sn && (Vn === q.UK.NOT_APPROVED || Vn === q.UK.PENDING || $n && Vn === q.UK.APPROVED) && !(ce > 3 && !T),
                    se = (0, f.useCallback)((function() {
                        Bn({
                            tradeToConfirm: Nn,
                            attemptingTxn: Dn,
                            swapErrorMessage: En,
                            txHash: Mn
                        }), Mn && In(Cn.gN.INPUT, "")
                    }), [Dn, In, En, Nn, Mn]),
                    ue = (0, f.useCallback)((function() {
                        Bn({
                            tradeToConfirm: gn,
                            swapErrorMessage: En,
                            txHash: Mn,
                            attemptingTxn: Dn
                        })
                    }), [Dn, En, gn, Mn]),
                    de = (0, f.useState)(null),
                    fe = de[0],
                    pe = de[1],
                    me = ct((0, U.Z)((0, i.jsx)(Ye, {
                        swapCurrency: fe
                    }), !0, !1, "modal-2"), 1)[0];
                (0, f.useEffect)((function() {
                    fe && me()
                }), [fe]);
                var ge = (0, f.useCallback)((function(n) {
                        Kn(!1), vn(Cn.gN.INPUT, n);
                        var e = _(n);
                        pe(e ? n : null)
                    }), [vn]),
                    be = (0, f.useCallback)((function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
                        Xn && In(Cn.gN.INPUT, (+Xn.toExact() * n / 100).toString())
                    }), [Xn, In]),
                    ve = (0, f.useCallback)((function(n) {
                        vn(Cn.gN.OUTPUT, n);
                        var e = _(n);
                        pe(e ? n : null)
                    }), [vn]),
                    we = (0, E.mP)(null === ln || void 0 === ln ? void 0 : ln.INPUT, null === ln || void 0 === ln ? void 0 : ln.OUTPUT),
                    je = ct((0, U.Z)((0, i.jsx)(ye, {
                        tokens: w,
                        onCancel: function() {
                            return g.push("/swap")
                        }
                    }), !0, !1, "ImportTokenWarningModal2"), 1)[0];
                (0, f.useEffect)((function() {
                    w.length > 0 && je()
                }), [w.length]);
                var Te, Pe = ct((0, U.Z)((0, i.jsx)(he, {
                    trade: gn,
                    originalTrade: Nn,
                    onAcceptChanges: ue,
                    attemptingTxn: Dn,
                    txHash: Mn,
                    recipient: B,
                    allowedSlippage: P,
                    onConfirm: oe,
                    swapErrorMessage: En,
                    customOnDismiss: se,
                    title: "Sell"
                }), !0, !0, "confirmSwapModal2"), 1)[0];
                Boolean(cn);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(Qn, {
                        id: "swap-page",
                        children: [(0, i.jsx)(G.Z, {}), (0, i.jsx)(V.Z, {}), (0, i.jsxs)(W.Tz, {
                            gap: "sm",
                            children: [(0, i.jsx)(c.Z, {
                                bold: !0,
                                fontSize: "20px",
                                children: "Sell"
                            }), (0, i.jsxs)(l.Z, {
                                mt: "1.5rem",
                                children: [(0, i.jsxs)(a.Z, {
                                    justifyContent: "space-between",
                                    children: [(0, i.jsx)(c.Z, {
                                        small: !0,
                                        color: "secondary",
                                        children: "From"
                                    }), (0, i.jsx)(a.Z, {
                                        children: [25, 50, 100].map((function(n) {
                                            return (0, i.jsx)(l.Z, {
                                                ml: "1rem",
                                                onClick: function() {
                                                    be(n)
                                                },
                                                children: (0, i.jsxs)(c.Z, {
                                                    small: !0,
                                                    color: "secondary",
                                                    children: [n, "%"]
                                                })
                                            }, n)
                                        }))
                                    })]
                                }), (0, i.jsx)(H.Z, {
                                    label: R === Cn.gN.OUTPUT && !hn && gn ? b("From (estimated)") : b("From"),
                                    value: Fn[Cn.gN.INPUT],
                                    showMaxButton: !Yn,
                                    currency: ln[Cn.gN.INPUT],
                                    onUserInput: Zn,
                                    onMax: be,
                                    onCurrencySelect: ve,
                                    otherCurrency: ln[Cn.gN.OUTPUT],
                                    id: "swap-currency-input",
                                    disableCurrencySelect: !0
                                })]
                            }), (0, i.jsxs)(l.Z, {
                                mt: "1.5rem",
                                children: [(0, i.jsx)(a.Z, {
                                    justifyContent: "space-between",
                                    children: (0, i.jsx)(c.Z, {
                                        small: !0,
                                        color: "secondary",
                                        children: "To"
                                    })
                                }), (0, i.jsx)(H.Z, {
                                    value: Fn[Cn.gN.OUTPUT],
                                    onUserInput: On,
                                    label: R === Cn.gN.INPUT && !hn && gn ? b("To (estimated)") : b("To"),
                                    showMaxButton: !1,
                                    currency: ln[Cn.gN.OUTPUT],
                                    onCurrencySelect: ge,
                                    otherCurrency: ln[Cn.gN.INPUT],
                                    id: "swap-currency-output"
                                })]
                            }), T && null !== B && !hn ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)($.BA, {
                                    justify: "space-between",
                                    style: {
                                        padding: "0 1rem"
                                    },
                                    children: [(0, i.jsx)(Jn, {
                                        clickable: !1,
                                        children: (0, i.jsx)(S.Z, {
                                            width: "16px"
                                        })
                                    }), (0, i.jsx)(N.Z, {
                                        variant: "text",
                                        id: "remove-recipient-button",
                                        onClick: function() {
                                            return wn(null)
                                        },
                                        children: b("- Remove send")
                                    })]
                                }), (0, i.jsx)(zn, {
                                    id: "recipient",
                                    value: B,
                                    onChange: wn
                                })]
                            }) : null]
                        }), (0, i.jsxs)(l.Z, {
                            mt: "2rem",
                            children: [we ? (0, i.jsx)(N.Z, {
                                width: "100%",
                                disabled: !0,
                                children: b("Unsupported Asset")
                            }) : j ? hn ? (0, i.jsx)(N.Z, {
                                width: "100%",
                                disabled: Boolean(pn),
                                onClick: fn,
                                children: null !== pn && void 0 !== pn ? pn : dn === xn.WRAP ? "Wrap" : dn === xn.UNWRAP ? "Unwrap" : null
                            }) : _n && Rn ? (0, i.jsxs)(X.h2, {
                                style: {
                                    textAlign: "center",
                                    padding: "0.75rem"
                                },
                                children: [(0, i.jsx)(c.Z, {
                                    color: "textSubtle",
                                    children: b("Insufficient liquidity for this trade.")
                                }), re && (0, i.jsx)(c.Z, {
                                    color: "textSubtle",
                                    children: b("Try enabling multi-hop trades.")
                                })]
                            }) : le ? (0, i.jsxs)($.m0, {
                                children: [(0, i.jsx)(N.Z, {
                                    variant: Vn === q.UK.APPROVED ? "success" : "primary",
                                    onClick: Wn,
                                    disabled: Vn !== q.UK.NOT_APPROVED || $n,
                                    width: "48%",
                                    children: Vn === q.UK.PENDING ? (0, i.jsxs)($.BA, {
                                        gap: "6px",
                                        justify: "center",
                                        children: [b("Enabling"), " ", (0, i.jsx)(K.Z, {
                                            stroke: "white"
                                        })]
                                    }) : $n && Vn === q.UK.APPROVED ? b("Enabled") : b("Enable %asset%", {
                                        asset: null !== (Te = null === (s = ln[Cn.gN.INPUT]) || void 0 === s ? void 0 : s.symbol) && void 0 !== Te ? Te : ""
                                    })
                                }), (0, i.jsx)(N.Z, {
                                    variant: jn && ce > 2 ? "danger" : "primary",
                                    onClick: function() {
                                        T ? oe() : (Bn({
                                            tradeToConfirm: gn,
                                            attemptingTxn: !1,
                                            swapErrorMessage: void 0,
                                            txHash: void 0
                                        }), Pe())
                                    },
                                    width: "48%",
                                    id: "swap-button",
                                    disabled: !jn || Vn !== q.UK.APPROVED || ce > 3 && !T,
                                    children: b(ce > 3 && !T ? "Price Impact High" : ce > 2 ? "Swap Anyway" : "SELL")
                                })]
                            }) : (0, i.jsx)(N.Z, {
                                variant: jn && ce > 2 && !ee ? "danger" : "primary",
                                onClick: function() {
                                    T ? oe() : (Bn({
                                        tradeToConfirm: gn,
                                        attemptingTxn: !1,
                                        swapErrorMessage: void 0,
                                        txHash: void 0
                                    }), Pe())
                                },
                                id: "swap-button",
                                width: "100%",
                                disabled: !jn || ce > 3 && !T || !!ee,
                                background: "#E74A5D",
                                color: "#FFFFFF",
                                children: sn || b(ce > 3 && !T ? "Price Impact Too High" : ce > 2 ? "Swap Anyway" : "SELL")
                            }) : (0, i.jsx)(Y.Z, {
                                width: "100%"
                            }), le && (0, i.jsx)(W.ZP, {
                                style: {
                                    marginTop: "1rem"
                                },
                                children: (0, i.jsx)(Ue, {
                                    steps: [Vn === q.UK.APPROVED]
                                })
                            }), T && En ? (0, i.jsx)(ie, {
                                error: En
                            }) : null]
                        })]
                    })
                })
            }

            function pt(n, e) {
                (null == e || e > n.length) && (e = n.length);
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
                return r
            }

            function mt(n, e, t, r, o, i, a) {
                try {
                    var c = n[i](a),
                        l = c.value
                } catch (s) {
                    return void t(s)
                }
                c.done ? e(l) : Promise.resolve(l).then(r, o)
            }

            function ht(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = null == n ? null : "undefined" !== typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            c = !1;
                        try {
                            for (t = t.call(n); !(a = (r = t.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                        } catch (l) {
                            c = !0, o = l
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                        return i
                    }
                }(n, e) || function(n, e) {
                    if (!n) return;
                    if ("string" === typeof n) return pt(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === t && n.constructor && (t = n.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return pt(n, e)
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function xt() {
                var n, e, t = (n = ["\n  /* background: #101724; */\n  padding-bottom: 2rem;\n\n  padding-left: 24px;\n  padding-right: 24px;\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    @media (min-width: 1024px) {\n      padding-left: 2rem;\n      padding-right: 2rem;\n    }\n  }\n\n  .section-title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: #ffffff;\n\n    @media (min-width: 991px) {\n      font-size: 32px;\n      line-height: 48px;\n    }\n  }\n\n  div {\n    &.blinking {\n      @media (min-width: 991px) {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 37%;\n        height: 73%;\n        animation: 5s ease 0s infinite normal none running blinking;\n        background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n        border-radius: 87px;\n        transform: rotate(25.82deg);\n      }\n    }\n  }\n\n  .section-container {\n    background: #000000;\n    margin-top: 1.5rem;\n    border-radius: 24px;\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return xt = function() {
                    return t
                }, t
            }
            var gt = j.ZP.div.withConfig({
                    componentId: "sc-128dcd43-0"
                })(xt()),
                bt = {
                    weeks: 1
                };

            function yt() {
                var n, e, t, r, p, m = (0, f.useState)([]),
                    h = m[0],
                    x = m[1],
                    g = (0, v.useRouter)(),
                    j = (null === g || void 0 === g || null === (n = g.query) || void 0 === n ? void 0 : n.outputCurrency) || Z.g$,
                    O = (0, A.jj)(),
                    U = (0, w.Ws)(j) || {},
                    S = ht((0, w.Q4)(j.toLowerCase(), y.Tb, bt, !1), 2),
                    N = S[0],
                    E = S[1],
                    D = (0, f.useMemo)((function() {
                        return U.symbol || "SF"
                    }), [U.symbol]),
                    M = (0, f.useCallback)((p = o().mark((function n() {
                        var e;
                        return o().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    (e = (U.name || "SphynxFi").toLowerCase().split(" ").join("-")) && fetch("https://api.coingecko.com/api/v3/coins/".concat(e, "/market_chart?vs_currency=usd&days=30")).then((function(n) {
                                        return n.json()
                                    })).then((function(n) {
                                        n.error ? E() : x((null === n || void 0 === n ? void 0 : n.prices) || [])
                                    })).catch((function(n) {
                                        E()
                                    }));
                                case 2:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })), function() {
                        var n = this,
                            e = arguments;
                        return new Promise((function(t, r) {
                            var o = p.apply(n, e);

                            function i(n) {
                                mt(o, t, r, i, a, "next", n)
                            }

                            function a(n) {
                                mt(o, t, r, i, a, "throw", n)
                            }
                            i(void 0)
                        }))
                    }), [E, U.name]);
                (0, f.useEffect)((function() {
                    M()
                }), [M]), (0, f.useEffect)((function() {
                    N && N.length && x(N.map((function(n) {
                        return [n.time, (0, C.Yk)(n.close)]
                    })))
                }), [N]);
                var z, B = [(0, k.U8)(null === O || void 0 === O ? void 0 : O.inputCurrencyId), (0, k.U8)(null === O || void 0 === O ? void 0 : O.outputCurrencyId)],
                    F = B[0],
                    L = B[1],
                    R = (0, f.useMemo)((function() {
                        var n;
                        return null !== (z = null === (n = [F, L]) || void 0 === n ? void 0 : n.filter((function(n) {
                            return e = n, null != (t = I.WU) && "undefined" !== typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t;
                            var e, t
                        }))) && void 0 !== z ? z : []
                    }), [F, L]),
                    _ = U.priceUSD || (null === (e = null === h || void 0 === h ? void 0 : h.at(-1)) || void 0 === e ? void 0 : e[1]),
                    G = (_ - (null === (t = null === h || void 0 === h ? void 0 : h.at(-2)) || void 0 === t ? void 0 : t[1])) / (null === (r = null === h || void 0 === h ? void 0 : h.at(-2)) || void 0 === r ? void 0 : r[1]) * 100,
                    V = G > 0;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(gt, {
                        children: [(0, i.jsx)("section", {
                            style: {
                                marginTop: "1rem"
                            },
                            children: (0, i.jsxs)(a.Z, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [(0, i.jsx)(c.Z, {
                                    bold: !0,
                                    fontSize: "24px",
                                    children: "Trading"
                                }), (0, i.jsx)(a.Z, {
                                    flex: 1,
                                    justifyContent: "end",
                                    children: (0, i.jsx)("img", {
                                        src: "/images/icons/setting.png",
                                        alt: "",
                                        width: "20"
                                    })
                                })]
                            })
                        }), (0, i.jsx)("section", {
                            className: "section-container",
                            children: (0, i.jsxs)("div", {
                                className: "container",
                                children: [(0, i.jsxs)(a.Z, {
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    display: ["block", "block", "flex", "flex"],
                                    mb: "1rem",
                                    children: [(0, i.jsxs)(a.Z, {
                                        alignItems: "center",
                                        children: [(0, i.jsxs)(a.Z, {
                                            alignItems: "center",
                                            children: [(0, i.jsx)(P.X, {
                                                address: j,
                                                size: "49px"
                                            }), (0, i.jsxs)(l.Z, {
                                                ml: "1rem",
                                                children: [(0, i.jsxs)(a.Z, {
                                                    children: [(0, i.jsx)(c.Z, {
                                                        bold: !0,
                                                        fontSize: "18px",
                                                        children: D
                                                    }), (0, i.jsx)(c.Z, {
                                                        bold: !0,
                                                        fontSize: "18px",
                                                        color: "secondary",
                                                        children: "/USDT"
                                                    })]
                                                }), (0, i.jsx)(c.Z, {
                                                    small: !0,
                                                    color: "secondary",
                                                    children: U.name
                                                })]
                                            })]
                                        }), (0, i.jsxs)(a.Z, {
                                            flexDirection: "column",
                                            alignItems: "end",
                                            ml: "2rem",
                                            children: [(0, i.jsxs)(c.Z, {
                                                bold: !0,
                                                fontSize: "18px",
                                                children: ["$", (0, C.Yk)(_)]
                                            }), (0, i.jsxs)(a.Z, {
                                                children: [(0, i.jsx)(T.Z, {
                                                    fill: V ? "#00E39A" : "#FF4842",
                                                    className: V ? "rotate" : ""
                                                }), (0, i.jsxs)(c.Z, {
                                                    color: V ? "buy" : "sell",
                                                    ml: "0.25rem",
                                                    fontSize: "12px",
                                                    children: ["$", (0, C.Yk)(Math.abs(_ - _ / (1 + G / 100))), " (", (0, C.Yk)(Math.abs(G)), "%)"]
                                                })]
                                            })]
                                        })]
                                    }), (0, i.jsx)(a.Z, {
                                        flex: 1,
                                        justifyContent: "end"
                                    })]
                                }), (0, i.jsx)(b, {
                                    symbol: D,
                                    data: h || []
                                })]
                            })
                        }), (0, i.jsx)("section", {
                            className: "",
                            style: {
                                marginTop: "1.5rem"
                            },
                            children: (0, i.jsxs)(s.Z, {
                                gutter: [24, 24],
                                children: [(0, i.jsx)(u.Z, {
                                    xs: 24,
                                    md: 12,
                                    children: (0, i.jsx)(ot, {
                                        urlLoadedTokens: R
                                    })
                                }), (0, i.jsx)(u.Z, {
                                    xs: 24,
                                    md: 12,
                                    children: (0, i.jsx)(ft, {
                                        urlLoadedTokens: R
                                    })
                                })]
                            })
                        }), (0, i.jsxs)("section", {
                            style: {
                                marginTop: "2rem"
                            },
                            children: [(0, i.jsx)(a.Z, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                display: ["block", "block", "flex", "flex"],
                                children: (0, i.jsx)(c.Z, {
                                    bold: !0,
                                    fontSize: "24px",
                                    children: "Recent Transactions"
                                })
                            }), (0, i.jsx)(d.Z, {
                                limit: 5
                            })]
                        })]
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=1136-db54362fba253e5d.js.map