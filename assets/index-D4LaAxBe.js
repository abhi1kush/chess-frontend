const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChessGame-SUbu5zC5.js","assets/helpers-CMm5z_cn.js","assets/helpers-CX52Veyb.css","assets/ChessGame-DhAK7FyC.css","assets/AnalysisGame-Ddy6nT0n.js","assets/AnalysisGame-Tf-ih67V.css"])))=>i.map(i=>d[i]);
let Ro, nm, Qt, lm, eu, i2, De, c2, s2, vv, h2, _b, p2, B, fp, d2, u2, f2, qp, o2, T, r2, Ui;
let __tla = (async ()=>{
    (function() {
        const i = document.createElement("link").relList;
        if (i && i.supports && i.supports("modulepreload")) return;
        for (const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);
        new MutationObserver((f)=>{
            for (const s of f)if (s.type === "childList") for (const h of s.addedNodes)h.tagName === "LINK" && h.rel === "modulepreload" && c(h);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function o(f) {
            const s = {};
            return f.integrity && (s.integrity = f.integrity), f.referrerPolicy && (s.referrerPolicy = f.referrerPolicy), f.crossOrigin === "use-credentials" ? s.credentials = "include" : f.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function c(f) {
            if (f.ep) return;
            f.ep = !0;
            const s = o(f);
            fetch(f.href, s);
        }
    })();
    fp = function(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
    };
    var Fc = {
        exports: {}
    }, Va = {};
    var Ah;
    function z0() {
        if (Ah) return Va;
        Ah = 1;
        var u = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
        function o(c, f, s) {
            var h = null;
            if (s !== void 0 && (h = "" + s), f.key !== void 0 && (h = "" + f.key), "key" in f) {
                s = {};
                for(var m in f)m !== "key" && (s[m] = f[m]);
            } else s = f;
            return f = s.ref, {
                $$typeof: u,
                type: c,
                key: h,
                ref: f !== void 0 ? f : null,
                props: s
            };
        }
        return Va.Fragment = i, Va.jsx = o, Va.jsxs = o, Va;
    }
    var Oh;
    function P0() {
        return Oh || (Oh = 1, Fc.exports = z0()), Fc.exports;
    }
    let Ic, re;
    B = P0();
    Ic = {
        exports: {}
    };
    re = {};
    var xh;
    function q0() {
        if (xh) return re;
        xh = 1;
        var u = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), R = Symbol.iterator;
        function S(E) {
            return E === null || typeof E != "object" ? null : (E = R && E[R] || E["@@iterator"], typeof E == "function" ? E : null);
        }
        var A = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, C = Object.assign, w = {};
        function q(E, Q, X) {
            this.props = E, this.context = Q, this.refs = w, this.updater = X || A;
        }
        q.prototype.isReactComponent = {}, q.prototype.setState = function(E, Q) {
            if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, E, Q, "setState");
        }, q.prototype.forceUpdate = function(E) {
            this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        };
        function U() {}
        U.prototype = q.prototype;
        function H(E, Q, X) {
            this.props = E, this.context = Q, this.refs = w, this.updater = X || A;
        }
        var L = H.prototype = new U;
        L.constructor = H, C(L, q.prototype), L.isPureReactComponent = !0;
        var V = Array.isArray, K = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, F = Object.prototype.hasOwnProperty;
        function Z(E, Q, X, Y, I, me) {
            return X = me.ref, {
                $$typeof: u,
                type: E,
                key: Q,
                ref: X !== void 0 ? X : null,
                props: me
            };
        }
        function J(E, Q) {
            return Z(E.type, Q, void 0, void 0, void 0, E.props);
        }
        function te(E) {
            return typeof E == "object" && E !== null && E.$$typeof === u;
        }
        function Oe(E) {
            var Q = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + E.replace(/[=:]/g, function(X) {
                return Q[X];
            });
        }
        var ge = /\/+/g;
        function pe(E, Q) {
            return typeof E == "object" && E !== null && E.key != null ? Oe("" + E.key) : Q.toString(36);
        }
        function et() {}
        function Ze(E) {
            switch(E.status){
                case "fulfilled":
                    return E.value;
                case "rejected":
                    throw E.reason;
                default:
                    switch(typeof E.status == "string" ? E.then(et, et) : (E.status = "pending", E.then(function(Q) {
                        E.status === "pending" && (E.status = "fulfilled", E.value = Q);
                    }, function(Q) {
                        E.status === "pending" && (E.status = "rejected", E.reason = Q);
                    })), E.status){
                        case "fulfilled":
                            return E.value;
                        case "rejected":
                            throw E.reason;
                    }
            }
            throw E;
        }
        function je(E, Q, X, Y, I) {
            var me = typeof E;
            (me === "undefined" || me === "boolean") && (E = null);
            var ie = !1;
            if (E === null) ie = !0;
            else switch(me){
                case "bigint":
                case "string":
                case "number":
                    ie = !0;
                    break;
                case "object":
                    switch(E.$$typeof){
                        case u:
                        case i:
                            ie = !0;
                            break;
                        case b:
                            return ie = E._init, je(ie(E._payload), Q, X, Y, I);
                    }
            }
            if (ie) return I = I(E), ie = Y === "" ? "." + pe(E, 0) : Y, V(I) ? (X = "", ie != null && (X = ie.replace(ge, "$&/") + "/"), je(I, Q, X, "", function(ol) {
                return ol;
            })) : I != null && (te(I) && (I = J(I, X + (I.key == null || E && E.key === I.key ? "" : ("" + I.key).replace(ge, "$&/") + "/") + ie)), Q.push(I)), 1;
            ie = 0;
            var dt = Y === "" ? "." : Y + ":";
            if (V(E)) for(var xe = 0; xe < E.length; xe++)Y = E[xe], me = dt + pe(Y, xe), ie += je(Y, Q, X, me, I);
            else if (xe = S(E), typeof xe == "function") for(E = xe.call(E), xe = 0; !(Y = E.next()).done;)Y = Y.value, me = dt + pe(Y, xe++), ie += je(Y, Q, X, me, I);
            else if (me === "object") {
                if (typeof E.then == "function") return je(Ze(E), Q, X, Y, I);
                throw Q = String(E), Error("Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ie;
        }
        function z(E, Q, X) {
            if (E == null) return E;
            var Y = [], I = 0;
            return je(E, Y, "", "", function(me) {
                return Q.call(X, me, I++);
            }), Y;
        }
        function G(E) {
            if (E._status === -1) {
                var Q = E._result;
                Q = Q(), Q.then(function(X) {
                    (E._status === 0 || E._status === -1) && (E._status = 1, E._result = X);
                }, function(X) {
                    (E._status === 0 || E._status === -1) && (E._status = 2, E._result = X);
                }), E._status === -1 && (E._status = 0, E._result = Q);
            }
            if (E._status === 1) return E._result.default;
            throw E._result;
        }
        var ne = typeof reportError == "function" ? reportError : function(E) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var Q = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                    error: E
                });
                if (!window.dispatchEvent(Q)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", E);
                return;
            }
            console.error(E);
        };
        function Te() {}
        return re.Children = {
            map: z,
            forEach: function(E, Q, X) {
                z(E, function() {
                    Q.apply(this, arguments);
                }, X);
            },
            count: function(E) {
                var Q = 0;
                return z(E, function() {
                    Q++;
                }), Q;
            },
            toArray: function(E) {
                return z(E, function(Q) {
                    return Q;
                }) || [];
            },
            only: function(E) {
                if (!te(E)) throw Error("React.Children.only expected to receive a single React element child.");
                return E;
            }
        }, re.Component = q, re.Fragment = o, re.Profiler = f, re.PureComponent = H, re.StrictMode = c, re.Suspense = p, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, re.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(E) {
                return K.H.useMemoCache(E);
            }
        }, re.cache = function(E) {
            return function() {
                return E.apply(null, arguments);
            };
        }, re.cloneElement = function(E, Q, X) {
            if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
            var Y = C({}, E.props), I = E.key, me = void 0;
            if (Q != null) for(ie in Q.ref !== void 0 && (me = void 0), Q.key !== void 0 && (I = "" + Q.key), Q)!F.call(Q, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && Q.ref === void 0 || (Y[ie] = Q[ie]);
            var ie = arguments.length - 2;
            if (ie === 1) Y.children = X;
            else if (1 < ie) {
                for(var dt = Array(ie), xe = 0; xe < ie; xe++)dt[xe] = arguments[xe + 2];
                Y.children = dt;
            }
            return Z(E.type, I, void 0, void 0, me, Y);
        }, re.createContext = function(E) {
            return E = {
                $$typeof: h,
                _currentValue: E,
                _currentValue2: E,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, E.Provider = E, E.Consumer = {
                $$typeof: s,
                _context: E
            }, E;
        }, re.createElement = function(E, Q, X) {
            var Y, I = {}, me = null;
            if (Q != null) for(Y in Q.key !== void 0 && (me = "" + Q.key), Q)F.call(Q, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (I[Y] = Q[Y]);
            var ie = arguments.length - 2;
            if (ie === 1) I.children = X;
            else if (1 < ie) {
                for(var dt = Array(ie), xe = 0; xe < ie; xe++)dt[xe] = arguments[xe + 2];
                I.children = dt;
            }
            if (E && E.defaultProps) for(Y in ie = E.defaultProps, ie)I[Y] === void 0 && (I[Y] = ie[Y]);
            return Z(E, me, void 0, void 0, null, I);
        }, re.createRef = function() {
            return {
                current: null
            };
        }, re.forwardRef = function(E) {
            return {
                $$typeof: m,
                render: E
            };
        }, re.isValidElement = te, re.lazy = function(E) {
            return {
                $$typeof: b,
                _payload: {
                    _status: -1,
                    _result: E
                },
                _init: G
            };
        }, re.memo = function(E, Q) {
            return {
                $$typeof: v,
                type: E,
                compare: Q === void 0 ? null : Q
            };
        }, re.startTransition = function(E) {
            var Q = K.T, X = {};
            K.T = X;
            try {
                var Y = E(), I = K.S;
                I !== null && I(X, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Te, ne);
            } catch (me) {
                ne(me);
            } finally{
                K.T = Q;
            }
        }, re.unstable_useCacheRefresh = function() {
            return K.H.useCacheRefresh();
        }, re.use = function(E) {
            return K.H.use(E);
        }, re.useActionState = function(E, Q, X) {
            return K.H.useActionState(E, Q, X);
        }, re.useCallback = function(E, Q) {
            return K.H.useCallback(E, Q);
        }, re.useContext = function(E) {
            return K.H.useContext(E);
        }, re.useDebugValue = function() {}, re.useDeferredValue = function(E, Q) {
            return K.H.useDeferredValue(E, Q);
        }, re.useEffect = function(E, Q, X) {
            var Y = K.H;
            if (typeof X == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return Y.useEffect(E, Q);
        }, re.useId = function() {
            return K.H.useId();
        }, re.useImperativeHandle = function(E, Q, X) {
            return K.H.useImperativeHandle(E, Q, X);
        }, re.useInsertionEffect = function(E, Q) {
            return K.H.useInsertionEffect(E, Q);
        }, re.useLayoutEffect = function(E, Q) {
            return K.H.useLayoutEffect(E, Q);
        }, re.useMemo = function(E, Q) {
            return K.H.useMemo(E, Q);
        }, re.useOptimistic = function(E, Q) {
            return K.H.useOptimistic(E, Q);
        }, re.useReducer = function(E, Q, X) {
            return K.H.useReducer(E, Q, X);
        }, re.useRef = function(E) {
            return K.H.useRef(E);
        }, re.useState = function(E) {
            return K.H.useState(E);
        }, re.useSyncExternalStore = function(E, Q, X) {
            return K.H.useSyncExternalStore(E, Q, X);
        }, re.useTransition = function() {
            return K.H.useTransition();
        }, re.version = "19.1.0", re;
    }
    var Ch;
    function wi() {
        return Ch || (Ch = 1, Ic.exports = q0()), Ic.exports;
    }
    T = wi();
    Qt = fp(T);
    var eo = {
        exports: {}
    }, Xa = {}, to = {
        exports: {}
    }, lo = {};
    var Mh;
    function k0() {
        return Mh || (Mh = 1, function(u) {
            function i(z, G) {
                var ne = z.length;
                z.push(G);
                e: for(; 0 < ne;){
                    var Te = ne - 1 >>> 1, E = z[Te];
                    if (0 < f(E, G)) z[Te] = G, z[ne] = E, ne = Te;
                    else break e;
                }
            }
            function o(z) {
                return z.length === 0 ? null : z[0];
            }
            function c(z) {
                if (z.length === 0) return null;
                var G = z[0], ne = z.pop();
                if (ne !== G) {
                    z[0] = ne;
                    e: for(var Te = 0, E = z.length, Q = E >>> 1; Te < Q;){
                        var X = 2 * (Te + 1) - 1, Y = z[X], I = X + 1, me = z[I];
                        if (0 > f(Y, ne)) I < E && 0 > f(me, Y) ? (z[Te] = me, z[I] = ne, Te = I) : (z[Te] = Y, z[X] = ne, Te = X);
                        else if (I < E && 0 > f(me, ne)) z[Te] = me, z[I] = ne, Te = I;
                        else break e;
                    }
                }
                return G;
            }
            function f(z, G) {
                var ne = z.sortIndex - G.sortIndex;
                return ne !== 0 ? ne : z.id - G.id;
            }
            if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var s = performance;
                u.unstable_now = function() {
                    return s.now();
                };
            } else {
                var h = Date, m = h.now();
                u.unstable_now = function() {
                    return h.now() - m;
                };
            }
            var p = [], v = [], b = 1, R = null, S = 3, A = !1, C = !1, w = !1, q = !1, U = typeof setTimeout == "function" ? setTimeout : null, H = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
            function V(z) {
                for(var G = o(v); G !== null;){
                    if (G.callback === null) c(v);
                    else if (G.startTime <= z) c(v), G.sortIndex = G.expirationTime, i(p, G);
                    else break;
                    G = o(v);
                }
            }
            function K(z) {
                if (w = !1, V(z), !C) if (o(p) !== null) C = !0, F || (F = !0, pe());
                else {
                    var G = o(v);
                    G !== null && je(K, G.startTime - z);
                }
            }
            var F = !1, Z = -1, J = 5, te = -1;
            function Oe() {
                return q ? !0 : !(u.unstable_now() - te < J);
            }
            function ge() {
                if (q = !1, F) {
                    var z = u.unstable_now();
                    te = z;
                    var G = !0;
                    try {
                        e: {
                            C = !1, w && (w = !1, H(Z), Z = -1), A = !0;
                            var ne = S;
                            try {
                                t: {
                                    for(V(z), R = o(p); R !== null && !(R.expirationTime > z && Oe());){
                                        var Te = R.callback;
                                        if (typeof Te == "function") {
                                            R.callback = null, S = R.priorityLevel;
                                            var E = Te(R.expirationTime <= z);
                                            if (z = u.unstable_now(), typeof E == "function") {
                                                R.callback = E, V(z), G = !0;
                                                break t;
                                            }
                                            R === o(p) && c(p), V(z);
                                        } else c(p);
                                        R = o(p);
                                    }
                                    if (R !== null) G = !0;
                                    else {
                                        var Q = o(v);
                                        Q !== null && je(K, Q.startTime - z), G = !1;
                                    }
                                }
                                break e;
                            } finally{
                                R = null, S = ne, A = !1;
                            }
                            G = void 0;
                        }
                    } finally{
                        G ? pe() : F = !1;
                    }
                }
            }
            var pe;
            if (typeof L == "function") pe = function() {
                L(ge);
            };
            else if (typeof MessageChannel < "u") {
                var et = new MessageChannel, Ze = et.port2;
                et.port1.onmessage = ge, pe = function() {
                    Ze.postMessage(null);
                };
            } else pe = function() {
                U(ge, 0);
            };
            function je(z, G) {
                Z = U(function() {
                    z(u.unstable_now());
                }, G);
            }
            u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(z) {
                z.callback = null;
            }, u.unstable_forceFrameRate = function(z) {
                0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < z ? Math.floor(1e3 / z) : 5;
            }, u.unstable_getCurrentPriorityLevel = function() {
                return S;
            }, u.unstable_next = function(z) {
                switch(S){
                    case 1:
                    case 2:
                    case 3:
                        var G = 3;
                        break;
                    default:
                        G = S;
                }
                var ne = S;
                S = G;
                try {
                    return z();
                } finally{
                    S = ne;
                }
            }, u.unstable_requestPaint = function() {
                q = !0;
            }, u.unstable_runWithPriority = function(z, G) {
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
                var ne = S;
                S = z;
                try {
                    return G();
                } finally{
                    S = ne;
                }
            }, u.unstable_scheduleCallback = function(z, G, ne) {
                var Te = u.unstable_now();
                switch(typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Te + ne : Te) : ne = Te, z){
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
                return E = ne + E, z = {
                    id: b++,
                    callback: G,
                    priorityLevel: z,
                    startTime: ne,
                    expirationTime: E,
                    sortIndex: -1
                }, ne > Te ? (z.sortIndex = ne, i(v, z), o(p) === null && z === o(v) && (w ? (H(Z), Z = -1) : w = !0, je(K, ne - Te))) : (z.sortIndex = E, i(p, z), C || A || (C = !0, F || (F = !0, pe()))), z;
            }, u.unstable_shouldYield = Oe, u.unstable_wrapCallback = function(z) {
                var G = S;
                return function() {
                    var ne = S;
                    S = G;
                    try {
                        return z.apply(this, arguments);
                    } finally{
                        S = ne;
                    }
                };
            };
        }(lo)), lo;
    }
    var Dh;
    function j0() {
        return Dh || (Dh = 1, to.exports = k0()), to.exports;
    }
    var no = {
        exports: {}
    }, nt = {};
    var Bh;
    function H0() {
        if (Bh) return nt;
        Bh = 1;
        var u = wi();
        function i(p) {
            var v = "https://react.dev/errors/" + p;
            if (1 < arguments.length) {
                v += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var b = 2; b < arguments.length; b++)v += "&args[]=" + encodeURIComponent(arguments[b]);
            }
            return "Minified React error #" + p + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function o() {}
        var c = {
            d: {
                f: o,
                r: function() {
                    throw Error(i(522));
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
        }, f = Symbol.for("react.portal");
        function s(p, v, b) {
            var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: f,
                key: R == null ? null : "" + R,
                children: p,
                containerInfo: v,
                implementation: b
            };
        }
        var h = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function m(p, v) {
            if (p === "font") return "";
            if (typeof v == "string") return v === "use-credentials" ? v : "";
        }
        return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, nt.createPortal = function(p, v) {
            var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(i(299));
            return s(p, v, null, b);
        }, nt.flushSync = function(p) {
            var v = h.T, b = c.p;
            try {
                if (h.T = null, c.p = 2, p) return p();
            } finally{
                h.T = v, c.p = b, c.d.f();
            }
        }, nt.preconnect = function(p, v) {
            typeof p == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(p, v));
        }, nt.prefetchDNS = function(p) {
            typeof p == "string" && c.d.D(p);
        }, nt.preinit = function(p, v) {
            if (typeof p == "string" && v && typeof v.as == "string") {
                var b = v.as, R = m(b, v.crossOrigin), S = typeof v.integrity == "string" ? v.integrity : void 0, A = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
                b === "style" ? c.d.S(p, typeof v.precedence == "string" ? v.precedence : void 0, {
                    crossOrigin: R,
                    integrity: S,
                    fetchPriority: A
                }) : b === "script" && c.d.X(p, {
                    crossOrigin: R,
                    integrity: S,
                    fetchPriority: A,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0
                });
            }
        }, nt.preinitModule = function(p, v) {
            if (typeof p == "string") if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var b = m(v.as, v.crossOrigin);
                    c.d.M(p, {
                        crossOrigin: b,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    });
                }
            } else v == null && c.d.M(p);
        }, nt.preload = function(p, v) {
            if (typeof p == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
                var b = v.as, R = m(b, v.crossOrigin);
                c.d.L(p, b, {
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
        }, nt.preloadModule = function(p, v) {
            if (typeof p == "string") if (v) {
                var b = m(v.as, v.crossOrigin);
                c.d.m(p, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: b,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                });
            } else c.d.m(p);
        }, nt.requestFormReset = function(p) {
            c.d.r(p);
        }, nt.unstable_batchedUpdates = function(p, v) {
            return p(v);
        }, nt.useFormState = function(p, v, b) {
            return h.H.useFormState(p, v, b);
        }, nt.useFormStatus = function() {
            return h.H.useHostTransitionStatus();
        }, nt.version = "19.1.0", nt;
    }
    var wh;
    function L0() {
        if (wh) return no.exports;
        wh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (i) {
                console.error(i);
            }
        }
        return u(), no.exports = H0(), no.exports;
    }
    var Uh;
    function Q0() {
        if (Uh) return Xa;
        Uh = 1;
        var u = j0(), i = wi(), o = L0();
        function c(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var l = 2; l < arguments.length; l++)t += "&args[]=" + encodeURIComponent(arguments[l]);
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function f(e) {
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
        function h(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function m(e) {
            if (s(e) !== e) throw Error(c(188));
        }
        function p(e) {
            var t = e.alternate;
            if (!t) {
                if (t = s(e), t === null) throw Error(c(188));
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
                        if (r === l) return m(a), e;
                        if (r === n) return m(a), t;
                        r = r.sibling;
                    }
                    throw Error(c(188));
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
                        if (!d) throw Error(c(189));
                    }
                }
                if (l.alternate !== n) throw Error(c(190));
            }
            if (l.tag !== 3) throw Error(c(188));
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
        var b = Object.assign, R = Symbol.for("react.element"), S = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), H = Symbol.for("react.consumer"), L = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), Oe = Symbol.for("react.memo_cache_sentinel"), ge = Symbol.iterator;
        function pe(e) {
            return e === null || typeof e != "object" ? null : (e = ge && e[ge] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var et = Symbol.for("react.client.reference");
        function Ze(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === et ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case C:
                    return "Fragment";
                case q:
                    return "Profiler";
                case w:
                    return "StrictMode";
                case K:
                    return "Suspense";
                case F:
                    return "SuspenseList";
                case te:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case A:
                    return "Portal";
                case L:
                    return (e.displayName || "Context") + ".Provider";
                case H:
                    return (e._context.displayName || "Context") + ".Consumer";
                case V:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case Z:
                    return t = e.displayName || null, t !== null ? t : Ze(e.type) || "Memo";
                case J:
                    t = e._payload, e = e._init;
                    try {
                        return Ze(e(t));
                    } catch  {}
            }
            return null;
        }
        var je = Array.isArray, z = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Te = [], E = -1;
        function Q(e) {
            return {
                current: e
            };
        }
        function X(e) {
            0 > E || (e.current = Te[E], Te[E] = null, E--);
        }
        function Y(e, t) {
            E++, Te[E] = e.current, e.current = t;
        }
        var I = Q(null), me = Q(null), ie = Q(null), dt = Q(null);
        function xe(e, t) {
            switch(Y(ie, t), Y(me, e), Y(I, null), t.nodeType){
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
            X(I), Y(I, e);
        }
        function ol() {
            X(I), X(me), X(ie);
        }
        function qi(e) {
            e.memoizedState !== null && Y(dt, e);
            var t = I.current, l = th(t, e.type);
            t !== l && (Y(me, e), Y(I, l));
        }
        function iu(e) {
            me.current === e && (X(I), X(me)), dt.current === e && (X(dt), La._currentValue = ne);
        }
        var ki = Object.prototype.hasOwnProperty, ji = u.unstable_scheduleCallback, Hi = u.unstable_cancelCallback, hm = u.unstable_shouldYield, pm = u.unstable_requestPaint, Pt = u.unstable_now, mm = u.unstable_getCurrentPriorityLevel, wo = u.unstable_ImmediatePriority, Uo = u.unstable_UserBlockingPriority, ru = u.unstable_NormalPriority, ym = u.unstable_LowPriority, zo = u.unstable_IdlePriority, vm = u.log, gm = u.unstable_setDisableYieldValue, $n = null, ht = null;
        function fl(e) {
            if (typeof vm == "function" && gm(e), ht && typeof ht.setStrictMode == "function") try {
                ht.setStrictMode($n, e);
            } catch  {}
        }
        var pt = Math.clz32 ? Math.clz32 : Em, bm = Math.log, Sm = Math.LN2;
        function Em(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (bm(e) / Sm | 0) | 0;
        }
        var cu = 256, ou = 4194304;
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
        function fu(e, t, l) {
            var n = e.pendingLanes;
            if (n === 0) return 0;
            var a = 0, r = e.suspendedLanes, d = e.pingedLanes;
            e = e.warmLanes;
            var y = n & 134217727;
            return y !== 0 ? (n = y & ~r, n !== 0 ? a = kl(n) : (d &= y, d !== 0 ? a = kl(d) : l || (l = y & ~e, l !== 0 && (a = kl(l))))) : (y = n & ~r, y !== 0 ? a = kl(y) : d !== 0 ? a = kl(d) : l || (l = n & ~e, l !== 0 && (a = kl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & r) === 0 && (r = a & -a, l = t & -t, r >= l || r === 32 && (l & 4194048) !== 0) ? t : a;
        }
        function Jn(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function _m(e, t) {
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
        function Po() {
            var e = cu;
            return cu <<= 1, (cu & 4194048) === 0 && (cu = 256), e;
        }
        function qo() {
            var e = ou;
            return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
        }
        function Li(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Wn(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Rm(e, t, l, n, a, r) {
            var d = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var y = e.entanglements, g = e.expirationTimes, x = e.hiddenUpdates;
            for(l = d & ~l; 0 < l;){
                var P = 31 - pt(l), j = 1 << P;
                y[P] = 0, g[P] = -1;
                var M = x[P];
                if (M !== null) for(x[P] = null, P = 0; P < M.length; P++){
                    var D = M[P];
                    D !== null && (D.lane &= -536870913);
                }
                l &= ~j;
            }
            n !== 0 && ko(e, n, 0), r !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(d & ~t));
        }
        function ko(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var n = 31 - pt(t);
            e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
        }
        function jo(e, t) {
            var l = e.entangledLanes |= t;
            for(e = e.entanglements; l;){
                var n = 31 - pt(l), a = 1 << n;
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
        function Ho() {
            var e = G.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Sh(e.type));
        }
        function Tm(e, t) {
            var l = G.p;
            try {
                return G.p = e, t();
            } finally{
                G.p = l;
            }
        }
        var sl = Math.random().toString(36).slice(2), tt = "__reactFiber$" + sl, it = "__reactProps$" + sl, rn = "__reactContainer$" + sl, Gi = "__reactEvents$" + sl, Nm = "__reactListeners$" + sl, Am = "__reactHandles$" + sl, Lo = "__reactResources$" + sl, Fn = "__reactMarker$" + sl;
        function Yi(e) {
            delete e[tt], delete e[it], delete e[Gi], delete e[Nm], delete e[Am];
        }
        function cn(e) {
            var t = e[tt];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[rn] || l[tt]) {
                    if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = uh(e); e !== null;){
                        if (l = e[tt]) return l;
                        e = uh(e);
                    }
                    return t;
                }
                e = l, l = e.parentNode;
            }
            return null;
        }
        function on(e) {
            if (e = e[tt] || e[rn]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function In(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(c(33));
        }
        function fn(e) {
            var t = e[Lo];
            return t || (t = e[Lo] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Ke(e) {
            e[Fn] = !0;
        }
        var Qo = new Set, Ko = {};
        function jl(e, t) {
            sn(e, t), sn(e + "Capture", t);
        }
        function sn(e, t) {
            for(Ko[e] = t, e = 0; e < t.length; e++)Qo.add(t[e]);
        }
        var Om = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Go = {}, Yo = {};
        function xm(e) {
            return ki.call(Yo, e) ? !0 : ki.call(Go, e) ? !1 : Om.test(e) ? Yo[e] = !0 : (Go[e] = !0, !1);
        }
        function su(e, t, l) {
            if (xm(t)) if (l === null) e.removeAttribute(t);
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
        function Gt(e, t, l, n) {
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
        var Vi, Vo;
        function dn(e) {
            if (Vi === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Vi = t && t[1] || "", Vo = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Vi + e + Vo;
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
                                    } catch (D) {
                                        var M = D;
                                    }
                                    Reflect.construct(e, [], j);
                                } else {
                                    try {
                                        j.call();
                                    } catch (D) {
                                        M = D;
                                    }
                                    e.call(j.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (D) {
                                    M = D;
                                }
                                (j = e()) && typeof j.catch == "function" && j.catch(function() {});
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
                n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var a = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
                a && a.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var r = n.DetermineComponentFrameRoot(), d = r[0], y = r[1];
                if (d && y) {
                    var g = d.split(`
`), x = y.split(`
`);
                    for(a = n = 0; n < g.length && !g[n].includes("DetermineComponentFrameRoot");)n++;
                    for(; a < x.length && !x[a].includes("DetermineComponentFrameRoot");)a++;
                    if (n === g.length || a === x.length) for(n = g.length - 1, a = x.length - 1; 1 <= n && 0 <= a && g[n] !== x[a];)a--;
                    for(; 1 <= n && 0 <= a; n--, a--)if (g[n] !== x[a]) {
                        if (n !== 1 || a !== 1) do if (n--, a--, 0 > a || g[n] !== x[a]) {
                            var P = `
` + g[n].replace(" at new ", " at ");
                            return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
                        }
                        while (1 <= n && 0 <= a);
                        break;
                    }
                }
            } finally{
                Xi = !1, Error.prepareStackTrace = l;
            }
            return (l = e ? e.displayName || e.name : "") ? dn(l) : "";
        }
        function Cm(e) {
            switch(e.tag){
                case 26:
                case 27:
                case 5:
                    return dn(e.type);
                case 16:
                    return dn("Lazy");
                case 13:
                    return dn("Suspense");
                case 19:
                    return dn("SuspenseList");
                case 0:
                case 15:
                    return Zi(e.type, !1);
                case 11:
                    return Zi(e.type.render, !1);
                case 1:
                    return Zi(e.type, !0);
                case 31:
                    return dn("Activity");
                default:
                    return "";
            }
        }
        function Xo(e) {
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
        function _t(e) {
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
        function Zo(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Mm(e) {
            var t = Zo(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
        function hu(e) {
            e._valueTracker || (e._valueTracker = Mm(e));
        }
        function $o(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), n = "";
            return e && (n = Zo(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
        }
        function pu(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var Dm = /[\n"\\]/g;
        function Rt(e) {
            return e.replace(Dm, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function $i(e, t, l, n, a, r, d, y) {
            e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + _t(t)) : e.value !== "" + _t(t) && (e.value = "" + _t(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Ji(e, d, _t(t)) : l != null ? Ji(e, d, _t(l)) : n != null && e.removeAttribute("value"), a == null && r != null && (e.defaultChecked = !!r), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + _t(y) : e.removeAttribute("name");
        }
        function Jo(e, t, l, n, a, r, d, y) {
            if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || l != null) {
                if (!(r !== "submit" && r !== "reset" || t != null)) return;
                l = l != null ? "" + _t(l) : "", t = t != null ? "" + _t(t) : l, y || t === e.value || (e.value = t), e.defaultValue = t;
            }
            n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = y ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d);
        }
        function Ji(e, t, l) {
            t === "number" && pu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
        }
        function hn(e, t, l, n) {
            if (e = e.options, t) {
                t = {};
                for(var a = 0; a < l.length; a++)t["$" + l[a]] = !0;
                for(l = 0; l < e.length; l++)a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
            } else {
                for(l = "" + _t(l), t = null, a = 0; a < e.length; a++){
                    if (e[a].value === l) {
                        e[a].selected = !0, n && (e[a].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[a].disabled || (t = e[a]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function Wo(e, t, l) {
            if (t != null && (t = "" + _t(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + _t(l) : "";
        }
        function Fo(e, t, l, n) {
            if (t == null) {
                if (n != null) {
                    if (l != null) throw Error(c(92));
                    if (je(n)) {
                        if (1 < n.length) throw Error(c(93));
                        n = n[0];
                    }
                    l = n;
                }
                l == null && (l = ""), t = l;
            }
            l = _t(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n);
        }
        function pn(e, t) {
            if (t) {
                var l = e.firstChild;
                if (l && l === e.lastChild && l.nodeType === 3) {
                    l.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var Bm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Io(e, t, l) {
            var n = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Bm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function ef(e, t, l) {
            if (t != null && typeof t != "object") throw Error(c(62));
            if (e = e.style, l != null) {
                for(var n in l)!l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
                for(var a in t)n = t[a], t.hasOwnProperty(a) && l[a] !== n && Io(e, a, n);
            } else for(var r in t)t.hasOwnProperty(r) && Io(e, r, t[r]);
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
        var wm = new Map([
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
        var Fi = null;
        function Ii(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var mn = null, yn = null;
        function tf(e) {
            var t = on(e);
            if (t && (e = t.stateNode)) {
                var l = e[it] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if ($i(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + Rt("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var n = l[t];
                                if (n !== e && n.form === e.form) {
                                    var a = n[it] || null;
                                    if (!a) throw Error(c(90));
                                    $i(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)n = l[t], n.form === e.form && $o(n);
                        }
                        break e;
                    case "textarea":
                        Wo(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && hn(e, !!l.multiple, t, !1);
                }
            }
        }
        var er = !1;
        function lf(e, t, l) {
            if (er) return e(t, l);
            er = !0;
            try {
                var n = e(t);
                return n;
            } finally{
                if (er = !1, (mn !== null || yn !== null) && (ei(), mn && (t = mn, e = yn, yn = mn = null, tf(t), e))) for(t = 0; t < e.length; t++)tf(e[t]);
            }
        }
        function ea(e, t) {
            var l = e.stateNode;
            if (l === null) return null;
            var n = l[it] || null;
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
            if (l && typeof l != "function") throw Error(c(231, t, typeof l));
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
        var dl = null, lr = null, yu = null;
        function nf() {
            if (yu) return yu;
            var e, t = lr, l = t.length, n, a = "value" in dl ? dl.value : dl.textContent, r = a.length;
            for(e = 0; e < l && t[e] === a[e]; e++);
            var d = l - e;
            for(n = 1; n <= d && t[l - n] === a[r - n]; n++);
            return yu = a.slice(e, 1 < n ? 1 - n : void 0);
        }
        function vu(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function gu() {
            return !0;
        }
        function af() {
            return !1;
        }
        function rt(e) {
            function t(l, n, a, r, d) {
                this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = r, this.target = d, this.currentTarget = null;
                for(var y in e)e.hasOwnProperty(y) && (l = e[y], this[y] = l ? l(r) : r[y]);
                return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? gu : af, this.isPropagationStopped = af, this;
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
        var Hl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, bu = rt(Hl), la = b({}, Hl, {
            view: 0,
            detail: 0
        }), zm = rt(la), nr, ar, na, Su = b({}, la, {
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
        }), uf = rt(Su), Pm = b({}, Su, {
            dataTransfer: 0
        }), qm = rt(Pm), km = b({}, la, {
            relatedTarget: 0
        }), ur = rt(km), jm = b({}, Hl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Hm = rt(jm), Lm = b({}, Hl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Qm = rt(Lm), Km = b({}, Hl, {
            data: 0
        }), rf = rt(Km), Gm = {
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
        }, Ym = {
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
        }, Vm = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function Xm(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Vm[e]) ? !!t[e] : !1;
        }
        function ir() {
            return Xm;
        }
        var Zm = b({}, la, {
            key: function(e) {
                if (e.key) {
                    var t = Gm[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = vu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ym[e.keyCode] || "Unidentified" : "";
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
                return e.type === "keypress" ? vu(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), $m = rt(Zm), Jm = b({}, Su, {
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
        }), cf = rt(Jm), Wm = b({}, la, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ir
        }), Fm = rt(Wm), Im = b({}, Hl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), e1 = rt(Im), t1 = b({}, Su, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), l1 = rt(t1), n1 = b({}, Hl, {
            newState: 0,
            oldState: 0
        }), a1 = rt(n1), u1 = [
            9,
            13,
            27,
            32
        ], rr = Yt && "CompositionEvent" in window, aa = null;
        Yt && "documentMode" in document && (aa = document.documentMode);
        var i1 = Yt && "TextEvent" in window && !aa, of = Yt && (!rr || aa && 8 < aa && 11 >= aa), ff = " ", sf = !1;
        function df(e, t) {
            switch(e){
                case "keyup":
                    return u1.indexOf(t.keyCode) !== -1;
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
        function hf(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var vn = !1;
        function r1(e, t) {
            switch(e){
                case "compositionend":
                    return hf(t);
                case "keypress":
                    return t.which !== 32 ? null : (sf = !0, ff);
                case "textInput":
                    return e = t.data, e === ff && sf ? null : e;
                default:
                    return null;
            }
        }
        function c1(e, t) {
            if (vn) return e === "compositionend" || !rr && df(e, t) ? (e = nf(), yu = lr = dl = null, vn = !1, e) : null;
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
                    return of && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var o1 = {
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
        function pf(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!o1[e.type] : t === "textarea";
        }
        function mf(e, t, l, n) {
            mn ? yn ? yn.push(n) : yn = [
                n
            ] : mn = n, t = ii(t, "onChange"), 0 < t.length && (l = new bu("onChange", "change", null, l, n), e.push({
                event: l,
                listeners: t
            }));
        }
        var ua = null, ia = null;
        function f1(e) {
            $d(e, 0);
        }
        function Eu(e) {
            var t = In(e);
            if ($o(t)) return e;
        }
        function yf(e, t) {
            if (e === "change") return t;
        }
        var vf = !1;
        if (Yt) {
            var cr;
            if (Yt) {
                var or = "oninput" in document;
                if (!or) {
                    var gf = document.createElement("div");
                    gf.setAttribute("oninput", "return;"), or = typeof gf.oninput == "function";
                }
                cr = or;
            } else cr = !1;
            vf = cr && (!document.documentMode || 9 < document.documentMode);
        }
        function bf() {
            ua && (ua.detachEvent("onpropertychange", Sf), ia = ua = null);
        }
        function Sf(e) {
            if (e.propertyName === "value" && Eu(ia)) {
                var t = [];
                mf(t, ia, e, Ii(e)), lf(f1, t);
            }
        }
        function s1(e, t, l) {
            e === "focusin" ? (bf(), ua = t, ia = l, ua.attachEvent("onpropertychange", Sf)) : e === "focusout" && bf();
        }
        function d1(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return Eu(ia);
        }
        function h1(e, t) {
            if (e === "click") return Eu(t);
        }
        function p1(e, t) {
            if (e === "input" || e === "change") return Eu(t);
        }
        function m1(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var mt = typeof Object.is == "function" ? Object.is : m1;
        function ra(e, t) {
            if (mt(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), n = Object.keys(t);
            if (l.length !== n.length) return !1;
            for(n = 0; n < l.length; n++){
                var a = l[n];
                if (!ki.call(t, a) || !mt(e[a], t[a])) return !1;
            }
            return !0;
        }
        function Ef(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function _f(e, t) {
            var l = Ef(e);
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
                l = Ef(l);
            }
        }
        function Rf(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function Tf(e) {
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
        function fr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var y1 = Yt && "documentMode" in document && 11 >= document.documentMode, gn = null, sr = null, ca = null, dr = !1;
        function Nf(e, t, l) {
            var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            dr || gn == null || gn !== pu(n) || (n = gn, "selectionStart" in n && fr(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), ca && ra(ca, n) || (ca = n, n = ii(sr, "onSelect"), 0 < n.length && (t = new bu("onSelect", "select", null, t, l), e.push({
                event: t,
                listeners: n
            }), t.target = gn)));
        }
        function Ll(e, t) {
            var l = {};
            return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
        }
        var bn = {
            animationend: Ll("Animation", "AnimationEnd"),
            animationiteration: Ll("Animation", "AnimationIteration"),
            animationstart: Ll("Animation", "AnimationStart"),
            transitionrun: Ll("Transition", "TransitionRun"),
            transitionstart: Ll("Transition", "TransitionStart"),
            transitioncancel: Ll("Transition", "TransitionCancel"),
            transitionend: Ll("Transition", "TransitionEnd")
        }, hr = {}, Af = {};
        Yt && (Af = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
        function Ql(e) {
            if (hr[e]) return hr[e];
            if (!bn[e]) return e;
            var t = bn[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in Af) return hr[e] = t[l];
            return e;
        }
        var Of = Ql("animationend"), xf = Ql("animationiteration"), Cf = Ql("animationstart"), v1 = Ql("transitionrun"), g1 = Ql("transitionstart"), b1 = Ql("transitioncancel"), Mf = Ql("transitionend"), Df = new Map, pr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        pr.push("scrollEnd");
        function Bt(e, t) {
            Df.set(e, t), jl(t, [
                e
            ]);
        }
        var Bf = new WeakMap;
        function Tt(e, t) {
            if (typeof e == "object" && e !== null) {
                var l = Bf.get(e);
                return l !== void 0 ? l : (t = {
                    value: e,
                    source: t,
                    stack: Xo(t)
                }, Bf.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Xo(t)
            };
        }
        var Nt = [], Sn = 0, mr = 0;
        function _u() {
            for(var e = Sn, t = mr = Sn = 0; t < e;){
                var l = Nt[t];
                Nt[t++] = null;
                var n = Nt[t];
                Nt[t++] = null;
                var a = Nt[t];
                Nt[t++] = null;
                var r = Nt[t];
                if (Nt[t++] = null, n !== null && a !== null) {
                    var d = n.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), n.pending = a;
                }
                r !== 0 && wf(l, a, r);
            }
        }
        function Ru(e, t, l, n) {
            Nt[Sn++] = e, Nt[Sn++] = t, Nt[Sn++] = l, Nt[Sn++] = n, mr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
        }
        function yr(e, t, l, n) {
            return Ru(e, t, l, n), Tu(e);
        }
        function En(e, t) {
            return Ru(e, null, null, t), Tu(e);
        }
        function wf(e, t, l) {
            e.lanes |= l;
            var n = e.alternate;
            n !== null && (n.lanes |= l);
            for(var a = !1, r = e.return; r !== null;)r.childLanes |= l, n = r.alternate, n !== null && (n.childLanes |= l), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (a = !0)), e = r, r = r.return;
            return e.tag === 3 ? (r = e.stateNode, a && t !== null && (a = 31 - pt(l), e = r.hiddenUpdates, n = e[a], n === null ? e[a] = [
                t
            ] : n.push(t), t.lane = l | 536870912), r) : null;
        }
        function Tu(e) {
            if (50 < wa) throw wa = 0, _c = null, Error(c(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var _n = {};
        function S1(e, t, l, n) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function yt(e, t, l, n) {
            return new S1(e, t, l, n);
        }
        function vr(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Vt(e, t) {
            var l = e.alternate;
            return l === null ? (l = yt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
        }
        function Uf(e, t) {
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
            else if (typeof e == "string") d = _0(e, l, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case te:
                    return e = yt(31, l, t, a), e.elementType = te, e.lanes = r, e;
                case C:
                    return Kl(l.children, a, r, t);
                case w:
                    d = 8, a |= 24;
                    break;
                case q:
                    return e = yt(12, l, t, a | 2), e.elementType = q, e.lanes = r, e;
                case K:
                    return e = yt(13, l, t, a), e.elementType = K, e.lanes = r, e;
                case F:
                    return e = yt(19, l, t, a), e.elementType = F, e.lanes = r, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case U:
                        case L:
                            d = 10;
                            break e;
                        case H:
                            d = 9;
                            break e;
                        case V:
                            d = 11;
                            break e;
                        case Z:
                            d = 14;
                            break e;
                        case J:
                            d = 16, n = null;
                            break e;
                    }
                    d = 29, l = Error(c(130, e === null ? "null" : typeof e, "")), n = null;
            }
            return t = yt(d, l, t, a), t.elementType = e, t.type = n, t.lanes = r, t;
        }
        function Kl(e, t, l, n) {
            return e = yt(7, e, n, t), e.lanes = l, e;
        }
        function gr(e, t, l) {
            return e = yt(6, e, null, t), e.lanes = l, e;
        }
        function br(e, t, l) {
            return t = yt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var Rn = [], Tn = 0, Au = null, Ou = 0, At = [], Ot = 0, Gl = null, Xt = 1, Zt = "";
        function Yl(e, t) {
            Rn[Tn++] = Ou, Rn[Tn++] = Au, Au = e, Ou = t;
        }
        function zf(e, t, l) {
            At[Ot++] = Xt, At[Ot++] = Zt, At[Ot++] = Gl, Gl = e;
            var n = Xt;
            e = Zt;
            var a = 32 - pt(n) - 1;
            n &= ~(1 << a), l += 1;
            var r = 32 - pt(t) + a;
            if (30 < r) {
                var d = a - a % 5;
                r = (n & (1 << d) - 1).toString(32), n >>= d, a -= d, Xt = 1 << 32 - pt(t) + a | l << a | n, Zt = r + e;
            } else Xt = 1 << r | l << a | n, Zt = e;
        }
        function Sr(e) {
            e.return !== null && (Yl(e, 1), zf(e, 1, 0));
        }
        function Er(e) {
            for(; e === Au;)Au = Rn[--Tn], Rn[Tn] = null, Ou = Rn[--Tn], Rn[Tn] = null;
            for(; e === Gl;)Gl = At[--Ot], At[Ot] = null, Zt = At[--Ot], At[Ot] = null, Xt = At[--Ot], At[Ot] = null;
        }
        var ut = null, we = null, ve = !1, Vl = null, qt = !1, _r = Error(c(519));
        function Xl(e) {
            var t = Error(c(418, ""));
            throw sa(Tt(t, e)), _r;
        }
        function Pf(e) {
            var t = e.stateNode, l = e.type, n = e.memoizedProps;
            switch(t[tt] = e, t[it] = n, l){
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
                    de("invalid", t), Jo(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), hu(t);
                    break;
                case "select":
                    de("invalid", t);
                    break;
                case "textarea":
                    de("invalid", t), Fo(t, n.value, n.defaultValue, n.children), hu(t);
            }
            l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Id(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = ri), t = !0) : t = !1, t || Xl(e);
        }
        function qf(e) {
            for(ut = e.return; ut;)switch(ut.tag){
                case 5:
                case 13:
                    qt = !1;
                    return;
                case 27:
                case 3:
                    qt = !0;
                    return;
                default:
                    ut = ut.return;
            }
        }
        function oa(e) {
            if (e !== ut) return !1;
            if (!ve) return qf(e), ve = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || kc(e.type, e.memoizedProps)), l = !l), l && we && Xl(e), qf(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (l = e.data, l === "/$") {
                            if (t === 0) {
                                we = Ut(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else l !== "$" && l !== "$!" && l !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    we = null;
                }
            } else t === 27 ? (t = we, xl(e.type) ? (e = Qc, Qc = null, we = e) : we = t) : we = ut ? Ut(e.stateNode.nextSibling) : null;
            return !0;
        }
        function fa() {
            we = ut = null, ve = !1;
        }
        function kf() {
            var e = Vl;
            return e !== null && (ft === null ? ft = e : ft.push.apply(ft, e), Vl = null), e;
        }
        function sa(e) {
            Vl === null ? Vl = [
                e
            ] : Vl.push(e);
        }
        var Rr = Q(null), Zl = null, $t = null;
        function hl(e, t, l) {
            Y(Rr, t._currentValue), t._currentValue = l;
        }
        function Jt(e) {
            e._currentValue = Rr.current, X(Rr);
        }
        function Tr(e, t, l) {
            for(; e !== null;){
                var n = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
                e = e.return;
            }
        }
        function Nr(e, t, l, n) {
            var a = e.child;
            for(a !== null && (a.return = e); a !== null;){
                var r = a.dependencies;
                if (r !== null) {
                    var d = a.child;
                    r = r.firstContext;
                    e: for(; r !== null;){
                        var y = r;
                        r = a;
                        for(var g = 0; g < t.length; g++)if (y.context === t[g]) {
                            r.lanes |= l, y = r.alternate, y !== null && (y.lanes |= l), Tr(r.return, l, e), n || (d = null);
                            break e;
                        }
                        r = y.next;
                    }
                } else if (a.tag === 18) {
                    if (d = a.return, d === null) throw Error(c(341));
                    d.lanes |= l, r = d.alternate, r !== null && (r.lanes |= l), Tr(d, l, e), d = null;
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
                    if (d === null) throw Error(c(387));
                    if (d = d.memoizedProps, d !== null) {
                        var y = a.type;
                        mt(a.pendingProps.value, d.value) || (e !== null ? e.push(y) : e = [
                            y
                        ]);
                    }
                } else if (a === dt.current) {
                    if (d = a.alternate, d === null) throw Error(c(387));
                    d.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(La) : e = [
                        La
                    ]);
                }
                a = a.return;
            }
            e !== null && Nr(t, e, l, n), t.flags |= 262144;
        }
        function xu(e) {
            for(e = e.firstContext; e !== null;){
                if (!mt(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function $l(e) {
            Zl = e, $t = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function lt(e) {
            return jf(Zl, e);
        }
        function Cu(e, t) {
            return Zl === null && $l(e), jf(e, t);
        }
        function jf(e, t) {
            var l = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, $t === null) {
                if (e === null) throw Error(c(308));
                $t = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else $t = $t.next = t;
            return l;
        }
        var E1 = typeof AbortController < "u" ? AbortController : function() {
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
        }, _1 = u.unstable_scheduleCallback, R1 = u.unstable_NormalPriority, He = {
            $$typeof: L,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Ar() {
            return {
                controller: new E1,
                data: new Map,
                refCount: 0
            };
        }
        function ha(e) {
            e.refCount--, e.refCount === 0 && _1(R1, function() {
                e.controller.abort();
            });
        }
        var pa = null, Or = 0, Nn = 0, An = null;
        function T1(e, t) {
            if (pa === null) {
                var l = pa = [];
                Or = 0, Nn = Cc(), An = {
                    status: "pending",
                    value: void 0,
                    then: function(n) {
                        l.push(n);
                    }
                };
            }
            return Or++, t.then(Hf, Hf), t;
        }
        function Hf() {
            if (--Or === 0 && pa !== null) {
                An !== null && (An.status = "fulfilled");
                var e = pa;
                pa = null, Nn = 0, An = null;
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
        var Lf = z.S;
        z.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && T1(e, t), Lf !== null && Lf(e, t);
        };
        var Jl = Q(null);
        function xr() {
            var e = Jl.current;
            return e !== null ? e : Ae.pooledCache;
        }
        function Mu(e, t) {
            t === null ? Y(Jl, Jl.current) : Y(Jl, t.pool);
        }
        function Qf() {
            var e = xr();
            return e === null ? null : {
                parent: He._currentValue,
                pool: e
            };
        }
        var ma = Error(c(460)), Kf = Error(c(474)), Du = Error(c(542)), Cr = {
            then: function() {}
        };
        function Gf(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Bu() {}
        function Yf(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Bu, Bu), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Xf(e), e;
                default:
                    if (typeof t.status == "string") t.then(Bu, Bu);
                    else {
                        if (e = Ae, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482));
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
                            throw e = t.reason, Xf(e), e;
                    }
                    throw ya = t, ma;
            }
        }
        var ya = null;
        function Vf() {
            if (ya === null) throw Error(c(459));
            var e = ya;
            return ya = null, e;
        }
        function Xf(e) {
            if (e === ma || e === Du) throw Error(c(483));
        }
        var pl = !1;
        function Mr(e) {
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
            if (n = n.shared, (be & 2) !== 0) {
                var a = n.pending;
                return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Tu(e), wf(e, null, l), t;
            }
            return Ru(e, n, t, l), Tu(e);
        }
        function va(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, jo(e, l);
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
                var e = An;
                if (e !== null) throw e;
            }
        }
        function ba(e, t, l, n) {
            wr = !1;
            var a = e.updateQueue;
            pl = !1;
            var r = a.firstBaseUpdate, d = a.lastBaseUpdate, y = a.shared.pending;
            if (y !== null) {
                a.shared.pending = null;
                var g = y, x = g.next;
                g.next = null, d === null ? r = x : d.next = x, d = g;
                var P = e.alternate;
                P !== null && (P = P.updateQueue, y = P.lastBaseUpdate, y !== d && (y === null ? P.firstBaseUpdate = x : y.next = x, P.lastBaseUpdate = g));
            }
            if (r !== null) {
                var j = a.baseState;
                d = 0, P = x = g = null, y = r;
                do {
                    var M = y.lane & -536870913, D = M !== y.lane;
                    if (D ? (he & M) === M : (n & M) === M) {
                        M !== 0 && M === Nn && (wr = !0), P !== null && (P = P.next = {
                            lane: 0,
                            tag: y.tag,
                            payload: y.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var ae = e, ee = y;
                            M = t;
                            var Re = l;
                            switch(ee.tag){
                                case 1:
                                    if (ae = ee.payload, typeof ae == "function") {
                                        j = ae.call(Re, j, M);
                                        break e;
                                    }
                                    j = ae;
                                    break e;
                                case 3:
                                    ae.flags = ae.flags & -65537 | 128;
                                case 0:
                                    if (ae = ee.payload, M = typeof ae == "function" ? ae.call(Re, j, M) : ae, M == null) break e;
                                    j = b({}, j, M);
                                    break e;
                                case 2:
                                    pl = !0;
                            }
                        }
                        M = y.callback, M !== null && (e.flags |= 64, D && (e.flags |= 8192), D = a.callbacks, D === null ? a.callbacks = [
                            M
                        ] : D.push(M));
                    } else D = {
                        lane: M,
                        tag: y.tag,
                        payload: y.payload,
                        callback: y.callback,
                        next: null
                    }, P === null ? (x = P = D, g = j) : P = P.next = D, d |= M;
                    if (y = y.next, y === null) {
                        if (y = a.shared.pending, y === null) break;
                        D = y, y = D.next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null;
                    }
                }while (!0);
                P === null && (g = j), a.baseState = g, a.firstBaseUpdate = x, a.lastBaseUpdate = P, r === null && (a.shared.lanes = 0), Tl |= d, e.lanes = d, e.memoizedState = j;
            }
        }
        function Zf(e, t) {
            if (typeof e != "function") throw Error(c(191, e));
            e.call(t);
        }
        function $f(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)Zf(l[e], t);
        }
        var On = Q(null), wu = Q(0);
        function Jf(e, t) {
            e = nl, Y(wu, e), Y(On, t), nl = e | t.baseLanes;
        }
        function Ur() {
            Y(wu, nl), Y(On, On.current);
        }
        function zr() {
            nl = wu.current, X(On), X(wu);
        }
        var vl = 0, oe = null, Ee = null, qe = null, Uu = !1, xn = !1, Wl = !1, zu = 0, Sa = 0, Cn = null, A1 = 0;
        function ze() {
            throw Error(c(321));
        }
        function Pr(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!mt(e[l], t[l])) return !1;
            return !0;
        }
        function qr(e, t, l, n, a, r) {
            return vl = r, oe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? ws : Us, Wl = !1, r = l(n, a), Wl = !1, xn && (r = Ff(t, l, n, a)), Wf(e), r;
        }
        function Wf(e) {
            z.H = Lu;
            var t = Ee !== null && Ee.next !== null;
            if (vl = 0, qe = Ee = oe = null, Uu = !1, Sa = 0, Cn = null, t) throw Error(c(300));
            e === null || Ge || (e = e.dependencies, e !== null && xu(e) && (Ge = !0));
        }
        function Ff(e, t, l, n) {
            oe = e;
            var a = 0;
            do {
                if (xn && (Cn = null), Sa = 0, xn = !1, 25 <= a) throw Error(c(301));
                if (a += 1, qe = Ee = null, e.updateQueue != null) {
                    var r = e.updateQueue;
                    r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
                }
                z.H = w1, r = t(l, n);
            }while (xn);
            return r;
        }
        function O1() {
            var e = z.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? Ea(t) : t, e = e.useState()[0], (Ee !== null ? Ee.memoizedState : null) !== e && (oe.flags |= 1024), t;
        }
        function kr() {
            var e = zu !== 0;
            return zu = 0, e;
        }
        function jr(e, t, l) {
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
            vl = 0, qe = Ee = oe = null, xn = !1, Sa = zu = 0, Cn = null;
        }
        function ct() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return qe === null ? oe.memoizedState = qe = e : qe = qe.next = e, qe;
        }
        function ke() {
            if (Ee === null) {
                var e = oe.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = Ee.next;
            var t = qe === null ? oe.memoizedState : qe.next;
            if (t !== null) qe = t, Ee = e;
            else {
                if (e === null) throw oe.alternate === null ? Error(c(467)) : Error(c(310));
                Ee = e, e = {
                    memoizedState: Ee.memoizedState,
                    baseState: Ee.baseState,
                    baseQueue: Ee.baseQueue,
                    queue: Ee.queue,
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
            return Sa += 1, Cn === null && (Cn = []), e = Yf(Cn, e, t), t = oe, (qe === null ? t.memoizedState : qe.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? ws : Us), e;
        }
        function Pu(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return Ea(e);
                if (e.$$typeof === L) return lt(e);
            }
            throw Error(c(438, String(e)));
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
            }), l === null && (l = Lr(), oe.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), n = 0; n < e; n++)l[n] = Oe;
            return t.index++, l;
        }
        function Wt(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function qu(e) {
            var t = ke();
            return Kr(t, Ee, e);
        }
        function Kr(e, t, l) {
            var n = e.queue;
            if (n === null) throw Error(c(311));
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
                var y = d = null, g = null, x = t, P = !1;
                do {
                    var j = x.lane & -536870913;
                    if (j !== x.lane ? (he & j) === j : (vl & j) === j) {
                        var M = x.revertLane;
                        if (M === 0) g !== null && (g = g.next = {
                            lane: 0,
                            revertLane: 0,
                            action: x.action,
                            hasEagerState: x.hasEagerState,
                            eagerState: x.eagerState,
                            next: null
                        }), j === Nn && (P = !0);
                        else if ((vl & M) === M) {
                            x = x.next, M === Nn && (P = !0);
                            continue;
                        } else j = {
                            lane: 0,
                            revertLane: x.revertLane,
                            action: x.action,
                            hasEagerState: x.hasEagerState,
                            eagerState: x.eagerState,
                            next: null
                        }, g === null ? (y = g = j, d = r) : g = g.next = j, oe.lanes |= M, Tl |= M;
                        j = x.action, Wl && l(r, j), r = x.hasEagerState ? x.eagerState : l(r, j);
                    } else M = {
                        lane: j,
                        revertLane: x.revertLane,
                        action: x.action,
                        hasEagerState: x.hasEagerState,
                        eagerState: x.eagerState,
                        next: null
                    }, g === null ? (y = g = M, d = r) : g = g.next = M, oe.lanes |= j, Tl |= j;
                    x = x.next;
                }while (x !== null && x !== t);
                if (g === null ? d = r : g.next = y, !mt(r, e.memoizedState) && (Ge = !0, P && (l = An, l !== null))) throw l;
                e.memoizedState = r, e.baseState = d, e.baseQueue = g, n.lastRenderedState = r;
            }
            return a === null && (n.lanes = 0), [
                e.memoizedState,
                n.dispatch
            ];
        }
        function Gr(e) {
            var t = ke(), l = t.queue;
            if (l === null) throw Error(c(311));
            l.lastRenderedReducer = e;
            var n = l.dispatch, a = l.pending, r = t.memoizedState;
            if (a !== null) {
                l.pending = null;
                var d = a = a.next;
                do r = e(r, d.action), d = d.next;
                while (d !== a);
                mt(r, t.memoizedState) || (Ge = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), l.lastRenderedState = r;
            }
            return [
                r,
                n
            ];
        }
        function If(e, t, l) {
            var n = oe, a = ke(), r = ve;
            if (r) {
                if (l === void 0) throw Error(c(407));
                l = l();
            } else l = t();
            var d = !mt((Ee || a).memoizedState, l);
            d && (a.memoizedState = l, Ge = !0), a = a.queue;
            var y = ls.bind(null, n, a, e);
            if (_a(2048, 8, y, [
                e
            ]), a.getSnapshot !== t || d || qe !== null && qe.memoizedState.tag & 1) {
                if (n.flags |= 2048, Mn(9, ku(), ts.bind(null, n, a, l, t), null), Ae === null) throw Error(c(349));
                r || (vl & 124) !== 0 || es(n, t, l);
            }
            return l;
        }
        function es(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = oe.updateQueue, t === null ? (t = Lr(), oe.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function ts(e, t, l, n) {
            t.value = l, t.getSnapshot = n, ns(t) && as(e);
        }
        function ls(e, t, l) {
            return l(function() {
                ns(t) && as(e);
            });
        }
        function ns(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !mt(e, l);
            } catch  {
                return !0;
            }
        }
        function as(e) {
            var t = En(e, 2);
            t !== null && Et(t, e, 2);
        }
        function Yr(e) {
            var t = ct();
            if (typeof e == "function") {
                var l = e;
                if (e = l(), Wl) {
                    fl(!0);
                    try {
                        l();
                    } finally{
                        fl(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Wt,
                lastRenderedState: e
            }, t;
        }
        function us(e, t, l, n) {
            return e.baseState = l, Kr(e, Ee, typeof n == "function" ? n : Wt);
        }
        function x1(e, t, l, n, a) {
            if (Hu(e)) throw Error(c(485));
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
                z.T !== null ? l(!0) : r.isTransition = !1, n(r), l = t.pending, l === null ? (r.next = t.pending = r, is(t, r)) : (r.next = l.next, t.pending = l.next = r);
            }
        }
        function is(e, t) {
            var l = t.action, n = t.payload, a = e.state;
            if (t.isTransition) {
                var r = z.T, d = {};
                z.T = d;
                try {
                    var y = l(a, n), g = z.S;
                    g !== null && g(d, y), rs(e, t, y);
                } catch (x) {
                    Vr(e, t, x);
                } finally{
                    z.T = r;
                }
            } else try {
                r = l(a, n), rs(e, t, r);
            } catch (x) {
                Vr(e, t, x);
            }
        }
        function rs(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
                cs(e, t, n);
            }, function(n) {
                return Vr(e, t, n);
            }) : cs(e, t, l);
        }
        function cs(e, t, l) {
            t.status = "fulfilled", t.value = l, os(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, is(e, l)));
        }
        function Vr(e, t, l) {
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
        function fs(e, t) {
            return t;
        }
        function ss(e, t) {
            if (ve) {
                var l = Ae.formState;
                if (l !== null) {
                    e: {
                        var n = oe;
                        if (ve) {
                            if (we) {
                                t: {
                                    for(var a = we, r = qt; a.nodeType !== 8;){
                                        if (!r) {
                                            a = null;
                                            break t;
                                        }
                                        if (a = Ut(a.nextSibling), a === null) {
                                            a = null;
                                            break t;
                                        }
                                    }
                                    r = a.data, a = r === "F!" || r === "F" ? a : null;
                                }
                                if (a) {
                                    we = Ut(a.nextSibling), n = a.data === "F!";
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
            return l = ct(), l.memoizedState = l.baseState = t, n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fs,
                lastRenderedState: t
            }, l.queue = n, l = Ms.bind(null, oe, n), n.dispatch = l, n = Yr(!1), r = Wr.bind(null, oe, !1, n.queue), n = ct(), a = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, n.queue = a, l = x1.bind(null, oe, a, r, l), a.dispatch = l, n.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function ds(e) {
            var t = ke();
            return hs(t, Ee, e);
        }
        function hs(e, t, l) {
            if (t = Kr(e, t, fs)[0], e = qu(Wt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var n = Ea(t);
            } catch (d) {
                throw d === ma ? Du : d;
            }
            else n = t;
            t = ke();
            var a = t.queue, r = a.dispatch;
            return l !== t.memoizedState && (oe.flags |= 2048, Mn(9, ku(), C1.bind(null, a, l), null)), [
                n,
                r,
                e
            ];
        }
        function C1(e, t) {
            e.action = t;
        }
        function ps(e) {
            var t = ke(), l = Ee;
            if (l !== null) return hs(t, l, e);
            ke(), t = t.memoizedState, l = ke();
            var n = l.queue.dispatch;
            return l.memoizedState = e, [
                t,
                n,
                !1
            ];
        }
        function Mn(e, t, l, n) {
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
        function ms() {
            return ke().memoizedState;
        }
        function ju(e, t, l, n) {
            var a = ct();
            n = n === void 0 ? null : n, oe.flags |= e, a.memoizedState = Mn(1 | t, ku(), l, n);
        }
        function _a(e, t, l, n) {
            var a = ke();
            n = n === void 0 ? null : n;
            var r = a.memoizedState.inst;
            Ee !== null && n !== null && Pr(n, Ee.memoizedState.deps) ? a.memoizedState = Mn(t, r, l, n) : (oe.flags |= e, a.memoizedState = Mn(1 | t, r, l, n));
        }
        function ys(e, t) {
            ju(8390656, 8, e, t);
        }
        function vs(e, t) {
            _a(2048, 8, e, t);
        }
        function gs(e, t) {
            return _a(4, 2, e, t);
        }
        function bs(e, t) {
            return _a(4, 4, e, t);
        }
        function Ss(e, t) {
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
        function Es(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, _a(4, 4, Ss.bind(null, t, e), l);
        }
        function Xr() {}
        function _s(e, t) {
            var l = ke();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            return t !== null && Pr(t, n[1]) ? n[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function Rs(e, t) {
            var l = ke();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            if (t !== null && Pr(t, n[1])) return n[0];
            if (n = e(), Wl) {
                fl(!0);
                try {
                    e();
                } finally{
                    fl(!1);
                }
            }
            return l.memoizedState = [
                n,
                t
            ], n;
        }
        function Zr(e, t, l) {
            return l === void 0 || (vl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Ad(), oe.lanes |= e, Tl |= e, l);
        }
        function Ts(e, t, l, n) {
            return mt(l, t) ? l : On.current !== null ? (e = Zr(e, l, n), mt(e, t) || (Ge = !0), e) : (vl & 42) === 0 ? (Ge = !0, e.memoizedState = l) : (e = Ad(), oe.lanes |= e, Tl |= e, t);
        }
        function Ns(e, t, l, n, a) {
            var r = G.p;
            G.p = r !== 0 && 8 > r ? r : 8;
            var d = z.T, y = {};
            z.T = y, Wr(e, !1, t, l);
            try {
                var g = a(), x = z.S;
                if (x !== null && x(y, g), g !== null && typeof g == "object" && typeof g.then == "function") {
                    var P = N1(g, n);
                    Ra(e, t, P, St(e));
                } else Ra(e, t, n, St(e));
            } catch (j) {
                Ra(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: j
                }, St());
            } finally{
                G.p = r, z.T = d;
            }
        }
        function M1() {}
        function $r(e, t, l, n) {
            if (e.tag !== 5) throw Error(c(476));
            var a = As(e).queue;
            Ns(e, a, t, ne, l === null ? M1 : function() {
                return Os(e), l(n);
            });
        }
        function As(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: ne,
                baseState: ne,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Wt,
                    lastRenderedState: ne
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
                    lastRenderedReducer: Wt,
                    lastRenderedState: l
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Os(e) {
            var t = As(e).next.queue;
            Ra(e, t, {}, St());
        }
        function Jr() {
            return lt(La);
        }
        function xs() {
            return ke().memoizedState;
        }
        function Cs() {
            return ke().memoizedState;
        }
        function D1(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = St();
                        e = ml(l);
                        var n = yl(t, e, l);
                        n !== null && (Et(n, t, l), va(n, t, l)), t = {
                            cache: Ar()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function B1(e, t, l) {
            var n = St();
            l = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Hu(e) ? Ds(t, l) : (l = yr(e, t, l, n), l !== null && (Et(l, e, n), Bs(l, t, n)));
        }
        function Ms(e, t, l) {
            var n = St();
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
            if (Hu(e)) Ds(t, a);
            else {
                var r = e.alternate;
                if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null)) try {
                    var d = t.lastRenderedState, y = r(d, l);
                    if (a.hasEagerState = !0, a.eagerState = y, mt(y, d)) return Ru(e, t, a, 0), Ae === null && _u(), !1;
                } catch  {} finally{}
                if (l = yr(e, t, a, n), l !== null) return Et(l, e, n), Bs(l, t, n), !0;
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
            }, Hu(e)) {
                if (t) throw Error(c(479));
            } else t = yr(e, l, n, 2), t !== null && Et(t, e, 2);
        }
        function Hu(e) {
            var t = e.alternate;
            return e === oe || t !== null && t === oe;
        }
        function Ds(e, t) {
            xn = Uu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function Bs(e, t, l) {
            if ((l & 4194048) !== 0) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, jo(e, l);
            }
        }
        var Lu = {
            readContext: lt,
            use: Pu,
            useCallback: ze,
            useContext: ze,
            useEffect: ze,
            useImperativeHandle: ze,
            useLayoutEffect: ze,
            useInsertionEffect: ze,
            useMemo: ze,
            useReducer: ze,
            useRef: ze,
            useState: ze,
            useDebugValue: ze,
            useDeferredValue: ze,
            useTransition: ze,
            useSyncExternalStore: ze,
            useId: ze,
            useHostTransitionStatus: ze,
            useFormState: ze,
            useActionState: ze,
            useOptimistic: ze,
            useMemoCache: ze,
            useCacheRefresh: ze
        }, ws = {
            readContext: lt,
            use: Pu,
            useCallback: function(e, t) {
                return ct().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: lt,
            useEffect: ys,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, ju(4194308, 4, Ss.bind(null, t, e), l);
            },
            useLayoutEffect: function(e, t) {
                return ju(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                ju(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var l = ct();
                t = t === void 0 ? null : t;
                var n = e();
                if (Wl) {
                    fl(!0);
                    try {
                        e();
                    } finally{
                        fl(!1);
                    }
                }
                return l.memoizedState = [
                    n,
                    t
                ], n;
            },
            useReducer: function(e, t, l) {
                var n = ct();
                if (l !== void 0) {
                    var a = l(t);
                    if (Wl) {
                        fl(!0);
                        try {
                            l(t);
                        } finally{
                            fl(!1);
                        }
                    }
                } else a = t;
                return n.memoizedState = n.baseState = a, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: a
                }, n.queue = e, e = e.dispatch = B1.bind(null, oe, e), [
                    n.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                var t = ct();
                return e = {
                    current: e
                }, t.memoizedState = e;
            },
            useState: function(e) {
                e = Yr(e);
                var t = e.queue, l = Ms.bind(null, oe, t);
                return t.dispatch = l, [
                    e.memoizedState,
                    l
                ];
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = ct();
                return Zr(l, e, t);
            },
            useTransition: function() {
                var e = Yr(!1);
                return e = Ns.bind(null, oe, e.queue, !0, !1), ct().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, l) {
                var n = oe, a = ct();
                if (ve) {
                    if (l === void 0) throw Error(c(407));
                    l = l();
                } else {
                    if (l = t(), Ae === null) throw Error(c(349));
                    (he & 124) !== 0 || es(n, t, l);
                }
                a.memoizedState = l;
                var r = {
                    value: l,
                    getSnapshot: t
                };
                return a.queue = r, ys(ls.bind(null, n, r, e), [
                    e
                ]), n.flags |= 2048, Mn(9, ku(), ts.bind(null, n, r, l, t), null), l;
            },
            useId: function() {
                var e = ct(), t = Ae.identifierPrefix;
                if (ve) {
                    var l = Zt, n = Xt;
                    l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = zu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = A1++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Jr,
            useFormState: ss,
            useActionState: ss,
            useOptimistic: function(e) {
                var t = ct();
                t.memoizedState = t.baseState = e;
                var l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = l, t = Wr.bind(null, oe, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Qr,
            useCacheRefresh: function() {
                return ct().memoizedState = D1.bind(null, oe);
            }
        }, Us = {
            readContext: lt,
            use: Pu,
            useCallback: _s,
            useContext: lt,
            useEffect: vs,
            useImperativeHandle: Es,
            useInsertionEffect: gs,
            useLayoutEffect: bs,
            useMemo: Rs,
            useReducer: qu,
            useRef: ms,
            useState: function() {
                return qu(Wt);
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = ke();
                return Ts(l, Ee.memoizedState, e, t);
            },
            useTransition: function() {
                var e = qu(Wt)[0], t = ke().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: If,
            useId: xs,
            useHostTransitionStatus: Jr,
            useFormState: ds,
            useActionState: ds,
            useOptimistic: function(e, t) {
                var l = ke();
                return us(l, Ee, e, t);
            },
            useMemoCache: Qr,
            useCacheRefresh: Cs
        }, w1 = {
            readContext: lt,
            use: Pu,
            useCallback: _s,
            useContext: lt,
            useEffect: vs,
            useImperativeHandle: Es,
            useInsertionEffect: gs,
            useLayoutEffect: bs,
            useMemo: Rs,
            useReducer: Gr,
            useRef: ms,
            useState: function() {
                return Gr(Wt);
            },
            useDebugValue: Xr,
            useDeferredValue: function(e, t) {
                var l = ke();
                return Ee === null ? Zr(l, e, t) : Ts(l, Ee.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Gr(Wt)[0], t = ke().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: If,
            useId: xs,
            useHostTransitionStatus: Jr,
            useFormState: ps,
            useActionState: ps,
            useOptimistic: function(e, t) {
                var l = ke();
                return Ee !== null ? us(l, Ee, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: Qr,
            useCacheRefresh: Cs
        }, Dn = null, Ta = 0;
        function Qu(e) {
            var t = Ta;
            return Ta += 1, Dn === null && (Dn = []), Yf(Dn, e, t);
        }
        function Na(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Ku(e, t) {
            throw t.$$typeof === R ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function zs(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Ps(e) {
            function t(N, _) {
                if (e) {
                    var O = N.deletions;
                    O === null ? (N.deletions = [
                        _
                    ], N.flags |= 16) : O.push(_);
                }
            }
            function l(N, _) {
                if (!e) return null;
                for(; _ !== null;)t(N, _), _ = _.sibling;
                return null;
            }
            function n(N) {
                for(var _ = new Map; N !== null;)N.key !== null ? _.set(N.key, N) : _.set(N.index, N), N = N.sibling;
                return _;
            }
            function a(N, _) {
                return N = Vt(N, _), N.index = 0, N.sibling = null, N;
            }
            function r(N, _, O) {
                return N.index = O, e ? (O = N.alternate, O !== null ? (O = O.index, O < _ ? (N.flags |= 67108866, _) : O) : (N.flags |= 67108866, _)) : (N.flags |= 1048576, _);
            }
            function d(N) {
                return e && N.alternate === null && (N.flags |= 67108866), N;
            }
            function y(N, _, O, k) {
                return _ === null || _.tag !== 6 ? (_ = gr(O, N.mode, k), _.return = N, _) : (_ = a(_, O), _.return = N, _);
            }
            function g(N, _, O, k) {
                var $ = O.type;
                return $ === C ? P(N, _, O.props.children, k, O.key) : _ !== null && (_.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === J && zs($) === _.type) ? (_ = a(_, O.props), Na(_, O), _.return = N, _) : (_ = Nu(O.type, O.key, O.props, null, N.mode, k), Na(_, O), _.return = N, _);
            }
            function x(N, _, O, k) {
                return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== O.containerInfo || _.stateNode.implementation !== O.implementation ? (_ = br(O, N.mode, k), _.return = N, _) : (_ = a(_, O.children || []), _.return = N, _);
            }
            function P(N, _, O, k, $) {
                return _ === null || _.tag !== 7 ? (_ = Kl(O, N.mode, k, $), _.return = N, _) : (_ = a(_, O), _.return = N, _);
            }
            function j(N, _, O) {
                if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return _ = gr("" + _, N.mode, O), _.return = N, _;
                if (typeof _ == "object" && _ !== null) {
                    switch(_.$$typeof){
                        case S:
                            return O = Nu(_.type, _.key, _.props, null, N.mode, O), Na(O, _), O.return = N, O;
                        case A:
                            return _ = br(_, N.mode, O), _.return = N, _;
                        case J:
                            var k = _._init;
                            return _ = k(_._payload), j(N, _, O);
                    }
                    if (je(_) || pe(_)) return _ = Kl(_, N.mode, O, null), _.return = N, _;
                    if (typeof _.then == "function") return j(N, Qu(_), O);
                    if (_.$$typeof === L) return j(N, Cu(N, _), O);
                    Ku(N, _);
                }
                return null;
            }
            function M(N, _, O, k) {
                var $ = _ !== null ? _.key : null;
                if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return $ !== null ? null : y(N, _, "" + O, k);
                if (typeof O == "object" && O !== null) {
                    switch(O.$$typeof){
                        case S:
                            return O.key === $ ? g(N, _, O, k) : null;
                        case A:
                            return O.key === $ ? x(N, _, O, k) : null;
                        case J:
                            return $ = O._init, O = $(O._payload), M(N, _, O, k);
                    }
                    if (je(O) || pe(O)) return $ !== null ? null : P(N, _, O, k, null);
                    if (typeof O.then == "function") return M(N, _, Qu(O), k);
                    if (O.$$typeof === L) return M(N, _, Cu(N, O), k);
                    Ku(N, O);
                }
                return null;
            }
            function D(N, _, O, k, $) {
                if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return N = N.get(O) || null, y(_, N, "" + k, $);
                if (typeof k == "object" && k !== null) {
                    switch(k.$$typeof){
                        case S:
                            return N = N.get(k.key === null ? O : k.key) || null, g(_, N, k, $);
                        case A:
                            return N = N.get(k.key === null ? O : k.key) || null, x(_, N, k, $);
                        case J:
                            var fe = k._init;
                            return k = fe(k._payload), D(N, _, O, k, $);
                    }
                    if (je(k) || pe(k)) return N = N.get(O) || null, P(_, N, k, $, null);
                    if (typeof k.then == "function") return D(N, _, O, Qu(k), $);
                    if (k.$$typeof === L) return D(N, _, O, Cu(_, k), $);
                    Ku(_, k);
                }
                return null;
            }
            function ae(N, _, O, k) {
                for(var $ = null, fe = null, W = _, le = _ = 0, Ve = null; W !== null && le < O.length; le++){
                    W.index > le ? (Ve = W, W = null) : Ve = W.sibling;
                    var ye = M(N, W, O[le], k);
                    if (ye === null) {
                        W === null && (W = Ve);
                        break;
                    }
                    e && W && ye.alternate === null && t(N, W), _ = r(ye, _, le), fe === null ? $ = ye : fe.sibling = ye, fe = ye, W = Ve;
                }
                if (le === O.length) return l(N, W), ve && Yl(N, le), $;
                if (W === null) {
                    for(; le < O.length; le++)W = j(N, O[le], k), W !== null && (_ = r(W, _, le), fe === null ? $ = W : fe.sibling = W, fe = W);
                    return ve && Yl(N, le), $;
                }
                for(W = n(W); le < O.length; le++)Ve = D(W, N, le, O[le], k), Ve !== null && (e && Ve.alternate !== null && W.delete(Ve.key === null ? le : Ve.key), _ = r(Ve, _, le), fe === null ? $ = Ve : fe.sibling = Ve, fe = Ve);
                return e && W.forEach(function(wl) {
                    return t(N, wl);
                }), ve && Yl(N, le), $;
            }
            function ee(N, _, O, k) {
                if (O == null) throw Error(c(151));
                for(var $ = null, fe = null, W = _, le = _ = 0, Ve = null, ye = O.next(); W !== null && !ye.done; le++, ye = O.next()){
                    W.index > le ? (Ve = W, W = null) : Ve = W.sibling;
                    var wl = M(N, W, ye.value, k);
                    if (wl === null) {
                        W === null && (W = Ve);
                        break;
                    }
                    e && W && wl.alternate === null && t(N, W), _ = r(wl, _, le), fe === null ? $ = wl : fe.sibling = wl, fe = wl, W = Ve;
                }
                if (ye.done) return l(N, W), ve && Yl(N, le), $;
                if (W === null) {
                    for(; !ye.done; le++, ye = O.next())ye = j(N, ye.value, k), ye !== null && (_ = r(ye, _, le), fe === null ? $ = ye : fe.sibling = ye, fe = ye);
                    return ve && Yl(N, le), $;
                }
                for(W = n(W); !ye.done; le++, ye = O.next())ye = D(W, N, le, ye.value, k), ye !== null && (e && ye.alternate !== null && W.delete(ye.key === null ? le : ye.key), _ = r(ye, _, le), fe === null ? $ = ye : fe.sibling = ye, fe = ye);
                return e && W.forEach(function(U0) {
                    return t(N, U0);
                }), ve && Yl(N, le), $;
            }
            function Re(N, _, O, k) {
                if (typeof O == "object" && O !== null && O.type === C && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
                    switch(O.$$typeof){
                        case S:
                            e: {
                                for(var $ = O.key; _ !== null;){
                                    if (_.key === $) {
                                        if ($ = O.type, $ === C) {
                                            if (_.tag === 7) {
                                                l(N, _.sibling), k = a(_, O.props.children), k.return = N, N = k;
                                                break e;
                                            }
                                        } else if (_.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === J && zs($) === _.type) {
                                            l(N, _.sibling), k = a(_, O.props), Na(k, O), k.return = N, N = k;
                                            break e;
                                        }
                                        l(N, _);
                                        break;
                                    } else t(N, _);
                                    _ = _.sibling;
                                }
                                O.type === C ? (k = Kl(O.props.children, N.mode, k, O.key), k.return = N, N = k) : (k = Nu(O.type, O.key, O.props, null, N.mode, k), Na(k, O), k.return = N, N = k);
                            }
                            return d(N);
                        case A:
                            e: {
                                for($ = O.key; _ !== null;){
                                    if (_.key === $) if (_.tag === 4 && _.stateNode.containerInfo === O.containerInfo && _.stateNode.implementation === O.implementation) {
                                        l(N, _.sibling), k = a(_, O.children || []), k.return = N, N = k;
                                        break e;
                                    } else {
                                        l(N, _);
                                        break;
                                    }
                                    else t(N, _);
                                    _ = _.sibling;
                                }
                                k = br(O, N.mode, k), k.return = N, N = k;
                            }
                            return d(N);
                        case J:
                            return $ = O._init, O = $(O._payload), Re(N, _, O, k);
                    }
                    if (je(O)) return ae(N, _, O, k);
                    if (pe(O)) {
                        if ($ = pe(O), typeof $ != "function") throw Error(c(150));
                        return O = $.call(O), ee(N, _, O, k);
                    }
                    if (typeof O.then == "function") return Re(N, _, Qu(O), k);
                    if (O.$$typeof === L) return Re(N, _, Cu(N, O), k);
                    Ku(N, O);
                }
                return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, _ !== null && _.tag === 6 ? (l(N, _.sibling), k = a(_, O), k.return = N, N = k) : (l(N, _), k = gr(O, N.mode, k), k.return = N, N = k), d(N)) : l(N, _);
            }
            return function(N, _, O, k) {
                try {
                    Ta = 0;
                    var $ = Re(N, _, O, k);
                    return Dn = null, $;
                } catch (W) {
                    if (W === ma || W === Du) throw W;
                    var fe = yt(29, W, null, N.mode);
                    return fe.lanes = k, fe.return = N, fe;
                } finally{}
            };
        }
        var Bn = Ps(!0), qs = Ps(!1), xt = Q(null), kt = null;
        function gl(e) {
            var t = e.alternate;
            Y(Le, Le.current & 1), Y(xt, e), kt === null && (t === null || On.current !== null || t.memoizedState !== null) && (kt = e);
        }
        function ks(e) {
            if (e.tag === 22) {
                if (Y(Le, Le.current), Y(xt, e), kt === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (kt = e);
                }
            } else bl();
        }
        function bl() {
            Y(Le, Le.current), Y(xt, xt.current);
        }
        function Ft(e) {
            X(xt), kt === e && (kt = null), X(Le);
        }
        var Le = Q(0);
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
        function Fr(e, t, l, n) {
            t = e.memoizedState, l = l(n, t), l = l == null ? t : b({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var Ir = {
            enqueueSetState: function(e, t, l) {
                e = e._reactInternals;
                var n = St(), a = ml(n);
                a.payload = t, l != null && (a.callback = l), t = yl(e, a, n), t !== null && (Et(t, e, n), va(t, e, n));
            },
            enqueueReplaceState: function(e, t, l) {
                e = e._reactInternals;
                var n = St(), a = ml(n);
                a.tag = 1, a.payload = t, l != null && (a.callback = l), t = yl(e, a, n), t !== null && (Et(t, e, n), va(t, e, n));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var l = St(), n = ml(l);
                n.tag = 2, t != null && (n.callback = t), t = yl(e, n, l), t !== null && (Et(t, e, l), va(t, e, l));
            }
        };
        function js(e, t, l, n, a, r, d) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, r, d) : t.prototype && t.prototype.isPureReactComponent ? !ra(l, n) || !ra(a, r) : !0;
        }
        function Hs(e, t, l, n) {
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
        function Ls(e) {
            Yu(e);
        }
        function Qs(e) {
            console.error(e);
        }
        function Ks(e) {
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
        function Gs(e, t, l) {
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
                Vu(e, t);
            }, l;
        }
        function Ys(e) {
            return e = ml(e), e.tag = 3, e;
        }
        function Vs(e, t, l, n) {
            var a = l.type.getDerivedStateFromError;
            if (typeof a == "function") {
                var r = n.value;
                e.payload = function() {
                    return a(r);
                }, e.callback = function() {
                    Gs(t, l, n);
                };
            }
            var d = l.stateNode;
            d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
                Gs(t, l, n), typeof a != "function" && (Nl === null ? Nl = new Set([
                    this
                ]) : Nl.add(this));
                var y = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: y !== null ? y : ""
                });
            });
        }
        function U1(e, t, l, n, a) {
            if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (t = l.alternate, t !== null && da(t, l, a, !0), l = xt.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return kt === null ? Tc() : l.alternate === null && Ue === 0 && (Ue = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Cr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
                                n
                            ]) : t.add(n), Ac(e, n, a)), !1;
                        case 22:
                            return l.flags |= 65536, n === Cr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    n
                                ])
                            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([
                                n
                            ]) : l.add(n)), Ac(e, n, a)), !1;
                    }
                    throw Error(c(435, l.tag));
                }
                return Ac(e, n, a), Tc(), !1;
            }
            if (ve) return t = xt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== _r && (e = Error(c(422), {
                cause: n
            }), sa(Tt(e, l)))) : (n !== _r && (t = Error(c(423), {
                cause: n
            }), sa(Tt(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = Tt(n, l), a = ec(e.stateNode, n, a), Br(e, a), Ue !== 4 && (Ue = 2)), !1;
            var r = Error(c(520), {
                cause: n
            });
            if (r = Tt(r, l), Ba === null ? Ba = [
                r
            ] : Ba.push(r), Ue !== 4 && (Ue = 2), t === null) return !0;
            n = Tt(n, l), l = t;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, e = a & -a, l.lanes |= e, e = ec(l.stateNode, n, e), Br(l, e), !1;
                    case 1:
                        if (t = l.type, r = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Nl === null || !Nl.has(r)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = Ys(a), Vs(a, e, l, n), Br(l, a), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Xs = Error(c(461)), Ge = !1;
        function $e(e, t, l, n) {
            t.child = e === null ? qs(t, null, l, n) : Bn(t, e.child, l, n);
        }
        function Zs(e, t, l, n, a) {
            l = l.render;
            var r = t.ref;
            if ("ref" in n) {
                var d = {};
                for(var y in n)y !== "ref" && (d[y] = n[y]);
            } else d = n;
            return $l(t), n = qr(e, t, l, d, r, a), y = kr(), e !== null && !Ge ? (jr(e, t, a), It(e, t, a)) : (ve && y && Sr(t), t.flags |= 1, $e(e, t, n, a), t.child);
        }
        function $s(e, t, l, n, a) {
            if (e === null) {
                var r = l.type;
                return typeof r == "function" && !vr(r) && r.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = r, Js(e, t, r, n, a)) : (e = Nu(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (r = e.child, !cc(e, a)) {
                var d = r.memoizedProps;
                if (l = l.compare, l = l !== null ? l : ra, l(d, n) && e.ref === t.ref) return It(e, t, a);
            }
            return t.flags |= 1, e = Vt(r, n), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Js(e, t, l, n, a) {
            if (e !== null) {
                var r = e.memoizedProps;
                if (ra(r, n) && e.ref === t.ref) if (Ge = !1, t.pendingProps = n = r, cc(e, a)) (e.flags & 131072) !== 0 && (Ge = !0);
                else return t.lanes = e.lanes, It(e, t, a);
            }
            return tc(e, t, l, n, a);
        }
        function Ws(e, t, l) {
            var n = t.pendingProps, a = n.children, r = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (n = r !== null ? r.baseLanes | l : l, e !== null) {
                        for(a = t.child = e.child, r = 0; a !== null;)r = r | a.lanes | a.childLanes, a = a.sibling;
                        t.childLanes = r & ~n;
                    } else t.childLanes = 0, t.child = null;
                    return Fs(e, t, n, l);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && Mu(t, r !== null ? r.cachePool : null), r !== null ? Jf(t, r) : Ur(), ks(t);
                else return t.lanes = t.childLanes = 536870912, Fs(e, t, r !== null ? r.baseLanes | l : l, l);
            } else r !== null ? (Mu(t, r.cachePool), Jf(t, r), bl(), t.memoizedState = null) : (e !== null && Mu(t, null), Ur(), bl());
            return $e(e, t, a, l), t.child;
        }
        function Fs(e, t, l, n) {
            var a = xr();
            return a = a === null ? null : {
                parent: He._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: a
            }, e !== null && Mu(t, null), Ur(), ks(t), e !== null && da(e, t, n, !0), null;
        }
        function Xu(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(c(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function tc(e, t, l, n, a) {
            return $l(t), l = qr(e, t, l, n, void 0, a), n = kr(), e !== null && !Ge ? (jr(e, t, a), It(e, t, a)) : (ve && n && Sr(t), t.flags |= 1, $e(e, t, l, a), t.child);
        }
        function Is(e, t, l, n, a, r) {
            return $l(t), t.updateQueue = null, l = Ff(t, n, l, a), Wf(e), n = kr(), e !== null && !Ge ? (jr(e, t, r), It(e, t, r)) : (ve && n && Sr(t), t.flags |= 1, $e(e, t, l, r), t.child);
        }
        function ed(e, t, l, n, a) {
            if ($l(t), t.stateNode === null) {
                var r = _n, d = l.contextType;
                typeof d == "object" && d !== null && (r = lt(d)), r = new l(n, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ir, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = n, r.state = t.memoizedState, r.refs = {}, Mr(t), d = l.contextType, r.context = typeof d == "object" && d !== null ? lt(d) : _n, r.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && (Fr(t, l, d, n), r.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (d = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), d !== r.state && Ir.enqueueReplaceState(r, r.state, null), ba(t, n, r, a), ga(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
            } else if (e === null) {
                r = t.stateNode;
                var y = t.memoizedProps, g = Fl(l, y);
                r.props = g;
                var x = r.context, P = l.contextType;
                d = _n, typeof P == "object" && P !== null && (d = lt(P));
                var j = l.getDerivedStateFromProps;
                P = typeof j == "function" || typeof r.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, P || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y || x !== d) && Hs(t, r, n, d), pl = !1;
                var M = t.memoizedState;
                r.state = M, ba(t, n, r, a), ga(), x = t.memoizedState, y || M !== x || pl ? (typeof j == "function" && (Fr(t, l, j, n), x = t.memoizedState), (g = pl || js(t, l, g, n, M, x, d)) ? (P || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = x), r.props = n, r.state = x, r.context = d, n = g) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
            } else {
                r = t.stateNode, Dr(e, t), d = t.memoizedProps, P = Fl(l, d), r.props = P, j = t.pendingProps, M = r.context, x = l.contextType, g = _n, typeof x == "object" && x !== null && (g = lt(x)), y = l.getDerivedStateFromProps, (x = typeof y == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (d !== j || M !== g) && Hs(t, r, n, g), pl = !1, M = t.memoizedState, r.state = M, ba(t, n, r, a), ga();
                var D = t.memoizedState;
                d !== j || M !== D || pl || e !== null && e.dependencies !== null && xu(e.dependencies) ? (typeof y == "function" && (Fr(t, l, y, n), D = t.memoizedState), (P = pl || js(t, l, P, n, M, D, g) || e !== null && e.dependencies !== null && xu(e.dependencies)) ? (x || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(n, D, g), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(n, D, g)), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = D), r.props = n, r.state = D, r.context = g, n = P) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), n = !1);
            }
            return r = n, Xu(e, t), n = (t.flags & 128) !== 0, r || n ? (r = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && n ? (t.child = Bn(t, e.child, null, a), t.child = Bn(t, null, l, a)) : $e(e, t, l, a), t.memoizedState = r.state, e = t.child) : e = It(e, t, a), e;
        }
        function td(e, t, l, n) {
            return fa(), t.flags |= 256, $e(e, t, l, n), t.child;
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
                cachePool: Qf()
            };
        }
        function ac(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Ct), e;
        }
        function ld(e, t, l) {
            var n = t.pendingProps, a = !1, r = (t.flags & 128) !== 0, d;
            if ((d = r) || (d = e !== null && e.memoizedState === null ? !1 : (Le.current & 2) !== 0), d && (a = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (ve) {
                    if (a ? gl(t) : bl(), ve) {
                        var y = we, g;
                        if (g = y) {
                            e: {
                                for(g = y, y = qt; g.nodeType !== 8;){
                                    if (!y) {
                                        y = null;
                                        break e;
                                    }
                                    if (g = Ut(g.nextSibling), g === null) {
                                        y = null;
                                        break e;
                                    }
                                }
                                y = g;
                            }
                            y !== null ? (t.memoizedState = {
                                dehydrated: y,
                                treeContext: Gl !== null ? {
                                    id: Xt,
                                    overflow: Zt
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, g = yt(18, null, null, 0), g.stateNode = y, g.return = t, t.child = g, ut = t, we = null, g = !0) : g = !1;
                        }
                        g || Xl(t);
                    }
                    if (y = t.memoizedState, y !== null && (y = y.dehydrated, y !== null)) return Lc(y) ? t.lanes = 32 : t.lanes = 536870912, null;
                    Ft(t);
                }
                return y = n.children, n = n.fallback, a ? (bl(), a = t.mode, y = Zu({
                    mode: "hidden",
                    children: y
                }, a), n = Kl(n, a, l, null), y.return = t, n.return = t, y.sibling = n, t.child = y, a = t.child, a.memoizedState = nc(l), a.childLanes = ac(e, d, l), t.memoizedState = lc, n) : (gl(t), uc(t, y));
            }
            if (g = e.memoizedState, g !== null && (y = g.dehydrated, y !== null)) {
                if (r) t.flags & 256 ? (gl(t), t.flags &= -257, t = ic(e, t, l)) : t.memoizedState !== null ? (bl(), t.child = e.child, t.flags |= 128, t = null) : (bl(), a = n.fallback, y = t.mode, n = Zu({
                    mode: "visible",
                    children: n.children
                }, y), a = Kl(a, y, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, Bn(t, e.child, null, l), n = t.child, n.memoizedState = nc(l), n.childLanes = ac(e, d, l), t.memoizedState = lc, t = a);
                else if (gl(t), Lc(y)) {
                    if (d = y.nextSibling && y.nextSibling.dataset, d) var x = d.dgst;
                    d = x, n = Error(c(419)), n.stack = "", n.digest = d, sa({
                        value: n,
                        source: null,
                        stack: null
                    }), t = ic(e, t, l);
                } else if (Ge || da(e, t, l, !1), d = (l & e.childLanes) !== 0, Ge || d) {
                    if (d = Ae, d !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : Qi(n), n = (n & (d.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== g.retryLane)) throw g.retryLane = n, En(e, n), Et(d, e, n), Xs;
                    y.data === "$?" || Tc(), t = ic(e, t, l);
                } else y.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, we = Ut(y.nextSibling), ut = t, ve = !0, Vl = null, qt = !1, e !== null && (At[Ot++] = Xt, At[Ot++] = Zt, At[Ot++] = Gl, Xt = e.id, Zt = e.overflow, Gl = t), t = uc(t, n.children), t.flags |= 4096);
                return t;
            }
            return a ? (bl(), a = n.fallback, y = t.mode, g = e.child, x = g.sibling, n = Vt(g, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = g.subtreeFlags & 65011712, x !== null ? a = Vt(x, a) : (a = Kl(a, y, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, y = e.child.memoizedState, y === null ? y = nc(l) : (g = y.cachePool, g !== null ? (x = He._currentValue, g = g.parent !== x ? {
                parent: x,
                pool: x
            } : g) : g = Qf(), y = {
                baseLanes: y.baseLanes | l,
                cachePool: g
            }), a.memoizedState = y, a.childLanes = ac(e, d, l), t.memoizedState = lc, n) : (gl(t), l = e.child, e = l.sibling, l = Vt(l, {
                mode: "visible",
                children: n.children
            }), l.return = t, l.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [
                e
            ], t.flags |= 16) : d.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function uc(e, t) {
            return t = Zu({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Zu(e, t) {
            return e = yt(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function ic(e, t, l) {
            return Bn(t, e.child, null, l), e = uc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function nd(e, t, l) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), Tr(e.return, t, l);
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
            if ($e(e, t, n.children, l), n = Le.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
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
            switch(Y(Le, n), a){
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
        function It(e, t, l) {
            if (e !== null && (t.dependencies = e.dependencies), Tl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
                if (da(e, t, l, !1), (l & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(c(153));
            if (t.child !== null) {
                for(e = t.child, l = Vt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = Vt(e, e.pendingProps), l.return = t;
                l.sibling = null;
            }
            return t.child;
        }
        function cc(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && xu(e)));
        }
        function z1(e, t, l) {
            switch(t.tag){
                case 3:
                    xe(t, t.stateNode.containerInfo), hl(t, He, e.memoizedState.cache), fa();
                    break;
                case 27:
                case 5:
                    qi(t);
                    break;
                case 4:
                    xe(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    hl(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var n = t.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (gl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? ld(e, t, l) : (gl(t), e = It(e, t, l), e !== null ? e.sibling : null);
                    gl(t);
                    break;
                case 19:
                    var a = (e.flags & 128) !== 0;
                    if (n = (l & t.childLanes) !== 0, n || (da(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                        if (n) return ad(e, t, l);
                        t.flags |= 128;
                    }
                    if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Y(Le, Le.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Ws(e, t, l);
                case 24:
                    hl(t, He, e.memoizedState.cache);
            }
            return It(e, t, l);
        }
        function ud(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ge = !0;
            else {
                if (!cc(e, l) && (t.flags & 128) === 0) return Ge = !1, z1(e, t, l);
                Ge = (e.flags & 131072) !== 0;
            }
            else Ge = !1, ve && (t.flags & 1048576) !== 0 && zf(t, Ou, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var n = t.elementType, a = n._init;
                        if (n = a(n._payload), t.type = n, typeof n == "function") vr(n) ? (e = Fl(n, e), t.tag = 1, t = ed(null, t, n, e, l)) : (t.tag = 0, t = tc(null, t, n, e, l));
                        else {
                            if (n != null) {
                                if (a = n.$$typeof, a === V) {
                                    t.tag = 11, t = Zs(null, t, n, e, l);
                                    break e;
                                } else if (a === Z) {
                                    t.tag = 14, t = $s(null, t, n, e, l);
                                    break e;
                                }
                            }
                            throw t = Ze(n) || n, Error(c(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return tc(e, t, t.type, t.pendingProps, l);
                case 1:
                    return n = t.type, a = Fl(n, t.pendingProps), ed(e, t, n, a, l);
                case 3:
                    e: {
                        if (xe(t, t.stateNode.containerInfo), e === null) throw Error(c(387));
                        n = t.pendingProps;
                        var r = t.memoizedState;
                        a = r.element, Dr(e, t), ba(t, n, null, l);
                        var d = t.memoizedState;
                        if (n = d.cache, hl(t, He, n), n !== r.cache && Nr(t, [
                            He
                        ], l, !0), ga(), n = d.element, r.isDehydrated) if (r = {
                            element: n,
                            isDehydrated: !1,
                            cache: d.cache
                        }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
                            t = td(e, t, n, l);
                            break e;
                        } else if (n !== a) {
                            a = Tt(Error(c(424)), t), sa(a), t = td(e, t, n, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(we = Ut(e.firstChild), ut = t, ve = !0, Vl = null, qt = !0, l = qs(t, null, n, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (fa(), n === a) {
                                t = It(e, t, l);
                                break e;
                            }
                            $e(e, t, n, l);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Xu(e, t), e === null ? (l = oh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ve || (l = t.type, e = t.pendingProps, n = ci(ie.current).createElement(l), n[tt] = t, n[it] = e, We(n, l, e), Ke(n), t.stateNode = n) : t.memoizedState = oh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return qi(t), e === null && ve && (n = t.stateNode = ih(t.type, t.pendingProps, ie.current), ut = t, qt = !0, a = we, xl(t.type) ? (Qc = a, we = Ut(n.firstChild)) : we = a), $e(e, t, t.pendingProps.children, l), Xu(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && ve && ((a = n = we) && (n = o0(n, t.type, t.pendingProps, qt), n !== null ? (t.stateNode = n, ut = t, we = Ut(n.firstChild), qt = !1, a = !0) : a = !1), a || Xl(t)), qi(t), a = t.type, r = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = r.children, kc(a, r) ? n = null : d !== null && kc(a, d) && (t.flags |= 32), t.memoizedState !== null && (a = qr(e, t, O1, null, null, l), La._currentValue = a), Xu(e, t), $e(e, t, n, l), t.child;
                case 6:
                    return e === null && ve && ((e = l = we) && (l = f0(l, t.pendingProps, qt), l !== null ? (t.stateNode = l, ut = t, we = null, e = !0) : e = !1), e || Xl(t)), null;
                case 13:
                    return ld(e, t, l);
                case 4:
                    return xe(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Bn(t, null, n, l) : $e(e, t, n, l), t.child;
                case 11:
                    return Zs(e, t, t.type, t.pendingProps, l);
                case 7:
                    return $e(e, t, t.pendingProps, l), t.child;
                case 8:
                    return $e(e, t, t.pendingProps.children, l), t.child;
                case 12:
                    return $e(e, t, t.pendingProps.children, l), t.child;
                case 10:
                    return n = t.pendingProps, hl(t, t.type, n.value), $e(e, t, n.children, l), t.child;
                case 9:
                    return a = t.type._context, n = t.pendingProps.children, $l(t), a = lt(a), n = n(a), t.flags |= 1, $e(e, t, n, l), t.child;
                case 14:
                    return $s(e, t, t.type, t.pendingProps, l);
                case 15:
                    return Js(e, t, t.type, t.pendingProps, l);
                case 19:
                    return ad(e, t, l);
                case 31:
                    return n = t.pendingProps, l = t.mode, n = {
                        mode: n.mode,
                        children: n.children
                    }, e === null ? (l = Zu(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Vt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return Ws(e, t, l);
                case 24:
                    return $l(t), n = lt(He), e === null ? (a = xr(), a === null && (a = Ae, r = Ar(), a.pooledCache = r, r.refCount++, r !== null && (a.pooledCacheLanes |= l), a = r), t.memoizedState = {
                        parent: n,
                        cache: a
                    }, Mr(t), hl(t, He, a)) : ((e.lanes & l) !== 0 && (Dr(e, t), ba(t, null, null, l), ga()), a = e.memoizedState, r = t.memoizedState, a.parent !== n ? (a = {
                        parent: n,
                        cache: n
                    }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), hl(t, He, n)) : (n = r.cache, hl(t, He, n), n !== a.cache && Nr(t, [
                        He
                    ], l, !0))), $e(e, t, t.pendingProps.children, l), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(c(156, t.tag));
        }
        function el(e) {
            e.flags |= 4;
        }
        function id(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !ph(t)) {
                if (t = xt.current, t !== null && ((he & 4194048) === he ? kt !== null : (he & 62914560) !== he && (he & 536870912) === 0 || t !== kt)) throw ya = Cr, Kf;
                e.flags |= 8192;
            }
        }
        function $u(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? qo() : 536870912, e.lanes |= t, Pn |= t);
        }
        function Aa(e, t) {
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
        function P1(e, t, l) {
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
                    return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Jt(He), ol(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (oa(t) ? el(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, kf())), Me(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (el(t), l !== null ? (Me(t), id(t, l)) : (Me(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (el(t), Me(t), id(t, l)) : (Me(t), t.flags &= -16777217) : (e.memoizedProps !== n && el(t), Me(t), t.flags &= -16777217), null;
                case 27:
                    iu(t), l = ie.current;
                    var a = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== n && el(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(c(166));
                            return Me(t), null;
                        }
                        e = I.current, oa(t) ? Pf(t) : (e = ih(a, n, l), t.stateNode = e, el(t));
                    }
                    return Me(t), null;
                case 5:
                    if (iu(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && el(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(c(166));
                            return Me(t), null;
                        }
                        if (e = I.current, oa(t)) Pf(t);
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
                            e[tt] = t, e[it] = n;
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
                            e: switch(We(e, l, n), l){
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
                        if (typeof n != "string" && t.stateNode === null) throw Error(c(166));
                        if (e = ie.current, oa(t)) {
                            if (e = t.stateNode, l = t.memoizedProps, n = null, a = ut, a !== null) switch(a.tag){
                                case 27:
                                case 5:
                                    n = a.memoizedProps;
                            }
                            e[tt] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Id(e.nodeValue, l)), e || Xl(t);
                        } else e = ci(e).createTextNode(n), e[tt] = t, t.stateNode = e;
                    }
                    return Me(t), null;
                case 13:
                    if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (a = oa(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!a) throw Error(c(318));
                                if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(c(317));
                                a[tt] = t;
                            } else fa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Me(t), a = !1;
                        } else a = kf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                        if (!a) return t.flags & 256 ? (Ft(t), t) : (Ft(t), null);
                    }
                    if (Ft(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                        n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                        var r = null;
                        n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== a && (n.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), $u(t, t.updateQueue), Me(t), null;
                case 4:
                    return ol(), e === null && wc(t.stateNode.containerInfo), Me(t), null;
                case 10:
                    return Jt(t.type), Me(t), null;
                case 19:
                    if (X(Le), a = t.memoizedState, a === null) return Me(t), null;
                    if (n = (t.flags & 128) !== 0, r = a.rendering, r === null) if (n) Aa(a, !1);
                    else {
                        if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (r = Gu(e), r !== null) {
                                for(t.flags |= 128, Aa(a, !1), e = r.updateQueue, t.updateQueue = e, $u(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)Uf(l, e), l = l.sibling;
                                return Y(Le, Le.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && Pt() > Fu && (t.flags |= 128, n = !0, Aa(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!n) if (e = Gu(r), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, $u(t, e), Aa(a, !0), a.tail === null && a.tailMode === "hidden" && !r.alternate && !ve) return Me(t), null;
                        } else 2 * Pt() - a.renderingStartTime > Fu && l !== 536870912 && (t.flags |= 128, n = !0, Aa(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (r.sibling = t.child, t.child = r) : (e = a.last, e !== null ? e.sibling = r : t.child = r, a.last = r);
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Pt(), t.sibling = null, e = Le.current, Y(Le, n ? e & 1 | 2 : e & 1), t) : (Me(t), null);
                case 22:
                case 23:
                    return Ft(t), zr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), l = t.updateQueue, l !== null && $u(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && X(Jl), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Jt(He), Me(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(c(156, t.tag));
        }
        function q1(e, t) {
            switch(Er(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Jt(He), ol(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return iu(t), null;
                case 13:
                    if (Ft(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(c(340));
                        fa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return X(Le), null;
                case 4:
                    return ol(), null;
                case 10:
                    return Jt(t.type), null;
                case 22:
                case 23:
                    return Ft(t), zr(), e !== null && X(Jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Jt(He), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function rd(e, t) {
            switch(Er(t), t.tag){
                case 3:
                    Jt(He), ol();
                    break;
                case 26:
                case 27:
                case 5:
                    iu(t);
                    break;
                case 4:
                    ol();
                    break;
                case 13:
                    Ft(t);
                    break;
                case 19:
                    X(Le);
                    break;
                case 10:
                    Jt(t.type);
                    break;
                case 22:
                case 23:
                    Ft(t), zr(), e !== null && X(Jl);
                    break;
                case 24:
                    Jt(He);
            }
        }
        function Oa(e, t) {
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
                Ne(t, t.return, y);
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
                            var d = n.inst, y = d.destroy;
                            if (y !== void 0) {
                                d.destroy = void 0, a = t;
                                var g = l, x = y;
                                try {
                                    x();
                                } catch (P) {
                                    Ne(a, g, P);
                                }
                            }
                        }
                        n = n.next;
                    }while (n !== r);
                }
            } catch (P) {
                Ne(t, t.return, P);
            }
        }
        function cd(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    $f(t, l);
                } catch (n) {
                    Ne(e, e.return, n);
                }
            }
        }
        function od(e, t, l) {
            l.props = Fl(e.type, e.memoizedProps), l.state = e.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (n) {
                Ne(e, t, n);
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
                Ne(e, t, a);
            }
        }
        function jt(e, t) {
            var l = e.ref, n = e.refCleanup;
            if (l !== null) if (typeof n == "function") try {
                n();
            } catch (a) {
                Ne(e, t, a);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof l == "function") try {
                l(null);
            } catch (a) {
                Ne(e, t, a);
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
                Ne(e, e.return, a);
            }
        }
        function oc(e, t, l) {
            try {
                var n = e.stateNode;
                a0(n, e.type, l, t), n[it] = t;
            } catch (a) {
                Ne(e, e.return, a);
            }
        }
        function sd(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && xl(e.type) || e.tag === 4;
        }
        function fc(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || sd(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && xl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function sc(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ri));
            else if (n !== 4 && (n === 27 && xl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(sc(e, t, l), e = e.sibling; e !== null;)sc(e, t, l), e = e.sibling;
        }
        function Ju(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (n !== 4 && (n === 27 && xl(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(Ju(e, t, l), e = e.sibling; e !== null;)Ju(e, t, l), e = e.sibling;
        }
        function dd(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var n = e.type, a = t.attributes; a.length;)t.removeAttributeNode(a[0]);
                We(t, n, l), t[tt] = e, t[it] = l;
            } catch (r) {
                Ne(e, e.return, r);
            }
        }
        var tl = !1, Pe = !1, dc = !1, hd = typeof WeakSet == "function" ? WeakSet : Set, Ye = null;
        function k1(e, t) {
            if (e = e.containerInfo, Pc = pi, e = Tf(e), fr(e)) {
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
                        var d = 0, y = -1, g = -1, x = 0, P = 0, j = e, M = null;
                        t: for(;;){
                            for(var D; j !== l || a !== 0 && j.nodeType !== 3 || (y = d + a), j !== r || n !== 0 && j.nodeType !== 3 || (g = d + n), j.nodeType === 3 && (d += j.nodeValue.length), (D = j.firstChild) !== null;)M = j, j = D;
                            for(;;){
                                if (j === e) break t;
                                if (M === l && ++x === a && (y = d), M === r && ++P === n && (g = d), (D = j.nextSibling) !== null) break;
                                j = M, M = j.parentNode;
                            }
                            j = D;
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
            for(qc = {
                focusedElem: e,
                selectionRange: l
            }, pi = !1, Ye = t; Ye !== null;)if (t = Ye, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ye = e;
            else for(; Ye !== null;){
                switch(t = Ye, r = t.alternate, e = t.flags, t.tag){
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && r !== null) {
                            e = void 0, l = t, a = r.memoizedProps, r = r.memoizedState, n = l.stateNode;
                            try {
                                var ae = Fl(l.type, a, l.elementType === l.type);
                                e = n.getSnapshotBeforeUpdate(ae, r), n.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (ee) {
                                Ne(l, l.return, ee);
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
                        if ((e & 1024) !== 0) throw Error(c(163));
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, Ye = e;
                    break;
                }
                Ye = t.return;
            }
        }
        function pd(e, t, l) {
            var n = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    El(e, l), n & 4 && Oa(5, l);
                    break;
                case 1:
                    if (El(e, l), n & 4) if (e = l.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (d) {
                        Ne(l, l.return, d);
                    }
                    else {
                        var a = Fl(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (d) {
                            Ne(l, l.return, d);
                        }
                    }
                    n & 64 && cd(l), n & 512 && xa(l, l.return);
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
                            $f(e, t);
                        } catch (d) {
                            Ne(l, l.return, d);
                        }
                    }
                    break;
                case 27:
                    t === null && n & 4 && dd(l);
                case 26:
                case 5:
                    El(e, l), t === null && n & 4 && fd(l), n & 512 && xa(l, l.return);
                    break;
                case 12:
                    El(e, l);
                    break;
                case 13:
                    El(e, l), n & 4 && vd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = X1.bind(null, l), s0(e, l))));
                    break;
                case 22:
                    if (n = l.memoizedState !== null || tl, !n) {
                        t = t !== null && t.memoizedState !== null || Pe, a = tl;
                        var r = Pe;
                        tl = n, (Pe = t) && !r ? _l(e, l, (l.subtreeFlags & 8772) !== 0) : El(e, l), tl = a, Pe = r;
                    }
                    break;
                case 30:
                    break;
                default:
                    El(e, l);
            }
        }
        function md(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, md(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Yi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Ce = null, ot = !1;
        function ll(e, t, l) {
            for(l = l.child; l !== null;)yd(e, t, l), l = l.sibling;
        }
        function yd(e, t, l) {
            if (ht && typeof ht.onCommitFiberUnmount == "function") try {
                ht.onCommitFiberUnmount($n, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    Pe || jt(l, t), ll(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    Pe || jt(l, t);
                    var n = Ce, a = ot;
                    xl(l.type) && (Ce = l.stateNode, ot = !1), ll(e, t, l), qa(l.stateNode), Ce = n, ot = a;
                    break;
                case 5:
                    Pe || jt(l, t);
                case 6:
                    if (n = Ce, a = ot, Ce = null, ll(e, t, l), Ce = n, ot = a, Ce !== null) if (ot) try {
                        (Ce.nodeType === 9 ? Ce.body : Ce.nodeName === "HTML" ? Ce.ownerDocument.body : Ce).removeChild(l.stateNode);
                    } catch (r) {
                        Ne(l, t, r);
                    }
                    else try {
                        Ce.removeChild(l.stateNode);
                    } catch (r) {
                        Ne(l, t, r);
                    }
                    break;
                case 18:
                    Ce !== null && (ot ? (e = Ce, ah(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ya(e)) : ah(Ce, l.stateNode));
                    break;
                case 4:
                    n = Ce, a = ot, Ce = l.stateNode.containerInfo, ot = !0, ll(e, t, l), Ce = n, ot = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Pe || Sl(2, l, t), Pe || Sl(4, l, t), ll(e, t, l);
                    break;
                case 1:
                    Pe || (jt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && od(l, t, n)), ll(e, t, l);
                    break;
                case 21:
                    ll(e, t, l);
                    break;
                case 22:
                    Pe = (n = Pe) || l.memoizedState !== null, ll(e, t, l), Pe = n;
                    break;
                default:
                    ll(e, t, l);
            }
        }
        function vd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Ya(e);
            } catch (l) {
                Ne(t, t.return, l);
            }
        }
        function j1(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new hd), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new hd), t;
                default:
                    throw Error(c(435, e.tag));
            }
        }
        function hc(e, t) {
            var l = j1(e);
            t.forEach(function(n) {
                var a = Z1.bind(null, e, n);
                l.has(n) || (l.add(n), n.then(a, a));
            });
        }
        function vt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var n = 0; n < l.length; n++){
                var a = l[n], r = e, d = t, y = d;
                e: for(; y !== null;){
                    switch(y.tag){
                        case 27:
                            if (xl(y.type)) {
                                Ce = y.stateNode, ot = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Ce = y.stateNode, ot = !1;
                            break e;
                        case 3:
                        case 4:
                            Ce = y.stateNode.containerInfo, ot = !0;
                            break e;
                    }
                    y = y.return;
                }
                if (Ce === null) throw Error(c(160));
                yd(r, d, a), Ce = null, ot = !1, r = a.alternate, r !== null && (r.return = null), a.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)gd(t, e), t = t.sibling;
        }
        var wt = null;
        function gd(e, t) {
            var l = e.alternate, n = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    vt(t, e), gt(e), n & 4 && (Sl(3, e, e.return), Oa(3, e), Sl(5, e, e.return));
                    break;
                case 1:
                    vt(t, e), gt(e), n & 512 && (Pe || l === null || jt(l, l.return)), n & 64 && tl && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                    break;
                case 26:
                    var a = wt;
                    if (vt(t, e), gt(e), n & 512 && (Pe || l === null || jt(l, l.return)), n & 4) {
                        var r = l !== null ? l.memoizedState : null;
                        if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
                            e: {
                                n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                                t: switch(n){
                                    case "title":
                                        r = a.getElementsByTagName("title")[0], (!r || r[Fn] || r[tt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(n), a.head.insertBefore(r, a.querySelector("head > title"))), We(r, n, l), r[tt] = e, Ke(r), n = r;
                                        break e;
                                    case "link":
                                        var d = dh("link", "href", a).get(n + (l.href || ""));
                                        if (d) {
                                            for(var y = 0; y < d.length; y++)if (r = d[y], r.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && r.getAttribute("rel") === (l.rel == null ? null : l.rel) && r.getAttribute("title") === (l.title == null ? null : l.title) && r.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                d.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        r = a.createElement(n), We(r, n, l), a.head.appendChild(r);
                                        break;
                                    case "meta":
                                        if (d = dh("meta", "content", a).get(n + (l.content || ""))) {
                                            for(y = 0; y < d.length; y++)if (r = d[y], r.getAttribute("content") === (l.content == null ? null : "" + l.content) && r.getAttribute("name") === (l.name == null ? null : l.name) && r.getAttribute("property") === (l.property == null ? null : l.property) && r.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && r.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                d.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        r = a.createElement(n), We(r, n, l), a.head.appendChild(r);
                                        break;
                                    default:
                                        throw Error(c(468, n));
                                }
                                r[tt] = e, Ke(r), n = r;
                            }
                            e.stateNode = n;
                        } else hh(a, e.type, e.stateNode);
                        else e.stateNode = sh(a, n, e.memoizedProps);
                        else r !== n ? (r === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : r.count--, n === null ? hh(a, e.type, e.stateNode) : sh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && oc(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    vt(t, e), gt(e), n & 512 && (Pe || l === null || jt(l, l.return)), l !== null && n & 4 && oc(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (vt(t, e), gt(e), n & 512 && (Pe || l === null || jt(l, l.return)), e.flags & 32) {
                        a = e.stateNode;
                        try {
                            pn(a, "");
                        } catch (D) {
                            Ne(e, e.return, D);
                        }
                    }
                    n & 4 && e.stateNode != null && (a = e.memoizedProps, oc(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (dc = !0);
                    break;
                case 6:
                    if (vt(t, e), gt(e), n & 4) {
                        if (e.stateNode === null) throw Error(c(162));
                        n = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = n;
                        } catch (D) {
                            Ne(e, e.return, D);
                        }
                    }
                    break;
                case 3:
                    if (si = null, a = wt, wt = oi(t.containerInfo), vt(t, e), wt = a, gt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Ya(t.containerInfo);
                    } catch (D) {
                        Ne(e, e.return, D);
                    }
                    dc && (dc = !1, bd(e));
                    break;
                case 4:
                    n = wt, wt = oi(e.stateNode.containerInfo), vt(t, e), gt(e), wt = n;
                    break;
                case 12:
                    vt(t, e), gt(e);
                    break;
                case 13:
                    vt(t, e), gt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (bc = Pt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, hc(e, n)));
                    break;
                case 22:
                    a = e.memoizedState !== null;
                    var g = l !== null && l.memoizedState !== null, x = tl, P = Pe;
                    if (tl = x || a, Pe = P || g, vt(t, e), Pe = P, tl = x, gt(e), n & 8192) e: for(t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || g || tl || Pe || Il(e)), l = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                g = l = t;
                                try {
                                    if (r = g.stateNode, a) d = r.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                                    else {
                                        y = g.stateNode;
                                        var j = g.memoizedProps.style, M = j != null && j.hasOwnProperty("display") ? j.display : null;
                                        y.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                                    }
                                } catch (D) {
                                    Ne(g, g.return, D);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                g = t;
                                try {
                                    g.stateNode.nodeValue = a ? "" : g.memoizedProps;
                                } catch (D) {
                                    Ne(g, g.return, D);
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
                    vt(t, e), gt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, hc(e, n)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    vt(t, e), gt(e);
            }
        }
        function gt(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for(var l, n = e.return; n !== null;){
                        if (sd(n)) {
                            l = n;
                            break;
                        }
                        n = n.return;
                    }
                    if (l == null) throw Error(c(160));
                    switch(l.tag){
                        case 27:
                            var a = l.stateNode, r = fc(e);
                            Ju(e, r, a);
                            break;
                        case 5:
                            var d = l.stateNode;
                            l.flags & 32 && (pn(d, ""), l.flags &= -33);
                            var y = fc(e);
                            Ju(e, y, d);
                            break;
                        case 3:
                        case 4:
                            var g = l.stateNode.containerInfo, x = fc(e);
                            sc(e, x, g);
                            break;
                        default:
                            throw Error(c(161));
                    }
                } catch (P) {
                    Ne(e, e.return, P);
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
        function El(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)pd(e, t.alternate, t), t = t.sibling;
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
                        jt(t, t.return);
                        var l = t.stateNode;
                        typeof l.componentWillUnmount == "function" && od(t, t.return, l), Il(t);
                        break;
                    case 27:
                        qa(t.stateNode);
                    case 26:
                    case 5:
                        jt(t, t.return), Il(t);
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
                        _l(a, r, l), Oa(4, r);
                        break;
                    case 1:
                        if (_l(a, r, l), n = r, a = n.stateNode, typeof a.componentDidMount == "function") try {
                            a.componentDidMount();
                        } catch (x) {
                            Ne(n, n.return, x);
                        }
                        if (n = r, a = n.updateQueue, a !== null) {
                            var y = n.stateNode;
                            try {
                                var g = a.shared.hiddenCallbacks;
                                if (g !== null) for(a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++)Zf(g[a], y);
                            } catch (x) {
                                Ne(n, n.return, x);
                            }
                        }
                        l && d & 64 && cd(r), xa(r, r.return);
                        break;
                    case 27:
                        dd(r);
                    case 26:
                    case 5:
                        _l(a, r, l), l && n === null && d & 4 && fd(r), xa(r, r.return);
                        break;
                    case 12:
                        _l(a, r, l);
                        break;
                    case 13:
                        _l(a, r, l), l && d & 4 && vd(a, r);
                        break;
                    case 22:
                        r.memoizedState === null && _l(a, r, l), xa(r, r.return);
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
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ha(l));
        }
        function mc(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ha(e));
        }
        function Ht(e, t, l, n) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Sd(e, t, l, n), t = t.sibling;
        }
        function Sd(e, t, l, n) {
            var a = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    Ht(e, t, l, n), a & 2048 && Oa(9, t);
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
                            var r = t.memoizedProps, d = r.id, y = r.onPostCommit;
                            typeof y == "function" && y(d, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (g) {
                            Ne(t, t.return, g);
                        }
                    } else Ht(e, t, l, n);
                    break;
                case 13:
                    Ht(e, t, l, n);
                    break;
                case 23:
                    break;
                case 22:
                    r = t.stateNode, d = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? Ht(e, t, l, n) : Ca(e, t) : r._visibility & 2 ? Ht(e, t, l, n) : (r._visibility |= 2, wn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && pc(d, t);
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
                var r = e, d = t, y = l, g = n, x = d.flags;
                switch(d.tag){
                    case 0:
                    case 11:
                    case 15:
                        wn(r, d, y, g, a), Oa(8, d);
                        break;
                    case 23:
                        break;
                    case 22:
                        var P = d.stateNode;
                        d.memoizedState !== null ? P._visibility & 2 ? wn(r, d, y, g, a) : Ca(r, d) : (P._visibility |= 2, wn(r, d, y, g, a)), a && x & 2048 && pc(d.alternate, d);
                        break;
                    case 24:
                        wn(r, d, y, g, a), a && x & 2048 && mc(d.alternate, d);
                        break;
                    default:
                        wn(r, d, y, g, a);
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
        var Ma = 8192;
        function Un(e) {
            if (e.subtreeFlags & Ma) for(e = e.child; e !== null;)Ed(e), e = e.sibling;
        }
        function Ed(e) {
            switch(e.tag){
                case 26:
                    Un(e), e.flags & Ma && e.memoizedState !== null && T0(wt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    Un(e);
                    break;
                case 3:
                case 4:
                    var t = wt;
                    wt = oi(e.stateNode.containerInfo), Un(e), wt = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ma, Ma = 16777216, Un(e), Ma = t) : Un(e));
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
                    Ye = n, Td(n, e);
                }
                _d(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)Rd(e), e = e.sibling;
        }
        function Rd(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    Da(e), e.flags & 2048 && Sl(9, e, e.return);
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
                    Ye = n, Td(n, e);
                }
                _d(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        Sl(8, t, t.return), Wu(t);
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
            for(; Ye !== null;){
                var l = Ye;
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
                        ha(l.memoizedState.cache);
                }
                if (n = l.child, n !== null) n.return = l, Ye = n;
                else e: for(l = e; Ye !== null;){
                    n = Ye;
                    var a = n.sibling, r = n.return;
                    if (md(n), n === l) {
                        Ye = null;
                        break e;
                    }
                    if (a !== null) {
                        a.return = r, Ye = a;
                        break e;
                    }
                    Ye = r;
                }
            }
        }
        var H1 = {
            getCacheForType: function(e) {
                var t = lt(He), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, L1 = typeof WeakMap == "function" ? WeakMap : Map, be = 0, Ae = null, se = null, he = 0, Se = 0, bt = null, Rl = !1, zn = !1, yc = !1, nl = 0, Ue = 0, Tl = 0, en = 0, vc = 0, Ct = 0, Pn = 0, Ba = null, ft = null, gc = !1, bc = 0, Fu = 1 / 0, Iu = null, Nl = null, Je = 0, Al = null, qn = null, kn = 0, Sc = 0, Ec = null, Nd = null, wa = 0, _c = null;
        function St() {
            if ((be & 2) !== 0 && he !== 0) return he & -he;
            if (z.T !== null) {
                var e = Nn;
                return e !== 0 ? e : Cc();
            }
            return Ho();
        }
        function Ad() {
            Ct === 0 && (Ct = (he & 536870912) === 0 || ve ? Po() : 536870912);
            var e = xt.current;
            return e !== null && (e.flags |= 32), Ct;
        }
        function Et(e, t, l) {
            (e === Ae && (Se === 2 || Se === 9) || e.cancelPendingCommit !== null) && (jn(e, 0), Ol(e, he, Ct, !1)), Wn(e, l), ((be & 2) === 0 || e !== Ae) && (e === Ae && ((be & 2) === 0 && (en |= l), Ue === 4 && Ol(e, he, Ct, !1)), Lt(e));
        }
        function Od(e, t, l) {
            if ((be & 6) !== 0) throw Error(c(327));
            var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Jn(e, t), a = n ? G1(e, t) : Nc(e, t, !0), r = n;
            do {
                if (a === 0) {
                    zn && !n && Ol(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, r && !Q1(l)) {
                        a = Nc(e, t, !1), r = !1;
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
                                var g = y.current.memoizedState.isDehydrated;
                                if (g && (jn(y, d).flags |= 256), d = Nc(y, d, !1), d !== 2) {
                                    if (yc && !g) {
                                        y.errorRecoveryDisabledLanes |= r, en |= r, a = 4;
                                        break e;
                                    }
                                    r = ft, ft = a, r !== null && (ft === null ? ft = r : ft.push.apply(ft, r));
                                }
                                a = d;
                            }
                            if (r = !1, a !== 2) continue;
                        }
                    }
                    if (a === 1) {
                        jn(e, 0), Ol(e, t, 0, !0);
                        break;
                    }
                    e: {
                        switch(n = e, r = a, r){
                            case 0:
                            case 1:
                                throw Error(c(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                Ol(n, t, Ct, !Rl);
                                break e;
                            case 2:
                                ft = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(c(329));
                        }
                        if ((t & 62914560) === t && (a = bc + 300 - Pt(), 10 < a)) {
                            if (Ol(n, t, Ct, !Rl), fu(n, 0, !0) !== 0) break e;
                            n.timeoutHandle = lh(xd.bind(null, n, l, ft, Iu, gc, t, Ct, en, Pn, Rl, r, 2, -0, 0), a);
                            break e;
                        }
                        xd(n, l, ft, Iu, gc, t, Ct, en, Pn, Rl, r, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            Lt(e);
        }
        function xd(e, t, l, n, a, r, d, y, g, x, P, j, M, D) {
            if (e.timeoutHandle = -1, j = t.subtreeFlags, (j & 8192 || (j & 16785408) === 16785408) && (Ha = {
                stylesheets: null,
                count: 0,
                unsuspend: R0
            }, Ed(t), j = N0(), j !== null)) {
                e.cancelPendingCommit = j(zd.bind(null, e, t, r, l, n, a, d, y, g, P, 1, M, D)), Ol(e, r, d, !x);
                return;
            }
            zd(e, t, r, l, n, a, d, y, g);
        }
        function Q1(e) {
            for(var t = e;;){
                var l = t.tag;
                if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for(var n = 0; n < l.length; n++){
                    var a = l[n], r = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!mt(r(), a)) return !1;
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
            t &= ~vc, t &= ~en, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
            for(var a = t; 0 < a;){
                var r = 31 - pt(a), d = 1 << r;
                n[r] = -1, a &= ~d;
            }
            l !== 0 && ko(e, l, t);
        }
        function ei() {
            return (be & 6) === 0 ? (Ua(0), !1) : !0;
        }
        function Rc() {
            if (se !== null) {
                if (Se === 0) var e = se.return;
                else e = se, $t = Zl = null, Hr(e), Dn = null, Ta = 0, e = se;
                for(; e !== null;)rd(e.alternate, e), e = e.return;
                se = null;
            }
        }
        function jn(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, i0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Rc(), Ae = e, se = l = Vt(e.current, null), he = t, Se = 0, bt = null, Rl = !1, zn = Jn(e, t), yc = !1, Pn = Ct = vc = en = Tl = Ue = 0, ft = Ba = null, gc = !1, (t & 8) !== 0 && (t |= t & 32);
            var n = e.entangledLanes;
            if (n !== 0) for(e = e.entanglements, n &= t; 0 < n;){
                var a = 31 - pt(n), r = 1 << a;
                t |= e[a], n &= ~r;
            }
            return nl = t, _u(), l;
        }
        function Cd(e, t) {
            oe = null, z.H = Lu, t === ma || t === Du ? (t = Vf(), Se = 3) : t === Kf ? (t = Vf(), Se = 4) : Se = t === Xs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, bt = t, se === null && (Ue = 1, Vu(e, Tt(t, e.current)));
        }
        function Md() {
            var e = z.H;
            return z.H = Lu, e === null ? Lu : e;
        }
        function Dd() {
            var e = z.A;
            return z.A = H1, e;
        }
        function Tc() {
            Ue = 4, Rl || (he & 4194048) !== he && xt.current !== null || (zn = !0), (Tl & 134217727) === 0 && (en & 134217727) === 0 || Ae === null || Ol(Ae, he, Ct, !1);
        }
        function Nc(e, t, l) {
            var n = be;
            be |= 2;
            var a = Md(), r = Dd();
            (Ae !== e || he !== t) && (Iu = null, jn(e, t)), t = !1;
            var d = Ue;
            e: do try {
                if (Se !== 0 && se !== null) {
                    var y = se, g = bt;
                    switch(Se){
                        case 8:
                            Rc(), d = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            xt.current === null && (t = !0);
                            var x = Se;
                            if (Se = 0, bt = null, Hn(e, y, g, x), l && zn) {
                                d = 0;
                                break e;
                            }
                            break;
                        default:
                            x = Se, Se = 0, bt = null, Hn(e, y, g, x);
                    }
                }
                K1(), d = Ue;
                break;
            } catch (P) {
                Cd(e, P);
            }
            while (!0);
            return t && e.shellSuspendCounter++, $t = Zl = null, be = n, z.H = a, z.A = r, se === null && (Ae = null, he = 0, _u()), d;
        }
        function K1() {
            for(; se !== null;)Bd(se);
        }
        function G1(e, t) {
            var l = be;
            be |= 2;
            var n = Md(), a = Dd();
            Ae !== e || he !== t ? (Iu = null, Fu = Pt() + 500, jn(e, t)) : zn = Jn(e, t);
            e: do try {
                if (Se !== 0 && se !== null) {
                    t = se;
                    var r = bt;
                    t: switch(Se){
                        case 1:
                            Se = 0, bt = null, Hn(e, t, r, 1);
                            break;
                        case 2:
                        case 9:
                            if (Gf(r)) {
                                Se = 0, bt = null, wd(t);
                                break;
                            }
                            t = function() {
                                Se !== 2 && Se !== 9 || Ae !== e || (Se = 7), Lt(e);
                            }, r.then(t, t);
                            break e;
                        case 3:
                            Se = 7;
                            break e;
                        case 4:
                            Se = 5;
                            break e;
                        case 7:
                            Gf(r) ? (Se = 0, bt = null, wd(t)) : (Se = 0, bt = null, Hn(e, t, r, 7));
                            break;
                        case 5:
                            var d = null;
                            switch(se.tag){
                                case 26:
                                    d = se.memoizedState;
                                case 5:
                                case 27:
                                    var y = se;
                                    if (!d || ph(d)) {
                                        Se = 0, bt = null;
                                        var g = y.sibling;
                                        if (g !== null) se = g;
                                        else {
                                            var x = y.return;
                                            x !== null ? (se = x, ti(x)) : se = null;
                                        }
                                        break t;
                                    }
                            }
                            Se = 0, bt = null, Hn(e, t, r, 5);
                            break;
                        case 6:
                            Se = 0, bt = null, Hn(e, t, r, 6);
                            break;
                        case 8:
                            Rc(), Ue = 6;
                            break e;
                        default:
                            throw Error(c(462));
                    }
                }
                Y1();
                break;
            } catch (P) {
                Cd(e, P);
            }
            while (!0);
            return $t = Zl = null, z.H = n, z.A = a, be = l, se !== null ? 0 : (Ae = null, he = 0, _u(), Ue);
        }
        function Y1() {
            for(; se !== null && !hm();)Bd(se);
        }
        function Bd(e) {
            var t = ud(e.alternate, e, nl);
            e.memoizedProps = e.pendingProps, t === null ? ti(e) : se = t;
        }
        function wd(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Is(l, t, t.pendingProps, t.type, void 0, he);
                    break;
                case 11:
                    t = Is(l, t, t.pendingProps, t.type.render, t.ref, he);
                    break;
                case 5:
                    Hr(t);
                default:
                    rd(l, t), t = se = Uf(t, nl), t = ud(l, t, nl);
            }
            e.memoizedProps = e.pendingProps, t === null ? ti(e) : se = t;
        }
        function Hn(e, t, l, n) {
            $t = Zl = null, Hr(t), Dn = null, Ta = 0;
            var a = t.return;
            try {
                if (U1(e, a, t, l, he)) {
                    Ue = 1, Vu(e, Tt(l, e.current)), se = null;
                    return;
                }
            } catch (r) {
                if (a !== null) throw se = a, r;
                Ue = 1, Vu(e, Tt(l, e.current)), se = null;
                return;
            }
            t.flags & 32768 ? (ve || n === 1 ? e = !0 : zn || (he & 536870912) !== 0 ? e = !1 : (Rl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = xt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Ud(t, e)) : ti(t);
        }
        function ti(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Ud(t, Rl);
                    return;
                }
                e = t.return;
                var l = P1(t.alternate, t, nl);
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
            Ue === 0 && (Ue = 5);
        }
        function Ud(e, t) {
            do {
                var l = q1(e.alternate, e);
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
            Ue = 6, se = null;
        }
        function zd(e, t, l, n, a, r, d, y, g) {
            e.cancelPendingCommit = null;
            do li();
            while (Je !== 0);
            if ((be & 6) !== 0) throw Error(c(327));
            if (t !== null) {
                if (t === e.current) throw Error(c(177));
                if (r = t.lanes | t.childLanes, r |= mr, Rm(e, l, r, d, y, g), e === Ae && (se = Ae = null, he = 0), qn = t, Al = e, kn = l, Sc = r, Ec = a, Nd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, $1(ru, function() {
                    return Hd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                    n = z.T, z.T = null, a = G.p, G.p = 2, d = be, be |= 4;
                    try {
                        k1(e, t, l);
                    } finally{
                        be = d, G.p = a, z.T = n;
                    }
                }
                Je = 1, Pd(), qd(), kd();
            }
        }
        function Pd() {
            if (Je === 1) {
                Je = 0;
                var e = Al, t = qn, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = z.T, z.T = null;
                    var n = G.p;
                    G.p = 2;
                    var a = be;
                    be |= 4;
                    try {
                        gd(t, e);
                        var r = qc, d = Tf(e.containerInfo), y = r.focusedElem, g = r.selectionRange;
                        if (d !== y && y && y.ownerDocument && Rf(y.ownerDocument.documentElement, y)) {
                            if (g !== null && fr(y)) {
                                var x = g.start, P = g.end;
                                if (P === void 0 && (P = x), "selectionStart" in y) y.selectionStart = x, y.selectionEnd = Math.min(P, y.value.length);
                                else {
                                    var j = y.ownerDocument || document, M = j && j.defaultView || window;
                                    if (M.getSelection) {
                                        var D = M.getSelection(), ae = y.textContent.length, ee = Math.min(g.start, ae), Re = g.end === void 0 ? ee : Math.min(g.end, ae);
                                        !D.extend && ee > Re && (d = Re, Re = ee, ee = d);
                                        var N = _f(y, ee), _ = _f(y, Re);
                                        if (N && _ && (D.rangeCount !== 1 || D.anchorNode !== N.node || D.anchorOffset !== N.offset || D.focusNode !== _.node || D.focusOffset !== _.offset)) {
                                            var O = j.createRange();
                                            O.setStart(N.node, N.offset), D.removeAllRanges(), ee > Re ? (D.addRange(O), D.extend(_.node, _.offset)) : (O.setEnd(_.node, _.offset), D.addRange(O));
                                        }
                                    }
                                }
                            }
                            for(j = [], D = y; D = D.parentNode;)D.nodeType === 1 && j.push({
                                element: D,
                                left: D.scrollLeft,
                                top: D.scrollTop
                            });
                            for(typeof y.focus == "function" && y.focus(), y = 0; y < j.length; y++){
                                var k = j[y];
                                k.element.scrollLeft = k.left, k.element.scrollTop = k.top;
                            }
                        }
                        pi = !!Pc, qc = Pc = null;
                    } finally{
                        be = a, G.p = n, z.T = l;
                    }
                }
                e.current = t, Je = 2;
            }
        }
        function qd() {
            if (Je === 2) {
                Je = 0;
                var e = Al, t = qn, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = z.T, z.T = null;
                    var n = G.p;
                    G.p = 2;
                    var a = be;
                    be |= 4;
                    try {
                        pd(e, t.alternate, t);
                    } finally{
                        be = a, G.p = n, z.T = l;
                    }
                }
                Je = 3;
            }
        }
        function kd() {
            if (Je === 4 || Je === 3) {
                Je = 0, pm();
                var e = Al, t = qn, l = kn, n = Nd;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, qn = Al = null, jd(e, e.pendingLanes));
                var a = e.pendingLanes;
                if (a === 0 && (Nl = null), Ki(l), t = t.stateNode, ht && typeof ht.onCommitFiberRoot == "function") try {
                    ht.onCommitFiberRoot($n, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (n !== null) {
                    t = z.T, a = G.p, G.p = 2, z.T = null;
                    try {
                        for(var r = e.onRecoverableError, d = 0; d < n.length; d++){
                            var y = n[d];
                            r(y.value, {
                                componentStack: y.stack
                            });
                        }
                    } finally{
                        z.T = t, G.p = a;
                    }
                }
                (kn & 3) !== 0 && li(), Lt(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === _c ? wa++ : (wa = 0, _c = e) : wa = 0, Ua(0);
            }
        }
        function jd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ha(t)));
        }
        function li(e) {
            return Pd(), qd(), kd(), Hd();
        }
        function Hd() {
            if (Je !== 5) return !1;
            var e = Al, t = Sc;
            Sc = 0;
            var l = Ki(kn), n = z.T, a = G.p;
            try {
                G.p = 32 > l ? 32 : l, z.T = null, l = Ec, Ec = null;
                var r = Al, d = kn;
                if (Je = 0, qn = Al = null, kn = 0, (be & 6) !== 0) throw Error(c(331));
                var y = be;
                if (be |= 4, Rd(r.current), Sd(r, r.current, d, l), be = y, Ua(0, !1), ht && typeof ht.onPostCommitFiberRoot == "function") try {
                    ht.onPostCommitFiberRoot($n, r);
                } catch  {}
                return !0;
            } finally{
                G.p = a, z.T = n, jd(e, t);
            }
        }
        function Ld(e, t, l) {
            t = Tt(l, t), t = ec(e.stateNode, t, 2), e = yl(e, t, 2), e !== null && (Wn(e, 2), Lt(e));
        }
        function Ne(e, t, l) {
            if (e.tag === 3) Ld(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Ld(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Nl === null || !Nl.has(n))) {
                        e = Tt(l, e), l = Ys(2), n = yl(t, l, 2), n !== null && (Vs(l, n, t, e), Wn(n, 2), Lt(n));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Ac(e, t, l) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new L1;
                var a = new Set;
                n.set(t, a);
            } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
            a.has(l) || (yc = !0, a.add(l), e = V1.bind(null, e, t, l), t.then(e, e));
        }
        function V1(e, t, l) {
            var n = e.pingCache;
            n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ae === e && (he & l) === l && (Ue === 4 || Ue === 3 && (he & 62914560) === he && 300 > Pt() - bc ? (be & 2) === 0 && jn(e, 0) : vc |= l, Pn === he && (Pn = 0)), Lt(e);
        }
        function Qd(e, t) {
            t === 0 && (t = qo()), e = En(e, t), e !== null && (Wn(e, t), Lt(e));
        }
        function X1(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), Qd(e, l);
        }
        function Z1(e, t) {
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
                    throw Error(c(314));
            }
            n !== null && n.delete(t), Qd(e, l);
        }
        function $1(e, t) {
            return ji(e, t);
        }
        var ni = null, Ln = null, Oc = !1, ai = !1, xc = !1, tn = 0;
        function Lt(e) {
            e !== Ln && e.next === null && (Ln === null ? ni = Ln = e : Ln = Ln.next = e), ai = !0, Oc || (Oc = !0, W1());
        }
        function Ua(e, t) {
            if (!xc && ai) {
                xc = !0;
                do for(var l = !1, n = ni; n !== null;){
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var r = 0;
                        else {
                            var d = n.suspendedLanes, y = n.pingedLanes;
                            r = (1 << 31 - pt(42 | e) + 1) - 1, r &= a & ~(d & ~y), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
                        }
                        r !== 0 && (l = !0, Vd(n, r));
                    } else r = he, r = fu(n, n === Ae ? r : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (r & 3) === 0 || Jn(n, r) || (l = !0, Vd(n, r));
                    n = n.next;
                }
                while (l);
                xc = !1;
            }
        }
        function J1() {
            Kd();
        }
        function Kd() {
            ai = Oc = !1;
            var e = 0;
            tn !== 0 && (u0() && (e = tn), tn = 0);
            for(var t = Pt(), l = null, n = ni; n !== null;){
                var a = n.next, r = Gd(n, t);
                r === 0 ? (n.next = null, l === null ? ni = a : l.next = a, a === null && (Ln = l)) : (l = n, (e !== 0 || (r & 3) !== 0) && (ai = !0)), n = a;
            }
            Ua(e);
        }
        function Gd(e, t) {
            for(var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r;){
                var d = 31 - pt(r), y = 1 << d, g = a[d];
                g === -1 ? ((y & l) === 0 || (y & n) !== 0) && (a[d] = _m(y, t)) : g <= t && (e.expiredLanes |= y), r &= ~y;
            }
            if (t = Ae, l = he, l = fu(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (Se === 2 || Se === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && Hi(n), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || Jn(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(n !== null && Hi(n), Ki(l)){
                    case 2:
                    case 8:
                        l = Uo;
                        break;
                    case 32:
                        l = ru;
                        break;
                    case 268435456:
                        l = zo;
                        break;
                    default:
                        l = ru;
                }
                return n = Yd.bind(null, e), l = ji(l, n), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return n !== null && n !== null && Hi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Yd(e, t) {
            if (Je !== 0 && Je !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (li() && e.callbackNode !== l) return null;
            var n = he;
            return n = fu(e, e === Ae ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (Od(e, n, t), Gd(e, Pt()), e.callbackNode != null && e.callbackNode === l ? Yd.bind(null, e) : null);
        }
        function Vd(e, t) {
            if (li()) return null;
            Od(e, t, !0);
        }
        function W1() {
            r0(function() {
                (be & 6) !== 0 ? ji(wo, J1) : Kd();
            });
        }
        function Cc() {
            return tn === 0 && (tn = Po()), tn;
        }
        function Xd(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mu("" + e);
        }
        function Zd(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function F1(e, t, l, n, a) {
            if (t === "submit" && l && l.stateNode === a) {
                var r = Xd((a[it] || null).action), d = n.submitter;
                d && (t = (t = d[it] || null) ? Xd(t.formAction) : d.getAttribute("formAction"), t !== null && (r = t, d = null));
                var y = new bu("action", "action", null, n, a);
                e.push({
                    event: y,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (tn !== 0) {
                                        var g = d ? Zd(a, d) : new FormData(a);
                                        $r(l, {
                                            pending: !0,
                                            data: g,
                                            method: a.method,
                                            action: r
                                        }, null, g);
                                    }
                                } else typeof r == "function" && (y.preventDefault(), g = d ? Zd(a, d) : new FormData(a), $r(l, {
                                    pending: !0,
                                    data: g,
                                    method: a.method,
                                    action: r
                                }, r, g));
                            },
                            currentTarget: a
                        }
                    ]
                });
            }
        }
        for(var Mc = 0; Mc < pr.length; Mc++){
            var Dc = pr[Mc], I1 = Dc.toLowerCase(), e0 = Dc[0].toUpperCase() + Dc.slice(1);
            Bt(I1, "on" + e0);
        }
        Bt(Of, "onAnimationEnd"), Bt(xf, "onAnimationIteration"), Bt(Cf, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(v1, "onTransitionRun"), Bt(g1, "onTransitionStart"), Bt(b1, "onTransitionCancel"), Bt(Mf, "onTransitionEnd"), sn("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), sn("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), sn("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), sn("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), jl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), jl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), jl("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), jl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), jl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), jl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), t0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(za));
        function $d(e, t) {
            t = (t & 4) !== 0;
            for(var l = 0; l < e.length; l++){
                var n = e[l], a = n.event;
                n = n.listeners;
                e: {
                    var r = void 0;
                    if (t) for(var d = n.length - 1; 0 <= d; d--){
                        var y = n[d], g = y.instance, x = y.currentTarget;
                        if (y = y.listener, g !== r && a.isPropagationStopped()) break e;
                        r = y, a.currentTarget = x;
                        try {
                            r(a);
                        } catch (P) {
                            Yu(P);
                        }
                        a.currentTarget = null, r = g;
                    }
                    else for(d = 0; d < n.length; d++){
                        if (y = n[d], g = y.instance, x = y.currentTarget, y = y.listener, g !== r && a.isPropagationStopped()) break e;
                        r = y, a.currentTarget = x;
                        try {
                            r(a);
                        } catch (P) {
                            Yu(P);
                        }
                        a.currentTarget = null, r = g;
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
        var ui = "_reactListening" + Math.random().toString(36).slice(2);
        function wc(e) {
            if (!e[ui]) {
                e[ui] = !0, Qo.forEach(function(l) {
                    l !== "selectionchange" && (t0.has(l) || Bc(l, !1, e), Bc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[ui] || (t[ui] = !0, Bc("selectionchange", !1, t));
            }
        }
        function Jd(e, t, l, n) {
            switch(Sh(t)){
                case 2:
                    var a = x0;
                    break;
                case 8:
                    a = C0;
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
        function Uc(e, t, l, n, a) {
            var r = n;
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
                        if (d = cn(y), d === null) return;
                        if (g = d.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                            n = r = d;
                            continue e;
                        }
                        y = y.parentNode;
                    }
                }
                n = n.return;
            }
            lf(function() {
                var x = r, P = Ii(l), j = [];
                e: {
                    var M = Df.get(e);
                    if (M !== void 0) {
                        var D = bu, ae = e;
                        switch(e){
                            case "keypress":
                                if (vu(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                D = $m;
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
                                D = uf;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                D = qm;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                D = Fm;
                                break;
                            case Of:
                            case xf:
                            case Cf:
                                D = Hm;
                                break;
                            case Mf:
                                D = e1;
                                break;
                            case "scroll":
                            case "scrollend":
                                D = zm;
                                break;
                            case "wheel":
                                D = l1;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                D = Qm;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                D = cf;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                D = a1;
                        }
                        var ee = (t & 4) !== 0, Re = !ee && (e === "scroll" || e === "scrollend"), N = ee ? M !== null ? M + "Capture" : null : M;
                        ee = [];
                        for(var _ = x, O; _ !== null;){
                            var k = _;
                            if (O = k.stateNode, k = k.tag, k !== 5 && k !== 26 && k !== 27 || O === null || N === null || (k = ea(_, N), k != null && ee.push(Pa(_, k, O))), Re) break;
                            _ = _.return;
                        }
                        0 < ee.length && (M = new D(M, ae, null, l, P), j.push({
                            event: M,
                            listeners: ee
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (M = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", M && l !== Fi && (ae = l.relatedTarget || l.fromElement) && (cn(ae) || ae[rn])) break e;
                        if ((D || M) && (M = P.window === P ? P : (M = P.ownerDocument) ? M.defaultView || M.parentWindow : window, D ? (ae = l.relatedTarget || l.toElement, D = x, ae = ae ? cn(ae) : null, ae !== null && (Re = s(ae), ee = ae.tag, ae !== Re || ee !== 5 && ee !== 27 && ee !== 6) && (ae = null)) : (D = null, ae = x), D !== ae)) {
                            if (ee = uf, k = "onMouseLeave", N = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (ee = cf, k = "onPointerLeave", N = "onPointerEnter", _ = "pointer"), Re = D == null ? M : In(D), O = ae == null ? M : In(ae), M = new ee(k, _ + "leave", D, l, P), M.target = Re, M.relatedTarget = O, k = null, cn(P) === x && (ee = new ee(N, _ + "enter", ae, l, P), ee.target = O, ee.relatedTarget = Re, k = ee), Re = k, D && ae) t: {
                                for(ee = D, N = ae, _ = 0, O = ee; O; O = Qn(O))_++;
                                for(O = 0, k = N; k; k = Qn(k))O++;
                                for(; 0 < _ - O;)ee = Qn(ee), _--;
                                for(; 0 < O - _;)N = Qn(N), O--;
                                for(; _--;){
                                    if (ee === N || N !== null && ee === N.alternate) break t;
                                    ee = Qn(ee), N = Qn(N);
                                }
                                ee = null;
                            }
                            else ee = null;
                            D !== null && Wd(j, M, D, ee, !1), ae !== null && Re !== null && Wd(j, Re, ae, ee, !0);
                        }
                    }
                    e: {
                        if (M = x ? In(x) : window, D = M.nodeName && M.nodeName.toLowerCase(), D === "select" || D === "input" && M.type === "file") var $ = yf;
                        else if (pf(M)) if (vf) $ = p1;
                        else {
                            $ = d1;
                            var fe = s1;
                        }
                        else D = M.nodeName, !D || D.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? x && Wi(x.elementType) && ($ = yf) : $ = h1;
                        if ($ && ($ = $(e, x))) {
                            mf(j, $, l, P);
                            break e;
                        }
                        fe && fe(e, M, x), e === "focusout" && x && M.type === "number" && x.memoizedProps.value != null && Ji(M, "number", M.value);
                    }
                    switch(fe = x ? In(x) : window, e){
                        case "focusin":
                            (pf(fe) || fe.contentEditable === "true") && (gn = fe, sr = x, ca = null);
                            break;
                        case "focusout":
                            ca = sr = gn = null;
                            break;
                        case "mousedown":
                            dr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            dr = !1, Nf(j, l, P);
                            break;
                        case "selectionchange":
                            if (y1) break;
                        case "keydown":
                        case "keyup":
                            Nf(j, l, P);
                    }
                    var W;
                    if (rr) e: {
                        switch(e){
                            case "compositionstart":
                                var le = "onCompositionStart";
                                break e;
                            case "compositionend":
                                le = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                le = "onCompositionUpdate";
                                break e;
                        }
                        le = void 0;
                    }
                    else vn ? df(e, l) && (le = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (le = "onCompositionStart");
                    le && (of && l.locale !== "ko" && (vn || le !== "onCompositionStart" ? le === "onCompositionEnd" && vn && (W = nf()) : (dl = P, lr = "value" in dl ? dl.value : dl.textContent, vn = !0)), fe = ii(x, le), 0 < fe.length && (le = new rf(le, e, null, l, P), j.push({
                        event: le,
                        listeners: fe
                    }), W ? le.data = W : (W = hf(l), W !== null && (le.data = W)))), (W = i1 ? r1(e, l) : c1(e, l)) && (le = ii(x, "onBeforeInput"), 0 < le.length && (fe = new rf("onBeforeInput", "beforeinput", null, l, P), j.push({
                        event: fe,
                        listeners: le
                    }), fe.data = W)), F1(j, e, x, l, P);
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
        function ii(e, t) {
            for(var l = t + "Capture", n = []; e !== null;){
                var a = e, r = a.stateNode;
                if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || r === null || (a = ea(e, l), a != null && n.unshift(Pa(e, a, r)), a = ea(e, t), a != null && n.push(Pa(e, a, r))), e.tag === 3) return n;
                e = e.return;
            }
            return [];
        }
        function Qn(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function Wd(e, t, l, n, a) {
            for(var r = t._reactName, d = []; l !== null && l !== n;){
                var y = l, g = y.alternate, x = y.stateNode;
                if (y = y.tag, g !== null && g === n) break;
                y !== 5 && y !== 26 && y !== 27 || x === null || (g = x, a ? (x = ea(l, r), x != null && d.unshift(Pa(l, x, g))) : a || (x = ea(l, r), x != null && d.push(Pa(l, x, g)))), l = l.return;
            }
            d.length !== 0 && e.push({
                event: t,
                listeners: d
            });
        }
        var l0 = /\r\n?/g, n0 = /\u0000|\uFFFD/g;
        function Fd(e) {
            return (typeof e == "string" ? e : "" + e).replace(l0, `
`).replace(n0, "");
        }
        function Id(e, t) {
            return t = Fd(t), Fd(e) === t;
        }
        function ri() {}
        function _e(e, t, l, n, a, r) {
            switch(l){
                case "children":
                    typeof n == "string" ? t === "body" || t === "textarea" && n === "" || pn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && pn(e, "" + n);
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
                    ef(e, n, r);
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
                    } else typeof r == "function" && (l === "formAction" ? (t !== "input" && _e(e, t, "name", a.name, a, null), _e(e, t, "formEncType", a.formEncType, a, null), _e(e, t, "formMethod", a.formMethod, a, null), _e(e, t, "formTarget", a.formTarget, a, null)) : (_e(e, t, "encType", a.encType, a, null), _e(e, t, "method", a.method, a, null), _e(e, t, "target", a.target, a, null)));
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
                        if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
                        if (l = n.__html, l != null) {
                            if (a.children != null) throw Error(c(60));
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
                    Gt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
                    break;
                case "xlinkArcrole":
                    Gt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
                    break;
                case "xlinkRole":
                    Gt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
                    break;
                case "xlinkShow":
                    Gt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
                    break;
                case "xlinkTitle":
                    Gt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
                    break;
                case "xlinkType":
                    Gt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
                    break;
                case "xmlBase":
                    Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
                    break;
                case "xmlLang":
                    Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
                    break;
                case "xmlSpace":
                    Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
                    break;
                case "is":
                    su(e, "is", n);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = wm.get(l) || l, su(e, l, n));
            }
        }
        function zc(e, t, l, n, a, r) {
            switch(l){
                case "style":
                    ef(e, n, r);
                    break;
                case "dangerouslySetInnerHTML":
                    if (n != null) {
                        if (typeof n != "object" || !("__html" in n)) throw Error(c(61));
                        if (l = n.__html, l != null) {
                            if (a.children != null) throw Error(c(60));
                            e.innerHTML = l;
                        }
                    }
                    break;
                case "children":
                    typeof n == "string" ? pn(e, n) : (typeof n == "number" || typeof n == "bigint") && pn(e, "" + n);
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
                    if (!Ko.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), r = e[it] || null, r = r != null ? r[l] : null, typeof r == "function" && e.removeEventListener(t, r, a), typeof n == "function")) {
                            typeof r != "function" && r !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
                            break e;
                        }
                        l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : su(e, l, n);
                    }
            }
        }
        function We(e, t, l) {
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
                                throw Error(c(137, t));
                            default:
                                _e(e, t, r, d, l, null);
                        }
                    }
                    a && _e(e, t, "srcSet", l.srcSet, l, null), n && _e(e, t, "src", l.src, l, null);
                    return;
                case "input":
                    de("invalid", e);
                    var y = r = d = a = null, g = null, x = null;
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
                                g = P;
                                break;
                            case "defaultChecked":
                                x = P;
                                break;
                            case "value":
                                r = P;
                                break;
                            case "defaultValue":
                                y = P;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (P != null) throw Error(c(137, t));
                                break;
                            default:
                                _e(e, t, n, P, l, null);
                        }
                    }
                    Jo(e, r, y, g, x, d, a, !1), hu(e);
                    return;
                case "select":
                    de("invalid", e), n = d = r = null;
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
                            _e(e, t, a, y, l, null);
                    }
                    t = r, l = d, e.multiple = !!n, t != null ? hn(e, !!n, t, !1) : l != null && hn(e, !!n, l, !0);
                    return;
                case "textarea":
                    de("invalid", e), r = a = n = null;
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
                            if (y != null) throw Error(c(91));
                            break;
                        default:
                            _e(e, t, d, y, l, null);
                    }
                    Fo(e, n, a, r), hu(e);
                    return;
                case "option":
                    for(g in l)if (l.hasOwnProperty(g) && (n = l[g], n != null)) switch(g){
                        case "selected":
                            e.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default:
                            _e(e, t, g, n, l, null);
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
                    for(x in l)if (l.hasOwnProperty(x) && (n = l[x], n != null)) switch(x){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(c(137, t));
                        default:
                            _e(e, t, x, n, l, null);
                    }
                    return;
                default:
                    if (Wi(t)) {
                        for(P in l)l.hasOwnProperty(P) && (n = l[P], n !== void 0 && zc(e, t, P, n, l, void 0));
                        return;
                    }
            }
            for(y in l)l.hasOwnProperty(y) && (n = l[y], n != null && _e(e, t, y, n, l, null));
        }
        function a0(e, t, l, n) {
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
                    var a = null, r = null, d = null, y = null, g = null, x = null, P = null;
                    for(D in l){
                        var j = l[D];
                        if (l.hasOwnProperty(D) && j != null) switch(D){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                g = j;
                            default:
                                n.hasOwnProperty(D) || _e(e, t, D, null, n, j);
                        }
                    }
                    for(var M in n){
                        var D = n[M];
                        if (j = l[M], n.hasOwnProperty(M) && (D != null || j != null)) switch(M){
                            case "type":
                                r = D;
                                break;
                            case "name":
                                a = D;
                                break;
                            case "checked":
                                x = D;
                                break;
                            case "defaultChecked":
                                P = D;
                                break;
                            case "value":
                                d = D;
                                break;
                            case "defaultValue":
                                y = D;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (D != null) throw Error(c(137, t));
                                break;
                            default:
                                D !== j && _e(e, t, M, D, n, j);
                        }
                    }
                    $i(e, d, y, g, x, P, r, a);
                    return;
                case "select":
                    D = d = y = M = null;
                    for(r in l)if (g = l[r], l.hasOwnProperty(r) && g != null) switch(r){
                        case "value":
                            break;
                        case "multiple":
                            D = g;
                        default:
                            n.hasOwnProperty(r) || _e(e, t, r, null, n, g);
                    }
                    for(a in n)if (r = n[a], g = l[a], n.hasOwnProperty(a) && (r != null || g != null)) switch(a){
                        case "value":
                            M = r;
                            break;
                        case "defaultValue":
                            y = r;
                            break;
                        case "multiple":
                            d = r;
                        default:
                            r !== g && _e(e, t, a, r, n, g);
                    }
                    t = y, l = d, n = D, M != null ? hn(e, !!l, M, !1) : !!n != !!l && (t != null ? hn(e, !!l, t, !0) : hn(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    D = M = null;
                    for(y in l)if (a = l[y], l.hasOwnProperty(y) && a != null && !n.hasOwnProperty(y)) switch(y){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            _e(e, t, y, null, n, a);
                    }
                    for(d in n)if (a = n[d], r = l[d], n.hasOwnProperty(d) && (a != null || r != null)) switch(d){
                        case "value":
                            M = a;
                            break;
                        case "defaultValue":
                            D = a;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (a != null) throw Error(c(91));
                            break;
                        default:
                            a !== r && _e(e, t, d, a, n, r);
                    }
                    Wo(e, M, D);
                    return;
                case "option":
                    for(var ae in l)if (M = l[ae], l.hasOwnProperty(ae) && M != null && !n.hasOwnProperty(ae)) switch(ae){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            _e(e, t, ae, null, n, M);
                    }
                    for(g in n)if (M = n[g], D = l[g], n.hasOwnProperty(g) && M !== D && (M != null || D != null)) switch(g){
                        case "selected":
                            e.selected = M && typeof M != "function" && typeof M != "symbol";
                            break;
                        default:
                            _e(e, t, g, M, n, D);
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
                    for(var ee in l)M = l[ee], l.hasOwnProperty(ee) && M != null && !n.hasOwnProperty(ee) && _e(e, t, ee, null, n, M);
                    for(x in n)if (M = n[x], D = l[x], n.hasOwnProperty(x) && M !== D && (M != null || D != null)) switch(x){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (M != null) throw Error(c(137, t));
                            break;
                        default:
                            _e(e, t, x, M, n, D);
                    }
                    return;
                default:
                    if (Wi(t)) {
                        for(var Re in l)M = l[Re], l.hasOwnProperty(Re) && M !== void 0 && !n.hasOwnProperty(Re) && zc(e, t, Re, void 0, n, M);
                        for(P in n)M = n[P], D = l[P], !n.hasOwnProperty(P) || M === D || M === void 0 && D === void 0 || zc(e, t, P, M, n, D);
                        return;
                    }
            }
            for(var N in l)M = l[N], l.hasOwnProperty(N) && M != null && !n.hasOwnProperty(N) && _e(e, t, N, null, n, M);
            for(j in n)M = n[j], D = l[j], !n.hasOwnProperty(j) || M === D || M == null && D == null || _e(e, t, j, M, n, D);
        }
        var Pc = null, qc = null;
        function ci(e) {
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
        function kc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var jc = null;
        function u0() {
            var e = window.event;
            return e && e.type === "popstate" ? e === jc ? !1 : (jc = e, !0) : (jc = null, !1);
        }
        var lh = typeof setTimeout == "function" ? setTimeout : void 0, i0 = typeof clearTimeout == "function" ? clearTimeout : void 0, nh = typeof Promise == "function" ? Promise : void 0, r0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof nh < "u" ? function(e) {
            return nh.resolve(null).then(e).catch(c0);
        } : lh;
        function c0(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function xl(e) {
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
                            var y = d.nextSibling, g = d.nodeName;
                            d[Fn] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && d.rel.toLowerCase() === "stylesheet" || l.removeChild(d), d = y;
                        }
                    }
                    if (a === 0) {
                        e.removeChild(r), Ya(t);
                        return;
                    }
                    a--;
                } else l === "$" || l === "$?" || l === "$!" ? a++ : n = l.charCodeAt(0) - 48;
                else n = 0;
                l = r;
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
                        Hc(l), Yi(l);
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
        function o0(e, t, l, n) {
            for(; e.nodeType === 1;){
                var a = l;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (n) {
                    if (!e[Fn]) switch(t){
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
                if (e = Ut(e.nextSibling), e === null) break;
            }
            return null;
        }
        function f0(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Ut(e.nextSibling), e === null)) return null;
            return e;
        }
        function Lc(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function s0(e, t) {
            var l = e.ownerDocument;
            if (e.data !== "$?" || l.readyState === "complete") t();
            else {
                var n = function() {
                    t(), l.removeEventListener("DOMContentLoaded", n);
                };
                l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
            }
        }
        function Ut(e) {
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
            switch(t = ci(l), e){
                case "html":
                    if (e = t.documentElement, !e) throw Error(c(452));
                    return e;
                case "head":
                    if (e = t.head, !e) throw Error(c(453));
                    return e;
                case "body":
                    if (e = t.body, !e) throw Error(c(454));
                    return e;
                default:
                    throw Error(c(451));
            }
        }
        function qa(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            Yi(e);
        }
        var Mt = new Map, rh = new Set;
        function oi(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var al = G.d;
        G.d = {
            f: d0,
            r: h0,
            D: p0,
            C: m0,
            L: y0,
            m: v0,
            X: b0,
            S: g0,
            M: S0
        };
        function d0() {
            var e = al.f(), t = ei();
            return e || t;
        }
        function h0(e) {
            var t = on(e);
            t !== null && t.tag === 5 && t.type === "form" ? Os(t) : al.r(e);
        }
        var Kn = typeof document > "u" ? null : document;
        function ch(e, t, l) {
            var n = Kn;
            if (n && typeof t == "string" && t) {
                var a = Rt(t);
                a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), rh.has(a) || (rh.add(a), e = {
                    rel: e,
                    crossOrigin: l,
                    href: t
                }, n.querySelector(a) === null && (t = n.createElement("link"), We(t, "link", e), Ke(t), n.head.appendChild(t)));
            }
        }
        function p0(e) {
            al.D(e), ch("dns-prefetch", e, null);
        }
        function m0(e, t) {
            al.C(e, t), ch("preconnect", e, t);
        }
        function y0(e, t, l) {
            al.L(e, t, l);
            var n = Kn;
            if (n && e && t) {
                var a = 'link[rel="preload"][as="' + Rt(t) + '"]';
                t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Rt(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Rt(l.imageSizes) + '"]')) : a += '[href="' + Rt(e) + '"]';
                var r = a;
                switch(t){
                    case "style":
                        r = Gn(e);
                        break;
                    case "script":
                        r = Yn(e);
                }
                Mt.has(r) || (e = b({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), Mt.set(r, e), n.querySelector(a) !== null || t === "style" && n.querySelector(ka(r)) || t === "script" && n.querySelector(ja(r)) || (t = n.createElement("link"), We(t, "link", e), Ke(t), n.head.appendChild(t)));
            }
        }
        function v0(e, t) {
            al.m(e, t);
            var l = Kn;
            if (l && e) {
                var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Rt(n) + '"][href="' + Rt(e) + '"]', r = a;
                switch(n){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        r = Yn(e);
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
                            if (l.querySelector(ja(r))) return;
                    }
                    n = l.createElement("link"), We(n, "link", e), Ke(n), l.head.appendChild(n);
                }
            }
        }
        function g0(e, t, l) {
            al.S(e, t, l);
            var n = Kn;
            if (n && e) {
                var a = fn(n).hoistableStyles, r = Gn(e);
                t = t || "default";
                var d = a.get(r);
                if (!d) {
                    var y = {
                        loading: 0,
                        preload: null
                    };
                    if (d = n.querySelector(ka(r))) y.loading = 5;
                    else {
                        e = b({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = Mt.get(r)) && Kc(e, l);
                        var g = d = n.createElement("link");
                        Ke(g), We(g, "link", e), g._p = new Promise(function(x, P) {
                            g.onload = x, g.onerror = P;
                        }), g.addEventListener("load", function() {
                            y.loading |= 1;
                        }), g.addEventListener("error", function() {
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
        function b0(e, t) {
            al.X(e, t);
            var l = Kn;
            if (l && e) {
                var n = fn(l).hoistableScripts, a = Yn(e), r = n.get(a);
                r || (r = l.querySelector(ja(a)), r || (e = b({
                    src: e,
                    async: !0
                }, t), (t = Mt.get(a)) && Gc(e, t), r = l.createElement("script"), Ke(r), We(r, "link", e), l.head.appendChild(r)), r = {
                    type: "script",
                    instance: r,
                    count: 1,
                    state: null
                }, n.set(a, r));
            }
        }
        function S0(e, t) {
            al.M(e, t);
            var l = Kn;
            if (l && e) {
                var n = fn(l).hoistableScripts, a = Yn(e), r = n.get(a);
                r || (r = l.querySelector(ja(a)), r || (e = b({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Mt.get(a)) && Gc(e, t), r = l.createElement("script"), Ke(r), We(r, "link", e), l.head.appendChild(r)), r = {
                    type: "script",
                    instance: r,
                    count: 1,
                    state: null
                }, n.set(a, r));
            }
        }
        function oh(e, t, l, n) {
            var a = (a = ie.current) ? oi(a) : null;
            if (!a) throw Error(c(446));
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
                        }, r.set(e, d), (r = a.querySelector(ka(e))) && !r._p && (d.instance = r, d.state.loading = 5), Mt.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, Mt.set(e, l), r || E0(a, e, l, d.state))), t && n === null) throw Error(c(528, ""));
                        return d;
                    }
                    if (t && n !== null) throw Error(c(529, ""));
                    return null;
                case "script":
                    return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Yn(l), l = fn(a).hoistableScripts, n = l.get(t), n || (n = {
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
                    throw Error(c(444, e));
            }
        }
        function Gn(e) {
            return 'href="' + Rt(e) + '"';
        }
        function ka(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function fh(e) {
            return b({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function E0(e, t, l, n) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
                return n.loading |= 1;
            }), t.addEventListener("error", function() {
                return n.loading |= 2;
            }), We(t, "link", l), Ke(t), e.head.appendChild(t));
        }
        function Yn(e) {
            return '[src="' + Rt(e) + '"]';
        }
        function ja(e) {
            return "script[async]" + e;
        }
        function sh(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var n = e.querySelector('style[data-href~="' + Rt(l.href) + '"]');
                    if (n) return t.instance = n, Ke(n), n;
                    var a = b({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return n = (e.ownerDocument || e).createElement("style"), Ke(n), We(n, "style", a), fi(n, l.precedence, e), t.instance = n;
                case "stylesheet":
                    a = Gn(l.href);
                    var r = e.querySelector(ka(a));
                    if (r) return t.state.loading |= 4, t.instance = r, Ke(r), r;
                    n = fh(l), (a = Mt.get(a)) && Kc(n, a), r = (e.ownerDocument || e).createElement("link"), Ke(r);
                    var d = r;
                    return d._p = new Promise(function(y, g) {
                        d.onload = y, d.onerror = g;
                    }), We(r, "link", n), t.state.loading |= 4, fi(r, l.precedence, e), t.instance = r;
                case "script":
                    return r = Yn(l.src), (a = e.querySelector(ja(r))) ? (t.instance = a, Ke(a), a) : (n = l, (a = Mt.get(r)) && (n = b({}, l), Gc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ke(a), We(a, "link", n), e.head.appendChild(a), t.instance = a);
                case "void":
                    return null;
                default:
                    throw Error(c(443, t.type));
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
        function Gc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var si = null;
        function dh(e, t, l) {
            if (si === null) {
                var n = new Map, a = si = new Map;
                a.set(l, n);
            } else a = si, n = a.get(l), n || (n = new Map, a.set(l, n));
            if (n.has(e)) return n;
            for(n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++){
                var r = l[a];
                if (!(r[Fn] || r[tt] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
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
        function _0(e, t, l) {
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
        function R0() {}
        function T0(e, t, l) {
            if (Ha === null) throw Error(c(475));
            var n = Ha;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var a = Gn(l.href), r = e.querySelector(ka(a));
                    if (r) {
                        e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = di.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = r, Ke(r);
                        return;
                    }
                    r = e.ownerDocument || e, l = fh(l), (a = Mt.get(a)) && Kc(l, a), r = r.createElement("link"), Ke(r);
                    var d = r;
                    d._p = new Promise(function(y, g) {
                        d.onload = y, d.onerror = g;
                    }), We(r, "link", l), t.instance = r;
                }
                n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = di.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function N0() {
            if (Ha === null) throw Error(c(475));
            var e = Ha;
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
        function di() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Yc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var hi = null;
        function Yc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, hi = new Map, t.forEach(A0, e), hi = null, di.call(e));
        }
        function A0(e, t) {
            if (!(t.state.loading & 4)) {
                var l = hi.get(e);
                if (l) var n = l.get(null);
                else {
                    l = new Map, hi.set(e, l);
                    for(var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < a.length; r++){
                        var d = a[r];
                        (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (l.set(d.dataset.precedence, d), n = d);
                    }
                    n && l.set(null, n);
                }
                a = t.instance, d = a.getAttribute("data-precedence"), r = l.get(d) || n, r === n && l.set(null, a), l.set(d, a), this.count++, n = di.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), r ? r.parentNode.insertBefore(a, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
            }
        }
        var La = {
            $$typeof: L,
            Provider: null,
            Consumer: null,
            _currentValue: ne,
            _currentValue2: ne,
            _threadCount: 0
        };
        function O0(e, t, l, n, a, r, d, y) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Li(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Li(0), this.hiddenUpdates = Li(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = r, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = new Map;
        }
        function mh(e, t, l, n, a, r, d, y, g, x, P, j) {
            return e = new O0(e, t, l, d, y, g, x, j), t = 1, r === !0 && (t |= 24), r = yt(3, null, null, t), e.current = r, r.stateNode = e, t = Ar(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: t
            }, Mr(r), e;
        }
        function yh(e) {
            return e ? (e = _n, e) : _n;
        }
        function vh(e, t, l, n, a, r) {
            a = yh(a), n.context === null ? n.context = a : n.pendingContext = a, n = ml(t), n.payload = {
                element: l
            }, r = r === void 0 ? null : r, r !== null && (n.callback = r), l = yl(e, n, t), l !== null && (Et(l, e, t), va(l, e, t));
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
                var t = En(e, 67108864);
                t !== null && Et(t, e, 67108864), Vc(e, 67108864);
            }
        }
        var pi = !0;
        function x0(e, t, l, n) {
            var a = z.T;
            z.T = null;
            var r = G.p;
            try {
                G.p = 2, Xc(e, t, l, n);
            } finally{
                G.p = r, z.T = a;
            }
        }
        function C0(e, t, l, n) {
            var a = z.T;
            z.T = null;
            var r = G.p;
            try {
                G.p = 8, Xc(e, t, l, n);
            } finally{
                G.p = r, z.T = a;
            }
        }
        function Xc(e, t, l, n) {
            if (pi) {
                var a = Zc(n);
                if (a === null) Uc(e, t, n, mi, l), Eh(e, n);
                else if (D0(a, e, t, l, n)) n.stopPropagation();
                else if (Eh(e, n), t & 4 && -1 < M0.indexOf(e)) {
                    for(; a !== null;){
                        var r = on(a);
                        if (r !== null) switch(r.tag){
                            case 3:
                                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                                    var d = kl(r.pendingLanes);
                                    if (d !== 0) {
                                        var y = r;
                                        for(y.pendingLanes |= 2, y.entangledLanes |= 2; d;){
                                            var g = 1 << 31 - pt(d);
                                            y.entanglements[1] |= g, d &= ~g;
                                        }
                                        Lt(r), (be & 6) === 0 && (Fu = Pt() + 500, Ua(0));
                                    }
                                }
                                break;
                            case 13:
                                y = En(r, 2), y !== null && Et(y, r, 2), ei(), Vc(r, 2);
                        }
                        if (r = Zc(n), r === null && Uc(e, t, n, mi, l), r === a) break;
                        a = r;
                    }
                    a !== null && n.stopPropagation();
                } else Uc(e, t, n, null, l);
            }
        }
        function Zc(e) {
            return e = Ii(e), $c(e);
        }
        var mi = null;
        function $c(e) {
            if (mi = null, e = cn(e), e !== null) {
                var t = s(e);
                if (t === null) e = null;
                else {
                    var l = t.tag;
                    if (l === 13) {
                        if (e = h(t), e !== null) return e;
                        e = null;
                    } else if (l === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null;
                    } else t !== e && (e = null);
                }
            }
            return mi = e, null;
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
                    switch(mm()){
                        case wo:
                            return 2;
                        case Uo:
                            return 8;
                        case ru:
                        case ym:
                            return 32;
                        case zo:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Jc = !1, Cl = null, Ml = null, Dl = null, Qa = new Map, Ka = new Map, Bl = [], M0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Eh(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    Cl = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Ml = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Dl = null;
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
        function Ga(e, t, l, n, a, r) {
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
        function D0(e, t, l, n, a) {
            switch(t){
                case "focusin":
                    return Cl = Ga(Cl, e, t, l, n, a), !0;
                case "dragenter":
                    return Ml = Ga(Ml, e, t, l, n, a), !0;
                case "mouseover":
                    return Dl = Ga(Dl, e, t, l, n, a), !0;
                case "pointerover":
                    var r = a.pointerId;
                    return Qa.set(r, Ga(Qa.get(r) || null, e, t, l, n, a)), !0;
                case "gotpointercapture":
                    return r = a.pointerId, Ka.set(r, Ga(Ka.get(r) || null, e, t, l, n, a)), !0;
            }
            return !1;
        }
        function _h(e) {
            var t = cn(e.target);
            if (t !== null) {
                var l = s(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = h(l), t !== null) {
                            e.blockedOn = t, Tm(e.priority, function() {
                                if (l.tag === 13) {
                                    var n = St();
                                    n = Qi(n);
                                    var a = En(l, n);
                                    a !== null && Et(a, l, n), Vc(l, n);
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
                var l = Zc(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var n = new l.constructor(l.type, l);
                    Fi = n, l.target.dispatchEvent(n), Fi = null;
                } else return t = on(l), t !== null && bh(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function Rh(e, t, l) {
            yi(e) && l.delete(t);
        }
        function B0() {
            Jc = !1, Cl !== null && yi(Cl) && (Cl = null), Ml !== null && yi(Ml) && (Ml = null), Dl !== null && yi(Dl) && (Dl = null), Qa.forEach(Rh), Ka.forEach(Rh);
        }
        function vi(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Jc || (Jc = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, B0)));
        }
        var gi = null;
        function Th(e) {
            gi !== e && (gi = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
                gi === e && (gi = null);
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
        function Ya(e) {
            function t(g) {
                return vi(g, e);
            }
            Cl !== null && vi(Cl, e), Ml !== null && vi(Ml, e), Dl !== null && vi(Dl, e), Qa.forEach(t), Ka.forEach(t);
            for(var l = 0; l < Bl.length; l++){
                var n = Bl[l];
                n.blockedOn === e && (n.blockedOn = null);
            }
            for(; 0 < Bl.length && (l = Bl[0], l.blockedOn === null);)_h(l), l.blockedOn === null && Bl.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(n = 0; n < l.length; n += 3){
                var a = l[n], r = l[n + 1], d = a[it] || null;
                if (typeof r == "function") d || Th(l);
                else if (d) {
                    var y = null;
                    if (r && r.hasAttribute("formAction")) {
                        if (a = r, d = r[it] || null) y = d.formAction;
                        else if ($c(a) !== null) continue;
                    } else y = d.action;
                    typeof y == "function" ? l[n + 1] = y : (l.splice(n, 3), n -= 3), Th(l);
                }
            }
        }
        function Wc(e) {
            this._internalRoot = e;
        }
        bi.prototype.render = Wc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(c(409));
            var l = t.current, n = St();
            vh(l, n, e, t, null, null);
        }, bi.prototype.unmount = Wc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                vh(e.current, 2, null, e, null, null), ei(), t[rn] = null;
            }
        };
        function bi(e) {
            this._internalRoot = e;
        }
        bi.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Ho();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Bl.length && t !== 0 && t < Bl[l].priority; l++);
                Bl.splice(l, 0, e), l === 0 && _h(e);
            }
        };
        var Nh = i.version;
        if (Nh !== "19.1.0") throw Error(c(527, Nh, "19.1.0"));
        G.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
            return e = p(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var w0 = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: z,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Si.isDisabled && Si.supportsFiber) try {
                $n = Si.inject(w0), ht = Si;
            } catch  {}
        }
        return Xa.createRoot = function(e, t) {
            if (!f(e)) throw Error(c(299));
            var l = !1, n = "", a = Ls, r = Qs, d = Ks, y = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)), t = mh(e, 1, !1, null, null, l, n, a, r, d, y, null), e[rn] = t.current, wc(e), new Wc(t);
        }, Xa.hydrateRoot = function(e, t, l) {
            if (!f(e)) throw Error(c(299));
            var n = !1, a = "", r = Ls, d = Qs, y = Ks, g = null, x = null;
            return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (r = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (y = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks), l.formState !== void 0 && (x = l.formState)), t = mh(e, 1, !0, t, l ?? null, n, a, r, d, y, g, x), t.context = yh(null), l = t.current, n = St(), n = Qi(n), a = ml(n), a.callback = null, yl(l, a, n), l = n, t.current.lanes = l, Wn(t, l), Lt(t), e[rn] = t.current, wc(e), new bi(t);
        }, Xa.version = "19.1.0", Xa;
    }
    var zh;
    function K0() {
        if (zh) return eo.exports;
        zh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (i) {
                console.error(i);
            }
        }
        return u(), eo.exports = Q0(), eo.exports;
    }
    var G0 = K0(), ao = {
        exports: {}
    }, uo = {};
    var Ph;
    function Y0() {
        if (Ph) return uo;
        Ph = 1;
        var u = wi();
        function i(p, v) {
            return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v;
        }
        var o = typeof Object.is == "function" ? Object.is : i, c = u.useSyncExternalStore, f = u.useRef, s = u.useEffect, h = u.useMemo, m = u.useDebugValue;
        return uo.useSyncExternalStoreWithSelector = function(p, v, b, R, S) {
            var A = f(null);
            if (A.current === null) {
                var C = {
                    hasValue: !1,
                    value: null
                };
                A.current = C;
            } else C = A.current;
            A = h(function() {
                function q(K) {
                    if (!U) {
                        if (U = !0, H = K, K = R(K), S !== void 0 && C.hasValue) {
                            var F = C.value;
                            if (S(F, K)) return L = F;
                        }
                        return L = K;
                    }
                    if (F = L, o(H, K)) return F;
                    var Z = R(K);
                    return S !== void 0 && S(F, Z) ? (H = K, F) : (H = K, L = Z);
                }
                var U = !1, H, L, V = b === void 0 ? null : b;
                return [
                    function() {
                        return q(v());
                    },
                    V === null ? void 0 : function() {
                        return q(V());
                    }
                ];
            }, [
                v,
                b,
                R,
                S
            ]);
            var w = c(p, A[0], A[1]);
            return s(function() {
                C.hasValue = !0, C.value = w;
            }, [
                w
            ]), m(w), w;
        }, uo;
    }
    var qh;
    function V0() {
        return qh || (qh = 1, ao.exports = Y0()), ao.exports;
    }
    var X0 = V0();
    function Z0(u) {
        u();
    }
    function $0() {
        let u = null, i = null;
        return {
            clear () {
                u = null, i = null;
            },
            notify () {
                Z0(()=>{
                    let o = u;
                    for(; o;)o.callback(), o = o.next;
                });
            },
            get () {
                const o = [];
                let c = u;
                for(; c;)o.push(c), c = c.next;
                return o;
            },
            subscribe (o) {
                let c = !0;
                const f = i = {
                    callback: o,
                    next: null,
                    prev: i
                };
                return f.prev ? f.prev.next = f : u = f, function() {
                    !c || u === null || (c = !1, f.next ? f.next.prev = f.prev : i = f.prev, f.prev ? f.prev.next = f.next : u = f.next);
                };
            }
        };
    }
    var kh = {
        notify () {},
        get: ()=>[]
    };
    function J0(u, i) {
        let o, c = kh, f = 0, s = !1;
        function h(w) {
            b();
            const q = c.subscribe(w);
            let U = !1;
            return ()=>{
                U || (U = !0, q(), R());
            };
        }
        function m() {
            c.notify();
        }
        function p() {
            C.onStateChange && C.onStateChange();
        }
        function v() {
            return s;
        }
        function b() {
            f++, o || (o = u.subscribe(p), c = $0());
        }
        function R() {
            f--, o && f === 0 && (o(), o = void 0, c.clear(), c = kh);
        }
        function S() {
            s || (s = !0, b());
        }
        function A() {
            s && (s = !1, R());
        }
        const C = {
            addNestedSub: h,
            notifyNestedSubs: m,
            handleChangeWrapper: p,
            isSubscribed: v,
            trySubscribe: S,
            tryUnsubscribe: A,
            getListeners: ()=>c
        };
        return C;
    }
    var W0 = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", F0 = W0(), I0 = ()=>typeof navigator < "u" && navigator.product === "ReactNative", ey = I0(), ty = ()=>F0 || ey ? T.useLayoutEffect : T.useEffect, ly = ty(), ny = Symbol.for("react-redux-context"), ay = typeof globalThis < "u" ? globalThis : {};
    function uy() {
        if (!T.createContext) return {};
        const u = ay[ny] ??= new Map;
        let i = u.get(T.createContext);
        return i || (i = T.createContext(null), u.set(T.createContext, i)), i;
    }
    var ql = uy();
    function iy(u) {
        const { children: i, context: o, serverState: c, store: f } = u, s = T.useMemo(()=>{
            const p = J0(f);
            return {
                store: f,
                subscription: p,
                getServerState: c ? ()=>c : void 0
            };
        }, [
            f,
            c
        ]), h = T.useMemo(()=>f.getState(), [
            f
        ]);
        ly(()=>{
            const { subscription: p } = s;
            return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), h !== f.getState() && p.notifyNestedSubs(), ()=>{
                p.tryUnsubscribe(), p.onStateChange = void 0;
            };
        }, [
            s,
            h
        ]);
        const m = o || ql;
        return T.createElement(m.Provider, {
            value: s
        }, i);
    }
    var ry = iy;
    function bo(u = ql) {
        return function() {
            return T.useContext(u);
        };
    }
    var sp = bo();
    function dp(u = ql) {
        const i = u === ql ? sp : bo(u), o = ()=>{
            const { store: c } = i();
            return c;
        };
        return Object.assign(o, {
            withTypes: ()=>o
        }), o;
    }
    var cy = dp();
    function oy(u = ql) {
        const i = u === ql ? cy : dp(u), o = ()=>i().dispatch;
        return Object.assign(o, {
            withTypes: ()=>o
        }), o;
    }
    let fy;
    Ui = oy();
    fy = (u, i)=>u === i;
    function sy(u = ql) {
        const i = u === ql ? sp : bo(u), o = (c, f = {})=>{
            const { equalityFn: s = fy } = typeof f == "function" ? {
                equalityFn: f
            } : f, h = i(), { store: m, subscription: p, getServerState: v } = h;
            T.useRef(!0);
            const b = T.useCallback({
                [c.name] (S) {
                    return c(S);
                }
            }[c.name], [
                c
            ]), R = X0.useSyncExternalStoreWithSelector(p.addNestedSub, m.getState, v || m.getState, b, s);
            return T.useDebugValue(R), R;
        };
        return Object.assign(o, {
            withTypes: ()=>o
        }), o;
    }
    eu = sy();
    function Fe(u) {
        return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var dy = typeof Symbol == "function" && Symbol.observable || "@@observable", jh = dy, io = ()=>Math.random().toString(36).substring(7).split("").join("."), hy = {
        INIT: `@@redux/INIT${io()}`,
        REPLACE: `@@redux/REPLACE${io()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${io()}`
    }, Mi = hy;
    function hp(u) {
        if (typeof u != "object" || u === null) return !1;
        let i = u;
        for(; Object.getPrototypeOf(i) !== null;)i = Object.getPrototypeOf(i);
        return Object.getPrototypeOf(u) === i || Object.getPrototypeOf(u) === null;
    }
    function So(u, i, o) {
        if (typeof u != "function") throw new Error(Fe(2));
        if (typeof i == "function" && typeof o == "function" || typeof o == "function" && typeof arguments[3] == "function") throw new Error(Fe(0));
        if (typeof i == "function" && typeof o > "u" && (o = i, i = void 0), typeof o < "u") {
            if (typeof o != "function") throw new Error(Fe(1));
            return o(So)(u, i);
        }
        let c = u, f = i, s = new Map, h = s, m = 0, p = !1;
        function v() {
            h === s && (h = new Map, s.forEach((q, U)=>{
                h.set(U, q);
            }));
        }
        function b() {
            if (p) throw new Error(Fe(3));
            return f;
        }
        function R(q) {
            if (typeof q != "function") throw new Error(Fe(4));
            if (p) throw new Error(Fe(5));
            let U = !0;
            v();
            const H = m++;
            return h.set(H, q), function() {
                if (U) {
                    if (p) throw new Error(Fe(6));
                    U = !1, v(), h.delete(H), s = null;
                }
            };
        }
        function S(q) {
            if (!hp(q)) throw new Error(Fe(7));
            if (typeof q.type > "u") throw new Error(Fe(8));
            if (typeof q.type != "string") throw new Error(Fe(17));
            if (p) throw new Error(Fe(9));
            try {
                p = !0, f = c(f, q);
            } finally{
                p = !1;
            }
            return (s = h).forEach((H)=>{
                H();
            }), q;
        }
        function A(q) {
            if (typeof q != "function") throw new Error(Fe(10));
            c = q, S({
                type: Mi.REPLACE
            });
        }
        function C() {
            const q = R;
            return {
                subscribe (U) {
                    if (typeof U != "object" || U === null) throw new Error(Fe(11));
                    function H() {
                        const V = U;
                        V.next && V.next(b());
                    }
                    return H(), {
                        unsubscribe: q(H)
                    };
                },
                [jh] () {
                    return this;
                }
            };
        }
        return S({
            type: Mi.INIT
        }), {
            dispatch: S,
            subscribe: R,
            getState: b,
            replaceReducer: A,
            [jh]: C
        };
    }
    function py(u) {
        Object.keys(u).forEach((i)=>{
            const o = u[i];
            if (typeof o(void 0, {
                type: Mi.INIT
            }) > "u") throw new Error(Fe(12));
            if (typeof o(void 0, {
                type: Mi.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(Fe(13));
        });
    }
    function pp(u) {
        const i = Object.keys(u), o = {};
        for(let s = 0; s < i.length; s++){
            const h = i[s];
            typeof u[h] == "function" && (o[h] = u[h]);
        }
        const c = Object.keys(o);
        let f;
        try {
            py(o);
        } catch (s) {
            f = s;
        }
        return function(h = {}, m) {
            if (f) throw f;
            let p = !1;
            const v = {};
            for(let b = 0; b < c.length; b++){
                const R = c[b], S = o[R], A = h[R], C = S(A, m);
                if (typeof C > "u") throw m && m.type, new Error(Fe(14));
                v[R] = C, p = p || C !== A;
            }
            return p = p || c.length !== Object.keys(h).length, p ? v : h;
        };
    }
    function Di(...u) {
        return u.length === 0 ? (i)=>i : u.length === 1 ? u[0] : u.reduce((i, o)=>(...c)=>i(o(...c)));
    }
    function my(...u) {
        return (i)=>(o, c)=>{
                const f = i(o, c);
                let s = ()=>{
                    throw new Error(Fe(15));
                };
                const h = {
                    getState: f.getState,
                    dispatch: (p, ...v)=>s(p, ...v)
                }, m = u.map((p)=>p(h));
                return s = Di(...m)(f.dispatch), {
                    ...f,
                    dispatch: s
                };
            };
    }
    function mp(u) {
        return ({ dispatch: o, getState: c })=>(f)=>(s)=>typeof s == "function" ? s(o, c, u) : f(s);
    }
    var yy = mp(), vy = mp, gy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
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
    function by(u) {
        return typeof u == "boolean";
    }
    var Sy = ()=>function(i) {
            const { thunk: o = !0, immutableCheck: c = !0, serializableCheck: f = !0, actionCreatorCheck: s = !0 } = i ?? {};
            let h = new yp;
            return o && (by(o) ? h.push(yy) : h.push(vy(o.extraArgument))), h;
        }, Ey = "RTK_autoBatch", Hh = (u)=>(i)=>{
            setTimeout(i, u);
        }, _y = (u = {
        type: "raf"
    })=>(i)=>(...o)=>{
                const c = i(...o);
                let f = !0, s = !1, h = !1;
                const m = new Set, p = u.type === "tick" ? queueMicrotask : u.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Hh(10) : u.type === "callback" ? u.queueNotification : Hh(u.timeout), v = ()=>{
                    h = !1, s && (s = !1, m.forEach((b)=>b()));
                };
                return Object.assign({}, c, {
                    subscribe (b) {
                        const R = ()=>f && b(), S = c.subscribe(R);
                        return m.add(b), ()=>{
                            S(), m.delete(b);
                        };
                    },
                    dispatch (b) {
                        try {
                            return f = !b?.meta?.[Ey], s = !f, s && (h || (h = !0, p(v))), c.dispatch(b);
                        } finally{
                            f = !0;
                        }
                    }
                });
            }, Ry = (u)=>function(o) {
            const { autoBatch: c = !0 } = o ?? {};
            let f = new yp(u);
            return c && f.push(_y(typeof c == "object" ? c : void 0)), f;
        };
    function Ty(u) {
        const i = Sy(), { reducer: o = void 0, middleware: c, devTools: f = !0, preloadedState: s = void 0, enhancers: h = void 0 } = u || {};
        let m;
        if (typeof o == "function") m = o;
        else if (hp(o)) m = pp(o);
        else throw new Error(Ny(1));
        let p;
        typeof c == "function" ? p = c(i) : p = i();
        let v = Di;
        f && (v = gy({
            trace: !1,
            ...typeof f == "object" && f
        }));
        const b = my(...p), R = Ry(b);
        let S = typeof h == "function" ? h(R) : R();
        const A = v(...S);
        return So(m, s, A);
    }
    function Ny(u) {
        return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Eo = "persist:", vp = "persist/FLUSH", _o = "persist/REHYDRATE", gp = "persist/PAUSE", bp = "persist/PERSIST", Sp = "persist/PURGE", Ep = "persist/REGISTER", Ay = -1;
    function Ai(u) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ai = function(o) {
            return typeof o;
        } : Ai = function(o) {
            return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, Ai(u);
    }
    function Lh(u, i) {
        var o = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(u);
            i && (c = c.filter(function(f) {
                return Object.getOwnPropertyDescriptor(u, f).enumerable;
            })), o.push.apply(o, c);
        }
        return o;
    }
    function Oy(u) {
        for(var i = 1; i < arguments.length; i++){
            var o = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Lh(o, !0).forEach(function(c) {
                xy(u, c, o[c]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(o)) : Lh(o).forEach(function(c) {
                Object.defineProperty(u, c, Object.getOwnPropertyDescriptor(o, c));
            });
        }
        return u;
    }
    function xy(u, i, o) {
        return i in u ? Object.defineProperty(u, i, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = o, u;
    }
    function Cy(u, i, o, c) {
        c.debug;
        var f = Oy({}, o);
        return u && Ai(u) === "object" && Object.keys(u).forEach(function(s) {
            s !== "_persist" && i[s] === o[s] && (f[s] = u[s]);
        }), f;
    }
    function My(u) {
        var i = u.blacklist || null, o = u.whitelist || null, c = u.transforms || [], f = u.throttle || 0, s = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Eo).concat(u.key), h = u.storage, m;
        u.serialize === !1 ? m = function(K) {
            return K;
        } : typeof u.serialize == "function" ? m = u.serialize : m = Dy;
        var p = u.writeFailHandler || null, v = {}, b = {}, R = [], S = null, A = null, C = function(K) {
            Object.keys(K).forEach(function(F) {
                U(F) && v[F] !== K[F] && R.indexOf(F) === -1 && R.push(F);
            }), Object.keys(v).forEach(function(F) {
                K[F] === void 0 && U(F) && R.indexOf(F) === -1 && v[F] !== void 0 && R.push(F);
            }), S === null && (S = setInterval(w, f)), v = K;
        };
        function w() {
            if (R.length === 0) {
                S && clearInterval(S), S = null;
                return;
            }
            var V = R.shift(), K = c.reduce(function(F, Z) {
                return Z.in(F, V, v);
            }, v[V]);
            if (K !== void 0) try {
                b[V] = m(K);
            } catch (F) {
                console.error("redux-persist/createPersistoid: error serializing state", F);
            }
            else delete b[V];
            R.length === 0 && q();
        }
        function q() {
            Object.keys(b).forEach(function(V) {
                v[V] === void 0 && delete b[V];
            }), A = h.setItem(s, m(b)).catch(H);
        }
        function U(V) {
            return !(o && o.indexOf(V) === -1 && V !== "_persist" || i && i.indexOf(V) !== -1);
        }
        function H(V) {
            p && p(V);
        }
        var L = function() {
            for(; R.length !== 0;)w();
            return A || Promise.resolve();
        };
        return {
            update: C,
            flush: L
        };
    }
    function Dy(u) {
        return JSON.stringify(u);
    }
    function By(u) {
        var i = u.transforms || [], o = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Eo).concat(u.key), c = u.storage;
        u.debug;
        var f;
        return u.deserialize === !1 ? f = function(h) {
            return h;
        } : typeof u.deserialize == "function" ? f = u.deserialize : f = wy, c.getItem(o).then(function(s) {
            if (s) try {
                var h = {}, m = f(s);
                return Object.keys(m).forEach(function(p) {
                    h[p] = i.reduceRight(function(v, b) {
                        return b.out(v, p, m);
                    }, f(m[p]));
                }), h;
            } catch (p) {
                throw p;
            }
            else return;
        });
    }
    function wy(u) {
        return JSON.parse(u);
    }
    function Uy(u) {
        var i = u.storage, o = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Eo).concat(u.key);
        return i.removeItem(o, zy);
    }
    function zy(u) {}
    function Qh(u, i) {
        var o = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(u);
            i && (c = c.filter(function(f) {
                return Object.getOwnPropertyDescriptor(u, f).enumerable;
            })), o.push.apply(o, c);
        }
        return o;
    }
    function ul(u) {
        for(var i = 1; i < arguments.length; i++){
            var o = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Qh(o, !0).forEach(function(c) {
                Py(u, c, o[c]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(o)) : Qh(o).forEach(function(c) {
                Object.defineProperty(u, c, Object.getOwnPropertyDescriptor(o, c));
            });
        }
        return u;
    }
    function Py(u, i, o) {
        return i in u ? Object.defineProperty(u, i, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = o, u;
    }
    function qy(u, i) {
        if (u == null) return {};
        var o = ky(u, i), c, f;
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(u);
            for(f = 0; f < s.length; f++)c = s[f], !(i.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(u, c) && (o[c] = u[c]);
        }
        return o;
    }
    function ky(u, i) {
        if (u == null) return {};
        var o = {}, c = Object.keys(u), f, s;
        for(s = 0; s < c.length; s++)f = c[s], !(i.indexOf(f) >= 0) && (o[f] = u[f]);
        return o;
    }
    var jy = 5e3;
    function Hy(u, i) {
        var o = u.version !== void 0 ? u.version : Ay;
        u.debug;
        var c = u.stateReconciler === void 0 ? Cy : u.stateReconciler, f = u.getStoredState || By, s = u.timeout !== void 0 ? u.timeout : jy, h = null, m = !1, p = !0, v = function(R) {
            return R._persist.rehydrated && h && !p && h.update(R), R;
        };
        return function(b, R) {
            var S = b || {}, A = S._persist, C = qy(S, [
                "_persist"
            ]), w = C;
            if (R.type === bp) {
                var q = !1, U = function(J, te) {
                    q || (R.rehydrate(u.key, J, te), q = !0);
                };
                if (s && setTimeout(function() {
                    !q && U(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(u.key, '"')));
                }, s), p = !1, h || (h = My(u)), A) return ul({}, i(w, R), {
                    _persist: A
                });
                if (typeof R.rehydrate != "function" || typeof R.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return R.register(u.key), f(u).then(function(Z) {
                    var J = u.migrate || function(te, Oe) {
                        return Promise.resolve(te);
                    };
                    J(Z, o).then(function(te) {
                        U(te);
                    }, function(te) {
                        U(void 0, te);
                    });
                }, function(Z) {
                    U(void 0, Z);
                }), ul({}, i(w, R), {
                    _persist: {
                        version: o,
                        rehydrated: !1
                    }
                });
            } else {
                if (R.type === Sp) return m = !0, R.result(Uy(u)), ul({}, i(w, R), {
                    _persist: A
                });
                if (R.type === vp) return R.result(h && h.flush()), ul({}, i(w, R), {
                    _persist: A
                });
                if (R.type === gp) p = !0;
                else if (R.type === _o) {
                    if (m) return ul({}, w, {
                        _persist: ul({}, A, {
                            rehydrated: !0
                        })
                    });
                    if (R.key === u.key) {
                        var H = i(w, R), L = R.payload, V = c !== !1 && L !== void 0 ? c(L, b, H, u) : H, K = ul({}, V, {
                            _persist: ul({}, A, {
                                rehydrated: !0
                            })
                        });
                        return v(K);
                    }
                }
            }
            if (!A) return i(b, R);
            var F = i(w, R);
            return F === w ? b : v(ul({}, F, {
                _persist: A
            }));
        };
    }
    function Kh(u) {
        return Ky(u) || Qy(u) || Ly();
    }
    function Ly() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function Qy(u) {
        if (Symbol.iterator in Object(u) || Object.prototype.toString.call(u) === "[object Arguments]") return Array.from(u);
    }
    function Ky(u) {
        if (Array.isArray(u)) {
            for(var i = 0, o = new Array(u.length); i < u.length; i++)o[i] = u[i];
            return o;
        }
    }
    function Gh(u, i) {
        var o = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(u);
            i && (c = c.filter(function(f) {
                return Object.getOwnPropertyDescriptor(u, f).enumerable;
            })), o.push.apply(o, c);
        }
        return o;
    }
    function po(u) {
        for(var i = 1; i < arguments.length; i++){
            var o = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Gh(o, !0).forEach(function(c) {
                Gy(u, c, o[c]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(o)) : Gh(o).forEach(function(c) {
                Object.defineProperty(u, c, Object.getOwnPropertyDescriptor(o, c));
            });
        }
        return u;
    }
    function Gy(u, i, o) {
        return i in u ? Object.defineProperty(u, i, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = o, u;
    }
    var _p = {
        registry: [],
        bootstrapped: !1
    }, Yy = function() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _p, o = arguments.length > 1 ? arguments[1] : void 0;
        switch(o.type){
            case Ep:
                return po({}, i, {
                    registry: [].concat(Kh(i.registry), [
                        o.key
                    ])
                });
            case _o:
                var c = i.registry.indexOf(o.key), f = Kh(i.registry);
                return f.splice(c, 1), po({}, i, {
                    registry: f,
                    bootstrapped: f.length === 0
                });
            default:
                return i;
        }
    };
    function Vy(u, i, o) {
        var c = So(Yy, _p, void 0), f = function(p) {
            c.dispatch({
                type: Ep,
                key: p
            });
        }, s = function(p, v, b) {
            var R = {
                type: _o,
                payload: v,
                err: b,
                key: p
            };
            u.dispatch(R), c.dispatch(R);
        }, h = po({}, c, {
            purge: function() {
                var p = [];
                return u.dispatch({
                    type: Sp,
                    result: function(b) {
                        p.push(b);
                    }
                }), Promise.all(p);
            },
            flush: function() {
                var p = [];
                return u.dispatch({
                    type: vp,
                    result: function(b) {
                        p.push(b);
                    }
                }), Promise.all(p);
            },
            pause: function() {
                u.dispatch({
                    type: gp
                });
            },
            persist: function() {
                u.dispatch({
                    type: bp,
                    register: f,
                    rehydrate: s
                });
            }
        });
        return h.persist(), h;
    }
    var Za = {}, Ei = {}, _i = {}, Yh;
    function Xy() {
        if (Yh) return _i;
        Yh = 1, _i.__esModule = !0, _i.default = f;
        function u(s) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? u = function(m) {
                return typeof m;
            } : u = function(m) {
                return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
            }, u(s);
        }
        function i() {}
        var o = {
            getItem: i,
            setItem: i,
            removeItem: i
        };
        function c(s) {
            if ((typeof self > "u" ? "undefined" : u(self)) !== "object" || !(s in self)) return !1;
            try {
                var h = self[s], m = "redux-persist ".concat(s, " test");
                h.setItem(m, "test"), h.getItem(m), h.removeItem(m);
            } catch  {
                return !1;
            }
            return !0;
        }
        function f(s) {
            var h = "".concat(s, "Storage");
            return c(h) ? self[h] : o;
        }
        return _i;
    }
    var Vh;
    function Zy() {
        if (Vh) return Ei;
        Vh = 1, Ei.__esModule = !0, Ei.default = o;
        var u = i(Xy());
        function i(c) {
            return c && c.__esModule ? c : {
                default: c
            };
        }
        function o(c) {
            var f = (0, u.default)(c);
            return {
                getItem: function(h) {
                    return new Promise(function(m, p) {
                        m(f.getItem(h));
                    });
                },
                setItem: function(h, m) {
                    return new Promise(function(p, v) {
                        p(f.setItem(h, m));
                    });
                },
                removeItem: function(h) {
                    return new Promise(function(m, p) {
                        m(f.removeItem(h));
                    });
                }
            };
        }
        return Ei;
    }
    var Xh;
    function $y() {
        if (Xh) return Za;
        Xh = 1, Za.__esModule = !0, Za.default = void 0;
        var u = i(Zy());
        function i(c) {
            return c && c.__esModule ? c : {
                default: c
            };
        }
        var o = (0, u.default)("local");
        return Za.default = o, Za;
    }
    var Jy = $y();
    const Wy = fp(Jy);
    const at = "w", Dt = "b", Xe = "p", mo = "n", Oi = "b", Ia = "r", Pl = "q", Qe = "k", ro = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
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
        constructor(i, o){
            const { color: c, piece: f, from: s, to: h, flags: m, captured: p, promotion: v } = o, b = Ie(s), R = Ie(h);
            this.color = c, this.piece = f, this.from = b, this.to = R, this.san = i._moveToSan(o, i._moves({
                legal: !0
            })), this.lan = b + R, this.before = i.fen(), i._makeMove(o), this.after = i.fen(), i._undoMove(), this.flags = "";
            for(const S in ce)ce[S] & m && (this.flags += ln[S]);
            p && (this.captured = p), v && (this.promotion = v, this.lan += v);
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
    const st = -1, ln = {
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
    }, yo = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, Fy = {
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
    }, Iy = {
        ...yo,
        ...Fy
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
    }, co = {
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
    }, Zh = {
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
    }, ev = [
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
    ], tv = [
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
    ], lv = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, nv = "pnbrqkPNBRQK", $h = [
        mo,
        Oi,
        Ia,
        Pl
    ], av = 7, uv = 6, iv = 1, rv = 0, Ti = {
        [Qe]: ce.KSIDE_CASTLE,
        [Pl]: ce.QSIDE_CASTLE
    }, Ul = {
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
    }, cv = {
        b: iv,
        w: uv
    }, ov = [
        "1-0",
        "0-1",
        "1/2-1/2",
        "*"
    ];
    function nn(u) {
        return u >> 4;
    }
    function tu(u) {
        return u & 15;
    }
    function Rp(u) {
        return "0123456789".indexOf(u) !== -1;
    }
    function Ie(u) {
        const i = tu(u), o = nn(u);
        return "abcdefgh".substring(i, i + 1) + "87654321".substring(o, o + 1);
    }
    function $a(u) {
        return u === at ? Dt : at;
    }
    function fv(u) {
        const i = u.split(/\s+/);
        if (i.length !== 6) return {
            ok: !1,
            error: "Invalid FEN: must contain six space-delimited fields"
        };
        const o = parseInt(i[5], 10);
        if (isNaN(o) || o <= 0) return {
            ok: !1,
            error: "Invalid FEN: move number must be a positive integer"
        };
        const c = parseInt(i[4], 10);
        if (isNaN(c) || c < 0) return {
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
        const f = i[0].split("/");
        if (f.length !== 8) return {
            ok: !1,
            error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
        };
        for(let h = 0; h < f.length; h++){
            let m = 0, p = !1;
            for(let v = 0; v < f[h].length; v++)if (Rp(f[h][v])) {
                if (p) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                m += parseInt(f[h][v], 10), p = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(f[h][v])) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (invalid piece)"
                };
                m += 1, p = !1;
            }
            if (m !== 8) return {
                ok: !1,
                error: "Invalid FEN: piece data is invalid (too many squares in rank)"
            };
        }
        if (i[3][1] == "3" && i[1] == "w" || i[3][1] == "6" && i[1] == "b") return {
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
        for (const { color: h, regex: m } of s){
            if (!m.test(i[0])) return {
                ok: !1,
                error: `Invalid FEN: missing ${h} king`
            };
            if ((i[0].match(m) || []).length > 1) return {
                ok: !1,
                error: `Invalid FEN: too many ${h} kings`
            };
        }
        return Array.from(f[0] + f[7]).some((h)=>h.toUpperCase() === "P") ? {
            ok: !1,
            error: "Invalid FEN: some pawns are on the edge rows"
        } : {
            ok: !0
        };
    }
    function sv(u, i) {
        const o = u.from, c = u.to, f = u.piece;
        let s = 0, h = 0, m = 0;
        for(let p = 0, v = i.length; p < v; p++){
            const b = i[p].from, R = i[p].to, S = i[p].piece;
            f === S && o !== b && c === R && (s++, nn(o) === nn(b) && h++, tu(o) === tu(b) && m++);
        }
        return s > 0 ? h > 0 && m > 0 ? Ie(o) : m > 0 ? Ie(o).charAt(1) : Ie(o).charAt(0) : "";
    }
    function zl(u, i, o, c, f, s = void 0, h = ce.NORMAL) {
        const m = nn(c);
        if (f === Xe && (m === av || m === rv)) for(let p = 0; p < $h.length; p++){
            const v = $h[p];
            u.push({
                color: i,
                from: o,
                to: c,
                piece: f,
                captured: s,
                promotion: v,
                flags: h | ce.PROMOTION
            });
        }
        else u.push({
            color: i,
            from: o,
            to: c,
            piece: f,
            captured: s,
            flags: h
        });
    }
    function Jh(u) {
        let i = u.charAt(0);
        return i >= "a" && i <= "h" ? u.match(/[a-h]\d.*[a-h]\d/) ? void 0 : Xe : (i = i.toLowerCase(), i === "o" ? Qe : i);
    }
    function oo(u) {
        return u.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function fo(u) {
        return u.split(" ").slice(0, 4).join(" ");
    }
    Ro = class {
        _board = new Array(128);
        _turn = at;
        _header = {};
        _kings = {
            w: st,
            b: st
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
        constructor(i = ro, { skipValidation: o = !1 } = {}){
            this.load(i, {
                skipValidation: o
            });
        }
        clear({ preserveHeaders: i = !1 } = {}) {
            this._board = new Array(128), this._kings = {
                w: st,
                b: st
            }, this._turn = at, this._castling = {
                w: 0,
                b: 0
            }, this._epSquare = st, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = i ? this._header : {
                ...Iy
            }, this._positionCount = {}, this._header.SetUp = null, this._header.FEN = null;
        }
        load(i, { skipValidation: o = !1, preserveHeaders: c = !1 } = {}) {
            let f = i.split(/\s+/);
            if (f.length >= 2 && f.length < 6) {
                const m = [
                    "-",
                    "-",
                    "0",
                    "1"
                ];
                i = f.concat(m.slice(-(6 - f.length))).join(" ");
            }
            if (f = i.split(/\s+/), !o) {
                const { ok: m, error: p } = fv(i);
                if (!m) throw new Error(p);
            }
            const s = f[0];
            let h = 0;
            this.clear({
                preserveHeaders: c
            });
            for(let m = 0; m < s.length; m++){
                const p = s.charAt(m);
                if (p === "/") h += 8;
                else if (Rp(p)) h += parseInt(p, 10);
                else {
                    const v = p < "a" ? at : Dt;
                    this._put({
                        type: p.toLowerCase(),
                        color: v
                    }, Ie(h)), h++;
                }
            }
            this._turn = f[1], f[2].indexOf("K") > -1 && (this._castling.w |= ce.KSIDE_CASTLE), f[2].indexOf("Q") > -1 && (this._castling.w |= ce.QSIDE_CASTLE), f[2].indexOf("k") > -1 && (this._castling.b |= ce.KSIDE_CASTLE), f[2].indexOf("q") > -1 && (this._castling.b |= ce.QSIDE_CASTLE), this._epSquare = f[3] === "-" ? st : ue[f[3]], this._halfMoves = parseInt(f[4], 10), this._moveNumber = parseInt(f[5], 10), this._updateSetup(i), this._incPositionCount(i);
        }
        fen() {
            let i = 0, o = "";
            for(let s = ue.a8; s <= ue.h1; s++){
                if (this._board[s]) {
                    i > 0 && (o += i, i = 0);
                    const { color: h, type: m } = this._board[s];
                    o += h === at ? m.toUpperCase() : m.toLowerCase();
                } else i++;
                s + 1 & 136 && (i > 0 && (o += i), s !== ue.h1 && (o += "/"), i = 0, s += 8);
            }
            let c = "";
            this._castling[at] & ce.KSIDE_CASTLE && (c += "K"), this._castling[at] & ce.QSIDE_CASTLE && (c += "Q"), this._castling[Dt] & ce.KSIDE_CASTLE && (c += "k"), this._castling[Dt] & ce.QSIDE_CASTLE && (c += "q"), c = c || "-";
            let f = "-";
            if (this._epSquare !== st) {
                const s = this._epSquare + (this._turn === at ? 16 : -16), h = [
                    s + 1,
                    s - 1
                ];
                for (const m of h){
                    if (m & 136) continue;
                    const p = this._turn;
                    if (this._board[m]?.color === p && this._board[m]?.type === Xe) {
                        this._makeMove({
                            color: p,
                            from: m,
                            to: this._epSquare,
                            piece: Xe,
                            captured: Xe,
                            flags: ce.EP_CAPTURE
                        });
                        const v = !this._isKingAttacked(p);
                        if (this._undoMove(), v) {
                            f = Ie(this._epSquare);
                            break;
                        }
                    }
                }
            }
            return [
                o,
                this._turn,
                c,
                f,
                this._halfMoves,
                this._moveNumber
            ].join(" ");
        }
        _updateSetup(i) {
            this._history.length > 0 || (i !== ro ? (this._header.SetUp = "1", this._header.FEN = i) : (this._header.SetUp = null, this._header.FEN = null));
        }
        reset() {
            this.load(ro);
        }
        get(i) {
            return this._board[ue[i]];
        }
        findPiece(i) {
            const o = [];
            for(let c = ue.a8; c <= ue.h1; c++){
                if (c & 136) {
                    c += 7;
                    continue;
                }
                !this._board[c] || this._board[c]?.color !== i.color || this._board[c].color === i.color && this._board[c].type === i.type && o.push(Ie(c));
            }
            return o;
        }
        put({ type: i, color: o }, c) {
            return this._put({
                type: i,
                color: o
            }, c) ? (this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0) : !1;
        }
        _put({ type: i, color: o }, c) {
            if (nv.indexOf(i.toLowerCase()) === -1 || !(c in ue)) return !1;
            const f = ue[c];
            if (i == Qe && !(this._kings[o] == st || this._kings[o] == f)) return !1;
            const s = this._board[f];
            return s && s.type === Qe && (this._kings[s.color] = st), this._board[f] = {
                type: i,
                color: o
            }, i === Qe && (this._kings[o] = f), !0;
        }
        remove(i) {
            const o = this.get(i);
            return delete this._board[ue[i]], o && o.type === Qe && (this._kings[o.color] = st), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), o;
        }
        _updateCastlingRights() {
            const i = this._board[ue.e1]?.type === Qe && this._board[ue.e1]?.color === at, o = this._board[ue.e8]?.type === Qe && this._board[ue.e8]?.color === Dt;
            (!i || this._board[ue.a1]?.type !== Ia || this._board[ue.a1]?.color !== at) && (this._castling.w &= -65), (!i || this._board[ue.h1]?.type !== Ia || this._board[ue.h1]?.color !== at) && (this._castling.w &= -33), (!o || this._board[ue.a8]?.type !== Ia || this._board[ue.a8]?.color !== Dt) && (this._castling.b &= -65), (!o || this._board[ue.h8]?.type !== Ia || this._board[ue.h8]?.color !== Dt) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === st) return;
            const i = this._epSquare + (this._turn === at ? -16 : 16), o = this._epSquare + (this._turn === at ? 16 : -16), c = [
                o + 1,
                o - 1
            ];
            if (this._board[i] !== null || this._board[this._epSquare] !== null || this._board[o]?.color !== $a(this._turn) || this._board[o]?.type !== Xe) {
                this._epSquare = st;
                return;
            }
            const f = (s)=>!(s & 136) && this._board[s]?.color === this._turn && this._board[s]?.type === Xe;
            c.some(f) || (this._epSquare = st);
        }
        _attacked(i, o, c) {
            const f = [];
            for(let s = ue.a8; s <= ue.h1; s++){
                if (s & 136) {
                    s += 7;
                    continue;
                }
                if (this._board[s] === void 0 || this._board[s].color !== i) continue;
                const h = this._board[s], m = s - o;
                if (m === 0) continue;
                const p = m + 119;
                if (ev[p] & lv[h.type]) {
                    if (h.type === Xe) {
                        if (m > 0 && h.color === at || m <= 0 && h.color === Dt) if (c) f.push(Ie(s));
                        else return !0;
                        continue;
                    }
                    if (h.type === "n" || h.type === "k") if (c) {
                        f.push(Ie(s));
                        continue;
                    } else return !0;
                    const v = tv[p];
                    let b = s + v, R = !1;
                    for(; b !== o;){
                        if (this._board[b] != null) {
                            R = !0;
                            break;
                        }
                        b += v;
                    }
                    if (!R) if (c) {
                        f.push(Ie(s));
                        continue;
                    } else return !0;
                }
            }
            return c ? f : !1;
        }
        attackers(i, o) {
            return o ? this._attacked(o, ue[i], !0) : this._attacked(this._turn, ue[i], !0);
        }
        _isKingAttacked(i) {
            const o = this._kings[i];
            return o === -1 ? !1 : this._attacked($a(i), o);
        }
        isAttacked(i, o) {
            return this._attacked(o, ue[i]);
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
            }, o = [];
            let c = 0, f = 0;
            for(let s = ue.a8; s <= ue.h1; s++){
                if (f = (f + 1) % 2, s & 136) {
                    s += 7;
                    continue;
                }
                const h = this._board[s];
                h && (i[h.type] = h.type in i ? i[h.type] + 1 : 1, h.type === Oi && o.push(f), c++);
            }
            if (c === 2) return !0;
            if (c === 3 && (i[Oi] === 1 || i[mo] === 1)) return !0;
            if (c === i[Oi] + 2) {
                let s = 0;
                const h = o.length;
                for(let m = 0; m < h; m++)s += o[m];
                if (s === 0 || s === h) return !0;
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
        moves({ verbose: i = !1, square: o = void 0, piece: c = void 0 } = {}) {
            const f = this._moves({
                square: o,
                piece: c
            });
            return i ? f.map((s)=>new Ri(this, s)) : f.map((s)=>this._moveToSan(s, f));
        }
        _moves({ legal: i = !0, piece: o = void 0, square: c = void 0 } = {}) {
            const f = c ? c.toLowerCase() : void 0, s = o?.toLowerCase(), h = [], m = this._turn, p = $a(m);
            let v = ue.a8, b = ue.h1, R = !1;
            if (f) if (f in ue) v = b = ue[f], R = !0;
            else return [];
            for(let A = v; A <= b; A++){
                if (A & 136) {
                    A += 7;
                    continue;
                }
                if (!this._board[A] || this._board[A].color === p) continue;
                const { type: C } = this._board[A];
                let w;
                if (C === Xe) {
                    if (s && s !== C) continue;
                    w = A + co[m][0], this._board[w] || (zl(h, m, A, w, Xe), w = A + co[m][1], cv[m] === nn(A) && !this._board[w] && zl(h, m, A, w, Xe, void 0, ce.BIG_PAWN));
                    for(let q = 2; q < 4; q++)w = A + co[m][q], !(w & 136) && (this._board[w]?.color === p ? zl(h, m, A, w, Xe, this._board[w].type, ce.CAPTURE) : w === this._epSquare && zl(h, m, A, w, Xe, Xe, ce.EP_CAPTURE));
                } else {
                    if (s && s !== C) continue;
                    for(let q = 0, U = Zh[C].length; q < U; q++){
                        const H = Zh[C][q];
                        for(w = A; w += H, !(w & 136);){
                            if (!this._board[w]) zl(h, m, A, w, C);
                            else {
                                if (this._board[w].color === m) break;
                                zl(h, m, A, w, C, this._board[w].type, ce.CAPTURE);
                                break;
                            }
                            if (C === mo || C === Qe) break;
                        }
                    }
                }
            }
            if ((s === void 0 || s === Qe) && (!R || b === this._kings[m])) {
                if (this._castling[m] & ce.KSIDE_CASTLE) {
                    const A = this._kings[m], C = A + 2;
                    !this._board[A + 1] && !this._board[C] && !this._attacked(p, this._kings[m]) && !this._attacked(p, A + 1) && !this._attacked(p, C) && zl(h, m, this._kings[m], C, Qe, void 0, ce.KSIDE_CASTLE);
                }
                if (this._castling[m] & ce.QSIDE_CASTLE) {
                    const A = this._kings[m], C = A - 2;
                    !this._board[A - 1] && !this._board[A - 2] && !this._board[A - 3] && !this._attacked(p, this._kings[m]) && !this._attacked(p, A - 1) && !this._attacked(p, C) && zl(h, m, this._kings[m], C, Qe, void 0, ce.QSIDE_CASTLE);
                }
            }
            if (!i || this._kings[m] === -1) return h;
            const S = [];
            for(let A = 0, C = h.length; A < C; A++)this._makeMove(h[A]), this._isKingAttacked(m) || S.push(h[A]), this._undoMove();
            return S;
        }
        move(i, { strict: o = !1 } = {}) {
            let c = null;
            if (typeof i == "string") c = this._moveFromSan(i, o);
            else if (typeof i == "object") {
                const s = this._moves();
                for(let h = 0, m = s.length; h < m; h++)if (i.from === Ie(s[h].from) && i.to === Ie(s[h].to) && (!("promotion" in s[h]) || i.promotion === s[h].promotion)) {
                    c = s[h];
                    break;
                }
            }
            if (!c) throw typeof i == "string" ? new Error(`Invalid move: ${i}`) : new Error(`Invalid move: ${JSON.stringify(i)}`);
            const f = new Ri(this, c);
            return this._makeMove(c), this._incPositionCount(f.after), f;
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
            const o = this._turn, c = $a(o);
            if (this._push(i), this._board[i.to] = this._board[i.from], delete this._board[i.from], i.flags & ce.EP_CAPTURE && (this._turn === Dt ? delete this._board[i.to - 16] : delete this._board[i.to + 16]), i.promotion && (this._board[i.to] = {
                type: i.promotion,
                color: o
            }), this._board[i.to].type === Qe) {
                if (this._kings[o] = i.to, i.flags & ce.KSIDE_CASTLE) {
                    const f = i.to - 1, s = i.to + 1;
                    this._board[f] = this._board[s], delete this._board[s];
                } else if (i.flags & ce.QSIDE_CASTLE) {
                    const f = i.to + 1, s = i.to - 2;
                    this._board[f] = this._board[s], delete this._board[s];
                }
                this._castling[o] = 0;
            }
            if (this._castling[o]) {
                for(let f = 0, s = Ul[o].length; f < s; f++)if (i.from === Ul[o][f].square && this._castling[o] & Ul[o][f].flag) {
                    this._castling[o] ^= Ul[o][f].flag;
                    break;
                }
            }
            if (this._castling[c]) {
                for(let f = 0, s = Ul[c].length; f < s; f++)if (i.to === Ul[c][f].square && this._castling[c] & Ul[c][f].flag) {
                    this._castling[c] ^= Ul[c][f].flag;
                    break;
                }
            }
            i.flags & ce.BIG_PAWN ? o === Dt ? this._epSquare = i.to - 16 : this._epSquare = i.to + 16 : this._epSquare = st, i.piece === Xe ? this._halfMoves = 0 : i.flags & (ce.CAPTURE | ce.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, o === Dt && this._moveNumber++, this._turn = c;
        }
        undo() {
            const i = this._undoMove();
            if (i) {
                const o = new Ri(this, i);
                return this._decPositionCount(o.after), o;
            }
            return null;
        }
        _undoMove() {
            const i = this._history.pop();
            if (i === void 0) return null;
            const o = i.move;
            this._kings = i.kings, this._turn = i.turn, this._castling = i.castling, this._epSquare = i.epSquare, this._halfMoves = i.halfMoves, this._moveNumber = i.moveNumber;
            const c = this._turn, f = $a(c);
            if (this._board[o.from] = this._board[o.to], this._board[o.from].type = o.piece, delete this._board[o.to], o.captured) if (o.flags & ce.EP_CAPTURE) {
                let s;
                c === Dt ? s = o.to - 16 : s = o.to + 16, this._board[s] = {
                    type: Xe,
                    color: f
                };
            } else this._board[o.to] = {
                type: o.captured,
                color: f
            };
            if (o.flags & (ce.KSIDE_CASTLE | ce.QSIDE_CASTLE)) {
                let s, h;
                o.flags & ce.KSIDE_CASTLE ? (s = o.to + 1, h = o.to - 1) : (s = o.to - 2, h = o.to + 1), this._board[s] = this._board[h], delete this._board[h];
            }
            return o;
        }
        pgn({ newline: i = `
`, maxWidth: o = 0 } = {}) {
            const c = [];
            let f = !1;
            for(const S in this._header)this._header[S] && c.push(`[${S} "${this._header[S]}"]` + i), f = !0;
            f && this._history.length && c.push(i);
            const s = (S)=>{
                const A = this._comments[this.fen()];
                if (typeof A < "u") {
                    const C = S.length > 0 ? " " : "";
                    S = `${S}${C}{${A}}`;
                }
                return S;
            }, h = [];
            for(; this._history.length > 0;)h.push(this._undoMove());
            const m = [];
            let p = "";
            for(h.length === 0 && m.push(s("")); h.length > 0;){
                p = s(p);
                const S = h.pop();
                if (!S) break;
                if (!this._history.length && S.color === "b") {
                    const A = `${this._moveNumber}. ...`;
                    p = p ? `${p} ${A}` : A;
                } else S.color === "w" && (p.length && m.push(p), p = this._moveNumber + ".");
                p = p + " " + this._moveToSan(S, this._moves({
                    legal: !0
                })), this._makeMove(S);
            }
            if (p.length && m.push(s(p)), m.push(this._header.Result || "*"), o === 0) return c.join("") + m.join(" ");
            const v = function() {
                return c.length > 0 && c[c.length - 1] === " " ? (c.pop(), !0) : !1;
            }, b = function(S, A) {
                for (const C of A.split(" "))if (C) {
                    if (S + C.length > o) {
                        for(; v();)S--;
                        c.push(i), S = 0;
                    }
                    c.push(C), S += C.length, c.push(" "), S++;
                }
                return v() && S--, S;
            };
            let R = 0;
            for(let S = 0; S < m.length; S++){
                if (R + m[S].length > o && m[S].includes("{")) {
                    R = b(R, m[S]);
                    continue;
                }
                R + m[S].length > o && S !== 0 ? (c[c.length - 1] === " " && c.pop(), c.push(i), R = 0) : S !== 0 && (c.push(" "), R++), c.push(m[S]), R += m[S].length;
            }
            return c.join("");
        }
        header(...i) {
            for(let o = 0; o < i.length; o += 2)typeof i[o] == "string" && typeof i[o + 1] == "string" && (this._header[i[o]] = i[o + 1]);
            return this._header;
        }
        setHeader(i, o) {
            return this._header[i] = o ?? yo[i] ?? null, this.getHeaders();
        }
        removeHeader(i) {
            return i in this._header ? (this._header[i] = yo[i] || null, !0) : !1;
        }
        getHeaders() {
            const i = {};
            for (const [o, c] of Object.entries(this._header))c !== null && (i[o] = c);
            return i;
        }
        loadPgn(i, { strict: o = !1, newlineChar: c = `\r?
` } = {}) {
            function f(L) {
                return L.replace(/\\/g, "\\");
            }
            function s(L) {
                const V = {}, K = L.split(new RegExp(f(c)));
                let F = "", Z = "";
                for(let J = 0; J < K.length; J++){
                    const te = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    F = K[J].replace(te, "$1"), Z = K[J].replace(te, "$2"), F.trim().length > 0 && (V[F] = Z);
                }
                return V;
            }
            i = i.trim();
            const m = new RegExp("^(\\[((?:" + f(c) + ")|.)*\\])((?:\\s*" + f(c) + "){2}|(?:\\s*" + f(c) + ")*$)").exec(i), p = m && m.length >= 2 ? m[1] : "";
            this.reset();
            const v = s(p);
            let b = "";
            for(const L in v)L.toLowerCase() === "fen" && (b = v[L]), this.header(L, v[L]);
            if (!o) b && this.load(b, {
                preserveHeaders: !0
            });
            else if (v.SetUp === "1") {
                if (!("FEN" in v)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
                this.load(v.FEN, {
                    preserveHeaders: !0
                });
            }
            function R(L) {
                return Array.from(L).map(function(V) {
                    return V.charCodeAt(0) < 128 ? V.charCodeAt(0).toString(16) : encodeURIComponent(V).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function S(L) {
                return L.length == 0 ? "" : decodeURIComponent("%" + (L.match(/.{1,2}/g) || []).join("%"));
            }
            const A = function(L) {
                return L = L.replace(new RegExp(f(c), "g"), " "), `{${R(L.slice(1, L.length - 1))}}`;
            }, C = function(L) {
                if (L.startsWith("{") && L.endsWith("}")) return S(L.slice(1, L.length - 1));
            };
            let w = i.replace(p, "").replace(new RegExp(`({[^}]*})+?|;([^${f(c)}]*)`, "g"), function(L, V, K) {
                return V !== void 0 ? A(V) : " " + A(`{${K.slice(1)}}`);
            }).replace(new RegExp(f(c), "g"), " ");
            const q = /(\([^()]+\))+?/g;
            for(; q.test(w);)w = w.replace(q, "");
            w = w.replace(/\d+\.(\.\.)?/g, ""), w = w.replace(/\.\.\./g, ""), w = w.replace(/\$\d+/g, "");
            let U = w.trim().split(new RegExp(/\s+/));
            U = U.filter((L)=>L !== "");
            let H = "";
            for(let L = 0; L < U.length; L++){
                const V = C(U[L]);
                if (V !== void 0) {
                    this._comments[this.fen()] = V;
                    continue;
                }
                const K = this._moveFromSan(U[L], o);
                if (K == null) if (ov.indexOf(U[L]) > -1) H = U[L];
                else throw new Error(`Invalid move in PGN: ${U[L]}`);
                else H = "", this._makeMove(K), this._incPositionCount(this.fen());
            }
            H && Object.keys(this._header).length && this._header.Result !== H && this.setHeader("Result", H);
        }
        _moveToSan(i, o) {
            let c = "";
            if (i.flags & ce.KSIDE_CASTLE) c = "O-O";
            else if (i.flags & ce.QSIDE_CASTLE) c = "O-O-O";
            else {
                if (i.piece !== Xe) {
                    const f = sv(i, o);
                    c += i.piece.toUpperCase() + f;
                }
                i.flags & (ce.CAPTURE | ce.EP_CAPTURE) && (i.piece === Xe && (c += Ie(i.from)[0]), c += "x"), c += Ie(i.to), i.promotion && (c += "=" + i.promotion.toUpperCase());
            }
            return this._makeMove(i), this.isCheck() && (this.isCheckmate() ? c += "#" : c += "+"), this._undoMove(), c;
        }
        _moveFromSan(i, o = !1) {
            const c = oo(i);
            let f = Jh(c), s = this._moves({
                legal: !0,
                piece: f
            });
            for(let S = 0, A = s.length; S < A; S++)if (c === oo(this._moveToSan(s[S], s))) return s[S];
            if (o) return null;
            let h, m, p, v, b, R = !1;
            if (m = c.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), m ? (h = m[1], p = m[2], v = m[3], b = m[4], p.length == 1 && (R = !0)) : (m = c.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), m && (h = m[1], p = m[2], v = m[3], b = m[4], p.length == 1 && (R = !0))), f = Jh(c), s = this._moves({
                legal: !0,
                piece: h || f
            }), !v) return null;
            for(let S = 0, A = s.length; S < A; S++)if (p) {
                if ((!h || h.toLowerCase() == s[S].piece) && ue[p] == s[S].from && ue[v] == s[S].to && (!b || b.toLowerCase() == s[S].promotion)) return s[S];
                if (R) {
                    const C = Ie(s[S].from);
                    if ((!h || h.toLowerCase() == s[S].piece) && ue[v] == s[S].to && (p == C[0] || p == C[1]) && (!b || b.toLowerCase() == s[S].promotion)) return s[S];
                }
            } else if (c === oo(this._moveToSan(s[S], s)).replace("x", "")) return s[S];
            return null;
        }
        ascii() {
            let i = `   +------------------------+
`;
            for(let o = ue.a8; o <= ue.h1; o++){
                if (tu(o) === 0 && (i += " " + "87654321"[nn(o)] + " |"), this._board[o]) {
                    const c = this._board[o].type, s = this._board[o].color === at ? c.toUpperCase() : c.toLowerCase();
                    i += " " + s + " ";
                } else i += " . ";
                o + 1 & 136 && (i += `|
`, o += 8);
            }
            return i += `   +------------------------+
`, i += "     a  b  c  d  e  f  g  h", i;
        }
        perft(i) {
            const o = this._moves({
                legal: !1
            });
            let c = 0;
            const f = this._turn;
            for(let s = 0, h = o.length; s < h; s++)this._makeMove(o[s]), this._isKingAttacked(f) || (i - 1 > 0 ? c += this.perft(i - 1) : c++), this._undoMove();
            return c;
        }
        turn() {
            return this._turn;
        }
        board() {
            const i = [];
            let o = [];
            for(let c = ue.a8; c <= ue.h1; c++)this._board[c] == null ? o.push(null) : o.push({
                square: Ie(c),
                type: this._board[c].type,
                color: this._board[c].color
            }), c + 1 & 136 && (i.push(o), o = [], c += 8);
            return i;
        }
        squareColor(i) {
            if (i in ue) {
                const o = ue[i];
                return (nn(o) + tu(o)) % 2 === 0 ? "light" : "dark";
            }
            return null;
        }
        history({ verbose: i = !1 } = {}) {
            const o = [], c = [];
            for(; this._history.length > 0;)o.push(this._undoMove());
            for(;;){
                const f = o.pop();
                if (!f) break;
                i ? c.push(new Ri(this, f)) : c.push(this._moveToSan(f, this._moves())), this._makeMove(f);
            }
            return c;
        }
        _getPositionCount(i) {
            const o = fo(i);
            return this._positionCount[o] || 0;
        }
        _incPositionCount(i) {
            const o = fo(i);
            this._positionCount[o] === void 0 && (this._positionCount[o] = 0), this._positionCount[o] += 1;
        }
        _decPositionCount(i) {
            const o = fo(i);
            this._positionCount[o] === 1 ? delete this._positionCount[o] : this._positionCount[o] -= 1;
        }
        _pruneComments() {
            const i = [], o = {}, c = (f)=>{
                f in this._comments && (o[f] = this._comments[f]);
            };
            for(; this._history.length > 0;)i.push(this._undoMove());
            for(c(this.fen());;){
                const f = i.pop();
                if (!f) break;
                this._makeMove(f), c(this.fen());
            }
            this._comments = o;
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
                const o = this._comments[i];
                return delete this._comments[i], {
                    fen: i,
                    comment: o
                };
            });
        }
        setCastlingRights(i, o) {
            for (const f of [
                Qe,
                Pl
            ])o[f] !== void 0 && (o[f] ? this._castling[i] |= Ti[f] : this._castling[i] &= ~Ti[f]);
            this._updateCastlingRights();
            const c = this.getCastlingRights(i);
            return (o[Qe] === void 0 || o[Qe] === c[Qe]) && (o[Pl] === void 0 || o[Pl] === c[Pl]);
        }
        getCastlingRights(i) {
            return {
                [Qe]: (this._castling[i] & Ti[Qe]) !== 0,
                [Pl]: (this._castling[i] & Ti[Pl]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let Tp, Np, dv, Ap, hv, pv, mv, Wh, yv, Op, xp, Cp, gv, bv, Sv, Ev, Mp, Dp, Bp, wp, To, Up, _v, Rv, Tv, Nv, Av, Ov, xv, Cv, Mv, Dv, Bv, wv, No, zp, Uv, zv, Pv, qv, kv, Pp, jv, Hv, Ao, Lv, Fh, Qv, Kv, Gv, Yv, Vv, Xv, Zv;
    Tp = "MOVE_PIECE";
    Np = "RESET_GAME";
    dv = "LOAD_GAME";
    Ap = "SET_GAME_OVER";
    hv = "SET_TIMER_DURATION";
    u2 = (u)=>({
            type: Tp,
            payload: u
        });
    i2 = (u)=>({
            type: Np,
            payload: u
        });
    r2 = (u, i)=>({
            type: Ap,
            payload: {
                isGameOver: u,
                gameResult: i
            }
        });
    De = {
        TIMER_DURATION: 60 * 3,
        THEME: "classic",
        ENABLE_SOUND: !0,
        IS_FLIPPED: !1,
        THEME_KEY: "theme",
        ENABLE_SOUND_KEY: "enableSound",
        TIMER_DURATION_KEY: "timerDuration",
        IS_FLIPPED_KEY: "isFlipped",
        START_FEN: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        CLEAR_FEN: "8/8/8/8/8/8/8/8 w KQkq - 0 1",
        CHECKMATE_MESSAGE: "Wins by Checkmate!",
        WHITE: "w",
        CHESS_PIECE: "chessPiece",
        ERASER: "eraser"
    };
    pv = [
        [
            {
                id: "a8",
                piece: {
                    type: "r",
                    color: "b"
                }
            },
            {
                id: "b8",
                piece: {
                    type: "n",
                    color: "b"
                }
            },
            {
                id: "c8",
                piece: {
                    type: "b",
                    color: "b"
                }
            },
            {
                id: "d8",
                piece: {
                    type: "q",
                    color: "b"
                }
            },
            {
                id: "e8",
                piece: {
                    type: "k",
                    color: "b"
                }
            },
            {
                id: "f8",
                piece: {
                    type: "b",
                    color: "b"
                }
            },
            {
                id: "g8",
                piece: {
                    type: "n",
                    color: "b"
                }
            },
            {
                id: "h8",
                piece: {
                    type: "r",
                    color: "b"
                }
            }
        ],
        [
            {
                id: "a7",
                piece: {
                    type: "p",
                    color: "b"
                }
            },
            {
                id: "b7",
                piece: {
                    type: "p",
                    color: "b"
                }
            },
            {
                id: "c7",
                piece: {
                    type: "p",
                    color: "b"
                }
            },
            {
                id: "d7",
                piece: {
                    type: "p",
                    color: "b"
                }
            },
            {
                id: "e7",
                piece: {
                    type: "p",
                    color: "b"
                }
            },
            {
                id: "f7",
                piece: {
                    type: "p",
                    color: "b"
                }
            },
            {
                id: "g7",
                piece: {
                    type: "p",
                    color: "b"
                }
            },
            {
                id: "h7",
                piece: {
                    type: "p",
                    color: "b"
                }
            }
        ],
        [
            {
                id: "a6",
                piece: null
            },
            {
                id: "b6",
                piece: null
            },
            {
                id: "c6",
                piece: null
            },
            {
                id: "d6",
                piece: null
            },
            {
                id: "e6",
                piece: null
            },
            {
                id: "f6",
                piece: null
            },
            {
                id: "g6",
                piece: null
            },
            {
                id: "h6",
                piece: null
            }
        ],
        [
            {
                id: "a5",
                piece: null
            },
            {
                id: "b5",
                piece: null
            },
            {
                id: "c5",
                piece: null
            },
            {
                id: "d5",
                piece: null
            },
            {
                id: "e5",
                piece: null
            },
            {
                id: "f5",
                piece: null
            },
            {
                id: "g5",
                piece: null
            },
            {
                id: "h5",
                piece: null
            }
        ],
        [
            {
                id: "a4",
                piece: null
            },
            {
                id: "b4",
                piece: null
            },
            {
                id: "c4",
                piece: null
            },
            {
                id: "d4",
                piece: null
            },
            {
                id: "e4",
                piece: null
            },
            {
                id: "f4",
                piece: null
            },
            {
                id: "g4",
                piece: null
            },
            {
                id: "h4",
                piece: null
            }
        ],
        [
            {
                id: "a3",
                piece: null
            },
            {
                id: "b3",
                piece: null
            },
            {
                id: "c3",
                piece: null
            },
            {
                id: "d3",
                piece: null
            },
            {
                id: "e3",
                piece: null
            },
            {
                id: "f3",
                piece: null
            },
            {
                id: "g3",
                piece: null
            },
            {
                id: "h3",
                piece: null
            }
        ],
        [
            {
                id: "a2",
                piece: {
                    type: "p",
                    color: "w"
                }
            },
            {
                id: "b2",
                piece: {
                    type: "p",
                    color: "w"
                }
            },
            {
                id: "c2",
                piece: {
                    type: "p",
                    color: "w"
                }
            },
            {
                id: "d2",
                piece: {
                    type: "p",
                    color: "w"
                }
            },
            {
                id: "e2",
                piece: {
                    type: "p",
                    color: "w"
                }
            },
            {
                id: "f2",
                piece: {
                    type: "p",
                    color: "w"
                }
            },
            {
                id: "g2",
                piece: {
                    type: "p",
                    color: "w"
                }
            },
            {
                id: "h2",
                piece: {
                    type: "p",
                    color: "w"
                }
            }
        ],
        [
            {
                id: "a1",
                piece: {
                    type: "r",
                    color: "w"
                }
            },
            {
                id: "b1",
                piece: {
                    type: "n",
                    color: "w"
                }
            },
            {
                id: "c1",
                piece: {
                    type: "b",
                    color: "w"
                }
            },
            {
                id: "d1",
                piece: {
                    type: "q",
                    color: "w"
                }
            },
            {
                id: "e1",
                piece: {
                    type: "k",
                    color: "w"
                }
            },
            {
                id: "f1",
                piece: {
                    type: "b",
                    color: "w"
                }
            },
            {
                id: "g1",
                piece: {
                    type: "n",
                    color: "w"
                }
            },
            {
                id: "h1",
                piece: {
                    type: "r",
                    color: "w"
                }
            }
        ]
    ];
    mv = [
        [
            {
                id: "a8",
                piece: null
            },
            {
                id: "b8",
                piece: null
            },
            {
                id: "c8",
                piece: null
            },
            {
                id: "d8",
                piece: null
            },
            {
                id: "e8",
                piece: null
            },
            {
                id: "f8",
                piece: null
            },
            {
                id: "g8",
                piece: null
            },
            {
                id: "h8",
                piece: null
            }
        ],
        [
            {
                id: "a7",
                piece: null
            },
            {
                id: "b7",
                piece: null
            },
            {
                id: "c7",
                piece: null
            },
            {
                id: "d7",
                piece: null
            },
            {
                id: "e7",
                piece: null
            },
            {
                id: "f7",
                piece: null
            },
            {
                id: "g7",
                piece: null
            },
            {
                id: "h7",
                piece: null
            }
        ],
        [
            {
                id: "a6",
                piece: null
            },
            {
                id: "b6",
                piece: null
            },
            {
                id: "c6",
                piece: null
            },
            {
                id: "d6",
                piece: null
            },
            {
                id: "e6",
                piece: null
            },
            {
                id: "f6",
                piece: null
            },
            {
                id: "g6",
                piece: null
            },
            {
                id: "h6",
                piece: null
            }
        ],
        [
            {
                id: "a5",
                piece: null
            },
            {
                id: "b5",
                piece: null
            },
            {
                id: "c5",
                piece: null
            },
            {
                id: "d5",
                piece: null
            },
            {
                id: "e5",
                piece: null
            },
            {
                id: "f5",
                piece: null
            },
            {
                id: "g5",
                piece: null
            },
            {
                id: "h5",
                piece: null
            }
        ],
        [
            {
                id: "a4",
                piece: null
            },
            {
                id: "b4",
                piece: null
            },
            {
                id: "c4",
                piece: null
            },
            {
                id: "d4",
                piece: null
            },
            {
                id: "e4",
                piece: null
            },
            {
                id: "f4",
                piece: null
            },
            {
                id: "g4",
                piece: null
            },
            {
                id: "h4",
                piece: null
            }
        ],
        [
            {
                id: "a3",
                piece: null
            },
            {
                id: "b3",
                piece: null
            },
            {
                id: "c3",
                piece: null
            },
            {
                id: "d3",
                piece: null
            },
            {
                id: "e3",
                piece: null
            },
            {
                id: "f3",
                piece: null
            },
            {
                id: "g3",
                piece: null
            },
            {
                id: "h3",
                piece: null
            }
        ],
        [
            {
                id: "a2",
                piece: null
            },
            {
                id: "b2",
                piece: null
            },
            {
                id: "c2",
                piece: null
            },
            {
                id: "d2",
                piece: null
            },
            {
                id: "e2",
                piece: null
            },
            {
                id: "f2",
                piece: null
            },
            {
                id: "g2",
                piece: null
            },
            {
                id: "h2",
                piece: null
            }
        ],
        [
            {
                id: "a1",
                piece: null
            },
            {
                id: "b1",
                piece: null
            },
            {
                id: "c1",
                piece: null
            },
            {
                id: "d1",
                piece: null
            },
            {
                id: "e1",
                piece: null
            },
            {
                id: "f1",
                piece: null
            },
            {
                id: "g1",
                piece: null
            },
            {
                id: "h1",
                piece: null
            }
        ]
    ];
    Wh = {
        fen: De.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: De.TIMER_DURATION
    };
    yv = (u = Wh, i)=>{
        switch(i.type){
            case Tp:
                try {
                    const o = new Ro(u.fen), c = o.move({
                        from: i.payload.from,
                        to: i.payload.to,
                        promotion: i.payload.promotionPiece
                    });
                    if (!c) return u;
                    const f = [
                        ...u.moveHistory,
                        c.san
                    ];
                    return {
                        ...u,
                        fen: o.fen(),
                        isWhiteTurn: !u.isWhiteTurn,
                        moveHistory: f,
                        lastMove: {
                            from: i.payload.from,
                            to: i.payload.to
                        }
                    };
                } catch (o) {
                    return console.warn("Invalid move:", o), u;
                }
            case Np:
                return {
                    ...Wh,
                    moveHistory: [],
                    timerDuration: i.payload
                };
            case dv:
                return {
                    ...u,
                    fen: i.payload.fen,
                    moveHistory: i.payload.moveHistory || []
                };
            case Ap:
                return {
                    ...u,
                    isGameOver: i.payload.isGameOver,
                    gameResult: i.payload.gameResult
                };
            case hv:
                return {
                    ...u,
                    timerDuration: i.payload
                };
            default:
                return u;
        }
    };
    Op = "FLIP_BOARD";
    xp = "SET_THEME";
    Cp = "SET_SOUND";
    vv = ()=>({
            type: Op
        });
    gv = (u)=>({
            type: xp,
            payload: u
        });
    bv = (u)=>({
            type: Cp,
            payload: u
        });
    Sv = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    Ev = (u = Sv, i)=>{
        switch(i.type){
            case Op:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case xp:
                return {
                    ...u,
                    theme: i.payload
                };
            case Cp:
                return {
                    ...u,
                    enableSound: i.payload
                };
            default:
                return u;
        }
    };
    Mp = "NEXT";
    Dp = "PREV";
    Bp = "START_POS";
    wp = "FINAL_POS";
    To = "LOAD_PGN";
    Up = "JUMP_TO_MOVE";
    _v = "TOGGLE_ENGINE";
    Rv = "DISABLE_ENGINE";
    c2 = ()=>({
            type: Bp
        });
    o2 = ()=>({
            type: Dp
        });
    f2 = ()=>({
            type: Mp
        });
    s2 = ()=>({
            type: wp
        });
    d2 = ({ finalPos: u, moves: i, fens: o, fromToSquares: c, termination: f, result: s, blackPlayerName: h, whitePlayerName: m })=>({
            type: To,
            payload: {
                finalPos: u,
                moves: i,
                fens: o,
                fromToSquares: c,
                termination: f,
                result: s,
                blackPlayerName: h,
                whitePlayerName: m
            }
        });
    h2 = (u)=>({
            type: Up,
            payload: u
        });
    Tv = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    Nv = (u = Tv, i)=>{
        switch(i.type){
            case Mp:
                return u.currentMoveIndex === u.fenLength - 1 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex + 1
                };
            case Dp:
                return u.currentMoveIndex === 0 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex - 1
                };
            case Bp:
                return {
                    ...u,
                    currentMoveIndex: 0
                };
            case wp:
                return {
                    ...u,
                    currentMoveIndex: u.fenLength - 1
                };
            case Up:
                return {
                    ...u,
                    currentMoveIndex: i.payload
                };
            case To:
                return {
                    ...u,
                    finalFen: i.payload.finalPos,
                    fenLength: i.payload.fens.length,
                    currentMoveIndex: 0
                };
            case _v:
                return {
                    ...u,
                    engineEnabled: !u.engineEnabled
                };
            case Rv:
                return {
                    ...u,
                    engineEnabled: !1
                };
            default:
                return u;
        }
    };
    Av = {
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
    Ov = (u = Av, i)=>{
        switch(i.type){
            case To:
                return {
                    ...u,
                    finalFen: i.payload.finalPos,
                    moves: i.payload.moves,
                    fens: i.payload.fens,
                    fromToSquares: i.payload.fromToSquares,
                    termination: i.payload.termination,
                    result: i.payload.result,
                    blackPlayerName: i.payload.blackPlayerName,
                    whitePlayerName: i.payload.whitePlayerName
                };
            default:
                return u;
        }
    };
    xv = "TOGGLE_ENGINE";
    Cv = "SET_MULTIPV";
    Mv = "SET_MAX_DEPTH";
    Dv = "SET_AUTO_STOP_TIME";
    Bv = {
        enabled: !1,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    wv = (u = Bv, i)=>{
        switch(i.type){
            case xv:
                return {
                    ...u,
                    enabled: !u.enabled
                };
            case Cv:
                return {
                    ...u,
                    multiPV: i.payload
                };
            case Mv:
                return {
                    ...u,
                    maxDepth: i.payload
                };
            case Dv:
                return {
                    ...u,
                    autoStopTime: i.payload
                };
            default:
                return u;
        }
    };
    No = "RESET_BOARD";
    zp = "CLEAR_BOARD";
    Uv = "SET_BOARD_WITH_FEN";
    zv = "PUT_PIECE";
    Pv = "MOVE_PIECE";
    qv = "TOGGLE_CASTLING_PIECE";
    kv = (u)=>({
            type: No,
            payload: u
        });
    Pp = ()=>({
            type: No
        });
    jv = ()=>({
            type: zp
        });
    Hv = (u)=>({
            type: qv,
            payload: u
        });
    Ao = (u)=>{
        const i = new Ro;
        return i.load(u), i.board().map((f, s)=>f.map((h, m)=>({
                    id: h ? h.square : `${"abcdefgh"[m]}${8 - s}`,
                    piece: h ? {
                        type: h.type,
                        color: h.color
                    } : null
                })));
    };
    Lv = (u)=>u.split(" ")?.[1];
    Fh = {
        board: [
            ...pv
        ],
        currentFen: De.START_FEN,
        selectedPalettePiece: null,
        isFlipped: !1,
        playerToMove: De.WHITE,
        castlingFlags: {
            K: !0,
            Q: !0,
            k: !0,
            q: !0
        }
    };
    Qv = {
        board: [
            ...mv
        ],
        currentFen: De.CLEAR_FEN,
        selectedPalettePiece: null,
        isFlipped: !1,
        playerToMove: De.WHITE,
        castlingFlags: {
            K: !0,
            Q: !0,
            k: !0,
            q: !0
        }
    };
    Kv = (u = Fh, i)=>{
        switch(i.type){
            case No:
                return Fh;
            case zp:
                return Qv;
            case Uv:
                return {
                    ...u,
                    board: [
                        ...Ao(i.payload.fen)
                    ],
                    playerToMove: Lv(i.payload.fen)
                };
            case zv:
                return {
                    ...u,
                    board: Gv(u.board, i.payload.id, i.payload.type)
                };
            case Pv:
                return {
                    ...u,
                    board: Yv(u.board, i.payload.sourceSquareId, i.payload.destSquareId)
                };
            default:
                return u;
        }
    };
    Gv = (u, i, o)=>u.map((c)=>c.map((f)=>{
                if (f.id == i) return {
                    ...f,
                    piece: o
                };
            }));
    Yv = (u, i, o)=>{
        let c = null;
        return u.map((f)=>f.map((s)=>{
                if (s.id == i) return c = s.piece, {
                    ...s,
                    type: null
                };
                if (s.id == o) return {
                    ...s,
                    type: c ?? s.piece
                };
            }));
    };
    Vv = pp({
        game: yv,
        settings: Ev,
        analysis: Nv,
        pgn: Ov,
        engine: wv,
        boardeditor: Kv
    });
    Xv = {
        key: "root",
        storage: Wy,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    Zv = Hy(Xv, Vv);
    qp = Ty({
        reducer: Zv,
        middleware: (u)=>u({
                serializableCheck: {
                    ignoredActions: [
                        "persist/PERSIST"
                    ]
                }
            })
    });
    Vy(qp);
    const $v = "modulepreload", Jv = function(u) {
        return "/chess-frontend/" + u;
    }, Ih = {}, kp = function(i, o, c) {
        let f = Promise.resolve();
        if (o && o.length > 0) {
            document.getElementsByTagName("link");
            const h = document.querySelector("meta[property=csp-nonce]"), m = h?.nonce || h?.getAttribute("nonce");
            f = Promise.allSettled(o.map((p)=>{
                if (p = Jv(p), p in Ih) return;
                Ih[p] = !0;
                const v = p.endsWith(".css"), b = v ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${p}"]${b}`)) return;
                const R = document.createElement("link");
                if (R.rel = v ? "stylesheet" : $v, v || (R.as = "script"), R.crossOrigin = "", R.href = p, m && R.setAttribute("nonce", m), document.head.appendChild(R), v) return new Promise((S, A)=>{
                    R.addEventListener("load", S), R.addEventListener("error", ()=>A(new Error(`Unable to preload CSS for ${p}`)));
                });
            }));
        }
        function s(h) {
            const m = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (m.payload = h, window.dispatchEvent(m), !m.defaultPrevented) throw h;
        }
        return f.then((h)=>{
            for (const m of h || [])m.status === "rejected" && s(m.reason);
            return i().catch(s);
        });
    };
    var Ja = {}, ep;
    function Wv() {
        if (ep) return Ja;
        ep = 1, Object.defineProperty(Ja, "__esModule", {
            value: !0
        }), Ja.parse = h, Ja.serialize = v;
        const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, i = /^[\u0021-\u003A\u003C-\u007E]*$/, o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, c = /^[\u0020-\u003A\u003D-\u007E]*$/, f = Object.prototype.toString, s = (()=>{
            const S = function() {};
            return S.prototype = Object.create(null), S;
        })();
        function h(S, A) {
            const C = new s, w = S.length;
            if (w < 2) return C;
            const q = A?.decode || b;
            let U = 0;
            do {
                const H = S.indexOf("=", U);
                if (H === -1) break;
                const L = S.indexOf(";", U), V = L === -1 ? w : L;
                if (H > V) {
                    U = S.lastIndexOf(";", H - 1) + 1;
                    continue;
                }
                const K = m(S, U, H), F = p(S, H, K), Z = S.slice(K, F);
                if (C[Z] === void 0) {
                    let J = m(S, H + 1, V), te = p(S, V, J);
                    const Oe = q(S.slice(J, te));
                    C[Z] = Oe;
                }
                U = V + 1;
            }while (U < w);
            return C;
        }
        function m(S, A, C) {
            do {
                const w = S.charCodeAt(A);
                if (w !== 32 && w !== 9) return A;
            }while (++A < C);
            return C;
        }
        function p(S, A, C) {
            for(; A > C;){
                const w = S.charCodeAt(--A);
                if (w !== 32 && w !== 9) return A + 1;
            }
            return C;
        }
        function v(S, A, C) {
            const w = C?.encode || encodeURIComponent;
            if (!u.test(S)) throw new TypeError(`argument name is invalid: ${S}`);
            const q = w(A);
            if (!i.test(q)) throw new TypeError(`argument val is invalid: ${A}`);
            let U = S + "=" + q;
            if (!C) return U;
            if (C.maxAge !== void 0) {
                if (!Number.isInteger(C.maxAge)) throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);
                U += "; Max-Age=" + C.maxAge;
            }
            if (C.domain) {
                if (!o.test(C.domain)) throw new TypeError(`option domain is invalid: ${C.domain}`);
                U += "; Domain=" + C.domain;
            }
            if (C.path) {
                if (!c.test(C.path)) throw new TypeError(`option path is invalid: ${C.path}`);
                U += "; Path=" + C.path;
            }
            if (C.expires) {
                if (!R(C.expires) || !Number.isFinite(C.expires.valueOf())) throw new TypeError(`option expires is invalid: ${C.expires}`);
                U += "; Expires=" + C.expires.toUTCString();
            }
            if (C.httpOnly && (U += "; HttpOnly"), C.secure && (U += "; Secure"), C.partitioned && (U += "; Partitioned"), C.priority) switch(typeof C.priority == "string" ? C.priority.toLowerCase() : void 0){
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
                    throw new TypeError(`option priority is invalid: ${C.priority}`);
            }
            if (C.sameSite) switch(typeof C.sameSite == "string" ? C.sameSite.toLowerCase() : C.sameSite){
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
                    throw new TypeError(`option sameSite is invalid: ${C.sameSite}`);
            }
            return U;
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
            return f.call(S) === "[object Date]";
        }
        return Ja;
    }
    Wv();
    var tp = "popstate";
    function Fv(u = {}) {
        function i(f, s) {
            let { pathname: h = "/", search: m = "", hash: p = "" } = an(f.location.hash.substring(1));
            return !h.startsWith("/") && !h.startsWith(".") && (h = "/" + h), vo("", {
                pathname: h,
                search: m,
                hash: p
            }, s.state && s.state.usr || null, s.state && s.state.key || "default");
        }
        function o(f, s) {
            let h = f.document.querySelector("base"), m = "";
            if (h && h.getAttribute("href")) {
                let p = f.location.href, v = p.indexOf("#");
                m = v === -1 ? p : p.slice(0, v);
            }
            return m + "#" + (typeof s == "string" ? s : lu(s));
        }
        function c(f, s) {
            zt(f.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`);
        }
        return eg(i, o, c, u);
    }
    function Be(u, i) {
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
    function Iv() {
        return Math.random().toString(36).substring(2, 10);
    }
    function lp(u, i) {
        return {
            usr: u.state,
            key: u.key,
            idx: i
        };
    }
    function vo(u, i, o = null, c) {
        return {
            pathname: typeof u == "string" ? u : u.pathname,
            search: "",
            hash: "",
            ...typeof i == "string" ? an(i) : i,
            state: o,
            key: i && i.key || c || Iv()
        };
    }
    function lu({ pathname: u = "/", search: i = "", hash: o = "" }) {
        return i && i !== "?" && (u += i.charAt(0) === "?" ? i : "?" + i), o && o !== "#" && (u += o.charAt(0) === "#" ? o : "#" + o), u;
    }
    function an(u) {
        let i = {};
        if (u) {
            let o = u.indexOf("#");
            o >= 0 && (i.hash = u.substring(o), u = u.substring(0, o));
            let c = u.indexOf("?");
            c >= 0 && (i.search = u.substring(c), u = u.substring(0, c)), u && (i.pathname = u);
        }
        return i;
    }
    function eg(u, i, o, c = {}) {
        let { window: f = document.defaultView, v5Compat: s = !1 } = c, h = f.history, m = "POP", p = null, v = b();
        v == null && (v = 0, h.replaceState({
            ...h.state,
            idx: v
        }, ""));
        function b() {
            return (h.state || {
                idx: null
            }).idx;
        }
        function R() {
            m = "POP";
            let q = b(), U = q == null ? null : q - v;
            v = q, p && p({
                action: m,
                location: w.location,
                delta: U
            });
        }
        function S(q, U) {
            m = "PUSH";
            let H = vo(w.location, q, U);
            o && o(H, q), v = b() + 1;
            let L = lp(H, v), V = w.createHref(H);
            try {
                h.pushState(L, "", V);
            } catch (K) {
                if (K instanceof DOMException && K.name === "DataCloneError") throw K;
                f.location.assign(V);
            }
            s && p && p({
                action: m,
                location: w.location,
                delta: 1
            });
        }
        function A(q, U) {
            m = "REPLACE";
            let H = vo(w.location, q, U);
            o && o(H, q), v = b();
            let L = lp(H, v), V = w.createHref(H);
            h.replaceState(L, "", V), s && p && p({
                action: m,
                location: w.location,
                delta: 0
            });
        }
        function C(q) {
            let U = f.location.origin !== "null" ? f.location.origin : f.location.href, H = typeof q == "string" ? q : lu(q);
            return H = H.replace(/ $/, "%20"), Be(U, `No window.location.(origin|href) available to create URL for href: ${H}`), new URL(H, U);
        }
        let w = {
            get action () {
                return m;
            },
            get location () {
                return u(f, h);
            },
            listen (q) {
                if (p) throw new Error("A history only accepts one active listener");
                return f.addEventListener(tp, R), p = q, ()=>{
                    f.removeEventListener(tp, R), p = null;
                };
            },
            createHref (q) {
                return i(f, q);
            },
            createURL: C,
            encodeLocation (q) {
                let U = C(q);
                return {
                    pathname: U.pathname,
                    search: U.search,
                    hash: U.hash
                };
            },
            push: S,
            replace: A,
            go (q) {
                return h.go(q);
            }
        };
        return w;
    }
    function jp(u, i, o = "/") {
        return tg(u, i, o, !1);
    }
    function tg(u, i, o, c) {
        let f = typeof i == "string" ? an(i) : i, s = rl(f.pathname || "/", o);
        if (s == null) return null;
        let h = Hp(u);
        lg(h);
        let m = null;
        for(let p = 0; m == null && p < h.length; ++p){
            let v = hg(s);
            m = sg(h[p], v, c);
        }
        return m;
    }
    function Hp(u, i = [], o = [], c = "") {
        let f = (s, h, m)=>{
            let p = {
                relativePath: m === void 0 ? s.path || "" : m,
                caseSensitive: s.caseSensitive === !0,
                childrenIndex: h,
                route: s
            };
            p.relativePath.startsWith("/") && (Be(p.relativePath.startsWith(c), `Absolute route path "${p.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), p.relativePath = p.relativePath.slice(c.length));
            let v = il([
                c,
                p.relativePath
            ]), b = o.concat(p);
            s.children && s.children.length > 0 && (Be(s.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`), Hp(s.children, i, b, v)), !(s.path == null && !s.index) && i.push({
                path: v,
                score: og(v, s.index),
                routesMeta: b
            });
        };
        return u.forEach((s, h)=>{
            if (s.path === "" || !s.path?.includes("?")) f(s, h);
            else for (let m of Lp(s.path))f(s, h, m);
        }), i;
    }
    function Lp(u) {
        let i = u.split("/");
        if (i.length === 0) return [];
        let [o, ...c] = i, f = o.endsWith("?"), s = o.replace(/\?$/, "");
        if (c.length === 0) return f ? [
            s,
            ""
        ] : [
            s
        ];
        let h = Lp(c.join("/")), m = [];
        return m.push(...h.map((p)=>p === "" ? s : [
                s,
                p
            ].join("/"))), f && m.push(...h), m.map((p)=>u.startsWith("/") && p === "" ? "/" : p);
    }
    function lg(u) {
        u.sort((i, o)=>i.score !== o.score ? o.score - i.score : fg(i.routesMeta.map((c)=>c.childrenIndex), o.routesMeta.map((c)=>c.childrenIndex)));
    }
    var ng = /^:[\w-]+$/, ag = 3, ug = 2, ig = 1, rg = 10, cg = -2, np = (u)=>u === "*";
    function og(u, i) {
        let o = u.split("/"), c = o.length;
        return o.some(np) && (c += cg), i && (c += ug), o.filter((f)=>!np(f)).reduce((f, s)=>f + (ng.test(s) ? ag : s === "" ? ig : rg), c);
    }
    function fg(u, i) {
        return u.length === i.length && u.slice(0, -1).every((c, f)=>c === i[f]) ? u[u.length - 1] - i[i.length - 1] : 0;
    }
    function sg(u, i, o = !1) {
        let { routesMeta: c } = u, f = {}, s = "/", h = [];
        for(let m = 0; m < c.length; ++m){
            let p = c[m], v = m === c.length - 1, b = s === "/" ? i : i.slice(s.length) || "/", R = Bi({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: v
            }, b), S = p.route;
            if (!R && v && o && !c[c.length - 1].route.index && (R = Bi({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: !1
            }, b)), !R) return null;
            Object.assign(f, R.params), h.push({
                params: f,
                pathname: il([
                    s,
                    R.pathname
                ]),
                pathnameBase: vg(il([
                    s,
                    R.pathnameBase
                ])),
                route: S
            }), R.pathnameBase !== "/" && (s = il([
                s,
                R.pathnameBase
            ]));
        }
        return h;
    }
    function Bi(u, i) {
        typeof u == "string" && (u = {
            path: u,
            caseSensitive: !1,
            end: !0
        });
        let [o, c] = dg(u.path, u.caseSensitive, u.end), f = i.match(o);
        if (!f) return null;
        let s = f[0], h = s.replace(/(.)\/+$/, "$1"), m = f.slice(1);
        return {
            params: c.reduce((v, { paramName: b, isOptional: R }, S)=>{
                if (b === "*") {
                    let C = m[S] || "";
                    h = s.slice(0, s.length - C.length).replace(/(.)\/+$/, "$1");
                }
                const A = m[S];
                return R && !A ? v[b] = void 0 : v[b] = (A || "").replace(/%2F/g, "/"), v;
            }, {}),
            pathname: s,
            pathnameBase: h,
            pattern: u
        };
    }
    function dg(u, i = !1, o = !0) {
        zt(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`);
        let c = [], f = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (h, m, p)=>(c.push({
                paramName: m,
                isOptional: p != null
            }), p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return u.endsWith("*") ? (c.push({
            paramName: "*"
        }), f += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? f += "\\/*$" : u !== "" && u !== "/" && (f += "(?:(?=\\/|$))"), [
            new RegExp(f, i ? void 0 : "i"),
            c
        ];
    }
    function hg(u) {
        try {
            return u.split("/").map((i)=>decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
        } catch (i) {
            return zt(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`), u;
        }
    }
    function rl(u, i) {
        if (i === "/") return u;
        if (!u.toLowerCase().startsWith(i.toLowerCase())) return null;
        let o = i.endsWith("/") ? i.length - 1 : i.length, c = u.charAt(o);
        return c && c !== "/" ? null : u.slice(o) || "/";
    }
    function pg(u, i = "/") {
        let { pathname: o, search: c = "", hash: f = "" } = typeof u == "string" ? an(u) : u;
        return {
            pathname: o ? o.startsWith("/") ? o : mg(o, i) : i,
            search: gg(c),
            hash: bg(f)
        };
    }
    function mg(u, i) {
        let o = i.replace(/\/+$/, "").split("/");
        return u.split("/").forEach((f)=>{
            f === ".." ? o.length > 1 && o.pop() : f !== "." && o.push(f);
        }), o.length > 1 ? o.join("/") : "/";
    }
    function so(u, i, o, c) {
        return `Cannot include a '${u}' character in a manually specified \`to.${i}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function yg(u) {
        return u.filter((i, o)=>o === 0 || i.route.path && i.route.path.length > 0);
    }
    function Qp(u) {
        let i = yg(u);
        return i.map((o, c)=>c === i.length - 1 ? o.pathname : o.pathnameBase);
    }
    function Kp(u, i, o, c = !1) {
        let f;
        typeof u == "string" ? f = an(u) : (f = {
            ...u
        }, Be(!f.pathname || !f.pathname.includes("?"), so("?", "pathname", "search", f)), Be(!f.pathname || !f.pathname.includes("#"), so("#", "pathname", "hash", f)), Be(!f.search || !f.search.includes("#"), so("#", "search", "hash", f)));
        let s = u === "" || f.pathname === "", h = s ? "/" : f.pathname, m;
        if (h == null) m = o;
        else {
            let R = i.length - 1;
            if (!c && h.startsWith("..")) {
                let S = h.split("/");
                for(; S[0] === "..";)S.shift(), R -= 1;
                f.pathname = S.join("/");
            }
            m = R >= 0 ? i[R] : "/";
        }
        let p = pg(f, m), v = h && h !== "/" && h.endsWith("/"), b = (s || h === ".") && o.endsWith("/");
        return !p.pathname.endsWith("/") && (v || b) && (p.pathname += "/"), p;
    }
    var il = (u)=>u.join("/").replace(/\/\/+/g, "/"), vg = (u)=>u.replace(/\/+$/, "").replace(/^\/*/, "/"), gg = (u)=>!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, bg = (u)=>!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
    function Sg(u) {
        return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
    }
    var Gp = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(Gp);
    var Eg = [
        "GET",
        ...Gp
    ];
    new Set(Eg);
    var Zn = T.createContext(null);
    Zn.displayName = "DataRouter";
    var zi = T.createContext(null);
    zi.displayName = "DataRouterState";
    var Yp = T.createContext({
        isTransitioning: !1
    });
    Yp.displayName = "ViewTransition";
    var _g = T.createContext(new Map);
    _g.displayName = "Fetchers";
    var Rg = T.createContext(null);
    Rg.displayName = "Await";
    var Kt = T.createContext(null);
    Kt.displayName = "Navigation";
    var nu = T.createContext(null);
    nu.displayName = "Location";
    var cl = T.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    cl.displayName = "Route";
    var Oo = T.createContext(null);
    Oo.displayName = "RouteError";
    function Tg(u, { relative: i } = {}) {
        Be(au(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: o, navigator: c } = T.useContext(Kt), { hash: f, pathname: s, search: h } = uu(u, {
            relative: i
        }), m = s;
        return o !== "/" && (m = s === "/" ? o : il([
            o,
            s
        ])), c.createHref({
            pathname: m,
            search: h,
            hash: f
        });
    }
    function au() {
        return T.useContext(nu) != null;
    }
    function un() {
        return Be(au(), "useLocation() may be used only in the context of a <Router> component."), T.useContext(nu).location;
    }
    var Vp = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function Xp(u) {
        T.useContext(Kt).static || T.useLayoutEffect(u);
    }
    function Ng() {
        let { isDataRoute: u } = T.useContext(cl);
        return u ? kg() : Ag();
    }
    function Ag() {
        Be(au(), "useNavigate() may be used only in the context of a <Router> component.");
        let u = T.useContext(Zn), { basename: i, navigator: o } = T.useContext(Kt), { matches: c } = T.useContext(cl), { pathname: f } = un(), s = JSON.stringify(Qp(c)), h = T.useRef(!1);
        return Xp(()=>{
            h.current = !0;
        }), T.useCallback((p, v = {})=>{
            if (zt(h.current, Vp), !h.current) return;
            if (typeof p == "number") {
                o.go(p);
                return;
            }
            let b = Kp(p, JSON.parse(s), f, v.relative === "path");
            u == null && i !== "/" && (b.pathname = b.pathname === "/" ? i : il([
                i,
                b.pathname
            ])), (v.replace ? o.replace : o.push)(b, v.state, v);
        }, [
            i,
            o,
            s,
            f,
            u
        ]);
    }
    T.createContext(null);
    function uu(u, { relative: i } = {}) {
        let { matches: o } = T.useContext(cl), { pathname: c } = un(), f = JSON.stringify(Qp(o));
        return T.useMemo(()=>Kp(u, JSON.parse(f), c, i === "path"), [
            u,
            f,
            c,
            i
        ]);
    }
    function Og(u, i) {
        return Zp(u, i);
    }
    function Zp(u, i, o, c) {
        Be(au(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: f, static: s } = T.useContext(Kt), { matches: h } = T.useContext(cl), m = h[h.length - 1], p = m ? m.params : {}, v = m ? m.pathname : "/", b = m ? m.pathnameBase : "/", R = m && m.route;
        {
            let H = R && R.path || "";
            $p(v, !R || H.endsWith("*") || H.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H === "/" ? "*" : `${H}/*`}">.`);
        }
        let S = un(), A;
        if (i) {
            let H = typeof i == "string" ? an(i) : i;
            Be(b === "/" || H.pathname?.startsWith(b), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`), A = H;
        } else A = S;
        let C = A.pathname || "/", w = C;
        if (b !== "/") {
            let H = b.replace(/^\//, "").split("/");
            w = "/" + C.replace(/^\//, "").split("/").slice(H.length).join("/");
        }
        let q = !s && o && o.matches && o.matches.length > 0 ? o.matches : jp(u, {
            pathname: w
        });
        zt(R || q != null, `No routes matched location "${A.pathname}${A.search}${A.hash}" `), zt(q == null || q[q.length - 1].route.element !== void 0 || q[q.length - 1].route.Component !== void 0 || q[q.length - 1].route.lazy !== void 0, `Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let U = Bg(q && q.map((H)=>Object.assign({}, H, {
                params: Object.assign({}, p, H.params),
                pathname: il([
                    b,
                    f.encodeLocation ? f.encodeLocation(H.pathname).pathname : H.pathname
                ]),
                pathnameBase: H.pathnameBase === "/" ? b : il([
                    b,
                    f.encodeLocation ? f.encodeLocation(H.pathnameBase).pathname : H.pathnameBase
                ])
            })), h, o, c);
        return i && U ? T.createElement(nu.Provider, {
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
    function xg() {
        let u = qg(), i = Sg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), o = u instanceof Error ? u.stack : null, c = "rgba(200,200,200, 0.5)", f = {
            padding: "0.5rem",
            backgroundColor: c
        }, s = {
            padding: "2px 4px",
            backgroundColor: c
        }, h = null;
        return console.error("Error handled by React Router default ErrorBoundary:", u), h = T.createElement(T.Fragment, null, T.createElement("p", null, "💿 Hey developer 👋"), T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", T.createElement("code", {
            style: s
        }, "ErrorBoundary"), " or", " ", T.createElement("code", {
            style: s
        }, "errorElement"), " prop on your route.")), T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, i), o ? T.createElement("pre", {
            style: f
        }, o) : null, h);
    }
    var Cg = T.createElement(xg, null), Mg = class extends T.Component {
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
            return this.state.error !== void 0 ? T.createElement(cl.Provider, {
                value: this.props.routeContext
            }, T.createElement(Oo.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function Dg({ routeContext: u, match: i, children: o }) {
        let c = T.useContext(Zn);
        return c && c.static && c.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = i.route.id), T.createElement(cl.Provider, {
            value: u
        }, o);
    }
    function Bg(u, i = [], o = null, c = null) {
        if (u == null) {
            if (!o) return null;
            if (o.errors) u = o.matches;
            else if (i.length === 0 && !o.initialized && o.matches.length > 0) u = o.matches;
            else return null;
        }
        let f = u, s = o?.errors;
        if (s != null) {
            let p = f.findIndex((v)=>v.route.id && s?.[v.route.id] !== void 0);
            Be(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`), f = f.slice(0, Math.min(f.length, p + 1));
        }
        let h = !1, m = -1;
        if (o) for(let p = 0; p < f.length; p++){
            let v = f[p];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (m = p), v.route.id) {
                let { loaderData: b, errors: R } = o, S = v.route.loader && !b.hasOwnProperty(v.route.id) && (!R || R[v.route.id] === void 0);
                if (v.route.lazy || S) {
                    h = !0, m >= 0 ? f = f.slice(0, m + 1) : f = [
                        f[0]
                    ];
                    break;
                }
            }
        }
        return f.reduceRight((p, v, b)=>{
            let R, S = !1, A = null, C = null;
            o && (R = s && v.route.id ? s[v.route.id] : void 0, A = v.route.errorElement || Cg, h && (m < 0 && b === 0 ? ($p("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), S = !0, C = null) : m === b && (S = !0, C = v.route.hydrateFallbackElement || null)));
            let w = i.concat(f.slice(0, b + 1)), q = ()=>{
                let U;
                return R ? U = A : S ? U = C : v.route.Component ? U = T.createElement(v.route.Component, null) : v.route.element ? U = v.route.element : U = p, T.createElement(Dg, {
                    match: v,
                    routeContext: {
                        outlet: p,
                        matches: w,
                        isDataRoute: o != null
                    },
                    children: U
                });
            };
            return o && (v.route.ErrorBoundary || v.route.errorElement || b === 0) ? T.createElement(Mg, {
                location: o.location,
                revalidation: o.revalidation,
                component: A,
                error: R,
                children: q(),
                routeContext: {
                    outlet: null,
                    matches: w,
                    isDataRoute: !0
                }
            }) : q();
        }, null);
    }
    function xo(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function wg(u) {
        let i = T.useContext(Zn);
        return Be(i, xo(u)), i;
    }
    function Ug(u) {
        let i = T.useContext(zi);
        return Be(i, xo(u)), i;
    }
    function zg(u) {
        let i = T.useContext(cl);
        return Be(i, xo(u)), i;
    }
    function Co(u) {
        let i = zg(u), o = i.matches[i.matches.length - 1];
        return Be(o.route.id, `${u} can only be used on routes that contain a unique "id"`), o.route.id;
    }
    function Pg() {
        return Co("useRouteId");
    }
    function qg() {
        let u = T.useContext(Oo), i = Ug("useRouteError"), o = Co("useRouteError");
        return u !== void 0 ? u : i.errors?.[o];
    }
    function kg() {
        let { router: u } = wg("useNavigate"), i = Co("useNavigate"), o = T.useRef(!1);
        return Xp(()=>{
            o.current = !0;
        }), T.useCallback(async (f, s = {})=>{
            zt(o.current, Vp), o.current && (typeof f == "number" ? u.navigate(f) : await u.navigate(f, {
                fromRouteId: i,
                ...s
            }));
        }, [
            u,
            i
        ]);
    }
    var ap = {};
    function $p(u, i, o) {
        !i && !ap[u] && (ap[u] = !0, zt(!1, o));
    }
    T.memo(jg);
    function jg({ routes: u, future: i, state: o }) {
        return Zp(u, void 0, o, i);
    }
    function Vn(u) {
        Be(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function Hg({ basename: u = "/", children: i = null, location: o, navigationType: c = "POP", navigator: f, static: s = !1 }) {
        Be(!au(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let h = u.replace(/^\/*/, "/"), m = T.useMemo(()=>({
                basename: h,
                navigator: f,
                static: s,
                future: {}
            }), [
            h,
            f,
            s
        ]);
        typeof o == "string" && (o = an(o));
        let { pathname: p = "/", search: v = "", hash: b = "", state: R = null, key: S = "default" } = o, A = T.useMemo(()=>{
            let C = rl(p, h);
            return C == null ? null : {
                location: {
                    pathname: C,
                    search: v,
                    hash: b,
                    state: R,
                    key: S
                },
                navigationType: c
            };
        }, [
            h,
            p,
            v,
            b,
            R,
            S,
            c
        ]);
        return zt(A != null, `<Router basename="${h}"> is not able to match the URL "${p}${v}${b}" because it does not start with the basename, so the <Router> won't render anything.`), A == null ? null : T.createElement(Kt.Provider, {
            value: m
        }, T.createElement(nu.Provider, {
            children: i,
            value: A
        }));
    }
    function Lg({ children: u, location: i }) {
        return Og(go(u), i);
    }
    function go(u, i = []) {
        let o = [];
        return T.Children.forEach(u, (c, f)=>{
            if (!T.isValidElement(c)) return;
            let s = [
                ...i,
                f
            ];
            if (c.type === T.Fragment) {
                o.push.apply(o, go(c.props.children, s));
                return;
            }
            Be(c.type === Vn, `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Be(!c.props.index || !c.props.children, "An index route cannot have child routes.");
            let h = {
                id: c.props.id || s.join("-"),
                caseSensitive: c.props.caseSensitive,
                element: c.props.element,
                Component: c.props.Component,
                index: c.props.index,
                path: c.props.path,
                loader: c.props.loader,
                action: c.props.action,
                hydrateFallbackElement: c.props.hydrateFallbackElement,
                HydrateFallback: c.props.HydrateFallback,
                errorElement: c.props.errorElement,
                ErrorBoundary: c.props.ErrorBoundary,
                hasErrorBoundary: c.props.hasErrorBoundary === !0 || c.props.ErrorBoundary != null || c.props.errorElement != null,
                shouldRevalidate: c.props.shouldRevalidate,
                handle: c.props.handle,
                lazy: c.props.lazy
            };
            c.props.children && (h.children = go(c.props.children, s)), o.push(h);
        }), o;
    }
    var xi = "get", Ci = "application/x-www-form-urlencoded";
    function Pi(u) {
        return u != null && typeof u.tagName == "string";
    }
    function Qg(u) {
        return Pi(u) && u.tagName.toLowerCase() === "button";
    }
    function Kg(u) {
        return Pi(u) && u.tagName.toLowerCase() === "form";
    }
    function Gg(u) {
        return Pi(u) && u.tagName.toLowerCase() === "input";
    }
    function Yg(u) {
        return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
    }
    function Vg(u, i) {
        return u.button === 0 && (!i || i === "_self") && !Yg(u);
    }
    var Ni = null;
    function Xg() {
        if (Ni === null) try {
            new FormData(document.createElement("form"), 0), Ni = !1;
        } catch  {
            Ni = !0;
        }
        return Ni;
    }
    var Zg = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function ho(u) {
        return u != null && !Zg.has(u) ? (zt(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ci}"`), null) : u;
    }
    function $g(u, i) {
        let o, c, f, s, h;
        if (Kg(u)) {
            let m = u.getAttribute("action");
            c = m ? rl(m, i) : null, o = u.getAttribute("method") || xi, f = ho(u.getAttribute("enctype")) || Ci, s = new FormData(u);
        } else if (Qg(u) || Gg(u) && (u.type === "submit" || u.type === "image")) {
            let m = u.form;
            if (m == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let p = u.getAttribute("formaction") || m.getAttribute("action");
            if (c = p ? rl(p, i) : null, o = u.getAttribute("formmethod") || m.getAttribute("method") || xi, f = ho(u.getAttribute("formenctype")) || ho(m.getAttribute("enctype")) || Ci, s = new FormData(m, u), !Xg()) {
                let { name: v, type: b, value: R } = u;
                if (b === "image") {
                    let S = v ? `${v}.` : "";
                    s.append(`${S}x`, "0"), s.append(`${S}y`, "0");
                } else v && s.append(v, R);
            }
        } else {
            if (Pi(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            o = xi, c = null, f = Ci, h = u;
        }
        return s && f === "text/plain" && (h = s, s = void 0), {
            action: c,
            method: o.toLowerCase(),
            encType: f,
            formData: s,
            body: h
        };
    }
    function Mo(u, i) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(i);
    }
    async function Jg(u, i) {
        if (u.id in i) return i[u.id];
        try {
            let o = await import(u.module).then(async (m)=>{
                await m.__tla;
                return m;
            });
            return i[u.id] = o, o;
        } catch (o) {
            return console.error(`Error loading route module \`${u.module}\`, reloading page...`), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(()=>{});
        }
    }
    function Wg(u) {
        return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
    }
    async function Fg(u, i, o) {
        let c = await Promise.all(u.map(async (f)=>{
            let s = i.routes[f.route.id];
            if (s) {
                let h = await Jg(s, o);
                return h.links ? h.links() : [];
            }
            return [];
        }));
        return lb(c.flat(1).filter(Wg).filter((f)=>f.rel === "stylesheet" || f.rel === "preload").map((f)=>f.rel === "stylesheet" ? {
                ...f,
                rel: "prefetch",
                as: "style"
            } : {
                ...f,
                rel: "prefetch"
            }));
    }
    function up(u, i, o, c, f, s) {
        let h = (p, v)=>o[v] ? p.route.id !== o[v].route.id : !0, m = (p, v)=>o[v].pathname !== p.pathname || o[v].route.path?.endsWith("*") && o[v].params["*"] !== p.params["*"];
        return s === "assets" ? i.filter((p, v)=>h(p, v) || m(p, v)) : s === "data" ? i.filter((p, v)=>{
            let b = c.routes[p.route.id];
            if (!b || !b.hasLoader) return !1;
            if (h(p, v) || m(p, v)) return !0;
            if (p.route.shouldRevalidate) {
                let R = p.route.shouldRevalidate({
                    currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
                    currentParams: o[0]?.params || {},
                    nextUrl: new URL(u, window.origin),
                    nextParams: p.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof R == "boolean") return R;
            }
            return !0;
        }) : [];
    }
    function Ig(u, i, { includeHydrateFallback: o } = {}) {
        return eb(u.map((c)=>{
            let f = i.routes[c.route.id];
            if (!f) return [];
            let s = [
                f.module
            ];
            return f.clientActionModule && (s = s.concat(f.clientActionModule)), f.clientLoaderModule && (s = s.concat(f.clientLoaderModule)), o && f.hydrateFallbackModule && (s = s.concat(f.hydrateFallbackModule)), f.imports && (s = s.concat(f.imports)), s;
        }).flat(1));
    }
    function eb(u) {
        return [
            ...new Set(u)
        ];
    }
    function tb(u) {
        let i = {}, o = Object.keys(u).sort();
        for (let c of o)i[c] = u[c];
        return i;
    }
    function lb(u, i) {
        let o = new Set;
        return new Set(i), u.reduce((c, f)=>{
            let s = JSON.stringify(tb(f));
            return o.has(s) || (o.add(s), c.push({
                key: s,
                link: f
            })), c;
        }, []);
    }
    function nb(u, i) {
        let o = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
        return o.pathname === "/" ? o.pathname = "_root.data" : i && rl(o.pathname, i) === "/" ? o.pathname = `${i.replace(/\/$/, "")}/_root.data` : o.pathname = `${o.pathname.replace(/\/$/, "")}.data`, o;
    }
    function Jp() {
        let u = T.useContext(Zn);
        return Mo(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
    }
    function ab() {
        let u = T.useContext(zi);
        return Mo(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
    }
    var Do = T.createContext(void 0);
    Do.displayName = "FrameworkContext";
    function Wp() {
        let u = T.useContext(Do);
        return Mo(u, "You must render this element inside a <HydratedRouter> element"), u;
    }
    function ub(u, i) {
        let o = T.useContext(Do), [c, f] = T.useState(!1), [s, h] = T.useState(!1), { onFocus: m, onBlur: p, onMouseEnter: v, onMouseLeave: b, onTouchStart: R } = i, S = T.useRef(null);
        T.useEffect(()=>{
            if (u === "render" && h(!0), u === "viewport") {
                let w = (U)=>{
                    U.forEach((H)=>{
                        h(H.isIntersecting);
                    });
                }, q = new IntersectionObserver(w, {
                    threshold: .5
                });
                return S.current && q.observe(S.current), ()=>{
                    q.disconnect();
                };
            }
        }, [
            u
        ]), T.useEffect(()=>{
            if (c) {
                let w = setTimeout(()=>{
                    h(!0);
                }, 100);
                return ()=>{
                    clearTimeout(w);
                };
            }
        }, [
            c
        ]);
        let A = ()=>{
            f(!0);
        }, C = ()=>{
            f(!1), h(!1);
        };
        return o ? u !== "intent" ? [
            s,
            S,
            {}
        ] : [
            s,
            S,
            {
                onFocus: Wa(m, A),
                onBlur: Wa(p, C),
                onMouseEnter: Wa(v, A),
                onMouseLeave: Wa(b, C),
                onTouchStart: Wa(R, A)
            }
        ] : [
            !1,
            S,
            {}
        ];
    }
    function Wa(u, i) {
        return (o)=>{
            u && u(o), o.defaultPrevented || i(o);
        };
    }
    function ib({ page: u, ...i }) {
        let { router: o } = Jp(), c = T.useMemo(()=>jp(o.routes, u, o.basename), [
            o.routes,
            u,
            o.basename
        ]);
        return c ? T.createElement(cb, {
            page: u,
            matches: c,
            ...i
        }) : null;
    }
    function rb(u) {
        let { manifest: i, routeModules: o } = Wp(), [c, f] = T.useState([]);
        return T.useEffect(()=>{
            let s = !1;
            return Fg(u, i, o).then((h)=>{
                s || f(h);
            }), ()=>{
                s = !0;
            };
        }, [
            u,
            i,
            o
        ]), c;
    }
    function cb({ page: u, matches: i, ...o }) {
        let c = un(), { manifest: f, routeModules: s } = Wp(), { basename: h } = Jp(), { loaderData: m, matches: p } = ab(), v = T.useMemo(()=>up(u, i, p, f, c, "data"), [
            u,
            i,
            p,
            f,
            c
        ]), b = T.useMemo(()=>up(u, i, p, f, c, "assets"), [
            u,
            i,
            p,
            f,
            c
        ]), R = T.useMemo(()=>{
            if (u === c.pathname + c.search + c.hash) return [];
            let C = new Set, w = !1;
            if (i.forEach((U)=>{
                let H = f.routes[U.route.id];
                !H || !H.hasLoader || (!v.some((L)=>L.route.id === U.route.id) && U.route.id in m && s[U.route.id]?.shouldRevalidate || H.hasClientLoader ? w = !0 : C.add(U.route.id));
            }), C.size === 0) return [];
            let q = nb(u, h);
            return w && C.size > 0 && q.searchParams.set("_routes", i.filter((U)=>C.has(U.route.id)).map((U)=>U.route.id).join(",")), [
                q.pathname + q.search
            ];
        }, [
            h,
            m,
            c,
            f,
            v,
            i,
            u,
            s
        ]), S = T.useMemo(()=>Ig(b, f), [
            b,
            f
        ]), A = rb(b);
        return T.createElement(T.Fragment, null, R.map((C)=>T.createElement("link", {
                key: C,
                rel: "prefetch",
                as: "fetch",
                href: C,
                ...o
            })), S.map((C)=>T.createElement("link", {
                key: C,
                rel: "modulepreload",
                href: C,
                ...o
            })), A.map(({ key: C, link: w })=>T.createElement("link", {
                key: C,
                ...w
            })));
    }
    function ob(...u) {
        return (i)=>{
            u.forEach((o)=>{
                typeof o == "function" ? o(i) : o != null && (o.current = i);
            });
        };
    }
    var Fp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        Fp && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function fb({ basename: u, children: i, window: o }) {
        let c = T.useRef();
        c.current == null && (c.current = Fv({
            window: o,
            v5Compat: !0
        }));
        let f = c.current, [s, h] = T.useState({
            action: f.action,
            location: f.location
        }), m = T.useCallback((p)=>{
            T.startTransition(()=>h(p));
        }, [
            h
        ]);
        return T.useLayoutEffect(()=>f.listen(m), [
            f,
            m
        ]), T.createElement(Hg, {
            basename: u,
            children: i,
            location: s.location,
            navigationType: s.action,
            navigator: f
        });
    }
    var Ip = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Xn = T.forwardRef(function({ onClick: i, discover: o = "render", prefetch: c = "none", relative: f, reloadDocument: s, replace: h, state: m, target: p, to: v, preventScrollReset: b, viewTransition: R, ...S }, A) {
        let { basename: C } = T.useContext(Kt), w = typeof v == "string" && Ip.test(v), q, U = !1;
        if (typeof v == "string" && w && (q = v, Fp)) try {
            let te = new URL(window.location.href), Oe = v.startsWith("//") ? new URL(te.protocol + v) : new URL(v), ge = rl(Oe.pathname, C);
            Oe.origin === te.origin && ge != null ? v = ge + Oe.search + Oe.hash : U = !0;
        } catch  {
            zt(!1, `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let H = Tg(v, {
            relative: f
        }), [L, V, K] = ub(c, S), F = pb(v, {
            replace: h,
            state: m,
            target: p,
            preventScrollReset: b,
            relative: f,
            viewTransition: R
        });
        function Z(te) {
            i && i(te), te.defaultPrevented || F(te);
        }
        let J = T.createElement("a", {
            ...S,
            ...K,
            href: q || H,
            onClick: U || s ? i : Z,
            ref: ob(A, V),
            target: p,
            "data-discover": !w && o === "render" ? "true" : void 0
        });
        return L && !w ? T.createElement(T.Fragment, null, J, T.createElement(ib, {
            page: H
        })) : J;
    });
    Xn.displayName = "Link";
    var sb = T.forwardRef(function({ "aria-current": i = "page", caseSensitive: o = !1, className: c = "", end: f = !1, style: s, to: h, viewTransition: m, children: p, ...v }, b) {
        let R = uu(h, {
            relative: v.relative
        }), S = un(), A = T.useContext(zi), { navigator: C, basename: w } = T.useContext(Kt), q = A != null && bb(R) && m === !0, U = C.encodeLocation ? C.encodeLocation(R).pathname : R.pathname, H = S.pathname, L = A && A.navigation && A.navigation.location ? A.navigation.location.pathname : null;
        o || (H = H.toLowerCase(), L = L ? L.toLowerCase() : null, U = U.toLowerCase()), L && w && (L = rl(L, w) || L);
        const V = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
        let K = H === U || !f && H.startsWith(U) && H.charAt(V) === "/", F = L != null && (L === U || !f && L.startsWith(U) && L.charAt(U.length) === "/"), Z = {
            isActive: K,
            isPending: F,
            isTransitioning: q
        }, J = K ? i : void 0, te;
        typeof c == "function" ? te = c(Z) : te = [
            c,
            K ? "active" : null,
            F ? "pending" : null,
            q ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let Oe = typeof s == "function" ? s(Z) : s;
        return T.createElement(Xn, {
            ...v,
            "aria-current": J,
            className: te,
            ref: b,
            style: Oe,
            to: h,
            viewTransition: m
        }, typeof p == "function" ? p(Z) : p);
    });
    sb.displayName = "NavLink";
    var db = T.forwardRef(({ discover: u = "render", fetcherKey: i, navigate: o, reloadDocument: c, replace: f, state: s, method: h = xi, action: m, onSubmit: p, relative: v, preventScrollReset: b, viewTransition: R, ...S }, A)=>{
        let C = vb(), w = gb(m, {
            relative: v
        }), q = h.toLowerCase() === "get" ? "get" : "post", U = typeof m == "string" && Ip.test(m), H = (L)=>{
            if (p && p(L), L.defaultPrevented) return;
            L.preventDefault();
            let V = L.nativeEvent.submitter, K = V?.getAttribute("formmethod") || h;
            C(V || L.currentTarget, {
                fetcherKey: i,
                method: K,
                navigate: o,
                replace: f,
                state: s,
                relative: v,
                preventScrollReset: b,
                viewTransition: R
            });
        };
        return T.createElement("form", {
            ref: A,
            method: q,
            action: w,
            onSubmit: c ? p : H,
            ...S,
            "data-discover": !U && u === "render" ? "true" : void 0
        });
    });
    db.displayName = "Form";
    function hb(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function em(u) {
        let i = T.useContext(Zn);
        return Be(i, hb(u)), i;
    }
    function pb(u, { target: i, replace: o, state: c, preventScrollReset: f, relative: s, viewTransition: h } = {}) {
        let m = Ng(), p = un(), v = uu(u, {
            relative: s
        });
        return T.useCallback((b)=>{
            if (Vg(b, i)) {
                b.preventDefault();
                let R = o !== void 0 ? o : lu(p) === lu(v);
                m(u, {
                    replace: R,
                    state: c,
                    preventScrollReset: f,
                    relative: s,
                    viewTransition: h
                });
            }
        }, [
            p,
            m,
            v,
            o,
            c,
            i,
            u,
            f,
            s,
            h
        ]);
    }
    var mb = 0, yb = ()=>`__${String(++mb)}__`;
    function vb() {
        let { router: u } = em("useSubmit"), { basename: i } = T.useContext(Kt), o = Pg();
        return T.useCallback(async (c, f = {})=>{
            let { action: s, method: h, encType: m, formData: p, body: v } = $g(c, i);
            if (f.navigate === !1) {
                let b = f.fetcherKey || yb();
                await u.fetch(b, o, f.action || s, {
                    preventScrollReset: f.preventScrollReset,
                    formData: p,
                    body: v,
                    formMethod: f.method || h,
                    formEncType: f.encType || m,
                    flushSync: f.flushSync
                });
            } else await u.navigate(f.action || s, {
                preventScrollReset: f.preventScrollReset,
                formData: p,
                body: v,
                formMethod: f.method || h,
                formEncType: f.encType || m,
                replace: f.replace,
                state: f.state,
                fromRouteId: o,
                flushSync: f.flushSync,
                viewTransition: f.viewTransition
            });
        }, [
            u,
            i,
            o
        ]);
    }
    function gb(u, { relative: i } = {}) {
        let { basename: o } = T.useContext(Kt), c = T.useContext(cl);
        Be(c, "useFormAction must be used inside a RouteContext");
        let [f] = c.matches.slice(-1), s = {
            ...uu(u || ".", {
                relative: i
            })
        }, h = un();
        if (u == null) {
            s.search = h.search;
            let m = new URLSearchParams(s.search), p = m.getAll("index");
            if (p.some((b)=>b === "")) {
                m.delete("index"), p.filter((R)=>R).forEach((R)=>m.append("index", R));
                let b = m.toString();
                s.search = b ? `?${b}` : "";
            }
        }
        return (!u || u === ".") && f.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (s.pathname = s.pathname === "/" ? o : il([
            o,
            s.pathname
        ])), lu(s);
    }
    function bb(u, i = {}) {
        let o = T.useContext(Yp);
        Be(o != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: c } = em("useViewTransitionState"), f = uu(u, {
            relative: i.relative
        });
        if (!o.isTransitioning) return !1;
        let s = rl(o.currentLocation.pathname, c) || o.currentLocation.pathname, h = rl(o.nextLocation.pathname, c) || o.nextLocation.pathname;
        return Bi(f.pathname, h) != null || Bi(f.pathname, s) != null;
    }
    new TextEncoder;
    const Sb = T.createContext(), Eb = ({ children: u })=>{
        const i = (b, R)=>{
            const S = localStorage.getItem(b);
            return S !== null ? JSON.parse(S) : R;
        }, [o, c] = T.useState(()=>i(De.THEME_KEY, De.THEME)), [f, s] = T.useState(()=>i(De.ENABLE_SOUND_KEY, De.ENABLE_SOUND)), [h, m] = T.useState(()=>i(De.TIMER_DURATION_KEY, De.TIMER_DURATION)), [p, v] = T.useState(()=>i(De.IS_FLIPPED_KEY, De.IS_FLIPPED));
        return T.useEffect(()=>localStorage.setItem(De.THEME_KEY, JSON.stringify(o)), [
            o
        ]), T.useEffect(()=>localStorage.setItem(De.ENABLE_SOUND_KEY, JSON.stringify(f)), [
            f
        ]), T.useEffect(()=>localStorage.setItem(De.TIMER_DURATION_KEY, JSON.stringify(h)), [
            h
        ]), T.useEffect(()=>localStorage.setItem(De.IS_FLIPPED_KEY, JSON.stringify(p)), [
            p
        ]), B.jsx(Sb.Provider, {
            value: {
                theme: o,
                setTheme: c,
                enableSound: f,
                setEnableSound: s,
                timerDuration: h,
                setTimerDuration: m,
                isFlipped: p,
                setIsFlipped: v
            },
            children: u
        });
    };
    _b = function(u, i = "lite", o = 8e3) {
        const c = T.useRef(null), f = T.useRef(null), s = T.useRef(null), h = T.useRef(null), m = T.useRef(!1), p = T.useRef([]), v = T.useRef(!0), b = T.useRef(!1), R = T.useRef(!1), S = T.useCallback(()=>{
            if (!(b.current || !c.current)) {
                for(b.current = !0; p.current.length > 0;){
                    const Z = p.current.findIndex((te)=>te.type === "stop"), J = Z >= 0 ? p.current.splice(Z, 1)[0] : p.current.shift();
                    J && c.current.postMessage(J.cmd);
                }
                b.current = !1;
            }
        }, []), A = T.useCallback((Z, J)=>{
            p.current.push({
                type: Z,
                cmd: J
            }), S();
        }, [
            S
        ]), C = T.useCallback(()=>{
            c.current || (i === "lite" ? c.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : c.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), c.current.postMessage("uci"), console.log("Initializing worker ..."), c.current.onmessage = (Z)=>{
                const J = Z.data;
                if (u && u(J), typeof J == "string") {
                    if (J === "readyok" || J.startsWith("bestmove")) v.current = !0;
                    else if (J.startsWith("info") && J.includes("score")) {
                        const te = J.match(/score (cp|mate) (-?\d+)/);
                        if (te) {
                            const Oe = te[1], ge = parseInt(te[2], 10), pe = Oe === "cp" ? ge / 100 : ge > 0 ? 10 : -10;
                            f.current && (f.current(pe), f.current = null);
                        }
                    }
                }
            }, c.current.onerror = (Z)=>{
                console.error("Error with Stockfish worker:", Z);
            });
        }, [
            u,
            i
        ]), w = T.useCallback(()=>{
            c.current && c.current.terminate(), i === "lite" ? c.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : c.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), c.current.postMessage("uci"), console.log("Intialising worker ..."), c.current.onmessage = (Z)=>{
                const J = Z.data;
                if (u && u(J), typeof J == "string") {
                    if (J === "readyok" || J.startsWith("bestmove")) v.current = !0;
                    else if (J.startsWith("info") && J.includes("score")) {
                        const te = J.match(/score (cp|mate) (-?\d+)/);
                        if (te) {
                            const Oe = te[1], ge = parseInt(te[2], 10), pe = Oe === "cp" ? ge / 100 : ge > 0 ? 10 : -10;
                            f.current && (f.current(pe), f.current = null);
                        }
                    }
                }
            }, c.current.onerror = (Z)=>{
                console.error("Error with Stockfish worker:", Z);
            };
        }, [
            u,
            i
        ]), q = T.useCallback((Z)=>{
            c.current && A("normal", Z);
        }, []), U = T.useCallback((Z)=>{
            Z.forEach((J)=>{
                A("normal", `setoption name ${J.name} value ${J.value}`);
            });
        }, [
            q
        ]), H = T.useCallback((Z, J = [])=>{
            let te = `position fen ${Z}`;
            if (J.length > 0) {
                const Oe = J.join(" ");
                te += ` moves ${Oe}`;
            }
            A("normal", te);
        }, [
            q
        ]), L = T.useCallback((Z)=>{
            console.log("Attempt stopSearch..", Z), c.current && (console.log("try stopSearch ...", Z), m.current && (console.log("Interrupting current search...", Z), A("stop", "stop"), m.current = !1, s.current && (clearTimeout(s.current), s.current = null)));
        }, []), V = T.useCallback((Z)=>{
            if (!R.current) {
                console.warn("Engine disabled. Search not started.");
                return;
            }
            c.current || (console.log("Starting engine on demand..."), C()), clearTimeout(s.current), L("pre startSearch"), h.current && clearTimeout(h.current), h.current = setTimeout(()=>{
                m.current = !0, A("normal", `position fen ${Z}`), A("normal", "go infinite"), s.current = setTimeout(()=>{
                    L("startSearch timer expire");
                }, o);
            }, 50);
        }, [
            o,
            L
        ]), K = T.useCallback(()=>{
            c.current && (c.current.terminate(), c.current = null), m.current = !1, v.current = !0, s.current && (clearTimeout(s.current), s.current = null);
        }, []), F = T.useCallback((Z)=>{
            Z ? console.log("Permission granted: engine allowed to start if needed") : (console.log("Permission revoked: stopping engine"), L("permission revoked"), K());
        }, [
            L,
            K
        ]);
        return T.useEffect(()=>()=>{
                K();
            }, []), {
            initEngine: w,
            setOptions: U,
            setFen: H,
            startSearch: V,
            stopSearch: L,
            terminateEngine: K,
            syncEnabledState: F
        };
    };
    let tm, Rb, am;
    tm = T.createContext();
    p2 = ()=>T.useContext(tm);
    Rb = ({ children: u })=>{
        const i = T.useRef(null), o = T.useCallback((s)=>{
            i.current && i.current(s);
        }, []), c = _b(o), f = T.useCallback((s)=>{
            i.current = s;
        }, []);
        return B.jsx(tm.Provider, {
            value: {
                ...c,
                setOnMessage: f
            },
            children: u
        });
    };
    lm = Qt.memo(()=>{
        const u = Ui(), { theme: i, enableSound: o } = eu((v)=>v.settings), [c, f] = T.useState(!1), s = T.useRef(null), h = ()=>f((v)=>!v);
        T.useEffect(()=>{
            const v = (b)=>{
                s.current && !s.current.contains(b.target) && f(!1);
            };
            return document.addEventListener("mousedown", v), ()=>document.removeEventListener("mousedown", v);
        }, []);
        const m = (v)=>{
            u(gv(v.target.value));
        }, p = (v)=>{
            u(bv(v.target.checked));
        };
        return console.log("render setting"), B.jsxs("div", {
            className: "settings-container",
            ref: s,
            children: [
                B.jsxs("button", {
                    id: "settings-button",
                    className: "action-button",
                    onClick: h,
                    children: [
                        "⚙️ ",
                        B.jsx("span", {
                            className: "settings-label",
                            children: " Settings "
                        })
                    ]
                }),
                c && B.jsxs("div", {
                    className: "settings-dropdown",
                    children: [
                        B.jsxs("div", {
                            className: "dropdown-item",
                            children: [
                                B.jsx("label", {
                                    htmlFor: "themeSelect",
                                    children: "Theme"
                                }),
                                B.jsxs("select", {
                                    id: "themeSelect",
                                    value: i,
                                    onChange: m,
                                    children: [
                                        B.jsx("option", {
                                            value: "default",
                                            children: "Default"
                                        }),
                                        B.jsx("option", {
                                            value: "classic",
                                            children: "Green"
                                        }),
                                        B.jsx("option", {
                                            value: "marble",
                                            children: "Marble"
                                        }),
                                        B.jsx("option", {
                                            value: "wood",
                                            children: "Wood"
                                        }),
                                        B.jsx("option", {
                                            value: "dark",
                                            children: "Dark"
                                        })
                                    ]
                                })
                            ]
                        }),
                        B.jsxs("div", {
                            className: "checkbox-item",
                            children: [
                                B.jsx("label", {
                                    htmlFor: "soundToggle",
                                    children: "Sound"
                                }),
                                B.jsx("input", {
                                    type: "checkbox",
                                    id: "soundToggle",
                                    checked: o,
                                    onChange: p
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    });
    nm = ()=>{
        const [u, i] = T.useState(document.body.classList.contains("dark-theme")), o = ()=>{
            document.body.classList.toggle("dark-theme"), i(!u);
        }, c = ()=>{
            const s = new Date().getHours();
            return s < 6 || s > 18;
        };
        return T.useEffect(()=>{
            c() != u && o();
        }, []), B.jsx("button", {
            onClick: o,
            className: "theme-toggle-btn",
            children: u ? "☀️" : "🌙"
        });
    };
    am = ({ labelText: u, toggle: i, handleToggle: o })=>B.jsxs("div", {
            className: "toggle-container",
            children: [
                B.jsx("span", {
                    className: "toggle-label",
                    children: u
                }),
                B.jsxs("label", {
                    className: "switch",
                    children: [
                        B.jsx("input", {
                            type: "checkbox",
                            checked: i,
                            onChange: o
                        }),
                        B.jsx("span", {
                            className: "slider"
                        })
                    ]
                })
            ]
        });
    function um({ playerToMove: u, setPlayerToMove: i }) {
        const o = (c)=>{
            i(c);
        };
        return B.jsxs("div", {
            className: "move-toggle",
            children: [
                B.jsx("button", {
                    className: `move-option ${u === "w" ? "active" : ""}`,
                    onClick: ()=>o("w"),
                    children: "White"
                }),
                B.jsx("button", {
                    className: `move-option ${u === "b" ? "active" : ""}`,
                    onClick: ()=>o("b"),
                    children: "Black"
                })
            ]
        });
    }
    const im = Qt.memo(({ onSubmit: u })=>{
        const [i, o] = T.useState(!1), [c, f] = T.useState(""), s = ()=>o(!0), h = ()=>{
            o(!1), f("");
        }, m = (v)=>{
            v.target.classList.contains("fen-popup-overlay") && h();
        }, p = (v)=>{
            v.preventDefault(), u(c), h();
        };
        return console.log("^ render fenInputPopup"), B.jsxs(B.Fragment, {
            children: [
                B.jsx("button", {
                    className: "action-button",
                    onClick: s,
                    children: "Set FEN"
                }),
                i && B.jsx("div", {
                    className: "fen-popup-overlay",
                    onClick: m,
                    children: B.jsxs("div", {
                        className: "fen-popup",
                        children: [
                            B.jsx("h5", {
                                children: "Setup board from FEN "
                            }),
                            B.jsx("button", {
                                className: "fen-close",
                                onClick: h,
                                children: "×"
                            }),
                            B.jsxs("form", {
                                onSubmit: p,
                                className: "fen-input-form",
                                children: [
                                    B.jsx("input", {
                                        type: "text",
                                        value: c,
                                        onChange: (v)=>f(v.target.value),
                                        placeholder: "Enter FEN",
                                        className: "fen-input"
                                    }),
                                    B.jsx("div", {
                                        className: "fen-actions",
                                        children: B.jsx("button", {
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
    }), rm = ({ currentFen: u, isValid: i })=>{
        const o = ()=>{
            navigator.clipboard.writeText(u), alert("FEN copied to clipboard!");
        };
        return B.jsxs("div", {
            className: "fen-container",
            children: [
                B.jsx("div", {
                    id: "fen-display",
                    className: "fen-display",
                    children: u
                }),
                i ? B.jsx("div", {
                    className: "circle-tick",
                    children: "✔"
                }) : B.jsx("div", {
                    className: "circle-cross",
                    children: "✖"
                }),
                B.jsx("button", {
                    onClick: o,
                    className: "copy-button",
                    children: B.jsxs("svg", {
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
                            B.jsx("rect", {
                                x: "3",
                                y: "3",
                                width: "14",
                                height: "14",
                                rx: "2",
                                ry: "2",
                                fill: "#f5f5f5",
                                stroke: "#333333"
                            }),
                            B.jsx("rect", {
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
    }, Bo = (u)=>{
        const i = u[0].charCodeAt(0) - 97, o = u[1].charCodeAt(0) - 49;
        return (i + o) % 2 === 0 ? "dark" : "light";
    }, cm = Qt.memo(({ messages: u, isValid: i })=>B.jsxs("div", {
            className: "notice-board",
            children: [
                B.jsxs("div", {
                    className: `notice-header ${i ? "legal" : "isIllegal"}`,
                    children: [
                        "Board setup is ",
                        i ? "" : "not",
                        " valid."
                    ]
                }),
                u.map((o)=>o.text != null && o.text !== "" && B.jsx("div", {
                        className: `message ${o.type}`,
                        children: o.text
                    }, o.text))
            ]
        })), Tb = (u)=>{
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
        const o = u.split(" ");
        if (o.length === 0) return {
            isValid: !1,
            msg: ""
        };
        const c = o[2], f = o[0].split("/");
        if (f.length == 0) return {
            isValid: !1,
            msg: ""
        };
        let s = 0, h = 0;
        const m = new Map([]);
        for(let S = 0; S < 8; S++){
            const A = f[S];
            let C = 0;
            for(let w = 0; w < A.length; w++){
                const q = Number(A[w]);
                switch(C += isNaN(q) ? 1 : q, A[w]){
                    case "k":
                        S === 0 && C === 5 && m.set("e8", A[w]), s += 1;
                        break;
                    case "K":
                        S === 7 && C === 5 && m.set("e1", A[w]), h += 1;
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
                        S === 0 && w === 0 ? m.set("a8", A[w]) : S === 0 && w === A.length - 1 && m.set("h8", A[w]);
                        break;
                    case "R":
                        S === 7 && w === 0 ? m.set("a1", A[w]) : S === 7 && w === A.length - 1 && m.set("h1", A[w]);
                        break;
                }
            }
        }
        if (s !== 1) return {
            isValid: !1,
            msg: "There should be exactly one black king."
        };
        if (h !== 1) return {
            isValid: !1,
            msg: "There should be exactly one white king."
        };
        for(let S = 0; S < c.length; S++)switch(c[S]){
            case "K":
                if (!m.has("e1") || m.get("e1") !== "K") return {
                    isValid: !1,
                    msg: "white castling is not possible, king is not at e1."
                };
                if (!m.has("h1") || m.get("h1") !== "R") return {
                    isValid: !1,
                    msg: "white short castling is not possible, rook is not at h1"
                };
                break;
            case "Q":
                if (!m.has("e1") || m.get("e1") !== "K") return {
                    isValid: !1,
                    msg: "white castling is not possible, king is not at e1."
                };
                if (!m.has("a1") || m.get("a1") !== "R") return {
                    isValid: !1,
                    msg: "white long castling is not possible, rook is not at a1"
                };
                break;
            case "k":
                if (!m.has("e8") || m.get("e8") !== "k") return {
                    isValid: !1,
                    msg: "black castling is not possible, king is not at e8."
                };
                if (!m.has("h8") || m.get("h8") !== "r") return {
                    isValid: !1,
                    msg: "black short castling is not possible, rook is not at h8"
                };
                break;
            case "q":
                if (!m.has("e8") || m.get("e8") !== "k") return {
                    isValid: !1,
                    msg: "black castling is not possible, king is not at e8."
                };
                if (!m.has("a8") || m.get("a8") !== "r") return {
                    isValid: !1,
                    msg: "black long castling is not possible, rook is not at a8"
                };
                break;
        }
        const p = o[1], v = Nb(u);
        return new Ro(v).inCheck() ? {
            isValid: !1,
            msg: `${p === "w" ? "white" : "black"} to move but ${p === "w" ? "black" : "white"} was already in check and did not defend king`
        } : {
            isValid: !0,
            msg: ""
        };
    };
    function Nb(u) {
        const i = u.split(" ");
        return i[1] = i[1] === "w" ? "b" : "w", i.join(" ");
    }
    const ip = {
        type: De.ERASER,
        name: "eraserImage",
        color: ""
    }, Ab = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    }, rp = ()=>{
        const [u, i] = T.useState([]), [o, c] = T.useState(null), [f, s] = T.useState(!1), [h, m] = T.useState("w"), [p, v] = T.useState(!0), [b, R] = T.useState(!0), [S, A] = T.useState(!0), [C, w] = T.useState(!0), q = T.useRef(0), U = T.useRef(""), [H, L] = T.useState(!1), [V, K] = T.useState(""), F = [
            {
                label: "White King-Side",
                state: p,
                setState: v
            },
            {
                label: "White Queen-Side",
                state: b,
                setState: R
            },
            {
                label: "Black King-Side",
                state: S,
                setState: A
            },
            {
                label: "Black Queen-Side",
                state: C,
                setState: w
            }
        ];
        T.useEffect(()=>{
            J();
        }, []);
        const Z = ()=>{
            const ge = u.map((pe)=>pe.map((et)=>({
                        ...et,
                        piece: null
                    })));
            i(ge);
        }, J = ()=>{
            m("w"), v(!0), R(!0), A(!0), w(!0), cp(De.START_FEN, i);
        }, te = T.useCallback((ge, pe)=>{
            cp(ge, pe);
        }), Oe = T.useCallback((ge = 0, pe = 1)=>{
            const et = "-";
            let Ze = "";
            const je = (p ? "K" : "") + (b ? "Q" : "") + (S ? "k" : "") + (C ? "q" : "");
            if (u.length === 0) return "";
            const z = u.map((G)=>xb(G));
            return Ze += z.join("/"), Ze += ` ${h} ${je === "" ? "-" : je} ${et} ${ge} ${pe}`, Ze;
        });
        return console.log("--- BoardEditor rendered", q.current), q.current += 1, T.useEffect(()=>{
            const ge = Oe(), { isValid: pe, msg: et } = Tb(ge);
            L((Ze)=>Ze !== pe ? pe : Ze), K((Ze)=>Ze !== et ? et : Ze), U.current = ge;
        }, [
            Oe,
            u
        ]), B.jsxs("div", {
            className: "main-container",
            children: [
                B.jsx("div", {
                    className: "top-container",
                    children: B.jsxs("nav", {
                        className: "top-bar",
                        children: [
                            B.jsx("button", {
                                onClick: Z,
                                className: "action-button",
                                children: "Clear"
                            }),
                            B.jsx("button", {
                                onClick: J,
                                className: "action-button",
                                children: "Reset"
                            }),
                            B.jsx("button", {
                                onClick: ()=>{
                                    s(!f);
                                },
                                className: "action-button",
                                children: "Flip"
                            }),
                            B.jsx(im, {
                                onSubmit: te
                            }),
                            B.jsx(nm, {}),
                            B.jsx(lm, {})
                        ]
                    })
                }),
                B.jsxs("div", {
                    className: "middle-container",
                    children: [
                        B.jsx("div", {
                            className: "left-menu-bar"
                        }),
                        B.jsxs("div", {
                            className: "fen-chessboard-container",
                            children: [
                                B.jsx(rm, {
                                    currentFen: U.current,
                                    isValid: H
                                }),
                                B.jsxs("div", {
                                    className: "chessboard-container",
                                    children: [
                                        B.jsx(wb, {
                                            board: u,
                                            isFlipped: f,
                                            selectedPalleteItem: o,
                                            setBoard: i
                                        }),
                                        B.jsx(Ub, {
                                            selectedPalleteItem: o,
                                            setselectedPalleteItem: c
                                        }),
                                        B.jsxs("div", {
                                            className: "castling",
                                            children: [
                                                B.jsxs("div", {
                                                    className: "toggle-container",
                                                    children: [
                                                        B.jsx("span", {
                                                            children: "To Move : "
                                                        }),
                                                        B.jsx(um, {
                                                            playerToMove: h,
                                                            setPlayerToMove: m
                                                        })
                                                    ]
                                                }),
                                                F.map(({ label: ge, state: pe, setState: et })=>B.jsx(am, {
                                                        labelText: ge,
                                                        toggle: pe,
                                                        handleToggle: ()=>{
                                                            et(!pe);
                                                        }
                                                    }, ge)),
                                                B.jsx(cm, {
                                                    messages: [
                                                        {
                                                            type: H ? "ok" : "error",
                                                            text: V
                                                        }
                                                    ],
                                                    isValid: H
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
    }, om = (u, i)=>{
        u.dataTransfer.setData("text", i);
    }, Ob = (u, i)=>{
        const o = {
            p: "pawn",
            n: "knight",
            b: "bishop",
            r: "rook",
            q: "queen",
            k: "king"
        };
        return B.jsx("img", {
            className: "pieceimg",
            id: `${i}-${u.type}`,
            src: `pieces/${u.color}_${o[u.type]}.png`,
            alt: `${u.color} ${u.type}`,
            draggable: !0,
            "data-type": u.type,
            "data-color": u.color,
            "data-square": i,
            onDragStart: (c)=>om(c, `${i}-${u.type}`)
        }, i);
    }, xb = (u)=>{
        let i = "", o = 0;
        for(let c = 0; c < 8; c++)u[c].piece == null && o++, u[c].piece != null ? (o > 0 && (i += `${o}`), o = 0, i += u[c].piece.color === "w" ? u[c].piece.type?.toUpperCase() : u[c].piece.type) : c == 7 && o > 0 && (i += `${o}`);
        return i;
    }, cp = (u, i)=>{
        i(Ao(u));
    }, Cb = (u)=>{
        u.preventDefault();
    }, Mb = (u, i, o, c)=>{
        if (!o) return;
        const f = u.map((s)=>s.map((h)=>h.id === i ? o.type === De.ERASER ? {
                    ...h,
                    piece: null
                } : {
                    ...h,
                    piece: {
                        type: o.name,
                        color: o.color
                    }
                } : h));
        c(f);
    }, Db = (u, i, o, c)=>{
        u.preventDefault();
        const f = o.map((s)=>s.map((h)=>h.id === i ? {
                    ...h,
                    piece: null
                } : h));
        c(f);
    }, Bb = (u, i, o, c)=>{
        u.preventDefault();
        const f = u.dataTransfer.getData("text"), s = document.getElementById(f), h = o.map((m)=>m.map((p)=>p.id === i ? {
                    ...p,
                    piece: {
                        type: s.dataset.type,
                        color: s.dataset.color
                    }
                } : p.id === s.dataset.square ? {
                    ...p,
                    piece: null
                } : p));
        c(h);
    }, wb = Qt.memo(({ board: u, isFlipped: i, selectedPalleteItem: o, setBoard: c })=>{
        const f = i ? [
            ...u
        ].reverse().map((s)=>[
                ...s
            ].reverse()) : u;
        return console.log("* render board"), B.jsx("div", {
            id: "chessboard",
            children: f.map((s, h)=>s.map((m, p)=>{
                    const v = i ? h + 1 : 7 - h + 1, b = i ? "hgfedcba"[p] : "abcdefgh"[p];
                    return B.jsxs("div", {
                        className: `square ${Bo(m.id)}`,
                        onDragOver: Cb,
                        onClick: ()=>Mb(u, m.id, o, c),
                        onDrop: (R)=>Bb(R, m.id, u, c),
                        onContextMenu: (R)=>Db(R, m.id, u, c),
                        children: [
                            p === 0 && B.jsx("div", {
                                className: "rank-label",
                                children: v
                            }),
                            h === 7 && B.jsx("div", {
                                className: "file-label",
                                children: b
                            }),
                            m.piece && Ob(m.piece, m.id)
                        ]
                    }, m.id);
                }))
        });
    }), op = ({ item: u, selectedPalleteItem: i, setselectedPalleteItem: o })=>{
        i != null && u.type == i.type && u.name === i.name && u.color === i.color ? o(null) : o(u);
    }, Ub = Qt.memo(({ selectedPalleteItem: u, setselectedPalleteItem: i })=>{
        const o = [
            "p",
            "r",
            "n",
            "b",
            "q",
            "k"
        ];
        return console.log("+ render palette"), B.jsxs("div", {
            className: "palette",
            children: [
                [
                    "w",
                    "b"
                ].map((c)=>o.map((f)=>B.jsx("img", {
                            id: `palette-${c}-${f}`,
                            src: `pieces/${c}_${Ab[f]}.png`,
                            alt: `${c} ${f}`,
                            draggable: !0,
                            "data-type": f,
                            "data-color": c,
                            "data-square": "palette",
                            onClick: ()=>{
                                op({
                                    item: {
                                        type: De.CHESS_PIECE,
                                        name: f,
                                        color: c
                                    },
                                    selectedPalleteItem: u,
                                    setselectedPalleteItem: i
                                });
                            },
                            onDragStart: (s)=>om(s, `palette-${c}-${f}`),
                            className: `palette-piece ${u?.type === De.CHESS_PIECE && u?.name === f && u?.color === c ? "selected" : ""}`,
                            style: {
                                order: c == "w" ? o.indexOf(f) : o.indexOf(f) + 7
                            }
                        }, `${c}-${f}`))),
                B.jsx("img", {
                    "data-square": "palette",
                    src: "assets/eraser.png",
                    style: {
                        order: 6
                    },
                    onClick: ()=>{
                        op({
                            item: ip,
                            selectedPalleteItem: u,
                            setselectedPalleteItem: i
                        });
                    },
                    className: `palette-piece eraser ${u?.type === ip.type ? "selected" : ""}`
                })
            ]
        });
    }), fm = Qt.memo(({ handleFenSubmit: u })=>{
        const i = Ui();
        return console.log("BoardEditorTopContainer rendered"), fm.whyrendered = !0, B.jsx("div", {
            className: "top-container",
            children: B.jsxs("nav", {
                className: "top-bar",
                children: [
                    B.jsx("button", {
                        onClick: ()=>{
                            i(jv());
                        },
                        className: "action-button",
                        children: "Clear"
                    }),
                    B.jsx("button", {
                        onClick: ()=>{
                            i(Pp());
                        },
                        className: "action-button",
                        children: "Reset"
                    }),
                    B.jsx("button", {
                        onClick: ()=>{
                            i(vv());
                        },
                        className: "action-button",
                        children: "Flip"
                    }),
                    B.jsx(im, {
                        onSubmit: u
                    }),
                    B.jsx(lm, {}),
                    B.jsx(nm, {})
                ]
            })
        });
    }), zb = ({ isValidFen: u, fenErrorMsg: i })=>{
        const { playerToMove: o, castlingFlags: c } = eu((h)=>h.boardeditor), f = Ui();
        console.log("CastlingFlags rendered", c, o);
        const s = [
            {
                flag: "K",
                label: "White King-Side",
                state: c.K
            },
            {
                flag: "Q",
                label: "White Queen-Side",
                state: c.Q
            },
            {
                flag: "k",
                label: "Black King-Side",
                state: c.k
            },
            {
                flag: "q",
                label: "Black Queen-Side",
                state: c.q
            }
        ];
        return B.jsxs("div", {
            className: "castling",
            children: [
                B.jsxs("div", {
                    className: "toggle-container",
                    children: [
                        B.jsx("span", {
                            children: "To Move : "
                        }),
                        B.jsx(um, {
                            playerToMove: o,
                            setPlayerToMove: ()=>{
                                f(kv(o === "w" ? "b" : "w"));
                            }
                        })
                    ]
                }),
                s.map(({ flag: h, label: m, state: p })=>B.jsx(am, {
                        labelText: m,
                        toggle: p,
                        handleToggle: ()=>{
                            f(Hv(h));
                        }
                    }, m)),
                B.jsx(cm, {
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
    }, Pb = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    }, qb = ()=>{
        const [u, i] = T.useState([]), [o, c] = T.useState(null), { isFlipped: f } = eu((S)=>S.boardeditor), s = T.useRef(0), h = T.useRef(""), [m, p] = T.useState(!1), { playerToMove: v, CastlingFlags: b } = eu((S)=>S.boardeditor), R = Ui();
        return T.useEffect(()=>{
            R(Pp());
        }, []), T.useCallback((S = 0, A = 1)=>{
            const C = "-";
            let w = "";
            const q = (b.K ? "K" : "") + (b.Q ? "Q" : "") + (b.k ? "k" : "") + (b.q ? "q" : "");
            if (u.length === 0) return "";
            const U = u.map((H)=>jb(H));
            return w += U.join("/"), w += ` ${v} ${q === "" ? "-" : q} ${C} ${S} ${A}`, w;
        }), console.log("--- BoardEditor rendered", s.current), s.current += 1, B.jsxs("div", {
            className: "middle-container",
            children: [
                B.jsx("div", {
                    className: "left-menu-bar"
                }),
                B.jsxs("div", {
                    className: "fen-chessboard-container",
                    children: [
                        B.jsx(rm, {
                            currentFen: h.current,
                            isValid: m
                        }),
                        B.jsxs("div", {
                            className: "chessboard-container",
                            children: [
                                B.jsx(Gb, {
                                    board: u,
                                    isFlipped: f,
                                    selectedPalletePiece: o,
                                    setBoard: i
                                }),
                                B.jsx(Vb, {
                                    selectedPalletePiece: o,
                                    setSelectedPalletePiece: c
                                }),
                                B.jsx(zb, {})
                            ]
                        })
                    ]
                })
            ]
        });
    }, sm = (u, i)=>{
        u.dataTransfer.setData("text", i);
    }, kb = (u, i)=>{
        const o = {
            p: "pawn",
            n: "knight",
            b: "bishop",
            r: "rook",
            q: "queen",
            k: "king"
        };
        return B.jsx("img", {
            className: "pieceimg",
            id: `${i}-${u.type}`,
            src: `pieces/${u.color}_${o[u.type]}.png`,
            alt: `${u.color} ${u.type}`,
            draggable: !0,
            "data-type": u.type,
            "data-color": u.color,
            "data-square": i,
            onDragStart: (c)=>sm(c, `${i}-${u.type}`)
        }, i);
    }, jb = (u)=>{
        let i = "", o = 0;
        for(let c = 0; c < 8; c++)u[c].piece == null && o++, u[c].piece != null ? (o > 0 && (i += `${o}`), o = 0, i += u[c].piece.color === "w" ? u[c].piece.type.toUpperCase() : u[c].piece.type) : c == 7 && o > 0 && (i += `${o}`);
        return i;
    }, Hb = (u)=>{
        u.preventDefault();
    }, Lb = (u, i, o, c)=>{
        if (!o) return;
        const f = u.map((s)=>s.map((h)=>h.id === i ? {
                    ...h,
                    piece: o
                } : h));
        c(f);
    }, Qb = (u, i, o, c)=>{
        u.preventDefault();
        const f = o.map((s)=>s.map((h)=>h.id === i ? {
                    ...h,
                    piece: null
                } : h));
        c(f);
    }, Kb = (u, i, o, c)=>{
        u.preventDefault();
        const f = u.dataTransfer.getData("text"), s = document.getElementById(f), h = o.map((m)=>m.map((p)=>p.id === i ? {
                    ...p,
                    piece: {
                        type: s.dataset.type,
                        color: s.dataset.color
                    }
                } : p.id === s.dataset.square ? {
                    ...p,
                    piece: null
                } : p));
        c(h);
    }, Gb = Qt.memo(({ board: u, isFlipped: i, selectedPalletePiece: o, setBoard: c })=>{
        const f = i ? [
            ...u
        ].reverse().map((s)=>[
                ...s
            ].reverse()) : u;
        return console.log("* render board"), B.jsx("div", {
            id: "chessboard",
            children: f.map((s, h)=>s.map((m, p)=>{
                    const v = i ? h + 1 : 7 - h + 1, b = i ? "hgfedcba"[p] : "abcdefgh"[p];
                    return B.jsxs("div", {
                        className: `square ${Bo(m.id)}`,
                        onDragOver: Hb,
                        onClick: ()=>Lb(u, m.id, o, c),
                        onDrop: (R)=>Kb(R, m.id, u, c),
                        onContextMenu: (R)=>Qb(R, m.id, u, c),
                        children: [
                            p === 0 && B.jsx("div", {
                                className: "rank-label",
                                children: v
                            }),
                            h === 7 && B.jsx("div", {
                                className: "file-label",
                                children: b
                            }),
                            m.piece && kb(m.piece, m.id)
                        ]
                    }, m.id);
                }))
        });
    }), Yb = (u, i, o, c)=>{
        o != null && u == o.type && i == o.color ? c(null) : c({
            type: u,
            color: i
        });
    }, Vb = Qt.memo(({ selectedPalletePiece: u, setSelectedPalletePiece: i })=>{
        const o = [
            "p",
            "r",
            "n",
            "b",
            "q",
            "k"
        ];
        return console.log("+ render palette"), B.jsx("div", {
            className: "palette",
            children: [
                "w",
                "b"
            ].map((c)=>o.map((f)=>B.jsx("img", {
                        id: `palette-${c}-${f}`,
                        src: `pieces/${c}_${Pb[f]}.png`,
                        alt: `${c} ${f}`,
                        draggable: !0,
                        "data-type": f,
                        "data-color": c,
                        "data-square": "palette",
                        onClick: ()=>{
                            Yb(f, c, u, i);
                        },
                        onDragStart: (s)=>sm(s, `palette-${c}-${f}`),
                        className: `palette-piece ${u?.type === f && u?.color === c ? "selected" : ""}`
                    }, `${c}-${f}`)))
        });
    }), Xb = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    }, Zb = ()=>{
        const { board: u } = eu((c)=>c.boardeditor), i = T.useRef(0), o = T.useCallback((c, f)=>{
            Jb(c, f);
        });
        return console.log("--- BoardEditorPAGE rendered", i.current), i.current += 1, B.jsxs("div", {
            className: "main-container",
            children: [
                B.jsx(fm, {
                    handleFenSubmit: o
                }),
                B.jsx(qb, {})
            ]
        });
    }, dm = (u, i)=>{
        u.dataTransfer.setData("text", i);
    }, $b = (u, i)=>{
        const o = {
            p: "pawn",
            n: "knight",
            b: "bishop",
            r: "rook",
            q: "queen",
            k: "king"
        };
        return B.jsx("img", {
            className: "pieceimg",
            id: `${i}-${u.type}`,
            src: `pieces/${u.color}_${o[u.type]}.png`,
            alt: `${u.color} ${u.type}`,
            draggable: !0,
            "data-type": u.type,
            "data-color": u.color,
            "data-square": i,
            onDragStart: (c)=>dm(c, `${i}-${u.type}`)
        }, i);
    }, Jb = (u, i)=>{
        i(Ao(u));
    }, Wb = (u)=>{
        u.preventDefault();
    }, Fb = (u, i, o, c)=>{
        if (!o) return;
        const f = u.map((s)=>s.map((h)=>h.id === i ? {
                    ...h,
                    piece: o
                } : h));
        c(f);
    }, Ib = (u, i, o, c)=>{
        u.preventDefault();
        const f = o.map((s)=>s.map((h)=>h.id === i ? {
                    ...h,
                    piece: null
                } : h));
        c(f);
    }, e2 = (u, i, o, c)=>{
        u.preventDefault();
        const f = u.dataTransfer.getData("text"), s = document.getElementById(f), h = o.map((m)=>m.map((p)=>p.id === i ? {
                    ...p,
                    piece: {
                        type: s.dataset.type,
                        color: s.dataset.color
                    }
                } : p.id === s.dataset.square ? {
                    ...p,
                    piece: null
                } : p));
        c(h);
    };
    Qt.memo(({ board: u, isFlipped: i, selectedPalletePiece: o, setBoard: c })=>{
        const f = i ? [
            ...u
        ].reverse().map((s)=>[
                ...s
            ].reverse()) : u;
        return console.log("* render board"), B.jsx("div", {
            id: "chessboard",
            children: f.map((s, h)=>s.map((m, p)=>{
                    const v = i ? h + 1 : 7 - h + 1, b = i ? "hgfedcba"[p] : "abcdefgh"[p];
                    return B.jsxs("div", {
                        className: `square ${Bo(m.id)}`,
                        onDragOver: Wb,
                        onClick: ()=>Fb(u, m.id, o, c),
                        onDrop: (R)=>e2(R, m.id, u, c),
                        onContextMenu: (R)=>Ib(R, m.id, u, c),
                        children: [
                            p === 0 && B.jsx("div", {
                                className: "rank-label",
                                children: v
                            }),
                            h === 7 && B.jsx("div", {
                                className: "file-label",
                                children: b
                            }),
                            m.piece && $b(m.piece, m.id)
                        ]
                    }, m.id);
                }))
        });
    });
    const t2 = (u, i, o, c)=>{
        o != null && u == o.type && i == o.color ? c(null) : c({
            type: u,
            color: i
        });
    };
    Qt.memo(({ selectedPalletePiece: u, setSelectedPalletePiece: i })=>{
        const o = [
            "p",
            "r",
            "n",
            "b",
            "q",
            "k"
        ];
        return console.log("+ render palette"), B.jsx("div", {
            className: "palette",
            children: [
                "w",
                "b"
            ].map((c)=>o.map((f)=>B.jsx("img", {
                        id: `palette-${c}-${f}`,
                        src: `pieces/${c}_${Xb[f]}.png`,
                        alt: `${c} ${f}`,
                        draggable: !0,
                        "data-type": f,
                        "data-color": c,
                        "data-square": "palette",
                        onClick: ()=>{
                            t2(f, c, u, i);
                        },
                        onDragStart: (s)=>dm(s, `palette-${c}-${f}`),
                        className: `palette-piece ${u?.type === f && u?.color === c ? "selected" : ""}`
                    }, `${c}-${f}`)))
        });
    });
    const l2 = T.lazy(()=>kp(()=>import("./ChessGame-SUbu5zC5.js"), __vite__mapDeps([0,1,2,3]))), n2 = T.lazy(()=>kp(()=>import("./AnalysisGame-Ddy6nT0n.js"), __vite__mapDeps([4,1,2,5]))), a2 = ()=>B.jsx(Eb, {
            children: B.jsxs(fb, {
                children: [
                    B.jsxs("nav", {
                        className: "routes",
                        children: [
                            B.jsx(Xn, {
                                to: "/boardeditor",
                                className: "action-button no-decoration",
                                children: "Board Editor"
                            }),
                            B.jsx(Xn, {
                                to: "/analysis",
                                className: "action-button no-decoration",
                                children: "Analyse Game"
                            }),
                            B.jsx(Xn, {
                                to: "/gameplay",
                                className: "action-button no-decoration",
                                children: "Play Game"
                            }),
                            B.jsx(Xn, {
                                to: "/reduxboardeditor",
                                className: "action-button no-decoration",
                                children: "Redux Board Editor"
                            })
                        ]
                    }),
                    B.jsx(T.Suspense, {
                        fallback: B.jsx("div", {
                            className: "loading-screen",
                            children: "Loading..."
                        }),
                        children: B.jsxs(Lg, {
                            children: [
                                B.jsx(Vn, {
                                    path: "/analysis",
                                    element: B.jsx(Rb, {
                                        children: B.jsx(n2, {})
                                    })
                                }),
                                B.jsx(Vn, {
                                    path: "/gameplay",
                                    element: B.jsx(l2, {})
                                }),
                                B.jsx(Vn, {
                                    path: "/boardeditor",
                                    element: B.jsx(rp, {})
                                }),
                                B.jsx(Vn, {
                                    path: "/reduxboardeditor",
                                    element: B.jsx(Zb, {})
                                }),
                                B.jsx(Vn, {
                                    path: "*",
                                    element: B.jsx(rp, {})
                                }),
                                " "
                            ]
                        })
                    })
                ]
            })
        });
    G0.createRoot(document.getElementById("root")).render(B.jsx(ry, {
        store: qp,
        children: B.jsx(a2, {})
    }));
})();
export { Ro as C, nm as D, Qt as R, lm as S, eu as a, i2 as b, De as c, c2 as d, s2 as e, vv as f, h2 as g, _b as h, p2 as i, B as j, fp as k, d2 as l, u2 as m, f2 as n, qp as o, o2 as p, T as r, r2 as s, Ui as u, __tla };
