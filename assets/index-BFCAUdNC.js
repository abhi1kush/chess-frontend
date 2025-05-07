const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChessGame-BtyjUWQV.js","assets/Settings-Dau-81p3.js","assets/Settings-DS8xGtQf.css","assets/ChessGame-DhAK7FyC.css","assets/AnalysisGame-CjGN4xX0.js","assets/AnalysisGame-Tf-ih67V.css"])))=>i.map(i=>d[i]);
let Rf, Tb, nn, an, Fb, _e, l2, u2, Ib, r2, Eb, c2, Q, op, i2, $b, a2, Xp, n2, e2, O, Wb, t2, Xn;
let __tla = (async ()=>{
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);
        new MutationObserver((o)=>{
            for (const s of o)if (s.type === "childList") for (const y of s.addedNodes)y.tagName === "LINK" && y.rel === "modulepreload" && f(y);
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
    op = function(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
    };
    var Wc = {
        exports: {}
    }, Va = {};
    var Ah;
    function q0() {
        if (Ah) return Va;
        Ah = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
        function c(f, o, s) {
            var y = null;
            if (s !== void 0 && (y = "" + s), o.key !== void 0 && (y = "" + o.key), "key" in o) {
                s = {};
                for(var p in o)p !== "key" && (s[p] = o[p]);
            } else s = o;
            return o = s.ref, {
                $$typeof: u,
                type: f,
                key: y,
                ref: o !== void 0 ? o : null,
                props: s
            };
        }
        return Va.Fragment = r, Va.jsx = c, Va.jsxs = c, Va;
    }
    var Oh;
    function H0() {
        return Oh || (Oh = 1, Wc.exports = q0()), Wc.exports;
    }
    let Ic, re;
    Q = H0();
    Ic = {
        exports: {}
    };
    re = {};
    var Nh;
    function k0() {
        if (Nh) return re;
        Nh = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), y = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), T = Symbol.iterator;
        function b(E) {
            return E === null || typeof E != "object" ? null : (E = T && E[T] || E["@@iterator"], typeof E == "function" ? E : null);
        }
        var A = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, N = Object.assign, B = {};
        function w(E, k, X) {
            this.props = E, this.context = k, this.refs = B, this.updater = X || A;
        }
        w.prototype.isReactComponent = {}, w.prototype.setState = function(E, k) {
            if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, E, k, "setState");
        }, w.prototype.forceUpdate = function(E) {
            this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        };
        function U() {}
        U.prototype = w.prototype;
        function j(E, k, X) {
            this.props = E, this.context = k, this.refs = B, this.updater = X || A;
        }
        var L = j.prototype = new U;
        L.constructor = j, N(L, w.prototype), L.isPureReactComponent = !0;
        var V = Array.isArray, K = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, W = Object.prototype.hasOwnProperty;
        function J(E, k, X, G, I, pe) {
            return X = pe.ref, {
                $$typeof: u,
                type: E,
                key: k,
                ref: X !== void 0 ? X : null,
                props: pe
            };
        }
        function $(E, k) {
            return J(E.type, k, void 0, void 0, void 0, E.props);
        }
        function ne(E) {
            return typeof E == "object" && E !== null && E.$$typeof === u;
        }
        function Ce(E) {
            var k = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + E.replace(/[=:]/g, function(X) {
                return k[X];
            });
        }
        var je = /\/+/g;
        function ze(E, k) {
            return typeof E == "object" && E !== null && E.key != null ? Ce("" + E.key) : k.toString(36);
        }
        function zl() {}
        function Pl(E) {
            switch(E.status){
                case "fulfilled":
                    return E.value;
                case "rejected":
                    throw E.reason;
                default:
                    switch(typeof E.status == "string" ? E.then(zl, zl) : (E.status = "pending", E.then(function(k) {
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
        function We(E, k, X, G, I) {
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
                        case S:
                            return ie = E._init, We(ie(E._payload), k, X, G, I);
                    }
            }
            if (ie) return I = I(E), ie = G === "" ? "." + ze(E, 0) : G, V(I) ? (X = "", ie != null && (X = ie.replace(je, "$&/") + "/"), We(I, k, X, "", function(il) {
                return il;
            })) : I != null && (ne(I) && (I = $(I, X + (I.key == null || E && E.key === I.key ? "" : ("" + I.key).replace(je, "$&/") + "/") + ie)), k.push(I)), 1;
            ie = 0;
            var ot = G === "" ? "." : G + ":";
            if (V(E)) for(var Oe = 0; Oe < E.length; Oe++)G = E[Oe], pe = ot + ze(G, Oe), ie += We(G, k, X, pe, I);
            else if (Oe = b(E), typeof Oe == "function") for(E = Oe.call(E), Oe = 0; !(G = E.next()).done;)G = G.value, pe = ot + ze(G, Oe++), ie += We(G, k, X, pe, I);
            else if (pe === "object") {
                if (typeof E.then == "function") return We(Pl(E), k, X, G, I);
                throw k = String(E), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ie;
        }
        function P(E, k, X) {
            if (E == null) return E;
            var G = [], I = 0;
            return We(E, G, "", "", function(pe) {
                return k.call(X, pe, I++);
            }), G;
        }
        function Y(E) {
            if (E._status === -1) {
                var k = E._result;
                k = k(), k.then(function(X) {
                    (E._status === 0 || E._status === -1) && (E._status = 1, E._result = X);
                }, function(X) {
                    (E._status === 0 || E._status === -1) && (E._status = 2, E._result = X);
                }), E._status === -1 && (E._status = 0, E._result = k);
            }
            if (E._status === 1) return E._result.default;
            throw E._result;
        }
        var le = typeof reportError == "function" ? reportError : function(E) {
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
        function Te() {}
        return re.Children = {
            map: P,
            forEach: function(E, k, X) {
                P(E, function() {
                    k.apply(this, arguments);
                }, X);
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
        }, re.cloneElement = function(E, k, X) {
            if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
            var G = N({}, E.props), I = E.key, pe = void 0;
            if (k != null) for(ie in k.ref !== void 0 && (pe = void 0), k.key !== void 0 && (I = "" + k.key), k)!W.call(k, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && k.ref === void 0 || (G[ie] = k[ie]);
            var ie = arguments.length - 2;
            if (ie === 1) G.children = X;
            else if (1 < ie) {
                for(var ot = Array(ie), Oe = 0; Oe < ie; Oe++)ot[Oe] = arguments[Oe + 2];
                G.children = ot;
            }
            return J(E.type, I, void 0, void 0, pe, G);
        }, re.createContext = function(E) {
            return E = {
                $$typeof: y,
                _currentValue: E,
                _currentValue2: E,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, E.Provider = E, E.Consumer = {
                $$typeof: s,
                _context: E
            }, E;
        }, re.createElement = function(E, k, X) {
            var G, I = {}, pe = null;
            if (k != null) for(G in k.key !== void 0 && (pe = "" + k.key), k)W.call(k, G) && G !== "key" && G !== "__self" && G !== "__source" && (I[G] = k[G]);
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
                $$typeof: S,
                _payload: {
                    _status: -1,
                    _result: E
                },
                _init: Y
            };
        }, re.memo = function(E, k) {
            return {
                $$typeof: v,
                type: E,
                compare: k === void 0 ? null : k
            };
        }, re.startTransition = function(E) {
            var k = K.T, X = {};
            K.T = X;
            try {
                var G = E(), I = K.S;
                I !== null && I(X, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(Te, le);
            } catch (pe) {
                le(pe);
            } finally{
                K.T = k;
            }
        }, re.unstable_useCacheRefresh = function() {
            return K.H.useCacheRefresh();
        }, re.use = function(E) {
            return K.H.use(E);
        }, re.useActionState = function(E, k, X) {
            return K.H.useActionState(E, k, X);
        }, re.useCallback = function(E, k) {
            return K.H.useCallback(E, k);
        }, re.useContext = function(E) {
            return K.H.useContext(E);
        }, re.useDebugValue = function() {}, re.useDeferredValue = function(E, k) {
            return K.H.useDeferredValue(E, k);
        }, re.useEffect = function(E, k, X) {
            var G = K.H;
            if (typeof X == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return G.useEffect(E, k);
        }, re.useId = function() {
            return K.H.useId();
        }, re.useImperativeHandle = function(E, k, X) {
            return K.H.useImperativeHandle(E, k, X);
        }, re.useInsertionEffect = function(E, k) {
            return K.H.useInsertionEffect(E, k);
        }, re.useLayoutEffect = function(E, k) {
            return K.H.useLayoutEffect(E, k);
        }, re.useMemo = function(E, k) {
            return K.H.useMemo(E, k);
        }, re.useOptimistic = function(E, k) {
            return K.H.useOptimistic(E, k);
        }, re.useReducer = function(E, k, X) {
            return K.H.useReducer(E, k, X);
        }, re.useRef = function(E) {
            return K.H.useRef(E);
        }, re.useState = function(E) {
            return K.H.useState(E);
        }, re.useSyncExternalStore = function(E, k, X) {
            return K.H.useSyncExternalStore(E, k, X);
        }, re.useTransition = function() {
            return K.H.useTransition();
        }, re.version = "19.1.0", re;
    }
    var xh;
    function wi() {
        return xh || (xh = 1, Ic.exports = k0()), Ic.exports;
    }
    O = wi();
    nn = op(O);
    var ef = {
        exports: {}
    }, Xa = {}, tf = {
        exports: {}
    }, lf = {};
    var Mh;
    function L0() {
        return Mh || (Mh = 1, function(u) {
            function r(P, Y) {
                var le = P.length;
                P.push(Y);
                e: for(; 0 < le;){
                    var Te = le - 1 >>> 1, E = P[Te];
                    if (0 < o(E, Y)) P[Te] = Y, P[le] = E, le = Te;
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
                    e: for(var Te = 0, E = P.length, k = E >>> 1; Te < k;){
                        var X = 2 * (Te + 1) - 1, G = P[X], I = X + 1, pe = P[I];
                        if (0 > o(G, le)) I < E && 0 > o(pe, G) ? (P[Te] = pe, P[I] = le, Te = I) : (P[Te] = G, P[X] = le, Te = X);
                        else if (I < E && 0 > o(pe, le)) P[Te] = pe, P[I] = le, Te = I;
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
                var y = Date, p = y.now();
                u.unstable_now = function() {
                    return y.now() - p;
                };
            }
            var h = [], v = [], S = 1, T = null, b = 3, A = !1, N = !1, B = !1, w = !1, U = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
            function V(P) {
                for(var Y = c(v); Y !== null;){
                    if (Y.callback === null) f(v);
                    else if (Y.startTime <= P) f(v), Y.sortIndex = Y.expirationTime, r(h, Y);
                    else break;
                    Y = c(v);
                }
            }
            function K(P) {
                if (B = !1, V(P), !N) if (c(h) !== null) N = !0, W || (W = !0, ze());
                else {
                    var Y = c(v);
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
                            N = !1, B && (B = !1, j(J), J = -1), A = !0;
                            var le = b;
                            try {
                                t: {
                                    for(V(P), T = c(h); T !== null && !(T.expirationTime > P && Ce());){
                                        var Te = T.callback;
                                        if (typeof Te == "function") {
                                            T.callback = null, b = T.priorityLevel;
                                            var E = Te(T.expirationTime <= P);
                                            if (P = u.unstable_now(), typeof E == "function") {
                                                T.callback = E, V(P), Y = !0;
                                                break t;
                                            }
                                            T === c(h) && f(h), V(P);
                                        } else f(h);
                                        T = c(h);
                                    }
                                    if (T !== null) Y = !0;
                                    else {
                                        var k = c(v);
                                        k !== null && We(K, k.startTime - P), Y = !1;
                                    }
                                }
                                break e;
                            } finally{
                                T = null, b = le, A = !1;
                            }
                            Y = void 0;
                        }
                    } finally{
                        Y ? ze() : W = !1;
                    }
                }
            }
            var ze;
            if (typeof L == "function") ze = function() {
                L(je);
            };
            else if (typeof MessageChannel < "u") {
                var zl = new MessageChannel, Pl = zl.port2;
                zl.port1.onmessage = je, ze = function() {
                    Pl.postMessage(null);
                };
            } else ze = function() {
                U(je, 0);
            };
            function We(P, Y) {
                J = U(function() {
                    P(u.unstable_now());
                }, Y);
            }
            u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(P) {
                P.callback = null;
            }, u.unstable_forceFrameRate = function(P) {
                0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < P ? Math.floor(1e3 / P) : 5;
            }, u.unstable_getCurrentPriorityLevel = function() {
                return b;
            }, u.unstable_next = function(P) {
                switch(b){
                    case 1:
                    case 2:
                    case 3:
                        var Y = 3;
                        break;
                    default:
                        Y = b;
                }
                var le = b;
                b = Y;
                try {
                    return P();
                } finally{
                    b = le;
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
                var le = b;
                b = P;
                try {
                    return Y();
                } finally{
                    b = le;
                }
            }, u.unstable_scheduleCallback = function(P, Y, le) {
                var Te = u.unstable_now();
                switch(typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? Te + le : Te) : le = Te, P){
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
                    id: S++,
                    callback: Y,
                    priorityLevel: P,
                    startTime: le,
                    expirationTime: E,
                    sortIndex: -1
                }, le > Te ? (P.sortIndex = le, r(v, P), c(h) === null && P === c(v) && (B ? (j(J), J = -1) : B = !0, We(K, le - Te))) : (P.sortIndex = E, r(h, P), N || A || (N = !0, W || (W = !0, ze()))), P;
            }, u.unstable_shouldYield = Ce, u.unstable_wrapCallback = function(P) {
                var Y = b;
                return function() {
                    var le = b;
                    b = Y;
                    try {
                        return P.apply(this, arguments);
                    } finally{
                        b = le;
                    }
                };
            };
        }(lf)), lf;
    }
    var Ch;
    function j0() {
        return Ch || (Ch = 1, tf.exports = L0()), tf.exports;
    }
    var nf = {
        exports: {}
    }, tt = {};
    var Dh;
    function Q0() {
        if (Dh) return tt;
        Dh = 1;
        var u = wi();
        function r(h) {
            var v = "https://react.dev/errors/" + h;
            if (1 < arguments.length) {
                v += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var S = 2; S < arguments.length; S++)v += "&args[]=" + encodeURIComponent(arguments[S]);
            }
            return "Minified React error #" + h + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
        function s(h, v, S) {
            var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: T == null ? null : "" + T,
                children: h,
                containerInfo: v,
                implementation: S
            };
        }
        var y = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function p(h, v) {
            if (h === "font") return "";
            if (typeof v == "string") return v === "use-credentials" ? v : "";
        }
        return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, tt.createPortal = function(h, v) {
            var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(r(299));
            return s(h, v, null, S);
        }, tt.flushSync = function(h) {
            var v = y.T, S = f.p;
            try {
                if (y.T = null, f.p = 2, h) return h();
            } finally{
                y.T = v, f.p = S, f.d.f();
            }
        }, tt.preconnect = function(h, v) {
            typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, f.d.C(h, v));
        }, tt.prefetchDNS = function(h) {
            typeof h == "string" && f.d.D(h);
        }, tt.preinit = function(h, v) {
            if (typeof h == "string" && v && typeof v.as == "string") {
                var S = v.as, T = p(S, v.crossOrigin), b = typeof v.integrity == "string" ? v.integrity : void 0, A = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
                S === "style" ? f.d.S(h, typeof v.precedence == "string" ? v.precedence : void 0, {
                    crossOrigin: T,
                    integrity: b,
                    fetchPriority: A
                }) : S === "script" && f.d.X(h, {
                    crossOrigin: T,
                    integrity: b,
                    fetchPriority: A,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0
                });
            }
        }, tt.preinitModule = function(h, v) {
            if (typeof h == "string") if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var S = p(v.as, v.crossOrigin);
                    f.d.M(h, {
                        crossOrigin: S,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    });
                }
            } else v == null && f.d.M(h);
        }, tt.preload = function(h, v) {
            if (typeof h == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
                var S = v.as, T = p(S, v.crossOrigin);
                f.d.L(h, S, {
                    crossOrigin: T,
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
                var S = p(v.as, v.crossOrigin);
                f.d.m(h, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: S,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                });
            } else f.d.m(h);
        }, tt.requestFormReset = function(h) {
            f.d.r(h);
        }, tt.unstable_batchedUpdates = function(h, v) {
            return h(v);
        }, tt.useFormState = function(h, v, S) {
            return y.H.useFormState(h, v, S);
        }, tt.useFormStatus = function() {
            return y.H.useHostTransitionStatus();
        }, tt.version = "19.1.0", tt;
    }
    var Bh;
    function K0() {
        if (Bh) return nf.exports;
        Bh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), nf.exports = Q0(), nf.exports;
    }
    var Uh;
    function G0() {
        if (Uh) return Xa;
        Uh = 1;
        var u = j0(), r = wi(), c = K0();
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
        function y(e) {
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
        function v(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e;
            for(e = e.child; e !== null;){
                if (t = v(e), t !== null) return t;
                e = e.sibling;
            }
            return null;
        }
        var S = Object.assign, T = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), j = Symbol.for("react.consumer"), L = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), Ce = Symbol.for("react.memo_cache_sentinel"), je = Symbol.iterator;
        function ze(e) {
            return e === null || typeof e != "object" ? null : (e = je && e[je] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var zl = Symbol.for("react.client.reference");
        function Pl(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === zl ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case N:
                    return "Fragment";
                case w:
                    return "Profiler";
                case B:
                    return "StrictMode";
                case K:
                    return "Suspense";
                case W:
                    return "SuspenseList";
                case ne:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case A:
                    return "Portal";
                case L:
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
        }, Te = [], E = -1;
        function k(e) {
            return {
                current: e
            };
        }
        function X(e) {
            0 > E || (e.current = Te[E], Te[E] = null, E--);
        }
        function G(e, t) {
            E++, Te[E] = e.current, e.current = t;
        }
        var I = k(null), pe = k(null), ie = k(null), ot = k(null);
        function Oe(e, t) {
            switch(G(ie, t), G(pe, e), G(I, null), t.nodeType){
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
            X(I), G(I, e);
        }
        function il() {
            X(I), X(pe), X(ie);
        }
        function qi(e) {
            e.memoizedState !== null && G(ot, e);
            var t = I.current, l = eh(t, e.type);
            t !== l && (G(pe, e), G(I, l));
        }
        function ru(e) {
            pe.current === e && (X(I), X(pe)), ot.current === e && (X(ot), ja._currentValue = le);
        }
        var Hi = Object.prototype.hasOwnProperty, ki = u.unstable_scheduleCallback, Li = u.unstable_cancelCallback, mm = u.unstable_shouldYield, ym = u.unstable_requestPaint, wt = u.unstable_now, vm = u.unstable_getCurrentPriorityLevel, Bf = u.unstable_ImmediatePriority, Uf = u.unstable_UserBlockingPriority, cu = u.unstable_NormalPriority, gm = u.unstable_LowPriority, wf = u.unstable_IdlePriority, bm = u.log, Sm = u.unstable_setDisableYieldValue, Jn = null, st = null;
        function rl(e) {
            if (typeof bm == "function" && Sm(e), st && typeof st.setStrictMode == "function") try {
                st.setStrictMode(Jn, e);
            } catch  {}
        }
        var dt = Math.clz32 ? Math.clz32 : Tm, Em = Math.log, _m = Math.LN2;
        function Tm(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Em(e) / _m | 0) | 0;
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
            var e = fu;
            return fu <<= 1, (fu & 4194048) === 0 && (fu = 256), e;
        }
        function Pf() {
            var e = ou;
            return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
        }
        function ji(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Fn(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Am(e, t, l, n, a, i) {
            var d = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var m = e.entanglements, g = e.expirationTimes, M = e.hiddenUpdates;
            for(l = d & ~l; 0 < l;){
                var z = 31 - dt(l), H = 1 << z;
                m[z] = 0, g[z] = -1;
                var C = M[z];
                if (C !== null) for(M[z] = null, z = 0; z < C.length; z++){
                    var D = C[z];
                    D !== null && (D.lane &= -536870913);
                }
                l &= ~H;
            }
            n !== 0 && qf(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(d & ~t));
        }
        function qf(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var n = 31 - dt(t);
            e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
        }
        function Hf(e, t) {
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
        function kf() {
            var e = Y.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : bh(e.type));
        }
        function Om(e, t) {
            var l = Y.p;
            try {
                return Y.p = e, t();
            } finally{
                Y.p = l;
            }
        }
        var cl = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + cl, at = "__reactProps$" + cl, cn = "__reactContainer$" + cl, Gi = "__reactEvents$" + cl, Nm = "__reactListeners$" + cl, xm = "__reactHandles$" + cl, Lf = "__reactResources$" + cl, Wn = "__reactMarker$" + cl;
        function Yi(e) {
            delete e[Ie], delete e[at], delete e[Gi], delete e[Nm], delete e[xm];
        }
        function fn(e) {
            var t = e[Ie];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[cn] || l[Ie]) {
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
            var t = e[Lf];
            return t || (t = e[Lf] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Qe(e) {
            e[Wn] = !0;
        }
        var jf = new Set, Qf = {};
        function Hl(e, t) {
            dn(e, t), dn(e + "Capture", t);
        }
        function dn(e, t) {
            for(Qf[e] = t, e = 0; e < t.length; e++)jf.add(t[e]);
        }
        var Mm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Kf = {}, Gf = {};
        function Cm(e) {
            return Hi.call(Gf, e) ? !0 : Hi.call(Kf, e) ? !1 : Mm.test(e) ? Gf[e] = !0 : (Kf[e] = !0, !1);
        }
        function du(e, t, l) {
            if (Cm(t)) if (l === null) e.removeAttribute(t);
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
        var Vi, Yf;
        function hn(e) {
            if (Vi === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Vi = t && t[1] || "", Yf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Vi + e + Yf;
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
                                    } catch (D) {
                                        var C = D;
                                    }
                                    Reflect.construct(e, [], H);
                                } else {
                                    try {
                                        H.call();
                                    } catch (D) {
                                        C = D;
                                    }
                                    e.call(H.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (D) {
                                    C = D;
                                }
                                (H = e()) && typeof H.catch == "function" && H.catch(function() {});
                            }
                        } catch (D) {
                            if (D && C && typeof D.stack == "string") return [
                                D.stack,
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
                            var z = `
` + g[n].replace(" at new ", " at ");
                            return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
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
        function Dm(e) {
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
        function Vf(e) {
            try {
                var t = "";
                do t += Dm(e), e = e.return;
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
        function Xf(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Bm(e) {
            var t = Xf(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
            e._valueTracker || (e._valueTracker = Bm(e));
        }
        function Zf(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), n = "";
            return e && (n = Xf(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
        }
        function mu(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var Um = /[\n"\\]/g;
        function Et(e) {
            return e.replace(Um, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Ji(e, t, l, n, a, i, d, m) {
            e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? $i(e, d, St(t)) : l != null ? $i(e, d, St(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + St(m) : e.removeAttribute("name");
        }
        function Jf(e, t, l, n, a, i, d, m) {
            if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
                if (!(i !== "submit" && i !== "reset" || t != null)) return;
                l = l != null ? "" + St(l) : "", t = t != null ? "" + St(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
            }
            n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = m ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d);
        }
        function $i(e, t, l) {
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
        function $f(e, t, l) {
            if (t != null && (t = "" + St(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + St(l) : "";
        }
        function Ff(e, t, l, n) {
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
        function Wf(e, t, l) {
            var n = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || wm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function If(e, t, l) {
            if (t != null && typeof t != "object") throw Error(f(62));
            if (e = e.style, l != null) {
                for(var n in l)!l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
                for(var a in t)n = t[a], t.hasOwnProperty(a) && l[a] !== n && Wf(e, a, n);
            } else for(var i in t)t.hasOwnProperty(i) && Wf(e, i, t[i]);
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
        ]), Pm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function yu(e) {
            return Pm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Wi = null;
        function Ii(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var yn = null, vn = null;
        function eo(e) {
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
                            for(t = 0; t < l.length; t++)n = l[t], n.form === e.form && Zf(n);
                        }
                        break e;
                    case "textarea":
                        $f(e, l.value, l.defaultValue);
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
        var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tr = !1;
        if (Qt) try {
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
            var e, t = lr, l = t.length, n, a = "value" in fl ? fl.value : fl.textContent, i = a.length;
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
        function no() {
            return !1;
        }
        function ut(e) {
            function t(l, n, a, i, d) {
                this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = d, this.currentTarget = null;
                for(var m in e)e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(i) : i[m]);
                return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bu : no, this.isPropagationStopped = no, this;
            }
            return S(t.prototype, {
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
        }, Su = ut(kl), la = S({}, kl, {
            view: 0,
            detail: 0
        }), qm = ut(la), nr, ar, na, Eu = S({}, la, {
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
        }), ao = ut(Eu), Hm = S({}, Eu, {
            dataTransfer: 0
        }), km = ut(Hm), Lm = S({}, la, {
            relatedTarget: 0
        }), ur = ut(Lm), jm = S({}, kl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Qm = ut(jm), Km = S({}, kl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Gm = ut(Km), Ym = S({}, kl, {
            data: 0
        }), uo = ut(Ym), Vm = {
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
        }, Xm = {
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
        }, Zm = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function Jm(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Zm[e]) ? !!t[e] : !1;
        }
        function ir() {
            return Jm;
        }
        var $m = S({}, la, {
            key: function(e) {
                if (e.key) {
                    var t = Vm[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = gu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xm[e.keyCode] || "Unidentified" : "";
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
        }), Fm = ut($m), Wm = S({}, Eu, {
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
        }), io = ut(Wm), Im = S({}, la, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ir
        }), e1 = ut(Im), t1 = S({}, kl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), l1 = ut(t1), n1 = S({}, Eu, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), a1 = ut(n1), u1 = S({}, kl, {
            newState: 0,
            oldState: 0
        }), i1 = ut(u1), r1 = [
            9,
            13,
            27,
            32
        ], rr = Qt && "CompositionEvent" in window, aa = null;
        Qt && "documentMode" in document && (aa = document.documentMode);
        var c1 = Qt && "TextEvent" in window && !aa, ro = Qt && (!rr || aa && 8 < aa && 11 >= aa), co = " ", fo = !1;
        function oo(e, t) {
            switch(e){
                case "keyup":
                    return r1.indexOf(t.keyCode) !== -1;
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
        function so(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var gn = !1;
        function f1(e, t) {
            switch(e){
                case "compositionend":
                    return so(t);
                case "keypress":
                    return t.which !== 32 ? null : (fo = !0, co);
                case "textInput":
                    return e = t.data, e === co && fo ? null : e;
                default:
                    return null;
            }
        }
        function o1(e, t) {
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
        var s1 = {
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
            return t === "input" ? !!s1[e.type] : t === "textarea";
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
        function d1(e) {
            Zd(e, 0);
        }
        function _u(e) {
            var t = In(e);
            if (Zf(t)) return e;
        }
        function mo(e, t) {
            if (e === "change") return t;
        }
        var yo = !1;
        if (Qt) {
            var cr;
            if (Qt) {
                var fr = "oninput" in document;
                if (!fr) {
                    var vo = document.createElement("div");
                    vo.setAttribute("oninput", "return;"), fr = typeof vo.oninput == "function";
                }
                cr = fr;
            } else cr = !1;
            yo = cr && (!document.documentMode || 9 < document.documentMode);
        }
        function go() {
            ua && (ua.detachEvent("onpropertychange", bo), ia = ua = null);
        }
        function bo(e) {
            if (e.propertyName === "value" && _u(ia)) {
                var t = [];
                po(t, ia, e, Ii(e)), to(d1, t);
            }
        }
        function h1(e, t, l) {
            e === "focusin" ? (go(), ua = t, ia = l, ua.attachEvent("onpropertychange", bo)) : e === "focusout" && go();
        }
        function p1(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return _u(ia);
        }
        function m1(e, t) {
            if (e === "click") return _u(t);
        }
        function y1(e, t) {
            if (e === "input" || e === "change") return _u(t);
        }
        function v1(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var ht = typeof Object.is == "function" ? Object.is : v1;
        function ra(e, t) {
            if (ht(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), n = Object.keys(t);
            if (l.length !== n.length) return !1;
            for(n = 0; n < l.length; n++){
                var a = l[n];
                if (!Hi.call(t, a) || !ht(e[a], t[a])) return !1;
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
        var g1 = Qt && "documentMode" in document && 11 >= document.documentMode, bn = null, sr = null, ca = null, dr = !1;
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
            }), ca && ra(ca, n) || (ca = n, n = ri(sr, "onSelect"), 0 < n.length && (t = new Su("onSelect", "select", null, t, l), e.push({
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
        }, hr = {}, Ao = {};
        Qt && (Ao = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
        function jl(e) {
            if (hr[e]) return hr[e];
            if (!Sn[e]) return e;
            var t = Sn[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in Ao) return hr[e] = t[l];
            return e;
        }
        var Oo = jl("animationend"), No = jl("animationiteration"), xo = jl("animationstart"), b1 = jl("transitionrun"), S1 = jl("transitionstart"), E1 = jl("transitioncancel"), Mo = jl("transitionend"), Co = new Map, pr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        pr.push("scrollEnd");
        function Ct(e, t) {
            Co.set(e, t), Hl(t, [
                e
            ]);
        }
        var Do = new WeakMap;
        function _t(e, t) {
            if (typeof e == "object" && e !== null) {
                var l = Do.get(e);
                return l !== void 0 ? l : (t = {
                    value: e,
                    source: t,
                    stack: Vf(t)
                }, Do.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Vf(t)
            };
        }
        var Tt = [], En = 0, mr = 0;
        function Tu() {
            for(var e = En, t = mr = En = 0; t < e;){
                var l = Tt[t];
                Tt[t++] = null;
                var n = Tt[t];
                Tt[t++] = null;
                var a = Tt[t];
                Tt[t++] = null;
                var i = Tt[t];
                if (Tt[t++] = null, n !== null && a !== null) {
                    var d = n.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), n.pending = a;
                }
                i !== 0 && Bo(l, a, i);
            }
        }
        function Ru(e, t, l, n) {
            Tt[En++] = e, Tt[En++] = t, Tt[En++] = l, Tt[En++] = n, mr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
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
            for(var a = !1, i = e.return; i !== null;)i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
            return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - dt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [
                t
            ] : n.push(t), t.lane = l | 536870912), i) : null;
        }
        function Au(e) {
            if (50 < Ua) throw Ua = 0, _c = null, Error(f(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var Tn = {};
        function _1(e, t, l, n) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function pt(e, t, l, n) {
            return new _1(e, t, l, n);
        }
        function vr(e) {
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
            if (n = e, typeof e == "function") vr(e) && (d = 1);
            else if (typeof e == "string") d = R0(e, l, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case ne:
                    return e = pt(31, l, t, a), e.elementType = ne, e.lanes = i, e;
                case N:
                    return Ql(l.children, a, i, t);
                case B:
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
                        case U:
                        case L:
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
        var Rn = [], An = 0, Nu = null, xu = 0, Rt = [], At = 0, Kl = null, Gt = 1, Yt = "";
        function Gl(e, t) {
            Rn[An++] = xu, Rn[An++] = Nu, Nu = e, xu = t;
        }
        function wo(e, t, l) {
            Rt[At++] = Gt, Rt[At++] = Yt, Rt[At++] = Kl, Kl = e;
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
        function Sr(e) {
            e.return !== null && (Gl(e, 1), wo(e, 1, 0));
        }
        function Er(e) {
            for(; e === Nu;)Nu = Rn[--An], Rn[An] = null, xu = Rn[--An], Rn[An] = null;
            for(; e === Kl;)Kl = Rt[--At], Rt[At] = null, Yt = Rt[--At], Rt[At] = null, Gt = Rt[--At], Rt[At] = null;
        }
        var nt = null, De = null, ye = !1, Yl = null, zt = !1, _r = Error(f(519));
        function Vl(e) {
            var t = Error(f(418, ""));
            throw sa(_t(t, e)), _r;
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
                    for(l = 0; l < za.length; l++)de(za[l], t);
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
                    de("invalid", t), Jf(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), pu(t);
                    break;
                case "select":
                    de("invalid", t);
                    break;
                case "textarea":
                    de("invalid", t), Ff(t, n.value, n.defaultValue, n.children), pu(t);
            }
            l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Wd(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = ci), t = !0) : t = !1, t || Vl(e);
        }
        function Po(e) {
            for(nt = e.return; nt;)switch(nt.tag){
                case 5:
                case 13:
                    zt = !1;
                    return;
                case 27:
                case 3:
                    zt = !0;
                    return;
                default:
                    nt = nt.return;
            }
        }
        function fa(e) {
            if (e !== nt) return !1;
            if (!ye) return Po(e), ye = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Hc(e.type, e.memoizedProps)), l = !l), l && De && Vl(e), Po(e), t === 13) {
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
            } else t === 27 ? (t = De, Al(e.type) ? (e = Qc, Qc = null, De = e) : De = t) : De = nt ? Bt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function oa() {
            De = nt = null, ye = !1;
        }
        function qo() {
            var e = Yl;
            return e !== null && (ct === null ? ct = e : ct.push.apply(ct, e), Yl = null), e;
        }
        function sa(e) {
            Yl === null ? Yl = [
                e
            ] : Yl.push(e);
        }
        var Tr = k(null), Xl = null, Vt = null;
        function ol(e, t, l) {
            G(Tr, t._currentValue), t._currentValue = l;
        }
        function Xt(e) {
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
                var i = a.dependencies;
                if (i !== null) {
                    var d = a.child;
                    i = i.firstContext;
                    e: for(; i !== null;){
                        var m = i;
                        i = a;
                        for(var g = 0; g < t.length; g++)if (m.context === t[g]) {
                            i.lanes |= l, m = i.alternate, m !== null && (m.lanes |= l), Rr(i.return, l, e), n || (d = null);
                            break e;
                        }
                        i = m.next;
                    }
                } else if (a.tag === 18) {
                    if (d = a.return, d === null) throw Error(f(341));
                    d.lanes |= l, i = d.alternate, i !== null && (i.lanes |= l), Rr(d, l, e), d = null;
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
            e !== null && Ar(t, e, l, n), t.flags |= 262144;
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
            return Ho(Xl, e);
        }
        function Cu(e, t) {
            return Xl === null && Zl(e), Ho(e, t);
        }
        function Ho(e, t) {
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
        var T1 = typeof AbortController < "u" ? AbortController : function() {
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
        }, R1 = u.unstable_scheduleCallback, A1 = u.unstable_NormalPriority, He = {
            $$typeof: L,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Or() {
            return {
                controller: new T1,
                data: new Map,
                refCount: 0
            };
        }
        function ha(e) {
            e.refCount--, e.refCount === 0 && R1(A1, function() {
                e.controller.abort();
            });
        }
        var pa = null, Nr = 0, On = 0, Nn = null;
        function O1(e, t) {
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
        function N1(e, t) {
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
        var Lo = P.S;
        P.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && O1(e, t), Lo !== null && Lo(e, t);
        };
        var Jl = k(null);
        function xr() {
            var e = Jl.current;
            return e !== null ? e : Ae.pooledCache;
        }
        function Du(e, t) {
            t === null ? G(Jl, Jl.current) : G(Jl, t.pool);
        }
        function jo() {
            var e = xr();
            return e === null ? null : {
                parent: He._currentValue,
                pool: e
            };
        }
        var ma = Error(f(460)), Qo = Error(f(474)), Bu = Error(f(542)), Mr = {
            then: function() {}
        };
        function Ko(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Uu() {}
        function Go(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Uu, Uu), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Vo(e), e;
                default:
                    if (typeof t.status == "string") t.then(Uu, Uu);
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
                            throw e = t.reason, Vo(e), e;
                    }
                    throw ya = t, ma;
            }
        }
        var ya = null;
        function Yo() {
            if (ya === null) throw Error(f(459));
            var e = ya;
            return ya = null, e;
        }
        function Vo(e) {
            if (e === ma || e === Bu) throw Error(f(483));
        }
        var sl = !1;
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
                return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Au(e), Bo(e, null, l), t;
            }
            return Ru(e, n, t, l), Au(e);
        }
        function va(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, Hf(e, l);
            }
        }
        function Br(e, t) {
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
        var Ur = !1;
        function ga() {
            if (Ur) {
                var e = Nn;
                if (e !== null) throw e;
            }
        }
        function ba(e, t, l, n) {
            Ur = !1;
            var a = e.updateQueue;
            sl = !1;
            var i = a.firstBaseUpdate, d = a.lastBaseUpdate, m = a.shared.pending;
            if (m !== null) {
                a.shared.pending = null;
                var g = m, M = g.next;
                g.next = null, d === null ? i = M : d.next = M, d = g;
                var z = e.alternate;
                z !== null && (z = z.updateQueue, m = z.lastBaseUpdate, m !== d && (m === null ? z.firstBaseUpdate = M : m.next = M, z.lastBaseUpdate = g));
            }
            if (i !== null) {
                var H = a.baseState;
                d = 0, z = M = g = null, m = i;
                do {
                    var C = m.lane & -536870913, D = C !== m.lane;
                    if (D ? (he & C) === C : (n & C) === C) {
                        C !== 0 && C === On && (Ur = !0), z !== null && (z = z.next = {
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
                                    H = S({}, H, C);
                                    break e;
                                case 2:
                                    sl = !0;
                            }
                        }
                        C = m.callback, C !== null && (e.flags |= 64, D && (e.flags |= 8192), D = a.callbacks, D === null ? a.callbacks = [
                            C
                        ] : D.push(C));
                    } else D = {
                        lane: C,
                        tag: m.tag,
                        payload: m.payload,
                        callback: m.callback,
                        next: null
                    }, z === null ? (M = z = D, g = H) : z = z.next = D, d |= C;
                    if (m = m.next, m === null) {
                        if (m = a.shared.pending, m === null) break;
                        D = m, m = D.next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null;
                    }
                }while (!0);
                z === null && (g = H), a.baseState = g, a.firstBaseUpdate = M, a.lastBaseUpdate = z, i === null && (a.shared.lanes = 0), El |= d, e.lanes = d, e.memoizedState = H;
            }
        }
        function Xo(e, t) {
            if (typeof e != "function") throw Error(f(191, e));
            e.call(t);
        }
        function Zo(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)Xo(l[e], t);
        }
        var xn = k(null), wu = k(0);
        function Jo(e, t) {
            e = el, G(wu, e), G(xn, t), el = e | t.baseLanes;
        }
        function wr() {
            G(wu, el), G(xn, xn.current);
        }
        function zr() {
            el = wu.current, X(xn), X(wu);
        }
        var pl = 0, fe = null, be = null, Pe = null, zu = !1, Mn = !1, $l = !1, Pu = 0, Sa = 0, Cn = null, x1 = 0;
        function Ue() {
            throw Error(f(321));
        }
        function Pr(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!ht(e[l], t[l])) return !1;
            return !0;
        }
        function qr(e, t, l, n, a, i) {
            return pl = i, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? Bs : Us, $l = !1, i = l(n, a), $l = !1, Mn && (i = Fo(t, l, n, a)), $o(e), i;
        }
        function $o(e) {
            P.H = Qu;
            var t = be !== null && be.next !== null;
            if (pl = 0, Pe = be = fe = null, zu = !1, Sa = 0, Cn = null, t) throw Error(f(300));
            e === null || Ke || (e = e.dependencies, e !== null && Mu(e) && (Ke = !0));
        }
        function Fo(e, t, l, n) {
            fe = e;
            var a = 0;
            do {
                if (Mn && (Cn = null), Sa = 0, Mn = !1, 25 <= a) throw Error(f(301));
                if (a += 1, Pe = be = null, e.updateQueue != null) {
                    var i = e.updateQueue;
                    i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
                }
                P.H = z1, i = t(l, n);
            }while (Mn);
            return i;
        }
        function M1() {
            var e = P.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? Ea(t) : t, e = e.useState()[0], (be !== null ? be.memoizedState : null) !== e && (fe.flags |= 1024), t;
        }
        function Hr() {
            var e = Pu !== 0;
            return Pu = 0, e;
        }
        function kr(e, t, l) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
        }
        function Lr(e) {
            if (zu) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                zu = !1;
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
        function jr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function Ea(e) {
            var t = Sa;
            return Sa += 1, Cn === null && (Cn = []), e = Go(Cn, e, t), t = fe, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? Bs : Us), e;
        }
        function qu(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return Ea(e);
                if (e.$$typeof === L) return et(e);
            }
            throw Error(f(438, String(e)));
        }
        function Qr(e) {
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
            }), l === null && (l = jr(), fe.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), n = 0; n < e; n++)l[n] = Ce;
            return t.index++, l;
        }
        function Zt(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function Hu(e) {
            var t = qe();
            return Kr(t, be, e);
        }
        function Kr(e, t, l) {
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
                var m = d = null, g = null, M = t, z = !1;
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
                        }), H === On && (z = !0);
                        else if ((pl & C) === C) {
                            M = M.next, C === On && (z = !0);
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
                if (g === null ? d = i : g.next = m, !ht(i, e.memoizedState) && (Ke = !0, z && (l = Nn, l !== null))) throw l;
                e.memoizedState = i, e.baseState = d, e.baseQueue = g, n.lastRenderedState = i;
            }
            return a === null && (n.lanes = 0), [
                e.memoizedState,
                n.dispatch
            ];
        }
        function Gr(e) {
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
        function Wo(e, t, l) {
            var n = fe, a = qe(), i = ye;
            if (i) {
                if (l === void 0) throw Error(f(407));
                l = l();
            } else l = t();
            var d = !ht((be || a).memoizedState, l);
            d && (a.memoizedState = l, Ke = !0), a = a.queue;
            var m = ts.bind(null, n, a, e);
            if (_a(2048, 8, m, [
                e
            ]), a.getSnapshot !== t || d || Pe !== null && Pe.memoizedState.tag & 1) {
                if (n.flags |= 2048, Dn(9, ku(), es.bind(null, n, a, l, t), null), Ae === null) throw Error(f(349));
                i || (pl & 124) !== 0 || Io(n, t, l);
            }
            return l;
        }
        function Io(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = fe.updateQueue, t === null ? (t = jr(), fe.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function es(e, t, l, n) {
            t.value = l, t.getSnapshot = n, ls(t) && ns(e);
        }
        function ts(e, t, l) {
            return l(function() {
                ls(t) && ns(e);
            });
        }
        function ls(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !ht(e, l);
            } catch  {
                return !0;
            }
        }
        function ns(e) {
            var t = _n(e, 2);
            t !== null && bt(t, e, 2);
        }
        function Yr(e) {
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
        function as(e, t, l, n) {
            return e.baseState = l, Kr(e, be, typeof n == "function" ? n : Zt);
        }
        function C1(e, t, l, n, a) {
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
                P.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, us(t, i)) : (i.next = l.next, t.pending = l.next = i);
            }
        }
        function us(e, t) {
            var l = t.action, n = t.payload, a = e.state;
            if (t.isTransition) {
                var i = P.T, d = {};
                P.T = d;
                try {
                    var m = l(a, n), g = P.S;
                    g !== null && g(d, m), is(e, t, m);
                } catch (M) {
                    Vr(e, t, M);
                } finally{
                    P.T = i;
                }
            } else try {
                i = l(a, n), is(e, t, i);
            } catch (M) {
                Vr(e, t, M);
            }
        }
        function is(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
                rs(e, t, n);
            }, function(n) {
                return Vr(e, t, n);
            }) : rs(e, t, l);
        }
        function rs(e, t, l) {
            t.status = "fulfilled", t.value = l, cs(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, us(e, l)));
        }
        function Vr(e, t, l) {
            var n = e.pending;
            if (e.pending = null, n !== null) {
                n = n.next;
                do t.status = "rejected", t.reason = l, cs(t), t = t.next;
                while (t !== n);
            }
            e.action = null;
        }
        function cs(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function fs(e, t) {
            return t;
        }
        function os(e, t) {
            if (ye) {
                var l = Ae.formState;
                if (l !== null) {
                    e: {
                        var n = fe;
                        if (ye) {
                            if (De) {
                                t: {
                                    for(var a = De, i = zt; a.nodeType !== 8;){
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
                lastRenderedReducer: fs,
                lastRenderedState: t
            }, l.queue = n, l = Ms.bind(null, fe, n), n.dispatch = l, n = Yr(!1), i = Fr.bind(null, fe, !1, n.queue), n = it(), a = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, n.queue = a, l = C1.bind(null, fe, a, i, l), a.dispatch = l, n.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function ss(e) {
            var t = qe();
            return ds(t, be, e);
        }
        function ds(e, t, l) {
            if (t = Kr(e, t, fs)[0], e = Hu(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var n = Ea(t);
            } catch (d) {
                throw d === ma ? Bu : d;
            }
            else n = t;
            t = qe();
            var a = t.queue, i = a.dispatch;
            return l !== t.memoizedState && (fe.flags |= 2048, Dn(9, ku(), D1.bind(null, a, l), null)), [
                n,
                i,
                e
            ];
        }
        function D1(e, t) {
            e.action = t;
        }
        function hs(e) {
            var t = qe(), l = be;
            if (l !== null) return ds(t, l, e);
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
            }, t = fe.updateQueue, t === null && (t = jr(), fe.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
        }
        function ku() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function ps() {
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
            be !== null && n !== null && Pr(n, be.memoizedState.deps) ? a.memoizedState = Dn(t, i, l, n) : (fe.flags |= e, a.memoizedState = Dn(1 | t, i, l, n));
        }
        function ms(e, t) {
            Lu(8390656, 8, e, t);
        }
        function ys(e, t) {
            _a(2048, 8, e, t);
        }
        function vs(e, t) {
            return _a(4, 2, e, t);
        }
        function gs(e, t) {
            return _a(4, 4, e, t);
        }
        function bs(e, t) {
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
        function Ss(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, _a(4, 4, bs.bind(null, t, e), l);
        }
        function Xr() {}
        function Es(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            return t !== null && Pr(t, n[1]) ? n[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function _s(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            if (t !== null && Pr(t, n[1])) return n[0];
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
        function Zr(e, t, l) {
            return l === void 0 || (pl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Ad(), fe.lanes |= e, El |= e, l);
        }
        function Ts(e, t, l, n) {
            return ht(l, t) ? l : xn.current !== null ? (e = Zr(e, l, n), ht(e, t) || (Ke = !0), e) : (pl & 42) === 0 ? (Ke = !0, e.memoizedState = l) : (e = Ad(), fe.lanes |= e, El |= e, t);
        }
        function Rs(e, t, l, n, a) {
            var i = Y.p;
            Y.p = i !== 0 && 8 > i ? i : 8;
            var d = P.T, m = {};
            P.T = m, Fr(e, !1, t, l);
            try {
                var g = a(), M = P.S;
                if (M !== null && M(m, g), g !== null && typeof g == "object" && typeof g.then == "function") {
                    var z = N1(g, n);
                    Ta(e, t, z, gt(e));
                } else Ta(e, t, n, gt(e));
            } catch (H) {
                Ta(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: H
                }, gt());
            } finally{
                Y.p = i, P.T = d;
            }
        }
        function B1() {}
        function Jr(e, t, l, n) {
            if (e.tag !== 5) throw Error(f(476));
            var a = As(e).queue;
            Rs(e, a, t, le, l === null ? B1 : function() {
                return Os(e), l(n);
            });
        }
        function As(e) {
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
        function Os(e) {
            var t = As(e).next.queue;
            Ta(e, t, {}, gt());
        }
        function $r() {
            return et(ja);
        }
        function Ns() {
            return qe().memoizedState;
        }
        function xs() {
            return qe().memoizedState;
        }
        function U1(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = gt();
                        e = dl(l);
                        var n = hl(t, e, l);
                        n !== null && (bt(n, t, l), va(n, t, l)), t = {
                            cache: Or()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function w1(e, t, l) {
            var n = gt();
            l = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ju(e) ? Cs(t, l) : (l = yr(e, t, l, n), l !== null && (bt(l, e, n), Ds(l, t, n)));
        }
        function Ms(e, t, l) {
            var n = gt();
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
            if (ju(e)) Cs(t, a);
            else {
                var i = e.alternate;
                if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                    var d = t.lastRenderedState, m = i(d, l);
                    if (a.hasEagerState = !0, a.eagerState = m, ht(m, d)) return Ru(e, t, a, 0), Ae === null && Tu(), !1;
                } catch  {} finally{}
                if (l = yr(e, t, a, n), l !== null) return bt(l, e, n), Ds(l, t, n), !0;
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
            }, ju(e)) {
                if (t) throw Error(f(479));
            } else t = yr(e, l, n, 2), t !== null && bt(t, e, 2);
        }
        function ju(e) {
            var t = e.alternate;
            return e === fe || t !== null && t === fe;
        }
        function Cs(e, t) {
            Mn = zu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function Ds(e, t, l) {
            if ((l & 4194048) !== 0) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, Hf(e, l);
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
        }, Bs = {
            readContext: et,
            use: qu,
            useCallback: function(e, t) {
                return it().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: et,
            useEffect: ms,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, Lu(4194308, 4, bs.bind(null, t, e), l);
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
                }, n.queue = e, e = e.dispatch = w1.bind(null, fe, e), [
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
                e = Yr(e);
                var t = e.queue, l = Ms.bind(null, fe, t);
                return t.dispatch = l, [
                    e.memoizedState,
                    l
                ];
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = it();
                return Zr(l, e, t);
            },
            useTransition: function() {
                var e = Yr(!1);
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
                    (he & 124) !== 0 || Io(n, t, l);
                }
                a.memoizedState = l;
                var i = {
                    value: l,
                    getSnapshot: t
                };
                return a.queue = i, ms(ts.bind(null, n, i, e), [
                    e
                ]), n.flags |= 2048, Dn(9, ku(), es.bind(null, n, i, l, t), null), l;
            },
            useId: function() {
                var e = it(), t = Ae.identifierPrefix;
                if (ye) {
                    var l = Yt, n = Gt;
                    l = (n & ~(1 << 32 - dt(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Pu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = x1++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: $r,
            useFormState: os,
            useActionState: os,
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
                return t.queue = l, t = Fr.bind(null, fe, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Qr,
            useCacheRefresh: function() {
                return it().memoizedState = U1.bind(null, fe);
            }
        }, Us = {
            readContext: et,
            use: qu,
            useCallback: Es,
            useContext: et,
            useEffect: ys,
            useImperativeHandle: Ss,
            useInsertionEffect: vs,
            useLayoutEffect: gs,
            useMemo: _s,
            useReducer: Hu,
            useRef: ps,
            useState: function() {
                return Hu(Zt);
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return Ts(l, be.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Hu(Zt)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: Wo,
            useId: Ns,
            useHostTransitionStatus: $r,
            useFormState: ss,
            useActionState: ss,
            useOptimistic: function(e, t) {
                var l = qe();
                return as(l, be, e, t);
            },
            useMemoCache: Qr,
            useCacheRefresh: xs
        }, z1 = {
            readContext: et,
            use: qu,
            useCallback: Es,
            useContext: et,
            useEffect: ys,
            useImperativeHandle: Ss,
            useInsertionEffect: vs,
            useLayoutEffect: gs,
            useMemo: _s,
            useReducer: Gr,
            useRef: ps,
            useState: function() {
                return Gr(Zt);
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return be === null ? Zr(l, e, t) : Ts(l, be.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Gr(Zt)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: Wo,
            useId: Ns,
            useHostTransitionStatus: $r,
            useFormState: hs,
            useActionState: hs,
            useOptimistic: function(e, t) {
                var l = qe();
                return be !== null ? as(l, be, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: Qr,
            useCacheRefresh: xs
        }, Bn = null, Ra = 0;
        function Ku(e) {
            var t = Ra;
            return Ra += 1, Bn === null && (Bn = []), Go(Bn, e, t);
        }
        function Aa(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Gu(e, t) {
            throw t.$$typeof === T ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function ws(e) {
            var t = e._init;
            return t(e._payload);
        }
        function zs(e) {
            function t(R, _) {
                if (e) {
                    var x = R.deletions;
                    x === null ? (R.deletions = [
                        _
                    ], R.flags |= 16) : x.push(_);
                }
            }
            function l(R, _) {
                if (!e) return null;
                for(; _ !== null;)t(R, _), _ = _.sibling;
                return null;
            }
            function n(R) {
                for(var _ = new Map; R !== null;)R.key !== null ? _.set(R.key, R) : _.set(R.index, R), R = R.sibling;
                return _;
            }
            function a(R, _) {
                return R = Kt(R, _), R.index = 0, R.sibling = null, R;
            }
            function i(R, _, x) {
                return R.index = x, e ? (x = R.alternate, x !== null ? (x = x.index, x < _ ? (R.flags |= 67108866, _) : x) : (R.flags |= 67108866, _)) : (R.flags |= 1048576, _);
            }
            function d(R) {
                return e && R.alternate === null && (R.flags |= 67108866), R;
            }
            function m(R, _, x, q) {
                return _ === null || _.tag !== 6 ? (_ = gr(x, R.mode, q), _.return = R, _) : (_ = a(_, x), _.return = R, _);
            }
            function g(R, _, x, q) {
                var Z = x.type;
                return Z === N ? z(R, _, x.props.children, q, x.key) : _ !== null && (_.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === $ && ws(Z) === _.type) ? (_ = a(_, x.props), Aa(_, x), _.return = R, _) : (_ = Ou(x.type, x.key, x.props, null, R.mode, q), Aa(_, x), _.return = R, _);
            }
            function M(R, _, x, q) {
                return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== x.containerInfo || _.stateNode.implementation !== x.implementation ? (_ = br(x, R.mode, q), _.return = R, _) : (_ = a(_, x.children || []), _.return = R, _);
            }
            function z(R, _, x, q, Z) {
                return _ === null || _.tag !== 7 ? (_ = Ql(x, R.mode, q, Z), _.return = R, _) : (_ = a(_, x), _.return = R, _);
            }
            function H(R, _, x) {
                if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return _ = gr("" + _, R.mode, x), _.return = R, _;
                if (typeof _ == "object" && _ !== null) {
                    switch(_.$$typeof){
                        case b:
                            return x = Ou(_.type, _.key, _.props, null, R.mode, x), Aa(x, _), x.return = R, x;
                        case A:
                            return _ = br(_, R.mode, x), _.return = R, _;
                        case $:
                            var q = _._init;
                            return _ = q(_._payload), H(R, _, x);
                    }
                    if (We(_) || ze(_)) return _ = Ql(_, R.mode, x, null), _.return = R, _;
                    if (typeof _.then == "function") return H(R, Ku(_), x);
                    if (_.$$typeof === L) return H(R, Cu(R, _), x);
                    Gu(R, _);
                }
                return null;
            }
            function C(R, _, x, q) {
                var Z = _ !== null ? _.key : null;
                if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return Z !== null ? null : m(R, _, "" + x, q);
                if (typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case b:
                            return x.key === Z ? g(R, _, x, q) : null;
                        case A:
                            return x.key === Z ? M(R, _, x, q) : null;
                        case $:
                            return Z = x._init, x = Z(x._payload), C(R, _, x, q);
                    }
                    if (We(x) || ze(x)) return Z !== null ? null : z(R, _, x, q, null);
                    if (typeof x.then == "function") return C(R, _, Ku(x), q);
                    if (x.$$typeof === L) return C(R, _, Cu(R, x), q);
                    Gu(R, x);
                }
                return null;
            }
            function D(R, _, x, q, Z) {
                if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return R = R.get(x) || null, m(_, R, "" + q, Z);
                if (typeof q == "object" && q !== null) {
                    switch(q.$$typeof){
                        case b:
                            return R = R.get(q.key === null ? x : q.key) || null, g(_, R, q, Z);
                        case A:
                            return R = R.get(q.key === null ? x : q.key) || null, M(_, R, q, Z);
                        case $:
                            var oe = q._init;
                            return q = oe(q._payload), D(R, _, x, q, Z);
                    }
                    if (We(q) || ze(q)) return R = R.get(x) || null, z(_, R, q, Z, null);
                    if (typeof q.then == "function") return D(R, _, x, Ku(q), Z);
                    if (q.$$typeof === L) return D(R, _, x, Cu(_, q), Z);
                    Gu(_, q);
                }
                return null;
            }
            function ae(R, _, x, q) {
                for(var Z = null, oe = null, F = _, te = _ = 0, Ye = null; F !== null && te < x.length; te++){
                    F.index > te ? (Ye = F, F = null) : Ye = F.sibling;
                    var me = C(R, F, x[te], q);
                    if (me === null) {
                        F === null && (F = Ye);
                        break;
                    }
                    e && F && me.alternate === null && t(R, F), _ = i(me, _, te), oe === null ? Z = me : oe.sibling = me, oe = me, F = Ye;
                }
                if (te === x.length) return l(R, F), ye && Gl(R, te), Z;
                if (F === null) {
                    for(; te < x.length; te++)F = H(R, x[te], q), F !== null && (_ = i(F, _, te), oe === null ? Z = F : oe.sibling = F, oe = F);
                    return ye && Gl(R, te), Z;
                }
                for(F = n(F); te < x.length; te++)Ye = D(F, R, te, x[te], q), Ye !== null && (e && Ye.alternate !== null && F.delete(Ye.key === null ? te : Ye.key), _ = i(Ye, _, te), oe === null ? Z = Ye : oe.sibling = Ye, oe = Ye);
                return e && F.forEach(function(Cl) {
                    return t(R, Cl);
                }), ye && Gl(R, te), Z;
            }
            function ee(R, _, x, q) {
                if (x == null) throw Error(f(151));
                for(var Z = null, oe = null, F = _, te = _ = 0, Ye = null, me = x.next(); F !== null && !me.done; te++, me = x.next()){
                    F.index > te ? (Ye = F, F = null) : Ye = F.sibling;
                    var Cl = C(R, F, me.value, q);
                    if (Cl === null) {
                        F === null && (F = Ye);
                        break;
                    }
                    e && F && Cl.alternate === null && t(R, F), _ = i(Cl, _, te), oe === null ? Z = Cl : oe.sibling = Cl, oe = Cl, F = Ye;
                }
                if (me.done) return l(R, F), ye && Gl(R, te), Z;
                if (F === null) {
                    for(; !me.done; te++, me = x.next())me = H(R, me.value, q), me !== null && (_ = i(me, _, te), oe === null ? Z = me : oe.sibling = me, oe = me);
                    return ye && Gl(R, te), Z;
                }
                for(F = n(F); !me.done; te++, me = x.next())me = D(F, R, te, me.value, q), me !== null && (e && me.alternate !== null && F.delete(me.key === null ? te : me.key), _ = i(me, _, te), oe === null ? Z = me : oe.sibling = me, oe = me);
                return e && F.forEach(function(P0) {
                    return t(R, P0);
                }), ye && Gl(R, te), Z;
            }
            function Ee(R, _, x, q) {
                if (typeof x == "object" && x !== null && x.type === N && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case b:
                            e: {
                                for(var Z = x.key; _ !== null;){
                                    if (_.key === Z) {
                                        if (Z = x.type, Z === N) {
                                            if (_.tag === 7) {
                                                l(R, _.sibling), q = a(_, x.props.children), q.return = R, R = q;
                                                break e;
                                            }
                                        } else if (_.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === $ && ws(Z) === _.type) {
                                            l(R, _.sibling), q = a(_, x.props), Aa(q, x), q.return = R, R = q;
                                            break e;
                                        }
                                        l(R, _);
                                        break;
                                    } else t(R, _);
                                    _ = _.sibling;
                                }
                                x.type === N ? (q = Ql(x.props.children, R.mode, q, x.key), q.return = R, R = q) : (q = Ou(x.type, x.key, x.props, null, R.mode, q), Aa(q, x), q.return = R, R = q);
                            }
                            return d(R);
                        case A:
                            e: {
                                for(Z = x.key; _ !== null;){
                                    if (_.key === Z) if (_.tag === 4 && _.stateNode.containerInfo === x.containerInfo && _.stateNode.implementation === x.implementation) {
                                        l(R, _.sibling), q = a(_, x.children || []), q.return = R, R = q;
                                        break e;
                                    } else {
                                        l(R, _);
                                        break;
                                    }
                                    else t(R, _);
                                    _ = _.sibling;
                                }
                                q = br(x, R.mode, q), q.return = R, R = q;
                            }
                            return d(R);
                        case $:
                            return Z = x._init, x = Z(x._payload), Ee(R, _, x, q);
                    }
                    if (We(x)) return ae(R, _, x, q);
                    if (ze(x)) {
                        if (Z = ze(x), typeof Z != "function") throw Error(f(150));
                        return x = Z.call(x), ee(R, _, x, q);
                    }
                    if (typeof x.then == "function") return Ee(R, _, Ku(x), q);
                    if (x.$$typeof === L) return Ee(R, _, Cu(R, x), q);
                    Gu(R, x);
                }
                return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, _ !== null && _.tag === 6 ? (l(R, _.sibling), q = a(_, x), q.return = R, R = q) : (l(R, _), q = gr(x, R.mode, q), q.return = R, R = q), d(R)) : l(R, _);
            }
            return function(R, _, x, q) {
                try {
                    Ra = 0;
                    var Z = Ee(R, _, x, q);
                    return Bn = null, Z;
                } catch (F) {
                    if (F === ma || F === Bu) throw F;
                    var oe = pt(29, F, null, R.mode);
                    return oe.lanes = q, oe.return = R, oe;
                } finally{}
            };
        }
        var Un = zs(!0), Ps = zs(!1), Ot = k(null), Pt = null;
        function ml(e) {
            var t = e.alternate;
            G(ke, ke.current & 1), G(Ot, e), Pt === null && (t === null || xn.current !== null || t.memoizedState !== null) && (Pt = e);
        }
        function qs(e) {
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
        var ke = k(0);
        function Yu(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var l = t.memoizedState;
                    if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || jc(l))) return t;
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
            t = e.memoizedState, l = l(n, t), l = l == null ? t : S({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var Ir = {
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
        function Hs(e, t, l, n, a, i, d) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, d) : t.prototype && t.prototype.isPureReactComponent ? !ra(l, n) || !ra(a, i) : !0;
        }
        function ks(e, t, l, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Ir.enqueueReplaceState(t, t.state, null);
        }
        function Fl(e, t) {
            var l = t;
            if ("ref" in t) {
                l = {};
                for(var n in t)n !== "ref" && (l[n] = t[n]);
            }
            if (e = e.defaultProps) {
                l === t && (l = S({}, l));
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
        function Ls(e) {
            Vu(e);
        }
        function js(e) {
            console.error(e);
        }
        function Qs(e) {
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
        function Ks(e, t, l) {
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
            return l = dl(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Xu(e, t);
            }, l;
        }
        function Gs(e) {
            return e = dl(e), e.tag = 3, e;
        }
        function Ys(e, t, l, n) {
            var a = l.type.getDerivedStateFromError;
            if (typeof a == "function") {
                var i = n.value;
                e.payload = function() {
                    return a(i);
                }, e.callback = function() {
                    Ks(t, l, n);
                };
            }
            var d = l.stateNode;
            d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
                Ks(t, l, n), typeof a != "function" && (_l === null ? _l = new Set([
                    this
                ]) : _l.add(this));
                var m = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: m !== null ? m : ""
                });
            });
        }
        function P1(e, t, l, n, a) {
            if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (t = l.alternate, t !== null && da(t, l, a, !0), l = Ot.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return Pt === null ? Rc() : l.alternate === null && Be === 0 && (Be = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Mr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
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
                    throw Error(f(435, l.tag));
                }
                return Oc(e, n, a), Rc(), !1;
            }
            if (ye) return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== _r && (e = Error(f(422), {
                cause: n
            }), sa(_t(e, l)))) : (n !== _r && (t = Error(f(423), {
                cause: n
            }), sa(_t(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = ec(e.stateNode, n, a), Br(e, a), Be !== 4 && (Be = 2)), !1;
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
                        return l.flags |= 65536, e = a & -a, l.lanes |= e, e = ec(l.stateNode, n, e), Br(l, e), !1;
                    case 1:
                        if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (_l === null || !_l.has(i)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = Gs(a), Ys(a, e, l, n), Br(l, a), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Vs = Error(f(461)), Ke = !1;
        function Xe(e, t, l, n) {
            t.child = e === null ? Ps(t, null, l, n) : Un(t, e.child, l, n);
        }
        function Xs(e, t, l, n, a) {
            l = l.render;
            var i = t.ref;
            if ("ref" in n) {
                var d = {};
                for(var m in n)m !== "ref" && (d[m] = n[m]);
            } else d = n;
            return Zl(t), n = qr(e, t, l, d, i, a), m = Hr(), e !== null && !Ke ? (kr(e, t, a), $t(e, t, a)) : (ye && m && Sr(t), t.flags |= 1, Xe(e, t, n, a), t.child);
        }
        function Zs(e, t, l, n, a) {
            if (e === null) {
                var i = l.type;
                return typeof i == "function" && !vr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Js(e, t, i, n, a)) : (e = Ou(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (i = e.child, !cc(e, a)) {
                var d = i.memoizedProps;
                if (l = l.compare, l = l !== null ? l : ra, l(d, n) && e.ref === t.ref) return $t(e, t, a);
            }
            return t.flags |= 1, e = Kt(i, n), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Js(e, t, l, n, a) {
            if (e !== null) {
                var i = e.memoizedProps;
                if (ra(i, n) && e.ref === t.ref) if (Ke = !1, t.pendingProps = n = i, cc(e, a)) (e.flags & 131072) !== 0 && (Ke = !0);
                else return t.lanes = e.lanes, $t(e, t, a);
            }
            return tc(e, t, l, n, a);
        }
        function $s(e, t, l) {
            var n = t.pendingProps, a = n.children, i = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (n = i !== null ? i.baseLanes | l : l, e !== null) {
                        for(a = t.child = e.child, i = 0; a !== null;)i = i | a.lanes | a.childLanes, a = a.sibling;
                        t.childLanes = i & ~n;
                    } else t.childLanes = 0, t.child = null;
                    return Fs(e, t, n, l);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && Du(t, i !== null ? i.cachePool : null), i !== null ? Jo(t, i) : wr(), qs(t);
                else return t.lanes = t.childLanes = 536870912, Fs(e, t, i !== null ? i.baseLanes | l : l, l);
            } else i !== null ? (Du(t, i.cachePool), Jo(t, i), yl(), t.memoizedState = null) : (e !== null && Du(t, null), wr(), yl());
            return Xe(e, t, a, l), t.child;
        }
        function Fs(e, t, l, n) {
            var a = xr();
            return a = a === null ? null : {
                parent: He._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: a
            }, e !== null && Du(t, null), wr(), qs(t), e !== null && da(e, t, n, !0), null;
        }
        function Zu(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(f(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function tc(e, t, l, n, a) {
            return Zl(t), l = qr(e, t, l, n, void 0, a), n = Hr(), e !== null && !Ke ? (kr(e, t, a), $t(e, t, a)) : (ye && n && Sr(t), t.flags |= 1, Xe(e, t, l, a), t.child);
        }
        function Ws(e, t, l, n, a, i) {
            return Zl(t), t.updateQueue = null, l = Fo(t, n, l, a), $o(e), n = Hr(), e !== null && !Ke ? (kr(e, t, i), $t(e, t, i)) : (ye && n && Sr(t), t.flags |= 1, Xe(e, t, l, i), t.child);
        }
        function Is(e, t, l, n, a) {
            if (Zl(t), t.stateNode === null) {
                var i = Tn, d = l.contextType;
                typeof d == "object" && d !== null && (i = et(d)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ir, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Cr(t), d = l.contextType, i.context = typeof d == "object" && d !== null ? et(d) : Tn, i.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && (Wr(t, l, d, n), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (d = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), d !== i.state && Ir.enqueueReplaceState(i, i.state, null), ba(t, n, i, a), ga(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
            } else if (e === null) {
                i = t.stateNode;
                var m = t.memoizedProps, g = Fl(l, m);
                i.props = g;
                var M = i.context, z = l.contextType;
                d = Tn, typeof z == "object" && z !== null && (d = et(z));
                var H = l.getDerivedStateFromProps;
                z = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, z || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || M !== d) && ks(t, i, n, d), sl = !1;
                var C = t.memoizedState;
                i.state = C, ba(t, n, i, a), ga(), M = t.memoizedState, m || C !== M || sl ? (typeof H == "function" && (Wr(t, l, H, n), M = t.memoizedState), (g = sl || Hs(t, l, g, n, C, M, d)) ? (z || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = M), i.props = n, i.state = M, i.context = d, n = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
            } else {
                i = t.stateNode, Dr(e, t), d = t.memoizedProps, z = Fl(l, d), i.props = z, H = t.pendingProps, C = i.context, M = l.contextType, g = Tn, typeof M == "object" && M !== null && (g = et(M)), m = l.getDerivedStateFromProps, (M = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d !== H || C !== g) && ks(t, i, n, g), sl = !1, C = t.memoizedState, i.state = C, ba(t, n, i, a), ga();
                var D = t.memoizedState;
                d !== H || C !== D || sl || e !== null && e.dependencies !== null && Mu(e.dependencies) ? (typeof m == "function" && (Wr(t, l, m, n), D = t.memoizedState), (z = sl || Hs(t, l, z, n, C, D, g) || e !== null && e.dependencies !== null && Mu(e.dependencies)) ? (M || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, D, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, D, g)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = D), i.props = n, i.state = D, i.context = g, n = z) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), n = !1);
            }
            return i = n, Zu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = Un(t, e.child, null, a), t.child = Un(t, null, l, a)) : Xe(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = $t(e, t, a), e;
        }
        function ed(e, t, l, n) {
            return oa(), t.flags |= 256, Xe(e, t, l, n), t.child;
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
                cachePool: jo()
            };
        }
        function ac(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Nt), e;
        }
        function td(e, t, l) {
            var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, d;
            if ((d = i) || (d = e !== null && e.memoizedState === null ? !1 : (ke.current & 2) !== 0), d && (a = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (ye) {
                    if (a ? ml(t) : yl(), ye) {
                        var m = De, g;
                        if (g = m) {
                            e: {
                                for(g = m, m = zt; g.nodeType !== 8;){
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
                    if (m = t.memoizedState, m !== null && (m = m.dehydrated, m !== null)) return jc(m) ? t.lanes = 32 : t.lanes = 536870912, null;
                    Jt(t);
                }
                return m = n.children, n = n.fallback, a ? (yl(), a = t.mode, m = Ju({
                    mode: "hidden",
                    children: m
                }, a), n = Ql(n, a, l, null), m.return = t, n.return = t, m.sibling = n, t.child = m, a = t.child, a.memoizedState = nc(l), a.childLanes = ac(e, d, l), t.memoizedState = lc, n) : (ml(t), uc(t, m));
            }
            if (g = e.memoizedState, g !== null && (m = g.dehydrated, m !== null)) {
                if (i) t.flags & 256 ? (ml(t), t.flags &= -257, t = ic(e, t, l)) : t.memoizedState !== null ? (yl(), t.child = e.child, t.flags |= 128, t = null) : (yl(), a = n.fallback, m = t.mode, n = Ju({
                    mode: "visible",
                    children: n.children
                }, m), a = Ql(a, m, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, Un(t, e.child, null, l), n = t.child, n.memoizedState = nc(l), n.childLanes = ac(e, d, l), t.memoizedState = lc, t = a);
                else if (ml(t), jc(m)) {
                    if (d = m.nextSibling && m.nextSibling.dataset, d) var M = d.dgst;
                    d = M, n = Error(f(419)), n.stack = "", n.digest = d, sa({
                        value: n,
                        source: null,
                        stack: null
                    }), t = ic(e, t, l);
                } else if (Ke || da(e, t, l, !1), d = (l & e.childLanes) !== 0, Ke || d) {
                    if (d = Ae, d !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : Qi(n), n = (n & (d.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== g.retryLane)) throw g.retryLane = n, _n(e, n), bt(d, e, n), Vs;
                    m.data === "$?" || Rc(), t = ic(e, t, l);
                } else m.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, De = Bt(m.nextSibling), nt = t, ye = !0, Yl = null, zt = !1, e !== null && (Rt[At++] = Gt, Rt[At++] = Yt, Rt[At++] = Kl, Gt = e.id, Yt = e.overflow, Kl = t), t = uc(t, n.children), t.flags |= 4096);
                return t;
            }
            return a ? (yl(), a = n.fallback, m = t.mode, g = e.child, M = g.sibling, n = Kt(g, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = g.subtreeFlags & 65011712, M !== null ? a = Kt(M, a) : (a = Ql(a, m, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, m = e.child.memoizedState, m === null ? m = nc(l) : (g = m.cachePool, g !== null ? (M = He._currentValue, g = g.parent !== M ? {
                parent: M,
                pool: M
            } : g) : g = jo(), m = {
                baseLanes: m.baseLanes | l,
                cachePool: g
            }), a.memoizedState = m, a.childLanes = ac(e, d, l), t.memoizedState = lc, n) : (ml(t), l = e.child, e = l.sibling, l = Kt(l, {
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
            return Un(t, e.child, null, l), e = uc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function ld(e, t, l) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), Rr(e.return, t, l);
        }
        function rc(e, t, l, n, a) {
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
        function nd(e, t, l) {
            var n = t.pendingProps, a = n.revealOrder, i = n.tail;
            if (Xe(e, t, n.children, l), n = ke.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
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
            switch(G(ke, n), a){
                case "forwards":
                    for(l = t.child, a = null; l !== null;)e = l.alternate, e !== null && Yu(e) === null && (a = l), l = l.sibling;
                    l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), rc(t, !1, a, l, i);
                    break;
                case "backwards":
                    for(l = null, a = t.child, t.child = null; a !== null;){
                        if (e = a.alternate, e !== null && Yu(e) === null) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = l, l = a, a = e;
                    }
                    rc(t, !0, l, null, i);
                    break;
                case "together":
                    rc(t, !1, null, null, void 0);
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
        function cc(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Mu(e)));
        }
        function q1(e, t, l) {
            switch(t.tag){
                case 3:
                    Oe(t, t.stateNode.containerInfo), ol(t, He, e.memoizedState.cache), oa();
                    break;
                case 27:
                case 5:
                    qi(t);
                    break;
                case 4:
                    Oe(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    ol(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var n = t.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (ml(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? td(e, t, l) : (ml(t), e = $t(e, t, l), e !== null ? e.sibling : null);
                    ml(t);
                    break;
                case 19:
                    var a = (e.flags & 128) !== 0;
                    if (n = (l & t.childLanes) !== 0, n || (da(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                        if (n) return nd(e, t, l);
                        t.flags |= 128;
                    }
                    if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), G(ke, ke.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, $s(e, t, l);
                case 24:
                    ol(t, He, e.memoizedState.cache);
            }
            return $t(e, t, l);
        }
        function ad(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ke = !0;
            else {
                if (!cc(e, l) && (t.flags & 128) === 0) return Ke = !1, q1(e, t, l);
                Ke = (e.flags & 131072) !== 0;
            }
            else Ke = !1, ye && (t.flags & 1048576) !== 0 && wo(t, xu, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var n = t.elementType, a = n._init;
                        if (n = a(n._payload), t.type = n, typeof n == "function") vr(n) ? (e = Fl(n, e), t.tag = 1, t = Is(null, t, n, e, l)) : (t.tag = 0, t = tc(null, t, n, e, l));
                        else {
                            if (n != null) {
                                if (a = n.$$typeof, a === V) {
                                    t.tag = 11, t = Xs(null, t, n, e, l);
                                    break e;
                                } else if (a === J) {
                                    t.tag = 14, t = Zs(null, t, n, e, l);
                                    break e;
                                }
                            }
                            throw t = Pl(n) || n, Error(f(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return tc(e, t, t.type, t.pendingProps, l);
                case 1:
                    return n = t.type, a = Fl(n, t.pendingProps), Is(e, t, n, a, l);
                case 3:
                    e: {
                        if (Oe(t, t.stateNode.containerInfo), e === null) throw Error(f(387));
                        n = t.pendingProps;
                        var i = t.memoizedState;
                        a = i.element, Dr(e, t), ba(t, n, null, l);
                        var d = t.memoizedState;
                        if (n = d.cache, ol(t, He, n), n !== i.cache && Ar(t, [
                            He
                        ], l, !0), ga(), n = d.element, i.isDehydrated) if (i = {
                            element: n,
                            isDehydrated: !1,
                            cache: d.cache
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                            t = ed(e, t, n, l);
                            break e;
                        } else if (n !== a) {
                            a = _t(Error(f(424)), t), sa(a), t = ed(e, t, n, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(De = Bt(e.firstChild), nt = t, ye = !0, Yl = null, zt = !0, l = Ps(t, null, n, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
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
                    return Zu(e, t), e === null ? (l = ch(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ye || (l = t.type, e = t.pendingProps, n = fi(ie.current).createElement(l), n[Ie] = t, n[at] = e, Je(n, l, e), Qe(n), t.stateNode = n) : t.memoizedState = ch(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return qi(t), e === null && ye && (n = t.stateNode = uh(t.type, t.pendingProps, ie.current), nt = t, zt = !0, a = De, Al(t.type) ? (Qc = a, De = Bt(n.firstChild)) : De = a), Xe(e, t, t.pendingProps.children, l), Zu(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && ye && ((a = n = De) && (n = s0(n, t.type, t.pendingProps, zt), n !== null ? (t.stateNode = n, nt = t, De = Bt(n.firstChild), zt = !1, a = !0) : a = !1), a || Vl(t)), qi(t), a = t.type, i = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = i.children, Hc(a, i) ? n = null : d !== null && Hc(a, d) && (t.flags |= 32), t.memoizedState !== null && (a = qr(e, t, M1, null, null, l), ja._currentValue = a), Zu(e, t), Xe(e, t, n, l), t.child;
                case 6:
                    return e === null && ye && ((e = l = De) && (l = d0(l, t.pendingProps, zt), l !== null ? (t.stateNode = l, nt = t, De = null, e = !0) : e = !1), e || Vl(t)), null;
                case 13:
                    return td(e, t, l);
                case 4:
                    return Oe(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Un(t, null, n, l) : Xe(e, t, n, l), t.child;
                case 11:
                    return Xs(e, t, t.type, t.pendingProps, l);
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
                    return Zs(e, t, t.type, t.pendingProps, l);
                case 15:
                    return Js(e, t, t.type, t.pendingProps, l);
                case 19:
                    return nd(e, t, l);
                case 31:
                    return n = t.pendingProps, l = t.mode, n = {
                        mode: n.mode,
                        children: n.children
                    }, e === null ? (l = Ju(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Kt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return $s(e, t, l);
                case 24:
                    return Zl(t), n = et(He), e === null ? (a = xr(), a === null && (a = Ae, i = Or(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = {
                        parent: n,
                        cache: a
                    }, Cr(t), ol(t, He, a)) : ((e.lanes & l) !== 0 && (Dr(e, t), ba(t, null, null, l), ga()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = {
                        parent: n,
                        cache: n
                    }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ol(t, He, n)) : (n = i.cache, ol(t, He, n), n !== a.cache && Ar(t, [
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
        function ud(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !hh(t)) {
                if (t = Ot.current, t !== null && ((he & 4194048) === he ? Pt !== null : (he & 62914560) !== he && (he & 536870912) === 0 || t !== Pt)) throw ya = Mr, Qo;
                e.flags |= 8192;
            }
        }
        function $u(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Pf() : 536870912, e.lanes |= t, qn |= t);
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
        function H1(e, t, l) {
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
                    return xe(t), null;
                case 1:
                    return xe(t), null;
                case 3:
                    return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Xt(He), il(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (fa(t) ? Ft(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, qo())), xe(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (Ft(t), l !== null ? (xe(t), ud(t, l)) : (xe(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Ft(t), xe(t), ud(t, l)) : (xe(t), t.flags &= -16777217) : (e.memoizedProps !== n && Ft(t), xe(t), t.flags &= -16777217), null;
                case 27:
                    ru(t), l = ie.current;
                    var a = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(f(166));
                            return xe(t), null;
                        }
                        e = I.current, fa(t) ? zo(t) : (e = uh(a, n, l), t.stateNode = e, Ft(t));
                    }
                    return xe(t), null;
                case 5:
                    if (ru(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(f(166));
                            return xe(t), null;
                        }
                        if (e = I.current, fa(t)) zo(t);
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
                            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Wd(e.nodeValue, l)), e || Vl(t);
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
                        } else a = qo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                        if (!a) return t.flags & 256 ? (Jt(t), t) : (Jt(t), null);
                    }
                    if (Jt(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                        n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                        var i = null;
                        n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), $u(t, t.updateQueue), xe(t), null;
                case 4:
                    return il(), e === null && Uc(t.stateNode.containerInfo), xe(t), null;
                case 10:
                    return Xt(t.type), xe(t), null;
                case 19:
                    if (X(ke), a = t.memoizedState, a === null) return xe(t), null;
                    if (n = (t.flags & 128) !== 0, i = a.rendering, i === null) if (n) Oa(a, !1);
                    else {
                        if (Be !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (i = Yu(e), i !== null) {
                                for(t.flags |= 128, Oa(a, !1), e = i.updateQueue, t.updateQueue = e, $u(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)Uo(l, e), l = l.sibling;
                                return G(ke, ke.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && wt() > Iu && (t.flags |= 128, n = !0, Oa(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!n) if (e = Yu(i), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, $u(t, e), Oa(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ye) return xe(t), null;
                        } else 2 * wt() - a.renderingStartTime > Iu && l !== 536870912 && (t.flags |= 128, n = !0, Oa(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = wt(), t.sibling = null, e = ke.current, G(ke, n ? e & 1 | 2 : e & 1), t) : (xe(t), null);
                case 22:
                case 23:
                    return Jt(t), zr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), l = t.updateQueue, l !== null && $u(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && X(Jl), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Xt(He), xe(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(f(156, t.tag));
        }
        function k1(e, t) {
            switch(Er(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Xt(He), il(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return ru(t), null;
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
                    return Jt(t), zr(), e !== null && X(Jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Xt(He), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function id(e, t) {
            switch(Er(t), t.tag){
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
                    Jt(t), zr(), e !== null && X(Jl);
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
                Re(t, t.return, m);
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
                                } catch (z) {
                                    Re(a, g, z);
                                }
                            }
                        }
                        n = n.next;
                    }while (n !== i);
                }
            } catch (z) {
                Re(t, t.return, z);
            }
        }
        function rd(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    Zo(t, l);
                } catch (n) {
                    Re(e, e.return, n);
                }
            }
        }
        function cd(e, t, l) {
            l.props = Fl(e.type, e.memoizedProps), l.state = e.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (n) {
                Re(e, t, n);
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
                Re(e, t, a);
            }
        }
        function qt(e, t) {
            var l = e.ref, n = e.refCleanup;
            if (l !== null) if (typeof n == "function") try {
                n();
            } catch (a) {
                Re(e, t, a);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof l == "function") try {
                l(null);
            } catch (a) {
                Re(e, t, a);
            }
            else l.current = null;
        }
        function fd(e) {
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
                Re(e, e.return, a);
            }
        }
        function fc(e, t, l) {
            try {
                var n = e.stateNode;
                i0(n, e.type, l, t), n[at] = t;
            } catch (a) {
                Re(e, e.return, a);
            }
        }
        function od(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Al(e.type) || e.tag === 4;
        }
        function oc(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || od(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Al(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function sc(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ci));
            else if (n !== 4 && (n === 27 && Al(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(sc(e, t, l), e = e.sibling; e !== null;)sc(e, t, l), e = e.sibling;
        }
        function Fu(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (n !== 4 && (n === 27 && Al(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(Fu(e, t, l), e = e.sibling; e !== null;)Fu(e, t, l), e = e.sibling;
        }
        function sd(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var n = e.type, a = t.attributes; a.length;)t.removeAttributeNode(a[0]);
                Je(t, n, l), t[Ie] = e, t[at] = l;
            } catch (i) {
                Re(e, e.return, i);
            }
        }
        var Wt = !1, we = !1, dc = !1, dd = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
        function L1(e, t) {
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
                        var a = n.anchorOffset, i = n.focusNode;
                        n = n.focusOffset;
                        try {
                            l.nodeType, i.nodeType;
                        } catch  {
                            l = null;
                            break e;
                        }
                        var d = 0, m = -1, g = -1, M = 0, z = 0, H = e, C = null;
                        t: for(;;){
                            for(var D; H !== l || a !== 0 && H.nodeType !== 3 || (m = d + a), H !== i || n !== 0 && H.nodeType !== 3 || (g = d + n), H.nodeType === 3 && (d += H.nodeValue.length), (D = H.firstChild) !== null;)C = H, H = D;
                            for(;;){
                                if (H === e) break t;
                                if (C === l && ++M === a && (m = d), C === i && ++z === n && (g = d), (D = H.nextSibling) !== null) break;
                                H = C, C = H.parentNode;
                            }
                            H = D;
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
            for(qc = {
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
                                Re(l, l.return, ee);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) Lc(e);
                            else if (l === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Lc(e);
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
        function hd(e, t, l) {
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
                        Re(l, l.return, d);
                    }
                    else {
                        var a = Fl(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (d) {
                            Re(l, l.return, d);
                        }
                    }
                    n & 64 && rd(l), n & 512 && xa(l, l.return);
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
                            Zo(e, t);
                        } catch (d) {
                            Re(l, l.return, d);
                        }
                    }
                    break;
                case 27:
                    t === null && n & 4 && sd(l);
                case 26:
                case 5:
                    gl(e, l), t === null && n & 4 && fd(l), n & 512 && xa(l, l.return);
                    break;
                case 12:
                    gl(e, l);
                    break;
                case 13:
                    gl(e, l), n & 4 && yd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = J1.bind(null, l), h0(e, l))));
                    break;
                case 22:
                    if (n = l.memoizedState !== null || Wt, !n) {
                        t = t !== null && t.memoizedState !== null || we, a = Wt;
                        var i = we;
                        Wt = n, (we = t) && !i ? bl(e, l, (l.subtreeFlags & 8772) !== 0) : gl(e, l), Wt = a, we = i;
                    }
                    break;
                case 30:
                    break;
                default:
                    gl(e, l);
            }
        }
        function pd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, pd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Yi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Ne = null, rt = !1;
        function It(e, t, l) {
            for(l = l.child; l !== null;)md(e, t, l), l = l.sibling;
        }
        function md(e, t, l) {
            if (st && typeof st.onCommitFiberUnmount == "function") try {
                st.onCommitFiberUnmount(Jn, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    we || qt(l, t), It(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    we || qt(l, t);
                    var n = Ne, a = rt;
                    Al(l.type) && (Ne = l.stateNode, rt = !1), It(e, t, l), qa(l.stateNode), Ne = n, rt = a;
                    break;
                case 5:
                    we || qt(l, t);
                case 6:
                    if (n = Ne, a = rt, Ne = null, It(e, t, l), Ne = n, rt = a, Ne !== null) if (rt) try {
                        (Ne.nodeType === 9 ? Ne.body : Ne.nodeName === "HTML" ? Ne.ownerDocument.body : Ne).removeChild(l.stateNode);
                    } catch (i) {
                        Re(l, t, i);
                    }
                    else try {
                        Ne.removeChild(l.stateNode);
                    } catch (i) {
                        Re(l, t, i);
                    }
                    break;
                case 18:
                    Ne !== null && (rt ? (e = Ne, nh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ya(e)) : nh(Ne, l.stateNode));
                    break;
                case 4:
                    n = Ne, a = rt, Ne = l.stateNode.containerInfo, rt = !0, It(e, t, l), Ne = n, rt = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    we || vl(2, l, t), we || vl(4, l, t), It(e, t, l);
                    break;
                case 1:
                    we || (qt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && cd(l, t, n)), It(e, t, l);
                    break;
                case 21:
                    It(e, t, l);
                    break;
                case 22:
                    we = (n = we) || l.memoizedState !== null, It(e, t, l), we = n;
                    break;
                default:
                    It(e, t, l);
            }
        }
        function yd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Ya(e);
            } catch (l) {
                Re(t, t.return, l);
            }
        }
        function j1(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new dd), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new dd), t;
                default:
                    throw Error(f(435, e.tag));
            }
        }
        function hc(e, t) {
            var l = j1(e);
            t.forEach(function(n) {
                var a = $1.bind(null, e, n);
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
                md(i, d, a), Ne = null, rt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)vd(t, e), t = t.sibling;
        }
        var Dt = null;
        function vd(e, t) {
            var l = e.alternate, n = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    mt(t, e), yt(e), n & 4 && (vl(3, e, e.return), Na(3, e), vl(5, e, e.return));
                    break;
                case 1:
                    mt(t, e), yt(e), n & 512 && (we || l === null || qt(l, l.return)), n & 64 && Wt && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                    break;
                case 26:
                    var a = Dt;
                    if (mt(t, e), yt(e), n & 512 && (we || l === null || qt(l, l.return)), n & 4) {
                        var i = l !== null ? l.memoizedState : null;
                        if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
                            e: {
                                n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                                t: switch(n){
                                    case "title":
                                        i = a.getElementsByTagName("title")[0], (!i || i[Wn] || i[Ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(i, a.querySelector("head > title"))), Je(i, n, l), i[Ie] = e, Qe(i), n = i;
                                        break e;
                                    case "link":
                                        var d = sh("link", "href", a).get(n + (l.href || ""));
                                        if (d) {
                                            for(var m = 0; m < d.length; m++)if (i = d[m], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                d.splice(m, 1);
                                                break t;
                                            }
                                        }
                                        i = a.createElement(n), Je(i, n, l), a.head.appendChild(i);
                                        break;
                                    case "meta":
                                        if (d = sh("meta", "content", a).get(n + (l.content || ""))) {
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
                        } else dh(a, e.type, e.stateNode);
                        else e.stateNode = oh(a, n, e.memoizedProps);
                        else i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? dh(a, e.type, e.stateNode) : oh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && fc(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    mt(t, e), yt(e), n & 512 && (we || l === null || qt(l, l.return)), l !== null && n & 4 && fc(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (mt(t, e), yt(e), n & 512 && (we || l === null || qt(l, l.return)), e.flags & 32) {
                        a = e.stateNode;
                        try {
                            mn(a, "");
                        } catch (D) {
                            Re(e, e.return, D);
                        }
                    }
                    n & 4 && e.stateNode != null && (a = e.memoizedProps, fc(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (dc = !0);
                    break;
                case 6:
                    if (mt(t, e), yt(e), n & 4) {
                        if (e.stateNode === null) throw Error(f(162));
                        n = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = n;
                        } catch (D) {
                            Re(e, e.return, D);
                        }
                    }
                    break;
                case 3:
                    if (di = null, a = Dt, Dt = oi(t.containerInfo), mt(t, e), Dt = a, yt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Ya(t.containerInfo);
                    } catch (D) {
                        Re(e, e.return, D);
                    }
                    dc && (dc = !1, gd(e));
                    break;
                case 4:
                    n = Dt, Dt = oi(e.stateNode.containerInfo), mt(t, e), yt(e), Dt = n;
                    break;
                case 12:
                    mt(t, e), yt(e);
                    break;
                case 13:
                    mt(t, e), yt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (bc = wt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, hc(e, n)));
                    break;
                case 22:
                    a = e.memoizedState !== null;
                    var g = l !== null && l.memoizedState !== null, M = Wt, z = we;
                    if (Wt = M || a, we = z || g, mt(t, e), we = z, Wt = M, yt(e), n & 8192) e: for(t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || g || Wt || we || Wl(e)), l = null, t = e;;){
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
                                } catch (D) {
                                    Re(g, g.return, D);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                g = t;
                                try {
                                    g.stateNode.nodeValue = a ? "" : g.memoizedProps;
                                } catch (D) {
                                    Re(g, g.return, D);
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
                    if (l == null) throw Error(f(160));
                    switch(l.tag){
                        case 27:
                            var a = l.stateNode, i = oc(e);
                            Fu(e, i, a);
                            break;
                        case 5:
                            var d = l.stateNode;
                            l.flags & 32 && (mn(d, ""), l.flags &= -33);
                            var m = oc(e);
                            Fu(e, m, d);
                            break;
                        case 3:
                        case 4:
                            var g = l.stateNode.containerInfo, M = oc(e);
                            sc(e, M, g);
                            break;
                        default:
                            throw Error(f(161));
                    }
                } catch (z) {
                    Re(e, e.return, z);
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
        function gl(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)hd(e, t.alternate, t), t = t.sibling;
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
                        typeof l.componentWillUnmount == "function" && cd(t, t.return, l), Wl(t);
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
                            Re(n, n.return, M);
                        }
                        if (n = i, a = n.updateQueue, a !== null) {
                            var m = n.stateNode;
                            try {
                                var g = a.shared.hiddenCallbacks;
                                if (g !== null) for(a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++)Xo(g[a], m);
                            } catch (M) {
                                Re(n, n.return, M);
                            }
                        }
                        l && d & 64 && rd(i), xa(i, i.return);
                        break;
                    case 27:
                        sd(i);
                    case 26:
                    case 5:
                        bl(a, i, l), l && n === null && d & 4 && fd(i), xa(i, i.return);
                        break;
                    case 12:
                        bl(a, i, l);
                        break;
                    case 13:
                        bl(a, i, l), l && d & 4 && yd(a, i);
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
        function pc(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ha(l));
        }
        function mc(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ha(e));
        }
        function Ht(e, t, l, n) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)bd(e, t, l, n), t = t.sibling;
        }
        function bd(e, t, l, n) {
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
                            Re(t, t.return, g);
                        }
                    } else Ht(e, t, l, n);
                    break;
                case 13:
                    Ht(e, t, l, n);
                    break;
                case 23:
                    break;
                case 22:
                    i = t.stateNode, d = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Ht(e, t, l, n) : Ma(e, t) : i._visibility & 2 ? Ht(e, t, l, n) : (i._visibility |= 2, wn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && pc(d, t);
                    break;
                case 24:
                    Ht(e, t, l, n), a & 2048 && mc(t.alternate, t);
                    break;
                default:
                    Ht(e, t, l, n);
            }
        }
        function wn(e, t, l, n, a) {
            for(a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var i = e, d = t, m = l, g = n, M = d.flags;
                switch(d.tag){
                    case 0:
                    case 11:
                    case 15:
                        wn(i, d, m, g, a), Na(8, d);
                        break;
                    case 23:
                        break;
                    case 22:
                        var z = d.stateNode;
                        d.memoizedState !== null ? z._visibility & 2 ? wn(i, d, m, g, a) : Ma(i, d) : (z._visibility |= 2, wn(i, d, m, g, a)), a && M & 2048 && pc(d.alternate, d);
                        break;
                    case 24:
                        wn(i, d, m, g, a), a && M & 2048 && mc(d.alternate, d);
                        break;
                    default:
                        wn(i, d, m, g, a);
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
        function zn(e) {
            if (e.subtreeFlags & Ca) for(e = e.child; e !== null;)Sd(e), e = e.sibling;
        }
        function Sd(e) {
            switch(e.tag){
                case 26:
                    zn(e), e.flags & Ca && e.memoizedState !== null && O0(Dt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    zn(e);
                    break;
                case 3:
                case 4:
                    var t = Dt;
                    Dt = oi(e.stateNode.containerInfo), zn(e), Dt = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ca, Ca = 16777216, zn(e), Ca = t) : zn(e));
                    break;
                default:
                    zn(e);
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
        function Da(e) {
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
                    Ge = n, Td(n, e);
                }
                Ed(e);
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
        function Td(e, t) {
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
                    if (pd(n), n === l) {
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
        var Q1 = {
            getCacheForType: function(e) {
                var t = et(He), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, K1 = typeof WeakMap == "function" ? WeakMap : Map, ve = 0, Ae = null, se = null, he = 0, ge = 0, vt = null, Sl = !1, Pn = !1, yc = !1, el = 0, Be = 0, El = 0, Il = 0, vc = 0, Nt = 0, qn = 0, Ba = null, ct = null, gc = !1, bc = 0, Iu = 1 / 0, ei = null, _l = null, Ze = 0, Tl = null, Hn = null, kn = 0, Sc = 0, Ec = null, Rd = null, Ua = 0, _c = null;
        function gt() {
            if ((ve & 2) !== 0 && he !== 0) return he & -he;
            if (P.T !== null) {
                var e = On;
                return e !== 0 ? e : Mc();
            }
            return kf();
        }
        function Ad() {
            Nt === 0 && (Nt = (he & 536870912) === 0 || ye ? zf() : 536870912);
            var e = Ot.current;
            return e !== null && (e.flags |= 32), Nt;
        }
        function bt(e, t, l) {
            (e === Ae && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) && (Ln(e, 0), Rl(e, he, Nt, !1)), Fn(e, l), ((ve & 2) === 0 || e !== Ae) && (e === Ae && ((ve & 2) === 0 && (Il |= l), Be === 4 && Rl(e, he, Nt, !1)), kt(e));
        }
        function Od(e, t, l) {
            if ((ve & 6) !== 0) throw Error(f(327));
            var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || $n(e, t), a = n ? V1(e, t) : Ac(e, t, !0), i = n;
            do {
                if (a === 0) {
                    Pn && !n && Rl(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, i && !G1(l)) {
                        a = Ac(e, t, !1), i = !1;
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
                                if (g && (Ln(m, d).flags |= 256), d = Ac(m, d, !1), d !== 2) {
                                    if (yc && !g) {
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
                        Ln(e, 0), Rl(e, t, 0, !0);
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
                                Rl(n, t, Nt, !Sl);
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
                        if ((t & 62914560) === t && (a = bc + 300 - wt(), 10 < a)) {
                            if (Rl(n, t, Nt, !Sl), su(n, 0, !0) !== 0) break e;
                            n.timeoutHandle = th(Nd.bind(null, n, l, ct, ei, gc, t, Nt, Il, qn, Sl, i, 2, -0, 0), a);
                            break e;
                        }
                        Nd(n, l, ct, ei, gc, t, Nt, Il, qn, Sl, i, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            kt(e);
        }
        function Nd(e, t, l, n, a, i, d, m, g, M, z, H, C, D) {
            if (e.timeoutHandle = -1, H = t.subtreeFlags, (H & 8192 || (H & 16785408) === 16785408) && (La = {
                stylesheets: null,
                count: 0,
                unsuspend: A0
            }, Sd(t), H = N0(), H !== null)) {
                e.cancelPendingCommit = H(wd.bind(null, e, t, i, l, n, a, d, m, g, z, 1, C, D)), Rl(e, i, d, !M);
                return;
            }
            wd(e, t, i, l, n, a, d, m, g);
        }
        function G1(e) {
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
        function Rl(e, t, l, n) {
            t &= ~vc, t &= ~Il, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
            for(var a = t; 0 < a;){
                var i = 31 - dt(a), d = 1 << i;
                n[i] = -1, a &= ~d;
            }
            l !== 0 && qf(e, l, t);
        }
        function ti() {
            return (ve & 6) === 0 ? (wa(0), !1) : !0;
        }
        function Tc() {
            if (se !== null) {
                if (ge === 0) var e = se.return;
                else e = se, Vt = Xl = null, Lr(e), Bn = null, Ra = 0, e = se;
                for(; e !== null;)id(e.alternate, e), e = e.return;
                se = null;
            }
        }
        function Ln(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, c0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Tc(), Ae = e, se = l = Kt(e.current, null), he = t, ge = 0, vt = null, Sl = !1, Pn = $n(e, t), yc = !1, qn = Nt = vc = Il = El = Be = 0, ct = Ba = null, gc = !1, (t & 8) !== 0 && (t |= t & 32);
            var n = e.entangledLanes;
            if (n !== 0) for(e = e.entanglements, n &= t; 0 < n;){
                var a = 31 - dt(n), i = 1 << a;
                t |= e[a], n &= ~i;
            }
            return el = t, Tu(), l;
        }
        function xd(e, t) {
            fe = null, P.H = Qu, t === ma || t === Bu ? (t = Yo(), ge = 3) : t === Qo ? (t = Yo(), ge = 4) : ge = t === Vs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, vt = t, se === null && (Be = 1, Xu(e, _t(t, e.current)));
        }
        function Md() {
            var e = P.H;
            return P.H = Qu, e === null ? Qu : e;
        }
        function Cd() {
            var e = P.A;
            return P.A = Q1, e;
        }
        function Rc() {
            Be = 4, Sl || (he & 4194048) !== he && Ot.current !== null || (Pn = !0), (El & 134217727) === 0 && (Il & 134217727) === 0 || Ae === null || Rl(Ae, he, Nt, !1);
        }
        function Ac(e, t, l) {
            var n = ve;
            ve |= 2;
            var a = Md(), i = Cd();
            (Ae !== e || he !== t) && (ei = null, Ln(e, t)), t = !1;
            var d = Be;
            e: do try {
                if (ge !== 0 && se !== null) {
                    var m = se, g = vt;
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
                            if (ge = 0, vt = null, jn(e, m, g, M), l && Pn) {
                                d = 0;
                                break e;
                            }
                            break;
                        default:
                            M = ge, ge = 0, vt = null, jn(e, m, g, M);
                    }
                }
                Y1(), d = Be;
                break;
            } catch (z) {
                xd(e, z);
            }
            while (!0);
            return t && e.shellSuspendCounter++, Vt = Xl = null, ve = n, P.H = a, P.A = i, se === null && (Ae = null, he = 0, Tu()), d;
        }
        function Y1() {
            for(; se !== null;)Dd(se);
        }
        function V1(e, t) {
            var l = ve;
            ve |= 2;
            var n = Md(), a = Cd();
            Ae !== e || he !== t ? (ei = null, Iu = wt() + 500, Ln(e, t)) : Pn = $n(e, t);
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
                            if (Ko(i)) {
                                ge = 0, vt = null, Bd(t);
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
                            Ko(i) ? (ge = 0, vt = null, Bd(t)) : (ge = 0, vt = null, jn(e, t, i, 7));
                            break;
                        case 5:
                            var d = null;
                            switch(se.tag){
                                case 26:
                                    d = se.memoizedState;
                                case 5:
                                case 27:
                                    var m = se;
                                    if (!d || hh(d)) {
                                        ge = 0, vt = null;
                                        var g = m.sibling;
                                        if (g !== null) se = g;
                                        else {
                                            var M = m.return;
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
                X1();
                break;
            } catch (z) {
                xd(e, z);
            }
            while (!0);
            return Vt = Xl = null, P.H = n, P.A = a, ve = l, se !== null ? 0 : (Ae = null, he = 0, Tu(), Be);
        }
        function X1() {
            for(; se !== null && !mm();)Dd(se);
        }
        function Dd(e) {
            var t = ad(e.alternate, e, el);
            e.memoizedProps = e.pendingProps, t === null ? li(e) : se = t;
        }
        function Bd(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Ws(l, t, t.pendingProps, t.type, void 0, he);
                    break;
                case 11:
                    t = Ws(l, t, t.pendingProps, t.type.render, t.ref, he);
                    break;
                case 5:
                    Lr(t);
                default:
                    id(l, t), t = se = Uo(t, el), t = ad(l, t, el);
            }
            e.memoizedProps = e.pendingProps, t === null ? li(e) : se = t;
        }
        function jn(e, t, l, n) {
            Vt = Xl = null, Lr(t), Bn = null, Ra = 0;
            var a = t.return;
            try {
                if (P1(e, a, t, l, he)) {
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
                var l = H1(t.alternate, t, el);
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
                var l = k1(e.alternate, e);
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
            do ni();
            while (Ze !== 0);
            if ((ve & 6) !== 0) throw Error(f(327));
            if (t !== null) {
                if (t === e.current) throw Error(f(177));
                if (i = t.lanes | t.childLanes, i |= mr, Am(e, l, i, d, m, g), e === Ae && (se = Ae = null, he = 0), Hn = t, Tl = e, kn = l, Sc = i, Ec = a, Rd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, F1(cu, function() {
                    return kd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                    n = P.T, P.T = null, a = Y.p, Y.p = 2, d = ve, ve |= 4;
                    try {
                        L1(e, t, l);
                    } finally{
                        ve = d, Y.p = a, P.T = n;
                    }
                }
                Ze = 1, zd(), Pd(), qd();
            }
        }
        function zd() {
            if (Ze === 1) {
                Ze = 0;
                var e = Tl, t = Hn, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = P.T, P.T = null;
                    var n = Y.p;
                    Y.p = 2;
                    var a = ve;
                    ve |= 4;
                    try {
                        vd(t, e);
                        var i = qc, d = To(e.containerInfo), m = i.focusedElem, g = i.selectionRange;
                        if (d !== m && m && m.ownerDocument && _o(m.ownerDocument.documentElement, m)) {
                            if (g !== null && or(m)) {
                                var M = g.start, z = g.end;
                                if (z === void 0 && (z = M), "selectionStart" in m) m.selectionStart = M, m.selectionEnd = Math.min(z, m.value.length);
                                else {
                                    var H = m.ownerDocument || document, C = H && H.defaultView || window;
                                    if (C.getSelection) {
                                        var D = C.getSelection(), ae = m.textContent.length, ee = Math.min(g.start, ae), Ee = g.end === void 0 ? ee : Math.min(g.end, ae);
                                        !D.extend && ee > Ee && (d = Ee, Ee = ee, ee = d);
                                        var R = Eo(m, ee), _ = Eo(m, Ee);
                                        if (R && _ && (D.rangeCount !== 1 || D.anchorNode !== R.node || D.anchorOffset !== R.offset || D.focusNode !== _.node || D.focusOffset !== _.offset)) {
                                            var x = H.createRange();
                                            x.setStart(R.node, R.offset), D.removeAllRanges(), ee > Ee ? (D.addRange(x), D.extend(_.node, _.offset)) : (x.setEnd(_.node, _.offset), D.addRange(x));
                                        }
                                    }
                                }
                            }
                            for(H = [], D = m; D = D.parentNode;)D.nodeType === 1 && H.push({
                                element: D,
                                left: D.scrollLeft,
                                top: D.scrollTop
                            });
                            for(typeof m.focus == "function" && m.focus(), m = 0; m < H.length; m++){
                                var q = H[m];
                                q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
                            }
                        }
                        mi = !!Pc, qc = Pc = null;
                    } finally{
                        ve = a, Y.p = n, P.T = l;
                    }
                }
                e.current = t, Ze = 2;
            }
        }
        function Pd() {
            if (Ze === 2) {
                Ze = 0;
                var e = Tl, t = Hn, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = P.T, P.T = null;
                    var n = Y.p;
                    Y.p = 2;
                    var a = ve;
                    ve |= 4;
                    try {
                        hd(e, t.alternate, t);
                    } finally{
                        ve = a, Y.p = n, P.T = l;
                    }
                }
                Ze = 3;
            }
        }
        function qd() {
            if (Ze === 4 || Ze === 3) {
                Ze = 0, ym();
                var e = Tl, t = Hn, l = kn, n = Rd;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ze = 5 : (Ze = 0, Hn = Tl = null, Hd(e, e.pendingLanes));
                var a = e.pendingLanes;
                if (a === 0 && (_l = null), Ki(l), t = t.stateNode, st && typeof st.onCommitFiberRoot == "function") try {
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
                (kn & 3) !== 0 && ni(), kt(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === _c ? Ua++ : (Ua = 0, _c = e) : Ua = 0, wa(0);
            }
        }
        function Hd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ha(t)));
        }
        function ni(e) {
            return zd(), Pd(), qd(), kd();
        }
        function kd() {
            if (Ze !== 5) return !1;
            var e = Tl, t = Sc;
            Sc = 0;
            var l = Ki(kn), n = P.T, a = Y.p;
            try {
                Y.p = 32 > l ? 32 : l, P.T = null, l = Ec, Ec = null;
                var i = Tl, d = kn;
                if (Ze = 0, Hn = Tl = null, kn = 0, (ve & 6) !== 0) throw Error(f(331));
                var m = ve;
                if (ve |= 4, _d(i.current), bd(i, i.current, d, l), ve = m, wa(0, !1), st && typeof st.onPostCommitFiberRoot == "function") try {
                    st.onPostCommitFiberRoot(Jn, i);
                } catch  {}
                return !0;
            } finally{
                Y.p = a, P.T = n, Hd(e, t);
            }
        }
        function Ld(e, t, l) {
            t = _t(l, t), t = ec(e.stateNode, t, 2), e = hl(e, t, 2), e !== null && (Fn(e, 2), kt(e));
        }
        function Re(e, t, l) {
            if (e.tag === 3) Ld(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Ld(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (_l === null || !_l.has(n))) {
                        e = _t(l, e), l = Gs(2), n = hl(t, l, 2), n !== null && (Ys(l, n, t, e), Fn(n, 2), kt(n));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Oc(e, t, l) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new K1;
                var a = new Set;
                n.set(t, a);
            } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
            a.has(l) || (yc = !0, a.add(l), e = Z1.bind(null, e, t, l), t.then(e, e));
        }
        function Z1(e, t, l) {
            var n = e.pingCache;
            n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ae === e && (he & l) === l && (Be === 4 || Be === 3 && (he & 62914560) === he && 300 > wt() - bc ? (ve & 2) === 0 && Ln(e, 0) : vc |= l, qn === he && (qn = 0)), kt(e);
        }
        function jd(e, t) {
            t === 0 && (t = Pf()), e = _n(e, t), e !== null && (Fn(e, t), kt(e));
        }
        function J1(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), jd(e, l);
        }
        function $1(e, t) {
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
            n !== null && n.delete(t), jd(e, l);
        }
        function F1(e, t) {
            return ki(e, t);
        }
        var ai = null, Qn = null, Nc = !1, ui = !1, xc = !1, en = 0;
        function kt(e) {
            e !== Qn && e.next === null && (Qn === null ? ai = Qn = e : Qn = Qn.next = e), ui = !0, Nc || (Nc = !0, I1());
        }
        function wa(e, t) {
            if (!xc && ui) {
                xc = !0;
                do for(var l = !1, n = ai; n !== null;){
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var i = 0;
                        else {
                            var d = n.suspendedLanes, m = n.pingedLanes;
                            i = (1 << 31 - dt(42 | e) + 1) - 1, i &= a & ~(d & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                        }
                        i !== 0 && (l = !0, Yd(n, i));
                    } else i = he, i = su(n, n === Ae ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (i & 3) === 0 || $n(n, i) || (l = !0, Yd(n, i));
                    n = n.next;
                }
                while (l);
                xc = !1;
            }
        }
        function W1() {
            Qd();
        }
        function Qd() {
            ui = Nc = !1;
            var e = 0;
            en !== 0 && (r0() && (e = en), en = 0);
            for(var t = wt(), l = null, n = ai; n !== null;){
                var a = n.next, i = Kd(n, t);
                i === 0 ? (n.next = null, l === null ? ai = a : l.next = a, a === null && (Qn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ui = !0)), n = a;
            }
            wa(e);
        }
        function Kd(e, t) {
            for(var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;){
                var d = 31 - dt(i), m = 1 << d, g = a[d];
                g === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[d] = Rm(m, t)) : g <= t && (e.expiredLanes |= m), i &= ~m;
            }
            if (t = Ae, l = he, l = su(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && Li(n), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || $n(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(n !== null && Li(n), Ki(l)){
                    case 2:
                    case 8:
                        l = Uf;
                        break;
                    case 32:
                        l = cu;
                        break;
                    case 268435456:
                        l = wf;
                        break;
                    default:
                        l = cu;
                }
                return n = Gd.bind(null, e), l = ki(l, n), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return n !== null && n !== null && Li(n), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Gd(e, t) {
            if (Ze !== 0 && Ze !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (ni() && e.callbackNode !== l) return null;
            var n = he;
            return n = su(e, e === Ae ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (Od(e, n, t), Kd(e, wt()), e.callbackNode != null && e.callbackNode === l ? Gd.bind(null, e) : null);
        }
        function Yd(e, t) {
            if (ni()) return null;
            Od(e, t, !0);
        }
        function I1() {
            f0(function() {
                (ve & 6) !== 0 ? ki(Bf, W1) : Qd();
            });
        }
        function Mc() {
            return en === 0 && (en = zf()), en;
        }
        function Vd(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yu("" + e);
        }
        function Xd(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function e0(e, t, l, n, a) {
            if (t === "submit" && l && l.stateNode === a) {
                var i = Vd((a[at] || null).action), d = n.submitter;
                d && (t = (t = d[at] || null) ? Vd(t.formAction) : d.getAttribute("formAction"), t !== null && (i = t, d = null));
                var m = new Su("action", "action", null, n, a);
                e.push({
                    event: m,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (en !== 0) {
                                        var g = d ? Xd(a, d) : new FormData(a);
                                        Jr(l, {
                                            pending: !0,
                                            data: g,
                                            method: a.method,
                                            action: i
                                        }, null, g);
                                    }
                                } else typeof i == "function" && (m.preventDefault(), g = d ? Xd(a, d) : new FormData(a), Jr(l, {
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
        for(var Cc = 0; Cc < pr.length; Cc++){
            var Dc = pr[Cc], t0 = Dc.toLowerCase(), l0 = Dc[0].toUpperCase() + Dc.slice(1);
            Ct(t0, "on" + l0);
        }
        Ct(Oo, "onAnimationEnd"), Ct(No, "onAnimationIteration"), Ct(xo, "onAnimationStart"), Ct("dblclick", "onDoubleClick"), Ct("focusin", "onFocus"), Ct("focusout", "onBlur"), Ct(b1, "onTransitionRun"), Ct(S1, "onTransitionStart"), Ct(E1, "onTransitionCancel"), Ct(Mo, "onTransitionEnd"), dn("onMouseEnter", [
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
        var za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), n0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(za));
        function Zd(e, t) {
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
                        } catch (z) {
                            Vu(z);
                        }
                        a.currentTarget = null, i = g;
                    }
                    else for(d = 0; d < n.length; d++){
                        if (m = n[d], g = m.instance, M = m.currentTarget, m = m.listener, g !== i && a.isPropagationStopped()) break e;
                        i = m, a.currentTarget = M;
                        try {
                            i(a);
                        } catch (z) {
                            Vu(z);
                        }
                        a.currentTarget = null, i = g;
                    }
                }
            }
        }
        function de(e, t) {
            var l = t[Gi];
            l === void 0 && (l = t[Gi] = new Set);
            var n = e + "__bubble";
            l.has(n) || (Jd(t, e, 2, !1), l.add(n));
        }
        function Bc(e, t, l) {
            var n = 0;
            t && (n |= 4), Jd(l, e, n, t);
        }
        var ii = "_reactListening" + Math.random().toString(36).slice(2);
        function Uc(e) {
            if (!e[ii]) {
                e[ii] = !0, jf.forEach(function(l) {
                    l !== "selectionchange" && (n0.has(l) || Bc(l, !1, e), Bc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[ii] || (t[ii] = !0, Bc("selectionchange", !1, t));
            }
        }
        function Jd(e, t, l, n) {
            switch(bh(t)){
                case 2:
                    var a = C0;
                    break;
                case 8:
                    a = D0;
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
        function wc(e, t, l, n, a) {
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
            to(function() {
                var M = i, z = Ii(l), H = [];
                e: {
                    var C = Co.get(e);
                    if (C !== void 0) {
                        var D = Su, ae = e;
                        switch(e){
                            case "keypress":
                                if (gu(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                D = Fm;
                                break;
                            case "focusin":
                                ae = "focus", D = ur;
                                break;
                            case "focusout":
                                ae = "blur", D = ur;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                D = ur;
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
                                D = ao;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                D = km;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                D = e1;
                                break;
                            case Oo:
                            case No:
                            case xo:
                                D = Qm;
                                break;
                            case Mo:
                                D = l1;
                                break;
                            case "scroll":
                            case "scrollend":
                                D = qm;
                                break;
                            case "wheel":
                                D = a1;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                D = Gm;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                D = io;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                D = i1;
                        }
                        var ee = (t & 4) !== 0, Ee = !ee && (e === "scroll" || e === "scrollend"), R = ee ? C !== null ? C + "Capture" : null : C;
                        ee = [];
                        for(var _ = M, x; _ !== null;){
                            var q = _;
                            if (x = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || x === null || R === null || (q = ea(_, R), q != null && ee.push(Pa(_, q, x))), Ee) break;
                            _ = _.return;
                        }
                        0 < ee.length && (C = new D(C, ae, null, l, z), H.push({
                            event: C,
                            listeners: ee
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (C = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", C && l !== Wi && (ae = l.relatedTarget || l.fromElement) && (fn(ae) || ae[cn])) break e;
                        if ((D || C) && (C = z.window === z ? z : (C = z.ownerDocument) ? C.defaultView || C.parentWindow : window, D ? (ae = l.relatedTarget || l.toElement, D = M, ae = ae ? fn(ae) : null, ae !== null && (Ee = s(ae), ee = ae.tag, ae !== Ee || ee !== 5 && ee !== 27 && ee !== 6) && (ae = null)) : (D = null, ae = M), D !== ae)) {
                            if (ee = ao, q = "onMouseLeave", R = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (ee = io, q = "onPointerLeave", R = "onPointerEnter", _ = "pointer"), Ee = D == null ? C : In(D), x = ae == null ? C : In(ae), C = new ee(q, _ + "leave", D, l, z), C.target = Ee, C.relatedTarget = x, q = null, fn(z) === M && (ee = new ee(R, _ + "enter", ae, l, z), ee.target = x, ee.relatedTarget = Ee, q = ee), Ee = q, D && ae) t: {
                                for(ee = D, R = ae, _ = 0, x = ee; x; x = Kn(x))_++;
                                for(x = 0, q = R; q; q = Kn(q))x++;
                                for(; 0 < _ - x;)ee = Kn(ee), _--;
                                for(; 0 < x - _;)R = Kn(R), x--;
                                for(; _--;){
                                    if (ee === R || R !== null && ee === R.alternate) break t;
                                    ee = Kn(ee), R = Kn(R);
                                }
                                ee = null;
                            }
                            else ee = null;
                            D !== null && $d(H, C, D, ee, !1), ae !== null && Ee !== null && $d(H, Ee, ae, ee, !0);
                        }
                    }
                    e: {
                        if (C = M ? In(M) : window, D = C.nodeName && C.nodeName.toLowerCase(), D === "select" || D === "input" && C.type === "file") var Z = mo;
                        else if (ho(C)) if (yo) Z = y1;
                        else {
                            Z = p1;
                            var oe = h1;
                        }
                        else D = C.nodeName, !D || D.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? M && Fi(M.elementType) && (Z = mo) : Z = m1;
                        if (Z && (Z = Z(e, M))) {
                            po(H, Z, l, z);
                            break e;
                        }
                        oe && oe(e, C, M), e === "focusout" && M && C.type === "number" && M.memoizedProps.value != null && $i(C, "number", C.value);
                    }
                    switch(oe = M ? In(M) : window, e){
                        case "focusin":
                            (ho(oe) || oe.contentEditable === "true") && (bn = oe, sr = M, ca = null);
                            break;
                        case "focusout":
                            ca = sr = bn = null;
                            break;
                        case "mousedown":
                            dr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            dr = !1, Ro(H, l, z);
                            break;
                        case "selectionchange":
                            if (g1) break;
                        case "keydown":
                        case "keyup":
                            Ro(H, l, z);
                    }
                    var F;
                    if (rr) e: {
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
                    else gn ? oo(e, l) && (te = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (te = "onCompositionStart");
                    te && (ro && l.locale !== "ko" && (gn || te !== "onCompositionStart" ? te === "onCompositionEnd" && gn && (F = lo()) : (fl = z, lr = "value" in fl ? fl.value : fl.textContent, gn = !0)), oe = ri(M, te), 0 < oe.length && (te = new uo(te, e, null, l, z), H.push({
                        event: te,
                        listeners: oe
                    }), F ? te.data = F : (F = so(l), F !== null && (te.data = F)))), (F = c1 ? f1(e, l) : o1(e, l)) && (te = ri(M, "onBeforeInput"), 0 < te.length && (oe = new uo("onBeforeInput", "beforeinput", null, l, z), H.push({
                        event: oe,
                        listeners: te
                    }), oe.data = F)), e0(H, e, M, l, z);
                }
                Zd(H, t);
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
        function $d(e, t, l, n, a) {
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
        var a0 = /\r\n?/g, u0 = /\u0000|\uFFFD/g;
        function Fd(e) {
            return (typeof e == "string" ? e : "" + e).replace(a0, `
`).replace(u0, "");
        }
        function Wd(e, t) {
            return t = Fd(t), Fd(e) === t;
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
                    If(e, n, i);
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
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = zm.get(l) || l, du(e, l, n));
            }
        }
        function zc(e, t, l, n, a, i) {
            switch(l){
                case "style":
                    If(e, n, i);
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
                    if (!Qf.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[at] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
                            typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
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
                        var z = l[n];
                        if (z != null) switch(n){
                            case "name":
                                a = z;
                                break;
                            case "type":
                                d = z;
                                break;
                            case "checked":
                                g = z;
                                break;
                            case "defaultChecked":
                                M = z;
                                break;
                            case "value":
                                i = z;
                                break;
                            case "defaultValue":
                                m = z;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (z != null) throw Error(f(137, t));
                                break;
                            default:
                                Se(e, t, n, z, l, null);
                        }
                    }
                    Jf(e, i, m, g, M, d, a, !1), pu(e);
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
                    Ff(e, n, a, i), pu(e);
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
                    for(n = 0; n < za.length; n++)de(za[n], e);
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
                    if (Fi(t)) {
                        for(z in l)l.hasOwnProperty(z) && (n = l[z], n !== void 0 && zc(e, t, z, n, l, void 0));
                        return;
                    }
            }
            for(m in l)l.hasOwnProperty(m) && (n = l[m], n != null && Se(e, t, m, n, l, null));
        }
        function i0(e, t, l, n) {
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
                    var a = null, i = null, d = null, m = null, g = null, M = null, z = null;
                    for(D in l){
                        var H = l[D];
                        if (l.hasOwnProperty(D) && H != null) switch(D){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                g = H;
                            default:
                                n.hasOwnProperty(D) || Se(e, t, D, null, n, H);
                        }
                    }
                    for(var C in n){
                        var D = n[C];
                        if (H = l[C], n.hasOwnProperty(C) && (D != null || H != null)) switch(C){
                            case "type":
                                i = D;
                                break;
                            case "name":
                                a = D;
                                break;
                            case "checked":
                                M = D;
                                break;
                            case "defaultChecked":
                                z = D;
                                break;
                            case "value":
                                d = D;
                                break;
                            case "defaultValue":
                                m = D;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (D != null) throw Error(f(137, t));
                                break;
                            default:
                                D !== H && Se(e, t, C, D, n, H);
                        }
                    }
                    Ji(e, d, m, g, M, z, i, a);
                    return;
                case "select":
                    D = d = m = C = null;
                    for(i in l)if (g = l[i], l.hasOwnProperty(i) && g != null) switch(i){
                        case "value":
                            break;
                        case "multiple":
                            D = g;
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
                    t = m, l = d, n = D, C != null ? pn(e, !!l, C, !1) : !!n != !!l && (t != null ? pn(e, !!l, t, !0) : pn(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    D = C = null;
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
                            D = a;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (a != null) throw Error(f(91));
                            break;
                        default:
                            a !== i && Se(e, t, d, a, n, i);
                    }
                    $f(e, C, D);
                    return;
                case "option":
                    for(var ae in l)if (C = l[ae], l.hasOwnProperty(ae) && C != null && !n.hasOwnProperty(ae)) switch(ae){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Se(e, t, ae, null, n, C);
                    }
                    for(g in n)if (C = n[g], D = l[g], n.hasOwnProperty(g) && C !== D && (C != null || D != null)) switch(g){
                        case "selected":
                            e.selected = C && typeof C != "function" && typeof C != "symbol";
                            break;
                        default:
                            Se(e, t, g, C, n, D);
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
                    for(M in n)if (C = n[M], D = l[M], n.hasOwnProperty(M) && C !== D && (C != null || D != null)) switch(M){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (C != null) throw Error(f(137, t));
                            break;
                        default:
                            Se(e, t, M, C, n, D);
                    }
                    return;
                default:
                    if (Fi(t)) {
                        for(var Ee in l)C = l[Ee], l.hasOwnProperty(Ee) && C !== void 0 && !n.hasOwnProperty(Ee) && zc(e, t, Ee, void 0, n, C);
                        for(z in n)C = n[z], D = l[z], !n.hasOwnProperty(z) || C === D || C === void 0 && D === void 0 || zc(e, t, z, C, n, D);
                        return;
                    }
            }
            for(var R in l)C = l[R], l.hasOwnProperty(R) && C != null && !n.hasOwnProperty(R) && Se(e, t, R, null, n, C);
            for(H in n)C = n[H], D = l[H], !n.hasOwnProperty(H) || C === D || C == null && D == null || Se(e, t, H, C, n, D);
        }
        var Pc = null, qc = null;
        function fi(e) {
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
        function Hc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var kc = null;
        function r0() {
            var e = window.event;
            return e && e.type === "popstate" ? e === kc ? !1 : (kc = e, !0) : (kc = null, !1);
        }
        var th = typeof setTimeout == "function" ? setTimeout : void 0, c0 = typeof clearTimeout == "function" ? clearTimeout : void 0, lh = typeof Promise == "function" ? Promise : void 0, f0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof lh < "u" ? function(e) {
            return lh.resolve(null).then(e).catch(o0);
        } : th;
        function o0(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Al(e) {
            return e === "head";
        }
        function nh(e, t) {
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
        function Lc(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var l = t;
                switch(t = t.nextSibling, l.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        Lc(l), Yi(l);
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
        function s0(e, t, l, n) {
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
        function d0(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
            return e;
        }
        function jc(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function h0(e, t) {
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
            Yi(e);
        }
        var xt = new Map, ih = new Set;
        function oi(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var tl = Y.d;
        Y.d = {
            f: p0,
            r: m0,
            D: y0,
            C: v0,
            L: g0,
            m: b0,
            X: E0,
            S: S0,
            M: _0
        };
        function p0() {
            var e = tl.f(), t = ti();
            return e || t;
        }
        function m0(e) {
            var t = on(e);
            t !== null && t.tag === 5 && t.type === "form" ? Os(t) : tl.r(e);
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
                }, n.querySelector(a) === null && (t = n.createElement("link"), Je(t, "link", e), Qe(t), n.head.appendChild(t)));
            }
        }
        function y0(e) {
            tl.D(e), rh("dns-prefetch", e, null);
        }
        function v0(e, t) {
            tl.C(e, t), rh("preconnect", e, t);
        }
        function g0(e, t, l) {
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
                xt.has(i) || (e = S({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), xt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Ha(i)) || t === "script" && n.querySelector(ka(i)) || (t = n.createElement("link"), Je(t, "link", e), Qe(t), n.head.appendChild(t)));
            }
        }
        function b0(e, t) {
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
                if (!xt.has(i) && (e = S({
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
        function S0(e, t, l) {
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
                        e = S({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = xt.get(i)) && Kc(e, l);
                        var g = d = n.createElement("link");
                        Qe(g), Je(g, "link", e), g._p = new Promise(function(M, z) {
                            g.onload = M, g.onerror = z;
                        }), g.addEventListener("load", function() {
                            m.loading |= 1;
                        }), g.addEventListener("error", function() {
                            m.loading |= 2;
                        }), m.loading |= 4, si(d, t, n);
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
        function E0(e, t) {
            tl.X(e, t);
            var l = Gn;
            if (l && e) {
                var n = sn(l).hoistableScripts, a = Vn(e), i = n.get(a);
                i || (i = l.querySelector(ka(a)), i || (e = S({
                    src: e,
                    async: !0
                }, t), (t = xt.get(a)) && Gc(e, t), i = l.createElement("script"), Qe(i), Je(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function _0(e, t) {
            tl.M(e, t);
            var l = Gn;
            if (l && e) {
                var n = sn(l).hoistableScripts, a = Vn(e), i = n.get(a);
                i || (i = l.querySelector(ka(a)), i || (e = S({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = xt.get(a)) && Gc(e, t), i = l.createElement("script"), Qe(i), Je(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function ch(e, t, l, n) {
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
                        }, xt.set(e, l), i || T0(a, e, l, d.state))), t && n === null) throw Error(f(528, ""));
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
        function fh(e) {
            return S({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function T0(e, t, l, n) {
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
        function oh(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var n = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
                    if (n) return t.instance = n, Qe(n), n;
                    var a = S({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return n = (e.ownerDocument || e).createElement("style"), Qe(n), Je(n, "style", a), si(n, l.precedence, e), t.instance = n;
                case "stylesheet":
                    a = Yn(l.href);
                    var i = e.querySelector(Ha(a));
                    if (i) return t.state.loading |= 4, t.instance = i, Qe(i), i;
                    n = fh(l), (a = xt.get(a)) && Kc(n, a), i = (e.ownerDocument || e).createElement("link"), Qe(i);
                    var d = i;
                    return d._p = new Promise(function(m, g) {
                        d.onload = m, d.onerror = g;
                    }), Je(i, "link", n), t.state.loading |= 4, si(i, l.precedence, e), t.instance = i;
                case "script":
                    return i = Vn(l.src), (a = e.querySelector(ka(i))) ? (t.instance = a, Qe(a), a) : (n = l, (a = xt.get(i)) && (n = S({}, l), Gc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Qe(a), Je(a, "link", n), e.head.appendChild(a), t.instance = a);
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
                var m = n[d];
                if (m.dataset.precedence === t) i = m;
                else if (i !== a) break;
            }
            i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
        }
        function Kc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Gc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var di = null;
        function sh(e, t, l) {
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
                    var m = n.get(d);
                    m ? m.push(i) : n.set(d, [
                        i
                    ]);
                }
            }
            return n;
        }
        function dh(e, t, l) {
            e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
        }
        function R0(e, t, l) {
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
        function A0() {}
        function O0(e, t, l) {
            if (La === null) throw Error(f(475));
            var n = La;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var a = Yn(l.href), i = e.querySelector(Ha(a));
                    if (i) {
                        e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = hi.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = i, Qe(i);
                        return;
                    }
                    i = e.ownerDocument || e, l = fh(l), (a = xt.get(a)) && Kc(l, a), i = i.createElement("link"), Qe(i);
                    var d = i;
                    d._p = new Promise(function(m, g) {
                        d.onload = m, d.onerror = g;
                    }), Je(i, "link", l), t.instance = i;
                }
                n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = hi.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function N0() {
            if (La === null) throw Error(f(475));
            var e = La;
            return e.stylesheets && e.count === 0 && Yc(e, e.stylesheets), 0 < e.count ? function(t) {
                var l = setTimeout(function() {
                    if (e.stylesheets && Yc(e, e.stylesheets), e.unsuspend) {
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
                if (this.stylesheets) Yc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var pi = null;
        function Yc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, pi = new Map, t.forEach(x0, e), pi = null, hi.call(e));
        }
        function x0(e, t) {
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
            $$typeof: L,
            Provider: null,
            Consumer: null,
            _currentValue: le,
            _currentValue2: le,
            _threadCount: 0
        };
        function M0(e, t, l, n, a, i, d, m) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ji(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ji(0), this.hiddenUpdates = ji(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map;
        }
        function ph(e, t, l, n, a, i, d, m, g, M, z, H) {
            return e = new M0(e, t, l, d, m, g, M, H), t = 1, i === !0 && (t |= 24), i = pt(3, null, null, t), e.current = i, i.stateNode = e, t = Or(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: t
            }, Cr(i), e;
        }
        function mh(e) {
            return e ? (e = Tn, e) : Tn;
        }
        function yh(e, t, l, n, a, i) {
            a = mh(a), n.context === null ? n.context = a : n.pendingContext = a, n = dl(t), n.payload = {
                element: l
            }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = hl(e, n, t), l !== null && (bt(l, e, t), va(l, e, t));
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
                var t = _n(e, 67108864);
                t !== null && bt(t, e, 67108864), Vc(e, 67108864);
            }
        }
        var mi = !0;
        function C0(e, t, l, n) {
            var a = P.T;
            P.T = null;
            var i = Y.p;
            try {
                Y.p = 2, Xc(e, t, l, n);
            } finally{
                Y.p = i, P.T = a;
            }
        }
        function D0(e, t, l, n) {
            var a = P.T;
            P.T = null;
            var i = Y.p;
            try {
                Y.p = 8, Xc(e, t, l, n);
            } finally{
                Y.p = i, P.T = a;
            }
        }
        function Xc(e, t, l, n) {
            if (mi) {
                var a = Zc(n);
                if (a === null) wc(e, t, n, yi, l), Sh(e, n);
                else if (U0(a, e, t, l, n)) n.stopPropagation();
                else if (Sh(e, n), t & 4 && -1 < B0.indexOf(e)) {
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
                                        kt(i), (ve & 6) === 0 && (Iu = wt() + 500, wa(0));
                                    }
                                }
                                break;
                            case 13:
                                m = _n(i, 2), m !== null && bt(m, i, 2), ti(), Vc(i, 2);
                        }
                        if (i = Zc(n), i === null && wc(e, t, n, yi, l), i === a) break;
                        a = i;
                    }
                    a !== null && n.stopPropagation();
                } else wc(e, t, n, null, l);
            }
        }
        function Zc(e) {
            return e = Ii(e), Jc(e);
        }
        var yi = null;
        function Jc(e) {
            if (yi = null, e = fn(e), e !== null) {
                var t = s(e);
                if (t === null) e = null;
                else {
                    var l = t.tag;
                    if (l === 13) {
                        if (e = y(t), e !== null) return e;
                        e = null;
                    } else if (l === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null;
                    } else t !== e && (e = null);
                }
            }
            return yi = e, null;
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
                    switch(vm()){
                        case Bf:
                            return 2;
                        case Uf:
                            return 8;
                        case cu:
                        case gm:
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
        var $c = !1, Ol = null, Nl = null, xl = null, Qa = new Map, Ka = new Map, Ml = [], B0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Sh(e, t) {
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
            }, t !== null && (t = on(t), t !== null && gh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
        }
        function U0(e, t, l, n, a) {
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
        function Eh(e) {
            var t = fn(e.target);
            if (t !== null) {
                var l = s(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = y(l), t !== null) {
                            e.blockedOn = t, Om(e.priority, function() {
                                if (l.tag === 13) {
                                    var n = gt();
                                    n = Qi(n);
                                    var a = _n(l, n);
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
        function vi(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var l = Zc(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var n = new l.constructor(l.type, l);
                    Wi = n, l.target.dispatchEvent(n), Wi = null;
                } else return t = on(l), t !== null && gh(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function _h(e, t, l) {
            vi(e) && l.delete(t);
        }
        function w0() {
            $c = !1, Ol !== null && vi(Ol) && (Ol = null), Nl !== null && vi(Nl) && (Nl = null), xl !== null && vi(xl) && (xl = null), Qa.forEach(_h), Ka.forEach(_h);
        }
        function gi(e, t) {
            e.blockedOn === t && (e.blockedOn = null, $c || ($c = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, w0)));
        }
        var bi = null;
        function Th(e) {
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
            for(; 0 < Ml.length && (l = Ml[0], l.blockedOn === null);)Eh(l), l.blockedOn === null && Ml.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(n = 0; n < l.length; n += 3){
                var a = l[n], i = l[n + 1], d = a[at] || null;
                if (typeof i == "function") d || Th(l);
                else if (d) {
                    var m = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (a = i, d = i[at] || null) m = d.formAction;
                        else if (Jc(a) !== null) continue;
                    } else m = d.action;
                    typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), Th(l);
                }
            }
        }
        function Fc(e) {
            this._internalRoot = e;
        }
        Si.prototype.render = Fc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(f(409));
            var l = t.current, n = gt();
            yh(l, n, e, t, null, null);
        }, Si.prototype.unmount = Fc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                yh(e.current, 2, null, e, null, null), ti(), t[cn] = null;
            }
        };
        function Si(e) {
            this._internalRoot = e;
        }
        Si.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = kf();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Ml.length && t !== 0 && t < Ml[l].priority; l++);
                Ml.splice(l, 0, e), l === 0 && Eh(e);
            }
        };
        var Rh = r.version;
        if (Rh !== "19.1.0") throw Error(f(527, Rh, "19.1.0"));
        Y.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
            return e = h(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var z0 = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: P,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Ei.isDisabled && Ei.supportsFiber) try {
                Jn = Ei.inject(z0), st = Ei;
            } catch  {}
        }
        return Xa.createRoot = function(e, t) {
            if (!o(e)) throw Error(f(299));
            var l = !1, n = "", a = Ls, i = js, d = Qs, m = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)), t = ph(e, 1, !1, null, null, l, n, a, i, d, m, null), e[cn] = t.current, Uc(e), new Fc(t);
        }, Xa.hydrateRoot = function(e, t, l) {
            if (!o(e)) throw Error(f(299));
            var n = !1, a = "", i = Ls, d = js, m = Qs, g = null, M = null;
            return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks), l.formState !== void 0 && (M = l.formState)), t = ph(e, 1, !0, t, l ?? null, n, a, i, d, m, g, M), t.context = mh(null), l = t.current, n = gt(), n = Qi(n), a = dl(n), a.callback = null, hl(l, a, n), l = n, t.current.lanes = l, Fn(t, l), kt(t), e[cn] = t.current, Uc(e), new Si(t);
        }, Xa.version = "19.1.0", Xa;
    }
    var wh;
    function Y0() {
        if (wh) return ef.exports;
        wh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), ef.exports = G0(), ef.exports;
    }
    var V0 = Y0(), af = {
        exports: {}
    }, uf = {};
    var zh;
    function X0() {
        if (zh) return uf;
        zh = 1;
        var u = wi();
        function r(h, v) {
            return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
        }
        var c = typeof Object.is == "function" ? Object.is : r, f = u.useSyncExternalStore, o = u.useRef, s = u.useEffect, y = u.useMemo, p = u.useDebugValue;
        return uf.useSyncExternalStoreWithSelector = function(h, v, S, T, b) {
            var A = o(null);
            if (A.current === null) {
                var N = {
                    hasValue: !1,
                    value: null
                };
                A.current = N;
            } else N = A.current;
            A = y(function() {
                function w(K) {
                    if (!U) {
                        if (U = !0, j = K, K = T(K), b !== void 0 && N.hasValue) {
                            var W = N.value;
                            if (b(W, K)) return L = W;
                        }
                        return L = K;
                    }
                    if (W = L, c(j, K)) return W;
                    var J = T(K);
                    return b !== void 0 && b(W, J) ? (j = K, W) : (j = K, L = J);
                }
                var U = !1, j, L, V = S === void 0 ? null : S;
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
                S,
                T,
                b
            ]);
            var B = f(h, A[0], A[1]);
            return s(function() {
                N.hasValue = !0, N.value = B;
            }, [
                B
            ]), p(B), B;
        }, uf;
    }
    var Ph;
    function Z0() {
        return Ph || (Ph = 1, af.exports = X0()), af.exports;
    }
    var J0 = Z0();
    function $0(u) {
        u();
    }
    function F0() {
        let u = null, r = null;
        return {
            clear () {
                u = null, r = null;
            },
            notify () {
                $0(()=>{
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
    var qh = {
        notify () {},
        get: ()=>[]
    };
    function W0(u, r) {
        let c, f = qh, o = 0, s = !1;
        function y(B) {
            S();
            const w = f.subscribe(B);
            let U = !1;
            return ()=>{
                U || (U = !0, w(), T());
            };
        }
        function p() {
            f.notify();
        }
        function h() {
            N.onStateChange && N.onStateChange();
        }
        function v() {
            return s;
        }
        function S() {
            o++, c || (c = u.subscribe(h), f = F0());
        }
        function T() {
            o--, c && o === 0 && (c(), c = void 0, f.clear(), f = qh);
        }
        function b() {
            s || (s = !0, S());
        }
        function A() {
            s && (s = !1, T());
        }
        const N = {
            addNestedSub: y,
            notifyNestedSubs: p,
            handleChangeWrapper: h,
            isSubscribed: v,
            trySubscribe: b,
            tryUnsubscribe: A,
            getListeners: ()=>f
        };
        return N;
    }
    var I0 = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ey = I0(), ty = ()=>typeof navigator < "u" && navigator.product === "ReactNative", ly = ty(), ny = ()=>ey || ly ? O.useLayoutEffect : O.useEffect, ay = ny(), uy = Symbol.for("react-redux-context"), iy = typeof globalThis < "u" ? globalThis : {};
    function ry() {
        if (!O.createContext) return {};
        const u = iy[uy] ??= new Map;
        let r = u.get(O.createContext);
        return r || (r = O.createContext(null), u.set(O.createContext, r)), r;
    }
    var wl = ry();
    function cy(u) {
        const { children: r, context: c, serverState: f, store: o } = u, s = O.useMemo(()=>{
            const h = W0(o);
            return {
                store: o,
                subscription: h,
                getServerState: f ? ()=>f : void 0
            };
        }, [
            o,
            f
        ]), y = O.useMemo(()=>o.getState(), [
            o
        ]);
        ay(()=>{
            const { subscription: h } = s;
            return h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), y !== o.getState() && h.notifyNestedSubs(), ()=>{
                h.tryUnsubscribe(), h.onStateChange = void 0;
            };
        }, [
            s,
            y
        ]);
        const p = c || wl;
        return O.createElement(p.Provider, {
            value: s
        }, r);
    }
    var fy = cy;
    function Sf(u = wl) {
        return function() {
            return O.useContext(u);
        };
    }
    var sp = Sf();
    function dp(u = wl) {
        const r = u === wl ? sp : Sf(u), c = ()=>{
            const { store: f } = r();
            return f;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    var oy = dp();
    function sy(u = wl) {
        const r = u === wl ? oy : dp(u), c = ()=>r().dispatch;
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    let dy;
    Xn = sy();
    dy = (u, r)=>u === r;
    function hy(u = wl) {
        const r = u === wl ? sp : Sf(u), c = (f, o = {})=>{
            const { equalityFn: s = dy } = typeof o == "function" ? {
                equalityFn: o
            } : o, y = r(), { store: p, subscription: h, getServerState: v } = y;
            O.useRef(!0);
            const S = O.useCallback({
                [f.name] (b) {
                    return f(b);
                }
            }[f.name], [
                f
            ]), T = J0.useSyncExternalStoreWithSelector(h.addNestedSub, p.getState, v || p.getState, S, s);
            return O.useDebugValue(T), T;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    an = hy();
    function $e(u) {
        return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var py = typeof Symbol == "function" && Symbol.observable || "@@observable", Hh = py, rf = ()=>Math.random().toString(36).substring(7).split("").join("."), my = {
        INIT: `@@redux/INIT${rf()}`,
        REPLACE: `@@redux/REPLACE${rf()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${rf()}`
    }, Di = my;
    function hp(u) {
        if (typeof u != "object" || u === null) return !1;
        let r = u;
        for(; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(u) === r || Object.getPrototypeOf(u) === null;
    }
    function Ef(u, r, c) {
        if (typeof u != "function") throw new Error($e(2));
        if (typeof r == "function" && typeof c == "function" || typeof c == "function" && typeof arguments[3] == "function") throw new Error($e(0));
        if (typeof r == "function" && typeof c > "u" && (c = r, r = void 0), typeof c < "u") {
            if (typeof c != "function") throw new Error($e(1));
            return c(Ef)(u, r);
        }
        let f = u, o = r, s = new Map, y = s, p = 0, h = !1;
        function v() {
            y === s && (y = new Map, s.forEach((w, U)=>{
                y.set(U, w);
            }));
        }
        function S() {
            if (h) throw new Error($e(3));
            return o;
        }
        function T(w) {
            if (typeof w != "function") throw new Error($e(4));
            if (h) throw new Error($e(5));
            let U = !0;
            v();
            const j = p++;
            return y.set(j, w), function() {
                if (U) {
                    if (h) throw new Error($e(6));
                    U = !1, v(), y.delete(j), s = null;
                }
            };
        }
        function b(w) {
            if (!hp(w)) throw new Error($e(7));
            if (typeof w.type > "u") throw new Error($e(8));
            if (typeof w.type != "string") throw new Error($e(17));
            if (h) throw new Error($e(9));
            try {
                h = !0, o = f(o, w);
            } finally{
                h = !1;
            }
            return (s = y).forEach((j)=>{
                j();
            }), w;
        }
        function A(w) {
            if (typeof w != "function") throw new Error($e(10));
            f = w, b({
                type: Di.REPLACE
            });
        }
        function N() {
            const w = T;
            return {
                subscribe (U) {
                    if (typeof U != "object" || U === null) throw new Error($e(11));
                    function j() {
                        const V = U;
                        V.next && V.next(S());
                    }
                    return j(), {
                        unsubscribe: w(j)
                    };
                },
                [Hh] () {
                    return this;
                }
            };
        }
        return b({
            type: Di.INIT
        }), {
            dispatch: b,
            subscribe: T,
            getState: S,
            replaceReducer: A,
            [Hh]: N
        };
    }
    function yy(u) {
        Object.keys(u).forEach((r)=>{
            const c = u[r];
            if (typeof c(void 0, {
                type: Di.INIT
            }) > "u") throw new Error($e(12));
            if (typeof c(void 0, {
                type: Di.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error($e(13));
        });
    }
    function pp(u) {
        const r = Object.keys(u), c = {};
        for(let s = 0; s < r.length; s++){
            const y = r[s];
            typeof u[y] == "function" && (c[y] = u[y]);
        }
        const f = Object.keys(c);
        let o;
        try {
            yy(c);
        } catch (s) {
            o = s;
        }
        return function(y = {}, p) {
            if (o) throw o;
            let h = !1;
            const v = {};
            for(let S = 0; S < f.length; S++){
                const T = f[S], b = c[T], A = y[T], N = b(A, p);
                if (typeof N > "u") throw p && p.type, new Error($e(14));
                v[T] = N, h = h || N !== A;
            }
            return h = h || f.length !== Object.keys(y).length, h ? v : y;
        };
    }
    function Bi(...u) {
        return u.length === 0 ? (r)=>r : u.length === 1 ? u[0] : u.reduce((r, c)=>(...f)=>r(c(...f)));
    }
    function vy(...u) {
        return (r)=>(c, f)=>{
                const o = r(c, f);
                let s = ()=>{
                    throw new Error($e(15));
                };
                const y = {
                    getState: o.getState,
                    dispatch: (h, ...v)=>s(h, ...v)
                }, p = u.map((h)=>h(y));
                return s = Bi(...p)(o.dispatch), {
                    ...o,
                    dispatch: s
                };
            };
    }
    function mp(u) {
        return ({ dispatch: c, getState: f })=>(o)=>(s)=>typeof s == "function" ? s(c, f, u) : o(s);
    }
    var gy = mp(), by = mp, Sy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Bi : Bi.apply(null, arguments);
    }, yp = class Wa extends Array {
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
    function Ey(u) {
        return typeof u == "boolean";
    }
    var _y = ()=>function(r) {
            const { thunk: c = !0, immutableCheck: f = !0, serializableCheck: o = !0, actionCreatorCheck: s = !0 } = r ?? {};
            let y = new yp;
            return c && (Ey(c) ? y.push(gy) : y.push(by(c.extraArgument))), y;
        }, Ty = "RTK_autoBatch", kh = (u)=>(r)=>{
            setTimeout(r, u);
        }, Ry = (u = {
        type: "raf"
    })=>(r)=>(...c)=>{
                const f = r(...c);
                let o = !0, s = !1, y = !1;
                const p = new Set, h = u.type === "tick" ? queueMicrotask : u.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : kh(10) : u.type === "callback" ? u.queueNotification : kh(u.timeout), v = ()=>{
                    y = !1, s && (s = !1, p.forEach((S)=>S()));
                };
                return Object.assign({}, f, {
                    subscribe (S) {
                        const T = ()=>o && S(), b = f.subscribe(T);
                        return p.add(S), ()=>{
                            b(), p.delete(S);
                        };
                    },
                    dispatch (S) {
                        try {
                            return o = !S?.meta?.[Ty], s = !o, s && (y || (y = !0, h(v))), f.dispatch(S);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, Ay = (u)=>function(c) {
            const { autoBatch: f = !0 } = c ?? {};
            let o = new yp(u);
            return f && o.push(Ry(typeof f == "object" ? f : void 0)), o;
        };
    function Oy(u) {
        const r = _y(), { reducer: c = void 0, middleware: f, devTools: o = !0, preloadedState: s = void 0, enhancers: y = void 0 } = u || {};
        let p;
        if (typeof c == "function") p = c;
        else if (hp(c)) p = pp(c);
        else throw new Error(Ny(1));
        let h;
        typeof f == "function" ? h = f(r) : h = r();
        let v = Bi;
        o && (v = Sy({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const S = vy(...h), T = Ay(S);
        let b = typeof y == "function" ? y(T) : T();
        const A = v(...b);
        return Ef(p, s, A);
    }
    function Ny(u) {
        return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var _f = "persist:", vp = "persist/FLUSH", Tf = "persist/REHYDRATE", gp = "persist/PAUSE", bp = "persist/PERSIST", Sp = "persist/PURGE", Ep = "persist/REGISTER", xy = -1;
    function Ni(u) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ni = function(c) {
            return typeof c;
        } : Ni = function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        }, Ni(u);
    }
    function Lh(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function My(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Lh(c, !0).forEach(function(f) {
                Cy(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Lh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function Cy(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    function Dy(u, r, c, f) {
        f.debug;
        var o = My({}, c);
        return u && Ni(u) === "object" && Object.keys(u).forEach(function(s) {
            s !== "_persist" && r[s] === c[s] && (o[s] = u[s]);
        }), o;
    }
    function By(u) {
        var r = u.blacklist || null, c = u.whitelist || null, f = u.transforms || [], o = u.throttle || 0, s = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : _f).concat(u.key), y = u.storage, p;
        u.serialize === !1 ? p = function(K) {
            return K;
        } : typeof u.serialize == "function" ? p = u.serialize : p = Uy;
        var h = u.writeFailHandler || null, v = {}, S = {}, T = [], b = null, A = null, N = function(K) {
            Object.keys(K).forEach(function(W) {
                U(W) && v[W] !== K[W] && T.indexOf(W) === -1 && T.push(W);
            }), Object.keys(v).forEach(function(W) {
                K[W] === void 0 && U(W) && T.indexOf(W) === -1 && v[W] !== void 0 && T.push(W);
            }), b === null && (b = setInterval(B, o)), v = K;
        };
        function B() {
            if (T.length === 0) {
                b && clearInterval(b), b = null;
                return;
            }
            var V = T.shift(), K = f.reduce(function(W, J) {
                return J.in(W, V, v);
            }, v[V]);
            if (K !== void 0) try {
                S[V] = p(K);
            } catch (W) {
                console.error("redux-persist/createPersistoid: error serializing state", W);
            }
            else delete S[V];
            T.length === 0 && w();
        }
        function w() {
            Object.keys(S).forEach(function(V) {
                v[V] === void 0 && delete S[V];
            }), A = y.setItem(s, p(S)).catch(j);
        }
        function U(V) {
            return !(c && c.indexOf(V) === -1 && V !== "_persist" || r && r.indexOf(V) !== -1);
        }
        function j(V) {
            h && h(V);
        }
        var L = function() {
            for(; T.length !== 0;)B();
            return A || Promise.resolve();
        };
        return {
            update: N,
            flush: L
        };
    }
    function Uy(u) {
        return JSON.stringify(u);
    }
    function wy(u) {
        var r = u.transforms || [], c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : _f).concat(u.key), f = u.storage;
        u.debug;
        var o;
        return u.deserialize === !1 ? o = function(y) {
            return y;
        } : typeof u.deserialize == "function" ? o = u.deserialize : o = zy, f.getItem(c).then(function(s) {
            if (s) try {
                var y = {}, p = o(s);
                return Object.keys(p).forEach(function(h) {
                    y[h] = r.reduceRight(function(v, S) {
                        return S.out(v, h, p);
                    }, o(p[h]));
                }), y;
            } catch (h) {
                throw h;
            }
            else return;
        });
    }
    function zy(u) {
        return JSON.parse(u);
    }
    function Py(u) {
        var r = u.storage, c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : _f).concat(u.key);
        return r.removeItem(c, qy);
    }
    function qy(u) {}
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
    function ll(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? jh(c, !0).forEach(function(f) {
                Hy(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : jh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function Hy(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    function ky(u, r) {
        if (u == null) return {};
        var c = Ly(u, r), f, o;
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(u);
            for(o = 0; o < s.length; o++)f = s[o], !(r.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(u, f) && (c[f] = u[f]);
        }
        return c;
    }
    function Ly(u, r) {
        if (u == null) return {};
        var c = {}, f = Object.keys(u), o, s;
        for(s = 0; s < f.length; s++)o = f[s], !(r.indexOf(o) >= 0) && (c[o] = u[o]);
        return c;
    }
    var jy = 5e3;
    function Qy(u, r) {
        var c = u.version !== void 0 ? u.version : xy;
        u.debug;
        var f = u.stateReconciler === void 0 ? Dy : u.stateReconciler, o = u.getStoredState || wy, s = u.timeout !== void 0 ? u.timeout : jy, y = null, p = !1, h = !0, v = function(T) {
            return T._persist.rehydrated && y && !h && y.update(T), T;
        };
        return function(S, T) {
            var b = S || {}, A = b._persist, N = ky(b, [
                "_persist"
            ]), B = N;
            if (T.type === bp) {
                var w = !1, U = function($, ne) {
                    w || (T.rehydrate(u.key, $, ne), w = !0);
                };
                if (s && setTimeout(function() {
                    !w && U(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(u.key, '"')));
                }, s), h = !1, y || (y = By(u)), A) return ll({}, r(B, T), {
                    _persist: A
                });
                if (typeof T.rehydrate != "function" || typeof T.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return T.register(u.key), o(u).then(function(J) {
                    var $ = u.migrate || function(ne, Ce) {
                        return Promise.resolve(ne);
                    };
                    $(J, c).then(function(ne) {
                        U(ne);
                    }, function(ne) {
                        U(void 0, ne);
                    });
                }, function(J) {
                    U(void 0, J);
                }), ll({}, r(B, T), {
                    _persist: {
                        version: c,
                        rehydrated: !1
                    }
                });
            } else {
                if (T.type === Sp) return p = !0, T.result(Py(u)), ll({}, r(B, T), {
                    _persist: A
                });
                if (T.type === vp) return T.result(y && y.flush()), ll({}, r(B, T), {
                    _persist: A
                });
                if (T.type === gp) h = !0;
                else if (T.type === Tf) {
                    if (p) return ll({}, B, {
                        _persist: ll({}, A, {
                            rehydrated: !0
                        })
                    });
                    if (T.key === u.key) {
                        var j = r(B, T), L = T.payload, V = f !== !1 && L !== void 0 ? f(L, S, j, u) : j, K = ll({}, V, {
                            _persist: ll({}, A, {
                                rehydrated: !0
                            })
                        });
                        return v(K);
                    }
                }
            }
            if (!A) return r(S, T);
            var W = r(B, T);
            return W === B ? S : v(ll({}, W, {
                _persist: A
            }));
        };
    }
    function Qh(u) {
        return Yy(u) || Gy(u) || Ky();
    }
    function Ky() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function Gy(u) {
        if (Symbol.iterator in Object(u) || Object.prototype.toString.call(u) === "[object Arguments]") return Array.from(u);
    }
    function Yy(u) {
        if (Array.isArray(u)) {
            for(var r = 0, c = new Array(u.length); r < u.length; r++)c[r] = u[r];
            return c;
        }
    }
    function Kh(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function pf(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Kh(c, !0).forEach(function(f) {
                Vy(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Kh(c).forEach(function(f) {
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
    var _p = {
        registry: [],
        bootstrapped: !1
    }, Xy = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _p, c = arguments.length > 1 ? arguments[1] : void 0;
        switch(c.type){
            case Ep:
                return pf({}, r, {
                    registry: [].concat(Qh(r.registry), [
                        c.key
                    ])
                });
            case Tf:
                var f = r.registry.indexOf(c.key), o = Qh(r.registry);
                return o.splice(f, 1), pf({}, r, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return r;
        }
    };
    function Zy(u, r, c) {
        var f = Ef(Xy, _p, void 0), o = function(h) {
            f.dispatch({
                type: Ep,
                key: h
            });
        }, s = function(h, v, S) {
            var T = {
                type: Tf,
                payload: v,
                err: S,
                key: h
            };
            u.dispatch(T), f.dispatch(T);
        }, y = pf({}, f, {
            purge: function() {
                var h = [];
                return u.dispatch({
                    type: Sp,
                    result: function(S) {
                        h.push(S);
                    }
                }), Promise.all(h);
            },
            flush: function() {
                var h = [];
                return u.dispatch({
                    type: vp,
                    result: function(S) {
                        h.push(S);
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
                    rehydrate: s
                });
            }
        });
        return y.persist(), y;
    }
    var Za = {}, _i = {}, Ti = {}, Gh;
    function Jy() {
        if (Gh) return Ti;
        Gh = 1, Ti.__esModule = !0, Ti.default = o;
        function u(s) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? u = function(p) {
                return typeof p;
            } : u = function(p) {
                return p && typeof Symbol == "function" && p.constructor === Symbol && p !== Symbol.prototype ? "symbol" : typeof p;
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
                var y = self[s], p = "redux-persist ".concat(s, " test");
                y.setItem(p, "test"), y.getItem(p), y.removeItem(p);
            } catch  {
                return !1;
            }
            return !0;
        }
        function o(s) {
            var y = "".concat(s, "Storage");
            return f(y) ? self[y] : c;
        }
        return Ti;
    }
    var Yh;
    function $y() {
        if (Yh) return _i;
        Yh = 1, _i.__esModule = !0, _i.default = c;
        var u = r(Jy());
        function r(f) {
            return f && f.__esModule ? f : {
                default: f
            };
        }
        function c(f) {
            var o = (0, u.default)(f);
            return {
                getItem: function(y) {
                    return new Promise(function(p, h) {
                        p(o.getItem(y));
                    });
                },
                setItem: function(y, p) {
                    return new Promise(function(h, v) {
                        h(o.setItem(y, p));
                    });
                },
                removeItem: function(y) {
                    return new Promise(function(p, h) {
                        p(o.removeItem(y));
                    });
                }
            };
        }
        return _i;
    }
    var Vh;
    function Fy() {
        if (Vh) return Za;
        Vh = 1, Za.__esModule = !0, Za.default = void 0;
        var u = r($y());
        function r(f) {
            return f && f.__esModule ? f : {
                default: f
            };
        }
        var c = (0, u.default)("local");
        return Za.default = c, Za;
    }
    var Wy = Fy();
    const Iy = op(Wy);
    const lt = "w", Mt = "b", Ve = "p", mf = "n", xi = "b", Ia = "r", Ul = "q", Le = "k", cf = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
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
        constructor(r, c){
            const { color: f, piece: o, from: s, to: y, flags: p, captured: h, promotion: v } = c, S = Fe(s), T = Fe(y);
            this.color = f, this.piece = o, this.from = S, this.to = T, this.san = r._moveToSan(c, r._moves({
                legal: !0
            })), this.lan = S + T, this.before = r.fen(), r._makeMove(c), this.after = r.fen(), r._undoMove(), this.flags = "";
            for(const b in ce)ce[b] & p && (this.flags += tn[b]);
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
    }, yf = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, ev = {
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
    }, tv = {
        ...yf,
        ...ev
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
    }, ff = {
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
    }, lv = [
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
    ], nv = [
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
    ], av = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, uv = "pnbrqkPNBRQK", Zh = [
        mf,
        xi,
        Ia,
        Ul
    ], iv = 7, rv = 6, cv = 1, fv = 0, Ai = {
        [Le]: ce.KSIDE_CASTLE,
        [Ul]: ce.QSIDE_CASTLE
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
    }, ov = {
        b: cv,
        w: rv
    }, sv = [
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
    function Fe(u) {
        const r = lu(u), c = ln(u);
        return "abcdefgh".substring(r, r + 1) + "87654321".substring(c, c + 1);
    }
    function Ja(u) {
        return u === lt ? Mt : lt;
    }
    function dv(u) {
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
        for(let y = 0; y < o.length; y++){
            let p = 0, h = !1;
            for(let v = 0; v < o[y].length; v++)if (Tp(o[y][v])) {
                if (h) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                p += parseInt(o[y][v], 10), h = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(o[y][v])) return {
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
        for (const { color: y, regex: p } of s){
            if (!p.test(r[0])) return {
                ok: !1,
                error: `Invalid FEN: missing ${y} king`
            };
            if ((r[0].match(p) || []).length > 1) return {
                ok: !1,
                error: `Invalid FEN: too many ${y} kings`
            };
        }
        return Array.from(o[0] + o[7]).some((y)=>y.toUpperCase() === "P") ? {
            ok: !1,
            error: "Invalid FEN: some pawns are on the edge rows"
        } : {
            ok: !0
        };
    }
    function hv(u, r) {
        const c = u.from, f = u.to, o = u.piece;
        let s = 0, y = 0, p = 0;
        for(let h = 0, v = r.length; h < v; h++){
            const S = r[h].from, T = r[h].to, b = r[h].piece;
            o === b && c !== S && f === T && (s++, ln(c) === ln(S) && y++, lu(c) === lu(S) && p++);
        }
        return s > 0 ? y > 0 && p > 0 ? Fe(c) : p > 0 ? Fe(c).charAt(1) : Fe(c).charAt(0) : "";
    }
    function Bl(u, r, c, f, o, s = void 0, y = ce.NORMAL) {
        const p = ln(f);
        if (o === Ve && (p === iv || p === fv)) for(let h = 0; h < Zh.length; h++){
            const v = Zh[h];
            u.push({
                color: r,
                from: c,
                to: f,
                piece: o,
                captured: s,
                promotion: v,
                flags: y | ce.PROMOTION
            });
        }
        else u.push({
            color: r,
            from: c,
            to: f,
            piece: o,
            captured: s,
            flags: y
        });
    }
    function Jh(u) {
        let r = u.charAt(0);
        return r >= "a" && r <= "h" ? u.match(/[a-h]\d.*[a-h]\d/) ? void 0 : Ve : (r = r.toLowerCase(), r === "o" ? Le : r);
    }
    function of(u) {
        return u.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function sf(u) {
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
        constructor(r = cf, { skipValidation: c = !1 } = {}){
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
                ...tv
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
                const { ok: p, error: h } = dv(r);
                if (!p) throw new Error(h);
            }
            const s = o[0];
            let y = 0;
            this.clear({
                preserveHeaders: f
            });
            for(let p = 0; p < s.length; p++){
                const h = s.charAt(p);
                if (h === "/") y += 8;
                else if (Tp(h)) y += parseInt(h, 10);
                else {
                    const v = h < "a" ? lt : Mt;
                    this._put({
                        type: h.toLowerCase(),
                        color: v
                    }, Fe(y)), y++;
                }
            }
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= ce.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= ce.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= ce.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= ce.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? ft : ue[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(r), this._incPositionCount(r);
        }
        fen() {
            let r = 0, c = "";
            for(let s = ue.a8; s <= ue.h1; s++){
                if (this._board[s]) {
                    r > 0 && (c += r, r = 0);
                    const { color: y, type: p } = this._board[s];
                    c += y === lt ? p.toUpperCase() : p.toLowerCase();
                } else r++;
                s + 1 & 136 && (r > 0 && (c += r), s !== ue.h1 && (c += "/"), r = 0, s += 8);
            }
            let f = "";
            this._castling[lt] & ce.KSIDE_CASTLE && (f += "K"), this._castling[lt] & ce.QSIDE_CASTLE && (f += "Q"), this._castling[Mt] & ce.KSIDE_CASTLE && (f += "k"), this._castling[Mt] & ce.QSIDE_CASTLE && (f += "q"), f = f || "-";
            let o = "-";
            if (this._epSquare !== ft) {
                const s = this._epSquare + (this._turn === lt ? 16 : -16), y = [
                    s + 1,
                    s - 1
                ];
                for (const p of y){
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
                        const v = !this._isKingAttacked(h);
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
            this._history.length > 0 || (r !== cf ? (this._header.SetUp = "1", this._header.FEN = r) : (this._header.SetUp = null, this._header.FEN = null));
        }
        reset() {
            this.load(cf);
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
            if (uv.indexOf(r.toLowerCase()) === -1 || !(f in ue)) return !1;
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
            if (this._board[r] !== null || this._board[this._epSquare] !== null || this._board[c]?.color !== Ja(this._turn) || this._board[c]?.type !== Ve) {
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
                const y = this._board[s], p = s - c;
                if (p === 0) continue;
                const h = p + 119;
                if (lv[h] & av[y.type]) {
                    if (y.type === Ve) {
                        if (p > 0 && y.color === lt || p <= 0 && y.color === Mt) if (f) o.push(Fe(s));
                        else return !0;
                        continue;
                    }
                    if (y.type === "n" || y.type === "k") if (f) {
                        o.push(Fe(s));
                        continue;
                    } else return !0;
                    const v = nv[h];
                    let S = s + v, T = !1;
                    for(; S !== c;){
                        if (this._board[S] != null) {
                            T = !0;
                            break;
                        }
                        S += v;
                    }
                    if (!T) if (f) {
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
            return c === -1 ? !1 : this._attacked(Ja(r), c);
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
                const y = this._board[s];
                y && (r[y.type] = y.type in r ? r[y.type] + 1 : 1, y.type === xi && c.push(o), f++);
            }
            if (f === 2) return !0;
            if (f === 3 && (r[xi] === 1 || r[mf] === 1)) return !0;
            if (f === r[xi] + 2) {
                let s = 0;
                const y = c.length;
                for(let p = 0; p < y; p++)s += c[p];
                if (s === 0 || s === y) return !0;
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
            return r ? o.map((s)=>new Ri(this, s)) : o.map((s)=>this._moveToSan(s, o));
        }
        _moves({ legal: r = !0, piece: c = void 0, square: f = void 0 } = {}) {
            const o = f ? f.toLowerCase() : void 0, s = c?.toLowerCase(), y = [], p = this._turn, h = Ja(p);
            let v = ue.a8, S = ue.h1, T = !1;
            if (o) if (o in ue) v = S = ue[o], T = !0;
            else return [];
            for(let A = v; A <= S; A++){
                if (A & 136) {
                    A += 7;
                    continue;
                }
                if (!this._board[A] || this._board[A].color === h) continue;
                const { type: N } = this._board[A];
                let B;
                if (N === Ve) {
                    if (s && s !== N) continue;
                    B = A + ff[p][0], this._board[B] || (Bl(y, p, A, B, Ve), B = A + ff[p][1], ov[p] === ln(A) && !this._board[B] && Bl(y, p, A, B, Ve, void 0, ce.BIG_PAWN));
                    for(let w = 2; w < 4; w++)B = A + ff[p][w], !(B & 136) && (this._board[B]?.color === h ? Bl(y, p, A, B, Ve, this._board[B].type, ce.CAPTURE) : B === this._epSquare && Bl(y, p, A, B, Ve, Ve, ce.EP_CAPTURE));
                } else {
                    if (s && s !== N) continue;
                    for(let w = 0, U = Xh[N].length; w < U; w++){
                        const j = Xh[N][w];
                        for(B = A; B += j, !(B & 136);){
                            if (!this._board[B]) Bl(y, p, A, B, N);
                            else {
                                if (this._board[B].color === p) break;
                                Bl(y, p, A, B, N, this._board[B].type, ce.CAPTURE);
                                break;
                            }
                            if (N === mf || N === Le) break;
                        }
                    }
                }
            }
            if ((s === void 0 || s === Le) && (!T || S === this._kings[p])) {
                if (this._castling[p] & ce.KSIDE_CASTLE) {
                    const A = this._kings[p], N = A + 2;
                    !this._board[A + 1] && !this._board[N] && !this._attacked(h, this._kings[p]) && !this._attacked(h, A + 1) && !this._attacked(h, N) && Bl(y, p, this._kings[p], N, Le, void 0, ce.KSIDE_CASTLE);
                }
                if (this._castling[p] & ce.QSIDE_CASTLE) {
                    const A = this._kings[p], N = A - 2;
                    !this._board[A - 1] && !this._board[A - 2] && !this._board[A - 3] && !this._attacked(h, this._kings[p]) && !this._attacked(h, A - 1) && !this._attacked(h, N) && Bl(y, p, this._kings[p], N, Le, void 0, ce.QSIDE_CASTLE);
                }
            }
            if (!r || this._kings[p] === -1) return y;
            const b = [];
            for(let A = 0, N = y.length; A < N; A++)this._makeMove(y[A]), this._isKingAttacked(p) || b.push(y[A]), this._undoMove();
            return b;
        }
        move(r, { strict: c = !1 } = {}) {
            let f = null;
            if (typeof r == "string") f = this._moveFromSan(r, c);
            else if (typeof r == "object") {
                const s = this._moves();
                for(let y = 0, p = s.length; y < p; y++)if (r.from === Fe(s[y].from) && r.to === Fe(s[y].to) && (!("promotion" in s[y]) || r.promotion === s[y].promotion)) {
                    f = s[y];
                    break;
                }
            }
            if (!f) throw typeof r == "string" ? new Error(`Invalid move: ${r}`) : new Error(`Invalid move: ${JSON.stringify(r)}`);
            const o = new Ri(this, f);
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
            const c = this._turn, f = Ja(c);
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
                const c = new Ri(this, r);
                return this._decPositionCount(c.after), c;
            }
            return null;
        }
        _undoMove() {
            const r = this._history.pop();
            if (r === void 0) return null;
            const c = r.move;
            this._kings = r.kings, this._turn = r.turn, this._castling = r.castling, this._epSquare = r.epSquare, this._halfMoves = r.halfMoves, this._moveNumber = r.moveNumber;
            const f = this._turn, o = Ja(f);
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
                let s, y;
                c.flags & ce.KSIDE_CASTLE ? (s = c.to + 1, y = c.to - 1) : (s = c.to - 2, y = c.to + 1), this._board[s] = this._board[y], delete this._board[y];
            }
            return c;
        }
        pgn({ newline: r = `
`, maxWidth: c = 0 } = {}) {
            const f = [];
            let o = !1;
            for(const b in this._header)this._header[b] && f.push(`[${b} "${this._header[b]}"]` + r), o = !0;
            o && this._history.length && f.push(r);
            const s = (b)=>{
                const A = this._comments[this.fen()];
                if (typeof A < "u") {
                    const N = b.length > 0 ? " " : "";
                    b = `${b}${N}{${A}}`;
                }
                return b;
            }, y = [];
            for(; this._history.length > 0;)y.push(this._undoMove());
            const p = [];
            let h = "";
            for(y.length === 0 && p.push(s("")); y.length > 0;){
                h = s(h);
                const b = y.pop();
                if (!b) break;
                if (!this._history.length && b.color === "b") {
                    const A = `${this._moveNumber}. ...`;
                    h = h ? `${h} ${A}` : A;
                } else b.color === "w" && (h.length && p.push(h), h = this._moveNumber + ".");
                h = h + " " + this._moveToSan(b, this._moves({
                    legal: !0
                })), this._makeMove(b);
            }
            if (h.length && p.push(s(h)), p.push(this._header.Result || "*"), c === 0) return f.join("") + p.join(" ");
            const v = function() {
                return f.length > 0 && f[f.length - 1] === " " ? (f.pop(), !0) : !1;
            }, S = function(b, A) {
                for (const N of A.split(" "))if (N) {
                    if (b + N.length > c) {
                        for(; v();)b--;
                        f.push(r), b = 0;
                    }
                    f.push(N), b += N.length, f.push(" "), b++;
                }
                return v() && b--, b;
            };
            let T = 0;
            for(let b = 0; b < p.length; b++){
                if (T + p[b].length > c && p[b].includes("{")) {
                    T = S(T, p[b]);
                    continue;
                }
                T + p[b].length > c && b !== 0 ? (f[f.length - 1] === " " && f.pop(), f.push(r), T = 0) : b !== 0 && (f.push(" "), T++), f.push(p[b]), T += p[b].length;
            }
            return f.join("");
        }
        header(...r) {
            for(let c = 0; c < r.length; c += 2)typeof r[c] == "string" && typeof r[c + 1] == "string" && (this._header[r[c]] = r[c + 1]);
            return this._header;
        }
        setHeader(r, c) {
            return this._header[r] = c ?? yf[r] ?? null, this.getHeaders();
        }
        removeHeader(r) {
            return r in this._header ? (this._header[r] = yf[r] || null, !0) : !1;
        }
        getHeaders() {
            const r = {};
            for (const [c, f] of Object.entries(this._header))f !== null && (r[c] = f);
            return r;
        }
        loadPgn(r, { strict: c = !1, newlineChar: f = `\r?
` } = {}) {
            function o(L) {
                return L.replace(/\\/g, "\\");
            }
            function s(L) {
                const V = {}, K = L.split(new RegExp(o(f)));
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
            const v = s(h);
            let S = "";
            for(const L in v)L.toLowerCase() === "fen" && (S = v[L]), this.header(L, v[L]);
            if (!c) S && this.load(S, {
                preserveHeaders: !0
            });
            else if (v.SetUp === "1") {
                if (!("FEN" in v)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
                this.load(v.FEN, {
                    preserveHeaders: !0
                });
            }
            function T(L) {
                return Array.from(L).map(function(V) {
                    return V.charCodeAt(0) < 128 ? V.charCodeAt(0).toString(16) : encodeURIComponent(V).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function b(L) {
                return L.length == 0 ? "" : decodeURIComponent("%" + (L.match(/.{1,2}/g) || []).join("%"));
            }
            const A = function(L) {
                return L = L.replace(new RegExp(o(f), "g"), " "), `{${T(L.slice(1, L.length - 1))}}`;
            }, N = function(L) {
                if (L.startsWith("{") && L.endsWith("}")) return b(L.slice(1, L.length - 1));
            };
            let B = r.replace(h, "").replace(new RegExp(`({[^}]*})+?|;([^${o(f)}]*)`, "g"), function(L, V, K) {
                return V !== void 0 ? A(V) : " " + A(`{${K.slice(1)}}`);
            }).replace(new RegExp(o(f), "g"), " ");
            const w = /(\([^()]+\))+?/g;
            for(; w.test(B);)B = B.replace(w, "");
            B = B.replace(/\d+\.(\.\.)?/g, ""), B = B.replace(/\.\.\./g, ""), B = B.replace(/\$\d+/g, "");
            let U = B.trim().split(new RegExp(/\s+/));
            U = U.filter((L)=>L !== "");
            let j = "";
            for(let L = 0; L < U.length; L++){
                const V = N(U[L]);
                if (V !== void 0) {
                    this._comments[this.fen()] = V;
                    continue;
                }
                const K = this._moveFromSan(U[L], c);
                if (K == null) if (sv.indexOf(U[L]) > -1) j = U[L];
                else throw new Error(`Invalid move in PGN: ${U[L]}`);
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
                    const o = hv(r, c);
                    f += r.piece.toUpperCase() + o;
                }
                r.flags & (ce.CAPTURE | ce.EP_CAPTURE) && (r.piece === Ve && (f += Fe(r.from)[0]), f += "x"), f += Fe(r.to), r.promotion && (f += "=" + r.promotion.toUpperCase());
            }
            return this._makeMove(r), this.isCheck() && (this.isCheckmate() ? f += "#" : f += "+"), this._undoMove(), f;
        }
        _moveFromSan(r, c = !1) {
            const f = of(r);
            let o = Jh(f), s = this._moves({
                legal: !0,
                piece: o
            });
            for(let b = 0, A = s.length; b < A; b++)if (f === of(this._moveToSan(s[b], s))) return s[b];
            if (c) return null;
            let y, p, h, v, S, T = !1;
            if (p = f.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), p ? (y = p[1], h = p[2], v = p[3], S = p[4], h.length == 1 && (T = !0)) : (p = f.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), p && (y = p[1], h = p[2], v = p[3], S = p[4], h.length == 1 && (T = !0))), o = Jh(f), s = this._moves({
                legal: !0,
                piece: y || o
            }), !v) return null;
            for(let b = 0, A = s.length; b < A; b++)if (h) {
                if ((!y || y.toLowerCase() == s[b].piece) && ue[h] == s[b].from && ue[v] == s[b].to && (!S || S.toLowerCase() == s[b].promotion)) return s[b];
                if (T) {
                    const N = Fe(s[b].from);
                    if ((!y || y.toLowerCase() == s[b].piece) && ue[v] == s[b].to && (h == N[0] || h == N[1]) && (!S || S.toLowerCase() == s[b].promotion)) return s[b];
                }
            } else if (f === of(this._moveToSan(s[b], s)).replace("x", "")) return s[b];
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
            for(let s = 0, y = c.length; s < y; s++)this._makeMove(c[s]), this._isKingAttacked(o) || (r - 1 > 0 ? f += this.perft(r - 1) : f++), this._undoMove();
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
                r ? f.push(new Ri(this, o)) : f.push(this._moveToSan(o, this._moves())), this._makeMove(o);
            }
            return f;
        }
        _getPositionCount(r) {
            const c = sf(r);
            return this._positionCount[c] || 0;
        }
        _incPositionCount(r) {
            const c = sf(r);
            this._positionCount[c] === void 0 && (this._positionCount[c] = 0), this._positionCount[c] += 1;
        }
        _decPositionCount(r) {
            const c = sf(r);
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
                Ul
            ])c[o] !== void 0 && (c[o] ? this._castling[r] |= Ai[o] : this._castling[r] &= ~Ai[o]);
            this._updateCastlingRights();
            const f = this.getCastlingRights(r);
            return (c[Le] === void 0 || c[Le] === f[Le]) && (c[Ul] === void 0 || c[Ul] === f[Ul]);
        }
        getCastlingRights(r) {
            return {
                [Le]: (this._castling[r] & Ai[Le]) !== 0,
                [Ul]: (this._castling[r] & Ai[Ul]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let Rp, Ap, pv, Op, mv, Np, yv, vv, gv, $h, bv, xp, Mp, Cp, Sv, Ev, Dp, Bp, Up, wp, Af, zp, _v, Tv, Rv, Av, Ov, Nv, xv, Mv, Cv, Dv, Bv, Uv, Pp, qp, Hp, kp, Lp, jp, Qp, Kp, Gp, Yp, Vp, Of, Fh, Wh, wv, zv, Pv, qv, Hv, kv, Lv, jv, Ih, Qv, ep, Kv, Gv, Yv, Vv, Xv;
    Rp = "MOVE_PIECE";
    Ap = "RESET_GAME";
    pv = "LOAD_GAME";
    Op = "SET_GAME_OVER";
    mv = "SET_TIMER_DURATION";
    $b = (u)=>({
            type: Rp,
            payload: u
        });
    Fb = (u)=>({
            type: Ap,
            payload: u
        });
    Wb = (u, r)=>({
            type: Op,
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
    yv = [
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
    vv = {
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
    gv = {
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
        fen: _e.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: _e.TIMER_DURATION
    };
    bv = (u = $h, r)=>{
        switch(r.type){
            case Rp:
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
            case Ap:
                return {
                    ...$h,
                    moveHistory: [],
                    timerDuration: r.payload
                };
            case pv:
                return {
                    ...u,
                    fen: r.payload.fen,
                    moveHistory: r.payload.moveHistory || []
                };
            case Op:
                return {
                    ...u,
                    isGameOver: r.payload.isGameOver,
                    gameResult: r.payload.gameResult
                };
            case mv:
                return {
                    ...u,
                    timerDuration: r.payload
                };
            default:
                return u;
        }
    };
    xp = "FLIP_BOARD";
    Mp = "SET_THEME";
    Cp = "SET_SOUND";
    Ib = ()=>({
            type: xp
        });
    e2 = (u)=>({
            type: Mp,
            payload: u
        });
    t2 = (u)=>({
            type: Cp,
            payload: u
        });
    Sv = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    Ev = (u = Sv, r)=>{
        switch(r.type){
            case xp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case Mp:
                return {
                    ...u,
                    theme: r.payload
                };
            case Cp:
                return {
                    ...u,
                    enableSound: r.payload
                };
            default:
                return u;
        }
    };
    Dp = "NEXT";
    Bp = "PREV";
    Up = "START_POS";
    wp = "FINAL_POS";
    Af = "LOAD_PGN";
    zp = "JUMP_TO_MOVE";
    _v = "TOGGLE_ENGINE";
    Tv = "DISABLE_ENGINE";
    l2 = ()=>({
            type: Up
        });
    n2 = ()=>({
            type: Bp
        });
    a2 = ()=>({
            type: Dp
        });
    u2 = ()=>({
            type: wp
        });
    i2 = ({ finalPos: u, moves: r, fens: c, fromToSquares: f, termination: o, result: s, blackPlayerName: y, whitePlayerName: p })=>({
            type: Af,
            payload: {
                finalPos: u,
                moves: r,
                fens: c,
                fromToSquares: f,
                termination: o,
                result: s,
                blackPlayerName: y,
                whitePlayerName: p
            }
        });
    r2 = (u)=>({
            type: zp,
            payload: u
        });
    Rv = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    Av = (u = Rv, r)=>{
        switch(r.type){
            case Dp:
                return u.currentMoveIndex === u.fenLength - 1 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex + 1
                };
            case Bp:
                return u.currentMoveIndex === 0 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex - 1
                };
            case Up:
                return {
                    ...u,
                    currentMoveIndex: 0
                };
            case wp:
                return {
                    ...u,
                    currentMoveIndex: u.fenLength - 1
                };
            case zp:
                return {
                    ...u,
                    currentMoveIndex: r.payload
                };
            case Af:
                return {
                    ...u,
                    finalFen: r.payload.finalPos,
                    fenLength: r.payload.fens.length,
                    currentMoveIndex: 0
                };
            case _v:
                return {
                    ...u,
                    engineEnabled: !u.engineEnabled
                };
            case Tv:
                return {
                    ...u,
                    engineEnabled: !1
                };
            default:
                return u;
        }
    };
    Ov = {
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
    Nv = (u = Ov, r)=>{
        switch(r.type){
            case Af:
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
    xv = "TOGGLE_ENGINE";
    Mv = "SET_MULTIPV";
    Cv = "SET_MAX_DEPTH";
    Dv = "SET_AUTO_STOP_TIME";
    Bv = {
        enabled: !1,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    Uv = (u = Bv, r)=>{
        switch(r.type){
            case xv:
                return {
                    ...u,
                    enabled: !u.enabled
                };
            case Mv:
                return {
                    ...u,
                    multiPV: r.payload
                };
            case Cv:
                return {
                    ...u,
                    maxDepth: r.payload
                };
            case Dv:
                return {
                    ...u,
                    autoStopTime: r.payload
                };
            default:
                return u;
        }
    };
    Pp = "RESET_BOARD";
    qp = "CLEAR_BOARD";
    Hp = "FLIP_BOARD";
    kp = "SET_BOARD_WITH_FEN";
    Lp = "PUT_PIECE";
    jp = "REMOVE_PIECE";
    Qp = "MOVE_BOARD_PIECE";
    Kp = "TOGGLE_CASTLING_PIECE";
    Gp = "SET_PLAYER_TO_MOVE";
    Yp = "SET_SELECTED_ITEM";
    Vp = "DESELECT_ITEM";
    Of = (u)=>({
            type: Yp,
            payload: {
                item: u
            }
        });
    Fh = ()=>({
            type: Vp
        });
    Wh = (u)=>({
            type: Gp,
            payload: {
                color: u
            }
        });
    wv = ()=>({
            type: Pp
        });
    zv = ()=>({
            type: qp
        });
    Pv = ()=>({
            type: Hp
        });
    qv = (u)=>({
            type: kp,
            payload: {
                fen: u
            }
        });
    Hv = (u, r)=>({
            type: Lp,
            payload: {
                squareId: u,
                piece: r
            }
        });
    kv = (u)=>({
            type: jp,
            payload: {
                squareId: u
            }
        });
    Lv = (u, r)=>({
            type: Qp,
            payload: {
                sourceSquareId: u,
                destSquareId: r
            }
        });
    jv = (u)=>({
            type: Kp,
            payload: {
                flag: u
            }
        });
    Ih = (u)=>{
        const r = {};
        try {
            const c = new Rf;
            c.load(u);
            const f = c.board();
            for(let o = 0; o < 8; o++)for(let s = 0; s < 8; s++){
                const y = f[o][s], p = `${"abcdefgh"[s]}${8 - o}`;
                r[p] = y ? {
                    type: y.type,
                    color: y.color
                } : null;
            }
        } catch (c) {
            console.error("FenToBoard error", c, u);
        }
        return r;
    };
    Qv = (u)=>u.split(" ")?.[1];
    ep = {
        board: {
            ...vv
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
    Kv = {
        board: {
            ...gv
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
    Gv = (u = ep, r)=>{
        switch(console.log("boardEditorReducer", r.type, r.payload), r.type){
            case Hp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case Pp:
                return ep;
            case qp:
                return Kv;
            case kp:
                return console.log("SET_BOARD_WITH_FEN", r.payload.fen, Ih(r.payload.fen)), {
                    ...u,
                    board: {
                        ...Ih(r.payload.fen)
                    },
                    playerToMove: Qv(r.payload.fen)
                };
            case Lp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [r.payload.squareId]: r.payload.piece
                    }
                };
            case Qp:
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
            case jp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [r.payload.squareId]: null
                    }
                };
            case Kp:
                return {
                    ...u,
                    castlingFlags: {
                        ...u.castlingFlags,
                        [r.payload.flag]: !u.castlingFlags[r.payload.flag]
                    }
                };
            case Gp:
                return console.log("SET_PLAYER_TO_MOVE", r.payload.color, u.playerToMove), {
                    ...u,
                    playerToMove: r.payload.color
                };
            case Yp:
                return {
                    ...u,
                    selectedItem: r.payload.item ?? null
                };
            case Vp:
                return {
                    ...u,
                    selectedItem: null
                };
            default:
                return u;
        }
    };
    Yv = pp({
        game: bv,
        settings: Ev,
        analysis: Av,
        pgn: Nv,
        engine: Uv,
        boardeditor: Gv
    });
    Vv = {
        key: "root",
        storage: Iy,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    Xv = Qy(Vv, Yv);
    Xp = Oy({
        reducer: Xv,
        middleware: (u)=>u({
                serializableCheck: {
                    ignoredActions: [
                        "persist/PERSIST"
                    ]
                }
            })
    });
    Zy(Xp);
    const Zv = "modulepreload", Jv = function(u) {
        return "/chess-frontend/" + u;
    }, tp = {}, Zp = function(r, c, f) {
        let o = Promise.resolve();
        if (c && c.length > 0) {
            document.getElementsByTagName("link");
            const y = document.querySelector("meta[property=csp-nonce]"), p = y?.nonce || y?.getAttribute("nonce");
            o = Promise.allSettled(c.map((h)=>{
                if (h = Jv(h), h in tp) return;
                tp[h] = !0;
                const v = h.endsWith(".css"), S = v ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${h}"]${S}`)) return;
                const T = document.createElement("link");
                if (T.rel = v ? "stylesheet" : Zv, v || (T.as = "script"), T.crossOrigin = "", T.href = h, p && T.setAttribute("nonce", p), document.head.appendChild(T), v) return new Promise((b, A)=>{
                    T.addEventListener("load", b), T.addEventListener("error", ()=>A(new Error(`Unable to preload CSS for ${h}`)));
                });
            }));
        }
        function s(y) {
            const p = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (p.payload = y, window.dispatchEvent(p), !p.defaultPrevented) throw y;
        }
        return o.then((y)=>{
            for (const p of y || [])p.status === "rejected" && s(p.reason);
            return r().catch(s);
        });
    };
    var $a = {}, lp;
    function $v() {
        if (lp) return $a;
        lp = 1, Object.defineProperty($a, "__esModule", {
            value: !0
        }), $a.parse = y, $a.serialize = v;
        const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, f = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, s = (()=>{
            const b = function() {};
            return b.prototype = Object.create(null), b;
        })();
        function y(b, A) {
            const N = new s, B = b.length;
            if (B < 2) return N;
            const w = A?.decode || S;
            let U = 0;
            do {
                const j = b.indexOf("=", U);
                if (j === -1) break;
                const L = b.indexOf(";", U), V = L === -1 ? B : L;
                if (j > V) {
                    U = b.lastIndexOf(";", j - 1) + 1;
                    continue;
                }
                const K = p(b, U, j), W = h(b, j, K), J = b.slice(K, W);
                if (N[J] === void 0) {
                    let $ = p(b, j + 1, V), ne = h(b, V, $);
                    const Ce = w(b.slice($, ne));
                    N[J] = Ce;
                }
                U = V + 1;
            }while (U < B);
            return N;
        }
        function p(b, A, N) {
            do {
                const B = b.charCodeAt(A);
                if (B !== 32 && B !== 9) return A;
            }while (++A < N);
            return N;
        }
        function h(b, A, N) {
            for(; A > N;){
                const B = b.charCodeAt(--A);
                if (B !== 32 && B !== 9) return A + 1;
            }
            return N;
        }
        function v(b, A, N) {
            const B = N?.encode || encodeURIComponent;
            if (!u.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
            const w = B(A);
            if (!r.test(w)) throw new TypeError(`argument val is invalid: ${A}`);
            let U = b + "=" + w;
            if (!N) return U;
            if (N.maxAge !== void 0) {
                if (!Number.isInteger(N.maxAge)) throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);
                U += "; Max-Age=" + N.maxAge;
            }
            if (N.domain) {
                if (!c.test(N.domain)) throw new TypeError(`option domain is invalid: ${N.domain}`);
                U += "; Domain=" + N.domain;
            }
            if (N.path) {
                if (!f.test(N.path)) throw new TypeError(`option path is invalid: ${N.path}`);
                U += "; Path=" + N.path;
            }
            if (N.expires) {
                if (!T(N.expires) || !Number.isFinite(N.expires.valueOf())) throw new TypeError(`option expires is invalid: ${N.expires}`);
                U += "; Expires=" + N.expires.toUTCString();
            }
            if (N.httpOnly && (U += "; HttpOnly"), N.secure && (U += "; Secure"), N.partitioned && (U += "; Partitioned"), N.priority) switch(typeof N.priority == "string" ? N.priority.toLowerCase() : void 0){
                case "low":
                    U += "; Priority=Low";
                    break;
                case "medium":
                    U += "; Priority=Medium";
                    break;
                case "high":
                    U += "; Priority=High";
                    break;
                default:
                    throw new TypeError(`option priority is invalid: ${N.priority}`);
            }
            if (N.sameSite) switch(typeof N.sameSite == "string" ? N.sameSite.toLowerCase() : N.sameSite){
                case !0:
                case "strict":
                    U += "; SameSite=Strict";
                    break;
                case "lax":
                    U += "; SameSite=Lax";
                    break;
                case "none":
                    U += "; SameSite=None";
                    break;
                default:
                    throw new TypeError(`option sameSite is invalid: ${N.sameSite}`);
            }
            return U;
        }
        function S(b) {
            if (b.indexOf("%") === -1) return b;
            try {
                return decodeURIComponent(b);
            } catch  {
                return b;
            }
        }
        function T(b) {
            return o.call(b) === "[object Date]";
        }
        return $a;
    }
    $v();
    var np = "popstate";
    function Fv(u = {}) {
        function r(o, s) {
            let { pathname: y = "/", search: p = "", hash: h = "" } = un(o.location.hash.substring(1));
            return !y.startsWith("/") && !y.startsWith(".") && (y = "/" + y), vf("", {
                pathname: y,
                search: p,
                hash: h
            }, s.state && s.state.usr || null, s.state && s.state.key || "default");
        }
        function c(o, s) {
            let y = o.document.querySelector("base"), p = "";
            if (y && y.getAttribute("href")) {
                let h = o.location.href, v = h.indexOf("#");
                p = v === -1 ? h : h.slice(0, v);
            }
            return p + "#" + (typeof s == "string" ? s : nu(s));
        }
        function f(o, s) {
            Ut(o.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`);
        }
        return Iv(r, c, f, u);
    }
    function Me(u, r) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(r);
    }
    function Ut(u, r) {
        if (!u) {
            typeof console < "u" && console.warn(r);
            try {
                throw new Error(r);
            } catch  {}
        }
    }
    function Wv() {
        return Math.random().toString(36).substring(2, 10);
    }
    function ap(u, r) {
        return {
            usr: u.state,
            key: u.key,
            idx: r
        };
    }
    function vf(u, r, c = null, f) {
        return {
            pathname: typeof u == "string" ? u : u.pathname,
            search: "",
            hash: "",
            ...typeof r == "string" ? un(r) : r,
            state: c,
            key: r && r.key || f || Wv()
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
    function Iv(u, r, c, f = {}) {
        let { window: o = document.defaultView, v5Compat: s = !1 } = f, y = o.history, p = "POP", h = null, v = S();
        v == null && (v = 0, y.replaceState({
            ...y.state,
            idx: v
        }, ""));
        function S() {
            return (y.state || {
                idx: null
            }).idx;
        }
        function T() {
            p = "POP";
            let w = S(), U = w == null ? null : w - v;
            v = w, h && h({
                action: p,
                location: B.location,
                delta: U
            });
        }
        function b(w, U) {
            p = "PUSH";
            let j = vf(B.location, w, U);
            c && c(j, w), v = S() + 1;
            let L = ap(j, v), V = B.createHref(j);
            try {
                y.pushState(L, "", V);
            } catch (K) {
                if (K instanceof DOMException && K.name === "DataCloneError") throw K;
                o.location.assign(V);
            }
            s && h && h({
                action: p,
                location: B.location,
                delta: 1
            });
        }
        function A(w, U) {
            p = "REPLACE";
            let j = vf(B.location, w, U);
            c && c(j, w), v = S();
            let L = ap(j, v), V = B.createHref(j);
            y.replaceState(L, "", V), s && h && h({
                action: p,
                location: B.location,
                delta: 0
            });
        }
        function N(w) {
            let U = o.location.origin !== "null" ? o.location.origin : o.location.href, j = typeof w == "string" ? w : nu(w);
            return j = j.replace(/ $/, "%20"), Me(U, `No window.location.(origin|href) available to create URL for href: ${j}`), new URL(j, U);
        }
        let B = {
            get action () {
                return p;
            },
            get location () {
                return u(o, y);
            },
            listen (w) {
                if (h) throw new Error("A history only accepts one active listener");
                return o.addEventListener(np, T), h = w, ()=>{
                    o.removeEventListener(np, T), h = null;
                };
            },
            createHref (w) {
                return r(o, w);
            },
            createURL: N,
            encodeLocation (w) {
                let U = N(w);
                return {
                    pathname: U.pathname,
                    search: U.search,
                    hash: U.hash
                };
            },
            push: b,
            replace: A,
            go (w) {
                return y.go(w);
            }
        };
        return B;
    }
    function Jp(u, r, c = "/") {
        return eg(u, r, c, !1);
    }
    function eg(u, r, c, f) {
        let o = typeof r == "string" ? un(r) : r, s = al(o.pathname || "/", c);
        if (s == null) return null;
        let y = $p(u);
        tg(y);
        let p = null;
        for(let h = 0; p == null && h < y.length; ++h){
            let v = dg(s);
            p = og(y[h], v, f);
        }
        return p;
    }
    function $p(u, r = [], c = [], f = "") {
        let o = (s, y, p)=>{
            let h = {
                relativePath: p === void 0 ? s.path || "" : p,
                caseSensitive: s.caseSensitive === !0,
                childrenIndex: y,
                route: s
            };
            h.relativePath.startsWith("/") && (Me(h.relativePath.startsWith(f), `Absolute route path "${h.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(f.length));
            let v = nl([
                f,
                h.relativePath
            ]), S = c.concat(h);
            s.children && s.children.length > 0 && (Me(s.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`), $p(s.children, r, S, v)), !(s.path == null && !s.index) && r.push({
                path: v,
                score: cg(v, s.index),
                routesMeta: S
            });
        };
        return u.forEach((s, y)=>{
            if (s.path === "" || !s.path?.includes("?")) o(s, y);
            else for (let p of Fp(s.path))o(s, y, p);
        }), r;
    }
    function Fp(u) {
        let r = u.split("/");
        if (r.length === 0) return [];
        let [c, ...f] = r, o = c.endsWith("?"), s = c.replace(/\?$/, "");
        if (f.length === 0) return o ? [
            s,
            ""
        ] : [
            s
        ];
        let y = Fp(f.join("/")), p = [];
        return p.push(...y.map((h)=>h === "" ? s : [
                s,
                h
            ].join("/"))), o && p.push(...y), p.map((h)=>u.startsWith("/") && h === "" ? "/" : h);
    }
    function tg(u) {
        u.sort((r, c)=>r.score !== c.score ? c.score - r.score : fg(r.routesMeta.map((f)=>f.childrenIndex), c.routesMeta.map((f)=>f.childrenIndex)));
    }
    var lg = /^:[\w-]+$/, ng = 3, ag = 2, ug = 1, ig = 10, rg = -2, up = (u)=>u === "*";
    function cg(u, r) {
        let c = u.split("/"), f = c.length;
        return c.some(up) && (f += rg), r && (f += ag), c.filter((o)=>!up(o)).reduce((o, s)=>o + (lg.test(s) ? ng : s === "" ? ug : ig), f);
    }
    function fg(u, r) {
        return u.length === r.length && u.slice(0, -1).every((f, o)=>f === r[o]) ? u[u.length - 1] - r[r.length - 1] : 0;
    }
    function og(u, r, c = !1) {
        let { routesMeta: f } = u, o = {}, s = "/", y = [];
        for(let p = 0; p < f.length; ++p){
            let h = f[p], v = p === f.length - 1, S = s === "/" ? r : r.slice(s.length) || "/", T = Ui({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: v
            }, S), b = h.route;
            if (!T && v && c && !f[f.length - 1].route.index && (T = Ui({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: !1
            }, S)), !T) return null;
            Object.assign(o, T.params), y.push({
                params: o,
                pathname: nl([
                    s,
                    T.pathname
                ]),
                pathnameBase: yg(nl([
                    s,
                    T.pathnameBase
                ])),
                route: b
            }), T.pathnameBase !== "/" && (s = nl([
                s,
                T.pathnameBase
            ]));
        }
        return y;
    }
    function Ui(u, r) {
        typeof u == "string" && (u = {
            path: u,
            caseSensitive: !1,
            end: !0
        });
        let [c, f] = sg(u.path, u.caseSensitive, u.end), o = r.match(c);
        if (!o) return null;
        let s = o[0], y = s.replace(/(.)\/+$/, "$1"), p = o.slice(1);
        return {
            params: f.reduce((v, { paramName: S, isOptional: T }, b)=>{
                if (S === "*") {
                    let N = p[b] || "";
                    y = s.slice(0, s.length - N.length).replace(/(.)\/+$/, "$1");
                }
                const A = p[b];
                return T && !A ? v[S] = void 0 : v[S] = (A || "").replace(/%2F/g, "/"), v;
            }, {}),
            pathname: s,
            pathnameBase: y,
            pattern: u
        };
    }
    function sg(u, r = !1, c = !0) {
        Ut(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`);
        let f = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (y, p, h)=>(f.push({
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
    function dg(u) {
        try {
            return u.split("/").map((r)=>decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
        } catch (r) {
            return Ut(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), u;
        }
    }
    function al(u, r) {
        if (r === "/") return u;
        if (!u.toLowerCase().startsWith(r.toLowerCase())) return null;
        let c = r.endsWith("/") ? r.length - 1 : r.length, f = u.charAt(c);
        return f && f !== "/" ? null : u.slice(c) || "/";
    }
    function hg(u, r = "/") {
        let { pathname: c, search: f = "", hash: o = "" } = typeof u == "string" ? un(u) : u;
        return {
            pathname: c ? c.startsWith("/") ? c : pg(c, r) : r,
            search: vg(f),
            hash: gg(o)
        };
    }
    function pg(u, r) {
        let c = r.replace(/\/+$/, "").split("/");
        return u.split("/").forEach((o)=>{
            o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
        }), c.length > 1 ? c.join("/") : "/";
    }
    function df(u, r, c, f) {
        return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function mg(u) {
        return u.filter((r, c)=>c === 0 || r.route.path && r.route.path.length > 0);
    }
    function Wp(u) {
        let r = mg(u);
        return r.map((c, f)=>f === r.length - 1 ? c.pathname : c.pathnameBase);
    }
    function Ip(u, r, c, f = !1) {
        let o;
        typeof u == "string" ? o = un(u) : (o = {
            ...u
        }, Me(!o.pathname || !o.pathname.includes("?"), df("?", "pathname", "search", o)), Me(!o.pathname || !o.pathname.includes("#"), df("#", "pathname", "hash", o)), Me(!o.search || !o.search.includes("#"), df("#", "search", "hash", o)));
        let s = u === "" || o.pathname === "", y = s ? "/" : o.pathname, p;
        if (y == null) p = c;
        else {
            let T = r.length - 1;
            if (!f && y.startsWith("..")) {
                let b = y.split("/");
                for(; b[0] === "..";)b.shift(), T -= 1;
                o.pathname = b.join("/");
            }
            p = T >= 0 ? r[T] : "/";
        }
        let h = hg(o, p), v = y && y !== "/" && y.endsWith("/"), S = (s || y === ".") && c.endsWith("/");
        return !h.pathname.endsWith("/") && (v || S) && (h.pathname += "/"), h;
    }
    var nl = (u)=>u.join("/").replace(/\/\/+/g, "/"), yg = (u)=>u.replace(/\/+$/, "").replace(/^\/*/, "/"), vg = (u)=>!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, gg = (u)=>!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
    function bg(u) {
        return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
    }
    var em = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(em);
    var Sg = [
        "GET",
        ...em
    ];
    new Set(Sg);
    var Zn = O.createContext(null);
    Zn.displayName = "DataRouter";
    var zi = O.createContext(null);
    zi.displayName = "DataRouterState";
    var tm = O.createContext({
        isTransitioning: !1
    });
    tm.displayName = "ViewTransition";
    var Eg = O.createContext(new Map);
    Eg.displayName = "Fetchers";
    var _g = O.createContext(null);
    _g.displayName = "Await";
    var Lt = O.createContext(null);
    Lt.displayName = "Navigation";
    var au = O.createContext(null);
    au.displayName = "Location";
    var ul = O.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    ul.displayName = "Route";
    var Nf = O.createContext(null);
    Nf.displayName = "RouteError";
    function Tg(u, { relative: r } = {}) {
        Me(uu(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: c, navigator: f } = O.useContext(Lt), { hash: o, pathname: s, search: y } = iu(u, {
            relative: r
        }), p = s;
        return c !== "/" && (p = s === "/" ? c : nl([
            c,
            s
        ])), f.createHref({
            pathname: p,
            search: y,
            hash: o
        });
    }
    function uu() {
        return O.useContext(au) != null;
    }
    function rn() {
        return Me(uu(), "useLocation() may be used only in the context of a <Router> component."), O.useContext(au).location;
    }
    var lm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function nm(u) {
        O.useContext(Lt).static || O.useLayoutEffect(u);
    }
    function Rg() {
        let { isDataRoute: u } = O.useContext(ul);
        return u ? qg() : Ag();
    }
    function Ag() {
        Me(uu(), "useNavigate() may be used only in the context of a <Router> component.");
        let u = O.useContext(Zn), { basename: r, navigator: c } = O.useContext(Lt), { matches: f } = O.useContext(ul), { pathname: o } = rn(), s = JSON.stringify(Wp(f)), y = O.useRef(!1);
        return nm(()=>{
            y.current = !0;
        }), O.useCallback((h, v = {})=>{
            if (Ut(y.current, lm), !y.current) return;
            if (typeof h == "number") {
                c.go(h);
                return;
            }
            let S = Ip(h, JSON.parse(s), o, v.relative === "path");
            u == null && r !== "/" && (S.pathname = S.pathname === "/" ? r : nl([
                r,
                S.pathname
            ])), (v.replace ? c.replace : c.push)(S, v.state, v);
        }, [
            r,
            c,
            s,
            o,
            u
        ]);
    }
    O.createContext(null);
    function iu(u, { relative: r } = {}) {
        let { matches: c } = O.useContext(ul), { pathname: f } = rn(), o = JSON.stringify(Wp(c));
        return O.useMemo(()=>Ip(u, JSON.parse(o), f, r === "path"), [
            u,
            o,
            f,
            r
        ]);
    }
    function Og(u, r) {
        return am(u, r);
    }
    function am(u, r, c, f) {
        Me(uu(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: s } = O.useContext(Lt), { matches: y } = O.useContext(ul), p = y[y.length - 1], h = p ? p.params : {}, v = p ? p.pathname : "/", S = p ? p.pathnameBase : "/", T = p && p.route;
        {
            let j = T && T.path || "";
            um(v, !T || j.endsWith("*") || j.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j === "/" ? "*" : `${j}/*`}">.`);
        }
        let b = rn(), A;
        if (r) {
            let j = typeof r == "string" ? un(r) : r;
            Me(S === "/" || j.pathname?.startsWith(S), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${j.pathname}" was given in the \`location\` prop.`), A = j;
        } else A = b;
        let N = A.pathname || "/", B = N;
        if (S !== "/") {
            let j = S.replace(/^\//, "").split("/");
            B = "/" + N.replace(/^\//, "").split("/").slice(j.length).join("/");
        }
        let w = !s && c && c.matches && c.matches.length > 0 ? c.matches : Jp(u, {
            pathname: B
        });
        Ut(T || w != null, `No routes matched location "${A.pathname}${A.search}${A.hash}" `), Ut(w == null || w[w.length - 1].route.element !== void 0 || w[w.length - 1].route.Component !== void 0 || w[w.length - 1].route.lazy !== void 0, `Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let U = Dg(w && w.map((j)=>Object.assign({}, j, {
                params: Object.assign({}, h, j.params),
                pathname: nl([
                    S,
                    o.encodeLocation ? o.encodeLocation(j.pathname).pathname : j.pathname
                ]),
                pathnameBase: j.pathnameBase === "/" ? S : nl([
                    S,
                    o.encodeLocation ? o.encodeLocation(j.pathnameBase).pathname : j.pathnameBase
                ])
            })), y, c, f);
        return r && U ? O.createElement(au.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    ...A
                },
                navigationType: "POP"
            }
        }, U) : U;
    }
    function Ng() {
        let u = Pg(), r = bg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, f = "rgba(200,200,200, 0.5)", o = {
            padding: "0.5rem",
            backgroundColor: f
        }, s = {
            padding: "2px 4px",
            backgroundColor: f
        }, y = null;
        return console.error("Error handled by React Router default ErrorBoundary:", u), y = O.createElement(O.Fragment, null, O.createElement("p", null, "💿 Hey developer 👋"), O.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", O.createElement("code", {
            style: s
        }, "ErrorBoundary"), " or", " ", O.createElement("code", {
            style: s
        }, "errorElement"), " prop on your route.")), O.createElement(O.Fragment, null, O.createElement("h2", null, "Unexpected Application Error!"), O.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), c ? O.createElement("pre", {
            style: o
        }, c) : null, y);
    }
    var xg = O.createElement(Ng, null), Mg = class extends O.Component {
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
            return this.state.error !== void 0 ? O.createElement(ul.Provider, {
                value: this.props.routeContext
            }, O.createElement(Nf.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function Cg({ routeContext: u, match: r, children: c }) {
        let f = O.useContext(Zn);
        return f && f.static && f.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = r.route.id), O.createElement(ul.Provider, {
            value: u
        }, c);
    }
    function Dg(u, r = [], c = null, f = null) {
        if (u == null) {
            if (!c) return null;
            if (c.errors) u = c.matches;
            else if (r.length === 0 && !c.initialized && c.matches.length > 0) u = c.matches;
            else return null;
        }
        let o = u, s = c?.errors;
        if (s != null) {
            let h = o.findIndex((v)=>v.route.id && s?.[v.route.id] !== void 0);
            Me(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`), o = o.slice(0, Math.min(o.length, h + 1));
        }
        let y = !1, p = -1;
        if (c) for(let h = 0; h < o.length; h++){
            let v = o[h];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (p = h), v.route.id) {
                let { loaderData: S, errors: T } = c, b = v.route.loader && !S.hasOwnProperty(v.route.id) && (!T || T[v.route.id] === void 0);
                if (v.route.lazy || b) {
                    y = !0, p >= 0 ? o = o.slice(0, p + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((h, v, S)=>{
            let T, b = !1, A = null, N = null;
            c && (T = s && v.route.id ? s[v.route.id] : void 0, A = v.route.errorElement || xg, y && (p < 0 && S === 0 ? (um("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), b = !0, N = null) : p === S && (b = !0, N = v.route.hydrateFallbackElement || null)));
            let B = r.concat(o.slice(0, S + 1)), w = ()=>{
                let U;
                return T ? U = A : b ? U = N : v.route.Component ? U = O.createElement(v.route.Component, null) : v.route.element ? U = v.route.element : U = h, O.createElement(Cg, {
                    match: v,
                    routeContext: {
                        outlet: h,
                        matches: B,
                        isDataRoute: c != null
                    },
                    children: U
                });
            };
            return c && (v.route.ErrorBoundary || v.route.errorElement || S === 0) ? O.createElement(Mg, {
                location: c.location,
                revalidation: c.revalidation,
                component: A,
                error: T,
                children: w(),
                routeContext: {
                    outlet: null,
                    matches: B,
                    isDataRoute: !0
                }
            }) : w();
        }, null);
    }
    function xf(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Bg(u) {
        let r = O.useContext(Zn);
        return Me(r, xf(u)), r;
    }
    function Ug(u) {
        let r = O.useContext(zi);
        return Me(r, xf(u)), r;
    }
    function wg(u) {
        let r = O.useContext(ul);
        return Me(r, xf(u)), r;
    }
    function Mf(u) {
        let r = wg(u), c = r.matches[r.matches.length - 1];
        return Me(c.route.id, `${u} can only be used on routes that contain a unique "id"`), c.route.id;
    }
    function zg() {
        return Mf("useRouteId");
    }
    function Pg() {
        let u = O.useContext(Nf), r = Ug("useRouteError"), c = Mf("useRouteError");
        return u !== void 0 ? u : r.errors?.[c];
    }
    function qg() {
        let { router: u } = Bg("useNavigate"), r = Mf("useNavigate"), c = O.useRef(!1);
        return nm(()=>{
            c.current = !0;
        }), O.useCallback(async (o, s = {})=>{
            Ut(c.current, lm), c.current && (typeof o == "number" ? u.navigate(o) : await u.navigate(o, {
                fromRouteId: r,
                ...s
            }));
        }, [
            u,
            r
        ]);
    }
    var ip = {};
    function um(u, r, c) {
        !r && !ip[u] && (ip[u] = !0, Ut(!1, c));
    }
    O.memo(Hg);
    function Hg({ routes: u, future: r, state: c }) {
        return am(u, void 0, c, r);
    }
    function eu(u) {
        Me(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function kg({ basename: u = "/", children: r = null, location: c, navigationType: f = "POP", navigator: o, static: s = !1 }) {
        Me(!uu(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let y = u.replace(/^\/*/, "/"), p = O.useMemo(()=>({
                basename: y,
                navigator: o,
                static: s,
                future: {}
            }), [
            y,
            o,
            s
        ]);
        typeof c == "string" && (c = un(c));
        let { pathname: h = "/", search: v = "", hash: S = "", state: T = null, key: b = "default" } = c, A = O.useMemo(()=>{
            let N = al(h, y);
            return N == null ? null : {
                location: {
                    pathname: N,
                    search: v,
                    hash: S,
                    state: T,
                    key: b
                },
                navigationType: f
            };
        }, [
            y,
            h,
            v,
            S,
            T,
            b,
            f
        ]);
        return Ut(A != null, `<Router basename="${y}"> is not able to match the URL "${h}${v}${S}" because it does not start with the basename, so the <Router> won't render anything.`), A == null ? null : O.createElement(Lt.Provider, {
            value: p
        }, O.createElement(au.Provider, {
            children: r,
            value: A
        }));
    }
    function Lg({ children: u, location: r }) {
        return Og(gf(u), r);
    }
    function gf(u, r = []) {
        let c = [];
        return O.Children.forEach(u, (f, o)=>{
            if (!O.isValidElement(f)) return;
            let s = [
                ...r,
                o
            ];
            if (f.type === O.Fragment) {
                c.push.apply(c, gf(f.props.children, s));
                return;
            }
            Me(f.type === eu, `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Me(!f.props.index || !f.props.children, "An index route cannot have child routes.");
            let y = {
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
            f.props.children && (y.children = gf(f.props.children, s)), c.push(y);
        }), c;
    }
    var Mi = "get", Ci = "application/x-www-form-urlencoded";
    function Pi(u) {
        return u != null && typeof u.tagName == "string";
    }
    function jg(u) {
        return Pi(u) && u.tagName.toLowerCase() === "button";
    }
    function Qg(u) {
        return Pi(u) && u.tagName.toLowerCase() === "form";
    }
    function Kg(u) {
        return Pi(u) && u.tagName.toLowerCase() === "input";
    }
    function Gg(u) {
        return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
    }
    function Yg(u, r) {
        return u.button === 0 && (!r || r === "_self") && !Gg(u);
    }
    var Oi = null;
    function Vg() {
        if (Oi === null) try {
            new FormData(document.createElement("form"), 0), Oi = !1;
        } catch  {
            Oi = !0;
        }
        return Oi;
    }
    var Xg = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function hf(u) {
        return u != null && !Xg.has(u) ? (Ut(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ci}"`), null) : u;
    }
    function Zg(u, r) {
        let c, f, o, s, y;
        if (Qg(u)) {
            let p = u.getAttribute("action");
            f = p ? al(p, r) : null, c = u.getAttribute("method") || Mi, o = hf(u.getAttribute("enctype")) || Ci, s = new FormData(u);
        } else if (jg(u) || Kg(u) && (u.type === "submit" || u.type === "image")) {
            let p = u.form;
            if (p == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let h = u.getAttribute("formaction") || p.getAttribute("action");
            if (f = h ? al(h, r) : null, c = u.getAttribute("formmethod") || p.getAttribute("method") || Mi, o = hf(u.getAttribute("formenctype")) || hf(p.getAttribute("enctype")) || Ci, s = new FormData(p, u), !Vg()) {
                let { name: v, type: S, value: T } = u;
                if (S === "image") {
                    let b = v ? `${v}.` : "";
                    s.append(`${b}x`, "0"), s.append(`${b}y`, "0");
                } else v && s.append(v, T);
            }
        } else {
            if (Pi(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            c = Mi, f = null, o = Ci, y = u;
        }
        return s && o === "text/plain" && (y = s, s = void 0), {
            action: f,
            method: c.toLowerCase(),
            encType: o,
            formData: s,
            body: y
        };
    }
    function Cf(u, r) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(r);
    }
    async function Jg(u, r) {
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
    function $g(u) {
        return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
    }
    async function Fg(u, r, c) {
        let f = await Promise.all(u.map(async (o)=>{
            let s = r.routes[o.route.id];
            if (s) {
                let y = await Jg(s, c);
                return y.links ? y.links() : [];
            }
            return [];
        }));
        return tb(f.flat(1).filter($g).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function rp(u, r, c, f, o, s) {
        let y = (h, v)=>c[v] ? h.route.id !== c[v].route.id : !0, p = (h, v)=>c[v].pathname !== h.pathname || c[v].route.path?.endsWith("*") && c[v].params["*"] !== h.params["*"];
        return s === "assets" ? r.filter((h, v)=>y(h, v) || p(h, v)) : s === "data" ? r.filter((h, v)=>{
            let S = f.routes[h.route.id];
            if (!S || !S.hasLoader) return !1;
            if (y(h, v) || p(h, v)) return !0;
            if (h.route.shouldRevalidate) {
                let T = h.route.shouldRevalidate({
                    currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                    currentParams: c[0]?.params || {},
                    nextUrl: new URL(u, window.origin),
                    nextParams: h.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof T == "boolean") return T;
            }
            return !0;
        }) : [];
    }
    function Wg(u, r, { includeHydrateFallback: c } = {}) {
        return Ig(u.map((f)=>{
            let o = r.routes[f.route.id];
            if (!o) return [];
            let s = [
                o.module
            ];
            return o.clientActionModule && (s = s.concat(o.clientActionModule)), o.clientLoaderModule && (s = s.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (s = s.concat(o.hydrateFallbackModule)), o.imports && (s = s.concat(o.imports)), s;
        }).flat(1));
    }
    function Ig(u) {
        return [
            ...new Set(u)
        ];
    }
    function eb(u) {
        let r = {}, c = Object.keys(u).sort();
        for (let f of c)r[f] = u[f];
        return r;
    }
    function tb(u, r) {
        let c = new Set;
        return new Set(r), u.reduce((f, o)=>{
            let s = JSON.stringify(eb(o));
            return c.has(s) || (c.add(s), f.push({
                key: s,
                link: o
            })), f;
        }, []);
    }
    function lb(u, r) {
        let c = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
        return c.pathname === "/" ? c.pathname = "_root.data" : r && al(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
    }
    function im() {
        let u = O.useContext(Zn);
        return Cf(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
    }
    function nb() {
        let u = O.useContext(zi);
        return Cf(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
    }
    var Df = O.createContext(void 0);
    Df.displayName = "FrameworkContext";
    function rm() {
        let u = O.useContext(Df);
        return Cf(u, "You must render this element inside a <HydratedRouter> element"), u;
    }
    function ab(u, r) {
        let c = O.useContext(Df), [f, o] = O.useState(!1), [s, y] = O.useState(!1), { onFocus: p, onBlur: h, onMouseEnter: v, onMouseLeave: S, onTouchStart: T } = r, b = O.useRef(null);
        O.useEffect(()=>{
            if (u === "render" && y(!0), u === "viewport") {
                let B = (U)=>{
                    U.forEach((j)=>{
                        y(j.isIntersecting);
                    });
                }, w = new IntersectionObserver(B, {
                    threshold: .5
                });
                return b.current && w.observe(b.current), ()=>{
                    w.disconnect();
                };
            }
        }, [
            u
        ]), O.useEffect(()=>{
            if (f) {
                let B = setTimeout(()=>{
                    y(!0);
                }, 100);
                return ()=>{
                    clearTimeout(B);
                };
            }
        }, [
            f
        ]);
        let A = ()=>{
            o(!0);
        }, N = ()=>{
            o(!1), y(!1);
        };
        return c ? u !== "intent" ? [
            s,
            b,
            {}
        ] : [
            s,
            b,
            {
                onFocus: Fa(p, A),
                onBlur: Fa(h, N),
                onMouseEnter: Fa(v, A),
                onMouseLeave: Fa(S, N),
                onTouchStart: Fa(T, A)
            }
        ] : [
            !1,
            b,
            {}
        ];
    }
    function Fa(u, r) {
        return (c)=>{
            u && u(c), c.defaultPrevented || r(c);
        };
    }
    function ub({ page: u, ...r }) {
        let { router: c } = im(), f = O.useMemo(()=>Jp(c.routes, u, c.basename), [
            c.routes,
            u,
            c.basename
        ]);
        return f ? O.createElement(rb, {
            page: u,
            matches: f,
            ...r
        }) : null;
    }
    function ib(u) {
        let { manifest: r, routeModules: c } = rm(), [f, o] = O.useState([]);
        return O.useEffect(()=>{
            let s = !1;
            return Fg(u, r, c).then((y)=>{
                s || o(y);
            }), ()=>{
                s = !0;
            };
        }, [
            u,
            r,
            c
        ]), f;
    }
    function rb({ page: u, matches: r, ...c }) {
        let f = rn(), { manifest: o, routeModules: s } = rm(), { basename: y } = im(), { loaderData: p, matches: h } = nb(), v = O.useMemo(()=>rp(u, r, h, o, f, "data"), [
            u,
            r,
            h,
            o,
            f
        ]), S = O.useMemo(()=>rp(u, r, h, o, f, "assets"), [
            u,
            r,
            h,
            o,
            f
        ]), T = O.useMemo(()=>{
            if (u === f.pathname + f.search + f.hash) return [];
            let N = new Set, B = !1;
            if (r.forEach((U)=>{
                let j = o.routes[U.route.id];
                !j || !j.hasLoader || (!v.some((L)=>L.route.id === U.route.id) && U.route.id in p && s[U.route.id]?.shouldRevalidate || j.hasClientLoader ? B = !0 : N.add(U.route.id));
            }), N.size === 0) return [];
            let w = lb(u, y);
            return B && N.size > 0 && w.searchParams.set("_routes", r.filter((U)=>N.has(U.route.id)).map((U)=>U.route.id).join(",")), [
                w.pathname + w.search
            ];
        }, [
            y,
            p,
            f,
            o,
            v,
            r,
            u,
            s
        ]), b = O.useMemo(()=>Wg(S, o), [
            S,
            o
        ]), A = ib(S);
        return O.createElement(O.Fragment, null, T.map((N)=>O.createElement("link", {
                key: N,
                rel: "prefetch",
                as: "fetch",
                href: N,
                ...c
            })), b.map((N)=>O.createElement("link", {
                key: N,
                rel: "modulepreload",
                href: N,
                ...c
            })), A.map(({ key: N, link: B })=>O.createElement("link", {
                key: N,
                ...B
            })));
    }
    function cb(...u) {
        return (r)=>{
            u.forEach((c)=>{
                typeof c == "function" ? c(r) : c != null && (c.current = r);
            });
        };
    }
    var cm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        cm && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function fb({ basename: u, children: r, window: c }) {
        let f = O.useRef();
        f.current == null && (f.current = Fv({
            window: c,
            v5Compat: !0
        }));
        let o = f.current, [s, y] = O.useState({
            action: o.action,
            location: o.location
        }), p = O.useCallback((h)=>{
            O.startTransition(()=>y(h));
        }, [
            y
        ]);
        return O.useLayoutEffect(()=>o.listen(p), [
            o,
            p
        ]), O.createElement(kg, {
            basename: u,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: o
        });
    }
    var fm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, tu = O.forwardRef(function({ onClick: r, discover: c = "render", prefetch: f = "none", relative: o, reloadDocument: s, replace: y, state: p, target: h, to: v, preventScrollReset: S, viewTransition: T, ...b }, A) {
        let { basename: N } = O.useContext(Lt), B = typeof v == "string" && fm.test(v), w, U = !1;
        if (typeof v == "string" && B && (w = v, cm)) try {
            let ne = new URL(window.location.href), Ce = v.startsWith("//") ? new URL(ne.protocol + v) : new URL(v), je = al(Ce.pathname, N);
            Ce.origin === ne.origin && je != null ? v = je + Ce.search + Ce.hash : U = !0;
        } catch  {
            Ut(!1, `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let j = Tg(v, {
            relative: o
        }), [L, V, K] = ab(f, b), W = hb(v, {
            replace: y,
            state: p,
            target: h,
            preventScrollReset: S,
            relative: o,
            viewTransition: T
        });
        function J(ne) {
            r && r(ne), ne.defaultPrevented || W(ne);
        }
        let $ = O.createElement("a", {
            ...b,
            ...K,
            href: w || j,
            onClick: U || s ? r : J,
            ref: cb(A, V),
            target: h,
            "data-discover": !B && c === "render" ? "true" : void 0
        });
        return L && !B ? O.createElement(O.Fragment, null, $, O.createElement(ub, {
            page: j
        })) : $;
    });
    tu.displayName = "Link";
    var ob = O.forwardRef(function({ "aria-current": r = "page", caseSensitive: c = !1, className: f = "", end: o = !1, style: s, to: y, viewTransition: p, children: h, ...v }, S) {
        let T = iu(y, {
            relative: v.relative
        }), b = rn(), A = O.useContext(zi), { navigator: N, basename: B } = O.useContext(Lt), w = A != null && gb(T) && p === !0, U = N.encodeLocation ? N.encodeLocation(T).pathname : T.pathname, j = b.pathname, L = A && A.navigation && A.navigation.location ? A.navigation.location.pathname : null;
        c || (j = j.toLowerCase(), L = L ? L.toLowerCase() : null, U = U.toLowerCase()), L && B && (L = al(L, B) || L);
        const V = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
        let K = j === U || !o && j.startsWith(U) && j.charAt(V) === "/", W = L != null && (L === U || !o && L.startsWith(U) && L.charAt(U.length) === "/"), J = {
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
        return O.createElement(tu, {
            ...v,
            "aria-current": $,
            className: ne,
            ref: S,
            style: Ce,
            to: y,
            viewTransition: p
        }, typeof h == "function" ? h(J) : h);
    });
    ob.displayName = "NavLink";
    var sb = O.forwardRef(({ discover: u = "render", fetcherKey: r, navigate: c, reloadDocument: f, replace: o, state: s, method: y = Mi, action: p, onSubmit: h, relative: v, preventScrollReset: S, viewTransition: T, ...b }, A)=>{
        let N = yb(), B = vb(p, {
            relative: v
        }), w = y.toLowerCase() === "get" ? "get" : "post", U = typeof p == "string" && fm.test(p), j = (L)=>{
            if (h && h(L), L.defaultPrevented) return;
            L.preventDefault();
            let V = L.nativeEvent.submitter, K = V?.getAttribute("formmethod") || y;
            N(V || L.currentTarget, {
                fetcherKey: r,
                method: K,
                navigate: c,
                replace: o,
                state: s,
                relative: v,
                preventScrollReset: S,
                viewTransition: T
            });
        };
        return O.createElement("form", {
            ref: A,
            method: w,
            action: B,
            onSubmit: f ? h : j,
            ...b,
            "data-discover": !U && u === "render" ? "true" : void 0
        });
    });
    sb.displayName = "Form";
    function db(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function om(u) {
        let r = O.useContext(Zn);
        return Me(r, db(u)), r;
    }
    function hb(u, { target: r, replace: c, state: f, preventScrollReset: o, relative: s, viewTransition: y } = {}) {
        let p = Rg(), h = rn(), v = iu(u, {
            relative: s
        });
        return O.useCallback((S)=>{
            if (Yg(S, r)) {
                S.preventDefault();
                let T = c !== void 0 ? c : nu(h) === nu(v);
                p(u, {
                    replace: T,
                    state: f,
                    preventScrollReset: o,
                    relative: s,
                    viewTransition: y
                });
            }
        }, [
            h,
            p,
            v,
            c,
            f,
            r,
            u,
            o,
            s,
            y
        ]);
    }
    var pb = 0, mb = ()=>`__${String(++pb)}__`;
    function yb() {
        let { router: u } = om("useSubmit"), { basename: r } = O.useContext(Lt), c = zg();
        return O.useCallback(async (f, o = {})=>{
            let { action: s, method: y, encType: p, formData: h, body: v } = Zg(f, r);
            if (o.navigate === !1) {
                let S = o.fetcherKey || mb();
                await u.fetch(S, c, o.action || s, {
                    preventScrollReset: o.preventScrollReset,
                    formData: h,
                    body: v,
                    formMethod: o.method || y,
                    formEncType: o.encType || p,
                    flushSync: o.flushSync
                });
            } else await u.navigate(o.action || s, {
                preventScrollReset: o.preventScrollReset,
                formData: h,
                body: v,
                formMethod: o.method || y,
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
    function vb(u, { relative: r } = {}) {
        let { basename: c } = O.useContext(Lt), f = O.useContext(ul);
        Me(f, "useFormAction must be used inside a RouteContext");
        let [o] = f.matches.slice(-1), s = {
            ...iu(u || ".", {
                relative: r
            })
        }, y = rn();
        if (u == null) {
            s.search = y.search;
            let p = new URLSearchParams(s.search), h = p.getAll("index");
            if (h.some((S)=>S === "")) {
                p.delete("index"), h.filter((T)=>T).forEach((T)=>p.append("index", T));
                let S = p.toString();
                s.search = S ? `?${S}` : "";
            }
        }
        return (!u || u === ".") && o.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (s.pathname = s.pathname === "/" ? c : nl([
            c,
            s.pathname
        ])), nu(s);
    }
    function gb(u, r = {}) {
        let c = O.useContext(tm);
        Me(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: f } = om("useViewTransitionState"), o = iu(u, {
            relative: r.relative
        });
        if (!c.isTransitioning) return !1;
        let s = al(c.currentLocation.pathname, f) || c.currentLocation.pathname, y = al(c.nextLocation.pathname, f) || c.nextLocation.pathname;
        return Ui(o.pathname, y) != null || Ui(o.pathname, s) != null;
    }
    new TextEncoder;
    const bb = O.createContext(), Sb = ({ children: u })=>{
        const r = (S, T)=>{
            const b = localStorage.getItem(S);
            return b !== null ? JSON.parse(b) : T;
        }, [c, f] = O.useState(()=>r(_e.THEME_KEY, _e.THEME)), [o, s] = O.useState(()=>r(_e.ENABLE_SOUND_KEY, _e.ENABLE_SOUND)), [y, p] = O.useState(()=>r(_e.TIMER_DURATION_KEY, _e.TIMER_DURATION)), [h, v] = O.useState(()=>r(_e.IS_FLIPPED_KEY, _e.IS_FLIPPED));
        return O.useEffect(()=>localStorage.setItem(_e.THEME_KEY, JSON.stringify(c)), [
            c
        ]), O.useEffect(()=>localStorage.setItem(_e.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), O.useEffect(()=>localStorage.setItem(_e.TIMER_DURATION_KEY, JSON.stringify(y)), [
            y
        ]), O.useEffect(()=>localStorage.setItem(_e.IS_FLIPPED_KEY, JSON.stringify(h)), [
            h
        ]), Q.jsx(bb.Provider, {
            value: {
                theme: c,
                setTheme: f,
                enableSound: o,
                setEnableSound: s,
                timerDuration: y,
                setTimerDuration: p,
                isFlipped: h,
                setIsFlipped: v
            },
            children: u
        });
    };
    Eb = function(u, r = "lite", c = 8e3) {
        const f = O.useRef(null), o = O.useRef(null), s = O.useRef(null), y = O.useRef(null), p = O.useRef(!1), h = O.useRef([]), v = O.useRef(!0), S = O.useRef(!1), T = O.useRef(!1), b = O.useCallback(()=>{
            if (!(S.current || !f.current)) {
                for(S.current = !0; h.current.length > 0;){
                    const J = h.current.findIndex((ne)=>ne.type === "stop"), $ = J >= 0 ? h.current.splice(J, 1)[0] : h.current.shift();
                    $ && f.current.postMessage($.cmd);
                }
                S.current = !1;
            }
        }, []), A = O.useCallback((J, $)=>{
            h.current.push({
                type: J,
                cmd: $
            }), b();
        }, [
            b
        ]), N = O.useCallback(()=>{
            f.current || (r === "lite" ? f.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : f.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), f.current.postMessage("uci"), console.log("Initializing worker ..."), f.current.onmessage = (J)=>{
                const $ = J.data;
                if (u && u($), typeof $ == "string") {
                    if ($ === "readyok" || $.startsWith("bestmove")) v.current = !0;
                    else if ($.startsWith("info") && $.includes("score")) {
                        const ne = $.match(/score (cp|mate) (-?\d+)/);
                        if (ne) {
                            const Ce = ne[1], je = parseInt(ne[2], 10), ze = Ce === "cp" ? je / 100 : je > 0 ? 10 : -10;
                            o.current && (o.current(ze), o.current = null);
                        }
                    }
                }
            }, f.current.onerror = (J)=>{
                console.error("Error with Stockfish worker:", J);
            });
        }, [
            u,
            r
        ]), B = O.useCallback(()=>{
            f.current && f.current.terminate(), r === "lite" ? f.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : f.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), f.current.postMessage("uci"), console.log("Intialising worker ..."), f.current.onmessage = (J)=>{
                const $ = J.data;
                if (u && u($), typeof $ == "string") {
                    if ($ === "readyok" || $.startsWith("bestmove")) v.current = !0;
                    else if ($.startsWith("info") && $.includes("score")) {
                        const ne = $.match(/score (cp|mate) (-?\d+)/);
                        if (ne) {
                            const Ce = ne[1], je = parseInt(ne[2], 10), ze = Ce === "cp" ? je / 100 : je > 0 ? 10 : -10;
                            o.current && (o.current(ze), o.current = null);
                        }
                    }
                }
            }, f.current.onerror = (J)=>{
                console.error("Error with Stockfish worker:", J);
            };
        }, [
            u,
            r
        ]), w = O.useCallback((J)=>{
            f.current && A("normal", J);
        }, []), U = O.useCallback((J)=>{
            J.forEach(($)=>{
                A("normal", `setoption name ${$.name} value ${$.value}`);
            });
        }, [
            w
        ]), j = O.useCallback((J, $ = [])=>{
            let ne = `position fen ${J}`;
            if ($.length > 0) {
                const Ce = $.join(" ");
                ne += ` moves ${Ce}`;
            }
            A("normal", ne);
        }, [
            w
        ]), L = O.useCallback((J)=>{
            console.log("Attempt stopSearch..", J), f.current && (console.log("try stopSearch ...", J), p.current && (console.log("Interrupting current search...", J), A("stop", "stop"), p.current = !1, s.current && (clearTimeout(s.current), s.current = null)));
        }, []), V = O.useCallback((J)=>{
            if (!T.current) {
                console.warn("Engine disabled. Search not started.");
                return;
            }
            f.current || (console.log("Starting engine on demand..."), N()), clearTimeout(s.current), L("pre startSearch"), y.current && clearTimeout(y.current), y.current = setTimeout(()=>{
                p.current = !0, A("normal", `position fen ${J}`), A("normal", "go infinite"), s.current = setTimeout(()=>{
                    L("startSearch timer expire");
                }, c);
            }, 50);
        }, [
            c,
            L
        ]), K = O.useCallback(()=>{
            f.current && (f.current.terminate(), f.current = null), p.current = !1, v.current = !0, s.current && (clearTimeout(s.current), s.current = null);
        }, []), W = O.useCallback((J)=>{
            J ? console.log("Permission granted: engine allowed to start if needed") : (console.log("Permission revoked: stopping engine"), L("permission revoked"), K());
        }, [
            L,
            K
        ]);
        return O.useEffect(()=>()=>{
                K();
            }, []), {
            initEngine: B,
            setOptions: U,
            setFen: j,
            startSearch: V,
            stopSearch: L,
            terminateEngine: K,
            syncEnabledState: W
        };
    };
    let sm, _b, Rb, bf, dm;
    sm = O.createContext();
    c2 = ()=>O.useContext(sm);
    _b = ({ children: u })=>{
        const r = O.useRef(null), c = O.useCallback((s)=>{
            r.current && r.current(s);
        }, []), f = Eb(c), o = O.useCallback((s)=>{
            r.current = s;
        }, []);
        return Q.jsx(sm.Provider, {
            value: {
                ...f,
                setOnMessage: o
            },
            children: u
        });
    };
    Tb = ()=>{
        const [u, r] = O.useState(document.body.classList.contains("dark-theme")), c = ()=>{
            document.body.classList.toggle("dark-theme"), r(!u);
        }, f = ()=>{
            const s = new Date().getHours();
            return s < 6 || s > 18;
        };
        return O.useEffect(()=>{
            f() != u && c();
        }, []), Q.jsx("button", {
            onClick: c,
            className: "theme-toggle-btn",
            children: u ? "☀️" : "🌙"
        });
    };
    Rb = nn.memo(({ onSubmit: u })=>{
        const [r, c] = O.useState(!1), [f, o] = O.useState(""), s = ()=>c(!0), y = ()=>{
            c(!1), o("");
        }, p = (v)=>{
            v.target.classList.contains("fen-popup-overlay") && y();
        }, h = (v)=>{
            v.preventDefault(), u(f), y();
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
                                onClick: y,
                                children: "×"
                            }),
                            Q.jsxs("form", {
                                onSubmit: h,
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
    bf = new Set;
    dm = {
        current: ""
    };
    function Ab(u) {
        dm.current = u, bf.forEach((r)=>r(u));
    }
    function Ob() {
        const [u, r] = O.useState(dm.current);
        return O.useEffect(()=>{
            const c = (f)=>r(f);
            return bf.add(c), ()=>{
                bf.delete(c);
            };
        }, []), u;
    }
    function Nb({ component: u, message: r }) {
        const [c, f] = O.useState(!1), o = ()=>{
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
    const xb = nn.memo(({ isValid: u, fenErrorMsg: r })=>{
        const c = Ob(), f = ()=>{
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
                }) : Q.jsx(Nb, {
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
    }), hm = nn.memo(({ messages: u, isValid: r })=>Q.jsxs("div", {
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
        })), Mb = (u)=>{
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
        let s = 0, y = 0;
        const p = new Map([]);
        for(let b = 0; b < 8; b++){
            const A = o[b];
            let N = 0;
            for(let B = 0; B < A.length; B++){
                const w = Number(A[B]);
                switch(N += isNaN(w) ? 1 : w, A[B]){
                    case "k":
                        b === 0 && N === 5 && p.set("e8", A[B]), s += 1;
                        break;
                    case "K":
                        b === 7 && N === 5 && p.set("e1", A[B]), y += 1;
                        break;
                    case "p":
                        if (b === 0 || b === 7) return {
                            isValid: !1,
                            msg: "pawn can not exist on last rank or first rank."
                        };
                        break;
                    case "P":
                        if (b === 0 || b === 7) return {
                            isValid: !1,
                            msg: "pawn can not exist on last rank or first rank."
                        };
                        break;
                    case "r":
                        b === 0 && B === 0 ? p.set("a8", A[B]) : b === 0 && B === A.length - 1 && p.set("h8", A[B]);
                        break;
                    case "R":
                        b === 7 && B === 0 ? p.set("a1", A[B]) : b === 7 && B === A.length - 1 && p.set("h1", A[B]);
                        break;
                }
            }
        }
        if (s !== 1) return {
            isValid: !1,
            msg: "There should be exactly one black king."
        };
        if (y !== 1) return {
            isValid: !1,
            msg: "There should be exactly one white king."
        };
        for(let b = 0; b < f.length; b++)switch(f[b]){
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
        const h = c[1], v = Cb(u);
        return new Rf(v).inCheck() ? {
            isValid: !1,
            msg: `${h === "w" ? "white" : "black"} to move but ${h === "w" ? "black" : "white"} was already in check and did not defend king`
        } : {
            isValid: !0,
            msg: ""
        };
    };
    function Cb(u) {
        const r = u.split(" ");
        return r[1] = r[1] === "w" ? "b" : "w", r.join(" ");
    }
    const pm = (u, r)=>{
        u.dataTransfer.setData("text", r);
    }, Db = (u, r, c, f)=>{
        r != null && c == null && f({
            category: _e.BOARD_PIECE,
            id: `${u}-${r.color}-${r.type}`,
            chessPiece: r
        });
    }, Bb = ({ newSelectedItem: u, selectedItem: r, setSelectedItem: c })=>{
        if (r == null) {
            c(u);
            return;
        }
        if (u.id === r.id) {
            c(null);
            return;
        }
        r.category === _e.BOARD_PIECE ? u.category === _e.PALLETE_ITEM && c(u) : r.category === _e.PALLETE_ITEM && u.category === _e.PALLETE_ITEM && c(u);
    }, cp = {
        category: _e.PALLETE_ITEM,
        id: _e.ERASER_ID,
        chessPiece: null
    }, Ub = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    }, wb = nn.memo(({ handleDragStart: u, handlePaletteClick: r })=>{
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
        ], o = an((p)=>p.boardeditor.selectedItem), s = Xn(), y = (p)=>{
            s(Of(p));
        };
        return Q.jsxs("div", {
            className: "palette",
            children: [
                f.map((p)=>c.map((h)=>Q.jsx("img", {
                            id: `palette-${p}-${h}`,
                            src: `pieces/svg/${p}_${Ub[h]}.svg`,
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
                                    setSelectedItem: y
                                });
                            },
                            onDragStart: (v)=>u(v, `palette-${p}-${h}`),
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
                            newSelectedItem: cp,
                            selectedItem: o,
                            setSelectedItem: y
                        });
                    },
                    className: `palette-piece eraser ${o?.id === cp.id ? "selected" : ""}`
                })
            ]
        });
    }), zb = (u, r)=>{
        let c = "", f = 0;
        for(let o = 0; o < 8; o++){
            const s = u[r[o]];
            s == null && f++, s != null ? (f > 0 && (c += `${f}`), f = 0, c += s.color === "w" ? s.type?.toUpperCase() : s.type) : o == 7 && f > 0 && (c += `${f}`);
        }
        return c;
    }, Pb = ({ board: u, playerToMove: r, halfmoveClock: c = 0, fullmoveNumber: f = 1, whiteKingSide: o, whiteQueenSide: s, blackKingSide: y, blackQueenSide: p })=>{
        const h = "-";
        let v = "";
        const S = (o ? "K" : "") + (s ? "Q" : "") + (y ? "k" : "") + (p ? "q" : ""), T = Np.map((b)=>zb(u, b));
        return v += T.join("/"), v += ` ${r} ${S === "" ? "-" : S} ${h} ${c} ${f}`, v;
    }, qb = (u)=>{
        u.preventDefault();
    }, Hb = ({ squareId: u, squarePiece: r, selectedItem: c, setSelectedItem: f, removePiece: o, putPiece: s, makeMove: y })=>{
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
            y(p, u), f(null);
        }
    }, kb = (u, r, c)=>{
        u.preventDefault();
        const f = u.dataTransfer.getData("text"), o = document.getElementById(f);
        if (!o) return;
        const s = o.dataset.square;
        c(s, r);
    }, Lb = nn.memo(({ piece: u, squareId: r, handleDragStart: c, handleBoardPieceClick: f })=>{
        const o = an((h)=>h.boardeditor.selectedItem), s = Xn();
        if (u == null || u === void 0 || !r || r === "" || !u.type) return console.log("render piece", r, u, {
            ...u
        }), null;
        const y = (h)=>{
            s(Of(h));
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
            onClick: ()=>f(r, u, o, y)
        }, r);
    }), jb = (u)=>{
        const r = u[0].charCodeAt(0) - 97, c = u[1].charCodeAt(0) - 49;
        return (r + c) % 2 === 0 ? "dark" : "light";
    }, Qb = nn.memo(({ showRankLabel: u, showFileLabel: r, squareId: c, squarePiece: f, handleSquareClick: o, handleDrop: s, allowDrop: y, handleDragStart: p, handleBoardPieceClick: h })=>{
        const v = an((B)=>B.boardeditor.selectedItem), S = Xn(), T = (B)=>{
            S(Of(B));
        }, b = (B)=>{
            S(kv(B));
        }, A = (B, w)=>{
            S(Hv(B, w));
        }, N = (B, w)=>{
            S(Lv(B, w));
        };
        return Q.jsxs("div", {
            id: c,
            className: `square ${jb(c)}`,
            onDragOver: y,
            onClick: ()=>o({
                    squareId: c,
                    squarePiece: f,
                    selectedItem: v,
                    setSelectedItem: T,
                    removePiece: b,
                    putPiece: A,
                    makeMove: N
                }),
            onDrop: (B)=>s(B, c, N),
            children: [
                u && Q.jsx("div", {
                    className: "rank-label",
                    children: c[1]
                }),
                r && Q.jsx("div", {
                    className: "file-label",
                    children: c[0]
                }),
                f && Q.jsx(Lb, {
                    piece: f,
                    squareId: c,
                    handleDragStart: p,
                    handleBoardPieceClick: h
                })
            ]
        });
    }), Kb = nn.memo(({ isFlipped: u })=>{
        const r = u ? yv : Np, c = an((f)=>f.boardeditor.board);
        return Q.jsx("div", {
            id: "chessboard",
            children: r.map((f, o)=>f.map((s, y)=>Q.jsx(Qb, {
                        showRankLabel: y === 0,
                        showFileLabel: o === 7,
                        squareId: s,
                        squarePiece: c[s],
                        handleSquareClick: Hb,
                        handleDrop: kb,
                        allowDrop: qb,
                        handleDragStart: pm,
                        handleBoardPieceClick: Db
                    }, s)))
        });
    }), Gb = ({ labelText: u, toggle: r, handleToggle: c })=>Q.jsxs("div", {
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
        });
    function Yb() {
        const { playerToMove: u, castlingFlags: r } = an((f)=>({
                playerToMove: f.boardeditor.playerToMove
            })), c = Xn();
        return Q.jsxs("div", {
            className: "move-toggle",
            children: [
                Q.jsx("button", {
                    className: `move-option ${u === "w" ? "active" : ""}`,
                    onClick: ()=>c(Wh("w")),
                    children: "White"
                }),
                Q.jsx("button", {
                    className: `move-option ${u === "b" ? "active" : ""}`,
                    onClick: ()=>c(Wh("b")),
                    children: "Black"
                })
            ]
        });
    }
    const Vb = ({ isValidFen: u, fenErrorMsg: r })=>{
        const { playerToMove: c, castlingFlags: f } = an((y)=>({
                playerToMove: y.boardeditor.playerToMove,
                castlingFlags: y.boardeditor.castlingFlags
            })), o = Xn(), s = [
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
                        Q.jsx(Yb, {})
                    ]
                }),
                s.map(({ flag: y, label: p, state: h })=>Q.jsx(Gb, {
                        labelText: p,
                        toggle: h,
                        handleToggle: ()=>{
                            o(jv(y));
                        }
                    }, p)),
                Q.jsx(hm, {
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
    }, fp = ()=>{
        const { board: u, isFlipped: r, playerToMove: c, castlingFlags: f } = an((N)=>({
                board: N.boardeditor.board,
                isFlipped: N.boardeditor.isFlipped,
                playerToMove: N.boardeditor.playerToMove,
                castlingFlags: N.boardeditor.castlingFlags
            })), o = O.useRef(0), [s, y] = O.useState(!1), [p, h] = O.useState(""), v = Xn();
        O.useEffect(()=>{
            T();
        }, []);
        const S = ()=>{
            v(Fh()), v(zv());
        }, T = ()=>{
            v(Fh()), v(wv());
        }, b = O.useCallback((N)=>{
            console.log("Received FEN:", N), v(qv(N));
        }, [
            v
        ]), A = O.useCallback((N = 0, B = 1)=>Pb({
                board: u,
                playerToMove: c,
                whiteKingSide: f.K,
                whiteQueenSide: f.Q,
                blackKingSide: f.k,
                blackQueenSide: f.q,
                halfmoveClock: N,
                fullmoveNumber: B
            }), [
            u,
            c,
            f.K,
            f.k,
            f.Q,
            f.q
        ]);
        return o.current += 1, O.useEffect(()=>{
            const N = A(), { isValid: B, msg: w } = Mb(N);
            y((U)=>U !== B ? B : U), h((U)=>U !== w ? w : U), Ab(N);
        }, [
            A,
            u
        ]), console.log("board editor rendered", o.current), Q.jsxs("div", {
            className: "main-container",
            children: [
                Q.jsx("div", {
                    className: "top-container",
                    children: Q.jsxs("nav", {
                        className: "top-bar",
                        children: [
                            Q.jsx("button", {
                                onClick: S,
                                className: "action-button",
                                children: "Clear"
                            }),
                            Q.jsx("button", {
                                onClick: T,
                                className: "action-button",
                                children: "Reset"
                            }),
                            Q.jsx("button", {
                                onClick: ()=>{
                                    v(Pv());
                                },
                                className: "action-button",
                                children: "Flip"
                            }),
                            Q.jsx(Rb, {
                                onSubmit: b
                            }),
                            Q.jsx(Tb, {})
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
                                Q.jsx(xb, {
                                    isValid: s,
                                    fenErrorMsg: p
                                }),
                                Q.jsxs("div", {
                                    className: "chessboard-container",
                                    children: [
                                        Q.jsx(Kb, {
                                            isFlipped: r
                                        }),
                                        Q.jsx(wb, {
                                            handleDragStart: pm,
                                            handlePaletteClick: Bb
                                        }),
                                        Q.jsx(Vb, {
                                            isValidFen: s,
                                            fenErrorMsg: p
                                        }),
                                        Q.jsx(hm, {
                                            messages: [
                                                {
                                                    type: s ? "ok" : "error",
                                                    text: p
                                                }
                                            ],
                                            isValid: s
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }, Xb = O.lazy(()=>Zp(()=>import("./ChessGame-BtyjUWQV.js"), __vite__mapDeps([0,1,2,3]))), Zb = O.lazy(()=>Zp(()=>import("./AnalysisGame-CjGN4xX0.js"), __vite__mapDeps([4,1,2,5]))), Jb = ()=>Q.jsx(Sb, {
            children: Q.jsxs(fb, {
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
                    Q.jsx(O.Suspense, {
                        fallback: Q.jsx("div", {
                            className: "loading-screen",
                            children: "Loading..."
                        }),
                        children: Q.jsxs(Lg, {
                            children: [
                                Q.jsx(eu, {
                                    path: "/analysis",
                                    element: Q.jsx(_b, {
                                        children: Q.jsx(Zb, {})
                                    })
                                }),
                                Q.jsx(eu, {
                                    path: "/gameplay",
                                    element: Q.jsx(Xb, {})
                                }),
                                Q.jsx(eu, {
                                    path: "/boardeditor",
                                    element: Q.jsx(fp, {})
                                }),
                                Q.jsx(eu, {
                                    path: "*",
                                    element: Q.jsx(fp, {})
                                }),
                                " "
                            ]
                        })
                    })
                ]
            })
        });
    V0.createRoot(document.getElementById("root")).render(Q.jsx(fy, {
        store: Xp,
        children: Q.jsx(Jb, {})
    }));
})();
export { Rf as C, Tb as D, nn as R, an as a, Fb as b, _e as c, l2 as d, u2 as e, Ib as f, r2 as g, Eb as h, c2 as i, Q as j, op as k, i2 as l, $b as m, a2 as n, Xp as o, n2 as p, e2 as q, O as r, Wb as s, t2 as t, Xn as u, __tla };
