const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChessGame-C32owpUH.js","assets/Settings-BXOJv7XK.js","assets/Settings-CkJF95SR.css","assets/ChessGame-DhAK7FyC.css","assets/AnalysisGame-BB97EBYs.js","assets/AnalysisGame-cxKv7SGa.css"])))=>i.map(i=>d[i]);
let zi, jb, p2, nn, an, E2, Ae, O2, M2, T2, qb, w2, D2, k, o2, C2, S2, x2, B2, N2, Pb, A, _2, zb, Xn, K1, Fp, R2, A2;
let __tla = (async ()=>{
    (function() {
        const i = document.createElement("link").relList;
        if (i && i.supports && i.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);
        new MutationObserver((o)=>{
            for (const f of o)if (f.type === "childList") for (const m of f.addedNodes)m.tagName === "LINK" && m.rel === "modulepreload" && s(m);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function c(o) {
            const f = {};
            return o.integrity && (f.integrity = o.integrity), o.referrerPolicy && (f.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? f.credentials = "include" : o.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f;
        }
        function s(o) {
            if (o.ep) return;
            o.ep = !0;
            const f = c(o);
            fetch(o.href, f);
        }
    })();
    K1 = function(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
    };
    var Wc = {
        exports: {}
    }, Va = {};
    var Oh;
    function Y1() {
        if (Oh) return Va;
        Oh = 1;
        var u = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
        function c(s, o, f) {
            var m = null;
            if (f !== void 0 && (m = "" + f), o.key !== void 0 && (m = "" + o.key), "key" in o) {
                f = {};
                for(var p in o)p !== "key" && (f[p] = o[p]);
            } else f = o;
            return o = f.ref, {
                $$typeof: u,
                type: s,
                key: m,
                ref: o !== void 0 ? o : null,
                props: f
            };
        }
        return Va.Fragment = i, Va.jsx = c, Va.jsxs = c, Va;
    }
    var Nh;
    function G1() {
        return Nh || (Nh = 1, Wc.exports = Y1()), Wc.exports;
    }
    let Ic, re;
    k = G1();
    Ic = {
        exports: {}
    };
    re = {};
    var xh;
    function V1() {
        if (xh) return re;
        xh = 1;
        var u = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), m = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), _ = Symbol.iterator;
        function g(E) {
            return E === null || typeof E != "object" ? null : (E = _ && E[_] || E["@@iterator"], typeof E == "function" ? E : null);
        }
        var R = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, O = Object.assign, C = {};
        function U(E, L, X) {
            this.props = E, this.context = L, this.refs = C, this.updater = X || R;
        }
        U.prototype.isReactComponent = {}, U.prototype.setState = function(E, L) {
            if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, E, L, "setState");
        }, U.prototype.forceUpdate = function(E) {
            this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        };
        function w() {}
        w.prototype = U.prototype;
        function H(E, L, X) {
            this.props = E, this.context = L, this.refs = C, this.updater = X || R;
        }
        var Q = H.prototype = new w;
        Q.constructor = H, O(Q, U.prototype), Q.isPureReactComponent = !0;
        var G = Array.isArray, Y = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, $ = Object.prototype.hasOwnProperty;
        function te(E, L, X, V, W, ye) {
            return X = ye.ref, {
                $$typeof: u,
                type: E,
                key: L,
                ref: X !== void 0 ? X : null,
                props: ye
            };
        }
        function se(E, L) {
            return te(E.type, L, void 0, void 0, void 0, E.props);
        }
        function ue(E) {
            return typeof E == "object" && E !== null && E.$$typeof === u;
        }
        function ze(E) {
            var L = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + E.replace(/[=:]/g, function(X) {
                return L[X];
            });
        }
        var at = /\/+/g;
        function Qe(E, L) {
            return typeof E == "object" && E !== null && E.key != null ? ze("" + E.key) : L.toString(36);
        }
        function Qt() {}
        function be(E) {
            switch(E.status){
                case "fulfilled":
                    return E.value;
                case "rejected":
                    throw E.reason;
                default:
                    switch(typeof E.status == "string" ? E.then(Qt, Qt) : (E.status = "pending", E.then(function(L) {
                        E.status === "pending" && (E.status = "fulfilled", E.value = L);
                    }, function(L) {
                        E.status === "pending" && (E.status = "rejected", E.reason = L);
                    })), E.status){
                        case "fulfilled":
                            return E.value;
                        case "rejected":
                            throw E.reason;
                    }
            }
            throw E;
        }
        function pe(E, L, X, V, W) {
            var ye = typeof E;
            (ye === "undefined" || ye === "boolean") && (E = null);
            var ae = !1;
            if (E === null) ae = !0;
            else switch(ye){
                case "bigint":
                case "string":
                case "number":
                    ae = !0;
                    break;
                case "object":
                    switch(E.$$typeof){
                        case u:
                        case i:
                            ae = !0;
                            break;
                        case b:
                            return ae = E._init, pe(ae(E._payload), L, X, V, W);
                    }
            }
            if (ae) return W = W(E), ae = V === "" ? "." + Qe(E, 0) : V, G(W) ? (X = "", ae != null && (X = ae.replace(at, "$&/") + "/"), pe(W, L, X, "", function(cl) {
                return cl;
            })) : W != null && (ue(W) && (W = se(W, X + (W.key == null || E && E.key === W.key ? "" : ("" + W.key).replace(at, "$&/") + "/") + ae)), L.push(W)), 1;
            ae = 0;
            var ft = V === "" ? "." : V + ":";
            if (G(E)) for(var xe = 0; xe < E.length; xe++)V = E[xe], ye = ft + Qe(V, xe), ae += pe(V, L, X, ye, W);
            else if (xe = g(E), typeof xe == "function") for(E = xe.call(E), xe = 0; !(V = E.next()).done;)V = V.value, ye = ft + Qe(V, xe++), ae += pe(V, L, X, ye, W);
            else if (ye === "object") {
                if (typeof E.then == "function") return pe(be(E), L, X, V, W);
                throw L = String(E), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ae;
        }
        function z(E, L, X) {
            if (E == null) return E;
            var V = [], W = 0;
            return pe(E, V, "", "", function(ye) {
                return L.call(X, ye, W++);
            }), V;
        }
        function K(E) {
            if (E._status === -1) {
                var L = E._result;
                L = L(), L.then(function(X) {
                    (E._status === 0 || E._status === -1) && (E._status = 1, E._result = X);
                }, function(X) {
                    (E._status === 0 || E._status === -1) && (E._status = 2, E._result = X);
                }), E._status === -1 && (E._status = 0, E._result = L);
            }
            if (E._status === 1) return E._result.default;
            throw E._result;
        }
        var F = typeof reportError == "function" ? reportError : function(E) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var L = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                    error: E
                });
                if (!window.dispatchEvent(L)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", E);
                return;
            }
            console.error(E);
        };
        function ie() {}
        return re.Children = {
            map: z,
            forEach: function(E, L, X) {
                z(E, function() {
                    L.apply(this, arguments);
                }, X);
            },
            count: function(E) {
                var L = 0;
                return z(E, function() {
                    L++;
                }), L;
            },
            toArray: function(E) {
                return z(E, function(L) {
                    return L;
                }) || [];
            },
            only: function(E) {
                if (!ue(E)) throw Error("React.Children.only expected to receive a single React element child.");
                return E;
            }
        }, re.Component = U, re.Fragment = c, re.Profiler = o, re.PureComponent = H, re.StrictMode = s, re.Suspense = h, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, re.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(E) {
                return Y.H.useMemoCache(E);
            }
        }, re.cache = function(E) {
            return function() {
                return E.apply(null, arguments);
            };
        }, re.cloneElement = function(E, L, X) {
            if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
            var V = O({}, E.props), W = E.key, ye = void 0;
            if (L != null) for(ae in L.ref !== void 0 && (ye = void 0), L.key !== void 0 && (W = "" + L.key), L)!$.call(L, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && L.ref === void 0 || (V[ae] = L[ae]);
            var ae = arguments.length - 2;
            if (ae === 1) V.children = X;
            else if (1 < ae) {
                for(var ft = Array(ae), xe = 0; xe < ae; xe++)ft[xe] = arguments[xe + 2];
                V.children = ft;
            }
            return te(E.type, W, void 0, void 0, ye, V);
        }, re.createContext = function(E) {
            return E = {
                $$typeof: m,
                _currentValue: E,
                _currentValue2: E,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, E.Provider = E, E.Consumer = {
                $$typeof: f,
                _context: E
            }, E;
        }, re.createElement = function(E, L, X) {
            var V, W = {}, ye = null;
            if (L != null) for(V in L.key !== void 0 && (ye = "" + L.key), L)$.call(L, V) && V !== "key" && V !== "__self" && V !== "__source" && (W[V] = L[V]);
            var ae = arguments.length - 2;
            if (ae === 1) W.children = X;
            else if (1 < ae) {
                for(var ft = Array(ae), xe = 0; xe < ae; xe++)ft[xe] = arguments[xe + 2];
                W.children = ft;
            }
            if (E && E.defaultProps) for(V in ae = E.defaultProps, ae)W[V] === void 0 && (W[V] = ae[V]);
            return te(E, ye, void 0, void 0, null, W);
        }, re.createRef = function() {
            return {
                current: null
            };
        }, re.forwardRef = function(E) {
            return {
                $$typeof: p,
                render: E
            };
        }, re.isValidElement = ue, re.lazy = function(E) {
            return {
                $$typeof: b,
                _payload: {
                    _status: -1,
                    _result: E
                },
                _init: K
            };
        }, re.memo = function(E, L) {
            return {
                $$typeof: v,
                type: E,
                compare: L === void 0 ? null : L
            };
        }, re.startTransition = function(E) {
            var L = Y.T, X = {};
            Y.T = X;
            try {
                var V = E(), W = Y.S;
                W !== null && W(X, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(ie, F);
            } catch (ye) {
                F(ye);
            } finally{
                Y.T = L;
            }
        }, re.unstable_useCacheRefresh = function() {
            return Y.H.useCacheRefresh();
        }, re.use = function(E) {
            return Y.H.use(E);
        }, re.useActionState = function(E, L, X) {
            return Y.H.useActionState(E, L, X);
        }, re.useCallback = function(E, L) {
            return Y.H.useCallback(E, L);
        }, re.useContext = function(E) {
            return Y.H.useContext(E);
        }, re.useDebugValue = function() {}, re.useDeferredValue = function(E, L) {
            return Y.H.useDeferredValue(E, L);
        }, re.useEffect = function(E, L, X) {
            var V = Y.H;
            if (typeof X == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return V.useEffect(E, L);
        }, re.useId = function() {
            return Y.H.useId();
        }, re.useImperativeHandle = function(E, L, X) {
            return Y.H.useImperativeHandle(E, L, X);
        }, re.useInsertionEffect = function(E, L) {
            return Y.H.useInsertionEffect(E, L);
        }, re.useLayoutEffect = function(E, L) {
            return Y.H.useLayoutEffect(E, L);
        }, re.useMemo = function(E, L) {
            return Y.H.useMemo(E, L);
        }, re.useOptimistic = function(E, L) {
            return Y.H.useOptimistic(E, L);
        }, re.useReducer = function(E, L, X) {
            return Y.H.useReducer(E, L, X);
        }, re.useRef = function(E) {
            return Y.H.useRef(E);
        }, re.useState = function(E) {
            return Y.H.useState(E);
        }, re.useSyncExternalStore = function(E, L, X) {
            return Y.H.useSyncExternalStore(E, L, X);
        }, re.useTransition = function() {
            return Y.H.useTransition();
        }, re.version = "19.1.0", re;
    }
    var Mh;
    function wi() {
        return Mh || (Mh = 1, Ic.exports = V1()), Ic.exports;
    }
    A = wi();
    nn = K1(A);
    var es = {
        exports: {}
    }, Xa = {}, ts = {
        exports: {}
    }, ls = {};
    var Ch;
    function X1() {
        return Ch || (Ch = 1, function(u) {
            function i(z, K) {
                var F = z.length;
                z.push(K);
                e: for(; 0 < F;){
                    var ie = F - 1 >>> 1, E = z[ie];
                    if (0 < o(E, K)) z[ie] = K, z[F] = E, F = ie;
                    else break e;
                }
            }
            function c(z) {
                return z.length === 0 ? null : z[0];
            }
            function s(z) {
                if (z.length === 0) return null;
                var K = z[0], F = z.pop();
                if (F !== K) {
                    z[0] = F;
                    e: for(var ie = 0, E = z.length, L = E >>> 1; ie < L;){
                        var X = 2 * (ie + 1) - 1, V = z[X], W = X + 1, ye = z[W];
                        if (0 > o(V, F)) W < E && 0 > o(ye, V) ? (z[ie] = ye, z[W] = F, ie = W) : (z[ie] = V, z[X] = F, ie = X);
                        else if (W < E && 0 > o(ye, F)) z[ie] = ye, z[W] = F, ie = W;
                        else break e;
                    }
                }
                return K;
            }
            function o(z, K) {
                var F = z.sortIndex - K.sortIndex;
                return F !== 0 ? F : z.id - K.id;
            }
            if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var f = performance;
                u.unstable_now = function() {
                    return f.now();
                };
            } else {
                var m = Date, p = m.now();
                u.unstable_now = function() {
                    return m.now() - p;
                };
            }
            var h = [], v = [], b = 1, _ = null, g = 3, R = !1, O = !1, C = !1, U = !1, w = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
            function G(z) {
                for(var K = c(v); K !== null;){
                    if (K.callback === null) s(v);
                    else if (K.startTime <= z) s(v), K.sortIndex = K.expirationTime, i(h, K);
                    else break;
                    K = c(v);
                }
            }
            function Y(z) {
                if (C = !1, G(z), !O) if (c(h) !== null) O = !0, $ || ($ = !0, Qe());
                else {
                    var K = c(v);
                    K !== null && pe(Y, K.startTime - z);
                }
            }
            var $ = !1, te = -1, se = 5, ue = -1;
            function ze() {
                return U ? !0 : !(u.unstable_now() - ue < se);
            }
            function at() {
                if (U = !1, $) {
                    var z = u.unstable_now();
                    ue = z;
                    var K = !0;
                    try {
                        e: {
                            O = !1, C && (C = !1, H(te), te = -1), R = !0;
                            var F = g;
                            try {
                                t: {
                                    for(G(z), _ = c(h); _ !== null && !(_.expirationTime > z && ze());){
                                        var ie = _.callback;
                                        if (typeof ie == "function") {
                                            _.callback = null, g = _.priorityLevel;
                                            var E = ie(_.expirationTime <= z);
                                            if (z = u.unstable_now(), typeof E == "function") {
                                                _.callback = E, G(z), K = !0;
                                                break t;
                                            }
                                            _ === c(h) && s(h), G(z);
                                        } else s(h);
                                        _ = c(h);
                                    }
                                    if (_ !== null) K = !0;
                                    else {
                                        var L = c(v);
                                        L !== null && pe(Y, L.startTime - z), K = !1;
                                    }
                                }
                                break e;
                            } finally{
                                _ = null, g = F, R = !1;
                            }
                            K = void 0;
                        }
                    } finally{
                        K ? Qe() : $ = !1;
                    }
                }
            }
            var Qe;
            if (typeof Q == "function") Qe = function() {
                Q(at);
            };
            else if (typeof MessageChannel < "u") {
                var Qt = new MessageChannel, be = Qt.port2;
                Qt.port1.onmessage = at, Qe = function() {
                    be.postMessage(null);
                };
            } else Qe = function() {
                w(at, 0);
            };
            function pe(z, K) {
                te = w(function() {
                    z(u.unstable_now());
                }, K);
            }
            u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(z) {
                z.callback = null;
            }, u.unstable_forceFrameRate = function(z) {
                0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : se = 0 < z ? Math.floor(1e3 / z) : 5;
            }, u.unstable_getCurrentPriorityLevel = function() {
                return g;
            }, u.unstable_next = function(z) {
                switch(g){
                    case 1:
                    case 2:
                    case 3:
                        var K = 3;
                        break;
                    default:
                        K = g;
                }
                var F = g;
                g = K;
                try {
                    return z();
                } finally{
                    g = F;
                }
            }, u.unstable_requestPaint = function() {
                U = !0;
            }, u.unstable_runWithPriority = function(z, K) {
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
                var F = g;
                g = z;
                try {
                    return K();
                } finally{
                    g = F;
                }
            }, u.unstable_scheduleCallback = function(z, K, F) {
                var ie = u.unstable_now();
                switch(typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? ie + F : ie) : F = ie, z){
                    case 1:
                        var E = -1;
                        break;
                    case 2:
                        E = 250;
                        break;
                    case 5:
                        E = 1073741823;
                        break;
                    case 4:
                        E = 1e4;
                        break;
                    default:
                        E = 5e3;
                }
                return E = F + E, z = {
                    id: b++,
                    callback: K,
                    priorityLevel: z,
                    startTime: F,
                    expirationTime: E,
                    sortIndex: -1
                }, F > ie ? (z.sortIndex = F, i(v, z), c(h) === null && z === c(v) && (C ? (H(te), te = -1) : C = !0, pe(Y, F - ie))) : (z.sortIndex = E, i(h, z), O || R || (O = !0, $ || ($ = !0, Qe()))), z;
            }, u.unstable_shouldYield = ze, u.unstable_wrapCallback = function(z) {
                var K = g;
                return function() {
                    var F = g;
                    g = K;
                    try {
                        return z.apply(this, arguments);
                    } finally{
                        g = F;
                    }
                };
            };
        }(ls)), ls;
    }
    var Dh;
    function Z1() {
        return Dh || (Dh = 1, ts.exports = X1()), ts.exports;
    }
    var ns = {
        exports: {}
    }, tt = {};
    var Bh;
    function $1() {
        if (Bh) return tt;
        Bh = 1;
        var u = wi();
        function i(h) {
            var v = "https://react.dev/errors/" + h;
            if (1 < arguments.length) {
                v += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var b = 2; b < arguments.length; b++)v += "&args[]=" + encodeURIComponent(arguments[b]);
            }
            return "Minified React error #" + h + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function c() {}
        var s = {
            d: {
                f: c,
                r: function() {
                    throw Error(i(522));
                },
                D: c,
                C: c,
                L: c,
                m: c,
                X: c,
                S: c,
                M: c
            },
            p: 0,
            findDOMNode: null
        }, o = Symbol.for("react.portal");
        function f(h, v, b) {
            var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: _ == null ? null : "" + _,
                children: h,
                containerInfo: v,
                implementation: b
            };
        }
        var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function p(h, v) {
            if (h === "font") return "";
            if (typeof v == "string") return v === "use-credentials" ? v : "";
        }
        return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, tt.createPortal = function(h, v) {
            var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(i(299));
            return f(h, v, null, b);
        }, tt.flushSync = function(h) {
            var v = m.T, b = s.p;
            try {
                if (m.T = null, s.p = 2, h) return h();
            } finally{
                m.T = v, s.p = b, s.d.f();
            }
        }, tt.preconnect = function(h, v) {
            typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, s.d.C(h, v));
        }, tt.prefetchDNS = function(h) {
            typeof h == "string" && s.d.D(h);
        }, tt.preinit = function(h, v) {
            if (typeof h == "string" && v && typeof v.as == "string") {
                var b = v.as, _ = p(b, v.crossOrigin), g = typeof v.integrity == "string" ? v.integrity : void 0, R = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
                b === "style" ? s.d.S(h, typeof v.precedence == "string" ? v.precedence : void 0, {
                    crossOrigin: _,
                    integrity: g,
                    fetchPriority: R
                }) : b === "script" && s.d.X(h, {
                    crossOrigin: _,
                    integrity: g,
                    fetchPriority: R,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0
                });
            }
        }, tt.preinitModule = function(h, v) {
            if (typeof h == "string") if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var b = p(v.as, v.crossOrigin);
                    s.d.M(h, {
                        crossOrigin: b,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    });
                }
            } else v == null && s.d.M(h);
        }, tt.preload = function(h, v) {
            if (typeof h == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
                var b = v.as, _ = p(b, v.crossOrigin);
                s.d.L(h, b, {
                    crossOrigin: _,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0,
                    type: typeof v.type == "string" ? v.type : void 0,
                    fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
                    referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
                    imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
                    imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
                    media: typeof v.media == "string" ? v.media : void 0
                });
            }
        }, tt.preloadModule = function(h, v) {
            if (typeof h == "string") if (v) {
                var b = p(v.as, v.crossOrigin);
                s.d.m(h, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: b,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                });
            } else s.d.m(h);
        }, tt.requestFormReset = function(h) {
            s.d.r(h);
        }, tt.unstable_batchedUpdates = function(h, v) {
            return h(v);
        }, tt.useFormState = function(h, v, b) {
            return m.H.useFormState(h, v, b);
        }, tt.useFormStatus = function() {
            return m.H.useHostTransitionStatus();
        }, tt.version = "19.1.0", tt;
    }
    var wh;
    function J1() {
        if (wh) return ns.exports;
        wh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (i) {
                console.error(i);
            }
        }
        return u(), ns.exports = $1(), ns.exports;
    }
    var zh;
    function F1() {
        if (zh) return Xa;
        zh = 1;
        var u = Z1(), i = wi(), c = J1();
        function s(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var l = 2; l < arguments.length; l++)t += "&args[]=" + encodeURIComponent(arguments[l]);
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function o(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
        }
        function f(e) {
            var t = e, l = e;
            if (e.alternate) for(; t.return;)t = t.return;
            else {
                e = t;
                do t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
                while (e);
            }
            return t.tag === 3 ? l : null;
        }
        function m(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function p(e) {
            if (f(e) !== e) throw Error(s(188));
        }
        function h(e) {
            var t = e.alternate;
            if (!t) {
                if (t = f(e), t === null) throw Error(s(188));
                return t !== e ? null : e;
            }
            for(var l = e, n = t;;){
                var a = l.return;
                if (a === null) break;
                var r = a.alternate;
                if (r === null) {
                    if (n = a.return, n !== null) {
                        l = n;
                        continue;
                    }
                    break;
                }
                if (a.child === r.child) {
                    for(r = a.child; r;){
                        if (r === l) return p(a), e;
                        if (r === n) return p(a), t;
                        r = r.sibling;
                    }
                    throw Error(s(188));
                }
                if (l.return !== n.return) l = a, n = r;
                else {
                    for(var d = !1, y = a.child; y;){
                        if (y === l) {
                            d = !0, l = a, n = r;
                            break;
                        }
                        if (y === n) {
                            d = !0, n = a, l = r;
                            break;
                        }
                        y = y.sibling;
                    }
                    if (!d) {
                        for(y = r.child; y;){
                            if (y === l) {
                                d = !0, l = r, n = a;
                                break;
                            }
                            if (y === n) {
                                d = !0, n = r, l = a;
                                break;
                            }
                            y = y.sibling;
                        }
                        if (!d) throw Error(s(189));
                    }
                }
                if (l.alternate !== n) throw Error(s(190));
            }
            if (l.tag !== 3) throw Error(s(188));
            return l.stateNode.current === l ? e : t;
        }
        function v(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e;
            for(e = e.child; e !== null;){
                if (t = v(e), t !== null) return t;
                e = e.sibling;
            }
            return null;
        }
        var b = Object.assign, _ = Symbol.for("react.element"), g = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), H = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), ue = Symbol.for("react.activity"), ze = Symbol.for("react.memo_cache_sentinel"), at = Symbol.iterator;
        function Qe(e) {
            return e === null || typeof e != "object" ? null : (e = at && e[at] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var Qt = Symbol.for("react.client.reference");
        function be(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === Qt ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case O:
                    return "Fragment";
                case U:
                    return "Profiler";
                case C:
                    return "StrictMode";
                case Y:
                    return "Suspense";
                case $:
                    return "SuspenseList";
                case ue:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case R:
                    return "Portal";
                case Q:
                    return (e.displayName || "Context") + ".Provider";
                case H:
                    return (e._context.displayName || "Context") + ".Consumer";
                case G:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case te:
                    return t = e.displayName || null, t !== null ? t : be(e.type) || "Memo";
                case se:
                    t = e._payload, e = e._init;
                    try {
                        return be(e(t));
                    } catch  {}
            }
            return null;
        }
        var pe = Array.isArray, z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, ie = [], E = -1;
        function L(e) {
            return {
                current: e
            };
        }
        function X(e) {
            0 > E || (e.current = ie[E], ie[E] = null, E--);
        }
        function V(e, t) {
            E++, ie[E] = e.current, e.current = t;
        }
        var W = L(null), ye = L(null), ae = L(null), ft = L(null);
        function xe(e, t) {
            switch(V(ae, t), V(ye, e), V(W, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? eh(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = eh(t), e = th(t, e);
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
            X(W), V(W, e);
        }
        function cl() {
            X(W), X(ye), X(ae);
        }
        function qi(e) {
            e.memoizedState !== null && V(ft, e);
            var t = W.current, l = th(t, e.type);
            t !== l && (V(ye, e), V(W, l));
        }
        function ru(e) {
            ye.current === e && (X(W), X(ye)), ft.current === e && (X(ft), La._currentValue = F);
        }
        var ji = Object.prototype.hasOwnProperty, ki = u.unstable_scheduleCallback, Hi = u.unstable_cancelCallback, Em = u.unstable_shouldYield, _m = u.unstable_requestPaint, Ut = u.unstable_now, Tm = u.unstable_getCurrentPriorityLevel, Bs = u.unstable_ImmediatePriority, ws = u.unstable_UserBlockingPriority, cu = u.unstable_NormalPriority, Rm = u.unstable_LowPriority, zs = u.unstable_IdlePriority, Am = u.log, Om = u.unstable_setDisableYieldValue, $n = null, dt = null;
        function sl(e) {
            if (typeof Am == "function" && Om(e), dt && typeof dt.setStrictMode == "function") try {
                dt.setStrictMode($n, e);
            } catch  {}
        }
        var ht = Math.clz32 ? Math.clz32 : Mm, Nm = Math.log, xm = Math.LN2;
        function Mm(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Nm(e) / xm | 0) | 0;
        }
        var su = 256, ou = 4194304;
        function ql(e) {
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
        function fu(e, t, l) {
            var n = e.pendingLanes;
            if (n === 0) return 0;
            var a = 0, r = e.suspendedLanes, d = e.pingedLanes;
            e = e.warmLanes;
            var y = n & 134217727;
            return y !== 0 ? (n = y & ~r, n !== 0 ? a = ql(n) : (d &= y, d !== 0 ? a = ql(d) : l || (l = y & ~e, l !== 0 && (a = ql(l))))) : (y = n & ~r, y !== 0 ? a = ql(y) : d !== 0 ? a = ql(d) : l || (l = n & ~e, l !== 0 && (a = ql(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & r) === 0 && (r = a & -a, l = t & -t, r >= l || r === 32 && (l & 4194048) !== 0) ? t : a;
        }
        function Jn(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function Cm(e, t) {
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
        function Us() {
            var e = su;
            return su <<= 1, (su & 4194048) === 0 && (su = 256), e;
        }
        function Ps() {
            var e = ou;
            return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
        }
        function Li(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Fn(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Dm(e, t, l, n, a, r) {
            var d = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var y = e.entanglements, S = e.expirationTimes, M = e.hiddenUpdates;
            for(l = d & ~l; 0 < l;){
                var P = 31 - ht(l), j = 1 << P;
                y[P] = 0, S[P] = -1;
                var D = M[P];
                if (D !== null) for(M[P] = null, P = 0; P < D.length; P++){
                    var B = D[P];
                    B !== null && (B.lane &= -536870913);
                }
                l &= ~j;
            }
            n !== 0 && qs(e, n, 0), r !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(d & ~t));
        }
        function qs(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var n = 31 - ht(t);
            e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
        }
        function js(e, t) {
            var l = e.entangledLanes |= t;
            for(e = e.entanglements; l;){
                var n = 31 - ht(l), a = 1 << n;
                a & t | e[n] & t && (e[n] |= t), l &= ~a;
            }
        }
        function Qi(e) {
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
        function Ki(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function ks() {
            var e = K.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Sh(e.type));
        }
        function Bm(e, t) {
            var l = K.p;
            try {
                return K.p = e, t();
            } finally{
                K.p = l;
            }
        }
        var ol = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + ol, ut = "__reactProps$" + ol, cn = "__reactContainer$" + ol, Yi = "__reactEvents$" + ol, wm = "__reactListeners$" + ol, zm = "__reactHandles$" + ol, Hs = "__reactResources$" + ol, Wn = "__reactMarker$" + ol;
        function Gi(e) {
            delete e[Ie], delete e[ut], delete e[Yi], delete e[wm], delete e[zm];
        }
        function sn(e) {
            var t = e[Ie];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[cn] || l[Ie]) {
                    if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = uh(e); e !== null;){
                        if (l = e[Ie]) return l;
                        e = uh(e);
                    }
                    return t;
                }
                e = l, l = e.parentNode;
            }
            return null;
        }
        function on(e) {
            if (e = e[Ie] || e[cn]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function In(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(s(33));
        }
        function fn(e) {
            var t = e[Hs];
            return t || (t = e[Hs] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Ke(e) {
            e[Wn] = !0;
        }
        var Ls = new Set, Qs = {};
        function jl(e, t) {
            dn(e, t), dn(e + "Capture", t);
        }
        function dn(e, t) {
            for(Qs[e] = t, e = 0; e < t.length; e++)Ls.add(t[e]);
        }
        var Um = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ks = {}, Ys = {};
        function Pm(e) {
            return ji.call(Ys, e) ? !0 : ji.call(Ks, e) ? !1 : Um.test(e) ? Ys[e] = !0 : (Ks[e] = !0, !1);
        }
        function du(e, t, l) {
            if (Pm(t)) if (l === null) e.removeAttribute(t);
            else {
                switch(typeof l){
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var n = t.toLowerCase().slice(0, 5);
                        if (n !== "data-" && n !== "aria-") {
                            e.removeAttribute(t);
                            return;
                        }
                }
                e.setAttribute(t, "" + l);
            }
        }
        function hu(e, t, l) {
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
        function Kt(e, t, l, n) {
            if (n === null) e.removeAttribute(l);
            else {
                switch(typeof n){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(l);
                        return;
                }
                e.setAttributeNS(t, l, "" + n);
            }
        }
        var Vi, Gs;
        function hn(e) {
            if (Vi === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Vi = t && t[1] || "", Gs = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Vi + e + Gs;
        }
        var Xi = !1;
        function Zi(e, t) {
            if (!e || Xi) return "";
            Xi = !0;
            var l = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var n = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var j = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(j.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(j, []);
                                    } catch (B) {
                                        var D = B;
                                    }
                                    Reflect.construct(e, [], j);
                                } else {
                                    try {
                                        j.call();
                                    } catch (B) {
                                        D = B;
                                    }
                                    e.call(j.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (B) {
                                    D = B;
                                }
                                (j = e()) && typeof j.catch == "function" && j.catch(function() {});
                            }
                        } catch (B) {
                            if (B && D && typeof B.stack == "string") return [
                                B.stack,
                                D.stack
                            ];
                        }
                        return [
                            null,
                            null
                        ];
                    }
                };
                n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
                a && a.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var r = n.DetermineComponentFrameRoot(), d = r[0], y = r[1];
                if (d && y) {
                    var S = d.split(`
`), M = y.split(`
`);
                    for(a = n = 0; n < S.length && !S[n].includes("DetermineComponentFrameRoot");)n++;
                    for(; a < M.length && !M[a].includes("DetermineComponentFrameRoot");)a++;
                    if (n === S.length || a === M.length) for(n = S.length - 1, a = M.length - 1; 1 <= n && 0 <= a && S[n] !== M[a];)a--;
                    for(; 1 <= n && 0 <= a; n--, a--)if (S[n] !== M[a]) {
                        if (n !== 1 || a !== 1) do if (n--, a--, 0 > a || S[n] !== M[a]) {
                            var P = `
` + S[n].replace(" at new ", " at ");
                            return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
                        }
                        while (1 <= n && 0 <= a);
                        break;
                    }
                }
            } finally{
                Xi = !1, Error.prepareStackTrace = l;
            }
            return (l = e ? e.displayName || e.name : "") ? hn(l) : "";
        }
        function qm(e) {
            switch(e.tag){
                case 26:
                case 27:
                case 5:
                    return hn(e.type);
                case 16:
                    return hn("Lazy");
                case 13:
                    return hn("Suspense");
                case 19:
                    return hn("SuspenseList");
                case 0:
                case 15:
                    return Zi(e.type, !1);
                case 11:
                    return Zi(e.type.render, !1);
                case 1:
                    return Zi(e.type, !0);
                case 31:
                    return hn("Activity");
                default:
                    return "";
            }
        }
        function Vs(e) {
            try {
                var t = "";
                do t += qm(e), e = e.return;
                while (e);
                return t;
            } catch (l) {
                return `
Error generating stack: ` + l.message + `
` + l.stack;
            }
        }
        function Et(e) {
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
        function Xs(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function jm(e) {
            var t = Xs(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
            if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
                var a = l.get, r = l.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return a.call(this);
                    },
                    set: function(d) {
                        n = "" + d, r.call(this, d);
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: l.enumerable
                }), {
                    getValue: function() {
                        return n;
                    },
                    setValue: function(d) {
                        n = "" + d;
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t];
                    }
                };
            }
        }
        function pu(e) {
            e._valueTracker || (e._valueTracker = jm(e));
        }
        function Zs(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), n = "";
            return e && (n = Xs(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
        }
        function mu(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var km = /[\n"\\]/g;
        function _t(e) {
            return e.replace(km, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function $i(e, t, l, n, a, r, d, y) {
            e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Et(t)) : e.value !== "" + Et(t) && (e.value = "" + Et(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Ji(e, d, Et(t)) : l != null ? Ji(e, d, Et(l)) : n != null && e.removeAttribute("value"), a == null && r != null && (e.defaultChecked = !!r), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + Et(y) : e.removeAttribute("name");
        }
        function $s(e, t, l, n, a, r, d, y) {
            if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || l != null) {
                if (!(r !== "submit" && r !== "reset" || t != null)) return;
                l = l != null ? "" + Et(l) : "", t = t != null ? "" + Et(t) : l, y || t === e.value || (e.value = t), e.defaultValue = t;
            }
            n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = y ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d);
        }
        function Ji(e, t, l) {
            t === "number" && mu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
        }
        function pn(e, t, l, n) {
            if (e = e.options, t) {
                t = {};
                for(var a = 0; a < l.length; a++)t["$" + l[a]] = !0;
                for(l = 0; l < e.length; l++)a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
            } else {
                for(l = "" + Et(l), t = null, a = 0; a < e.length; a++){
                    if (e[a].value === l) {
                        e[a].selected = !0, n && (e[a].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[a].disabled || (t = e[a]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function Js(e, t, l) {
            if (t != null && (t = "" + Et(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + Et(l) : "";
        }
        function Fs(e, t, l, n) {
            if (t == null) {
                if (n != null) {
                    if (l != null) throw Error(s(92));
                    if (pe(n)) {
                        if (1 < n.length) throw Error(s(93));
                        n = n[0];
                    }
                    l = n;
                }
                l == null && (l = ""), t = l;
            }
            l = Et(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n);
        }
        function mn(e, t) {
            if (t) {
                var l = e.firstChild;
                if (l && l === e.lastChild && l.nodeType === 3) {
                    l.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var Hm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Ws(e, t, l) {
            var n = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Hm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function Is(e, t, l) {
            if (t != null && typeof t != "object") throw Error(s(62));
            if (e = e.style, l != null) {
                for(var n in l)!l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
                for(var a in t)n = t[a], t.hasOwnProperty(a) && l[a] !== n && Ws(e, a, n);
            } else for(var r in t)t.hasOwnProperty(r) && Ws(e, r, t[r]);
        }
        function Fi(e) {
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
        var Lm = new Map([
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
        ]), Qm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function yu(e) {
            return Qm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Wi = null;
        function Ii(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var yn = null, vn = null;
        function eo(e) {
            var t = on(e);
            if (t && (e = t.stateNode)) {
                var l = e[ut] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if ($i(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + _t("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var n = l[t];
                                if (n !== e && n.form === e.form) {
                                    var a = n[ut] || null;
                                    if (!a) throw Error(s(90));
                                    $i(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)n = l[t], n.form === e.form && Zs(n);
                        }
                        break e;
                    case "textarea":
                        Js(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && pn(e, !!l.multiple, t, !1);
                }
            }
        }
        var er = !1;
        function to(e, t, l) {
            if (er) return e(t, l);
            er = !0;
            try {
                var n = e(t);
                return n;
            } finally{
                if (er = !1, (yn !== null || vn !== null) && (ti(), yn && (t = yn, e = vn, vn = yn = null, eo(t), e))) for(t = 0; t < e.length; t++)eo(e[t]);
            }
        }
        function ea(e, t) {
            var l = e.stateNode;
            if (l === null) return null;
            var n = l[ut] || null;
            if (n === null) return null;
            l = n[t];
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
                    (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
                    break e;
                default:
                    e = !1;
            }
            if (e) return null;
            if (l && typeof l != "function") throw Error(s(231, t, typeof l));
            return l;
        }
        var Yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tr = !1;
        if (Yt) try {
            var ta = {};
            Object.defineProperty(ta, "passive", {
                get: function() {
                    tr = !0;
                }
            }), window.addEventListener("test", ta, ta), window.removeEventListener("test", ta, ta);
        } catch  {
            tr = !1;
        }
        var fl = null, lr = null, vu = null;
        function lo() {
            if (vu) return vu;
            var e, t = lr, l = t.length, n, a = "value" in fl ? fl.value : fl.textContent, r = a.length;
            for(e = 0; e < l && t[e] === a[e]; e++);
            var d = l - e;
            for(n = 1; n <= d && t[l - n] === a[r - n]; n++);
            return vu = a.slice(e, 1 < n ? 1 - n : void 0);
        }
        function gu(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function bu() {
            return !0;
        }
        function no() {
            return !1;
        }
        function it(e) {
            function t(l, n, a, r, d) {
                this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = r, this.target = d, this.currentTarget = null;
                for(var y in e)e.hasOwnProperty(y) && (l = e[y], this[y] = l ? l(r) : r[y]);
                return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? bu : no, this.isPropagationStopped = no, this;
            }
            return b(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = bu);
                },
                stopPropagation: function() {
                    var l = this.nativeEvent;
                    l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = bu);
                },
                persist: function() {},
                isPersistent: bu
            }), t;
        }
        var kl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, Su = it(kl), la = b({}, kl, {
            view: 0,
            detail: 0
        }), Km = it(la), nr, ar, na, Eu = b({}, la, {
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
            getModifierState: ir,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== na && (na && e.type === "mousemove" ? (nr = e.screenX - na.screenX, ar = e.screenY - na.screenY) : ar = nr = 0, na = e), nr);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : ar;
            }
        }), ao = it(Eu), Ym = b({}, Eu, {
            dataTransfer: 0
        }), Gm = it(Ym), Vm = b({}, la, {
            relatedTarget: 0
        }), ur = it(Vm), Xm = b({}, kl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Zm = it(Xm), $m = b({}, kl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Jm = it($m), Fm = b({}, kl, {
            data: 0
        }), uo = it(Fm), Wm = {
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
        }, Im = {
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
        }, e0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function t0(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = e0[e]) ? !!t[e] : !1;
        }
        function ir() {
            return t0;
        }
        var l0 = b({}, la, {
            key: function(e) {
                if (e.key) {
                    var t = Wm[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = gu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Im[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ir,
            charCode: function(e) {
                return e.type === "keypress" ? gu(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? gu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), n0 = it(l0), a0 = b({}, Eu, {
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
        }), io = it(a0), u0 = b({}, la, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ir
        }), i0 = it(u0), r0 = b({}, kl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), c0 = it(r0), s0 = b({}, Eu, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), o0 = it(s0), f0 = b({}, kl, {
            newState: 0,
            oldState: 0
        }), d0 = it(f0), h0 = [
            9,
            13,
            27,
            32
        ], rr = Yt && "CompositionEvent" in window, aa = null;
        Yt && "documentMode" in document && (aa = document.documentMode);
        var p0 = Yt && "TextEvent" in window && !aa, ro = Yt && (!rr || aa && 8 < aa && 11 >= aa), co = " ", so = !1;
        function oo(e, t) {
            switch(e){
                case "keyup":
                    return h0.indexOf(t.keyCode) !== -1;
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
        function fo(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var gn = !1;
        function m0(e, t) {
            switch(e){
                case "compositionend":
                    return fo(t);
                case "keypress":
                    return t.which !== 32 ? null : (so = !0, co);
                case "textInput":
                    return e = t.data, e === co && so ? null : e;
                default:
                    return null;
            }
        }
        function y0(e, t) {
            if (gn) return e === "compositionend" || !rr && oo(e, t) ? (e = lo(), vu = lr = fl = null, gn = !1, e) : null;
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
                    return ro && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var v0 = {
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
        function ho(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!v0[e.type] : t === "textarea";
        }
        function po(e, t, l, n) {
            yn ? vn ? vn.push(n) : vn = [
                n
            ] : yn = n, t = ri(t, "onChange"), 0 < t.length && (l = new Su("onChange", "change", null, l, n), e.push({
                event: l,
                listeners: t
            }));
        }
        var ua = null, ia = null;
        function g0(e) {
            $d(e, 0);
        }
        function _u(e) {
            var t = In(e);
            if (Zs(t)) return e;
        }
        function mo(e, t) {
            if (e === "change") return t;
        }
        var yo = !1;
        if (Yt) {
            var cr;
            if (Yt) {
                var sr = "oninput" in document;
                if (!sr) {
                    var vo = document.createElement("div");
                    vo.setAttribute("oninput", "return;"), sr = typeof vo.oninput == "function";
                }
                cr = sr;
            } else cr = !1;
            yo = cr && (!document.documentMode || 9 < document.documentMode);
        }
        function go() {
            ua && (ua.detachEvent("onpropertychange", bo), ia = ua = null);
        }
        function bo(e) {
            if (e.propertyName === "value" && _u(ia)) {
                var t = [];
                po(t, ia, e, Ii(e)), to(g0, t);
            }
        }
        function b0(e, t, l) {
            e === "focusin" ? (go(), ua = t, ia = l, ua.attachEvent("onpropertychange", bo)) : e === "focusout" && go();
        }
        function S0(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return _u(ia);
        }
        function E0(e, t) {
            if (e === "click") return _u(t);
        }
        function _0(e, t) {
            if (e === "input" || e === "change") return _u(t);
        }
        function T0(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var pt = typeof Object.is == "function" ? Object.is : T0;
        function ra(e, t) {
            if (pt(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), n = Object.keys(t);
            if (l.length !== n.length) return !1;
            for(n = 0; n < l.length; n++){
                var a = l[n];
                if (!ji.call(t, a) || !pt(e[a], t[a])) return !1;
            }
            return !0;
        }
        function So(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function Eo(e, t) {
            var l = So(e);
            e = 0;
            for(var n; l;){
                if (l.nodeType === 3) {
                    if (n = e + l.textContent.length, e <= t && n >= t) return {
                        node: l,
                        offset: t - e
                    };
                    e = n;
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
                l = So(l);
            }
        }
        function _o(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _o(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function To(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = mu(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var l = typeof t.contentWindow.location.href == "string";
                } catch  {
                    l = !1;
                }
                if (l) e = t.contentWindow;
                else break;
                t = mu(e.document);
            }
            return t;
        }
        function or(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var R0 = Yt && "documentMode" in document && 11 >= document.documentMode, bn = null, fr = null, ca = null, dr = !1;
        function Ro(e, t, l) {
            var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            dr || bn == null || bn !== mu(n) || (n = bn, "selectionStart" in n && or(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), ca && ra(ca, n) || (ca = n, n = ri(fr, "onSelect"), 0 < n.length && (t = new Su("onSelect", "select", null, t, l), e.push({
                event: t,
                listeners: n
            }), t.target = bn)));
        }
        function Hl(e, t) {
            var l = {};
            return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
        }
        var Sn = {
            animationend: Hl("Animation", "AnimationEnd"),
            animationiteration: Hl("Animation", "AnimationIteration"),
            animationstart: Hl("Animation", "AnimationStart"),
            transitionrun: Hl("Transition", "TransitionRun"),
            transitionstart: Hl("Transition", "TransitionStart"),
            transitioncancel: Hl("Transition", "TransitionCancel"),
            transitionend: Hl("Transition", "TransitionEnd")
        }, hr = {}, Ao = {};
        Yt && (Ao = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
        function Ll(e) {
            if (hr[e]) return hr[e];
            if (!Sn[e]) return e;
            var t = Sn[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in Ao) return hr[e] = t[l];
            return e;
        }
        var Oo = Ll("animationend"), No = Ll("animationiteration"), xo = Ll("animationstart"), A0 = Ll("transitionrun"), O0 = Ll("transitionstart"), N0 = Ll("transitioncancel"), Mo = Ll("transitionend"), Co = new Map, pr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        pr.push("scrollEnd");
        function Dt(e, t) {
            Co.set(e, t), jl(t, [
                e
            ]);
        }
        var Do = new WeakMap;
        function Tt(e, t) {
            if (typeof e == "object" && e !== null) {
                var l = Do.get(e);
                return l !== void 0 ? l : (t = {
                    value: e,
                    source: t,
                    stack: Vs(t)
                }, Do.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Vs(t)
            };
        }
        var Rt = [], En = 0, mr = 0;
        function Tu() {
            for(var e = En, t = mr = En = 0; t < e;){
                var l = Rt[t];
                Rt[t++] = null;
                var n = Rt[t];
                Rt[t++] = null;
                var a = Rt[t];
                Rt[t++] = null;
                var r = Rt[t];
                if (Rt[t++] = null, n !== null && a !== null) {
                    var d = n.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), n.pending = a;
                }
                r !== 0 && Bo(l, a, r);
            }
        }
        function Ru(e, t, l, n) {
            Rt[En++] = e, Rt[En++] = t, Rt[En++] = l, Rt[En++] = n, mr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
        }
        function yr(e, t, l, n) {
            return Ru(e, t, l, n), Au(e);
        }
        function _n(e, t) {
            return Ru(e, null, null, t), Au(e);
        }
        function Bo(e, t, l) {
            e.lanes |= l;
            var n = e.alternate;
            n !== null && (n.lanes |= l);
            for(var a = !1, r = e.return; r !== null;)r.childLanes |= l, n = r.alternate, n !== null && (n.childLanes |= l), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (a = !0)), e = r, r = r.return;
            return e.tag === 3 ? (r = e.stateNode, a && t !== null && (a = 31 - ht(l), e = r.hiddenUpdates, n = e[a], n === null ? e[a] = [
                t
            ] : n.push(t), t.lane = l | 536870912), r) : null;
        }
        function Au(e) {
            if (50 < wa) throw wa = 0, _c = null, Error(s(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var Tn = {};
        function x0(e, t, l, n) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function mt(e, t, l, n) {
            return new x0(e, t, l, n);
        }
        function vr(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Gt(e, t) {
            var l = e.alternate;
            return l === null ? (l = mt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
        }
        function wo(e, t) {
            e.flags &= 65011714;
            var l = e.alternate;
            return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function Ou(e, t, l, n, a, r) {
            var d = 0;
            if (n = e, typeof e == "function") vr(e) && (d = 1);
            else if (typeof e == "string") d = C1(e, l, W.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case ue:
                    return e = mt(31, l, t, a), e.elementType = ue, e.lanes = r, e;
                case O:
                    return Ql(l.children, a, r, t);
                case C:
                    d = 8, a |= 24;
                    break;
                case U:
                    return e = mt(12, l, t, a | 2), e.elementType = U, e.lanes = r, e;
                case Y:
                    return e = mt(13, l, t, a), e.elementType = Y, e.lanes = r, e;
                case $:
                    return e = mt(19, l, t, a), e.elementType = $, e.lanes = r, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case w:
                        case Q:
                            d = 10;
                            break e;
                        case H:
                            d = 9;
                            break e;
                        case G:
                            d = 11;
                            break e;
                        case te:
                            d = 14;
                            break e;
                        case se:
                            d = 16, n = null;
                            break e;
                    }
                    d = 29, l = Error(s(130, e === null ? "null" : typeof e, "")), n = null;
            }
            return t = mt(d, l, t, a), t.elementType = e, t.type = n, t.lanes = r, t;
        }
        function Ql(e, t, l, n) {
            return e = mt(7, e, n, t), e.lanes = l, e;
        }
        function gr(e, t, l) {
            return e = mt(6, e, null, t), e.lanes = l, e;
        }
        function br(e, t, l) {
            return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var Rn = [], An = 0, Nu = null, xu = 0, At = [], Ot = 0, Kl = null, Vt = 1, Xt = "";
        function Yl(e, t) {
            Rn[An++] = xu, Rn[An++] = Nu, Nu = e, xu = t;
        }
        function zo(e, t, l) {
            At[Ot++] = Vt, At[Ot++] = Xt, At[Ot++] = Kl, Kl = e;
            var n = Vt;
            e = Xt;
            var a = 32 - ht(n) - 1;
            n &= ~(1 << a), l += 1;
            var r = 32 - ht(t) + a;
            if (30 < r) {
                var d = a - a % 5;
                r = (n & (1 << d) - 1).toString(32), n >>= d, a -= d, Vt = 1 << 32 - ht(t) + a | l << a | n, Xt = r + e;
            } else Vt = 1 << r | l << a | n, Xt = e;
        }
        function Sr(e) {
            e.return !== null && (Yl(e, 1), zo(e, 1, 0));
        }
        function Er(e) {
            for(; e === Nu;)Nu = Rn[--An], Rn[An] = null, xu = Rn[--An], Rn[An] = null;
            for(; e === Kl;)Kl = At[--Ot], At[Ot] = null, Xt = At[--Ot], At[Ot] = null, Vt = At[--Ot], At[Ot] = null;
        }
        var nt = null, Be = null, ge = !1, Gl = null, Pt = !1, _r = Error(s(519));
        function Vl(e) {
            var t = Error(s(418, ""));
            throw fa(Tt(t, e)), _r;
        }
        function Uo(e) {
            var t = e.stateNode, l = e.type, n = e.memoizedProps;
            switch(t[Ie] = e, t[ut] = n, l){
                case "dialog":
                    he("cancel", t), he("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    he("load", t);
                    break;
                case "video":
                case "audio":
                    for(l = 0; l < Ua.length; l++)he(Ua[l], t);
                    break;
                case "source":
                    he("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    he("error", t), he("load", t);
                    break;
                case "details":
                    he("toggle", t);
                    break;
                case "input":
                    he("invalid", t), $s(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), pu(t);
                    break;
                case "select":
                    he("invalid", t);
                    break;
                case "textarea":
                    he("invalid", t), Fs(t, n.value, n.defaultValue, n.children), pu(t);
            }
            l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Id(t.textContent, l) ? (n.popover != null && (he("beforetoggle", t), he("toggle", t)), n.onScroll != null && he("scroll", t), n.onScrollEnd != null && he("scrollend", t), n.onClick != null && (t.onclick = ci), t = !0) : t = !1, t || Vl(e);
        }
        function Po(e) {
            for(nt = e.return; nt;)switch(nt.tag){
                case 5:
                case 13:
                    Pt = !1;
                    return;
                case 27:
                case 3:
                    Pt = !0;
                    return;
                default:
                    nt = nt.return;
            }
        }
        function sa(e) {
            if (e !== nt) return !1;
            if (!ge) return Po(e), ge = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || jc(e.type, e.memoizedProps)), l = !l), l && Be && Vl(e), Po(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (l = e.data, l === "/$") {
                            if (t === 0) {
                                Be = wt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else l !== "$" && l !== "$!" && l !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    Be = null;
                }
            } else t === 27 ? (t = Be, Nl(e.type) ? (e = Qc, Qc = null, Be = e) : Be = t) : Be = nt ? wt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function oa() {
            Be = nt = null, ge = !1;
        }
        function qo() {
            var e = Gl;
            return e !== null && (st === null ? st = e : st.push.apply(st, e), Gl = null), e;
        }
        function fa(e) {
            Gl === null ? Gl = [
                e
            ] : Gl.push(e);
        }
        var Tr = L(null), Xl = null, Zt = null;
        function dl(e, t, l) {
            V(Tr, t._currentValue), t._currentValue = l;
        }
        function $t(e) {
            e._currentValue = Tr.current, X(Tr);
        }
        function Rr(e, t, l) {
            for(; e !== null;){
                var n = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
                e = e.return;
            }
        }
        function Ar(e, t, l, n) {
            var a = e.child;
            for(a !== null && (a.return = e); a !== null;){
                var r = a.dependencies;
                if (r !== null) {
                    var d = a.child;
                    r = r.firstContext;
                    e: for(; r !== null;){
                        var y = r;
                        r = a;
                        for(var S = 0; S < t.length; S++)if (y.context === t[S]) {
                            r.lanes |= l, y = r.alternate, y !== null && (y.lanes |= l), Rr(r.return, l, e), n || (d = null);
                            break e;
                        }
                        r = y.next;
                    }
                } else if (a.tag === 18) {
                    if (d = a.return, d === null) throw Error(s(341));
                    d.lanes |= l, r = d.alternate, r !== null && (r.lanes |= l), Rr(d, l, e), d = null;
                } else d = a.child;
                if (d !== null) d.return = a;
                else for(d = a; d !== null;){
                    if (d === e) {
                        d = null;
                        break;
                    }
                    if (a = d.sibling, a !== null) {
                        a.return = d.return, d = a;
                        break;
                    }
                    d = d.return;
                }
                a = d;
            }
        }
        function da(e, t, l, n) {
            e = null;
            for(var a = t, r = !1; a !== null;){
                if (!r) {
                    if ((a.flags & 524288) !== 0) r = !0;
                    else if ((a.flags & 262144) !== 0) break;
                }
                if (a.tag === 10) {
                    var d = a.alternate;
                    if (d === null) throw Error(s(387));
                    if (d = d.memoizedProps, d !== null) {
                        var y = a.type;
                        pt(a.pendingProps.value, d.value) || (e !== null ? e.push(y) : e = [
                            y
                        ]);
                    }
                } else if (a === ft.current) {
                    if (d = a.alternate, d === null) throw Error(s(387));
                    d.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(La) : e = [
                        La
                    ]);
                }
                a = a.return;
            }
            e !== null && Ar(t, e, l, n), t.flags |= 262144;
        }
        function Mu(e) {
            for(e = e.firstContext; e !== null;){
                if (!pt(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function Zl(e) {
            Xl = e, Zt = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function et(e) {
            return jo(Xl, e);
        }
        function Cu(e, t) {
            return Xl === null && Zl(e), jo(e, t);
        }
        function jo(e, t) {
            var l = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, Zt === null) {
                if (e === null) throw Error(s(308));
                Zt = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else Zt = Zt.next = t;
            return l;
        }
        var M0 = typeof AbortController < "u" ? AbortController : function() {
            var e = [], t = this.signal = {
                aborted: !1,
                addEventListener: function(l, n) {
                    e.push(n);
                }
            };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(l) {
                    return l();
                });
            };
        }, C0 = u.unstable_scheduleCallback, D0 = u.unstable_NormalPriority, ke = {
            $$typeof: Q,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Or() {
            return {
                controller: new M0,
                data: new Map,
                refCount: 0
            };
        }
        function ha(e) {
            e.refCount--, e.refCount === 0 && C0(D0, function() {
                e.controller.abort();
            });
        }
        var pa = null, Nr = 0, On = 0, Nn = null;
        function B0(e, t) {
            if (pa === null) {
                var l = pa = [];
                Nr = 0, On = Mc(), Nn = {
                    status: "pending",
                    value: void 0,
                    then: function(n) {
                        l.push(n);
                    }
                };
            }
            return Nr++, t.then(ko, ko), t;
        }
        function ko() {
            if (--Nr === 0 && pa !== null) {
                Nn !== null && (Nn.status = "fulfilled");
                var e = pa;
                pa = null, On = 0, Nn = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function w0(e, t) {
            var l = [], n = {
                status: "pending",
                value: null,
                reason: null,
                then: function(a) {
                    l.push(a);
                }
            };
            return e.then(function() {
                n.status = "fulfilled", n.value = t;
                for(var a = 0; a < l.length; a++)(0, l[a])(t);
            }, function(a) {
                for(n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)(0, l[a])(void 0);
            }), n;
        }
        var Ho = z.S;
        z.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && B0(e, t), Ho !== null && Ho(e, t);
        };
        var $l = L(null);
        function xr() {
            var e = $l.current;
            return e !== null ? e : Ne.pooledCache;
        }
        function Du(e, t) {
            t === null ? V($l, $l.current) : V($l, t.pool);
        }
        function Lo() {
            var e = xr();
            return e === null ? null : {
                parent: ke._currentValue,
                pool: e
            };
        }
        var ma = Error(s(460)), Qo = Error(s(474)), Bu = Error(s(542)), Mr = {
            then: function() {}
        };
        function Ko(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function wu() {}
        function Yo(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(wu, wu), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Vo(e), e;
                default:
                    if (typeof t.status == "string") t.then(wu, wu);
                    else {
                        if (e = Ne, e !== null && 100 < e.shellSuspendCounter) throw Error(s(482));
                        e = t, e.status = "pending", e.then(function(n) {
                            if (t.status === "pending") {
                                var a = t;
                                a.status = "fulfilled", a.value = n;
                            }
                        }, function(n) {
                            if (t.status === "pending") {
                                var a = t;
                                a.status = "rejected", a.reason = n;
                            }
                        });
                    }
                    switch(t.status){
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw e = t.reason, Vo(e), e;
                    }
                    throw ya = t, ma;
            }
        }
        var ya = null;
        function Go() {
            if (ya === null) throw Error(s(459));
            var e = ya;
            return ya = null, e;
        }
        function Vo(e) {
            if (e === ma || e === Bu) throw Error(s(483));
        }
        var hl = !1;
        function Cr(e) {
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
        function Dr(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            });
        }
        function pl(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function ml(e, t, l) {
            var n = e.updateQueue;
            if (n === null) return null;
            if (n = n.shared, (Se & 2) !== 0) {
                var a = n.pending;
                return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Au(e), Bo(e, null, l), t;
            }
            return Ru(e, n, t, l), Au(e);
        }
        function va(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, js(e, l);
            }
        }
        function Br(e, t) {
            var l = e.updateQueue, n = e.alternate;
            if (n !== null && (n = n.updateQueue, l === n)) {
                var a = null, r = null;
                if (l = l.firstBaseUpdate, l !== null) {
                    do {
                        var d = {
                            lane: l.lane,
                            tag: l.tag,
                            payload: l.payload,
                            callback: null,
                            next: null
                        };
                        r === null ? a = r = d : r = r.next = d, l = l.next;
                    }while (l !== null);
                    r === null ? a = r = t : r = r.next = t;
                } else a = r = t;
                l = {
                    baseState: n.baseState,
                    firstBaseUpdate: a,
                    lastBaseUpdate: r,
                    shared: n.shared,
                    callbacks: n.callbacks
                }, e.updateQueue = l;
                return;
            }
            e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
        }
        var wr = !1;
        function ga() {
            if (wr) {
                var e = Nn;
                if (e !== null) throw e;
            }
        }
        function ba(e, t, l, n) {
            wr = !1;
            var a = e.updateQueue;
            hl = !1;
            var r = a.firstBaseUpdate, d = a.lastBaseUpdate, y = a.shared.pending;
            if (y !== null) {
                a.shared.pending = null;
                var S = y, M = S.next;
                S.next = null, d === null ? r = M : d.next = M, d = S;
                var P = e.alternate;
                P !== null && (P = P.updateQueue, y = P.lastBaseUpdate, y !== d && (y === null ? P.firstBaseUpdate = M : y.next = M, P.lastBaseUpdate = S));
            }
            if (r !== null) {
                var j = a.baseState;
                d = 0, P = M = S = null, y = r;
                do {
                    var D = y.lane & -536870913, B = D !== y.lane;
                    if (B ? (me & D) === D : (n & D) === D) {
                        D !== 0 && D === On && (wr = !0), P !== null && (P = P.next = {
                            lane: 0,
                            tag: y.tag,
                            payload: y.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var le = e, I = y;
                            D = t;
                            var Re = l;
                            switch(I.tag){
                                case 1:
                                    if (le = I.payload, typeof le == "function") {
                                        j = le.call(Re, j, D);
                                        break e;
                                    }
                                    j = le;
                                    break e;
                                case 3:
                                    le.flags = le.flags & -65537 | 128;
                                case 0:
                                    if (le = I.payload, D = typeof le == "function" ? le.call(Re, j, D) : le, D == null) break e;
                                    j = b({}, j, D);
                                    break e;
                                case 2:
                                    hl = !0;
                            }
                        }
                        D = y.callback, D !== null && (e.flags |= 64, B && (e.flags |= 8192), B = a.callbacks, B === null ? a.callbacks = [
                            D
                        ] : B.push(D));
                    } else B = {
                        lane: D,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    }, P === null ? (M = P = B, S = j) : P = P.next = B, d |= D;
                    if (y = y.next, y === null) {
                        if (y = a.shared.pending, y === null) break;
                        B = y, y = B.next, B.next = null, a.lastBaseUpdate = B, a.shared.pending = null;
                    }
                }while (!0);
                P === null && (S = j), a.baseState = S, a.firstBaseUpdate = M, a.lastBaseUpdate = P, r === null && (a.shared.lanes = 0), Tl |= d, e.lanes = d, e.memoizedState = j;
            }
        }
        function Xo(e, t) {
            if (typeof e != "function") throw Error(s(191, e));
            e.call(t);
        }
        function Zo(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)Xo(l[e], t);
        }
        var xn = L(null), zu = L(0);
        function $o(e, t) {
            e = ll, V(zu, e), V(xn, t), ll = e | t.baseLanes;
        }
        function zr() {
            V(zu, ll), V(xn, xn.current);
        }
        function Ur() {
            ll = zu.current, X(xn), X(zu);
        }
        var yl = 0, oe = null, _e = null, qe = null, Uu = !1, Mn = !1, Jl = !1, Pu = 0, Sa = 0, Cn = null, z0 = 0;
        function Ue() {
            throw Error(s(321));
        }
        function Pr(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!pt(e[l], t[l])) return !1;
            return !0;
        }
        function qr(e, t, l, n, a, r) {
            return yl = r, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? wf : zf, Jl = !1, r = l(n, a), Jl = !1, Mn && (r = Fo(t, l, n, a)), Jo(e), r;
        }
        function Jo(e) {
            z.H = Qu;
            var t = _e !== null && _e.next !== null;
            if (yl = 0, qe = _e = oe = null, Uu = !1, Sa = 0, Cn = null, t) throw Error(s(300));
            e === null || Ye || (e = e.dependencies, e !== null && Mu(e) && (Ye = !0));
        }
        function Fo(e, t, l, n) {
            oe = e;
            var a = 0;
            do {
                if (Mn && (Cn = null), Sa = 0, Mn = !1, 25 <= a) throw Error(s(301));
                if (a += 1, qe = _e = null, e.updateQueue != null) {
                    var r = e.updateQueue;
                    r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
                }
                z.H = L0, r = t(l, n);
            }while (Mn);
            return r;
        }
        function U0() {
            var e = z.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? Ea(t) : t, e = e.useState()[0], (_e !== null ? _e.memoizedState : null) !== e && (oe.flags |= 1024), t;
        }
        function jr() {
            var e = Pu !== 0;
            return Pu = 0, e;
        }
        function kr(e, t, l) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
        }
        function Hr(e) {
            if (Uu) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                Uu = !1;
            }
            yl = 0, qe = _e = oe = null, Mn = !1, Sa = Pu = 0, Cn = null;
        }
        function rt() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return qe === null ? oe.memoizedState = qe = e : qe = qe.next = e, qe;
        }
        function je() {
            if (_e === null) {
                var e = oe.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = _e.next;
            var t = qe === null ? oe.memoizedState : qe.next;
            if (t !== null) qe = t, _e = e;
            else {
                if (e === null) throw oe.alternate === null ? Error(s(467)) : Error(s(310));
                _e = e, e = {
                    memoizedState: _e.memoizedState,
                    baseState: _e.baseState,
                    baseQueue: _e.baseQueue,
                    queue: _e.queue,
                    next: null
                }, qe === null ? oe.memoizedState = qe = e : qe = qe.next = e;
            }
            return qe;
        }
        function Lr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function Ea(e) {
            var t = Sa;
            return Sa += 1, Cn === null && (Cn = []), e = Yo(Cn, e, t), t = oe, (qe === null ? t.memoizedState : qe.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? wf : zf), e;
        }
        function qu(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return Ea(e);
                if (e.$$typeof === Q) return et(e);
            }
            throw Error(s(438, String(e)));
        }
        function Qr(e) {
            var t = null, l = oe.updateQueue;
            if (l !== null && (t = l.memoCache), t == null) {
                var n = oe.alternate;
                n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
                    data: n.data.map(function(a) {
                        return a.slice();
                    }),
                    index: 0
                })));
            }
            if (t == null && (t = {
                data: [],
                index: 0
            }), l === null && (l = Lr(), oe.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), n = 0; n < e; n++)l[n] = ze;
            return t.index++, l;
        }
        function Jt(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function ju(e) {
            var t = je();
            return Kr(t, _e, e);
        }
        function Kr(e, t, l) {
            var n = e.queue;
            if (n === null) throw Error(s(311));
            n.lastRenderedReducer = l;
            var a = e.baseQueue, r = n.pending;
            if (r !== null) {
                if (a !== null) {
                    var d = a.next;
                    a.next = r.next, r.next = d;
                }
                t.baseQueue = a = r, n.pending = null;
            }
            if (r = e.baseState, a === null) e.memoizedState = r;
            else {
                t = a.next;
                var y = d = null, S = null, M = t, P = !1;
                do {
                    var j = M.lane & -536870913;
                    if (j !== M.lane ? (me & j) === j : (yl & j) === j) {
                        var D = M.revertLane;
                        if (D === 0) S !== null && (S = S.next = {
                            lane: 0,
                            revertLane: 0,
                            action: M.action,
                            hasEagerState: M.hasEagerState,
                            eagerState: M.eagerState,
                            next: null
                        }), j === On && (P = !0);
                        else if ((yl & D) === D) {
                            M = M.next, D === On && (P = !0);
                            continue;
                        } else j = {
                            lane: 0,
                            revertLane: M.revertLane,
                            action: M.action,
                            hasEagerState: M.hasEagerState,
                            eagerState: M.eagerState,
                            next: null
                        }, S === null ? (y = S = j, d = r) : S = S.next = j, oe.lanes |= D, Tl |= D;
                        j = M.action, Jl && l(r, j), r = M.hasEagerState ? M.eagerState : l(r, j);
                    } else D = {
                        lane: j,
                        revertLane: M.revertLane,
                        action: M.action,
                        hasEagerState: M.hasEagerState,
                        eagerState: M.eagerState,
                        next: null
                    }, S === null ? (y = S = D, d = r) : S = S.next = D, oe.lanes |= j, Tl |= j;
                    M = M.next;
                }while (M !== null && M !== t);
                if (S === null ? d = r : S.next = y, !pt(r, e.memoizedState) && (Ye = !0, P && (l = Nn, l !== null))) throw l;
                e.memoizedState = r, e.baseState = d, e.baseQueue = S, n.lastRenderedState = r;
            }
            return a === null && (n.lanes = 0), [
                e.memoizedState,
                n.dispatch
            ];
        }
        function Yr(e) {
            var t = je(), l = t.queue;
            if (l === null) throw Error(s(311));
            l.lastRenderedReducer = e;
            var n = l.dispatch, a = l.pending, r = t.memoizedState;
            if (a !== null) {
                l.pending = null;
                var d = a = a.next;
                do r = e(r, d.action), d = d.next;
                while (d !== a);
                pt(r, t.memoizedState) || (Ye = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), l.lastRenderedState = r;
            }
            return [
                r,
                n
            ];
        }
        function Wo(e, t, l) {
            var n = oe, a = je(), r = ge;
            if (r) {
                if (l === void 0) throw Error(s(407));
                l = l();
            } else l = t();
            var d = !pt((_e || a).memoizedState, l);
            d && (a.memoizedState = l, Ye = !0), a = a.queue;
            var y = tf.bind(null, n, a, e);
            if (_a(2048, 8, y, [
                e
            ]), a.getSnapshot !== t || d || qe !== null && qe.memoizedState.tag & 1) {
                if (n.flags |= 2048, Dn(9, ku(), ef.bind(null, n, a, l, t), null), Ne === null) throw Error(s(349));
                r || (yl & 124) !== 0 || Io(n, t, l);
            }
            return l;
        }
        function Io(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = oe.updateQueue, t === null ? (t = Lr(), oe.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function ef(e, t, l, n) {
            t.value = l, t.getSnapshot = n, lf(t) && nf(e);
        }
        function tf(e, t, l) {
            return l(function() {
                lf(t) && nf(e);
            });
        }
        function lf(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !pt(e, l);
            } catch  {
                return !0;
            }
        }
        function nf(e) {
            var t = _n(e, 2);
            t !== null && St(t, e, 2);
        }
        function Gr(e) {
            var t = rt();
            if (typeof e == "function") {
                var l = e;
                if (e = l(), Jl) {
                    sl(!0);
                    try {
                        l();
                    } finally{
                        sl(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Jt,
                lastRenderedState: e
            }, t;
        }
        function af(e, t, l, n) {
            return e.baseState = l, Kr(e, _e, typeof n == "function" ? n : Jt);
        }
        function P0(e, t, l, n, a) {
            if (Lu(e)) throw Error(s(485));
            if (e = t.action, e !== null) {
                var r = {
                    payload: a,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(d) {
                        r.listeners.push(d);
                    }
                };
                z.T !== null ? l(!0) : r.isTransition = !1, n(r), l = t.pending, l === null ? (r.next = t.pending = r, uf(t, r)) : (r.next = l.next, t.pending = l.next = r);
            }
        }
        function uf(e, t) {
            var l = t.action, n = t.payload, a = e.state;
            if (t.isTransition) {
                var r = z.T, d = {};
                z.T = d;
                try {
                    var y = l(a, n), S = z.S;
                    S !== null && S(d, y), rf(e, t, y);
                } catch (M) {
                    Vr(e, t, M);
                } finally{
                    z.T = r;
                }
            } else try {
                r = l(a, n), rf(e, t, r);
            } catch (M) {
                Vr(e, t, M);
            }
        }
        function rf(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
                cf(e, t, n);
            }, function(n) {
                return Vr(e, t, n);
            }) : cf(e, t, l);
        }
        function cf(e, t, l) {
            t.status = "fulfilled", t.value = l, sf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, uf(e, l)));
        }
        function Vr(e, t, l) {
            var n = e.pending;
            if (e.pending = null, n !== null) {
                n = n.next;
                do t.status = "rejected", t.reason = l, sf(t), t = t.next;
                while (t !== n);
            }
            e.action = null;
        }
        function sf(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function of(e, t) {
            return t;
        }
        function ff(e, t) {
            if (ge) {
                var l = Ne.formState;
                if (l !== null) {
                    e: {
                        var n = oe;
                        if (ge) {
                            if (Be) {
                                t: {
                                    for(var a = Be, r = Pt; a.nodeType !== 8;){
                                        if (!r) {
                                            a = null;
                                            break t;
                                        }
                                        if (a = wt(a.nextSibling), a === null) {
                                            a = null;
                                            break t;
                                        }
                                    }
                                    r = a.data, a = r === "F!" || r === "F" ? a : null;
                                }
                                if (a) {
                                    Be = wt(a.nextSibling), n = a.data === "F!";
                                    break e;
                                }
                            }
                            Vl(n);
                        }
                        n = !1;
                    }
                    n && (t = l[0]);
                }
            }
            return l = rt(), l.memoizedState = l.baseState = t, n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: of,
                lastRenderedState: t
            }, l.queue = n, l = Cf.bind(null, oe, n), n.dispatch = l, n = Gr(!1), r = Fr.bind(null, oe, !1, n.queue), n = rt(), a = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, n.queue = a, l = P0.bind(null, oe, a, r, l), a.dispatch = l, n.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function df(e) {
            var t = je();
            return hf(t, _e, e);
        }
        function hf(e, t, l) {
            if (t = Kr(e, t, of)[0], e = ju(Jt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var n = Ea(t);
            } catch (d) {
                throw d === ma ? Bu : d;
            }
            else n = t;
            t = je();
            var a = t.queue, r = a.dispatch;
            return l !== t.memoizedState && (oe.flags |= 2048, Dn(9, ku(), q0.bind(null, a, l), null)), [
                n,
                r,
                e
            ];
        }
        function q0(e, t) {
            e.action = t;
        }
        function pf(e) {
            var t = je(), l = _e;
            if (l !== null) return hf(t, l, e);
            je(), t = t.memoizedState, l = je();
            var n = l.queue.dispatch;
            return l.memoizedState = e, [
                t,
                n,
                !1
            ];
        }
        function Dn(e, t, l, n) {
            return e = {
                tag: e,
                create: l,
                deps: n,
                inst: t,
                next: null
            }, t = oe.updateQueue, t === null && (t = Lr(), oe.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
        }
        function ku() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function mf() {
            return je().memoizedState;
        }
        function Hu(e, t, l, n) {
            var a = rt();
            n = n === void 0 ? null : n, oe.flags |= e, a.memoizedState = Dn(1 | t, ku(), l, n);
        }
        function _a(e, t, l, n) {
            var a = je();
            n = n === void 0 ? null : n;
            var r = a.memoizedState.inst;
            _e !== null && n !== null && Pr(n, _e.memoizedState.deps) ? a.memoizedState = Dn(t, r, l, n) : (oe.flags |= e, a.memoizedState = Dn(1 | t, r, l, n));
        }
        function yf(e, t) {
            Hu(8390656, 8, e, t);
        }
        function vf(e, t) {
            _a(2048, 8, e, t);
        }
        function gf(e, t) {
            return _a(4, 2, e, t);
        }
        function bf(e, t) {
            return _a(4, 4, e, t);
        }
        function Sf(e, t) {
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
        function Ef(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, _a(4, 4, Sf.bind(null, t, e), l);
        }
        function Xr() {}
        function _f(e, t) {
            var l = je();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            return t !== null && Pr(t, n[1]) ? n[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function Tf(e, t) {
            var l = je();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            if (t !== null && Pr(t, n[1])) return n[0];
            if (n = e(), Jl) {
                sl(!0);
                try {
                    e();
                } finally{
                    sl(!1);
                }
            }
            return l.memoizedState = [
                n,
                t
            ], n;
        }
        function Zr(e, t, l) {
            return l === void 0 || (yl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Od(), oe.lanes |= e, Tl |= e, l);
        }
        function Rf(e, t, l, n) {
            return pt(l, t) ? l : xn.current !== null ? (e = Zr(e, l, n), pt(e, t) || (Ye = !0), e) : (yl & 42) === 0 ? (Ye = !0, e.memoizedState = l) : (e = Od(), oe.lanes |= e, Tl |= e, t);
        }
        function Af(e, t, l, n, a) {
            var r = K.p;
            K.p = r !== 0 && 8 > r ? r : 8;
            var d = z.T, y = {};
            z.T = y, Fr(e, !1, t, l);
            try {
                var S = a(), M = z.S;
                if (M !== null && M(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
                    var P = w0(S, n);
                    Ta(e, t, P, bt(e));
                } else Ta(e, t, n, bt(e));
            } catch (j) {
                Ta(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: j
                }, bt());
            } finally{
                K.p = r, z.T = d;
            }
        }
        function j0() {}
        function $r(e, t, l, n) {
            if (e.tag !== 5) throw Error(s(476));
            var a = Of(e).queue;
            Af(e, a, t, F, l === null ? j0 : function() {
                return Nf(e), l(n);
            });
        }
        function Of(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: F,
                baseState: F,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Jt,
                    lastRenderedState: F
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
                    lastRenderedReducer: Jt,
                    lastRenderedState: l
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Nf(e) {
            var t = Of(e).next.queue;
            Ta(e, t, {}, bt());
        }
        function Jr() {
            return et(La);
        }
        function xf() {
            return je().memoizedState;
        }
        function Mf() {
            return je().memoizedState;
        }
        function k0(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = bt();
                        e = pl(l);
                        var n = ml(t, e, l);
                        n !== null && (St(n, t, l), va(n, t, l)), t = {
                            cache: Or()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function H0(e, t, l) {
            var n = bt();
            l = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Lu(e) ? Df(t, l) : (l = yr(e, t, l, n), l !== null && (St(l, e, n), Bf(l, t, n)));
        }
        function Cf(e, t, l) {
            var n = bt();
            Ta(e, t, l, n);
        }
        function Ta(e, t, l, n) {
            var a = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Lu(e)) Df(t, a);
            else {
                var r = e.alternate;
                if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null)) try {
                    var d = t.lastRenderedState, y = r(d, l);
                    if (a.hasEagerState = !0, a.eagerState = y, pt(y, d)) return Ru(e, t, a, 0), Ne === null && Tu(), !1;
                } catch  {} finally{}
                if (l = yr(e, t, a, n), l !== null) return St(l, e, n), Bf(l, t, n), !0;
            }
            return !1;
        }
        function Fr(e, t, l, n) {
            if (n = {
                lane: 2,
                revertLane: Mc(),
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Lu(e)) {
                if (t) throw Error(s(479));
            } else t = yr(e, l, n, 2), t !== null && St(t, e, 2);
        }
        function Lu(e) {
            var t = e.alternate;
            return e === oe || t !== null && t === oe;
        }
        function Df(e, t) {
            Mn = Uu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function Bf(e, t, l) {
            if ((l & 4194048) !== 0) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, js(e, l);
            }
        }
        var Qu = {
            readContext: et,
            use: qu,
            useCallback: Ue,
            useContext: Ue,
            useEffect: Ue,
            useImperativeHandle: Ue,
            useLayoutEffect: Ue,
            useInsertionEffect: Ue,
            useMemo: Ue,
            useReducer: Ue,
            useRef: Ue,
            useState: Ue,
            useDebugValue: Ue,
            useDeferredValue: Ue,
            useTransition: Ue,
            useSyncExternalStore: Ue,
            useId: Ue,
            useHostTransitionStatus: Ue,
            useFormState: Ue,
            useActionState: Ue,
            useOptimistic: Ue,
            useMemoCache: Ue,
            useCacheRefresh: Ue
        }, wf = {
            readContext: et,
            use: qu,
            useCallback: function(e, t) {
                return rt().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: et,
            useEffect: yf,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, Hu(4194308, 4, Sf.bind(null, t, e), l);
            },
            useLayoutEffect: function(e, t) {
                return Hu(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                Hu(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var l = rt();
                t = t === void 0 ? null : t;
                var n = e();
                if (Jl) {
                    sl(!0);
                    try {
                        e();
                    } finally{
                        sl(!1);
                    }
                }
                return l.memoizedState = [
                    n,
                    t
                ], n;
            },
            useReducer: function(e, t, l) {
                var n = rt();
                if (l !== void 0) {
                    var a = l(t);
                    if (Jl) {
                        sl(!0);
                        try {
                            l(t);
                        } finally{
                            sl(!1);
                        }
                    }
                } else a = t;
                return n.memoizedState = n.baseState = a, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: a
                }, n.queue = e, e = e.dispatch = H0.bind(null, oe, e), [
                    n.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                var t = rt();
                return e = {
                    current: e
                }, t.memoizedState = e;
            },
            useState: function(e) {
                e = Gr(e);
                var t = e.queue, l = Cf.bind(null, oe, t);
                return t.dispatch = l, [
                    e.memoizedState,
                    l
                ];
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = rt();
                return Zr(l, e, t);
            },
            useTransition: function() {
                var e = Gr(!1);
                return e = Af.bind(null, oe, e.queue, !0, !1), rt().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, l) {
                var n = oe, a = rt();
                if (ge) {
                    if (l === void 0) throw Error(s(407));
                    l = l();
                } else {
                    if (l = t(), Ne === null) throw Error(s(349));
                    (me & 124) !== 0 || Io(n, t, l);
                }
                a.memoizedState = l;
                var r = {
                    value: l,
                    getSnapshot: t
                };
                return a.queue = r, yf(tf.bind(null, n, r, e), [
                    e
                ]), n.flags |= 2048, Dn(9, ku(), ef.bind(null, n, r, l, t), null), l;
            },
            useId: function() {
                var e = rt(), t = Ne.identifierPrefix;
                if (ge) {
                    var l = Xt, n = Vt;
                    l = (n & ~(1 << 32 - ht(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Pu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = z0++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Jr,
            useFormState: ff,
            useActionState: ff,
            useOptimistic: function(e) {
                var t = rt();
                t.memoizedState = t.baseState = e;
                var l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = l, t = Fr.bind(null, oe, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Qr,
            useCacheRefresh: function() {
                return rt().memoizedState = k0.bind(null, oe);
            }
        }, zf = {
            readContext: et,
            use: qu,
            useCallback: _f,
            useContext: et,
            useEffect: vf,
            useImperativeHandle: Ef,
            useInsertionEffect: gf,
            useLayoutEffect: bf,
            useMemo: Tf,
            useReducer: ju,
            useRef: mf,
            useState: function() {
                return ju(Jt);
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = je();
                return Rf(l, _e.memoizedState, e, t);
            },
            useTransition: function() {
                var e = ju(Jt)[0], t = je().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: Wo,
            useId: xf,
            useHostTransitionStatus: Jr,
            useFormState: df,
            useActionState: df,
            useOptimistic: function(e, t) {
                var l = je();
                return af(l, _e, e, t);
            },
            useMemoCache: Qr,
            useCacheRefresh: Mf
        }, L0 = {
            readContext: et,
            use: qu,
            useCallback: _f,
            useContext: et,
            useEffect: vf,
            useImperativeHandle: Ef,
            useInsertionEffect: gf,
            useLayoutEffect: bf,
            useMemo: Tf,
            useReducer: Yr,
            useRef: mf,
            useState: function() {
                return Yr(Jt);
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = je();
                return _e === null ? Zr(l, e, t) : Rf(l, _e.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Yr(Jt)[0], t = je().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: Wo,
            useId: xf,
            useHostTransitionStatus: Jr,
            useFormState: pf,
            useActionState: pf,
            useOptimistic: function(e, t) {
                var l = je();
                return _e !== null ? af(l, _e, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: Qr,
            useCacheRefresh: Mf
        }, Bn = null, Ra = 0;
        function Ku(e) {
            var t = Ra;
            return Ra += 1, Bn === null && (Bn = []), Yo(Bn, e, t);
        }
        function Aa(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Yu(e, t) {
            throw t.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Uf(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Pf(e) {
            function t(N, T) {
                if (e) {
                    var x = N.deletions;
                    x === null ? (N.deletions = [
                        T
                    ], N.flags |= 16) : x.push(T);
                }
            }
            function l(N, T) {
                if (!e) return null;
                for(; T !== null;)t(N, T), T = T.sibling;
                return null;
            }
            function n(N) {
                for(var T = new Map; N !== null;)N.key !== null ? T.set(N.key, N) : T.set(N.index, N), N = N.sibling;
                return T;
            }
            function a(N, T) {
                return N = Gt(N, T), N.index = 0, N.sibling = null, N;
            }
            function r(N, T, x) {
                return N.index = x, e ? (x = N.alternate, x !== null ? (x = x.index, x < T ? (N.flags |= 67108866, T) : x) : (N.flags |= 67108866, T)) : (N.flags |= 1048576, T);
            }
            function d(N) {
                return e && N.alternate === null && (N.flags |= 67108866), N;
            }
            function y(N, T, x, q) {
                return T === null || T.tag !== 6 ? (T = gr(x, N.mode, q), T.return = N, T) : (T = a(T, x), T.return = N, T);
            }
            function S(N, T, x, q) {
                var Z = x.type;
                return Z === O ? P(N, T, x.props.children, q, x.key) : T !== null && (T.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === se && Uf(Z) === T.type) ? (T = a(T, x.props), Aa(T, x), T.return = N, T) : (T = Ou(x.type, x.key, x.props, null, N.mode, q), Aa(T, x), T.return = N, T);
            }
            function M(N, T, x, q) {
                return T === null || T.tag !== 4 || T.stateNode.containerInfo !== x.containerInfo || T.stateNode.implementation !== x.implementation ? (T = br(x, N.mode, q), T.return = N, T) : (T = a(T, x.children || []), T.return = N, T);
            }
            function P(N, T, x, q, Z) {
                return T === null || T.tag !== 7 ? (T = Ql(x, N.mode, q, Z), T.return = N, T) : (T = a(T, x), T.return = N, T);
            }
            function j(N, T, x) {
                if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return T = gr("" + T, N.mode, x), T.return = N, T;
                if (typeof T == "object" && T !== null) {
                    switch(T.$$typeof){
                        case g:
                            return x = Ou(T.type, T.key, T.props, null, N.mode, x), Aa(x, T), x.return = N, x;
                        case R:
                            return T = br(T, N.mode, x), T.return = N, T;
                        case se:
                            var q = T._init;
                            return T = q(T._payload), j(N, T, x);
                    }
                    if (pe(T) || Qe(T)) return T = Ql(T, N.mode, x, null), T.return = N, T;
                    if (typeof T.then == "function") return j(N, Ku(T), x);
                    if (T.$$typeof === Q) return j(N, Cu(N, T), x);
                    Yu(N, T);
                }
                return null;
            }
            function D(N, T, x, q) {
                var Z = T !== null ? T.key : null;
                if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return Z !== null ? null : y(N, T, "" + x, q);
                if (typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case g:
                            return x.key === Z ? S(N, T, x, q) : null;
                        case R:
                            return x.key === Z ? M(N, T, x, q) : null;
                        case se:
                            return Z = x._init, x = Z(x._payload), D(N, T, x, q);
                    }
                    if (pe(x) || Qe(x)) return Z !== null ? null : P(N, T, x, q, null);
                    if (typeof x.then == "function") return D(N, T, Ku(x), q);
                    if (x.$$typeof === Q) return D(N, T, Cu(N, x), q);
                    Yu(N, x);
                }
                return null;
            }
            function B(N, T, x, q, Z) {
                if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return N = N.get(x) || null, y(T, N, "" + q, Z);
                if (typeof q == "object" && q !== null) {
                    switch(q.$$typeof){
                        case g:
                            return N = N.get(q.key === null ? x : q.key) || null, S(T, N, q, Z);
                        case R:
                            return N = N.get(q.key === null ? x : q.key) || null, M(T, N, q, Z);
                        case se:
                            var fe = q._init;
                            return q = fe(q._payload), B(N, T, x, q, Z);
                    }
                    if (pe(q) || Qe(q)) return N = N.get(x) || null, P(T, N, q, Z, null);
                    if (typeof q.then == "function") return B(N, T, x, Ku(q), Z);
                    if (q.$$typeof === Q) return B(N, T, x, Cu(T, q), Z);
                    Yu(T, q);
                }
                return null;
            }
            function le(N, T, x, q) {
                for(var Z = null, fe = null, J = T, ee = T = 0, Ve = null; J !== null && ee < x.length; ee++){
                    J.index > ee ? (Ve = J, J = null) : Ve = J.sibling;
                    var ve = D(N, J, x[ee], q);
                    if (ve === null) {
                        J === null && (J = Ve);
                        break;
                    }
                    e && J && ve.alternate === null && t(N, J), T = r(ve, T, ee), fe === null ? Z = ve : fe.sibling = ve, fe = ve, J = Ve;
                }
                if (ee === x.length) return l(N, J), ge && Yl(N, ee), Z;
                if (J === null) {
                    for(; ee < x.length; ee++)J = j(N, x[ee], q), J !== null && (T = r(J, T, ee), fe === null ? Z = J : fe.sibling = J, fe = J);
                    return ge && Yl(N, ee), Z;
                }
                for(J = n(J); ee < x.length; ee++)Ve = B(J, N, ee, x[ee], q), Ve !== null && (e && Ve.alternate !== null && J.delete(Ve.key === null ? ee : Ve.key), T = r(Ve, T, ee), fe === null ? Z = Ve : fe.sibling = Ve, fe = Ve);
                return e && J.forEach(function(Bl) {
                    return t(N, Bl);
                }), ge && Yl(N, ee), Z;
            }
            function I(N, T, x, q) {
                if (x == null) throw Error(s(151));
                for(var Z = null, fe = null, J = T, ee = T = 0, Ve = null, ve = x.next(); J !== null && !ve.done; ee++, ve = x.next()){
                    J.index > ee ? (Ve = J, J = null) : Ve = J.sibling;
                    var Bl = D(N, J, ve.value, q);
                    if (Bl === null) {
                        J === null && (J = Ve);
                        break;
                    }
                    e && J && Bl.alternate === null && t(N, J), T = r(Bl, T, ee), fe === null ? Z = Bl : fe.sibling = Bl, fe = Bl, J = Ve;
                }
                if (ve.done) return l(N, J), ge && Yl(N, ee), Z;
                if (J === null) {
                    for(; !ve.done; ee++, ve = x.next())ve = j(N, ve.value, q), ve !== null && (T = r(ve, T, ee), fe === null ? Z = ve : fe.sibling = ve, fe = ve);
                    return ge && Yl(N, ee), Z;
                }
                for(J = n(J); !ve.done; ee++, ve = x.next())ve = B(J, N, ee, ve.value, q), ve !== null && (e && ve.alternate !== null && J.delete(ve.key === null ? ee : ve.key), T = r(ve, T, ee), fe === null ? Z = ve : fe.sibling = ve, fe = ve);
                return e && J.forEach(function(Q1) {
                    return t(N, Q1);
                }), ge && Yl(N, ee), Z;
            }
            function Re(N, T, x, q) {
                if (typeof x == "object" && x !== null && x.type === O && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case g:
                            e: {
                                for(var Z = x.key; T !== null;){
                                    if (T.key === Z) {
                                        if (Z = x.type, Z === O) {
                                            if (T.tag === 7) {
                                                l(N, T.sibling), q = a(T, x.props.children), q.return = N, N = q;
                                                break e;
                                            }
                                        } else if (T.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === se && Uf(Z) === T.type) {
                                            l(N, T.sibling), q = a(T, x.props), Aa(q, x), q.return = N, N = q;
                                            break e;
                                        }
                                        l(N, T);
                                        break;
                                    } else t(N, T);
                                    T = T.sibling;
                                }
                                x.type === O ? (q = Ql(x.props.children, N.mode, q, x.key), q.return = N, N = q) : (q = Ou(x.type, x.key, x.props, null, N.mode, q), Aa(q, x), q.return = N, N = q);
                            }
                            return d(N);
                        case R:
                            e: {
                                for(Z = x.key; T !== null;){
                                    if (T.key === Z) if (T.tag === 4 && T.stateNode.containerInfo === x.containerInfo && T.stateNode.implementation === x.implementation) {
                                        l(N, T.sibling), q = a(T, x.children || []), q.return = N, N = q;
                                        break e;
                                    } else {
                                        l(N, T);
                                        break;
                                    }
                                    else t(N, T);
                                    T = T.sibling;
                                }
                                q = br(x, N.mode, q), q.return = N, N = q;
                            }
                            return d(N);
                        case se:
                            return Z = x._init, x = Z(x._payload), Re(N, T, x, q);
                    }
                    if (pe(x)) return le(N, T, x, q);
                    if (Qe(x)) {
                        if (Z = Qe(x), typeof Z != "function") throw Error(s(150));
                        return x = Z.call(x), I(N, T, x, q);
                    }
                    if (typeof x.then == "function") return Re(N, T, Ku(x), q);
                    if (x.$$typeof === Q) return Re(N, T, Cu(N, x), q);
                    Yu(N, x);
                }
                return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, T !== null && T.tag === 6 ? (l(N, T.sibling), q = a(T, x), q.return = N, N = q) : (l(N, T), q = gr(x, N.mode, q), q.return = N, N = q), d(N)) : l(N, T);
            }
            return function(N, T, x, q) {
                try {
                    Ra = 0;
                    var Z = Re(N, T, x, q);
                    return Bn = null, Z;
                } catch (J) {
                    if (J === ma || J === Bu) throw J;
                    var fe = mt(29, J, null, N.mode);
                    return fe.lanes = q, fe.return = N, fe;
                } finally{}
            };
        }
        var wn = Pf(!0), qf = Pf(!1), Nt = L(null), qt = null;
        function vl(e) {
            var t = e.alternate;
            V(He, He.current & 1), V(Nt, e), qt === null && (t === null || xn.current !== null || t.memoizedState !== null) && (qt = e);
        }
        function jf(e) {
            if (e.tag === 22) {
                if (V(He, He.current), V(Nt, e), qt === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (qt = e);
                }
            } else gl();
        }
        function gl() {
            V(He, He.current), V(Nt, Nt.current);
        }
        function Ft(e) {
            X(Nt), qt === e && (qt = null), X(He);
        }
        var He = L(0);
        function Gu(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var l = t.memoizedState;
                    if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || Lc(l))) return t;
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
        function Wr(e, t, l, n) {
            t = e.memoizedState, l = l(n, t), l = l == null ? t : b({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var Ir = {
            enqueueSetState: function(e, t, l) {
                e = e._reactInternals;
                var n = bt(), a = pl(n);
                a.payload = t, l != null && (a.callback = l), t = ml(e, a, n), t !== null && (St(t, e, n), va(t, e, n));
            },
            enqueueReplaceState: function(e, t, l) {
                e = e._reactInternals;
                var n = bt(), a = pl(n);
                a.tag = 1, a.payload = t, l != null && (a.callback = l), t = ml(e, a, n), t !== null && (St(t, e, n), va(t, e, n));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var l = bt(), n = pl(l);
                n.tag = 2, t != null && (n.callback = t), t = ml(e, n, l), t !== null && (St(t, e, l), va(t, e, l));
            }
        };
        function kf(e, t, l, n, a, r, d) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, r, d) : t.prototype && t.prototype.isPureReactComponent ? !ra(l, n) || !ra(a, r) : !0;
        }
        function Hf(e, t, l, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Ir.enqueueReplaceState(t, t.state, null);
        }
        function Fl(e, t) {
            var l = t;
            if ("ref" in t) {
                l = {};
                for(var n in t)n !== "ref" && (l[n] = t[n]);
            }
            if (e = e.defaultProps) {
                l === t && (l = b({}, l));
                for(var a in e)l[a] === void 0 && (l[a] = e[a]);
            }
            return l;
        }
        var Vu = typeof reportError == "function" ? reportError : function(e) {
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
        function Lf(e) {
            Vu(e);
        }
        function Qf(e) {
            console.error(e);
        }
        function Kf(e) {
            Vu(e);
        }
        function Xu(e, t) {
            try {
                var l = e.onUncaughtError;
                l(t.value, {
                    componentStack: t.stack
                });
            } catch (n) {
                setTimeout(function() {
                    throw n;
                });
            }
        }
        function Yf(e, t, l) {
            try {
                var n = e.onCaughtError;
                n(l.value, {
                    componentStack: l.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                });
            } catch (a) {
                setTimeout(function() {
                    throw a;
                });
            }
        }
        function ec(e, t, l) {
            return l = pl(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Xu(e, t);
            }, l;
        }
        function Gf(e) {
            return e = pl(e), e.tag = 3, e;
        }
        function Vf(e, t, l, n) {
            var a = l.type.getDerivedStateFromError;
            if (typeof a == "function") {
                var r = n.value;
                e.payload = function() {
                    return a(r);
                }, e.callback = function() {
                    Yf(t, l, n);
                };
            }
            var d = l.stateNode;
            d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
                Yf(t, l, n), typeof a != "function" && (Rl === null ? Rl = new Set([
                    this
                ]) : Rl.add(this));
                var y = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: y !== null ? y : ""
                });
            });
        }
        function Q0(e, t, l, n, a) {
            if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (t = l.alternate, t !== null && da(t, l, a, !0), l = Nt.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return qt === null ? Rc() : l.alternate === null && we === 0 && (we = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Mr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
                                n
                            ]) : t.add(n), Oc(e, n, a)), !1;
                        case 22:
                            return l.flags |= 65536, n === Mr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    n
                                ])
                            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([
                                n
                            ]) : l.add(n)), Oc(e, n, a)), !1;
                    }
                    throw Error(s(435, l.tag));
                }
                return Oc(e, n, a), Rc(), !1;
            }
            if (ge) return t = Nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== _r && (e = Error(s(422), {
                cause: n
            }), fa(Tt(e, l)))) : (n !== _r && (t = Error(s(423), {
                cause: n
            }), fa(Tt(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = Tt(n, l), a = ec(e.stateNode, n, a), Br(e, a), we !== 4 && (we = 2)), !1;
            var r = Error(s(520), {
                cause: n
            });
            if (r = Tt(r, l), Ba === null ? Ba = [
                r
            ] : Ba.push(r), we !== 4 && (we = 2), t === null) return !0;
            n = Tt(n, l), l = t;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, e = a & -a, l.lanes |= e, e = ec(l.stateNode, n, e), Br(l, e), !1;
                    case 1:
                        if (t = l.type, r = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Rl === null || !Rl.has(r)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = Gf(a), Vf(a, e, l, n), Br(l, a), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Xf = Error(s(461)), Ye = !1;
        function Ze(e, t, l, n) {
            t.child = e === null ? qf(t, null, l, n) : wn(t, e.child, l, n);
        }
        function Zf(e, t, l, n, a) {
            l = l.render;
            var r = t.ref;
            if ("ref" in n) {
                var d = {};
                for(var y in n)y !== "ref" && (d[y] = n[y]);
            } else d = n;
            return Zl(t), n = qr(e, t, l, d, r, a), y = jr(), e !== null && !Ye ? (kr(e, t, a), Wt(e, t, a)) : (ge && y && Sr(t), t.flags |= 1, Ze(e, t, n, a), t.child);
        }
        function $f(e, t, l, n, a) {
            if (e === null) {
                var r = l.type;
                return typeof r == "function" && !vr(r) && r.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = r, Jf(e, t, r, n, a)) : (e = Ou(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (r = e.child, !cc(e, a)) {
                var d = r.memoizedProps;
                if (l = l.compare, l = l !== null ? l : ra, l(d, n) && e.ref === t.ref) return Wt(e, t, a);
            }
            return t.flags |= 1, e = Gt(r, n), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Jf(e, t, l, n, a) {
            if (e !== null) {
                var r = e.memoizedProps;
                if (ra(r, n) && e.ref === t.ref) if (Ye = !1, t.pendingProps = n = r, cc(e, a)) (e.flags & 131072) !== 0 && (Ye = !0);
                else return t.lanes = e.lanes, Wt(e, t, a);
            }
            return tc(e, t, l, n, a);
        }
        function Ff(e, t, l) {
            var n = t.pendingProps, a = n.children, r = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (n = r !== null ? r.baseLanes | l : l, e !== null) {
                        for(a = t.child = e.child, r = 0; a !== null;)r = r | a.lanes | a.childLanes, a = a.sibling;
                        t.childLanes = r & ~n;
                    } else t.childLanes = 0, t.child = null;
                    return Wf(e, t, n, l);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && Du(t, r !== null ? r.cachePool : null), r !== null ? $o(t, r) : zr(), jf(t);
                else return t.lanes = t.childLanes = 536870912, Wf(e, t, r !== null ? r.baseLanes | l : l, l);
            } else r !== null ? (Du(t, r.cachePool), $o(t, r), gl(), t.memoizedState = null) : (e !== null && Du(t, null), zr(), gl());
            return Ze(e, t, a, l), t.child;
        }
        function Wf(e, t, l, n) {
            var a = xr();
            return a = a === null ? null : {
                parent: ke._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: a
            }, e !== null && Du(t, null), zr(), jf(t), e !== null && da(e, t, n, !0), null;
        }
        function Zu(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(s(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function tc(e, t, l, n, a) {
            return Zl(t), l = qr(e, t, l, n, void 0, a), n = jr(), e !== null && !Ye ? (kr(e, t, a), Wt(e, t, a)) : (ge && n && Sr(t), t.flags |= 1, Ze(e, t, l, a), t.child);
        }
        function If(e, t, l, n, a, r) {
            return Zl(t), t.updateQueue = null, l = Fo(t, n, l, a), Jo(e), n = jr(), e !== null && !Ye ? (kr(e, t, r), Wt(e, t, r)) : (ge && n && Sr(t), t.flags |= 1, Ze(e, t, l, r), t.child);
        }
        function ed(e, t, l, n, a) {
            if (Zl(t), t.stateNode === null) {
                var r = Tn, d = l.contextType;
                typeof d == "object" && d !== null && (r = et(d)), r = new l(n, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ir, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = n, r.state = t.memoizedState, r.refs = {}, Cr(t), d = l.contextType, r.context = typeof d == "object" && d !== null ? et(d) : Tn, r.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && (Wr(t, l, d, n), r.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (d = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), d !== r.state && Ir.enqueueReplaceState(r, r.state, null), ba(t, n, r, a), ga(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
            } else if (e === null) {
                r = t.stateNode;
                var y = t.memoizedProps, S = Fl(l, y);
                r.props = S;
                var M = r.context, P = l.contextType;
                d = Tn, typeof P == "object" && P !== null && (d = et(P));
                var j = l.getDerivedStateFromProps;
                P = typeof j == "function" || typeof r.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, P || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y || M !== d) && Hf(t, r, n, d), hl = !1;
                var D = t.memoizedState;
                r.state = D, ba(t, n, r, a), ga(), M = t.memoizedState, y || D !== M || hl ? (typeof j == "function" && (Wr(t, l, j, n), M = t.memoizedState), (S = hl || kf(t, l, S, n, D, M, d)) ? (P || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = M), r.props = n, r.state = M, r.context = d, n = S) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
            } else {
                r = t.stateNode, Dr(e, t), d = t.memoizedProps, P = Fl(l, d), r.props = P, j = t.pendingProps, D = r.context, M = l.contextType, S = Tn, typeof M == "object" && M !== null && (S = et(M)), y = l.getDerivedStateFromProps, (M = typeof y == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (d !== j || D !== S) && Hf(t, r, n, S), hl = !1, D = t.memoizedState, r.state = D, ba(t, n, r, a), ga();
                var B = t.memoizedState;
                d !== j || D !== B || hl || e !== null && e.dependencies !== null && Mu(e.dependencies) ? (typeof y == "function" && (Wr(t, l, y, n), B = t.memoizedState), (P = hl || kf(t, l, P, n, D, B, S) || e !== null && e.dependencies !== null && Mu(e.dependencies)) ? (M || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(n, B, S), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(n, B, S)), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = B), r.props = n, r.state = B, r.context = S, n = P) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), n = !1);
            }
            return r = n, Zu(e, t), n = (t.flags & 128) !== 0, r || n ? (r = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && n ? (t.child = wn(t, e.child, null, a), t.child = wn(t, null, l, a)) : Ze(e, t, l, a), t.memoizedState = r.state, e = t.child) : e = Wt(e, t, a), e;
        }
        function td(e, t, l, n) {
            return oa(), t.flags |= 256, Ze(e, t, l, n), t.child;
        }
        var lc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function nc(e) {
            return {
                baseLanes: e,
                cachePool: Lo()
            };
        }
        function ac(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= xt), e;
        }
        function ld(e, t, l) {
            var n = t.pendingProps, a = !1, r = (t.flags & 128) !== 0, d;
            if ((d = r) || (d = e !== null && e.memoizedState === null ? !1 : (He.current & 2) !== 0), d && (a = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (ge) {
                    if (a ? vl(t) : gl(), ge) {
                        var y = Be, S;
                        if (S = y) {
                            e: {
                                for(S = y, y = Pt; S.nodeType !== 8;){
                                    if (!y) {
                                        y = null;
                                        break e;
                                    }
                                    if (S = wt(S.nextSibling), S === null) {
                                        y = null;
                                        break e;
                                    }
                                }
                                y = S;
                            }
                            y !== null ? (t.memoizedState = {
                                dehydrated: y,
                                treeContext: Kl !== null ? {
                                    id: Vt,
                                    overflow: Xt
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, S = mt(18, null, null, 0), S.stateNode = y, S.return = t, t.child = S, nt = t, Be = null, S = !0) : S = !1;
                        }
                        S || Vl(t);
                    }
                    if (y = t.memoizedState, y !== null && (y = y.dehydrated, y !== null)) return Lc(y) ? t.lanes = 32 : t.lanes = 536870912, null;
                    Ft(t);
                }
                return y = n.children, n = n.fallback, a ? (gl(), a = t.mode, y = $u({
                    mode: "hidden",
                    children: y
                }, a), n = Ql(n, a, l, null), y.return = t, n.return = t, y.sibling = n, t.child = y, a = t.child, a.memoizedState = nc(l), a.childLanes = ac(e, d, l), t.memoizedState = lc, n) : (vl(t), uc(t, y));
            }
            if (S = e.memoizedState, S !== null && (y = S.dehydrated, y !== null)) {
                if (r) t.flags & 256 ? (vl(t), t.flags &= -257, t = ic(e, t, l)) : t.memoizedState !== null ? (gl(), t.child = e.child, t.flags |= 128, t = null) : (gl(), a = n.fallback, y = t.mode, n = $u({
                    mode: "visible",
                    children: n.children
                }, y), a = Ql(a, y, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, wn(t, e.child, null, l), n = t.child, n.memoizedState = nc(l), n.childLanes = ac(e, d, l), t.memoizedState = lc, t = a);
                else if (vl(t), Lc(y)) {
                    if (d = y.nextSibling && y.nextSibling.dataset, d) var M = d.dgst;
                    d = M, n = Error(s(419)), n.stack = "", n.digest = d, fa({
                        value: n,
                        source: null,
                        stack: null
                    }), t = ic(e, t, l);
                } else if (Ye || da(e, t, l, !1), d = (l & e.childLanes) !== 0, Ye || d) {
                    if (d = Ne, d !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : Qi(n), n = (n & (d.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== S.retryLane)) throw S.retryLane = n, _n(e, n), St(d, e, n), Xf;
                    y.data === "$?" || Rc(), t = ic(e, t, l);
                } else y.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Be = wt(y.nextSibling), nt = t, ge = !0, Gl = null, Pt = !1, e !== null && (At[Ot++] = Vt, At[Ot++] = Xt, At[Ot++] = Kl, Vt = e.id, Xt = e.overflow, Kl = t), t = uc(t, n.children), t.flags |= 4096);
                return t;
            }
            return a ? (gl(), a = n.fallback, y = t.mode, S = e.child, M = S.sibling, n = Gt(S, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = S.subtreeFlags & 65011712, M !== null ? a = Gt(M, a) : (a = Ql(a, y, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, y = e.child.memoizedState, y === null ? y = nc(l) : (S = y.cachePool, S !== null ? (M = ke._currentValue, S = S.parent !== M ? {
                parent: M,
                pool: M
            } : S) : S = Lo(), y = {
                baseLanes: y.baseLanes | l,
                cachePool: S
            }), a.memoizedState = y, a.childLanes = ac(e, d, l), t.memoizedState = lc, n) : (vl(t), l = e.child, e = l.sibling, l = Gt(l, {
                mode: "visible",
                children: n.children
            }), l.return = t, l.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [
                e
            ], t.flags |= 16) : d.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function uc(e, t) {
            return t = $u({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function $u(e, t) {
            return e = mt(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function ic(e, t, l) {
            return wn(t, e.child, null, l), e = uc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function nd(e, t, l) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), Rr(e.return, t, l);
        }
        function rc(e, t, l, n, a) {
            var r = e.memoizedState;
            r === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: l,
                tailMode: a
            } : (r.isBackwards = t, r.rendering = null, r.renderingStartTime = 0, r.last = n, r.tail = l, r.tailMode = a);
        }
        function ad(e, t, l) {
            var n = t.pendingProps, a = n.revealOrder, r = n.tail;
            if (Ze(e, t, n.children, l), n = He.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && nd(e, l, t);
                    else if (e.tag === 19) nd(e, l, t);
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
                n &= 1;
            }
            switch(V(He, n), a){
                case "forwards":
                    for(l = t.child, a = null; l !== null;)e = l.alternate, e !== null && Gu(e) === null && (a = l), l = l.sibling;
                    l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), rc(t, !1, a, l, r);
                    break;
                case "backwards":
                    for(l = null, a = t.child, t.child = null; a !== null;){
                        if (e = a.alternate, e !== null && Gu(e) === null) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = l, l = a, a = e;
                    }
                    rc(t, !0, l, null, r);
                    break;
                case "together":
                    rc(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function Wt(e, t, l) {
            if (e !== null && (t.dependencies = e.dependencies), Tl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
                if (da(e, t, l, !1), (l & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(s(153));
            if (t.child !== null) {
                for(e = t.child, l = Gt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = Gt(e, e.pendingProps), l.return = t;
                l.sibling = null;
            }
            return t.child;
        }
        function cc(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Mu(e)));
        }
        function K0(e, t, l) {
            switch(t.tag){
                case 3:
                    xe(t, t.stateNode.containerInfo), dl(t, ke, e.memoizedState.cache), oa();
                    break;
                case 27:
                case 5:
                    qi(t);
                    break;
                case 4:
                    xe(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    dl(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var n = t.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (vl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? ld(e, t, l) : (vl(t), e = Wt(e, t, l), e !== null ? e.sibling : null);
                    vl(t);
                    break;
                case 19:
                    var a = (e.flags & 128) !== 0;
                    if (n = (l & t.childLanes) !== 0, n || (da(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                        if (n) return ad(e, t, l);
                        t.flags |= 128;
                    }
                    if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), V(He, He.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Ff(e, t, l);
                case 24:
                    dl(t, ke, e.memoizedState.cache);
            }
            return Wt(e, t, l);
        }
        function ud(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ye = !0;
            else {
                if (!cc(e, l) && (t.flags & 128) === 0) return Ye = !1, K0(e, t, l);
                Ye = (e.flags & 131072) !== 0;
            }
            else Ye = !1, ge && (t.flags & 1048576) !== 0 && zo(t, xu, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var n = t.elementType, a = n._init;
                        if (n = a(n._payload), t.type = n, typeof n == "function") vr(n) ? (e = Fl(n, e), t.tag = 1, t = ed(null, t, n, e, l)) : (t.tag = 0, t = tc(null, t, n, e, l));
                        else {
                            if (n != null) {
                                if (a = n.$$typeof, a === G) {
                                    t.tag = 11, t = Zf(null, t, n, e, l);
                                    break e;
                                } else if (a === te) {
                                    t.tag = 14, t = $f(null, t, n, e, l);
                                    break e;
                                }
                            }
                            throw t = be(n) || n, Error(s(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return tc(e, t, t.type, t.pendingProps, l);
                case 1:
                    return n = t.type, a = Fl(n, t.pendingProps), ed(e, t, n, a, l);
                case 3:
                    e: {
                        if (xe(t, t.stateNode.containerInfo), e === null) throw Error(s(387));
                        n = t.pendingProps;
                        var r = t.memoizedState;
                        a = r.element, Dr(e, t), ba(t, n, null, l);
                        var d = t.memoizedState;
                        if (n = d.cache, dl(t, ke, n), n !== r.cache && Ar(t, [
                            ke
                        ], l, !0), ga(), n = d.element, r.isDehydrated) if (r = {
                            element: n,
                            isDehydrated: !1,
                            cache: d.cache
                        }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
                            t = td(e, t, n, l);
                            break e;
                        } else if (n !== a) {
                            a = Tt(Error(s(424)), t), fa(a), t = td(e, t, n, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(Be = wt(e.firstChild), nt = t, ge = !0, Gl = null, Pt = !0, l = qf(t, null, n, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (oa(), n === a) {
                                t = Wt(e, t, l);
                                break e;
                            }
                            Ze(e, t, n, l);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Zu(e, t), e === null ? (l = sh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ge || (l = t.type, e = t.pendingProps, n = si(ae.current).createElement(l), n[Ie] = t, n[ut] = e, Je(n, l, e), Ke(n), t.stateNode = n) : t.memoizedState = sh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return qi(t), e === null && ge && (n = t.stateNode = ih(t.type, t.pendingProps, ae.current), nt = t, Pt = !0, a = Be, Nl(t.type) ? (Qc = a, Be = wt(n.firstChild)) : Be = a), Ze(e, t, t.pendingProps.children, l), Zu(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && ge && ((a = n = Be) && (n = v1(n, t.type, t.pendingProps, Pt), n !== null ? (t.stateNode = n, nt = t, Be = wt(n.firstChild), Pt = !1, a = !0) : a = !1), a || Vl(t)), qi(t), a = t.type, r = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = r.children, jc(a, r) ? n = null : d !== null && jc(a, d) && (t.flags |= 32), t.memoizedState !== null && (a = qr(e, t, U0, null, null, l), La._currentValue = a), Zu(e, t), Ze(e, t, n, l), t.child;
                case 6:
                    return e === null && ge && ((e = l = Be) && (l = g1(l, t.pendingProps, Pt), l !== null ? (t.stateNode = l, nt = t, Be = null, e = !0) : e = !1), e || Vl(t)), null;
                case 13:
                    return ld(e, t, l);
                case 4:
                    return xe(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = wn(t, null, n, l) : Ze(e, t, n, l), t.child;
                case 11:
                    return Zf(e, t, t.type, t.pendingProps, l);
                case 7:
                    return Ze(e, t, t.pendingProps, l), t.child;
                case 8:
                    return Ze(e, t, t.pendingProps.children, l), t.child;
                case 12:
                    return Ze(e, t, t.pendingProps.children, l), t.child;
                case 10:
                    return n = t.pendingProps, dl(t, t.type, n.value), Ze(e, t, n.children, l), t.child;
                case 9:
                    return a = t.type._context, n = t.pendingProps.children, Zl(t), a = et(a), n = n(a), t.flags |= 1, Ze(e, t, n, l), t.child;
                case 14:
                    return $f(e, t, t.type, t.pendingProps, l);
                case 15:
                    return Jf(e, t, t.type, t.pendingProps, l);
                case 19:
                    return ad(e, t, l);
                case 31:
                    return n = t.pendingProps, l = t.mode, n = {
                        mode: n.mode,
                        children: n.children
                    }, e === null ? (l = $u(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Gt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return Ff(e, t, l);
                case 24:
                    return Zl(t), n = et(ke), e === null ? (a = xr(), a === null && (a = Ne, r = Or(), a.pooledCache = r, r.refCount++, r !== null && (a.pooledCacheLanes |= l), a = r), t.memoizedState = {
                        parent: n,
                        cache: a
                    }, Cr(t), dl(t, ke, a)) : ((e.lanes & l) !== 0 && (Dr(e, t), ba(t, null, null, l), ga()), a = e.memoizedState, r = t.memoizedState, a.parent !== n ? (a = {
                        parent: n,
                        cache: n
                    }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), dl(t, ke, n)) : (n = r.cache, dl(t, ke, n), n !== a.cache && Ar(t, [
                        ke
                    ], l, !0))), Ze(e, t, t.pendingProps.children, l), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(s(156, t.tag));
        }
        function It(e) {
            e.flags |= 4;
        }
        function id(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !ph(t)) {
                if (t = Nt.current, t !== null && ((me & 4194048) === me ? qt !== null : (me & 62914560) !== me && (me & 536870912) === 0 || t !== qt)) throw ya = Mr, Qo;
                e.flags |= 8192;
            }
        }
        function Ju(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ps() : 536870912, e.lanes |= t, qn |= t);
        }
        function Oa(e, t) {
            if (!ge) switch(e.tailMode){
                case "hidden":
                    t = e.tail;
                    for(var l = null; t !== null;)t.alternate !== null && (l = t), t = t.sibling;
                    l === null ? e.tail = null : l.sibling = null;
                    break;
                case "collapsed":
                    l = e.tail;
                    for(var n = null; l !== null;)l.alternate !== null && (n = l), l = l.sibling;
                    n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
            }
        }
        function Ce(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
            if (t) for(var a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
            else for(a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
            return e.subtreeFlags |= n, e.childLanes = l, t;
        }
        function Y0(e, t, l) {
            var n = t.pendingProps;
            switch(Er(t), t.tag){
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
                    return Ce(t), null;
                case 1:
                    return Ce(t), null;
                case 3:
                    return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), $t(ke), cl(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (sa(t) ? It(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, qo())), Ce(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (It(t), l !== null ? (Ce(t), id(t, l)) : (Ce(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (It(t), Ce(t), id(t, l)) : (Ce(t), t.flags &= -16777217) : (e.memoizedProps !== n && It(t), Ce(t), t.flags &= -16777217), null;
                case 27:
                    ru(t), l = ae.current;
                    var a = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== n && It(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(s(166));
                            return Ce(t), null;
                        }
                        e = W.current, sa(t) ? Uo(t) : (e = ih(a, n, l), t.stateNode = e, It(t));
                    }
                    return Ce(t), null;
                case 5:
                    if (ru(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && It(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(s(166));
                            return Ce(t), null;
                        }
                        if (e = W.current, sa(t)) Uo(t);
                        else {
                            switch(a = si(ae.current), e){
                                case 1:
                                    e = a.createElementNS("http://www.w3.org/2000/svg", l);
                                    break;
                                case 2:
                                    e = a.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                    break;
                                default:
                                    switch(l){
                                        case "svg":
                                            e = a.createElementNS("http://www.w3.org/2000/svg", l);
                                            break;
                                        case "math":
                                            e = a.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                            break;
                                        case "script":
                                            e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                            break;
                                        case "select":
                                            e = typeof n.is == "string" ? a.createElement("select", {
                                                is: n.is
                                            }) : a.createElement("select"), n.multiple ? e.multiple = !0 : n.size && (e.size = n.size);
                                            break;
                                        default:
                                            e = typeof n.is == "string" ? a.createElement(l, {
                                                is: n.is
                                            }) : a.createElement(l);
                                    }
                            }
                            e[Ie] = t, e[ut] = n;
                            e: for(a = t.child; a !== null;){
                                if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
                                else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                                    a.child.return = a, a = a.child;
                                    continue;
                                }
                                if (a === t) break e;
                                for(; a.sibling === null;){
                                    if (a.return === null || a.return === t) break e;
                                    a = a.return;
                                }
                                a.sibling.return = a.return, a = a.sibling;
                            }
                            t.stateNode = e;
                            e: switch(Je(e, l, n), l){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    e = !!n.autoFocus;
                                    break e;
                                case "img":
                                    e = !0;
                                    break e;
                                default:
                                    e = !1;
                            }
                            e && It(t);
                        }
                    }
                    return Ce(t), t.flags &= -16777217, null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== n && It(t);
                    else {
                        if (typeof n != "string" && t.stateNode === null) throw Error(s(166));
                        if (e = ae.current, sa(t)) {
                            if (e = t.stateNode, l = t.memoizedProps, n = null, a = nt, a !== null) switch(a.tag){
                                case 27:
                                case 5:
                                    n = a.memoizedProps;
                            }
                            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Id(e.nodeValue, l)), e || Vl(t);
                        } else e = si(e).createTextNode(n), e[Ie] = t, t.stateNode = e;
                    }
                    return Ce(t), null;
                case 13:
                    if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (a = sa(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!a) throw Error(s(318));
                                if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
                                a[Ie] = t;
                            } else oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Ce(t), a = !1;
                        } else a = qo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                        if (!a) return t.flags & 256 ? (Ft(t), t) : (Ft(t), null);
                    }
                    if (Ft(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                        n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                        var r = null;
                        n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== a && (n.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), Ju(t, t.updateQueue), Ce(t), null;
                case 4:
                    return cl(), e === null && wc(t.stateNode.containerInfo), Ce(t), null;
                case 10:
                    return $t(t.type), Ce(t), null;
                case 19:
                    if (X(He), a = t.memoizedState, a === null) return Ce(t), null;
                    if (n = (t.flags & 128) !== 0, r = a.rendering, r === null) if (n) Oa(a, !1);
                    else {
                        if (we !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (r = Gu(e), r !== null) {
                                for(t.flags |= 128, Oa(a, !1), e = r.updateQueue, t.updateQueue = e, Ju(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)wo(l, e), l = l.sibling;
                                return V(He, He.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && Ut() > Iu && (t.flags |= 128, n = !0, Oa(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!n) if (e = Gu(r), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Ju(t, e), Oa(a, !0), a.tail === null && a.tailMode === "hidden" && !r.alternate && !ge) return Ce(t), null;
                        } else 2 * Ut() - a.renderingStartTime > Iu && l !== 536870912 && (t.flags |= 128, n = !0, Oa(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (r.sibling = t.child, t.child = r) : (e = a.last, e !== null ? e.sibling = r : t.child = r, a.last = r);
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ut(), t.sibling = null, e = He.current, V(He, n ? e & 1 | 2 : e & 1), t) : (Ce(t), null);
                case 22:
                case 23:
                    return Ft(t), Ur(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), l = t.updateQueue, l !== null && Ju(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && X($l), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), $t(ke), Ce(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(s(156, t.tag));
        }
        function G0(e, t) {
            switch(Er(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return $t(ke), cl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return ru(t), null;
                case 13:
                    if (Ft(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(s(340));
                        oa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return X(He), null;
                case 4:
                    return cl(), null;
                case 10:
                    return $t(t.type), null;
                case 22:
                case 23:
                    return Ft(t), Ur(), e !== null && X($l), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return $t(ke), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function rd(e, t) {
            switch(Er(t), t.tag){
                case 3:
                    $t(ke), cl();
                    break;
                case 26:
                case 27:
                case 5:
                    ru(t);
                    break;
                case 4:
                    cl();
                    break;
                case 13:
                    Ft(t);
                    break;
                case 19:
                    X(He);
                    break;
                case 10:
                    $t(t.type);
                    break;
                case 22:
                case 23:
                    Ft(t), Ur(), e !== null && X($l);
                    break;
                case 24:
                    $t(ke);
            }
        }
        function Na(e, t) {
            try {
                var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
                if (n !== null) {
                    var a = n.next;
                    l = a;
                    do {
                        if ((l.tag & e) === e) {
                            n = void 0;
                            var r = l.create, d = l.inst;
                            n = r(), d.destroy = n;
                        }
                        l = l.next;
                    }while (l !== a);
                }
            } catch (y) {
                Oe(t, t.return, y);
            }
        }
        function bl(e, t, l) {
            try {
                var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
                if (a !== null) {
                    var r = a.next;
                    n = r;
                    do {
                        if ((n.tag & e) === e) {
                            var d = n.inst, y = d.destroy;
                            if (y !== void 0) {
                                d.destroy = void 0, a = t;
                                var S = l, M = y;
                                try {
                                    M();
                                } catch (P) {
                                    Oe(a, S, P);
                                }
                            }
                        }
                        n = n.next;
                    }while (n !== r);
                }
            } catch (P) {
                Oe(t, t.return, P);
            }
        }
        function cd(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    Zo(t, l);
                } catch (n) {
                    Oe(e, e.return, n);
                }
            }
        }
        function sd(e, t, l) {
            l.props = Fl(e.type, e.memoizedProps), l.state = e.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (n) {
                Oe(e, t, n);
            }
        }
        function xa(e, t) {
            try {
                var l = e.ref;
                if (l !== null) {
                    switch(e.tag){
                        case 26:
                        case 27:
                        case 5:
                            var n = e.stateNode;
                            break;
                        case 30:
                            n = e.stateNode;
                            break;
                        default:
                            n = e.stateNode;
                    }
                    typeof l == "function" ? e.refCleanup = l(n) : l.current = n;
                }
            } catch (a) {
                Oe(e, t, a);
            }
        }
        function jt(e, t) {
            var l = e.ref, n = e.refCleanup;
            if (l !== null) if (typeof n == "function") try {
                n();
            } catch (a) {
                Oe(e, t, a);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof l == "function") try {
                l(null);
            } catch (a) {
                Oe(e, t, a);
            }
            else l.current = null;
        }
        function od(e) {
            var t = e.type, l = e.memoizedProps, n = e.stateNode;
            try {
                e: switch(t){
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l.autoFocus && n.focus();
                        break e;
                    case "img":
                        l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
                }
            } catch (a) {
                Oe(e, e.return, a);
            }
        }
        function sc(e, t, l) {
            try {
                var n = e.stateNode;
                d1(n, e.type, l, t), n[ut] = t;
            } catch (a) {
                Oe(e, e.return, a);
            }
        }
        function fd(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Nl(e.type) || e.tag === 4;
        }
        function oc(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || fd(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Nl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function fc(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ci));
            else if (n !== 4 && (n === 27 && Nl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(fc(e, t, l), e = e.sibling; e !== null;)fc(e, t, l), e = e.sibling;
        }
        function Fu(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (n !== 4 && (n === 27 && Nl(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(Fu(e, t, l), e = e.sibling; e !== null;)Fu(e, t, l), e = e.sibling;
        }
        function dd(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var n = e.type, a = t.attributes; a.length;)t.removeAttributeNode(a[0]);
                Je(t, n, l), t[Ie] = e, t[ut] = l;
            } catch (r) {
                Oe(e, e.return, r);
            }
        }
        var el = !1, Pe = !1, dc = !1, hd = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
        function V0(e, t) {
            if (e = e.containerInfo, Pc = mi, e = To(e), or(e)) {
                if ("selectionStart" in e) var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var n = l.getSelection && l.getSelection();
                    if (n && n.rangeCount !== 0) {
                        l = n.anchorNode;
                        var a = n.anchorOffset, r = n.focusNode;
                        n = n.focusOffset;
                        try {
                            l.nodeType, r.nodeType;
                        } catch  {
                            l = null;
                            break e;
                        }
                        var d = 0, y = -1, S = -1, M = 0, P = 0, j = e, D = null;
                        t: for(;;){
                            for(var B; j !== l || a !== 0 && j.nodeType !== 3 || (y = d + a), j !== r || n !== 0 && j.nodeType !== 3 || (S = d + n), j.nodeType === 3 && (d += j.nodeValue.length), (B = j.firstChild) !== null;)D = j, j = B;
                            for(;;){
                                if (j === e) break t;
                                if (D === l && ++M === a && (y = d), D === r && ++P === n && (S = d), (B = j.nextSibling) !== null) break;
                                j = D, D = j.parentNode;
                            }
                            j = B;
                        }
                        l = y === -1 || S === -1 ? null : {
                            start: y,
                            end: S
                        };
                    } else l = null;
                }
                l = l || {
                    start: 0,
                    end: 0
                };
            } else l = null;
            for(qc = {
                focusedElem: e,
                selectionRange: l
            }, mi = !1, Ge = t; Ge !== null;)if (t = Ge, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ge = e;
            else for(; Ge !== null;){
                switch(t = Ge, r = t.alternate, e = t.flags, t.tag){
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && r !== null) {
                            e = void 0, l = t, a = r.memoizedProps, r = r.memoizedState, n = l.stateNode;
                            try {
                                var le = Fl(l.type, a, l.elementType === l.type);
                                e = n.getSnapshotBeforeUpdate(le, r), n.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (I) {
                                Oe(l, l.return, I);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) Hc(e);
                            else if (l === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Hc(e);
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
                        if ((e & 1024) !== 0) throw Error(s(163));
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, Ge = e;
                    break;
                }
                Ge = t.return;
            }
        }
        function pd(e, t, l) {
            var n = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    Sl(e, l), n & 4 && Na(5, l);
                    break;
                case 1:
                    if (Sl(e, l), n & 4) if (e = l.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (d) {
                        Oe(l, l.return, d);
                    }
                    else {
                        var a = Fl(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (d) {
                            Oe(l, l.return, d);
                        }
                    }
                    n & 64 && cd(l), n & 512 && xa(l, l.return);
                    break;
                case 3:
                    if (Sl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
                        if (t = null, l.child !== null) switch(l.child.tag){
                            case 27:
                            case 5:
                                t = l.child.stateNode;
                                break;
                            case 1:
                                t = l.child.stateNode;
                        }
                        try {
                            Zo(e, t);
                        } catch (d) {
                            Oe(l, l.return, d);
                        }
                    }
                    break;
                case 27:
                    t === null && n & 4 && dd(l);
                case 26:
                case 5:
                    Sl(e, l), t === null && n & 4 && od(l), n & 512 && xa(l, l.return);
                    break;
                case 12:
                    Sl(e, l);
                    break;
                case 13:
                    Sl(e, l), n & 4 && vd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = t1.bind(null, l), b1(e, l))));
                    break;
                case 22:
                    if (n = l.memoizedState !== null || el, !n) {
                        t = t !== null && t.memoizedState !== null || Pe, a = el;
                        var r = Pe;
                        el = n, (Pe = t) && !r ? El(e, l, (l.subtreeFlags & 8772) !== 0) : Sl(e, l), el = a, Pe = r;
                    }
                    break;
                case 30:
                    break;
                default:
                    Sl(e, l);
            }
        }
        function md(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, md(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Gi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Me = null, ct = !1;
        function tl(e, t, l) {
            for(l = l.child; l !== null;)yd(e, t, l), l = l.sibling;
        }
        function yd(e, t, l) {
            if (dt && typeof dt.onCommitFiberUnmount == "function") try {
                dt.onCommitFiberUnmount($n, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    Pe || jt(l, t), tl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    Pe || jt(l, t);
                    var n = Me, a = ct;
                    Nl(l.type) && (Me = l.stateNode, ct = !1), tl(e, t, l), qa(l.stateNode), Me = n, ct = a;
                    break;
                case 5:
                    Pe || jt(l, t);
                case 6:
                    if (n = Me, a = ct, Me = null, tl(e, t, l), Me = n, ct = a, Me !== null) if (ct) try {
                        (Me.nodeType === 9 ? Me.body : Me.nodeName === "HTML" ? Me.ownerDocument.body : Me).removeChild(l.stateNode);
                    } catch (r) {
                        Oe(l, t, r);
                    }
                    else try {
                        Me.removeChild(l.stateNode);
                    } catch (r) {
                        Oe(l, t, r);
                    }
                    break;
                case 18:
                    Me !== null && (ct ? (e = Me, ah(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ga(e)) : ah(Me, l.stateNode));
                    break;
                case 4:
                    n = Me, a = ct, Me = l.stateNode.containerInfo, ct = !0, tl(e, t, l), Me = n, ct = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Pe || bl(2, l, t), Pe || bl(4, l, t), tl(e, t, l);
                    break;
                case 1:
                    Pe || (jt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && sd(l, t, n)), tl(e, t, l);
                    break;
                case 21:
                    tl(e, t, l);
                    break;
                case 22:
                    Pe = (n = Pe) || l.memoizedState !== null, tl(e, t, l), Pe = n;
                    break;
                default:
                    tl(e, t, l);
            }
        }
        function vd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Ga(e);
            } catch (l) {
                Oe(t, t.return, l);
            }
        }
        function X0(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new hd), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new hd), t;
                default:
                    throw Error(s(435, e.tag));
            }
        }
        function hc(e, t) {
            var l = X0(e);
            t.forEach(function(n) {
                var a = l1.bind(null, e, n);
                l.has(n) || (l.add(n), n.then(a, a));
            });
        }
        function yt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var n = 0; n < l.length; n++){
                var a = l[n], r = e, d = t, y = d;
                e: for(; y !== null;){
                    switch(y.tag){
                        case 27:
                            if (Nl(y.type)) {
                                Me = y.stateNode, ct = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Me = y.stateNode, ct = !1;
                            break e;
                        case 3:
                        case 4:
                            Me = y.stateNode.containerInfo, ct = !0;
                            break e;
                    }
                    y = y.return;
                }
                if (Me === null) throw Error(s(160));
                yd(r, d, a), Me = null, ct = !1, r = a.alternate, r !== null && (r.return = null), a.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)gd(t, e), t = t.sibling;
        }
        var Bt = null;
        function gd(e, t) {
            var l = e.alternate, n = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    yt(t, e), vt(e), n & 4 && (bl(3, e, e.return), Na(3, e), bl(5, e, e.return));
                    break;
                case 1:
                    yt(t, e), vt(e), n & 512 && (Pe || l === null || jt(l, l.return)), n & 64 && el && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                    break;
                case 26:
                    var a = Bt;
                    if (yt(t, e), vt(e), n & 512 && (Pe || l === null || jt(l, l.return)), n & 4) {
                        var r = l !== null ? l.memoizedState : null;
                        if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
                            e: {
                                n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                                t: switch(n){
                                    case "title":
                                        r = a.getElementsByTagName("title")[0], (!r || r[Wn] || r[Ie] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(n), a.head.insertBefore(r, a.querySelector("head > title"))), Je(r, n, l), r[Ie] = e, Ke(r), n = r;
                                        break e;
                                    case "link":
                                        var d = dh("link", "href", a).get(n + (l.href || ""));
                                        if (d) {
                                            for(var y = 0; y < d.length; y++)if (r = d[y], r.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && r.getAttribute("rel") === (l.rel == null ? null : l.rel) && r.getAttribute("title") === (l.title == null ? null : l.title) && r.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                d.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        r = a.createElement(n), Je(r, n, l), a.head.appendChild(r);
                                        break;
                                    case "meta":
                                        if (d = dh("meta", "content", a).get(n + (l.content || ""))) {
                                            for(y = 0; y < d.length; y++)if (r = d[y], r.getAttribute("content") === (l.content == null ? null : "" + l.content) && r.getAttribute("name") === (l.name == null ? null : l.name) && r.getAttribute("property") === (l.property == null ? null : l.property) && r.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && r.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                d.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        r = a.createElement(n), Je(r, n, l), a.head.appendChild(r);
                                        break;
                                    default:
                                        throw Error(s(468, n));
                                }
                                r[Ie] = e, Ke(r), n = r;
                            }
                            e.stateNode = n;
                        } else hh(a, e.type, e.stateNode);
                        else e.stateNode = fh(a, n, e.memoizedProps);
                        else r !== n ? (r === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : r.count--, n === null ? hh(a, e.type, e.stateNode) : fh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && sc(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    yt(t, e), vt(e), n & 512 && (Pe || l === null || jt(l, l.return)), l !== null && n & 4 && sc(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (yt(t, e), vt(e), n & 512 && (Pe || l === null || jt(l, l.return)), e.flags & 32) {
                        a = e.stateNode;
                        try {
                            mn(a, "");
                        } catch (B) {
                            Oe(e, e.return, B);
                        }
                    }
                    n & 4 && e.stateNode != null && (a = e.memoizedProps, sc(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (dc = !0);
                    break;
                case 6:
                    if (yt(t, e), vt(e), n & 4) {
                        if (e.stateNode === null) throw Error(s(162));
                        n = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = n;
                        } catch (B) {
                            Oe(e, e.return, B);
                        }
                    }
                    break;
                case 3:
                    if (di = null, a = Bt, Bt = oi(t.containerInfo), yt(t, e), Bt = a, vt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Ga(t.containerInfo);
                    } catch (B) {
                        Oe(e, e.return, B);
                    }
                    dc && (dc = !1, bd(e));
                    break;
                case 4:
                    n = Bt, Bt = oi(e.stateNode.containerInfo), yt(t, e), vt(e), Bt = n;
                    break;
                case 12:
                    yt(t, e), vt(e);
                    break;
                case 13:
                    yt(t, e), vt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (bc = Ut()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, hc(e, n)));
                    break;
                case 22:
                    a = e.memoizedState !== null;
                    var S = l !== null && l.memoizedState !== null, M = el, P = Pe;
                    if (el = M || a, Pe = P || S, yt(t, e), Pe = P, el = M, vt(e), n & 8192) e: for(t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || S || el || Pe || Wl(e)), l = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                S = l = t;
                                try {
                                    if (r = S.stateNode, a) d = r.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                                    else {
                                        y = S.stateNode;
                                        var j = S.memoizedProps.style, D = j != null && j.hasOwnProperty("display") ? j.display : null;
                                        y.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                                    }
                                } catch (B) {
                                    Oe(S, S.return, B);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                S = t;
                                try {
                                    S.stateNode.nodeValue = a ? "" : S.memoizedProps;
                                } catch (B) {
                                    Oe(S, S.return, B);
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
                    n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, hc(e, l))));
                    break;
                case 19:
                    yt(t, e), vt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, hc(e, n)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    yt(t, e), vt(e);
            }
        }
        function vt(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for(var l, n = e.return; n !== null;){
                        if (fd(n)) {
                            l = n;
                            break;
                        }
                        n = n.return;
                    }
                    if (l == null) throw Error(s(160));
                    switch(l.tag){
                        case 27:
                            var a = l.stateNode, r = oc(e);
                            Fu(e, r, a);
                            break;
                        case 5:
                            var d = l.stateNode;
                            l.flags & 32 && (mn(d, ""), l.flags &= -33);
                            var y = oc(e);
                            Fu(e, y, d);
                            break;
                        case 3:
                        case 4:
                            var S = l.stateNode.containerInfo, M = oc(e);
                            fc(e, M, S);
                            break;
                        default:
                            throw Error(s(161));
                    }
                } catch (P) {
                    Oe(e, e.return, P);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function bd(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                bd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function Sl(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)pd(e, t.alternate, t), t = t.sibling;
        }
        function Wl(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        bl(4, t, t.return), Wl(t);
                        break;
                    case 1:
                        jt(t, t.return);
                        var l = t.stateNode;
                        typeof l.componentWillUnmount == "function" && sd(t, t.return, l), Wl(t);
                        break;
                    case 27:
                        qa(t.stateNode);
                    case 26:
                    case 5:
                        jt(t, t.return), Wl(t);
                        break;
                    case 22:
                        t.memoizedState === null && Wl(t);
                        break;
                    case 30:
                        Wl(t);
                        break;
                    default:
                        Wl(t);
                }
                e = e.sibling;
            }
        }
        function El(e, t, l) {
            for(l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var n = t.alternate, a = e, r = t, d = r.flags;
                switch(r.tag){
                    case 0:
                    case 11:
                    case 15:
                        El(a, r, l), Na(4, r);
                        break;
                    case 1:
                        if (El(a, r, l), n = r, a = n.stateNode, typeof a.componentDidMount == "function") try {
                            a.componentDidMount();
                        } catch (M) {
                            Oe(n, n.return, M);
                        }
                        if (n = r, a = n.updateQueue, a !== null) {
                            var y = n.stateNode;
                            try {
                                var S = a.shared.hiddenCallbacks;
                                if (S !== null) for(a.shared.hiddenCallbacks = null, a = 0; a < S.length; a++)Xo(S[a], y);
                            } catch (M) {
                                Oe(n, n.return, M);
                            }
                        }
                        l && d & 64 && cd(r), xa(r, r.return);
                        break;
                    case 27:
                        dd(r);
                    case 26:
                    case 5:
                        El(a, r, l), l && n === null && d & 4 && od(r), xa(r, r.return);
                        break;
                    case 12:
                        El(a, r, l);
                        break;
                    case 13:
                        El(a, r, l), l && d & 4 && vd(a, r);
                        break;
                    case 22:
                        r.memoizedState === null && El(a, r, l), xa(r, r.return);
                        break;
                    case 30:
                        break;
                    default:
                        El(a, r, l);
                }
                t = t.sibling;
            }
        }
        function pc(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ha(l));
        }
        function mc(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ha(e));
        }
        function kt(e, t, l, n) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Sd(e, t, l, n), t = t.sibling;
        }
        function Sd(e, t, l, n) {
            var a = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    kt(e, t, l, n), a & 2048 && Na(9, t);
                    break;
                case 1:
                    kt(e, t, l, n);
                    break;
                case 3:
                    kt(e, t, l, n), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ha(e)));
                    break;
                case 12:
                    if (a & 2048) {
                        kt(e, t, l, n), e = t.stateNode;
                        try {
                            var r = t.memoizedProps, d = r.id, y = r.onPostCommit;
                            typeof y == "function" && y(d, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (S) {
                            Oe(t, t.return, S);
                        }
                    } else kt(e, t, l, n);
                    break;
                case 13:
                    kt(e, t, l, n);
                    break;
                case 23:
                    break;
                case 22:
                    r = t.stateNode, d = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? kt(e, t, l, n) : Ma(e, t) : r._visibility & 2 ? kt(e, t, l, n) : (r._visibility |= 2, zn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && pc(d, t);
                    break;
                case 24:
                    kt(e, t, l, n), a & 2048 && mc(t.alternate, t);
                    break;
                default:
                    kt(e, t, l, n);
            }
        }
        function zn(e, t, l, n, a) {
            for(a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var r = e, d = t, y = l, S = n, M = d.flags;
                switch(d.tag){
                    case 0:
                    case 11:
                    case 15:
                        zn(r, d, y, S, a), Na(8, d);
                        break;
                    case 23:
                        break;
                    case 22:
                        var P = d.stateNode;
                        d.memoizedState !== null ? P._visibility & 2 ? zn(r, d, y, S, a) : Ma(r, d) : (P._visibility |= 2, zn(r, d, y, S, a)), a && M & 2048 && pc(d.alternate, d);
                        break;
                    case 24:
                        zn(r, d, y, S, a), a && M & 2048 && mc(d.alternate, d);
                        break;
                    default:
                        zn(r, d, y, S, a);
                }
                t = t.sibling;
            }
        }
        function Ma(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var l = e, n = t, a = n.flags;
                switch(n.tag){
                    case 22:
                        Ma(l, n), a & 2048 && pc(n.alternate, n);
                        break;
                    case 24:
                        Ma(l, n), a & 2048 && mc(n.alternate, n);
                        break;
                    default:
                        Ma(l, n);
                }
                t = t.sibling;
            }
        }
        var Ca = 8192;
        function Un(e) {
            if (e.subtreeFlags & Ca) for(e = e.child; e !== null;)Ed(e), e = e.sibling;
        }
        function Ed(e) {
            switch(e.tag){
                case 26:
                    Un(e), e.flags & Ca && e.memoizedState !== null && B1(Bt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    Un(e);
                    break;
                case 3:
                case 4:
                    var t = Bt;
                    Bt = oi(e.stateNode.containerInfo), Un(e), Bt = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ca, Ca = 16777216, Un(e), Ca = t) : Un(e));
                    break;
                default:
                    Un(e);
            }
        }
        function _d(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function Da(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ge = n, Rd(n, e);
                }
                _d(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)Td(e), e = e.sibling;
        }
        function Td(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    Da(e), e.flags & 2048 && bl(9, e, e.return);
                    break;
                case 3:
                    Da(e);
                    break;
                case 12:
                    Da(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Wu(e)) : Da(e);
                    break;
                default:
                    Da(e);
            }
        }
        function Wu(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ge = n, Rd(n, e);
                }
                _d(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        bl(8, t, t.return), Wu(t);
                        break;
                    case 22:
                        l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Wu(t));
                        break;
                    default:
                        Wu(t);
                }
                e = e.sibling;
            }
        }
        function Rd(e, t) {
            for(; Ge !== null;){
                var l = Ge;
                switch(l.tag){
                    case 0:
                    case 11:
                    case 15:
                        bl(8, l, t);
                        break;
                    case 23:
                    case 22:
                        if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                            var n = l.memoizedState.cachePool.pool;
                            n != null && n.refCount++;
                        }
                        break;
                    case 24:
                        ha(l.memoizedState.cache);
                }
                if (n = l.child, n !== null) n.return = l, Ge = n;
                else e: for(l = e; Ge !== null;){
                    n = Ge;
                    var a = n.sibling, r = n.return;
                    if (md(n), n === l) {
                        Ge = null;
                        break e;
                    }
                    if (a !== null) {
                        a.return = r, Ge = a;
                        break e;
                    }
                    Ge = r;
                }
            }
        }
        var Z0 = {
            getCacheForType: function(e) {
                var t = et(ke), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, $0 = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, Ne = null, de = null, me = 0, Ee = 0, gt = null, _l = !1, Pn = !1, yc = !1, ll = 0, we = 0, Tl = 0, Il = 0, vc = 0, xt = 0, qn = 0, Ba = null, st = null, gc = !1, bc = 0, Iu = 1 / 0, ei = null, Rl = null, $e = 0, Al = null, jn = null, kn = 0, Sc = 0, Ec = null, Ad = null, wa = 0, _c = null;
        function bt() {
            if ((Se & 2) !== 0 && me !== 0) return me & -me;
            if (z.T !== null) {
                var e = On;
                return e !== 0 ? e : Mc();
            }
            return ks();
        }
        function Od() {
            xt === 0 && (xt = (me & 536870912) === 0 || ge ? Us() : 536870912);
            var e = Nt.current;
            return e !== null && (e.flags |= 32), xt;
        }
        function St(e, t, l) {
            (e === Ne && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (Hn(e, 0), Ol(e, me, xt, !1)), Fn(e, l), ((Se & 2) === 0 || e !== Ne) && (e === Ne && ((Se & 2) === 0 && (Il |= l), we === 4 && Ol(e, me, xt, !1)), Ht(e));
        }
        function Nd(e, t, l) {
            if ((Se & 6) !== 0) throw Error(s(327));
            var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Jn(e, t), a = n ? W0(e, t) : Ac(e, t, !0), r = n;
            do {
                if (a === 0) {
                    Pn && !n && Ol(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, r && !J0(l)) {
                        a = Ac(e, t, !1), r = !1;
                        continue;
                    }
                    if (a === 2) {
                        if (r = t, e.errorRecoveryDisabledLanes & r) var d = 0;
                        else d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
                        if (d !== 0) {
                            t = d;
                            e: {
                                var y = e;
                                a = Ba;
                                var S = y.current.memoizedState.isDehydrated;
                                if (S && (Hn(y, d).flags |= 256), d = Ac(y, d, !1), d !== 2) {
                                    if (yc && !S) {
                                        y.errorRecoveryDisabledLanes |= r, Il |= r, a = 4;
                                        break e;
                                    }
                                    r = st, st = a, r !== null && (st === null ? st = r : st.push.apply(st, r));
                                }
                                a = d;
                            }
                            if (r = !1, a !== 2) continue;
                        }
                    }
                    if (a === 1) {
                        Hn(e, 0), Ol(e, t, 0, !0);
                        break;
                    }
                    e: {
                        switch(n = e, r = a, r){
                            case 0:
                            case 1:
                                throw Error(s(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                Ol(n, t, xt, !_l);
                                break e;
                            case 2:
                                st = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(s(329));
                        }
                        if ((t & 62914560) === t && (a = bc + 300 - Ut(), 10 < a)) {
                            if (Ol(n, t, xt, !_l), fu(n, 0, !0) !== 0) break e;
                            n.timeoutHandle = lh(xd.bind(null, n, l, st, ei, gc, t, xt, Il, qn, _l, r, 2, -0, 0), a);
                            break e;
                        }
                        xd(n, l, st, ei, gc, t, xt, Il, qn, _l, r, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            Ht(e);
        }
        function xd(e, t, l, n, a, r, d, y, S, M, P, j, D, B) {
            if (e.timeoutHandle = -1, j = t.subtreeFlags, (j & 8192 || (j & 16785408) === 16785408) && (Ha = {
                stylesheets: null,
                count: 0,
                unsuspend: D1
            }, Ed(t), j = w1(), j !== null)) {
                e.cancelPendingCommit = j(Ud.bind(null, e, t, r, l, n, a, d, y, S, P, 1, D, B)), Ol(e, r, d, !M);
                return;
            }
            Ud(e, t, r, l, n, a, d, y, S);
        }
        function J0(e) {
            for(var t = e;;){
                var l = t.tag;
                if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for(var n = 0; n < l.length; n++){
                    var a = l[n], r = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!pt(r(), a)) return !1;
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
        function Ol(e, t, l, n) {
            t &= ~vc, t &= ~Il, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
            for(var a = t; 0 < a;){
                var r = 31 - ht(a), d = 1 << r;
                n[r] = -1, a &= ~d;
            }
            l !== 0 && qs(e, l, t);
        }
        function ti() {
            return (Se & 6) === 0 ? (za(0), !1) : !0;
        }
        function Tc() {
            if (de !== null) {
                if (Ee === 0) var e = de.return;
                else e = de, Zt = Xl = null, Hr(e), Bn = null, Ra = 0, e = de;
                for(; e !== null;)rd(e.alternate, e), e = e.return;
                de = null;
            }
        }
        function Hn(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, p1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Tc(), Ne = e, de = l = Gt(e.current, null), me = t, Ee = 0, gt = null, _l = !1, Pn = Jn(e, t), yc = !1, qn = xt = vc = Il = Tl = we = 0, st = Ba = null, gc = !1, (t & 8) !== 0 && (t |= t & 32);
            var n = e.entangledLanes;
            if (n !== 0) for(e = e.entanglements, n &= t; 0 < n;){
                var a = 31 - ht(n), r = 1 << a;
                t |= e[a], n &= ~r;
            }
            return ll = t, Tu(), l;
        }
        function Md(e, t) {
            oe = null, z.H = Qu, t === ma || t === Bu ? (t = Go(), Ee = 3) : t === Qo ? (t = Go(), Ee = 4) : Ee = t === Xf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, gt = t, de === null && (we = 1, Xu(e, Tt(t, e.current)));
        }
        function Cd() {
            var e = z.H;
            return z.H = Qu, e === null ? Qu : e;
        }
        function Dd() {
            var e = z.A;
            return z.A = Z0, e;
        }
        function Rc() {
            we = 4, _l || (me & 4194048) !== me && Nt.current !== null || (Pn = !0), (Tl & 134217727) === 0 && (Il & 134217727) === 0 || Ne === null || Ol(Ne, me, xt, !1);
        }
        function Ac(e, t, l) {
            var n = Se;
            Se |= 2;
            var a = Cd(), r = Dd();
            (Ne !== e || me !== t) && (ei = null, Hn(e, t)), t = !1;
            var d = we;
            e: do try {
                if (Ee !== 0 && de !== null) {
                    var y = de, S = gt;
                    switch(Ee){
                        case 8:
                            Tc(), d = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Nt.current === null && (t = !0);
                            var M = Ee;
                            if (Ee = 0, gt = null, Ln(e, y, S, M), l && Pn) {
                                d = 0;
                                break e;
                            }
                            break;
                        default:
                            M = Ee, Ee = 0, gt = null, Ln(e, y, S, M);
                    }
                }
                F0(), d = we;
                break;
            } catch (P) {
                Md(e, P);
            }
            while (!0);
            return t && e.shellSuspendCounter++, Zt = Xl = null, Se = n, z.H = a, z.A = r, de === null && (Ne = null, me = 0, Tu()), d;
        }
        function F0() {
            for(; de !== null;)Bd(de);
        }
        function W0(e, t) {
            var l = Se;
            Se |= 2;
            var n = Cd(), a = Dd();
            Ne !== e || me !== t ? (ei = null, Iu = Ut() + 500, Hn(e, t)) : Pn = Jn(e, t);
            e: do try {
                if (Ee !== 0 && de !== null) {
                    t = de;
                    var r = gt;
                    t: switch(Ee){
                        case 1:
                            Ee = 0, gt = null, Ln(e, t, r, 1);
                            break;
                        case 2:
                        case 9:
                            if (Ko(r)) {
                                Ee = 0, gt = null, wd(t);
                                break;
                            }
                            t = function() {
                                Ee !== 2 && Ee !== 9 || Ne !== e || (Ee = 7), Ht(e);
                            }, r.then(t, t);
                            break e;
                        case 3:
                            Ee = 7;
                            break e;
                        case 4:
                            Ee = 5;
                            break e;
                        case 7:
                            Ko(r) ? (Ee = 0, gt = null, wd(t)) : (Ee = 0, gt = null, Ln(e, t, r, 7));
                            break;
                        case 5:
                            var d = null;
                            switch(de.tag){
                                case 26:
                                    d = de.memoizedState;
                                case 5:
                                case 27:
                                    var y = de;
                                    if (!d || ph(d)) {
                                        Ee = 0, gt = null;
                                        var S = y.sibling;
                                        if (S !== null) de = S;
                                        else {
                                            var M = y.return;
                                            M !== null ? (de = M, li(M)) : de = null;
                                        }
                                        break t;
                                    }
                            }
                            Ee = 0, gt = null, Ln(e, t, r, 5);
                            break;
                        case 6:
                            Ee = 0, gt = null, Ln(e, t, r, 6);
                            break;
                        case 8:
                            Tc(), we = 6;
                            break e;
                        default:
                            throw Error(s(462));
                    }
                }
                I0();
                break;
            } catch (P) {
                Md(e, P);
            }
            while (!0);
            return Zt = Xl = null, z.H = n, z.A = a, Se = l, de !== null ? 0 : (Ne = null, me = 0, Tu(), we);
        }
        function I0() {
            for(; de !== null && !Em();)Bd(de);
        }
        function Bd(e) {
            var t = ud(e.alternate, e, ll);
            e.memoizedProps = e.pendingProps, t === null ? li(e) : de = t;
        }
        function wd(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = If(l, t, t.pendingProps, t.type, void 0, me);
                    break;
                case 11:
                    t = If(l, t, t.pendingProps, t.type.render, t.ref, me);
                    break;
                case 5:
                    Hr(t);
                default:
                    rd(l, t), t = de = wo(t, ll), t = ud(l, t, ll);
            }
            e.memoizedProps = e.pendingProps, t === null ? li(e) : de = t;
        }
        function Ln(e, t, l, n) {
            Zt = Xl = null, Hr(t), Bn = null, Ra = 0;
            var a = t.return;
            try {
                if (Q0(e, a, t, l, me)) {
                    we = 1, Xu(e, Tt(l, e.current)), de = null;
                    return;
                }
            } catch (r) {
                if (a !== null) throw de = a, r;
                we = 1, Xu(e, Tt(l, e.current)), de = null;
                return;
            }
            t.flags & 32768 ? (ge || n === 1 ? e = !0 : Pn || (me & 536870912) !== 0 ? e = !1 : (_l = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Nt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), zd(t, e)) : li(t);
        }
        function li(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    zd(t, _l);
                    return;
                }
                e = t.return;
                var l = Y0(t.alternate, t, ll);
                if (l !== null) {
                    de = l;
                    return;
                }
                if (t = t.sibling, t !== null) {
                    de = t;
                    return;
                }
                de = t = e;
            }while (t !== null);
            we === 0 && (we = 5);
        }
        function zd(e, t) {
            do {
                var l = G0(e.alternate, e);
                if (l !== null) {
                    l.flags &= 32767, de = l;
                    return;
                }
                if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
                    de = e;
                    return;
                }
                de = e = l;
            }while (e !== null);
            we = 6, de = null;
        }
        function Ud(e, t, l, n, a, r, d, y, S) {
            e.cancelPendingCommit = null;
            do ni();
            while ($e !== 0);
            if ((Se & 6) !== 0) throw Error(s(327));
            if (t !== null) {
                if (t === e.current) throw Error(s(177));
                if (r = t.lanes | t.childLanes, r |= mr, Dm(e, l, r, d, y, S), e === Ne && (de = Ne = null, me = 0), jn = t, Al = e, kn = l, Sc = r, Ec = a, Ad = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, n1(cu, function() {
                    return Hd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                    n = z.T, z.T = null, a = K.p, K.p = 2, d = Se, Se |= 4;
                    try {
                        V0(e, t, l);
                    } finally{
                        Se = d, K.p = a, z.T = n;
                    }
                }
                $e = 1, Pd(), qd(), jd();
            }
        }
        function Pd() {
            if ($e === 1) {
                $e = 0;
                var e = Al, t = jn, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = z.T, z.T = null;
                    var n = K.p;
                    K.p = 2;
                    var a = Se;
                    Se |= 4;
                    try {
                        gd(t, e);
                        var r = qc, d = To(e.containerInfo), y = r.focusedElem, S = r.selectionRange;
                        if (d !== y && y && y.ownerDocument && _o(y.ownerDocument.documentElement, y)) {
                            if (S !== null && or(y)) {
                                var M = S.start, P = S.end;
                                if (P === void 0 && (P = M), "selectionStart" in y) y.selectionStart = M, y.selectionEnd = Math.min(P, y.value.length);
                                else {
                                    var j = y.ownerDocument || document, D = j && j.defaultView || window;
                                    if (D.getSelection) {
                                        var B = D.getSelection(), le = y.textContent.length, I = Math.min(S.start, le), Re = S.end === void 0 ? I : Math.min(S.end, le);
                                        !B.extend && I > Re && (d = Re, Re = I, I = d);
                                        var N = Eo(y, I), T = Eo(y, Re);
                                        if (N && T && (B.rangeCount !== 1 || B.anchorNode !== N.node || B.anchorOffset !== N.offset || B.focusNode !== T.node || B.focusOffset !== T.offset)) {
                                            var x = j.createRange();
                                            x.setStart(N.node, N.offset), B.removeAllRanges(), I > Re ? (B.addRange(x), B.extend(T.node, T.offset)) : (x.setEnd(T.node, T.offset), B.addRange(x));
                                        }
                                    }
                                }
                            }
                            for(j = [], B = y; B = B.parentNode;)B.nodeType === 1 && j.push({
                                element: B,
                                left: B.scrollLeft,
                                top: B.scrollTop
                            });
                            for(typeof y.focus == "function" && y.focus(), y = 0; y < j.length; y++){
                                var q = j[y];
                                q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
                            }
                        }
                        mi = !!Pc, qc = Pc = null;
                    } finally{
                        Se = a, K.p = n, z.T = l;
                    }
                }
                e.current = t, $e = 2;
            }
        }
        function qd() {
            if ($e === 2) {
                $e = 0;
                var e = Al, t = jn, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = z.T, z.T = null;
                    var n = K.p;
                    K.p = 2;
                    var a = Se;
                    Se |= 4;
                    try {
                        pd(e, t.alternate, t);
                    } finally{
                        Se = a, K.p = n, z.T = l;
                    }
                }
                $e = 3;
            }
        }
        function jd() {
            if ($e === 4 || $e === 3) {
                $e = 0, _m();
                var e = Al, t = jn, l = kn, n = Ad;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? $e = 5 : ($e = 0, jn = Al = null, kd(e, e.pendingLanes));
                var a = e.pendingLanes;
                if (a === 0 && (Rl = null), Ki(l), t = t.stateNode, dt && typeof dt.onCommitFiberRoot == "function") try {
                    dt.onCommitFiberRoot($n, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (n !== null) {
                    t = z.T, a = K.p, K.p = 2, z.T = null;
                    try {
                        for(var r = e.onRecoverableError, d = 0; d < n.length; d++){
                            var y = n[d];
                            r(y.value, {
                                componentStack: y.stack
                            });
                        }
                    } finally{
                        z.T = t, K.p = a;
                    }
                }
                (kn & 3) !== 0 && ni(), Ht(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === _c ? wa++ : (wa = 0, _c = e) : wa = 0, za(0);
            }
        }
        function kd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ha(t)));
        }
        function ni(e) {
            return Pd(), qd(), jd(), Hd();
        }
        function Hd() {
            if ($e !== 5) return !1;
            var e = Al, t = Sc;
            Sc = 0;
            var l = Ki(kn), n = z.T, a = K.p;
            try {
                K.p = 32 > l ? 32 : l, z.T = null, l = Ec, Ec = null;
                var r = Al, d = kn;
                if ($e = 0, jn = Al = null, kn = 0, (Se & 6) !== 0) throw Error(s(331));
                var y = Se;
                if (Se |= 4, Td(r.current), Sd(r, r.current, d, l), Se = y, za(0, !1), dt && typeof dt.onPostCommitFiberRoot == "function") try {
                    dt.onPostCommitFiberRoot($n, r);
                } catch  {}
                return !0;
            } finally{
                K.p = a, z.T = n, kd(e, t);
            }
        }
        function Ld(e, t, l) {
            t = Tt(l, t), t = ec(e.stateNode, t, 2), e = ml(e, t, 2), e !== null && (Fn(e, 2), Ht(e));
        }
        function Oe(e, t, l) {
            if (e.tag === 3) Ld(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Ld(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Rl === null || !Rl.has(n))) {
                        e = Tt(l, e), l = Gf(2), n = ml(t, l, 2), n !== null && (Vf(l, n, t, e), Fn(n, 2), Ht(n));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Oc(e, t, l) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new $0;
                var a = new Set;
                n.set(t, a);
            } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
            a.has(l) || (yc = !0, a.add(l), e = e1.bind(null, e, t, l), t.then(e, e));
        }
        function e1(e, t, l) {
            var n = e.pingCache;
            n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ne === e && (me & l) === l && (we === 4 || we === 3 && (me & 62914560) === me && 300 > Ut() - bc ? (Se & 2) === 0 && Hn(e, 0) : vc |= l, qn === me && (qn = 0)), Ht(e);
        }
        function Qd(e, t) {
            t === 0 && (t = Ps()), e = _n(e, t), e !== null && (Fn(e, t), Ht(e));
        }
        function t1(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), Qd(e, l);
        }
        function l1(e, t) {
            var l = 0;
            switch(e.tag){
                case 13:
                    var n = e.stateNode, a = e.memoizedState;
                    a !== null && (l = a.retryLane);
                    break;
                case 19:
                    n = e.stateNode;
                    break;
                case 22:
                    n = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(s(314));
            }
            n !== null && n.delete(t), Qd(e, l);
        }
        function n1(e, t) {
            return ki(e, t);
        }
        var ai = null, Qn = null, Nc = !1, ui = !1, xc = !1, en = 0;
        function Ht(e) {
            e !== Qn && e.next === null && (Qn === null ? ai = Qn = e : Qn = Qn.next = e), ui = !0, Nc || (Nc = !0, u1());
        }
        function za(e, t) {
            if (!xc && ui) {
                xc = !0;
                do for(var l = !1, n = ai; n !== null;){
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var r = 0;
                        else {
                            var d = n.suspendedLanes, y = n.pingedLanes;
                            r = (1 << 31 - ht(42 | e) + 1) - 1, r &= a & ~(d & ~y), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
                        }
                        r !== 0 && (l = !0, Vd(n, r));
                    } else r = me, r = fu(n, n === Ne ? r : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (r & 3) === 0 || Jn(n, r) || (l = !0, Vd(n, r));
                    n = n.next;
                }
                while (l);
                xc = !1;
            }
        }
        function a1() {
            Kd();
        }
        function Kd() {
            ui = Nc = !1;
            var e = 0;
            en !== 0 && (h1() && (e = en), en = 0);
            for(var t = Ut(), l = null, n = ai; n !== null;){
                var a = n.next, r = Yd(n, t);
                r === 0 ? (n.next = null, l === null ? ai = a : l.next = a, a === null && (Qn = l)) : (l = n, (e !== 0 || (r & 3) !== 0) && (ui = !0)), n = a;
            }
            za(e);
        }
        function Yd(e, t) {
            for(var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r;){
                var d = 31 - ht(r), y = 1 << d, S = a[d];
                S === -1 ? ((y & l) === 0 || (y & n) !== 0) && (a[d] = Cm(y, t)) : S <= t && (e.expiredLanes |= y), r &= ~y;
            }
            if (t = Ne, l = me, l = fu(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && Hi(n), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || Jn(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(n !== null && Hi(n), Ki(l)){
                    case 2:
                    case 8:
                        l = ws;
                        break;
                    case 32:
                        l = cu;
                        break;
                    case 268435456:
                        l = zs;
                        break;
                    default:
                        l = cu;
                }
                return n = Gd.bind(null, e), l = ki(l, n), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return n !== null && n !== null && Hi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Gd(e, t) {
            if ($e !== 0 && $e !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (ni() && e.callbackNode !== l) return null;
            var n = me;
            return n = fu(e, e === Ne ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (Nd(e, n, t), Yd(e, Ut()), e.callbackNode != null && e.callbackNode === l ? Gd.bind(null, e) : null);
        }
        function Vd(e, t) {
            if (ni()) return null;
            Nd(e, t, !0);
        }
        function u1() {
            m1(function() {
                (Se & 6) !== 0 ? ki(Bs, a1) : Kd();
            });
        }
        function Mc() {
            return en === 0 && (en = Us()), en;
        }
        function Xd(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yu("" + e);
        }
        function Zd(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function i1(e, t, l, n, a) {
            if (t === "submit" && l && l.stateNode === a) {
                var r = Xd((a[ut] || null).action), d = n.submitter;
                d && (t = (t = d[ut] || null) ? Xd(t.formAction) : d.getAttribute("formAction"), t !== null && (r = t, d = null));
                var y = new Su("action", "action", null, n, a);
                e.push({
                    event: y,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (en !== 0) {
                                        var S = d ? Zd(a, d) : new FormData(a);
                                        $r(l, {
                                            pending: !0,
                                            data: S,
                                            method: a.method,
                                            action: r
                                        }, null, S);
                                    }
                                } else typeof r == "function" && (y.preventDefault(), S = d ? Zd(a, d) : new FormData(a), $r(l, {
                                    pending: !0,
                                    data: S,
                                    method: a.method,
                                    action: r
                                }, r, S));
                            },
                            currentTarget: a
                        }
                    ]
                });
            }
        }
        for(var Cc = 0; Cc < pr.length; Cc++){
            var Dc = pr[Cc], r1 = Dc.toLowerCase(), c1 = Dc[0].toUpperCase() + Dc.slice(1);
            Dt(r1, "on" + c1);
        }
        Dt(Oo, "onAnimationEnd"), Dt(No, "onAnimationIteration"), Dt(xo, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(A0, "onTransitionRun"), Dt(O0, "onTransitionStart"), Dt(N0, "onTransitionCancel"), Dt(Mo, "onTransitionEnd"), dn("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), dn("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), dn("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), dn("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), jl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), jl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), jl("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), jl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), jl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), jl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Ua = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), s1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ua));
        function $d(e, t) {
            t = (t & 4) !== 0;
            for(var l = 0; l < e.length; l++){
                var n = e[l], a = n.event;
                n = n.listeners;
                e: {
                    var r = void 0;
                    if (t) for(var d = n.length - 1; 0 <= d; d--){
                        var y = n[d], S = y.instance, M = y.currentTarget;
                        if (y = y.listener, S !== r && a.isPropagationStopped()) break e;
                        r = y, a.currentTarget = M;
                        try {
                            r(a);
                        } catch (P) {
                            Vu(P);
                        }
                        a.currentTarget = null, r = S;
                    }
                    else for(d = 0; d < n.length; d++){
                        if (y = n[d], S = y.instance, M = y.currentTarget, y = y.listener, S !== r && a.isPropagationStopped()) break e;
                        r = y, a.currentTarget = M;
                        try {
                            r(a);
                        } catch (P) {
                            Vu(P);
                        }
                        a.currentTarget = null, r = S;
                    }
                }
            }
        }
        function he(e, t) {
            var l = t[Yi];
            l === void 0 && (l = t[Yi] = new Set);
            var n = e + "__bubble";
            l.has(n) || (Jd(t, e, 2, !1), l.add(n));
        }
        function Bc(e, t, l) {
            var n = 0;
            t && (n |= 4), Jd(l, e, n, t);
        }
        var ii = "_reactListening" + Math.random().toString(36).slice(2);
        function wc(e) {
            if (!e[ii]) {
                e[ii] = !0, Ls.forEach(function(l) {
                    l !== "selectionchange" && (s1.has(l) || Bc(l, !1, e), Bc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[ii] || (t[ii] = !0, Bc("selectionchange", !1, t));
            }
        }
        function Jd(e, t, l, n) {
            switch(Sh(t)){
                case 2:
                    var a = P1;
                    break;
                case 8:
                    a = q1;
                    break;
                default:
                    a = Xc;
            }
            l = a.bind(null, t, l, e), a = void 0, !tr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
                capture: !0,
                passive: a
            }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
                passive: a
            }) : e.addEventListener(t, l, !1);
        }
        function zc(e, t, l, n, a) {
            var r = n;
            if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for(;;){
                if (n === null) return;
                var d = n.tag;
                if (d === 3 || d === 4) {
                    var y = n.stateNode.containerInfo;
                    if (y === a) break;
                    if (d === 4) for(d = n.return; d !== null;){
                        var S = d.tag;
                        if ((S === 3 || S === 4) && d.stateNode.containerInfo === a) return;
                        d = d.return;
                    }
                    for(; y !== null;){
                        if (d = sn(y), d === null) return;
                        if (S = d.tag, S === 5 || S === 6 || S === 26 || S === 27) {
                            n = r = d;
                            continue e;
                        }
                        y = y.parentNode;
                    }
                }
                n = n.return;
            }
            to(function() {
                var M = r, P = Ii(l), j = [];
                e: {
                    var D = Co.get(e);
                    if (D !== void 0) {
                        var B = Su, le = e;
                        switch(e){
                            case "keypress":
                                if (gu(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                B = n0;
                                break;
                            case "focusin":
                                le = "focus", B = ur;
                                break;
                            case "focusout":
                                le = "blur", B = ur;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                B = ur;
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
                                B = ao;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                B = Gm;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                B = i0;
                                break;
                            case Oo:
                            case No:
                            case xo:
                                B = Zm;
                                break;
                            case Mo:
                                B = c0;
                                break;
                            case "scroll":
                            case "scrollend":
                                B = Km;
                                break;
                            case "wheel":
                                B = o0;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                B = Jm;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                B = io;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                B = d0;
                        }
                        var I = (t & 4) !== 0, Re = !I && (e === "scroll" || e === "scrollend"), N = I ? D !== null ? D + "Capture" : null : D;
                        I = [];
                        for(var T = M, x; T !== null;){
                            var q = T;
                            if (x = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || x === null || N === null || (q = ea(T, N), q != null && I.push(Pa(T, q, x))), Re) break;
                            T = T.return;
                        }
                        0 < I.length && (D = new B(D, le, null, l, P), j.push({
                            event: D,
                            listeners: I
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (D = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", D && l !== Wi && (le = l.relatedTarget || l.fromElement) && (sn(le) || le[cn])) break e;
                        if ((B || D) && (D = P.window === P ? P : (D = P.ownerDocument) ? D.defaultView || D.parentWindow : window, B ? (le = l.relatedTarget || l.toElement, B = M, le = le ? sn(le) : null, le !== null && (Re = f(le), I = le.tag, le !== Re || I !== 5 && I !== 27 && I !== 6) && (le = null)) : (B = null, le = M), B !== le)) {
                            if (I = ao, q = "onMouseLeave", N = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (I = io, q = "onPointerLeave", N = "onPointerEnter", T = "pointer"), Re = B == null ? D : In(B), x = le == null ? D : In(le), D = new I(q, T + "leave", B, l, P), D.target = Re, D.relatedTarget = x, q = null, sn(P) === M && (I = new I(N, T + "enter", le, l, P), I.target = x, I.relatedTarget = Re, q = I), Re = q, B && le) t: {
                                for(I = B, N = le, T = 0, x = I; x; x = Kn(x))T++;
                                for(x = 0, q = N; q; q = Kn(q))x++;
                                for(; 0 < T - x;)I = Kn(I), T--;
                                for(; 0 < x - T;)N = Kn(N), x--;
                                for(; T--;){
                                    if (I === N || N !== null && I === N.alternate) break t;
                                    I = Kn(I), N = Kn(N);
                                }
                                I = null;
                            }
                            else I = null;
                            B !== null && Fd(j, D, B, I, !1), le !== null && Re !== null && Fd(j, Re, le, I, !0);
                        }
                    }
                    e: {
                        if (D = M ? In(M) : window, B = D.nodeName && D.nodeName.toLowerCase(), B === "select" || B === "input" && D.type === "file") var Z = mo;
                        else if (ho(D)) if (yo) Z = _0;
                        else {
                            Z = S0;
                            var fe = b0;
                        }
                        else B = D.nodeName, !B || B.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? M && Fi(M.elementType) && (Z = mo) : Z = E0;
                        if (Z && (Z = Z(e, M))) {
                            po(j, Z, l, P);
                            break e;
                        }
                        fe && fe(e, D, M), e === "focusout" && M && D.type === "number" && M.memoizedProps.value != null && Ji(D, "number", D.value);
                    }
                    switch(fe = M ? In(M) : window, e){
                        case "focusin":
                            (ho(fe) || fe.contentEditable === "true") && (bn = fe, fr = M, ca = null);
                            break;
                        case "focusout":
                            ca = fr = bn = null;
                            break;
                        case "mousedown":
                            dr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            dr = !1, Ro(j, l, P);
                            break;
                        case "selectionchange":
                            if (R0) break;
                        case "keydown":
                        case "keyup":
                            Ro(j, l, P);
                    }
                    var J;
                    if (rr) e: {
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
                    else gn ? oo(e, l) && (ee = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ee = "onCompositionStart");
                    ee && (ro && l.locale !== "ko" && (gn || ee !== "onCompositionStart" ? ee === "onCompositionEnd" && gn && (J = lo()) : (fl = P, lr = "value" in fl ? fl.value : fl.textContent, gn = !0)), fe = ri(M, ee), 0 < fe.length && (ee = new uo(ee, e, null, l, P), j.push({
                        event: ee,
                        listeners: fe
                    }), J ? ee.data = J : (J = fo(l), J !== null && (ee.data = J)))), (J = p0 ? m0(e, l) : y0(e, l)) && (ee = ri(M, "onBeforeInput"), 0 < ee.length && (fe = new uo("onBeforeInput", "beforeinput", null, l, P), j.push({
                        event: fe,
                        listeners: ee
                    }), fe.data = J)), i1(j, e, M, l, P);
                }
                $d(j, t);
            });
        }
        function Pa(e, t, l) {
            return {
                instance: e,
                listener: t,
                currentTarget: l
            };
        }
        function ri(e, t) {
            for(var l = t + "Capture", n = []; e !== null;){
                var a = e, r = a.stateNode;
                if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || r === null || (a = ea(e, l), a != null && n.unshift(Pa(e, a, r)), a = ea(e, t), a != null && n.push(Pa(e, a, r))), e.tag === 3) return n;
                e = e.return;
            }
            return [];
        }
        function Kn(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function Fd(e, t, l, n, a) {
            for(var r = t._reactName, d = []; l !== null && l !== n;){
                var y = l, S = y.alternate, M = y.stateNode;
                if (y = y.tag, S !== null && S === n) break;
                y !== 5 && y !== 26 && y !== 27 || M === null || (S = M, a ? (M = ea(l, r), M != null && d.unshift(Pa(l, M, S))) : a || (M = ea(l, r), M != null && d.push(Pa(l, M, S)))), l = l.return;
            }
            d.length !== 0 && e.push({
                event: t,
                listeners: d
            });
        }
        var o1 = /\r\n?/g, f1 = /\u0000|\uFFFD/g;
        function Wd(e) {
            return (typeof e == "string" ? e : "" + e).replace(o1, `
`).replace(f1, "");
        }
        function Id(e, t) {
            return t = Wd(t), Wd(e) === t;
        }
        function ci() {}
        function Te(e, t, l, n, a, r) {
            switch(l){
                case "children":
                    typeof n == "string" ? t === "body" || t === "textarea" && n === "" || mn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && mn(e, "" + n);
                    break;
                case "className":
                    hu(e, "class", n);
                    break;
                case "tabIndex":
                    hu(e, "tabindex", n);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    hu(e, l, n);
                    break;
                case "style":
                    Is(e, n, r);
                    break;
                case "data":
                    if (t !== "object") {
                        hu(e, "data", n);
                        break;
                    }
                case "src":
                case "href":
                    if (n === "" && (t !== "a" || l !== "href")) {
                        e.removeAttribute(l);
                        break;
                    }
                    if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
                        e.removeAttribute(l);
                        break;
                    }
                    n = yu("" + n), e.setAttribute(l, n);
                    break;
                case "action":
                case "formAction":
                    if (typeof n == "function") {
                        e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof r == "function" && (l === "formAction" ? (t !== "input" && Te(e, t, "name", a.name, a, null), Te(e, t, "formEncType", a.formEncType, a, null), Te(e, t, "formMethod", a.formMethod, a, null), Te(e, t, "formTarget", a.formTarget, a, null)) : (Te(e, t, "encType", a.encType, a, null), Te(e, t, "method", a.method, a, null), Te(e, t, "target", a.target, a, null)));
                    if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                        e.removeAttribute(l);
                        break;
                    }
                    n = yu("" + n), e.setAttribute(l, n);
                    break;
                case "onClick":
                    n != null && (e.onclick = ci);
                    break;
                case "onScroll":
                    n != null && he("scroll", e);
                    break;
                case "onScrollEnd":
                    n != null && he("scrollend", e);
                    break;
                case "dangerouslySetInnerHTML":
                    if (n != null) {
                        if (typeof n != "object" || !("__html" in n)) throw Error(s(61));
                        if (l = n.__html, l != null) {
                            if (a.children != null) throw Error(s(60));
                            e.innerHTML = l;
                        }
                    }
                    break;
                case "multiple":
                    e.multiple = n && typeof n != "function" && typeof n != "symbol";
                    break;
                case "muted":
                    e.muted = n && typeof n != "function" && typeof n != "symbol";
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
                    if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
                        e.removeAttribute("xlink:href");
                        break;
                    }
                    l = yu("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
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
                    n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
                    break;
                case "capture":
                case "download":
                    n === !0 ? e.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
                    break;
                case "rowSpan":
                case "start":
                    n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
                    break;
                case "popover":
                    he("beforetoggle", e), he("toggle", e), du(e, "popover", n);
                    break;
                case "xlinkActuate":
                    Kt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
                    break;
                case "xlinkArcrole":
                    Kt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
                    break;
                case "xlinkRole":
                    Kt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
                    break;
                case "xlinkShow":
                    Kt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
                    break;
                case "xlinkTitle":
                    Kt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
                    break;
                case "xlinkType":
                    Kt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
                    break;
                case "xmlBase":
                    Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
                    break;
                case "xmlLang":
                    Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
                    break;
                case "xmlSpace":
                    Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
                    break;
                case "is":
                    du(e, "is", n);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Lm.get(l) || l, du(e, l, n));
            }
        }
        function Uc(e, t, l, n, a, r) {
            switch(l){
                case "style":
                    Is(e, n, r);
                    break;
                case "dangerouslySetInnerHTML":
                    if (n != null) {
                        if (typeof n != "object" || !("__html" in n)) throw Error(s(61));
                        if (l = n.__html, l != null) {
                            if (a.children != null) throw Error(s(60));
                            e.innerHTML = l;
                        }
                    }
                    break;
                case "children":
                    typeof n == "string" ? mn(e, n) : (typeof n == "number" || typeof n == "bigint") && mn(e, "" + n);
                    break;
                case "onScroll":
                    n != null && he("scroll", e);
                    break;
                case "onScrollEnd":
                    n != null && he("scrollend", e);
                    break;
                case "onClick":
                    n != null && (e.onclick = ci);
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
                    if (!Qs.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), r = e[ut] || null, r = r != null ? r[l] : null, typeof r == "function" && e.removeEventListener(t, r, a), typeof n == "function")) {
                            typeof r != "function" && r !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
                            break e;
                        }
                        l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : du(e, l, n);
                    }
            }
        }
        function Je(e, t, l) {
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
                    he("error", e), he("load", e);
                    var n = !1, a = !1, r;
                    for(r in l)if (l.hasOwnProperty(r)) {
                        var d = l[r];
                        if (d != null) switch(r){
                            case "src":
                                n = !0;
                                break;
                            case "srcSet":
                                a = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(s(137, t));
                            default:
                                Te(e, t, r, d, l, null);
                        }
                    }
                    a && Te(e, t, "srcSet", l.srcSet, l, null), n && Te(e, t, "src", l.src, l, null);
                    return;
                case "input":
                    he("invalid", e);
                    var y = r = d = a = null, S = null, M = null;
                    for(n in l)if (l.hasOwnProperty(n)) {
                        var P = l[n];
                        if (P != null) switch(n){
                            case "name":
                                a = P;
                                break;
                            case "type":
                                d = P;
                                break;
                            case "checked":
                                S = P;
                                break;
                            case "defaultChecked":
                                M = P;
                                break;
                            case "value":
                                r = P;
                                break;
                            case "defaultValue":
                                y = P;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (P != null) throw Error(s(137, t));
                                break;
                            default:
                                Te(e, t, n, P, l, null);
                        }
                    }
                    $s(e, r, y, S, M, d, a, !1), pu(e);
                    return;
                case "select":
                    he("invalid", e), n = d = r = null;
                    for(a in l)if (l.hasOwnProperty(a) && (y = l[a], y != null)) switch(a){
                        case "value":
                            r = y;
                            break;
                        case "defaultValue":
                            d = y;
                            break;
                        case "multiple":
                            n = y;
                        default:
                            Te(e, t, a, y, l, null);
                    }
                    t = r, l = d, e.multiple = !!n, t != null ? pn(e, !!n, t, !1) : l != null && pn(e, !!n, l, !0);
                    return;
                case "textarea":
                    he("invalid", e), r = a = n = null;
                    for(d in l)if (l.hasOwnProperty(d) && (y = l[d], y != null)) switch(d){
                        case "value":
                            n = y;
                            break;
                        case "defaultValue":
                            a = y;
                            break;
                        case "children":
                            r = y;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (y != null) throw Error(s(91));
                            break;
                        default:
                            Te(e, t, d, y, l, null);
                    }
                    Fs(e, n, a, r), pu(e);
                    return;
                case "option":
                    for(S in l)if (l.hasOwnProperty(S) && (n = l[S], n != null)) switch(S){
                        case "selected":
                            e.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default:
                            Te(e, t, S, n, l, null);
                    }
                    return;
                case "dialog":
                    he("beforetoggle", e), he("toggle", e), he("cancel", e), he("close", e);
                    break;
                case "iframe":
                case "object":
                    he("load", e);
                    break;
                case "video":
                case "audio":
                    for(n = 0; n < Ua.length; n++)he(Ua[n], e);
                    break;
                case "image":
                    he("error", e), he("load", e);
                    break;
                case "details":
                    he("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    he("error", e), he("load", e);
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
                    for(M in l)if (l.hasOwnProperty(M) && (n = l[M], n != null)) switch(M){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(s(137, t));
                        default:
                            Te(e, t, M, n, l, null);
                    }
                    return;
                default:
                    if (Fi(t)) {
                        for(P in l)l.hasOwnProperty(P) && (n = l[P], n !== void 0 && Uc(e, t, P, n, l, void 0));
                        return;
                    }
            }
            for(y in l)l.hasOwnProperty(y) && (n = l[y], n != null && Te(e, t, y, n, l, null));
        }
        function d1(e, t, l, n) {
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
                    var a = null, r = null, d = null, y = null, S = null, M = null, P = null;
                    for(B in l){
                        var j = l[B];
                        if (l.hasOwnProperty(B) && j != null) switch(B){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                S = j;
                            default:
                                n.hasOwnProperty(B) || Te(e, t, B, null, n, j);
                        }
                    }
                    for(var D in n){
                        var B = n[D];
                        if (j = l[D], n.hasOwnProperty(D) && (B != null || j != null)) switch(D){
                            case "type":
                                r = B;
                                break;
                            case "name":
                                a = B;
                                break;
                            case "checked":
                                M = B;
                                break;
                            case "defaultChecked":
                                P = B;
                                break;
                            case "value":
                                d = B;
                                break;
                            case "defaultValue":
                                y = B;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (B != null) throw Error(s(137, t));
                                break;
                            default:
                                B !== j && Te(e, t, D, B, n, j);
                        }
                    }
                    $i(e, d, y, S, M, P, r, a);
                    return;
                case "select":
                    B = d = y = D = null;
                    for(r in l)if (S = l[r], l.hasOwnProperty(r) && S != null) switch(r){
                        case "value":
                            break;
                        case "multiple":
                            B = S;
                        default:
                            n.hasOwnProperty(r) || Te(e, t, r, null, n, S);
                    }
                    for(a in n)if (r = n[a], S = l[a], n.hasOwnProperty(a) && (r != null || S != null)) switch(a){
                        case "value":
                            D = r;
                            break;
                        case "defaultValue":
                            y = r;
                            break;
                        case "multiple":
                            d = r;
                        default:
                            r !== S && Te(e, t, a, r, n, S);
                    }
                    t = y, l = d, n = B, D != null ? pn(e, !!l, D, !1) : !!n != !!l && (t != null ? pn(e, !!l, t, !0) : pn(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    B = D = null;
                    for(y in l)if (a = l[y], l.hasOwnProperty(y) && a != null && !n.hasOwnProperty(y)) switch(y){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Te(e, t, y, null, n, a);
                    }
                    for(d in n)if (a = n[d], r = l[d], n.hasOwnProperty(d) && (a != null || r != null)) switch(d){
                        case "value":
                            D = a;
                            break;
                        case "defaultValue":
                            B = a;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (a != null) throw Error(s(91));
                            break;
                        default:
                            a !== r && Te(e, t, d, a, n, r);
                    }
                    Js(e, D, B);
                    return;
                case "option":
                    for(var le in l)if (D = l[le], l.hasOwnProperty(le) && D != null && !n.hasOwnProperty(le)) switch(le){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Te(e, t, le, null, n, D);
                    }
                    for(S in n)if (D = n[S], B = l[S], n.hasOwnProperty(S) && D !== B && (D != null || B != null)) switch(S){
                        case "selected":
                            e.selected = D && typeof D != "function" && typeof D != "symbol";
                            break;
                        default:
                            Te(e, t, S, D, n, B);
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
                    for(var I in l)D = l[I], l.hasOwnProperty(I) && D != null && !n.hasOwnProperty(I) && Te(e, t, I, null, n, D);
                    for(M in n)if (D = n[M], B = l[M], n.hasOwnProperty(M) && D !== B && (D != null || B != null)) switch(M){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (D != null) throw Error(s(137, t));
                            break;
                        default:
                            Te(e, t, M, D, n, B);
                    }
                    return;
                default:
                    if (Fi(t)) {
                        for(var Re in l)D = l[Re], l.hasOwnProperty(Re) && D !== void 0 && !n.hasOwnProperty(Re) && Uc(e, t, Re, void 0, n, D);
                        for(P in n)D = n[P], B = l[P], !n.hasOwnProperty(P) || D === B || D === void 0 && B === void 0 || Uc(e, t, P, D, n, B);
                        return;
                    }
            }
            for(var N in l)D = l[N], l.hasOwnProperty(N) && D != null && !n.hasOwnProperty(N) && Te(e, t, N, null, n, D);
            for(j in n)D = n[j], B = l[j], !n.hasOwnProperty(j) || D === B || D == null && B == null || Te(e, t, j, D, n, B);
        }
        var Pc = null, qc = null;
        function si(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function eh(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function th(e, t) {
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
        function jc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var kc = null;
        function h1() {
            var e = window.event;
            return e && e.type === "popstate" ? e === kc ? !1 : (kc = e, !0) : (kc = null, !1);
        }
        var lh = typeof setTimeout == "function" ? setTimeout : void 0, p1 = typeof clearTimeout == "function" ? clearTimeout : void 0, nh = typeof Promise == "function" ? Promise : void 0, m1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof nh < "u" ? function(e) {
            return nh.resolve(null).then(e).catch(y1);
        } : lh;
        function y1(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Nl(e) {
            return e === "head";
        }
        function ah(e, t) {
            var l = t, n = 0, a = 0;
            do {
                var r = l.nextSibling;
                if (e.removeChild(l), r && r.nodeType === 8) if (l = r.data, l === "/$") {
                    if (0 < n && 8 > n) {
                        l = n;
                        var d = e.ownerDocument;
                        if (l & 1 && qa(d.documentElement), l & 2 && qa(d.body), l & 4) for(l = d.head, qa(l), d = l.firstChild; d;){
                            var y = d.nextSibling, S = d.nodeName;
                            d[Wn] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && d.rel.toLowerCase() === "stylesheet" || l.removeChild(d), d = y;
                        }
                    }
                    if (a === 0) {
                        e.removeChild(r), Ga(t);
                        return;
                    }
                    a--;
                } else l === "$" || l === "$?" || l === "$!" ? a++ : n = l.charCodeAt(0) - 48;
                else n = 0;
                l = r;
            }while (l);
            Ga(t);
        }
        function Hc(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var l = t;
                switch(t = t.nextSibling, l.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        Hc(l), Gi(l);
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
        function v1(e, t, l, n) {
            for(; e.nodeType === 1;){
                var a = l;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (n) {
                    if (!e[Wn]) switch(t){
                        case "meta":
                            if (!e.hasAttribute("itemprop")) break;
                            return e;
                        case "link":
                            if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence")) break;
                            if (r !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title)) break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                        case "script":
                            if (r = e.getAttribute("src"), (r !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                            return e;
                        default:
                            return e;
                    }
                } else if (t === "input" && e.type === "hidden") {
                    var r = a.name == null ? null : "" + a.name;
                    if (a.type === "hidden" && e.getAttribute("name") === r) return e;
                } else return e;
                if (e = wt(e.nextSibling), e === null) break;
            }
            return null;
        }
        function g1(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = wt(e.nextSibling), e === null)) return null;
            return e;
        }
        function Lc(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function b1(e, t) {
            var l = e.ownerDocument;
            if (e.data !== "$?" || l.readyState === "complete") t();
            else {
                var n = function() {
                    t(), l.removeEventListener("DOMContentLoaded", n);
                };
                l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
            }
        }
        function wt(e) {
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
        var Qc = null;
        function uh(e) {
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
        function ih(e, t, l) {
            switch(t = si(l), e){
                case "html":
                    if (e = t.documentElement, !e) throw Error(s(452));
                    return e;
                case "head":
                    if (e = t.head, !e) throw Error(s(453));
                    return e;
                case "body":
                    if (e = t.body, !e) throw Error(s(454));
                    return e;
                default:
                    throw Error(s(451));
            }
        }
        function qa(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            Gi(e);
        }
        var Mt = new Map, rh = new Set;
        function oi(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var nl = K.d;
        K.d = {
            f: S1,
            r: E1,
            D: _1,
            C: T1,
            L: R1,
            m: A1,
            X: N1,
            S: O1,
            M: x1
        };
        function S1() {
            var e = nl.f(), t = ti();
            return e || t;
        }
        function E1(e) {
            var t = on(e);
            t !== null && t.tag === 5 && t.type === "form" ? Nf(t) : nl.r(e);
        }
        var Yn = typeof document > "u" ? null : document;
        function ch(e, t, l) {
            var n = Yn;
            if (n && typeof t == "string" && t) {
                var a = _t(t);
                a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), rh.has(a) || (rh.add(a), e = {
                    rel: e,
                    crossOrigin: l,
                    href: t
                }, n.querySelector(a) === null && (t = n.createElement("link"), Je(t, "link", e), Ke(t), n.head.appendChild(t)));
            }
        }
        function _1(e) {
            nl.D(e), ch("dns-prefetch", e, null);
        }
        function T1(e, t) {
            nl.C(e, t), ch("preconnect", e, t);
        }
        function R1(e, t, l) {
            nl.L(e, t, l);
            var n = Yn;
            if (n && e && t) {
                var a = 'link[rel="preload"][as="' + _t(t) + '"]';
                t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + _t(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + _t(l.imageSizes) + '"]')) : a += '[href="' + _t(e) + '"]';
                var r = a;
                switch(t){
                    case "style":
                        r = Gn(e);
                        break;
                    case "script":
                        r = Vn(e);
                }
                Mt.has(r) || (e = b({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), Mt.set(r, e), n.querySelector(a) !== null || t === "style" && n.querySelector(ja(r)) || t === "script" && n.querySelector(ka(r)) || (t = n.createElement("link"), Je(t, "link", e), Ke(t), n.head.appendChild(t)));
            }
        }
        function A1(e, t) {
            nl.m(e, t);
            var l = Yn;
            if (l && e) {
                var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + _t(n) + '"][href="' + _t(e) + '"]', r = a;
                switch(n){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        r = Vn(e);
                }
                if (!Mt.has(r) && (e = b({
                    rel: "modulepreload",
                    href: e
                }, t), Mt.set(r, e), l.querySelector(a) === null)) {
                    switch(n){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (l.querySelector(ka(r))) return;
                    }
                    n = l.createElement("link"), Je(n, "link", e), Ke(n), l.head.appendChild(n);
                }
            }
        }
        function O1(e, t, l) {
            nl.S(e, t, l);
            var n = Yn;
            if (n && e) {
                var a = fn(n).hoistableStyles, r = Gn(e);
                t = t || "default";
                var d = a.get(r);
                if (!d) {
                    var y = {
                        loading: 0,
                        preload: null
                    };
                    if (d = n.querySelector(ja(r))) y.loading = 5;
                    else {
                        e = b({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = Mt.get(r)) && Kc(e, l);
                        var S = d = n.createElement("link");
                        Ke(S), Je(S, "link", e), S._p = new Promise(function(M, P) {
                            S.onload = M, S.onerror = P;
                        }), S.addEventListener("load", function() {
                            y.loading |= 1;
                        }), S.addEventListener("error", function() {
                            y.loading |= 2;
                        }), y.loading |= 4, fi(d, t, n);
                    }
                    d = {
                        type: "stylesheet",
                        instance: d,
                        count: 1,
                        state: y
                    }, a.set(r, d);
                }
            }
        }
        function N1(e, t) {
            nl.X(e, t);
            var l = Yn;
            if (l && e) {
                var n = fn(l).hoistableScripts, a = Vn(e), r = n.get(a);
                r || (r = l.querySelector(ka(a)), r || (e = b({
                    src: e,
                    async: !0
                }, t), (t = Mt.get(a)) && Yc(e, t), r = l.createElement("script"), Ke(r), Je(r, "link", e), l.head.appendChild(r)), r = {
                    type: "script",
                    instance: r,
                    count: 1,
                    state: null
                }, n.set(a, r));
            }
        }
        function x1(e, t) {
            nl.M(e, t);
            var l = Yn;
            if (l && e) {
                var n = fn(l).hoistableScripts, a = Vn(e), r = n.get(a);
                r || (r = l.querySelector(ka(a)), r || (e = b({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Mt.get(a)) && Yc(e, t), r = l.createElement("script"), Ke(r), Je(r, "link", e), l.head.appendChild(r)), r = {
                    type: "script",
                    instance: r,
                    count: 1,
                    state: null
                }, n.set(a, r));
            }
        }
        function sh(e, t, l, n) {
            var a = (a = ae.current) ? oi(a) : null;
            if (!a) throw Error(s(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Gn(l.href), l = fn(a).hoistableStyles, n = l.get(t), n || (n = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, l.set(t, n)), n) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                        e = Gn(l.href);
                        var r = fn(a).hoistableStyles, d = r.get(e);
                        if (d || (a = a.ownerDocument || a, d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, r.set(e, d), (r = a.querySelector(ja(e))) && !r._p && (d.instance = r, d.state.loading = 5), Mt.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, Mt.set(e, l), r || M1(a, e, l, d.state))), t && n === null) throw Error(s(528, ""));
                        return d;
                    }
                    if (t && n !== null) throw Error(s(529, ""));
                    return null;
                case "script":
                    return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Vn(l), l = fn(a).hoistableScripts, n = l.get(t), n || (n = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, l.set(t, n)), n) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(s(444, e));
            }
        }
        function Gn(e) {
            return 'href="' + _t(e) + '"';
        }
        function ja(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function oh(e) {
            return b({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function M1(e, t, l, n) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
                return n.loading |= 1;
            }), t.addEventListener("error", function() {
                return n.loading |= 2;
            }), Je(t, "link", l), Ke(t), e.head.appendChild(t));
        }
        function Vn(e) {
            return '[src="' + _t(e) + '"]';
        }
        function ka(e) {
            return "script[async]" + e;
        }
        function fh(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var n = e.querySelector('style[data-href~="' + _t(l.href) + '"]');
                    if (n) return t.instance = n, Ke(n), n;
                    var a = b({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return n = (e.ownerDocument || e).createElement("style"), Ke(n), Je(n, "style", a), fi(n, l.precedence, e), t.instance = n;
                case "stylesheet":
                    a = Gn(l.href);
                    var r = e.querySelector(ja(a));
                    if (r) return t.state.loading |= 4, t.instance = r, Ke(r), r;
                    n = oh(l), (a = Mt.get(a)) && Kc(n, a), r = (e.ownerDocument || e).createElement("link"), Ke(r);
                    var d = r;
                    return d._p = new Promise(function(y, S) {
                        d.onload = y, d.onerror = S;
                    }), Je(r, "link", n), t.state.loading |= 4, fi(r, l.precedence, e), t.instance = r;
                case "script":
                    return r = Vn(l.src), (a = e.querySelector(ka(r))) ? (t.instance = a, Ke(a), a) : (n = l, (a = Mt.get(r)) && (n = b({}, l), Yc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ke(a), Je(a, "link", n), e.head.appendChild(a), t.instance = a);
                case "void":
                    return null;
                default:
                    throw Error(s(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, fi(n, l.precedence, e));
            return t.instance;
        }
        function fi(e, t, l) {
            for(var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, r = a, d = 0; d < n.length; d++){
                var y = n[d];
                if (y.dataset.precedence === t) r = y;
                else if (r !== a) break;
            }
            r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
        }
        function Kc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Yc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var di = null;
        function dh(e, t, l) {
            if (di === null) {
                var n = new Map, a = di = new Map;
                a.set(l, n);
            } else a = di, n = a.get(l), n || (n = new Map, a.set(l, n));
            if (n.has(e)) return n;
            for(n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++){
                var r = l[a];
                if (!(r[Wn] || r[Ie] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var d = r.getAttribute(t) || "";
                    d = e + d;
                    var y = n.get(d);
                    y ? y.push(r) : n.set(d, [
                        r
                    ]);
                }
            }
            return n;
        }
        function hh(e, t, l) {
            e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
        }
        function C1(e, t, l) {
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
        function ph(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var Ha = null;
        function D1() {}
        function B1(e, t, l) {
            if (Ha === null) throw Error(s(475));
            var n = Ha;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var a = Gn(l.href), r = e.querySelector(ja(a));
                    if (r) {
                        e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = hi.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = r, Ke(r);
                        return;
                    }
                    r = e.ownerDocument || e, l = oh(l), (a = Mt.get(a)) && Kc(l, a), r = r.createElement("link"), Ke(r);
                    var d = r;
                    d._p = new Promise(function(y, S) {
                        d.onload = y, d.onerror = S;
                    }), Je(r, "link", l), t.instance = r;
                }
                n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = hi.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function w1() {
            if (Ha === null) throw Error(s(475));
            var e = Ha;
            return e.stylesheets && e.count === 0 && Gc(e, e.stylesheets), 0 < e.count ? function(t) {
                var l = setTimeout(function() {
                    if (e.stylesheets && Gc(e, e.stylesheets), e.unsuspend) {
                        var n = e.unsuspend;
                        e.unsuspend = null, n();
                    }
                }, 6e4);
                return e.unsuspend = t, function() {
                    e.unsuspend = null, clearTimeout(l);
                };
            } : null;
        }
        function hi() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Gc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var pi = null;
        function Gc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, pi = new Map, t.forEach(z1, e), pi = null, hi.call(e));
        }
        function z1(e, t) {
            if (!(t.state.loading & 4)) {
                var l = pi.get(e);
                if (l) var n = l.get(null);
                else {
                    l = new Map, pi.set(e, l);
                    for(var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < a.length; r++){
                        var d = a[r];
                        (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (l.set(d.dataset.precedence, d), n = d);
                    }
                    n && l.set(null, n);
                }
                a = t.instance, d = a.getAttribute("data-precedence"), r = l.get(d) || n, r === n && l.set(null, a), l.set(d, a), this.count++, n = hi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), r ? r.parentNode.insertBefore(a, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
            }
        }
        var La = {
            $$typeof: Q,
            Provider: null,
            Consumer: null,
            _currentValue: F,
            _currentValue2: F,
            _threadCount: 0
        };
        function U1(e, t, l, n, a, r, d, y) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Li(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Li(0), this.hiddenUpdates = Li(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = r, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = new Map;
        }
        function mh(e, t, l, n, a, r, d, y, S, M, P, j) {
            return e = new U1(e, t, l, d, y, S, M, j), t = 1, r === !0 && (t |= 24), r = mt(3, null, null, t), e.current = r, r.stateNode = e, t = Or(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: t
            }, Cr(r), e;
        }
        function yh(e) {
            return e ? (e = Tn, e) : Tn;
        }
        function vh(e, t, l, n, a, r) {
            a = yh(a), n.context === null ? n.context = a : n.pendingContext = a, n = pl(t), n.payload = {
                element: l
            }, r = r === void 0 ? null : r, r !== null && (n.callback = r), l = ml(e, n, t), l !== null && (St(l, e, t), va(l, e, t));
        }
        function gh(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var l = e.retryLane;
                e.retryLane = l !== 0 && l < t ? l : t;
            }
        }
        function Vc(e, t) {
            gh(e, t), (e = e.alternate) && gh(e, t);
        }
        function bh(e) {
            if (e.tag === 13) {
                var t = _n(e, 67108864);
                t !== null && St(t, e, 67108864), Vc(e, 67108864);
            }
        }
        var mi = !0;
        function P1(e, t, l, n) {
            var a = z.T;
            z.T = null;
            var r = K.p;
            try {
                K.p = 2, Xc(e, t, l, n);
            } finally{
                K.p = r, z.T = a;
            }
        }
        function q1(e, t, l, n) {
            var a = z.T;
            z.T = null;
            var r = K.p;
            try {
                K.p = 8, Xc(e, t, l, n);
            } finally{
                K.p = r, z.T = a;
            }
        }
        function Xc(e, t, l, n) {
            if (mi) {
                var a = Zc(n);
                if (a === null) zc(e, t, n, yi, l), Eh(e, n);
                else if (k1(a, e, t, l, n)) n.stopPropagation();
                else if (Eh(e, n), t & 4 && -1 < j1.indexOf(e)) {
                    for(; a !== null;){
                        var r = on(a);
                        if (r !== null) switch(r.tag){
                            case 3:
                                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                                    var d = ql(r.pendingLanes);
                                    if (d !== 0) {
                                        var y = r;
                                        for(y.pendingLanes |= 2, y.entangledLanes |= 2; d;){
                                            var S = 1 << 31 - ht(d);
                                            y.entanglements[1] |= S, d &= ~S;
                                        }
                                        Ht(r), (Se & 6) === 0 && (Iu = Ut() + 500, za(0));
                                    }
                                }
                                break;
                            case 13:
                                y = _n(r, 2), y !== null && St(y, r, 2), ti(), Vc(r, 2);
                        }
                        if (r = Zc(n), r === null && zc(e, t, n, yi, l), r === a) break;
                        a = r;
                    }
                    a !== null && n.stopPropagation();
                } else zc(e, t, n, null, l);
            }
        }
        function Zc(e) {
            return e = Ii(e), $c(e);
        }
        var yi = null;
        function $c(e) {
            if (yi = null, e = sn(e), e !== null) {
                var t = f(e);
                if (t === null) e = null;
                else {
                    var l = t.tag;
                    if (l === 13) {
                        if (e = m(t), e !== null) return e;
                        e = null;
                    } else if (l === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null;
                    } else t !== e && (e = null);
                }
            }
            return yi = e, null;
        }
        function Sh(e) {
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
                    switch(Tm()){
                        case Bs:
                            return 2;
                        case ws:
                            return 8;
                        case cu:
                        case Rm:
                            return 32;
                        case zs:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Jc = !1, xl = null, Ml = null, Cl = null, Qa = new Map, Ka = new Map, Dl = [], j1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Eh(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    xl = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Ml = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Cl = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Qa.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Ka.delete(t.pointerId);
            }
        }
        function Ya(e, t, l, n, a, r) {
            return e === null || e.nativeEvent !== r ? (e = {
                blockedOn: t,
                domEventName: l,
                eventSystemFlags: n,
                nativeEvent: r,
                targetContainers: [
                    a
                ]
            }, t !== null && (t = on(t), t !== null && bh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
        }
        function k1(e, t, l, n, a) {
            switch(t){
                case "focusin":
                    return xl = Ya(xl, e, t, l, n, a), !0;
                case "dragenter":
                    return Ml = Ya(Ml, e, t, l, n, a), !0;
                case "mouseover":
                    return Cl = Ya(Cl, e, t, l, n, a), !0;
                case "pointerover":
                    var r = a.pointerId;
                    return Qa.set(r, Ya(Qa.get(r) || null, e, t, l, n, a)), !0;
                case "gotpointercapture":
                    return r = a.pointerId, Ka.set(r, Ya(Ka.get(r) || null, e, t, l, n, a)), !0;
            }
            return !1;
        }
        function _h(e) {
            var t = sn(e.target);
            if (t !== null) {
                var l = f(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = m(l), t !== null) {
                            e.blockedOn = t, Bm(e.priority, function() {
                                if (l.tag === 13) {
                                    var n = bt();
                                    n = Qi(n);
                                    var a = _n(l, n);
                                    a !== null && St(a, l, n), Vc(l, n);
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
        function vi(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var l = Zc(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var n = new l.constructor(l.type, l);
                    Wi = n, l.target.dispatchEvent(n), Wi = null;
                } else return t = on(l), t !== null && bh(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function Th(e, t, l) {
            vi(e) && l.delete(t);
        }
        function H1() {
            Jc = !1, xl !== null && vi(xl) && (xl = null), Ml !== null && vi(Ml) && (Ml = null), Cl !== null && vi(Cl) && (Cl = null), Qa.forEach(Th), Ka.forEach(Th);
        }
        function gi(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Jc || (Jc = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, H1)));
        }
        var bi = null;
        function Rh(e) {
            bi !== e && (bi = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
                bi === e && (bi = null);
                for(var t = 0; t < e.length; t += 3){
                    var l = e[t], n = e[t + 1], a = e[t + 2];
                    if (typeof n != "function") {
                        if ($c(n || l) === null) continue;
                        break;
                    }
                    var r = on(l);
                    r !== null && (e.splice(t, 3), t -= 3, $r(r, {
                        pending: !0,
                        data: a,
                        method: l.method,
                        action: n
                    }, n, a));
                }
            }));
        }
        function Ga(e) {
            function t(S) {
                return gi(S, e);
            }
            xl !== null && gi(xl, e), Ml !== null && gi(Ml, e), Cl !== null && gi(Cl, e), Qa.forEach(t), Ka.forEach(t);
            for(var l = 0; l < Dl.length; l++){
                var n = Dl[l];
                n.blockedOn === e && (n.blockedOn = null);
            }
            for(; 0 < Dl.length && (l = Dl[0], l.blockedOn === null);)_h(l), l.blockedOn === null && Dl.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(n = 0; n < l.length; n += 3){
                var a = l[n], r = l[n + 1], d = a[ut] || null;
                if (typeof r == "function") d || Rh(l);
                else if (d) {
                    var y = null;
                    if (r && r.hasAttribute("formAction")) {
                        if (a = r, d = r[ut] || null) y = d.formAction;
                        else if ($c(a) !== null) continue;
                    } else y = d.action;
                    typeof y == "function" ? l[n + 1] = y : (l.splice(n, 3), n -= 3), Rh(l);
                }
            }
        }
        function Fc(e) {
            this._internalRoot = e;
        }
        Si.prototype.render = Fc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(s(409));
            var l = t.current, n = bt();
            vh(l, n, e, t, null, null);
        }, Si.prototype.unmount = Fc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                vh(e.current, 2, null, e, null, null), ti(), t[cn] = null;
            }
        };
        function Si(e) {
            this._internalRoot = e;
        }
        Si.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = ks();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Dl.length && t !== 0 && t < Dl[l].priority; l++);
                Dl.splice(l, 0, e), l === 0 && _h(e);
            }
        };
        var Ah = i.version;
        if (Ah !== "19.1.0") throw Error(s(527, Ah, "19.1.0"));
        K.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
            return e = h(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var L1 = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: z,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Ei.isDisabled && Ei.supportsFiber) try {
                $n = Ei.inject(L1), dt = Ei;
            } catch  {}
        }
        return Xa.createRoot = function(e, t) {
            if (!o(e)) throw Error(s(299));
            var l = !1, n = "", a = Lf, r = Qf, d = Kf, y = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)), t = mh(e, 1, !1, null, null, l, n, a, r, d, y, null), e[cn] = t.current, wc(e), new Fc(t);
        }, Xa.hydrateRoot = function(e, t, l) {
            if (!o(e)) throw Error(s(299));
            var n = !1, a = "", r = Lf, d = Qf, y = Kf, S = null, M = null;
            return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (r = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (y = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (S = l.unstable_transitionCallbacks), l.formState !== void 0 && (M = l.formState)), t = mh(e, 1, !0, t, l ?? null, n, a, r, d, y, S, M), t.context = yh(null), l = t.current, n = bt(), n = Qi(n), a = pl(n), a.callback = null, ml(l, a, n), l = n, t.current.lanes = l, Fn(t, l), Ht(t), e[cn] = t.current, wc(e), new Si(t);
        }, Xa.version = "19.1.0", Xa;
    }
    var Uh;
    function W1() {
        if (Uh) return es.exports;
        Uh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (i) {
                console.error(i);
            }
        }
        return u(), es.exports = F1(), es.exports;
    }
    var I1 = W1(), as = {
        exports: {}
    }, us = {};
    var Ph;
    function ey() {
        if (Ph) return us;
        Ph = 1;
        var u = wi();
        function i(h, v) {
            return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
        }
        var c = typeof Object.is == "function" ? Object.is : i, s = u.useSyncExternalStore, o = u.useRef, f = u.useEffect, m = u.useMemo, p = u.useDebugValue;
        return us.useSyncExternalStoreWithSelector = function(h, v, b, _, g) {
            var R = o(null);
            if (R.current === null) {
                var O = {
                    hasValue: !1,
                    value: null
                };
                R.current = O;
            } else O = R.current;
            R = m(function() {
                function U(Y) {
                    if (!w) {
                        if (w = !0, H = Y, Y = _(Y), g !== void 0 && O.hasValue) {
                            var $ = O.value;
                            if (g($, Y)) return Q = $;
                        }
                        return Q = Y;
                    }
                    if ($ = Q, c(H, Y)) return $;
                    var te = _(Y);
                    return g !== void 0 && g($, te) ? (H = Y, $) : (H = Y, Q = te);
                }
                var w = !1, H, Q, G = b === void 0 ? null : b;
                return [
                    function() {
                        return U(v());
                    },
                    G === null ? void 0 : function() {
                        return U(G());
                    }
                ];
            }, [
                v,
                b,
                _,
                g
            ]);
            var C = s(h, R[0], R[1]);
            return f(function() {
                O.hasValue = !0, O.value = C;
            }, [
                C
            ]), p(C), C;
        }, us;
    }
    var qh;
    function ty() {
        return qh || (qh = 1, as.exports = ey()), as.exports;
    }
    var ly = ty();
    function ny(u) {
        u();
    }
    function ay() {
        let u = null, i = null;
        return {
            clear () {
                u = null, i = null;
            },
            notify () {
                ny(()=>{
                    let c = u;
                    for(; c;)c.callback(), c = c.next;
                });
            },
            get () {
                const c = [];
                let s = u;
                for(; s;)c.push(s), s = s.next;
                return c;
            },
            subscribe (c) {
                let s = !0;
                const o = i = {
                    callback: c,
                    next: null,
                    prev: i
                };
                return o.prev ? o.prev.next = o : u = o, function() {
                    !s || u === null || (s = !1, o.next ? o.next.prev = o.prev : i = o.prev, o.prev ? o.prev.next = o.next : u = o.next);
                };
            }
        };
    }
    var jh = {
        notify () {},
        get: ()=>[]
    };
    function uy(u, i) {
        let c, s = jh, o = 0, f = !1;
        function m(C) {
            b();
            const U = s.subscribe(C);
            let w = !1;
            return ()=>{
                w || (w = !0, U(), _());
            };
        }
        function p() {
            s.notify();
        }
        function h() {
            O.onStateChange && O.onStateChange();
        }
        function v() {
            return f;
        }
        function b() {
            o++, c || (c = u.subscribe(h), s = ay());
        }
        function _() {
            o--, c && o === 0 && (c(), c = void 0, s.clear(), s = jh);
        }
        function g() {
            f || (f = !0, b());
        }
        function R() {
            f && (f = !1, _());
        }
        const O = {
            addNestedSub: m,
            notifyNestedSubs: p,
            handleChangeWrapper: h,
            isSubscribed: v,
            trySubscribe: g,
            tryUnsubscribe: R,
            getListeners: ()=>s
        };
        return O;
    }
    var iy = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ry = iy(), cy = ()=>typeof navigator < "u" && navigator.product === "ReactNative", sy = cy(), oy = ()=>ry || sy ? A.useLayoutEffect : A.useEffect, fy = oy(), dy = Symbol.for("react-redux-context"), hy = typeof globalThis < "u" ? globalThis : {};
    function py() {
        if (!A.createContext) return {};
        const u = hy[dy] ??= new Map;
        let i = u.get(A.createContext);
        return i || (i = A.createContext(null), u.set(A.createContext, i)), i;
    }
    var Pl = py();
    function my(u) {
        const { children: i, context: c, serverState: s, store: o } = u, f = A.useMemo(()=>{
            const h = uy(o);
            return {
                store: o,
                subscription: h,
                getServerState: s ? ()=>s : void 0
            };
        }, [
            o,
            s
        ]), m = A.useMemo(()=>o.getState(), [
            o
        ]);
        fy(()=>{
            const { subscription: h } = f;
            return h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), m !== o.getState() && h.notifyNestedSubs(), ()=>{
                h.tryUnsubscribe(), h.onStateChange = void 0;
            };
        }, [
            f,
            m
        ]);
        const p = c || Pl;
        return A.createElement(p.Provider, {
            value: f
        }, i);
    }
    var yy = my;
    function Ss(u = Pl) {
        return function() {
            return A.useContext(u);
        };
    }
    var op = Ss();
    function fp(u = Pl) {
        const i = u === Pl ? op : Ss(u), c = ()=>{
            const { store: s } = i();
            return s;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    var vy = fp();
    function gy(u = Pl) {
        const i = u === Pl ? vy : fp(u), c = ()=>i().dispatch;
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    let by;
    Xn = gy();
    by = (u, i)=>u === i;
    function Sy(u = Pl) {
        const i = u === Pl ? op : Ss(u), c = (s, o = {})=>{
            const { equalityFn: f = by } = typeof o == "function" ? {
                equalityFn: o
            } : o, m = i(), { store: p, subscription: h, getServerState: v } = m;
            A.useRef(!0);
            const b = A.useCallback({
                [s.name] (g) {
                    return s(g);
                }
            }[s.name], [
                s
            ]), _ = ly.useSyncExternalStoreWithSelector(h.addNestedSub, p.getState, v || p.getState, b, f);
            return A.useDebugValue(_), _;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    an = Sy();
    function Fe(u) {
        return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Ey = typeof Symbol == "function" && Symbol.observable || "@@observable", kh = Ey, is = ()=>Math.random().toString(36).substring(7).split("").join("."), _y = {
        INIT: `@@redux/INIT${is()}`,
        REPLACE: `@@redux/REPLACE${is()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${is()}`
    }, Ci = _y;
    function dp(u) {
        if (typeof u != "object" || u === null) return !1;
        let i = u;
        for(; Object.getPrototypeOf(i) !== null;)i = Object.getPrototypeOf(i);
        return Object.getPrototypeOf(u) === i || Object.getPrototypeOf(u) === null;
    }
    function Es(u, i, c) {
        if (typeof u != "function") throw new Error(Fe(2));
        if (typeof i == "function" && typeof c == "function" || typeof c == "function" && typeof arguments[3] == "function") throw new Error(Fe(0));
        if (typeof i == "function" && typeof c > "u" && (c = i, i = void 0), typeof c < "u") {
            if (typeof c != "function") throw new Error(Fe(1));
            return c(Es)(u, i);
        }
        let s = u, o = i, f = new Map, m = f, p = 0, h = !1;
        function v() {
            m === f && (m = new Map, f.forEach((U, w)=>{
                m.set(w, U);
            }));
        }
        function b() {
            if (h) throw new Error(Fe(3));
            return o;
        }
        function _(U) {
            if (typeof U != "function") throw new Error(Fe(4));
            if (h) throw new Error(Fe(5));
            let w = !0;
            v();
            const H = p++;
            return m.set(H, U), function() {
                if (w) {
                    if (h) throw new Error(Fe(6));
                    w = !1, v(), m.delete(H), f = null;
                }
            };
        }
        function g(U) {
            if (!dp(U)) throw new Error(Fe(7));
            if (typeof U.type > "u") throw new Error(Fe(8));
            if (typeof U.type != "string") throw new Error(Fe(17));
            if (h) throw new Error(Fe(9));
            try {
                h = !0, o = s(o, U);
            } finally{
                h = !1;
            }
            return (f = m).forEach((H)=>{
                H();
            }), U;
        }
        function R(U) {
            if (typeof U != "function") throw new Error(Fe(10));
            s = U, g({
                type: Ci.REPLACE
            });
        }
        function O() {
            const U = _;
            return {
                subscribe (w) {
                    if (typeof w != "object" || w === null) throw new Error(Fe(11));
                    function H() {
                        const G = w;
                        G.next && G.next(b());
                    }
                    return H(), {
                        unsubscribe: U(H)
                    };
                },
                [kh] () {
                    return this;
                }
            };
        }
        return g({
            type: Ci.INIT
        }), {
            dispatch: g,
            subscribe: _,
            getState: b,
            replaceReducer: R,
            [kh]: O
        };
    }
    function Ty(u) {
        Object.keys(u).forEach((i)=>{
            const c = u[i];
            if (typeof c(void 0, {
                type: Ci.INIT
            }) > "u") throw new Error(Fe(12));
            if (typeof c(void 0, {
                type: Ci.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(Fe(13));
        });
    }
    function hp(u) {
        const i = Object.keys(u), c = {};
        for(let f = 0; f < i.length; f++){
            const m = i[f];
            typeof u[m] == "function" && (c[m] = u[m]);
        }
        const s = Object.keys(c);
        let o;
        try {
            Ty(c);
        } catch (f) {
            o = f;
        }
        return function(m = {}, p) {
            if (o) throw o;
            let h = !1;
            const v = {};
            for(let b = 0; b < s.length; b++){
                const _ = s[b], g = c[_], R = m[_], O = g(R, p);
                if (typeof O > "u") throw p && p.type, new Error(Fe(14));
                v[_] = O, h = h || O !== R;
            }
            return h = h || s.length !== Object.keys(m).length, h ? v : m;
        };
    }
    function Di(...u) {
        return u.length === 0 ? (i)=>i : u.length === 1 ? u[0] : u.reduce((i, c)=>(...s)=>i(c(...s)));
    }
    function Ry(...u) {
        return (i)=>(c, s)=>{
                const o = i(c, s);
                let f = ()=>{
                    throw new Error(Fe(15));
                };
                const m = {
                    getState: o.getState,
                    dispatch: (h, ...v)=>f(h, ...v)
                }, p = u.map((h)=>h(m));
                return f = Di(...p)(o.dispatch), {
                    ...o,
                    dispatch: f
                };
            };
    }
    function Ay(u, i = `expected a function, instead received ${typeof u}`) {
        if (typeof u != "function") throw new TypeError(i);
    }
    function Oy(u, i = `expected an object, instead received ${typeof u}`) {
        if (typeof u != "object") throw new TypeError(i);
    }
    function Ny(u, i = "expected all items to be functions, instead received the following types: ") {
        if (!u.every((c)=>typeof c == "function")) {
            const c = u.map((s)=>typeof s == "function" ? `function ${s.name || "unnamed"}()` : typeof s).join(", ");
            throw new TypeError(`${i}[${c}]`);
        }
    }
    var Hh = (u)=>Array.isArray(u) ? u : [
            u
        ];
    function xy(u) {
        const i = Array.isArray(u[0]) ? u[0] : u;
        return Ny(i, "createSelector expects all input-selectors to be functions, but received the following types: "), i;
    }
    function My(u, i) {
        const c = [], { length: s } = u;
        for(let o = 0; o < s; o++)c.push(u[o].apply(null, i));
        return c;
    }
    var Cy = class {
        constructor(u){
            this.value = u;
        }
        deref() {
            return this.value;
        }
    }, Dy = typeof WeakRef < "u" ? WeakRef : Cy, By = 0, Lh = 1;
    function _i() {
        return {
            s: By,
            v: void 0,
            o: null,
            p: null
        };
    }
    function pp(u, i = {}) {
        let c = _i();
        const { resultEqualityCheck: s } = i;
        let o, f = 0;
        function m() {
            let p = c;
            const { length: h } = arguments;
            for(let _ = 0, g = h; _ < g; _++){
                const R = arguments[_];
                if (typeof R == "function" || typeof R == "object" && R !== null) {
                    let O = p.o;
                    O === null && (p.o = O = new WeakMap);
                    const C = O.get(R);
                    C === void 0 ? (p = _i(), O.set(R, p)) : p = C;
                } else {
                    let O = p.p;
                    O === null && (p.p = O = new Map);
                    const C = O.get(R);
                    C === void 0 ? (p = _i(), O.set(R, p)) : p = C;
                }
            }
            const v = p;
            let b;
            if (p.s === Lh) b = p.v;
            else if (b = u.apply(null, arguments), f++, s) {
                const _ = o?.deref?.() ?? o;
                _ != null && s(_, b) && (b = _, f !== 0 && f--), o = typeof b == "object" && b !== null || typeof b == "function" ? new Dy(b) : b;
            }
            return v.s = Lh, v.v = b, b;
        }
        return m.clearCache = ()=>{
            c = _i(), m.resetResultsCount();
        }, m.resultsCount = ()=>f, m.resetResultsCount = ()=>{
            f = 0;
        }, m;
    }
    function wy(u, ...i) {
        const c = typeof u == "function" ? {
            memoize: u,
            memoizeOptions: i
        } : u, s = (...o)=>{
            let f = 0, m = 0, p, h = {}, v = o.pop();
            typeof v == "object" && (h = v, v = o.pop()), Ay(v, `createSelector expects an output function after the inputs, but received: [${typeof v}]`);
            const b = {
                ...c,
                ...h
            }, { memoize: _, memoizeOptions: g = [], argsMemoize: R = pp, argsMemoizeOptions: O = [] } = b, C = Hh(g), U = Hh(O), w = xy(o), H = _(function() {
                return f++, v.apply(null, arguments);
            }, ...C), Q = R(function() {
                m++;
                const Y = My(w, arguments);
                return p = H.apply(null, Y), p;
            }, ...U);
            return Object.assign(Q, {
                resultFunc: v,
                memoizedResultFunc: H,
                dependencies: w,
                dependencyRecomputations: ()=>m,
                resetDependencyRecomputations: ()=>{
                    m = 0;
                },
                lastResult: ()=>p,
                recomputations: ()=>f,
                resetRecomputations: ()=>{
                    f = 0;
                },
                memoize: _,
                argsMemoize: R
            });
        };
        return Object.assign(s, {
            withTypes: ()=>s
        }), s;
    }
    var _s = wy(pp), zy = Object.assign((u, i = _s)=>{
        Oy(u, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof u}`);
        const c = Object.keys(u), s = c.map((f)=>u[f]);
        return i(s, (...f)=>f.reduce((m, p, h)=>(m[c[h]] = p, m), {}));
    }, {
        withTypes: ()=>zy
    });
    function mp(u) {
        return ({ dispatch: c, getState: s })=>(o)=>(f)=>typeof f == "function" ? f(c, s, u) : o(f);
    }
    var Uy = mp(), Py = mp, qy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Di : Di.apply(null, arguments);
    }, yp = class Fa extends Array {
        constructor(...i){
            super(...i), Object.setPrototypeOf(this, Fa.prototype);
        }
        static get [Symbol.species]() {
            return Fa;
        }
        concat(...i) {
            return super.concat.apply(this, i);
        }
        prepend(...i) {
            return i.length === 1 && Array.isArray(i[0]) ? new Fa(...i[0].concat(this)) : new Fa(...i.concat(this));
        }
    };
    function jy(u) {
        return typeof u == "boolean";
    }
    var ky = ()=>function(i) {
            const { thunk: c = !0, immutableCheck: s = !0, serializableCheck: o = !0, actionCreatorCheck: f = !0 } = i ?? {};
            let m = new yp;
            return c && (jy(c) ? m.push(Uy) : m.push(Py(c.extraArgument))), m;
        }, Hy = "RTK_autoBatch", Qh = (u)=>(i)=>{
            setTimeout(i, u);
        }, Ly = (u = {
        type: "raf"
    })=>(i)=>(...c)=>{
                const s = i(...c);
                let o = !0, f = !1, m = !1;
                const p = new Set, h = u.type === "tick" ? queueMicrotask : u.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Qh(10) : u.type === "callback" ? u.queueNotification : Qh(u.timeout), v = ()=>{
                    m = !1, f && (f = !1, p.forEach((b)=>b()));
                };
                return Object.assign({}, s, {
                    subscribe (b) {
                        const _ = ()=>o && b(), g = s.subscribe(_);
                        return p.add(b), ()=>{
                            g(), p.delete(b);
                        };
                    },
                    dispatch (b) {
                        try {
                            return o = !b?.meta?.[Hy], f = !o, f && (m || (m = !0, h(v))), s.dispatch(b);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, Qy = (u)=>function(c) {
            const { autoBatch: s = !0 } = c ?? {};
            let o = new yp(u);
            return s && o.push(Ly(typeof s == "object" ? s : void 0)), o;
        };
    function Ky(u) {
        const i = ky(), { reducer: c = void 0, middleware: s, devTools: o = !0, preloadedState: f = void 0, enhancers: m = void 0 } = u || {};
        let p;
        if (typeof c == "function") p = c;
        else if (dp(c)) p = hp(c);
        else throw new Error(Yy(1));
        let h;
        typeof s == "function" ? h = s(i) : h = i();
        let v = Di;
        o && (v = qy({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const b = Ry(...h), _ = Qy(b);
        let g = typeof m == "function" ? m(_) : _();
        const R = v(...g);
        return Es(p, f, R);
    }
    function Yy(u) {
        return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Ts = "persist:", vp = "persist/FLUSH", Rs = "persist/REHYDRATE", gp = "persist/PAUSE", bp = "persist/PERSIST", Sp = "persist/PURGE", Ep = "persist/REGISTER", Gy = -1;
    function Oi(u) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Oi = function(c) {
            return typeof c;
        } : Oi = function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        }, Oi(u);
    }
    function Kh(u, i) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(u);
            i && (s = s.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, s);
        }
        return c;
    }
    function Vy(u) {
        for(var i = 1; i < arguments.length; i++){
            var c = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Kh(c, !0).forEach(function(s) {
                Xy(u, s, c[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Kh(c).forEach(function(s) {
                Object.defineProperty(u, s, Object.getOwnPropertyDescriptor(c, s));
            });
        }
        return u;
    }
    function Xy(u, i, c) {
        return i in u ? Object.defineProperty(u, i, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = c, u;
    }
    function Zy(u, i, c, s) {
        s.debug;
        var o = Vy({}, c);
        return u && Oi(u) === "object" && Object.keys(u).forEach(function(f) {
            f !== "_persist" && i[f] === c[f] && (o[f] = u[f]);
        }), o;
    }
    function $y(u) {
        var i = u.blacklist || null, c = u.whitelist || null, s = u.transforms || [], o = u.throttle || 0, f = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Ts).concat(u.key), m = u.storage, p;
        u.serialize === !1 ? p = function(Y) {
            return Y;
        } : typeof u.serialize == "function" ? p = u.serialize : p = Jy;
        var h = u.writeFailHandler || null, v = {}, b = {}, _ = [], g = null, R = null, O = function(Y) {
            Object.keys(Y).forEach(function($) {
                w($) && v[$] !== Y[$] && _.indexOf($) === -1 && _.push($);
            }), Object.keys(v).forEach(function($) {
                Y[$] === void 0 && w($) && _.indexOf($) === -1 && v[$] !== void 0 && _.push($);
            }), g === null && (g = setInterval(C, o)), v = Y;
        };
        function C() {
            if (_.length === 0) {
                g && clearInterval(g), g = null;
                return;
            }
            var G = _.shift(), Y = s.reduce(function($, te) {
                return te.in($, G, v);
            }, v[G]);
            if (Y !== void 0) try {
                b[G] = p(Y);
            } catch ($) {
                console.error("redux-persist/createPersistoid: error serializing state", $);
            }
            else delete b[G];
            _.length === 0 && U();
        }
        function U() {
            Object.keys(b).forEach(function(G) {
                v[G] === void 0 && delete b[G];
            }), R = m.setItem(f, p(b)).catch(H);
        }
        function w(G) {
            return !(c && c.indexOf(G) === -1 && G !== "_persist" || i && i.indexOf(G) !== -1);
        }
        function H(G) {
            h && h(G);
        }
        var Q = function() {
            for(; _.length !== 0;)C();
            return R || Promise.resolve();
        };
        return {
            update: O,
            flush: Q
        };
    }
    function Jy(u) {
        return JSON.stringify(u);
    }
    function Fy(u) {
        var i = u.transforms || [], c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Ts).concat(u.key), s = u.storage;
        u.debug;
        var o;
        return u.deserialize === !1 ? o = function(m) {
            return m;
        } : typeof u.deserialize == "function" ? o = u.deserialize : o = Wy, s.getItem(c).then(function(f) {
            if (f) try {
                var m = {}, p = o(f);
                return Object.keys(p).forEach(function(h) {
                    m[h] = i.reduceRight(function(v, b) {
                        return b.out(v, h, p);
                    }, o(p[h]));
                }), m;
            } catch (h) {
                throw h;
            }
            else return;
        });
    }
    function Wy(u) {
        return JSON.parse(u);
    }
    function Iy(u) {
        var i = u.storage, c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Ts).concat(u.key);
        return i.removeItem(c, ev);
    }
    function ev(u) {}
    function Yh(u, i) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(u);
            i && (s = s.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, s);
        }
        return c;
    }
    function al(u) {
        for(var i = 1; i < arguments.length; i++){
            var c = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Yh(c, !0).forEach(function(s) {
                tv(u, s, c[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Yh(c).forEach(function(s) {
                Object.defineProperty(u, s, Object.getOwnPropertyDescriptor(c, s));
            });
        }
        return u;
    }
    function tv(u, i, c) {
        return i in u ? Object.defineProperty(u, i, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = c, u;
    }
    function lv(u, i) {
        if (u == null) return {};
        var c = nv(u, i), s, o;
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            for(o = 0; o < f.length; o++)s = f[o], !(i.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(u, s) && (c[s] = u[s]);
        }
        return c;
    }
    function nv(u, i) {
        if (u == null) return {};
        var c = {}, s = Object.keys(u), o, f;
        for(f = 0; f < s.length; f++)o = s[f], !(i.indexOf(o) >= 0) && (c[o] = u[o]);
        return c;
    }
    var av = 5e3;
    function uv(u, i) {
        var c = u.version !== void 0 ? u.version : Gy;
        u.debug;
        var s = u.stateReconciler === void 0 ? Zy : u.stateReconciler, o = u.getStoredState || Fy, f = u.timeout !== void 0 ? u.timeout : av, m = null, p = !1, h = !0, v = function(_) {
            return _._persist.rehydrated && m && !h && m.update(_), _;
        };
        return function(b, _) {
            var g = b || {}, R = g._persist, O = lv(g, [
                "_persist"
            ]), C = O;
            if (_.type === bp) {
                var U = !1, w = function(se, ue) {
                    U || (_.rehydrate(u.key, se, ue), U = !0);
                };
                if (f && setTimeout(function() {
                    !U && w(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(u.key, '"')));
                }, f), h = !1, m || (m = $y(u)), R) return al({}, i(C, _), {
                    _persist: R
                });
                if (typeof _.rehydrate != "function" || typeof _.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return _.register(u.key), o(u).then(function(te) {
                    var se = u.migrate || function(ue, ze) {
                        return Promise.resolve(ue);
                    };
                    se(te, c).then(function(ue) {
                        w(ue);
                    }, function(ue) {
                        w(void 0, ue);
                    });
                }, function(te) {
                    w(void 0, te);
                }), al({}, i(C, _), {
                    _persist: {
                        version: c,
                        rehydrated: !1
                    }
                });
            } else {
                if (_.type === Sp) return p = !0, _.result(Iy(u)), al({}, i(C, _), {
                    _persist: R
                });
                if (_.type === vp) return _.result(m && m.flush()), al({}, i(C, _), {
                    _persist: R
                });
                if (_.type === gp) h = !0;
                else if (_.type === Rs) {
                    if (p) return al({}, C, {
                        _persist: al({}, R, {
                            rehydrated: !0
                        })
                    });
                    if (_.key === u.key) {
                        var H = i(C, _), Q = _.payload, G = s !== !1 && Q !== void 0 ? s(Q, b, H, u) : H, Y = al({}, G, {
                            _persist: al({}, R, {
                                rehydrated: !0
                            })
                        });
                        return v(Y);
                    }
                }
            }
            if (!R) return i(b, _);
            var $ = i(C, _);
            return $ === C ? b : v(al({}, $, {
                _persist: R
            }));
        };
    }
    function Gh(u) {
        return cv(u) || rv(u) || iv();
    }
    function iv() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function rv(u) {
        if (Symbol.iterator in Object(u) || Object.prototype.toString.call(u) === "[object Arguments]") return Array.from(u);
    }
    function cv(u) {
        if (Array.isArray(u)) {
            for(var i = 0, c = new Array(u.length); i < u.length; i++)c[i] = u[i];
            return c;
        }
    }
    function Vh(u, i) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(u);
            i && (s = s.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, s);
        }
        return c;
    }
    function ps(u) {
        for(var i = 1; i < arguments.length; i++){
            var c = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Vh(c, !0).forEach(function(s) {
                sv(u, s, c[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Vh(c).forEach(function(s) {
                Object.defineProperty(u, s, Object.getOwnPropertyDescriptor(c, s));
            });
        }
        return u;
    }
    function sv(u, i, c) {
        return i in u ? Object.defineProperty(u, i, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = c, u;
    }
    var _p = {
        registry: [],
        bootstrapped: !1
    }, ov = function() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _p, c = arguments.length > 1 ? arguments[1] : void 0;
        switch(c.type){
            case Ep:
                return ps({}, i, {
                    registry: [].concat(Gh(i.registry), [
                        c.key
                    ])
                });
            case Rs:
                var s = i.registry.indexOf(c.key), o = Gh(i.registry);
                return o.splice(s, 1), ps({}, i, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return i;
        }
    };
    function fv(u, i, c) {
        var s = Es(ov, _p, void 0), o = function(h) {
            s.dispatch({
                type: Ep,
                key: h
            });
        }, f = function(h, v, b) {
            var _ = {
                type: Rs,
                payload: v,
                err: b,
                key: h
            };
            u.dispatch(_), s.dispatch(_);
        }, m = ps({}, s, {
            purge: function() {
                var h = [];
                return u.dispatch({
                    type: Sp,
                    result: function(b) {
                        h.push(b);
                    }
                }), Promise.all(h);
            },
            flush: function() {
                var h = [];
                return u.dispatch({
                    type: vp,
                    result: function(b) {
                        h.push(b);
                    }
                }), Promise.all(h);
            },
            pause: function() {
                u.dispatch({
                    type: gp
                });
            },
            persist: function() {
                u.dispatch({
                    type: bp,
                    register: o,
                    rehydrate: f
                });
            }
        });
        return m.persist(), m;
    }
    const lt = "w", Ct = "b", Xe = "p", ms = "n", Ni = "b", Wa = "r", Ul = "q", Le = "k", rs = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    class Ti {
        color;
        from;
        to;
        piece;
        captured;
        promotion;
        flags;
        san;
        lan;
        before;
        after;
        constructor(i, c){
            const { color: s, piece: o, from: f, to: m, flags: p, captured: h, promotion: v } = c, b = We(f), _ = We(m);
            this.color = s, this.piece = o, this.from = b, this.to = _, this.san = i._moveToSan(c, i._moves({
                legal: !0
            })), this.lan = b + _, this.before = i.fen(), i._makeMove(c), this.after = i.fen(), i._undoMove(), this.flags = "";
            for(const g in ce)ce[g] & p && (this.flags += tn[g]);
            h && (this.captured = h), v && (this.promotion = v, this.lan += v);
        }
        isCapture() {
            return this.flags.indexOf(tn.CAPTURE) > -1;
        }
        isPromotion() {
            return this.flags.indexOf(tn.PROMOTION) > -1;
        }
        isEnPassant() {
            return this.flags.indexOf(tn.EP_CAPTURE) > -1;
        }
        isKingsideCastle() {
            return this.flags.indexOf(tn.KSIDE_CASTLE) > -1;
        }
        isQueensideCastle() {
            return this.flags.indexOf(tn.QSIDE_CASTLE) > -1;
        }
        isBigPawn() {
            return this.flags.indexOf(tn.BIG_PAWN) > -1;
        }
    }
    const ot = -1, tn = {
        NORMAL: "n",
        CAPTURE: "c",
        BIG_PAWN: "b",
        EP_CAPTURE: "e",
        PROMOTION: "p",
        KSIDE_CASTLE: "k",
        QSIDE_CASTLE: "q"
    }, ce = {
        NORMAL: 1,
        CAPTURE: 2,
        BIG_PAWN: 4,
        EP_CAPTURE: 8,
        PROMOTION: 16,
        KSIDE_CASTLE: 32,
        QSIDE_CASTLE: 64
    }, ys = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, dv = {
        WhiteTitle: null,
        BlackTitle: null,
        WhiteElo: null,
        BlackElo: null,
        WhiteUSCF: null,
        BlackUSCF: null,
        WhiteNA: null,
        BlackNA: null,
        WhiteType: null,
        BlackType: null,
        EventDate: null,
        EventSponsor: null,
        Section: null,
        Stage: null,
        Board: null,
        Opening: null,
        Variation: null,
        SubVariation: null,
        ECO: null,
        NIC: null,
        Time: null,
        UTCTime: null,
        UTCDate: null,
        TimeControl: null,
        SetUp: null,
        FEN: null,
        Termination: null,
        Annotator: null,
        Mode: null,
        PlyCount: null
    }, hv = {
        ...ys,
        ...dv
    }, ne = {
        a8: 0,
        b8: 1,
        c8: 2,
        d8: 3,
        e8: 4,
        f8: 5,
        g8: 6,
        h8: 7,
        a7: 16,
        b7: 17,
        c7: 18,
        d7: 19,
        e7: 20,
        f7: 21,
        g7: 22,
        h7: 23,
        a6: 32,
        b6: 33,
        c6: 34,
        d6: 35,
        e6: 36,
        f6: 37,
        g6: 38,
        h6: 39,
        a5: 48,
        b5: 49,
        c5: 50,
        d5: 51,
        e5: 52,
        f5: 53,
        g5: 54,
        h5: 55,
        a4: 64,
        b4: 65,
        c4: 66,
        d4: 67,
        e4: 68,
        f4: 69,
        g4: 70,
        h4: 71,
        a3: 80,
        b3: 81,
        c3: 82,
        d3: 83,
        e3: 84,
        f3: 85,
        g3: 86,
        h3: 87,
        a2: 96,
        b2: 97,
        c2: 98,
        d2: 99,
        e2: 100,
        f2: 101,
        g2: 102,
        h2: 103,
        a1: 112,
        b1: 113,
        c1: 114,
        d1: 115,
        e1: 116,
        f1: 117,
        g1: 118,
        h1: 119
    }, cs = {
        b: [
            16,
            32,
            17,
            15
        ],
        w: [
            -16,
            -32,
            -17,
            -15
        ]
    }, Xh = {
        n: [
            -18,
            -33,
            -31,
            -14,
            18,
            33,
            31,
            14
        ],
        b: [
            -17,
            -15,
            17,
            15
        ],
        r: [
            -16,
            1,
            16,
            -1
        ],
        q: [
            -17,
            -16,
            -15,
            1,
            17,
            16,
            15,
            -1
        ],
        k: [
            -17,
            -16,
            -15,
            1,
            17,
            16,
            15,
            -1
        ]
    }, pv = [
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        24,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        2,
        24,
        2,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        53,
        56,
        53,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        24,
        24,
        24,
        24,
        24,
        56,
        0,
        56,
        24,
        24,
        24,
        24,
        24,
        24,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        53,
        56,
        53,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        2,
        24,
        2,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        24,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        0,
        20,
        0,
        0,
        20,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        0,
        0,
        0,
        0,
        0,
        0,
        20
    ], mv = [
        17,
        0,
        0,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        17,
        0,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        17,
        0,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        0,
        0,
        0,
        16,
        0,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        0,
        0,
        16,
        0,
        0,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        0,
        16,
        0,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        17,
        16,
        15,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        -1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        -15,
        -16,
        -17,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        -15,
        0,
        -16,
        0,
        -17,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        -15,
        0,
        0,
        -16,
        0,
        0,
        -17,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        -15,
        0,
        0,
        0,
        -16,
        0,
        0,
        0,
        -17,
        0,
        0,
        0,
        0,
        0,
        0,
        -15,
        0,
        0,
        0,
        0,
        -16,
        0,
        0,
        0,
        0,
        -17,
        0,
        0,
        0,
        0,
        -15,
        0,
        0,
        0,
        0,
        0,
        -16,
        0,
        0,
        0,
        0,
        0,
        -17,
        0,
        0,
        -15,
        0,
        0,
        0,
        0,
        0,
        0,
        -16,
        0,
        0,
        0,
        0,
        0,
        0,
        -17
    ], yv = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, vv = "pnbrqkPNBRQK", Zh = [
        ms,
        Ni,
        Wa,
        Ul
    ], gv = 7, bv = 6, Sv = 1, Ev = 0, Ri = {
        [Le]: ce.KSIDE_CASTLE,
        [Ul]: ce.QSIDE_CASTLE
    }, wl = {
        w: [
            {
                square: ne.a1,
                flag: ce.QSIDE_CASTLE
            },
            {
                square: ne.h1,
                flag: ce.KSIDE_CASTLE
            }
        ],
        b: [
            {
                square: ne.a8,
                flag: ce.QSIDE_CASTLE
            },
            {
                square: ne.h8,
                flag: ce.KSIDE_CASTLE
            }
        ]
    }, _v = {
        b: Sv,
        w: bv
    }, Tv = [
        "1-0",
        "0-1",
        "1/2-1/2",
        "*"
    ];
    function ln(u) {
        return u >> 4;
    }
    function lu(u) {
        return u & 15;
    }
    function Tp(u) {
        return "0123456789".indexOf(u) !== -1;
    }
    function We(u) {
        const i = lu(u), c = ln(u);
        return "abcdefgh".substring(i, i + 1) + "87654321".substring(c, c + 1);
    }
    function Za(u) {
        return u === lt ? Ct : lt;
    }
    function Rv(u) {
        const i = u.split(/\s+/);
        if (i.length !== 6) return {
            ok: !1,
            error: "Invalid FEN: must contain six space-delimited fields"
        };
        const c = parseInt(i[5], 10);
        if (isNaN(c) || c <= 0) return {
            ok: !1,
            error: "Invalid FEN: move number must be a positive integer"
        };
        const s = parseInt(i[4], 10);
        if (isNaN(s) || s < 0) return {
            ok: !1,
            error: "Invalid FEN: half move counter number must be a non-negative integer"
        };
        if (!/^(-|[abcdefgh][36])$/.test(i[3])) return {
            ok: !1,
            error: "Invalid FEN: en-passant square is invalid"
        };
        if (/[^kKqQ-]/.test(i[2])) return {
            ok: !1,
            error: "Invalid FEN: castling availability is invalid"
        };
        if (!/^(w|b)$/.test(i[1])) return {
            ok: !1,
            error: "Invalid FEN: side-to-move is invalid"
        };
        const o = i[0].split("/");
        if (o.length !== 8) return {
            ok: !1,
            error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
        };
        for(let m = 0; m < o.length; m++){
            let p = 0, h = !1;
            for(let v = 0; v < o[m].length; v++)if (Tp(o[m][v])) {
                if (h) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                p += parseInt(o[m][v], 10), h = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(o[m][v])) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (invalid piece)"
                };
                p += 1, h = !1;
            }
            if (p !== 8) return {
                ok: !1,
                error: "Invalid FEN: piece data is invalid (too many squares in rank)"
            };
        }
        if (i[3][1] == "3" && i[1] == "w" || i[3][1] == "6" && i[1] == "b") return {
            ok: !1,
            error: "Invalid FEN: illegal en-passant square"
        };
        const f = [
            {
                color: "white",
                regex: /K/g
            },
            {
                color: "black",
                regex: /k/g
            }
        ];
        for (const { color: m, regex: p } of f){
            if (!p.test(i[0])) return {
                ok: !1,
                error: `Invalid FEN: missing ${m} king`
            };
            if ((i[0].match(p) || []).length > 1) return {
                ok: !1,
                error: `Invalid FEN: too many ${m} kings`
            };
        }
        return Array.from(o[0] + o[7]).some((m)=>m.toUpperCase() === "P") ? {
            ok: !1,
            error: "Invalid FEN: some pawns are on the edge rows"
        } : {
            ok: !0
        };
    }
    function Av(u, i) {
        const c = u.from, s = u.to, o = u.piece;
        let f = 0, m = 0, p = 0;
        for(let h = 0, v = i.length; h < v; h++){
            const b = i[h].from, _ = i[h].to, g = i[h].piece;
            o === g && c !== b && s === _ && (f++, ln(c) === ln(b) && m++, lu(c) === lu(b) && p++);
        }
        return f > 0 ? m > 0 && p > 0 ? We(c) : p > 0 ? We(c).charAt(1) : We(c).charAt(0) : "";
    }
    function zl(u, i, c, s, o, f = void 0, m = ce.NORMAL) {
        const p = ln(s);
        if (o === Xe && (p === gv || p === Ev)) for(let h = 0; h < Zh.length; h++){
            const v = Zh[h];
            u.push({
                color: i,
                from: c,
                to: s,
                piece: o,
                captured: f,
                promotion: v,
                flags: m | ce.PROMOTION
            });
        }
        else u.push({
            color: i,
            from: c,
            to: s,
            piece: o,
            captured: f,
            flags: m
        });
    }
    function $h(u) {
        let i = u.charAt(0);
        return i >= "a" && i <= "h" ? u.match(/[a-h]\d.*[a-h]\d/) ? void 0 : Xe : (i = i.toLowerCase(), i === "o" ? Le : i);
    }
    function ss(u) {
        return u.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function os(u) {
        return u.split(" ").slice(0, 4).join(" ");
    }
    zi = class {
        _board = new Array(128);
        _turn = lt;
        _header = {};
        _kings = {
            w: ot,
            b: ot
        };
        _epSquare = -1;
        _halfMoves = 0;
        _moveNumber = 0;
        _history = [];
        _comments = {};
        _castling = {
            w: 0,
            b: 0
        };
        _positionCount = {};
        constructor(i = rs, { skipValidation: c = !1 } = {}){
            this.load(i, {
                skipValidation: c
            });
        }
        clear({ preserveHeaders: i = !1 } = {}) {
            this._board = new Array(128), this._kings = {
                w: ot,
                b: ot
            }, this._turn = lt, this._castling = {
                w: 0,
                b: 0
            }, this._epSquare = ot, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = i ? this._header : {
                ...hv
            }, this._positionCount = {}, this._header.SetUp = null, this._header.FEN = null;
        }
        load(i, { skipValidation: c = !1, preserveHeaders: s = !1 } = {}) {
            let o = i.split(/\s+/);
            if (o.length >= 2 && o.length < 6) {
                const p = [
                    "-",
                    "-",
                    "0",
                    "1"
                ];
                i = o.concat(p.slice(-(6 - o.length))).join(" ");
            }
            if (o = i.split(/\s+/), !c) {
                const { ok: p, error: h } = Rv(i);
                if (!p) throw new Error(h);
            }
            const f = o[0];
            let m = 0;
            this.clear({
                preserveHeaders: s
            });
            for(let p = 0; p < f.length; p++){
                const h = f.charAt(p);
                if (h === "/") m += 8;
                else if (Tp(h)) m += parseInt(h, 10);
                else {
                    const v = h < "a" ? lt : Ct;
                    this._put({
                        type: h.toLowerCase(),
                        color: v
                    }, We(m)), m++;
                }
            }
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= ce.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= ce.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= ce.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= ce.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? ot : ne[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(i), this._incPositionCount(i);
        }
        fen() {
            let i = 0, c = "";
            for(let f = ne.a8; f <= ne.h1; f++){
                if (this._board[f]) {
                    i > 0 && (c += i, i = 0);
                    const { color: m, type: p } = this._board[f];
                    c += m === lt ? p.toUpperCase() : p.toLowerCase();
                } else i++;
                f + 1 & 136 && (i > 0 && (c += i), f !== ne.h1 && (c += "/"), i = 0, f += 8);
            }
            let s = "";
            this._castling[lt] & ce.KSIDE_CASTLE && (s += "K"), this._castling[lt] & ce.QSIDE_CASTLE && (s += "Q"), this._castling[Ct] & ce.KSIDE_CASTLE && (s += "k"), this._castling[Ct] & ce.QSIDE_CASTLE && (s += "q"), s = s || "-";
            let o = "-";
            if (this._epSquare !== ot) {
                const f = this._epSquare + (this._turn === lt ? 16 : -16), m = [
                    f + 1,
                    f - 1
                ];
                for (const p of m){
                    if (p & 136) continue;
                    const h = this._turn;
                    if (this._board[p]?.color === h && this._board[p]?.type === Xe) {
                        this._makeMove({
                            color: h,
                            from: p,
                            to: this._epSquare,
                            piece: Xe,
                            captured: Xe,
                            flags: ce.EP_CAPTURE
                        });
                        const v = !this._isKingAttacked(h);
                        if (this._undoMove(), v) {
                            o = We(this._epSquare);
                            break;
                        }
                    }
                }
            }
            return [
                c,
                this._turn,
                s,
                o,
                this._halfMoves,
                this._moveNumber
            ].join(" ");
        }
        _updateSetup(i) {
            this._history.length > 0 || (i !== rs ? (this._header.SetUp = "1", this._header.FEN = i) : (this._header.SetUp = null, this._header.FEN = null));
        }
        reset() {
            this.load(rs);
        }
        get(i) {
            return this._board[ne[i]];
        }
        findPiece(i) {
            const c = [];
            for(let s = ne.a8; s <= ne.h1; s++){
                if (s & 136) {
                    s += 7;
                    continue;
                }
                !this._board[s] || this._board[s]?.color !== i.color || this._board[s].color === i.color && this._board[s].type === i.type && c.push(We(s));
            }
            return c;
        }
        put({ type: i, color: c }, s) {
            return this._put({
                type: i,
                color: c
            }, s) ? (this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0) : !1;
        }
        _put({ type: i, color: c }, s) {
            if (vv.indexOf(i.toLowerCase()) === -1 || !(s in ne)) return !1;
            const o = ne[s];
            if (i == Le && !(this._kings[c] == ot || this._kings[c] == o)) return !1;
            const f = this._board[o];
            return f && f.type === Le && (this._kings[f.color] = ot), this._board[o] = {
                type: i,
                color: c
            }, i === Le && (this._kings[c] = o), !0;
        }
        remove(i) {
            const c = this.get(i);
            return delete this._board[ne[i]], c && c.type === Le && (this._kings[c.color] = ot), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), c;
        }
        _updateCastlingRights() {
            const i = this._board[ne.e1]?.type === Le && this._board[ne.e1]?.color === lt, c = this._board[ne.e8]?.type === Le && this._board[ne.e8]?.color === Ct;
            (!i || this._board[ne.a1]?.type !== Wa || this._board[ne.a1]?.color !== lt) && (this._castling.w &= -65), (!i || this._board[ne.h1]?.type !== Wa || this._board[ne.h1]?.color !== lt) && (this._castling.w &= -33), (!c || this._board[ne.a8]?.type !== Wa || this._board[ne.a8]?.color !== Ct) && (this._castling.b &= -65), (!c || this._board[ne.h8]?.type !== Wa || this._board[ne.h8]?.color !== Ct) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === ot) return;
            const i = this._epSquare + (this._turn === lt ? -16 : 16), c = this._epSquare + (this._turn === lt ? 16 : -16), s = [
                c + 1,
                c - 1
            ];
            if (this._board[i] !== null || this._board[this._epSquare] !== null || this._board[c]?.color !== Za(this._turn) || this._board[c]?.type !== Xe) {
                this._epSquare = ot;
                return;
            }
            const o = (f)=>!(f & 136) && this._board[f]?.color === this._turn && this._board[f]?.type === Xe;
            s.some(o) || (this._epSquare = ot);
        }
        _attacked(i, c, s) {
            const o = [];
            for(let f = ne.a8; f <= ne.h1; f++){
                if (f & 136) {
                    f += 7;
                    continue;
                }
                if (this._board[f] === void 0 || this._board[f].color !== i) continue;
                const m = this._board[f], p = f - c;
                if (p === 0) continue;
                const h = p + 119;
                if (pv[h] & yv[m.type]) {
                    if (m.type === Xe) {
                        if (p > 0 && m.color === lt || p <= 0 && m.color === Ct) if (s) o.push(We(f));
                        else return !0;
                        continue;
                    }
                    if (m.type === "n" || m.type === "k") if (s) {
                        o.push(We(f));
                        continue;
                    } else return !0;
                    const v = mv[h];
                    let b = f + v, _ = !1;
                    for(; b !== c;){
                        if (this._board[b] != null) {
                            _ = !0;
                            break;
                        }
                        b += v;
                    }
                    if (!_) if (s) {
                        o.push(We(f));
                        continue;
                    } else return !0;
                }
            }
            return s ? o : !1;
        }
        attackers(i, c) {
            return c ? this._attacked(c, ne[i], !0) : this._attacked(this._turn, ne[i], !0);
        }
        _isKingAttacked(i) {
            const c = this._kings[i];
            return c === -1 ? !1 : this._attacked(Za(i), c);
        }
        isAttacked(i, c) {
            return this._attacked(c, ne[i]);
        }
        isCheck() {
            return this._isKingAttacked(this._turn);
        }
        inCheck() {
            return this.isCheck();
        }
        isCheckmate() {
            return this.isCheck() && this._moves().length === 0;
        }
        isStalemate() {
            return !this.isCheck() && this._moves().length === 0;
        }
        isInsufficientMaterial() {
            const i = {
                b: 0,
                n: 0,
                r: 0,
                q: 0,
                k: 0,
                p: 0
            }, c = [];
            let s = 0, o = 0;
            for(let f = ne.a8; f <= ne.h1; f++){
                if (o = (o + 1) % 2, f & 136) {
                    f += 7;
                    continue;
                }
                const m = this._board[f];
                m && (i[m.type] = m.type in i ? i[m.type] + 1 : 1, m.type === Ni && c.push(o), s++);
            }
            if (s === 2) return !0;
            if (s === 3 && (i[Ni] === 1 || i[ms] === 1)) return !0;
            if (s === i[Ni] + 2) {
                let f = 0;
                const m = c.length;
                for(let p = 0; p < m; p++)f += c[p];
                if (f === 0 || f === m) return !0;
            }
            return !1;
        }
        isThreefoldRepetition() {
            return this._getPositionCount(this.fen()) >= 3;
        }
        isDrawByFiftyMoves() {
            return this._halfMoves >= 100;
        }
        isDraw() {
            return this.isDrawByFiftyMoves() || this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
        }
        isGameOver() {
            return this.isCheckmate() || this.isStalemate() || this.isDraw();
        }
        moves({ verbose: i = !1, square: c = void 0, piece: s = void 0 } = {}) {
            const o = this._moves({
                square: c,
                piece: s
            });
            return i ? o.map((f)=>new Ti(this, f)) : o.map((f)=>this._moveToSan(f, o));
        }
        _moves({ legal: i = !0, piece: c = void 0, square: s = void 0 } = {}) {
            const o = s ? s.toLowerCase() : void 0, f = c?.toLowerCase(), m = [], p = this._turn, h = Za(p);
            let v = ne.a8, b = ne.h1, _ = !1;
            if (o) if (o in ne) v = b = ne[o], _ = !0;
            else return [];
            for(let R = v; R <= b; R++){
                if (R & 136) {
                    R += 7;
                    continue;
                }
                if (!this._board[R] || this._board[R].color === h) continue;
                const { type: O } = this._board[R];
                let C;
                if (O === Xe) {
                    if (f && f !== O) continue;
                    C = R + cs[p][0], this._board[C] || (zl(m, p, R, C, Xe), C = R + cs[p][1], _v[p] === ln(R) && !this._board[C] && zl(m, p, R, C, Xe, void 0, ce.BIG_PAWN));
                    for(let U = 2; U < 4; U++)C = R + cs[p][U], !(C & 136) && (this._board[C]?.color === h ? zl(m, p, R, C, Xe, this._board[C].type, ce.CAPTURE) : C === this._epSquare && zl(m, p, R, C, Xe, Xe, ce.EP_CAPTURE));
                } else {
                    if (f && f !== O) continue;
                    for(let U = 0, w = Xh[O].length; U < w; U++){
                        const H = Xh[O][U];
                        for(C = R; C += H, !(C & 136);){
                            if (!this._board[C]) zl(m, p, R, C, O);
                            else {
                                if (this._board[C].color === p) break;
                                zl(m, p, R, C, O, this._board[C].type, ce.CAPTURE);
                                break;
                            }
                            if (O === ms || O === Le) break;
                        }
                    }
                }
            }
            if ((f === void 0 || f === Le) && (!_ || b === this._kings[p])) {
                if (this._castling[p] & ce.KSIDE_CASTLE) {
                    const R = this._kings[p], O = R + 2;
                    !this._board[R + 1] && !this._board[O] && !this._attacked(h, this._kings[p]) && !this._attacked(h, R + 1) && !this._attacked(h, O) && zl(m, p, this._kings[p], O, Le, void 0, ce.KSIDE_CASTLE);
                }
                if (this._castling[p] & ce.QSIDE_CASTLE) {
                    const R = this._kings[p], O = R - 2;
                    !this._board[R - 1] && !this._board[R - 2] && !this._board[R - 3] && !this._attacked(h, this._kings[p]) && !this._attacked(h, R - 1) && !this._attacked(h, O) && zl(m, p, this._kings[p], O, Le, void 0, ce.QSIDE_CASTLE);
                }
            }
            if (!i || this._kings[p] === -1) return m;
            const g = [];
            for(let R = 0, O = m.length; R < O; R++)this._makeMove(m[R]), this._isKingAttacked(p) || g.push(m[R]), this._undoMove();
            return g;
        }
        move(i, { strict: c = !1 } = {}) {
            let s = null;
            if (typeof i == "string") s = this._moveFromSan(i, c);
            else if (typeof i == "object") {
                const f = this._moves();
                for(let m = 0, p = f.length; m < p; m++)if (i.from === We(f[m].from) && i.to === We(f[m].to) && (!("promotion" in f[m]) || i.promotion === f[m].promotion)) {
                    s = f[m];
                    break;
                }
            }
            if (!s) throw typeof i == "string" ? new Error(`Invalid move: ${i}`) : new Error(`Invalid move: ${JSON.stringify(i)}`);
            const o = new Ti(this, s);
            return this._makeMove(s), this._incPositionCount(o.after), o;
        }
        _push(i) {
            this._history.push({
                move: i,
                kings: {
                    b: this._kings.b,
                    w: this._kings.w
                },
                turn: this._turn,
                castling: {
                    b: this._castling.b,
                    w: this._castling.w
                },
                epSquare: this._epSquare,
                halfMoves: this._halfMoves,
                moveNumber: this._moveNumber
            });
        }
        _makeMove(i) {
            const c = this._turn, s = Za(c);
            if (this._push(i), this._board[i.to] = this._board[i.from], delete this._board[i.from], i.flags & ce.EP_CAPTURE && (this._turn === Ct ? delete this._board[i.to - 16] : delete this._board[i.to + 16]), i.promotion && (this._board[i.to] = {
                type: i.promotion,
                color: c
            }), this._board[i.to].type === Le) {
                if (this._kings[c] = i.to, i.flags & ce.KSIDE_CASTLE) {
                    const o = i.to - 1, f = i.to + 1;
                    this._board[o] = this._board[f], delete this._board[f];
                } else if (i.flags & ce.QSIDE_CASTLE) {
                    const o = i.to + 1, f = i.to - 2;
                    this._board[o] = this._board[f], delete this._board[f];
                }
                this._castling[c] = 0;
            }
            if (this._castling[c]) {
                for(let o = 0, f = wl[c].length; o < f; o++)if (i.from === wl[c][o].square && this._castling[c] & wl[c][o].flag) {
                    this._castling[c] ^= wl[c][o].flag;
                    break;
                }
            }
            if (this._castling[s]) {
                for(let o = 0, f = wl[s].length; o < f; o++)if (i.to === wl[s][o].square && this._castling[s] & wl[s][o].flag) {
                    this._castling[s] ^= wl[s][o].flag;
                    break;
                }
            }
            i.flags & ce.BIG_PAWN ? c === Ct ? this._epSquare = i.to - 16 : this._epSquare = i.to + 16 : this._epSquare = ot, i.piece === Xe ? this._halfMoves = 0 : i.flags & (ce.CAPTURE | ce.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, c === Ct && this._moveNumber++, this._turn = s;
        }
        undo() {
            const i = this._undoMove();
            if (i) {
                const c = new Ti(this, i);
                return this._decPositionCount(c.after), c;
            }
            return null;
        }
        _undoMove() {
            const i = this._history.pop();
            if (i === void 0) return null;
            const c = i.move;
            this._kings = i.kings, this._turn = i.turn, this._castling = i.castling, this._epSquare = i.epSquare, this._halfMoves = i.halfMoves, this._moveNumber = i.moveNumber;
            const s = this._turn, o = Za(s);
            if (this._board[c.from] = this._board[c.to], this._board[c.from].type = c.piece, delete this._board[c.to], c.captured) if (c.flags & ce.EP_CAPTURE) {
                let f;
                s === Ct ? f = c.to - 16 : f = c.to + 16, this._board[f] = {
                    type: Xe,
                    color: o
                };
            } else this._board[c.to] = {
                type: c.captured,
                color: o
            };
            if (c.flags & (ce.KSIDE_CASTLE | ce.QSIDE_CASTLE)) {
                let f, m;
                c.flags & ce.KSIDE_CASTLE ? (f = c.to + 1, m = c.to - 1) : (f = c.to - 2, m = c.to + 1), this._board[f] = this._board[m], delete this._board[m];
            }
            return c;
        }
        pgn({ newline: i = `
`, maxWidth: c = 0 } = {}) {
            const s = [];
            let o = !1;
            for(const g in this._header)this._header[g] && s.push(`[${g} "${this._header[g]}"]` + i), o = !0;
            o && this._history.length && s.push(i);
            const f = (g)=>{
                const R = this._comments[this.fen()];
                if (typeof R < "u") {
                    const O = g.length > 0 ? " " : "";
                    g = `${g}${O}{${R}}`;
                }
                return g;
            }, m = [];
            for(; this._history.length > 0;)m.push(this._undoMove());
            const p = [];
            let h = "";
            for(m.length === 0 && p.push(f("")); m.length > 0;){
                h = f(h);
                const g = m.pop();
                if (!g) break;
                if (!this._history.length && g.color === "b") {
                    const R = `${this._moveNumber}. ...`;
                    h = h ? `${h} ${R}` : R;
                } else g.color === "w" && (h.length && p.push(h), h = this._moveNumber + ".");
                h = h + " " + this._moveToSan(g, this._moves({
                    legal: !0
                })), this._makeMove(g);
            }
            if (h.length && p.push(f(h)), p.push(this._header.Result || "*"), c === 0) return s.join("") + p.join(" ");
            const v = function() {
                return s.length > 0 && s[s.length - 1] === " " ? (s.pop(), !0) : !1;
            }, b = function(g, R) {
                for (const O of R.split(" "))if (O) {
                    if (g + O.length > c) {
                        for(; v();)g--;
                        s.push(i), g = 0;
                    }
                    s.push(O), g += O.length, s.push(" "), g++;
                }
                return v() && g--, g;
            };
            let _ = 0;
            for(let g = 0; g < p.length; g++){
                if (_ + p[g].length > c && p[g].includes("{")) {
                    _ = b(_, p[g]);
                    continue;
                }
                _ + p[g].length > c && g !== 0 ? (s[s.length - 1] === " " && s.pop(), s.push(i), _ = 0) : g !== 0 && (s.push(" "), _++), s.push(p[g]), _ += p[g].length;
            }
            return s.join("");
        }
        header(...i) {
            for(let c = 0; c < i.length; c += 2)typeof i[c] == "string" && typeof i[c + 1] == "string" && (this._header[i[c]] = i[c + 1]);
            return this._header;
        }
        setHeader(i, c) {
            return this._header[i] = c ?? ys[i] ?? null, this.getHeaders();
        }
        removeHeader(i) {
            return i in this._header ? (this._header[i] = ys[i] || null, !0) : !1;
        }
        getHeaders() {
            const i = {};
            for (const [c, s] of Object.entries(this._header))s !== null && (i[c] = s);
            return i;
        }
        loadPgn(i, { strict: c = !1, newlineChar: s = `\r?
` } = {}) {
            function o(Q) {
                return Q.replace(/\\/g, "\\");
            }
            function f(Q) {
                const G = {}, Y = Q.split(new RegExp(o(s)));
                let $ = "", te = "";
                for(let se = 0; se < Y.length; se++){
                    const ue = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    $ = Y[se].replace(ue, "$1"), te = Y[se].replace(ue, "$2"), $.trim().length > 0 && (G[$] = te);
                }
                return G;
            }
            i = i.trim();
            const p = new RegExp("^(\\[((?:" + o(s) + ")|.)*\\])((?:\\s*" + o(s) + "){2}|(?:\\s*" + o(s) + ")*$)").exec(i), h = p && p.length >= 2 ? p[1] : "";
            this.reset();
            const v = f(h);
            let b = "";
            for(const Q in v)Q.toLowerCase() === "fen" && (b = v[Q]), this.header(Q, v[Q]);
            if (!c) b && this.load(b, {
                preserveHeaders: !0
            });
            else if (v.SetUp === "1") {
                if (!("FEN" in v)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
                this.load(v.FEN, {
                    preserveHeaders: !0
                });
            }
            function _(Q) {
                return Array.from(Q).map(function(G) {
                    return G.charCodeAt(0) < 128 ? G.charCodeAt(0).toString(16) : encodeURIComponent(G).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function g(Q) {
                return Q.length == 0 ? "" : decodeURIComponent("%" + (Q.match(/.{1,2}/g) || []).join("%"));
            }
            const R = function(Q) {
                return Q = Q.replace(new RegExp(o(s), "g"), " "), `{${_(Q.slice(1, Q.length - 1))}}`;
            }, O = function(Q) {
                if (Q.startsWith("{") && Q.endsWith("}")) return g(Q.slice(1, Q.length - 1));
            };
            let C = i.replace(h, "").replace(new RegExp(`({[^}]*})+?|;([^${o(s)}]*)`, "g"), function(Q, G, Y) {
                return G !== void 0 ? R(G) : " " + R(`{${Y.slice(1)}}`);
            }).replace(new RegExp(o(s), "g"), " ");
            const U = /(\([^()]+\))+?/g;
            for(; U.test(C);)C = C.replace(U, "");
            C = C.replace(/\d+\.(\.\.)?/g, ""), C = C.replace(/\.\.\./g, ""), C = C.replace(/\$\d+/g, "");
            let w = C.trim().split(new RegExp(/\s+/));
            w = w.filter((Q)=>Q !== "");
            let H = "";
            for(let Q = 0; Q < w.length; Q++){
                const G = O(w[Q]);
                if (G !== void 0) {
                    this._comments[this.fen()] = G;
                    continue;
                }
                const Y = this._moveFromSan(w[Q], c);
                if (Y == null) if (Tv.indexOf(w[Q]) > -1) H = w[Q];
                else throw new Error(`Invalid move in PGN: ${w[Q]}`);
                else H = "", this._makeMove(Y), this._incPositionCount(this.fen());
            }
            H && Object.keys(this._header).length && this._header.Result !== H && this.setHeader("Result", H);
        }
        _moveToSan(i, c) {
            let s = "";
            if (i.flags & ce.KSIDE_CASTLE) s = "O-O";
            else if (i.flags & ce.QSIDE_CASTLE) s = "O-O-O";
            else {
                if (i.piece !== Xe) {
                    const o = Av(i, c);
                    s += i.piece.toUpperCase() + o;
                }
                i.flags & (ce.CAPTURE | ce.EP_CAPTURE) && (i.piece === Xe && (s += We(i.from)[0]), s += "x"), s += We(i.to), i.promotion && (s += "=" + i.promotion.toUpperCase());
            }
            return this._makeMove(i), this.isCheck() && (this.isCheckmate() ? s += "#" : s += "+"), this._undoMove(), s;
        }
        _moveFromSan(i, c = !1) {
            const s = ss(i);
            let o = $h(s), f = this._moves({
                legal: !0,
                piece: o
            });
            for(let g = 0, R = f.length; g < R; g++)if (s === ss(this._moveToSan(f[g], f))) return f[g];
            if (c) return null;
            let m, p, h, v, b, _ = !1;
            if (p = s.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), p ? (m = p[1], h = p[2], v = p[3], b = p[4], h.length == 1 && (_ = !0)) : (p = s.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), p && (m = p[1], h = p[2], v = p[3], b = p[4], h.length == 1 && (_ = !0))), o = $h(s), f = this._moves({
                legal: !0,
                piece: m || o
            }), !v) return null;
            for(let g = 0, R = f.length; g < R; g++)if (h) {
                if ((!m || m.toLowerCase() == f[g].piece) && ne[h] == f[g].from && ne[v] == f[g].to && (!b || b.toLowerCase() == f[g].promotion)) return f[g];
                if (_) {
                    const O = We(f[g].from);
                    if ((!m || m.toLowerCase() == f[g].piece) && ne[v] == f[g].to && (h == O[0] || h == O[1]) && (!b || b.toLowerCase() == f[g].promotion)) return f[g];
                }
            } else if (s === ss(this._moveToSan(f[g], f)).replace("x", "")) return f[g];
            return null;
        }
        ascii() {
            let i = `   +------------------------+
`;
            for(let c = ne.a8; c <= ne.h1; c++){
                if (lu(c) === 0 && (i += " " + "87654321"[ln(c)] + " |"), this._board[c]) {
                    const s = this._board[c].type, f = this._board[c].color === lt ? s.toUpperCase() : s.toLowerCase();
                    i += " " + f + " ";
                } else i += " . ";
                c + 1 & 136 && (i += `|
`, c += 8);
            }
            return i += `   +------------------------+
`, i += "     a  b  c  d  e  f  g  h", i;
        }
        perft(i) {
            const c = this._moves({
                legal: !1
            });
            let s = 0;
            const o = this._turn;
            for(let f = 0, m = c.length; f < m; f++)this._makeMove(c[f]), this._isKingAttacked(o) || (i - 1 > 0 ? s += this.perft(i - 1) : s++), this._undoMove();
            return s;
        }
        turn() {
            return this._turn;
        }
        board() {
            const i = [];
            let c = [];
            for(let s = ne.a8; s <= ne.h1; s++)this._board[s] == null ? c.push(null) : c.push({
                square: We(s),
                type: this._board[s].type,
                color: this._board[s].color
            }), s + 1 & 136 && (i.push(c), c = [], s += 8);
            return i;
        }
        squareColor(i) {
            if (i in ne) {
                const c = ne[i];
                return (ln(c) + lu(c)) % 2 === 0 ? "light" : "dark";
            }
            return null;
        }
        history({ verbose: i = !1 } = {}) {
            const c = [], s = [];
            for(; this._history.length > 0;)c.push(this._undoMove());
            for(;;){
                const o = c.pop();
                if (!o) break;
                i ? s.push(new Ti(this, o)) : s.push(this._moveToSan(o, this._moves())), this._makeMove(o);
            }
            return s;
        }
        _getPositionCount(i) {
            const c = os(i);
            return this._positionCount[c] || 0;
        }
        _incPositionCount(i) {
            const c = os(i);
            this._positionCount[c] === void 0 && (this._positionCount[c] = 0), this._positionCount[c] += 1;
        }
        _decPositionCount(i) {
            const c = os(i);
            this._positionCount[c] === 1 ? delete this._positionCount[c] : this._positionCount[c] -= 1;
        }
        _pruneComments() {
            const i = [], c = {}, s = (o)=>{
                o in this._comments && (c[o] = this._comments[o]);
            };
            for(; this._history.length > 0;)i.push(this._undoMove());
            for(s(this.fen());;){
                const o = i.pop();
                if (!o) break;
                this._makeMove(o), s(this.fen());
            }
            this._comments = c;
        }
        getComment() {
            return this._comments[this.fen()];
        }
        setComment(i) {
            this._comments[this.fen()] = i.replace("{", "[").replace("}", "]");
        }
        deleteComment() {
            return this.removeComment();
        }
        removeComment() {
            const i = this._comments[this.fen()];
            return delete this._comments[this.fen()], i;
        }
        getComments() {
            return this._pruneComments(), Object.keys(this._comments).map((i)=>({
                    fen: i,
                    comment: this._comments[i]
                }));
        }
        deleteComments() {
            return this.removeComments();
        }
        removeComments() {
            return this._pruneComments(), Object.keys(this._comments).map((i)=>{
                const c = this._comments[i];
                return delete this._comments[i], {
                    fen: i,
                    comment: c
                };
            });
        }
        setCastlingRights(i, c) {
            for (const o of [
                Le,
                Ul
            ])c[o] !== void 0 && (c[o] ? this._castling[i] |= Ri[o] : this._castling[i] &= ~Ri[o]);
            this._updateCastlingRights();
            const s = this.getCastlingRights(i);
            return (c[Le] === void 0 || c[Le] === s[Le]) && (c[Ul] === void 0 || c[Ul] === s[Ul]);
        }
        getCastlingRights(i) {
            return {
                [Le]: (this._castling[i] & Ri[Le]) !== 0,
                [Ul]: (this._castling[i] & Ri[Ul]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let Rp, Ap, Ov, Op, Nv, Np, xv, Mv, xp, Jh, Cv, Mp, Cp, Dp, Dv, Bv, Bp, wp, zp, Up, Pp, qp, As, jp, wv, zv, Uv, Pv;
    Rp = "MOVE_PIECE";
    Ap = "RESET_GAME";
    Ov = "LOAD_GAME";
    Op = "SET_GAME_OVER";
    Nv = "SET_TIMER_DURATION";
    S2 = (u)=>({
            type: Rp,
            payload: u
        });
    E2 = (u)=>({
            type: Ap,
            payload: u
        });
    _2 = (u, i)=>({
            type: Op,
            payload: {
                isGameOver: u,
                gameResult: i
            }
        });
    Ae = {
        TIMER_DURATION: 60 * 3,
        THEME: "classic",
        ENABLE_SOUND: !0,
        IS_FLIPPED: !1,
        THEME_KEY: "theme",
        ENABLE_SOUND_KEY: "enableSound",
        TIMER_DURATION_KEY: "timerDuration",
        IS_FLIPPED_KEY: "isFlipped",
        START_FEN: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        CHECKMATE_MESSAGE: "Wins by Checkmate!",
        WHITE: "w",
        BOARD_PIECE: "boardPiece",
        PALLETE_ITEM: "palleteItem",
        ERASER_ID: "p-g-eraser"
    };
    Np = [
        [
            "a8",
            "b8",
            "c8",
            "d8",
            "e8",
            "f8",
            "g8",
            "h8"
        ],
        [
            "a7",
            "b7",
            "c7",
            "d7",
            "e7",
            "f7",
            "g7",
            "h7"
        ],
        [
            "a6",
            "b6",
            "c6",
            "d6",
            "e6",
            "f6",
            "g6",
            "h6"
        ],
        [
            "a5",
            "b5",
            "c5",
            "d5",
            "e5",
            "f5",
            "g5",
            "h5"
        ],
        [
            "a4",
            "b4",
            "c4",
            "d4",
            "e4",
            "f4",
            "g4",
            "h4"
        ],
        [
            "a3",
            "b3",
            "c3",
            "d3",
            "e3",
            "f3",
            "g3",
            "h3"
        ],
        [
            "a2",
            "b2",
            "c2",
            "d2",
            "e2",
            "f2",
            "g2",
            "h2"
        ],
        [
            "a1",
            "b1",
            "c1",
            "d1",
            "e1",
            "f1",
            "g1",
            "h1"
        ]
    ];
    xv = [
        [
            "h1",
            "g1",
            "f1",
            "e1",
            "d1",
            "c1",
            "b1",
            "a1"
        ],
        [
            "h2",
            "g2",
            "f2",
            "e2",
            "d2",
            "c2",
            "b2",
            "a2"
        ],
        [
            "h3",
            "g3",
            "f3",
            "e3",
            "d3",
            "c3",
            "b3",
            "a3"
        ],
        [
            "h4",
            "g4",
            "f4",
            "e4",
            "d4",
            "c4",
            "b4",
            "a4"
        ],
        [
            "h5",
            "g5",
            "f5",
            "e5",
            "d5",
            "c5",
            "b5",
            "a5"
        ],
        [
            "h6",
            "g6",
            "f6",
            "e6",
            "d6",
            "c6",
            "b6",
            "a6"
        ],
        [
            "h7",
            "g7",
            "f7",
            "e7",
            "d7",
            "c7",
            "b7",
            "a7"
        ],
        [
            "h8",
            "g8",
            "f8",
            "e8",
            "d8",
            "c8",
            "b8",
            "a8"
        ]
    ];
    Mv = {
        a8: {
            type: "r",
            color: "b"
        },
        b8: {
            type: "n",
            color: "b"
        },
        c8: {
            type: "b",
            color: "b"
        },
        d8: {
            type: "q",
            color: "b"
        },
        e8: {
            type: "k",
            color: "b"
        },
        f8: {
            type: "b",
            color: "b"
        },
        g8: {
            type: "n",
            color: "b"
        },
        h8: {
            type: "r",
            color: "b"
        },
        a7: {
            type: "p",
            color: "b"
        },
        b7: {
            type: "p",
            color: "b"
        },
        c7: {
            type: "p",
            color: "b"
        },
        d7: {
            type: "p",
            color: "b"
        },
        e7: {
            type: "p",
            color: "b"
        },
        f7: {
            type: "p",
            color: "b"
        },
        g7: {
            type: "p",
            color: "b"
        },
        h7: {
            type: "p",
            color: "b"
        },
        a6: null,
        b6: null,
        c6: null,
        d6: null,
        e6: null,
        f6: null,
        g6: null,
        h6: null,
        a5: null,
        b5: null,
        c5: null,
        d5: null,
        e5: null,
        f5: null,
        g5: null,
        h5: null,
        a4: null,
        b4: null,
        c4: null,
        d4: null,
        e4: null,
        f4: null,
        g4: null,
        h4: null,
        a3: null,
        b3: null,
        c3: null,
        d3: null,
        e3: null,
        f3: null,
        g3: null,
        h3: null,
        a2: {
            type: "p",
            color: "w"
        },
        b2: {
            type: "p",
            color: "w"
        },
        c2: {
            type: "p",
            color: "w"
        },
        d2: {
            type: "p",
            color: "w"
        },
        e2: {
            type: "p",
            color: "w"
        },
        f2: {
            type: "p",
            color: "w"
        },
        g2: {
            type: "p",
            color: "w"
        },
        h2: {
            type: "p",
            color: "w"
        },
        a1: {
            type: "r",
            color: "w"
        },
        b1: {
            type: "n",
            color: "w"
        },
        c1: {
            type: "b",
            color: "w"
        },
        d1: {
            type: "q",
            color: "w"
        },
        e1: {
            type: "k",
            color: "w"
        },
        f1: {
            type: "b",
            color: "w"
        },
        g1: {
            type: "n",
            color: "w"
        },
        h1: {
            type: "r",
            color: "w"
        }
    };
    xp = {
        a8: null,
        b8: null,
        c8: null,
        d8: null,
        e8: null,
        f8: null,
        g8: null,
        h8: null,
        a7: null,
        b7: null,
        c7: null,
        d7: null,
        e7: null,
        f7: null,
        g7: null,
        h7: null,
        a6: null,
        b6: null,
        c6: null,
        d6: null,
        e6: null,
        f6: null,
        g6: null,
        h6: null,
        a5: null,
        b5: null,
        c5: null,
        d5: null,
        e5: null,
        f5: null,
        g5: null,
        h5: null,
        a4: null,
        b4: null,
        c4: null,
        d4: null,
        e4: null,
        f4: null,
        g4: null,
        h4: null,
        a3: null,
        b3: null,
        c3: null,
        d3: null,
        e3: null,
        f3: null,
        g3: null,
        h3: null,
        a2: null,
        b2: null,
        c2: null,
        d2: null,
        e2: null,
        f2: null,
        g2: null,
        h2: null,
        a1: null,
        b1: null,
        c1: null,
        d1: null,
        e1: null,
        f1: null,
        g1: null,
        h1: null
    };
    Jh = {
        fen: Ae.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: Ae.TIMER_DURATION
    };
    Cv = (u = Jh, i)=>{
        switch(i.type){
            case Rp:
                try {
                    const c = new zi(u.fen), s = c.move({
                        from: i.payload.from,
                        to: i.payload.to,
                        promotion: i.payload.promotionPiece
                    });
                    if (!s) return u;
                    const o = [
                        ...u.moveHistory,
                        s.san
                    ];
                    return {
                        ...u,
                        fen: c.fen(),
                        isWhiteTurn: !u.isWhiteTurn,
                        moveHistory: o,
                        lastMove: {
                            from: i.payload.from,
                            to: i.payload.to
                        }
                    };
                } catch (c) {
                    return console.warn("Invalid move:", c), u;
                }
            case Ap:
                return {
                    ...Jh,
                    moveHistory: [],
                    timerDuration: i.payload
                };
            case Ov:
                return {
                    ...u,
                    fen: i.payload.fen,
                    moveHistory: i.payload.moveHistory || []
                };
            case Op:
                return {
                    ...u,
                    isGameOver: i.payload.isGameOver,
                    gameResult: i.payload.gameResult
                };
            case Nv:
                return {
                    ...u,
                    timerDuration: i.payload
                };
            default:
                return u;
        }
    };
    Mp = "FLIP_BOARD";
    Cp = "SET_THEME";
    Dp = "SET_SOUND";
    T2 = ()=>({
            type: Mp
        });
    R2 = (u)=>({
            type: Cp,
            payload: u
        });
    A2 = (u)=>({
            type: Dp,
            payload: u
        });
    Dv = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    Bv = (u = Dv, i)=>{
        switch(i.type){
            case Mp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case Cp:
                return {
                    ...u,
                    theme: i.payload
                };
            case Dp:
                return {
                    ...u,
                    enableSound: i.payload
                };
            default:
                return u;
        }
    };
    Bp = "SET_PGN_ANALYSIS_AT_INDEX";
    wp = "SET_REVIEW_ANALYSIS_COMPLETE";
    zp = "NEXT";
    Up = "PREV";
    Pp = "START_POS";
    qp = "FINAL_POS";
    As = "LOAD_PGN";
    jp = "JUMP_TO_MOVE";
    wv = "TOGGLE_ENGINE";
    zv = "DISABLE_ENGINE";
    O2 = ()=>({
            type: Pp
        });
    N2 = ()=>({
            type: Up
        });
    x2 = ()=>({
            type: zp
        });
    M2 = ()=>({
            type: qp
        });
    C2 = ({ finalPos: u, moves: i, fens: c, fromToSquares: s, termination: o, result: f, blackPlayerName: m, whitePlayerName: p })=>({
            type: As,
            payload: {
                finalPos: u,
                moves: i,
                fens: c,
                fromToSquares: s,
                termination: o,
                result: f,
                blackPlayerName: m,
                whitePlayerName: p
            }
        });
    D2 = (u)=>({
            type: jp,
            payload: u
        });
    B2 = (u)=>({
            type: Bp,
            payload: u
        });
    w2 = (u)=>({
            type: wp,
            payload: u
        });
    Uv = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    Pv = (u = Uv, i)=>{
        switch(i.type){
            case zp:
                return u.currentMoveIndex === u.fenLength - 1 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex + 1
                };
            case Up:
                return u.currentMoveIndex === 0 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex - 1
                };
            case Pp:
                return {
                    ...u,
                    currentMoveIndex: 0
                };
            case qp:
                return {
                    ...u,
                    currentMoveIndex: u.fenLength - 1
                };
            case jp:
                return {
                    ...u,
                    currentMoveIndex: i.payload
                };
            case As:
                return {
                    ...u,
                    finalFen: i.payload.finalPos,
                    fenLength: i.payload.fens.length,
                    currentMoveIndex: 0
                };
            case wv:
                return {
                    ...u,
                    engineEnabled: !u.engineEnabled
                };
            case zv:
                return {
                    ...u,
                    engineEnabled: !1
                };
            default:
                return u;
        }
    };
    function kp(u) {
        return Array.from({
            length: u
        }, ()=>({
                evalScore: null,
                bestMove: ""
            }));
    }
    let qv, jv, kv, Hv, Lv, Qv, Kv, Yv, Hp, Lp, Qp, Kp, Yp, Gp, Vp, Xp, Zp, $p, Jp, Os, Fh, Wh, Gv, Vv, Xv, Zv, $v, Jv, Fv, Wv, Iv, eg, Ih, tg, lg, ng, ag, ug, ig;
    qv = {
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
        analysisData: kp(72),
        reviewAnalysisComplete: !1
    };
    jv = (u = qv, i)=>{
        switch(i.type){
            case As:
                return {
                    ...u,
                    finalFen: i.payload.finalPos,
                    moves: i.payload.moves,
                    fens: i.payload.fens,
                    analysisData: kp(i.payload.fens.length),
                    reviewAnalysisComplete: !1,
                    fromToSquares: i.payload.fromToSquares,
                    termination: i.payload.termination,
                    result: i.payload.result,
                    blackPlayerName: i.payload.blackPlayerName,
                    whitePlayerName: i.payload.whitePlayerName
                };
            case wp:
                return {
                    ...u,
                    reviewAnalysisComplete: !!i.payload
                };
            case Bp:
                {
                    const { index: c, evalScore: s, bestMove: o } = i.payload;
                    if (!u.analysisData || c < 0 || c >= u.analysisData.length) return u;
                    const f = u.analysisData.map((m, p)=>p === c ? {
                            evalScore: s,
                            bestMove: o ?? ""
                        } : m);
                    return {
                        ...u,
                        analysisData: f
                    };
                }
            default:
                return u;
        }
    };
    kv = "TOGGLE_ENGINE";
    Hv = "SET_MULTIPV";
    Lv = "SET_MAX_DEPTH";
    Qv = "SET_AUTO_STOP_TIME";
    Kv = {
        enabled: !0,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    Yv = (u = Kv, i)=>{
        switch(i.type){
            case kv:
                return {
                    ...u,
                    enabled: !u.enabled
                };
            case Hv:
                return {
                    ...u,
                    multiPV: i.payload
                };
            case Lv:
                return {
                    ...u,
                    maxDepth: i.payload
                };
            case Qv:
                return {
                    ...u,
                    autoStopTime: i.payload
                };
            default:
                return u;
        }
    };
    Hp = "RESET_BOARD";
    Lp = "CLEAR_BOARD";
    Qp = "FLIP_BOARD";
    Kp = "SET_BOARD_WITH_FEN";
    Yp = "PUT_PIECE";
    Gp = "REMOVE_PIECE";
    Vp = "MOVE_BOARD_PIECE";
    Xp = "TOGGLE_CASTLING_PIECE";
    Zp = "SET_PLAYER_TO_MOVE";
    $p = "SET_SELECTED_ITEM";
    Jp = "DESELECT_ITEM";
    Os = (u)=>({
            type: $p,
            payload: {
                item: u
            }
        });
    Fh = ()=>({
            type: Jp
        });
    Wh = (u)=>({
            type: Zp,
            payload: {
                color: u
            }
        });
    Gv = ()=>({
            type: Hp
        });
    Vv = ()=>({
            type: Lp
        });
    Xv = ()=>({
            type: Qp
        });
    Zv = (u)=>({
            type: Kp,
            payload: {
                fen: u
            }
        });
    $v = (u, i)=>({
            type: Yp,
            payload: {
                squareId: u,
                piece: i
            }
        });
    Jv = (u)=>({
            type: Gp,
            payload: {
                squareId: u
            }
        });
    Fv = (u, i)=>({
            type: Vp,
            payload: {
                sourceSquareId: u,
                destSquareId: i
            }
        });
    Wv = (u)=>({
            type: Xp,
            payload: {
                flag: u
            }
        });
    Iv = (u)=>{
        const i = xp;
        try {
            const c = new zi;
            c.load(u);
            const s = c.board();
            for(let o = 0; o < 8; o++)for(let f = 0; f < 8; f++){
                const m = s[o][f], p = `${"abcdefgh"[f]}${8 - o}`;
                i[p] = m ? {
                    type: m.type,
                    color: m.color
                } : null;
            }
        } catch (c) {
            console.error("FenToBoard error", c, u);
        }
        return i;
    };
    eg = (u)=>u.split(" ")?.[1] === "w" ? "w" : "b";
    Ih = {
        board: {
            ...Mv
        },
        selectedItem: null,
        isFlipped: !1,
        playerToMove: Ae.WHITE,
        castlingFlags: {
            K: !0,
            Q: !0,
            k: !0,
            q: !0
        }
    };
    tg = {
        board: {
            ...xp
        },
        selectedItem: null,
        isFlipped: !1,
        playerToMove: Ae.WHITE,
        castlingFlags: {
            K: !1,
            Q: !1,
            k: !1,
            q: !1
        }
    };
    lg = (u = Ih, i)=>{
        switch(i.type){
            case Qp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case Hp:
                return Ih;
            case Lp:
                return tg;
            case Kp:
                return {
                    ...u,
                    board: {
                        ...Iv(i.payload.fen)
                    },
                    playerToMove: eg(i.payload.fen)
                };
            case Yp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [i.payload.squareId]: i.payload.piece
                    }
                };
            case Vp:
                {
                    const c = u.board[i.payload.sourceSquareId];
                    return {
                        ...u,
                        board: {
                            ...u.board,
                            [i.payload.destSquareId]: c,
                            [i.payload.sourceSquareId]: null
                        }
                    };
                }
            case Gp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [i.payload.squareId]: null
                    }
                };
            case Xp:
                return {
                    ...u,
                    castlingFlags: {
                        ...u.castlingFlags,
                        [i.payload.flag]: !u.castlingFlags[i.payload.flag]
                    }
                };
            case Zp:
                return {
                    ...u,
                    playerToMove: i.payload.color
                };
            case $p:
                return {
                    ...u,
                    selectedItem: i.payload.item ?? null
                };
            case Jp:
                return {
                    ...u,
                    selectedItem: null
                };
            default:
                return u;
        }
    };
    ng = hp({
        game: Cv,
        settings: Bv,
        analysis: Pv,
        pgn: jv,
        engine: Yv,
        boardeditor: lg
    });
    ag = {
        getItem: (u)=>new Promise((i)=>{
                try {
                    const c = localStorage.getItem(u);
                    if (c == null) {
                        i(null);
                        return;
                    }
                    JSON.parse(c), i(c);
                } catch  {
                    i(null);
                }
            }),
        setItem: (u, i)=>new Promise((c)=>{
                try {
                    localStorage.setItem(u, JSON.stringify(i)), c();
                } catch (s) {
                    console.error("Failed to remove item from storage:", s), c();
                }
            }),
        removeItem: (u)=>new Promise((i)=>{
                try {
                    localStorage.removeItem(u), i();
                } catch (c) {
                    console.error("Failed to remove item from storage:", c), i();
                }
            })
    };
    ug = {
        key: "root",
        storage: ag,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    ig = uv(ug, ng);
    Fp = Ky({
        reducer: ig,
        middleware: (u)=>u({
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
    fv(Fp);
    const rg = "modulepreload", cg = function(u) {
        return "/chess-frontend/" + u;
    }, ep = {}, Wp = function(i, c, s) {
        let o = Promise.resolve();
        if (c && c.length > 0) {
            document.getElementsByTagName("link");
            const m = document.querySelector("meta[property=csp-nonce]"), p = m?.nonce || m?.getAttribute("nonce");
            o = Promise.allSettled(c.map((h)=>{
                if (h = cg(h), h in ep) return;
                ep[h] = !0;
                const v = h.endsWith(".css"), b = v ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${h}"]${b}`)) return;
                const _ = document.createElement("link");
                if (_.rel = v ? "stylesheet" : rg, v || (_.as = "script"), _.crossOrigin = "", _.href = h, p && _.setAttribute("nonce", p), document.head.appendChild(_), v) return new Promise((g, R)=>{
                    _.addEventListener("load", g), _.addEventListener("error", ()=>R(new Error(`Unable to preload CSS for ${h}`)));
                });
            }));
        }
        function f(m) {
            const p = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (p.payload = m, window.dispatchEvent(p), !p.defaultPrevented) throw m;
        }
        return o.then((m)=>{
            for (const p of m || [])p.status === "rejected" && f(p.reason);
            return i().catch(f);
        });
    };
    var $a = {}, tp;
    function sg() {
        if (tp) return $a;
        tp = 1, Object.defineProperty($a, "__esModule", {
            value: !0
        }), $a.parse = m, $a.serialize = v;
        const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, i = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, s = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, f = (()=>{
            const g = function() {};
            return g.prototype = Object.create(null), g;
        })();
        function m(g, R) {
            const O = new f, C = g.length;
            if (C < 2) return O;
            const U = R?.decode || b;
            let w = 0;
            do {
                const H = g.indexOf("=", w);
                if (H === -1) break;
                const Q = g.indexOf(";", w), G = Q === -1 ? C : Q;
                if (H > G) {
                    w = g.lastIndexOf(";", H - 1) + 1;
                    continue;
                }
                const Y = p(g, w, H), $ = h(g, H, Y), te = g.slice(Y, $);
                if (O[te] === void 0) {
                    let se = p(g, H + 1, G), ue = h(g, G, se);
                    const ze = U(g.slice(se, ue));
                    O[te] = ze;
                }
                w = G + 1;
            }while (w < C);
            return O;
        }
        function p(g, R, O) {
            do {
                const C = g.charCodeAt(R);
                if (C !== 32 && C !== 9) return R;
            }while (++R < O);
            return O;
        }
        function h(g, R, O) {
            for(; R > O;){
                const C = g.charCodeAt(--R);
                if (C !== 32 && C !== 9) return R + 1;
            }
            return O;
        }
        function v(g, R, O) {
            const C = O?.encode || encodeURIComponent;
            if (!u.test(g)) throw new TypeError(`argument name is invalid: ${g}`);
            const U = C(R);
            if (!i.test(U)) throw new TypeError(`argument val is invalid: ${R}`);
            let w = g + "=" + U;
            if (!O) return w;
            if (O.maxAge !== void 0) {
                if (!Number.isInteger(O.maxAge)) throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);
                w += "; Max-Age=" + O.maxAge;
            }
            if (O.domain) {
                if (!c.test(O.domain)) throw new TypeError(`option domain is invalid: ${O.domain}`);
                w += "; Domain=" + O.domain;
            }
            if (O.path) {
                if (!s.test(O.path)) throw new TypeError(`option path is invalid: ${O.path}`);
                w += "; Path=" + O.path;
            }
            if (O.expires) {
                if (!_(O.expires) || !Number.isFinite(O.expires.valueOf())) throw new TypeError(`option expires is invalid: ${O.expires}`);
                w += "; Expires=" + O.expires.toUTCString();
            }
            if (O.httpOnly && (w += "; HttpOnly"), O.secure && (w += "; Secure"), O.partitioned && (w += "; Partitioned"), O.priority) switch(typeof O.priority == "string" ? O.priority.toLowerCase() : void 0){
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
                    throw new TypeError(`option priority is invalid: ${O.priority}`);
            }
            if (O.sameSite) switch(typeof O.sameSite == "string" ? O.sameSite.toLowerCase() : O.sameSite){
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
                    throw new TypeError(`option sameSite is invalid: ${O.sameSite}`);
            }
            return w;
        }
        function b(g) {
            if (g.indexOf("%") === -1) return g;
            try {
                return decodeURIComponent(g);
            } catch  {
                return g;
            }
        }
        function _(g) {
            return o.call(g) === "[object Date]";
        }
        return $a;
    }
    sg();
    var lp = "popstate";
    function og(u = {}) {
        function i(o, f) {
            let { pathname: m = "/", search: p = "", hash: h = "" } = un(o.location.hash.substring(1));
            return !m.startsWith("/") && !m.startsWith(".") && (m = "/" + m), vs("", {
                pathname: m,
                search: p,
                hash: h
            }, f.state && f.state.usr || null, f.state && f.state.key || "default");
        }
        function c(o, f) {
            let m = o.document.querySelector("base"), p = "";
            if (m && m.getAttribute("href")) {
                let h = o.location.href, v = h.indexOf("#");
                p = v === -1 ? h : h.slice(0, v);
            }
            return p + "#" + (typeof f == "string" ? f : nu(f));
        }
        function s(o, f) {
            zt(o.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`);
        }
        return dg(i, c, s, u);
    }
    function De(u, i) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(i);
    }
    function zt(u, i) {
        if (!u) {
            typeof console < "u" && console.warn(i);
            try {
                throw new Error(i);
            } catch  {}
        }
    }
    function fg() {
        return Math.random().toString(36).substring(2, 10);
    }
    function np(u, i) {
        return {
            usr: u.state,
            key: u.key,
            idx: i
        };
    }
    function vs(u, i, c = null, s) {
        return {
            pathname: typeof u == "string" ? u : u.pathname,
            search: "",
            hash: "",
            ...typeof i == "string" ? un(i) : i,
            state: c,
            key: i && i.key || s || fg()
        };
    }
    function nu({ pathname: u = "/", search: i = "", hash: c = "" }) {
        return i && i !== "?" && (u += i.charAt(0) === "?" ? i : "?" + i), c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c), u;
    }
    function un(u) {
        let i = {};
        if (u) {
            let c = u.indexOf("#");
            c >= 0 && (i.hash = u.substring(c), u = u.substring(0, c));
            let s = u.indexOf("?");
            s >= 0 && (i.search = u.substring(s), u = u.substring(0, s)), u && (i.pathname = u);
        }
        return i;
    }
    function dg(u, i, c, s = {}) {
        let { window: o = document.defaultView, v5Compat: f = !1 } = s, m = o.history, p = "POP", h = null, v = b();
        v == null && (v = 0, m.replaceState({
            ...m.state,
            idx: v
        }, ""));
        function b() {
            return (m.state || {
                idx: null
            }).idx;
        }
        function _() {
            p = "POP";
            let U = b(), w = U == null ? null : U - v;
            v = U, h && h({
                action: p,
                location: C.location,
                delta: w
            });
        }
        function g(U, w) {
            p = "PUSH";
            let H = vs(C.location, U, w);
            c && c(H, U), v = b() + 1;
            let Q = np(H, v), G = C.createHref(H);
            try {
                m.pushState(Q, "", G);
            } catch (Y) {
                if (Y instanceof DOMException && Y.name === "DataCloneError") throw Y;
                o.location.assign(G);
            }
            f && h && h({
                action: p,
                location: C.location,
                delta: 1
            });
        }
        function R(U, w) {
            p = "REPLACE";
            let H = vs(C.location, U, w);
            c && c(H, U), v = b();
            let Q = np(H, v), G = C.createHref(H);
            m.replaceState(Q, "", G), f && h && h({
                action: p,
                location: C.location,
                delta: 0
            });
        }
        function O(U) {
            let w = o.location.origin !== "null" ? o.location.origin : o.location.href, H = typeof U == "string" ? U : nu(U);
            return H = H.replace(/ $/, "%20"), De(w, `No window.location.(origin|href) available to create URL for href: ${H}`), new URL(H, w);
        }
        let C = {
            get action () {
                return p;
            },
            get location () {
                return u(o, m);
            },
            listen (U) {
                if (h) throw new Error("A history only accepts one active listener");
                return o.addEventListener(lp, _), h = U, ()=>{
                    o.removeEventListener(lp, _), h = null;
                };
            },
            createHref (U) {
                return i(o, U);
            },
            createURL: O,
            encodeLocation (U) {
                let w = O(U);
                return {
                    pathname: w.pathname,
                    search: w.search,
                    hash: w.hash
                };
            },
            push: g,
            replace: R,
            go (U) {
                return m.go(U);
            }
        };
        return C;
    }
    function Ip(u, i, c = "/") {
        return hg(u, i, c, !1);
    }
    function hg(u, i, c, s) {
        let o = typeof i == "string" ? un(i) : i, f = il(o.pathname || "/", c);
        if (f == null) return null;
        let m = em(u);
        pg(m);
        let p = null;
        for(let h = 0; p == null && h < m.length; ++h){
            let v = Ag(f);
            p = Tg(m[h], v, s);
        }
        return p;
    }
    function em(u, i = [], c = [], s = "") {
        let o = (f, m, p)=>{
            let h = {
                relativePath: p === void 0 ? f.path || "" : p,
                caseSensitive: f.caseSensitive === !0,
                childrenIndex: m,
                route: f
            };
            h.relativePath.startsWith("/") && (De(h.relativePath.startsWith(s), `Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(s.length));
            let v = ul([
                s,
                h.relativePath
            ]), b = c.concat(h);
            f.children && f.children.length > 0 && (De(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`), em(f.children, i, b, v)), !(f.path == null && !f.index) && i.push({
                path: v,
                score: Eg(v, f.index),
                routesMeta: b
            });
        };
        return u.forEach((f, m)=>{
            if (f.path === "" || !f.path?.includes("?")) o(f, m);
            else for (let p of tm(f.path))o(f, m, p);
        }), i;
    }
    function tm(u) {
        let i = u.split("/");
        if (i.length === 0) return [];
        let [c, ...s] = i, o = c.endsWith("?"), f = c.replace(/\?$/, "");
        if (s.length === 0) return o ? [
            f,
            ""
        ] : [
            f
        ];
        let m = tm(s.join("/")), p = [];
        return p.push(...m.map((h)=>h === "" ? f : [
                f,
                h
            ].join("/"))), o && p.push(...m), p.map((h)=>u.startsWith("/") && h === "" ? "/" : h);
    }
    function pg(u) {
        u.sort((i, c)=>i.score !== c.score ? c.score - i.score : _g(i.routesMeta.map((s)=>s.childrenIndex), c.routesMeta.map((s)=>s.childrenIndex)));
    }
    var mg = /^:[\w-]+$/, yg = 3, vg = 2, gg = 1, bg = 10, Sg = -2, ap = (u)=>u === "*";
    function Eg(u, i) {
        let c = u.split("/"), s = c.length;
        return c.some(ap) && (s += Sg), i && (s += vg), c.filter((o)=>!ap(o)).reduce((o, f)=>o + (mg.test(f) ? yg : f === "" ? gg : bg), s);
    }
    function _g(u, i) {
        return u.length === i.length && u.slice(0, -1).every((s, o)=>s === i[o]) ? u[u.length - 1] - i[i.length - 1] : 0;
    }
    function Tg(u, i, c = !1) {
        let { routesMeta: s } = u, o = {}, f = "/", m = [];
        for(let p = 0; p < s.length; ++p){
            let h = s[p], v = p === s.length - 1, b = f === "/" ? i : i.slice(f.length) || "/", _ = Bi({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: v
            }, b), g = h.route;
            if (!_ && v && c && !s[s.length - 1].route.index && (_ = Bi({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: !1
            }, b)), !_) return null;
            Object.assign(o, _.params), m.push({
                params: o,
                pathname: ul([
                    f,
                    _.pathname
                ]),
                pathnameBase: Mg(ul([
                    f,
                    _.pathnameBase
                ])),
                route: g
            }), _.pathnameBase !== "/" && (f = ul([
                f,
                _.pathnameBase
            ]));
        }
        return m;
    }
    function Bi(u, i) {
        typeof u == "string" && (u = {
            path: u,
            caseSensitive: !1,
            end: !0
        });
        let [c, s] = Rg(u.path, u.caseSensitive, u.end), o = i.match(c);
        if (!o) return null;
        let f = o[0], m = f.replace(/(.)\/+$/, "$1"), p = o.slice(1);
        return {
            params: s.reduce((v, { paramName: b, isOptional: _ }, g)=>{
                if (b === "*") {
                    let O = p[g] || "";
                    m = f.slice(0, f.length - O.length).replace(/(.)\/+$/, "$1");
                }
                const R = p[g];
                return _ && !R ? v[b] = void 0 : v[b] = (R || "").replace(/%2F/g, "/"), v;
            }, {}),
            pathname: f,
            pathnameBase: m,
            pattern: u
        };
    }
    function Rg(u, i = !1, c = !0) {
        zt(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`);
        let s = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (m, p, h)=>(s.push({
                paramName: p,
                isOptional: h != null
            }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return u.endsWith("*") ? (s.push({
            paramName: "*"
        }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [
            new RegExp(o, i ? void 0 : "i"),
            s
        ];
    }
    function Ag(u) {
        try {
            return u.split("/").map((i)=>decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
        } catch (i) {
            return zt(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`), u;
        }
    }
    function il(u, i) {
        if (i === "/") return u;
        if (!u.toLowerCase().startsWith(i.toLowerCase())) return null;
        let c = i.endsWith("/") ? i.length - 1 : i.length, s = u.charAt(c);
        return s && s !== "/" ? null : u.slice(c) || "/";
    }
    function Og(u, i = "/") {
        let { pathname: c, search: s = "", hash: o = "" } = typeof u == "string" ? un(u) : u;
        return {
            pathname: c ? c.startsWith("/") ? c : Ng(c, i) : i,
            search: Cg(s),
            hash: Dg(o)
        };
    }
    function Ng(u, i) {
        let c = i.replace(/\/+$/, "").split("/");
        return u.split("/").forEach((o)=>{
            o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
        }), c.length > 1 ? c.join("/") : "/";
    }
    function fs(u, i, c, s) {
        return `Cannot include a '${u}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function xg(u) {
        return u.filter((i, c)=>c === 0 || i.route.path && i.route.path.length > 0);
    }
    function lm(u) {
        let i = xg(u);
        return i.map((c, s)=>s === i.length - 1 ? c.pathname : c.pathnameBase);
    }
    function nm(u, i, c, s = !1) {
        let o;
        typeof u == "string" ? o = un(u) : (o = {
            ...u
        }, De(!o.pathname || !o.pathname.includes("?"), fs("?", "pathname", "search", o)), De(!o.pathname || !o.pathname.includes("#"), fs("#", "pathname", "hash", o)), De(!o.search || !o.search.includes("#"), fs("#", "search", "hash", o)));
        let f = u === "" || o.pathname === "", m = f ? "/" : o.pathname, p;
        if (m == null) p = c;
        else {
            let _ = i.length - 1;
            if (!s && m.startsWith("..")) {
                let g = m.split("/");
                for(; g[0] === "..";)g.shift(), _ -= 1;
                o.pathname = g.join("/");
            }
            p = _ >= 0 ? i[_] : "/";
        }
        let h = Og(o, p), v = m && m !== "/" && m.endsWith("/"), b = (f || m === ".") && c.endsWith("/");
        return !h.pathname.endsWith("/") && (v || b) && (h.pathname += "/"), h;
    }
    var ul = (u)=>u.join("/").replace(/\/\/+/g, "/"), Mg = (u)=>u.replace(/\/+$/, "").replace(/^\/*/, "/"), Cg = (u)=>!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, Dg = (u)=>!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
    function Bg(u) {
        return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
    }
    var am = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(am);
    var wg = [
        "GET",
        ...am
    ];
    new Set(wg);
    var Zn = A.createContext(null);
    Zn.displayName = "DataRouter";
    var Ui = A.createContext(null);
    Ui.displayName = "DataRouterState";
    var um = A.createContext({
        isTransitioning: !1
    });
    um.displayName = "ViewTransition";
    var zg = A.createContext(new Map);
    zg.displayName = "Fetchers";
    var Ug = A.createContext(null);
    Ug.displayName = "Await";
    var Lt = A.createContext(null);
    Lt.displayName = "Navigation";
    var au = A.createContext(null);
    au.displayName = "Location";
    var rl = A.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    rl.displayName = "Route";
    var Ns = A.createContext(null);
    Ns.displayName = "RouteError";
    function Pg(u, { relative: i } = {}) {
        De(uu(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: c, navigator: s } = A.useContext(Lt), { hash: o, pathname: f, search: m } = iu(u, {
            relative: i
        }), p = f;
        return c !== "/" && (p = f === "/" ? c : ul([
            c,
            f
        ])), s.createHref({
            pathname: p,
            search: m,
            hash: o
        });
    }
    function uu() {
        return A.useContext(au) != null;
    }
    function rn() {
        return De(uu(), "useLocation() may be used only in the context of a <Router> component."), A.useContext(au).location;
    }
    var im = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function rm(u) {
        A.useContext(Lt).static || A.useLayoutEffect(u);
    }
    function qg() {
        let { isDataRoute: u } = A.useContext(rl);
        return u ? Jg() : jg();
    }
    function jg() {
        De(uu(), "useNavigate() may be used only in the context of a <Router> component.");
        let u = A.useContext(Zn), { basename: i, navigator: c } = A.useContext(Lt), { matches: s } = A.useContext(rl), { pathname: o } = rn(), f = JSON.stringify(lm(s)), m = A.useRef(!1);
        return rm(()=>{
            m.current = !0;
        }), A.useCallback((h, v = {})=>{
            if (zt(m.current, im), !m.current) return;
            if (typeof h == "number") {
                c.go(h);
                return;
            }
            let b = nm(h, JSON.parse(f), o, v.relative === "path");
            u == null && i !== "/" && (b.pathname = b.pathname === "/" ? i : ul([
                i,
                b.pathname
            ])), (v.replace ? c.replace : c.push)(b, v.state, v);
        }, [
            i,
            c,
            f,
            o,
            u
        ]);
    }
    A.createContext(null);
    function iu(u, { relative: i } = {}) {
        let { matches: c } = A.useContext(rl), { pathname: s } = rn(), o = JSON.stringify(lm(c));
        return A.useMemo(()=>nm(u, JSON.parse(o), s, i === "path"), [
            u,
            o,
            s,
            i
        ]);
    }
    function kg(u, i) {
        return cm(u, i);
    }
    function cm(u, i, c, s) {
        De(uu(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: f } = A.useContext(Lt), { matches: m } = A.useContext(rl), p = m[m.length - 1], h = p ? p.params : {}, v = p ? p.pathname : "/", b = p ? p.pathnameBase : "/", _ = p && p.route;
        {
            let H = _ && _.path || "";
            sm(v, !_ || H.endsWith("*") || H.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H === "/" ? "*" : `${H}/*`}">.`);
        }
        let g = rn(), R;
        if (i) {
            let H = typeof i == "string" ? un(i) : i;
            De(b === "/" || H.pathname?.startsWith(b), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`), R = H;
        } else R = g;
        let O = R.pathname || "/", C = O;
        if (b !== "/") {
            let H = b.replace(/^\//, "").split("/");
            C = "/" + O.replace(/^\//, "").split("/").slice(H.length).join("/");
        }
        let U = !f && c && c.matches && c.matches.length > 0 ? c.matches : Ip(u, {
            pathname: C
        });
        zt(_ || U != null, `No routes matched location "${R.pathname}${R.search}${R.hash}" `), zt(U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0, `Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let w = Yg(U && U.map((H)=>Object.assign({}, H, {
                params: Object.assign({}, h, H.params),
                pathname: ul([
                    b,
                    o.encodeLocation ? o.encodeLocation(H.pathname).pathname : H.pathname
                ]),
                pathnameBase: H.pathnameBase === "/" ? b : ul([
                    b,
                    o.encodeLocation ? o.encodeLocation(H.pathnameBase).pathname : H.pathnameBase
                ])
            })), m, c, s);
        return i && w ? A.createElement(au.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    ...R
                },
                navigationType: "POP"
            }
        }, w) : w;
    }
    function Hg() {
        let u = $g(), i = Bg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, s = "rgba(200,200,200, 0.5)", o = {
            padding: "0.5rem",
            backgroundColor: s
        }, f = {
            padding: "2px 4px",
            backgroundColor: s
        }, m = null;
        return console.error("Error handled by React Router default ErrorBoundary:", u), m = A.createElement(A.Fragment, null, A.createElement("p", null, "💿 Hey developer 👋"), A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", A.createElement("code", {
            style: f
        }, "ErrorBoundary"), " or", " ", A.createElement("code", {
            style: f
        }, "errorElement"), " prop on your route.")), A.createElement(A.Fragment, null, A.createElement("h2", null, "Unexpected Application Error!"), A.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, i), c ? A.createElement("pre", {
            style: o
        }, c) : null, m);
    }
    var Lg = A.createElement(Hg, null), Qg = class extends A.Component {
        constructor(u){
            super(u), this.state = {
                location: u.location,
                revalidation: u.revalidation,
                error: u.error
            };
        }
        static getDerivedStateFromError(u) {
            return {
                error: u
            };
        }
        static getDerivedStateFromProps(u, i) {
            return i.location !== u.location || i.revalidation !== "idle" && u.revalidation === "idle" ? {
                error: u.error,
                location: u.location,
                revalidation: u.revalidation
            } : {
                error: u.error !== void 0 ? u.error : i.error,
                location: i.location,
                revalidation: u.revalidation || i.revalidation
            };
        }
        componentDidCatch(u, i) {
            console.error("React Router caught the following error during render", u, i);
        }
        render() {
            return this.state.error !== void 0 ? A.createElement(rl.Provider, {
                value: this.props.routeContext
            }, A.createElement(Ns.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function Kg({ routeContext: u, match: i, children: c }) {
        let s = A.useContext(Zn);
        return s && s.static && s.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = i.route.id), A.createElement(rl.Provider, {
            value: u
        }, c);
    }
    function Yg(u, i = [], c = null, s = null) {
        if (u == null) {
            if (!c) return null;
            if (c.errors) u = c.matches;
            else if (i.length === 0 && !c.initialized && c.matches.length > 0) u = c.matches;
            else return null;
        }
        let o = u, f = c?.errors;
        if (f != null) {
            let h = o.findIndex((v)=>v.route.id && f?.[v.route.id] !== void 0);
            De(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), o = o.slice(0, Math.min(o.length, h + 1));
        }
        let m = !1, p = -1;
        if (c) for(let h = 0; h < o.length; h++){
            let v = o[h];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (p = h), v.route.id) {
                let { loaderData: b, errors: _ } = c, g = v.route.loader && !b.hasOwnProperty(v.route.id) && (!_ || _[v.route.id] === void 0);
                if (v.route.lazy || g) {
                    m = !0, p >= 0 ? o = o.slice(0, p + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((h, v, b)=>{
            let _, g = !1, R = null, O = null;
            c && (_ = f && v.route.id ? f[v.route.id] : void 0, R = v.route.errorElement || Lg, m && (p < 0 && b === 0 ? (sm("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), g = !0, O = null) : p === b && (g = !0, O = v.route.hydrateFallbackElement || null)));
            let C = i.concat(o.slice(0, b + 1)), U = ()=>{
                let w;
                return _ ? w = R : g ? w = O : v.route.Component ? w = A.createElement(v.route.Component, null) : v.route.element ? w = v.route.element : w = h, A.createElement(Kg, {
                    match: v,
                    routeContext: {
                        outlet: h,
                        matches: C,
                        isDataRoute: c != null
                    },
                    children: w
                });
            };
            return c && (v.route.ErrorBoundary || v.route.errorElement || b === 0) ? A.createElement(Qg, {
                location: c.location,
                revalidation: c.revalidation,
                component: R,
                error: _,
                children: U(),
                routeContext: {
                    outlet: null,
                    matches: C,
                    isDataRoute: !0
                }
            }) : U();
        }, null);
    }
    function xs(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Gg(u) {
        let i = A.useContext(Zn);
        return De(i, xs(u)), i;
    }
    function Vg(u) {
        let i = A.useContext(Ui);
        return De(i, xs(u)), i;
    }
    function Xg(u) {
        let i = A.useContext(rl);
        return De(i, xs(u)), i;
    }
    function Ms(u) {
        let i = Xg(u), c = i.matches[i.matches.length - 1];
        return De(c.route.id, `${u} can only be used on routes that contain a unique "id"`), c.route.id;
    }
    function Zg() {
        return Ms("useRouteId");
    }
    function $g() {
        let u = A.useContext(Ns), i = Vg("useRouteError"), c = Ms("useRouteError");
        return u !== void 0 ? u : i.errors?.[c];
    }
    function Jg() {
        let { router: u } = Gg("useNavigate"), i = Ms("useNavigate"), c = A.useRef(!1);
        return rm(()=>{
            c.current = !0;
        }), A.useCallback(async (o, f = {})=>{
            zt(c.current, im), c.current && (typeof o == "number" ? u.navigate(o) : await u.navigate(o, {
                fromRouteId: i,
                ...f
            }));
        }, [
            u,
            i
        ]);
    }
    var up = {};
    function sm(u, i, c) {
        !i && !up[u] && (up[u] = !0, zt(!1, c));
    }
    A.memo(Fg);
    function Fg({ routes: u, future: i, state: c }) {
        return cm(u, void 0, c, i);
    }
    function Ia(u) {
        De(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function Wg({ basename: u = "/", children: i = null, location: c, navigationType: s = "POP", navigator: o, static: f = !1 }) {
        De(!uu(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let m = u.replace(/^\/*/, "/"), p = A.useMemo(()=>({
                basename: m,
                navigator: o,
                static: f,
                future: {}
            }), [
            m,
            o,
            f
        ]);
        typeof c == "string" && (c = un(c));
        let { pathname: h = "/", search: v = "", hash: b = "", state: _ = null, key: g = "default" } = c, R = A.useMemo(()=>{
            let O = il(h, m);
            return O == null ? null : {
                location: {
                    pathname: O,
                    search: v,
                    hash: b,
                    state: _,
                    key: g
                },
                navigationType: s
            };
        }, [
            m,
            h,
            v,
            b,
            _,
            g,
            s
        ]);
        return zt(R != null, `<Router basename="${m}"> is not able to match the URL "${h}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`), R == null ? null : A.createElement(Lt.Provider, {
            value: p
        }, A.createElement(au.Provider, {
            children: i,
            value: R
        }));
    }
    function Ig({ children: u, location: i }) {
        return kg(gs(u), i);
    }
    function gs(u, i = []) {
        let c = [];
        return A.Children.forEach(u, (s, o)=>{
            if (!A.isValidElement(s)) return;
            let f = [
                ...i,
                o
            ];
            if (s.type === A.Fragment) {
                c.push.apply(c, gs(s.props.children, f));
                return;
            }
            De(s.type === Ia, `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), De(!s.props.index || !s.props.children, "An index route cannot have child routes.");
            let m = {
                id: s.props.id || f.join("-"),
                caseSensitive: s.props.caseSensitive,
                element: s.props.element,
                Component: s.props.Component,
                index: s.props.index,
                path: s.props.path,
                loader: s.props.loader,
                action: s.props.action,
                hydrateFallbackElement: s.props.hydrateFallbackElement,
                HydrateFallback: s.props.HydrateFallback,
                errorElement: s.props.errorElement,
                ErrorBoundary: s.props.ErrorBoundary,
                hasErrorBoundary: s.props.hasErrorBoundary === !0 || s.props.ErrorBoundary != null || s.props.errorElement != null,
                shouldRevalidate: s.props.shouldRevalidate,
                handle: s.props.handle,
                lazy: s.props.lazy
            };
            s.props.children && (m.children = gs(s.props.children, f)), c.push(m);
        }), c;
    }
    var xi = "get", Mi = "application/x-www-form-urlencoded";
    function Pi(u) {
        return u != null && typeof u.tagName == "string";
    }
    function eb(u) {
        return Pi(u) && u.tagName.toLowerCase() === "button";
    }
    function tb(u) {
        return Pi(u) && u.tagName.toLowerCase() === "form";
    }
    function lb(u) {
        return Pi(u) && u.tagName.toLowerCase() === "input";
    }
    function nb(u) {
        return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
    }
    function ab(u, i) {
        return u.button === 0 && (!i || i === "_self") && !nb(u);
    }
    var Ai = null;
    function ub() {
        if (Ai === null) try {
            new FormData(document.createElement("form"), 0), Ai = !1;
        } catch  {
            Ai = !0;
        }
        return Ai;
    }
    var ib = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function ds(u) {
        return u != null && !ib.has(u) ? (zt(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mi}"`), null) : u;
    }
    function rb(u, i) {
        let c, s, o, f, m;
        if (tb(u)) {
            let p = u.getAttribute("action");
            s = p ? il(p, i) : null, c = u.getAttribute("method") || xi, o = ds(u.getAttribute("enctype")) || Mi, f = new FormData(u);
        } else if (eb(u) || lb(u) && (u.type === "submit" || u.type === "image")) {
            let p = u.form;
            if (p == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let h = u.getAttribute("formaction") || p.getAttribute("action");
            if (s = h ? il(h, i) : null, c = u.getAttribute("formmethod") || p.getAttribute("method") || xi, o = ds(u.getAttribute("formenctype")) || ds(p.getAttribute("enctype")) || Mi, f = new FormData(p, u), !ub()) {
                let { name: v, type: b, value: _ } = u;
                if (b === "image") {
                    let g = v ? `${v}.` : "";
                    f.append(`${g}x`, "0"), f.append(`${g}y`, "0");
                } else v && f.append(v, _);
            }
        } else {
            if (Pi(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            c = xi, s = null, o = Mi, m = u;
        }
        return f && o === "text/plain" && (m = f, f = void 0), {
            action: s,
            method: c.toLowerCase(),
            encType: o,
            formData: f,
            body: m
        };
    }
    function Cs(u, i) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(i);
    }
    async function cb(u, i) {
        if (u.id in i) return i[u.id];
        try {
            let c = await import(u.module).then(async (m)=>{
                await m.__tla;
                return m;
            });
            return i[u.id] = c, c;
        } catch (c) {
            return console.error(`Error loading route module \`${u.module}\`, reloading page...`), console.error(c), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(()=>{});
        }
    }
    function sb(u) {
        return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
    }
    async function ob(u, i, c) {
        let s = await Promise.all(u.map(async (o)=>{
            let f = i.routes[o.route.id];
            if (f) {
                let m = await cb(f, c);
                return m.links ? m.links() : [];
            }
            return [];
        }));
        return pb(s.flat(1).filter(sb).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function ip(u, i, c, s, o, f) {
        let m = (h, v)=>c[v] ? h.route.id !== c[v].route.id : !0, p = (h, v)=>c[v].pathname !== h.pathname || c[v].route.path?.endsWith("*") && c[v].params["*"] !== h.params["*"];
        return f === "assets" ? i.filter((h, v)=>m(h, v) || p(h, v)) : f === "data" ? i.filter((h, v)=>{
            let b = s.routes[h.route.id];
            if (!b || !b.hasLoader) return !1;
            if (m(h, v) || p(h, v)) return !0;
            if (h.route.shouldRevalidate) {
                let _ = h.route.shouldRevalidate({
                    currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                    currentParams: c[0]?.params || {},
                    nextUrl: new URL(u, window.origin),
                    nextParams: h.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof _ == "boolean") return _;
            }
            return !0;
        }) : [];
    }
    function fb(u, i, { includeHydrateFallback: c } = {}) {
        return db(u.map((s)=>{
            let o = i.routes[s.route.id];
            if (!o) return [];
            let f = [
                o.module
            ];
            return o.clientActionModule && (f = f.concat(o.clientActionModule)), o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (f = f.concat(o.hydrateFallbackModule)), o.imports && (f = f.concat(o.imports)), f;
        }).flat(1));
    }
    function db(u) {
        return [
            ...new Set(u)
        ];
    }
    function hb(u) {
        let i = {}, c = Object.keys(u).sort();
        for (let s of c)i[s] = u[s];
        return i;
    }
    function pb(u, i) {
        let c = new Set;
        return new Set(i), u.reduce((s, o)=>{
            let f = JSON.stringify(hb(o));
            return c.has(f) || (c.add(f), s.push({
                key: f,
                link: o
            })), s;
        }, []);
    }
    function mb(u, i) {
        let c = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
        return c.pathname === "/" ? c.pathname = "_root.data" : i && il(c.pathname, i) === "/" ? c.pathname = `${i.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
    }
    function om() {
        let u = A.useContext(Zn);
        return Cs(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
    }
    function yb() {
        let u = A.useContext(Ui);
        return Cs(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
    }
    var Ds = A.createContext(void 0);
    Ds.displayName = "FrameworkContext";
    function fm() {
        let u = A.useContext(Ds);
        return Cs(u, "You must render this element inside a <HydratedRouter> element"), u;
    }
    function vb(u, i) {
        let c = A.useContext(Ds), [s, o] = A.useState(!1), [f, m] = A.useState(!1), { onFocus: p, onBlur: h, onMouseEnter: v, onMouseLeave: b, onTouchStart: _ } = i, g = A.useRef(null);
        A.useEffect(()=>{
            if (u === "render" && m(!0), u === "viewport") {
                let C = (w)=>{
                    w.forEach((H)=>{
                        m(H.isIntersecting);
                    });
                }, U = new IntersectionObserver(C, {
                    threshold: .5
                });
                return g.current && U.observe(g.current), ()=>{
                    U.disconnect();
                };
            }
        }, [
            u
        ]), A.useEffect(()=>{
            if (s) {
                let C = setTimeout(()=>{
                    m(!0);
                }, 100);
                return ()=>{
                    clearTimeout(C);
                };
            }
        }, [
            s
        ]);
        let R = ()=>{
            o(!0);
        }, O = ()=>{
            o(!1), m(!1);
        };
        return c ? u !== "intent" ? [
            f,
            g,
            {}
        ] : [
            f,
            g,
            {
                onFocus: Ja(p, R),
                onBlur: Ja(h, O),
                onMouseEnter: Ja(v, R),
                onMouseLeave: Ja(b, O),
                onTouchStart: Ja(_, R)
            }
        ] : [
            !1,
            g,
            {}
        ];
    }
    function Ja(u, i) {
        return (c)=>{
            u && u(c), c.defaultPrevented || i(c);
        };
    }
    function gb({ page: u, ...i }) {
        let { router: c } = om(), s = A.useMemo(()=>Ip(c.routes, u, c.basename), [
            c.routes,
            u,
            c.basename
        ]);
        return s ? A.createElement(Sb, {
            page: u,
            matches: s,
            ...i
        }) : null;
    }
    function bb(u) {
        let { manifest: i, routeModules: c } = fm(), [s, o] = A.useState([]);
        return A.useEffect(()=>{
            let f = !1;
            return ob(u, i, c).then((m)=>{
                f || o(m);
            }), ()=>{
                f = !0;
            };
        }, [
            u,
            i,
            c
        ]), s;
    }
    function Sb({ page: u, matches: i, ...c }) {
        let s = rn(), { manifest: o, routeModules: f } = fm(), { basename: m } = om(), { loaderData: p, matches: h } = yb(), v = A.useMemo(()=>ip(u, i, h, o, s, "data"), [
            u,
            i,
            h,
            o,
            s
        ]), b = A.useMemo(()=>ip(u, i, h, o, s, "assets"), [
            u,
            i,
            h,
            o,
            s
        ]), _ = A.useMemo(()=>{
            if (u === s.pathname + s.search + s.hash) return [];
            let O = new Set, C = !1;
            if (i.forEach((w)=>{
                let H = o.routes[w.route.id];
                !H || !H.hasLoader || (!v.some((Q)=>Q.route.id === w.route.id) && w.route.id in p && f[w.route.id]?.shouldRevalidate || H.hasClientLoader ? C = !0 : O.add(w.route.id));
            }), O.size === 0) return [];
            let U = mb(u, m);
            return C && O.size > 0 && U.searchParams.set("_routes", i.filter((w)=>O.has(w.route.id)).map((w)=>w.route.id).join(",")), [
                U.pathname + U.search
            ];
        }, [
            m,
            p,
            s,
            o,
            v,
            i,
            u,
            f
        ]), g = A.useMemo(()=>fb(b, o), [
            b,
            o
        ]), R = bb(b);
        return A.createElement(A.Fragment, null, _.map((O)=>A.createElement("link", {
                key: O,
                rel: "prefetch",
                as: "fetch",
                href: O,
                ...c
            })), g.map((O)=>A.createElement("link", {
                key: O,
                rel: "modulepreload",
                href: O,
                ...c
            })), R.map(({ key: O, link: C })=>A.createElement("link", {
                key: O,
                ...C
            })));
    }
    function Eb(...u) {
        return (i)=>{
            u.forEach((c)=>{
                typeof c == "function" ? c(i) : c != null && (c.current = i);
            });
        };
    }
    var dm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        dm && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function _b({ basename: u, children: i, window: c }) {
        let s = A.useRef();
        s.current == null && (s.current = og({
            window: c,
            v5Compat: !0
        }));
        let o = s.current, [f, m] = A.useState({
            action: o.action,
            location: o.location
        }), p = A.useCallback((h)=>{
            A.startTransition(()=>m(h));
        }, [
            m
        ]);
        return A.useLayoutEffect(()=>o.listen(p), [
            o,
            p
        ]), A.createElement(Wg, {
            basename: u,
            children: i,
            location: f.location,
            navigationType: f.action,
            navigator: o
        });
    }
    var hm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, tu = A.forwardRef(function({ onClick: i, discover: c = "render", prefetch: s = "none", relative: o, reloadDocument: f, replace: m, state: p, target: h, to: v, preventScrollReset: b, viewTransition: _, ...g }, R) {
        let { basename: O } = A.useContext(Lt), C = typeof v == "string" && hm.test(v), U, w = !1;
        if (typeof v == "string" && C && (U = v, dm)) try {
            let ue = new URL(window.location.href), ze = v.startsWith("//") ? new URL(ue.protocol + v) : new URL(v), at = il(ze.pathname, O);
            ze.origin === ue.origin && at != null ? v = at + ze.search + ze.hash : w = !0;
        } catch  {
            zt(!1, `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let H = Pg(v, {
            relative: o
        }), [Q, G, Y] = vb(s, g), $ = Ob(v, {
            replace: m,
            state: p,
            target: h,
            preventScrollReset: b,
            relative: o,
            viewTransition: _
        });
        function te(ue) {
            i && i(ue), ue.defaultPrevented || $(ue);
        }
        let se = A.createElement("a", {
            ...g,
            ...Y,
            href: U || H,
            onClick: w || f ? i : te,
            ref: Eb(R, G),
            target: h,
            "data-discover": !C && c === "render" ? "true" : void 0
        });
        return Q && !C ? A.createElement(A.Fragment, null, se, A.createElement(gb, {
            page: H
        })) : se;
    });
    tu.displayName = "Link";
    var Tb = A.forwardRef(function({ "aria-current": i = "page", caseSensitive: c = !1, className: s = "", end: o = !1, style: f, to: m, viewTransition: p, children: h, ...v }, b) {
        let _ = iu(m, {
            relative: v.relative
        }), g = rn(), R = A.useContext(Ui), { navigator: O, basename: C } = A.useContext(Lt), U = R != null && Db(_) && p === !0, w = O.encodeLocation ? O.encodeLocation(_).pathname : _.pathname, H = g.pathname, Q = R && R.navigation && R.navigation.location ? R.navigation.location.pathname : null;
        c || (H = H.toLowerCase(), Q = Q ? Q.toLowerCase() : null, w = w.toLowerCase()), Q && C && (Q = il(Q, C) || Q);
        const G = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
        let Y = H === w || !o && H.startsWith(w) && H.charAt(G) === "/", $ = Q != null && (Q === w || !o && Q.startsWith(w) && Q.charAt(w.length) === "/"), te = {
            isActive: Y,
            isPending: $,
            isTransitioning: U
        }, se = Y ? i : void 0, ue;
        typeof s == "function" ? ue = s(te) : ue = [
            s,
            Y ? "active" : null,
            $ ? "pending" : null,
            U ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let ze = typeof f == "function" ? f(te) : f;
        return A.createElement(tu, {
            ...v,
            "aria-current": se,
            className: ue,
            ref: b,
            style: ze,
            to: m,
            viewTransition: p
        }, typeof h == "function" ? h(te) : h);
    });
    Tb.displayName = "NavLink";
    var Rb = A.forwardRef(({ discover: u = "render", fetcherKey: i, navigate: c, reloadDocument: s, replace: o, state: f, method: m = xi, action: p, onSubmit: h, relative: v, preventScrollReset: b, viewTransition: _, ...g }, R)=>{
        let O = Mb(), C = Cb(p, {
            relative: v
        }), U = m.toLowerCase() === "get" ? "get" : "post", w = typeof p == "string" && hm.test(p), H = (Q)=>{
            if (h && h(Q), Q.defaultPrevented) return;
            Q.preventDefault();
            let G = Q.nativeEvent.submitter, Y = G?.getAttribute("formmethod") || m;
            O(G || Q.currentTarget, {
                fetcherKey: i,
                method: Y,
                navigate: c,
                replace: o,
                state: f,
                relative: v,
                preventScrollReset: b,
                viewTransition: _
            });
        };
        return A.createElement("form", {
            ref: R,
            method: U,
            action: C,
            onSubmit: s ? h : H,
            ...g,
            "data-discover": !w && u === "render" ? "true" : void 0
        });
    });
    Rb.displayName = "Form";
    function Ab(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function pm(u) {
        let i = A.useContext(Zn);
        return De(i, Ab(u)), i;
    }
    function Ob(u, { target: i, replace: c, state: s, preventScrollReset: o, relative: f, viewTransition: m } = {}) {
        let p = qg(), h = rn(), v = iu(u, {
            relative: f
        });
        return A.useCallback((b)=>{
            if (ab(b, i)) {
                b.preventDefault();
                let _ = c !== void 0 ? c : nu(h) === nu(v);
                p(u, {
                    replace: _,
                    state: s,
                    preventScrollReset: o,
                    relative: f,
                    viewTransition: m
                });
            }
        }, [
            h,
            p,
            v,
            c,
            s,
            i,
            u,
            o,
            f,
            m
        ]);
    }
    var Nb = 0, xb = ()=>`__${String(++Nb)}__`;
    function Mb() {
        let { router: u } = pm("useSubmit"), { basename: i } = A.useContext(Lt), c = Zg();
        return A.useCallback(async (s, o = {})=>{
            let { action: f, method: m, encType: p, formData: h, body: v } = rb(s, i);
            if (o.navigate === !1) {
                let b = o.fetcherKey || xb();
                await u.fetch(b, c, o.action || f, {
                    preventScrollReset: o.preventScrollReset,
                    formData: h,
                    body: v,
                    formMethod: o.method || m,
                    formEncType: o.encType || p,
                    flushSync: o.flushSync
                });
            } else await u.navigate(o.action || f, {
                preventScrollReset: o.preventScrollReset,
                formData: h,
                body: v,
                formMethod: o.method || m,
                formEncType: o.encType || p,
                replace: o.replace,
                state: o.state,
                fromRouteId: c,
                flushSync: o.flushSync,
                viewTransition: o.viewTransition
            });
        }, [
            u,
            i,
            c
        ]);
    }
    function Cb(u, { relative: i } = {}) {
        let { basename: c } = A.useContext(Lt), s = A.useContext(rl);
        De(s, "useFormAction must be used inside a RouteContext");
        let [o] = s.matches.slice(-1), f = {
            ...iu(u || ".", {
                relative: i
            })
        }, m = rn();
        if (u == null) {
            f.search = m.search;
            let p = new URLSearchParams(f.search), h = p.getAll("index");
            if (h.some((b)=>b === "")) {
                p.delete("index"), h.filter((_)=>_).forEach((_)=>p.append("index", _));
                let b = p.toString();
                f.search = b ? `?${b}` : "";
            }
        }
        return (!u || u === ".") && o.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (f.pathname = f.pathname === "/" ? c : ul([
            c,
            f.pathname
        ])), nu(f);
    }
    function Db(u, i = {}) {
        let c = A.useContext(um);
        De(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: s } = pm("useViewTransitionState"), o = iu(u, {
            relative: i.relative
        });
        if (!c.isTransitioning) return !1;
        let f = il(c.currentLocation.pathname, s) || c.currentLocation.pathname, m = il(c.nextLocation.pathname, s) || c.nextLocation.pathname;
        return Bi(o.pathname, m) != null || Bi(o.pathname, f) != null;
    }
    new TextEncoder;
    let Bb, wb, mm, rp;
    Bb = A.createContext();
    wb = ({ children: u })=>{
        const i = (b, _)=>{
            try {
                const g = localStorage.getItem(b);
                if (g == null) return _;
                const R = JSON.parse(g);
                return R !== void 0 ? R : _;
            } catch  {
                return _;
            }
        }, [c, s] = A.useState(()=>i(Ae.THEME_KEY, Ae.THEME)), [o, f] = A.useState(()=>i(Ae.ENABLE_SOUND_KEY, Ae.ENABLE_SOUND)), [m, p] = A.useState(()=>i(Ae.TIMER_DURATION_KEY, Ae.TIMER_DURATION)), [h, v] = A.useState(()=>i(Ae.IS_FLIPPED_KEY, Ae.IS_FLIPPED));
        return A.useEffect(()=>localStorage.setItem(Ae.THEME_KEY, JSON.stringify(c)), [
            c
        ]), A.useEffect(()=>localStorage.setItem(Ae.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), A.useEffect(()=>localStorage.setItem(Ae.TIMER_DURATION_KEY, JSON.stringify(m)), [
            m
        ]), A.useEffect(()=>localStorage.setItem(Ae.IS_FLIPPED_KEY, JSON.stringify(h)), [
            h
        ]), k.jsx(Bb.Provider, {
            value: {
                theme: c,
                setTheme: s,
                enableSound: o,
                setEnableSound: f,
                timerDuration: m,
                setTimerDuration: p,
                isFlipped: h,
                setIsFlipped: v
            },
            children: u
        });
    };
    mm = (u, i)=>i.split(" ")[1] === "w" ? u : -u;
    zb = (u, i, c, s, o)=>{
        if (typeof u == "string") {
            if (u.startsWith("info") && u.includes("score")) {
                const f = u.match(/score (cp|mate) (-?\d+)/);
                if (f) {
                    const p = f[1], h = parseInt(f[2], 10);
                    let v = 0;
                    p === "cp" ? v = h / 100 : p === "mate" && (v = h > 0 ? 10 : -10);
                    const b = mm(v, s);
                    i(b);
                }
                const m = u.match(/ pv (.+)/);
                m && c(m[1]);
            }
            if (u.startsWith("bestmove") && o) {
                const m = u.trim().split(/\s+/)[1];
                o(m && m !== "(none)" ? m : "");
            }
        }
    };
    rp = "/chess-frontend/stockfish/stockfish-17-lite-single.js";
    function eu(u) {
        return u == null ? [] : typeof u == "string" ? u.split(/\r?\n/).map((i)=>i.trim()).filter(Boolean) : typeof ArrayBuffer < "u" && u instanceof ArrayBuffer ? eu(new TextDecoder().decode(u)) : ArrayBuffer.isView && ArrayBuffer.isView(u) ? eu(new TextDecoder().decode(u)) : Array.isArray(u) ? u.flatMap((i)=>eu(i)) : typeof u == "object" && u !== null && typeof u.data == "string" ? eu(u.data) : [
            String(u).trim()
        ].filter(Boolean);
    }
    function Ub(u) {
        const i = u.match(/\bscore\s+(cp|mate)\s+(-?\d+)/i);
        if (!i) return null;
        const c = i[1].toLowerCase(), s = parseInt(i[2], 10);
        return Number.isNaN(s) ? null : c === "cp" ? s / 100 : s > 0 ? 10 : -10;
    }
    Pb = function(u, i = "lite", c = 8e3) {
        const s = A.useRef(null), o = A.useRef(null), f = A.useRef(null), m = A.useRef(null), p = A.useRef(!1), h = A.useRef([]), v = A.useRef(!0), b = A.useRef(!1), _ = A.useRef(!1), g = A.useRef(null), R = A.useRef(null), O = A.useRef(!1), C = A.useRef(null), U = A.useCallback(()=>{
            if (!(b.current || !s.current)) {
                for(b.current = !0; h.current.length > 0;){
                    const be = h.current.findIndex((z)=>z.type === "stop"), pe = be >= 0 ? h.current.splice(be, 1)[0] : h.current.shift();
                    pe && s.current.postMessage(pe.cmd);
                }
                b.current = !1;
            }
        }, []), w = A.useCallback((be, pe)=>{
            h.current.push({
                type: be,
                cmd: pe
            }), U();
        }, [
            U
        ]), H = A.useCallback((be)=>{
            be.onmessage = (pe)=>{
                const z = eu(pe.data);
                for (const K of z){
                    if (K === "uciok") {
                        O.current = !0;
                        const ie = C.current;
                        ie && (C.current = null, ie());
                    }
                    const F = g.current;
                    if (F) {
                        if (K.startsWith("info") && /\bscore\b/i.test(K)) {
                            const ie = Ub(K);
                            ie != null && (R.current = mm(ie, F.fen));
                        }
                        if (K.startsWith("bestmove")) {
                            const E = K.trim().split(/\s+/)[1], L = E && E !== "(none)" ? E : "", X = R.current;
                            clearTimeout(F.timeoutId), g.current = null;
                            const V = X != null && Number.isFinite(X) ? X : 0;
                            F.resolve({
                                evalScore: V,
                                bestMoveUci: L
                            });
                        }
                    }
                    if (u && u(K), K === "readyok" || K.startsWith("bestmove")) v.current = !0;
                    else if (K.startsWith("info") && /\bscore\b/i.test(K)) {
                        const ie = K.match(/\bscore\s+(cp|mate)\s+(-?\d+)/i);
                        if (ie) {
                            const E = ie[1].toLowerCase(), L = parseInt(ie[2], 10), X = E === "cp" ? L / 100 : L > 0 ? 10 : -10;
                            o.current && (o.current(X), o.current = null);
                        }
                    }
                }
            }, be.onerror = (pe)=>{
                if (console.error("Error with Stockfish worker:", pe), g.current) {
                    clearTimeout(g.current.timeoutId);
                    const z = pe?.message || (typeof pe == "string" ? pe : "Stockfish worker error");
                    g.current.reject(new Error(z)), g.current = null;
                }
            };
        }, [
            u
        ]), Q = A.useCallback(()=>{
            s.current || (O.current = !1, i === "lite" ? s.current = new Worker(rp) : s.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), H(s.current), s.current.postMessage("uci"), console.log("Initializing worker ..."));
        }, [
            H,
            i
        ]), G = A.useCallback(()=>{
            s.current && s.current.terminate(), O.current = !1, i === "lite" ? s.current = new Worker(rp) : s.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), H(s.current), s.current.postMessage("uci");
        }, [
            H,
            i
        ]), Y = A.useCallback((be)=>{
            s.current && w("normal", be);
        }, []), $ = A.useCallback((be)=>{
            be.forEach((pe)=>{
                w("normal", `setoption name ${pe.name} value ${pe.value}`);
            });
        }, [
            Y
        ]), te = A.useCallback((be, pe = [])=>{
            let z = `position fen ${be}`;
            if (pe.length > 0) {
                const K = pe.join(" ");
                z += ` moves ${K}`;
            }
            w("normal", z);
        }, [
            Y
        ]), se = A.useCallback((be)=>{
            s.current && p.current && (w("stop", "stop"), p.current = !1, f.current && (clearTimeout(f.current), f.current = null));
        }, []), ue = A.useCallback((be)=>{
            _.current && (s.current || Q(), clearTimeout(f.current), se("pre startSearch"), m.current && clearTimeout(m.current), m.current = setTimeout(()=>{
                p.current = !0, w("normal", `position fen ${be}`), w("normal", "go infinite"), f.current = setTimeout(()=>{
                    se("startSearch timer expire");
                }, c);
            }, 50));
        }, [
            c,
            se
        ]), ze = A.useCallback(()=>{
            O.current = !1, C.current = null, g.current && (clearTimeout(g.current.timeoutId), g.current.reject(new Error("Engine terminated")), g.current = null), s.current && (s.current.terminate(), s.current = null), p.current = !1, v.current = !0, f.current && (clearTimeout(f.current), f.current = null);
        }, []), at = A.useCallback((be)=>{
            _.current = be, be || (g.current && (clearTimeout(g.current.timeoutId), g.current.reject(new Error("Engine disabled")), g.current = null), se("permission revoked"), ze());
        }, [
            se,
            ze
        ]), Qe = 14, Qt = A.useCallback((be)=>new Promise((pe, z)=>{
                if (!_.current) {
                    z(new Error("Engine disabled"));
                    return;
                }
                if (g.current) {
                    const E = g.current;
                    clearTimeout(E.timeoutId), E.reject(new Error("Superseded")), g.current = null;
                }
                if (C.current = null, s.current || Q(), !s.current) {
                    z(new Error("Worker unavailable"));
                    return;
                }
                R.current = null;
                const K = setTimeout(()=>{
                    if (g.current) {
                        const E = g.current;
                        g.current = null, E.reject(new Error("Quick analyze timeout"));
                    }
                }, 6e4);
                g.current = {
                    resolve: pe,
                    reject: z,
                    fen: be,
                    timeoutId: K
                };
                const F = ()=>{
                    w("stop", "stop"), p.current = !1, w("normal", "setoption name MultiPV value 1"), w("normal", `position fen ${be}`), w("normal", `go depth ${Qe}`);
                }, ie = ()=>{
                    setTimeout(F, 50);
                };
                O.current ? ie() : C.current = ie;
            }), [
            w,
            Q
        ]);
        return A.useEffect(()=>()=>{
                g.current && (clearTimeout(g.current.timeoutId), g.current.reject(new Error("Unmounted")), g.current = null), ze();
            }, []), {
            initEngine: G,
            setOptions: $,
            setFen: te,
            startSearch: ue,
            stopSearch: se,
            terminateEngine: ze,
            syncEnabledState: at,
            quickAnalyzeFen: Qt
        };
    };
    let ym, hs, kb, bs, vm;
    ym = A.createContext();
    qb = ()=>A.useContext(ym);
    hs = ({ children: u })=>{
        const i = A.useRef(null), c = A.useCallback((f)=>{
            i.current && i.current(f);
        }, []), s = Pb(c), o = A.useCallback((f)=>{
            i.current = f;
        }, []);
        return k.jsx(ym.Provider, {
            value: {
                ...s,
                setOnMessage: o
            },
            children: u
        });
    };
    jb = ()=>{
        const [u, i] = A.useState(document.body.classList.contains("dark-theme")), c = ()=>{
            document.body.classList.toggle("dark-theme"), i(!u);
        }, s = ()=>{
            const f = new Date().getHours();
            return f < 6 || f > 18;
        };
        return A.useEffect(()=>{
            s() != u && c();
        }, []), k.jsx("button", {
            onClick: c,
            className: "theme-toggle-btn",
            children: u ? "☀️" : "🌙"
        });
    };
    kb = nn.memo(({ onSubmit: u })=>{
        const [i, c] = A.useState(!1), [s, o] = A.useState(""), f = ()=>c(!0), m = ()=>{
            c(!1), o("");
        }, p = (v)=>{
            v.target.classList.contains("fen-popup-overlay") && m();
        }, h = (v)=>{
            v.preventDefault(), u(s), m();
        };
        return k.jsxs(k.Fragment, {
            children: [
                k.jsx("button", {
                    className: "action-button",
                    onClick: f,
                    children: "Set FEN"
                }),
                i && k.jsx("div", {
                    className: "fen-popup-overlay",
                    onClick: p,
                    children: k.jsxs("div", {
                        className: "fen-popup",
                        children: [
                            k.jsx("h5", {
                                children: "Setup board from FEN "
                            }),
                            k.jsx("button", {
                                className: "fen-close",
                                onClick: m,
                                children: "×"
                            }),
                            k.jsxs("form", {
                                onSubmit: h,
                                className: "fen-input-form",
                                children: [
                                    k.jsx("input", {
                                        type: "text",
                                        value: s,
                                        onChange: (v)=>o(v.target.value),
                                        placeholder: "Enter FEN",
                                        className: "fen-input"
                                    }),
                                    k.jsx("div", {
                                        className: "fen-actions",
                                        children: k.jsx("button", {
                                            type: "submit",
                                            className: "fen-submit",
                                            children: "Submit"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        });
    });
    bs = new Set;
    vm = {
        current: ""
    };
    function Hb(u) {
        vm.current = u, bs.forEach((i)=>i(u));
    }
    function Lb() {
        const [u, i] = A.useState(vm.current);
        return A.useEffect(()=>{
            const c = (s)=>i(s);
            return bs.add(c), ()=>{
                bs.delete(c);
            };
        }, []), u;
    }
    function Qb({ component: u, message: i }) {
        const [c, s] = A.useState(!1), o = ()=>{
            s(!0), setTimeout(()=>s(!1), 2e3);
        };
        return k.jsxs("div", {
            className: "toast-wrapper",
            children: [
                k.jsx("button", {
                    onClick: o,
                    className: "toast-button",
                    children: u
                }),
                c && k.jsx("div", {
                    className: "toast-message",
                    children: i
                })
            ]
        });
    }
    const Kb = nn.memo(({ isValid: u, fenErrorMsg: i })=>{
        const c = Lb(), s = ()=>{
            navigator.clipboard.writeText(c), alert("FEN copied to clipboard!");
        };
        return k.jsxs("div", {
            className: "fen-container",
            children: [
                k.jsx("div", {
                    id: "fen-display",
                    className: "fen-display",
                    children: c
                }),
                u ? k.jsx("div", {
                    className: "circle-tick",
                    children: "✔"
                }) : k.jsx(Qb, {
                    component: k.jsx("div", {
                        className: "circle-cross",
                        children: "✖"
                    }),
                    message: i
                }),
                k.jsx("button", {
                    onClick: s,
                    className: "copy-button",
                    children: k.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            k.jsx("rect", {
                                x: "3",
                                y: "3",
                                width: "14",
                                height: "14",
                                rx: "2",
                                ry: "2",
                                fill: "#f5f5f5",
                                stroke: "#333333"
                            }),
                            k.jsx("rect", {
                                x: "7",
                                y: "7",
                                width: "14",
                                height: "14",
                                rx: "2",
                                ry: "2",
                                fill: "#ffffff",
                                stroke: "#333333"
                            })
                        ]
                    })
                })
            ]
        });
    }), Yb = (u)=>{
        if (u == null || u === "") return {
            isValid: !1,
            msg: ""
        };
        if (u.length < 10 || u.length > 100) return {
            isValid: !1,
            msg: ""
        };
        if (!/^[rnbqkpRNBQKP1-8/]+ [wb] [KQkq-]{0,4} (?:-|[a-h][36]) \d+ \d+$/.test(u)) return {
            isValid: !1,
            msg: ""
        };
        const c = u.split(" ");
        if (c.length === 0) return {
            isValid: !1,
            msg: ""
        };
        const s = c[2], o = c[0].split("/");
        if (o.length == 0) return {
            isValid: !1,
            msg: ""
        };
        let f = 0, m = 0;
        const p = new Map([]);
        for(let g = 0; g < 8; g++){
            const R = o[g];
            let O = 0;
            for(let C = 0; C < R.length; C++){
                const U = Number(R[C]);
                switch(O += isNaN(U) ? 1 : U, R[C]){
                    case "k":
                        g === 0 && O === 5 && p.set("e8", R[C]), f += 1;
                        break;
                    case "K":
                        g === 7 && O === 5 && p.set("e1", R[C]), m += 1;
                        break;
                    case "p":
                        if (g === 0 || g === 7) return {
                            isValid: !1,
                            msg: "pawn can not exist on last rank or first rank."
                        };
                        break;
                    case "P":
                        if (g === 0 || g === 7) return {
                            isValid: !1,
                            msg: "pawn can not exist on last rank or first rank."
                        };
                        break;
                    case "r":
                        g === 0 && C === 0 ? p.set("a8", R[C]) : g === 0 && C === R.length - 1 && p.set("h8", R[C]);
                        break;
                    case "R":
                        g === 7 && C === 0 ? p.set("a1", R[C]) : g === 7 && C === R.length - 1 && p.set("h1", R[C]);
                        break;
                }
            }
        }
        if (f !== 1) return {
            isValid: !1,
            msg: "There should be exactly one black king."
        };
        if (m !== 1) return {
            isValid: !1,
            msg: "There should be exactly one white king."
        };
        for(let g = 0; g < s.length; g++)switch(s[g]){
            case "K":
                if (!p.has("e1") || p.get("e1") !== "K") return {
                    isValid: !1,
                    msg: "white castling is not possible, king is not at e1."
                };
                if (!p.has("h1") || p.get("h1") !== "R") return {
                    isValid: !1,
                    msg: "white short castling is not possible, rook is not at h1"
                };
                break;
            case "Q":
                if (!p.has("e1") || p.get("e1") !== "K") return {
                    isValid: !1,
                    msg: "white castling is not possible, king is not at e1."
                };
                if (!p.has("a1") || p.get("a1") !== "R") return {
                    isValid: !1,
                    msg: "white long castling is not possible, rook is not at a1"
                };
                break;
            case "k":
                if (!p.has("e8") || p.get("e8") !== "k") return {
                    isValid: !1,
                    msg: "black castling is not possible, king is not at e8."
                };
                if (!p.has("h8") || p.get("h8") !== "r") return {
                    isValid: !1,
                    msg: "black short castling is not possible, rook is not at h8"
                };
                break;
            case "q":
                if (!p.has("e8") || p.get("e8") !== "k") return {
                    isValid: !1,
                    msg: "black castling is not possible, king is not at e8."
                };
                if (!p.has("a8") || p.get("a8") !== "r") return {
                    isValid: !1,
                    msg: "black long castling is not possible, rook is not at a8"
                };
                break;
        }
        const h = c[1], v = Gb(u);
        return new zi(v).inCheck() ? {
            isValid: !1,
            msg: `${h === "w" ? "white" : "black"} to move but ${h === "w" ? "black" : "white"} was already in check and did not defend king`
        } : {
            isValid: !0,
            msg: ""
        };
    };
    function Gb(u) {
        const i = u.split(" ");
        return i[1] = i[1] === "w" ? "b" : "w", i.join(" ");
    }
    const gm = (u, i)=>{
        u.dataTransfer.setData("text", i);
    }, Vb = (u, i, c, s)=>{
        i != null && c == null && s({
            category: Ae.BOARD_PIECE,
            id: `${u}-${i.color}-${i.type}`,
            chessPiece: i
        });
    }, Xb = ({ newSelectedItem: u, selectedItem: i, setSelectedItem: c })=>{
        if (i == null) {
            c(u);
            return;
        }
        if (u.id === i.id) {
            c(null);
            return;
        }
        i.category === Ae.BOARD_PIECE ? u.category === Ae.PALLETE_ITEM && c(u) : i.category === Ae.PALLETE_ITEM && u.category === Ae.PALLETE_ITEM && c(u);
    }, cp = {
        category: Ae.PALLETE_ITEM,
        id: Ae.ERASER_ID,
        chessPiece: null
    }, Zb = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    }, $b = nn.memo(({ handleDragStart: u, handlePaletteClick: i })=>{
        const c = [
            "p",
            "r",
            "n",
            "b",
            "q",
            "k"
        ], s = [
            "w",
            "b"
        ], o = an((p)=>p.boardeditor.selectedItem), f = Xn(), m = (p)=>{
            f(Os(p));
        };
        return k.jsxs("div", {
            className: "palette",
            children: [
                s.map((p)=>c.map((h)=>k.jsx("img", {
                            id: `palette-${p}-${h}`,
                            src: `pieces/svg/${p}_${Zb[h]}.svg`,
                            alt: `${p} ${h}`,
                            draggable: !0,
                            "data-type": h,
                            "data-color": p,
                            "data-square": "palette",
                            onClick: ()=>{
                                i({
                                    newSelectedItem: {
                                        category: Ae.PALLETE_ITEM,
                                        id: `p-${p}-${h}`,
                                        chessPiece: {
                                            type: h,
                                            color: p
                                        }
                                    },
                                    selectedItem: o,
                                    setSelectedItem: m
                                });
                            },
                            onDragStart: (v)=>u(v, `palette-${p}-${h}`),
                            className: `palette-piece ${o?.id === `p-${p}-${h.toLowerCase()}` ? "selected" : ""}`,
                            style: {
                                order: p == "w" ? c.indexOf(h) : c.indexOf(h) + 7
                            }
                        }, `${p}-${h}`))),
                k.jsx("img", {
                    "data-square": "palette",
                    src: "assets/eraser.svg",
                    style: {
                        order: 6
                    },
                    onClick: ()=>{
                        i({
                            newSelectedItem: cp,
                            selectedItem: o,
                            setSelectedItem: m
                        });
                    },
                    className: `palette-piece eraser ${o?.id === cp.id ? "selected" : ""}`
                })
            ]
        });
    }), Jb = (u, i)=>{
        let c = "", s = 0;
        for(let o = 0; o < 8; o++){
            const f = u[i[o]];
            f == null && s++, f != null ? (s > 0 && (c += `${s}`), s = 0, c += f.color === "w" ? f.type?.toUpperCase() : f.type) : o == 7 && s > 0 && (c += `${s}`);
        }
        return c;
    }, Fb = ({ board: u, playerToMove: i, halfmoveClock: c = 0, fullmoveNumber: s = 1, whiteKingSide: o, whiteQueenSide: f, blackKingSide: m, blackQueenSide: p })=>{
        const h = "-";
        let v = "";
        const b = (o ? "K" : "") + (f ? "Q" : "") + (m ? "k" : "") + (p ? "q" : ""), _ = Np.map((g)=>Jb(u, g));
        return v += _.join("/"), v += ` ${i} ${b === "" ? "-" : b} ${h} ${c} ${s}`, v;
    }, Wb = (u)=>{
        u.preventDefault();
    }, Ib = ({ squareId: u, squarePiece: i, selectedItem: c, setSelectedItem: s, removePiece: o, putPiece: f, makeMove: m })=>{
        if (!c) {
            i != null && s({
                category: Ae.BOARD_PIECE,
                id: `${u}-${i.color}-${i.type}`,
                chessPiece: i
            });
            return;
        }
        if (i != null && c.id === `${u}-${i.color}-${i.type}`) {
            s(null);
            return;
        }
        if (c.id === Ae.ERASER_ID) {
            o(u);
            return;
        }
        if (c.chessPiece == null) {
            console.error("Error: selectedItem chessPiece is null and its not eraser", c);
            return;
        }
        if (c.category === Ae.PALLETE_ITEM) {
            f(u, c.chessPiece);
            return;
        }
        if (c.category === Ae.BOARD_PIECE) {
            const p = c.id.split("-")[0];
            m(p, u), s(null);
        }
    }, e2 = (u, i, c)=>{
        u.preventDefault();
        const s = u.dataTransfer.getData("text"), o = document.getElementById(s);
        if (!o) return;
        const f = o.dataset.square;
        c(f, i);
    }, t2 = nn.memo(({ piece: u, squareId: i, handleDragStart: c, handleBoardPieceClick: s })=>{
        const o = an((h)=>h.boardeditor.selectedItem), f = Xn();
        if (u == null || u === void 0 || !i || i === "" || !u.type) return null;
        const m = (h)=>{
            f(Os(h));
        }, p = {
            p: "pawn",
            n: "knight",
            b: "bishop",
            r: "rook",
            q: "queen",
            k: "king"
        };
        return k.jsx("img", {
            className: `pieceimg ${o != null && o?.id === `${i}-${u.color}-${u.type}` ? "selected" : ""}`,
            id: `${i}-${u.color}-${u.type.toLowerCase()}`,
            src: `pieces/svg/${u.color}_${p[u.type]}.svg`,
            alt: `${u.color} ${u.type}`,
            draggable: !0,
            "data-type": u.type,
            "data-color": u.color,
            "data-square": i,
            onDragStart: (h)=>c(h, `${i}-${u.color}-${u.type}`),
            onClick: ()=>s(i, u, o, m)
        }, i);
    }), l2 = (u)=>{
        const i = u[0].charCodeAt(0) - 97, c = u[1].charCodeAt(0) - 49;
        return (i + c) % 2 === 0 ? "dark" : "light";
    }, n2 = nn.memo(({ showRankLabel: u, showFileLabel: i, squareId: c, squarePiece: s, handleSquareClick: o, handleDrop: f, allowDrop: m, handleDragStart: p, handleBoardPieceClick: h })=>{
        const v = an((C)=>C.boardeditor.selectedItem), b = Xn(), _ = (C)=>{
            b(Os(C));
        }, g = (C)=>{
            b(Jv(C));
        }, R = (C, U)=>{
            b($v(C, U));
        }, O = (C, U)=>{
            b(Fv(C, U));
        };
        return k.jsxs("div", {
            id: c,
            className: `square ${l2(c)}`,
            onDragOver: m,
            onClick: ()=>o({
                    squareId: c,
                    squarePiece: s,
                    selectedItem: v,
                    setSelectedItem: _,
                    removePiece: g,
                    putPiece: R,
                    makeMove: O
                }),
            onDrop: (C)=>f(C, c, O),
            children: [
                u && k.jsx("div", {
                    className: "rank-label",
                    children: c[1]
                }),
                i && k.jsx("div", {
                    className: "file-label",
                    children: c[0]
                }),
                s && k.jsx(t2, {
                    piece: s,
                    squareId: c,
                    handleDragStart: p,
                    handleBoardPieceClick: h
                })
            ]
        });
    }), a2 = nn.memo(({ isFlipped: u })=>{
        const i = u ? xv : Np, c = an((s)=>s.boardeditor.board);
        return k.jsx("div", {
            id: "chessboard",
            children: i.map((s, o)=>s.map((f, m)=>k.jsx(n2, {
                        showRankLabel: m === 0,
                        showFileLabel: o === 7,
                        squareId: f,
                        squarePiece: c[f],
                        handleSquareClick: Ib,
                        handleDrop: e2,
                        allowDrop: Wb,
                        handleDragStart: gm,
                        handleBoardPieceClick: Vb
                    }, f)))
        });
    }), u2 = ({ labelText: u, toggle: i, handleToggle: c })=>k.jsxs("div", {
            className: "toggle-container",
            children: [
                k.jsx("span", {
                    className: "toggle-label",
                    children: u
                }),
                k.jsxs("label", {
                    className: "switch",
                    children: [
                        k.jsx("input", {
                            type: "checkbox",
                            checked: i,
                            onChange: c
                        }),
                        k.jsx("span", {
                            className: "slider"
                        })
                    ]
                })
            ]
        }), bm = (u)=>u.boardeditor, i2 = _s([
        bm
    ], (u)=>({
            board: u.board,
            isFlipped: u.isFlipped,
            playerToMove: u.playerToMove,
            castlingFlags: u.castlingFlags
        })), Sm = _s([
        bm
    ], (u)=>({
            playerToMove: u.playerToMove,
            castlingFlags: u.castlingFlags
        }));
    function r2() {
        const { playerToMove: u, castlingFlags: i } = an(Sm), c = Xn();
        return k.jsxs("div", {
            className: "move-toggle",
            children: [
                k.jsx("button", {
                    className: `move-option ${u === "w" ? "active" : ""}`,
                    onClick: ()=>c(Wh("w")),
                    children: "White"
                }),
                k.jsx("button", {
                    className: `move-option ${u === "b" ? "active" : ""}`,
                    onClick: ()=>c(Wh("b")),
                    children: "Black"
                })
            ]
        });
    }
    const c2 = nn.memo(({ messages: u, isValid: i })=>k.jsxs("div", {
            className: "notice-board",
            children: [
                k.jsxs("div", {
                    className: `notice-header ${i ? "legal" : "isIllegal"}`,
                    children: [
                        "Board setup is ",
                        i ? "" : "not",
                        " valid."
                    ]
                }),
                u.map((c)=>c.text != null && c.text !== "" && k.jsx("div", {
                        className: `message ${c.type}`,
                        children: c.text
                    }, c.text))
            ]
        })), s2 = ({ isValidFen: u, fenErrorMsg: i })=>{
        const { playerToMove: c, castlingFlags: s } = an(Sm), o = Xn(), f = [
            {
                flag: "K",
                label: "White King-Side",
                state: s.K
            },
            {
                flag: "Q",
                label: "White Queen-Side",
                state: s.Q
            },
            {
                flag: "k",
                label: "Black King-Side",
                state: s.k
            },
            {
                flag: "q",
                label: "Black Queen-Side",
                state: s.q
            }
        ];
        return k.jsxs("div", {
            className: "castling",
            children: [
                k.jsxs("div", {
                    className: "toggle-container",
                    children: [
                        k.jsx("span", {
                            children: "To Move : "
                        }),
                        k.jsx(r2, {})
                    ]
                }),
                f.map(({ flag: m, label: p, state: h })=>k.jsx(u2, {
                        labelText: p,
                        toggle: h,
                        handleToggle: ()=>{
                            o(Wv(m));
                        }
                    }, p)),
                k.jsx(c2, {
                    messages: [
                        {
                            type: u ? "ok" : "error",
                            text: i
                        }
                    ],
                    isValid: u
                })
            ]
        });
    };
    o2 = function(u) {
        return u == null || Number.isNaN(u) ? "—" : `${u >= 0 ? "+" : ""}${u.toFixed(2)}`;
    };
    const f2 = [
        {
            name: "Threads",
            value: 1
        },
        {
            name: "Hash",
            value: 16
        },
        {
            name: "MultiPV",
            value: 1
        }
    ], d2 = 8200;
    function h2(u, i) {
        const [c, s] = A.useState(null), [o, f] = A.useState(""), [m, p] = A.useState(""), [h, v] = A.useState(!1), [b, _] = A.useState(""), g = A.useRef(""), R = A.useRef(null), { initEngine: O, setOptions: C, startSearch: U, stopSearch: w, setOnMessage: H, syncEnabledState: Q } = qb(), G = A.useCallback((te)=>{
            typeof te == "string" && zb(te, s, f, g.current, p);
        }, []);
        A.useEffect(()=>{
            try {
                g.current = i();
            } catch  {}
        }, [
            i
        ]);
        const Y = A.useCallback(()=>{
            R.current && (clearTimeout(R.current), R.current = null), v(!1), w("board editor analyse stop");
        }, [
            w
        ]), $ = A.useCallback(()=>{
            if (!u) {
                _("Fix the position before analysing.");
                return;
            }
            const te = i();
            g.current = te, _(""), s(null), f(""), p(""), v(!0), R.current && (clearTimeout(R.current), R.current = null), w("board editor analyse restart"), Q(!0), O(), C(f2), H(G), U(te), R.current = setTimeout(()=>{
                v(!1), w("board editor analyse complete"), R.current = null;
            }, d2);
        }, [
            u,
            i,
            w,
            Q,
            O,
            C,
            H,
            G,
            U
        ]);
        return A.useEffect(()=>()=>{
                R.current && clearTimeout(R.current), w("board editor unmount"), Q(!1);
            }, [
            w,
            Q
        ]), {
            evalScore: c,
            bestLine: o,
            bestMoveUci: m,
            isAnalyzing: h,
            analysisError: b,
            handleAnalyse: $,
            handleStopAnalysis: Y,
            fenRef: g
        };
    }
    p2 = ({ isFlipped: u, evalScore: i })=>{
        const c = (s)=>{
            const f = s == null || Number.isNaN(s) ? 0 : s;
            return (Math.max(-10, Math.min(f, 10)) + 10) / (2 * 10) * 100;
        };
        return k.jsx("div", {
            className: `eval-bar eval-container ${u ? "flipped" : ""}`,
            children: k.jsx("div", {
                className: "white-bar",
                style: {
                    height: `${c(i)}%`
                }
            })
        });
    };
    function m2(u, i) {
        if (!i || i.length < 4) return i;
        try {
            const c = new zi(u), s = i.slice(0, 2), o = i.slice(2, 4), f = i.length > 4 ? i[4] : void 0, m = c.move({
                from: s,
                to: o,
                promotion: f
            });
            return m ? m.san : i;
        } catch  {
            return i;
        }
    }
    const sp = ()=>{
        const { board: u, isFlipped: i, playerToMove: c, castlingFlags: s } = an(i2), [o, f] = A.useState(!1), [m, p] = A.useState(""), h = Xn(), v = ()=>{
            h(Fh()), h(Vv());
        }, b = ()=>{
            h(Fh()), h(Gv());
        }, _ = A.useCallback(($)=>{
            h(Zv($));
        }, [
            h
        ]), g = A.useCallback(($ = 0, te = 1)=>Fb({
                board: u,
                playerToMove: c,
                whiteKingSide: s.K,
                whiteQueenSide: s.Q,
                blackKingSide: s.k,
                blackQueenSide: s.q,
                halfmoveClock: $,
                fullmoveNumber: te
            }), [
            u,
            c,
            s.K,
            s.k,
            s.Q,
            s.q
        ]);
        A.useEffect(()=>{
            b();
        }, []), A.useEffect(()=>{
            const $ = g(), { isValid: te, msg: se } = Yb($);
            f((ue)=>ue !== te ? te : ue), p((ue)=>ue !== se ? se : ue), Hb($);
        }, [
            g,
            u
        ]);
        const { evalScore: R, bestLine: O, bestMoveUci: C, isAnalyzing: U, analysisError: w, handleAnalyse: H, handleStopAnalysis: Q, fenRef: G } = h2(o, g), Y = C ? m2(G.current, C) : "";
        return k.jsxs("div", {
            className: "main-container board-editor-page",
            children: [
                k.jsx("div", {
                    className: "top-container",
                    children: k.jsxs("nav", {
                        className: "top-bar",
                        children: [
                            k.jsx("button", {
                                onClick: v,
                                className: "action-button",
                                children: "Clear"
                            }),
                            k.jsx("button", {
                                onClick: b,
                                className: "action-button",
                                children: "Reset"
                            }),
                            k.jsx("button", {
                                onClick: ()=>{
                                    h(Xv());
                                },
                                className: "action-button",
                                children: "Flip"
                            }),
                            k.jsx(kb, {
                                onSubmit: _
                            }),
                            k.jsx("button", {
                                type: "button",
                                onClick: H,
                                disabled: !o || U,
                                className: "action-button",
                                title: o ? "Run engine on current position" : "Position must be legal",
                                children: U ? "Analysing…" : "Analyse"
                            }),
                            k.jsx("button", {
                                type: "button",
                                onClick: Q,
                                disabled: !U,
                                className: "action-button",
                                title: "Stop engine",
                                children: "Stop"
                            }),
                            k.jsx(jb, {})
                        ]
                    })
                }),
                k.jsxs("aside", {
                    className: "board-editor-analysis-shell",
                    "aria-label": "Engine analysis",
                    children: [
                        w ? k.jsx("div", {
                            className: "board-editor-analysis-error",
                            role: "alert",
                            children: w
                        }) : null,
                        k.jsxs("div", {
                            className: "board-editor-analysis-panel",
                            "aria-live": "polite",
                            children: [
                                k.jsxs("div", {
                                    className: "board-editor-analysis-row",
                                    children: [
                                        k.jsx("span", {
                                            className: "board-editor-analysis-label",
                                            children: "Eval (White)"
                                        }),
                                        k.jsx("span", {
                                            className: "board-editor-analysis-value",
                                            children: R != null ? o2(R) : "—"
                                        })
                                    ]
                                }),
                                k.jsxs("div", {
                                    className: "board-editor-analysis-row",
                                    children: [
                                        k.jsx("span", {
                                            className: "board-editor-analysis-label",
                                            children: "Best move"
                                        }),
                                        k.jsx("span", {
                                            className: "board-editor-analysis-value",
                                            children: Y || C || "—"
                                        })
                                    ]
                                }),
                                k.jsxs("div", {
                                    className: "board-editor-analysis-row board-editor-analysis-pv",
                                    children: [
                                        k.jsx("span", {
                                            className: "board-editor-analysis-label",
                                            children: "Principal variation"
                                        }),
                                        k.jsx("span", {
                                            className: "board-editor-analysis-value",
                                            children: O || "—"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                k.jsxs("div", {
                    className: "middle-container",
                    children: [
                        k.jsx("div", {
                            className: "left-menu-bar"
                        }),
                        k.jsxs("div", {
                            className: "fen-chessboard-container",
                            children: [
                                k.jsx(Kb, {
                                    isValid: o,
                                    fenErrorMsg: m
                                }),
                                k.jsxs("div", {
                                    className: "board-editor-evalbar-board-row",
                                    children: [
                                        k.jsx("div", {
                                            className: "board-editor-evalbar-wrap",
                                            "aria-hidden": !0,
                                            children: k.jsx(p2, {
                                                isFlipped: i,
                                                evalScore: R
                                            })
                                        }),
                                        k.jsxs("div", {
                                            className: "chessboard-container",
                                            children: [
                                                k.jsx(a2, {
                                                    isFlipped: i
                                                }),
                                                k.jsx($b, {
                                                    handleDragStart: gm,
                                                    handlePaletteClick: Xb
                                                }),
                                                k.jsx(s2, {
                                                    isValidFen: o,
                                                    fenErrorMsg: m
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, y2 = A.lazy(()=>Wp(()=>import("./ChessGame-C32owpUH.js"), __vite__mapDeps([0,1,2,3]))), v2 = A.lazy(()=>Wp(()=>import("./AnalysisGame-BB97EBYs.js"), __vite__mapDeps([4,1,2,5]))), g2 = ()=>k.jsx(wb, {
            children: k.jsxs(_b, {
                children: [
                    k.jsxs("nav", {
                        className: "routes",
                        children: [
                            k.jsx(tu, {
                                to: "/boardeditor",
                                className: "action-button no-decoration",
                                children: "Chess Position Editor"
                            }),
                            k.jsx(tu, {
                                to: "/analysis",
                                className: "action-button no-decoration",
                                children: "Analyse Game"
                            }),
                            k.jsx(tu, {
                                to: "/gameplay",
                                className: "action-button no-decoration",
                                children: "Play Game"
                            })
                        ]
                    }),
                    k.jsx(A.Suspense, {
                        fallback: k.jsx("div", {
                            className: "loading-screen",
                            children: "Loading..."
                        }),
                        children: k.jsxs(Ig, {
                            children: [
                                k.jsx(Ia, {
                                    path: "/analysis",
                                    element: k.jsx(hs, {
                                        children: k.jsx(v2, {})
                                    })
                                }),
                                k.jsx(Ia, {
                                    path: "/gameplay",
                                    element: k.jsx(y2, {})
                                }),
                                k.jsx(Ia, {
                                    path: "/boardeditor",
                                    element: k.jsx(hs, {
                                        children: k.jsx(sp, {})
                                    })
                                }),
                                k.jsx(Ia, {
                                    path: "*",
                                    element: k.jsx(hs, {
                                        children: k.jsx(sp, {})
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    function b2() {
        [
            "theme",
            "enableSound",
            "timerDuration",
            "isFlipped",
            "persist:root"
        ].forEach((i)=>{
            try {
                const c = localStorage.getItem(i);
                c != null && JSON.parse(c);
            } catch  {
                localStorage.removeItem(i);
            }
        });
    }
    b2();
    I1.createRoot(document.getElementById("root")).render(k.jsx(yy, {
        store: Fp,
        children: k.jsx(g2, {})
    }));
})();
export { zi as C, jb as D, p2 as E, nn as R, an as a, E2 as b, Ae as c, O2 as d, M2 as e, T2 as f, qb as g, w2 as h, D2 as i, k as j, o2 as k, C2 as l, S2 as m, x2 as n, B2 as o, N2 as p, Pb as q, A as r, _2 as s, zb as t, Xn as u, K1 as v, Fp as w, R2 as x, A2 as y, __tla };
