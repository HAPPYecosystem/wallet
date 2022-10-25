(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [393], {
        65096: function(e, r, t) {
            "use strict";
            var a = t(47153),
                s = t(83610),
                o = t(47531),
                i = t(74022),
                n = t(35035),
                l = t(1516),
                c = t(47753),
                u = t(3978),
                h = t(42889);
            e.exports = y, y.prototype.validate = function(e, r) {
                var t;
                if ("string" == typeof e) {
                    if (!(t = this.getSchema(e))) throw new Error('no schema with key or ref "' + e + '"')
                } else {
                    var a = this._addSchema(e);
                    t = a.validate || this._compile(a)
                }
                var s = t(r);
                !0 !== t.$async && (this.errors = t.errors);
                return s
            }, y.prototype.compile = function(e, r) {
                var t = this._addSchema(e, void 0, r);
                return t.validate || this._compile(t)
            }, y.prototype.addSchema = function(e, r, t, a) {
                if (Array.isArray(e)) {
                    for (var o = 0; o < e.length; o++) this.addSchema(e[o], void 0, t, a);
                    return this
                }
                var i = this._getId(e);
                if (void 0 !== i && "string" != typeof i) throw new Error("schema id must be string");
                return S(this, r = s.normalizeId(r || i)), this._schemas[r] = this._addSchema(e, t, a, !0), this
            }, y.prototype.addMetaSchema = function(e, r, t) {
                return this.addSchema(e, r, t, !0), this
            }, y.prototype.validateSchema = function(e, r) {
                var t = e.$schema;
                if (void 0 !== t && "string" != typeof t) throw new Error("$schema must be a string");
                if (!(t = t || this._opts.defaultMeta || function(e) {
                        var r = e._opts.meta;
                        return e._opts.defaultMeta = "object" == typeof r ? e._getId(r) || r : e.getSchema(f) ? f : void 0, e._opts.defaultMeta
                    }(this))) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
                var a = this.validate(t, e);
                if (!a && r) {
                    var s = "schema is invalid: " + this.errorsText();
                    if ("log" != this._opts.validateSchema) throw new Error(s);
                    this.logger.error(s)
                }
                return a
            }, y.prototype.getSchema = function(e) {
                var r = g(this, e);
                switch (typeof r) {
                    case "object":
                        return r.validate || this._compile(r);
                    case "string":
                        return this.getSchema(r);
                    case "undefined":
                        return function(e, r) {
                            var t = s.schema.call(e, {
                                schema: {}
                            }, r);
                            if (t) {
                                var o = t.schema,
                                    n = t.root,
                                    l = t.baseId,
                                    c = a.call(e, o, n, void 0, l);
                                return e._fragments[r] = new i({
                                    ref: r,
                                    fragment: !0,
                                    schema: o,
                                    root: n,
                                    baseId: l,
                                    validate: c
                                }), c
                            }
                        }(this, e)
                }
            }, y.prototype.removeSchema = function(e) {
                if (e instanceof RegExp) return P(this, this._schemas, e), P(this, this._refs, e), this;
                switch (typeof e) {
                    case "undefined":
                        return P(this, this._schemas), P(this, this._refs), this._cache.clear(), this;
                    case "string":
                        var r = g(this, e);
                        return r && this._cache.del(r.cacheKey), delete this._schemas[e], delete this._refs[e], this;
                    case "object":
                        var t = this._opts.serialize,
                            a = t ? t(e) : e;
                        this._cache.del(a);
                        var o = this._getId(e);
                        o && (o = s.normalizeId(o), delete this._schemas[o], delete this._refs[o])
                }
                return this
            }, y.prototype.addFormat = function(e, r) {
                "string" == typeof r && (r = new RegExp(r));
                return this._formats[e] = r, this
            }, y.prototype.errorsText = function(e, r) {
                if (!(e = e || this.errors)) return "No errors";
                for (var t = void 0 === (r = r || {}).separator ? ", " : r.separator, a = void 0 === r.dataVar ? "data" : r.dataVar, s = "", o = 0; o < e.length; o++) {
                    var i = e[o];
                    i && (s += a + i.dataPath + " " + i.message + t)
                }
                return s.slice(0, -t.length)
            }, y.prototype._addSchema = function(e, r, t, a) {
                if ("object" != typeof e && "boolean" != typeof e) throw new Error("schema should be object or boolean");
                var o = this._opts.serialize,
                    n = o ? o(e) : e,
                    l = this._cache.get(n);
                if (l) return l;
                a = a || !1 !== this._opts.addUsedSchema;
                var c = s.normalizeId(this._getId(e));
                c && a && S(this, c);
                var u, h = !1 !== this._opts.validateSchema && !r;
                h && !(u = c && c == s.normalizeId(e.$schema)) && this.validateSchema(e, !0);
                var d = s.ids.call(this, e),
                    p = new i({
                        id: c,
                        schema: e,
                        localRefs: d,
                        cacheKey: n,
                        meta: t
                    });
                "#" != c[0] && a && (this._refs[c] = p);
                this._cache.put(n, p), h && u && this.validateSchema(e, !0);
                return p
            }, y.prototype._compile = function(e, r) {
                if (e.compiling) return e.validate = o, o.schema = e.schema, o.errors = null, o.root = r || o, !0 === e.schema.$async && (o.$async = !0), o;
                var t, s;
                e.compiling = !0, e.meta && (t = this._opts, this._opts = this._metaOpts);
                try {
                    s = a.call(this, e.schema, r, e.localRefs)
                } catch (i) {
                    throw delete e.validate, i
                } finally {
                    e.compiling = !1, e.meta && (this._opts = t)
                }
                return e.validate = s, e.refs = s.refs, e.refVal = s.refVal, e.root = s.root, s;

                function o() {
                    var r = e.validate,
                        t = r.apply(this, arguments);
                    return o.errors = r.errors, t
                }
            }, y.prototype.compileAsync = t(42931);
            var d = t(14895);
            y.prototype.addKeyword = d.add, y.prototype.getKeyword = d.get, y.prototype.removeKeyword = d.remove, y.prototype.validateKeyword = d.validate;
            var p = t(87802);
            y.ValidationError = p.Validation, y.MissingRefError = p.MissingRef, y.$dataMetaSchema = u;
            var f = "http://json-schema.org/draft-07/schema",
                m = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"],
                v = ["/properties"];

            function y(e) {
                if (!(this instanceof y)) return new y(e);
                e = this._opts = h.copy(e) || {},
                    function(e) {
                        var r = e._opts.logger;
                        if (!1 === r) e.logger = {
                            log: x,
                            warn: x,
                            error: x
                        };
                        else {
                            if (void 0 === r && (r = console), !("object" == typeof r && r.log && r.warn && r.error)) throw new Error("logger must implement log, warn and error methods");
                            e.logger = r
                        }
                    }(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = l(e.format), this._cache = e.cache || new o, this._loadingSchemas = {}, this._compilations = [], this.RULES = c(), this._getId = function(e) {
                        switch (e.schemaId) {
                            case "auto":
                                return w;
                            case "id":
                                return E;
                            default:
                                return b
                        }
                    }(e), e.loopRequired = e.loopRequired || 1 / 0, "property" == e.errorDataPath && (e._errorDataPathProperty = !0), void 0 === e.serialize && (e.serialize = n), this._metaOpts = function(e) {
                        for (var r = h.copy(e._opts), t = 0; t < m.length; t++) delete r[m[t]];
                        return r
                    }(this), e.formats && function(e) {
                        for (var r in e._opts.formats) {
                            var t = e._opts.formats[r];
                            e.addFormat(r, t)
                        }
                    }(this), e.keywords && function(e) {
                        for (var r in e._opts.keywords) {
                            var t = e._opts.keywords[r];
                            e.addKeyword(r, t)
                        }
                    }(this),
                    function(e) {
                        var r;
                        e._opts.$data && (r = t(894), e.addMetaSchema(r, r.$id, !0));
                        if (!1 === e._opts.meta) return;
                        var a = t(6680);
                        e._opts.$data && (a = u(a, v));
                        e.addMetaSchema(a, f, !0), e._refs["http://json-schema.org/schema"] = f
                    }(this), "object" == typeof e.meta && this.addMetaSchema(e.meta), e.nullable && this.addKeyword("nullable", {
                        metaSchema: {
                            type: "boolean"
                        }
                    }),
                    function(e) {
                        var r = e._opts.schemas;
                        if (!r) return;
                        if (Array.isArray(r)) e.addSchema(r);
                        else
                            for (var t in r) e.addSchema(r[t], t)
                    }(this)
            }

            function g(e, r) {
                return r = s.normalizeId(r), e._schemas[r] || e._refs[r] || e._fragments[r]
            }

            function P(e, r, t) {
                for (var a in r) {
                    var s = r[a];
                    s.meta || t && !t.test(a) || (e._cache.del(s.cacheKey), delete r[a])
                }
            }

            function E(e) {
                return e.$id && this.logger.warn("schema $id ignored", e.$id), e.id
            }

            function b(e) {
                return e.id && this.logger.warn("schema id ignored", e.id), e.$id
            }

            function w(e) {
                if (e.$id && e.id && e.$id != e.id) throw new Error("schema $id is different from id");
                return e.$id || e.id
            }

            function S(e, r) {
                if (e._schemas[r] || e._refs[r]) throw new Error('schema with key or id "' + r + '" already exists')
            }

            function x() {}
        },
        47531: function(e) {
            "use strict";
            var r = e.exports = function() {
                this._cache = {}
            };
            r.prototype.put = function(e, r) {
                this._cache[e] = r
            }, r.prototype.get = function(e) {
                return this._cache[e]
            }, r.prototype.del = function(e) {
                delete this._cache[e]
            }, r.prototype.clear = function() {
                this._cache = {}
            }
        },
        42931: function(e, r, t) {
            "use strict";
            var a = t(87802).MissingRef;
            e.exports = function e(r, t, s) {
                var o = this;
                if ("function" != typeof this._opts.loadSchema) throw new Error("options.loadSchema should be a function");
                "function" == typeof t && (s = t, t = void 0);
                var i = n(r).then((function() {
                    var e = o._addSchema(r, void 0, t);
                    return e.validate || l(e)
                }));
                s && i.then((function(e) {
                    s(null, e)
                }), s);
                return i;

                function n(r) {
                    var t = r.$schema;
                    return t && !o.getSchema(t) ? e.call(o, {
                        $ref: t
                    }, !0) : Promise.resolve()
                }

                function l(e) {
                    try {
                        return o._compile(e)
                    } catch (r) {
                        if (r instanceof a) return function(r) {
                            var a = r.missingSchema;
                            if (c(a)) throw new Error("Schema " + a + " is loaded but " + r.missingRef + " cannot be resolved");
                            var s = o._loadingSchemas[a];
                            s || (s = o._loadingSchemas[a] = o._opts.loadSchema(a)).then(i, i);
                            return s.then((function(e) {
                                if (!c(a)) return n(e).then((function() {
                                    c(a) || o.addSchema(e, a, void 0, t)
                                }))
                            })).then((function() {
                                return l(e)
                            }));

                            function i() {
                                delete o._loadingSchemas[a]
                            }

                            function c(e) {
                                return o._refs[e] || o._schemas[e]
                            }
                        }(r);
                        throw r
                    }
                }
            }
        },
        87802: function(e, r, t) {
            "use strict";
            var a = t(83610);

            function s(e, r, t) {
                this.message = t || s.message(e, r), this.missingRef = a.url(e, r), this.missingSchema = a.normalizeId(a.fullPath(this.missingRef))
            }

            function o(e) {
                return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e
            }
            e.exports = {
                Validation: o((function(e) {
                    this.message = "validation failed", this.errors = e, this.ajv = this.validation = !0
                })),
                MissingRef: o(s)
            }, s.message = function(e, r) {
                return "can't resolve reference " + r + " from id " + e
            }
        },
        1516: function(e, r, t) {
            "use strict";
            var a = t(42889),
                s = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
                o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                i = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i,
                n = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
                l = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                c = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
                u = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
                h = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
                d = /^(?:\/(?:[^~/]|~0|~1)*)*$/,
                p = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
                f = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;

            function m(e) {
                return e = "full" == e ? "full" : "fast", a.copy(m[e])
            }

            function v(e) {
                var r = e.match(s);
                if (!r) return !1;
                var t = +r[1],
                    a = +r[2],
                    i = +r[3];
                return a >= 1 && a <= 12 && i >= 1 && i <= (2 == a && function(e) {
                    return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0)
                }(t) ? 29 : o[a])
            }

            function y(e, r) {
                var t = e.match(i);
                if (!t) return !1;
                var a = t[1],
                    s = t[2],
                    o = t[3],
                    n = t[5];
                return (a <= 23 && s <= 59 && o <= 59 || 23 == a && 59 == s && 60 == o) && (!r || n)
            }
            e.exports = m, m.fast = {
                date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
                time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
                "date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
                uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
                "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
                "uri-template": c,
                url: u,
                email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                hostname: n,
                ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
                ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
                regex: b,
                uuid: h,
                "json-pointer": d,
                "json-pointer-uri-fragment": p,
                "relative-json-pointer": f
            }, m.full = {
                date: v,
                time: y,
                "date-time": function(e) {
                    var r = e.split(g);
                    return 2 == r.length && v(r[0]) && y(r[1], !0)
                },
                uri: function(e) {
                    return P.test(e) && l.test(e)
                },
                "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                "uri-template": c,
                url: u,
                email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                hostname: n,
                ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
                ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
                regex: b,
                uuid: h,
                "json-pointer": d,
                "json-pointer-uri-fragment": p,
                "relative-json-pointer": f
            };
            var g = /t|\s/i;
            var P = /\/|:/;
            var E = /[^\\]\\Z/;

            function b(e) {
                if (E.test(e)) return !1;
                try {
                    return new RegExp(e), !0
                } catch (r) {
                    return !1
                }
            }
        },
        47153: function(e, r, t) {
            "use strict";
            var a = t(83610),
                s = t(42889),
                o = t(87802),
                i = t(35035),
                n = t(19508),
                l = s.ucs2length,
                c = t(64063),
                u = o.Validation;

            function h(e, r, t) {
                var a = p.call(this, e, r, t);
                return a >= 0 ? {
                    index: a,
                    compiling: !0
                } : (a = this._compilations.length, this._compilations[a] = {
                    schema: e,
                    root: r,
                    baseId: t
                }, {
                    index: a,
                    compiling: !1
                })
            }

            function d(e, r, t) {
                var a = p.call(this, e, r, t);
                a >= 0 && this._compilations.splice(a, 1)
            }

            function p(e, r, t) {
                for (var a = 0; a < this._compilations.length; a++) {
                    var s = this._compilations[a];
                    if (s.schema == e && s.root == r && s.baseId == t) return a
                }
                return -1
            }

            function f(e, r) {
                return "var pattern" + e + " = new RegExp(" + s.toQuotedString(r[e]) + ");"
            }

            function m(e) {
                return "var default" + e + " = defaults[" + e + "];"
            }

            function v(e, r) {
                return void 0 === r[e] ? "" : "var refVal" + e + " = refVal[" + e + "];"
            }

            function y(e) {
                return "var customRule" + e + " = customRules[" + e + "];"
            }

            function g(e, r) {
                if (!e.length) return "";
                for (var t = "", a = 0; a < e.length; a++) t += r(a, e);
                return t
            }
            e.exports = function e(r, t, p, P) {
                var E = this,
                    b = this._opts,
                    w = [void 0],
                    S = {},
                    x = [],
                    _ = {},
                    $ = [],
                    F = {},
                    R = [];
                t = t || {
                    schema: r,
                    refVal: w,
                    refs: S
                };
                var D = h.call(this, r, t, P),
                    j = this._compilations[D.index];
                if (D.compiling) return j.callValidate = function e() {
                    var r = j.validate,
                        t = r.apply(this, arguments);
                    return e.errors = r.errors, t
                };
                var O = this._formats,
                    I = this.RULES;
                try {
                    var k = C(r, t, p, P);
                    j.validate = k;
                    var A = j.callValidate;
                    return A && (A.schema = k.schema, A.errors = null, A.refs = k.refs, A.refVal = k.refVal, A.root = k.root, A.$async = k.$async, b.sourceCode && (A.source = k.source)), k
                } finally {
                    d.call(this, r, t, P)
                }

                function C(r, i, h, d) {
                    var p = !i || i && i.schema == r;
                    if (i.schema != t.schema) return e.call(E, r, i, h, d);
                    var P, _ = !0 === r.$async,
                        F = n({
                            isTop: !0,
                            schema: r,
                            isRoot: p,
                            baseId: d,
                            root: i,
                            schemaPath: "",
                            errSchemaPath: "#",
                            errorPath: '""',
                            MissingRefError: o.MissingRef,
                            RULES: I,
                            validate: n,
                            util: s,
                            resolve: a,
                            resolveRef: L,
                            usePattern: z,
                            useDefault: V,
                            useCustomRule: q,
                            opts: b,
                            formats: O,
                            logger: E.logger,
                            self: E
                        });
                    F = g(w, v) + g(x, f) + g($, m) + g(R, y) + F, b.processCode && (F = b.processCode(F, r));
                    try {
                        P = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", F)(E, I, O, t, w, $, R, c, l, u), w[0] = P
                    } catch (D) {
                        throw E.logger.error("Error compiling schema, function code:", F), D
                    }
                    return P.schema = r, P.errors = null, P.refs = S, P.refVal = w, P.root = p ? P : i, _ && (P.$async = !0), !0 === b.sourceCode && (P.source = {
                        code: F,
                        patterns: x,
                        defaults: $
                    }), P
                }

                function L(r, s, o) {
                    s = a.url(r, s);
                    var i, n, l = S[s];
                    if (void 0 !== l) return N(i = w[l], n = "refVal[" + l + "]");
                    if (!o && t.refs) {
                        var c = t.refs[s];
                        if (void 0 !== c) return N(i = t.refVal[c], n = T(s, i))
                    }
                    n = T(s);
                    var u = a.call(E, C, t, s);
                    if (void 0 === u) {
                        var h = p && p[s];
                        h && (u = a.inlineRef(h, b.inlineRefs) ? h : e.call(E, h, t, p, r))
                    }
                    if (void 0 !== u) return function(e, r) {
                        var t = S[e];
                        w[t] = r
                    }(s, u), N(u, n);
                    ! function(e) {
                        delete S[e]
                    }(s)
                }

                function T(e, r) {
                    var t = w.length;
                    return w[t] = r, S[e] = t, "refVal" + t
                }

                function N(e, r) {
                    return "object" == typeof e || "boolean" == typeof e ? {
                        code: r,
                        schema: e,
                        inline: !0
                    } : {
                        code: r,
                        $async: e && !!e.$async
                    }
                }

                function z(e) {
                    var r = _[e];
                    return void 0 === r && (r = _[e] = x.length, x[r] = e), "pattern" + r
                }

                function V(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                            return "" + e;
                        case "string":
                            return s.toQuotedString(e);
                        case "object":
                            if (null === e) return "null";
                            var r = i(e),
                                t = F[r];
                            return void 0 === t && (t = F[r] = $.length, $[t] = e), "default" + t
                    }
                }

                function q(e, r, t, a) {
                    if (!1 !== E._opts.validateSchema) {
                        var s = e.definition.dependencies;
                        if (s && !s.every((function(e) {
                                return Object.prototype.hasOwnProperty.call(t, e)
                            }))) throw new Error("parent schema must have all required keywords: " + s.join(","));
                        var o = e.definition.validateSchema;
                        if (o)
                            if (!o(r)) {
                                var i = "keyword schema is invalid: " + E.errorsText(o.errors);
                                if ("log" != E._opts.validateSchema) throw new Error(i);
                                E.logger.error(i)
                            }
                    }
                    var n, l = e.definition.compile,
                        c = e.definition.inline,
                        u = e.definition.macro;
                    if (l) n = l.call(E, r, t, a);
                    else if (u) n = u.call(E, r, t, a), !1 !== b.validateSchema && E.validateSchema(n, !0);
                    else if (c) n = c.call(E, a, e.keyword, r, t);
                    else if (!(n = e.definition.validate)) return;
                    if (void 0 === n) throw new Error('custom keyword "' + e.keyword + '"failed to compile');
                    var h = R.length;
                    return R[h] = n, {
                        code: "customRule" + h,
                        validate: n
                    }
                }
            }
        },
        83610: function(e, r, t) {
            "use strict";
            var a = t(60540),
                s = t(64063),
                o = t(42889),
                i = t(74022),
                n = t(49461);

            function l(e, r, t) {
                var a = this._refs[t];
                if ("string" == typeof a) {
                    if (!this._refs[a]) return l.call(this, e, r, a);
                    a = this._refs[a]
                }
                if ((a = a || this._schemas[t]) instanceof i) return f(a.schema, this._opts.inlineRefs) ? a.schema : a.validate || this._compile(a);
                var s, o, n, u = c.call(this, r, t);
                return u && (s = u.schema, r = u.root, n = u.baseId), s instanceof i ? o = s.validate || e.call(this, s.schema, r, void 0, n) : void 0 !== s && (o = f(s, this._opts.inlineRefs) ? s : e.call(this, s, r, void 0, n)), o
            }

            function c(e, r) {
                var t = a.parse(r),
                    s = g(t),
                    o = y(this._getId(e.schema));
                if (0 === Object.keys(e.schema).length || s !== o) {
                    var n = E(s),
                        l = this._refs[n];
                    if ("string" == typeof l) return u.call(this, e, l, t);
                    if (l instanceof i) l.validate || this._compile(l), e = l;
                    else {
                        if (!((l = this._schemas[n]) instanceof i)) return;
                        if (l.validate || this._compile(l), n == E(r)) return {
                            schema: l,
                            root: e,
                            baseId: o
                        };
                        e = l
                    }
                    if (!e.schema) return;
                    o = y(this._getId(e.schema))
                }
                return d.call(this, t, o, e.schema, e)
            }

            function u(e, r, t) {
                var a = c.call(this, e, r);
                if (a) {
                    var s = a.schema,
                        o = a.baseId;
                    e = a.root;
                    var i = this._getId(s);
                    return i && (o = b(o, i)), d.call(this, t, o, s, e)
                }
            }
            e.exports = l, l.normalizeId = E, l.fullPath = y, l.url = b, l.ids = function(e) {
                var r = E(this._getId(e)),
                    t = {
                        "": r
                    },
                    i = {
                        "": y(r, !1)
                    },
                    l = {},
                    c = this;
                return n(e, {
                    allKeys: !0
                }, (function(e, r, n, u, h, d, p) {
                    if ("" !== r) {
                        var f = c._getId(e),
                            m = t[u],
                            v = i[u] + "/" + h;
                        if (void 0 !== p && (v += "/" + ("number" == typeof p ? p : o.escapeFragment(p))), "string" == typeof f) {
                            f = m = E(m ? a.resolve(m, f) : f);
                            var y = c._refs[f];
                            if ("string" == typeof y && (y = c._refs[y]), y && y.schema) {
                                if (!s(e, y.schema)) throw new Error('id "' + f + '" resolves to more than one schema')
                            } else if (f != E(v))
                                if ("#" == f[0]) {
                                    if (l[f] && !s(e, l[f])) throw new Error('id "' + f + '" resolves to more than one schema');
                                    l[f] = e
                                } else c._refs[f] = v
                        }
                        t[r] = m, i[r] = v
                    }
                })), l
            }, l.inlineRef = f, l.schema = c;
            var h = o.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);

            function d(e, r, t, a) {
                if (e.fragment = e.fragment || "", "/" == e.fragment.slice(0, 1)) {
                    for (var s = e.fragment.split("/"), i = 1; i < s.length; i++) {
                        var n = s[i];
                        if (n) {
                            if (void 0 === (t = t[n = o.unescapeFragment(n)])) break;
                            var l;
                            if (!h[n] && ((l = this._getId(t)) && (r = b(r, l)), t.$ref)) {
                                var u = b(r, t.$ref),
                                    d = c.call(this, a, u);
                                d && (t = d.schema, a = d.root, r = d.baseId)
                            }
                        }
                    }
                    return void 0 !== t && t !== a.schema ? {
                        schema: t,
                        root: a,
                        baseId: r
                    } : void 0
                }
            }
            var p = o.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"]);

            function f(e, r) {
                return !1 !== r && (void 0 === r || !0 === r ? m(e) : r ? v(e) <= r : void 0)
            }

            function m(e) {
                var r;
                if (Array.isArray(e)) {
                    for (var t = 0; t < e.length; t++)
                        if ("object" == typeof(r = e[t]) && !m(r)) return !1
                } else
                    for (var a in e) {
                        if ("$ref" == a) return !1;
                        if ("object" == typeof(r = e[a]) && !m(r)) return !1
                    }
                return !0
            }

            function v(e) {
                var r, t = 0;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a++)
                        if ("object" == typeof(r = e[a]) && (t += v(r)), t == 1 / 0) return 1 / 0
                } else
                    for (var s in e) {
                        if ("$ref" == s) return 1 / 0;
                        if (p[s]) t++;
                        else if ("object" == typeof(r = e[s]) && (t += v(r) + 1), t == 1 / 0) return 1 / 0
                    }
                return t
            }

            function y(e, r) {
                return !1 !== r && (e = E(e)), g(a.parse(e))
            }

            function g(e) {
                return a.serialize(e).split("#")[0] + "#"
            }
            var P = /#\/?$/;

            function E(e) {
                return e ? e.replace(P, "") : ""
            }

            function b(e, r) {
                return r = E(r), a.resolve(e, r)
            }
        },
        47753: function(e, r, t) {
            "use strict";
            var a = t(66674),
                s = t(42889).toHash;
            e.exports = function() {
                var e = [{
                        type: "number",
                        rules: [{
                            maximum: ["exclusiveMaximum"]
                        }, {
                            minimum: ["exclusiveMinimum"]
                        }, "multipleOf", "format"]
                    }, {
                        type: "string",
                        rules: ["maxLength", "minLength", "pattern", "format"]
                    }, {
                        type: "array",
                        rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
                    }, {
                        type: "object",
                        rules: ["maxProperties", "minProperties", "required", "dependencies", "propertyNames", {
                            properties: ["additionalProperties", "patternProperties"]
                        }]
                    }, {
                        rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"]
                    }],
                    r = ["type", "$comment"];
                return e.all = s(r), e.types = s(["number", "integer", "string", "array", "object", "boolean", "null"]), e.forEach((function(t) {
                    t.rules = t.rules.map((function(t) {
                        var s;
                        if ("object" == typeof t) {
                            var o = Object.keys(t)[0];
                            s = t[o], t = o, s.forEach((function(t) {
                                r.push(t), e.all[t] = !0
                            }))
                        }
                        return r.push(t), e.all[t] = {
                            keyword: t,
                            code: a[t],
                            implements: s
                        }
                    })), e.all.$comment = {
                        keyword: "$comment",
                        code: a.$comment
                    }, t.type && (e.types[t.type] = t)
                })), e.keywords = s(r.concat(["$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"])), e.custom = {}, e
            }
        },
        74022: function(e, r, t) {
            "use strict";
            var a = t(42889);
            e.exports = function(e) {
                a.copy(e, this)
            }
        },
        4442: function(e) {
            "use strict";
            e.exports = function(e) {
                for (var r, t = 0, a = e.length, s = 0; s < a;) t++, (r = e.charCodeAt(s++)) >= 55296 && r <= 56319 && s < a && 56320 == (64512 & (r = e.charCodeAt(s))) && s++;
                return t
            }
        },
        42889: function(e, r, t) {
            "use strict";

            function a(e, r, t, a) {
                var s = a ? " !== " : " === ",
                    o = a ? " || " : " && ",
                    i = a ? "!" : "",
                    n = a ? "" : "!";
                switch (e) {
                    case "null":
                        return r + s + "null";
                    case "array":
                        return i + "Array.isArray(" + r + ")";
                    case "object":
                        return "(" + i + r + o + "typeof " + r + s + '"object"' + o + n + "Array.isArray(" + r + "))";
                    case "integer":
                        return "(typeof " + r + s + '"number"' + o + n + "(" + r + " % 1)" + o + r + s + r + (t ? o + i + "isFinite(" + r + ")" : "") + ")";
                    case "number":
                        return "(typeof " + r + s + '"' + e + '"' + (t ? o + i + "isFinite(" + r + ")" : "") + ")";
                    default:
                        return "typeof " + r + s + '"' + e + '"'
                }
            }
            e.exports = {
                copy: function(e, r) {
                    for (var t in r = r || {}, e) r[t] = e[t];
                    return r
                },
                checkDataType: a,
                checkDataTypes: function(e, r, t) {
                    if (1 === e.length) return a(e[0], r, t, !0);
                    var s = "",
                        i = o(e);
                    for (var n in i.array && i.object && (s = i.null ? "(" : "(!" + r + " || ", s += "typeof " + r + ' !== "object")', delete i.null, delete i.array, delete i.object), i.number && delete i.integer, i) s += (s ? " && " : "") + a(n, r, t, !0);
                    return s
                },
                coerceToTypes: function(e, r) {
                    if (Array.isArray(r)) {
                        for (var t = [], a = 0; a < r.length; a++) {
                            var o = r[a];
                            (s[o] || "array" === e && "array" === o) && (t[t.length] = o)
                        }
                        if (t.length) return t
                    } else {
                        if (s[r]) return [r];
                        if ("array" === e && "array" === r) return ["array"]
                    }
                },
                toHash: o,
                getProperty: l,
                escapeQuotes: c,
                equal: t(64063),
                ucs2length: t(4442),
                varOccurences: function(e, r) {
                    r += "[^0-9]";
                    var t = e.match(new RegExp(r, "g"));
                    return t ? t.length : 0
                },
                varReplace: function(e, r, t) {
                    return r += "([^0-9])", t = t.replace(/\$/g, "$$$$"), e.replace(new RegExp(r, "g"), t + "$1")
                },
                schemaHasRules: function(e, r) {
                    if ("boolean" == typeof e) return !e;
                    for (var t in e)
                        if (r[t]) return !0
                },
                schemaHasRulesExcept: function(e, r, t) {
                    if ("boolean" == typeof e) return !e && "not" != t;
                    for (var a in e)
                        if (a != t && r[a]) return !0
                },
                schemaUnknownRules: function(e, r) {
                    if ("boolean" == typeof e) return;
                    for (var t in e)
                        if (!r[t]) return t
                },
                toQuotedString: u,
                getPathExpr: function(e, r, t, a) {
                    return p(e, t ? "'/' + " + r + (a ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : a ? "'[' + " + r + " + ']'" : "'[\\'' + " + r + " + '\\']'")
                },
                getPath: function(e, r, t) {
                    var a = u(t ? "/" + f(r) : l(r));
                    return p(e, a)
                },
                getData: function(e, r, t) {
                    var a, s, o, i;
                    if ("" === e) return "rootData";
                    if ("/" == e[0]) {
                        if (!h.test(e)) throw new Error("Invalid JSON-pointer: " + e);
                        s = e, o = "rootData"
                    } else {
                        if (!(i = e.match(d))) throw new Error("Invalid JSON-pointer: " + e);
                        if (a = +i[1], "#" == (s = i[2])) {
                            if (a >= r) throw new Error("Cannot access property/index " + a + " levels up, current level is " + r);
                            return t[r - a]
                        }
                        if (a > r) throw new Error("Cannot access data " + a + " levels up, current level is " + r);
                        if (o = "data" + (r - a || ""), !s) return o
                    }
                    for (var n = o, c = s.split("/"), u = 0; u < c.length; u++) {
                        var p = c[u];
                        p && (o += l(m(p)), n += " && " + o)
                    }
                    return n
                },
                unescapeFragment: function(e) {
                    return m(decodeURIComponent(e))
                },
                unescapeJsonPointer: m,
                escapeFragment: function(e) {
                    return encodeURIComponent(f(e))
                },
                escapeJsonPointer: f
            };
            var s = o(["string", "number", "integer", "boolean", "null"]);

            function o(e) {
                for (var r = {}, t = 0; t < e.length; t++) r[e[t]] = !0;
                return r
            }
            var i = /^[a-z$_][a-z$_0-9]*$/i,
                n = /'|\\/g;

            function l(e) {
                return "number" == typeof e ? "[" + e + "]" : i.test(e) ? "." + e : "['" + c(e) + "']"
            }

            function c(e) {
                return e.replace(n, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t")
            }

            function u(e) {
                return "'" + c(e) + "'"
            }
            var h = /^\/(?:[^~]|~0|~1)*$/,
                d = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;

            function p(e, r) {
                return '""' == e ? r : (e + " + " + r).replace(/([^\\])' \+ '/g, "$1")
            }

            function f(e) {
                return e.replace(/~/g, "~0").replace(/\//g, "~1")
            }

            function m(e) {
                return e.replace(/~1/g, "/").replace(/~0/g, "~")
            }
        },
        3978: function(e) {
            "use strict";
            var r = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"];
            e.exports = function(e, t) {
                for (var a = 0; a < t.length; a++) {
                    e = JSON.parse(JSON.stringify(e));
                    var s, o = t[a].split("/"),
                        i = e;
                    for (s = 1; s < o.length; s++) i = i[o[s]];
                    for (s = 0; s < r.length; s++) {
                        var n = r[s],
                            l = i[n];
                        l && (i[n] = {
                            anyOf: [l, {
                                $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
                            }]
                        })
                    }
                }
                return e
            }
        },
        61128: function(e, r, t) {
            "use strict";
            var a = t(6680);
            e.exports = {
                $id: "https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js",
                definitions: {
                    simpleTypes: a.definitions.simpleTypes
                },
                type: "object",
                dependencies: {
                    schema: ["validate"],
                    $data: ["validate"],
                    statements: ["inline"],
                    valid: {
                        not: {
                            required: ["macro"]
                        }
                    }
                },
                properties: {
                    type: a.properties.type,
                    schema: {
                        type: "boolean"
                    },
                    statements: {
                        type: "boolean"
                    },
                    dependencies: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    metaSchema: {
                        type: "object"
                    },
                    modifying: {
                        type: "boolean"
                    },
                    valid: {
                        type: "boolean"
                    },
                    $data: {
                        type: "boolean"
                    },
                    async: {
                        type: "boolean"
                    },
                    errors: {
                        anyOf: [{
                            type: "boolean"
                        }, {
                            const: "full"
                        }]
                    }
                }
            }
        },
        18210: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a, s = " ",
                    o = e.level,
                    i = e.dataLevel,
                    n = e.schema[r],
                    l = e.schemaPath + e.util.getProperty(r),
                    c = e.errSchemaPath + "/" + r,
                    u = !e.opts.allErrors,
                    h = "data" + (i || ""),
                    d = e.opts.$data && n && n.$data;
                d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n;
                var p = "maximum" == r,
                    f = p ? "exclusiveMaximum" : "exclusiveMinimum",
                    m = e.schema[f],
                    v = e.opts.$data && m && m.$data,
                    y = p ? "<" : ">",
                    g = p ? ">" : "<",
                    P = void 0;
                if (!d && "number" != typeof n && void 0 !== n) throw new Error(r + " must be number");
                if (!v && void 0 !== m && "number" != typeof m && "boolean" != typeof m) throw new Error(f + " must be number or boolean");
                if (v) {
                    var E = e.util.getData(m.$data, i, e.dataPathArr),
                        b = "exclusive" + o,
                        w = "exclType" + o,
                        S = "exclIsNumber" + o,
                        x = "' + " + (F = "op" + o) + " + '";
                    s += " var schemaExcl" + o + " = " + E + "; ", s += " var " + b + "; var " + w + " = typeof " + (E = "schemaExcl" + o) + "; if (" + w + " != 'boolean' && " + w + " != 'undefined' && " + w + " != 'number') { ";
                    var _;
                    P = f;
                    (_ = _ || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '" + (P || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: '" + f + " should be boolean' "), e.opts.verbose && (s += " , schema: validate.schema" + l + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";
                    var $ = s;
                    s = _.pop(), !e.compositeRule && u ? e.async ? s += " throw new ValidationError([" + $ + "]); " : s += " validate.errors = [" + $ + "]; return false; " : s += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), s += " " + w + " == 'number' ? ( (" + b + " = " + a + " === undefined || " + E + " " + y + "= " + a + ") ? " + h + " " + g + "= " + E + " : " + h + " " + g + " " + a + " ) : ( (" + b + " = " + E + " === true) ? " + h + " " + g + "= " + a + " : " + h + " " + g + " " + a + " ) || " + h + " !== " + h + ") { var op" + o + " = " + b + " ? '" + y + "' : '" + y + "='; ", void 0 === n && (P = f, c = e.errSchemaPath + "/" + f, a = E, d = v)
                } else {
                    x = y;
                    if ((S = "number" == typeof m) && d) {
                        var F = "'" + x + "'";
                        s += " if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), s += " ( " + a + " === undefined || " + m + " " + y + "= " + a + " ? " + h + " " + g + "= " + m + " : " + h + " " + g + " " + a + " ) || " + h + " !== " + h + ") { "
                    } else {
                        S && void 0 === n ? (b = !0, P = f, c = e.errSchemaPath + "/" + f, a = m, g += "=") : (S && (a = Math[p ? "min" : "max"](m, n)), m === (!S || a) ? (b = !0, P = f, c = e.errSchemaPath + "/" + f, g += "=") : (b = !1, x += "="));
                        F = "'" + x + "'";
                        s += " if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), s += " " + h + " " + g + " " + a + " || " + h + " !== " + h + ") { "
                    }
                }
                P = P || r, (_ = _ || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '" + (P || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { comparison: " + F + ", limit: " + a + ", exclusive: " + b + " } ", !1 !== e.opts.messages && (s += " , message: 'should be " + x + " ", s += d ? "' + " + a : a + "'"), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";
                $ = s;
                return s = _.pop(), !e.compositeRule && u ? e.async ? s += " throw new ValidationError([" + $ + "]); " : s += " validate.errors = [" + $ + "]; return false; " : s += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", u && (s += " else { "), s
            }
        },
        33038: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a, s = " ",
                    o = e.level,
                    i = e.dataLevel,
                    n = e.schema[r],
                    l = e.schemaPath + e.util.getProperty(r),
                    c = e.errSchemaPath + "/" + r,
                    u = !e.opts.allErrors,
                    h = "data" + (i || ""),
                    d = e.opts.$data && n && n.$data;
                if (d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, !d && "number" != typeof n) throw new Error(r + " must be number");
                s += "if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), s += " " + h + ".length " + ("maxItems" == r ? ">" : "<") + " " + a + ") { ";
                var p = r,
                    f = f || [];
                f.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '" + (p || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + a + " } ", !1 !== e.opts.messages && (s += " , message: 'should NOT have ", s += "maxItems" == r ? "more" : "fewer", s += " than ", s += d ? "' + " + a + " + '" : "" + n, s += " items' "), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";
                var m = s;
                return s = f.pop(), !e.compositeRule && u ? e.async ? s += " throw new ValidationError([" + m + "]); " : s += " validate.errors = [" + m + "]; return false; " : s += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", u && (s += " else { "), s
            }
        },
        80425: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a, s = " ",
                    o = e.level,
                    i = e.dataLevel,
                    n = e.schema[r],
                    l = e.schemaPath + e.util.getProperty(r),
                    c = e.errSchemaPath + "/" + r,
                    u = !e.opts.allErrors,
                    h = "data" + (i || ""),
                    d = e.opts.$data && n && n.$data;
                if (d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, !d && "number" != typeof n) throw new Error(r + " must be number");
                var p = "maxLength" == r ? ">" : "<";
                s += "if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), !1 === e.opts.unicode ? s += " " + h + ".length " : s += " ucs2length(" + h + ") ", s += " " + p + " " + a + ") { ";
                var f = r,
                    m = m || [];
                m.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '" + (f || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + a + " } ", !1 !== e.opts.messages && (s += " , message: 'should NOT be ", s += "maxLength" == r ? "longer" : "shorter", s += " than ", s += d ? "' + " + a + " + '" : "" + n, s += " characters' "), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";
                var v = s;
                return s = m.pop(), !e.compositeRule && u ? e.async ? s += " throw new ValidationError([" + v + "]); " : s += " validate.errors = [" + v + "]; return false; " : s += " var err = " + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", u && (s += " else { "), s
            }
        },
        78204: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a, s = " ",
                    o = e.level,
                    i = e.dataLevel,
                    n = e.schema[r],
                    l = e.schemaPath + e.util.getProperty(r),
                    c = e.errSchemaPath + "/" + r,
                    u = !e.opts.allErrors,
                    h = "data" + (i || ""),
                    d = e.opts.$data && n && n.$data;
                if (d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, !d && "number" != typeof n) throw new Error(r + " must be number");
                s += "if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != 'number') || "), s += " Object.keys(" + h + ").length " + ("maxProperties" == r ? ">" : "<") + " " + a + ") { ";
                var p = r,
                    f = f || [];
                f.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '" + (p || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + a + " } ", !1 !== e.opts.messages && (s += " , message: 'should NOT have ", s += "maxProperties" == r ? "more" : "fewer", s += " than ", s += d ? "' + " + a + " + '" : "" + n, s += " properties' "), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";
                var m = s;
                return s = f.pop(), !e.compositeRule && u ? e.async ? s += " throw new ValidationError([" + m + "]); " : s += " validate.errors = [" + m + "]; return false; " : s += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", u && (s += " else { "), s
            }
        },
        42988: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.schema[r],
                    o = e.schemaPath + e.util.getProperty(r),
                    i = e.errSchemaPath + "/" + r,
                    n = !e.opts.allErrors,
                    l = e.util.copy(e),
                    c = "";
                l.level++;
                var u = "valid" + l.level,
                    h = l.baseId,
                    d = !0,
                    p = s;
                if (p)
                    for (var f, m = -1, v = p.length - 1; m < v;) f = p[m += 1], (e.opts.strictKeywords ? "object" == typeof f && Object.keys(f).length > 0 || !1 === f : e.util.schemaHasRules(f, e.RULES.all)) && (d = !1, l.schema = f, l.schemaPath = o + "[" + m + "]", l.errSchemaPath = i + "/" + m, a += "  " + e.validate(l) + " ", l.baseId = h, n && (a += " if (" + u + ") { ", c += "}"));
                return n && (a += d ? " if (true) { " : " " + c.slice(0, -1) + " "), a
            }
        },
        39996: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "valid" + s,
                    d = "errs__" + s,
                    p = e.util.copy(e),
                    f = "";
                p.level++;
                var m = "valid" + p.level,
                    v = i.every((function(r) {
                        return e.opts.strictKeywords ? "object" == typeof r && Object.keys(r).length > 0 || !1 === r : e.util.schemaHasRules(r, e.RULES.all)
                    }));
                if (v) {
                    var y = p.baseId;
                    a += " var " + d + " = errors; var " + h + " = false;  ";
                    var g = e.compositeRule;
                    e.compositeRule = p.compositeRule = !0;
                    var P = i;
                    if (P)
                        for (var E, b = -1, w = P.length - 1; b < w;) E = P[b += 1], p.schema = E, p.schemaPath = n + "[" + b + "]", p.errSchemaPath = l + "/" + b, a += "  " + e.validate(p) + " ", p.baseId = y, a += " " + h + " = " + h + " || " + m + "; if (!" + h + ") { ", f += "}";
                    e.compositeRule = p.compositeRule = g, a += " " + f + " if (!" + h + ") {   var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? a += " throw new ValidationError(vErrors); " : a += " validate.errors = vErrors; return false; "), a += " } else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } ", e.opts.allErrors && (a += " } ")
                } else c && (a += " if (true) { ");
                return a
            }
        },
        57812: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.schema[r],
                    o = e.errSchemaPath + "/" + r,
                    i = (e.opts.allErrors, e.util.toQuotedString(s));
                return !0 === e.opts.$comment ? a += " console.log(" + i + ");" : "function" == typeof e.opts.$comment && (a += " self._opts.$comment(" + i + ", " + e.util.toQuotedString(o) + ", validate.root.schema);"), a
            }
        },
        25306: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "valid" + s,
                    d = e.opts.$data && i && i.$data;
                d && (a += " var schema" + s + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; "), d || (a += " var schema" + s + " = validate.schema" + n + ";"), a += "var " + h + " = equal(" + u + ", schema" + s + "); if (!" + h + ") {   ";
                var p = p || [];
                p.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { allowedValue: schema" + s + " } ", !1 !== e.opts.messages && (a += " , message: 'should be equal to constant' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                var f = a;
                return a = p.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + f + "]); " : a += " validate.errors = [" + f + "]; return false; " : a += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " }", c && (a += " else { "), a
            }
        },
        2840: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "valid" + s,
                    d = "errs__" + s,
                    p = e.util.copy(e);
                p.level++;
                var f = "valid" + p.level,
                    m = "i" + s,
                    v = p.dataLevel = e.dataLevel + 1,
                    y = "data" + v,
                    g = e.baseId,
                    P = e.opts.strictKeywords ? "object" == typeof i && Object.keys(i).length > 0 || !1 === i : e.util.schemaHasRules(i, e.RULES.all);
                if (a += "var " + d + " = errors;var " + h + ";", P) {
                    var E = e.compositeRule;
                    e.compositeRule = p.compositeRule = !0, p.schema = i, p.schemaPath = n, p.errSchemaPath = l, a += " var " + f + " = false; for (var " + m + " = 0; " + m + " < " + u + ".length; " + m + "++) { ", p.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers, !0);
                    var b = u + "[" + m + "]";
                    p.dataPathArr[v] = m;
                    var w = e.validate(p);
                    p.baseId = g, e.util.varOccurences(w, y) < 2 ? a += " " + e.util.varReplace(w, y, b) + " " : a += " var " + y + " = " + b + "; " + w + " ", a += " if (" + f + ") break; }  ", e.compositeRule = p.compositeRule = E, a += "  if (!" + f + ") {"
                } else a += " if (" + u + ".length == 0) {";
                var S = S || [];
                S.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: 'should contain a valid item' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                var x = a;
                return a = S.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + x + "]); " : a += " validate.errors = [" + x + "]; return false; " : a += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else { ", P && (a += "  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; } "), e.opts.allErrors && (a += " } "), a
            }
        },
        14165: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a, s, o = " ",
                    i = e.level,
                    n = e.dataLevel,
                    l = e.schema[r],
                    c = e.schemaPath + e.util.getProperty(r),
                    u = e.errSchemaPath + "/" + r,
                    h = !e.opts.allErrors,
                    d = "data" + (n || ""),
                    p = "valid" + i,
                    f = "errs__" + i,
                    m = e.opts.$data && l && l.$data;
                m ? (o += " var schema" + i + " = " + e.util.getData(l.$data, n, e.dataPathArr) + "; ", s = "schema" + i) : s = l;
                var v, y, g, P, E, b = this,
                    w = "definition" + i,
                    S = b.definition,
                    x = "";
                if (m && S.$data) {
                    E = "keywordValidate" + i;
                    var _ = S.validateSchema;
                    o += " var " + w + " = RULES.custom['" + r + "'].definition; var " + E + " = " + w + ".validate;"
                } else {
                    if (!(P = e.useCustomRule(b, l, e.schema, e))) return;
                    s = "validate.schema" + c, E = P.code, v = S.compile, y = S.inline, g = S.macro
                }
                var $ = E + ".errors",
                    F = "i" + i,
                    R = "ruleErr" + i,
                    D = S.async;
                if (D && !e.async) throw new Error("async keyword in sync schema");
                if (y || g || (o += $ + " = null;"), o += "var " + f + " = errors;var " + p + ";", m && S.$data && (x += "}", o += " if (" + s + " === undefined) { " + p + " = true; } else { ", _ && (x += "}", o += " " + p + " = " + w + ".validateSchema(" + s + "); if (" + p + ") { ")), y) S.statements ? o += " " + P.validate + " " : o += " " + p + " = " + P.validate + "; ";
                else if (g) {
                    var j = e.util.copy(e);
                    x = "";
                    j.level++;
                    var O = "valid" + j.level;
                    j.schema = P.validate, j.schemaPath = "";
                    var I = e.compositeRule;
                    e.compositeRule = j.compositeRule = !0;
                    var k = e.validate(j).replace(/validate\.schema/g, E);
                    e.compositeRule = j.compositeRule = I, o += " " + k
                } else {
                    (T = T || []).push(o), o = "", o += "  " + E + ".call( ", e.opts.passContext ? o += "this" : o += "self", v || !1 === S.schema ? o += " , " + d + " " : o += " , " + s + " , " + d + " , validate.schema" + e.schemaPath + " ", o += " , (dataPath || '')", '""' != e.errorPath && (o += " + " + e.errorPath);
                    var A = n ? "data" + (n - 1 || "") : "parentData",
                        C = n ? e.dataPathArr[n] : "parentDataProperty",
                        L = o += " , " + A + " , " + C + " , rootData )  ";
                    o = T.pop(), !1 === S.errors ? (o += " " + p + " = ", D && (o += "await "), o += L + "; ") : o += D ? " var " + ($ = "customErrors" + i) + " = null; try { " + p + " = await " + L + "; } catch (e) { " + p + " = false; if (e instanceof ValidationError) " + $ + " = e.errors; else throw e; } " : " " + $ + " = null; " + p + " = " + L + "; "
                }
                if (S.modifying && (o += " if (" + A + ") " + d + " = " + A + "[" + C + "];"), o += "" + x, S.valid) h && (o += " if (true) { ");
                else {
                    var T;
                    o += " if ( ", void 0 === S.valid ? (o += " !", o += g ? "" + O : "" + p) : o += " " + !S.valid + " ", o += ") { ", a = b.keyword, (T = T || []).push(o), o = "", (T = T || []).push(o), o = "", !1 !== e.createErrors ? (o += " { keyword: '" + (a || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { keyword: '" + b.keyword + "' } ", !1 !== e.opts.messages && (o += " , message: 'should pass \"" + b.keyword + "\" keyword validation' "), e.opts.verbose && (o += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), o += " } ") : o += " {} ";
                    var N = o;
                    o = T.pop(), !e.compositeRule && h ? e.async ? o += " throw new ValidationError([" + N + "]); " : o += " validate.errors = [" + N + "]; return false; " : o += " var err = " + N + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
                    var z = o;
                    o = T.pop(), y ? S.errors ? "full" != S.errors && (o += "  for (var " + F + "=" + f + "; " + F + "<errors; " + F + "++) { var " + R + " = vErrors[" + F + "]; if (" + R + ".dataPath === undefined) " + R + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + R + ".schemaPath === undefined) { " + R + '.schemaPath = "' + u + '"; } ', e.opts.verbose && (o += " " + R + ".schema = " + s + "; " + R + ".data = " + d + "; "), o += " } ") : !1 === S.errors ? o += " " + z + " " : (o += " if (" + f + " == errors) { " + z + " } else {  for (var " + F + "=" + f + "; " + F + "<errors; " + F + "++) { var " + R + " = vErrors[" + F + "]; if (" + R + ".dataPath === undefined) " + R + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + R + ".schemaPath === undefined) { " + R + '.schemaPath = "' + u + '"; } ', e.opts.verbose && (o += " " + R + ".schema = " + s + "; " + R + ".data = " + d + "; "), o += " } } ") : g ? (o += "   var err =   ", !1 !== e.createErrors ? (o += " { keyword: '" + (a || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(u) + " , params: { keyword: '" + b.keyword + "' } ", !1 !== e.opts.messages && (o += " , message: 'should pass \"" + b.keyword + "\" keyword validation' "), e.opts.verbose && (o += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + d + " "), o += " } ") : o += " {} ", o += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && h && (e.async ? o += " throw new ValidationError(vErrors); " : o += " validate.errors = vErrors; return false; ")) : !1 === S.errors ? o += " " + z + " " : (o += " if (Array.isArray(" + $ + ")) { if (vErrors === null) vErrors = " + $ + "; else vErrors = vErrors.concat(" + $ + "); errors = vErrors.length;  for (var " + F + "=" + f + "; " + F + "<errors; " + F + "++) { var " + R + " = vErrors[" + F + "]; if (" + R + ".dataPath === undefined) " + R + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + R + '.schemaPath = "' + u + '";  ', e.opts.verbose && (o += " " + R + ".schema = " + s + "; " + R + ".data = " + d + "; "), o += " } } else { " + z + " } "), o += " } ", h && (o += " else { ")
                }
                return o
            }
        },
        66659: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "errs__" + s,
                    d = e.util.copy(e),
                    p = "";
                d.level++;
                var f = "valid" + d.level,
                    m = {},
                    v = {},
                    y = e.opts.ownProperties;
                for (b in i)
                    if ("__proto__" != b) {
                        var g = i[b],
                            P = Array.isArray(g) ? v : m;
                        P[b] = g
                    }
                a += "var " + h + " = errors;";
                var E = e.errorPath;
                for (var b in a += "var missing" + s + ";", v)
                    if ((P = v[b]).length) {
                        if (a += " if ( " + u + e.util.getProperty(b) + " !== undefined ", y && (a += " && Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(b) + "') "), c) {
                            a += " && ( ";
                            var w = P;
                            if (w)
                                for (var S = -1, x = w.length - 1; S < x;) {
                                    j = w[S += 1], S && (a += " || "), a += " ( ( " + (A = u + (k = e.util.getProperty(j))) + " === undefined ", y && (a += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(j) + "') "), a += ") && (missing" + s + " = " + e.util.toQuotedString(e.opts.jsonPointers ? j : k) + ") ) "
                                }
                            a += ")) {  ";
                            var _ = "missing" + s,
                                $ = "' + " + _ + " + '";
                            e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(E, _, !0) : E + " + " + _);
                            var F = F || [];
                            F.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { property: '" + e.util.escapeQuotes(b) + "', missingProperty: '" + $ + "', depsCount: " + P.length + ", deps: '" + e.util.escapeQuotes(1 == P.length ? P[0] : P.join(", ")) + "' } ", !1 !== e.opts.messages && (a += " , message: 'should have ", 1 == P.length ? a += "property " + e.util.escapeQuotes(P[0]) : a += "properties " + e.util.escapeQuotes(P.join(", ")), a += " when property " + e.util.escapeQuotes(b) + " is present' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                            var R = a;
                            a = F.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + R + "]); " : a += " validate.errors = [" + R + "]; return false; " : a += " var err = " + R + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
                        } else {
                            a += " ) { ";
                            var D = P;
                            if (D)
                                for (var j, O = -1, I = D.length - 1; O < I;) {
                                    j = D[O += 1];
                                    var k = e.util.getProperty(j),
                                        A = ($ = e.util.escapeQuotes(j), u + k);
                                    e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(E, j, e.opts.jsonPointers)), a += " if ( " + A + " === undefined ", y && (a += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(j) + "') "), a += ") {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { property: '" + e.util.escapeQuotes(b) + "', missingProperty: '" + $ + "', depsCount: " + P.length + ", deps: '" + e.util.escapeQuotes(1 == P.length ? P[0] : P.join(", ")) + "' } ", !1 !== e.opts.messages && (a += " , message: 'should have ", 1 == P.length ? a += "property " + e.util.escapeQuotes(P[0]) : a += "properties " + e.util.escapeQuotes(P.join(", ")), a += " when property " + e.util.escapeQuotes(b) + " is present' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
                                }
                        }
                        a += " }   ", c && (p += "}", a += " else { ")
                    }
                e.errorPath = E;
                var C = d.baseId;
                for (var b in m) {
                    g = m[b];
                    (e.opts.strictKeywords ? "object" == typeof g && Object.keys(g).length > 0 || !1 === g : e.util.schemaHasRules(g, e.RULES.all)) && (a += " " + f + " = true; if ( " + u + e.util.getProperty(b) + " !== undefined ", y && (a += " && Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(b) + "') "), a += ") { ", d.schema = g, d.schemaPath = n + e.util.getProperty(b), d.errSchemaPath = l + "/" + e.util.escapeFragment(b), a += "  " + e.validate(d) + " ", d.baseId = C, a += " }  ", c && (a += " if (" + f + ") { ", p += "}"))
                }
                return c && (a += "   " + p + " if (" + h + " == errors) {"), a
            }
        },
        31740: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "valid" + s,
                    d = e.opts.$data && i && i.$data;
                d && (a += " var schema" + s + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ");
                var p = "i" + s,
                    f = "schema" + s;
                d || (a += " var " + f + " = validate.schema" + n + ";"), a += "var " + h + ";", d && (a += " if (schema" + s + " === undefined) " + h + " = true; else if (!Array.isArray(schema" + s + ")) " + h + " = false; else {"), a += h + " = false;for (var " + p + "=0; " + p + "<" + f + ".length; " + p + "++) if (equal(" + u + ", " + f + "[" + p + "])) { " + h + " = true; break; }", d && (a += "  }  "), a += " if (!" + h + ") {   ";
                var m = m || [];
                m.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { allowedValues: schema" + s + " } ", !1 !== e.opts.messages && (a += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                var v = a;
                return a = m.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + v + "]); " : a += " validate.errors = [" + v + "]; return false; " : a += " var err = " + v + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " }", c && (a += " else { "), a
            }
        },
        39014: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || "");
                if (!1 === e.opts.format) return c && (a += " if (true) { "), a;
                var h, d = e.opts.$data && i && i.$data;
                d ? (a += " var schema" + s + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ", h = "schema" + s) : h = i;
                var p = e.opts.unknownFormats,
                    f = Array.isArray(p);
                if (d) {
                    a += " var " + (m = "format" + s) + " = formats[" + h + "]; var " + (v = "isObject" + s) + " = typeof " + m + " == 'object' && !(" + m + " instanceof RegExp) && " + m + ".validate; var " + (y = "formatType" + s) + " = " + v + " && " + m + ".type || 'string'; if (" + v + ") { ", e.async && (a += " var async" + s + " = " + m + ".async; "), a += " " + m + " = " + m + ".validate; } if (  ", d && (a += " (" + h + " !== undefined && typeof " + h + " != 'string') || "), a += " (", "ignore" != p && (a += " (" + h + " && !" + m + " ", f && (a += " && self._opts.unknownFormats.indexOf(" + h + ") == -1 "), a += ") || "), a += " (" + m + " && " + y + " == '" + t + "' && !(typeof " + m + " == 'function' ? ", e.async ? a += " (async" + s + " ? await " + m + "(" + u + ") : " + m + "(" + u + ")) " : a += " " + m + "(" + u + ") ", a += " : " + m + ".test(" + u + "))))) {"
                } else {
                    var m;
                    if (!(m = e.formats[i])) {
                        if ("ignore" == p) return e.logger.warn('unknown format "' + i + '" ignored in schema at path "' + e.errSchemaPath + '"'), c && (a += " if (true) { "), a;
                        if (f && p.indexOf(i) >= 0) return c && (a += " if (true) { "), a;
                        throw new Error('unknown format "' + i + '" is used in schema at path "' + e.errSchemaPath + '"')
                    }
                    var v, y = (v = "object" == typeof m && !(m instanceof RegExp) && m.validate) && m.type || "string";
                    if (v) {
                        var g = !0 === m.async;
                        m = m.validate
                    }
                    if (y != t) return c && (a += " if (true) { "), a;
                    if (g) {
                        if (!e.async) throw new Error("async format in sync schema");
                        a += " if (!(await " + (P = "formats" + e.util.getProperty(i) + ".validate") + "(" + u + "))) { "
                    } else {
                        a += " if (! ";
                        var P = "formats" + e.util.getProperty(i);
                        v && (P += ".validate"), a += "function" == typeof m ? " " + P + "(" + u + ") " : " " + P + ".test(" + u + ") ", a += ") { "
                    }
                }
                var E = E || [];
                E.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { format:  ", a += d ? "" + h : "" + e.util.toQuotedString(i), a += "  } ", !1 !== e.opts.messages && (a += " , message: 'should match format \"", a += d ? "' + " + h + " + '" : "" + e.util.escapeQuotes(i), a += "\"' "), e.opts.verbose && (a += " , schema:  ", a += d ? "validate.schema" + n : "" + e.util.toQuotedString(i), a += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                var b = a;
                return a = E.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + b + "]); " : a += " validate.errors = [" + b + "]; return false; " : a += " var err = " + b + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } ", c && (a += " else { "), a
            }
        },
        17231: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "valid" + s,
                    d = "errs__" + s,
                    p = e.util.copy(e);
                p.level++;
                var f = "valid" + p.level,
                    m = e.schema.then,
                    v = e.schema.else,
                    y = void 0 !== m && (e.opts.strictKeywords ? "object" == typeof m && Object.keys(m).length > 0 || !1 === m : e.util.schemaHasRules(m, e.RULES.all)),
                    g = void 0 !== v && (e.opts.strictKeywords ? "object" == typeof v && Object.keys(v).length > 0 || !1 === v : e.util.schemaHasRules(v, e.RULES.all)),
                    P = p.baseId;
                if (y || g) {
                    var E;
                    p.createErrors = !1, p.schema = i, p.schemaPath = n, p.errSchemaPath = l, a += " var " + d + " = errors; var " + h + " = true;  ";
                    var b = e.compositeRule;
                    e.compositeRule = p.compositeRule = !0, a += "  " + e.validate(p) + " ", p.baseId = P, p.createErrors = !0, a += "  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }  ", e.compositeRule = p.compositeRule = b, y ? (a += " if (" + f + ") {  ", p.schema = e.schema.then, p.schemaPath = e.schemaPath + ".then", p.errSchemaPath = e.errSchemaPath + "/then", a += "  " + e.validate(p) + " ", p.baseId = P, a += " " + h + " = " + f + "; ", y && g ? a += " var " + (E = "ifClause" + s) + " = 'then'; " : E = "'then'", a += " } ", g && (a += " else { ")) : a += " if (!" + f + ") { ", g && (p.schema = e.schema.else, p.schemaPath = e.schemaPath + ".else", p.errSchemaPath = e.errSchemaPath + "/else", a += "  " + e.validate(p) + " ", p.baseId = P, a += " " + h + " = " + f + "; ", y && g ? a += " var " + (E = "ifClause" + s) + " = 'else'; " : E = "'else'", a += " } "), a += " if (!" + h + ") {   var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { failingKeyword: " + E + " } ", !1 !== e.opts.messages && (a += " , message: 'should match \"' + " + E + " + '\" schema' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? a += " throw new ValidationError(vErrors); " : a += " validate.errors = vErrors; return false; "), a += " }   ", c && (a += " else { ")
                } else c && (a += " if (true) { ");
                return a
            }
        },
        66674: function(e, r, t) {
            "use strict";
            e.exports = {
                $ref: t(62392),
                allOf: t(42988),
                anyOf: t(39996),
                $comment: t(57812),
                const: t(25306),
                contains: t(2840),
                dependencies: t(66659),
                enum: t(31740),
                format: t(39014),
                if: t(17231),
                items: t(37482),
                maximum: t(18210),
                minimum: t(18210),
                maxItems: t(33038),
                minItems: t(33038),
                maxLength: t(80425),
                minLength: t(80425),
                maxProperties: t(78204),
                minProperties: t(78204),
                multipleOf: t(43673),
                not: t(28528),
                oneOf: t(59709),
                pattern: t(49614),
                properties: t(81175),
                propertyNames: t(58441),
                required: t(71287),
                uniqueItems: t(3603),
                validate: t(19508)
            }
        },
        37482: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "valid" + s,
                    d = "errs__" + s,
                    p = e.util.copy(e),
                    f = "";
                p.level++;
                var m = "valid" + p.level,
                    v = "i" + s,
                    y = p.dataLevel = e.dataLevel + 1,
                    g = "data" + y,
                    P = e.baseId;
                if (a += "var " + d + " = errors;var " + h + ";", Array.isArray(i)) {
                    var E = e.schema.additionalItems;
                    if (!1 === E) {
                        a += " " + h + " = " + u + ".length <= " + i.length + "; ";
                        var b = l;
                        l = e.errSchemaPath + "/additionalItems", a += "  if (!" + h + ") {   ";
                        var w = w || [];
                        w.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { limit: " + i.length + " } ", !1 !== e.opts.messages && (a += " , message: 'should NOT have more than " + i.length + " items' "), e.opts.verbose && (a += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                        var S = a;
                        a = w.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + S + "]); " : a += " validate.errors = [" + S + "]; return false; " : a += " var err = " + S + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } ", l = b, c && (f += "}", a += " else { ")
                    }
                    var x = i;
                    if (x)
                        for (var _, $ = -1, F = x.length - 1; $ < F;)
                            if (_ = x[$ += 1], e.opts.strictKeywords ? "object" == typeof _ && Object.keys(_).length > 0 || !1 === _ : e.util.schemaHasRules(_, e.RULES.all)) {
                                a += " " + m + " = true; if (" + u + ".length > " + $ + ") { ";
                                var R = u + "[" + $ + "]";
                                p.schema = _, p.schemaPath = n + "[" + $ + "]", p.errSchemaPath = l + "/" + $, p.errorPath = e.util.getPathExpr(e.errorPath, $, e.opts.jsonPointers, !0), p.dataPathArr[y] = $;
                                var D = e.validate(p);
                                p.baseId = P, e.util.varOccurences(D, g) < 2 ? a += " " + e.util.varReplace(D, g, R) + " " : a += " var " + g + " = " + R + "; " + D + " ", a += " }  ", c && (a += " if (" + m + ") { ", f += "}")
                            }
                    if ("object" == typeof E && (e.opts.strictKeywords ? "object" == typeof E && Object.keys(E).length > 0 || !1 === E : e.util.schemaHasRules(E, e.RULES.all))) {
                        p.schema = E, p.schemaPath = e.schemaPath + ".additionalItems", p.errSchemaPath = e.errSchemaPath + "/additionalItems", a += " " + m + " = true; if (" + u + ".length > " + i.length + ") {  for (var " + v + " = " + i.length + "; " + v + " < " + u + ".length; " + v + "++) { ", p.errorPath = e.util.getPathExpr(e.errorPath, v, e.opts.jsonPointers, !0);
                        R = u + "[" + v + "]";
                        p.dataPathArr[y] = v;
                        D = e.validate(p);
                        p.baseId = P, e.util.varOccurences(D, g) < 2 ? a += " " + e.util.varReplace(D, g, R) + " " : a += " var " + g + " = " + R + "; " + D + " ", c && (a += " if (!" + m + ") break; "), a += " } }  ", c && (a += " if (" + m + ") { ", f += "}")
                    }
                } else if (e.opts.strictKeywords ? "object" == typeof i && Object.keys(i).length > 0 || !1 === i : e.util.schemaHasRules(i, e.RULES.all)) {
                    p.schema = i, p.schemaPath = n, p.errSchemaPath = l, a += "  for (var " + v + " = 0; " + v + " < " + u + ".length; " + v + "++) { ", p.errorPath = e.util.getPathExpr(e.errorPath, v, e.opts.jsonPointers, !0);
                    R = u + "[" + v + "]";
                    p.dataPathArr[y] = v;
                    D = e.validate(p);
                    p.baseId = P, e.util.varOccurences(D, g) < 2 ? a += " " + e.util.varReplace(D, g, R) + " " : a += " var " + g + " = " + R + "; " + D + " ", c && (a += " if (!" + m + ") break; "), a += " }"
                }
                return c && (a += " " + f + " if (" + d + " == errors) {"), a
            }
        },
        43673: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a, s = " ",
                    o = e.level,
                    i = e.dataLevel,
                    n = e.schema[r],
                    l = e.schemaPath + e.util.getProperty(r),
                    c = e.errSchemaPath + "/" + r,
                    u = !e.opts.allErrors,
                    h = "data" + (i || ""),
                    d = e.opts.$data && n && n.$data;
                if (d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, !d && "number" != typeof n) throw new Error(r + " must be number");
                s += "var division" + o + ";if (", d && (s += " " + a + " !== undefined && ( typeof " + a + " != 'number' || "), s += " (division" + o + " = " + h + " / " + a + ", ", e.opts.multipleOfPrecision ? s += " Math.abs(Math.round(division" + o + ") - division" + o + ") > 1e-" + e.opts.multipleOfPrecision + " " : s += " division" + o + " !== parseInt(division" + o + ") ", s += " ) ", d && (s += "  )  "), s += " ) {   ";
                var p = p || [];
                p.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { multipleOf: " + a + " } ", !1 !== e.opts.messages && (s += " , message: 'should be multiple of ", s += d ? "' + " + a : a + "'"), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";
                var f = s;
                return s = p.pop(), !e.compositeRule && u ? e.async ? s += " throw new ValidationError([" + f + "]); " : s += " validate.errors = [" + f + "]; return false; " : s += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", u && (s += " else { "), s
            }
        },
        28528: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "errs__" + s,
                    d = e.util.copy(e);
                d.level++;
                var p = "valid" + d.level;
                if (e.opts.strictKeywords ? "object" == typeof i && Object.keys(i).length > 0 || !1 === i : e.util.schemaHasRules(i, e.RULES.all)) {
                    d.schema = i, d.schemaPath = n, d.errSchemaPath = l, a += " var " + h + " = errors;  ";
                    var f, m = e.compositeRule;
                    e.compositeRule = d.compositeRule = !0, d.createErrors = !1, d.opts.allErrors && (f = d.opts.allErrors, d.opts.allErrors = !1), a += " " + e.validate(d) + " ", d.createErrors = !0, f && (d.opts.allErrors = f), e.compositeRule = d.compositeRule = m, a += " if (" + p + ") {   ";
                    var v = v || [];
                    v.push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: 'should NOT be valid' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                    var y = a;
                    a = v.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + y + "]); " : a += " validate.errors = [" + y + "]; return false; " : a += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else {  errors = " + h + "; if (vErrors !== null) { if (" + h + ") vErrors.length = " + h + "; else vErrors = null; } ", e.opts.allErrors && (a += " } ")
                } else a += "  var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: 'should NOT be valid' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c && (a += " if (false) { ");
                return a
            }
        },
        59709: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "valid" + s,
                    d = "errs__" + s,
                    p = e.util.copy(e),
                    f = "";
                p.level++;
                var m = "valid" + p.level,
                    v = p.baseId,
                    y = "prevValid" + s,
                    g = "passingSchemas" + s;
                a += "var " + d + " = errors , " + y + " = false , " + h + " = false , " + g + " = null; ";
                var P = e.compositeRule;
                e.compositeRule = p.compositeRule = !0;
                var E = i;
                if (E)
                    for (var b, w = -1, S = E.length - 1; w < S;) b = E[w += 1], (e.opts.strictKeywords ? "object" == typeof b && Object.keys(b).length > 0 || !1 === b : e.util.schemaHasRules(b, e.RULES.all)) ? (p.schema = b, p.schemaPath = n + "[" + w + "]", p.errSchemaPath = l + "/" + w, a += "  " + e.validate(p) + " ", p.baseId = v) : a += " var " + m + " = true; ", w && (a += " if (" + m + " && " + y + ") { " + h + " = false; " + g + " = [" + g + ", " + w + "]; } else { ", f += "}"), a += " if (" + m + ") { " + h + " = " + y + " = true; " + g + " = " + w + "; }";
                return e.compositeRule = p.compositeRule = P, a += f + "if (!" + h + ") {   var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { passingSchemas: " + g + " } ", !1 !== e.opts.messages && (a += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? a += " throw new ValidationError(vErrors); " : a += " validate.errors = vErrors; return false; "), a += "} else {  errors = " + d + "; if (vErrors !== null) { if (" + d + ") vErrors.length = " + d + "; else vErrors = null; }", e.opts.allErrors && (a += " } "), a
            }
        },
        49614: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a, s = " ",
                    o = e.level,
                    i = e.dataLevel,
                    n = e.schema[r],
                    l = e.schemaPath + e.util.getProperty(r),
                    c = e.errSchemaPath + "/" + r,
                    u = !e.opts.allErrors,
                    h = "data" + (i || ""),
                    d = e.opts.$data && n && n.$data;
                d ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, s += "if ( ", d && (s += " (" + a + " !== undefined && typeof " + a + " != 'string') || "), s += " !" + (d ? "(new RegExp(" + a + "))" : e.usePattern(n)) + ".test(" + h + ") ) {   ";
                var p = p || [];
                p.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { pattern:  ", s += d ? "" + a : "" + e.util.toQuotedString(n), s += "  } ", !1 !== e.opts.messages && (s += " , message: 'should match pattern \"", s += d ? "' + " + a + " + '" : "" + e.util.escapeQuotes(n), s += "\"' "), e.opts.verbose && (s += " , schema:  ", s += d ? "validate.schema" + l : "" + e.util.toQuotedString(n), s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";
                var f = s;
                return s = p.pop(), !e.compositeRule && u ? e.async ? s += " throw new ValidationError([" + f + "]); " : s += " validate.errors = [" + f + "]; return false; " : s += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", u && (s += " else { "), s
            }
        },
        81175: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "errs__" + s,
                    d = e.util.copy(e),
                    p = "";
                d.level++;
                var f = "valid" + d.level,
                    m = "key" + s,
                    v = "idx" + s,
                    y = d.dataLevel = e.dataLevel + 1,
                    g = "data" + y,
                    P = "dataProperties" + s,
                    E = Object.keys(i || {}).filter(k),
                    b = e.schema.patternProperties || {},
                    w = Object.keys(b).filter(k),
                    S = e.schema.additionalProperties,
                    x = E.length || w.length,
                    _ = !1 === S,
                    $ = "object" == typeof S && Object.keys(S).length,
                    F = e.opts.removeAdditional,
                    R = _ || $ || F,
                    D = e.opts.ownProperties,
                    j = e.baseId,
                    O = e.schema.required;
                if (O && (!e.opts.$data || !O.$data) && O.length < e.opts.loopRequired) var I = e.util.toHash(O);

                function k(e) {
                    return "__proto__" !== e
                }
                if (a += "var " + h + " = errors;var " + f + " = true;", D && (a += " var " + P + " = undefined;"), R) {
                    if (a += D ? " " + P + " = " + P + " || Object.keys(" + u + "); for (var " + v + "=0; " + v + "<" + P + ".length; " + v + "++) { var " + m + " = " + P + "[" + v + "]; " : " for (var " + m + " in " + u + ") { ", x) {
                        if (a += " var isAdditional" + s + " = !(false ", E.length)
                            if (E.length > 8) a += " || validate.schema" + n + ".hasOwnProperty(" + m + ") ";
                            else {
                                var A = E;
                                if (A)
                                    for (var C = -1, L = A.length - 1; C < L;) G = A[C += 1], a += " || " + m + " == " + e.util.toQuotedString(G) + " "
                            }
                        if (w.length) {
                            var T = w;
                            if (T)
                                for (var N = -1, z = T.length - 1; N < z;) oe = T[N += 1], a += " || " + e.usePattern(oe) + ".test(" + m + ") "
                        }
                        a += " ); if (isAdditional" + s + ") { "
                    }
                    if ("all" == F) a += " delete " + u + "[" + m + "]; ";
                    else {
                        var V = e.errorPath,
                            q = "' + " + m + " + '";
                        if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers)), _)
                            if (F) a += " delete " + u + "[" + m + "]; ";
                            else {
                                a += " " + f + " = false; ";
                                var Q = l;
                                l = e.errSchemaPath + "/additionalProperties", (te = te || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { additionalProperty: '" + q + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is an invalid additional property" : a += "should NOT have additional properties", a += "' "), e.opts.verbose && (a += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                                var U = a;
                                a = te.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + U + "]); " : a += " validate.errors = [" + U + "]; return false; " : a += " var err = " + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", l = Q, c && (a += " break; ")
                            }
                        else if ($)
                            if ("failing" == F) {
                                a += " var " + h + " = errors;  ";
                                var M = e.compositeRule;
                                e.compositeRule = d.compositeRule = !0, d.schema = S, d.schemaPath = e.schemaPath + ".additionalProperties", d.errSchemaPath = e.errSchemaPath + "/additionalProperties", d.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers);
                                var H = u + "[" + m + "]";
                                d.dataPathArr[y] = m;
                                var K = e.validate(d);
                                d.baseId = j, e.util.varOccurences(K, g) < 2 ? a += " " + e.util.varReplace(K, g, H) + " " : a += " var " + g + " = " + H + "; " + K + " ", a += " if (!" + f + ") { errors = " + h + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + u + "[" + m + "]; }  ", e.compositeRule = d.compositeRule = M
                            } else {
                                d.schema = S, d.schemaPath = e.schemaPath + ".additionalProperties", d.errSchemaPath = e.errSchemaPath + "/additionalProperties", d.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers);
                                H = u + "[" + m + "]";
                                d.dataPathArr[y] = m;
                                K = e.validate(d);
                                d.baseId = j, e.util.varOccurences(K, g) < 2 ? a += " " + e.util.varReplace(K, g, H) + " " : a += " var " + g + " = " + H + "; " + K + " ", c && (a += " if (!" + f + ") break; ")
                            }
                        e.errorPath = V
                    }
                    x && (a += " } "), a += " }  ", c && (a += " if (" + f + ") { ", p += "}")
                }
                var B = e.opts.useDefaults && !e.compositeRule;
                if (E.length) {
                    var J = E;
                    if (J)
                        for (var G, Z = -1, W = J.length - 1; Z < W;) {
                            var X = i[G = J[Z += 1]];
                            if (e.opts.strictKeywords ? "object" == typeof X && Object.keys(X).length > 0 || !1 === X : e.util.schemaHasRules(X, e.RULES.all)) {
                                var Y = e.util.getProperty(G),
                                    ee = (H = u + Y, B && void 0 !== X.default);
                                d.schema = X, d.schemaPath = n + Y, d.errSchemaPath = l + "/" + e.util.escapeFragment(G), d.errorPath = e.util.getPath(e.errorPath, G, e.opts.jsonPointers), d.dataPathArr[y] = e.util.toQuotedString(G);
                                K = e.validate(d);
                                if (d.baseId = j, e.util.varOccurences(K, g) < 2) {
                                    K = e.util.varReplace(K, g, H);
                                    var re = H
                                } else {
                                    re = g;
                                    a += " var " + g + " = " + H + "; "
                                }
                                if (ee) a += " " + K + " ";
                                else {
                                    if (I && I[G]) {
                                        a += " if ( " + re + " === undefined ", D && (a += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(G) + "') "), a += ") { " + f + " = false; ";
                                        V = e.errorPath, Q = l;
                                        var te, ae = e.util.escapeQuotes(G);
                                        e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(V, G, e.opts.jsonPointers)), l = e.errSchemaPath + "/required", (te = te || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + ae + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + ae + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                                        U = a;
                                        a = te.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + U + "]); " : a += " validate.errors = [" + U + "]; return false; " : a += " var err = " + U + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", l = Q, e.errorPath = V, a += " } else { "
                                    } else c ? (a += " if ( " + re + " === undefined ", D && (a += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(G) + "') "), a += ") { " + f + " = true; } else { ") : (a += " if (" + re + " !== undefined ", D && (a += " &&   Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(G) + "') "), a += " ) { ");
                                    a += " " + K + " } "
                                }
                            }
                            c && (a += " if (" + f + ") { ", p += "}")
                        }
                }
                if (w.length) {
                    var se = w;
                    if (se)
                        for (var oe, ie = -1, ne = se.length - 1; ie < ne;) {
                            X = b[oe = se[ie += 1]];
                            if (e.opts.strictKeywords ? "object" == typeof X && Object.keys(X).length > 0 || !1 === X : e.util.schemaHasRules(X, e.RULES.all)) {
                                d.schema = X, d.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(oe), d.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(oe), a += D ? " " + P + " = " + P + " || Object.keys(" + u + "); for (var " + v + "=0; " + v + "<" + P + ".length; " + v + "++) { var " + m + " = " + P + "[" + v + "]; " : " for (var " + m + " in " + u + ") { ", a += " if (" + e.usePattern(oe) + ".test(" + m + ")) { ", d.errorPath = e.util.getPathExpr(e.errorPath, m, e.opts.jsonPointers);
                                H = u + "[" + m + "]";
                                d.dataPathArr[y] = m;
                                K = e.validate(d);
                                d.baseId = j, e.util.varOccurences(K, g) < 2 ? a += " " + e.util.varReplace(K, g, H) + " " : a += " var " + g + " = " + H + "; " + K + " ", c && (a += " if (!" + f + ") break; "), a += " } ", c && (a += " else " + f + " = true; "), a += " }  ", c && (a += " if (" + f + ") { ", p += "}")
                            }
                        }
                }
                return c && (a += " " + p + " if (" + h + " == errors) {"), a
            }
        },
        58441: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "errs__" + s,
                    d = e.util.copy(e);
                d.level++;
                var p = "valid" + d.level;
                if (a += "var " + h + " = errors;", e.opts.strictKeywords ? "object" == typeof i && Object.keys(i).length > 0 || !1 === i : e.util.schemaHasRules(i, e.RULES.all)) {
                    d.schema = i, d.schemaPath = n, d.errSchemaPath = l;
                    var f = "key" + s,
                        m = "idx" + s,
                        v = "i" + s,
                        y = "' + " + f + " + '",
                        g = "data" + (d.dataLevel = e.dataLevel + 1),
                        P = "dataProperties" + s,
                        E = e.opts.ownProperties,
                        b = e.baseId;
                    E && (a += " var " + P + " = undefined; "), a += E ? " " + P + " = " + P + " || Object.keys(" + u + "); for (var " + m + "=0; " + m + "<" + P + ".length; " + m + "++) { var " + f + " = " + P + "[" + m + "]; " : " for (var " + f + " in " + u + ") { ", a += " var startErrs" + s + " = errors; ";
                    var w = f,
                        S = e.compositeRule;
                    e.compositeRule = d.compositeRule = !0;
                    var x = e.validate(d);
                    d.baseId = b, e.util.varOccurences(x, g) < 2 ? a += " " + e.util.varReplace(x, g, w) + " " : a += " var " + g + " = " + w + "; " + x + " ", e.compositeRule = d.compositeRule = S, a += " if (!" + p + ") { for (var " + v + "=startErrs" + s + "; " + v + "<errors; " + v + "++) { vErrors[" + v + "].propertyName = " + f + "; }   var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { propertyName: '" + y + "' } ", !1 !== e.opts.messages && (a += " , message: 'property name \\'" + y + "\\' is invalid' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? a += " throw new ValidationError(vErrors); " : a += " validate.errors = vErrors; return false; "), c && (a += " break; "), a += " } }"
                }
                return c && (a += "  if (" + h + " == errors) {"), a
            }
        },
        62392: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a, s, o = " ",
                    i = e.level,
                    n = e.dataLevel,
                    l = e.schema[r],
                    c = e.errSchemaPath + "/" + r,
                    u = !e.opts.allErrors,
                    h = "data" + (n || ""),
                    d = "valid" + i;
                if ("#" == l || "#/" == l) e.isRoot ? (a = e.async, s = "validate") : (a = !0 === e.root.schema.$async, s = "root.refVal[0]");
                else {
                    var p = e.resolveRef(e.baseId, l, e.isRoot);
                    if (void 0 === p) {
                        var f = e.MissingRefError.message(e.baseId, l);
                        if ("fail" == e.opts.missingRefs) {
                            e.logger.error(f), (g = g || []).push(o), o = "", !1 !== e.createErrors ? (o += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { ref: '" + e.util.escapeQuotes(l) + "' } ", !1 !== e.opts.messages && (o += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(l) + "' "), e.opts.verbose && (o += " , schema: " + e.util.toQuotedString(l) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), o += " } ") : o += " {} ";
                            var m = o;
                            o = g.pop(), !e.compositeRule && u ? e.async ? o += " throw new ValidationError([" + m + "]); " : o += " validate.errors = [" + m + "]; return false; " : o += " var err = " + m + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", u && (o += " if (false) { ")
                        } else {
                            if ("ignore" != e.opts.missingRefs) throw new e.MissingRefError(e.baseId, l, f);
                            e.logger.warn(f), u && (o += " if (true) { ")
                        }
                    } else if (p.inline) {
                        var v = e.util.copy(e);
                        v.level++;
                        var y = "valid" + v.level;
                        v.schema = p.schema, v.schemaPath = "", v.errSchemaPath = l, o += " " + e.validate(v).replace(/validate\.schema/g, p.code) + " ", u && (o += " if (" + y + ") { ")
                    } else a = !0 === p.$async || e.async && !1 !== p.$async, s = p.code
                }
                if (s) {
                    var g;
                    (g = g || []).push(o), o = "", e.opts.passContext ? o += " " + s + ".call(this, " : o += " " + s + "( ", o += " " + h + ", (dataPath || '')", '""' != e.errorPath && (o += " + " + e.errorPath);
                    var P = o += " , " + (n ? "data" + (n - 1 || "") : "parentData") + " , " + (n ? e.dataPathArr[n] : "parentDataProperty") + ", rootData)  ";
                    if (o = g.pop(), a) {
                        if (!e.async) throw new Error("async schema referenced by sync schema");
                        u && (o += " var " + d + "; "), o += " try { await " + P + "; ", u && (o += " " + d + " = true; "), o += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", u && (o += " " + d + " = false; "), o += " } ", u && (o += " if (" + d + ") { ")
                    } else o += " if (!" + P + ") { if (vErrors === null) vErrors = " + s + ".errors; else vErrors = vErrors.concat(" + s + ".errors); errors = vErrors.length; } ", u && (o += " else { ")
                }
                return o
            }
        },
        71287: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = " ",
                    s = e.level,
                    o = e.dataLevel,
                    i = e.schema[r],
                    n = e.schemaPath + e.util.getProperty(r),
                    l = e.errSchemaPath + "/" + r,
                    c = !e.opts.allErrors,
                    u = "data" + (o || ""),
                    h = "valid" + s,
                    d = e.opts.$data && i && i.$data;
                d && (a += " var schema" + s + " = " + e.util.getData(i.$data, o, e.dataPathArr) + "; ");
                var p = "schema" + s;
                if (!d)
                    if (i.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
                        var f = [],
                            m = i;
                        if (m)
                            for (var v, y = -1, g = m.length - 1; y < g;) {
                                v = m[y += 1];
                                var P = e.schema.properties[v];
                                P && (e.opts.strictKeywords ? "object" == typeof P && Object.keys(P).length > 0 || !1 === P : e.util.schemaHasRules(P, e.RULES.all)) || (f[f.length] = v)
                            }
                    } else f = i;
                if (d || f.length) {
                    var E = e.errorPath,
                        b = d || f.length >= e.opts.loopRequired,
                        w = e.opts.ownProperties;
                    if (c)
                        if (a += " var missing" + s + "; ", b) {
                            d || (a += " var " + p + " = validate.schema" + n + "; ");
                            var S = "' + " + (D = "schema" + s + "[" + ($ = "i" + s) + "]") + " + '";
                            e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(E, D, e.opts.jsonPointers)), a += " var " + h + " = true; ", d && (a += " if (schema" + s + " === undefined) " + h + " = true; else if (!Array.isArray(schema" + s + ")) " + h + " = false; else {"), a += " for (var " + $ + " = 0; " + $ + " < " + p + ".length; " + $ + "++) { " + h + " = " + u + "[" + p + "[" + $ + "]] !== undefined ", w && (a += " &&   Object.prototype.hasOwnProperty.call(" + u + ", " + p + "[" + $ + "]) "), a += "; if (!" + h + ") break; } ", d && (a += "  }  "), a += "  if (!" + h + ") {   ", (R = R || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + S + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + S + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                            var x = a;
                            a = R.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + x + "]); " : a += " validate.errors = [" + x + "]; return false; " : a += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else { "
                        } else {
                            a += " if ( ";
                            var _ = f;
                            if (_)
                                for (var $ = -1, F = _.length - 1; $ < F;) {
                                    O = _[$ += 1], $ && (a += " || "), a += " ( ( " + (C = u + (A = e.util.getProperty(O))) + " === undefined ", w && (a += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(O) + "') "), a += ") && (missing" + s + " = " + e.util.toQuotedString(e.opts.jsonPointers ? O : A) + ") ) "
                                }
                            a += ") {  ";
                            var R;
                            S = "' + " + (D = "missing" + s) + " + '";
                            e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(E, D, !0) : E + " + " + D), (R = R || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + S + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + S + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ";
                            x = a;
                            a = R.pop(), !e.compositeRule && c ? e.async ? a += " throw new ValidationError([" + x + "]); " : a += " validate.errors = [" + x + "]; return false; " : a += " var err = " + x + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } else { "
                        }
                    else if (b) {
                        d || (a += " var " + p + " = validate.schema" + n + "; ");
                        var D;
                        S = "' + " + (D = "schema" + s + "[" + ($ = "i" + s) + "]") + " + '";
                        e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(E, D, e.opts.jsonPointers)), d && (a += " if (" + p + " && !Array.isArray(" + p + ")) {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + S + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + S + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + p + " !== undefined) { "), a += " for (var " + $ + " = 0; " + $ + " < " + p + ".length; " + $ + "++) { if (" + u + "[" + p + "[" + $ + "]] === undefined ", w && (a += " || ! Object.prototype.hasOwnProperty.call(" + u + ", " + p + "[" + $ + "]) "), a += ") {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + S + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + S + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", d && (a += "  }  ")
                    } else {
                        var j = f;
                        if (j)
                            for (var O, I = -1, k = j.length - 1; I < k;) {
                                O = j[I += 1];
                                var A = e.util.getProperty(O),
                                    C = (S = e.util.escapeQuotes(O), u + A);
                                e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(E, O, e.opts.jsonPointers)), a += " if ( " + C + " === undefined ", w && (a += " || ! Object.prototype.hasOwnProperty.call(" + u + ", '" + e.util.escapeQuotes(O) + "') "), a += ") {  var err =   ", !1 !== e.createErrors ? (a += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(l) + " , params: { missingProperty: '" + S + "' } ", !1 !== e.opts.messages && (a += " , message: '", e.opts._errorDataPathProperty ? a += "is a required property" : a += "should have required property \\'" + S + "\\'", a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + n + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + u + " "), a += " } ") : a += " {} ", a += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
                            }
                    }
                    e.errorPath = E
                } else c && (a += " if (true) {");
                return a
            }
        },
        3603: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a, s = " ",
                    o = e.level,
                    i = e.dataLevel,
                    n = e.schema[r],
                    l = e.schemaPath + e.util.getProperty(r),
                    c = e.errSchemaPath + "/" + r,
                    u = !e.opts.allErrors,
                    h = "data" + (i || ""),
                    d = "valid" + o,
                    p = e.opts.$data && n && n.$data;
                if (p ? (s += " var schema" + o + " = " + e.util.getData(n.$data, i, e.dataPathArr) + "; ", a = "schema" + o) : a = n, (n || p) && !1 !== e.opts.uniqueItems) {
                    p && (s += " var " + d + "; if (" + a + " === false || " + a + " === undefined) " + d + " = true; else if (typeof " + a + " != 'boolean') " + d + " = false; else { "), s += " var i = " + h + ".length , " + d + " = true , j; if (i > 1) { ";
                    var f = e.schema.items && e.schema.items.type,
                        m = Array.isArray(f);
                    if (!f || "object" == f || "array" == f || m && (f.indexOf("object") >= 0 || f.indexOf("array") >= 0)) s += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + h + "[i], " + h + "[j])) { " + d + " = false; break outer; } } } ";
                    else {
                        s += " var itemIndices = {}, item; for (;i--;) { var item = " + h + "[i]; ";
                        var v = "checkDataType" + (m ? "s" : "");
                        s += " if (" + e.util[v](f, "item", e.opts.strictNumbers, !0) + ") continue; ", m && (s += " if (typeof item == 'string') item = '\"' + item; "), s += " if (typeof itemIndices[item] == 'number') { " + d + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "
                    }
                    s += " } ", p && (s += "  }  "), s += " if (!" + d + ") {   ";
                    var y = y || [];
                    y.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { i: i, j: j } ", !1 !== e.opts.messages && (s += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (s += " , schema:  ", s += p ? "validate.schema" + l : "" + n, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + h + " "), s += " } ") : s += " {} ";
                    var g = s;
                    s = y.pop(), !e.compositeRule && u ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", u && (s += " else { ")
                } else u && (s += " if (true) { ");
                return s
            }
        },
        19508: function(e) {
            "use strict";
            e.exports = function(e, r, t) {
                var a = "",
                    s = !0 === e.schema.$async,
                    o = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"),
                    i = e.self._getId(e.schema);
                if (e.opts.strictKeywords) {
                    var n = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);
                    if (n) {
                        var l = "unknown keyword: " + n;
                        if ("log" !== e.opts.strictKeywords) throw new Error(l);
                        e.logger.warn(l)
                    }
                }
                if (e.isTop && (a += " var validate = ", s && (e.async = !0, a += "async "), a += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", i && (e.opts.sourceCode || e.opts.processCode) && (a += " /*# sourceURL=" + i + " */ ")), "boolean" == typeof e.schema || !o && !e.schema.$ref) {
                    r = "false schema";
                    var c = e.level,
                        u = e.dataLevel,
                        h = e.schema[r],
                        d = e.schemaPath + e.util.getProperty(r),
                        p = e.errSchemaPath + "/" + r,
                        f = !e.opts.allErrors,
                        m = "data" + (u || ""),
                        v = "valid" + c;
                    if (!1 === e.schema) {
                        e.isTop ? f = !0 : a += " var " + v + " = false; ", (Z = Z || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'false schema' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: {} ", !1 !== e.opts.messages && (a += " , message: 'boolean schema is false' "), e.opts.verbose && (a += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), a += " } ") : a += " {} ";
                        var y = a;
                        a = Z.pop(), !e.compositeRule && f ? e.async ? a += " throw new ValidationError([" + y + "]); " : a += " validate.errors = [" + y + "]; return false; " : a += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
                    } else e.isTop ? a += s ? " return data; " : " validate.errors = null; return true; " : a += " var " + v + " = true; ";
                    return e.isTop && (a += " }; return validate; "), a
                }
                if (e.isTop) {
                    var g = e.isTop;
                    c = e.level = 0, u = e.dataLevel = 0, m = "data";
                    if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [""], void 0 !== e.schema.default && e.opts.useDefaults && e.opts.strictDefaults) {
                        var P = "default is ignored in the schema root";
                        if ("log" !== e.opts.strictDefaults) throw new Error(P);
                        e.logger.warn(P)
                    }
                    a += " var vErrors = null; ", a += " var errors = 0;     ", a += " if (rootData === undefined) rootData = data; "
                } else {
                    c = e.level, m = "data" + ((u = e.dataLevel) || "");
                    if (i && (e.baseId = e.resolve.url(e.baseId, i)), s && !e.async) throw new Error("async schema in sync schema");
                    a += " var errs_" + c + " = errors;"
                }
                v = "valid" + c, f = !e.opts.allErrors;
                var E = "",
                    b = "",
                    w = e.schema.type,
                    S = Array.isArray(w);
                if (w && e.opts.nullable && !0 === e.schema.nullable && (S ? -1 == w.indexOf("null") && (w = w.concat("null")) : "null" != w && (w = [w, "null"], S = !0)), S && 1 == w.length && (w = w[0], S = !1), e.schema.$ref && o) {
                    if ("fail" == e.opts.extendRefs) throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
                    !0 !== e.opts.extendRefs && (o = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'))
                }
                if (e.schema.$comment && e.opts.$comment && (a += " " + e.RULES.all.$comment.code(e, "$comment")), w) {
                    if (e.opts.coerceTypes) var x = e.util.coerceToTypes(e.opts.coerceTypes, w);
                    var _ = e.RULES.types[w];
                    if (x || S || !0 === _ || _ && !W(_)) {
                        d = e.schemaPath + ".type", p = e.errSchemaPath + "/type", d = e.schemaPath + ".type", p = e.errSchemaPath + "/type";
                        var $ = S ? "checkDataTypes" : "checkDataType";
                        if (a += " if (" + e.util[$](w, m, e.opts.strictNumbers, !0) + ") { ", x) {
                            var F = "dataType" + c,
                                R = "coerced" + c;
                            a += " var " + F + " = typeof " + m + "; var " + R + " = undefined; ", "array" == e.opts.coerceTypes && (a += " if (" + F + " == 'object' && Array.isArray(" + m + ") && " + m + ".length == 1) { " + m + " = " + m + "[0]; " + F + " = typeof " + m + "; if (" + e.util.checkDataType(e.schema.type, m, e.opts.strictNumbers) + ") " + R + " = " + m + "; } "), a += " if (" + R + " !== undefined) ; ";
                            var D = x;
                            if (D)
                                for (var j, O = -1, I = D.length - 1; O < I;) "string" == (j = D[O += 1]) ? a += " else if (" + F + " == 'number' || " + F + " == 'boolean') " + R + " = '' + " + m + "; else if (" + m + " === null) " + R + " = ''; " : "number" == j || "integer" == j ? (a += " else if (" + F + " == 'boolean' || " + m + " === null || (" + F + " == 'string' && " + m + " && " + m + " == +" + m + " ", "integer" == j && (a += " && !(" + m + " % 1)"), a += ")) " + R + " = +" + m + "; ") : "boolean" == j ? a += " else if (" + m + " === 'false' || " + m + " === 0 || " + m + " === null) " + R + " = false; else if (" + m + " === 'true' || " + m + " === 1) " + R + " = true; " : "null" == j ? a += " else if (" + m + " === '' || " + m + " === 0 || " + m + " === false) " + R + " = null; " : "array" == e.opts.coerceTypes && "array" == j && (a += " else if (" + F + " == 'string' || " + F + " == 'number' || " + F + " == 'boolean' || " + m + " == null) " + R + " = [" + m + "]; ");
                            a += " else {   ", (Z = Z || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: { type: '", a += S ? "" + w.join(",") : "" + w, a += "' } ", !1 !== e.opts.messages && (a += " , message: 'should be ", a += S ? "" + w.join(",") : "" + w, a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), a += " } ") : a += " {} ";
                            y = a;
                            a = Z.pop(), !e.compositeRule && f ? e.async ? a += " throw new ValidationError([" + y + "]); " : a += " validate.errors = [" + y + "]; return false; " : a += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } if (" + R + " !== undefined) {  ";
                            var k = u ? "data" + (u - 1 || "") : "parentData";
                            a += " " + m + " = " + R + "; ", u || (a += "if (" + k + " !== undefined)"), a += " " + k + "[" + (u ? e.dataPathArr[u] : "parentDataProperty") + "] = " + R + "; } "
                        } else {
                            (Z = Z || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: { type: '", a += S ? "" + w.join(",") : "" + w, a += "' } ", !1 !== e.opts.messages && (a += " , message: 'should be ", a += S ? "" + w.join(",") : "" + w, a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), a += " } ") : a += " {} ";
                            y = a;
                            a = Z.pop(), !e.compositeRule && f ? e.async ? a += " throw new ValidationError([" + y + "]); " : a += " validate.errors = [" + y + "]; return false; " : a += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
                        }
                        a += " } "
                    }
                }
                if (e.schema.$ref && !o) a += " " + e.RULES.all.$ref.code(e, "$ref") + " ", f && (a += " } if (errors === ", a += g ? "0" : "errs_" + c, a += ") { ", b += "}");
                else {
                    var A = e.RULES;
                    if (A)
                        for (var C = -1, L = A.length - 1; C < L;)
                            if (W(_ = A[C += 1])) {
                                if (_.type && (a += " if (" + e.util.checkDataType(_.type, m, e.opts.strictNumbers) + ") { "), e.opts.useDefaults)
                                    if ("object" == _.type && e.schema.properties) {
                                        h = e.schema.properties;
                                        var T = Object.keys(h);
                                        if (T)
                                            for (var N, z = -1, V = T.length - 1; z < V;) {
                                                if (void 0 !== (U = h[N = T[z += 1]]).default) {
                                                    var q = m + e.util.getProperty(N);
                                                    if (e.compositeRule) {
                                                        if (e.opts.strictDefaults) {
                                                            P = "default is ignored for: " + q;
                                                            if ("log" !== e.opts.strictDefaults) throw new Error(P);
                                                            e.logger.warn(P)
                                                        }
                                                    } else a += " if (" + q + " === undefined ", "empty" == e.opts.useDefaults && (a += " || " + q + " === null || " + q + " === '' "), a += " ) " + q + " = ", "shared" == e.opts.useDefaults ? a += " " + e.useDefault(U.default) + " " : a += " " + JSON.stringify(U.default) + " ", a += "; "
                                                }
                                            }
                                    } else if ("array" == _.type && Array.isArray(e.schema.items)) {
                                    var Q = e.schema.items;
                                    if (Q) {
                                        O = -1;
                                        for (var U, M = Q.length - 1; O < M;)
                                            if (void 0 !== (U = Q[O += 1]).default) {
                                                q = m + "[" + O + "]";
                                                if (e.compositeRule) {
                                                    if (e.opts.strictDefaults) {
                                                        P = "default is ignored for: " + q;
                                                        if ("log" !== e.opts.strictDefaults) throw new Error(P);
                                                        e.logger.warn(P)
                                                    }
                                                } else a += " if (" + q + " === undefined ", "empty" == e.opts.useDefaults && (a += " || " + q + " === null || " + q + " === '' "), a += " ) " + q + " = ", "shared" == e.opts.useDefaults ? a += " " + e.useDefault(U.default) + " " : a += " " + JSON.stringify(U.default) + " ", a += "; "
                                            }
                                    }
                                }
                                var H = _.rules;
                                if (H)
                                    for (var K, B = -1, J = H.length - 1; B < J;)
                                        if (X(K = H[B += 1])) {
                                            var G = K.code(e, K.keyword, _.type);
                                            G && (a += " " + G + " ", f && (E += "}"))
                                        }
                                if (f && (a += " " + E + " ", E = ""), _.type && (a += " } ", w && w === _.type && !x)) {
                                    a += " else { ";
                                    var Z;
                                    d = e.schemaPath + ".type", p = e.errSchemaPath + "/type";
                                    (Z = Z || []).push(a), a = "", !1 !== e.createErrors ? (a += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: { type: '", a += S ? "" + w.join(",") : "" + w, a += "' } ", !1 !== e.opts.messages && (a += " , message: 'should be ", a += S ? "" + w.join(",") : "" + w, a += "' "), e.opts.verbose && (a += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), a += " } ") : a += " {} ";
                                    y = a;
                                    a = Z.pop(), !e.compositeRule && f ? e.async ? a += " throw new ValidationError([" + y + "]); " : a += " validate.errors = [" + y + "]; return false; " : a += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", a += " } "
                                }
                                f && (a += " if (errors === ", a += g ? "0" : "errs_" + c, a += ") { ", b += "}")
                            }
                }

                function W(e) {
                    for (var r = e.rules, t = 0; t < r.length; t++)
                        if (X(r[t])) return !0
                }

                function X(r) {
                    return void 0 !== e.schema[r.keyword] || r.implements && function(r) {
                        for (var t = r.implements, a = 0; a < t.length; a++)
                            if (void 0 !== e.schema[t[a]]) return !0
                    }(r)
                }
                return f && (a += " " + b + " "), g ? (s ? (a += " if (errors === 0) return data;           ", a += " else throw new ValidationError(vErrors); ") : (a += " validate.errors = vErrors; ", a += " return errors === 0;       "), a += " }; return validate;") : a += " var " + v + " = errors === errs_" + c + ";", a
            }
        },
        14895: function(e, r, t) {
            "use strict";
            var a = /^[a-z_$][a-z0-9_$-]*$/i,
                s = t(14165),
                o = t(61128);
            e.exports = {
                add: function(e, r) {
                    var t = this.RULES;
                    if (t.keywords[e]) throw new Error("Keyword " + e + " is already defined");
                    if (!a.test(e)) throw new Error("Keyword " + e + " is not a valid identifier");
                    if (r) {
                        this.validateKeyword(r, !0);
                        var o = r.type;
                        if (Array.isArray(o))
                            for (var i = 0; i < o.length; i++) l(e, o[i], r);
                        else l(e, o, r);
                        var n = r.metaSchema;
                        n && (r.$data && this._opts.$data && (n = {
                            anyOf: [n, {
                                $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
                            }]
                        }), r.validateSchema = this.compile(n, !0))
                    }

                    function l(e, r, a) {
                        for (var o, i = 0; i < t.length; i++) {
                            var n = t[i];
                            if (n.type == r) {
                                o = n;
                                break
                            }
                        }
                        o || (o = {
                            type: r,
                            rules: []
                        }, t.push(o));
                        var l = {
                            keyword: e,
                            definition: a,
                            custom: !0,
                            code: s,
                            implements: a.implements
                        };
                        o.rules.push(l), t.custom[e] = l
                    }
                    return t.keywords[e] = t.all[e] = !0, this
                },
                get: function(e) {
                    var r = this.RULES.custom[e];
                    return r ? r.definition : this.RULES.keywords[e] || !1
                },
                remove: function(e) {
                    var r = this.RULES;
                    delete r.keywords[e], delete r.all[e], delete r.custom[e];
                    for (var t = 0; t < r.length; t++)
                        for (var a = r[t].rules, s = 0; s < a.length; s++)
                            if (a[s].keyword == e) {
                                a.splice(s, 1);
                                break
                            }
                    return this
                },
                validate: function e(r, t) {
                    e.errors = null;
                    var a = this._validateKeyword = this._validateKeyword || this.compile(o, !0);
                    if (a(r)) return !0;
                    if (e.errors = a.errors, t) throw new Error("custom keyword definition is invalid: " + this.errorsText(a.errors));
                    return !1
                }
            }
        },
        64063: function(e) {
            "use strict";
            e.exports = function e(r, t) {
                if (r === t) return !0;
                if (r && t && "object" == typeof r && "object" == typeof t) {
                    if (r.constructor !== t.constructor) return !1;
                    var a, s, o;
                    if (Array.isArray(r)) {
                        if ((a = r.length) != t.length) return !1;
                        for (s = a; 0 !== s--;)
                            if (!e(r[s], t[s])) return !1;
                        return !0
                    }
                    if (r.constructor === RegExp) return r.source === t.source && r.flags === t.flags;
                    if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === t.valueOf();
                    if (r.toString !== Object.prototype.toString) return r.toString() === t.toString();
                    if ((a = (o = Object.keys(r)).length) !== Object.keys(t).length) return !1;
                    for (s = a; 0 !== s--;)
                        if (!Object.prototype.hasOwnProperty.call(t, o[s])) return !1;
                    for (s = a; 0 !== s--;) {
                        var i = o[s];
                        if (!e(r[i], t[i])) return !1
                    }
                    return !0
                }
                return r !== r && t !== t
            }
        },
        35035: function(e) {
            "use strict";
            e.exports = function(e, r) {
                r || (r = {}), "function" === typeof r && (r = {
                    cmp: r
                });
                var t, a = "boolean" === typeof r.cycles && r.cycles,
                    s = r.cmp && (t = r.cmp, function(e) {
                        return function(r, a) {
                            var s = {
                                    key: r,
                                    value: e[r]
                                },
                                o = {
                                    key: a,
                                    value: e[a]
                                };
                            return t(s, o)
                        }
                    }),
                    o = [];
                return function e(r) {
                    if (r && r.toJSON && "function" === typeof r.toJSON && (r = r.toJSON()), void 0 !== r) {
                        if ("number" == typeof r) return isFinite(r) ? "" + r : "null";
                        if ("object" !== typeof r) return JSON.stringify(r);
                        var t, i;
                        if (Array.isArray(r)) {
                            for (i = "[", t = 0; t < r.length; t++) t && (i += ","), i += e(r[t]) || "null";
                            return i + "]"
                        }
                        if (null === r) return "null";
                        if (-1 !== o.indexOf(r)) {
                            if (a) return JSON.stringify("__cycle__");
                            throw new TypeError("Converting circular structure to JSON")
                        }
                        var n = o.push(r) - 1,
                            l = Object.keys(r).sort(s && s(r));
                        for (i = "", t = 0; t < l.length; t++) {
                            var c = l[t],
                                u = e(r[c]);
                            u && (i && (i += ","), i += JSON.stringify(c) + ":" + u)
                        }
                        return o.splice(n, 1), "{" + i + "}"
                    }
                }(e)
            }
        },
        49461: function(e) {
            "use strict";
            var r = e.exports = function(e, r, a) {
                "function" == typeof r && (a = r, r = {}), t(r, "function" == typeof(a = r.cb || a) ? a : a.pre || function() {}, a.post || function() {}, e, "", e)
            };

            function t(e, a, s, o, i, n, l, c, u, h) {
                if (o && "object" == typeof o && !Array.isArray(o)) {
                    for (var d in a(o, i, n, l, c, u, h), o) {
                        var p = o[d];
                        if (Array.isArray(p)) {
                            if (d in r.arrayKeywords)
                                for (var f = 0; f < p.length; f++) t(e, a, s, p[f], i + "/" + d + "/" + f, n, i, d, o, f)
                        } else if (d in r.propsKeywords) {
                            if (p && "object" == typeof p)
                                for (var m in p) t(e, a, s, p[m], i + "/" + d + "/" + m.replace(/~/g, "~0").replace(/\//g, "~1"), n, i, d, o, m)
                        } else(d in r.keywords || e.allKeys && !(d in r.skipKeywords)) && t(e, a, s, p, i + "/" + d, n, i, d, o)
                    }
                    s(o, i, n, l, c, u, h)
                }
            }
            r.keywords = {
                additionalItems: !0,
                items: !0,
                contains: !0,
                additionalProperties: !0,
                propertyNames: !0,
                not: !0
            }, r.arrayKeywords = {
                items: !0,
                allOf: !0,
                anyOf: !0,
                oneOf: !0
            }, r.propsKeywords = {
                definitions: !0,
                properties: !0,
                patternProperties: !0,
                dependencies: !0
            }, r.skipKeywords = {
                default: !0,
                enum: !0,
                const: !0,
                required: !0,
                maximum: !0,
                minimum: !0,
                exclusiveMaximum: !0,
                exclusiveMinimum: !0,
                multipleOf: !0,
                maxLength: !0,
                minLength: !0,
                pattern: !0,
                format: !0,
                maxItems: !0,
                minItems: !0,
                uniqueItems: !0,
                maxProperties: !0,
                minProperties: !0
            }
        },
        60540: function(e, r) {
            ! function(e) {
                "use strict";

                function r() {
                    for (var e = arguments.length, r = Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                    if (r.length > 1) {
                        r[0] = r[0].slice(0, -1);
                        for (var a = r.length - 1, s = 1; s < a; ++s) r[s] = r[s].slice(1, -1);
                        return r[a] = r[a].slice(1), r.join("")
                    }
                    return r[0]
                }

                function t(e) {
                    return "(?:" + e + ")"
                }

                function a(e) {
                    return void 0 === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()
                }

                function s(e) {
                    return e.toUpperCase()
                }

                function o(e) {
                    return void 0 !== e && null !== e ? e instanceof Array ? e : "number" !== typeof e.length || e.split || e.setInterval || e.call ? [e] : Array.prototype.slice.call(e) : []
                }

                function i(e, r) {
                    var t = e;
                    if (r)
                        for (var a in r) t[a] = r[a];
                    return t
                }

                function n(e) {
                    var a = "[A-Za-z]",
                        s = "[0-9]",
                        o = r(s, "[A-Fa-f]"),
                        i = t(t("%[EFef]" + o + "%" + o + o + "%" + o + o) + "|" + t("%[89A-Fa-f]" + o + "%" + o + o) + "|" + t("%" + o + o)),
                        n = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
                        l = r("[\\:\\/\\?\\#\\[\\]\\@]", n),
                        c = e ? "[\\uE000-\\uF8FF]" : "[]",
                        u = r(a, s, "[\\-\\.\\_\\~]", e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]"),
                        h = t(a + r(a, s, "[\\+\\-\\.]") + "*"),
                        d = t(t(i + "|" + r(u, n, "[\\:]")) + "*"),
                        p = (t(t("25[0-5]") + "|" + t("2[0-4]" + s) + "|" + t("1" + s + s) + "|" + t("[1-9]" + s) + "|" + s), t(t("25[0-5]") + "|" + t("2[0-4]" + s) + "|" + t("1" + s + s) + "|" + t("0?[1-9]" + s) + "|0?0?" + s)),
                        f = t(p + "\\." + p + "\\." + p + "\\." + p),
                        m = t(o + "{1,4}"),
                        v = t(t(m + "\\:" + m) + "|" + f),
                        y = t(t(m + "\\:") + "{6}" + v),
                        g = t("\\:\\:" + t(m + "\\:") + "{5}" + v),
                        P = t(t(m) + "?\\:\\:" + t(m + "\\:") + "{4}" + v),
                        E = t(t(t(m + "\\:") + "{0,1}" + m) + "?\\:\\:" + t(m + "\\:") + "{3}" + v),
                        b = t(t(t(m + "\\:") + "{0,2}" + m) + "?\\:\\:" + t(m + "\\:") + "{2}" + v),
                        w = t(t(t(m + "\\:") + "{0,3}" + m) + "?\\:\\:" + m + "\\:" + v),
                        S = t(t(t(m + "\\:") + "{0,4}" + m) + "?\\:\\:" + v),
                        x = t(t(t(m + "\\:") + "{0,5}" + m) + "?\\:\\:" + m),
                        _ = t(t(t(m + "\\:") + "{0,6}" + m) + "?\\:\\:"),
                        $ = t([y, g, P, E, b, w, S, x, _].join("|")),
                        F = t(t(u + "|" + i) + "+"),
                        R = (t($ + "\\%25" + F), t($ + t("\\%25|\\%(?!" + o + "{2})") + F)),
                        D = t("[vV]" + o + "+\\." + r(u, n, "[\\:]") + "+"),
                        j = t("\\[" + t(R + "|" + $ + "|" + D) + "\\]"),
                        O = t(t(i + "|" + r(u, n)) + "*"),
                        I = t(j + "|" + f + "(?!" + O + ")|" + O),
                        k = t(s + "*"),
                        A = t(t(d + "@") + "?" + I + t("\\:" + k) + "?"),
                        C = t(i + "|" + r(u, n, "[\\:\\@]")),
                        L = t(C + "*"),
                        T = t(C + "+"),
                        N = t(t(i + "|" + r(u, n, "[\\@]")) + "+"),
                        z = t(t("\\/" + L) + "*"),
                        V = t("\\/" + t(T + z) + "?"),
                        q = t(N + z),
                        Q = t(T + z),
                        U = "(?!" + C + ")",
                        M = (t(z + "|" + V + "|" + q + "|" + Q + "|" + U), t(t(C + "|" + r("[\\/\\?]", c)) + "*")),
                        H = t(t(C + "|[\\/\\?]") + "*"),
                        K = t(t("\\/\\/" + A + z) + "|" + V + "|" + Q + "|" + U),
                        B = t(h + "\\:" + K + t("\\?" + M) + "?" + t("\\#" + H) + "?"),
                        J = t(t("\\/\\/" + A + z) + "|" + V + "|" + q + "|" + U),
                        G = t(J + t("\\?" + M) + "?" + t("\\#" + H) + "?");
                    return t(B + "|" + G), t(h + "\\:" + K + t("\\?" + M) + "?"), t(t("\\/\\/(" + t("(" + d + ")@") + "?(" + I + ")" + t("\\:(" + k + ")") + "?)") + "?(" + z + "|" + V + "|" + Q + "|" + U + ")"), t("\\?(" + M + ")"), t("\\#(" + H + ")"), t(t("\\/\\/(" + t("(" + d + ")@") + "?(" + I + ")" + t("\\:(" + k + ")") + "?)") + "?(" + z + "|" + V + "|" + q + "|" + U + ")"), t("\\?(" + M + ")"), t("\\#(" + H + ")"), t(t("\\/\\/(" + t("(" + d + ")@") + "?(" + I + ")" + t("\\:(" + k + ")") + "?)") + "?(" + z + "|" + V + "|" + Q + "|" + U + ")"), t("\\?(" + M + ")"), t("\\#(" + H + ")"), t("(" + d + ")@"), t("\\:(" + k + ")"), {
                        NOT_SCHEME: new RegExp(r("[^]", a, s, "[\\+\\-\\.]"), "g"),
                        NOT_USERINFO: new RegExp(r("[^\\%\\:]", u, n), "g"),
                        NOT_HOST: new RegExp(r("[^\\%\\[\\]\\:]", u, n), "g"),
                        NOT_PATH: new RegExp(r("[^\\%\\/\\:\\@]", u, n), "g"),
                        NOT_PATH_NOSCHEME: new RegExp(r("[^\\%\\/\\@]", u, n), "g"),
                        NOT_QUERY: new RegExp(r("[^\\%]", u, n, "[\\:\\@\\/\\?]", c), "g"),
                        NOT_FRAGMENT: new RegExp(r("[^\\%]", u, n, "[\\:\\@\\/\\?]"), "g"),
                        ESCAPE: new RegExp(r("[^]", u, n), "g"),
                        UNRESERVED: new RegExp(u, "g"),
                        OTHER_CHARS: new RegExp(r("[^\\%]", u, l), "g"),
                        PCT_ENCODED: new RegExp(i, "g"),
                        IPV4ADDRESS: new RegExp("^(" + f + ")$"),
                        IPV6ADDRESS: new RegExp("^\\[?(" + $ + ")" + t(t("\\%25|\\%(?!" + o + "{2})") + "(" + F + ")") + "?\\]?$")
                    }
                }
                var l = n(!1),
                    c = n(!0),
                    u = function() {
                        function e(e, r) {
                            var t = [],
                                a = !0,
                                s = !1,
                                o = void 0;
                            try {
                                for (var i, n = e[Symbol.iterator](); !(a = (i = n.next()).done) && (t.push(i.value), !r || t.length !== r); a = !0);
                            } catch (l) {
                                s = !0, o = l
                            } finally {
                                try {
                                    !a && n.return && n.return()
                                } finally {
                                    if (s) throw o
                                }
                            }
                            return t
                        }
                        return function(r, t) {
                            if (Array.isArray(r)) return r;
                            if (Symbol.iterator in Object(r)) return e(r, t);
                            throw new TypeError("Invalid attempt to destructure non-iterable instance")
                        }
                    }(),
                    h = function(e) {
                        if (Array.isArray(e)) {
                            for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
                            return t
                        }
                        return Array.from(e)
                    },
                    d = 2147483647,
                    p = 36,
                    f = 1,
                    m = 26,
                    v = 38,
                    y = 700,
                    g = 72,
                    P = 128,
                    E = "-",
                    b = /^xn--/,
                    w = /[^\0-\x7E]/,
                    S = /[\x2E\u3002\uFF0E\uFF61]/g,
                    x = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    },
                    _ = p - f,
                    $ = Math.floor,
                    F = String.fromCharCode;

                function R(e) {
                    throw new RangeError(x[e])
                }

                function D(e, r) {
                    for (var t = [], a = e.length; a--;) t[a] = r(e[a]);
                    return t
                }

                function j(e, r) {
                    var t = e.split("@"),
                        a = "";
                    return t.length > 1 && (a = t[0] + "@", e = t[1]), a + D((e = e.replace(S, ".")).split("."), r).join(".")
                }

                function O(e) {
                    for (var r = [], t = 0, a = e.length; t < a;) {
                        var s = e.charCodeAt(t++);
                        if (s >= 55296 && s <= 56319 && t < a) {
                            var o = e.charCodeAt(t++);
                            56320 == (64512 & o) ? r.push(((1023 & s) << 10) + (1023 & o) + 65536) : (r.push(s), t--)
                        } else r.push(s)
                    }
                    return r
                }
                var I = function(e) {
                        return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : p
                    },
                    k = function(e, r) {
                        return e + 22 + 75 * (e < 26) - ((0 != r) << 5)
                    },
                    A = function(e, r, t) {
                        var a = 0;
                        for (e = t ? $(e / y) : e >> 1, e += $(e / r); e > _ * m >> 1; a += p) e = $(e / _);
                        return $(a + (_ + 1) * e / (e + v))
                    },
                    C = function(e) {
                        var r = [],
                            t = e.length,
                            a = 0,
                            s = P,
                            o = g,
                            i = e.lastIndexOf(E);
                        i < 0 && (i = 0);
                        for (var n = 0; n < i; ++n) e.charCodeAt(n) >= 128 && R("not-basic"), r.push(e.charCodeAt(n));
                        for (var l = i > 0 ? i + 1 : 0; l < t;) {
                            for (var c = a, u = 1, h = p;; h += p) {
                                l >= t && R("invalid-input");
                                var v = I(e.charCodeAt(l++));
                                (v >= p || v > $((d - a) / u)) && R("overflow"), a += v * u;
                                var y = h <= o ? f : h >= o + m ? m : h - o;
                                if (v < y) break;
                                var b = p - y;
                                u > $(d / b) && R("overflow"), u *= b
                            }
                            var w = r.length + 1;
                            o = A(a - c, w, 0 == c), $(a / w) > d - s && R("overflow"), s += $(a / w), a %= w, r.splice(a++, 0, s)
                        }
                        return String.fromCodePoint.apply(String, r)
                    },
                    L = function(e) {
                        var r = [],
                            t = (e = O(e)).length,
                            a = P,
                            s = 0,
                            o = g,
                            i = !0,
                            n = !1,
                            l = void 0;
                        try {
                            for (var c, u = e[Symbol.iterator](); !(i = (c = u.next()).done); i = !0) {
                                var h = c.value;
                                h < 128 && r.push(F(h))
                            }
                        } catch (K) {
                            n = !0, l = K
                        } finally {
                            try {
                                !i && u.return && u.return()
                            } finally {
                                if (n) throw l
                            }
                        }
                        var v = r.length,
                            y = v;
                        for (v && r.push(E); y < t;) {
                            var b = d,
                                w = !0,
                                S = !1,
                                x = void 0;
                            try {
                                for (var _, D = e[Symbol.iterator](); !(w = (_ = D.next()).done); w = !0) {
                                    var j = _.value;
                                    j >= a && j < b && (b = j)
                                }
                            } catch (K) {
                                S = !0, x = K
                            } finally {
                                try {
                                    !w && D.return && D.return()
                                } finally {
                                    if (S) throw x
                                }
                            }
                            var I = y + 1;
                            b - a > $((d - s) / I) && R("overflow"), s += (b - a) * I, a = b;
                            var C = !0,
                                L = !1,
                                T = void 0;
                            try {
                                for (var N, z = e[Symbol.iterator](); !(C = (N = z.next()).done); C = !0) {
                                    var V = N.value;
                                    if (V < a && ++s > d && R("overflow"), V == a) {
                                        for (var q = s, Q = p;; Q += p) {
                                            var U = Q <= o ? f : Q >= o + m ? m : Q - o;
                                            if (q < U) break;
                                            var M = q - U,
                                                H = p - U;
                                            r.push(F(k(U + M % H, 0))), q = $(M / H)
                                        }
                                        r.push(F(k(q, 0))), o = A(s, I, y == v), s = 0, ++y
                                    }
                                }
                            } catch (K) {
                                L = !0, T = K
                            } finally {
                                try {
                                    !C && z.return && z.return()
                                } finally {
                                    if (L) throw T
                                }
                            }++s, ++a
                        }
                        return r.join("")
                    },
                    T = function(e) {
                        return j(e, (function(e) {
                            return b.test(e) ? C(e.slice(4).toLowerCase()) : e
                        }))
                    },
                    N = function(e) {
                        return j(e, (function(e) {
                            return w.test(e) ? "xn--" + L(e) : e
                        }))
                    },
                    z = {
                        version: "2.1.0",
                        ucs2: {
                            decode: O,
                            encode: function(e) {
                                return String.fromCodePoint.apply(String, h(e))
                            }
                        },
                        decode: C,
                        encode: L,
                        toASCII: N,
                        toUnicode: T
                    },
                    V = {};

                function q(e) {
                    var r = e.charCodeAt(0);
                    return r < 16 ? "%0" + r.toString(16).toUpperCase() : r < 128 ? "%" + r.toString(16).toUpperCase() : r < 2048 ? "%" + (r >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & r | 128).toString(16).toUpperCase() : "%" + (r >> 12 | 224).toString(16).toUpperCase() + "%" + (r >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & r | 128).toString(16).toUpperCase()
                }

                function Q(e) {
                    for (var r = "", t = 0, a = e.length; t < a;) {
                        var s = parseInt(e.substr(t + 1, 2), 16);
                        if (s < 128) r += String.fromCharCode(s), t += 3;
                        else if (s >= 194 && s < 224) {
                            if (a - t >= 6) {
                                var o = parseInt(e.substr(t + 4, 2), 16);
                                r += String.fromCharCode((31 & s) << 6 | 63 & o)
                            } else r += e.substr(t, 6);
                            t += 6
                        } else if (s >= 224) {
                            if (a - t >= 9) {
                                var i = parseInt(e.substr(t + 4, 2), 16),
                                    n = parseInt(e.substr(t + 7, 2), 16);
                                r += String.fromCharCode((15 & s) << 12 | (63 & i) << 6 | 63 & n)
                            } else r += e.substr(t, 9);
                            t += 9
                        } else r += e.substr(t, 3), t += 3
                    }
                    return r
                }

                function U(e, r) {
                    function t(e) {
                        var t = Q(e);
                        return t.match(r.UNRESERVED) ? t : e
                    }
                    return e.scheme && (e.scheme = String(e.scheme).replace(r.PCT_ENCODED, t).toLowerCase().replace(r.NOT_SCHEME, "")), void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(r.PCT_ENCODED, t).replace(r.NOT_USERINFO, q).replace(r.PCT_ENCODED, s)), void 0 !== e.host && (e.host = String(e.host).replace(r.PCT_ENCODED, t).toLowerCase().replace(r.NOT_HOST, q).replace(r.PCT_ENCODED, s)), void 0 !== e.path && (e.path = String(e.path).replace(r.PCT_ENCODED, t).replace(e.scheme ? r.NOT_PATH : r.NOT_PATH_NOSCHEME, q).replace(r.PCT_ENCODED, s)), void 0 !== e.query && (e.query = String(e.query).replace(r.PCT_ENCODED, t).replace(r.NOT_QUERY, q).replace(r.PCT_ENCODED, s)), void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(r.PCT_ENCODED, t).replace(r.NOT_FRAGMENT, q).replace(r.PCT_ENCODED, s)), e
                }

                function M(e) {
                    return e.replace(/^0*(.*)/, "$1") || "0"
                }

                function H(e, r) {
                    var t = e.match(r.IPV4ADDRESS) || [],
                        a = u(t, 2)[1];
                    return a ? a.split(".").map(M).join(".") : e
                }

                function K(e, r) {
                    var t = e.match(r.IPV6ADDRESS) || [],
                        a = u(t, 3),
                        s = a[1],
                        o = a[2];
                    if (s) {
                        for (var i = s.toLowerCase().split("::").reverse(), n = u(i, 2), l = n[0], c = n[1], h = c ? c.split(":").map(M) : [], d = l.split(":").map(M), p = r.IPV4ADDRESS.test(d[d.length - 1]), f = p ? 7 : 8, m = d.length - f, v = Array(f), y = 0; y < f; ++y) v[y] = h[y] || d[m + y] || "";
                        p && (v[f - 1] = H(v[f - 1], r));
                        var g = v.reduce((function(e, r, t) {
                                if (!r || "0" === r) {
                                    var a = e[e.length - 1];
                                    a && a.index + a.length === t ? a.length++ : e.push({
                                        index: t,
                                        length: 1
                                    })
                                }
                                return e
                            }), []).sort((function(e, r) {
                                return r.length - e.length
                            }))[0],
                            P = void 0;
                        if (g && g.length > 1) {
                            var E = v.slice(0, g.index),
                                b = v.slice(g.index + g.length);
                            P = E.join(":") + "::" + b.join(":")
                        } else P = v.join(":");
                        return o && (P += "%" + o), P
                    }
                    return e
                }
                var B = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
                    J = void 0 === "".match(/(){0}/)[1];

                function G(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = {},
                        a = !1 !== r.iri ? c : l;
                    "suffix" === r.reference && (e = (r.scheme ? r.scheme + ":" : "") + "//" + e);
                    var s = e.match(B);
                    if (s) {
                        J ? (t.scheme = s[1], t.userinfo = s[3], t.host = s[4], t.port = parseInt(s[5], 10), t.path = s[6] || "", t.query = s[7], t.fragment = s[8], isNaN(t.port) && (t.port = s[5])) : (t.scheme = s[1] || void 0, t.userinfo = -1 !== e.indexOf("@") ? s[3] : void 0, t.host = -1 !== e.indexOf("//") ? s[4] : void 0, t.port = parseInt(s[5], 10), t.path = s[6] || "", t.query = -1 !== e.indexOf("?") ? s[7] : void 0, t.fragment = -1 !== e.indexOf("#") ? s[8] : void 0, isNaN(t.port) && (t.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? s[4] : void 0)), t.host && (t.host = K(H(t.host, a), a)), void 0 !== t.scheme || void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port || t.path || void 0 !== t.query ? void 0 === t.scheme ? t.reference = "relative" : void 0 === t.fragment ? t.reference = "absolute" : t.reference = "uri" : t.reference = "same-document", r.reference && "suffix" !== r.reference && r.reference !== t.reference && (t.error = t.error || "URI is not a " + r.reference + " reference.");
                        var o = V[(r.scheme || t.scheme || "").toLowerCase()];
                        if (r.unicodeSupport || o && o.unicodeSupport) U(t, a);
                        else {
                            if (t.host && (r.domainHost || o && o.domainHost)) try {
                                t.host = z.toASCII(t.host.replace(a.PCT_ENCODED, Q).toLowerCase())
                            } catch (i) {
                                t.error = t.error || "Host's domain name can not be converted to ASCII via punycode: " + i
                            }
                            U(t, l)
                        }
                        o && o.parse && o.parse(t, r)
                    } else t.error = t.error || "URI can not be parsed.";
                    return t
                }

                function Z(e, r) {
                    var t = !1 !== r.iri ? c : l,
                        a = [];
                    return void 0 !== e.userinfo && (a.push(e.userinfo), a.push("@")), void 0 !== e.host && a.push(K(H(String(e.host), t), t).replace(t.IPV6ADDRESS, (function(e, r, t) {
                        return "[" + r + (t ? "%25" + t : "") + "]"
                    }))), "number" !== typeof e.port && "string" !== typeof e.port || (a.push(":"), a.push(String(e.port))), a.length ? a.join("") : void 0
                }
                var W = /^\.\.?\//,
                    X = /^\/\.(\/|$)/,
                    Y = /^\/\.\.(\/|$)/,
                    ee = /^\/?(?:.|\n)*?(?=\/|$)/;

                function re(e) {
                    for (var r = []; e.length;)
                        if (e.match(W)) e = e.replace(W, "");
                        else if (e.match(X)) e = e.replace(X, "/");
                    else if (e.match(Y)) e = e.replace(Y, "/"), r.pop();
                    else if ("." === e || ".." === e) e = "";
                    else {
                        var t = e.match(ee);
                        if (!t) throw new Error("Unexpected dot segment condition");
                        var a = t[0];
                        e = e.slice(a.length), r.push(a)
                    }
                    return r.join("")
                }

                function te(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = r.iri ? c : l,
                        a = [],
                        s = V[(r.scheme || e.scheme || "").toLowerCase()];
                    if (s && s.serialize && s.serialize(e, r), e.host)
                        if (t.IPV6ADDRESS.test(e.host));
                        else if (r.domainHost || s && s.domainHost) try {
                        e.host = r.iri ? z.toUnicode(e.host) : z.toASCII(e.host.replace(t.PCT_ENCODED, Q).toLowerCase())
                    } catch (n) {
                        e.error = e.error || "Host's domain name can not be converted to " + (r.iri ? "Unicode" : "ASCII") + " via punycode: " + n
                    }
                    U(e, t), "suffix" !== r.reference && e.scheme && (a.push(e.scheme), a.push(":"));
                    var o = Z(e, r);
                    if (void 0 !== o && ("suffix" !== r.reference && a.push("//"), a.push(o), e.path && "/" !== e.path.charAt(0) && a.push("/")), void 0 !== e.path) {
                        var i = e.path;
                        r.absolutePath || s && s.absolutePath || (i = re(i)), void 0 === o && (i = i.replace(/^\/\//, "/%2F")), a.push(i)
                    }
                    return void 0 !== e.query && (a.push("?"), a.push(e.query)), void 0 !== e.fragment && (a.push("#"), a.push(e.fragment)), a.join("")
                }

                function ae(e, r) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        a = {};
                    return arguments[3] || (e = G(te(e, t), t), r = G(te(r, t), t)), !(t = t || {}).tolerant && r.scheme ? (a.scheme = r.scheme, a.userinfo = r.userinfo, a.host = r.host, a.port = r.port, a.path = re(r.path || ""), a.query = r.query) : (void 0 !== r.userinfo || void 0 !== r.host || void 0 !== r.port ? (a.userinfo = r.userinfo, a.host = r.host, a.port = r.port, a.path = re(r.path || ""), a.query = r.query) : (r.path ? ("/" === r.path.charAt(0) ? a.path = re(r.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? a.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + r.path : a.path = r.path : a.path = "/" + r.path, a.path = re(a.path)), a.query = r.query) : (a.path = e.path, void 0 !== r.query ? a.query = r.query : a.query = e.query), a.userinfo = e.userinfo, a.host = e.host, a.port = e.port), a.scheme = e.scheme), a.fragment = r.fragment, a
                }

                function se(e, r, t) {
                    var a = i({
                        scheme: "null"
                    }, t);
                    return te(ae(G(e, a), G(r, a), a, !0), a)
                }

                function oe(e, r) {
                    return "string" === typeof e ? e = te(G(e, r), r) : "object" === a(e) && (e = G(te(e, r), r)), e
                }

                function ie(e, r, t) {
                    return "string" === typeof e ? e = te(G(e, t), t) : "object" === a(e) && (e = te(e, t)), "string" === typeof r ? r = te(G(r, t), t) : "object" === a(r) && (r = te(r, t)), e === r
                }

                function ne(e, r) {
                    return e && e.toString().replace(r && r.iri ? c.ESCAPE : l.ESCAPE, q)
                }

                function le(e, r) {
                    return e && e.toString().replace(r && r.iri ? c.PCT_ENCODED : l.PCT_ENCODED, Q)
                }
                var ce = {
                        scheme: "http",
                        domainHost: !0,
                        parse: function(e, r) {
                            return e.host || (e.error = e.error || "HTTP URIs must have a host."), e
                        },
                        serialize: function(e, r) {
                            var t = "https" === String(e.scheme).toLowerCase();
                            return e.port !== (t ? 443 : 80) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), e
                        }
                    },
                    ue = {
                        scheme: "https",
                        domainHost: ce.domainHost,
                        parse: ce.parse,
                        serialize: ce.serialize
                    };

                function he(e) {
                    return "boolean" === typeof e.secure ? e.secure : "wss" === String(e.scheme).toLowerCase()
                }
                var de = {
                        scheme: "ws",
                        domainHost: !0,
                        parse: function(e, r) {
                            var t = e;
                            return t.secure = he(t), t.resourceName = (t.path || "/") + (t.query ? "?" + t.query : ""), t.path = void 0, t.query = void 0, t
                        },
                        serialize: function(e, r) {
                            if (e.port !== (he(e) ? 443 : 80) && "" !== e.port || (e.port = void 0), "boolean" === typeof e.secure && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
                                var t = e.resourceName.split("?"),
                                    a = u(t, 2),
                                    s = a[0],
                                    o = a[1];
                                e.path = s && "/" !== s ? s : void 0, e.query = o, e.resourceName = void 0
                            }
                            return e.fragment = void 0, e
                        }
                    },
                    pe = {
                        scheme: "wss",
                        domainHost: de.domainHost,
                        parse: de.parse,
                        serialize: de.serialize
                    },
                    fe = {},
                    me = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",
                    ve = "[0-9A-Fa-f]",
                    ye = t(t("%[EFef]" + ve + "%" + ve + ve + "%" + ve + ve) + "|" + t("%[89A-Fa-f]" + ve + "%" + ve + ve) + "|" + t("%" + ve + ve)),
                    ge = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",
                    Pe = r("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", '[\\"\\\\]'),
                    Ee = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",
                    be = new RegExp(me, "g"),
                    we = new RegExp(ye, "g"),
                    Se = new RegExp(r("[^]", ge, "[\\.]", '[\\"]', Pe), "g"),
                    xe = new RegExp(r("[^]", me, Ee), "g"),
                    _e = xe;

                function $e(e) {
                    var r = Q(e);
                    return r.match(be) ? r : e
                }
                var Fe = {
                        scheme: "mailto",
                        parse: function(e, r) {
                            var t = e,
                                a = t.to = t.path ? t.path.split(",") : [];
                            if (t.path = void 0, t.query) {
                                for (var s = !1, o = {}, i = t.query.split("&"), n = 0, l = i.length; n < l; ++n) {
                                    var c = i[n].split("=");
                                    switch (c[0]) {
                                        case "to":
                                            for (var u = c[1].split(","), h = 0, d = u.length; h < d; ++h) a.push(u[h]);
                                            break;
                                        case "subject":
                                            t.subject = le(c[1], r);
                                            break;
                                        case "body":
                                            t.body = le(c[1], r);
                                            break;
                                        default:
                                            s = !0, o[le(c[0], r)] = le(c[1], r)
                                    }
                                }
                                s && (t.headers = o)
                            }
                            t.query = void 0;
                            for (var p = 0, f = a.length; p < f; ++p) {
                                var m = a[p].split("@");
                                if (m[0] = le(m[0]), r.unicodeSupport) m[1] = le(m[1], r).toLowerCase();
                                else try {
                                    m[1] = z.toASCII(le(m[1], r).toLowerCase())
                                } catch (v) {
                                    t.error = t.error || "Email address's domain name can not be converted to ASCII via punycode: " + v
                                }
                                a[p] = m.join("@")
                            }
                            return t
                        },
                        serialize: function(e, r) {
                            var t = e,
                                a = o(e.to);
                            if (a) {
                                for (var i = 0, n = a.length; i < n; ++i) {
                                    var l = String(a[i]),
                                        c = l.lastIndexOf("@"),
                                        u = l.slice(0, c).replace(we, $e).replace(we, s).replace(Se, q),
                                        h = l.slice(c + 1);
                                    try {
                                        h = r.iri ? z.toUnicode(h) : z.toASCII(le(h, r).toLowerCase())
                                    } catch (m) {
                                        t.error = t.error || "Email address's domain name can not be converted to " + (r.iri ? "Unicode" : "ASCII") + " via punycode: " + m
                                    }
                                    a[i] = u + "@" + h
                                }
                                t.path = a.join(",")
                            }
                            var d = e.headers = e.headers || {};
                            e.subject && (d.subject = e.subject), e.body && (d.body = e.body);
                            var p = [];
                            for (var f in d) d[f] !== fe[f] && p.push(f.replace(we, $e).replace(we, s).replace(xe, q) + "=" + d[f].replace(we, $e).replace(we, s).replace(_e, q));
                            return p.length && (t.query = p.join("&")), t
                        }
                    },
                    Re = /^([^\:]+)\:(.*)/,
                    De = {
                        scheme: "urn",
                        parse: function(e, r) {
                            var t = e.path && e.path.match(Re),
                                a = e;
                            if (t) {
                                var s = r.scheme || a.scheme || "urn",
                                    o = t[1].toLowerCase(),
                                    i = t[2],
                                    n = s + ":" + (r.nid || o),
                                    l = V[n];
                                a.nid = o, a.nss = i, a.path = void 0, l && (a = l.parse(a, r))
                            } else a.error = a.error || "URN can not be parsed.";
                            return a
                        },
                        serialize: function(e, r) {
                            var t = r.scheme || e.scheme || "urn",
                                a = e.nid,
                                s = t + ":" + (r.nid || a),
                                o = V[s];
                            o && (e = o.serialize(e, r));
                            var i = e,
                                n = e.nss;
                            return i.path = (a || r.nid) + ":" + n, i
                        }
                    },
                    je = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
                    Oe = {
                        scheme: "urn:uuid",
                        parse: function(e, r) {
                            var t = e;
                            return t.uuid = t.nss, t.nss = void 0, r.tolerant || t.uuid && t.uuid.match(je) || (t.error = t.error || "UUID is not valid."), t
                        },
                        serialize: function(e, r) {
                            var t = e;
                            return t.nss = (e.uuid || "").toLowerCase(), t
                        }
                    };
                V[ce.scheme] = ce, V[ue.scheme] = ue, V[de.scheme] = de, V[pe.scheme] = pe, V[Fe.scheme] = Fe, V[De.scheme] = De, V[Oe.scheme] = Oe, e.SCHEMES = V, e.pctEncChar = q, e.pctDecChars = Q, e.parse = G, e.removeDotSegments = re, e.serialize = te, e.resolveComponents = ae, e.resolve = se, e.normalize = oe, e.equal = ie, e.escapeComponent = ne, e.unescapeComponent = le, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(r)
        },
        40475: function(e) {
            "use strict";
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://uniswap.org/tokenlist.schema.json","title":"Uniswap Token List","description":"Schema for lists of tokens compatible with the Uniswap Interface","definitions":{"Version":{"type":"object","description":"The version of the list, used in change detection","examples":[{"major":1,"minor":0,"patch":0}],"additionalProperties":false,"properties":{"major":{"type":"integer","description":"The major version of the list. Must be incremented when tokens are removed from the list or token addresses are changed.","minimum":0,"examples":[1,2]},"minor":{"type":"integer","description":"The minor version of the list. Must be incremented when tokens are added to the list.","minimum":0,"examples":[0,1]},"patch":{"type":"integer","description":"The patch version of the list. Must be incremented for any changes to the list.","minimum":0,"examples":[0,1]}},"required":["major","minor","patch"]},"TagIdentifier":{"type":"string","description":"The unique identifier of a tag","minLength":1,"maxLength":10,"pattern":"^[\\\\w]+$","examples":["compound","stablecoin"]},"ExtensionIdentifier":{"type":"string","description":"The name of a token extension property","minLength":1,"maxLength":40,"pattern":"^[\\\\w]+$","examples":["color","is_fee_on_transfer","aliases"]},"ExtensionMap":{"type":"object","description":"An object containing any arbitrary or vendor-specific token metadata","maxProperties":10,"propertyNames":{"$ref":"#/definitions/ExtensionIdentifier"},"additionalProperties":{"$ref":"#/definitions/ExtensionValue"},"examples":[{"color":"#000000","is_verified_by_me":true},{"x-bridged-addresses-by-chain":{"1":{"bridgeAddress":"0x4200000000000000000000000000000000000010","tokenAddress":"0x4200000000000000000000000000000000000010"}}}]},"ExtensionPrimitiveValue":{"anyOf":[{"type":"string","minLength":1,"maxLength":42,"examples":["#00000"]},{"type":"boolean","examples":[true]},{"type":"number","examples":[15]},{"type":"null"}]},"ExtensionValue":{"anyOf":[{"$ref":"#/definitions/ExtensionPrimitiveValue"},{"type":"object","maxProperties":10,"propertyNames":{"$ref":"#/definitions/ExtensionIdentifier"},"additionalProperties":{"$ref":"#/definitions/ExtensionValueInner0"}}]},"ExtensionValueInner0":{"anyOf":[{"$ref":"#/definitions/ExtensionPrimitiveValue"},{"type":"object","maxProperties":10,"propertyNames":{"$ref":"#/definitions/ExtensionIdentifier"},"additionalProperties":{"$ref":"#/definitions/ExtensionValueInner1"}}]},"ExtensionValueInner1":{"anyOf":[{"$ref":"#/definitions/ExtensionPrimitiveValue"}]},"TagDefinition":{"type":"object","description":"Definition of a tag that can be associated with a token via its identifier","additionalProperties":false,"properties":{"name":{"type":"string","description":"The name of the tag","pattern":"^[ \\\\w]+$","minLength":1,"maxLength":20},"description":{"type":"string","description":"A user-friendly description of the tag","pattern":"^[ \\\\w\\\\.,:]+$","minLength":1,"maxLength":200}},"required":["name","description"],"examples":[{"name":"Stablecoin","description":"A token with value pegged to another asset"}]},"TokenInfo":{"type":"object","description":"Metadata for a single token in a token list","additionalProperties":false,"properties":{"chainId":{"type":"integer","description":"The chain ID of the Ethereum network where this token is deployed","minimum":1,"examples":[1,42]},"address":{"type":"string","description":"The checksummed address of the token on the specified chain ID","pattern":"^0x[a-fA-F0-9]{40}$","examples":["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]},"decimals":{"type":"integer","description":"The number of decimals for the token balance","minimum":0,"maximum":255,"examples":[18]},"name":{"type":"string","description":"The name of the token","minLength":1,"maxLength":40,"pattern":"^[ \\\\w.\'+\\\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\\\[\\\\]\\\\(\\\\)]+$","examples":["USD Coin"]},"symbol":{"type":"string","description":"The symbol for the token; must be alphanumeric","pattern":"^[a-zA-Z0-9+\\\\-%/$.]+$","minLength":1,"maxLength":20,"examples":["USDC"]},"logoURI":{"type":"string","description":"A URI to the token logo asset; if not set, interface will attempt to find a logo based on the token address; suggest SVG or PNG of size 64x64","format":"uri","examples":["ipfs://QmXfzKRvjZz3u5JRgC4v5mGVbm9ahrUiB4DgzHBsnWbTMM"]},"tags":{"type":"array","description":"An array of tag identifiers associated with the token; tags are defined at the list level","items":{"$ref":"#/definitions/TagIdentifier"},"maxItems":10,"examples":["stablecoin","compound"]},"extensions":{"$ref":"#/definitions/ExtensionMap"}},"required":["chainId","address","decimals","name","symbol"]}},"type":"object","additionalProperties":false,"properties":{"name":{"type":"string","description":"The name of the token list","minLength":1,"maxLength":20,"pattern":"^[\\\\w ]+$","examples":["My Token List"]},"timestamp":{"type":"string","format":"date-time","description":"The timestamp of this list version; i.e. when this immutable version of the list was created"},"version":{"$ref":"#/definitions/Version"},"tokens":{"type":"array","description":"The list of tokens included in the list","items":{"$ref":"#/definitions/TokenInfo"},"minItems":1,"maxItems":10000},"keywords":{"type":"array","description":"Keywords associated with the contents of the list; may be used in list discoverability","items":{"type":"string","description":"A keyword to describe the contents of the list","minLength":1,"maxLength":20,"pattern":"^[\\\\w ]+$","examples":["compound","lending","personal tokens"]},"maxItems":20,"uniqueItems":true},"tags":{"type":"object","description":"A mapping of tag identifiers to their name and description","propertyNames":{"$ref":"#/definitions/TagIdentifier"},"additionalProperties":{"$ref":"#/definitions/TagDefinition"},"maxProperties":20,"examples":[{"stablecoin":{"name":"Stablecoin","description":"A token with value pegged to another asset"}}]},"logoURI":{"type":"string","description":"A URI for the logo of the token list; prefer SVG or PNG of size 256x256","format":"uri","examples":["ipfs://QmXfzKRvjZz3u5JRgC4v5mGVbm9ahrUiB4DgzHBsnWbTMM"]}},"required":["name","timestamp","version","tokens"]}')
        },
        894: function(e) {
            "use strict";
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#","description":"Meta-schema for $data reference (JSON Schema extension proposal)","type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}')
        },
        6680: function(e) {
            "use strict";
            e.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"http://json-schema.org/draft-07/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":true,"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":true},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":true},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"propertyNames":{"format":"regex"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":true,"enum":{"type":"array","items":true,"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#"},"then":{"$ref":"#"},"else":{"$ref":"#"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":true}')
        }
    }
]);
//# sourceMappingURL=393.8cf7c6c3b52ac2da.js.map