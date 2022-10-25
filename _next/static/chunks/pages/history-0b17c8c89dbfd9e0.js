(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8276], {
        72727: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/history", function() {
                return t(17957)
            }])
        },
        12667: function(n, e, t) {
            "use strict";
            var r = t(85893),
                i = t(77044),
                o = t(8507),
                a = t(27484),
                l = t.n(a),
                c = t(67294),
                s = t(11156),
                u = t(67383),
                d = t(9439),
                f = t(84110),
                p = t.n(f),
                m = t(25617),
                h = t(81313);

            function b(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            l().extend(p()), e.Z = function(n) {
                var e = n.columns,
                    t = void 0 === e ? null : e,
                    a = n.limit,
                    f = void 0 === a ? 1e3 : a,
                    p = (0, m.v9)((function(n) {
                        return n.balanceTransactions.txHistory
                    })).data,
                    x = (0, i.Ge)().account,
                    g = (0, m.v9)((function(n) {
                        return n.balances.balances
                    })),
                    w = (0, c.useMemo)((function() {
                        return g.data.reduce((function(n, e) {
                            return function(n) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = null != arguments[e] ? arguments[e] : {},
                                        r = Object.keys(t);
                                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                                    })))), r.forEach((function(e) {
                                        b(n, e, t[e])
                                    }))
                                }
                                return n
                            }({}, n, b({}, e.tokenSymbol, e))
                        }), {})
                    }), [g.data]);
                return (0, r.jsx)(o.Z, {
                    dataSource: p.slice(0, f).map((function(n, e) {
                        var t = (0, s.VQ)(n.from, n.to, x);
                        return {
                            key: e,
                            time: l().unix(n.timeStamp).fromNow(),
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
                                    src: (null === (e = w[n]) || void 0 === e ? void 0 : e.icon) || "/images/none_logo.png",
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
        4887: function(n, e, t) {
            "use strict";
            var r = t(85893),
                i = t(67294),
                o = t(56793),
                a = t(74225),
                l = t(96486),
                c = t(186);

            function s(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function u(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    })))), r.forEach((function(e) {
                        s(n, e, t[e])
                    }))
                }
                return n
            }

            function d(n, e) {
                if (null == n) return {};
                var t, r, i = function(n, e) {
                    if (null == n) return {};
                    var t, r, i = {},
                        o = Object.keys(n);
                    for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || (i[t] = n[t]);
                    return i
                }(n, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t])
                }
                return i
            }

            function f() {
                var n, e, t = (n = ["\n  width: 100%;\n  max-width: ", ";\n  margin-left: auto;\n  margin-bottom: 0;\n\n  .ant-select {\n    color: #fff;\n  }\n\n  .ant-select:not(.ant-select-customize-input) .ant-select-selector,\n  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {\n    height: 100%;\n    height: 40px;\n\n    padding: 4px 12px;\n    background: ", ";\n    border: ", ";\n    border-radius: 8px;\n  }\n\n  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {\n    height: 100%;\n    height: 40px;\n  }\n  .ant-select-selection-item {\n    line-height: 32px;\n    display: flex;\n    align-items: center;\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return f = function() {
                    return t
                }, t
            }
            var p = o.Z.Item,
                m = a.Z.Option,
                h = (0, c.ZP)(p).withConfig({
                    componentId: "sc-8172beab-0"
                })(f(), (function(n) {
                    return n.maxWidth || "160px"
                }), (function(n) {
                    return n.background || "transparent"
                }), (function(n) {
                    return n.border || "1px solid #3d424c"
                }));
            e.Z = function(n) {
                var e = (0, i.useState)(!1),
                    t = (e[0], e[1], n.name),
                    o = void 0 === t ? "" : t,
                    c = n.label,
                    s = void 0 === c ? "" : c,
                    f = n.rules,
                    p = void 0 === f ? [] : f,
                    b = n.options,
                    x = void 0 === b ? [] : b,
                    g = n.optionProps,
                    w = void 0 === g ? {} : g,
                    v = n.formItemProps,
                    y = void 0 === v ? {} : v,
                    j = n.showSearch,
                    k = void 0 === j || j,
                    O = n.allowClear,
                    P = void 0 !== O && O,
                    S = n.className,
                    z = void 0 === S ? "" : S,
                    I = n.placeholder,
                    C = void 0 === I ? "All" : I,
                    Z = d(n, ["name", "label", "rules", "options", "optionProps", "formItemProps", "showSearch", "allowClear", "className", "placeholder"]),
                    _ = (0, i.useMemo)((function() {
                        return x && (0, l.get)(x, "length") > 0 ? (0, l.map)(x, (function(n, e) {
                            return (0, i.createElement)(m, u({}, w, {
                                key: "select-".concat(o, "-").concat(e),
                                value: (0, l.get)(n, "value")
                            }), (0, l.get)(n, "label"))
                        })) : (0, r.jsx)(r.Fragment, {})
                    }), [x, o, w]);
                return (0, r.jsx)(h, u({
                    name: o,
                    label: s,
                    rules: p
                }, y, {
                    children: (0, r.jsx)(a.Z, u({
                        suffixIcon: (0, r.jsx)("img", {
                            alt: "",
                            src: "/images/icons/arrow-up.png"
                        }),
                        allowClear: P,
                        showSearch: k,
                        placeholder: C,
                        optionFilterProp: "children",
                        className: "form-select ".concat(z),
                        showArrow: !0
                    }, Z, {
                        children: _
                    }))
                }))
            }
        },
        8507: function(n, e, t) {
            "use strict";
            var r = t(85893),
                i = (t(67294), t(13137));

            function o() {
                var n, e, t = (n = ["\n  .ant-table {\n    background: transparent;\n    color: #ffffff;\n    font-size: 16px;\n  }\n  .ant-table-thead > tr > th {\n    background: transparent;\n    color: #919eab;\n    font-size: 16px;\n    font-weight: 600;\n  }\n  .ant-table-tbody > tr.ant-table-row:hover > td,\n  .ant-table-tbody > tr > td.ant-table-cell-row-hover {\n    background: transparent;\n  }\n\n  .ant-table-tbody > tr > td {\n    border: none;\n  }\n\n  .ant-table-thead > tr > th {\n    border-bottom: 1px solid #34384c;\n  }\n"], e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                })));
                return o = function() {
                    return t
                }, t
            }
            var a = t(186).ZP.div.withConfig({
                componentId: "sc-cc8f32d0-0"
            })(o());
            e.Z = function(n) {
                var e = n.columns,
                    t = n.dataSource;
                return (0, r.jsx)(a, {
                    children: (0, r.jsx)(i.Z, {
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
        17957: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                TAB_OPTION: function() {
                    return w
                }
            });
            var r = t(85893),
                i = t(77044),
                o = t(12667),
                a = t(27484),
                l = t.n(a),
                c = t(84110),
                s = t.n(c),
                u = t(67294),
                d = t(186),
                f = t(67383),
                p = t(4887);

            function m(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function h(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }

            function b() {
                var n = h(["\n  /* background: #101724; */\n  padding-bottom: 2rem;\n  padding-left: 24px;\n  padding-right: 24px;\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    @media (min-width: 1024px) {\n      padding-left: 2rem;\n      padding-right: 2rem;\n    }\n  }\n\n  .section-title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: #ffffff;\n\n    @media (min-width: 991px) {\n      font-size: 32px;\n      line-height: 48px;\n    }\n  }\n\n  div {\n    &.blinking {\n      @media (min-width: 991px) {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 37%;\n        height: 73%;\n        animation: 5s ease 0s infinite normal none running blinking;\n        background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n        border-radius: 87px;\n        transform: rotate(25.82deg);\n      }\n    }\n  }\n\n  .section-container {\n    background: #000000;\n    margin-top: 1.5rem;\n    border-radius: 24px;\n  }\n\n  .section-1 {\n    /* @media (min-width: 991px) {\n      padding: 120px 0 30px 0;\n    } */\n\n    .content-left {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .section-title {\n        margin-bottom: 20px;\n      }\n\n      p {\n        font-weight: 700;\n        font-size: 14px;\n        line-height: 150%;\n        text-transform: uppercase;\n\n        background: linear-gradient(249.52deg, #00ffa3 2.69%, #dc1fff 122.97%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n        text-fill-color: transparent;\n      }\n    }\n\n    .content-right {\n      display: flex;\n      justify-content: end;\n      .wrap-image {\n        max-width: 350px;\n        position: relative;\n\n        @media (min-width: 991px) {\n          top: -20px;\n        }\n\n        img {\n          &:not(.background) {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          &.background {\n            width: 100%;\n            opacity: 0;\n          }\n\n          &.bg {\n            width: 53%;\n          }\n\n          &.bg-linear {\n            width: 75%;\n            animation: linerShowHide 5s infinite;\n          }\n\n          &.animal {\n            top: 53%;\n            width: 45%;\n            left: 56%;\n            z-index: 2;\n          }\n\n          &.coin-1 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(-233%, -269%);\n            --transformX: -233%;\n            --transformY: -269%;\n            animation: upAndDown 5s infinite;\n          }\n\n          &.coin-2 {\n            width: 28%;\n            z-index: 2;\n            transform: translate(94%, -85%);\n            --transformX: 94%;\n            --transformY: -85%;\n            animation: upAndDown 2s infinite;\n          }\n\n          &.coin-3 {\n            width: 22%;\n            z-index: 2;\n            transform: translate(-175%, 23%);\n            --transformX: -175%;\n            --transformY: 23%;\n            animation: upAndDown 10s infinite;\n          }\n\n          &.coin-4 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(153%, 123%);\n            --transformX: 153%;\n            --transformY: 123%;\n            animation: upAndDown 3s infinite;\n          }\n\n          &.elip-1 {\n            width: 90%;\n            transform: translate(-50%, -40%);\n          }\n\n          &.elip-2 {\n            width: 90%;\n            transform: translate(-50%, -60%);\n          }\n        }\n      }\n    }\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"]);
                return b = function() {
                    return n
                }, n
            }

            function x() {
                var n = h(["\n  text-align: center;\n\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  padding: 0 8px 40px;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  z-index: 1;\n\n  .empty-text {\n    color: #5f440f91;\n    font-family: iCiel Cadena;\n    font-size: 5vw;\n    font-weight: 900;\n    white-space: nowrap;\n\n    ", " {\n      font-size: 3vw;\n    }\n  }\n\n  button {\n    margin-top: 28px;\n    border-radius: 13px;\n  }\n"]);
                return x = function() {
                    return n
                }, n
            }
            l().extend(s());
            var g = d.ZP.div.withConfig({
                    componentId: "sc-25ff05dd-0"
                })(b()),
                w = (d.ZP.div.withConfig({
                    componentId: "sc-25ff05dd-1"
                })(x(), (function(n) {
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
                v = [{
                    label: "All",
                    value: "all"
                }];
            e.default = function() {
                var n = (0, u.useState)(v[0].value),
                    e = (n[0], n[1]),
                    t = (0, i.Ge)().account,
                    a = (0, u.useState)({
                        module: "account",
                        action: "tokentx",
                        page: 1,
                        offset: 10,
                        address: void 0,
                        startblock: 0,
                        sort: "desc"
                    }),
                    l = (a[0], a[1]);
                (0, u.useEffect)((function() {
                    t && l((function(n) {
                        return function(n) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = null != arguments[e] ? arguments[e] : {},
                                    r = Object.keys(t);
                                "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(n) {
                                    return Object.getOwnPropertyDescriptor(t, n).enumerable
                                })))), r.forEach((function(e) {
                                    m(n, e, t[e])
                                }))
                            }
                            return n
                        }({}, n, {
                            address: t
                        })
                    }))
                }), [t]);
                var c = v.map((function(n) {
                    return {
                        value: n.value,
                        label: (0, r.jsx)(f.xv, {
                            ml: "8px",
                            children: n.label
                        })
                    }
                }));
                return (0, r.jsx)(g, {
                    children: (0, r.jsxs)("section", {
                        style: {
                            marginTop: "1rem"
                        },
                        children: [(0, r.jsxs)(f.kC, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [(0, r.jsx)(f.xv, {
                                bold: !0,
                                fontSize: "24px",
                                children: "History"
                            }), (0, r.jsx)(f.kC, {
                                flex: 1,
                                justifyContent: "end",
                                children: (0, r.jsx)(p.Z, {
                                    options: c,
                                    onChange: function(n) {
                                        return e(n)
                                    },
                                    defaultValue: c[0]
                                })
                            })]
                        }), (0, r.jsx)(o.Z, {})]
                    })
                })
            }
        }
    },
    function(n) {
        n.O(0, [3662, 6395, 2687, 6793, 9774, 2888, 179], (function() {
            return e = 72727, n(n.s = e);
            var e
        }));
        var e = n.O();
        _N_E = e
    }
]);
//# sourceMappingURL=history-0b17c8c89dbfd9e0.js.map