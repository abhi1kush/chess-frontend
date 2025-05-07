const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChessGame-C-F5eEiQ.js","assets/Settings-CSzFMnEA.js","assets/Settings-DS8xGtQf.css","assets/ChessGame-DhAK7FyC.css","assets/AnalysisGame-sXQ07ZYD.js","assets/AnalysisGame-Tf-ih67V.css"])))=>i.map(i=>d[i]);
let Of, kb, nn, an, m2, _e, S2, R2, v2, A2, qb, O2, Q, hp, T2, p2, _2, Wp, E2, g2, N, y2, b2, Xn;
let __tla = (async ()=>{
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);
        new MutationObserver((o)=>{
            for (const s of o)if (s.type === "childList") for (const m of s.addedNodes)m.tagName === "LINK" && m.rel === "modulepreload" && f(m);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function c(o) {
            const s = {};
            return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function f(o) {
            if (o.ep) return;
            o.ep = !0;
            const s = c(o);
            fetch(o.href, s);
        }
    })();
    hp = function(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
    };
    var Ic = {
        exports: {}
    }, Va = {};
    var Nh;
    function K1() {
        if (Nh) return Va;
        Nh = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
        function c(f, o, s) {
            var m = null;
            if (s !== void 0 && (m = "" + s), o.key !== void 0 && (m = "" + o.key), "key" in o) {
                s = {};
                for(var h in o)h !== "key" && (s[h] = o[h]);
            } else s = o;
            return o = s.ref, {
                $$typeof: u,
                type: f,
                key: m,
                ref: o !== void 0 ? o : null,
                props: s
            };
        }
        return Va.Fragment = r, Va.jsx = c, Va.jsxs = c, Va;
    }
    var xh;
    function G1() {
        return xh || (xh = 1, Ic.exports = K1()), Ic.exports;
    }
    let ef, re;
    Q = G1();
    ef = {
        exports: {}
    };
    re = {};
    var Mh;
    function Y1() {
        if (Mh) return re;
        Mh = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), R = Symbol.iterator;
        function S(E) {
            return E === null || typeof E != "object" ? null : (E = R && E[R] || E["@@iterator"], typeof E == "function" ? E : null);
        }
        var T = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, O = Object.assign, D = {};
        function w(E, L, X) {
            this.props = E, this.context = L, this.refs = D, this.updater = X || T;
        }
        w.prototype.isReactComponent = {}, w.prototype.setState = function(E, L) {
            if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, E, L, "setState");
        }, w.prototype.forceUpdate = function(E) {
            this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        };
        function z() {}
        z.prototype = w.prototype;
        function j(E, L, X) {
            this.props = E, this.context = L, this.refs = D, this.updater = X || T;
        }
        var k = j.prototype = new z;
        k.constructor = j, O(k, w.prototype), k.isPureReactComponent = !0;
        var V = Array.isArray, K = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, W = Object.prototype.hasOwnProperty;
        function $(E, L, X, G, I, pe) {
            return X = pe.ref, {
                $$typeof: u,
                type: E,
                key: L,
                ref: X !== void 0 ? X : null,
                props: pe
            };
        }
        function J(E, L) {
            return $(E.type, L, void 0, void 0, void 0, E.props);
        }
        function ne(E) {
            return typeof E == "object" && E !== null && E.$$typeof === u;
        }
        function Ce(E) {
            var L = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + E.replace(/[=:]/g, function(X) {
                return L[X];
            });
        }
        var je = /\/+/g;
        function Ue(E, L) {
            return typeof E == "object" && E !== null && E.key != null ? Ce("" + E.key) : L.toString(36);
        }
        function Ul() {}
        function Pl(E) {
            switch(E.status){
                case "fulfilled":
                    return E.value;
                case "rejected":
                    throw E.reason;
                default:
                    switch(typeof E.status == "string" ? E.then(Ul, Ul) : (E.status = "pending", E.then(function(L) {
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
        function We(E, L, X, G, I) {
            var pe = typeof E;
            (pe === "undefined" || pe === "boolean") && (E = null);
            var ie = !1;
            if (E === null) ie = !0;
            else switch(pe){
                case "bigint":
                case "string":
                case "number":
                    ie = !0;
                    break;
                case "object":
                    switch(E.$$typeof){
                        case u:
                        case r:
                            ie = !0;
                            break;
                        case b:
                            return ie = E._init, We(ie(E._payload), L, X, G, I);
                    }
            }
            if (ie) return I = I(E), ie = G === "" ? "." + Ue(E, 0) : G, V(I) ? (X = "", ie != null && (X = ie.replace(je, "$&/") + "/"), We(I, L, X, "", function(il) {
                return il;
            })) : I != null && (ne(I) && (I = J(I, X + (I.key == null || E && E.key === I.key ? "" : ("" + I.key).replace(je, "$&/") + "/") + ie)), L.push(I)), 1;
            ie = 0;
            var ot = G === "" ? "." : G + ":";
            if (V(E)) for(var Oe = 0; Oe < E.length; Oe++)G = E[Oe], pe = ot + Ue(G, Oe), ie += We(G, L, X, pe, I);
            else if (Oe = S(E), typeof Oe == "function") for(E = Oe.call(E), Oe = 0; !(G = E.next()).done;)G = G.value, pe = ot + Ue(G, Oe++), ie += We(G, L, X, pe, I);
            else if (pe === "object") {
                if (typeof E.then == "function") return We(Pl(E), L, X, G, I);
                throw L = String(E), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ie;
        }
        function P(E, L, X) {
            if (E == null) return E;
            var G = [], I = 0;
            return We(E, G, "", "", function(pe) {
                return L.call(X, pe, I++);
            }), G;
        }
        function Y(E) {
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
        var le = typeof reportError == "function" ? reportError : function(E) {
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
        function Re() {}
        return re.Children = {
            map: P,
            forEach: function(E, L, X) {
                P(E, function() {
                    L.apply(this, arguments);
                }, X);
            },
            count: function(E) {
                var L = 0;
                return P(E, function() {
                    L++;
                }), L;
            },
            toArray: function(E) {
                return P(E, function(L) {
                    return L;
                }) || [];
            },
            only: function(E) {
                if (!ne(E)) throw Error("React.Children.only expected to receive a single React element child.");
                return E;
            }
        }, re.Component = w, re.Fragment = c, re.Profiler = o, re.PureComponent = j, re.StrictMode = f, re.Suspense = p, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, re.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(E) {
                return K.H.useMemoCache(E);
            }
        }, re.cache = function(E) {
            return function() {
                return E.apply(null, arguments);
            };
        }, re.cloneElement = function(E, L, X) {
            if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
            var G = O({}, E.props), I = E.key, pe = void 0;
            if (L != null) for(ie in L.ref !== void 0 && (pe = void 0), L.key !== void 0 && (I = "" + L.key), L)!W.call(L, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && L.ref === void 0 || (G[ie] = L[ie]);
            var ie = arguments.length - 2;
            if (ie === 1) G.children = X;
            else if (1 < ie) {
                for(var ot = Array(ie), Oe = 0; Oe < ie; Oe++)ot[Oe] = arguments[Oe + 2];
                G.children = ot;
            }
            return $(E.type, I, void 0, void 0, pe, G);
        }, re.createContext = function(E) {
            return E = {
                $$typeof: m,
                _currentValue: E,
                _currentValue2: E,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, E.Provider = E, E.Consumer = {
                $$typeof: s,
                _context: E
            }, E;
        }, re.createElement = function(E, L, X) {
            var G, I = {}, pe = null;
            if (L != null) for(G in L.key !== void 0 && (pe = "" + L.key), L)W.call(L, G) && G !== "key" && G !== "__self" && G !== "__source" && (I[G] = L[G]);
            var ie = arguments.length - 2;
            if (ie === 1) I.children = X;
            else if (1 < ie) {
                for(var ot = Array(ie), Oe = 0; Oe < ie; Oe++)ot[Oe] = arguments[Oe + 2];
                I.children = ot;
            }
            if (E && E.defaultProps) for(G in ie = E.defaultProps, ie)I[G] === void 0 && (I[G] = ie[G]);
            return $(E, pe, void 0, void 0, null, I);
        }, re.createRef = function() {
            return {
                current: null
            };
        }, re.forwardRef = function(E) {
            return {
                $$typeof: h,
                render: E
            };
        }, re.isValidElement = ne, re.lazy = function(E) {
            return {
                $$typeof: b,
                _payload: {
                    _status: -1,
                    _result: E
                },
                _init: Y
            };
        }, re.memo = function(E, L) {
            return {
                $$typeof: v,
                type: E,
                compare: L === void 0 ? null : L
            };
        }, re.startTransition = function(E) {
            var L = K.T, X = {};
            K.T = X;
            try {
                var G = E(), I = K.S;
                I !== null && I(X, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(Re, le);
            } catch (pe) {
                le(pe);
            } finally{
                K.T = L;
            }
        }, re.unstable_useCacheRefresh = function() {
            return K.H.useCacheRefresh();
        }, re.use = function(E) {
            return K.H.use(E);
        }, re.useActionState = function(E, L, X) {
            return K.H.useActionState(E, L, X);
        }, re.useCallback = function(E, L) {
            return K.H.useCallback(E, L);
        }, re.useContext = function(E) {
            return K.H.useContext(E);
        }, re.useDebugValue = function() {}, re.useDeferredValue = function(E, L) {
            return K.H.useDeferredValue(E, L);
        }, re.useEffect = function(E, L, X) {
            var G = K.H;
            if (typeof X == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return G.useEffect(E, L);
        }, re.useId = function() {
            return K.H.useId();
        }, re.useImperativeHandle = function(E, L, X) {
            return K.H.useImperativeHandle(E, L, X);
        }, re.useInsertionEffect = function(E, L) {
            return K.H.useInsertionEffect(E, L);
        }, re.useLayoutEffect = function(E, L) {
            return K.H.useLayoutEffect(E, L);
        }, re.useMemo = function(E, L) {
            return K.H.useMemo(E, L);
        }, re.useOptimistic = function(E, L) {
            return K.H.useOptimistic(E, L);
        }, re.useReducer = function(E, L, X) {
            return K.H.useReducer(E, L, X);
        }, re.useRef = function(E) {
            return K.H.useRef(E);
        }, re.useState = function(E) {
            return K.H.useState(E);
        }, re.useSyncExternalStore = function(E, L, X) {
            return K.H.useSyncExternalStore(E, L, X);
        }, re.useTransition = function() {
            return K.H.useTransition();
        }, re.version = "19.1.0", re;
    }
    var Ch;
    function Ui() {
        return Ch || (Ch = 1, ef.exports = Y1()), ef.exports;
    }
    N = Ui();
    nn = hp(N);
    var tf = {
        exports: {}
    }, Xa = {}, lf = {
        exports: {}
    }, nf = {};
    var Dh;
    function V1() {
        return Dh || (Dh = 1, function(u) {
            function r(P, Y) {
                var le = P.length;
                P.push(Y);
                e: for(; 0 < le;){
                    var Re = le - 1 >>> 1, E = P[Re];
                    if (0 < o(E, Y)) P[Re] = Y, P[le] = E, le = Re;
                    else break e;
                }
            }
            function c(P) {
                return P.length === 0 ? null : P[0];
            }
            function f(P) {
                if (P.length === 0) return null;
                var Y = P[0], le = P.pop();
                if (le !== Y) {
                    P[0] = le;
                    e: for(var Re = 0, E = P.length, L = E >>> 1; Re < L;){
                        var X = 2 * (Re + 1) - 1, G = P[X], I = X + 1, pe = P[I];
                        if (0 > o(G, le)) I < E && 0 > o(pe, G) ? (P[Re] = pe, P[I] = le, Re = I) : (P[Re] = G, P[X] = le, Re = X);
                        else if (I < E && 0 > o(pe, le)) P[Re] = pe, P[I] = le, Re = I;
                        else break e;
                    }
                }
                return Y;
            }
            function o(P, Y) {
                var le = P.sortIndex - Y.sortIndex;
                return le !== 0 ? le : P.id - Y.id;
            }
            if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var s = performance;
                u.unstable_now = function() {
                    return s.now();
                };
            } else {
                var m = Date, h = m.now();
                u.unstable_now = function() {
                    return m.now() - h;
                };
            }
            var p = [], v = [], b = 1, R = null, S = 3, T = !1, O = !1, D = !1, w = !1, z = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
            function V(P) {
                for(var Y = c(v); Y !== null;){
                    if (Y.callback === null) f(v);
                    else if (Y.startTime <= P) f(v), Y.sortIndex = Y.expirationTime, r(p, Y);
                    else break;
                    Y = c(v);
                }
            }
            function K(P) {
                if (D = !1, V(P), !O) if (c(p) !== null) O = !0, W || (W = !0, Ue());
                else {
                    var Y = c(v);
                    Y !== null && We(K, Y.startTime - P);
                }
            }
            var W = !1, $ = -1, J = 5, ne = -1;
            function Ce() {
                return w ? !0 : !(u.unstable_now() - ne < J);
            }
            function je() {
                if (w = !1, W) {
                    var P = u.unstable_now();
                    ne = P;
                    var Y = !0;
                    try {
                        e: {
                            O = !1, D && (D = !1, j($), $ = -1), T = !0;
                            var le = S;
                            try {
                                t: {
                                    for(V(P), R = c(p); R !== null && !(R.expirationTime > P && Ce());){
                                        var Re = R.callback;
                                        if (typeof Re == "function") {
                                            R.callback = null, S = R.priorityLevel;
                                            var E = Re(R.expirationTime <= P);
                                            if (P = u.unstable_now(), typeof E == "function") {
                                                R.callback = E, V(P), Y = !0;
                                                break t;
                                            }
                                            R === c(p) && f(p), V(P);
                                        } else f(p);
                                        R = c(p);
                                    }
                                    if (R !== null) Y = !0;
                                    else {
                                        var L = c(v);
                                        L !== null && We(K, L.startTime - P), Y = !1;
                                    }
                                }
                                break e;
                            } finally{
                                R = null, S = le, T = !1;
                            }
                            Y = void 0;
                        }
                    } finally{
                        Y ? Ue() : W = !1;
                    }
                }
            }
            var Ue;
            if (typeof k == "function") Ue = function() {
                k(je);
            };
            else if (typeof MessageChannel < "u") {
                var Ul = new MessageChannel, Pl = Ul.port2;
                Ul.port1.onmessage = je, Ue = function() {
                    Pl.postMessage(null);
                };
            } else Ue = function() {
                z(je, 0);
            };
            function We(P, Y) {
                $ = z(function() {
                    P(u.unstable_now());
                }, Y);
            }
            u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(P) {
                P.callback = null;
            }, u.unstable_forceFrameRate = function(P) {
                0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < P ? Math.floor(1e3 / P) : 5;
            }, u.unstable_getCurrentPriorityLevel = function() {
                return S;
            }, u.unstable_next = function(P) {
                switch(S){
                    case 1:
                    case 2:
                    case 3:
                        var Y = 3;
                        break;
                    default:
                        Y = S;
                }
                var le = S;
                S = Y;
                try {
                    return P();
                } finally{
                    S = le;
                }
            }, u.unstable_requestPaint = function() {
                w = !0;
            }, u.unstable_runWithPriority = function(P, Y) {
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
                var le = S;
                S = P;
                try {
                    return Y();
                } finally{
                    S = le;
                }
            }, u.unstable_scheduleCallback = function(P, Y, le) {
                var Re = u.unstable_now();
                switch(typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? Re + le : Re) : le = Re, P){
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
                return E = le + E, P = {
                    id: b++,
                    callback: Y,
                    priorityLevel: P,
                    startTime: le,
                    expirationTime: E,
                    sortIndex: -1
                }, le > Re ? (P.sortIndex = le, r(v, P), c(p) === null && P === c(v) && (D ? (j($), $ = -1) : D = !0, We(K, le - Re))) : (P.sortIndex = E, r(p, P), O || T || (O = !0, W || (W = !0, Ue()))), P;
            }, u.unstable_shouldYield = Ce, u.unstable_wrapCallback = function(P) {
                var Y = S;
                return function() {
                    var le = S;
                    S = Y;
                    try {
                        return P.apply(this, arguments);
                    } finally{
                        S = le;
                    }
                };
            };
        }(nf)), nf;
    }
    var Bh;
    function X1() {
        return Bh || (Bh = 1, lf.exports = V1()), lf.exports;
    }
    var af = {
        exports: {}
    }, tt = {};
    var wh;
    function Z1() {
        if (wh) return tt;
        wh = 1;
        var u = Ui();
        function r(p) {
            var v = "https://react.dev/errors/" + p;
            if (1 < arguments.length) {
                v += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var b = 2; b < arguments.length; b++)v += "&args[]=" + encodeURIComponent(arguments[b]);
            }
            return "Minified React error #" + p + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function c() {}
        var f = {
            d: {
                f: c,
                r: function() {
                    throw Error(r(522));
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
        function s(p, v, b) {
            var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: R == null ? null : "" + R,
                children: p,
                containerInfo: v,
                implementation: b
            };
        }
        var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function h(p, v) {
            if (p === "font") return "";
            if (typeof v == "string") return v === "use-credentials" ? v : "";
        }
        return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, tt.createPortal = function(p, v) {
            var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(r(299));
            return s(p, v, null, b);
        }, tt.flushSync = function(p) {
            var v = m.T, b = f.p;
            try {
                if (m.T = null, f.p = 2, p) return p();
            } finally{
                m.T = v, f.p = b, f.d.f();
            }
        }, tt.preconnect = function(p, v) {
            typeof p == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, f.d.C(p, v));
        }, tt.prefetchDNS = function(p) {
            typeof p == "string" && f.d.D(p);
        }, tt.preinit = function(p, v) {
            if (typeof p == "string" && v && typeof v.as == "string") {
                var b = v.as, R = h(b, v.crossOrigin), S = typeof v.integrity == "string" ? v.integrity : void 0, T = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
                b === "style" ? f.d.S(p, typeof v.precedence == "string" ? v.precedence : void 0, {
                    crossOrigin: R,
                    integrity: S,
                    fetchPriority: T
                }) : b === "script" && f.d.X(p, {
                    crossOrigin: R,
                    integrity: S,
                    fetchPriority: T,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0
                });
            }
        }, tt.preinitModule = function(p, v) {
            if (typeof p == "string") if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var b = h(v.as, v.crossOrigin);
                    f.d.M(p, {
                        crossOrigin: b,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    });
                }
            } else v == null && f.d.M(p);
        }, tt.preload = function(p, v) {
            if (typeof p == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
                var b = v.as, R = h(b, v.crossOrigin);
                f.d.L(p, b, {
                    crossOrigin: R,
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
        }, tt.preloadModule = function(p, v) {
            if (typeof p == "string") if (v) {
                var b = h(v.as, v.crossOrigin);
                f.d.m(p, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: b,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                });
            } else f.d.m(p);
        }, tt.requestFormReset = function(p) {
            f.d.r(p);
        }, tt.unstable_batchedUpdates = function(p, v) {
            return p(v);
        }, tt.useFormState = function(p, v, b) {
            return m.H.useFormState(p, v, b);
        }, tt.useFormStatus = function() {
            return m.H.useHostTransitionStatus();
        }, tt.version = "19.1.0", tt;
    }
    var zh;
    function $1() {
        if (zh) return af.exports;
        zh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), af.exports = Z1(), af.exports;
    }
    var Uh;
    function J1() {
        if (Uh) return Xa;
        Uh = 1;
        var u = X1(), r = Ui(), c = $1();
        function f(e) {
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
        function s(e) {
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
        function h(e) {
            if (s(e) !== e) throw Error(f(188));
        }
        function p(e) {
            var t = e.alternate;
            if (!t) {
                if (t = s(e), t === null) throw Error(f(188));
                return t !== e ? null : e;
            }
            for(var l = e, n = t;;){
                var a = l.return;
                if (a === null) break;
                var i = a.alternate;
                if (i === null) {
                    if (n = a.return, n !== null) {
                        l = n;
                        continue;
                    }
                    break;
                }
                if (a.child === i.child) {
                    for(i = a.child; i;){
                        if (i === l) return h(a), e;
                        if (i === n) return h(a), t;
                        i = i.sibling;
                    }
                    throw Error(f(188));
                }
                if (l.return !== n.return) l = a, n = i;
                else {
                    for(var d = !1, y = a.child; y;){
                        if (y === l) {
                            d = !0, l = a, n = i;
                            break;
                        }
                        if (y === n) {
                            d = !0, n = a, l = i;
                            break;
                        }
                        y = y.sibling;
                    }
                    if (!d) {
                        for(y = i.child; y;){
                            if (y === l) {
                                d = !0, l = i, n = a;
                                break;
                            }
                            if (y === n) {
                                d = !0, n = i, l = a;
                                break;
                            }
                            y = y.sibling;
                        }
                        if (!d) throw Error(f(189));
                    }
                }
                if (l.alternate !== n) throw Error(f(190));
            }
            if (l.tag !== 3) throw Error(f(188));
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
        var b = Object.assign, R = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), j = Symbol.for("react.consumer"), k = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), Ce = Symbol.for("react.memo_cache_sentinel"), je = Symbol.iterator;
        function Ue(e) {
            return e === null || typeof e != "object" ? null : (e = je && e[je] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var Ul = Symbol.for("react.client.reference");
        function Pl(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === Ul ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case O:
                    return "Fragment";
                case w:
                    return "Profiler";
                case D:
                    return "StrictMode";
                case K:
                    return "Suspense";
                case W:
                    return "SuspenseList";
                case ne:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case T:
                    return "Portal";
                case k:
                    return (e.displayName || "Context") + ".Provider";
                case j:
                    return (e._context.displayName || "Context") + ".Consumer";
                case V:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case $:
                    return t = e.displayName || null, t !== null ? t : Pl(e.type) || "Memo";
                case J:
                    t = e._payload, e = e._init;
                    try {
                        return Pl(e(t));
                    } catch  {}
            }
            return null;
        }
        var We = Array.isArray, P = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Re = [], E = -1;
        function L(e) {
            return {
                current: e
            };
        }
        function X(e) {
            0 > E || (e.current = Re[E], Re[E] = null, E--);
        }
        function G(e, t) {
            E++, Re[E] = e.current, e.current = t;
        }
        var I = L(null), pe = L(null), ie = L(null), ot = L(null);
        function Oe(e, t) {
            switch(G(ie, t), G(pe, e), G(I, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? th(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = th(t), e = lh(t, e);
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
            X(I), G(I, e);
        }
        function il() {
            X(I), X(pe), X(ie);
        }
        function Hi(e) {
            e.memoizedState !== null && G(ot, e);
            var t = I.current, l = lh(t, e.type);
            t !== l && (G(pe, e), G(I, l));
        }
        function ru(e) {
            pe.current === e && (X(I), X(pe)), ot.current === e && (X(ot), ja._currentValue = le);
        }
        var ki = Object.prototype.hasOwnProperty, Li = u.unstable_scheduleCallback, ji = u.unstable_cancelCallback, Em = u.unstable_shouldYield, _m = u.unstable_requestPaint, zt = u.unstable_now, Rm = u.unstable_getCurrentPriorityLevel, zf = u.unstable_ImmediatePriority, Uf = u.unstable_UserBlockingPriority, cu = u.unstable_NormalPriority, Tm = u.unstable_LowPriority, Pf = u.unstable_IdlePriority, Am = u.log, Om = u.unstable_setDisableYieldValue, $n = null, st = null;
        function rl(e) {
            if (typeof Am == "function" && Om(e), st && typeof st.setStrictMode == "function") try {
                st.setStrictMode($n, e);
            } catch  {}
        }
        var dt = Math.clz32 ? Math.clz32 : Mm, Nm = Math.log, xm = Math.LN2;
        function Mm(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Nm(e) / xm | 0) | 0;
        }
        var fu = 256, ou = 4194304;
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
        function su(e, t, l) {
            var n = e.pendingLanes;
            if (n === 0) return 0;
            var a = 0, i = e.suspendedLanes, d = e.pingedLanes;
            e = e.warmLanes;
            var y = n & 134217727;
            return y !== 0 ? (n = y & ~i, n !== 0 ? a = ql(n) : (d &= y, d !== 0 ? a = ql(d) : l || (l = y & ~e, l !== 0 && (a = ql(l))))) : (y = n & ~i, y !== 0 ? a = ql(y) : d !== 0 ? a = ql(d) : l || (l = n & ~e, l !== 0 && (a = ql(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
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
        function qf() {
            var e = fu;
            return fu <<= 1, (fu & 4194048) === 0 && (fu = 256), e;
        }
        function Hf() {
            var e = ou;
            return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
        }
        function Qi(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Fn(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Dm(e, t, l, n, a, i) {
            var d = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var y = e.entanglements, g = e.expirationTimes, M = e.hiddenUpdates;
            for(l = d & ~l; 0 < l;){
                var U = 31 - dt(l), H = 1 << U;
                y[U] = 0, g[U] = -1;
                var C = M[U];
                if (C !== null) for(M[U] = null, U = 0; U < C.length; U++){
                    var B = C[U];
                    B !== null && (B.lane &= -536870913);
                }
                l &= ~H;
            }
            n !== 0 && kf(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(d & ~t));
        }
        function kf(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var n = 31 - dt(t);
            e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
        }
        function Lf(e, t) {
            var l = e.entangledLanes |= t;
            for(e = e.entanglements; l;){
                var n = 31 - dt(l), a = 1 << n;
                a & t | e[n] & t && (e[n] |= t), l &= ~a;
            }
        }
        function Ki(e) {
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
        function Gi(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function jf() {
            var e = Y.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Eh(e.type));
        }
        function Bm(e, t) {
            var l = Y.p;
            try {
                return Y.p = e, t();
            } finally{
                Y.p = l;
            }
        }
        var cl = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + cl, at = "__reactProps$" + cl, cn = "__reactContainer$" + cl, Yi = "__reactEvents$" + cl, wm = "__reactListeners$" + cl, zm = "__reactHandles$" + cl, Qf = "__reactResources$" + cl, Wn = "__reactMarker$" + cl;
        function Vi(e) {
            delete e[Ie], delete e[at], delete e[Yi], delete e[wm], delete e[zm];
        }
        function fn(e) {
            var t = e[Ie];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[cn] || l[Ie]) {
                    if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = ih(e); e !== null;){
                        if (l = e[Ie]) return l;
                        e = ih(e);
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
            throw Error(f(33));
        }
        function sn(e) {
            var t = e[Qf];
            return t || (t = e[Qf] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Qe(e) {
            e[Wn] = !0;
        }
        var Kf = new Set, Gf = {};
        function Hl(e, t) {
            dn(e, t), dn(e + "Capture", t);
        }
        function dn(e, t) {
            for(Gf[e] = t, e = 0; e < t.length; e++)Kf.add(t[e]);
        }
        var Um = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Yf = {}, Vf = {};
        function Pm(e) {
            return ki.call(Vf, e) ? !0 : ki.call(Yf, e) ? !1 : Um.test(e) ? Vf[e] = !0 : (Yf[e] = !0, !1);
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
        function jt(e, t, l, n) {
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
        var Xi, Xf;
        function hn(e) {
            if (Xi === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Xi = t && t[1] || "", Xf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Xi + e + Xf;
        }
        var Zi = !1;
        function $i(e, t) {
            if (!e || Zi) return "";
            Zi = !0;
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
                                        var C = B;
                                    }
                                    Reflect.construct(e, [], H);
                                } else {
                                    try {
                                        H.call();
                                    } catch (B) {
                                        C = B;
                                    }
                                    e.call(H.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (B) {
                                    C = B;
                                }
                                (H = e()) && typeof H.catch == "function" && H.catch(function() {});
                            }
                        } catch (B) {
                            if (B && C && typeof B.stack == "string") return [
                                B.stack,
                                C.stack
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
                var i = n.DetermineComponentFrameRoot(), d = i[0], y = i[1];
                if (d && y) {
                    var g = d.split(`
`), M = y.split(`
`);
                    for(a = n = 0; n < g.length && !g[n].includes("DetermineComponentFrameRoot");)n++;
                    for(; a < M.length && !M[a].includes("DetermineComponentFrameRoot");)a++;
                    if (n === g.length || a === M.length) for(n = g.length - 1, a = M.length - 1; 1 <= n && 0 <= a && g[n] !== M[a];)a--;
                    for(; 1 <= n && 0 <= a; n--, a--)if (g[n] !== M[a]) {
                        if (n !== 1 || a !== 1) do if (n--, a--, 0 > a || g[n] !== M[a]) {
                            var U = `
` + g[n].replace(" at new ", " at ");
                            return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U;
                        }
                        while (1 <= n && 0 <= a);
                        break;
                    }
                }
            } finally{
                Zi = !1, Error.prepareStackTrace = l;
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
                    return $i(e.type, !1);
                case 11:
                    return $i(e.type.render, !1);
                case 1:
                    return $i(e.type, !0);
                case 31:
                    return hn("Activity");
                default:
                    return "";
            }
        }
        function Zf(e) {
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
        function $f(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Hm(e) {
            var t = $f(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
            if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
                var a = l.get, i = l.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return a.call(this);
                    },
                    set: function(d) {
                        n = "" + d, i.call(this, d);
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
            e._valueTracker || (e._valueTracker = Hm(e));
        }
        function Jf(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), n = "";
            return e && (n = $f(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
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
        function Et(e) {
            return e.replace(km, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Ji(e, t, l, n, a, i, d, y) {
            e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Fi(e, d, St(t)) : l != null ? Fi(e, d, St(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + St(y) : e.removeAttribute("name");
        }
        function Ff(e, t, l, n, a, i, d, y) {
            if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
                if (!(i !== "submit" && i !== "reset" || t != null)) return;
                l = l != null ? "" + St(l) : "", t = t != null ? "" + St(t) : l, y || t === e.value || (e.value = t), e.defaultValue = t;
            }
            n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = y ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d);
        }
        function Fi(e, t, l) {
            t === "number" && mu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
        }
        function pn(e, t, l, n) {
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
        function Wf(e, t, l) {
            if (t != null && (t = "" + St(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + St(l) : "";
        }
        function If(e, t, l, n) {
            if (t == null) {
                if (n != null) {
                    if (l != null) throw Error(f(92));
                    if (We(n)) {
                        if (1 < n.length) throw Error(f(93));
                        n = n[0];
                    }
                    l = n;
                }
                l == null && (l = ""), t = l;
            }
            l = St(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n);
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
        var Lm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function eo(e, t, l) {
            var n = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Lm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function to(e, t, l) {
            if (t != null && typeof t != "object") throw Error(f(62));
            if (e = e.style, l != null) {
                for(var n in l)!l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
                for(var a in t)n = t[a], t.hasOwnProperty(a) && l[a] !== n && eo(e, a, n);
            } else for(var i in t)t.hasOwnProperty(i) && eo(e, i, t[i]);
        }
        function Wi(e) {
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
        var jm = new Map([
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
        var Ii = null;
        function er(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var yn = null, vn = null;
        function lo(e) {
            var t = on(e);
            if (t && (e = t.stateNode)) {
                var l = e[at] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (Ji(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var n = l[t];
                                if (n !== e && n.form === e.form) {
                                    var a = n[at] || null;
                                    if (!a) throw Error(f(90));
                                    Ji(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)n = l[t], n.form === e.form && Jf(n);
                        }
                        break e;
                    case "textarea":
                        Wf(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && pn(e, !!l.multiple, t, !1);
                }
            }
        }
        var tr = !1;
        function no(e, t, l) {
            if (tr) return e(t, l);
            tr = !0;
            try {
                var n = e(t);
                return n;
            } finally{
                if (tr = !1, (yn !== null || vn !== null) && (ti(), yn && (t = yn, e = vn, vn = yn = null, lo(t), e))) for(t = 0; t < e.length; t++)lo(e[t]);
            }
        }
        function ea(e, t) {
            var l = e.stateNode;
            if (l === null) return null;
            var n = l[at] || null;
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
            if (l && typeof l != "function") throw Error(f(231, t, typeof l));
            return l;
        }
        var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lr = !1;
        if (Qt) try {
            var ta = {};
            Object.defineProperty(ta, "passive", {
                get: function() {
                    lr = !0;
                }
            }), window.addEventListener("test", ta, ta), window.removeEventListener("test", ta, ta);
        } catch  {
            lr = !1;
        }
        var fl = null, nr = null, vu = null;
        function ao() {
            if (vu) return vu;
            var e, t = nr, l = t.length, n, a = "value" in fl ? fl.value : fl.textContent, i = a.length;
            for(e = 0; e < l && t[e] === a[e]; e++);
            var d = l - e;
            for(n = 1; n <= d && t[l - n] === a[i - n]; n++);
            return vu = a.slice(e, 1 < n ? 1 - n : void 0);
        }
        function gu(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function bu() {
            return !0;
        }
        function uo() {
            return !1;
        }
        function ut(e) {
            function t(l, n, a, i, d) {
                this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = d, this.currentTarget = null;
                for(var y in e)e.hasOwnProperty(y) && (l = e[y], this[y] = l ? l(i) : i[y]);
                return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bu : uo, this.isPropagationStopped = uo, this;
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
        }, Su = ut(kl), la = b({}, kl, {
            view: 0,
            detail: 0
        }), Km = ut(la), ar, ur, na, Eu = b({}, la, {
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
            getModifierState: rr,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== na && (na && e.type === "mousemove" ? (ar = e.screenX - na.screenX, ur = e.screenY - na.screenY) : ur = ar = 0, na = e), ar);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : ur;
            }
        }), io = ut(Eu), Gm = b({}, Eu, {
            dataTransfer: 0
        }), Ym = ut(Gm), Vm = b({}, la, {
            relatedTarget: 0
        }), ir = ut(Vm), Xm = b({}, kl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Zm = ut(Xm), $m = b({}, kl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Jm = ut($m), Fm = b({}, kl, {
            data: 0
        }), ro = ut(Fm), Wm = {
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
        function rr() {
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
            getModifierState: rr,
            charCode: function(e) {
                return e.type === "keypress" ? gu(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? gu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), n0 = ut(l0), a0 = b({}, Eu, {
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
        }), co = ut(a0), u0 = b({}, la, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: rr
        }), i0 = ut(u0), r0 = b({}, kl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), c0 = ut(r0), f0 = b({}, Eu, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), o0 = ut(f0), s0 = b({}, kl, {
            newState: 0,
            oldState: 0
        }), d0 = ut(s0), h0 = [
            9,
            13,
            27,
            32
        ], cr = Qt && "CompositionEvent" in window, aa = null;
        Qt && "documentMode" in document && (aa = document.documentMode);
        var p0 = Qt && "TextEvent" in window && !aa, fo = Qt && (!cr || aa && 8 < aa && 11 >= aa), oo = " ", so = !1;
        function ho(e, t) {
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
        function po(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var gn = !1;
        function m0(e, t) {
            switch(e){
                case "compositionend":
                    return po(t);
                case "keypress":
                    return t.which !== 32 ? null : (so = !0, oo);
                case "textInput":
                    return e = t.data, e === oo && so ? null : e;
                default:
                    return null;
            }
        }
        function y0(e, t) {
            if (gn) return e === "compositionend" || !cr && ho(e, t) ? (e = ao(), vu = nr = fl = null, gn = !1, e) : null;
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
                    return fo && t.locale !== "ko" ? null : t.data;
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
        function mo(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!v0[e.type] : t === "textarea";
        }
        function yo(e, t, l, n) {
            yn ? vn ? vn.push(n) : vn = [
                n
            ] : yn = n, t = ri(t, "onChange"), 0 < t.length && (l = new Su("onChange", "change", null, l, n), e.push({
                event: l,
                listeners: t
            }));
        }
        var ua = null, ia = null;
        function g0(e) {
            Jd(e, 0);
        }
        function _u(e) {
            var t = In(e);
            if (Jf(t)) return e;
        }
        function vo(e, t) {
            if (e === "change") return t;
        }
        var go = !1;
        if (Qt) {
            var fr;
            if (Qt) {
                var or = "oninput" in document;
                if (!or) {
                    var bo = document.createElement("div");
                    bo.setAttribute("oninput", "return;"), or = typeof bo.oninput == "function";
                }
                fr = or;
            } else fr = !1;
            go = fr && (!document.documentMode || 9 < document.documentMode);
        }
        function So() {
            ua && (ua.detachEvent("onpropertychange", Eo), ia = ua = null);
        }
        function Eo(e) {
            if (e.propertyName === "value" && _u(ia)) {
                var t = [];
                yo(t, ia, e, er(e)), no(g0, t);
            }
        }
        function b0(e, t, l) {
            e === "focusin" ? (So(), ua = t, ia = l, ua.attachEvent("onpropertychange", Eo)) : e === "focusout" && So();
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
        function R0(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var ht = typeof Object.is == "function" ? Object.is : R0;
        function ra(e, t) {
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
        function _o(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function Ro(e, t) {
            var l = _o(e);
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
                l = _o(l);
            }
        }
        function To(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? To(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function Ao(e) {
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
        function sr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var T0 = Qt && "documentMode" in document && 11 >= document.documentMode, bn = null, dr = null, ca = null, hr = !1;
        function Oo(e, t, l) {
            var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            hr || bn == null || bn !== mu(n) || (n = bn, "selectionStart" in n && sr(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), ca && ra(ca, n) || (ca = n, n = ri(dr, "onSelect"), 0 < n.length && (t = new Su("onSelect", "select", null, t, l), e.push({
                event: t,
                listeners: n
            }), t.target = bn)));
        }
        function Ll(e, t) {
            var l = {};
            return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
        }
        var Sn = {
            animationend: Ll("Animation", "AnimationEnd"),
            animationiteration: Ll("Animation", "AnimationIteration"),
            animationstart: Ll("Animation", "AnimationStart"),
            transitionrun: Ll("Transition", "TransitionRun"),
            transitionstart: Ll("Transition", "TransitionStart"),
            transitioncancel: Ll("Transition", "TransitionCancel"),
            transitionend: Ll("Transition", "TransitionEnd")
        }, pr = {}, No = {};
        Qt && (No = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
        function jl(e) {
            if (pr[e]) return pr[e];
            if (!Sn[e]) return e;
            var t = Sn[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in No) return pr[e] = t[l];
            return e;
        }
        var xo = jl("animationend"), Mo = jl("animationiteration"), Co = jl("animationstart"), A0 = jl("transitionrun"), O0 = jl("transitionstart"), N0 = jl("transitioncancel"), Do = jl("transitionend"), Bo = new Map, mr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        mr.push("scrollEnd");
        function Ct(e, t) {
            Bo.set(e, t), Hl(t, [
                e
            ]);
        }
        var wo = new WeakMap;
        function _t(e, t) {
            if (typeof e == "object" && e !== null) {
                var l = wo.get(e);
                return l !== void 0 ? l : (t = {
                    value: e,
                    source: t,
                    stack: Zf(t)
                }, wo.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Zf(t)
            };
        }
        var Rt = [], En = 0, yr = 0;
        function Ru() {
            for(var e = En, t = yr = En = 0; t < e;){
                var l = Rt[t];
                Rt[t++] = null;
                var n = Rt[t];
                Rt[t++] = null;
                var a = Rt[t];
                Rt[t++] = null;
                var i = Rt[t];
                if (Rt[t++] = null, n !== null && a !== null) {
                    var d = n.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), n.pending = a;
                }
                i !== 0 && zo(l, a, i);
            }
        }
        function Tu(e, t, l, n) {
            Rt[En++] = e, Rt[En++] = t, Rt[En++] = l, Rt[En++] = n, yr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
        }
        function vr(e, t, l, n) {
            return Tu(e, t, l, n), Au(e);
        }
        function _n(e, t) {
            return Tu(e, null, null, t), Au(e);
        }
        function zo(e, t, l) {
            e.lanes |= l;
            var n = e.alternate;
            n !== null && (n.lanes |= l);
            for(var a = !1, i = e.return; i !== null;)i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
            return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - dt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [
                t
            ] : n.push(t), t.lane = l | 536870912), i) : null;
        }
        function Au(e) {
            if (50 < wa) throw wa = 0, Rc = null, Error(f(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var Rn = {};
        function x0(e, t, l, n) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function pt(e, t, l, n) {
            return new x0(e, t, l, n);
        }
        function gr(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Kt(e, t) {
            var l = e.alternate;
            return l === null ? (l = pt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
        }
        function Uo(e, t) {
            e.flags &= 65011714;
            var l = e.alternate;
            return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function Ou(e, t, l, n, a, i) {
            var d = 0;
            if (n = e, typeof e == "function") gr(e) && (d = 1);
            else if (typeof e == "string") d = C1(e, l, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case ne:
                    return e = pt(31, l, t, a), e.elementType = ne, e.lanes = i, e;
                case O:
                    return Ql(l.children, a, i, t);
                case D:
                    d = 8, a |= 24;
                    break;
                case w:
                    return e = pt(12, l, t, a | 2), e.elementType = w, e.lanes = i, e;
                case K:
                    return e = pt(13, l, t, a), e.elementType = K, e.lanes = i, e;
                case W:
                    return e = pt(19, l, t, a), e.elementType = W, e.lanes = i, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case z:
                        case k:
                            d = 10;
                            break e;
                        case j:
                            d = 9;
                            break e;
                        case V:
                            d = 11;
                            break e;
                        case $:
                            d = 14;
                            break e;
                        case J:
                            d = 16, n = null;
                            break e;
                    }
                    d = 29, l = Error(f(130, e === null ? "null" : typeof e, "")), n = null;
            }
            return t = pt(d, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
        }
        function Ql(e, t, l, n) {
            return e = pt(7, e, n, t), e.lanes = l, e;
        }
        function br(e, t, l) {
            return e = pt(6, e, null, t), e.lanes = l, e;
        }
        function Sr(e, t, l) {
            return t = pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var Tn = [], An = 0, Nu = null, xu = 0, Tt = [], At = 0, Kl = null, Gt = 1, Yt = "";
        function Gl(e, t) {
            Tn[An++] = xu, Tn[An++] = Nu, Nu = e, xu = t;
        }
        function Po(e, t, l) {
            Tt[At++] = Gt, Tt[At++] = Yt, Tt[At++] = Kl, Kl = e;
            var n = Gt;
            e = Yt;
            var a = 32 - dt(n) - 1;
            n &= ~(1 << a), l += 1;
            var i = 32 - dt(t) + a;
            if (30 < i) {
                var d = a - a % 5;
                i = (n & (1 << d) - 1).toString(32), n >>= d, a -= d, Gt = 1 << 32 - dt(t) + a | l << a | n, Yt = i + e;
            } else Gt = 1 << i | l << a | n, Yt = e;
        }
        function Er(e) {
            e.return !== null && (Gl(e, 1), Po(e, 1, 0));
        }
        function _r(e) {
            for(; e === Nu;)Nu = Tn[--An], Tn[An] = null, xu = Tn[--An], Tn[An] = null;
            for(; e === Kl;)Kl = Tt[--At], Tt[At] = null, Yt = Tt[--At], Tt[At] = null, Gt = Tt[--At], Tt[At] = null;
        }
        var nt = null, De = null, ye = !1, Yl = null, Ut = !1, Rr = Error(f(519));
        function Vl(e) {
            var t = Error(f(418, ""));
            throw sa(_t(t, e)), Rr;
        }
        function qo(e) {
            var t = e.stateNode, l = e.type, n = e.memoizedProps;
            switch(t[Ie] = e, t[at] = n, l){
                case "dialog":
                    de("cancel", t), de("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    de("load", t);
                    break;
                case "video":
                case "audio":
                    for(l = 0; l < Ua.length; l++)de(Ua[l], t);
                    break;
                case "source":
                    de("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    de("error", t), de("load", t);
                    break;
                case "details":
                    de("toggle", t);
                    break;
                case "input":
                    de("invalid", t), Ff(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), pu(t);
                    break;
                case "select":
                    de("invalid", t);
                    break;
                case "textarea":
                    de("invalid", t), If(t, n.value, n.defaultValue, n.children), pu(t);
            }
            l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || eh(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = ci), t = !0) : t = !1, t || Vl(e);
        }
        function Ho(e) {
            for(nt = e.return; nt;)switch(nt.tag){
                case 5:
                case 13:
                    Ut = !1;
                    return;
                case 27:
                case 3:
                    Ut = !0;
                    return;
                default:
                    nt = nt.return;
            }
        }
        function fa(e) {
            if (e !== nt) return !1;
            if (!ye) return Ho(e), ye = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || kc(e.type, e.memoizedProps)), l = !l), l && De && Vl(e), Ho(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (l = e.data, l === "/$") {
                            if (t === 0) {
                                De = Bt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else l !== "$" && l !== "$!" && l !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    De = null;
                }
            } else t === 27 ? (t = De, Al(e.type) ? (e = Kc, Kc = null, De = e) : De = t) : De = nt ? Bt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function oa() {
            De = nt = null, ye = !1;
        }
        function ko() {
            var e = Yl;
            return e !== null && (ct === null ? ct = e : ct.push.apply(ct, e), Yl = null), e;
        }
        function sa(e) {
            Yl === null ? Yl = [
                e
            ] : Yl.push(e);
        }
        var Tr = L(null), Xl = null, Vt = null;
        function ol(e, t, l) {
            G(Tr, t._currentValue), t._currentValue = l;
        }
        function Xt(e) {
            e._currentValue = Tr.current, X(Tr);
        }
        function Ar(e, t, l) {
            for(; e !== null;){
                var n = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
                e = e.return;
            }
        }
        function Or(e, t, l, n) {
            var a = e.child;
            for(a !== null && (a.return = e); a !== null;){
                var i = a.dependencies;
                if (i !== null) {
                    var d = a.child;
                    i = i.firstContext;
                    e: for(; i !== null;){
                        var y = i;
                        i = a;
                        for(var g = 0; g < t.length; g++)if (y.context === t[g]) {
                            i.lanes |= l, y = i.alternate, y !== null && (y.lanes |= l), Ar(i.return, l, e), n || (d = null);
                            break e;
                        }
                        i = y.next;
                    }
                } else if (a.tag === 18) {
                    if (d = a.return, d === null) throw Error(f(341));
                    d.lanes |= l, i = d.alternate, i !== null && (i.lanes |= l), Ar(d, l, e), d = null;
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
            for(var a = t, i = !1; a !== null;){
                if (!i) {
                    if ((a.flags & 524288) !== 0) i = !0;
                    else if ((a.flags & 262144) !== 0) break;
                }
                if (a.tag === 10) {
                    var d = a.alternate;
                    if (d === null) throw Error(f(387));
                    if (d = d.memoizedProps, d !== null) {
                        var y = a.type;
                        ht(a.pendingProps.value, d.value) || (e !== null ? e.push(y) : e = [
                            y
                        ]);
                    }
                } else if (a === ot.current) {
                    if (d = a.alternate, d === null) throw Error(f(387));
                    d.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(ja) : e = [
                        ja
                    ]);
                }
                a = a.return;
            }
            e !== null && Or(t, e, l, n), t.flags |= 262144;
        }
        function Mu(e) {
            for(e = e.firstContext; e !== null;){
                if (!ht(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function Zl(e) {
            Xl = e, Vt = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function et(e) {
            return Lo(Xl, e);
        }
        function Cu(e, t) {
            return Xl === null && Zl(e), Lo(e, t);
        }
        function Lo(e, t) {
            var l = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, Vt === null) {
                if (e === null) throw Error(f(308));
                Vt = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else Vt = Vt.next = t;
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
        }, C0 = u.unstable_scheduleCallback, D0 = u.unstable_NormalPriority, He = {
            $$typeof: k,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Nr() {
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
        var pa = null, xr = 0, On = 0, Nn = null;
        function B0(e, t) {
            if (pa === null) {
                var l = pa = [];
                xr = 0, On = Cc(), Nn = {
                    status: "pending",
                    value: void 0,
                    then: function(n) {
                        l.push(n);
                    }
                };
            }
            return xr++, t.then(jo, jo), t;
        }
        function jo() {
            if (--xr === 0 && pa !== null) {
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
        var Qo = P.S;
        P.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && B0(e, t), Qo !== null && Qo(e, t);
        };
        var $l = L(null);
        function Mr() {
            var e = $l.current;
            return e !== null ? e : Ae.pooledCache;
        }
        function Du(e, t) {
            t === null ? G($l, $l.current) : G($l, t.pool);
        }
        function Ko() {
            var e = Mr();
            return e === null ? null : {
                parent: He._currentValue,
                pool: e
            };
        }
        var ma = Error(f(460)), Go = Error(f(474)), Bu = Error(f(542)), Cr = {
            then: function() {}
        };
        function Yo(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function wu() {}
        function Vo(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(wu, wu), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Zo(e), e;
                default:
                    if (typeof t.status == "string") t.then(wu, wu);
                    else {
                        if (e = Ae, e !== null && 100 < e.shellSuspendCounter) throw Error(f(482));
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
                            throw e = t.reason, Zo(e), e;
                    }
                    throw ya = t, ma;
            }
        }
        var ya = null;
        function Xo() {
            if (ya === null) throw Error(f(459));
            var e = ya;
            return ya = null, e;
        }
        function Zo(e) {
            if (e === ma || e === Bu) throw Error(f(483));
        }
        var sl = !1;
        function Dr(e) {
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
        function Br(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            });
        }
        function dl(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function hl(e, t, l) {
            var n = e.updateQueue;
            if (n === null) return null;
            if (n = n.shared, (ve & 2) !== 0) {
                var a = n.pending;
                return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Au(e), zo(e, null, l), t;
            }
            return Tu(e, n, t, l), Au(e);
        }
        function va(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, Lf(e, l);
            }
        }
        function wr(e, t) {
            var l = e.updateQueue, n = e.alternate;
            if (n !== null && (n = n.updateQueue, l === n)) {
                var a = null, i = null;
                if (l = l.firstBaseUpdate, l !== null) {
                    do {
                        var d = {
                            lane: l.lane,
                            tag: l.tag,
                            payload: l.payload,
                            callback: null,
                            next: null
                        };
                        i === null ? a = i = d : i = i.next = d, l = l.next;
                    }while (l !== null);
                    i === null ? a = i = t : i = i.next = t;
                } else a = i = t;
                l = {
                    baseState: n.baseState,
                    firstBaseUpdate: a,
                    lastBaseUpdate: i,
                    shared: n.shared,
                    callbacks: n.callbacks
                }, e.updateQueue = l;
                return;
            }
            e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
        }
        var zr = !1;
        function ga() {
            if (zr) {
                var e = Nn;
                if (e !== null) throw e;
            }
        }
        function ba(e, t, l, n) {
            zr = !1;
            var a = e.updateQueue;
            sl = !1;
            var i = a.firstBaseUpdate, d = a.lastBaseUpdate, y = a.shared.pending;
            if (y !== null) {
                a.shared.pending = null;
                var g = y, M = g.next;
                g.next = null, d === null ? i = M : d.next = M, d = g;
                var U = e.alternate;
                U !== null && (U = U.updateQueue, y = U.lastBaseUpdate, y !== d && (y === null ? U.firstBaseUpdate = M : y.next = M, U.lastBaseUpdate = g));
            }
            if (i !== null) {
                var H = a.baseState;
                d = 0, U = M = g = null, y = i;
                do {
                    var C = y.lane & -536870913, B = C !== y.lane;
                    if (B ? (he & C) === C : (n & C) === C) {
                        C !== 0 && C === On && (zr = !0), U !== null && (U = U.next = {
                            lane: 0,
                            tag: y.tag,
                            payload: y.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var ae = e, ee = y;
                            C = t;
                            var Ee = l;
                            switch(ee.tag){
                                case 1:
                                    if (ae = ee.payload, typeof ae == "function") {
                                        H = ae.call(Ee, H, C);
                                        break e;
                                    }
                                    H = ae;
                                    break e;
                                case 3:
                                    ae.flags = ae.flags & -65537 | 128;
                                case 0:
                                    if (ae = ee.payload, C = typeof ae == "function" ? ae.call(Ee, H, C) : ae, C == null) break e;
                                    H = b({}, H, C);
                                    break e;
                                case 2:
                                    sl = !0;
                            }
                        }
                        C = y.callback, C !== null && (e.flags |= 64, B && (e.flags |= 8192), B = a.callbacks, B === null ? a.callbacks = [
                            C
                        ] : B.push(C));
                    } else B = {
                        lane: C,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    }, U === null ? (M = U = B, g = H) : U = U.next = B, d |= C;
                    if (y = y.next, y === null) {
                        if (y = a.shared.pending, y === null) break;
                        B = y, y = B.next, B.next = null, a.lastBaseUpdate = B, a.shared.pending = null;
                    }
                }while (!0);
                U === null && (g = H), a.baseState = g, a.firstBaseUpdate = M, a.lastBaseUpdate = U, i === null && (a.shared.lanes = 0), El |= d, e.lanes = d, e.memoizedState = H;
            }
        }
        function $o(e, t) {
            if (typeof e != "function") throw Error(f(191, e));
            e.call(t);
        }
        function Jo(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)$o(l[e], t);
        }
        var xn = L(null), zu = L(0);
        function Fo(e, t) {
            e = el, G(zu, e), G(xn, t), el = e | t.baseLanes;
        }
        function Ur() {
            G(zu, el), G(xn, xn.current);
        }
        function Pr() {
            el = zu.current, X(xn), X(zu);
        }
        var pl = 0, fe = null, be = null, Pe = null, Uu = !1, Mn = !1, Jl = !1, Pu = 0, Sa = 0, Cn = null, z0 = 0;
        function we() {
            throw Error(f(321));
        }
        function qr(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!ht(e[l], t[l])) return !1;
            return !0;
        }
        function Hr(e, t, l, n, a, i) {
            return pl = i, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? zs : Us, Jl = !1, i = l(n, a), Jl = !1, Mn && (i = Io(t, l, n, a)), Wo(e), i;
        }
        function Wo(e) {
            P.H = Qu;
            var t = be !== null && be.next !== null;
            if (pl = 0, Pe = be = fe = null, Uu = !1, Sa = 0, Cn = null, t) throw Error(f(300));
            e === null || Ke || (e = e.dependencies, e !== null && Mu(e) && (Ke = !0));
        }
        function Io(e, t, l, n) {
            fe = e;
            var a = 0;
            do {
                if (Mn && (Cn = null), Sa = 0, Mn = !1, 25 <= a) throw Error(f(301));
                if (a += 1, Pe = be = null, e.updateQueue != null) {
                    var i = e.updateQueue;
                    i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
                }
                P.H = j0, i = t(l, n);
            }while (Mn);
            return i;
        }
        function U0() {
            var e = P.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? Ea(t) : t, e = e.useState()[0], (be !== null ? be.memoizedState : null) !== e && (fe.flags |= 1024), t;
        }
        function kr() {
            var e = Pu !== 0;
            return Pu = 0, e;
        }
        function Lr(e, t, l) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
        }
        function jr(e) {
            if (Uu) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                Uu = !1;
            }
            pl = 0, Pe = be = fe = null, Mn = !1, Sa = Pu = 0, Cn = null;
        }
        function it() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Pe === null ? fe.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
        }
        function qe() {
            if (be === null) {
                var e = fe.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = be.next;
            var t = Pe === null ? fe.memoizedState : Pe.next;
            if (t !== null) Pe = t, be = e;
            else {
                if (e === null) throw fe.alternate === null ? Error(f(467)) : Error(f(310));
                be = e, e = {
                    memoizedState: be.memoizedState,
                    baseState: be.baseState,
                    baseQueue: be.baseQueue,
                    queue: be.queue,
                    next: null
                }, Pe === null ? fe.memoizedState = Pe = e : Pe = Pe.next = e;
            }
            return Pe;
        }
        function Qr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function Ea(e) {
            var t = Sa;
            return Sa += 1, Cn === null && (Cn = []), e = Vo(Cn, e, t), t = fe, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? zs : Us), e;
        }
        function qu(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return Ea(e);
                if (e.$$typeof === k) return et(e);
            }
            throw Error(f(438, String(e)));
        }
        function Kr(e) {
            var t = null, l = fe.updateQueue;
            if (l !== null && (t = l.memoCache), t == null) {
                var n = fe.alternate;
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
            }), l === null && (l = Qr(), fe.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), n = 0; n < e; n++)l[n] = Ce;
            return t.index++, l;
        }
        function Zt(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function Hu(e) {
            var t = qe();
            return Gr(t, be, e);
        }
        function Gr(e, t, l) {
            var n = e.queue;
            if (n === null) throw Error(f(311));
            n.lastRenderedReducer = l;
            var a = e.baseQueue, i = n.pending;
            if (i !== null) {
                if (a !== null) {
                    var d = a.next;
                    a.next = i.next, i.next = d;
                }
                t.baseQueue = a = i, n.pending = null;
            }
            if (i = e.baseState, a === null) e.memoizedState = i;
            else {
                t = a.next;
                var y = d = null, g = null, M = t, U = !1;
                do {
                    var H = M.lane & -536870913;
                    if (H !== M.lane ? (he & H) === H : (pl & H) === H) {
                        var C = M.revertLane;
                        if (C === 0) g !== null && (g = g.next = {
                            lane: 0,
                            revertLane: 0,
                            action: M.action,
                            hasEagerState: M.hasEagerState,
                            eagerState: M.eagerState,
                            next: null
                        }), H === On && (U = !0);
                        else if ((pl & C) === C) {
                            M = M.next, C === On && (U = !0);
                            continue;
                        } else H = {
                            lane: 0,
                            revertLane: M.revertLane,
                            action: M.action,
                            hasEagerState: M.hasEagerState,
                            eagerState: M.eagerState,
                            next: null
                        }, g === null ? (y = g = H, d = i) : g = g.next = H, fe.lanes |= C, El |= C;
                        H = M.action, Jl && l(i, H), i = M.hasEagerState ? M.eagerState : l(i, H);
                    } else C = {
                        lane: H,
                        revertLane: M.revertLane,
                        action: M.action,
                        hasEagerState: M.hasEagerState,
                        eagerState: M.eagerState,
                        next: null
                    }, g === null ? (y = g = C, d = i) : g = g.next = C, fe.lanes |= H, El |= H;
                    M = M.next;
                }while (M !== null && M !== t);
                if (g === null ? d = i : g.next = y, !ht(i, e.memoizedState) && (Ke = !0, U && (l = Nn, l !== null))) throw l;
                e.memoizedState = i, e.baseState = d, e.baseQueue = g, n.lastRenderedState = i;
            }
            return a === null && (n.lanes = 0), [
                e.memoizedState,
                n.dispatch
            ];
        }
        function Yr(e) {
            var t = qe(), l = t.queue;
            if (l === null) throw Error(f(311));
            l.lastRenderedReducer = e;
            var n = l.dispatch, a = l.pending, i = t.memoizedState;
            if (a !== null) {
                l.pending = null;
                var d = a = a.next;
                do i = e(i, d.action), d = d.next;
                while (d !== a);
                ht(i, t.memoizedState) || (Ke = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
            }
            return [
                i,
                n
            ];
        }
        function es(e, t, l) {
            var n = fe, a = qe(), i = ye;
            if (i) {
                if (l === void 0) throw Error(f(407));
                l = l();
            } else l = t();
            var d = !ht((be || a).memoizedState, l);
            d && (a.memoizedState = l, Ke = !0), a = a.queue;
            var y = ns.bind(null, n, a, e);
            if (_a(2048, 8, y, [
                e
            ]), a.getSnapshot !== t || d || Pe !== null && Pe.memoizedState.tag & 1) {
                if (n.flags |= 2048, Dn(9, ku(), ls.bind(null, n, a, l, t), null), Ae === null) throw Error(f(349));
                i || (pl & 124) !== 0 || ts(n, t, l);
            }
            return l;
        }
        function ts(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = fe.updateQueue, t === null ? (t = Qr(), fe.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function ls(e, t, l, n) {
            t.value = l, t.getSnapshot = n, as(t) && us(e);
        }
        function ns(e, t, l) {
            return l(function() {
                as(t) && us(e);
            });
        }
        function as(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !ht(e, l);
            } catch  {
                return !0;
            }
        }
        function us(e) {
            var t = _n(e, 2);
            t !== null && bt(t, e, 2);
        }
        function Vr(e) {
            var t = it();
            if (typeof e == "function") {
                var l = e;
                if (e = l(), Jl) {
                    rl(!0);
                    try {
                        l();
                    } finally{
                        rl(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Zt,
                lastRenderedState: e
            }, t;
        }
        function is(e, t, l, n) {
            return e.baseState = l, Gr(e, be, typeof n == "function" ? n : Zt);
        }
        function P0(e, t, l, n, a) {
            if (ju(e)) throw Error(f(485));
            if (e = t.action, e !== null) {
                var i = {
                    payload: a,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(d) {
                        i.listeners.push(d);
                    }
                };
                P.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, rs(t, i)) : (i.next = l.next, t.pending = l.next = i);
            }
        }
        function rs(e, t) {
            var l = t.action, n = t.payload, a = e.state;
            if (t.isTransition) {
                var i = P.T, d = {};
                P.T = d;
                try {
                    var y = l(a, n), g = P.S;
                    g !== null && g(d, y), cs(e, t, y);
                } catch (M) {
                    Xr(e, t, M);
                } finally{
                    P.T = i;
                }
            } else try {
                i = l(a, n), cs(e, t, i);
            } catch (M) {
                Xr(e, t, M);
            }
        }
        function cs(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
                fs(e, t, n);
            }, function(n) {
                return Xr(e, t, n);
            }) : fs(e, t, l);
        }
        function fs(e, t, l) {
            t.status = "fulfilled", t.value = l, os(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, rs(e, l)));
        }
        function Xr(e, t, l) {
            var n = e.pending;
            if (e.pending = null, n !== null) {
                n = n.next;
                do t.status = "rejected", t.reason = l, os(t), t = t.next;
                while (t !== n);
            }
            e.action = null;
        }
        function os(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function ss(e, t) {
            return t;
        }
        function ds(e, t) {
            if (ye) {
                var l = Ae.formState;
                if (l !== null) {
                    e: {
                        var n = fe;
                        if (ye) {
                            if (De) {
                                t: {
                                    for(var a = De, i = Ut; a.nodeType !== 8;){
                                        if (!i) {
                                            a = null;
                                            break t;
                                        }
                                        if (a = Bt(a.nextSibling), a === null) {
                                            a = null;
                                            break t;
                                        }
                                    }
                                    i = a.data, a = i === "F!" || i === "F" ? a : null;
                                }
                                if (a) {
                                    De = Bt(a.nextSibling), n = a.data === "F!";
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
            return l = it(), l.memoizedState = l.baseState = t, n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ss,
                lastRenderedState: t
            }, l.queue = n, l = Ds.bind(null, fe, n), n.dispatch = l, n = Vr(!1), i = Wr.bind(null, fe, !1, n.queue), n = it(), a = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, n.queue = a, l = P0.bind(null, fe, a, i, l), a.dispatch = l, n.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function hs(e) {
            var t = qe();
            return ps(t, be, e);
        }
        function ps(e, t, l) {
            if (t = Gr(e, t, ss)[0], e = Hu(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var n = Ea(t);
            } catch (d) {
                throw d === ma ? Bu : d;
            }
            else n = t;
            t = qe();
            var a = t.queue, i = a.dispatch;
            return l !== t.memoizedState && (fe.flags |= 2048, Dn(9, ku(), q0.bind(null, a, l), null)), [
                n,
                i,
                e
            ];
        }
        function q0(e, t) {
            e.action = t;
        }
        function ms(e) {
            var t = qe(), l = be;
            if (l !== null) return ps(t, l, e);
            qe(), t = t.memoizedState, l = qe();
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
            }, t = fe.updateQueue, t === null && (t = Qr(), fe.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
        }
        function ku() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function ys() {
            return qe().memoizedState;
        }
        function Lu(e, t, l, n) {
            var a = it();
            n = n === void 0 ? null : n, fe.flags |= e, a.memoizedState = Dn(1 | t, ku(), l, n);
        }
        function _a(e, t, l, n) {
            var a = qe();
            n = n === void 0 ? null : n;
            var i = a.memoizedState.inst;
            be !== null && n !== null && qr(n, be.memoizedState.deps) ? a.memoizedState = Dn(t, i, l, n) : (fe.flags |= e, a.memoizedState = Dn(1 | t, i, l, n));
        }
        function vs(e, t) {
            Lu(8390656, 8, e, t);
        }
        function gs(e, t) {
            _a(2048, 8, e, t);
        }
        function bs(e, t) {
            return _a(4, 2, e, t);
        }
        function Ss(e, t) {
            return _a(4, 4, e, t);
        }
        function Es(e, t) {
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
        function _s(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, _a(4, 4, Es.bind(null, t, e), l);
        }
        function Zr() {}
        function Rs(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            return t !== null && qr(t, n[1]) ? n[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function Ts(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            if (t !== null && qr(t, n[1])) return n[0];
            if (n = e(), Jl) {
                rl(!0);
                try {
                    e();
                } finally{
                    rl(!1);
                }
            }
            return l.memoizedState = [
                n,
                t
            ], n;
        }
        function $r(e, t, l) {
            return l === void 0 || (pl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Nd(), fe.lanes |= e, El |= e, l);
        }
        function As(e, t, l, n) {
            return ht(l, t) ? l : xn.current !== null ? (e = $r(e, l, n), ht(e, t) || (Ke = !0), e) : (pl & 42) === 0 ? (Ke = !0, e.memoizedState = l) : (e = Nd(), fe.lanes |= e, El |= e, t);
        }
        function Os(e, t, l, n, a) {
            var i = Y.p;
            Y.p = i !== 0 && 8 > i ? i : 8;
            var d = P.T, y = {};
            P.T = y, Wr(e, !1, t, l);
            try {
                var g = a(), M = P.S;
                if (M !== null && M(y, g), g !== null && typeof g == "object" && typeof g.then == "function") {
                    var U = w0(g, n);
                    Ra(e, t, U, gt(e));
                } else Ra(e, t, n, gt(e));
            } catch (H) {
                Ra(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: H
                }, gt());
            } finally{
                Y.p = i, P.T = d;
            }
        }
        function H0() {}
        function Jr(e, t, l, n) {
            if (e.tag !== 5) throw Error(f(476));
            var a = Ns(e).queue;
            Os(e, a, t, le, l === null ? H0 : function() {
                return xs(e), l(n);
            });
        }
        function Ns(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: le,
                baseState: le,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Zt,
                    lastRenderedState: le
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
                    lastRenderedReducer: Zt,
                    lastRenderedState: l
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function xs(e) {
            var t = Ns(e).next.queue;
            Ra(e, t, {}, gt());
        }
        function Fr() {
            return et(ja);
        }
        function Ms() {
            return qe().memoizedState;
        }
        function Cs() {
            return qe().memoizedState;
        }
        function k0(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = gt();
                        e = dl(l);
                        var n = hl(t, e, l);
                        n !== null && (bt(n, t, l), va(n, t, l)), t = {
                            cache: Nr()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function L0(e, t, l) {
            var n = gt();
            l = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ju(e) ? Bs(t, l) : (l = vr(e, t, l, n), l !== null && (bt(l, e, n), ws(l, t, n)));
        }
        function Ds(e, t, l) {
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
            if (ju(e)) Bs(t, a);
            else {
                var i = e.alternate;
                if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                    var d = t.lastRenderedState, y = i(d, l);
                    if (a.hasEagerState = !0, a.eagerState = y, ht(y, d)) return Tu(e, t, a, 0), Ae === null && Ru(), !1;
                } catch  {} finally{}
                if (l = vr(e, t, a, n), l !== null) return bt(l, e, n), ws(l, t, n), !0;
            }
            return !1;
        }
        function Wr(e, t, l, n) {
            if (n = {
                lane: 2,
                revertLane: Cc(),
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ju(e)) {
                if (t) throw Error(f(479));
            } else t = vr(e, l, n, 2), t !== null && bt(t, e, 2);
        }
        function ju(e) {
            var t = e.alternate;
            return e === fe || t !== null && t === fe;
        }
        function Bs(e, t) {
            Mn = Uu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function ws(e, t, l) {
            if ((l & 4194048) !== 0) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, Lf(e, l);
            }
        }
        var Qu = {
            readContext: et,
            use: qu,
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
        }, zs = {
            readContext: et,
            use: qu,
            useCallback: function(e, t) {
                return it().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: et,
            useEffect: vs,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, Lu(4194308, 4, Es.bind(null, t, e), l);
            },
            useLayoutEffect: function(e, t) {
                return Lu(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                Lu(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var l = it();
                t = t === void 0 ? null : t;
                var n = e();
                if (Jl) {
                    rl(!0);
                    try {
                        e();
                    } finally{
                        rl(!1);
                    }
                }
                return l.memoizedState = [
                    n,
                    t
                ], n;
            },
            useReducer: function(e, t, l) {
                var n = it();
                if (l !== void 0) {
                    var a = l(t);
                    if (Jl) {
                        rl(!0);
                        try {
                            l(t);
                        } finally{
                            rl(!1);
                        }
                    }
                } else a = t;
                return n.memoizedState = n.baseState = a, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: a
                }, n.queue = e, e = e.dispatch = L0.bind(null, fe, e), [
                    n.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                var t = it();
                return e = {
                    current: e
                }, t.memoizedState = e;
            },
            useState: function(e) {
                e = Vr(e);
                var t = e.queue, l = Ds.bind(null, fe, t);
                return t.dispatch = l, [
                    e.memoizedState,
                    l
                ];
            },
            useDebugValue: Zr,
            useDeferredValue: function(e, t) {
                var l = it();
                return $r(l, e, t);
            },
            useTransition: function() {
                var e = Vr(!1);
                return e = Os.bind(null, fe, e.queue, !0, !1), it().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, l) {
                var n = fe, a = it();
                if (ye) {
                    if (l === void 0) throw Error(f(407));
                    l = l();
                } else {
                    if (l = t(), Ae === null) throw Error(f(349));
                    (he & 124) !== 0 || ts(n, t, l);
                }
                a.memoizedState = l;
                var i = {
                    value: l,
                    getSnapshot: t
                };
                return a.queue = i, vs(ns.bind(null, n, i, e), [
                    e
                ]), n.flags |= 2048, Dn(9, ku(), ls.bind(null, n, i, l, t), null), l;
            },
            useId: function() {
                var e = it(), t = Ae.identifierPrefix;
                if (ye) {
                    var l = Yt, n = Gt;
                    l = (n & ~(1 << 32 - dt(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Pu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = z0++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Fr,
            useFormState: ds,
            useActionState: ds,
            useOptimistic: function(e) {
                var t = it();
                t.memoizedState = t.baseState = e;
                var l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = l, t = Wr.bind(null, fe, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Kr,
            useCacheRefresh: function() {
                return it().memoizedState = k0.bind(null, fe);
            }
        }, Us = {
            readContext: et,
            use: qu,
            useCallback: Rs,
            useContext: et,
            useEffect: gs,
            useImperativeHandle: _s,
            useInsertionEffect: bs,
            useLayoutEffect: Ss,
            useMemo: Ts,
            useReducer: Hu,
            useRef: ys,
            useState: function() {
                return Hu(Zt);
            },
            useDebugValue: Zr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return As(l, be.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Hu(Zt)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: es,
            useId: Ms,
            useHostTransitionStatus: Fr,
            useFormState: hs,
            useActionState: hs,
            useOptimistic: function(e, t) {
                var l = qe();
                return is(l, be, e, t);
            },
            useMemoCache: Kr,
            useCacheRefresh: Cs
        }, j0 = {
            readContext: et,
            use: qu,
            useCallback: Rs,
            useContext: et,
            useEffect: gs,
            useImperativeHandle: _s,
            useInsertionEffect: bs,
            useLayoutEffect: Ss,
            useMemo: Ts,
            useReducer: Yr,
            useRef: ys,
            useState: function() {
                return Yr(Zt);
            },
            useDebugValue: Zr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return be === null ? $r(l, e, t) : As(l, be.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Yr(Zt)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: es,
            useId: Ms,
            useHostTransitionStatus: Fr,
            useFormState: ms,
            useActionState: ms,
            useOptimistic: function(e, t) {
                var l = qe();
                return be !== null ? is(l, be, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: Kr,
            useCacheRefresh: Cs
        }, Bn = null, Ta = 0;
        function Ku(e) {
            var t = Ta;
            return Ta += 1, Bn === null && (Bn = []), Vo(Bn, e, t);
        }
        function Aa(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Gu(e, t) {
            throw t.$$typeof === R ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Ps(e) {
            var t = e._init;
            return t(e._payload);
        }
        function qs(e) {
            function t(A, _) {
                if (e) {
                    var x = A.deletions;
                    x === null ? (A.deletions = [
                        _
                    ], A.flags |= 16) : x.push(_);
                }
            }
            function l(A, _) {
                if (!e) return null;
                for(; _ !== null;)t(A, _), _ = _.sibling;
                return null;
            }
            function n(A) {
                for(var _ = new Map; A !== null;)A.key !== null ? _.set(A.key, A) : _.set(A.index, A), A = A.sibling;
                return _;
            }
            function a(A, _) {
                return A = Kt(A, _), A.index = 0, A.sibling = null, A;
            }
            function i(A, _, x) {
                return A.index = x, e ? (x = A.alternate, x !== null ? (x = x.index, x < _ ? (A.flags |= 67108866, _) : x) : (A.flags |= 67108866, _)) : (A.flags |= 1048576, _);
            }
            function d(A) {
                return e && A.alternate === null && (A.flags |= 67108866), A;
            }
            function y(A, _, x, q) {
                return _ === null || _.tag !== 6 ? (_ = br(x, A.mode, q), _.return = A, _) : (_ = a(_, x), _.return = A, _);
            }
            function g(A, _, x, q) {
                var Z = x.type;
                return Z === O ? U(A, _, x.props.children, q, x.key) : _ !== null && (_.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === J && Ps(Z) === _.type) ? (_ = a(_, x.props), Aa(_, x), _.return = A, _) : (_ = Ou(x.type, x.key, x.props, null, A.mode, q), Aa(_, x), _.return = A, _);
            }
            function M(A, _, x, q) {
                return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== x.containerInfo || _.stateNode.implementation !== x.implementation ? (_ = Sr(x, A.mode, q), _.return = A, _) : (_ = a(_, x.children || []), _.return = A, _);
            }
            function U(A, _, x, q, Z) {
                return _ === null || _.tag !== 7 ? (_ = Ql(x, A.mode, q, Z), _.return = A, _) : (_ = a(_, x), _.return = A, _);
            }
            function H(A, _, x) {
                if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return _ = br("" + _, A.mode, x), _.return = A, _;
                if (typeof _ == "object" && _ !== null) {
                    switch(_.$$typeof){
                        case S:
                            return x = Ou(_.type, _.key, _.props, null, A.mode, x), Aa(x, _), x.return = A, x;
                        case T:
                            return _ = Sr(_, A.mode, x), _.return = A, _;
                        case J:
                            var q = _._init;
                            return _ = q(_._payload), H(A, _, x);
                    }
                    if (We(_) || Ue(_)) return _ = Ql(_, A.mode, x, null), _.return = A, _;
                    if (typeof _.then == "function") return H(A, Ku(_), x);
                    if (_.$$typeof === k) return H(A, Cu(A, _), x);
                    Gu(A, _);
                }
                return null;
            }
            function C(A, _, x, q) {
                var Z = _ !== null ? _.key : null;
                if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return Z !== null ? null : y(A, _, "" + x, q);
                if (typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case S:
                            return x.key === Z ? g(A, _, x, q) : null;
                        case T:
                            return x.key === Z ? M(A, _, x, q) : null;
                        case J:
                            return Z = x._init, x = Z(x._payload), C(A, _, x, q);
                    }
                    if (We(x) || Ue(x)) return Z !== null ? null : U(A, _, x, q, null);
                    if (typeof x.then == "function") return C(A, _, Ku(x), q);
                    if (x.$$typeof === k) return C(A, _, Cu(A, x), q);
                    Gu(A, x);
                }
                return null;
            }
            function B(A, _, x, q, Z) {
                if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return A = A.get(x) || null, y(_, A, "" + q, Z);
                if (typeof q == "object" && q !== null) {
                    switch(q.$$typeof){
                        case S:
                            return A = A.get(q.key === null ? x : q.key) || null, g(_, A, q, Z);
                        case T:
                            return A = A.get(q.key === null ? x : q.key) || null, M(_, A, q, Z);
                        case J:
                            var oe = q._init;
                            return q = oe(q._payload), B(A, _, x, q, Z);
                    }
                    if (We(q) || Ue(q)) return A = A.get(x) || null, U(_, A, q, Z, null);
                    if (typeof q.then == "function") return B(A, _, x, Ku(q), Z);
                    if (q.$$typeof === k) return B(A, _, x, Cu(_, q), Z);
                    Gu(_, q);
                }
                return null;
            }
            function ae(A, _, x, q) {
                for(var Z = null, oe = null, F = _, te = _ = 0, Ye = null; F !== null && te < x.length; te++){
                    F.index > te ? (Ye = F, F = null) : Ye = F.sibling;
                    var me = C(A, F, x[te], q);
                    if (me === null) {
                        F === null && (F = Ye);
                        break;
                    }
                    e && F && me.alternate === null && t(A, F), _ = i(me, _, te), oe === null ? Z = me : oe.sibling = me, oe = me, F = Ye;
                }
                if (te === x.length) return l(A, F), ye && Gl(A, te), Z;
                if (F === null) {
                    for(; te < x.length; te++)F = H(A, x[te], q), F !== null && (_ = i(F, _, te), oe === null ? Z = F : oe.sibling = F, oe = F);
                    return ye && Gl(A, te), Z;
                }
                for(F = n(F); te < x.length; te++)Ye = B(F, A, te, x[te], q), Ye !== null && (e && Ye.alternate !== null && F.delete(Ye.key === null ? te : Ye.key), _ = i(Ye, _, te), oe === null ? Z = Ye : oe.sibling = Ye, oe = Ye);
                return e && F.forEach(function(Cl) {
                    return t(A, Cl);
                }), ye && Gl(A, te), Z;
            }
            function ee(A, _, x, q) {
                if (x == null) throw Error(f(151));
                for(var Z = null, oe = null, F = _, te = _ = 0, Ye = null, me = x.next(); F !== null && !me.done; te++, me = x.next()){
                    F.index > te ? (Ye = F, F = null) : Ye = F.sibling;
                    var Cl = C(A, F, me.value, q);
                    if (Cl === null) {
                        F === null && (F = Ye);
                        break;
                    }
                    e && F && Cl.alternate === null && t(A, F), _ = i(Cl, _, te), oe === null ? Z = Cl : oe.sibling = Cl, oe = Cl, F = Ye;
                }
                if (me.done) return l(A, F), ye && Gl(A, te), Z;
                if (F === null) {
                    for(; !me.done; te++, me = x.next())me = H(A, me.value, q), me !== null && (_ = i(me, _, te), oe === null ? Z = me : oe.sibling = me, oe = me);
                    return ye && Gl(A, te), Z;
                }
                for(F = n(F); !me.done; te++, me = x.next())me = B(F, A, te, me.value, q), me !== null && (e && me.alternate !== null && F.delete(me.key === null ? te : me.key), _ = i(me, _, te), oe === null ? Z = me : oe.sibling = me, oe = me);
                return e && F.forEach(function(Q1) {
                    return t(A, Q1);
                }), ye && Gl(A, te), Z;
            }
            function Ee(A, _, x, q) {
                if (typeof x == "object" && x !== null && x.type === O && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case S:
                            e: {
                                for(var Z = x.key; _ !== null;){
                                    if (_.key === Z) {
                                        if (Z = x.type, Z === O) {
                                            if (_.tag === 7) {
                                                l(A, _.sibling), q = a(_, x.props.children), q.return = A, A = q;
                                                break e;
                                            }
                                        } else if (_.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === J && Ps(Z) === _.type) {
                                            l(A, _.sibling), q = a(_, x.props), Aa(q, x), q.return = A, A = q;
                                            break e;
                                        }
                                        l(A, _);
                                        break;
                                    } else t(A, _);
                                    _ = _.sibling;
                                }
                                x.type === O ? (q = Ql(x.props.children, A.mode, q, x.key), q.return = A, A = q) : (q = Ou(x.type, x.key, x.props, null, A.mode, q), Aa(q, x), q.return = A, A = q);
                            }
                            return d(A);
                        case T:
                            e: {
                                for(Z = x.key; _ !== null;){
                                    if (_.key === Z) if (_.tag === 4 && _.stateNode.containerInfo === x.containerInfo && _.stateNode.implementation === x.implementation) {
                                        l(A, _.sibling), q = a(_, x.children || []), q.return = A, A = q;
                                        break e;
                                    } else {
                                        l(A, _);
                                        break;
                                    }
                                    else t(A, _);
                                    _ = _.sibling;
                                }
                                q = Sr(x, A.mode, q), q.return = A, A = q;
                            }
                            return d(A);
                        case J:
                            return Z = x._init, x = Z(x._payload), Ee(A, _, x, q);
                    }
                    if (We(x)) return ae(A, _, x, q);
                    if (Ue(x)) {
                        if (Z = Ue(x), typeof Z != "function") throw Error(f(150));
                        return x = Z.call(x), ee(A, _, x, q);
                    }
                    if (typeof x.then == "function") return Ee(A, _, Ku(x), q);
                    if (x.$$typeof === k) return Ee(A, _, Cu(A, x), q);
                    Gu(A, x);
                }
                return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, _ !== null && _.tag === 6 ? (l(A, _.sibling), q = a(_, x), q.return = A, A = q) : (l(A, _), q = br(x, A.mode, q), q.return = A, A = q), d(A)) : l(A, _);
            }
            return function(A, _, x, q) {
                try {
                    Ta = 0;
                    var Z = Ee(A, _, x, q);
                    return Bn = null, Z;
                } catch (F) {
                    if (F === ma || F === Bu) throw F;
                    var oe = pt(29, F, null, A.mode);
                    return oe.lanes = q, oe.return = A, oe;
                } finally{}
            };
        }
        var wn = qs(!0), Hs = qs(!1), Ot = L(null), Pt = null;
        function ml(e) {
            var t = e.alternate;
            G(ke, ke.current & 1), G(Ot, e), Pt === null && (t === null || xn.current !== null || t.memoizedState !== null) && (Pt = e);
        }
        function ks(e) {
            if (e.tag === 22) {
                if (G(ke, ke.current), G(Ot, e), Pt === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (Pt = e);
                }
            } else yl();
        }
        function yl() {
            G(ke, ke.current), G(Ot, Ot.current);
        }
        function $t(e) {
            X(Ot), Pt === e && (Pt = null), X(ke);
        }
        var ke = L(0);
        function Yu(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var l = t.memoizedState;
                    if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || Qc(l))) return t;
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
        function Ir(e, t, l, n) {
            t = e.memoizedState, l = l(n, t), l = l == null ? t : b({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var ec = {
            enqueueSetState: function(e, t, l) {
                e = e._reactInternals;
                var n = gt(), a = dl(n);
                a.payload = t, l != null && (a.callback = l), t = hl(e, a, n), t !== null && (bt(t, e, n), va(t, e, n));
            },
            enqueueReplaceState: function(e, t, l) {
                e = e._reactInternals;
                var n = gt(), a = dl(n);
                a.tag = 1, a.payload = t, l != null && (a.callback = l), t = hl(e, a, n), t !== null && (bt(t, e, n), va(t, e, n));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var l = gt(), n = dl(l);
                n.tag = 2, t != null && (n.callback = t), t = hl(e, n, l), t !== null && (bt(t, e, l), va(t, e, l));
            }
        };
        function Ls(e, t, l, n, a, i, d) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, d) : t.prototype && t.prototype.isPureReactComponent ? !ra(l, n) || !ra(a, i) : !0;
        }
        function js(e, t, l, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && ec.enqueueReplaceState(t, t.state, null);
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
        function Qs(e) {
            Vu(e);
        }
        function Ks(e) {
            console.error(e);
        }
        function Gs(e) {
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
        function Ys(e, t, l) {
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
        function tc(e, t, l) {
            return l = dl(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Xu(e, t);
            }, l;
        }
        function Vs(e) {
            return e = dl(e), e.tag = 3, e;
        }
        function Xs(e, t, l, n) {
            var a = l.type.getDerivedStateFromError;
            if (typeof a == "function") {
                var i = n.value;
                e.payload = function() {
                    return a(i);
                }, e.callback = function() {
                    Ys(t, l, n);
                };
            }
            var d = l.stateNode;
            d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
                Ys(t, l, n), typeof a != "function" && (_l === null ? _l = new Set([
                    this
                ]) : _l.add(this));
                var y = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: y !== null ? y : ""
                });
            });
        }
        function Q0(e, t, l, n, a) {
            if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (t = l.alternate, t !== null && da(t, l, a, !0), l = Ot.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return Pt === null ? Ac() : l.alternate === null && Be === 0 && (Be = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Cr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
                                n
                            ]) : t.add(n), Nc(e, n, a)), !1;
                        case 22:
                            return l.flags |= 65536, n === Cr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    n
                                ])
                            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([
                                n
                            ]) : l.add(n)), Nc(e, n, a)), !1;
                    }
                    throw Error(f(435, l.tag));
                }
                return Nc(e, n, a), Ac(), !1;
            }
            if (ye) return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Rr && (e = Error(f(422), {
                cause: n
            }), sa(_t(e, l)))) : (n !== Rr && (t = Error(f(423), {
                cause: n
            }), sa(_t(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = tc(e.stateNode, n, a), wr(e, a), Be !== 4 && (Be = 2)), !1;
            var i = Error(f(520), {
                cause: n
            });
            if (i = _t(i, l), Ba === null ? Ba = [
                i
            ] : Ba.push(i), Be !== 4 && (Be = 2), t === null) return !0;
            n = _t(n, l), l = t;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, e = a & -a, l.lanes |= e, e = tc(l.stateNode, n, e), wr(l, e), !1;
                    case 1:
                        if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (_l === null || !_l.has(i)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = Vs(a), Xs(a, e, l, n), wr(l, a), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Zs = Error(f(461)), Ke = !1;
        function Xe(e, t, l, n) {
            t.child = e === null ? Hs(t, null, l, n) : wn(t, e.child, l, n);
        }
        function $s(e, t, l, n, a) {
            l = l.render;
            var i = t.ref;
            if ("ref" in n) {
                var d = {};
                for(var y in n)y !== "ref" && (d[y] = n[y]);
            } else d = n;
            return Zl(t), n = Hr(e, t, l, d, i, a), y = kr(), e !== null && !Ke ? (Lr(e, t, a), Jt(e, t, a)) : (ye && y && Er(t), t.flags |= 1, Xe(e, t, n, a), t.child);
        }
        function Js(e, t, l, n, a) {
            if (e === null) {
                var i = l.type;
                return typeof i == "function" && !gr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Fs(e, t, i, n, a)) : (e = Ou(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (i = e.child, !fc(e, a)) {
                var d = i.memoizedProps;
                if (l = l.compare, l = l !== null ? l : ra, l(d, n) && e.ref === t.ref) return Jt(e, t, a);
            }
            return t.flags |= 1, e = Kt(i, n), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Fs(e, t, l, n, a) {
            if (e !== null) {
                var i = e.memoizedProps;
                if (ra(i, n) && e.ref === t.ref) if (Ke = !1, t.pendingProps = n = i, fc(e, a)) (e.flags & 131072) !== 0 && (Ke = !0);
                else return t.lanes = e.lanes, Jt(e, t, a);
            }
            return lc(e, t, l, n, a);
        }
        function Ws(e, t, l) {
            var n = t.pendingProps, a = n.children, i = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (n = i !== null ? i.baseLanes | l : l, e !== null) {
                        for(a = t.child = e.child, i = 0; a !== null;)i = i | a.lanes | a.childLanes, a = a.sibling;
                        t.childLanes = i & ~n;
                    } else t.childLanes = 0, t.child = null;
                    return Is(e, t, n, l);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && Du(t, i !== null ? i.cachePool : null), i !== null ? Fo(t, i) : Ur(), ks(t);
                else return t.lanes = t.childLanes = 536870912, Is(e, t, i !== null ? i.baseLanes | l : l, l);
            } else i !== null ? (Du(t, i.cachePool), Fo(t, i), yl(), t.memoizedState = null) : (e !== null && Du(t, null), Ur(), yl());
            return Xe(e, t, a, l), t.child;
        }
        function Is(e, t, l, n) {
            var a = Mr();
            return a = a === null ? null : {
                parent: He._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: a
            }, e !== null && Du(t, null), Ur(), ks(t), e !== null && da(e, t, n, !0), null;
        }
        function Zu(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(f(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function lc(e, t, l, n, a) {
            return Zl(t), l = Hr(e, t, l, n, void 0, a), n = kr(), e !== null && !Ke ? (Lr(e, t, a), Jt(e, t, a)) : (ye && n && Er(t), t.flags |= 1, Xe(e, t, l, a), t.child);
        }
        function ed(e, t, l, n, a, i) {
            return Zl(t), t.updateQueue = null, l = Io(t, n, l, a), Wo(e), n = kr(), e !== null && !Ke ? (Lr(e, t, i), Jt(e, t, i)) : (ye && n && Er(t), t.flags |= 1, Xe(e, t, l, i), t.child);
        }
        function td(e, t, l, n, a) {
            if (Zl(t), t.stateNode === null) {
                var i = Rn, d = l.contextType;
                typeof d == "object" && d !== null && (i = et(d)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ec, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Dr(t), d = l.contextType, i.context = typeof d == "object" && d !== null ? et(d) : Rn, i.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && (Ir(t, l, d, n), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (d = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), d !== i.state && ec.enqueueReplaceState(i, i.state, null), ba(t, n, i, a), ga(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
            } else if (e === null) {
                i = t.stateNode;
                var y = t.memoizedProps, g = Fl(l, y);
                i.props = g;
                var M = i.context, U = l.contextType;
                d = Rn, typeof U == "object" && U !== null && (d = et(U));
                var H = l.getDerivedStateFromProps;
                U = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, U || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (y || M !== d) && js(t, i, n, d), sl = !1;
                var C = t.memoizedState;
                i.state = C, ba(t, n, i, a), ga(), M = t.memoizedState, y || C !== M || sl ? (typeof H == "function" && (Ir(t, l, H, n), M = t.memoizedState), (g = sl || Ls(t, l, g, n, C, M, d)) ? (U || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = M), i.props = n, i.state = M, i.context = d, n = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
            } else {
                i = t.stateNode, Br(e, t), d = t.memoizedProps, U = Fl(l, d), i.props = U, H = t.pendingProps, C = i.context, M = l.contextType, g = Rn, typeof M == "object" && M !== null && (g = et(M)), y = l.getDerivedStateFromProps, (M = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d !== H || C !== g) && js(t, i, n, g), sl = !1, C = t.memoizedState, i.state = C, ba(t, n, i, a), ga();
                var B = t.memoizedState;
                d !== H || C !== B || sl || e !== null && e.dependencies !== null && Mu(e.dependencies) ? (typeof y == "function" && (Ir(t, l, y, n), B = t.memoizedState), (U = sl || Ls(t, l, U, n, C, B, g) || e !== null && e.dependencies !== null && Mu(e.dependencies)) ? (M || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, B, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, B, g)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = B), i.props = n, i.state = B, i.context = g, n = U) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), n = !1);
            }
            return i = n, Zu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = wn(t, e.child, null, a), t.child = wn(t, null, l, a)) : Xe(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = Jt(e, t, a), e;
        }
        function ld(e, t, l, n) {
            return oa(), t.flags |= 256, Xe(e, t, l, n), t.child;
        }
        var nc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function ac(e) {
            return {
                baseLanes: e,
                cachePool: Ko()
            };
        }
        function uc(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Nt), e;
        }
        function nd(e, t, l) {
            var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, d;
            if ((d = i) || (d = e !== null && e.memoizedState === null ? !1 : (ke.current & 2) !== 0), d && (a = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (ye) {
                    if (a ? ml(t) : yl(), ye) {
                        var y = De, g;
                        if (g = y) {
                            e: {
                                for(g = y, y = Ut; g.nodeType !== 8;){
                                    if (!y) {
                                        y = null;
                                        break e;
                                    }
                                    if (g = Bt(g.nextSibling), g === null) {
                                        y = null;
                                        break e;
                                    }
                                }
                                y = g;
                            }
                            y !== null ? (t.memoizedState = {
                                dehydrated: y,
                                treeContext: Kl !== null ? {
                                    id: Gt,
                                    overflow: Yt
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, g = pt(18, null, null, 0), g.stateNode = y, g.return = t, t.child = g, nt = t, De = null, g = !0) : g = !1;
                        }
                        g || Vl(t);
                    }
                    if (y = t.memoizedState, y !== null && (y = y.dehydrated, y !== null)) return Qc(y) ? t.lanes = 32 : t.lanes = 536870912, null;
                    $t(t);
                }
                return y = n.children, n = n.fallback, a ? (yl(), a = t.mode, y = $u({
                    mode: "hidden",
                    children: y
                }, a), n = Ql(n, a, l, null), y.return = t, n.return = t, y.sibling = n, t.child = y, a = t.child, a.memoizedState = ac(l), a.childLanes = uc(e, d, l), t.memoizedState = nc, n) : (ml(t), ic(t, y));
            }
            if (g = e.memoizedState, g !== null && (y = g.dehydrated, y !== null)) {
                if (i) t.flags & 256 ? (ml(t), t.flags &= -257, t = rc(e, t, l)) : t.memoizedState !== null ? (yl(), t.child = e.child, t.flags |= 128, t = null) : (yl(), a = n.fallback, y = t.mode, n = $u({
                    mode: "visible",
                    children: n.children
                }, y), a = Ql(a, y, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, wn(t, e.child, null, l), n = t.child, n.memoizedState = ac(l), n.childLanes = uc(e, d, l), t.memoizedState = nc, t = a);
                else if (ml(t), Qc(y)) {
                    if (d = y.nextSibling && y.nextSibling.dataset, d) var M = d.dgst;
                    d = M, n = Error(f(419)), n.stack = "", n.digest = d, sa({
                        value: n,
                        source: null,
                        stack: null
                    }), t = rc(e, t, l);
                } else if (Ke || da(e, t, l, !1), d = (l & e.childLanes) !== 0, Ke || d) {
                    if (d = Ae, d !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : Ki(n), n = (n & (d.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== g.retryLane)) throw g.retryLane = n, _n(e, n), bt(d, e, n), Zs;
                    y.data === "$?" || Ac(), t = rc(e, t, l);
                } else y.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, De = Bt(y.nextSibling), nt = t, ye = !0, Yl = null, Ut = !1, e !== null && (Tt[At++] = Gt, Tt[At++] = Yt, Tt[At++] = Kl, Gt = e.id, Yt = e.overflow, Kl = t), t = ic(t, n.children), t.flags |= 4096);
                return t;
            }
            return a ? (yl(), a = n.fallback, y = t.mode, g = e.child, M = g.sibling, n = Kt(g, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = g.subtreeFlags & 65011712, M !== null ? a = Kt(M, a) : (a = Ql(a, y, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, y = e.child.memoizedState, y === null ? y = ac(l) : (g = y.cachePool, g !== null ? (M = He._currentValue, g = g.parent !== M ? {
                parent: M,
                pool: M
            } : g) : g = Ko(), y = {
                baseLanes: y.baseLanes | l,
                cachePool: g
            }), a.memoizedState = y, a.childLanes = uc(e, d, l), t.memoizedState = nc, n) : (ml(t), l = e.child, e = l.sibling, l = Kt(l, {
                mode: "visible",
                children: n.children
            }), l.return = t, l.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [
                e
            ], t.flags |= 16) : d.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function ic(e, t) {
            return t = $u({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function $u(e, t) {
            return e = pt(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function rc(e, t, l) {
            return wn(t, e.child, null, l), e = ic(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function ad(e, t, l) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), Ar(e.return, t, l);
        }
        function cc(e, t, l, n, a) {
            var i = e.memoizedState;
            i === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: l,
                tailMode: a
            } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = l, i.tailMode = a);
        }
        function ud(e, t, l) {
            var n = t.pendingProps, a = n.revealOrder, i = n.tail;
            if (Xe(e, t, n.children, l), n = ke.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && ad(e, l, t);
                    else if (e.tag === 19) ad(e, l, t);
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
            switch(G(ke, n), a){
                case "forwards":
                    for(l = t.child, a = null; l !== null;)e = l.alternate, e !== null && Yu(e) === null && (a = l), l = l.sibling;
                    l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), cc(t, !1, a, l, i);
                    break;
                case "backwards":
                    for(l = null, a = t.child, t.child = null; a !== null;){
                        if (e = a.alternate, e !== null && Yu(e) === null) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = l, l = a, a = e;
                    }
                    cc(t, !0, l, null, i);
                    break;
                case "together":
                    cc(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function Jt(e, t, l) {
            if (e !== null && (t.dependencies = e.dependencies), El |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
                if (da(e, t, l, !1), (l & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(f(153));
            if (t.child !== null) {
                for(e = t.child, l = Kt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = Kt(e, e.pendingProps), l.return = t;
                l.sibling = null;
            }
            return t.child;
        }
        function fc(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Mu(e)));
        }
        function K0(e, t, l) {
            switch(t.tag){
                case 3:
                    Oe(t, t.stateNode.containerInfo), ol(t, He, e.memoizedState.cache), oa();
                    break;
                case 27:
                case 5:
                    Hi(t);
                    break;
                case 4:
                    Oe(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    ol(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var n = t.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (ml(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? nd(e, t, l) : (ml(t), e = Jt(e, t, l), e !== null ? e.sibling : null);
                    ml(t);
                    break;
                case 19:
                    var a = (e.flags & 128) !== 0;
                    if (n = (l & t.childLanes) !== 0, n || (da(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                        if (n) return ud(e, t, l);
                        t.flags |= 128;
                    }
                    if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), G(ke, ke.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Ws(e, t, l);
                case 24:
                    ol(t, He, e.memoizedState.cache);
            }
            return Jt(e, t, l);
        }
        function id(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ke = !0;
            else {
                if (!fc(e, l) && (t.flags & 128) === 0) return Ke = !1, K0(e, t, l);
                Ke = (e.flags & 131072) !== 0;
            }
            else Ke = !1, ye && (t.flags & 1048576) !== 0 && Po(t, xu, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var n = t.elementType, a = n._init;
                        if (n = a(n._payload), t.type = n, typeof n == "function") gr(n) ? (e = Fl(n, e), t.tag = 1, t = td(null, t, n, e, l)) : (t.tag = 0, t = lc(null, t, n, e, l));
                        else {
                            if (n != null) {
                                if (a = n.$$typeof, a === V) {
                                    t.tag = 11, t = $s(null, t, n, e, l);
                                    break e;
                                } else if (a === $) {
                                    t.tag = 14, t = Js(null, t, n, e, l);
                                    break e;
                                }
                            }
                            throw t = Pl(n) || n, Error(f(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return lc(e, t, t.type, t.pendingProps, l);
                case 1:
                    return n = t.type, a = Fl(n, t.pendingProps), td(e, t, n, a, l);
                case 3:
                    e: {
                        if (Oe(t, t.stateNode.containerInfo), e === null) throw Error(f(387));
                        n = t.pendingProps;
                        var i = t.memoizedState;
                        a = i.element, Br(e, t), ba(t, n, null, l);
                        var d = t.memoizedState;
                        if (n = d.cache, ol(t, He, n), n !== i.cache && Or(t, [
                            He
                        ], l, !0), ga(), n = d.element, i.isDehydrated) if (i = {
                            element: n,
                            isDehydrated: !1,
                            cache: d.cache
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                            t = ld(e, t, n, l);
                            break e;
                        } else if (n !== a) {
                            a = _t(Error(f(424)), t), sa(a), t = ld(e, t, n, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(De = Bt(e.firstChild), nt = t, ye = !0, Yl = null, Ut = !0, l = Hs(t, null, n, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (oa(), n === a) {
                                t = Jt(e, t, l);
                                break e;
                            }
                            Xe(e, t, n, l);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Zu(e, t), e === null ? (l = oh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ye || (l = t.type, e = t.pendingProps, n = fi(ie.current).createElement(l), n[Ie] = t, n[at] = e, $e(n, l, e), Qe(n), t.stateNode = n) : t.memoizedState = oh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return Hi(t), e === null && ye && (n = t.stateNode = rh(t.type, t.pendingProps, ie.current), nt = t, Ut = !0, a = De, Al(t.type) ? (Kc = a, De = Bt(n.firstChild)) : De = a), Xe(e, t, t.pendingProps.children, l), Zu(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && ye && ((a = n = De) && (n = v1(n, t.type, t.pendingProps, Ut), n !== null ? (t.stateNode = n, nt = t, De = Bt(n.firstChild), Ut = !1, a = !0) : a = !1), a || Vl(t)), Hi(t), a = t.type, i = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = i.children, kc(a, i) ? n = null : d !== null && kc(a, d) && (t.flags |= 32), t.memoizedState !== null && (a = Hr(e, t, U0, null, null, l), ja._currentValue = a), Zu(e, t), Xe(e, t, n, l), t.child;
                case 6:
                    return e === null && ye && ((e = l = De) && (l = g1(l, t.pendingProps, Ut), l !== null ? (t.stateNode = l, nt = t, De = null, e = !0) : e = !1), e || Vl(t)), null;
                case 13:
                    return nd(e, t, l);
                case 4:
                    return Oe(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = wn(t, null, n, l) : Xe(e, t, n, l), t.child;
                case 11:
                    return $s(e, t, t.type, t.pendingProps, l);
                case 7:
                    return Xe(e, t, t.pendingProps, l), t.child;
                case 8:
                    return Xe(e, t, t.pendingProps.children, l), t.child;
                case 12:
                    return Xe(e, t, t.pendingProps.children, l), t.child;
                case 10:
                    return n = t.pendingProps, ol(t, t.type, n.value), Xe(e, t, n.children, l), t.child;
                case 9:
                    return a = t.type._context, n = t.pendingProps.children, Zl(t), a = et(a), n = n(a), t.flags |= 1, Xe(e, t, n, l), t.child;
                case 14:
                    return Js(e, t, t.type, t.pendingProps, l);
                case 15:
                    return Fs(e, t, t.type, t.pendingProps, l);
                case 19:
                    return ud(e, t, l);
                case 31:
                    return n = t.pendingProps, l = t.mode, n = {
                        mode: n.mode,
                        children: n.children
                    }, e === null ? (l = $u(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Kt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return Ws(e, t, l);
                case 24:
                    return Zl(t), n = et(He), e === null ? (a = Mr(), a === null && (a = Ae, i = Nr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = {
                        parent: n,
                        cache: a
                    }, Dr(t), ol(t, He, a)) : ((e.lanes & l) !== 0 && (Br(e, t), ba(t, null, null, l), ga()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = {
                        parent: n,
                        cache: n
                    }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ol(t, He, n)) : (n = i.cache, ol(t, He, n), n !== a.cache && Or(t, [
                        He
                    ], l, !0))), Xe(e, t, t.pendingProps.children, l), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(f(156, t.tag));
        }
        function Ft(e) {
            e.flags |= 4;
        }
        function rd(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !mh(t)) {
                if (t = Ot.current, t !== null && ((he & 4194048) === he ? Pt !== null : (he & 62914560) !== he && (he & 536870912) === 0 || t !== Pt)) throw ya = Cr, Go;
                e.flags |= 8192;
            }
        }
        function Ju(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Hf() : 536870912, e.lanes |= t, qn |= t);
        }
        function Oa(e, t) {
            if (!ye) switch(e.tailMode){
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
        function xe(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
            if (t) for(var a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
            else for(a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
            return e.subtreeFlags |= n, e.childLanes = l, t;
        }
        function G0(e, t, l) {
            var n = t.pendingProps;
            switch(_r(t), t.tag){
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
                    return xe(t), null;
                case 1:
                    return xe(t), null;
                case 3:
                    return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Xt(He), il(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (fa(t) ? Ft(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ko())), xe(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (Ft(t), l !== null ? (xe(t), rd(t, l)) : (xe(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Ft(t), xe(t), rd(t, l)) : (xe(t), t.flags &= -16777217) : (e.memoizedProps !== n && Ft(t), xe(t), t.flags &= -16777217), null;
                case 27:
                    ru(t), l = ie.current;
                    var a = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(f(166));
                            return xe(t), null;
                        }
                        e = I.current, fa(t) ? qo(t) : (e = rh(a, n, l), t.stateNode = e, Ft(t));
                    }
                    return xe(t), null;
                case 5:
                    if (ru(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(f(166));
                            return xe(t), null;
                        }
                        if (e = I.current, fa(t)) qo(t);
                        else {
                            switch(a = fi(ie.current), e){
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
                            e[Ie] = t, e[at] = n;
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
                            e: switch($e(e, l, n), l){
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
                            e && Ft(t);
                        }
                    }
                    return xe(t), t.flags &= -16777217, null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (typeof n != "string" && t.stateNode === null) throw Error(f(166));
                        if (e = ie.current, fa(t)) {
                            if (e = t.stateNode, l = t.memoizedProps, n = null, a = nt, a !== null) switch(a.tag){
                                case 27:
                                case 5:
                                    n = a.memoizedProps;
                            }
                            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || eh(e.nodeValue, l)), e || Vl(t);
                        } else e = fi(e).createTextNode(n), e[Ie] = t, t.stateNode = e;
                    }
                    return xe(t), null;
                case 13:
                    if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (a = fa(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!a) throw Error(f(318));
                                if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(f(317));
                                a[Ie] = t;
                            } else oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            xe(t), a = !1;
                        } else a = ko(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                        if (!a) return t.flags & 256 ? ($t(t), t) : ($t(t), null);
                    }
                    if ($t(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                        n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                        var i = null;
                        n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), Ju(t, t.updateQueue), xe(t), null;
                case 4:
                    return il(), e === null && zc(t.stateNode.containerInfo), xe(t), null;
                case 10:
                    return Xt(t.type), xe(t), null;
                case 19:
                    if (X(ke), a = t.memoizedState, a === null) return xe(t), null;
                    if (n = (t.flags & 128) !== 0, i = a.rendering, i === null) if (n) Oa(a, !1);
                    else {
                        if (Be !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (i = Yu(e), i !== null) {
                                for(t.flags |= 128, Oa(a, !1), e = i.updateQueue, t.updateQueue = e, Ju(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)Uo(l, e), l = l.sibling;
                                return G(ke, ke.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && zt() > Iu && (t.flags |= 128, n = !0, Oa(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!n) if (e = Yu(i), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Ju(t, e), Oa(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ye) return xe(t), null;
                        } else 2 * zt() - a.renderingStartTime > Iu && l !== 536870912 && (t.flags |= 128, n = !0, Oa(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = zt(), t.sibling = null, e = ke.current, G(ke, n ? e & 1 | 2 : e & 1), t) : (xe(t), null);
                case 22:
                case 23:
                    return $t(t), Pr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), l = t.updateQueue, l !== null && Ju(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && X($l), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Xt(He), xe(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(f(156, t.tag));
        }
        function Y0(e, t) {
            switch(_r(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Xt(He), il(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return ru(t), null;
                case 13:
                    if ($t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(f(340));
                        oa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return X(ke), null;
                case 4:
                    return il(), null;
                case 10:
                    return Xt(t.type), null;
                case 22:
                case 23:
                    return $t(t), Pr(), e !== null && X($l), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Xt(He), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function cd(e, t) {
            switch(_r(t), t.tag){
                case 3:
                    Xt(He), il();
                    break;
                case 26:
                case 27:
                case 5:
                    ru(t);
                    break;
                case 4:
                    il();
                    break;
                case 13:
                    $t(t);
                    break;
                case 19:
                    X(ke);
                    break;
                case 10:
                    Xt(t.type);
                    break;
                case 22:
                case 23:
                    $t(t), Pr(), e !== null && X($l);
                    break;
                case 24:
                    Xt(He);
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
                            var i = l.create, d = l.inst;
                            n = i(), d.destroy = n;
                        }
                        l = l.next;
                    }while (l !== a);
                }
            } catch (y) {
                Te(t, t.return, y);
            }
        }
        function vl(e, t, l) {
            try {
                var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
                if (a !== null) {
                    var i = a.next;
                    n = i;
                    do {
                        if ((n.tag & e) === e) {
                            var d = n.inst, y = d.destroy;
                            if (y !== void 0) {
                                d.destroy = void 0, a = t;
                                var g = l, M = y;
                                try {
                                    M();
                                } catch (U) {
                                    Te(a, g, U);
                                }
                            }
                        }
                        n = n.next;
                    }while (n !== i);
                }
            } catch (U) {
                Te(t, t.return, U);
            }
        }
        function fd(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    Jo(t, l);
                } catch (n) {
                    Te(e, e.return, n);
                }
            }
        }
        function od(e, t, l) {
            l.props = Fl(e.type, e.memoizedProps), l.state = e.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (n) {
                Te(e, t, n);
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
                Te(e, t, a);
            }
        }
        function qt(e, t) {
            var l = e.ref, n = e.refCleanup;
            if (l !== null) if (typeof n == "function") try {
                n();
            } catch (a) {
                Te(e, t, a);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof l == "function") try {
                l(null);
            } catch (a) {
                Te(e, t, a);
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
                Te(e, e.return, a);
            }
        }
        function oc(e, t, l) {
            try {
                var n = e.stateNode;
                d1(n, e.type, l, t), n[at] = t;
            } catch (a) {
                Te(e, e.return, a);
            }
        }
        function dd(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Al(e.type) || e.tag === 4;
        }
        function sc(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || dd(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Al(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function dc(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ci));
            else if (n !== 4 && (n === 27 && Al(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(dc(e, t, l), e = e.sibling; e !== null;)dc(e, t, l), e = e.sibling;
        }
        function Fu(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (n !== 4 && (n === 27 && Al(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(Fu(e, t, l), e = e.sibling; e !== null;)Fu(e, t, l), e = e.sibling;
        }
        function hd(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var n = e.type, a = t.attributes; a.length;)t.removeAttributeNode(a[0]);
                $e(t, n, l), t[Ie] = e, t[at] = l;
            } catch (i) {
                Te(e, e.return, i);
            }
        }
        var Wt = !1, ze = !1, hc = !1, pd = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
        function V0(e, t) {
            if (e = e.containerInfo, qc = mi, e = Ao(e), sr(e)) {
                if ("selectionStart" in e) var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var n = l.getSelection && l.getSelection();
                    if (n && n.rangeCount !== 0) {
                        l = n.anchorNode;
                        var a = n.anchorOffset, i = n.focusNode;
                        n = n.focusOffset;
                        try {
                            l.nodeType, i.nodeType;
                        } catch  {
                            l = null;
                            break e;
                        }
                        var d = 0, y = -1, g = -1, M = 0, U = 0, H = e, C = null;
                        t: for(;;){
                            for(var B; H !== l || a !== 0 && H.nodeType !== 3 || (y = d + a), H !== i || n !== 0 && H.nodeType !== 3 || (g = d + n), H.nodeType === 3 && (d += H.nodeValue.length), (B = H.firstChild) !== null;)C = H, H = B;
                            for(;;){
                                if (H === e) break t;
                                if (C === l && ++M === a && (y = d), C === i && ++U === n && (g = d), (B = H.nextSibling) !== null) break;
                                H = C, C = H.parentNode;
                            }
                            H = B;
                        }
                        l = y === -1 || g === -1 ? null : {
                            start: y,
                            end: g
                        };
                    } else l = null;
                }
                l = l || {
                    start: 0,
                    end: 0
                };
            } else l = null;
            for(Hc = {
                focusedElem: e,
                selectionRange: l
            }, mi = !1, Ge = t; Ge !== null;)if (t = Ge, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ge = e;
            else for(; Ge !== null;){
                switch(t = Ge, i = t.alternate, e = t.flags, t.tag){
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && i !== null) {
                            e = void 0, l = t, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
                            try {
                                var ae = Fl(l.type, a, l.elementType === l.type);
                                e = n.getSnapshotBeforeUpdate(ae, i), n.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (ee) {
                                Te(l, l.return, ee);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) jc(e);
                            else if (l === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    jc(e);
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
                    e.return = t.return, Ge = e;
                    break;
                }
                Ge = t.return;
            }
        }
        function md(e, t, l) {
            var n = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    gl(e, l), n & 4 && Na(5, l);
                    break;
                case 1:
                    if (gl(e, l), n & 4) if (e = l.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (d) {
                        Te(l, l.return, d);
                    }
                    else {
                        var a = Fl(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (d) {
                            Te(l, l.return, d);
                        }
                    }
                    n & 64 && fd(l), n & 512 && xa(l, l.return);
                    break;
                case 3:
                    if (gl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
                        if (t = null, l.child !== null) switch(l.child.tag){
                            case 27:
                            case 5:
                                t = l.child.stateNode;
                                break;
                            case 1:
                                t = l.child.stateNode;
                        }
                        try {
                            Jo(e, t);
                        } catch (d) {
                            Te(l, l.return, d);
                        }
                    }
                    break;
                case 27:
                    t === null && n & 4 && hd(l);
                case 26:
                case 5:
                    gl(e, l), t === null && n & 4 && sd(l), n & 512 && xa(l, l.return);
                    break;
                case 12:
                    gl(e, l);
                    break;
                case 13:
                    gl(e, l), n & 4 && gd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = t1.bind(null, l), b1(e, l))));
                    break;
                case 22:
                    if (n = l.memoizedState !== null || Wt, !n) {
                        t = t !== null && t.memoizedState !== null || ze, a = Wt;
                        var i = ze;
                        Wt = n, (ze = t) && !i ? bl(e, l, (l.subtreeFlags & 8772) !== 0) : gl(e, l), Wt = a, ze = i;
                    }
                    break;
                case 30:
                    break;
                default:
                    gl(e, l);
            }
        }
        function yd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Vi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Ne = null, rt = !1;
        function It(e, t, l) {
            for(l = l.child; l !== null;)vd(e, t, l), l = l.sibling;
        }
        function vd(e, t, l) {
            if (st && typeof st.onCommitFiberUnmount == "function") try {
                st.onCommitFiberUnmount($n, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    ze || qt(l, t), It(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    ze || qt(l, t);
                    var n = Ne, a = rt;
                    Al(l.type) && (Ne = l.stateNode, rt = !1), It(e, t, l), qa(l.stateNode), Ne = n, rt = a;
                    break;
                case 5:
                    ze || qt(l, t);
                case 6:
                    if (n = Ne, a = rt, Ne = null, It(e, t, l), Ne = n, rt = a, Ne !== null) if (rt) try {
                        (Ne.nodeType === 9 ? Ne.body : Ne.nodeName === "HTML" ? Ne.ownerDocument.body : Ne).removeChild(l.stateNode);
                    } catch (i) {
                        Te(l, t, i);
                    }
                    else try {
                        Ne.removeChild(l.stateNode);
                    } catch (i) {
                        Te(l, t, i);
                    }
                    break;
                case 18:
                    Ne !== null && (rt ? (e = Ne, uh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ya(e)) : uh(Ne, l.stateNode));
                    break;
                case 4:
                    n = Ne, a = rt, Ne = l.stateNode.containerInfo, rt = !0, It(e, t, l), Ne = n, rt = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    ze || vl(2, l, t), ze || vl(4, l, t), It(e, t, l);
                    break;
                case 1:
                    ze || (qt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && od(l, t, n)), It(e, t, l);
                    break;
                case 21:
                    It(e, t, l);
                    break;
                case 22:
                    ze = (n = ze) || l.memoizedState !== null, It(e, t, l), ze = n;
                    break;
                default:
                    It(e, t, l);
            }
        }
        function gd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Ya(e);
            } catch (l) {
                Te(t, t.return, l);
            }
        }
        function X0(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new pd), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new pd), t;
                default:
                    throw Error(f(435, e.tag));
            }
        }
        function pc(e, t) {
            var l = X0(e);
            t.forEach(function(n) {
                var a = l1.bind(null, e, n);
                l.has(n) || (l.add(n), n.then(a, a));
            });
        }
        function mt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var n = 0; n < l.length; n++){
                var a = l[n], i = e, d = t, y = d;
                e: for(; y !== null;){
                    switch(y.tag){
                        case 27:
                            if (Al(y.type)) {
                                Ne = y.stateNode, rt = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Ne = y.stateNode, rt = !1;
                            break e;
                        case 3:
                        case 4:
                            Ne = y.stateNode.containerInfo, rt = !0;
                            break e;
                    }
                    y = y.return;
                }
                if (Ne === null) throw Error(f(160));
                vd(i, d, a), Ne = null, rt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)bd(t, e), t = t.sibling;
        }
        var Dt = null;
        function bd(e, t) {
            var l = e.alternate, n = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    mt(t, e), yt(e), n & 4 && (vl(3, e, e.return), Na(3, e), vl(5, e, e.return));
                    break;
                case 1:
                    mt(t, e), yt(e), n & 512 && (ze || l === null || qt(l, l.return)), n & 64 && Wt && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                    break;
                case 26:
                    var a = Dt;
                    if (mt(t, e), yt(e), n & 512 && (ze || l === null || qt(l, l.return)), n & 4) {
                        var i = l !== null ? l.memoizedState : null;
                        if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
                            e: {
                                n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                                t: switch(n){
                                    case "title":
                                        i = a.getElementsByTagName("title")[0], (!i || i[Wn] || i[Ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(i, a.querySelector("head > title"))), $e(i, n, l), i[Ie] = e, Qe(i), n = i;
                                        break e;
                                    case "link":
                                        var d = hh("link", "href", a).get(n + (l.href || ""));
                                        if (d) {
                                            for(var y = 0; y < d.length; y++)if (i = d[y], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                d.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        i = a.createElement(n), $e(i, n, l), a.head.appendChild(i);
                                        break;
                                    case "meta":
                                        if (d = hh("meta", "content", a).get(n + (l.content || ""))) {
                                            for(y = 0; y < d.length; y++)if (i = d[y], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                d.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        i = a.createElement(n), $e(i, n, l), a.head.appendChild(i);
                                        break;
                                    default:
                                        throw Error(f(468, n));
                                }
                                i[Ie] = e, Qe(i), n = i;
                            }
                            e.stateNode = n;
                        } else ph(a, e.type, e.stateNode);
                        else e.stateNode = dh(a, n, e.memoizedProps);
                        else i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? ph(a, e.type, e.stateNode) : dh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && oc(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    mt(t, e), yt(e), n & 512 && (ze || l === null || qt(l, l.return)), l !== null && n & 4 && oc(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (mt(t, e), yt(e), n & 512 && (ze || l === null || qt(l, l.return)), e.flags & 32) {
                        a = e.stateNode;
                        try {
                            mn(a, "");
                        } catch (B) {
                            Te(e, e.return, B);
                        }
                    }
                    n & 4 && e.stateNode != null && (a = e.memoizedProps, oc(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (hc = !0);
                    break;
                case 6:
                    if (mt(t, e), yt(e), n & 4) {
                        if (e.stateNode === null) throw Error(f(162));
                        n = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = n;
                        } catch (B) {
                            Te(e, e.return, B);
                        }
                    }
                    break;
                case 3:
                    if (di = null, a = Dt, Dt = oi(t.containerInfo), mt(t, e), Dt = a, yt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Ya(t.containerInfo);
                    } catch (B) {
                        Te(e, e.return, B);
                    }
                    hc && (hc = !1, Sd(e));
                    break;
                case 4:
                    n = Dt, Dt = oi(e.stateNode.containerInfo), mt(t, e), yt(e), Dt = n;
                    break;
                case 12:
                    mt(t, e), yt(e);
                    break;
                case 13:
                    mt(t, e), yt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Sc = zt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, pc(e, n)));
                    break;
                case 22:
                    a = e.memoizedState !== null;
                    var g = l !== null && l.memoizedState !== null, M = Wt, U = ze;
                    if (Wt = M || a, ze = U || g, mt(t, e), ze = U, Wt = M, yt(e), n & 8192) e: for(t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || g || Wt || ze || Wl(e)), l = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                g = l = t;
                                try {
                                    if (i = g.stateNode, a) d = i.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                                    else {
                                        y = g.stateNode;
                                        var H = g.memoizedProps.style, C = H != null && H.hasOwnProperty("display") ? H.display : null;
                                        y.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                                    }
                                } catch (B) {
                                    Te(g, g.return, B);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                g = t;
                                try {
                                    g.stateNode.nodeValue = a ? "" : g.memoizedProps;
                                } catch (B) {
                                    Te(g, g.return, B);
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
                    n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, pc(e, l))));
                    break;
                case 19:
                    mt(t, e), yt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, pc(e, n)));
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
                        if (dd(n)) {
                            l = n;
                            break;
                        }
                        n = n.return;
                    }
                    if (l == null) throw Error(f(160));
                    switch(l.tag){
                        case 27:
                            var a = l.stateNode, i = sc(e);
                            Fu(e, i, a);
                            break;
                        case 5:
                            var d = l.stateNode;
                            l.flags & 32 && (mn(d, ""), l.flags &= -33);
                            var y = sc(e);
                            Fu(e, y, d);
                            break;
                        case 3:
                        case 4:
                            var g = l.stateNode.containerInfo, M = sc(e);
                            dc(e, M, g);
                            break;
                        default:
                            throw Error(f(161));
                    }
                } catch (U) {
                    Te(e, e.return, U);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function Sd(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                Sd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function gl(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)md(e, t.alternate, t), t = t.sibling;
        }
        function Wl(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        vl(4, t, t.return), Wl(t);
                        break;
                    case 1:
                        qt(t, t.return);
                        var l = t.stateNode;
                        typeof l.componentWillUnmount == "function" && od(t, t.return, l), Wl(t);
                        break;
                    case 27:
                        qa(t.stateNode);
                    case 26:
                    case 5:
                        qt(t, t.return), Wl(t);
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
        function bl(e, t, l) {
            for(l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var n = t.alternate, a = e, i = t, d = i.flags;
                switch(i.tag){
                    case 0:
                    case 11:
                    case 15:
                        bl(a, i, l), Na(4, i);
                        break;
                    case 1:
                        if (bl(a, i, l), n = i, a = n.stateNode, typeof a.componentDidMount == "function") try {
                            a.componentDidMount();
                        } catch (M) {
                            Te(n, n.return, M);
                        }
                        if (n = i, a = n.updateQueue, a !== null) {
                            var y = n.stateNode;
                            try {
                                var g = a.shared.hiddenCallbacks;
                                if (g !== null) for(a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++)$o(g[a], y);
                            } catch (M) {
                                Te(n, n.return, M);
                            }
                        }
                        l && d & 64 && fd(i), xa(i, i.return);
                        break;
                    case 27:
                        hd(i);
                    case 26:
                    case 5:
                        bl(a, i, l), l && n === null && d & 4 && sd(i), xa(i, i.return);
                        break;
                    case 12:
                        bl(a, i, l);
                        break;
                    case 13:
                        bl(a, i, l), l && d & 4 && gd(a, i);
                        break;
                    case 22:
                        i.memoizedState === null && bl(a, i, l), xa(i, i.return);
                        break;
                    case 30:
                        break;
                    default:
                        bl(a, i, l);
                }
                t = t.sibling;
            }
        }
        function mc(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ha(l));
        }
        function yc(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ha(e));
        }
        function Ht(e, t, l, n) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Ed(e, t, l, n), t = t.sibling;
        }
        function Ed(e, t, l, n) {
            var a = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    Ht(e, t, l, n), a & 2048 && Na(9, t);
                    break;
                case 1:
                    Ht(e, t, l, n);
                    break;
                case 3:
                    Ht(e, t, l, n), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ha(e)));
                    break;
                case 12:
                    if (a & 2048) {
                        Ht(e, t, l, n), e = t.stateNode;
                        try {
                            var i = t.memoizedProps, d = i.id, y = i.onPostCommit;
                            typeof y == "function" && y(d, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (g) {
                            Te(t, t.return, g);
                        }
                    } else Ht(e, t, l, n);
                    break;
                case 13:
                    Ht(e, t, l, n);
                    break;
                case 23:
                    break;
                case 22:
                    i = t.stateNode, d = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Ht(e, t, l, n) : Ma(e, t) : i._visibility & 2 ? Ht(e, t, l, n) : (i._visibility |= 2, zn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && mc(d, t);
                    break;
                case 24:
                    Ht(e, t, l, n), a & 2048 && yc(t.alternate, t);
                    break;
                default:
                    Ht(e, t, l, n);
            }
        }
        function zn(e, t, l, n, a) {
            for(a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var i = e, d = t, y = l, g = n, M = d.flags;
                switch(d.tag){
                    case 0:
                    case 11:
                    case 15:
                        zn(i, d, y, g, a), Na(8, d);
                        break;
                    case 23:
                        break;
                    case 22:
                        var U = d.stateNode;
                        d.memoizedState !== null ? U._visibility & 2 ? zn(i, d, y, g, a) : Ma(i, d) : (U._visibility |= 2, zn(i, d, y, g, a)), a && M & 2048 && mc(d.alternate, d);
                        break;
                    case 24:
                        zn(i, d, y, g, a), a && M & 2048 && yc(d.alternate, d);
                        break;
                    default:
                        zn(i, d, y, g, a);
                }
                t = t.sibling;
            }
        }
        function Ma(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var l = e, n = t, a = n.flags;
                switch(n.tag){
                    case 22:
                        Ma(l, n), a & 2048 && mc(n.alternate, n);
                        break;
                    case 24:
                        Ma(l, n), a & 2048 && yc(n.alternate, n);
                        break;
                    default:
                        Ma(l, n);
                }
                t = t.sibling;
            }
        }
        var Ca = 8192;
        function Un(e) {
            if (e.subtreeFlags & Ca) for(e = e.child; e !== null;)_d(e), e = e.sibling;
        }
        function _d(e) {
            switch(e.tag){
                case 26:
                    Un(e), e.flags & Ca && e.memoizedState !== null && B1(Dt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    Un(e);
                    break;
                case 3:
                case 4:
                    var t = Dt;
                    Dt = oi(e.stateNode.containerInfo), Un(e), Dt = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ca, Ca = 16777216, Un(e), Ca = t) : Un(e));
                    break;
                default:
                    Un(e);
            }
        }
        function Rd(e) {
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
                    Ge = n, Ad(n, e);
                }
                Rd(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)Td(e), e = e.sibling;
        }
        function Td(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    Da(e), e.flags & 2048 && vl(9, e, e.return);
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
                    Ge = n, Ad(n, e);
                }
                Rd(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        vl(8, t, t.return), Wu(t);
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
        function Ad(e, t) {
            for(; Ge !== null;){
                var l = Ge;
                switch(l.tag){
                    case 0:
                    case 11:
                    case 15:
                        vl(8, l, t);
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
                    var a = n.sibling, i = n.return;
                    if (yd(n), n === l) {
                        Ge = null;
                        break e;
                    }
                    if (a !== null) {
                        a.return = i, Ge = a;
                        break e;
                    }
                    Ge = i;
                }
            }
        }
        var Z0 = {
            getCacheForType: function(e) {
                var t = et(He), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, $0 = typeof WeakMap == "function" ? WeakMap : Map, ve = 0, Ae = null, se = null, he = 0, ge = 0, vt = null, Sl = !1, Pn = !1, vc = !1, el = 0, Be = 0, El = 0, Il = 0, gc = 0, Nt = 0, qn = 0, Ba = null, ct = null, bc = !1, Sc = 0, Iu = 1 / 0, ei = null, _l = null, Ze = 0, Rl = null, Hn = null, kn = 0, Ec = 0, _c = null, Od = null, wa = 0, Rc = null;
        function gt() {
            if ((ve & 2) !== 0 && he !== 0) return he & -he;
            if (P.T !== null) {
                var e = On;
                return e !== 0 ? e : Cc();
            }
            return jf();
        }
        function Nd() {
            Nt === 0 && (Nt = (he & 536870912) === 0 || ye ? qf() : 536870912);
            var e = Ot.current;
            return e !== null && (e.flags |= 32), Nt;
        }
        function bt(e, t, l) {
            (e === Ae && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) && (Ln(e, 0), Tl(e, he, Nt, !1)), Fn(e, l), ((ve & 2) === 0 || e !== Ae) && (e === Ae && ((ve & 2) === 0 && (Il |= l), Be === 4 && Tl(e, he, Nt, !1)), kt(e));
        }
        function xd(e, t, l) {
            if ((ve & 6) !== 0) throw Error(f(327));
            var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Jn(e, t), a = n ? W0(e, t) : Oc(e, t, !0), i = n;
            do {
                if (a === 0) {
                    Pn && !n && Tl(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, i && !J0(l)) {
                        a = Oc(e, t, !1), i = !1;
                        continue;
                    }
                    if (a === 2) {
                        if (i = t, e.errorRecoveryDisabledLanes & i) var d = 0;
                        else d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
                        if (d !== 0) {
                            t = d;
                            e: {
                                var y = e;
                                a = Ba;
                                var g = y.current.memoizedState.isDehydrated;
                                if (g && (Ln(y, d).flags |= 256), d = Oc(y, d, !1), d !== 2) {
                                    if (vc && !g) {
                                        y.errorRecoveryDisabledLanes |= i, Il |= i, a = 4;
                                        break e;
                                    }
                                    i = ct, ct = a, i !== null && (ct === null ? ct = i : ct.push.apply(ct, i));
                                }
                                a = d;
                            }
                            if (i = !1, a !== 2) continue;
                        }
                    }
                    if (a === 1) {
                        Ln(e, 0), Tl(e, t, 0, !0);
                        break;
                    }
                    e: {
                        switch(n = e, i = a, i){
                            case 0:
                            case 1:
                                throw Error(f(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                Tl(n, t, Nt, !Sl);
                                break e;
                            case 2:
                                ct = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(f(329));
                        }
                        if ((t & 62914560) === t && (a = Sc + 300 - zt(), 10 < a)) {
                            if (Tl(n, t, Nt, !Sl), su(n, 0, !0) !== 0) break e;
                            n.timeoutHandle = nh(Md.bind(null, n, l, ct, ei, bc, t, Nt, Il, qn, Sl, i, 2, -0, 0), a);
                            break e;
                        }
                        Md(n, l, ct, ei, bc, t, Nt, Il, qn, Sl, i, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            kt(e);
        }
        function Md(e, t, l, n, a, i, d, y, g, M, U, H, C, B) {
            if (e.timeoutHandle = -1, H = t.subtreeFlags, (H & 8192 || (H & 16785408) === 16785408) && (La = {
                stylesheets: null,
                count: 0,
                unsuspend: D1
            }, _d(t), H = w1(), H !== null)) {
                e.cancelPendingCommit = H(Pd.bind(null, e, t, i, l, n, a, d, y, g, U, 1, C, B)), Tl(e, i, d, !M);
                return;
            }
            Pd(e, t, i, l, n, a, d, y, g);
        }
        function J0(e) {
            for(var t = e;;){
                var l = t.tag;
                if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for(var n = 0; n < l.length; n++){
                    var a = l[n], i = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!ht(i(), a)) return !1;
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
        function Tl(e, t, l, n) {
            t &= ~gc, t &= ~Il, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
            for(var a = t; 0 < a;){
                var i = 31 - dt(a), d = 1 << i;
                n[i] = -1, a &= ~d;
            }
            l !== 0 && kf(e, l, t);
        }
        function ti() {
            return (ve & 6) === 0 ? (za(0), !1) : !0;
        }
        function Tc() {
            if (se !== null) {
                if (ge === 0) var e = se.return;
                else e = se, Vt = Xl = null, jr(e), Bn = null, Ta = 0, e = se;
                for(; e !== null;)cd(e.alternate, e), e = e.return;
                se = null;
            }
        }
        function Ln(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, p1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Tc(), Ae = e, se = l = Kt(e.current, null), he = t, ge = 0, vt = null, Sl = !1, Pn = Jn(e, t), vc = !1, qn = Nt = gc = Il = El = Be = 0, ct = Ba = null, bc = !1, (t & 8) !== 0 && (t |= t & 32);
            var n = e.entangledLanes;
            if (n !== 0) for(e = e.entanglements, n &= t; 0 < n;){
                var a = 31 - dt(n), i = 1 << a;
                t |= e[a], n &= ~i;
            }
            return el = t, Ru(), l;
        }
        function Cd(e, t) {
            fe = null, P.H = Qu, t === ma || t === Bu ? (t = Xo(), ge = 3) : t === Go ? (t = Xo(), ge = 4) : ge = t === Zs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, vt = t, se === null && (Be = 1, Xu(e, _t(t, e.current)));
        }
        function Dd() {
            var e = P.H;
            return P.H = Qu, e === null ? Qu : e;
        }
        function Bd() {
            var e = P.A;
            return P.A = Z0, e;
        }
        function Ac() {
            Be = 4, Sl || (he & 4194048) !== he && Ot.current !== null || (Pn = !0), (El & 134217727) === 0 && (Il & 134217727) === 0 || Ae === null || Tl(Ae, he, Nt, !1);
        }
        function Oc(e, t, l) {
            var n = ve;
            ve |= 2;
            var a = Dd(), i = Bd();
            (Ae !== e || he !== t) && (ei = null, Ln(e, t)), t = !1;
            var d = Be;
            e: do try {
                if (ge !== 0 && se !== null) {
                    var y = se, g = vt;
                    switch(ge){
                        case 8:
                            Tc(), d = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ot.current === null && (t = !0);
                            var M = ge;
                            if (ge = 0, vt = null, jn(e, y, g, M), l && Pn) {
                                d = 0;
                                break e;
                            }
                            break;
                        default:
                            M = ge, ge = 0, vt = null, jn(e, y, g, M);
                    }
                }
                F0(), d = Be;
                break;
            } catch (U) {
                Cd(e, U);
            }
            while (!0);
            return t && e.shellSuspendCounter++, Vt = Xl = null, ve = n, P.H = a, P.A = i, se === null && (Ae = null, he = 0, Ru()), d;
        }
        function F0() {
            for(; se !== null;)wd(se);
        }
        function W0(e, t) {
            var l = ve;
            ve |= 2;
            var n = Dd(), a = Bd();
            Ae !== e || he !== t ? (ei = null, Iu = zt() + 500, Ln(e, t)) : Pn = Jn(e, t);
            e: do try {
                if (ge !== 0 && se !== null) {
                    t = se;
                    var i = vt;
                    t: switch(ge){
                        case 1:
                            ge = 0, vt = null, jn(e, t, i, 1);
                            break;
                        case 2:
                        case 9:
                            if (Yo(i)) {
                                ge = 0, vt = null, zd(t);
                                break;
                            }
                            t = function() {
                                ge !== 2 && ge !== 9 || Ae !== e || (ge = 7), kt(e);
                            }, i.then(t, t);
                            break e;
                        case 3:
                            ge = 7;
                            break e;
                        case 4:
                            ge = 5;
                            break e;
                        case 7:
                            Yo(i) ? (ge = 0, vt = null, zd(t)) : (ge = 0, vt = null, jn(e, t, i, 7));
                            break;
                        case 5:
                            var d = null;
                            switch(se.tag){
                                case 26:
                                    d = se.memoizedState;
                                case 5:
                                case 27:
                                    var y = se;
                                    if (!d || mh(d)) {
                                        ge = 0, vt = null;
                                        var g = y.sibling;
                                        if (g !== null) se = g;
                                        else {
                                            var M = y.return;
                                            M !== null ? (se = M, li(M)) : se = null;
                                        }
                                        break t;
                                    }
                            }
                            ge = 0, vt = null, jn(e, t, i, 5);
                            break;
                        case 6:
                            ge = 0, vt = null, jn(e, t, i, 6);
                            break;
                        case 8:
                            Tc(), Be = 6;
                            break e;
                        default:
                            throw Error(f(462));
                    }
                }
                I0();
                break;
            } catch (U) {
                Cd(e, U);
            }
            while (!0);
            return Vt = Xl = null, P.H = n, P.A = a, ve = l, se !== null ? 0 : (Ae = null, he = 0, Ru(), Be);
        }
        function I0() {
            for(; se !== null && !Em();)wd(se);
        }
        function wd(e) {
            var t = id(e.alternate, e, el);
            e.memoizedProps = e.pendingProps, t === null ? li(e) : se = t;
        }
        function zd(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = ed(l, t, t.pendingProps, t.type, void 0, he);
                    break;
                case 11:
                    t = ed(l, t, t.pendingProps, t.type.render, t.ref, he);
                    break;
                case 5:
                    jr(t);
                default:
                    cd(l, t), t = se = Uo(t, el), t = id(l, t, el);
            }
            e.memoizedProps = e.pendingProps, t === null ? li(e) : se = t;
        }
        function jn(e, t, l, n) {
            Vt = Xl = null, jr(t), Bn = null, Ta = 0;
            var a = t.return;
            try {
                if (Q0(e, a, t, l, he)) {
                    Be = 1, Xu(e, _t(l, e.current)), se = null;
                    return;
                }
            } catch (i) {
                if (a !== null) throw se = a, i;
                Be = 1, Xu(e, _t(l, e.current)), se = null;
                return;
            }
            t.flags & 32768 ? (ye || n === 1 ? e = !0 : Pn || (he & 536870912) !== 0 ? e = !1 : (Sl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ot.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Ud(t, e)) : li(t);
        }
        function li(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Ud(t, Sl);
                    return;
                }
                e = t.return;
                var l = G0(t.alternate, t, el);
                if (l !== null) {
                    se = l;
                    return;
                }
                if (t = t.sibling, t !== null) {
                    se = t;
                    return;
                }
                se = t = e;
            }while (t !== null);
            Be === 0 && (Be = 5);
        }
        function Ud(e, t) {
            do {
                var l = Y0(e.alternate, e);
                if (l !== null) {
                    l.flags &= 32767, se = l;
                    return;
                }
                if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
                    se = e;
                    return;
                }
                se = e = l;
            }while (e !== null);
            Be = 6, se = null;
        }
        function Pd(e, t, l, n, a, i, d, y, g) {
            e.cancelPendingCommit = null;
            do ni();
            while (Ze !== 0);
            if ((ve & 6) !== 0) throw Error(f(327));
            if (t !== null) {
                if (t === e.current) throw Error(f(177));
                if (i = t.lanes | t.childLanes, i |= yr, Dm(e, l, i, d, y, g), e === Ae && (se = Ae = null, he = 0), Hn = t, Rl = e, kn = l, Ec = i, _c = a, Od = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, n1(cu, function() {
                    return jd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                    n = P.T, P.T = null, a = Y.p, Y.p = 2, d = ve, ve |= 4;
                    try {
                        V0(e, t, l);
                    } finally{
                        ve = d, Y.p = a, P.T = n;
                    }
                }
                Ze = 1, qd(), Hd(), kd();
            }
        }
        function qd() {
            if (Ze === 1) {
                Ze = 0;
                var e = Rl, t = Hn, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = P.T, P.T = null;
                    var n = Y.p;
                    Y.p = 2;
                    var a = ve;
                    ve |= 4;
                    try {
                        bd(t, e);
                        var i = Hc, d = Ao(e.containerInfo), y = i.focusedElem, g = i.selectionRange;
                        if (d !== y && y && y.ownerDocument && To(y.ownerDocument.documentElement, y)) {
                            if (g !== null && sr(y)) {
                                var M = g.start, U = g.end;
                                if (U === void 0 && (U = M), "selectionStart" in y) y.selectionStart = M, y.selectionEnd = Math.min(U, y.value.length);
                                else {
                                    var H = y.ownerDocument || document, C = H && H.defaultView || window;
                                    if (C.getSelection) {
                                        var B = C.getSelection(), ae = y.textContent.length, ee = Math.min(g.start, ae), Ee = g.end === void 0 ? ee : Math.min(g.end, ae);
                                        !B.extend && ee > Ee && (d = Ee, Ee = ee, ee = d);
                                        var A = Ro(y, ee), _ = Ro(y, Ee);
                                        if (A && _ && (B.rangeCount !== 1 || B.anchorNode !== A.node || B.anchorOffset !== A.offset || B.focusNode !== _.node || B.focusOffset !== _.offset)) {
                                            var x = H.createRange();
                                            x.setStart(A.node, A.offset), B.removeAllRanges(), ee > Ee ? (B.addRange(x), B.extend(_.node, _.offset)) : (x.setEnd(_.node, _.offset), B.addRange(x));
                                        }
                                    }
                                }
                            }
                            for(H = [], B = y; B = B.parentNode;)B.nodeType === 1 && H.push({
                                element: B,
                                left: B.scrollLeft,
                                top: B.scrollTop
                            });
                            for(typeof y.focus == "function" && y.focus(), y = 0; y < H.length; y++){
                                var q = H[y];
                                q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
                            }
                        }
                        mi = !!qc, Hc = qc = null;
                    } finally{
                        ve = a, Y.p = n, P.T = l;
                    }
                }
                e.current = t, Ze = 2;
            }
        }
        function Hd() {
            if (Ze === 2) {
                Ze = 0;
                var e = Rl, t = Hn, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = P.T, P.T = null;
                    var n = Y.p;
                    Y.p = 2;
                    var a = ve;
                    ve |= 4;
                    try {
                        md(e, t.alternate, t);
                    } finally{
                        ve = a, Y.p = n, P.T = l;
                    }
                }
                Ze = 3;
            }
        }
        function kd() {
            if (Ze === 4 || Ze === 3) {
                Ze = 0, _m();
                var e = Rl, t = Hn, l = kn, n = Od;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ze = 5 : (Ze = 0, Hn = Rl = null, Ld(e, e.pendingLanes));
                var a = e.pendingLanes;
                if (a === 0 && (_l = null), Gi(l), t = t.stateNode, st && typeof st.onCommitFiberRoot == "function") try {
                    st.onCommitFiberRoot($n, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (n !== null) {
                    t = P.T, a = Y.p, Y.p = 2, P.T = null;
                    try {
                        for(var i = e.onRecoverableError, d = 0; d < n.length; d++){
                            var y = n[d];
                            i(y.value, {
                                componentStack: y.stack
                            });
                        }
                    } finally{
                        P.T = t, Y.p = a;
                    }
                }
                (kn & 3) !== 0 && ni(), kt(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === Rc ? wa++ : (wa = 0, Rc = e) : wa = 0, za(0);
            }
        }
        function Ld(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ha(t)));
        }
        function ni(e) {
            return qd(), Hd(), kd(), jd();
        }
        function jd() {
            if (Ze !== 5) return !1;
            var e = Rl, t = Ec;
            Ec = 0;
            var l = Gi(kn), n = P.T, a = Y.p;
            try {
                Y.p = 32 > l ? 32 : l, P.T = null, l = _c, _c = null;
                var i = Rl, d = kn;
                if (Ze = 0, Hn = Rl = null, kn = 0, (ve & 6) !== 0) throw Error(f(331));
                var y = ve;
                if (ve |= 4, Td(i.current), Ed(i, i.current, d, l), ve = y, za(0, !1), st && typeof st.onPostCommitFiberRoot == "function") try {
                    st.onPostCommitFiberRoot($n, i);
                } catch  {}
                return !0;
            } finally{
                Y.p = a, P.T = n, Ld(e, t);
            }
        }
        function Qd(e, t, l) {
            t = _t(l, t), t = tc(e.stateNode, t, 2), e = hl(e, t, 2), e !== null && (Fn(e, 2), kt(e));
        }
        function Te(e, t, l) {
            if (e.tag === 3) Qd(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Qd(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (_l === null || !_l.has(n))) {
                        e = _t(l, e), l = Vs(2), n = hl(t, l, 2), n !== null && (Xs(l, n, t, e), Fn(n, 2), kt(n));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Nc(e, t, l) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new $0;
                var a = new Set;
                n.set(t, a);
            } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
            a.has(l) || (vc = !0, a.add(l), e = e1.bind(null, e, t, l), t.then(e, e));
        }
        function e1(e, t, l) {
            var n = e.pingCache;
            n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ae === e && (he & l) === l && (Be === 4 || Be === 3 && (he & 62914560) === he && 300 > zt() - Sc ? (ve & 2) === 0 && Ln(e, 0) : gc |= l, qn === he && (qn = 0)), kt(e);
        }
        function Kd(e, t) {
            t === 0 && (t = Hf()), e = _n(e, t), e !== null && (Fn(e, t), kt(e));
        }
        function t1(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), Kd(e, l);
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
                    throw Error(f(314));
            }
            n !== null && n.delete(t), Kd(e, l);
        }
        function n1(e, t) {
            return Li(e, t);
        }
        var ai = null, Qn = null, xc = !1, ui = !1, Mc = !1, en = 0;
        function kt(e) {
            e !== Qn && e.next === null && (Qn === null ? ai = Qn = e : Qn = Qn.next = e), ui = !0, xc || (xc = !0, u1());
        }
        function za(e, t) {
            if (!Mc && ui) {
                Mc = !0;
                do for(var l = !1, n = ai; n !== null;){
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var i = 0;
                        else {
                            var d = n.suspendedLanes, y = n.pingedLanes;
                            i = (1 << 31 - dt(42 | e) + 1) - 1, i &= a & ~(d & ~y), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                        }
                        i !== 0 && (l = !0, Xd(n, i));
                    } else i = he, i = su(n, n === Ae ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (i & 3) === 0 || Jn(n, i) || (l = !0, Xd(n, i));
                    n = n.next;
                }
                while (l);
                Mc = !1;
            }
        }
        function a1() {
            Gd();
        }
        function Gd() {
            ui = xc = !1;
            var e = 0;
            en !== 0 && (h1() && (e = en), en = 0);
            for(var t = zt(), l = null, n = ai; n !== null;){
                var a = n.next, i = Yd(n, t);
                i === 0 ? (n.next = null, l === null ? ai = a : l.next = a, a === null && (Qn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ui = !0)), n = a;
            }
            za(e);
        }
        function Yd(e, t) {
            for(var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;){
                var d = 31 - dt(i), y = 1 << d, g = a[d];
                g === -1 ? ((y & l) === 0 || (y & n) !== 0) && (a[d] = Cm(y, t)) : g <= t && (e.expiredLanes |= y), i &= ~y;
            }
            if (t = Ae, l = he, l = su(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && ji(n), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || Jn(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(n !== null && ji(n), Gi(l)){
                    case 2:
                    case 8:
                        l = Uf;
                        break;
                    case 32:
                        l = cu;
                        break;
                    case 268435456:
                        l = Pf;
                        break;
                    default:
                        l = cu;
                }
                return n = Vd.bind(null, e), l = Li(l, n), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return n !== null && n !== null && ji(n), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Vd(e, t) {
            if (Ze !== 0 && Ze !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (ni() && e.callbackNode !== l) return null;
            var n = he;
            return n = su(e, e === Ae ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (xd(e, n, t), Yd(e, zt()), e.callbackNode != null && e.callbackNode === l ? Vd.bind(null, e) : null);
        }
        function Xd(e, t) {
            if (ni()) return null;
            xd(e, t, !0);
        }
        function u1() {
            m1(function() {
                (ve & 6) !== 0 ? Li(zf, a1) : Gd();
            });
        }
        function Cc() {
            return en === 0 && (en = qf()), en;
        }
        function Zd(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yu("" + e);
        }
        function $d(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function i1(e, t, l, n, a) {
            if (t === "submit" && l && l.stateNode === a) {
                var i = Zd((a[at] || null).action), d = n.submitter;
                d && (t = (t = d[at] || null) ? Zd(t.formAction) : d.getAttribute("formAction"), t !== null && (i = t, d = null));
                var y = new Su("action", "action", null, n, a);
                e.push({
                    event: y,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (en !== 0) {
                                        var g = d ? $d(a, d) : new FormData(a);
                                        Jr(l, {
                                            pending: !0,
                                            data: g,
                                            method: a.method,
                                            action: i
                                        }, null, g);
                                    }
                                } else typeof i == "function" && (y.preventDefault(), g = d ? $d(a, d) : new FormData(a), Jr(l, {
                                    pending: !0,
                                    data: g,
                                    method: a.method,
                                    action: i
                                }, i, g));
                            },
                            currentTarget: a
                        }
                    ]
                });
            }
        }
        for(var Dc = 0; Dc < mr.length; Dc++){
            var Bc = mr[Dc], r1 = Bc.toLowerCase(), c1 = Bc[0].toUpperCase() + Bc.slice(1);
            Ct(r1, "on" + c1);
        }
        Ct(xo, "onAnimationEnd"), Ct(Mo, "onAnimationIteration"), Ct(Co, "onAnimationStart"), Ct("dblclick", "onDoubleClick"), Ct("focusin", "onFocus"), Ct("focusout", "onBlur"), Ct(A0, "onTransitionRun"), Ct(O0, "onTransitionStart"), Ct(N0, "onTransitionCancel"), Ct(Do, "onTransitionEnd"), dn("onMouseEnter", [
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
        ]), Hl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Hl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Hl("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), Hl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Hl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Hl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Ua = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), f1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ua));
        function Jd(e, t) {
            t = (t & 4) !== 0;
            for(var l = 0; l < e.length; l++){
                var n = e[l], a = n.event;
                n = n.listeners;
                e: {
                    var i = void 0;
                    if (t) for(var d = n.length - 1; 0 <= d; d--){
                        var y = n[d], g = y.instance, M = y.currentTarget;
                        if (y = y.listener, g !== i && a.isPropagationStopped()) break e;
                        i = y, a.currentTarget = M;
                        try {
                            i(a);
                        } catch (U) {
                            Vu(U);
                        }
                        a.currentTarget = null, i = g;
                    }
                    else for(d = 0; d < n.length; d++){
                        if (y = n[d], g = y.instance, M = y.currentTarget, y = y.listener, g !== i && a.isPropagationStopped()) break e;
                        i = y, a.currentTarget = M;
                        try {
                            i(a);
                        } catch (U) {
                            Vu(U);
                        }
                        a.currentTarget = null, i = g;
                    }
                }
            }
        }
        function de(e, t) {
            var l = t[Yi];
            l === void 0 && (l = t[Yi] = new Set);
            var n = e + "__bubble";
            l.has(n) || (Fd(t, e, 2, !1), l.add(n));
        }
        function wc(e, t, l) {
            var n = 0;
            t && (n |= 4), Fd(l, e, n, t);
        }
        var ii = "_reactListening" + Math.random().toString(36).slice(2);
        function zc(e) {
            if (!e[ii]) {
                e[ii] = !0, Kf.forEach(function(l) {
                    l !== "selectionchange" && (f1.has(l) || wc(l, !1, e), wc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[ii] || (t[ii] = !0, wc("selectionchange", !1, t));
            }
        }
        function Fd(e, t, l, n) {
            switch(Eh(t)){
                case 2:
                    var a = P1;
                    break;
                case 8:
                    a = q1;
                    break;
                default:
                    a = Zc;
            }
            l = a.bind(null, t, l, e), a = void 0, !lr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
                capture: !0,
                passive: a
            }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
                passive: a
            }) : e.addEventListener(t, l, !1);
        }
        function Uc(e, t, l, n, a) {
            var i = n;
            if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for(;;){
                if (n === null) return;
                var d = n.tag;
                if (d === 3 || d === 4) {
                    var y = n.stateNode.containerInfo;
                    if (y === a) break;
                    if (d === 4) for(d = n.return; d !== null;){
                        var g = d.tag;
                        if ((g === 3 || g === 4) && d.stateNode.containerInfo === a) return;
                        d = d.return;
                    }
                    for(; y !== null;){
                        if (d = fn(y), d === null) return;
                        if (g = d.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                            n = i = d;
                            continue e;
                        }
                        y = y.parentNode;
                    }
                }
                n = n.return;
            }
            no(function() {
                var M = i, U = er(l), H = [];
                e: {
                    var C = Bo.get(e);
                    if (C !== void 0) {
                        var B = Su, ae = e;
                        switch(e){
                            case "keypress":
                                if (gu(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                B = n0;
                                break;
                            case "focusin":
                                ae = "focus", B = ir;
                                break;
                            case "focusout":
                                ae = "blur", B = ir;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                B = ir;
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
                                B = io;
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
                                B = i0;
                                break;
                            case xo:
                            case Mo:
                            case Co:
                                B = Zm;
                                break;
                            case Do:
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
                                B = co;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                B = d0;
                        }
                        var ee = (t & 4) !== 0, Ee = !ee && (e === "scroll" || e === "scrollend"), A = ee ? C !== null ? C + "Capture" : null : C;
                        ee = [];
                        for(var _ = M, x; _ !== null;){
                            var q = _;
                            if (x = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || x === null || A === null || (q = ea(_, A), q != null && ee.push(Pa(_, q, x))), Ee) break;
                            _ = _.return;
                        }
                        0 < ee.length && (C = new B(C, ae, null, l, U), H.push({
                            event: C,
                            listeners: ee
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (C = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", C && l !== Ii && (ae = l.relatedTarget || l.fromElement) && (fn(ae) || ae[cn])) break e;
                        if ((B || C) && (C = U.window === U ? U : (C = U.ownerDocument) ? C.defaultView || C.parentWindow : window, B ? (ae = l.relatedTarget || l.toElement, B = M, ae = ae ? fn(ae) : null, ae !== null && (Ee = s(ae), ee = ae.tag, ae !== Ee || ee !== 5 && ee !== 27 && ee !== 6) && (ae = null)) : (B = null, ae = M), B !== ae)) {
                            if (ee = io, q = "onMouseLeave", A = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (ee = co, q = "onPointerLeave", A = "onPointerEnter", _ = "pointer"), Ee = B == null ? C : In(B), x = ae == null ? C : In(ae), C = new ee(q, _ + "leave", B, l, U), C.target = Ee, C.relatedTarget = x, q = null, fn(U) === M && (ee = new ee(A, _ + "enter", ae, l, U), ee.target = x, ee.relatedTarget = Ee, q = ee), Ee = q, B && ae) t: {
                                for(ee = B, A = ae, _ = 0, x = ee; x; x = Kn(x))_++;
                                for(x = 0, q = A; q; q = Kn(q))x++;
                                for(; 0 < _ - x;)ee = Kn(ee), _--;
                                for(; 0 < x - _;)A = Kn(A), x--;
                                for(; _--;){
                                    if (ee === A || A !== null && ee === A.alternate) break t;
                                    ee = Kn(ee), A = Kn(A);
                                }
                                ee = null;
                            }
                            else ee = null;
                            B !== null && Wd(H, C, B, ee, !1), ae !== null && Ee !== null && Wd(H, Ee, ae, ee, !0);
                        }
                    }
                    e: {
                        if (C = M ? In(M) : window, B = C.nodeName && C.nodeName.toLowerCase(), B === "select" || B === "input" && C.type === "file") var Z = vo;
                        else if (mo(C)) if (go) Z = _0;
                        else {
                            Z = S0;
                            var oe = b0;
                        }
                        else B = C.nodeName, !B || B.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? M && Wi(M.elementType) && (Z = vo) : Z = E0;
                        if (Z && (Z = Z(e, M))) {
                            yo(H, Z, l, U);
                            break e;
                        }
                        oe && oe(e, C, M), e === "focusout" && M && C.type === "number" && M.memoizedProps.value != null && Fi(C, "number", C.value);
                    }
                    switch(oe = M ? In(M) : window, e){
                        case "focusin":
                            (mo(oe) || oe.contentEditable === "true") && (bn = oe, dr = M, ca = null);
                            break;
                        case "focusout":
                            ca = dr = bn = null;
                            break;
                        case "mousedown":
                            hr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            hr = !1, Oo(H, l, U);
                            break;
                        case "selectionchange":
                            if (T0) break;
                        case "keydown":
                        case "keyup":
                            Oo(H, l, U);
                    }
                    var F;
                    if (cr) e: {
                        switch(e){
                            case "compositionstart":
                                var te = "onCompositionStart";
                                break e;
                            case "compositionend":
                                te = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                te = "onCompositionUpdate";
                                break e;
                        }
                        te = void 0;
                    }
                    else gn ? ho(e, l) && (te = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (te = "onCompositionStart");
                    te && (fo && l.locale !== "ko" && (gn || te !== "onCompositionStart" ? te === "onCompositionEnd" && gn && (F = ao()) : (fl = U, nr = "value" in fl ? fl.value : fl.textContent, gn = !0)), oe = ri(M, te), 0 < oe.length && (te = new ro(te, e, null, l, U), H.push({
                        event: te,
                        listeners: oe
                    }), F ? te.data = F : (F = po(l), F !== null && (te.data = F)))), (F = p0 ? m0(e, l) : y0(e, l)) && (te = ri(M, "onBeforeInput"), 0 < te.length && (oe = new ro("onBeforeInput", "beforeinput", null, l, U), H.push({
                        event: oe,
                        listeners: te
                    }), oe.data = F)), i1(H, e, M, l, U);
                }
                Jd(H, t);
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
                var a = e, i = a.stateNode;
                if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = ea(e, l), a != null && n.unshift(Pa(e, a, i)), a = ea(e, t), a != null && n.push(Pa(e, a, i))), e.tag === 3) return n;
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
        function Wd(e, t, l, n, a) {
            for(var i = t._reactName, d = []; l !== null && l !== n;){
                var y = l, g = y.alternate, M = y.stateNode;
                if (y = y.tag, g !== null && g === n) break;
                y !== 5 && y !== 26 && y !== 27 || M === null || (g = M, a ? (M = ea(l, i), M != null && d.unshift(Pa(l, M, g))) : a || (M = ea(l, i), M != null && d.push(Pa(l, M, g)))), l = l.return;
            }
            d.length !== 0 && e.push({
                event: t,
                listeners: d
            });
        }
        var o1 = /\r\n?/g, s1 = /\u0000|\uFFFD/g;
        function Id(e) {
            return (typeof e == "string" ? e : "" + e).replace(o1, `
`).replace(s1, "");
        }
        function eh(e, t) {
            return t = Id(t), Id(e) === t;
        }
        function ci() {}
        function Se(e, t, l, n, a, i) {
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
                    to(e, n, i);
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
                    } else typeof i == "function" && (l === "formAction" ? (t !== "input" && Se(e, t, "name", a.name, a, null), Se(e, t, "formEncType", a.formEncType, a, null), Se(e, t, "formMethod", a.formMethod, a, null), Se(e, t, "formTarget", a.formTarget, a, null)) : (Se(e, t, "encType", a.encType, a, null), Se(e, t, "method", a.method, a, null), Se(e, t, "target", a.target, a, null)));
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
                    n != null && de("scroll", e);
                    break;
                case "onScrollEnd":
                    n != null && de("scrollend", e);
                    break;
                case "dangerouslySetInnerHTML":
                    if (n != null) {
                        if (typeof n != "object" || !("__html" in n)) throw Error(f(61));
                        if (l = n.__html, l != null) {
                            if (a.children != null) throw Error(f(60));
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
                    de("beforetoggle", e), de("toggle", e), du(e, "popover", n);
                    break;
                case "xlinkActuate":
                    jt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
                    break;
                case "xlinkArcrole":
                    jt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
                    break;
                case "xlinkRole":
                    jt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
                    break;
                case "xlinkShow":
                    jt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
                    break;
                case "xlinkTitle":
                    jt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
                    break;
                case "xlinkType":
                    jt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
                    break;
                case "xmlBase":
                    jt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
                    break;
                case "xmlLang":
                    jt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
                    break;
                case "xmlSpace":
                    jt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
                    break;
                case "is":
                    du(e, "is", n);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = jm.get(l) || l, du(e, l, n));
            }
        }
        function Pc(e, t, l, n, a, i) {
            switch(l){
                case "style":
                    to(e, n, i);
                    break;
                case "dangerouslySetInnerHTML":
                    if (n != null) {
                        if (typeof n != "object" || !("__html" in n)) throw Error(f(61));
                        if (l = n.__html, l != null) {
                            if (a.children != null) throw Error(f(60));
                            e.innerHTML = l;
                        }
                    }
                    break;
                case "children":
                    typeof n == "string" ? mn(e, n) : (typeof n == "number" || typeof n == "bigint") && mn(e, "" + n);
                    break;
                case "onScroll":
                    n != null && de("scroll", e);
                    break;
                case "onScrollEnd":
                    n != null && de("scrollend", e);
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
                    if (!Gf.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[at] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
                            typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
                            break e;
                        }
                        l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : du(e, l, n);
                    }
            }
        }
        function $e(e, t, l) {
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
                    de("error", e), de("load", e);
                    var n = !1, a = !1, i;
                    for(i in l)if (l.hasOwnProperty(i)) {
                        var d = l[i];
                        if (d != null) switch(i){
                            case "src":
                                n = !0;
                                break;
                            case "srcSet":
                                a = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(f(137, t));
                            default:
                                Se(e, t, i, d, l, null);
                        }
                    }
                    a && Se(e, t, "srcSet", l.srcSet, l, null), n && Se(e, t, "src", l.src, l, null);
                    return;
                case "input":
                    de("invalid", e);
                    var y = i = d = a = null, g = null, M = null;
                    for(n in l)if (l.hasOwnProperty(n)) {
                        var U = l[n];
                        if (U != null) switch(n){
                            case "name":
                                a = U;
                                break;
                            case "type":
                                d = U;
                                break;
                            case "checked":
                                g = U;
                                break;
                            case "defaultChecked":
                                M = U;
                                break;
                            case "value":
                                i = U;
                                break;
                            case "defaultValue":
                                y = U;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (U != null) throw Error(f(137, t));
                                break;
                            default:
                                Se(e, t, n, U, l, null);
                        }
                    }
                    Ff(e, i, y, g, M, d, a, !1), pu(e);
                    return;
                case "select":
                    de("invalid", e), n = d = i = null;
                    for(a in l)if (l.hasOwnProperty(a) && (y = l[a], y != null)) switch(a){
                        case "value":
                            i = y;
                            break;
                        case "defaultValue":
                            d = y;
                            break;
                        case "multiple":
                            n = y;
                        default:
                            Se(e, t, a, y, l, null);
                    }
                    t = i, l = d, e.multiple = !!n, t != null ? pn(e, !!n, t, !1) : l != null && pn(e, !!n, l, !0);
                    return;
                case "textarea":
                    de("invalid", e), i = a = n = null;
                    for(d in l)if (l.hasOwnProperty(d) && (y = l[d], y != null)) switch(d){
                        case "value":
                            n = y;
                            break;
                        case "defaultValue":
                            a = y;
                            break;
                        case "children":
                            i = y;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (y != null) throw Error(f(91));
                            break;
                        default:
                            Se(e, t, d, y, l, null);
                    }
                    If(e, n, a, i), pu(e);
                    return;
                case "option":
                    for(g in l)if (l.hasOwnProperty(g) && (n = l[g], n != null)) switch(g){
                        case "selected":
                            e.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default:
                            Se(e, t, g, n, l, null);
                    }
                    return;
                case "dialog":
                    de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
                    break;
                case "iframe":
                case "object":
                    de("load", e);
                    break;
                case "video":
                case "audio":
                    for(n = 0; n < Ua.length; n++)de(Ua[n], e);
                    break;
                case "image":
                    de("error", e), de("load", e);
                    break;
                case "details":
                    de("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    de("error", e), de("load", e);
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
                            throw Error(f(137, t));
                        default:
                            Se(e, t, M, n, l, null);
                    }
                    return;
                default:
                    if (Wi(t)) {
                        for(U in l)l.hasOwnProperty(U) && (n = l[U], n !== void 0 && Pc(e, t, U, n, l, void 0));
                        return;
                    }
            }
            for(y in l)l.hasOwnProperty(y) && (n = l[y], n != null && Se(e, t, y, n, l, null));
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
                    var a = null, i = null, d = null, y = null, g = null, M = null, U = null;
                    for(B in l){
                        var H = l[B];
                        if (l.hasOwnProperty(B) && H != null) switch(B){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                g = H;
                            default:
                                n.hasOwnProperty(B) || Se(e, t, B, null, n, H);
                        }
                    }
                    for(var C in n){
                        var B = n[C];
                        if (H = l[C], n.hasOwnProperty(C) && (B != null || H != null)) switch(C){
                            case "type":
                                i = B;
                                break;
                            case "name":
                                a = B;
                                break;
                            case "checked":
                                M = B;
                                break;
                            case "defaultChecked":
                                U = B;
                                break;
                            case "value":
                                d = B;
                                break;
                            case "defaultValue":
                                y = B;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (B != null) throw Error(f(137, t));
                                break;
                            default:
                                B !== H && Se(e, t, C, B, n, H);
                        }
                    }
                    Ji(e, d, y, g, M, U, i, a);
                    return;
                case "select":
                    B = d = y = C = null;
                    for(i in l)if (g = l[i], l.hasOwnProperty(i) && g != null) switch(i){
                        case "value":
                            break;
                        case "multiple":
                            B = g;
                        default:
                            n.hasOwnProperty(i) || Se(e, t, i, null, n, g);
                    }
                    for(a in n)if (i = n[a], g = l[a], n.hasOwnProperty(a) && (i != null || g != null)) switch(a){
                        case "value":
                            C = i;
                            break;
                        case "defaultValue":
                            y = i;
                            break;
                        case "multiple":
                            d = i;
                        default:
                            i !== g && Se(e, t, a, i, n, g);
                    }
                    t = y, l = d, n = B, C != null ? pn(e, !!l, C, !1) : !!n != !!l && (t != null ? pn(e, !!l, t, !0) : pn(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    B = C = null;
                    for(y in l)if (a = l[y], l.hasOwnProperty(y) && a != null && !n.hasOwnProperty(y)) switch(y){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Se(e, t, y, null, n, a);
                    }
                    for(d in n)if (a = n[d], i = l[d], n.hasOwnProperty(d) && (a != null || i != null)) switch(d){
                        case "value":
                            C = a;
                            break;
                        case "defaultValue":
                            B = a;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (a != null) throw Error(f(91));
                            break;
                        default:
                            a !== i && Se(e, t, d, a, n, i);
                    }
                    Wf(e, C, B);
                    return;
                case "option":
                    for(var ae in l)if (C = l[ae], l.hasOwnProperty(ae) && C != null && !n.hasOwnProperty(ae)) switch(ae){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Se(e, t, ae, null, n, C);
                    }
                    for(g in n)if (C = n[g], B = l[g], n.hasOwnProperty(g) && C !== B && (C != null || B != null)) switch(g){
                        case "selected":
                            e.selected = C && typeof C != "function" && typeof C != "symbol";
                            break;
                        default:
                            Se(e, t, g, C, n, B);
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
                    for(var ee in l)C = l[ee], l.hasOwnProperty(ee) && C != null && !n.hasOwnProperty(ee) && Se(e, t, ee, null, n, C);
                    for(M in n)if (C = n[M], B = l[M], n.hasOwnProperty(M) && C !== B && (C != null || B != null)) switch(M){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (C != null) throw Error(f(137, t));
                            break;
                        default:
                            Se(e, t, M, C, n, B);
                    }
                    return;
                default:
                    if (Wi(t)) {
                        for(var Ee in l)C = l[Ee], l.hasOwnProperty(Ee) && C !== void 0 && !n.hasOwnProperty(Ee) && Pc(e, t, Ee, void 0, n, C);
                        for(U in n)C = n[U], B = l[U], !n.hasOwnProperty(U) || C === B || C === void 0 && B === void 0 || Pc(e, t, U, C, n, B);
                        return;
                    }
            }
            for(var A in l)C = l[A], l.hasOwnProperty(A) && C != null && !n.hasOwnProperty(A) && Se(e, t, A, null, n, C);
            for(H in n)C = n[H], B = l[H], !n.hasOwnProperty(H) || C === B || C == null && B == null || Se(e, t, H, C, n, B);
        }
        var qc = null, Hc = null;
        function fi(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function th(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function lh(e, t) {
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
        var Lc = null;
        function h1() {
            var e = window.event;
            return e && e.type === "popstate" ? e === Lc ? !1 : (Lc = e, !0) : (Lc = null, !1);
        }
        var nh = typeof setTimeout == "function" ? setTimeout : void 0, p1 = typeof clearTimeout == "function" ? clearTimeout : void 0, ah = typeof Promise == "function" ? Promise : void 0, m1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ah < "u" ? function(e) {
            return ah.resolve(null).then(e).catch(y1);
        } : nh;
        function y1(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Al(e) {
            return e === "head";
        }
        function uh(e, t) {
            var l = t, n = 0, a = 0;
            do {
                var i = l.nextSibling;
                if (e.removeChild(l), i && i.nodeType === 8) if (l = i.data, l === "/$") {
                    if (0 < n && 8 > n) {
                        l = n;
                        var d = e.ownerDocument;
                        if (l & 1 && qa(d.documentElement), l & 2 && qa(d.body), l & 4) for(l = d.head, qa(l), d = l.firstChild; d;){
                            var y = d.nextSibling, g = d.nodeName;
                            d[Wn] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && d.rel.toLowerCase() === "stylesheet" || l.removeChild(d), d = y;
                        }
                    }
                    if (a === 0) {
                        e.removeChild(i), Ya(t);
                        return;
                    }
                    a--;
                } else l === "$" || l === "$?" || l === "$!" ? a++ : n = l.charCodeAt(0) - 48;
                else n = 0;
                l = i;
            }while (l);
            Ya(t);
        }
        function jc(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var l = t;
                switch(t = t.nextSibling, l.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        jc(l), Vi(l);
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
                            if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence")) break;
                            if (i !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title)) break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                        case "script":
                            if (i = e.getAttribute("src"), (i !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                            return e;
                        default:
                            return e;
                    }
                } else if (t === "input" && e.type === "hidden") {
                    var i = a.name == null ? null : "" + a.name;
                    if (a.type === "hidden" && e.getAttribute("name") === i) return e;
                } else return e;
                if (e = Bt(e.nextSibling), e === null) break;
            }
            return null;
        }
        function g1(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
            return e;
        }
        function Qc(e) {
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
        function Bt(e) {
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
        var Kc = null;
        function ih(e) {
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
        function rh(e, t, l) {
            switch(t = fi(l), e){
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
        function qa(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            Vi(e);
        }
        var xt = new Map, ch = new Set;
        function oi(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var tl = Y.d;
        Y.d = {
            f: S1,
            r: E1,
            D: _1,
            C: R1,
            L: T1,
            m: A1,
            X: N1,
            S: O1,
            M: x1
        };
        function S1() {
            var e = tl.f(), t = ti();
            return e || t;
        }
        function E1(e) {
            var t = on(e);
            t !== null && t.tag === 5 && t.type === "form" ? xs(t) : tl.r(e);
        }
        var Gn = typeof document > "u" ? null : document;
        function fh(e, t, l) {
            var n = Gn;
            if (n && typeof t == "string" && t) {
                var a = Et(t);
                a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), ch.has(a) || (ch.add(a), e = {
                    rel: e,
                    crossOrigin: l,
                    href: t
                }, n.querySelector(a) === null && (t = n.createElement("link"), $e(t, "link", e), Qe(t), n.head.appendChild(t)));
            }
        }
        function _1(e) {
            tl.D(e), fh("dns-prefetch", e, null);
        }
        function R1(e, t) {
            tl.C(e, t), fh("preconnect", e, t);
        }
        function T1(e, t, l) {
            tl.L(e, t, l);
            var n = Gn;
            if (n && e && t) {
                var a = 'link[rel="preload"][as="' + Et(t) + '"]';
                t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Et(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Et(l.imageSizes) + '"]')) : a += '[href="' + Et(e) + '"]';
                var i = a;
                switch(t){
                    case "style":
                        i = Yn(e);
                        break;
                    case "script":
                        i = Vn(e);
                }
                xt.has(i) || (e = b({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), xt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Ha(i)) || t === "script" && n.querySelector(ka(i)) || (t = n.createElement("link"), $e(t, "link", e), Qe(t), n.head.appendChild(t)));
            }
        }
        function A1(e, t) {
            tl.m(e, t);
            var l = Gn;
            if (l && e) {
                var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Et(n) + '"][href="' + Et(e) + '"]', i = a;
                switch(n){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        i = Vn(e);
                }
                if (!xt.has(i) && (e = b({
                    rel: "modulepreload",
                    href: e
                }, t), xt.set(i, e), l.querySelector(a) === null)) {
                    switch(n){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (l.querySelector(ka(i))) return;
                    }
                    n = l.createElement("link"), $e(n, "link", e), Qe(n), l.head.appendChild(n);
                }
            }
        }
        function O1(e, t, l) {
            tl.S(e, t, l);
            var n = Gn;
            if (n && e) {
                var a = sn(n).hoistableStyles, i = Yn(e);
                t = t || "default";
                var d = a.get(i);
                if (!d) {
                    var y = {
                        loading: 0,
                        preload: null
                    };
                    if (d = n.querySelector(Ha(i))) y.loading = 5;
                    else {
                        e = b({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = xt.get(i)) && Gc(e, l);
                        var g = d = n.createElement("link");
                        Qe(g), $e(g, "link", e), g._p = new Promise(function(M, U) {
                            g.onload = M, g.onerror = U;
                        }), g.addEventListener("load", function() {
                            y.loading |= 1;
                        }), g.addEventListener("error", function() {
                            y.loading |= 2;
                        }), y.loading |= 4, si(d, t, n);
                    }
                    d = {
                        type: "stylesheet",
                        instance: d,
                        count: 1,
                        state: y
                    }, a.set(i, d);
                }
            }
        }
        function N1(e, t) {
            tl.X(e, t);
            var l = Gn;
            if (l && e) {
                var n = sn(l).hoistableScripts, a = Vn(e), i = n.get(a);
                i || (i = l.querySelector(ka(a)), i || (e = b({
                    src: e,
                    async: !0
                }, t), (t = xt.get(a)) && Yc(e, t), i = l.createElement("script"), Qe(i), $e(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function x1(e, t) {
            tl.M(e, t);
            var l = Gn;
            if (l && e) {
                var n = sn(l).hoistableScripts, a = Vn(e), i = n.get(a);
                i || (i = l.querySelector(ka(a)), i || (e = b({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = xt.get(a)) && Yc(e, t), i = l.createElement("script"), Qe(i), $e(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function oh(e, t, l, n) {
            var a = (a = ie.current) ? oi(a) : null;
            if (!a) throw Error(f(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Yn(l.href), l = sn(a).hoistableStyles, n = l.get(t), n || (n = {
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
                        e = Yn(l.href);
                        var i = sn(a).hoistableStyles, d = i.get(e);
                        if (d || (a = a.ownerDocument || a, d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, i.set(e, d), (i = a.querySelector(Ha(e))) && !i._p && (d.instance = i, d.state.loading = 5), xt.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, xt.set(e, l), i || M1(a, e, l, d.state))), t && n === null) throw Error(f(528, ""));
                        return d;
                    }
                    if (t && n !== null) throw Error(f(529, ""));
                    return null;
                case "script":
                    return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Vn(l), l = sn(a).hoistableScripts, n = l.get(t), n || (n = {
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
                    throw Error(f(444, e));
            }
        }
        function Yn(e) {
            return 'href="' + Et(e) + '"';
        }
        function Ha(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function sh(e) {
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
            }), $e(t, "link", l), Qe(t), e.head.appendChild(t));
        }
        function Vn(e) {
            return '[src="' + Et(e) + '"]';
        }
        function ka(e) {
            return "script[async]" + e;
        }
        function dh(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var n = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
                    if (n) return t.instance = n, Qe(n), n;
                    var a = b({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return n = (e.ownerDocument || e).createElement("style"), Qe(n), $e(n, "style", a), si(n, l.precedence, e), t.instance = n;
                case "stylesheet":
                    a = Yn(l.href);
                    var i = e.querySelector(Ha(a));
                    if (i) return t.state.loading |= 4, t.instance = i, Qe(i), i;
                    n = sh(l), (a = xt.get(a)) && Gc(n, a), i = (e.ownerDocument || e).createElement("link"), Qe(i);
                    var d = i;
                    return d._p = new Promise(function(y, g) {
                        d.onload = y, d.onerror = g;
                    }), $e(i, "link", n), t.state.loading |= 4, si(i, l.precedence, e), t.instance = i;
                case "script":
                    return i = Vn(l.src), (a = e.querySelector(ka(i))) ? (t.instance = a, Qe(a), a) : (n = l, (a = xt.get(i)) && (n = b({}, l), Yc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Qe(a), $e(a, "link", n), e.head.appendChild(a), t.instance = a);
                case "void":
                    return null;
                default:
                    throw Error(f(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, si(n, l.precedence, e));
            return t.instance;
        }
        function si(e, t, l) {
            for(var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, i = a, d = 0; d < n.length; d++){
                var y = n[d];
                if (y.dataset.precedence === t) i = y;
                else if (i !== a) break;
            }
            i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
        }
        function Gc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Yc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var di = null;
        function hh(e, t, l) {
            if (di === null) {
                var n = new Map, a = di = new Map;
                a.set(l, n);
            } else a = di, n = a.get(l), n || (n = new Map, a.set(l, n));
            if (n.has(e)) return n;
            for(n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++){
                var i = l[a];
                if (!(i[Wn] || i[Ie] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var d = i.getAttribute(t) || "";
                    d = e + d;
                    var y = n.get(d);
                    y ? y.push(i) : n.set(d, [
                        i
                    ]);
                }
            }
            return n;
        }
        function ph(e, t, l) {
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
        function mh(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var La = null;
        function D1() {}
        function B1(e, t, l) {
            if (La === null) throw Error(f(475));
            var n = La;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var a = Yn(l.href), i = e.querySelector(Ha(a));
                    if (i) {
                        e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = hi.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = i, Qe(i);
                        return;
                    }
                    i = e.ownerDocument || e, l = sh(l), (a = xt.get(a)) && Gc(l, a), i = i.createElement("link"), Qe(i);
                    var d = i;
                    d._p = new Promise(function(y, g) {
                        d.onload = y, d.onerror = g;
                    }), $e(i, "link", l), t.instance = i;
                }
                n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = hi.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function w1() {
            if (La === null) throw Error(f(475));
            var e = La;
            return e.stylesheets && e.count === 0 && Vc(e, e.stylesheets), 0 < e.count ? function(t) {
                var l = setTimeout(function() {
                    if (e.stylesheets && Vc(e, e.stylesheets), e.unsuspend) {
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
                if (this.stylesheets) Vc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var pi = null;
        function Vc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, pi = new Map, t.forEach(z1, e), pi = null, hi.call(e));
        }
        function z1(e, t) {
            if (!(t.state.loading & 4)) {
                var l = pi.get(e);
                if (l) var n = l.get(null);
                else {
                    l = new Map, pi.set(e, l);
                    for(var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++){
                        var d = a[i];
                        (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (l.set(d.dataset.precedence, d), n = d);
                    }
                    n && l.set(null, n);
                }
                a = t.instance, d = a.getAttribute("data-precedence"), i = l.get(d) || n, i === n && l.set(null, a), l.set(d, a), this.count++, n = hi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
            }
        }
        var ja = {
            $$typeof: k,
            Provider: null,
            Consumer: null,
            _currentValue: le,
            _currentValue2: le,
            _threadCount: 0
        };
        function U1(e, t, l, n, a, i, d, y) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qi(0), this.hiddenUpdates = Qi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = new Map;
        }
        function yh(e, t, l, n, a, i, d, y, g, M, U, H) {
            return e = new U1(e, t, l, d, y, g, M, H), t = 1, i === !0 && (t |= 24), i = pt(3, null, null, t), e.current = i, i.stateNode = e, t = Nr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: t
            }, Dr(i), e;
        }
        function vh(e) {
            return e ? (e = Rn, e) : Rn;
        }
        function gh(e, t, l, n, a, i) {
            a = vh(a), n.context === null ? n.context = a : n.pendingContext = a, n = dl(t), n.payload = {
                element: l
            }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = hl(e, n, t), l !== null && (bt(l, e, t), va(l, e, t));
        }
        function bh(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var l = e.retryLane;
                e.retryLane = l !== 0 && l < t ? l : t;
            }
        }
        function Xc(e, t) {
            bh(e, t), (e = e.alternate) && bh(e, t);
        }
        function Sh(e) {
            if (e.tag === 13) {
                var t = _n(e, 67108864);
                t !== null && bt(t, e, 67108864), Xc(e, 67108864);
            }
        }
        var mi = !0;
        function P1(e, t, l, n) {
            var a = P.T;
            P.T = null;
            var i = Y.p;
            try {
                Y.p = 2, Zc(e, t, l, n);
            } finally{
                Y.p = i, P.T = a;
            }
        }
        function q1(e, t, l, n) {
            var a = P.T;
            P.T = null;
            var i = Y.p;
            try {
                Y.p = 8, Zc(e, t, l, n);
            } finally{
                Y.p = i, P.T = a;
            }
        }
        function Zc(e, t, l, n) {
            if (mi) {
                var a = $c(n);
                if (a === null) Uc(e, t, n, yi, l), _h(e, n);
                else if (k1(a, e, t, l, n)) n.stopPropagation();
                else if (_h(e, n), t & 4 && -1 < H1.indexOf(e)) {
                    for(; a !== null;){
                        var i = on(a);
                        if (i !== null) switch(i.tag){
                            case 3:
                                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                                    var d = ql(i.pendingLanes);
                                    if (d !== 0) {
                                        var y = i;
                                        for(y.pendingLanes |= 2, y.entangledLanes |= 2; d;){
                                            var g = 1 << 31 - dt(d);
                                            y.entanglements[1] |= g, d &= ~g;
                                        }
                                        kt(i), (ve & 6) === 0 && (Iu = zt() + 500, za(0));
                                    }
                                }
                                break;
                            case 13:
                                y = _n(i, 2), y !== null && bt(y, i, 2), ti(), Xc(i, 2);
                        }
                        if (i = $c(n), i === null && Uc(e, t, n, yi, l), i === a) break;
                        a = i;
                    }
                    a !== null && n.stopPropagation();
                } else Uc(e, t, n, null, l);
            }
        }
        function $c(e) {
            return e = er(e), Jc(e);
        }
        var yi = null;
        function Jc(e) {
            if (yi = null, e = fn(e), e !== null) {
                var t = s(e);
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
        function Eh(e) {
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
                    switch(Rm()){
                        case zf:
                            return 2;
                        case Uf:
                            return 8;
                        case cu:
                        case Tm:
                            return 32;
                        case Pf:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Fc = !1, Ol = null, Nl = null, xl = null, Qa = new Map, Ka = new Map, Ml = [], H1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function _h(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    Ol = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Nl = null;
                    break;
                case "mouseover":
                case "mouseout":
                    xl = null;
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
        function Ga(e, t, l, n, a, i) {
            return e === null || e.nativeEvent !== i ? (e = {
                blockedOn: t,
                domEventName: l,
                eventSystemFlags: n,
                nativeEvent: i,
                targetContainers: [
                    a
                ]
            }, t !== null && (t = on(t), t !== null && Sh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
        }
        function k1(e, t, l, n, a) {
            switch(t){
                case "focusin":
                    return Ol = Ga(Ol, e, t, l, n, a), !0;
                case "dragenter":
                    return Nl = Ga(Nl, e, t, l, n, a), !0;
                case "mouseover":
                    return xl = Ga(xl, e, t, l, n, a), !0;
                case "pointerover":
                    var i = a.pointerId;
                    return Qa.set(i, Ga(Qa.get(i) || null, e, t, l, n, a)), !0;
                case "gotpointercapture":
                    return i = a.pointerId, Ka.set(i, Ga(Ka.get(i) || null, e, t, l, n, a)), !0;
            }
            return !1;
        }
        function Rh(e) {
            var t = fn(e.target);
            if (t !== null) {
                var l = s(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = m(l), t !== null) {
                            e.blockedOn = t, Bm(e.priority, function() {
                                if (l.tag === 13) {
                                    var n = gt();
                                    n = Ki(n);
                                    var a = _n(l, n);
                                    a !== null && bt(a, l, n), Xc(l, n);
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
                var l = $c(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var n = new l.constructor(l.type, l);
                    Ii = n, l.target.dispatchEvent(n), Ii = null;
                } else return t = on(l), t !== null && Sh(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function Th(e, t, l) {
            vi(e) && l.delete(t);
        }
        function L1() {
            Fc = !1, Ol !== null && vi(Ol) && (Ol = null), Nl !== null && vi(Nl) && (Nl = null), xl !== null && vi(xl) && (xl = null), Qa.forEach(Th), Ka.forEach(Th);
        }
        function gi(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Fc || (Fc = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, L1)));
        }
        var bi = null;
        function Ah(e) {
            bi !== e && (bi = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
                bi === e && (bi = null);
                for(var t = 0; t < e.length; t += 3){
                    var l = e[t], n = e[t + 1], a = e[t + 2];
                    if (typeof n != "function") {
                        if (Jc(n || l) === null) continue;
                        break;
                    }
                    var i = on(l);
                    i !== null && (e.splice(t, 3), t -= 3, Jr(i, {
                        pending: !0,
                        data: a,
                        method: l.method,
                        action: n
                    }, n, a));
                }
            }));
        }
        function Ya(e) {
            function t(g) {
                return gi(g, e);
            }
            Ol !== null && gi(Ol, e), Nl !== null && gi(Nl, e), xl !== null && gi(xl, e), Qa.forEach(t), Ka.forEach(t);
            for(var l = 0; l < Ml.length; l++){
                var n = Ml[l];
                n.blockedOn === e && (n.blockedOn = null);
            }
            for(; 0 < Ml.length && (l = Ml[0], l.blockedOn === null);)Rh(l), l.blockedOn === null && Ml.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(n = 0; n < l.length; n += 3){
                var a = l[n], i = l[n + 1], d = a[at] || null;
                if (typeof i == "function") d || Ah(l);
                else if (d) {
                    var y = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (a = i, d = i[at] || null) y = d.formAction;
                        else if (Jc(a) !== null) continue;
                    } else y = d.action;
                    typeof y == "function" ? l[n + 1] = y : (l.splice(n, 3), n -= 3), Ah(l);
                }
            }
        }
        function Wc(e) {
            this._internalRoot = e;
        }
        Si.prototype.render = Wc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(f(409));
            var l = t.current, n = gt();
            gh(l, n, e, t, null, null);
        }, Si.prototype.unmount = Wc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                gh(e.current, 2, null, e, null, null), ti(), t[cn] = null;
            }
        };
        function Si(e) {
            this._internalRoot = e;
        }
        Si.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = jf();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Ml.length && t !== 0 && t < Ml[l].priority; l++);
                Ml.splice(l, 0, e), l === 0 && Rh(e);
            }
        };
        var Oh = r.version;
        if (Oh !== "19.1.0") throw Error(f(527, Oh, "19.1.0"));
        Y.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
            return e = p(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var j1 = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: P,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Ei.isDisabled && Ei.supportsFiber) try {
                $n = Ei.inject(j1), st = Ei;
            } catch  {}
        }
        return Xa.createRoot = function(e, t) {
            if (!o(e)) throw Error(f(299));
            var l = !1, n = "", a = Qs, i = Ks, d = Gs, y = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)), t = yh(e, 1, !1, null, null, l, n, a, i, d, y, null), e[cn] = t.current, zc(e), new Wc(t);
        }, Xa.hydrateRoot = function(e, t, l) {
            if (!o(e)) throw Error(f(299));
            var n = !1, a = "", i = Qs, d = Ks, y = Gs, g = null, M = null;
            return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (y = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks), l.formState !== void 0 && (M = l.formState)), t = yh(e, 1, !0, t, l ?? null, n, a, i, d, y, g, M), t.context = vh(null), l = t.current, n = gt(), n = Ki(n), a = dl(n), a.callback = null, hl(l, a, n), l = n, t.current.lanes = l, Fn(t, l), kt(t), e[cn] = t.current, zc(e), new Si(t);
        }, Xa.version = "19.1.0", Xa;
    }
    var Ph;
    function F1() {
        if (Ph) return tf.exports;
        Ph = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), tf.exports = J1(), tf.exports;
    }
    var W1 = F1(), uf = {
        exports: {}
    }, rf = {};
    var qh;
    function I1() {
        if (qh) return rf;
        qh = 1;
        var u = Ui();
        function r(p, v) {
            return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v;
        }
        var c = typeof Object.is == "function" ? Object.is : r, f = u.useSyncExternalStore, o = u.useRef, s = u.useEffect, m = u.useMemo, h = u.useDebugValue;
        return rf.useSyncExternalStoreWithSelector = function(p, v, b, R, S) {
            var T = o(null);
            if (T.current === null) {
                var O = {
                    hasValue: !1,
                    value: null
                };
                T.current = O;
            } else O = T.current;
            T = m(function() {
                function w(K) {
                    if (!z) {
                        if (z = !0, j = K, K = R(K), S !== void 0 && O.hasValue) {
                            var W = O.value;
                            if (S(W, K)) return k = W;
                        }
                        return k = K;
                    }
                    if (W = k, c(j, K)) return W;
                    var $ = R(K);
                    return S !== void 0 && S(W, $) ? (j = K, W) : (j = K, k = $);
                }
                var z = !1, j, k, V = b === void 0 ? null : b;
                return [
                    function() {
                        return w(v());
                    },
                    V === null ? void 0 : function() {
                        return w(V());
                    }
                ];
            }, [
                v,
                b,
                R,
                S
            ]);
            var D = f(p, T[0], T[1]);
            return s(function() {
                O.hasValue = !0, O.value = D;
            }, [
                D
            ]), h(D), D;
        }, rf;
    }
    var Hh;
    function ey() {
        return Hh || (Hh = 1, uf.exports = I1()), uf.exports;
    }
    var ty = ey();
    function ly(u) {
        u();
    }
    function ny() {
        let u = null, r = null;
        return {
            clear () {
                u = null, r = null;
            },
            notify () {
                ly(()=>{
                    let c = u;
                    for(; c;)c.callback(), c = c.next;
                });
            },
            get () {
                const c = [];
                let f = u;
                for(; f;)c.push(f), f = f.next;
                return c;
            },
            subscribe (c) {
                let f = !0;
                const o = r = {
                    callback: c,
                    next: null,
                    prev: r
                };
                return o.prev ? o.prev.next = o : u = o, function() {
                    !f || u === null || (f = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : u = o.next);
                };
            }
        };
    }
    var kh = {
        notify () {},
        get: ()=>[]
    };
    function ay(u, r) {
        let c, f = kh, o = 0, s = !1;
        function m(D) {
            b();
            const w = f.subscribe(D);
            let z = !1;
            return ()=>{
                z || (z = !0, w(), R());
            };
        }
        function h() {
            f.notify();
        }
        function p() {
            O.onStateChange && O.onStateChange();
        }
        function v() {
            return s;
        }
        function b() {
            o++, c || (c = u.subscribe(p), f = ny());
        }
        function R() {
            o--, c && o === 0 && (c(), c = void 0, f.clear(), f = kh);
        }
        function S() {
            s || (s = !0, b());
        }
        function T() {
            s && (s = !1, R());
        }
        const O = {
            addNestedSub: m,
            notifyNestedSubs: h,
            handleChangeWrapper: p,
            isSubscribed: v,
            trySubscribe: S,
            tryUnsubscribe: T,
            getListeners: ()=>f
        };
        return O;
    }
    var uy = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", iy = uy(), ry = ()=>typeof navigator < "u" && navigator.product === "ReactNative", cy = ry(), fy = ()=>iy || cy ? N.useLayoutEffect : N.useEffect, oy = fy(), sy = Symbol.for("react-redux-context"), dy = typeof globalThis < "u" ? globalThis : {};
    function hy() {
        if (!N.createContext) return {};
        const u = dy[sy] ??= new Map;
        let r = u.get(N.createContext);
        return r || (r = N.createContext(null), u.set(N.createContext, r)), r;
    }
    var zl = hy();
    function py(u) {
        const { children: r, context: c, serverState: f, store: o } = u, s = N.useMemo(()=>{
            const p = ay(o);
            return {
                store: o,
                subscription: p,
                getServerState: f ? ()=>f : void 0
            };
        }, [
            o,
            f
        ]), m = N.useMemo(()=>o.getState(), [
            o
        ]);
        oy(()=>{
            const { subscription: p } = s;
            return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), m !== o.getState() && p.notifyNestedSubs(), ()=>{
                p.tryUnsubscribe(), p.onStateChange = void 0;
            };
        }, [
            s,
            m
        ]);
        const h = c || zl;
        return N.createElement(h.Provider, {
            value: s
        }, r);
    }
    var my = py;
    function Ef(u = zl) {
        return function() {
            return N.useContext(u);
        };
    }
    var pp = Ef();
    function mp(u = zl) {
        const r = u === zl ? pp : Ef(u), c = ()=>{
            const { store: f } = r();
            return f;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    var yy = mp();
    function vy(u = zl) {
        const r = u === zl ? yy : mp(u), c = ()=>r().dispatch;
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    let gy;
    Xn = vy();
    gy = (u, r)=>u === r;
    function by(u = zl) {
        const r = u === zl ? pp : Ef(u), c = (f, o = {})=>{
            const { equalityFn: s = gy } = typeof o == "function" ? {
                equalityFn: o
            } : o, m = r(), { store: h, subscription: p, getServerState: v } = m;
            N.useRef(!0);
            const b = N.useCallback({
                [f.name] (S) {
                    return f(S);
                }
            }[f.name], [
                f
            ]), R = ty.useSyncExternalStoreWithSelector(p.addNestedSub, h.getState, v || h.getState, b, s);
            return N.useDebugValue(R), R;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    an = by();
    function Je(u) {
        return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Sy = typeof Symbol == "function" && Symbol.observable || "@@observable", Lh = Sy, cf = ()=>Math.random().toString(36).substring(7).split("").join("."), Ey = {
        INIT: `@@redux/INIT${cf()}`,
        REPLACE: `@@redux/REPLACE${cf()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${cf()}`
    }, Bi = Ey;
    function yp(u) {
        if (typeof u != "object" || u === null) return !1;
        let r = u;
        for(; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(u) === r || Object.getPrototypeOf(u) === null;
    }
    function _f(u, r, c) {
        if (typeof u != "function") throw new Error(Je(2));
        if (typeof r == "function" && typeof c == "function" || typeof c == "function" && typeof arguments[3] == "function") throw new Error(Je(0));
        if (typeof r == "function" && typeof c > "u" && (c = r, r = void 0), typeof c < "u") {
            if (typeof c != "function") throw new Error(Je(1));
            return c(_f)(u, r);
        }
        let f = u, o = r, s = new Map, m = s, h = 0, p = !1;
        function v() {
            m === s && (m = new Map, s.forEach((w, z)=>{
                m.set(z, w);
            }));
        }
        function b() {
            if (p) throw new Error(Je(3));
            return o;
        }
        function R(w) {
            if (typeof w != "function") throw new Error(Je(4));
            if (p) throw new Error(Je(5));
            let z = !0;
            v();
            const j = h++;
            return m.set(j, w), function() {
                if (z) {
                    if (p) throw new Error(Je(6));
                    z = !1, v(), m.delete(j), s = null;
                }
            };
        }
        function S(w) {
            if (!yp(w)) throw new Error(Je(7));
            if (typeof w.type > "u") throw new Error(Je(8));
            if (typeof w.type != "string") throw new Error(Je(17));
            if (p) throw new Error(Je(9));
            try {
                p = !0, o = f(o, w);
            } finally{
                p = !1;
            }
            return (s = m).forEach((j)=>{
                j();
            }), w;
        }
        function T(w) {
            if (typeof w != "function") throw new Error(Je(10));
            f = w, S({
                type: Bi.REPLACE
            });
        }
        function O() {
            const w = R;
            return {
                subscribe (z) {
                    if (typeof z != "object" || z === null) throw new Error(Je(11));
                    function j() {
                        const V = z;
                        V.next && V.next(b());
                    }
                    return j(), {
                        unsubscribe: w(j)
                    };
                },
                [Lh] () {
                    return this;
                }
            };
        }
        return S({
            type: Bi.INIT
        }), {
            dispatch: S,
            subscribe: R,
            getState: b,
            replaceReducer: T,
            [Lh]: O
        };
    }
    function _y(u) {
        Object.keys(u).forEach((r)=>{
            const c = u[r];
            if (typeof c(void 0, {
                type: Bi.INIT
            }) > "u") throw new Error(Je(12));
            if (typeof c(void 0, {
                type: Bi.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(Je(13));
        });
    }
    function vp(u) {
        const r = Object.keys(u), c = {};
        for(let s = 0; s < r.length; s++){
            const m = r[s];
            typeof u[m] == "function" && (c[m] = u[m]);
        }
        const f = Object.keys(c);
        let o;
        try {
            _y(c);
        } catch (s) {
            o = s;
        }
        return function(m = {}, h) {
            if (o) throw o;
            let p = !1;
            const v = {};
            for(let b = 0; b < f.length; b++){
                const R = f[b], S = c[R], T = m[R], O = S(T, h);
                if (typeof O > "u") throw h && h.type, new Error(Je(14));
                v[R] = O, p = p || O !== T;
            }
            return p = p || f.length !== Object.keys(m).length, p ? v : m;
        };
    }
    function wi(...u) {
        return u.length === 0 ? (r)=>r : u.length === 1 ? u[0] : u.reduce((r, c)=>(...f)=>r(c(...f)));
    }
    function Ry(...u) {
        return (r)=>(c, f)=>{
                const o = r(c, f);
                let s = ()=>{
                    throw new Error(Je(15));
                };
                const m = {
                    getState: o.getState,
                    dispatch: (p, ...v)=>s(p, ...v)
                }, h = u.map((p)=>p(m));
                return s = wi(...h)(o.dispatch), {
                    ...o,
                    dispatch: s
                };
            };
    }
    function Ty(u, r = `expected a function, instead received ${typeof u}`) {
        if (typeof u != "function") throw new TypeError(r);
    }
    function Ay(u, r = `expected an object, instead received ${typeof u}`) {
        if (typeof u != "object") throw new TypeError(r);
    }
    function Oy(u, r = "expected all items to be functions, instead received the following types: ") {
        if (!u.every((c)=>typeof c == "function")) {
            const c = u.map((f)=>typeof f == "function" ? `function ${f.name || "unnamed"}()` : typeof f).join(", ");
            throw new TypeError(`${r}[${c}]`);
        }
    }
    var jh = (u)=>Array.isArray(u) ? u : [
            u
        ];
    function Ny(u) {
        const r = Array.isArray(u[0]) ? u[0] : u;
        return Oy(r, "createSelector expects all input-selectors to be functions, but received the following types: "), r;
    }
    function xy(u, r) {
        const c = [], { length: f } = u;
        for(let o = 0; o < f; o++)c.push(u[o].apply(null, r));
        return c;
    }
    var My = class {
        constructor(u){
            this.value = u;
        }
        deref() {
            return this.value;
        }
    }, Cy = typeof WeakRef < "u" ? WeakRef : My, Dy = 0, Qh = 1;
    function _i() {
        return {
            s: Dy,
            v: void 0,
            o: null,
            p: null
        };
    }
    function gp(u, r = {}) {
        let c = _i();
        const { resultEqualityCheck: f } = r;
        let o, s = 0;
        function m() {
            let h = c;
            const { length: p } = arguments;
            for(let R = 0, S = p; R < S; R++){
                const T = arguments[R];
                if (typeof T == "function" || typeof T == "object" && T !== null) {
                    let O = h.o;
                    O === null && (h.o = O = new WeakMap);
                    const D = O.get(T);
                    D === void 0 ? (h = _i(), O.set(T, h)) : h = D;
                } else {
                    let O = h.p;
                    O === null && (h.p = O = new Map);
                    const D = O.get(T);
                    D === void 0 ? (h = _i(), O.set(T, h)) : h = D;
                }
            }
            const v = h;
            let b;
            if (h.s === Qh) b = h.v;
            else if (b = u.apply(null, arguments), s++, f) {
                const R = o?.deref?.() ?? o;
                R != null && f(R, b) && (b = R, s !== 0 && s--), o = typeof b == "object" && b !== null || typeof b == "function" ? new Cy(b) : b;
            }
            return v.s = Qh, v.v = b, b;
        }
        return m.clearCache = ()=>{
            c = _i(), m.resetResultsCount();
        }, m.resultsCount = ()=>s, m.resetResultsCount = ()=>{
            s = 0;
        }, m;
    }
    function By(u, ...r) {
        const c = typeof u == "function" ? {
            memoize: u,
            memoizeOptions: r
        } : u, f = (...o)=>{
            let s = 0, m = 0, h, p = {}, v = o.pop();
            typeof v == "object" && (p = v, v = o.pop()), Ty(v, `createSelector expects an output function after the inputs, but received: [${typeof v}]`);
            const b = {
                ...c,
                ...p
            }, { memoize: R, memoizeOptions: S = [], argsMemoize: T = gp, argsMemoizeOptions: O = [] } = b, D = jh(S), w = jh(O), z = Ny(o), j = R(function() {
                return s++, v.apply(null, arguments);
            }, ...D), k = T(function() {
                m++;
                const K = xy(z, arguments);
                return h = j.apply(null, K), h;
            }, ...w);
            return Object.assign(k, {
                resultFunc: v,
                memoizedResultFunc: j,
                dependencies: z,
                dependencyRecomputations: ()=>m,
                resetDependencyRecomputations: ()=>{
                    m = 0;
                },
                lastResult: ()=>h,
                recomputations: ()=>s,
                resetRecomputations: ()=>{
                    s = 0;
                },
                memoize: R,
                argsMemoize: T
            });
        };
        return Object.assign(f, {
            withTypes: ()=>f
        }), f;
    }
    var Rf = By(gp), wy = Object.assign((u, r = Rf)=>{
        Ay(u, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof u}`);
        const c = Object.keys(u), f = c.map((s)=>u[s]);
        return r(f, (...s)=>s.reduce((m, h, p)=>(m[c[p]] = h, m), {}));
    }, {
        withTypes: ()=>wy
    });
    function bp(u) {
        return ({ dispatch: c, getState: f })=>(o)=>(s)=>typeof s == "function" ? s(c, f, u) : o(s);
    }
    var zy = bp(), Uy = bp, Py = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? wi : wi.apply(null, arguments);
    }, Sp = class Wa extends Array {
        constructor(...r){
            super(...r), Object.setPrototypeOf(this, Wa.prototype);
        }
        static get [Symbol.species]() {
            return Wa;
        }
        concat(...r) {
            return super.concat.apply(this, r);
        }
        prepend(...r) {
            return r.length === 1 && Array.isArray(r[0]) ? new Wa(...r[0].concat(this)) : new Wa(...r.concat(this));
        }
    };
    function qy(u) {
        return typeof u == "boolean";
    }
    var Hy = ()=>function(r) {
            const { thunk: c = !0, immutableCheck: f = !0, serializableCheck: o = !0, actionCreatorCheck: s = !0 } = r ?? {};
            let m = new Sp;
            return c && (qy(c) ? m.push(zy) : m.push(Uy(c.extraArgument))), m;
        }, ky = "RTK_autoBatch", Kh = (u)=>(r)=>{
            setTimeout(r, u);
        }, Ly = (u = {
        type: "raf"
    })=>(r)=>(...c)=>{
                const f = r(...c);
                let o = !0, s = !1, m = !1;
                const h = new Set, p = u.type === "tick" ? queueMicrotask : u.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Kh(10) : u.type === "callback" ? u.queueNotification : Kh(u.timeout), v = ()=>{
                    m = !1, s && (s = !1, h.forEach((b)=>b()));
                };
                return Object.assign({}, f, {
                    subscribe (b) {
                        const R = ()=>o && b(), S = f.subscribe(R);
                        return h.add(b), ()=>{
                            S(), h.delete(b);
                        };
                    },
                    dispatch (b) {
                        try {
                            return o = !b?.meta?.[ky], s = !o, s && (m || (m = !0, p(v))), f.dispatch(b);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, jy = (u)=>function(c) {
            const { autoBatch: f = !0 } = c ?? {};
            let o = new Sp(u);
            return f && o.push(Ly(typeof f == "object" ? f : void 0)), o;
        };
    function Qy(u) {
        const r = Hy(), { reducer: c = void 0, middleware: f, devTools: o = !0, preloadedState: s = void 0, enhancers: m = void 0 } = u || {};
        let h;
        if (typeof c == "function") h = c;
        else if (yp(c)) h = vp(c);
        else throw new Error(Ky(1));
        let p;
        typeof f == "function" ? p = f(r) : p = r();
        let v = wi;
        o && (v = Py({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const b = Ry(...p), R = jy(b);
        let S = typeof m == "function" ? m(R) : R();
        const T = v(...S);
        return _f(h, s, T);
    }
    function Ky(u) {
        return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Tf = "persist:", Ep = "persist/FLUSH", Af = "persist/REHYDRATE", _p = "persist/PAUSE", Rp = "persist/PERSIST", Tp = "persist/PURGE", Ap = "persist/REGISTER", Gy = -1;
    function xi(u) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xi = function(c) {
            return typeof c;
        } : xi = function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        }, xi(u);
    }
    function Gh(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function Yy(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Gh(c, !0).forEach(function(f) {
                Vy(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Gh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function Vy(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    function Xy(u, r, c, f) {
        f.debug;
        var o = Yy({}, c);
        return u && xi(u) === "object" && Object.keys(u).forEach(function(s) {
            s !== "_persist" && r[s] === c[s] && (o[s] = u[s]);
        }), o;
    }
    function Zy(u) {
        var r = u.blacklist || null, c = u.whitelist || null, f = u.transforms || [], o = u.throttle || 0, s = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Tf).concat(u.key), m = u.storage, h;
        u.serialize === !1 ? h = function(K) {
            return K;
        } : typeof u.serialize == "function" ? h = u.serialize : h = $y;
        var p = u.writeFailHandler || null, v = {}, b = {}, R = [], S = null, T = null, O = function(K) {
            Object.keys(K).forEach(function(W) {
                z(W) && v[W] !== K[W] && R.indexOf(W) === -1 && R.push(W);
            }), Object.keys(v).forEach(function(W) {
                K[W] === void 0 && z(W) && R.indexOf(W) === -1 && v[W] !== void 0 && R.push(W);
            }), S === null && (S = setInterval(D, o)), v = K;
        };
        function D() {
            if (R.length === 0) {
                S && clearInterval(S), S = null;
                return;
            }
            var V = R.shift(), K = f.reduce(function(W, $) {
                return $.in(W, V, v);
            }, v[V]);
            if (K !== void 0) try {
                b[V] = h(K);
            } catch (W) {
                console.error("redux-persist/createPersistoid: error serializing state", W);
            }
            else delete b[V];
            R.length === 0 && w();
        }
        function w() {
            Object.keys(b).forEach(function(V) {
                v[V] === void 0 && delete b[V];
            }), T = m.setItem(s, h(b)).catch(j);
        }
        function z(V) {
            return !(c && c.indexOf(V) === -1 && V !== "_persist" || r && r.indexOf(V) !== -1);
        }
        function j(V) {
            p && p(V);
        }
        var k = function() {
            for(; R.length !== 0;)D();
            return T || Promise.resolve();
        };
        return {
            update: O,
            flush: k
        };
    }
    function $y(u) {
        return JSON.stringify(u);
    }
    function Jy(u) {
        var r = u.transforms || [], c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Tf).concat(u.key), f = u.storage;
        u.debug;
        var o;
        return u.deserialize === !1 ? o = function(m) {
            return m;
        } : typeof u.deserialize == "function" ? o = u.deserialize : o = Fy, f.getItem(c).then(function(s) {
            if (s) try {
                var m = {}, h = o(s);
                return Object.keys(h).forEach(function(p) {
                    m[p] = r.reduceRight(function(v, b) {
                        return b.out(v, p, h);
                    }, o(h[p]));
                }), m;
            } catch (p) {
                throw p;
            }
            else return;
        });
    }
    function Fy(u) {
        return JSON.parse(u);
    }
    function Wy(u) {
        var r = u.storage, c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Tf).concat(u.key);
        return r.removeItem(c, Iy);
    }
    function Iy(u) {}
    function Yh(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function ll(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Yh(c, !0).forEach(function(f) {
                ev(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Yh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function ev(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    function tv(u, r) {
        if (u == null) return {};
        var c = lv(u, r), f, o;
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(u);
            for(o = 0; o < s.length; o++)f = s[o], !(r.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(u, f) && (c[f] = u[f]);
        }
        return c;
    }
    function lv(u, r) {
        if (u == null) return {};
        var c = {}, f = Object.keys(u), o, s;
        for(s = 0; s < f.length; s++)o = f[s], !(r.indexOf(o) >= 0) && (c[o] = u[o]);
        return c;
    }
    var nv = 5e3;
    function av(u, r) {
        var c = u.version !== void 0 ? u.version : Gy;
        u.debug;
        var f = u.stateReconciler === void 0 ? Xy : u.stateReconciler, o = u.getStoredState || Jy, s = u.timeout !== void 0 ? u.timeout : nv, m = null, h = !1, p = !0, v = function(R) {
            return R._persist.rehydrated && m && !p && m.update(R), R;
        };
        return function(b, R) {
            var S = b || {}, T = S._persist, O = tv(S, [
                "_persist"
            ]), D = O;
            if (R.type === Rp) {
                var w = !1, z = function(J, ne) {
                    w || (R.rehydrate(u.key, J, ne), w = !0);
                };
                if (s && setTimeout(function() {
                    !w && z(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(u.key, '"')));
                }, s), p = !1, m || (m = Zy(u)), T) return ll({}, r(D, R), {
                    _persist: T
                });
                if (typeof R.rehydrate != "function" || typeof R.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return R.register(u.key), o(u).then(function($) {
                    var J = u.migrate || function(ne, Ce) {
                        return Promise.resolve(ne);
                    };
                    J($, c).then(function(ne) {
                        z(ne);
                    }, function(ne) {
                        z(void 0, ne);
                    });
                }, function($) {
                    z(void 0, $);
                }), ll({}, r(D, R), {
                    _persist: {
                        version: c,
                        rehydrated: !1
                    }
                });
            } else {
                if (R.type === Tp) return h = !0, R.result(Wy(u)), ll({}, r(D, R), {
                    _persist: T
                });
                if (R.type === Ep) return R.result(m && m.flush()), ll({}, r(D, R), {
                    _persist: T
                });
                if (R.type === _p) p = !0;
                else if (R.type === Af) {
                    if (h) return ll({}, D, {
                        _persist: ll({}, T, {
                            rehydrated: !0
                        })
                    });
                    if (R.key === u.key) {
                        var j = r(D, R), k = R.payload, V = f !== !1 && k !== void 0 ? f(k, b, j, u) : j, K = ll({}, V, {
                            _persist: ll({}, T, {
                                rehydrated: !0
                            })
                        });
                        return v(K);
                    }
                }
            }
            if (!T) return r(b, R);
            var W = r(D, R);
            return W === D ? b : v(ll({}, W, {
                _persist: T
            }));
        };
    }
    function Vh(u) {
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
            for(var r = 0, c = new Array(u.length); r < u.length; r++)c[r] = u[r];
            return c;
        }
    }
    function Xh(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function mf(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Xh(c, !0).forEach(function(f) {
                cv(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Xh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function cv(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    var Op = {
        registry: [],
        bootstrapped: !1
    }, fv = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Op, c = arguments.length > 1 ? arguments[1] : void 0;
        switch(c.type){
            case Ap:
                return mf({}, r, {
                    registry: [].concat(Vh(r.registry), [
                        c.key
                    ])
                });
            case Af:
                var f = r.registry.indexOf(c.key), o = Vh(r.registry);
                return o.splice(f, 1), mf({}, r, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return r;
        }
    };
    function ov(u, r, c) {
        var f = _f(fv, Op, void 0), o = function(p) {
            f.dispatch({
                type: Ap,
                key: p
            });
        }, s = function(p, v, b) {
            var R = {
                type: Af,
                payload: v,
                err: b,
                key: p
            };
            u.dispatch(R), f.dispatch(R);
        }, m = mf({}, f, {
            purge: function() {
                var p = [];
                return u.dispatch({
                    type: Tp,
                    result: function(b) {
                        p.push(b);
                    }
                }), Promise.all(p);
            },
            flush: function() {
                var p = [];
                return u.dispatch({
                    type: Ep,
                    result: function(b) {
                        p.push(b);
                    }
                }), Promise.all(p);
            },
            pause: function() {
                u.dispatch({
                    type: _p
                });
            },
            persist: function() {
                u.dispatch({
                    type: Rp,
                    register: o,
                    rehydrate: s
                });
            }
        });
        return m.persist(), m;
    }
    var Za = {}, Ri = {}, Ti = {}, Zh;
    function sv() {
        if (Zh) return Ti;
        Zh = 1, Ti.__esModule = !0, Ti.default = o;
        function u(s) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? u = function(h) {
                return typeof h;
            } : u = function(h) {
                return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
            }, u(s);
        }
        function r() {}
        var c = {
            getItem: r,
            setItem: r,
            removeItem: r
        };
        function f(s) {
            if ((typeof self > "u" ? "undefined" : u(self)) !== "object" || !(s in self)) return !1;
            try {
                var m = self[s], h = "redux-persist ".concat(s, " test");
                m.setItem(h, "test"), m.getItem(h), m.removeItem(h);
            } catch  {
                return !1;
            }
            return !0;
        }
        function o(s) {
            var m = "".concat(s, "Storage");
            return f(m) ? self[m] : c;
        }
        return Ti;
    }
    var $h;
    function dv() {
        if ($h) return Ri;
        $h = 1, Ri.__esModule = !0, Ri.default = c;
        var u = r(sv());
        function r(f) {
            return f && f.__esModule ? f : {
                default: f
            };
        }
        function c(f) {
            var o = (0, u.default)(f);
            return {
                getItem: function(m) {
                    return new Promise(function(h, p) {
                        h(o.getItem(m));
                    });
                },
                setItem: function(m, h) {
                    return new Promise(function(p, v) {
                        p(o.setItem(m, h));
                    });
                },
                removeItem: function(m) {
                    return new Promise(function(h, p) {
                        h(o.removeItem(m));
                    });
                }
            };
        }
        return Ri;
    }
    var Jh;
    function hv() {
        if (Jh) return Za;
        Jh = 1, Za.__esModule = !0, Za.default = void 0;
        var u = r(dv());
        function r(f) {
            return f && f.__esModule ? f : {
                default: f
            };
        }
        var c = (0, u.default)("local");
        return Za.default = c, Za;
    }
    var pv = hv();
    const mv = hp(pv);
    const lt = "w", Mt = "b", Ve = "p", yf = "n", Mi = "b", Ia = "r", wl = "q", Le = "k", ff = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    class Ai {
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
        constructor(r, c){
            const { color: f, piece: o, from: s, to: m, flags: h, captured: p, promotion: v } = c, b = Fe(s), R = Fe(m);
            this.color = f, this.piece = o, this.from = b, this.to = R, this.san = r._moveToSan(c, r._moves({
                legal: !0
            })), this.lan = b + R, this.before = r.fen(), r._makeMove(c), this.after = r.fen(), r._undoMove(), this.flags = "";
            for(const S in ce)ce[S] & h && (this.flags += tn[S]);
            p && (this.captured = p), v && (this.promotion = v, this.lan += v);
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
    const ft = -1, tn = {
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
    }, vf = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, yv = {
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
    }, vv = {
        ...vf,
        ...yv
    }, ue = {
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
    }, of = {
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
    }, Fh = {
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
    }, gv = [
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
    ], bv = [
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
    ], Sv = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, Ev = "pnbrqkPNBRQK", Wh = [
        yf,
        Mi,
        Ia,
        wl
    ], _v = 7, Rv = 6, Tv = 1, Av = 0, Oi = {
        [Le]: ce.KSIDE_CASTLE,
        [wl]: ce.QSIDE_CASTLE
    }, Dl = {
        w: [
            {
                square: ue.a1,
                flag: ce.QSIDE_CASTLE
            },
            {
                square: ue.h1,
                flag: ce.KSIDE_CASTLE
            }
        ],
        b: [
            {
                square: ue.a8,
                flag: ce.QSIDE_CASTLE
            },
            {
                square: ue.h8,
                flag: ce.KSIDE_CASTLE
            }
        ]
    }, Ov = {
        b: Tv,
        w: Rv
    }, Nv = [
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
    function Np(u) {
        return "0123456789".indexOf(u) !== -1;
    }
    function Fe(u) {
        const r = lu(u), c = ln(u);
        return "abcdefgh".substring(r, r + 1) + "87654321".substring(c, c + 1);
    }
    function $a(u) {
        return u === lt ? Mt : lt;
    }
    function xv(u) {
        const r = u.split(/\s+/);
        if (r.length !== 6) return {
            ok: !1,
            error: "Invalid FEN: must contain six space-delimited fields"
        };
        const c = parseInt(r[5], 10);
        if (isNaN(c) || c <= 0) return {
            ok: !1,
            error: "Invalid FEN: move number must be a positive integer"
        };
        const f = parseInt(r[4], 10);
        if (isNaN(f) || f < 0) return {
            ok: !1,
            error: "Invalid FEN: half move counter number must be a non-negative integer"
        };
        if (!/^(-|[abcdefgh][36])$/.test(r[3])) return {
            ok: !1,
            error: "Invalid FEN: en-passant square is invalid"
        };
        if (/[^kKqQ-]/.test(r[2])) return {
            ok: !1,
            error: "Invalid FEN: castling availability is invalid"
        };
        if (!/^(w|b)$/.test(r[1])) return {
            ok: !1,
            error: "Invalid FEN: side-to-move is invalid"
        };
        const o = r[0].split("/");
        if (o.length !== 8) return {
            ok: !1,
            error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
        };
        for(let m = 0; m < o.length; m++){
            let h = 0, p = !1;
            for(let v = 0; v < o[m].length; v++)if (Np(o[m][v])) {
                if (p) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                h += parseInt(o[m][v], 10), p = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(o[m][v])) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (invalid piece)"
                };
                h += 1, p = !1;
            }
            if (h !== 8) return {
                ok: !1,
                error: "Invalid FEN: piece data is invalid (too many squares in rank)"
            };
        }
        if (r[3][1] == "3" && r[1] == "w" || r[3][1] == "6" && r[1] == "b") return {
            ok: !1,
            error: "Invalid FEN: illegal en-passant square"
        };
        const s = [
            {
                color: "white",
                regex: /K/g
            },
            {
                color: "black",
                regex: /k/g
            }
        ];
        for (const { color: m, regex: h } of s){
            if (!h.test(r[0])) return {
                ok: !1,
                error: `Invalid FEN: missing ${m} king`
            };
            if ((r[0].match(h) || []).length > 1) return {
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
    function Mv(u, r) {
        const c = u.from, f = u.to, o = u.piece;
        let s = 0, m = 0, h = 0;
        for(let p = 0, v = r.length; p < v; p++){
            const b = r[p].from, R = r[p].to, S = r[p].piece;
            o === S && c !== b && f === R && (s++, ln(c) === ln(b) && m++, lu(c) === lu(b) && h++);
        }
        return s > 0 ? m > 0 && h > 0 ? Fe(c) : h > 0 ? Fe(c).charAt(1) : Fe(c).charAt(0) : "";
    }
    function Bl(u, r, c, f, o, s = void 0, m = ce.NORMAL) {
        const h = ln(f);
        if (o === Ve && (h === _v || h === Av)) for(let p = 0; p < Wh.length; p++){
            const v = Wh[p];
            u.push({
                color: r,
                from: c,
                to: f,
                piece: o,
                captured: s,
                promotion: v,
                flags: m | ce.PROMOTION
            });
        }
        else u.push({
            color: r,
            from: c,
            to: f,
            piece: o,
            captured: s,
            flags: m
        });
    }
    function Ih(u) {
        let r = u.charAt(0);
        return r >= "a" && r <= "h" ? u.match(/[a-h]\d.*[a-h]\d/) ? void 0 : Ve : (r = r.toLowerCase(), r === "o" ? Le : r);
    }
    function sf(u) {
        return u.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function df(u) {
        return u.split(" ").slice(0, 4).join(" ");
    }
    Of = class {
        _board = new Array(128);
        _turn = lt;
        _header = {};
        _kings = {
            w: ft,
            b: ft
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
        constructor(r = ff, { skipValidation: c = !1 } = {}){
            this.load(r, {
                skipValidation: c
            });
        }
        clear({ preserveHeaders: r = !1 } = {}) {
            this._board = new Array(128), this._kings = {
                w: ft,
                b: ft
            }, this._turn = lt, this._castling = {
                w: 0,
                b: 0
            }, this._epSquare = ft, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = r ? this._header : {
                ...vv
            }, this._positionCount = {}, this._header.SetUp = null, this._header.FEN = null;
        }
        load(r, { skipValidation: c = !1, preserveHeaders: f = !1 } = {}) {
            let o = r.split(/\s+/);
            if (o.length >= 2 && o.length < 6) {
                const h = [
                    "-",
                    "-",
                    "0",
                    "1"
                ];
                r = o.concat(h.slice(-(6 - o.length))).join(" ");
            }
            if (o = r.split(/\s+/), !c) {
                const { ok: h, error: p } = xv(r);
                if (!h) throw new Error(p);
            }
            const s = o[0];
            let m = 0;
            this.clear({
                preserveHeaders: f
            });
            for(let h = 0; h < s.length; h++){
                const p = s.charAt(h);
                if (p === "/") m += 8;
                else if (Np(p)) m += parseInt(p, 10);
                else {
                    const v = p < "a" ? lt : Mt;
                    this._put({
                        type: p.toLowerCase(),
                        color: v
                    }, Fe(m)), m++;
                }
            }
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= ce.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= ce.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= ce.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= ce.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? ft : ue[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(r), this._incPositionCount(r);
        }
        fen() {
            let r = 0, c = "";
            for(let s = ue.a8; s <= ue.h1; s++){
                if (this._board[s]) {
                    r > 0 && (c += r, r = 0);
                    const { color: m, type: h } = this._board[s];
                    c += m === lt ? h.toUpperCase() : h.toLowerCase();
                } else r++;
                s + 1 & 136 && (r > 0 && (c += r), s !== ue.h1 && (c += "/"), r = 0, s += 8);
            }
            let f = "";
            this._castling[lt] & ce.KSIDE_CASTLE && (f += "K"), this._castling[lt] & ce.QSIDE_CASTLE && (f += "Q"), this._castling[Mt] & ce.KSIDE_CASTLE && (f += "k"), this._castling[Mt] & ce.QSIDE_CASTLE && (f += "q"), f = f || "-";
            let o = "-";
            if (this._epSquare !== ft) {
                const s = this._epSquare + (this._turn === lt ? 16 : -16), m = [
                    s + 1,
                    s - 1
                ];
                for (const h of m){
                    if (h & 136) continue;
                    const p = this._turn;
                    if (this._board[h]?.color === p && this._board[h]?.type === Ve) {
                        this._makeMove({
                            color: p,
                            from: h,
                            to: this._epSquare,
                            piece: Ve,
                            captured: Ve,
                            flags: ce.EP_CAPTURE
                        });
                        const v = !this._isKingAttacked(p);
                        if (this._undoMove(), v) {
                            o = Fe(this._epSquare);
                            break;
                        }
                    }
                }
            }
            return [
                c,
                this._turn,
                f,
                o,
                this._halfMoves,
                this._moveNumber
            ].join(" ");
        }
        _updateSetup(r) {
            this._history.length > 0 || (r !== ff ? (this._header.SetUp = "1", this._header.FEN = r) : (this._header.SetUp = null, this._header.FEN = null));
        }
        reset() {
            this.load(ff);
        }
        get(r) {
            return this._board[ue[r]];
        }
        findPiece(r) {
            const c = [];
            for(let f = ue.a8; f <= ue.h1; f++){
                if (f & 136) {
                    f += 7;
                    continue;
                }
                !this._board[f] || this._board[f]?.color !== r.color || this._board[f].color === r.color && this._board[f].type === r.type && c.push(Fe(f));
            }
            return c;
        }
        put({ type: r, color: c }, f) {
            return this._put({
                type: r,
                color: c
            }, f) ? (this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0) : !1;
        }
        _put({ type: r, color: c }, f) {
            if (Ev.indexOf(r.toLowerCase()) === -1 || !(f in ue)) return !1;
            const o = ue[f];
            if (r == Le && !(this._kings[c] == ft || this._kings[c] == o)) return !1;
            const s = this._board[o];
            return s && s.type === Le && (this._kings[s.color] = ft), this._board[o] = {
                type: r,
                color: c
            }, r === Le && (this._kings[c] = o), !0;
        }
        remove(r) {
            const c = this.get(r);
            return delete this._board[ue[r]], c && c.type === Le && (this._kings[c.color] = ft), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), c;
        }
        _updateCastlingRights() {
            const r = this._board[ue.e1]?.type === Le && this._board[ue.e1]?.color === lt, c = this._board[ue.e8]?.type === Le && this._board[ue.e8]?.color === Mt;
            (!r || this._board[ue.a1]?.type !== Ia || this._board[ue.a1]?.color !== lt) && (this._castling.w &= -65), (!r || this._board[ue.h1]?.type !== Ia || this._board[ue.h1]?.color !== lt) && (this._castling.w &= -33), (!c || this._board[ue.a8]?.type !== Ia || this._board[ue.a8]?.color !== Mt) && (this._castling.b &= -65), (!c || this._board[ue.h8]?.type !== Ia || this._board[ue.h8]?.color !== Mt) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === ft) return;
            const r = this._epSquare + (this._turn === lt ? -16 : 16), c = this._epSquare + (this._turn === lt ? 16 : -16), f = [
                c + 1,
                c - 1
            ];
            if (this._board[r] !== null || this._board[this._epSquare] !== null || this._board[c]?.color !== $a(this._turn) || this._board[c]?.type !== Ve) {
                this._epSquare = ft;
                return;
            }
            const o = (s)=>!(s & 136) && this._board[s]?.color === this._turn && this._board[s]?.type === Ve;
            f.some(o) || (this._epSquare = ft);
        }
        _attacked(r, c, f) {
            const o = [];
            for(let s = ue.a8; s <= ue.h1; s++){
                if (s & 136) {
                    s += 7;
                    continue;
                }
                if (this._board[s] === void 0 || this._board[s].color !== r) continue;
                const m = this._board[s], h = s - c;
                if (h === 0) continue;
                const p = h + 119;
                if (gv[p] & Sv[m.type]) {
                    if (m.type === Ve) {
                        if (h > 0 && m.color === lt || h <= 0 && m.color === Mt) if (f) o.push(Fe(s));
                        else return !0;
                        continue;
                    }
                    if (m.type === "n" || m.type === "k") if (f) {
                        o.push(Fe(s));
                        continue;
                    } else return !0;
                    const v = bv[p];
                    let b = s + v, R = !1;
                    for(; b !== c;){
                        if (this._board[b] != null) {
                            R = !0;
                            break;
                        }
                        b += v;
                    }
                    if (!R) if (f) {
                        o.push(Fe(s));
                        continue;
                    } else return !0;
                }
            }
            return f ? o : !1;
        }
        attackers(r, c) {
            return c ? this._attacked(c, ue[r], !0) : this._attacked(this._turn, ue[r], !0);
        }
        _isKingAttacked(r) {
            const c = this._kings[r];
            return c === -1 ? !1 : this._attacked($a(r), c);
        }
        isAttacked(r, c) {
            return this._attacked(c, ue[r]);
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
            const r = {
                b: 0,
                n: 0,
                r: 0,
                q: 0,
                k: 0,
                p: 0
            }, c = [];
            let f = 0, o = 0;
            for(let s = ue.a8; s <= ue.h1; s++){
                if (o = (o + 1) % 2, s & 136) {
                    s += 7;
                    continue;
                }
                const m = this._board[s];
                m && (r[m.type] = m.type in r ? r[m.type] + 1 : 1, m.type === Mi && c.push(o), f++);
            }
            if (f === 2) return !0;
            if (f === 3 && (r[Mi] === 1 || r[yf] === 1)) return !0;
            if (f === r[Mi] + 2) {
                let s = 0;
                const m = c.length;
                for(let h = 0; h < m; h++)s += c[h];
                if (s === 0 || s === m) return !0;
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
        moves({ verbose: r = !1, square: c = void 0, piece: f = void 0 } = {}) {
            const o = this._moves({
                square: c,
                piece: f
            });
            return r ? o.map((s)=>new Ai(this, s)) : o.map((s)=>this._moveToSan(s, o));
        }
        _moves({ legal: r = !0, piece: c = void 0, square: f = void 0 } = {}) {
            const o = f ? f.toLowerCase() : void 0, s = c?.toLowerCase(), m = [], h = this._turn, p = $a(h);
            let v = ue.a8, b = ue.h1, R = !1;
            if (o) if (o in ue) v = b = ue[o], R = !0;
            else return [];
            for(let T = v; T <= b; T++){
                if (T & 136) {
                    T += 7;
                    continue;
                }
                if (!this._board[T] || this._board[T].color === p) continue;
                const { type: O } = this._board[T];
                let D;
                if (O === Ve) {
                    if (s && s !== O) continue;
                    D = T + of[h][0], this._board[D] || (Bl(m, h, T, D, Ve), D = T + of[h][1], Ov[h] === ln(T) && !this._board[D] && Bl(m, h, T, D, Ve, void 0, ce.BIG_PAWN));
                    for(let w = 2; w < 4; w++)D = T + of[h][w], !(D & 136) && (this._board[D]?.color === p ? Bl(m, h, T, D, Ve, this._board[D].type, ce.CAPTURE) : D === this._epSquare && Bl(m, h, T, D, Ve, Ve, ce.EP_CAPTURE));
                } else {
                    if (s && s !== O) continue;
                    for(let w = 0, z = Fh[O].length; w < z; w++){
                        const j = Fh[O][w];
                        for(D = T; D += j, !(D & 136);){
                            if (!this._board[D]) Bl(m, h, T, D, O);
                            else {
                                if (this._board[D].color === h) break;
                                Bl(m, h, T, D, O, this._board[D].type, ce.CAPTURE);
                                break;
                            }
                            if (O === yf || O === Le) break;
                        }
                    }
                }
            }
            if ((s === void 0 || s === Le) && (!R || b === this._kings[h])) {
                if (this._castling[h] & ce.KSIDE_CASTLE) {
                    const T = this._kings[h], O = T + 2;
                    !this._board[T + 1] && !this._board[O] && !this._attacked(p, this._kings[h]) && !this._attacked(p, T + 1) && !this._attacked(p, O) && Bl(m, h, this._kings[h], O, Le, void 0, ce.KSIDE_CASTLE);
                }
                if (this._castling[h] & ce.QSIDE_CASTLE) {
                    const T = this._kings[h], O = T - 2;
                    !this._board[T - 1] && !this._board[T - 2] && !this._board[T - 3] && !this._attacked(p, this._kings[h]) && !this._attacked(p, T - 1) && !this._attacked(p, O) && Bl(m, h, this._kings[h], O, Le, void 0, ce.QSIDE_CASTLE);
                }
            }
            if (!r || this._kings[h] === -1) return m;
            const S = [];
            for(let T = 0, O = m.length; T < O; T++)this._makeMove(m[T]), this._isKingAttacked(h) || S.push(m[T]), this._undoMove();
            return S;
        }
        move(r, { strict: c = !1 } = {}) {
            let f = null;
            if (typeof r == "string") f = this._moveFromSan(r, c);
            else if (typeof r == "object") {
                const s = this._moves();
                for(let m = 0, h = s.length; m < h; m++)if (r.from === Fe(s[m].from) && r.to === Fe(s[m].to) && (!("promotion" in s[m]) || r.promotion === s[m].promotion)) {
                    f = s[m];
                    break;
                }
            }
            if (!f) throw typeof r == "string" ? new Error(`Invalid move: ${r}`) : new Error(`Invalid move: ${JSON.stringify(r)}`);
            const o = new Ai(this, f);
            return this._makeMove(f), this._incPositionCount(o.after), o;
        }
        _push(r) {
            this._history.push({
                move: r,
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
        _makeMove(r) {
            const c = this._turn, f = $a(c);
            if (this._push(r), this._board[r.to] = this._board[r.from], delete this._board[r.from], r.flags & ce.EP_CAPTURE && (this._turn === Mt ? delete this._board[r.to - 16] : delete this._board[r.to + 16]), r.promotion && (this._board[r.to] = {
                type: r.promotion,
                color: c
            }), this._board[r.to].type === Le) {
                if (this._kings[c] = r.to, r.flags & ce.KSIDE_CASTLE) {
                    const o = r.to - 1, s = r.to + 1;
                    this._board[o] = this._board[s], delete this._board[s];
                } else if (r.flags & ce.QSIDE_CASTLE) {
                    const o = r.to + 1, s = r.to - 2;
                    this._board[o] = this._board[s], delete this._board[s];
                }
                this._castling[c] = 0;
            }
            if (this._castling[c]) {
                for(let o = 0, s = Dl[c].length; o < s; o++)if (r.from === Dl[c][o].square && this._castling[c] & Dl[c][o].flag) {
                    this._castling[c] ^= Dl[c][o].flag;
                    break;
                }
            }
            if (this._castling[f]) {
                for(let o = 0, s = Dl[f].length; o < s; o++)if (r.to === Dl[f][o].square && this._castling[f] & Dl[f][o].flag) {
                    this._castling[f] ^= Dl[f][o].flag;
                    break;
                }
            }
            r.flags & ce.BIG_PAWN ? c === Mt ? this._epSquare = r.to - 16 : this._epSquare = r.to + 16 : this._epSquare = ft, r.piece === Ve ? this._halfMoves = 0 : r.flags & (ce.CAPTURE | ce.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, c === Mt && this._moveNumber++, this._turn = f;
        }
        undo() {
            const r = this._undoMove();
            if (r) {
                const c = new Ai(this, r);
                return this._decPositionCount(c.after), c;
            }
            return null;
        }
        _undoMove() {
            const r = this._history.pop();
            if (r === void 0) return null;
            const c = r.move;
            this._kings = r.kings, this._turn = r.turn, this._castling = r.castling, this._epSquare = r.epSquare, this._halfMoves = r.halfMoves, this._moveNumber = r.moveNumber;
            const f = this._turn, o = $a(f);
            if (this._board[c.from] = this._board[c.to], this._board[c.from].type = c.piece, delete this._board[c.to], c.captured) if (c.flags & ce.EP_CAPTURE) {
                let s;
                f === Mt ? s = c.to - 16 : s = c.to + 16, this._board[s] = {
                    type: Ve,
                    color: o
                };
            } else this._board[c.to] = {
                type: c.captured,
                color: o
            };
            if (c.flags & (ce.KSIDE_CASTLE | ce.QSIDE_CASTLE)) {
                let s, m;
                c.flags & ce.KSIDE_CASTLE ? (s = c.to + 1, m = c.to - 1) : (s = c.to - 2, m = c.to + 1), this._board[s] = this._board[m], delete this._board[m];
            }
            return c;
        }
        pgn({ newline: r = `
`, maxWidth: c = 0 } = {}) {
            const f = [];
            let o = !1;
            for(const S in this._header)this._header[S] && f.push(`[${S} "${this._header[S]}"]` + r), o = !0;
            o && this._history.length && f.push(r);
            const s = (S)=>{
                const T = this._comments[this.fen()];
                if (typeof T < "u") {
                    const O = S.length > 0 ? " " : "";
                    S = `${S}${O}{${T}}`;
                }
                return S;
            }, m = [];
            for(; this._history.length > 0;)m.push(this._undoMove());
            const h = [];
            let p = "";
            for(m.length === 0 && h.push(s("")); m.length > 0;){
                p = s(p);
                const S = m.pop();
                if (!S) break;
                if (!this._history.length && S.color === "b") {
                    const T = `${this._moveNumber}. ...`;
                    p = p ? `${p} ${T}` : T;
                } else S.color === "w" && (p.length && h.push(p), p = this._moveNumber + ".");
                p = p + " " + this._moveToSan(S, this._moves({
                    legal: !0
                })), this._makeMove(S);
            }
            if (p.length && h.push(s(p)), h.push(this._header.Result || "*"), c === 0) return f.join("") + h.join(" ");
            const v = function() {
                return f.length > 0 && f[f.length - 1] === " " ? (f.pop(), !0) : !1;
            }, b = function(S, T) {
                for (const O of T.split(" "))if (O) {
                    if (S + O.length > c) {
                        for(; v();)S--;
                        f.push(r), S = 0;
                    }
                    f.push(O), S += O.length, f.push(" "), S++;
                }
                return v() && S--, S;
            };
            let R = 0;
            for(let S = 0; S < h.length; S++){
                if (R + h[S].length > c && h[S].includes("{")) {
                    R = b(R, h[S]);
                    continue;
                }
                R + h[S].length > c && S !== 0 ? (f[f.length - 1] === " " && f.pop(), f.push(r), R = 0) : S !== 0 && (f.push(" "), R++), f.push(h[S]), R += h[S].length;
            }
            return f.join("");
        }
        header(...r) {
            for(let c = 0; c < r.length; c += 2)typeof r[c] == "string" && typeof r[c + 1] == "string" && (this._header[r[c]] = r[c + 1]);
            return this._header;
        }
        setHeader(r, c) {
            return this._header[r] = c ?? vf[r] ?? null, this.getHeaders();
        }
        removeHeader(r) {
            return r in this._header ? (this._header[r] = vf[r] || null, !0) : !1;
        }
        getHeaders() {
            const r = {};
            for (const [c, f] of Object.entries(this._header))f !== null && (r[c] = f);
            return r;
        }
        loadPgn(r, { strict: c = !1, newlineChar: f = `\r?
` } = {}) {
            function o(k) {
                return k.replace(/\\/g, "\\");
            }
            function s(k) {
                const V = {}, K = k.split(new RegExp(o(f)));
                let W = "", $ = "";
                for(let J = 0; J < K.length; J++){
                    const ne = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    W = K[J].replace(ne, "$1"), $ = K[J].replace(ne, "$2"), W.trim().length > 0 && (V[W] = $);
                }
                return V;
            }
            r = r.trim();
            const h = new RegExp("^(\\[((?:" + o(f) + ")|.)*\\])((?:\\s*" + o(f) + "){2}|(?:\\s*" + o(f) + ")*$)").exec(r), p = h && h.length >= 2 ? h[1] : "";
            this.reset();
            const v = s(p);
            let b = "";
            for(const k in v)k.toLowerCase() === "fen" && (b = v[k]), this.header(k, v[k]);
            if (!c) b && this.load(b, {
                preserveHeaders: !0
            });
            else if (v.SetUp === "1") {
                if (!("FEN" in v)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
                this.load(v.FEN, {
                    preserveHeaders: !0
                });
            }
            function R(k) {
                return Array.from(k).map(function(V) {
                    return V.charCodeAt(0) < 128 ? V.charCodeAt(0).toString(16) : encodeURIComponent(V).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function S(k) {
                return k.length == 0 ? "" : decodeURIComponent("%" + (k.match(/.{1,2}/g) || []).join("%"));
            }
            const T = function(k) {
                return k = k.replace(new RegExp(o(f), "g"), " "), `{${R(k.slice(1, k.length - 1))}}`;
            }, O = function(k) {
                if (k.startsWith("{") && k.endsWith("}")) return S(k.slice(1, k.length - 1));
            };
            let D = r.replace(p, "").replace(new RegExp(`({[^}]*})+?|;([^${o(f)}]*)`, "g"), function(k, V, K) {
                return V !== void 0 ? T(V) : " " + T(`{${K.slice(1)}}`);
            }).replace(new RegExp(o(f), "g"), " ");
            const w = /(\([^()]+\))+?/g;
            for(; w.test(D);)D = D.replace(w, "");
            D = D.replace(/\d+\.(\.\.)?/g, ""), D = D.replace(/\.\.\./g, ""), D = D.replace(/\$\d+/g, "");
            let z = D.trim().split(new RegExp(/\s+/));
            z = z.filter((k)=>k !== "");
            let j = "";
            for(let k = 0; k < z.length; k++){
                const V = O(z[k]);
                if (V !== void 0) {
                    this._comments[this.fen()] = V;
                    continue;
                }
                const K = this._moveFromSan(z[k], c);
                if (K == null) if (Nv.indexOf(z[k]) > -1) j = z[k];
                else throw new Error(`Invalid move in PGN: ${z[k]}`);
                else j = "", this._makeMove(K), this._incPositionCount(this.fen());
            }
            j && Object.keys(this._header).length && this._header.Result !== j && this.setHeader("Result", j);
        }
        _moveToSan(r, c) {
            let f = "";
            if (r.flags & ce.KSIDE_CASTLE) f = "O-O";
            else if (r.flags & ce.QSIDE_CASTLE) f = "O-O-O";
            else {
                if (r.piece !== Ve) {
                    const o = Mv(r, c);
                    f += r.piece.toUpperCase() + o;
                }
                r.flags & (ce.CAPTURE | ce.EP_CAPTURE) && (r.piece === Ve && (f += Fe(r.from)[0]), f += "x"), f += Fe(r.to), r.promotion && (f += "=" + r.promotion.toUpperCase());
            }
            return this._makeMove(r), this.isCheck() && (this.isCheckmate() ? f += "#" : f += "+"), this._undoMove(), f;
        }
        _moveFromSan(r, c = !1) {
            const f = sf(r);
            let o = Ih(f), s = this._moves({
                legal: !0,
                piece: o
            });
            for(let S = 0, T = s.length; S < T; S++)if (f === sf(this._moveToSan(s[S], s))) return s[S];
            if (c) return null;
            let m, h, p, v, b, R = !1;
            if (h = f.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), h ? (m = h[1], p = h[2], v = h[3], b = h[4], p.length == 1 && (R = !0)) : (h = f.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), h && (m = h[1], p = h[2], v = h[3], b = h[4], p.length == 1 && (R = !0))), o = Ih(f), s = this._moves({
                legal: !0,
                piece: m || o
            }), !v) return null;
            for(let S = 0, T = s.length; S < T; S++)if (p) {
                if ((!m || m.toLowerCase() == s[S].piece) && ue[p] == s[S].from && ue[v] == s[S].to && (!b || b.toLowerCase() == s[S].promotion)) return s[S];
                if (R) {
                    const O = Fe(s[S].from);
                    if ((!m || m.toLowerCase() == s[S].piece) && ue[v] == s[S].to && (p == O[0] || p == O[1]) && (!b || b.toLowerCase() == s[S].promotion)) return s[S];
                }
            } else if (f === sf(this._moveToSan(s[S], s)).replace("x", "")) return s[S];
            return null;
        }
        ascii() {
            let r = `   +------------------------+
`;
            for(let c = ue.a8; c <= ue.h1; c++){
                if (lu(c) === 0 && (r += " " + "87654321"[ln(c)] + " |"), this._board[c]) {
                    const f = this._board[c].type, s = this._board[c].color === lt ? f.toUpperCase() : f.toLowerCase();
                    r += " " + s + " ";
                } else r += " . ";
                c + 1 & 136 && (r += `|
`, c += 8);
            }
            return r += `   +------------------------+
`, r += "     a  b  c  d  e  f  g  h", r;
        }
        perft(r) {
            const c = this._moves({
                legal: !1
            });
            let f = 0;
            const o = this._turn;
            for(let s = 0, m = c.length; s < m; s++)this._makeMove(c[s]), this._isKingAttacked(o) || (r - 1 > 0 ? f += this.perft(r - 1) : f++), this._undoMove();
            return f;
        }
        turn() {
            return this._turn;
        }
        board() {
            const r = [];
            let c = [];
            for(let f = ue.a8; f <= ue.h1; f++)this._board[f] == null ? c.push(null) : c.push({
                square: Fe(f),
                type: this._board[f].type,
                color: this._board[f].color
            }), f + 1 & 136 && (r.push(c), c = [], f += 8);
            return r;
        }
        squareColor(r) {
            if (r in ue) {
                const c = ue[r];
                return (ln(c) + lu(c)) % 2 === 0 ? "light" : "dark";
            }
            return null;
        }
        history({ verbose: r = !1 } = {}) {
            const c = [], f = [];
            for(; this._history.length > 0;)c.push(this._undoMove());
            for(;;){
                const o = c.pop();
                if (!o) break;
                r ? f.push(new Ai(this, o)) : f.push(this._moveToSan(o, this._moves())), this._makeMove(o);
            }
            return f;
        }
        _getPositionCount(r) {
            const c = df(r);
            return this._positionCount[c] || 0;
        }
        _incPositionCount(r) {
            const c = df(r);
            this._positionCount[c] === void 0 && (this._positionCount[c] = 0), this._positionCount[c] += 1;
        }
        _decPositionCount(r) {
            const c = df(r);
            this._positionCount[c] === 1 ? delete this._positionCount[c] : this._positionCount[c] -= 1;
        }
        _pruneComments() {
            const r = [], c = {}, f = (o)=>{
                o in this._comments && (c[o] = this._comments[o]);
            };
            for(; this._history.length > 0;)r.push(this._undoMove());
            for(f(this.fen());;){
                const o = r.pop();
                if (!o) break;
                this._makeMove(o), f(this.fen());
            }
            this._comments = c;
        }
        getComment() {
            return this._comments[this.fen()];
        }
        setComment(r) {
            this._comments[this.fen()] = r.replace("{", "[").replace("}", "]");
        }
        deleteComment() {
            return this.removeComment();
        }
        removeComment() {
            const r = this._comments[this.fen()];
            return delete this._comments[this.fen()], r;
        }
        getComments() {
            return this._pruneComments(), Object.keys(this._comments).map((r)=>({
                    fen: r,
                    comment: this._comments[r]
                }));
        }
        deleteComments() {
            return this.removeComments();
        }
        removeComments() {
            return this._pruneComments(), Object.keys(this._comments).map((r)=>{
                const c = this._comments[r];
                return delete this._comments[r], {
                    fen: r,
                    comment: c
                };
            });
        }
        setCastlingRights(r, c) {
            for (const o of [
                Le,
                wl
            ])c[o] !== void 0 && (c[o] ? this._castling[r] |= Oi[o] : this._castling[r] &= ~Oi[o]);
            this._updateCastlingRights();
            const f = this.getCastlingRights(r);
            return (c[Le] === void 0 || c[Le] === f[Le]) && (c[wl] === void 0 || c[wl] === f[wl]);
        }
        getCastlingRights(r) {
            return {
                [Le]: (this._castling[r] & Oi[Le]) !== 0,
                [wl]: (this._castling[r] & Oi[wl]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let xp, Mp, Cv, Cp, Dv, Dp, Bv, wv, Bp, ep, zv, wp, zp, Up, Uv, Pv, Pp, qp, Hp, kp, Nf, Lp, qv, Hv, kv, Lv, jv, Qv, Kv, Gv, Yv, Vv, Xv, Zv, jp, Qp, Kp, Gp, Yp, Vp, Xp, Zp, $p, Jp, Fp, xf, tp, lp, $v, Jv, Fv, Wv, Iv, eg, tg, lg, ng, ag, np, ug, ig, rg, cg, fg;
    xp = "MOVE_PIECE";
    Mp = "RESET_GAME";
    Cv = "LOAD_GAME";
    Cp = "SET_GAME_OVER";
    Dv = "SET_TIMER_DURATION";
    p2 = (u)=>({
            type: xp,
            payload: u
        });
    m2 = (u)=>({
            type: Mp,
            payload: u
        });
    y2 = (u, r)=>({
            type: Cp,
            payload: {
                isGameOver: u,
                gameResult: r
            }
        });
    _e = {
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
    Dp = [
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
    Bv = [
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
    wv = {
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
    Bp = {
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
    ep = {
        fen: _e.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: _e.TIMER_DURATION
    };
    zv = (u = ep, r)=>{
        switch(r.type){
            case xp:
                try {
                    const c = new Of(u.fen), f = c.move({
                        from: r.payload.from,
                        to: r.payload.to,
                        promotion: r.payload.promotionPiece
                    });
                    if (!f) return u;
                    const o = [
                        ...u.moveHistory,
                        f.san
                    ];
                    return {
                        ...u,
                        fen: c.fen(),
                        isWhiteTurn: !u.isWhiteTurn,
                        moveHistory: o,
                        lastMove: {
                            from: r.payload.from,
                            to: r.payload.to
                        }
                    };
                } catch (c) {
                    return console.warn("Invalid move:", c), u;
                }
            case Mp:
                return {
                    ...ep,
                    moveHistory: [],
                    timerDuration: r.payload
                };
            case Cv:
                return {
                    ...u,
                    fen: r.payload.fen,
                    moveHistory: r.payload.moveHistory || []
                };
            case Cp:
                return {
                    ...u,
                    isGameOver: r.payload.isGameOver,
                    gameResult: r.payload.gameResult
                };
            case Dv:
                return {
                    ...u,
                    timerDuration: r.payload
                };
            default:
                return u;
        }
    };
    wp = "FLIP_BOARD";
    zp = "SET_THEME";
    Up = "SET_SOUND";
    v2 = ()=>({
            type: wp
        });
    g2 = (u)=>({
            type: zp,
            payload: u
        });
    b2 = (u)=>({
            type: Up,
            payload: u
        });
    Uv = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    Pv = (u = Uv, r)=>{
        switch(r.type){
            case wp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case zp:
                return {
                    ...u,
                    theme: r.payload
                };
            case Up:
                return {
                    ...u,
                    enableSound: r.payload
                };
            default:
                return u;
        }
    };
    Pp = "NEXT";
    qp = "PREV";
    Hp = "START_POS";
    kp = "FINAL_POS";
    Nf = "LOAD_PGN";
    Lp = "JUMP_TO_MOVE";
    qv = "TOGGLE_ENGINE";
    Hv = "DISABLE_ENGINE";
    S2 = ()=>({
            type: Hp
        });
    E2 = ()=>({
            type: qp
        });
    _2 = ()=>({
            type: Pp
        });
    R2 = ()=>({
            type: kp
        });
    T2 = ({ finalPos: u, moves: r, fens: c, fromToSquares: f, termination: o, result: s, blackPlayerName: m, whitePlayerName: h })=>({
            type: Nf,
            payload: {
                finalPos: u,
                moves: r,
                fens: c,
                fromToSquares: f,
                termination: o,
                result: s,
                blackPlayerName: m,
                whitePlayerName: h
            }
        });
    A2 = (u)=>({
            type: Lp,
            payload: u
        });
    kv = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    Lv = (u = kv, r)=>{
        switch(r.type){
            case Pp:
                return u.currentMoveIndex === u.fenLength - 1 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex + 1
                };
            case qp:
                return u.currentMoveIndex === 0 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex - 1
                };
            case Hp:
                return {
                    ...u,
                    currentMoveIndex: 0
                };
            case kp:
                return {
                    ...u,
                    currentMoveIndex: u.fenLength - 1
                };
            case Lp:
                return {
                    ...u,
                    currentMoveIndex: r.payload
                };
            case Nf:
                return {
                    ...u,
                    finalFen: r.payload.finalPos,
                    fenLength: r.payload.fens.length,
                    currentMoveIndex: 0
                };
            case qv:
                return {
                    ...u,
                    engineEnabled: !u.engineEnabled
                };
            case Hv:
                return {
                    ...u,
                    engineEnabled: !1
                };
            default:
                return u;
        }
    };
    jv = {
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
        whitePlayerName: "Jose Raul Capablanca"
    };
    Qv = (u = jv, r)=>{
        switch(r.type){
            case Nf:
                return {
                    ...u,
                    finalFen: r.payload.finalPos,
                    moves: r.payload.moves,
                    fens: r.payload.fens,
                    fromToSquares: r.payload.fromToSquares,
                    termination: r.payload.termination,
                    result: r.payload.result,
                    blackPlayerName: r.payload.blackPlayerName,
                    whitePlayerName: r.payload.whitePlayerName
                };
            default:
                return u;
        }
    };
    Kv = "TOGGLE_ENGINE";
    Gv = "SET_MULTIPV";
    Yv = "SET_MAX_DEPTH";
    Vv = "SET_AUTO_STOP_TIME";
    Xv = {
        enabled: !1,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    Zv = (u = Xv, r)=>{
        switch(r.type){
            case Kv:
                return {
                    ...u,
                    enabled: !u.enabled
                };
            case Gv:
                return {
                    ...u,
                    multiPV: r.payload
                };
            case Yv:
                return {
                    ...u,
                    maxDepth: r.payload
                };
            case Vv:
                return {
                    ...u,
                    autoStopTime: r.payload
                };
            default:
                return u;
        }
    };
    jp = "RESET_BOARD";
    Qp = "CLEAR_BOARD";
    Kp = "FLIP_BOARD";
    Gp = "SET_BOARD_WITH_FEN";
    Yp = "PUT_PIECE";
    Vp = "REMOVE_PIECE";
    Xp = "MOVE_BOARD_PIECE";
    Zp = "TOGGLE_CASTLING_PIECE";
    $p = "SET_PLAYER_TO_MOVE";
    Jp = "SET_SELECTED_ITEM";
    Fp = "DESELECT_ITEM";
    xf = (u)=>({
            type: Jp,
            payload: {
                item: u
            }
        });
    tp = ()=>({
            type: Fp
        });
    lp = (u)=>({
            type: $p,
            payload: {
                color: u
            }
        });
    $v = ()=>({
            type: jp
        });
    Jv = ()=>({
            type: Qp
        });
    Fv = ()=>({
            type: Kp
        });
    Wv = (u)=>({
            type: Gp,
            payload: {
                fen: u
            }
        });
    Iv = (u, r)=>({
            type: Yp,
            payload: {
                squareId: u,
                piece: r
            }
        });
    eg = (u)=>({
            type: Vp,
            payload: {
                squareId: u
            }
        });
    tg = (u, r)=>({
            type: Xp,
            payload: {
                sourceSquareId: u,
                destSquareId: r
            }
        });
    lg = (u)=>({
            type: Zp,
            payload: {
                flag: u
            }
        });
    ng = (u)=>{
        const r = Bp;
        try {
            const c = new Of;
            c.load(u);
            const f = c.board();
            for(let o = 0; o < 8; o++)for(let s = 0; s < 8; s++){
                const m = f[o][s], h = `${"abcdefgh"[s]}${8 - o}`;
                r[h] = m ? {
                    type: m.type,
                    color: m.color
                } : null;
            }
        } catch (c) {
            console.error("FenToBoard error", c, u);
        }
        return r;
    };
    ag = (u)=>u.split(" ")?.[1] === "w" ? "w" : "b";
    np = {
        board: {
            ...wv
        },
        selectedItem: null,
        isFlipped: !1,
        playerToMove: _e.WHITE,
        castlingFlags: {
            K: !0,
            Q: !0,
            k: !0,
            q: !0
        }
    };
    ug = {
        board: {
            ...Bp
        },
        selectedItem: null,
        isFlipped: !1,
        playerToMove: _e.WHITE,
        castlingFlags: {
            K: !1,
            Q: !1,
            k: !1,
            q: !1
        }
    };
    ig = (u = np, r)=>{
        switch(r.type){
            case Kp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case jp:
                return np;
            case Qp:
                return ug;
            case Gp:
                return {
                    ...u,
                    board: {
                        ...ng(r.payload.fen)
                    },
                    playerToMove: ag(r.payload.fen)
                };
            case Yp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [r.payload.squareId]: r.payload.piece
                    }
                };
            case Xp:
                {
                    const c = u.board[r.payload.sourceSquareId];
                    return {
                        ...u,
                        board: {
                            ...u.board,
                            [r.payload.destSquareId]: c,
                            [r.payload.sourceSquareId]: null
                        }
                    };
                }
            case Vp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [r.payload.squareId]: null
                    }
                };
            case Zp:
                return {
                    ...u,
                    castlingFlags: {
                        ...u.castlingFlags,
                        [r.payload.flag]: !u.castlingFlags[r.payload.flag]
                    }
                };
            case $p:
                return {
                    ...u,
                    playerToMove: r.payload.color
                };
            case Jp:
                return {
                    ...u,
                    selectedItem: r.payload.item ?? null
                };
            case Fp:
                return {
                    ...u,
                    selectedItem: null
                };
            default:
                return u;
        }
    };
    rg = vp({
        game: zv,
        settings: Pv,
        analysis: Lv,
        pgn: Qv,
        engine: Zv,
        boardeditor: ig
    });
    cg = {
        key: "root",
        storage: mv,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    fg = av(cg, rg);
    Wp = Qy({
        reducer: fg,
        middleware: (u)=>u({
                serializableCheck: {
                    ignoredActions: [
                        "persist/PERSIST"
                    ]
                }
            })
    });
    ov(Wp);
    const og = "modulepreload", sg = function(u) {
        return "/chess-frontend/" + u;
    }, ap = {}, Ip = function(r, c, f) {
        let o = Promise.resolve();
        if (c && c.length > 0) {
            document.getElementsByTagName("link");
            const m = document.querySelector("meta[property=csp-nonce]"), h = m?.nonce || m?.getAttribute("nonce");
            o = Promise.allSettled(c.map((p)=>{
                if (p = sg(p), p in ap) return;
                ap[p] = !0;
                const v = p.endsWith(".css"), b = v ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${p}"]${b}`)) return;
                const R = document.createElement("link");
                if (R.rel = v ? "stylesheet" : og, v || (R.as = "script"), R.crossOrigin = "", R.href = p, h && R.setAttribute("nonce", h), document.head.appendChild(R), v) return new Promise((S, T)=>{
                    R.addEventListener("load", S), R.addEventListener("error", ()=>T(new Error(`Unable to preload CSS for ${p}`)));
                });
            }));
        }
        function s(m) {
            const h = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (h.payload = m, window.dispatchEvent(h), !h.defaultPrevented) throw m;
        }
        return o.then((m)=>{
            for (const h of m || [])h.status === "rejected" && s(h.reason);
            return r().catch(s);
        });
    };
    var Ja = {}, up;
    function dg() {
        if (up) return Ja;
        up = 1, Object.defineProperty(Ja, "__esModule", {
            value: !0
        }), Ja.parse = m, Ja.serialize = v;
        const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, f = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, s = (()=>{
            const S = function() {};
            return S.prototype = Object.create(null), S;
        })();
        function m(S, T) {
            const O = new s, D = S.length;
            if (D < 2) return O;
            const w = T?.decode || b;
            let z = 0;
            do {
                const j = S.indexOf("=", z);
                if (j === -1) break;
                const k = S.indexOf(";", z), V = k === -1 ? D : k;
                if (j > V) {
                    z = S.lastIndexOf(";", j - 1) + 1;
                    continue;
                }
                const K = h(S, z, j), W = p(S, j, K), $ = S.slice(K, W);
                if (O[$] === void 0) {
                    let J = h(S, j + 1, V), ne = p(S, V, J);
                    const Ce = w(S.slice(J, ne));
                    O[$] = Ce;
                }
                z = V + 1;
            }while (z < D);
            return O;
        }
        function h(S, T, O) {
            do {
                const D = S.charCodeAt(T);
                if (D !== 32 && D !== 9) return T;
            }while (++T < O);
            return O;
        }
        function p(S, T, O) {
            for(; T > O;){
                const D = S.charCodeAt(--T);
                if (D !== 32 && D !== 9) return T + 1;
            }
            return O;
        }
        function v(S, T, O) {
            const D = O?.encode || encodeURIComponent;
            if (!u.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
            const w = D(T);
            if (!r.test(w)) throw new TypeError(`argument val is invalid: ${T}`);
            let z = S + "=" + w;
            if (!O) return z;
            if (O.maxAge !== void 0) {
                if (!Number.isInteger(O.maxAge)) throw new TypeError(`option maxAge is invalid: ${O.maxAge}`);
                z += "; Max-Age=" + O.maxAge;
            }
            if (O.domain) {
                if (!c.test(O.domain)) throw new TypeError(`option domain is invalid: ${O.domain}`);
                z += "; Domain=" + O.domain;
            }
            if (O.path) {
                if (!f.test(O.path)) throw new TypeError(`option path is invalid: ${O.path}`);
                z += "; Path=" + O.path;
            }
            if (O.expires) {
                if (!R(O.expires) || !Number.isFinite(O.expires.valueOf())) throw new TypeError(`option expires is invalid: ${O.expires}`);
                z += "; Expires=" + O.expires.toUTCString();
            }
            if (O.httpOnly && (z += "; HttpOnly"), O.secure && (z += "; Secure"), O.partitioned && (z += "; Partitioned"), O.priority) switch(typeof O.priority == "string" ? O.priority.toLowerCase() : void 0){
                case "low":
                    z += "; Priority=Low";
                    break;
                case "medium":
                    z += "; Priority=Medium";
                    break;
                case "high":
                    z += "; Priority=High";
                    break;
                default:
                    throw new TypeError(`option priority is invalid: ${O.priority}`);
            }
            if (O.sameSite) switch(typeof O.sameSite == "string" ? O.sameSite.toLowerCase() : O.sameSite){
                case !0:
                case "strict":
                    z += "; SameSite=Strict";
                    break;
                case "lax":
                    z += "; SameSite=Lax";
                    break;
                case "none":
                    z += "; SameSite=None";
                    break;
                default:
                    throw new TypeError(`option sameSite is invalid: ${O.sameSite}`);
            }
            return z;
        }
        function b(S) {
            if (S.indexOf("%") === -1) return S;
            try {
                return decodeURIComponent(S);
            } catch  {
                return S;
            }
        }
        function R(S) {
            return o.call(S) === "[object Date]";
        }
        return Ja;
    }
    dg();
    var ip = "popstate";
    function hg(u = {}) {
        function r(o, s) {
            let { pathname: m = "/", search: h = "", hash: p = "" } = un(o.location.hash.substring(1));
            return !m.startsWith("/") && !m.startsWith(".") && (m = "/" + m), gf("", {
                pathname: m,
                search: h,
                hash: p
            }, s.state && s.state.usr || null, s.state && s.state.key || "default");
        }
        function c(o, s) {
            let m = o.document.querySelector("base"), h = "";
            if (m && m.getAttribute("href")) {
                let p = o.location.href, v = p.indexOf("#");
                h = v === -1 ? p : p.slice(0, v);
            }
            return h + "#" + (typeof s == "string" ? s : nu(s));
        }
        function f(o, s) {
            wt(o.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`);
        }
        return mg(r, c, f, u);
    }
    function Me(u, r) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(r);
    }
    function wt(u, r) {
        if (!u) {
            typeof console < "u" && console.warn(r);
            try {
                throw new Error(r);
            } catch  {}
        }
    }
    function pg() {
        return Math.random().toString(36).substring(2, 10);
    }
    function rp(u, r) {
        return {
            usr: u.state,
            key: u.key,
            idx: r
        };
    }
    function gf(u, r, c = null, f) {
        return {
            pathname: typeof u == "string" ? u : u.pathname,
            search: "",
            hash: "",
            ...typeof r == "string" ? un(r) : r,
            state: c,
            key: r && r.key || f || pg()
        };
    }
    function nu({ pathname: u = "/", search: r = "", hash: c = "" }) {
        return r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r), c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c), u;
    }
    function un(u) {
        let r = {};
        if (u) {
            let c = u.indexOf("#");
            c >= 0 && (r.hash = u.substring(c), u = u.substring(0, c));
            let f = u.indexOf("?");
            f >= 0 && (r.search = u.substring(f), u = u.substring(0, f)), u && (r.pathname = u);
        }
        return r;
    }
    function mg(u, r, c, f = {}) {
        let { window: o = document.defaultView, v5Compat: s = !1 } = f, m = o.history, h = "POP", p = null, v = b();
        v == null && (v = 0, m.replaceState({
            ...m.state,
            idx: v
        }, ""));
        function b() {
            return (m.state || {
                idx: null
            }).idx;
        }
        function R() {
            h = "POP";
            let w = b(), z = w == null ? null : w - v;
            v = w, p && p({
                action: h,
                location: D.location,
                delta: z
            });
        }
        function S(w, z) {
            h = "PUSH";
            let j = gf(D.location, w, z);
            c && c(j, w), v = b() + 1;
            let k = rp(j, v), V = D.createHref(j);
            try {
                m.pushState(k, "", V);
            } catch (K) {
                if (K instanceof DOMException && K.name === "DataCloneError") throw K;
                o.location.assign(V);
            }
            s && p && p({
                action: h,
                location: D.location,
                delta: 1
            });
        }
        function T(w, z) {
            h = "REPLACE";
            let j = gf(D.location, w, z);
            c && c(j, w), v = b();
            let k = rp(j, v), V = D.createHref(j);
            m.replaceState(k, "", V), s && p && p({
                action: h,
                location: D.location,
                delta: 0
            });
        }
        function O(w) {
            let z = o.location.origin !== "null" ? o.location.origin : o.location.href, j = typeof w == "string" ? w : nu(w);
            return j = j.replace(/ $/, "%20"), Me(z, `No window.location.(origin|href) available to create URL for href: ${j}`), new URL(j, z);
        }
        let D = {
            get action () {
                return h;
            },
            get location () {
                return u(o, m);
            },
            listen (w) {
                if (p) throw new Error("A history only accepts one active listener");
                return o.addEventListener(ip, R), p = w, ()=>{
                    o.removeEventListener(ip, R), p = null;
                };
            },
            createHref (w) {
                return r(o, w);
            },
            createURL: O,
            encodeLocation (w) {
                let z = O(w);
                return {
                    pathname: z.pathname,
                    search: z.search,
                    hash: z.hash
                };
            },
            push: S,
            replace: T,
            go (w) {
                return m.go(w);
            }
        };
        return D;
    }
    function em(u, r, c = "/") {
        return yg(u, r, c, !1);
    }
    function yg(u, r, c, f) {
        let o = typeof r == "string" ? un(r) : r, s = al(o.pathname || "/", c);
        if (s == null) return null;
        let m = tm(u);
        vg(m);
        let h = null;
        for(let p = 0; h == null && p < m.length; ++p){
            let v = xg(s);
            h = Og(m[p], v, f);
        }
        return h;
    }
    function tm(u, r = [], c = [], f = "") {
        let o = (s, m, h)=>{
            let p = {
                relativePath: h === void 0 ? s.path || "" : h,
                caseSensitive: s.caseSensitive === !0,
                childrenIndex: m,
                route: s
            };
            p.relativePath.startsWith("/") && (Me(p.relativePath.startsWith(f), `Absolute route path "${p.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), p.relativePath = p.relativePath.slice(f.length));
            let v = nl([
                f,
                p.relativePath
            ]), b = c.concat(p);
            s.children && s.children.length > 0 && (Me(s.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`), tm(s.children, r, b, v)), !(s.path == null && !s.index) && r.push({
                path: v,
                score: Tg(v, s.index),
                routesMeta: b
            });
        };
        return u.forEach((s, m)=>{
            if (s.path === "" || !s.path?.includes("?")) o(s, m);
            else for (let h of lm(s.path))o(s, m, h);
        }), r;
    }
    function lm(u) {
        let r = u.split("/");
        if (r.length === 0) return [];
        let [c, ...f] = r, o = c.endsWith("?"), s = c.replace(/\?$/, "");
        if (f.length === 0) return o ? [
            s,
            ""
        ] : [
            s
        ];
        let m = lm(f.join("/")), h = [];
        return h.push(...m.map((p)=>p === "" ? s : [
                s,
                p
            ].join("/"))), o && h.push(...m), h.map((p)=>u.startsWith("/") && p === "" ? "/" : p);
    }
    function vg(u) {
        u.sort((r, c)=>r.score !== c.score ? c.score - r.score : Ag(r.routesMeta.map((f)=>f.childrenIndex), c.routesMeta.map((f)=>f.childrenIndex)));
    }
    var gg = /^:[\w-]+$/, bg = 3, Sg = 2, Eg = 1, _g = 10, Rg = -2, cp = (u)=>u === "*";
    function Tg(u, r) {
        let c = u.split("/"), f = c.length;
        return c.some(cp) && (f += Rg), r && (f += Sg), c.filter((o)=>!cp(o)).reduce((o, s)=>o + (gg.test(s) ? bg : s === "" ? Eg : _g), f);
    }
    function Ag(u, r) {
        return u.length === r.length && u.slice(0, -1).every((f, o)=>f === r[o]) ? u[u.length - 1] - r[r.length - 1] : 0;
    }
    function Og(u, r, c = !1) {
        let { routesMeta: f } = u, o = {}, s = "/", m = [];
        for(let h = 0; h < f.length; ++h){
            let p = f[h], v = h === f.length - 1, b = s === "/" ? r : r.slice(s.length) || "/", R = zi({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: v
            }, b), S = p.route;
            if (!R && v && c && !f[f.length - 1].route.index && (R = zi({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: !1
            }, b)), !R) return null;
            Object.assign(o, R.params), m.push({
                params: o,
                pathname: nl([
                    s,
                    R.pathname
                ]),
                pathnameBase: Bg(nl([
                    s,
                    R.pathnameBase
                ])),
                route: S
            }), R.pathnameBase !== "/" && (s = nl([
                s,
                R.pathnameBase
            ]));
        }
        return m;
    }
    function zi(u, r) {
        typeof u == "string" && (u = {
            path: u,
            caseSensitive: !1,
            end: !0
        });
        let [c, f] = Ng(u.path, u.caseSensitive, u.end), o = r.match(c);
        if (!o) return null;
        let s = o[0], m = s.replace(/(.)\/+$/, "$1"), h = o.slice(1);
        return {
            params: f.reduce((v, { paramName: b, isOptional: R }, S)=>{
                if (b === "*") {
                    let O = h[S] || "";
                    m = s.slice(0, s.length - O.length).replace(/(.)\/+$/, "$1");
                }
                const T = h[S];
                return R && !T ? v[b] = void 0 : v[b] = (T || "").replace(/%2F/g, "/"), v;
            }, {}),
            pathname: s,
            pathnameBase: m,
            pattern: u
        };
    }
    function Ng(u, r = !1, c = !0) {
        wt(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`);
        let f = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (m, h, p)=>(f.push({
                paramName: h,
                isOptional: p != null
            }), p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return u.endsWith("*") ? (f.push({
            paramName: "*"
        }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [
            new RegExp(o, r ? void 0 : "i"),
            f
        ];
    }
    function xg(u) {
        try {
            return u.split("/").map((r)=>decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
        } catch (r) {
            return wt(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), u;
        }
    }
    function al(u, r) {
        if (r === "/") return u;
        if (!u.toLowerCase().startsWith(r.toLowerCase())) return null;
        let c = r.endsWith("/") ? r.length - 1 : r.length, f = u.charAt(c);
        return f && f !== "/" ? null : u.slice(c) || "/";
    }
    function Mg(u, r = "/") {
        let { pathname: c, search: f = "", hash: o = "" } = typeof u == "string" ? un(u) : u;
        return {
            pathname: c ? c.startsWith("/") ? c : Cg(c, r) : r,
            search: wg(f),
            hash: zg(o)
        };
    }
    function Cg(u, r) {
        let c = r.replace(/\/+$/, "").split("/");
        return u.split("/").forEach((o)=>{
            o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
        }), c.length > 1 ? c.join("/") : "/";
    }
    function hf(u, r, c, f) {
        return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function Dg(u) {
        return u.filter((r, c)=>c === 0 || r.route.path && r.route.path.length > 0);
    }
    function nm(u) {
        let r = Dg(u);
        return r.map((c, f)=>f === r.length - 1 ? c.pathname : c.pathnameBase);
    }
    function am(u, r, c, f = !1) {
        let o;
        typeof u == "string" ? o = un(u) : (o = {
            ...u
        }, Me(!o.pathname || !o.pathname.includes("?"), hf("?", "pathname", "search", o)), Me(!o.pathname || !o.pathname.includes("#"), hf("#", "pathname", "hash", o)), Me(!o.search || !o.search.includes("#"), hf("#", "search", "hash", o)));
        let s = u === "" || o.pathname === "", m = s ? "/" : o.pathname, h;
        if (m == null) h = c;
        else {
            let R = r.length - 1;
            if (!f && m.startsWith("..")) {
                let S = m.split("/");
                for(; S[0] === "..";)S.shift(), R -= 1;
                o.pathname = S.join("/");
            }
            h = R >= 0 ? r[R] : "/";
        }
        let p = Mg(o, h), v = m && m !== "/" && m.endsWith("/"), b = (s || m === ".") && c.endsWith("/");
        return !p.pathname.endsWith("/") && (v || b) && (p.pathname += "/"), p;
    }
    var nl = (u)=>u.join("/").replace(/\/\/+/g, "/"), Bg = (u)=>u.replace(/\/+$/, "").replace(/^\/*/, "/"), wg = (u)=>!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, zg = (u)=>!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
    function Ug(u) {
        return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
    }
    var um = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(um);
    var Pg = [
        "GET",
        ...um
    ];
    new Set(Pg);
    var Zn = N.createContext(null);
    Zn.displayName = "DataRouter";
    var Pi = N.createContext(null);
    Pi.displayName = "DataRouterState";
    var im = N.createContext({
        isTransitioning: !1
    });
    im.displayName = "ViewTransition";
    var qg = N.createContext(new Map);
    qg.displayName = "Fetchers";
    var Hg = N.createContext(null);
    Hg.displayName = "Await";
    var Lt = N.createContext(null);
    Lt.displayName = "Navigation";
    var au = N.createContext(null);
    au.displayName = "Location";
    var ul = N.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    ul.displayName = "Route";
    var Mf = N.createContext(null);
    Mf.displayName = "RouteError";
    function kg(u, { relative: r } = {}) {
        Me(uu(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: c, navigator: f } = N.useContext(Lt), { hash: o, pathname: s, search: m } = iu(u, {
            relative: r
        }), h = s;
        return c !== "/" && (h = s === "/" ? c : nl([
            c,
            s
        ])), f.createHref({
            pathname: h,
            search: m,
            hash: o
        });
    }
    function uu() {
        return N.useContext(au) != null;
    }
    function rn() {
        return Me(uu(), "useLocation() may be used only in the context of a <Router> component."), N.useContext(au).location;
    }
    var rm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function cm(u) {
        N.useContext(Lt).static || N.useLayoutEffect(u);
    }
    function Lg() {
        let { isDataRoute: u } = N.useContext(ul);
        return u ? Ig() : jg();
    }
    function jg() {
        Me(uu(), "useNavigate() may be used only in the context of a <Router> component.");
        let u = N.useContext(Zn), { basename: r, navigator: c } = N.useContext(Lt), { matches: f } = N.useContext(ul), { pathname: o } = rn(), s = JSON.stringify(nm(f)), m = N.useRef(!1);
        return cm(()=>{
            m.current = !0;
        }), N.useCallback((p, v = {})=>{
            if (wt(m.current, rm), !m.current) return;
            if (typeof p == "number") {
                c.go(p);
                return;
            }
            let b = am(p, JSON.parse(s), o, v.relative === "path");
            u == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : nl([
                r,
                b.pathname
            ])), (v.replace ? c.replace : c.push)(b, v.state, v);
        }, [
            r,
            c,
            s,
            o,
            u
        ]);
    }
    N.createContext(null);
    function iu(u, { relative: r } = {}) {
        let { matches: c } = N.useContext(ul), { pathname: f } = rn(), o = JSON.stringify(nm(c));
        return N.useMemo(()=>am(u, JSON.parse(o), f, r === "path"), [
            u,
            o,
            f,
            r
        ]);
    }
    function Qg(u, r) {
        return fm(u, r);
    }
    function fm(u, r, c, f) {
        Me(uu(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: s } = N.useContext(Lt), { matches: m } = N.useContext(ul), h = m[m.length - 1], p = h ? h.params : {}, v = h ? h.pathname : "/", b = h ? h.pathnameBase : "/", R = h && h.route;
        {
            let j = R && R.path || "";
            om(v, !R || j.endsWith("*") || j.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j === "/" ? "*" : `${j}/*`}">.`);
        }
        let S = rn(), T;
        if (r) {
            let j = typeof r == "string" ? un(r) : r;
            Me(b === "/" || j.pathname?.startsWith(b), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${j.pathname}" was given in the \`location\` prop.`), T = j;
        } else T = S;
        let O = T.pathname || "/", D = O;
        if (b !== "/") {
            let j = b.replace(/^\//, "").split("/");
            D = "/" + O.replace(/^\//, "").split("/").slice(j.length).join("/");
        }
        let w = !s && c && c.matches && c.matches.length > 0 ? c.matches : em(u, {
            pathname: D
        });
        wt(R || w != null, `No routes matched location "${T.pathname}${T.search}${T.hash}" `), wt(w == null || w[w.length - 1].route.element !== void 0 || w[w.length - 1].route.Component !== void 0 || w[w.length - 1].route.lazy !== void 0, `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let z = Xg(w && w.map((j)=>Object.assign({}, j, {
                params: Object.assign({}, p, j.params),
                pathname: nl([
                    b,
                    o.encodeLocation ? o.encodeLocation(j.pathname).pathname : j.pathname
                ]),
                pathnameBase: j.pathnameBase === "/" ? b : nl([
                    b,
                    o.encodeLocation ? o.encodeLocation(j.pathnameBase).pathname : j.pathnameBase
                ])
            })), m, c, f);
        return r && z ? N.createElement(au.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    ...T
                },
                navigationType: "POP"
            }
        }, z) : z;
    }
    function Kg() {
        let u = Wg(), r = Ug(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, f = "rgba(200,200,200, 0.5)", o = {
            padding: "0.5rem",
            backgroundColor: f
        }, s = {
            padding: "2px 4px",
            backgroundColor: f
        }, m = null;
        return console.error("Error handled by React Router default ErrorBoundary:", u), m = N.createElement(N.Fragment, null, N.createElement("p", null, "💿 Hey developer 👋"), N.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", N.createElement("code", {
            style: s
        }, "ErrorBoundary"), " or", " ", N.createElement("code", {
            style: s
        }, "errorElement"), " prop on your route.")), N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), c ? N.createElement("pre", {
            style: o
        }, c) : null, m);
    }
    var Gg = N.createElement(Kg, null), Yg = class extends N.Component {
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
        static getDerivedStateFromProps(u, r) {
            return r.location !== u.location || r.revalidation !== "idle" && u.revalidation === "idle" ? {
                error: u.error,
                location: u.location,
                revalidation: u.revalidation
            } : {
                error: u.error !== void 0 ? u.error : r.error,
                location: r.location,
                revalidation: u.revalidation || r.revalidation
            };
        }
        componentDidCatch(u, r) {
            console.error("React Router caught the following error during render", u, r);
        }
        render() {
            return this.state.error !== void 0 ? N.createElement(ul.Provider, {
                value: this.props.routeContext
            }, N.createElement(Mf.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function Vg({ routeContext: u, match: r, children: c }) {
        let f = N.useContext(Zn);
        return f && f.static && f.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = r.route.id), N.createElement(ul.Provider, {
            value: u
        }, c);
    }
    function Xg(u, r = [], c = null, f = null) {
        if (u == null) {
            if (!c) return null;
            if (c.errors) u = c.matches;
            else if (r.length === 0 && !c.initialized && c.matches.length > 0) u = c.matches;
            else return null;
        }
        let o = u, s = c?.errors;
        if (s != null) {
            let p = o.findIndex((v)=>v.route.id && s?.[v.route.id] !== void 0);
            Me(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`), o = o.slice(0, Math.min(o.length, p + 1));
        }
        let m = !1, h = -1;
        if (c) for(let p = 0; p < o.length; p++){
            let v = o[p];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (h = p), v.route.id) {
                let { loaderData: b, errors: R } = c, S = v.route.loader && !b.hasOwnProperty(v.route.id) && (!R || R[v.route.id] === void 0);
                if (v.route.lazy || S) {
                    m = !0, h >= 0 ? o = o.slice(0, h + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((p, v, b)=>{
            let R, S = !1, T = null, O = null;
            c && (R = s && v.route.id ? s[v.route.id] : void 0, T = v.route.errorElement || Gg, m && (h < 0 && b === 0 ? (om("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), S = !0, O = null) : h === b && (S = !0, O = v.route.hydrateFallbackElement || null)));
            let D = r.concat(o.slice(0, b + 1)), w = ()=>{
                let z;
                return R ? z = T : S ? z = O : v.route.Component ? z = N.createElement(v.route.Component, null) : v.route.element ? z = v.route.element : z = p, N.createElement(Vg, {
                    match: v,
                    routeContext: {
                        outlet: p,
                        matches: D,
                        isDataRoute: c != null
                    },
                    children: z
                });
            };
            return c && (v.route.ErrorBoundary || v.route.errorElement || b === 0) ? N.createElement(Yg, {
                location: c.location,
                revalidation: c.revalidation,
                component: T,
                error: R,
                children: w(),
                routeContext: {
                    outlet: null,
                    matches: D,
                    isDataRoute: !0
                }
            }) : w();
        }, null);
    }
    function Cf(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Zg(u) {
        let r = N.useContext(Zn);
        return Me(r, Cf(u)), r;
    }
    function $g(u) {
        let r = N.useContext(Pi);
        return Me(r, Cf(u)), r;
    }
    function Jg(u) {
        let r = N.useContext(ul);
        return Me(r, Cf(u)), r;
    }
    function Df(u) {
        let r = Jg(u), c = r.matches[r.matches.length - 1];
        return Me(c.route.id, `${u} can only be used on routes that contain a unique "id"`), c.route.id;
    }
    function Fg() {
        return Df("useRouteId");
    }
    function Wg() {
        let u = N.useContext(Mf), r = $g("useRouteError"), c = Df("useRouteError");
        return u !== void 0 ? u : r.errors?.[c];
    }
    function Ig() {
        let { router: u } = Zg("useNavigate"), r = Df("useNavigate"), c = N.useRef(!1);
        return cm(()=>{
            c.current = !0;
        }), N.useCallback(async (o, s = {})=>{
            wt(c.current, rm), c.current && (typeof o == "number" ? u.navigate(o) : await u.navigate(o, {
                fromRouteId: r,
                ...s
            }));
        }, [
            u,
            r
        ]);
    }
    var fp = {};
    function om(u, r, c) {
        !r && !fp[u] && (fp[u] = !0, wt(!1, c));
    }
    N.memo(eb);
    function eb({ routes: u, future: r, state: c }) {
        return fm(u, void 0, c, r);
    }
    function eu(u) {
        Me(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function tb({ basename: u = "/", children: r = null, location: c, navigationType: f = "POP", navigator: o, static: s = !1 }) {
        Me(!uu(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let m = u.replace(/^\/*/, "/"), h = N.useMemo(()=>({
                basename: m,
                navigator: o,
                static: s,
                future: {}
            }), [
            m,
            o,
            s
        ]);
        typeof c == "string" && (c = un(c));
        let { pathname: p = "/", search: v = "", hash: b = "", state: R = null, key: S = "default" } = c, T = N.useMemo(()=>{
            let O = al(p, m);
            return O == null ? null : {
                location: {
                    pathname: O,
                    search: v,
                    hash: b,
                    state: R,
                    key: S
                },
                navigationType: f
            };
        }, [
            m,
            p,
            v,
            b,
            R,
            S,
            f
        ]);
        return wt(T != null, `<Router basename="${m}"> is not able to match the URL "${p}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`), T == null ? null : N.createElement(Lt.Provider, {
            value: h
        }, N.createElement(au.Provider, {
            children: r,
            value: T
        }));
    }
    function lb({ children: u, location: r }) {
        return Qg(bf(u), r);
    }
    function bf(u, r = []) {
        let c = [];
        return N.Children.forEach(u, (f, o)=>{
            if (!N.isValidElement(f)) return;
            let s = [
                ...r,
                o
            ];
            if (f.type === N.Fragment) {
                c.push.apply(c, bf(f.props.children, s));
                return;
            }
            Me(f.type === eu, `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Me(!f.props.index || !f.props.children, "An index route cannot have child routes.");
            let m = {
                id: f.props.id || s.join("-"),
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
            f.props.children && (m.children = bf(f.props.children, s)), c.push(m);
        }), c;
    }
    var Ci = "get", Di = "application/x-www-form-urlencoded";
    function qi(u) {
        return u != null && typeof u.tagName == "string";
    }
    function nb(u) {
        return qi(u) && u.tagName.toLowerCase() === "button";
    }
    function ab(u) {
        return qi(u) && u.tagName.toLowerCase() === "form";
    }
    function ub(u) {
        return qi(u) && u.tagName.toLowerCase() === "input";
    }
    function ib(u) {
        return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
    }
    function rb(u, r) {
        return u.button === 0 && (!r || r === "_self") && !ib(u);
    }
    var Ni = null;
    function cb() {
        if (Ni === null) try {
            new FormData(document.createElement("form"), 0), Ni = !1;
        } catch  {
            Ni = !0;
        }
        return Ni;
    }
    var fb = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function pf(u) {
        return u != null && !fb.has(u) ? (wt(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Di}"`), null) : u;
    }
    function ob(u, r) {
        let c, f, o, s, m;
        if (ab(u)) {
            let h = u.getAttribute("action");
            f = h ? al(h, r) : null, c = u.getAttribute("method") || Ci, o = pf(u.getAttribute("enctype")) || Di, s = new FormData(u);
        } else if (nb(u) || ub(u) && (u.type === "submit" || u.type === "image")) {
            let h = u.form;
            if (h == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let p = u.getAttribute("formaction") || h.getAttribute("action");
            if (f = p ? al(p, r) : null, c = u.getAttribute("formmethod") || h.getAttribute("method") || Ci, o = pf(u.getAttribute("formenctype")) || pf(h.getAttribute("enctype")) || Di, s = new FormData(h, u), !cb()) {
                let { name: v, type: b, value: R } = u;
                if (b === "image") {
                    let S = v ? `${v}.` : "";
                    s.append(`${S}x`, "0"), s.append(`${S}y`, "0");
                } else v && s.append(v, R);
            }
        } else {
            if (qi(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            c = Ci, f = null, o = Di, m = u;
        }
        return s && o === "text/plain" && (m = s, s = void 0), {
            action: f,
            method: c.toLowerCase(),
            encType: o,
            formData: s,
            body: m
        };
    }
    function Bf(u, r) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(r);
    }
    async function sb(u, r) {
        if (u.id in r) return r[u.id];
        try {
            let c = await import(u.module).then(async (m)=>{
                await m.__tla;
                return m;
            });
            return r[u.id] = c, c;
        } catch (c) {
            return console.error(`Error loading route module \`${u.module}\`, reloading page...`), console.error(c), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(()=>{});
        }
    }
    function db(u) {
        return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
    }
    async function hb(u, r, c) {
        let f = await Promise.all(u.map(async (o)=>{
            let s = r.routes[o.route.id];
            if (s) {
                let m = await sb(s, c);
                return m.links ? m.links() : [];
            }
            return [];
        }));
        return vb(f.flat(1).filter(db).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function op(u, r, c, f, o, s) {
        let m = (p, v)=>c[v] ? p.route.id !== c[v].route.id : !0, h = (p, v)=>c[v].pathname !== p.pathname || c[v].route.path?.endsWith("*") && c[v].params["*"] !== p.params["*"];
        return s === "assets" ? r.filter((p, v)=>m(p, v) || h(p, v)) : s === "data" ? r.filter((p, v)=>{
            let b = f.routes[p.route.id];
            if (!b || !b.hasLoader) return !1;
            if (m(p, v) || h(p, v)) return !0;
            if (p.route.shouldRevalidate) {
                let R = p.route.shouldRevalidate({
                    currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                    currentParams: c[0]?.params || {},
                    nextUrl: new URL(u, window.origin),
                    nextParams: p.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof R == "boolean") return R;
            }
            return !0;
        }) : [];
    }
    function pb(u, r, { includeHydrateFallback: c } = {}) {
        return mb(u.map((f)=>{
            let o = r.routes[f.route.id];
            if (!o) return [];
            let s = [
                o.module
            ];
            return o.clientActionModule && (s = s.concat(o.clientActionModule)), o.clientLoaderModule && (s = s.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (s = s.concat(o.hydrateFallbackModule)), o.imports && (s = s.concat(o.imports)), s;
        }).flat(1));
    }
    function mb(u) {
        return [
            ...new Set(u)
        ];
    }
    function yb(u) {
        let r = {}, c = Object.keys(u).sort();
        for (let f of c)r[f] = u[f];
        return r;
    }
    function vb(u, r) {
        let c = new Set;
        return new Set(r), u.reduce((f, o)=>{
            let s = JSON.stringify(yb(o));
            return c.has(s) || (c.add(s), f.push({
                key: s,
                link: o
            })), f;
        }, []);
    }
    function gb(u, r) {
        let c = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
        return c.pathname === "/" ? c.pathname = "_root.data" : r && al(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
    }
    function sm() {
        let u = N.useContext(Zn);
        return Bf(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
    }
    function bb() {
        let u = N.useContext(Pi);
        return Bf(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
    }
    var wf = N.createContext(void 0);
    wf.displayName = "FrameworkContext";
    function dm() {
        let u = N.useContext(wf);
        return Bf(u, "You must render this element inside a <HydratedRouter> element"), u;
    }
    function Sb(u, r) {
        let c = N.useContext(wf), [f, o] = N.useState(!1), [s, m] = N.useState(!1), { onFocus: h, onBlur: p, onMouseEnter: v, onMouseLeave: b, onTouchStart: R } = r, S = N.useRef(null);
        N.useEffect(()=>{
            if (u === "render" && m(!0), u === "viewport") {
                let D = (z)=>{
                    z.forEach((j)=>{
                        m(j.isIntersecting);
                    });
                }, w = new IntersectionObserver(D, {
                    threshold: .5
                });
                return S.current && w.observe(S.current), ()=>{
                    w.disconnect();
                };
            }
        }, [
            u
        ]), N.useEffect(()=>{
            if (f) {
                let D = setTimeout(()=>{
                    m(!0);
                }, 100);
                return ()=>{
                    clearTimeout(D);
                };
            }
        }, [
            f
        ]);
        let T = ()=>{
            o(!0);
        }, O = ()=>{
            o(!1), m(!1);
        };
        return c ? u !== "intent" ? [
            s,
            S,
            {}
        ] : [
            s,
            S,
            {
                onFocus: Fa(h, T),
                onBlur: Fa(p, O),
                onMouseEnter: Fa(v, T),
                onMouseLeave: Fa(b, O),
                onTouchStart: Fa(R, T)
            }
        ] : [
            !1,
            S,
            {}
        ];
    }
    function Fa(u, r) {
        return (c)=>{
            u && u(c), c.defaultPrevented || r(c);
        };
    }
    function Eb({ page: u, ...r }) {
        let { router: c } = sm(), f = N.useMemo(()=>em(c.routes, u, c.basename), [
            c.routes,
            u,
            c.basename
        ]);
        return f ? N.createElement(Rb, {
            page: u,
            matches: f,
            ...r
        }) : null;
    }
    function _b(u) {
        let { manifest: r, routeModules: c } = dm(), [f, o] = N.useState([]);
        return N.useEffect(()=>{
            let s = !1;
            return hb(u, r, c).then((m)=>{
                s || o(m);
            }), ()=>{
                s = !0;
            };
        }, [
            u,
            r,
            c
        ]), f;
    }
    function Rb({ page: u, matches: r, ...c }) {
        let f = rn(), { manifest: o, routeModules: s } = dm(), { basename: m } = sm(), { loaderData: h, matches: p } = bb(), v = N.useMemo(()=>op(u, r, p, o, f, "data"), [
            u,
            r,
            p,
            o,
            f
        ]), b = N.useMemo(()=>op(u, r, p, o, f, "assets"), [
            u,
            r,
            p,
            o,
            f
        ]), R = N.useMemo(()=>{
            if (u === f.pathname + f.search + f.hash) return [];
            let O = new Set, D = !1;
            if (r.forEach((z)=>{
                let j = o.routes[z.route.id];
                !j || !j.hasLoader || (!v.some((k)=>k.route.id === z.route.id) && z.route.id in h && s[z.route.id]?.shouldRevalidate || j.hasClientLoader ? D = !0 : O.add(z.route.id));
            }), O.size === 0) return [];
            let w = gb(u, m);
            return D && O.size > 0 && w.searchParams.set("_routes", r.filter((z)=>O.has(z.route.id)).map((z)=>z.route.id).join(",")), [
                w.pathname + w.search
            ];
        }, [
            m,
            h,
            f,
            o,
            v,
            r,
            u,
            s
        ]), S = N.useMemo(()=>pb(b, o), [
            b,
            o
        ]), T = _b(b);
        return N.createElement(N.Fragment, null, R.map((O)=>N.createElement("link", {
                key: O,
                rel: "prefetch",
                as: "fetch",
                href: O,
                ...c
            })), S.map((O)=>N.createElement("link", {
                key: O,
                rel: "modulepreload",
                href: O,
                ...c
            })), T.map(({ key: O, link: D })=>N.createElement("link", {
                key: O,
                ...D
            })));
    }
    function Tb(...u) {
        return (r)=>{
            u.forEach((c)=>{
                typeof c == "function" ? c(r) : c != null && (c.current = r);
            });
        };
    }
    var hm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        hm && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function Ab({ basename: u, children: r, window: c }) {
        let f = N.useRef();
        f.current == null && (f.current = hg({
            window: c,
            v5Compat: !0
        }));
        let o = f.current, [s, m] = N.useState({
            action: o.action,
            location: o.location
        }), h = N.useCallback((p)=>{
            N.startTransition(()=>m(p));
        }, [
            m
        ]);
        return N.useLayoutEffect(()=>o.listen(h), [
            o,
            h
        ]), N.createElement(tb, {
            basename: u,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: o
        });
    }
    var pm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, tu = N.forwardRef(function({ onClick: r, discover: c = "render", prefetch: f = "none", relative: o, reloadDocument: s, replace: m, state: h, target: p, to: v, preventScrollReset: b, viewTransition: R, ...S }, T) {
        let { basename: O } = N.useContext(Lt), D = typeof v == "string" && pm.test(v), w, z = !1;
        if (typeof v == "string" && D && (w = v, hm)) try {
            let ne = new URL(window.location.href), Ce = v.startsWith("//") ? new URL(ne.protocol + v) : new URL(v), je = al(Ce.pathname, O);
            Ce.origin === ne.origin && je != null ? v = je + Ce.search + Ce.hash : z = !0;
        } catch  {
            wt(!1, `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let j = kg(v, {
            relative: o
        }), [k, V, K] = Sb(f, S), W = Mb(v, {
            replace: m,
            state: h,
            target: p,
            preventScrollReset: b,
            relative: o,
            viewTransition: R
        });
        function $(ne) {
            r && r(ne), ne.defaultPrevented || W(ne);
        }
        let J = N.createElement("a", {
            ...S,
            ...K,
            href: w || j,
            onClick: z || s ? r : $,
            ref: Tb(T, V),
            target: p,
            "data-discover": !D && c === "render" ? "true" : void 0
        });
        return k && !D ? N.createElement(N.Fragment, null, J, N.createElement(Eb, {
            page: j
        })) : J;
    });
    tu.displayName = "Link";
    var Ob = N.forwardRef(function({ "aria-current": r = "page", caseSensitive: c = !1, className: f = "", end: o = !1, style: s, to: m, viewTransition: h, children: p, ...v }, b) {
        let R = iu(m, {
            relative: v.relative
        }), S = rn(), T = N.useContext(Pi), { navigator: O, basename: D } = N.useContext(Lt), w = T != null && zb(R) && h === !0, z = O.encodeLocation ? O.encodeLocation(R).pathname : R.pathname, j = S.pathname, k = T && T.navigation && T.navigation.location ? T.navigation.location.pathname : null;
        c || (j = j.toLowerCase(), k = k ? k.toLowerCase() : null, z = z.toLowerCase()), k && D && (k = al(k, D) || k);
        const V = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
        let K = j === z || !o && j.startsWith(z) && j.charAt(V) === "/", W = k != null && (k === z || !o && k.startsWith(z) && k.charAt(z.length) === "/"), $ = {
            isActive: K,
            isPending: W,
            isTransitioning: w
        }, J = K ? r : void 0, ne;
        typeof f == "function" ? ne = f($) : ne = [
            f,
            K ? "active" : null,
            W ? "pending" : null,
            w ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let Ce = typeof s == "function" ? s($) : s;
        return N.createElement(tu, {
            ...v,
            "aria-current": J,
            className: ne,
            ref: b,
            style: Ce,
            to: m,
            viewTransition: h
        }, typeof p == "function" ? p($) : p);
    });
    Ob.displayName = "NavLink";
    var Nb = N.forwardRef(({ discover: u = "render", fetcherKey: r, navigate: c, reloadDocument: f, replace: o, state: s, method: m = Ci, action: h, onSubmit: p, relative: v, preventScrollReset: b, viewTransition: R, ...S }, T)=>{
        let O = Bb(), D = wb(h, {
            relative: v
        }), w = m.toLowerCase() === "get" ? "get" : "post", z = typeof h == "string" && pm.test(h), j = (k)=>{
            if (p && p(k), k.defaultPrevented) return;
            k.preventDefault();
            let V = k.nativeEvent.submitter, K = V?.getAttribute("formmethod") || m;
            O(V || k.currentTarget, {
                fetcherKey: r,
                method: K,
                navigate: c,
                replace: o,
                state: s,
                relative: v,
                preventScrollReset: b,
                viewTransition: R
            });
        };
        return N.createElement("form", {
            ref: T,
            method: w,
            action: D,
            onSubmit: f ? p : j,
            ...S,
            "data-discover": !z && u === "render" ? "true" : void 0
        });
    });
    Nb.displayName = "Form";
    function xb(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function mm(u) {
        let r = N.useContext(Zn);
        return Me(r, xb(u)), r;
    }
    function Mb(u, { target: r, replace: c, state: f, preventScrollReset: o, relative: s, viewTransition: m } = {}) {
        let h = Lg(), p = rn(), v = iu(u, {
            relative: s
        });
        return N.useCallback((b)=>{
            if (rb(b, r)) {
                b.preventDefault();
                let R = c !== void 0 ? c : nu(p) === nu(v);
                h(u, {
                    replace: R,
                    state: f,
                    preventScrollReset: o,
                    relative: s,
                    viewTransition: m
                });
            }
        }, [
            p,
            h,
            v,
            c,
            f,
            r,
            u,
            o,
            s,
            m
        ]);
    }
    var Cb = 0, Db = ()=>`__${String(++Cb)}__`;
    function Bb() {
        let { router: u } = mm("useSubmit"), { basename: r } = N.useContext(Lt), c = Fg();
        return N.useCallback(async (f, o = {})=>{
            let { action: s, method: m, encType: h, formData: p, body: v } = ob(f, r);
            if (o.navigate === !1) {
                let b = o.fetcherKey || Db();
                await u.fetch(b, c, o.action || s, {
                    preventScrollReset: o.preventScrollReset,
                    formData: p,
                    body: v,
                    formMethod: o.method || m,
                    formEncType: o.encType || h,
                    flushSync: o.flushSync
                });
            } else await u.navigate(o.action || s, {
                preventScrollReset: o.preventScrollReset,
                formData: p,
                body: v,
                formMethod: o.method || m,
                formEncType: o.encType || h,
                replace: o.replace,
                state: o.state,
                fromRouteId: c,
                flushSync: o.flushSync,
                viewTransition: o.viewTransition
            });
        }, [
            u,
            r,
            c
        ]);
    }
    function wb(u, { relative: r } = {}) {
        let { basename: c } = N.useContext(Lt), f = N.useContext(ul);
        Me(f, "useFormAction must be used inside a RouteContext");
        let [o] = f.matches.slice(-1), s = {
            ...iu(u || ".", {
                relative: r
            })
        }, m = rn();
        if (u == null) {
            s.search = m.search;
            let h = new URLSearchParams(s.search), p = h.getAll("index");
            if (p.some((b)=>b === "")) {
                h.delete("index"), p.filter((R)=>R).forEach((R)=>h.append("index", R));
                let b = h.toString();
                s.search = b ? `?${b}` : "";
            }
        }
        return (!u || u === ".") && o.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (s.pathname = s.pathname === "/" ? c : nl([
            c,
            s.pathname
        ])), nu(s);
    }
    function zb(u, r = {}) {
        let c = N.useContext(im);
        Me(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: f } = mm("useViewTransitionState"), o = iu(u, {
            relative: r.relative
        });
        if (!c.isTransitioning) return !1;
        let s = al(c.currentLocation.pathname, f) || c.currentLocation.pathname, m = al(c.nextLocation.pathname, f) || c.nextLocation.pathname;
        return zi(o.pathname, m) != null || zi(o.pathname, s) != null;
    }
    new TextEncoder;
    const Ub = N.createContext(), Pb = ({ children: u })=>{
        const r = (b, R)=>{
            const S = localStorage.getItem(b);
            return S !== null ? JSON.parse(S) : R;
        }, [c, f] = N.useState(()=>r(_e.THEME_KEY, _e.THEME)), [o, s] = N.useState(()=>r(_e.ENABLE_SOUND_KEY, _e.ENABLE_SOUND)), [m, h] = N.useState(()=>r(_e.TIMER_DURATION_KEY, _e.TIMER_DURATION)), [p, v] = N.useState(()=>r(_e.IS_FLIPPED_KEY, _e.IS_FLIPPED));
        return N.useEffect(()=>localStorage.setItem(_e.THEME_KEY, JSON.stringify(c)), [
            c
        ]), N.useEffect(()=>localStorage.setItem(_e.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), N.useEffect(()=>localStorage.setItem(_e.TIMER_DURATION_KEY, JSON.stringify(m)), [
            m
        ]), N.useEffect(()=>localStorage.setItem(_e.IS_FLIPPED_KEY, JSON.stringify(p)), [
            p
        ]), Q.jsx(Ub.Provider, {
            value: {
                theme: c,
                setTheme: f,
                enableSound: o,
                setEnableSound: s,
                timerDuration: m,
                setTimerDuration: h,
                isFlipped: p,
                setIsFlipped: v
            },
            children: u
        });
    };
    qb = function(u, r = "lite", c = 8e3) {
        const f = N.useRef(null), o = N.useRef(null), s = N.useRef(null), m = N.useRef(null), h = N.useRef(!1), p = N.useRef([]), v = N.useRef(!0), b = N.useRef(!1), R = N.useRef(!1), S = N.useCallback(()=>{
            if (!(b.current || !f.current)) {
                for(b.current = !0; p.current.length > 0;){
                    const $ = p.current.findIndex((ne)=>ne.type === "stop"), J = $ >= 0 ? p.current.splice($, 1)[0] : p.current.shift();
                    J && f.current.postMessage(J.cmd);
                }
                b.current = !1;
            }
        }, []), T = N.useCallback(($, J)=>{
            p.current.push({
                type: $,
                cmd: J
            }), S();
        }, [
            S
        ]), O = N.useCallback(()=>{
            f.current || (r === "lite" ? f.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : f.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), f.current.postMessage("uci"), console.log("Initializing worker ..."), f.current.onmessage = ($)=>{
                const J = $.data;
                if (u && u(J), typeof J == "string") {
                    if (J === "readyok" || J.startsWith("bestmove")) v.current = !0;
                    else if (J.startsWith("info") && J.includes("score")) {
                        const ne = J.match(/score (cp|mate) (-?\d+)/);
                        if (ne) {
                            const Ce = ne[1], je = parseInt(ne[2], 10), Ue = Ce === "cp" ? je / 100 : je > 0 ? 10 : -10;
                            o.current && (o.current(Ue), o.current = null);
                        }
                    }
                }
            }, f.current.onerror = ($)=>{
                console.error("Error with Stockfish worker:", $);
            });
        }, [
            u,
            r
        ]), D = N.useCallback(()=>{
            f.current && f.current.terminate(), r === "lite" ? f.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : f.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), f.current.postMessage("uci"), f.current.onmessage = ($)=>{
                const J = $.data;
                if (u && u(J), typeof J == "string") {
                    if (J === "readyok" || J.startsWith("bestmove")) v.current = !0;
                    else if (J.startsWith("info") && J.includes("score")) {
                        const ne = J.match(/score (cp|mate) (-?\d+)/);
                        if (ne) {
                            const Ce = ne[1], je = parseInt(ne[2], 10), Ue = Ce === "cp" ? je / 100 : je > 0 ? 10 : -10;
                            o.current && (o.current(Ue), o.current = null);
                        }
                    }
                }
            }, f.current.onerror = ($)=>{
                console.error("Error with Stockfish worker:", $);
            };
        }, [
            u,
            r
        ]), w = N.useCallback(($)=>{
            f.current && T("normal", $);
        }, []), z = N.useCallback(($)=>{
            $.forEach((J)=>{
                T("normal", `setoption name ${J.name} value ${J.value}`);
            });
        }, [
            w
        ]), j = N.useCallback(($, J = [])=>{
            let ne = `position fen ${$}`;
            if (J.length > 0) {
                const Ce = J.join(" ");
                ne += ` moves ${Ce}`;
            }
            T("normal", ne);
        }, [
            w
        ]), k = N.useCallback(($)=>{
            f.current && h.current && (T("stop", "stop"), h.current = !1, s.current && (clearTimeout(s.current), s.current = null));
        }, []), V = N.useCallback(($)=>{
            if (!R.current) {
                console.warn("Engine disabled. Search not started.");
                return;
            }
            f.current || O(), clearTimeout(s.current), k("pre startSearch"), m.current && clearTimeout(m.current), m.current = setTimeout(()=>{
                h.current = !0, T("normal", `position fen ${$}`), T("normal", "go infinite"), s.current = setTimeout(()=>{
                    k("startSearch timer expire");
                }, c);
            }, 50);
        }, [
            c,
            k
        ]), K = N.useCallback(()=>{
            f.current && (f.current.terminate(), f.current = null), h.current = !1, v.current = !0, s.current && (clearTimeout(s.current), s.current = null);
        }, []), W = N.useCallback(($)=>{
            $ ? console.log("Permission granted: engine allowed to start if needed") : (console.log("Permission revoked: stopping engine"), k("permission revoked"), K());
        }, [
            k,
            K
        ]);
        return N.useEffect(()=>()=>{
                K();
            }, []), {
            initEngine: D,
            setOptions: z,
            setFen: j,
            startSearch: V,
            stopSearch: k,
            terminateEngine: K,
            syncEnabledState: W
        };
    };
    let ym, Hb, Lb, Sf, vm;
    ym = N.createContext();
    O2 = ()=>N.useContext(ym);
    Hb = ({ children: u })=>{
        const r = N.useRef(null), c = N.useCallback((s)=>{
            r.current && r.current(s);
        }, []), f = qb(c), o = N.useCallback((s)=>{
            r.current = s;
        }, []);
        return Q.jsx(ym.Provider, {
            value: {
                ...f,
                setOnMessage: o
            },
            children: u
        });
    };
    kb = ()=>{
        const [u, r] = N.useState(document.body.classList.contains("dark-theme")), c = ()=>{
            document.body.classList.toggle("dark-theme"), r(!u);
        }, f = ()=>{
            const s = new Date().getHours();
            return s < 6 || s > 18;
        };
        return N.useEffect(()=>{
            f() != u && c();
        }, []), Q.jsx("button", {
            onClick: c,
            className: "theme-toggle-btn",
            children: u ? "☀️" : "🌙"
        });
    };
    Lb = nn.memo(({ onSubmit: u })=>{
        const [r, c] = N.useState(!1), [f, o] = N.useState(""), s = ()=>c(!0), m = ()=>{
            c(!1), o("");
        }, h = (v)=>{
            v.target.classList.contains("fen-popup-overlay") && m();
        }, p = (v)=>{
            v.preventDefault(), u(f), m();
        };
        return Q.jsxs(Q.Fragment, {
            children: [
                Q.jsx("button", {
                    className: "action-button",
                    onClick: s,
                    children: "Set FEN"
                }),
                r && Q.jsx("div", {
                    className: "fen-popup-overlay",
                    onClick: h,
                    children: Q.jsxs("div", {
                        className: "fen-popup",
                        children: [
                            Q.jsx("h5", {
                                children: "Setup board from FEN "
                            }),
                            Q.jsx("button", {
                                className: "fen-close",
                                onClick: m,
                                children: "×"
                            }),
                            Q.jsxs("form", {
                                onSubmit: p,
                                className: "fen-input-form",
                                children: [
                                    Q.jsx("input", {
                                        type: "text",
                                        value: f,
                                        onChange: (v)=>o(v.target.value),
                                        placeholder: "Enter FEN",
                                        className: "fen-input"
                                    }),
                                    Q.jsx("div", {
                                        className: "fen-actions",
                                        children: Q.jsx("button", {
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
    Sf = new Set;
    vm = {
        current: ""
    };
    function jb(u) {
        vm.current = u, Sf.forEach((r)=>r(u));
    }
    function Qb() {
        const [u, r] = N.useState(vm.current);
        return N.useEffect(()=>{
            const c = (f)=>r(f);
            return Sf.add(c), ()=>{
                Sf.delete(c);
            };
        }, []), u;
    }
    function Kb({ component: u, message: r }) {
        const [c, f] = N.useState(!1), o = ()=>{
            f(!0), setTimeout(()=>f(!1), 2e3);
        };
        return Q.jsxs("div", {
            className: "toast-wrapper",
            children: [
                Q.jsx("button", {
                    onClick: o,
                    className: "toast-button",
                    children: u
                }),
                c && Q.jsx("div", {
                    className: "toast-message",
                    children: r
                })
            ]
        });
    }
    const Gb = nn.memo(({ isValid: u, fenErrorMsg: r })=>{
        const c = Qb(), f = ()=>{
            navigator.clipboard.writeText(c), alert("FEN copied to clipboard!");
        };
        return Q.jsxs("div", {
            className: "fen-container",
            children: [
                Q.jsx("div", {
                    id: "fen-display",
                    className: "fen-display",
                    children: c
                }),
                u ? Q.jsx("div", {
                    className: "circle-tick",
                    children: "✔"
                }) : Q.jsx(Kb, {
                    component: Q.jsx("div", {
                        className: "circle-cross",
                        children: "✖"
                    }),
                    message: r
                }),
                Q.jsx("button", {
                    onClick: f,
                    className: "copy-button",
                    children: Q.jsxs("svg", {
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
                            Q.jsx("rect", {
                                x: "3",
                                y: "3",
                                width: "14",
                                height: "14",
                                rx: "2",
                                ry: "2",
                                fill: "#f5f5f5",
                                stroke: "#333333"
                            }),
                            Q.jsx("rect", {
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
        const f = c[2], o = c[0].split("/");
        if (o.length == 0) return {
            isValid: !1,
            msg: ""
        };
        let s = 0, m = 0;
        const h = new Map([]);
        for(let S = 0; S < 8; S++){
            const T = o[S];
            let O = 0;
            for(let D = 0; D < T.length; D++){
                const w = Number(T[D]);
                switch(O += isNaN(w) ? 1 : w, T[D]){
                    case "k":
                        S === 0 && O === 5 && h.set("e8", T[D]), s += 1;
                        break;
                    case "K":
                        S === 7 && O === 5 && h.set("e1", T[D]), m += 1;
                        break;
                    case "p":
                        if (S === 0 || S === 7) return {
                            isValid: !1,
                            msg: "pawn can not exist on last rank or first rank."
                        };
                        break;
                    case "P":
                        if (S === 0 || S === 7) return {
                            isValid: !1,
                            msg: "pawn can not exist on last rank or first rank."
                        };
                        break;
                    case "r":
                        S === 0 && D === 0 ? h.set("a8", T[D]) : S === 0 && D === T.length - 1 && h.set("h8", T[D]);
                        break;
                    case "R":
                        S === 7 && D === 0 ? h.set("a1", T[D]) : S === 7 && D === T.length - 1 && h.set("h1", T[D]);
                        break;
                }
            }
        }
        if (s !== 1) return {
            isValid: !1,
            msg: "There should be exactly one black king."
        };
        if (m !== 1) return {
            isValid: !1,
            msg: "There should be exactly one white king."
        };
        for(let S = 0; S < f.length; S++)switch(f[S]){
            case "K":
                if (!h.has("e1") || h.get("e1") !== "K") return {
                    isValid: !1,
                    msg: "white castling is not possible, king is not at e1."
                };
                if (!h.has("h1") || h.get("h1") !== "R") return {
                    isValid: !1,
                    msg: "white short castling is not possible, rook is not at h1"
                };
                break;
            case "Q":
                if (!h.has("e1") || h.get("e1") !== "K") return {
                    isValid: !1,
                    msg: "white castling is not possible, king is not at e1."
                };
                if (!h.has("a1") || h.get("a1") !== "R") return {
                    isValid: !1,
                    msg: "white long castling is not possible, rook is not at a1"
                };
                break;
            case "k":
                if (!h.has("e8") || h.get("e8") !== "k") return {
                    isValid: !1,
                    msg: "black castling is not possible, king is not at e8."
                };
                if (!h.has("h8") || h.get("h8") !== "r") return {
                    isValid: !1,
                    msg: "black short castling is not possible, rook is not at h8"
                };
                break;
            case "q":
                if (!h.has("e8") || h.get("e8") !== "k") return {
                    isValid: !1,
                    msg: "black castling is not possible, king is not at e8."
                };
                if (!h.has("a8") || h.get("a8") !== "r") return {
                    isValid: !1,
                    msg: "black long castling is not possible, rook is not at a8"
                };
                break;
        }
        const p = c[1], v = Vb(u);
        return new Of(v).inCheck() ? {
            isValid: !1,
            msg: `${p === "w" ? "white" : "black"} to move but ${p === "w" ? "black" : "white"} was already in check and did not defend king`
        } : {
            isValid: !0,
            msg: ""
        };
    };
    function Vb(u) {
        const r = u.split(" ");
        return r[1] = r[1] === "w" ? "b" : "w", r.join(" ");
    }
    const gm = (u, r)=>{
        u.dataTransfer.setData("text", r);
    }, Xb = (u, r, c, f)=>{
        r != null && c == null && f({
            category: _e.BOARD_PIECE,
            id: `${u}-${r.color}-${r.type}`,
            chessPiece: r
        });
    }, Zb = ({ newSelectedItem: u, selectedItem: r, setSelectedItem: c })=>{
        if (r == null) {
            c(u);
            return;
        }
        if (u.id === r.id) {
            c(null);
            return;
        }
        r.category === _e.BOARD_PIECE ? u.category === _e.PALLETE_ITEM && c(u) : r.category === _e.PALLETE_ITEM && u.category === _e.PALLETE_ITEM && c(u);
    }, sp = {
        category: _e.PALLETE_ITEM,
        id: _e.ERASER_ID,
        chessPiece: null
    }, $b = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    }, Jb = nn.memo(({ handleDragStart: u, handlePaletteClick: r })=>{
        const c = [
            "p",
            "r",
            "n",
            "b",
            "q",
            "k"
        ], f = [
            "w",
            "b"
        ], o = an((h)=>h.boardeditor.selectedItem), s = Xn(), m = (h)=>{
            s(xf(h));
        };
        return Q.jsxs("div", {
            className: "palette",
            children: [
                f.map((h)=>c.map((p)=>Q.jsx("img", {
                            id: `palette-${h}-${p}`,
                            src: `pieces/svg/${h}_${$b[p]}.svg`,
                            alt: `${h} ${p}`,
                            draggable: !0,
                            "data-type": p,
                            "data-color": h,
                            "data-square": "palette",
                            onClick: ()=>{
                                r({
                                    newSelectedItem: {
                                        category: _e.PALLETE_ITEM,
                                        id: `p-${h}-${p}`,
                                        chessPiece: {
                                            type: p,
                                            color: h
                                        }
                                    },
                                    selectedItem: o,
                                    setSelectedItem: m
                                });
                            },
                            onDragStart: (v)=>u(v, `palette-${h}-${p}`),
                            className: `palette-piece ${o?.id === `p-${h}-${p.toLowerCase()}` ? "selected" : ""}`,
                            style: {
                                order: h == "w" ? c.indexOf(p) : c.indexOf(p) + 7
                            }
                        }, `${h}-${p}`))),
                Q.jsx("img", {
                    "data-square": "palette",
                    src: "assets/eraser.svg",
                    style: {
                        order: 6
                    },
                    onClick: ()=>{
                        r({
                            newSelectedItem: sp,
                            selectedItem: o,
                            setSelectedItem: m
                        });
                    },
                    className: `palette-piece eraser ${o?.id === sp.id ? "selected" : ""}`
                })
            ]
        });
    }), Fb = (u, r)=>{
        let c = "", f = 0;
        for(let o = 0; o < 8; o++){
            const s = u[r[o]];
            s == null && f++, s != null ? (f > 0 && (c += `${f}`), f = 0, c += s.color === "w" ? s.type?.toUpperCase() : s.type) : o == 7 && f > 0 && (c += `${f}`);
        }
        return c;
    }, Wb = ({ board: u, playerToMove: r, halfmoveClock: c = 0, fullmoveNumber: f = 1, whiteKingSide: o, whiteQueenSide: s, blackKingSide: m, blackQueenSide: h })=>{
        const p = "-";
        let v = "";
        const b = (o ? "K" : "") + (s ? "Q" : "") + (m ? "k" : "") + (h ? "q" : ""), R = Dp.map((S)=>Fb(u, S));
        return v += R.join("/"), v += ` ${r} ${b === "" ? "-" : b} ${p} ${c} ${f}`, v;
    }, Ib = (u)=>{
        u.preventDefault();
    }, e2 = ({ squareId: u, squarePiece: r, selectedItem: c, setSelectedItem: f, removePiece: o, putPiece: s, makeMove: m })=>{
        if (!c) {
            r != null && f({
                category: _e.BOARD_PIECE,
                id: `${u}-${r.color}-${r.type}`,
                chessPiece: r
            });
            return;
        }
        if (r != null && c.id === `${u}-${r.color}-${r.type}`) {
            f(null);
            return;
        }
        if (c.id === _e.ERASER_ID) {
            o(u);
            return;
        }
        if (c.chessPiece == null) {
            console.error("Error: selectedItem chessPiece is null and its not eraser", c);
            return;
        }
        if (c.category === _e.PALLETE_ITEM) {
            s(u, c.chessPiece);
            return;
        }
        if (c.category === _e.BOARD_PIECE) {
            const h = c.id.split("-")[0];
            m(h, u), f(null);
        }
    }, t2 = (u, r, c)=>{
        u.preventDefault();
        const f = u.dataTransfer.getData("text"), o = document.getElementById(f);
        if (!o) return;
        const s = o.dataset.square;
        c(s, r);
    }, l2 = nn.memo(({ piece: u, squareId: r, handleDragStart: c, handleBoardPieceClick: f })=>{
        const o = an((p)=>p.boardeditor.selectedItem), s = Xn();
        if (u == null || u === void 0 || !r || r === "" || !u.type) return null;
        const m = (p)=>{
            s(xf(p));
        }, h = {
            p: "pawn",
            n: "knight",
            b: "bishop",
            r: "rook",
            q: "queen",
            k: "king"
        };
        return Q.jsx("img", {
            className: `pieceimg ${o != null && o?.id === `${r}-${u.color}-${u.type}` ? "selected" : ""}`,
            id: `${r}-${u.color}-${u.type.toLowerCase()}`,
            src: `pieces/svg/${u.color}_${h[u.type]}.svg`,
            alt: `${u.color} ${u.type}`,
            draggable: !0,
            "data-type": u.type,
            "data-color": u.color,
            "data-square": r,
            onDragStart: (p)=>c(p, `${r}-${u.color}-${u.type}`),
            onClick: ()=>f(r, u, o, m)
        }, r);
    }), n2 = (u)=>{
        const r = u[0].charCodeAt(0) - 97, c = u[1].charCodeAt(0) - 49;
        return (r + c) % 2 === 0 ? "dark" : "light";
    }, a2 = nn.memo(({ showRankLabel: u, showFileLabel: r, squareId: c, squarePiece: f, handleSquareClick: o, handleDrop: s, allowDrop: m, handleDragStart: h, handleBoardPieceClick: p })=>{
        const v = an((D)=>D.boardeditor.selectedItem), b = Xn(), R = (D)=>{
            b(xf(D));
        }, S = (D)=>{
            b(eg(D));
        }, T = (D, w)=>{
            b(Iv(D, w));
        }, O = (D, w)=>{
            b(tg(D, w));
        };
        return Q.jsxs("div", {
            id: c,
            className: `square ${n2(c)}`,
            onDragOver: m,
            onClick: ()=>o({
                    squareId: c,
                    squarePiece: f,
                    selectedItem: v,
                    setSelectedItem: R,
                    removePiece: S,
                    putPiece: T,
                    makeMove: O
                }),
            onDrop: (D)=>s(D, c, O),
            children: [
                u && Q.jsx("div", {
                    className: "rank-label",
                    children: c[1]
                }),
                r && Q.jsx("div", {
                    className: "file-label",
                    children: c[0]
                }),
                f && Q.jsx(l2, {
                    piece: f,
                    squareId: c,
                    handleDragStart: h,
                    handleBoardPieceClick: p
                })
            ]
        });
    }), u2 = nn.memo(({ isFlipped: u })=>{
        const r = u ? Bv : Dp, c = an((f)=>f.boardeditor.board);
        return Q.jsx("div", {
            id: "chessboard",
            children: r.map((f, o)=>f.map((s, m)=>Q.jsx(a2, {
                        showRankLabel: m === 0,
                        showFileLabel: o === 7,
                        squareId: s,
                        squarePiece: c[s],
                        handleSquareClick: e2,
                        handleDrop: t2,
                        allowDrop: Ib,
                        handleDragStart: gm,
                        handleBoardPieceClick: Xb
                    }, s)))
        });
    }), i2 = ({ labelText: u, toggle: r, handleToggle: c })=>Q.jsxs("div", {
            className: "toggle-container",
            children: [
                Q.jsx("span", {
                    className: "toggle-label",
                    children: u
                }),
                Q.jsxs("label", {
                    className: "switch",
                    children: [
                        Q.jsx("input", {
                            type: "checkbox",
                            checked: r,
                            onChange: c
                        }),
                        Q.jsx("span", {
                            className: "slider"
                        })
                    ]
                })
            ]
        }), bm = (u)=>u.boardeditor, r2 = Rf([
        bm
    ], (u)=>({
            board: u.board,
            isFlipped: u.isFlipped,
            playerToMove: u.playerToMove,
            castlingFlags: u.castlingFlags
        })), Sm = Rf([
        bm
    ], (u)=>({
            playerToMove: u.playerToMove,
            castlingFlags: u.castlingFlags
        }));
    function c2() {
        const { playerToMove: u, castlingFlags: r } = an(Sm), c = Xn();
        return Q.jsxs("div", {
            className: "move-toggle",
            children: [
                Q.jsx("button", {
                    className: `move-option ${u === "w" ? "active" : ""}`,
                    onClick: ()=>c(lp("w")),
                    children: "White"
                }),
                Q.jsx("button", {
                    className: `move-option ${u === "b" ? "active" : ""}`,
                    onClick: ()=>c(lp("b")),
                    children: "Black"
                })
            ]
        });
    }
    const f2 = nn.memo(({ messages: u, isValid: r })=>Q.jsxs("div", {
            className: "notice-board",
            children: [
                Q.jsxs("div", {
                    className: `notice-header ${r ? "legal" : "isIllegal"}`,
                    children: [
                        "Board setup is ",
                        r ? "" : "not",
                        " valid."
                    ]
                }),
                u.map((c)=>c.text != null && c.text !== "" && Q.jsx("div", {
                        className: `message ${c.type}`,
                        children: c.text
                    }, c.text))
            ]
        })), o2 = ({ isValidFen: u, fenErrorMsg: r })=>{
        const { playerToMove: c, castlingFlags: f } = an(Sm), o = Xn(), s = [
            {
                flag: "K",
                label: "White King-Side",
                state: f.K
            },
            {
                flag: "Q",
                label: "White Queen-Side",
                state: f.Q
            },
            {
                flag: "k",
                label: "Black King-Side",
                state: f.k
            },
            {
                flag: "q",
                label: "Black Queen-Side",
                state: f.q
            }
        ];
        return Q.jsxs("div", {
            className: "castling",
            children: [
                Q.jsxs("div", {
                    className: "toggle-container",
                    children: [
                        Q.jsx("span", {
                            children: "To Move : "
                        }),
                        Q.jsx(c2, {})
                    ]
                }),
                s.map(({ flag: m, label: h, state: p })=>Q.jsx(i2, {
                        labelText: h,
                        toggle: p,
                        handleToggle: ()=>{
                            o(lg(m));
                        }
                    }, h)),
                Q.jsx(f2, {
                    messages: [
                        {
                            type: u ? "ok" : "error",
                            text: r
                        }
                    ],
                    isValid: u
                })
            ]
        });
    }, dp = ()=>{
        const { board: u, isFlipped: r, playerToMove: c, castlingFlags: f } = an(r2), [o, s] = N.useState(!1), [m, h] = N.useState(""), p = Xn();
        N.useEffect(()=>{
            b();
        }, []);
        const v = ()=>{
            p(tp()), p(Jv());
        }, b = ()=>{
            p(tp()), p($v());
        }, R = N.useCallback((T)=>{
            p(Wv(T));
        }, [
            p
        ]), S = N.useCallback((T = 0, O = 1)=>Wb({
                board: u,
                playerToMove: c,
                whiteKingSide: f.K,
                whiteQueenSide: f.Q,
                blackKingSide: f.k,
                blackQueenSide: f.q,
                halfmoveClock: T,
                fullmoveNumber: O
            }), [
            u,
            c,
            f.K,
            f.k,
            f.Q,
            f.q
        ]);
        return N.useEffect(()=>{
            const T = S(), { isValid: O, msg: D } = Yb(T);
            s((w)=>w !== O ? O : w), h((w)=>w !== D ? D : w), jb(T);
        }, [
            S,
            u
        ]), Q.jsxs("div", {
            className: "main-container",
            children: [
                Q.jsx("div", {
                    className: "top-container",
                    children: Q.jsxs("nav", {
                        className: "top-bar",
                        children: [
                            Q.jsx("button", {
                                onClick: v,
                                className: "action-button",
                                children: "Clear"
                            }),
                            Q.jsx("button", {
                                onClick: b,
                                className: "action-button",
                                children: "Reset"
                            }),
                            Q.jsx("button", {
                                onClick: ()=>{
                                    p(Fv());
                                },
                                className: "action-button",
                                children: "Flip"
                            }),
                            Q.jsx(Lb, {
                                onSubmit: R
                            }),
                            Q.jsx(kb, {})
                        ]
                    })
                }),
                Q.jsxs("div", {
                    className: "middle-container",
                    children: [
                        Q.jsx("div", {
                            className: "left-menu-bar"
                        }),
                        Q.jsxs("div", {
                            className: "fen-chessboard-container",
                            children: [
                                Q.jsx(Gb, {
                                    isValid: o,
                                    fenErrorMsg: m
                                }),
                                Q.jsxs("div", {
                                    className: "chessboard-container",
                                    children: [
                                        Q.jsx(u2, {
                                            isFlipped: r
                                        }),
                                        Q.jsx(Jb, {
                                            handleDragStart: gm,
                                            handlePaletteClick: Zb
                                        }),
                                        Q.jsx(o2, {
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
        });
    }, s2 = N.lazy(()=>Ip(()=>import("./ChessGame-C-F5eEiQ.js"), __vite__mapDeps([0,1,2,3]))), d2 = N.lazy(()=>Ip(()=>import("./AnalysisGame-sXQ07ZYD.js"), __vite__mapDeps([4,1,2,5]))), h2 = ()=>Q.jsx(Pb, {
            children: Q.jsxs(Ab, {
                children: [
                    Q.jsxs("nav", {
                        className: "routes",
                        children: [
                            Q.jsx(tu, {
                                to: "/boardeditor",
                                className: "action-button no-decoration",
                                children: "Chess Position Editor"
                            }),
                            Q.jsx(tu, {
                                to: "/analysis",
                                className: "action-button no-decoration",
                                children: "Analyse Game"
                            }),
                            Q.jsx(tu, {
                                to: "/gameplay",
                                className: "action-button no-decoration",
                                children: "Play Game"
                            })
                        ]
                    }),
                    Q.jsx(N.Suspense, {
                        fallback: Q.jsx("div", {
                            className: "loading-screen",
                            children: "Loading..."
                        }),
                        children: Q.jsxs(lb, {
                            children: [
                                Q.jsx(eu, {
                                    path: "/analysis",
                                    element: Q.jsx(Hb, {
                                        children: Q.jsx(d2, {})
                                    })
                                }),
                                Q.jsx(eu, {
                                    path: "/gameplay",
                                    element: Q.jsx(s2, {})
                                }),
                                Q.jsx(eu, {
                                    path: "/boardeditor",
                                    element: Q.jsx(dp, {})
                                }),
                                Q.jsx(eu, {
                                    path: "*",
                                    element: Q.jsx(dp, {})
                                }),
                                " "
                            ]
                        })
                    })
                ]
            })
        });
    W1.createRoot(document.getElementById("root")).render(Q.jsx(my, {
        store: Wp,
        children: Q.jsx(h2, {})
    }));
})();
export { Of as C, kb as D, nn as R, an as a, m2 as b, _e as c, S2 as d, R2 as e, v2 as f, A2 as g, qb as h, O2 as i, Q as j, hp as k, T2 as l, p2 as m, _2 as n, Wp as o, E2 as p, g2 as q, N as r, y2 as s, b2 as t, Xn as u, __tla };
