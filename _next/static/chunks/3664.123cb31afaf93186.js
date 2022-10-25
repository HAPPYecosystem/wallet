"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3664], {
        23664: function(t, n, e) {
            e.r(n), e.d(n, {
                default: function() {
                    return p
                }
            });
            var r = e(34051),
                o = e.n(r),
                c = e(40475),
                a = e(65096),
                i = e.n(a),
                s = e(38796);

            function u(t, n, e, r, o, c, a) {
                try {
                    var i = t[c](a),
                        s = i.value
                } catch (u) {
                    return void e(u)
                }
                i.done ? n(s) : Promise.resolve(s).then(r, o)
            }

            function l(t) {
                return function() {
                    var n = this,
                        e = arguments;
                    return new Promise((function(r, o) {
                        var c = t.apply(n, e);

                        function a(t) {
                            u(c, r, o, a, i, "next", t)
                        }

                        function i(t) {
                            u(c, r, o, a, i, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var f = new(i())({
                allErrors: !0
            }).compile(c);

            function p(t) {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = l(o().mark((function t(n) {
                    var e, r, c, a, i, u, l, p, d;
                    return o().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                e = (0, s.Z)(n), r = 0;
                            case 2:
                                if (!(r < e.length)) {
                                    t.next = 34;
                                    break
                                }
                                return c = e[r], a = r === e.length - 1, i = void 0, t.prev = 6, t.next = 9, fetch(c);
                            case 9:
                                i = t.sent, t.next = 18;
                                break;
                            case 12:
                                if (t.prev = 12, t.t0 = t.catch(6), console.error("Failed to fetch list", n, t.t0), !a) {
                                    t.next = 17;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(n));
                            case 17:
                                return t.abrupt("continue", 31);
                            case 18:
                                if (i.ok) {
                                    t.next = 22;
                                    break
                                }
                                if (!a) {
                                    t.next = 21;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(n));
                            case 21:
                                return t.abrupt("continue", 31);
                            case 22:
                                return t.next = 24, i.json();
                            case 24:
                                if (u = t.sent, f(u)) {
                                    t.next = 30;
                                    break
                                }
                                throw d = null !== (p = null === (l = f.errors) || void 0 === l ? void 0 : l.reduce((function(t, n) {
                                    var e, r = "".concat(n.dataPath, " ").concat(null !== (e = n.message) && void 0 !== e ? e : "");
                                    return t.length > 0 ? "".concat(t, "; ").concat(r) : "".concat(r)
                                }), "")) && void 0 !== p ? p : "unknown error", new Error("Token list failed validation: ".concat(d));
                            case 30:
                                return t.abrupt("return", u);
                            case 31:
                                r++, t.next = 2;
                                break;
                            case 34:
                                throw new Error("Unrecognized list URL protocol.");
                            case 35:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [6, 12]
                    ])
                })))).apply(this, arguments)
            }
        },
        38796: function(t, n, e) {
            function r(t) {
                switch (t.split(":")[0].toLowerCase()) {
                    case "https":
                        return [t];
                    case "http":
                        return ["https".concat(t.substr(4)), t];
                    case "ipfs":
                        var n, e = null === (n = t.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(e, "/"), "https://ipfs.io/ipfs/".concat(e, "/")];
                    case "ipns":
                        var r, o = null === (r = t.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === r ? void 0 : r[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(o, "/"), "https://ipfs.io/ipns/".concat(o, "/")];
                    default:
                        return []
                }
            }
            e.d(n, {
                Z: function() {
                    return r
                }
            })
        }
    }
]);
//# sourceMappingURL=3664.123cb31afaf93186.js.map