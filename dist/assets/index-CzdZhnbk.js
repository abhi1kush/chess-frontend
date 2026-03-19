const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChessGame-DFsbpwZl.js","assets/Settings-iFIGZMfD.js","assets/Settings-DS8xGtQf.css","assets/ChessGame-DhAK7FyC.css","assets/AnalysisGame-BlAFyonk.js","assets/AnalysisGame-Tf-ih67V.css"])))=>i.map(i=>d[i]);
let Rf, Mb, nn, an, i2, _e, s2, p2, c2, y2, Nb, v2, Q, P1, m2, u2, h2, Yp, d2, f2, N, r2, o2, Xn;
let __tla = (async ()=>{
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);
        new MutationObserver((o)=>{
            for (const s of o)if (s.type === "childList") for (const v of s.addedNodes)v.tagName === "LINK" && v.rel === "modulepreload" && f(v);
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
    P1 = function(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
    };
    var $c = {
        exports: {}
    }, Va = {};
    var Th;
    function q1() {
        if (Th) return Va;
        Th = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
        function c(f, o, s) {
            var v = null;
            if (s !== void 0 && (v = "" + s), o.key !== void 0 && (v = "" + o.key), "key" in o) {
                s = {};
                for(var p in o)p !== "key" && (s[p] = o[p]);
            } else s = o;
            return o = s.ref, {
                $$typeof: u,
                type: f,
                key: v,
                ref: o !== void 0 ? o : null,
                props: s
            };
        }
        return Va.Fragment = r, Va.jsx = c, Va.jsxs = c, Va;
    }
    var Ah;
    function H1() {
        return Ah || (Ah = 1, $c.exports = q1()), $c.exports;
    }
    let Fc, re;
    Q = H1();
    Fc = {
        exports: {}
    };
    re = {};
    var Oh;
    function k1() {
        if (Oh) return re;
        Oh = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), v = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), _ = Symbol.iterator;
        function S(E) {
            return E === null || typeof E != "object" ? null : (E = _ && E[_] || E["@@iterator"], typeof E == "function" ? E : null);
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
        function J(E, L, X, G, I, pe) {
            return X = pe.ref, {
                $$typeof: u,
                type: E,
                key: L,
                ref: X !== void 0 ? X : null,
                props: pe
            };
        }
        function $(E, L) {
            return J(E.type, L, void 0, void 0, void 0, E.props);
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
            })) : I != null && (ne(I) && (I = $(I, X + (I.key == null || E && E.key === I.key ? "" : ("" + I.key).replace(je, "$&/") + "/") + ie)), L.push(I)), 1;
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
        }, re.Component = w, re.Fragment = c, re.Profiler = o, re.PureComponent = j, re.StrictMode = f, re.Suspense = h, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, re.__COMPILER_RUNTIME = {
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
            return J(E.type, I, void 0, void 0, pe, G);
        }, re.createContext = function(E) {
            return E = {
                $$typeof: v,
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
            return J(E, pe, void 0, void 0, null, I);
        }, re.createRef = function() {
            return {
                current: null
            };
        }, re.forwardRef = function(E) {
            return {
                $$typeof: p,
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
                $$typeof: y,
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
    var Nh;
    function Bi() {
        return Nh || (Nh = 1, Fc.exports = k1()), Fc.exports;
    }
    N = Bi();
    nn = P1(N);
    var Wc = {
        exports: {}
    }, Xa = {}, Ic = {
        exports: {}
    }, ef = {};
    var xh;
    function L1() {
        return xh || (xh = 1, function(u) {
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
                var v = Date, p = v.now();
                u.unstable_now = function() {
                    return v.now() - p;
                };
            }
            var h = [], y = [], b = 1, _ = null, S = 3, T = !1, O = !1, D = !1, w = !1, z = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
            function V(P) {
                for(var Y = c(y); Y !== null;){
                    if (Y.callback === null) f(y);
                    else if (Y.startTime <= P) f(y), Y.sortIndex = Y.expirationTime, r(h, Y);
                    else break;
                    Y = c(y);
                }
            }
            function K(P) {
                if (D = !1, V(P), !O) if (c(h) !== null) O = !0, W || (W = !0, Ue());
                else {
                    var Y = c(y);
                    Y !== null && We(K, Y.startTime - P);
                }
            }
            var W = !1, J = -1, $ = 5, ne = -1;
            function Ce() {
                return w ? !0 : !(u.unstable_now() - ne < $);
            }
            function je() {
                if (w = !1, W) {
                    var P = u.unstable_now();
                    ne = P;
                    var Y = !0;
                    try {
                        e: {
                            O = !1, D && (D = !1, j(J), J = -1), T = !0;
                            var le = S;
                            try {
                                t: {
                                    for(V(P), _ = c(h); _ !== null && !(_.expirationTime > P && Ce());){
                                        var Re = _.callback;
                                        if (typeof Re == "function") {
                                            _.callback = null, S = _.priorityLevel;
                                            var E = Re(_.expirationTime <= P);
                                            if (P = u.unstable_now(), typeof E == "function") {
                                                _.callback = E, V(P), Y = !0;
                                                break t;
                                            }
                                            _ === c(h) && f(h), V(P);
                                        } else f(h);
                                        _ = c(h);
                                    }
                                    if (_ !== null) Y = !0;
                                    else {
                                        var L = c(y);
                                        L !== null && We(K, L.startTime - P), Y = !1;
                                    }
                                }
                                break e;
                            } finally{
                                _ = null, S = le, T = !1;
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
                J = z(function() {
                    P(u.unstable_now());
                }, Y);
            }
            u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(P) {
                P.callback = null;
            }, u.unstable_forceFrameRate = function(P) {
                0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < P ? Math.floor(1e3 / P) : 5;
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
                }, le > Re ? (P.sortIndex = le, r(y, P), c(h) === null && P === c(y) && (D ? (j(J), J = -1) : D = !0, We(K, le - Re))) : (P.sortIndex = E, r(h, P), O || T || (O = !0, W || (W = !0, Ue()))), P;
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
        }(ef)), ef;
    }
    var Mh;
    function j1() {
        return Mh || (Mh = 1, Ic.exports = L1()), Ic.exports;
    }
    var tf = {
        exports: {}
    }, tt = {};
    var Ch;
    function Q1() {
        if (Ch) return tt;
        Ch = 1;
        var u = Bi();
        function r(h) {
            var y = "https://react.dev/errors/" + h;
            if (1 < arguments.length) {
                y += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var b = 2; b < arguments.length; b++)y += "&args[]=" + encodeURIComponent(arguments[b]);
            }
            return "Minified React error #" + h + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
        function s(h, y, b) {
            var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: _ == null ? null : "" + _,
                children: h,
                containerInfo: y,
                implementation: b
            };
        }
        var v = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function p(h, y) {
            if (h === "font") return "";
            if (typeof y == "string") return y === "use-credentials" ? y : "";
        }
        return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, tt.createPortal = function(h, y) {
            var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(r(299));
            return s(h, y, null, b);
        }, tt.flushSync = function(h) {
            var y = v.T, b = f.p;
            try {
                if (v.T = null, f.p = 2, h) return h();
            } finally{
                v.T = y, f.p = b, f.d.f();
            }
        }, tt.preconnect = function(h, y) {
            typeof h == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, f.d.C(h, y));
        }, tt.prefetchDNS = function(h) {
            typeof h == "string" && f.d.D(h);
        }, tt.preinit = function(h, y) {
            if (typeof h == "string" && y && typeof y.as == "string") {
                var b = y.as, _ = p(b, y.crossOrigin), S = typeof y.integrity == "string" ? y.integrity : void 0, T = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
                b === "style" ? f.d.S(h, typeof y.precedence == "string" ? y.precedence : void 0, {
                    crossOrigin: _,
                    integrity: S,
                    fetchPriority: T
                }) : b === "script" && f.d.X(h, {
                    crossOrigin: _,
                    integrity: S,
                    fetchPriority: T,
                    nonce: typeof y.nonce == "string" ? y.nonce : void 0
                });
            }
        }, tt.preinitModule = function(h, y) {
            if (typeof h == "string") if (typeof y == "object" && y !== null) {
                if (y.as == null || y.as === "script") {
                    var b = p(y.as, y.crossOrigin);
                    f.d.M(h, {
                        crossOrigin: b,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0
                    });
                }
            } else y == null && f.d.M(h);
        }, tt.preload = function(h, y) {
            if (typeof h == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
                var b = y.as, _ = p(b, y.crossOrigin);
                f.d.L(h, b, {
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
                f.d.m(h, {
                    as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                    crossOrigin: b,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0
                });
            } else f.d.m(h);
        }, tt.requestFormReset = function(h) {
            f.d.r(h);
        }, tt.unstable_batchedUpdates = function(h, y) {
            return h(y);
        }, tt.useFormState = function(h, y, b) {
            return v.H.useFormState(h, y, b);
        }, tt.useFormStatus = function() {
            return v.H.useHostTransitionStatus();
        }, tt.version = "19.1.0", tt;
    }
    var Dh;
    function K1() {
        if (Dh) return tf.exports;
        Dh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), tf.exports = Q1(), tf.exports;
    }
    var Bh;
    function G1() {
        if (Bh) return Xa;
        Bh = 1;
        var u = j1(), r = Bi(), c = K1();
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
        function v(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function p(e) {
            if (s(e) !== e) throw Error(f(188));
        }
        function h(e) {
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
                        if (i === l) return p(a), e;
                        if (i === n) return p(a), t;
                        i = i.sibling;
                    }
                    throw Error(f(188));
                }
                if (l.return !== n.return) l = a, n = i;
                else {
                    for(var d = !1, m = a.child; m;){
                        if (m === l) {
                            d = !0, l = a, n = i;
                            break;
                        }
                        if (m === n) {
                            d = !0, n = a, l = i;
                            break;
                        }
                        m = m.sibling;
                    }
                    if (!d) {
                        for(m = i.child; m;){
                            if (m === l) {
                                d = !0, l = i, n = a;
                                break;
                            }
                            if (m === n) {
                                d = !0, n = i, l = a;
                                break;
                            }
                            m = m.sibling;
                        }
                        if (!d) throw Error(f(189));
                    }
                }
                if (l.alternate !== n) throw Error(f(190));
            }
            if (l.tag !== 3) throw Error(f(188));
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
        var b = Object.assign, _ = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), j = Symbol.for("react.consumer"), k = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), Ce = Symbol.for("react.memo_cache_sentinel"), je = Symbol.iterator;
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
                case J:
                    return t = e.displayName || null, t !== null ? t : Pl(e.type) || "Memo";
                case $:
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
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? Wd(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = Wd(t), e = Id(t, e);
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
        function Ui(e) {
            e.memoizedState !== null && G(ot, e);
            var t = I.current, l = Id(t, e.type);
            t !== l && (G(pe, e), G(I, l));
        }
        function iu(e) {
            pe.current === e && (X(I), X(pe)), ot.current === e && (X(ot), ja._currentValue = le);
        }
        var Pi = Object.prototype.hasOwnProperty, qi = u.unstable_scheduleCallback, Hi = u.unstable_cancelCallback, pm = u.unstable_shouldYield, mm = u.unstable_requestPaint, zt = u.unstable_now, ym = u.unstable_getCurrentPriorityLevel, Df = u.unstable_ImmediatePriority, Bf = u.unstable_UserBlockingPriority, ru = u.unstable_NormalPriority, vm = u.unstable_LowPriority, wf = u.unstable_IdlePriority, gm = u.log, bm = u.unstable_setDisableYieldValue, Jn = null, st = null;
        function rl(e) {
            if (typeof gm == "function" && bm(e), st && typeof st.setStrictMode == "function") try {
                st.setStrictMode(Jn, e);
            } catch  {}
        }
        var dt = Math.clz32 ? Math.clz32 : _m, Sm = Math.log, Em = Math.LN2;
        function _m(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Sm(e) / Em | 0) | 0;
        }
        var cu = 256, fu = 4194304;
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
        function ou(e, t, l) {
            var n = e.pendingLanes;
            if (n === 0) return 0;
            var a = 0, i = e.suspendedLanes, d = e.pingedLanes;
            e = e.warmLanes;
            var m = n & 134217727;
            return m !== 0 ? (n = m & ~i, n !== 0 ? a = ql(n) : (d &= m, d !== 0 ? a = ql(d) : l || (l = m & ~e, l !== 0 && (a = ql(l))))) : (m = n & ~i, m !== 0 ? a = ql(m) : d !== 0 ? a = ql(d) : l || (l = n & ~e, l !== 0 && (a = ql(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
        }
        function $n(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function Rm(e, t) {
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
        function zf() {
            var e = cu;
            return cu <<= 1, (cu & 4194048) === 0 && (cu = 256), e;
        }
        function Uf() {
            var e = fu;
            return fu <<= 1, (fu & 62914560) === 0 && (fu = 4194304), e;
        }
        function ki(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Fn(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Tm(e, t, l, n, a, i) {
            var d = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var m = e.entanglements, g = e.expirationTimes, M = e.hiddenUpdates;
            for(l = d & ~l; 0 < l;){
                var U = 31 - dt(l), H = 1 << U;
                m[U] = 0, g[U] = -1;
                var C = M[U];
                if (C !== null) for(M[U] = null, U = 0; U < C.length; U++){
                    var B = C[U];
                    B !== null && (B.lane &= -536870913);
                }
                l &= ~H;
            }
            n !== 0 && Pf(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(d & ~t));
        }
        function Pf(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var n = 31 - dt(t);
            e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
        }
        function qf(e, t) {
            var l = e.entangledLanes |= t;
            for(e = e.entanglements; l;){
                var n = 31 - dt(l), a = 1 << n;
                a & t | e[n] & t && (e[n] |= t), l &= ~a;
            }
        }
        function Li(e) {
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
        function ji(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function Hf() {
            var e = Y.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : gh(e.type));
        }
        function Am(e, t) {
            var l = Y.p;
            try {
                return Y.p = e, t();
            } finally{
                Y.p = l;
            }
        }
        var cl = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + cl, at = "__reactProps$" + cl, cn = "__reactContainer$" + cl, Qi = "__reactEvents$" + cl, Om = "__reactListeners$" + cl, Nm = "__reactHandles$" + cl, kf = "__reactResources$" + cl, Wn = "__reactMarker$" + cl;
        function Ki(e) {
            delete e[Ie], delete e[at], delete e[Qi], delete e[Om], delete e[Nm];
        }
        function fn(e) {
            var t = e[Ie];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[cn] || l[Ie]) {
                    if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = nh(e); e !== null;){
                        if (l = e[Ie]) return l;
                        e = nh(e);
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
            var t = e[kf];
            return t || (t = e[kf] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Qe(e) {
            e[Wn] = !0;
        }
        var Lf = new Set, jf = {};
        function Hl(e, t) {
            dn(e, t), dn(e + "Capture", t);
        }
        function dn(e, t) {
            for(jf[e] = t, e = 0; e < t.length; e++)Lf.add(t[e]);
        }
        var xm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Qf = {}, Kf = {};
        function Mm(e) {
            return Pi.call(Kf, e) ? !0 : Pi.call(Qf, e) ? !1 : xm.test(e) ? Kf[e] = !0 : (Qf[e] = !0, !1);
        }
        function su(e, t, l) {
            if (Mm(t)) if (l === null) e.removeAttribute(t);
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
        function du(e, t, l) {
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
        var Gi, Gf;
        function hn(e) {
            if (Gi === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Gi = t && t[1] || "", Gf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Gi + e + Gf;
        }
        var Yi = !1;
        function Vi(e, t) {
            if (!e || Yi) return "";
            Yi = !0;
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
                var i = n.DetermineComponentFrameRoot(), d = i[0], m = i[1];
                if (d && m) {
                    var g = d.split(`
`), M = m.split(`
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
                Yi = !1, Error.prepareStackTrace = l;
            }
            return (l = e ? e.displayName || e.name : "") ? hn(l) : "";
        }
        function Cm(e) {
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
                    return Vi(e.type, !1);
                case 11:
                    return Vi(e.type.render, !1);
                case 1:
                    return Vi(e.type, !0);
                case 31:
                    return hn("Activity");
                default:
                    return "";
            }
        }
        function Yf(e) {
            try {
                var t = "";
                do t += Cm(e), e = e.return;
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
        function Vf(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Dm(e) {
            var t = Vf(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
        function hu(e) {
            e._valueTracker || (e._valueTracker = Dm(e));
        }
        function Xf(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), n = "";
            return e && (n = Vf(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
        }
        function pu(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var Bm = /[\n"\\]/g;
        function Et(e) {
            return e.replace(Bm, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Xi(e, t, l, n, a, i, d, m) {
            e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Zi(e, d, St(t)) : l != null ? Zi(e, d, St(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + St(m) : e.removeAttribute("name");
        }
        function Zf(e, t, l, n, a, i, d, m) {
            if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
                if (!(i !== "submit" && i !== "reset" || t != null)) return;
                l = l != null ? "" + St(l) : "", t = t != null ? "" + St(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
            }
            n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = m ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d);
        }
        function Zi(e, t, l) {
            t === "number" && pu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
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
        function Jf(e, t, l) {
            if (t != null && (t = "" + St(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + St(l) : "";
        }
        function $f(e, t, l, n) {
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
        var wm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Ff(e, t, l) {
            var n = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || wm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function Wf(e, t, l) {
            if (t != null && typeof t != "object") throw Error(f(62));
            if (e = e.style, l != null) {
                for(var n in l)!l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
                for(var a in t)n = t[a], t.hasOwnProperty(a) && l[a] !== n && Ff(e, a, n);
            } else for(var i in t)t.hasOwnProperty(i) && Ff(e, i, t[i]);
        }
        function Ji(e) {
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
        var zm = new Map([
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
        ]), Um = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function mu(e) {
            return Um.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var $i = null;
        function Fi(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var yn = null, vn = null;
        function If(e) {
            var t = on(e);
            if (t && (e = t.stateNode)) {
                var l = e[at] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (Xi(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var n = l[t];
                                if (n !== e && n.form === e.form) {
                                    var a = n[at] || null;
                                    if (!a) throw Error(f(90));
                                    Xi(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)n = l[t], n.form === e.form && Xf(n);
                        }
                        break e;
                    case "textarea":
                        Jf(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && pn(e, !!l.multiple, t, !1);
                }
            }
        }
        var Wi = !1;
        function eo(e, t, l) {
            if (Wi) return e(t, l);
            Wi = !0;
            try {
                var n = e(t);
                return n;
            } finally{
                if (Wi = !1, (yn !== null || vn !== null) && (ei(), yn && (t = yn, e = vn, vn = yn = null, If(t), e))) for(t = 0; t < e.length; t++)If(e[t]);
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
        var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ii = !1;
        if (Qt) try {
            var ta = {};
            Object.defineProperty(ta, "passive", {
                get: function() {
                    Ii = !0;
                }
            }), window.addEventListener("test", ta, ta), window.removeEventListener("test", ta, ta);
        } catch  {
            Ii = !1;
        }
        var fl = null, er = null, yu = null;
        function to() {
            if (yu) return yu;
            var e, t = er, l = t.length, n, a = "value" in fl ? fl.value : fl.textContent, i = a.length;
            for(e = 0; e < l && t[e] === a[e]; e++);
            var d = l - e;
            for(n = 1; n <= d && t[l - n] === a[i - n]; n++);
            return yu = a.slice(e, 1 < n ? 1 - n : void 0);
        }
        function vu(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function gu() {
            return !0;
        }
        function lo() {
            return !1;
        }
        function ut(e) {
            function t(l, n, a, i, d) {
                this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = d, this.currentTarget = null;
                for(var m in e)e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(i) : i[m]);
                return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? gu : lo, this.isPropagationStopped = lo, this;
            }
            return b(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = gu);
                },
                stopPropagation: function() {
                    var l = this.nativeEvent;
                    l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = gu);
                },
                persist: function() {},
                isPersistent: gu
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
        }, bu = ut(kl), la = b({}, kl, {
            view: 0,
            detail: 0
        }), Pm = ut(la), tr, lr, na, Su = b({}, la, {
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
            getModifierState: ar,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== na && (na && e.type === "mousemove" ? (tr = e.screenX - na.screenX, lr = e.screenY - na.screenY) : lr = tr = 0, na = e), tr);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : lr;
            }
        }), no = ut(Su), qm = b({}, Su, {
            dataTransfer: 0
        }), Hm = ut(qm), km = b({}, la, {
            relatedTarget: 0
        }), nr = ut(km), Lm = b({}, kl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), jm = ut(Lm), Qm = b({}, kl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Km = ut(Qm), Gm = b({}, kl, {
            data: 0
        }), ao = ut(Gm), Ym = {
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
        }, Vm = {
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
        }, Xm = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function Zm(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Xm[e]) ? !!t[e] : !1;
        }
        function ar() {
            return Zm;
        }
        var Jm = b({}, la, {
            key: function(e) {
                if (e.key) {
                    var t = Ym[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = vu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vm[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ar,
            charCode: function(e) {
                return e.type === "keypress" ? vu(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), $m = ut(Jm), Fm = b({}, Su, {
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
        }), uo = ut(Fm), Wm = b({}, la, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ar
        }), Im = ut(Wm), e0 = b({}, kl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), t0 = ut(e0), l0 = b({}, Su, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), n0 = ut(l0), a0 = b({}, kl, {
            newState: 0,
            oldState: 0
        }), u0 = ut(a0), i0 = [
            9,
            13,
            27,
            32
        ], ur = Qt && "CompositionEvent" in window, aa = null;
        Qt && "documentMode" in document && (aa = document.documentMode);
        var r0 = Qt && "TextEvent" in window && !aa, io = Qt && (!ur || aa && 8 < aa && 11 >= aa), ro = " ", co = !1;
        function fo(e, t) {
            switch(e){
                case "keyup":
                    return i0.indexOf(t.keyCode) !== -1;
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
        var gn = !1;
        function c0(e, t) {
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
        function f0(e, t) {
            if (gn) return e === "compositionend" || !ur && fo(e, t) ? (e = to(), yu = er = fl = null, gn = !1, e) : null;
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
        var o0 = {
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
        function so(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!o0[e.type] : t === "textarea";
        }
        function ho(e, t, l, n) {
            yn ? vn ? vn.push(n) : vn = [
                n
            ] : yn = n, t = ii(t, "onChange"), 0 < t.length && (l = new bu("onChange", "change", null, l, n), e.push({
                event: l,
                listeners: t
            }));
        }
        var ua = null, ia = null;
        function s0(e) {
            Xd(e, 0);
        }
        function Eu(e) {
            var t = In(e);
            if (Xf(t)) return e;
        }
        function po(e, t) {
            if (e === "change") return t;
        }
        var mo = !1;
        if (Qt) {
            var ir;
            if (Qt) {
                var rr = "oninput" in document;
                if (!rr) {
                    var yo = document.createElement("div");
                    yo.setAttribute("oninput", "return;"), rr = typeof yo.oninput == "function";
                }
                ir = rr;
            } else ir = !1;
            mo = ir && (!document.documentMode || 9 < document.documentMode);
        }
        function vo() {
            ua && (ua.detachEvent("onpropertychange", go), ia = ua = null);
        }
        function go(e) {
            if (e.propertyName === "value" && Eu(ia)) {
                var t = [];
                ho(t, ia, e, Fi(e)), eo(s0, t);
            }
        }
        function d0(e, t, l) {
            e === "focusin" ? (vo(), ua = t, ia = l, ua.attachEvent("onpropertychange", go)) : e === "focusout" && vo();
        }
        function h0(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return Eu(ia);
        }
        function p0(e, t) {
            if (e === "click") return Eu(t);
        }
        function m0(e, t) {
            if (e === "input" || e === "change") return Eu(t);
        }
        function y0(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var ht = typeof Object.is == "function" ? Object.is : y0;
        function ra(e, t) {
            if (ht(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), n = Object.keys(t);
            if (l.length !== n.length) return !1;
            for(n = 0; n < l.length; n++){
                var a = l[n];
                if (!Pi.call(t, a) || !ht(e[a], t[a])) return !1;
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
            for(var t = pu(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var l = typeof t.contentWindow.location.href == "string";
                } catch  {
                    l = !1;
                }
                if (l) e = t.contentWindow;
                else break;
                t = pu(e.document);
            }
            return t;
        }
        function cr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var v0 = Qt && "documentMode" in document && 11 >= document.documentMode, bn = null, fr = null, ca = null, or = !1;
        function Ro(e, t, l) {
            var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            or || bn == null || bn !== pu(n) || (n = bn, "selectionStart" in n && cr(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), ca && ra(ca, n) || (ca = n, n = ii(fr, "onSelect"), 0 < n.length && (t = new bu("onSelect", "select", null, t, l), e.push({
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
        }, sr = {}, To = {};
        Qt && (To = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
        function jl(e) {
            if (sr[e]) return sr[e];
            if (!Sn[e]) return e;
            var t = Sn[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in To) return sr[e] = t[l];
            return e;
        }
        var Ao = jl("animationend"), Oo = jl("animationiteration"), No = jl("animationstart"), g0 = jl("transitionrun"), b0 = jl("transitionstart"), S0 = jl("transitioncancel"), xo = jl("transitionend"), Mo = new Map, dr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        dr.push("scrollEnd");
        function Ct(e, t) {
            Mo.set(e, t), Hl(t, [
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
                    stack: Yf(t)
                }, Co.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Yf(t)
            };
        }
        var Rt = [], En = 0, hr = 0;
        function _u() {
            for(var e = En, t = hr = En = 0; t < e;){
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
                i !== 0 && Do(l, a, i);
            }
        }
        function Ru(e, t, l, n) {
            Rt[En++] = e, Rt[En++] = t, Rt[En++] = l, Rt[En++] = n, hr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
        }
        function pr(e, t, l, n) {
            return Ru(e, t, l, n), Tu(e);
        }
        function _n(e, t) {
            return Ru(e, null, null, t), Tu(e);
        }
        function Do(e, t, l) {
            e.lanes |= l;
            var n = e.alternate;
            n !== null && (n.lanes |= l);
            for(var a = !1, i = e.return; i !== null;)i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
            return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - dt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [
                t
            ] : n.push(t), t.lane = l | 536870912), i) : null;
        }
        function Tu(e) {
            if (50 < wa) throw wa = 0, Sc = null, Error(f(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var Rn = {};
        function E0(e, t, l, n) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function pt(e, t, l, n) {
            return new E0(e, t, l, n);
        }
        function mr(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Kt(e, t) {
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
        function Au(e, t, l, n, a, i) {
            var d = 0;
            if (n = e, typeof e == "function") mr(e) && (d = 1);
            else if (typeof e == "string") d = R1(e, l, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
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
                        case J:
                            d = 14;
                            break e;
                        case $:
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
        function yr(e, t, l) {
            return e = pt(6, e, null, t), e.lanes = l, e;
        }
        function vr(e, t, l) {
            return t = pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var Tn = [], An = 0, Ou = null, Nu = 0, Tt = [], At = 0, Kl = null, Gt = 1, Yt = "";
        function Gl(e, t) {
            Tn[An++] = Nu, Tn[An++] = Ou, Ou = e, Nu = t;
        }
        function wo(e, t, l) {
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
        function gr(e) {
            e.return !== null && (Gl(e, 1), wo(e, 1, 0));
        }
        function br(e) {
            for(; e === Ou;)Ou = Tn[--An], Tn[An] = null, Nu = Tn[--An], Tn[An] = null;
            for(; e === Kl;)Kl = Tt[--At], Tt[At] = null, Yt = Tt[--At], Tt[At] = null, Gt = Tt[--At], Tt[At] = null;
        }
        var nt = null, De = null, ye = !1, Yl = null, Ut = !1, Sr = Error(f(519));
        function Vl(e) {
            var t = Error(f(418, ""));
            throw sa(_t(t, e)), Sr;
        }
        function zo(e) {
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
                    de("invalid", t), Zf(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), hu(t);
                    break;
                case "select":
                    de("invalid", t);
                    break;
                case "textarea":
                    de("invalid", t), $f(t, n.value, n.defaultValue, n.children), hu(t);
            }
            l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Fd(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = ri), t = !0) : t = !1, t || Vl(e);
        }
        function Uo(e) {
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
            if (!ye) return Uo(e), ye = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Pc(e.type, e.memoizedProps)), l = !l), l && De && Vl(e), Uo(e), t === 13) {
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
            } else t === 27 ? (t = De, Al(e.type) ? (e = Lc, Lc = null, De = e) : De = t) : De = nt ? Bt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function oa() {
            De = nt = null, ye = !1;
        }
        function Po() {
            var e = Yl;
            return e !== null && (ct === null ? ct = e : ct.push.apply(ct, e), Yl = null), e;
        }
        function sa(e) {
            Yl === null ? Yl = [
                e
            ] : Yl.push(e);
        }
        var Er = L(null), Xl = null, Vt = null;
        function ol(e, t, l) {
            G(Er, t._currentValue), t._currentValue = l;
        }
        function Xt(e) {
            e._currentValue = Er.current, X(Er);
        }
        function _r(e, t, l) {
            for(; e !== null;){
                var n = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
                e = e.return;
            }
        }
        function Rr(e, t, l, n) {
            var a = e.child;
            for(a !== null && (a.return = e); a !== null;){
                var i = a.dependencies;
                if (i !== null) {
                    var d = a.child;
                    i = i.firstContext;
                    e: for(; i !== null;){
                        var m = i;
                        i = a;
                        for(var g = 0; g < t.length; g++)if (m.context === t[g]) {
                            i.lanes |= l, m = i.alternate, m !== null && (m.lanes |= l), _r(i.return, l, e), n || (d = null);
                            break e;
                        }
                        i = m.next;
                    }
                } else if (a.tag === 18) {
                    if (d = a.return, d === null) throw Error(f(341));
                    d.lanes |= l, i = d.alternate, i !== null && (i.lanes |= l), _r(d, l, e), d = null;
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
                        var m = a.type;
                        ht(a.pendingProps.value, d.value) || (e !== null ? e.push(m) : e = [
                            m
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
            e !== null && Rr(t, e, l, n), t.flags |= 262144;
        }
        function xu(e) {
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
            return qo(Xl, e);
        }
        function Mu(e, t) {
            return Xl === null && Zl(e), qo(e, t);
        }
        function qo(e, t) {
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
        var _0 = typeof AbortController < "u" ? AbortController : function() {
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
        }, R0 = u.unstable_scheduleCallback, T0 = u.unstable_NormalPriority, He = {
            $$typeof: k,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Tr() {
            return {
                controller: new _0,
                data: new Map,
                refCount: 0
            };
        }
        function ha(e) {
            e.refCount--, e.refCount === 0 && R0(T0, function() {
                e.controller.abort();
            });
        }
        var pa = null, Ar = 0, On = 0, Nn = null;
        function A0(e, t) {
            if (pa === null) {
                var l = pa = [];
                Ar = 0, On = Nc(), Nn = {
                    status: "pending",
                    value: void 0,
                    then: function(n) {
                        l.push(n);
                    }
                };
            }
            return Ar++, t.then(Ho, Ho), t;
        }
        function Ho() {
            if (--Ar === 0 && pa !== null) {
                Nn !== null && (Nn.status = "fulfilled");
                var e = pa;
                pa = null, On = 0, Nn = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function O0(e, t) {
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
        var ko = P.S;
        P.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && A0(e, t), ko !== null && ko(e, t);
        };
        var Jl = L(null);
        function Or() {
            var e = Jl.current;
            return e !== null ? e : Ae.pooledCache;
        }
        function Cu(e, t) {
            t === null ? G(Jl, Jl.current) : G(Jl, t.pool);
        }
        function Lo() {
            var e = Or();
            return e === null ? null : {
                parent: He._currentValue,
                pool: e
            };
        }
        var ma = Error(f(460)), jo = Error(f(474)), Du = Error(f(542)), Nr = {
            then: function() {}
        };
        function Qo(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Bu() {}
        function Ko(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Bu, Bu), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Yo(e), e;
                default:
                    if (typeof t.status == "string") t.then(Bu, Bu);
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
                            throw e = t.reason, Yo(e), e;
                    }
                    throw ya = t, ma;
            }
        }
        var ya = null;
        function Go() {
            if (ya === null) throw Error(f(459));
            var e = ya;
            return ya = null, e;
        }
        function Yo(e) {
            if (e === ma || e === Du) throw Error(f(483));
        }
        var sl = !1;
        function xr(e) {
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
        function Mr(e, t) {
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
                return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Tu(e), Do(e, null, l), t;
            }
            return Ru(e, n, t, l), Tu(e);
        }
        function va(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, qf(e, l);
            }
        }
        function Cr(e, t) {
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
        var Dr = !1;
        function ga() {
            if (Dr) {
                var e = Nn;
                if (e !== null) throw e;
            }
        }
        function ba(e, t, l, n) {
            Dr = !1;
            var a = e.updateQueue;
            sl = !1;
            var i = a.firstBaseUpdate, d = a.lastBaseUpdate, m = a.shared.pending;
            if (m !== null) {
                a.shared.pending = null;
                var g = m, M = g.next;
                g.next = null, d === null ? i = M : d.next = M, d = g;
                var U = e.alternate;
                U !== null && (U = U.updateQueue, m = U.lastBaseUpdate, m !== d && (m === null ? U.firstBaseUpdate = M : m.next = M, U.lastBaseUpdate = g));
            }
            if (i !== null) {
                var H = a.baseState;
                d = 0, U = M = g = null, m = i;
                do {
                    var C = m.lane & -536870913, B = C !== m.lane;
                    if (B ? (he & C) === C : (n & C) === C) {
                        C !== 0 && C === On && (Dr = !0), U !== null && (U = U.next = {
                            lane: 0,
                            tag: m.tag,
                            payload: m.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var ae = e, ee = m;
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
                        C = m.callback, C !== null && (e.flags |= 64, B && (e.flags |= 8192), B = a.callbacks, B === null ? a.callbacks = [
                            C
                        ] : B.push(C));
                    } else B = {
                        lane: C,
                        tag: m.tag,
                        payload: m.payload,
                        callback: m.callback,
                        next: null
                    }, U === null ? (M = U = B, g = H) : U = U.next = B, d |= C;
                    if (m = m.next, m === null) {
                        if (m = a.shared.pending, m === null) break;
                        B = m, m = B.next, B.next = null, a.lastBaseUpdate = B, a.shared.pending = null;
                    }
                }while (!0);
                U === null && (g = H), a.baseState = g, a.firstBaseUpdate = M, a.lastBaseUpdate = U, i === null && (a.shared.lanes = 0), El |= d, e.lanes = d, e.memoizedState = H;
            }
        }
        function Vo(e, t) {
            if (typeof e != "function") throw Error(f(191, e));
            e.call(t);
        }
        function Xo(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)Vo(l[e], t);
        }
        var xn = L(null), wu = L(0);
        function Zo(e, t) {
            e = el, G(wu, e), G(xn, t), el = e | t.baseLanes;
        }
        function Br() {
            G(wu, el), G(xn, xn.current);
        }
        function wr() {
            el = wu.current, X(xn), X(wu);
        }
        var pl = 0, fe = null, be = null, Pe = null, zu = !1, Mn = !1, $l = !1, Uu = 0, Sa = 0, Cn = null, N0 = 0;
        function we() {
            throw Error(f(321));
        }
        function zr(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!ht(e[l], t[l])) return !1;
            return !0;
        }
        function Ur(e, t, l, n, a, i) {
            return pl = i, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? Ds : Bs, $l = !1, i = l(n, a), $l = !1, Mn && (i = $o(t, l, n, a)), Jo(e), i;
        }
        function Jo(e) {
            P.H = ju;
            var t = be !== null && be.next !== null;
            if (pl = 0, Pe = be = fe = null, zu = !1, Sa = 0, Cn = null, t) throw Error(f(300));
            e === null || Ke || (e = e.dependencies, e !== null && xu(e) && (Ke = !0));
        }
        function $o(e, t, l, n) {
            fe = e;
            var a = 0;
            do {
                if (Mn && (Cn = null), Sa = 0, Mn = !1, 25 <= a) throw Error(f(301));
                if (a += 1, Pe = be = null, e.updateQueue != null) {
                    var i = e.updateQueue;
                    i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
                }
                P.H = z0, i = t(l, n);
            }while (Mn);
            return i;
        }
        function x0() {
            var e = P.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? Ea(t) : t, e = e.useState()[0], (be !== null ? be.memoizedState : null) !== e && (fe.flags |= 1024), t;
        }
        function Pr() {
            var e = Uu !== 0;
            return Uu = 0, e;
        }
        function qr(e, t, l) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
        }
        function Hr(e) {
            if (zu) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                zu = !1;
            }
            pl = 0, Pe = be = fe = null, Mn = !1, Sa = Uu = 0, Cn = null;
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
        function kr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function Ea(e) {
            var t = Sa;
            return Sa += 1, Cn === null && (Cn = []), e = Ko(Cn, e, t), t = fe, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? Ds : Bs), e;
        }
        function Pu(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return Ea(e);
                if (e.$$typeof === k) return et(e);
            }
            throw Error(f(438, String(e)));
        }
        function Lr(e) {
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
            }), l === null && (l = kr(), fe.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), n = 0; n < e; n++)l[n] = Ce;
            return t.index++, l;
        }
        function Zt(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function qu(e) {
            var t = qe();
            return jr(t, be, e);
        }
        function jr(e, t, l) {
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
                var m = d = null, g = null, M = t, U = !1;
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
                        }, g === null ? (m = g = H, d = i) : g = g.next = H, fe.lanes |= C, El |= C;
                        H = M.action, $l && l(i, H), i = M.hasEagerState ? M.eagerState : l(i, H);
                    } else C = {
                        lane: H,
                        revertLane: M.revertLane,
                        action: M.action,
                        hasEagerState: M.hasEagerState,
                        eagerState: M.eagerState,
                        next: null
                    }, g === null ? (m = g = C, d = i) : g = g.next = C, fe.lanes |= H, El |= H;
                    M = M.next;
                }while (M !== null && M !== t);
                if (g === null ? d = i : g.next = m, !ht(i, e.memoizedState) && (Ke = !0, U && (l = Nn, l !== null))) throw l;
                e.memoizedState = i, e.baseState = d, e.baseQueue = g, n.lastRenderedState = i;
            }
            return a === null && (n.lanes = 0), [
                e.memoizedState,
                n.dispatch
            ];
        }
        function Qr(e) {
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
        function Fo(e, t, l) {
            var n = fe, a = qe(), i = ye;
            if (i) {
                if (l === void 0) throw Error(f(407));
                l = l();
            } else l = t();
            var d = !ht((be || a).memoizedState, l);
            d && (a.memoizedState = l, Ke = !0), a = a.queue;
            var m = es.bind(null, n, a, e);
            if (_a(2048, 8, m, [
                e
            ]), a.getSnapshot !== t || d || Pe !== null && Pe.memoizedState.tag & 1) {
                if (n.flags |= 2048, Dn(9, Hu(), Io.bind(null, n, a, l, t), null), Ae === null) throw Error(f(349));
                i || (pl & 124) !== 0 || Wo(n, t, l);
            }
            return l;
        }
        function Wo(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = fe.updateQueue, t === null ? (t = kr(), fe.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function Io(e, t, l, n) {
            t.value = l, t.getSnapshot = n, ts(t) && ls(e);
        }
        function es(e, t, l) {
            return l(function() {
                ts(t) && ls(e);
            });
        }
        function ts(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !ht(e, l);
            } catch  {
                return !0;
            }
        }
        function ls(e) {
            var t = _n(e, 2);
            t !== null && bt(t, e, 2);
        }
        function Kr(e) {
            var t = it();
            if (typeof e == "function") {
                var l = e;
                if (e = l(), $l) {
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
        function ns(e, t, l, n) {
            return e.baseState = l, jr(e, be, typeof n == "function" ? n : Zt);
        }
        function M0(e, t, l, n, a) {
            if (Lu(e)) throw Error(f(485));
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
                P.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, as(t, i)) : (i.next = l.next, t.pending = l.next = i);
            }
        }
        function as(e, t) {
            var l = t.action, n = t.payload, a = e.state;
            if (t.isTransition) {
                var i = P.T, d = {};
                P.T = d;
                try {
                    var m = l(a, n), g = P.S;
                    g !== null && g(d, m), us(e, t, m);
                } catch (M) {
                    Gr(e, t, M);
                } finally{
                    P.T = i;
                }
            } else try {
                i = l(a, n), us(e, t, i);
            } catch (M) {
                Gr(e, t, M);
            }
        }
        function us(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
                is(e, t, n);
            }, function(n) {
                return Gr(e, t, n);
            }) : is(e, t, l);
        }
        function is(e, t, l) {
            t.status = "fulfilled", t.value = l, rs(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, as(e, l)));
        }
        function Gr(e, t, l) {
            var n = e.pending;
            if (e.pending = null, n !== null) {
                n = n.next;
                do t.status = "rejected", t.reason = l, rs(t), t = t.next;
                while (t !== n);
            }
            e.action = null;
        }
        function rs(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function cs(e, t) {
            return t;
        }
        function fs(e, t) {
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
                lastRenderedReducer: cs,
                lastRenderedState: t
            }, l.queue = n, l = xs.bind(null, fe, n), n.dispatch = l, n = Kr(!1), i = Jr.bind(null, fe, !1, n.queue), n = it(), a = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, n.queue = a, l = M0.bind(null, fe, a, i, l), a.dispatch = l, n.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function os(e) {
            var t = qe();
            return ss(t, be, e);
        }
        function ss(e, t, l) {
            if (t = jr(e, t, cs)[0], e = qu(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var n = Ea(t);
            } catch (d) {
                throw d === ma ? Du : d;
            }
            else n = t;
            t = qe();
            var a = t.queue, i = a.dispatch;
            return l !== t.memoizedState && (fe.flags |= 2048, Dn(9, Hu(), C0.bind(null, a, l), null)), [
                n,
                i,
                e
            ];
        }
        function C0(e, t) {
            e.action = t;
        }
        function ds(e) {
            var t = qe(), l = be;
            if (l !== null) return ss(t, l, e);
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
            }, t = fe.updateQueue, t === null && (t = kr(), fe.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
        }
        function Hu() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function hs() {
            return qe().memoizedState;
        }
        function ku(e, t, l, n) {
            var a = it();
            n = n === void 0 ? null : n, fe.flags |= e, a.memoizedState = Dn(1 | t, Hu(), l, n);
        }
        function _a(e, t, l, n) {
            var a = qe();
            n = n === void 0 ? null : n;
            var i = a.memoizedState.inst;
            be !== null && n !== null && zr(n, be.memoizedState.deps) ? a.memoizedState = Dn(t, i, l, n) : (fe.flags |= e, a.memoizedState = Dn(1 | t, i, l, n));
        }
        function ps(e, t) {
            ku(8390656, 8, e, t);
        }
        function ms(e, t) {
            _a(2048, 8, e, t);
        }
        function ys(e, t) {
            return _a(4, 2, e, t);
        }
        function vs(e, t) {
            return _a(4, 4, e, t);
        }
        function gs(e, t) {
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
        function bs(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, _a(4, 4, gs.bind(null, t, e), l);
        }
        function Yr() {}
        function Ss(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            return t !== null && zr(t, n[1]) ? n[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function Es(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            if (t !== null && zr(t, n[1])) return n[0];
            if (n = e(), $l) {
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
        function Vr(e, t, l) {
            return l === void 0 || (pl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Td(), fe.lanes |= e, El |= e, l);
        }
        function _s(e, t, l, n) {
            return ht(l, t) ? l : xn.current !== null ? (e = Vr(e, l, n), ht(e, t) || (Ke = !0), e) : (pl & 42) === 0 ? (Ke = !0, e.memoizedState = l) : (e = Td(), fe.lanes |= e, El |= e, t);
        }
        function Rs(e, t, l, n, a) {
            var i = Y.p;
            Y.p = i !== 0 && 8 > i ? i : 8;
            var d = P.T, m = {};
            P.T = m, Jr(e, !1, t, l);
            try {
                var g = a(), M = P.S;
                if (M !== null && M(m, g), g !== null && typeof g == "object" && typeof g.then == "function") {
                    var U = O0(g, n);
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
        function D0() {}
        function Xr(e, t, l, n) {
            if (e.tag !== 5) throw Error(f(476));
            var a = Ts(e).queue;
            Rs(e, a, t, le, l === null ? D0 : function() {
                return As(e), l(n);
            });
        }
        function Ts(e) {
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
        function As(e) {
            var t = Ts(e).next.queue;
            Ra(e, t, {}, gt());
        }
        function Zr() {
            return et(ja);
        }
        function Os() {
            return qe().memoizedState;
        }
        function Ns() {
            return qe().memoizedState;
        }
        function B0(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = gt();
                        e = dl(l);
                        var n = hl(t, e, l);
                        n !== null && (bt(n, t, l), va(n, t, l)), t = {
                            cache: Tr()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function w0(e, t, l) {
            var n = gt();
            l = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Lu(e) ? Ms(t, l) : (l = pr(e, t, l, n), l !== null && (bt(l, e, n), Cs(l, t, n)));
        }
        function xs(e, t, l) {
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
            if (Lu(e)) Ms(t, a);
            else {
                var i = e.alternate;
                if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                    var d = t.lastRenderedState, m = i(d, l);
                    if (a.hasEagerState = !0, a.eagerState = m, ht(m, d)) return Ru(e, t, a, 0), Ae === null && _u(), !1;
                } catch  {} finally{}
                if (l = pr(e, t, a, n), l !== null) return bt(l, e, n), Cs(l, t, n), !0;
            }
            return !1;
        }
        function Jr(e, t, l, n) {
            if (n = {
                lane: 2,
                revertLane: Nc(),
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Lu(e)) {
                if (t) throw Error(f(479));
            } else t = pr(e, l, n, 2), t !== null && bt(t, e, 2);
        }
        function Lu(e) {
            var t = e.alternate;
            return e === fe || t !== null && t === fe;
        }
        function Ms(e, t) {
            Mn = zu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function Cs(e, t, l) {
            if ((l & 4194048) !== 0) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, qf(e, l);
            }
        }
        var ju = {
            readContext: et,
            use: Pu,
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
        }, Ds = {
            readContext: et,
            use: Pu,
            useCallback: function(e, t) {
                return it().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: et,
            useEffect: ps,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, ku(4194308, 4, gs.bind(null, t, e), l);
            },
            useLayoutEffect: function(e, t) {
                return ku(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                ku(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var l = it();
                t = t === void 0 ? null : t;
                var n = e();
                if ($l) {
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
                    if ($l) {
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
                }, n.queue = e, e = e.dispatch = w0.bind(null, fe, e), [
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
                e = Kr(e);
                var t = e.queue, l = xs.bind(null, fe, t);
                return t.dispatch = l, [
                    e.memoizedState,
                    l
                ];
            },
            useDebugValue: Yr,
            useDeferredValue: function(e, t) {
                var l = it();
                return Vr(l, e, t);
            },
            useTransition: function() {
                var e = Kr(!1);
                return e = Rs.bind(null, fe, e.queue, !0, !1), it().memoizedState = e, [
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
                    (he & 124) !== 0 || Wo(n, t, l);
                }
                a.memoizedState = l;
                var i = {
                    value: l,
                    getSnapshot: t
                };
                return a.queue = i, ps(es.bind(null, n, i, e), [
                    e
                ]), n.flags |= 2048, Dn(9, Hu(), Io.bind(null, n, i, l, t), null), l;
            },
            useId: function() {
                var e = it(), t = Ae.identifierPrefix;
                if (ye) {
                    var l = Yt, n = Gt;
                    l = (n & ~(1 << 32 - dt(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Uu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = N0++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Zr,
            useFormState: fs,
            useActionState: fs,
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
                return t.queue = l, t = Jr.bind(null, fe, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Lr,
            useCacheRefresh: function() {
                return it().memoizedState = B0.bind(null, fe);
            }
        }, Bs = {
            readContext: et,
            use: Pu,
            useCallback: Ss,
            useContext: et,
            useEffect: ms,
            useImperativeHandle: bs,
            useInsertionEffect: ys,
            useLayoutEffect: vs,
            useMemo: Es,
            useReducer: qu,
            useRef: hs,
            useState: function() {
                return qu(Zt);
            },
            useDebugValue: Yr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return _s(l, be.memoizedState, e, t);
            },
            useTransition: function() {
                var e = qu(Zt)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: Fo,
            useId: Os,
            useHostTransitionStatus: Zr,
            useFormState: os,
            useActionState: os,
            useOptimistic: function(e, t) {
                var l = qe();
                return ns(l, be, e, t);
            },
            useMemoCache: Lr,
            useCacheRefresh: Ns
        }, z0 = {
            readContext: et,
            use: Pu,
            useCallback: Ss,
            useContext: et,
            useEffect: ms,
            useImperativeHandle: bs,
            useInsertionEffect: ys,
            useLayoutEffect: vs,
            useMemo: Es,
            useReducer: Qr,
            useRef: hs,
            useState: function() {
                return Qr(Zt);
            },
            useDebugValue: Yr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return be === null ? Vr(l, e, t) : _s(l, be.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Qr(Zt)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: Fo,
            useId: Os,
            useHostTransitionStatus: Zr,
            useFormState: ds,
            useActionState: ds,
            useOptimistic: function(e, t) {
                var l = qe();
                return be !== null ? ns(l, be, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: Lr,
            useCacheRefresh: Ns
        }, Bn = null, Ta = 0;
        function Qu(e) {
            var t = Ta;
            return Ta += 1, Bn === null && (Bn = []), Ko(Bn, e, t);
        }
        function Aa(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Ku(e, t) {
            throw t.$$typeof === _ ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function ws(e) {
            var t = e._init;
            return t(e._payload);
        }
        function zs(e) {
            function t(A, R) {
                if (e) {
                    var x = A.deletions;
                    x === null ? (A.deletions = [
                        R
                    ], A.flags |= 16) : x.push(R);
                }
            }
            function l(A, R) {
                if (!e) return null;
                for(; R !== null;)t(A, R), R = R.sibling;
                return null;
            }
            function n(A) {
                for(var R = new Map; A !== null;)A.key !== null ? R.set(A.key, A) : R.set(A.index, A), A = A.sibling;
                return R;
            }
            function a(A, R) {
                return A = Kt(A, R), A.index = 0, A.sibling = null, A;
            }
            function i(A, R, x) {
                return A.index = x, e ? (x = A.alternate, x !== null ? (x = x.index, x < R ? (A.flags |= 67108866, R) : x) : (A.flags |= 67108866, R)) : (A.flags |= 1048576, R);
            }
            function d(A) {
                return e && A.alternate === null && (A.flags |= 67108866), A;
            }
            function m(A, R, x, q) {
                return R === null || R.tag !== 6 ? (R = yr(x, A.mode, q), R.return = A, R) : (R = a(R, x), R.return = A, R);
            }
            function g(A, R, x, q) {
                var Z = x.type;
                return Z === O ? U(A, R, x.props.children, q, x.key) : R !== null && (R.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === $ && ws(Z) === R.type) ? (R = a(R, x.props), Aa(R, x), R.return = A, R) : (R = Au(x.type, x.key, x.props, null, A.mode, q), Aa(R, x), R.return = A, R);
            }
            function M(A, R, x, q) {
                return R === null || R.tag !== 4 || R.stateNode.containerInfo !== x.containerInfo || R.stateNode.implementation !== x.implementation ? (R = vr(x, A.mode, q), R.return = A, R) : (R = a(R, x.children || []), R.return = A, R);
            }
            function U(A, R, x, q, Z) {
                return R === null || R.tag !== 7 ? (R = Ql(x, A.mode, q, Z), R.return = A, R) : (R = a(R, x), R.return = A, R);
            }
            function H(A, R, x) {
                if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return R = yr("" + R, A.mode, x), R.return = A, R;
                if (typeof R == "object" && R !== null) {
                    switch(R.$$typeof){
                        case S:
                            return x = Au(R.type, R.key, R.props, null, A.mode, x), Aa(x, R), x.return = A, x;
                        case T:
                            return R = vr(R, A.mode, x), R.return = A, R;
                        case $:
                            var q = R._init;
                            return R = q(R._payload), H(A, R, x);
                    }
                    if (We(R) || Ue(R)) return R = Ql(R, A.mode, x, null), R.return = A, R;
                    if (typeof R.then == "function") return H(A, Qu(R), x);
                    if (R.$$typeof === k) return H(A, Mu(A, R), x);
                    Ku(A, R);
                }
                return null;
            }
            function C(A, R, x, q) {
                var Z = R !== null ? R.key : null;
                if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return Z !== null ? null : m(A, R, "" + x, q);
                if (typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case S:
                            return x.key === Z ? g(A, R, x, q) : null;
                        case T:
                            return x.key === Z ? M(A, R, x, q) : null;
                        case $:
                            return Z = x._init, x = Z(x._payload), C(A, R, x, q);
                    }
                    if (We(x) || Ue(x)) return Z !== null ? null : U(A, R, x, q, null);
                    if (typeof x.then == "function") return C(A, R, Qu(x), q);
                    if (x.$$typeof === k) return C(A, R, Mu(A, x), q);
                    Ku(A, x);
                }
                return null;
            }
            function B(A, R, x, q, Z) {
                if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return A = A.get(x) || null, m(R, A, "" + q, Z);
                if (typeof q == "object" && q !== null) {
                    switch(q.$$typeof){
                        case S:
                            return A = A.get(q.key === null ? x : q.key) || null, g(R, A, q, Z);
                        case T:
                            return A = A.get(q.key === null ? x : q.key) || null, M(R, A, q, Z);
                        case $:
                            var oe = q._init;
                            return q = oe(q._payload), B(A, R, x, q, Z);
                    }
                    if (We(q) || Ue(q)) return A = A.get(x) || null, U(R, A, q, Z, null);
                    if (typeof q.then == "function") return B(A, R, x, Qu(q), Z);
                    if (q.$$typeof === k) return B(A, R, x, Mu(R, q), Z);
                    Ku(R, q);
                }
                return null;
            }
            function ae(A, R, x, q) {
                for(var Z = null, oe = null, F = R, te = R = 0, Ye = null; F !== null && te < x.length; te++){
                    F.index > te ? (Ye = F, F = null) : Ye = F.sibling;
                    var me = C(A, F, x[te], q);
                    if (me === null) {
                        F === null && (F = Ye);
                        break;
                    }
                    e && F && me.alternate === null && t(A, F), R = i(me, R, te), oe === null ? Z = me : oe.sibling = me, oe = me, F = Ye;
                }
                if (te === x.length) return l(A, F), ye && Gl(A, te), Z;
                if (F === null) {
                    for(; te < x.length; te++)F = H(A, x[te], q), F !== null && (R = i(F, R, te), oe === null ? Z = F : oe.sibling = F, oe = F);
                    return ye && Gl(A, te), Z;
                }
                for(F = n(F); te < x.length; te++)Ye = B(F, A, te, x[te], q), Ye !== null && (e && Ye.alternate !== null && F.delete(Ye.key === null ? te : Ye.key), R = i(Ye, R, te), oe === null ? Z = Ye : oe.sibling = Ye, oe = Ye);
                return e && F.forEach(function(Cl) {
                    return t(A, Cl);
                }), ye && Gl(A, te), Z;
            }
            function ee(A, R, x, q) {
                if (x == null) throw Error(f(151));
                for(var Z = null, oe = null, F = R, te = R = 0, Ye = null, me = x.next(); F !== null && !me.done; te++, me = x.next()){
                    F.index > te ? (Ye = F, F = null) : Ye = F.sibling;
                    var Cl = C(A, F, me.value, q);
                    if (Cl === null) {
                        F === null && (F = Ye);
                        break;
                    }
                    e && F && Cl.alternate === null && t(A, F), R = i(Cl, R, te), oe === null ? Z = Cl : oe.sibling = Cl, oe = Cl, F = Ye;
                }
                if (me.done) return l(A, F), ye && Gl(A, te), Z;
                if (F === null) {
                    for(; !me.done; te++, me = x.next())me = H(A, me.value, q), me !== null && (R = i(me, R, te), oe === null ? Z = me : oe.sibling = me, oe = me);
                    return ye && Gl(A, te), Z;
                }
                for(F = n(F); !me.done; te++, me = x.next())me = B(F, A, te, me.value, q), me !== null && (e && me.alternate !== null && F.delete(me.key === null ? te : me.key), R = i(me, R, te), oe === null ? Z = me : oe.sibling = me, oe = me);
                return e && F.forEach(function(U1) {
                    return t(A, U1);
                }), ye && Gl(A, te), Z;
            }
            function Ee(A, R, x, q) {
                if (typeof x == "object" && x !== null && x.type === O && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case S:
                            e: {
                                for(var Z = x.key; R !== null;){
                                    if (R.key === Z) {
                                        if (Z = x.type, Z === O) {
                                            if (R.tag === 7) {
                                                l(A, R.sibling), q = a(R, x.props.children), q.return = A, A = q;
                                                break e;
                                            }
                                        } else if (R.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === $ && ws(Z) === R.type) {
                                            l(A, R.sibling), q = a(R, x.props), Aa(q, x), q.return = A, A = q;
                                            break e;
                                        }
                                        l(A, R);
                                        break;
                                    } else t(A, R);
                                    R = R.sibling;
                                }
                                x.type === O ? (q = Ql(x.props.children, A.mode, q, x.key), q.return = A, A = q) : (q = Au(x.type, x.key, x.props, null, A.mode, q), Aa(q, x), q.return = A, A = q);
                            }
                            return d(A);
                        case T:
                            e: {
                                for(Z = x.key; R !== null;){
                                    if (R.key === Z) if (R.tag === 4 && R.stateNode.containerInfo === x.containerInfo && R.stateNode.implementation === x.implementation) {
                                        l(A, R.sibling), q = a(R, x.children || []), q.return = A, A = q;
                                        break e;
                                    } else {
                                        l(A, R);
                                        break;
                                    }
                                    else t(A, R);
                                    R = R.sibling;
                                }
                                q = vr(x, A.mode, q), q.return = A, A = q;
                            }
                            return d(A);
                        case $:
                            return Z = x._init, x = Z(x._payload), Ee(A, R, x, q);
                    }
                    if (We(x)) return ae(A, R, x, q);
                    if (Ue(x)) {
                        if (Z = Ue(x), typeof Z != "function") throw Error(f(150));
                        return x = Z.call(x), ee(A, R, x, q);
                    }
                    if (typeof x.then == "function") return Ee(A, R, Qu(x), q);
                    if (x.$$typeof === k) return Ee(A, R, Mu(A, x), q);
                    Ku(A, x);
                }
                return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, R !== null && R.tag === 6 ? (l(A, R.sibling), q = a(R, x), q.return = A, A = q) : (l(A, R), q = yr(x, A.mode, q), q.return = A, A = q), d(A)) : l(A, R);
            }
            return function(A, R, x, q) {
                try {
                    Ta = 0;
                    var Z = Ee(A, R, x, q);
                    return Bn = null, Z;
                } catch (F) {
                    if (F === ma || F === Du) throw F;
                    var oe = pt(29, F, null, A.mode);
                    return oe.lanes = q, oe.return = A, oe;
                } finally{}
            };
        }
        var wn = zs(!0), Us = zs(!1), Ot = L(null), Pt = null;
        function ml(e) {
            var t = e.alternate;
            G(ke, ke.current & 1), G(Ot, e), Pt === null && (t === null || xn.current !== null || t.memoizedState !== null) && (Pt = e);
        }
        function Ps(e) {
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
        function Jt(e) {
            X(Ot), Pt === e && (Pt = null), X(ke);
        }
        var ke = L(0);
        function Gu(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var l = t.memoizedState;
                    if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || kc(l))) return t;
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
        function $r(e, t, l, n) {
            t = e.memoizedState, l = l(n, t), l = l == null ? t : b({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var Fr = {
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
        function qs(e, t, l, n, a, i, d) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, d) : t.prototype && t.prototype.isPureReactComponent ? !ra(l, n) || !ra(a, i) : !0;
        }
        function Hs(e, t, l, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Fr.enqueueReplaceState(t, t.state, null);
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
        var Yu = typeof reportError == "function" ? reportError : function(e) {
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
        function ks(e) {
            Yu(e);
        }
        function Ls(e) {
            console.error(e);
        }
        function js(e) {
            Yu(e);
        }
        function Vu(e, t) {
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
        function Qs(e, t, l) {
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
        function Wr(e, t, l) {
            return l = dl(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Vu(e, t);
            }, l;
        }
        function Ks(e) {
            return e = dl(e), e.tag = 3, e;
        }
        function Gs(e, t, l, n) {
            var a = l.type.getDerivedStateFromError;
            if (typeof a == "function") {
                var i = n.value;
                e.payload = function() {
                    return a(i);
                }, e.callback = function() {
                    Qs(t, l, n);
                };
            }
            var d = l.stateNode;
            d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
                Qs(t, l, n), typeof a != "function" && (_l === null ? _l = new Set([
                    this
                ]) : _l.add(this));
                var m = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: m !== null ? m : ""
                });
            });
        }
        function U0(e, t, l, n, a) {
            if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (t = l.alternate, t !== null && da(t, l, a, !0), l = Ot.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return Pt === null ? _c() : l.alternate === null && Be === 0 && (Be = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Nr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
                                n
                            ]) : t.add(n), Tc(e, n, a)), !1;
                        case 22:
                            return l.flags |= 65536, n === Nr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    n
                                ])
                            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([
                                n
                            ]) : l.add(n)), Tc(e, n, a)), !1;
                    }
                    throw Error(f(435, l.tag));
                }
                return Tc(e, n, a), _c(), !1;
            }
            if (ye) return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Sr && (e = Error(f(422), {
                cause: n
            }), sa(_t(e, l)))) : (n !== Sr && (t = Error(f(423), {
                cause: n
            }), sa(_t(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = Wr(e.stateNode, n, a), Cr(e, a), Be !== 4 && (Be = 2)), !1;
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
                        return l.flags |= 65536, e = a & -a, l.lanes |= e, e = Wr(l.stateNode, n, e), Cr(l, e), !1;
                    case 1:
                        if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (_l === null || !_l.has(i)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = Ks(a), Gs(a, e, l, n), Cr(l, a), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Ys = Error(f(461)), Ke = !1;
        function Xe(e, t, l, n) {
            t.child = e === null ? Us(t, null, l, n) : wn(t, e.child, l, n);
        }
        function Vs(e, t, l, n, a) {
            l = l.render;
            var i = t.ref;
            if ("ref" in n) {
                var d = {};
                for(var m in n)m !== "ref" && (d[m] = n[m]);
            } else d = n;
            return Zl(t), n = Ur(e, t, l, d, i, a), m = Pr(), e !== null && !Ke ? (qr(e, t, a), $t(e, t, a)) : (ye && m && gr(t), t.flags |= 1, Xe(e, t, n, a), t.child);
        }
        function Xs(e, t, l, n, a) {
            if (e === null) {
                var i = l.type;
                return typeof i == "function" && !mr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Zs(e, t, i, n, a)) : (e = Au(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (i = e.child, !ic(e, a)) {
                var d = i.memoizedProps;
                if (l = l.compare, l = l !== null ? l : ra, l(d, n) && e.ref === t.ref) return $t(e, t, a);
            }
            return t.flags |= 1, e = Kt(i, n), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Zs(e, t, l, n, a) {
            if (e !== null) {
                var i = e.memoizedProps;
                if (ra(i, n) && e.ref === t.ref) if (Ke = !1, t.pendingProps = n = i, ic(e, a)) (e.flags & 131072) !== 0 && (Ke = !0);
                else return t.lanes = e.lanes, $t(e, t, a);
            }
            return Ir(e, t, l, n, a);
        }
        function Js(e, t, l) {
            var n = t.pendingProps, a = n.children, i = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (n = i !== null ? i.baseLanes | l : l, e !== null) {
                        for(a = t.child = e.child, i = 0; a !== null;)i = i | a.lanes | a.childLanes, a = a.sibling;
                        t.childLanes = i & ~n;
                    } else t.childLanes = 0, t.child = null;
                    return $s(e, t, n, l);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && Cu(t, i !== null ? i.cachePool : null), i !== null ? Zo(t, i) : Br(), Ps(t);
                else return t.lanes = t.childLanes = 536870912, $s(e, t, i !== null ? i.baseLanes | l : l, l);
            } else i !== null ? (Cu(t, i.cachePool), Zo(t, i), yl(), t.memoizedState = null) : (e !== null && Cu(t, null), Br(), yl());
            return Xe(e, t, a, l), t.child;
        }
        function $s(e, t, l, n) {
            var a = Or();
            return a = a === null ? null : {
                parent: He._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: a
            }, e !== null && Cu(t, null), Br(), Ps(t), e !== null && da(e, t, n, !0), null;
        }
        function Xu(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(f(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function Ir(e, t, l, n, a) {
            return Zl(t), l = Ur(e, t, l, n, void 0, a), n = Pr(), e !== null && !Ke ? (qr(e, t, a), $t(e, t, a)) : (ye && n && gr(t), t.flags |= 1, Xe(e, t, l, a), t.child);
        }
        function Fs(e, t, l, n, a, i) {
            return Zl(t), t.updateQueue = null, l = $o(t, n, l, a), Jo(e), n = Pr(), e !== null && !Ke ? (qr(e, t, i), $t(e, t, i)) : (ye && n && gr(t), t.flags |= 1, Xe(e, t, l, i), t.child);
        }
        function Ws(e, t, l, n, a) {
            if (Zl(t), t.stateNode === null) {
                var i = Rn, d = l.contextType;
                typeof d == "object" && d !== null && (i = et(d)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Fr, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, xr(t), d = l.contextType, i.context = typeof d == "object" && d !== null ? et(d) : Rn, i.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && ($r(t, l, d, n), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (d = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), d !== i.state && Fr.enqueueReplaceState(i, i.state, null), ba(t, n, i, a), ga(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
            } else if (e === null) {
                i = t.stateNode;
                var m = t.memoizedProps, g = Fl(l, m);
                i.props = g;
                var M = i.context, U = l.contextType;
                d = Rn, typeof U == "object" && U !== null && (d = et(U));
                var H = l.getDerivedStateFromProps;
                U = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, U || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || M !== d) && Hs(t, i, n, d), sl = !1;
                var C = t.memoizedState;
                i.state = C, ba(t, n, i, a), ga(), M = t.memoizedState, m || C !== M || sl ? (typeof H == "function" && ($r(t, l, H, n), M = t.memoizedState), (g = sl || qs(t, l, g, n, C, M, d)) ? (U || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = M), i.props = n, i.state = M, i.context = d, n = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
            } else {
                i = t.stateNode, Mr(e, t), d = t.memoizedProps, U = Fl(l, d), i.props = U, H = t.pendingProps, C = i.context, M = l.contextType, g = Rn, typeof M == "object" && M !== null && (g = et(M)), m = l.getDerivedStateFromProps, (M = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d !== H || C !== g) && Hs(t, i, n, g), sl = !1, C = t.memoizedState, i.state = C, ba(t, n, i, a), ga();
                var B = t.memoizedState;
                d !== H || C !== B || sl || e !== null && e.dependencies !== null && xu(e.dependencies) ? (typeof m == "function" && ($r(t, l, m, n), B = t.memoizedState), (U = sl || qs(t, l, U, n, C, B, g) || e !== null && e.dependencies !== null && xu(e.dependencies)) ? (M || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, B, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, B, g)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = B), i.props = n, i.state = B, i.context = g, n = U) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), n = !1);
            }
            return i = n, Xu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = wn(t, e.child, null, a), t.child = wn(t, null, l, a)) : Xe(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = $t(e, t, a), e;
        }
        function Is(e, t, l, n) {
            return oa(), t.flags |= 256, Xe(e, t, l, n), t.child;
        }
        var ec = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function tc(e) {
            return {
                baseLanes: e,
                cachePool: Lo()
            };
        }
        function lc(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Nt), e;
        }
        function ed(e, t, l) {
            var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, d;
            if ((d = i) || (d = e !== null && e.memoizedState === null ? !1 : (ke.current & 2) !== 0), d && (a = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (ye) {
                    if (a ? ml(t) : yl(), ye) {
                        var m = De, g;
                        if (g = m) {
                            e: {
                                for(g = m, m = Ut; g.nodeType !== 8;){
                                    if (!m) {
                                        m = null;
                                        break e;
                                    }
                                    if (g = Bt(g.nextSibling), g === null) {
                                        m = null;
                                        break e;
                                    }
                                }
                                m = g;
                            }
                            m !== null ? (t.memoizedState = {
                                dehydrated: m,
                                treeContext: Kl !== null ? {
                                    id: Gt,
                                    overflow: Yt
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, g = pt(18, null, null, 0), g.stateNode = m, g.return = t, t.child = g, nt = t, De = null, g = !0) : g = !1;
                        }
                        g || Vl(t);
                    }
                    if (m = t.memoizedState, m !== null && (m = m.dehydrated, m !== null)) return kc(m) ? t.lanes = 32 : t.lanes = 536870912, null;
                    Jt(t);
                }
                return m = n.children, n = n.fallback, a ? (yl(), a = t.mode, m = Zu({
                    mode: "hidden",
                    children: m
                }, a), n = Ql(n, a, l, null), m.return = t, n.return = t, m.sibling = n, t.child = m, a = t.child, a.memoizedState = tc(l), a.childLanes = lc(e, d, l), t.memoizedState = ec, n) : (ml(t), nc(t, m));
            }
            if (g = e.memoizedState, g !== null && (m = g.dehydrated, m !== null)) {
                if (i) t.flags & 256 ? (ml(t), t.flags &= -257, t = ac(e, t, l)) : t.memoizedState !== null ? (yl(), t.child = e.child, t.flags |= 128, t = null) : (yl(), a = n.fallback, m = t.mode, n = Zu({
                    mode: "visible",
                    children: n.children
                }, m), a = Ql(a, m, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, wn(t, e.child, null, l), n = t.child, n.memoizedState = tc(l), n.childLanes = lc(e, d, l), t.memoizedState = ec, t = a);
                else if (ml(t), kc(m)) {
                    if (d = m.nextSibling && m.nextSibling.dataset, d) var M = d.dgst;
                    d = M, n = Error(f(419)), n.stack = "", n.digest = d, sa({
                        value: n,
                        source: null,
                        stack: null
                    }), t = ac(e, t, l);
                } else if (Ke || da(e, t, l, !1), d = (l & e.childLanes) !== 0, Ke || d) {
                    if (d = Ae, d !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : Li(n), n = (n & (d.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== g.retryLane)) throw g.retryLane = n, _n(e, n), bt(d, e, n), Ys;
                    m.data === "$?" || _c(), t = ac(e, t, l);
                } else m.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, De = Bt(m.nextSibling), nt = t, ye = !0, Yl = null, Ut = !1, e !== null && (Tt[At++] = Gt, Tt[At++] = Yt, Tt[At++] = Kl, Gt = e.id, Yt = e.overflow, Kl = t), t = nc(t, n.children), t.flags |= 4096);
                return t;
            }
            return a ? (yl(), a = n.fallback, m = t.mode, g = e.child, M = g.sibling, n = Kt(g, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = g.subtreeFlags & 65011712, M !== null ? a = Kt(M, a) : (a = Ql(a, m, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, m = e.child.memoizedState, m === null ? m = tc(l) : (g = m.cachePool, g !== null ? (M = He._currentValue, g = g.parent !== M ? {
                parent: M,
                pool: M
            } : g) : g = Lo(), m = {
                baseLanes: m.baseLanes | l,
                cachePool: g
            }), a.memoizedState = m, a.childLanes = lc(e, d, l), t.memoizedState = ec, n) : (ml(t), l = e.child, e = l.sibling, l = Kt(l, {
                mode: "visible",
                children: n.children
            }), l.return = t, l.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [
                e
            ], t.flags |= 16) : d.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function nc(e, t) {
            return t = Zu({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Zu(e, t) {
            return e = pt(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function ac(e, t, l) {
            return wn(t, e.child, null, l), e = nc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function td(e, t, l) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), _r(e.return, t, l);
        }
        function uc(e, t, l, n, a) {
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
        function ld(e, t, l) {
            var n = t.pendingProps, a = n.revealOrder, i = n.tail;
            if (Xe(e, t, n.children, l), n = ke.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && td(e, l, t);
                    else if (e.tag === 19) td(e, l, t);
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
                    for(l = t.child, a = null; l !== null;)e = l.alternate, e !== null && Gu(e) === null && (a = l), l = l.sibling;
                    l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), uc(t, !1, a, l, i);
                    break;
                case "backwards":
                    for(l = null, a = t.child, t.child = null; a !== null;){
                        if (e = a.alternate, e !== null && Gu(e) === null) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = l, l = a, a = e;
                    }
                    uc(t, !0, l, null, i);
                    break;
                case "together":
                    uc(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function $t(e, t, l) {
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
        function ic(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && xu(e)));
        }
        function P0(e, t, l) {
            switch(t.tag){
                case 3:
                    Oe(t, t.stateNode.containerInfo), ol(t, He, e.memoizedState.cache), oa();
                    break;
                case 27:
                case 5:
                    Ui(t);
                    break;
                case 4:
                    Oe(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    ol(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var n = t.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (ml(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? ed(e, t, l) : (ml(t), e = $t(e, t, l), e !== null ? e.sibling : null);
                    ml(t);
                    break;
                case 19:
                    var a = (e.flags & 128) !== 0;
                    if (n = (l & t.childLanes) !== 0, n || (da(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                        if (n) return ld(e, t, l);
                        t.flags |= 128;
                    }
                    if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), G(ke, ke.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Js(e, t, l);
                case 24:
                    ol(t, He, e.memoizedState.cache);
            }
            return $t(e, t, l);
        }
        function nd(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ke = !0;
            else {
                if (!ic(e, l) && (t.flags & 128) === 0) return Ke = !1, P0(e, t, l);
                Ke = (e.flags & 131072) !== 0;
            }
            else Ke = !1, ye && (t.flags & 1048576) !== 0 && wo(t, Nu, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var n = t.elementType, a = n._init;
                        if (n = a(n._payload), t.type = n, typeof n == "function") mr(n) ? (e = Fl(n, e), t.tag = 1, t = Ws(null, t, n, e, l)) : (t.tag = 0, t = Ir(null, t, n, e, l));
                        else {
                            if (n != null) {
                                if (a = n.$$typeof, a === V) {
                                    t.tag = 11, t = Vs(null, t, n, e, l);
                                    break e;
                                } else if (a === J) {
                                    t.tag = 14, t = Xs(null, t, n, e, l);
                                    break e;
                                }
                            }
                            throw t = Pl(n) || n, Error(f(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return Ir(e, t, t.type, t.pendingProps, l);
                case 1:
                    return n = t.type, a = Fl(n, t.pendingProps), Ws(e, t, n, a, l);
                case 3:
                    e: {
                        if (Oe(t, t.stateNode.containerInfo), e === null) throw Error(f(387));
                        n = t.pendingProps;
                        var i = t.memoizedState;
                        a = i.element, Mr(e, t), ba(t, n, null, l);
                        var d = t.memoizedState;
                        if (n = d.cache, ol(t, He, n), n !== i.cache && Rr(t, [
                            He
                        ], l, !0), ga(), n = d.element, i.isDehydrated) if (i = {
                            element: n,
                            isDehydrated: !1,
                            cache: d.cache
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                            t = Is(e, t, n, l);
                            break e;
                        } else if (n !== a) {
                            a = _t(Error(f(424)), t), sa(a), t = Is(e, t, n, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(De = Bt(e.firstChild), nt = t, ye = !0, Yl = null, Ut = !0, l = Us(t, null, n, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (oa(), n === a) {
                                t = $t(e, t, l);
                                break e;
                            }
                            Xe(e, t, n, l);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Xu(e, t), e === null ? (l = rh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ye || (l = t.type, e = t.pendingProps, n = ci(ie.current).createElement(l), n[Ie] = t, n[at] = e, Je(n, l, e), Qe(n), t.stateNode = n) : t.memoizedState = rh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return Ui(t), e === null && ye && (n = t.stateNode = ah(t.type, t.pendingProps, ie.current), nt = t, Ut = !0, a = De, Al(t.type) ? (Lc = a, De = Bt(n.firstChild)) : De = a), Xe(e, t, t.pendingProps.children, l), Xu(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && ye && ((a = n = De) && (n = o1(n, t.type, t.pendingProps, Ut), n !== null ? (t.stateNode = n, nt = t, De = Bt(n.firstChild), Ut = !1, a = !0) : a = !1), a || Vl(t)), Ui(t), a = t.type, i = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = i.children, Pc(a, i) ? n = null : d !== null && Pc(a, d) && (t.flags |= 32), t.memoizedState !== null && (a = Ur(e, t, x0, null, null, l), ja._currentValue = a), Xu(e, t), Xe(e, t, n, l), t.child;
                case 6:
                    return e === null && ye && ((e = l = De) && (l = s1(l, t.pendingProps, Ut), l !== null ? (t.stateNode = l, nt = t, De = null, e = !0) : e = !1), e || Vl(t)), null;
                case 13:
                    return ed(e, t, l);
                case 4:
                    return Oe(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = wn(t, null, n, l) : Xe(e, t, n, l), t.child;
                case 11:
                    return Vs(e, t, t.type, t.pendingProps, l);
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
                    return Xs(e, t, t.type, t.pendingProps, l);
                case 15:
                    return Zs(e, t, t.type, t.pendingProps, l);
                case 19:
                    return ld(e, t, l);
                case 31:
                    return n = t.pendingProps, l = t.mode, n = {
                        mode: n.mode,
                        children: n.children
                    }, e === null ? (l = Zu(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Kt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return Js(e, t, l);
                case 24:
                    return Zl(t), n = et(He), e === null ? (a = Or(), a === null && (a = Ae, i = Tr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = {
                        parent: n,
                        cache: a
                    }, xr(t), ol(t, He, a)) : ((e.lanes & l) !== 0 && (Mr(e, t), ba(t, null, null, l), ga()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = {
                        parent: n,
                        cache: n
                    }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ol(t, He, n)) : (n = i.cache, ol(t, He, n), n !== a.cache && Rr(t, [
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
        function ad(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !dh(t)) {
                if (t = Ot.current, t !== null && ((he & 4194048) === he ? Pt !== null : (he & 62914560) !== he && (he & 536870912) === 0 || t !== Pt)) throw ya = Nr, jo;
                e.flags |= 8192;
            }
        }
        function Ju(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Uf() : 536870912, e.lanes |= t, qn |= t);
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
        function q0(e, t, l) {
            var n = t.pendingProps;
            switch(br(t), t.tag){
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
                    return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Xt(He), il(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (fa(t) ? Ft(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Po())), xe(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (Ft(t), l !== null ? (xe(t), ad(t, l)) : (xe(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Ft(t), xe(t), ad(t, l)) : (xe(t), t.flags &= -16777217) : (e.memoizedProps !== n && Ft(t), xe(t), t.flags &= -16777217), null;
                case 27:
                    iu(t), l = ie.current;
                    var a = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(f(166));
                            return xe(t), null;
                        }
                        e = I.current, fa(t) ? zo(t) : (e = ah(a, n, l), t.stateNode = e, Ft(t));
                    }
                    return xe(t), null;
                case 5:
                    if (iu(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(f(166));
                            return xe(t), null;
                        }
                        if (e = I.current, fa(t)) zo(t);
                        else {
                            switch(a = ci(ie.current), e){
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
                            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Fd(e.nodeValue, l)), e || Vl(t);
                        } else e = ci(e).createTextNode(n), e[Ie] = t, t.stateNode = e;
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
                        } else a = Po(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                        if (!a) return t.flags & 256 ? (Jt(t), t) : (Jt(t), null);
                    }
                    if (Jt(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                        n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                        var i = null;
                        n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), Ju(t, t.updateQueue), xe(t), null;
                case 4:
                    return il(), e === null && Dc(t.stateNode.containerInfo), xe(t), null;
                case 10:
                    return Xt(t.type), xe(t), null;
                case 19:
                    if (X(ke), a = t.memoizedState, a === null) return xe(t), null;
                    if (n = (t.flags & 128) !== 0, i = a.rendering, i === null) if (n) Oa(a, !1);
                    else {
                        if (Be !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (i = Gu(e), i !== null) {
                                for(t.flags |= 128, Oa(a, !1), e = i.updateQueue, t.updateQueue = e, Ju(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)Bo(l, e), l = l.sibling;
                                return G(ke, ke.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && zt() > Wu && (t.flags |= 128, n = !0, Oa(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!n) if (e = Gu(i), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Ju(t, e), Oa(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ye) return xe(t), null;
                        } else 2 * zt() - a.renderingStartTime > Wu && l !== 536870912 && (t.flags |= 128, n = !0, Oa(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = zt(), t.sibling = null, e = ke.current, G(ke, n ? e & 1 | 2 : e & 1), t) : (xe(t), null);
                case 22:
                case 23:
                    return Jt(t), wr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), l = t.updateQueue, l !== null && Ju(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && X(Jl), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Xt(He), xe(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(f(156, t.tag));
        }
        function H0(e, t) {
            switch(br(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Xt(He), il(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return iu(t), null;
                case 13:
                    if (Jt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
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
                    return Jt(t), wr(), e !== null && X(Jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Xt(He), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function ud(e, t) {
            switch(br(t), t.tag){
                case 3:
                    Xt(He), il();
                    break;
                case 26:
                case 27:
                case 5:
                    iu(t);
                    break;
                case 4:
                    il();
                    break;
                case 13:
                    Jt(t);
                    break;
                case 19:
                    X(ke);
                    break;
                case 10:
                    Xt(t.type);
                    break;
                case 22:
                case 23:
                    Jt(t), wr(), e !== null && X(Jl);
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
            } catch (m) {
                Te(t, t.return, m);
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
                            var d = n.inst, m = d.destroy;
                            if (m !== void 0) {
                                d.destroy = void 0, a = t;
                                var g = l, M = m;
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
        function id(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    Xo(t, l);
                } catch (n) {
                    Te(e, e.return, n);
                }
            }
        }
        function rd(e, t, l) {
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
        function cd(e) {
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
        function rc(e, t, l) {
            try {
                var n = e.stateNode;
                u1(n, e.type, l, t), n[at] = t;
            } catch (a) {
                Te(e, e.return, a);
            }
        }
        function fd(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Al(e.type) || e.tag === 4;
        }
        function cc(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || fd(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Al(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function fc(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ri));
            else if (n !== 4 && (n === 27 && Al(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(fc(e, t, l), e = e.sibling; e !== null;)fc(e, t, l), e = e.sibling;
        }
        function $u(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (n !== 4 && (n === 27 && Al(e.type) && (l = e.stateNode), e = e.child, e !== null)) for($u(e, t, l), e = e.sibling; e !== null;)$u(e, t, l), e = e.sibling;
        }
        function od(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var n = e.type, a = t.attributes; a.length;)t.removeAttributeNode(a[0]);
                Je(t, n, l), t[Ie] = e, t[at] = l;
            } catch (i) {
                Te(e, e.return, i);
            }
        }
        var Wt = !1, ze = !1, oc = !1, sd = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
        function k0(e, t) {
            if (e = e.containerInfo, zc = pi, e = _o(e), cr(e)) {
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
                        var d = 0, m = -1, g = -1, M = 0, U = 0, H = e, C = null;
                        t: for(;;){
                            for(var B; H !== l || a !== 0 && H.nodeType !== 3 || (m = d + a), H !== i || n !== 0 && H.nodeType !== 3 || (g = d + n), H.nodeType === 3 && (d += H.nodeValue.length), (B = H.firstChild) !== null;)C = H, H = B;
                            for(;;){
                                if (H === e) break t;
                                if (C === l && ++M === a && (m = d), C === i && ++U === n && (g = d), (B = H.nextSibling) !== null) break;
                                H = C, C = H.parentNode;
                            }
                            H = B;
                        }
                        l = m === -1 || g === -1 ? null : {
                            start: m,
                            end: g
                        };
                    } else l = null;
                }
                l = l || {
                    start: 0,
                    end: 0
                };
            } else l = null;
            for(Uc = {
                focusedElem: e,
                selectionRange: l
            }, pi = !1, Ge = t; Ge !== null;)if (t = Ge, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ge = e;
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
                        if ((e & 1024) !== 0) throw Error(f(163));
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, Ge = e;
                    break;
                }
                Ge = t.return;
            }
        }
        function dd(e, t, l) {
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
                    n & 64 && id(l), n & 512 && xa(l, l.return);
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
                            Xo(e, t);
                        } catch (d) {
                            Te(l, l.return, d);
                        }
                    }
                    break;
                case 27:
                    t === null && n & 4 && od(l);
                case 26:
                case 5:
                    gl(e, l), t === null && n & 4 && cd(l), n & 512 && xa(l, l.return);
                    break;
                case 12:
                    gl(e, l);
                    break;
                case 13:
                    gl(e, l), n & 4 && md(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Z0.bind(null, l), d1(e, l))));
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
        function hd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, hd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ki(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Ne = null, rt = !1;
        function It(e, t, l) {
            for(l = l.child; l !== null;)pd(e, t, l), l = l.sibling;
        }
        function pd(e, t, l) {
            if (st && typeof st.onCommitFiberUnmount == "function") try {
                st.onCommitFiberUnmount(Jn, l);
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
                    Ne !== null && (rt ? (e = Ne, lh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ya(e)) : lh(Ne, l.stateNode));
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
                    ze || (qt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && rd(l, t, n)), It(e, t, l);
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
        function md(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Ya(e);
            } catch (l) {
                Te(t, t.return, l);
            }
        }
        function L0(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new sd), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new sd), t;
                default:
                    throw Error(f(435, e.tag));
            }
        }
        function sc(e, t) {
            var l = L0(e);
            t.forEach(function(n) {
                var a = J0.bind(null, e, n);
                l.has(n) || (l.add(n), n.then(a, a));
            });
        }
        function mt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var n = 0; n < l.length; n++){
                var a = l[n], i = e, d = t, m = d;
                e: for(; m !== null;){
                    switch(m.tag){
                        case 27:
                            if (Al(m.type)) {
                                Ne = m.stateNode, rt = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Ne = m.stateNode, rt = !1;
                            break e;
                        case 3:
                        case 4:
                            Ne = m.stateNode.containerInfo, rt = !0;
                            break e;
                    }
                    m = m.return;
                }
                if (Ne === null) throw Error(f(160));
                pd(i, d, a), Ne = null, rt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)yd(t, e), t = t.sibling;
        }
        var Dt = null;
        function yd(e, t) {
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
                                        i = a.getElementsByTagName("title")[0], (!i || i[Wn] || i[Ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(i, a.querySelector("head > title"))), Je(i, n, l), i[Ie] = e, Qe(i), n = i;
                                        break e;
                                    case "link":
                                        var d = oh("link", "href", a).get(n + (l.href || ""));
                                        if (d) {
                                            for(var m = 0; m < d.length; m++)if (i = d[m], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                d.splice(m, 1);
                                                break t;
                                            }
                                        }
                                        i = a.createElement(n), Je(i, n, l), a.head.appendChild(i);
                                        break;
                                    case "meta":
                                        if (d = oh("meta", "content", a).get(n + (l.content || ""))) {
                                            for(m = 0; m < d.length; m++)if (i = d[m], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                d.splice(m, 1);
                                                break t;
                                            }
                                        }
                                        i = a.createElement(n), Je(i, n, l), a.head.appendChild(i);
                                        break;
                                    default:
                                        throw Error(f(468, n));
                                }
                                i[Ie] = e, Qe(i), n = i;
                            }
                            e.stateNode = n;
                        } else sh(a, e.type, e.stateNode);
                        else e.stateNode = fh(a, n, e.memoizedProps);
                        else i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? sh(a, e.type, e.stateNode) : fh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && rc(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    mt(t, e), yt(e), n & 512 && (ze || l === null || qt(l, l.return)), l !== null && n & 4 && rc(e, e.memoizedProps, l.memoizedProps);
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
                    n & 4 && e.stateNode != null && (a = e.memoizedProps, rc(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (oc = !0);
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
                    if (si = null, a = Dt, Dt = fi(t.containerInfo), mt(t, e), Dt = a, yt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Ya(t.containerInfo);
                    } catch (B) {
                        Te(e, e.return, B);
                    }
                    oc && (oc = !1, vd(e));
                    break;
                case 4:
                    n = Dt, Dt = fi(e.stateNode.containerInfo), mt(t, e), yt(e), Dt = n;
                    break;
                case 12:
                    mt(t, e), yt(e);
                    break;
                case 13:
                    mt(t, e), yt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (vc = zt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, sc(e, n)));
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
                                        m = g.stateNode;
                                        var H = g.memoizedProps.style, C = H != null && H.hasOwnProperty("display") ? H.display : null;
                                        m.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
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
                    n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, sc(e, l))));
                    break;
                case 19:
                    mt(t, e), yt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, sc(e, n)));
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
                        if (fd(n)) {
                            l = n;
                            break;
                        }
                        n = n.return;
                    }
                    if (l == null) throw Error(f(160));
                    switch(l.tag){
                        case 27:
                            var a = l.stateNode, i = cc(e);
                            $u(e, i, a);
                            break;
                        case 5:
                            var d = l.stateNode;
                            l.flags & 32 && (mn(d, ""), l.flags &= -33);
                            var m = cc(e);
                            $u(e, m, d);
                            break;
                        case 3:
                        case 4:
                            var g = l.stateNode.containerInfo, M = cc(e);
                            fc(e, M, g);
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
        function vd(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                vd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function gl(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)dd(e, t.alternate, t), t = t.sibling;
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
                        typeof l.componentWillUnmount == "function" && rd(t, t.return, l), Wl(t);
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
                            var m = n.stateNode;
                            try {
                                var g = a.shared.hiddenCallbacks;
                                if (g !== null) for(a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++)Vo(g[a], m);
                            } catch (M) {
                                Te(n, n.return, M);
                            }
                        }
                        l && d & 64 && id(i), xa(i, i.return);
                        break;
                    case 27:
                        od(i);
                    case 26:
                    case 5:
                        bl(a, i, l), l && n === null && d & 4 && cd(i), xa(i, i.return);
                        break;
                    case 12:
                        bl(a, i, l);
                        break;
                    case 13:
                        bl(a, i, l), l && d & 4 && md(a, i);
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
        function dc(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ha(l));
        }
        function hc(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ha(e));
        }
        function Ht(e, t, l, n) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)gd(e, t, l, n), t = t.sibling;
        }
        function gd(e, t, l, n) {
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
                            var i = t.memoizedProps, d = i.id, m = i.onPostCommit;
                            typeof m == "function" && m(d, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
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
                    i = t.stateNode, d = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Ht(e, t, l, n) : Ma(e, t) : i._visibility & 2 ? Ht(e, t, l, n) : (i._visibility |= 2, zn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && dc(d, t);
                    break;
                case 24:
                    Ht(e, t, l, n), a & 2048 && hc(t.alternate, t);
                    break;
                default:
                    Ht(e, t, l, n);
            }
        }
        function zn(e, t, l, n, a) {
            for(a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var i = e, d = t, m = l, g = n, M = d.flags;
                switch(d.tag){
                    case 0:
                    case 11:
                    case 15:
                        zn(i, d, m, g, a), Na(8, d);
                        break;
                    case 23:
                        break;
                    case 22:
                        var U = d.stateNode;
                        d.memoizedState !== null ? U._visibility & 2 ? zn(i, d, m, g, a) : Ma(i, d) : (U._visibility |= 2, zn(i, d, m, g, a)), a && M & 2048 && dc(d.alternate, d);
                        break;
                    case 24:
                        zn(i, d, m, g, a), a && M & 2048 && hc(d.alternate, d);
                        break;
                    default:
                        zn(i, d, m, g, a);
                }
                t = t.sibling;
            }
        }
        function Ma(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var l = e, n = t, a = n.flags;
                switch(n.tag){
                    case 22:
                        Ma(l, n), a & 2048 && dc(n.alternate, n);
                        break;
                    case 24:
                        Ma(l, n), a & 2048 && hc(n.alternate, n);
                        break;
                    default:
                        Ma(l, n);
                }
                t = t.sibling;
            }
        }
        var Ca = 8192;
        function Un(e) {
            if (e.subtreeFlags & Ca) for(e = e.child; e !== null;)bd(e), e = e.sibling;
        }
        function bd(e) {
            switch(e.tag){
                case 26:
                    Un(e), e.flags & Ca && e.memoizedState !== null && A1(Dt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    Un(e);
                    break;
                case 3:
                case 4:
                    var t = Dt;
                    Dt = fi(e.stateNode.containerInfo), Un(e), Dt = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ca, Ca = 16777216, Un(e), Ca = t) : Un(e));
                    break;
                default:
                    Un(e);
            }
        }
        function Sd(e) {
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
                    Ge = n, _d(n, e);
                }
                Sd(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)Ed(e), e = e.sibling;
        }
        function Ed(e) {
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
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Fu(e)) : Da(e);
                    break;
                default:
                    Da(e);
            }
        }
        function Fu(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ge = n, _d(n, e);
                }
                Sd(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        vl(8, t, t.return), Fu(t);
                        break;
                    case 22:
                        l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Fu(t));
                        break;
                    default:
                        Fu(t);
                }
                e = e.sibling;
            }
        }
        function _d(e, t) {
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
                    if (hd(n), n === l) {
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
        var j0 = {
            getCacheForType: function(e) {
                var t = et(He), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, Q0 = typeof WeakMap == "function" ? WeakMap : Map, ve = 0, Ae = null, se = null, he = 0, ge = 0, vt = null, Sl = !1, Pn = !1, pc = !1, el = 0, Be = 0, El = 0, Il = 0, mc = 0, Nt = 0, qn = 0, Ba = null, ct = null, yc = !1, vc = 0, Wu = 1 / 0, Iu = null, _l = null, Ze = 0, Rl = null, Hn = null, kn = 0, gc = 0, bc = null, Rd = null, wa = 0, Sc = null;
        function gt() {
            if ((ve & 2) !== 0 && he !== 0) return he & -he;
            if (P.T !== null) {
                var e = On;
                return e !== 0 ? e : Nc();
            }
            return Hf();
        }
        function Td() {
            Nt === 0 && (Nt = (he & 536870912) === 0 || ye ? zf() : 536870912);
            var e = Ot.current;
            return e !== null && (e.flags |= 32), Nt;
        }
        function bt(e, t, l) {
            (e === Ae && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) && (Ln(e, 0), Tl(e, he, Nt, !1)), Fn(e, l), ((ve & 2) === 0 || e !== Ae) && (e === Ae && ((ve & 2) === 0 && (Il |= l), Be === 4 && Tl(e, he, Nt, !1)), kt(e));
        }
        function Ad(e, t, l) {
            if ((ve & 6) !== 0) throw Error(f(327));
            var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || $n(e, t), a = n ? Y0(e, t) : Rc(e, t, !0), i = n;
            do {
                if (a === 0) {
                    Pn && !n && Tl(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, i && !K0(l)) {
                        a = Rc(e, t, !1), i = !1;
                        continue;
                    }
                    if (a === 2) {
                        if (i = t, e.errorRecoveryDisabledLanes & i) var d = 0;
                        else d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
                        if (d !== 0) {
                            t = d;
                            e: {
                                var m = e;
                                a = Ba;
                                var g = m.current.memoizedState.isDehydrated;
                                if (g && (Ln(m, d).flags |= 256), d = Rc(m, d, !1), d !== 2) {
                                    if (pc && !g) {
                                        m.errorRecoveryDisabledLanes |= i, Il |= i, a = 4;
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
                        if ((t & 62914560) === t && (a = vc + 300 - zt(), 10 < a)) {
                            if (Tl(n, t, Nt, !Sl), ou(n, 0, !0) !== 0) break e;
                            n.timeoutHandle = eh(Od.bind(null, n, l, ct, Iu, yc, t, Nt, Il, qn, Sl, i, 2, -0, 0), a);
                            break e;
                        }
                        Od(n, l, ct, Iu, yc, t, Nt, Il, qn, Sl, i, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            kt(e);
        }
        function Od(e, t, l, n, a, i, d, m, g, M, U, H, C, B) {
            if (e.timeoutHandle = -1, H = t.subtreeFlags, (H & 8192 || (H & 16785408) === 16785408) && (La = {
                stylesheets: null,
                count: 0,
                unsuspend: T1
            }, bd(t), H = O1(), H !== null)) {
                e.cancelPendingCommit = H(wd.bind(null, e, t, i, l, n, a, d, m, g, U, 1, C, B)), Tl(e, i, d, !M);
                return;
            }
            wd(e, t, i, l, n, a, d, m, g);
        }
        function K0(e) {
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
            t &= ~mc, t &= ~Il, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
            for(var a = t; 0 < a;){
                var i = 31 - dt(a), d = 1 << i;
                n[i] = -1, a &= ~d;
            }
            l !== 0 && Pf(e, l, t);
        }
        function ei() {
            return (ve & 6) === 0 ? (za(0), !1) : !0;
        }
        function Ec() {
            if (se !== null) {
                if (ge === 0) var e = se.return;
                else e = se, Vt = Xl = null, Hr(e), Bn = null, Ta = 0, e = se;
                for(; e !== null;)ud(e.alternate, e), e = e.return;
                se = null;
            }
        }
        function Ln(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, r1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Ec(), Ae = e, se = l = Kt(e.current, null), he = t, ge = 0, vt = null, Sl = !1, Pn = $n(e, t), pc = !1, qn = Nt = mc = Il = El = Be = 0, ct = Ba = null, yc = !1, (t & 8) !== 0 && (t |= t & 32);
            var n = e.entangledLanes;
            if (n !== 0) for(e = e.entanglements, n &= t; 0 < n;){
                var a = 31 - dt(n), i = 1 << a;
                t |= e[a], n &= ~i;
            }
            return el = t, _u(), l;
        }
        function Nd(e, t) {
            fe = null, P.H = ju, t === ma || t === Du ? (t = Go(), ge = 3) : t === jo ? (t = Go(), ge = 4) : ge = t === Ys ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, vt = t, se === null && (Be = 1, Vu(e, _t(t, e.current)));
        }
        function xd() {
            var e = P.H;
            return P.H = ju, e === null ? ju : e;
        }
        function Md() {
            var e = P.A;
            return P.A = j0, e;
        }
        function _c() {
            Be = 4, Sl || (he & 4194048) !== he && Ot.current !== null || (Pn = !0), (El & 134217727) === 0 && (Il & 134217727) === 0 || Ae === null || Tl(Ae, he, Nt, !1);
        }
        function Rc(e, t, l) {
            var n = ve;
            ve |= 2;
            var a = xd(), i = Md();
            (Ae !== e || he !== t) && (Iu = null, Ln(e, t)), t = !1;
            var d = Be;
            e: do try {
                if (ge !== 0 && se !== null) {
                    var m = se, g = vt;
                    switch(ge){
                        case 8:
                            Ec(), d = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ot.current === null && (t = !0);
                            var M = ge;
                            if (ge = 0, vt = null, jn(e, m, g, M), l && Pn) {
                                d = 0;
                                break e;
                            }
                            break;
                        default:
                            M = ge, ge = 0, vt = null, jn(e, m, g, M);
                    }
                }
                G0(), d = Be;
                break;
            } catch (U) {
                Nd(e, U);
            }
            while (!0);
            return t && e.shellSuspendCounter++, Vt = Xl = null, ve = n, P.H = a, P.A = i, se === null && (Ae = null, he = 0, _u()), d;
        }
        function G0() {
            for(; se !== null;)Cd(se);
        }
        function Y0(e, t) {
            var l = ve;
            ve |= 2;
            var n = xd(), a = Md();
            Ae !== e || he !== t ? (Iu = null, Wu = zt() + 500, Ln(e, t)) : Pn = $n(e, t);
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
                            if (Qo(i)) {
                                ge = 0, vt = null, Dd(t);
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
                            Qo(i) ? (ge = 0, vt = null, Dd(t)) : (ge = 0, vt = null, jn(e, t, i, 7));
                            break;
                        case 5:
                            var d = null;
                            switch(se.tag){
                                case 26:
                                    d = se.memoizedState;
                                case 5:
                                case 27:
                                    var m = se;
                                    if (!d || dh(d)) {
                                        ge = 0, vt = null;
                                        var g = m.sibling;
                                        if (g !== null) se = g;
                                        else {
                                            var M = m.return;
                                            M !== null ? (se = M, ti(M)) : se = null;
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
                            Ec(), Be = 6;
                            break e;
                        default:
                            throw Error(f(462));
                    }
                }
                V0();
                break;
            } catch (U) {
                Nd(e, U);
            }
            while (!0);
            return Vt = Xl = null, P.H = n, P.A = a, ve = l, se !== null ? 0 : (Ae = null, he = 0, _u(), Be);
        }
        function V0() {
            for(; se !== null && !pm();)Cd(se);
        }
        function Cd(e) {
            var t = nd(e.alternate, e, el);
            e.memoizedProps = e.pendingProps, t === null ? ti(e) : se = t;
        }
        function Dd(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Fs(l, t, t.pendingProps, t.type, void 0, he);
                    break;
                case 11:
                    t = Fs(l, t, t.pendingProps, t.type.render, t.ref, he);
                    break;
                case 5:
                    Hr(t);
                default:
                    ud(l, t), t = se = Bo(t, el), t = nd(l, t, el);
            }
            e.memoizedProps = e.pendingProps, t === null ? ti(e) : se = t;
        }
        function jn(e, t, l, n) {
            Vt = Xl = null, Hr(t), Bn = null, Ta = 0;
            var a = t.return;
            try {
                if (U0(e, a, t, l, he)) {
                    Be = 1, Vu(e, _t(l, e.current)), se = null;
                    return;
                }
            } catch (i) {
                if (a !== null) throw se = a, i;
                Be = 1, Vu(e, _t(l, e.current)), se = null;
                return;
            }
            t.flags & 32768 ? (ye || n === 1 ? e = !0 : Pn || (he & 536870912) !== 0 ? e = !1 : (Sl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ot.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Bd(t, e)) : ti(t);
        }
        function ti(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Bd(t, Sl);
                    return;
                }
                e = t.return;
                var l = q0(t.alternate, t, el);
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
        function Bd(e, t) {
            do {
                var l = H0(e.alternate, e);
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
        function wd(e, t, l, n, a, i, d, m, g) {
            e.cancelPendingCommit = null;
            do li();
            while (Ze !== 0);
            if ((ve & 6) !== 0) throw Error(f(327));
            if (t !== null) {
                if (t === e.current) throw Error(f(177));
                if (i = t.lanes | t.childLanes, i |= hr, Tm(e, l, i, d, m, g), e === Ae && (se = Ae = null, he = 0), Hn = t, Rl = e, kn = l, gc = i, bc = a, Rd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, $0(ru, function() {
                    return Hd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                    n = P.T, P.T = null, a = Y.p, Y.p = 2, d = ve, ve |= 4;
                    try {
                        k0(e, t, l);
                    } finally{
                        ve = d, Y.p = a, P.T = n;
                    }
                }
                Ze = 1, zd(), Ud(), Pd();
            }
        }
        function zd() {
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
                        yd(t, e);
                        var i = Uc, d = _o(e.containerInfo), m = i.focusedElem, g = i.selectionRange;
                        if (d !== m && m && m.ownerDocument && Eo(m.ownerDocument.documentElement, m)) {
                            if (g !== null && cr(m)) {
                                var M = g.start, U = g.end;
                                if (U === void 0 && (U = M), "selectionStart" in m) m.selectionStart = M, m.selectionEnd = Math.min(U, m.value.length);
                                else {
                                    var H = m.ownerDocument || document, C = H && H.defaultView || window;
                                    if (C.getSelection) {
                                        var B = C.getSelection(), ae = m.textContent.length, ee = Math.min(g.start, ae), Ee = g.end === void 0 ? ee : Math.min(g.end, ae);
                                        !B.extend && ee > Ee && (d = Ee, Ee = ee, ee = d);
                                        var A = So(m, ee), R = So(m, Ee);
                                        if (A && R && (B.rangeCount !== 1 || B.anchorNode !== A.node || B.anchorOffset !== A.offset || B.focusNode !== R.node || B.focusOffset !== R.offset)) {
                                            var x = H.createRange();
                                            x.setStart(A.node, A.offset), B.removeAllRanges(), ee > Ee ? (B.addRange(x), B.extend(R.node, R.offset)) : (x.setEnd(R.node, R.offset), B.addRange(x));
                                        }
                                    }
                                }
                            }
                            for(H = [], B = m; B = B.parentNode;)B.nodeType === 1 && H.push({
                                element: B,
                                left: B.scrollLeft,
                                top: B.scrollTop
                            });
                            for(typeof m.focus == "function" && m.focus(), m = 0; m < H.length; m++){
                                var q = H[m];
                                q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
                            }
                        }
                        pi = !!zc, Uc = zc = null;
                    } finally{
                        ve = a, Y.p = n, P.T = l;
                    }
                }
                e.current = t, Ze = 2;
            }
        }
        function Ud() {
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
                        dd(e, t.alternate, t);
                    } finally{
                        ve = a, Y.p = n, P.T = l;
                    }
                }
                Ze = 3;
            }
        }
        function Pd() {
            if (Ze === 4 || Ze === 3) {
                Ze = 0, mm();
                var e = Rl, t = Hn, l = kn, n = Rd;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ze = 5 : (Ze = 0, Hn = Rl = null, qd(e, e.pendingLanes));
                var a = e.pendingLanes;
                if (a === 0 && (_l = null), ji(l), t = t.stateNode, st && typeof st.onCommitFiberRoot == "function") try {
                    st.onCommitFiberRoot(Jn, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (n !== null) {
                    t = P.T, a = Y.p, Y.p = 2, P.T = null;
                    try {
                        for(var i = e.onRecoverableError, d = 0; d < n.length; d++){
                            var m = n[d];
                            i(m.value, {
                                componentStack: m.stack
                            });
                        }
                    } finally{
                        P.T = t, Y.p = a;
                    }
                }
                (kn & 3) !== 0 && li(), kt(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === Sc ? wa++ : (wa = 0, Sc = e) : wa = 0, za(0);
            }
        }
        function qd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ha(t)));
        }
        function li(e) {
            return zd(), Ud(), Pd(), Hd();
        }
        function Hd() {
            if (Ze !== 5) return !1;
            var e = Rl, t = gc;
            gc = 0;
            var l = ji(kn), n = P.T, a = Y.p;
            try {
                Y.p = 32 > l ? 32 : l, P.T = null, l = bc, bc = null;
                var i = Rl, d = kn;
                if (Ze = 0, Hn = Rl = null, kn = 0, (ve & 6) !== 0) throw Error(f(331));
                var m = ve;
                if (ve |= 4, Ed(i.current), gd(i, i.current, d, l), ve = m, za(0, !1), st && typeof st.onPostCommitFiberRoot == "function") try {
                    st.onPostCommitFiberRoot(Jn, i);
                } catch  {}
                return !0;
            } finally{
                Y.p = a, P.T = n, qd(e, t);
            }
        }
        function kd(e, t, l) {
            t = _t(l, t), t = Wr(e.stateNode, t, 2), e = hl(e, t, 2), e !== null && (Fn(e, 2), kt(e));
        }
        function Te(e, t, l) {
            if (e.tag === 3) kd(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    kd(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (_l === null || !_l.has(n))) {
                        e = _t(l, e), l = Ks(2), n = hl(t, l, 2), n !== null && (Gs(l, n, t, e), Fn(n, 2), kt(n));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Tc(e, t, l) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new Q0;
                var a = new Set;
                n.set(t, a);
            } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
            a.has(l) || (pc = !0, a.add(l), e = X0.bind(null, e, t, l), t.then(e, e));
        }
        function X0(e, t, l) {
            var n = e.pingCache;
            n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ae === e && (he & l) === l && (Be === 4 || Be === 3 && (he & 62914560) === he && 300 > zt() - vc ? (ve & 2) === 0 && Ln(e, 0) : mc |= l, qn === he && (qn = 0)), kt(e);
        }
        function Ld(e, t) {
            t === 0 && (t = Uf()), e = _n(e, t), e !== null && (Fn(e, t), kt(e));
        }
        function Z0(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), Ld(e, l);
        }
        function J0(e, t) {
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
            n !== null && n.delete(t), Ld(e, l);
        }
        function $0(e, t) {
            return qi(e, t);
        }
        var ni = null, Qn = null, Ac = !1, ai = !1, Oc = !1, en = 0;
        function kt(e) {
            e !== Qn && e.next === null && (Qn === null ? ni = Qn = e : Qn = Qn.next = e), ai = !0, Ac || (Ac = !0, W0());
        }
        function za(e, t) {
            if (!Oc && ai) {
                Oc = !0;
                do for(var l = !1, n = ni; n !== null;){
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var i = 0;
                        else {
                            var d = n.suspendedLanes, m = n.pingedLanes;
                            i = (1 << 31 - dt(42 | e) + 1) - 1, i &= a & ~(d & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                        }
                        i !== 0 && (l = !0, Gd(n, i));
                    } else i = he, i = ou(n, n === Ae ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (i & 3) === 0 || $n(n, i) || (l = !0, Gd(n, i));
                    n = n.next;
                }
                while (l);
                Oc = !1;
            }
        }
        function F0() {
            jd();
        }
        function jd() {
            ai = Ac = !1;
            var e = 0;
            en !== 0 && (i1() && (e = en), en = 0);
            for(var t = zt(), l = null, n = ni; n !== null;){
                var a = n.next, i = Qd(n, t);
                i === 0 ? (n.next = null, l === null ? ni = a : l.next = a, a === null && (Qn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ai = !0)), n = a;
            }
            za(e);
        }
        function Qd(e, t) {
            for(var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;){
                var d = 31 - dt(i), m = 1 << d, g = a[d];
                g === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[d] = Rm(m, t)) : g <= t && (e.expiredLanes |= m), i &= ~m;
            }
            if (t = Ae, l = he, l = ou(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && Hi(n), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || $n(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(n !== null && Hi(n), ji(l)){
                    case 2:
                    case 8:
                        l = Bf;
                        break;
                    case 32:
                        l = ru;
                        break;
                    case 268435456:
                        l = wf;
                        break;
                    default:
                        l = ru;
                }
                return n = Kd.bind(null, e), l = qi(l, n), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return n !== null && n !== null && Hi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Kd(e, t) {
            if (Ze !== 0 && Ze !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (li() && e.callbackNode !== l) return null;
            var n = he;
            return n = ou(e, e === Ae ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (Ad(e, n, t), Qd(e, zt()), e.callbackNode != null && e.callbackNode === l ? Kd.bind(null, e) : null);
        }
        function Gd(e, t) {
            if (li()) return null;
            Ad(e, t, !0);
        }
        function W0() {
            c1(function() {
                (ve & 6) !== 0 ? qi(Df, F0) : jd();
            });
        }
        function Nc() {
            return en === 0 && (en = zf()), en;
        }
        function Yd(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mu("" + e);
        }
        function Vd(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function I0(e, t, l, n, a) {
            if (t === "submit" && l && l.stateNode === a) {
                var i = Yd((a[at] || null).action), d = n.submitter;
                d && (t = (t = d[at] || null) ? Yd(t.formAction) : d.getAttribute("formAction"), t !== null && (i = t, d = null));
                var m = new bu("action", "action", null, n, a);
                e.push({
                    event: m,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (en !== 0) {
                                        var g = d ? Vd(a, d) : new FormData(a);
                                        Xr(l, {
                                            pending: !0,
                                            data: g,
                                            method: a.method,
                                            action: i
                                        }, null, g);
                                    }
                                } else typeof i == "function" && (m.preventDefault(), g = d ? Vd(a, d) : new FormData(a), Xr(l, {
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
        for(var xc = 0; xc < dr.length; xc++){
            var Mc = dr[xc], e1 = Mc.toLowerCase(), t1 = Mc[0].toUpperCase() + Mc.slice(1);
            Ct(e1, "on" + t1);
        }
        Ct(Ao, "onAnimationEnd"), Ct(Oo, "onAnimationIteration"), Ct(No, "onAnimationStart"), Ct("dblclick", "onDoubleClick"), Ct("focusin", "onFocus"), Ct("focusout", "onBlur"), Ct(g0, "onTransitionRun"), Ct(b0, "onTransitionStart"), Ct(S0, "onTransitionCancel"), Ct(xo, "onTransitionEnd"), dn("onMouseEnter", [
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
        var Ua = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), l1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ua));
        function Xd(e, t) {
            t = (t & 4) !== 0;
            for(var l = 0; l < e.length; l++){
                var n = e[l], a = n.event;
                n = n.listeners;
                e: {
                    var i = void 0;
                    if (t) for(var d = n.length - 1; 0 <= d; d--){
                        var m = n[d], g = m.instance, M = m.currentTarget;
                        if (m = m.listener, g !== i && a.isPropagationStopped()) break e;
                        i = m, a.currentTarget = M;
                        try {
                            i(a);
                        } catch (U) {
                            Yu(U);
                        }
                        a.currentTarget = null, i = g;
                    }
                    else for(d = 0; d < n.length; d++){
                        if (m = n[d], g = m.instance, M = m.currentTarget, m = m.listener, g !== i && a.isPropagationStopped()) break e;
                        i = m, a.currentTarget = M;
                        try {
                            i(a);
                        } catch (U) {
                            Yu(U);
                        }
                        a.currentTarget = null, i = g;
                    }
                }
            }
        }
        function de(e, t) {
            var l = t[Qi];
            l === void 0 && (l = t[Qi] = new Set);
            var n = e + "__bubble";
            l.has(n) || (Zd(t, e, 2, !1), l.add(n));
        }
        function Cc(e, t, l) {
            var n = 0;
            t && (n |= 4), Zd(l, e, n, t);
        }
        var ui = "_reactListening" + Math.random().toString(36).slice(2);
        function Dc(e) {
            if (!e[ui]) {
                e[ui] = !0, Lf.forEach(function(l) {
                    l !== "selectionchange" && (l1.has(l) || Cc(l, !1, e), Cc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[ui] || (t[ui] = !0, Cc("selectionchange", !1, t));
            }
        }
        function Zd(e, t, l, n) {
            switch(gh(t)){
                case 2:
                    var a = M1;
                    break;
                case 8:
                    a = C1;
                    break;
                default:
                    a = Yc;
            }
            l = a.bind(null, t, l, e), a = void 0, !Ii || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
                capture: !0,
                passive: a
            }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
                passive: a
            }) : e.addEventListener(t, l, !1);
        }
        function Bc(e, t, l, n, a) {
            var i = n;
            if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for(;;){
                if (n === null) return;
                var d = n.tag;
                if (d === 3 || d === 4) {
                    var m = n.stateNode.containerInfo;
                    if (m === a) break;
                    if (d === 4) for(d = n.return; d !== null;){
                        var g = d.tag;
                        if ((g === 3 || g === 4) && d.stateNode.containerInfo === a) return;
                        d = d.return;
                    }
                    for(; m !== null;){
                        if (d = fn(m), d === null) return;
                        if (g = d.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                            n = i = d;
                            continue e;
                        }
                        m = m.parentNode;
                    }
                }
                n = n.return;
            }
            eo(function() {
                var M = i, U = Fi(l), H = [];
                e: {
                    var C = Mo.get(e);
                    if (C !== void 0) {
                        var B = bu, ae = e;
                        switch(e){
                            case "keypress":
                                if (vu(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                B = $m;
                                break;
                            case "focusin":
                                ae = "focus", B = nr;
                                break;
                            case "focusout":
                                ae = "blur", B = nr;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                B = nr;
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
                                B = Hm;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                B = Im;
                                break;
                            case Ao:
                            case Oo:
                            case No:
                                B = jm;
                                break;
                            case xo:
                                B = t0;
                                break;
                            case "scroll":
                            case "scrollend":
                                B = Pm;
                                break;
                            case "wheel":
                                B = n0;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                B = Km;
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
                                B = u0;
                        }
                        var ee = (t & 4) !== 0, Ee = !ee && (e === "scroll" || e === "scrollend"), A = ee ? C !== null ? C + "Capture" : null : C;
                        ee = [];
                        for(var R = M, x; R !== null;){
                            var q = R;
                            if (x = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || x === null || A === null || (q = ea(R, A), q != null && ee.push(Pa(R, q, x))), Ee) break;
                            R = R.return;
                        }
                        0 < ee.length && (C = new B(C, ae, null, l, U), H.push({
                            event: C,
                            listeners: ee
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (C = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", C && l !== $i && (ae = l.relatedTarget || l.fromElement) && (fn(ae) || ae[cn])) break e;
                        if ((B || C) && (C = U.window === U ? U : (C = U.ownerDocument) ? C.defaultView || C.parentWindow : window, B ? (ae = l.relatedTarget || l.toElement, B = M, ae = ae ? fn(ae) : null, ae !== null && (Ee = s(ae), ee = ae.tag, ae !== Ee || ee !== 5 && ee !== 27 && ee !== 6) && (ae = null)) : (B = null, ae = M), B !== ae)) {
                            if (ee = no, q = "onMouseLeave", A = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ee = uo, q = "onPointerLeave", A = "onPointerEnter", R = "pointer"), Ee = B == null ? C : In(B), x = ae == null ? C : In(ae), C = new ee(q, R + "leave", B, l, U), C.target = Ee, C.relatedTarget = x, q = null, fn(U) === M && (ee = new ee(A, R + "enter", ae, l, U), ee.target = x, ee.relatedTarget = Ee, q = ee), Ee = q, B && ae) t: {
                                for(ee = B, A = ae, R = 0, x = ee; x; x = Kn(x))R++;
                                for(x = 0, q = A; q; q = Kn(q))x++;
                                for(; 0 < R - x;)ee = Kn(ee), R--;
                                for(; 0 < x - R;)A = Kn(A), x--;
                                for(; R--;){
                                    if (ee === A || A !== null && ee === A.alternate) break t;
                                    ee = Kn(ee), A = Kn(A);
                                }
                                ee = null;
                            }
                            else ee = null;
                            B !== null && Jd(H, C, B, ee, !1), ae !== null && Ee !== null && Jd(H, Ee, ae, ee, !0);
                        }
                    }
                    e: {
                        if (C = M ? In(M) : window, B = C.nodeName && C.nodeName.toLowerCase(), B === "select" || B === "input" && C.type === "file") var Z = po;
                        else if (so(C)) if (mo) Z = m0;
                        else {
                            Z = h0;
                            var oe = d0;
                        }
                        else B = C.nodeName, !B || B.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? M && Ji(M.elementType) && (Z = po) : Z = p0;
                        if (Z && (Z = Z(e, M))) {
                            ho(H, Z, l, U);
                            break e;
                        }
                        oe && oe(e, C, M), e === "focusout" && M && C.type === "number" && M.memoizedProps.value != null && Zi(C, "number", C.value);
                    }
                    switch(oe = M ? In(M) : window, e){
                        case "focusin":
                            (so(oe) || oe.contentEditable === "true") && (bn = oe, fr = M, ca = null);
                            break;
                        case "focusout":
                            ca = fr = bn = null;
                            break;
                        case "mousedown":
                            or = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            or = !1, Ro(H, l, U);
                            break;
                        case "selectionchange":
                            if (v0) break;
                        case "keydown":
                        case "keyup":
                            Ro(H, l, U);
                    }
                    var F;
                    if (ur) e: {
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
                    else gn ? fo(e, l) && (te = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (te = "onCompositionStart");
                    te && (io && l.locale !== "ko" && (gn || te !== "onCompositionStart" ? te === "onCompositionEnd" && gn && (F = to()) : (fl = U, er = "value" in fl ? fl.value : fl.textContent, gn = !0)), oe = ii(M, te), 0 < oe.length && (te = new ao(te, e, null, l, U), H.push({
                        event: te,
                        listeners: oe
                    }), F ? te.data = F : (F = oo(l), F !== null && (te.data = F)))), (F = r0 ? c0(e, l) : f0(e, l)) && (te = ii(M, "onBeforeInput"), 0 < te.length && (oe = new ao("onBeforeInput", "beforeinput", null, l, U), H.push({
                        event: oe,
                        listeners: te
                    }), oe.data = F)), I0(H, e, M, l, U);
                }
                Xd(H, t);
            });
        }
        function Pa(e, t, l) {
            return {
                instance: e,
                listener: t,
                currentTarget: l
            };
        }
        function ii(e, t) {
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
        function Jd(e, t, l, n, a) {
            for(var i = t._reactName, d = []; l !== null && l !== n;){
                var m = l, g = m.alternate, M = m.stateNode;
                if (m = m.tag, g !== null && g === n) break;
                m !== 5 && m !== 26 && m !== 27 || M === null || (g = M, a ? (M = ea(l, i), M != null && d.unshift(Pa(l, M, g))) : a || (M = ea(l, i), M != null && d.push(Pa(l, M, g)))), l = l.return;
            }
            d.length !== 0 && e.push({
                event: t,
                listeners: d
            });
        }
        var n1 = /\r\n?/g, a1 = /\u0000|\uFFFD/g;
        function $d(e) {
            return (typeof e == "string" ? e : "" + e).replace(n1, `
`).replace(a1, "");
        }
        function Fd(e, t) {
            return t = $d(t), $d(e) === t;
        }
        function ri() {}
        function Se(e, t, l, n, a, i) {
            switch(l){
                case "children":
                    typeof n == "string" ? t === "body" || t === "textarea" && n === "" || mn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && mn(e, "" + n);
                    break;
                case "className":
                    du(e, "class", n);
                    break;
                case "tabIndex":
                    du(e, "tabindex", n);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    du(e, l, n);
                    break;
                case "style":
                    Wf(e, n, i);
                    break;
                case "data":
                    if (t !== "object") {
                        du(e, "data", n);
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
                    n = mu("" + n), e.setAttribute(l, n);
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
                    n = mu("" + n), e.setAttribute(l, n);
                    break;
                case "onClick":
                    n != null && (e.onclick = ri);
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
                    l = mu("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
                    de("beforetoggle", e), de("toggle", e), su(e, "popover", n);
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
                    su(e, "is", n);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = zm.get(l) || l, su(e, l, n));
            }
        }
        function wc(e, t, l, n, a, i) {
            switch(l){
                case "style":
                    Wf(e, n, i);
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
                    n != null && (e.onclick = ri);
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
                    if (!jf.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[at] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
                            typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
                            break e;
                        }
                        l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : su(e, l, n);
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
                    var m = i = d = a = null, g = null, M = null;
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
                                m = U;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (U != null) throw Error(f(137, t));
                                break;
                            default:
                                Se(e, t, n, U, l, null);
                        }
                    }
                    Zf(e, i, m, g, M, d, a, !1), hu(e);
                    return;
                case "select":
                    de("invalid", e), n = d = i = null;
                    for(a in l)if (l.hasOwnProperty(a) && (m = l[a], m != null)) switch(a){
                        case "value":
                            i = m;
                            break;
                        case "defaultValue":
                            d = m;
                            break;
                        case "multiple":
                            n = m;
                        default:
                            Se(e, t, a, m, l, null);
                    }
                    t = i, l = d, e.multiple = !!n, t != null ? pn(e, !!n, t, !1) : l != null && pn(e, !!n, l, !0);
                    return;
                case "textarea":
                    de("invalid", e), i = a = n = null;
                    for(d in l)if (l.hasOwnProperty(d) && (m = l[d], m != null)) switch(d){
                        case "value":
                            n = m;
                            break;
                        case "defaultValue":
                            a = m;
                            break;
                        case "children":
                            i = m;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (m != null) throw Error(f(91));
                            break;
                        default:
                            Se(e, t, d, m, l, null);
                    }
                    $f(e, n, a, i), hu(e);
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
                    if (Ji(t)) {
                        for(U in l)l.hasOwnProperty(U) && (n = l[U], n !== void 0 && wc(e, t, U, n, l, void 0));
                        return;
                    }
            }
            for(m in l)l.hasOwnProperty(m) && (n = l[m], n != null && Se(e, t, m, n, l, null));
        }
        function u1(e, t, l, n) {
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
                    var a = null, i = null, d = null, m = null, g = null, M = null, U = null;
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
                                m = B;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (B != null) throw Error(f(137, t));
                                break;
                            default:
                                B !== H && Se(e, t, C, B, n, H);
                        }
                    }
                    Xi(e, d, m, g, M, U, i, a);
                    return;
                case "select":
                    B = d = m = C = null;
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
                            m = i;
                            break;
                        case "multiple":
                            d = i;
                        default:
                            i !== g && Se(e, t, a, i, n, g);
                    }
                    t = m, l = d, n = B, C != null ? pn(e, !!l, C, !1) : !!n != !!l && (t != null ? pn(e, !!l, t, !0) : pn(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    B = C = null;
                    for(m in l)if (a = l[m], l.hasOwnProperty(m) && a != null && !n.hasOwnProperty(m)) switch(m){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Se(e, t, m, null, n, a);
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
                    Jf(e, C, B);
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
                    if (Ji(t)) {
                        for(var Ee in l)C = l[Ee], l.hasOwnProperty(Ee) && C !== void 0 && !n.hasOwnProperty(Ee) && wc(e, t, Ee, void 0, n, C);
                        for(U in n)C = n[U], B = l[U], !n.hasOwnProperty(U) || C === B || C === void 0 && B === void 0 || wc(e, t, U, C, n, B);
                        return;
                    }
            }
            for(var A in l)C = l[A], l.hasOwnProperty(A) && C != null && !n.hasOwnProperty(A) && Se(e, t, A, null, n, C);
            for(H in n)C = n[H], B = l[H], !n.hasOwnProperty(H) || C === B || C == null && B == null || Se(e, t, H, C, n, B);
        }
        var zc = null, Uc = null;
        function ci(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function Wd(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function Id(e, t) {
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
        function Pc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var qc = null;
        function i1() {
            var e = window.event;
            return e && e.type === "popstate" ? e === qc ? !1 : (qc = e, !0) : (qc = null, !1);
        }
        var eh = typeof setTimeout == "function" ? setTimeout : void 0, r1 = typeof clearTimeout == "function" ? clearTimeout : void 0, th = typeof Promise == "function" ? Promise : void 0, c1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof th < "u" ? function(e) {
            return th.resolve(null).then(e).catch(f1);
        } : eh;
        function f1(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Al(e) {
            return e === "head";
        }
        function lh(e, t) {
            var l = t, n = 0, a = 0;
            do {
                var i = l.nextSibling;
                if (e.removeChild(l), i && i.nodeType === 8) if (l = i.data, l === "/$") {
                    if (0 < n && 8 > n) {
                        l = n;
                        var d = e.ownerDocument;
                        if (l & 1 && qa(d.documentElement), l & 2 && qa(d.body), l & 4) for(l = d.head, qa(l), d = l.firstChild; d;){
                            var m = d.nextSibling, g = d.nodeName;
                            d[Wn] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && d.rel.toLowerCase() === "stylesheet" || l.removeChild(d), d = m;
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
        function Hc(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var l = t;
                switch(t = t.nextSibling, l.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        Hc(l), Ki(l);
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
        function o1(e, t, l, n) {
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
        function s1(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
            return e;
        }
        function kc(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function d1(e, t) {
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
        var Lc = null;
        function nh(e) {
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
        function ah(e, t, l) {
            switch(t = ci(l), e){
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
            Ki(e);
        }
        var xt = new Map, uh = new Set;
        function fi(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var tl = Y.d;
        Y.d = {
            f: h1,
            r: p1,
            D: m1,
            C: y1,
            L: v1,
            m: g1,
            X: S1,
            S: b1,
            M: E1
        };
        function h1() {
            var e = tl.f(), t = ei();
            return e || t;
        }
        function p1(e) {
            var t = on(e);
            t !== null && t.tag === 5 && t.type === "form" ? As(t) : tl.r(e);
        }
        var Gn = typeof document > "u" ? null : document;
        function ih(e, t, l) {
            var n = Gn;
            if (n && typeof t == "string" && t) {
                var a = Et(t);
                a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), uh.has(a) || (uh.add(a), e = {
                    rel: e,
                    crossOrigin: l,
                    href: t
                }, n.querySelector(a) === null && (t = n.createElement("link"), Je(t, "link", e), Qe(t), n.head.appendChild(t)));
            }
        }
        function m1(e) {
            tl.D(e), ih("dns-prefetch", e, null);
        }
        function y1(e, t) {
            tl.C(e, t), ih("preconnect", e, t);
        }
        function v1(e, t, l) {
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
                }, l), xt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Ha(i)) || t === "script" && n.querySelector(ka(i)) || (t = n.createElement("link"), Je(t, "link", e), Qe(t), n.head.appendChild(t)));
            }
        }
        function g1(e, t) {
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
                    n = l.createElement("link"), Je(n, "link", e), Qe(n), l.head.appendChild(n);
                }
            }
        }
        function b1(e, t, l) {
            tl.S(e, t, l);
            var n = Gn;
            if (n && e) {
                var a = sn(n).hoistableStyles, i = Yn(e);
                t = t || "default";
                var d = a.get(i);
                if (!d) {
                    var m = {
                        loading: 0,
                        preload: null
                    };
                    if (d = n.querySelector(Ha(i))) m.loading = 5;
                    else {
                        e = b({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = xt.get(i)) && jc(e, l);
                        var g = d = n.createElement("link");
                        Qe(g), Je(g, "link", e), g._p = new Promise(function(M, U) {
                            g.onload = M, g.onerror = U;
                        }), g.addEventListener("load", function() {
                            m.loading |= 1;
                        }), g.addEventListener("error", function() {
                            m.loading |= 2;
                        }), m.loading |= 4, oi(d, t, n);
                    }
                    d = {
                        type: "stylesheet",
                        instance: d,
                        count: 1,
                        state: m
                    }, a.set(i, d);
                }
            }
        }
        function S1(e, t) {
            tl.X(e, t);
            var l = Gn;
            if (l && e) {
                var n = sn(l).hoistableScripts, a = Vn(e), i = n.get(a);
                i || (i = l.querySelector(ka(a)), i || (e = b({
                    src: e,
                    async: !0
                }, t), (t = xt.get(a)) && Qc(e, t), i = l.createElement("script"), Qe(i), Je(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function E1(e, t) {
            tl.M(e, t);
            var l = Gn;
            if (l && e) {
                var n = sn(l).hoistableScripts, a = Vn(e), i = n.get(a);
                i || (i = l.querySelector(ka(a)), i || (e = b({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = xt.get(a)) && Qc(e, t), i = l.createElement("script"), Qe(i), Je(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function rh(e, t, l, n) {
            var a = (a = ie.current) ? fi(a) : null;
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
                        }, xt.set(e, l), i || _1(a, e, l, d.state))), t && n === null) throw Error(f(528, ""));
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
        function ch(e) {
            return b({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function _1(e, t, l, n) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
                return n.loading |= 1;
            }), t.addEventListener("error", function() {
                return n.loading |= 2;
            }), Je(t, "link", l), Qe(t), e.head.appendChild(t));
        }
        function Vn(e) {
            return '[src="' + Et(e) + '"]';
        }
        function ka(e) {
            return "script[async]" + e;
        }
        function fh(e, t, l) {
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
                    return n = (e.ownerDocument || e).createElement("style"), Qe(n), Je(n, "style", a), oi(n, l.precedence, e), t.instance = n;
                case "stylesheet":
                    a = Yn(l.href);
                    var i = e.querySelector(Ha(a));
                    if (i) return t.state.loading |= 4, t.instance = i, Qe(i), i;
                    n = ch(l), (a = xt.get(a)) && jc(n, a), i = (e.ownerDocument || e).createElement("link"), Qe(i);
                    var d = i;
                    return d._p = new Promise(function(m, g) {
                        d.onload = m, d.onerror = g;
                    }), Je(i, "link", n), t.state.loading |= 4, oi(i, l.precedence, e), t.instance = i;
                case "script":
                    return i = Vn(l.src), (a = e.querySelector(ka(i))) ? (t.instance = a, Qe(a), a) : (n = l, (a = xt.get(i)) && (n = b({}, l), Qc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Qe(a), Je(a, "link", n), e.head.appendChild(a), t.instance = a);
                case "void":
                    return null;
                default:
                    throw Error(f(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, oi(n, l.precedence, e));
            return t.instance;
        }
        function oi(e, t, l) {
            for(var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, i = a, d = 0; d < n.length; d++){
                var m = n[d];
                if (m.dataset.precedence === t) i = m;
                else if (i !== a) break;
            }
            i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
        }
        function jc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Qc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var si = null;
        function oh(e, t, l) {
            if (si === null) {
                var n = new Map, a = si = new Map;
                a.set(l, n);
            } else a = si, n = a.get(l), n || (n = new Map, a.set(l, n));
            if (n.has(e)) return n;
            for(n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++){
                var i = l[a];
                if (!(i[Wn] || i[Ie] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var d = i.getAttribute(t) || "";
                    d = e + d;
                    var m = n.get(d);
                    m ? m.push(i) : n.set(d, [
                        i
                    ]);
                }
            }
            return n;
        }
        function sh(e, t, l) {
            e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
        }
        function R1(e, t, l) {
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
        function dh(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var La = null;
        function T1() {}
        function A1(e, t, l) {
            if (La === null) throw Error(f(475));
            var n = La;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var a = Yn(l.href), i = e.querySelector(Ha(a));
                    if (i) {
                        e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = di.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = i, Qe(i);
                        return;
                    }
                    i = e.ownerDocument || e, l = ch(l), (a = xt.get(a)) && jc(l, a), i = i.createElement("link"), Qe(i);
                    var d = i;
                    d._p = new Promise(function(m, g) {
                        d.onload = m, d.onerror = g;
                    }), Je(i, "link", l), t.instance = i;
                }
                n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = di.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function O1() {
            if (La === null) throw Error(f(475));
            var e = La;
            return e.stylesheets && e.count === 0 && Kc(e, e.stylesheets), 0 < e.count ? function(t) {
                var l = setTimeout(function() {
                    if (e.stylesheets && Kc(e, e.stylesheets), e.unsuspend) {
                        var n = e.unsuspend;
                        e.unsuspend = null, n();
                    }
                }, 6e4);
                return e.unsuspend = t, function() {
                    e.unsuspend = null, clearTimeout(l);
                };
            } : null;
        }
        function di() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Kc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var hi = null;
        function Kc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, hi = new Map, t.forEach(N1, e), hi = null, di.call(e));
        }
        function N1(e, t) {
            if (!(t.state.loading & 4)) {
                var l = hi.get(e);
                if (l) var n = l.get(null);
                else {
                    l = new Map, hi.set(e, l);
                    for(var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++){
                        var d = a[i];
                        (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (l.set(d.dataset.precedence, d), n = d);
                    }
                    n && l.set(null, n);
                }
                a = t.instance, d = a.getAttribute("data-precedence"), i = l.get(d) || n, i === n && l.set(null, a), l.set(d, a), this.count++, n = di.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
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
        function x1(e, t, l, n, a, i, d, m) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ki(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ki(0), this.hiddenUpdates = ki(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map;
        }
        function hh(e, t, l, n, a, i, d, m, g, M, U, H) {
            return e = new x1(e, t, l, d, m, g, M, H), t = 1, i === !0 && (t |= 24), i = pt(3, null, null, t), e.current = i, i.stateNode = e, t = Tr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: t
            }, xr(i), e;
        }
        function ph(e) {
            return e ? (e = Rn, e) : Rn;
        }
        function mh(e, t, l, n, a, i) {
            a = ph(a), n.context === null ? n.context = a : n.pendingContext = a, n = dl(t), n.payload = {
                element: l
            }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = hl(e, n, t), l !== null && (bt(l, e, t), va(l, e, t));
        }
        function yh(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var l = e.retryLane;
                e.retryLane = l !== 0 && l < t ? l : t;
            }
        }
        function Gc(e, t) {
            yh(e, t), (e = e.alternate) && yh(e, t);
        }
        function vh(e) {
            if (e.tag === 13) {
                var t = _n(e, 67108864);
                t !== null && bt(t, e, 67108864), Gc(e, 67108864);
            }
        }
        var pi = !0;
        function M1(e, t, l, n) {
            var a = P.T;
            P.T = null;
            var i = Y.p;
            try {
                Y.p = 2, Yc(e, t, l, n);
            } finally{
                Y.p = i, P.T = a;
            }
        }
        function C1(e, t, l, n) {
            var a = P.T;
            P.T = null;
            var i = Y.p;
            try {
                Y.p = 8, Yc(e, t, l, n);
            } finally{
                Y.p = i, P.T = a;
            }
        }
        function Yc(e, t, l, n) {
            if (pi) {
                var a = Vc(n);
                if (a === null) Bc(e, t, n, mi, l), bh(e, n);
                else if (B1(a, e, t, l, n)) n.stopPropagation();
                else if (bh(e, n), t & 4 && -1 < D1.indexOf(e)) {
                    for(; a !== null;){
                        var i = on(a);
                        if (i !== null) switch(i.tag){
                            case 3:
                                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                                    var d = ql(i.pendingLanes);
                                    if (d !== 0) {
                                        var m = i;
                                        for(m.pendingLanes |= 2, m.entangledLanes |= 2; d;){
                                            var g = 1 << 31 - dt(d);
                                            m.entanglements[1] |= g, d &= ~g;
                                        }
                                        kt(i), (ve & 6) === 0 && (Wu = zt() + 500, za(0));
                                    }
                                }
                                break;
                            case 13:
                                m = _n(i, 2), m !== null && bt(m, i, 2), ei(), Gc(i, 2);
                        }
                        if (i = Vc(n), i === null && Bc(e, t, n, mi, l), i === a) break;
                        a = i;
                    }
                    a !== null && n.stopPropagation();
                } else Bc(e, t, n, null, l);
            }
        }
        function Vc(e) {
            return e = Fi(e), Xc(e);
        }
        var mi = null;
        function Xc(e) {
            if (mi = null, e = fn(e), e !== null) {
                var t = s(e);
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
            return mi = e, null;
        }
        function gh(e) {
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
                    switch(ym()){
                        case Df:
                            return 2;
                        case Bf:
                            return 8;
                        case ru:
                        case vm:
                            return 32;
                        case wf:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Zc = !1, Ol = null, Nl = null, xl = null, Qa = new Map, Ka = new Map, Ml = [], D1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function bh(e, t) {
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
            }, t !== null && (t = on(t), t !== null && vh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
        }
        function B1(e, t, l, n, a) {
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
        function Sh(e) {
            var t = fn(e.target);
            if (t !== null) {
                var l = s(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = v(l), t !== null) {
                            e.blockedOn = t, Am(e.priority, function() {
                                if (l.tag === 13) {
                                    var n = gt();
                                    n = Li(n);
                                    var a = _n(l, n);
                                    a !== null && bt(a, l, n), Gc(l, n);
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
        function yi(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var l = Vc(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var n = new l.constructor(l.type, l);
                    $i = n, l.target.dispatchEvent(n), $i = null;
                } else return t = on(l), t !== null && vh(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function Eh(e, t, l) {
            yi(e) && l.delete(t);
        }
        function w1() {
            Zc = !1, Ol !== null && yi(Ol) && (Ol = null), Nl !== null && yi(Nl) && (Nl = null), xl !== null && yi(xl) && (xl = null), Qa.forEach(Eh), Ka.forEach(Eh);
        }
        function vi(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Zc || (Zc = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, w1)));
        }
        var gi = null;
        function _h(e) {
            gi !== e && (gi = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
                gi === e && (gi = null);
                for(var t = 0; t < e.length; t += 3){
                    var l = e[t], n = e[t + 1], a = e[t + 2];
                    if (typeof n != "function") {
                        if (Xc(n || l) === null) continue;
                        break;
                    }
                    var i = on(l);
                    i !== null && (e.splice(t, 3), t -= 3, Xr(i, {
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
                return vi(g, e);
            }
            Ol !== null && vi(Ol, e), Nl !== null && vi(Nl, e), xl !== null && vi(xl, e), Qa.forEach(t), Ka.forEach(t);
            for(var l = 0; l < Ml.length; l++){
                var n = Ml[l];
                n.blockedOn === e && (n.blockedOn = null);
            }
            for(; 0 < Ml.length && (l = Ml[0], l.blockedOn === null);)Sh(l), l.blockedOn === null && Ml.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(n = 0; n < l.length; n += 3){
                var a = l[n], i = l[n + 1], d = a[at] || null;
                if (typeof i == "function") d || _h(l);
                else if (d) {
                    var m = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (a = i, d = i[at] || null) m = d.formAction;
                        else if (Xc(a) !== null) continue;
                    } else m = d.action;
                    typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), _h(l);
                }
            }
        }
        function Jc(e) {
            this._internalRoot = e;
        }
        bi.prototype.render = Jc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(f(409));
            var l = t.current, n = gt();
            mh(l, n, e, t, null, null);
        }, bi.prototype.unmount = Jc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                mh(e.current, 2, null, e, null, null), ei(), t[cn] = null;
            }
        };
        function bi(e) {
            this._internalRoot = e;
        }
        bi.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Hf();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Ml.length && t !== 0 && t < Ml[l].priority; l++);
                Ml.splice(l, 0, e), l === 0 && Sh(e);
            }
        };
        var Rh = r.version;
        if (Rh !== "19.1.0") throw Error(f(527, Rh, "19.1.0"));
        Y.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
            return e = h(t), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var z1 = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: P,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Si.isDisabled && Si.supportsFiber) try {
                Jn = Si.inject(z1), st = Si;
            } catch  {}
        }
        return Xa.createRoot = function(e, t) {
            if (!o(e)) throw Error(f(299));
            var l = !1, n = "", a = ks, i = Ls, d = js, m = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)), t = hh(e, 1, !1, null, null, l, n, a, i, d, m, null), e[cn] = t.current, Dc(e), new Jc(t);
        }, Xa.hydrateRoot = function(e, t, l) {
            if (!o(e)) throw Error(f(299));
            var n = !1, a = "", i = ks, d = Ls, m = js, g = null, M = null;
            return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks), l.formState !== void 0 && (M = l.formState)), t = hh(e, 1, !0, t, l ?? null, n, a, i, d, m, g, M), t.context = ph(null), l = t.current, n = gt(), n = Li(n), a = dl(n), a.callback = null, hl(l, a, n), l = n, t.current.lanes = l, Fn(t, l), kt(t), e[cn] = t.current, Dc(e), new bi(t);
        }, Xa.version = "19.1.0", Xa;
    }
    var wh;
    function Y1() {
        if (wh) return Wc.exports;
        wh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), Wc.exports = G1(), Wc.exports;
    }
    var V1 = Y1(), lf = {
        exports: {}
    }, nf = {};
    var zh;
    function X1() {
        if (zh) return nf;
        zh = 1;
        var u = Bi();
        function r(h, y) {
            return h === y && (h !== 0 || 1 / h === 1 / y) || h !== h && y !== y;
        }
        var c = typeof Object.is == "function" ? Object.is : r, f = u.useSyncExternalStore, o = u.useRef, s = u.useEffect, v = u.useMemo, p = u.useDebugValue;
        return nf.useSyncExternalStoreWithSelector = function(h, y, b, _, S) {
            var T = o(null);
            if (T.current === null) {
                var O = {
                    hasValue: !1,
                    value: null
                };
                T.current = O;
            } else O = T.current;
            T = v(function() {
                function w(K) {
                    if (!z) {
                        if (z = !0, j = K, K = _(K), S !== void 0 && O.hasValue) {
                            var W = O.value;
                            if (S(W, K)) return k = W;
                        }
                        return k = K;
                    }
                    if (W = k, c(j, K)) return W;
                    var J = _(K);
                    return S !== void 0 && S(W, J) ? (j = K, W) : (j = K, k = J);
                }
                var z = !1, j, k, V = b === void 0 ? null : b;
                return [
                    function() {
                        return w(y());
                    },
                    V === null ? void 0 : function() {
                        return w(V());
                    }
                ];
            }, [
                y,
                b,
                _,
                S
            ]);
            var D = f(h, T[0], T[1]);
            return s(function() {
                O.hasValue = !0, O.value = D;
            }, [
                D
            ]), p(D), D;
        }, nf;
    }
    var Uh;
    function Z1() {
        return Uh || (Uh = 1, lf.exports = X1()), lf.exports;
    }
    var J1 = Z1();
    function $1(u) {
        u();
    }
    function F1() {
        let u = null, r = null;
        return {
            clear () {
                u = null, r = null;
            },
            notify () {
                $1(()=>{
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
    var Ph = {
        notify () {},
        get: ()=>[]
    };
    function W1(u, r) {
        let c, f = Ph, o = 0, s = !1;
        function v(D) {
            b();
            const w = f.subscribe(D);
            let z = !1;
            return ()=>{
                z || (z = !0, w(), _());
            };
        }
        function p() {
            f.notify();
        }
        function h() {
            O.onStateChange && O.onStateChange();
        }
        function y() {
            return s;
        }
        function b() {
            o++, c || (c = u.subscribe(h), f = F1());
        }
        function _() {
            o--, c && o === 0 && (c(), c = void 0, f.clear(), f = Ph);
        }
        function S() {
            s || (s = !0, b());
        }
        function T() {
            s && (s = !1, _());
        }
        const O = {
            addNestedSub: v,
            notifyNestedSubs: p,
            handleChangeWrapper: h,
            isSubscribed: y,
            trySubscribe: S,
            tryUnsubscribe: T,
            getListeners: ()=>f
        };
        return O;
    }
    var I1 = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ey = I1(), ty = ()=>typeof navigator < "u" && navigator.product === "ReactNative", ly = ty(), ny = ()=>ey || ly ? N.useLayoutEffect : N.useEffect, ay = ny(), uy = Symbol.for("react-redux-context"), iy = typeof globalThis < "u" ? globalThis : {};
    function ry() {
        if (!N.createContext) return {};
        const u = iy[uy] ??= new Map;
        let r = u.get(N.createContext);
        return r || (r = N.createContext(null), u.set(N.createContext, r)), r;
    }
    var zl = ry();
    function cy(u) {
        const { children: r, context: c, serverState: f, store: o } = u, s = N.useMemo(()=>{
            const h = W1(o);
            return {
                store: o,
                subscription: h,
                getServerState: f ? ()=>f : void 0
            };
        }, [
            o,
            f
        ]), v = N.useMemo(()=>o.getState(), [
            o
        ]);
        ay(()=>{
            const { subscription: h } = s;
            return h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), v !== o.getState() && h.notifyNestedSubs(), ()=>{
                h.tryUnsubscribe(), h.onStateChange = void 0;
            };
        }, [
            s,
            v
        ]);
        const p = c || zl;
        return N.createElement(p.Provider, {
            value: s
        }, r);
    }
    var fy = cy;
    function gf(u = zl) {
        return function() {
            return N.useContext(u);
        };
    }
    var rp = gf();
    function cp(u = zl) {
        const r = u === zl ? rp : gf(u), c = ()=>{
            const { store: f } = r();
            return f;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    var oy = cp();
    function sy(u = zl) {
        const r = u === zl ? oy : cp(u), c = ()=>r().dispatch;
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    let dy;
    Xn = sy();
    dy = (u, r)=>u === r;
    function hy(u = zl) {
        const r = u === zl ? rp : gf(u), c = (f, o = {})=>{
            const { equalityFn: s = dy } = typeof o == "function" ? {
                equalityFn: o
            } : o, v = r(), { store: p, subscription: h, getServerState: y } = v;
            N.useRef(!0);
            const b = N.useCallback({
                [f.name] (S) {
                    return f(S);
                }
            }[f.name], [
                f
            ]), _ = J1.useSyncExternalStoreWithSelector(h.addNestedSub, p.getState, y || p.getState, b, s);
            return N.useDebugValue(_), _;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    an = hy();
    function $e(u) {
        return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var py = typeof Symbol == "function" && Symbol.observable || "@@observable", qh = py, af = ()=>Math.random().toString(36).substring(7).split("").join("."), my = {
        INIT: `@@redux/INIT${af()}`,
        REPLACE: `@@redux/REPLACE${af()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${af()}`
    }, Mi = my;
    function fp(u) {
        if (typeof u != "object" || u === null) return !1;
        let r = u;
        for(; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(u) === r || Object.getPrototypeOf(u) === null;
    }
    function bf(u, r, c) {
        if (typeof u != "function") throw new Error($e(2));
        if (typeof r == "function" && typeof c == "function" || typeof c == "function" && typeof arguments[3] == "function") throw new Error($e(0));
        if (typeof r == "function" && typeof c > "u" && (c = r, r = void 0), typeof c < "u") {
            if (typeof c != "function") throw new Error($e(1));
            return c(bf)(u, r);
        }
        let f = u, o = r, s = new Map, v = s, p = 0, h = !1;
        function y() {
            v === s && (v = new Map, s.forEach((w, z)=>{
                v.set(z, w);
            }));
        }
        function b() {
            if (h) throw new Error($e(3));
            return o;
        }
        function _(w) {
            if (typeof w != "function") throw new Error($e(4));
            if (h) throw new Error($e(5));
            let z = !0;
            y();
            const j = p++;
            return v.set(j, w), function() {
                if (z) {
                    if (h) throw new Error($e(6));
                    z = !1, y(), v.delete(j), s = null;
                }
            };
        }
        function S(w) {
            if (!fp(w)) throw new Error($e(7));
            if (typeof w.type > "u") throw new Error($e(8));
            if (typeof w.type != "string") throw new Error($e(17));
            if (h) throw new Error($e(9));
            try {
                h = !0, o = f(o, w);
            } finally{
                h = !1;
            }
            return (s = v).forEach((j)=>{
                j();
            }), w;
        }
        function T(w) {
            if (typeof w != "function") throw new Error($e(10));
            f = w, S({
                type: Mi.REPLACE
            });
        }
        function O() {
            const w = _;
            return {
                subscribe (z) {
                    if (typeof z != "object" || z === null) throw new Error($e(11));
                    function j() {
                        const V = z;
                        V.next && V.next(b());
                    }
                    return j(), {
                        unsubscribe: w(j)
                    };
                },
                [qh] () {
                    return this;
                }
            };
        }
        return S({
            type: Mi.INIT
        }), {
            dispatch: S,
            subscribe: _,
            getState: b,
            replaceReducer: T,
            [qh]: O
        };
    }
    function yy(u) {
        Object.keys(u).forEach((r)=>{
            const c = u[r];
            if (typeof c(void 0, {
                type: Mi.INIT
            }) > "u") throw new Error($e(12));
            if (typeof c(void 0, {
                type: Mi.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error($e(13));
        });
    }
    function op(u) {
        const r = Object.keys(u), c = {};
        for(let s = 0; s < r.length; s++){
            const v = r[s];
            typeof u[v] == "function" && (c[v] = u[v]);
        }
        const f = Object.keys(c);
        let o;
        try {
            yy(c);
        } catch (s) {
            o = s;
        }
        return function(v = {}, p) {
            if (o) throw o;
            let h = !1;
            const y = {};
            for(let b = 0; b < f.length; b++){
                const _ = f[b], S = c[_], T = v[_], O = S(T, p);
                if (typeof O > "u") throw p && p.type, new Error($e(14));
                y[_] = O, h = h || O !== T;
            }
            return h = h || f.length !== Object.keys(v).length, h ? y : v;
        };
    }
    function Ci(...u) {
        return u.length === 0 ? (r)=>r : u.length === 1 ? u[0] : u.reduce((r, c)=>(...f)=>r(c(...f)));
    }
    function vy(...u) {
        return (r)=>(c, f)=>{
                const o = r(c, f);
                let s = ()=>{
                    throw new Error($e(15));
                };
                const v = {
                    getState: o.getState,
                    dispatch: (h, ...y)=>s(h, ...y)
                }, p = u.map((h)=>h(v));
                return s = Ci(...p)(o.dispatch), {
                    ...o,
                    dispatch: s
                };
            };
    }
    function gy(u, r = `expected a function, instead received ${typeof u}`) {
        if (typeof u != "function") throw new TypeError(r);
    }
    function by(u, r = `expected an object, instead received ${typeof u}`) {
        if (typeof u != "object") throw new TypeError(r);
    }
    function Sy(u, r = "expected all items to be functions, instead received the following types: ") {
        if (!u.every((c)=>typeof c == "function")) {
            const c = u.map((f)=>typeof f == "function" ? `function ${f.name || "unnamed"}()` : typeof f).join(", ");
            throw new TypeError(`${r}[${c}]`);
        }
    }
    var Hh = (u)=>Array.isArray(u) ? u : [
            u
        ];
    function Ey(u) {
        const r = Array.isArray(u[0]) ? u[0] : u;
        return Sy(r, "createSelector expects all input-selectors to be functions, but received the following types: "), r;
    }
    function _y(u, r) {
        const c = [], { length: f } = u;
        for(let o = 0; o < f; o++)c.push(u[o].apply(null, r));
        return c;
    }
    var Ry = class {
        constructor(u){
            this.value = u;
        }
        deref() {
            return this.value;
        }
    }, Ty = typeof WeakRef < "u" ? WeakRef : Ry, Ay = 0, kh = 1;
    function Ei() {
        return {
            s: Ay,
            v: void 0,
            o: null,
            p: null
        };
    }
    function sp(u, r = {}) {
        let c = Ei();
        const { resultEqualityCheck: f } = r;
        let o, s = 0;
        function v() {
            let p = c;
            const { length: h } = arguments;
            for(let _ = 0, S = h; _ < S; _++){
                const T = arguments[_];
                if (typeof T == "function" || typeof T == "object" && T !== null) {
                    let O = p.o;
                    O === null && (p.o = O = new WeakMap);
                    const D = O.get(T);
                    D === void 0 ? (p = Ei(), O.set(T, p)) : p = D;
                } else {
                    let O = p.p;
                    O === null && (p.p = O = new Map);
                    const D = O.get(T);
                    D === void 0 ? (p = Ei(), O.set(T, p)) : p = D;
                }
            }
            const y = p;
            let b;
            if (p.s === kh) b = p.v;
            else if (b = u.apply(null, arguments), s++, f) {
                const _ = o?.deref?.() ?? o;
                _ != null && f(_, b) && (b = _, s !== 0 && s--), o = typeof b == "object" && b !== null || typeof b == "function" ? new Ty(b) : b;
            }
            return y.s = kh, y.v = b, b;
        }
        return v.clearCache = ()=>{
            c = Ei(), v.resetResultsCount();
        }, v.resultsCount = ()=>s, v.resetResultsCount = ()=>{
            s = 0;
        }, v;
    }
    function Oy(u, ...r) {
        const c = typeof u == "function" ? {
            memoize: u,
            memoizeOptions: r
        } : u, f = (...o)=>{
            let s = 0, v = 0, p, h = {}, y = o.pop();
            typeof y == "object" && (h = y, y = o.pop()), gy(y, `createSelector expects an output function after the inputs, but received: [${typeof y}]`);
            const b = {
                ...c,
                ...h
            }, { memoize: _, memoizeOptions: S = [], argsMemoize: T = sp, argsMemoizeOptions: O = [] } = b, D = Hh(S), w = Hh(O), z = Ey(o), j = _(function() {
                return s++, y.apply(null, arguments);
            }, ...D), k = T(function() {
                v++;
                const K = _y(z, arguments);
                return p = j.apply(null, K), p;
            }, ...w);
            return Object.assign(k, {
                resultFunc: y,
                memoizedResultFunc: j,
                dependencies: z,
                dependencyRecomputations: ()=>v,
                resetDependencyRecomputations: ()=>{
                    v = 0;
                },
                lastResult: ()=>p,
                recomputations: ()=>s,
                resetRecomputations: ()=>{
                    s = 0;
                },
                memoize: _,
                argsMemoize: T
            });
        };
        return Object.assign(f, {
            withTypes: ()=>f
        }), f;
    }
    var Sf = Oy(sp), Ny = Object.assign((u, r = Sf)=>{
        by(u, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof u}`);
        const c = Object.keys(u), f = c.map((s)=>u[s]);
        return r(f, (...s)=>s.reduce((v, p, h)=>(v[c[h]] = p, v), {}));
    }, {
        withTypes: ()=>Ny
    });
    function dp(u) {
        return ({ dispatch: c, getState: f })=>(o)=>(s)=>typeof s == "function" ? s(c, f, u) : o(s);
    }
    var xy = dp(), My = dp, Cy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Ci : Ci.apply(null, arguments);
    }, hp = class Fa extends Array {
        constructor(...r){
            super(...r), Object.setPrototypeOf(this, Fa.prototype);
        }
        static get [Symbol.species]() {
            return Fa;
        }
        concat(...r) {
            return super.concat.apply(this, r);
        }
        prepend(...r) {
            return r.length === 1 && Array.isArray(r[0]) ? new Fa(...r[0].concat(this)) : new Fa(...r.concat(this));
        }
    };
    function Dy(u) {
        return typeof u == "boolean";
    }
    var By = ()=>function(r) {
            const { thunk: c = !0, immutableCheck: f = !0, serializableCheck: o = !0, actionCreatorCheck: s = !0 } = r ?? {};
            let v = new hp;
            return c && (Dy(c) ? v.push(xy) : v.push(My(c.extraArgument))), v;
        }, wy = "RTK_autoBatch", Lh = (u)=>(r)=>{
            setTimeout(r, u);
        }, zy = (u = {
        type: "raf"
    })=>(r)=>(...c)=>{
                const f = r(...c);
                let o = !0, s = !1, v = !1;
                const p = new Set, h = u.type === "tick" ? queueMicrotask : u.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Lh(10) : u.type === "callback" ? u.queueNotification : Lh(u.timeout), y = ()=>{
                    v = !1, s && (s = !1, p.forEach((b)=>b()));
                };
                return Object.assign({}, f, {
                    subscribe (b) {
                        const _ = ()=>o && b(), S = f.subscribe(_);
                        return p.add(b), ()=>{
                            S(), p.delete(b);
                        };
                    },
                    dispatch (b) {
                        try {
                            return o = !b?.meta?.[wy], s = !o, s && (v || (v = !0, h(y))), f.dispatch(b);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, Uy = (u)=>function(c) {
            const { autoBatch: f = !0 } = c ?? {};
            let o = new hp(u);
            return f && o.push(zy(typeof f == "object" ? f : void 0)), o;
        };
    function Py(u) {
        const r = By(), { reducer: c = void 0, middleware: f, devTools: o = !0, preloadedState: s = void 0, enhancers: v = void 0 } = u || {};
        let p;
        if (typeof c == "function") p = c;
        else if (fp(c)) p = op(c);
        else throw new Error(qy(1));
        let h;
        typeof f == "function" ? h = f(r) : h = r();
        let y = Ci;
        o && (y = Cy({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const b = vy(...h), _ = Uy(b);
        let S = typeof v == "function" ? v(_) : _();
        const T = y(...S);
        return bf(p, s, T);
    }
    function qy(u) {
        return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Ef = "persist:", pp = "persist/FLUSH", _f = "persist/REHYDRATE", mp = "persist/PAUSE", yp = "persist/PERSIST", vp = "persist/PURGE", gp = "persist/REGISTER", Hy = -1;
    function Ai(u) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ai = function(c) {
            return typeof c;
        } : Ai = function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        }, Ai(u);
    }
    function jh(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function ky(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? jh(c, !0).forEach(function(f) {
                Ly(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : jh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function Ly(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    function jy(u, r, c, f) {
        f.debug;
        var o = ky({}, c);
        return u && Ai(u) === "object" && Object.keys(u).forEach(function(s) {
            s !== "_persist" && r[s] === c[s] && (o[s] = u[s]);
        }), o;
    }
    function Qy(u) {
        var r = u.blacklist || null, c = u.whitelist || null, f = u.transforms || [], o = u.throttle || 0, s = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Ef).concat(u.key), v = u.storage, p;
        u.serialize === !1 ? p = function(K) {
            return K;
        } : typeof u.serialize == "function" ? p = u.serialize : p = Ky;
        var h = u.writeFailHandler || null, y = {}, b = {}, _ = [], S = null, T = null, O = function(K) {
            Object.keys(K).forEach(function(W) {
                z(W) && y[W] !== K[W] && _.indexOf(W) === -1 && _.push(W);
            }), Object.keys(y).forEach(function(W) {
                K[W] === void 0 && z(W) && _.indexOf(W) === -1 && y[W] !== void 0 && _.push(W);
            }), S === null && (S = setInterval(D, o)), y = K;
        };
        function D() {
            if (_.length === 0) {
                S && clearInterval(S), S = null;
                return;
            }
            var V = _.shift(), K = f.reduce(function(W, J) {
                return J.in(W, V, y);
            }, y[V]);
            if (K !== void 0) try {
                b[V] = p(K);
            } catch (W) {
                console.error("redux-persist/createPersistoid: error serializing state", W);
            }
            else delete b[V];
            _.length === 0 && w();
        }
        function w() {
            Object.keys(b).forEach(function(V) {
                y[V] === void 0 && delete b[V];
            }), T = v.setItem(s, p(b)).catch(j);
        }
        function z(V) {
            return !(c && c.indexOf(V) === -1 && V !== "_persist" || r && r.indexOf(V) !== -1);
        }
        function j(V) {
            h && h(V);
        }
        var k = function() {
            for(; _.length !== 0;)D();
            return T || Promise.resolve();
        };
        return {
            update: O,
            flush: k
        };
    }
    function Ky(u) {
        return JSON.stringify(u);
    }
    function Gy(u) {
        var r = u.transforms || [], c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Ef).concat(u.key), f = u.storage;
        u.debug;
        var o;
        return u.deserialize === !1 ? o = function(v) {
            return v;
        } : typeof u.deserialize == "function" ? o = u.deserialize : o = Yy, f.getItem(c).then(function(s) {
            if (s) try {
                var v = {}, p = o(s);
                return Object.keys(p).forEach(function(h) {
                    v[h] = r.reduceRight(function(y, b) {
                        return b.out(y, h, p);
                    }, o(p[h]));
                }), v;
            } catch (h) {
                throw h;
            }
            else return;
        });
    }
    function Yy(u) {
        return JSON.parse(u);
    }
    function Vy(u) {
        var r = u.storage, c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Ef).concat(u.key);
        return r.removeItem(c, Xy);
    }
    function Xy(u) {}
    function Qh(u, r) {
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
            r % 2 ? Qh(c, !0).forEach(function(f) {
                Zy(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Qh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function Zy(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    function Jy(u, r) {
        if (u == null) return {};
        var c = $y(u, r), f, o;
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(u);
            for(o = 0; o < s.length; o++)f = s[o], !(r.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(u, f) && (c[f] = u[f]);
        }
        return c;
    }
    function $y(u, r) {
        if (u == null) return {};
        var c = {}, f = Object.keys(u), o, s;
        for(s = 0; s < f.length; s++)o = f[s], !(r.indexOf(o) >= 0) && (c[o] = u[o]);
        return c;
    }
    var Fy = 5e3;
    function Wy(u, r) {
        var c = u.version !== void 0 ? u.version : Hy;
        u.debug;
        var f = u.stateReconciler === void 0 ? jy : u.stateReconciler, o = u.getStoredState || Gy, s = u.timeout !== void 0 ? u.timeout : Fy, v = null, p = !1, h = !0, y = function(_) {
            return _._persist.rehydrated && v && !h && v.update(_), _;
        };
        return function(b, _) {
            var S = b || {}, T = S._persist, O = Jy(S, [
                "_persist"
            ]), D = O;
            if (_.type === yp) {
                var w = !1, z = function($, ne) {
                    w || (_.rehydrate(u.key, $, ne), w = !0);
                };
                if (s && setTimeout(function() {
                    !w && z(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(u.key, '"')));
                }, s), h = !1, v || (v = Qy(u)), T) return ll({}, r(D, _), {
                    _persist: T
                });
                if (typeof _.rehydrate != "function" || typeof _.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return _.register(u.key), o(u).then(function(J) {
                    var $ = u.migrate || function(ne, Ce) {
                        return Promise.resolve(ne);
                    };
                    $(J, c).then(function(ne) {
                        z(ne);
                    }, function(ne) {
                        z(void 0, ne);
                    });
                }, function(J) {
                    z(void 0, J);
                }), ll({}, r(D, _), {
                    _persist: {
                        version: c,
                        rehydrated: !1
                    }
                });
            } else {
                if (_.type === vp) return p = !0, _.result(Vy(u)), ll({}, r(D, _), {
                    _persist: T
                });
                if (_.type === pp) return _.result(v && v.flush()), ll({}, r(D, _), {
                    _persist: T
                });
                if (_.type === mp) h = !0;
                else if (_.type === _f) {
                    if (p) return ll({}, D, {
                        _persist: ll({}, T, {
                            rehydrated: !0
                        })
                    });
                    if (_.key === u.key) {
                        var j = r(D, _), k = _.payload, V = f !== !1 && k !== void 0 ? f(k, b, j, u) : j, K = ll({}, V, {
                            _persist: ll({}, T, {
                                rehydrated: !0
                            })
                        });
                        return y(K);
                    }
                }
            }
            if (!T) return r(b, _);
            var W = r(D, _);
            return W === D ? b : y(ll({}, W, {
                _persist: T
            }));
        };
    }
    function Kh(u) {
        return tv(u) || ev(u) || Iy();
    }
    function Iy() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function ev(u) {
        if (Symbol.iterator in Object(u) || Object.prototype.toString.call(u) === "[object Arguments]") return Array.from(u);
    }
    function tv(u) {
        if (Array.isArray(u)) {
            for(var r = 0, c = new Array(u.length); r < u.length; r++)c[r] = u[r];
            return c;
        }
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
    function df(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Gh(c, !0).forEach(function(f) {
                lv(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Gh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function lv(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    var bp = {
        registry: [],
        bootstrapped: !1
    }, nv = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bp, c = arguments.length > 1 ? arguments[1] : void 0;
        switch(c.type){
            case gp:
                return df({}, r, {
                    registry: [].concat(Kh(r.registry), [
                        c.key
                    ])
                });
            case _f:
                var f = r.registry.indexOf(c.key), o = Kh(r.registry);
                return o.splice(f, 1), df({}, r, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return r;
        }
    };
    function av(u, r, c) {
        var f = bf(nv, bp, void 0), o = function(h) {
            f.dispatch({
                type: gp,
                key: h
            });
        }, s = function(h, y, b) {
            var _ = {
                type: _f,
                payload: y,
                err: b,
                key: h
            };
            u.dispatch(_), f.dispatch(_);
        }, v = df({}, f, {
            purge: function() {
                var h = [];
                return u.dispatch({
                    type: vp,
                    result: function(b) {
                        h.push(b);
                    }
                }), Promise.all(h);
            },
            flush: function() {
                var h = [];
                return u.dispatch({
                    type: pp,
                    result: function(b) {
                        h.push(b);
                    }
                }), Promise.all(h);
            },
            pause: function() {
                u.dispatch({
                    type: mp
                });
            },
            persist: function() {
                u.dispatch({
                    type: yp,
                    register: o,
                    rehydrate: s
                });
            }
        });
        return v.persist(), v;
    }
    const lt = "w", Mt = "b", Ve = "p", hf = "n", Oi = "b", Wa = "r", wl = "q", Le = "k", uf = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    class _i {
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
            const { color: f, piece: o, from: s, to: v, flags: p, captured: h, promotion: y } = c, b = Fe(s), _ = Fe(v);
            this.color = f, this.piece = o, this.from = b, this.to = _, this.san = r._moveToSan(c, r._moves({
                legal: !0
            })), this.lan = b + _, this.before = r.fen(), r._makeMove(c), this.after = r.fen(), r._undoMove(), this.flags = "";
            for(const S in ce)ce[S] & p && (this.flags += tn[S]);
            h && (this.captured = h), y && (this.promotion = y, this.lan += y);
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
    }, pf = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, uv = {
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
    }, iv = {
        ...pf,
        ...uv
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
    }, rf = {
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
    }, Yh = {
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
    }, rv = [
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
    ], cv = [
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
    ], fv = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, ov = "pnbrqkPNBRQK", Vh = [
        hf,
        Oi,
        Wa,
        wl
    ], sv = 7, dv = 6, hv = 1, pv = 0, Ri = {
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
    }, mv = {
        b: hv,
        w: dv
    }, yv = [
        "1-0",
        "0-1",
        "1/2-1/2",
        "*"
    ];
    function ln(u) {
        return u >> 4;
    }
    function tu(u) {
        return u & 15;
    }
    function Sp(u) {
        return "0123456789".indexOf(u) !== -1;
    }
    function Fe(u) {
        const r = tu(u), c = ln(u);
        return "abcdefgh".substring(r, r + 1) + "87654321".substring(c, c + 1);
    }
    function Za(u) {
        return u === lt ? Mt : lt;
    }
    function vv(u) {
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
        for(let v = 0; v < o.length; v++){
            let p = 0, h = !1;
            for(let y = 0; y < o[v].length; y++)if (Sp(o[v][y])) {
                if (h) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                p += parseInt(o[v][y], 10), h = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(o[v][y])) return {
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
        for (const { color: v, regex: p } of s){
            if (!p.test(r[0])) return {
                ok: !1,
                error: `Invalid FEN: missing ${v} king`
            };
            if ((r[0].match(p) || []).length > 1) return {
                ok: !1,
                error: `Invalid FEN: too many ${v} kings`
            };
        }
        return Array.from(o[0] + o[7]).some((v)=>v.toUpperCase() === "P") ? {
            ok: !1,
            error: "Invalid FEN: some pawns are on the edge rows"
        } : {
            ok: !0
        };
    }
    function gv(u, r) {
        const c = u.from, f = u.to, o = u.piece;
        let s = 0, v = 0, p = 0;
        for(let h = 0, y = r.length; h < y; h++){
            const b = r[h].from, _ = r[h].to, S = r[h].piece;
            o === S && c !== b && f === _ && (s++, ln(c) === ln(b) && v++, tu(c) === tu(b) && p++);
        }
        return s > 0 ? v > 0 && p > 0 ? Fe(c) : p > 0 ? Fe(c).charAt(1) : Fe(c).charAt(0) : "";
    }
    function Bl(u, r, c, f, o, s = void 0, v = ce.NORMAL) {
        const p = ln(f);
        if (o === Ve && (p === sv || p === pv)) for(let h = 0; h < Vh.length; h++){
            const y = Vh[h];
            u.push({
                color: r,
                from: c,
                to: f,
                piece: o,
                captured: s,
                promotion: y,
                flags: v | ce.PROMOTION
            });
        }
        else u.push({
            color: r,
            from: c,
            to: f,
            piece: o,
            captured: s,
            flags: v
        });
    }
    function Xh(u) {
        let r = u.charAt(0);
        return r >= "a" && r <= "h" ? u.match(/[a-h]\d.*[a-h]\d/) ? void 0 : Ve : (r = r.toLowerCase(), r === "o" ? Le : r);
    }
    function cf(u) {
        return u.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function ff(u) {
        return u.split(" ").slice(0, 4).join(" ");
    }
    Rf = class {
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
        constructor(r = uf, { skipValidation: c = !1 } = {}){
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
                ...iv
            }, this._positionCount = {}, this._header.SetUp = null, this._header.FEN = null;
        }
        load(r, { skipValidation: c = !1, preserveHeaders: f = !1 } = {}) {
            let o = r.split(/\s+/);
            if (o.length >= 2 && o.length < 6) {
                const p = [
                    "-",
                    "-",
                    "0",
                    "1"
                ];
                r = o.concat(p.slice(-(6 - o.length))).join(" ");
            }
            if (o = r.split(/\s+/), !c) {
                const { ok: p, error: h } = vv(r);
                if (!p) throw new Error(h);
            }
            const s = o[0];
            let v = 0;
            this.clear({
                preserveHeaders: f
            });
            for(let p = 0; p < s.length; p++){
                const h = s.charAt(p);
                if (h === "/") v += 8;
                else if (Sp(h)) v += parseInt(h, 10);
                else {
                    const y = h < "a" ? lt : Mt;
                    this._put({
                        type: h.toLowerCase(),
                        color: y
                    }, Fe(v)), v++;
                }
            }
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= ce.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= ce.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= ce.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= ce.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? ft : ue[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(r), this._incPositionCount(r);
        }
        fen() {
            let r = 0, c = "";
            for(let s = ue.a8; s <= ue.h1; s++){
                if (this._board[s]) {
                    r > 0 && (c += r, r = 0);
                    const { color: v, type: p } = this._board[s];
                    c += v === lt ? p.toUpperCase() : p.toLowerCase();
                } else r++;
                s + 1 & 136 && (r > 0 && (c += r), s !== ue.h1 && (c += "/"), r = 0, s += 8);
            }
            let f = "";
            this._castling[lt] & ce.KSIDE_CASTLE && (f += "K"), this._castling[lt] & ce.QSIDE_CASTLE && (f += "Q"), this._castling[Mt] & ce.KSIDE_CASTLE && (f += "k"), this._castling[Mt] & ce.QSIDE_CASTLE && (f += "q"), f = f || "-";
            let o = "-";
            if (this._epSquare !== ft) {
                const s = this._epSquare + (this._turn === lt ? 16 : -16), v = [
                    s + 1,
                    s - 1
                ];
                for (const p of v){
                    if (p & 136) continue;
                    const h = this._turn;
                    if (this._board[p]?.color === h && this._board[p]?.type === Ve) {
                        this._makeMove({
                            color: h,
                            from: p,
                            to: this._epSquare,
                            piece: Ve,
                            captured: Ve,
                            flags: ce.EP_CAPTURE
                        });
                        const y = !this._isKingAttacked(h);
                        if (this._undoMove(), y) {
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
            this._history.length > 0 || (r !== uf ? (this._header.SetUp = "1", this._header.FEN = r) : (this._header.SetUp = null, this._header.FEN = null));
        }
        reset() {
            this.load(uf);
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
            if (ov.indexOf(r.toLowerCase()) === -1 || !(f in ue)) return !1;
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
            (!r || this._board[ue.a1]?.type !== Wa || this._board[ue.a1]?.color !== lt) && (this._castling.w &= -65), (!r || this._board[ue.h1]?.type !== Wa || this._board[ue.h1]?.color !== lt) && (this._castling.w &= -33), (!c || this._board[ue.a8]?.type !== Wa || this._board[ue.a8]?.color !== Mt) && (this._castling.b &= -65), (!c || this._board[ue.h8]?.type !== Wa || this._board[ue.h8]?.color !== Mt) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === ft) return;
            const r = this._epSquare + (this._turn === lt ? -16 : 16), c = this._epSquare + (this._turn === lt ? 16 : -16), f = [
                c + 1,
                c - 1
            ];
            if (this._board[r] !== null || this._board[this._epSquare] !== null || this._board[c]?.color !== Za(this._turn) || this._board[c]?.type !== Ve) {
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
                const v = this._board[s], p = s - c;
                if (p === 0) continue;
                const h = p + 119;
                if (rv[h] & fv[v.type]) {
                    if (v.type === Ve) {
                        if (p > 0 && v.color === lt || p <= 0 && v.color === Mt) if (f) o.push(Fe(s));
                        else return !0;
                        continue;
                    }
                    if (v.type === "n" || v.type === "k") if (f) {
                        o.push(Fe(s));
                        continue;
                    } else return !0;
                    const y = cv[h];
                    let b = s + y, _ = !1;
                    for(; b !== c;){
                        if (this._board[b] != null) {
                            _ = !0;
                            break;
                        }
                        b += y;
                    }
                    if (!_) if (f) {
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
            return c === -1 ? !1 : this._attacked(Za(r), c);
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
                const v = this._board[s];
                v && (r[v.type] = v.type in r ? r[v.type] + 1 : 1, v.type === Oi && c.push(o), f++);
            }
            if (f === 2) return !0;
            if (f === 3 && (r[Oi] === 1 || r[hf] === 1)) return !0;
            if (f === r[Oi] + 2) {
                let s = 0;
                const v = c.length;
                for(let p = 0; p < v; p++)s += c[p];
                if (s === 0 || s === v) return !0;
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
            return r ? o.map((s)=>new _i(this, s)) : o.map((s)=>this._moveToSan(s, o));
        }
        _moves({ legal: r = !0, piece: c = void 0, square: f = void 0 } = {}) {
            const o = f ? f.toLowerCase() : void 0, s = c?.toLowerCase(), v = [], p = this._turn, h = Za(p);
            let y = ue.a8, b = ue.h1, _ = !1;
            if (o) if (o in ue) y = b = ue[o], _ = !0;
            else return [];
            for(let T = y; T <= b; T++){
                if (T & 136) {
                    T += 7;
                    continue;
                }
                if (!this._board[T] || this._board[T].color === h) continue;
                const { type: O } = this._board[T];
                let D;
                if (O === Ve) {
                    if (s && s !== O) continue;
                    D = T + rf[p][0], this._board[D] || (Bl(v, p, T, D, Ve), D = T + rf[p][1], mv[p] === ln(T) && !this._board[D] && Bl(v, p, T, D, Ve, void 0, ce.BIG_PAWN));
                    for(let w = 2; w < 4; w++)D = T + rf[p][w], !(D & 136) && (this._board[D]?.color === h ? Bl(v, p, T, D, Ve, this._board[D].type, ce.CAPTURE) : D === this._epSquare && Bl(v, p, T, D, Ve, Ve, ce.EP_CAPTURE));
                } else {
                    if (s && s !== O) continue;
                    for(let w = 0, z = Yh[O].length; w < z; w++){
                        const j = Yh[O][w];
                        for(D = T; D += j, !(D & 136);){
                            if (!this._board[D]) Bl(v, p, T, D, O);
                            else {
                                if (this._board[D].color === p) break;
                                Bl(v, p, T, D, O, this._board[D].type, ce.CAPTURE);
                                break;
                            }
                            if (O === hf || O === Le) break;
                        }
                    }
                }
            }
            if ((s === void 0 || s === Le) && (!_ || b === this._kings[p])) {
                if (this._castling[p] & ce.KSIDE_CASTLE) {
                    const T = this._kings[p], O = T + 2;
                    !this._board[T + 1] && !this._board[O] && !this._attacked(h, this._kings[p]) && !this._attacked(h, T + 1) && !this._attacked(h, O) && Bl(v, p, this._kings[p], O, Le, void 0, ce.KSIDE_CASTLE);
                }
                if (this._castling[p] & ce.QSIDE_CASTLE) {
                    const T = this._kings[p], O = T - 2;
                    !this._board[T - 1] && !this._board[T - 2] && !this._board[T - 3] && !this._attacked(h, this._kings[p]) && !this._attacked(h, T - 1) && !this._attacked(h, O) && Bl(v, p, this._kings[p], O, Le, void 0, ce.QSIDE_CASTLE);
                }
            }
            if (!r || this._kings[p] === -1) return v;
            const S = [];
            for(let T = 0, O = v.length; T < O; T++)this._makeMove(v[T]), this._isKingAttacked(p) || S.push(v[T]), this._undoMove();
            return S;
        }
        move(r, { strict: c = !1 } = {}) {
            let f = null;
            if (typeof r == "string") f = this._moveFromSan(r, c);
            else if (typeof r == "object") {
                const s = this._moves();
                for(let v = 0, p = s.length; v < p; v++)if (r.from === Fe(s[v].from) && r.to === Fe(s[v].to) && (!("promotion" in s[v]) || r.promotion === s[v].promotion)) {
                    f = s[v];
                    break;
                }
            }
            if (!f) throw typeof r == "string" ? new Error(`Invalid move: ${r}`) : new Error(`Invalid move: ${JSON.stringify(r)}`);
            const o = new _i(this, f);
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
            const c = this._turn, f = Za(c);
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
                const c = new _i(this, r);
                return this._decPositionCount(c.after), c;
            }
            return null;
        }
        _undoMove() {
            const r = this._history.pop();
            if (r === void 0) return null;
            const c = r.move;
            this._kings = r.kings, this._turn = r.turn, this._castling = r.castling, this._epSquare = r.epSquare, this._halfMoves = r.halfMoves, this._moveNumber = r.moveNumber;
            const f = this._turn, o = Za(f);
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
                let s, v;
                c.flags & ce.KSIDE_CASTLE ? (s = c.to + 1, v = c.to - 1) : (s = c.to - 2, v = c.to + 1), this._board[s] = this._board[v], delete this._board[v];
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
            }, v = [];
            for(; this._history.length > 0;)v.push(this._undoMove());
            const p = [];
            let h = "";
            for(v.length === 0 && p.push(s("")); v.length > 0;){
                h = s(h);
                const S = v.pop();
                if (!S) break;
                if (!this._history.length && S.color === "b") {
                    const T = `${this._moveNumber}. ...`;
                    h = h ? `${h} ${T}` : T;
                } else S.color === "w" && (h.length && p.push(h), h = this._moveNumber + ".");
                h = h + " " + this._moveToSan(S, this._moves({
                    legal: !0
                })), this._makeMove(S);
            }
            if (h.length && p.push(s(h)), p.push(this._header.Result || "*"), c === 0) return f.join("") + p.join(" ");
            const y = function() {
                return f.length > 0 && f[f.length - 1] === " " ? (f.pop(), !0) : !1;
            }, b = function(S, T) {
                for (const O of T.split(" "))if (O) {
                    if (S + O.length > c) {
                        for(; y();)S--;
                        f.push(r), S = 0;
                    }
                    f.push(O), S += O.length, f.push(" "), S++;
                }
                return y() && S--, S;
            };
            let _ = 0;
            for(let S = 0; S < p.length; S++){
                if (_ + p[S].length > c && p[S].includes("{")) {
                    _ = b(_, p[S]);
                    continue;
                }
                _ + p[S].length > c && S !== 0 ? (f[f.length - 1] === " " && f.pop(), f.push(r), _ = 0) : S !== 0 && (f.push(" "), _++), f.push(p[S]), _ += p[S].length;
            }
            return f.join("");
        }
        header(...r) {
            for(let c = 0; c < r.length; c += 2)typeof r[c] == "string" && typeof r[c + 1] == "string" && (this._header[r[c]] = r[c + 1]);
            return this._header;
        }
        setHeader(r, c) {
            return this._header[r] = c ?? pf[r] ?? null, this.getHeaders();
        }
        removeHeader(r) {
            return r in this._header ? (this._header[r] = pf[r] || null, !0) : !1;
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
                let W = "", J = "";
                for(let $ = 0; $ < K.length; $++){
                    const ne = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    W = K[$].replace(ne, "$1"), J = K[$].replace(ne, "$2"), W.trim().length > 0 && (V[W] = J);
                }
                return V;
            }
            r = r.trim();
            const p = new RegExp("^(\\[((?:" + o(f) + ")|.)*\\])((?:\\s*" + o(f) + "){2}|(?:\\s*" + o(f) + ")*$)").exec(r), h = p && p.length >= 2 ? p[1] : "";
            this.reset();
            const y = s(h);
            let b = "";
            for(const k in y)k.toLowerCase() === "fen" && (b = y[k]), this.header(k, y[k]);
            if (!c) b && this.load(b, {
                preserveHeaders: !0
            });
            else if (y.SetUp === "1") {
                if (!("FEN" in y)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
                this.load(y.FEN, {
                    preserveHeaders: !0
                });
            }
            function _(k) {
                return Array.from(k).map(function(V) {
                    return V.charCodeAt(0) < 128 ? V.charCodeAt(0).toString(16) : encodeURIComponent(V).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function S(k) {
                return k.length == 0 ? "" : decodeURIComponent("%" + (k.match(/.{1,2}/g) || []).join("%"));
            }
            const T = function(k) {
                return k = k.replace(new RegExp(o(f), "g"), " "), `{${_(k.slice(1, k.length - 1))}}`;
            }, O = function(k) {
                if (k.startsWith("{") && k.endsWith("}")) return S(k.slice(1, k.length - 1));
            };
            let D = r.replace(h, "").replace(new RegExp(`({[^}]*})+?|;([^${o(f)}]*)`, "g"), function(k, V, K) {
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
                if (K == null) if (yv.indexOf(z[k]) > -1) j = z[k];
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
                    const o = gv(r, c);
                    f += r.piece.toUpperCase() + o;
                }
                r.flags & (ce.CAPTURE | ce.EP_CAPTURE) && (r.piece === Ve && (f += Fe(r.from)[0]), f += "x"), f += Fe(r.to), r.promotion && (f += "=" + r.promotion.toUpperCase());
            }
            return this._makeMove(r), this.isCheck() && (this.isCheckmate() ? f += "#" : f += "+"), this._undoMove(), f;
        }
        _moveFromSan(r, c = !1) {
            const f = cf(r);
            let o = Xh(f), s = this._moves({
                legal: !0,
                piece: o
            });
            for(let S = 0, T = s.length; S < T; S++)if (f === cf(this._moveToSan(s[S], s))) return s[S];
            if (c) return null;
            let v, p, h, y, b, _ = !1;
            if (p = f.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), p ? (v = p[1], h = p[2], y = p[3], b = p[4], h.length == 1 && (_ = !0)) : (p = f.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), p && (v = p[1], h = p[2], y = p[3], b = p[4], h.length == 1 && (_ = !0))), o = Xh(f), s = this._moves({
                legal: !0,
                piece: v || o
            }), !y) return null;
            for(let S = 0, T = s.length; S < T; S++)if (h) {
                if ((!v || v.toLowerCase() == s[S].piece) && ue[h] == s[S].from && ue[y] == s[S].to && (!b || b.toLowerCase() == s[S].promotion)) return s[S];
                if (_) {
                    const O = Fe(s[S].from);
                    if ((!v || v.toLowerCase() == s[S].piece) && ue[y] == s[S].to && (h == O[0] || h == O[1]) && (!b || b.toLowerCase() == s[S].promotion)) return s[S];
                }
            } else if (f === cf(this._moveToSan(s[S], s)).replace("x", "")) return s[S];
            return null;
        }
        ascii() {
            let r = `   +------------------------+
`;
            for(let c = ue.a8; c <= ue.h1; c++){
                if (tu(c) === 0 && (r += " " + "87654321"[ln(c)] + " |"), this._board[c]) {
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
            for(let s = 0, v = c.length; s < v; s++)this._makeMove(c[s]), this._isKingAttacked(o) || (r - 1 > 0 ? f += this.perft(r - 1) : f++), this._undoMove();
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
                return (ln(c) + tu(c)) % 2 === 0 ? "light" : "dark";
            }
            return null;
        }
        history({ verbose: r = !1 } = {}) {
            const c = [], f = [];
            for(; this._history.length > 0;)c.push(this._undoMove());
            for(;;){
                const o = c.pop();
                if (!o) break;
                r ? f.push(new _i(this, o)) : f.push(this._moveToSan(o, this._moves())), this._makeMove(o);
            }
            return f;
        }
        _getPositionCount(r) {
            const c = ff(r);
            return this._positionCount[c] || 0;
        }
        _incPositionCount(r) {
            const c = ff(r);
            this._positionCount[c] === void 0 && (this._positionCount[c] = 0), this._positionCount[c] += 1;
        }
        _decPositionCount(r) {
            const c = ff(r);
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
            ])c[o] !== void 0 && (c[o] ? this._castling[r] |= Ri[o] : this._castling[r] &= ~Ri[o]);
            this._updateCastlingRights();
            const f = this.getCastlingRights(r);
            return (c[Le] === void 0 || c[Le] === f[Le]) && (c[wl] === void 0 || c[wl] === f[wl]);
        }
        getCastlingRights(r) {
            return {
                [Le]: (this._castling[r] & Ri[Le]) !== 0,
                [wl]: (this._castling[r] & Ri[wl]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let Ep, _p, bv, Rp, Sv, Tp, Ev, _v, Ap, Zh, Rv, Op, Np, xp, Tv, Av, Mp, Cp, Dp, Bp, Tf, wp, Ov, Nv, xv, Mv, Cv, Dv, Bv, wv, zv, Uv, Pv, qv, zp, Up, Pp, qp, Hp, kp, Lp, jp, Qp, Kp, Gp, Af, Jh, $h, Hv, kv, Lv, jv, Qv, Kv, Gv, Yv, Vv, Xv, Fh, Zv, Jv, $v, Fv, Wv, Iv;
    Ep = "MOVE_PIECE";
    _p = "RESET_GAME";
    bv = "LOAD_GAME";
    Rp = "SET_GAME_OVER";
    Sv = "SET_TIMER_DURATION";
    u2 = (u)=>({
            type: Ep,
            payload: u
        });
    i2 = (u)=>({
            type: _p,
            payload: u
        });
    r2 = (u, r)=>({
            type: Rp,
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
    Tp = [
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
    Ev = [
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
    _v = {
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
    Ap = {
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
    Zh = {
        fen: _e.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: _e.TIMER_DURATION
    };
    Rv = (u = Zh, r)=>{
        switch(r.type){
            case Ep:
                try {
                    const c = new Rf(u.fen), f = c.move({
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
            case _p:
                return {
                    ...Zh,
                    moveHistory: [],
                    timerDuration: r.payload
                };
            case bv:
                return {
                    ...u,
                    fen: r.payload.fen,
                    moveHistory: r.payload.moveHistory || []
                };
            case Rp:
                return {
                    ...u,
                    isGameOver: r.payload.isGameOver,
                    gameResult: r.payload.gameResult
                };
            case Sv:
                return {
                    ...u,
                    timerDuration: r.payload
                };
            default:
                return u;
        }
    };
    Op = "FLIP_BOARD";
    Np = "SET_THEME";
    xp = "SET_SOUND";
    c2 = ()=>({
            type: Op
        });
    f2 = (u)=>({
            type: Np,
            payload: u
        });
    o2 = (u)=>({
            type: xp,
            payload: u
        });
    Tv = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    Av = (u = Tv, r)=>{
        switch(r.type){
            case Op:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case Np:
                return {
                    ...u,
                    theme: r.payload
                };
            case xp:
                return {
                    ...u,
                    enableSound: r.payload
                };
            default:
                return u;
        }
    };
    Mp = "NEXT";
    Cp = "PREV";
    Dp = "START_POS";
    Bp = "FINAL_POS";
    Tf = "LOAD_PGN";
    wp = "JUMP_TO_MOVE";
    Ov = "TOGGLE_ENGINE";
    Nv = "DISABLE_ENGINE";
    s2 = ()=>({
            type: Dp
        });
    d2 = ()=>({
            type: Cp
        });
    h2 = ()=>({
            type: Mp
        });
    p2 = ()=>({
            type: Bp
        });
    m2 = ({ finalPos: u, moves: r, fens: c, fromToSquares: f, termination: o, result: s, blackPlayerName: v, whitePlayerName: p })=>({
            type: Tf,
            payload: {
                finalPos: u,
                moves: r,
                fens: c,
                fromToSquares: f,
                termination: o,
                result: s,
                blackPlayerName: v,
                whitePlayerName: p
            }
        });
    y2 = (u)=>({
            type: wp,
            payload: u
        });
    xv = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    Mv = (u = xv, r)=>{
        switch(r.type){
            case Mp:
                return u.currentMoveIndex === u.fenLength - 1 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex + 1
                };
            case Cp:
                return u.currentMoveIndex === 0 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex - 1
                };
            case Dp:
                return {
                    ...u,
                    currentMoveIndex: 0
                };
            case Bp:
                return {
                    ...u,
                    currentMoveIndex: u.fenLength - 1
                };
            case wp:
                return {
                    ...u,
                    currentMoveIndex: r.payload
                };
            case Tf:
                return {
                    ...u,
                    finalFen: r.payload.finalPos,
                    fenLength: r.payload.fens.length,
                    currentMoveIndex: 0
                };
            case Ov:
                return {
                    ...u,
                    engineEnabled: !u.engineEnabled
                };
            case Nv:
                return {
                    ...u,
                    engineEnabled: !1
                };
            default:
                return u;
        }
    };
    Cv = {
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
    Dv = (u = Cv, r)=>{
        switch(r.type){
            case Tf:
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
    Bv = "TOGGLE_ENGINE";
    wv = "SET_MULTIPV";
    zv = "SET_MAX_DEPTH";
    Uv = "SET_AUTO_STOP_TIME";
    Pv = {
        enabled: !1,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    qv = (u = Pv, r)=>{
        switch(r.type){
            case Bv:
                return {
                    ...u,
                    enabled: !u.enabled
                };
            case wv:
                return {
                    ...u,
                    multiPV: r.payload
                };
            case zv:
                return {
                    ...u,
                    maxDepth: r.payload
                };
            case Uv:
                return {
                    ...u,
                    autoStopTime: r.payload
                };
            default:
                return u;
        }
    };
    zp = "RESET_BOARD";
    Up = "CLEAR_BOARD";
    Pp = "FLIP_BOARD";
    qp = "SET_BOARD_WITH_FEN";
    Hp = "PUT_PIECE";
    kp = "REMOVE_PIECE";
    Lp = "MOVE_BOARD_PIECE";
    jp = "TOGGLE_CASTLING_PIECE";
    Qp = "SET_PLAYER_TO_MOVE";
    Kp = "SET_SELECTED_ITEM";
    Gp = "DESELECT_ITEM";
    Af = (u)=>({
            type: Kp,
            payload: {
                item: u
            }
        });
    Jh = ()=>({
            type: Gp
        });
    $h = (u)=>({
            type: Qp,
            payload: {
                color: u
            }
        });
    Hv = ()=>({
            type: zp
        });
    kv = ()=>({
            type: Up
        });
    Lv = ()=>({
            type: Pp
        });
    jv = (u)=>({
            type: qp,
            payload: {
                fen: u
            }
        });
    Qv = (u, r)=>({
            type: Hp,
            payload: {
                squareId: u,
                piece: r
            }
        });
    Kv = (u)=>({
            type: kp,
            payload: {
                squareId: u
            }
        });
    Gv = (u, r)=>({
            type: Lp,
            payload: {
                sourceSquareId: u,
                destSquareId: r
            }
        });
    Yv = (u)=>({
            type: jp,
            payload: {
                flag: u
            }
        });
    Vv = (u)=>{
        const r = Ap;
        try {
            const c = new Rf;
            c.load(u);
            const f = c.board();
            for(let o = 0; o < 8; o++)for(let s = 0; s < 8; s++){
                const v = f[o][s], p = `${"abcdefgh"[s]}${8 - o}`;
                r[p] = v ? {
                    type: v.type,
                    color: v.color
                } : null;
            }
        } catch (c) {
            console.error("FenToBoard error", c, u);
        }
        return r;
    };
    Xv = (u)=>u.split(" ")?.[1] === "w" ? "w" : "b";
    Fh = {
        board: {
            ..._v
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
    Zv = {
        board: {
            ...Ap
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
    Jv = (u = Fh, r)=>{
        switch(r.type){
            case Pp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case zp:
                return Fh;
            case Up:
                return Zv;
            case qp:
                return {
                    ...u,
                    board: {
                        ...Vv(r.payload.fen)
                    },
                    playerToMove: Xv(r.payload.fen)
                };
            case Hp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [r.payload.squareId]: r.payload.piece
                    }
                };
            case Lp:
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
            case kp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [r.payload.squareId]: null
                    }
                };
            case jp:
                return {
                    ...u,
                    castlingFlags: {
                        ...u.castlingFlags,
                        [r.payload.flag]: !u.castlingFlags[r.payload.flag]
                    }
                };
            case Qp:
                return {
                    ...u,
                    playerToMove: r.payload.color
                };
            case Kp:
                return {
                    ...u,
                    selectedItem: r.payload.item ?? null
                };
            case Gp:
                return {
                    ...u,
                    selectedItem: null
                };
            default:
                return u;
        }
    };
    $v = op({
        game: Rv,
        settings: Av,
        analysis: Mv,
        pgn: Dv,
        engine: qv,
        boardeditor: Jv
    });
    Fv = {
        getItem: (u)=>new Promise((r)=>{
                try {
                    const c = localStorage.getItem(u);
                    if (c == null) {
                        r(null);
                        return;
                    }
                    JSON.parse(c), r(c);
                } catch  {
                    r(null);
                }
            }),
        setItem: (u, r)=>new Promise((c)=>{
                try {
                    localStorage.setItem(u, JSON.stringify(r)), c();
                } catch  {
                    c();
                }
            }),
        removeItem: (u)=>new Promise((r)=>{
                try {
                    localStorage.removeItem(u), r();
                } catch  {
                    r();
                }
            })
    };
    Wv = {
        key: "root",
        storage: Fv,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    Iv = Wy(Wv, $v);
    Yp = Py({
        reducer: Iv,
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
    av(Yp);
    const eg = "modulepreload", tg = function(u) {
        return "/chess-frontend/" + u;
    }, Wh = {}, Vp = function(r, c, f) {
        let o = Promise.resolve();
        if (c && c.length > 0) {
            document.getElementsByTagName("link");
            const v = document.querySelector("meta[property=csp-nonce]"), p = v?.nonce || v?.getAttribute("nonce");
            o = Promise.allSettled(c.map((h)=>{
                if (h = tg(h), h in Wh) return;
                Wh[h] = !0;
                const y = h.endsWith(".css"), b = y ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${h}"]${b}`)) return;
                const _ = document.createElement("link");
                if (_.rel = y ? "stylesheet" : eg, y || (_.as = "script"), _.crossOrigin = "", _.href = h, p && _.setAttribute("nonce", p), document.head.appendChild(_), y) return new Promise((S, T)=>{
                    _.addEventListener("load", S), _.addEventListener("error", ()=>T(new Error(`Unable to preload CSS for ${h}`)));
                });
            }));
        }
        function s(v) {
            const p = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (p.payload = v, window.dispatchEvent(p), !p.defaultPrevented) throw v;
        }
        return o.then((v)=>{
            for (const p of v || [])p.status === "rejected" && s(p.reason);
            return r().catch(s);
        });
    };
    var Ja = {}, Ih;
    function lg() {
        if (Ih) return Ja;
        Ih = 1, Object.defineProperty(Ja, "__esModule", {
            value: !0
        }), Ja.parse = v, Ja.serialize = y;
        const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, f = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, s = (()=>{
            const S = function() {};
            return S.prototype = Object.create(null), S;
        })();
        function v(S, T) {
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
                const K = p(S, z, j), W = h(S, j, K), J = S.slice(K, W);
                if (O[J] === void 0) {
                    let $ = p(S, j + 1, V), ne = h(S, V, $);
                    const Ce = w(S.slice($, ne));
                    O[J] = Ce;
                }
                z = V + 1;
            }while (z < D);
            return O;
        }
        function p(S, T, O) {
            do {
                const D = S.charCodeAt(T);
                if (D !== 32 && D !== 9) return T;
            }while (++T < O);
            return O;
        }
        function h(S, T, O) {
            for(; T > O;){
                const D = S.charCodeAt(--T);
                if (D !== 32 && D !== 9) return T + 1;
            }
            return O;
        }
        function y(S, T, O) {
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
                if (!_(O.expires) || !Number.isFinite(O.expires.valueOf())) throw new TypeError(`option expires is invalid: ${O.expires}`);
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
        function _(S) {
            return o.call(S) === "[object Date]";
        }
        return Ja;
    }
    lg();
    var ep = "popstate";
    function ng(u = {}) {
        function r(o, s) {
            let { pathname: v = "/", search: p = "", hash: h = "" } = un(o.location.hash.substring(1));
            return !v.startsWith("/") && !v.startsWith(".") && (v = "/" + v), mf("", {
                pathname: v,
                search: p,
                hash: h
            }, s.state && s.state.usr || null, s.state && s.state.key || "default");
        }
        function c(o, s) {
            let v = o.document.querySelector("base"), p = "";
            if (v && v.getAttribute("href")) {
                let h = o.location.href, y = h.indexOf("#");
                p = y === -1 ? h : h.slice(0, y);
            }
            return p + "#" + (typeof s == "string" ? s : lu(s));
        }
        function f(o, s) {
            wt(o.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`);
        }
        return ug(r, c, f, u);
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
    function ag() {
        return Math.random().toString(36).substring(2, 10);
    }
    function tp(u, r) {
        return {
            usr: u.state,
            key: u.key,
            idx: r
        };
    }
    function mf(u, r, c = null, f) {
        return {
            pathname: typeof u == "string" ? u : u.pathname,
            search: "",
            hash: "",
            ...typeof r == "string" ? un(r) : r,
            state: c,
            key: r && r.key || f || ag()
        };
    }
    function lu({ pathname: u = "/", search: r = "", hash: c = "" }) {
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
    function ug(u, r, c, f = {}) {
        let { window: o = document.defaultView, v5Compat: s = !1 } = f, v = o.history, p = "POP", h = null, y = b();
        y == null && (y = 0, v.replaceState({
            ...v.state,
            idx: y
        }, ""));
        function b() {
            return (v.state || {
                idx: null
            }).idx;
        }
        function _() {
            p = "POP";
            let w = b(), z = w == null ? null : w - y;
            y = w, h && h({
                action: p,
                location: D.location,
                delta: z
            });
        }
        function S(w, z) {
            p = "PUSH";
            let j = mf(D.location, w, z);
            c && c(j, w), y = b() + 1;
            let k = tp(j, y), V = D.createHref(j);
            try {
                v.pushState(k, "", V);
            } catch (K) {
                if (K instanceof DOMException && K.name === "DataCloneError") throw K;
                o.location.assign(V);
            }
            s && h && h({
                action: p,
                location: D.location,
                delta: 1
            });
        }
        function T(w, z) {
            p = "REPLACE";
            let j = mf(D.location, w, z);
            c && c(j, w), y = b();
            let k = tp(j, y), V = D.createHref(j);
            v.replaceState(k, "", V), s && h && h({
                action: p,
                location: D.location,
                delta: 0
            });
        }
        function O(w) {
            let z = o.location.origin !== "null" ? o.location.origin : o.location.href, j = typeof w == "string" ? w : lu(w);
            return j = j.replace(/ $/, "%20"), Me(z, `No window.location.(origin|href) available to create URL for href: ${j}`), new URL(j, z);
        }
        let D = {
            get action () {
                return p;
            },
            get location () {
                return u(o, v);
            },
            listen (w) {
                if (h) throw new Error("A history only accepts one active listener");
                return o.addEventListener(ep, _), h = w, ()=>{
                    o.removeEventListener(ep, _), h = null;
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
                return v.go(w);
            }
        };
        return D;
    }
    function Xp(u, r, c = "/") {
        return ig(u, r, c, !1);
    }
    function ig(u, r, c, f) {
        let o = typeof r == "string" ? un(r) : r, s = al(o.pathname || "/", c);
        if (s == null) return null;
        let v = Zp(u);
        rg(v);
        let p = null;
        for(let h = 0; p == null && h < v.length; ++h){
            let y = gg(s);
            p = yg(v[h], y, f);
        }
        return p;
    }
    function Zp(u, r = [], c = [], f = "") {
        let o = (s, v, p)=>{
            let h = {
                relativePath: p === void 0 ? s.path || "" : p,
                caseSensitive: s.caseSensitive === !0,
                childrenIndex: v,
                route: s
            };
            h.relativePath.startsWith("/") && (Me(h.relativePath.startsWith(f), `Absolute route path "${h.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(f.length));
            let y = nl([
                f,
                h.relativePath
            ]), b = c.concat(h);
            s.children && s.children.length > 0 && (Me(s.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${y}".`), Zp(s.children, r, b, y)), !(s.path == null && !s.index) && r.push({
                path: y,
                score: pg(y, s.index),
                routesMeta: b
            });
        };
        return u.forEach((s, v)=>{
            if (s.path === "" || !s.path?.includes("?")) o(s, v);
            else for (let p of Jp(s.path))o(s, v, p);
        }), r;
    }
    function Jp(u) {
        let r = u.split("/");
        if (r.length === 0) return [];
        let [c, ...f] = r, o = c.endsWith("?"), s = c.replace(/\?$/, "");
        if (f.length === 0) return o ? [
            s,
            ""
        ] : [
            s
        ];
        let v = Jp(f.join("/")), p = [];
        return p.push(...v.map((h)=>h === "" ? s : [
                s,
                h
            ].join("/"))), o && p.push(...v), p.map((h)=>u.startsWith("/") && h === "" ? "/" : h);
    }
    function rg(u) {
        u.sort((r, c)=>r.score !== c.score ? c.score - r.score : mg(r.routesMeta.map((f)=>f.childrenIndex), c.routesMeta.map((f)=>f.childrenIndex)));
    }
    var cg = /^:[\w-]+$/, fg = 3, og = 2, sg = 1, dg = 10, hg = -2, lp = (u)=>u === "*";
    function pg(u, r) {
        let c = u.split("/"), f = c.length;
        return c.some(lp) && (f += hg), r && (f += og), c.filter((o)=>!lp(o)).reduce((o, s)=>o + (cg.test(s) ? fg : s === "" ? sg : dg), f);
    }
    function mg(u, r) {
        return u.length === r.length && u.slice(0, -1).every((f, o)=>f === r[o]) ? u[u.length - 1] - r[r.length - 1] : 0;
    }
    function yg(u, r, c = !1) {
        let { routesMeta: f } = u, o = {}, s = "/", v = [];
        for(let p = 0; p < f.length; ++p){
            let h = f[p], y = p === f.length - 1, b = s === "/" ? r : r.slice(s.length) || "/", _ = Di({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: y
            }, b), S = h.route;
            if (!_ && y && c && !f[f.length - 1].route.index && (_ = Di({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: !1
            }, b)), !_) return null;
            Object.assign(o, _.params), v.push({
                params: o,
                pathname: nl([
                    s,
                    _.pathname
                ]),
                pathnameBase: _g(nl([
                    s,
                    _.pathnameBase
                ])),
                route: S
            }), _.pathnameBase !== "/" && (s = nl([
                s,
                _.pathnameBase
            ]));
        }
        return v;
    }
    function Di(u, r) {
        typeof u == "string" && (u = {
            path: u,
            caseSensitive: !1,
            end: !0
        });
        let [c, f] = vg(u.path, u.caseSensitive, u.end), o = r.match(c);
        if (!o) return null;
        let s = o[0], v = s.replace(/(.)\/+$/, "$1"), p = o.slice(1);
        return {
            params: f.reduce((y, { paramName: b, isOptional: _ }, S)=>{
                if (b === "*") {
                    let O = p[S] || "";
                    v = s.slice(0, s.length - O.length).replace(/(.)\/+$/, "$1");
                }
                const T = p[S];
                return _ && !T ? y[b] = void 0 : y[b] = (T || "").replace(/%2F/g, "/"), y;
            }, {}),
            pathname: s,
            pathnameBase: v,
            pattern: u
        };
    }
    function vg(u, r = !1, c = !0) {
        wt(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`);
        let f = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (v, p, h)=>(f.push({
                paramName: p,
                isOptional: h != null
            }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return u.endsWith("*") ? (f.push({
            paramName: "*"
        }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [
            new RegExp(o, r ? void 0 : "i"),
            f
        ];
    }
    function gg(u) {
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
    function bg(u, r = "/") {
        let { pathname: c, search: f = "", hash: o = "" } = typeof u == "string" ? un(u) : u;
        return {
            pathname: c ? c.startsWith("/") ? c : Sg(c, r) : r,
            search: Rg(f),
            hash: Tg(o)
        };
    }
    function Sg(u, r) {
        let c = r.replace(/\/+$/, "").split("/");
        return u.split("/").forEach((o)=>{
            o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
        }), c.length > 1 ? c.join("/") : "/";
    }
    function of(u, r, c, f) {
        return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function Eg(u) {
        return u.filter((r, c)=>c === 0 || r.route.path && r.route.path.length > 0);
    }
    function $p(u) {
        let r = Eg(u);
        return r.map((c, f)=>f === r.length - 1 ? c.pathname : c.pathnameBase);
    }
    function Fp(u, r, c, f = !1) {
        let o;
        typeof u == "string" ? o = un(u) : (o = {
            ...u
        }, Me(!o.pathname || !o.pathname.includes("?"), of("?", "pathname", "search", o)), Me(!o.pathname || !o.pathname.includes("#"), of("#", "pathname", "hash", o)), Me(!o.search || !o.search.includes("#"), of("#", "search", "hash", o)));
        let s = u === "" || o.pathname === "", v = s ? "/" : o.pathname, p;
        if (v == null) p = c;
        else {
            let _ = r.length - 1;
            if (!f && v.startsWith("..")) {
                let S = v.split("/");
                for(; S[0] === "..";)S.shift(), _ -= 1;
                o.pathname = S.join("/");
            }
            p = _ >= 0 ? r[_] : "/";
        }
        let h = bg(o, p), y = v && v !== "/" && v.endsWith("/"), b = (s || v === ".") && c.endsWith("/");
        return !h.pathname.endsWith("/") && (y || b) && (h.pathname += "/"), h;
    }
    var nl = (u)=>u.join("/").replace(/\/\/+/g, "/"), _g = (u)=>u.replace(/\/+$/, "").replace(/^\/*/, "/"), Rg = (u)=>!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, Tg = (u)=>!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
    function Ag(u) {
        return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
    }
    var Wp = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(Wp);
    var Og = [
        "GET",
        ...Wp
    ];
    new Set(Og);
    var Zn = N.createContext(null);
    Zn.displayName = "DataRouter";
    var wi = N.createContext(null);
    wi.displayName = "DataRouterState";
    var Ip = N.createContext({
        isTransitioning: !1
    });
    Ip.displayName = "ViewTransition";
    var Ng = N.createContext(new Map);
    Ng.displayName = "Fetchers";
    var xg = N.createContext(null);
    xg.displayName = "Await";
    var Lt = N.createContext(null);
    Lt.displayName = "Navigation";
    var nu = N.createContext(null);
    nu.displayName = "Location";
    var ul = N.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    ul.displayName = "Route";
    var Of = N.createContext(null);
    Of.displayName = "RouteError";
    function Mg(u, { relative: r } = {}) {
        Me(au(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: c, navigator: f } = N.useContext(Lt), { hash: o, pathname: s, search: v } = uu(u, {
            relative: r
        }), p = s;
        return c !== "/" && (p = s === "/" ? c : nl([
            c,
            s
        ])), f.createHref({
            pathname: p,
            search: v,
            hash: o
        });
    }
    function au() {
        return N.useContext(nu) != null;
    }
    function rn() {
        return Me(au(), "useLocation() may be used only in the context of a <Router> component."), N.useContext(nu).location;
    }
    var em = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function tm(u) {
        N.useContext(Lt).static || N.useLayoutEffect(u);
    }
    function Cg() {
        let { isDataRoute: u } = N.useContext(ul);
        return u ? Kg() : Dg();
    }
    function Dg() {
        Me(au(), "useNavigate() may be used only in the context of a <Router> component.");
        let u = N.useContext(Zn), { basename: r, navigator: c } = N.useContext(Lt), { matches: f } = N.useContext(ul), { pathname: o } = rn(), s = JSON.stringify($p(f)), v = N.useRef(!1);
        return tm(()=>{
            v.current = !0;
        }), N.useCallback((h, y = {})=>{
            if (wt(v.current, em), !v.current) return;
            if (typeof h == "number") {
                c.go(h);
                return;
            }
            let b = Fp(h, JSON.parse(s), o, y.relative === "path");
            u == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : nl([
                r,
                b.pathname
            ])), (y.replace ? c.replace : c.push)(b, y.state, y);
        }, [
            r,
            c,
            s,
            o,
            u
        ]);
    }
    N.createContext(null);
    function uu(u, { relative: r } = {}) {
        let { matches: c } = N.useContext(ul), { pathname: f } = rn(), o = JSON.stringify($p(c));
        return N.useMemo(()=>Fp(u, JSON.parse(o), f, r === "path"), [
            u,
            o,
            f,
            r
        ]);
    }
    function Bg(u, r) {
        return lm(u, r);
    }
    function lm(u, r, c, f) {
        Me(au(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: s } = N.useContext(Lt), { matches: v } = N.useContext(ul), p = v[v.length - 1], h = p ? p.params : {}, y = p ? p.pathname : "/", b = p ? p.pathnameBase : "/", _ = p && p.route;
        {
            let j = _ && _.path || "";
            nm(y, !_ || j.endsWith("*") || j.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

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
        let w = !s && c && c.matches && c.matches.length > 0 ? c.matches : Xp(u, {
            pathname: D
        });
        wt(_ || w != null, `No routes matched location "${T.pathname}${T.search}${T.hash}" `), wt(w == null || w[w.length - 1].route.element !== void 0 || w[w.length - 1].route.Component !== void 0 || w[w.length - 1].route.lazy !== void 0, `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let z = qg(w && w.map((j)=>Object.assign({}, j, {
                params: Object.assign({}, h, j.params),
                pathname: nl([
                    b,
                    o.encodeLocation ? o.encodeLocation(j.pathname).pathname : j.pathname
                ]),
                pathnameBase: j.pathnameBase === "/" ? b : nl([
                    b,
                    o.encodeLocation ? o.encodeLocation(j.pathnameBase).pathname : j.pathnameBase
                ])
            })), v, c, f);
        return r && z ? N.createElement(nu.Provider, {
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
    function wg() {
        let u = Qg(), r = Ag(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, f = "rgba(200,200,200, 0.5)", o = {
            padding: "0.5rem",
            backgroundColor: f
        }, s = {
            padding: "2px 4px",
            backgroundColor: f
        }, v = null;
        return console.error("Error handled by React Router default ErrorBoundary:", u), v = N.createElement(N.Fragment, null, N.createElement("p", null, "💿 Hey developer 👋"), N.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", N.createElement("code", {
            style: s
        }, "ErrorBoundary"), " or", " ", N.createElement("code", {
            style: s
        }, "errorElement"), " prop on your route.")), N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), c ? N.createElement("pre", {
            style: o
        }, c) : null, v);
    }
    var zg = N.createElement(wg, null), Ug = class extends N.Component {
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
            }, N.createElement(Of.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function Pg({ routeContext: u, match: r, children: c }) {
        let f = N.useContext(Zn);
        return f && f.static && f.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = r.route.id), N.createElement(ul.Provider, {
            value: u
        }, c);
    }
    function qg(u, r = [], c = null, f = null) {
        if (u == null) {
            if (!c) return null;
            if (c.errors) u = c.matches;
            else if (r.length === 0 && !c.initialized && c.matches.length > 0) u = c.matches;
            else return null;
        }
        let o = u, s = c?.errors;
        if (s != null) {
            let h = o.findIndex((y)=>y.route.id && s?.[y.route.id] !== void 0);
            Me(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`), o = o.slice(0, Math.min(o.length, h + 1));
        }
        let v = !1, p = -1;
        if (c) for(let h = 0; h < o.length; h++){
            let y = o[h];
            if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (p = h), y.route.id) {
                let { loaderData: b, errors: _ } = c, S = y.route.loader && !b.hasOwnProperty(y.route.id) && (!_ || _[y.route.id] === void 0);
                if (y.route.lazy || S) {
                    v = !0, p >= 0 ? o = o.slice(0, p + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((h, y, b)=>{
            let _, S = !1, T = null, O = null;
            c && (_ = s && y.route.id ? s[y.route.id] : void 0, T = y.route.errorElement || zg, v && (p < 0 && b === 0 ? (nm("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), S = !0, O = null) : p === b && (S = !0, O = y.route.hydrateFallbackElement || null)));
            let D = r.concat(o.slice(0, b + 1)), w = ()=>{
                let z;
                return _ ? z = T : S ? z = O : y.route.Component ? z = N.createElement(y.route.Component, null) : y.route.element ? z = y.route.element : z = h, N.createElement(Pg, {
                    match: y,
                    routeContext: {
                        outlet: h,
                        matches: D,
                        isDataRoute: c != null
                    },
                    children: z
                });
            };
            return c && (y.route.ErrorBoundary || y.route.errorElement || b === 0) ? N.createElement(Ug, {
                location: c.location,
                revalidation: c.revalidation,
                component: T,
                error: _,
                children: w(),
                routeContext: {
                    outlet: null,
                    matches: D,
                    isDataRoute: !0
                }
            }) : w();
        }, null);
    }
    function Nf(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Hg(u) {
        let r = N.useContext(Zn);
        return Me(r, Nf(u)), r;
    }
    function kg(u) {
        let r = N.useContext(wi);
        return Me(r, Nf(u)), r;
    }
    function Lg(u) {
        let r = N.useContext(ul);
        return Me(r, Nf(u)), r;
    }
    function xf(u) {
        let r = Lg(u), c = r.matches[r.matches.length - 1];
        return Me(c.route.id, `${u} can only be used on routes that contain a unique "id"`), c.route.id;
    }
    function jg() {
        return xf("useRouteId");
    }
    function Qg() {
        let u = N.useContext(Of), r = kg("useRouteError"), c = xf("useRouteError");
        return u !== void 0 ? u : r.errors?.[c];
    }
    function Kg() {
        let { router: u } = Hg("useNavigate"), r = xf("useNavigate"), c = N.useRef(!1);
        return tm(()=>{
            c.current = !0;
        }), N.useCallback(async (o, s = {})=>{
            wt(c.current, em), c.current && (typeof o == "number" ? u.navigate(o) : await u.navigate(o, {
                fromRouteId: r,
                ...s
            }));
        }, [
            u,
            r
        ]);
    }
    var np = {};
    function nm(u, r, c) {
        !r && !np[u] && (np[u] = !0, wt(!1, c));
    }
    N.memo(Gg);
    function Gg({ routes: u, future: r, state: c }) {
        return lm(u, void 0, c, r);
    }
    function Ia(u) {
        Me(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function Yg({ basename: u = "/", children: r = null, location: c, navigationType: f = "POP", navigator: o, static: s = !1 }) {
        Me(!au(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let v = u.replace(/^\/*/, "/"), p = N.useMemo(()=>({
                basename: v,
                navigator: o,
                static: s,
                future: {}
            }), [
            v,
            o,
            s
        ]);
        typeof c == "string" && (c = un(c));
        let { pathname: h = "/", search: y = "", hash: b = "", state: _ = null, key: S = "default" } = c, T = N.useMemo(()=>{
            let O = al(h, v);
            return O == null ? null : {
                location: {
                    pathname: O,
                    search: y,
                    hash: b,
                    state: _,
                    key: S
                },
                navigationType: f
            };
        }, [
            v,
            h,
            y,
            b,
            _,
            S,
            f
        ]);
        return wt(T != null, `<Router basename="${v}"> is not able to match the URL "${h}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`), T == null ? null : N.createElement(Lt.Provider, {
            value: p
        }, N.createElement(nu.Provider, {
            children: r,
            value: T
        }));
    }
    function Vg({ children: u, location: r }) {
        return Bg(yf(u), r);
    }
    function yf(u, r = []) {
        let c = [];
        return N.Children.forEach(u, (f, o)=>{
            if (!N.isValidElement(f)) return;
            let s = [
                ...r,
                o
            ];
            if (f.type === N.Fragment) {
                c.push.apply(c, yf(f.props.children, s));
                return;
            }
            Me(f.type === Ia, `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Me(!f.props.index || !f.props.children, "An index route cannot have child routes.");
            let v = {
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
            f.props.children && (v.children = yf(f.props.children, s)), c.push(v);
        }), c;
    }
    var Ni = "get", xi = "application/x-www-form-urlencoded";
    function zi(u) {
        return u != null && typeof u.tagName == "string";
    }
    function Xg(u) {
        return zi(u) && u.tagName.toLowerCase() === "button";
    }
    function Zg(u) {
        return zi(u) && u.tagName.toLowerCase() === "form";
    }
    function Jg(u) {
        return zi(u) && u.tagName.toLowerCase() === "input";
    }
    function $g(u) {
        return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
    }
    function Fg(u, r) {
        return u.button === 0 && (!r || r === "_self") && !$g(u);
    }
    var Ti = null;
    function Wg() {
        if (Ti === null) try {
            new FormData(document.createElement("form"), 0), Ti = !1;
        } catch  {
            Ti = !0;
        }
        return Ti;
    }
    var Ig = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function sf(u) {
        return u != null && !Ig.has(u) ? (wt(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xi}"`), null) : u;
    }
    function eb(u, r) {
        let c, f, o, s, v;
        if (Zg(u)) {
            let p = u.getAttribute("action");
            f = p ? al(p, r) : null, c = u.getAttribute("method") || Ni, o = sf(u.getAttribute("enctype")) || xi, s = new FormData(u);
        } else if (Xg(u) || Jg(u) && (u.type === "submit" || u.type === "image")) {
            let p = u.form;
            if (p == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let h = u.getAttribute("formaction") || p.getAttribute("action");
            if (f = h ? al(h, r) : null, c = u.getAttribute("formmethod") || p.getAttribute("method") || Ni, o = sf(u.getAttribute("formenctype")) || sf(p.getAttribute("enctype")) || xi, s = new FormData(p, u), !Wg()) {
                let { name: y, type: b, value: _ } = u;
                if (b === "image") {
                    let S = y ? `${y}.` : "";
                    s.append(`${S}x`, "0"), s.append(`${S}y`, "0");
                } else y && s.append(y, _);
            }
        } else {
            if (zi(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            c = Ni, f = null, o = xi, v = u;
        }
        return s && o === "text/plain" && (v = s, s = void 0), {
            action: f,
            method: c.toLowerCase(),
            encType: o,
            formData: s,
            body: v
        };
    }
    function Mf(u, r) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(r);
    }
    async function tb(u, r) {
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
    function lb(u) {
        return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
    }
    async function nb(u, r, c) {
        let f = await Promise.all(u.map(async (o)=>{
            let s = r.routes[o.route.id];
            if (s) {
                let v = await tb(s, c);
                return v.links ? v.links() : [];
            }
            return [];
        }));
        return rb(f.flat(1).filter(lb).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function ap(u, r, c, f, o, s) {
        let v = (h, y)=>c[y] ? h.route.id !== c[y].route.id : !0, p = (h, y)=>c[y].pathname !== h.pathname || c[y].route.path?.endsWith("*") && c[y].params["*"] !== h.params["*"];
        return s === "assets" ? r.filter((h, y)=>v(h, y) || p(h, y)) : s === "data" ? r.filter((h, y)=>{
            let b = f.routes[h.route.id];
            if (!b || !b.hasLoader) return !1;
            if (v(h, y) || p(h, y)) return !0;
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
    function ab(u, r, { includeHydrateFallback: c } = {}) {
        return ub(u.map((f)=>{
            let o = r.routes[f.route.id];
            if (!o) return [];
            let s = [
                o.module
            ];
            return o.clientActionModule && (s = s.concat(o.clientActionModule)), o.clientLoaderModule && (s = s.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (s = s.concat(o.hydrateFallbackModule)), o.imports && (s = s.concat(o.imports)), s;
        }).flat(1));
    }
    function ub(u) {
        return [
            ...new Set(u)
        ];
    }
    function ib(u) {
        let r = {}, c = Object.keys(u).sort();
        for (let f of c)r[f] = u[f];
        return r;
    }
    function rb(u, r) {
        let c = new Set;
        return new Set(r), u.reduce((f, o)=>{
            let s = JSON.stringify(ib(o));
            return c.has(s) || (c.add(s), f.push({
                key: s,
                link: o
            })), f;
        }, []);
    }
    function cb(u, r) {
        let c = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
        return c.pathname === "/" ? c.pathname = "_root.data" : r && al(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
    }
    function am() {
        let u = N.useContext(Zn);
        return Mf(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
    }
    function fb() {
        let u = N.useContext(wi);
        return Mf(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
    }
    var Cf = N.createContext(void 0);
    Cf.displayName = "FrameworkContext";
    function um() {
        let u = N.useContext(Cf);
        return Mf(u, "You must render this element inside a <HydratedRouter> element"), u;
    }
    function ob(u, r) {
        let c = N.useContext(Cf), [f, o] = N.useState(!1), [s, v] = N.useState(!1), { onFocus: p, onBlur: h, onMouseEnter: y, onMouseLeave: b, onTouchStart: _ } = r, S = N.useRef(null);
        N.useEffect(()=>{
            if (u === "render" && v(!0), u === "viewport") {
                let D = (z)=>{
                    z.forEach((j)=>{
                        v(j.isIntersecting);
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
                    v(!0);
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
            o(!1), v(!1);
        };
        return c ? u !== "intent" ? [
            s,
            S,
            {}
        ] : [
            s,
            S,
            {
                onFocus: $a(p, T),
                onBlur: $a(h, O),
                onMouseEnter: $a(y, T),
                onMouseLeave: $a(b, O),
                onTouchStart: $a(_, T)
            }
        ] : [
            !1,
            S,
            {}
        ];
    }
    function $a(u, r) {
        return (c)=>{
            u && u(c), c.defaultPrevented || r(c);
        };
    }
    function sb({ page: u, ...r }) {
        let { router: c } = am(), f = N.useMemo(()=>Xp(c.routes, u, c.basename), [
            c.routes,
            u,
            c.basename
        ]);
        return f ? N.createElement(hb, {
            page: u,
            matches: f,
            ...r
        }) : null;
    }
    function db(u) {
        let { manifest: r, routeModules: c } = um(), [f, o] = N.useState([]);
        return N.useEffect(()=>{
            let s = !1;
            return nb(u, r, c).then((v)=>{
                s || o(v);
            }), ()=>{
                s = !0;
            };
        }, [
            u,
            r,
            c
        ]), f;
    }
    function hb({ page: u, matches: r, ...c }) {
        let f = rn(), { manifest: o, routeModules: s } = um(), { basename: v } = am(), { loaderData: p, matches: h } = fb(), y = N.useMemo(()=>ap(u, r, h, o, f, "data"), [
            u,
            r,
            h,
            o,
            f
        ]), b = N.useMemo(()=>ap(u, r, h, o, f, "assets"), [
            u,
            r,
            h,
            o,
            f
        ]), _ = N.useMemo(()=>{
            if (u === f.pathname + f.search + f.hash) return [];
            let O = new Set, D = !1;
            if (r.forEach((z)=>{
                let j = o.routes[z.route.id];
                !j || !j.hasLoader || (!y.some((k)=>k.route.id === z.route.id) && z.route.id in p && s[z.route.id]?.shouldRevalidate || j.hasClientLoader ? D = !0 : O.add(z.route.id));
            }), O.size === 0) return [];
            let w = cb(u, v);
            return D && O.size > 0 && w.searchParams.set("_routes", r.filter((z)=>O.has(z.route.id)).map((z)=>z.route.id).join(",")), [
                w.pathname + w.search
            ];
        }, [
            v,
            p,
            f,
            o,
            y,
            r,
            u,
            s
        ]), S = N.useMemo(()=>ab(b, o), [
            b,
            o
        ]), T = db(b);
        return N.createElement(N.Fragment, null, _.map((O)=>N.createElement("link", {
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
    function pb(...u) {
        return (r)=>{
            u.forEach((c)=>{
                typeof c == "function" ? c(r) : c != null && (c.current = r);
            });
        };
    }
    var im = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        im && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function mb({ basename: u, children: r, window: c }) {
        let f = N.useRef();
        f.current == null && (f.current = ng({
            window: c,
            v5Compat: !0
        }));
        let o = f.current, [s, v] = N.useState({
            action: o.action,
            location: o.location
        }), p = N.useCallback((h)=>{
            N.startTransition(()=>v(h));
        }, [
            v
        ]);
        return N.useLayoutEffect(()=>o.listen(p), [
            o,
            p
        ]), N.createElement(Yg, {
            basename: u,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: o
        });
    }
    var rm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, eu = N.forwardRef(function({ onClick: r, discover: c = "render", prefetch: f = "none", relative: o, reloadDocument: s, replace: v, state: p, target: h, to: y, preventScrollReset: b, viewTransition: _, ...S }, T) {
        let { basename: O } = N.useContext(Lt), D = typeof y == "string" && rm.test(y), w, z = !1;
        if (typeof y == "string" && D && (w = y, im)) try {
            let ne = new URL(window.location.href), Ce = y.startsWith("//") ? new URL(ne.protocol + y) : new URL(y), je = al(Ce.pathname, O);
            Ce.origin === ne.origin && je != null ? y = je + Ce.search + Ce.hash : z = !0;
        } catch  {
            wt(!1, `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let j = Mg(y, {
            relative: o
        }), [k, V, K] = ob(f, S), W = bb(y, {
            replace: v,
            state: p,
            target: h,
            preventScrollReset: b,
            relative: o,
            viewTransition: _
        });
        function J(ne) {
            r && r(ne), ne.defaultPrevented || W(ne);
        }
        let $ = N.createElement("a", {
            ...S,
            ...K,
            href: w || j,
            onClick: z || s ? r : J,
            ref: pb(T, V),
            target: h,
            "data-discover": !D && c === "render" ? "true" : void 0
        });
        return k && !D ? N.createElement(N.Fragment, null, $, N.createElement(sb, {
            page: j
        })) : $;
    });
    eu.displayName = "Link";
    var yb = N.forwardRef(function({ "aria-current": r = "page", caseSensitive: c = !1, className: f = "", end: o = !1, style: s, to: v, viewTransition: p, children: h, ...y }, b) {
        let _ = uu(v, {
            relative: y.relative
        }), S = rn(), T = N.useContext(wi), { navigator: O, basename: D } = N.useContext(Lt), w = T != null && Tb(_) && p === !0, z = O.encodeLocation ? O.encodeLocation(_).pathname : _.pathname, j = S.pathname, k = T && T.navigation && T.navigation.location ? T.navigation.location.pathname : null;
        c || (j = j.toLowerCase(), k = k ? k.toLowerCase() : null, z = z.toLowerCase()), k && D && (k = al(k, D) || k);
        const V = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
        let K = j === z || !o && j.startsWith(z) && j.charAt(V) === "/", W = k != null && (k === z || !o && k.startsWith(z) && k.charAt(z.length) === "/"), J = {
            isActive: K,
            isPending: W,
            isTransitioning: w
        }, $ = K ? r : void 0, ne;
        typeof f == "function" ? ne = f(J) : ne = [
            f,
            K ? "active" : null,
            W ? "pending" : null,
            w ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let Ce = typeof s == "function" ? s(J) : s;
        return N.createElement(eu, {
            ...y,
            "aria-current": $,
            className: ne,
            ref: b,
            style: Ce,
            to: v,
            viewTransition: p
        }, typeof h == "function" ? h(J) : h);
    });
    yb.displayName = "NavLink";
    var vb = N.forwardRef(({ discover: u = "render", fetcherKey: r, navigate: c, reloadDocument: f, replace: o, state: s, method: v = Ni, action: p, onSubmit: h, relative: y, preventScrollReset: b, viewTransition: _, ...S }, T)=>{
        let O = _b(), D = Rb(p, {
            relative: y
        }), w = v.toLowerCase() === "get" ? "get" : "post", z = typeof p == "string" && rm.test(p), j = (k)=>{
            if (h && h(k), k.defaultPrevented) return;
            k.preventDefault();
            let V = k.nativeEvent.submitter, K = V?.getAttribute("formmethod") || v;
            O(V || k.currentTarget, {
                fetcherKey: r,
                method: K,
                navigate: c,
                replace: o,
                state: s,
                relative: y,
                preventScrollReset: b,
                viewTransition: _
            });
        };
        return N.createElement("form", {
            ref: T,
            method: w,
            action: D,
            onSubmit: f ? h : j,
            ...S,
            "data-discover": !z && u === "render" ? "true" : void 0
        });
    });
    vb.displayName = "Form";
    function gb(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function cm(u) {
        let r = N.useContext(Zn);
        return Me(r, gb(u)), r;
    }
    function bb(u, { target: r, replace: c, state: f, preventScrollReset: o, relative: s, viewTransition: v } = {}) {
        let p = Cg(), h = rn(), y = uu(u, {
            relative: s
        });
        return N.useCallback((b)=>{
            if (Fg(b, r)) {
                b.preventDefault();
                let _ = c !== void 0 ? c : lu(h) === lu(y);
                p(u, {
                    replace: _,
                    state: f,
                    preventScrollReset: o,
                    relative: s,
                    viewTransition: v
                });
            }
        }, [
            h,
            p,
            y,
            c,
            f,
            r,
            u,
            o,
            s,
            v
        ]);
    }
    var Sb = 0, Eb = ()=>`__${String(++Sb)}__`;
    function _b() {
        let { router: u } = cm("useSubmit"), { basename: r } = N.useContext(Lt), c = jg();
        return N.useCallback(async (f, o = {})=>{
            let { action: s, method: v, encType: p, formData: h, body: y } = eb(f, r);
            if (o.navigate === !1) {
                let b = o.fetcherKey || Eb();
                await u.fetch(b, c, o.action || s, {
                    preventScrollReset: o.preventScrollReset,
                    formData: h,
                    body: y,
                    formMethod: o.method || v,
                    formEncType: o.encType || p,
                    flushSync: o.flushSync
                });
            } else await u.navigate(o.action || s, {
                preventScrollReset: o.preventScrollReset,
                formData: h,
                body: y,
                formMethod: o.method || v,
                formEncType: o.encType || p,
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
    function Rb(u, { relative: r } = {}) {
        let { basename: c } = N.useContext(Lt), f = N.useContext(ul);
        Me(f, "useFormAction must be used inside a RouteContext");
        let [o] = f.matches.slice(-1), s = {
            ...uu(u || ".", {
                relative: r
            })
        }, v = rn();
        if (u == null) {
            s.search = v.search;
            let p = new URLSearchParams(s.search), h = p.getAll("index");
            if (h.some((b)=>b === "")) {
                p.delete("index"), h.filter((_)=>_).forEach((_)=>p.append("index", _));
                let b = p.toString();
                s.search = b ? `?${b}` : "";
            }
        }
        return (!u || u === ".") && o.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (s.pathname = s.pathname === "/" ? c : nl([
            c,
            s.pathname
        ])), lu(s);
    }
    function Tb(u, r = {}) {
        let c = N.useContext(Ip);
        Me(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: f } = cm("useViewTransitionState"), o = uu(u, {
            relative: r.relative
        });
        if (!c.isTransitioning) return !1;
        let s = al(c.currentLocation.pathname, f) || c.currentLocation.pathname, v = al(c.nextLocation.pathname, f) || c.nextLocation.pathname;
        return Di(o.pathname, v) != null || Di(o.pathname, s) != null;
    }
    new TextEncoder;
    const Ab = N.createContext(), Ob = ({ children: u })=>{
        const r = (b, _)=>{
            try {
                const S = localStorage.getItem(b);
                if (S == null) return _;
                const T = JSON.parse(S);
                return T !== void 0 ? T : _;
            } catch  {
                return _;
            }
        }, [c, f] = N.useState(()=>r(_e.THEME_KEY, _e.THEME)), [o, s] = N.useState(()=>r(_e.ENABLE_SOUND_KEY, _e.ENABLE_SOUND)), [v, p] = N.useState(()=>r(_e.TIMER_DURATION_KEY, _e.TIMER_DURATION)), [h, y] = N.useState(()=>r(_e.IS_FLIPPED_KEY, _e.IS_FLIPPED));
        return N.useEffect(()=>localStorage.setItem(_e.THEME_KEY, JSON.stringify(c)), [
            c
        ]), N.useEffect(()=>localStorage.setItem(_e.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), N.useEffect(()=>localStorage.setItem(_e.TIMER_DURATION_KEY, JSON.stringify(v)), [
            v
        ]), N.useEffect(()=>localStorage.setItem(_e.IS_FLIPPED_KEY, JSON.stringify(h)), [
            h
        ]), Q.jsx(Ab.Provider, {
            value: {
                theme: c,
                setTheme: f,
                enableSound: o,
                setEnableSound: s,
                timerDuration: v,
                setTimerDuration: p,
                isFlipped: h,
                setIsFlipped: y
            },
            children: u
        });
    };
    Nb = function(u, r = "lite", c = 8e3) {
        const f = N.useRef(null), o = N.useRef(null), s = N.useRef(null), v = N.useRef(null), p = N.useRef(!1), h = N.useRef([]), y = N.useRef(!0), b = N.useRef(!1), _ = N.useRef(!1), S = N.useCallback(()=>{
            if (!(b.current || !f.current)) {
                for(b.current = !0; h.current.length > 0;){
                    const J = h.current.findIndex((ne)=>ne.type === "stop"), $ = J >= 0 ? h.current.splice(J, 1)[0] : h.current.shift();
                    $ && f.current.postMessage($.cmd);
                }
                b.current = !1;
            }
        }, []), T = N.useCallback((J, $)=>{
            h.current.push({
                type: J,
                cmd: $
            }), S();
        }, [
            S
        ]), O = N.useCallback(()=>{
            f.current || (r === "lite" ? f.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : f.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), f.current.postMessage("uci"), console.log("Initializing worker ..."), f.current.onmessage = (J)=>{
                const $ = J.data;
                if (u && u($), typeof $ == "string") {
                    if ($ === "readyok" || $.startsWith("bestmove")) y.current = !0;
                    else if ($.startsWith("info") && $.includes("score")) {
                        const ne = $.match(/score (cp|mate) (-?\d+)/);
                        if (ne) {
                            const Ce = ne[1], je = parseInt(ne[2], 10), Ue = Ce === "cp" ? je / 100 : je > 0 ? 10 : -10;
                            o.current && (o.current(Ue), o.current = null);
                        }
                    }
                }
            }, f.current.onerror = (J)=>{
                console.error("Error with Stockfish worker:", J);
            });
        }, [
            u,
            r
        ]), D = N.useCallback(()=>{
            f.current && f.current.terminate(), r === "lite" ? f.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : f.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), f.current.postMessage("uci"), f.current.onmessage = (J)=>{
                const $ = J.data;
                if (u && u($), typeof $ == "string") {
                    if ($ === "readyok" || $.startsWith("bestmove")) y.current = !0;
                    else if ($.startsWith("info") && $.includes("score")) {
                        const ne = $.match(/score (cp|mate) (-?\d+)/);
                        if (ne) {
                            const Ce = ne[1], je = parseInt(ne[2], 10), Ue = Ce === "cp" ? je / 100 : je > 0 ? 10 : -10;
                            o.current && (o.current(Ue), o.current = null);
                        }
                    }
                }
            }, f.current.onerror = (J)=>{
                console.error("Error with Stockfish worker:", J);
            };
        }, [
            u,
            r
        ]), w = N.useCallback((J)=>{
            f.current && T("normal", J);
        }, []), z = N.useCallback((J)=>{
            J.forEach(($)=>{
                T("normal", `setoption name ${$.name} value ${$.value}`);
            });
        }, [
            w
        ]), j = N.useCallback((J, $ = [])=>{
            let ne = `position fen ${J}`;
            if ($.length > 0) {
                const Ce = $.join(" ");
                ne += ` moves ${Ce}`;
            }
            T("normal", ne);
        }, [
            w
        ]), k = N.useCallback((J)=>{
            f.current && p.current && (T("stop", "stop"), p.current = !1, s.current && (clearTimeout(s.current), s.current = null));
        }, []), V = N.useCallback((J)=>{
            if (!_.current) {
                console.warn("Engine disabled. Search not started.");
                return;
            }
            f.current || O(), clearTimeout(s.current), k("pre startSearch"), v.current && clearTimeout(v.current), v.current = setTimeout(()=>{
                p.current = !0, T("normal", `position fen ${J}`), T("normal", "go infinite"), s.current = setTimeout(()=>{
                    k("startSearch timer expire");
                }, c);
            }, 50);
        }, [
            c,
            k
        ]), K = N.useCallback(()=>{
            f.current && (f.current.terminate(), f.current = null), p.current = !1, y.current = !0, s.current && (clearTimeout(s.current), s.current = null);
        }, []), W = N.useCallback((J)=>{
            J ? console.log("Permission granted: engine allowed to start if needed") : (console.log("Permission revoked: stopping engine"), k("permission revoked"), K());
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
    let fm, xb, Cb, vf, om;
    fm = N.createContext();
    v2 = ()=>N.useContext(fm);
    xb = ({ children: u })=>{
        const r = N.useRef(null), c = N.useCallback((s)=>{
            r.current && r.current(s);
        }, []), f = Nb(c), o = N.useCallback((s)=>{
            r.current = s;
        }, []);
        return Q.jsx(fm.Provider, {
            value: {
                ...f,
                setOnMessage: o
            },
            children: u
        });
    };
    Mb = ()=>{
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
    Cb = nn.memo(({ onSubmit: u })=>{
        const [r, c] = N.useState(!1), [f, o] = N.useState(""), s = ()=>c(!0), v = ()=>{
            c(!1), o("");
        }, p = (y)=>{
            y.target.classList.contains("fen-popup-overlay") && v();
        }, h = (y)=>{
            y.preventDefault(), u(f), v();
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
                    onClick: p,
                    children: Q.jsxs("div", {
                        className: "fen-popup",
                        children: [
                            Q.jsx("h5", {
                                children: "Setup board from FEN "
                            }),
                            Q.jsx("button", {
                                className: "fen-close",
                                onClick: v,
                                children: "×"
                            }),
                            Q.jsxs("form", {
                                onSubmit: h,
                                className: "fen-input-form",
                                children: [
                                    Q.jsx("input", {
                                        type: "text",
                                        value: f,
                                        onChange: (y)=>o(y.target.value),
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
    vf = new Set;
    om = {
        current: ""
    };
    function Db(u) {
        om.current = u, vf.forEach((r)=>r(u));
    }
    function Bb() {
        const [u, r] = N.useState(om.current);
        return N.useEffect(()=>{
            const c = (f)=>r(f);
            return vf.add(c), ()=>{
                vf.delete(c);
            };
        }, []), u;
    }
    function wb({ component: u, message: r }) {
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
    const zb = nn.memo(({ isValid: u, fenErrorMsg: r })=>{
        const c = Bb(), f = ()=>{
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
                }) : Q.jsx(wb, {
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
    }), Ub = (u)=>{
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
        let s = 0, v = 0;
        const p = new Map([]);
        for(let S = 0; S < 8; S++){
            const T = o[S];
            let O = 0;
            for(let D = 0; D < T.length; D++){
                const w = Number(T[D]);
                switch(O += isNaN(w) ? 1 : w, T[D]){
                    case "k":
                        S === 0 && O === 5 && p.set("e8", T[D]), s += 1;
                        break;
                    case "K":
                        S === 7 && O === 5 && p.set("e1", T[D]), v += 1;
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
                        S === 0 && D === 0 ? p.set("a8", T[D]) : S === 0 && D === T.length - 1 && p.set("h8", T[D]);
                        break;
                    case "R":
                        S === 7 && D === 0 ? p.set("a1", T[D]) : S === 7 && D === T.length - 1 && p.set("h1", T[D]);
                        break;
                }
            }
        }
        if (s !== 1) return {
            isValid: !1,
            msg: "There should be exactly one black king."
        };
        if (v !== 1) return {
            isValid: !1,
            msg: "There should be exactly one white king."
        };
        for(let S = 0; S < f.length; S++)switch(f[S]){
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
        const h = c[1], y = Pb(u);
        return new Rf(y).inCheck() ? {
            isValid: !1,
            msg: `${h === "w" ? "white" : "black"} to move but ${h === "w" ? "black" : "white"} was already in check and did not defend king`
        } : {
            isValid: !0,
            msg: ""
        };
    };
    function Pb(u) {
        const r = u.split(" ");
        return r[1] = r[1] === "w" ? "b" : "w", r.join(" ");
    }
    const sm = (u, r)=>{
        u.dataTransfer.setData("text", r);
    }, qb = (u, r, c, f)=>{
        r != null && c == null && f({
            category: _e.BOARD_PIECE,
            id: `${u}-${r.color}-${r.type}`,
            chessPiece: r
        });
    }, Hb = ({ newSelectedItem: u, selectedItem: r, setSelectedItem: c })=>{
        if (r == null) {
            c(u);
            return;
        }
        if (u.id === r.id) {
            c(null);
            return;
        }
        r.category === _e.BOARD_PIECE ? u.category === _e.PALLETE_ITEM && c(u) : r.category === _e.PALLETE_ITEM && u.category === _e.PALLETE_ITEM && c(u);
    }, up = {
        category: _e.PALLETE_ITEM,
        id: _e.ERASER_ID,
        chessPiece: null
    }, kb = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    }, Lb = nn.memo(({ handleDragStart: u, handlePaletteClick: r })=>{
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
        ], o = an((p)=>p.boardeditor.selectedItem), s = Xn(), v = (p)=>{
            s(Af(p));
        };
        return Q.jsxs("div", {
            className: "palette",
            children: [
                f.map((p)=>c.map((h)=>Q.jsx("img", {
                            id: `palette-${p}-${h}`,
                            src: `pieces/svg/${p}_${kb[h]}.svg`,
                            alt: `${p} ${h}`,
                            draggable: !0,
                            "data-type": h,
                            "data-color": p,
                            "data-square": "palette",
                            onClick: ()=>{
                                r({
                                    newSelectedItem: {
                                        category: _e.PALLETE_ITEM,
                                        id: `p-${p}-${h}`,
                                        chessPiece: {
                                            type: h,
                                            color: p
                                        }
                                    },
                                    selectedItem: o,
                                    setSelectedItem: v
                                });
                            },
                            onDragStart: (y)=>u(y, `palette-${p}-${h}`),
                            className: `palette-piece ${o?.id === `p-${p}-${h.toLowerCase()}` ? "selected" : ""}`,
                            style: {
                                order: p == "w" ? c.indexOf(h) : c.indexOf(h) + 7
                            }
                        }, `${p}-${h}`))),
                Q.jsx("img", {
                    "data-square": "palette",
                    src: "assets/eraser.svg",
                    style: {
                        order: 6
                    },
                    onClick: ()=>{
                        r({
                            newSelectedItem: up,
                            selectedItem: o,
                            setSelectedItem: v
                        });
                    },
                    className: `palette-piece eraser ${o?.id === up.id ? "selected" : ""}`
                })
            ]
        });
    }), jb = (u, r)=>{
        let c = "", f = 0;
        for(let o = 0; o < 8; o++){
            const s = u[r[o]];
            s == null && f++, s != null ? (f > 0 && (c += `${f}`), f = 0, c += s.color === "w" ? s.type?.toUpperCase() : s.type) : o == 7 && f > 0 && (c += `${f}`);
        }
        return c;
    }, Qb = ({ board: u, playerToMove: r, halfmoveClock: c = 0, fullmoveNumber: f = 1, whiteKingSide: o, whiteQueenSide: s, blackKingSide: v, blackQueenSide: p })=>{
        const h = "-";
        let y = "";
        const b = (o ? "K" : "") + (s ? "Q" : "") + (v ? "k" : "") + (p ? "q" : ""), _ = Tp.map((S)=>jb(u, S));
        return y += _.join("/"), y += ` ${r} ${b === "" ? "-" : b} ${h} ${c} ${f}`, y;
    }, Kb = (u)=>{
        u.preventDefault();
    }, Gb = ({ squareId: u, squarePiece: r, selectedItem: c, setSelectedItem: f, removePiece: o, putPiece: s, makeMove: v })=>{
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
            const p = c.id.split("-")[0];
            v(p, u), f(null);
        }
    }, Yb = (u, r, c)=>{
        u.preventDefault();
        const f = u.dataTransfer.getData("text"), o = document.getElementById(f);
        if (!o) return;
        const s = o.dataset.square;
        c(s, r);
    }, Vb = nn.memo(({ piece: u, squareId: r, handleDragStart: c, handleBoardPieceClick: f })=>{
        const o = an((h)=>h.boardeditor.selectedItem), s = Xn();
        if (u == null || u === void 0 || !r || r === "" || !u.type) return null;
        const v = (h)=>{
            s(Af(h));
        }, p = {
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
            src: `pieces/svg/${u.color}_${p[u.type]}.svg`,
            alt: `${u.color} ${u.type}`,
            draggable: !0,
            "data-type": u.type,
            "data-color": u.color,
            "data-square": r,
            onDragStart: (h)=>c(h, `${r}-${u.color}-${u.type}`),
            onClick: ()=>f(r, u, o, v)
        }, r);
    }), Xb = (u)=>{
        const r = u[0].charCodeAt(0) - 97, c = u[1].charCodeAt(0) - 49;
        return (r + c) % 2 === 0 ? "dark" : "light";
    }, Zb = nn.memo(({ showRankLabel: u, showFileLabel: r, squareId: c, squarePiece: f, handleSquareClick: o, handleDrop: s, allowDrop: v, handleDragStart: p, handleBoardPieceClick: h })=>{
        const y = an((D)=>D.boardeditor.selectedItem), b = Xn(), _ = (D)=>{
            b(Af(D));
        }, S = (D)=>{
            b(Kv(D));
        }, T = (D, w)=>{
            b(Qv(D, w));
        }, O = (D, w)=>{
            b(Gv(D, w));
        };
        return Q.jsxs("div", {
            id: c,
            className: `square ${Xb(c)}`,
            onDragOver: v,
            onClick: ()=>o({
                    squareId: c,
                    squarePiece: f,
                    selectedItem: y,
                    setSelectedItem: _,
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
                f && Q.jsx(Vb, {
                    piece: f,
                    squareId: c,
                    handleDragStart: p,
                    handleBoardPieceClick: h
                })
            ]
        });
    }), Jb = nn.memo(({ isFlipped: u })=>{
        const r = u ? Ev : Tp, c = an((f)=>f.boardeditor.board);
        return Q.jsx("div", {
            id: "chessboard",
            children: r.map((f, o)=>f.map((s, v)=>Q.jsx(Zb, {
                        showRankLabel: v === 0,
                        showFileLabel: o === 7,
                        squareId: s,
                        squarePiece: c[s],
                        handleSquareClick: Gb,
                        handleDrop: Yb,
                        allowDrop: Kb,
                        handleDragStart: sm,
                        handleBoardPieceClick: qb
                    }, s)))
        });
    }), $b = ({ labelText: u, toggle: r, handleToggle: c })=>Q.jsxs("div", {
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
        }), dm = (u)=>u.boardeditor, Fb = Sf([
        dm
    ], (u)=>({
            board: u.board,
            isFlipped: u.isFlipped,
            playerToMove: u.playerToMove,
            castlingFlags: u.castlingFlags
        })), hm = Sf([
        dm
    ], (u)=>({
            playerToMove: u.playerToMove,
            castlingFlags: u.castlingFlags
        }));
    function Wb() {
        const { playerToMove: u, castlingFlags: r } = an(hm), c = Xn();
        return Q.jsxs("div", {
            className: "move-toggle",
            children: [
                Q.jsx("button", {
                    className: `move-option ${u === "w" ? "active" : ""}`,
                    onClick: ()=>c($h("w")),
                    children: "White"
                }),
                Q.jsx("button", {
                    className: `move-option ${u === "b" ? "active" : ""}`,
                    onClick: ()=>c($h("b")),
                    children: "Black"
                })
            ]
        });
    }
    const Ib = nn.memo(({ messages: u, isValid: r })=>Q.jsxs("div", {
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
        })), e2 = ({ isValidFen: u, fenErrorMsg: r })=>{
        const { playerToMove: c, castlingFlags: f } = an(hm), o = Xn(), s = [
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
                        Q.jsx(Wb, {})
                    ]
                }),
                s.map(({ flag: v, label: p, state: h })=>Q.jsx($b, {
                        labelText: p,
                        toggle: h,
                        handleToggle: ()=>{
                            o(Yv(v));
                        }
                    }, p)),
                Q.jsx(Ib, {
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
    }, ip = ()=>{
        const { board: u, isFlipped: r, playerToMove: c, castlingFlags: f } = an(Fb), [o, s] = N.useState(!1), [v, p] = N.useState(""), h = Xn();
        N.useEffect(()=>{
            b();
        }, []);
        const y = ()=>{
            h(Jh()), h(kv());
        }, b = ()=>{
            h(Jh()), h(Hv());
        }, _ = N.useCallback((T)=>{
            h(jv(T));
        }, [
            h
        ]), S = N.useCallback((T = 0, O = 1)=>Qb({
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
            const T = S(), { isValid: O, msg: D } = Ub(T);
            s((w)=>w !== O ? O : w), p((w)=>w !== D ? D : w), Db(T);
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
                                onClick: y,
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
                                    h(Lv());
                                },
                                className: "action-button",
                                children: "Flip"
                            }),
                            Q.jsx(Cb, {
                                onSubmit: _
                            }),
                            Q.jsx(Mb, {})
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
                                Q.jsx(zb, {
                                    isValid: o,
                                    fenErrorMsg: v
                                }),
                                Q.jsxs("div", {
                                    className: "chessboard-container",
                                    children: [
                                        Q.jsx(Jb, {
                                            isFlipped: r
                                        }),
                                        Q.jsx(Lb, {
                                            handleDragStart: sm,
                                            handlePaletteClick: Hb
                                        }),
                                        Q.jsx(e2, {
                                            isValidFen: o,
                                            fenErrorMsg: v
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, t2 = N.lazy(()=>Vp(()=>import("./ChessGame-DFsbpwZl.js"), __vite__mapDeps([0,1,2,3]))), l2 = N.lazy(()=>Vp(()=>import("./AnalysisGame-BlAFyonk.js"), __vite__mapDeps([4,1,2,5]))), n2 = ()=>Q.jsx(Ob, {
            children: Q.jsxs(mb, {
                children: [
                    Q.jsxs("nav", {
                        className: "routes",
                        children: [
                            Q.jsx(eu, {
                                to: "/boardeditor",
                                className: "action-button no-decoration",
                                children: "Chess Position Editor"
                            }),
                            Q.jsx(eu, {
                                to: "/analysis",
                                className: "action-button no-decoration",
                                children: "Analyse Game"
                            }),
                            Q.jsx(eu, {
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
                        children: Q.jsxs(Vg, {
                            children: [
                                Q.jsx(Ia, {
                                    path: "/analysis",
                                    element: Q.jsx(xb, {
                                        children: Q.jsx(l2, {})
                                    })
                                }),
                                Q.jsx(Ia, {
                                    path: "/gameplay",
                                    element: Q.jsx(t2, {})
                                }),
                                Q.jsx(Ia, {
                                    path: "/boardeditor",
                                    element: Q.jsx(ip, {})
                                }),
                                Q.jsx(Ia, {
                                    path: "*",
                                    element: Q.jsx(ip, {})
                                }),
                                " "
                            ]
                        })
                    })
                ]
            })
        });
    function a2() {
        [
            "theme",
            "enableSound",
            "timerDuration",
            "isFlipped",
            "persist:root"
        ].forEach((r)=>{
            try {
                const c = localStorage.getItem(r);
                c != null && JSON.parse(c);
            } catch  {
                localStorage.removeItem(r);
            }
        });
    }
    a2();
    V1.createRoot(document.getElementById("root")).render(Q.jsx(fy, {
        store: Yp,
        children: Q.jsx(n2, {})
    }));
})();
export { Rf as C, Mb as D, nn as R, an as a, i2 as b, _e as c, s2 as d, p2 as e, c2 as f, y2 as g, Nb as h, v2 as i, Q as j, P1 as k, m2 as l, u2 as m, h2 as n, Yp as o, d2 as p, f2 as q, N as r, r2 as s, o2 as t, Xn as u, __tla };
