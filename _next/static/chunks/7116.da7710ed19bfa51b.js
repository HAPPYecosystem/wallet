"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7116], {
        7116: function(n, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return w
                }
            });
            var e = r(85893),
                i = r(67294),
                o = function(n) {
                    (0, i.useEffect)((function() {
                        var t = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"],
                            r = 0,
                            e = function(e) {
                                e.key === t[r] ? t.length === (r += 1) && (r = 0, n()) : r = 0
                            };
                        return document.addEventListener("keyup", e),
                            function() {
                                return document.removeEventListener("keyup", e)
                            }
                    }), [n])
                },
                a = r(186),
                u = r(7233);

            function c(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var r = 0, e = new Array(t); r < t; r++) e[r] = n[r];
                return e
            }

            function f(n, t) {
                return t || (t = n.slice(0)), Object.freeze(Object.defineProperties(n, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function l(n) {
                return function(n) {
                    if (Array.isArray(n)) return c(n)
                }(n) || function(n) {
                    if ("undefined" !== typeof Symbol && null != n[Symbol.iterator] || null != n["@@iterator"]) return Array.from(n)
                }(n) || function(n, t) {
                    if (!n) return;
                    if ("string" === typeof n) return c(n, t);
                    var r = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === r && n.constructor && (r = n.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(n, t)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s() {
                var n = f(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"]);
                return s = function() {
                    return n
                }, n
            }

            function d() {
                var n = f(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"]);
                return d = function() {
                    return n
                }, n
            }
            var m = (0, a.F4)(s()),
                v = a.ZP.div.withConfig({
                    componentId: "sc-5643275b-0"
                })(d(), (function(n) {
                    var t = n.position;
                    return "".concat(t, "vw")
                }), m, (function(n) {
                    var t = n.duration;
                    return "".concat(t, "s")
                }), (function(n) {
                    var t = n.iterations;
                    return Number.isFinite(t) ? String(t) : "infinite"
                }), (function(n) {
                    var t = n.duration;
                    return "".concat(t / 10 * 1.3, "s")
                }), (function(n) {
                    var t = n.duration;
                    return "".concat(t / 10 * 1.5, "s")
                }), (function(n) {
                    var t = n.duration;
                    return "".concat(t / 10 * 1.7, "s")
                }), (function(n) {
                    var t = n.duration;
                    return "".concat(t / 10 * 2.7, "s")
                }), (function(n) {
                    var t = n.duration;
                    return "".concat(t / 10 * 3.5, "s")
                }), (function(n) {
                    var t = n.duration;
                    return "".concat(t / 10 * 5.5, "s")
                }), (function(n) {
                    var t = n.duration;
                    return "".concat(t / 10 * 8, "s")
                })),
                y = function(n) {
                    var t = n.count,
                        r = void 0 === t ? 30 : t,
                        i = n.size,
                        o = void 0 === i ? 32 : i,
                        a = n.iterations,
                        c = void 0 === a ? 1 / 0 : a,
                        f = n.duration,
                        s = void 0 === f ? 10 : f,
                        d = l(Array(r)).map((function(n, t) {
                            return (0, e.jsx)(v, {
                                position: 100 * Math.random(),
                                iterations: c,
                                duration: s,
                                children: (0, e.jsx)(u.Z, {
                                    width: o,
                                    height: o
                                })
                            }, String(t))
                        }));
                    return (0, e.jsx)("div", {
                        children: d
                    })
                };

            function h(n, t, r) {
                return t in n ? Object.defineProperty(n, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = r, n
            }

            function p(n) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        e = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter((function(n) {
                        return Object.getOwnPropertyDescriptor(r, n).enumerable
                    })))), e.forEach((function(t) {
                        h(n, t, r[t])
                    }))
                }
                return n
            }
            var b = function(n) {
                    var t = (0, i.useState)(!1),
                        r = t[0],
                        a = t[1],
                        u = (0, i.useCallback)((function() {
                            return a(!0)
                        }), [a]);
                    return o(u), r ? (0, e.jsx)("div", {
                        onAnimationEnd: function() {
                            return a(!1)
                        },
                        children: (0, e.jsx)(y, p({}, n))
                    }) : null
                },
                w = (0, i.memo)(b)
        }
    }
]);
//# sourceMappingURL=7116.da7710ed19bfa51b.js.map