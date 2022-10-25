(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2571], {
        40153: function(n, u, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/exchange", function() {
                return t(10683)
            }])
        },
        10683: function(n, u, t) {
            "use strict";
            t.r(u), t.d(u, {
                __N_SSG: function() {
                    return o
                }
            });
            var e = t(85893),
                r = t(8100),
                a = t(51136),
                s = t(11163),
                o = !0;
            u.default = function(n) {
                var u = n.totalTx30Days,
                    t = n.addressCount30Days,
                    o = n.tvl,
                    l = (0, s.useRouter)(),
                    _ = ((null === l || void 0 === l ? void 0 : l.query) || {}).outputCurrency;
                return l.isReady ? (0, e.jsx)(r.J$, {
                    value: {
                        fallback: {
                            totalTx30Days: u,
                            addressCount30Days: t,
                            tvl: o
                        }
                    },
                    children: (0, e.jsx)(a.Z, {}, _)
                }) : null
            }
        }
    },
    function(n) {
        n.O(0, [6898, 6395, 5518, 2687, 1304, 5373, 8753, 8854, 1889, 6118, 1136, 9774, 2888, 179], (function() {
            return u = 40153, n(n.s = u);
            var u
        }));
        var u = n.O();
        _N_E = u
    }
]);
//# sourceMappingURL=exchange-274570732163d82a.js.map