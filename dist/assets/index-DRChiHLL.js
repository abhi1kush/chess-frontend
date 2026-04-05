const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChessGame-BryeU_W8.js","assets/Settings-B3iCCiwT.js","assets/Settings-BeYbQfL8.css","assets/ChessGame-DhAK7FyC.css","assets/AnalysisGame-Cegc66xt.js","assets/AnalysisGame-BV_d1rWx.css"])))=>i.map(i=>d[i]);
let Ui, Kb, b2, an, un, O2, Re, D2, z2, x2, Lb, k2, P2, L, q2, U2, A2, w2, m2, B2, wb, A, N2, pm, Zn, Q1, $p, M2, C2;
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
    Q1 = function(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
    };
    var Wc = {
        exports: {}
    }, Xa = {};
    var Ah;
    function K1() {
        if (Ah) return Xa;
        Ah = 1;
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
        return Xa.Fragment = i, Xa.jsx = c, Xa.jsxs = c, Xa;
    }
    var Oh;
    function Y1() {
        return Oh || (Oh = 1, Wc.exports = K1()), Wc.exports;
    }
    let Ic, ie;
    L = Y1();
    Ic = {
        exports: {}
    };
    ie = {};
    var Nh;
    function G1() {
        if (Nh) return ie;
        Nh = 1;
        var u = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), m = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), _ = Symbol.iterator;
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
        }, N = Object.assign, C = {};
        function z(E, k, Z) {
            this.props = E, this.context = k, this.refs = C, this.updater = Z || R;
        }
        z.prototype.isReactComponent = {}, z.prototype.setState = function(E, k) {
            if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, E, k, "setState");
        }, z.prototype.forceUpdate = function(E) {
            this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        };
        function w() {}
        w.prototype = z.prototype;
        function Q(E, k, Z) {
            this.props = E, this.context = k, this.refs = C, this.updater = Z || R;
        }
        var U = Q.prototype = new w;
        U.constructor = Q, N(U, z.prototype), U.isPureReactComponent = !0;
        var X = Array.isArray, Y = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, J = Object.prototype.hasOwnProperty;
        function te(E, k, Z, G, F, se) {
            return Z = se.ref, {
                $$typeof: u,
                type: E,
                key: k,
                ref: Z !== void 0 ? Z : null,
                props: se
            };
        }
        function pe(E, k) {
            return te(E.type, k, void 0, void 0, void 0, E.props);
        }
        function ue(E) {
            return typeof E == "object" && E !== null && E.$$typeof === u;
        }
        function xe(E) {
            var k = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + E.replace(/[=:]/g, function(Z) {
                return k[Z];
            });
        }
        var at = /\/+/g;
        function Ue(E, k) {
            return typeof E == "object" && E !== null && E.key != null ? xe("" + E.key) : k.toString(36);
        }
        function Qt() {}
        function Kt(E) {
            switch(E.status){
                case "fulfilled":
                    return E.value;
                case "rejected":
                    throw E.reason;
                default:
                    switch(typeof E.status == "string" ? E.then(Qt, Qt) : (E.status = "pending", E.then(function(k) {
                        E.status === "pending" && (E.status = "fulfilled", E.value = k);
                    }, function(k) {
                        E.status === "pending" && (E.status = "rejected", E.reason = k);
                    })), E.status){
                        case "fulfilled":
                            return E.value;
                        case "rejected":
                            throw E.reason;
                    }
            }
            throw E;
        }
        function Le(E, k, Z, G, F) {
            var se = typeof E;
            (se === "undefined" || se === "boolean") && (E = null);
            var ne = !1;
            if (E === null) ne = !0;
            else switch(se){
                case "bigint":
                case "string":
                case "number":
                    ne = !0;
                    break;
                case "object":
                    switch(E.$$typeof){
                        case u:
                        case i:
                            ne = !0;
                            break;
                        case b:
                            return ne = E._init, Le(ne(E._payload), k, Z, G, F);
                    }
            }
            if (ne) return F = F(E), ne = G === "" ? "." + Ue(E, 0) : G, X(F) ? (Z = "", ne != null && (Z = ne.replace(at, "$&/") + "/"), Le(F, k, Z, "", function(Ct) {
                return Ct;
            })) : F != null && (ue(F) && (F = pe(F, Z + (F.key == null || E && E.key === F.key ? "" : ("" + F.key).replace(at, "$&/") + "/") + ne)), k.push(F)), 1;
            ne = 0;
            var Qe = G === "" ? "." : G + ":";
            if (X(E)) for(var Se = 0; Se < E.length; Se++)G = E[Se], se = Qe + Ue(G, Se), ne += Le(G, k, Z, se, F);
            else if (Se = g(E), typeof Se == "function") for(E = Se.call(E), Se = 0; !(G = E.next()).done;)G = G.value, se = Qe + Ue(G, Se++), ne += Le(G, k, Z, se, F);
            else if (se === "object") {
                if (typeof E.then == "function") return Le(Kt(E), k, Z, G, F);
                throw k = String(E), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ne;
        }
        function P(E, k, Z) {
            if (E == null) return E;
            var G = [], F = 0;
            return Le(E, G, "", "", function(se) {
                return k.call(Z, se, F++);
            }), G;
        }
        function K(E) {
            if (E._status === -1) {
                var k = E._result;
                k = k(), k.then(function(Z) {
                    (E._status === 0 || E._status === -1) && (E._status = 1, E._result = Z);
                }, function(Z) {
                    (E._status === 0 || E._status === -1) && (E._status = 2, E._result = Z);
                }), E._status === -1 && (E._status = 0, E._result = k);
            }
            if (E._status === 1) return E._result.default;
            throw E._result;
        }
        var V = typeof reportError == "function" ? reportError : function(E) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var k = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                    error: E
                });
                if (!window.dispatchEvent(k)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", E);
                return;
            }
            console.error(E);
        };
        function fe() {}
        return ie.Children = {
            map: P,
            forEach: function(E, k, Z) {
                P(E, function() {
                    k.apply(this, arguments);
                }, Z);
            },
            count: function(E) {
                var k = 0;
                return P(E, function() {
                    k++;
                }), k;
            },
            toArray: function(E) {
                return P(E, function(k) {
                    return k;
                }) || [];
            },
            only: function(E) {
                if (!ue(E)) throw Error("React.Children.only expected to receive a single React element child.");
                return E;
            }
        }, ie.Component = z, ie.Fragment = c, ie.Profiler = o, ie.PureComponent = Q, ie.StrictMode = s, ie.Suspense = h, ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, ie.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(E) {
                return Y.H.useMemoCache(E);
            }
        }, ie.cache = function(E) {
            return function() {
                return E.apply(null, arguments);
            };
        }, ie.cloneElement = function(E, k, Z) {
            if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
            var G = N({}, E.props), F = E.key, se = void 0;
            if (k != null) for(ne in k.ref !== void 0 && (se = void 0), k.key !== void 0 && (F = "" + k.key), k)!J.call(k, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && k.ref === void 0 || (G[ne] = k[ne]);
            var ne = arguments.length - 2;
            if (ne === 1) G.children = Z;
            else if (1 < ne) {
                for(var Qe = Array(ne), Se = 0; Se < ne; Se++)Qe[Se] = arguments[Se + 2];
                G.children = Qe;
            }
            return te(E.type, F, void 0, void 0, se, G);
        }, ie.createContext = function(E) {
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
        }, ie.createElement = function(E, k, Z) {
            var G, F = {}, se = null;
            if (k != null) for(G in k.key !== void 0 && (se = "" + k.key), k)J.call(k, G) && G !== "key" && G !== "__self" && G !== "__source" && (F[G] = k[G]);
            var ne = arguments.length - 2;
            if (ne === 1) F.children = Z;
            else if (1 < ne) {
                for(var Qe = Array(ne), Se = 0; Se < ne; Se++)Qe[Se] = arguments[Se + 2];
                F.children = Qe;
            }
            if (E && E.defaultProps) for(G in ne = E.defaultProps, ne)F[G] === void 0 && (F[G] = ne[G]);
            return te(E, se, void 0, void 0, null, F);
        }, ie.createRef = function() {
            return {
                current: null
            };
        }, ie.forwardRef = function(E) {
            return {
                $$typeof: p,
                render: E
            };
        }, ie.isValidElement = ue, ie.lazy = function(E) {
            return {
                $$typeof: b,
                _payload: {
                    _status: -1,
                    _result: E
                },
                _init: K
            };
        }, ie.memo = function(E, k) {
            return {
                $$typeof: y,
                type: E,
                compare: k === void 0 ? null : k
            };
        }, ie.startTransition = function(E) {
            var k = Y.T, Z = {};
            Y.T = Z;
            try {
                var G = E(), F = Y.S;
                F !== null && F(Z, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(fe, V);
            } catch (se) {
                V(se);
            } finally{
                Y.T = k;
            }
        }, ie.unstable_useCacheRefresh = function() {
            return Y.H.useCacheRefresh();
        }, ie.use = function(E) {
            return Y.H.use(E);
        }, ie.useActionState = function(E, k, Z) {
            return Y.H.useActionState(E, k, Z);
        }, ie.useCallback = function(E, k) {
            return Y.H.useCallback(E, k);
        }, ie.useContext = function(E) {
            return Y.H.useContext(E);
        }, ie.useDebugValue = function() {}, ie.useDeferredValue = function(E, k) {
            return Y.H.useDeferredValue(E, k);
        }, ie.useEffect = function(E, k, Z) {
            var G = Y.H;
            if (typeof Z == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return G.useEffect(E, k);
        }, ie.useId = function() {
            return Y.H.useId();
        }, ie.useImperativeHandle = function(E, k, Z) {
            return Y.H.useImperativeHandle(E, k, Z);
        }, ie.useInsertionEffect = function(E, k) {
            return Y.H.useInsertionEffect(E, k);
        }, ie.useLayoutEffect = function(E, k) {
            return Y.H.useLayoutEffect(E, k);
        }, ie.useMemo = function(E, k) {
            return Y.H.useMemo(E, k);
        }, ie.useOptimistic = function(E, k) {
            return Y.H.useOptimistic(E, k);
        }, ie.useReducer = function(E, k, Z) {
            return Y.H.useReducer(E, k, Z);
        }, ie.useRef = function(E) {
            return Y.H.useRef(E);
        }, ie.useState = function(E) {
            return Y.H.useState(E);
        }, ie.useSyncExternalStore = function(E, k, Z) {
            return Y.H.useSyncExternalStore(E, k, Z);
        }, ie.useTransition = function() {
            return Y.H.useTransition();
        }, ie.version = "19.1.0", ie;
    }
    var xh;
    function zi() {
        return xh || (xh = 1, Ic.exports = G1()), Ic.exports;
    }
    A = zi();
    an = Q1(A);
    var es = {
        exports: {}
    }, Za = {}, ts = {
        exports: {}
    }, ls = {};
    var Mh;
    function V1() {
        return Mh || (Mh = 1, function(u) {
            function i(P, K) {
                var V = P.length;
                P.push(K);
                e: for(; 0 < V;){
                    var fe = V - 1 >>> 1, E = P[fe];
                    if (0 < o(E, K)) P[fe] = K, P[V] = E, V = fe;
                    else break e;
                }
            }
            function c(P) {
                return P.length === 0 ? null : P[0];
            }
            function s(P) {
                if (P.length === 0) return null;
                var K = P[0], V = P.pop();
                if (V !== K) {
                    P[0] = V;
                    e: for(var fe = 0, E = P.length, k = E >>> 1; fe < k;){
                        var Z = 2 * (fe + 1) - 1, G = P[Z], F = Z + 1, se = P[F];
                        if (0 > o(G, V)) F < E && 0 > o(se, G) ? (P[fe] = se, P[F] = V, fe = F) : (P[fe] = G, P[Z] = V, fe = Z);
                        else if (F < E && 0 > o(se, V)) P[fe] = se, P[F] = V, fe = F;
                        else break e;
                    }
                }
                return K;
            }
            function o(P, K) {
                var V = P.sortIndex - K.sortIndex;
                return V !== 0 ? V : P.id - K.id;
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
            var h = [], y = [], b = 1, _ = null, g = 3, R = !1, N = !1, C = !1, z = !1, w = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
            function X(P) {
                for(var K = c(y); K !== null;){
                    if (K.callback === null) s(y);
                    else if (K.startTime <= P) s(y), K.sortIndex = K.expirationTime, i(h, K);
                    else break;
                    K = c(y);
                }
            }
            function Y(P) {
                if (C = !1, X(P), !N) if (c(h) !== null) N = !0, J || (J = !0, Ue());
                else {
                    var K = c(y);
                    K !== null && Le(Y, K.startTime - P);
                }
            }
            var J = !1, te = -1, pe = 5, ue = -1;
            function xe() {
                return z ? !0 : !(u.unstable_now() - ue < pe);
            }
            function at() {
                if (z = !1, J) {
                    var P = u.unstable_now();
                    ue = P;
                    var K = !0;
                    try {
                        e: {
                            N = !1, C && (C = !1, Q(te), te = -1), R = !0;
                            var V = g;
                            try {
                                t: {
                                    for(X(P), _ = c(h); _ !== null && !(_.expirationTime > P && xe());){
                                        var fe = _.callback;
                                        if (typeof fe == "function") {
                                            _.callback = null, g = _.priorityLevel;
                                            var E = fe(_.expirationTime <= P);
                                            if (P = u.unstable_now(), typeof E == "function") {
                                                _.callback = E, X(P), K = !0;
                                                break t;
                                            }
                                            _ === c(h) && s(h), X(P);
                                        } else s(h);
                                        _ = c(h);
                                    }
                                    if (_ !== null) K = !0;
                                    else {
                                        var k = c(y);
                                        k !== null && Le(Y, k.startTime - P), K = !1;
                                    }
                                }
                                break e;
                            } finally{
                                _ = null, g = V, R = !1;
                            }
                            K = void 0;
                        }
                    } finally{
                        K ? Ue() : J = !1;
                    }
                }
            }
            var Ue;
            if (typeof U == "function") Ue = function() {
                U(at);
            };
            else if (typeof MessageChannel < "u") {
                var Qt = new MessageChannel, Kt = Qt.port2;
                Qt.port1.onmessage = at, Ue = function() {
                    Kt.postMessage(null);
                };
            } else Ue = function() {
                w(at, 0);
            };
            function Le(P, K) {
                te = w(function() {
                    P(u.unstable_now());
                }, K);
            }
            u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(P) {
                P.callback = null;
            }, u.unstable_forceFrameRate = function(P) {
                0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pe = 0 < P ? Math.floor(1e3 / P) : 5;
            }, u.unstable_getCurrentPriorityLevel = function() {
                return g;
            }, u.unstable_next = function(P) {
                switch(g){
                    case 1:
                    case 2:
                    case 3:
                        var K = 3;
                        break;
                    default:
                        K = g;
                }
                var V = g;
                g = K;
                try {
                    return P();
                } finally{
                    g = V;
                }
            }, u.unstable_requestPaint = function() {
                z = !0;
            }, u.unstable_runWithPriority = function(P, K) {
                switch(P){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        P = 3;
                }
                var V = g;
                g = P;
                try {
                    return K();
                } finally{
                    g = V;
                }
            }, u.unstable_scheduleCallback = function(P, K, V) {
                var fe = u.unstable_now();
                switch(typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? fe + V : fe) : V = fe, P){
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
                return E = V + E, P = {
                    id: b++,
                    callback: K,
                    priorityLevel: P,
                    startTime: V,
                    expirationTime: E,
                    sortIndex: -1
                }, V > fe ? (P.sortIndex = V, i(y, P), c(h) === null && P === c(y) && (C ? (Q(te), te = -1) : C = !0, Le(Y, V - fe))) : (P.sortIndex = E, i(h, P), N || R || (N = !0, J || (J = !0, Ue()))), P;
            }, u.unstable_shouldYield = xe, u.unstable_wrapCallback = function(P) {
                var K = g;
                return function() {
                    var V = g;
                    g = K;
                    try {
                        return P.apply(this, arguments);
                    } finally{
                        g = V;
                    }
                };
            };
        }(ls)), ls;
    }
    var Ch;
    function X1() {
        return Ch || (Ch = 1, ts.exports = V1()), ts.exports;
    }
    var ns = {
        exports: {}
    }, tt = {};
    var Dh;
    function Z1() {
        if (Dh) return tt;
        Dh = 1;
        var u = zi();
        function i(h) {
            var y = "https://react.dev/errors/" + h;
            if (1 < arguments.length) {
                y += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var b = 2; b < arguments.length; b++)y += "&args[]=" + encodeURIComponent(arguments[b]);
            }
            return "Minified React error #" + h + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
        function f(h, y, b) {
            var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: _ == null ? null : "" + _,
                children: h,
                containerInfo: y,
                implementation: b
            };
        }
        var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function p(h, y) {
            if (h === "font") return "";
            if (typeof y == "string") return y === "use-credentials" ? y : "";
        }
        return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, tt.createPortal = function(h, y) {
            var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(i(299));
            return f(h, y, null, b);
        }, tt.flushSync = function(h) {
            var y = m.T, b = s.p;
            try {
                if (m.T = null, s.p = 2, h) return h();
            } finally{
                m.T = y, s.p = b, s.d.f();
            }
        }, tt.preconnect = function(h, y) {
            typeof h == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(h, y));
        }, tt.prefetchDNS = function(h) {
            typeof h == "string" && s.d.D(h);
        }, tt.preinit = function(h, y) {
            if (typeof h == "string" && y && typeof y.as == "string") {
                var b = y.as, _ = p(b, y.crossOrigin), g = typeof y.integrity == "string" ? y.integrity : void 0, R = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
                b === "style" ? s.d.S(h, typeof y.precedence == "string" ? y.precedence : void 0, {
                    crossOrigin: _,
                    integrity: g,
                    fetchPriority: R
                }) : b === "script" && s.d.X(h, {
                    crossOrigin: _,
                    integrity: g,
                    fetchPriority: R,
                    nonce: typeof y.nonce == "string" ? y.nonce : void 0
                });
            }
        }, tt.preinitModule = function(h, y) {
            if (typeof h == "string") if (typeof y == "object" && y !== null) {
                if (y.as == null || y.as === "script") {
                    var b = p(y.as, y.crossOrigin);
                    s.d.M(h, {
                        crossOrigin: b,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0
                    });
                }
            } else y == null && s.d.M(h);
        }, tt.preload = function(h, y) {
            if (typeof h == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
                var b = y.as, _ = p(b, y.crossOrigin);
                s.d.L(h, b, {
                    crossOrigin: _,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                    nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                    type: typeof y.type == "string" ? y.type : void 0,
                    fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
                    referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
                    imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
                    imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                    media: typeof y.media == "string" ? y.media : void 0
                });
            }
        }, tt.preloadModule = function(h, y) {
            if (typeof h == "string") if (y) {
                var b = p(y.as, y.crossOrigin);
                s.d.m(h, {
                    as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                    crossOrigin: b,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0
                });
            } else s.d.m(h);
        }, tt.requestFormReset = function(h) {
            s.d.r(h);
        }, tt.unstable_batchedUpdates = function(h, y) {
            return h(y);
        }, tt.useFormState = function(h, y, b) {
            return m.H.useFormState(h, y, b);
        }, tt.useFormStatus = function() {
            return m.H.useHostTransitionStatus();
        }, tt.version = "19.1.0", tt;
    }
    var Bh;
    function $1() {
        if (Bh) return ns.exports;
        Bh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (i) {
                console.error(i);
            }
        }
        return u(), ns.exports = Z1(), ns.exports;
    }
    var wh;
    function J1() {
        if (wh) return Za;
        wh = 1;
        var u = X1(), i = zi(), c = $1();
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
                    for(var d = !1, v = a.child; v;){
                        if (v === l) {
                            d = !0, l = a, n = r;
                            break;
                        }
                        if (v === n) {
                            d = !0, n = a, l = r;
                            break;
                        }
                        v = v.sibling;
                    }
                    if (!d) {
                        for(v = r.child; v;){
                            if (v === l) {
                                d = !0, l = r, n = a;
                                break;
                            }
                            if (v === n) {
                                d = !0, n = r, l = a;
                                break;
                            }
                            v = v.sibling;
                        }
                        if (!d) throw Error(s(189));
                    }
                }
                if (l.alternate !== n) throw Error(s(190));
            }
            if (l.tag !== 3) throw Error(s(188));
            return l.stateNode.current === l ? e : t;
        }
        function y(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e;
            for(e = e.child; e !== null;){
                if (t = y(e), t !== null) return t;
                e = e.sibling;
            }
            return null;
        }
        var b = Object.assign, _ = Symbol.for("react.element"), g = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), Q = Symbol.for("react.consumer"), U = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), ue = Symbol.for("react.activity"), xe = Symbol.for("react.memo_cache_sentinel"), at = Symbol.iterator;
        function Ue(e) {
            return e === null || typeof e != "object" ? null : (e = at && e[at] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var Qt = Symbol.for("react.client.reference");
        function Kt(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === Qt ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case N:
                    return "Fragment";
                case z:
                    return "Profiler";
                case C:
                    return "StrictMode";
                case Y:
                    return "Suspense";
                case J:
                    return "SuspenseList";
                case ue:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case R:
                    return "Portal";
                case U:
                    return (e.displayName || "Context") + ".Provider";
                case Q:
                    return (e._context.displayName || "Context") + ".Consumer";
                case X:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case te:
                    return t = e.displayName || null, t !== null ? t : Kt(e.type) || "Memo";
                case pe:
                    t = e._payload, e = e._init;
                    try {
                        return Kt(e(t));
                    } catch  {}
            }
            return null;
        }
        var Le = Array.isArray, P = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, fe = [], E = -1;
        function k(e) {
            return {
                current: e
            };
        }
        function Z(e) {
            0 > E || (e.current = fe[E], fe[E] = null, E--);
        }
        function G(e, t) {
            E++, fe[E] = e.current, e.current = t;
        }
        var F = k(null), se = k(null), ne = k(null), Qe = k(null);
        function Se(e, t) {
            switch(G(ne, t), G(se, e), G(F, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? Id(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = Id(t), e = eh(t, e);
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
            Z(F), G(F, e);
        }
        function Ct() {
            Z(F), Z(se), Z(ne);
        }
        function sl(e) {
            e.memoizedState !== null && G(Qe, e);
            var t = F.current, l = eh(t, e.type);
            t !== l && (G(se, e), G(F, l));
        }
        function cu(e) {
            se.current === e && (Z(F), Z(se)), Qe.current === e && (Z(Qe), Qa._currentValue = V);
        }
        var ki = Object.prototype.hasOwnProperty, ji = u.unstable_scheduleCallback, Hi = u.unstable_cancelCallback, Sm = u.unstable_shouldYield, Em = u.unstable_requestPaint, Ut = u.unstable_now, _m = u.unstable_getCurrentPriorityLevel, Ds = u.unstable_ImmediatePriority, Bs = u.unstable_UserBlockingPriority, su = u.unstable_NormalPriority, Tm = u.unstable_LowPriority, ws = u.unstable_IdlePriority, Rm = u.log, Am = u.unstable_setDisableYieldValue, Jn = null, ft = null;
        function ol(e) {
            if (typeof Rm == "function" && Am(e), ft && typeof ft.setStrictMode == "function") try {
                ft.setStrictMode(Jn, e);
            } catch  {}
        }
        var dt = Math.clz32 ? Math.clz32 : xm, Om = Math.log, Nm = Math.LN2;
        function xm(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Om(e) / Nm | 0) | 0;
        }
        var ou = 256, fu = 4194304;
        function kl(e) {
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
        function du(e, t, l) {
            var n = e.pendingLanes;
            if (n === 0) return 0;
            var a = 0, r = e.suspendedLanes, d = e.pingedLanes;
            e = e.warmLanes;
            var v = n & 134217727;
            return v !== 0 ? (n = v & ~r, n !== 0 ? a = kl(n) : (d &= v, d !== 0 ? a = kl(d) : l || (l = v & ~e, l !== 0 && (a = kl(l))))) : (v = n & ~r, v !== 0 ? a = kl(v) : d !== 0 ? a = kl(d) : l || (l = n & ~e, l !== 0 && (a = kl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & r) === 0 && (r = a & -a, l = t & -t, r >= l || r === 32 && (l & 4194048) !== 0) ? t : a;
        }
        function Fn(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function Mm(e, t) {
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
        function zs() {
            var e = ou;
            return ou <<= 1, (ou & 4194048) === 0 && (ou = 256), e;
        }
        function Us() {
            var e = fu;
            return fu <<= 1, (fu & 62914560) === 0 && (fu = 4194304), e;
        }
        function Li(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Wn(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Cm(e, t, l, n, a, r) {
            var d = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var v = e.entanglements, S = e.expirationTimes, M = e.hiddenUpdates;
            for(l = d & ~l; 0 < l;){
                var q = 31 - dt(l), H = 1 << q;
                v[q] = 0, S[q] = -1;
                var D = M[q];
                if (D !== null) for(M[q] = null, q = 0; q < D.length; q++){
                    var B = D[q];
                    B !== null && (B.lane &= -536870913);
                }
                l &= ~H;
            }
            n !== 0 && Ps(e, n, 0), r !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(d & ~t));
        }
        function Ps(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var n = 31 - dt(t);
            e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
        }
        function qs(e, t) {
            var l = e.entangledLanes |= t;
            for(e = e.entanglements; l;){
                var n = 31 - dt(l), a = 1 << n;
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
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : bh(e.type));
        }
        function Dm(e, t) {
            var l = K.p;
            try {
                return K.p = e, t();
            } finally{
                K.p = l;
            }
        }
        var fl = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + fl, ut = "__reactProps$" + fl, sn = "__reactContainer$" + fl, Yi = "__reactEvents$" + fl, Bm = "__reactListeners$" + fl, wm = "__reactHandles$" + fl, js = "__reactResources$" + fl, In = "__reactMarker$" + fl;
        function Gi(e) {
            delete e[Ie], delete e[ut], delete e[Yi], delete e[Bm], delete e[wm];
        }
        function on(e) {
            var t = e[Ie];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[sn] || l[Ie]) {
                    if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = ah(e); e !== null;){
                        if (l = e[Ie]) return l;
                        e = ah(e);
                    }
                    return t;
                }
                e = l, l = e.parentNode;
            }
            return null;
        }
        function fn(e) {
            if (e = e[Ie] || e[sn]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function ea(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(s(33));
        }
        function dn(e) {
            var t = e[js];
            return t || (t = e[js] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Ke(e) {
            e[In] = !0;
        }
        var Hs = new Set, Ls = {};
        function jl(e, t) {
            hn(e, t), hn(e + "Capture", t);
        }
        function hn(e, t) {
            for(Ls[e] = t, e = 0; e < t.length; e++)Hs.add(t[e]);
        }
        var zm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Qs = {}, Ks = {};
        function Um(e) {
            return ki.call(Ks, e) ? !0 : ki.call(Qs, e) ? !1 : zm.test(e) ? Ks[e] = !0 : (Qs[e] = !0, !1);
        }
        function hu(e, t, l) {
            if (Um(t)) if (l === null) e.removeAttribute(t);
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
        function pu(e, t, l) {
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
        function Yt(e, t, l, n) {
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
        var Vi, Ys;
        function pn(e) {
            if (Vi === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Vi = t && t[1] || "", Ys = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Vi + e + Ys;
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
                                var H = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(H.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(H, []);
                                    } catch (B) {
                                        var D = B;
                                    }
                                    Reflect.construct(e, [], H);
                                } else {
                                    try {
                                        H.call();
                                    } catch (B) {
                                        D = B;
                                    }
                                    e.call(H.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (B) {
                                    D = B;
                                }
                                (H = e()) && typeof H.catch == "function" && H.catch(function() {});
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
                var r = n.DetermineComponentFrameRoot(), d = r[0], v = r[1];
                if (d && v) {
                    var S = d.split(`
`), M = v.split(`
`);
                    for(a = n = 0; n < S.length && !S[n].includes("DetermineComponentFrameRoot");)n++;
                    for(; a < M.length && !M[a].includes("DetermineComponentFrameRoot");)a++;
                    if (n === S.length || a === M.length) for(n = S.length - 1, a = M.length - 1; 1 <= n && 0 <= a && S[n] !== M[a];)a--;
                    for(; 1 <= n && 0 <= a; n--, a--)if (S[n] !== M[a]) {
                        if (n !== 1 || a !== 1) do if (n--, a--, 0 > a || S[n] !== M[a]) {
                            var q = `
` + S[n].replace(" at new ", " at ");
                            return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                        }
                        while (1 <= n && 0 <= a);
                        break;
                    }
                }
            } finally{
                Xi = !1, Error.prepareStackTrace = l;
            }
            return (l = e ? e.displayName || e.name : "") ? pn(l) : "";
        }
        function Pm(e) {
            switch(e.tag){
                case 26:
                case 27:
                case 5:
                    return pn(e.type);
                case 16:
                    return pn("Lazy");
                case 13:
                    return pn("Suspense");
                case 19:
                    return pn("SuspenseList");
                case 0:
                case 15:
                    return Zi(e.type, !1);
                case 11:
                    return Zi(e.type.render, !1);
                case 1:
                    return Zi(e.type, !0);
                case 31:
                    return pn("Activity");
                default:
                    return "";
            }
        }
        function Gs(e) {
            try {
                var t = "";
                do t += Pm(e), e = e.return;
                while (e);
                return t;
            } catch (l) {
                return `
Error generating stack: ` + l.message + `
` + l.stack;
            }
        }
        function St(e) {
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
        function Vs(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function qm(e) {
            var t = Vs(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
        function mu(e) {
            e._valueTracker || (e._valueTracker = qm(e));
        }
        function Xs(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), n = "";
            return e && (n = Vs(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
        }
        function yu(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var km = /[\n"\\]/g;
        function Et(e) {
            return e.replace(km, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function $i(e, t, l, n, a, r, d, v) {
            e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Ji(e, d, St(t)) : l != null ? Ji(e, d, St(l)) : n != null && e.removeAttribute("value"), a == null && r != null && (e.defaultChecked = !!r), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + St(v) : e.removeAttribute("name");
        }
        function Zs(e, t, l, n, a, r, d, v) {
            if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || l != null) {
                if (!(r !== "submit" && r !== "reset" || t != null)) return;
                l = l != null ? "" + St(l) : "", t = t != null ? "" + St(t) : l, v || t === e.value || (e.value = t), e.defaultValue = t;
            }
            n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = v ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d);
        }
        function Ji(e, t, l) {
            t === "number" && yu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
        }
        function mn(e, t, l, n) {
            if (e = e.options, t) {
                t = {};
                for(var a = 0; a < l.length; a++)t["$" + l[a]] = !0;
                for(l = 0; l < e.length; l++)a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
            } else {
                for(l = "" + St(l), t = null, a = 0; a < e.length; a++){
                    if (e[a].value === l) {
                        e[a].selected = !0, n && (e[a].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[a].disabled || (t = e[a]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function $s(e, t, l) {
            if (t != null && (t = "" + St(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + St(l) : "";
        }
        function Js(e, t, l, n) {
            if (t == null) {
                if (n != null) {
                    if (l != null) throw Error(s(92));
                    if (Le(n)) {
                        if (1 < n.length) throw Error(s(93));
                        n = n[0];
                    }
                    l = n;
                }
                l == null && (l = ""), t = l;
            }
            l = St(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n);
        }
        function yn(e, t) {
            if (t) {
                var l = e.firstChild;
                if (l && l === e.lastChild && l.nodeType === 3) {
                    l.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var jm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Fs(e, t, l) {
            var n = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || jm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function Ws(e, t, l) {
            if (t != null && typeof t != "object") throw Error(s(62));
            if (e = e.style, l != null) {
                for(var n in l)!l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
                for(var a in t)n = t[a], t.hasOwnProperty(a) && l[a] !== n && Fs(e, a, n);
            } else for(var r in t)t.hasOwnProperty(r) && Fs(e, r, t[r]);
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
        var Hm = new Map([
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
        ]), Lm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function vu(e) {
            return Lm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Wi = null;
        function Ii(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var vn = null, gn = null;
        function Is(e) {
            var t = fn(e);
            if (t && (e = t.stateNode)) {
                var l = e[ut] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if ($i(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var n = l[t];
                                if (n !== e && n.form === e.form) {
                                    var a = n[ut] || null;
                                    if (!a) throw Error(s(90));
                                    $i(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)n = l[t], n.form === e.form && Xs(n);
                        }
                        break e;
                    case "textarea":
                        $s(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && mn(e, !!l.multiple, t, !1);
                }
            }
        }
        var er = !1;
        function eo(e, t, l) {
            if (er) return e(t, l);
            er = !0;
            try {
                var n = e(t);
                return n;
            } finally{
                if (er = !1, (vn !== null || gn !== null) && (li(), vn && (t = vn, e = gn, gn = vn = null, Is(t), e))) for(t = 0; t < e.length; t++)Is(e[t]);
            }
        }
        function ta(e, t) {
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
        var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tr = !1;
        if (Gt) try {
            var la = {};
            Object.defineProperty(la, "passive", {
                get: function() {
                    tr = !0;
                }
            }), window.addEventListener("test", la, la), window.removeEventListener("test", la, la);
        } catch  {
            tr = !1;
        }
        var dl = null, lr = null, gu = null;
        function to() {
            if (gu) return gu;
            var e, t = lr, l = t.length, n, a = "value" in dl ? dl.value : dl.textContent, r = a.length;
            for(e = 0; e < l && t[e] === a[e]; e++);
            var d = l - e;
            for(n = 1; n <= d && t[l - n] === a[r - n]; n++);
            return gu = a.slice(e, 1 < n ? 1 - n : void 0);
        }
        function bu(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function Su() {
            return !0;
        }
        function lo() {
            return !1;
        }
        function it(e) {
            function t(l, n, a, r, d) {
                this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = r, this.target = d, this.currentTarget = null;
                for(var v in e)e.hasOwnProperty(v) && (l = e[v], this[v] = l ? l(r) : r[v]);
                return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Su : lo, this.isPropagationStopped = lo, this;
            }
            return b(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Su);
                },
                stopPropagation: function() {
                    var l = this.nativeEvent;
                    l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Su);
                },
                persist: function() {},
                isPersistent: Su
            }), t;
        }
        var Hl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, Eu = it(Hl), na = b({}, Hl, {
            view: 0,
            detail: 0
        }), Qm = it(na), nr, ar, aa, _u = b({}, na, {
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
                return "movementX" in e ? e.movementX : (e !== aa && (aa && e.type === "mousemove" ? (nr = e.screenX - aa.screenX, ar = e.screenY - aa.screenY) : ar = nr = 0, aa = e), nr);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : ar;
            }
        }), no = it(_u), Km = b({}, _u, {
            dataTransfer: 0
        }), Ym = it(Km), Gm = b({}, na, {
            relatedTarget: 0
        }), ur = it(Gm), Vm = b({}, Hl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Xm = it(Vm), Zm = b({}, Hl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), $m = it(Zm), Jm = b({}, Hl, {
            data: 0
        }), ao = it(Jm), Fm = {
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
        }, Wm = {
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
        }, Im = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function e0(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Im[e]) ? !!t[e] : !1;
        }
        function ir() {
            return e0;
        }
        var t0 = b({}, na, {
            key: function(e) {
                if (e.key) {
                    var t = Fm[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = bu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wm[e.keyCode] || "Unidentified" : "";
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
                return e.type === "keypress" ? bu(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? bu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), l0 = it(t0), n0 = b({}, _u, {
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
        }), uo = it(n0), a0 = b({}, na, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ir
        }), u0 = it(a0), i0 = b({}, Hl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), r0 = it(i0), c0 = b({}, _u, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), s0 = it(c0), o0 = b({}, Hl, {
            newState: 0,
            oldState: 0
        }), f0 = it(o0), d0 = [
            9,
            13,
            27,
            32
        ], rr = Gt && "CompositionEvent" in window, ua = null;
        Gt && "documentMode" in document && (ua = document.documentMode);
        var h0 = Gt && "TextEvent" in window && !ua, io = Gt && (!rr || ua && 8 < ua && 11 >= ua), ro = " ", co = !1;
        function so(e, t) {
            switch(e){
                case "keyup":
                    return d0.indexOf(t.keyCode) !== -1;
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
        function oo(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var bn = !1;
        function p0(e, t) {
            switch(e){
                case "compositionend":
                    return oo(t);
                case "keypress":
                    return t.which !== 32 ? null : (co = !0, ro);
                case "textInput":
                    return e = t.data, e === ro && co ? null : e;
                default:
                    return null;
            }
        }
        function m0(e, t) {
            if (bn) return e === "compositionend" || !rr && so(e, t) ? (e = to(), gu = lr = dl = null, bn = !1, e) : null;
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
                    return io && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var y0 = {
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
        function fo(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!y0[e.type] : t === "textarea";
        }
        function ho(e, t, l, n) {
            vn ? gn ? gn.push(n) : gn = [
                n
            ] : vn = n, t = ci(t, "onChange"), 0 < t.length && (l = new Eu("onChange", "change", null, l, n), e.push({
                event: l,
                listeners: t
            }));
        }
        var ia = null, ra = null;
        function v0(e) {
            Zd(e, 0);
        }
        function Tu(e) {
            var t = ea(e);
            if (Xs(t)) return e;
        }
        function po(e, t) {
            if (e === "change") return t;
        }
        var mo = !1;
        if (Gt) {
            var cr;
            if (Gt) {
                var sr = "oninput" in document;
                if (!sr) {
                    var yo = document.createElement("div");
                    yo.setAttribute("oninput", "return;"), sr = typeof yo.oninput == "function";
                }
                cr = sr;
            } else cr = !1;
            mo = cr && (!document.documentMode || 9 < document.documentMode);
        }
        function vo() {
            ia && (ia.detachEvent("onpropertychange", go), ra = ia = null);
        }
        function go(e) {
            if (e.propertyName === "value" && Tu(ra)) {
                var t = [];
                ho(t, ra, e, Ii(e)), eo(v0, t);
            }
        }
        function g0(e, t, l) {
            e === "focusin" ? (vo(), ia = t, ra = l, ia.attachEvent("onpropertychange", go)) : e === "focusout" && vo();
        }
        function b0(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return Tu(ra);
        }
        function S0(e, t) {
            if (e === "click") return Tu(t);
        }
        function E0(e, t) {
            if (e === "input" || e === "change") return Tu(t);
        }
        function _0(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var ht = typeof Object.is == "function" ? Object.is : _0;
        function ca(e, t) {
            if (ht(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), n = Object.keys(t);
            if (l.length !== n.length) return !1;
            for(n = 0; n < l.length; n++){
                var a = l[n];
                if (!ki.call(t, a) || !ht(e[a], t[a])) return !1;
            }
            return !0;
        }
        function bo(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function So(e, t) {
            var l = bo(e);
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
                l = bo(l);
            }
        }
        function Eo(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Eo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function _o(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = yu(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var l = typeof t.contentWindow.location.href == "string";
                } catch  {
                    l = !1;
                }
                if (l) e = t.contentWindow;
                else break;
                t = yu(e.document);
            }
            return t;
        }
        function or(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var T0 = Gt && "documentMode" in document && 11 >= document.documentMode, Sn = null, fr = null, sa = null, dr = !1;
        function To(e, t, l) {
            var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            dr || Sn == null || Sn !== yu(n) || (n = Sn, "selectionStart" in n && or(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), sa && ca(sa, n) || (sa = n, n = ci(fr, "onSelect"), 0 < n.length && (t = new Eu("onSelect", "select", null, t, l), e.push({
                event: t,
                listeners: n
            }), t.target = Sn)));
        }
        function Ll(e, t) {
            var l = {};
            return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
        }
        var En = {
            animationend: Ll("Animation", "AnimationEnd"),
            animationiteration: Ll("Animation", "AnimationIteration"),
            animationstart: Ll("Animation", "AnimationStart"),
            transitionrun: Ll("Transition", "TransitionRun"),
            transitionstart: Ll("Transition", "TransitionStart"),
            transitioncancel: Ll("Transition", "TransitionCancel"),
            transitionend: Ll("Transition", "TransitionEnd")
        }, hr = {}, Ro = {};
        Gt && (Ro = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
        function Ql(e) {
            if (hr[e]) return hr[e];
            if (!En[e]) return e;
            var t = En[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in Ro) return hr[e] = t[l];
            return e;
        }
        var Ao = Ql("animationend"), Oo = Ql("animationiteration"), No = Ql("animationstart"), R0 = Ql("transitionrun"), A0 = Ql("transitionstart"), O0 = Ql("transitioncancel"), xo = Ql("transitionend"), Mo = new Map, pr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        pr.push("scrollEnd");
        function Dt(e, t) {
            Mo.set(e, t), jl(t, [
                e
            ]);
        }
        var Co = new WeakMap;
        function _t(e, t) {
            if (typeof e == "object" && e !== null) {
                var l = Co.get(e);
                return l !== void 0 ? l : (t = {
                    value: e,
                    source: t,
                    stack: Gs(t)
                }, Co.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Gs(t)
            };
        }
        var Tt = [], _n = 0, mr = 0;
        function Ru() {
            for(var e = _n, t = mr = _n = 0; t < e;){
                var l = Tt[t];
                Tt[t++] = null;
                var n = Tt[t];
                Tt[t++] = null;
                var a = Tt[t];
                Tt[t++] = null;
                var r = Tt[t];
                if (Tt[t++] = null, n !== null && a !== null) {
                    var d = n.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), n.pending = a;
                }
                r !== 0 && Do(l, a, r);
            }
        }
        function Au(e, t, l, n) {
            Tt[_n++] = e, Tt[_n++] = t, Tt[_n++] = l, Tt[_n++] = n, mr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
        }
        function yr(e, t, l, n) {
            return Au(e, t, l, n), Ou(e);
        }
        function Tn(e, t) {
            return Au(e, null, null, t), Ou(e);
        }
        function Do(e, t, l) {
            e.lanes |= l;
            var n = e.alternate;
            n !== null && (n.lanes |= l);
            for(var a = !1, r = e.return; r !== null;)r.childLanes |= l, n = r.alternate, n !== null && (n.childLanes |= l), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (a = !0)), e = r, r = r.return;
            return e.tag === 3 ? (r = e.stateNode, a && t !== null && (a = 31 - dt(l), e = r.hiddenUpdates, n = e[a], n === null ? e[a] = [
                t
            ] : n.push(t), t.lane = l | 536870912), r) : null;
        }
        function Ou(e) {
            if (50 < za) throw za = 0, _c = null, Error(s(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var Rn = {};
        function N0(e, t, l, n) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function pt(e, t, l, n) {
            return new N0(e, t, l, n);
        }
        function vr(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Vt(e, t) {
            var l = e.alternate;
            return l === null ? (l = pt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
        }
        function Bo(e, t) {
            e.flags &= 65011714;
            var l = e.alternate;
            return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function Nu(e, t, l, n, a, r) {
            var d = 0;
            if (n = e, typeof e == "function") vr(e) && (d = 1);
            else if (typeof e == "string") d = M1(e, l, F.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case ue:
                    return e = pt(31, l, t, a), e.elementType = ue, e.lanes = r, e;
                case N:
                    return Kl(l.children, a, r, t);
                case C:
                    d = 8, a |= 24;
                    break;
                case z:
                    return e = pt(12, l, t, a | 2), e.elementType = z, e.lanes = r, e;
                case Y:
                    return e = pt(13, l, t, a), e.elementType = Y, e.lanes = r, e;
                case J:
                    return e = pt(19, l, t, a), e.elementType = J, e.lanes = r, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case w:
                        case U:
                            d = 10;
                            break e;
                        case Q:
                            d = 9;
                            break e;
                        case X:
                            d = 11;
                            break e;
                        case te:
                            d = 14;
                            break e;
                        case pe:
                            d = 16, n = null;
                            break e;
                    }
                    d = 29, l = Error(s(130, e === null ? "null" : typeof e, "")), n = null;
            }
            return t = pt(d, l, t, a), t.elementType = e, t.type = n, t.lanes = r, t;
        }
        function Kl(e, t, l, n) {
            return e = pt(7, e, n, t), e.lanes = l, e;
        }
        function gr(e, t, l) {
            return e = pt(6, e, null, t), e.lanes = l, e;
        }
        function br(e, t, l) {
            return t = pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var An = [], On = 0, xu = null, Mu = 0, Rt = [], At = 0, Yl = null, Xt = 1, Zt = "";
        function Gl(e, t) {
            An[On++] = Mu, An[On++] = xu, xu = e, Mu = t;
        }
        function wo(e, t, l) {
            Rt[At++] = Xt, Rt[At++] = Zt, Rt[At++] = Yl, Yl = e;
            var n = Xt;
            e = Zt;
            var a = 32 - dt(n) - 1;
            n &= ~(1 << a), l += 1;
            var r = 32 - dt(t) + a;
            if (30 < r) {
                var d = a - a % 5;
                r = (n & (1 << d) - 1).toString(32), n >>= d, a -= d, Xt = 1 << 32 - dt(t) + a | l << a | n, Zt = r + e;
            } else Xt = 1 << r | l << a | n, Zt = e;
        }
        function Sr(e) {
            e.return !== null && (Gl(e, 1), wo(e, 1, 0));
        }
        function Er(e) {
            for(; e === xu;)xu = An[--On], An[On] = null, Mu = An[--On], An[On] = null;
            for(; e === Yl;)Yl = Rt[--At], Rt[At] = null, Zt = Rt[--At], Rt[At] = null, Xt = Rt[--At], Rt[At] = null;
        }
        var nt = null, De = null, ve = !1, Vl = null, Pt = !1, _r = Error(s(519));
        function Xl(e) {
            var t = Error(s(418, ""));
            throw da(_t(t, e)), _r;
        }
        function zo(e) {
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
                    for(l = 0; l < Pa.length; l++)he(Pa[l], t);
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
                    he("invalid", t), Zs(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), mu(t);
                    break;
                case "select":
                    he("invalid", t);
                    break;
                case "textarea":
                    he("invalid", t), Js(t, n.value, n.defaultValue, n.children), mu(t);
            }
            l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Wd(t.textContent, l) ? (n.popover != null && (he("beforetoggle", t), he("toggle", t)), n.onScroll != null && he("scroll", t), n.onScrollEnd != null && he("scrollend", t), n.onClick != null && (t.onclick = si), t = !0) : t = !1, t || Xl(e);
        }
        function Uo(e) {
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
        function oa(e) {
            if (e !== nt) return !1;
            if (!ve) return Uo(e), ve = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || kc(e.type, e.memoizedProps)), l = !l), l && De && Xl(e), Uo(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (l = e.data, l === "/$") {
                            if (t === 0) {
                                De = wt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else l !== "$" && l !== "$!" && l !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    De = null;
                }
            } else t === 27 ? (t = De, xl(e.type) ? (e = Qc, Qc = null, De = e) : De = t) : De = nt ? wt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function fa() {
            De = nt = null, ve = !1;
        }
        function Po() {
            var e = Vl;
            return e !== null && (st === null ? st = e : st.push.apply(st, e), Vl = null), e;
        }
        function da(e) {
            Vl === null ? Vl = [
                e
            ] : Vl.push(e);
        }
        var Tr = k(null), Zl = null, $t = null;
        function hl(e, t, l) {
            G(Tr, t._currentValue), t._currentValue = l;
        }
        function Jt(e) {
            e._currentValue = Tr.current, Z(Tr);
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
                        var v = r;
                        r = a;
                        for(var S = 0; S < t.length; S++)if (v.context === t[S]) {
                            r.lanes |= l, v = r.alternate, v !== null && (v.lanes |= l), Rr(r.return, l, e), n || (d = null);
                            break e;
                        }
                        r = v.next;
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
        function ha(e, t, l, n) {
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
                        var v = a.type;
                        ht(a.pendingProps.value, d.value) || (e !== null ? e.push(v) : e = [
                            v
                        ]);
                    }
                } else if (a === Qe.current) {
                    if (d = a.alternate, d === null) throw Error(s(387));
                    d.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Qa) : e = [
                        Qa
                    ]);
                }
                a = a.return;
            }
            e !== null && Ar(t, e, l, n), t.flags |= 262144;
        }
        function Cu(e) {
            for(e = e.firstContext; e !== null;){
                if (!ht(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function $l(e) {
            Zl = e, $t = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function et(e) {
            return qo(Zl, e);
        }
        function Du(e, t) {
            return Zl === null && $l(e), qo(e, t);
        }
        function qo(e, t) {
            var l = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, $t === null) {
                if (e === null) throw Error(s(308));
                $t = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else $t = $t.next = t;
            return l;
        }
        var x0 = typeof AbortController < "u" ? AbortController : function() {
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
        }, M0 = u.unstable_scheduleCallback, C0 = u.unstable_NormalPriority, ke = {
            $$typeof: U,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Or() {
            return {
                controller: new x0,
                data: new Map,
                refCount: 0
            };
        }
        function pa(e) {
            e.refCount--, e.refCount === 0 && M0(C0, function() {
                e.controller.abort();
            });
        }
        var ma = null, Nr = 0, Nn = 0, xn = null;
        function D0(e, t) {
            if (ma === null) {
                var l = ma = [];
                Nr = 0, Nn = Mc(), xn = {
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
            if (--Nr === 0 && ma !== null) {
                xn !== null && (xn.status = "fulfilled");
                var e = ma;
                ma = null, Nn = 0, xn = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function B0(e, t) {
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
        var jo = P.S;
        P.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && D0(e, t), jo !== null && jo(e, t);
        };
        var Jl = k(null);
        function xr() {
            var e = Jl.current;
            return e !== null ? e : Oe.pooledCache;
        }
        function Bu(e, t) {
            t === null ? G(Jl, Jl.current) : G(Jl, t.pool);
        }
        function Ho() {
            var e = xr();
            return e === null ? null : {
                parent: ke._currentValue,
                pool: e
            };
        }
        var ya = Error(s(460)), Lo = Error(s(474)), wu = Error(s(542)), Mr = {
            then: function() {}
        };
        function Qo(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function zu() {}
        function Ko(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(zu, zu), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Go(e), e;
                default:
                    if (typeof t.status == "string") t.then(zu, zu);
                    else {
                        if (e = Oe, e !== null && 100 < e.shellSuspendCounter) throw Error(s(482));
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
                            throw e = t.reason, Go(e), e;
                    }
                    throw va = t, ya;
            }
        }
        var va = null;
        function Yo() {
            if (va === null) throw Error(s(459));
            var e = va;
            return va = null, e;
        }
        function Go(e) {
            if (e === ya || e === wu) throw Error(s(483));
        }
        var pl = !1;
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
        function ml(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function yl(e, t, l) {
            var n = e.updateQueue;
            if (n === null) return null;
            if (n = n.shared, (ge & 2) !== 0) {
                var a = n.pending;
                return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Ou(e), Do(e, null, l), t;
            }
            return Au(e, n, t, l), Ou(e);
        }
        function ga(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, qs(e, l);
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
        function ba() {
            if (wr) {
                var e = xn;
                if (e !== null) throw e;
            }
        }
        function Sa(e, t, l, n) {
            wr = !1;
            var a = e.updateQueue;
            pl = !1;
            var r = a.firstBaseUpdate, d = a.lastBaseUpdate, v = a.shared.pending;
            if (v !== null) {
                a.shared.pending = null;
                var S = v, M = S.next;
                S.next = null, d === null ? r = M : d.next = M, d = S;
                var q = e.alternate;
                q !== null && (q = q.updateQueue, v = q.lastBaseUpdate, v !== d && (v === null ? q.firstBaseUpdate = M : v.next = M, q.lastBaseUpdate = S));
            }
            if (r !== null) {
                var H = a.baseState;
                d = 0, q = M = S = null, v = r;
                do {
                    var D = v.lane & -536870913, B = D !== v.lane;
                    if (B ? (me & D) === D : (n & D) === D) {
                        D !== 0 && D === Nn && (wr = !0), q !== null && (q = q.next = {
                            lane: 0,
                            tag: v.tag,
                            payload: v.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var le = e, I = v;
                            D = t;
                            var Te = l;
                            switch(I.tag){
                                case 1:
                                    if (le = I.payload, typeof le == "function") {
                                        H = le.call(Te, H, D);
                                        break e;
                                    }
                                    H = le;
                                    break e;
                                case 3:
                                    le.flags = le.flags & -65537 | 128;
                                case 0:
                                    if (le = I.payload, D = typeof le == "function" ? le.call(Te, H, D) : le, D == null) break e;
                                    H = b({}, H, D);
                                    break e;
                                case 2:
                                    pl = !0;
                            }
                        }
                        D = v.callback, D !== null && (e.flags |= 64, B && (e.flags |= 8192), B = a.callbacks, B === null ? a.callbacks = [
                            D
                        ] : B.push(D));
                    } else B = {
                        lane: D,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    }, q === null ? (M = q = B, S = H) : q = q.next = B, d |= D;
                    if (v = v.next, v === null) {
                        if (v = a.shared.pending, v === null) break;
                        B = v, v = B.next, B.next = null, a.lastBaseUpdate = B, a.shared.pending = null;
                    }
                }while (!0);
                q === null && (S = H), a.baseState = S, a.firstBaseUpdate = M, a.lastBaseUpdate = q, r === null && (a.shared.lanes = 0), Rl |= d, e.lanes = d, e.memoizedState = H;
            }
        }
        function Vo(e, t) {
            if (typeof e != "function") throw Error(s(191, e));
            e.call(t);
        }
        function Xo(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)Vo(l[e], t);
        }
        var Mn = k(null), Uu = k(0);
        function Zo(e, t) {
            e = nl, G(Uu, e), G(Mn, t), nl = e | t.baseLanes;
        }
        function zr() {
            G(Uu, nl), G(Mn, Mn.current);
        }
        function Ur() {
            nl = Uu.current, Z(Mn), Z(Uu);
        }
        var vl = 0, ce = null, Ee = null, Pe = null, Pu = !1, Cn = !1, Fl = !1, qu = 0, Ea = 0, Dn = null, w0 = 0;
        function we() {
            throw Error(s(321));
        }
        function Pr(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!ht(e[l], t[l])) return !1;
            return !0;
        }
        function qr(e, t, l, n, a, r) {
            return vl = r, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? Bf : wf, Fl = !1, r = l(n, a), Fl = !1, Cn && (r = Jo(t, l, n, a)), $o(e), r;
        }
        function $o(e) {
            P.H = Ku;
            var t = Ee !== null && Ee.next !== null;
            if (vl = 0, Pe = Ee = ce = null, Pu = !1, Ea = 0, Dn = null, t) throw Error(s(300));
            e === null || Ye || (e = e.dependencies, e !== null && Cu(e) && (Ye = !0));
        }
        function Jo(e, t, l, n) {
            ce = e;
            var a = 0;
            do {
                if (Cn && (Dn = null), Ea = 0, Cn = !1, 25 <= a) throw Error(s(301));
                if (a += 1, Pe = Ee = null, e.updateQueue != null) {
                    var r = e.updateQueue;
                    r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
                }
                P.H = H0, r = t(l, n);
            }while (Cn);
            return r;
        }
        function z0() {
            var e = P.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? _a(t) : t, e = e.useState()[0], (Ee !== null ? Ee.memoizedState : null) !== e && (ce.flags |= 1024), t;
        }
        function kr() {
            var e = qu !== 0;
            return qu = 0, e;
        }
        function jr(e, t, l) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
        }
        function Hr(e) {
            if (Pu) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                Pu = !1;
            }
            vl = 0, Pe = Ee = ce = null, Cn = !1, Ea = qu = 0, Dn = null;
        }
        function rt() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Pe === null ? ce.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
        }
        function qe() {
            if (Ee === null) {
                var e = ce.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = Ee.next;
            var t = Pe === null ? ce.memoizedState : Pe.next;
            if (t !== null) Pe = t, Ee = e;
            else {
                if (e === null) throw ce.alternate === null ? Error(s(467)) : Error(s(310));
                Ee = e, e = {
                    memoizedState: Ee.memoizedState,
                    baseState: Ee.baseState,
                    baseQueue: Ee.baseQueue,
                    queue: Ee.queue,
                    next: null
                }, Pe === null ? ce.memoizedState = Pe = e : Pe = Pe.next = e;
            }
            return Pe;
        }
        function Lr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function _a(e) {
            var t = Ea;
            return Ea += 1, Dn === null && (Dn = []), e = Ko(Dn, e, t), t = ce, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? Bf : wf), e;
        }
        function ku(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return _a(e);
                if (e.$$typeof === U) return et(e);
            }
            throw Error(s(438, String(e)));
        }
        function Qr(e) {
            var t = null, l = ce.updateQueue;
            if (l !== null && (t = l.memoCache), t == null) {
                var n = ce.alternate;
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
            }), l === null && (l = Lr(), ce.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), n = 0; n < e; n++)l[n] = xe;
            return t.index++, l;
        }
        function Ft(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function ju(e) {
            var t = qe();
            return Kr(t, Ee, e);
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
                var v = d = null, S = null, M = t, q = !1;
                do {
                    var H = M.lane & -536870913;
                    if (H !== M.lane ? (me & H) === H : (vl & H) === H) {
                        var D = M.revertLane;
                        if (D === 0) S !== null && (S = S.next = {
                            lane: 0,
                            revertLane: 0,
                            action: M.action,
                            hasEagerState: M.hasEagerState,
                            eagerState: M.eagerState,
                            next: null
                        }), H === Nn && (q = !0);
                        else if ((vl & D) === D) {
                            M = M.next, D === Nn && (q = !0);
                            continue;
                        } else H = {
                            lane: 0,
                            revertLane: M.revertLane,
                            action: M.action,
                            hasEagerState: M.hasEagerState,
                            eagerState: M.eagerState,
                            next: null
                        }, S === null ? (v = S = H, d = r) : S = S.next = H, ce.lanes |= D, Rl |= D;
                        H = M.action, Fl && l(r, H), r = M.hasEagerState ? M.eagerState : l(r, H);
                    } else D = {
                        lane: H,
                        revertLane: M.revertLane,
                        action: M.action,
                        hasEagerState: M.hasEagerState,
                        eagerState: M.eagerState,
                        next: null
                    }, S === null ? (v = S = D, d = r) : S = S.next = D, ce.lanes |= H, Rl |= H;
                    M = M.next;
                }while (M !== null && M !== t);
                if (S === null ? d = r : S.next = v, !ht(r, e.memoizedState) && (Ye = !0, q && (l = xn, l !== null))) throw l;
                e.memoizedState = r, e.baseState = d, e.baseQueue = S, n.lastRenderedState = r;
            }
            return a === null && (n.lanes = 0), [
                e.memoizedState,
                n.dispatch
            ];
        }
        function Yr(e) {
            var t = qe(), l = t.queue;
            if (l === null) throw Error(s(311));
            l.lastRenderedReducer = e;
            var n = l.dispatch, a = l.pending, r = t.memoizedState;
            if (a !== null) {
                l.pending = null;
                var d = a = a.next;
                do r = e(r, d.action), d = d.next;
                while (d !== a);
                ht(r, t.memoizedState) || (Ye = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), l.lastRenderedState = r;
            }
            return [
                r,
                n
            ];
        }
        function Fo(e, t, l) {
            var n = ce, a = qe(), r = ve;
            if (r) {
                if (l === void 0) throw Error(s(407));
                l = l();
            } else l = t();
            var d = !ht((Ee || a).memoizedState, l);
            d && (a.memoizedState = l, Ye = !0), a = a.queue;
            var v = ef.bind(null, n, a, e);
            if (Ta(2048, 8, v, [
                e
            ]), a.getSnapshot !== t || d || Pe !== null && Pe.memoizedState.tag & 1) {
                if (n.flags |= 2048, Bn(9, Hu(), Io.bind(null, n, a, l, t), null), Oe === null) throw Error(s(349));
                r || (vl & 124) !== 0 || Wo(n, t, l);
            }
            return l;
        }
        function Wo(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = ce.updateQueue, t === null ? (t = Lr(), ce.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function Io(e, t, l, n) {
            t.value = l, t.getSnapshot = n, tf(t) && lf(e);
        }
        function ef(e, t, l) {
            return l(function() {
                tf(t) && lf(e);
            });
        }
        function tf(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !ht(e, l);
            } catch  {
                return !0;
            }
        }
        function lf(e) {
            var t = Tn(e, 2);
            t !== null && bt(t, e, 2);
        }
        function Gr(e) {
            var t = rt();
            if (typeof e == "function") {
                var l = e;
                if (e = l(), Fl) {
                    ol(!0);
                    try {
                        l();
                    } finally{
                        ol(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ft,
                lastRenderedState: e
            }, t;
        }
        function nf(e, t, l, n) {
            return e.baseState = l, Kr(e, Ee, typeof n == "function" ? n : Ft);
        }
        function U0(e, t, l, n, a) {
            if (Qu(e)) throw Error(s(485));
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
                P.T !== null ? l(!0) : r.isTransition = !1, n(r), l = t.pending, l === null ? (r.next = t.pending = r, af(t, r)) : (r.next = l.next, t.pending = l.next = r);
            }
        }
        function af(e, t) {
            var l = t.action, n = t.payload, a = e.state;
            if (t.isTransition) {
                var r = P.T, d = {};
                P.T = d;
                try {
                    var v = l(a, n), S = P.S;
                    S !== null && S(d, v), uf(e, t, v);
                } catch (M) {
                    Vr(e, t, M);
                } finally{
                    P.T = r;
                }
            } else try {
                r = l(a, n), uf(e, t, r);
            } catch (M) {
                Vr(e, t, M);
            }
        }
        function uf(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
                rf(e, t, n);
            }, function(n) {
                return Vr(e, t, n);
            }) : rf(e, t, l);
        }
        function rf(e, t, l) {
            t.status = "fulfilled", t.value = l, cf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, af(e, l)));
        }
        function Vr(e, t, l) {
            var n = e.pending;
            if (e.pending = null, n !== null) {
                n = n.next;
                do t.status = "rejected", t.reason = l, cf(t), t = t.next;
                while (t !== n);
            }
            e.action = null;
        }
        function cf(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function sf(e, t) {
            return t;
        }
        function of(e, t) {
            if (ve) {
                var l = Oe.formState;
                if (l !== null) {
                    e: {
                        var n = ce;
                        if (ve) {
                            if (De) {
                                t: {
                                    for(var a = De, r = Pt; a.nodeType !== 8;){
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
                                    De = wt(a.nextSibling), n = a.data === "F!";
                                    break e;
                                }
                            }
                            Xl(n);
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
                lastRenderedReducer: sf,
                lastRenderedState: t
            }, l.queue = n, l = Mf.bind(null, ce, n), n.dispatch = l, n = Gr(!1), r = Fr.bind(null, ce, !1, n.queue), n = rt(), a = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, n.queue = a, l = U0.bind(null, ce, a, r, l), a.dispatch = l, n.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function ff(e) {
            var t = qe();
            return df(t, Ee, e);
        }
        function df(e, t, l) {
            if (t = Kr(e, t, sf)[0], e = ju(Ft)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var n = _a(t);
            } catch (d) {
                throw d === ya ? wu : d;
            }
            else n = t;
            t = qe();
            var a = t.queue, r = a.dispatch;
            return l !== t.memoizedState && (ce.flags |= 2048, Bn(9, Hu(), P0.bind(null, a, l), null)), [
                n,
                r,
                e
            ];
        }
        function P0(e, t) {
            e.action = t;
        }
        function hf(e) {
            var t = qe(), l = Ee;
            if (l !== null) return df(t, l, e);
            qe(), t = t.memoizedState, l = qe();
            var n = l.queue.dispatch;
            return l.memoizedState = e, [
                t,
                n,
                !1
            ];
        }
        function Bn(e, t, l, n) {
            return e = {
                tag: e,
                create: l,
                deps: n,
                inst: t,
                next: null
            }, t = ce.updateQueue, t === null && (t = Lr(), ce.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
        }
        function Hu() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function pf() {
            return qe().memoizedState;
        }
        function Lu(e, t, l, n) {
            var a = rt();
            n = n === void 0 ? null : n, ce.flags |= e, a.memoizedState = Bn(1 | t, Hu(), l, n);
        }
        function Ta(e, t, l, n) {
            var a = qe();
            n = n === void 0 ? null : n;
            var r = a.memoizedState.inst;
            Ee !== null && n !== null && Pr(n, Ee.memoizedState.deps) ? a.memoizedState = Bn(t, r, l, n) : (ce.flags |= e, a.memoizedState = Bn(1 | t, r, l, n));
        }
        function mf(e, t) {
            Lu(8390656, 8, e, t);
        }
        function yf(e, t) {
            Ta(2048, 8, e, t);
        }
        function vf(e, t) {
            return Ta(4, 2, e, t);
        }
        function gf(e, t) {
            return Ta(4, 4, e, t);
        }
        function bf(e, t) {
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
        function Sf(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, Ta(4, 4, bf.bind(null, t, e), l);
        }
        function Xr() {}
        function Ef(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            return t !== null && Pr(t, n[1]) ? n[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function _f(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            if (t !== null && Pr(t, n[1])) return n[0];
            if (n = e(), Fl) {
                ol(!0);
                try {
                    e();
                } finally{
                    ol(!1);
                }
            }
            return l.memoizedState = [
                n,
                t
            ], n;
        }
        function Zr(e, t, l) {
            return l === void 0 || (vl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Ad(), ce.lanes |= e, Rl |= e, l);
        }
        function Tf(e, t, l, n) {
            return ht(l, t) ? l : Mn.current !== null ? (e = Zr(e, l, n), ht(e, t) || (Ye = !0), e) : (vl & 42) === 0 ? (Ye = !0, e.memoizedState = l) : (e = Ad(), ce.lanes |= e, Rl |= e, t);
        }
        function Rf(e, t, l, n, a) {
            var r = K.p;
            K.p = r !== 0 && 8 > r ? r : 8;
            var d = P.T, v = {};
            P.T = v, Fr(e, !1, t, l);
            try {
                var S = a(), M = P.S;
                if (M !== null && M(v, S), S !== null && typeof S == "object" && typeof S.then == "function") {
                    var q = B0(S, n);
                    Ra(e, t, q, gt(e));
                } else Ra(e, t, n, gt(e));
            } catch (H) {
                Ra(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: H
                }, gt());
            } finally{
                K.p = r, P.T = d;
            }
        }
        function q0() {}
        function $r(e, t, l, n) {
            if (e.tag !== 5) throw Error(s(476));
            var a = Af(e).queue;
            Rf(e, a, t, V, l === null ? q0 : function() {
                return Of(e), l(n);
            });
        }
        function Af(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: V,
                baseState: V,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ft,
                    lastRenderedState: V
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
                    lastRenderedReducer: Ft,
                    lastRenderedState: l
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Of(e) {
            var t = Af(e).next.queue;
            Ra(e, t, {}, gt());
        }
        function Jr() {
            return et(Qa);
        }
        function Nf() {
            return qe().memoizedState;
        }
        function xf() {
            return qe().memoizedState;
        }
        function k0(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = gt();
                        e = ml(l);
                        var n = yl(t, e, l);
                        n !== null && (bt(n, t, l), ga(n, t, l)), t = {
                            cache: Or()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function j0(e, t, l) {
            var n = gt();
            l = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Qu(e) ? Cf(t, l) : (l = yr(e, t, l, n), l !== null && (bt(l, e, n), Df(l, t, n)));
        }
        function Mf(e, t, l) {
            var n = gt();
            Ra(e, t, l, n);
        }
        function Ra(e, t, l, n) {
            var a = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Qu(e)) Cf(t, a);
            else {
                var r = e.alternate;
                if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null)) try {
                    var d = t.lastRenderedState, v = r(d, l);
                    if (a.hasEagerState = !0, a.eagerState = v, ht(v, d)) return Au(e, t, a, 0), Oe === null && Ru(), !1;
                } catch  {} finally{}
                if (l = yr(e, t, a, n), l !== null) return bt(l, e, n), Df(l, t, n), !0;
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
            }, Qu(e)) {
                if (t) throw Error(s(479));
            } else t = yr(e, l, n, 2), t !== null && bt(t, e, 2);
        }
        function Qu(e) {
            var t = e.alternate;
            return e === ce || t !== null && t === ce;
        }
        function Cf(e, t) {
            Cn = Pu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function Df(e, t, l) {
            if ((l & 4194048) !== 0) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, qs(e, l);
            }
        }
        var Ku = {
            readContext: et,
            use: ku,
            useCallback: we,
            useContext: we,
            useEffect: we,
            useImperativeHandle: we,
            useLayoutEffect: we,
            useInsertionEffect: we,
            useMemo: we,
            useReducer: we,
            useRef: we,
            useState: we,
            useDebugValue: we,
            useDeferredValue: we,
            useTransition: we,
            useSyncExternalStore: we,
            useId: we,
            useHostTransitionStatus: we,
            useFormState: we,
            useActionState: we,
            useOptimistic: we,
            useMemoCache: we,
            useCacheRefresh: we
        }, Bf = {
            readContext: et,
            use: ku,
            useCallback: function(e, t) {
                return rt().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: et,
            useEffect: mf,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, Lu(4194308, 4, bf.bind(null, t, e), l);
            },
            useLayoutEffect: function(e, t) {
                return Lu(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                Lu(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var l = rt();
                t = t === void 0 ? null : t;
                var n = e();
                if (Fl) {
                    ol(!0);
                    try {
                        e();
                    } finally{
                        ol(!1);
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
                    if (Fl) {
                        ol(!0);
                        try {
                            l(t);
                        } finally{
                            ol(!1);
                        }
                    }
                } else a = t;
                return n.memoizedState = n.baseState = a, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: a
                }, n.queue = e, e = e.dispatch = j0.bind(null, ce, e), [
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
                var t = e.queue, l = Mf.bind(null, ce, t);
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
                return e = Rf.bind(null, ce, e.queue, !0, !1), rt().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, l) {
                var n = ce, a = rt();
                if (ve) {
                    if (l === void 0) throw Error(s(407));
                    l = l();
                } else {
                    if (l = t(), Oe === null) throw Error(s(349));
                    (me & 124) !== 0 || Wo(n, t, l);
                }
                a.memoizedState = l;
                var r = {
                    value: l,
                    getSnapshot: t
                };
                return a.queue = r, mf(ef.bind(null, n, r, e), [
                    e
                ]), n.flags |= 2048, Bn(9, Hu(), Io.bind(null, n, r, l, t), null), l;
            },
            useId: function() {
                var e = rt(), t = Oe.identifierPrefix;
                if (ve) {
                    var l = Zt, n = Xt;
                    l = (n & ~(1 << 32 - dt(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = qu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = w0++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Jr,
            useFormState: of,
            useActionState: of,
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
                return t.queue = l, t = Fr.bind(null, ce, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Qr,
            useCacheRefresh: function() {
                return rt().memoizedState = k0.bind(null, ce);
            }
        }, wf = {
            readContext: et,
            use: ku,
            useCallback: Ef,
            useContext: et,
            useEffect: yf,
            useImperativeHandle: Sf,
            useInsertionEffect: vf,
            useLayoutEffect: gf,
            useMemo: _f,
            useReducer: ju,
            useRef: pf,
            useState: function() {
                return ju(Ft);
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return Tf(l, Ee.memoizedState, e, t);
            },
            useTransition: function() {
                var e = ju(Ft)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : _a(e),
                    t
                ];
            },
            useSyncExternalStore: Fo,
            useId: Nf,
            useHostTransitionStatus: Jr,
            useFormState: ff,
            useActionState: ff,
            useOptimistic: function(e, t) {
                var l = qe();
                return nf(l, Ee, e, t);
            },
            useMemoCache: Qr,
            useCacheRefresh: xf
        }, H0 = {
            readContext: et,
            use: ku,
            useCallback: Ef,
            useContext: et,
            useEffect: yf,
            useImperativeHandle: Sf,
            useInsertionEffect: vf,
            useLayoutEffect: gf,
            useMemo: _f,
            useReducer: Yr,
            useRef: pf,
            useState: function() {
                return Yr(Ft);
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return Ee === null ? Zr(l, e, t) : Tf(l, Ee.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Yr(Ft)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : _a(e),
                    t
                ];
            },
            useSyncExternalStore: Fo,
            useId: Nf,
            useHostTransitionStatus: Jr,
            useFormState: hf,
            useActionState: hf,
            useOptimistic: function(e, t) {
                var l = qe();
                return Ee !== null ? nf(l, Ee, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: Qr,
            useCacheRefresh: xf
        }, wn = null, Aa = 0;
        function Yu(e) {
            var t = Aa;
            return Aa += 1, wn === null && (wn = []), Ko(wn, e, t);
        }
        function Oa(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Gu(e, t) {
            throw t.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function zf(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Uf(e) {
            function t(O, T) {
                if (e) {
                    var x = O.deletions;
                    x === null ? (O.deletions = [
                        T
                    ], O.flags |= 16) : x.push(T);
                }
            }
            function l(O, T) {
                if (!e) return null;
                for(; T !== null;)t(O, T), T = T.sibling;
                return null;
            }
            function n(O) {
                for(var T = new Map; O !== null;)O.key !== null ? T.set(O.key, O) : T.set(O.index, O), O = O.sibling;
                return T;
            }
            function a(O, T) {
                return O = Vt(O, T), O.index = 0, O.sibling = null, O;
            }
            function r(O, T, x) {
                return O.index = x, e ? (x = O.alternate, x !== null ? (x = x.index, x < T ? (O.flags |= 67108866, T) : x) : (O.flags |= 67108866, T)) : (O.flags |= 1048576, T);
            }
            function d(O) {
                return e && O.alternate === null && (O.flags |= 67108866), O;
            }
            function v(O, T, x, j) {
                return T === null || T.tag !== 6 ? (T = gr(x, O.mode, j), T.return = O, T) : (T = a(T, x), T.return = O, T);
            }
            function S(O, T, x, j) {
                var $ = x.type;
                return $ === N ? q(O, T, x.props.children, j, x.key) : T !== null && (T.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === pe && zf($) === T.type) ? (T = a(T, x.props), Oa(T, x), T.return = O, T) : (T = Nu(x.type, x.key, x.props, null, O.mode, j), Oa(T, x), T.return = O, T);
            }
            function M(O, T, x, j) {
                return T === null || T.tag !== 4 || T.stateNode.containerInfo !== x.containerInfo || T.stateNode.implementation !== x.implementation ? (T = br(x, O.mode, j), T.return = O, T) : (T = a(T, x.children || []), T.return = O, T);
            }
            function q(O, T, x, j, $) {
                return T === null || T.tag !== 7 ? (T = Kl(x, O.mode, j, $), T.return = O, T) : (T = a(T, x), T.return = O, T);
            }
            function H(O, T, x) {
                if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return T = gr("" + T, O.mode, x), T.return = O, T;
                if (typeof T == "object" && T !== null) {
                    switch(T.$$typeof){
                        case g:
                            return x = Nu(T.type, T.key, T.props, null, O.mode, x), Oa(x, T), x.return = O, x;
                        case R:
                            return T = br(T, O.mode, x), T.return = O, T;
                        case pe:
                            var j = T._init;
                            return T = j(T._payload), H(O, T, x);
                    }
                    if (Le(T) || Ue(T)) return T = Kl(T, O.mode, x, null), T.return = O, T;
                    if (typeof T.then == "function") return H(O, Yu(T), x);
                    if (T.$$typeof === U) return H(O, Du(O, T), x);
                    Gu(O, T);
                }
                return null;
            }
            function D(O, T, x, j) {
                var $ = T !== null ? T.key : null;
                if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return $ !== null ? null : v(O, T, "" + x, j);
                if (typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case g:
                            return x.key === $ ? S(O, T, x, j) : null;
                        case R:
                            return x.key === $ ? M(O, T, x, j) : null;
                        case pe:
                            return $ = x._init, x = $(x._payload), D(O, T, x, j);
                    }
                    if (Le(x) || Ue(x)) return $ !== null ? null : q(O, T, x, j, null);
                    if (typeof x.then == "function") return D(O, T, Yu(x), j);
                    if (x.$$typeof === U) return D(O, T, Du(O, x), j);
                    Gu(O, x);
                }
                return null;
            }
            function B(O, T, x, j, $) {
                if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return O = O.get(x) || null, v(T, O, "" + j, $);
                if (typeof j == "object" && j !== null) {
                    switch(j.$$typeof){
                        case g:
                            return O = O.get(j.key === null ? x : j.key) || null, S(T, O, j, $);
                        case R:
                            return O = O.get(j.key === null ? x : j.key) || null, M(T, O, j, $);
                        case pe:
                            var oe = j._init;
                            return j = oe(j._payload), B(O, T, x, j, $);
                    }
                    if (Le(j) || Ue(j)) return O = O.get(x) || null, q(T, O, j, $, null);
                    if (typeof j.then == "function") return B(O, T, x, Yu(j), $);
                    if (j.$$typeof === U) return B(O, T, x, Du(T, j), $);
                    Gu(T, j);
                }
                return null;
            }
            function le(O, T, x, j) {
                for(var $ = null, oe = null, W = T, ee = T = 0, Ve = null; W !== null && ee < x.length; ee++){
                    W.index > ee ? (Ve = W, W = null) : Ve = W.sibling;
                    var ye = D(O, W, x[ee], j);
                    if (ye === null) {
                        W === null && (W = Ve);
                        break;
                    }
                    e && W && ye.alternate === null && t(O, W), T = r(ye, T, ee), oe === null ? $ = ye : oe.sibling = ye, oe = ye, W = Ve;
                }
                if (ee === x.length) return l(O, W), ve && Gl(O, ee), $;
                if (W === null) {
                    for(; ee < x.length; ee++)W = H(O, x[ee], j), W !== null && (T = r(W, T, ee), oe === null ? $ = W : oe.sibling = W, oe = W);
                    return ve && Gl(O, ee), $;
                }
                for(W = n(W); ee < x.length; ee++)Ve = B(W, O, ee, x[ee], j), Ve !== null && (e && Ve.alternate !== null && W.delete(Ve.key === null ? ee : Ve.key), T = r(Ve, T, ee), oe === null ? $ = Ve : oe.sibling = Ve, oe = Ve);
                return e && W.forEach(function(wl) {
                    return t(O, wl);
                }), ve && Gl(O, ee), $;
            }
            function I(O, T, x, j) {
                if (x == null) throw Error(s(151));
                for(var $ = null, oe = null, W = T, ee = T = 0, Ve = null, ye = x.next(); W !== null && !ye.done; ee++, ye = x.next()){
                    W.index > ee ? (Ve = W, W = null) : Ve = W.sibling;
                    var wl = D(O, W, ye.value, j);
                    if (wl === null) {
                        W === null && (W = Ve);
                        break;
                    }
                    e && W && wl.alternate === null && t(O, W), T = r(wl, T, ee), oe === null ? $ = wl : oe.sibling = wl, oe = wl, W = Ve;
                }
                if (ye.done) return l(O, W), ve && Gl(O, ee), $;
                if (W === null) {
                    for(; !ye.done; ee++, ye = x.next())ye = H(O, ye.value, j), ye !== null && (T = r(ye, T, ee), oe === null ? $ = ye : oe.sibling = ye, oe = ye);
                    return ve && Gl(O, ee), $;
                }
                for(W = n(W); !ye.done; ee++, ye = x.next())ye = B(W, O, ee, ye.value, j), ye !== null && (e && ye.alternate !== null && W.delete(ye.key === null ? ee : ye.key), T = r(ye, T, ee), oe === null ? $ = ye : oe.sibling = ye, oe = ye);
                return e && W.forEach(function(L1) {
                    return t(O, L1);
                }), ve && Gl(O, ee), $;
            }
            function Te(O, T, x, j) {
                if (typeof x == "object" && x !== null && x.type === N && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case g:
                            e: {
                                for(var $ = x.key; T !== null;){
                                    if (T.key === $) {
                                        if ($ = x.type, $ === N) {
                                            if (T.tag === 7) {
                                                l(O, T.sibling), j = a(T, x.props.children), j.return = O, O = j;
                                                break e;
                                            }
                                        } else if (T.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === pe && zf($) === T.type) {
                                            l(O, T.sibling), j = a(T, x.props), Oa(j, x), j.return = O, O = j;
                                            break e;
                                        }
                                        l(O, T);
                                        break;
                                    } else t(O, T);
                                    T = T.sibling;
                                }
                                x.type === N ? (j = Kl(x.props.children, O.mode, j, x.key), j.return = O, O = j) : (j = Nu(x.type, x.key, x.props, null, O.mode, j), Oa(j, x), j.return = O, O = j);
                            }
                            return d(O);
                        case R:
                            e: {
                                for($ = x.key; T !== null;){
                                    if (T.key === $) if (T.tag === 4 && T.stateNode.containerInfo === x.containerInfo && T.stateNode.implementation === x.implementation) {
                                        l(O, T.sibling), j = a(T, x.children || []), j.return = O, O = j;
                                        break e;
                                    } else {
                                        l(O, T);
                                        break;
                                    }
                                    else t(O, T);
                                    T = T.sibling;
                                }
                                j = br(x, O.mode, j), j.return = O, O = j;
                            }
                            return d(O);
                        case pe:
                            return $ = x._init, x = $(x._payload), Te(O, T, x, j);
                    }
                    if (Le(x)) return le(O, T, x, j);
                    if (Ue(x)) {
                        if ($ = Ue(x), typeof $ != "function") throw Error(s(150));
                        return x = $.call(x), I(O, T, x, j);
                    }
                    if (typeof x.then == "function") return Te(O, T, Yu(x), j);
                    if (x.$$typeof === U) return Te(O, T, Du(O, x), j);
                    Gu(O, x);
                }
                return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, T !== null && T.tag === 6 ? (l(O, T.sibling), j = a(T, x), j.return = O, O = j) : (l(O, T), j = gr(x, O.mode, j), j.return = O, O = j), d(O)) : l(O, T);
            }
            return function(O, T, x, j) {
                try {
                    Aa = 0;
                    var $ = Te(O, T, x, j);
                    return wn = null, $;
                } catch (W) {
                    if (W === ya || W === wu) throw W;
                    var oe = pt(29, W, null, O.mode);
                    return oe.lanes = j, oe.return = O, oe;
                } finally{}
            };
        }
        var zn = Uf(!0), Pf = Uf(!1), Ot = k(null), qt = null;
        function gl(e) {
            var t = e.alternate;
            G(je, je.current & 1), G(Ot, e), qt === null && (t === null || Mn.current !== null || t.memoizedState !== null) && (qt = e);
        }
        function qf(e) {
            if (e.tag === 22) {
                if (G(je, je.current), G(Ot, e), qt === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (qt = e);
                }
            } else bl();
        }
        function bl() {
            G(je, je.current), G(Ot, Ot.current);
        }
        function Wt(e) {
            Z(Ot), qt === e && (qt = null), Z(je);
        }
        var je = k(0);
        function Vu(e) {
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
                var n = gt(), a = ml(n);
                a.payload = t, l != null && (a.callback = l), t = yl(e, a, n), t !== null && (bt(t, e, n), ga(t, e, n));
            },
            enqueueReplaceState: function(e, t, l) {
                e = e._reactInternals;
                var n = gt(), a = ml(n);
                a.tag = 1, a.payload = t, l != null && (a.callback = l), t = yl(e, a, n), t !== null && (bt(t, e, n), ga(t, e, n));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var l = gt(), n = ml(l);
                n.tag = 2, t != null && (n.callback = t), t = yl(e, n, l), t !== null && (bt(t, e, l), ga(t, e, l));
            }
        };
        function kf(e, t, l, n, a, r, d) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, r, d) : t.prototype && t.prototype.isPureReactComponent ? !ca(l, n) || !ca(a, r) : !0;
        }
        function jf(e, t, l, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Ir.enqueueReplaceState(t, t.state, null);
        }
        function Wl(e, t) {
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
        var Xu = typeof reportError == "function" ? reportError : function(e) {
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
        function Hf(e) {
            Xu(e);
        }
        function Lf(e) {
            console.error(e);
        }
        function Qf(e) {
            Xu(e);
        }
        function Zu(e, t) {
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
        function Kf(e, t, l) {
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
            return l = ml(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Zu(e, t);
            }, l;
        }
        function Yf(e) {
            return e = ml(e), e.tag = 3, e;
        }
        function Gf(e, t, l, n) {
            var a = l.type.getDerivedStateFromError;
            if (typeof a == "function") {
                var r = n.value;
                e.payload = function() {
                    return a(r);
                }, e.callback = function() {
                    Kf(t, l, n);
                };
            }
            var d = l.stateNode;
            d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
                Kf(t, l, n), typeof a != "function" && (Al === null ? Al = new Set([
                    this
                ]) : Al.add(this));
                var v = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: v !== null ? v : ""
                });
            });
        }
        function L0(e, t, l, n, a) {
            if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (t = l.alternate, t !== null && ha(t, l, a, !0), l = Ot.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return qt === null ? Rc() : l.alternate === null && Be === 0 && (Be = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Mr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
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
            if (ve) return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== _r && (e = Error(s(422), {
                cause: n
            }), da(_t(e, l)))) : (n !== _r && (t = Error(s(423), {
                cause: n
            }), da(_t(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = ec(e.stateNode, n, a), Br(e, a), Be !== 4 && (Be = 2)), !1;
            var r = Error(s(520), {
                cause: n
            });
            if (r = _t(r, l), wa === null ? wa = [
                r
            ] : wa.push(r), Be !== 4 && (Be = 2), t === null) return !0;
            n = _t(n, l), l = t;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, e = a & -a, l.lanes |= e, e = ec(l.stateNode, n, e), Br(l, e), !1;
                    case 1:
                        if (t = l.type, r = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Al === null || !Al.has(r)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = Yf(a), Gf(a, e, l, n), Br(l, a), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Vf = Error(s(461)), Ye = !1;
        function Ze(e, t, l, n) {
            t.child = e === null ? Pf(t, null, l, n) : zn(t, e.child, l, n);
        }
        function Xf(e, t, l, n, a) {
            l = l.render;
            var r = t.ref;
            if ("ref" in n) {
                var d = {};
                for(var v in n)v !== "ref" && (d[v] = n[v]);
            } else d = n;
            return $l(t), n = qr(e, t, l, d, r, a), v = kr(), e !== null && !Ye ? (jr(e, t, a), It(e, t, a)) : (ve && v && Sr(t), t.flags |= 1, Ze(e, t, n, a), t.child);
        }
        function Zf(e, t, l, n, a) {
            if (e === null) {
                var r = l.type;
                return typeof r == "function" && !vr(r) && r.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = r, $f(e, t, r, n, a)) : (e = Nu(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (r = e.child, !cc(e, a)) {
                var d = r.memoizedProps;
                if (l = l.compare, l = l !== null ? l : ca, l(d, n) && e.ref === t.ref) return It(e, t, a);
            }
            return t.flags |= 1, e = Vt(r, n), e.ref = t.ref, e.return = t, t.child = e;
        }
        function $f(e, t, l, n, a) {
            if (e !== null) {
                var r = e.memoizedProps;
                if (ca(r, n) && e.ref === t.ref) if (Ye = !1, t.pendingProps = n = r, cc(e, a)) (e.flags & 131072) !== 0 && (Ye = !0);
                else return t.lanes = e.lanes, It(e, t, a);
            }
            return tc(e, t, l, n, a);
        }
        function Jf(e, t, l) {
            var n = t.pendingProps, a = n.children, r = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (n = r !== null ? r.baseLanes | l : l, e !== null) {
                        for(a = t.child = e.child, r = 0; a !== null;)r = r | a.lanes | a.childLanes, a = a.sibling;
                        t.childLanes = r & ~n;
                    } else t.childLanes = 0, t.child = null;
                    return Ff(e, t, n, l);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && Bu(t, r !== null ? r.cachePool : null), r !== null ? Zo(t, r) : zr(), qf(t);
                else return t.lanes = t.childLanes = 536870912, Ff(e, t, r !== null ? r.baseLanes | l : l, l);
            } else r !== null ? (Bu(t, r.cachePool), Zo(t, r), bl(), t.memoizedState = null) : (e !== null && Bu(t, null), zr(), bl());
            return Ze(e, t, a, l), t.child;
        }
        function Ff(e, t, l, n) {
            var a = xr();
            return a = a === null ? null : {
                parent: ke._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: a
            }, e !== null && Bu(t, null), zr(), qf(t), e !== null && ha(e, t, n, !0), null;
        }
        function $u(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(s(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function tc(e, t, l, n, a) {
            return $l(t), l = qr(e, t, l, n, void 0, a), n = kr(), e !== null && !Ye ? (jr(e, t, a), It(e, t, a)) : (ve && n && Sr(t), t.flags |= 1, Ze(e, t, l, a), t.child);
        }
        function Wf(e, t, l, n, a, r) {
            return $l(t), t.updateQueue = null, l = Jo(t, n, l, a), $o(e), n = kr(), e !== null && !Ye ? (jr(e, t, r), It(e, t, r)) : (ve && n && Sr(t), t.flags |= 1, Ze(e, t, l, r), t.child);
        }
        function If(e, t, l, n, a) {
            if ($l(t), t.stateNode === null) {
                var r = Rn, d = l.contextType;
                typeof d == "object" && d !== null && (r = et(d)), r = new l(n, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ir, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = n, r.state = t.memoizedState, r.refs = {}, Cr(t), d = l.contextType, r.context = typeof d == "object" && d !== null ? et(d) : Rn, r.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && (Wr(t, l, d, n), r.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (d = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), d !== r.state && Ir.enqueueReplaceState(r, r.state, null), Sa(t, n, r, a), ba(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
            } else if (e === null) {
                r = t.stateNode;
                var v = t.memoizedProps, S = Wl(l, v);
                r.props = S;
                var M = r.context, q = l.contextType;
                d = Rn, typeof q == "object" && q !== null && (d = et(q));
                var H = l.getDerivedStateFromProps;
                q = typeof H == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || M !== d) && jf(t, r, n, d), pl = !1;
                var D = t.memoizedState;
                r.state = D, Sa(t, n, r, a), ba(), M = t.memoizedState, v || D !== M || pl ? (typeof H == "function" && (Wr(t, l, H, n), M = t.memoizedState), (S = pl || kf(t, l, S, n, D, M, d)) ? (q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = M), r.props = n, r.state = M, r.context = d, n = S) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
            } else {
                r = t.stateNode, Dr(e, t), d = t.memoizedProps, q = Wl(l, d), r.props = q, H = t.pendingProps, D = r.context, M = l.contextType, S = Rn, typeof M == "object" && M !== null && (S = et(M)), v = l.getDerivedStateFromProps, (M = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (d !== H || D !== S) && jf(t, r, n, S), pl = !1, D = t.memoizedState, r.state = D, Sa(t, n, r, a), ba();
                var B = t.memoizedState;
                d !== H || D !== B || pl || e !== null && e.dependencies !== null && Cu(e.dependencies) ? (typeof v == "function" && (Wr(t, l, v, n), B = t.memoizedState), (q = pl || kf(t, l, q, n, D, B, S) || e !== null && e.dependencies !== null && Cu(e.dependencies)) ? (M || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(n, B, S), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(n, B, S)), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = B), r.props = n, r.state = B, r.context = S, n = q) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), n = !1);
            }
            return r = n, $u(e, t), n = (t.flags & 128) !== 0, r || n ? (r = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && n ? (t.child = zn(t, e.child, null, a), t.child = zn(t, null, l, a)) : Ze(e, t, l, a), t.memoizedState = r.state, e = t.child) : e = It(e, t, a), e;
        }
        function ed(e, t, l, n) {
            return fa(), t.flags |= 256, Ze(e, t, l, n), t.child;
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
                cachePool: Ho()
            };
        }
        function ac(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Nt), e;
        }
        function td(e, t, l) {
            var n = t.pendingProps, a = !1, r = (t.flags & 128) !== 0, d;
            if ((d = r) || (d = e !== null && e.memoizedState === null ? !1 : (je.current & 2) !== 0), d && (a = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (ve) {
                    if (a ? gl(t) : bl(), ve) {
                        var v = De, S;
                        if (S = v) {
                            e: {
                                for(S = v, v = Pt; S.nodeType !== 8;){
                                    if (!v) {
                                        v = null;
                                        break e;
                                    }
                                    if (S = wt(S.nextSibling), S === null) {
                                        v = null;
                                        break e;
                                    }
                                }
                                v = S;
                            }
                            v !== null ? (t.memoizedState = {
                                dehydrated: v,
                                treeContext: Yl !== null ? {
                                    id: Xt,
                                    overflow: Zt
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, S = pt(18, null, null, 0), S.stateNode = v, S.return = t, t.child = S, nt = t, De = null, S = !0) : S = !1;
                        }
                        S || Xl(t);
                    }
                    if (v = t.memoizedState, v !== null && (v = v.dehydrated, v !== null)) return Lc(v) ? t.lanes = 32 : t.lanes = 536870912, null;
                    Wt(t);
                }
                return v = n.children, n = n.fallback, a ? (bl(), a = t.mode, v = Ju({
                    mode: "hidden",
                    children: v
                }, a), n = Kl(n, a, l, null), v.return = t, n.return = t, v.sibling = n, t.child = v, a = t.child, a.memoizedState = nc(l), a.childLanes = ac(e, d, l), t.memoizedState = lc, n) : (gl(t), uc(t, v));
            }
            if (S = e.memoizedState, S !== null && (v = S.dehydrated, v !== null)) {
                if (r) t.flags & 256 ? (gl(t), t.flags &= -257, t = ic(e, t, l)) : t.memoizedState !== null ? (bl(), t.child = e.child, t.flags |= 128, t = null) : (bl(), a = n.fallback, v = t.mode, n = Ju({
                    mode: "visible",
                    children: n.children
                }, v), a = Kl(a, v, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, zn(t, e.child, null, l), n = t.child, n.memoizedState = nc(l), n.childLanes = ac(e, d, l), t.memoizedState = lc, t = a);
                else if (gl(t), Lc(v)) {
                    if (d = v.nextSibling && v.nextSibling.dataset, d) var M = d.dgst;
                    d = M, n = Error(s(419)), n.stack = "", n.digest = d, da({
                        value: n,
                        source: null,
                        stack: null
                    }), t = ic(e, t, l);
                } else if (Ye || ha(e, t, l, !1), d = (l & e.childLanes) !== 0, Ye || d) {
                    if (d = Oe, d !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : Qi(n), n = (n & (d.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== S.retryLane)) throw S.retryLane = n, Tn(e, n), bt(d, e, n), Vf;
                    v.data === "$?" || Rc(), t = ic(e, t, l);
                } else v.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, De = wt(v.nextSibling), nt = t, ve = !0, Vl = null, Pt = !1, e !== null && (Rt[At++] = Xt, Rt[At++] = Zt, Rt[At++] = Yl, Xt = e.id, Zt = e.overflow, Yl = t), t = uc(t, n.children), t.flags |= 4096);
                return t;
            }
            return a ? (bl(), a = n.fallback, v = t.mode, S = e.child, M = S.sibling, n = Vt(S, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = S.subtreeFlags & 65011712, M !== null ? a = Vt(M, a) : (a = Kl(a, v, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, v = e.child.memoizedState, v === null ? v = nc(l) : (S = v.cachePool, S !== null ? (M = ke._currentValue, S = S.parent !== M ? {
                parent: M,
                pool: M
            } : S) : S = Ho(), v = {
                baseLanes: v.baseLanes | l,
                cachePool: S
            }), a.memoizedState = v, a.childLanes = ac(e, d, l), t.memoizedState = lc, n) : (gl(t), l = e.child, e = l.sibling, l = Vt(l, {
                mode: "visible",
                children: n.children
            }), l.return = t, l.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [
                e
            ], t.flags |= 16) : d.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function uc(e, t) {
            return t = Ju({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Ju(e, t) {
            return e = pt(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function ic(e, t, l) {
            return zn(t, e.child, null, l), e = uc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function ld(e, t, l) {
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
        function nd(e, t, l) {
            var n = t.pendingProps, a = n.revealOrder, r = n.tail;
            if (Ze(e, t, n.children, l), n = je.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && ld(e, l, t);
                    else if (e.tag === 19) ld(e, l, t);
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
            switch(G(je, n), a){
                case "forwards":
                    for(l = t.child, a = null; l !== null;)e = l.alternate, e !== null && Vu(e) === null && (a = l), l = l.sibling;
                    l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), rc(t, !1, a, l, r);
                    break;
                case "backwards":
                    for(l = null, a = t.child, t.child = null; a !== null;){
                        if (e = a.alternate, e !== null && Vu(e) === null) {
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
        function It(e, t, l) {
            if (e !== null && (t.dependencies = e.dependencies), Rl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
                if (ha(e, t, l, !1), (l & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(s(153));
            if (t.child !== null) {
                for(e = t.child, l = Vt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = Vt(e, e.pendingProps), l.return = t;
                l.sibling = null;
            }
            return t.child;
        }
        function cc(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Cu(e)));
        }
        function Q0(e, t, l) {
            switch(t.tag){
                case 3:
                    Se(t, t.stateNode.containerInfo), hl(t, ke, e.memoizedState.cache), fa();
                    break;
                case 27:
                case 5:
                    sl(t);
                    break;
                case 4:
                    Se(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    hl(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var n = t.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (gl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? td(e, t, l) : (gl(t), e = It(e, t, l), e !== null ? e.sibling : null);
                    gl(t);
                    break;
                case 19:
                    var a = (e.flags & 128) !== 0;
                    if (n = (l & t.childLanes) !== 0, n || (ha(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                        if (n) return nd(e, t, l);
                        t.flags |= 128;
                    }
                    if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), G(je, je.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Jf(e, t, l);
                case 24:
                    hl(t, ke, e.memoizedState.cache);
            }
            return It(e, t, l);
        }
        function ad(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ye = !0;
            else {
                if (!cc(e, l) && (t.flags & 128) === 0) return Ye = !1, Q0(e, t, l);
                Ye = (e.flags & 131072) !== 0;
            }
            else Ye = !1, ve && (t.flags & 1048576) !== 0 && wo(t, Mu, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var n = t.elementType, a = n._init;
                        if (n = a(n._payload), t.type = n, typeof n == "function") vr(n) ? (e = Wl(n, e), t.tag = 1, t = If(null, t, n, e, l)) : (t.tag = 0, t = tc(null, t, n, e, l));
                        else {
                            if (n != null) {
                                if (a = n.$$typeof, a === X) {
                                    t.tag = 11, t = Xf(null, t, n, e, l);
                                    break e;
                                } else if (a === te) {
                                    t.tag = 14, t = Zf(null, t, n, e, l);
                                    break e;
                                }
                            }
                            throw t = Kt(n) || n, Error(s(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return tc(e, t, t.type, t.pendingProps, l);
                case 1:
                    return n = t.type, a = Wl(n, t.pendingProps), If(e, t, n, a, l);
                case 3:
                    e: {
                        if (Se(t, t.stateNode.containerInfo), e === null) throw Error(s(387));
                        n = t.pendingProps;
                        var r = t.memoizedState;
                        a = r.element, Dr(e, t), Sa(t, n, null, l);
                        var d = t.memoizedState;
                        if (n = d.cache, hl(t, ke, n), n !== r.cache && Ar(t, [
                            ke
                        ], l, !0), ba(), n = d.element, r.isDehydrated) if (r = {
                            element: n,
                            isDehydrated: !1,
                            cache: d.cache
                        }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
                            t = ed(e, t, n, l);
                            break e;
                        } else if (n !== a) {
                            a = _t(Error(s(424)), t), da(a), t = ed(e, t, n, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(De = wt(e.firstChild), nt = t, ve = !0, Vl = null, Pt = !0, l = Pf(t, null, n, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (fa(), n === a) {
                                t = It(e, t, l);
                                break e;
                            }
                            Ze(e, t, n, l);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return $u(e, t), e === null ? (l = ch(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ve || (l = t.type, e = t.pendingProps, n = oi(ne.current).createElement(l), n[Ie] = t, n[ut] = e, Je(n, l, e), Ke(n), t.stateNode = n) : t.memoizedState = ch(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return sl(t), e === null && ve && (n = t.stateNode = uh(t.type, t.pendingProps, ne.current), nt = t, Pt = !0, a = De, xl(t.type) ? (Qc = a, De = wt(n.firstChild)) : De = a), Ze(e, t, t.pendingProps.children, l), $u(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && ve && ((a = n = De) && (n = y1(n, t.type, t.pendingProps, Pt), n !== null ? (t.stateNode = n, nt = t, De = wt(n.firstChild), Pt = !1, a = !0) : a = !1), a || Xl(t)), sl(t), a = t.type, r = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = r.children, kc(a, r) ? n = null : d !== null && kc(a, d) && (t.flags |= 32), t.memoizedState !== null && (a = qr(e, t, z0, null, null, l), Qa._currentValue = a), $u(e, t), Ze(e, t, n, l), t.child;
                case 6:
                    return e === null && ve && ((e = l = De) && (l = v1(l, t.pendingProps, Pt), l !== null ? (t.stateNode = l, nt = t, De = null, e = !0) : e = !1), e || Xl(t)), null;
                case 13:
                    return td(e, t, l);
                case 4:
                    return Se(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = zn(t, null, n, l) : Ze(e, t, n, l), t.child;
                case 11:
                    return Xf(e, t, t.type, t.pendingProps, l);
                case 7:
                    return Ze(e, t, t.pendingProps, l), t.child;
                case 8:
                    return Ze(e, t, t.pendingProps.children, l), t.child;
                case 12:
                    return Ze(e, t, t.pendingProps.children, l), t.child;
                case 10:
                    return n = t.pendingProps, hl(t, t.type, n.value), Ze(e, t, n.children, l), t.child;
                case 9:
                    return a = t.type._context, n = t.pendingProps.children, $l(t), a = et(a), n = n(a), t.flags |= 1, Ze(e, t, n, l), t.child;
                case 14:
                    return Zf(e, t, t.type, t.pendingProps, l);
                case 15:
                    return $f(e, t, t.type, t.pendingProps, l);
                case 19:
                    return nd(e, t, l);
                case 31:
                    return n = t.pendingProps, l = t.mode, n = {
                        mode: n.mode,
                        children: n.children
                    }, e === null ? (l = Ju(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Vt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return Jf(e, t, l);
                case 24:
                    return $l(t), n = et(ke), e === null ? (a = xr(), a === null && (a = Oe, r = Or(), a.pooledCache = r, r.refCount++, r !== null && (a.pooledCacheLanes |= l), a = r), t.memoizedState = {
                        parent: n,
                        cache: a
                    }, Cr(t), hl(t, ke, a)) : ((e.lanes & l) !== 0 && (Dr(e, t), Sa(t, null, null, l), ba()), a = e.memoizedState, r = t.memoizedState, a.parent !== n ? (a = {
                        parent: n,
                        cache: n
                    }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), hl(t, ke, n)) : (n = r.cache, hl(t, ke, n), n !== a.cache && Ar(t, [
                        ke
                    ], l, !0))), Ze(e, t, t.pendingProps.children, l), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(s(156, t.tag));
        }
        function el(e) {
            e.flags |= 4;
        }
        function ud(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !hh(t)) {
                if (t = Ot.current, t !== null && ((me & 4194048) === me ? qt !== null : (me & 62914560) !== me && (me & 536870912) === 0 || t !== qt)) throw va = Mr, Lo;
                e.flags |= 8192;
            }
        }
        function Fu(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Us() : 536870912, e.lanes |= t, kn |= t);
        }
        function Na(e, t) {
            if (!ve) switch(e.tailMode){
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
        function Me(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
            if (t) for(var a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
            else for(a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
            return e.subtreeFlags |= n, e.childLanes = l, t;
        }
        function K0(e, t, l) {
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
                    return Me(t), null;
                case 1:
                    return Me(t), null;
                case 3:
                    return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Jt(ke), Ct(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (oa(t) ? el(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Po())), Me(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (el(t), l !== null ? (Me(t), ud(t, l)) : (Me(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (el(t), Me(t), ud(t, l)) : (Me(t), t.flags &= -16777217) : (e.memoizedProps !== n && el(t), Me(t), t.flags &= -16777217), null;
                case 27:
                    cu(t), l = ne.current;
                    var a = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== n && el(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(s(166));
                            return Me(t), null;
                        }
                        e = F.current, oa(t) ? zo(t) : (e = uh(a, n, l), t.stateNode = e, el(t));
                    }
                    return Me(t), null;
                case 5:
                    if (cu(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && el(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(s(166));
                            return Me(t), null;
                        }
                        if (e = F.current, oa(t)) zo(t);
                        else {
                            switch(a = oi(ne.current), e){
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
                            e && el(t);
                        }
                    }
                    return Me(t), t.flags &= -16777217, null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== n && el(t);
                    else {
                        if (typeof n != "string" && t.stateNode === null) throw Error(s(166));
                        if (e = ne.current, oa(t)) {
                            if (e = t.stateNode, l = t.memoizedProps, n = null, a = nt, a !== null) switch(a.tag){
                                case 27:
                                case 5:
                                    n = a.memoizedProps;
                            }
                            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Wd(e.nodeValue, l)), e || Xl(t);
                        } else e = oi(e).createTextNode(n), e[Ie] = t, t.stateNode = e;
                    }
                    return Me(t), null;
                case 13:
                    if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (a = oa(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!a) throw Error(s(318));
                                if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
                                a[Ie] = t;
                            } else fa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Me(t), a = !1;
                        } else a = Po(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                        if (!a) return t.flags & 256 ? (Wt(t), t) : (Wt(t), null);
                    }
                    if (Wt(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                        n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                        var r = null;
                        n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== a && (n.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), Fu(t, t.updateQueue), Me(t), null;
                case 4:
                    return Ct(), e === null && wc(t.stateNode.containerInfo), Me(t), null;
                case 10:
                    return Jt(t.type), Me(t), null;
                case 19:
                    if (Z(je), a = t.memoizedState, a === null) return Me(t), null;
                    if (n = (t.flags & 128) !== 0, r = a.rendering, r === null) if (n) Na(a, !1);
                    else {
                        if (Be !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (r = Vu(e), r !== null) {
                                for(t.flags |= 128, Na(a, !1), e = r.updateQueue, t.updateQueue = e, Fu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)Bo(l, e), l = l.sibling;
                                return G(je, je.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && Ut() > ei && (t.flags |= 128, n = !0, Na(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!n) if (e = Vu(r), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Fu(t, e), Na(a, !0), a.tail === null && a.tailMode === "hidden" && !r.alternate && !ve) return Me(t), null;
                        } else 2 * Ut() - a.renderingStartTime > ei && l !== 536870912 && (t.flags |= 128, n = !0, Na(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (r.sibling = t.child, t.child = r) : (e = a.last, e !== null ? e.sibling = r : t.child = r, a.last = r);
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ut(), t.sibling = null, e = je.current, G(je, n ? e & 1 | 2 : e & 1), t) : (Me(t), null);
                case 22:
                case 23:
                    return Wt(t), Ur(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), l = t.updateQueue, l !== null && Fu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && Z(Jl), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Jt(ke), Me(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(s(156, t.tag));
        }
        function Y0(e, t) {
            switch(Er(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Jt(ke), Ct(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return cu(t), null;
                case 13:
                    if (Wt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(s(340));
                        fa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return Z(je), null;
                case 4:
                    return Ct(), null;
                case 10:
                    return Jt(t.type), null;
                case 22:
                case 23:
                    return Wt(t), Ur(), e !== null && Z(Jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Jt(ke), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function id(e, t) {
            switch(Er(t), t.tag){
                case 3:
                    Jt(ke), Ct();
                    break;
                case 26:
                case 27:
                case 5:
                    cu(t);
                    break;
                case 4:
                    Ct();
                    break;
                case 13:
                    Wt(t);
                    break;
                case 19:
                    Z(je);
                    break;
                case 10:
                    Jt(t.type);
                    break;
                case 22:
                case 23:
                    Wt(t), Ur(), e !== null && Z(Jl);
                    break;
                case 24:
                    Jt(ke);
            }
        }
        function xa(e, t) {
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
            } catch (v) {
                Ae(t, t.return, v);
            }
        }
        function Sl(e, t, l) {
            try {
                var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
                if (a !== null) {
                    var r = a.next;
                    n = r;
                    do {
                        if ((n.tag & e) === e) {
                            var d = n.inst, v = d.destroy;
                            if (v !== void 0) {
                                d.destroy = void 0, a = t;
                                var S = l, M = v;
                                try {
                                    M();
                                } catch (q) {
                                    Ae(a, S, q);
                                }
                            }
                        }
                        n = n.next;
                    }while (n !== r);
                }
            } catch (q) {
                Ae(t, t.return, q);
            }
        }
        function rd(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    Xo(t, l);
                } catch (n) {
                    Ae(e, e.return, n);
                }
            }
        }
        function cd(e, t, l) {
            l.props = Wl(e.type, e.memoizedProps), l.state = e.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (n) {
                Ae(e, t, n);
            }
        }
        function Ma(e, t) {
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
                Ae(e, t, a);
            }
        }
        function kt(e, t) {
            var l = e.ref, n = e.refCleanup;
            if (l !== null) if (typeof n == "function") try {
                n();
            } catch (a) {
                Ae(e, t, a);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof l == "function") try {
                l(null);
            } catch (a) {
                Ae(e, t, a);
            }
            else l.current = null;
        }
        function sd(e) {
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
                Ae(e, e.return, a);
            }
        }
        function sc(e, t, l) {
            try {
                var n = e.stateNode;
                f1(n, e.type, l, t), n[ut] = t;
            } catch (a) {
                Ae(e, e.return, a);
            }
        }
        function od(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && xl(e.type) || e.tag === 4;
        }
        function oc(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || od(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && xl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function fc(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = si));
            else if (n !== 4 && (n === 27 && xl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(fc(e, t, l), e = e.sibling; e !== null;)fc(e, t, l), e = e.sibling;
        }
        function Wu(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (n !== 4 && (n === 27 && xl(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(Wu(e, t, l), e = e.sibling; e !== null;)Wu(e, t, l), e = e.sibling;
        }
        function fd(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var n = e.type, a = t.attributes; a.length;)t.removeAttributeNode(a[0]);
                Je(t, n, l), t[Ie] = e, t[ut] = l;
            } catch (r) {
                Ae(e, e.return, r);
            }
        }
        var tl = !1, ze = !1, dc = !1, dd = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
        function G0(e, t) {
            if (e = e.containerInfo, Pc = yi, e = _o(e), or(e)) {
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
                        var d = 0, v = -1, S = -1, M = 0, q = 0, H = e, D = null;
                        t: for(;;){
                            for(var B; H !== l || a !== 0 && H.nodeType !== 3 || (v = d + a), H !== r || n !== 0 && H.nodeType !== 3 || (S = d + n), H.nodeType === 3 && (d += H.nodeValue.length), (B = H.firstChild) !== null;)D = H, H = B;
                            for(;;){
                                if (H === e) break t;
                                if (D === l && ++M === a && (v = d), D === r && ++q === n && (S = d), (B = H.nextSibling) !== null) break;
                                H = D, D = H.parentNode;
                            }
                            H = B;
                        }
                        l = v === -1 || S === -1 ? null : {
                            start: v,
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
            }, yi = !1, Ge = t; Ge !== null;)if (t = Ge, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ge = e;
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
                                var le = Wl(l.type, a, l.elementType === l.type);
                                e = n.getSnapshotBeforeUpdate(le, r), n.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (I) {
                                Ae(l, l.return, I);
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
        function hd(e, t, l) {
            var n = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    El(e, l), n & 4 && xa(5, l);
                    break;
                case 1:
                    if (El(e, l), n & 4) if (e = l.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (d) {
                        Ae(l, l.return, d);
                    }
                    else {
                        var a = Wl(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (d) {
                            Ae(l, l.return, d);
                        }
                    }
                    n & 64 && rd(l), n & 512 && Ma(l, l.return);
                    break;
                case 3:
                    if (El(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
                        if (t = null, l.child !== null) switch(l.child.tag){
                            case 27:
                            case 5:
                                t = l.child.stateNode;
                                break;
                            case 1:
                                t = l.child.stateNode;
                        }
                        try {
                            Xo(e, t);
                        } catch (d) {
                            Ae(l, l.return, d);
                        }
                    }
                    break;
                case 27:
                    t === null && n & 4 && fd(l);
                case 26:
                case 5:
                    El(e, l), t === null && n & 4 && sd(l), n & 512 && Ma(l, l.return);
                    break;
                case 12:
                    El(e, l);
                    break;
                case 13:
                    El(e, l), n & 4 && yd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = e1.bind(null, l), g1(e, l))));
                    break;
                case 22:
                    if (n = l.memoizedState !== null || tl, !n) {
                        t = t !== null && t.memoizedState !== null || ze, a = tl;
                        var r = ze;
                        tl = n, (ze = t) && !r ? _l(e, l, (l.subtreeFlags & 8772) !== 0) : El(e, l), tl = a, ze = r;
                    }
                    break;
                case 30:
                    break;
                default:
                    El(e, l);
            }
        }
        function pd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, pd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Gi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Ne = null, ct = !1;
        function ll(e, t, l) {
            for(l = l.child; l !== null;)md(e, t, l), l = l.sibling;
        }
        function md(e, t, l) {
            if (ft && typeof ft.onCommitFiberUnmount == "function") try {
                ft.onCommitFiberUnmount(Jn, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    ze || kt(l, t), ll(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    ze || kt(l, t);
                    var n = Ne, a = ct;
                    xl(l.type) && (Ne = l.stateNode, ct = !1), ll(e, t, l), ka(l.stateNode), Ne = n, ct = a;
                    break;
                case 5:
                    ze || kt(l, t);
                case 6:
                    if (n = Ne, a = ct, Ne = null, ll(e, t, l), Ne = n, ct = a, Ne !== null) if (ct) try {
                        (Ne.nodeType === 9 ? Ne.body : Ne.nodeName === "HTML" ? Ne.ownerDocument.body : Ne).removeChild(l.stateNode);
                    } catch (r) {
                        Ae(l, t, r);
                    }
                    else try {
                        Ne.removeChild(l.stateNode);
                    } catch (r) {
                        Ae(l, t, r);
                    }
                    break;
                case 18:
                    Ne !== null && (ct ? (e = Ne, nh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Va(e)) : nh(Ne, l.stateNode));
                    break;
                case 4:
                    n = Ne, a = ct, Ne = l.stateNode.containerInfo, ct = !0, ll(e, t, l), Ne = n, ct = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    ze || Sl(2, l, t), ze || Sl(4, l, t), ll(e, t, l);
                    break;
                case 1:
                    ze || (kt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && cd(l, t, n)), ll(e, t, l);
                    break;
                case 21:
                    ll(e, t, l);
                    break;
                case 22:
                    ze = (n = ze) || l.memoizedState !== null, ll(e, t, l), ze = n;
                    break;
                default:
                    ll(e, t, l);
            }
        }
        function yd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Va(e);
            } catch (l) {
                Ae(t, t.return, l);
            }
        }
        function V0(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new dd), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new dd), t;
                default:
                    throw Error(s(435, e.tag));
            }
        }
        function hc(e, t) {
            var l = V0(e);
            t.forEach(function(n) {
                var a = t1.bind(null, e, n);
                l.has(n) || (l.add(n), n.then(a, a));
            });
        }
        function mt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var n = 0; n < l.length; n++){
                var a = l[n], r = e, d = t, v = d;
                e: for(; v !== null;){
                    switch(v.tag){
                        case 27:
                            if (xl(v.type)) {
                                Ne = v.stateNode, ct = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Ne = v.stateNode, ct = !1;
                            break e;
                        case 3:
                        case 4:
                            Ne = v.stateNode.containerInfo, ct = !0;
                            break e;
                    }
                    v = v.return;
                }
                if (Ne === null) throw Error(s(160));
                md(r, d, a), Ne = null, ct = !1, r = a.alternate, r !== null && (r.return = null), a.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)vd(t, e), t = t.sibling;
        }
        var Bt = null;
        function vd(e, t) {
            var l = e.alternate, n = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    mt(t, e), yt(e), n & 4 && (Sl(3, e, e.return), xa(3, e), Sl(5, e, e.return));
                    break;
                case 1:
                    mt(t, e), yt(e), n & 512 && (ze || l === null || kt(l, l.return)), n & 64 && tl && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                    break;
                case 26:
                    var a = Bt;
                    if (mt(t, e), yt(e), n & 512 && (ze || l === null || kt(l, l.return)), n & 4) {
                        var r = l !== null ? l.memoizedState : null;
                        if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
                            e: {
                                n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                                t: switch(n){
                                    case "title":
                                        r = a.getElementsByTagName("title")[0], (!r || r[In] || r[Ie] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(n), a.head.insertBefore(r, a.querySelector("head > title"))), Je(r, n, l), r[Ie] = e, Ke(r), n = r;
                                        break e;
                                    case "link":
                                        var d = fh("link", "href", a).get(n + (l.href || ""));
                                        if (d) {
                                            for(var v = 0; v < d.length; v++)if (r = d[v], r.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && r.getAttribute("rel") === (l.rel == null ? null : l.rel) && r.getAttribute("title") === (l.title == null ? null : l.title) && r.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                d.splice(v, 1);
                                                break t;
                                            }
                                        }
                                        r = a.createElement(n), Je(r, n, l), a.head.appendChild(r);
                                        break;
                                    case "meta":
                                        if (d = fh("meta", "content", a).get(n + (l.content || ""))) {
                                            for(v = 0; v < d.length; v++)if (r = d[v], r.getAttribute("content") === (l.content == null ? null : "" + l.content) && r.getAttribute("name") === (l.name == null ? null : l.name) && r.getAttribute("property") === (l.property == null ? null : l.property) && r.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && r.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                d.splice(v, 1);
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
                        } else dh(a, e.type, e.stateNode);
                        else e.stateNode = oh(a, n, e.memoizedProps);
                        else r !== n ? (r === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : r.count--, n === null ? dh(a, e.type, e.stateNode) : oh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && sc(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    mt(t, e), yt(e), n & 512 && (ze || l === null || kt(l, l.return)), l !== null && n & 4 && sc(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (mt(t, e), yt(e), n & 512 && (ze || l === null || kt(l, l.return)), e.flags & 32) {
                        a = e.stateNode;
                        try {
                            yn(a, "");
                        } catch (B) {
                            Ae(e, e.return, B);
                        }
                    }
                    n & 4 && e.stateNode != null && (a = e.memoizedProps, sc(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (dc = !0);
                    break;
                case 6:
                    if (mt(t, e), yt(e), n & 4) {
                        if (e.stateNode === null) throw Error(s(162));
                        n = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = n;
                        } catch (B) {
                            Ae(e, e.return, B);
                        }
                    }
                    break;
                case 3:
                    if (hi = null, a = Bt, Bt = fi(t.containerInfo), mt(t, e), Bt = a, yt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Va(t.containerInfo);
                    } catch (B) {
                        Ae(e, e.return, B);
                    }
                    dc && (dc = !1, gd(e));
                    break;
                case 4:
                    n = Bt, Bt = fi(e.stateNode.containerInfo), mt(t, e), yt(e), Bt = n;
                    break;
                case 12:
                    mt(t, e), yt(e);
                    break;
                case 13:
                    mt(t, e), yt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (bc = Ut()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, hc(e, n)));
                    break;
                case 22:
                    a = e.memoizedState !== null;
                    var S = l !== null && l.memoizedState !== null, M = tl, q = ze;
                    if (tl = M || a, ze = q || S, mt(t, e), ze = q, tl = M, yt(e), n & 8192) e: for(t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || S || tl || ze || Il(e)), l = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                S = l = t;
                                try {
                                    if (r = S.stateNode, a) d = r.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                                    else {
                                        v = S.stateNode;
                                        var H = S.memoizedProps.style, D = H != null && H.hasOwnProperty("display") ? H.display : null;
                                        v.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                                    }
                                } catch (B) {
                                    Ae(S, S.return, B);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                S = t;
                                try {
                                    S.stateNode.nodeValue = a ? "" : S.memoizedProps;
                                } catch (B) {
                                    Ae(S, S.return, B);
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
                    mt(t, e), yt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, hc(e, n)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    mt(t, e), yt(e);
            }
        }
        function yt(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for(var l, n = e.return; n !== null;){
                        if (od(n)) {
                            l = n;
                            break;
                        }
                        n = n.return;
                    }
                    if (l == null) throw Error(s(160));
                    switch(l.tag){
                        case 27:
                            var a = l.stateNode, r = oc(e);
                            Wu(e, r, a);
                            break;
                        case 5:
                            var d = l.stateNode;
                            l.flags & 32 && (yn(d, ""), l.flags &= -33);
                            var v = oc(e);
                            Wu(e, v, d);
                            break;
                        case 3:
                        case 4:
                            var S = l.stateNode.containerInfo, M = oc(e);
                            fc(e, M, S);
                            break;
                        default:
                            throw Error(s(161));
                    }
                } catch (q) {
                    Ae(e, e.return, q);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function gd(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                gd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function El(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)hd(e, t.alternate, t), t = t.sibling;
        }
        function Il(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Sl(4, t, t.return), Il(t);
                        break;
                    case 1:
                        kt(t, t.return);
                        var l = t.stateNode;
                        typeof l.componentWillUnmount == "function" && cd(t, t.return, l), Il(t);
                        break;
                    case 27:
                        ka(t.stateNode);
                    case 26:
                    case 5:
                        kt(t, t.return), Il(t);
                        break;
                    case 22:
                        t.memoizedState === null && Il(t);
                        break;
                    case 30:
                        Il(t);
                        break;
                    default:
                        Il(t);
                }
                e = e.sibling;
            }
        }
        function _l(e, t, l) {
            for(l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var n = t.alternate, a = e, r = t, d = r.flags;
                switch(r.tag){
                    case 0:
                    case 11:
                    case 15:
                        _l(a, r, l), xa(4, r);
                        break;
                    case 1:
                        if (_l(a, r, l), n = r, a = n.stateNode, typeof a.componentDidMount == "function") try {
                            a.componentDidMount();
                        } catch (M) {
                            Ae(n, n.return, M);
                        }
                        if (n = r, a = n.updateQueue, a !== null) {
                            var v = n.stateNode;
                            try {
                                var S = a.shared.hiddenCallbacks;
                                if (S !== null) for(a.shared.hiddenCallbacks = null, a = 0; a < S.length; a++)Vo(S[a], v);
                            } catch (M) {
                                Ae(n, n.return, M);
                            }
                        }
                        l && d & 64 && rd(r), Ma(r, r.return);
                        break;
                    case 27:
                        fd(r);
                    case 26:
                    case 5:
                        _l(a, r, l), l && n === null && d & 4 && sd(r), Ma(r, r.return);
                        break;
                    case 12:
                        _l(a, r, l);
                        break;
                    case 13:
                        _l(a, r, l), l && d & 4 && yd(a, r);
                        break;
                    case 22:
                        r.memoizedState === null && _l(a, r, l), Ma(r, r.return);
                        break;
                    case 30:
                        break;
                    default:
                        _l(a, r, l);
                }
                t = t.sibling;
            }
        }
        function pc(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && pa(l));
        }
        function mc(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e));
        }
        function jt(e, t, l, n) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)bd(e, t, l, n), t = t.sibling;
        }
        function bd(e, t, l, n) {
            var a = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    jt(e, t, l, n), a & 2048 && xa(9, t);
                    break;
                case 1:
                    jt(e, t, l, n);
                    break;
                case 3:
                    jt(e, t, l, n), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e)));
                    break;
                case 12:
                    if (a & 2048) {
                        jt(e, t, l, n), e = t.stateNode;
                        try {
                            var r = t.memoizedProps, d = r.id, v = r.onPostCommit;
                            typeof v == "function" && v(d, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (S) {
                            Ae(t, t.return, S);
                        }
                    } else jt(e, t, l, n);
                    break;
                case 13:
                    jt(e, t, l, n);
                    break;
                case 23:
                    break;
                case 22:
                    r = t.stateNode, d = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? jt(e, t, l, n) : Ca(e, t) : r._visibility & 2 ? jt(e, t, l, n) : (r._visibility |= 2, Un(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && pc(d, t);
                    break;
                case 24:
                    jt(e, t, l, n), a & 2048 && mc(t.alternate, t);
                    break;
                default:
                    jt(e, t, l, n);
            }
        }
        function Un(e, t, l, n, a) {
            for(a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var r = e, d = t, v = l, S = n, M = d.flags;
                switch(d.tag){
                    case 0:
                    case 11:
                    case 15:
                        Un(r, d, v, S, a), xa(8, d);
                        break;
                    case 23:
                        break;
                    case 22:
                        var q = d.stateNode;
                        d.memoizedState !== null ? q._visibility & 2 ? Un(r, d, v, S, a) : Ca(r, d) : (q._visibility |= 2, Un(r, d, v, S, a)), a && M & 2048 && pc(d.alternate, d);
                        break;
                    case 24:
                        Un(r, d, v, S, a), a && M & 2048 && mc(d.alternate, d);
                        break;
                    default:
                        Un(r, d, v, S, a);
                }
                t = t.sibling;
            }
        }
        function Ca(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var l = e, n = t, a = n.flags;
                switch(n.tag){
                    case 22:
                        Ca(l, n), a & 2048 && pc(n.alternate, n);
                        break;
                    case 24:
                        Ca(l, n), a & 2048 && mc(n.alternate, n);
                        break;
                    default:
                        Ca(l, n);
                }
                t = t.sibling;
            }
        }
        var Da = 8192;
        function Pn(e) {
            if (e.subtreeFlags & Da) for(e = e.child; e !== null;)Sd(e), e = e.sibling;
        }
        function Sd(e) {
            switch(e.tag){
                case 26:
                    Pn(e), e.flags & Da && e.memoizedState !== null && D1(Bt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    Pn(e);
                    break;
                case 3:
                case 4:
                    var t = Bt;
                    Bt = fi(e.stateNode.containerInfo), Pn(e), Bt = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Da, Da = 16777216, Pn(e), Da = t) : Pn(e));
                    break;
                default:
                    Pn(e);
            }
        }
        function Ed(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function Ba(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ge = n, Td(n, e);
                }
                Ed(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)_d(e), e = e.sibling;
        }
        function _d(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    Ba(e), e.flags & 2048 && Sl(9, e, e.return);
                    break;
                case 3:
                    Ba(e);
                    break;
                case 12:
                    Ba(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Iu(e)) : Ba(e);
                    break;
                default:
                    Ba(e);
            }
        }
        function Iu(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ge = n, Td(n, e);
                }
                Ed(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        Sl(8, t, t.return), Iu(t);
                        break;
                    case 22:
                        l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Iu(t));
                        break;
                    default:
                        Iu(t);
                }
                e = e.sibling;
            }
        }
        function Td(e, t) {
            for(; Ge !== null;){
                var l = Ge;
                switch(l.tag){
                    case 0:
                    case 11:
                    case 15:
                        Sl(8, l, t);
                        break;
                    case 23:
                    case 22:
                        if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                            var n = l.memoizedState.cachePool.pool;
                            n != null && n.refCount++;
                        }
                        break;
                    case 24:
                        pa(l.memoizedState.cache);
                }
                if (n = l.child, n !== null) n.return = l, Ge = n;
                else e: for(l = e; Ge !== null;){
                    n = Ge;
                    var a = n.sibling, r = n.return;
                    if (pd(n), n === l) {
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
        var X0 = {
            getCacheForType: function(e) {
                var t = et(ke), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, Z0 = typeof WeakMap == "function" ? WeakMap : Map, ge = 0, Oe = null, de = null, me = 0, be = 0, vt = null, Tl = !1, qn = !1, yc = !1, nl = 0, Be = 0, Rl = 0, en = 0, vc = 0, Nt = 0, kn = 0, wa = null, st = null, gc = !1, bc = 0, ei = 1 / 0, ti = null, Al = null, $e = 0, Ol = null, jn = null, Hn = 0, Sc = 0, Ec = null, Rd = null, za = 0, _c = null;
        function gt() {
            if ((ge & 2) !== 0 && me !== 0) return me & -me;
            if (P.T !== null) {
                var e = Nn;
                return e !== 0 ? e : Mc();
            }
            return ks();
        }
        function Ad() {
            Nt === 0 && (Nt = (me & 536870912) === 0 || ve ? zs() : 536870912);
            var e = Ot.current;
            return e !== null && (e.flags |= 32), Nt;
        }
        function bt(e, t, l) {
            (e === Oe && (be === 2 || be === 9) || e.cancelPendingCommit !== null) && (Ln(e, 0), Nl(e, me, Nt, !1)), Wn(e, l), ((ge & 2) === 0 || e !== Oe) && (e === Oe && ((ge & 2) === 0 && (en |= l), Be === 4 && Nl(e, me, Nt, !1)), Ht(e));
        }
        function Od(e, t, l) {
            if ((ge & 6) !== 0) throw Error(s(327));
            var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Fn(e, t), a = n ? F0(e, t) : Ac(e, t, !0), r = n;
            do {
                if (a === 0) {
                    qn && !n && Nl(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, r && !$0(l)) {
                        a = Ac(e, t, !1), r = !1;
                        continue;
                    }
                    if (a === 2) {
                        if (r = t, e.errorRecoveryDisabledLanes & r) var d = 0;
                        else d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
                        if (d !== 0) {
                            t = d;
                            e: {
                                var v = e;
                                a = wa;
                                var S = v.current.memoizedState.isDehydrated;
                                if (S && (Ln(v, d).flags |= 256), d = Ac(v, d, !1), d !== 2) {
                                    if (yc && !S) {
                                        v.errorRecoveryDisabledLanes |= r, en |= r, a = 4;
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
                        Ln(e, 0), Nl(e, t, 0, !0);
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
                                Nl(n, t, Nt, !Tl);
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
                            if (Nl(n, t, Nt, !Tl), du(n, 0, !0) !== 0) break e;
                            n.timeoutHandle = th(Nd.bind(null, n, l, st, ti, gc, t, Nt, en, kn, Tl, r, 2, -0, 0), a);
                            break e;
                        }
                        Nd(n, l, st, ti, gc, t, Nt, en, kn, Tl, r, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            Ht(e);
        }
        function Nd(e, t, l, n, a, r, d, v, S, M, q, H, D, B) {
            if (e.timeoutHandle = -1, H = t.subtreeFlags, (H & 8192 || (H & 16785408) === 16785408) && (La = {
                stylesheets: null,
                count: 0,
                unsuspend: C1
            }, Sd(t), H = B1(), H !== null)) {
                e.cancelPendingCommit = H(zd.bind(null, e, t, r, l, n, a, d, v, S, q, 1, D, B)), Nl(e, r, d, !M);
                return;
            }
            zd(e, t, r, l, n, a, d, v, S);
        }
        function $0(e) {
            for(var t = e;;){
                var l = t.tag;
                if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for(var n = 0; n < l.length; n++){
                    var a = l[n], r = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!ht(r(), a)) return !1;
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
        function Nl(e, t, l, n) {
            t &= ~vc, t &= ~en, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
            for(var a = t; 0 < a;){
                var r = 31 - dt(a), d = 1 << r;
                n[r] = -1, a &= ~d;
            }
            l !== 0 && Ps(e, l, t);
        }
        function li() {
            return (ge & 6) === 0 ? (Ua(0), !1) : !0;
        }
        function Tc() {
            if (de !== null) {
                if (be === 0) var e = de.return;
                else e = de, $t = Zl = null, Hr(e), wn = null, Aa = 0, e = de;
                for(; e !== null;)id(e.alternate, e), e = e.return;
                de = null;
            }
        }
        function Ln(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, h1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Tc(), Oe = e, de = l = Vt(e.current, null), me = t, be = 0, vt = null, Tl = !1, qn = Fn(e, t), yc = !1, kn = Nt = vc = en = Rl = Be = 0, st = wa = null, gc = !1, (t & 8) !== 0 && (t |= t & 32);
            var n = e.entangledLanes;
            if (n !== 0) for(e = e.entanglements, n &= t; 0 < n;){
                var a = 31 - dt(n), r = 1 << a;
                t |= e[a], n &= ~r;
            }
            return nl = t, Ru(), l;
        }
        function xd(e, t) {
            ce = null, P.H = Ku, t === ya || t === wu ? (t = Yo(), be = 3) : t === Lo ? (t = Yo(), be = 4) : be = t === Vf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, vt = t, de === null && (Be = 1, Zu(e, _t(t, e.current)));
        }
        function Md() {
            var e = P.H;
            return P.H = Ku, e === null ? Ku : e;
        }
        function Cd() {
            var e = P.A;
            return P.A = X0, e;
        }
        function Rc() {
            Be = 4, Tl || (me & 4194048) !== me && Ot.current !== null || (qn = !0), (Rl & 134217727) === 0 && (en & 134217727) === 0 || Oe === null || Nl(Oe, me, Nt, !1);
        }
        function Ac(e, t, l) {
            var n = ge;
            ge |= 2;
            var a = Md(), r = Cd();
            (Oe !== e || me !== t) && (ti = null, Ln(e, t)), t = !1;
            var d = Be;
            e: do try {
                if (be !== 0 && de !== null) {
                    var v = de, S = vt;
                    switch(be){
                        case 8:
                            Tc(), d = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ot.current === null && (t = !0);
                            var M = be;
                            if (be = 0, vt = null, Qn(e, v, S, M), l && qn) {
                                d = 0;
                                break e;
                            }
                            break;
                        default:
                            M = be, be = 0, vt = null, Qn(e, v, S, M);
                    }
                }
                J0(), d = Be;
                break;
            } catch (q) {
                xd(e, q);
            }
            while (!0);
            return t && e.shellSuspendCounter++, $t = Zl = null, ge = n, P.H = a, P.A = r, de === null && (Oe = null, me = 0, Ru()), d;
        }
        function J0() {
            for(; de !== null;)Dd(de);
        }
        function F0(e, t) {
            var l = ge;
            ge |= 2;
            var n = Md(), a = Cd();
            Oe !== e || me !== t ? (ti = null, ei = Ut() + 500, Ln(e, t)) : qn = Fn(e, t);
            e: do try {
                if (be !== 0 && de !== null) {
                    t = de;
                    var r = vt;
                    t: switch(be){
                        case 1:
                            be = 0, vt = null, Qn(e, t, r, 1);
                            break;
                        case 2:
                        case 9:
                            if (Qo(r)) {
                                be = 0, vt = null, Bd(t);
                                break;
                            }
                            t = function() {
                                be !== 2 && be !== 9 || Oe !== e || (be = 7), Ht(e);
                            }, r.then(t, t);
                            break e;
                        case 3:
                            be = 7;
                            break e;
                        case 4:
                            be = 5;
                            break e;
                        case 7:
                            Qo(r) ? (be = 0, vt = null, Bd(t)) : (be = 0, vt = null, Qn(e, t, r, 7));
                            break;
                        case 5:
                            var d = null;
                            switch(de.tag){
                                case 26:
                                    d = de.memoizedState;
                                case 5:
                                case 27:
                                    var v = de;
                                    if (!d || hh(d)) {
                                        be = 0, vt = null;
                                        var S = v.sibling;
                                        if (S !== null) de = S;
                                        else {
                                            var M = v.return;
                                            M !== null ? (de = M, ni(M)) : de = null;
                                        }
                                        break t;
                                    }
                            }
                            be = 0, vt = null, Qn(e, t, r, 5);
                            break;
                        case 6:
                            be = 0, vt = null, Qn(e, t, r, 6);
                            break;
                        case 8:
                            Tc(), Be = 6;
                            break e;
                        default:
                            throw Error(s(462));
                    }
                }
                W0();
                break;
            } catch (q) {
                xd(e, q);
            }
            while (!0);
            return $t = Zl = null, P.H = n, P.A = a, ge = l, de !== null ? 0 : (Oe = null, me = 0, Ru(), Be);
        }
        function W0() {
            for(; de !== null && !Sm();)Dd(de);
        }
        function Dd(e) {
            var t = ad(e.alternate, e, nl);
            e.memoizedProps = e.pendingProps, t === null ? ni(e) : de = t;
        }
        function Bd(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Wf(l, t, t.pendingProps, t.type, void 0, me);
                    break;
                case 11:
                    t = Wf(l, t, t.pendingProps, t.type.render, t.ref, me);
                    break;
                case 5:
                    Hr(t);
                default:
                    id(l, t), t = de = Bo(t, nl), t = ad(l, t, nl);
            }
            e.memoizedProps = e.pendingProps, t === null ? ni(e) : de = t;
        }
        function Qn(e, t, l, n) {
            $t = Zl = null, Hr(t), wn = null, Aa = 0;
            var a = t.return;
            try {
                if (L0(e, a, t, l, me)) {
                    Be = 1, Zu(e, _t(l, e.current)), de = null;
                    return;
                }
            } catch (r) {
                if (a !== null) throw de = a, r;
                Be = 1, Zu(e, _t(l, e.current)), de = null;
                return;
            }
            t.flags & 32768 ? (ve || n === 1 ? e = !0 : qn || (me & 536870912) !== 0 ? e = !1 : (Tl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ot.current, n !== null && n.tag === 13 && (n.flags |= 16384))), wd(t, e)) : ni(t);
        }
        function ni(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    wd(t, Tl);
                    return;
                }
                e = t.return;
                var l = K0(t.alternate, t, nl);
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
            Be === 0 && (Be = 5);
        }
        function wd(e, t) {
            do {
                var l = Y0(e.alternate, e);
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
            Be = 6, de = null;
        }
        function zd(e, t, l, n, a, r, d, v, S) {
            e.cancelPendingCommit = null;
            do ai();
            while ($e !== 0);
            if ((ge & 6) !== 0) throw Error(s(327));
            if (t !== null) {
                if (t === e.current) throw Error(s(177));
                if (r = t.lanes | t.childLanes, r |= mr, Cm(e, l, r, d, v, S), e === Oe && (de = Oe = null, me = 0), jn = t, Ol = e, Hn = l, Sc = r, Ec = a, Rd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, l1(su, function() {
                    return jd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                    n = P.T, P.T = null, a = K.p, K.p = 2, d = ge, ge |= 4;
                    try {
                        G0(e, t, l);
                    } finally{
                        ge = d, K.p = a, P.T = n;
                    }
                }
                $e = 1, Ud(), Pd(), qd();
            }
        }
        function Ud() {
            if ($e === 1) {
                $e = 0;
                var e = Ol, t = jn, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = P.T, P.T = null;
                    var n = K.p;
                    K.p = 2;
                    var a = ge;
                    ge |= 4;
                    try {
                        vd(t, e);
                        var r = qc, d = _o(e.containerInfo), v = r.focusedElem, S = r.selectionRange;
                        if (d !== v && v && v.ownerDocument && Eo(v.ownerDocument.documentElement, v)) {
                            if (S !== null && or(v)) {
                                var M = S.start, q = S.end;
                                if (q === void 0 && (q = M), "selectionStart" in v) v.selectionStart = M, v.selectionEnd = Math.min(q, v.value.length);
                                else {
                                    var H = v.ownerDocument || document, D = H && H.defaultView || window;
                                    if (D.getSelection) {
                                        var B = D.getSelection(), le = v.textContent.length, I = Math.min(S.start, le), Te = S.end === void 0 ? I : Math.min(S.end, le);
                                        !B.extend && I > Te && (d = Te, Te = I, I = d);
                                        var O = So(v, I), T = So(v, Te);
                                        if (O && T && (B.rangeCount !== 1 || B.anchorNode !== O.node || B.anchorOffset !== O.offset || B.focusNode !== T.node || B.focusOffset !== T.offset)) {
                                            var x = H.createRange();
                                            x.setStart(O.node, O.offset), B.removeAllRanges(), I > Te ? (B.addRange(x), B.extend(T.node, T.offset)) : (x.setEnd(T.node, T.offset), B.addRange(x));
                                        }
                                    }
                                }
                            }
                            for(H = [], B = v; B = B.parentNode;)B.nodeType === 1 && H.push({
                                element: B,
                                left: B.scrollLeft,
                                top: B.scrollTop
                            });
                            for(typeof v.focus == "function" && v.focus(), v = 0; v < H.length; v++){
                                var j = H[v];
                                j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
                            }
                        }
                        yi = !!Pc, qc = Pc = null;
                    } finally{
                        ge = a, K.p = n, P.T = l;
                    }
                }
                e.current = t, $e = 2;
            }
        }
        function Pd() {
            if ($e === 2) {
                $e = 0;
                var e = Ol, t = jn, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = P.T, P.T = null;
                    var n = K.p;
                    K.p = 2;
                    var a = ge;
                    ge |= 4;
                    try {
                        hd(e, t.alternate, t);
                    } finally{
                        ge = a, K.p = n, P.T = l;
                    }
                }
                $e = 3;
            }
        }
        function qd() {
            if ($e === 4 || $e === 3) {
                $e = 0, Em();
                var e = Ol, t = jn, l = Hn, n = Rd;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? $e = 5 : ($e = 0, jn = Ol = null, kd(e, e.pendingLanes));
                var a = e.pendingLanes;
                if (a === 0 && (Al = null), Ki(l), t = t.stateNode, ft && typeof ft.onCommitFiberRoot == "function") try {
                    ft.onCommitFiberRoot(Jn, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (n !== null) {
                    t = P.T, a = K.p, K.p = 2, P.T = null;
                    try {
                        for(var r = e.onRecoverableError, d = 0; d < n.length; d++){
                            var v = n[d];
                            r(v.value, {
                                componentStack: v.stack
                            });
                        }
                    } finally{
                        P.T = t, K.p = a;
                    }
                }
                (Hn & 3) !== 0 && ai(), Ht(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === _c ? za++ : (za = 0, _c = e) : za = 0, Ua(0);
            }
        }
        function kd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pa(t)));
        }
        function ai(e) {
            return Ud(), Pd(), qd(), jd();
        }
        function jd() {
            if ($e !== 5) return !1;
            var e = Ol, t = Sc;
            Sc = 0;
            var l = Ki(Hn), n = P.T, a = K.p;
            try {
                K.p = 32 > l ? 32 : l, P.T = null, l = Ec, Ec = null;
                var r = Ol, d = Hn;
                if ($e = 0, jn = Ol = null, Hn = 0, (ge & 6) !== 0) throw Error(s(331));
                var v = ge;
                if (ge |= 4, _d(r.current), bd(r, r.current, d, l), ge = v, Ua(0, !1), ft && typeof ft.onPostCommitFiberRoot == "function") try {
                    ft.onPostCommitFiberRoot(Jn, r);
                } catch  {}
                return !0;
            } finally{
                K.p = a, P.T = n, kd(e, t);
            }
        }
        function Hd(e, t, l) {
            t = _t(l, t), t = ec(e.stateNode, t, 2), e = yl(e, t, 2), e !== null && (Wn(e, 2), Ht(e));
        }
        function Ae(e, t, l) {
            if (e.tag === 3) Hd(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Hd(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Al === null || !Al.has(n))) {
                        e = _t(l, e), l = Yf(2), n = yl(t, l, 2), n !== null && (Gf(l, n, t, e), Wn(n, 2), Ht(n));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Oc(e, t, l) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new Z0;
                var a = new Set;
                n.set(t, a);
            } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
            a.has(l) || (yc = !0, a.add(l), e = I0.bind(null, e, t, l), t.then(e, e));
        }
        function I0(e, t, l) {
            var n = e.pingCache;
            n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Oe === e && (me & l) === l && (Be === 4 || Be === 3 && (me & 62914560) === me && 300 > Ut() - bc ? (ge & 2) === 0 && Ln(e, 0) : vc |= l, kn === me && (kn = 0)), Ht(e);
        }
        function Ld(e, t) {
            t === 0 && (t = Us()), e = Tn(e, t), e !== null && (Wn(e, t), Ht(e));
        }
        function e1(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), Ld(e, l);
        }
        function t1(e, t) {
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
            n !== null && n.delete(t), Ld(e, l);
        }
        function l1(e, t) {
            return ji(e, t);
        }
        var ui = null, Kn = null, Nc = !1, ii = !1, xc = !1, tn = 0;
        function Ht(e) {
            e !== Kn && e.next === null && (Kn === null ? ui = Kn = e : Kn = Kn.next = e), ii = !0, Nc || (Nc = !0, a1());
        }
        function Ua(e, t) {
            if (!xc && ii) {
                xc = !0;
                do for(var l = !1, n = ui; n !== null;){
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var r = 0;
                        else {
                            var d = n.suspendedLanes, v = n.pingedLanes;
                            r = (1 << 31 - dt(42 | e) + 1) - 1, r &= a & ~(d & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
                        }
                        r !== 0 && (l = !0, Gd(n, r));
                    } else r = me, r = du(n, n === Oe ? r : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (r & 3) === 0 || Fn(n, r) || (l = !0, Gd(n, r));
                    n = n.next;
                }
                while (l);
                xc = !1;
            }
        }
        function n1() {
            Qd();
        }
        function Qd() {
            ii = Nc = !1;
            var e = 0;
            tn !== 0 && (d1() && (e = tn), tn = 0);
            for(var t = Ut(), l = null, n = ui; n !== null;){
                var a = n.next, r = Kd(n, t);
                r === 0 ? (n.next = null, l === null ? ui = a : l.next = a, a === null && (Kn = l)) : (l = n, (e !== 0 || (r & 3) !== 0) && (ii = !0)), n = a;
            }
            Ua(e);
        }
        function Kd(e, t) {
            for(var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r;){
                var d = 31 - dt(r), v = 1 << d, S = a[d];
                S === -1 ? ((v & l) === 0 || (v & n) !== 0) && (a[d] = Mm(v, t)) : S <= t && (e.expiredLanes |= v), r &= ~v;
            }
            if (t = Oe, l = me, l = du(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (be === 2 || be === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && Hi(n), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || Fn(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(n !== null && Hi(n), Ki(l)){
                    case 2:
                    case 8:
                        l = Bs;
                        break;
                    case 32:
                        l = su;
                        break;
                    case 268435456:
                        l = ws;
                        break;
                    default:
                        l = su;
                }
                return n = Yd.bind(null, e), l = ji(l, n), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return n !== null && n !== null && Hi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Yd(e, t) {
            if ($e !== 0 && $e !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (ai() && e.callbackNode !== l) return null;
            var n = me;
            return n = du(e, e === Oe ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (Od(e, n, t), Kd(e, Ut()), e.callbackNode != null && e.callbackNode === l ? Yd.bind(null, e) : null);
        }
        function Gd(e, t) {
            if (ai()) return null;
            Od(e, t, !0);
        }
        function a1() {
            p1(function() {
                (ge & 6) !== 0 ? ji(Ds, n1) : Qd();
            });
        }
        function Mc() {
            return tn === 0 && (tn = zs()), tn;
        }
        function Vd(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : vu("" + e);
        }
        function Xd(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function u1(e, t, l, n, a) {
            if (t === "submit" && l && l.stateNode === a) {
                var r = Vd((a[ut] || null).action), d = n.submitter;
                d && (t = (t = d[ut] || null) ? Vd(t.formAction) : d.getAttribute("formAction"), t !== null && (r = t, d = null));
                var v = new Eu("action", "action", null, n, a);
                e.push({
                    event: v,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (tn !== 0) {
                                        var S = d ? Xd(a, d) : new FormData(a);
                                        $r(l, {
                                            pending: !0,
                                            data: S,
                                            method: a.method,
                                            action: r
                                        }, null, S);
                                    }
                                } else typeof r == "function" && (v.preventDefault(), S = d ? Xd(a, d) : new FormData(a), $r(l, {
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
            var Dc = pr[Cc], i1 = Dc.toLowerCase(), r1 = Dc[0].toUpperCase() + Dc.slice(1);
            Dt(i1, "on" + r1);
        }
        Dt(Ao, "onAnimationEnd"), Dt(Oo, "onAnimationIteration"), Dt(No, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(R0, "onTransitionRun"), Dt(A0, "onTransitionStart"), Dt(O0, "onTransitionCancel"), Dt(xo, "onTransitionEnd"), hn("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), hn("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), hn("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), hn("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), jl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), jl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), jl("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), jl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), jl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), jl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Pa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), c1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pa));
        function Zd(e, t) {
            t = (t & 4) !== 0;
            for(var l = 0; l < e.length; l++){
                var n = e[l], a = n.event;
                n = n.listeners;
                e: {
                    var r = void 0;
                    if (t) for(var d = n.length - 1; 0 <= d; d--){
                        var v = n[d], S = v.instance, M = v.currentTarget;
                        if (v = v.listener, S !== r && a.isPropagationStopped()) break e;
                        r = v, a.currentTarget = M;
                        try {
                            r(a);
                        } catch (q) {
                            Xu(q);
                        }
                        a.currentTarget = null, r = S;
                    }
                    else for(d = 0; d < n.length; d++){
                        if (v = n[d], S = v.instance, M = v.currentTarget, v = v.listener, S !== r && a.isPropagationStopped()) break e;
                        r = v, a.currentTarget = M;
                        try {
                            r(a);
                        } catch (q) {
                            Xu(q);
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
            l.has(n) || ($d(t, e, 2, !1), l.add(n));
        }
        function Bc(e, t, l) {
            var n = 0;
            t && (n |= 4), $d(l, e, n, t);
        }
        var ri = "_reactListening" + Math.random().toString(36).slice(2);
        function wc(e) {
            if (!e[ri]) {
                e[ri] = !0, Hs.forEach(function(l) {
                    l !== "selectionchange" && (c1.has(l) || Bc(l, !1, e), Bc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[ri] || (t[ri] = !0, Bc("selectionchange", !1, t));
            }
        }
        function $d(e, t, l, n) {
            switch(bh(t)){
                case 2:
                    var a = U1;
                    break;
                case 8:
                    a = P1;
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
                    var v = n.stateNode.containerInfo;
                    if (v === a) break;
                    if (d === 4) for(d = n.return; d !== null;){
                        var S = d.tag;
                        if ((S === 3 || S === 4) && d.stateNode.containerInfo === a) return;
                        d = d.return;
                    }
                    for(; v !== null;){
                        if (d = on(v), d === null) return;
                        if (S = d.tag, S === 5 || S === 6 || S === 26 || S === 27) {
                            n = r = d;
                            continue e;
                        }
                        v = v.parentNode;
                    }
                }
                n = n.return;
            }
            eo(function() {
                var M = r, q = Ii(l), H = [];
                e: {
                    var D = Mo.get(e);
                    if (D !== void 0) {
                        var B = Eu, le = e;
                        switch(e){
                            case "keypress":
                                if (bu(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                B = l0;
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
                                B = no;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                B = Ym;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                B = u0;
                                break;
                            case Ao:
                            case Oo:
                            case No:
                                B = Xm;
                                break;
                            case xo:
                                B = r0;
                                break;
                            case "scroll":
                            case "scrollend":
                                B = Qm;
                                break;
                            case "wheel":
                                B = s0;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                B = $m;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                B = uo;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                B = f0;
                        }
                        var I = (t & 4) !== 0, Te = !I && (e === "scroll" || e === "scrollend"), O = I ? D !== null ? D + "Capture" : null : D;
                        I = [];
                        for(var T = M, x; T !== null;){
                            var j = T;
                            if (x = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || x === null || O === null || (j = ta(T, O), j != null && I.push(qa(T, j, x))), Te) break;
                            T = T.return;
                        }
                        0 < I.length && (D = new B(D, le, null, l, q), H.push({
                            event: D,
                            listeners: I
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (D = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", D && l !== Wi && (le = l.relatedTarget || l.fromElement) && (on(le) || le[sn])) break e;
                        if ((B || D) && (D = q.window === q ? q : (D = q.ownerDocument) ? D.defaultView || D.parentWindow : window, B ? (le = l.relatedTarget || l.toElement, B = M, le = le ? on(le) : null, le !== null && (Te = f(le), I = le.tag, le !== Te || I !== 5 && I !== 27 && I !== 6) && (le = null)) : (B = null, le = M), B !== le)) {
                            if (I = no, j = "onMouseLeave", O = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (I = uo, j = "onPointerLeave", O = "onPointerEnter", T = "pointer"), Te = B == null ? D : ea(B), x = le == null ? D : ea(le), D = new I(j, T + "leave", B, l, q), D.target = Te, D.relatedTarget = x, j = null, on(q) === M && (I = new I(O, T + "enter", le, l, q), I.target = x, I.relatedTarget = Te, j = I), Te = j, B && le) t: {
                                for(I = B, O = le, T = 0, x = I; x; x = Yn(x))T++;
                                for(x = 0, j = O; j; j = Yn(j))x++;
                                for(; 0 < T - x;)I = Yn(I), T--;
                                for(; 0 < x - T;)O = Yn(O), x--;
                                for(; T--;){
                                    if (I === O || O !== null && I === O.alternate) break t;
                                    I = Yn(I), O = Yn(O);
                                }
                                I = null;
                            }
                            else I = null;
                            B !== null && Jd(H, D, B, I, !1), le !== null && Te !== null && Jd(H, Te, le, I, !0);
                        }
                    }
                    e: {
                        if (D = M ? ea(M) : window, B = D.nodeName && D.nodeName.toLowerCase(), B === "select" || B === "input" && D.type === "file") var $ = po;
                        else if (fo(D)) if (mo) $ = E0;
                        else {
                            $ = b0;
                            var oe = g0;
                        }
                        else B = D.nodeName, !B || B.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? M && Fi(M.elementType) && ($ = po) : $ = S0;
                        if ($ && ($ = $(e, M))) {
                            ho(H, $, l, q);
                            break e;
                        }
                        oe && oe(e, D, M), e === "focusout" && M && D.type === "number" && M.memoizedProps.value != null && Ji(D, "number", D.value);
                    }
                    switch(oe = M ? ea(M) : window, e){
                        case "focusin":
                            (fo(oe) || oe.contentEditable === "true") && (Sn = oe, fr = M, sa = null);
                            break;
                        case "focusout":
                            sa = fr = Sn = null;
                            break;
                        case "mousedown":
                            dr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            dr = !1, To(H, l, q);
                            break;
                        case "selectionchange":
                            if (T0) break;
                        case "keydown":
                        case "keyup":
                            To(H, l, q);
                    }
                    var W;
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
                    else bn ? so(e, l) && (ee = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ee = "onCompositionStart");
                    ee && (io && l.locale !== "ko" && (bn || ee !== "onCompositionStart" ? ee === "onCompositionEnd" && bn && (W = to()) : (dl = q, lr = "value" in dl ? dl.value : dl.textContent, bn = !0)), oe = ci(M, ee), 0 < oe.length && (ee = new ao(ee, e, null, l, q), H.push({
                        event: ee,
                        listeners: oe
                    }), W ? ee.data = W : (W = oo(l), W !== null && (ee.data = W)))), (W = h0 ? p0(e, l) : m0(e, l)) && (ee = ci(M, "onBeforeInput"), 0 < ee.length && (oe = new ao("onBeforeInput", "beforeinput", null, l, q), H.push({
                        event: oe,
                        listeners: ee
                    }), oe.data = W)), u1(H, e, M, l, q);
                }
                Zd(H, t);
            });
        }
        function qa(e, t, l) {
            return {
                instance: e,
                listener: t,
                currentTarget: l
            };
        }
        function ci(e, t) {
            for(var l = t + "Capture", n = []; e !== null;){
                var a = e, r = a.stateNode;
                if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || r === null || (a = ta(e, l), a != null && n.unshift(qa(e, a, r)), a = ta(e, t), a != null && n.push(qa(e, a, r))), e.tag === 3) return n;
                e = e.return;
            }
            return [];
        }
        function Yn(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function Jd(e, t, l, n, a) {
            for(var r = t._reactName, d = []; l !== null && l !== n;){
                var v = l, S = v.alternate, M = v.stateNode;
                if (v = v.tag, S !== null && S === n) break;
                v !== 5 && v !== 26 && v !== 27 || M === null || (S = M, a ? (M = ta(l, r), M != null && d.unshift(qa(l, M, S))) : a || (M = ta(l, r), M != null && d.push(qa(l, M, S)))), l = l.return;
            }
            d.length !== 0 && e.push({
                event: t,
                listeners: d
            });
        }
        var s1 = /\r\n?/g, o1 = /\u0000|\uFFFD/g;
        function Fd(e) {
            return (typeof e == "string" ? e : "" + e).replace(s1, `
`).replace(o1, "");
        }
        function Wd(e, t) {
            return t = Fd(t), Fd(e) === t;
        }
        function si() {}
        function _e(e, t, l, n, a, r) {
            switch(l){
                case "children":
                    typeof n == "string" ? t === "body" || t === "textarea" && n === "" || yn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && yn(e, "" + n);
                    break;
                case "className":
                    pu(e, "class", n);
                    break;
                case "tabIndex":
                    pu(e, "tabindex", n);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    pu(e, l, n);
                    break;
                case "style":
                    Ws(e, n, r);
                    break;
                case "data":
                    if (t !== "object") {
                        pu(e, "data", n);
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
                    n = vu("" + n), e.setAttribute(l, n);
                    break;
                case "action":
                case "formAction":
                    if (typeof n == "function") {
                        e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof r == "function" && (l === "formAction" ? (t !== "input" && _e(e, t, "name", a.name, a, null), _e(e, t, "formEncType", a.formEncType, a, null), _e(e, t, "formMethod", a.formMethod, a, null), _e(e, t, "formTarget", a.formTarget, a, null)) : (_e(e, t, "encType", a.encType, a, null), _e(e, t, "method", a.method, a, null), _e(e, t, "target", a.target, a, null)));
                    if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                        e.removeAttribute(l);
                        break;
                    }
                    n = vu("" + n), e.setAttribute(l, n);
                    break;
                case "onClick":
                    n != null && (e.onclick = si);
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
                    l = vu("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
                    he("beforetoggle", e), he("toggle", e), hu(e, "popover", n);
                    break;
                case "xlinkActuate":
                    Yt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
                    break;
                case "xlinkArcrole":
                    Yt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
                    break;
                case "xlinkRole":
                    Yt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
                    break;
                case "xlinkShow":
                    Yt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
                    break;
                case "xlinkTitle":
                    Yt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
                    break;
                case "xlinkType":
                    Yt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
                    break;
                case "xmlBase":
                    Yt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
                    break;
                case "xmlLang":
                    Yt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
                    break;
                case "xmlSpace":
                    Yt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
                    break;
                case "is":
                    hu(e, "is", n);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Hm.get(l) || l, hu(e, l, n));
            }
        }
        function Uc(e, t, l, n, a, r) {
            switch(l){
                case "style":
                    Ws(e, n, r);
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
                    typeof n == "string" ? yn(e, n) : (typeof n == "number" || typeof n == "bigint") && yn(e, "" + n);
                    break;
                case "onScroll":
                    n != null && he("scroll", e);
                    break;
                case "onScrollEnd":
                    n != null && he("scrollend", e);
                    break;
                case "onClick":
                    n != null && (e.onclick = si);
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
                    if (!Ls.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), r = e[ut] || null, r = r != null ? r[l] : null, typeof r == "function" && e.removeEventListener(t, r, a), typeof n == "function")) {
                            typeof r != "function" && r !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
                            break e;
                        }
                        l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : hu(e, l, n);
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
                                _e(e, t, r, d, l, null);
                        }
                    }
                    a && _e(e, t, "srcSet", l.srcSet, l, null), n && _e(e, t, "src", l.src, l, null);
                    return;
                case "input":
                    he("invalid", e);
                    var v = r = d = a = null, S = null, M = null;
                    for(n in l)if (l.hasOwnProperty(n)) {
                        var q = l[n];
                        if (q != null) switch(n){
                            case "name":
                                a = q;
                                break;
                            case "type":
                                d = q;
                                break;
                            case "checked":
                                S = q;
                                break;
                            case "defaultChecked":
                                M = q;
                                break;
                            case "value":
                                r = q;
                                break;
                            case "defaultValue":
                                v = q;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (q != null) throw Error(s(137, t));
                                break;
                            default:
                                _e(e, t, n, q, l, null);
                        }
                    }
                    Zs(e, r, v, S, M, d, a, !1), mu(e);
                    return;
                case "select":
                    he("invalid", e), n = d = r = null;
                    for(a in l)if (l.hasOwnProperty(a) && (v = l[a], v != null)) switch(a){
                        case "value":
                            r = v;
                            break;
                        case "defaultValue":
                            d = v;
                            break;
                        case "multiple":
                            n = v;
                        default:
                            _e(e, t, a, v, l, null);
                    }
                    t = r, l = d, e.multiple = !!n, t != null ? mn(e, !!n, t, !1) : l != null && mn(e, !!n, l, !0);
                    return;
                case "textarea":
                    he("invalid", e), r = a = n = null;
                    for(d in l)if (l.hasOwnProperty(d) && (v = l[d], v != null)) switch(d){
                        case "value":
                            n = v;
                            break;
                        case "defaultValue":
                            a = v;
                            break;
                        case "children":
                            r = v;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (v != null) throw Error(s(91));
                            break;
                        default:
                            _e(e, t, d, v, l, null);
                    }
                    Js(e, n, a, r), mu(e);
                    return;
                case "option":
                    for(S in l)if (l.hasOwnProperty(S) && (n = l[S], n != null)) switch(S){
                        case "selected":
                            e.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default:
                            _e(e, t, S, n, l, null);
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
                    for(n = 0; n < Pa.length; n++)he(Pa[n], e);
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
                            _e(e, t, M, n, l, null);
                    }
                    return;
                default:
                    if (Fi(t)) {
                        for(q in l)l.hasOwnProperty(q) && (n = l[q], n !== void 0 && Uc(e, t, q, n, l, void 0));
                        return;
                    }
            }
            for(v in l)l.hasOwnProperty(v) && (n = l[v], n != null && _e(e, t, v, n, l, null));
        }
        function f1(e, t, l, n) {
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
                    var a = null, r = null, d = null, v = null, S = null, M = null, q = null;
                    for(B in l){
                        var H = l[B];
                        if (l.hasOwnProperty(B) && H != null) switch(B){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                S = H;
                            default:
                                n.hasOwnProperty(B) || _e(e, t, B, null, n, H);
                        }
                    }
                    for(var D in n){
                        var B = n[D];
                        if (H = l[D], n.hasOwnProperty(D) && (B != null || H != null)) switch(D){
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
                                q = B;
                                break;
                            case "value":
                                d = B;
                                break;
                            case "defaultValue":
                                v = B;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (B != null) throw Error(s(137, t));
                                break;
                            default:
                                B !== H && _e(e, t, D, B, n, H);
                        }
                    }
                    $i(e, d, v, S, M, q, r, a);
                    return;
                case "select":
                    B = d = v = D = null;
                    for(r in l)if (S = l[r], l.hasOwnProperty(r) && S != null) switch(r){
                        case "value":
                            break;
                        case "multiple":
                            B = S;
                        default:
                            n.hasOwnProperty(r) || _e(e, t, r, null, n, S);
                    }
                    for(a in n)if (r = n[a], S = l[a], n.hasOwnProperty(a) && (r != null || S != null)) switch(a){
                        case "value":
                            D = r;
                            break;
                        case "defaultValue":
                            v = r;
                            break;
                        case "multiple":
                            d = r;
                        default:
                            r !== S && _e(e, t, a, r, n, S);
                    }
                    t = v, l = d, n = B, D != null ? mn(e, !!l, D, !1) : !!n != !!l && (t != null ? mn(e, !!l, t, !0) : mn(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    B = D = null;
                    for(v in l)if (a = l[v], l.hasOwnProperty(v) && a != null && !n.hasOwnProperty(v)) switch(v){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            _e(e, t, v, null, n, a);
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
                            a !== r && _e(e, t, d, a, n, r);
                    }
                    $s(e, D, B);
                    return;
                case "option":
                    for(var le in l)if (D = l[le], l.hasOwnProperty(le) && D != null && !n.hasOwnProperty(le)) switch(le){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            _e(e, t, le, null, n, D);
                    }
                    for(S in n)if (D = n[S], B = l[S], n.hasOwnProperty(S) && D !== B && (D != null || B != null)) switch(S){
                        case "selected":
                            e.selected = D && typeof D != "function" && typeof D != "symbol";
                            break;
                        default:
                            _e(e, t, S, D, n, B);
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
                    for(var I in l)D = l[I], l.hasOwnProperty(I) && D != null && !n.hasOwnProperty(I) && _e(e, t, I, null, n, D);
                    for(M in n)if (D = n[M], B = l[M], n.hasOwnProperty(M) && D !== B && (D != null || B != null)) switch(M){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (D != null) throw Error(s(137, t));
                            break;
                        default:
                            _e(e, t, M, D, n, B);
                    }
                    return;
                default:
                    if (Fi(t)) {
                        for(var Te in l)D = l[Te], l.hasOwnProperty(Te) && D !== void 0 && !n.hasOwnProperty(Te) && Uc(e, t, Te, void 0, n, D);
                        for(q in n)D = n[q], B = l[q], !n.hasOwnProperty(q) || D === B || D === void 0 && B === void 0 || Uc(e, t, q, D, n, B);
                        return;
                    }
            }
            for(var O in l)D = l[O], l.hasOwnProperty(O) && D != null && !n.hasOwnProperty(O) && _e(e, t, O, null, n, D);
            for(H in n)D = n[H], B = l[H], !n.hasOwnProperty(H) || D === B || D == null && B == null || _e(e, t, H, D, n, B);
        }
        var Pc = null, qc = null;
        function oi(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function Id(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function eh(e, t) {
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
        function kc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var jc = null;
        function d1() {
            var e = window.event;
            return e && e.type === "popstate" ? e === jc ? !1 : (jc = e, !0) : (jc = null, !1);
        }
        var th = typeof setTimeout == "function" ? setTimeout : void 0, h1 = typeof clearTimeout == "function" ? clearTimeout : void 0, lh = typeof Promise == "function" ? Promise : void 0, p1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof lh < "u" ? function(e) {
            return lh.resolve(null).then(e).catch(m1);
        } : th;
        function m1(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function xl(e) {
            return e === "head";
        }
        function nh(e, t) {
            var l = t, n = 0, a = 0;
            do {
                var r = l.nextSibling;
                if (e.removeChild(l), r && r.nodeType === 8) if (l = r.data, l === "/$") {
                    if (0 < n && 8 > n) {
                        l = n;
                        var d = e.ownerDocument;
                        if (l & 1 && ka(d.documentElement), l & 2 && ka(d.body), l & 4) for(l = d.head, ka(l), d = l.firstChild; d;){
                            var v = d.nextSibling, S = d.nodeName;
                            d[In] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && d.rel.toLowerCase() === "stylesheet" || l.removeChild(d), d = v;
                        }
                    }
                    if (a === 0) {
                        e.removeChild(r), Va(t);
                        return;
                    }
                    a--;
                } else l === "$" || l === "$?" || l === "$!" ? a++ : n = l.charCodeAt(0) - 48;
                else n = 0;
                l = r;
            }while (l);
            Va(t);
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
        function y1(e, t, l, n) {
            for(; e.nodeType === 1;){
                var a = l;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (n) {
                    if (!e[In]) switch(t){
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
        function v1(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = wt(e.nextSibling), e === null)) return null;
            return e;
        }
        function Lc(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function g1(e, t) {
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
        function ah(e) {
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
        function uh(e, t, l) {
            switch(t = oi(l), e){
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
        function ka(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            Gi(e);
        }
        var xt = new Map, ih = new Set;
        function fi(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var al = K.d;
        K.d = {
            f: b1,
            r: S1,
            D: E1,
            C: _1,
            L: T1,
            m: R1,
            X: O1,
            S: A1,
            M: N1
        };
        function b1() {
            var e = al.f(), t = li();
            return e || t;
        }
        function S1(e) {
            var t = fn(e);
            t !== null && t.tag === 5 && t.type === "form" ? Of(t) : al.r(e);
        }
        var Gn = typeof document > "u" ? null : document;
        function rh(e, t, l) {
            var n = Gn;
            if (n && typeof t == "string" && t) {
                var a = Et(t);
                a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), ih.has(a) || (ih.add(a), e = {
                    rel: e,
                    crossOrigin: l,
                    href: t
                }, n.querySelector(a) === null && (t = n.createElement("link"), Je(t, "link", e), Ke(t), n.head.appendChild(t)));
            }
        }
        function E1(e) {
            al.D(e), rh("dns-prefetch", e, null);
        }
        function _1(e, t) {
            al.C(e, t), rh("preconnect", e, t);
        }
        function T1(e, t, l) {
            al.L(e, t, l);
            var n = Gn;
            if (n && e && t) {
                var a = 'link[rel="preload"][as="' + Et(t) + '"]';
                t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Et(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Et(l.imageSizes) + '"]')) : a += '[href="' + Et(e) + '"]';
                var r = a;
                switch(t){
                    case "style":
                        r = Vn(e);
                        break;
                    case "script":
                        r = Xn(e);
                }
                xt.has(r) || (e = b({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), xt.set(r, e), n.querySelector(a) !== null || t === "style" && n.querySelector(ja(r)) || t === "script" && n.querySelector(Ha(r)) || (t = n.createElement("link"), Je(t, "link", e), Ke(t), n.head.appendChild(t)));
            }
        }
        function R1(e, t) {
            al.m(e, t);
            var l = Gn;
            if (l && e) {
                var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Et(n) + '"][href="' + Et(e) + '"]', r = a;
                switch(n){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        r = Xn(e);
                }
                if (!xt.has(r) && (e = b({
                    rel: "modulepreload",
                    href: e
                }, t), xt.set(r, e), l.querySelector(a) === null)) {
                    switch(n){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (l.querySelector(Ha(r))) return;
                    }
                    n = l.createElement("link"), Je(n, "link", e), Ke(n), l.head.appendChild(n);
                }
            }
        }
        function A1(e, t, l) {
            al.S(e, t, l);
            var n = Gn;
            if (n && e) {
                var a = dn(n).hoistableStyles, r = Vn(e);
                t = t || "default";
                var d = a.get(r);
                if (!d) {
                    var v = {
                        loading: 0,
                        preload: null
                    };
                    if (d = n.querySelector(ja(r))) v.loading = 5;
                    else {
                        e = b({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = xt.get(r)) && Kc(e, l);
                        var S = d = n.createElement("link");
                        Ke(S), Je(S, "link", e), S._p = new Promise(function(M, q) {
                            S.onload = M, S.onerror = q;
                        }), S.addEventListener("load", function() {
                            v.loading |= 1;
                        }), S.addEventListener("error", function() {
                            v.loading |= 2;
                        }), v.loading |= 4, di(d, t, n);
                    }
                    d = {
                        type: "stylesheet",
                        instance: d,
                        count: 1,
                        state: v
                    }, a.set(r, d);
                }
            }
        }
        function O1(e, t) {
            al.X(e, t);
            var l = Gn;
            if (l && e) {
                var n = dn(l).hoistableScripts, a = Xn(e), r = n.get(a);
                r || (r = l.querySelector(Ha(a)), r || (e = b({
                    src: e,
                    async: !0
                }, t), (t = xt.get(a)) && Yc(e, t), r = l.createElement("script"), Ke(r), Je(r, "link", e), l.head.appendChild(r)), r = {
                    type: "script",
                    instance: r,
                    count: 1,
                    state: null
                }, n.set(a, r));
            }
        }
        function N1(e, t) {
            al.M(e, t);
            var l = Gn;
            if (l && e) {
                var n = dn(l).hoistableScripts, a = Xn(e), r = n.get(a);
                r || (r = l.querySelector(Ha(a)), r || (e = b({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = xt.get(a)) && Yc(e, t), r = l.createElement("script"), Ke(r), Je(r, "link", e), l.head.appendChild(r)), r = {
                    type: "script",
                    instance: r,
                    count: 1,
                    state: null
                }, n.set(a, r));
            }
        }
        function ch(e, t, l, n) {
            var a = (a = ne.current) ? fi(a) : null;
            if (!a) throw Error(s(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Vn(l.href), l = dn(a).hoistableStyles, n = l.get(t), n || (n = {
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
                        e = Vn(l.href);
                        var r = dn(a).hoistableStyles, d = r.get(e);
                        if (d || (a = a.ownerDocument || a, d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, r.set(e, d), (r = a.querySelector(ja(e))) && !r._p && (d.instance = r, d.state.loading = 5), xt.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, xt.set(e, l), r || x1(a, e, l, d.state))), t && n === null) throw Error(s(528, ""));
                        return d;
                    }
                    if (t && n !== null) throw Error(s(529, ""));
                    return null;
                case "script":
                    return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Xn(l), l = dn(a).hoistableScripts, n = l.get(t), n || (n = {
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
        function Vn(e) {
            return 'href="' + Et(e) + '"';
        }
        function ja(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function sh(e) {
            return b({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function x1(e, t, l, n) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
                return n.loading |= 1;
            }), t.addEventListener("error", function() {
                return n.loading |= 2;
            }), Je(t, "link", l), Ke(t), e.head.appendChild(t));
        }
        function Xn(e) {
            return '[src="' + Et(e) + '"]';
        }
        function Ha(e) {
            return "script[async]" + e;
        }
        function oh(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var n = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
                    if (n) return t.instance = n, Ke(n), n;
                    var a = b({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return n = (e.ownerDocument || e).createElement("style"), Ke(n), Je(n, "style", a), di(n, l.precedence, e), t.instance = n;
                case "stylesheet":
                    a = Vn(l.href);
                    var r = e.querySelector(ja(a));
                    if (r) return t.state.loading |= 4, t.instance = r, Ke(r), r;
                    n = sh(l), (a = xt.get(a)) && Kc(n, a), r = (e.ownerDocument || e).createElement("link"), Ke(r);
                    var d = r;
                    return d._p = new Promise(function(v, S) {
                        d.onload = v, d.onerror = S;
                    }), Je(r, "link", n), t.state.loading |= 4, di(r, l.precedence, e), t.instance = r;
                case "script":
                    return r = Xn(l.src), (a = e.querySelector(Ha(r))) ? (t.instance = a, Ke(a), a) : (n = l, (a = xt.get(r)) && (n = b({}, l), Yc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ke(a), Je(a, "link", n), e.head.appendChild(a), t.instance = a);
                case "void":
                    return null;
                default:
                    throw Error(s(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, di(n, l.precedence, e));
            return t.instance;
        }
        function di(e, t, l) {
            for(var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, r = a, d = 0; d < n.length; d++){
                var v = n[d];
                if (v.dataset.precedence === t) r = v;
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
        var hi = null;
        function fh(e, t, l) {
            if (hi === null) {
                var n = new Map, a = hi = new Map;
                a.set(l, n);
            } else a = hi, n = a.get(l), n || (n = new Map, a.set(l, n));
            if (n.has(e)) return n;
            for(n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++){
                var r = l[a];
                if (!(r[In] || r[Ie] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var d = r.getAttribute(t) || "";
                    d = e + d;
                    var v = n.get(d);
                    v ? v.push(r) : n.set(d, [
                        r
                    ]);
                }
            }
            return n;
        }
        function dh(e, t, l) {
            e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
        }
        function M1(e, t, l) {
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
        function hh(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var La = null;
        function C1() {}
        function D1(e, t, l) {
            if (La === null) throw Error(s(475));
            var n = La;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var a = Vn(l.href), r = e.querySelector(ja(a));
                    if (r) {
                        e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = pi.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = r, Ke(r);
                        return;
                    }
                    r = e.ownerDocument || e, l = sh(l), (a = xt.get(a)) && Kc(l, a), r = r.createElement("link"), Ke(r);
                    var d = r;
                    d._p = new Promise(function(v, S) {
                        d.onload = v, d.onerror = S;
                    }), Je(r, "link", l), t.instance = r;
                }
                n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = pi.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function B1() {
            if (La === null) throw Error(s(475));
            var e = La;
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
        function pi() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Gc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var mi = null;
        function Gc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, mi = new Map, t.forEach(w1, e), mi = null, pi.call(e));
        }
        function w1(e, t) {
            if (!(t.state.loading & 4)) {
                var l = mi.get(e);
                if (l) var n = l.get(null);
                else {
                    l = new Map, mi.set(e, l);
                    for(var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < a.length; r++){
                        var d = a[r];
                        (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (l.set(d.dataset.precedence, d), n = d);
                    }
                    n && l.set(null, n);
                }
                a = t.instance, d = a.getAttribute("data-precedence"), r = l.get(d) || n, r === n && l.set(null, a), l.set(d, a), this.count++, n = pi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), r ? r.parentNode.insertBefore(a, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
            }
        }
        var Qa = {
            $$typeof: U,
            Provider: null,
            Consumer: null,
            _currentValue: V,
            _currentValue2: V,
            _threadCount: 0
        };
        function z1(e, t, l, n, a, r, d, v) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Li(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Li(0), this.hiddenUpdates = Li(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = r, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = new Map;
        }
        function ph(e, t, l, n, a, r, d, v, S, M, q, H) {
            return e = new z1(e, t, l, d, v, S, M, H), t = 1, r === !0 && (t |= 24), r = pt(3, null, null, t), e.current = r, r.stateNode = e, t = Or(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: t
            }, Cr(r), e;
        }
        function mh(e) {
            return e ? (e = Rn, e) : Rn;
        }
        function yh(e, t, l, n, a, r) {
            a = mh(a), n.context === null ? n.context = a : n.pendingContext = a, n = ml(t), n.payload = {
                element: l
            }, r = r === void 0 ? null : r, r !== null && (n.callback = r), l = yl(e, n, t), l !== null && (bt(l, e, t), ga(l, e, t));
        }
        function vh(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var l = e.retryLane;
                e.retryLane = l !== 0 && l < t ? l : t;
            }
        }
        function Vc(e, t) {
            vh(e, t), (e = e.alternate) && vh(e, t);
        }
        function gh(e) {
            if (e.tag === 13) {
                var t = Tn(e, 67108864);
                t !== null && bt(t, e, 67108864), Vc(e, 67108864);
            }
        }
        var yi = !0;
        function U1(e, t, l, n) {
            var a = P.T;
            P.T = null;
            var r = K.p;
            try {
                K.p = 2, Xc(e, t, l, n);
            } finally{
                K.p = r, P.T = a;
            }
        }
        function P1(e, t, l, n) {
            var a = P.T;
            P.T = null;
            var r = K.p;
            try {
                K.p = 8, Xc(e, t, l, n);
            } finally{
                K.p = r, P.T = a;
            }
        }
        function Xc(e, t, l, n) {
            if (yi) {
                var a = Zc(n);
                if (a === null) zc(e, t, n, vi, l), Sh(e, n);
                else if (k1(a, e, t, l, n)) n.stopPropagation();
                else if (Sh(e, n), t & 4 && -1 < q1.indexOf(e)) {
                    for(; a !== null;){
                        var r = fn(a);
                        if (r !== null) switch(r.tag){
                            case 3:
                                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                                    var d = kl(r.pendingLanes);
                                    if (d !== 0) {
                                        var v = r;
                                        for(v.pendingLanes |= 2, v.entangledLanes |= 2; d;){
                                            var S = 1 << 31 - dt(d);
                                            v.entanglements[1] |= S, d &= ~S;
                                        }
                                        Ht(r), (ge & 6) === 0 && (ei = Ut() + 500, Ua(0));
                                    }
                                }
                                break;
                            case 13:
                                v = Tn(r, 2), v !== null && bt(v, r, 2), li(), Vc(r, 2);
                        }
                        if (r = Zc(n), r === null && zc(e, t, n, vi, l), r === a) break;
                        a = r;
                    }
                    a !== null && n.stopPropagation();
                } else zc(e, t, n, null, l);
            }
        }
        function Zc(e) {
            return e = Ii(e), $c(e);
        }
        var vi = null;
        function $c(e) {
            if (vi = null, e = on(e), e !== null) {
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
            return vi = e, null;
        }
        function bh(e) {
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
                    switch(_m()){
                        case Ds:
                            return 2;
                        case Bs:
                            return 8;
                        case su:
                        case Tm:
                            return 32;
                        case ws:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Jc = !1, Ml = null, Cl = null, Dl = null, Ka = new Map, Ya = new Map, Bl = [], q1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Sh(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    Ml = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Cl = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Dl = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Ka.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Ya.delete(t.pointerId);
            }
        }
        function Ga(e, t, l, n, a, r) {
            return e === null || e.nativeEvent !== r ? (e = {
                blockedOn: t,
                domEventName: l,
                eventSystemFlags: n,
                nativeEvent: r,
                targetContainers: [
                    a
                ]
            }, t !== null && (t = fn(t), t !== null && gh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
        }
        function k1(e, t, l, n, a) {
            switch(t){
                case "focusin":
                    return Ml = Ga(Ml, e, t, l, n, a), !0;
                case "dragenter":
                    return Cl = Ga(Cl, e, t, l, n, a), !0;
                case "mouseover":
                    return Dl = Ga(Dl, e, t, l, n, a), !0;
                case "pointerover":
                    var r = a.pointerId;
                    return Ka.set(r, Ga(Ka.get(r) || null, e, t, l, n, a)), !0;
                case "gotpointercapture":
                    return r = a.pointerId, Ya.set(r, Ga(Ya.get(r) || null, e, t, l, n, a)), !0;
            }
            return !1;
        }
        function Eh(e) {
            var t = on(e.target);
            if (t !== null) {
                var l = f(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = m(l), t !== null) {
                            e.blockedOn = t, Dm(e.priority, function() {
                                if (l.tag === 13) {
                                    var n = gt();
                                    n = Qi(n);
                                    var a = Tn(l, n);
                                    a !== null && bt(a, l, n), Vc(l, n);
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
        function gi(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var l = Zc(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var n = new l.constructor(l.type, l);
                    Wi = n, l.target.dispatchEvent(n), Wi = null;
                } else return t = fn(l), t !== null && gh(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function _h(e, t, l) {
            gi(e) && l.delete(t);
        }
        function j1() {
            Jc = !1, Ml !== null && gi(Ml) && (Ml = null), Cl !== null && gi(Cl) && (Cl = null), Dl !== null && gi(Dl) && (Dl = null), Ka.forEach(_h), Ya.forEach(_h);
        }
        function bi(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Jc || (Jc = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, j1)));
        }
        var Si = null;
        function Th(e) {
            Si !== e && (Si = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
                Si === e && (Si = null);
                for(var t = 0; t < e.length; t += 3){
                    var l = e[t], n = e[t + 1], a = e[t + 2];
                    if (typeof n != "function") {
                        if ($c(n || l) === null) continue;
                        break;
                    }
                    var r = fn(l);
                    r !== null && (e.splice(t, 3), t -= 3, $r(r, {
                        pending: !0,
                        data: a,
                        method: l.method,
                        action: n
                    }, n, a));
                }
            }));
        }
        function Va(e) {
            function t(S) {
                return bi(S, e);
            }
            Ml !== null && bi(Ml, e), Cl !== null && bi(Cl, e), Dl !== null && bi(Dl, e), Ka.forEach(t), Ya.forEach(t);
            for(var l = 0; l < Bl.length; l++){
                var n = Bl[l];
                n.blockedOn === e && (n.blockedOn = null);
            }
            for(; 0 < Bl.length && (l = Bl[0], l.blockedOn === null);)Eh(l), l.blockedOn === null && Bl.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(n = 0; n < l.length; n += 3){
                var a = l[n], r = l[n + 1], d = a[ut] || null;
                if (typeof r == "function") d || Th(l);
                else if (d) {
                    var v = null;
                    if (r && r.hasAttribute("formAction")) {
                        if (a = r, d = r[ut] || null) v = d.formAction;
                        else if ($c(a) !== null) continue;
                    } else v = d.action;
                    typeof v == "function" ? l[n + 1] = v : (l.splice(n, 3), n -= 3), Th(l);
                }
            }
        }
        function Fc(e) {
            this._internalRoot = e;
        }
        Ei.prototype.render = Fc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(s(409));
            var l = t.current, n = gt();
            yh(l, n, e, t, null, null);
        }, Ei.prototype.unmount = Fc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                yh(e.current, 2, null, e, null, null), li(), t[sn] = null;
            }
        };
        function Ei(e) {
            this._internalRoot = e;
        }
        Ei.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = ks();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Bl.length && t !== 0 && t < Bl[l].priority; l++);
                Bl.splice(l, 0, e), l === 0 && Eh(e);
            }
        };
        var Rh = i.version;
        if (Rh !== "19.1.0") throw Error(s(527, Rh, "19.1.0"));
        K.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
            return e = h(t), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var H1 = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: P,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var _i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!_i.isDisabled && _i.supportsFiber) try {
                Jn = _i.inject(H1), ft = _i;
            } catch  {}
        }
        return Za.createRoot = function(e, t) {
            if (!o(e)) throw Error(s(299));
            var l = !1, n = "", a = Hf, r = Lf, d = Qf, v = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (v = t.unstable_transitionCallbacks)), t = ph(e, 1, !1, null, null, l, n, a, r, d, v, null), e[sn] = t.current, wc(e), new Fc(t);
        }, Za.hydrateRoot = function(e, t, l) {
            if (!o(e)) throw Error(s(299));
            var n = !1, a = "", r = Hf, d = Lf, v = Qf, S = null, M = null;
            return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (r = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (v = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (S = l.unstable_transitionCallbacks), l.formState !== void 0 && (M = l.formState)), t = ph(e, 1, !0, t, l ?? null, n, a, r, d, v, S, M), t.context = mh(null), l = t.current, n = gt(), n = Qi(n), a = ml(n), a.callback = null, yl(l, a, n), l = n, t.current.lanes = l, Wn(t, l), Ht(t), e[sn] = t.current, wc(e), new Ei(t);
        }, Za.version = "19.1.0", Za;
    }
    var zh;
    function F1() {
        if (zh) return es.exports;
        zh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (i) {
                console.error(i);
            }
        }
        return u(), es.exports = J1(), es.exports;
    }
    var W1 = F1(), as = {
        exports: {}
    }, us = {};
    var Uh;
    function I1() {
        if (Uh) return us;
        Uh = 1;
        var u = zi();
        function i(h, y) {
            return h === y && (h !== 0 || 1 / h === 1 / y) || h !== h && y !== y;
        }
        var c = typeof Object.is == "function" ? Object.is : i, s = u.useSyncExternalStore, o = u.useRef, f = u.useEffect, m = u.useMemo, p = u.useDebugValue;
        return us.useSyncExternalStoreWithSelector = function(h, y, b, _, g) {
            var R = o(null);
            if (R.current === null) {
                var N = {
                    hasValue: !1,
                    value: null
                };
                R.current = N;
            } else N = R.current;
            R = m(function() {
                function z(Y) {
                    if (!w) {
                        if (w = !0, Q = Y, Y = _(Y), g !== void 0 && N.hasValue) {
                            var J = N.value;
                            if (g(J, Y)) return U = J;
                        }
                        return U = Y;
                    }
                    if (J = U, c(Q, Y)) return J;
                    var te = _(Y);
                    return g !== void 0 && g(J, te) ? (Q = Y, J) : (Q = Y, U = te);
                }
                var w = !1, Q, U, X = b === void 0 ? null : b;
                return [
                    function() {
                        return z(y());
                    },
                    X === null ? void 0 : function() {
                        return z(X());
                    }
                ];
            }, [
                y,
                b,
                _,
                g
            ]);
            var C = s(h, R[0], R[1]);
            return f(function() {
                N.hasValue = !0, N.value = C;
            }, [
                C
            ]), p(C), C;
        }, us;
    }
    var Ph;
    function ey() {
        return Ph || (Ph = 1, as.exports = I1()), as.exports;
    }
    var ty = ey();
    function ly(u) {
        u();
    }
    function ny() {
        let u = null, i = null;
        return {
            clear () {
                u = null, i = null;
            },
            notify () {
                ly(()=>{
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
    var qh = {
        notify () {},
        get: ()=>[]
    };
    function ay(u, i) {
        let c, s = qh, o = 0, f = !1;
        function m(C) {
            b();
            const z = s.subscribe(C);
            let w = !1;
            return ()=>{
                w || (w = !0, z(), _());
            };
        }
        function p() {
            s.notify();
        }
        function h() {
            N.onStateChange && N.onStateChange();
        }
        function y() {
            return f;
        }
        function b() {
            o++, c || (c = u.subscribe(h), s = ny());
        }
        function _() {
            o--, c && o === 0 && (c(), c = void 0, s.clear(), s = qh);
        }
        function g() {
            f || (f = !0, b());
        }
        function R() {
            f && (f = !1, _());
        }
        const N = {
            addNestedSub: m,
            notifyNestedSubs: p,
            handleChangeWrapper: h,
            isSubscribed: y,
            trySubscribe: g,
            tryUnsubscribe: R,
            getListeners: ()=>s
        };
        return N;
    }
    var uy = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", iy = uy(), ry = ()=>typeof navigator < "u" && navigator.product === "ReactNative", cy = ry(), sy = ()=>iy || cy ? A.useLayoutEffect : A.useEffect, oy = sy(), fy = Symbol.for("react-redux-context"), dy = typeof globalThis < "u" ? globalThis : {};
    function hy() {
        if (!A.createContext) return {};
        const u = dy[fy] ??= new Map;
        let i = u.get(A.createContext);
        return i || (i = A.createContext(null), u.set(A.createContext, i)), i;
    }
    var ql = hy();
    function py(u) {
        const { children: i, context: c, serverState: s, store: o } = u, f = A.useMemo(()=>{
            const h = ay(o);
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
        oy(()=>{
            const { subscription: h } = f;
            return h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), m !== o.getState() && h.notifyNestedSubs(), ()=>{
                h.tryUnsubscribe(), h.onStateChange = void 0;
            };
        }, [
            f,
            m
        ]);
        const p = c || ql;
        return A.createElement(p.Provider, {
            value: f
        }, i);
    }
    var my = py;
    function bs(u = ql) {
        return function() {
            return A.useContext(u);
        };
    }
    var cp = bs();
    function sp(u = ql) {
        const i = u === ql ? cp : bs(u), c = ()=>{
            const { store: s } = i();
            return s;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    var yy = sp();
    function vy(u = ql) {
        const i = u === ql ? yy : sp(u), c = ()=>i().dispatch;
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    let gy;
    Zn = vy();
    gy = (u, i)=>u === i;
    function by(u = ql) {
        const i = u === ql ? cp : bs(u), c = (s, o = {})=>{
            const { equalityFn: f = gy } = typeof o == "function" ? {
                equalityFn: o
            } : o, m = i(), { store: p, subscription: h, getServerState: y } = m;
            A.useRef(!0);
            const b = A.useCallback({
                [s.name] (g) {
                    return s(g);
                }
            }[s.name], [
                s
            ]), _ = ty.useSyncExternalStoreWithSelector(h.addNestedSub, p.getState, y || p.getState, b, f);
            return A.useDebugValue(_), _;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    un = by();
    function Fe(u) {
        return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Sy = typeof Symbol == "function" && Symbol.observable || "@@observable", kh = Sy, is = ()=>Math.random().toString(36).substring(7).split("").join("."), Ey = {
        INIT: `@@redux/INIT${is()}`,
        REPLACE: `@@redux/REPLACE${is()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${is()}`
    }, Di = Ey;
    function op(u) {
        if (typeof u != "object" || u === null) return !1;
        let i = u;
        for(; Object.getPrototypeOf(i) !== null;)i = Object.getPrototypeOf(i);
        return Object.getPrototypeOf(u) === i || Object.getPrototypeOf(u) === null;
    }
    function Ss(u, i, c) {
        if (typeof u != "function") throw new Error(Fe(2));
        if (typeof i == "function" && typeof c == "function" || typeof c == "function" && typeof arguments[3] == "function") throw new Error(Fe(0));
        if (typeof i == "function" && typeof c > "u" && (c = i, i = void 0), typeof c < "u") {
            if (typeof c != "function") throw new Error(Fe(1));
            return c(Ss)(u, i);
        }
        let s = u, o = i, f = new Map, m = f, p = 0, h = !1;
        function y() {
            m === f && (m = new Map, f.forEach((z, w)=>{
                m.set(w, z);
            }));
        }
        function b() {
            if (h) throw new Error(Fe(3));
            return o;
        }
        function _(z) {
            if (typeof z != "function") throw new Error(Fe(4));
            if (h) throw new Error(Fe(5));
            let w = !0;
            y();
            const Q = p++;
            return m.set(Q, z), function() {
                if (w) {
                    if (h) throw new Error(Fe(6));
                    w = !1, y(), m.delete(Q), f = null;
                }
            };
        }
        function g(z) {
            if (!op(z)) throw new Error(Fe(7));
            if (typeof z.type > "u") throw new Error(Fe(8));
            if (typeof z.type != "string") throw new Error(Fe(17));
            if (h) throw new Error(Fe(9));
            try {
                h = !0, o = s(o, z);
            } finally{
                h = !1;
            }
            return (f = m).forEach((Q)=>{
                Q();
            }), z;
        }
        function R(z) {
            if (typeof z != "function") throw new Error(Fe(10));
            s = z, g({
                type: Di.REPLACE
            });
        }
        function N() {
            const z = _;
            return {
                subscribe (w) {
                    if (typeof w != "object" || w === null) throw new Error(Fe(11));
                    function Q() {
                        const X = w;
                        X.next && X.next(b());
                    }
                    return Q(), {
                        unsubscribe: z(Q)
                    };
                },
                [kh] () {
                    return this;
                }
            };
        }
        return g({
            type: Di.INIT
        }), {
            dispatch: g,
            subscribe: _,
            getState: b,
            replaceReducer: R,
            [kh]: N
        };
    }
    function _y(u) {
        Object.keys(u).forEach((i)=>{
            const c = u[i];
            if (typeof c(void 0, {
                type: Di.INIT
            }) > "u") throw new Error(Fe(12));
            if (typeof c(void 0, {
                type: Di.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(Fe(13));
        });
    }
    function fp(u) {
        const i = Object.keys(u), c = {};
        for(let f = 0; f < i.length; f++){
            const m = i[f];
            typeof u[m] == "function" && (c[m] = u[m]);
        }
        const s = Object.keys(c);
        let o;
        try {
            _y(c);
        } catch (f) {
            o = f;
        }
        return function(m = {}, p) {
            if (o) throw o;
            let h = !1;
            const y = {};
            for(let b = 0; b < s.length; b++){
                const _ = s[b], g = c[_], R = m[_], N = g(R, p);
                if (typeof N > "u") throw p && p.type, new Error(Fe(14));
                y[_] = N, h = h || N !== R;
            }
            return h = h || s.length !== Object.keys(m).length, h ? y : m;
        };
    }
    function Bi(...u) {
        return u.length === 0 ? (i)=>i : u.length === 1 ? u[0] : u.reduce((i, c)=>(...s)=>i(c(...s)));
    }
    function Ty(...u) {
        return (i)=>(c, s)=>{
                const o = i(c, s);
                let f = ()=>{
                    throw new Error(Fe(15));
                };
                const m = {
                    getState: o.getState,
                    dispatch: (h, ...y)=>f(h, ...y)
                }, p = u.map((h)=>h(m));
                return f = Bi(...p)(o.dispatch), {
                    ...o,
                    dispatch: f
                };
            };
    }
    function Ry(u, i = `expected a function, instead received ${typeof u}`) {
        if (typeof u != "function") throw new TypeError(i);
    }
    function Ay(u, i = `expected an object, instead received ${typeof u}`) {
        if (typeof u != "object") throw new TypeError(i);
    }
    function Oy(u, i = "expected all items to be functions, instead received the following types: ") {
        if (!u.every((c)=>typeof c == "function")) {
            const c = u.map((s)=>typeof s == "function" ? `function ${s.name || "unnamed"}()` : typeof s).join(", ");
            throw new TypeError(`${i}[${c}]`);
        }
    }
    var jh = (u)=>Array.isArray(u) ? u : [
            u
        ];
    function Ny(u) {
        const i = Array.isArray(u[0]) ? u[0] : u;
        return Oy(i, "createSelector expects all input-selectors to be functions, but received the following types: "), i;
    }
    function xy(u, i) {
        const c = [], { length: s } = u;
        for(let o = 0; o < s; o++)c.push(u[o].apply(null, i));
        return c;
    }
    var My = class {
        constructor(u){
            this.value = u;
        }
        deref() {
            return this.value;
        }
    }, Cy = typeof WeakRef < "u" ? WeakRef : My, Dy = 0, Hh = 1;
    function Ti() {
        return {
            s: Dy,
            v: void 0,
            o: null,
            p: null
        };
    }
    function dp(u, i = {}) {
        let c = Ti();
        const { resultEqualityCheck: s } = i;
        let o, f = 0;
        function m() {
            let p = c;
            const { length: h } = arguments;
            for(let _ = 0, g = h; _ < g; _++){
                const R = arguments[_];
                if (typeof R == "function" || typeof R == "object" && R !== null) {
                    let N = p.o;
                    N === null && (p.o = N = new WeakMap);
                    const C = N.get(R);
                    C === void 0 ? (p = Ti(), N.set(R, p)) : p = C;
                } else {
                    let N = p.p;
                    N === null && (p.p = N = new Map);
                    const C = N.get(R);
                    C === void 0 ? (p = Ti(), N.set(R, p)) : p = C;
                }
            }
            const y = p;
            let b;
            if (p.s === Hh) b = p.v;
            else if (b = u.apply(null, arguments), f++, s) {
                const _ = o?.deref?.() ?? o;
                _ != null && s(_, b) && (b = _, f !== 0 && f--), o = typeof b == "object" && b !== null || typeof b == "function" ? new Cy(b) : b;
            }
            return y.s = Hh, y.v = b, b;
        }
        return m.clearCache = ()=>{
            c = Ti(), m.resetResultsCount();
        }, m.resultsCount = ()=>f, m.resetResultsCount = ()=>{
            f = 0;
        }, m;
    }
    function By(u, ...i) {
        const c = typeof u == "function" ? {
            memoize: u,
            memoizeOptions: i
        } : u, s = (...o)=>{
            let f = 0, m = 0, p, h = {}, y = o.pop();
            typeof y == "object" && (h = y, y = o.pop()), Ry(y, `createSelector expects an output function after the inputs, but received: [${typeof y}]`);
            const b = {
                ...c,
                ...h
            }, { memoize: _, memoizeOptions: g = [], argsMemoize: R = dp, argsMemoizeOptions: N = [] } = b, C = jh(g), z = jh(N), w = Ny(o), Q = _(function() {
                return f++, y.apply(null, arguments);
            }, ...C), U = R(function() {
                m++;
                const Y = xy(w, arguments);
                return p = Q.apply(null, Y), p;
            }, ...z);
            return Object.assign(U, {
                resultFunc: y,
                memoizedResultFunc: Q,
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
    var Es = By(dp), wy = Object.assign((u, i = Es)=>{
        Ay(u, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof u}`);
        const c = Object.keys(u), s = c.map((f)=>u[f]);
        return i(s, (...f)=>f.reduce((m, p, h)=>(m[c[h]] = p, m), {}));
    }, {
        withTypes: ()=>wy
    });
    function hp(u) {
        return ({ dispatch: c, getState: s })=>(o)=>(f)=>typeof f == "function" ? f(c, s, u) : o(f);
    }
    var zy = hp(), Uy = hp, Py = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Bi : Bi.apply(null, arguments);
    }, pp = class Wa extends Array {
        constructor(...i){
            super(...i), Object.setPrototypeOf(this, Wa.prototype);
        }
        static get [Symbol.species]() {
            return Wa;
        }
        concat(...i) {
            return super.concat.apply(this, i);
        }
        prepend(...i) {
            return i.length === 1 && Array.isArray(i[0]) ? new Wa(...i[0].concat(this)) : new Wa(...i.concat(this));
        }
    };
    function qy(u) {
        return typeof u == "boolean";
    }
    var ky = ()=>function(i) {
            const { thunk: c = !0, immutableCheck: s = !0, serializableCheck: o = !0, actionCreatorCheck: f = !0 } = i ?? {};
            let m = new pp;
            return c && (qy(c) ? m.push(zy) : m.push(Uy(c.extraArgument))), m;
        }, jy = "RTK_autoBatch", Lh = (u)=>(i)=>{
            setTimeout(i, u);
        }, Hy = (u = {
        type: "raf"
    })=>(i)=>(...c)=>{
                const s = i(...c);
                let o = !0, f = !1, m = !1;
                const p = new Set, h = u.type === "tick" ? queueMicrotask : u.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Lh(10) : u.type === "callback" ? u.queueNotification : Lh(u.timeout), y = ()=>{
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
                            return o = !b?.meta?.[jy], f = !o, f && (m || (m = !0, h(y))), s.dispatch(b);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, Ly = (u)=>function(c) {
            const { autoBatch: s = !0 } = c ?? {};
            let o = new pp(u);
            return s && o.push(Hy(typeof s == "object" ? s : void 0)), o;
        };
    function Qy(u) {
        const i = ky(), { reducer: c = void 0, middleware: s, devTools: o = !0, preloadedState: f = void 0, enhancers: m = void 0 } = u || {};
        let p;
        if (typeof c == "function") p = c;
        else if (op(c)) p = fp(c);
        else throw new Error(Ky(1));
        let h;
        typeof s == "function" ? h = s(i) : h = i();
        let y = Bi;
        o && (y = Py({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const b = Ty(...h), _ = Ly(b);
        let g = typeof m == "function" ? m(_) : _();
        const R = y(...g);
        return Ss(p, f, R);
    }
    function Ky(u) {
        return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var _s = "persist:", mp = "persist/FLUSH", Ts = "persist/REHYDRATE", yp = "persist/PAUSE", vp = "persist/PERSIST", gp = "persist/PURGE", bp = "persist/REGISTER", Yy = -1;
    function Ni(u) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ni = function(c) {
            return typeof c;
        } : Ni = function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        }, Ni(u);
    }
    function Qh(u, i) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(u);
            i && (s = s.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, s);
        }
        return c;
    }
    function Gy(u) {
        for(var i = 1; i < arguments.length; i++){
            var c = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Qh(c, !0).forEach(function(s) {
                Vy(u, s, c[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Qh(c).forEach(function(s) {
                Object.defineProperty(u, s, Object.getOwnPropertyDescriptor(c, s));
            });
        }
        return u;
    }
    function Vy(u, i, c) {
        return i in u ? Object.defineProperty(u, i, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = c, u;
    }
    function Xy(u, i, c, s) {
        s.debug;
        var o = Gy({}, c);
        return u && Ni(u) === "object" && Object.keys(u).forEach(function(f) {
            f !== "_persist" && i[f] === c[f] && (o[f] = u[f]);
        }), o;
    }
    function Zy(u) {
        var i = u.blacklist || null, c = u.whitelist || null, s = u.transforms || [], o = u.throttle || 0, f = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : _s).concat(u.key), m = u.storage, p;
        u.serialize === !1 ? p = function(Y) {
            return Y;
        } : typeof u.serialize == "function" ? p = u.serialize : p = $y;
        var h = u.writeFailHandler || null, y = {}, b = {}, _ = [], g = null, R = null, N = function(Y) {
            Object.keys(Y).forEach(function(J) {
                w(J) && y[J] !== Y[J] && _.indexOf(J) === -1 && _.push(J);
            }), Object.keys(y).forEach(function(J) {
                Y[J] === void 0 && w(J) && _.indexOf(J) === -1 && y[J] !== void 0 && _.push(J);
            }), g === null && (g = setInterval(C, o)), y = Y;
        };
        function C() {
            if (_.length === 0) {
                g && clearInterval(g), g = null;
                return;
            }
            var X = _.shift(), Y = s.reduce(function(J, te) {
                return te.in(J, X, y);
            }, y[X]);
            if (Y !== void 0) try {
                b[X] = p(Y);
            } catch (J) {
                console.error("redux-persist/createPersistoid: error serializing state", J);
            }
            else delete b[X];
            _.length === 0 && z();
        }
        function z() {
            Object.keys(b).forEach(function(X) {
                y[X] === void 0 && delete b[X];
            }), R = m.setItem(f, p(b)).catch(Q);
        }
        function w(X) {
            return !(c && c.indexOf(X) === -1 && X !== "_persist" || i && i.indexOf(X) !== -1);
        }
        function Q(X) {
            h && h(X);
        }
        var U = function() {
            for(; _.length !== 0;)C();
            return R || Promise.resolve();
        };
        return {
            update: N,
            flush: U
        };
    }
    function $y(u) {
        return JSON.stringify(u);
    }
    function Jy(u) {
        var i = u.transforms || [], c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : _s).concat(u.key), s = u.storage;
        u.debug;
        var o;
        return u.deserialize === !1 ? o = function(m) {
            return m;
        } : typeof u.deserialize == "function" ? o = u.deserialize : o = Fy, s.getItem(c).then(function(f) {
            if (f) try {
                var m = {}, p = o(f);
                return Object.keys(p).forEach(function(h) {
                    m[h] = i.reduceRight(function(y, b) {
                        return b.out(y, h, p);
                    }, o(p[h]));
                }), m;
            } catch (h) {
                throw h;
            }
            else return;
        });
    }
    function Fy(u) {
        return JSON.parse(u);
    }
    function Wy(u) {
        var i = u.storage, c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : _s).concat(u.key);
        return i.removeItem(c, Iy);
    }
    function Iy(u) {}
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
    function ul(u) {
        for(var i = 1; i < arguments.length; i++){
            var c = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Kh(c, !0).forEach(function(s) {
                ev(u, s, c[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Kh(c).forEach(function(s) {
                Object.defineProperty(u, s, Object.getOwnPropertyDescriptor(c, s));
            });
        }
        return u;
    }
    function ev(u, i, c) {
        return i in u ? Object.defineProperty(u, i, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = c, u;
    }
    function tv(u, i) {
        if (u == null) return {};
        var c = lv(u, i), s, o;
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            for(o = 0; o < f.length; o++)s = f[o], !(i.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(u, s) && (c[s] = u[s]);
        }
        return c;
    }
    function lv(u, i) {
        if (u == null) return {};
        var c = {}, s = Object.keys(u), o, f;
        for(f = 0; f < s.length; f++)o = s[f], !(i.indexOf(o) >= 0) && (c[o] = u[o]);
        return c;
    }
    var nv = 5e3;
    function av(u, i) {
        var c = u.version !== void 0 ? u.version : Yy;
        u.debug;
        var s = u.stateReconciler === void 0 ? Xy : u.stateReconciler, o = u.getStoredState || Jy, f = u.timeout !== void 0 ? u.timeout : nv, m = null, p = !1, h = !0, y = function(_) {
            return _._persist.rehydrated && m && !h && m.update(_), _;
        };
        return function(b, _) {
            var g = b || {}, R = g._persist, N = tv(g, [
                "_persist"
            ]), C = N;
            if (_.type === vp) {
                var z = !1, w = function(pe, ue) {
                    z || (_.rehydrate(u.key, pe, ue), z = !0);
                };
                if (f && setTimeout(function() {
                    !z && w(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(u.key, '"')));
                }, f), h = !1, m || (m = Zy(u)), R) return ul({}, i(C, _), {
                    _persist: R
                });
                if (typeof _.rehydrate != "function" || typeof _.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return _.register(u.key), o(u).then(function(te) {
                    var pe = u.migrate || function(ue, xe) {
                        return Promise.resolve(ue);
                    };
                    pe(te, c).then(function(ue) {
                        w(ue);
                    }, function(ue) {
                        w(void 0, ue);
                    });
                }, function(te) {
                    w(void 0, te);
                }), ul({}, i(C, _), {
                    _persist: {
                        version: c,
                        rehydrated: !1
                    }
                });
            } else {
                if (_.type === gp) return p = !0, _.result(Wy(u)), ul({}, i(C, _), {
                    _persist: R
                });
                if (_.type === mp) return _.result(m && m.flush()), ul({}, i(C, _), {
                    _persist: R
                });
                if (_.type === yp) h = !0;
                else if (_.type === Ts) {
                    if (p) return ul({}, C, {
                        _persist: ul({}, R, {
                            rehydrated: !0
                        })
                    });
                    if (_.key === u.key) {
                        var Q = i(C, _), U = _.payload, X = s !== !1 && U !== void 0 ? s(U, b, Q, u) : Q, Y = ul({}, X, {
                            _persist: ul({}, R, {
                                rehydrated: !0
                            })
                        });
                        return y(Y);
                    }
                }
            }
            if (!R) return i(b, _);
            var J = i(C, _);
            return J === C ? b : y(ul({}, J, {
                _persist: R
            }));
        };
    }
    function Yh(u) {
        return rv(u) || iv(u) || uv();
    }
    function uv() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function iv(u) {
        if (Symbol.iterator in Object(u) || Object.prototype.toString.call(u) === "[object Arguments]") return Array.from(u);
    }
    function rv(u) {
        if (Array.isArray(u)) {
            for(var i = 0, c = new Array(u.length); i < u.length; i++)c[i] = u[i];
            return c;
        }
    }
    function Gh(u, i) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(u);
            i && (s = s.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, s);
        }
        return c;
    }
    function hs(u) {
        for(var i = 1; i < arguments.length; i++){
            var c = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Gh(c, !0).forEach(function(s) {
                cv(u, s, c[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Gh(c).forEach(function(s) {
                Object.defineProperty(u, s, Object.getOwnPropertyDescriptor(c, s));
            });
        }
        return u;
    }
    function cv(u, i, c) {
        return i in u ? Object.defineProperty(u, i, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = c, u;
    }
    var Sp = {
        registry: [],
        bootstrapped: !1
    }, sv = function() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Sp, c = arguments.length > 1 ? arguments[1] : void 0;
        switch(c.type){
            case bp:
                return hs({}, i, {
                    registry: [].concat(Yh(i.registry), [
                        c.key
                    ])
                });
            case Ts:
                var s = i.registry.indexOf(c.key), o = Yh(i.registry);
                return o.splice(s, 1), hs({}, i, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return i;
        }
    };
    function ov(u, i, c) {
        var s = Ss(sv, Sp, void 0), o = function(h) {
            s.dispatch({
                type: bp,
                key: h
            });
        }, f = function(h, y, b) {
            var _ = {
                type: Ts,
                payload: y,
                err: b,
                key: h
            };
            u.dispatch(_), s.dispatch(_);
        }, m = hs({}, s, {
            purge: function() {
                var h = [];
                return u.dispatch({
                    type: gp,
                    result: function(b) {
                        h.push(b);
                    }
                }), Promise.all(h);
            },
            flush: function() {
                var h = [];
                return u.dispatch({
                    type: mp,
                    result: function(b) {
                        h.push(b);
                    }
                }), Promise.all(h);
            },
            pause: function() {
                u.dispatch({
                    type: yp
                });
            },
            persist: function() {
                u.dispatch({
                    type: vp,
                    register: o,
                    rehydrate: f
                });
            }
        });
        return m.persist(), m;
    }
    const lt = "w", Mt = "b", Xe = "p", ps = "n", xi = "b", Ia = "r", Pl = "q", He = "k", rs = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    class Ri {
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
            const { color: s, piece: o, from: f, to: m, flags: p, captured: h, promotion: y } = c, b = We(f), _ = We(m);
            this.color = s, this.piece = o, this.from = b, this.to = _, this.san = i._moveToSan(c, i._moves({
                legal: !0
            })), this.lan = b + _, this.before = i.fen(), i._makeMove(c), this.after = i.fen(), i._undoMove(), this.flags = "";
            for(const g in re)re[g] & p && (this.flags += ln[g]);
            h && (this.captured = h), y && (this.promotion = y, this.lan += y);
        }
        isCapture() {
            return this.flags.indexOf(ln.CAPTURE) > -1;
        }
        isPromotion() {
            return this.flags.indexOf(ln.PROMOTION) > -1;
        }
        isEnPassant() {
            return this.flags.indexOf(ln.EP_CAPTURE) > -1;
        }
        isKingsideCastle() {
            return this.flags.indexOf(ln.KSIDE_CASTLE) > -1;
        }
        isQueensideCastle() {
            return this.flags.indexOf(ln.QSIDE_CASTLE) > -1;
        }
        isBigPawn() {
            return this.flags.indexOf(ln.BIG_PAWN) > -1;
        }
    }
    const ot = -1, ln = {
        NORMAL: "n",
        CAPTURE: "c",
        BIG_PAWN: "b",
        EP_CAPTURE: "e",
        PROMOTION: "p",
        KSIDE_CASTLE: "k",
        QSIDE_CASTLE: "q"
    }, re = {
        NORMAL: 1,
        CAPTURE: 2,
        BIG_PAWN: 4,
        EP_CAPTURE: 8,
        PROMOTION: 16,
        KSIDE_CASTLE: 32,
        QSIDE_CASTLE: 64
    }, ms = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, fv = {
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
    }, dv = {
        ...ms,
        ...fv
    }, ae = {
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
    }, Vh = {
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
    }, hv = [
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
    ], pv = [
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
    ], mv = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, yv = "pnbrqkPNBRQK", Xh = [
        ps,
        xi,
        Ia,
        Pl
    ], vv = 7, gv = 6, bv = 1, Sv = 0, Ai = {
        [He]: re.KSIDE_CASTLE,
        [Pl]: re.QSIDE_CASTLE
    }, zl = {
        w: [
            {
                square: ae.a1,
                flag: re.QSIDE_CASTLE
            },
            {
                square: ae.h1,
                flag: re.KSIDE_CASTLE
            }
        ],
        b: [
            {
                square: ae.a8,
                flag: re.QSIDE_CASTLE
            },
            {
                square: ae.h8,
                flag: re.KSIDE_CASTLE
            }
        ]
    }, Ev = {
        b: bv,
        w: gv
    }, _v = [
        "1-0",
        "0-1",
        "1/2-1/2",
        "*"
    ];
    function nn(u) {
        return u >> 4;
    }
    function nu(u) {
        return u & 15;
    }
    function Ep(u) {
        return "0123456789".indexOf(u) !== -1;
    }
    function We(u) {
        const i = nu(u), c = nn(u);
        return "abcdefgh".substring(i, i + 1) + "87654321".substring(c, c + 1);
    }
    function $a(u) {
        return u === lt ? Mt : lt;
    }
    function Tv(u) {
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
            for(let y = 0; y < o[m].length; y++)if (Ep(o[m][y])) {
                if (h) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                p += parseInt(o[m][y], 10), h = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(o[m][y])) return {
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
    function Rv(u, i) {
        const c = u.from, s = u.to, o = u.piece;
        let f = 0, m = 0, p = 0;
        for(let h = 0, y = i.length; h < y; h++){
            const b = i[h].from, _ = i[h].to, g = i[h].piece;
            o === g && c !== b && s === _ && (f++, nn(c) === nn(b) && m++, nu(c) === nu(b) && p++);
        }
        return f > 0 ? m > 0 && p > 0 ? We(c) : p > 0 ? We(c).charAt(1) : We(c).charAt(0) : "";
    }
    function Ul(u, i, c, s, o, f = void 0, m = re.NORMAL) {
        const p = nn(s);
        if (o === Xe && (p === vv || p === Sv)) for(let h = 0; h < Xh.length; h++){
            const y = Xh[h];
            u.push({
                color: i,
                from: c,
                to: s,
                piece: o,
                captured: f,
                promotion: y,
                flags: m | re.PROMOTION
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
    function Zh(u) {
        let i = u.charAt(0);
        return i >= "a" && i <= "h" ? u.match(/[a-h]\d.*[a-h]\d/) ? void 0 : Xe : (i = i.toLowerCase(), i === "o" ? He : i);
    }
    function ss(u) {
        return u.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function os(u) {
        return u.split(" ").slice(0, 4).join(" ");
    }
    Ui = class {
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
                ...dv
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
                const { ok: p, error: h } = Tv(i);
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
                else if (Ep(h)) m += parseInt(h, 10);
                else {
                    const y = h < "a" ? lt : Mt;
                    this._put({
                        type: h.toLowerCase(),
                        color: y
                    }, We(m)), m++;
                }
            }
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= re.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= re.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= re.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= re.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? ot : ae[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(i), this._incPositionCount(i);
        }
        fen() {
            let i = 0, c = "";
            for(let f = ae.a8; f <= ae.h1; f++){
                if (this._board[f]) {
                    i > 0 && (c += i, i = 0);
                    const { color: m, type: p } = this._board[f];
                    c += m === lt ? p.toUpperCase() : p.toLowerCase();
                } else i++;
                f + 1 & 136 && (i > 0 && (c += i), f !== ae.h1 && (c += "/"), i = 0, f += 8);
            }
            let s = "";
            this._castling[lt] & re.KSIDE_CASTLE && (s += "K"), this._castling[lt] & re.QSIDE_CASTLE && (s += "Q"), this._castling[Mt] & re.KSIDE_CASTLE && (s += "k"), this._castling[Mt] & re.QSIDE_CASTLE && (s += "q"), s = s || "-";
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
                            flags: re.EP_CAPTURE
                        });
                        const y = !this._isKingAttacked(h);
                        if (this._undoMove(), y) {
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
            return this._board[ae[i]];
        }
        findPiece(i) {
            const c = [];
            for(let s = ae.a8; s <= ae.h1; s++){
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
            if (yv.indexOf(i.toLowerCase()) === -1 || !(s in ae)) return !1;
            const o = ae[s];
            if (i == He && !(this._kings[c] == ot || this._kings[c] == o)) return !1;
            const f = this._board[o];
            return f && f.type === He && (this._kings[f.color] = ot), this._board[o] = {
                type: i,
                color: c
            }, i === He && (this._kings[c] = o), !0;
        }
        remove(i) {
            const c = this.get(i);
            return delete this._board[ae[i]], c && c.type === He && (this._kings[c.color] = ot), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), c;
        }
        _updateCastlingRights() {
            const i = this._board[ae.e1]?.type === He && this._board[ae.e1]?.color === lt, c = this._board[ae.e8]?.type === He && this._board[ae.e8]?.color === Mt;
            (!i || this._board[ae.a1]?.type !== Ia || this._board[ae.a1]?.color !== lt) && (this._castling.w &= -65), (!i || this._board[ae.h1]?.type !== Ia || this._board[ae.h1]?.color !== lt) && (this._castling.w &= -33), (!c || this._board[ae.a8]?.type !== Ia || this._board[ae.a8]?.color !== Mt) && (this._castling.b &= -65), (!c || this._board[ae.h8]?.type !== Ia || this._board[ae.h8]?.color !== Mt) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === ot) return;
            const i = this._epSquare + (this._turn === lt ? -16 : 16), c = this._epSquare + (this._turn === lt ? 16 : -16), s = [
                c + 1,
                c - 1
            ];
            if (this._board[i] !== null || this._board[this._epSquare] !== null || this._board[c]?.color !== $a(this._turn) || this._board[c]?.type !== Xe) {
                this._epSquare = ot;
                return;
            }
            const o = (f)=>!(f & 136) && this._board[f]?.color === this._turn && this._board[f]?.type === Xe;
            s.some(o) || (this._epSquare = ot);
        }
        _attacked(i, c, s) {
            const o = [];
            for(let f = ae.a8; f <= ae.h1; f++){
                if (f & 136) {
                    f += 7;
                    continue;
                }
                if (this._board[f] === void 0 || this._board[f].color !== i) continue;
                const m = this._board[f], p = f - c;
                if (p === 0) continue;
                const h = p + 119;
                if (hv[h] & mv[m.type]) {
                    if (m.type === Xe) {
                        if (p > 0 && m.color === lt || p <= 0 && m.color === Mt) if (s) o.push(We(f));
                        else return !0;
                        continue;
                    }
                    if (m.type === "n" || m.type === "k") if (s) {
                        o.push(We(f));
                        continue;
                    } else return !0;
                    const y = pv[h];
                    let b = f + y, _ = !1;
                    for(; b !== c;){
                        if (this._board[b] != null) {
                            _ = !0;
                            break;
                        }
                        b += y;
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
            return c ? this._attacked(c, ae[i], !0) : this._attacked(this._turn, ae[i], !0);
        }
        _isKingAttacked(i) {
            const c = this._kings[i];
            return c === -1 ? !1 : this._attacked($a(i), c);
        }
        isAttacked(i, c) {
            return this._attacked(c, ae[i]);
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
            for(let f = ae.a8; f <= ae.h1; f++){
                if (o = (o + 1) % 2, f & 136) {
                    f += 7;
                    continue;
                }
                const m = this._board[f];
                m && (i[m.type] = m.type in i ? i[m.type] + 1 : 1, m.type === xi && c.push(o), s++);
            }
            if (s === 2) return !0;
            if (s === 3 && (i[xi] === 1 || i[ps] === 1)) return !0;
            if (s === i[xi] + 2) {
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
            return i ? o.map((f)=>new Ri(this, f)) : o.map((f)=>this._moveToSan(f, o));
        }
        _moves({ legal: i = !0, piece: c = void 0, square: s = void 0 } = {}) {
            const o = s ? s.toLowerCase() : void 0, f = c?.toLowerCase(), m = [], p = this._turn, h = $a(p);
            let y = ae.a8, b = ae.h1, _ = !1;
            if (o) if (o in ae) y = b = ae[o], _ = !0;
            else return [];
            for(let R = y; R <= b; R++){
                if (R & 136) {
                    R += 7;
                    continue;
                }
                if (!this._board[R] || this._board[R].color === h) continue;
                const { type: N } = this._board[R];
                let C;
                if (N === Xe) {
                    if (f && f !== N) continue;
                    C = R + cs[p][0], this._board[C] || (Ul(m, p, R, C, Xe), C = R + cs[p][1], Ev[p] === nn(R) && !this._board[C] && Ul(m, p, R, C, Xe, void 0, re.BIG_PAWN));
                    for(let z = 2; z < 4; z++)C = R + cs[p][z], !(C & 136) && (this._board[C]?.color === h ? Ul(m, p, R, C, Xe, this._board[C].type, re.CAPTURE) : C === this._epSquare && Ul(m, p, R, C, Xe, Xe, re.EP_CAPTURE));
                } else {
                    if (f && f !== N) continue;
                    for(let z = 0, w = Vh[N].length; z < w; z++){
                        const Q = Vh[N][z];
                        for(C = R; C += Q, !(C & 136);){
                            if (!this._board[C]) Ul(m, p, R, C, N);
                            else {
                                if (this._board[C].color === p) break;
                                Ul(m, p, R, C, N, this._board[C].type, re.CAPTURE);
                                break;
                            }
                            if (N === ps || N === He) break;
                        }
                    }
                }
            }
            if ((f === void 0 || f === He) && (!_ || b === this._kings[p])) {
                if (this._castling[p] & re.KSIDE_CASTLE) {
                    const R = this._kings[p], N = R + 2;
                    !this._board[R + 1] && !this._board[N] && !this._attacked(h, this._kings[p]) && !this._attacked(h, R + 1) && !this._attacked(h, N) && Ul(m, p, this._kings[p], N, He, void 0, re.KSIDE_CASTLE);
                }
                if (this._castling[p] & re.QSIDE_CASTLE) {
                    const R = this._kings[p], N = R - 2;
                    !this._board[R - 1] && !this._board[R - 2] && !this._board[R - 3] && !this._attacked(h, this._kings[p]) && !this._attacked(h, R - 1) && !this._attacked(h, N) && Ul(m, p, this._kings[p], N, He, void 0, re.QSIDE_CASTLE);
                }
            }
            if (!i || this._kings[p] === -1) return m;
            const g = [];
            for(let R = 0, N = m.length; R < N; R++)this._makeMove(m[R]), this._isKingAttacked(p) || g.push(m[R]), this._undoMove();
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
            const o = new Ri(this, s);
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
            const c = this._turn, s = $a(c);
            if (this._push(i), this._board[i.to] = this._board[i.from], delete this._board[i.from], i.flags & re.EP_CAPTURE && (this._turn === Mt ? delete this._board[i.to - 16] : delete this._board[i.to + 16]), i.promotion && (this._board[i.to] = {
                type: i.promotion,
                color: c
            }), this._board[i.to].type === He) {
                if (this._kings[c] = i.to, i.flags & re.KSIDE_CASTLE) {
                    const o = i.to - 1, f = i.to + 1;
                    this._board[o] = this._board[f], delete this._board[f];
                } else if (i.flags & re.QSIDE_CASTLE) {
                    const o = i.to + 1, f = i.to - 2;
                    this._board[o] = this._board[f], delete this._board[f];
                }
                this._castling[c] = 0;
            }
            if (this._castling[c]) {
                for(let o = 0, f = zl[c].length; o < f; o++)if (i.from === zl[c][o].square && this._castling[c] & zl[c][o].flag) {
                    this._castling[c] ^= zl[c][o].flag;
                    break;
                }
            }
            if (this._castling[s]) {
                for(let o = 0, f = zl[s].length; o < f; o++)if (i.to === zl[s][o].square && this._castling[s] & zl[s][o].flag) {
                    this._castling[s] ^= zl[s][o].flag;
                    break;
                }
            }
            i.flags & re.BIG_PAWN ? c === Mt ? this._epSquare = i.to - 16 : this._epSquare = i.to + 16 : this._epSquare = ot, i.piece === Xe ? this._halfMoves = 0 : i.flags & (re.CAPTURE | re.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, c === Mt && this._moveNumber++, this._turn = s;
        }
        undo() {
            const i = this._undoMove();
            if (i) {
                const c = new Ri(this, i);
                return this._decPositionCount(c.after), c;
            }
            return null;
        }
        _undoMove() {
            const i = this._history.pop();
            if (i === void 0) return null;
            const c = i.move;
            this._kings = i.kings, this._turn = i.turn, this._castling = i.castling, this._epSquare = i.epSquare, this._halfMoves = i.halfMoves, this._moveNumber = i.moveNumber;
            const s = this._turn, o = $a(s);
            if (this._board[c.from] = this._board[c.to], this._board[c.from].type = c.piece, delete this._board[c.to], c.captured) if (c.flags & re.EP_CAPTURE) {
                let f;
                s === Mt ? f = c.to - 16 : f = c.to + 16, this._board[f] = {
                    type: Xe,
                    color: o
                };
            } else this._board[c.to] = {
                type: c.captured,
                color: o
            };
            if (c.flags & (re.KSIDE_CASTLE | re.QSIDE_CASTLE)) {
                let f, m;
                c.flags & re.KSIDE_CASTLE ? (f = c.to + 1, m = c.to - 1) : (f = c.to - 2, m = c.to + 1), this._board[f] = this._board[m], delete this._board[m];
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
                    const N = g.length > 0 ? " " : "";
                    g = `${g}${N}{${R}}`;
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
            const y = function() {
                return s.length > 0 && s[s.length - 1] === " " ? (s.pop(), !0) : !1;
            }, b = function(g, R) {
                for (const N of R.split(" "))if (N) {
                    if (g + N.length > c) {
                        for(; y();)g--;
                        s.push(i), g = 0;
                    }
                    s.push(N), g += N.length, s.push(" "), g++;
                }
                return y() && g--, g;
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
            return this._header[i] = c ?? ms[i] ?? null, this.getHeaders();
        }
        removeHeader(i) {
            return i in this._header ? (this._header[i] = ms[i] || null, !0) : !1;
        }
        getHeaders() {
            const i = {};
            for (const [c, s] of Object.entries(this._header))s !== null && (i[c] = s);
            return i;
        }
        loadPgn(i, { strict: c = !1, newlineChar: s = `\r?
` } = {}) {
            function o(U) {
                return U.replace(/\\/g, "\\");
            }
            function f(U) {
                const X = {}, Y = U.split(new RegExp(o(s)));
                let J = "", te = "";
                for(let pe = 0; pe < Y.length; pe++){
                    const ue = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    J = Y[pe].replace(ue, "$1"), te = Y[pe].replace(ue, "$2"), J.trim().length > 0 && (X[J] = te);
                }
                return X;
            }
            i = i.trim();
            const p = new RegExp("^(\\[((?:" + o(s) + ")|.)*\\])((?:\\s*" + o(s) + "){2}|(?:\\s*" + o(s) + ")*$)").exec(i), h = p && p.length >= 2 ? p[1] : "";
            this.reset();
            const y = f(h);
            let b = "";
            for(const U in y)U.toLowerCase() === "fen" && (b = y[U]), this.header(U, y[U]);
            if (!c) b && this.load(b, {
                preserveHeaders: !0
            });
            else if (y.SetUp === "1") {
                if (!("FEN" in y)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
                this.load(y.FEN, {
                    preserveHeaders: !0
                });
            }
            function _(U) {
                return Array.from(U).map(function(X) {
                    return X.charCodeAt(0) < 128 ? X.charCodeAt(0).toString(16) : encodeURIComponent(X).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function g(U) {
                return U.length == 0 ? "" : decodeURIComponent("%" + (U.match(/.{1,2}/g) || []).join("%"));
            }
            const R = function(U) {
                return U = U.replace(new RegExp(o(s), "g"), " "), `{${_(U.slice(1, U.length - 1))}}`;
            }, N = function(U) {
                if (U.startsWith("{") && U.endsWith("}")) return g(U.slice(1, U.length - 1));
            };
            let C = i.replace(h, "").replace(new RegExp(`({[^}]*})+?|;([^${o(s)}]*)`, "g"), function(U, X, Y) {
                return X !== void 0 ? R(X) : " " + R(`{${Y.slice(1)}}`);
            }).replace(new RegExp(o(s), "g"), " ");
            const z = /(\([^()]+\))+?/g;
            for(; z.test(C);)C = C.replace(z, "");
            C = C.replace(/\d+\.(\.\.)?/g, ""), C = C.replace(/\.\.\./g, ""), C = C.replace(/\$\d+/g, "");
            let w = C.trim().split(new RegExp(/\s+/));
            w = w.filter((U)=>U !== "");
            let Q = "";
            for(let U = 0; U < w.length; U++){
                const X = N(w[U]);
                if (X !== void 0) {
                    this._comments[this.fen()] = X;
                    continue;
                }
                const Y = this._moveFromSan(w[U], c);
                if (Y == null) if (_v.indexOf(w[U]) > -1) Q = w[U];
                else throw new Error(`Invalid move in PGN: ${w[U]}`);
                else Q = "", this._makeMove(Y), this._incPositionCount(this.fen());
            }
            Q && Object.keys(this._header).length && this._header.Result !== Q && this.setHeader("Result", Q);
        }
        _moveToSan(i, c) {
            let s = "";
            if (i.flags & re.KSIDE_CASTLE) s = "O-O";
            else if (i.flags & re.QSIDE_CASTLE) s = "O-O-O";
            else {
                if (i.piece !== Xe) {
                    const o = Rv(i, c);
                    s += i.piece.toUpperCase() + o;
                }
                i.flags & (re.CAPTURE | re.EP_CAPTURE) && (i.piece === Xe && (s += We(i.from)[0]), s += "x"), s += We(i.to), i.promotion && (s += "=" + i.promotion.toUpperCase());
            }
            return this._makeMove(i), this.isCheck() && (this.isCheckmate() ? s += "#" : s += "+"), this._undoMove(), s;
        }
        _moveFromSan(i, c = !1) {
            const s = ss(i);
            let o = Zh(s), f = this._moves({
                legal: !0,
                piece: o
            });
            for(let g = 0, R = f.length; g < R; g++)if (s === ss(this._moveToSan(f[g], f))) return f[g];
            if (c) return null;
            let m, p, h, y, b, _ = !1;
            if (p = s.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), p ? (m = p[1], h = p[2], y = p[3], b = p[4], h.length == 1 && (_ = !0)) : (p = s.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), p && (m = p[1], h = p[2], y = p[3], b = p[4], h.length == 1 && (_ = !0))), o = Zh(s), f = this._moves({
                legal: !0,
                piece: m || o
            }), !y) return null;
            for(let g = 0, R = f.length; g < R; g++)if (h) {
                if ((!m || m.toLowerCase() == f[g].piece) && ae[h] == f[g].from && ae[y] == f[g].to && (!b || b.toLowerCase() == f[g].promotion)) return f[g];
                if (_) {
                    const N = We(f[g].from);
                    if ((!m || m.toLowerCase() == f[g].piece) && ae[y] == f[g].to && (h == N[0] || h == N[1]) && (!b || b.toLowerCase() == f[g].promotion)) return f[g];
                }
            } else if (s === ss(this._moveToSan(f[g], f)).replace("x", "")) return f[g];
            return null;
        }
        ascii() {
            let i = `   +------------------------+
`;
            for(let c = ae.a8; c <= ae.h1; c++){
                if (nu(c) === 0 && (i += " " + "87654321"[nn(c)] + " |"), this._board[c]) {
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
            for(let s = ae.a8; s <= ae.h1; s++)this._board[s] == null ? c.push(null) : c.push({
                square: We(s),
                type: this._board[s].type,
                color: this._board[s].color
            }), s + 1 & 136 && (i.push(c), c = [], s += 8);
            return i;
        }
        squareColor(i) {
            if (i in ae) {
                const c = ae[i];
                return (nn(c) + nu(c)) % 2 === 0 ? "light" : "dark";
            }
            return null;
        }
        history({ verbose: i = !1 } = {}) {
            const c = [], s = [];
            for(; this._history.length > 0;)c.push(this._undoMove());
            for(;;){
                const o = c.pop();
                if (!o) break;
                i ? s.push(new Ri(this, o)) : s.push(this._moveToSan(o, this._moves())), this._makeMove(o);
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
                He,
                Pl
            ])c[o] !== void 0 && (c[o] ? this._castling[i] |= Ai[o] : this._castling[i] &= ~Ai[o]);
            this._updateCastlingRights();
            const s = this.getCastlingRights(i);
            return (c[He] === void 0 || c[He] === s[He]) && (c[Pl] === void 0 || c[Pl] === s[Pl]);
        }
        getCastlingRights(i) {
            return {
                [He]: (this._castling[i] & Ai[He]) !== 0,
                [Pl]: (this._castling[i] & Ai[Pl]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let _p, Tp, Av, Rp, Ov, Ap, Nv, xv, Op, $h, Mv, Np, xp, Mp, Cv, Dv, Cp, Dp, Bp, wp, zp, Up, Rs, Pp, Bv, wv, zv, Uv;
    _p = "MOVE_PIECE";
    Tp = "RESET_GAME";
    Av = "LOAD_GAME";
    Rp = "SET_GAME_OVER";
    Ov = "SET_TIMER_DURATION";
    A2 = (u)=>({
            type: _p,
            payload: u
        });
    O2 = (u)=>({
            type: Tp,
            payload: u
        });
    N2 = (u, i)=>({
            type: Rp,
            payload: {
                isGameOver: u,
                gameResult: i
            }
        });
    Re = {
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
    Ap = [
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
    Nv = [
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
    xv = {
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
    Op = {
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
    $h = {
        fen: Re.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: Re.TIMER_DURATION
    };
    Mv = (u = $h, i)=>{
        switch(i.type){
            case _p:
                try {
                    const c = new Ui(u.fen), s = c.move({
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
            case Tp:
                return {
                    ...$h,
                    moveHistory: [],
                    timerDuration: i.payload
                };
            case Av:
                return {
                    ...u,
                    fen: i.payload.fen,
                    moveHistory: i.payload.moveHistory || []
                };
            case Rp:
                return {
                    ...u,
                    isGameOver: i.payload.isGameOver,
                    gameResult: i.payload.gameResult
                };
            case Ov:
                return {
                    ...u,
                    timerDuration: i.payload
                };
            default:
                return u;
        }
    };
    Np = "FLIP_BOARD";
    xp = "SET_THEME";
    Mp = "SET_SOUND";
    x2 = ()=>({
            type: Np
        });
    M2 = (u)=>({
            type: xp,
            payload: u
        });
    C2 = (u)=>({
            type: Mp,
            payload: u
        });
    Cv = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    Dv = (u = Cv, i)=>{
        switch(i.type){
            case Np:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case xp:
                return {
                    ...u,
                    theme: i.payload
                };
            case Mp:
                return {
                    ...u,
                    enableSound: i.payload
                };
            default:
                return u;
        }
    };
    Cp = "SET_PGN_ANALYSIS_AT_INDEX";
    Dp = "SET_REVIEW_ANALYSIS_COMPLETE";
    Bp = "NEXT";
    wp = "PREV";
    zp = "START_POS";
    Up = "FINAL_POS";
    Rs = "LOAD_PGN";
    Pp = "JUMP_TO_MOVE";
    Bv = "TOGGLE_ENGINE";
    wv = "DISABLE_ENGINE";
    D2 = ()=>({
            type: zp
        });
    B2 = ()=>({
            type: wp
        });
    w2 = ()=>({
            type: Bp
        });
    z2 = ()=>({
            type: Up
        });
    U2 = ({ finalPos: u, moves: i, fens: c, fromToSquares: s, termination: o, result: f, blackPlayerName: m, whitePlayerName: p })=>({
            type: Rs,
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
    P2 = (u)=>({
            type: Pp,
            payload: u
        });
    q2 = (u)=>({
            type: Cp,
            payload: u
        });
    k2 = (u)=>({
            type: Dp,
            payload: u
        });
    zv = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    Uv = (u = zv, i)=>{
        switch(i.type){
            case Bp:
                return u.currentMoveIndex === u.fenLength - 1 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex + 1
                };
            case wp:
                return u.currentMoveIndex === 0 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex - 1
                };
            case zp:
                return {
                    ...u,
                    currentMoveIndex: 0
                };
            case Up:
                return {
                    ...u,
                    currentMoveIndex: u.fenLength - 1
                };
            case Pp:
                return {
                    ...u,
                    currentMoveIndex: i.payload
                };
            case Rs:
                return {
                    ...u,
                    finalFen: i.payload.finalPos,
                    fenLength: i.payload.fens.length,
                    currentMoveIndex: 0
                };
            case Bv:
                return {
                    ...u,
                    engineEnabled: !u.engineEnabled
                };
            case wv:
                return {
                    ...u,
                    engineEnabled: !1
                };
            default:
                return u;
        }
    };
    function qp(u) {
        return Array.from({
            length: u
        }, ()=>({
                evalScore: null,
                bestMove: "",
                moveClassification: null
            }));
    }
    let Pv, qv, kv, jv, Hv, Lv, Qv, Kv, kp, jp, Hp, Lp, Qp, Kp, Yp, Gp, Vp, Xp, Zp, As, Jh, Fh, Yv, Gv, Vv, Xv, Zv, $v, Jv, Fv, Wv, Iv, Wh, eg, tg, lg, ng, ag, ug;
    Pv = {
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
        analysisData: qp(72),
        reviewAnalysisComplete: !1
    };
    qv = (u = Pv, i)=>{
        switch(i.type){
            case Rs:
                return {
                    ...u,
                    finalFen: i.payload.finalPos,
                    moves: i.payload.moves,
                    fens: i.payload.fens,
                    analysisData: qp(i.payload.fens.length),
                    reviewAnalysisComplete: !1,
                    fromToSquares: i.payload.fromToSquares,
                    termination: i.payload.termination,
                    result: i.payload.result,
                    blackPlayerName: i.payload.blackPlayerName,
                    whitePlayerName: i.payload.whitePlayerName
                };
            case Dp:
                return {
                    ...u,
                    reviewAnalysisComplete: !!i.payload
                };
            case Cp:
                {
                    const { index: c, evalScore: s, bestMove: o, moveClassification: f } = i.payload;
                    if (!u.analysisData || c < 0 || c >= u.analysisData.length) return u;
                    const m = u.analysisData.map((p, h)=>h === c ? {
                            evalScore: s,
                            bestMove: o ?? "",
                            moveClassification: f !== void 0 ? f : p.moveClassification ?? null
                        } : p);
                    return {
                        ...u,
                        analysisData: m
                    };
                }
            default:
                return u;
        }
    };
    kv = "TOGGLE_ENGINE";
    jv = "SET_MULTIPV";
    Hv = "SET_MAX_DEPTH";
    Lv = "SET_AUTO_STOP_TIME";
    Qv = {
        enabled: !0,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    Kv = (u = Qv, i)=>{
        switch(i.type){
            case kv:
                return {
                    ...u,
                    enabled: !u.enabled
                };
            case jv:
                return {
                    ...u,
                    multiPV: i.payload
                };
            case Hv:
                return {
                    ...u,
                    maxDepth: i.payload
                };
            case Lv:
                return {
                    ...u,
                    autoStopTime: i.payload
                };
            default:
                return u;
        }
    };
    kp = "RESET_BOARD";
    jp = "CLEAR_BOARD";
    Hp = "FLIP_BOARD";
    Lp = "SET_BOARD_WITH_FEN";
    Qp = "PUT_PIECE";
    Kp = "REMOVE_PIECE";
    Yp = "MOVE_BOARD_PIECE";
    Gp = "TOGGLE_CASTLING_PIECE";
    Vp = "SET_PLAYER_TO_MOVE";
    Xp = "SET_SELECTED_ITEM";
    Zp = "DESELECT_ITEM";
    As = (u)=>({
            type: Xp,
            payload: {
                item: u
            }
        });
    Jh = ()=>({
            type: Zp
        });
    Fh = (u)=>({
            type: Vp,
            payload: {
                color: u
            }
        });
    Yv = ()=>({
            type: kp
        });
    Gv = ()=>({
            type: jp
        });
    Vv = ()=>({
            type: Hp
        });
    Xv = (u)=>({
            type: Lp,
            payload: {
                fen: u
            }
        });
    Zv = (u, i)=>({
            type: Qp,
            payload: {
                squareId: u,
                piece: i
            }
        });
    $v = (u)=>({
            type: Kp,
            payload: {
                squareId: u
            }
        });
    Jv = (u, i)=>({
            type: Yp,
            payload: {
                sourceSquareId: u,
                destSquareId: i
            }
        });
    Fv = (u)=>({
            type: Gp,
            payload: {
                flag: u
            }
        });
    Wv = (u)=>{
        const i = Op;
        try {
            const c = new Ui;
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
    Iv = (u)=>u.split(" ")?.[1] === "w" ? "w" : "b";
    Wh = {
        board: {
            ...xv
        },
        selectedItem: null,
        isFlipped: !1,
        playerToMove: Re.WHITE,
        castlingFlags: {
            K: !0,
            Q: !0,
            k: !0,
            q: !0
        }
    };
    eg = {
        board: {
            ...Op
        },
        selectedItem: null,
        isFlipped: !1,
        playerToMove: Re.WHITE,
        castlingFlags: {
            K: !1,
            Q: !1,
            k: !1,
            q: !1
        }
    };
    tg = (u = Wh, i)=>{
        switch(i.type){
            case Hp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case kp:
                return Wh;
            case jp:
                return eg;
            case Lp:
                return {
                    ...u,
                    board: {
                        ...Wv(i.payload.fen)
                    },
                    playerToMove: Iv(i.payload.fen)
                };
            case Qp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [i.payload.squareId]: i.payload.piece
                    }
                };
            case Yp:
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
            case Kp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [i.payload.squareId]: null
                    }
                };
            case Gp:
                return {
                    ...u,
                    castlingFlags: {
                        ...u.castlingFlags,
                        [i.payload.flag]: !u.castlingFlags[i.payload.flag]
                    }
                };
            case Vp:
                return {
                    ...u,
                    playerToMove: i.payload.color
                };
            case Xp:
                return {
                    ...u,
                    selectedItem: i.payload.item ?? null
                };
            case Zp:
                return {
                    ...u,
                    selectedItem: null
                };
            default:
                return u;
        }
    };
    lg = fp({
        game: Mv,
        settings: Dv,
        analysis: Uv,
        pgn: qv,
        engine: Kv,
        boardeditor: tg
    });
    ng = {
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
    ag = {
        key: "root",
        storage: ng,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    ug = av(ag, lg);
    $p = Qy({
        reducer: ug,
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
    ov($p);
    const ig = "modulepreload", rg = function(u) {
        return "/chess-frontend/" + u;
    }, Ih = {}, Jp = function(i, c, s) {
        let o = Promise.resolve();
        if (c && c.length > 0) {
            document.getElementsByTagName("link");
            const m = document.querySelector("meta[property=csp-nonce]"), p = m?.nonce || m?.getAttribute("nonce");
            o = Promise.allSettled(c.map((h)=>{
                if (h = rg(h), h in Ih) return;
                Ih[h] = !0;
                const y = h.endsWith(".css"), b = y ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${h}"]${b}`)) return;
                const _ = document.createElement("link");
                if (_.rel = y ? "stylesheet" : ig, y || (_.as = "script"), _.crossOrigin = "", _.href = h, p && _.setAttribute("nonce", p), document.head.appendChild(_), y) return new Promise((g, R)=>{
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
    var Ja = {}, ep;
    function cg() {
        if (ep) return Ja;
        ep = 1, Object.defineProperty(Ja, "__esModule", {
            value: !0
        }), Ja.parse = m, Ja.serialize = y;
        const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, i = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, s = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, f = (()=>{
            const g = function() {};
            return g.prototype = Object.create(null), g;
        })();
        function m(g, R) {
            const N = new f, C = g.length;
            if (C < 2) return N;
            const z = R?.decode || b;
            let w = 0;
            do {
                const Q = g.indexOf("=", w);
                if (Q === -1) break;
                const U = g.indexOf(";", w), X = U === -1 ? C : U;
                if (Q > X) {
                    w = g.lastIndexOf(";", Q - 1) + 1;
                    continue;
                }
                const Y = p(g, w, Q), J = h(g, Q, Y), te = g.slice(Y, J);
                if (N[te] === void 0) {
                    let pe = p(g, Q + 1, X), ue = h(g, X, pe);
                    const xe = z(g.slice(pe, ue));
                    N[te] = xe;
                }
                w = X + 1;
            }while (w < C);
            return N;
        }
        function p(g, R, N) {
            do {
                const C = g.charCodeAt(R);
                if (C !== 32 && C !== 9) return R;
            }while (++R < N);
            return N;
        }
        function h(g, R, N) {
            for(; R > N;){
                const C = g.charCodeAt(--R);
                if (C !== 32 && C !== 9) return R + 1;
            }
            return N;
        }
        function y(g, R, N) {
            const C = N?.encode || encodeURIComponent;
            if (!u.test(g)) throw new TypeError(`argument name is invalid: ${g}`);
            const z = C(R);
            if (!i.test(z)) throw new TypeError(`argument val is invalid: ${R}`);
            let w = g + "=" + z;
            if (!N) return w;
            if (N.maxAge !== void 0) {
                if (!Number.isInteger(N.maxAge)) throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);
                w += "; Max-Age=" + N.maxAge;
            }
            if (N.domain) {
                if (!c.test(N.domain)) throw new TypeError(`option domain is invalid: ${N.domain}`);
                w += "; Domain=" + N.domain;
            }
            if (N.path) {
                if (!s.test(N.path)) throw new TypeError(`option path is invalid: ${N.path}`);
                w += "; Path=" + N.path;
            }
            if (N.expires) {
                if (!_(N.expires) || !Number.isFinite(N.expires.valueOf())) throw new TypeError(`option expires is invalid: ${N.expires}`);
                w += "; Expires=" + N.expires.toUTCString();
            }
            if (N.httpOnly && (w += "; HttpOnly"), N.secure && (w += "; Secure"), N.partitioned && (w += "; Partitioned"), N.priority) switch(typeof N.priority == "string" ? N.priority.toLowerCase() : void 0){
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
                    throw new TypeError(`option priority is invalid: ${N.priority}`);
            }
            if (N.sameSite) switch(typeof N.sameSite == "string" ? N.sameSite.toLowerCase() : N.sameSite){
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
                    throw new TypeError(`option sameSite is invalid: ${N.sameSite}`);
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
        return Ja;
    }
    cg();
    var tp = "popstate";
    function sg(u = {}) {
        function i(o, f) {
            let { pathname: m = "/", search: p = "", hash: h = "" } = rn(o.location.hash.substring(1));
            return !m.startsWith("/") && !m.startsWith(".") && (m = "/" + m), ys("", {
                pathname: m,
                search: p,
                hash: h
            }, f.state && f.state.usr || null, f.state && f.state.key || "default");
        }
        function c(o, f) {
            let m = o.document.querySelector("base"), p = "";
            if (m && m.getAttribute("href")) {
                let h = o.location.href, y = h.indexOf("#");
                p = y === -1 ? h : h.slice(0, y);
            }
            return p + "#" + (typeof f == "string" ? f : au(f));
        }
        function s(o, f) {
            zt(o.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`);
        }
        return fg(i, c, s, u);
    }
    function Ce(u, i) {
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
    function og() {
        return Math.random().toString(36).substring(2, 10);
    }
    function lp(u, i) {
        return {
            usr: u.state,
            key: u.key,
            idx: i
        };
    }
    function ys(u, i, c = null, s) {
        return {
            pathname: typeof u == "string" ? u : u.pathname,
            search: "",
            hash: "",
            ...typeof i == "string" ? rn(i) : i,
            state: c,
            key: i && i.key || s || og()
        };
    }
    function au({ pathname: u = "/", search: i = "", hash: c = "" }) {
        return i && i !== "?" && (u += i.charAt(0) === "?" ? i : "?" + i), c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c), u;
    }
    function rn(u) {
        let i = {};
        if (u) {
            let c = u.indexOf("#");
            c >= 0 && (i.hash = u.substring(c), u = u.substring(0, c));
            let s = u.indexOf("?");
            s >= 0 && (i.search = u.substring(s), u = u.substring(0, s)), u && (i.pathname = u);
        }
        return i;
    }
    function fg(u, i, c, s = {}) {
        let { window: o = document.defaultView, v5Compat: f = !1 } = s, m = o.history, p = "POP", h = null, y = b();
        y == null && (y = 0, m.replaceState({
            ...m.state,
            idx: y
        }, ""));
        function b() {
            return (m.state || {
                idx: null
            }).idx;
        }
        function _() {
            p = "POP";
            let z = b(), w = z == null ? null : z - y;
            y = z, h && h({
                action: p,
                location: C.location,
                delta: w
            });
        }
        function g(z, w) {
            p = "PUSH";
            let Q = ys(C.location, z, w);
            c && c(Q, z), y = b() + 1;
            let U = lp(Q, y), X = C.createHref(Q);
            try {
                m.pushState(U, "", X);
            } catch (Y) {
                if (Y instanceof DOMException && Y.name === "DataCloneError") throw Y;
                o.location.assign(X);
            }
            f && h && h({
                action: p,
                location: C.location,
                delta: 1
            });
        }
        function R(z, w) {
            p = "REPLACE";
            let Q = ys(C.location, z, w);
            c && c(Q, z), y = b();
            let U = lp(Q, y), X = C.createHref(Q);
            m.replaceState(U, "", X), f && h && h({
                action: p,
                location: C.location,
                delta: 0
            });
        }
        function N(z) {
            let w = o.location.origin !== "null" ? o.location.origin : o.location.href, Q = typeof z == "string" ? z : au(z);
            return Q = Q.replace(/ $/, "%20"), Ce(w, `No window.location.(origin|href) available to create URL for href: ${Q}`), new URL(Q, w);
        }
        let C = {
            get action () {
                return p;
            },
            get location () {
                return u(o, m);
            },
            listen (z) {
                if (h) throw new Error("A history only accepts one active listener");
                return o.addEventListener(tp, _), h = z, ()=>{
                    o.removeEventListener(tp, _), h = null;
                };
            },
            createHref (z) {
                return i(o, z);
            },
            createURL: N,
            encodeLocation (z) {
                let w = N(z);
                return {
                    pathname: w.pathname,
                    search: w.search,
                    hash: w.hash
                };
            },
            push: g,
            replace: R,
            go (z) {
                return m.go(z);
            }
        };
        return C;
    }
    function Fp(u, i, c = "/") {
        return dg(u, i, c, !1);
    }
    function dg(u, i, c, s) {
        let o = typeof i == "string" ? rn(i) : i, f = rl(o.pathname || "/", c);
        if (f == null) return null;
        let m = Wp(u);
        hg(m);
        let p = null;
        for(let h = 0; p == null && h < m.length; ++h){
            let y = Rg(f);
            p = _g(m[h], y, s);
        }
        return p;
    }
    function Wp(u, i = [], c = [], s = "") {
        let o = (f, m, p)=>{
            let h = {
                relativePath: p === void 0 ? f.path || "" : p,
                caseSensitive: f.caseSensitive === !0,
                childrenIndex: m,
                route: f
            };
            h.relativePath.startsWith("/") && (Ce(h.relativePath.startsWith(s), `Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(s.length));
            let y = il([
                s,
                h.relativePath
            ]), b = c.concat(h);
            f.children && f.children.length > 0 && (Ce(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${y}".`), Wp(f.children, i, b, y)), !(f.path == null && !f.index) && i.push({
                path: y,
                score: Sg(y, f.index),
                routesMeta: b
            });
        };
        return u.forEach((f, m)=>{
            if (f.path === "" || !f.path?.includes("?")) o(f, m);
            else for (let p of Ip(f.path))o(f, m, p);
        }), i;
    }
    function Ip(u) {
        let i = u.split("/");
        if (i.length === 0) return [];
        let [c, ...s] = i, o = c.endsWith("?"), f = c.replace(/\?$/, "");
        if (s.length === 0) return o ? [
            f,
            ""
        ] : [
            f
        ];
        let m = Ip(s.join("/")), p = [];
        return p.push(...m.map((h)=>h === "" ? f : [
                f,
                h
            ].join("/"))), o && p.push(...m), p.map((h)=>u.startsWith("/") && h === "" ? "/" : h);
    }
    function hg(u) {
        u.sort((i, c)=>i.score !== c.score ? c.score - i.score : Eg(i.routesMeta.map((s)=>s.childrenIndex), c.routesMeta.map((s)=>s.childrenIndex)));
    }
    var pg = /^:[\w-]+$/, mg = 3, yg = 2, vg = 1, gg = 10, bg = -2, np = (u)=>u === "*";
    function Sg(u, i) {
        let c = u.split("/"), s = c.length;
        return c.some(np) && (s += bg), i && (s += yg), c.filter((o)=>!np(o)).reduce((o, f)=>o + (pg.test(f) ? mg : f === "" ? vg : gg), s);
    }
    function Eg(u, i) {
        return u.length === i.length && u.slice(0, -1).every((s, o)=>s === i[o]) ? u[u.length - 1] - i[i.length - 1] : 0;
    }
    function _g(u, i, c = !1) {
        let { routesMeta: s } = u, o = {}, f = "/", m = [];
        for(let p = 0; p < s.length; ++p){
            let h = s[p], y = p === s.length - 1, b = f === "/" ? i : i.slice(f.length) || "/", _ = wi({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: y
            }, b), g = h.route;
            if (!_ && y && c && !s[s.length - 1].route.index && (_ = wi({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: !1
            }, b)), !_) return null;
            Object.assign(o, _.params), m.push({
                params: o,
                pathname: il([
                    f,
                    _.pathname
                ]),
                pathnameBase: xg(il([
                    f,
                    _.pathnameBase
                ])),
                route: g
            }), _.pathnameBase !== "/" && (f = il([
                f,
                _.pathnameBase
            ]));
        }
        return m;
    }
    function wi(u, i) {
        typeof u == "string" && (u = {
            path: u,
            caseSensitive: !1,
            end: !0
        });
        let [c, s] = Tg(u.path, u.caseSensitive, u.end), o = i.match(c);
        if (!o) return null;
        let f = o[0], m = f.replace(/(.)\/+$/, "$1"), p = o.slice(1);
        return {
            params: s.reduce((y, { paramName: b, isOptional: _ }, g)=>{
                if (b === "*") {
                    let N = p[g] || "";
                    m = f.slice(0, f.length - N.length).replace(/(.)\/+$/, "$1");
                }
                const R = p[g];
                return _ && !R ? y[b] = void 0 : y[b] = (R || "").replace(/%2F/g, "/"), y;
            }, {}),
            pathname: f,
            pathnameBase: m,
            pattern: u
        };
    }
    function Tg(u, i = !1, c = !0) {
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
    function Rg(u) {
        try {
            return u.split("/").map((i)=>decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
        } catch (i) {
            return zt(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`), u;
        }
    }
    function rl(u, i) {
        if (i === "/") return u;
        if (!u.toLowerCase().startsWith(i.toLowerCase())) return null;
        let c = i.endsWith("/") ? i.length - 1 : i.length, s = u.charAt(c);
        return s && s !== "/" ? null : u.slice(c) || "/";
    }
    function Ag(u, i = "/") {
        let { pathname: c, search: s = "", hash: o = "" } = typeof u == "string" ? rn(u) : u;
        return {
            pathname: c ? c.startsWith("/") ? c : Og(c, i) : i,
            search: Mg(s),
            hash: Cg(o)
        };
    }
    function Og(u, i) {
        let c = i.replace(/\/+$/, "").split("/");
        return u.split("/").forEach((o)=>{
            o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
        }), c.length > 1 ? c.join("/") : "/";
    }
    function fs(u, i, c, s) {
        return `Cannot include a '${u}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function Ng(u) {
        return u.filter((i, c)=>c === 0 || i.route.path && i.route.path.length > 0);
    }
    function em(u) {
        let i = Ng(u);
        return i.map((c, s)=>s === i.length - 1 ? c.pathname : c.pathnameBase);
    }
    function tm(u, i, c, s = !1) {
        let o;
        typeof u == "string" ? o = rn(u) : (o = {
            ...u
        }, Ce(!o.pathname || !o.pathname.includes("?"), fs("?", "pathname", "search", o)), Ce(!o.pathname || !o.pathname.includes("#"), fs("#", "pathname", "hash", o)), Ce(!o.search || !o.search.includes("#"), fs("#", "search", "hash", o)));
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
        let h = Ag(o, p), y = m && m !== "/" && m.endsWith("/"), b = (f || m === ".") && c.endsWith("/");
        return !h.pathname.endsWith("/") && (y || b) && (h.pathname += "/"), h;
    }
    var il = (u)=>u.join("/").replace(/\/\/+/g, "/"), xg = (u)=>u.replace(/\/+$/, "").replace(/^\/*/, "/"), Mg = (u)=>!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, Cg = (u)=>!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
    function Dg(u) {
        return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
    }
    var lm = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(lm);
    var Bg = [
        "GET",
        ...lm
    ];
    new Set(Bg);
    var $n = A.createContext(null);
    $n.displayName = "DataRouter";
    var Pi = A.createContext(null);
    Pi.displayName = "DataRouterState";
    var nm = A.createContext({
        isTransitioning: !1
    });
    nm.displayName = "ViewTransition";
    var wg = A.createContext(new Map);
    wg.displayName = "Fetchers";
    var zg = A.createContext(null);
    zg.displayName = "Await";
    var Lt = A.createContext(null);
    Lt.displayName = "Navigation";
    var uu = A.createContext(null);
    uu.displayName = "Location";
    var cl = A.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    cl.displayName = "Route";
    var Os = A.createContext(null);
    Os.displayName = "RouteError";
    function Ug(u, { relative: i } = {}) {
        Ce(iu(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: c, navigator: s } = A.useContext(Lt), { hash: o, pathname: f, search: m } = ru(u, {
            relative: i
        }), p = f;
        return c !== "/" && (p = f === "/" ? c : il([
            c,
            f
        ])), s.createHref({
            pathname: p,
            search: m,
            hash: o
        });
    }
    function iu() {
        return A.useContext(uu) != null;
    }
    function cn() {
        return Ce(iu(), "useLocation() may be used only in the context of a <Router> component."), A.useContext(uu).location;
    }
    var am = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function um(u) {
        A.useContext(Lt).static || A.useLayoutEffect(u);
    }
    function Pg() {
        let { isDataRoute: u } = A.useContext(cl);
        return u ? $g() : qg();
    }
    function qg() {
        Ce(iu(), "useNavigate() may be used only in the context of a <Router> component.");
        let u = A.useContext($n), { basename: i, navigator: c } = A.useContext(Lt), { matches: s } = A.useContext(cl), { pathname: o } = cn(), f = JSON.stringify(em(s)), m = A.useRef(!1);
        return um(()=>{
            m.current = !0;
        }), A.useCallback((h, y = {})=>{
            if (zt(m.current, am), !m.current) return;
            if (typeof h == "number") {
                c.go(h);
                return;
            }
            let b = tm(h, JSON.parse(f), o, y.relative === "path");
            u == null && i !== "/" && (b.pathname = b.pathname === "/" ? i : il([
                i,
                b.pathname
            ])), (y.replace ? c.replace : c.push)(b, y.state, y);
        }, [
            i,
            c,
            f,
            o,
            u
        ]);
    }
    A.createContext(null);
    function ru(u, { relative: i } = {}) {
        let { matches: c } = A.useContext(cl), { pathname: s } = cn(), o = JSON.stringify(em(c));
        return A.useMemo(()=>tm(u, JSON.parse(o), s, i === "path"), [
            u,
            o,
            s,
            i
        ]);
    }
    function kg(u, i) {
        return im(u, i);
    }
    function im(u, i, c, s) {
        Ce(iu(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: f } = A.useContext(Lt), { matches: m } = A.useContext(cl), p = m[m.length - 1], h = p ? p.params : {}, y = p ? p.pathname : "/", b = p ? p.pathnameBase : "/", _ = p && p.route;
        {
            let Q = _ && _.path || "";
            rm(y, !_ || Q.endsWith("*") || Q.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`);
        }
        let g = cn(), R;
        if (i) {
            let Q = typeof i == "string" ? rn(i) : i;
            Ce(b === "/" || Q.pathname?.startsWith(b), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Q.pathname}" was given in the \`location\` prop.`), R = Q;
        } else R = g;
        let N = R.pathname || "/", C = N;
        if (b !== "/") {
            let Q = b.replace(/^\//, "").split("/");
            C = "/" + N.replace(/^\//, "").split("/").slice(Q.length).join("/");
        }
        let z = !f && c && c.matches && c.matches.length > 0 ? c.matches : Fp(u, {
            pathname: C
        });
        zt(_ || z != null, `No routes matched location "${R.pathname}${R.search}${R.hash}" `), zt(z == null || z[z.length - 1].route.element !== void 0 || z[z.length - 1].route.Component !== void 0 || z[z.length - 1].route.lazy !== void 0, `Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let w = Kg(z && z.map((Q)=>Object.assign({}, Q, {
                params: Object.assign({}, h, Q.params),
                pathname: il([
                    b,
                    o.encodeLocation ? o.encodeLocation(Q.pathname).pathname : Q.pathname
                ]),
                pathnameBase: Q.pathnameBase === "/" ? b : il([
                    b,
                    o.encodeLocation ? o.encodeLocation(Q.pathnameBase).pathname : Q.pathnameBase
                ])
            })), m, c, s);
        return i && w ? A.createElement(uu.Provider, {
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
    function jg() {
        let u = Zg(), i = Dg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, s = "rgba(200,200,200, 0.5)", o = {
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
    var Hg = A.createElement(jg, null), Lg = class extends A.Component {
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
            return this.state.error !== void 0 ? A.createElement(cl.Provider, {
                value: this.props.routeContext
            }, A.createElement(Os.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function Qg({ routeContext: u, match: i, children: c }) {
        let s = A.useContext($n);
        return s && s.static && s.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = i.route.id), A.createElement(cl.Provider, {
            value: u
        }, c);
    }
    function Kg(u, i = [], c = null, s = null) {
        if (u == null) {
            if (!c) return null;
            if (c.errors) u = c.matches;
            else if (i.length === 0 && !c.initialized && c.matches.length > 0) u = c.matches;
            else return null;
        }
        let o = u, f = c?.errors;
        if (f != null) {
            let h = o.findIndex((y)=>y.route.id && f?.[y.route.id] !== void 0);
            Ce(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), o = o.slice(0, Math.min(o.length, h + 1));
        }
        let m = !1, p = -1;
        if (c) for(let h = 0; h < o.length; h++){
            let y = o[h];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (p = h), y.route.id) {
                let { loaderData: b, errors: _ } = c, g = y.route.loader && !b.hasOwnProperty(y.route.id) && (!_ || _[y.route.id] === void 0);
                if (y.route.lazy || g) {
                    m = !0, p >= 0 ? o = o.slice(0, p + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((h, y, b)=>{
            let _, g = !1, R = null, N = null;
            c && (_ = f && y.route.id ? f[y.route.id] : void 0, R = y.route.errorElement || Hg, m && (p < 0 && b === 0 ? (rm("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), g = !0, N = null) : p === b && (g = !0, N = y.route.hydrateFallbackElement || null)));
            let C = i.concat(o.slice(0, b + 1)), z = ()=>{
                let w;
                return _ ? w = R : g ? w = N : y.route.Component ? w = A.createElement(y.route.Component, null) : y.route.element ? w = y.route.element : w = h, A.createElement(Qg, {
                    match: y,
                    routeContext: {
                        outlet: h,
                        matches: C,
                        isDataRoute: c != null
                    },
                    children: w
                });
            };
            return c && (y.route.ErrorBoundary || y.route.errorElement || b === 0) ? A.createElement(Lg, {
                location: c.location,
                revalidation: c.revalidation,
                component: R,
                error: _,
                children: z(),
                routeContext: {
                    outlet: null,
                    matches: C,
                    isDataRoute: !0
                }
            }) : z();
        }, null);
    }
    function Ns(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Yg(u) {
        let i = A.useContext($n);
        return Ce(i, Ns(u)), i;
    }
    function Gg(u) {
        let i = A.useContext(Pi);
        return Ce(i, Ns(u)), i;
    }
    function Vg(u) {
        let i = A.useContext(cl);
        return Ce(i, Ns(u)), i;
    }
    function xs(u) {
        let i = Vg(u), c = i.matches[i.matches.length - 1];
        return Ce(c.route.id, `${u} can only be used on routes that contain a unique "id"`), c.route.id;
    }
    function Xg() {
        return xs("useRouteId");
    }
    function Zg() {
        let u = A.useContext(Os), i = Gg("useRouteError"), c = xs("useRouteError");
        return u !== void 0 ? u : i.errors?.[c];
    }
    function $g() {
        let { router: u } = Yg("useNavigate"), i = xs("useNavigate"), c = A.useRef(!1);
        return um(()=>{
            c.current = !0;
        }), A.useCallback(async (o, f = {})=>{
            zt(c.current, am), c.current && (typeof o == "number" ? u.navigate(o) : await u.navigate(o, {
                fromRouteId: i,
                ...f
            }));
        }, [
            u,
            i
        ]);
    }
    var ap = {};
    function rm(u, i, c) {
        !i && !ap[u] && (ap[u] = !0, zt(!1, c));
    }
    A.memo(Jg);
    function Jg({ routes: u, future: i, state: c }) {
        return im(u, void 0, c, i);
    }
    function eu(u) {
        Ce(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function Fg({ basename: u = "/", children: i = null, location: c, navigationType: s = "POP", navigator: o, static: f = !1 }) {
        Ce(!iu(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
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
        typeof c == "string" && (c = rn(c));
        let { pathname: h = "/", search: y = "", hash: b = "", state: _ = null, key: g = "default" } = c, R = A.useMemo(()=>{
            let N = rl(h, m);
            return N == null ? null : {
                location: {
                    pathname: N,
                    search: y,
                    hash: b,
                    state: _,
                    key: g
                },
                navigationType: s
            };
        }, [
            m,
            h,
            y,
            b,
            _,
            g,
            s
        ]);
        return zt(R != null, `<Router basename="${m}"> is not able to match the URL "${h}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`), R == null ? null : A.createElement(Lt.Provider, {
            value: p
        }, A.createElement(uu.Provider, {
            children: i,
            value: R
        }));
    }
    function Wg({ children: u, location: i }) {
        return kg(vs(u), i);
    }
    function vs(u, i = []) {
        let c = [];
        return A.Children.forEach(u, (s, o)=>{
            if (!A.isValidElement(s)) return;
            let f = [
                ...i,
                o
            ];
            if (s.type === A.Fragment) {
                c.push.apply(c, vs(s.props.children, f));
                return;
            }
            Ce(s.type === eu, `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Ce(!s.props.index || !s.props.children, "An index route cannot have child routes.");
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
            s.props.children && (m.children = vs(s.props.children, f)), c.push(m);
        }), c;
    }
    var Mi = "get", Ci = "application/x-www-form-urlencoded";
    function qi(u) {
        return u != null && typeof u.tagName == "string";
    }
    function Ig(u) {
        return qi(u) && u.tagName.toLowerCase() === "button";
    }
    function eb(u) {
        return qi(u) && u.tagName.toLowerCase() === "form";
    }
    function tb(u) {
        return qi(u) && u.tagName.toLowerCase() === "input";
    }
    function lb(u) {
        return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
    }
    function nb(u, i) {
        return u.button === 0 && (!i || i === "_self") && !lb(u);
    }
    var Oi = null;
    function ab() {
        if (Oi === null) try {
            new FormData(document.createElement("form"), 0), Oi = !1;
        } catch  {
            Oi = !0;
        }
        return Oi;
    }
    var ub = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function ds(u) {
        return u != null && !ub.has(u) ? (zt(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ci}"`), null) : u;
    }
    function ib(u, i) {
        let c, s, o, f, m;
        if (eb(u)) {
            let p = u.getAttribute("action");
            s = p ? rl(p, i) : null, c = u.getAttribute("method") || Mi, o = ds(u.getAttribute("enctype")) || Ci, f = new FormData(u);
        } else if (Ig(u) || tb(u) && (u.type === "submit" || u.type === "image")) {
            let p = u.form;
            if (p == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let h = u.getAttribute("formaction") || p.getAttribute("action");
            if (s = h ? rl(h, i) : null, c = u.getAttribute("formmethod") || p.getAttribute("method") || Mi, o = ds(u.getAttribute("formenctype")) || ds(p.getAttribute("enctype")) || Ci, f = new FormData(p, u), !ab()) {
                let { name: y, type: b, value: _ } = u;
                if (b === "image") {
                    let g = y ? `${y}.` : "";
                    f.append(`${g}x`, "0"), f.append(`${g}y`, "0");
                } else y && f.append(y, _);
            }
        } else {
            if (qi(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            c = Mi, s = null, o = Ci, m = u;
        }
        return f && o === "text/plain" && (m = f, f = void 0), {
            action: s,
            method: c.toLowerCase(),
            encType: o,
            formData: f,
            body: m
        };
    }
    function Ms(u, i) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(i);
    }
    async function rb(u, i) {
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
    function cb(u) {
        return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
    }
    async function sb(u, i, c) {
        let s = await Promise.all(u.map(async (o)=>{
            let f = i.routes[o.route.id];
            if (f) {
                let m = await rb(f, c);
                return m.links ? m.links() : [];
            }
            return [];
        }));
        return hb(s.flat(1).filter(cb).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function up(u, i, c, s, o, f) {
        let m = (h, y)=>c[y] ? h.route.id !== c[y].route.id : !0, p = (h, y)=>c[y].pathname !== h.pathname || c[y].route.path?.endsWith("*") && c[y].params["*"] !== h.params["*"];
        return f === "assets" ? i.filter((h, y)=>m(h, y) || p(h, y)) : f === "data" ? i.filter((h, y)=>{
            let b = s.routes[h.route.id];
            if (!b || !b.hasLoader) return !1;
            if (m(h, y) || p(h, y)) return !0;
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
    function ob(u, i, { includeHydrateFallback: c } = {}) {
        return fb(u.map((s)=>{
            let o = i.routes[s.route.id];
            if (!o) return [];
            let f = [
                o.module
            ];
            return o.clientActionModule && (f = f.concat(o.clientActionModule)), o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (f = f.concat(o.hydrateFallbackModule)), o.imports && (f = f.concat(o.imports)), f;
        }).flat(1));
    }
    function fb(u) {
        return [
            ...new Set(u)
        ];
    }
    function db(u) {
        let i = {}, c = Object.keys(u).sort();
        for (let s of c)i[s] = u[s];
        return i;
    }
    function hb(u, i) {
        let c = new Set;
        return new Set(i), u.reduce((s, o)=>{
            let f = JSON.stringify(db(o));
            return c.has(f) || (c.add(f), s.push({
                key: f,
                link: o
            })), s;
        }, []);
    }
    function pb(u, i) {
        let c = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
        return c.pathname === "/" ? c.pathname = "_root.data" : i && rl(c.pathname, i) === "/" ? c.pathname = `${i.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
    }
    function cm() {
        let u = A.useContext($n);
        return Ms(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
    }
    function mb() {
        let u = A.useContext(Pi);
        return Ms(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
    }
    var Cs = A.createContext(void 0);
    Cs.displayName = "FrameworkContext";
    function sm() {
        let u = A.useContext(Cs);
        return Ms(u, "You must render this element inside a <HydratedRouter> element"), u;
    }
    function yb(u, i) {
        let c = A.useContext(Cs), [s, o] = A.useState(!1), [f, m] = A.useState(!1), { onFocus: p, onBlur: h, onMouseEnter: y, onMouseLeave: b, onTouchStart: _ } = i, g = A.useRef(null);
        A.useEffect(()=>{
            if (u === "render" && m(!0), u === "viewport") {
                let C = (w)=>{
                    w.forEach((Q)=>{
                        m(Q.isIntersecting);
                    });
                }, z = new IntersectionObserver(C, {
                    threshold: .5
                });
                return g.current && z.observe(g.current), ()=>{
                    z.disconnect();
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
        }, N = ()=>{
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
                onFocus: Fa(p, R),
                onBlur: Fa(h, N),
                onMouseEnter: Fa(y, R),
                onMouseLeave: Fa(b, N),
                onTouchStart: Fa(_, R)
            }
        ] : [
            !1,
            g,
            {}
        ];
    }
    function Fa(u, i) {
        return (c)=>{
            u && u(c), c.defaultPrevented || i(c);
        };
    }
    function vb({ page: u, ...i }) {
        let { router: c } = cm(), s = A.useMemo(()=>Fp(c.routes, u, c.basename), [
            c.routes,
            u,
            c.basename
        ]);
        return s ? A.createElement(bb, {
            page: u,
            matches: s,
            ...i
        }) : null;
    }
    function gb(u) {
        let { manifest: i, routeModules: c } = sm(), [s, o] = A.useState([]);
        return A.useEffect(()=>{
            let f = !1;
            return sb(u, i, c).then((m)=>{
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
    function bb({ page: u, matches: i, ...c }) {
        let s = cn(), { manifest: o, routeModules: f } = sm(), { basename: m } = cm(), { loaderData: p, matches: h } = mb(), y = A.useMemo(()=>up(u, i, h, o, s, "data"), [
            u,
            i,
            h,
            o,
            s
        ]), b = A.useMemo(()=>up(u, i, h, o, s, "assets"), [
            u,
            i,
            h,
            o,
            s
        ]), _ = A.useMemo(()=>{
            if (u === s.pathname + s.search + s.hash) return [];
            let N = new Set, C = !1;
            if (i.forEach((w)=>{
                let Q = o.routes[w.route.id];
                !Q || !Q.hasLoader || (!y.some((U)=>U.route.id === w.route.id) && w.route.id in p && f[w.route.id]?.shouldRevalidate || Q.hasClientLoader ? C = !0 : N.add(w.route.id));
            }), N.size === 0) return [];
            let z = pb(u, m);
            return C && N.size > 0 && z.searchParams.set("_routes", i.filter((w)=>N.has(w.route.id)).map((w)=>w.route.id).join(",")), [
                z.pathname + z.search
            ];
        }, [
            m,
            p,
            s,
            o,
            y,
            i,
            u,
            f
        ]), g = A.useMemo(()=>ob(b, o), [
            b,
            o
        ]), R = gb(b);
        return A.createElement(A.Fragment, null, _.map((N)=>A.createElement("link", {
                key: N,
                rel: "prefetch",
                as: "fetch",
                href: N,
                ...c
            })), g.map((N)=>A.createElement("link", {
                key: N,
                rel: "modulepreload",
                href: N,
                ...c
            })), R.map(({ key: N, link: C })=>A.createElement("link", {
                key: N,
                ...C
            })));
    }
    function Sb(...u) {
        return (i)=>{
            u.forEach((c)=>{
                typeof c == "function" ? c(i) : c != null && (c.current = i);
            });
        };
    }
    var om = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        om && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function Eb({ basename: u, children: i, window: c }) {
        let s = A.useRef();
        s.current == null && (s.current = sg({
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
        ]), A.createElement(Fg, {
            basename: u,
            children: i,
            location: f.location,
            navigationType: f.action,
            navigator: o
        });
    }
    var fm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, lu = A.forwardRef(function({ onClick: i, discover: c = "render", prefetch: s = "none", relative: o, reloadDocument: f, replace: m, state: p, target: h, to: y, preventScrollReset: b, viewTransition: _, ...g }, R) {
        let { basename: N } = A.useContext(Lt), C = typeof y == "string" && fm.test(y), z, w = !1;
        if (typeof y == "string" && C && (z = y, om)) try {
            let ue = new URL(window.location.href), xe = y.startsWith("//") ? new URL(ue.protocol + y) : new URL(y), at = rl(xe.pathname, N);
            xe.origin === ue.origin && at != null ? y = at + xe.search + xe.hash : w = !0;
        } catch  {
            zt(!1, `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let Q = Ug(y, {
            relative: o
        }), [U, X, Y] = yb(s, g), J = Ab(y, {
            replace: m,
            state: p,
            target: h,
            preventScrollReset: b,
            relative: o,
            viewTransition: _
        });
        function te(ue) {
            i && i(ue), ue.defaultPrevented || J(ue);
        }
        let pe = A.createElement("a", {
            ...g,
            ...Y,
            href: z || Q,
            onClick: w || f ? i : te,
            ref: Sb(R, X),
            target: h,
            "data-discover": !C && c === "render" ? "true" : void 0
        });
        return U && !C ? A.createElement(A.Fragment, null, pe, A.createElement(vb, {
            page: Q
        })) : pe;
    });
    lu.displayName = "Link";
    var _b = A.forwardRef(function({ "aria-current": i = "page", caseSensitive: c = !1, className: s = "", end: o = !1, style: f, to: m, viewTransition: p, children: h, ...y }, b) {
        let _ = ru(m, {
            relative: y.relative
        }), g = cn(), R = A.useContext(Pi), { navigator: N, basename: C } = A.useContext(Lt), z = R != null && Cb(_) && p === !0, w = N.encodeLocation ? N.encodeLocation(_).pathname : _.pathname, Q = g.pathname, U = R && R.navigation && R.navigation.location ? R.navigation.location.pathname : null;
        c || (Q = Q.toLowerCase(), U = U ? U.toLowerCase() : null, w = w.toLowerCase()), U && C && (U = rl(U, C) || U);
        const X = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
        let Y = Q === w || !o && Q.startsWith(w) && Q.charAt(X) === "/", J = U != null && (U === w || !o && U.startsWith(w) && U.charAt(w.length) === "/"), te = {
            isActive: Y,
            isPending: J,
            isTransitioning: z
        }, pe = Y ? i : void 0, ue;
        typeof s == "function" ? ue = s(te) : ue = [
            s,
            Y ? "active" : null,
            J ? "pending" : null,
            z ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let xe = typeof f == "function" ? f(te) : f;
        return A.createElement(lu, {
            ...y,
            "aria-current": pe,
            className: ue,
            ref: b,
            style: xe,
            to: m,
            viewTransition: p
        }, typeof h == "function" ? h(te) : h);
    });
    _b.displayName = "NavLink";
    var Tb = A.forwardRef(({ discover: u = "render", fetcherKey: i, navigate: c, reloadDocument: s, replace: o, state: f, method: m = Mi, action: p, onSubmit: h, relative: y, preventScrollReset: b, viewTransition: _, ...g }, R)=>{
        let N = xb(), C = Mb(p, {
            relative: y
        }), z = m.toLowerCase() === "get" ? "get" : "post", w = typeof p == "string" && fm.test(p), Q = (U)=>{
            if (h && h(U), U.defaultPrevented) return;
            U.preventDefault();
            let X = U.nativeEvent.submitter, Y = X?.getAttribute("formmethod") || m;
            N(X || U.currentTarget, {
                fetcherKey: i,
                method: Y,
                navigate: c,
                replace: o,
                state: f,
                relative: y,
                preventScrollReset: b,
                viewTransition: _
            });
        };
        return A.createElement("form", {
            ref: R,
            method: z,
            action: C,
            onSubmit: s ? h : Q,
            ...g,
            "data-discover": !w && u === "render" ? "true" : void 0
        });
    });
    Tb.displayName = "Form";
    function Rb(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function dm(u) {
        let i = A.useContext($n);
        return Ce(i, Rb(u)), i;
    }
    function Ab(u, { target: i, replace: c, state: s, preventScrollReset: o, relative: f, viewTransition: m } = {}) {
        let p = Pg(), h = cn(), y = ru(u, {
            relative: f
        });
        return A.useCallback((b)=>{
            if (nb(b, i)) {
                b.preventDefault();
                let _ = c !== void 0 ? c : au(h) === au(y);
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
            y,
            c,
            s,
            i,
            u,
            o,
            f,
            m
        ]);
    }
    var Ob = 0, Nb = ()=>`__${String(++Ob)}__`;
    function xb() {
        let { router: u } = dm("useSubmit"), { basename: i } = A.useContext(Lt), c = Xg();
        return A.useCallback(async (s, o = {})=>{
            let { action: f, method: m, encType: p, formData: h, body: y } = ib(s, i);
            if (o.navigate === !1) {
                let b = o.fetcherKey || Nb();
                await u.fetch(b, c, o.action || f, {
                    preventScrollReset: o.preventScrollReset,
                    formData: h,
                    body: y,
                    formMethod: o.method || m,
                    formEncType: o.encType || p,
                    flushSync: o.flushSync
                });
            } else await u.navigate(o.action || f, {
                preventScrollReset: o.preventScrollReset,
                formData: h,
                body: y,
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
    function Mb(u, { relative: i } = {}) {
        let { basename: c } = A.useContext(Lt), s = A.useContext(cl);
        Ce(s, "useFormAction must be used inside a RouteContext");
        let [o] = s.matches.slice(-1), f = {
            ...ru(u || ".", {
                relative: i
            })
        }, m = cn();
        if (u == null) {
            f.search = m.search;
            let p = new URLSearchParams(f.search), h = p.getAll("index");
            if (h.some((b)=>b === "")) {
                p.delete("index"), h.filter((_)=>_).forEach((_)=>p.append("index", _));
                let b = p.toString();
                f.search = b ? `?${b}` : "";
            }
        }
        return (!u || u === ".") && o.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (f.pathname = f.pathname === "/" ? c : il([
            c,
            f.pathname
        ])), au(f);
    }
    function Cb(u, i = {}) {
        let c = A.useContext(nm);
        Ce(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: s } = dm("useViewTransitionState"), o = ru(u, {
            relative: i.relative
        });
        if (!c.isTransitioning) return !1;
        let f = rl(c.currentLocation.pathname, s) || c.currentLocation.pathname, m = rl(c.nextLocation.pathname, s) || c.nextLocation.pathname;
        return wi(o.pathname, m) != null || wi(o.pathname, f) != null;
    }
    new TextEncoder;
    let Db, Bb, hm, zb;
    Db = A.createContext();
    Bb = ({ children: u })=>{
        const i = (b, _)=>{
            try {
                const g = localStorage.getItem(b);
                if (g == null) return _;
                const R = JSON.parse(g);
                return R !== void 0 ? R : _;
            } catch  {
                return _;
            }
        }, [c, s] = A.useState(()=>i(Re.THEME_KEY, Re.THEME)), [o, f] = A.useState(()=>i(Re.ENABLE_SOUND_KEY, Re.ENABLE_SOUND)), [m, p] = A.useState(()=>i(Re.TIMER_DURATION_KEY, Re.TIMER_DURATION)), [h, y] = A.useState(()=>i(Re.IS_FLIPPED_KEY, Re.IS_FLIPPED));
        return A.useEffect(()=>localStorage.setItem(Re.THEME_KEY, JSON.stringify(c)), [
            c
        ]), A.useEffect(()=>localStorage.setItem(Re.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), A.useEffect(()=>localStorage.setItem(Re.TIMER_DURATION_KEY, JSON.stringify(m)), [
            m
        ]), A.useEffect(()=>localStorage.setItem(Re.IS_FLIPPED_KEY, JSON.stringify(h)), [
            h
        ]), L.jsx(Db.Provider, {
            value: {
                theme: c,
                setTheme: s,
                enableSound: o,
                setEnableSound: f,
                timerDuration: m,
                setTimerDuration: p,
                isFlipped: h,
                setIsFlipped: y
            },
            children: u
        });
    };
    hm = (u, i)=>i.split(" ")[1] === "w" ? u : -u;
    wb = (u, i, c, s, o)=>{
        if (typeof u == "string") {
            if (u.startsWith("info") && u.includes("score")) {
                const f = u.match(/score (cp|mate) (-?\d+)/);
                if (f) {
                    const p = f[1], h = parseInt(f[2], 10);
                    let y = 0;
                    p === "cp" ? y = h / 100 : p === "mate" && (y = h > 0 ? 10 : -10);
                    const b = hm(y, s);
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
    zb = 400;
    function Ub(u, i) {
        const c = pm(i);
        if (!c || !u.has(c)) return;
        const s = u.get(c);
        return u.delete(c), u.set(c, s), s;
    }
    function Pb(u, i, c, s = zb) {
        const o = pm(i);
        if (o) for(u.has(o) && u.delete(o), u.set(o, c); u.size > s;){
            const f = u.keys().next().value;
            u.delete(f);
        }
    }
    pm = function(u) {
        return u == null || typeof u != "string" ? "" : u.trim().replace(/\s+/g, " ");
    };
    const qb = "/chess-frontend/stockfish/stockfish-17-lite-single.js";
    function tu(u) {
        return u == null ? [] : typeof u == "string" ? u.split(/\r?\n/).map((i)=>i.trim()).filter(Boolean) : typeof ArrayBuffer < "u" && u instanceof ArrayBuffer ? tu(new TextDecoder().decode(u)) : ArrayBuffer.isView && ArrayBuffer.isView(u) ? tu(new TextDecoder().decode(u)) : Array.isArray(u) ? u.flatMap((i)=>tu(i)) : typeof u == "object" && u !== null && typeof u.data == "string" ? tu(u.data) : [
            String(u).trim()
        ].filter(Boolean);
    }
    function kb(u) {
        const i = u.match(/\bscore\s+(cp|mate)\s+(-?\d+)/i);
        if (!i) return null;
        const c = i[1].toLowerCase(), s = parseInt(i[2], 10);
        return Number.isNaN(s) ? null : c === "cp" ? s / 100 : s > 0 ? 10 : -10;
    }
    function jb(u) {
        typeof requestIdleCallback < "u" ? requestIdleCallback(u, {
            timeout: 48
        }) : queueMicrotask(u);
    }
    function Hb(u, i = "lite", c = 8e3, s = {}) {
        const o = A.useRef(s);
        o.current = s;
        const f = A.useRef(null), m = A.useRef(null), p = A.useRef(null), h = A.useRef(!1), y = A.useRef([]), b = A.useRef(!1), _ = A.useRef(!1), g = A.useRef(null), R = A.useRef(null), N = A.useRef(!1), C = A.useRef(!1), z = A.useRef(null), w = A.useRef(new Map), Q = A.useCallback(()=>{
            if (!(b.current || !f.current)) {
                for(b.current = !0; y.current.length > 0;){
                    const K = y.current.findIndex((fe)=>fe.type === "stop"), V = K >= 0 ? y.current.splice(K, 1)[0] : y.current.shift();
                    V && f.current.postMessage(V.cmd);
                }
                b.current = !1;
            }
        }, []), U = A.useCallback((K, V)=>{
            y.current.push({
                type: K,
                cmd: V
            }), Q();
        }, [
            Q
        ]), X = A.useCallback((K)=>{
            K.onmessage = (V)=>{
                jb(()=>{
                    const fe = tu(V.data);
                    for (const E of fe){
                        if (E === "uciok" && (N.current = !0, o.current.onUciReady?.(), U("normal", "isready")), E === "readyok") {
                            C.current = !0, o.current.onReadyOk?.();
                            const Z = z.current;
                            Z && (z.current = null, Z());
                        }
                        const k = g.current;
                        if (k) {
                            if (E.startsWith("info") && /\bscore\b/i.test(E)) {
                                const Z = kb(E);
                                Z != null && (R.current = hm(Z, k.fen));
                            }
                            if (E.startsWith("bestmove")) {
                                const G = E.trim().split(/\s+/)[1], F = G && G !== "(none)" ? G : "", se = R.current, ne = se != null && Number.isFinite(se) ? se : 0;
                                if (k.depths && k.depthIndex < k.depths.length - 1) {
                                    k.depthIndex += 1;
                                    const Se = k.depths[k.depthIndex];
                                    R.current = null, U("stop", "stop"), h.current = !1, U("normal", "setoption name MultiPV value 1"), U("normal", `position fen ${k.fen}`), U("normal", `go depth ${Se}`);
                                    continue;
                                }
                                clearTimeout(k.timeoutId), g.current = null;
                                const Qe = {
                                    evalScore: ne,
                                    bestMoveUci: F
                                };
                                Pb(w.current, k.fen, Qe), k.resolve(Qe);
                            }
                        }
                        u && u(E);
                    }
                });
            }, K.onerror = (V)=>{
                if (console.error("Error with Stockfish worker:", V), g.current) {
                    clearTimeout(g.current.timeoutId);
                    const fe = V?.message || (typeof V == "string" ? V : "Stockfish worker error");
                    g.current.reject(new Error(fe)), g.current = null;
                }
            };
        }, [
            u,
            U
        ]), Y = A.useCallback(()=>{
            f.current || (N.current = !1, C.current = !1, i === "lite" ? f.current = new Worker(qb) : f.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), X(f.current), f.current.postMessage("uci"));
        }, [
            X,
            i
        ]), J = A.useCallback(()=>{
            Y();
        }, [
            Y
        ]), te = A.useCallback(()=>{
            Y();
        }, [
            Y
        ]);
        A.useCallback((K)=>{
            f.current && U("normal", K);
        }, [
            U
        ]);
        const pe = A.useCallback((K)=>{
            K.forEach((V)=>{
                U("normal", `setoption name ${V.name} value ${V.value}`);
            });
        }, [
            U
        ]), ue = A.useCallback((K, V = [])=>{
            let fe = `position fen ${K}`;
            if (V.length > 0) {
                const E = V.join(" ");
                fe += ` moves ${E}`;
            }
            U("normal", fe);
        }, [
            U
        ]), xe = A.useCallback((K)=>{
            f.current && h.current && (U("stop", "stop"), h.current = !1, m.current && (clearTimeout(m.current), m.current = null));
        }, [
            U
        ]), at = A.useCallback((K)=>{
            _.current && (f.current || Y(), clearTimeout(m.current), xe("pre startSearch"), p.current && clearTimeout(p.current), p.current = setTimeout(()=>{
                h.current = !0, U("normal", `position fen ${K}`), U("normal", "go infinite"), m.current = setTimeout(()=>{
                    xe("startSearch timer expire");
                }, c);
            }, 50));
        }, [
            c,
            xe,
            U,
            Y
        ]), Ue = A.useCallback(()=>{
            N.current = !1, C.current = !1, z.current = null, g.current && (clearTimeout(g.current.timeoutId), g.current.reject(new Error("Engine terminated")), g.current = null), f.current && (f.current.terminate(), f.current = null), h.current = !1, m.current && (clearTimeout(m.current), m.current = null);
        }, []), Qt = A.useCallback((K)=>{
            _.current = K, K || (g.current && (clearTimeout(g.current.timeoutId), g.current.reject(new Error("Engine disabled")), g.current = null), xe("permission revoked"));
        }, [
            xe
        ]), Kt = 8, Le = 12e4, P = A.useCallback((K, V = {})=>{
            if (!(V.skipCache === !0) && K) {
                const G = Ub(w.current, K);
                if (G) return Promise.resolve(G);
            }
            const E = Array.isArray(V.progressiveDepths) && V.progressiveDepths.length > 0 ? V.progressiveDepths.map((G)=>Math.min(24, Math.max(1, G))) : null, k = typeof V.depth == "number" && V.depth > 0 ? Math.min(24, V.depth) : Kt, Z = typeof V.timeoutMs == "number" && V.timeoutMs > 0 ? V.timeoutMs : Le;
            return new Promise((G, F)=>{
                if (!_.current) {
                    F(new Error("Engine disabled"));
                    return;
                }
                if (g.current) {
                    const sl = g.current;
                    clearTimeout(sl.timeoutId), sl.reject(new Error("Superseded")), g.current = null;
                }
                if (z.current = null, f.current || Y(), !f.current) {
                    F(new Error("Worker unavailable"));
                    return;
                }
                R.current = null;
                const se = setTimeout(()=>{
                    if (g.current) {
                        const sl = g.current;
                        g.current = null, sl.reject(new Error("Quick analyze timeout"));
                    }
                }, Z), Qe = (E || [
                    k
                ])[0];
                g.current = {
                    resolve: G,
                    reject: F,
                    fen: K,
                    timeoutId: se,
                    depths: E || null,
                    depthIndex: 0
                };
                const Se = ()=>{
                    U("stop", "stop"), h.current = !1, U("normal", "setoption name MultiPV value 1"), U("normal", `position fen ${K}`), U("normal", `go depth ${Qe}`);
                }, Ct = ()=>{
                    setTimeout(Se, 50);
                };
                N.current && C.current ? Ct() : z.current = Ct;
            });
        }, [
            U,
            Y
        ]);
        return A.useEffect(()=>()=>{
                g.current && (clearTimeout(g.current.timeoutId), g.current.reject(new Error("Unmounted")), g.current = null), Ue();
            }, [
            Ue
        ]), {
            initEngine: J,
            preloadEngine: te,
            setOptions: pe,
            setFen: ue,
            startSearch: at,
            stopSearch: xe,
            terminateEngine: Ue,
            syncEnabledState: Qt,
            quickAnalyzeFen: P
        };
    }
    let mm, Qb, Yb, gs, ym;
    mm = A.createContext();
    Lb = ()=>A.useContext(mm);
    Qb = ({ children: u })=>{
        const i = A.useRef(null), [c, s] = A.useState(!1), [o, f] = A.useState(!1), m = A.useCallback((_)=>{
            i.current && i.current(_);
        }, []), p = Hb(m, "lite", 8e3, {
            onUciReady: ()=>s(!0),
            onReadyOk: ()=>f(!0)
        }), { preloadEngine: h } = p;
        A.useEffect(()=>{
            h();
        }, [
            h
        ]);
        const y = A.useMemo(()=>o ? 100 : c ? 66 : 33, [
            c,
            o
        ]), b = A.useCallback((_)=>{
            i.current = _;
        }, []);
        return L.jsx(mm.Provider, {
            value: {
                ...p,
                setOnMessage: b,
                engineUciOk: c,
                engineReadyOk: o,
                engineWarmupPercent: y
            },
            children: u
        });
    };
    Kb = ()=>{
        const [u, i] = A.useState(document.body.classList.contains("dark-theme")), c = ()=>{
            document.body.classList.toggle("dark-theme"), i(!u);
        }, s = ()=>{
            const f = new Date().getHours();
            return f < 6 || f > 18;
        };
        return A.useEffect(()=>{
            s() != u && c();
        }, []), L.jsx("button", {
            onClick: c,
            className: "theme-toggle-btn",
            children: u ? "☀️" : "🌙"
        });
    };
    Yb = an.memo(({ onSubmit: u })=>{
        const [i, c] = A.useState(!1), [s, o] = A.useState(""), f = ()=>c(!0), m = ()=>{
            c(!1), o("");
        }, p = (y)=>{
            y.target.classList.contains("fen-popup-overlay") && m();
        }, h = (y)=>{
            y.preventDefault(), u(s), m();
        };
        return L.jsxs(L.Fragment, {
            children: [
                L.jsx("button", {
                    className: "action-button",
                    onClick: f,
                    children: "Set FEN"
                }),
                i && L.jsx("div", {
                    className: "fen-popup-overlay",
                    onClick: p,
                    children: L.jsxs("div", {
                        className: "fen-popup",
                        children: [
                            L.jsx("h5", {
                                children: "Setup board from FEN "
                            }),
                            L.jsx("button", {
                                className: "fen-close",
                                onClick: m,
                                children: "×"
                            }),
                            L.jsxs("form", {
                                onSubmit: h,
                                className: "fen-input-form",
                                children: [
                                    L.jsx("input", {
                                        type: "text",
                                        value: s,
                                        onChange: (y)=>o(y.target.value),
                                        placeholder: "Enter FEN",
                                        className: "fen-input"
                                    }),
                                    L.jsx("div", {
                                        className: "fen-actions",
                                        children: L.jsx("button", {
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
    gs = new Set;
    ym = {
        current: ""
    };
    function Gb(u) {
        ym.current = u, gs.forEach((i)=>i(u));
    }
    function Vb() {
        const [u, i] = A.useState(ym.current);
        return A.useEffect(()=>{
            const c = (s)=>i(s);
            return gs.add(c), ()=>{
                gs.delete(c);
            };
        }, []), u;
    }
    function Xb({ component: u, message: i }) {
        const [c, s] = A.useState(!1), o = ()=>{
            s(!0), setTimeout(()=>s(!1), 2e3);
        };
        return L.jsxs("div", {
            className: "toast-wrapper",
            children: [
                L.jsx("button", {
                    onClick: o,
                    className: "toast-button",
                    children: u
                }),
                c && L.jsx("div", {
                    className: "toast-message",
                    children: i
                })
            ]
        });
    }
    const Zb = an.memo(({ isValid: u, fenErrorMsg: i })=>{
        const c = Vb(), s = ()=>{
            navigator.clipboard.writeText(c), alert("FEN copied to clipboard!");
        };
        return L.jsxs("div", {
            className: "fen-container",
            children: [
                L.jsx("div", {
                    id: "fen-display",
                    className: "fen-display",
                    children: c
                }),
                u ? L.jsx("div", {
                    className: "circle-tick",
                    children: "✔"
                }) : L.jsx(Xb, {
                    component: L.jsx("div", {
                        className: "circle-cross",
                        children: "✖"
                    }),
                    message: i
                }),
                L.jsx("button", {
                    onClick: s,
                    className: "copy-button",
                    children: L.jsxs("svg", {
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
                            L.jsx("rect", {
                                x: "3",
                                y: "3",
                                width: "14",
                                height: "14",
                                rx: "2",
                                ry: "2",
                                fill: "#f5f5f5",
                                stroke: "#333333"
                            }),
                            L.jsx("rect", {
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
    }), $b = (u)=>{
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
            let N = 0;
            for(let C = 0; C < R.length; C++){
                const z = Number(R[C]);
                switch(N += isNaN(z) ? 1 : z, R[C]){
                    case "k":
                        g === 0 && N === 5 && p.set("e8", R[C]), f += 1;
                        break;
                    case "K":
                        g === 7 && N === 5 && p.set("e1", R[C]), m += 1;
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
        const h = c[1], y = Jb(u);
        return new Ui(y).inCheck() ? {
            isValid: !1,
            msg: `${h === "w" ? "white" : "black"} to move but ${h === "w" ? "black" : "white"} was already in check and did not defend king`
        } : {
            isValid: !0,
            msg: ""
        };
    };
    function Jb(u) {
        const i = u.split(" ");
        return i[1] = i[1] === "w" ? "b" : "w", i.join(" ");
    }
    const vm = (u, i)=>{
        u.dataTransfer.setData("text", i);
    }, Fb = (u, i, c, s)=>{
        i != null && c == null && s({
            category: Re.BOARD_PIECE,
            id: `${u}-${i.color}-${i.type}`,
            chessPiece: i
        });
    }, Wb = ({ newSelectedItem: u, selectedItem: i, setSelectedItem: c })=>{
        if (i == null) {
            c(u);
            return;
        }
        if (u.id === i.id) {
            c(null);
            return;
        }
        i.category === Re.BOARD_PIECE ? u.category === Re.PALLETE_ITEM && c(u) : i.category === Re.PALLETE_ITEM && u.category === Re.PALLETE_ITEM && c(u);
    }, ip = {
        category: Re.PALLETE_ITEM,
        id: Re.ERASER_ID,
        chessPiece: null
    }, Ib = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    }, e2 = an.memo(({ handleDragStart: u, handlePaletteClick: i })=>{
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
        ], o = un((p)=>p.boardeditor.selectedItem), f = Zn(), m = (p)=>{
            f(As(p));
        };
        return L.jsxs("div", {
            className: "palette",
            children: [
                s.map((p)=>c.map((h)=>L.jsx("img", {
                            id: `palette-${p}-${h}`,
                            src: `pieces/svg/${p}_${Ib[h]}.svg`,
                            alt: `${p} ${h}`,
                            draggable: !0,
                            "data-type": h,
                            "data-color": p,
                            "data-square": "palette",
                            onClick: ()=>{
                                i({
                                    newSelectedItem: {
                                        category: Re.PALLETE_ITEM,
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
                            onDragStart: (y)=>u(y, `palette-${p}-${h}`),
                            className: `palette-piece ${o?.id === `p-${p}-${h.toLowerCase()}` ? "selected" : ""}`,
                            style: {
                                order: p == "w" ? c.indexOf(h) : c.indexOf(h) + 7
                            }
                        }, `${p}-${h}`))),
                L.jsx("img", {
                    "data-square": "palette",
                    src: "assets/eraser.svg",
                    style: {
                        order: 6
                    },
                    onClick: ()=>{
                        i({
                            newSelectedItem: ip,
                            selectedItem: o,
                            setSelectedItem: m
                        });
                    },
                    className: `palette-piece eraser ${o?.id === ip.id ? "selected" : ""}`
                })
            ]
        });
    }), t2 = (u, i)=>{
        let c = "", s = 0;
        for(let o = 0; o < 8; o++){
            const f = u[i[o]];
            f == null && s++, f != null ? (s > 0 && (c += `${s}`), s = 0, c += f.color === "w" ? f.type?.toUpperCase() : f.type) : o == 7 && s > 0 && (c += `${s}`);
        }
        return c;
    }, l2 = ({ board: u, playerToMove: i, halfmoveClock: c = 0, fullmoveNumber: s = 1, whiteKingSide: o, whiteQueenSide: f, blackKingSide: m, blackQueenSide: p })=>{
        const h = "-";
        let y = "";
        const b = (o ? "K" : "") + (f ? "Q" : "") + (m ? "k" : "") + (p ? "q" : ""), _ = Ap.map((g)=>t2(u, g));
        return y += _.join("/"), y += ` ${i} ${b === "" ? "-" : b} ${h} ${c} ${s}`, y;
    }, n2 = (u)=>{
        u.preventDefault();
    }, a2 = ({ squareId: u, squarePiece: i, selectedItem: c, setSelectedItem: s, removePiece: o, putPiece: f, makeMove: m })=>{
        if (!c) {
            i != null && s({
                category: Re.BOARD_PIECE,
                id: `${u}-${i.color}-${i.type}`,
                chessPiece: i
            });
            return;
        }
        if (i != null && c.id === `${u}-${i.color}-${i.type}`) {
            s(null);
            return;
        }
        if (c.id === Re.ERASER_ID) {
            o(u);
            return;
        }
        if (c.chessPiece == null) {
            console.error("Error: selectedItem chessPiece is null and its not eraser", c);
            return;
        }
        if (c.category === Re.PALLETE_ITEM) {
            f(u, c.chessPiece);
            return;
        }
        if (c.category === Re.BOARD_PIECE) {
            const p = c.id.split("-")[0];
            m(p, u), s(null);
        }
    }, u2 = (u, i, c)=>{
        u.preventDefault();
        const s = u.dataTransfer.getData("text"), o = document.getElementById(s);
        if (!o) return;
        const f = o.dataset.square;
        c(f, i);
    }, i2 = an.memo(({ piece: u, squareId: i, handleDragStart: c, handleBoardPieceClick: s })=>{
        const o = un((h)=>h.boardeditor.selectedItem), f = Zn();
        if (u == null || u === void 0 || !i || i === "" || !u.type) return null;
        const m = (h)=>{
            f(As(h));
        }, p = {
            p: "pawn",
            n: "knight",
            b: "bishop",
            r: "rook",
            q: "queen",
            k: "king"
        };
        return L.jsx("img", {
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
    }), r2 = (u)=>{
        const i = u[0].charCodeAt(0) - 97, c = u[1].charCodeAt(0) - 49;
        return (i + c) % 2 === 0 ? "dark" : "light";
    }, c2 = an.memo(({ showRankLabel: u, showFileLabel: i, squareId: c, squarePiece: s, handleSquareClick: o, handleDrop: f, allowDrop: m, handleDragStart: p, handleBoardPieceClick: h })=>{
        const y = un((C)=>C.boardeditor.selectedItem), b = Zn(), _ = (C)=>{
            b(As(C));
        }, g = (C)=>{
            b($v(C));
        }, R = (C, z)=>{
            b(Zv(C, z));
        }, N = (C, z)=>{
            b(Jv(C, z));
        };
        return L.jsxs("div", {
            id: c,
            className: `square ${r2(c)}`,
            onDragOver: m,
            onClick: ()=>o({
                    squareId: c,
                    squarePiece: s,
                    selectedItem: y,
                    setSelectedItem: _,
                    removePiece: g,
                    putPiece: R,
                    makeMove: N
                }),
            onDrop: (C)=>f(C, c, N),
            children: [
                u && L.jsx("div", {
                    className: "rank-label",
                    children: c[1]
                }),
                i && L.jsx("div", {
                    className: "file-label",
                    children: c[0]
                }),
                s && L.jsx(i2, {
                    piece: s,
                    squareId: c,
                    handleDragStart: p,
                    handleBoardPieceClick: h
                })
            ]
        });
    }), s2 = an.memo(({ isFlipped: u })=>{
        const i = u ? Nv : Ap, c = un((s)=>s.boardeditor.board);
        return L.jsx("div", {
            id: "chessboard",
            children: i.map((s, o)=>s.map((f, m)=>L.jsx(c2, {
                        showRankLabel: m === 0,
                        showFileLabel: o === 7,
                        squareId: f,
                        squarePiece: c[f],
                        handleSquareClick: a2,
                        handleDrop: u2,
                        allowDrop: n2,
                        handleDragStart: vm,
                        handleBoardPieceClick: Fb
                    }, f)))
        });
    }), o2 = ({ labelText: u, toggle: i, handleToggle: c })=>L.jsxs("div", {
            className: "toggle-container",
            children: [
                L.jsx("span", {
                    className: "toggle-label",
                    children: u
                }),
                L.jsxs("label", {
                    className: "switch",
                    children: [
                        L.jsx("input", {
                            type: "checkbox",
                            checked: i,
                            onChange: c
                        }),
                        L.jsx("span", {
                            className: "slider"
                        })
                    ]
                })
            ]
        }), gm = (u)=>u.boardeditor, f2 = Es([
        gm
    ], (u)=>({
            board: u.board,
            isFlipped: u.isFlipped,
            playerToMove: u.playerToMove,
            castlingFlags: u.castlingFlags
        })), bm = Es([
        gm
    ], (u)=>({
            playerToMove: u.playerToMove,
            castlingFlags: u.castlingFlags
        }));
    function d2() {
        const { playerToMove: u, castlingFlags: i } = un(bm), c = Zn();
        return L.jsxs("div", {
            className: "move-toggle",
            children: [
                L.jsx("button", {
                    className: `move-option ${u === "w" ? "active" : ""}`,
                    onClick: ()=>c(Fh("w")),
                    children: "White"
                }),
                L.jsx("button", {
                    className: `move-option ${u === "b" ? "active" : ""}`,
                    onClick: ()=>c(Fh("b")),
                    children: "Black"
                })
            ]
        });
    }
    const h2 = an.memo(({ messages: u, isValid: i })=>L.jsxs("div", {
            className: "notice-board",
            children: [
                L.jsxs("div", {
                    className: `notice-header ${i ? "legal" : "isIllegal"}`,
                    children: [
                        "Board setup is ",
                        i ? "" : "not",
                        " valid."
                    ]
                }),
                u.map((c)=>c.text != null && c.text !== "" && L.jsx("div", {
                        className: `message ${c.type}`,
                        children: c.text
                    }, c.text))
            ]
        })), p2 = ({ isValidFen: u, fenErrorMsg: i })=>{
        const { playerToMove: c, castlingFlags: s } = un(bm), o = Zn(), f = [
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
        return L.jsxs("div", {
            className: "castling",
            children: [
                L.jsxs("div", {
                    className: "toggle-container",
                    children: [
                        L.jsx("span", {
                            children: "To Move : "
                        }),
                        L.jsx(d2, {})
                    ]
                }),
                f.map(({ flag: m, label: p, state: h })=>L.jsx(o2, {
                        labelText: p,
                        toggle: h,
                        handleToggle: ()=>{
                            o(Fv(m));
                        }
                    }, p)),
                L.jsx(h2, {
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
    m2 = function(u) {
        return u == null || Number.isNaN(u) ? "—" : `${u >= 0 ? "+" : ""}${u.toFixed(2)}`;
    };
    const y2 = [
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
    ], v2 = 8200;
    function g2(u, i) {
        const [c, s] = A.useState(null), [o, f] = A.useState(""), [m, p] = A.useState(""), [h, y] = A.useState(!1), [b, _] = A.useState(""), g = A.useRef(""), R = A.useRef(null), { initEngine: N, setOptions: C, startSearch: z, stopSearch: w, setOnMessage: Q, syncEnabledState: U } = Lb(), X = A.useCallback((te)=>{
            typeof te == "string" && wb(te, s, f, g.current, p);
        }, []);
        A.useEffect(()=>{
            try {
                g.current = i();
            } catch  {}
        }, [
            i
        ]);
        const Y = A.useCallback(()=>{
            R.current && (clearTimeout(R.current), R.current = null), y(!1), w("board editor analyse stop");
        }, [
            w
        ]), J = A.useCallback(()=>{
            if (!u) {
                _("Fix the position before analysing.");
                return;
            }
            const te = i();
            g.current = te, _(""), s(null), f(""), p(""), y(!0), R.current && (clearTimeout(R.current), R.current = null), w("board editor analyse restart"), U(!0), N(), C(y2), Q(X), z(te), R.current = setTimeout(()=>{
                y(!1), w("board editor analyse complete"), R.current = null;
            }, v2);
        }, [
            u,
            i,
            w,
            U,
            N,
            C,
            Q,
            X,
            z
        ]);
        return A.useEffect(()=>()=>{
                R.current && clearTimeout(R.current), w("board editor unmount"), U(!1);
            }, [
            w,
            U
        ]), {
            evalScore: c,
            bestLine: o,
            bestMoveUci: m,
            isAnalyzing: h,
            analysisError: b,
            handleAnalyse: J,
            handleStopAnalysis: Y,
            fenRef: g
        };
    }
    b2 = ({ isFlipped: u, evalScore: i })=>{
        const c = (s)=>{
            const f = s == null || Number.isNaN(s) ? 0 : s;
            return (Math.max(-10, Math.min(f, 10)) + 10) / (2 * 10) * 100;
        };
        return L.jsx("div", {
            className: `eval-bar eval-container ${u ? "flipped" : ""}`,
            children: L.jsx("div", {
                className: "white-bar",
                style: {
                    height: `${c(i)}%`
                }
            })
        });
    };
    function S2(u, i) {
        if (!i || i.length < 4) return i;
        try {
            const c = new Ui(u), s = i.slice(0, 2), o = i.slice(2, 4), f = i.length > 4 ? i[4] : void 0, m = c.move({
                from: s,
                to: o,
                promotion: f
            });
            return m ? m.san : i;
        } catch  {
            return i;
        }
    }
    const rp = ()=>{
        const { board: u, isFlipped: i, playerToMove: c, castlingFlags: s } = un(f2), [o, f] = A.useState(!1), [m, p] = A.useState(""), h = Zn(), y = ()=>{
            h(Jh()), h(Gv());
        }, b = ()=>{
            h(Jh()), h(Yv());
        }, _ = A.useCallback((J)=>{
            h(Xv(J));
        }, [
            h
        ]), g = A.useCallback((J = 0, te = 1)=>l2({
                board: u,
                playerToMove: c,
                whiteKingSide: s.K,
                whiteQueenSide: s.Q,
                blackKingSide: s.k,
                blackQueenSide: s.q,
                halfmoveClock: J,
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
            const J = g(), { isValid: te, msg: pe } = $b(J);
            f((ue)=>ue !== te ? te : ue), p((ue)=>ue !== pe ? pe : ue), Gb(J);
        }, [
            g,
            u
        ]);
        const { evalScore: R, bestLine: N, bestMoveUci: C, isAnalyzing: z, analysisError: w, handleAnalyse: Q, handleStopAnalysis: U, fenRef: X } = g2(o, g), Y = C ? S2(X.current, C) : "";
        return L.jsxs("div", {
            className: "main-container board-editor-page",
            children: [
                L.jsx("div", {
                    className: "top-container",
                    children: L.jsxs("nav", {
                        className: "top-bar",
                        children: [
                            L.jsx("button", {
                                onClick: y,
                                className: "action-button",
                                children: "Clear"
                            }),
                            L.jsx("button", {
                                onClick: b,
                                className: "action-button",
                                children: "Reset"
                            }),
                            L.jsx("button", {
                                onClick: ()=>{
                                    h(Vv());
                                },
                                className: "action-button",
                                children: "Flip"
                            }),
                            L.jsx(Yb, {
                                onSubmit: _
                            }),
                            L.jsx("button", {
                                type: "button",
                                onClick: Q,
                                disabled: !o || z,
                                className: "action-button",
                                title: o ? "Run engine on current position" : "Position must be legal",
                                children: z ? "Analysing…" : "Analyse"
                            }),
                            L.jsx("button", {
                                type: "button",
                                onClick: U,
                                disabled: !z,
                                className: "action-button",
                                title: "Stop engine",
                                children: "Stop"
                            }),
                            L.jsx(Kb, {})
                        ]
                    })
                }),
                L.jsxs("aside", {
                    className: "board-editor-analysis-shell",
                    "aria-label": "Engine analysis",
                    children: [
                        w ? L.jsx("div", {
                            className: "board-editor-analysis-error",
                            role: "alert",
                            children: w
                        }) : null,
                        L.jsxs("div", {
                            className: "board-editor-analysis-panel",
                            "aria-live": "polite",
                            children: [
                                L.jsxs("div", {
                                    className: "board-editor-analysis-row",
                                    children: [
                                        L.jsx("span", {
                                            className: "board-editor-analysis-label",
                                            children: "Eval (White)"
                                        }),
                                        L.jsx("span", {
                                            className: "board-editor-analysis-value",
                                            children: R != null ? m2(R) : "—"
                                        })
                                    ]
                                }),
                                L.jsxs("div", {
                                    className: "board-editor-analysis-row",
                                    children: [
                                        L.jsx("span", {
                                            className: "board-editor-analysis-label",
                                            children: "Best move"
                                        }),
                                        L.jsx("span", {
                                            className: "board-editor-analysis-value",
                                            children: Y || C || "—"
                                        })
                                    ]
                                }),
                                L.jsxs("div", {
                                    className: "board-editor-analysis-row board-editor-analysis-pv",
                                    children: [
                                        L.jsx("span", {
                                            className: "board-editor-analysis-label",
                                            children: "Principal variation"
                                        }),
                                        L.jsx("span", {
                                            className: "board-editor-analysis-value",
                                            children: N || "—"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                L.jsxs("div", {
                    className: "middle-container",
                    children: [
                        L.jsx("div", {
                            className: "left-menu-bar"
                        }),
                        L.jsxs("div", {
                            className: "fen-chessboard-container",
                            children: [
                                L.jsx(Zb, {
                                    isValid: o,
                                    fenErrorMsg: m
                                }),
                                L.jsxs("div", {
                                    className: "board-editor-evalbar-board-row",
                                    children: [
                                        L.jsx("div", {
                                            className: "board-editor-evalbar-wrap",
                                            "aria-hidden": !0,
                                            children: L.jsx(b2, {
                                                isFlipped: i,
                                                evalScore: R
                                            })
                                        }),
                                        L.jsxs("div", {
                                            className: "chessboard-container",
                                            children: [
                                                L.jsx(s2, {
                                                    isFlipped: i
                                                }),
                                                L.jsx(e2, {
                                                    handleDragStart: vm,
                                                    handlePaletteClick: Wb
                                                }),
                                                L.jsx(p2, {
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
    }, E2 = A.lazy(()=>Jp(()=>import("./ChessGame-BryeU_W8.js"), __vite__mapDeps([0,1,2,3]))), _2 = A.lazy(()=>Jp(()=>import("./AnalysisGame-Cegc66xt.js"), __vite__mapDeps([4,1,2,5]))), T2 = ()=>L.jsx(Bb, {
            children: L.jsx(Qb, {
                children: L.jsxs(Eb, {
                    children: [
                        L.jsxs("nav", {
                            className: "routes",
                            children: [
                                L.jsx(lu, {
                                    to: "/boardeditor",
                                    className: "action-button no-decoration",
                                    children: "Chess Position Editor"
                                }),
                                L.jsx(lu, {
                                    to: "/analysis",
                                    className: "action-button no-decoration",
                                    children: "Analyse Game"
                                }),
                                L.jsx(lu, {
                                    to: "/gameplay",
                                    className: "action-button no-decoration",
                                    children: "Play Game"
                                })
                            ]
                        }),
                        L.jsx(A.Suspense, {
                            fallback: L.jsx("div", {
                                className: "loading-screen",
                                children: "Loading..."
                            }),
                            children: L.jsxs(Wg, {
                                children: [
                                    L.jsx(eu, {
                                        path: "/analysis",
                                        element: L.jsx(_2, {})
                                    }),
                                    L.jsx(eu, {
                                        path: "/gameplay",
                                        element: L.jsx(E2, {})
                                    }),
                                    L.jsx(eu, {
                                        path: "/boardeditor",
                                        element: L.jsx(rp, {})
                                    }),
                                    L.jsx(eu, {
                                        path: "*",
                                        element: L.jsx(rp, {})
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    function R2() {
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
    R2();
    W1.createRoot(document.getElementById("root")).render(L.jsx(my, {
        store: $p,
        children: L.jsx(T2, {})
    }));
})();
export { Ui as C, Kb as D, b2 as E, an as R, un as a, O2 as b, Re as c, D2 as d, z2 as e, x2 as f, Lb as g, k2 as h, P2 as i, L as j, q2 as k, U2 as l, A2 as m, w2 as n, m2 as o, B2 as p, wb as q, A as r, N2 as s, pm as t, Zn as u, Q1 as v, $p as w, M2 as x, C2 as y, __tla };
