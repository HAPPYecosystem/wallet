(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8026], {
        15746: function(n, e, t) {
            "use strict";
            var i = t(21584);
            e.Z = i.Z
        },
        71230: function(n, e, t) {
            "use strict";
            var i = t(14645);
            e.Z = i.Z
        },
        75708: function(n, e, t) {
            var i;
            "undefined" != typeof self && self, n.exports = (i = t(67294), function(n) {
                function e(i) {
                    if (t[i]) return t[i].exports;
                    var r = t[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return n[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
                }
                var t = {};
                return e.m = n, e.c = t, e.d = function(n, t, i) {
                    e.o(n, t) || Object.defineProperty(n, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: i
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

                function i() {
                    return i = Object.assign || function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
                        }
                        return n
                    }, i.apply(this, arguments)
                }

                function r(n) {
                    return s(n) || l(n) || o(n) || a()
                }

                function a() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function o(n, e) {
                    if (n) {
                        if ("string" == typeof n) return c(n, e);
                        var t = Object.prototype.toString.call(n).slice(8, -1);
                        return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(n, e) : void 0
                    }
                }

                function l(n) {
                    if ("undefined" != typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }

                function s(n) {
                    if (Array.isArray(n)) return c(n)
                }

                function c(n, e) {
                    (null == e || e > n.length) && (e = n.length);
                    for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
                    return i
                }

                function d(n) {
                    return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                        return typeof n
                    } : function(n) {
                        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                    })(n)
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var u = t(1),
                    p = t.n(u),
                    f = "undefined" != typeof window ? u.useLayoutEffect : u.useEffect,
                    h = Object(u.forwardRef)((function(n, e) {
                        var t = Object(u.useRef)(),
                            a = Object(u.useRef)();
                        return f((function() {
                            function e() {
                                var e = n.highcharts || "object" === ("undefined" == typeof window ? "undefined" : d(window)) && window.Highcharts,
                                    i = n.constructorType || "chart";
                                e ? e[i] ? n.options ? a.current = e[i](t.current, n.options, n.callback ? n.callback : void 0) : console.warn('The "options" property was not passed.') : console.warn('The "constructorType" property is incorrect or some required module is not imported.') : console.warn('The "highcharts" property was not passed.')
                            }
                            if (a.current) {
                                if (!1 !== n.allowChartUpdate)
                                    if (!n.immutable && a.current) {
                                        var i;
                                        (i = a.current).update.apply(i, [n.options].concat(r(n.updateArgs || [!0, !0])))
                                    } else e()
                            } else e()
                        })), f((function() {
                            return function() {
                                a.current && (a.current.destroy(), a.current = null)
                            }
                        }), []), Object(u.useImperativeHandle)(e, (function() {
                            return {
                                get chart() {
                                    return a.current
                                },
                                container: t
                            }
                        }), []), p.a.createElement("div", i({}, n.containerProps, {
                            ref: t
                        }))
                    }));
                e.default = Object(u.memo)(h)
            }, function(n, e) {
                n.exports = i
            }]))
        },
        65705: function(n, e, t) {
            var i, r, a;
            a = function(n) {
                function e(n, e, t, i) {
                    n.hasOwnProperty(e) || (n[e] = i.apply(null, t), "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", {
                        detail: {
                            path: e,
                            module: n[e]
                        }
                    })))
                }
                e(n = n ? n._modules : {}, "Series/VariablePie/VariablePieSeries.js", [n["Core/Series/SeriesRegistry.js"], n["Core/Utilities.js"]], (function(n, e) {
                    var t = this && this.__extends || function() {
                            var n = function(e, t) {
                                return n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(n, e) {
                                    n.__proto__ = e
                                } || function(n, e) {
                                    for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t])
                                }, n(e, t)
                            };
                            return function(e, t) {
                                function i() {
                                    this.constructor = e
                                }
                                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
                            }
                        }(),
                        i = n.seriesTypes.pie,
                        r = e.arrayMax,
                        a = e.arrayMin,
                        o = e.clamp,
                        l = e.extend,
                        s = e.fireEvent,
                        c = e.merge,
                        d = e.pick;
                    return e = function(n) {
                        function e() {
                            var e = null !== n && n.apply(this, arguments) || this;
                            return e.data = void 0, e.options = void 0, e.points = void 0, e.radii = void 0, e
                        }
                        return t(e, n), e.prototype.calculateExtremes = function() {
                            var n = this.chart,
                                e = this.options,
                                t = this.zData,
                                i = Math.min(n.plotWidth, n.plotHeight) - 2 * (e.slicedOffset || 0),
                                l = {};
                            n = this.center || this.getCenter(), ["minPointSize", "maxPointSize"].forEach((function(n) {
                                var t = e[n],
                                    r = /%$/.test(t);
                                t = parseInt(t, 10), l[n] = r ? i * t / 100 : 2 * t
                            })), this.minPxSize = n[3] + l.minPointSize, this.maxPxSize = o(n[2], n[3] + l.minPointSize, l.maxPointSize), t.length && (n = d(e.zMin, a(t.filter(this.zValEval))), t = d(e.zMax, r(t.filter(this.zValEval))), this.getRadii(n, t, this.minPxSize, this.maxPxSize))
                        }, e.prototype.getRadii = function(n, e, t, i) {
                            for (var r = 0, a = this.zData, o = a.length, l = [], s = "radius" !== this.options.sizeBy, c = e - n; r < o; r++) {
                                var d = this.zValEval(a[r]) ? a[r] : n;
                                d <= n ? d = t / 2 : d >= e ? d = i / 2 : (d = 0 < c ? (d - n) / c : .5, s && (d = Math.sqrt(d)), d = Math.ceil(t + d * (i - t)) / 2), l.push(d)
                            }
                            this.radii = l
                        }, e.prototype.redraw = function() {
                            this.center = null, n.prototype.redraw.apply(this, arguments)
                        }, e.prototype.translate = function(n) {
                            this.generatePoints();
                            var e = 0,
                                t = this.options,
                                i = t.slicedOffset,
                                r = i + (t.borderWidth || 0),
                                a = t.startAngle || 0,
                                o = Math.PI / 180 * (a - 90),
                                l = Math.PI / 180 * (d(t.endAngle, a + 360) - 90);
                            a = l - o;
                            var c = this.points,
                                u = t.dataLabels.distance;
                            t = t.ignoreHiddenPoint;
                            var p = c.length;
                            for (this.startAngleRad = o, this.endAngleRad = l, this.calculateExtremes(), n || (this.center = n = this.getCenter()), l = 0; l < p; l++) {
                                var f = c[l],
                                    h = this.radii[l];
                                f.labelDistance = d(f.options.dataLabels && f.options.dataLabels.distance, u), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, f.labelDistance);
                                var m = o + e * a;
                                t && !f.visible || (e += f.percentage / 100);
                                var x = o + e * a;
                                f.shapeType = "arc", f.shapeArgs = {
                                    x: n[0],
                                    y: n[1],
                                    r: h,
                                    innerR: n[3] / 2,
                                    start: Math.round(1e3 * m) / 1e3,
                                    end: Math.round(1e3 * x) / 1e3
                                }, (m = (x + m) / 2) > 1.5 * Math.PI ? m -= 2 * Math.PI : m < -Math.PI / 2 && (m += 2 * Math.PI), f.slicedTranslation = {
                                    translateX: Math.round(Math.cos(m) * i),
                                    translateY: Math.round(Math.sin(m) * i)
                                };
                                var b = Math.cos(m) * n[2] / 2,
                                    g = Math.sin(m) * n[2] / 2;
                                x = Math.cos(m) * h, h *= Math.sin(m), f.tooltipPos = [n[0] + .7 * b, n[1] + .7 * g], f.half = m < -Math.PI / 2 || m > Math.PI / 2 ? 1 : 0, f.angle = m, b = Math.min(r, f.labelDistance / 5), f.labelPosition = {
                                    natural: {
                                        x: n[0] + x + Math.cos(m) * f.labelDistance,
                                        y: n[1] + h + Math.sin(m) * f.labelDistance
                                    },
                                    final: {},
                                    alignment: f.half ? "right" : "left",
                                    connectorPosition: {
                                        breakAt: {
                                            x: n[0] + x + Math.cos(m) * b,
                                            y: n[1] + h + Math.sin(m) * b
                                        },
                                        touchingSliceAt: {
                                            x: n[0] + x,
                                            y: n[1] + h
                                        }
                                    }
                                }
                            }
                            s(this, "afterTranslate")
                        }, e.prototype.zValEval = function(n) {
                            return "number" === typeof n && !isNaN(n) || null
                        }, e.defaultOptions = c(i.defaultOptions, {
                            minPointSize: "10%",
                            maxPointSize: "100%",
                            zMin: void 0,
                            zMax: void 0,
                            sizeBy: "area",
                            tooltip: {
                                pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}<br/>Value: {point.y}<br/>Size: {point.z}<br/>'
                            }
                        }), e
                    }(i), l(e.prototype, {
                        pointArrayMap: ["y", "z"],
                        parallelArrays: ["x", "y", "z"]
                    }), n.registerSeriesType("variablepie", e), e
                })), e(n, "masters/modules/variable-pie.src.js", [], (function() {}))
            }, n.exports ? (a.default = a, n.exports = a) : (i = [t(78840)], void 0 === (r = function(n) {
                return a(n), a.Highcharts = n, a
            }.apply(e, i)) || (n.exports = r))
        },
        55158: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/dashboard", function() {
                return t(7648)
            }])
        },
        8507: function(n, e, t) {
            "use strict";
            var i = t(85893),
                r = (t(67294), t(13137));

            function a() {
                var n, e, t = (n = ["\n  .ant-table {\n    background: transparent;\n    color: #ffffff;\n    font-size: 16px;\n  }\n  .ant-table-thead > tr > th {\n    background: transparent;\n    color: #919eab;\n    font-size: 16px;\n    font-weight: 600;\n  }\n  .ant-table-tbody > tr.ant-table-row:hover > td,\n  .ant-table-tbody > tr > td.ant-table-cell-row-hover {\n    background: transparent;\n  }\n\n  .ant-table-tbody > tr > td {\n    border: none;\n  }\n\n  .ant-table-thead > tr > th {\n    border-bottom: 1px solid #34384c;\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return a = function() {
                    return t
                }, t
            }
            var o = t(186).ZP.div.withConfig({
                componentId: "sc-cc8f32d0-0"
            })(a());
            e.Z = function(n) {
                var e = n.columns,
                    t = n.dataSource;
                return (0, i.jsx)(o, {
                    children: (0, i.jsx)(r.Z, {
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
        7648: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                TAB_OPTION: function() {
                    return A
                },
                default: function() {
                    return _
                }
            });
            var i = t(85893),
                r = t(77044),
                a = t(71230),
                o = t(15746),
                l = t(67294),
                s = t(78840),
                c = t.n(s),
                d = t(75708),
                u = t.n(d),
                p = t(65705),
                f = t.n(p),
                h = t(81313);

            function m(n, e) {
                if (null == n) return {};
                var t, i, r = function(n, e) {
                    if (null == n) return {};
                    var t, i, r = {},
                        a = Object.keys(n);
                    for (i = 0; i < a.length; i++) t = a[i], e.indexOf(t) >= 0 || (r[t] = n[t]);
                    return r
                }(n, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(n);
                    for (i = 0; i < a.length; i++) t = a[i], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (r[t] = n[t])
                }
                return r
            }
            "object" === typeof c() && f()(c());
            var x = function(n) {
                    var e = n.height,
                        t = void 0 === e ? "300px" : e,
                        r = n.data,
                        a = void 0 === r ? [] : r,
                        o = (m(n, ["height", "data"]), (0, l.useRef)()),
                        s = {
                            chart: {
                                type: "variablepie",
                                backgroundColor: "transparent",
                                plotShadow: !1,
                                plotBorderWidth: null
                            },
                            title: {
                                text: ""
                            },
                            tooltip: {
                                headerFormat: "",
                                pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {point.name}</b> <b>${point.y}</b><br/>'
                            },
                            plotOptions: {
                                variablepie: {
                                    allowPointSelect: !0,
                                    cursor: "pointer",
                                    dataLabels: {
                                        enabled: !1
                                    },
                                    showInLegend: !1
                                }
                            },
                            series: [{
                                minPointSize: 10,
                                innerSize: "50%",
                                zMin: 0,
                                name: "countries",
                                data: a.map((function(n, e) {
                                    return {
                                        name: n.tokenSymbol,
                                        y: n.value,
                                        z: 200 - 30 * e
                                    }
                                }))
                            }],
                            credits: {
                                enabled: !1
                            },
                            colors: h.ZE
                        };
                    return (0, i.jsx)("div", {
                        children: (0, i.jsx)(u(), {
                            ref: o,
                            highcharts: c(),
                            options: s,
                            containerProps: {
                                style: {
                                    height: t
                                }
                            }
                        })
                    })
                },
                b = t(8507),
                g = t(11163),
                v = t(25617),
                y = t(186),
                j = t(11156),
                w = t(67383),
                k = t(9439),
                z = t(68743);

            function S(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function P(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function O() {
                var n = P(["\n  /* background: #101724; */\n  padding-bottom: 2rem;\n\n  /* @media (min-width: 1024px) { */\n  padding-left: 24px;\n  padding-right: 24px;\n  /* } */\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    @media (min-width: 1024px) {\n      padding-left: 2rem;\n      padding-right: 2rem;\n    }\n  }\n\n  .section-title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: #ffffff;\n\n    @media (min-width: 991px) {\n      font-size: 32px;\n      line-height: 48px;\n    }\n  }\n\n  div {\n    &.blinking {\n      @media (min-width: 991px) {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 37%;\n        height: 73%;\n        animation: 5s ease 0s infinite normal none running blinking;\n        background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n        border-radius: 87px;\n        transform: rotate(25.82deg);\n      }\n    }\n  }\n\n  .section-container {\n    background: #000000;\n    margin-top: 1.5rem;\n    border-radius: 24px;\n  }\n\n  .section-1 {\n    /* @media (min-width: 991px) {\n      padding: 120px 0 30px 0;\n    } */\n\n    .content-left {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .section-title {\n        margin-bottom: 20px;\n      }\n\n      p {\n        font-weight: 700;\n        font-size: 14px;\n        line-height: 150%;\n        text-transform: uppercase;\n\n        background: linear-gradient(249.52deg, #00ffa3 2.69%, #dc1fff 122.97%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n        text-fill-color: transparent;\n      }\n    }\n\n    .content-right {\n      display: flex;\n      justify-content: end;\n      .wrap-image {\n        max-width: 350px;\n        position: relative;\n\n        @media (min-width: 991px) {\n          top: -20px;\n        }\n\n        img {\n          &:not(.background) {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          &.background {\n            width: 100%;\n            opacity: 0;\n          }\n\n          &.bg {\n            width: 53%;\n          }\n\n          &.bg-linear {\n            width: 75%;\n            animation: linerShowHide 5s infinite;\n          }\n\n          &.animal {\n            top: 53%;\n            width: 45%;\n            left: 56%;\n            z-index: 2;\n          }\n\n          &.coin-1 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(-233%, -269%);\n            --transformX: -233%;\n            --transformY: -269%;\n            animation: upAndDown 5s infinite;\n          }\n\n          &.coin-2 {\n            width: 28%;\n            z-index: 2;\n            transform: translate(94%, -85%);\n            --transformX: 94%;\n            --transformY: -85%;\n            animation: upAndDown 2s infinite;\n          }\n\n          &.coin-3 {\n            width: 22%;\n            z-index: 2;\n            transform: translate(-175%, 23%);\n            --transformX: -175%;\n            --transformY: 23%;\n            animation: upAndDown 10s infinite;\n          }\n\n          &.coin-4 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(153%, 123%);\n            --transformX: 153%;\n            --transformY: 123%;\n            animation: upAndDown 3s infinite;\n          }\n\n          &.elip-1 {\n            width: 90%;\n            transform: translate(-50%, -40%);\n          }\n\n          &.elip-2 {\n            width: 90%;\n            transform: translate(-50%, -60%);\n          }\n        }\n      }\n    }\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"]);
                return O = function() {
                    return n
                }, n
            }

            function M() {
                var n = P(["\n  text-align: center;\n\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  padding: 0 8px 40px;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  z-index: 1;\n\n  .empty-text {\n    color: #5f440f91;\n    font-family: iCiel Cadena;\n    font-size: 5vw;\n    font-weight: 900;\n    white-space: nowrap;\n\n    ", " {\n      font-size: 3vw;\n    }\n  }\n\n  button {\n    margin-top: 28px;\n    border-radius: 13px;\n  }\n"]);
                return M = function() {
                    return n
                }, n
            }
            var C = y.ZP.div.withConfig({
                    componentId: "sc-16eb4b40-0"
                })(O()),
                A = (y.ZP.div.withConfig({
                    componentId: "sc-16eb4b40-1"
                })(M(), (function(n) {
                    return n.theme.mediaQueries.md
                })), [{
                    label: "All",
                    value: "all"
                }, {
                    label: "Live",
                    value: "live"
                }, {
                    label: "Finished",
                    value: "finished"
                }, {
                    label: "Participated",
                    value: "participated"
                }]),
                I = [{
                    label: "Daily",
                    value: "1-week"
                }, {
                    label: "Weekly",
                    value: "1-month"
                }, {
                    label: "Monthly",
                    value: "1-year"
                }],
                E = function(n) {
                    var e = n.color,
                        t = n.data;
                    return (0, i.jsxs)(w.kC, {
                        alignItems: "center",
                        children: [(0, i.jsx)(w.xu, {
                            height: "13px",
                            width: "27px",
                            background: e,
                            borderRadius: "100px"
                        }), (0, i.jsx)(w.xv, {
                            bold: !0,
                            fontSize: "18px",
                            ml: "1rem",
                            children: t.tokenSymbol
                        })]
                    })
                },
                _ = function() {
                    var n = (0, g.useRouter)(),
                        e = (0, l.useState)(I[0].value),
                        t = (e[0], e[1], (0, r.Ge)().account),
                        s = (0, v.v9)((function(n) {
                            return n.balances.balances
                        })),
                        c = (I.map((function(n) {
                            return {
                                value: n.value,
                                label: (0, i.jsx)(w.xv, {
                                    ml: "8px",
                                    children: n.label
                                })
                            }
                        })), (0, l.useMemo)((function() {
                            return (s.data || []).filter((function(n) {
                                return n.balance && n.value
                            })).sort((function(n, e) {
                                return n.balance > e.balance ? -1 : 1
                            }))
                        }), [s.data])),
                        d = (0, l.useMemo)((function() {
                            return s.data.reduce((function(n, e) {
                                var t = function(n) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var t = null != arguments[e] ? arguments[e] : {},
                                            i = Object.keys(t);
                                        "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                                        })))), i.forEach((function(e) {
                                            S(n, e, t[e])
                                        }))
                                    }
                                    return n
                                }({}, n);
                                return t.totalBalance = (t.totalBalance || 0) + e.value, t.totalChange = (t.totalChange || 0) + (e.value ? (e.priceChangePercentage || 0) * e.value / 100 : 0), t.balanceRef = t.balanceRef || {}, t.balanceRef[e.tokenSymbol] = e, t
                            }), {})
                        }), [s.data]),
                        u = d.totalBalance,
                        p = d.totalChange,
                        f = (d.balanceRef, t && "".concat(t.substring(0, 4), "...").concat(t.substring(t.length - 4)), p >= 0);
                    return (0, i.jsxs)(C, {
                        children: [(0, i.jsx)("section", {
                            className: "section-container section-1",
                            style: {
                                marginTop: 0
                            },
                            children: (0, i.jsx)("div", {
                                className: "container",
                                children: (0, i.jsxs)(a.Z, {
                                    gutter: 24,
                                    children: [(0, i.jsx)(o.Z, {
                                        span: 24,
                                        lg: {
                                            span: 12
                                        },
                                        children: (0, i.jsxs)("div", {
                                            className: "content-left",
                                            children: [(0, i.jsx)("p", {
                                                children: "web3.0 wallet application"
                                            }), (0, i.jsx)("h1", {
                                                className: "section-title",
                                                children: "Assign Expert To Manage Portfolio"
                                            }), (0, i.jsx)(w.kC, {
                                                children: (0, i.jsx)(k.Z, {
                                                    onClick: function() {
                                                        n.push({
                                                            pathname: "/exchange"
                                                        })
                                                    },
                                                    children: "Exchange"
                                                })
                                            })]
                                        })
                                    }), (0, i.jsx)(o.Z, {
                                        span: 24,
                                        lg: {
                                            span: 12
                                        },
                                        children: (0, i.jsx)("div", {
                                            className: "content-right",
                                            children: (0, i.jsxs)("div", {
                                                className: "wrap-image",
                                                children: [(0, i.jsx)("img", {
                                                    className: "background",
                                                    src: "/images/section-1/bg-transparent.png",
                                                    alt: ""
                                                }), (0, i.jsx)("img", {
                                                    className: "bg-linear",
                                                    src: "/images/section-1/bg-linear.png",
                                                    alt: ""
                                                }), (0, i.jsx)("img", {
                                                    className: "coin-2",
                                                    src: "/images/section-1/coin-2.1.png",
                                                    alt: ""
                                                }), (0, i.jsx)("img", {
                                                    className: "coin-3",
                                                    src: "/images/section-1/coin-3.1.png",
                                                    alt: ""
                                                }), (0, i.jsx)("img", {
                                                    className: "animal",
                                                    src: "/images/section-1/animal-2.png",
                                                    alt: ""
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        }), (0, i.jsx)("section", {
                            className: "section-container",
                            children: (0, i.jsxs)("div", {
                                className: "container",
                                children: [(0, i.jsx)(w.kC, {
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    display: ["block", "block", "flex", "flex"],
                                    children: (0, i.jsx)(w.xv, {
                                        bold: !0,
                                        fontSize: "24px",
                                        children: "Portfolio Overview"
                                    })
                                }), (0, i.jsx)(w.xu, {
                                    mt: "2rem",
                                    children: (0, i.jsxs)(a.Z, {
                                        children: [(0, i.jsx)(o.Z, {
                                            span: 24,
                                            lg: {
                                                span: 12
                                            },
                                            children: (0, i.jsxs)(w.xu, {
                                                position: "relative",
                                                children: [(0, i.jsx)(w.xu, {
                                                    position: "relative",
                                                    zIndex: "1",
                                                    children: (0, i.jsx)(x, {
                                                        data: c
                                                    })
                                                }), (0, i.jsx)("img", {
                                                    src: "/images/chart/head-mask.png",
                                                    alt: "",
                                                    width: "20%",
                                                    style: {
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform: "translate(-50%, -50%)",
                                                        zIndex: 0
                                                    }
                                                })]
                                            })
                                        }), (0, i.jsxs)(o.Z, {
                                            span: 24,
                                            lg: {
                                                span: 12
                                            },
                                            children: [(0, i.jsx)(w.xv, {
                                                children: "Total balance:"
                                            }), (0, i.jsxs)(w.kC, {
                                                alignItems: "center",
                                                mt: "1rem",
                                                children: [(0, i.jsxs)(w.xv, {
                                                    color: "#01FFA3",
                                                    bold: !0,
                                                    fontSize: "24px",
                                                    children: ["$", (0, j.Yk)(u)]
                                                }), (0, i.jsxs)(w.kC, {
                                                    ml: "2rem",
                                                    alignItems: "center",
                                                    children: [(0, i.jsx)(z.Z, {
                                                        className: f ? "rotate" : "",
                                                        fill: f ? "#00E39A" : "#FF4842"
                                                    }), (0, i.jsxs)(w.xv, {
                                                        bold: !0,
                                                        fontSize: "12px",
                                                        pl: "0.25rem",
                                                        children: ["$", (0, j.Yk)(Math.abs(p)), " (", (0, j.Yk)(Math.abs(p / (u - p) * 100)), "%)"]
                                                    })]
                                                })]
                                            }), (0, i.jsx)(w.xu, {
                                                mt: "2rem",
                                                children: (0, i.jsx)(a.Z, {
                                                    gutter: 12,
                                                    children: c.map((function(n, e) {
                                                        return (0, i.jsx)(o.Z, {
                                                            span: 24,
                                                            lg: {
                                                                span: 12
                                                            },
                                                            children: (0, i.jsx)(E, {
                                                                color: h.ZE[e % h.ZE.length],
                                                                data: n
                                                            })
                                                        }, e)
                                                    }))
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), (0, i.jsxs)("section", {
                            style: {
                                marginTop: "1rem"
                            },
                            children: [(0, i.jsx)(w.xv, {
                                bold: !0,
                                fontSize: "24px",
                                children: "My Portfolio"
                            }), (0, i.jsx)(b.Z, {
                                dataSource: (null === s || void 0 === s ? void 0 : s.data) || [],
                                columns: [{
                                    title: "Coin",
                                    dataIndex: "Coin",
                                    key: "Coin",
                                    render: function(n, e) {
                                        return (0, i.jsxs)(w.kC, {
                                            alignItems: "center",
                                            children: [(0, i.jsx)("img", {
                                                src: e.icon || "/images/none_logo.png",
                                                width: "49",
                                                alt: ""
                                            }), (0, i.jsxs)(w.xu, {
                                                ml: "0.5rem",
                                                children: [(0, i.jsxs)(w.kC, {
                                                    children: [(0, i.jsx)(w.xv, {
                                                        bold: !0,
                                                        fontSize: "18px",
                                                        children: e.tokenSymbol
                                                    }), (0, i.jsx)(w.xv, {
                                                        bold: !0,
                                                        fontSize: "18px",
                                                        color: "secondary",
                                                        children: "/USDT"
                                                    })]
                                                }), (0, i.jsx)(w.xv, {
                                                    small: !0,
                                                    children: e.tokenName
                                                })]
                                            })]
                                        })
                                    }
                                }, {
                                    title: "Value",
                                    dataIndex: "Value",
                                    key: "Value",
                                    align: "right",
                                    render: function(n, e) {
                                        return (0, i.jsxs)(w.xv, {
                                            bold: !0,
                                            fontSize: "18px",
                                            children: ["$", (0, j.Yk)(null === e || void 0 === e ? void 0 : e.value)]
                                        })
                                    }
                                }, {
                                    title: "Current price",
                                    dataIndex: "price",
                                    key: "price",
                                    align: "right",
                                    render: function(n, e) {
                                        var t = (null === e || void 0 === e ? void 0 : e.priceChange) ? (null === e || void 0 === e ? void 0 : e.priceChange) > 0 : null;
                                        return (0, i.jsxs)(w.kC, {
                                            flexDirection: "column",
                                            alignItems: "end",
                                            children: [(0, i.jsx)(w.xv, {
                                                bold: !0,
                                                fontSize: "18px",
                                                children: e.price ? "$".concat((0, j.Yk)(e.price)) : "-"
                                            }), null !== t && (0, i.jsxs)(w.kC, {
                                                children: [(0, i.jsx)(z.Z, {
                                                    fill: t ? "#00E39A" : "#FF4842",
                                                    className: t ? "rotate" : ""
                                                }), (0, i.jsxs)(w.xv, {
                                                    color: t ? "buy" : "sell",
                                                    ml: "0.25rem",
                                                    fontSize: "12px",
                                                    nowrap: !0,
                                                    children: ["$", Math.abs((0, j.Yk)(null === e || void 0 === e ? void 0 : e.priceChange)), " (", Math.abs((0, j.Yk)(null === e || void 0 === e ? void 0 : e.priceChangePercentage)), "%)"]
                                                })]
                                            })]
                                        })
                                    }
                                }, {
                                    title: "Amount",
                                    dataIndex: "Amount",
                                    key: "Amount",
                                    align: "right",
                                    render: function(n, e) {
                                        return (0, i.jsx)(w.xv, {
                                            bold: !0,
                                            fontSize: "18px",
                                            children: (0, j.Yk)(null === e || void 0 === e ? void 0 : e.balance)
                                        })
                                    }
                                }, {
                                    title: "Action",
                                    dataIndex: "Action",
                                    key: "Action",
                                    render: function(e, t) {
                                        return (0, i.jsxs)(w.kC, {
                                            children: [(0, i.jsx)(w.xu, {
                                                children: (0, i.jsx)(k.Z, {
                                                    background: "#00E39A",
                                                    borderRadius: "5px",
                                                    width: "107px",
                                                    onClick: function() {
                                                        n.push({
                                                            pathname: "/deposit",
                                                            query: {
                                                                token: null === t || void 0 === t ? void 0 : t.tokenSymbol
                                                            }
                                                        })
                                                    },
                                                    children: (0, i.jsxs)(w.kC, {
                                                        alignItems: "center",
                                                        children: [(0, i.jsx)(w.xu, {
                                                            children: (0, i.jsx)("img", {
                                                                src: "/images/icons/deposit.png",
                                                                alt: ""
                                                            })
                                                        }), (0, i.jsx)(w.xv, {
                                                            pl: "0.5rem",
                                                            bold: !0,
                                                            small: !0,
                                                            children: "Deposit"
                                                        })]
                                                    })
                                                })
                                            }), (0, i.jsx)(w.xu, {
                                                ml: "0.5rem",
                                                children: (0, i.jsx)(k.Z, {
                                                    background: "#232323",
                                                    borderRadius: "5px",
                                                    width: "107px",
                                                    onClick: function() {
                                                        n.push({
                                                            pathname: "/withdraw",
                                                            query: {
                                                                token: null === t || void 0 === t ? void 0 : t.tokenSymbol
                                                            }
                                                        })
                                                    },
                                                    children: (0, i.jsxs)(w.kC, {
                                                        alignItems: "center",
                                                        children: [(0, i.jsx)(w.xu, {
                                                            className: "rotate",
                                                            children: (0, i.jsx)("img", {
                                                                src: "/images/icons/deposit.png",
                                                                alt: ""
                                                            })
                                                        }), (0, i.jsx)(w.xv, {
                                                            pl: "0.5rem",
                                                            bold: !0,
                                                            small: !0,
                                                            children: "Withdraw"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    }
                                }]
                            })]
                        })]
                    })
                }
        }
    },
    function(n) {
        n.O(0, [6898, 6395, 2687, 9774, 2888, 179], (function() {
            return e = 55158, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);
//# sourceMappingURL=dashboard-c711bed5ad2737cd.js.map