const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AnalysisGame-D4OgIEhq.js","assets/AnalysisGame-DPRQzFLe.css"])))=>i.map(i=>d[i]);
let Rt, $0, F0, T, tg, Yh, fg, I0, rg, lg, ug, Ve, ig, ng, ag, up, cg, w1, eg, W0;
let __tla = (async ()=>{
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);
        new MutationObserver((s)=>{
            for (const h of s)if (h.type === "childList") for (const v of h.addedNodes)v.tagName === "LINK" && v.rel === "modulepreload" && f(v);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function o(s) {
            const h = {};
            return s.integrity && (h.integrity = s.integrity), s.referrerPolicy && (h.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? h.credentials = "include" : s.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h;
        }
        function f(s) {
            if (s.ep) return;
            s.ep = !0;
            const h = o(s);
            fetch(s.href, h);
        }
    })();
    function x1(i) {
        return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    }
    var Nc = {
        exports: {}
    }, Cn = {};
    var Zd;
    function z1() {
        if (Zd) return Cn;
        Zd = 1;
        var i = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
        function o(f, s, h) {
            var v = null;
            if (h !== void 0 && (v = "" + h), s.key !== void 0 && (v = "" + s.key), "key" in s) {
                h = {};
                for(var S in s)S !== "key" && (h[S] = s[S]);
            } else h = s;
            return s = h.ref, {
                $$typeof: i,
                type: f,
                key: v,
                ref: s !== void 0 ? s : null,
                props: h
            };
        }
        return Cn.Fragment = r, Cn.jsx = o, Cn.jsxs = o, Cn;
    }
    var kd;
    function B1() {
        return kd || (kd = 1, Nc.exports = z1()), Nc.exports;
    }
    let Mc, qn, Dc, xc;
    Ve = B1();
    Mc = {
        exports: {}
    };
    qn = {};
    Dc = {
        exports: {}
    };
    xc = {};
    var Jd;
    function U1() {
        return Jd || (Jd = 1, function(i) {
            function r(z, V) {
                var Y = z.length;
                z.push(V);
                e: for(; 0 < Y;){
                    var J = Y - 1 >>> 1, g = z[J];
                    if (0 < s(g, V)) z[J] = V, z[Y] = g, Y = J;
                    else break e;
                }
            }
            function o(z) {
                return z.length === 0 ? null : z[0];
            }
            function f(z) {
                if (z.length === 0) return null;
                var V = z[0], Y = z.pop();
                if (Y !== V) {
                    z[0] = Y;
                    e: for(var J = 0, g = z.length, U = g >>> 1; J < U;){
                        var j = 2 * (J + 1) - 1, G = z[j], k = j + 1, ue = z[k];
                        if (0 > s(G, Y)) k < g && 0 > s(ue, G) ? (z[J] = ue, z[k] = Y, J = k) : (z[J] = G, z[j] = Y, J = j);
                        else if (k < g && 0 > s(ue, Y)) z[J] = ue, z[k] = Y, J = k;
                        else break e;
                    }
                }
                return V;
            }
            function s(z, V) {
                var Y = z.sortIndex - V.sortIndex;
                return Y !== 0 ? Y : z.id - V.id;
            }
            if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var h = performance;
                i.unstable_now = function() {
                    return h.now();
                };
            } else {
                var v = Date, S = v.now();
                i.unstable_now = function() {
                    return v.now() - S;
                };
            }
            var m = [], p = [], E = 1, _ = null, N = 3, H = !1, x = !1, L = !1, P = !1, w = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
            function W(z) {
                for(var V = o(p); V !== null;){
                    if (V.callback === null) f(p);
                    else if (V.startTime <= z) f(p), V.sortIndex = V.expirationTime, r(m, V);
                    else break;
                    V = o(p);
                }
            }
            function X(z) {
                if (L = !1, W(z), !x) if (o(m) !== null) x = !0, te || (te = !0, He());
                else {
                    var V = o(p);
                    V !== null && we(X, V.startTime - z);
                }
            }
            var te = !1, fe = -1, Se = 5, oe = -1;
            function qe() {
                return P ? !0 : !(i.unstable_now() - oe < Se);
            }
            function Be() {
                if (P = !1, te) {
                    var z = i.unstable_now();
                    oe = z;
                    var V = !0;
                    try {
                        e: {
                            x = !1, L && (L = !1, Q(fe), fe = -1), H = !0;
                            var Y = N;
                            try {
                                t: {
                                    for(W(z), _ = o(m); _ !== null && !(_.expirationTime > z && qe());){
                                        var J = _.callback;
                                        if (typeof J == "function") {
                                            _.callback = null, N = _.priorityLevel;
                                            var g = J(_.expirationTime <= z);
                                            if (z = i.unstable_now(), typeof g == "function") {
                                                _.callback = g, W(z), V = !0;
                                                break t;
                                            }
                                            _ === o(m) && f(m), W(z);
                                        } else f(m);
                                        _ = o(m);
                                    }
                                    if (_ !== null) V = !0;
                                    else {
                                        var U = o(p);
                                        U !== null && we(X, U.startTime - z), V = !1;
                                    }
                                }
                                break e;
                            } finally{
                                _ = null, N = Y, H = !1;
                            }
                            V = void 0;
                        }
                    } finally{
                        V ? He() : te = !1;
                    }
                }
            }
            var He;
            if (typeof K == "function") He = function() {
                K(Be);
            };
            else if (typeof MessageChannel < "u") {
                var Ot = new MessageChannel, Ht = Ot.port2;
                Ot.port1.onmessage = Be, He = function() {
                    Ht.postMessage(null);
                };
            } else He = function() {
                w(Be, 0);
            };
            function we(z, V) {
                fe = w(function() {
                    z(i.unstable_now());
                }, V);
            }
            i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(z) {
                z.callback = null;
            }, i.unstable_forceFrameRate = function(z) {
                0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Se = 0 < z ? Math.floor(1e3 / z) : 5;
            }, i.unstable_getCurrentPriorityLevel = function() {
                return N;
            }, i.unstable_next = function(z) {
                switch(N){
                    case 1:
                    case 2:
                    case 3:
                        var V = 3;
                        break;
                    default:
                        V = N;
                }
                var Y = N;
                N = V;
                try {
                    return z();
                } finally{
                    N = Y;
                }
            }, i.unstable_requestPaint = function() {
                P = !0;
            }, i.unstable_runWithPriority = function(z, V) {
                switch(z){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        z = 3;
                }
                var Y = N;
                N = z;
                try {
                    return V();
                } finally{
                    N = Y;
                }
            }, i.unstable_scheduleCallback = function(z, V, Y) {
                var J = i.unstable_now();
                switch(typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? J + Y : J) : Y = J, z){
                    case 1:
                        var g = -1;
                        break;
                    case 2:
                        g = 250;
                        break;
                    case 5:
                        g = 1073741823;
                        break;
                    case 4:
                        g = 1e4;
                        break;
                    default:
                        g = 5e3;
                }
                return g = Y + g, z = {
                    id: E++,
                    callback: V,
                    priorityLevel: z,
                    startTime: Y,
                    expirationTime: g,
                    sortIndex: -1
                }, Y > J ? (z.sortIndex = Y, r(p, z), o(m) === null && z === o(p) && (L ? (Q(fe), fe = -1) : L = !0, we(X, Y - J))) : (z.sortIndex = g, r(m, z), x || H || (x = !0, te || (te = !0, He()))), z;
            }, i.unstable_shouldYield = qe, i.unstable_wrapCallback = function(z) {
                var V = N;
                return function() {
                    var Y = N;
                    N = V;
                    try {
                        return z.apply(this, arguments);
                    } finally{
                        N = Y;
                    }
                };
            };
        }(xc)), xc;
    }
    var $d;
    function C1() {
        return $d || ($d = 1, Dc.exports = U1()), Dc.exports;
    }
    var zc = {
        exports: {}
    }, ae = {};
    var Wd;
    function q1() {
        if (Wd) return ae;
        Wd = 1;
        var i = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), v = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), _ = Symbol.iterator;
        function N(g) {
            return g === null || typeof g != "object" ? null : (g = _ && g[_] || g["@@iterator"], typeof g == "function" ? g : null);
        }
        var H = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, x = Object.assign, L = {};
        function P(g, U, j) {
            this.props = g, this.context = U, this.refs = L, this.updater = j || H;
        }
        P.prototype.isReactComponent = {}, P.prototype.setState = function(g, U) {
            if (typeof g != "object" && typeof g != "function" && g != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, g, U, "setState");
        }, P.prototype.forceUpdate = function(g) {
            this.updater.enqueueForceUpdate(this, g, "forceUpdate");
        };
        function w() {}
        w.prototype = P.prototype;
        function Q(g, U, j) {
            this.props = g, this.context = U, this.refs = L, this.updater = j || H;
        }
        var K = Q.prototype = new w;
        K.constructor = Q, x(K, P.prototype), K.isPureReactComponent = !0;
        var W = Array.isArray, X = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, te = Object.prototype.hasOwnProperty;
        function fe(g, U, j, G, k, ue) {
            return j = ue.ref, {
                $$typeof: i,
                type: g,
                key: U,
                ref: j !== void 0 ? j : null,
                props: ue
            };
        }
        function Se(g, U) {
            return fe(g.type, U, void 0, void 0, void 0, g.props);
        }
        function oe(g) {
            return typeof g == "object" && g !== null && g.$$typeof === i;
        }
        function qe(g) {
            var U = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + g.replace(/[=:]/g, function(j) {
                return U[j];
            });
        }
        var Be = /\/+/g;
        function He(g, U) {
            return typeof g == "object" && g !== null && g.key != null ? qe("" + g.key) : U.toString(36);
        }
        function Ot() {}
        function Ht(g) {
            switch(g.status){
                case "fulfilled":
                    return g.value;
                case "rejected":
                    throw g.reason;
                default:
                    switch(typeof g.status == "string" ? g.then(Ot, Ot) : (g.status = "pending", g.then(function(U) {
                        g.status === "pending" && (g.status = "fulfilled", g.value = U);
                    }, function(U) {
                        g.status === "pending" && (g.status = "rejected", g.reason = U);
                    })), g.status){
                        case "fulfilled":
                            return g.value;
                        case "rejected":
                            throw g.reason;
                    }
            }
            throw g;
        }
        function we(g, U, j, G, k) {
            var ue = typeof g;
            (ue === "undefined" || ue === "boolean") && (g = null);
            var F = !1;
            if (g === null) F = !0;
            else switch(ue){
                case "bigint":
                case "string":
                case "number":
                    F = !0;
                    break;
                case "object":
                    switch(g.$$typeof){
                        case i:
                        case r:
                            F = !0;
                            break;
                        case E:
                            return F = g._init, we(F(g._payload), U, j, G, k);
                    }
            }
            if (F) return k = k(g), F = G === "" ? "." + He(g, 0) : G, W(k) ? (j = "", F != null && (j = F.replace(Be, "$&/") + "/"), we(k, U, j, "", function(dt) {
                return dt;
            })) : k != null && (oe(k) && (k = Se(k, j + (k.key == null || g && g.key === k.key ? "" : ("" + k.key).replace(Be, "$&/") + "/") + F)), U.push(k)), 1;
            F = 0;
            var je = G === "" ? "." : G + ":";
            if (W(g)) for(var ye = 0; ye < g.length; ye++)G = g[ye], ue = je + He(G, ye), F += we(G, U, j, ue, k);
            else if (ye = N(g), typeof ye == "function") for(g = ye.call(g), ye = 0; !(G = g.next()).done;)G = G.value, ue = je + He(G, ye++), F += we(G, U, j, ue, k);
            else if (ue === "object") {
                if (typeof g.then == "function") return we(Ht(g), U, j, G, k);
                throw U = String(g), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.");
            }
            return F;
        }
        function z(g, U, j) {
            if (g == null) return g;
            var G = [], k = 0;
            return we(g, G, "", "", function(ue) {
                return U.call(j, ue, k++);
            }), G;
        }
        function V(g) {
            if (g._status === -1) {
                var U = g._result;
                U = U(), U.then(function(j) {
                    (g._status === 0 || g._status === -1) && (g._status = 1, g._result = j);
                }, function(j) {
                    (g._status === 0 || g._status === -1) && (g._status = 2, g._result = j);
                }), g._status === -1 && (g._status = 0, g._result = U);
            }
            if (g._status === 1) return g._result.default;
            throw g._result;
        }
        var Y = typeof reportError == "function" ? reportError : function(g) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var U = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
                    error: g
                });
                if (!window.dispatchEvent(U)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", g);
                return;
            }
            console.error(g);
        };
        function J() {}
        return ae.Children = {
            map: z,
            forEach: function(g, U, j) {
                z(g, function() {
                    U.apply(this, arguments);
                }, j);
            },
            count: function(g) {
                var U = 0;
                return z(g, function() {
                    U++;
                }), U;
            },
            toArray: function(g) {
                return z(g, function(U) {
                    return U;
                }) || [];
            },
            only: function(g) {
                if (!oe(g)) throw Error("React.Children.only expected to receive a single React element child.");
                return g;
            }
        }, ae.Component = P, ae.Fragment = o, ae.Profiler = s, ae.PureComponent = Q, ae.StrictMode = f, ae.Suspense = m, ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, ae.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(g) {
                return X.H.useMemoCache(g);
            }
        }, ae.cache = function(g) {
            return function() {
                return g.apply(null, arguments);
            };
        }, ae.cloneElement = function(g, U, j) {
            if (g == null) throw Error("The argument must be a React element, but you passed " + g + ".");
            var G = x({}, g.props), k = g.key, ue = void 0;
            if (U != null) for(F in U.ref !== void 0 && (ue = void 0), U.key !== void 0 && (k = "" + U.key), U)!te.call(U, F) || F === "key" || F === "__self" || F === "__source" || F === "ref" && U.ref === void 0 || (G[F] = U[F]);
            var F = arguments.length - 2;
            if (F === 1) G.children = j;
            else if (1 < F) {
                for(var je = Array(F), ye = 0; ye < F; ye++)je[ye] = arguments[ye + 2];
                G.children = je;
            }
            return fe(g.type, k, void 0, void 0, ue, G);
        }, ae.createContext = function(g) {
            return g = {
                $$typeof: v,
                _currentValue: g,
                _currentValue2: g,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, g.Provider = g, g.Consumer = {
                $$typeof: h,
                _context: g
            }, g;
        }, ae.createElement = function(g, U, j) {
            var G, k = {}, ue = null;
            if (U != null) for(G in U.key !== void 0 && (ue = "" + U.key), U)te.call(U, G) && G !== "key" && G !== "__self" && G !== "__source" && (k[G] = U[G]);
            var F = arguments.length - 2;
            if (F === 1) k.children = j;
            else if (1 < F) {
                for(var je = Array(F), ye = 0; ye < F; ye++)je[ye] = arguments[ye + 2];
                k.children = je;
            }
            if (g && g.defaultProps) for(G in F = g.defaultProps, F)k[G] === void 0 && (k[G] = F[G]);
            return fe(g, ue, void 0, void 0, null, k);
        }, ae.createRef = function() {
            return {
                current: null
            };
        }, ae.forwardRef = function(g) {
            return {
                $$typeof: S,
                render: g
            };
        }, ae.isValidElement = oe, ae.lazy = function(g) {
            return {
                $$typeof: E,
                _payload: {
                    _status: -1,
                    _result: g
                },
                _init: V
            };
        }, ae.memo = function(g, U) {
            return {
                $$typeof: p,
                type: g,
                compare: U === void 0 ? null : U
            };
        }, ae.startTransition = function(g) {
            var U = X.T, j = {};
            X.T = j;
            try {
                var G = g(), k = X.S;
                k !== null && k(j, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(J, Y);
            } catch (ue) {
                Y(ue);
            } finally{
                X.T = U;
            }
        }, ae.unstable_useCacheRefresh = function() {
            return X.H.useCacheRefresh();
        }, ae.use = function(g) {
            return X.H.use(g);
        }, ae.useActionState = function(g, U, j) {
            return X.H.useActionState(g, U, j);
        }, ae.useCallback = function(g, U) {
            return X.H.useCallback(g, U);
        }, ae.useContext = function(g) {
            return X.H.useContext(g);
        }, ae.useDebugValue = function() {}, ae.useDeferredValue = function(g, U) {
            return X.H.useDeferredValue(g, U);
        }, ae.useEffect = function(g, U, j) {
            var G = X.H;
            if (typeof j == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return G.useEffect(g, U);
        }, ae.useId = function() {
            return X.H.useId();
        }, ae.useImperativeHandle = function(g, U, j) {
            return X.H.useImperativeHandle(g, U, j);
        }, ae.useInsertionEffect = function(g, U) {
            return X.H.useInsertionEffect(g, U);
        }, ae.useLayoutEffect = function(g, U) {
            return X.H.useLayoutEffect(g, U);
        }, ae.useMemo = function(g, U) {
            return X.H.useMemo(g, U);
        }, ae.useOptimistic = function(g, U) {
            return X.H.useOptimistic(g, U);
        }, ae.useReducer = function(g, U, j) {
            return X.H.useReducer(g, U, j);
        }, ae.useRef = function(g) {
            return X.H.useRef(g);
        }, ae.useState = function(g) {
            return X.H.useState(g);
        }, ae.useSyncExternalStore = function(g, U, j) {
            return X.H.useSyncExternalStore(g, U, j);
        }, ae.useTransition = function() {
            return X.H.useTransition();
        }, ae.version = "19.1.0", ae;
    }
    var Fd;
    function si() {
        return Fd || (Fd = 1, zc.exports = q1()), zc.exports;
    }
    var Bc = {
        exports: {}
    }, $e = {};
    var Id;
    function H1() {
        if (Id) return $e;
        Id = 1;
        var i = si();
        function r(m) {
            var p = "https://react.dev/errors/" + m;
            if (1 < arguments.length) {
                p += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var E = 2; E < arguments.length; E++)p += "&args[]=" + encodeURIComponent(arguments[E]);
            }
            return "Minified React error #" + m + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function o() {}
        var f = {
            d: {
                f: o,
                r: function() {
                    throw Error(r(522));
                },
                D: o,
                C: o,
                L: o,
                m: o,
                X: o,
                S: o,
                M: o
            },
            p: 0,
            findDOMNode: null
        }, s = Symbol.for("react.portal");
        function h(m, p, E) {
            var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: s,
                key: _ == null ? null : "" + _,
                children: m,
                containerInfo: p,
                implementation: E
            };
        }
        var v = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function S(m, p) {
            if (m === "font") return "";
            if (typeof p == "string") return p === "use-credentials" ? p : "";
        }
        return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, $e.createPortal = function(m, p) {
            var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(r(299));
            return h(m, p, null, E);
        }, $e.flushSync = function(m) {
            var p = v.T, E = f.p;
            try {
                if (v.T = null, f.p = 2, m) return m();
            } finally{
                v.T = p, f.p = E, f.d.f();
            }
        }, $e.preconnect = function(m, p) {
            typeof m == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, f.d.C(m, p));
        }, $e.prefetchDNS = function(m) {
            typeof m == "string" && f.d.D(m);
        }, $e.preinit = function(m, p) {
            if (typeof m == "string" && p && typeof p.as == "string") {
                var E = p.as, _ = S(E, p.crossOrigin), N = typeof p.integrity == "string" ? p.integrity : void 0, H = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
                E === "style" ? f.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, {
                    crossOrigin: _,
                    integrity: N,
                    fetchPriority: H
                }) : E === "script" && f.d.X(m, {
                    crossOrigin: _,
                    integrity: N,
                    fetchPriority: H,
                    nonce: typeof p.nonce == "string" ? p.nonce : void 0
                });
            }
        }, $e.preinitModule = function(m, p) {
            if (typeof m == "string") if (typeof p == "object" && p !== null) {
                if (p.as == null || p.as === "script") {
                    var E = S(p.as, p.crossOrigin);
                    f.d.M(m, {
                        crossOrigin: E,
                        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                        nonce: typeof p.nonce == "string" ? p.nonce : void 0
                    });
                }
            } else p == null && f.d.M(m);
        }, $e.preload = function(m, p) {
            if (typeof m == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
                var E = p.as, _ = S(E, p.crossOrigin);
                f.d.L(m, E, {
                    crossOrigin: _,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0,
                    nonce: typeof p.nonce == "string" ? p.nonce : void 0,
                    type: typeof p.type == "string" ? p.type : void 0,
                    fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
                    referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
                    imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
                    imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
                    media: typeof p.media == "string" ? p.media : void 0
                });
            }
        }, $e.preloadModule = function(m, p) {
            if (typeof m == "string") if (p) {
                var E = S(p.as, p.crossOrigin);
                f.d.m(m, {
                    as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
                    crossOrigin: E,
                    integrity: typeof p.integrity == "string" ? p.integrity : void 0
                });
            } else f.d.m(m);
        }, $e.requestFormReset = function(m) {
            f.d.r(m);
        }, $e.unstable_batchedUpdates = function(m, p) {
            return m(p);
        }, $e.useFormState = function(m, p, E) {
            return v.H.useFormState(m, p, E);
        }, $e.useFormStatus = function() {
            return v.H.useHostTransitionStatus();
        }, $e.version = "19.1.0", $e;
    }
    var eh;
    w1 = function() {
        if (eh) return Bc.exports;
        eh = 1;
        function i() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (r) {
                console.error(r);
            }
        }
        return i(), Bc.exports = H1(), Bc.exports;
    };
    var th;
    function P1() {
        if (th) return qn;
        th = 1;
        var i = C1(), r = si(), o = w1();
        function f(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var l = 2; l < arguments.length; l++)t += "&args[]=" + encodeURIComponent(arguments[l]);
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function s(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
        }
        function h(e) {
            var t = e, l = e;
            if (e.alternate) for(; t.return;)t = t.return;
            else {
                e = t;
                do t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
                while (e);
            }
            return t.tag === 3 ? l : null;
        }
        function v(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function S(e) {
            if (h(e) !== e) throw Error(f(188));
        }
        function m(e) {
            var t = e.alternate;
            if (!t) {
                if (t = h(e), t === null) throw Error(f(188));
                return t !== e ? null : e;
            }
            for(var l = e, a = t;;){
                var n = l.return;
                if (n === null) break;
                var u = n.alternate;
                if (u === null) {
                    if (a = n.return, a !== null) {
                        l = a;
                        continue;
                    }
                    break;
                }
                if (n.child === u.child) {
                    for(u = n.child; u;){
                        if (u === l) return S(n), e;
                        if (u === a) return S(n), t;
                        u = u.sibling;
                    }
                    throw Error(f(188));
                }
                if (l.return !== a.return) l = n, a = u;
                else {
                    for(var c = !1, d = n.child; d;){
                        if (d === l) {
                            c = !0, l = n, a = u;
                            break;
                        }
                        if (d === a) {
                            c = !0, a = n, l = u;
                            break;
                        }
                        d = d.sibling;
                    }
                    if (!c) {
                        for(d = u.child; d;){
                            if (d === l) {
                                c = !0, l = u, a = n;
                                break;
                            }
                            if (d === a) {
                                c = !0, a = u, l = n;
                                break;
                            }
                            d = d.sibling;
                        }
                        if (!c) throw Error(f(189));
                    }
                }
                if (l.alternate !== a) throw Error(f(190));
            }
            if (l.tag !== 3) throw Error(f(188));
            return l.stateNode.current === l ? e : t;
        }
        function p(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e;
            for(e = e.child; e !== null;){
                if (t = p(e), t !== null) return t;
                e = e.sibling;
            }
            return null;
        }
        var E = Object.assign, _ = Symbol.for("react.element"), N = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), Q = Symbol.for("react.consumer"), K = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), Se = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), qe = Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
        function He(e) {
            return e === null || typeof e != "object" ? null : (e = Be && e[Be] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var Ot = Symbol.for("react.client.reference");
        function Ht(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === Ot ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case x:
                    return "Fragment";
                case P:
                    return "Profiler";
                case L:
                    return "StrictMode";
                case X:
                    return "Suspense";
                case te:
                    return "SuspenseList";
                case oe:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case H:
                    return "Portal";
                case K:
                    return (e.displayName || "Context") + ".Provider";
                case Q:
                    return (e._context.displayName || "Context") + ".Consumer";
                case W:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case fe:
                    return t = e.displayName || null, t !== null ? t : Ht(e.type) || "Memo";
                case Se:
                    t = e._payload, e = e._init;
                    try {
                        return Ht(e(t));
                    } catch  {}
            }
            return null;
        }
        var we = Array.isArray, z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, J = [], g = -1;
        function U(e) {
            return {
                current: e
            };
        }
        function j(e) {
            0 > g || (e.current = J[g], J[g] = null, g--);
        }
        function G(e, t) {
            g++, J[g] = e.current, e.current = t;
        }
        var k = U(null), ue = U(null), F = U(null), je = U(null);
        function ye(e, t) {
            switch(G(F, t), G(ue, e), G(k, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? Ed(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = Ed(t), e = Rd(t, e);
                    else switch(e){
                        case "svg":
                            e = 1;
                            break;
                        case "math":
                            e = 2;
                            break;
                        default:
                            e = 0;
                    }
            }
            j(k), G(k, e);
        }
        function dt() {
            j(k), j(ue), j(F);
        }
        function qa(e) {
            e.memoizedState !== null && G(je, e);
            var t = k.current, l = Rd(t, e.type);
            t !== l && (G(ue, e), G(k, l));
        }
        function Nl(e) {
            ue.current === e && (j(k), j(ue)), je.current === e && (j(je), Dn._currentValue = Y);
        }
        var Zl = Object.prototype.hasOwnProperty, pi = i.unstable_scheduleCallback, mi = i.unstable_cancelCallback, cp = i.unstable_shouldYield, fp = i.unstable_requestPaint, Dt = i.unstable_now, op = i.unstable_getCurrentPriorityLevel, Ic = i.unstable_ImmediatePriority, ef = i.unstable_UserBlockingPriority, Kn = i.unstable_NormalPriority, sp = i.unstable_LowPriority, tf = i.unstable_IdlePriority, dp = i.log, hp = i.unstable_setDisableYieldValue, Ha = null, at = null;
        function ll(e) {
            if (typeof dp == "function" && hp(e), at && typeof at.setStrictMode == "function") try {
                at.setStrictMode(Ha, e);
            } catch  {}
        }
        var nt = Math.clz32 ? Math.clz32 : yp, pp = Math.log, mp = Math.LN2;
        function yp(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (pp(e) / mp | 0) | 0;
        }
        var Gn = 256, Xn = 4194304;
        function Ml(e) {
            var t = e & 42;
            if (t !== 0) return t;
            switch(e & -e){
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                    return 128;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return e & 4194048;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return e & 62914560;
                case 67108864:
                    return 67108864;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 0;
                default:
                    return e;
            }
        }
        function Vn(e, t, l) {
            var a = e.pendingLanes;
            if (a === 0) return 0;
            var n = 0, u = e.suspendedLanes, c = e.pingedLanes;
            e = e.warmLanes;
            var d = a & 134217727;
            return d !== 0 ? (a = d & ~u, a !== 0 ? n = Ml(a) : (c &= d, c !== 0 ? n = Ml(c) : l || (l = d & ~e, l !== 0 && (n = Ml(l))))) : (d = a & ~u, d !== 0 ? n = Ml(d) : c !== 0 ? n = Ml(c) : l || (l = a & ~e, l !== 0 && (n = Ml(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
        }
        function wa(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function vp(e, t) {
            switch(e){
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                    return t + 250;
                case 16:
                case 32:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return -1;
                case 67108864:
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1;
            }
        }
        function lf() {
            var e = Gn;
            return Gn <<= 1, (Gn & 4194048) === 0 && (Gn = 256), e;
        }
        function af() {
            var e = Xn;
            return Xn <<= 1, (Xn & 62914560) === 0 && (Xn = 4194304), e;
        }
        function yi(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Pa(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function gp(e, t, l, a, n, u) {
            var c = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var d = e.entanglements, y = e.expirationTimes, A = e.hiddenUpdates;
            for(l = c & ~l; 0 < l;){
                var B = 31 - nt(l), q = 1 << B;
                d[B] = 0, y[B] = -1;
                var M = A[B];
                if (M !== null) for(A[B] = null, B = 0; B < M.length; B++){
                    var D = M[B];
                    D !== null && (D.lane &= -536870913);
                }
                l &= ~q;
            }
            a !== 0 && nf(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
        }
        function nf(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var a = 31 - nt(t);
            e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 4194090;
        }
        function uf(e, t) {
            var l = e.entangledLanes |= t;
            for(e = e.entanglements; l;){
                var a = 31 - nt(l), n = 1 << a;
                n & t | e[a] & t && (e[a] |= t), l &= ~n;
            }
        }
        function vi(e) {
            switch(e){
                case 2:
                    e = 1;
                    break;
                case 8:
                    e = 4;
                    break;
                case 32:
                    e = 16;
                    break;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    e = 128;
                    break;
                case 268435456:
                    e = 134217728;
                    break;
                default:
                    e = 0;
            }
            return e;
        }
        function gi(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function rf() {
            var e = V.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Yd(e.type));
        }
        function bp(e, t) {
            var l = V.p;
            try {
                return V.p = e, t();
            } finally{
                V.p = l;
            }
        }
        var al = Math.random().toString(36).slice(2), ke = "__reactFiber$" + al, Fe = "__reactProps$" + al, kl = "__reactContainer$" + al, bi = "__reactEvents$" + al, Sp = "__reactListeners$" + al, Ep = "__reactHandles$" + al, cf = "__reactResources$" + al, Qa = "__reactMarker$" + al;
        function Si(e) {
            delete e[ke], delete e[Fe], delete e[bi], delete e[Sp], delete e[Ep];
        }
        function Jl(e) {
            var t = e[ke];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[kl] || l[ke]) {
                    if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = _d(e); e !== null;){
                        if (l = e[ke]) return l;
                        e = _d(e);
                    }
                    return t;
                }
                e = l, l = e.parentNode;
            }
            return null;
        }
        function $l(e) {
            if (e = e[ke] || e[kl]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function La(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(f(33));
        }
        function Wl(e) {
            var t = e[cf];
            return t || (t = e[cf] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Pe(e) {
            e[Qa] = !0;
        }
        var ff = new Set, of = {};
        function Dl(e, t) {
            Fl(e, t), Fl(e + "Capture", t);
        }
        function Fl(e, t) {
            for(of[e] = t, e = 0; e < t.length; e++)ff.add(t[e]);
        }
        var Rp = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), sf = {}, df = {};
        function Tp(e) {
            return Zl.call(df, e) ? !0 : Zl.call(sf, e) ? !1 : Rp.test(e) ? df[e] = !0 : (sf[e] = !0, !1);
        }
        function Zn(e, t, l) {
            if (Tp(t)) if (l === null) e.removeAttribute(t);
            else {
                switch(typeof l){
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var a = t.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            e.removeAttribute(t);
                            return;
                        }
                }
                e.setAttribute(t, "" + l);
            }
        }
        function kn(e, t, l) {
            if (l === null) e.removeAttribute(t);
            else {
                switch(typeof l){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(t);
                        return;
                }
                e.setAttribute(t, "" + l);
            }
        }
        function wt(e, t, l, a) {
            if (a === null) e.removeAttribute(l);
            else {
                switch(typeof a){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(l);
                        return;
                }
                e.setAttributeNS(t, l, "" + a);
            }
        }
        var Ei, hf;
        function Il(e) {
            if (Ei === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Ei = t && t[1] || "", hf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Ei + e + hf;
        }
        var Ri = !1;
        function Ti(e, t) {
            if (!e || Ri) return "";
            Ri = !0;
            var l = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var a = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var q = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(q.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(q, []);
                                    } catch (D) {
                                        var M = D;
                                    }
                                    Reflect.construct(e, [], q);
                                } else {
                                    try {
                                        q.call();
                                    } catch (D) {
                                        M = D;
                                    }
                                    e.call(q.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (D) {
                                    M = D;
                                }
                                (q = e()) && typeof q.catch == "function" && q.catch(function() {});
                            }
                        } catch (D) {
                            if (D && M && typeof D.stack == "string") return [
                                D.stack,
                                M.stack
                            ];
                        }
                        return [
                            null,
                            null
                        ];
                    }
                };
                a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
                n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var u = a.DetermineComponentFrameRoot(), c = u[0], d = u[1];
                if (c && d) {
                    var y = c.split(`
`), A = d.split(`
`);
                    for(n = a = 0; a < y.length && !y[a].includes("DetermineComponentFrameRoot");)a++;
                    for(; n < A.length && !A[n].includes("DetermineComponentFrameRoot");)n++;
                    if (a === y.length || n === A.length) for(a = y.length - 1, n = A.length - 1; 1 <= a && 0 <= n && y[a] !== A[n];)n--;
                    for(; 1 <= a && 0 <= n; a--, n--)if (y[a] !== A[n]) {
                        if (a !== 1 || n !== 1) do if (a--, n--, 0 > n || y[a] !== A[n]) {
                            var B = `
` + y[a].replace(" at new ", " at ");
                            return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), B;
                        }
                        while (1 <= a && 0 <= n);
                        break;
                    }
                }
            } finally{
                Ri = !1, Error.prepareStackTrace = l;
            }
            return (l = e ? e.displayName || e.name : "") ? Il(l) : "";
        }
        function Op(e) {
            switch(e.tag){
                case 26:
                case 27:
                case 5:
                    return Il(e.type);
                case 16:
                    return Il("Lazy");
                case 13:
                    return Il("Suspense");
                case 19:
                    return Il("SuspenseList");
                case 0:
                case 15:
                    return Ti(e.type, !1);
                case 11:
                    return Ti(e.type.render, !1);
                case 1:
                    return Ti(e.type, !0);
                case 31:
                    return Il("Activity");
                default:
                    return "";
            }
        }
        function pf(e) {
            try {
                var t = "";
                do t += Op(e), e = e.return;
                while (e);
                return t;
            } catch (l) {
                return `
Error generating stack: ` + l.message + `
` + l.stack;
            }
        }
        function ht(e) {
            switch(typeof e){
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return e;
                case "object":
                    return e;
                default:
                    return "";
            }
        }
        function mf(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Ap(e) {
            var t = mf(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), a = "" + e[t];
            if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
                var n = l.get, u = l.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return n.call(this);
                    },
                    set: function(c) {
                        a = "" + c, u.call(this, c);
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: l.enumerable
                }), {
                    getValue: function() {
                        return a;
                    },
                    setValue: function(c) {
                        a = "" + c;
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t];
                    }
                };
            }
        }
        function Jn(e) {
            e._valueTracker || (e._valueTracker = Ap(e));
        }
        function yf(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), a = "";
            return e && (a = mf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
        }
        function $n(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var _p = /[\n"\\]/g;
        function pt(e) {
            return e.replace(_p, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Oi(e, t, l, a, n, u, c, d) {
            e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ht(t)) : e.value !== "" + ht(t) && (e.value = "" + ht(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? Ai(e, c, ht(t)) : l != null ? Ai(e, c, ht(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + ht(d) : e.removeAttribute("name");
        }
        function vf(e, t, l, a, n, u, c, d) {
            if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
                if (!(u !== "submit" && u !== "reset" || t != null)) return;
                l = l != null ? "" + ht(l) : "", t = t != null ? "" + ht(t) : l, d || t === e.value || (e.value = t), e.defaultValue = t;
            }
            a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c);
        }
        function Ai(e, t, l) {
            t === "number" && $n(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
        }
        function ea(e, t, l, a) {
            if (e = e.options, t) {
                t = {};
                for(var n = 0; n < l.length; n++)t["$" + l[n]] = !0;
                for(l = 0; l < e.length; l++)n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
            } else {
                for(l = "" + ht(l), t = null, n = 0; n < e.length; n++){
                    if (e[n].value === l) {
                        e[n].selected = !0, a && (e[n].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[n].disabled || (t = e[n]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function gf(e, t, l) {
            if (t != null && (t = "" + ht(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + ht(l) : "";
        }
        function bf(e, t, l, a) {
            if (t == null) {
                if (a != null) {
                    if (l != null) throw Error(f(92));
                    if (we(a)) {
                        if (1 < a.length) throw Error(f(93));
                        a = a[0];
                    }
                    l = a;
                }
                l == null && (l = ""), t = l;
            }
            l = ht(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a);
        }
        function ta(e, t) {
            if (t) {
                var l = e.firstChild;
                if (l && l === e.lastChild && l.nodeType === 3) {
                    l.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var Np = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Sf(e, t, l) {
            var a = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Np.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function Ef(e, t, l) {
            if (t != null && typeof t != "object") throw Error(f(62));
            if (e = e.style, l != null) {
                for(var a in l)!l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
                for(var n in t)a = t[n], t.hasOwnProperty(n) && l[n] !== a && Sf(e, n, a);
            } else for(var u in t)t.hasOwnProperty(u) && Sf(e, u, t[u]);
        }
        function _i(e) {
            if (e.indexOf("-") === -1) return !1;
            switch(e){
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var Mp = new Map([
            [
                "acceptCharset",
                "accept-charset"
            ],
            [
                "htmlFor",
                "for"
            ],
            [
                "httpEquiv",
                "http-equiv"
            ],
            [
                "crossOrigin",
                "crossorigin"
            ],
            [
                "accentHeight",
                "accent-height"
            ],
            [
                "alignmentBaseline",
                "alignment-baseline"
            ],
            [
                "arabicForm",
                "arabic-form"
            ],
            [
                "baselineShift",
                "baseline-shift"
            ],
            [
                "capHeight",
                "cap-height"
            ],
            [
                "clipPath",
                "clip-path"
            ],
            [
                "clipRule",
                "clip-rule"
            ],
            [
                "colorInterpolation",
                "color-interpolation"
            ],
            [
                "colorInterpolationFilters",
                "color-interpolation-filters"
            ],
            [
                "colorProfile",
                "color-profile"
            ],
            [
                "colorRendering",
                "color-rendering"
            ],
            [
                "dominantBaseline",
                "dominant-baseline"
            ],
            [
                "enableBackground",
                "enable-background"
            ],
            [
                "fillOpacity",
                "fill-opacity"
            ],
            [
                "fillRule",
                "fill-rule"
            ],
            [
                "floodColor",
                "flood-color"
            ],
            [
                "floodOpacity",
                "flood-opacity"
            ],
            [
                "fontFamily",
                "font-family"
            ],
            [
                "fontSize",
                "font-size"
            ],
            [
                "fontSizeAdjust",
                "font-size-adjust"
            ],
            [
                "fontStretch",
                "font-stretch"
            ],
            [
                "fontStyle",
                "font-style"
            ],
            [
                "fontVariant",
                "font-variant"
            ],
            [
                "fontWeight",
                "font-weight"
            ],
            [
                "glyphName",
                "glyph-name"
            ],
            [
                "glyphOrientationHorizontal",
                "glyph-orientation-horizontal"
            ],
            [
                "glyphOrientationVertical",
                "glyph-orientation-vertical"
            ],
            [
                "horizAdvX",
                "horiz-adv-x"
            ],
            [
                "horizOriginX",
                "horiz-origin-x"
            ],
            [
                "imageRendering",
                "image-rendering"
            ],
            [
                "letterSpacing",
                "letter-spacing"
            ],
            [
                "lightingColor",
                "lighting-color"
            ],
            [
                "markerEnd",
                "marker-end"
            ],
            [
                "markerMid",
                "marker-mid"
            ],
            [
                "markerStart",
                "marker-start"
            ],
            [
                "overlinePosition",
                "overline-position"
            ],
            [
                "overlineThickness",
                "overline-thickness"
            ],
            [
                "paintOrder",
                "paint-order"
            ],
            [
                "panose-1",
                "panose-1"
            ],
            [
                "pointerEvents",
                "pointer-events"
            ],
            [
                "renderingIntent",
                "rendering-intent"
            ],
            [
                "shapeRendering",
                "shape-rendering"
            ],
            [
                "stopColor",
                "stop-color"
            ],
            [
                "stopOpacity",
                "stop-opacity"
            ],
            [
                "strikethroughPosition",
                "strikethrough-position"
            ],
            [
                "strikethroughThickness",
                "strikethrough-thickness"
            ],
            [
                "strokeDasharray",
                "stroke-dasharray"
            ],
            [
                "strokeDashoffset",
                "stroke-dashoffset"
            ],
            [
                "strokeLinecap",
                "stroke-linecap"
            ],
            [
                "strokeLinejoin",
                "stroke-linejoin"
            ],
            [
                "strokeMiterlimit",
                "stroke-miterlimit"
            ],
            [
                "strokeOpacity",
                "stroke-opacity"
            ],
            [
                "strokeWidth",
                "stroke-width"
            ],
            [
                "textAnchor",
                "text-anchor"
            ],
            [
                "textDecoration",
                "text-decoration"
            ],
            [
                "textRendering",
                "text-rendering"
            ],
            [
                "transformOrigin",
                "transform-origin"
            ],
            [
                "underlinePosition",
                "underline-position"
            ],
            [
                "underlineThickness",
                "underline-thickness"
            ],
            [
                "unicodeBidi",
                "unicode-bidi"
            ],
            [
                "unicodeRange",
                "unicode-range"
            ],
            [
                "unitsPerEm",
                "units-per-em"
            ],
            [
                "vAlphabetic",
                "v-alphabetic"
            ],
            [
                "vHanging",
                "v-hanging"
            ],
            [
                "vIdeographic",
                "v-ideographic"
            ],
            [
                "vMathematical",
                "v-mathematical"
            ],
            [
                "vectorEffect",
                "vector-effect"
            ],
            [
                "vertAdvY",
                "vert-adv-y"
            ],
            [
                "vertOriginX",
                "vert-origin-x"
            ],
            [
                "vertOriginY",
                "vert-origin-y"
            ],
            [
                "wordSpacing",
                "word-spacing"
            ],
            [
                "writingMode",
                "writing-mode"
            ],
            [
                "xmlnsXlink",
                "xmlns:xlink"
            ],
            [
                "xHeight",
                "x-height"
            ]
        ]), Dp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Wn(e) {
            return Dp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Ni = null;
        function Mi(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var la = null, aa = null;
        function Rf(e) {
            var t = $l(e);
            if (t && (e = t.stateNode)) {
                var l = e[Fe] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (Oi(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + pt("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var a = l[t];
                                if (a !== e && a.form === e.form) {
                                    var n = a[Fe] || null;
                                    if (!n) throw Error(f(90));
                                    Oi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)a = l[t], a.form === e.form && yf(a);
                        }
                        break e;
                    case "textarea":
                        gf(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && ea(e, !!l.multiple, t, !1);
                }
            }
        }
        var Di = !1;
        function Tf(e, t, l) {
            if (Di) return e(t, l);
            Di = !0;
            try {
                var a = e(t);
                return a;
            } finally{
                if (Di = !1, (la !== null || aa !== null) && (Hu(), la && (t = la, e = aa, aa = la = null, Rf(t), e))) for(t = 0; t < e.length; t++)Rf(e[t]);
            }
        }
        function Ya(e, t) {
            var l = e.stateNode;
            if (l === null) return null;
            var a = l[Fe] || null;
            if (a === null) return null;
            l = a[t];
            e: switch(t){
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
                    break e;
                default:
                    e = !1;
            }
            if (e) return null;
            if (l && typeof l != "function") throw Error(f(231, t, typeof l));
            return l;
        }
        var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xi = !1;
        if (Pt) try {
            var ja = {};
            Object.defineProperty(ja, "passive", {
                get: function() {
                    xi = !0;
                }
            }), window.addEventListener("test", ja, ja), window.removeEventListener("test", ja, ja);
        } catch  {
            xi = !1;
        }
        var nl = null, zi = null, Fn = null;
        function Of() {
            if (Fn) return Fn;
            var e, t = zi, l = t.length, a, n = "value" in nl ? nl.value : nl.textContent, u = n.length;
            for(e = 0; e < l && t[e] === n[e]; e++);
            var c = l - e;
            for(a = 1; a <= c && t[l - a] === n[u - a]; a++);
            return Fn = n.slice(e, 1 < a ? 1 - a : void 0);
        }
        function In(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function eu() {
            return !0;
        }
        function Af() {
            return !1;
        }
        function Ie(e) {
            function t(l, a, n, u, c) {
                this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
                for(var d in e)e.hasOwnProperty(d) && (l = e[d], this[d] = l ? l(u) : u[d]);
                return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? eu : Af, this.isPropagationStopped = Af, this;
            }
            return E(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = eu);
                },
                stopPropagation: function() {
                    var l = this.nativeEvent;
                    l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = eu);
                },
                persist: function() {},
                isPersistent: eu
            }), t;
        }
        var xl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, tu = Ie(xl), Ka = E({}, xl, {
            view: 0,
            detail: 0
        }), xp = Ie(Ka), Bi, Ui, Ga, lu = E({}, Ka, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: qi,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Ga && (Ga && e.type === "mousemove" ? (Bi = e.screenX - Ga.screenX, Ui = e.screenY - Ga.screenY) : Ui = Bi = 0, Ga = e), Bi);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Ui;
            }
        }), _f = Ie(lu), zp = E({}, lu, {
            dataTransfer: 0
        }), Bp = Ie(zp), Up = E({}, Ka, {
            relatedTarget: 0
        }), Ci = Ie(Up), Cp = E({}, xl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), qp = Ie(Cp), Hp = E({}, xl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), wp = Ie(Hp), Pp = E({}, xl, {
            data: 0
        }), Nf = Ie(Pp), Qp = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, Lp = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, Yp = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function jp(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Yp[e]) ? !!t[e] : !1;
        }
        function qi() {
            return jp;
        }
        var Kp = E({}, Ka, {
            key: function(e) {
                if (e.key) {
                    var t = Qp[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = In(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lp[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: qi,
            charCode: function(e) {
                return e.type === "keypress" ? In(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? In(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), Gp = Ie(Kp), Xp = E({}, lu, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), Mf = Ie(Xp), Vp = E({}, Ka, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: qi
        }), Zp = Ie(Vp), kp = E({}, xl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Jp = Ie(kp), $p = E({}, lu, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), Wp = Ie($p), Fp = E({}, xl, {
            newState: 0,
            oldState: 0
        }), Ip = Ie(Fp), em = [
            9,
            13,
            27,
            32
        ], Hi = Pt && "CompositionEvent" in window, Xa = null;
        Pt && "documentMode" in document && (Xa = document.documentMode);
        var tm = Pt && "TextEvent" in window && !Xa, Df = Pt && (!Hi || Xa && 8 < Xa && 11 >= Xa), xf = " ", zf = !1;
        function Bf(e, t) {
            switch(e){
                case "keyup":
                    return em.indexOf(t.keyCode) !== -1;
                case "keydown":
                    return t.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function Uf(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var na = !1;
        function lm(e, t) {
            switch(e){
                case "compositionend":
                    return Uf(t);
                case "keypress":
                    return t.which !== 32 ? null : (zf = !0, xf);
                case "textInput":
                    return e = t.data, e === xf && zf ? null : e;
                default:
                    return null;
            }
        }
        function am(e, t) {
            if (na) return e === "compositionend" || !Hi && Bf(e, t) ? (e = Of(), Fn = zi = nl = null, na = !1, e) : null;
            switch(e){
                case "paste":
                    return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend":
                    return Df && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var nm = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function Cf(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!nm[e.type] : t === "textarea";
        }
        function qf(e, t, l, a) {
            la ? aa ? aa.push(a) : aa = [
                a
            ] : la = a, t = ju(t, "onChange"), 0 < t.length && (l = new tu("onChange", "change", null, l, a), e.push({
                event: l,
                listeners: t
            }));
        }
        var Va = null, Za = null;
        function um(e) {
            yd(e, 0);
        }
        function au(e) {
            var t = La(e);
            if (yf(t)) return e;
        }
        function Hf(e, t) {
            if (e === "change") return t;
        }
        var wf = !1;
        if (Pt) {
            var wi;
            if (Pt) {
                var Pi = "oninput" in document;
                if (!Pi) {
                    var Pf = document.createElement("div");
                    Pf.setAttribute("oninput", "return;"), Pi = typeof Pf.oninput == "function";
                }
                wi = Pi;
            } else wi = !1;
            wf = wi && (!document.documentMode || 9 < document.documentMode);
        }
        function Qf() {
            Va && (Va.detachEvent("onpropertychange", Lf), Za = Va = null);
        }
        function Lf(e) {
            if (e.propertyName === "value" && au(Za)) {
                var t = [];
                qf(t, Za, e, Mi(e)), Tf(um, t);
            }
        }
        function im(e, t, l) {
            e === "focusin" ? (Qf(), Va = t, Za = l, Va.attachEvent("onpropertychange", Lf)) : e === "focusout" && Qf();
        }
        function rm(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return au(Za);
        }
        function cm(e, t) {
            if (e === "click") return au(t);
        }
        function fm(e, t) {
            if (e === "input" || e === "change") return au(t);
        }
        function om(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var ut = typeof Object.is == "function" ? Object.is : om;
        function ka(e, t) {
            if (ut(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), a = Object.keys(t);
            if (l.length !== a.length) return !1;
            for(a = 0; a < l.length; a++){
                var n = l[a];
                if (!Zl.call(t, n) || !ut(e[n], t[n])) return !1;
            }
            return !0;
        }
        function Yf(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function jf(e, t) {
            var l = Yf(e);
            e = 0;
            for(var a; l;){
                if (l.nodeType === 3) {
                    if (a = e + l.textContent.length, e <= t && a >= t) return {
                        node: l,
                        offset: t - e
                    };
                    e = a;
                }
                e: {
                    for(; l;){
                        if (l.nextSibling) {
                            l = l.nextSibling;
                            break e;
                        }
                        l = l.parentNode;
                    }
                    l = void 0;
                }
                l = Yf(l);
            }
        }
        function Kf(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function Gf(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = $n(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var l = typeof t.contentWindow.location.href == "string";
                } catch  {
                    l = !1;
                }
                if (l) e = t.contentWindow;
                else break;
                t = $n(e.document);
            }
            return t;
        }
        function Qi(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var sm = Pt && "documentMode" in document && 11 >= document.documentMode, ua = null, Li = null, Ja = null, Yi = !1;
        function Xf(e, t, l) {
            var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            Yi || ua == null || ua !== $n(a) || (a = ua, "selectionStart" in a && Qi(a) ? a = {
                start: a.selectionStart,
                end: a.selectionEnd
            } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
                anchorNode: a.anchorNode,
                anchorOffset: a.anchorOffset,
                focusNode: a.focusNode,
                focusOffset: a.focusOffset
            }), Ja && ka(Ja, a) || (Ja = a, a = ju(Li, "onSelect"), 0 < a.length && (t = new tu("onSelect", "select", null, t, l), e.push({
                event: t,
                listeners: a
            }), t.target = ua)));
        }
        function zl(e, t) {
            var l = {};
            return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
        }
        var ia = {
            animationend: zl("Animation", "AnimationEnd"),
            animationiteration: zl("Animation", "AnimationIteration"),
            animationstart: zl("Animation", "AnimationStart"),
            transitionrun: zl("Transition", "TransitionRun"),
            transitionstart: zl("Transition", "TransitionStart"),
            transitioncancel: zl("Transition", "TransitionCancel"),
            transitionend: zl("Transition", "TransitionEnd")
        }, ji = {}, Vf = {};
        Pt && (Vf = document.createElement("div").style, "AnimationEvent" in window || (delete ia.animationend.animation, delete ia.animationiteration.animation, delete ia.animationstart.animation), "TransitionEvent" in window || delete ia.transitionend.transition);
        function Bl(e) {
            if (ji[e]) return ji[e];
            if (!ia[e]) return e;
            var t = ia[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in Vf) return ji[e] = t[l];
            return e;
        }
        var Zf = Bl("animationend"), kf = Bl("animationiteration"), Jf = Bl("animationstart"), dm = Bl("transitionrun"), hm = Bl("transitionstart"), pm = Bl("transitioncancel"), $f = Bl("transitionend"), Wf = new Map, Ki = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Ki.push("scrollEnd");
        function At(e, t) {
            Wf.set(e, t), Dl(t, [
                e
            ]);
        }
        var Ff = new WeakMap;
        function mt(e, t) {
            if (typeof e == "object" && e !== null) {
                var l = Ff.get(e);
                return l !== void 0 ? l : (t = {
                    value: e,
                    source: t,
                    stack: pf(t)
                }, Ff.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: pf(t)
            };
        }
        var yt = [], ra = 0, Gi = 0;
        function nu() {
            for(var e = ra, t = Gi = ra = 0; t < e;){
                var l = yt[t];
                yt[t++] = null;
                var a = yt[t];
                yt[t++] = null;
                var n = yt[t];
                yt[t++] = null;
                var u = yt[t];
                if (yt[t++] = null, a !== null && n !== null) {
                    var c = a.pending;
                    c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
                }
                u !== 0 && If(l, n, u);
            }
        }
        function uu(e, t, l, a) {
            yt[ra++] = e, yt[ra++] = t, yt[ra++] = l, yt[ra++] = a, Gi |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
        }
        function Xi(e, t, l, a) {
            return uu(e, t, l, a), iu(e);
        }
        function ca(e, t) {
            return uu(e, null, null, t), iu(e);
        }
        function If(e, t, l) {
            e.lanes |= l;
            var a = e.alternate;
            a !== null && (a.lanes |= l);
            for(var n = !1, u = e.return; u !== null;)u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
            return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - nt(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [
                t
            ] : a.push(t), t.lane = l | 536870912), u) : null;
        }
        function iu(e) {
            if (50 < En) throw En = 0, Wr = null, Error(f(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var fa = {};
        function mm(e, t, l, a) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function it(e, t, l, a) {
            return new mm(e, t, l, a);
        }
        function Vi(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Qt(e, t) {
            var l = e.alternate;
            return l === null ? (l = it(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
        }
        function eo(e, t) {
            e.flags &= 65011714;
            var l = e.alternate;
            return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function ru(e, t, l, a, n, u) {
            var c = 0;
            if (a = e, typeof e == "function") Vi(e) && (c = 1);
            else if (typeof e == "string") c = v1(e, l, k.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case oe:
                    return e = it(31, l, t, n), e.elementType = oe, e.lanes = u, e;
                case x:
                    return Ul(l.children, n, u, t);
                case L:
                    c = 8, n |= 24;
                    break;
                case P:
                    return e = it(12, l, t, n | 2), e.elementType = P, e.lanes = u, e;
                case X:
                    return e = it(13, l, t, n), e.elementType = X, e.lanes = u, e;
                case te:
                    return e = it(19, l, t, n), e.elementType = te, e.lanes = u, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case w:
                        case K:
                            c = 10;
                            break e;
                        case Q:
                            c = 9;
                            break e;
                        case W:
                            c = 11;
                            break e;
                        case fe:
                            c = 14;
                            break e;
                        case Se:
                            c = 16, a = null;
                            break e;
                    }
                    c = 29, l = Error(f(130, e === null ? "null" : typeof e, "")), a = null;
            }
            return t = it(c, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
        }
        function Ul(e, t, l, a) {
            return e = it(7, e, a, t), e.lanes = l, e;
        }
        function Zi(e, t, l) {
            return e = it(6, e, null, t), e.lanes = l, e;
        }
        function ki(e, t, l) {
            return t = it(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var oa = [], sa = 0, cu = null, fu = 0, vt = [], gt = 0, Cl = null, Lt = 1, Yt = "";
        function ql(e, t) {
            oa[sa++] = fu, oa[sa++] = cu, cu = e, fu = t;
        }
        function to(e, t, l) {
            vt[gt++] = Lt, vt[gt++] = Yt, vt[gt++] = Cl, Cl = e;
            var a = Lt;
            e = Yt;
            var n = 32 - nt(a) - 1;
            a &= ~(1 << n), l += 1;
            var u = 32 - nt(t) + n;
            if (30 < u) {
                var c = n - n % 5;
                u = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, Lt = 1 << 32 - nt(t) + n | l << n | a, Yt = u + e;
            } else Lt = 1 << u | l << n | a, Yt = e;
        }
        function Ji(e) {
            e.return !== null && (ql(e, 1), to(e, 1, 0));
        }
        function $i(e) {
            for(; e === cu;)cu = oa[--sa], oa[sa] = null, fu = oa[--sa], oa[sa] = null;
            for(; e === Cl;)Cl = vt[--gt], vt[gt] = null, Yt = vt[--gt], vt[gt] = null, Lt = vt[--gt], vt[gt] = null;
        }
        var We = null, _e = null, he = !1, Hl = null, xt = !1, Wi = Error(f(519));
        function wl(e) {
            var t = Error(f(418, ""));
            throw Fa(mt(t, e)), Wi;
        }
        function lo(e) {
            var t = e.stateNode, l = e.type, a = e.memoizedProps;
            switch(t[ke] = e, t[Fe] = a, l){
                case "dialog":
                    ce("cancel", t), ce("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ce("load", t);
                    break;
                case "video":
                case "audio":
                    for(l = 0; l < Tn.length; l++)ce(Tn[l], t);
                    break;
                case "source":
                    ce("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    ce("error", t), ce("load", t);
                    break;
                case "details":
                    ce("toggle", t);
                    break;
                case "input":
                    ce("invalid", t), vf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Jn(t);
                    break;
                case "select":
                    ce("invalid", t);
                    break;
                case "textarea":
                    ce("invalid", t), bf(t, a.value, a.defaultValue, a.children), Jn(t);
            }
            l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Sd(t.textContent, l) ? (a.popover != null && (ce("beforetoggle", t), ce("toggle", t)), a.onScroll != null && ce("scroll", t), a.onScrollEnd != null && ce("scrollend", t), a.onClick != null && (t.onclick = Ku), t = !0) : t = !1, t || wl(e);
        }
        function ao(e) {
            for(We = e.return; We;)switch(We.tag){
                case 5:
                case 13:
                    xt = !1;
                    return;
                case 27:
                case 3:
                    xt = !0;
                    return;
                default:
                    We = We.return;
            }
        }
        function $a(e) {
            if (e !== We) return !1;
            if (!he) return ao(e), he = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || hc(e.type, e.memoizedProps)), l = !l), l && _e && wl(e), ao(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (l = e.data, l === "/$") {
                            if (t === 0) {
                                _e = Nt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else l !== "$" && l !== "$!" && l !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    _e = null;
                }
            } else t === 27 ? (t = _e, Sl(e.type) ? (e = vc, vc = null, _e = e) : _e = t) : _e = We ? Nt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function Wa() {
            _e = We = null, he = !1;
        }
        function no() {
            var e = Hl;
            return e !== null && (lt === null ? lt = e : lt.push.apply(lt, e), Hl = null), e;
        }
        function Fa(e) {
            Hl === null ? Hl = [
                e
            ] : Hl.push(e);
        }
        var Fi = U(null), Pl = null, jt = null;
        function ul(e, t, l) {
            G(Fi, t._currentValue), t._currentValue = l;
        }
        function Kt(e) {
            e._currentValue = Fi.current, j(Fi);
        }
        function Ii(e, t, l) {
            for(; e !== null;){
                var a = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
                e = e.return;
            }
        }
        function er(e, t, l, a) {
            var n = e.child;
            for(n !== null && (n.return = e); n !== null;){
                var u = n.dependencies;
                if (u !== null) {
                    var c = n.child;
                    u = u.firstContext;
                    e: for(; u !== null;){
                        var d = u;
                        u = n;
                        for(var y = 0; y < t.length; y++)if (d.context === t[y]) {
                            u.lanes |= l, d = u.alternate, d !== null && (d.lanes |= l), Ii(u.return, l, e), a || (c = null);
                            break e;
                        }
                        u = d.next;
                    }
                } else if (n.tag === 18) {
                    if (c = n.return, c === null) throw Error(f(341));
                    c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Ii(c, l, e), c = null;
                } else c = n.child;
                if (c !== null) c.return = n;
                else for(c = n; c !== null;){
                    if (c === e) {
                        c = null;
                        break;
                    }
                    if (n = c.sibling, n !== null) {
                        n.return = c.return, c = n;
                        break;
                    }
                    c = c.return;
                }
                n = c;
            }
        }
        function Ia(e, t, l, a) {
            e = null;
            for(var n = t, u = !1; n !== null;){
                if (!u) {
                    if ((n.flags & 524288) !== 0) u = !0;
                    else if ((n.flags & 262144) !== 0) break;
                }
                if (n.tag === 10) {
                    var c = n.alternate;
                    if (c === null) throw Error(f(387));
                    if (c = c.memoizedProps, c !== null) {
                        var d = n.type;
                        ut(n.pendingProps.value, c.value) || (e !== null ? e.push(d) : e = [
                            d
                        ]);
                    }
                } else if (n === je.current) {
                    if (c = n.alternate, c === null) throw Error(f(387));
                    c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Dn) : e = [
                        Dn
                    ]);
                }
                n = n.return;
            }
            e !== null && er(t, e, l, a), t.flags |= 262144;
        }
        function ou(e) {
            for(e = e.firstContext; e !== null;){
                if (!ut(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function Ql(e) {
            Pl = e, jt = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function Je(e) {
            return uo(Pl, e);
        }
        function su(e, t) {
            return Pl === null && Ql(e), uo(e, t);
        }
        function uo(e, t) {
            var l = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, jt === null) {
                if (e === null) throw Error(f(308));
                jt = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else jt = jt.next = t;
            return l;
        }
        var ym = typeof AbortController < "u" ? AbortController : function() {
            var e = [], t = this.signal = {
                aborted: !1,
                addEventListener: function(l, a) {
                    e.push(a);
                }
            };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(l) {
                    return l();
                });
            };
        }, vm = i.unstable_scheduleCallback, gm = i.unstable_NormalPriority, Ue = {
            $$typeof: K,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function tr() {
            return {
                controller: new ym,
                data: new Map,
                refCount: 0
            };
        }
        function en(e) {
            e.refCount--, e.refCount === 0 && vm(gm, function() {
                e.controller.abort();
            });
        }
        var tn = null, lr = 0, da = 0, ha = null;
        function bm(e, t) {
            if (tn === null) {
                var l = tn = [];
                lr = 0, da = nc(), ha = {
                    status: "pending",
                    value: void 0,
                    then: function(a) {
                        l.push(a);
                    }
                };
            }
            return lr++, t.then(io, io), t;
        }
        function io() {
            if (--lr === 0 && tn !== null) {
                ha !== null && (ha.status = "fulfilled");
                var e = tn;
                tn = null, da = 0, ha = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function Sm(e, t) {
            var l = [], a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(n) {
                    l.push(n);
                }
            };
            return e.then(function() {
                a.status = "fulfilled", a.value = t;
                for(var n = 0; n < l.length; n++)(0, l[n])(t);
            }, function(n) {
                for(a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)(0, l[n])(void 0);
            }), a;
        }
        var ro = z.S;
        z.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && bm(e, t), ro !== null && ro(e, t);
        };
        var Ll = U(null);
        function ar() {
            var e = Ll.current;
            return e !== null ? e : Re.pooledCache;
        }
        function du(e, t) {
            t === null ? G(Ll, Ll.current) : G(Ll, t.pool);
        }
        function co() {
            var e = ar();
            return e === null ? null : {
                parent: Ue._currentValue,
                pool: e
            };
        }
        var ln = Error(f(460)), fo = Error(f(474)), hu = Error(f(542)), nr = {
            then: function() {}
        };
        function oo(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function pu() {}
        function so(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(pu, pu), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, po(e), e;
                default:
                    if (typeof t.status == "string") t.then(pu, pu);
                    else {
                        if (e = Re, e !== null && 100 < e.shellSuspendCounter) throw Error(f(482));
                        e = t, e.status = "pending", e.then(function(a) {
                            if (t.status === "pending") {
                                var n = t;
                                n.status = "fulfilled", n.value = a;
                            }
                        }, function(a) {
                            if (t.status === "pending") {
                                var n = t;
                                n.status = "rejected", n.reason = a;
                            }
                        });
                    }
                    switch(t.status){
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw e = t.reason, po(e), e;
                    }
                    throw an = t, ln;
            }
        }
        var an = null;
        function ho() {
            if (an === null) throw Error(f(459));
            var e = an;
            return an = null, e;
        }
        function po(e) {
            if (e === ln || e === hu) throw Error(f(483));
        }
        var il = !1;
        function ur(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            };
        }
        function ir(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            });
        }
        function rl(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function cl(e, t, l) {
            var a = e.updateQueue;
            if (a === null) return null;
            if (a = a.shared, (pe & 2) !== 0) {
                var n = a.pending;
                return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = iu(e), If(e, null, l), t;
            }
            return uu(e, a, t, l), iu(e);
        }
        function nn(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var a = t.lanes;
                a &= e.pendingLanes, l |= a, t.lanes = l, uf(e, l);
            }
        }
        function rr(e, t) {
            var l = e.updateQueue, a = e.alternate;
            if (a !== null && (a = a.updateQueue, l === a)) {
                var n = null, u = null;
                if (l = l.firstBaseUpdate, l !== null) {
                    do {
                        var c = {
                            lane: l.lane,
                            tag: l.tag,
                            payload: l.payload,
                            callback: null,
                            next: null
                        };
                        u === null ? n = u = c : u = u.next = c, l = l.next;
                    }while (l !== null);
                    u === null ? n = u = t : u = u.next = t;
                } else n = u = t;
                l = {
                    baseState: a.baseState,
                    firstBaseUpdate: n,
                    lastBaseUpdate: u,
                    shared: a.shared,
                    callbacks: a.callbacks
                }, e.updateQueue = l;
                return;
            }
            e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
        }
        var cr = !1;
        function un() {
            if (cr) {
                var e = ha;
                if (e !== null) throw e;
            }
        }
        function rn(e, t, l, a) {
            cr = !1;
            var n = e.updateQueue;
            il = !1;
            var u = n.firstBaseUpdate, c = n.lastBaseUpdate, d = n.shared.pending;
            if (d !== null) {
                n.shared.pending = null;
                var y = d, A = y.next;
                y.next = null, c === null ? u = A : c.next = A, c = y;
                var B = e.alternate;
                B !== null && (B = B.updateQueue, d = B.lastBaseUpdate, d !== c && (d === null ? B.firstBaseUpdate = A : d.next = A, B.lastBaseUpdate = y));
            }
            if (u !== null) {
                var q = n.baseState;
                c = 0, B = A = y = null, d = u;
                do {
                    var M = d.lane & -536870913, D = M !== d.lane;
                    if (D ? (se & M) === M : (a & M) === M) {
                        M !== 0 && M === da && (cr = !0), B !== null && (B = B.next = {
                            lane: 0,
                            tag: d.tag,
                            payload: d.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var le = e, I = d;
                            M = t;
                            var be = l;
                            switch(I.tag){
                                case 1:
                                    if (le = I.payload, typeof le == "function") {
                                        q = le.call(be, q, M);
                                        break e;
                                    }
                                    q = le;
                                    break e;
                                case 3:
                                    le.flags = le.flags & -65537 | 128;
                                case 0:
                                    if (le = I.payload, M = typeof le == "function" ? le.call(be, q, M) : le, M == null) break e;
                                    q = E({}, q, M);
                                    break e;
                                case 2:
                                    il = !0;
                            }
                        }
                        M = d.callback, M !== null && (e.flags |= 64, D && (e.flags |= 8192), D = n.callbacks, D === null ? n.callbacks = [
                            M
                        ] : D.push(M));
                    } else D = {
                        lane: M,
                        tag: d.tag,
                        payload: d.payload,
                        callback: d.callback,
                        next: null
                    }, B === null ? (A = B = D, y = q) : B = B.next = D, c |= M;
                    if (d = d.next, d === null) {
                        if (d = n.shared.pending, d === null) break;
                        D = d, d = D.next, D.next = null, n.lastBaseUpdate = D, n.shared.pending = null;
                    }
                }while (!0);
                B === null && (y = q), n.baseState = y, n.firstBaseUpdate = A, n.lastBaseUpdate = B, u === null && (n.shared.lanes = 0), yl |= c, e.lanes = c, e.memoizedState = q;
            }
        }
        function mo(e, t) {
            if (typeof e != "function") throw Error(f(191, e));
            e.call(t);
        }
        function yo(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)mo(l[e], t);
        }
        var pa = U(null), mu = U(0);
        function vo(e, t) {
            e = $t, G(mu, e), G(pa, t), $t = e | t.baseLanes;
        }
        function fr() {
            G(mu, $t), G(pa, pa.current);
        }
        function or() {
            $t = mu.current, j(pa), j(mu);
        }
        var fl = 0, ne = null, ve = null, xe = null, yu = !1, ma = !1, Yl = !1, vu = 0, cn = 0, ya = null, Em = 0;
        function Me() {
            throw Error(f(321));
        }
        function sr(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!ut(e[l], t[l])) return !1;
            return !0;
        }
        function dr(e, t, l, a, n, u) {
            return fl = u, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? es : ts, Yl = !1, u = l(a, n), Yl = !1, ma && (u = bo(t, l, a, n)), go(e), u;
        }
        function go(e) {
            z.H = Tu;
            var t = ve !== null && ve.next !== null;
            if (fl = 0, xe = ve = ne = null, yu = !1, cn = 0, ya = null, t) throw Error(f(300));
            e === null || Qe || (e = e.dependencies, e !== null && ou(e) && (Qe = !0));
        }
        function bo(e, t, l, a) {
            ne = e;
            var n = 0;
            do {
                if (ma && (ya = null), cn = 0, ma = !1, 25 <= n) throw Error(f(301));
                if (n += 1, xe = ve = null, e.updateQueue != null) {
                    var u = e.updateQueue;
                    u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
                }
                z.H = Mm, u = t(l, a);
            }while (ma);
            return u;
        }
        function Rm() {
            var e = z.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? fn(t) : t, e = e.useState()[0], (ve !== null ? ve.memoizedState : null) !== e && (ne.flags |= 1024), t;
        }
        function hr() {
            var e = vu !== 0;
            return vu = 0, e;
        }
        function pr(e, t, l) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
        }
        function mr(e) {
            if (yu) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                yu = !1;
            }
            fl = 0, xe = ve = ne = null, ma = !1, cn = vu = 0, ya = null;
        }
        function et() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return xe === null ? ne.memoizedState = xe = e : xe = xe.next = e, xe;
        }
        function ze() {
            if (ve === null) {
                var e = ne.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = ve.next;
            var t = xe === null ? ne.memoizedState : xe.next;
            if (t !== null) xe = t, ve = e;
            else {
                if (e === null) throw ne.alternate === null ? Error(f(467)) : Error(f(310));
                ve = e, e = {
                    memoizedState: ve.memoizedState,
                    baseState: ve.baseState,
                    baseQueue: ve.baseQueue,
                    queue: ve.queue,
                    next: null
                }, xe === null ? ne.memoizedState = xe = e : xe = xe.next = e;
            }
            return xe;
        }
        function yr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function fn(e) {
            var t = cn;
            return cn += 1, ya === null && (ya = []), e = so(ya, e, t), t = ne, (xe === null ? t.memoizedState : xe.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? es : ts), e;
        }
        function gu(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return fn(e);
                if (e.$$typeof === K) return Je(e);
            }
            throw Error(f(438, String(e)));
        }
        function vr(e) {
            var t = null, l = ne.updateQueue;
            if (l !== null && (t = l.memoCache), t == null) {
                var a = ne.alternate;
                a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
                    data: a.data.map(function(n) {
                        return n.slice();
                    }),
                    index: 0
                })));
            }
            if (t == null && (t = {
                data: [],
                index: 0
            }), l === null && (l = yr(), ne.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), a = 0; a < e; a++)l[a] = qe;
            return t.index++, l;
        }
        function Gt(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function bu(e) {
            var t = ze();
            return gr(t, ve, e);
        }
        function gr(e, t, l) {
            var a = e.queue;
            if (a === null) throw Error(f(311));
            a.lastRenderedReducer = l;
            var n = e.baseQueue, u = a.pending;
            if (u !== null) {
                if (n !== null) {
                    var c = n.next;
                    n.next = u.next, u.next = c;
                }
                t.baseQueue = n = u, a.pending = null;
            }
            if (u = e.baseState, n === null) e.memoizedState = u;
            else {
                t = n.next;
                var d = c = null, y = null, A = t, B = !1;
                do {
                    var q = A.lane & -536870913;
                    if (q !== A.lane ? (se & q) === q : (fl & q) === q) {
                        var M = A.revertLane;
                        if (M === 0) y !== null && (y = y.next = {
                            lane: 0,
                            revertLane: 0,
                            action: A.action,
                            hasEagerState: A.hasEagerState,
                            eagerState: A.eagerState,
                            next: null
                        }), q === da && (B = !0);
                        else if ((fl & M) === M) {
                            A = A.next, M === da && (B = !0);
                            continue;
                        } else q = {
                            lane: 0,
                            revertLane: A.revertLane,
                            action: A.action,
                            hasEagerState: A.hasEagerState,
                            eagerState: A.eagerState,
                            next: null
                        }, y === null ? (d = y = q, c = u) : y = y.next = q, ne.lanes |= M, yl |= M;
                        q = A.action, Yl && l(u, q), u = A.hasEagerState ? A.eagerState : l(u, q);
                    } else M = {
                        lane: q,
                        revertLane: A.revertLane,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    }, y === null ? (d = y = M, c = u) : y = y.next = M, ne.lanes |= q, yl |= q;
                    A = A.next;
                }while (A !== null && A !== t);
                if (y === null ? c = u : y.next = d, !ut(u, e.memoizedState) && (Qe = !0, B && (l = ha, l !== null))) throw l;
                e.memoizedState = u, e.baseState = c, e.baseQueue = y, a.lastRenderedState = u;
            }
            return n === null && (a.lanes = 0), [
                e.memoizedState,
                a.dispatch
            ];
        }
        function br(e) {
            var t = ze(), l = t.queue;
            if (l === null) throw Error(f(311));
            l.lastRenderedReducer = e;
            var a = l.dispatch, n = l.pending, u = t.memoizedState;
            if (n !== null) {
                l.pending = null;
                var c = n = n.next;
                do u = e(u, c.action), c = c.next;
                while (c !== n);
                ut(u, t.memoizedState) || (Qe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
            }
            return [
                u,
                a
            ];
        }
        function So(e, t, l) {
            var a = ne, n = ze(), u = he;
            if (u) {
                if (l === void 0) throw Error(f(407));
                l = l();
            } else l = t();
            var c = !ut((ve || n).memoizedState, l);
            c && (n.memoizedState = l, Qe = !0), n = n.queue;
            var d = To.bind(null, a, n, e);
            if (on(2048, 8, d, [
                e
            ]), n.getSnapshot !== t || c || xe !== null && xe.memoizedState.tag & 1) {
                if (a.flags |= 2048, va(9, Su(), Ro.bind(null, a, n, l, t), null), Re === null) throw Error(f(349));
                u || (fl & 124) !== 0 || Eo(a, t, l);
            }
            return l;
        }
        function Eo(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = ne.updateQueue, t === null ? (t = yr(), ne.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function Ro(e, t, l, a) {
            t.value = l, t.getSnapshot = a, Oo(t) && Ao(e);
        }
        function To(e, t, l) {
            return l(function() {
                Oo(t) && Ao(e);
            });
        }
        function Oo(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !ut(e, l);
            } catch  {
                return !0;
            }
        }
        function Ao(e) {
            var t = ca(e, 2);
            t !== null && st(t, e, 2);
        }
        function Sr(e) {
            var t = et();
            if (typeof e == "function") {
                var l = e;
                if (e = l(), Yl) {
                    ll(!0);
                    try {
                        l();
                    } finally{
                        ll(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Gt,
                lastRenderedState: e
            }, t;
        }
        function _o(e, t, l, a) {
            return e.baseState = l, gr(e, ve, typeof a == "function" ? a : Gt);
        }
        function Tm(e, t, l, a, n) {
            if (Ru(e)) throw Error(f(485));
            if (e = t.action, e !== null) {
                var u = {
                    payload: n,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(c) {
                        u.listeners.push(c);
                    }
                };
                z.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, No(t, u)) : (u.next = l.next, t.pending = l.next = u);
            }
        }
        function No(e, t) {
            var l = t.action, a = t.payload, n = e.state;
            if (t.isTransition) {
                var u = z.T, c = {};
                z.T = c;
                try {
                    var d = l(n, a), y = z.S;
                    y !== null && y(c, d), Mo(e, t, d);
                } catch (A) {
                    Er(e, t, A);
                } finally{
                    z.T = u;
                }
            } else try {
                u = l(n, a), Mo(e, t, u);
            } catch (A) {
                Er(e, t, A);
            }
        }
        function Mo(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
                Do(e, t, a);
            }, function(a) {
                return Er(e, t, a);
            }) : Do(e, t, l);
        }
        function Do(e, t, l) {
            t.status = "fulfilled", t.value = l, xo(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, No(e, l)));
        }
        function Er(e, t, l) {
            var a = e.pending;
            if (e.pending = null, a !== null) {
                a = a.next;
                do t.status = "rejected", t.reason = l, xo(t), t = t.next;
                while (t !== a);
            }
            e.action = null;
        }
        function xo(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function zo(e, t) {
            return t;
        }
        function Bo(e, t) {
            if (he) {
                var l = Re.formState;
                if (l !== null) {
                    e: {
                        var a = ne;
                        if (he) {
                            if (_e) {
                                t: {
                                    for(var n = _e, u = xt; n.nodeType !== 8;){
                                        if (!u) {
                                            n = null;
                                            break t;
                                        }
                                        if (n = Nt(n.nextSibling), n === null) {
                                            n = null;
                                            break t;
                                        }
                                    }
                                    u = n.data, n = u === "F!" || u === "F" ? n : null;
                                }
                                if (n) {
                                    _e = Nt(n.nextSibling), a = n.data === "F!";
                                    break e;
                                }
                            }
                            wl(a);
                        }
                        a = !1;
                    }
                    a && (t = l[0]);
                }
            }
            return l = et(), l.memoizedState = l.baseState = t, a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: zo,
                lastRenderedState: t
            }, l.queue = a, l = Wo.bind(null, ne, a), a.dispatch = l, a = Sr(!1), u = _r.bind(null, ne, !1, a.queue), a = et(), n = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, a.queue = n, l = Tm.bind(null, ne, n, u, l), n.dispatch = l, a.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function Uo(e) {
            var t = ze();
            return Co(t, ve, e);
        }
        function Co(e, t, l) {
            if (t = gr(e, t, zo)[0], e = bu(Gt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var a = fn(t);
            } catch (c) {
                throw c === ln ? hu : c;
            }
            else a = t;
            t = ze();
            var n = t.queue, u = n.dispatch;
            return l !== t.memoizedState && (ne.flags |= 2048, va(9, Su(), Om.bind(null, n, l), null)), [
                a,
                u,
                e
            ];
        }
        function Om(e, t) {
            e.action = t;
        }
        function qo(e) {
            var t = ze(), l = ve;
            if (l !== null) return Co(t, l, e);
            ze(), t = t.memoizedState, l = ze();
            var a = l.queue.dispatch;
            return l.memoizedState = e, [
                t,
                a,
                !1
            ];
        }
        function va(e, t, l, a) {
            return e = {
                tag: e,
                create: l,
                deps: a,
                inst: t,
                next: null
            }, t = ne.updateQueue, t === null && (t = yr(), ne.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
        }
        function Su() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function Ho() {
            return ze().memoizedState;
        }
        function Eu(e, t, l, a) {
            var n = et();
            a = a === void 0 ? null : a, ne.flags |= e, n.memoizedState = va(1 | t, Su(), l, a);
        }
        function on(e, t, l, a) {
            var n = ze();
            a = a === void 0 ? null : a;
            var u = n.memoizedState.inst;
            ve !== null && a !== null && sr(a, ve.memoizedState.deps) ? n.memoizedState = va(t, u, l, a) : (ne.flags |= e, n.memoizedState = va(1 | t, u, l, a));
        }
        function wo(e, t) {
            Eu(8390656, 8, e, t);
        }
        function Po(e, t) {
            on(2048, 8, e, t);
        }
        function Qo(e, t) {
            return on(4, 2, e, t);
        }
        function Lo(e, t) {
            return on(4, 4, e, t);
        }
        function Yo(e, t) {
            if (typeof t == "function") {
                e = e();
                var l = t(e);
                return function() {
                    typeof l == "function" ? l() : t(null);
                };
            }
            if (t != null) return e = e(), t.current = e, function() {
                t.current = null;
            };
        }
        function jo(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, on(4, 4, Yo.bind(null, t, e), l);
        }
        function Rr() {}
        function Ko(e, t) {
            var l = ze();
            t = t === void 0 ? null : t;
            var a = l.memoizedState;
            return t !== null && sr(t, a[1]) ? a[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function Go(e, t) {
            var l = ze();
            t = t === void 0 ? null : t;
            var a = l.memoizedState;
            if (t !== null && sr(t, a[1])) return a[0];
            if (a = e(), Yl) {
                ll(!0);
                try {
                    e();
                } finally{
                    ll(!1);
                }
            }
            return l.memoizedState = [
                a,
                t
            ], a;
        }
        function Tr(e, t, l) {
            return l === void 0 || (fl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Zs(), ne.lanes |= e, yl |= e, l);
        }
        function Xo(e, t, l, a) {
            return ut(l, t) ? l : pa.current !== null ? (e = Tr(e, l, a), ut(e, t) || (Qe = !0), e) : (fl & 42) === 0 ? (Qe = !0, e.memoizedState = l) : (e = Zs(), ne.lanes |= e, yl |= e, t);
        }
        function Vo(e, t, l, a, n) {
            var u = V.p;
            V.p = u !== 0 && 8 > u ? u : 8;
            var c = z.T, d = {};
            z.T = d, _r(e, !1, t, l);
            try {
                var y = n(), A = z.S;
                if (A !== null && A(d, y), y !== null && typeof y == "object" && typeof y.then == "function") {
                    var B = Sm(y, a);
                    sn(e, t, B, ot(e));
                } else sn(e, t, a, ot(e));
            } catch (q) {
                sn(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: q
                }, ot());
            } finally{
                V.p = u, z.T = c;
            }
        }
        function Am() {}
        function Or(e, t, l, a) {
            if (e.tag !== 5) throw Error(f(476));
            var n = Zo(e).queue;
            Vo(e, n, t, Y, l === null ? Am : function() {
                return ko(e), l(a);
            });
        }
        function Zo(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: Y,
                baseState: Y,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Gt,
                    lastRenderedState: Y
                },
                next: null
            };
            var l = {};
            return t.next = {
                memoizedState: l,
                baseState: l,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Gt,
                    lastRenderedState: l
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function ko(e) {
            var t = Zo(e).next.queue;
            sn(e, t, {}, ot());
        }
        function Ar() {
            return Je(Dn);
        }
        function Jo() {
            return ze().memoizedState;
        }
        function $o() {
            return ze().memoizedState;
        }
        function _m(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = ot();
                        e = rl(l);
                        var a = cl(t, e, l);
                        a !== null && (st(a, t, l), nn(a, t, l)), t = {
                            cache: tr()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function Nm(e, t, l) {
            var a = ot();
            l = {
                lane: a,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ru(e) ? Fo(t, l) : (l = Xi(e, t, l, a), l !== null && (st(l, e, a), Io(l, t, a)));
        }
        function Wo(e, t, l) {
            var a = ot();
            sn(e, t, l, a);
        }
        function sn(e, t, l, a) {
            var n = {
                lane: a,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Ru(e)) Fo(t, n);
            else {
                var u = e.alternate;
                if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
                    var c = t.lastRenderedState, d = u(c, l);
                    if (n.hasEagerState = !0, n.eagerState = d, ut(d, c)) return uu(e, t, n, 0), Re === null && nu(), !1;
                } catch  {} finally{}
                if (l = Xi(e, t, n, a), l !== null) return st(l, e, a), Io(l, t, a), !0;
            }
            return !1;
        }
        function _r(e, t, l, a) {
            if (a = {
                lane: 2,
                revertLane: nc(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ru(e)) {
                if (t) throw Error(f(479));
            } else t = Xi(e, l, a, 2), t !== null && st(t, e, 2);
        }
        function Ru(e) {
            var t = e.alternate;
            return e === ne || t !== null && t === ne;
        }
        function Fo(e, t) {
            ma = yu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function Io(e, t, l) {
            if ((l & 4194048) !== 0) {
                var a = t.lanes;
                a &= e.pendingLanes, l |= a, t.lanes = l, uf(e, l);
            }
        }
        var Tu = {
            readContext: Je,
            use: gu,
            useCallback: Me,
            useContext: Me,
            useEffect: Me,
            useImperativeHandle: Me,
            useLayoutEffect: Me,
            useInsertionEffect: Me,
            useMemo: Me,
            useReducer: Me,
            useRef: Me,
            useState: Me,
            useDebugValue: Me,
            useDeferredValue: Me,
            useTransition: Me,
            useSyncExternalStore: Me,
            useId: Me,
            useHostTransitionStatus: Me,
            useFormState: Me,
            useActionState: Me,
            useOptimistic: Me,
            useMemoCache: Me,
            useCacheRefresh: Me
        }, es = {
            readContext: Je,
            use: gu,
            useCallback: function(e, t) {
                return et().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: Je,
            useEffect: wo,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, Eu(4194308, 4, Yo.bind(null, t, e), l);
            },
            useLayoutEffect: function(e, t) {
                return Eu(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                Eu(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var l = et();
                t = t === void 0 ? null : t;
                var a = e();
                if (Yl) {
                    ll(!0);
                    try {
                        e();
                    } finally{
                        ll(!1);
                    }
                }
                return l.memoizedState = [
                    a,
                    t
                ], a;
            },
            useReducer: function(e, t, l) {
                var a = et();
                if (l !== void 0) {
                    var n = l(t);
                    if (Yl) {
                        ll(!0);
                        try {
                            l(t);
                        } finally{
                            ll(!1);
                        }
                    }
                } else n = t;
                return a.memoizedState = a.baseState = n, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: n
                }, a.queue = e, e = e.dispatch = Nm.bind(null, ne, e), [
                    a.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                var t = et();
                return e = {
                    current: e
                }, t.memoizedState = e;
            },
            useState: function(e) {
                e = Sr(e);
                var t = e.queue, l = Wo.bind(null, ne, t);
                return t.dispatch = l, [
                    e.memoizedState,
                    l
                ];
            },
            useDebugValue: Rr,
            useDeferredValue: function(e, t) {
                var l = et();
                return Tr(l, e, t);
            },
            useTransition: function() {
                var e = Sr(!1);
                return e = Vo.bind(null, ne, e.queue, !0, !1), et().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, l) {
                var a = ne, n = et();
                if (he) {
                    if (l === void 0) throw Error(f(407));
                    l = l();
                } else {
                    if (l = t(), Re === null) throw Error(f(349));
                    (se & 124) !== 0 || Eo(a, t, l);
                }
                n.memoizedState = l;
                var u = {
                    value: l,
                    getSnapshot: t
                };
                return n.queue = u, wo(To.bind(null, a, u, e), [
                    e
                ]), a.flags |= 2048, va(9, Su(), Ro.bind(null, a, u, l, t), null), l;
            },
            useId: function() {
                var e = et(), t = Re.identifierPrefix;
                if (he) {
                    var l = Yt, a = Lt;
                    l = (a & ~(1 << 32 - nt(a) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = vu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = Em++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Ar,
            useFormState: Bo,
            useActionState: Bo,
            useOptimistic: function(e) {
                var t = et();
                t.memoizedState = t.baseState = e;
                var l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = l, t = _r.bind(null, ne, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: vr,
            useCacheRefresh: function() {
                return et().memoizedState = _m.bind(null, ne);
            }
        }, ts = {
            readContext: Je,
            use: gu,
            useCallback: Ko,
            useContext: Je,
            useEffect: Po,
            useImperativeHandle: jo,
            useInsertionEffect: Qo,
            useLayoutEffect: Lo,
            useMemo: Go,
            useReducer: bu,
            useRef: Ho,
            useState: function() {
                return bu(Gt);
            },
            useDebugValue: Rr,
            useDeferredValue: function(e, t) {
                var l = ze();
                return Xo(l, ve.memoizedState, e, t);
            },
            useTransition: function() {
                var e = bu(Gt)[0], t = ze().memoizedState;
                return [
                    typeof e == "boolean" ? e : fn(e),
                    t
                ];
            },
            useSyncExternalStore: So,
            useId: Jo,
            useHostTransitionStatus: Ar,
            useFormState: Uo,
            useActionState: Uo,
            useOptimistic: function(e, t) {
                var l = ze();
                return _o(l, ve, e, t);
            },
            useMemoCache: vr,
            useCacheRefresh: $o
        }, Mm = {
            readContext: Je,
            use: gu,
            useCallback: Ko,
            useContext: Je,
            useEffect: Po,
            useImperativeHandle: jo,
            useInsertionEffect: Qo,
            useLayoutEffect: Lo,
            useMemo: Go,
            useReducer: br,
            useRef: Ho,
            useState: function() {
                return br(Gt);
            },
            useDebugValue: Rr,
            useDeferredValue: function(e, t) {
                var l = ze();
                return ve === null ? Tr(l, e, t) : Xo(l, ve.memoizedState, e, t);
            },
            useTransition: function() {
                var e = br(Gt)[0], t = ze().memoizedState;
                return [
                    typeof e == "boolean" ? e : fn(e),
                    t
                ];
            },
            useSyncExternalStore: So,
            useId: Jo,
            useHostTransitionStatus: Ar,
            useFormState: qo,
            useActionState: qo,
            useOptimistic: function(e, t) {
                var l = ze();
                return ve !== null ? _o(l, ve, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: vr,
            useCacheRefresh: $o
        }, ga = null, dn = 0;
        function Ou(e) {
            var t = dn;
            return dn += 1, ga === null && (ga = []), so(ga, e, t);
        }
        function hn(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Au(e, t) {
            throw t.$$typeof === _ ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function ls(e) {
            var t = e._init;
            return t(e._payload);
        }
        function as(e) {
            function t(R, b) {
                if (e) {
                    var O = R.deletions;
                    O === null ? (R.deletions = [
                        b
                    ], R.flags |= 16) : O.push(b);
                }
            }
            function l(R, b) {
                if (!e) return null;
                for(; b !== null;)t(R, b), b = b.sibling;
                return null;
            }
            function a(R) {
                for(var b = new Map; R !== null;)R.key !== null ? b.set(R.key, R) : b.set(R.index, R), R = R.sibling;
                return b;
            }
            function n(R, b) {
                return R = Qt(R, b), R.index = 0, R.sibling = null, R;
            }
            function u(R, b, O) {
                return R.index = O, e ? (O = R.alternate, O !== null ? (O = O.index, O < b ? (R.flags |= 67108866, b) : O) : (R.flags |= 67108866, b)) : (R.flags |= 1048576, b);
            }
            function c(R) {
                return e && R.alternate === null && (R.flags |= 67108866), R;
            }
            function d(R, b, O, C) {
                return b === null || b.tag !== 6 ? (b = Zi(O, R.mode, C), b.return = R, b) : (b = n(b, O), b.return = R, b);
            }
            function y(R, b, O, C) {
                var Z = O.type;
                return Z === x ? B(R, b, O.props.children, C, O.key) : b !== null && (b.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Se && ls(Z) === b.type) ? (b = n(b, O.props), hn(b, O), b.return = R, b) : (b = ru(O.type, O.key, O.props, null, R.mode, C), hn(b, O), b.return = R, b);
            }
            function A(R, b, O, C) {
                return b === null || b.tag !== 4 || b.stateNode.containerInfo !== O.containerInfo || b.stateNode.implementation !== O.implementation ? (b = ki(O, R.mode, C), b.return = R, b) : (b = n(b, O.children || []), b.return = R, b);
            }
            function B(R, b, O, C, Z) {
                return b === null || b.tag !== 7 ? (b = Ul(O, R.mode, C, Z), b.return = R, b) : (b = n(b, O), b.return = R, b);
            }
            function q(R, b, O) {
                if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return b = Zi("" + b, R.mode, O), b.return = R, b;
                if (typeof b == "object" && b !== null) {
                    switch(b.$$typeof){
                        case N:
                            return O = ru(b.type, b.key, b.props, null, R.mode, O), hn(O, b), O.return = R, O;
                        case H:
                            return b = ki(b, R.mode, O), b.return = R, b;
                        case Se:
                            var C = b._init;
                            return b = C(b._payload), q(R, b, O);
                    }
                    if (we(b) || He(b)) return b = Ul(b, R.mode, O, null), b.return = R, b;
                    if (typeof b.then == "function") return q(R, Ou(b), O);
                    if (b.$$typeof === K) return q(R, su(R, b), O);
                    Au(R, b);
                }
                return null;
            }
            function M(R, b, O, C) {
                var Z = b !== null ? b.key : null;
                if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return Z !== null ? null : d(R, b, "" + O, C);
                if (typeof O == "object" && O !== null) {
                    switch(O.$$typeof){
                        case N:
                            return O.key === Z ? y(R, b, O, C) : null;
                        case H:
                            return O.key === Z ? A(R, b, O, C) : null;
                        case Se:
                            return Z = O._init, O = Z(O._payload), M(R, b, O, C);
                    }
                    if (we(O) || He(O)) return Z !== null ? null : B(R, b, O, C, null);
                    if (typeof O.then == "function") return M(R, b, Ou(O), C);
                    if (O.$$typeof === K) return M(R, b, su(R, O), C);
                    Au(R, O);
                }
                return null;
            }
            function D(R, b, O, C, Z) {
                if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return R = R.get(O) || null, d(b, R, "" + C, Z);
                if (typeof C == "object" && C !== null) {
                    switch(C.$$typeof){
                        case N:
                            return R = R.get(C.key === null ? O : C.key) || null, y(b, R, C, Z);
                        case H:
                            return R = R.get(C.key === null ? O : C.key) || null, A(b, R, C, Z);
                        case Se:
                            var ie = C._init;
                            return C = ie(C._payload), D(R, b, O, C, Z);
                    }
                    if (we(C) || He(C)) return R = R.get(O) || null, B(b, R, C, Z, null);
                    if (typeof C.then == "function") return D(R, b, O, Ou(C), Z);
                    if (C.$$typeof === K) return D(R, b, O, su(b, C), Z);
                    Au(b, C);
                }
                return null;
            }
            function le(R, b, O, C) {
                for(var Z = null, ie = null, $ = b, ee = b = 0, Ye = null; $ !== null && ee < O.length; ee++){
                    $.index > ee ? (Ye = $, $ = null) : Ye = $.sibling;
                    var de = M(R, $, O[ee], C);
                    if (de === null) {
                        $ === null && ($ = Ye);
                        break;
                    }
                    e && $ && de.alternate === null && t(R, $), b = u(de, b, ee), ie === null ? Z = de : ie.sibling = de, ie = de, $ = Ye;
                }
                if (ee === O.length) return l(R, $), he && ql(R, ee), Z;
                if ($ === null) {
                    for(; ee < O.length; ee++)$ = q(R, O[ee], C), $ !== null && (b = u($, b, ee), ie === null ? Z = $ : ie.sibling = $, ie = $);
                    return he && ql(R, ee), Z;
                }
                for($ = a($); ee < O.length; ee++)Ye = D($, R, ee, O[ee], C), Ye !== null && (e && Ye.alternate !== null && $.delete(Ye.key === null ? ee : Ye.key), b = u(Ye, b, ee), ie === null ? Z = Ye : ie.sibling = Ye, ie = Ye);
                return e && $.forEach(function(Al) {
                    return t(R, Al);
                }), he && ql(R, ee), Z;
            }
            function I(R, b, O, C) {
                if (O == null) throw Error(f(151));
                for(var Z = null, ie = null, $ = b, ee = b = 0, Ye = null, de = O.next(); $ !== null && !de.done; ee++, de = O.next()){
                    $.index > ee ? (Ye = $, $ = null) : Ye = $.sibling;
                    var Al = M(R, $, de.value, C);
                    if (Al === null) {
                        $ === null && ($ = Ye);
                        break;
                    }
                    e && $ && Al.alternate === null && t(R, $), b = u(Al, b, ee), ie === null ? Z = Al : ie.sibling = Al, ie = Al, $ = Ye;
                }
                if (de.done) return l(R, $), he && ql(R, ee), Z;
                if ($ === null) {
                    for(; !de.done; ee++, de = O.next())de = q(R, de.value, C), de !== null && (b = u(de, b, ee), ie === null ? Z = de : ie.sibling = de, ie = de);
                    return he && ql(R, ee), Z;
                }
                for($ = a($); !de.done; ee++, de = O.next())de = D($, R, ee, de.value, C), de !== null && (e && de.alternate !== null && $.delete(de.key === null ? ee : de.key), b = u(de, b, ee), ie === null ? Z = de : ie.sibling = de, ie = de);
                return e && $.forEach(function(D1) {
                    return t(R, D1);
                }), he && ql(R, ee), Z;
            }
            function be(R, b, O, C) {
                if (typeof O == "object" && O !== null && O.type === x && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
                    switch(O.$$typeof){
                        case N:
                            e: {
                                for(var Z = O.key; b !== null;){
                                    if (b.key === Z) {
                                        if (Z = O.type, Z === x) {
                                            if (b.tag === 7) {
                                                l(R, b.sibling), C = n(b, O.props.children), C.return = R, R = C;
                                                break e;
                                            }
                                        } else if (b.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Se && ls(Z) === b.type) {
                                            l(R, b.sibling), C = n(b, O.props), hn(C, O), C.return = R, R = C;
                                            break e;
                                        }
                                        l(R, b);
                                        break;
                                    } else t(R, b);
                                    b = b.sibling;
                                }
                                O.type === x ? (C = Ul(O.props.children, R.mode, C, O.key), C.return = R, R = C) : (C = ru(O.type, O.key, O.props, null, R.mode, C), hn(C, O), C.return = R, R = C);
                            }
                            return c(R);
                        case H:
                            e: {
                                for(Z = O.key; b !== null;){
                                    if (b.key === Z) if (b.tag === 4 && b.stateNode.containerInfo === O.containerInfo && b.stateNode.implementation === O.implementation) {
                                        l(R, b.sibling), C = n(b, O.children || []), C.return = R, R = C;
                                        break e;
                                    } else {
                                        l(R, b);
                                        break;
                                    }
                                    else t(R, b);
                                    b = b.sibling;
                                }
                                C = ki(O, R.mode, C), C.return = R, R = C;
                            }
                            return c(R);
                        case Se:
                            return Z = O._init, O = Z(O._payload), be(R, b, O, C);
                    }
                    if (we(O)) return le(R, b, O, C);
                    if (He(O)) {
                        if (Z = He(O), typeof Z != "function") throw Error(f(150));
                        return O = Z.call(O), I(R, b, O, C);
                    }
                    if (typeof O.then == "function") return be(R, b, Ou(O), C);
                    if (O.$$typeof === K) return be(R, b, su(R, O), C);
                    Au(R, O);
                }
                return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, b !== null && b.tag === 6 ? (l(R, b.sibling), C = n(b, O), C.return = R, R = C) : (l(R, b), C = Zi(O, R.mode, C), C.return = R, R = C), c(R)) : l(R, b);
            }
            return function(R, b, O, C) {
                try {
                    dn = 0;
                    var Z = be(R, b, O, C);
                    return ga = null, Z;
                } catch ($) {
                    if ($ === ln || $ === hu) throw $;
                    var ie = it(29, $, null, R.mode);
                    return ie.lanes = C, ie.return = R, ie;
                } finally{}
            };
        }
        var ba = as(!0), ns = as(!1), bt = U(null), zt = null;
        function ol(e) {
            var t = e.alternate;
            G(Ce, Ce.current & 1), G(bt, e), zt === null && (t === null || pa.current !== null || t.memoizedState !== null) && (zt = e);
        }
        function us(e) {
            if (e.tag === 22) {
                if (G(Ce, Ce.current), G(bt, e), zt === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (zt = e);
                }
            } else sl();
        }
        function sl() {
            G(Ce, Ce.current), G(bt, bt.current);
        }
        function Xt(e) {
            j(bt), zt === e && (zt = null), j(Ce);
        }
        var Ce = U(0);
        function _u(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var l = t.memoizedState;
                    if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || yc(l))) return t;
                } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                    if ((t.flags & 128) !== 0) return t;
                } else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === e) break;
                for(; t.sibling === null;){
                    if (t.return === null || t.return === e) return null;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
            return null;
        }
        function Nr(e, t, l, a) {
            t = e.memoizedState, l = l(a, t), l = l == null ? t : E({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var Mr = {
            enqueueSetState: function(e, t, l) {
                e = e._reactInternals;
                var a = ot(), n = rl(a);
                n.payload = t, l != null && (n.callback = l), t = cl(e, n, a), t !== null && (st(t, e, a), nn(t, e, a));
            },
            enqueueReplaceState: function(e, t, l) {
                e = e._reactInternals;
                var a = ot(), n = rl(a);
                n.tag = 1, n.payload = t, l != null && (n.callback = l), t = cl(e, n, a), t !== null && (st(t, e, a), nn(t, e, a));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var l = ot(), a = rl(l);
                a.tag = 2, t != null && (a.callback = t), t = cl(e, a, l), t !== null && (st(t, e, l), nn(t, e, l));
            }
        };
        function is(e, t, l, a, n, u, c) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, c) : t.prototype && t.prototype.isPureReactComponent ? !ka(l, a) || !ka(n, u) : !0;
        }
        function rs(e, t, l, a) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Mr.enqueueReplaceState(t, t.state, null);
        }
        function jl(e, t) {
            var l = t;
            if ("ref" in t) {
                l = {};
                for(var a in t)a !== "ref" && (l[a] = t[a]);
            }
            if (e = e.defaultProps) {
                l === t && (l = E({}, l));
                for(var n in e)l[n] === void 0 && (l[n] = e[n]);
            }
            return l;
        }
        var Nu = typeof reportError == "function" ? reportError : function(e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", e);
                return;
            }
            console.error(e);
        };
        function cs(e) {
            Nu(e);
        }
        function fs(e) {
            console.error(e);
        }
        function os(e) {
            Nu(e);
        }
        function Mu(e, t) {
            try {
                var l = e.onUncaughtError;
                l(t.value, {
                    componentStack: t.stack
                });
            } catch (a) {
                setTimeout(function() {
                    throw a;
                });
            }
        }
        function ss(e, t, l) {
            try {
                var a = e.onCaughtError;
                a(l.value, {
                    componentStack: l.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                });
            } catch (n) {
                setTimeout(function() {
                    throw n;
                });
            }
        }
        function Dr(e, t, l) {
            return l = rl(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Mu(e, t);
            }, l;
        }
        function ds(e) {
            return e = rl(e), e.tag = 3, e;
        }
        function hs(e, t, l, a) {
            var n = l.type.getDerivedStateFromError;
            if (typeof n == "function") {
                var u = a.value;
                e.payload = function() {
                    return n(u);
                }, e.callback = function() {
                    ss(t, l, a);
                };
            }
            var c = l.stateNode;
            c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
                ss(t, l, a), typeof n != "function" && (vl === null ? vl = new Set([
                    this
                ]) : vl.add(this));
                var d = a.stack;
                this.componentDidCatch(a.value, {
                    componentStack: d !== null ? d : ""
                });
            });
        }
        function Dm(e, t, l, a, n) {
            if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                if (t = l.alternate, t !== null && Ia(t, l, n, !0), l = bt.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return zt === null ? Ir() : l.alternate === null && Ne === 0 && (Ne = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === nr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
                                a
                            ]) : t.add(a), tc(e, a, n)), !1;
                        case 22:
                            return l.flags |= 65536, a === nr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    a
                                ])
                            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([
                                a
                            ]) : l.add(a)), tc(e, a, n)), !1;
                    }
                    throw Error(f(435, l.tag));
                }
                return tc(e, a, n), Ir(), !1;
            }
            if (he) return t = bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Wi && (e = Error(f(422), {
                cause: a
            }), Fa(mt(e, l)))) : (a !== Wi && (t = Error(f(423), {
                cause: a
            }), Fa(mt(t, l))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = mt(a, l), n = Dr(e.stateNode, a, n), rr(e, n), Ne !== 4 && (Ne = 2)), !1;
            var u = Error(f(520), {
                cause: a
            });
            if (u = mt(u, l), Sn === null ? Sn = [
                u
            ] : Sn.push(u), Ne !== 4 && (Ne = 2), t === null) return !0;
            a = mt(a, l), l = t;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Dr(l.stateNode, a, e), rr(l, e), !1;
                    case 1:
                        if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (vl === null || !vl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = ds(n), hs(n, e, l, a), rr(l, n), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var ps = Error(f(461)), Qe = !1;
        function Ke(e, t, l, a) {
            t.child = e === null ? ns(t, null, l, a) : ba(t, e.child, l, a);
        }
        function ms(e, t, l, a, n) {
            l = l.render;
            var u = t.ref;
            if ("ref" in a) {
                var c = {};
                for(var d in a)d !== "ref" && (c[d] = a[d]);
            } else c = a;
            return Ql(t), a = dr(e, t, l, c, u, n), d = hr(), e !== null && !Qe ? (pr(e, t, n), Vt(e, t, n)) : (he && d && Ji(t), t.flags |= 1, Ke(e, t, a, n), t.child);
        }
        function ys(e, t, l, a, n) {
            if (e === null) {
                var u = l.type;
                return typeof u == "function" && !Vi(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, vs(e, t, u, a, n)) : (e = ru(l.type, null, a, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (u = e.child, !wr(e, n)) {
                var c = u.memoizedProps;
                if (l = l.compare, l = l !== null ? l : ka, l(c, a) && e.ref === t.ref) return Vt(e, t, n);
            }
            return t.flags |= 1, e = Qt(u, a), e.ref = t.ref, e.return = t, t.child = e;
        }
        function vs(e, t, l, a, n) {
            if (e !== null) {
                var u = e.memoizedProps;
                if (ka(u, a) && e.ref === t.ref) if (Qe = !1, t.pendingProps = a = u, wr(e, n)) (e.flags & 131072) !== 0 && (Qe = !0);
                else return t.lanes = e.lanes, Vt(e, t, n);
            }
            return xr(e, t, l, a, n);
        }
        function gs(e, t, l) {
            var a = t.pendingProps, n = a.children, u = e !== null ? e.memoizedState : null;
            if (a.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (a = u !== null ? u.baseLanes | l : l, e !== null) {
                        for(n = t.child = e.child, u = 0; n !== null;)u = u | n.lanes | n.childLanes, n = n.sibling;
                        t.childLanes = u & ~a;
                    } else t.childLanes = 0, t.child = null;
                    return bs(e, t, a, l);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && du(t, u !== null ? u.cachePool : null), u !== null ? vo(t, u) : fr(), us(t);
                else return t.lanes = t.childLanes = 536870912, bs(e, t, u !== null ? u.baseLanes | l : l, l);
            } else u !== null ? (du(t, u.cachePool), vo(t, u), sl(), t.memoizedState = null) : (e !== null && du(t, null), fr(), sl());
            return Ke(e, t, n, l), t.child;
        }
        function bs(e, t, l, a) {
            var n = ar();
            return n = n === null ? null : {
                parent: Ue._currentValue,
                pool: n
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: n
            }, e !== null && du(t, null), fr(), us(t), e !== null && Ia(e, t, a, !0), null;
        }
        function Du(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(f(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function xr(e, t, l, a, n) {
            return Ql(t), l = dr(e, t, l, a, void 0, n), a = hr(), e !== null && !Qe ? (pr(e, t, n), Vt(e, t, n)) : (he && a && Ji(t), t.flags |= 1, Ke(e, t, l, n), t.child);
        }
        function Ss(e, t, l, a, n, u) {
            return Ql(t), t.updateQueue = null, l = bo(t, a, l, n), go(e), a = hr(), e !== null && !Qe ? (pr(e, t, u), Vt(e, t, u)) : (he && a && Ji(t), t.flags |= 1, Ke(e, t, l, u), t.child);
        }
        function Es(e, t, l, a, n) {
            if (Ql(t), t.stateNode === null) {
                var u = fa, c = l.contextType;
                typeof c == "object" && c !== null && (u = Je(c)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Mr, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, ur(t), c = l.contextType, u.context = typeof c == "object" && c !== null ? Je(c) : fa, u.state = t.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (Nr(t, l, c, a), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && Mr.enqueueReplaceState(u, u.state, null), rn(t, a, u, n), un(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
            } else if (e === null) {
                u = t.stateNode;
                var d = t.memoizedProps, y = jl(l, d);
                u.props = y;
                var A = u.context, B = l.contextType;
                c = fa, typeof B == "object" && B !== null && (c = Je(B));
                var q = l.getDerivedStateFromProps;
                B = typeof q == "function" || typeof u.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, B || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d || A !== c) && rs(t, u, a, c), il = !1;
                var M = t.memoizedState;
                u.state = M, rn(t, a, u, n), un(), A = t.memoizedState, d || M !== A || il ? (typeof q == "function" && (Nr(t, l, q, a), A = t.memoizedState), (y = il || is(t, l, y, a, M, A, c)) ? (B || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = A), u.props = a, u.state = A, u.context = c, a = y) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
            } else {
                u = t.stateNode, ir(e, t), c = t.memoizedProps, B = jl(l, c), u.props = B, q = t.pendingProps, M = u.context, A = l.contextType, y = fa, typeof A == "object" && A !== null && (y = Je(A)), d = l.getDerivedStateFromProps, (A = typeof d == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== q || M !== y) && rs(t, u, a, y), il = !1, M = t.memoizedState, u.state = M, rn(t, a, u, n), un();
                var D = t.memoizedState;
                c !== q || M !== D || il || e !== null && e.dependencies !== null && ou(e.dependencies) ? (typeof d == "function" && (Nr(t, l, d, a), D = t.memoizedState), (B = il || is(t, l, B, a, M, D, y) || e !== null && e.dependencies !== null && ou(e.dependencies)) ? (A || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, D, y), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, D, y)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = D), u.props = a, u.state = D, u.context = y, a = B) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), a = !1);
            }
            return u = a, Du(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = ba(t, e.child, null, n), t.child = ba(t, null, l, n)) : Ke(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = Vt(e, t, n), e;
        }
        function Rs(e, t, l, a) {
            return Wa(), t.flags |= 256, Ke(e, t, l, a), t.child;
        }
        var zr = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function Br(e) {
            return {
                baseLanes: e,
                cachePool: co()
            };
        }
        function Ur(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= St), e;
        }
        function Ts(e, t, l) {
            var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, c;
            if ((c = u) || (c = e !== null && e.memoizedState === null ? !1 : (Ce.current & 2) !== 0), c && (n = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (he) {
                    if (n ? ol(t) : sl(), he) {
                        var d = _e, y;
                        if (y = d) {
                            e: {
                                for(y = d, d = xt; y.nodeType !== 8;){
                                    if (!d) {
                                        d = null;
                                        break e;
                                    }
                                    if (y = Nt(y.nextSibling), y === null) {
                                        d = null;
                                        break e;
                                    }
                                }
                                d = y;
                            }
                            d !== null ? (t.memoizedState = {
                                dehydrated: d,
                                treeContext: Cl !== null ? {
                                    id: Lt,
                                    overflow: Yt
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, y = it(18, null, null, 0), y.stateNode = d, y.return = t, t.child = y, We = t, _e = null, y = !0) : y = !1;
                        }
                        y || wl(t);
                    }
                    if (d = t.memoizedState, d !== null && (d = d.dehydrated, d !== null)) return yc(d) ? t.lanes = 32 : t.lanes = 536870912, null;
                    Xt(t);
                }
                return d = a.children, a = a.fallback, n ? (sl(), n = t.mode, d = xu({
                    mode: "hidden",
                    children: d
                }, n), a = Ul(a, n, l, null), d.return = t, a.return = t, d.sibling = a, t.child = d, n = t.child, n.memoizedState = Br(l), n.childLanes = Ur(e, c, l), t.memoizedState = zr, a) : (ol(t), Cr(t, d));
            }
            if (y = e.memoizedState, y !== null && (d = y.dehydrated, d !== null)) {
                if (u) t.flags & 256 ? (ol(t), t.flags &= -257, t = qr(e, t, l)) : t.memoizedState !== null ? (sl(), t.child = e.child, t.flags |= 128, t = null) : (sl(), n = a.fallback, d = t.mode, a = xu({
                    mode: "visible",
                    children: a.children
                }, d), n = Ul(n, d, l, null), n.flags |= 2, a.return = t, n.return = t, a.sibling = n, t.child = a, ba(t, e.child, null, l), a = t.child, a.memoizedState = Br(l), a.childLanes = Ur(e, c, l), t.memoizedState = zr, t = n);
                else if (ol(t), yc(d)) {
                    if (c = d.nextSibling && d.nextSibling.dataset, c) var A = c.dgst;
                    c = A, a = Error(f(419)), a.stack = "", a.digest = c, Fa({
                        value: a,
                        source: null,
                        stack: null
                    }), t = qr(e, t, l);
                } else if (Qe || Ia(e, t, l, !1), c = (l & e.childLanes) !== 0, Qe || c) {
                    if (c = Re, c !== null && (a = l & -l, a = (a & 42) !== 0 ? 1 : vi(a), a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a, a !== 0 && a !== y.retryLane)) throw y.retryLane = a, ca(e, a), st(c, e, a), ps;
                    d.data === "$?" || Ir(), t = qr(e, t, l);
                } else d.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = y.treeContext, _e = Nt(d.nextSibling), We = t, he = !0, Hl = null, xt = !1, e !== null && (vt[gt++] = Lt, vt[gt++] = Yt, vt[gt++] = Cl, Lt = e.id, Yt = e.overflow, Cl = t), t = Cr(t, a.children), t.flags |= 4096);
                return t;
            }
            return n ? (sl(), n = a.fallback, d = t.mode, y = e.child, A = y.sibling, a = Qt(y, {
                mode: "hidden",
                children: a.children
            }), a.subtreeFlags = y.subtreeFlags & 65011712, A !== null ? n = Qt(A, n) : (n = Ul(n, d, l, null), n.flags |= 2), n.return = t, a.return = t, a.sibling = n, t.child = a, a = n, n = t.child, d = e.child.memoizedState, d === null ? d = Br(l) : (y = d.cachePool, y !== null ? (A = Ue._currentValue, y = y.parent !== A ? {
                parent: A,
                pool: A
            } : y) : y = co(), d = {
                baseLanes: d.baseLanes | l,
                cachePool: y
            }), n.memoizedState = d, n.childLanes = Ur(e, c, l), t.memoizedState = zr, a) : (ol(t), l = e.child, e = l.sibling, l = Qt(l, {
                mode: "visible",
                children: a.children
            }), l.return = t, l.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [
                e
            ], t.flags |= 16) : c.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function Cr(e, t) {
            return t = xu({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function xu(e, t) {
            return e = it(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function qr(e, t, l) {
            return ba(t, e.child, null, l), e = Cr(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function Os(e, t, l) {
            e.lanes |= t;
            var a = e.alternate;
            a !== null && (a.lanes |= t), Ii(e.return, t, l);
        }
        function Hr(e, t, l, a, n) {
            var u = e.memoizedState;
            u === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: l,
                tailMode: n
            } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = l, u.tailMode = n);
        }
        function As(e, t, l) {
            var a = t.pendingProps, n = a.revealOrder, u = a.tail;
            if (Ke(e, t, a.children, l), a = Ce.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && Os(e, l, t);
                    else if (e.tag === 19) Os(e, l, t);
                    else if (e.child !== null) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t) break e;
                    for(; e.sibling === null;){
                        if (e.return === null || e.return === t) break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
                a &= 1;
            }
            switch(G(Ce, a), n){
                case "forwards":
                    for(l = t.child, n = null; l !== null;)e = l.alternate, e !== null && _u(e) === null && (n = l), l = l.sibling;
                    l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), Hr(t, !1, n, l, u);
                    break;
                case "backwards":
                    for(l = null, n = t.child, t.child = null; n !== null;){
                        if (e = n.alternate, e !== null && _u(e) === null) {
                            t.child = n;
                            break;
                        }
                        e = n.sibling, n.sibling = l, l = n, n = e;
                    }
                    Hr(t, !0, l, null, u);
                    break;
                case "together":
                    Hr(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function Vt(e, t, l) {
            if (e !== null && (t.dependencies = e.dependencies), yl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
                if (Ia(e, t, l, !1), (l & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(f(153));
            if (t.child !== null) {
                for(e = t.child, l = Qt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = Qt(e, e.pendingProps), l.return = t;
                l.sibling = null;
            }
            return t.child;
        }
        function wr(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ou(e)));
        }
        function xm(e, t, l) {
            switch(t.tag){
                case 3:
                    ye(t, t.stateNode.containerInfo), ul(t, Ue, e.memoizedState.cache), Wa();
                    break;
                case 27:
                case 5:
                    qa(t);
                    break;
                case 4:
                    ye(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    ul(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var a = t.memoizedState;
                    if (a !== null) return a.dehydrated !== null ? (ol(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Ts(e, t, l) : (ol(t), e = Vt(e, t, l), e !== null ? e.sibling : null);
                    ol(t);
                    break;
                case 19:
                    var n = (e.flags & 128) !== 0;
                    if (a = (l & t.childLanes) !== 0, a || (Ia(e, t, l, !1), a = (l & t.childLanes) !== 0), n) {
                        if (a) return As(e, t, l);
                        t.flags |= 128;
                    }
                    if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), G(Ce, Ce.current), a) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, gs(e, t, l);
                case 24:
                    ul(t, Ue, e.memoizedState.cache);
            }
            return Vt(e, t, l);
        }
        function _s(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Qe = !0;
            else {
                if (!wr(e, l) && (t.flags & 128) === 0) return Qe = !1, xm(e, t, l);
                Qe = (e.flags & 131072) !== 0;
            }
            else Qe = !1, he && (t.flags & 1048576) !== 0 && to(t, fu, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var a = t.elementType, n = a._init;
                        if (a = n(a._payload), t.type = a, typeof a == "function") Vi(a) ? (e = jl(a, e), t.tag = 1, t = Es(null, t, a, e, l)) : (t.tag = 0, t = xr(null, t, a, e, l));
                        else {
                            if (a != null) {
                                if (n = a.$$typeof, n === W) {
                                    t.tag = 11, t = ms(null, t, a, e, l);
                                    break e;
                                } else if (n === fe) {
                                    t.tag = 14, t = ys(null, t, a, e, l);
                                    break e;
                                }
                            }
                            throw t = Ht(a) || a, Error(f(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return xr(e, t, t.type, t.pendingProps, l);
                case 1:
                    return a = t.type, n = jl(a, t.pendingProps), Es(e, t, a, n, l);
                case 3:
                    e: {
                        if (ye(t, t.stateNode.containerInfo), e === null) throw Error(f(387));
                        a = t.pendingProps;
                        var u = t.memoizedState;
                        n = u.element, ir(e, t), rn(t, a, null, l);
                        var c = t.memoizedState;
                        if (a = c.cache, ul(t, Ue, a), a !== u.cache && er(t, [
                            Ue
                        ], l, !0), un(), a = c.element, u.isDehydrated) if (u = {
                            element: a,
                            isDehydrated: !1,
                            cache: c.cache
                        }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
                            t = Rs(e, t, a, l);
                            break e;
                        } else if (a !== n) {
                            n = mt(Error(f(424)), t), Fa(n), t = Rs(e, t, a, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(_e = Nt(e.firstChild), We = t, he = !0, Hl = null, xt = !0, l = ns(t, null, a, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (Wa(), a === n) {
                                t = Vt(e, t, l);
                                break e;
                            }
                            Ke(e, t, a, l);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Du(e, t), e === null ? (l = xd(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : he || (l = t.type, e = t.pendingProps, a = Gu(F.current).createElement(l), a[ke] = t, a[Fe] = e, Xe(a, l, e), Pe(a), t.stateNode = a) : t.memoizedState = xd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return qa(t), e === null && he && (a = t.stateNode = Nd(t.type, t.pendingProps, F.current), We = t, xt = !0, n = _e, Sl(t.type) ? (vc = n, _e = Nt(a.firstChild)) : _e = n), Ke(e, t, t.pendingProps.children, l), Du(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && he && ((n = a = _e) && (a = n1(a, t.type, t.pendingProps, xt), a !== null ? (t.stateNode = a, We = t, _e = Nt(a.firstChild), xt = !1, n = !0) : n = !1), n || wl(t)), qa(t), n = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = u.children, hc(n, u) ? a = null : c !== null && hc(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = dr(e, t, Rm, null, null, l), Dn._currentValue = n), Du(e, t), Ke(e, t, a, l), t.child;
                case 6:
                    return e === null && he && ((e = l = _e) && (l = u1(l, t.pendingProps, xt), l !== null ? (t.stateNode = l, We = t, _e = null, e = !0) : e = !1), e || wl(t)), null;
                case 13:
                    return Ts(e, t, l);
                case 4:
                    return ye(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = ba(t, null, a, l) : Ke(e, t, a, l), t.child;
                case 11:
                    return ms(e, t, t.type, t.pendingProps, l);
                case 7:
                    return Ke(e, t, t.pendingProps, l), t.child;
                case 8:
                    return Ke(e, t, t.pendingProps.children, l), t.child;
                case 12:
                    return Ke(e, t, t.pendingProps.children, l), t.child;
                case 10:
                    return a = t.pendingProps, ul(t, t.type, a.value), Ke(e, t, a.children, l), t.child;
                case 9:
                    return n = t.type._context, a = t.pendingProps.children, Ql(t), n = Je(n), a = a(n), t.flags |= 1, Ke(e, t, a, l), t.child;
                case 14:
                    return ys(e, t, t.type, t.pendingProps, l);
                case 15:
                    return vs(e, t, t.type, t.pendingProps, l);
                case 19:
                    return As(e, t, l);
                case 31:
                    return a = t.pendingProps, l = t.mode, a = {
                        mode: a.mode,
                        children: a.children
                    }, e === null ? (l = xu(a, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Qt(e.child, a), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return gs(e, t, l);
                case 24:
                    return Ql(t), a = Je(Ue), e === null ? (n = ar(), n === null && (n = Re, u = tr(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = {
                        parent: a,
                        cache: n
                    }, ur(t), ul(t, Ue, n)) : ((e.lanes & l) !== 0 && (ir(e, t), rn(t, null, null, l), un()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = {
                        parent: a,
                        cache: a
                    }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ul(t, Ue, a)) : (a = u.cache, ul(t, Ue, a), a !== n.cache && er(t, [
                        Ue
                    ], l, !0))), Ke(e, t, t.pendingProps.children, l), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(f(156, t.tag));
        }
        function Zt(e) {
            e.flags |= 4;
        }
        function Ns(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !qd(t)) {
                if (t = bt.current, t !== null && ((se & 4194048) === se ? zt !== null : (se & 62914560) !== se && (se & 536870912) === 0 || t !== zt)) throw an = nr, fo;
                e.flags |= 8192;
            }
        }
        function zu(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? af() : 536870912, e.lanes |= t, Ta |= t);
        }
        function pn(e, t) {
            if (!he) switch(e.tailMode){
                case "hidden":
                    t = e.tail;
                    for(var l = null; t !== null;)t.alternate !== null && (l = t), t = t.sibling;
                    l === null ? e.tail = null : l.sibling = null;
                    break;
                case "collapsed":
                    l = e.tail;
                    for(var a = null; l !== null;)l.alternate !== null && (a = l), l = l.sibling;
                    a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
            }
        }
        function Ae(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
            if (t) for(var n = e.child; n !== null;)l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
            else for(n = e.child; n !== null;)l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
            return e.subtreeFlags |= a, e.childLanes = l, t;
        }
        function zm(e, t, l) {
            var a = t.pendingProps;
            switch($i(t), t.tag){
                case 31:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Ae(t), null;
                case 1:
                    return Ae(t), null;
                case 3:
                    return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Kt(Ue), dt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && ($a(t) ? Zt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, no())), Ae(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (Zt(t), l !== null ? (Ae(t), Ns(t, l)) : (Ae(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Zt(t), Ae(t), Ns(t, l)) : (Ae(t), t.flags &= -16777217) : (e.memoizedProps !== a && Zt(t), Ae(t), t.flags &= -16777217), null;
                case 27:
                    Nl(t), l = F.current;
                    var n = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== a && Zt(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(f(166));
                            return Ae(t), null;
                        }
                        e = k.current, $a(t) ? lo(t) : (e = Nd(n, a, l), t.stateNode = e, Zt(t));
                    }
                    return Ae(t), null;
                case 5:
                    if (Nl(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && Zt(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(f(166));
                            return Ae(t), null;
                        }
                        if (e = k.current, $a(t)) lo(t);
                        else {
                            switch(n = Gu(F.current), e){
                                case 1:
                                    e = n.createElementNS("http://www.w3.org/2000/svg", l);
                                    break;
                                case 2:
                                    e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                    break;
                                default:
                                    switch(l){
                                        case "svg":
                                            e = n.createElementNS("http://www.w3.org/2000/svg", l);
                                            break;
                                        case "math":
                                            e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                            break;
                                        case "script":
                                            e = n.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                            break;
                                        case "select":
                                            e = typeof a.is == "string" ? n.createElement("select", {
                                                is: a.is
                                            }) : n.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                                            break;
                                        default:
                                            e = typeof a.is == "string" ? n.createElement(l, {
                                                is: a.is
                                            }) : n.createElement(l);
                                    }
                            }
                            e[ke] = t, e[Fe] = a;
                            e: for(n = t.child; n !== null;){
                                if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
                                else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                                    n.child.return = n, n = n.child;
                                    continue;
                                }
                                if (n === t) break e;
                                for(; n.sibling === null;){
                                    if (n.return === null || n.return === t) break e;
                                    n = n.return;
                                }
                                n.sibling.return = n.return, n = n.sibling;
                            }
                            t.stateNode = e;
                            e: switch(Xe(e, l, a), l){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    e = !!a.autoFocus;
                                    break e;
                                case "img":
                                    e = !0;
                                    break e;
                                default:
                                    e = !1;
                            }
                            e && Zt(t);
                        }
                    }
                    return Ae(t), t.flags &= -16777217, null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== a && Zt(t);
                    else {
                        if (typeof a != "string" && t.stateNode === null) throw Error(f(166));
                        if (e = F.current, $a(t)) {
                            if (e = t.stateNode, l = t.memoizedProps, a = null, n = We, n !== null) switch(n.tag){
                                case 27:
                                case 5:
                                    a = n.memoizedProps;
                            }
                            e[ke] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Sd(e.nodeValue, l)), e || wl(t);
                        } else e = Gu(e).createTextNode(a), e[ke] = t, t.stateNode = e;
                    }
                    return Ae(t), null;
                case 13:
                    if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (n = $a(t), a !== null && a.dehydrated !== null) {
                            if (e === null) {
                                if (!n) throw Error(f(318));
                                if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
                                n[ke] = t;
                            } else Wa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Ae(t), n = !1;
                        } else n = no(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
                        if (!n) return t.flags & 256 ? (Xt(t), t) : (Xt(t), null);
                    }
                    if (Xt(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = a !== null, e = e !== null && e.memoizedState !== null, l) {
                        a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
                        var u = null;
                        a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), zu(t, t.updateQueue), Ae(t), null;
                case 4:
                    return dt(), e === null && cc(t.stateNode.containerInfo), Ae(t), null;
                case 10:
                    return Kt(t.type), Ae(t), null;
                case 19:
                    if (j(Ce), n = t.memoizedState, n === null) return Ae(t), null;
                    if (a = (t.flags & 128) !== 0, u = n.rendering, u === null) if (a) pn(n, !1);
                    else {
                        if (Ne !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (u = _u(e), u !== null) {
                                for(t.flags |= 128, pn(n, !1), e = u.updateQueue, t.updateQueue = e, zu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)eo(l, e), l = l.sibling;
                                return G(Ce, Ce.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        n.tail !== null && Dt() > Cu && (t.flags |= 128, a = !0, pn(n, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!a) if (e = _u(u), e !== null) {
                            if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, zu(t, e), pn(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !he) return Ae(t), null;
                        } else 2 * Dt() - n.renderingStartTime > Cu && l !== 536870912 && (t.flags |= 128, a = !0, pn(n, !1), t.lanes = 4194304);
                        n.isBackwards ? (u.sibling = t.child, t.child = u) : (e = n.last, e !== null ? e.sibling = u : t.child = u, n.last = u);
                    }
                    return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Dt(), t.sibling = null, e = Ce.current, G(Ce, a ? e & 1 | 2 : e & 1), t) : (Ae(t), null);
                case 22:
                case 23:
                    return Xt(t), or(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t), l = t.updateQueue, l !== null && zu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && j(Ll), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Kt(Ue), Ae(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(f(156, t.tag));
        }
        function Bm(e, t) {
            switch($i(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Kt(Ue), dt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return Nl(t), null;
                case 13:
                    if (Xt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(f(340));
                        Wa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return j(Ce), null;
                case 4:
                    return dt(), null;
                case 10:
                    return Kt(t.type), null;
                case 22:
                case 23:
                    return Xt(t), or(), e !== null && j(Ll), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Kt(Ue), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function Ms(e, t) {
            switch($i(t), t.tag){
                case 3:
                    Kt(Ue), dt();
                    break;
                case 26:
                case 27:
                case 5:
                    Nl(t);
                    break;
                case 4:
                    dt();
                    break;
                case 13:
                    Xt(t);
                    break;
                case 19:
                    j(Ce);
                    break;
                case 10:
                    Kt(t.type);
                    break;
                case 22:
                case 23:
                    Xt(t), or(), e !== null && j(Ll);
                    break;
                case 24:
                    Kt(Ue);
            }
        }
        function mn(e, t) {
            try {
                var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
                if (a !== null) {
                    var n = a.next;
                    l = n;
                    do {
                        if ((l.tag & e) === e) {
                            a = void 0;
                            var u = l.create, c = l.inst;
                            a = u(), c.destroy = a;
                        }
                        l = l.next;
                    }while (l !== n);
                }
            } catch (d) {
                Ee(t, t.return, d);
            }
        }
        function dl(e, t, l) {
            try {
                var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
                if (n !== null) {
                    var u = n.next;
                    a = u;
                    do {
                        if ((a.tag & e) === e) {
                            var c = a.inst, d = c.destroy;
                            if (d !== void 0) {
                                c.destroy = void 0, n = t;
                                var y = l, A = d;
                                try {
                                    A();
                                } catch (B) {
                                    Ee(n, y, B);
                                }
                            }
                        }
                        a = a.next;
                    }while (a !== u);
                }
            } catch (B) {
                Ee(t, t.return, B);
            }
        }
        function Ds(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    yo(t, l);
                } catch (a) {
                    Ee(e, e.return, a);
                }
            }
        }
        function xs(e, t, l) {
            l.props = jl(e.type, e.memoizedProps), l.state = e.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (a) {
                Ee(e, t, a);
            }
        }
        function yn(e, t) {
            try {
                var l = e.ref;
                if (l !== null) {
                    switch(e.tag){
                        case 26:
                        case 27:
                        case 5:
                            var a = e.stateNode;
                            break;
                        case 30:
                            a = e.stateNode;
                            break;
                        default:
                            a = e.stateNode;
                    }
                    typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
                }
            } catch (n) {
                Ee(e, t, n);
            }
        }
        function Bt(e, t) {
            var l = e.ref, a = e.refCleanup;
            if (l !== null) if (typeof a == "function") try {
                a();
            } catch (n) {
                Ee(e, t, n);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof l == "function") try {
                l(null);
            } catch (n) {
                Ee(e, t, n);
            }
            else l.current = null;
        }
        function zs(e) {
            var t = e.type, l = e.memoizedProps, a = e.stateNode;
            try {
                e: switch(t){
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l.autoFocus && a.focus();
                        break e;
                    case "img":
                        l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
                }
            } catch (n) {
                Ee(e, e.return, n);
            }
        }
        function Pr(e, t, l) {
            try {
                var a = e.stateNode;
                Im(a, e.type, l, t), a[Fe] = t;
            } catch (n) {
                Ee(e, e.return, n);
            }
        }
        function Bs(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sl(e.type) || e.tag === 4;
        }
        function Qr(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || Bs(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Sl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function Lr(e, t, l) {
            var a = e.tag;
            if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Ku));
            else if (a !== 4 && (a === 27 && Sl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(Lr(e, t, l), e = e.sibling; e !== null;)Lr(e, t, l), e = e.sibling;
        }
        function Bu(e, t, l) {
            var a = e.tag;
            if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (a !== 4 && (a === 27 && Sl(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(Bu(e, t, l), e = e.sibling; e !== null;)Bu(e, t, l), e = e.sibling;
        }
        function Us(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var a = e.type, n = t.attributes; n.length;)t.removeAttributeNode(n[0]);
                Xe(t, a, l), t[ke] = e, t[Fe] = l;
            } catch (u) {
                Ee(e, e.return, u);
            }
        }
        var kt = !1, De = !1, Yr = !1, Cs = typeof WeakSet == "function" ? WeakSet : Set, Le = null;
        function Um(e, t) {
            if (e = e.containerInfo, sc = $u, e = Gf(e), Qi(e)) {
                if ("selectionStart" in e) var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset, u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType, u.nodeType;
                        } catch  {
                            l = null;
                            break e;
                        }
                        var c = 0, d = -1, y = -1, A = 0, B = 0, q = e, M = null;
                        t: for(;;){
                            for(var D; q !== l || n !== 0 && q.nodeType !== 3 || (d = c + n), q !== u || a !== 0 && q.nodeType !== 3 || (y = c + a), q.nodeType === 3 && (c += q.nodeValue.length), (D = q.firstChild) !== null;)M = q, q = D;
                            for(;;){
                                if (q === e) break t;
                                if (M === l && ++A === n && (d = c), M === u && ++B === a && (y = c), (D = q.nextSibling) !== null) break;
                                q = M, M = q.parentNode;
                            }
                            q = D;
                        }
                        l = d === -1 || y === -1 ? null : {
                            start: d,
                            end: y
                        };
                    } else l = null;
                }
                l = l || {
                    start: 0,
                    end: 0
                };
            } else l = null;
            for(dc = {
                focusedElem: e,
                selectionRange: l
            }, $u = !1, Le = t; Le !== null;)if (t = Le, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Le = e;
            else for(; Le !== null;){
                switch(t = Le, u = t.alternate, e = t.flags, t.tag){
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && u !== null) {
                            e = void 0, l = t, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                            try {
                                var le = jl(l.type, n, l.elementType === l.type);
                                e = a.getSnapshotBeforeUpdate(le, u), a.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (I) {
                                Ee(l, l.return, I);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) mc(e);
                            else if (l === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    mc(e);
                                    break;
                                default:
                                    e.textContent = "";
                            }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0) throw Error(f(163));
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, Le = e;
                    break;
                }
                Le = t.return;
            }
        }
        function qs(e, t, l) {
            var a = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    hl(e, l), a & 4 && mn(5, l);
                    break;
                case 1:
                    if (hl(e, l), a & 4) if (e = l.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (c) {
                        Ee(l, l.return, c);
                    }
                    else {
                        var n = jl(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (c) {
                            Ee(l, l.return, c);
                        }
                    }
                    a & 64 && Ds(l), a & 512 && yn(l, l.return);
                    break;
                case 3:
                    if (hl(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
                        if (t = null, l.child !== null) switch(l.child.tag){
                            case 27:
                            case 5:
                                t = l.child.stateNode;
                                break;
                            case 1:
                                t = l.child.stateNode;
                        }
                        try {
                            yo(e, t);
                        } catch (c) {
                            Ee(l, l.return, c);
                        }
                    }
                    break;
                case 27:
                    t === null && a & 4 && Us(l);
                case 26:
                case 5:
                    hl(e, l), t === null && a & 4 && zs(l), a & 512 && yn(l, l.return);
                    break;
                case 12:
                    hl(e, l);
                    break;
                case 13:
                    hl(e, l), a & 4 && Ps(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = jm.bind(null, l), i1(e, l))));
                    break;
                case 22:
                    if (a = l.memoizedState !== null || kt, !a) {
                        t = t !== null && t.memoizedState !== null || De, n = kt;
                        var u = De;
                        kt = a, (De = t) && !u ? pl(e, l, (l.subtreeFlags & 8772) !== 0) : hl(e, l), kt = n, De = u;
                    }
                    break;
                case 30:
                    break;
                default:
                    hl(e, l);
            }
        }
        function Hs(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, Hs(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Si(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Te = null, tt = !1;
        function Jt(e, t, l) {
            for(l = l.child; l !== null;)ws(e, t, l), l = l.sibling;
        }
        function ws(e, t, l) {
            if (at && typeof at.onCommitFiberUnmount == "function") try {
                at.onCommitFiberUnmount(Ha, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    De || Bt(l, t), Jt(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    De || Bt(l, t);
                    var a = Te, n = tt;
                    Sl(l.type) && (Te = l.stateNode, tt = !1), Jt(e, t, l), An(l.stateNode), Te = a, tt = n;
                    break;
                case 5:
                    De || Bt(l, t);
                case 6:
                    if (a = Te, n = tt, Te = null, Jt(e, t, l), Te = a, tt = n, Te !== null) if (tt) try {
                        (Te.nodeType === 9 ? Te.body : Te.nodeName === "HTML" ? Te.ownerDocument.body : Te).removeChild(l.stateNode);
                    } catch (u) {
                        Ee(l, t, u);
                    }
                    else try {
                        Te.removeChild(l.stateNode);
                    } catch (u) {
                        Ee(l, t, u);
                    }
                    break;
                case 18:
                    Te !== null && (tt ? (e = Te, Ad(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Un(e)) : Ad(Te, l.stateNode));
                    break;
                case 4:
                    a = Te, n = tt, Te = l.stateNode.containerInfo, tt = !0, Jt(e, t, l), Te = a, tt = n;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    De || dl(2, l, t), De || dl(4, l, t), Jt(e, t, l);
                    break;
                case 1:
                    De || (Bt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && xs(l, t, a)), Jt(e, t, l);
                    break;
                case 21:
                    Jt(e, t, l);
                    break;
                case 22:
                    De = (a = De) || l.memoizedState !== null, Jt(e, t, l), De = a;
                    break;
                default:
                    Jt(e, t, l);
            }
        }
        function Ps(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Un(e);
            } catch (l) {
                Ee(t, t.return, l);
            }
        }
        function Cm(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new Cs), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Cs), t;
                default:
                    throw Error(f(435, e.tag));
            }
        }
        function jr(e, t) {
            var l = Cm(e);
            t.forEach(function(a) {
                var n = Km.bind(null, e, a);
                l.has(a) || (l.add(a), a.then(n, n));
            });
        }
        function rt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var a = 0; a < l.length; a++){
                var n = l[a], u = e, c = t, d = c;
                e: for(; d !== null;){
                    switch(d.tag){
                        case 27:
                            if (Sl(d.type)) {
                                Te = d.stateNode, tt = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Te = d.stateNode, tt = !1;
                            break e;
                        case 3:
                        case 4:
                            Te = d.stateNode.containerInfo, tt = !0;
                            break e;
                    }
                    d = d.return;
                }
                if (Te === null) throw Error(f(160));
                ws(u, c, n), Te = null, tt = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)Qs(t, e), t = t.sibling;
        }
        var _t = null;
        function Qs(e, t) {
            var l = e.alternate, a = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    rt(t, e), ct(e), a & 4 && (dl(3, e, e.return), mn(3, e), dl(5, e, e.return));
                    break;
                case 1:
                    rt(t, e), ct(e), a & 512 && (De || l === null || Bt(l, l.return)), a & 64 && kt && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
                    break;
                case 26:
                    var n = _t;
                    if (rt(t, e), ct(e), a & 512 && (De || l === null || Bt(l, l.return)), a & 4) {
                        var u = l !== null ? l.memoizedState : null;
                        if (a = e.memoizedState, l === null) if (a === null) if (e.stateNode === null) {
                            e: {
                                a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                                t: switch(a){
                                    case "title":
                                        u = n.getElementsByTagName("title")[0], (!u || u[Qa] || u[ke] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Xe(u, a, l), u[ke] = e, Pe(u), a = u;
                                        break e;
                                    case "link":
                                        var c = Ud("link", "href", n).get(a + (l.href || ""));
                                        if (c) {
                                            for(var d = 0; d < c.length; d++)if (u = c[d], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                c.splice(d, 1);
                                                break t;
                                            }
                                        }
                                        u = n.createElement(a), Xe(u, a, l), n.head.appendChild(u);
                                        break;
                                    case "meta":
                                        if (c = Ud("meta", "content", n).get(a + (l.content || ""))) {
                                            for(d = 0; d < c.length; d++)if (u = c[d], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                c.splice(d, 1);
                                                break t;
                                            }
                                        }
                                        u = n.createElement(a), Xe(u, a, l), n.head.appendChild(u);
                                        break;
                                    default:
                                        throw Error(f(468, a));
                                }
                                u[ke] = e, Pe(u), a = u;
                            }
                            e.stateNode = a;
                        } else Cd(n, e.type, e.stateNode);
                        else e.stateNode = Bd(n, a, e.memoizedProps);
                        else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Cd(n, e.type, e.stateNode) : Bd(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && Pr(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    rt(t, e), ct(e), a & 512 && (De || l === null || Bt(l, l.return)), l !== null && a & 4 && Pr(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (rt(t, e), ct(e), a & 512 && (De || l === null || Bt(l, l.return)), e.flags & 32) {
                        n = e.stateNode;
                        try {
                            ta(n, "");
                        } catch (D) {
                            Ee(e, e.return, D);
                        }
                    }
                    a & 4 && e.stateNode != null && (n = e.memoizedProps, Pr(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Yr = !0);
                    break;
                case 6:
                    if (rt(t, e), ct(e), a & 4) {
                        if (e.stateNode === null) throw Error(f(162));
                        a = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = a;
                        } catch (D) {
                            Ee(e, e.return, D);
                        }
                    }
                    break;
                case 3:
                    if (Zu = null, n = _t, _t = Xu(t.containerInfo), rt(t, e), _t = n, ct(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Un(t.containerInfo);
                    } catch (D) {
                        Ee(e, e.return, D);
                    }
                    Yr && (Yr = !1, Ls(e));
                    break;
                case 4:
                    a = _t, _t = Xu(e.stateNode.containerInfo), rt(t, e), ct(e), _t = a;
                    break;
                case 12:
                    rt(t, e), ct(e);
                    break;
                case 13:
                    rt(t, e), ct(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (kr = Dt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, jr(e, a)));
                    break;
                case 22:
                    n = e.memoizedState !== null;
                    var y = l !== null && l.memoizedState !== null, A = kt, B = De;
                    if (kt = A || n, De = B || y, rt(t, e), De = B, kt = A, ct(e), a & 8192) e: for(t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || y || kt || De || Kl(e)), l = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                y = l = t;
                                try {
                                    if (u = y.stateNode, n) c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                    else {
                                        d = y.stateNode;
                                        var q = y.memoizedProps.style, M = q != null && q.hasOwnProperty("display") ? q.display : null;
                                        d.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                                    }
                                } catch (D) {
                                    Ee(y, y.return, D);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                y = t;
                                try {
                                    y.stateNode.nodeValue = n ? "" : y.memoizedProps;
                                } catch (D) {
                                    Ee(y, y.return, D);
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                            t.child.return = t, t = t.child;
                            continue;
                        }
                        if (t === e) break e;
                        for(; t.sibling === null;){
                            if (t.return === null || t.return === e) break e;
                            l === t && (l = null), t = t.return;
                        }
                        l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
                    }
                    a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, jr(e, l))));
                    break;
                case 19:
                    rt(t, e), ct(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, jr(e, a)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    rt(t, e), ct(e);
            }
        }
        function ct(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for(var l, a = e.return; a !== null;){
                        if (Bs(a)) {
                            l = a;
                            break;
                        }
                        a = a.return;
                    }
                    if (l == null) throw Error(f(160));
                    switch(l.tag){
                        case 27:
                            var n = l.stateNode, u = Qr(e);
                            Bu(e, u, n);
                            break;
                        case 5:
                            var c = l.stateNode;
                            l.flags & 32 && (ta(c, ""), l.flags &= -33);
                            var d = Qr(e);
                            Bu(e, d, c);
                            break;
                        case 3:
                        case 4:
                            var y = l.stateNode.containerInfo, A = Qr(e);
                            Lr(e, A, y);
                            break;
                        default:
                            throw Error(f(161));
                    }
                } catch (B) {
                    Ee(e, e.return, B);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function Ls(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                Ls(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function hl(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)qs(e, t.alternate, t), t = t.sibling;
        }
        function Kl(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        dl(4, t, t.return), Kl(t);
                        break;
                    case 1:
                        Bt(t, t.return);
                        var l = t.stateNode;
                        typeof l.componentWillUnmount == "function" && xs(t, t.return, l), Kl(t);
                        break;
                    case 27:
                        An(t.stateNode);
                    case 26:
                    case 5:
                        Bt(t, t.return), Kl(t);
                        break;
                    case 22:
                        t.memoizedState === null && Kl(t);
                        break;
                    case 30:
                        Kl(t);
                        break;
                    default:
                        Kl(t);
                }
                e = e.sibling;
            }
        }
        function pl(e, t, l) {
            for(l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var a = t.alternate, n = e, u = t, c = u.flags;
                switch(u.tag){
                    case 0:
                    case 11:
                    case 15:
                        pl(n, u, l), mn(4, u);
                        break;
                    case 1:
                        if (pl(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
                            n.componentDidMount();
                        } catch (A) {
                            Ee(a, a.return, A);
                        }
                        if (a = u, n = a.updateQueue, n !== null) {
                            var d = a.stateNode;
                            try {
                                var y = n.shared.hiddenCallbacks;
                                if (y !== null) for(n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++)mo(y[n], d);
                            } catch (A) {
                                Ee(a, a.return, A);
                            }
                        }
                        l && c & 64 && Ds(u), yn(u, u.return);
                        break;
                    case 27:
                        Us(u);
                    case 26:
                    case 5:
                        pl(n, u, l), l && a === null && c & 4 && zs(u), yn(u, u.return);
                        break;
                    case 12:
                        pl(n, u, l);
                        break;
                    case 13:
                        pl(n, u, l), l && c & 4 && Ps(n, u);
                        break;
                    case 22:
                        u.memoizedState === null && pl(n, u, l), yn(u, u.return);
                        break;
                    case 30:
                        break;
                    default:
                        pl(n, u, l);
                }
                t = t.sibling;
            }
        }
        function Kr(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && en(l));
        }
        function Gr(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && en(e));
        }
        function Ut(e, t, l, a) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Ys(e, t, l, a), t = t.sibling;
        }
        function Ys(e, t, l, a) {
            var n = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    Ut(e, t, l, a), n & 2048 && mn(9, t);
                    break;
                case 1:
                    Ut(e, t, l, a);
                    break;
                case 3:
                    Ut(e, t, l, a), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && en(e)));
                    break;
                case 12:
                    if (n & 2048) {
                        Ut(e, t, l, a), e = t.stateNode;
                        try {
                            var u = t.memoizedProps, c = u.id, d = u.onPostCommit;
                            typeof d == "function" && d(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (y) {
                            Ee(t, t.return, y);
                        }
                    } else Ut(e, t, l, a);
                    break;
                case 13:
                    Ut(e, t, l, a);
                    break;
                case 23:
                    break;
                case 22:
                    u = t.stateNode, c = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ut(e, t, l, a) : vn(e, t) : u._visibility & 2 ? Ut(e, t, l, a) : (u._visibility |= 2, Sa(e, t, l, a, (t.subtreeFlags & 10256) !== 0)), n & 2048 && Kr(c, t);
                    break;
                case 24:
                    Ut(e, t, l, a), n & 2048 && Gr(t.alternate, t);
                    break;
                default:
                    Ut(e, t, l, a);
            }
        }
        function Sa(e, t, l, a, n) {
            for(n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var u = e, c = t, d = l, y = a, A = c.flags;
                switch(c.tag){
                    case 0:
                    case 11:
                    case 15:
                        Sa(u, c, d, y, n), mn(8, c);
                        break;
                    case 23:
                        break;
                    case 22:
                        var B = c.stateNode;
                        c.memoizedState !== null ? B._visibility & 2 ? Sa(u, c, d, y, n) : vn(u, c) : (B._visibility |= 2, Sa(u, c, d, y, n)), n && A & 2048 && Kr(c.alternate, c);
                        break;
                    case 24:
                        Sa(u, c, d, y, n), n && A & 2048 && Gr(c.alternate, c);
                        break;
                    default:
                        Sa(u, c, d, y, n);
                }
                t = t.sibling;
            }
        }
        function vn(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var l = e, a = t, n = a.flags;
                switch(a.tag){
                    case 22:
                        vn(l, a), n & 2048 && Kr(a.alternate, a);
                        break;
                    case 24:
                        vn(l, a), n & 2048 && Gr(a.alternate, a);
                        break;
                    default:
                        vn(l, a);
                }
                t = t.sibling;
            }
        }
        var gn = 8192;
        function Ea(e) {
            if (e.subtreeFlags & gn) for(e = e.child; e !== null;)js(e), e = e.sibling;
        }
        function js(e) {
            switch(e.tag){
                case 26:
                    Ea(e), e.flags & gn && e.memoizedState !== null && b1(_t, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    Ea(e);
                    break;
                case 3:
                case 4:
                    var t = _t;
                    _t = Xu(e.stateNode.containerInfo), Ea(e), _t = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = gn, gn = 16777216, Ea(e), gn = t) : Ea(e));
                    break;
                default:
                    Ea(e);
            }
        }
        function Ks(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function bn(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var a = t[l];
                    Le = a, Xs(a, e);
                }
                Ks(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)Gs(e), e = e.sibling;
        }
        function Gs(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    bn(e), e.flags & 2048 && dl(9, e, e.return);
                    break;
                case 3:
                    bn(e);
                    break;
                case 12:
                    bn(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Uu(e)) : bn(e);
                    break;
                default:
                    bn(e);
            }
        }
        function Uu(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var a = t[l];
                    Le = a, Xs(a, e);
                }
                Ks(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        dl(8, t, t.return), Uu(t);
                        break;
                    case 22:
                        l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Uu(t));
                        break;
                    default:
                        Uu(t);
                }
                e = e.sibling;
            }
        }
        function Xs(e, t) {
            for(; Le !== null;){
                var l = Le;
                switch(l.tag){
                    case 0:
                    case 11:
                    case 15:
                        dl(8, l, t);
                        break;
                    case 23:
                    case 22:
                        if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                            var a = l.memoizedState.cachePool.pool;
                            a != null && a.refCount++;
                        }
                        break;
                    case 24:
                        en(l.memoizedState.cache);
                }
                if (a = l.child, a !== null) a.return = l, Le = a;
                else e: for(l = e; Le !== null;){
                    a = Le;
                    var n = a.sibling, u = a.return;
                    if (Hs(a), a === l) {
                        Le = null;
                        break e;
                    }
                    if (n !== null) {
                        n.return = u, Le = n;
                        break e;
                    }
                    Le = u;
                }
            }
        }
        var qm = {
            getCacheForType: function(e) {
                var t = Je(Ue), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, Hm = typeof WeakMap == "function" ? WeakMap : Map, pe = 0, Re = null, re = null, se = 0, me = 0, ft = null, ml = !1, Ra = !1, Xr = !1, $t = 0, Ne = 0, yl = 0, Gl = 0, Vr = 0, St = 0, Ta = 0, Sn = null, lt = null, Zr = !1, kr = 0, Cu = 1 / 0, qu = null, vl = null, Ge = 0, gl = null, Oa = null, Aa = 0, Jr = 0, $r = null, Vs = null, En = 0, Wr = null;
        function ot() {
            if ((pe & 2) !== 0 && se !== 0) return se & -se;
            if (z.T !== null) {
                var e = da;
                return e !== 0 ? e : nc();
            }
            return rf();
        }
        function Zs() {
            St === 0 && (St = (se & 536870912) === 0 || he ? lf() : 536870912);
            var e = bt.current;
            return e !== null && (e.flags |= 32), St;
        }
        function st(e, t, l) {
            (e === Re && (me === 2 || me === 9) || e.cancelPendingCommit !== null) && (_a(e, 0), bl(e, se, St, !1)), Pa(e, l), ((pe & 2) === 0 || e !== Re) && (e === Re && ((pe & 2) === 0 && (Gl |= l), Ne === 4 && bl(e, se, St, !1)), Ct(e));
        }
        function ks(e, t, l) {
            if ((pe & 6) !== 0) throw Error(f(327));
            var a = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || wa(e, t), n = a ? Qm(e, t) : ec(e, t, !0), u = a;
            do {
                if (n === 0) {
                    Ra && !a && bl(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, u && !wm(l)) {
                        n = ec(e, t, !1), u = !1;
                        continue;
                    }
                    if (n === 2) {
                        if (u = t, e.errorRecoveryDisabledLanes & u) var c = 0;
                        else c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                        if (c !== 0) {
                            t = c;
                            e: {
                                var d = e;
                                n = Sn;
                                var y = d.current.memoizedState.isDehydrated;
                                if (y && (_a(d, c).flags |= 256), c = ec(d, c, !1), c !== 2) {
                                    if (Xr && !y) {
                                        d.errorRecoveryDisabledLanes |= u, Gl |= u, n = 4;
                                        break e;
                                    }
                                    u = lt, lt = n, u !== null && (lt === null ? lt = u : lt.push.apply(lt, u));
                                }
                                n = c;
                            }
                            if (u = !1, n !== 2) continue;
                        }
                    }
                    if (n === 1) {
                        _a(e, 0), bl(e, t, 0, !0);
                        break;
                    }
                    e: {
                        switch(a = e, u = n, u){
                            case 0:
                            case 1:
                                throw Error(f(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                bl(a, t, St, !ml);
                                break e;
                            case 2:
                                lt = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(f(329));
                        }
                        if ((t & 62914560) === t && (n = kr + 300 - Dt(), 10 < n)) {
                            if (bl(a, t, St, !ml), Vn(a, 0, !0) !== 0) break e;
                            a.timeoutHandle = Td(Js.bind(null, a, l, lt, qu, Zr, t, St, Gl, Ta, ml, u, 2, -0, 0), n);
                            break e;
                        }
                        Js(a, l, lt, qu, Zr, t, St, Gl, Ta, ml, u, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            Ct(e);
        }
        function Js(e, t, l, a, n, u, c, d, y, A, B, q, M, D) {
            if (e.timeoutHandle = -1, q = t.subtreeFlags, (q & 8192 || (q & 16785408) === 16785408) && (Mn = {
                stylesheets: null,
                count: 0,
                unsuspend: g1
            }, js(t), q = S1(), q !== null)) {
                e.cancelPendingCommit = q(ld.bind(null, e, t, u, l, a, n, c, d, y, B, 1, M, D)), bl(e, u, c, !A);
                return;
            }
            ld(e, t, u, l, a, n, c, d, y);
        }
        function wm(e) {
            for(var t = e;;){
                var l = t.tag;
                if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for(var a = 0; a < l.length; a++){
                    var n = l[a], u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!ut(u(), n)) return !1;
                    } catch  {
                        return !1;
                    }
                }
                if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
                else {
                    if (t === e) break;
                    for(; t.sibling === null;){
                        if (t.return === null || t.return === e) return !0;
                        t = t.return;
                    }
                    t.sibling.return = t.return, t = t.sibling;
                }
            }
            return !0;
        }
        function bl(e, t, l, a) {
            t &= ~Vr, t &= ~Gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
            for(var n = t; 0 < n;){
                var u = 31 - nt(n), c = 1 << u;
                a[u] = -1, n &= ~c;
            }
            l !== 0 && nf(e, l, t);
        }
        function Hu() {
            return (pe & 6) === 0 ? (Rn(0), !1) : !0;
        }
        function Fr() {
            if (re !== null) {
                if (me === 0) var e = re.return;
                else e = re, jt = Pl = null, mr(e), ga = null, dn = 0, e = re;
                for(; e !== null;)Ms(e.alternate, e), e = e.return;
                re = null;
            }
        }
        function _a(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, t1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Fr(), Re = e, re = l = Qt(e.current, null), se = t, me = 0, ft = null, ml = !1, Ra = wa(e, t), Xr = !1, Ta = St = Vr = Gl = yl = Ne = 0, lt = Sn = null, Zr = !1, (t & 8) !== 0 && (t |= t & 32);
            var a = e.entangledLanes;
            if (a !== 0) for(e = e.entanglements, a &= t; 0 < a;){
                var n = 31 - nt(a), u = 1 << n;
                t |= e[n], a &= ~u;
            }
            return $t = t, nu(), l;
        }
        function $s(e, t) {
            ne = null, z.H = Tu, t === ln || t === hu ? (t = ho(), me = 3) : t === fo ? (t = ho(), me = 4) : me = t === ps ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ft = t, re === null && (Ne = 1, Mu(e, mt(t, e.current)));
        }
        function Ws() {
            var e = z.H;
            return z.H = Tu, e === null ? Tu : e;
        }
        function Fs() {
            var e = z.A;
            return z.A = qm, e;
        }
        function Ir() {
            Ne = 4, ml || (se & 4194048) !== se && bt.current !== null || (Ra = !0), (yl & 134217727) === 0 && (Gl & 134217727) === 0 || Re === null || bl(Re, se, St, !1);
        }
        function ec(e, t, l) {
            var a = pe;
            pe |= 2;
            var n = Ws(), u = Fs();
            (Re !== e || se !== t) && (qu = null, _a(e, t)), t = !1;
            var c = Ne;
            e: do try {
                if (me !== 0 && re !== null) {
                    var d = re, y = ft;
                    switch(me){
                        case 8:
                            Fr(), c = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            bt.current === null && (t = !0);
                            var A = me;
                            if (me = 0, ft = null, Na(e, d, y, A), l && Ra) {
                                c = 0;
                                break e;
                            }
                            break;
                        default:
                            A = me, me = 0, ft = null, Na(e, d, y, A);
                    }
                }
                Pm(), c = Ne;
                break;
            } catch (B) {
                $s(e, B);
            }
            while (!0);
            return t && e.shellSuspendCounter++, jt = Pl = null, pe = a, z.H = n, z.A = u, re === null && (Re = null, se = 0, nu()), c;
        }
        function Pm() {
            for(; re !== null;)Is(re);
        }
        function Qm(e, t) {
            var l = pe;
            pe |= 2;
            var a = Ws(), n = Fs();
            Re !== e || se !== t ? (qu = null, Cu = Dt() + 500, _a(e, t)) : Ra = wa(e, t);
            e: do try {
                if (me !== 0 && re !== null) {
                    t = re;
                    var u = ft;
                    t: switch(me){
                        case 1:
                            me = 0, ft = null, Na(e, t, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (oo(u)) {
                                me = 0, ft = null, ed(t);
                                break;
                            }
                            t = function() {
                                me !== 2 && me !== 9 || Re !== e || (me = 7), Ct(e);
                            }, u.then(t, t);
                            break e;
                        case 3:
                            me = 7;
                            break e;
                        case 4:
                            me = 5;
                            break e;
                        case 7:
                            oo(u) ? (me = 0, ft = null, ed(t)) : (me = 0, ft = null, Na(e, t, u, 7));
                            break;
                        case 5:
                            var c = null;
                            switch(re.tag){
                                case 26:
                                    c = re.memoizedState;
                                case 5:
                                case 27:
                                    var d = re;
                                    if (!c || qd(c)) {
                                        me = 0, ft = null;
                                        var y = d.sibling;
                                        if (y !== null) re = y;
                                        else {
                                            var A = d.return;
                                            A !== null ? (re = A, wu(A)) : re = null;
                                        }
                                        break t;
                                    }
                            }
                            me = 0, ft = null, Na(e, t, u, 5);
                            break;
                        case 6:
                            me = 0, ft = null, Na(e, t, u, 6);
                            break;
                        case 8:
                            Fr(), Ne = 6;
                            break e;
                        default:
                            throw Error(f(462));
                    }
                }
                Lm();
                break;
            } catch (B) {
                $s(e, B);
            }
            while (!0);
            return jt = Pl = null, z.H = a, z.A = n, pe = l, re !== null ? 0 : (Re = null, se = 0, nu(), Ne);
        }
        function Lm() {
            for(; re !== null && !cp();)Is(re);
        }
        function Is(e) {
            var t = _s(e.alternate, e, $t);
            e.memoizedProps = e.pendingProps, t === null ? wu(e) : re = t;
        }
        function ed(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Ss(l, t, t.pendingProps, t.type, void 0, se);
                    break;
                case 11:
                    t = Ss(l, t, t.pendingProps, t.type.render, t.ref, se);
                    break;
                case 5:
                    mr(t);
                default:
                    Ms(l, t), t = re = eo(t, $t), t = _s(l, t, $t);
            }
            e.memoizedProps = e.pendingProps, t === null ? wu(e) : re = t;
        }
        function Na(e, t, l, a) {
            jt = Pl = null, mr(t), ga = null, dn = 0;
            var n = t.return;
            try {
                if (Dm(e, n, t, l, se)) {
                    Ne = 1, Mu(e, mt(l, e.current)), re = null;
                    return;
                }
            } catch (u) {
                if (n !== null) throw re = n, u;
                Ne = 1, Mu(e, mt(l, e.current)), re = null;
                return;
            }
            t.flags & 32768 ? (he || a === 1 ? e = !0 : Ra || (se & 536870912) !== 0 ? e = !1 : (ml = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = bt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), td(t, e)) : wu(t);
        }
        function wu(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    td(t, ml);
                    return;
                }
                e = t.return;
                var l = zm(t.alternate, t, $t);
                if (l !== null) {
                    re = l;
                    return;
                }
                if (t = t.sibling, t !== null) {
                    re = t;
                    return;
                }
                re = t = e;
            }while (t !== null);
            Ne === 0 && (Ne = 5);
        }
        function td(e, t) {
            do {
                var l = Bm(e.alternate, e);
                if (l !== null) {
                    l.flags &= 32767, re = l;
                    return;
                }
                if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
                    re = e;
                    return;
                }
                re = e = l;
            }while (e !== null);
            Ne = 6, re = null;
        }
        function ld(e, t, l, a, n, u, c, d, y) {
            e.cancelPendingCommit = null;
            do Pu();
            while (Ge !== 0);
            if ((pe & 6) !== 0) throw Error(f(327));
            if (t !== null) {
                if (t === e.current) throw Error(f(177));
                if (u = t.lanes | t.childLanes, u |= Gi, gp(e, l, u, c, d, y), e === Re && (re = Re = null, se = 0), Oa = t, gl = e, Aa = l, Jr = u, $r = n, Vs = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Gm(Kn, function() {
                    return rd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                    a = z.T, z.T = null, n = V.p, V.p = 2, c = pe, pe |= 4;
                    try {
                        Um(e, t, l);
                    } finally{
                        pe = c, V.p = n, z.T = a;
                    }
                }
                Ge = 1, ad(), nd(), ud();
            }
        }
        function ad() {
            if (Ge === 1) {
                Ge = 0;
                var e = gl, t = Oa, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = z.T, z.T = null;
                    var a = V.p;
                    V.p = 2;
                    var n = pe;
                    pe |= 4;
                    try {
                        Qs(t, e);
                        var u = dc, c = Gf(e.containerInfo), d = u.focusedElem, y = u.selectionRange;
                        if (c !== d && d && d.ownerDocument && Kf(d.ownerDocument.documentElement, d)) {
                            if (y !== null && Qi(d)) {
                                var A = y.start, B = y.end;
                                if (B === void 0 && (B = A), "selectionStart" in d) d.selectionStart = A, d.selectionEnd = Math.min(B, d.value.length);
                                else {
                                    var q = d.ownerDocument || document, M = q && q.defaultView || window;
                                    if (M.getSelection) {
                                        var D = M.getSelection(), le = d.textContent.length, I = Math.min(y.start, le), be = y.end === void 0 ? I : Math.min(y.end, le);
                                        !D.extend && I > be && (c = be, be = I, I = c);
                                        var R = jf(d, I), b = jf(d, be);
                                        if (R && b && (D.rangeCount !== 1 || D.anchorNode !== R.node || D.anchorOffset !== R.offset || D.focusNode !== b.node || D.focusOffset !== b.offset)) {
                                            var O = q.createRange();
                                            O.setStart(R.node, R.offset), D.removeAllRanges(), I > be ? (D.addRange(O), D.extend(b.node, b.offset)) : (O.setEnd(b.node, b.offset), D.addRange(O));
                                        }
                                    }
                                }
                            }
                            for(q = [], D = d; D = D.parentNode;)D.nodeType === 1 && q.push({
                                element: D,
                                left: D.scrollLeft,
                                top: D.scrollTop
                            });
                            for(typeof d.focus == "function" && d.focus(), d = 0; d < q.length; d++){
                                var C = q[d];
                                C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
                            }
                        }
                        $u = !!sc, dc = sc = null;
                    } finally{
                        pe = n, V.p = a, z.T = l;
                    }
                }
                e.current = t, Ge = 2;
            }
        }
        function nd() {
            if (Ge === 2) {
                Ge = 0;
                var e = gl, t = Oa, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = z.T, z.T = null;
                    var a = V.p;
                    V.p = 2;
                    var n = pe;
                    pe |= 4;
                    try {
                        qs(e, t.alternate, t);
                    } finally{
                        pe = n, V.p = a, z.T = l;
                    }
                }
                Ge = 3;
            }
        }
        function ud() {
            if (Ge === 4 || Ge === 3) {
                Ge = 0, fp();
                var e = gl, t = Oa, l = Aa, a = Vs;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ge = 5 : (Ge = 0, Oa = gl = null, id(e, e.pendingLanes));
                var n = e.pendingLanes;
                if (n === 0 && (vl = null), gi(l), t = t.stateNode, at && typeof at.onCommitFiberRoot == "function") try {
                    at.onCommitFiberRoot(Ha, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (a !== null) {
                    t = z.T, n = V.p, V.p = 2, z.T = null;
                    try {
                        for(var u = e.onRecoverableError, c = 0; c < a.length; c++){
                            var d = a[c];
                            u(d.value, {
                                componentStack: d.stack
                            });
                        }
                    } finally{
                        z.T = t, V.p = n;
                    }
                }
                (Aa & 3) !== 0 && Pu(), Ct(e), n = e.pendingLanes, (l & 4194090) !== 0 && (n & 42) !== 0 ? e === Wr ? En++ : (En = 0, Wr = e) : En = 0, Rn(0);
            }
        }
        function id(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, en(t)));
        }
        function Pu(e) {
            return ad(), nd(), ud(), rd();
        }
        function rd() {
            if (Ge !== 5) return !1;
            var e = gl, t = Jr;
            Jr = 0;
            var l = gi(Aa), a = z.T, n = V.p;
            try {
                V.p = 32 > l ? 32 : l, z.T = null, l = $r, $r = null;
                var u = gl, c = Aa;
                if (Ge = 0, Oa = gl = null, Aa = 0, (pe & 6) !== 0) throw Error(f(331));
                var d = pe;
                if (pe |= 4, Gs(u.current), Ys(u, u.current, c, l), pe = d, Rn(0, !1), at && typeof at.onPostCommitFiberRoot == "function") try {
                    at.onPostCommitFiberRoot(Ha, u);
                } catch  {}
                return !0;
            } finally{
                V.p = n, z.T = a, id(e, t);
            }
        }
        function cd(e, t, l) {
            t = mt(l, t), t = Dr(e.stateNode, t, 2), e = cl(e, t, 2), e !== null && (Pa(e, 2), Ct(e));
        }
        function Ee(e, t, l) {
            if (e.tag === 3) cd(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    cd(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (vl === null || !vl.has(a))) {
                        e = mt(l, e), l = ds(2), a = cl(t, l, 2), a !== null && (hs(l, a, t, e), Pa(a, 2), Ct(a));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function tc(e, t, l) {
            var a = e.pingCache;
            if (a === null) {
                a = e.pingCache = new Hm;
                var n = new Set;
                a.set(t, n);
            } else n = a.get(t), n === void 0 && (n = new Set, a.set(t, n));
            n.has(l) || (Xr = !0, n.add(l), e = Ym.bind(null, e, t, l), t.then(e, e));
        }
        function Ym(e, t, l) {
            var a = e.pingCache;
            a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Re === e && (se & l) === l && (Ne === 4 || Ne === 3 && (se & 62914560) === se && 300 > Dt() - kr ? (pe & 2) === 0 && _a(e, 0) : Vr |= l, Ta === se && (Ta = 0)), Ct(e);
        }
        function fd(e, t) {
            t === 0 && (t = af()), e = ca(e, t), e !== null && (Pa(e, t), Ct(e));
        }
        function jm(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), fd(e, l);
        }
        function Km(e, t) {
            var l = 0;
            switch(e.tag){
                case 13:
                    var a = e.stateNode, n = e.memoizedState;
                    n !== null && (l = n.retryLane);
                    break;
                case 19:
                    a = e.stateNode;
                    break;
                case 22:
                    a = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(f(314));
            }
            a !== null && a.delete(t), fd(e, l);
        }
        function Gm(e, t) {
            return pi(e, t);
        }
        var Qu = null, Ma = null, lc = !1, Lu = !1, ac = !1, Xl = 0;
        function Ct(e) {
            e !== Ma && e.next === null && (Ma === null ? Qu = Ma = e : Ma = Ma.next = e), Lu = !0, lc || (lc = !0, Vm());
        }
        function Rn(e, t) {
            if (!ac && Lu) {
                ac = !0;
                do for(var l = !1, a = Qu; a !== null;){
                    if (e !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0) var u = 0;
                        else {
                            var c = a.suspendedLanes, d = a.pingedLanes;
                            u = (1 << 31 - nt(42 | e) + 1) - 1, u &= n & ~(c & ~d), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
                        }
                        u !== 0 && (l = !0, hd(a, u));
                    } else u = se, u = Vn(a, a === Re ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || wa(a, u) || (l = !0, hd(a, u));
                    a = a.next;
                }
                while (l);
                ac = !1;
            }
        }
        function Xm() {
            od();
        }
        function od() {
            Lu = lc = !1;
            var e = 0;
            Xl !== 0 && (e1() && (e = Xl), Xl = 0);
            for(var t = Dt(), l = null, a = Qu; a !== null;){
                var n = a.next, u = sd(a, t);
                u === 0 ? (a.next = null, l === null ? Qu = n : l.next = n, n === null && (Ma = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Lu = !0)), a = n;
            }
            Rn(e);
        }
        function sd(e, t) {
            for(var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u;){
                var c = 31 - nt(u), d = 1 << c, y = n[c];
                y === -1 ? ((d & l) === 0 || (d & a) !== 0) && (n[c] = vp(d, t)) : y <= t && (e.expiredLanes |= d), u &= ~d;
            }
            if (t = Re, l = se, l = Vn(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (me === 2 || me === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && mi(a), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || wa(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(a !== null && mi(a), gi(l)){
                    case 2:
                    case 8:
                        l = ef;
                        break;
                    case 32:
                        l = Kn;
                        break;
                    case 268435456:
                        l = tf;
                        break;
                    default:
                        l = Kn;
                }
                return a = dd.bind(null, e), l = pi(l, a), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return a !== null && a !== null && mi(a), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function dd(e, t) {
            if (Ge !== 0 && Ge !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (Pu() && e.callbackNode !== l) return null;
            var a = se;
            return a = Vn(e, e === Re ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (ks(e, a, t), sd(e, Dt()), e.callbackNode != null && e.callbackNode === l ? dd.bind(null, e) : null);
        }
        function hd(e, t) {
            if (Pu()) return null;
            ks(e, t, !0);
        }
        function Vm() {
            l1(function() {
                (pe & 6) !== 0 ? pi(Ic, Xm) : od();
            });
        }
        function nc() {
            return Xl === 0 && (Xl = lf()), Xl;
        }
        function pd(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Wn("" + e);
        }
        function md(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function Zm(e, t, l, a, n) {
            if (t === "submit" && l && l.stateNode === n) {
                var u = pd((n[Fe] || null).action), c = a.submitter;
                c && (t = (t = c[Fe] || null) ? pd(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
                var d = new tu("action", "action", null, a, n);
                e.push({
                    event: d,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (a.defaultPrevented) {
                                    if (Xl !== 0) {
                                        var y = c ? md(n, c) : new FormData(n);
                                        Or(l, {
                                            pending: !0,
                                            data: y,
                                            method: n.method,
                                            action: u
                                        }, null, y);
                                    }
                                } else typeof u == "function" && (d.preventDefault(), y = c ? md(n, c) : new FormData(n), Or(l, {
                                    pending: !0,
                                    data: y,
                                    method: n.method,
                                    action: u
                                }, u, y));
                            },
                            currentTarget: n
                        }
                    ]
                });
            }
        }
        for(var uc = 0; uc < Ki.length; uc++){
            var ic = Ki[uc], km = ic.toLowerCase(), Jm = ic[0].toUpperCase() + ic.slice(1);
            At(km, "on" + Jm);
        }
        At(Zf, "onAnimationEnd"), At(kf, "onAnimationIteration"), At(Jf, "onAnimationStart"), At("dblclick", "onDoubleClick"), At("focusin", "onFocus"), At("focusout", "onBlur"), At(dm, "onTransitionRun"), At(hm, "onTransitionStart"), At(pm, "onTransitionCancel"), At($f, "onTransitionEnd"), Fl("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), Fl("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), Fl("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), Fl("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), Dl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Dl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Dl("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), Dl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Dl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Dl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Tn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $m = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tn));
        function yd(e, t) {
            t = (t & 4) !== 0;
            for(var l = 0; l < e.length; l++){
                var a = e[l], n = a.event;
                a = a.listeners;
                e: {
                    var u = void 0;
                    if (t) for(var c = a.length - 1; 0 <= c; c--){
                        var d = a[c], y = d.instance, A = d.currentTarget;
                        if (d = d.listener, y !== u && n.isPropagationStopped()) break e;
                        u = d, n.currentTarget = A;
                        try {
                            u(n);
                        } catch (B) {
                            Nu(B);
                        }
                        n.currentTarget = null, u = y;
                    }
                    else for(c = 0; c < a.length; c++){
                        if (d = a[c], y = d.instance, A = d.currentTarget, d = d.listener, y !== u && n.isPropagationStopped()) break e;
                        u = d, n.currentTarget = A;
                        try {
                            u(n);
                        } catch (B) {
                            Nu(B);
                        }
                        n.currentTarget = null, u = y;
                    }
                }
            }
        }
        function ce(e, t) {
            var l = t[bi];
            l === void 0 && (l = t[bi] = new Set);
            var a = e + "__bubble";
            l.has(a) || (vd(t, e, 2, !1), l.add(a));
        }
        function rc(e, t, l) {
            var a = 0;
            t && (a |= 4), vd(l, e, a, t);
        }
        var Yu = "_reactListening" + Math.random().toString(36).slice(2);
        function cc(e) {
            if (!e[Yu]) {
                e[Yu] = !0, ff.forEach(function(l) {
                    l !== "selectionchange" && ($m.has(l) || rc(l, !1, e), rc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[Yu] || (t[Yu] = !0, rc("selectionchange", !1, t));
            }
        }
        function vd(e, t, l, a) {
            switch(Yd(t)){
                case 2:
                    var n = T1;
                    break;
                case 8:
                    n = O1;
                    break;
                default:
                    n = Rc;
            }
            l = n.bind(null, t, l, e), n = void 0, !xi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
                capture: !0,
                passive: n
            }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
                passive: n
            }) : e.addEventListener(t, l, !1);
        }
        function fc(e, t, l, a, n) {
            var u = a;
            if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for(;;){
                if (a === null) return;
                var c = a.tag;
                if (c === 3 || c === 4) {
                    var d = a.stateNode.containerInfo;
                    if (d === n) break;
                    if (c === 4) for(c = a.return; c !== null;){
                        var y = c.tag;
                        if ((y === 3 || y === 4) && c.stateNode.containerInfo === n) return;
                        c = c.return;
                    }
                    for(; d !== null;){
                        if (c = Jl(d), c === null) return;
                        if (y = c.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                            a = u = c;
                            continue e;
                        }
                        d = d.parentNode;
                    }
                }
                a = a.return;
            }
            Tf(function() {
                var A = u, B = Mi(l), q = [];
                e: {
                    var M = Wf.get(e);
                    if (M !== void 0) {
                        var D = tu, le = e;
                        switch(e){
                            case "keypress":
                                if (In(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                D = Gp;
                                break;
                            case "focusin":
                                le = "focus", D = Ci;
                                break;
                            case "focusout":
                                le = "blur", D = Ci;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                D = Ci;
                                break;
                            case "click":
                                if (l.button === 2) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                D = _f;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                D = Bp;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                D = Zp;
                                break;
                            case Zf:
                            case kf:
                            case Jf:
                                D = qp;
                                break;
                            case $f:
                                D = Jp;
                                break;
                            case "scroll":
                            case "scrollend":
                                D = xp;
                                break;
                            case "wheel":
                                D = Wp;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                D = wp;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                D = Mf;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                D = Ip;
                        }
                        var I = (t & 4) !== 0, be = !I && (e === "scroll" || e === "scrollend"), R = I ? M !== null ? M + "Capture" : null : M;
                        I = [];
                        for(var b = A, O; b !== null;){
                            var C = b;
                            if (O = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || O === null || R === null || (C = Ya(b, R), C != null && I.push(On(b, C, O))), be) break;
                            b = b.return;
                        }
                        0 < I.length && (M = new D(M, le, null, l, B), q.push({
                            event: M,
                            listeners: I
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (M = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", M && l !== Ni && (le = l.relatedTarget || l.fromElement) && (Jl(le) || le[kl])) break e;
                        if ((D || M) && (M = B.window === B ? B : (M = B.ownerDocument) ? M.defaultView || M.parentWindow : window, D ? (le = l.relatedTarget || l.toElement, D = A, le = le ? Jl(le) : null, le !== null && (be = h(le), I = le.tag, le !== be || I !== 5 && I !== 27 && I !== 6) && (le = null)) : (D = null, le = A), D !== le)) {
                            if (I = _f, C = "onMouseLeave", R = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (I = Mf, C = "onPointerLeave", R = "onPointerEnter", b = "pointer"), be = D == null ? M : La(D), O = le == null ? M : La(le), M = new I(C, b + "leave", D, l, B), M.target = be, M.relatedTarget = O, C = null, Jl(B) === A && (I = new I(R, b + "enter", le, l, B), I.target = O, I.relatedTarget = be, C = I), be = C, D && le) t: {
                                for(I = D, R = le, b = 0, O = I; O; O = Da(O))b++;
                                for(O = 0, C = R; C; C = Da(C))O++;
                                for(; 0 < b - O;)I = Da(I), b--;
                                for(; 0 < O - b;)R = Da(R), O--;
                                for(; b--;){
                                    if (I === R || R !== null && I === R.alternate) break t;
                                    I = Da(I), R = Da(R);
                                }
                                I = null;
                            }
                            else I = null;
                            D !== null && gd(q, M, D, I, !1), le !== null && be !== null && gd(q, be, le, I, !0);
                        }
                    }
                    e: {
                        if (M = A ? La(A) : window, D = M.nodeName && M.nodeName.toLowerCase(), D === "select" || D === "input" && M.type === "file") var Z = Hf;
                        else if (Cf(M)) if (wf) Z = fm;
                        else {
                            Z = rm;
                            var ie = im;
                        }
                        else D = M.nodeName, !D || D.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? A && _i(A.elementType) && (Z = Hf) : Z = cm;
                        if (Z && (Z = Z(e, A))) {
                            qf(q, Z, l, B);
                            break e;
                        }
                        ie && ie(e, M, A), e === "focusout" && A && M.type === "number" && A.memoizedProps.value != null && Ai(M, "number", M.value);
                    }
                    switch(ie = A ? La(A) : window, e){
                        case "focusin":
                            (Cf(ie) || ie.contentEditable === "true") && (ua = ie, Li = A, Ja = null);
                            break;
                        case "focusout":
                            Ja = Li = ua = null;
                            break;
                        case "mousedown":
                            Yi = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            Yi = !1, Xf(q, l, B);
                            break;
                        case "selectionchange":
                            if (sm) break;
                        case "keydown":
                        case "keyup":
                            Xf(q, l, B);
                    }
                    var $;
                    if (Hi) e: {
                        switch(e){
                            case "compositionstart":
                                var ee = "onCompositionStart";
                                break e;
                            case "compositionend":
                                ee = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                ee = "onCompositionUpdate";
                                break e;
                        }
                        ee = void 0;
                    }
                    else na ? Bf(e, l) && (ee = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ee = "onCompositionStart");
                    ee && (Df && l.locale !== "ko" && (na || ee !== "onCompositionStart" ? ee === "onCompositionEnd" && na && ($ = Of()) : (nl = B, zi = "value" in nl ? nl.value : nl.textContent, na = !0)), ie = ju(A, ee), 0 < ie.length && (ee = new Nf(ee, e, null, l, B), q.push({
                        event: ee,
                        listeners: ie
                    }), $ ? ee.data = $ : ($ = Uf(l), $ !== null && (ee.data = $)))), ($ = tm ? lm(e, l) : am(e, l)) && (ee = ju(A, "onBeforeInput"), 0 < ee.length && (ie = new Nf("onBeforeInput", "beforeinput", null, l, B), q.push({
                        event: ie,
                        listeners: ee
                    }), ie.data = $)), Zm(q, e, A, l, B);
                }
                yd(q, t);
            });
        }
        function On(e, t, l) {
            return {
                instance: e,
                listener: t,
                currentTarget: l
            };
        }
        function ju(e, t) {
            for(var l = t + "Capture", a = []; e !== null;){
                var n = e, u = n.stateNode;
                if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ya(e, l), n != null && a.unshift(On(e, n, u)), n = Ya(e, t), n != null && a.push(On(e, n, u))), e.tag === 3) return a;
                e = e.return;
            }
            return [];
        }
        function Da(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function gd(e, t, l, a, n) {
            for(var u = t._reactName, c = []; l !== null && l !== a;){
                var d = l, y = d.alternate, A = d.stateNode;
                if (d = d.tag, y !== null && y === a) break;
                d !== 5 && d !== 26 && d !== 27 || A === null || (y = A, n ? (A = Ya(l, u), A != null && c.unshift(On(l, A, y))) : n || (A = Ya(l, u), A != null && c.push(On(l, A, y)))), l = l.return;
            }
            c.length !== 0 && e.push({
                event: t,
                listeners: c
            });
        }
        var Wm = /\r\n?/g, Fm = /\u0000|\uFFFD/g;
        function bd(e) {
            return (typeof e == "string" ? e : "" + e).replace(Wm, `
`).replace(Fm, "");
        }
        function Sd(e, t) {
            return t = bd(t), bd(e) === t;
        }
        function Ku() {}
        function ge(e, t, l, a, n, u) {
            switch(l){
                case "children":
                    typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ta(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ta(e, "" + a);
                    break;
                case "className":
                    kn(e, "class", a);
                    break;
                case "tabIndex":
                    kn(e, "tabindex", a);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    kn(e, l, a);
                    break;
                case "style":
                    Ef(e, a, u);
                    break;
                case "data":
                    if (t !== "object") {
                        kn(e, "data", a);
                        break;
                    }
                case "src":
                case "href":
                    if (a === "" && (t !== "a" || l !== "href")) {
                        e.removeAttribute(l);
                        break;
                    }
                    if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                        e.removeAttribute(l);
                        break;
                    }
                    a = Wn("" + a), e.setAttribute(l, a);
                    break;
                case "action":
                case "formAction":
                    if (typeof a == "function") {
                        e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof u == "function" && (l === "formAction" ? (t !== "input" && ge(e, t, "name", n.name, n, null), ge(e, t, "formEncType", n.formEncType, n, null), ge(e, t, "formMethod", n.formMethod, n, null), ge(e, t, "formTarget", n.formTarget, n, null)) : (ge(e, t, "encType", n.encType, n, null), ge(e, t, "method", n.method, n, null), ge(e, t, "target", n.target, n, null)));
                    if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                        e.removeAttribute(l);
                        break;
                    }
                    a = Wn("" + a), e.setAttribute(l, a);
                    break;
                case "onClick":
                    a != null && (e.onclick = Ku);
                    break;
                case "onScroll":
                    a != null && ce("scroll", e);
                    break;
                case "onScrollEnd":
                    a != null && ce("scrollend", e);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
                        if (l = a.__html, l != null) {
                            if (n.children != null) throw Error(f(60));
                            e.innerHTML = l;
                        }
                    }
                    break;
                case "multiple":
                    e.multiple = a && typeof a != "function" && typeof a != "symbol";
                    break;
                case "muted":
                    e.muted = a && typeof a != "function" && typeof a != "symbol";
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                    break;
                case "autoFocus":
                    break;
                case "xlinkHref":
                    if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                        e.removeAttribute("xlink:href");
                        break;
                    }
                    l = Wn("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
                    break;
                case "capture":
                case "download":
                    a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
                    break;
                case "rowSpan":
                case "start":
                    a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
                    break;
                case "popover":
                    ce("beforetoggle", e), ce("toggle", e), Zn(e, "popover", a);
                    break;
                case "xlinkActuate":
                    wt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                    break;
                case "xlinkArcrole":
                    wt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                    break;
                case "xlinkRole":
                    wt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                    break;
                case "xlinkShow":
                    wt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                    break;
                case "xlinkTitle":
                    wt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                    break;
                case "xlinkType":
                    wt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                    break;
                case "xmlBase":
                    wt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                    break;
                case "xmlLang":
                    wt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                    break;
                case "xmlSpace":
                    wt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                    break;
                case "is":
                    Zn(e, "is", a);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Mp.get(l) || l, Zn(e, l, a));
            }
        }
        function oc(e, t, l, a, n, u) {
            switch(l){
                case "style":
                    Ef(e, a, u);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
                        if (l = a.__html, l != null) {
                            if (n.children != null) throw Error(f(60));
                            e.innerHTML = l;
                        }
                    }
                    break;
                case "children":
                    typeof a == "string" ? ta(e, a) : (typeof a == "number" || typeof a == "bigint") && ta(e, "" + a);
                    break;
                case "onScroll":
                    a != null && ce("scroll", e);
                    break;
                case "onScrollEnd":
                    a != null && ce("scrollend", e);
                    break;
                case "onClick":
                    a != null && (e.onclick = Ku);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    if (!of.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[Fe] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
                            typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
                            break e;
                        }
                        l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Zn(e, l, a);
                    }
            }
        }
        function Xe(e, t, l) {
            switch(t){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    ce("error", e), ce("load", e);
                    var a = !1, n = !1, u;
                    for(u in l)if (l.hasOwnProperty(u)) {
                        var c = l[u];
                        if (c != null) switch(u){
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                n = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(f(137, t));
                            default:
                                ge(e, t, u, c, l, null);
                        }
                    }
                    n && ge(e, t, "srcSet", l.srcSet, l, null), a && ge(e, t, "src", l.src, l, null);
                    return;
                case "input":
                    ce("invalid", e);
                    var d = u = c = n = null, y = null, A = null;
                    for(a in l)if (l.hasOwnProperty(a)) {
                        var B = l[a];
                        if (B != null) switch(a){
                            case "name":
                                n = B;
                                break;
                            case "type":
                                c = B;
                                break;
                            case "checked":
                                y = B;
                                break;
                            case "defaultChecked":
                                A = B;
                                break;
                            case "value":
                                u = B;
                                break;
                            case "defaultValue":
                                d = B;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (B != null) throw Error(f(137, t));
                                break;
                            default:
                                ge(e, t, a, B, l, null);
                        }
                    }
                    vf(e, u, d, y, A, c, n, !1), Jn(e);
                    return;
                case "select":
                    ce("invalid", e), a = c = u = null;
                    for(n in l)if (l.hasOwnProperty(n) && (d = l[n], d != null)) switch(n){
                        case "value":
                            u = d;
                            break;
                        case "defaultValue":
                            c = d;
                            break;
                        case "multiple":
                            a = d;
                        default:
                            ge(e, t, n, d, l, null);
                    }
                    t = u, l = c, e.multiple = !!a, t != null ? ea(e, !!a, t, !1) : l != null && ea(e, !!a, l, !0);
                    return;
                case "textarea":
                    ce("invalid", e), u = n = a = null;
                    for(c in l)if (l.hasOwnProperty(c) && (d = l[c], d != null)) switch(c){
                        case "value":
                            a = d;
                            break;
                        case "defaultValue":
                            n = d;
                            break;
                        case "children":
                            u = d;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (d != null) throw Error(f(91));
                            break;
                        default:
                            ge(e, t, c, d, l, null);
                    }
                    bf(e, a, n, u), Jn(e);
                    return;
                case "option":
                    for(y in l)if (l.hasOwnProperty(y) && (a = l[y], a != null)) switch(y){
                        case "selected":
                            e.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            ge(e, t, y, a, l, null);
                    }
                    return;
                case "dialog":
                    ce("beforetoggle", e), ce("toggle", e), ce("cancel", e), ce("close", e);
                    break;
                case "iframe":
                case "object":
                    ce("load", e);
                    break;
                case "video":
                case "audio":
                    for(a = 0; a < Tn.length; a++)ce(Tn[a], e);
                    break;
                case "image":
                    ce("error", e), ce("load", e);
                    break;
                case "details":
                    ce("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    ce("error", e), ce("load", e);
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for(A in l)if (l.hasOwnProperty(A) && (a = l[A], a != null)) switch(A){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(f(137, t));
                        default:
                            ge(e, t, A, a, l, null);
                    }
                    return;
                default:
                    if (_i(t)) {
                        for(B in l)l.hasOwnProperty(B) && (a = l[B], a !== void 0 && oc(e, t, B, a, l, void 0));
                        return;
                    }
            }
            for(d in l)l.hasOwnProperty(d) && (a = l[d], a != null && ge(e, t, d, a, l, null));
        }
        function Im(e, t, l, a) {
            switch(t){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "input":
                    var n = null, u = null, c = null, d = null, y = null, A = null, B = null;
                    for(D in l){
                        var q = l[D];
                        if (l.hasOwnProperty(D) && q != null) switch(D){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                y = q;
                            default:
                                a.hasOwnProperty(D) || ge(e, t, D, null, a, q);
                        }
                    }
                    for(var M in a){
                        var D = a[M];
                        if (q = l[M], a.hasOwnProperty(M) && (D != null || q != null)) switch(M){
                            case "type":
                                u = D;
                                break;
                            case "name":
                                n = D;
                                break;
                            case "checked":
                                A = D;
                                break;
                            case "defaultChecked":
                                B = D;
                                break;
                            case "value":
                                c = D;
                                break;
                            case "defaultValue":
                                d = D;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (D != null) throw Error(f(137, t));
                                break;
                            default:
                                D !== q && ge(e, t, M, D, a, q);
                        }
                    }
                    Oi(e, c, d, y, A, B, u, n);
                    return;
                case "select":
                    D = c = d = M = null;
                    for(u in l)if (y = l[u], l.hasOwnProperty(u) && y != null) switch(u){
                        case "value":
                            break;
                        case "multiple":
                            D = y;
                        default:
                            a.hasOwnProperty(u) || ge(e, t, u, null, a, y);
                    }
                    for(n in a)if (u = a[n], y = l[n], a.hasOwnProperty(n) && (u != null || y != null)) switch(n){
                        case "value":
                            M = u;
                            break;
                        case "defaultValue":
                            d = u;
                            break;
                        case "multiple":
                            c = u;
                        default:
                            u !== y && ge(e, t, n, u, a, y);
                    }
                    t = d, l = c, a = D, M != null ? ea(e, !!l, M, !1) : !!a != !!l && (t != null ? ea(e, !!l, t, !0) : ea(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    D = M = null;
                    for(d in l)if (n = l[d], l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d)) switch(d){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            ge(e, t, d, null, a, n);
                    }
                    for(c in a)if (n = a[c], u = l[c], a.hasOwnProperty(c) && (n != null || u != null)) switch(c){
                        case "value":
                            M = n;
                            break;
                        case "defaultValue":
                            D = n;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (n != null) throw Error(f(91));
                            break;
                        default:
                            n !== u && ge(e, t, c, n, a, u);
                    }
                    gf(e, M, D);
                    return;
                case "option":
                    for(var le in l)if (M = l[le], l.hasOwnProperty(le) && M != null && !a.hasOwnProperty(le)) switch(le){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            ge(e, t, le, null, a, M);
                    }
                    for(y in a)if (M = a[y], D = l[y], a.hasOwnProperty(y) && M !== D && (M != null || D != null)) switch(y){
                        case "selected":
                            e.selected = M && typeof M != "function" && typeof M != "symbol";
                            break;
                        default:
                            ge(e, t, y, M, a, D);
                    }
                    return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                    for(var I in l)M = l[I], l.hasOwnProperty(I) && M != null && !a.hasOwnProperty(I) && ge(e, t, I, null, a, M);
                    for(A in a)if (M = a[A], D = l[A], a.hasOwnProperty(A) && M !== D && (M != null || D != null)) switch(A){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (M != null) throw Error(f(137, t));
                            break;
                        default:
                            ge(e, t, A, M, a, D);
                    }
                    return;
                default:
                    if (_i(t)) {
                        for(var be in l)M = l[be], l.hasOwnProperty(be) && M !== void 0 && !a.hasOwnProperty(be) && oc(e, t, be, void 0, a, M);
                        for(B in a)M = a[B], D = l[B], !a.hasOwnProperty(B) || M === D || M === void 0 && D === void 0 || oc(e, t, B, M, a, D);
                        return;
                    }
            }
            for(var R in l)M = l[R], l.hasOwnProperty(R) && M != null && !a.hasOwnProperty(R) && ge(e, t, R, null, a, M);
            for(q in a)M = a[q], D = l[q], !a.hasOwnProperty(q) || M === D || M == null && D == null || ge(e, t, q, M, a, D);
        }
        var sc = null, dc = null;
        function Gu(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function Ed(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function Rd(e, t) {
            if (e === 0) switch(t){
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
            return e === 1 && t === "foreignObject" ? 0 : e;
        }
        function hc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var pc = null;
        function e1() {
            var e = window.event;
            return e && e.type === "popstate" ? e === pc ? !1 : (pc = e, !0) : (pc = null, !1);
        }
        var Td = typeof setTimeout == "function" ? setTimeout : void 0, t1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Od = typeof Promise == "function" ? Promise : void 0, l1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(e) {
            return Od.resolve(null).then(e).catch(a1);
        } : Td;
        function a1(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Sl(e) {
            return e === "head";
        }
        function Ad(e, t) {
            var l = t, a = 0, n = 0;
            do {
                var u = l.nextSibling;
                if (e.removeChild(l), u && u.nodeType === 8) if (l = u.data, l === "/$") {
                    if (0 < a && 8 > a) {
                        l = a;
                        var c = e.ownerDocument;
                        if (l & 1 && An(c.documentElement), l & 2 && An(c.body), l & 4) for(l = c.head, An(l), c = l.firstChild; c;){
                            var d = c.nextSibling, y = c.nodeName;
                            c[Qa] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c), c = d;
                        }
                    }
                    if (n === 0) {
                        e.removeChild(u), Un(t);
                        return;
                    }
                    n--;
                } else l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
                else a = 0;
                l = u;
            }while (l);
            Un(t);
        }
        function mc(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var l = t;
                switch(t = t.nextSibling, l.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        mc(l), Si(l);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if (l.rel.toLowerCase() === "stylesheet") continue;
                }
                e.removeChild(l);
            }
        }
        function n1(e, t, l, a) {
            for(; e.nodeType === 1;){
                var n = l;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (a) {
                    if (!e[Qa]) switch(t){
                        case "meta":
                            if (!e.hasAttribute("itemprop")) break;
                            return e;
                        case "link":
                            if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
                            if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                        case "script":
                            if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                            return e;
                        default:
                            return e;
                    }
                } else if (t === "input" && e.type === "hidden") {
                    var u = n.name == null ? null : "" + n.name;
                    if (n.type === "hidden" && e.getAttribute("name") === u) return e;
                } else return e;
                if (e = Nt(e.nextSibling), e === null) break;
            }
            return null;
        }
        function u1(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Nt(e.nextSibling), e === null)) return null;
            return e;
        }
        function yc(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function i1(e, t) {
            var l = e.ownerDocument;
            if (e.data !== "$?" || l.readyState === "complete") t();
            else {
                var a = function() {
                    t(), l.removeEventListener("DOMContentLoaded", a);
                };
                l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
            }
        }
        function Nt(e) {
            for(; e != null; e = e.nextSibling){
                var t = e.nodeType;
                if (t === 1 || t === 3) break;
                if (t === 8) {
                    if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                    if (t === "/$") return null;
                }
            }
            return e;
        }
        var vc = null;
        function _d(e) {
            e = e.previousSibling;
            for(var t = 0; e;){
                if (e.nodeType === 8) {
                    var l = e.data;
                    if (l === "$" || l === "$!" || l === "$?") {
                        if (t === 0) return e;
                        t--;
                    } else l === "/$" && t++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        function Nd(e, t, l) {
            switch(t = Gu(l), e){
                case "html":
                    if (e = t.documentElement, !e) throw Error(f(452));
                    return e;
                case "head":
                    if (e = t.head, !e) throw Error(f(453));
                    return e;
                case "body":
                    if (e = t.body, !e) throw Error(f(454));
                    return e;
                default:
                    throw Error(f(451));
            }
        }
        function An(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            Si(e);
        }
        var Et = new Map, Md = new Set;
        function Xu(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var Wt = V.d;
        V.d = {
            f: r1,
            r: c1,
            D: f1,
            C: o1,
            L: s1,
            m: d1,
            X: p1,
            S: h1,
            M: m1
        };
        function r1() {
            var e = Wt.f(), t = Hu();
            return e || t;
        }
        function c1(e) {
            var t = $l(e);
            t !== null && t.tag === 5 && t.type === "form" ? ko(t) : Wt.r(e);
        }
        var xa = typeof document > "u" ? null : document;
        function Dd(e, t, l) {
            var a = xa;
            if (a && typeof t == "string" && t) {
                var n = pt(t);
                n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Md.has(n) || (Md.add(n), e = {
                    rel: e,
                    crossOrigin: l,
                    href: t
                }, a.querySelector(n) === null && (t = a.createElement("link"), Xe(t, "link", e), Pe(t), a.head.appendChild(t)));
            }
        }
        function f1(e) {
            Wt.D(e), Dd("dns-prefetch", e, null);
        }
        function o1(e, t) {
            Wt.C(e, t), Dd("preconnect", e, t);
        }
        function s1(e, t, l) {
            Wt.L(e, t, l);
            var a = xa;
            if (a && e && t) {
                var n = 'link[rel="preload"][as="' + pt(t) + '"]';
                t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + pt(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + pt(l.imageSizes) + '"]')) : n += '[href="' + pt(e) + '"]';
                var u = n;
                switch(t){
                    case "style":
                        u = za(e);
                        break;
                    case "script":
                        u = Ba(e);
                }
                Et.has(u) || (e = E({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), Et.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(_n(u)) || t === "script" && a.querySelector(Nn(u)) || (t = a.createElement("link"), Xe(t, "link", e), Pe(t), a.head.appendChild(t)));
            }
        }
        function d1(e, t) {
            Wt.m(e, t);
            var l = xa;
            if (l && e) {
                var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + pt(a) + '"][href="' + pt(e) + '"]', u = n;
                switch(a){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        u = Ba(e);
                }
                if (!Et.has(u) && (e = E({
                    rel: "modulepreload",
                    href: e
                }, t), Et.set(u, e), l.querySelector(n) === null)) {
                    switch(a){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (l.querySelector(Nn(u))) return;
                    }
                    a = l.createElement("link"), Xe(a, "link", e), Pe(a), l.head.appendChild(a);
                }
            }
        }
        function h1(e, t, l) {
            Wt.S(e, t, l);
            var a = xa;
            if (a && e) {
                var n = Wl(a).hoistableStyles, u = za(e);
                t = t || "default";
                var c = n.get(u);
                if (!c) {
                    var d = {
                        loading: 0,
                        preload: null
                    };
                    if (c = a.querySelector(_n(u))) d.loading = 5;
                    else {
                        e = E({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = Et.get(u)) && gc(e, l);
                        var y = c = a.createElement("link");
                        Pe(y), Xe(y, "link", e), y._p = new Promise(function(A, B) {
                            y.onload = A, y.onerror = B;
                        }), y.addEventListener("load", function() {
                            d.loading |= 1;
                        }), y.addEventListener("error", function() {
                            d.loading |= 2;
                        }), d.loading |= 4, Vu(c, t, a);
                    }
                    c = {
                        type: "stylesheet",
                        instance: c,
                        count: 1,
                        state: d
                    }, n.set(u, c);
                }
            }
        }
        function p1(e, t) {
            Wt.X(e, t);
            var l = xa;
            if (l && e) {
                var a = Wl(l).hoistableScripts, n = Ba(e), u = a.get(n);
                u || (u = l.querySelector(Nn(n)), u || (e = E({
                    src: e,
                    async: !0
                }, t), (t = Et.get(n)) && bc(e, t), u = l.createElement("script"), Pe(u), Xe(u, "link", e), l.head.appendChild(u)), u = {
                    type: "script",
                    instance: u,
                    count: 1,
                    state: null
                }, a.set(n, u));
            }
        }
        function m1(e, t) {
            Wt.M(e, t);
            var l = xa;
            if (l && e) {
                var a = Wl(l).hoistableScripts, n = Ba(e), u = a.get(n);
                u || (u = l.querySelector(Nn(n)), u || (e = E({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Et.get(n)) && bc(e, t), u = l.createElement("script"), Pe(u), Xe(u, "link", e), l.head.appendChild(u)), u = {
                    type: "script",
                    instance: u,
                    count: 1,
                    state: null
                }, a.set(n, u));
            }
        }
        function xd(e, t, l, a) {
            var n = (n = F.current) ? Xu(n) : null;
            if (!n) throw Error(f(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (t = za(l.href), l = Wl(n).hoistableStyles, a = l.get(t), a || (a = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, l.set(t, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                        e = za(l.href);
                        var u = Wl(n).hoistableStyles, c = u.get(e);
                        if (c || (n = n.ownerDocument || n, c = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(e, c), (u = n.querySelector(_n(e))) && !u._p && (c.instance = u, c.state.loading = 5), Et.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, Et.set(e, l), u || y1(n, e, l, c.state))), t && a === null) throw Error(f(528, ""));
                        return c;
                    }
                    if (t && a !== null) throw Error(f(529, ""));
                    return null;
                case "script":
                    return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ba(l), l = Wl(n).hoistableScripts, a = l.get(t), a || (a = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, l.set(t, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(f(444, e));
            }
        }
        function za(e) {
            return 'href="' + pt(e) + '"';
        }
        function _n(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function zd(e) {
            return E({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function y1(e, t, l, a) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
                return a.loading |= 1;
            }), t.addEventListener("error", function() {
                return a.loading |= 2;
            }), Xe(t, "link", l), Pe(t), e.head.appendChild(t));
        }
        function Ba(e) {
            return '[src="' + pt(e) + '"]';
        }
        function Nn(e) {
            return "script[async]" + e;
        }
        function Bd(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var a = e.querySelector('style[data-href~="' + pt(l.href) + '"]');
                    if (a) return t.instance = a, Pe(a), a;
                    var n = E({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return a = (e.ownerDocument || e).createElement("style"), Pe(a), Xe(a, "style", n), Vu(a, l.precedence, e), t.instance = a;
                case "stylesheet":
                    n = za(l.href);
                    var u = e.querySelector(_n(n));
                    if (u) return t.state.loading |= 4, t.instance = u, Pe(u), u;
                    a = zd(l), (n = Et.get(n)) && gc(a, n), u = (e.ownerDocument || e).createElement("link"), Pe(u);
                    var c = u;
                    return c._p = new Promise(function(d, y) {
                        c.onload = d, c.onerror = y;
                    }), Xe(u, "link", a), t.state.loading |= 4, Vu(u, l.precedence, e), t.instance = u;
                case "script":
                    return u = Ba(l.src), (n = e.querySelector(Nn(u))) ? (t.instance = n, Pe(n), n) : (a = l, (n = Et.get(u)) && (a = E({}, l), bc(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Pe(n), Xe(n, "link", a), e.head.appendChild(n), t.instance = n);
                case "void":
                    return null;
                default:
                    throw Error(f(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Vu(a, l.precedence, e));
            return t.instance;
        }
        function Vu(e, t, l) {
            for(var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++){
                var d = a[c];
                if (d.dataset.precedence === t) u = d;
                else if (u !== n) break;
            }
            u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
        }
        function gc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function bc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var Zu = null;
        function Ud(e, t, l) {
            if (Zu === null) {
                var a = new Map, n = Zu = new Map;
                n.set(l, a);
            } else n = Zu, a = n.get(l), a || (a = new Map, n.set(l, a));
            if (a.has(e)) return a;
            for(a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++){
                var u = l[n];
                if (!(u[Qa] || u[ke] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var c = u.getAttribute(t) || "";
                    c = e + c;
                    var d = a.get(c);
                    d ? d.push(u) : a.set(c, [
                        u
                    ]);
                }
            }
            return a;
        }
        function Cd(e, t, l) {
            e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
        }
        function v1(e, t, l) {
            if (l === 1 || t.itemProp != null) return !1;
            switch(e){
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                    return !0;
                case "link":
                    if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                    switch(t.rel){
                        case "stylesheet":
                            return e = t.disabled, typeof t.precedence == "string" && e == null;
                        default:
                            return !0;
                    }
                case "script":
                    if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
            }
            return !1;
        }
        function qd(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var Mn = null;
        function g1() {}
        function b1(e, t, l) {
            if (Mn === null) throw Error(f(475));
            var a = Mn;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var n = za(l.href), u = e.querySelector(_n(n));
                    if (u) {
                        e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (a.count++, a = ku.bind(a), e.then(a, a)), t.state.loading |= 4, t.instance = u, Pe(u);
                        return;
                    }
                    u = e.ownerDocument || e, l = zd(l), (n = Et.get(n)) && gc(l, n), u = u.createElement("link"), Pe(u);
                    var c = u;
                    c._p = new Promise(function(d, y) {
                        c.onload = d, c.onerror = y;
                    }), Xe(u, "link", l), t.instance = u;
                }
                a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = ku.bind(a), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function S1() {
            if (Mn === null) throw Error(f(475));
            var e = Mn;
            return e.stylesheets && e.count === 0 && Sc(e, e.stylesheets), 0 < e.count ? function(t) {
                var l = setTimeout(function() {
                    if (e.stylesheets && Sc(e, e.stylesheets), e.unsuspend) {
                        var a = e.unsuspend;
                        e.unsuspend = null, a();
                    }
                }, 6e4);
                return e.unsuspend = t, function() {
                    e.unsuspend = null, clearTimeout(l);
                };
            } : null;
        }
        function ku() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Sc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var Ju = null;
        function Sc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, Ju = new Map, t.forEach(E1, e), Ju = null, ku.call(e));
        }
        function E1(e, t) {
            if (!(t.state.loading & 4)) {
                var l = Ju.get(e);
                if (l) var a = l.get(null);
                else {
                    l = new Map, Ju.set(e, l);
                    for(var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++){
                        var c = n[u];
                        (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c);
                    }
                    a && l.set(null, a);
                }
                n = t.instance, c = n.getAttribute("data-precedence"), u = l.get(c) || a, u === a && l.set(null, n), l.set(c, n), this.count++, a = ku.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
            }
        }
        var Dn = {
            $$typeof: K,
            Provider: null,
            Consumer: null,
            _currentValue: Y,
            _currentValue2: Y,
            _threadCount: 0
        };
        function R1(e, t, l, a, n, u, c, d) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yi(0), this.hiddenUpdates = yi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = new Map;
        }
        function Hd(e, t, l, a, n, u, c, d, y, A, B, q) {
            return e = new R1(e, t, l, c, d, y, A, q), t = 1, u === !0 && (t |= 24), u = it(3, null, null, t), e.current = u, u.stateNode = e, t = tr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
                element: a,
                isDehydrated: l,
                cache: t
            }, ur(u), e;
        }
        function wd(e) {
            return e ? (e = fa, e) : fa;
        }
        function Pd(e, t, l, a, n, u) {
            n = wd(n), a.context === null ? a.context = n : a.pendingContext = n, a = rl(t), a.payload = {
                element: l
            }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = cl(e, a, t), l !== null && (st(l, e, t), nn(l, e, t));
        }
        function Qd(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var l = e.retryLane;
                e.retryLane = l !== 0 && l < t ? l : t;
            }
        }
        function Ec(e, t) {
            Qd(e, t), (e = e.alternate) && Qd(e, t);
        }
        function Ld(e) {
            if (e.tag === 13) {
                var t = ca(e, 67108864);
                t !== null && st(t, e, 67108864), Ec(e, 67108864);
            }
        }
        var $u = !0;
        function T1(e, t, l, a) {
            var n = z.T;
            z.T = null;
            var u = V.p;
            try {
                V.p = 2, Rc(e, t, l, a);
            } finally{
                V.p = u, z.T = n;
            }
        }
        function O1(e, t, l, a) {
            var n = z.T;
            z.T = null;
            var u = V.p;
            try {
                V.p = 8, Rc(e, t, l, a);
            } finally{
                V.p = u, z.T = n;
            }
        }
        function Rc(e, t, l, a) {
            if ($u) {
                var n = Tc(a);
                if (n === null) fc(e, t, a, Wu, l), jd(e, a);
                else if (_1(n, e, t, l, a)) a.stopPropagation();
                else if (jd(e, a), t & 4 && -1 < A1.indexOf(e)) {
                    for(; n !== null;){
                        var u = $l(n);
                        if (u !== null) switch(u.tag){
                            case 3:
                                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                    var c = Ml(u.pendingLanes);
                                    if (c !== 0) {
                                        var d = u;
                                        for(d.pendingLanes |= 2, d.entangledLanes |= 2; c;){
                                            var y = 1 << 31 - nt(c);
                                            d.entanglements[1] |= y, c &= ~y;
                                        }
                                        Ct(u), (pe & 6) === 0 && (Cu = Dt() + 500, Rn(0));
                                    }
                                }
                                break;
                            case 13:
                                d = ca(u, 2), d !== null && st(d, u, 2), Hu(), Ec(u, 2);
                        }
                        if (u = Tc(a), u === null && fc(e, t, a, Wu, l), u === n) break;
                        n = u;
                    }
                    n !== null && a.stopPropagation();
                } else fc(e, t, a, null, l);
            }
        }
        function Tc(e) {
            return e = Mi(e), Oc(e);
        }
        var Wu = null;
        function Oc(e) {
            if (Wu = null, e = Jl(e), e !== null) {
                var t = h(e);
                if (t === null) e = null;
                else {
                    var l = t.tag;
                    if (l === 13) {
                        if (e = v(t), e !== null) return e;
                        e = null;
                    } else if (l === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null;
                    } else t !== e && (e = null);
                }
            }
            return Wu = e, null;
        }
        function Yd(e) {
            switch(e){
                case "beforetoggle":
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "toggle":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 2;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch(op()){
                        case Ic:
                            return 2;
                        case ef:
                            return 8;
                        case Kn:
                        case sp:
                            return 32;
                        case tf:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Ac = !1, El = null, Rl = null, Tl = null, xn = new Map, zn = new Map, Ol = [], A1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function jd(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    El = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Rl = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Tl = null;
                    break;
                case "pointerover":
                case "pointerout":
                    xn.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    zn.delete(t.pointerId);
            }
        }
        function Bn(e, t, l, a, n, u) {
            return e === null || e.nativeEvent !== u ? (e = {
                blockedOn: t,
                domEventName: l,
                eventSystemFlags: a,
                nativeEvent: u,
                targetContainers: [
                    n
                ]
            }, t !== null && (t = $l(t), t !== null && Ld(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
        }
        function _1(e, t, l, a, n) {
            switch(t){
                case "focusin":
                    return El = Bn(El, e, t, l, a, n), !0;
                case "dragenter":
                    return Rl = Bn(Rl, e, t, l, a, n), !0;
                case "mouseover":
                    return Tl = Bn(Tl, e, t, l, a, n), !0;
                case "pointerover":
                    var u = n.pointerId;
                    return xn.set(u, Bn(xn.get(u) || null, e, t, l, a, n)), !0;
                case "gotpointercapture":
                    return u = n.pointerId, zn.set(u, Bn(zn.get(u) || null, e, t, l, a, n)), !0;
            }
            return !1;
        }
        function Kd(e) {
            var t = Jl(e.target);
            if (t !== null) {
                var l = h(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = v(l), t !== null) {
                            e.blockedOn = t, bp(e.priority, function() {
                                if (l.tag === 13) {
                                    var a = ot();
                                    a = vi(a);
                                    var n = ca(l, a);
                                    n !== null && st(n, l, a), Ec(l, a);
                                }
                            });
                            return;
                        }
                    } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            e.blockedOn = null;
        }
        function Fu(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var l = Tc(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var a = new l.constructor(l.type, l);
                    Ni = a, l.target.dispatchEvent(a), Ni = null;
                } else return t = $l(l), t !== null && Ld(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function Gd(e, t, l) {
            Fu(e) && l.delete(t);
        }
        function N1() {
            Ac = !1, El !== null && Fu(El) && (El = null), Rl !== null && Fu(Rl) && (Rl = null), Tl !== null && Fu(Tl) && (Tl = null), xn.forEach(Gd), zn.forEach(Gd);
        }
        function Iu(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Ac || (Ac = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, N1)));
        }
        var ei = null;
        function Xd(e) {
            ei !== e && (ei = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
                ei === e && (ei = null);
                for(var t = 0; t < e.length; t += 3){
                    var l = e[t], a = e[t + 1], n = e[t + 2];
                    if (typeof a != "function") {
                        if (Oc(a || l) === null) continue;
                        break;
                    }
                    var u = $l(l);
                    u !== null && (e.splice(t, 3), t -= 3, Or(u, {
                        pending: !0,
                        data: n,
                        method: l.method,
                        action: a
                    }, a, n));
                }
            }));
        }
        function Un(e) {
            function t(y) {
                return Iu(y, e);
            }
            El !== null && Iu(El, e), Rl !== null && Iu(Rl, e), Tl !== null && Iu(Tl, e), xn.forEach(t), zn.forEach(t);
            for(var l = 0; l < Ol.length; l++){
                var a = Ol[l];
                a.blockedOn === e && (a.blockedOn = null);
            }
            for(; 0 < Ol.length && (l = Ol[0], l.blockedOn === null);)Kd(l), l.blockedOn === null && Ol.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(a = 0; a < l.length; a += 3){
                var n = l[a], u = l[a + 1], c = n[Fe] || null;
                if (typeof u == "function") c || Xd(l);
                else if (c) {
                    var d = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u, c = u[Fe] || null) d = c.formAction;
                        else if (Oc(n) !== null) continue;
                    } else d = c.action;
                    typeof d == "function" ? l[a + 1] = d : (l.splice(a, 3), a -= 3), Xd(l);
                }
            }
        }
        function _c(e) {
            this._internalRoot = e;
        }
        ti.prototype.render = _c.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(f(409));
            var l = t.current, a = ot();
            Pd(l, a, e, t, null, null);
        }, ti.prototype.unmount = _c.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                Pd(e.current, 2, null, e, null, null), Hu(), t[kl] = null;
            }
        };
        function ti(e) {
            this._internalRoot = e;
        }
        ti.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = rf();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Ol.length && t !== 0 && t < Ol[l].priority; l++);
                Ol.splice(l, 0, e), l === 0 && Kd(e);
            }
        };
        var Vd = r.version;
        if (Vd !== "19.1.0") throw Error(f(527, Vd, "19.1.0"));
        V.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
            return e = m(t), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var M1 = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: z,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!li.isDisabled && li.supportsFiber) try {
                Ha = li.inject(M1), at = li;
            } catch  {}
        }
        return qn.createRoot = function(e, t) {
            if (!s(e)) throw Error(f(299));
            var l = !1, a = "", n = cs, u = fs, c = os, d = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (d = t.unstable_transitionCallbacks)), t = Hd(e, 1, !1, null, null, l, a, n, u, c, d, null), e[kl] = t.current, cc(e), new _c(t);
        }, qn.hydrateRoot = function(e, t, l) {
            if (!s(e)) throw Error(f(299));
            var a = !1, n = "", u = cs, c = fs, d = os, y = null, A = null;
            return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (y = l.unstable_transitionCallbacks), l.formState !== void 0 && (A = l.formState)), t = Hd(e, 1, !0, t, l ?? null, a, n, u, c, d, y, A), t.context = wd(null), l = t.current, a = ot(), a = vi(a), n = rl(a), n.callback = null, cl(l, n, a), l = a, t.current.lanes = l, Pa(t, l), Ct(t), e[kl] = t.current, cc(e), new ti(t);
        }, qn.version = "19.1.0", qn;
    }
    var lh;
    function Q1() {
        if (lh) return Mc.exports;
        lh = 1;
        function i() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (r) {
                console.error(r);
            }
        }
        return i(), Mc.exports = P1(), Mc.exports;
    }
    let L1;
    L1 = Q1();
    T = si();
    $0 = x1(T);
    var Uc = {
        exports: {}
    }, Cc = {};
    var ah;
    function Y1() {
        if (ah) return Cc;
        ah = 1;
        var i = si();
        function r(m, p) {
            return m === p && (m !== 0 || 1 / m === 1 / p) || m !== m && p !== p;
        }
        var o = typeof Object.is == "function" ? Object.is : r, f = i.useSyncExternalStore, s = i.useRef, h = i.useEffect, v = i.useMemo, S = i.useDebugValue;
        return Cc.useSyncExternalStoreWithSelector = function(m, p, E, _, N) {
            var H = s(null);
            if (H.current === null) {
                var x = {
                    hasValue: !1,
                    value: null
                };
                H.current = x;
            } else x = H.current;
            H = v(function() {
                function P(X) {
                    if (!w) {
                        if (w = !0, Q = X, X = _(X), N !== void 0 && x.hasValue) {
                            var te = x.value;
                            if (N(te, X)) return K = te;
                        }
                        return K = X;
                    }
                    if (te = K, o(Q, X)) return te;
                    var fe = _(X);
                    return N !== void 0 && N(te, fe) ? (Q = X, te) : (Q = X, K = fe);
                }
                var w = !1, Q, K, W = E === void 0 ? null : E;
                return [
                    function() {
                        return P(p());
                    },
                    W === null ? void 0 : function() {
                        return P(W());
                    }
                ];
            }, [
                p,
                E,
                _,
                N
            ]);
            var L = f(m, H[0], H[1]);
            return h(function() {
                x.hasValue = !0, x.value = L;
            }, [
                L
            ]), S(L), L;
        }, Cc;
    }
    var nh;
    function j1() {
        return nh || (nh = 1, Uc.exports = Y1()), Uc.exports;
    }
    var K1 = j1();
    function G1(i) {
        i();
    }
    function X1() {
        let i = null, r = null;
        return {
            clear () {
                i = null, r = null;
            },
            notify () {
                G1(()=>{
                    let o = i;
                    for(; o;)o.callback(), o = o.next;
                });
            },
            get () {
                const o = [];
                let f = i;
                for(; f;)o.push(f), f = f.next;
                return o;
            },
            subscribe (o) {
                let f = !0;
                const s = r = {
                    callback: o,
                    next: null,
                    prev: r
                };
                return s.prev ? s.prev.next = s : i = s, function() {
                    !f || i === null || (f = !1, s.next ? s.next.prev = s.prev : r = s.prev, s.prev ? s.prev.next = s.next : i = s.next);
                };
            }
        };
    }
    var uh = {
        notify () {},
        get: ()=>[]
    };
    function V1(i, r) {
        let o, f = uh, s = 0, h = !1;
        function v(L) {
            E();
            const P = f.subscribe(L);
            let w = !1;
            return ()=>{
                w || (w = !0, P(), _());
            };
        }
        function S() {
            f.notify();
        }
        function m() {
            x.onStateChange && x.onStateChange();
        }
        function p() {
            return h;
        }
        function E() {
            s++, o || (o = i.subscribe(m), f = X1());
        }
        function _() {
            s--, o && s === 0 && (o(), o = void 0, f.clear(), f = uh);
        }
        function N() {
            h || (h = !0, E());
        }
        function H() {
            h && (h = !1, _());
        }
        const x = {
            addNestedSub: v,
            notifyNestedSubs: S,
            handleChangeWrapper: m,
            isSubscribed: p,
            trySubscribe: N,
            tryUnsubscribe: H,
            getListeners: ()=>f
        };
        return x;
    }
    var Z1 = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", k1 = Z1(), J1 = ()=>typeof navigator < "u" && navigator.product === "ReactNative", $1 = J1(), W1 = ()=>k1 || $1 ? T.useLayoutEffect : T.useEffect, F1 = W1(), I1 = Symbol.for("react-redux-context"), ey = typeof globalThis < "u" ? globalThis : {};
    function ty() {
        if (!T.createContext) return {};
        const i = ey[I1] ??= new Map;
        let r = i.get(T.createContext);
        return r || (r = T.createContext(null), i.set(T.createContext, r)), r;
    }
    var _l = ty();
    function ly(i) {
        const { children: r, context: o, serverState: f, store: s } = i, h = T.useMemo(()=>{
            const m = V1(s);
            return {
                store: s,
                subscription: m,
                getServerState: f ? ()=>f : void 0
            };
        }, [
            s,
            f
        ]), v = T.useMemo(()=>s.getState(), [
            s
        ]);
        F1(()=>{
            const { subscription: m } = h;
            return m.onStateChange = m.notifyNestedSubs, m.trySubscribe(), v !== s.getState() && m.notifyNestedSubs(), ()=>{
                m.tryUnsubscribe(), m.onStateChange = void 0;
            };
        }, [
            h,
            v
        ]);
        const S = o || _l;
        return T.createElement(S.Provider, {
            value: h
        }, r);
    }
    var ay = ly;
    function Yc(i = _l) {
        return function() {
            return T.useContext(i);
        };
    }
    var Sh = Yc();
    function Eh(i = _l) {
        const r = i === _l ? Sh : Yc(i), o = ()=>{
            const { store: f } = r();
            return f;
        };
        return Object.assign(o, {
            withTypes: ()=>o
        }), o;
    }
    var ny = Eh();
    function uy(i = _l) {
        const r = i === _l ? ny : Eh(i), o = ()=>r().dispatch;
        return Object.assign(o, {
            withTypes: ()=>o
        }), o;
    }
    let iy;
    W0 = uy();
    iy = (i, r)=>i === r;
    function ry(i = _l) {
        const r = i === _l ? Sh : Yc(i), o = (f, s = {})=>{
            const { equalityFn: h = iy } = typeof s == "function" ? {
                equalityFn: s
            } : s, v = r(), { store: S, subscription: m, getServerState: p } = v;
            T.useRef(!0);
            const E = T.useCallback({
                [f.name] (N) {
                    return f(N);
                }
            }[f.name], [
                f
            ]), _ = K1.useSyncExternalStoreWithSelector(m.addNestedSub, S.getState, p || S.getState, E, h);
            return T.useDebugValue(_), _;
        };
        return Object.assign(o, {
            withTypes: ()=>o
        }), o;
    }
    F0 = ry();
    function Ze(i) {
        return `Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
    }
    var cy = typeof Symbol == "function" && Symbol.observable || "@@observable", ih = cy, qc = ()=>Math.random().toString(36).substring(7).split("").join("."), fy = {
        INIT: `@@redux/INIT${qc()}`,
        REPLACE: `@@redux/REPLACE${qc()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${qc()}`
    }, ci = fy;
    function Rh(i) {
        if (typeof i != "object" || i === null) return !1;
        let r = i;
        for(; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(i) === r || Object.getPrototypeOf(i) === null;
    }
    function jc(i, r, o) {
        if (typeof i != "function") throw new Error(Ze(2));
        if (typeof r == "function" && typeof o == "function" || typeof o == "function" && typeof arguments[3] == "function") throw new Error(Ze(0));
        if (typeof r == "function" && typeof o > "u" && (o = r, r = void 0), typeof o < "u") {
            if (typeof o != "function") throw new Error(Ze(1));
            return o(jc)(i, r);
        }
        let f = i, s = r, h = new Map, v = h, S = 0, m = !1;
        function p() {
            v === h && (v = new Map, h.forEach((P, w)=>{
                v.set(w, P);
            }));
        }
        function E() {
            if (m) throw new Error(Ze(3));
            return s;
        }
        function _(P) {
            if (typeof P != "function") throw new Error(Ze(4));
            if (m) throw new Error(Ze(5));
            let w = !0;
            p();
            const Q = S++;
            return v.set(Q, P), function() {
                if (w) {
                    if (m) throw new Error(Ze(6));
                    w = !1, p(), v.delete(Q), h = null;
                }
            };
        }
        function N(P) {
            if (!Rh(P)) throw new Error(Ze(7));
            if (typeof P.type > "u") throw new Error(Ze(8));
            if (typeof P.type != "string") throw new Error(Ze(17));
            if (m) throw new Error(Ze(9));
            try {
                m = !0, s = f(s, P);
            } finally{
                m = !1;
            }
            return (h = v).forEach((Q)=>{
                Q();
            }), P;
        }
        function H(P) {
            if (typeof P != "function") throw new Error(Ze(10));
            f = P, N({
                type: ci.REPLACE
            });
        }
        function x() {
            const P = _;
            return {
                subscribe (w) {
                    if (typeof w != "object" || w === null) throw new Error(Ze(11));
                    function Q() {
                        const W = w;
                        W.next && W.next(E());
                    }
                    return Q(), {
                        unsubscribe: P(Q)
                    };
                },
                [ih] () {
                    return this;
                }
            };
        }
        return N({
            type: ci.INIT
        }), {
            dispatch: N,
            subscribe: _,
            getState: E,
            replaceReducer: H,
            [ih]: x
        };
    }
    function oy(i) {
        Object.keys(i).forEach((r)=>{
            const o = i[r];
            if (typeof o(void 0, {
                type: ci.INIT
            }) > "u") throw new Error(Ze(12));
            if (typeof o(void 0, {
                type: ci.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(Ze(13));
        });
    }
    function Th(i) {
        const r = Object.keys(i), o = {};
        for(let h = 0; h < r.length; h++){
            const v = r[h];
            typeof i[v] == "function" && (o[v] = i[v]);
        }
        const f = Object.keys(o);
        let s;
        try {
            oy(o);
        } catch (h) {
            s = h;
        }
        return function(v = {}, S) {
            if (s) throw s;
            let m = !1;
            const p = {};
            for(let E = 0; E < f.length; E++){
                const _ = f[E], N = o[_], H = v[_], x = N(H, S);
                if (typeof x > "u") throw S && S.type, new Error(Ze(14));
                p[_] = x, m = m || x !== H;
            }
            return m = m || f.length !== Object.keys(v).length, m ? p : v;
        };
    }
    function fi(...i) {
        return i.length === 0 ? (r)=>r : i.length === 1 ? i[0] : i.reduce((r, o)=>(...f)=>r(o(...f)));
    }
    function sy(...i) {
        return (r)=>(o, f)=>{
                const s = r(o, f);
                let h = ()=>{
                    throw new Error(Ze(15));
                };
                const v = {
                    getState: s.getState,
                    dispatch: (m, ...p)=>h(m, ...p)
                }, S = i.map((m)=>m(v));
                return h = fi(...S)(s.dispatch), {
                    ...s,
                    dispatch: h
                };
            };
    }
    function Oh(i) {
        return ({ dispatch: o, getState: f })=>(s)=>(h)=>typeof h == "function" ? h(o, f, i) : s(h);
    }
    var dy = Oh(), hy = Oh, py = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? fi : fi.apply(null, arguments);
    }, Ah = class Pn extends Array {
        constructor(...r){
            super(...r), Object.setPrototypeOf(this, Pn.prototype);
        }
        static get [Symbol.species]() {
            return Pn;
        }
        concat(...r) {
            return super.concat.apply(this, r);
        }
        prepend(...r) {
            return r.length === 1 && Array.isArray(r[0]) ? new Pn(...r[0].concat(this)) : new Pn(...r.concat(this));
        }
    };
    function my(i) {
        return typeof i == "boolean";
    }
    var yy = ()=>function(r) {
            const { thunk: o = !0, immutableCheck: f = !0, serializableCheck: s = !0, actionCreatorCheck: h = !0 } = r ?? {};
            let v = new Ah;
            return o && (my(o) ? v.push(dy) : v.push(hy(o.extraArgument))), v;
        }, vy = "RTK_autoBatch", rh = (i)=>(r)=>{
            setTimeout(r, i);
        }, gy = (i = {
        type: "raf"
    })=>(r)=>(...o)=>{
                const f = r(...o);
                let s = !0, h = !1, v = !1;
                const S = new Set, m = i.type === "tick" ? queueMicrotask : i.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : rh(10) : i.type === "callback" ? i.queueNotification : rh(i.timeout), p = ()=>{
                    v = !1, h && (h = !1, S.forEach((E)=>E()));
                };
                return Object.assign({}, f, {
                    subscribe (E) {
                        const _ = ()=>s && E(), N = f.subscribe(_);
                        return S.add(E), ()=>{
                            N(), S.delete(E);
                        };
                    },
                    dispatch (E) {
                        try {
                            return s = !E?.meta?.[vy], h = !s, h && (v || (v = !0, m(p))), f.dispatch(E);
                        } finally{
                            s = !0;
                        }
                    }
                });
            }, by = (i)=>function(o) {
            const { autoBatch: f = !0 } = o ?? {};
            let s = new Ah(i);
            return f && s.push(gy(typeof f == "object" ? f : void 0)), s;
        };
    function Sy(i) {
        const r = yy(), { reducer: o = void 0, middleware: f, devTools: s = !0, preloadedState: h = void 0, enhancers: v = void 0 } = i || {};
        let S;
        if (typeof o == "function") S = o;
        else if (Rh(o)) S = Th(o);
        else throw new Error(Ey(1));
        let m;
        typeof f == "function" ? m = f(r) : m = r();
        let p = fi;
        s && (p = py({
            trace: !1,
            ...typeof s == "object" && s
        }));
        const E = sy(...m), _ = by(E);
        let N = typeof v == "function" ? v(_) : _();
        const H = p(...N);
        return jc(S, h, H);
    }
    function Ey(i) {
        return `Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Kc = "persist:", _h = "persist/FLUSH", Gc = "persist/REHYDRATE", Nh = "persist/PAUSE", Mh = "persist/PERSIST", Dh = "persist/PURGE", xh = "persist/REGISTER", Ry = -1;
    function ni(i) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ni = function(o) {
            return typeof o;
        } : ni = function(o) {
            return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, ni(i);
    }
    function ch(i, r) {
        var o = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(i);
            r && (f = f.filter(function(s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable;
            })), o.push.apply(o, f);
        }
        return o;
    }
    function Ty(i) {
        for(var r = 1; r < arguments.length; r++){
            var o = arguments[r] != null ? arguments[r] : {};
            r % 2 ? ch(o, !0).forEach(function(f) {
                Oy(i, f, o[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : ch(o).forEach(function(f) {
                Object.defineProperty(i, f, Object.getOwnPropertyDescriptor(o, f));
            });
        }
        return i;
    }
    function Oy(i, r, o) {
        return r in i ? Object.defineProperty(i, r, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[r] = o, i;
    }
    function Ay(i, r, o, f) {
        f.debug;
        var s = Ty({}, o);
        return i && ni(i) === "object" && Object.keys(i).forEach(function(h) {
            h !== "_persist" && r[h] === o[h] && (s[h] = i[h]);
        }), s;
    }
    function _y(i) {
        var r = i.blacklist || null, o = i.whitelist || null, f = i.transforms || [], s = i.throttle || 0, h = "".concat(i.keyPrefix !== void 0 ? i.keyPrefix : Kc).concat(i.key), v = i.storage, S;
        i.serialize === !1 ? S = function(X) {
            return X;
        } : typeof i.serialize == "function" ? S = i.serialize : S = Ny;
        var m = i.writeFailHandler || null, p = {}, E = {}, _ = [], N = null, H = null, x = function(X) {
            Object.keys(X).forEach(function(te) {
                w(te) && p[te] !== X[te] && _.indexOf(te) === -1 && _.push(te);
            }), Object.keys(p).forEach(function(te) {
                X[te] === void 0 && w(te) && _.indexOf(te) === -1 && p[te] !== void 0 && _.push(te);
            }), N === null && (N = setInterval(L, s)), p = X;
        };
        function L() {
            if (_.length === 0) {
                N && clearInterval(N), N = null;
                return;
            }
            var W = _.shift(), X = f.reduce(function(te, fe) {
                return fe.in(te, W, p);
            }, p[W]);
            if (X !== void 0) try {
                E[W] = S(X);
            } catch (te) {
                console.error("redux-persist/createPersistoid: error serializing state", te);
            }
            else delete E[W];
            _.length === 0 && P();
        }
        function P() {
            Object.keys(E).forEach(function(W) {
                p[W] === void 0 && delete E[W];
            }), H = v.setItem(h, S(E)).catch(Q);
        }
        function w(W) {
            return !(o && o.indexOf(W) === -1 && W !== "_persist" || r && r.indexOf(W) !== -1);
        }
        function Q(W) {
            m && m(W);
        }
        var K = function() {
            for(; _.length !== 0;)L();
            return H || Promise.resolve();
        };
        return {
            update: x,
            flush: K
        };
    }
    function Ny(i) {
        return JSON.stringify(i);
    }
    function My(i) {
        var r = i.transforms || [], o = "".concat(i.keyPrefix !== void 0 ? i.keyPrefix : Kc).concat(i.key), f = i.storage;
        i.debug;
        var s;
        return i.deserialize === !1 ? s = function(v) {
            return v;
        } : typeof i.deserialize == "function" ? s = i.deserialize : s = Dy, f.getItem(o).then(function(h) {
            if (h) try {
                var v = {}, S = s(h);
                return Object.keys(S).forEach(function(m) {
                    v[m] = r.reduceRight(function(p, E) {
                        return E.out(p, m, S);
                    }, s(S[m]));
                }), v;
            } catch (m) {
                throw m;
            }
            else return;
        });
    }
    function Dy(i) {
        return JSON.parse(i);
    }
    function xy(i) {
        var r = i.storage, o = "".concat(i.keyPrefix !== void 0 ? i.keyPrefix : Kc).concat(i.key);
        return r.removeItem(o, zy);
    }
    function zy(i) {}
    function fh(i, r) {
        var o = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(i);
            r && (f = f.filter(function(s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable;
            })), o.push.apply(o, f);
        }
        return o;
    }
    function Ft(i) {
        for(var r = 1; r < arguments.length; r++){
            var o = arguments[r] != null ? arguments[r] : {};
            r % 2 ? fh(o, !0).forEach(function(f) {
                By(i, f, o[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : fh(o).forEach(function(f) {
                Object.defineProperty(i, f, Object.getOwnPropertyDescriptor(o, f));
            });
        }
        return i;
    }
    function By(i, r, o) {
        return r in i ? Object.defineProperty(i, r, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[r] = o, i;
    }
    function Uy(i, r) {
        if (i == null) return {};
        var o = Cy(i, r), f, s;
        if (Object.getOwnPropertySymbols) {
            var h = Object.getOwnPropertySymbols(i);
            for(s = 0; s < h.length; s++)f = h[s], !(r.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(i, f) && (o[f] = i[f]);
        }
        return o;
    }
    function Cy(i, r) {
        if (i == null) return {};
        var o = {}, f = Object.keys(i), s, h;
        for(h = 0; h < f.length; h++)s = f[h], !(r.indexOf(s) >= 0) && (o[s] = i[s]);
        return o;
    }
    var qy = 5e3;
    function Hy(i, r) {
        var o = i.version !== void 0 ? i.version : Ry;
        i.debug;
        var f = i.stateReconciler === void 0 ? Ay : i.stateReconciler, s = i.getStoredState || My, h = i.timeout !== void 0 ? i.timeout : qy, v = null, S = !1, m = !0, p = function(_) {
            return _._persist.rehydrated && v && !m && v.update(_), _;
        };
        return function(E, _) {
            var N = E || {}, H = N._persist, x = Uy(N, [
                "_persist"
            ]), L = x;
            if (_.type === Mh) {
                var P = !1, w = function(Se, oe) {
                    P || (_.rehydrate(i.key, Se, oe), P = !0);
                };
                if (h && setTimeout(function() {
                    !P && w(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(i.key, '"')));
                }, h), m = !1, v || (v = _y(i)), H) return Ft({}, r(L, _), {
                    _persist: H
                });
                if (typeof _.rehydrate != "function" || typeof _.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return _.register(i.key), s(i).then(function(fe) {
                    var Se = i.migrate || function(oe, qe) {
                        return Promise.resolve(oe);
                    };
                    Se(fe, o).then(function(oe) {
                        w(oe);
                    }, function(oe) {
                        w(void 0, oe);
                    });
                }, function(fe) {
                    w(void 0, fe);
                }), Ft({}, r(L, _), {
                    _persist: {
                        version: o,
                        rehydrated: !1
                    }
                });
            } else {
                if (_.type === Dh) return S = !0, _.result(xy(i)), Ft({}, r(L, _), {
                    _persist: H
                });
                if (_.type === _h) return _.result(v && v.flush()), Ft({}, r(L, _), {
                    _persist: H
                });
                if (_.type === Nh) m = !0;
                else if (_.type === Gc) {
                    if (S) return Ft({}, L, {
                        _persist: Ft({}, H, {
                            rehydrated: !0
                        })
                    });
                    if (_.key === i.key) {
                        var Q = r(L, _), K = _.payload, W = f !== !1 && K !== void 0 ? f(K, E, Q, i) : Q, X = Ft({}, W, {
                            _persist: Ft({}, H, {
                                rehydrated: !0
                            })
                        });
                        return p(X);
                    }
                }
            }
            if (!H) return r(E, _);
            var te = r(L, _);
            return te === L ? E : p(Ft({}, te, {
                _persist: H
            }));
        };
    }
    function oh(i) {
        return Qy(i) || Py(i) || wy();
    }
    function wy() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function Py(i) {
        if (Symbol.iterator in Object(i) || Object.prototype.toString.call(i) === "[object Arguments]") return Array.from(i);
    }
    function Qy(i) {
        if (Array.isArray(i)) {
            for(var r = 0, o = new Array(i.length); r < i.length; r++)o[r] = i[r];
            return o;
        }
    }
    function sh(i, r) {
        var o = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(i);
            r && (f = f.filter(function(s) {
                return Object.getOwnPropertyDescriptor(i, s).enumerable;
            })), o.push.apply(o, f);
        }
        return o;
    }
    function Pc(i) {
        for(var r = 1; r < arguments.length; r++){
            var o = arguments[r] != null ? arguments[r] : {};
            r % 2 ? sh(o, !0).forEach(function(f) {
                Ly(i, f, o[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : sh(o).forEach(function(f) {
                Object.defineProperty(i, f, Object.getOwnPropertyDescriptor(o, f));
            });
        }
        return i;
    }
    function Ly(i, r, o) {
        return r in i ? Object.defineProperty(i, r, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[r] = o, i;
    }
    var zh = {
        registry: [],
        bootstrapped: !1
    }, Yy = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zh, o = arguments.length > 1 ? arguments[1] : void 0;
        switch(o.type){
            case xh:
                return Pc({}, r, {
                    registry: [].concat(oh(r.registry), [
                        o.key
                    ])
                });
            case Gc:
                var f = r.registry.indexOf(o.key), s = oh(r.registry);
                return s.splice(f, 1), Pc({}, r, {
                    registry: s,
                    bootstrapped: s.length === 0
                });
            default:
                return r;
        }
    };
    function jy(i, r, o) {
        var f = jc(Yy, zh, void 0), s = function(m) {
            f.dispatch({
                type: xh,
                key: m
            });
        }, h = function(m, p, E) {
            var _ = {
                type: Gc,
                payload: p,
                err: E,
                key: m
            };
            i.dispatch(_), f.dispatch(_);
        }, v = Pc({}, f, {
            purge: function() {
                var m = [];
                return i.dispatch({
                    type: Dh,
                    result: function(E) {
                        m.push(E);
                    }
                }), Promise.all(m);
            },
            flush: function() {
                var m = [];
                return i.dispatch({
                    type: _h,
                    result: function(E) {
                        m.push(E);
                    }
                }), Promise.all(m);
            },
            pause: function() {
                i.dispatch({
                    type: Nh
                });
            },
            persist: function() {
                i.dispatch({
                    type: Mh,
                    register: s,
                    rehydrate: h
                });
            }
        });
        return v.persist(), v;
    }
    let Bh, Uh, Ch, Ky, Gy, qh, Hh, Xy, Vy, wh, Ph, Xc, Qh, Zy, ky, Jy, $y;
    Bh = "FLIP_BOARD";
    Uh = "SET_THEME";
    Ch = "SET_SOUND";
    I0 = ()=>({
            type: Bh
        });
    eg = (i)=>({
            type: Uh,
            payload: i
        });
    tg = (i)=>({
            type: Ch,
            payload: i
        });
    Ky = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    Gy = (i = Ky, r)=>{
        switch(r.type){
            case Bh:
                return {
                    ...i,
                    isFlipped: !i.isFlipped
                };
            case Uh:
                return {
                    ...i,
                    theme: r.payload
                };
            case Ch:
                return {
                    ...i,
                    enableSound: r.payload
                };
            default:
                return i;
        }
    };
    qh = "SET_PGN_ANALYSIS_AT_INDEX";
    Hh = "SET_REVIEW_ANALYSIS_COMPLETE";
    Xy = "NEXT";
    Vy = "PREV";
    wh = "START_POS";
    Ph = "FINAL_POS";
    Xc = "LOAD_PGN";
    Qh = "JUMP_TO_MOVE";
    Zy = "TOGGLE_ENGINE";
    ky = "DISABLE_ENGINE";
    lg = ()=>({
            type: wh
        });
    ag = ()=>({
            type: Ph
        });
    ng = ({ finalPos: i, moves: r, fens: o, fromToSquares: f, termination: s, result: h, blackPlayerName: v, whitePlayerName: S })=>({
            type: Xc,
            payload: {
                finalPos: i,
                moves: r,
                fens: o,
                fromToSquares: f,
                termination: s,
                result: h,
                blackPlayerName: v,
                whitePlayerName: S
            }
        });
    ug = (i)=>({
            type: qh,
            payload: i
        });
    ig = (i)=>({
            type: Qh,
            payload: i
        });
    rg = (i)=>({
            type: Hh,
            payload: i
        });
    Jy = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenArrayLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    $y = (i = Jy, r)=>{
        switch(r.type){
            case Xy:
                return i.currentMoveIndex === i.fenArrayLength - 1 ? i : {
                    ...i,
                    currentMoveIndex: i.currentMoveIndex + 1
                };
            case Vy:
                return i.currentMoveIndex === 0 ? i : {
                    ...i,
                    currentMoveIndex: i.currentMoveIndex - 1
                };
            case wh:
                return {
                    ...i,
                    currentMoveIndex: 0
                };
            case Ph:
                return {
                    ...i,
                    currentMoveIndex: i.fenArrayLength - 1
                };
            case Qh:
                return {
                    ...i,
                    currentMoveIndex: r.payload
                };
            case Xc:
                return {
                    ...i,
                    finalFen: r.payload.finalPos,
                    fenArrayLength: r.payload.fens.length,
                    currentMoveIndex: 0
                };
            case Zy:
                return {
                    ...i,
                    engineEnabled: !i.engineEnabled
                };
            case ky:
                return {
                    ...i,
                    engineEnabled: !1
                };
            default:
                return i;
        }
    };
    function Lh(i) {
        return Array.from({
            length: i
        }, ()=>({
                evalScore: null,
                bestMove: "",
                moveClassification: null
            }));
    }
    let Wy, Fy, Iy, ev, tv, lv, av, nv, uv, iv, rv, cv;
    Wy = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        moves: [
            "e4",
            "e5",
            "Nf3",
            "Nc6",
            "Bb5",
            "a6",
            "Ba4",
            "Nf6",
            "O-O",
            "Be7",
            "Re1",
            "b5",
            "Bb3",
            "O-O",
            "c3",
            "d5",
            "exd5",
            "Nxd5",
            "Nxe5",
            "Nxe5",
            "Rxe5",
            "Nf6",
            "Re1",
            "Bd6",
            "h3",
            "Ng4",
            "Qf3",
            "Qh4",
            "d4",
            "Nxf2",
            "Re2",
            "Bg4",
            "hxg4",
            "Bh2+",
            "Kf1",
            "Bg3",
            "Rxf2",
            "Qh1+",
            "Ke2",
            "Bxf2",
            "Bd2",
            "Bh4",
            "Qh3",
            "Rae8+",
            "Kd3",
            "Qf1+",
            "Kc2",
            "Bf2",
            "Qf3",
            "Qg1",
            "Bd5",
            "c5",
            "dxc5",
            "Bxc5",
            "b4",
            "Bd6",
            "a4",
            "a5",
            "axb5",
            "axb4",
            "Ra6",
            "bxc3",
            "Nxc3",
            "Bb4",
            "b6",
            "Bxc3",
            "Bxc3",
            "h6",
            "b7",
            "Re3",
            "Bxf7+"
        ],
        fens: [
            "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
            "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
            "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
            "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
            "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
            "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
            "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
            "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4",
            "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
            "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 3 5",
            "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6",
            "r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 b kq - 5 6",
            "r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq - 0 7",
            "r1bqk2r/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 b kq - 1 7",
            "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w - - 2 8",
            "r1bq1rk1/2ppbppp/p1n2n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 b - - 0 8",
            "r1bq1rk1/2p1bppp/p1n2n2/1p1pp3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 9",
            "r1bq1rk1/2p1bppp/p1n2n2/1p1Pp3/8/1BP2N2/PP1P1PPP/RNBQR1K1 b - - 0 9",
            "r1bq1rk1/2p1bppp/p1n5/1p1np3/8/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 0 10",
            "r1bq1rk1/2p1bppp/p1n5/1p1nN3/8/1BP5/PP1P1PPP/RNBQR1K1 b - - 0 10",
            "r1bq1rk1/2p1bppp/p7/1p1nn3/8/1BP5/PP1P1PPP/RNBQR1K1 w - - 0 11",
            "r1bq1rk1/2p1bppp/p7/1p1nR3/8/1BP5/PP1P1PPP/RNBQ2K1 b - - 0 11",
            "r1bq1rk1/2p1bppp/p4n2/1p2R3/8/1BP5/PP1P1PPP/RNBQ2K1 w - - 1 12",
            "r1bq1rk1/2p1bppp/p4n2/1p6/8/1BP5/PP1P1PPP/RNBQR1K1 b - - 2 12",
            "r1bq1rk1/2p2ppp/p2b1n2/1p6/8/1BP5/PP1P1PPP/RNBQR1K1 w - - 3 13",
            "r1bq1rk1/2p2ppp/p2b1n2/1p6/8/1BP4P/PP1P1PP1/RNBQR1K1 b - - 0 13",
            "r1bq1rk1/2p2ppp/p2b4/1p6/6n1/1BP4P/PP1P1PP1/RNBQR1K1 w - - 1 14",
            "r1bq1rk1/2p2ppp/p2b4/1p6/6n1/1BP2Q1P/PP1P1PP1/RNB1R1K1 b - - 2 14",
            "r1b2rk1/2p2ppp/p2b4/1p6/6nq/1BP2Q1P/PP1P1PP1/RNB1R1K1 w - - 3 15",
            "r1b2rk1/2p2ppp/p2b4/1p6/3P2nq/1BP2Q1P/PP3PP1/RNB1R1K1 b - - 0 15",
            "r1b2rk1/2p2ppp/p2b4/1p6/3P3q/1BP2Q1P/PP3nP1/RNB1R1K1 w - - 0 16",
            "r1b2rk1/2p2ppp/p2b4/1p6/3P3q/1BP2Q1P/PP2RnP1/RNB3K1 b - - 1 16",
            "r4rk1/2p2ppp/p2b4/1p6/3P2bq/1BP2Q1P/PP2RnP1/RNB3K1 w - - 2 17",
            "r4rk1/2p2ppp/p2b4/1p6/3P2Pq/1BP2Q2/PP2RnP1/RNB3K1 b - - 0 17",
            "r4rk1/2p2ppp/p7/1p6/3P2Pq/1BP2Q2/PP2RnPb/RNB3K1 w - - 1 18",
            "r4rk1/2p2ppp/p7/1p6/3P2Pq/1BP2Q2/PP2RnPb/RNB2K2 b - - 2 18",
            "r4rk1/2p2ppp/p7/1p6/3P2Pq/1BP2Qb1/PP2RnP1/RNB2K2 w - - 3 19",
            "r4rk1/2p2ppp/p7/1p6/3P2Pq/1BP2Qb1/PP3RP1/RNB2K2 b - - 0 19",
            "r4rk1/2p2ppp/p7/1p6/3P2P1/1BP2Qb1/PP3RP1/RNB2K1q w - - 1 20",
            "r4rk1/2p2ppp/p7/1p6/3P2P1/1BP2Qb1/PP2KRP1/RNB4q b - - 2 20",
            "r4rk1/2p2ppp/p7/1p6/3P2P1/1BP2Q2/PP2KbP1/RNB4q w - - 0 21",
            "r4rk1/2p2ppp/p7/1p6/3P2P1/1BP2Q2/PP1BKbP1/RN5q b - - 1 21",
            "r4rk1/2p2ppp/p7/1p6/3P2Pb/1BP2Q2/PP1BK1P1/RN5q w - - 2 22",
            "r4rk1/2p2ppp/p7/1p6/3P2Pb/1BP4Q/PP1BK1P1/RN5q b - - 3 22",
            "4rrk1/2p2ppp/p7/1p6/3P2Pb/1BP4Q/PP1BK1P1/RN5q w - - 4 23",
            "4rrk1/2p2ppp/p7/1p6/3P2Pb/1BPK3Q/PP1B2P1/RN5q b - - 5 23",
            "4rrk1/2p2ppp/p7/1p6/3P2Pb/1BPK3Q/PP1B2P1/RN3q2 w - - 6 24",
            "4rrk1/2p2ppp/p7/1p6/3P2Pb/1BP4Q/PPKB2P1/RN3q2 b - - 7 24",
            "4rrk1/2p2ppp/p7/1p6/3P2P1/1BP4Q/PPKB1bP1/RN3q2 w - - 8 25",
            "4rrk1/2p2ppp/p7/1p6/3P2P1/1BP2Q2/PPKB1bP1/RN3q2 b - - 9 25",
            "4rrk1/2p2ppp/p7/1p6/3P2P1/1BP2Q2/PPKB1bP1/RN4q1 w - - 10 26",
            "4rrk1/2p2ppp/p7/1p1B4/3P2P1/2P2Q2/PPKB1bP1/RN4q1 b - - 11 26",
            "4rrk1/5ppp/p7/1ppB4/3P2P1/2P2Q2/PPKB1bP1/RN4q1 w - - 0 27",
            "4rrk1/5ppp/p7/1pPB4/6P1/2P2Q2/PPKB1bP1/RN4q1 b - - 0 27",
            "4rrk1/5ppp/p7/1pbB4/6P1/2P2Q2/PPKB2P1/RN4q1 w - - 0 28",
            "4rrk1/5ppp/p7/1pbB4/1P4P1/2P2Q2/P1KB2P1/RN4q1 b - - 0 28",
            "4rrk1/5ppp/p2b4/1p1B4/1P4P1/2P2Q2/P1KB2P1/RN4q1 w - - 1 29",
            "4rrk1/5ppp/p2b4/1p1B4/PP4P1/2P2Q2/2KB2P1/RN4q1 b - - 0 29",
            "4rrk1/5ppp/3b4/pp1B4/PP4P1/2P2Q2/2KB2P1/RN4q1 w - - 0 30",
            "4rrk1/5ppp/3b4/pP1B4/1P4P1/2P2Q2/2KB2P1/RN4q1 b - - 0 30",
            "4rrk1/5ppp/3b4/1P1B4/1p4P1/2P2Q2/2KB2P1/RN4q1 w - - 0 31",
            "4rrk1/5ppp/R2b4/1P1B4/1p4P1/2P2Q2/2KB2P1/1N4q1 b - - 1 31",
            "4rrk1/5ppp/R2b4/1P1B4/6P1/2p2Q2/2KB2P1/1N4q1 w - - 0 32",
            "4rrk1/5ppp/R2b4/1P1B4/6P1/2N2Q2/2KB2P1/6q1 b - - 0 32",
            "4rrk1/5ppp/R7/1P1B4/1b4P1/2N2Q2/2KB2P1/6q1 w - - 1 33",
            "4rrk1/5ppp/RP6/3B4/1b4P1/2N2Q2/2KB2P1/6q1 b - - 0 33",
            "4rrk1/5ppp/RP6/3B4/6P1/2b2Q2/2KB2P1/6q1 w - - 0 34",
            "4rrk1/5ppp/RP6/3B4/6P1/2B2Q2/2K3P1/6q1 b - - 0 34",
            "4rrk1/5pp1/RP5p/3B4/6P1/2B2Q2/2K3P1/6q1 w - - 0 35",
            "4rrk1/1P3pp1/R6p/3B4/6P1/2B2Q2/2K3P1/6q1 b - - 0 35",
            "5rk1/1P3pp1/R6p/3B4/6P1/2B1rQ2/2K3P1/6q1 w - - 1 36",
            "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36"
        ],
        fromToSquares: [
            {
                from: "e2",
                to: "e4"
            },
            {
                from: "e7",
                to: "e5"
            },
            {
                from: "g1",
                to: "f3"
            },
            {
                from: "b8",
                to: "c6"
            },
            {
                from: "f1",
                to: "b5"
            },
            {
                from: "a7",
                to: "a6"
            },
            {
                from: "b5",
                to: "a4"
            },
            {
                from: "g8",
                to: "f6"
            },
            {
                from: "e1",
                to: "g1"
            },
            {
                from: "f8",
                to: "e7"
            },
            {
                from: "f1",
                to: "e1"
            },
            {
                from: "b7",
                to: "b5"
            },
            {
                from: "a4",
                to: "b3"
            },
            {
                from: "e8",
                to: "g8"
            },
            {
                from: "c2",
                to: "c3"
            },
            {
                from: "d7",
                to: "d5"
            },
            {
                from: "e4",
                to: "d5"
            },
            {
                from: "f6",
                to: "d5"
            },
            {
                from: "f3",
                to: "e5"
            },
            {
                from: "c6",
                to: "e5"
            },
            {
                from: "e1",
                to: "e5"
            },
            {
                from: "d5",
                to: "f6"
            },
            {
                from: "e5",
                to: "e1"
            },
            {
                from: "e7",
                to: "d6"
            },
            {
                from: "h2",
                to: "h3"
            },
            {
                from: "f6",
                to: "g4"
            },
            {
                from: "d1",
                to: "f3"
            },
            {
                from: "d8",
                to: "h4"
            },
            {
                from: "d2",
                to: "d4"
            },
            {
                from: "g4",
                to: "f2"
            },
            {
                from: "e1",
                to: "e2"
            },
            {
                from: "c8",
                to: "g4"
            },
            {
                from: "h3",
                to: "g4"
            },
            {
                from: "d6",
                to: "h2"
            },
            {
                from: "g1",
                to: "f1"
            },
            {
                from: "h2",
                to: "g3"
            },
            {
                from: "e2",
                to: "f2"
            },
            {
                from: "h4",
                to: "h1"
            },
            {
                from: "f1",
                to: "e2"
            },
            {
                from: "g3",
                to: "f2"
            },
            {
                from: "c1",
                to: "d2"
            },
            {
                from: "f2",
                to: "h4"
            },
            {
                from: "f3",
                to: "h3"
            },
            {
                from: "a8",
                to: "e8"
            },
            {
                from: "e2",
                to: "d3"
            },
            {
                from: "h1",
                to: "f1"
            },
            {
                from: "d3",
                to: "c2"
            },
            {
                from: "h4",
                to: "f2"
            },
            {
                from: "h3",
                to: "f3"
            },
            {
                from: "f1",
                to: "g1"
            },
            {
                from: "b3",
                to: "d5"
            },
            {
                from: "c7",
                to: "c5"
            },
            {
                from: "d4",
                to: "c5"
            },
            {
                from: "f2",
                to: "c5"
            },
            {
                from: "b2",
                to: "b4"
            },
            {
                from: "c5",
                to: "d6"
            },
            {
                from: "a2",
                to: "a4"
            },
            {
                from: "a6",
                to: "a5"
            },
            {
                from: "a4",
                to: "b5"
            },
            {
                from: "a5",
                to: "b4"
            },
            {
                from: "a1",
                to: "a6"
            },
            {
                from: "b4",
                to: "c3"
            },
            {
                from: "b1",
                to: "c3"
            },
            {
                from: "d6",
                to: "b4"
            },
            {
                from: "b5",
                to: "b6"
            },
            {
                from: "b4",
                to: "c3"
            },
            {
                from: "d2",
                to: "c3"
            },
            {
                from: "h7",
                to: "h6"
            },
            {
                from: "b6",
                to: "b7"
            },
            {
                from: "e8",
                to: "e3"
            },
            {
                from: "d5",
                to: "f7"
            }
        ],
        termination: "Capablanca won by resignation",
        result: "1-0",
        blackPlayerName: "Frank James Marshall",
        whitePlayerName: "Jose Raul Capablanca",
        analysisData: Lh(72),
        reviewAnalysisComplete: !1
    };
    Fy = (i = Wy, r)=>{
        switch(r.type){
            case Xc:
                return {
                    ...i,
                    finalFen: r.payload.finalPos,
                    moves: r.payload.moves,
                    fens: r.payload.fens,
                    analysisData: Lh(r.payload.fens.length),
                    reviewAnalysisComplete: !1,
                    fromToSquares: r.payload.fromToSquares,
                    termination: r.payload.termination,
                    result: r.payload.result,
                    blackPlayerName: r.payload.blackPlayerName,
                    whitePlayerName: r.payload.whitePlayerName
                };
            case Hh:
                return {
                    ...i,
                    reviewAnalysisComplete: !!r.payload
                };
            case qh:
                {
                    const { index: o, evalScore: f, bestMove: s, moveClassification: h } = r.payload;
                    if (!i.analysisData || o < 0 || o >= i.analysisData.length) return i;
                    const v = i.analysisData.map((S, m)=>m === o ? {
                            evalScore: f,
                            bestMove: s ?? "",
                            moveClassification: h ?? S.moveClassification ?? null
                        } : S);
                    return {
                        ...i,
                        analysisData: v
                    };
                }
            default:
                return i;
        }
    };
    Iy = "TOGGLE_ENGINE";
    ev = "SET_MULTIPV";
    tv = "SET_MAX_DEPTH";
    lv = "SET_AUTO_STOP_TIME";
    av = {
        enabled: !0,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    nv = (i = av, r)=>{
        switch(r.type){
            case Iy:
                return {
                    ...i,
                    enabled: !i.enabled
                };
            case ev:
                return {
                    ...i,
                    multiPV: r.payload
                };
            case tv:
                return {
                    ...i,
                    maxDepth: r.payload
                };
            case lv:
                return {
                    ...i,
                    autoStopTime: r.payload
                };
            default:
                return i;
        }
    };
    uv = Th({
        settings: Gy,
        analysis: $y,
        pgn: Fy,
        engine: nv
    });
    iv = {
        getItem: (i)=>new Promise((r)=>{
                try {
                    const o = localStorage.getItem(i);
                    if (o == null) {
                        r(null);
                        return;
                    }
                    JSON.parse(o), r(o);
                } catch  {
                    r(null);
                }
            }),
        setItem: (i, r)=>new Promise((o)=>{
                try {
                    localStorage.setItem(i, JSON.stringify(r)), o();
                } catch (f) {
                    console.error("Failed to remove item from storage:", f), o();
                }
            }),
        removeItem: (i)=>new Promise((r)=>{
                try {
                    localStorage.removeItem(i), r();
                } catch (o) {
                    console.error("Failed to remove item from storage:", o), r();
                }
            })
    };
    rv = {
        key: "root",
        storage: iv,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    cv = Hy(rv, uv);
    Yh = Sy({
        reducer: cv,
        middleware: (i)=>i({
                serializableCheck: {
                    ignoredActions: [
                        "persist/PERSIST",
                        "persist/REHYDRATE",
                        "persist/PAUSE",
                        "persist/REGISTER",
                        "persist/FLUSH"
                    ]
                }
            })
    });
    jy(Yh);
    const fv = "modulepreload", ov = function(i) {
        return "/chess-frontend/" + i;
    }, dh = {}, sv = function(r, o, f) {
        let s = Promise.resolve();
        if (o && o.length > 0) {
            document.getElementsByTagName("link");
            const v = document.querySelector("meta[property=csp-nonce]"), S = v?.nonce || v?.getAttribute("nonce");
            s = Promise.allSettled(o.map((m)=>{
                if (m = ov(m), m in dh) return;
                dh[m] = !0;
                const p = m.endsWith(".css"), E = p ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${m}"]${E}`)) return;
                const _ = document.createElement("link");
                if (_.rel = p ? "stylesheet" : fv, p || (_.as = "script"), _.crossOrigin = "", _.href = m, S && _.setAttribute("nonce", S), document.head.appendChild(_), p) return new Promise((N, H)=>{
                    _.addEventListener("load", N), _.addEventListener("error", ()=>H(new Error(`Unable to preload CSS for ${m}`)));
                });
            }));
        }
        function h(v) {
            const S = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (S.payload = v, window.dispatchEvent(S), !S.defaultPrevented) throw v;
        }
        return s.then((v)=>{
            for (const S of v || [])S.status === "rejected" && h(S.reason);
            return r().catch(h);
        });
    };
    var Hn = {}, hh;
    function dv() {
        if (hh) return Hn;
        hh = 1, Object.defineProperty(Hn, "__esModule", {
            value: !0
        }), Hn.parse = v, Hn.serialize = p;
        const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, f = /^[\u0020-\u003A\u003D-\u007E]*$/, s = Object.prototype.toString, h = (()=>{
            const N = function() {};
            return N.prototype = Object.create(null), N;
        })();
        function v(N, H) {
            const x = new h, L = N.length;
            if (L < 2) return x;
            const P = H?.decode || E;
            let w = 0;
            do {
                const Q = N.indexOf("=", w);
                if (Q === -1) break;
                const K = N.indexOf(";", w), W = K === -1 ? L : K;
                if (Q > W) {
                    w = N.lastIndexOf(";", Q - 1) + 1;
                    continue;
                }
                const X = S(N, w, Q), te = m(N, Q, X), fe = N.slice(X, te);
                if (x[fe] === void 0) {
                    let Se = S(N, Q + 1, W), oe = m(N, W, Se);
                    const qe = P(N.slice(Se, oe));
                    x[fe] = qe;
                }
                w = W + 1;
            }while (w < L);
            return x;
        }
        function S(N, H, x) {
            do {
                const L = N.charCodeAt(H);
                if (L !== 32 && L !== 9) return H;
            }while (++H < x);
            return x;
        }
        function m(N, H, x) {
            for(; H > x;){
                const L = N.charCodeAt(--H);
                if (L !== 32 && L !== 9) return H + 1;
            }
            return x;
        }
        function p(N, H, x) {
            const L = x?.encode || encodeURIComponent;
            if (!i.test(N)) throw new TypeError(`argument name is invalid: ${N}`);
            const P = L(H);
            if (!r.test(P)) throw new TypeError(`argument val is invalid: ${H}`);
            let w = N + "=" + P;
            if (!x) return w;
            if (x.maxAge !== void 0) {
                if (!Number.isInteger(x.maxAge)) throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
                w += "; Max-Age=" + x.maxAge;
            }
            if (x.domain) {
                if (!o.test(x.domain)) throw new TypeError(`option domain is invalid: ${x.domain}`);
                w += "; Domain=" + x.domain;
            }
            if (x.path) {
                if (!f.test(x.path)) throw new TypeError(`option path is invalid: ${x.path}`);
                w += "; Path=" + x.path;
            }
            if (x.expires) {
                if (!_(x.expires) || !Number.isFinite(x.expires.valueOf())) throw new TypeError(`option expires is invalid: ${x.expires}`);
                w += "; Expires=" + x.expires.toUTCString();
            }
            if (x.httpOnly && (w += "; HttpOnly"), x.secure && (w += "; Secure"), x.partitioned && (w += "; Partitioned"), x.priority) switch(typeof x.priority == "string" ? x.priority.toLowerCase() : void 0){
                case "low":
                    w += "; Priority=Low";
                    break;
                case "medium":
                    w += "; Priority=Medium";
                    break;
                case "high":
                    w += "; Priority=High";
                    break;
                default:
                    throw new TypeError(`option priority is invalid: ${x.priority}`);
            }
            if (x.sameSite) switch(typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite){
                case !0:
                case "strict":
                    w += "; SameSite=Strict";
                    break;
                case "lax":
                    w += "; SameSite=Lax";
                    break;
                case "none":
                    w += "; SameSite=None";
                    break;
                default:
                    throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
            }
            return w;
        }
        function E(N) {
            if (N.indexOf("%") === -1) return N;
            try {
                return decodeURIComponent(N);
            } catch  {
                return N;
            }
        }
        function _(N) {
            return s.call(N) === "[object Date]";
        }
        return Hn;
    }
    dv();
    var ph = "popstate";
    function hv(i = {}) {
        function r(s, h) {
            let { pathname: v = "/", search: S = "", hash: m = "" } = Vl(s.location.hash.substring(1));
            return !v.startsWith("/") && !v.startsWith(".") && (v = "/" + v), Qc("", {
                pathname: v,
                search: S,
                hash: m
            }, h.state && h.state.usr || null, h.state && h.state.key || "default");
        }
        function o(s, h) {
            let v = s.document.querySelector("base"), S = "";
            if (v && v.getAttribute("href")) {
                let m = s.location.href, p = m.indexOf("#");
                S = p === -1 ? m : m.slice(0, p);
            }
            return S + "#" + (typeof h == "string" ? h : Ln(h));
        }
        function f(s, h) {
            Tt(s.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`);
        }
        return mv(r, o, f, i);
    }
    function Oe(i, r) {
        if (i === !1 || i === null || typeof i > "u") throw new Error(r);
    }
    function Tt(i, r) {
        if (!i) {
            typeof console < "u" && console.warn(r);
            try {
                throw new Error(r);
            } catch  {}
        }
    }
    function pv() {
        return Math.random().toString(36).substring(2, 10);
    }
    function mh(i, r) {
        return {
            usr: i.state,
            key: i.key,
            idx: r
        };
    }
    function Qc(i, r, o = null, f) {
        return {
            pathname: typeof i == "string" ? i : i.pathname,
            search: "",
            hash: "",
            ...typeof r == "string" ? Vl(r) : r,
            state: o,
            key: r && r.key || f || pv()
        };
    }
    function Ln({ pathname: i = "/", search: r = "", hash: o = "" }) {
        return r && r !== "?" && (i += r.charAt(0) === "?" ? r : "?" + r), o && o !== "#" && (i += o.charAt(0) === "#" ? o : "#" + o), i;
    }
    function Vl(i) {
        let r = {};
        if (i) {
            let o = i.indexOf("#");
            o >= 0 && (r.hash = i.substring(o), i = i.substring(0, o));
            let f = i.indexOf("?");
            f >= 0 && (r.search = i.substring(f), i = i.substring(0, f)), i && (r.pathname = i);
        }
        return r;
    }
    function mv(i, r, o, f = {}) {
        let { window: s = document.defaultView, v5Compat: h = !1 } = f, v = s.history, S = "POP", m = null, p = E();
        p == null && (p = 0, v.replaceState({
            ...v.state,
            idx: p
        }, ""));
        function E() {
            return (v.state || {
                idx: null
            }).idx;
        }
        function _() {
            S = "POP";
            let P = E(), w = P == null ? null : P - p;
            p = P, m && m({
                action: S,
                location: L.location,
                delta: w
            });
        }
        function N(P, w) {
            S = "PUSH";
            let Q = Qc(L.location, P, w);
            o && o(Q, P), p = E() + 1;
            let K = mh(Q, p), W = L.createHref(Q);
            try {
                v.pushState(K, "", W);
            } catch (X) {
                if (X instanceof DOMException && X.name === "DataCloneError") throw X;
                s.location.assign(W);
            }
            h && m && m({
                action: S,
                location: L.location,
                delta: 1
            });
        }
        function H(P, w) {
            S = "REPLACE";
            let Q = Qc(L.location, P, w);
            o && o(Q, P), p = E();
            let K = mh(Q, p), W = L.createHref(Q);
            v.replaceState(K, "", W), h && m && m({
                action: S,
                location: L.location,
                delta: 0
            });
        }
        function x(P) {
            let w = s.location.origin !== "null" ? s.location.origin : s.location.href, Q = typeof P == "string" ? P : Ln(P);
            return Q = Q.replace(/ $/, "%20"), Oe(w, `No window.location.(origin|href) available to create URL for href: ${Q}`), new URL(Q, w);
        }
        let L = {
            get action () {
                return S;
            },
            get location () {
                return i(s, v);
            },
            listen (P) {
                if (m) throw new Error("A history only accepts one active listener");
                return s.addEventListener(ph, _), m = P, ()=>{
                    s.removeEventListener(ph, _), m = null;
                };
            },
            createHref (P) {
                return r(s, P);
            },
            createURL: x,
            encodeLocation (P) {
                let w = x(P);
                return {
                    pathname: w.pathname,
                    search: w.search,
                    hash: w.hash
                };
            },
            push: N,
            replace: H,
            go (P) {
                return v.go(P);
            }
        };
        return L;
    }
    function jh(i, r, o = "/") {
        return yv(i, r, o, !1);
    }
    function yv(i, r, o, f) {
        let s = typeof r == "string" ? Vl(r) : r, h = el(s.pathname || "/", o);
        if (h == null) return null;
        let v = Kh(i);
        vv(v);
        let S = null;
        for(let m = 0; S == null && m < v.length; ++m){
            let p = Mv(h);
            S = _v(v[m], p, f);
        }
        return S;
    }
    function Kh(i, r = [], o = [], f = "") {
        let s = (h, v, S)=>{
            let m = {
                relativePath: S === void 0 ? h.path || "" : S,
                caseSensitive: h.caseSensitive === !0,
                childrenIndex: v,
                route: h
            };
            m.relativePath.startsWith("/") && (Oe(m.relativePath.startsWith(f), `Absolute route path "${m.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), m.relativePath = m.relativePath.slice(f.length));
            let p = It([
                f,
                m.relativePath
            ]), E = o.concat(m);
            h.children && h.children.length > 0 && (Oe(h.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${p}".`), Kh(h.children, r, E, p)), !(h.path == null && !h.index) && r.push({
                path: p,
                score: Ov(p, h.index),
                routesMeta: E
            });
        };
        return i.forEach((h, v)=>{
            if (h.path === "" || !h.path?.includes("?")) s(h, v);
            else for (let S of Gh(h.path))s(h, v, S);
        }), r;
    }
    function Gh(i) {
        let r = i.split("/");
        if (r.length === 0) return [];
        let [o, ...f] = r, s = o.endsWith("?"), h = o.replace(/\?$/, "");
        if (f.length === 0) return s ? [
            h,
            ""
        ] : [
            h
        ];
        let v = Gh(f.join("/")), S = [];
        return S.push(...v.map((m)=>m === "" ? h : [
                h,
                m
            ].join("/"))), s && S.push(...v), S.map((m)=>i.startsWith("/") && m === "" ? "/" : m);
    }
    function vv(i) {
        i.sort((r, o)=>r.score !== o.score ? o.score - r.score : Av(r.routesMeta.map((f)=>f.childrenIndex), o.routesMeta.map((f)=>f.childrenIndex)));
    }
    var gv = /^:[\w-]+$/, bv = 3, Sv = 2, Ev = 1, Rv = 10, Tv = -2, yh = (i)=>i === "*";
    function Ov(i, r) {
        let o = i.split("/"), f = o.length;
        return o.some(yh) && (f += Tv), r && (f += Sv), o.filter((s)=>!yh(s)).reduce((s, h)=>s + (gv.test(h) ? bv : h === "" ? Ev : Rv), f);
    }
    function Av(i, r) {
        return i.length === r.length && i.slice(0, -1).every((f, s)=>f === r[s]) ? i[i.length - 1] - r[r.length - 1] : 0;
    }
    function _v(i, r, o = !1) {
        let { routesMeta: f } = i, s = {}, h = "/", v = [];
        for(let S = 0; S < f.length; ++S){
            let m = f[S], p = S === f.length - 1, E = h === "/" ? r : r.slice(h.length) || "/", _ = oi({
                path: m.relativePath,
                caseSensitive: m.caseSensitive,
                end: p
            }, E), N = m.route;
            if (!_ && p && o && !f[f.length - 1].route.index && (_ = oi({
                path: m.relativePath,
                caseSensitive: m.caseSensitive,
                end: !1
            }, E)), !_) return null;
            Object.assign(s, _.params), v.push({
                params: s,
                pathname: It([
                    h,
                    _.pathname
                ]),
                pathnameBase: Bv(It([
                    h,
                    _.pathnameBase
                ])),
                route: N
            }), _.pathnameBase !== "/" && (h = It([
                h,
                _.pathnameBase
            ]));
        }
        return v;
    }
    function oi(i, r) {
        typeof i == "string" && (i = {
            path: i,
            caseSensitive: !1,
            end: !0
        });
        let [o, f] = Nv(i.path, i.caseSensitive, i.end), s = r.match(o);
        if (!s) return null;
        let h = s[0], v = h.replace(/(.)\/+$/, "$1"), S = s.slice(1);
        return {
            params: f.reduce((p, { paramName: E, isOptional: _ }, N)=>{
                if (E === "*") {
                    let x = S[N] || "";
                    v = h.slice(0, h.length - x.length).replace(/(.)\/+$/, "$1");
                }
                const H = S[N];
                return _ && !H ? p[E] = void 0 : p[E] = (H || "").replace(/%2F/g, "/"), p;
            }, {}),
            pathname: h,
            pathnameBase: v,
            pattern: i
        };
    }
    function Nv(i, r = !1, o = !0) {
        Tt(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`);
        let f = [], s = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (v, S, m)=>(f.push({
                paramName: S,
                isOptional: m != null
            }), m ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return i.endsWith("*") ? (f.push({
            paramName: "*"
        }), s += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? s += "\\/*$" : i !== "" && i !== "/" && (s += "(?:(?=\\/|$))"), [
            new RegExp(s, r ? void 0 : "i"),
            f
        ];
    }
    function Mv(i) {
        try {
            return i.split("/").map((r)=>decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
        } catch (r) {
            return Tt(!1, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), i;
        }
    }
    function el(i, r) {
        if (r === "/") return i;
        if (!i.toLowerCase().startsWith(r.toLowerCase())) return null;
        let o = r.endsWith("/") ? r.length - 1 : r.length, f = i.charAt(o);
        return f && f !== "/" ? null : i.slice(o) || "/";
    }
    function Dv(i, r = "/") {
        let { pathname: o, search: f = "", hash: s = "" } = typeof i == "string" ? Vl(i) : i;
        return {
            pathname: o ? o.startsWith("/") ? o : xv(o, r) : r,
            search: Uv(f),
            hash: Cv(s)
        };
    }
    function xv(i, r) {
        let o = r.replace(/\/+$/, "").split("/");
        return i.split("/").forEach((s)=>{
            s === ".." ? o.length > 1 && o.pop() : s !== "." && o.push(s);
        }), o.length > 1 ? o.join("/") : "/";
    }
    function Hc(i, r, o, f) {
        return `Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function zv(i) {
        return i.filter((r, o)=>o === 0 || r.route.path && r.route.path.length > 0);
    }
    function Vc(i) {
        let r = zv(i);
        return r.map((o, f)=>f === r.length - 1 ? o.pathname : o.pathnameBase);
    }
    function Zc(i, r, o, f = !1) {
        let s;
        typeof i == "string" ? s = Vl(i) : (s = {
            ...i
        }, Oe(!s.pathname || !s.pathname.includes("?"), Hc("?", "pathname", "search", s)), Oe(!s.pathname || !s.pathname.includes("#"), Hc("#", "pathname", "hash", s)), Oe(!s.search || !s.search.includes("#"), Hc("#", "search", "hash", s)));
        let h = i === "" || s.pathname === "", v = h ? "/" : s.pathname, S;
        if (v == null) S = o;
        else {
            let _ = r.length - 1;
            if (!f && v.startsWith("..")) {
                let N = v.split("/");
                for(; N[0] === "..";)N.shift(), _ -= 1;
                s.pathname = N.join("/");
            }
            S = _ >= 0 ? r[_] : "/";
        }
        let m = Dv(s, S), p = v && v !== "/" && v.endsWith("/"), E = (h || v === ".") && o.endsWith("/");
        return !m.pathname.endsWith("/") && (p || E) && (m.pathname += "/"), m;
    }
    var It = (i)=>i.join("/").replace(/\/\/+/g, "/"), Bv = (i)=>i.replace(/\/+$/, "").replace(/^\/*/, "/"), Uv = (i)=>!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, Cv = (i)=>!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i;
    function qv(i) {
        return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
    }
    var Xh = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(Xh);
    var Hv = [
        "GET",
        ...Xh
    ];
    new Set(Hv);
    var Ua = T.createContext(null);
    Ua.displayName = "DataRouter";
    var di = T.createContext(null);
    di.displayName = "DataRouterState";
    var Vh = T.createContext({
        isTransitioning: !1
    });
    Vh.displayName = "ViewTransition";
    var wv = T.createContext(new Map);
    wv.displayName = "Fetchers";
    var Pv = T.createContext(null);
    Pv.displayName = "Await";
    var Mt = T.createContext(null);
    Mt.displayName = "Navigation";
    var Yn = T.createContext(null);
    Yn.displayName = "Location";
    var qt = T.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    qt.displayName = "Route";
    var kc = T.createContext(null);
    kc.displayName = "RouteError";
    function Qv(i, { relative: r } = {}) {
        Oe(Ca(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: o, navigator: f } = T.useContext(Mt), { hash: s, pathname: h, search: v } = jn(i, {
            relative: r
        }), S = h;
        return o !== "/" && (S = h === "/" ? o : It([
            o,
            h
        ])), f.createHref({
            pathname: S,
            search: v,
            hash: s
        });
    }
    function Ca() {
        return T.useContext(Yn) != null;
    }
    function tl() {
        return Oe(Ca(), "useLocation() may be used only in the context of a <Router> component."), T.useContext(Yn).location;
    }
    var Zh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function kh(i) {
        T.useContext(Mt).static || T.useLayoutEffect(i);
    }
    function Jh() {
        let { isDataRoute: i } = T.useContext(qt);
        return i ? Fv() : Lv();
    }
    function Lv() {
        Oe(Ca(), "useNavigate() may be used only in the context of a <Router> component.");
        let i = T.useContext(Ua), { basename: r, navigator: o } = T.useContext(Mt), { matches: f } = T.useContext(qt), { pathname: s } = tl(), h = JSON.stringify(Vc(f)), v = T.useRef(!1);
        return kh(()=>{
            v.current = !0;
        }), T.useCallback((m, p = {})=>{
            if (Tt(v.current, Zh), !v.current) return;
            if (typeof m == "number") {
                o.go(m);
                return;
            }
            let E = Zc(m, JSON.parse(h), s, p.relative === "path");
            i == null && r !== "/" && (E.pathname = E.pathname === "/" ? r : It([
                r,
                E.pathname
            ])), (p.replace ? o.replace : o.push)(E, p.state, p);
        }, [
            r,
            o,
            h,
            s,
            i
        ]);
    }
    T.createContext(null);
    function jn(i, { relative: r } = {}) {
        let { matches: o } = T.useContext(qt), { pathname: f } = tl(), s = JSON.stringify(Vc(o));
        return T.useMemo(()=>Zc(i, JSON.parse(s), f, r === "path"), [
            i,
            s,
            f,
            r
        ]);
    }
    function Yv(i, r) {
        return $h(i, r);
    }
    function $h(i, r, o, f) {
        Oe(Ca(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: s, static: h } = T.useContext(Mt), { matches: v } = T.useContext(qt), S = v[v.length - 1], m = S ? S.params : {}, p = S ? S.pathname : "/", E = S ? S.pathnameBase : "/", _ = S && S.route;
        {
            let Q = _ && _.path || "";
            Wh(p, !_ || Q.endsWith("*") || Q.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`);
        }
        let N = tl(), H;
        if (r) {
            let Q = typeof r == "string" ? Vl(r) : r;
            Oe(E === "/" || Q.pathname?.startsWith(E), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Q.pathname}" was given in the \`location\` prop.`), H = Q;
        } else H = N;
        let x = H.pathname || "/", L = x;
        if (E !== "/") {
            let Q = E.replace(/^\//, "").split("/");
            L = "/" + x.replace(/^\//, "").split("/").slice(Q.length).join("/");
        }
        let P = !h && o && o.matches && o.matches.length > 0 ? o.matches : jh(i, {
            pathname: L
        });
        Tt(_ || P != null, `No routes matched location "${H.pathname}${H.search}${H.hash}" `), Tt(P == null || P[P.length - 1].route.element !== void 0 || P[P.length - 1].route.Component !== void 0 || P[P.length - 1].route.lazy !== void 0, `Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let w = Vv(P && P.map((Q)=>Object.assign({}, Q, {
                params: Object.assign({}, m, Q.params),
                pathname: It([
                    E,
                    s.encodeLocation ? s.encodeLocation(Q.pathname).pathname : Q.pathname
                ]),
                pathnameBase: Q.pathnameBase === "/" ? E : It([
                    E,
                    s.encodeLocation ? s.encodeLocation(Q.pathnameBase).pathname : Q.pathnameBase
                ])
            })), v, o, f);
        return r && w ? T.createElement(Yn.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    ...H
                },
                navigationType: "POP"
            }
        }, w) : w;
    }
    function jv() {
        let i = Wv(), r = qv(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i), o = i instanceof Error ? i.stack : null, f = "rgba(200,200,200, 0.5)", s = {
            padding: "0.5rem",
            backgroundColor: f
        }, h = {
            padding: "2px 4px",
            backgroundColor: f
        }, v = null;
        return console.error("Error handled by React Router default ErrorBoundary:", i), v = T.createElement(T.Fragment, null, T.createElement("p", null, "💿 Hey developer 👋"), T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", T.createElement("code", {
            style: h
        }, "ErrorBoundary"), " or", " ", T.createElement("code", {
            style: h
        }, "errorElement"), " prop on your route.")), T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), o ? T.createElement("pre", {
            style: s
        }, o) : null, v);
    }
    var Kv = T.createElement(jv, null), Gv = class extends T.Component {
        constructor(i){
            super(i), this.state = {
                location: i.location,
                revalidation: i.revalidation,
                error: i.error
            };
        }
        static getDerivedStateFromError(i) {
            return {
                error: i
            };
        }
        static getDerivedStateFromProps(i, r) {
            return r.location !== i.location || r.revalidation !== "idle" && i.revalidation === "idle" ? {
                error: i.error,
                location: i.location,
                revalidation: i.revalidation
            } : {
                error: i.error !== void 0 ? i.error : r.error,
                location: r.location,
                revalidation: i.revalidation || r.revalidation
            };
        }
        componentDidCatch(i, r) {
            console.error("React Router caught the following error during render", i, r);
        }
        render() {
            return this.state.error !== void 0 ? T.createElement(qt.Provider, {
                value: this.props.routeContext
            }, T.createElement(kc.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function Xv({ routeContext: i, match: r, children: o }) {
        let f = T.useContext(Ua);
        return f && f.static && f.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = r.route.id), T.createElement(qt.Provider, {
            value: i
        }, o);
    }
    function Vv(i, r = [], o = null, f = null) {
        if (i == null) {
            if (!o) return null;
            if (o.errors) i = o.matches;
            else if (r.length === 0 && !o.initialized && o.matches.length > 0) i = o.matches;
            else return null;
        }
        let s = i, h = o?.errors;
        if (h != null) {
            let m = s.findIndex((p)=>p.route.id && h?.[p.route.id] !== void 0);
            Oe(m >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`), s = s.slice(0, Math.min(s.length, m + 1));
        }
        let v = !1, S = -1;
        if (o) for(let m = 0; m < s.length; m++){
            let p = s[m];
            if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (S = m), p.route.id) {
                let { loaderData: E, errors: _ } = o, N = p.route.loader && !E.hasOwnProperty(p.route.id) && (!_ || _[p.route.id] === void 0);
                if (p.route.lazy || N) {
                    v = !0, S >= 0 ? s = s.slice(0, S + 1) : s = [
                        s[0]
                    ];
                    break;
                }
            }
        }
        return s.reduceRight((m, p, E)=>{
            let _, N = !1, H = null, x = null;
            o && (_ = h && p.route.id ? h[p.route.id] : void 0, H = p.route.errorElement || Kv, v && (S < 0 && E === 0 ? (Wh("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), N = !0, x = null) : S === E && (N = !0, x = p.route.hydrateFallbackElement || null)));
            let L = r.concat(s.slice(0, E + 1)), P = ()=>{
                let w;
                return _ ? w = H : N ? w = x : p.route.Component ? w = T.createElement(p.route.Component, null) : p.route.element ? w = p.route.element : w = m, T.createElement(Xv, {
                    match: p,
                    routeContext: {
                        outlet: m,
                        matches: L,
                        isDataRoute: o != null
                    },
                    children: w
                });
            };
            return o && (p.route.ErrorBoundary || p.route.errorElement || E === 0) ? T.createElement(Gv, {
                location: o.location,
                revalidation: o.revalidation,
                component: H,
                error: _,
                children: P(),
                routeContext: {
                    outlet: null,
                    matches: L,
                    isDataRoute: !0
                }
            }) : P();
        }, null);
    }
    function Jc(i) {
        return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Zv(i) {
        let r = T.useContext(Ua);
        return Oe(r, Jc(i)), r;
    }
    function kv(i) {
        let r = T.useContext(di);
        return Oe(r, Jc(i)), r;
    }
    function Jv(i) {
        let r = T.useContext(qt);
        return Oe(r, Jc(i)), r;
    }
    function $c(i) {
        let r = Jv(i), o = r.matches[r.matches.length - 1];
        return Oe(o.route.id, `${i} can only be used on routes that contain a unique "id"`), o.route.id;
    }
    function $v() {
        return $c("useRouteId");
    }
    function Wv() {
        let i = T.useContext(kc), r = kv("useRouteError"), o = $c("useRouteError");
        return i !== void 0 ? i : r.errors?.[o];
    }
    function Fv() {
        let { router: i } = Zv("useNavigate"), r = $c("useNavigate"), o = T.useRef(!1);
        return kh(()=>{
            o.current = !0;
        }), T.useCallback(async (s, h = {})=>{
            Tt(o.current, Zh), o.current && (typeof s == "number" ? i.navigate(s) : await i.navigate(s, {
                fromRouteId: r,
                ...h
            }));
        }, [
            i,
            r
        ]);
    }
    var vh = {};
    function Wh(i, r, o) {
        !r && !vh[i] && (vh[i] = !0, Tt(!1, o));
    }
    T.memo(Iv);
    function Iv({ routes: i, future: r, state: o }) {
        return $h(i, void 0, o, r);
    }
    function gh({ to: i, replace: r, state: o, relative: f }) {
        Oe(Ca(), "<Navigate> may be used only in the context of a <Router> component.");
        let { static: s } = T.useContext(Mt);
        Tt(!s, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
        let { matches: h } = T.useContext(qt), { pathname: v } = tl(), S = Jh(), m = Zc(i, Vc(h), v, f === "path"), p = JSON.stringify(m);
        return T.useEffect(()=>{
            S(JSON.parse(p), {
                replace: r,
                state: o,
                relative: f
            });
        }, [
            S,
            p,
            f,
            r,
            o
        ]), null;
    }
    function ui(i) {
        Oe(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function e0({ basename: i = "/", children: r = null, location: o, navigationType: f = "POP", navigator: s, static: h = !1 }) {
        Oe(!Ca(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let v = i.replace(/^\/*/, "/"), S = T.useMemo(()=>({
                basename: v,
                navigator: s,
                static: h,
                future: {}
            }), [
            v,
            s,
            h
        ]);
        typeof o == "string" && (o = Vl(o));
        let { pathname: m = "/", search: p = "", hash: E = "", state: _ = null, key: N = "default" } = o, H = T.useMemo(()=>{
            let x = el(m, v);
            return x == null ? null : {
                location: {
                    pathname: x,
                    search: p,
                    hash: E,
                    state: _,
                    key: N
                },
                navigationType: f
            };
        }, [
            v,
            m,
            p,
            E,
            _,
            N,
            f
        ]);
        return Tt(H != null, `<Router basename="${v}"> is not able to match the URL "${m}${p}${E}" because it does not start with the basename, so the <Router> won't render anything.`), H == null ? null : T.createElement(Mt.Provider, {
            value: S
        }, T.createElement(Yn.Provider, {
            children: r,
            value: H
        }));
    }
    function t0({ children: i, location: r }) {
        return Yv(Lc(i), r);
    }
    function Lc(i, r = []) {
        let o = [];
        return T.Children.forEach(i, (f, s)=>{
            if (!T.isValidElement(f)) return;
            let h = [
                ...r,
                s
            ];
            if (f.type === T.Fragment) {
                o.push.apply(o, Lc(f.props.children, h));
                return;
            }
            Oe(f.type === ui, `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Oe(!f.props.index || !f.props.children, "An index route cannot have child routes.");
            let v = {
                id: f.props.id || h.join("-"),
                caseSensitive: f.props.caseSensitive,
                element: f.props.element,
                Component: f.props.Component,
                index: f.props.index,
                path: f.props.path,
                loader: f.props.loader,
                action: f.props.action,
                hydrateFallbackElement: f.props.hydrateFallbackElement,
                HydrateFallback: f.props.HydrateFallback,
                errorElement: f.props.errorElement,
                ErrorBoundary: f.props.ErrorBoundary,
                hasErrorBoundary: f.props.hasErrorBoundary === !0 || f.props.ErrorBoundary != null || f.props.errorElement != null,
                shouldRevalidate: f.props.shouldRevalidate,
                handle: f.props.handle,
                lazy: f.props.lazy
            };
            f.props.children && (v.children = Lc(f.props.children, h)), o.push(v);
        }), o;
    }
    var ii = "get", ri = "application/x-www-form-urlencoded";
    function hi(i) {
        return i != null && typeof i.tagName == "string";
    }
    function l0(i) {
        return hi(i) && i.tagName.toLowerCase() === "button";
    }
    function a0(i) {
        return hi(i) && i.tagName.toLowerCase() === "form";
    }
    function n0(i) {
        return hi(i) && i.tagName.toLowerCase() === "input";
    }
    function u0(i) {
        return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
    }
    function i0(i, r) {
        return i.button === 0 && (!r || r === "_self") && !u0(i);
    }
    var ai = null;
    function r0() {
        if (ai === null) try {
            new FormData(document.createElement("form"), 0), ai = !1;
        } catch  {
            ai = !0;
        }
        return ai;
    }
    var c0 = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function wc(i) {
        return i != null && !c0.has(i) ? (Tt(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ri}"`), null) : i;
    }
    function f0(i, r) {
        let o, f, s, h, v;
        if (a0(i)) {
            let S = i.getAttribute("action");
            f = S ? el(S, r) : null, o = i.getAttribute("method") || ii, s = wc(i.getAttribute("enctype")) || ri, h = new FormData(i);
        } else if (l0(i) || n0(i) && (i.type === "submit" || i.type === "image")) {
            let S = i.form;
            if (S == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let m = i.getAttribute("formaction") || S.getAttribute("action");
            if (f = m ? el(m, r) : null, o = i.getAttribute("formmethod") || S.getAttribute("method") || ii, s = wc(i.getAttribute("formenctype")) || wc(S.getAttribute("enctype")) || ri, h = new FormData(S, i), !r0()) {
                let { name: p, type: E, value: _ } = i;
                if (E === "image") {
                    let N = p ? `${p}.` : "";
                    h.append(`${N}x`, "0"), h.append(`${N}y`, "0");
                } else p && h.append(p, _);
            }
        } else {
            if (hi(i)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            o = ii, f = null, s = ri, v = i;
        }
        return h && s === "text/plain" && (v = h, h = void 0), {
            action: f,
            method: o.toLowerCase(),
            encType: s,
            formData: h,
            body: v
        };
    }
    function Wc(i, r) {
        if (i === !1 || i === null || typeof i > "u") throw new Error(r);
    }
    async function o0(i, r) {
        if (i.id in r) return r[i.id];
        try {
            let o = await import(i.module).then(async (m)=>{
                await m.__tla;
                return m;
            });
            return r[i.id] = o, o;
        } catch (o) {
            return console.error(`Error loading route module \`${i.module}\`, reloading page...`), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(()=>{});
        }
    }
    function s0(i) {
        return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string";
    }
    async function d0(i, r, o) {
        let f = await Promise.all(i.map(async (s)=>{
            let h = r.routes[s.route.id];
            if (h) {
                let v = await o0(h, o);
                return v.links ? v.links() : [];
            }
            return [];
        }));
        return y0(f.flat(1).filter(s0).filter((s)=>s.rel === "stylesheet" || s.rel === "preload").map((s)=>s.rel === "stylesheet" ? {
                ...s,
                rel: "prefetch",
                as: "style"
            } : {
                ...s,
                rel: "prefetch"
            }));
    }
    function bh(i, r, o, f, s, h) {
        let v = (m, p)=>o[p] ? m.route.id !== o[p].route.id : !0, S = (m, p)=>o[p].pathname !== m.pathname || o[p].route.path?.endsWith("*") && o[p].params["*"] !== m.params["*"];
        return h === "assets" ? r.filter((m, p)=>v(m, p) || S(m, p)) : h === "data" ? r.filter((m, p)=>{
            let E = f.routes[m.route.id];
            if (!E || !E.hasLoader) return !1;
            if (v(m, p) || S(m, p)) return !0;
            if (m.route.shouldRevalidate) {
                let _ = m.route.shouldRevalidate({
                    currentUrl: new URL(s.pathname + s.search + s.hash, window.origin),
                    currentParams: o[0]?.params || {},
                    nextUrl: new URL(i, window.origin),
                    nextParams: m.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof _ == "boolean") return _;
            }
            return !0;
        }) : [];
    }
    function h0(i, r, { includeHydrateFallback: o } = {}) {
        return p0(i.map((f)=>{
            let s = r.routes[f.route.id];
            if (!s) return [];
            let h = [
                s.module
            ];
            return s.clientActionModule && (h = h.concat(s.clientActionModule)), s.clientLoaderModule && (h = h.concat(s.clientLoaderModule)), o && s.hydrateFallbackModule && (h = h.concat(s.hydrateFallbackModule)), s.imports && (h = h.concat(s.imports)), h;
        }).flat(1));
    }
    function p0(i) {
        return [
            ...new Set(i)
        ];
    }
    function m0(i) {
        let r = {}, o = Object.keys(i).sort();
        for (let f of o)r[f] = i[f];
        return r;
    }
    function y0(i, r) {
        let o = new Set;
        return new Set(r), i.reduce((f, s)=>{
            let h = JSON.stringify(m0(s));
            return o.has(h) || (o.add(h), f.push({
                key: h,
                link: s
            })), f;
        }, []);
    }
    function v0(i, r) {
        let o = typeof i == "string" ? new URL(i, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
        return o.pathname === "/" ? o.pathname = "_root.data" : r && el(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.data` : o.pathname = `${o.pathname.replace(/\/$/, "")}.data`, o;
    }
    function Fh() {
        let i = T.useContext(Ua);
        return Wc(i, "You must render this element inside a <DataRouterContext.Provider> element"), i;
    }
    function g0() {
        let i = T.useContext(di);
        return Wc(i, "You must render this element inside a <DataRouterStateContext.Provider> element"), i;
    }
    var Fc = T.createContext(void 0);
    Fc.displayName = "FrameworkContext";
    function Ih() {
        let i = T.useContext(Fc);
        return Wc(i, "You must render this element inside a <HydratedRouter> element"), i;
    }
    function b0(i, r) {
        let o = T.useContext(Fc), [f, s] = T.useState(!1), [h, v] = T.useState(!1), { onFocus: S, onBlur: m, onMouseEnter: p, onMouseLeave: E, onTouchStart: _ } = r, N = T.useRef(null);
        T.useEffect(()=>{
            if (i === "render" && v(!0), i === "viewport") {
                let L = (w)=>{
                    w.forEach((Q)=>{
                        v(Q.isIntersecting);
                    });
                }, P = new IntersectionObserver(L, {
                    threshold: .5
                });
                return N.current && P.observe(N.current), ()=>{
                    P.disconnect();
                };
            }
        }, [
            i
        ]), T.useEffect(()=>{
            if (f) {
                let L = setTimeout(()=>{
                    v(!0);
                }, 100);
                return ()=>{
                    clearTimeout(L);
                };
            }
        }, [
            f
        ]);
        let H = ()=>{
            s(!0);
        }, x = ()=>{
            s(!1), v(!1);
        };
        return o ? i !== "intent" ? [
            h,
            N,
            {}
        ] : [
            h,
            N,
            {
                onFocus: wn(S, H),
                onBlur: wn(m, x),
                onMouseEnter: wn(p, H),
                onMouseLeave: wn(E, x),
                onTouchStart: wn(_, H)
            }
        ] : [
            !1,
            N,
            {}
        ];
    }
    function wn(i, r) {
        return (o)=>{
            i && i(o), o.defaultPrevented || r(o);
        };
    }
    function S0({ page: i, ...r }) {
        let { router: o } = Fh(), f = T.useMemo(()=>jh(o.routes, i, o.basename), [
            o.routes,
            i,
            o.basename
        ]);
        return f ? T.createElement(R0, {
            page: i,
            matches: f,
            ...r
        }) : null;
    }
    function E0(i) {
        let { manifest: r, routeModules: o } = Ih(), [f, s] = T.useState([]);
        return T.useEffect(()=>{
            let h = !1;
            return d0(i, r, o).then((v)=>{
                h || s(v);
            }), ()=>{
                h = !0;
            };
        }, [
            i,
            r,
            o
        ]), f;
    }
    function R0({ page: i, matches: r, ...o }) {
        let f = tl(), { manifest: s, routeModules: h } = Ih(), { basename: v } = Fh(), { loaderData: S, matches: m } = g0(), p = T.useMemo(()=>bh(i, r, m, s, f, "data"), [
            i,
            r,
            m,
            s,
            f
        ]), E = T.useMemo(()=>bh(i, r, m, s, f, "assets"), [
            i,
            r,
            m,
            s,
            f
        ]), _ = T.useMemo(()=>{
            if (i === f.pathname + f.search + f.hash) return [];
            let x = new Set, L = !1;
            if (r.forEach((w)=>{
                let Q = s.routes[w.route.id];
                !Q || !Q.hasLoader || (!p.some((K)=>K.route.id === w.route.id) && w.route.id in S && h[w.route.id]?.shouldRevalidate || Q.hasClientLoader ? L = !0 : x.add(w.route.id));
            }), x.size === 0) return [];
            let P = v0(i, v);
            return L && x.size > 0 && P.searchParams.set("_routes", r.filter((w)=>x.has(w.route.id)).map((w)=>w.route.id).join(",")), [
                P.pathname + P.search
            ];
        }, [
            v,
            S,
            f,
            s,
            p,
            r,
            i,
            h
        ]), N = T.useMemo(()=>h0(E, s), [
            E,
            s
        ]), H = E0(E);
        return T.createElement(T.Fragment, null, _.map((x)=>T.createElement("link", {
                key: x,
                rel: "prefetch",
                as: "fetch",
                href: x,
                ...o
            })), N.map((x)=>T.createElement("link", {
                key: x,
                rel: "modulepreload",
                href: x,
                ...o
            })), H.map(({ key: x, link: L })=>T.createElement("link", {
                key: x,
                ...L
            })));
    }
    function T0(...i) {
        return (r)=>{
            i.forEach((o)=>{
                typeof o == "function" ? o(r) : o != null && (o.current = r);
            });
        };
    }
    var ep = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        ep && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function O0({ basename: i, children: r, window: o }) {
        let f = T.useRef();
        f.current == null && (f.current = hv({
            window: o,
            v5Compat: !0
        }));
        let s = f.current, [h, v] = T.useState({
            action: s.action,
            location: s.location
        }), S = T.useCallback((m)=>{
            T.startTransition(()=>v(m));
        }, [
            v
        ]);
        return T.useLayoutEffect(()=>s.listen(S), [
            s,
            S
        ]), T.createElement(e0, {
            basename: i,
            children: r,
            location: h.location,
            navigationType: h.action,
            navigator: s
        });
    }
    var tp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, lp = T.forwardRef(function({ onClick: r, discover: o = "render", prefetch: f = "none", relative: s, reloadDocument: h, replace: v, state: S, target: m, to: p, preventScrollReset: E, viewTransition: _, ...N }, H) {
        let { basename: x } = T.useContext(Mt), L = typeof p == "string" && tp.test(p), P, w = !1;
        if (typeof p == "string" && L && (P = p, ep)) try {
            let oe = new URL(window.location.href), qe = p.startsWith("//") ? new URL(oe.protocol + p) : new URL(p), Be = el(qe.pathname, x);
            qe.origin === oe.origin && Be != null ? p = Be + qe.search + qe.hash : w = !0;
        } catch  {
            Tt(!1, `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let Q = Qv(p, {
            relative: s
        }), [K, W, X] = b0(f, N), te = M0(p, {
            replace: v,
            state: S,
            target: m,
            preventScrollReset: E,
            relative: s,
            viewTransition: _
        });
        function fe(oe) {
            r && r(oe), oe.defaultPrevented || te(oe);
        }
        let Se = T.createElement("a", {
            ...N,
            ...X,
            href: P || Q,
            onClick: w || h ? r : fe,
            ref: T0(H, W),
            target: m,
            "data-discover": !L && o === "render" ? "true" : void 0
        });
        return K && !L ? T.createElement(T.Fragment, null, Se, T.createElement(S0, {
            page: Q
        })) : Se;
    });
    lp.displayName = "Link";
    var A0 = T.forwardRef(function({ "aria-current": r = "page", caseSensitive: o = !1, className: f = "", end: s = !1, style: h, to: v, viewTransition: S, children: m, ...p }, E) {
        let _ = jn(v, {
            relative: p.relative
        }), N = tl(), H = T.useContext(di), { navigator: x, basename: L } = T.useContext(Mt), P = H != null && U0(_) && S === !0, w = x.encodeLocation ? x.encodeLocation(_).pathname : _.pathname, Q = N.pathname, K = H && H.navigation && H.navigation.location ? H.navigation.location.pathname : null;
        o || (Q = Q.toLowerCase(), K = K ? K.toLowerCase() : null, w = w.toLowerCase()), K && L && (K = el(K, L) || K);
        const W = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
        let X = Q === w || !s && Q.startsWith(w) && Q.charAt(W) === "/", te = K != null && (K === w || !s && K.startsWith(w) && K.charAt(w.length) === "/"), fe = {
            isActive: X,
            isPending: te,
            isTransitioning: P
        }, Se = X ? r : void 0, oe;
        typeof f == "function" ? oe = f(fe) : oe = [
            f,
            X ? "active" : null,
            te ? "pending" : null,
            P ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let qe = typeof h == "function" ? h(fe) : h;
        return T.createElement(lp, {
            ...p,
            "aria-current": Se,
            className: oe,
            ref: E,
            style: qe,
            to: v,
            viewTransition: S
        }, typeof m == "function" ? m(fe) : m);
    });
    A0.displayName = "NavLink";
    var _0 = T.forwardRef(({ discover: i = "render", fetcherKey: r, navigate: o, reloadDocument: f, replace: s, state: h, method: v = ii, action: S, onSubmit: m, relative: p, preventScrollReset: E, viewTransition: _, ...N }, H)=>{
        let x = z0(), L = B0(S, {
            relative: p
        }), P = v.toLowerCase() === "get" ? "get" : "post", w = typeof S == "string" && tp.test(S), Q = (K)=>{
            if (m && m(K), K.defaultPrevented) return;
            K.preventDefault();
            let W = K.nativeEvent.submitter, X = W?.getAttribute("formmethod") || v;
            x(W || K.currentTarget, {
                fetcherKey: r,
                method: X,
                navigate: o,
                replace: s,
                state: h,
                relative: p,
                preventScrollReset: E,
                viewTransition: _
            });
        };
        return T.createElement("form", {
            ref: H,
            method: P,
            action: L,
            onSubmit: f ? m : Q,
            ...N,
            "data-discover": !w && i === "render" ? "true" : void 0
        });
    });
    _0.displayName = "Form";
    function N0(i) {
        return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function ap(i) {
        let r = T.useContext(Ua);
        return Oe(r, N0(i)), r;
    }
    function M0(i, { target: r, replace: o, state: f, preventScrollReset: s, relative: h, viewTransition: v } = {}) {
        let S = Jh(), m = tl(), p = jn(i, {
            relative: h
        });
        return T.useCallback((E)=>{
            if (i0(E, r)) {
                E.preventDefault();
                let _ = o !== void 0 ? o : Ln(m) === Ln(p);
                S(i, {
                    replace: _,
                    state: f,
                    preventScrollReset: s,
                    relative: h,
                    viewTransition: v
                });
            }
        }, [
            m,
            S,
            p,
            o,
            f,
            r,
            i,
            s,
            h,
            v
        ]);
    }
    var D0 = 0, x0 = ()=>`__${String(++D0)}__`;
    function z0() {
        let { router: i } = ap("useSubmit"), { basename: r } = T.useContext(Mt), o = $v();
        return T.useCallback(async (f, s = {})=>{
            let { action: h, method: v, encType: S, formData: m, body: p } = f0(f, r);
            if (s.navigate === !1) {
                let E = s.fetcherKey || x0();
                await i.fetch(E, o, s.action || h, {
                    preventScrollReset: s.preventScrollReset,
                    formData: m,
                    body: p,
                    formMethod: s.method || v,
                    formEncType: s.encType || S,
                    flushSync: s.flushSync
                });
            } else await i.navigate(s.action || h, {
                preventScrollReset: s.preventScrollReset,
                formData: m,
                body: p,
                formMethod: s.method || v,
                formEncType: s.encType || S,
                replace: s.replace,
                state: s.state,
                fromRouteId: o,
                flushSync: s.flushSync,
                viewTransition: s.viewTransition
            });
        }, [
            i,
            r,
            o
        ]);
    }
    function B0(i, { relative: r } = {}) {
        let { basename: o } = T.useContext(Mt), f = T.useContext(qt);
        Oe(f, "useFormAction must be used inside a RouteContext");
        let [s] = f.matches.slice(-1), h = {
            ...jn(i || ".", {
                relative: r
            })
        }, v = tl();
        if (i == null) {
            h.search = v.search;
            let S = new URLSearchParams(h.search), m = S.getAll("index");
            if (m.some((E)=>E === "")) {
                S.delete("index"), m.filter((_)=>_).forEach((_)=>S.append("index", _));
                let E = S.toString();
                h.search = E ? `?${E}` : "";
            }
        }
        return (!i || i === ".") && s.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (h.pathname = h.pathname === "/" ? o : It([
            o,
            h.pathname
        ])), Ln(h);
    }
    function U0(i, r = {}) {
        let o = T.useContext(Vh);
        Oe(o != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: f } = ap("useViewTransitionState"), s = jn(i, {
            relative: r.relative
        });
        if (!o.isTransitioning) return !1;
        let h = el(o.currentLocation.pathname, f) || o.currentLocation.pathname, v = el(o.nextLocation.pathname, f) || o.nextLocation.pathname;
        return oi(s.pathname, v) != null || oi(s.pathname, h) != null;
    }
    new TextEncoder;
    let C0, q0, np, H0;
    Rt = {
        TIMER_DURATION: 60 * 3,
        THEME: "classic",
        ENABLE_SOUND: !0,
        IS_FLIPPED: !1,
        THEME_KEY: "theme",
        ENABLE_SOUND_KEY: "enableSound",
        TIMER_DURATION_KEY: "timerDuration",
        IS_FLIPPED_KEY: "isFlipped",
        START_FEN: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    };
    C0 = T.createContext(void 0);
    q0 = ({ children: i })=>{
        const r = (_, N)=>{
            try {
                const H = localStorage.getItem(_);
                if (H == null) return N;
                const x = JSON.parse(H);
                return x !== void 0 ? x : N;
            } catch  {
                return N;
            }
        }, [o, f] = T.useState(()=>r(Rt.THEME_KEY, Rt.THEME)), [s, h] = T.useState(()=>r(Rt.ENABLE_SOUND_KEY, Rt.ENABLE_SOUND)), [v, S] = T.useState(()=>r(Rt.TIMER_DURATION_KEY, Rt.TIMER_DURATION)), [m, p] = T.useState(()=>r(Rt.IS_FLIPPED_KEY, Rt.IS_FLIPPED));
        T.useEffect(()=>localStorage.setItem(Rt.THEME_KEY, JSON.stringify(o)), [
            o
        ]), T.useEffect(()=>localStorage.setItem(Rt.ENABLE_SOUND_KEY, JSON.stringify(s)), [
            s
        ]), T.useEffect(()=>localStorage.setItem(Rt.TIMER_DURATION_KEY, JSON.stringify(v)), [
            v
        ]), T.useEffect(()=>localStorage.setItem(Rt.IS_FLIPPED_KEY, JSON.stringify(m)), [
            m
        ]);
        const E = T.useMemo(()=>({
                theme: o,
                setTheme: f,
                enableSound: s,
                setEnableSound: h,
                timerDuration: v,
                setTimerDuration: S,
                isFlipped: m,
                setIsFlipped: p
            }), [
            o,
            s,
            v,
            m
        ]);
        return Ve.jsx(C0.Provider, {
            value: E,
            children: i
        });
    };
    np = (i, r)=>r.split(" ")[1] === "w" ? i : -i;
    cg = (i, r, o, f, s)=>{
        if (i.startsWith("info") && i.includes("score")) {
            const h = i.match(/score (cp|mate) (-?\d+)/);
            if (h) {
                const S = h[1], m = parseInt(h[2], 10);
                let p = 0;
                S === "cp" ? p = m / 100 : S === "mate" && (p = m > 0 ? 10 : -10);
                const E = np(p, f);
                r(E);
            }
            const v = i.match(/ pv (.+)/);
            v && o(v[1]);
        }
        if (i.startsWith("bestmove") && s) {
            const v = i.trim().split(/\s+/)[1];
            s(v && v !== "(none)" ? v : "");
        }
    };
    H0 = 400;
    function w0(i, r) {
        const o = up(r);
        if (!o || !i.has(o)) return;
        const f = i.get(o);
        if (f !== void 0) return i.delete(o), i.set(o, f), f;
    }
    function P0(i, r, o, f = H0) {
        const s = up(r);
        if (s) for(i.has(s) && i.delete(s), i.set(s, o); i.size > f;){
            const h = i.keys().next().value;
            h !== void 0 && i.delete(h);
        }
    }
    up = function(i) {
        return i == null || typeof i != "string" ? "" : i.trim().replace(/\s+/g, " ");
    };
    const Q0 = "/chess-frontend/", L0 = `${Q0}stockfish/stockfish-17-lite-single.js`;
    function Qn(i) {
        if (i == null) return [];
        if (typeof i == "string") return i.split(/\r?\n/).map((o)=>o.trim()).filter(Boolean);
        if (typeof ArrayBuffer < "u" && i instanceof ArrayBuffer) return Qn(new TextDecoder().decode(i));
        if (ArrayBuffer.isView && ArrayBuffer.isView(i)) return Qn(new TextDecoder().decode(i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength)));
        if (Array.isArray(i)) {
            const o = [];
            for (const f of i)o.push(...Qn(f));
            return o;
        }
        if (typeof i == "object" && i !== null && "data" in i && typeof i.data == "string") return Qn(i.data);
        const r = String(i).trim();
        return r ? [
            r
        ] : [];
    }
    function Y0(i) {
        const r = i.match(/\bscore\s+(cp|mate)\s+(-?\d+)/i);
        if (!r) return null;
        const o = r[1].toLowerCase(), f = parseInt(r[2], 10);
        return Number.isNaN(f) ? null : o === "cp" ? f / 100 : f > 0 ? 10 : -10;
    }
    function j0(i) {
        typeof requestIdleCallback < "u" ? requestIdleCallback(i, {
            timeout: 48
        }) : queueMicrotask(i);
    }
    function K0(i, r = "lite", o = 8e3, f = {}) {
        const s = T.useRef(f);
        s.current = f;
        const h = T.useRef(null), v = T.useRef(null), S = T.useRef(null), m = T.useRef(!1), p = T.useRef([]), E = T.useRef(!1), _ = T.useRef(!1), N = T.useRef(null), H = T.useRef(null), x = T.useRef(!1), L = T.useRef(!1), P = T.useRef(null), w = T.useRef(new Map), Q = T.useCallback(()=>{
            if (!(E.current || !h.current)) {
                for(E.current = !0; p.current.length > 0;){
                    const Y = p.current.findIndex((g)=>g.type === "stop"), J = Y >= 0 ? p.current.splice(Y, 1)[0] : p.current.shift();
                    J && h.current.postMessage(J.cmd);
                }
                E.current = !1;
            }
        }, []), K = T.useCallback((Y, J)=>{
            p.current.push({
                type: Y,
                cmd: J
            }), Q();
        }, [
            Q
        ]), W = T.useCallback((Y)=>{
            Y.onmessage = (J)=>{
                j0(()=>{
                    const g = Qn(J.data);
                    for (const U of g){
                        if (U === "uciok" && (x.current = !0, s.current.onUciReady?.(), K("normal", "isready")), U === "readyok") {
                            L.current = !0, s.current.onReadyOk?.();
                            const G = P.current;
                            G && (P.current = null, G());
                        }
                        const j = N.current;
                        if (j) {
                            if (U.startsWith("info") && /\bscore\b/i.test(U)) {
                                const G = Y0(U);
                                G !== null && (H.current = np(G, j.fen));
                            }
                            if (U.startsWith("bestmove")) {
                                const k = U.trim().split(/\s+/)[1], ue = k && k !== "(none)" ? k : "", F = H.current, je = F !== null && Number.isFinite(F) ? F : 0;
                                if (j.depths && j.depthIndex < j.depths.length - 1) {
                                    j.depthIndex += 1;
                                    const dt = j.depths[j.depthIndex];
                                    H.current = null, K("stop", "stop"), m.current = !1, K("normal", "setoption name MultiPV value 1"), K("normal", `position fen ${j.fen}`), K("normal", `go depth ${dt}`);
                                    continue;
                                }
                                clearTimeout(j.timeoutId), N.current = null;
                                const ye = {
                                    evalScore: je,
                                    bestMoveUci: ue
                                };
                                P0(w.current, j.fen, ye), j.resolve(ye);
                            }
                        }
                        i && i(U);
                    }
                });
            }, Y.onerror = (J)=>{
                console.error("Error with Stockfish worker:", J);
                const g = N.current;
                if (g) {
                    clearTimeout(g.timeoutId);
                    const U = J.message || "Stockfish worker error";
                    g.reject(new Error(U)), N.current = null;
                }
            };
        }, [
            i,
            K
        ]), X = T.useCallback(()=>{
            h.current || (x.current = !1, L.current = !1, r === "lite" ? h.current = new Worker(L0) : h.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-NAseIZ4c.js", import.meta.url), {
                type: "classic"
            }), W(h.current), h.current.postMessage("uci"));
        }, [
            W,
            r
        ]), te = T.useCallback(()=>{
            X();
        }, [
            X
        ]), fe = T.useCallback(()=>{
            X();
        }, [
            X
        ]), Se = T.useCallback((Y)=>{
            h.current && K("normal", Y);
        }, [
            K
        ]), oe = T.useCallback((Y)=>{
            Y.forEach((J)=>{
                K("normal", `setoption name ${J.name} value ${J.value}`);
            });
        }, [
            K
        ]), qe = T.useCallback((Y, J = [])=>{
            let g = `position fen ${Y}`;
            if (J.length > 0) {
                const U = J.join(" ");
                g += ` moves ${U}`;
            }
            K("normal", g);
        }, [
            K
        ]), Be = T.useCallback((Y)=>{
            h.current && m.current && (K("stop", "stop"), m.current = !1, v.current && (clearTimeout(v.current), v.current = null));
        }, [
            K
        ]), He = T.useCallback((Y)=>{
            _.current && (h.current || X(), S.current && clearTimeout(S.current), v.current && clearTimeout(v.current), Be("pre startSearch"), S.current = setTimeout(()=>{
                m.current = !0, K("normal", `position fen ${Y}`), K("normal", "go infinite"), v.current = setTimeout(()=>{
                    Be("startSearch timer expire");
                }, o);
            }, 50));
        }, [
            o,
            Be,
            K,
            X
        ]), Ot = T.useCallback(()=>{
            x.current = !1, L.current = !1, P.current = null;
            const Y = N.current;
            Y && (clearTimeout(Y.timeoutId), Y.reject(new Error("Engine terminated")), N.current = null), h.current && (h.current.terminate(), h.current = null), m.current = !1, v.current && (clearTimeout(v.current), v.current = null), S.current && (clearTimeout(S.current), S.current = null), p.current = [], E.current = !1;
        }, []), Ht = T.useCallback((Y)=>{
            if (_.current = Y, !Y) {
                const J = N.current;
                J && (clearTimeout(J.timeoutId), J.reject(new Error("Engine disabled")), N.current = null), Be("permission revoked");
            }
        }, [
            Be
        ]), we = 8, z = 12e4, V = T.useCallback((Y, J = {})=>{
            if (!(J.skipCache === !0) && Y) {
                const k = w0(w.current, Y);
                if (k) return Promise.resolve(k);
            }
            const U = Array.isArray(J.progressiveDepths) && J.progressiveDepths.length > 0 ? J.progressiveDepths.map((k)=>Math.min(24, Math.max(1, k))) : null, j = typeof J.depth == "number" && J.depth > 0 ? Math.min(24, J.depth) : we, G = typeof J.timeoutMs == "number" && J.timeoutMs > 0 ? J.timeoutMs : z;
            return new Promise((k, ue)=>{
                if (!_.current) {
                    ue(new Error("Engine disabled"));
                    return;
                }
                const F = N.current;
                if (F && (clearTimeout(F.timeoutId), F.reject(new Error("Superseded")), N.current = null), P.current = null, h.current || X(), !h.current) {
                    ue(new Error("Worker unavailable"));
                    return;
                }
                H.current = null;
                const je = setTimeout(()=>{
                    const Zl = N.current;
                    Zl && (N.current = null, Zl.reject(new Error("Quick analyze timeout")));
                }, G), dt = (U || [
                    j
                ])[0];
                N.current = {
                    resolve: k,
                    reject: ue,
                    fen: Y,
                    timeoutId: je,
                    depths: U,
                    depthIndex: 0
                };
                const qa = ()=>{
                    K("stop", "stop"), m.current = !1, K("normal", "setoption name MultiPV value 1"), K("normal", `position fen ${Y}`), K("normal", `go depth ${dt}`);
                }, Nl = ()=>{
                    setTimeout(qa, 50);
                };
                x.current && L.current ? Nl() : P.current = Nl;
            });
        }, [
            K,
            X
        ]);
        return T.useEffect(()=>()=>{
                const Y = N.current;
                Y && (clearTimeout(Y.timeoutId), Y.reject(new Error("Unmounted")), N.current = null), Ot();
            }, [
            Ot
        ]), {
            initEngine: te,
            preloadEngine: fe,
            sendCommand: Se,
            setOptions: oe,
            setFen: qe,
            startSearch: He,
            stopSearch: Be,
            terminateEngine: Ot,
            syncEnabledState: Ht,
            quickAnalyzeFen: V
        };
    }
    let ip, G0, X0, V0, Z0, k0;
    ip = T.createContext(void 0);
    fg = ()=>{
        const i = T.useContext(ip);
        if (!i) throw new Error("useStockfishContext must be used inside StockfishProvider");
        return i;
    };
    G0 = ({ children: i })=>{
        const r = T.useRef(null), [o, f] = T.useState(!1), [s, h] = T.useState(!1), v = T.useCallback((N)=>{
            r.current && r.current(N);
        }, []), S = K0(v, "lite", 8e3, {
            onUciReady: ()=>f(!0),
            onReadyOk: ()=>h(!0)
        }), { preloadEngine: m } = S;
        T.useEffect(()=>{
            const N = ()=>{
                m();
            };
            if (typeof window < "u" && typeof window.requestIdleCallback == "function") {
                const x = window.requestIdleCallback(N, {
                    timeout: 1200
                });
                return ()=>{
                    window.cancelIdleCallback?.(x);
                };
            }
            const H = setTimeout(N, 900);
            return ()=>clearTimeout(H);
        }, [
            m
        ]);
        const p = T.useMemo(()=>s ? 100 : o ? 66 : 33, [
            o,
            s
        ]), E = T.useCallback((N)=>{
            r.current = N;
        }, []), _ = T.useMemo(()=>({
                ...S,
                setOnMessage: E,
                engineUciOk: o,
                engineReadyOk: s,
                engineWarmupPercent: p
            }), [
            S,
            E,
            o,
            s,
            p
        ]);
        return Ve.jsxs(ip.Provider, {
            value: _,
            children: [
                " ",
                i,
                " "
            ]
        });
    };
    X0 = T.lazy(()=>sv(()=>import("./AnalysisGame-D4OgIEhq.js"), __vite__mapDeps([0,1])));
    V0 = "G-KZRHN2TP97";
    Z0 = ()=>{
        const i = tl();
        return T.useEffect(()=>{
            if (typeof window.gtag != "function") return;
            const r = `${i.pathname}${i.search}${i.hash}`;
            window.gtag("event", "page_view", {
                page_path: r,
                page_location: window.location.href,
                send_to: V0
            });
        }, [
            i
        ]), null;
    };
    k0 = ()=>Ve.jsx(q0, {
            children: Ve.jsx(G0, {
                children: Ve.jsxs(O0, {
                    children: [
                        Ve.jsx(Z0, {}),
                        Ve.jsx(T.Suspense, {
                            fallback: Ve.jsx("div", {
                                className: "loading-screen",
                                children: "Loading..."
                            }),
                            children: Ve.jsxs(t0, {
                                children: [
                                    Ve.jsx(ui, {
                                        path: "/",
                                        element: Ve.jsx(gh, {
                                            to: "/analysis",
                                            replace: !0
                                        })
                                    }),
                                    Ve.jsx(ui, {
                                        path: "/analysis",
                                        element: Ve.jsx(X0, {})
                                    }),
                                    Ve.jsx(ui, {
                                        path: "*",
                                        element: Ve.jsx(gh, {
                                            to: "/analysis",
                                            replace: !0
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    function J0() {
        [
            "theme",
            "enableSound",
            "timerDuration",
            "isFlipped",
            "persist:root"
        ].forEach((r)=>{
            try {
                const o = localStorage.getItem(r);
                o !== null && JSON.parse(o);
            } catch  {
                localStorage.removeItem(r);
            }
        });
    }
    J0();
    const rp = document.getElementById("root");
    if (!rp) throw new Error("Root element with id 'root' not found");
    L1.createRoot(rp).render(Ve.jsx(ay, {
        store: Yh,
        children: Ve.jsx(k0, {})
    }));
})();
export { Rt as C, $0 as R, F0 as a, T as b, tg as c, Yh as d, fg as e, I0 as f, rg as g, lg as h, ug as i, Ve as j, ig as k, ng as l, ag as m, up as n, cg as o, w1 as r, eg as s, W0 as u, __tla };
