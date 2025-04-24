const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChessGame-kHdkFMdX.js","assets/helpers-BTFKRZXY.js","assets/helpers-CX52Veyb.css","assets/ChessGame-DhAK7FyC.css","assets/AnalysisGame-B7vGAFQ-.js","assets/AnalysisGame-Tf-ih67V.css"])))=>i.map(i=>d[i]);
let Sf, ib, np, ub, J1, Mb, Qe, Bb, zb, Db, Pb, nb, Hb, Q, lp, qb, xb, Ub, Mp, wb, T, Cb, V1;
let __tla = (async ()=>{
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);
        new MutationObserver((o)=>{
            for (const d of o)if (d.type === "childList") for (const y of d.addedNodes)y.tagName === "LINK" && y.rel === "modulepreload" && c(y);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function f(o) {
            const d = {};
            return o.integrity && (d.integrity = o.integrity), o.referrerPolicy && (d.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? d.credentials = "include" : o.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d;
        }
        function c(o) {
            if (o.ep) return;
            o.ep = !0;
            const d = f(o);
            fetch(o.href, d);
        }
    })();
    lp = function(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
    };
    var Jc = {
        exports: {}
    }, Ka = {};
    var Sh;
    function v1() {
        if (Sh) return Ka;
        Sh = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
        function f(c, o, d) {
            var y = null;
            if (d !== void 0 && (y = "" + d), o.key !== void 0 && (y = "" + o.key), "key" in o) {
                d = {};
                for(var m in o)m !== "key" && (d[m] = o[m]);
            } else d = o;
            return o = d.ref, {
                $$typeof: u,
                type: c,
                key: y,
                ref: o !== void 0 ? o : null,
                props: d
            };
        }
        return Ka.Fragment = r, Ka.jsx = f, Ka.jsxs = f, Ka;
    }
    var Eh;
    function g1() {
        return Eh || (Eh = 1, Jc.exports = v1()), Jc.exports;
    }
    let $c, re;
    Q = g1();
    $c = {
        exports: {}
    };
    re = {};
    var _h;
    function b1() {
        if (_h) return re;
        _h = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), y = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), R = Symbol.iterator;
        function b(E) {
            return E === null || typeof E != "object" ? null : (E = R && E[R] || E["@@iterator"], typeof E == "function" ? E : null);
        }
        var O = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, M = Object.assign, B = {};
        function q(E, j, X) {
            this.props = E, this.context = j, this.refs = B, this.updater = X || O;
        }
        q.prototype.isReactComponent = {}, q.prototype.setState = function(E, j) {
            if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, E, j, "setState");
        }, q.prototype.forceUpdate = function(E) {
            this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        };
        function w() {}
        w.prototype = q.prototype;
        function L(E, j, X) {
            this.props = E, this.context = j, this.refs = B, this.updater = X || O;
        }
        var k = L.prototype = new w;
        k.constructor = L, M(k, q.prototype), k.isPureReactComponent = !0;
        var V = Array.isArray, K = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, F = Object.prototype.hasOwnProperty;
        function Z(E, j, X, Y, I, pe) {
            return X = pe.ref, {
                $$typeof: u,
                type: E,
                key: j,
                ref: X !== void 0 ? X : null,
                props: pe
            };
        }
        function $(E, j) {
            return Z(E.type, j, void 0, void 0, void 0, E.props);
        }
        function te(E) {
            return typeof E == "object" && E !== null && E.$$typeof === u;
        }
        function Ne(E) {
            var j = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + E.replace(/[=:]/g, function(X) {
                return j[X];
            });
        }
        var ye = /\/+/g;
        function ge(E, j) {
            return typeof E == "object" && E !== null && E.key != null ? Ne("" + E.key) : j.toString(36);
        }
        function nt() {}
        function Dt(E) {
            switch(E.status){
                case "fulfilled":
                    return E.value;
                case "rejected":
                    throw E.reason;
                default:
                    switch(typeof E.status == "string" ? E.then(nt, nt) : (E.status = "pending", E.then(function(j) {
                        E.status === "pending" && (E.status = "fulfilled", E.value = j);
                    }, function(j) {
                        E.status === "pending" && (E.status = "rejected", E.reason = j);
                    })), E.status){
                        case "fulfilled":
                            return E.value;
                        case "rejected":
                            throw E.reason;
                    }
            }
            throw E;
        }
        function He(E, j, X, Y, I) {
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
                            return ie = E._init, He(ie(E._payload), j, X, Y, I);
                    }
            }
            if (ie) return I = I(E), ie = Y === "" ? "." + ge(E, 0) : Y, V(I) ? (X = "", ie != null && (X = ie.replace(ye, "$&/") + "/"), He(I, j, X, "", function(cl) {
                return cl;
            })) : I != null && (te(I) && (I = $(I, X + (I.key == null || E && E.key === I.key ? "" : ("" + I.key).replace(ye, "$&/") + "/") + ie)), j.push(I)), 1;
            ie = 0;
            var st = Y === "" ? "." : Y + ":";
            if (V(E)) for(var xe = 0; xe < E.length; xe++)Y = E[xe], pe = st + ge(Y, xe), ie += He(Y, j, X, pe, I);
            else if (xe = b(E), typeof xe == "function") for(E = xe.call(E), xe = 0; !(Y = E.next()).done;)Y = Y.value, pe = st + ge(Y, xe++), ie += He(Y, j, X, pe, I);
            else if (pe === "object") {
                if (typeof E.then == "function") return He(Dt(E), j, X, Y, I);
                throw j = String(E), Error("Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ie;
        }
        function U(E, j, X) {
            if (E == null) return E;
            var Y = [], I = 0;
            return He(E, Y, "", "", function(pe) {
                return j.call(X, pe, I++);
            }), Y;
        }
        function G(E) {
            if (E._status === -1) {
                var j = E._result;
                j = j(), j.then(function(X) {
                    (E._status === 0 || E._status === -1) && (E._status = 1, E._result = X);
                }, function(X) {
                    (E._status === 0 || E._status === -1) && (E._status = 2, E._result = X);
                }), E._status === -1 && (E._status = 0, E._result = j);
            }
            if (E._status === 1) return E._result.default;
            throw E._result;
        }
        var ne = typeof reportError == "function" ? reportError : function(E) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var j = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                    error: E
                });
                if (!window.dispatchEvent(j)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", E);
                return;
            }
            console.error(E);
        };
        function Te() {}
        return re.Children = {
            map: U,
            forEach: function(E, j, X) {
                U(E, function() {
                    j.apply(this, arguments);
                }, X);
            },
            count: function(E) {
                var j = 0;
                return U(E, function() {
                    j++;
                }), j;
            },
            toArray: function(E) {
                return U(E, function(j) {
                    return j;
                }) || [];
            },
            only: function(E) {
                if (!te(E)) throw Error("React.Children.only expected to receive a single React element child.");
                return E;
            }
        }, re.Component = q, re.Fragment = f, re.Profiler = o, re.PureComponent = L, re.StrictMode = c, re.Suspense = h, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, re.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(E) {
                return K.H.useMemoCache(E);
            }
        }, re.cache = function(E) {
            return function() {
                return E.apply(null, arguments);
            };
        }, re.cloneElement = function(E, j, X) {
            if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
            var Y = M({}, E.props), I = E.key, pe = void 0;
            if (j != null) for(ie in j.ref !== void 0 && (pe = void 0), j.key !== void 0 && (I = "" + j.key), j)!F.call(j, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && j.ref === void 0 || (Y[ie] = j[ie]);
            var ie = arguments.length - 2;
            if (ie === 1) Y.children = X;
            else if (1 < ie) {
                for(var st = Array(ie), xe = 0; xe < ie; xe++)st[xe] = arguments[xe + 2];
                Y.children = st;
            }
            return Z(E.type, I, void 0, void 0, pe, Y);
        }, re.createContext = function(E) {
            return E = {
                $$typeof: y,
                _currentValue: E,
                _currentValue2: E,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, E.Provider = E, E.Consumer = {
                $$typeof: d,
                _context: E
            }, E;
        }, re.createElement = function(E, j, X) {
            var Y, I = {}, pe = null;
            if (j != null) for(Y in j.key !== void 0 && (pe = "" + j.key), j)F.call(j, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (I[Y] = j[Y]);
            var ie = arguments.length - 2;
            if (ie === 1) I.children = X;
            else if (1 < ie) {
                for(var st = Array(ie), xe = 0; xe < ie; xe++)st[xe] = arguments[xe + 2];
                I.children = st;
            }
            if (E && E.defaultProps) for(Y in ie = E.defaultProps, ie)I[Y] === void 0 && (I[Y] = ie[Y]);
            return Z(E, pe, void 0, void 0, null, I);
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
                $$typeof: S,
                _payload: {
                    _status: -1,
                    _result: E
                },
                _init: G
            };
        }, re.memo = function(E, j) {
            return {
                $$typeof: v,
                type: E,
                compare: j === void 0 ? null : j
            };
        }, re.startTransition = function(E) {
            var j = K.T, X = {};
            K.T = X;
            try {
                var Y = E(), I = K.S;
                I !== null && I(X, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Te, ne);
            } catch (pe) {
                ne(pe);
            } finally{
                K.T = j;
            }
        }, re.unstable_useCacheRefresh = function() {
            return K.H.useCacheRefresh();
        }, re.use = function(E) {
            return K.H.use(E);
        }, re.useActionState = function(E, j, X) {
            return K.H.useActionState(E, j, X);
        }, re.useCallback = function(E, j) {
            return K.H.useCallback(E, j);
        }, re.useContext = function(E) {
            return K.H.useContext(E);
        }, re.useDebugValue = function() {}, re.useDeferredValue = function(E, j) {
            return K.H.useDeferredValue(E, j);
        }, re.useEffect = function(E, j, X) {
            var Y = K.H;
            if (typeof X == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return Y.useEffect(E, j);
        }, re.useId = function() {
            return K.H.useId();
        }, re.useImperativeHandle = function(E, j, X) {
            return K.H.useImperativeHandle(E, j, X);
        }, re.useInsertionEffect = function(E, j) {
            return K.H.useInsertionEffect(E, j);
        }, re.useLayoutEffect = function(E, j) {
            return K.H.useLayoutEffect(E, j);
        }, re.useMemo = function(E, j) {
            return K.H.useMemo(E, j);
        }, re.useOptimistic = function(E, j) {
            return K.H.useOptimistic(E, j);
        }, re.useReducer = function(E, j, X) {
            return K.H.useReducer(E, j, X);
        }, re.useRef = function(E) {
            return K.H.useRef(E);
        }, re.useState = function(E) {
            return K.H.useState(E);
        }, re.useSyncExternalStore = function(E, j, X) {
            return K.H.useSyncExternalStore(E, j, X);
        }, re.useTransition = function() {
            return K.H.useTransition();
        }, re.version = "19.1.0", re;
    }
    var Rh;
    function Di() {
        return Rh || (Rh = 1, $c.exports = b1()), $c.exports;
    }
    T = Di();
    np = lp(T);
    var Wc = {
        exports: {}
    }, Ga = {}, Fc = {
        exports: {}
    }, Ic = {};
    var Th;
    function S1() {
        return Th || (Th = 1, function(u) {
            function r(U, G) {
                var ne = U.length;
                U.push(G);
                e: for(; 0 < ne;){
                    var Te = ne - 1 >>> 1, E = U[Te];
                    if (0 < o(E, G)) U[Te] = G, U[ne] = E, ne = Te;
                    else break e;
                }
            }
            function f(U) {
                return U.length === 0 ? null : U[0];
            }
            function c(U) {
                if (U.length === 0) return null;
                var G = U[0], ne = U.pop();
                if (ne !== G) {
                    U[0] = ne;
                    e: for(var Te = 0, E = U.length, j = E >>> 1; Te < j;){
                        var X = 2 * (Te + 1) - 1, Y = U[X], I = X + 1, pe = U[I];
                        if (0 > o(Y, ne)) I < E && 0 > o(pe, Y) ? (U[Te] = pe, U[I] = ne, Te = I) : (U[Te] = Y, U[X] = ne, Te = X);
                        else if (I < E && 0 > o(pe, ne)) U[Te] = pe, U[I] = ne, Te = I;
                        else break e;
                    }
                }
                return G;
            }
            function o(U, G) {
                var ne = U.sortIndex - G.sortIndex;
                return ne !== 0 ? ne : U.id - G.id;
            }
            if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var d = performance;
                u.unstable_now = function() {
                    return d.now();
                };
            } else {
                var y = Date, m = y.now();
                u.unstable_now = function() {
                    return y.now() - m;
                };
            }
            var h = [], v = [], S = 1, R = null, b = 3, O = !1, M = !1, B = !1, q = !1, w = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
            function V(U) {
                for(var G = f(v); G !== null;){
                    if (G.callback === null) c(v);
                    else if (G.startTime <= U) c(v), G.sortIndex = G.expirationTime, r(h, G);
                    else break;
                    G = f(v);
                }
            }
            function K(U) {
                if (B = !1, V(U), !M) if (f(h) !== null) M = !0, F || (F = !0, ge());
                else {
                    var G = f(v);
                    G !== null && He(K, G.startTime - U);
                }
            }
            var F = !1, Z = -1, $ = 5, te = -1;
            function Ne() {
                return q ? !0 : !(u.unstable_now() - te < $);
            }
            function ye() {
                if (q = !1, F) {
                    var U = u.unstable_now();
                    te = U;
                    var G = !0;
                    try {
                        e: {
                            M = !1, B && (B = !1, L(Z), Z = -1), O = !0;
                            var ne = b;
                            try {
                                t: {
                                    for(V(U), R = f(h); R !== null && !(R.expirationTime > U && Ne());){
                                        var Te = R.callback;
                                        if (typeof Te == "function") {
                                            R.callback = null, b = R.priorityLevel;
                                            var E = Te(R.expirationTime <= U);
                                            if (U = u.unstable_now(), typeof E == "function") {
                                                R.callback = E, V(U), G = !0;
                                                break t;
                                            }
                                            R === f(h) && c(h), V(U);
                                        } else c(h);
                                        R = f(h);
                                    }
                                    if (R !== null) G = !0;
                                    else {
                                        var j = f(v);
                                        j !== null && He(K, j.startTime - U), G = !1;
                                    }
                                }
                                break e;
                            } finally{
                                R = null, b = ne, O = !1;
                            }
                            G = void 0;
                        }
                    } finally{
                        G ? ge() : F = !1;
                    }
                }
            }
            var ge;
            if (typeof k == "function") ge = function() {
                k(ye);
            };
            else if (typeof MessageChannel < "u") {
                var nt = new MessageChannel, Dt = nt.port2;
                nt.port1.onmessage = ye, ge = function() {
                    Dt.postMessage(null);
                };
            } else ge = function() {
                w(ye, 0);
            };
            function He(U, G) {
                Z = w(function() {
                    U(u.unstable_now());
                }, G);
            }
            u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(U) {
                U.callback = null;
            }, u.unstable_forceFrameRate = function(U) {
                0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < U ? Math.floor(1e3 / U) : 5;
            }, u.unstable_getCurrentPriorityLevel = function() {
                return b;
            }, u.unstable_next = function(U) {
                switch(b){
                    case 1:
                    case 2:
                    case 3:
                        var G = 3;
                        break;
                    default:
                        G = b;
                }
                var ne = b;
                b = G;
                try {
                    return U();
                } finally{
                    b = ne;
                }
            }, u.unstable_requestPaint = function() {
                q = !0;
            }, u.unstable_runWithPriority = function(U, G) {
                switch(U){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        U = 3;
                }
                var ne = b;
                b = U;
                try {
                    return G();
                } finally{
                    b = ne;
                }
            }, u.unstable_scheduleCallback = function(U, G, ne) {
                var Te = u.unstable_now();
                switch(typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Te + ne : Te) : ne = Te, U){
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
                return E = ne + E, U = {
                    id: S++,
                    callback: G,
                    priorityLevel: U,
                    startTime: ne,
                    expirationTime: E,
                    sortIndex: -1
                }, ne > Te ? (U.sortIndex = ne, r(v, U), f(h) === null && U === f(v) && (B ? (L(Z), Z = -1) : B = !0, He(K, ne - Te))) : (U.sortIndex = E, r(h, U), M || O || (M = !0, F || (F = !0, ge()))), U;
            }, u.unstable_shouldYield = Ne, u.unstable_wrapCallback = function(U) {
                var G = b;
                return function() {
                    var ne = b;
                    b = G;
                    try {
                        return U.apply(this, arguments);
                    } finally{
                        b = ne;
                    }
                };
            };
        }(Ic)), Ic;
    }
    var Ah;
    function E1() {
        return Ah || (Ah = 1, Fc.exports = S1()), Fc.exports;
    }
    var ef = {
        exports: {}
    }, tt = {};
    var Oh;
    function _1() {
        if (Oh) return tt;
        Oh = 1;
        var u = Di();
        function r(h) {
            var v = "https://react.dev/errors/" + h;
            if (1 < arguments.length) {
                v += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var S = 2; S < arguments.length; S++)v += "&args[]=" + encodeURIComponent(arguments[S]);
            }
            return "Minified React error #" + h + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function f() {}
        var c = {
            d: {
                f,
                r: function() {
                    throw Error(r(522));
                },
                D: f,
                C: f,
                L: f,
                m: f,
                X: f,
                S: f,
                M: f
            },
            p: 0,
            findDOMNode: null
        }, o = Symbol.for("react.portal");
        function d(h, v, S) {
            var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: R == null ? null : "" + R,
                children: h,
                containerInfo: v,
                implementation: S
            };
        }
        var y = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function m(h, v) {
            if (h === "font") return "";
            if (typeof v == "string") return v === "use-credentials" ? v : "";
        }
        return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, tt.createPortal = function(h, v) {
            var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(r(299));
            return d(h, v, null, S);
        }, tt.flushSync = function(h) {
            var v = y.T, S = c.p;
            try {
                if (y.T = null, c.p = 2, h) return h();
            } finally{
                y.T = v, c.p = S, c.d.f();
            }
        }, tt.preconnect = function(h, v) {
            typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(h, v));
        }, tt.prefetchDNS = function(h) {
            typeof h == "string" && c.d.D(h);
        }, tt.preinit = function(h, v) {
            if (typeof h == "string" && v && typeof v.as == "string") {
                var S = v.as, R = m(S, v.crossOrigin), b = typeof v.integrity == "string" ? v.integrity : void 0, O = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
                S === "style" ? c.d.S(h, typeof v.precedence == "string" ? v.precedence : void 0, {
                    crossOrigin: R,
                    integrity: b,
                    fetchPriority: O
                }) : S === "script" && c.d.X(h, {
                    crossOrigin: R,
                    integrity: b,
                    fetchPriority: O,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0
                });
            }
        }, tt.preinitModule = function(h, v) {
            if (typeof h == "string") if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var S = m(v.as, v.crossOrigin);
                    c.d.M(h, {
                        crossOrigin: S,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    });
                }
            } else v == null && c.d.M(h);
        }, tt.preload = function(h, v) {
            if (typeof h == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
                var S = v.as, R = m(S, v.crossOrigin);
                c.d.L(h, S, {
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
        }, tt.preloadModule = function(h, v) {
            if (typeof h == "string") if (v) {
                var S = m(v.as, v.crossOrigin);
                c.d.m(h, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: S,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                });
            } else c.d.m(h);
        }, tt.requestFormReset = function(h) {
            c.d.r(h);
        }, tt.unstable_batchedUpdates = function(h, v) {
            return h(v);
        }, tt.useFormState = function(h, v, S) {
            return y.H.useFormState(h, v, S);
        }, tt.useFormStatus = function() {
            return y.H.useHostTransitionStatus();
        }, tt.version = "19.1.0", tt;
    }
    var Nh;
    function R1() {
        if (Nh) return ef.exports;
        Nh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), ef.exports = _1(), ef.exports;
    }
    var xh;
    function T1() {
        if (xh) return Ga;
        xh = 1;
        var u = E1(), r = Di(), f = R1();
        function c(e) {
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
        function d(e) {
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
        function m(e) {
            if (d(e) !== e) throw Error(c(188));
        }
        function h(e) {
            var t = e.alternate;
            if (!t) {
                if (t = d(e), t === null) throw Error(c(188));
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
                        if (i === l) return m(a), e;
                        if (i === n) return m(a), t;
                        i = i.sibling;
                    }
                    throw Error(c(188));
                }
                if (l.return !== n.return) l = a, n = i;
                else {
                    for(var s = !1, p = a.child; p;){
                        if (p === l) {
                            s = !0, l = a, n = i;
                            break;
                        }
                        if (p === n) {
                            s = !0, n = a, l = i;
                            break;
                        }
                        p = p.sibling;
                    }
                    if (!s) {
                        for(p = i.child; p;){
                            if (p === l) {
                                s = !0, l = i, n = a;
                                break;
                            }
                            if (p === n) {
                                s = !0, n = i, l = a;
                                break;
                            }
                            p = p.sibling;
                        }
                        if (!s) throw Error(c(189));
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
        var S = Object.assign, R = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), L = Symbol.for("react.consumer"), k = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), Ne = Symbol.for("react.memo_cache_sentinel"), ye = Symbol.iterator;
        function ge(e) {
            return e === null || typeof e != "object" ? null : (e = ye && e[ye] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var nt = Symbol.for("react.client.reference");
        function Dt(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === nt ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case M:
                    return "Fragment";
                case q:
                    return "Profiler";
                case B:
                    return "StrictMode";
                case K:
                    return "Suspense";
                case F:
                    return "SuspenseList";
                case te:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case O:
                    return "Portal";
                case k:
                    return (e.displayName || "Context") + ".Provider";
                case L:
                    return (e._context.displayName || "Context") + ".Consumer";
                case V:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case Z:
                    return t = e.displayName || null, t !== null ? t : Dt(e.type) || "Memo";
                case $:
                    t = e._payload, e = e._init;
                    try {
                        return Dt(e(t));
                    } catch  {}
            }
            return null;
        }
        var He = Array.isArray, U = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Te = [], E = -1;
        function j(e) {
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
        var I = j(null), pe = j(null), ie = j(null), st = j(null);
        function xe(e, t) {
            switch(Y(ie, t), Y(pe, e), Y(I, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? Zd(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = Zd(t), e = Jd(t, e);
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
        function cl() {
            X(I), X(pe), X(ie);
        }
        function Ui(e) {
            e.memoizedState !== null && Y(st, e);
            var t = I.current, l = Jd(t, e.type);
            t !== l && (Y(pe, e), Y(I, l));
        }
        function au(e) {
            pe.current === e && (X(I), X(pe)), st.current === e && (X(st), Ha._currentValue = ne);
        }
        var zi = Object.prototype.hasOwnProperty, qi = u.unstable_scheduleCallback, Pi = u.unstable_cancelCallback, Jp = u.unstable_shouldYield, $p = u.unstable_requestPaint, qt = u.unstable_now, Wp = u.unstable_getCurrentPriorityLevel, Nf = u.unstable_ImmediatePriority, xf = u.unstable_UserBlockingPriority, uu = u.unstable_NormalPriority, Fp = u.unstable_LowPriority, Mf = u.unstable_IdlePriority, Ip = u.log, em = u.unstable_setDisableYieldValue, Vn = null, dt = null;
        function fl(e) {
            if (typeof Ip == "function" && em(e), dt && typeof dt.setStrictMode == "function") try {
                dt.setStrictMode(Vn, e);
            } catch  {}
        }
        var ht = Math.clz32 ? Math.clz32 : nm, tm = Math.log, lm = Math.LN2;
        function nm(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (tm(e) / lm | 0) | 0;
        }
        var iu = 256, ru = 4194304;
        function Pl(e) {
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
        function cu(e, t, l) {
            var n = e.pendingLanes;
            if (n === 0) return 0;
            var a = 0, i = e.suspendedLanes, s = e.pingedLanes;
            e = e.warmLanes;
            var p = n & 134217727;
            return p !== 0 ? (n = p & ~i, n !== 0 ? a = Pl(n) : (s &= p, s !== 0 ? a = Pl(s) : l || (l = p & ~e, l !== 0 && (a = Pl(l))))) : (p = n & ~i, p !== 0 ? a = Pl(p) : s !== 0 ? a = Pl(s) : l || (l = n & ~e, l !== 0 && (a = Pl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
        }
        function Xn(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function am(e, t) {
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
        function Cf() {
            var e = iu;
            return iu <<= 1, (iu & 4194048) === 0 && (iu = 256), e;
        }
        function Df() {
            var e = ru;
            return ru <<= 1, (ru & 62914560) === 0 && (ru = 4194304), e;
        }
        function Hi(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Zn(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function um(e, t, l, n, a, i) {
            var s = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var p = e.entanglements, g = e.expirationTimes, x = e.hiddenUpdates;
            for(l = s & ~l; 0 < l;){
                var z = 31 - ht(l), H = 1 << z;
                p[z] = 0, g[z] = -1;
                var C = x[z];
                if (C !== null) for(x[z] = null, z = 0; z < C.length; z++){
                    var D = C[z];
                    D !== null && (D.lane &= -536870913);
                }
                l &= ~H;
            }
            n !== 0 && Bf(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
        }
        function Bf(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var n = 31 - ht(t);
            e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
        }
        function wf(e, t) {
            var l = e.entangledLanes |= t;
            for(e = e.entanglements; l;){
                var n = 31 - ht(l), a = 1 << n;
                a & t | e[n] & t && (e[n] |= t), l &= ~a;
            }
        }
        function ki(e) {
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
        function Uf() {
            var e = G.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ph(e.type));
        }
        function im(e, t) {
            var l = G.p;
            try {
                return G.p = e, t();
            } finally{
                G.p = l;
            }
        }
        var ol = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + ol, ut = "__reactProps$" + ol, un = "__reactContainer$" + ol, Li = "__reactEvents$" + ol, rm = "__reactListeners$" + ol, cm = "__reactHandles$" + ol, zf = "__reactResources$" + ol, Jn = "__reactMarker$" + ol;
        function Qi(e) {
            delete e[Ie], delete e[ut], delete e[Li], delete e[rm], delete e[cm];
        }
        function rn(e) {
            var t = e[Ie];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[un] || l[Ie]) {
                    if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = Id(e); e !== null;){
                        if (l = e[Ie]) return l;
                        e = Id(e);
                    }
                    return t;
                }
                e = l, l = e.parentNode;
            }
            return null;
        }
        function cn(e) {
            if (e = e[Ie] || e[un]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function $n(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(c(33));
        }
        function fn(e) {
            var t = e[zf];
            return t || (t = e[zf] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Ke(e) {
            e[Jn] = !0;
        }
        var qf = new Set, Pf = {};
        function Hl(e, t) {
            on(e, t), on(e + "Capture", t);
        }
        function on(e, t) {
            for(Pf[e] = t, e = 0; e < t.length; e++)qf.add(t[e]);
        }
        var fm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Hf = {}, kf = {};
        function om(e) {
            return zi.call(kf, e) ? !0 : zi.call(Hf, e) ? !1 : fm.test(e) ? kf[e] = !0 : (Hf[e] = !0, !1);
        }
        function fu(e, t, l) {
            if (om(t)) if (l === null) e.removeAttribute(t);
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
        function ou(e, t, l) {
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
        var Ki, jf;
        function sn(e) {
            if (Ki === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Ki = t && t[1] || "", jf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Ki + e + jf;
        }
        var Gi = !1;
        function Yi(e, t) {
            if (!e || Gi) return "";
            Gi = !0;
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
                var i = n.DetermineComponentFrameRoot(), s = i[0], p = i[1];
                if (s && p) {
                    var g = s.split(`
`), x = p.split(`
`);
                    for(a = n = 0; n < g.length && !g[n].includes("DetermineComponentFrameRoot");)n++;
                    for(; a < x.length && !x[a].includes("DetermineComponentFrameRoot");)a++;
                    if (n === g.length || a === x.length) for(n = g.length - 1, a = x.length - 1; 1 <= n && 0 <= a && g[n] !== x[a];)a--;
                    for(; 1 <= n && 0 <= a; n--, a--)if (g[n] !== x[a]) {
                        if (n !== 1 || a !== 1) do if (n--, a--, 0 > a || g[n] !== x[a]) {
                            var z = `
` + g[n].replace(" at new ", " at ");
                            return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                        }
                        while (1 <= n && 0 <= a);
                        break;
                    }
                }
            } finally{
                Gi = !1, Error.prepareStackTrace = l;
            }
            return (l = e ? e.displayName || e.name : "") ? sn(l) : "";
        }
        function sm(e) {
            switch(e.tag){
                case 26:
                case 27:
                case 5:
                    return sn(e.type);
                case 16:
                    return sn("Lazy");
                case 13:
                    return sn("Suspense");
                case 19:
                    return sn("SuspenseList");
                case 0:
                case 15:
                    return Yi(e.type, !1);
                case 11:
                    return Yi(e.type.render, !1);
                case 1:
                    return Yi(e.type, !0);
                case 31:
                    return sn("Activity");
                default:
                    return "";
            }
        }
        function Lf(e) {
            try {
                var t = "";
                do t += sm(e), e = e.return;
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
        function Qf(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function dm(e) {
            var t = Qf(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
            if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
                var a = l.get, i = l.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return a.call(this);
                    },
                    set: function(s) {
                        n = "" + s, i.call(this, s);
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: l.enumerable
                }), {
                    getValue: function() {
                        return n;
                    },
                    setValue: function(s) {
                        n = "" + s;
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t];
                    }
                };
            }
        }
        function su(e) {
            e._valueTracker || (e._valueTracker = dm(e));
        }
        function Kf(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), n = "";
            return e && (n = Qf(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
        }
        function du(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var hm = /[\n"\\]/g;
        function _t(e) {
            return e.replace(hm, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Vi(e, t, l, n, a, i, s, p) {
            e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Et(t)) : e.value !== "" + Et(t) && (e.value = "" + Et(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? Xi(e, s, Et(t)) : l != null ? Xi(e, s, Et(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.name = "" + Et(p) : e.removeAttribute("name");
        }
        function Gf(e, t, l, n, a, i, s, p) {
            if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
                if (!(i !== "submit" && i !== "reset" || t != null)) return;
                l = l != null ? "" + Et(l) : "", t = t != null ? "" + Et(t) : l, p || t === e.value || (e.value = t), e.defaultValue = t;
            }
            n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = p ? e.checked : !!n, e.defaultChecked = !!n, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s);
        }
        function Xi(e, t, l) {
            t === "number" && du(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
        }
        function dn(e, t, l, n) {
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
        function Yf(e, t, l) {
            if (t != null && (t = "" + Et(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + Et(l) : "";
        }
        function Vf(e, t, l, n) {
            if (t == null) {
                if (n != null) {
                    if (l != null) throw Error(c(92));
                    if (He(n)) {
                        if (1 < n.length) throw Error(c(93));
                        n = n[0];
                    }
                    l = n;
                }
                l == null && (l = ""), t = l;
            }
            l = Et(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n);
        }
        function hn(e, t) {
            if (t) {
                var l = e.firstChild;
                if (l && l === e.lastChild && l.nodeType === 3) {
                    l.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var pm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Xf(e, t, l) {
            var n = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || pm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function Zf(e, t, l) {
            if (t != null && typeof t != "object") throw Error(c(62));
            if (e = e.style, l != null) {
                for(var n in l)!l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
                for(var a in t)n = t[a], t.hasOwnProperty(a) && l[a] !== n && Xf(e, a, n);
            } else for(var i in t)t.hasOwnProperty(i) && Xf(e, i, t[i]);
        }
        function Zi(e) {
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
        var mm = new Map([
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
        ]), ym = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function hu(e) {
            return ym.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Ji = null;
        function $i(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var pn = null, mn = null;
        function Jf(e) {
            var t = cn(e);
            if (t && (e = t.stateNode)) {
                var l = e[ut] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (Vi(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + _t("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var n = l[t];
                                if (n !== e && n.form === e.form) {
                                    var a = n[ut] || null;
                                    if (!a) throw Error(c(90));
                                    Vi(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)n = l[t], n.form === e.form && Kf(n);
                        }
                        break e;
                    case "textarea":
                        Yf(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && dn(e, !!l.multiple, t, !1);
                }
            }
        }
        var Wi = !1;
        function $f(e, t, l) {
            if (Wi) return e(t, l);
            Wi = !0;
            try {
                var n = e(t);
                return n;
            } finally{
                if (Wi = !1, (pn !== null || mn !== null) && (Fu(), pn && (t = pn, e = mn, mn = pn = null, Jf(t), e))) for(t = 0; t < e.length; t++)Jf(e[t]);
            }
        }
        function Wn(e, t) {
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
            if (l && typeof l != "function") throw Error(c(231, t, typeof l));
            return l;
        }
        var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fi = !1;
        if (Gt) try {
            var Fn = {};
            Object.defineProperty(Fn, "passive", {
                get: function() {
                    Fi = !0;
                }
            }), window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
        } catch  {
            Fi = !1;
        }
        var sl = null, Ii = null, pu = null;
        function Wf() {
            if (pu) return pu;
            var e, t = Ii, l = t.length, n, a = "value" in sl ? sl.value : sl.textContent, i = a.length;
            for(e = 0; e < l && t[e] === a[e]; e++);
            var s = l - e;
            for(n = 1; n <= s && t[l - n] === a[i - n]; n++);
            return pu = a.slice(e, 1 < n ? 1 - n : void 0);
        }
        function mu(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function yu() {
            return !0;
        }
        function Ff() {
            return !1;
        }
        function it(e) {
            function t(l, n, a, i, s) {
                this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = s, this.currentTarget = null;
                for(var p in e)e.hasOwnProperty(p) && (l = e[p], this[p] = l ? l(i) : i[p]);
                return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? yu : Ff, this.isPropagationStopped = Ff, this;
            }
            return S(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = yu);
                },
                stopPropagation: function() {
                    var l = this.nativeEvent;
                    l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = yu);
                },
                persist: function() {},
                isPersistent: yu
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
        }, vu = it(kl), In = S({}, kl, {
            view: 0,
            detail: 0
        }), vm = it(In), er, tr, ea, gu = S({}, In, {
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
            getModifierState: nr,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== ea && (ea && e.type === "mousemove" ? (er = e.screenX - ea.screenX, tr = e.screenY - ea.screenY) : tr = er = 0, ea = e), er);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : tr;
            }
        }), If = it(gu), gm = S({}, gu, {
            dataTransfer: 0
        }), bm = it(gm), Sm = S({}, In, {
            relatedTarget: 0
        }), lr = it(Sm), Em = S({}, kl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), _m = it(Em), Rm = S({}, kl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Tm = it(Rm), Am = S({}, kl, {
            data: 0
        }), eo = it(Am), Om = {
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
        }, Nm = {
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
        }, xm = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function Mm(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = xm[e]) ? !!t[e] : !1;
        }
        function nr() {
            return Mm;
        }
        var Cm = S({}, In, {
            key: function(e) {
                if (e.key) {
                    var t = Om[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = mu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nm[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: nr,
            charCode: function(e) {
                return e.type === "keypress" ? mu(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? mu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), Dm = it(Cm), Bm = S({}, gu, {
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
        }), to = it(Bm), wm = S({}, In, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: nr
        }), Um = it(wm), zm = S({}, kl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), qm = it(zm), Pm = S({}, gu, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), Hm = it(Pm), km = S({}, kl, {
            newState: 0,
            oldState: 0
        }), jm = it(km), Lm = [
            9,
            13,
            27,
            32
        ], ar = Gt && "CompositionEvent" in window, ta = null;
        Gt && "documentMode" in document && (ta = document.documentMode);
        var Qm = Gt && "TextEvent" in window && !ta, lo = Gt && (!ar || ta && 8 < ta && 11 >= ta), no = " ", ao = !1;
        function uo(e, t) {
            switch(e){
                case "keyup":
                    return Lm.indexOf(t.keyCode) !== -1;
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
        function io(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var yn = !1;
        function Km(e, t) {
            switch(e){
                case "compositionend":
                    return io(t);
                case "keypress":
                    return t.which !== 32 ? null : (ao = !0, no);
                case "textInput":
                    return e = t.data, e === no && ao ? null : e;
                default:
                    return null;
            }
        }
        function Gm(e, t) {
            if (yn) return e === "compositionend" || !ar && uo(e, t) ? (e = Wf(), pu = Ii = sl = null, yn = !1, e) : null;
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
                    return lo && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var Ym = {
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
        function ro(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!Ym[e.type] : t === "textarea";
        }
        function co(e, t, l, n) {
            pn ? mn ? mn.push(n) : mn = [
                n
            ] : pn = n, t = ai(t, "onChange"), 0 < t.length && (l = new vu("onChange", "change", null, l, n), e.push({
                event: l,
                listeners: t
            }));
        }
        var la = null, na = null;
        function Vm(e) {
            Kd(e, 0);
        }
        function bu(e) {
            var t = $n(e);
            if (Kf(t)) return e;
        }
        function fo(e, t) {
            if (e === "change") return t;
        }
        var oo = !1;
        if (Gt) {
            var ur;
            if (Gt) {
                var ir = "oninput" in document;
                if (!ir) {
                    var so = document.createElement("div");
                    so.setAttribute("oninput", "return;"), ir = typeof so.oninput == "function";
                }
                ur = ir;
            } else ur = !1;
            oo = ur && (!document.documentMode || 9 < document.documentMode);
        }
        function ho() {
            la && (la.detachEvent("onpropertychange", po), na = la = null);
        }
        function po(e) {
            if (e.propertyName === "value" && bu(na)) {
                var t = [];
                co(t, na, e, $i(e)), $f(Vm, t);
            }
        }
        function Xm(e, t, l) {
            e === "focusin" ? (ho(), la = t, na = l, la.attachEvent("onpropertychange", po)) : e === "focusout" && ho();
        }
        function Zm(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return bu(na);
        }
        function Jm(e, t) {
            if (e === "click") return bu(t);
        }
        function $m(e, t) {
            if (e === "input" || e === "change") return bu(t);
        }
        function Wm(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var pt = typeof Object.is == "function" ? Object.is : Wm;
        function aa(e, t) {
            if (pt(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), n = Object.keys(t);
            if (l.length !== n.length) return !1;
            for(n = 0; n < l.length; n++){
                var a = l[n];
                if (!zi.call(t, a) || !pt(e[a], t[a])) return !1;
            }
            return !0;
        }
        function mo(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function yo(e, t) {
            var l = mo(e);
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
                l = mo(l);
            }
        }
        function vo(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? vo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function go(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = du(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var l = typeof t.contentWindow.location.href == "string";
                } catch  {
                    l = !1;
                }
                if (l) e = t.contentWindow;
                else break;
                t = du(e.document);
            }
            return t;
        }
        function rr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var Fm = Gt && "documentMode" in document && 11 >= document.documentMode, vn = null, cr = null, ua = null, fr = !1;
        function bo(e, t, l) {
            var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            fr || vn == null || vn !== du(n) || (n = vn, "selectionStart" in n && rr(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), ua && aa(ua, n) || (ua = n, n = ai(cr, "onSelect"), 0 < n.length && (t = new vu("onSelect", "select", null, t, l), e.push({
                event: t,
                listeners: n
            }), t.target = vn)));
        }
        function jl(e, t) {
            var l = {};
            return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
        }
        var gn = {
            animationend: jl("Animation", "AnimationEnd"),
            animationiteration: jl("Animation", "AnimationIteration"),
            animationstart: jl("Animation", "AnimationStart"),
            transitionrun: jl("Transition", "TransitionRun"),
            transitionstart: jl("Transition", "TransitionStart"),
            transitioncancel: jl("Transition", "TransitionCancel"),
            transitionend: jl("Transition", "TransitionEnd")
        }, or = {}, So = {};
        Gt && (So = document.createElement("div").style, "AnimationEvent" in window || (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation), "TransitionEvent" in window || delete gn.transitionend.transition);
        function Ll(e) {
            if (or[e]) return or[e];
            if (!gn[e]) return e;
            var t = gn[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in So) return or[e] = t[l];
            return e;
        }
        var Eo = Ll("animationend"), _o = Ll("animationiteration"), Ro = Ll("animationstart"), Im = Ll("transitionrun"), e0 = Ll("transitionstart"), t0 = Ll("transitioncancel"), To = Ll("transitionend"), Ao = new Map, sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        sr.push("scrollEnd");
        function Bt(e, t) {
            Ao.set(e, t), Hl(t, [
                e
            ]);
        }
        var Oo = new WeakMap;
        function Rt(e, t) {
            if (typeof e == "object" && e !== null) {
                var l = Oo.get(e);
                return l !== void 0 ? l : (t = {
                    value: e,
                    source: t,
                    stack: Lf(t)
                }, Oo.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Lf(t)
            };
        }
        var Tt = [], bn = 0, dr = 0;
        function Su() {
            for(var e = bn, t = dr = bn = 0; t < e;){
                var l = Tt[t];
                Tt[t++] = null;
                var n = Tt[t];
                Tt[t++] = null;
                var a = Tt[t];
                Tt[t++] = null;
                var i = Tt[t];
                if (Tt[t++] = null, n !== null && a !== null) {
                    var s = n.pending;
                    s === null ? a.next = a : (a.next = s.next, s.next = a), n.pending = a;
                }
                i !== 0 && No(l, a, i);
            }
        }
        function Eu(e, t, l, n) {
            Tt[bn++] = e, Tt[bn++] = t, Tt[bn++] = l, Tt[bn++] = n, dr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
        }
        function hr(e, t, l, n) {
            return Eu(e, t, l, n), _u(e);
        }
        function Sn(e, t) {
            return Eu(e, null, null, t), _u(e);
        }
        function No(e, t, l) {
            e.lanes |= l;
            var n = e.alternate;
            n !== null && (n.lanes |= l);
            for(var a = !1, i = e.return; i !== null;)i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
            return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - ht(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [
                t
            ] : n.push(t), t.lane = l | 536870912), i) : null;
        }
        function _u(e) {
            if (50 < Ca) throw Ca = 0, bc = null, Error(c(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var En = {};
        function l0(e, t, l, n) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function mt(e, t, l, n) {
            return new l0(e, t, l, n);
        }
        function pr(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Yt(e, t) {
            var l = e.alternate;
            return l === null ? (l = mt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
        }
        function xo(e, t) {
            e.flags &= 65011714;
            var l = e.alternate;
            return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function Ru(e, t, l, n, a, i) {
            var s = 0;
            if (n = e, typeof e == "function") pr(e) && (s = 1);
            else if (typeof e == "string") s = a1(e, l, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case te:
                    return e = mt(31, l, t, a), e.elementType = te, e.lanes = i, e;
                case M:
                    return Ql(l.children, a, i, t);
                case B:
                    s = 8, a |= 24;
                    break;
                case q:
                    return e = mt(12, l, t, a | 2), e.elementType = q, e.lanes = i, e;
                case K:
                    return e = mt(13, l, t, a), e.elementType = K, e.lanes = i, e;
                case F:
                    return e = mt(19, l, t, a), e.elementType = F, e.lanes = i, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case w:
                        case k:
                            s = 10;
                            break e;
                        case L:
                            s = 9;
                            break e;
                        case V:
                            s = 11;
                            break e;
                        case Z:
                            s = 14;
                            break e;
                        case $:
                            s = 16, n = null;
                            break e;
                    }
                    s = 29, l = Error(c(130, e === null ? "null" : typeof e, "")), n = null;
            }
            return t = mt(s, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
        }
        function Ql(e, t, l, n) {
            return e = mt(7, e, n, t), e.lanes = l, e;
        }
        function mr(e, t, l) {
            return e = mt(6, e, null, t), e.lanes = l, e;
        }
        function yr(e, t, l) {
            return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var _n = [], Rn = 0, Tu = null, Au = 0, At = [], Ot = 0, Kl = null, Vt = 1, Xt = "";
        function Gl(e, t) {
            _n[Rn++] = Au, _n[Rn++] = Tu, Tu = e, Au = t;
        }
        function Mo(e, t, l) {
            At[Ot++] = Vt, At[Ot++] = Xt, At[Ot++] = Kl, Kl = e;
            var n = Vt;
            e = Xt;
            var a = 32 - ht(n) - 1;
            n &= ~(1 << a), l += 1;
            var i = 32 - ht(t) + a;
            if (30 < i) {
                var s = a - a % 5;
                i = (n & (1 << s) - 1).toString(32), n >>= s, a -= s, Vt = 1 << 32 - ht(t) + a | l << a | n, Xt = i + e;
            } else Vt = 1 << i | l << a | n, Xt = e;
        }
        function vr(e) {
            e.return !== null && (Gl(e, 1), Mo(e, 1, 0));
        }
        function gr(e) {
            for(; e === Tu;)Tu = _n[--Rn], _n[Rn] = null, Au = _n[--Rn], _n[Rn] = null;
            for(; e === Kl;)Kl = At[--Ot], At[Ot] = null, Xt = At[--Ot], At[Ot] = null, Vt = At[--Ot], At[Ot] = null;
        }
        var at = null, Be = null, ve = !1, Yl = null, Pt = !1, br = Error(c(519));
        function Vl(e) {
            var t = Error(c(418, ""));
            throw ca(Rt(t, e)), br;
        }
        function Co(e) {
            var t = e.stateNode, l = e.type, n = e.memoizedProps;
            switch(t[Ie] = e, t[ut] = n, l){
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
                    for(l = 0; l < Ba.length; l++)de(Ba[l], t);
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
                    de("invalid", t), Gf(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), su(t);
                    break;
                case "select":
                    de("invalid", t);
                    break;
                case "textarea":
                    de("invalid", t), Vf(t, n.value, n.defaultValue, n.children), su(t);
            }
            l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Xd(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = ui), t = !0) : t = !1, t || Vl(e);
        }
        function Do(e) {
            for(at = e.return; at;)switch(at.tag){
                case 5:
                case 13:
                    Pt = !1;
                    return;
                case 27:
                case 3:
                    Pt = !0;
                    return;
                default:
                    at = at.return;
            }
        }
        function ia(e) {
            if (e !== at) return !1;
            if (!ve) return Do(e), ve = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || zc(e.type, e.memoizedProps)), l = !l), l && Be && Vl(e), Do(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (l = e.data, l === "/$") {
                            if (t === 0) {
                                Be = Ut(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else l !== "$" && l !== "$!" && l !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    Be = null;
                }
            } else t === 27 ? (t = Be, Nl(e.type) ? (e = kc, kc = null, Be = e) : Be = t) : Be = at ? Ut(e.stateNode.nextSibling) : null;
            return !0;
        }
        function ra() {
            Be = at = null, ve = !1;
        }
        function Bo() {
            var e = Yl;
            return e !== null && (ft === null ? ft = e : ft.push.apply(ft, e), Yl = null), e;
        }
        function ca(e) {
            Yl === null ? Yl = [
                e
            ] : Yl.push(e);
        }
        var Sr = j(null), Xl = null, Zt = null;
        function dl(e, t, l) {
            Y(Sr, t._currentValue), t._currentValue = l;
        }
        function Jt(e) {
            e._currentValue = Sr.current, X(Sr);
        }
        function Er(e, t, l) {
            for(; e !== null;){
                var n = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
                e = e.return;
            }
        }
        function _r(e, t, l, n) {
            var a = e.child;
            for(a !== null && (a.return = e); a !== null;){
                var i = a.dependencies;
                if (i !== null) {
                    var s = a.child;
                    i = i.firstContext;
                    e: for(; i !== null;){
                        var p = i;
                        i = a;
                        for(var g = 0; g < t.length; g++)if (p.context === t[g]) {
                            i.lanes |= l, p = i.alternate, p !== null && (p.lanes |= l), Er(i.return, l, e), n || (s = null);
                            break e;
                        }
                        i = p.next;
                    }
                } else if (a.tag === 18) {
                    if (s = a.return, s === null) throw Error(c(341));
                    s.lanes |= l, i = s.alternate, i !== null && (i.lanes |= l), Er(s, l, e), s = null;
                } else s = a.child;
                if (s !== null) s.return = a;
                else for(s = a; s !== null;){
                    if (s === e) {
                        s = null;
                        break;
                    }
                    if (a = s.sibling, a !== null) {
                        a.return = s.return, s = a;
                        break;
                    }
                    s = s.return;
                }
                a = s;
            }
        }
        function fa(e, t, l, n) {
            e = null;
            for(var a = t, i = !1; a !== null;){
                if (!i) {
                    if ((a.flags & 524288) !== 0) i = !0;
                    else if ((a.flags & 262144) !== 0) break;
                }
                if (a.tag === 10) {
                    var s = a.alternate;
                    if (s === null) throw Error(c(387));
                    if (s = s.memoizedProps, s !== null) {
                        var p = a.type;
                        pt(a.pendingProps.value, s.value) || (e !== null ? e.push(p) : e = [
                            p
                        ]);
                    }
                } else if (a === st.current) {
                    if (s = a.alternate, s === null) throw Error(c(387));
                    s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Ha) : e = [
                        Ha
                    ]);
                }
                a = a.return;
            }
            e !== null && _r(t, e, l, n), t.flags |= 262144;
        }
        function Ou(e) {
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
            return wo(Xl, e);
        }
        function Nu(e, t) {
            return Xl === null && Zl(e), wo(e, t);
        }
        function wo(e, t) {
            var l = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, Zt === null) {
                if (e === null) throw Error(c(308));
                Zt = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else Zt = Zt.next = t;
            return l;
        }
        var n0 = typeof AbortController < "u" ? AbortController : function() {
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
        }, a0 = u.unstable_scheduleCallback, u0 = u.unstable_NormalPriority, ke = {
            $$typeof: k,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Rr() {
            return {
                controller: new n0,
                data: new Map,
                refCount: 0
            };
        }
        function oa(e) {
            e.refCount--, e.refCount === 0 && a0(u0, function() {
                e.controller.abort();
            });
        }
        var sa = null, Tr = 0, Tn = 0, An = null;
        function i0(e, t) {
            if (sa === null) {
                var l = sa = [];
                Tr = 0, Tn = Oc(), An = {
                    status: "pending",
                    value: void 0,
                    then: function(n) {
                        l.push(n);
                    }
                };
            }
            return Tr++, t.then(Uo, Uo), t;
        }
        function Uo() {
            if (--Tr === 0 && sa !== null) {
                An !== null && (An.status = "fulfilled");
                var e = sa;
                sa = null, Tn = 0, An = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function r0(e, t) {
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
        var zo = U.S;
        U.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && i0(e, t), zo !== null && zo(e, t);
        };
        var Jl = j(null);
        function Ar() {
            var e = Jl.current;
            return e !== null ? e : Oe.pooledCache;
        }
        function xu(e, t) {
            t === null ? Y(Jl, Jl.current) : Y(Jl, t.pool);
        }
        function qo() {
            var e = Ar();
            return e === null ? null : {
                parent: ke._currentValue,
                pool: e
            };
        }
        var da = Error(c(460)), Po = Error(c(474)), Mu = Error(c(542)), Or = {
            then: function() {}
        };
        function Ho(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Cu() {}
        function ko(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Cu, Cu), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Lo(e), e;
                default:
                    if (typeof t.status == "string") t.then(Cu, Cu);
                    else {
                        if (e = Oe, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482));
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
                            throw e = t.reason, Lo(e), e;
                    }
                    throw ha = t, da;
            }
        }
        var ha = null;
        function jo() {
            if (ha === null) throw Error(c(459));
            var e = ha;
            return ha = null, e;
        }
        function Lo(e) {
            if (e === da || e === Mu) throw Error(c(483));
        }
        var hl = !1;
        function Nr(e) {
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
        function xr(e, t) {
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
            if (n = n.shared, (be & 2) !== 0) {
                var a = n.pending;
                return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = _u(e), No(e, null, l), t;
            }
            return Eu(e, n, t, l), _u(e);
        }
        function pa(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, wf(e, l);
            }
        }
        function Mr(e, t) {
            var l = e.updateQueue, n = e.alternate;
            if (n !== null && (n = n.updateQueue, l === n)) {
                var a = null, i = null;
                if (l = l.firstBaseUpdate, l !== null) {
                    do {
                        var s = {
                            lane: l.lane,
                            tag: l.tag,
                            payload: l.payload,
                            callback: null,
                            next: null
                        };
                        i === null ? a = i = s : i = i.next = s, l = l.next;
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
        var Cr = !1;
        function ma() {
            if (Cr) {
                var e = An;
                if (e !== null) throw e;
            }
        }
        function ya(e, t, l, n) {
            Cr = !1;
            var a = e.updateQueue;
            hl = !1;
            var i = a.firstBaseUpdate, s = a.lastBaseUpdate, p = a.shared.pending;
            if (p !== null) {
                a.shared.pending = null;
                var g = p, x = g.next;
                g.next = null, s === null ? i = x : s.next = x, s = g;
                var z = e.alternate;
                z !== null && (z = z.updateQueue, p = z.lastBaseUpdate, p !== s && (p === null ? z.firstBaseUpdate = x : p.next = x, z.lastBaseUpdate = g));
            }
            if (i !== null) {
                var H = a.baseState;
                s = 0, z = x = g = null, p = i;
                do {
                    var C = p.lane & -536870913, D = C !== p.lane;
                    if (D ? (he & C) === C : (n & C) === C) {
                        C !== 0 && C === Tn && (Cr = !0), z !== null && (z = z.next = {
                            lane: 0,
                            tag: p.tag,
                            payload: p.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var ae = e, ee = p;
                            C = t;
                            var Re = l;
                            switch(ee.tag){
                                case 1:
                                    if (ae = ee.payload, typeof ae == "function") {
                                        H = ae.call(Re, H, C);
                                        break e;
                                    }
                                    H = ae;
                                    break e;
                                case 3:
                                    ae.flags = ae.flags & -65537 | 128;
                                case 0:
                                    if (ae = ee.payload, C = typeof ae == "function" ? ae.call(Re, H, C) : ae, C == null) break e;
                                    H = S({}, H, C);
                                    break e;
                                case 2:
                                    hl = !0;
                            }
                        }
                        C = p.callback, C !== null && (e.flags |= 64, D && (e.flags |= 8192), D = a.callbacks, D === null ? a.callbacks = [
                            C
                        ] : D.push(C));
                    } else D = {
                        lane: C,
                        tag: p.tag,
                        payload: p.payload,
                        callback: p.callback,
                        next: null
                    }, z === null ? (x = z = D, g = H) : z = z.next = D, s |= C;
                    if (p = p.next, p === null) {
                        if (p = a.shared.pending, p === null) break;
                        D = p, p = D.next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null;
                    }
                }while (!0);
                z === null && (g = H), a.baseState = g, a.firstBaseUpdate = x, a.lastBaseUpdate = z, i === null && (a.shared.lanes = 0), Rl |= s, e.lanes = s, e.memoizedState = H;
            }
        }
        function Qo(e, t) {
            if (typeof e != "function") throw Error(c(191, e));
            e.call(t);
        }
        function Ko(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)Qo(l[e], t);
        }
        var On = j(null), Du = j(0);
        function Go(e, t) {
            e = ll, Y(Du, e), Y(On, t), ll = e | t.baseLanes;
        }
        function Dr() {
            Y(Du, ll), Y(On, On.current);
        }
        function Br() {
            ll = Du.current, X(On), X(Du);
        }
        var yl = 0, fe = null, Ee = null, qe = null, Bu = !1, Nn = !1, $l = !1, wu = 0, va = 0, xn = null, c0 = 0;
        function Ue() {
            throw Error(c(321));
        }
        function wr(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!pt(e[l], t[l])) return !1;
            return !0;
        }
        function Ur(e, t, l, n, a, i) {
            return yl = i, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? Ns : xs, $l = !1, i = l(n, a), $l = !1, Nn && (i = Vo(t, l, n, a)), Yo(e), i;
        }
        function Yo(e) {
            U.H = ku;
            var t = Ee !== null && Ee.next !== null;
            if (yl = 0, qe = Ee = fe = null, Bu = !1, va = 0, xn = null, t) throw Error(c(300));
            e === null || Ge || (e = e.dependencies, e !== null && Ou(e) && (Ge = !0));
        }
        function Vo(e, t, l, n) {
            fe = e;
            var a = 0;
            do {
                if (Nn && (xn = null), va = 0, Nn = !1, 25 <= a) throw Error(c(301));
                if (a += 1, qe = Ee = null, e.updateQueue != null) {
                    var i = e.updateQueue;
                    i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
                }
                U.H = m0, i = t(l, n);
            }while (Nn);
            return i;
        }
        function f0() {
            var e = U.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? ga(t) : t, e = e.useState()[0], (Ee !== null ? Ee.memoizedState : null) !== e && (fe.flags |= 1024), t;
        }
        function zr() {
            var e = wu !== 0;
            return wu = 0, e;
        }
        function qr(e, t, l) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
        }
        function Pr(e) {
            if (Bu) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                Bu = !1;
            }
            yl = 0, qe = Ee = fe = null, Nn = !1, va = wu = 0, xn = null;
        }
        function rt() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return qe === null ? fe.memoizedState = qe = e : qe = qe.next = e, qe;
        }
        function Pe() {
            if (Ee === null) {
                var e = fe.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = Ee.next;
            var t = qe === null ? fe.memoizedState : qe.next;
            if (t !== null) qe = t, Ee = e;
            else {
                if (e === null) throw fe.alternate === null ? Error(c(467)) : Error(c(310));
                Ee = e, e = {
                    memoizedState: Ee.memoizedState,
                    baseState: Ee.baseState,
                    baseQueue: Ee.baseQueue,
                    queue: Ee.queue,
                    next: null
                }, qe === null ? fe.memoizedState = qe = e : qe = qe.next = e;
            }
            return qe;
        }
        function Hr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function ga(e) {
            var t = va;
            return va += 1, xn === null && (xn = []), e = ko(xn, e, t), t = fe, (qe === null ? t.memoizedState : qe.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? Ns : xs), e;
        }
        function Uu(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return ga(e);
                if (e.$$typeof === k) return et(e);
            }
            throw Error(c(438, String(e)));
        }
        function kr(e) {
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
            }), l === null && (l = Hr(), fe.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), n = 0; n < e; n++)l[n] = Ne;
            return t.index++, l;
        }
        function $t(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function zu(e) {
            var t = Pe();
            return jr(t, Ee, e);
        }
        function jr(e, t, l) {
            var n = e.queue;
            if (n === null) throw Error(c(311));
            n.lastRenderedReducer = l;
            var a = e.baseQueue, i = n.pending;
            if (i !== null) {
                if (a !== null) {
                    var s = a.next;
                    a.next = i.next, i.next = s;
                }
                t.baseQueue = a = i, n.pending = null;
            }
            if (i = e.baseState, a === null) e.memoizedState = i;
            else {
                t = a.next;
                var p = s = null, g = null, x = t, z = !1;
                do {
                    var H = x.lane & -536870913;
                    if (H !== x.lane ? (he & H) === H : (yl & H) === H) {
                        var C = x.revertLane;
                        if (C === 0) g !== null && (g = g.next = {
                            lane: 0,
                            revertLane: 0,
                            action: x.action,
                            hasEagerState: x.hasEagerState,
                            eagerState: x.eagerState,
                            next: null
                        }), H === Tn && (z = !0);
                        else if ((yl & C) === C) {
                            x = x.next, C === Tn && (z = !0);
                            continue;
                        } else H = {
                            lane: 0,
                            revertLane: x.revertLane,
                            action: x.action,
                            hasEagerState: x.hasEagerState,
                            eagerState: x.eagerState,
                            next: null
                        }, g === null ? (p = g = H, s = i) : g = g.next = H, fe.lanes |= C, Rl |= C;
                        H = x.action, $l && l(i, H), i = x.hasEagerState ? x.eagerState : l(i, H);
                    } else C = {
                        lane: H,
                        revertLane: x.revertLane,
                        action: x.action,
                        hasEagerState: x.hasEagerState,
                        eagerState: x.eagerState,
                        next: null
                    }, g === null ? (p = g = C, s = i) : g = g.next = C, fe.lanes |= H, Rl |= H;
                    x = x.next;
                }while (x !== null && x !== t);
                if (g === null ? s = i : g.next = p, !pt(i, e.memoizedState) && (Ge = !0, z && (l = An, l !== null))) throw l;
                e.memoizedState = i, e.baseState = s, e.baseQueue = g, n.lastRenderedState = i;
            }
            return a === null && (n.lanes = 0), [
                e.memoizedState,
                n.dispatch
            ];
        }
        function Lr(e) {
            var t = Pe(), l = t.queue;
            if (l === null) throw Error(c(311));
            l.lastRenderedReducer = e;
            var n = l.dispatch, a = l.pending, i = t.memoizedState;
            if (a !== null) {
                l.pending = null;
                var s = a = a.next;
                do i = e(i, s.action), s = s.next;
                while (s !== a);
                pt(i, t.memoizedState) || (Ge = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
            }
            return [
                i,
                n
            ];
        }
        function Xo(e, t, l) {
            var n = fe, a = Pe(), i = ve;
            if (i) {
                if (l === void 0) throw Error(c(407));
                l = l();
            } else l = t();
            var s = !pt((Ee || a).memoizedState, l);
            s && (a.memoizedState = l, Ge = !0), a = a.queue;
            var p = $o.bind(null, n, a, e);
            if (ba(2048, 8, p, [
                e
            ]), a.getSnapshot !== t || s || qe !== null && qe.memoizedState.tag & 1) {
                if (n.flags |= 2048, Mn(9, qu(), Jo.bind(null, n, a, l, t), null), Oe === null) throw Error(c(349));
                i || (yl & 124) !== 0 || Zo(n, t, l);
            }
            return l;
        }
        function Zo(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = fe.updateQueue, t === null ? (t = Hr(), fe.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function Jo(e, t, l, n) {
            t.value = l, t.getSnapshot = n, Wo(t) && Fo(e);
        }
        function $o(e, t, l) {
            return l(function() {
                Wo(t) && Fo(e);
            });
        }
        function Wo(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !pt(e, l);
            } catch  {
                return !0;
            }
        }
        function Fo(e) {
            var t = Sn(e, 2);
            t !== null && St(t, e, 2);
        }
        function Qr(e) {
            var t = rt();
            if (typeof e == "function") {
                var l = e;
                if (e = l(), $l) {
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
                lastRenderedReducer: $t,
                lastRenderedState: e
            }, t;
        }
        function Io(e, t, l, n) {
            return e.baseState = l, jr(e, Ee, typeof n == "function" ? n : $t);
        }
        function o0(e, t, l, n, a) {
            if (Hu(e)) throw Error(c(485));
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
                    then: function(s) {
                        i.listeners.push(s);
                    }
                };
                U.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, es(t, i)) : (i.next = l.next, t.pending = l.next = i);
            }
        }
        function es(e, t) {
            var l = t.action, n = t.payload, a = e.state;
            if (t.isTransition) {
                var i = U.T, s = {};
                U.T = s;
                try {
                    var p = l(a, n), g = U.S;
                    g !== null && g(s, p), ts(e, t, p);
                } catch (x) {
                    Kr(e, t, x);
                } finally{
                    U.T = i;
                }
            } else try {
                i = l(a, n), ts(e, t, i);
            } catch (x) {
                Kr(e, t, x);
            }
        }
        function ts(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
                ls(e, t, n);
            }, function(n) {
                return Kr(e, t, n);
            }) : ls(e, t, l);
        }
        function ls(e, t, l) {
            t.status = "fulfilled", t.value = l, ns(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, es(e, l)));
        }
        function Kr(e, t, l) {
            var n = e.pending;
            if (e.pending = null, n !== null) {
                n = n.next;
                do t.status = "rejected", t.reason = l, ns(t), t = t.next;
                while (t !== n);
            }
            e.action = null;
        }
        function ns(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function as(e, t) {
            return t;
        }
        function us(e, t) {
            if (ve) {
                var l = Oe.formState;
                if (l !== null) {
                    e: {
                        var n = fe;
                        if (ve) {
                            if (Be) {
                                t: {
                                    for(var a = Be, i = Pt; a.nodeType !== 8;){
                                        if (!i) {
                                            a = null;
                                            break t;
                                        }
                                        if (a = Ut(a.nextSibling), a === null) {
                                            a = null;
                                            break t;
                                        }
                                    }
                                    i = a.data, a = i === "F!" || i === "F" ? a : null;
                                }
                                if (a) {
                                    Be = Ut(a.nextSibling), n = a.data === "F!";
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
                lastRenderedReducer: as,
                lastRenderedState: t
            }, l.queue = n, l = Ts.bind(null, fe, n), n.dispatch = l, n = Qr(!1), i = Zr.bind(null, fe, !1, n.queue), n = rt(), a = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, n.queue = a, l = o0.bind(null, fe, a, i, l), a.dispatch = l, n.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function is(e) {
            var t = Pe();
            return rs(t, Ee, e);
        }
        function rs(e, t, l) {
            if (t = jr(e, t, as)[0], e = zu($t)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var n = ga(t);
            } catch (s) {
                throw s === da ? Mu : s;
            }
            else n = t;
            t = Pe();
            var a = t.queue, i = a.dispatch;
            return l !== t.memoizedState && (fe.flags |= 2048, Mn(9, qu(), s0.bind(null, a, l), null)), [
                n,
                i,
                e
            ];
        }
        function s0(e, t) {
            e.action = t;
        }
        function cs(e) {
            var t = Pe(), l = Ee;
            if (l !== null) return rs(t, l, e);
            Pe(), t = t.memoizedState, l = Pe();
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
            }, t = fe.updateQueue, t === null && (t = Hr(), fe.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
        }
        function qu() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function fs() {
            return Pe().memoizedState;
        }
        function Pu(e, t, l, n) {
            var a = rt();
            n = n === void 0 ? null : n, fe.flags |= e, a.memoizedState = Mn(1 | t, qu(), l, n);
        }
        function ba(e, t, l, n) {
            var a = Pe();
            n = n === void 0 ? null : n;
            var i = a.memoizedState.inst;
            Ee !== null && n !== null && wr(n, Ee.memoizedState.deps) ? a.memoizedState = Mn(t, i, l, n) : (fe.flags |= e, a.memoizedState = Mn(1 | t, i, l, n));
        }
        function os(e, t) {
            Pu(8390656, 8, e, t);
        }
        function ss(e, t) {
            ba(2048, 8, e, t);
        }
        function ds(e, t) {
            return ba(4, 2, e, t);
        }
        function hs(e, t) {
            return ba(4, 4, e, t);
        }
        function ps(e, t) {
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
        function ms(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, ba(4, 4, ps.bind(null, t, e), l);
        }
        function Gr() {}
        function ys(e, t) {
            var l = Pe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            return t !== null && wr(t, n[1]) ? n[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function vs(e, t) {
            var l = Pe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            if (t !== null && wr(t, n[1])) return n[0];
            if (n = e(), $l) {
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
        function Yr(e, t, l) {
            return l === void 0 || (yl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Sd(), fe.lanes |= e, Rl |= e, l);
        }
        function gs(e, t, l, n) {
            return pt(l, t) ? l : On.current !== null ? (e = Yr(e, l, n), pt(e, t) || (Ge = !0), e) : (yl & 42) === 0 ? (Ge = !0, e.memoizedState = l) : (e = Sd(), fe.lanes |= e, Rl |= e, t);
        }
        function bs(e, t, l, n, a) {
            var i = G.p;
            G.p = i !== 0 && 8 > i ? i : 8;
            var s = U.T, p = {};
            U.T = p, Zr(e, !1, t, l);
            try {
                var g = a(), x = U.S;
                if (x !== null && x(p, g), g !== null && typeof g == "object" && typeof g.then == "function") {
                    var z = r0(g, n);
                    Sa(e, t, z, bt(e));
                } else Sa(e, t, n, bt(e));
            } catch (H) {
                Sa(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: H
                }, bt());
            } finally{
                G.p = i, U.T = s;
            }
        }
        function d0() {}
        function Vr(e, t, l, n) {
            if (e.tag !== 5) throw Error(c(476));
            var a = Ss(e).queue;
            bs(e, a, t, ne, l === null ? d0 : function() {
                return Es(e), l(n);
            });
        }
        function Ss(e) {
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
                    lastRenderedReducer: $t,
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
                    lastRenderedReducer: $t,
                    lastRenderedState: l
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Es(e) {
            var t = Ss(e).next.queue;
            Sa(e, t, {}, bt());
        }
        function Xr() {
            return et(Ha);
        }
        function _s() {
            return Pe().memoizedState;
        }
        function Rs() {
            return Pe().memoizedState;
        }
        function h0(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = bt();
                        e = pl(l);
                        var n = ml(t, e, l);
                        n !== null && (St(n, t, l), pa(n, t, l)), t = {
                            cache: Rr()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function p0(e, t, l) {
            var n = bt();
            l = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Hu(e) ? As(t, l) : (l = hr(e, t, l, n), l !== null && (St(l, e, n), Os(l, t, n)));
        }
        function Ts(e, t, l) {
            var n = bt();
            Sa(e, t, l, n);
        }
        function Sa(e, t, l, n) {
            var a = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Hu(e)) As(t, a);
            else {
                var i = e.alternate;
                if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                    var s = t.lastRenderedState, p = i(s, l);
                    if (a.hasEagerState = !0, a.eagerState = p, pt(p, s)) return Eu(e, t, a, 0), Oe === null && Su(), !1;
                } catch  {} finally{}
                if (l = hr(e, t, a, n), l !== null) return St(l, e, n), Os(l, t, n), !0;
            }
            return !1;
        }
        function Zr(e, t, l, n) {
            if (n = {
                lane: 2,
                revertLane: Oc(),
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Hu(e)) {
                if (t) throw Error(c(479));
            } else t = hr(e, l, n, 2), t !== null && St(t, e, 2);
        }
        function Hu(e) {
            var t = e.alternate;
            return e === fe || t !== null && t === fe;
        }
        function As(e, t) {
            Nn = Bu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function Os(e, t, l) {
            if ((l & 4194048) !== 0) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, wf(e, l);
            }
        }
        var ku = {
            readContext: et,
            use: Uu,
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
        }, Ns = {
            readContext: et,
            use: Uu,
            useCallback: function(e, t) {
                return rt().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: et,
            useEffect: os,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, Pu(4194308, 4, ps.bind(null, t, e), l);
            },
            useLayoutEffect: function(e, t) {
                return Pu(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                Pu(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var l = rt();
                t = t === void 0 ? null : t;
                var n = e();
                if ($l) {
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
                var n = rt();
                if (l !== void 0) {
                    var a = l(t);
                    if ($l) {
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
                }, n.queue = e, e = e.dispatch = p0.bind(null, fe, e), [
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
                e = Qr(e);
                var t = e.queue, l = Ts.bind(null, fe, t);
                return t.dispatch = l, [
                    e.memoizedState,
                    l
                ];
            },
            useDebugValue: Gr,
            useDeferredValue: function(e, t) {
                var l = rt();
                return Yr(l, e, t);
            },
            useTransition: function() {
                var e = Qr(!1);
                return e = bs.bind(null, fe, e.queue, !0, !1), rt().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, l) {
                var n = fe, a = rt();
                if (ve) {
                    if (l === void 0) throw Error(c(407));
                    l = l();
                } else {
                    if (l = t(), Oe === null) throw Error(c(349));
                    (he & 124) !== 0 || Zo(n, t, l);
                }
                a.memoizedState = l;
                var i = {
                    value: l,
                    getSnapshot: t
                };
                return a.queue = i, os($o.bind(null, n, i, e), [
                    e
                ]), n.flags |= 2048, Mn(9, qu(), Jo.bind(null, n, i, l, t), null), l;
            },
            useId: function() {
                var e = rt(), t = Oe.identifierPrefix;
                if (ve) {
                    var l = Xt, n = Vt;
                    l = (n & ~(1 << 32 - ht(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = wu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = c0++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Xr,
            useFormState: us,
            useActionState: us,
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
                return t.queue = l, t = Zr.bind(null, fe, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: kr,
            useCacheRefresh: function() {
                return rt().memoizedState = h0.bind(null, fe);
            }
        }, xs = {
            readContext: et,
            use: Uu,
            useCallback: ys,
            useContext: et,
            useEffect: ss,
            useImperativeHandle: ms,
            useInsertionEffect: ds,
            useLayoutEffect: hs,
            useMemo: vs,
            useReducer: zu,
            useRef: fs,
            useState: function() {
                return zu($t);
            },
            useDebugValue: Gr,
            useDeferredValue: function(e, t) {
                var l = Pe();
                return gs(l, Ee.memoizedState, e, t);
            },
            useTransition: function() {
                var e = zu($t)[0], t = Pe().memoizedState;
                return [
                    typeof e == "boolean" ? e : ga(e),
                    t
                ];
            },
            useSyncExternalStore: Xo,
            useId: _s,
            useHostTransitionStatus: Xr,
            useFormState: is,
            useActionState: is,
            useOptimistic: function(e, t) {
                var l = Pe();
                return Io(l, Ee, e, t);
            },
            useMemoCache: kr,
            useCacheRefresh: Rs
        }, m0 = {
            readContext: et,
            use: Uu,
            useCallback: ys,
            useContext: et,
            useEffect: ss,
            useImperativeHandle: ms,
            useInsertionEffect: ds,
            useLayoutEffect: hs,
            useMemo: vs,
            useReducer: Lr,
            useRef: fs,
            useState: function() {
                return Lr($t);
            },
            useDebugValue: Gr,
            useDeferredValue: function(e, t) {
                var l = Pe();
                return Ee === null ? Yr(l, e, t) : gs(l, Ee.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Lr($t)[0], t = Pe().memoizedState;
                return [
                    typeof e == "boolean" ? e : ga(e),
                    t
                ];
            },
            useSyncExternalStore: Xo,
            useId: _s,
            useHostTransitionStatus: Xr,
            useFormState: cs,
            useActionState: cs,
            useOptimistic: function(e, t) {
                var l = Pe();
                return Ee !== null ? Io(l, Ee, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: kr,
            useCacheRefresh: Rs
        }, Cn = null, Ea = 0;
        function ju(e) {
            var t = Ea;
            return Ea += 1, Cn === null && (Cn = []), ko(Cn, e, t);
        }
        function _a(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Lu(e, t) {
            throw t.$$typeof === R ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Ms(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Cs(e) {
            function t(A, _) {
                if (e) {
                    var N = A.deletions;
                    N === null ? (A.deletions = [
                        _
                    ], A.flags |= 16) : N.push(_);
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
                return A = Yt(A, _), A.index = 0, A.sibling = null, A;
            }
            function i(A, _, N) {
                return A.index = N, e ? (N = A.alternate, N !== null ? (N = N.index, N < _ ? (A.flags |= 67108866, _) : N) : (A.flags |= 67108866, _)) : (A.flags |= 1048576, _);
            }
            function s(A) {
                return e && A.alternate === null && (A.flags |= 67108866), A;
            }
            function p(A, _, N, P) {
                return _ === null || _.tag !== 6 ? (_ = mr(N, A.mode, P), _.return = A, _) : (_ = a(_, N), _.return = A, _);
            }
            function g(A, _, N, P) {
                var J = N.type;
                return J === M ? z(A, _, N.props.children, P, N.key) : _ !== null && (_.elementType === J || typeof J == "object" && J !== null && J.$$typeof === $ && Ms(J) === _.type) ? (_ = a(_, N.props), _a(_, N), _.return = A, _) : (_ = Ru(N.type, N.key, N.props, null, A.mode, P), _a(_, N), _.return = A, _);
            }
            function x(A, _, N, P) {
                return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== N.containerInfo || _.stateNode.implementation !== N.implementation ? (_ = yr(N, A.mode, P), _.return = A, _) : (_ = a(_, N.children || []), _.return = A, _);
            }
            function z(A, _, N, P, J) {
                return _ === null || _.tag !== 7 ? (_ = Ql(N, A.mode, P, J), _.return = A, _) : (_ = a(_, N), _.return = A, _);
            }
            function H(A, _, N) {
                if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return _ = mr("" + _, A.mode, N), _.return = A, _;
                if (typeof _ == "object" && _ !== null) {
                    switch(_.$$typeof){
                        case b:
                            return N = Ru(_.type, _.key, _.props, null, A.mode, N), _a(N, _), N.return = A, N;
                        case O:
                            return _ = yr(_, A.mode, N), _.return = A, _;
                        case $:
                            var P = _._init;
                            return _ = P(_._payload), H(A, _, N);
                    }
                    if (He(_) || ge(_)) return _ = Ql(_, A.mode, N, null), _.return = A, _;
                    if (typeof _.then == "function") return H(A, ju(_), N);
                    if (_.$$typeof === k) return H(A, Nu(A, _), N);
                    Lu(A, _);
                }
                return null;
            }
            function C(A, _, N, P) {
                var J = _ !== null ? _.key : null;
                if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return J !== null ? null : p(A, _, "" + N, P);
                if (typeof N == "object" && N !== null) {
                    switch(N.$$typeof){
                        case b:
                            return N.key === J ? g(A, _, N, P) : null;
                        case O:
                            return N.key === J ? x(A, _, N, P) : null;
                        case $:
                            return J = N._init, N = J(N._payload), C(A, _, N, P);
                    }
                    if (He(N) || ge(N)) return J !== null ? null : z(A, _, N, P, null);
                    if (typeof N.then == "function") return C(A, _, ju(N), P);
                    if (N.$$typeof === k) return C(A, _, Nu(A, N), P);
                    Lu(A, N);
                }
                return null;
            }
            function D(A, _, N, P, J) {
                if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint") return A = A.get(N) || null, p(_, A, "" + P, J);
                if (typeof P == "object" && P !== null) {
                    switch(P.$$typeof){
                        case b:
                            return A = A.get(P.key === null ? N : P.key) || null, g(_, A, P, J);
                        case O:
                            return A = A.get(P.key === null ? N : P.key) || null, x(_, A, P, J);
                        case $:
                            var oe = P._init;
                            return P = oe(P._payload), D(A, _, N, P, J);
                    }
                    if (He(P) || ge(P)) return A = A.get(N) || null, z(_, A, P, J, null);
                    if (typeof P.then == "function") return D(A, _, N, ju(P), J);
                    if (P.$$typeof === k) return D(A, _, N, Nu(_, P), J);
                    Lu(_, P);
                }
                return null;
            }
            function ae(A, _, N, P) {
                for(var J = null, oe = null, W = _, le = _ = 0, Ve = null; W !== null && le < N.length; le++){
                    W.index > le ? (Ve = W, W = null) : Ve = W.sibling;
                    var me = C(A, W, N[le], P);
                    if (me === null) {
                        W === null && (W = Ve);
                        break;
                    }
                    e && W && me.alternate === null && t(A, W), _ = i(me, _, le), oe === null ? J = me : oe.sibling = me, oe = me, W = Ve;
                }
                if (le === N.length) return l(A, W), ve && Gl(A, le), J;
                if (W === null) {
                    for(; le < N.length; le++)W = H(A, N[le], P), W !== null && (_ = i(W, _, le), oe === null ? J = W : oe.sibling = W, oe = W);
                    return ve && Gl(A, le), J;
                }
                for(W = n(W); le < N.length; le++)Ve = D(W, A, le, N[le], P), Ve !== null && (e && Ve.alternate !== null && W.delete(Ve.key === null ? le : Ve.key), _ = i(Ve, _, le), oe === null ? J = Ve : oe.sibling = Ve, oe = Ve);
                return e && W.forEach(function(Bl) {
                    return t(A, Bl);
                }), ve && Gl(A, le), J;
            }
            function ee(A, _, N, P) {
                if (N == null) throw Error(c(151));
                for(var J = null, oe = null, W = _, le = _ = 0, Ve = null, me = N.next(); W !== null && !me.done; le++, me = N.next()){
                    W.index > le ? (Ve = W, W = null) : Ve = W.sibling;
                    var Bl = C(A, W, me.value, P);
                    if (Bl === null) {
                        W === null && (W = Ve);
                        break;
                    }
                    e && W && Bl.alternate === null && t(A, W), _ = i(Bl, _, le), oe === null ? J = Bl : oe.sibling = Bl, oe = Bl, W = Ve;
                }
                if (me.done) return l(A, W), ve && Gl(A, le), J;
                if (W === null) {
                    for(; !me.done; le++, me = N.next())me = H(A, me.value, P), me !== null && (_ = i(me, _, le), oe === null ? J = me : oe.sibling = me, oe = me);
                    return ve && Gl(A, le), J;
                }
                for(W = n(W); !me.done; le++, me = N.next())me = D(W, A, le, me.value, P), me !== null && (e && me.alternate !== null && W.delete(me.key === null ? le : me.key), _ = i(me, _, le), oe === null ? J = me : oe.sibling = me, oe = me);
                return e && W.forEach(function(y1) {
                    return t(A, y1);
                }), ve && Gl(A, le), J;
            }
            function Re(A, _, N, P) {
                if (typeof N == "object" && N !== null && N.type === M && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
                    switch(N.$$typeof){
                        case b:
                            e: {
                                for(var J = N.key; _ !== null;){
                                    if (_.key === J) {
                                        if (J = N.type, J === M) {
                                            if (_.tag === 7) {
                                                l(A, _.sibling), P = a(_, N.props.children), P.return = A, A = P;
                                                break e;
                                            }
                                        } else if (_.elementType === J || typeof J == "object" && J !== null && J.$$typeof === $ && Ms(J) === _.type) {
                                            l(A, _.sibling), P = a(_, N.props), _a(P, N), P.return = A, A = P;
                                            break e;
                                        }
                                        l(A, _);
                                        break;
                                    } else t(A, _);
                                    _ = _.sibling;
                                }
                                N.type === M ? (P = Ql(N.props.children, A.mode, P, N.key), P.return = A, A = P) : (P = Ru(N.type, N.key, N.props, null, A.mode, P), _a(P, N), P.return = A, A = P);
                            }
                            return s(A);
                        case O:
                            e: {
                                for(J = N.key; _ !== null;){
                                    if (_.key === J) if (_.tag === 4 && _.stateNode.containerInfo === N.containerInfo && _.stateNode.implementation === N.implementation) {
                                        l(A, _.sibling), P = a(_, N.children || []), P.return = A, A = P;
                                        break e;
                                    } else {
                                        l(A, _);
                                        break;
                                    }
                                    else t(A, _);
                                    _ = _.sibling;
                                }
                                P = yr(N, A.mode, P), P.return = A, A = P;
                            }
                            return s(A);
                        case $:
                            return J = N._init, N = J(N._payload), Re(A, _, N, P);
                    }
                    if (He(N)) return ae(A, _, N, P);
                    if (ge(N)) {
                        if (J = ge(N), typeof J != "function") throw Error(c(150));
                        return N = J.call(N), ee(A, _, N, P);
                    }
                    if (typeof N.then == "function") return Re(A, _, ju(N), P);
                    if (N.$$typeof === k) return Re(A, _, Nu(A, N), P);
                    Lu(A, N);
                }
                return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, _ !== null && _.tag === 6 ? (l(A, _.sibling), P = a(_, N), P.return = A, A = P) : (l(A, _), P = mr(N, A.mode, P), P.return = A, A = P), s(A)) : l(A, _);
            }
            return function(A, _, N, P) {
                try {
                    Ea = 0;
                    var J = Re(A, _, N, P);
                    return Cn = null, J;
                } catch (W) {
                    if (W === da || W === Mu) throw W;
                    var oe = mt(29, W, null, A.mode);
                    return oe.lanes = P, oe.return = A, oe;
                } finally{}
            };
        }
        var Dn = Cs(!0), Ds = Cs(!1), Nt = j(null), Ht = null;
        function vl(e) {
            var t = e.alternate;
            Y(je, je.current & 1), Y(Nt, e), Ht === null && (t === null || On.current !== null || t.memoizedState !== null) && (Ht = e);
        }
        function Bs(e) {
            if (e.tag === 22) {
                if (Y(je, je.current), Y(Nt, e), Ht === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (Ht = e);
                }
            } else gl();
        }
        function gl() {
            Y(je, je.current), Y(Nt, Nt.current);
        }
        function Wt(e) {
            X(Nt), Ht === e && (Ht = null), X(je);
        }
        var je = j(0);
        function Qu(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var l = t.memoizedState;
                    if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || Hc(l))) return t;
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
        function Jr(e, t, l, n) {
            t = e.memoizedState, l = l(n, t), l = l == null ? t : S({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var $r = {
            enqueueSetState: function(e, t, l) {
                e = e._reactInternals;
                var n = bt(), a = pl(n);
                a.payload = t, l != null && (a.callback = l), t = ml(e, a, n), t !== null && (St(t, e, n), pa(t, e, n));
            },
            enqueueReplaceState: function(e, t, l) {
                e = e._reactInternals;
                var n = bt(), a = pl(n);
                a.tag = 1, a.payload = t, l != null && (a.callback = l), t = ml(e, a, n), t !== null && (St(t, e, n), pa(t, e, n));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var l = bt(), n = pl(l);
                n.tag = 2, t != null && (n.callback = t), t = ml(e, n, l), t !== null && (St(t, e, l), pa(t, e, l));
            }
        };
        function ws(e, t, l, n, a, i, s) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, s) : t.prototype && t.prototype.isPureReactComponent ? !aa(l, n) || !aa(a, i) : !0;
        }
        function Us(e, t, l, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && $r.enqueueReplaceState(t, t.state, null);
        }
        function Wl(e, t) {
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
        var Ku = typeof reportError == "function" ? reportError : function(e) {
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
        function zs(e) {
            Ku(e);
        }
        function qs(e) {
            console.error(e);
        }
        function Ps(e) {
            Ku(e);
        }
        function Gu(e, t) {
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
        function Hs(e, t, l) {
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
            return l = pl(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Gu(e, t);
            }, l;
        }
        function ks(e) {
            return e = pl(e), e.tag = 3, e;
        }
        function js(e, t, l, n) {
            var a = l.type.getDerivedStateFromError;
            if (typeof a == "function") {
                var i = n.value;
                e.payload = function() {
                    return a(i);
                }, e.callback = function() {
                    Hs(t, l, n);
                };
            }
            var s = l.stateNode;
            s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
                Hs(t, l, n), typeof a != "function" && (Tl === null ? Tl = new Set([
                    this
                ]) : Tl.add(this));
                var p = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: p !== null ? p : ""
                });
            });
        }
        function y0(e, t, l, n, a) {
            if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (t = l.alternate, t !== null && fa(t, l, a, !0), l = Nt.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return Ht === null ? Ec() : l.alternate === null && we === 0 && (we = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Or ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
                                n
                            ]) : t.add(n), Rc(e, n, a)), !1;
                        case 22:
                            return l.flags |= 65536, n === Or ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    n
                                ])
                            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([
                                n
                            ]) : l.add(n)), Rc(e, n, a)), !1;
                    }
                    throw Error(c(435, l.tag));
                }
                return Rc(e, n, a), Ec(), !1;
            }
            if (ve) return t = Nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== br && (e = Error(c(422), {
                cause: n
            }), ca(Rt(e, l)))) : (n !== br && (t = Error(c(423), {
                cause: n
            }), ca(Rt(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = Rt(n, l), a = Wr(e.stateNode, n, a), Mr(e, a), we !== 4 && (we = 2)), !1;
            var i = Error(c(520), {
                cause: n
            });
            if (i = Rt(i, l), Ma === null ? Ma = [
                i
            ] : Ma.push(i), we !== 4 && (we = 2), t === null) return !0;
            n = Rt(n, l), l = t;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, e = a & -a, l.lanes |= e, e = Wr(l.stateNode, n, e), Mr(l, e), !1;
                    case 1:
                        if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Tl === null || !Tl.has(i)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = ks(a), js(a, e, l, n), Mr(l, a), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Ls = Error(c(461)), Ge = !1;
        function Ze(e, t, l, n) {
            t.child = e === null ? Ds(t, null, l, n) : Dn(t, e.child, l, n);
        }
        function Qs(e, t, l, n, a) {
            l = l.render;
            var i = t.ref;
            if ("ref" in n) {
                var s = {};
                for(var p in n)p !== "ref" && (s[p] = n[p]);
            } else s = n;
            return Zl(t), n = Ur(e, t, l, s, i, a), p = zr(), e !== null && !Ge ? (qr(e, t, a), Ft(e, t, a)) : (ve && p && vr(t), t.flags |= 1, Ze(e, t, n, a), t.child);
        }
        function Ks(e, t, l, n, a) {
            if (e === null) {
                var i = l.type;
                return typeof i == "function" && !pr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Gs(e, t, i, n, a)) : (e = Ru(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (i = e.child, !uc(e, a)) {
                var s = i.memoizedProps;
                if (l = l.compare, l = l !== null ? l : aa, l(s, n) && e.ref === t.ref) return Ft(e, t, a);
            }
            return t.flags |= 1, e = Yt(i, n), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Gs(e, t, l, n, a) {
            if (e !== null) {
                var i = e.memoizedProps;
                if (aa(i, n) && e.ref === t.ref) if (Ge = !1, t.pendingProps = n = i, uc(e, a)) (e.flags & 131072) !== 0 && (Ge = !0);
                else return t.lanes = e.lanes, Ft(e, t, a);
            }
            return Fr(e, t, l, n, a);
        }
        function Ys(e, t, l) {
            var n = t.pendingProps, a = n.children, i = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (n = i !== null ? i.baseLanes | l : l, e !== null) {
                        for(a = t.child = e.child, i = 0; a !== null;)i = i | a.lanes | a.childLanes, a = a.sibling;
                        t.childLanes = i & ~n;
                    } else t.childLanes = 0, t.child = null;
                    return Vs(e, t, n, l);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && xu(t, i !== null ? i.cachePool : null), i !== null ? Go(t, i) : Dr(), Bs(t);
                else return t.lanes = t.childLanes = 536870912, Vs(e, t, i !== null ? i.baseLanes | l : l, l);
            } else i !== null ? (xu(t, i.cachePool), Go(t, i), gl(), t.memoizedState = null) : (e !== null && xu(t, null), Dr(), gl());
            return Ze(e, t, a, l), t.child;
        }
        function Vs(e, t, l, n) {
            var a = Ar();
            return a = a === null ? null : {
                parent: ke._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: a
            }, e !== null && xu(t, null), Dr(), Bs(t), e !== null && fa(e, t, n, !0), null;
        }
        function Yu(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(c(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function Fr(e, t, l, n, a) {
            return Zl(t), l = Ur(e, t, l, n, void 0, a), n = zr(), e !== null && !Ge ? (qr(e, t, a), Ft(e, t, a)) : (ve && n && vr(t), t.flags |= 1, Ze(e, t, l, a), t.child);
        }
        function Xs(e, t, l, n, a, i) {
            return Zl(t), t.updateQueue = null, l = Vo(t, n, l, a), Yo(e), n = zr(), e !== null && !Ge ? (qr(e, t, i), Ft(e, t, i)) : (ve && n && vr(t), t.flags |= 1, Ze(e, t, l, i), t.child);
        }
        function Zs(e, t, l, n, a) {
            if (Zl(t), t.stateNode === null) {
                var i = En, s = l.contextType;
                typeof s == "object" && s !== null && (i = et(s)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = $r, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Nr(t), s = l.contextType, i.context = typeof s == "object" && s !== null ? et(s) : En, i.state = t.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (Jr(t, l, s, n), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && $r.enqueueReplaceState(i, i.state, null), ya(t, n, i, a), ma(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
            } else if (e === null) {
                i = t.stateNode;
                var p = t.memoizedProps, g = Wl(l, p);
                i.props = g;
                var x = i.context, z = l.contextType;
                s = En, typeof z == "object" && z !== null && (s = et(z));
                var H = l.getDerivedStateFromProps;
                z = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", p = t.pendingProps !== p, z || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (p || x !== s) && Us(t, i, n, s), hl = !1;
                var C = t.memoizedState;
                i.state = C, ya(t, n, i, a), ma(), x = t.memoizedState, p || C !== x || hl ? (typeof H == "function" && (Jr(t, l, H, n), x = t.memoizedState), (g = hl || ws(t, l, g, n, C, x, s)) ? (z || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = x), i.props = n, i.state = x, i.context = s, n = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
            } else {
                i = t.stateNode, xr(e, t), s = t.memoizedProps, z = Wl(l, s), i.props = z, H = t.pendingProps, C = i.context, x = l.contextType, g = En, typeof x == "object" && x !== null && (g = et(x)), p = l.getDerivedStateFromProps, (x = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== H || C !== g) && Us(t, i, n, g), hl = !1, C = t.memoizedState, i.state = C, ya(t, n, i, a), ma();
                var D = t.memoizedState;
                s !== H || C !== D || hl || e !== null && e.dependencies !== null && Ou(e.dependencies) ? (typeof p == "function" && (Jr(t, l, p, n), D = t.memoizedState), (z = hl || ws(t, l, z, n, C, D, g) || e !== null && e.dependencies !== null && Ou(e.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, D, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, D, g)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = D), i.props = n, i.state = D, i.context = g, n = z) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), n = !1);
            }
            return i = n, Yu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = Dn(t, e.child, null, a), t.child = Dn(t, null, l, a)) : Ze(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = Ft(e, t, a), e;
        }
        function Js(e, t, l, n) {
            return ra(), t.flags |= 256, Ze(e, t, l, n), t.child;
        }
        var Ir = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function ec(e) {
            return {
                baseLanes: e,
                cachePool: qo()
            };
        }
        function tc(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= xt), e;
        }
        function $s(e, t, l) {
            var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, s;
            if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (je.current & 2) !== 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (ve) {
                    if (a ? vl(t) : gl(), ve) {
                        var p = Be, g;
                        if (g = p) {
                            e: {
                                for(g = p, p = Pt; g.nodeType !== 8;){
                                    if (!p) {
                                        p = null;
                                        break e;
                                    }
                                    if (g = Ut(g.nextSibling), g === null) {
                                        p = null;
                                        break e;
                                    }
                                }
                                p = g;
                            }
                            p !== null ? (t.memoizedState = {
                                dehydrated: p,
                                treeContext: Kl !== null ? {
                                    id: Vt,
                                    overflow: Xt
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, g = mt(18, null, null, 0), g.stateNode = p, g.return = t, t.child = g, at = t, Be = null, g = !0) : g = !1;
                        }
                        g || Vl(t);
                    }
                    if (p = t.memoizedState, p !== null && (p = p.dehydrated, p !== null)) return Hc(p) ? t.lanes = 32 : t.lanes = 536870912, null;
                    Wt(t);
                }
                return p = n.children, n = n.fallback, a ? (gl(), a = t.mode, p = Vu({
                    mode: "hidden",
                    children: p
                }, a), n = Ql(n, a, l, null), p.return = t, n.return = t, p.sibling = n, t.child = p, a = t.child, a.memoizedState = ec(l), a.childLanes = tc(e, s, l), t.memoizedState = Ir, n) : (vl(t), lc(t, p));
            }
            if (g = e.memoizedState, g !== null && (p = g.dehydrated, p !== null)) {
                if (i) t.flags & 256 ? (vl(t), t.flags &= -257, t = nc(e, t, l)) : t.memoizedState !== null ? (gl(), t.child = e.child, t.flags |= 128, t = null) : (gl(), a = n.fallback, p = t.mode, n = Vu({
                    mode: "visible",
                    children: n.children
                }, p), a = Ql(a, p, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, Dn(t, e.child, null, l), n = t.child, n.memoizedState = ec(l), n.childLanes = tc(e, s, l), t.memoizedState = Ir, t = a);
                else if (vl(t), Hc(p)) {
                    if (s = p.nextSibling && p.nextSibling.dataset, s) var x = s.dgst;
                    s = x, n = Error(c(419)), n.stack = "", n.digest = s, ca({
                        value: n,
                        source: null,
                        stack: null
                    }), t = nc(e, t, l);
                } else if (Ge || fa(e, t, l, !1), s = (l & e.childLanes) !== 0, Ge || s) {
                    if (s = Oe, s !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : ki(n), n = (n & (s.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== g.retryLane)) throw g.retryLane = n, Sn(e, n), St(s, e, n), Ls;
                    p.data === "$?" || Ec(), t = nc(e, t, l);
                } else p.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, Be = Ut(p.nextSibling), at = t, ve = !0, Yl = null, Pt = !1, e !== null && (At[Ot++] = Vt, At[Ot++] = Xt, At[Ot++] = Kl, Vt = e.id, Xt = e.overflow, Kl = t), t = lc(t, n.children), t.flags |= 4096);
                return t;
            }
            return a ? (gl(), a = n.fallback, p = t.mode, g = e.child, x = g.sibling, n = Yt(g, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = g.subtreeFlags & 65011712, x !== null ? a = Yt(x, a) : (a = Ql(a, p, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, p = e.child.memoizedState, p === null ? p = ec(l) : (g = p.cachePool, g !== null ? (x = ke._currentValue, g = g.parent !== x ? {
                parent: x,
                pool: x
            } : g) : g = qo(), p = {
                baseLanes: p.baseLanes | l,
                cachePool: g
            }), a.memoizedState = p, a.childLanes = tc(e, s, l), t.memoizedState = Ir, n) : (vl(t), l = e.child, e = l.sibling, l = Yt(l, {
                mode: "visible",
                children: n.children
            }), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [
                e
            ], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function lc(e, t) {
            return t = Vu({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Vu(e, t) {
            return e = mt(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function nc(e, t, l) {
            return Dn(t, e.child, null, l), e = lc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function Ws(e, t, l) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), Er(e.return, t, l);
        }
        function ac(e, t, l, n, a) {
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
        function Fs(e, t, l) {
            var n = t.pendingProps, a = n.revealOrder, i = n.tail;
            if (Ze(e, t, n.children, l), n = je.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && Ws(e, l, t);
                    else if (e.tag === 19) Ws(e, l, t);
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
            switch(Y(je, n), a){
                case "forwards":
                    for(l = t.child, a = null; l !== null;)e = l.alternate, e !== null && Qu(e) === null && (a = l), l = l.sibling;
                    l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), ac(t, !1, a, l, i);
                    break;
                case "backwards":
                    for(l = null, a = t.child, t.child = null; a !== null;){
                        if (e = a.alternate, e !== null && Qu(e) === null) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = l, l = a, a = e;
                    }
                    ac(t, !0, l, null, i);
                    break;
                case "together":
                    ac(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function Ft(e, t, l) {
            if (e !== null && (t.dependencies = e.dependencies), Rl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
                if (fa(e, t, l, !1), (l & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(c(153));
            if (t.child !== null) {
                for(e = t.child, l = Yt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = Yt(e, e.pendingProps), l.return = t;
                l.sibling = null;
            }
            return t.child;
        }
        function uc(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ou(e)));
        }
        function v0(e, t, l) {
            switch(t.tag){
                case 3:
                    xe(t, t.stateNode.containerInfo), dl(t, ke, e.memoizedState.cache), ra();
                    break;
                case 27:
                case 5:
                    Ui(t);
                    break;
                case 4:
                    xe(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    dl(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var n = t.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (vl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? $s(e, t, l) : (vl(t), e = Ft(e, t, l), e !== null ? e.sibling : null);
                    vl(t);
                    break;
                case 19:
                    var a = (e.flags & 128) !== 0;
                    if (n = (l & t.childLanes) !== 0, n || (fa(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                        if (n) return Fs(e, t, l);
                        t.flags |= 128;
                    }
                    if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Y(je, je.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Ys(e, t, l);
                case 24:
                    dl(t, ke, e.memoizedState.cache);
            }
            return Ft(e, t, l);
        }
        function Is(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ge = !0;
            else {
                if (!uc(e, l) && (t.flags & 128) === 0) return Ge = !1, v0(e, t, l);
                Ge = (e.flags & 131072) !== 0;
            }
            else Ge = !1, ve && (t.flags & 1048576) !== 0 && Mo(t, Au, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var n = t.elementType, a = n._init;
                        if (n = a(n._payload), t.type = n, typeof n == "function") pr(n) ? (e = Wl(n, e), t.tag = 1, t = Zs(null, t, n, e, l)) : (t.tag = 0, t = Fr(null, t, n, e, l));
                        else {
                            if (n != null) {
                                if (a = n.$$typeof, a === V) {
                                    t.tag = 11, t = Qs(null, t, n, e, l);
                                    break e;
                                } else if (a === Z) {
                                    t.tag = 14, t = Ks(null, t, n, e, l);
                                    break e;
                                }
                            }
                            throw t = Dt(n) || n, Error(c(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return Fr(e, t, t.type, t.pendingProps, l);
                case 1:
                    return n = t.type, a = Wl(n, t.pendingProps), Zs(e, t, n, a, l);
                case 3:
                    e: {
                        if (xe(t, t.stateNode.containerInfo), e === null) throw Error(c(387));
                        n = t.pendingProps;
                        var i = t.memoizedState;
                        a = i.element, xr(e, t), ya(t, n, null, l);
                        var s = t.memoizedState;
                        if (n = s.cache, dl(t, ke, n), n !== i.cache && _r(t, [
                            ke
                        ], l, !0), ma(), n = s.element, i.isDehydrated) if (i = {
                            element: n,
                            isDehydrated: !1,
                            cache: s.cache
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                            t = Js(e, t, n, l);
                            break e;
                        } else if (n !== a) {
                            a = Rt(Error(c(424)), t), ca(a), t = Js(e, t, n, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(Be = Ut(e.firstChild), at = t, ve = !0, Yl = null, Pt = !0, l = Ds(t, null, n, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (ra(), n === a) {
                                t = Ft(e, t, l);
                                break e;
                            }
                            Ze(e, t, n, l);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Yu(e, t), e === null ? (l = nh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ve || (l = t.type, e = t.pendingProps, n = ii(ie.current).createElement(l), n[Ie] = t, n[ut] = e, $e(n, l, e), Ke(n), t.stateNode = n) : t.memoizedState = nh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return Ui(t), e === null && ve && (n = t.stateNode = eh(t.type, t.pendingProps, ie.current), at = t, Pt = !0, a = Be, Nl(t.type) ? (kc = a, Be = Ut(n.firstChild)) : Be = a), Ze(e, t, t.pendingProps.children, l), Yu(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && ve && ((a = n = Be) && (n = Y0(n, t.type, t.pendingProps, Pt), n !== null ? (t.stateNode = n, at = t, Be = Ut(n.firstChild), Pt = !1, a = !0) : a = !1), a || Vl(t)), Ui(t), a = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, n = i.children, zc(a, i) ? n = null : s !== null && zc(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Ur(e, t, f0, null, null, l), Ha._currentValue = a), Yu(e, t), Ze(e, t, n, l), t.child;
                case 6:
                    return e === null && ve && ((e = l = Be) && (l = V0(l, t.pendingProps, Pt), l !== null ? (t.stateNode = l, at = t, Be = null, e = !0) : e = !1), e || Vl(t)), null;
                case 13:
                    return $s(e, t, l);
                case 4:
                    return xe(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Dn(t, null, n, l) : Ze(e, t, n, l), t.child;
                case 11:
                    return Qs(e, t, t.type, t.pendingProps, l);
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
                    return Ks(e, t, t.type, t.pendingProps, l);
                case 15:
                    return Gs(e, t, t.type, t.pendingProps, l);
                case 19:
                    return Fs(e, t, l);
                case 31:
                    return n = t.pendingProps, l = t.mode, n = {
                        mode: n.mode,
                        children: n.children
                    }, e === null ? (l = Vu(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Yt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return Ys(e, t, l);
                case 24:
                    return Zl(t), n = et(ke), e === null ? (a = Ar(), a === null && (a = Oe, i = Rr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = {
                        parent: n,
                        cache: a
                    }, Nr(t), dl(t, ke, a)) : ((e.lanes & l) !== 0 && (xr(e, t), ya(t, null, null, l), ma()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = {
                        parent: n,
                        cache: n
                    }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), dl(t, ke, n)) : (n = i.cache, dl(t, ke, n), n !== a.cache && _r(t, [
                        ke
                    ], l, !0))), Ze(e, t, t.pendingProps.children, l), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(c(156, t.tag));
        }
        function It(e) {
            e.flags |= 4;
        }
        function ed(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !ch(t)) {
                if (t = Nt.current, t !== null && ((he & 4194048) === he ? Ht !== null : (he & 62914560) !== he && (he & 536870912) === 0 || t !== Ht)) throw ha = Or, Po;
                e.flags |= 8192;
            }
        }
        function Xu(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Df() : 536870912, e.lanes |= t, zn |= t);
        }
        function Ra(e, t) {
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
        function Ce(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
            if (t) for(var a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
            else for(a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
            return e.subtreeFlags |= n, e.childLanes = l, t;
        }
        function g0(e, t, l) {
            var n = t.pendingProps;
            switch(gr(t), t.tag){
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
                    return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Jt(ke), cl(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ia(t) ? It(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Bo())), Ce(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (It(t), l !== null ? (Ce(t), ed(t, l)) : (Ce(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (It(t), Ce(t), ed(t, l)) : (Ce(t), t.flags &= -16777217) : (e.memoizedProps !== n && It(t), Ce(t), t.flags &= -16777217), null;
                case 27:
                    au(t), l = ie.current;
                    var a = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== n && It(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(c(166));
                            return Ce(t), null;
                        }
                        e = I.current, ia(t) ? Co(t) : (e = eh(a, n, l), t.stateNode = e, It(t));
                    }
                    return Ce(t), null;
                case 5:
                    if (au(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && It(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(c(166));
                            return Ce(t), null;
                        }
                        if (e = I.current, ia(t)) Co(t);
                        else {
                            switch(a = ii(ie.current), e){
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
                            e && It(t);
                        }
                    }
                    return Ce(t), t.flags &= -16777217, null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== n && It(t);
                    else {
                        if (typeof n != "string" && t.stateNode === null) throw Error(c(166));
                        if (e = ie.current, ia(t)) {
                            if (e = t.stateNode, l = t.memoizedProps, n = null, a = at, a !== null) switch(a.tag){
                                case 27:
                                case 5:
                                    n = a.memoizedProps;
                            }
                            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Xd(e.nodeValue, l)), e || Vl(t);
                        } else e = ii(e).createTextNode(n), e[Ie] = t, t.stateNode = e;
                    }
                    return Ce(t), null;
                case 13:
                    if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (a = ia(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!a) throw Error(c(318));
                                if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(c(317));
                                a[Ie] = t;
                            } else ra(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Ce(t), a = !1;
                        } else a = Bo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                        if (!a) return t.flags & 256 ? (Wt(t), t) : (Wt(t), null);
                    }
                    if (Wt(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                        n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                        var i = null;
                        n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), Xu(t, t.updateQueue), Ce(t), null;
                case 4:
                    return cl(), e === null && Cc(t.stateNode.containerInfo), Ce(t), null;
                case 10:
                    return Jt(t.type), Ce(t), null;
                case 19:
                    if (X(je), a = t.memoizedState, a === null) return Ce(t), null;
                    if (n = (t.flags & 128) !== 0, i = a.rendering, i === null) if (n) Ra(a, !1);
                    else {
                        if (we !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (i = Qu(e), i !== null) {
                                for(t.flags |= 128, Ra(a, !1), e = i.updateQueue, t.updateQueue = e, Xu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)xo(l, e), l = l.sibling;
                                return Y(je, je.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && qt() > $u && (t.flags |= 128, n = !0, Ra(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!n) if (e = Qu(i), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Xu(t, e), Ra(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ve) return Ce(t), null;
                        } else 2 * qt() - a.renderingStartTime > $u && l !== 536870912 && (t.flags |= 128, n = !0, Ra(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = qt(), t.sibling = null, e = je.current, Y(je, n ? e & 1 | 2 : e & 1), t) : (Ce(t), null);
                case 22:
                case 23:
                    return Wt(t), Br(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), l = t.updateQueue, l !== null && Xu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && X(Jl), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Jt(ke), Ce(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(c(156, t.tag));
        }
        function b0(e, t) {
            switch(gr(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Jt(ke), cl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return au(t), null;
                case 13:
                    if (Wt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(c(340));
                        ra();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return X(je), null;
                case 4:
                    return cl(), null;
                case 10:
                    return Jt(t.type), null;
                case 22:
                case 23:
                    return Wt(t), Br(), e !== null && X(Jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Jt(ke), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function td(e, t) {
            switch(gr(t), t.tag){
                case 3:
                    Jt(ke), cl();
                    break;
                case 26:
                case 27:
                case 5:
                    au(t);
                    break;
                case 4:
                    cl();
                    break;
                case 13:
                    Wt(t);
                    break;
                case 19:
                    X(je);
                    break;
                case 10:
                    Jt(t.type);
                    break;
                case 22:
                case 23:
                    Wt(t), Br(), e !== null && X(Jl);
                    break;
                case 24:
                    Jt(ke);
            }
        }
        function Ta(e, t) {
            try {
                var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
                if (n !== null) {
                    var a = n.next;
                    l = a;
                    do {
                        if ((l.tag & e) === e) {
                            n = void 0;
                            var i = l.create, s = l.inst;
                            n = i(), s.destroy = n;
                        }
                        l = l.next;
                    }while (l !== a);
                }
            } catch (p) {
                Ae(t, t.return, p);
            }
        }
        function bl(e, t, l) {
            try {
                var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
                if (a !== null) {
                    var i = a.next;
                    n = i;
                    do {
                        if ((n.tag & e) === e) {
                            var s = n.inst, p = s.destroy;
                            if (p !== void 0) {
                                s.destroy = void 0, a = t;
                                var g = l, x = p;
                                try {
                                    x();
                                } catch (z) {
                                    Ae(a, g, z);
                                }
                            }
                        }
                        n = n.next;
                    }while (n !== i);
                }
            } catch (z) {
                Ae(t, t.return, z);
            }
        }
        function ld(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    Ko(t, l);
                } catch (n) {
                    Ae(e, e.return, n);
                }
            }
        }
        function nd(e, t, l) {
            l.props = Wl(e.type, e.memoizedProps), l.state = e.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (n) {
                Ae(e, t, n);
            }
        }
        function Aa(e, t) {
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
        function ad(e) {
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
        function ic(e, t, l) {
            try {
                var n = e.stateNode;
                j0(n, e.type, l, t), n[ut] = t;
            } catch (a) {
                Ae(e, e.return, a);
            }
        }
        function ud(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Nl(e.type) || e.tag === 4;
        }
        function rc(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || ud(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Nl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function cc(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ui));
            else if (n !== 4 && (n === 27 && Nl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(cc(e, t, l), e = e.sibling; e !== null;)cc(e, t, l), e = e.sibling;
        }
        function Zu(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (n !== 4 && (n === 27 && Nl(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(Zu(e, t, l), e = e.sibling; e !== null;)Zu(e, t, l), e = e.sibling;
        }
        function id(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var n = e.type, a = t.attributes; a.length;)t.removeAttributeNode(a[0]);
                $e(t, n, l), t[Ie] = e, t[ut] = l;
            } catch (i) {
                Ae(e, e.return, i);
            }
        }
        var el = !1, ze = !1, fc = !1, rd = typeof WeakSet == "function" ? WeakSet : Set, Ye = null;
        function S0(e, t) {
            if (e = e.containerInfo, wc = di, e = go(e), rr(e)) {
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
                        var s = 0, p = -1, g = -1, x = 0, z = 0, H = e, C = null;
                        t: for(;;){
                            for(var D; H !== l || a !== 0 && H.nodeType !== 3 || (p = s + a), H !== i || n !== 0 && H.nodeType !== 3 || (g = s + n), H.nodeType === 3 && (s += H.nodeValue.length), (D = H.firstChild) !== null;)C = H, H = D;
                            for(;;){
                                if (H === e) break t;
                                if (C === l && ++x === a && (p = s), C === i && ++z === n && (g = s), (D = H.nextSibling) !== null) break;
                                H = C, C = H.parentNode;
                            }
                            H = D;
                        }
                        l = p === -1 || g === -1 ? null : {
                            start: p,
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
            }, di = !1, Ye = t; Ye !== null;)if (t = Ye, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ye = e;
            else for(; Ye !== null;){
                switch(t = Ye, i = t.alternate, e = t.flags, t.tag){
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && i !== null) {
                            e = void 0, l = t, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
                            try {
                                var ae = Wl(l.type, a, l.elementType === l.type);
                                e = n.getSnapshotBeforeUpdate(ae, i), n.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (ee) {
                                Ae(l, l.return, ee);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) Pc(e);
                            else if (l === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Pc(e);
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
        function cd(e, t, l) {
            var n = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    Sl(e, l), n & 4 && Ta(5, l);
                    break;
                case 1:
                    if (Sl(e, l), n & 4) if (e = l.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (s) {
                        Ae(l, l.return, s);
                    }
                    else {
                        var a = Wl(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (s) {
                            Ae(l, l.return, s);
                        }
                    }
                    n & 64 && ld(l), n & 512 && Aa(l, l.return);
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
                            Ko(e, t);
                        } catch (s) {
                            Ae(l, l.return, s);
                        }
                    }
                    break;
                case 27:
                    t === null && n & 4 && id(l);
                case 26:
                case 5:
                    Sl(e, l), t === null && n & 4 && ad(l), n & 512 && Aa(l, l.return);
                    break;
                case 12:
                    Sl(e, l);
                    break;
                case 13:
                    Sl(e, l), n & 4 && sd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = M0.bind(null, l), X0(e, l))));
                    break;
                case 22:
                    if (n = l.memoizedState !== null || el, !n) {
                        t = t !== null && t.memoizedState !== null || ze, a = el;
                        var i = ze;
                        el = n, (ze = t) && !i ? El(e, l, (l.subtreeFlags & 8772) !== 0) : Sl(e, l), el = a, ze = i;
                    }
                    break;
                case 30:
                    break;
                default:
                    Sl(e, l);
            }
        }
        function fd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Qi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Me = null, ct = !1;
        function tl(e, t, l) {
            for(l = l.child; l !== null;)od(e, t, l), l = l.sibling;
        }
        function od(e, t, l) {
            if (dt && typeof dt.onCommitFiberUnmount == "function") try {
                dt.onCommitFiberUnmount(Vn, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    ze || kt(l, t), tl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    ze || kt(l, t);
                    var n = Me, a = ct;
                    Nl(l.type) && (Me = l.stateNode, ct = !1), tl(e, t, l), Ua(l.stateNode), Me = n, ct = a;
                    break;
                case 5:
                    ze || kt(l, t);
                case 6:
                    if (n = Me, a = ct, Me = null, tl(e, t, l), Me = n, ct = a, Me !== null) if (ct) try {
                        (Me.nodeType === 9 ? Me.body : Me.nodeName === "HTML" ? Me.ownerDocument.body : Me).removeChild(l.stateNode);
                    } catch (i) {
                        Ae(l, t, i);
                    }
                    else try {
                        Me.removeChild(l.stateNode);
                    } catch (i) {
                        Ae(l, t, i);
                    }
                    break;
                case 18:
                    Me !== null && (ct ? (e = Me, Fd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Qa(e)) : Fd(Me, l.stateNode));
                    break;
                case 4:
                    n = Me, a = ct, Me = l.stateNode.containerInfo, ct = !0, tl(e, t, l), Me = n, ct = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    ze || bl(2, l, t), ze || bl(4, l, t), tl(e, t, l);
                    break;
                case 1:
                    ze || (kt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && nd(l, t, n)), tl(e, t, l);
                    break;
                case 21:
                    tl(e, t, l);
                    break;
                case 22:
                    ze = (n = ze) || l.memoizedState !== null, tl(e, t, l), ze = n;
                    break;
                default:
                    tl(e, t, l);
            }
        }
        function sd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Qa(e);
            } catch (l) {
                Ae(t, t.return, l);
            }
        }
        function E0(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new rd), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new rd), t;
                default:
                    throw Error(c(435, e.tag));
            }
        }
        function oc(e, t) {
            var l = E0(e);
            t.forEach(function(n) {
                var a = C0.bind(null, e, n);
                l.has(n) || (l.add(n), n.then(a, a));
            });
        }
        function yt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var n = 0; n < l.length; n++){
                var a = l[n], i = e, s = t, p = s;
                e: for(; p !== null;){
                    switch(p.tag){
                        case 27:
                            if (Nl(p.type)) {
                                Me = p.stateNode, ct = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Me = p.stateNode, ct = !1;
                            break e;
                        case 3:
                        case 4:
                            Me = p.stateNode.containerInfo, ct = !0;
                            break e;
                    }
                    p = p.return;
                }
                if (Me === null) throw Error(c(160));
                od(i, s, a), Me = null, ct = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)dd(t, e), t = t.sibling;
        }
        var wt = null;
        function dd(e, t) {
            var l = e.alternate, n = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    yt(t, e), vt(e), n & 4 && (bl(3, e, e.return), Ta(3, e), bl(5, e, e.return));
                    break;
                case 1:
                    yt(t, e), vt(e), n & 512 && (ze || l === null || kt(l, l.return)), n & 64 && el && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                    break;
                case 26:
                    var a = wt;
                    if (yt(t, e), vt(e), n & 512 && (ze || l === null || kt(l, l.return)), n & 4) {
                        var i = l !== null ? l.memoizedState : null;
                        if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
                            e: {
                                n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                                t: switch(n){
                                    case "title":
                                        i = a.getElementsByTagName("title")[0], (!i || i[Jn] || i[Ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(i, a.querySelector("head > title"))), $e(i, n, l), i[Ie] = e, Ke(i), n = i;
                                        break e;
                                    case "link":
                                        var s = ih("link", "href", a).get(n + (l.href || ""));
                                        if (s) {
                                            for(var p = 0; p < s.length; p++)if (i = s[p], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                s.splice(p, 1);
                                                break t;
                                            }
                                        }
                                        i = a.createElement(n), $e(i, n, l), a.head.appendChild(i);
                                        break;
                                    case "meta":
                                        if (s = ih("meta", "content", a).get(n + (l.content || ""))) {
                                            for(p = 0; p < s.length; p++)if (i = s[p], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                s.splice(p, 1);
                                                break t;
                                            }
                                        }
                                        i = a.createElement(n), $e(i, n, l), a.head.appendChild(i);
                                        break;
                                    default:
                                        throw Error(c(468, n));
                                }
                                i[Ie] = e, Ke(i), n = i;
                            }
                            e.stateNode = n;
                        } else rh(a, e.type, e.stateNode);
                        else e.stateNode = uh(a, n, e.memoizedProps);
                        else i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? rh(a, e.type, e.stateNode) : uh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && ic(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    yt(t, e), vt(e), n & 512 && (ze || l === null || kt(l, l.return)), l !== null && n & 4 && ic(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (yt(t, e), vt(e), n & 512 && (ze || l === null || kt(l, l.return)), e.flags & 32) {
                        a = e.stateNode;
                        try {
                            hn(a, "");
                        } catch (D) {
                            Ae(e, e.return, D);
                        }
                    }
                    n & 4 && e.stateNode != null && (a = e.memoizedProps, ic(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (fc = !0);
                    break;
                case 6:
                    if (yt(t, e), vt(e), n & 4) {
                        if (e.stateNode === null) throw Error(c(162));
                        n = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = n;
                        } catch (D) {
                            Ae(e, e.return, D);
                        }
                    }
                    break;
                case 3:
                    if (fi = null, a = wt, wt = ri(t.containerInfo), yt(t, e), wt = a, vt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Qa(t.containerInfo);
                    } catch (D) {
                        Ae(e, e.return, D);
                    }
                    fc && (fc = !1, hd(e));
                    break;
                case 4:
                    n = wt, wt = ri(e.stateNode.containerInfo), yt(t, e), vt(e), wt = n;
                    break;
                case 12:
                    yt(t, e), vt(e);
                    break;
                case 13:
                    yt(t, e), vt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (yc = qt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, oc(e, n)));
                    break;
                case 22:
                    a = e.memoizedState !== null;
                    var g = l !== null && l.memoizedState !== null, x = el, z = ze;
                    if (el = x || a, ze = z || g, yt(t, e), ze = z, el = x, vt(e), n & 8192) e: for(t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || g || el || ze || Fl(e)), l = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                g = l = t;
                                try {
                                    if (i = g.stateNode, a) s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                                    else {
                                        p = g.stateNode;
                                        var H = g.memoizedProps.style, C = H != null && H.hasOwnProperty("display") ? H.display : null;
                                        p.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                                    }
                                } catch (D) {
                                    Ae(g, g.return, D);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                g = t;
                                try {
                                    g.stateNode.nodeValue = a ? "" : g.memoizedProps;
                                } catch (D) {
                                    Ae(g, g.return, D);
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
                    n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, oc(e, l))));
                    break;
                case 19:
                    yt(t, e), vt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, oc(e, n)));
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
                        if (ud(n)) {
                            l = n;
                            break;
                        }
                        n = n.return;
                    }
                    if (l == null) throw Error(c(160));
                    switch(l.tag){
                        case 27:
                            var a = l.stateNode, i = rc(e);
                            Zu(e, i, a);
                            break;
                        case 5:
                            var s = l.stateNode;
                            l.flags & 32 && (hn(s, ""), l.flags &= -33);
                            var p = rc(e);
                            Zu(e, p, s);
                            break;
                        case 3:
                        case 4:
                            var g = l.stateNode.containerInfo, x = rc(e);
                            cc(e, x, g);
                            break;
                        default:
                            throw Error(c(161));
                    }
                } catch (z) {
                    Ae(e, e.return, z);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function hd(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                hd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function Sl(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)cd(e, t.alternate, t), t = t.sibling;
        }
        function Fl(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        bl(4, t, t.return), Fl(t);
                        break;
                    case 1:
                        kt(t, t.return);
                        var l = t.stateNode;
                        typeof l.componentWillUnmount == "function" && nd(t, t.return, l), Fl(t);
                        break;
                    case 27:
                        Ua(t.stateNode);
                    case 26:
                    case 5:
                        kt(t, t.return), Fl(t);
                        break;
                    case 22:
                        t.memoizedState === null && Fl(t);
                        break;
                    case 30:
                        Fl(t);
                        break;
                    default:
                        Fl(t);
                }
                e = e.sibling;
            }
        }
        function El(e, t, l) {
            for(l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var n = t.alternate, a = e, i = t, s = i.flags;
                switch(i.tag){
                    case 0:
                    case 11:
                    case 15:
                        El(a, i, l), Ta(4, i);
                        break;
                    case 1:
                        if (El(a, i, l), n = i, a = n.stateNode, typeof a.componentDidMount == "function") try {
                            a.componentDidMount();
                        } catch (x) {
                            Ae(n, n.return, x);
                        }
                        if (n = i, a = n.updateQueue, a !== null) {
                            var p = n.stateNode;
                            try {
                                var g = a.shared.hiddenCallbacks;
                                if (g !== null) for(a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++)Qo(g[a], p);
                            } catch (x) {
                                Ae(n, n.return, x);
                            }
                        }
                        l && s & 64 && ld(i), Aa(i, i.return);
                        break;
                    case 27:
                        id(i);
                    case 26:
                    case 5:
                        El(a, i, l), l && n === null && s & 4 && ad(i), Aa(i, i.return);
                        break;
                    case 12:
                        El(a, i, l);
                        break;
                    case 13:
                        El(a, i, l), l && s & 4 && sd(a, i);
                        break;
                    case 22:
                        i.memoizedState === null && El(a, i, l), Aa(i, i.return);
                        break;
                    case 30:
                        break;
                    default:
                        El(a, i, l);
                }
                t = t.sibling;
            }
        }
        function sc(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && oa(l));
        }
        function dc(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && oa(e));
        }
        function jt(e, t, l, n) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)pd(e, t, l, n), t = t.sibling;
        }
        function pd(e, t, l, n) {
            var a = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    jt(e, t, l, n), a & 2048 && Ta(9, t);
                    break;
                case 1:
                    jt(e, t, l, n);
                    break;
                case 3:
                    jt(e, t, l, n), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && oa(e)));
                    break;
                case 12:
                    if (a & 2048) {
                        jt(e, t, l, n), e = t.stateNode;
                        try {
                            var i = t.memoizedProps, s = i.id, p = i.onPostCommit;
                            typeof p == "function" && p(s, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (g) {
                            Ae(t, t.return, g);
                        }
                    } else jt(e, t, l, n);
                    break;
                case 13:
                    jt(e, t, l, n);
                    break;
                case 23:
                    break;
                case 22:
                    i = t.stateNode, s = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? jt(e, t, l, n) : Oa(e, t) : i._visibility & 2 ? jt(e, t, l, n) : (i._visibility |= 2, Bn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && sc(s, t);
                    break;
                case 24:
                    jt(e, t, l, n), a & 2048 && dc(t.alternate, t);
                    break;
                default:
                    jt(e, t, l, n);
            }
        }
        function Bn(e, t, l, n, a) {
            for(a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var i = e, s = t, p = l, g = n, x = s.flags;
                switch(s.tag){
                    case 0:
                    case 11:
                    case 15:
                        Bn(i, s, p, g, a), Ta(8, s);
                        break;
                    case 23:
                        break;
                    case 22:
                        var z = s.stateNode;
                        s.memoizedState !== null ? z._visibility & 2 ? Bn(i, s, p, g, a) : Oa(i, s) : (z._visibility |= 2, Bn(i, s, p, g, a)), a && x & 2048 && sc(s.alternate, s);
                        break;
                    case 24:
                        Bn(i, s, p, g, a), a && x & 2048 && dc(s.alternate, s);
                        break;
                    default:
                        Bn(i, s, p, g, a);
                }
                t = t.sibling;
            }
        }
        function Oa(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var l = e, n = t, a = n.flags;
                switch(n.tag){
                    case 22:
                        Oa(l, n), a & 2048 && sc(n.alternate, n);
                        break;
                    case 24:
                        Oa(l, n), a & 2048 && dc(n.alternate, n);
                        break;
                    default:
                        Oa(l, n);
                }
                t = t.sibling;
            }
        }
        var Na = 8192;
        function wn(e) {
            if (e.subtreeFlags & Na) for(e = e.child; e !== null;)md(e), e = e.sibling;
        }
        function md(e) {
            switch(e.tag){
                case 26:
                    wn(e), e.flags & Na && e.memoizedState !== null && i1(wt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    wn(e);
                    break;
                case 3:
                case 4:
                    var t = wt;
                    wt = ri(e.stateNode.containerInfo), wn(e), wt = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Na, Na = 16777216, wn(e), Na = t) : wn(e));
                    break;
                default:
                    wn(e);
            }
        }
        function yd(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function xa(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ye = n, gd(n, e);
                }
                yd(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)vd(e), e = e.sibling;
        }
        function vd(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    xa(e), e.flags & 2048 && bl(9, e, e.return);
                    break;
                case 3:
                    xa(e);
                    break;
                case 12:
                    xa(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ju(e)) : xa(e);
                    break;
                default:
                    xa(e);
            }
        }
        function Ju(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ye = n, gd(n, e);
                }
                yd(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        bl(8, t, t.return), Ju(t);
                        break;
                    case 22:
                        l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Ju(t));
                        break;
                    default:
                        Ju(t);
                }
                e = e.sibling;
            }
        }
        function gd(e, t) {
            for(; Ye !== null;){
                var l = Ye;
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
                        oa(l.memoizedState.cache);
                }
                if (n = l.child, n !== null) n.return = l, Ye = n;
                else e: for(l = e; Ye !== null;){
                    n = Ye;
                    var a = n.sibling, i = n.return;
                    if (fd(n), n === l) {
                        Ye = null;
                        break e;
                    }
                    if (a !== null) {
                        a.return = i, Ye = a;
                        break e;
                    }
                    Ye = i;
                }
            }
        }
        var _0 = {
            getCacheForType: function(e) {
                var t = et(ke), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, R0 = typeof WeakMap == "function" ? WeakMap : Map, be = 0, Oe = null, se = null, he = 0, Se = 0, gt = null, _l = !1, Un = !1, hc = !1, ll = 0, we = 0, Rl = 0, Il = 0, pc = 0, xt = 0, zn = 0, Ma = null, ft = null, mc = !1, yc = 0, $u = 1 / 0, Wu = null, Tl = null, Je = 0, Al = null, qn = null, Pn = 0, vc = 0, gc = null, bd = null, Ca = 0, bc = null;
        function bt() {
            if ((be & 2) !== 0 && he !== 0) return he & -he;
            if (U.T !== null) {
                var e = Tn;
                return e !== 0 ? e : Oc();
            }
            return Uf();
        }
        function Sd() {
            xt === 0 && (xt = (he & 536870912) === 0 || ve ? Cf() : 536870912);
            var e = Nt.current;
            return e !== null && (e.flags |= 32), xt;
        }
        function St(e, t, l) {
            (e === Oe && (Se === 2 || Se === 9) || e.cancelPendingCommit !== null) && (Hn(e, 0), Ol(e, he, xt, !1)), Zn(e, l), ((be & 2) === 0 || e !== Oe) && (e === Oe && ((be & 2) === 0 && (Il |= l), we === 4 && Ol(e, he, xt, !1)), Lt(e));
        }
        function Ed(e, t, l) {
            if ((be & 6) !== 0) throw Error(c(327));
            var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Xn(e, t), a = n ? O0(e, t) : _c(e, t, !0), i = n;
            do {
                if (a === 0) {
                    Un && !n && Ol(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, i && !T0(l)) {
                        a = _c(e, t, !1), i = !1;
                        continue;
                    }
                    if (a === 2) {
                        if (i = t, e.errorRecoveryDisabledLanes & i) var s = 0;
                        else s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
                        if (s !== 0) {
                            t = s;
                            e: {
                                var p = e;
                                a = Ma;
                                var g = p.current.memoizedState.isDehydrated;
                                if (g && (Hn(p, s).flags |= 256), s = _c(p, s, !1), s !== 2) {
                                    if (hc && !g) {
                                        p.errorRecoveryDisabledLanes |= i, Il |= i, a = 4;
                                        break e;
                                    }
                                    i = ft, ft = a, i !== null && (ft === null ? ft = i : ft.push.apply(ft, i));
                                }
                                a = s;
                            }
                            if (i = !1, a !== 2) continue;
                        }
                    }
                    if (a === 1) {
                        Hn(e, 0), Ol(e, t, 0, !0);
                        break;
                    }
                    e: {
                        switch(n = e, i = a, i){
                            case 0:
                            case 1:
                                throw Error(c(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                Ol(n, t, xt, !_l);
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
                        if ((t & 62914560) === t && (a = yc + 300 - qt(), 10 < a)) {
                            if (Ol(n, t, xt, !_l), cu(n, 0, !0) !== 0) break e;
                            n.timeoutHandle = $d(_d.bind(null, n, l, ft, Wu, mc, t, xt, Il, zn, _l, i, 2, -0, 0), a);
                            break e;
                        }
                        _d(n, l, ft, Wu, mc, t, xt, Il, zn, _l, i, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            Lt(e);
        }
        function _d(e, t, l, n, a, i, s, p, g, x, z, H, C, D) {
            if (e.timeoutHandle = -1, H = t.subtreeFlags, (H & 8192 || (H & 16785408) === 16785408) && (Pa = {
                stylesheets: null,
                count: 0,
                unsuspend: u1
            }, md(t), H = r1(), H !== null)) {
                e.cancelPendingCommit = H(Md.bind(null, e, t, i, l, n, a, s, p, g, z, 1, C, D)), Ol(e, i, s, !x);
                return;
            }
            Md(e, t, i, l, n, a, s, p, g);
        }
        function T0(e) {
            for(var t = e;;){
                var l = t.tag;
                if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for(var n = 0; n < l.length; n++){
                    var a = l[n], i = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!pt(i(), a)) return !1;
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
            t &= ~pc, t &= ~Il, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
            for(var a = t; 0 < a;){
                var i = 31 - ht(a), s = 1 << i;
                n[i] = -1, a &= ~s;
            }
            l !== 0 && Bf(e, l, t);
        }
        function Fu() {
            return (be & 6) === 0 ? (Da(0), !1) : !0;
        }
        function Sc() {
            if (se !== null) {
                if (Se === 0) var e = se.return;
                else e = se, Zt = Xl = null, Pr(e), Cn = null, Ea = 0, e = se;
                for(; e !== null;)td(e.alternate, e), e = e.return;
                se = null;
            }
        }
        function Hn(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, Q0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Sc(), Oe = e, se = l = Yt(e.current, null), he = t, Se = 0, gt = null, _l = !1, Un = Xn(e, t), hc = !1, zn = xt = pc = Il = Rl = we = 0, ft = Ma = null, mc = !1, (t & 8) !== 0 && (t |= t & 32);
            var n = e.entangledLanes;
            if (n !== 0) for(e = e.entanglements, n &= t; 0 < n;){
                var a = 31 - ht(n), i = 1 << a;
                t |= e[a], n &= ~i;
            }
            return ll = t, Su(), l;
        }
        function Rd(e, t) {
            fe = null, U.H = ku, t === da || t === Mu ? (t = jo(), Se = 3) : t === Po ? (t = jo(), Se = 4) : Se = t === Ls ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, gt = t, se === null && (we = 1, Gu(e, Rt(t, e.current)));
        }
        function Td() {
            var e = U.H;
            return U.H = ku, e === null ? ku : e;
        }
        function Ad() {
            var e = U.A;
            return U.A = _0, e;
        }
        function Ec() {
            we = 4, _l || (he & 4194048) !== he && Nt.current !== null || (Un = !0), (Rl & 134217727) === 0 && (Il & 134217727) === 0 || Oe === null || Ol(Oe, he, xt, !1);
        }
        function _c(e, t, l) {
            var n = be;
            be |= 2;
            var a = Td(), i = Ad();
            (Oe !== e || he !== t) && (Wu = null, Hn(e, t)), t = !1;
            var s = we;
            e: do try {
                if (Se !== 0 && se !== null) {
                    var p = se, g = gt;
                    switch(Se){
                        case 8:
                            Sc(), s = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Nt.current === null && (t = !0);
                            var x = Se;
                            if (Se = 0, gt = null, kn(e, p, g, x), l && Un) {
                                s = 0;
                                break e;
                            }
                            break;
                        default:
                            x = Se, Se = 0, gt = null, kn(e, p, g, x);
                    }
                }
                A0(), s = we;
                break;
            } catch (z) {
                Rd(e, z);
            }
            while (!0);
            return t && e.shellSuspendCounter++, Zt = Xl = null, be = n, U.H = a, U.A = i, se === null && (Oe = null, he = 0, Su()), s;
        }
        function A0() {
            for(; se !== null;)Od(se);
        }
        function O0(e, t) {
            var l = be;
            be |= 2;
            var n = Td(), a = Ad();
            Oe !== e || he !== t ? (Wu = null, $u = qt() + 500, Hn(e, t)) : Un = Xn(e, t);
            e: do try {
                if (Se !== 0 && se !== null) {
                    t = se;
                    var i = gt;
                    t: switch(Se){
                        case 1:
                            Se = 0, gt = null, kn(e, t, i, 1);
                            break;
                        case 2:
                        case 9:
                            if (Ho(i)) {
                                Se = 0, gt = null, Nd(t);
                                break;
                            }
                            t = function() {
                                Se !== 2 && Se !== 9 || Oe !== e || (Se = 7), Lt(e);
                            }, i.then(t, t);
                            break e;
                        case 3:
                            Se = 7;
                            break e;
                        case 4:
                            Se = 5;
                            break e;
                        case 7:
                            Ho(i) ? (Se = 0, gt = null, Nd(t)) : (Se = 0, gt = null, kn(e, t, i, 7));
                            break;
                        case 5:
                            var s = null;
                            switch(se.tag){
                                case 26:
                                    s = se.memoizedState;
                                case 5:
                                case 27:
                                    var p = se;
                                    if (!s || ch(s)) {
                                        Se = 0, gt = null;
                                        var g = p.sibling;
                                        if (g !== null) se = g;
                                        else {
                                            var x = p.return;
                                            x !== null ? (se = x, Iu(x)) : se = null;
                                        }
                                        break t;
                                    }
                            }
                            Se = 0, gt = null, kn(e, t, i, 5);
                            break;
                        case 6:
                            Se = 0, gt = null, kn(e, t, i, 6);
                            break;
                        case 8:
                            Sc(), we = 6;
                            break e;
                        default:
                            throw Error(c(462));
                    }
                }
                N0();
                break;
            } catch (z) {
                Rd(e, z);
            }
            while (!0);
            return Zt = Xl = null, U.H = n, U.A = a, be = l, se !== null ? 0 : (Oe = null, he = 0, Su(), we);
        }
        function N0() {
            for(; se !== null && !Jp();)Od(se);
        }
        function Od(e) {
            var t = Is(e.alternate, e, ll);
            e.memoizedProps = e.pendingProps, t === null ? Iu(e) : se = t;
        }
        function Nd(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Xs(l, t, t.pendingProps, t.type, void 0, he);
                    break;
                case 11:
                    t = Xs(l, t, t.pendingProps, t.type.render, t.ref, he);
                    break;
                case 5:
                    Pr(t);
                default:
                    td(l, t), t = se = xo(t, ll), t = Is(l, t, ll);
            }
            e.memoizedProps = e.pendingProps, t === null ? Iu(e) : se = t;
        }
        function kn(e, t, l, n) {
            Zt = Xl = null, Pr(t), Cn = null, Ea = 0;
            var a = t.return;
            try {
                if (y0(e, a, t, l, he)) {
                    we = 1, Gu(e, Rt(l, e.current)), se = null;
                    return;
                }
            } catch (i) {
                if (a !== null) throw se = a, i;
                we = 1, Gu(e, Rt(l, e.current)), se = null;
                return;
            }
            t.flags & 32768 ? (ve || n === 1 ? e = !0 : Un || (he & 536870912) !== 0 ? e = !1 : (_l = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Nt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), xd(t, e)) : Iu(t);
        }
        function Iu(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    xd(t, _l);
                    return;
                }
                e = t.return;
                var l = g0(t.alternate, t, ll);
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
            we === 0 && (we = 5);
        }
        function xd(e, t) {
            do {
                var l = b0(e.alternate, e);
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
            we = 6, se = null;
        }
        function Md(e, t, l, n, a, i, s, p, g) {
            e.cancelPendingCommit = null;
            do ei();
            while (Je !== 0);
            if ((be & 6) !== 0) throw Error(c(327));
            if (t !== null) {
                if (t === e.current) throw Error(c(177));
                if (i = t.lanes | t.childLanes, i |= dr, um(e, l, i, s, p, g), e === Oe && (se = Oe = null, he = 0), qn = t, Al = e, Pn = l, vc = i, gc = a, bd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, D0(uu, function() {
                    return Ud(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                    n = U.T, U.T = null, a = G.p, G.p = 2, s = be, be |= 4;
                    try {
                        S0(e, t, l);
                    } finally{
                        be = s, G.p = a, U.T = n;
                    }
                }
                Je = 1, Cd(), Dd(), Bd();
            }
        }
        function Cd() {
            if (Je === 1) {
                Je = 0;
                var e = Al, t = qn, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = U.T, U.T = null;
                    var n = G.p;
                    G.p = 2;
                    var a = be;
                    be |= 4;
                    try {
                        dd(t, e);
                        var i = Uc, s = go(e.containerInfo), p = i.focusedElem, g = i.selectionRange;
                        if (s !== p && p && p.ownerDocument && vo(p.ownerDocument.documentElement, p)) {
                            if (g !== null && rr(p)) {
                                var x = g.start, z = g.end;
                                if (z === void 0 && (z = x), "selectionStart" in p) p.selectionStart = x, p.selectionEnd = Math.min(z, p.value.length);
                                else {
                                    var H = p.ownerDocument || document, C = H && H.defaultView || window;
                                    if (C.getSelection) {
                                        var D = C.getSelection(), ae = p.textContent.length, ee = Math.min(g.start, ae), Re = g.end === void 0 ? ee : Math.min(g.end, ae);
                                        !D.extend && ee > Re && (s = Re, Re = ee, ee = s);
                                        var A = yo(p, ee), _ = yo(p, Re);
                                        if (A && _ && (D.rangeCount !== 1 || D.anchorNode !== A.node || D.anchorOffset !== A.offset || D.focusNode !== _.node || D.focusOffset !== _.offset)) {
                                            var N = H.createRange();
                                            N.setStart(A.node, A.offset), D.removeAllRanges(), ee > Re ? (D.addRange(N), D.extend(_.node, _.offset)) : (N.setEnd(_.node, _.offset), D.addRange(N));
                                        }
                                    }
                                }
                            }
                            for(H = [], D = p; D = D.parentNode;)D.nodeType === 1 && H.push({
                                element: D,
                                left: D.scrollLeft,
                                top: D.scrollTop
                            });
                            for(typeof p.focus == "function" && p.focus(), p = 0; p < H.length; p++){
                                var P = H[p];
                                P.element.scrollLeft = P.left, P.element.scrollTop = P.top;
                            }
                        }
                        di = !!wc, Uc = wc = null;
                    } finally{
                        be = a, G.p = n, U.T = l;
                    }
                }
                e.current = t, Je = 2;
            }
        }
        function Dd() {
            if (Je === 2) {
                Je = 0;
                var e = Al, t = qn, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = U.T, U.T = null;
                    var n = G.p;
                    G.p = 2;
                    var a = be;
                    be |= 4;
                    try {
                        cd(e, t.alternate, t);
                    } finally{
                        be = a, G.p = n, U.T = l;
                    }
                }
                Je = 3;
            }
        }
        function Bd() {
            if (Je === 4 || Je === 3) {
                Je = 0, $p();
                var e = Al, t = qn, l = Pn, n = bd;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, qn = Al = null, wd(e, e.pendingLanes));
                var a = e.pendingLanes;
                if (a === 0 && (Tl = null), ji(l), t = t.stateNode, dt && typeof dt.onCommitFiberRoot == "function") try {
                    dt.onCommitFiberRoot(Vn, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (n !== null) {
                    t = U.T, a = G.p, G.p = 2, U.T = null;
                    try {
                        for(var i = e.onRecoverableError, s = 0; s < n.length; s++){
                            var p = n[s];
                            i(p.value, {
                                componentStack: p.stack
                            });
                        }
                    } finally{
                        U.T = t, G.p = a;
                    }
                }
                (Pn & 3) !== 0 && ei(), Lt(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === bc ? Ca++ : (Ca = 0, bc = e) : Ca = 0, Da(0);
            }
        }
        function wd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, oa(t)));
        }
        function ei(e) {
            return Cd(), Dd(), Bd(), Ud();
        }
        function Ud() {
            if (Je !== 5) return !1;
            var e = Al, t = vc;
            vc = 0;
            var l = ji(Pn), n = U.T, a = G.p;
            try {
                G.p = 32 > l ? 32 : l, U.T = null, l = gc, gc = null;
                var i = Al, s = Pn;
                if (Je = 0, qn = Al = null, Pn = 0, (be & 6) !== 0) throw Error(c(331));
                var p = be;
                if (be |= 4, vd(i.current), pd(i, i.current, s, l), be = p, Da(0, !1), dt && typeof dt.onPostCommitFiberRoot == "function") try {
                    dt.onPostCommitFiberRoot(Vn, i);
                } catch  {}
                return !0;
            } finally{
                G.p = a, U.T = n, wd(e, t);
            }
        }
        function zd(e, t, l) {
            t = Rt(l, t), t = Wr(e.stateNode, t, 2), e = ml(e, t, 2), e !== null && (Zn(e, 2), Lt(e));
        }
        function Ae(e, t, l) {
            if (e.tag === 3) zd(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    zd(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Tl === null || !Tl.has(n))) {
                        e = Rt(l, e), l = ks(2), n = ml(t, l, 2), n !== null && (js(l, n, t, e), Zn(n, 2), Lt(n));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Rc(e, t, l) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new R0;
                var a = new Set;
                n.set(t, a);
            } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
            a.has(l) || (hc = !0, a.add(l), e = x0.bind(null, e, t, l), t.then(e, e));
        }
        function x0(e, t, l) {
            var n = e.pingCache;
            n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Oe === e && (he & l) === l && (we === 4 || we === 3 && (he & 62914560) === he && 300 > qt() - yc ? (be & 2) === 0 && Hn(e, 0) : pc |= l, zn === he && (zn = 0)), Lt(e);
        }
        function qd(e, t) {
            t === 0 && (t = Df()), e = Sn(e, t), e !== null && (Zn(e, t), Lt(e));
        }
        function M0(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), qd(e, l);
        }
        function C0(e, t) {
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
            n !== null && n.delete(t), qd(e, l);
        }
        function D0(e, t) {
            return qi(e, t);
        }
        var ti = null, jn = null, Tc = !1, li = !1, Ac = !1, en = 0;
        function Lt(e) {
            e !== jn && e.next === null && (jn === null ? ti = jn = e : jn = jn.next = e), li = !0, Tc || (Tc = !0, w0());
        }
        function Da(e, t) {
            if (!Ac && li) {
                Ac = !0;
                do for(var l = !1, n = ti; n !== null;){
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var i = 0;
                        else {
                            var s = n.suspendedLanes, p = n.pingedLanes;
                            i = (1 << 31 - ht(42 | e) + 1) - 1, i &= a & ~(s & ~p), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                        }
                        i !== 0 && (l = !0, jd(n, i));
                    } else i = he, i = cu(n, n === Oe ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (i & 3) === 0 || Xn(n, i) || (l = !0, jd(n, i));
                    n = n.next;
                }
                while (l);
                Ac = !1;
            }
        }
        function B0() {
            Pd();
        }
        function Pd() {
            li = Tc = !1;
            var e = 0;
            en !== 0 && (L0() && (e = en), en = 0);
            for(var t = qt(), l = null, n = ti; n !== null;){
                var a = n.next, i = Hd(n, t);
                i === 0 ? (n.next = null, l === null ? ti = a : l.next = a, a === null && (jn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (li = !0)), n = a;
            }
            Da(e);
        }
        function Hd(e, t) {
            for(var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;){
                var s = 31 - ht(i), p = 1 << s, g = a[s];
                g === -1 ? ((p & l) === 0 || (p & n) !== 0) && (a[s] = am(p, t)) : g <= t && (e.expiredLanes |= p), i &= ~p;
            }
            if (t = Oe, l = he, l = cu(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (Se === 2 || Se === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && Pi(n), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || Xn(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(n !== null && Pi(n), ji(l)){
                    case 2:
                    case 8:
                        l = xf;
                        break;
                    case 32:
                        l = uu;
                        break;
                    case 268435456:
                        l = Mf;
                        break;
                    default:
                        l = uu;
                }
                return n = kd.bind(null, e), l = qi(l, n), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return n !== null && n !== null && Pi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function kd(e, t) {
            if (Je !== 0 && Je !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (ei() && e.callbackNode !== l) return null;
            var n = he;
            return n = cu(e, e === Oe ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (Ed(e, n, t), Hd(e, qt()), e.callbackNode != null && e.callbackNode === l ? kd.bind(null, e) : null);
        }
        function jd(e, t) {
            if (ei()) return null;
            Ed(e, t, !0);
        }
        function w0() {
            K0(function() {
                (be & 6) !== 0 ? qi(Nf, B0) : Pd();
            });
        }
        function Oc() {
            return en === 0 && (en = Cf()), en;
        }
        function Ld(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : hu("" + e);
        }
        function Qd(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function U0(e, t, l, n, a) {
            if (t === "submit" && l && l.stateNode === a) {
                var i = Ld((a[ut] || null).action), s = n.submitter;
                s && (t = (t = s[ut] || null) ? Ld(t.formAction) : s.getAttribute("formAction"), t !== null && (i = t, s = null));
                var p = new vu("action", "action", null, n, a);
                e.push({
                    event: p,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (en !== 0) {
                                        var g = s ? Qd(a, s) : new FormData(a);
                                        Vr(l, {
                                            pending: !0,
                                            data: g,
                                            method: a.method,
                                            action: i
                                        }, null, g);
                                    }
                                } else typeof i == "function" && (p.preventDefault(), g = s ? Qd(a, s) : new FormData(a), Vr(l, {
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
        for(var Nc = 0; Nc < sr.length; Nc++){
            var xc = sr[Nc], z0 = xc.toLowerCase(), q0 = xc[0].toUpperCase() + xc.slice(1);
            Bt(z0, "on" + q0);
        }
        Bt(Eo, "onAnimationEnd"), Bt(_o, "onAnimationIteration"), Bt(Ro, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(Im, "onTransitionRun"), Bt(e0, "onTransitionStart"), Bt(t0, "onTransitionCancel"), Bt(To, "onTransitionEnd"), on("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), on("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), on("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), on("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), Hl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Hl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Hl("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), Hl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Hl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Hl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Ba = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), P0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ba));
        function Kd(e, t) {
            t = (t & 4) !== 0;
            for(var l = 0; l < e.length; l++){
                var n = e[l], a = n.event;
                n = n.listeners;
                e: {
                    var i = void 0;
                    if (t) for(var s = n.length - 1; 0 <= s; s--){
                        var p = n[s], g = p.instance, x = p.currentTarget;
                        if (p = p.listener, g !== i && a.isPropagationStopped()) break e;
                        i = p, a.currentTarget = x;
                        try {
                            i(a);
                        } catch (z) {
                            Ku(z);
                        }
                        a.currentTarget = null, i = g;
                    }
                    else for(s = 0; s < n.length; s++){
                        if (p = n[s], g = p.instance, x = p.currentTarget, p = p.listener, g !== i && a.isPropagationStopped()) break e;
                        i = p, a.currentTarget = x;
                        try {
                            i(a);
                        } catch (z) {
                            Ku(z);
                        }
                        a.currentTarget = null, i = g;
                    }
                }
            }
        }
        function de(e, t) {
            var l = t[Li];
            l === void 0 && (l = t[Li] = new Set);
            var n = e + "__bubble";
            l.has(n) || (Gd(t, e, 2, !1), l.add(n));
        }
        function Mc(e, t, l) {
            var n = 0;
            t && (n |= 4), Gd(l, e, n, t);
        }
        var ni = "_reactListening" + Math.random().toString(36).slice(2);
        function Cc(e) {
            if (!e[ni]) {
                e[ni] = !0, qf.forEach(function(l) {
                    l !== "selectionchange" && (P0.has(l) || Mc(l, !1, e), Mc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[ni] || (t[ni] = !0, Mc("selectionchange", !1, t));
            }
        }
        function Gd(e, t, l, n) {
            switch(ph(t)){
                case 2:
                    var a = o1;
                    break;
                case 8:
                    a = s1;
                    break;
                default:
                    a = Gc;
            }
            l = a.bind(null, t, l, e), a = void 0, !Fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
                capture: !0,
                passive: a
            }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
                passive: a
            }) : e.addEventListener(t, l, !1);
        }
        function Dc(e, t, l, n, a) {
            var i = n;
            if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for(;;){
                if (n === null) return;
                var s = n.tag;
                if (s === 3 || s === 4) {
                    var p = n.stateNode.containerInfo;
                    if (p === a) break;
                    if (s === 4) for(s = n.return; s !== null;){
                        var g = s.tag;
                        if ((g === 3 || g === 4) && s.stateNode.containerInfo === a) return;
                        s = s.return;
                    }
                    for(; p !== null;){
                        if (s = rn(p), s === null) return;
                        if (g = s.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                            n = i = s;
                            continue e;
                        }
                        p = p.parentNode;
                    }
                }
                n = n.return;
            }
            $f(function() {
                var x = i, z = $i(l), H = [];
                e: {
                    var C = Ao.get(e);
                    if (C !== void 0) {
                        var D = vu, ae = e;
                        switch(e){
                            case "keypress":
                                if (mu(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                D = Dm;
                                break;
                            case "focusin":
                                ae = "focus", D = lr;
                                break;
                            case "focusout":
                                ae = "blur", D = lr;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                D = lr;
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
                                D = If;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                D = bm;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                D = Um;
                                break;
                            case Eo:
                            case _o:
                            case Ro:
                                D = _m;
                                break;
                            case To:
                                D = qm;
                                break;
                            case "scroll":
                            case "scrollend":
                                D = vm;
                                break;
                            case "wheel":
                                D = Hm;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                D = Tm;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                D = to;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                D = jm;
                        }
                        var ee = (t & 4) !== 0, Re = !ee && (e === "scroll" || e === "scrollend"), A = ee ? C !== null ? C + "Capture" : null : C;
                        ee = [];
                        for(var _ = x, N; _ !== null;){
                            var P = _;
                            if (N = P.stateNode, P = P.tag, P !== 5 && P !== 26 && P !== 27 || N === null || A === null || (P = Wn(_, A), P != null && ee.push(wa(_, P, N))), Re) break;
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
                        if (C = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", C && l !== Ji && (ae = l.relatedTarget || l.fromElement) && (rn(ae) || ae[un])) break e;
                        if ((D || C) && (C = z.window === z ? z : (C = z.ownerDocument) ? C.defaultView || C.parentWindow : window, D ? (ae = l.relatedTarget || l.toElement, D = x, ae = ae ? rn(ae) : null, ae !== null && (Re = d(ae), ee = ae.tag, ae !== Re || ee !== 5 && ee !== 27 && ee !== 6) && (ae = null)) : (D = null, ae = x), D !== ae)) {
                            if (ee = If, P = "onMouseLeave", A = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (ee = to, P = "onPointerLeave", A = "onPointerEnter", _ = "pointer"), Re = D == null ? C : $n(D), N = ae == null ? C : $n(ae), C = new ee(P, _ + "leave", D, l, z), C.target = Re, C.relatedTarget = N, P = null, rn(z) === x && (ee = new ee(A, _ + "enter", ae, l, z), ee.target = N, ee.relatedTarget = Re, P = ee), Re = P, D && ae) t: {
                                for(ee = D, A = ae, _ = 0, N = ee; N; N = Ln(N))_++;
                                for(N = 0, P = A; P; P = Ln(P))N++;
                                for(; 0 < _ - N;)ee = Ln(ee), _--;
                                for(; 0 < N - _;)A = Ln(A), N--;
                                for(; _--;){
                                    if (ee === A || A !== null && ee === A.alternate) break t;
                                    ee = Ln(ee), A = Ln(A);
                                }
                                ee = null;
                            }
                            else ee = null;
                            D !== null && Yd(H, C, D, ee, !1), ae !== null && Re !== null && Yd(H, Re, ae, ee, !0);
                        }
                    }
                    e: {
                        if (C = x ? $n(x) : window, D = C.nodeName && C.nodeName.toLowerCase(), D === "select" || D === "input" && C.type === "file") var J = fo;
                        else if (ro(C)) if (oo) J = $m;
                        else {
                            J = Zm;
                            var oe = Xm;
                        }
                        else D = C.nodeName, !D || D.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? x && Zi(x.elementType) && (J = fo) : J = Jm;
                        if (J && (J = J(e, x))) {
                            co(H, J, l, z);
                            break e;
                        }
                        oe && oe(e, C, x), e === "focusout" && x && C.type === "number" && x.memoizedProps.value != null && Xi(C, "number", C.value);
                    }
                    switch(oe = x ? $n(x) : window, e){
                        case "focusin":
                            (ro(oe) || oe.contentEditable === "true") && (vn = oe, cr = x, ua = null);
                            break;
                        case "focusout":
                            ua = cr = vn = null;
                            break;
                        case "mousedown":
                            fr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            fr = !1, bo(H, l, z);
                            break;
                        case "selectionchange":
                            if (Fm) break;
                        case "keydown":
                        case "keyup":
                            bo(H, l, z);
                    }
                    var W;
                    if (ar) e: {
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
                    else yn ? uo(e, l) && (le = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (le = "onCompositionStart");
                    le && (lo && l.locale !== "ko" && (yn || le !== "onCompositionStart" ? le === "onCompositionEnd" && yn && (W = Wf()) : (sl = z, Ii = "value" in sl ? sl.value : sl.textContent, yn = !0)), oe = ai(x, le), 0 < oe.length && (le = new eo(le, e, null, l, z), H.push({
                        event: le,
                        listeners: oe
                    }), W ? le.data = W : (W = io(l), W !== null && (le.data = W)))), (W = Qm ? Km(e, l) : Gm(e, l)) && (le = ai(x, "onBeforeInput"), 0 < le.length && (oe = new eo("onBeforeInput", "beforeinput", null, l, z), H.push({
                        event: oe,
                        listeners: le
                    }), oe.data = W)), U0(H, e, x, l, z);
                }
                Kd(H, t);
            });
        }
        function wa(e, t, l) {
            return {
                instance: e,
                listener: t,
                currentTarget: l
            };
        }
        function ai(e, t) {
            for(var l = t + "Capture", n = []; e !== null;){
                var a = e, i = a.stateNode;
                if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = Wn(e, l), a != null && n.unshift(wa(e, a, i)), a = Wn(e, t), a != null && n.push(wa(e, a, i))), e.tag === 3) return n;
                e = e.return;
            }
            return [];
        }
        function Ln(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function Yd(e, t, l, n, a) {
            for(var i = t._reactName, s = []; l !== null && l !== n;){
                var p = l, g = p.alternate, x = p.stateNode;
                if (p = p.tag, g !== null && g === n) break;
                p !== 5 && p !== 26 && p !== 27 || x === null || (g = x, a ? (x = Wn(l, i), x != null && s.unshift(wa(l, x, g))) : a || (x = Wn(l, i), x != null && s.push(wa(l, x, g)))), l = l.return;
            }
            s.length !== 0 && e.push({
                event: t,
                listeners: s
            });
        }
        var H0 = /\r\n?/g, k0 = /\u0000|\uFFFD/g;
        function Vd(e) {
            return (typeof e == "string" ? e : "" + e).replace(H0, `
`).replace(k0, "");
        }
        function Xd(e, t) {
            return t = Vd(t), Vd(e) === t;
        }
        function ui() {}
        function _e(e, t, l, n, a, i) {
            switch(l){
                case "children":
                    typeof n == "string" ? t === "body" || t === "textarea" && n === "" || hn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && hn(e, "" + n);
                    break;
                case "className":
                    ou(e, "class", n);
                    break;
                case "tabIndex":
                    ou(e, "tabindex", n);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    ou(e, l, n);
                    break;
                case "style":
                    Zf(e, n, i);
                    break;
                case "data":
                    if (t !== "object") {
                        ou(e, "data", n);
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
                    n = hu("" + n), e.setAttribute(l, n);
                    break;
                case "action":
                case "formAction":
                    if (typeof n == "function") {
                        e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof i == "function" && (l === "formAction" ? (t !== "input" && _e(e, t, "name", a.name, a, null), _e(e, t, "formEncType", a.formEncType, a, null), _e(e, t, "formMethod", a.formMethod, a, null), _e(e, t, "formTarget", a.formTarget, a, null)) : (_e(e, t, "encType", a.encType, a, null), _e(e, t, "method", a.method, a, null), _e(e, t, "target", a.target, a, null)));
                    if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                        e.removeAttribute(l);
                        break;
                    }
                    n = hu("" + n), e.setAttribute(l, n);
                    break;
                case "onClick":
                    n != null && (e.onclick = ui);
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
                    l = hu("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
                    de("beforetoggle", e), de("toggle", e), fu(e, "popover", n);
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
                    fu(e, "is", n);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = mm.get(l) || l, fu(e, l, n));
            }
        }
        function Bc(e, t, l, n, a, i) {
            switch(l){
                case "style":
                    Zf(e, n, i);
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
                    typeof n == "string" ? hn(e, n) : (typeof n == "number" || typeof n == "bigint") && hn(e, "" + n);
                    break;
                case "onScroll":
                    n != null && de("scroll", e);
                    break;
                case "onScrollEnd":
                    n != null && de("scrollend", e);
                    break;
                case "onClick":
                    n != null && (e.onclick = ui);
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
                    if (!Pf.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[ut] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
                            typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
                            break e;
                        }
                        l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : fu(e, l, n);
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
                        var s = l[i];
                        if (s != null) switch(i){
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
                                _e(e, t, i, s, l, null);
                        }
                    }
                    a && _e(e, t, "srcSet", l.srcSet, l, null), n && _e(e, t, "src", l.src, l, null);
                    return;
                case "input":
                    de("invalid", e);
                    var p = i = s = a = null, g = null, x = null;
                    for(n in l)if (l.hasOwnProperty(n)) {
                        var z = l[n];
                        if (z != null) switch(n){
                            case "name":
                                a = z;
                                break;
                            case "type":
                                s = z;
                                break;
                            case "checked":
                                g = z;
                                break;
                            case "defaultChecked":
                                x = z;
                                break;
                            case "value":
                                i = z;
                                break;
                            case "defaultValue":
                                p = z;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (z != null) throw Error(c(137, t));
                                break;
                            default:
                                _e(e, t, n, z, l, null);
                        }
                    }
                    Gf(e, i, p, g, x, s, a, !1), su(e);
                    return;
                case "select":
                    de("invalid", e), n = s = i = null;
                    for(a in l)if (l.hasOwnProperty(a) && (p = l[a], p != null)) switch(a){
                        case "value":
                            i = p;
                            break;
                        case "defaultValue":
                            s = p;
                            break;
                        case "multiple":
                            n = p;
                        default:
                            _e(e, t, a, p, l, null);
                    }
                    t = i, l = s, e.multiple = !!n, t != null ? dn(e, !!n, t, !1) : l != null && dn(e, !!n, l, !0);
                    return;
                case "textarea":
                    de("invalid", e), i = a = n = null;
                    for(s in l)if (l.hasOwnProperty(s) && (p = l[s], p != null)) switch(s){
                        case "value":
                            n = p;
                            break;
                        case "defaultValue":
                            a = p;
                            break;
                        case "children":
                            i = p;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (p != null) throw Error(c(91));
                            break;
                        default:
                            _e(e, t, s, p, l, null);
                    }
                    Vf(e, n, a, i), su(e);
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
                    for(n = 0; n < Ba.length; n++)de(Ba[n], e);
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
                    if (Zi(t)) {
                        for(z in l)l.hasOwnProperty(z) && (n = l[z], n !== void 0 && Bc(e, t, z, n, l, void 0));
                        return;
                    }
            }
            for(p in l)l.hasOwnProperty(p) && (n = l[p], n != null && _e(e, t, p, n, l, null));
        }
        function j0(e, t, l, n) {
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
                    var a = null, i = null, s = null, p = null, g = null, x = null, z = null;
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
                                n.hasOwnProperty(D) || _e(e, t, D, null, n, H);
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
                                x = D;
                                break;
                            case "defaultChecked":
                                z = D;
                                break;
                            case "value":
                                s = D;
                                break;
                            case "defaultValue":
                                p = D;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (D != null) throw Error(c(137, t));
                                break;
                            default:
                                D !== H && _e(e, t, C, D, n, H);
                        }
                    }
                    Vi(e, s, p, g, x, z, i, a);
                    return;
                case "select":
                    D = s = p = C = null;
                    for(i in l)if (g = l[i], l.hasOwnProperty(i) && g != null) switch(i){
                        case "value":
                            break;
                        case "multiple":
                            D = g;
                        default:
                            n.hasOwnProperty(i) || _e(e, t, i, null, n, g);
                    }
                    for(a in n)if (i = n[a], g = l[a], n.hasOwnProperty(a) && (i != null || g != null)) switch(a){
                        case "value":
                            C = i;
                            break;
                        case "defaultValue":
                            p = i;
                            break;
                        case "multiple":
                            s = i;
                        default:
                            i !== g && _e(e, t, a, i, n, g);
                    }
                    t = p, l = s, n = D, C != null ? dn(e, !!l, C, !1) : !!n != !!l && (t != null ? dn(e, !!l, t, !0) : dn(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    D = C = null;
                    for(p in l)if (a = l[p], l.hasOwnProperty(p) && a != null && !n.hasOwnProperty(p)) switch(p){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            _e(e, t, p, null, n, a);
                    }
                    for(s in n)if (a = n[s], i = l[s], n.hasOwnProperty(s) && (a != null || i != null)) switch(s){
                        case "value":
                            C = a;
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
                            a !== i && _e(e, t, s, a, n, i);
                    }
                    Yf(e, C, D);
                    return;
                case "option":
                    for(var ae in l)if (C = l[ae], l.hasOwnProperty(ae) && C != null && !n.hasOwnProperty(ae)) switch(ae){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            _e(e, t, ae, null, n, C);
                    }
                    for(g in n)if (C = n[g], D = l[g], n.hasOwnProperty(g) && C !== D && (C != null || D != null)) switch(g){
                        case "selected":
                            e.selected = C && typeof C != "function" && typeof C != "symbol";
                            break;
                        default:
                            _e(e, t, g, C, n, D);
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
                    for(var ee in l)C = l[ee], l.hasOwnProperty(ee) && C != null && !n.hasOwnProperty(ee) && _e(e, t, ee, null, n, C);
                    for(x in n)if (C = n[x], D = l[x], n.hasOwnProperty(x) && C !== D && (C != null || D != null)) switch(x){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (C != null) throw Error(c(137, t));
                            break;
                        default:
                            _e(e, t, x, C, n, D);
                    }
                    return;
                default:
                    if (Zi(t)) {
                        for(var Re in l)C = l[Re], l.hasOwnProperty(Re) && C !== void 0 && !n.hasOwnProperty(Re) && Bc(e, t, Re, void 0, n, C);
                        for(z in n)C = n[z], D = l[z], !n.hasOwnProperty(z) || C === D || C === void 0 && D === void 0 || Bc(e, t, z, C, n, D);
                        return;
                    }
            }
            for(var A in l)C = l[A], l.hasOwnProperty(A) && C != null && !n.hasOwnProperty(A) && _e(e, t, A, null, n, C);
            for(H in n)C = n[H], D = l[H], !n.hasOwnProperty(H) || C === D || C == null && D == null || _e(e, t, H, C, n, D);
        }
        var wc = null, Uc = null;
        function ii(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function Zd(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function Jd(e, t) {
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
        function zc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var qc = null;
        function L0() {
            var e = window.event;
            return e && e.type === "popstate" ? e === qc ? !1 : (qc = e, !0) : (qc = null, !1);
        }
        var $d = typeof setTimeout == "function" ? setTimeout : void 0, Q0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Wd = typeof Promise == "function" ? Promise : void 0, K0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wd < "u" ? function(e) {
            return Wd.resolve(null).then(e).catch(G0);
        } : $d;
        function G0(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Nl(e) {
            return e === "head";
        }
        function Fd(e, t) {
            var l = t, n = 0, a = 0;
            do {
                var i = l.nextSibling;
                if (e.removeChild(l), i && i.nodeType === 8) if (l = i.data, l === "/$") {
                    if (0 < n && 8 > n) {
                        l = n;
                        var s = e.ownerDocument;
                        if (l & 1 && Ua(s.documentElement), l & 2 && Ua(s.body), l & 4) for(l = s.head, Ua(l), s = l.firstChild; s;){
                            var p = s.nextSibling, g = s.nodeName;
                            s[Jn] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || l.removeChild(s), s = p;
                        }
                    }
                    if (a === 0) {
                        e.removeChild(i), Qa(t);
                        return;
                    }
                    a--;
                } else l === "$" || l === "$?" || l === "$!" ? a++ : n = l.charCodeAt(0) - 48;
                else n = 0;
                l = i;
            }while (l);
            Qa(t);
        }
        function Pc(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var l = t;
                switch(t = t.nextSibling, l.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        Pc(l), Qi(l);
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
        function Y0(e, t, l, n) {
            for(; e.nodeType === 1;){
                var a = l;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (n) {
                    if (!e[Jn]) switch(t){
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
                if (e = Ut(e.nextSibling), e === null) break;
            }
            return null;
        }
        function V0(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Ut(e.nextSibling), e === null)) return null;
            return e;
        }
        function Hc(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function X0(e, t) {
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
        var kc = null;
        function Id(e) {
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
        function eh(e, t, l) {
            switch(t = ii(l), e){
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
        function Ua(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            Qi(e);
        }
        var Mt = new Map, th = new Set;
        function ri(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var nl = G.d;
        G.d = {
            f: Z0,
            r: J0,
            D: $0,
            C: W0,
            L: F0,
            m: I0,
            X: t1,
            S: e1,
            M: l1
        };
        function Z0() {
            var e = nl.f(), t = Fu();
            return e || t;
        }
        function J0(e) {
            var t = cn(e);
            t !== null && t.tag === 5 && t.type === "form" ? Es(t) : nl.r(e);
        }
        var Qn = typeof document > "u" ? null : document;
        function lh(e, t, l) {
            var n = Qn;
            if (n && typeof t == "string" && t) {
                var a = _t(t);
                a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), th.has(a) || (th.add(a), e = {
                    rel: e,
                    crossOrigin: l,
                    href: t
                }, n.querySelector(a) === null && (t = n.createElement("link"), $e(t, "link", e), Ke(t), n.head.appendChild(t)));
            }
        }
        function $0(e) {
            nl.D(e), lh("dns-prefetch", e, null);
        }
        function W0(e, t) {
            nl.C(e, t), lh("preconnect", e, t);
        }
        function F0(e, t, l) {
            nl.L(e, t, l);
            var n = Qn;
            if (n && e && t) {
                var a = 'link[rel="preload"][as="' + _t(t) + '"]';
                t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + _t(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + _t(l.imageSizes) + '"]')) : a += '[href="' + _t(e) + '"]';
                var i = a;
                switch(t){
                    case "style":
                        i = Kn(e);
                        break;
                    case "script":
                        i = Gn(e);
                }
                Mt.has(i) || (e = S({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), Mt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(za(i)) || t === "script" && n.querySelector(qa(i)) || (t = n.createElement("link"), $e(t, "link", e), Ke(t), n.head.appendChild(t)));
            }
        }
        function I0(e, t) {
            nl.m(e, t);
            var l = Qn;
            if (l && e) {
                var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + _t(n) + '"][href="' + _t(e) + '"]', i = a;
                switch(n){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        i = Gn(e);
                }
                if (!Mt.has(i) && (e = S({
                    rel: "modulepreload",
                    href: e
                }, t), Mt.set(i, e), l.querySelector(a) === null)) {
                    switch(n){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (l.querySelector(qa(i))) return;
                    }
                    n = l.createElement("link"), $e(n, "link", e), Ke(n), l.head.appendChild(n);
                }
            }
        }
        function e1(e, t, l) {
            nl.S(e, t, l);
            var n = Qn;
            if (n && e) {
                var a = fn(n).hoistableStyles, i = Kn(e);
                t = t || "default";
                var s = a.get(i);
                if (!s) {
                    var p = {
                        loading: 0,
                        preload: null
                    };
                    if (s = n.querySelector(za(i))) p.loading = 5;
                    else {
                        e = S({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = Mt.get(i)) && jc(e, l);
                        var g = s = n.createElement("link");
                        Ke(g), $e(g, "link", e), g._p = new Promise(function(x, z) {
                            g.onload = x, g.onerror = z;
                        }), g.addEventListener("load", function() {
                            p.loading |= 1;
                        }), g.addEventListener("error", function() {
                            p.loading |= 2;
                        }), p.loading |= 4, ci(s, t, n);
                    }
                    s = {
                        type: "stylesheet",
                        instance: s,
                        count: 1,
                        state: p
                    }, a.set(i, s);
                }
            }
        }
        function t1(e, t) {
            nl.X(e, t);
            var l = Qn;
            if (l && e) {
                var n = fn(l).hoistableScripts, a = Gn(e), i = n.get(a);
                i || (i = l.querySelector(qa(a)), i || (e = S({
                    src: e,
                    async: !0
                }, t), (t = Mt.get(a)) && Lc(e, t), i = l.createElement("script"), Ke(i), $e(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function l1(e, t) {
            nl.M(e, t);
            var l = Qn;
            if (l && e) {
                var n = fn(l).hoistableScripts, a = Gn(e), i = n.get(a);
                i || (i = l.querySelector(qa(a)), i || (e = S({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Mt.get(a)) && Lc(e, t), i = l.createElement("script"), Ke(i), $e(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function nh(e, t, l, n) {
            var a = (a = ie.current) ? ri(a) : null;
            if (!a) throw Error(c(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Kn(l.href), l = fn(a).hoistableStyles, n = l.get(t), n || (n = {
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
                        e = Kn(l.href);
                        var i = fn(a).hoistableStyles, s = i.get(e);
                        if (s || (a = a.ownerDocument || a, s = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, i.set(e, s), (i = a.querySelector(za(e))) && !i._p && (s.instance = i, s.state.loading = 5), Mt.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, Mt.set(e, l), i || n1(a, e, l, s.state))), t && n === null) throw Error(c(528, ""));
                        return s;
                    }
                    if (t && n !== null) throw Error(c(529, ""));
                    return null;
                case "script":
                    return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Gn(l), l = fn(a).hoistableScripts, n = l.get(t), n || (n = {
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
        function Kn(e) {
            return 'href="' + _t(e) + '"';
        }
        function za(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function ah(e) {
            return S({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function n1(e, t, l, n) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
                return n.loading |= 1;
            }), t.addEventListener("error", function() {
                return n.loading |= 2;
            }), $e(t, "link", l), Ke(t), e.head.appendChild(t));
        }
        function Gn(e) {
            return '[src="' + _t(e) + '"]';
        }
        function qa(e) {
            return "script[async]" + e;
        }
        function uh(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var n = e.querySelector('style[data-href~="' + _t(l.href) + '"]');
                    if (n) return t.instance = n, Ke(n), n;
                    var a = S({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return n = (e.ownerDocument || e).createElement("style"), Ke(n), $e(n, "style", a), ci(n, l.precedence, e), t.instance = n;
                case "stylesheet":
                    a = Kn(l.href);
                    var i = e.querySelector(za(a));
                    if (i) return t.state.loading |= 4, t.instance = i, Ke(i), i;
                    n = ah(l), (a = Mt.get(a)) && jc(n, a), i = (e.ownerDocument || e).createElement("link"), Ke(i);
                    var s = i;
                    return s._p = new Promise(function(p, g) {
                        s.onload = p, s.onerror = g;
                    }), $e(i, "link", n), t.state.loading |= 4, ci(i, l.precedence, e), t.instance = i;
                case "script":
                    return i = Gn(l.src), (a = e.querySelector(qa(i))) ? (t.instance = a, Ke(a), a) : (n = l, (a = Mt.get(i)) && (n = S({}, l), Lc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ke(a), $e(a, "link", n), e.head.appendChild(a), t.instance = a);
                case "void":
                    return null;
                default:
                    throw Error(c(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, ci(n, l.precedence, e));
            return t.instance;
        }
        function ci(e, t, l) {
            for(var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, i = a, s = 0; s < n.length; s++){
                var p = n[s];
                if (p.dataset.precedence === t) i = p;
                else if (i !== a) break;
            }
            i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
        }
        function jc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Lc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var fi = null;
        function ih(e, t, l) {
            if (fi === null) {
                var n = new Map, a = fi = new Map;
                a.set(l, n);
            } else a = fi, n = a.get(l), n || (n = new Map, a.set(l, n));
            if (n.has(e)) return n;
            for(n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++){
                var i = l[a];
                if (!(i[Jn] || i[Ie] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var s = i.getAttribute(t) || "";
                    s = e + s;
                    var p = n.get(s);
                    p ? p.push(i) : n.set(s, [
                        i
                    ]);
                }
            }
            return n;
        }
        function rh(e, t, l) {
            e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
        }
        function a1(e, t, l) {
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
        function ch(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var Pa = null;
        function u1() {}
        function i1(e, t, l) {
            if (Pa === null) throw Error(c(475));
            var n = Pa;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var a = Kn(l.href), i = e.querySelector(za(a));
                    if (i) {
                        e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = oi.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = i, Ke(i);
                        return;
                    }
                    i = e.ownerDocument || e, l = ah(l), (a = Mt.get(a)) && jc(l, a), i = i.createElement("link"), Ke(i);
                    var s = i;
                    s._p = new Promise(function(p, g) {
                        s.onload = p, s.onerror = g;
                    }), $e(i, "link", l), t.instance = i;
                }
                n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = oi.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function r1() {
            if (Pa === null) throw Error(c(475));
            var e = Pa;
            return e.stylesheets && e.count === 0 && Qc(e, e.stylesheets), 0 < e.count ? function(t) {
                var l = setTimeout(function() {
                    if (e.stylesheets && Qc(e, e.stylesheets), e.unsuspend) {
                        var n = e.unsuspend;
                        e.unsuspend = null, n();
                    }
                }, 6e4);
                return e.unsuspend = t, function() {
                    e.unsuspend = null, clearTimeout(l);
                };
            } : null;
        }
        function oi() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Qc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var si = null;
        function Qc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, si = new Map, t.forEach(c1, e), si = null, oi.call(e));
        }
        function c1(e, t) {
            if (!(t.state.loading & 4)) {
                var l = si.get(e);
                if (l) var n = l.get(null);
                else {
                    l = new Map, si.set(e, l);
                    for(var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++){
                        var s = a[i];
                        (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), n = s);
                    }
                    n && l.set(null, n);
                }
                a = t.instance, s = a.getAttribute("data-precedence"), i = l.get(s) || n, i === n && l.set(null, a), l.set(s, a), this.count++, n = oi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
            }
        }
        var Ha = {
            $$typeof: k,
            Provider: null,
            Consumer: null,
            _currentValue: ne,
            _currentValue2: ne,
            _threadCount: 0
        };
        function f1(e, t, l, n, a, i, s, p) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Hi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hi(0), this.hiddenUpdates = Hi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = new Map;
        }
        function fh(e, t, l, n, a, i, s, p, g, x, z, H) {
            return e = new f1(e, t, l, s, p, g, x, H), t = 1, i === !0 && (t |= 24), i = mt(3, null, null, t), e.current = i, i.stateNode = e, t = Rr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: t
            }, Nr(i), e;
        }
        function oh(e) {
            return e ? (e = En, e) : En;
        }
        function sh(e, t, l, n, a, i) {
            a = oh(a), n.context === null ? n.context = a : n.pendingContext = a, n = pl(t), n.payload = {
                element: l
            }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = ml(e, n, t), l !== null && (St(l, e, t), pa(l, e, t));
        }
        function dh(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var l = e.retryLane;
                e.retryLane = l !== 0 && l < t ? l : t;
            }
        }
        function Kc(e, t) {
            dh(e, t), (e = e.alternate) && dh(e, t);
        }
        function hh(e) {
            if (e.tag === 13) {
                var t = Sn(e, 67108864);
                t !== null && St(t, e, 67108864), Kc(e, 67108864);
            }
        }
        var di = !0;
        function o1(e, t, l, n) {
            var a = U.T;
            U.T = null;
            var i = G.p;
            try {
                G.p = 2, Gc(e, t, l, n);
            } finally{
                G.p = i, U.T = a;
            }
        }
        function s1(e, t, l, n) {
            var a = U.T;
            U.T = null;
            var i = G.p;
            try {
                G.p = 8, Gc(e, t, l, n);
            } finally{
                G.p = i, U.T = a;
            }
        }
        function Gc(e, t, l, n) {
            if (di) {
                var a = Yc(n);
                if (a === null) Dc(e, t, n, hi, l), mh(e, n);
                else if (h1(a, e, t, l, n)) n.stopPropagation();
                else if (mh(e, n), t & 4 && -1 < d1.indexOf(e)) {
                    for(; a !== null;){
                        var i = cn(a);
                        if (i !== null) switch(i.tag){
                            case 3:
                                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                                    var s = Pl(i.pendingLanes);
                                    if (s !== 0) {
                                        var p = i;
                                        for(p.pendingLanes |= 2, p.entangledLanes |= 2; s;){
                                            var g = 1 << 31 - ht(s);
                                            p.entanglements[1] |= g, s &= ~g;
                                        }
                                        Lt(i), (be & 6) === 0 && ($u = qt() + 500, Da(0));
                                    }
                                }
                                break;
                            case 13:
                                p = Sn(i, 2), p !== null && St(p, i, 2), Fu(), Kc(i, 2);
                        }
                        if (i = Yc(n), i === null && Dc(e, t, n, hi, l), i === a) break;
                        a = i;
                    }
                    a !== null && n.stopPropagation();
                } else Dc(e, t, n, null, l);
            }
        }
        function Yc(e) {
            return e = $i(e), Vc(e);
        }
        var hi = null;
        function Vc(e) {
            if (hi = null, e = rn(e), e !== null) {
                var t = d(e);
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
            return hi = e, null;
        }
        function ph(e) {
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
                    switch(Wp()){
                        case Nf:
                            return 2;
                        case xf:
                            return 8;
                        case uu:
                        case Fp:
                            return 32;
                        case Mf:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Xc = !1, xl = null, Ml = null, Cl = null, ka = new Map, ja = new Map, Dl = [], d1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function mh(e, t) {
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
                    ka.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    ja.delete(t.pointerId);
            }
        }
        function La(e, t, l, n, a, i) {
            return e === null || e.nativeEvent !== i ? (e = {
                blockedOn: t,
                domEventName: l,
                eventSystemFlags: n,
                nativeEvent: i,
                targetContainers: [
                    a
                ]
            }, t !== null && (t = cn(t), t !== null && hh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
        }
        function h1(e, t, l, n, a) {
            switch(t){
                case "focusin":
                    return xl = La(xl, e, t, l, n, a), !0;
                case "dragenter":
                    return Ml = La(Ml, e, t, l, n, a), !0;
                case "mouseover":
                    return Cl = La(Cl, e, t, l, n, a), !0;
                case "pointerover":
                    var i = a.pointerId;
                    return ka.set(i, La(ka.get(i) || null, e, t, l, n, a)), !0;
                case "gotpointercapture":
                    return i = a.pointerId, ja.set(i, La(ja.get(i) || null, e, t, l, n, a)), !0;
            }
            return !1;
        }
        function yh(e) {
            var t = rn(e.target);
            if (t !== null) {
                var l = d(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = y(l), t !== null) {
                            e.blockedOn = t, im(e.priority, function() {
                                if (l.tag === 13) {
                                    var n = bt();
                                    n = ki(n);
                                    var a = Sn(l, n);
                                    a !== null && St(a, l, n), Kc(l, n);
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
        function pi(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var l = Yc(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var n = new l.constructor(l.type, l);
                    Ji = n, l.target.dispatchEvent(n), Ji = null;
                } else return t = cn(l), t !== null && hh(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function vh(e, t, l) {
            pi(e) && l.delete(t);
        }
        function p1() {
            Xc = !1, xl !== null && pi(xl) && (xl = null), Ml !== null && pi(Ml) && (Ml = null), Cl !== null && pi(Cl) && (Cl = null), ka.forEach(vh), ja.forEach(vh);
        }
        function mi(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Xc || (Xc = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, p1)));
        }
        var yi = null;
        function gh(e) {
            yi !== e && (yi = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
                yi === e && (yi = null);
                for(var t = 0; t < e.length; t += 3){
                    var l = e[t], n = e[t + 1], a = e[t + 2];
                    if (typeof n != "function") {
                        if (Vc(n || l) === null) continue;
                        break;
                    }
                    var i = cn(l);
                    i !== null && (e.splice(t, 3), t -= 3, Vr(i, {
                        pending: !0,
                        data: a,
                        method: l.method,
                        action: n
                    }, n, a));
                }
            }));
        }
        function Qa(e) {
            function t(g) {
                return mi(g, e);
            }
            xl !== null && mi(xl, e), Ml !== null && mi(Ml, e), Cl !== null && mi(Cl, e), ka.forEach(t), ja.forEach(t);
            for(var l = 0; l < Dl.length; l++){
                var n = Dl[l];
                n.blockedOn === e && (n.blockedOn = null);
            }
            for(; 0 < Dl.length && (l = Dl[0], l.blockedOn === null);)yh(l), l.blockedOn === null && Dl.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(n = 0; n < l.length; n += 3){
                var a = l[n], i = l[n + 1], s = a[ut] || null;
                if (typeof i == "function") s || gh(l);
                else if (s) {
                    var p = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (a = i, s = i[ut] || null) p = s.formAction;
                        else if (Vc(a) !== null) continue;
                    } else p = s.action;
                    typeof p == "function" ? l[n + 1] = p : (l.splice(n, 3), n -= 3), gh(l);
                }
            }
        }
        function Zc(e) {
            this._internalRoot = e;
        }
        vi.prototype.render = Zc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(c(409));
            var l = t.current, n = bt();
            sh(l, n, e, t, null, null);
        }, vi.prototype.unmount = Zc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                sh(e.current, 2, null, e, null, null), Fu(), t[un] = null;
            }
        };
        function vi(e) {
            this._internalRoot = e;
        }
        vi.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Uf();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Dl.length && t !== 0 && t < Dl[l].priority; l++);
                Dl.splice(l, 0, e), l === 0 && yh(e);
            }
        };
        var bh = r.version;
        if (bh !== "19.1.0") throw Error(c(527, bh, "19.1.0"));
        G.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
            return e = h(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var m1 = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: U,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var gi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!gi.isDisabled && gi.supportsFiber) try {
                Vn = gi.inject(m1), dt = gi;
            } catch  {}
        }
        return Ga.createRoot = function(e, t) {
            if (!o(e)) throw Error(c(299));
            var l = !1, n = "", a = zs, i = qs, s = Ps, p = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (p = t.unstable_transitionCallbacks)), t = fh(e, 1, !1, null, null, l, n, a, i, s, p, null), e[un] = t.current, Cc(e), new Zc(t);
        }, Ga.hydrateRoot = function(e, t, l) {
            if (!o(e)) throw Error(c(299));
            var n = !1, a = "", i = zs, s = qs, p = Ps, g = null, x = null;
            return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (p = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks), l.formState !== void 0 && (x = l.formState)), t = fh(e, 1, !0, t, l ?? null, n, a, i, s, p, g, x), t.context = oh(null), l = t.current, n = bt(), n = ki(n), a = pl(n), a.callback = null, ml(l, a, n), l = n, t.current.lanes = l, Zn(t, l), Lt(t), e[un] = t.current, Cc(e), new vi(t);
        }, Ga.version = "19.1.0", Ga;
    }
    var Mh;
    function A1() {
        if (Mh) return Wc.exports;
        Mh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), Wc.exports = T1(), Wc.exports;
    }
    var O1 = A1(), tf = {
        exports: {}
    }, lf = {};
    var Ch;
    function N1() {
        if (Ch) return lf;
        Ch = 1;
        var u = Di();
        function r(h, v) {
            return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
        }
        var f = typeof Object.is == "function" ? Object.is : r, c = u.useSyncExternalStore, o = u.useRef, d = u.useEffect, y = u.useMemo, m = u.useDebugValue;
        return lf.useSyncExternalStoreWithSelector = function(h, v, S, R, b) {
            var O = o(null);
            if (O.current === null) {
                var M = {
                    hasValue: !1,
                    value: null
                };
                O.current = M;
            } else M = O.current;
            O = y(function() {
                function q(K) {
                    if (!w) {
                        if (w = !0, L = K, K = R(K), b !== void 0 && M.hasValue) {
                            var F = M.value;
                            if (b(F, K)) return k = F;
                        }
                        return k = K;
                    }
                    if (F = k, f(L, K)) return F;
                    var Z = R(K);
                    return b !== void 0 && b(F, Z) ? (L = K, F) : (L = K, k = Z);
                }
                var w = !1, L, k, V = S === void 0 ? null : S;
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
                S,
                R,
                b
            ]);
            var B = c(h, O[0], O[1]);
            return d(function() {
                M.hasValue = !0, M.value = B;
            }, [
                B
            ]), m(B), B;
        }, lf;
    }
    var Dh;
    function x1() {
        return Dh || (Dh = 1, tf.exports = N1()), tf.exports;
    }
    var M1 = x1();
    function C1(u) {
        u();
    }
    function D1() {
        let u = null, r = null;
        return {
            clear () {
                u = null, r = null;
            },
            notify () {
                C1(()=>{
                    let f = u;
                    for(; f;)f.callback(), f = f.next;
                });
            },
            get () {
                const f = [];
                let c = u;
                for(; c;)f.push(c), c = c.next;
                return f;
            },
            subscribe (f) {
                let c = !0;
                const o = r = {
                    callback: f,
                    next: null,
                    prev: r
                };
                return o.prev ? o.prev.next = o : u = o, function() {
                    !c || u === null || (c = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : u = o.next);
                };
            }
        };
    }
    var Bh = {
        notify () {},
        get: ()=>[]
    };
    function B1(u, r) {
        let f, c = Bh, o = 0, d = !1;
        function y(B) {
            S();
            const q = c.subscribe(B);
            let w = !1;
            return ()=>{
                w || (w = !0, q(), R());
            };
        }
        function m() {
            c.notify();
        }
        function h() {
            M.onStateChange && M.onStateChange();
        }
        function v() {
            return d;
        }
        function S() {
            o++, f || (f = u.subscribe(h), c = D1());
        }
        function R() {
            o--, f && o === 0 && (f(), f = void 0, c.clear(), c = Bh);
        }
        function b() {
            d || (d = !0, S());
        }
        function O() {
            d && (d = !1, R());
        }
        const M = {
            addNestedSub: y,
            notifyNestedSubs: m,
            handleChangeWrapper: h,
            isSubscribed: v,
            trySubscribe: b,
            tryUnsubscribe: O,
            getListeners: ()=>c
        };
        return M;
    }
    var w1 = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", U1 = w1(), z1 = ()=>typeof navigator < "u" && navigator.product === "ReactNative", q1 = z1(), P1 = ()=>U1 || q1 ? T.useLayoutEffect : T.useEffect, H1 = P1(), k1 = Symbol.for("react-redux-context"), j1 = typeof globalThis < "u" ? globalThis : {};
    function L1() {
        if (!T.createContext) return {};
        const u = j1[k1] ??= new Map;
        let r = u.get(T.createContext);
        return r || (r = T.createContext(null), u.set(T.createContext, r)), r;
    }
    var ql = L1();
    function Q1(u) {
        const { children: r, context: f, serverState: c, store: o } = u, d = T.useMemo(()=>{
            const h = B1(o);
            return {
                store: o,
                subscription: h,
                getServerState: c ? ()=>c : void 0
            };
        }, [
            o,
            c
        ]), y = T.useMemo(()=>o.getState(), [
            o
        ]);
        H1(()=>{
            const { subscription: h } = d;
            return h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), y !== o.getState() && h.notifyNestedSubs(), ()=>{
                h.tryUnsubscribe(), h.onStateChange = void 0;
            };
        }, [
            d,
            y
        ]);
        const m = f || ql;
        return T.createElement(m.Provider, {
            value: d
        }, r);
    }
    var K1 = Q1;
    function yf(u = ql) {
        return function() {
            return T.useContext(u);
        };
    }
    var ap = yf();
    function up(u = ql) {
        const r = u === ql ? ap : yf(u), f = ()=>{
            const { store: c } = r();
            return c;
        };
        return Object.assign(f, {
            withTypes: ()=>f
        }), f;
    }
    var G1 = up();
    function Y1(u = ql) {
        const r = u === ql ? G1 : up(u), f = ()=>r().dispatch;
        return Object.assign(f, {
            withTypes: ()=>f
        }), f;
    }
    let X1;
    V1 = Y1();
    X1 = (u, r)=>u === r;
    function Z1(u = ql) {
        const r = u === ql ? ap : yf(u), f = (c, o = {})=>{
            const { equalityFn: d = X1 } = typeof o == "function" ? {
                equalityFn: o
            } : o, y = r(), { store: m, subscription: h, getServerState: v } = y;
            T.useRef(!0);
            const S = T.useCallback({
                [c.name] (b) {
                    return c(b);
                }
            }[c.name], [
                c
            ]), R = M1.useSyncExternalStoreWithSelector(h.addNestedSub, m.getState, v || m.getState, S, d);
            return T.useDebugValue(R), R;
        };
        return Object.assign(f, {
            withTypes: ()=>f
        }), f;
    }
    J1 = Z1();
    function We(u) {
        return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var $1 = typeof Symbol == "function" && Symbol.observable || "@@observable", wh = $1, nf = ()=>Math.random().toString(36).substring(7).split("").join("."), W1 = {
        INIT: `@@redux/INIT${nf()}`,
        REPLACE: `@@redux/REPLACE${nf()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${nf()}`
    }, xi = W1;
    function ip(u) {
        if (typeof u != "object" || u === null) return !1;
        let r = u;
        for(; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(u) === r || Object.getPrototypeOf(u) === null;
    }
    function vf(u, r, f) {
        if (typeof u != "function") throw new Error(We(2));
        if (typeof r == "function" && typeof f == "function" || typeof f == "function" && typeof arguments[3] == "function") throw new Error(We(0));
        if (typeof r == "function" && typeof f > "u" && (f = r, r = void 0), typeof f < "u") {
            if (typeof f != "function") throw new Error(We(1));
            return f(vf)(u, r);
        }
        let c = u, o = r, d = new Map, y = d, m = 0, h = !1;
        function v() {
            y === d && (y = new Map, d.forEach((q, w)=>{
                y.set(w, q);
            }));
        }
        function S() {
            if (h) throw new Error(We(3));
            return o;
        }
        function R(q) {
            if (typeof q != "function") throw new Error(We(4));
            if (h) throw new Error(We(5));
            let w = !0;
            v();
            const L = m++;
            return y.set(L, q), function() {
                if (w) {
                    if (h) throw new Error(We(6));
                    w = !1, v(), y.delete(L), d = null;
                }
            };
        }
        function b(q) {
            if (!ip(q)) throw new Error(We(7));
            if (typeof q.type > "u") throw new Error(We(8));
            if (typeof q.type != "string") throw new Error(We(17));
            if (h) throw new Error(We(9));
            try {
                h = !0, o = c(o, q);
            } finally{
                h = !1;
            }
            return (d = y).forEach((L)=>{
                L();
            }), q;
        }
        function O(q) {
            if (typeof q != "function") throw new Error(We(10));
            c = q, b({
                type: xi.REPLACE
            });
        }
        function M() {
            const q = R;
            return {
                subscribe (w) {
                    if (typeof w != "object" || w === null) throw new Error(We(11));
                    function L() {
                        const V = w;
                        V.next && V.next(S());
                    }
                    return L(), {
                        unsubscribe: q(L)
                    };
                },
                [wh] () {
                    return this;
                }
            };
        }
        return b({
            type: xi.INIT
        }), {
            dispatch: b,
            subscribe: R,
            getState: S,
            replaceReducer: O,
            [wh]: M
        };
    }
    function F1(u) {
        Object.keys(u).forEach((r)=>{
            const f = u[r];
            if (typeof f(void 0, {
                type: xi.INIT
            }) > "u") throw new Error(We(12));
            if (typeof f(void 0, {
                type: xi.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(We(13));
        });
    }
    function rp(u) {
        const r = Object.keys(u), f = {};
        for(let d = 0; d < r.length; d++){
            const y = r[d];
            typeof u[y] == "function" && (f[y] = u[y]);
        }
        const c = Object.keys(f);
        let o;
        try {
            F1(f);
        } catch (d) {
            o = d;
        }
        return function(y = {}, m) {
            if (o) throw o;
            let h = !1;
            const v = {};
            for(let S = 0; S < c.length; S++){
                const R = c[S], b = f[R], O = y[R], M = b(O, m);
                if (typeof M > "u") throw m && m.type, new Error(We(14));
                v[R] = M, h = h || M !== O;
            }
            return h = h || c.length !== Object.keys(y).length, h ? v : y;
        };
    }
    function Mi(...u) {
        return u.length === 0 ? (r)=>r : u.length === 1 ? u[0] : u.reduce((r, f)=>(...c)=>r(f(...c)));
    }
    function I1(...u) {
        return (r)=>(f, c)=>{
                const o = r(f, c);
                let d = ()=>{
                    throw new Error(We(15));
                };
                const y = {
                    getState: o.getState,
                    dispatch: (h, ...v)=>d(h, ...v)
                }, m = u.map((h)=>h(y));
                return d = Mi(...m)(o.dispatch), {
                    ...o,
                    dispatch: d
                };
            };
    }
    function cp(u) {
        return ({ dispatch: f, getState: c })=>(o)=>(d)=>typeof d == "function" ? d(f, c, u) : o(d);
    }
    var ey = cp(), ty = cp, ly = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Mi : Mi.apply(null, arguments);
    }, fp = class Ja extends Array {
        constructor(...r){
            super(...r), Object.setPrototypeOf(this, Ja.prototype);
        }
        static get [Symbol.species]() {
            return Ja;
        }
        concat(...r) {
            return super.concat.apply(this, r);
        }
        prepend(...r) {
            return r.length === 1 && Array.isArray(r[0]) ? new Ja(...r[0].concat(this)) : new Ja(...r.concat(this));
        }
    };
    function ny(u) {
        return typeof u == "boolean";
    }
    var ay = ()=>function(r) {
            const { thunk: f = !0, immutableCheck: c = !0, serializableCheck: o = !0, actionCreatorCheck: d = !0 } = r ?? {};
            let y = new fp;
            return f && (ny(f) ? y.push(ey) : y.push(ty(f.extraArgument))), y;
        }, uy = "RTK_autoBatch", Uh = (u)=>(r)=>{
            setTimeout(r, u);
        }, iy = (u = {
        type: "raf"
    })=>(r)=>(...f)=>{
                const c = r(...f);
                let o = !0, d = !1, y = !1;
                const m = new Set, h = u.type === "tick" ? queueMicrotask : u.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Uh(10) : u.type === "callback" ? u.queueNotification : Uh(u.timeout), v = ()=>{
                    y = !1, d && (d = !1, m.forEach((S)=>S()));
                };
                return Object.assign({}, c, {
                    subscribe (S) {
                        const R = ()=>o && S(), b = c.subscribe(R);
                        return m.add(S), ()=>{
                            b(), m.delete(S);
                        };
                    },
                    dispatch (S) {
                        try {
                            return o = !S?.meta?.[uy], d = !o, d && (y || (y = !0, h(v))), c.dispatch(S);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, ry = (u)=>function(f) {
            const { autoBatch: c = !0 } = f ?? {};
            let o = new fp(u);
            return c && o.push(iy(typeof c == "object" ? c : void 0)), o;
        };
    function cy(u) {
        const r = ay(), { reducer: f = void 0, middleware: c, devTools: o = !0, preloadedState: d = void 0, enhancers: y = void 0 } = u || {};
        let m;
        if (typeof f == "function") m = f;
        else if (ip(f)) m = rp(f);
        else throw new Error(fy(1));
        let h;
        typeof c == "function" ? h = c(r) : h = r();
        let v = Mi;
        o && (v = ly({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const S = I1(...h), R = ry(S);
        let b = typeof y == "function" ? y(R) : R();
        const O = v(...b);
        return vf(m, d, O);
    }
    function fy(u) {
        return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var gf = "persist:", op = "persist/FLUSH", bf = "persist/REHYDRATE", sp = "persist/PAUSE", dp = "persist/PERSIST", hp = "persist/PURGE", pp = "persist/REGISTER", oy = -1;
    function Ti(u) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ti = function(f) {
            return typeof f;
        } : Ti = function(f) {
            return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        }, Ti(u);
    }
    function zh(u, r) {
        var f = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(u);
            r && (c = c.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), f.push.apply(f, c);
        }
        return f;
    }
    function sy(u) {
        for(var r = 1; r < arguments.length; r++){
            var f = arguments[r] != null ? arguments[r] : {};
            r % 2 ? zh(f, !0).forEach(function(c) {
                dy(u, c, f[c]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(f)) : zh(f).forEach(function(c) {
                Object.defineProperty(u, c, Object.getOwnPropertyDescriptor(f, c));
            });
        }
        return u;
    }
    function dy(u, r, f) {
        return r in u ? Object.defineProperty(u, r, {
            value: f,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = f, u;
    }
    function hy(u, r, f, c) {
        c.debug;
        var o = sy({}, f);
        return u && Ti(u) === "object" && Object.keys(u).forEach(function(d) {
            d !== "_persist" && r[d] === f[d] && (o[d] = u[d]);
        }), o;
    }
    function py(u) {
        var r = u.blacklist || null, f = u.whitelist || null, c = u.transforms || [], o = u.throttle || 0, d = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : gf).concat(u.key), y = u.storage, m;
        u.serialize === !1 ? m = function(K) {
            return K;
        } : typeof u.serialize == "function" ? m = u.serialize : m = my;
        var h = u.writeFailHandler || null, v = {}, S = {}, R = [], b = null, O = null, M = function(K) {
            Object.keys(K).forEach(function(F) {
                w(F) && v[F] !== K[F] && R.indexOf(F) === -1 && R.push(F);
            }), Object.keys(v).forEach(function(F) {
                K[F] === void 0 && w(F) && R.indexOf(F) === -1 && v[F] !== void 0 && R.push(F);
            }), b === null && (b = setInterval(B, o)), v = K;
        };
        function B() {
            if (R.length === 0) {
                b && clearInterval(b), b = null;
                return;
            }
            var V = R.shift(), K = c.reduce(function(F, Z) {
                return Z.in(F, V, v);
            }, v[V]);
            if (K !== void 0) try {
                S[V] = m(K);
            } catch (F) {
                console.error("redux-persist/createPersistoid: error serializing state", F);
            }
            else delete S[V];
            R.length === 0 && q();
        }
        function q() {
            Object.keys(S).forEach(function(V) {
                v[V] === void 0 && delete S[V];
            }), O = y.setItem(d, m(S)).catch(L);
        }
        function w(V) {
            return !(f && f.indexOf(V) === -1 && V !== "_persist" || r && r.indexOf(V) !== -1);
        }
        function L(V) {
            h && h(V);
        }
        var k = function() {
            for(; R.length !== 0;)B();
            return O || Promise.resolve();
        };
        return {
            update: M,
            flush: k
        };
    }
    function my(u) {
        return JSON.stringify(u);
    }
    function yy(u) {
        var r = u.transforms || [], f = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : gf).concat(u.key), c = u.storage;
        u.debug;
        var o;
        return u.deserialize === !1 ? o = function(y) {
            return y;
        } : typeof u.deserialize == "function" ? o = u.deserialize : o = vy, c.getItem(f).then(function(d) {
            if (d) try {
                var y = {}, m = o(d);
                return Object.keys(m).forEach(function(h) {
                    y[h] = r.reduceRight(function(v, S) {
                        return S.out(v, h, m);
                    }, o(m[h]));
                }), y;
            } catch (h) {
                throw h;
            }
            else return;
        });
    }
    function vy(u) {
        return JSON.parse(u);
    }
    function gy(u) {
        var r = u.storage, f = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : gf).concat(u.key);
        return r.removeItem(f, by);
    }
    function by(u) {}
    function qh(u, r) {
        var f = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(u);
            r && (c = c.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), f.push.apply(f, c);
        }
        return f;
    }
    function al(u) {
        for(var r = 1; r < arguments.length; r++){
            var f = arguments[r] != null ? arguments[r] : {};
            r % 2 ? qh(f, !0).forEach(function(c) {
                Sy(u, c, f[c]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(f)) : qh(f).forEach(function(c) {
                Object.defineProperty(u, c, Object.getOwnPropertyDescriptor(f, c));
            });
        }
        return u;
    }
    function Sy(u, r, f) {
        return r in u ? Object.defineProperty(u, r, {
            value: f,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = f, u;
    }
    function Ey(u, r) {
        if (u == null) return {};
        var f = _y(u, r), c, o;
        if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(u);
            for(o = 0; o < d.length; o++)c = d[o], !(r.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(u, c) && (f[c] = u[c]);
        }
        return f;
    }
    function _y(u, r) {
        if (u == null) return {};
        var f = {}, c = Object.keys(u), o, d;
        for(d = 0; d < c.length; d++)o = c[d], !(r.indexOf(o) >= 0) && (f[o] = u[o]);
        return f;
    }
    var Ry = 5e3;
    function Ty(u, r) {
        var f = u.version !== void 0 ? u.version : oy;
        u.debug;
        var c = u.stateReconciler === void 0 ? hy : u.stateReconciler, o = u.getStoredState || yy, d = u.timeout !== void 0 ? u.timeout : Ry, y = null, m = !1, h = !0, v = function(R) {
            return R._persist.rehydrated && y && !h && y.update(R), R;
        };
        return function(S, R) {
            var b = S || {}, O = b._persist, M = Ey(b, [
                "_persist"
            ]), B = M;
            if (R.type === dp) {
                var q = !1, w = function($, te) {
                    q || (R.rehydrate(u.key, $, te), q = !0);
                };
                if (d && setTimeout(function() {
                    !q && w(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(u.key, '"')));
                }, d), h = !1, y || (y = py(u)), O) return al({}, r(B, R), {
                    _persist: O
                });
                if (typeof R.rehydrate != "function" || typeof R.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return R.register(u.key), o(u).then(function(Z) {
                    var $ = u.migrate || function(te, Ne) {
                        return Promise.resolve(te);
                    };
                    $(Z, f).then(function(te) {
                        w(te);
                    }, function(te) {
                        w(void 0, te);
                    });
                }, function(Z) {
                    w(void 0, Z);
                }), al({}, r(B, R), {
                    _persist: {
                        version: f,
                        rehydrated: !1
                    }
                });
            } else {
                if (R.type === hp) return m = !0, R.result(gy(u)), al({}, r(B, R), {
                    _persist: O
                });
                if (R.type === op) return R.result(y && y.flush()), al({}, r(B, R), {
                    _persist: O
                });
                if (R.type === sp) h = !0;
                else if (R.type === bf) {
                    if (m) return al({}, B, {
                        _persist: al({}, O, {
                            rehydrated: !0
                        })
                    });
                    if (R.key === u.key) {
                        var L = r(B, R), k = R.payload, V = c !== !1 && k !== void 0 ? c(k, S, L, u) : L, K = al({}, V, {
                            _persist: al({}, O, {
                                rehydrated: !0
                            })
                        });
                        return v(K);
                    }
                }
            }
            if (!O) return r(S, R);
            var F = r(B, R);
            return F === B ? S : v(al({}, F, {
                _persist: O
            }));
        };
    }
    function Ph(u) {
        return Ny(u) || Oy(u) || Ay();
    }
    function Ay() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function Oy(u) {
        if (Symbol.iterator in Object(u) || Object.prototype.toString.call(u) === "[object Arguments]") return Array.from(u);
    }
    function Ny(u) {
        if (Array.isArray(u)) {
            for(var r = 0, f = new Array(u.length); r < u.length; r++)f[r] = u[r];
            return f;
        }
    }
    function Hh(u, r) {
        var f = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(u);
            r && (c = c.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), f.push.apply(f, c);
        }
        return f;
    }
    function sf(u) {
        for(var r = 1; r < arguments.length; r++){
            var f = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Hh(f, !0).forEach(function(c) {
                xy(u, c, f[c]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(f)) : Hh(f).forEach(function(c) {
                Object.defineProperty(u, c, Object.getOwnPropertyDescriptor(f, c));
            });
        }
        return u;
    }
    function xy(u, r, f) {
        return r in u ? Object.defineProperty(u, r, {
            value: f,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = f, u;
    }
    var mp = {
        registry: [],
        bootstrapped: !1
    }, My = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mp, f = arguments.length > 1 ? arguments[1] : void 0;
        switch(f.type){
            case pp:
                return sf({}, r, {
                    registry: [].concat(Ph(r.registry), [
                        f.key
                    ])
                });
            case bf:
                var c = r.registry.indexOf(f.key), o = Ph(r.registry);
                return o.splice(c, 1), sf({}, r, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return r;
        }
    };
    function Cy(u, r, f) {
        var c = vf(My, mp, void 0), o = function(h) {
            c.dispatch({
                type: pp,
                key: h
            });
        }, d = function(h, v, S) {
            var R = {
                type: bf,
                payload: v,
                err: S,
                key: h
            };
            u.dispatch(R), c.dispatch(R);
        }, y = sf({}, c, {
            purge: function() {
                var h = [];
                return u.dispatch({
                    type: hp,
                    result: function(S) {
                        h.push(S);
                    }
                }), Promise.all(h);
            },
            flush: function() {
                var h = [];
                return u.dispatch({
                    type: op,
                    result: function(S) {
                        h.push(S);
                    }
                }), Promise.all(h);
            },
            pause: function() {
                u.dispatch({
                    type: sp
                });
            },
            persist: function() {
                u.dispatch({
                    type: dp,
                    register: o,
                    rehydrate: d
                });
            }
        });
        return y.persist(), y;
    }
    var Ya = {}, bi = {}, Si = {}, kh;
    function Dy() {
        if (kh) return Si;
        kh = 1, Si.__esModule = !0, Si.default = o;
        function u(d) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? u = function(m) {
                return typeof m;
            } : u = function(m) {
                return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
            }, u(d);
        }
        function r() {}
        var f = {
            getItem: r,
            setItem: r,
            removeItem: r
        };
        function c(d) {
            if ((typeof self > "u" ? "undefined" : u(self)) !== "object" || !(d in self)) return !1;
            try {
                var y = self[d], m = "redux-persist ".concat(d, " test");
                y.setItem(m, "test"), y.getItem(m), y.removeItem(m);
            } catch  {
                return !1;
            }
            return !0;
        }
        function o(d) {
            var y = "".concat(d, "Storage");
            return c(y) ? self[y] : f;
        }
        return Si;
    }
    var jh;
    function By() {
        if (jh) return bi;
        jh = 1, bi.__esModule = !0, bi.default = f;
        var u = r(Dy());
        function r(c) {
            return c && c.__esModule ? c : {
                default: c
            };
        }
        function f(c) {
            var o = (0, u.default)(c);
            return {
                getItem: function(y) {
                    return new Promise(function(m, h) {
                        m(o.getItem(y));
                    });
                },
                setItem: function(y, m) {
                    return new Promise(function(h, v) {
                        h(o.setItem(y, m));
                    });
                },
                removeItem: function(y) {
                    return new Promise(function(m, h) {
                        m(o.removeItem(y));
                    });
                }
            };
        }
        return bi;
    }
    var Lh;
    function wy() {
        if (Lh) return Ya;
        Lh = 1, Ya.__esModule = !0, Ya.default = void 0;
        var u = r(By());
        function r(c) {
            return c && c.__esModule ? c : {
                default: c
            };
        }
        var f = (0, u.default)("local");
        return Ya.default = f, Ya;
    }
    var Uy = wy();
    const zy = lp(Uy);
    const lt = "w", Ct = "b", Xe = "p", df = "n", Ai = "b", $a = "r", zl = "q", Le = "k", af = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    class Ei {
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
        constructor(r, f){
            const { color: c, piece: o, from: d, to: y, flags: m, captured: h, promotion: v } = f, S = Fe(d), R = Fe(y);
            this.color = c, this.piece = o, this.from = S, this.to = R, this.san = r._moveToSan(f, r._moves({
                legal: !0
            })), this.lan = S + R, this.before = r.fen(), r._makeMove(f), this.after = r.fen(), r._undoMove(), this.flags = "";
            for(const b in ce)ce[b] & m && (this.flags += tn[b]);
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
    }, hf = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, qy = {
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
    }, Py = {
        ...hf,
        ...qy
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
    }, uf = {
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
    }, Qh = {
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
    }, Hy = [
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
    ], ky = [
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
    ], jy = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, Ly = "pnbrqkPNBRQK", Kh = [
        df,
        Ai,
        $a,
        zl
    ], Qy = 7, Ky = 6, Gy = 1, Yy = 0, _i = {
        [Le]: ce.KSIDE_CASTLE,
        [zl]: ce.QSIDE_CASTLE
    }, wl = {
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
    }, Vy = {
        b: Gy,
        w: Ky
    }, Xy = [
        "1-0",
        "0-1",
        "1/2-1/2",
        "*"
    ];
    function ln(u) {
        return u >> 4;
    }
    function Ia(u) {
        return u & 15;
    }
    function yp(u) {
        return "0123456789".indexOf(u) !== -1;
    }
    function Fe(u) {
        const r = Ia(u), f = ln(u);
        return "abcdefgh".substring(r, r + 1) + "87654321".substring(f, f + 1);
    }
    function Va(u) {
        return u === lt ? Ct : lt;
    }
    function Zy(u) {
        const r = u.split(/\s+/);
        if (r.length !== 6) return {
            ok: !1,
            error: "Invalid FEN: must contain six space-delimited fields"
        };
        const f = parseInt(r[5], 10);
        if (isNaN(f) || f <= 0) return {
            ok: !1,
            error: "Invalid FEN: move number must be a positive integer"
        };
        const c = parseInt(r[4], 10);
        if (isNaN(c) || c < 0) return {
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
            let m = 0, h = !1;
            for(let v = 0; v < o[y].length; v++)if (yp(o[y][v])) {
                if (h) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                m += parseInt(o[y][v], 10), h = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(o[y][v])) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (invalid piece)"
                };
                m += 1, h = !1;
            }
            if (m !== 8) return {
                ok: !1,
                error: "Invalid FEN: piece data is invalid (too many squares in rank)"
            };
        }
        if (r[3][1] == "3" && r[1] == "w" || r[3][1] == "6" && r[1] == "b") return {
            ok: !1,
            error: "Invalid FEN: illegal en-passant square"
        };
        const d = [
            {
                color: "white",
                regex: /K/g
            },
            {
                color: "black",
                regex: /k/g
            }
        ];
        for (const { color: y, regex: m } of d){
            if (!m.test(r[0])) return {
                ok: !1,
                error: `Invalid FEN: missing ${y} king`
            };
            if ((r[0].match(m) || []).length > 1) return {
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
    function Jy(u, r) {
        const f = u.from, c = u.to, o = u.piece;
        let d = 0, y = 0, m = 0;
        for(let h = 0, v = r.length; h < v; h++){
            const S = r[h].from, R = r[h].to, b = r[h].piece;
            o === b && f !== S && c === R && (d++, ln(f) === ln(S) && y++, Ia(f) === Ia(S) && m++);
        }
        return d > 0 ? y > 0 && m > 0 ? Fe(f) : m > 0 ? Fe(f).charAt(1) : Fe(f).charAt(0) : "";
    }
    function Ul(u, r, f, c, o, d = void 0, y = ce.NORMAL) {
        const m = ln(c);
        if (o === Xe && (m === Qy || m === Yy)) for(let h = 0; h < Kh.length; h++){
            const v = Kh[h];
            u.push({
                color: r,
                from: f,
                to: c,
                piece: o,
                captured: d,
                promotion: v,
                flags: y | ce.PROMOTION
            });
        }
        else u.push({
            color: r,
            from: f,
            to: c,
            piece: o,
            captured: d,
            flags: y
        });
    }
    function Gh(u) {
        let r = u.charAt(0);
        return r >= "a" && r <= "h" ? u.match(/[a-h]\d.*[a-h]\d/) ? void 0 : Xe : (r = r.toLowerCase(), r === "o" ? Le : r);
    }
    function rf(u) {
        return u.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function cf(u) {
        return u.split(" ").slice(0, 4).join(" ");
    }
    Sf = class {
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
        constructor(r = af, { skipValidation: f = !1 } = {}){
            this.load(r, {
                skipValidation: f
            });
        }
        clear({ preserveHeaders: r = !1 } = {}) {
            this._board = new Array(128), this._kings = {
                w: ot,
                b: ot
            }, this._turn = lt, this._castling = {
                w: 0,
                b: 0
            }, this._epSquare = ot, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = r ? this._header : {
                ...Py
            }, this._positionCount = {}, this._header.SetUp = null, this._header.FEN = null;
        }
        load(r, { skipValidation: f = !1, preserveHeaders: c = !1 } = {}) {
            let o = r.split(/\s+/);
            if (o.length >= 2 && o.length < 6) {
                const m = [
                    "-",
                    "-",
                    "0",
                    "1"
                ];
                r = o.concat(m.slice(-(6 - o.length))).join(" ");
            }
            if (o = r.split(/\s+/), !f) {
                const { ok: m, error: h } = Zy(r);
                if (!m) throw new Error(h);
            }
            const d = o[0];
            let y = 0;
            this.clear({
                preserveHeaders: c
            });
            for(let m = 0; m < d.length; m++){
                const h = d.charAt(m);
                if (h === "/") y += 8;
                else if (yp(h)) y += parseInt(h, 10);
                else {
                    const v = h < "a" ? lt : Ct;
                    this._put({
                        type: h.toLowerCase(),
                        color: v
                    }, Fe(y)), y++;
                }
            }
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= ce.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= ce.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= ce.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= ce.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? ot : ue[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(r), this._incPositionCount(r);
        }
        fen() {
            let r = 0, f = "";
            for(let d = ue.a8; d <= ue.h1; d++){
                if (this._board[d]) {
                    r > 0 && (f += r, r = 0);
                    const { color: y, type: m } = this._board[d];
                    f += y === lt ? m.toUpperCase() : m.toLowerCase();
                } else r++;
                d + 1 & 136 && (r > 0 && (f += r), d !== ue.h1 && (f += "/"), r = 0, d += 8);
            }
            let c = "";
            this._castling[lt] & ce.KSIDE_CASTLE && (c += "K"), this._castling[lt] & ce.QSIDE_CASTLE && (c += "Q"), this._castling[Ct] & ce.KSIDE_CASTLE && (c += "k"), this._castling[Ct] & ce.QSIDE_CASTLE && (c += "q"), c = c || "-";
            let o = "-";
            if (this._epSquare !== ot) {
                const d = this._epSquare + (this._turn === lt ? 16 : -16), y = [
                    d + 1,
                    d - 1
                ];
                for (const m of y){
                    if (m & 136) continue;
                    const h = this._turn;
                    if (this._board[m]?.color === h && this._board[m]?.type === Xe) {
                        this._makeMove({
                            color: h,
                            from: m,
                            to: this._epSquare,
                            piece: Xe,
                            captured: Xe,
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
                f,
                this._turn,
                c,
                o,
                this._halfMoves,
                this._moveNumber
            ].join(" ");
        }
        _updateSetup(r) {
            this._history.length > 0 || (r !== af ? (this._header.SetUp = "1", this._header.FEN = r) : (this._header.SetUp = null, this._header.FEN = null));
        }
        reset() {
            this.load(af);
        }
        get(r) {
            return this._board[ue[r]];
        }
        findPiece(r) {
            const f = [];
            for(let c = ue.a8; c <= ue.h1; c++){
                if (c & 136) {
                    c += 7;
                    continue;
                }
                !this._board[c] || this._board[c]?.color !== r.color || this._board[c].color === r.color && this._board[c].type === r.type && f.push(Fe(c));
            }
            return f;
        }
        put({ type: r, color: f }, c) {
            return this._put({
                type: r,
                color: f
            }, c) ? (this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0) : !1;
        }
        _put({ type: r, color: f }, c) {
            if (Ly.indexOf(r.toLowerCase()) === -1 || !(c in ue)) return !1;
            const o = ue[c];
            if (r == Le && !(this._kings[f] == ot || this._kings[f] == o)) return !1;
            const d = this._board[o];
            return d && d.type === Le && (this._kings[d.color] = ot), this._board[o] = {
                type: r,
                color: f
            }, r === Le && (this._kings[f] = o), !0;
        }
        remove(r) {
            const f = this.get(r);
            return delete this._board[ue[r]], f && f.type === Le && (this._kings[f.color] = ot), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), f;
        }
        _updateCastlingRights() {
            const r = this._board[ue.e1]?.type === Le && this._board[ue.e1]?.color === lt, f = this._board[ue.e8]?.type === Le && this._board[ue.e8]?.color === Ct;
            (!r || this._board[ue.a1]?.type !== $a || this._board[ue.a1]?.color !== lt) && (this._castling.w &= -65), (!r || this._board[ue.h1]?.type !== $a || this._board[ue.h1]?.color !== lt) && (this._castling.w &= -33), (!f || this._board[ue.a8]?.type !== $a || this._board[ue.a8]?.color !== Ct) && (this._castling.b &= -65), (!f || this._board[ue.h8]?.type !== $a || this._board[ue.h8]?.color !== Ct) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === ot) return;
            const r = this._epSquare + (this._turn === lt ? -16 : 16), f = this._epSquare + (this._turn === lt ? 16 : -16), c = [
                f + 1,
                f - 1
            ];
            if (this._board[r] !== null || this._board[this._epSquare] !== null || this._board[f]?.color !== Va(this._turn) || this._board[f]?.type !== Xe) {
                this._epSquare = ot;
                return;
            }
            const o = (d)=>!(d & 136) && this._board[d]?.color === this._turn && this._board[d]?.type === Xe;
            c.some(o) || (this._epSquare = ot);
        }
        _attacked(r, f, c) {
            const o = [];
            for(let d = ue.a8; d <= ue.h1; d++){
                if (d & 136) {
                    d += 7;
                    continue;
                }
                if (this._board[d] === void 0 || this._board[d].color !== r) continue;
                const y = this._board[d], m = d - f;
                if (m === 0) continue;
                const h = m + 119;
                if (Hy[h] & jy[y.type]) {
                    if (y.type === Xe) {
                        if (m > 0 && y.color === lt || m <= 0 && y.color === Ct) if (c) o.push(Fe(d));
                        else return !0;
                        continue;
                    }
                    if (y.type === "n" || y.type === "k") if (c) {
                        o.push(Fe(d));
                        continue;
                    } else return !0;
                    const v = ky[h];
                    let S = d + v, R = !1;
                    for(; S !== f;){
                        if (this._board[S] != null) {
                            R = !0;
                            break;
                        }
                        S += v;
                    }
                    if (!R) if (c) {
                        o.push(Fe(d));
                        continue;
                    } else return !0;
                }
            }
            return c ? o : !1;
        }
        attackers(r, f) {
            return f ? this._attacked(f, ue[r], !0) : this._attacked(this._turn, ue[r], !0);
        }
        _isKingAttacked(r) {
            const f = this._kings[r];
            return f === -1 ? !1 : this._attacked(Va(r), f);
        }
        isAttacked(r, f) {
            return this._attacked(f, ue[r]);
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
            }, f = [];
            let c = 0, o = 0;
            for(let d = ue.a8; d <= ue.h1; d++){
                if (o = (o + 1) % 2, d & 136) {
                    d += 7;
                    continue;
                }
                const y = this._board[d];
                y && (r[y.type] = y.type in r ? r[y.type] + 1 : 1, y.type === Ai && f.push(o), c++);
            }
            if (c === 2) return !0;
            if (c === 3 && (r[Ai] === 1 || r[df] === 1)) return !0;
            if (c === r[Ai] + 2) {
                let d = 0;
                const y = f.length;
                for(let m = 0; m < y; m++)d += f[m];
                if (d === 0 || d === y) return !0;
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
        moves({ verbose: r = !1, square: f = void 0, piece: c = void 0 } = {}) {
            const o = this._moves({
                square: f,
                piece: c
            });
            return r ? o.map((d)=>new Ei(this, d)) : o.map((d)=>this._moveToSan(d, o));
        }
        _moves({ legal: r = !0, piece: f = void 0, square: c = void 0 } = {}) {
            const o = c ? c.toLowerCase() : void 0, d = f?.toLowerCase(), y = [], m = this._turn, h = Va(m);
            let v = ue.a8, S = ue.h1, R = !1;
            if (o) if (o in ue) v = S = ue[o], R = !0;
            else return [];
            for(let O = v; O <= S; O++){
                if (O & 136) {
                    O += 7;
                    continue;
                }
                if (!this._board[O] || this._board[O].color === h) continue;
                const { type: M } = this._board[O];
                let B;
                if (M === Xe) {
                    if (d && d !== M) continue;
                    B = O + uf[m][0], this._board[B] || (Ul(y, m, O, B, Xe), B = O + uf[m][1], Vy[m] === ln(O) && !this._board[B] && Ul(y, m, O, B, Xe, void 0, ce.BIG_PAWN));
                    for(let q = 2; q < 4; q++)B = O + uf[m][q], !(B & 136) && (this._board[B]?.color === h ? Ul(y, m, O, B, Xe, this._board[B].type, ce.CAPTURE) : B === this._epSquare && Ul(y, m, O, B, Xe, Xe, ce.EP_CAPTURE));
                } else {
                    if (d && d !== M) continue;
                    for(let q = 0, w = Qh[M].length; q < w; q++){
                        const L = Qh[M][q];
                        for(B = O; B += L, !(B & 136);){
                            if (!this._board[B]) Ul(y, m, O, B, M);
                            else {
                                if (this._board[B].color === m) break;
                                Ul(y, m, O, B, M, this._board[B].type, ce.CAPTURE);
                                break;
                            }
                            if (M === df || M === Le) break;
                        }
                    }
                }
            }
            if ((d === void 0 || d === Le) && (!R || S === this._kings[m])) {
                if (this._castling[m] & ce.KSIDE_CASTLE) {
                    const O = this._kings[m], M = O + 2;
                    !this._board[O + 1] && !this._board[M] && !this._attacked(h, this._kings[m]) && !this._attacked(h, O + 1) && !this._attacked(h, M) && Ul(y, m, this._kings[m], M, Le, void 0, ce.KSIDE_CASTLE);
                }
                if (this._castling[m] & ce.QSIDE_CASTLE) {
                    const O = this._kings[m], M = O - 2;
                    !this._board[O - 1] && !this._board[O - 2] && !this._board[O - 3] && !this._attacked(h, this._kings[m]) && !this._attacked(h, O - 1) && !this._attacked(h, M) && Ul(y, m, this._kings[m], M, Le, void 0, ce.QSIDE_CASTLE);
                }
            }
            if (!r || this._kings[m] === -1) return y;
            const b = [];
            for(let O = 0, M = y.length; O < M; O++)this._makeMove(y[O]), this._isKingAttacked(m) || b.push(y[O]), this._undoMove();
            return b;
        }
        move(r, { strict: f = !1 } = {}) {
            let c = null;
            if (typeof r == "string") c = this._moveFromSan(r, f);
            else if (typeof r == "object") {
                const d = this._moves();
                for(let y = 0, m = d.length; y < m; y++)if (r.from === Fe(d[y].from) && r.to === Fe(d[y].to) && (!("promotion" in d[y]) || r.promotion === d[y].promotion)) {
                    c = d[y];
                    break;
                }
            }
            if (!c) throw typeof r == "string" ? new Error(`Invalid move: ${r}`) : new Error(`Invalid move: ${JSON.stringify(r)}`);
            const o = new Ei(this, c);
            return this._makeMove(c), this._incPositionCount(o.after), o;
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
            const f = this._turn, c = Va(f);
            if (this._push(r), this._board[r.to] = this._board[r.from], delete this._board[r.from], r.flags & ce.EP_CAPTURE && (this._turn === Ct ? delete this._board[r.to - 16] : delete this._board[r.to + 16]), r.promotion && (this._board[r.to] = {
                type: r.promotion,
                color: f
            }), this._board[r.to].type === Le) {
                if (this._kings[f] = r.to, r.flags & ce.KSIDE_CASTLE) {
                    const o = r.to - 1, d = r.to + 1;
                    this._board[o] = this._board[d], delete this._board[d];
                } else if (r.flags & ce.QSIDE_CASTLE) {
                    const o = r.to + 1, d = r.to - 2;
                    this._board[o] = this._board[d], delete this._board[d];
                }
                this._castling[f] = 0;
            }
            if (this._castling[f]) {
                for(let o = 0, d = wl[f].length; o < d; o++)if (r.from === wl[f][o].square && this._castling[f] & wl[f][o].flag) {
                    this._castling[f] ^= wl[f][o].flag;
                    break;
                }
            }
            if (this._castling[c]) {
                for(let o = 0, d = wl[c].length; o < d; o++)if (r.to === wl[c][o].square && this._castling[c] & wl[c][o].flag) {
                    this._castling[c] ^= wl[c][o].flag;
                    break;
                }
            }
            r.flags & ce.BIG_PAWN ? f === Ct ? this._epSquare = r.to - 16 : this._epSquare = r.to + 16 : this._epSquare = ot, r.piece === Xe ? this._halfMoves = 0 : r.flags & (ce.CAPTURE | ce.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, f === Ct && this._moveNumber++, this._turn = c;
        }
        undo() {
            const r = this._undoMove();
            if (r) {
                const f = new Ei(this, r);
                return this._decPositionCount(f.after), f;
            }
            return null;
        }
        _undoMove() {
            const r = this._history.pop();
            if (r === void 0) return null;
            const f = r.move;
            this._kings = r.kings, this._turn = r.turn, this._castling = r.castling, this._epSquare = r.epSquare, this._halfMoves = r.halfMoves, this._moveNumber = r.moveNumber;
            const c = this._turn, o = Va(c);
            if (this._board[f.from] = this._board[f.to], this._board[f.from].type = f.piece, delete this._board[f.to], f.captured) if (f.flags & ce.EP_CAPTURE) {
                let d;
                c === Ct ? d = f.to - 16 : d = f.to + 16, this._board[d] = {
                    type: Xe,
                    color: o
                };
            } else this._board[f.to] = {
                type: f.captured,
                color: o
            };
            if (f.flags & (ce.KSIDE_CASTLE | ce.QSIDE_CASTLE)) {
                let d, y;
                f.flags & ce.KSIDE_CASTLE ? (d = f.to + 1, y = f.to - 1) : (d = f.to - 2, y = f.to + 1), this._board[d] = this._board[y], delete this._board[y];
            }
            return f;
        }
        pgn({ newline: r = `
`, maxWidth: f = 0 } = {}) {
            const c = [];
            let o = !1;
            for(const b in this._header)this._header[b] && c.push(`[${b} "${this._header[b]}"]` + r), o = !0;
            o && this._history.length && c.push(r);
            const d = (b)=>{
                const O = this._comments[this.fen()];
                if (typeof O < "u") {
                    const M = b.length > 0 ? " " : "";
                    b = `${b}${M}{${O}}`;
                }
                return b;
            }, y = [];
            for(; this._history.length > 0;)y.push(this._undoMove());
            const m = [];
            let h = "";
            for(y.length === 0 && m.push(d("")); y.length > 0;){
                h = d(h);
                const b = y.pop();
                if (!b) break;
                if (!this._history.length && b.color === "b") {
                    const O = `${this._moveNumber}. ...`;
                    h = h ? `${h} ${O}` : O;
                } else b.color === "w" && (h.length && m.push(h), h = this._moveNumber + ".");
                h = h + " " + this._moveToSan(b, this._moves({
                    legal: !0
                })), this._makeMove(b);
            }
            if (h.length && m.push(d(h)), m.push(this._header.Result || "*"), f === 0) return c.join("") + m.join(" ");
            const v = function() {
                return c.length > 0 && c[c.length - 1] === " " ? (c.pop(), !0) : !1;
            }, S = function(b, O) {
                for (const M of O.split(" "))if (M) {
                    if (b + M.length > f) {
                        for(; v();)b--;
                        c.push(r), b = 0;
                    }
                    c.push(M), b += M.length, c.push(" "), b++;
                }
                return v() && b--, b;
            };
            let R = 0;
            for(let b = 0; b < m.length; b++){
                if (R + m[b].length > f && m[b].includes("{")) {
                    R = S(R, m[b]);
                    continue;
                }
                R + m[b].length > f && b !== 0 ? (c[c.length - 1] === " " && c.pop(), c.push(r), R = 0) : b !== 0 && (c.push(" "), R++), c.push(m[b]), R += m[b].length;
            }
            return c.join("");
        }
        header(...r) {
            for(let f = 0; f < r.length; f += 2)typeof r[f] == "string" && typeof r[f + 1] == "string" && (this._header[r[f]] = r[f + 1]);
            return this._header;
        }
        setHeader(r, f) {
            return this._header[r] = f ?? hf[r] ?? null, this.getHeaders();
        }
        removeHeader(r) {
            return r in this._header ? (this._header[r] = hf[r] || null, !0) : !1;
        }
        getHeaders() {
            const r = {};
            for (const [f, c] of Object.entries(this._header))c !== null && (r[f] = c);
            return r;
        }
        loadPgn(r, { strict: f = !1, newlineChar: c = `\r?
` } = {}) {
            function o(k) {
                return k.replace(/\\/g, "\\");
            }
            function d(k) {
                const V = {}, K = k.split(new RegExp(o(c)));
                let F = "", Z = "";
                for(let $ = 0; $ < K.length; $++){
                    const te = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    F = K[$].replace(te, "$1"), Z = K[$].replace(te, "$2"), F.trim().length > 0 && (V[F] = Z);
                }
                return V;
            }
            r = r.trim();
            const m = new RegExp("^(\\[((?:" + o(c) + ")|.)*\\])((?:\\s*" + o(c) + "){2}|(?:\\s*" + o(c) + ")*$)").exec(r), h = m && m.length >= 2 ? m[1] : "";
            this.reset();
            const v = d(h);
            let S = "";
            for(const k in v)k.toLowerCase() === "fen" && (S = v[k]), this.header(k, v[k]);
            if (!f) S && this.load(S, {
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
            function b(k) {
                return k.length == 0 ? "" : decodeURIComponent("%" + (k.match(/.{1,2}/g) || []).join("%"));
            }
            const O = function(k) {
                return k = k.replace(new RegExp(o(c), "g"), " "), `{${R(k.slice(1, k.length - 1))}}`;
            }, M = function(k) {
                if (k.startsWith("{") && k.endsWith("}")) return b(k.slice(1, k.length - 1));
            };
            let B = r.replace(h, "").replace(new RegExp(`({[^}]*})+?|;([^${o(c)}]*)`, "g"), function(k, V, K) {
                return V !== void 0 ? O(V) : " " + O(`{${K.slice(1)}}`);
            }).replace(new RegExp(o(c), "g"), " ");
            const q = /(\([^()]+\))+?/g;
            for(; q.test(B);)B = B.replace(q, "");
            B = B.replace(/\d+\.(\.\.)?/g, ""), B = B.replace(/\.\.\./g, ""), B = B.replace(/\$\d+/g, "");
            let w = B.trim().split(new RegExp(/\s+/));
            w = w.filter((k)=>k !== "");
            let L = "";
            for(let k = 0; k < w.length; k++){
                const V = M(w[k]);
                if (V !== void 0) {
                    this._comments[this.fen()] = V;
                    continue;
                }
                const K = this._moveFromSan(w[k], f);
                if (K == null) if (Xy.indexOf(w[k]) > -1) L = w[k];
                else throw new Error(`Invalid move in PGN: ${w[k]}`);
                else L = "", this._makeMove(K), this._incPositionCount(this.fen());
            }
            L && Object.keys(this._header).length && this._header.Result !== L && this.setHeader("Result", L);
        }
        _moveToSan(r, f) {
            let c = "";
            if (r.flags & ce.KSIDE_CASTLE) c = "O-O";
            else if (r.flags & ce.QSIDE_CASTLE) c = "O-O-O";
            else {
                if (r.piece !== Xe) {
                    const o = Jy(r, f);
                    c += r.piece.toUpperCase() + o;
                }
                r.flags & (ce.CAPTURE | ce.EP_CAPTURE) && (r.piece === Xe && (c += Fe(r.from)[0]), c += "x"), c += Fe(r.to), r.promotion && (c += "=" + r.promotion.toUpperCase());
            }
            return this._makeMove(r), this.isCheck() && (this.isCheckmate() ? c += "#" : c += "+"), this._undoMove(), c;
        }
        _moveFromSan(r, f = !1) {
            const c = rf(r);
            let o = Gh(c), d = this._moves({
                legal: !0,
                piece: o
            });
            for(let b = 0, O = d.length; b < O; b++)if (c === rf(this._moveToSan(d[b], d))) return d[b];
            if (f) return null;
            let y, m, h, v, S, R = !1;
            if (m = c.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), m ? (y = m[1], h = m[2], v = m[3], S = m[4], h.length == 1 && (R = !0)) : (m = c.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), m && (y = m[1], h = m[2], v = m[3], S = m[4], h.length == 1 && (R = !0))), o = Gh(c), d = this._moves({
                legal: !0,
                piece: y || o
            }), !v) return null;
            for(let b = 0, O = d.length; b < O; b++)if (h) {
                if ((!y || y.toLowerCase() == d[b].piece) && ue[h] == d[b].from && ue[v] == d[b].to && (!S || S.toLowerCase() == d[b].promotion)) return d[b];
                if (R) {
                    const M = Fe(d[b].from);
                    if ((!y || y.toLowerCase() == d[b].piece) && ue[v] == d[b].to && (h == M[0] || h == M[1]) && (!S || S.toLowerCase() == d[b].promotion)) return d[b];
                }
            } else if (c === rf(this._moveToSan(d[b], d)).replace("x", "")) return d[b];
            return null;
        }
        ascii() {
            let r = `   +------------------------+
`;
            for(let f = ue.a8; f <= ue.h1; f++){
                if (Ia(f) === 0 && (r += " " + "87654321"[ln(f)] + " |"), this._board[f]) {
                    const c = this._board[f].type, d = this._board[f].color === lt ? c.toUpperCase() : c.toLowerCase();
                    r += " " + d + " ";
                } else r += " . ";
                f + 1 & 136 && (r += `|
`, f += 8);
            }
            return r += `   +------------------------+
`, r += "     a  b  c  d  e  f  g  h", r;
        }
        perft(r) {
            const f = this._moves({
                legal: !1
            });
            let c = 0;
            const o = this._turn;
            for(let d = 0, y = f.length; d < y; d++)this._makeMove(f[d]), this._isKingAttacked(o) || (r - 1 > 0 ? c += this.perft(r - 1) : c++), this._undoMove();
            return c;
        }
        turn() {
            return this._turn;
        }
        board() {
            const r = [];
            let f = [];
            for(let c = ue.a8; c <= ue.h1; c++)this._board[c] == null ? f.push(null) : f.push({
                square: Fe(c),
                type: this._board[c].type,
                color: this._board[c].color
            }), c + 1 & 136 && (r.push(f), f = [], c += 8);
            return r;
        }
        squareColor(r) {
            if (r in ue) {
                const f = ue[r];
                return (ln(f) + Ia(f)) % 2 === 0 ? "light" : "dark";
            }
            return null;
        }
        history({ verbose: r = !1 } = {}) {
            const f = [], c = [];
            for(; this._history.length > 0;)f.push(this._undoMove());
            for(;;){
                const o = f.pop();
                if (!o) break;
                r ? c.push(new Ei(this, o)) : c.push(this._moveToSan(o, this._moves())), this._makeMove(o);
            }
            return c;
        }
        _getPositionCount(r) {
            const f = cf(r);
            return this._positionCount[f] || 0;
        }
        _incPositionCount(r) {
            const f = cf(r);
            this._positionCount[f] === void 0 && (this._positionCount[f] = 0), this._positionCount[f] += 1;
        }
        _decPositionCount(r) {
            const f = cf(r);
            this._positionCount[f] === 1 ? delete this._positionCount[f] : this._positionCount[f] -= 1;
        }
        _pruneComments() {
            const r = [], f = {}, c = (o)=>{
                o in this._comments && (f[o] = this._comments[o]);
            };
            for(; this._history.length > 0;)r.push(this._undoMove());
            for(c(this.fen());;){
                const o = r.pop();
                if (!o) break;
                this._makeMove(o), c(this.fen());
            }
            this._comments = f;
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
                const f = this._comments[r];
                return delete this._comments[r], {
                    fen: r,
                    comment: f
                };
            });
        }
        setCastlingRights(r, f) {
            for (const o of [
                Le,
                zl
            ])f[o] !== void 0 && (f[o] ? this._castling[r] |= _i[o] : this._castling[r] &= ~_i[o]);
            this._updateCastlingRights();
            const c = this.getCastlingRights(r);
            return (f[Le] === void 0 || f[Le] === c[Le]) && (f[zl] === void 0 || f[zl] === c[zl]);
        }
        getCastlingRights(r) {
            return {
                [Le]: (this._castling[r] & _i[Le]) !== 0,
                [zl]: (this._castling[r] & _i[zl]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let vp, gp, $y, bp, Wy, Fy, Iy, Yh, ev, Sp, Ep, _p, tv, lv, nv, av, Rp, Tp, Ap, Op, Ef, Np, uv, iv, rv, cv, fv, ov, sv, dv, hv, pv, mv, yv, vv, gv, bv, Sv, Ev, xp, _v, Vh, Rv, Tv, Av, Ov, Nv, xv, Mv;
    vp = "MOVE_PIECE";
    gp = "RESET_GAME";
    $y = "LOAD_GAME";
    bp = "SET_GAME_OVER";
    Wy = "SET_TIMER_DURATION";
    xb = (u)=>({
            type: vp,
            payload: u
        });
    Mb = (u)=>({
            type: gp,
            payload: u
        });
    Cb = (u, r)=>({
            type: bp,
            payload: {
                isGameOver: u,
                gameResult: r
            }
        });
    Qe = {
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
        WHITE: "w"
    };
    Fy = [
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
    Iy = [
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
    Yh = {
        fen: Qe.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: Qe.TIMER_DURATION
    };
    ev = (u = Yh, r)=>{
        switch(r.type){
            case vp:
                try {
                    const f = new Sf(u.fen), c = f.move({
                        from: r.payload.from,
                        to: r.payload.to,
                        promotion: r.payload.promotionPiece
                    });
                    if (!c) return u;
                    const o = [
                        ...u.moveHistory,
                        c.san
                    ];
                    return {
                        ...u,
                        fen: f.fen(),
                        isWhiteTurn: !u.isWhiteTurn,
                        moveHistory: o,
                        lastMove: {
                            from: r.payload.from,
                            to: r.payload.to
                        }
                    };
                } catch (f) {
                    return console.warn("Invalid move:", f), u;
                }
            case gp:
                return {
                    ...Yh,
                    moveHistory: [],
                    timerDuration: r.payload
                };
            case $y:
                return {
                    ...u,
                    fen: r.payload.fen,
                    moveHistory: r.payload.moveHistory || []
                };
            case bp:
                return {
                    ...u,
                    isGameOver: r.payload.isGameOver,
                    gameResult: r.payload.gameResult
                };
            case Wy:
                return {
                    ...u,
                    timerDuration: r.payload
                };
            default:
                return u;
        }
    };
    Sp = "FLIP_BOARD";
    Ep = "SET_THEME";
    _p = "SET_SOUND";
    Db = ()=>({
            type: Sp
        });
    tv = (u)=>({
            type: Ep,
            payload: u
        });
    lv = (u)=>({
            type: _p,
            payload: u
        });
    nv = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    av = (u = nv, r)=>{
        switch(r.type){
            case Sp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case Ep:
                return {
                    ...u,
                    theme: r.payload
                };
            case _p:
                return {
                    ...u,
                    enableSound: r.payload
                };
            default:
                return u;
        }
    };
    Rp = "NEXT";
    Tp = "PREV";
    Ap = "START_POS";
    Op = "FINAL_POS";
    Ef = "LOAD_PGN";
    Np = "JUMP_TO_MOVE";
    uv = "TOGGLE_ENGINE";
    iv = "DISABLE_ENGINE";
    Bb = ()=>({
            type: Ap
        });
    wb = ()=>({
            type: Tp
        });
    Ub = ()=>({
            type: Rp
        });
    zb = ()=>({
            type: Op
        });
    qb = ({ finalPos: u, moves: r, fens: f, fromToSquares: c, termination: o, result: d, blackPlayerName: y, whitePlayerName: m })=>({
            type: Ef,
            payload: {
                finalPos: u,
                moves: r,
                fens: f,
                fromToSquares: c,
                termination: o,
                result: d,
                blackPlayerName: y,
                whitePlayerName: m
            }
        });
    Pb = (u)=>({
            type: Np,
            payload: u
        });
    rv = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    cv = (u = rv, r)=>{
        switch(r.type){
            case Rp:
                return u.currentMoveIndex === u.fenLength - 1 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex + 1
                };
            case Tp:
                return u.currentMoveIndex === 0 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex - 1
                };
            case Ap:
                return {
                    ...u,
                    currentMoveIndex: 0
                };
            case Op:
                return {
                    ...u,
                    currentMoveIndex: u.fenLength - 1
                };
            case Np:
                return {
                    ...u,
                    currentMoveIndex: r.payload
                };
            case Ef:
                return {
                    ...u,
                    finalFen: r.payload.finalPos,
                    fenLength: r.payload.fens.length,
                    currentMoveIndex: 0
                };
            case uv:
                return {
                    ...u,
                    engineEnabled: !u.engineEnabled
                };
            case iv:
                return {
                    ...u,
                    engineEnabled: !1
                };
            default:
                return u;
        }
    };
    fv = {
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
    ov = (u = fv, r)=>{
        switch(r.type){
            case Ef:
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
    sv = "TOGGLE_ENGINE";
    dv = "SET_MULTIPV";
    hv = "SET_MAX_DEPTH";
    pv = "SET_AUTO_STOP_TIME";
    mv = {
        enabled: !1,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    yv = (u = mv, r)=>{
        switch(r.type){
            case sv:
                return {
                    ...u,
                    enabled: !u.enabled
                };
            case dv:
                return {
                    ...u,
                    multiPV: r.payload
                };
            case hv:
                return {
                    ...u,
                    maxDepth: r.payload
                };
            case pv:
                return {
                    ...u,
                    autoStopTime: r.payload
                };
            default:
                return u;
        }
    };
    vv = "RESET_BOARD";
    gv = "CLEAR_BOARD";
    bv = "SET_BOARD_WITH_FEN";
    Sv = "PUT_PIECE";
    Ev = "MOVE_PIECE2";
    xp = (u)=>{
        const r = new Sf;
        return r.load(u), r.board().map((o, d)=>o.map((y, m)=>({
                    id: y ? y.square : `${"abcdefgh"[m]}${8 - d}`,
                    piece: y ? {
                        type: y.type,
                        color: y.color
                    } : null
                })));
    };
    _v = (u)=>u.split(" ")?.[1];
    Vh = {
        board: [
            ...Fy
        ],
        currentFen: Qe.START_FEN,
        selectedPalettePiece: null,
        isFlipped: !1,
        playerToMove: Qe.WHITE,
        castlingRights: {
            whiteKingSide: !0,
            whiteQueenSide: !0,
            blackKingSide: !0,
            blackQueenSide: !0
        }
    };
    Rv = {
        board: [
            ...Iy
        ],
        currentFen: Qe.CLEAR_FEN,
        selectedPalettePiece: null,
        isFlipped: !1,
        playerToMove: Qe.WHITE,
        isFlipped: !1,
        castlingRights: {
            whiteKingSide: !0,
            whiteQueenSide: !0,
            blackKingSide: !0,
            blackQueenSide: !0
        }
    };
    Tv = (u = Vh, r)=>{
        switch(r.type){
            case vv:
                return Vh;
            case gv:
                return Rv;
            case bv:
                return {
                    ...u,
                    board: [
                        ...xp(r.payload.fen)
                    ],
                    playerToMove: _v(r.payload.fen)
                };
            case Sv:
                return {
                    ...u,
                    board: Av(u.board, r.payload.id, r.payload.type)
                };
            case Ev:
                return {
                    ...u,
                    board: Ov(u.board, r.payload.sourceSquareId, r.payload.destSquareId)
                };
            default:
                return u;
        }
    };
    Av = (u, r, f)=>u.map((c)=>c.map((o)=>{
                if (o.id == r) return {
                    ...o,
                    piece: f
                };
            }));
    Ov = (u, r, f)=>{
        let c = null;
        return u.map((o)=>o.map((d)=>{
                if (d.id == r) return c = d.piece, {
                    ...d,
                    type: null
                };
                if (d.id == f) return {
                    ...d,
                    type: c ?? d.piece
                };
            }));
    };
    Nv = rp({
        game: ev,
        settings: av,
        analysis: cv,
        pgn: ov,
        engine: yv,
        boardeditor: Tv
    });
    xv = {
        key: "root",
        storage: zy,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    Mv = Ty(xv, Nv);
    Mp = cy({
        reducer: Mv,
        middleware: (u)=>u({
                serializableCheck: {
                    ignoredActions: [
                        "persist/PERSIST"
                    ]
                }
            })
    });
    Cy(Mp);
    const Cv = "modulepreload", Dv = function(u) {
        return "/chess-frontend/" + u;
    }, Xh = {}, Cp = function(r, f, c) {
        let o = Promise.resolve();
        if (f && f.length > 0) {
            document.getElementsByTagName("link");
            const y = document.querySelector("meta[property=csp-nonce]"), m = y?.nonce || y?.getAttribute("nonce");
            o = Promise.allSettled(f.map((h)=>{
                if (h = Dv(h), h in Xh) return;
                Xh[h] = !0;
                const v = h.endsWith(".css"), S = v ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${h}"]${S}`)) return;
                const R = document.createElement("link");
                if (R.rel = v ? "stylesheet" : Cv, v || (R.as = "script"), R.crossOrigin = "", R.href = h, m && R.setAttribute("nonce", m), document.head.appendChild(R), v) return new Promise((b, O)=>{
                    R.addEventListener("load", b), R.addEventListener("error", ()=>O(new Error(`Unable to preload CSS for ${h}`)));
                });
            }));
        }
        function d(y) {
            const m = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (m.payload = y, window.dispatchEvent(m), !m.defaultPrevented) throw y;
        }
        return o.then((y)=>{
            for (const m of y || [])m.status === "rejected" && d(m.reason);
            return r().catch(d);
        });
    };
    var Xa = {}, Zh;
    function Bv() {
        if (Zh) return Xa;
        Zh = 1, Object.defineProperty(Xa, "__esModule", {
            value: !0
        }), Xa.parse = y, Xa.serialize = v;
        const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, f = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, c = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, d = (()=>{
            const b = function() {};
            return b.prototype = Object.create(null), b;
        })();
        function y(b, O) {
            const M = new d, B = b.length;
            if (B < 2) return M;
            const q = O?.decode || S;
            let w = 0;
            do {
                const L = b.indexOf("=", w);
                if (L === -1) break;
                const k = b.indexOf(";", w), V = k === -1 ? B : k;
                if (L > V) {
                    w = b.lastIndexOf(";", L - 1) + 1;
                    continue;
                }
                const K = m(b, w, L), F = h(b, L, K), Z = b.slice(K, F);
                if (M[Z] === void 0) {
                    let $ = m(b, L + 1, V), te = h(b, V, $);
                    const Ne = q(b.slice($, te));
                    M[Z] = Ne;
                }
                w = V + 1;
            }while (w < B);
            return M;
        }
        function m(b, O, M) {
            do {
                const B = b.charCodeAt(O);
                if (B !== 32 && B !== 9) return O;
            }while (++O < M);
            return M;
        }
        function h(b, O, M) {
            for(; O > M;){
                const B = b.charCodeAt(--O);
                if (B !== 32 && B !== 9) return O + 1;
            }
            return M;
        }
        function v(b, O, M) {
            const B = M?.encode || encodeURIComponent;
            if (!u.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
            const q = B(O);
            if (!r.test(q)) throw new TypeError(`argument val is invalid: ${O}`);
            let w = b + "=" + q;
            if (!M) return w;
            if (M.maxAge !== void 0) {
                if (!Number.isInteger(M.maxAge)) throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);
                w += "; Max-Age=" + M.maxAge;
            }
            if (M.domain) {
                if (!f.test(M.domain)) throw new TypeError(`option domain is invalid: ${M.domain}`);
                w += "; Domain=" + M.domain;
            }
            if (M.path) {
                if (!c.test(M.path)) throw new TypeError(`option path is invalid: ${M.path}`);
                w += "; Path=" + M.path;
            }
            if (M.expires) {
                if (!R(M.expires) || !Number.isFinite(M.expires.valueOf())) throw new TypeError(`option expires is invalid: ${M.expires}`);
                w += "; Expires=" + M.expires.toUTCString();
            }
            if (M.httpOnly && (w += "; HttpOnly"), M.secure && (w += "; Secure"), M.partitioned && (w += "; Partitioned"), M.priority) switch(typeof M.priority == "string" ? M.priority.toLowerCase() : void 0){
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
                    throw new TypeError(`option priority is invalid: ${M.priority}`);
            }
            if (M.sameSite) switch(typeof M.sameSite == "string" ? M.sameSite.toLowerCase() : M.sameSite){
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
                    throw new TypeError(`option sameSite is invalid: ${M.sameSite}`);
            }
            return w;
        }
        function S(b) {
            if (b.indexOf("%") === -1) return b;
            try {
                return decodeURIComponent(b);
            } catch  {
                return b;
            }
        }
        function R(b) {
            return o.call(b) === "[object Date]";
        }
        return Xa;
    }
    Bv();
    var Jh = "popstate";
    function wv(u = {}) {
        function r(o, d) {
            let { pathname: y = "/", search: m = "", hash: h = "" } = nn(o.location.hash.substring(1));
            return !y.startsWith("/") && !y.startsWith(".") && (y = "/" + y), pf("", {
                pathname: y,
                search: m,
                hash: h
            }, d.state && d.state.usr || null, d.state && d.state.key || "default");
        }
        function f(o, d) {
            let y = o.document.querySelector("base"), m = "";
            if (y && y.getAttribute("href")) {
                let h = o.location.href, v = h.indexOf("#");
                m = v === -1 ? h : h.slice(0, v);
            }
            return m + "#" + (typeof d == "string" ? d : eu(d));
        }
        function c(o, d) {
            zt(o.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`);
        }
        return zv(r, f, c, u);
    }
    function De(u, r) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(r);
    }
    function zt(u, r) {
        if (!u) {
            typeof console < "u" && console.warn(r);
            try {
                throw new Error(r);
            } catch  {}
        }
    }
    function Uv() {
        return Math.random().toString(36).substring(2, 10);
    }
    function $h(u, r) {
        return {
            usr: u.state,
            key: u.key,
            idx: r
        };
    }
    function pf(u, r, f = null, c) {
        return {
            pathname: typeof u == "string" ? u : u.pathname,
            search: "",
            hash: "",
            ...typeof r == "string" ? nn(r) : r,
            state: f,
            key: r && r.key || c || Uv()
        };
    }
    function eu({ pathname: u = "/", search: r = "", hash: f = "" }) {
        return r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r), f && f !== "#" && (u += f.charAt(0) === "#" ? f : "#" + f), u;
    }
    function nn(u) {
        let r = {};
        if (u) {
            let f = u.indexOf("#");
            f >= 0 && (r.hash = u.substring(f), u = u.substring(0, f));
            let c = u.indexOf("?");
            c >= 0 && (r.search = u.substring(c), u = u.substring(0, c)), u && (r.pathname = u);
        }
        return r;
    }
    function zv(u, r, f, c = {}) {
        let { window: o = document.defaultView, v5Compat: d = !1 } = c, y = o.history, m = "POP", h = null, v = S();
        v == null && (v = 0, y.replaceState({
            ...y.state,
            idx: v
        }, ""));
        function S() {
            return (y.state || {
                idx: null
            }).idx;
        }
        function R() {
            m = "POP";
            let q = S(), w = q == null ? null : q - v;
            v = q, h && h({
                action: m,
                location: B.location,
                delta: w
            });
        }
        function b(q, w) {
            m = "PUSH";
            let L = pf(B.location, q, w);
            f && f(L, q), v = S() + 1;
            let k = $h(L, v), V = B.createHref(L);
            try {
                y.pushState(k, "", V);
            } catch (K) {
                if (K instanceof DOMException && K.name === "DataCloneError") throw K;
                o.location.assign(V);
            }
            d && h && h({
                action: m,
                location: B.location,
                delta: 1
            });
        }
        function O(q, w) {
            m = "REPLACE";
            let L = pf(B.location, q, w);
            f && f(L, q), v = S();
            let k = $h(L, v), V = B.createHref(L);
            y.replaceState(k, "", V), d && h && h({
                action: m,
                location: B.location,
                delta: 0
            });
        }
        function M(q) {
            let w = o.location.origin !== "null" ? o.location.origin : o.location.href, L = typeof q == "string" ? q : eu(q);
            return L = L.replace(/ $/, "%20"), De(w, `No window.location.(origin|href) available to create URL for href: ${L}`), new URL(L, w);
        }
        let B = {
            get action () {
                return m;
            },
            get location () {
                return u(o, y);
            },
            listen (q) {
                if (h) throw new Error("A history only accepts one active listener");
                return o.addEventListener(Jh, R), h = q, ()=>{
                    o.removeEventListener(Jh, R), h = null;
                };
            },
            createHref (q) {
                return r(o, q);
            },
            createURL: M,
            encodeLocation (q) {
                let w = M(q);
                return {
                    pathname: w.pathname,
                    search: w.search,
                    hash: w.hash
                };
            },
            push: b,
            replace: O,
            go (q) {
                return y.go(q);
            }
        };
        return B;
    }
    function Dp(u, r, f = "/") {
        return qv(u, r, f, !1);
    }
    function qv(u, r, f, c) {
        let o = typeof r == "string" ? nn(r) : r, d = il(o.pathname || "/", f);
        if (d == null) return null;
        let y = Bp(u);
        Pv(y);
        let m = null;
        for(let h = 0; m == null && h < y.length; ++h){
            let v = Zv(d);
            m = Vv(y[h], v, c);
        }
        return m;
    }
    function Bp(u, r = [], f = [], c = "") {
        let o = (d, y, m)=>{
            let h = {
                relativePath: m === void 0 ? d.path || "" : m,
                caseSensitive: d.caseSensitive === !0,
                childrenIndex: y,
                route: d
            };
            h.relativePath.startsWith("/") && (De(h.relativePath.startsWith(c), `Absolute route path "${h.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(c.length));
            let v = ul([
                c,
                h.relativePath
            ]), S = f.concat(h);
            d.children && d.children.length > 0 && (De(d.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`), Bp(d.children, r, S, v)), !(d.path == null && !d.index) && r.push({
                path: v,
                score: Gv(v, d.index),
                routesMeta: S
            });
        };
        return u.forEach((d, y)=>{
            if (d.path === "" || !d.path?.includes("?")) o(d, y);
            else for (let m of wp(d.path))o(d, y, m);
        }), r;
    }
    function wp(u) {
        let r = u.split("/");
        if (r.length === 0) return [];
        let [f, ...c] = r, o = f.endsWith("?"), d = f.replace(/\?$/, "");
        if (c.length === 0) return o ? [
            d,
            ""
        ] : [
            d
        ];
        let y = wp(c.join("/")), m = [];
        return m.push(...y.map((h)=>h === "" ? d : [
                d,
                h
            ].join("/"))), o && m.push(...y), m.map((h)=>u.startsWith("/") && h === "" ? "/" : h);
    }
    function Pv(u) {
        u.sort((r, f)=>r.score !== f.score ? f.score - r.score : Yv(r.routesMeta.map((c)=>c.childrenIndex), f.routesMeta.map((c)=>c.childrenIndex)));
    }
    var Hv = /^:[\w-]+$/, kv = 3, jv = 2, Lv = 1, Qv = 10, Kv = -2, Wh = (u)=>u === "*";
    function Gv(u, r) {
        let f = u.split("/"), c = f.length;
        return f.some(Wh) && (c += Kv), r && (c += jv), f.filter((o)=>!Wh(o)).reduce((o, d)=>o + (Hv.test(d) ? kv : d === "" ? Lv : Qv), c);
    }
    function Yv(u, r) {
        return u.length === r.length && u.slice(0, -1).every((c, o)=>c === r[o]) ? u[u.length - 1] - r[r.length - 1] : 0;
    }
    function Vv(u, r, f = !1) {
        let { routesMeta: c } = u, o = {}, d = "/", y = [];
        for(let m = 0; m < c.length; ++m){
            let h = c[m], v = m === c.length - 1, S = d === "/" ? r : r.slice(d.length) || "/", R = Ci({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: v
            }, S), b = h.route;
            if (!R && v && f && !c[c.length - 1].route.index && (R = Ci({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: !1
            }, S)), !R) return null;
            Object.assign(o, R.params), y.push({
                params: o,
                pathname: ul([
                    d,
                    R.pathname
                ]),
                pathnameBase: Fv(ul([
                    d,
                    R.pathnameBase
                ])),
                route: b
            }), R.pathnameBase !== "/" && (d = ul([
                d,
                R.pathnameBase
            ]));
        }
        return y;
    }
    function Ci(u, r) {
        typeof u == "string" && (u = {
            path: u,
            caseSensitive: !1,
            end: !0
        });
        let [f, c] = Xv(u.path, u.caseSensitive, u.end), o = r.match(f);
        if (!o) return null;
        let d = o[0], y = d.replace(/(.)\/+$/, "$1"), m = o.slice(1);
        return {
            params: c.reduce((v, { paramName: S, isOptional: R }, b)=>{
                if (S === "*") {
                    let M = m[b] || "";
                    y = d.slice(0, d.length - M.length).replace(/(.)\/+$/, "$1");
                }
                const O = m[b];
                return R && !O ? v[S] = void 0 : v[S] = (O || "").replace(/%2F/g, "/"), v;
            }, {}),
            pathname: d,
            pathnameBase: y,
            pattern: u
        };
    }
    function Xv(u, r = !1, f = !0) {
        zt(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`);
        let c = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (y, m, h)=>(c.push({
                paramName: m,
                isOptional: h != null
            }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return u.endsWith("*") ? (c.push({
            paramName: "*"
        }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : f ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [
            new RegExp(o, r ? void 0 : "i"),
            c
        ];
    }
    function Zv(u) {
        try {
            return u.split("/").map((r)=>decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
        } catch (r) {
            return zt(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), u;
        }
    }
    function il(u, r) {
        if (r === "/") return u;
        if (!u.toLowerCase().startsWith(r.toLowerCase())) return null;
        let f = r.endsWith("/") ? r.length - 1 : r.length, c = u.charAt(f);
        return c && c !== "/" ? null : u.slice(f) || "/";
    }
    function Jv(u, r = "/") {
        let { pathname: f, search: c = "", hash: o = "" } = typeof u == "string" ? nn(u) : u;
        return {
            pathname: f ? f.startsWith("/") ? f : $v(f, r) : r,
            search: Iv(c),
            hash: eg(o)
        };
    }
    function $v(u, r) {
        let f = r.replace(/\/+$/, "").split("/");
        return u.split("/").forEach((o)=>{
            o === ".." ? f.length > 1 && f.pop() : o !== "." && f.push(o);
        }), f.length > 1 ? f.join("/") : "/";
    }
    function ff(u, r, f, c) {
        return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function Wv(u) {
        return u.filter((r, f)=>f === 0 || r.route.path && r.route.path.length > 0);
    }
    function Up(u) {
        let r = Wv(u);
        return r.map((f, c)=>c === r.length - 1 ? f.pathname : f.pathnameBase);
    }
    function zp(u, r, f, c = !1) {
        let o;
        typeof u == "string" ? o = nn(u) : (o = {
            ...u
        }, De(!o.pathname || !o.pathname.includes("?"), ff("?", "pathname", "search", o)), De(!o.pathname || !o.pathname.includes("#"), ff("#", "pathname", "hash", o)), De(!o.search || !o.search.includes("#"), ff("#", "search", "hash", o)));
        let d = u === "" || o.pathname === "", y = d ? "/" : o.pathname, m;
        if (y == null) m = f;
        else {
            let R = r.length - 1;
            if (!c && y.startsWith("..")) {
                let b = y.split("/");
                for(; b[0] === "..";)b.shift(), R -= 1;
                o.pathname = b.join("/");
            }
            m = R >= 0 ? r[R] : "/";
        }
        let h = Jv(o, m), v = y && y !== "/" && y.endsWith("/"), S = (d || y === ".") && f.endsWith("/");
        return !h.pathname.endsWith("/") && (v || S) && (h.pathname += "/"), h;
    }
    var ul = (u)=>u.join("/").replace(/\/\/+/g, "/"), Fv = (u)=>u.replace(/\/+$/, "").replace(/^\/*/, "/"), Iv = (u)=>!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, eg = (u)=>!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
    function tg(u) {
        return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
    }
    var qp = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(qp);
    var lg = [
        "GET",
        ...qp
    ];
    new Set(lg);
    var Yn = T.createContext(null);
    Yn.displayName = "DataRouter";
    var Bi = T.createContext(null);
    Bi.displayName = "DataRouterState";
    var Pp = T.createContext({
        isTransitioning: !1
    });
    Pp.displayName = "ViewTransition";
    var ng = T.createContext(new Map);
    ng.displayName = "Fetchers";
    var ag = T.createContext(null);
    ag.displayName = "Await";
    var Qt = T.createContext(null);
    Qt.displayName = "Navigation";
    var tu = T.createContext(null);
    tu.displayName = "Location";
    var rl = T.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    rl.displayName = "Route";
    var _f = T.createContext(null);
    _f.displayName = "RouteError";
    function ug(u, { relative: r } = {}) {
        De(lu(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: f, navigator: c } = T.useContext(Qt), { hash: o, pathname: d, search: y } = nu(u, {
            relative: r
        }), m = d;
        return f !== "/" && (m = d === "/" ? f : ul([
            f,
            d
        ])), c.createHref({
            pathname: m,
            search: y,
            hash: o
        });
    }
    function lu() {
        return T.useContext(tu) != null;
    }
    function an() {
        return De(lu(), "useLocation() may be used only in the context of a <Router> component."), T.useContext(tu).location;
    }
    var Hp = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function kp(u) {
        T.useContext(Qt).static || T.useLayoutEffect(u);
    }
    function ig() {
        let { isDataRoute: u } = T.useContext(rl);
        return u ? bg() : rg();
    }
    function rg() {
        De(lu(), "useNavigate() may be used only in the context of a <Router> component.");
        let u = T.useContext(Yn), { basename: r, navigator: f } = T.useContext(Qt), { matches: c } = T.useContext(rl), { pathname: o } = an(), d = JSON.stringify(Up(c)), y = T.useRef(!1);
        return kp(()=>{
            y.current = !0;
        }), T.useCallback((h, v = {})=>{
            if (zt(y.current, Hp), !y.current) return;
            if (typeof h == "number") {
                f.go(h);
                return;
            }
            let S = zp(h, JSON.parse(d), o, v.relative === "path");
            u == null && r !== "/" && (S.pathname = S.pathname === "/" ? r : ul([
                r,
                S.pathname
            ])), (v.replace ? f.replace : f.push)(S, v.state, v);
        }, [
            r,
            f,
            d,
            o,
            u
        ]);
    }
    T.createContext(null);
    function nu(u, { relative: r } = {}) {
        let { matches: f } = T.useContext(rl), { pathname: c } = an(), o = JSON.stringify(Up(f));
        return T.useMemo(()=>zp(u, JSON.parse(o), c, r === "path"), [
            u,
            o,
            c,
            r
        ]);
    }
    function cg(u, r) {
        return jp(u, r);
    }
    function jp(u, r, f, c) {
        De(lu(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: d } = T.useContext(Qt), { matches: y } = T.useContext(rl), m = y[y.length - 1], h = m ? m.params : {}, v = m ? m.pathname : "/", S = m ? m.pathnameBase : "/", R = m && m.route;
        {
            let L = R && R.path || "";
            Lp(v, !R || L.endsWith("*") || L.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`);
        }
        let b = an(), O;
        if (r) {
            let L = typeof r == "string" ? nn(r) : r;
            De(S === "/" || L.pathname?.startsWith(S), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${L.pathname}" was given in the \`location\` prop.`), O = L;
        } else O = b;
        let M = O.pathname || "/", B = M;
        if (S !== "/") {
            let L = S.replace(/^\//, "").split("/");
            B = "/" + M.replace(/^\//, "").split("/").slice(L.length).join("/");
        }
        let q = !d && f && f.matches && f.matches.length > 0 ? f.matches : Dp(u, {
            pathname: B
        });
        zt(R || q != null, `No routes matched location "${O.pathname}${O.search}${O.hash}" `), zt(q == null || q[q.length - 1].route.element !== void 0 || q[q.length - 1].route.Component !== void 0 || q[q.length - 1].route.lazy !== void 0, `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let w = hg(q && q.map((L)=>Object.assign({}, L, {
                params: Object.assign({}, h, L.params),
                pathname: ul([
                    S,
                    o.encodeLocation ? o.encodeLocation(L.pathname).pathname : L.pathname
                ]),
                pathnameBase: L.pathnameBase === "/" ? S : ul([
                    S,
                    o.encodeLocation ? o.encodeLocation(L.pathnameBase).pathname : L.pathnameBase
                ])
            })), y, f, c);
        return r && w ? T.createElement(tu.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    ...O
                },
                navigationType: "POP"
            }
        }, w) : w;
    }
    function fg() {
        let u = gg(), r = tg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), f = u instanceof Error ? u.stack : null, c = "rgba(200,200,200, 0.5)", o = {
            padding: "0.5rem",
            backgroundColor: c
        }, d = {
            padding: "2px 4px",
            backgroundColor: c
        }, y = null;
        return console.error("Error handled by React Router default ErrorBoundary:", u), y = T.createElement(T.Fragment, null, T.createElement("p", null, "💿 Hey developer 👋"), T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", T.createElement("code", {
            style: d
        }, "ErrorBoundary"), " or", " ", T.createElement("code", {
            style: d
        }, "errorElement"), " prop on your route.")), T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), f ? T.createElement("pre", {
            style: o
        }, f) : null, y);
    }
    var og = T.createElement(fg, null), sg = class extends T.Component {
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
            return this.state.error !== void 0 ? T.createElement(rl.Provider, {
                value: this.props.routeContext
            }, T.createElement(_f.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function dg({ routeContext: u, match: r, children: f }) {
        let c = T.useContext(Yn);
        return c && c.static && c.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = r.route.id), T.createElement(rl.Provider, {
            value: u
        }, f);
    }
    function hg(u, r = [], f = null, c = null) {
        if (u == null) {
            if (!f) return null;
            if (f.errors) u = f.matches;
            else if (r.length === 0 && !f.initialized && f.matches.length > 0) u = f.matches;
            else return null;
        }
        let o = u, d = f?.errors;
        if (d != null) {
            let h = o.findIndex((v)=>v.route.id && d?.[v.route.id] !== void 0);
            De(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`), o = o.slice(0, Math.min(o.length, h + 1));
        }
        let y = !1, m = -1;
        if (f) for(let h = 0; h < o.length; h++){
            let v = o[h];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (m = h), v.route.id) {
                let { loaderData: S, errors: R } = f, b = v.route.loader && !S.hasOwnProperty(v.route.id) && (!R || R[v.route.id] === void 0);
                if (v.route.lazy || b) {
                    y = !0, m >= 0 ? o = o.slice(0, m + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((h, v, S)=>{
            let R, b = !1, O = null, M = null;
            f && (R = d && v.route.id ? d[v.route.id] : void 0, O = v.route.errorElement || og, y && (m < 0 && S === 0 ? (Lp("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), b = !0, M = null) : m === S && (b = !0, M = v.route.hydrateFallbackElement || null)));
            let B = r.concat(o.slice(0, S + 1)), q = ()=>{
                let w;
                return R ? w = O : b ? w = M : v.route.Component ? w = T.createElement(v.route.Component, null) : v.route.element ? w = v.route.element : w = h, T.createElement(dg, {
                    match: v,
                    routeContext: {
                        outlet: h,
                        matches: B,
                        isDataRoute: f != null
                    },
                    children: w
                });
            };
            return f && (v.route.ErrorBoundary || v.route.errorElement || S === 0) ? T.createElement(sg, {
                location: f.location,
                revalidation: f.revalidation,
                component: O,
                error: R,
                children: q(),
                routeContext: {
                    outlet: null,
                    matches: B,
                    isDataRoute: !0
                }
            }) : q();
        }, null);
    }
    function Rf(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function pg(u) {
        let r = T.useContext(Yn);
        return De(r, Rf(u)), r;
    }
    function mg(u) {
        let r = T.useContext(Bi);
        return De(r, Rf(u)), r;
    }
    function yg(u) {
        let r = T.useContext(rl);
        return De(r, Rf(u)), r;
    }
    function Tf(u) {
        let r = yg(u), f = r.matches[r.matches.length - 1];
        return De(f.route.id, `${u} can only be used on routes that contain a unique "id"`), f.route.id;
    }
    function vg() {
        return Tf("useRouteId");
    }
    function gg() {
        let u = T.useContext(_f), r = mg("useRouteError"), f = Tf("useRouteError");
        return u !== void 0 ? u : r.errors?.[f];
    }
    function bg() {
        let { router: u } = pg("useNavigate"), r = Tf("useNavigate"), f = T.useRef(!1);
        return kp(()=>{
            f.current = !0;
        }), T.useCallback(async (o, d = {})=>{
            zt(f.current, Hp), f.current && (typeof o == "number" ? u.navigate(o) : await u.navigate(o, {
                fromRouteId: r,
                ...d
            }));
        }, [
            u,
            r
        ]);
    }
    var Fh = {};
    function Lp(u, r, f) {
        !r && !Fh[u] && (Fh[u] = !0, zt(!1, f));
    }
    T.memo(Sg);
    function Sg({ routes: u, future: r, state: f }) {
        return jp(u, void 0, f, r);
    }
    function Wa(u) {
        De(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function Eg({ basename: u = "/", children: r = null, location: f, navigationType: c = "POP", navigator: o, static: d = !1 }) {
        De(!lu(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let y = u.replace(/^\/*/, "/"), m = T.useMemo(()=>({
                basename: y,
                navigator: o,
                static: d,
                future: {}
            }), [
            y,
            o,
            d
        ]);
        typeof f == "string" && (f = nn(f));
        let { pathname: h = "/", search: v = "", hash: S = "", state: R = null, key: b = "default" } = f, O = T.useMemo(()=>{
            let M = il(h, y);
            return M == null ? null : {
                location: {
                    pathname: M,
                    search: v,
                    hash: S,
                    state: R,
                    key: b
                },
                navigationType: c
            };
        }, [
            y,
            h,
            v,
            S,
            R,
            b,
            c
        ]);
        return zt(O != null, `<Router basename="${y}"> is not able to match the URL "${h}${v}${S}" because it does not start with the basename, so the <Router> won't render anything.`), O == null ? null : T.createElement(Qt.Provider, {
            value: m
        }, T.createElement(tu.Provider, {
            children: r,
            value: O
        }));
    }
    function _g({ children: u, location: r }) {
        return cg(mf(u), r);
    }
    function mf(u, r = []) {
        let f = [];
        return T.Children.forEach(u, (c, o)=>{
            if (!T.isValidElement(c)) return;
            let d = [
                ...r,
                o
            ];
            if (c.type === T.Fragment) {
                f.push.apply(f, mf(c.props.children, d));
                return;
            }
            De(c.type === Wa, `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), De(!c.props.index || !c.props.children, "An index route cannot have child routes.");
            let y = {
                id: c.props.id || d.join("-"),
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
            c.props.children && (y.children = mf(c.props.children, d)), f.push(y);
        }), f;
    }
    var Oi = "get", Ni = "application/x-www-form-urlencoded";
    function wi(u) {
        return u != null && typeof u.tagName == "string";
    }
    function Rg(u) {
        return wi(u) && u.tagName.toLowerCase() === "button";
    }
    function Tg(u) {
        return wi(u) && u.tagName.toLowerCase() === "form";
    }
    function Ag(u) {
        return wi(u) && u.tagName.toLowerCase() === "input";
    }
    function Og(u) {
        return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
    }
    function Ng(u, r) {
        return u.button === 0 && (!r || r === "_self") && !Og(u);
    }
    var Ri = null;
    function xg() {
        if (Ri === null) try {
            new FormData(document.createElement("form"), 0), Ri = !1;
        } catch  {
            Ri = !0;
        }
        return Ri;
    }
    var Mg = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function of(u) {
        return u != null && !Mg.has(u) ? (zt(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ni}"`), null) : u;
    }
    function Cg(u, r) {
        let f, c, o, d, y;
        if (Tg(u)) {
            let m = u.getAttribute("action");
            c = m ? il(m, r) : null, f = u.getAttribute("method") || Oi, o = of(u.getAttribute("enctype")) || Ni, d = new FormData(u);
        } else if (Rg(u) || Ag(u) && (u.type === "submit" || u.type === "image")) {
            let m = u.form;
            if (m == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let h = u.getAttribute("formaction") || m.getAttribute("action");
            if (c = h ? il(h, r) : null, f = u.getAttribute("formmethod") || m.getAttribute("method") || Oi, o = of(u.getAttribute("formenctype")) || of(m.getAttribute("enctype")) || Ni, d = new FormData(m, u), !xg()) {
                let { name: v, type: S, value: R } = u;
                if (S === "image") {
                    let b = v ? `${v}.` : "";
                    d.append(`${b}x`, "0"), d.append(`${b}y`, "0");
                } else v && d.append(v, R);
            }
        } else {
            if (wi(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            f = Oi, c = null, o = Ni, y = u;
        }
        return d && o === "text/plain" && (y = d, d = void 0), {
            action: c,
            method: f.toLowerCase(),
            encType: o,
            formData: d,
            body: y
        };
    }
    function Af(u, r) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(r);
    }
    async function Dg(u, r) {
        if (u.id in r) return r[u.id];
        try {
            let f = await import(u.module).then(async (m)=>{
                await m.__tla;
                return m;
            });
            return r[u.id] = f, f;
        } catch (f) {
            return console.error(`Error loading route module \`${u.module}\`, reloading page...`), console.error(f), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(()=>{});
        }
    }
    function Bg(u) {
        return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
    }
    async function wg(u, r, f) {
        let c = await Promise.all(u.map(async (o)=>{
            let d = r.routes[o.route.id];
            if (d) {
                let y = await Dg(d, f);
                return y.links ? y.links() : [];
            }
            return [];
        }));
        return Pg(c.flat(1).filter(Bg).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function Ih(u, r, f, c, o, d) {
        let y = (h, v)=>f[v] ? h.route.id !== f[v].route.id : !0, m = (h, v)=>f[v].pathname !== h.pathname || f[v].route.path?.endsWith("*") && f[v].params["*"] !== h.params["*"];
        return d === "assets" ? r.filter((h, v)=>y(h, v) || m(h, v)) : d === "data" ? r.filter((h, v)=>{
            let S = c.routes[h.route.id];
            if (!S || !S.hasLoader) return !1;
            if (y(h, v) || m(h, v)) return !0;
            if (h.route.shouldRevalidate) {
                let R = h.route.shouldRevalidate({
                    currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                    currentParams: f[0]?.params || {},
                    nextUrl: new URL(u, window.origin),
                    nextParams: h.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof R == "boolean") return R;
            }
            return !0;
        }) : [];
    }
    function Ug(u, r, { includeHydrateFallback: f } = {}) {
        return zg(u.map((c)=>{
            let o = r.routes[c.route.id];
            if (!o) return [];
            let d = [
                o.module
            ];
            return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), f && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
        }).flat(1));
    }
    function zg(u) {
        return [
            ...new Set(u)
        ];
    }
    function qg(u) {
        let r = {}, f = Object.keys(u).sort();
        for (let c of f)r[c] = u[c];
        return r;
    }
    function Pg(u, r) {
        let f = new Set;
        return new Set(r), u.reduce((c, o)=>{
            let d = JSON.stringify(qg(o));
            return f.has(d) || (f.add(d), c.push({
                key: d,
                link: o
            })), c;
        }, []);
    }
    function Hg(u, r) {
        let f = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
        return f.pathname === "/" ? f.pathname = "_root.data" : r && il(f.pathname, r) === "/" ? f.pathname = `${r.replace(/\/$/, "")}/_root.data` : f.pathname = `${f.pathname.replace(/\/$/, "")}.data`, f;
    }
    function Qp() {
        let u = T.useContext(Yn);
        return Af(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
    }
    function kg() {
        let u = T.useContext(Bi);
        return Af(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
    }
    var Of = T.createContext(void 0);
    Of.displayName = "FrameworkContext";
    function Kp() {
        let u = T.useContext(Of);
        return Af(u, "You must render this element inside a <HydratedRouter> element"), u;
    }
    function jg(u, r) {
        let f = T.useContext(Of), [c, o] = T.useState(!1), [d, y] = T.useState(!1), { onFocus: m, onBlur: h, onMouseEnter: v, onMouseLeave: S, onTouchStart: R } = r, b = T.useRef(null);
        T.useEffect(()=>{
            if (u === "render" && y(!0), u === "viewport") {
                let B = (w)=>{
                    w.forEach((L)=>{
                        y(L.isIntersecting);
                    });
                }, q = new IntersectionObserver(B, {
                    threshold: .5
                });
                return b.current && q.observe(b.current), ()=>{
                    q.disconnect();
                };
            }
        }, [
            u
        ]), T.useEffect(()=>{
            if (c) {
                let B = setTimeout(()=>{
                    y(!0);
                }, 100);
                return ()=>{
                    clearTimeout(B);
                };
            }
        }, [
            c
        ]);
        let O = ()=>{
            o(!0);
        }, M = ()=>{
            o(!1), y(!1);
        };
        return f ? u !== "intent" ? [
            d,
            b,
            {}
        ] : [
            d,
            b,
            {
                onFocus: Za(m, O),
                onBlur: Za(h, M),
                onMouseEnter: Za(v, O),
                onMouseLeave: Za(S, M),
                onTouchStart: Za(R, O)
            }
        ] : [
            !1,
            b,
            {}
        ];
    }
    function Za(u, r) {
        return (f)=>{
            u && u(f), f.defaultPrevented || r(f);
        };
    }
    function Lg({ page: u, ...r }) {
        let { router: f } = Qp(), c = T.useMemo(()=>Dp(f.routes, u, f.basename), [
            f.routes,
            u,
            f.basename
        ]);
        return c ? T.createElement(Kg, {
            page: u,
            matches: c,
            ...r
        }) : null;
    }
    function Qg(u) {
        let { manifest: r, routeModules: f } = Kp(), [c, o] = T.useState([]);
        return T.useEffect(()=>{
            let d = !1;
            return wg(u, r, f).then((y)=>{
                d || o(y);
            }), ()=>{
                d = !0;
            };
        }, [
            u,
            r,
            f
        ]), c;
    }
    function Kg({ page: u, matches: r, ...f }) {
        let c = an(), { manifest: o, routeModules: d } = Kp(), { basename: y } = Qp(), { loaderData: m, matches: h } = kg(), v = T.useMemo(()=>Ih(u, r, h, o, c, "data"), [
            u,
            r,
            h,
            o,
            c
        ]), S = T.useMemo(()=>Ih(u, r, h, o, c, "assets"), [
            u,
            r,
            h,
            o,
            c
        ]), R = T.useMemo(()=>{
            if (u === c.pathname + c.search + c.hash) return [];
            let M = new Set, B = !1;
            if (r.forEach((w)=>{
                let L = o.routes[w.route.id];
                !L || !L.hasLoader || (!v.some((k)=>k.route.id === w.route.id) && w.route.id in m && d[w.route.id]?.shouldRevalidate || L.hasClientLoader ? B = !0 : M.add(w.route.id));
            }), M.size === 0) return [];
            let q = Hg(u, y);
            return B && M.size > 0 && q.searchParams.set("_routes", r.filter((w)=>M.has(w.route.id)).map((w)=>w.route.id).join(",")), [
                q.pathname + q.search
            ];
        }, [
            y,
            m,
            c,
            o,
            v,
            r,
            u,
            d
        ]), b = T.useMemo(()=>Ug(S, o), [
            S,
            o
        ]), O = Qg(S);
        return T.createElement(T.Fragment, null, R.map((M)=>T.createElement("link", {
                key: M,
                rel: "prefetch",
                as: "fetch",
                href: M,
                ...f
            })), b.map((M)=>T.createElement("link", {
                key: M,
                rel: "modulepreload",
                href: M,
                ...f
            })), O.map(({ key: M, link: B })=>T.createElement("link", {
                key: M,
                ...B
            })));
    }
    function Gg(...u) {
        return (r)=>{
            u.forEach((f)=>{
                typeof f == "function" ? f(r) : f != null && (f.current = r);
            });
        };
    }
    var Gp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        Gp && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function Yg({ basename: u, children: r, window: f }) {
        let c = T.useRef();
        c.current == null && (c.current = wv({
            window: f,
            v5Compat: !0
        }));
        let o = c.current, [d, y] = T.useState({
            action: o.action,
            location: o.location
        }), m = T.useCallback((h)=>{
            T.startTransition(()=>y(h));
        }, [
            y
        ]);
        return T.useLayoutEffect(()=>o.listen(m), [
            o,
            m
        ]), T.createElement(Eg, {
            basename: u,
            children: r,
            location: d.location,
            navigationType: d.action,
            navigator: o
        });
    }
    var Yp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Fa = T.forwardRef(function({ onClick: r, discover: f = "render", prefetch: c = "none", relative: o, reloadDocument: d, replace: y, state: m, target: h, to: v, preventScrollReset: S, viewTransition: R, ...b }, O) {
        let { basename: M } = T.useContext(Qt), B = typeof v == "string" && Yp.test(v), q, w = !1;
        if (typeof v == "string" && B && (q = v, Gp)) try {
            let te = new URL(window.location.href), Ne = v.startsWith("//") ? new URL(te.protocol + v) : new URL(v), ye = il(Ne.pathname, M);
            Ne.origin === te.origin && ye != null ? v = ye + Ne.search + Ne.hash : w = !0;
        } catch  {
            zt(!1, `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let L = ug(v, {
            relative: o
        }), [k, V, K] = jg(c, b), F = Jg(v, {
            replace: y,
            state: m,
            target: h,
            preventScrollReset: S,
            relative: o,
            viewTransition: R
        });
        function Z(te) {
            r && r(te), te.defaultPrevented || F(te);
        }
        let $ = T.createElement("a", {
            ...b,
            ...K,
            href: q || L,
            onClick: w || d ? r : Z,
            ref: Gg(O, V),
            target: h,
            "data-discover": !B && f === "render" ? "true" : void 0
        });
        return k && !B ? T.createElement(T.Fragment, null, $, T.createElement(Lg, {
            page: L
        })) : $;
    });
    Fa.displayName = "Link";
    var Vg = T.forwardRef(function({ "aria-current": r = "page", caseSensitive: f = !1, className: c = "", end: o = !1, style: d, to: y, viewTransition: m, children: h, ...v }, S) {
        let R = nu(y, {
            relative: v.relative
        }), b = an(), O = T.useContext(Bi), { navigator: M, basename: B } = T.useContext(Qt), q = O != null && eb(R) && m === !0, w = M.encodeLocation ? M.encodeLocation(R).pathname : R.pathname, L = b.pathname, k = O && O.navigation && O.navigation.location ? O.navigation.location.pathname : null;
        f || (L = L.toLowerCase(), k = k ? k.toLowerCase() : null, w = w.toLowerCase()), k && B && (k = il(k, B) || k);
        const V = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
        let K = L === w || !o && L.startsWith(w) && L.charAt(V) === "/", F = k != null && (k === w || !o && k.startsWith(w) && k.charAt(w.length) === "/"), Z = {
            isActive: K,
            isPending: F,
            isTransitioning: q
        }, $ = K ? r : void 0, te;
        typeof c == "function" ? te = c(Z) : te = [
            c,
            K ? "active" : null,
            F ? "pending" : null,
            q ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let Ne = typeof d == "function" ? d(Z) : d;
        return T.createElement(Fa, {
            ...v,
            "aria-current": $,
            className: te,
            ref: S,
            style: Ne,
            to: y,
            viewTransition: m
        }, typeof h == "function" ? h(Z) : h);
    });
    Vg.displayName = "NavLink";
    var Xg = T.forwardRef(({ discover: u = "render", fetcherKey: r, navigate: f, reloadDocument: c, replace: o, state: d, method: y = Oi, action: m, onSubmit: h, relative: v, preventScrollReset: S, viewTransition: R, ...b }, O)=>{
        let M = Fg(), B = Ig(m, {
            relative: v
        }), q = y.toLowerCase() === "get" ? "get" : "post", w = typeof m == "string" && Yp.test(m), L = (k)=>{
            if (h && h(k), k.defaultPrevented) return;
            k.preventDefault();
            let V = k.nativeEvent.submitter, K = V?.getAttribute("formmethod") || y;
            M(V || k.currentTarget, {
                fetcherKey: r,
                method: K,
                navigate: f,
                replace: o,
                state: d,
                relative: v,
                preventScrollReset: S,
                viewTransition: R
            });
        };
        return T.createElement("form", {
            ref: O,
            method: q,
            action: B,
            onSubmit: c ? h : L,
            ...b,
            "data-discover": !w && u === "render" ? "true" : void 0
        });
    });
    Xg.displayName = "Form";
    function Zg(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Vp(u) {
        let r = T.useContext(Yn);
        return De(r, Zg(u)), r;
    }
    function Jg(u, { target: r, replace: f, state: c, preventScrollReset: o, relative: d, viewTransition: y } = {}) {
        let m = ig(), h = an(), v = nu(u, {
            relative: d
        });
        return T.useCallback((S)=>{
            if (Ng(S, r)) {
                S.preventDefault();
                let R = f !== void 0 ? f : eu(h) === eu(v);
                m(u, {
                    replace: R,
                    state: c,
                    preventScrollReset: o,
                    relative: d,
                    viewTransition: y
                });
            }
        }, [
            h,
            m,
            v,
            f,
            c,
            r,
            u,
            o,
            d,
            y
        ]);
    }
    var $g = 0, Wg = ()=>`__${String(++$g)}__`;
    function Fg() {
        let { router: u } = Vp("useSubmit"), { basename: r } = T.useContext(Qt), f = vg();
        return T.useCallback(async (c, o = {})=>{
            let { action: d, method: y, encType: m, formData: h, body: v } = Cg(c, r);
            if (o.navigate === !1) {
                let S = o.fetcherKey || Wg();
                await u.fetch(S, f, o.action || d, {
                    preventScrollReset: o.preventScrollReset,
                    formData: h,
                    body: v,
                    formMethod: o.method || y,
                    formEncType: o.encType || m,
                    flushSync: o.flushSync
                });
            } else await u.navigate(o.action || d, {
                preventScrollReset: o.preventScrollReset,
                formData: h,
                body: v,
                formMethod: o.method || y,
                formEncType: o.encType || m,
                replace: o.replace,
                state: o.state,
                fromRouteId: f,
                flushSync: o.flushSync,
                viewTransition: o.viewTransition
            });
        }, [
            u,
            r,
            f
        ]);
    }
    function Ig(u, { relative: r } = {}) {
        let { basename: f } = T.useContext(Qt), c = T.useContext(rl);
        De(c, "useFormAction must be used inside a RouteContext");
        let [o] = c.matches.slice(-1), d = {
            ...nu(u || ".", {
                relative: r
            })
        }, y = an();
        if (u == null) {
            d.search = y.search;
            let m = new URLSearchParams(d.search), h = m.getAll("index");
            if (h.some((S)=>S === "")) {
                m.delete("index"), h.filter((R)=>R).forEach((R)=>m.append("index", R));
                let S = m.toString();
                d.search = S ? `?${S}` : "";
            }
        }
        return (!u || u === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), f !== "/" && (d.pathname = d.pathname === "/" ? f : ul([
            f,
            d.pathname
        ])), eu(d);
    }
    function eb(u, r = {}) {
        let f = T.useContext(Pp);
        De(f != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: c } = Vp("useViewTransitionState"), o = nu(u, {
            relative: r.relative
        });
        if (!f.isTransitioning) return !1;
        let d = il(f.currentLocation.pathname, c) || f.currentLocation.pathname, y = il(f.nextLocation.pathname, c) || f.nextLocation.pathname;
        return Ci(o.pathname, y) != null || Ci(o.pathname, d) != null;
    }
    new TextEncoder;
    const tb = T.createContext(), lb = ({ children: u })=>{
        const r = (S, R)=>{
            const b = localStorage.getItem(S);
            return b !== null ? JSON.parse(b) : R;
        }, [f, c] = T.useState(()=>r(Qe.THEME_KEY, Qe.THEME)), [o, d] = T.useState(()=>r(Qe.ENABLE_SOUND_KEY, Qe.ENABLE_SOUND)), [y, m] = T.useState(()=>r(Qe.TIMER_DURATION_KEY, Qe.TIMER_DURATION)), [h, v] = T.useState(()=>r(Qe.IS_FLIPPED_KEY, Qe.IS_FLIPPED));
        return T.useEffect(()=>localStorage.setItem(Qe.THEME_KEY, JSON.stringify(f)), [
            f
        ]), T.useEffect(()=>localStorage.setItem(Qe.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), T.useEffect(()=>localStorage.setItem(Qe.TIMER_DURATION_KEY, JSON.stringify(y)), [
            y
        ]), T.useEffect(()=>localStorage.setItem(Qe.IS_FLIPPED_KEY, JSON.stringify(h)), [
            h
        ]), Q.jsx(tb.Provider, {
            value: {
                theme: f,
                setTheme: c,
                enableSound: o,
                setEnableSound: d,
                timerDuration: y,
                setTimerDuration: m,
                isFlipped: h,
                setIsFlipped: v
            },
            children: u
        });
    };
    nb = function(u, r = "lite", f = 8e3) {
        const c = T.useRef(null), o = T.useRef(null), d = T.useRef(null), y = T.useRef(null), m = T.useRef(!1), h = T.useRef([]), v = T.useRef(!0), S = T.useRef(!1), R = T.useRef(!1), b = T.useCallback(()=>{
            if (!(S.current || !c.current)) {
                for(S.current = !0; h.current.length > 0;){
                    const Z = h.current.findIndex((te)=>te.type === "stop"), $ = Z >= 0 ? h.current.splice(Z, 1)[0] : h.current.shift();
                    $ && c.current.postMessage($.cmd);
                }
                S.current = !1;
            }
        }, []), O = T.useCallback((Z, $)=>{
            h.current.push({
                type: Z,
                cmd: $
            }), b();
        }, [
            b
        ]), M = T.useCallback(()=>{
            c.current || (r === "lite" ? c.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : c.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), c.current.postMessage("uci"), console.log("Initializing worker ..."), c.current.onmessage = (Z)=>{
                const $ = Z.data;
                if (u && u($), typeof $ == "string") {
                    if ($ === "readyok" || $.startsWith("bestmove")) v.current = !0;
                    else if ($.startsWith("info") && $.includes("score")) {
                        const te = $.match(/score (cp|mate) (-?\d+)/);
                        if (te) {
                            const Ne = te[1], ye = parseInt(te[2], 10), ge = Ne === "cp" ? ye / 100 : ye > 0 ? 10 : -10;
                            o.current && (o.current(ge), o.current = null);
                        }
                    }
                }
            }, c.current.onerror = (Z)=>{
                console.error("Error with Stockfish worker:", Z);
            });
        }, [
            u,
            r
        ]), B = T.useCallback(()=>{
            c.current && c.current.terminate(), r === "lite" ? c.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : c.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), c.current.postMessage("uci"), console.log("Intialising worker ..."), c.current.onmessage = (Z)=>{
                const $ = Z.data;
                if (u && u($), typeof $ == "string") {
                    if ($ === "readyok" || $.startsWith("bestmove")) v.current = !0;
                    else if ($.startsWith("info") && $.includes("score")) {
                        const te = $.match(/score (cp|mate) (-?\d+)/);
                        if (te) {
                            const Ne = te[1], ye = parseInt(te[2], 10), ge = Ne === "cp" ? ye / 100 : ye > 0 ? 10 : -10;
                            o.current && (o.current(ge), o.current = null);
                        }
                    }
                }
            }, c.current.onerror = (Z)=>{
                console.error("Error with Stockfish worker:", Z);
            };
        }, [
            u,
            r
        ]), q = T.useCallback((Z)=>{
            c.current && O("normal", Z);
        }, []), w = T.useCallback((Z)=>{
            Z.forEach(($)=>{
                O("normal", `setoption name ${$.name} value ${$.value}`);
            });
        }, [
            q
        ]), L = T.useCallback((Z, $ = [])=>{
            let te = `position fen ${Z}`;
            if ($.length > 0) {
                const Ne = $.join(" ");
                te += ` moves ${Ne}`;
            }
            O("normal", te);
        }, [
            q
        ]), k = T.useCallback((Z)=>{
            console.log("Attempt stopSearch..", Z), c.current && (console.log("try stopSearch ...", Z), m.current && (console.log("Interrupting current search...", Z), O("stop", "stop"), m.current = !1, d.current && (clearTimeout(d.current), d.current = null)));
        }, []), V = T.useCallback((Z)=>{
            if (!R.current) {
                console.warn("Engine disabled. Search not started.");
                return;
            }
            c.current || (console.log("Starting engine on demand..."), M()), clearTimeout(d.current), k("pre startSearch"), y.current && clearTimeout(y.current), y.current = setTimeout(()=>{
                m.current = !0, O("normal", `position fen ${Z}`), O("normal", "go infinite"), d.current = setTimeout(()=>{
                    k("startSearch timer expire");
                }, f);
            }, 50);
        }, [
            f,
            k
        ]), K = T.useCallback(()=>{
            c.current && (c.current.terminate(), c.current = null), m.current = !1, v.current = !0, d.current && (clearTimeout(d.current), d.current = null);
        }, []), F = T.useCallback((Z)=>{
            Z ? console.log("Permission granted: engine allowed to start if needed") : (console.log("Permission revoked: stopping engine"), k("permission revoked"), K());
        }, [
            k,
            K
        ]);
        return T.useEffect(()=>()=>{
                K();
            }, []), {
            initEngine: B,
            setOptions: w,
            setFen: L,
            startSearch: V,
            stopSearch: k,
            terminateEngine: K,
            syncEnabledState: F
        };
    };
    let Xp, ab, rb;
    Xp = T.createContext();
    Hb = ()=>T.useContext(Xp);
    ab = ({ children: u })=>{
        const r = T.useRef(null), f = T.useCallback((d)=>{
            r.current && r.current(d);
        }, []), c = nb(f), o = T.useCallback((d)=>{
            r.current = d;
        }, []);
        return Q.jsx(Xp.Provider, {
            value: {
                ...c,
                setOnMessage: o
            },
            children: u
        });
    };
    ub = ()=>{
        const u = V1(), { theme: r, enableSound: f } = J1((v)=>v.settings), [c, o] = T.useState(!1), d = T.useRef(null), y = ()=>o((v)=>!v);
        T.useEffect(()=>{
            const v = (S)=>{
                d.current && !d.current.contains(S.target) && o(!1);
            };
            return document.addEventListener("mousedown", v), ()=>document.removeEventListener("mousedown", v);
        }, []);
        const m = (v)=>{
            u(tv(v.target.value));
        }, h = (v)=>{
            u(lv(v.target.checked));
        };
        return Q.jsxs("div", {
            className: "settings-container",
            ref: d,
            children: [
                Q.jsx("button", {
                    id: "settings-button",
                    className: "action-button",
                    onClick: y,
                    children: "⚙️ Settings"
                }),
                c && Q.jsxs("div", {
                    className: "settings-dropdown",
                    children: [
                        Q.jsxs("div", {
                            className: "dropdown-item",
                            children: [
                                Q.jsx("label", {
                                    htmlFor: "themeSelect",
                                    children: "Theme"
                                }),
                                Q.jsxs("select", {
                                    id: "themeSelect",
                                    value: r,
                                    onChange: m,
                                    children: [
                                        Q.jsx("option", {
                                            value: "default",
                                            children: "Default"
                                        }),
                                        Q.jsx("option", {
                                            value: "classic",
                                            children: "Green"
                                        }),
                                        Q.jsx("option", {
                                            value: "marble",
                                            children: "Marble"
                                        }),
                                        Q.jsx("option", {
                                            value: "wood",
                                            children: "Wood"
                                        }),
                                        Q.jsx("option", {
                                            value: "dark",
                                            children: "Dark"
                                        })
                                    ]
                                })
                            ]
                        }),
                        Q.jsxs("div", {
                            className: "checkbox-item",
                            children: [
                                Q.jsx("label", {
                                    htmlFor: "soundToggle",
                                    children: "Sound"
                                }),
                                Q.jsx("input", {
                                    type: "checkbox",
                                    id: "soundToggle",
                                    checked: f,
                                    onChange: h
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    };
    ib = ()=>{
        const [u, r] = T.useState(document.body.classList.contains("dark-theme")), f = ()=>{
            document.body.classList.toggle("dark-theme"), r(!u);
        }, c = ()=>{
            const d = new Date().getHours();
            return d < 6 || d > 18;
        };
        return T.useEffect(()=>{
            c() != u && f();
        }, []), Q.jsx("button", {
            onClick: f,
            className: "theme-toggle-btn",
            children: u ? "☀️" : "🌙"
        });
    };
    rb = ({ labelText: u, toggle: r, handleToggle: f })=>Q.jsxs("div", {
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
                            onChange: f
                        }),
                        Q.jsx("span", {
                            className: "slider"
                        })
                    ]
                })
            ]
        });
    function cb({ playerToMove: u, setPlayerToMove: r }) {
        const f = (c)=>{
            r(c);
        };
        return Q.jsxs("div", {
            className: "move-toggle",
            children: [
                Q.jsx("button", {
                    className: `move-option ${u === "w" ? "active" : ""}`,
                    onClick: ()=>f("w"),
                    children: "White"
                }),
                Q.jsx("button", {
                    className: `move-option ${u === "b" ? "active" : ""}`,
                    onClick: ()=>f("b"),
                    children: "Black"
                })
            ]
        });
    }
    const fb = ({ onSubmit: u })=>{
        const [r, f] = T.useState(!1), [c, o] = T.useState(""), d = ()=>f(!0), y = ()=>{
            f(!1), o("");
        }, m = (v)=>{
            v.target.classList.contains("fen-popup-overlay") && y();
        }, h = (v)=>{
            v.preventDefault(), u(c), y();
        };
        return Q.jsxs(Q.Fragment, {
            children: [
                Q.jsx("button", {
                    className: "action-button",
                    onClick: d,
                    children: "Set FEN"
                }),
                r && Q.jsx("div", {
                    className: "fen-popup-overlay",
                    onClick: m,
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
                                        value: c,
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
    }, ob = ({ currentFen: u, isValid: r })=>{
        const f = ()=>{
            navigator.clipboard.writeText(u), alert("FEN copied to clipboard!");
        };
        return Q.jsxs("div", {
            className: "fen-container",
            children: [
                Q.jsx("div", {
                    id: "fen-display",
                    className: "fen-display",
                    children: u
                }),
                r ? Q.jsx("div", {
                    className: "circle-tick",
                    children: "✔"
                }) : Q.jsx("div", {
                    className: "circle-cross",
                    children: "✖"
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
    }, sb = (u)=>{
        const r = u[0].charCodeAt(0) - 97, f = u[1].charCodeAt(0) - 49;
        return (r + f) % 2 === 0 ? "dark" : "light";
    }, db = ({ messages: u, isValid: r })=>Q.jsxs("div", {
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
                u.map((f)=>f.text != null && f.text !== "" && Q.jsx("div", {
                        className: `message ${f.type}`,
                        children: f.text
                    }, f.text))
            ]
        }), hb = (u)=>{
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
        const f = u.split(" ");
        if (f.length === 0) return {
            isValid: !1,
            msg: ""
        };
        const c = f[2], o = f[0].split("/");
        if (o.length == 0) return {
            isValid: !1,
            msg: ""
        };
        let d = 0, y = 0;
        const m = new Map([]);
        for(let b = 0; b < 8; b++){
            const O = o[b];
            let M = 0;
            for(let B = 0; B < O.length; B++){
                const q = Number(O[B]);
                switch(M += isNaN(q) ? 1 : q, O[B]){
                    case "k":
                        b === 0 && M === 5 && m.set("e8", O[B]), d += 1;
                        break;
                    case "K":
                        b === 7 && M === 5 && m.set("e1", O[B]), y += 1;
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
                        b === 0 && B === 0 ? m.set("a8", O[B]) : b === 0 && B === O.length - 1 && m.set("h8", O[B]);
                        break;
                    case "R":
                        b === 7 && B === 0 ? m.set("a1", O[B]) : b === 7 && B === O.length - 1 && m.set("h1", O[B]);
                        break;
                }
            }
        }
        if (d !== 1) return {
            isValid: !1,
            msg: "There should be only one black king."
        };
        if (y !== 1) return {
            isValid: !1,
            msg: "There should be only one white king."
        };
        for(let b = 0; b < c.length; b++)switch(c[b]){
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
        const h = f[1], v = pb(u);
        return new Sf(v).inCheck() ? {
            isValid: !1,
            msg: `${h === "w" ? "white" : "black"} to move but ${h === "w" ? "black" : "white"} was already in check and did not defend king`
        } : {
            isValid: !0,
            msg: ""
        };
    };
    function pb(u) {
        const r = u.split(" ");
        return r[1] = r[1] === "w" ? "b" : "w", r.join(" ");
    }
    const mb = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    }, ep = ()=>{
        const [u, r] = T.useState([]), [f, c] = T.useState(null), [o, d] = T.useState(!1), [y, m] = T.useState("w"), [h, v] = T.useState(!0), [S, R] = T.useState(!0), [b, O] = T.useState(!0), [M, B] = T.useState(!0), q = T.useRef(0), w = T.useRef(""), [L, k] = T.useState(!1), [V, K] = T.useState(""), F = [
            {
                label: "White King-Side",
                state: h,
                setState: v
            },
            {
                label: "White Queen-Side",
                state: S,
                setState: R
            },
            {
                label: "Black King-Side",
                state: b,
                setState: O
            },
            {
                label: "Black Queen-Side",
                state: M,
                setState: B
            }
        ];
        T.useEffect(()=>{
            $();
        }, []);
        const Z = ()=>{
            const ye = u.map((ge)=>ge.map((nt)=>({
                        ...nt,
                        piece: null
                    })));
            r(ye);
        }, $ = ()=>{
            m("w"), v(!0), R(!0), O(!0), B(!0), tp(Qe.START_FEN, r);
        }, te = (ye)=>{
            console.log("Received FEN:", ye), tp(ye, r);
        }, Ne = T.useCallback((ye = 0, ge = 1)=>{
            const nt = "-";
            let Dt = "";
            const He = (h ? "K" : "") + (S ? "Q" : "") + (b ? "k" : "") + (M ? "q" : "");
            if (u.length === 0) return "";
            const U = u.map((G)=>vb(G));
            return Dt += U.join("/"), Dt += ` ${y} ${He === "" ? "-" : He} ${nt} ${ye} ${ge}`, Dt;
        });
        return console.log("Board rendered", q.current), q.current += 1, T.useEffect(()=>{
            const ye = Ne(), { isValid: ge, msg: nt } = hb(ye);
            k(ge), K(nt), w.current = ye;
        }, [
            Ne,
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
                                onClick: Z,
                                className: "action-button",
                                children: "Clear"
                            }),
                            Q.jsx("button", {
                                onClick: $,
                                className: "action-button",
                                children: "Reset"
                            }),
                            Q.jsx("button", {
                                onClick: ()=>{
                                    d(!o);
                                },
                                className: "action-button",
                                children: "Flip"
                            }),
                            Q.jsx(fb, {
                                onSubmit: te
                            }),
                            Q.jsx(ub, {}),
                            Q.jsx(ib, {})
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
                                Q.jsx(ob, {
                                    currentFen: w.current,
                                    isValid: L
                                }),
                                Q.jsxs("div", {
                                    className: "chessboard-container",
                                    children: [
                                        Q.jsx(_b, {
                                            board: u,
                                            isFlipped: o,
                                            selectedPalletePiece: f,
                                            setBoard: r
                                        }),
                                        Q.jsx(Tb, {
                                            selectedPalletePiece: f,
                                            setSelectedPalletePiece: c
                                        }),
                                        Q.jsxs("div", {
                                            className: "castling",
                                            children: [
                                                Q.jsxs("div", {
                                                    className: "toggle-container",
                                                    children: [
                                                        Q.jsx("span", {
                                                            children: "To Move : "
                                                        }),
                                                        Q.jsx(cb, {
                                                            playerToMove: y,
                                                            setPlayerToMove: m
                                                        })
                                                    ]
                                                }),
                                                F.map(({ label: ye, state: ge, setState: nt })=>Q.jsx(rb, {
                                                        labelText: ye,
                                                        toggle: ge,
                                                        handleToggle: ()=>{
                                                            nt(!ge);
                                                        }
                                                    }, ye)),
                                                Q.jsx(db, {
                                                    messages: [
                                                        {
                                                            type: L ? "ok" : "error",
                                                            text: V
                                                        }
                                                    ],
                                                    isValid: L
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
    }, Zp = (u, r)=>{
        u.dataTransfer.setData("text", r);
    }, yb = (u, r)=>{
        const f = {
            p: "pawn",
            n: "knight",
            b: "bishop",
            r: "rook",
            q: "queen",
            k: "king"
        };
        return Q.jsx("img", {
            className: "pieceimg",
            id: `${r}-${u.type}`,
            src: `pieces/${u.color}_${f[u.type]}.png`,
            alt: `${u.color} ${u.type}`,
            draggable: !0,
            "data-type": u.type,
            "data-color": u.color,
            "data-square": r,
            onDragStart: (c)=>Zp(c, `${r}-${u.type}`)
        }, r);
    }, vb = (u)=>{
        let r = "", f = 0;
        for(let c = 0; c < 8; c++)u[c].piece == null && f++, u[c].piece != null ? (f > 0 && (r += `${f}`), f = 0, r += u[c].piece.color === "w" ? u[c].piece.type.toUpperCase() : u[c].piece.type) : c == 7 && f > 0 && (r += `${f}`);
        return r;
    }, tp = (u, r)=>{
        r(xp(u));
    }, gb = (u)=>{
        u.preventDefault();
    }, bb = (u, r, f, c)=>{
        if (!f) return;
        const o = u.map((d)=>d.map((y)=>y.id === r ? {
                    ...y,
                    piece: f
                } : y));
        c(o);
    }, Sb = (u, r, f, c)=>{
        u.preventDefault();
        const o = f.map((d)=>d.map((y)=>y.id === r ? {
                    ...y,
                    piece: null
                } : y));
        c(o);
    }, Eb = (u, r, f, c)=>{
        u.preventDefault();
        const o = u.dataTransfer.getData("text"), d = document.getElementById(o), y = f.map((m)=>m.map((h)=>h.id === r ? {
                    ...h,
                    piece: {
                        type: d.dataset.type,
                        color: d.dataset.color
                    }
                } : h.id === d.dataset.square ? {
                    ...h,
                    piece: null
                } : h));
        c(y);
    }, _b = np.memo(({ board: u, isFlipped: r, selectedPalletePiece: f, setBoard: c })=>{
        const o = r ? [
            ...u
        ].reverse().map((d)=>[
                ...d
            ].reverse()) : u;
        return Q.jsx("div", {
            id: "chessboard",
            children: o.map((d, y)=>d.map((m, h)=>{
                    const v = r ? y + 1 : 7 - y + 1, S = r ? "hgfedcba"[h] : "abcdefgh"[h];
                    return Q.jsxs("div", {
                        className: `square ${sb(m.id)}`,
                        onDragOver: gb,
                        onClick: ()=>bb(u, m.id, f, c),
                        onDrop: (R)=>Eb(R, m.id, u, c),
                        onContextMenu: (R)=>Sb(R, m.id, u, c),
                        children: [
                            h === 0 && Q.jsx("div", {
                                className: "rank-label",
                                children: v
                            }),
                            y === 7 && Q.jsx("div", {
                                className: "file-label",
                                children: S
                            }),
                            m.piece && yb(m.piece, m.id)
                        ]
                    }, m.id);
                }))
        });
    }), Rb = (u, r, f, c)=>{
        f != null && u == f.type && r == f.color ? c(null) : c({
            type: u,
            color: r
        });
    }, Tb = np.memo(({ selectedPalletePiece: u, setSelectedPalletePiece: r })=>{
        const f = [
            "p",
            "r",
            "n",
            "b",
            "q",
            "k"
        ];
        return Q.jsx("div", {
            className: "palette",
            children: [
                "w",
                "b"
            ].map((c)=>f.map((o)=>Q.jsx("img", {
                        id: `palette-${c}-${o}`,
                        src: `pieces/${c}_${mb[o]}.png`,
                        alt: `${c} ${o}`,
                        draggable: !0,
                        "data-type": o,
                        "data-color": c,
                        "data-square": "palette",
                        onClick: ()=>{
                            Rb(o, c, u, r);
                        },
                        onDragStart: (d)=>Zp(d, `palette-${c}-${o}`),
                        className: `palette-piece ${u?.type === o && u?.color === c ? "selected" : ""}`
                    }, `${c}-${o}`)))
        });
    }), Ab = T.lazy(()=>Cp(()=>import("./ChessGame-kHdkFMdX.js"), __vite__mapDeps([0,1,2,3]))), Ob = T.lazy(()=>Cp(()=>import("./AnalysisGame-B7vGAFQ-.js"), __vite__mapDeps([4,1,2,5]))), Nb = ()=>Q.jsx(lb, {
            children: Q.jsxs(Yg, {
                children: [
                    Q.jsxs("nav", {
                        className: "routes",
                        children: [
                            Q.jsx(Fa, {
                                to: "/boardeditor",
                                className: "action-button no-decoration",
                                children: "Board Editor"
                            }),
                            Q.jsx(Fa, {
                                to: "/analysis",
                                className: "action-button no-decoration",
                                children: "Analyse Game"
                            }),
                            Q.jsx(Fa, {
                                to: "/gameplay",
                                className: "action-button no-decoration",
                                children: "Play Game"
                            })
                        ]
                    }),
                    Q.jsx(T.Suspense, {
                        fallback: Q.jsx("div", {
                            className: "loading-screen",
                            children: "Loading..."
                        }),
                        children: Q.jsxs(_g, {
                            children: [
                                Q.jsx(Wa, {
                                    path: "/analysis",
                                    element: Q.jsx(ab, {
                                        children: Q.jsx(Ob, {})
                                    })
                                }),
                                Q.jsx(Wa, {
                                    path: "/gameplay",
                                    element: Q.jsx(Ab, {})
                                }),
                                Q.jsx(Wa, {
                                    path: "/boardeditor",
                                    element: Q.jsx(ep, {})
                                }),
                                Q.jsx(Wa, {
                                    path: "*",
                                    element: Q.jsx(ep, {})
                                }),
                                " "
                            ]
                        })
                    })
                ]
            })
        });
    O1.createRoot(document.getElementById("root")).render(Q.jsx(K1, {
        store: Mp,
        children: Q.jsx(Nb, {})
    }));
})();
export { Sf as C, ib as D, np as R, ub as S, J1 as a, Mb as b, Qe as c, Bb as d, zb as e, Db as f, Pb as g, nb as h, Hb as i, Q as j, lp as k, qb as l, xb as m, Ub as n, Mp as o, wb as p, T as r, Cb as s, V1 as u, __tla };
