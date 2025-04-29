const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChessGame-LaH3Vnol.js","assets/Settings-DxP3eX4r.js","assets/Settings-DS8xGtQf.css","assets/ChessGame-DhAK7FyC.css","assets/AnalysisGame-BimwLmGh.js","assets/AnalysisGame-Tf-ih67V.css"])))=>i.map(i=>d[i]);
let _f, ab, nn, Db, wb, ge, Hb, jb, zb, Kb, lb, Gb, K, up, Qb, Bb, Lb, Dp, kb, Pb, T, Ub, qb, Cb;
let __tla = (async ()=>{
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);
        new MutationObserver((o)=>{
            for (const s of o)if (s.type === "childList") for (const p of s.addedNodes)p.tagName === "LINK" && p.rel === "modulepreload" && f(p);
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
    up = function(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
    };
    var $c = {
        exports: {}
    }, Ga = {};
    var _h;
    function S1() {
        if (_h) return Ga;
        _h = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
        function c(f, o, s) {
            var p = null;
            if (s !== void 0 && (p = "" + s), o.key !== void 0 && (p = "" + o.key), "key" in o) {
                s = {};
                for(var y in o)y !== "key" && (s[y] = o[y]);
            } else s = o;
            return o = s.ref, {
                $$typeof: u,
                type: f,
                key: p,
                ref: o !== void 0 ? o : null,
                props: s
            };
        }
        return Ga.Fragment = r, Ga.jsx = c, Ga.jsxs = c, Ga;
    }
    var Rh;
    function E1() {
        return Rh || (Rh = 1, $c.exports = S1()), $c.exports;
    }
    let Wc, re;
    K = E1();
    Wc = {
        exports: {}
    };
    re = {};
    var Th;
    function _1() {
        if (Th) return re;
        Th = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), p = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), R = Symbol.iterator;
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
        function P(E, L, X) {
            this.props = E, this.context = L, this.refs = B, this.updater = X || O;
        }
        P.prototype.isReactComponent = {}, P.prototype.setState = function(E, L) {
            if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, E, L, "setState");
        }, P.prototype.forceUpdate = function(E) {
            this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        };
        function w() {}
        w.prototype = P.prototype;
        function j(E, L, X) {
            this.props = E, this.context = L, this.refs = B, this.updater = X || O;
        }
        var k = j.prototype = new w;
        k.constructor = j, M(k, P.prototype), k.isPureReactComponent = !0;
        var V = Array.isArray, Q = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, F = Object.prototype.hasOwnProperty;
        function Z(E, L, X, G, ee, me) {
            return X = me.ref, {
                $$typeof: u,
                type: E,
                key: L,
                ref: X !== void 0 ? X : null,
                props: me
            };
        }
        function $(E, L) {
            return Z(E.type, L, void 0, void 0, void 0, E.props);
        }
        function I(E) {
            return typeof E == "object" && E !== null && E.$$typeof === u;
        }
        function he(E) {
            var L = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + E.replace(/[=:]/g, function(X) {
                return L[X];
            });
        }
        var Ee = /\/+/g;
        function Ae(E, L) {
            return typeof E == "object" && E !== null && E.key != null ? he("" + E.key) : L.toString(36);
        }
        function ot() {}
        function Pl(E) {
            switch(E.status){
                case "fulfilled":
                    return E.value;
                case "rejected":
                    throw E.reason;
                default:
                    switch(typeof E.status == "string" ? E.then(ot, ot) : (E.status = "pending", E.then(function(L) {
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
        function Fe(E, L, X, G, ee) {
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
                        case r:
                            ie = !0;
                            break;
                        case S:
                            return ie = E._init, Fe(ie(E._payload), L, X, G, ee);
                    }
            }
            if (ie) return ee = ee(E), ie = G === "" ? "." + Ae(E, 0) : G, V(ee) ? (X = "", ie != null && (X = ie.replace(Ee, "$&/") + "/"), Fe(ee, L, X, "", function(rl) {
                return rl;
            })) : ee != null && (I(ee) && (ee = $(ee, X + (ee.key == null || E && E.key === ee.key ? "" : ("" + ee.key).replace(Ee, "$&/") + "/") + ie)), L.push(ee)), 1;
            ie = 0;
            var st = G === "" ? "." : G + ":";
            if (V(E)) for(var Me = 0; Me < E.length; Me++)G = E[Me], me = st + Ae(G, Me), ie += Fe(G, L, X, me, ee);
            else if (Me = b(E), typeof Me == "function") for(E = Me.call(E), Me = 0; !(G = E.next()).done;)G = G.value, me = st + Ae(G, Me++), ie += Fe(G, L, X, me, ee);
            else if (me === "object") {
                if (typeof E.then == "function") return Fe(Pl(E), L, X, G, ee);
                throw L = String(E), Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ie;
        }
        function z(E, L, X) {
            if (E == null) return E;
            var G = [], ee = 0;
            return Fe(E, G, "", "", function(me) {
                return L.call(X, me, ee++);
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
        var ne = typeof reportError == "function" ? reportError : function(E) {
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
        function Oe() {}
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
                if (!I(E)) throw Error("React.Children.only expected to receive a single React element child.");
                return E;
            }
        }, re.Component = P, re.Fragment = c, re.Profiler = o, re.PureComponent = j, re.StrictMode = f, re.Suspense = h, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, re.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(E) {
                return Q.H.useMemoCache(E);
            }
        }, re.cache = function(E) {
            return function() {
                return E.apply(null, arguments);
            };
        }, re.cloneElement = function(E, L, X) {
            if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
            var G = M({}, E.props), ee = E.key, me = void 0;
            if (L != null) for(ie in L.ref !== void 0 && (me = void 0), L.key !== void 0 && (ee = "" + L.key), L)!F.call(L, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && L.ref === void 0 || (G[ie] = L[ie]);
            var ie = arguments.length - 2;
            if (ie === 1) G.children = X;
            else if (1 < ie) {
                for(var st = Array(ie), Me = 0; Me < ie; Me++)st[Me] = arguments[Me + 2];
                G.children = st;
            }
            return Z(E.type, ee, void 0, void 0, me, G);
        }, re.createContext = function(E) {
            return E = {
                $$typeof: p,
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
            var G, ee = {}, me = null;
            if (L != null) for(G in L.key !== void 0 && (me = "" + L.key), L)F.call(L, G) && G !== "key" && G !== "__self" && G !== "__source" && (ee[G] = L[G]);
            var ie = arguments.length - 2;
            if (ie === 1) ee.children = X;
            else if (1 < ie) {
                for(var st = Array(ie), Me = 0; Me < ie; Me++)st[Me] = arguments[Me + 2];
                ee.children = st;
            }
            if (E && E.defaultProps) for(G in ie = E.defaultProps, ie)ee[G] === void 0 && (ee[G] = ie[G]);
            return Z(E, me, void 0, void 0, null, ee);
        }, re.createRef = function() {
            return {
                current: null
            };
        }, re.forwardRef = function(E) {
            return {
                $$typeof: y,
                render: E
            };
        }, re.isValidElement = I, re.lazy = function(E) {
            return {
                $$typeof: S,
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
            var L = Q.T, X = {};
            Q.T = X;
            try {
                var G = E(), ee = Q.S;
                ee !== null && ee(X, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(Oe, ne);
            } catch (me) {
                ne(me);
            } finally{
                Q.T = L;
            }
        }, re.unstable_useCacheRefresh = function() {
            return Q.H.useCacheRefresh();
        }, re.use = function(E) {
            return Q.H.use(E);
        }, re.useActionState = function(E, L, X) {
            return Q.H.useActionState(E, L, X);
        }, re.useCallback = function(E, L) {
            return Q.H.useCallback(E, L);
        }, re.useContext = function(E) {
            return Q.H.useContext(E);
        }, re.useDebugValue = function() {}, re.useDeferredValue = function(E, L) {
            return Q.H.useDeferredValue(E, L);
        }, re.useEffect = function(E, L, X) {
            var G = Q.H;
            if (typeof X == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return G.useEffect(E, L);
        }, re.useId = function() {
            return Q.H.useId();
        }, re.useImperativeHandle = function(E, L, X) {
            return Q.H.useImperativeHandle(E, L, X);
        }, re.useInsertionEffect = function(E, L) {
            return Q.H.useInsertionEffect(E, L);
        }, re.useLayoutEffect = function(E, L) {
            return Q.H.useLayoutEffect(E, L);
        }, re.useMemo = function(E, L) {
            return Q.H.useMemo(E, L);
        }, re.useOptimistic = function(E, L) {
            return Q.H.useOptimistic(E, L);
        }, re.useReducer = function(E, L, X) {
            return Q.H.useReducer(E, L, X);
        }, re.useRef = function(E) {
            return Q.H.useRef(E);
        }, re.useState = function(E) {
            return Q.H.useState(E);
        }, re.useSyncExternalStore = function(E, L, X) {
            return Q.H.useSyncExternalStore(E, L, X);
        }, re.useTransition = function() {
            return Q.H.useTransition();
        }, re.version = "19.1.0", re;
    }
    var Ah;
    function Bi() {
        return Ah || (Ah = 1, Wc.exports = _1()), Wc.exports;
    }
    T = Bi();
    nn = up(T);
    var Fc = {
        exports: {}
    }, Ya = {}, Ic = {
        exports: {}
    }, ef = {};
    var Oh;
    function R1() {
        return Oh || (Oh = 1, function(u) {
            function r(z, Y) {
                var ne = z.length;
                z.push(Y);
                e: for(; 0 < ne;){
                    var Oe = ne - 1 >>> 1, E = z[Oe];
                    if (0 < o(E, Y)) z[Oe] = Y, z[ne] = E, ne = Oe;
                    else break e;
                }
            }
            function c(z) {
                return z.length === 0 ? null : z[0];
            }
            function f(z) {
                if (z.length === 0) return null;
                var Y = z[0], ne = z.pop();
                if (ne !== Y) {
                    z[0] = ne;
                    e: for(var Oe = 0, E = z.length, L = E >>> 1; Oe < L;){
                        var X = 2 * (Oe + 1) - 1, G = z[X], ee = X + 1, me = z[ee];
                        if (0 > o(G, ne)) ee < E && 0 > o(me, G) ? (z[Oe] = me, z[ee] = ne, Oe = ee) : (z[Oe] = G, z[X] = ne, Oe = X);
                        else if (ee < E && 0 > o(me, ne)) z[Oe] = me, z[ee] = ne, Oe = ee;
                        else break e;
                    }
                }
                return Y;
            }
            function o(z, Y) {
                var ne = z.sortIndex - Y.sortIndex;
                return ne !== 0 ? ne : z.id - Y.id;
            }
            if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var s = performance;
                u.unstable_now = function() {
                    return s.now();
                };
            } else {
                var p = Date, y = p.now();
                u.unstable_now = function() {
                    return p.now() - y;
                };
            }
            var h = [], v = [], S = 1, R = null, b = 3, O = !1, M = !1, B = !1, P = !1, w = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
            function V(z) {
                for(var Y = c(v); Y !== null;){
                    if (Y.callback === null) f(v);
                    else if (Y.startTime <= z) f(v), Y.sortIndex = Y.expirationTime, r(h, Y);
                    else break;
                    Y = c(v);
                }
            }
            function Q(z) {
                if (B = !1, V(z), !M) if (c(h) !== null) M = !0, F || (F = !0, Ae());
                else {
                    var Y = c(v);
                    Y !== null && Fe(Q, Y.startTime - z);
                }
            }
            var F = !1, Z = -1, $ = 5, I = -1;
            function he() {
                return P ? !0 : !(u.unstable_now() - I < $);
            }
            function Ee() {
                if (P = !1, F) {
                    var z = u.unstable_now();
                    I = z;
                    var Y = !0;
                    try {
                        e: {
                            M = !1, B && (B = !1, j(Z), Z = -1), O = !0;
                            var ne = b;
                            try {
                                t: {
                                    for(V(z), R = c(h); R !== null && !(R.expirationTime > z && he());){
                                        var Oe = R.callback;
                                        if (typeof Oe == "function") {
                                            R.callback = null, b = R.priorityLevel;
                                            var E = Oe(R.expirationTime <= z);
                                            if (z = u.unstable_now(), typeof E == "function") {
                                                R.callback = E, V(z), Y = !0;
                                                break t;
                                            }
                                            R === c(h) && f(h), V(z);
                                        } else f(h);
                                        R = c(h);
                                    }
                                    if (R !== null) Y = !0;
                                    else {
                                        var L = c(v);
                                        L !== null && Fe(Q, L.startTime - z), Y = !1;
                                    }
                                }
                                break e;
                            } finally{
                                R = null, b = ne, O = !1;
                            }
                            Y = void 0;
                        }
                    } finally{
                        Y ? Ae() : F = !1;
                    }
                }
            }
            var Ae;
            if (typeof k == "function") Ae = function() {
                k(Ee);
            };
            else if (typeof MessageChannel < "u") {
                var ot = new MessageChannel, Pl = ot.port2;
                ot.port1.onmessage = Ee, Ae = function() {
                    Pl.postMessage(null);
                };
            } else Ae = function() {
                w(Ee, 0);
            };
            function Fe(z, Y) {
                Z = w(function() {
                    z(u.unstable_now());
                }, Y);
            }
            u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(z) {
                z.callback = null;
            }, u.unstable_forceFrameRate = function(z) {
                0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < z ? Math.floor(1e3 / z) : 5;
            }, u.unstable_getCurrentPriorityLevel = function() {
                return b;
            }, u.unstable_next = function(z) {
                switch(b){
                    case 1:
                    case 2:
                    case 3:
                        var Y = 3;
                        break;
                    default:
                        Y = b;
                }
                var ne = b;
                b = Y;
                try {
                    return z();
                } finally{
                    b = ne;
                }
            }, u.unstable_requestPaint = function() {
                P = !0;
            }, u.unstable_runWithPriority = function(z, Y) {
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
                var ne = b;
                b = z;
                try {
                    return Y();
                } finally{
                    b = ne;
                }
            }, u.unstable_scheduleCallback = function(z, Y, ne) {
                var Oe = u.unstable_now();
                switch(typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Oe + ne : Oe) : ne = Oe, z){
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
                    id: S++,
                    callback: Y,
                    priorityLevel: z,
                    startTime: ne,
                    expirationTime: E,
                    sortIndex: -1
                }, ne > Oe ? (z.sortIndex = ne, r(v, z), c(h) === null && z === c(v) && (B ? (j(Z), Z = -1) : B = !0, Fe(Q, ne - Oe))) : (z.sortIndex = E, r(h, z), M || O || (M = !0, F || (F = !0, Ae()))), z;
            }, u.unstable_shouldYield = he, u.unstable_wrapCallback = function(z) {
                var Y = b;
                return function() {
                    var ne = b;
                    b = Y;
                    try {
                        return z.apply(this, arguments);
                    } finally{
                        b = ne;
                    }
                };
            };
        }(ef)), ef;
    }
    var Nh;
    function T1() {
        return Nh || (Nh = 1, Ic.exports = R1()), Ic.exports;
    }
    var tf = {
        exports: {}
    }, tt = {};
    var xh;
    function A1() {
        if (xh) return tt;
        xh = 1;
        var u = Bi();
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
            var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: R == null ? null : "" + R,
                children: h,
                containerInfo: v,
                implementation: S
            };
        }
        var p = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function y(h, v) {
            if (h === "font") return "";
            if (typeof v == "string") return v === "use-credentials" ? v : "";
        }
        return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, tt.createPortal = function(h, v) {
            var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(r(299));
            return s(h, v, null, S);
        }, tt.flushSync = function(h) {
            var v = p.T, S = f.p;
            try {
                if (p.T = null, f.p = 2, h) return h();
            } finally{
                p.T = v, f.p = S, f.d.f();
            }
        }, tt.preconnect = function(h, v) {
            typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, f.d.C(h, v));
        }, tt.prefetchDNS = function(h) {
            typeof h == "string" && f.d.D(h);
        }, tt.preinit = function(h, v) {
            if (typeof h == "string" && v && typeof v.as == "string") {
                var S = v.as, R = y(S, v.crossOrigin), b = typeof v.integrity == "string" ? v.integrity : void 0, O = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
                S === "style" ? f.d.S(h, typeof v.precedence == "string" ? v.precedence : void 0, {
                    crossOrigin: R,
                    integrity: b,
                    fetchPriority: O
                }) : S === "script" && f.d.X(h, {
                    crossOrigin: R,
                    integrity: b,
                    fetchPriority: O,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0
                });
            }
        }, tt.preinitModule = function(h, v) {
            if (typeof h == "string") if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var S = y(v.as, v.crossOrigin);
                    f.d.M(h, {
                        crossOrigin: S,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    });
                }
            } else v == null && f.d.M(h);
        }, tt.preload = function(h, v) {
            if (typeof h == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
                var S = v.as, R = y(S, v.crossOrigin);
                f.d.L(h, S, {
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
                var S = y(v.as, v.crossOrigin);
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
            return p.H.useFormState(h, v, S);
        }, tt.useFormStatus = function() {
            return p.H.useHostTransitionStatus();
        }, tt.version = "19.1.0", tt;
    }
    var Mh;
    function O1() {
        if (Mh) return tf.exports;
        Mh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), tf.exports = A1(), tf.exports;
    }
    var Ch;
    function N1() {
        if (Ch) return Ya;
        Ch = 1;
        var u = T1(), r = Bi(), c = O1();
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
        function p(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function y(e) {
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
                        if (i === l) return y(a), e;
                        if (i === n) return y(a), t;
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
        var S = Object.assign, R = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), j = Symbol.for("react.consumer"), k = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), he = Symbol.for("react.memo_cache_sentinel"), Ee = Symbol.iterator;
        function Ae(e) {
            return e === null || typeof e != "object" ? null : (e = Ee && e[Ee] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var ot = Symbol.for("react.client.reference");
        function Pl(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === ot ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case M:
                    return "Fragment";
                case P:
                    return "Profiler";
                case B:
                    return "StrictMode";
                case Q:
                    return "Suspense";
                case F:
                    return "SuspenseList";
                case I:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case O:
                    return "Portal";
                case k:
                    return (e.displayName || "Context") + ".Provider";
                case j:
                    return (e._context.displayName || "Context") + ".Consumer";
                case V:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case Z:
                    return t = e.displayName || null, t !== null ? t : Pl(e.type) || "Memo";
                case $:
                    t = e._payload, e = e._init;
                    try {
                        return Pl(e(t));
                    } catch  {}
            }
            return null;
        }
        var Fe = Array.isArray, z = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Oe = [], E = -1;
        function L(e) {
            return {
                current: e
            };
        }
        function X(e) {
            0 > E || (e.current = Oe[E], Oe[E] = null, E--);
        }
        function G(e, t) {
            E++, Oe[E] = e.current, e.current = t;
        }
        var ee = L(null), me = L(null), ie = L(null), st = L(null);
        function Me(e, t) {
            switch(G(ie, t), G(me, e), G(ee, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? $d(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = $d(t), e = Wd(t, e);
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
            X(ee), G(ee, e);
        }
        function rl() {
            X(ee), X(me), X(ie);
        }
        function zi(e) {
            e.memoizedState !== null && G(st, e);
            var t = ee.current, l = Wd(t, e.type);
            t !== l && (G(me, e), G(ee, l));
        }
        function uu(e) {
            me.current === e && (X(ee), X(me)), st.current === e && (X(st), ka._currentValue = ne);
        }
        var Pi = Object.prototype.hasOwnProperty, qi = u.unstable_scheduleCallback, Hi = u.unstable_cancelCallback, Fp = u.unstable_shouldYield, Ip = u.unstable_requestPaint, zt = u.unstable_now, em = u.unstable_getCurrentPriorityLevel, Mf = u.unstable_ImmediatePriority, Cf = u.unstable_UserBlockingPriority, iu = u.unstable_NormalPriority, tm = u.unstable_LowPriority, Df = u.unstable_IdlePriority, lm = u.log, nm = u.unstable_setDisableYieldValue, Xn = null, dt = null;
        function cl(e) {
            if (typeof lm == "function" && nm(e), dt && typeof dt.setStrictMode == "function") try {
                dt.setStrictMode(Xn, e);
            } catch  {}
        }
        var ht = Math.clz32 ? Math.clz32 : im, am = Math.log, um = Math.LN2;
        function im(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (am(e) / um | 0) | 0;
        }
        var ru = 256, cu = 4194304;
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
            var a = 0, i = e.suspendedLanes, d = e.pingedLanes;
            e = e.warmLanes;
            var m = n & 134217727;
            return m !== 0 ? (n = m & ~i, n !== 0 ? a = ql(n) : (d &= m, d !== 0 ? a = ql(d) : l || (l = m & ~e, l !== 0 && (a = ql(l))))) : (m = n & ~i, m !== 0 ? a = ql(m) : d !== 0 ? a = ql(d) : l || (l = n & ~e, l !== 0 && (a = ql(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
        }
        function Zn(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function rm(e, t) {
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
        function Bf() {
            var e = ru;
            return ru <<= 1, (ru & 4194048) === 0 && (ru = 256), e;
        }
        function wf() {
            var e = cu;
            return cu <<= 1, (cu & 62914560) === 0 && (cu = 4194304), e;
        }
        function ki(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Jn(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function cm(e, t, l, n, a, i) {
            var d = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var m = e.entanglements, g = e.expirationTimes, x = e.hiddenUpdates;
            for(l = d & ~l; 0 < l;){
                var U = 31 - ht(l), H = 1 << U;
                m[U] = 0, g[U] = -1;
                var C = x[U];
                if (C !== null) for(x[U] = null, U = 0; U < C.length; U++){
                    var D = C[U];
                    D !== null && (D.lane &= -536870913);
                }
                l &= ~H;
            }
            n !== 0 && Uf(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(d & ~t));
        }
        function Uf(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var n = 31 - ht(t);
            e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
        }
        function zf(e, t) {
            var l = e.entangledLanes |= t;
            for(e = e.entanglements; l;){
                var n = 31 - ht(l), a = 1 << n;
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
        function Pf() {
            var e = Y.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : yh(e.type));
        }
        function fm(e, t) {
            var l = Y.p;
            try {
                return Y.p = e, t();
            } finally{
                Y.p = l;
            }
        }
        var fl = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + fl, at = "__reactProps$" + fl, rn = "__reactContainer$" + fl, Qi = "__reactEvents$" + fl, om = "__reactListeners$" + fl, sm = "__reactHandles$" + fl, qf = "__reactResources$" + fl, $n = "__reactMarker$" + fl;
        function Ki(e) {
            delete e[Ie], delete e[at], delete e[Qi], delete e[om], delete e[sm];
        }
        function cn(e) {
            var t = e[Ie];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[rn] || l[Ie]) {
                    if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = th(e); e !== null;){
                        if (l = e[Ie]) return l;
                        e = th(e);
                    }
                    return t;
                }
                e = l, l = e.parentNode;
            }
            return null;
        }
        function fn(e) {
            if (e = e[Ie] || e[rn]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function Wn(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(f(33));
        }
        function on(e) {
            var t = e[qf];
            return t || (t = e[qf] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Qe(e) {
            e[$n] = !0;
        }
        var Hf = new Set, kf = {};
        function Hl(e, t) {
            sn(e, t), sn(e + "Capture", t);
        }
        function sn(e, t) {
            for(kf[e] = t, e = 0; e < t.length; e++)Hf.add(t[e]);
        }
        var dm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Lf = {}, jf = {};
        function hm(e) {
            return Pi.call(jf, e) ? !0 : Pi.call(Lf, e) ? !1 : dm.test(e) ? jf[e] = !0 : (Lf[e] = !0, !1);
        }
        function ou(e, t, l) {
            if (hm(t)) if (l === null) e.removeAttribute(t);
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
        function su(e, t, l) {
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
        function Qt(e, t, l, n) {
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
        var Gi, Qf;
        function dn(e) {
            if (Gi === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Gi = t && t[1] || "", Qf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Gi + e + Qf;
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
`), x = m.split(`
`);
                    for(a = n = 0; n < g.length && !g[n].includes("DetermineComponentFrameRoot");)n++;
                    for(; a < x.length && !x[a].includes("DetermineComponentFrameRoot");)a++;
                    if (n === g.length || a === x.length) for(n = g.length - 1, a = x.length - 1; 1 <= n && 0 <= a && g[n] !== x[a];)a--;
                    for(; 1 <= n && 0 <= a; n--, a--)if (g[n] !== x[a]) {
                        if (n !== 1 || a !== 1) do if (n--, a--, 0 > a || g[n] !== x[a]) {
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
            return (l = e ? e.displayName || e.name : "") ? dn(l) : "";
        }
        function pm(e) {
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
                    return Vi(e.type, !1);
                case 11:
                    return Vi(e.type.render, !1);
                case 1:
                    return Vi(e.type, !0);
                case 31:
                    return dn("Activity");
                default:
                    return "";
            }
        }
        function Kf(e) {
            try {
                var t = "";
                do t += pm(e), e = e.return;
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
        function Gf(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function mm(e) {
            var t = Gf(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), n = "" + e[t];
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
        function du(e) {
            e._valueTracker || (e._valueTracker = mm(e));
        }
        function Yf(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), n = "";
            return e && (n = Gf(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
        }
        function hu(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var ym = /[\n"\\]/g;
        function _t(e) {
            return e.replace(ym, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Xi(e, t, l, n, a, i, d, m) {
            e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Et(t)) : e.value !== "" + Et(t) && (e.value = "" + Et(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Zi(e, d, Et(t)) : l != null ? Zi(e, d, Et(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + Et(m) : e.removeAttribute("name");
        }
        function Vf(e, t, l, n, a, i, d, m) {
            if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
                if (!(i !== "submit" && i !== "reset" || t != null)) return;
                l = l != null ? "" + Et(l) : "", t = t != null ? "" + Et(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
            }
            n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = m ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d);
        }
        function Zi(e, t, l) {
            t === "number" && hu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
        }
        function hn(e, t, l, n) {
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
        function Xf(e, t, l) {
            if (t != null && (t = "" + Et(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + Et(l) : "";
        }
        function Zf(e, t, l, n) {
            if (t == null) {
                if (n != null) {
                    if (l != null) throw Error(f(92));
                    if (Fe(n)) {
                        if (1 < n.length) throw Error(f(93));
                        n = n[0];
                    }
                    l = n;
                }
                l == null && (l = ""), t = l;
            }
            l = Et(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n);
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
        var vm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Jf(e, t, l) {
            var n = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || vm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function $f(e, t, l) {
            if (t != null && typeof t != "object") throw Error(f(62));
            if (e = e.style, l != null) {
                for(var n in l)!l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
                for(var a in t)n = t[a], t.hasOwnProperty(a) && l[a] !== n && Jf(e, a, n);
            } else for(var i in t)t.hasOwnProperty(i) && Jf(e, i, t[i]);
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
        var gm = new Map([
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
        ]), bm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function pu(e) {
            return bm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var $i = null;
        function Wi(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var mn = null, yn = null;
        function Wf(e) {
            var t = fn(e);
            if (t && (e = t.stateNode)) {
                var l = e[at] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (Xi(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + _t("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var n = l[t];
                                if (n !== e && n.form === e.form) {
                                    var a = n[at] || null;
                                    if (!a) throw Error(f(90));
                                    Xi(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)n = l[t], n.form === e.form && Yf(n);
                        }
                        break e;
                    case "textarea":
                        Xf(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && hn(e, !!l.multiple, t, !1);
                }
            }
        }
        var Fi = !1;
        function Ff(e, t, l) {
            if (Fi) return e(t, l);
            Fi = !0;
            try {
                var n = e(t);
                return n;
            } finally{
                if (Fi = !1, (mn !== null || yn !== null) && (Iu(), mn && (t = mn, e = yn, yn = mn = null, Wf(t), e))) for(t = 0; t < e.length; t++)Wf(e[t]);
            }
        }
        function Fn(e, t) {
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
        var Kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ii = !1;
        if (Kt) try {
            var In = {};
            Object.defineProperty(In, "passive", {
                get: function() {
                    Ii = !0;
                }
            }), window.addEventListener("test", In, In), window.removeEventListener("test", In, In);
        } catch  {
            Ii = !1;
        }
        var ol = null, er = null, mu = null;
        function If() {
            if (mu) return mu;
            var e, t = er, l = t.length, n, a = "value" in ol ? ol.value : ol.textContent, i = a.length;
            for(e = 0; e < l && t[e] === a[e]; e++);
            var d = l - e;
            for(n = 1; n <= d && t[l - n] === a[i - n]; n++);
            return mu = a.slice(e, 1 < n ? 1 - n : void 0);
        }
        function yu(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function vu() {
            return !0;
        }
        function eo() {
            return !1;
        }
        function ut(e) {
            function t(l, n, a, i, d) {
                this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = d, this.currentTarget = null;
                for(var m in e)e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(i) : i[m]);
                return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vu : eo, this.isPropagationStopped = eo, this;
            }
            return S(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = vu);
                },
                stopPropagation: function() {
                    var l = this.nativeEvent;
                    l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = vu);
                },
                persist: function() {},
                isPersistent: vu
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
        }, gu = ut(kl), ea = S({}, kl, {
            view: 0,
            detail: 0
        }), Sm = ut(ea), tr, lr, ta, bu = S({}, ea, {
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
                return "movementX" in e ? e.movementX : (e !== ta && (ta && e.type === "mousemove" ? (tr = e.screenX - ta.screenX, lr = e.screenY - ta.screenY) : lr = tr = 0, ta = e), tr);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : lr;
            }
        }), to = ut(bu), Em = S({}, bu, {
            dataTransfer: 0
        }), _m = ut(Em), Rm = S({}, ea, {
            relatedTarget: 0
        }), nr = ut(Rm), Tm = S({}, kl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Am = ut(Tm), Om = S({}, kl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Nm = ut(Om), xm = S({}, kl, {
            data: 0
        }), lo = ut(xm), Mm = {
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
        }, Cm = {
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
        }, Dm = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function Bm(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Dm[e]) ? !!t[e] : !1;
        }
        function ar() {
            return Bm;
        }
        var wm = S({}, ea, {
            key: function(e) {
                if (e.key) {
                    var t = Mm[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = yu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Cm[e.keyCode] || "Unidentified" : "";
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
                return e.type === "keypress" ? yu(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? yu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), Um = ut(wm), zm = S({}, bu, {
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
        }), no = ut(zm), Pm = S({}, ea, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ar
        }), qm = ut(Pm), Hm = S({}, kl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), km = ut(Hm), Lm = S({}, bu, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), jm = ut(Lm), Qm = S({}, kl, {
            newState: 0,
            oldState: 0
        }), Km = ut(Qm), Gm = [
            9,
            13,
            27,
            32
        ], ur = Kt && "CompositionEvent" in window, la = null;
        Kt && "documentMode" in document && (la = document.documentMode);
        var Ym = Kt && "TextEvent" in window && !la, ao = Kt && (!ur || la && 8 < la && 11 >= la), uo = " ", io = !1;
        function ro(e, t) {
            switch(e){
                case "keyup":
                    return Gm.indexOf(t.keyCode) !== -1;
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
        function co(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var vn = !1;
        function Vm(e, t) {
            switch(e){
                case "compositionend":
                    return co(t);
                case "keypress":
                    return t.which !== 32 ? null : (io = !0, uo);
                case "textInput":
                    return e = t.data, e === uo && io ? null : e;
                default:
                    return null;
            }
        }
        function Xm(e, t) {
            if (vn) return e === "compositionend" || !ur && ro(e, t) ? (e = If(), mu = er = ol = null, vn = !1, e) : null;
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
                    return ao && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var Zm = {
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
            return t === "input" ? !!Zm[e.type] : t === "textarea";
        }
        function oo(e, t, l, n) {
            mn ? yn ? yn.push(n) : yn = [
                n
            ] : mn = n, t = ui(t, "onChange"), 0 < t.length && (l = new gu("onChange", "change", null, l, n), e.push({
                event: l,
                listeners: t
            }));
        }
        var na = null, aa = null;
        function Jm(e) {
            Yd(e, 0);
        }
        function Su(e) {
            var t = Wn(e);
            if (Yf(t)) return e;
        }
        function so(e, t) {
            if (e === "change") return t;
        }
        var ho = !1;
        if (Kt) {
            var ir;
            if (Kt) {
                var rr = "oninput" in document;
                if (!rr) {
                    var po = document.createElement("div");
                    po.setAttribute("oninput", "return;"), rr = typeof po.oninput == "function";
                }
                ir = rr;
            } else ir = !1;
            ho = ir && (!document.documentMode || 9 < document.documentMode);
        }
        function mo() {
            na && (na.detachEvent("onpropertychange", yo), aa = na = null);
        }
        function yo(e) {
            if (e.propertyName === "value" && Su(aa)) {
                var t = [];
                oo(t, aa, e, Wi(e)), Ff(Jm, t);
            }
        }
        function $m(e, t, l) {
            e === "focusin" ? (mo(), na = t, aa = l, na.attachEvent("onpropertychange", yo)) : e === "focusout" && mo();
        }
        function Wm(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return Su(aa);
        }
        function Fm(e, t) {
            if (e === "click") return Su(t);
        }
        function Im(e, t) {
            if (e === "input" || e === "change") return Su(t);
        }
        function e0(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var pt = typeof Object.is == "function" ? Object.is : e0;
        function ua(e, t) {
            if (pt(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), n = Object.keys(t);
            if (l.length !== n.length) return !1;
            for(n = 0; n < l.length; n++){
                var a = l[n];
                if (!Pi.call(t, a) || !pt(e[a], t[a])) return !1;
            }
            return !0;
        }
        function vo(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function go(e, t) {
            var l = vo(e);
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
                l = vo(l);
            }
        }
        function bo(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function So(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = hu(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var l = typeof t.contentWindow.location.href == "string";
                } catch  {
                    l = !1;
                }
                if (l) e = t.contentWindow;
                else break;
                t = hu(e.document);
            }
            return t;
        }
        function cr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var t0 = Kt && "documentMode" in document && 11 >= document.documentMode, gn = null, fr = null, ia = null, or = !1;
        function Eo(e, t, l) {
            var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            or || gn == null || gn !== hu(n) || (n = gn, "selectionStart" in n && cr(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), ia && ua(ia, n) || (ia = n, n = ui(fr, "onSelect"), 0 < n.length && (t = new gu("onSelect", "select", null, t, l), e.push({
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
        }, sr = {}, _o = {};
        Kt && (_o = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
        function jl(e) {
            if (sr[e]) return sr[e];
            if (!bn[e]) return e;
            var t = bn[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in _o) return sr[e] = t[l];
            return e;
        }
        var Ro = jl("animationend"), To = jl("animationiteration"), Ao = jl("animationstart"), l0 = jl("transitionrun"), n0 = jl("transitionstart"), a0 = jl("transitioncancel"), Oo = jl("transitionend"), No = new Map, dr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        dr.push("scrollEnd");
        function Dt(e, t) {
            No.set(e, t), Hl(t, [
                e
            ]);
        }
        var xo = new WeakMap;
        function Rt(e, t) {
            if (typeof e == "object" && e !== null) {
                var l = xo.get(e);
                return l !== void 0 ? l : (t = {
                    value: e,
                    source: t,
                    stack: Kf(t)
                }, xo.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Kf(t)
            };
        }
        var Tt = [], Sn = 0, hr = 0;
        function Eu() {
            for(var e = Sn, t = hr = Sn = 0; t < e;){
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
                i !== 0 && Mo(l, a, i);
            }
        }
        function _u(e, t, l, n) {
            Tt[Sn++] = e, Tt[Sn++] = t, Tt[Sn++] = l, Tt[Sn++] = n, hr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
        }
        function pr(e, t, l, n) {
            return _u(e, t, l, n), Ru(e);
        }
        function En(e, t) {
            return _u(e, null, null, t), Ru(e);
        }
        function Mo(e, t, l) {
            e.lanes |= l;
            var n = e.alternate;
            n !== null && (n.lanes |= l);
            for(var a = !1, i = e.return; i !== null;)i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
            return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - ht(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [
                t
            ] : n.push(t), t.lane = l | 536870912), i) : null;
        }
        function Ru(e) {
            if (50 < Da) throw Da = 0, Sc = null, Error(f(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var _n = {};
        function u0(e, t, l, n) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function mt(e, t, l, n) {
            return new u0(e, t, l, n);
        }
        function mr(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Gt(e, t) {
            var l = e.alternate;
            return l === null ? (l = mt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
        }
        function Co(e, t) {
            e.flags &= 65011714;
            var l = e.alternate;
            return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function Tu(e, t, l, n, a, i) {
            var d = 0;
            if (n = e, typeof e == "function") mr(e) && (d = 1);
            else if (typeof e == "string") d = r1(e, l, ee.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case I:
                    return e = mt(31, l, t, a), e.elementType = I, e.lanes = i, e;
                case M:
                    return Ql(l.children, a, i, t);
                case B:
                    d = 8, a |= 24;
                    break;
                case P:
                    return e = mt(12, l, t, a | 2), e.elementType = P, e.lanes = i, e;
                case Q:
                    return e = mt(13, l, t, a), e.elementType = Q, e.lanes = i, e;
                case F:
                    return e = mt(19, l, t, a), e.elementType = F, e.lanes = i, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case w:
                        case k:
                            d = 10;
                            break e;
                        case j:
                            d = 9;
                            break e;
                        case V:
                            d = 11;
                            break e;
                        case Z:
                            d = 14;
                            break e;
                        case $:
                            d = 16, n = null;
                            break e;
                    }
                    d = 29, l = Error(f(130, e === null ? "null" : typeof e, "")), n = null;
            }
            return t = mt(d, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
        }
        function Ql(e, t, l, n) {
            return e = mt(7, e, n, t), e.lanes = l, e;
        }
        function yr(e, t, l) {
            return e = mt(6, e, null, t), e.lanes = l, e;
        }
        function vr(e, t, l) {
            return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var Rn = [], Tn = 0, Au = null, Ou = 0, At = [], Ot = 0, Kl = null, Yt = 1, Vt = "";
        function Gl(e, t) {
            Rn[Tn++] = Ou, Rn[Tn++] = Au, Au = e, Ou = t;
        }
        function Do(e, t, l) {
            At[Ot++] = Yt, At[Ot++] = Vt, At[Ot++] = Kl, Kl = e;
            var n = Yt;
            e = Vt;
            var a = 32 - ht(n) - 1;
            n &= ~(1 << a), l += 1;
            var i = 32 - ht(t) + a;
            if (30 < i) {
                var d = a - a % 5;
                i = (n & (1 << d) - 1).toString(32), n >>= d, a -= d, Yt = 1 << 32 - ht(t) + a | l << a | n, Vt = i + e;
            } else Yt = 1 << i | l << a | n, Vt = e;
        }
        function gr(e) {
            e.return !== null && (Gl(e, 1), Do(e, 1, 0));
        }
        function br(e) {
            for(; e === Au;)Au = Rn[--Tn], Rn[Tn] = null, Ou = Rn[--Tn], Rn[Tn] = null;
            for(; e === Kl;)Kl = At[--Ot], At[Ot] = null, Vt = At[--Ot], At[Ot] = null, Yt = At[--Ot], At[Ot] = null;
        }
        var nt = null, we = null, ve = !1, Yl = null, Pt = !1, Sr = Error(f(519));
        function Vl(e) {
            var t = Error(f(418, ""));
            throw fa(Rt(t, e)), Sr;
        }
        function Bo(e) {
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
                    for(l = 0; l < wa.length; l++)de(wa[l], t);
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
                    de("invalid", t), Vf(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), du(t);
                    break;
                case "select":
                    de("invalid", t);
                    break;
                case "textarea":
                    de("invalid", t), Zf(t, n.value, n.defaultValue, n.children), du(t);
            }
            l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Jd(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = ii), t = !0) : t = !1, t || Vl(e);
        }
        function wo(e) {
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
        function ra(e) {
            if (e !== nt) return !1;
            if (!ve) return wo(e), ve = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Pc(e.type, e.memoizedProps)), l = !l), l && we && Vl(e), wo(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (l = e.data, l === "/$") {
                            if (t === 0) {
                                we = wt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else l !== "$" && l !== "$!" && l !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    we = null;
                }
            } else t === 27 ? (t = we, Ol(e.type) ? (e = Lc, Lc = null, we = e) : we = t) : we = nt ? wt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function ca() {
            we = nt = null, ve = !1;
        }
        function Uo() {
            var e = Yl;
            return e !== null && (ct === null ? ct = e : ct.push.apply(ct, e), Yl = null), e;
        }
        function fa(e) {
            Yl === null ? Yl = [
                e
            ] : Yl.push(e);
        }
        var Er = L(null), Xl = null, Xt = null;
        function sl(e, t, l) {
            G(Er, t._currentValue), t._currentValue = l;
        }
        function Zt(e) {
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
        function oa(e, t, l, n) {
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
                        pt(a.pendingProps.value, d.value) || (e !== null ? e.push(m) : e = [
                            m
                        ]);
                    }
                } else if (a === st.current) {
                    if (d = a.alternate, d === null) throw Error(f(387));
                    d.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(ka) : e = [
                        ka
                    ]);
                }
                a = a.return;
            }
            e !== null && Rr(t, e, l, n), t.flags |= 262144;
        }
        function Nu(e) {
            for(e = e.firstContext; e !== null;){
                if (!pt(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function Zl(e) {
            Xl = e, Xt = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function et(e) {
            return zo(Xl, e);
        }
        function xu(e, t) {
            return Xl === null && Zl(e), zo(e, t);
        }
        function zo(e, t) {
            var l = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, Xt === null) {
                if (e === null) throw Error(f(308));
                Xt = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else Xt = Xt.next = t;
            return l;
        }
        var i0 = typeof AbortController < "u" ? AbortController : function() {
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
        }, r0 = u.unstable_scheduleCallback, c0 = u.unstable_NormalPriority, ke = {
            $$typeof: k,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Tr() {
            return {
                controller: new i0,
                data: new Map,
                refCount: 0
            };
        }
        function sa(e) {
            e.refCount--, e.refCount === 0 && r0(c0, function() {
                e.controller.abort();
            });
        }
        var da = null, Ar = 0, An = 0, On = null;
        function f0(e, t) {
            if (da === null) {
                var l = da = [];
                Ar = 0, An = Nc(), On = {
                    status: "pending",
                    value: void 0,
                    then: function(n) {
                        l.push(n);
                    }
                };
            }
            return Ar++, t.then(Po, Po), t;
        }
        function Po() {
            if (--Ar === 0 && da !== null) {
                On !== null && (On.status = "fulfilled");
                var e = da;
                da = null, An = 0, On = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function o0(e, t) {
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
        var qo = z.S;
        z.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && f0(e, t), qo !== null && qo(e, t);
        };
        var Jl = L(null);
        function Or() {
            var e = Jl.current;
            return e !== null ? e : xe.pooledCache;
        }
        function Mu(e, t) {
            t === null ? G(Jl, Jl.current) : G(Jl, t.pool);
        }
        function Ho() {
            var e = Or();
            return e === null ? null : {
                parent: ke._currentValue,
                pool: e
            };
        }
        var ha = Error(f(460)), ko = Error(f(474)), Cu = Error(f(542)), Nr = {
            then: function() {}
        };
        function Lo(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Du() {}
        function jo(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Du, Du), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Ko(e), e;
                default:
                    if (typeof t.status == "string") t.then(Du, Du);
                    else {
                        if (e = xe, e !== null && 100 < e.shellSuspendCounter) throw Error(f(482));
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
                            throw e = t.reason, Ko(e), e;
                    }
                    throw pa = t, ha;
            }
        }
        var pa = null;
        function Qo() {
            if (pa === null) throw Error(f(459));
            var e = pa;
            return pa = null, e;
        }
        function Ko(e) {
            if (e === ha || e === Cu) throw Error(f(483));
        }
        var dl = !1;
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
        function hl(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function pl(e, t, l) {
            var n = e.updateQueue;
            if (n === null) return null;
            if (n = n.shared, (be & 2) !== 0) {
                var a = n.pending;
                return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Ru(e), Mo(e, null, l), t;
            }
            return _u(e, n, t, l), Ru(e);
        }
        function ma(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, zf(e, l);
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
        function ya() {
            if (Dr) {
                var e = On;
                if (e !== null) throw e;
            }
        }
        function va(e, t, l, n) {
            Dr = !1;
            var a = e.updateQueue;
            dl = !1;
            var i = a.firstBaseUpdate, d = a.lastBaseUpdate, m = a.shared.pending;
            if (m !== null) {
                a.shared.pending = null;
                var g = m, x = g.next;
                g.next = null, d === null ? i = x : d.next = x, d = g;
                var U = e.alternate;
                U !== null && (U = U.updateQueue, m = U.lastBaseUpdate, m !== d && (m === null ? U.firstBaseUpdate = x : m.next = x, U.lastBaseUpdate = g));
            }
            if (i !== null) {
                var H = a.baseState;
                d = 0, U = x = g = null, m = i;
                do {
                    var C = m.lane & -536870913, D = C !== m.lane;
                    if (D ? (pe & C) === C : (n & C) === C) {
                        C !== 0 && C === An && (Dr = !0), U !== null && (U = U.next = {
                            lane: 0,
                            tag: m.tag,
                            payload: m.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var ae = e, te = m;
                            C = t;
                            var Te = l;
                            switch(te.tag){
                                case 1:
                                    if (ae = te.payload, typeof ae == "function") {
                                        H = ae.call(Te, H, C);
                                        break e;
                                    }
                                    H = ae;
                                    break e;
                                case 3:
                                    ae.flags = ae.flags & -65537 | 128;
                                case 0:
                                    if (ae = te.payload, C = typeof ae == "function" ? ae.call(Te, H, C) : ae, C == null) break e;
                                    H = S({}, H, C);
                                    break e;
                                case 2:
                                    dl = !0;
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
                    }, U === null ? (x = U = D, g = H) : U = U.next = D, d |= C;
                    if (m = m.next, m === null) {
                        if (m = a.shared.pending, m === null) break;
                        D = m, m = D.next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null;
                    }
                }while (!0);
                U === null && (g = H), a.baseState = g, a.firstBaseUpdate = x, a.lastBaseUpdate = U, i === null && (a.shared.lanes = 0), _l |= d, e.lanes = d, e.memoizedState = H;
            }
        }
        function Go(e, t) {
            if (typeof e != "function") throw Error(f(191, e));
            e.call(t);
        }
        function Yo(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)Go(l[e], t);
        }
        var Nn = L(null), Bu = L(0);
        function Vo(e, t) {
            e = tl, G(Bu, e), G(Nn, t), tl = e | t.baseLanes;
        }
        function Br() {
            G(Bu, tl), G(Nn, Nn.current);
        }
        function wr() {
            tl = Bu.current, X(Nn), X(Bu);
        }
        var ml = 0, fe = null, _e = null, qe = null, wu = !1, xn = !1, $l = !1, Uu = 0, ga = 0, Mn = null, s0 = 0;
        function ze() {
            throw Error(f(321));
        }
        function Ur(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!pt(e[l], t[l])) return !1;
            return !0;
        }
        function zr(e, t, l, n, a, i) {
            return ml = i, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? Ms : Cs, $l = !1, i = l(n, a), $l = !1, xn && (i = Zo(t, l, n, a)), Xo(e), i;
        }
        function Xo(e) {
            z.H = Lu;
            var t = _e !== null && _e.next !== null;
            if (ml = 0, qe = _e = fe = null, wu = !1, ga = 0, Mn = null, t) throw Error(f(300));
            e === null || Ke || (e = e.dependencies, e !== null && Nu(e) && (Ke = !0));
        }
        function Zo(e, t, l, n) {
            fe = e;
            var a = 0;
            do {
                if (xn && (Mn = null), ga = 0, xn = !1, 25 <= a) throw Error(f(301));
                if (a += 1, qe = _e = null, e.updateQueue != null) {
                    var i = e.updateQueue;
                    i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
                }
                z.H = g0, i = t(l, n);
            }while (xn);
            return i;
        }
        function d0() {
            var e = z.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? ba(t) : t, e = e.useState()[0], (_e !== null ? _e.memoizedState : null) !== e && (fe.flags |= 1024), t;
        }
        function Pr() {
            var e = Uu !== 0;
            return Uu = 0, e;
        }
        function qr(e, t, l) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
        }
        function Hr(e) {
            if (wu) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                wu = !1;
            }
            ml = 0, qe = _e = fe = null, xn = !1, ga = Uu = 0, Mn = null;
        }
        function it() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return qe === null ? fe.memoizedState = qe = e : qe = qe.next = e, qe;
        }
        function He() {
            if (_e === null) {
                var e = fe.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = _e.next;
            var t = qe === null ? fe.memoizedState : qe.next;
            if (t !== null) qe = t, _e = e;
            else {
                if (e === null) throw fe.alternate === null ? Error(f(467)) : Error(f(310));
                _e = e, e = {
                    memoizedState: _e.memoizedState,
                    baseState: _e.baseState,
                    baseQueue: _e.baseQueue,
                    queue: _e.queue,
                    next: null
                }, qe === null ? fe.memoizedState = qe = e : qe = qe.next = e;
            }
            return qe;
        }
        function kr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function ba(e) {
            var t = ga;
            return ga += 1, Mn === null && (Mn = []), e = jo(Mn, e, t), t = fe, (qe === null ? t.memoizedState : qe.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? Ms : Cs), e;
        }
        function zu(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return ba(e);
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
            }), l === null && (l = kr(), fe.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), n = 0; n < e; n++)l[n] = he;
            return t.index++, l;
        }
        function Jt(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function Pu(e) {
            var t = He();
            return jr(t, _e, e);
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
                var m = d = null, g = null, x = t, U = !1;
                do {
                    var H = x.lane & -536870913;
                    if (H !== x.lane ? (pe & H) === H : (ml & H) === H) {
                        var C = x.revertLane;
                        if (C === 0) g !== null && (g = g.next = {
                            lane: 0,
                            revertLane: 0,
                            action: x.action,
                            hasEagerState: x.hasEagerState,
                            eagerState: x.eagerState,
                            next: null
                        }), H === An && (U = !0);
                        else if ((ml & C) === C) {
                            x = x.next, C === An && (U = !0);
                            continue;
                        } else H = {
                            lane: 0,
                            revertLane: x.revertLane,
                            action: x.action,
                            hasEagerState: x.hasEagerState,
                            eagerState: x.eagerState,
                            next: null
                        }, g === null ? (m = g = H, d = i) : g = g.next = H, fe.lanes |= C, _l |= C;
                        H = x.action, $l && l(i, H), i = x.hasEagerState ? x.eagerState : l(i, H);
                    } else C = {
                        lane: H,
                        revertLane: x.revertLane,
                        action: x.action,
                        hasEagerState: x.hasEagerState,
                        eagerState: x.eagerState,
                        next: null
                    }, g === null ? (m = g = C, d = i) : g = g.next = C, fe.lanes |= H, _l |= H;
                    x = x.next;
                }while (x !== null && x !== t);
                if (g === null ? d = i : g.next = m, !pt(i, e.memoizedState) && (Ke = !0, U && (l = On, l !== null))) throw l;
                e.memoizedState = i, e.baseState = d, e.baseQueue = g, n.lastRenderedState = i;
            }
            return a === null && (n.lanes = 0), [
                e.memoizedState,
                n.dispatch
            ];
        }
        function Qr(e) {
            var t = He(), l = t.queue;
            if (l === null) throw Error(f(311));
            l.lastRenderedReducer = e;
            var n = l.dispatch, a = l.pending, i = t.memoizedState;
            if (a !== null) {
                l.pending = null;
                var d = a = a.next;
                do i = e(i, d.action), d = d.next;
                while (d !== a);
                pt(i, t.memoizedState) || (Ke = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
            }
            return [
                i,
                n
            ];
        }
        function Jo(e, t, l) {
            var n = fe, a = He(), i = ve;
            if (i) {
                if (l === void 0) throw Error(f(407));
                l = l();
            } else l = t();
            var d = !pt((_e || a).memoizedState, l);
            d && (a.memoizedState = l, Ke = !0), a = a.queue;
            var m = Fo.bind(null, n, a, e);
            if (Sa(2048, 8, m, [
                e
            ]), a.getSnapshot !== t || d || qe !== null && qe.memoizedState.tag & 1) {
                if (n.flags |= 2048, Cn(9, qu(), Wo.bind(null, n, a, l, t), null), xe === null) throw Error(f(349));
                i || (ml & 124) !== 0 || $o(n, t, l);
            }
            return l;
        }
        function $o(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = fe.updateQueue, t === null ? (t = kr(), fe.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function Wo(e, t, l, n) {
            t.value = l, t.getSnapshot = n, Io(t) && es(e);
        }
        function Fo(e, t, l) {
            return l(function() {
                Io(t) && es(e);
            });
        }
        function Io(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !pt(e, l);
            } catch  {
                return !0;
            }
        }
        function es(e) {
            var t = En(e, 2);
            t !== null && St(t, e, 2);
        }
        function Kr(e) {
            var t = it();
            if (typeof e == "function") {
                var l = e;
                if (e = l(), $l) {
                    cl(!0);
                    try {
                        l();
                    } finally{
                        cl(!1);
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
        function ts(e, t, l, n) {
            return e.baseState = l, jr(e, _e, typeof n == "function" ? n : Jt);
        }
        function h0(e, t, l, n, a) {
            if (ku(e)) throw Error(f(485));
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
                z.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, ls(t, i)) : (i.next = l.next, t.pending = l.next = i);
            }
        }
        function ls(e, t) {
            var l = t.action, n = t.payload, a = e.state;
            if (t.isTransition) {
                var i = z.T, d = {};
                z.T = d;
                try {
                    var m = l(a, n), g = z.S;
                    g !== null && g(d, m), ns(e, t, m);
                } catch (x) {
                    Gr(e, t, x);
                } finally{
                    z.T = i;
                }
            } else try {
                i = l(a, n), ns(e, t, i);
            } catch (x) {
                Gr(e, t, x);
            }
        }
        function ns(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
                as(e, t, n);
            }, function(n) {
                return Gr(e, t, n);
            }) : as(e, t, l);
        }
        function as(e, t, l) {
            t.status = "fulfilled", t.value = l, us(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, ls(e, l)));
        }
        function Gr(e, t, l) {
            var n = e.pending;
            if (e.pending = null, n !== null) {
                n = n.next;
                do t.status = "rejected", t.reason = l, us(t), t = t.next;
                while (t !== n);
            }
            e.action = null;
        }
        function us(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function is(e, t) {
            return t;
        }
        function rs(e, t) {
            if (ve) {
                var l = xe.formState;
                if (l !== null) {
                    e: {
                        var n = fe;
                        if (ve) {
                            if (we) {
                                t: {
                                    for(var a = we, i = Pt; a.nodeType !== 8;){
                                        if (!i) {
                                            a = null;
                                            break t;
                                        }
                                        if (a = wt(a.nextSibling), a === null) {
                                            a = null;
                                            break t;
                                        }
                                    }
                                    i = a.data, a = i === "F!" || i === "F" ? a : null;
                                }
                                if (a) {
                                    we = wt(a.nextSibling), n = a.data === "F!";
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
                lastRenderedReducer: is,
                lastRenderedState: t
            }, l.queue = n, l = Os.bind(null, fe, n), n.dispatch = l, n = Kr(!1), i = Jr.bind(null, fe, !1, n.queue), n = it(), a = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, n.queue = a, l = h0.bind(null, fe, a, i, l), a.dispatch = l, n.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function cs(e) {
            var t = He();
            return fs(t, _e, e);
        }
        function fs(e, t, l) {
            if (t = jr(e, t, is)[0], e = Pu(Jt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var n = ba(t);
            } catch (d) {
                throw d === ha ? Cu : d;
            }
            else n = t;
            t = He();
            var a = t.queue, i = a.dispatch;
            return l !== t.memoizedState && (fe.flags |= 2048, Cn(9, qu(), p0.bind(null, a, l), null)), [
                n,
                i,
                e
            ];
        }
        function p0(e, t) {
            e.action = t;
        }
        function os(e) {
            var t = He(), l = _e;
            if (l !== null) return fs(t, l, e);
            He(), t = t.memoizedState, l = He();
            var n = l.queue.dispatch;
            return l.memoizedState = e, [
                t,
                n,
                !1
            ];
        }
        function Cn(e, t, l, n) {
            return e = {
                tag: e,
                create: l,
                deps: n,
                inst: t,
                next: null
            }, t = fe.updateQueue, t === null && (t = kr(), fe.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
        }
        function qu() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function ss() {
            return He().memoizedState;
        }
        function Hu(e, t, l, n) {
            var a = it();
            n = n === void 0 ? null : n, fe.flags |= e, a.memoizedState = Cn(1 | t, qu(), l, n);
        }
        function Sa(e, t, l, n) {
            var a = He();
            n = n === void 0 ? null : n;
            var i = a.memoizedState.inst;
            _e !== null && n !== null && Ur(n, _e.memoizedState.deps) ? a.memoizedState = Cn(t, i, l, n) : (fe.flags |= e, a.memoizedState = Cn(1 | t, i, l, n));
        }
        function ds(e, t) {
            Hu(8390656, 8, e, t);
        }
        function hs(e, t) {
            Sa(2048, 8, e, t);
        }
        function ps(e, t) {
            return Sa(4, 2, e, t);
        }
        function ms(e, t) {
            return Sa(4, 4, e, t);
        }
        function ys(e, t) {
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
        function vs(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, Sa(4, 4, ys.bind(null, t, e), l);
        }
        function Yr() {}
        function gs(e, t) {
            var l = He();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            return t !== null && Ur(t, n[1]) ? n[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function bs(e, t) {
            var l = He();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            if (t !== null && Ur(t, n[1])) return n[0];
            if (n = e(), $l) {
                cl(!0);
                try {
                    e();
                } finally{
                    cl(!1);
                }
            }
            return l.memoizedState = [
                n,
                t
            ], n;
        }
        function Vr(e, t, l) {
            return l === void 0 || (ml & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = _d(), fe.lanes |= e, _l |= e, l);
        }
        function Ss(e, t, l, n) {
            return pt(l, t) ? l : Nn.current !== null ? (e = Vr(e, l, n), pt(e, t) || (Ke = !0), e) : (ml & 42) === 0 ? (Ke = !0, e.memoizedState = l) : (e = _d(), fe.lanes |= e, _l |= e, t);
        }
        function Es(e, t, l, n, a) {
            var i = Y.p;
            Y.p = i !== 0 && 8 > i ? i : 8;
            var d = z.T, m = {};
            z.T = m, Jr(e, !1, t, l);
            try {
                var g = a(), x = z.S;
                if (x !== null && x(m, g), g !== null && typeof g == "object" && typeof g.then == "function") {
                    var U = o0(g, n);
                    Ea(e, t, U, bt(e));
                } else Ea(e, t, n, bt(e));
            } catch (H) {
                Ea(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: H
                }, bt());
            } finally{
                Y.p = i, z.T = d;
            }
        }
        function m0() {}
        function Xr(e, t, l, n) {
            if (e.tag !== 5) throw Error(f(476));
            var a = _s(e).queue;
            Es(e, a, t, ne, l === null ? m0 : function() {
                return Rs(e), l(n);
            });
        }
        function _s(e) {
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
                    lastRenderedReducer: Jt,
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
                    lastRenderedReducer: Jt,
                    lastRenderedState: l
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Rs(e) {
            var t = _s(e).next.queue;
            Ea(e, t, {}, bt());
        }
        function Zr() {
            return et(ka);
        }
        function Ts() {
            return He().memoizedState;
        }
        function As() {
            return He().memoizedState;
        }
        function y0(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = bt();
                        e = hl(l);
                        var n = pl(t, e, l);
                        n !== null && (St(n, t, l), ma(n, t, l)), t = {
                            cache: Tr()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function v0(e, t, l) {
            var n = bt();
            l = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ku(e) ? Ns(t, l) : (l = pr(e, t, l, n), l !== null && (St(l, e, n), xs(l, t, n)));
        }
        function Os(e, t, l) {
            var n = bt();
            Ea(e, t, l, n);
        }
        function Ea(e, t, l, n) {
            var a = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (ku(e)) Ns(t, a);
            else {
                var i = e.alternate;
                if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                    var d = t.lastRenderedState, m = i(d, l);
                    if (a.hasEagerState = !0, a.eagerState = m, pt(m, d)) return _u(e, t, a, 0), xe === null && Eu(), !1;
                } catch  {} finally{}
                if (l = pr(e, t, a, n), l !== null) return St(l, e, n), xs(l, t, n), !0;
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
            }, ku(e)) {
                if (t) throw Error(f(479));
            } else t = pr(e, l, n, 2), t !== null && St(t, e, 2);
        }
        function ku(e) {
            var t = e.alternate;
            return e === fe || t !== null && t === fe;
        }
        function Ns(e, t) {
            xn = wu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function xs(e, t, l) {
            if ((l & 4194048) !== 0) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, zf(e, l);
            }
        }
        var Lu = {
            readContext: et,
            use: zu,
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
        }, Ms = {
            readContext: et,
            use: zu,
            useCallback: function(e, t) {
                return it().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: et,
            useEffect: ds,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, Hu(4194308, 4, ys.bind(null, t, e), l);
            },
            useLayoutEffect: function(e, t) {
                return Hu(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                Hu(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var l = it();
                t = t === void 0 ? null : t;
                var n = e();
                if ($l) {
                    cl(!0);
                    try {
                        e();
                    } finally{
                        cl(!1);
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
                        cl(!0);
                        try {
                            l(t);
                        } finally{
                            cl(!1);
                        }
                    }
                } else a = t;
                return n.memoizedState = n.baseState = a, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: a
                }, n.queue = e, e = e.dispatch = v0.bind(null, fe, e), [
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
                var t = e.queue, l = Os.bind(null, fe, t);
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
                return e = Es.bind(null, fe, e.queue, !0, !1), it().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, l) {
                var n = fe, a = it();
                if (ve) {
                    if (l === void 0) throw Error(f(407));
                    l = l();
                } else {
                    if (l = t(), xe === null) throw Error(f(349));
                    (pe & 124) !== 0 || $o(n, t, l);
                }
                a.memoizedState = l;
                var i = {
                    value: l,
                    getSnapshot: t
                };
                return a.queue = i, ds(Fo.bind(null, n, i, e), [
                    e
                ]), n.flags |= 2048, Cn(9, qu(), Wo.bind(null, n, i, l, t), null), l;
            },
            useId: function() {
                var e = it(), t = xe.identifierPrefix;
                if (ve) {
                    var l = Vt, n = Yt;
                    l = (n & ~(1 << 32 - ht(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Uu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = s0++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Zr,
            useFormState: rs,
            useActionState: rs,
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
                return it().memoizedState = y0.bind(null, fe);
            }
        }, Cs = {
            readContext: et,
            use: zu,
            useCallback: gs,
            useContext: et,
            useEffect: hs,
            useImperativeHandle: vs,
            useInsertionEffect: ps,
            useLayoutEffect: ms,
            useMemo: bs,
            useReducer: Pu,
            useRef: ss,
            useState: function() {
                return Pu(Jt);
            },
            useDebugValue: Yr,
            useDeferredValue: function(e, t) {
                var l = He();
                return Ss(l, _e.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Pu(Jt)[0], t = He().memoizedState;
                return [
                    typeof e == "boolean" ? e : ba(e),
                    t
                ];
            },
            useSyncExternalStore: Jo,
            useId: Ts,
            useHostTransitionStatus: Zr,
            useFormState: cs,
            useActionState: cs,
            useOptimistic: function(e, t) {
                var l = He();
                return ts(l, _e, e, t);
            },
            useMemoCache: Lr,
            useCacheRefresh: As
        }, g0 = {
            readContext: et,
            use: zu,
            useCallback: gs,
            useContext: et,
            useEffect: hs,
            useImperativeHandle: vs,
            useInsertionEffect: ps,
            useLayoutEffect: ms,
            useMemo: bs,
            useReducer: Qr,
            useRef: ss,
            useState: function() {
                return Qr(Jt);
            },
            useDebugValue: Yr,
            useDeferredValue: function(e, t) {
                var l = He();
                return _e === null ? Vr(l, e, t) : Ss(l, _e.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Qr(Jt)[0], t = He().memoizedState;
                return [
                    typeof e == "boolean" ? e : ba(e),
                    t
                ];
            },
            useSyncExternalStore: Jo,
            useId: Ts,
            useHostTransitionStatus: Zr,
            useFormState: os,
            useActionState: os,
            useOptimistic: function(e, t) {
                var l = He();
                return _e !== null ? ts(l, _e, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: Lr,
            useCacheRefresh: As
        }, Dn = null, _a = 0;
        function ju(e) {
            var t = _a;
            return _a += 1, Dn === null && (Dn = []), jo(Dn, e, t);
        }
        function Ra(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Qu(e, t) {
            throw t.$$typeof === R ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Ds(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Bs(e) {
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
                return A = Gt(A, _), A.index = 0, A.sibling = null, A;
            }
            function i(A, _, N) {
                return A.index = N, e ? (N = A.alternate, N !== null ? (N = N.index, N < _ ? (A.flags |= 67108866, _) : N) : (A.flags |= 67108866, _)) : (A.flags |= 1048576, _);
            }
            function d(A) {
                return e && A.alternate === null && (A.flags |= 67108866), A;
            }
            function m(A, _, N, q) {
                return _ === null || _.tag !== 6 ? (_ = yr(N, A.mode, q), _.return = A, _) : (_ = a(_, N), _.return = A, _);
            }
            function g(A, _, N, q) {
                var J = N.type;
                return J === M ? U(A, _, N.props.children, q, N.key) : _ !== null && (_.elementType === J || typeof J == "object" && J !== null && J.$$typeof === $ && Ds(J) === _.type) ? (_ = a(_, N.props), Ra(_, N), _.return = A, _) : (_ = Tu(N.type, N.key, N.props, null, A.mode, q), Ra(_, N), _.return = A, _);
            }
            function x(A, _, N, q) {
                return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== N.containerInfo || _.stateNode.implementation !== N.implementation ? (_ = vr(N, A.mode, q), _.return = A, _) : (_ = a(_, N.children || []), _.return = A, _);
            }
            function U(A, _, N, q, J) {
                return _ === null || _.tag !== 7 ? (_ = Ql(N, A.mode, q, J), _.return = A, _) : (_ = a(_, N), _.return = A, _);
            }
            function H(A, _, N) {
                if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return _ = yr("" + _, A.mode, N), _.return = A, _;
                if (typeof _ == "object" && _ !== null) {
                    switch(_.$$typeof){
                        case b:
                            return N = Tu(_.type, _.key, _.props, null, A.mode, N), Ra(N, _), N.return = A, N;
                        case O:
                            return _ = vr(_, A.mode, N), _.return = A, _;
                        case $:
                            var q = _._init;
                            return _ = q(_._payload), H(A, _, N);
                    }
                    if (Fe(_) || Ae(_)) return _ = Ql(_, A.mode, N, null), _.return = A, _;
                    if (typeof _.then == "function") return H(A, ju(_), N);
                    if (_.$$typeof === k) return H(A, xu(A, _), N);
                    Qu(A, _);
                }
                return null;
            }
            function C(A, _, N, q) {
                var J = _ !== null ? _.key : null;
                if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return J !== null ? null : m(A, _, "" + N, q);
                if (typeof N == "object" && N !== null) {
                    switch(N.$$typeof){
                        case b:
                            return N.key === J ? g(A, _, N, q) : null;
                        case O:
                            return N.key === J ? x(A, _, N, q) : null;
                        case $:
                            return J = N._init, N = J(N._payload), C(A, _, N, q);
                    }
                    if (Fe(N) || Ae(N)) return J !== null ? null : U(A, _, N, q, null);
                    if (typeof N.then == "function") return C(A, _, ju(N), q);
                    if (N.$$typeof === k) return C(A, _, xu(A, N), q);
                    Qu(A, N);
                }
                return null;
            }
            function D(A, _, N, q, J) {
                if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return A = A.get(N) || null, m(_, A, "" + q, J);
                if (typeof q == "object" && q !== null) {
                    switch(q.$$typeof){
                        case b:
                            return A = A.get(q.key === null ? N : q.key) || null, g(_, A, q, J);
                        case O:
                            return A = A.get(q.key === null ? N : q.key) || null, x(_, A, q, J);
                        case $:
                            var oe = q._init;
                            return q = oe(q._payload), D(A, _, N, q, J);
                    }
                    if (Fe(q) || Ae(q)) return A = A.get(N) || null, U(_, A, q, J, null);
                    if (typeof q.then == "function") return D(A, _, N, ju(q), J);
                    if (q.$$typeof === k) return D(A, _, N, xu(_, q), J);
                    Qu(_, q);
                }
                return null;
            }
            function ae(A, _, N, q) {
                for(var J = null, oe = null, W = _, le = _ = 0, Ye = null; W !== null && le < N.length; le++){
                    W.index > le ? (Ye = W, W = null) : Ye = W.sibling;
                    var ye = C(A, W, N[le], q);
                    if (ye === null) {
                        W === null && (W = Ye);
                        break;
                    }
                    e && W && ye.alternate === null && t(A, W), _ = i(ye, _, le), oe === null ? J = ye : oe.sibling = ye, oe = ye, W = Ye;
                }
                if (le === N.length) return l(A, W), ve && Gl(A, le), J;
                if (W === null) {
                    for(; le < N.length; le++)W = H(A, N[le], q), W !== null && (_ = i(W, _, le), oe === null ? J = W : oe.sibling = W, oe = W);
                    return ve && Gl(A, le), J;
                }
                for(W = n(W); le < N.length; le++)Ye = D(W, A, le, N[le], q), Ye !== null && (e && Ye.alternate !== null && W.delete(Ye.key === null ? le : Ye.key), _ = i(Ye, _, le), oe === null ? J = Ye : oe.sibling = Ye, oe = Ye);
                return e && W.forEach(function(Dl) {
                    return t(A, Dl);
                }), ve && Gl(A, le), J;
            }
            function te(A, _, N, q) {
                if (N == null) throw Error(f(151));
                for(var J = null, oe = null, W = _, le = _ = 0, Ye = null, ye = N.next(); W !== null && !ye.done; le++, ye = N.next()){
                    W.index > le ? (Ye = W, W = null) : Ye = W.sibling;
                    var Dl = C(A, W, ye.value, q);
                    if (Dl === null) {
                        W === null && (W = Ye);
                        break;
                    }
                    e && W && Dl.alternate === null && t(A, W), _ = i(Dl, _, le), oe === null ? J = Dl : oe.sibling = Dl, oe = Dl, W = Ye;
                }
                if (ye.done) return l(A, W), ve && Gl(A, le), J;
                if (W === null) {
                    for(; !ye.done; le++, ye = N.next())ye = H(A, ye.value, q), ye !== null && (_ = i(ye, _, le), oe === null ? J = ye : oe.sibling = ye, oe = ye);
                    return ve && Gl(A, le), J;
                }
                for(W = n(W); !ye.done; le++, ye = N.next())ye = D(W, A, le, ye.value, q), ye !== null && (e && ye.alternate !== null && W.delete(ye.key === null ? le : ye.key), _ = i(ye, _, le), oe === null ? J = ye : oe.sibling = ye, oe = ye);
                return e && W.forEach(function(b1) {
                    return t(A, b1);
                }), ve && Gl(A, le), J;
            }
            function Te(A, _, N, q) {
                if (typeof N == "object" && N !== null && N.type === M && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
                    switch(N.$$typeof){
                        case b:
                            e: {
                                for(var J = N.key; _ !== null;){
                                    if (_.key === J) {
                                        if (J = N.type, J === M) {
                                            if (_.tag === 7) {
                                                l(A, _.sibling), q = a(_, N.props.children), q.return = A, A = q;
                                                break e;
                                            }
                                        } else if (_.elementType === J || typeof J == "object" && J !== null && J.$$typeof === $ && Ds(J) === _.type) {
                                            l(A, _.sibling), q = a(_, N.props), Ra(q, N), q.return = A, A = q;
                                            break e;
                                        }
                                        l(A, _);
                                        break;
                                    } else t(A, _);
                                    _ = _.sibling;
                                }
                                N.type === M ? (q = Ql(N.props.children, A.mode, q, N.key), q.return = A, A = q) : (q = Tu(N.type, N.key, N.props, null, A.mode, q), Ra(q, N), q.return = A, A = q);
                            }
                            return d(A);
                        case O:
                            e: {
                                for(J = N.key; _ !== null;){
                                    if (_.key === J) if (_.tag === 4 && _.stateNode.containerInfo === N.containerInfo && _.stateNode.implementation === N.implementation) {
                                        l(A, _.sibling), q = a(_, N.children || []), q.return = A, A = q;
                                        break e;
                                    } else {
                                        l(A, _);
                                        break;
                                    }
                                    else t(A, _);
                                    _ = _.sibling;
                                }
                                q = vr(N, A.mode, q), q.return = A, A = q;
                            }
                            return d(A);
                        case $:
                            return J = N._init, N = J(N._payload), Te(A, _, N, q);
                    }
                    if (Fe(N)) return ae(A, _, N, q);
                    if (Ae(N)) {
                        if (J = Ae(N), typeof J != "function") throw Error(f(150));
                        return N = J.call(N), te(A, _, N, q);
                    }
                    if (typeof N.then == "function") return Te(A, _, ju(N), q);
                    if (N.$$typeof === k) return Te(A, _, xu(A, N), q);
                    Qu(A, N);
                }
                return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, _ !== null && _.tag === 6 ? (l(A, _.sibling), q = a(_, N), q.return = A, A = q) : (l(A, _), q = yr(N, A.mode, q), q.return = A, A = q), d(A)) : l(A, _);
            }
            return function(A, _, N, q) {
                try {
                    _a = 0;
                    var J = Te(A, _, N, q);
                    return Dn = null, J;
                } catch (W) {
                    if (W === ha || W === Cu) throw W;
                    var oe = mt(29, W, null, A.mode);
                    return oe.lanes = q, oe.return = A, oe;
                } finally{}
            };
        }
        var Bn = Bs(!0), ws = Bs(!1), Nt = L(null), qt = null;
        function yl(e) {
            var t = e.alternate;
            G(Le, Le.current & 1), G(Nt, e), qt === null && (t === null || Nn.current !== null || t.memoizedState !== null) && (qt = e);
        }
        function Us(e) {
            if (e.tag === 22) {
                if (G(Le, Le.current), G(Nt, e), qt === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (qt = e);
                }
            } else vl();
        }
        function vl() {
            G(Le, Le.current), G(Nt, Nt.current);
        }
        function $t(e) {
            X(Nt), qt === e && (qt = null), X(Le);
        }
        var Le = L(0);
        function Ku(e) {
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
            t = e.memoizedState, l = l(n, t), l = l == null ? t : S({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var Wr = {
            enqueueSetState: function(e, t, l) {
                e = e._reactInternals;
                var n = bt(), a = hl(n);
                a.payload = t, l != null && (a.callback = l), t = pl(e, a, n), t !== null && (St(t, e, n), ma(t, e, n));
            },
            enqueueReplaceState: function(e, t, l) {
                e = e._reactInternals;
                var n = bt(), a = hl(n);
                a.tag = 1, a.payload = t, l != null && (a.callback = l), t = pl(e, a, n), t !== null && (St(t, e, n), ma(t, e, n));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var l = bt(), n = hl(l);
                n.tag = 2, t != null && (n.callback = t), t = pl(e, n, l), t !== null && (St(t, e, l), ma(t, e, l));
            }
        };
        function zs(e, t, l, n, a, i, d) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, d) : t.prototype && t.prototype.isPureReactComponent ? !ua(l, n) || !ua(a, i) : !0;
        }
        function Ps(e, t, l, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Wr.enqueueReplaceState(t, t.state, null);
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
        var Gu = typeof reportError == "function" ? reportError : function(e) {
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
        function qs(e) {
            Gu(e);
        }
        function Hs(e) {
            console.error(e);
        }
        function ks(e) {
            Gu(e);
        }
        function Yu(e, t) {
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
        function Ls(e, t, l) {
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
        function Fr(e, t, l) {
            return l = hl(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Yu(e, t);
            }, l;
        }
        function js(e) {
            return e = hl(e), e.tag = 3, e;
        }
        function Qs(e, t, l, n) {
            var a = l.type.getDerivedStateFromError;
            if (typeof a == "function") {
                var i = n.value;
                e.payload = function() {
                    return a(i);
                }, e.callback = function() {
                    Ls(t, l, n);
                };
            }
            var d = l.stateNode;
            d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
                Ls(t, l, n), typeof a != "function" && (Rl === null ? Rl = new Set([
                    this
                ]) : Rl.add(this));
                var m = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: m !== null ? m : ""
                });
            });
        }
        function b0(e, t, l, n, a) {
            if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (t = l.alternate, t !== null && oa(t, l, a, !0), l = Nt.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return qt === null ? _c() : l.alternate === null && Ue === 0 && (Ue = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Nr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
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
            if (ve) return t = Nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Sr && (e = Error(f(422), {
                cause: n
            }), fa(Rt(e, l)))) : (n !== Sr && (t = Error(f(423), {
                cause: n
            }), fa(Rt(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = Rt(n, l), a = Fr(e.stateNode, n, a), Cr(e, a), Ue !== 4 && (Ue = 2)), !1;
            var i = Error(f(520), {
                cause: n
            });
            if (i = Rt(i, l), Ca === null ? Ca = [
                i
            ] : Ca.push(i), Ue !== 4 && (Ue = 2), t === null) return !0;
            n = Rt(n, l), l = t;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, e = a & -a, l.lanes |= e, e = Fr(l.stateNode, n, e), Cr(l, e), !1;
                    case 1:
                        if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Rl === null || !Rl.has(i)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = js(a), Qs(a, e, l, n), Cr(l, a), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Ks = Error(f(461)), Ke = !1;
        function Xe(e, t, l, n) {
            t.child = e === null ? ws(t, null, l, n) : Bn(t, e.child, l, n);
        }
        function Gs(e, t, l, n, a) {
            l = l.render;
            var i = t.ref;
            if ("ref" in n) {
                var d = {};
                for(var m in n)m !== "ref" && (d[m] = n[m]);
            } else d = n;
            return Zl(t), n = zr(e, t, l, d, i, a), m = Pr(), e !== null && !Ke ? (qr(e, t, a), Wt(e, t, a)) : (ve && m && gr(t), t.flags |= 1, Xe(e, t, n, a), t.child);
        }
        function Ys(e, t, l, n, a) {
            if (e === null) {
                var i = l.type;
                return typeof i == "function" && !mr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Vs(e, t, i, n, a)) : (e = Tu(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (i = e.child, !ic(e, a)) {
                var d = i.memoizedProps;
                if (l = l.compare, l = l !== null ? l : ua, l(d, n) && e.ref === t.ref) return Wt(e, t, a);
            }
            return t.flags |= 1, e = Gt(i, n), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Vs(e, t, l, n, a) {
            if (e !== null) {
                var i = e.memoizedProps;
                if (ua(i, n) && e.ref === t.ref) if (Ke = !1, t.pendingProps = n = i, ic(e, a)) (e.flags & 131072) !== 0 && (Ke = !0);
                else return t.lanes = e.lanes, Wt(e, t, a);
            }
            return Ir(e, t, l, n, a);
        }
        function Xs(e, t, l) {
            var n = t.pendingProps, a = n.children, i = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (n = i !== null ? i.baseLanes | l : l, e !== null) {
                        for(a = t.child = e.child, i = 0; a !== null;)i = i | a.lanes | a.childLanes, a = a.sibling;
                        t.childLanes = i & ~n;
                    } else t.childLanes = 0, t.child = null;
                    return Zs(e, t, n, l);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && Mu(t, i !== null ? i.cachePool : null), i !== null ? Vo(t, i) : Br(), Us(t);
                else return t.lanes = t.childLanes = 536870912, Zs(e, t, i !== null ? i.baseLanes | l : l, l);
            } else i !== null ? (Mu(t, i.cachePool), Vo(t, i), vl(), t.memoizedState = null) : (e !== null && Mu(t, null), Br(), vl());
            return Xe(e, t, a, l), t.child;
        }
        function Zs(e, t, l, n) {
            var a = Or();
            return a = a === null ? null : {
                parent: ke._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: a
            }, e !== null && Mu(t, null), Br(), Us(t), e !== null && oa(e, t, n, !0), null;
        }
        function Vu(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(f(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function Ir(e, t, l, n, a) {
            return Zl(t), l = zr(e, t, l, n, void 0, a), n = Pr(), e !== null && !Ke ? (qr(e, t, a), Wt(e, t, a)) : (ve && n && gr(t), t.flags |= 1, Xe(e, t, l, a), t.child);
        }
        function Js(e, t, l, n, a, i) {
            return Zl(t), t.updateQueue = null, l = Zo(t, n, l, a), Xo(e), n = Pr(), e !== null && !Ke ? (qr(e, t, i), Wt(e, t, i)) : (ve && n && gr(t), t.flags |= 1, Xe(e, t, l, i), t.child);
        }
        function $s(e, t, l, n, a) {
            if (Zl(t), t.stateNode === null) {
                var i = _n, d = l.contextType;
                typeof d == "object" && d !== null && (i = et(d)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Wr, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, xr(t), d = l.contextType, i.context = typeof d == "object" && d !== null ? et(d) : _n, i.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && ($r(t, l, d, n), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (d = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), d !== i.state && Wr.enqueueReplaceState(i, i.state, null), va(t, n, i, a), ya(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
            } else if (e === null) {
                i = t.stateNode;
                var m = t.memoizedProps, g = Wl(l, m);
                i.props = g;
                var x = i.context, U = l.contextType;
                d = _n, typeof U == "object" && U !== null && (d = et(U));
                var H = l.getDerivedStateFromProps;
                U = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, U || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || x !== d) && Ps(t, i, n, d), dl = !1;
                var C = t.memoizedState;
                i.state = C, va(t, n, i, a), ya(), x = t.memoizedState, m || C !== x || dl ? (typeof H == "function" && ($r(t, l, H, n), x = t.memoizedState), (g = dl || zs(t, l, g, n, C, x, d)) ? (U || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = x), i.props = n, i.state = x, i.context = d, n = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
            } else {
                i = t.stateNode, Mr(e, t), d = t.memoizedProps, U = Wl(l, d), i.props = U, H = t.pendingProps, C = i.context, x = l.contextType, g = _n, typeof x == "object" && x !== null && (g = et(x)), m = l.getDerivedStateFromProps, (x = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d !== H || C !== g) && Ps(t, i, n, g), dl = !1, C = t.memoizedState, i.state = C, va(t, n, i, a), ya();
                var D = t.memoizedState;
                d !== H || C !== D || dl || e !== null && e.dependencies !== null && Nu(e.dependencies) ? (typeof m == "function" && ($r(t, l, m, n), D = t.memoizedState), (U = dl || zs(t, l, U, n, C, D, g) || e !== null && e.dependencies !== null && Nu(e.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, D, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, D, g)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = D), i.props = n, i.state = D, i.context = g, n = U) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), n = !1);
            }
            return i = n, Vu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = Bn(t, e.child, null, a), t.child = Bn(t, null, l, a)) : Xe(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = Wt(e, t, a), e;
        }
        function Ws(e, t, l, n) {
            return ca(), t.flags |= 256, Xe(e, t, l, n), t.child;
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
                cachePool: Ho()
            };
        }
        function lc(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= xt), e;
        }
        function Fs(e, t, l) {
            var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, d;
            if ((d = i) || (d = e !== null && e.memoizedState === null ? !1 : (Le.current & 2) !== 0), d && (a = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (ve) {
                    if (a ? yl(t) : vl(), ve) {
                        var m = we, g;
                        if (g = m) {
                            e: {
                                for(g = m, m = Pt; g.nodeType !== 8;){
                                    if (!m) {
                                        m = null;
                                        break e;
                                    }
                                    if (g = wt(g.nextSibling), g === null) {
                                        m = null;
                                        break e;
                                    }
                                }
                                m = g;
                            }
                            m !== null ? (t.memoizedState = {
                                dehydrated: m,
                                treeContext: Kl !== null ? {
                                    id: Yt,
                                    overflow: Vt
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, g = mt(18, null, null, 0), g.stateNode = m, g.return = t, t.child = g, nt = t, we = null, g = !0) : g = !1;
                        }
                        g || Vl(t);
                    }
                    if (m = t.memoizedState, m !== null && (m = m.dehydrated, m !== null)) return kc(m) ? t.lanes = 32 : t.lanes = 536870912, null;
                    $t(t);
                }
                return m = n.children, n = n.fallback, a ? (vl(), a = t.mode, m = Xu({
                    mode: "hidden",
                    children: m
                }, a), n = Ql(n, a, l, null), m.return = t, n.return = t, m.sibling = n, t.child = m, a = t.child, a.memoizedState = tc(l), a.childLanes = lc(e, d, l), t.memoizedState = ec, n) : (yl(t), nc(t, m));
            }
            if (g = e.memoizedState, g !== null && (m = g.dehydrated, m !== null)) {
                if (i) t.flags & 256 ? (yl(t), t.flags &= -257, t = ac(e, t, l)) : t.memoizedState !== null ? (vl(), t.child = e.child, t.flags |= 128, t = null) : (vl(), a = n.fallback, m = t.mode, n = Xu({
                    mode: "visible",
                    children: n.children
                }, m), a = Ql(a, m, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, Bn(t, e.child, null, l), n = t.child, n.memoizedState = tc(l), n.childLanes = lc(e, d, l), t.memoizedState = ec, t = a);
                else if (yl(t), kc(m)) {
                    if (d = m.nextSibling && m.nextSibling.dataset, d) var x = d.dgst;
                    d = x, n = Error(f(419)), n.stack = "", n.digest = d, fa({
                        value: n,
                        source: null,
                        stack: null
                    }), t = ac(e, t, l);
                } else if (Ke || oa(e, t, l, !1), d = (l & e.childLanes) !== 0, Ke || d) {
                    if (d = xe, d !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : Li(n), n = (n & (d.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== g.retryLane)) throw g.retryLane = n, En(e, n), St(d, e, n), Ks;
                    m.data === "$?" || _c(), t = ac(e, t, l);
                } else m.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, we = wt(m.nextSibling), nt = t, ve = !0, Yl = null, Pt = !1, e !== null && (At[Ot++] = Yt, At[Ot++] = Vt, At[Ot++] = Kl, Yt = e.id, Vt = e.overflow, Kl = t), t = nc(t, n.children), t.flags |= 4096);
                return t;
            }
            return a ? (vl(), a = n.fallback, m = t.mode, g = e.child, x = g.sibling, n = Gt(g, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = g.subtreeFlags & 65011712, x !== null ? a = Gt(x, a) : (a = Ql(a, m, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, m = e.child.memoizedState, m === null ? m = tc(l) : (g = m.cachePool, g !== null ? (x = ke._currentValue, g = g.parent !== x ? {
                parent: x,
                pool: x
            } : g) : g = Ho(), m = {
                baseLanes: m.baseLanes | l,
                cachePool: g
            }), a.memoizedState = m, a.childLanes = lc(e, d, l), t.memoizedState = ec, n) : (yl(t), l = e.child, e = l.sibling, l = Gt(l, {
                mode: "visible",
                children: n.children
            }), l.return = t, l.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [
                e
            ], t.flags |= 16) : d.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function nc(e, t) {
            return t = Xu({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Xu(e, t) {
            return e = mt(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function ac(e, t, l) {
            return Bn(t, e.child, null, l), e = nc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function Is(e, t, l) {
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
        function ed(e, t, l) {
            var n = t.pendingProps, a = n.revealOrder, i = n.tail;
            if (Xe(e, t, n.children, l), n = Le.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && Is(e, l, t);
                    else if (e.tag === 19) Is(e, l, t);
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
            switch(G(Le, n), a){
                case "forwards":
                    for(l = t.child, a = null; l !== null;)e = l.alternate, e !== null && Ku(e) === null && (a = l), l = l.sibling;
                    l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), uc(t, !1, a, l, i);
                    break;
                case "backwards":
                    for(l = null, a = t.child, t.child = null; a !== null;){
                        if (e = a.alternate, e !== null && Ku(e) === null) {
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
        function Wt(e, t, l) {
            if (e !== null && (t.dependencies = e.dependencies), _l |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
                if (oa(e, t, l, !1), (l & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(f(153));
            if (t.child !== null) {
                for(e = t.child, l = Gt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = Gt(e, e.pendingProps), l.return = t;
                l.sibling = null;
            }
            return t.child;
        }
        function ic(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Nu(e)));
        }
        function S0(e, t, l) {
            switch(t.tag){
                case 3:
                    Me(t, t.stateNode.containerInfo), sl(t, ke, e.memoizedState.cache), ca();
                    break;
                case 27:
                case 5:
                    zi(t);
                    break;
                case 4:
                    Me(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    sl(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var n = t.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (yl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Fs(e, t, l) : (yl(t), e = Wt(e, t, l), e !== null ? e.sibling : null);
                    yl(t);
                    break;
                case 19:
                    var a = (e.flags & 128) !== 0;
                    if (n = (l & t.childLanes) !== 0, n || (oa(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                        if (n) return ed(e, t, l);
                        t.flags |= 128;
                    }
                    if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), G(Le, Le.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Xs(e, t, l);
                case 24:
                    sl(t, ke, e.memoizedState.cache);
            }
            return Wt(e, t, l);
        }
        function td(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ke = !0;
            else {
                if (!ic(e, l) && (t.flags & 128) === 0) return Ke = !1, S0(e, t, l);
                Ke = (e.flags & 131072) !== 0;
            }
            else Ke = !1, ve && (t.flags & 1048576) !== 0 && Do(t, Ou, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var n = t.elementType, a = n._init;
                        if (n = a(n._payload), t.type = n, typeof n == "function") mr(n) ? (e = Wl(n, e), t.tag = 1, t = $s(null, t, n, e, l)) : (t.tag = 0, t = Ir(null, t, n, e, l));
                        else {
                            if (n != null) {
                                if (a = n.$$typeof, a === V) {
                                    t.tag = 11, t = Gs(null, t, n, e, l);
                                    break e;
                                } else if (a === Z) {
                                    t.tag = 14, t = Ys(null, t, n, e, l);
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
                    return n = t.type, a = Wl(n, t.pendingProps), $s(e, t, n, a, l);
                case 3:
                    e: {
                        if (Me(t, t.stateNode.containerInfo), e === null) throw Error(f(387));
                        n = t.pendingProps;
                        var i = t.memoizedState;
                        a = i.element, Mr(e, t), va(t, n, null, l);
                        var d = t.memoizedState;
                        if (n = d.cache, sl(t, ke, n), n !== i.cache && Rr(t, [
                            ke
                        ], l, !0), ya(), n = d.element, i.isDehydrated) if (i = {
                            element: n,
                            isDehydrated: !1,
                            cache: d.cache
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                            t = Ws(e, t, n, l);
                            break e;
                        } else if (n !== a) {
                            a = Rt(Error(f(424)), t), fa(a), t = Ws(e, t, n, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(we = wt(e.firstChild), nt = t, ve = !0, Yl = null, Pt = !0, l = ws(t, null, n, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (ca(), n === a) {
                                t = Wt(e, t, l);
                                break e;
                            }
                            Xe(e, t, n, l);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return Vu(e, t), e === null ? (l = uh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ve || (l = t.type, e = t.pendingProps, n = ri(ie.current).createElement(l), n[Ie] = t, n[at] = e, Je(n, l, e), Qe(n), t.stateNode = n) : t.memoizedState = uh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return zi(t), e === null && ve && (n = t.stateNode = lh(t.type, t.pendingProps, ie.current), nt = t, Pt = !0, a = we, Ol(t.type) ? (Lc = a, we = wt(n.firstChild)) : we = a), Xe(e, t, t.pendingProps.children, l), Vu(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && ve && ((a = n = we) && (n = Z0(n, t.type, t.pendingProps, Pt), n !== null ? (t.stateNode = n, nt = t, we = wt(n.firstChild), Pt = !1, a = !0) : a = !1), a || Vl(t)), zi(t), a = t.type, i = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = i.children, Pc(a, i) ? n = null : d !== null && Pc(a, d) && (t.flags |= 32), t.memoizedState !== null && (a = zr(e, t, d0, null, null, l), ka._currentValue = a), Vu(e, t), Xe(e, t, n, l), t.child;
                case 6:
                    return e === null && ve && ((e = l = we) && (l = J0(l, t.pendingProps, Pt), l !== null ? (t.stateNode = l, nt = t, we = null, e = !0) : e = !1), e || Vl(t)), null;
                case 13:
                    return Fs(e, t, l);
                case 4:
                    return Me(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Bn(t, null, n, l) : Xe(e, t, n, l), t.child;
                case 11:
                    return Gs(e, t, t.type, t.pendingProps, l);
                case 7:
                    return Xe(e, t, t.pendingProps, l), t.child;
                case 8:
                    return Xe(e, t, t.pendingProps.children, l), t.child;
                case 12:
                    return Xe(e, t, t.pendingProps.children, l), t.child;
                case 10:
                    return n = t.pendingProps, sl(t, t.type, n.value), Xe(e, t, n.children, l), t.child;
                case 9:
                    return a = t.type._context, n = t.pendingProps.children, Zl(t), a = et(a), n = n(a), t.flags |= 1, Xe(e, t, n, l), t.child;
                case 14:
                    return Ys(e, t, t.type, t.pendingProps, l);
                case 15:
                    return Vs(e, t, t.type, t.pendingProps, l);
                case 19:
                    return ed(e, t, l);
                case 31:
                    return n = t.pendingProps, l = t.mode, n = {
                        mode: n.mode,
                        children: n.children
                    }, e === null ? (l = Xu(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Gt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return Xs(e, t, l);
                case 24:
                    return Zl(t), n = et(ke), e === null ? (a = Or(), a === null && (a = xe, i = Tr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = {
                        parent: n,
                        cache: a
                    }, xr(t), sl(t, ke, a)) : ((e.lanes & l) !== 0 && (Mr(e, t), va(t, null, null, l), ya()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = {
                        parent: n,
                        cache: n
                    }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), sl(t, ke, n)) : (n = i.cache, sl(t, ke, n), n !== a.cache && Rr(t, [
                        ke
                    ], l, !0))), Xe(e, t, t.pendingProps.children, l), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(f(156, t.tag));
        }
        function Ft(e) {
            e.flags |= 4;
        }
        function ld(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !oh(t)) {
                if (t = Nt.current, t !== null && ((pe & 4194048) === pe ? qt !== null : (pe & 62914560) !== pe && (pe & 536870912) === 0 || t !== qt)) throw pa = Nr, ko;
                e.flags |= 8192;
            }
        }
        function Zu(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? wf() : 536870912, e.lanes |= t, Pn |= t);
        }
        function Ta(e, t) {
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
        function De(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
            if (t) for(var a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
            else for(a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
            return e.subtreeFlags |= n, e.childLanes = l, t;
        }
        function E0(e, t, l) {
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
                    return De(t), null;
                case 1:
                    return De(t), null;
                case 3:
                    return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Zt(ke), rl(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ra(t) ? Ft(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uo())), De(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (Ft(t), l !== null ? (De(t), ld(t, l)) : (De(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Ft(t), De(t), ld(t, l)) : (De(t), t.flags &= -16777217) : (e.memoizedProps !== n && Ft(t), De(t), t.flags &= -16777217), null;
                case 27:
                    uu(t), l = ie.current;
                    var a = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(f(166));
                            return De(t), null;
                        }
                        e = ee.current, ra(t) ? Bo(t) : (e = lh(a, n, l), t.stateNode = e, Ft(t));
                    }
                    return De(t), null;
                case 5:
                    if (uu(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(f(166));
                            return De(t), null;
                        }
                        if (e = ee.current, ra(t)) Bo(t);
                        else {
                            switch(a = ri(ie.current), e){
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
                    return De(t), t.flags &= -16777217, null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (typeof n != "string" && t.stateNode === null) throw Error(f(166));
                        if (e = ie.current, ra(t)) {
                            if (e = t.stateNode, l = t.memoizedProps, n = null, a = nt, a !== null) switch(a.tag){
                                case 27:
                                case 5:
                                    n = a.memoizedProps;
                            }
                            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Jd(e.nodeValue, l)), e || Vl(t);
                        } else e = ri(e).createTextNode(n), e[Ie] = t, t.stateNode = e;
                    }
                    return De(t), null;
                case 13:
                    if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (a = ra(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!a) throw Error(f(318));
                                if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(f(317));
                                a[Ie] = t;
                            } else ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            De(t), a = !1;
                        } else a = Uo(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                        if (!a) return t.flags & 256 ? ($t(t), t) : ($t(t), null);
                    }
                    if ($t(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                        n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                        var i = null;
                        n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), Zu(t, t.updateQueue), De(t), null;
                case 4:
                    return rl(), e === null && Dc(t.stateNode.containerInfo), De(t), null;
                case 10:
                    return Zt(t.type), De(t), null;
                case 19:
                    if (X(Le), a = t.memoizedState, a === null) return De(t), null;
                    if (n = (t.flags & 128) !== 0, i = a.rendering, i === null) if (n) Ta(a, !1);
                    else {
                        if (Ue !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (i = Ku(e), i !== null) {
                                for(t.flags |= 128, Ta(a, !1), e = i.updateQueue, t.updateQueue = e, Zu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)Co(l, e), l = l.sibling;
                                return G(Le, Le.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && zt() > Wu && (t.flags |= 128, n = !0, Ta(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!n) if (e = Ku(i), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Zu(t, e), Ta(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ve) return De(t), null;
                        } else 2 * zt() - a.renderingStartTime > Wu && l !== 536870912 && (t.flags |= 128, n = !0, Ta(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = zt(), t.sibling = null, e = Le.current, G(Le, n ? e & 1 | 2 : e & 1), t) : (De(t), null);
                case 22:
                case 23:
                    return $t(t), wr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t), l = t.updateQueue, l !== null && Zu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && X(Jl), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Zt(ke), De(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(f(156, t.tag));
        }
        function _0(e, t) {
            switch(br(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Zt(ke), rl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return uu(t), null;
                case 13:
                    if ($t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(f(340));
                        ca();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return X(Le), null;
                case 4:
                    return rl(), null;
                case 10:
                    return Zt(t.type), null;
                case 22:
                case 23:
                    return $t(t), wr(), e !== null && X(Jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Zt(ke), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function nd(e, t) {
            switch(br(t), t.tag){
                case 3:
                    Zt(ke), rl();
                    break;
                case 26:
                case 27:
                case 5:
                    uu(t);
                    break;
                case 4:
                    rl();
                    break;
                case 13:
                    $t(t);
                    break;
                case 19:
                    X(Le);
                    break;
                case 10:
                    Zt(t.type);
                    break;
                case 22:
                case 23:
                    $t(t), wr(), e !== null && X(Jl);
                    break;
                case 24:
                    Zt(ke);
            }
        }
        function Aa(e, t) {
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
                Ne(t, t.return, m);
            }
        }
        function gl(e, t, l) {
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
                                var g = l, x = m;
                                try {
                                    x();
                                } catch (U) {
                                    Ne(a, g, U);
                                }
                            }
                        }
                        n = n.next;
                    }while (n !== i);
                }
            } catch (U) {
                Ne(t, t.return, U);
            }
        }
        function ad(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    Yo(t, l);
                } catch (n) {
                    Ne(e, e.return, n);
                }
            }
        }
        function ud(e, t, l) {
            l.props = Wl(e.type, e.memoizedProps), l.state = e.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (n) {
                Ne(e, t, n);
            }
        }
        function Oa(e, t) {
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
        function Ht(e, t) {
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
        function id(e) {
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
        function rc(e, t, l) {
            try {
                var n = e.stateNode;
                K0(n, e.type, l, t), n[at] = t;
            } catch (a) {
                Ne(e, e.return, a);
            }
        }
        function rd(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ol(e.type) || e.tag === 4;
        }
        function cc(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || rd(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Ol(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function fc(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ii));
            else if (n !== 4 && (n === 27 && Ol(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(fc(e, t, l), e = e.sibling; e !== null;)fc(e, t, l), e = e.sibling;
        }
        function Ju(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (n !== 4 && (n === 27 && Ol(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(Ju(e, t, l), e = e.sibling; e !== null;)Ju(e, t, l), e = e.sibling;
        }
        function cd(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var n = e.type, a = t.attributes; a.length;)t.removeAttributeNode(a[0]);
                Je(t, n, l), t[Ie] = e, t[at] = l;
            } catch (i) {
                Ne(e, e.return, i);
            }
        }
        var It = !1, Pe = !1, oc = !1, fd = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
        function R0(e, t) {
            if (e = e.containerInfo, Uc = hi, e = So(e), cr(e)) {
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
                        var d = 0, m = -1, g = -1, x = 0, U = 0, H = e, C = null;
                        t: for(;;){
                            for(var D; H !== l || a !== 0 && H.nodeType !== 3 || (m = d + a), H !== i || n !== 0 && H.nodeType !== 3 || (g = d + n), H.nodeType === 3 && (d += H.nodeValue.length), (D = H.firstChild) !== null;)C = H, H = D;
                            for(;;){
                                if (H === e) break t;
                                if (C === l && ++x === a && (m = d), C === i && ++U === n && (g = d), (D = H.nextSibling) !== null) break;
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
            for(zc = {
                focusedElem: e,
                selectionRange: l
            }, hi = !1, Ge = t; Ge !== null;)if (t = Ge, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ge = e;
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
                                var ae = Wl(l.type, a, l.elementType === l.type);
                                e = n.getSnapshotBeforeUpdate(ae, i), n.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (te) {
                                Ne(l, l.return, te);
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
        function od(e, t, l) {
            var n = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    bl(e, l), n & 4 && Aa(5, l);
                    break;
                case 1:
                    if (bl(e, l), n & 4) if (e = l.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (d) {
                        Ne(l, l.return, d);
                    }
                    else {
                        var a = Wl(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (d) {
                            Ne(l, l.return, d);
                        }
                    }
                    n & 64 && ad(l), n & 512 && Oa(l, l.return);
                    break;
                case 3:
                    if (bl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
                        if (t = null, l.child !== null) switch(l.child.tag){
                            case 27:
                            case 5:
                                t = l.child.stateNode;
                                break;
                            case 1:
                                t = l.child.stateNode;
                        }
                        try {
                            Yo(e, t);
                        } catch (d) {
                            Ne(l, l.return, d);
                        }
                    }
                    break;
                case 27:
                    t === null && n & 4 && cd(l);
                case 26:
                case 5:
                    bl(e, l), t === null && n & 4 && id(l), n & 512 && Oa(l, l.return);
                    break;
                case 12:
                    bl(e, l);
                    break;
                case 13:
                    bl(e, l), n & 4 && hd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = B0.bind(null, l), $0(e, l))));
                    break;
                case 22:
                    if (n = l.memoizedState !== null || It, !n) {
                        t = t !== null && t.memoizedState !== null || Pe, a = It;
                        var i = Pe;
                        It = n, (Pe = t) && !i ? Sl(e, l, (l.subtreeFlags & 8772) !== 0) : bl(e, l), It = a, Pe = i;
                    }
                    break;
                case 30:
                    break;
                default:
                    bl(e, l);
            }
        }
        function sd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, sd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ki(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Ce = null, rt = !1;
        function el(e, t, l) {
            for(l = l.child; l !== null;)dd(e, t, l), l = l.sibling;
        }
        function dd(e, t, l) {
            if (dt && typeof dt.onCommitFiberUnmount == "function") try {
                dt.onCommitFiberUnmount(Xn, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    Pe || Ht(l, t), el(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    Pe || Ht(l, t);
                    var n = Ce, a = rt;
                    Ol(l.type) && (Ce = l.stateNode, rt = !1), el(e, t, l), za(l.stateNode), Ce = n, rt = a;
                    break;
                case 5:
                    Pe || Ht(l, t);
                case 6:
                    if (n = Ce, a = rt, Ce = null, el(e, t, l), Ce = n, rt = a, Ce !== null) if (rt) try {
                        (Ce.nodeType === 9 ? Ce.body : Ce.nodeName === "HTML" ? Ce.ownerDocument.body : Ce).removeChild(l.stateNode);
                    } catch (i) {
                        Ne(l, t, i);
                    }
                    else try {
                        Ce.removeChild(l.stateNode);
                    } catch (i) {
                        Ne(l, t, i);
                    }
                    break;
                case 18:
                    Ce !== null && (rt ? (e = Ce, eh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ka(e)) : eh(Ce, l.stateNode));
                    break;
                case 4:
                    n = Ce, a = rt, Ce = l.stateNode.containerInfo, rt = !0, el(e, t, l), Ce = n, rt = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Pe || gl(2, l, t), Pe || gl(4, l, t), el(e, t, l);
                    break;
                case 1:
                    Pe || (Ht(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && ud(l, t, n)), el(e, t, l);
                    break;
                case 21:
                    el(e, t, l);
                    break;
                case 22:
                    Pe = (n = Pe) || l.memoizedState !== null, el(e, t, l), Pe = n;
                    break;
                default:
                    el(e, t, l);
            }
        }
        function hd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Ka(e);
            } catch (l) {
                Ne(t, t.return, l);
            }
        }
        function T0(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new fd), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new fd), t;
                default:
                    throw Error(f(435, e.tag));
            }
        }
        function sc(e, t) {
            var l = T0(e);
            t.forEach(function(n) {
                var a = w0.bind(null, e, n);
                l.has(n) || (l.add(n), n.then(a, a));
            });
        }
        function yt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var n = 0; n < l.length; n++){
                var a = l[n], i = e, d = t, m = d;
                e: for(; m !== null;){
                    switch(m.tag){
                        case 27:
                            if (Ol(m.type)) {
                                Ce = m.stateNode, rt = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Ce = m.stateNode, rt = !1;
                            break e;
                        case 3:
                        case 4:
                            Ce = m.stateNode.containerInfo, rt = !0;
                            break e;
                    }
                    m = m.return;
                }
                if (Ce === null) throw Error(f(160));
                dd(i, d, a), Ce = null, rt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)pd(t, e), t = t.sibling;
        }
        var Bt = null;
        function pd(e, t) {
            var l = e.alternate, n = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    yt(t, e), vt(e), n & 4 && (gl(3, e, e.return), Aa(3, e), gl(5, e, e.return));
                    break;
                case 1:
                    yt(t, e), vt(e), n & 512 && (Pe || l === null || Ht(l, l.return)), n & 64 && It && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                    break;
                case 26:
                    var a = Bt;
                    if (yt(t, e), vt(e), n & 512 && (Pe || l === null || Ht(l, l.return)), n & 4) {
                        var i = l !== null ? l.memoizedState : null;
                        if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
                            e: {
                                n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                                t: switch(n){
                                    case "title":
                                        i = a.getElementsByTagName("title")[0], (!i || i[$n] || i[Ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(i, a.querySelector("head > title"))), Je(i, n, l), i[Ie] = e, Qe(i), n = i;
                                        break e;
                                    case "link":
                                        var d = ch("link", "href", a).get(n + (l.href || ""));
                                        if (d) {
                                            for(var m = 0; m < d.length; m++)if (i = d[m], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                d.splice(m, 1);
                                                break t;
                                            }
                                        }
                                        i = a.createElement(n), Je(i, n, l), a.head.appendChild(i);
                                        break;
                                    case "meta":
                                        if (d = ch("meta", "content", a).get(n + (l.content || ""))) {
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
                        } else fh(a, e.type, e.stateNode);
                        else e.stateNode = rh(a, n, e.memoizedProps);
                        else i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? fh(a, e.type, e.stateNode) : rh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && rc(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    yt(t, e), vt(e), n & 512 && (Pe || l === null || Ht(l, l.return)), l !== null && n & 4 && rc(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (yt(t, e), vt(e), n & 512 && (Pe || l === null || Ht(l, l.return)), e.flags & 32) {
                        a = e.stateNode;
                        try {
                            pn(a, "");
                        } catch (D) {
                            Ne(e, e.return, D);
                        }
                    }
                    n & 4 && e.stateNode != null && (a = e.memoizedProps, rc(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (oc = !0);
                    break;
                case 6:
                    if (yt(t, e), vt(e), n & 4) {
                        if (e.stateNode === null) throw Error(f(162));
                        n = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = n;
                        } catch (D) {
                            Ne(e, e.return, D);
                        }
                    }
                    break;
                case 3:
                    if (oi = null, a = Bt, Bt = ci(t.containerInfo), yt(t, e), Bt = a, vt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Ka(t.containerInfo);
                    } catch (D) {
                        Ne(e, e.return, D);
                    }
                    oc && (oc = !1, md(e));
                    break;
                case 4:
                    n = Bt, Bt = ci(e.stateNode.containerInfo), yt(t, e), vt(e), Bt = n;
                    break;
                case 12:
                    yt(t, e), vt(e);
                    break;
                case 13:
                    yt(t, e), vt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (vc = zt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, sc(e, n)));
                    break;
                case 22:
                    a = e.memoizedState !== null;
                    var g = l !== null && l.memoizedState !== null, x = It, U = Pe;
                    if (It = x || a, Pe = U || g, yt(t, e), Pe = U, It = x, vt(e), n & 8192) e: for(t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || g || It || Pe || Fl(e)), l = null, t = e;;){
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
                    n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, sc(e, l))));
                    break;
                case 19:
                    yt(t, e), vt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, sc(e, n)));
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
                        if (rd(n)) {
                            l = n;
                            break;
                        }
                        n = n.return;
                    }
                    if (l == null) throw Error(f(160));
                    switch(l.tag){
                        case 27:
                            var a = l.stateNode, i = cc(e);
                            Ju(e, i, a);
                            break;
                        case 5:
                            var d = l.stateNode;
                            l.flags & 32 && (pn(d, ""), l.flags &= -33);
                            var m = cc(e);
                            Ju(e, m, d);
                            break;
                        case 3:
                        case 4:
                            var g = l.stateNode.containerInfo, x = cc(e);
                            fc(e, x, g);
                            break;
                        default:
                            throw Error(f(161));
                    }
                } catch (U) {
                    Ne(e, e.return, U);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function md(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                md(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function bl(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)od(e, t.alternate, t), t = t.sibling;
        }
        function Fl(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        gl(4, t, t.return), Fl(t);
                        break;
                    case 1:
                        Ht(t, t.return);
                        var l = t.stateNode;
                        typeof l.componentWillUnmount == "function" && ud(t, t.return, l), Fl(t);
                        break;
                    case 27:
                        za(t.stateNode);
                    case 26:
                    case 5:
                        Ht(t, t.return), Fl(t);
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
        function Sl(e, t, l) {
            for(l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var n = t.alternate, a = e, i = t, d = i.flags;
                switch(i.tag){
                    case 0:
                    case 11:
                    case 15:
                        Sl(a, i, l), Aa(4, i);
                        break;
                    case 1:
                        if (Sl(a, i, l), n = i, a = n.stateNode, typeof a.componentDidMount == "function") try {
                            a.componentDidMount();
                        } catch (x) {
                            Ne(n, n.return, x);
                        }
                        if (n = i, a = n.updateQueue, a !== null) {
                            var m = n.stateNode;
                            try {
                                var g = a.shared.hiddenCallbacks;
                                if (g !== null) for(a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++)Go(g[a], m);
                            } catch (x) {
                                Ne(n, n.return, x);
                            }
                        }
                        l && d & 64 && ad(i), Oa(i, i.return);
                        break;
                    case 27:
                        cd(i);
                    case 26:
                    case 5:
                        Sl(a, i, l), l && n === null && d & 4 && id(i), Oa(i, i.return);
                        break;
                    case 12:
                        Sl(a, i, l);
                        break;
                    case 13:
                        Sl(a, i, l), l && d & 4 && hd(a, i);
                        break;
                    case 22:
                        i.memoizedState === null && Sl(a, i, l), Oa(i, i.return);
                        break;
                    case 30:
                        break;
                    default:
                        Sl(a, i, l);
                }
                t = t.sibling;
            }
        }
        function dc(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && sa(l));
        }
        function hc(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && sa(e));
        }
        function kt(e, t, l, n) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)yd(e, t, l, n), t = t.sibling;
        }
        function yd(e, t, l, n) {
            var a = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    kt(e, t, l, n), a & 2048 && Aa(9, t);
                    break;
                case 1:
                    kt(e, t, l, n);
                    break;
                case 3:
                    kt(e, t, l, n), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && sa(e)));
                    break;
                case 12:
                    if (a & 2048) {
                        kt(e, t, l, n), e = t.stateNode;
                        try {
                            var i = t.memoizedProps, d = i.id, m = i.onPostCommit;
                            typeof m == "function" && m(d, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (g) {
                            Ne(t, t.return, g);
                        }
                    } else kt(e, t, l, n);
                    break;
                case 13:
                    kt(e, t, l, n);
                    break;
                case 23:
                    break;
                case 22:
                    i = t.stateNode, d = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? kt(e, t, l, n) : Na(e, t) : i._visibility & 2 ? kt(e, t, l, n) : (i._visibility |= 2, wn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && dc(d, t);
                    break;
                case 24:
                    kt(e, t, l, n), a & 2048 && hc(t.alternate, t);
                    break;
                default:
                    kt(e, t, l, n);
            }
        }
        function wn(e, t, l, n, a) {
            for(a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var i = e, d = t, m = l, g = n, x = d.flags;
                switch(d.tag){
                    case 0:
                    case 11:
                    case 15:
                        wn(i, d, m, g, a), Aa(8, d);
                        break;
                    case 23:
                        break;
                    case 22:
                        var U = d.stateNode;
                        d.memoizedState !== null ? U._visibility & 2 ? wn(i, d, m, g, a) : Na(i, d) : (U._visibility |= 2, wn(i, d, m, g, a)), a && x & 2048 && dc(d.alternate, d);
                        break;
                    case 24:
                        wn(i, d, m, g, a), a && x & 2048 && hc(d.alternate, d);
                        break;
                    default:
                        wn(i, d, m, g, a);
                }
                t = t.sibling;
            }
        }
        function Na(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var l = e, n = t, a = n.flags;
                switch(n.tag){
                    case 22:
                        Na(l, n), a & 2048 && dc(n.alternate, n);
                        break;
                    case 24:
                        Na(l, n), a & 2048 && hc(n.alternate, n);
                        break;
                    default:
                        Na(l, n);
                }
                t = t.sibling;
            }
        }
        var xa = 8192;
        function Un(e) {
            if (e.subtreeFlags & xa) for(e = e.child; e !== null;)vd(e), e = e.sibling;
        }
        function vd(e) {
            switch(e.tag){
                case 26:
                    Un(e), e.flags & xa && e.memoizedState !== null && f1(Bt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    Un(e);
                    break;
                case 3:
                case 4:
                    var t = Bt;
                    Bt = ci(e.stateNode.containerInfo), Un(e), Bt = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = xa, xa = 16777216, Un(e), xa = t) : Un(e));
                    break;
                default:
                    Un(e);
            }
        }
        function gd(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function Ma(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ge = n, Sd(n, e);
                }
                gd(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)bd(e), e = e.sibling;
        }
        function bd(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    Ma(e), e.flags & 2048 && gl(9, e, e.return);
                    break;
                case 3:
                    Ma(e);
                    break;
                case 12:
                    Ma(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, $u(e)) : Ma(e);
                    break;
                default:
                    Ma(e);
            }
        }
        function $u(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ge = n, Sd(n, e);
                }
                gd(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        gl(8, t, t.return), $u(t);
                        break;
                    case 22:
                        l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, $u(t));
                        break;
                    default:
                        $u(t);
                }
                e = e.sibling;
            }
        }
        function Sd(e, t) {
            for(; Ge !== null;){
                var l = Ge;
                switch(l.tag){
                    case 0:
                    case 11:
                    case 15:
                        gl(8, l, t);
                        break;
                    case 23:
                    case 22:
                        if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                            var n = l.memoizedState.cachePool.pool;
                            n != null && n.refCount++;
                        }
                        break;
                    case 24:
                        sa(l.memoizedState.cache);
                }
                if (n = l.child, n !== null) n.return = l, Ge = n;
                else e: for(l = e; Ge !== null;){
                    n = Ge;
                    var a = n.sibling, i = n.return;
                    if (sd(n), n === l) {
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
        var A0 = {
            getCacheForType: function(e) {
                var t = et(ke), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, O0 = typeof WeakMap == "function" ? WeakMap : Map, be = 0, xe = null, se = null, pe = 0, Se = 0, gt = null, El = !1, zn = !1, pc = !1, tl = 0, Ue = 0, _l = 0, Il = 0, mc = 0, xt = 0, Pn = 0, Ca = null, ct = null, yc = !1, vc = 0, Wu = 1 / 0, Fu = null, Rl = null, Ze = 0, Tl = null, qn = null, Hn = 0, gc = 0, bc = null, Ed = null, Da = 0, Sc = null;
        function bt() {
            if ((be & 2) !== 0 && pe !== 0) return pe & -pe;
            if (z.T !== null) {
                var e = An;
                return e !== 0 ? e : Nc();
            }
            return Pf();
        }
        function _d() {
            xt === 0 && (xt = (pe & 536870912) === 0 || ve ? Bf() : 536870912);
            var e = Nt.current;
            return e !== null && (e.flags |= 32), xt;
        }
        function St(e, t, l) {
            (e === xe && (Se === 2 || Se === 9) || e.cancelPendingCommit !== null) && (kn(e, 0), Al(e, pe, xt, !1)), Jn(e, l), ((be & 2) === 0 || e !== xe) && (e === xe && ((be & 2) === 0 && (Il |= l), Ue === 4 && Al(e, pe, xt, !1)), Lt(e));
        }
        function Rd(e, t, l) {
            if ((be & 6) !== 0) throw Error(f(327));
            var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Zn(e, t), a = n ? M0(e, t) : Rc(e, t, !0), i = n;
            do {
                if (a === 0) {
                    zn && !n && Al(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, i && !N0(l)) {
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
                                a = Ca;
                                var g = m.current.memoizedState.isDehydrated;
                                if (g && (kn(m, d).flags |= 256), d = Rc(m, d, !1), d !== 2) {
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
                        kn(e, 0), Al(e, t, 0, !0);
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
                                Al(n, t, xt, !El);
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
                            if (Al(n, t, xt, !El), fu(n, 0, !0) !== 0) break e;
                            n.timeoutHandle = Fd(Td.bind(null, n, l, ct, Fu, yc, t, xt, Il, Pn, El, i, 2, -0, 0), a);
                            break e;
                        }
                        Td(n, l, ct, Fu, yc, t, xt, Il, Pn, El, i, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            Lt(e);
        }
        function Td(e, t, l, n, a, i, d, m, g, x, U, H, C, D) {
            if (e.timeoutHandle = -1, H = t.subtreeFlags, (H & 8192 || (H & 16785408) === 16785408) && (Ha = {
                stylesheets: null,
                count: 0,
                unsuspend: c1
            }, vd(t), H = o1(), H !== null)) {
                e.cancelPendingCommit = H(Dd.bind(null, e, t, i, l, n, a, d, m, g, U, 1, C, D)), Al(e, i, d, !x);
                return;
            }
            Dd(e, t, i, l, n, a, d, m, g);
        }
        function N0(e) {
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
        function Al(e, t, l, n) {
            t &= ~mc, t &= ~Il, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
            for(var a = t; 0 < a;){
                var i = 31 - ht(a), d = 1 << i;
                n[i] = -1, a &= ~d;
            }
            l !== 0 && Uf(e, l, t);
        }
        function Iu() {
            return (be & 6) === 0 ? (Ba(0), !1) : !0;
        }
        function Ec() {
            if (se !== null) {
                if (Se === 0) var e = se.return;
                else e = se, Xt = Xl = null, Hr(e), Dn = null, _a = 0, e = se;
                for(; e !== null;)nd(e.alternate, e), e = e.return;
                se = null;
            }
        }
        function kn(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, Y0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Ec(), xe = e, se = l = Gt(e.current, null), pe = t, Se = 0, gt = null, El = !1, zn = Zn(e, t), pc = !1, Pn = xt = mc = Il = _l = Ue = 0, ct = Ca = null, yc = !1, (t & 8) !== 0 && (t |= t & 32);
            var n = e.entangledLanes;
            if (n !== 0) for(e = e.entanglements, n &= t; 0 < n;){
                var a = 31 - ht(n), i = 1 << a;
                t |= e[a], n &= ~i;
            }
            return tl = t, Eu(), l;
        }
        function Ad(e, t) {
            fe = null, z.H = Lu, t === ha || t === Cu ? (t = Qo(), Se = 3) : t === ko ? (t = Qo(), Se = 4) : Se = t === Ks ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, gt = t, se === null && (Ue = 1, Yu(e, Rt(t, e.current)));
        }
        function Od() {
            var e = z.H;
            return z.H = Lu, e === null ? Lu : e;
        }
        function Nd() {
            var e = z.A;
            return z.A = A0, e;
        }
        function _c() {
            Ue = 4, El || (pe & 4194048) !== pe && Nt.current !== null || (zn = !0), (_l & 134217727) === 0 && (Il & 134217727) === 0 || xe === null || Al(xe, pe, xt, !1);
        }
        function Rc(e, t, l) {
            var n = be;
            be |= 2;
            var a = Od(), i = Nd();
            (xe !== e || pe !== t) && (Fu = null, kn(e, t)), t = !1;
            var d = Ue;
            e: do try {
                if (Se !== 0 && se !== null) {
                    var m = se, g = gt;
                    switch(Se){
                        case 8:
                            Ec(), d = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Nt.current === null && (t = !0);
                            var x = Se;
                            if (Se = 0, gt = null, Ln(e, m, g, x), l && zn) {
                                d = 0;
                                break e;
                            }
                            break;
                        default:
                            x = Se, Se = 0, gt = null, Ln(e, m, g, x);
                    }
                }
                x0(), d = Ue;
                break;
            } catch (U) {
                Ad(e, U);
            }
            while (!0);
            return t && e.shellSuspendCounter++, Xt = Xl = null, be = n, z.H = a, z.A = i, se === null && (xe = null, pe = 0, Eu()), d;
        }
        function x0() {
            for(; se !== null;)xd(se);
        }
        function M0(e, t) {
            var l = be;
            be |= 2;
            var n = Od(), a = Nd();
            xe !== e || pe !== t ? (Fu = null, Wu = zt() + 500, kn(e, t)) : zn = Zn(e, t);
            e: do try {
                if (Se !== 0 && se !== null) {
                    t = se;
                    var i = gt;
                    t: switch(Se){
                        case 1:
                            Se = 0, gt = null, Ln(e, t, i, 1);
                            break;
                        case 2:
                        case 9:
                            if (Lo(i)) {
                                Se = 0, gt = null, Md(t);
                                break;
                            }
                            t = function() {
                                Se !== 2 && Se !== 9 || xe !== e || (Se = 7), Lt(e);
                            }, i.then(t, t);
                            break e;
                        case 3:
                            Se = 7;
                            break e;
                        case 4:
                            Se = 5;
                            break e;
                        case 7:
                            Lo(i) ? (Se = 0, gt = null, Md(t)) : (Se = 0, gt = null, Ln(e, t, i, 7));
                            break;
                        case 5:
                            var d = null;
                            switch(se.tag){
                                case 26:
                                    d = se.memoizedState;
                                case 5:
                                case 27:
                                    var m = se;
                                    if (!d || oh(d)) {
                                        Se = 0, gt = null;
                                        var g = m.sibling;
                                        if (g !== null) se = g;
                                        else {
                                            var x = m.return;
                                            x !== null ? (se = x, ei(x)) : se = null;
                                        }
                                        break t;
                                    }
                            }
                            Se = 0, gt = null, Ln(e, t, i, 5);
                            break;
                        case 6:
                            Se = 0, gt = null, Ln(e, t, i, 6);
                            break;
                        case 8:
                            Ec(), Ue = 6;
                            break e;
                        default:
                            throw Error(f(462));
                    }
                }
                C0();
                break;
            } catch (U) {
                Ad(e, U);
            }
            while (!0);
            return Xt = Xl = null, z.H = n, z.A = a, be = l, se !== null ? 0 : (xe = null, pe = 0, Eu(), Ue);
        }
        function C0() {
            for(; se !== null && !Fp();)xd(se);
        }
        function xd(e) {
            var t = td(e.alternate, e, tl);
            e.memoizedProps = e.pendingProps, t === null ? ei(e) : se = t;
        }
        function Md(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Js(l, t, t.pendingProps, t.type, void 0, pe);
                    break;
                case 11:
                    t = Js(l, t, t.pendingProps, t.type.render, t.ref, pe);
                    break;
                case 5:
                    Hr(t);
                default:
                    nd(l, t), t = se = Co(t, tl), t = td(l, t, tl);
            }
            e.memoizedProps = e.pendingProps, t === null ? ei(e) : se = t;
        }
        function Ln(e, t, l, n) {
            Xt = Xl = null, Hr(t), Dn = null, _a = 0;
            var a = t.return;
            try {
                if (b0(e, a, t, l, pe)) {
                    Ue = 1, Yu(e, Rt(l, e.current)), se = null;
                    return;
                }
            } catch (i) {
                if (a !== null) throw se = a, i;
                Ue = 1, Yu(e, Rt(l, e.current)), se = null;
                return;
            }
            t.flags & 32768 ? (ve || n === 1 ? e = !0 : zn || (pe & 536870912) !== 0 ? e = !1 : (El = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Nt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Cd(t, e)) : ei(t);
        }
        function ei(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Cd(t, El);
                    return;
                }
                e = t.return;
                var l = E0(t.alternate, t, tl);
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
        function Cd(e, t) {
            do {
                var l = _0(e.alternate, e);
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
        function Dd(e, t, l, n, a, i, d, m, g) {
            e.cancelPendingCommit = null;
            do ti();
            while (Ze !== 0);
            if ((be & 6) !== 0) throw Error(f(327));
            if (t !== null) {
                if (t === e.current) throw Error(f(177));
                if (i = t.lanes | t.childLanes, i |= hr, cm(e, l, i, d, m, g), e === xe && (se = xe = null, pe = 0), qn = t, Tl = e, Hn = l, gc = i, bc = a, Ed = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, U0(iu, function() {
                    return Pd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                    n = z.T, z.T = null, a = Y.p, Y.p = 2, d = be, be |= 4;
                    try {
                        R0(e, t, l);
                    } finally{
                        be = d, Y.p = a, z.T = n;
                    }
                }
                Ze = 1, Bd(), wd(), Ud();
            }
        }
        function Bd() {
            if (Ze === 1) {
                Ze = 0;
                var e = Tl, t = qn, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = z.T, z.T = null;
                    var n = Y.p;
                    Y.p = 2;
                    var a = be;
                    be |= 4;
                    try {
                        pd(t, e);
                        var i = zc, d = So(e.containerInfo), m = i.focusedElem, g = i.selectionRange;
                        if (d !== m && m && m.ownerDocument && bo(m.ownerDocument.documentElement, m)) {
                            if (g !== null && cr(m)) {
                                var x = g.start, U = g.end;
                                if (U === void 0 && (U = x), "selectionStart" in m) m.selectionStart = x, m.selectionEnd = Math.min(U, m.value.length);
                                else {
                                    var H = m.ownerDocument || document, C = H && H.defaultView || window;
                                    if (C.getSelection) {
                                        var D = C.getSelection(), ae = m.textContent.length, te = Math.min(g.start, ae), Te = g.end === void 0 ? te : Math.min(g.end, ae);
                                        !D.extend && te > Te && (d = Te, Te = te, te = d);
                                        var A = go(m, te), _ = go(m, Te);
                                        if (A && _ && (D.rangeCount !== 1 || D.anchorNode !== A.node || D.anchorOffset !== A.offset || D.focusNode !== _.node || D.focusOffset !== _.offset)) {
                                            var N = H.createRange();
                                            N.setStart(A.node, A.offset), D.removeAllRanges(), te > Te ? (D.addRange(N), D.extend(_.node, _.offset)) : (N.setEnd(_.node, _.offset), D.addRange(N));
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
                        hi = !!Uc, zc = Uc = null;
                    } finally{
                        be = a, Y.p = n, z.T = l;
                    }
                }
                e.current = t, Ze = 2;
            }
        }
        function wd() {
            if (Ze === 2) {
                Ze = 0;
                var e = Tl, t = qn, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = z.T, z.T = null;
                    var n = Y.p;
                    Y.p = 2;
                    var a = be;
                    be |= 4;
                    try {
                        od(e, t.alternate, t);
                    } finally{
                        be = a, Y.p = n, z.T = l;
                    }
                }
                Ze = 3;
            }
        }
        function Ud() {
            if (Ze === 4 || Ze === 3) {
                Ze = 0, Ip();
                var e = Tl, t = qn, l = Hn, n = Ed;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ze = 5 : (Ze = 0, qn = Tl = null, zd(e, e.pendingLanes));
                var a = e.pendingLanes;
                if (a === 0 && (Rl = null), ji(l), t = t.stateNode, dt && typeof dt.onCommitFiberRoot == "function") try {
                    dt.onCommitFiberRoot(Xn, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (n !== null) {
                    t = z.T, a = Y.p, Y.p = 2, z.T = null;
                    try {
                        for(var i = e.onRecoverableError, d = 0; d < n.length; d++){
                            var m = n[d];
                            i(m.value, {
                                componentStack: m.stack
                            });
                        }
                    } finally{
                        z.T = t, Y.p = a;
                    }
                }
                (Hn & 3) !== 0 && ti(), Lt(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === Sc ? Da++ : (Da = 0, Sc = e) : Da = 0, Ba(0);
            }
        }
        function zd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, sa(t)));
        }
        function ti(e) {
            return Bd(), wd(), Ud(), Pd();
        }
        function Pd() {
            if (Ze !== 5) return !1;
            var e = Tl, t = gc;
            gc = 0;
            var l = ji(Hn), n = z.T, a = Y.p;
            try {
                Y.p = 32 > l ? 32 : l, z.T = null, l = bc, bc = null;
                var i = Tl, d = Hn;
                if (Ze = 0, qn = Tl = null, Hn = 0, (be & 6) !== 0) throw Error(f(331));
                var m = be;
                if (be |= 4, bd(i.current), yd(i, i.current, d, l), be = m, Ba(0, !1), dt && typeof dt.onPostCommitFiberRoot == "function") try {
                    dt.onPostCommitFiberRoot(Xn, i);
                } catch  {}
                return !0;
            } finally{
                Y.p = a, z.T = n, zd(e, t);
            }
        }
        function qd(e, t, l) {
            t = Rt(l, t), t = Fr(e.stateNode, t, 2), e = pl(e, t, 2), e !== null && (Jn(e, 2), Lt(e));
        }
        function Ne(e, t, l) {
            if (e.tag === 3) qd(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    qd(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Rl === null || !Rl.has(n))) {
                        e = Rt(l, e), l = js(2), n = pl(t, l, 2), n !== null && (Qs(l, n, t, e), Jn(n, 2), Lt(n));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Tc(e, t, l) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new O0;
                var a = new Set;
                n.set(t, a);
            } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
            a.has(l) || (pc = !0, a.add(l), e = D0.bind(null, e, t, l), t.then(e, e));
        }
        function D0(e, t, l) {
            var n = e.pingCache;
            n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, xe === e && (pe & l) === l && (Ue === 4 || Ue === 3 && (pe & 62914560) === pe && 300 > zt() - vc ? (be & 2) === 0 && kn(e, 0) : mc |= l, Pn === pe && (Pn = 0)), Lt(e);
        }
        function Hd(e, t) {
            t === 0 && (t = wf()), e = En(e, t), e !== null && (Jn(e, t), Lt(e));
        }
        function B0(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), Hd(e, l);
        }
        function w0(e, t) {
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
            n !== null && n.delete(t), Hd(e, l);
        }
        function U0(e, t) {
            return qi(e, t);
        }
        var li = null, jn = null, Ac = !1, ni = !1, Oc = !1, en = 0;
        function Lt(e) {
            e !== jn && e.next === null && (jn === null ? li = jn = e : jn = jn.next = e), ni = !0, Ac || (Ac = !0, P0());
        }
        function Ba(e, t) {
            if (!Oc && ni) {
                Oc = !0;
                do for(var l = !1, n = li; n !== null;){
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var i = 0;
                        else {
                            var d = n.suspendedLanes, m = n.pingedLanes;
                            i = (1 << 31 - ht(42 | e) + 1) - 1, i &= a & ~(d & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                        }
                        i !== 0 && (l = !0, Qd(n, i));
                    } else i = pe, i = fu(n, n === xe ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (i & 3) === 0 || Zn(n, i) || (l = !0, Qd(n, i));
                    n = n.next;
                }
                while (l);
                Oc = !1;
            }
        }
        function z0() {
            kd();
        }
        function kd() {
            ni = Ac = !1;
            var e = 0;
            en !== 0 && (G0() && (e = en), en = 0);
            for(var t = zt(), l = null, n = li; n !== null;){
                var a = n.next, i = Ld(n, t);
                i === 0 ? (n.next = null, l === null ? li = a : l.next = a, a === null && (jn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ni = !0)), n = a;
            }
            Ba(e);
        }
        function Ld(e, t) {
            for(var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;){
                var d = 31 - ht(i), m = 1 << d, g = a[d];
                g === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[d] = rm(m, t)) : g <= t && (e.expiredLanes |= m), i &= ~m;
            }
            if (t = xe, l = pe, l = fu(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (Se === 2 || Se === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && Hi(n), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || Zn(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(n !== null && Hi(n), ji(l)){
                    case 2:
                    case 8:
                        l = Cf;
                        break;
                    case 32:
                        l = iu;
                        break;
                    case 268435456:
                        l = Df;
                        break;
                    default:
                        l = iu;
                }
                return n = jd.bind(null, e), l = qi(l, n), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return n !== null && n !== null && Hi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function jd(e, t) {
            if (Ze !== 0 && Ze !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (ti() && e.callbackNode !== l) return null;
            var n = pe;
            return n = fu(e, e === xe ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (Rd(e, n, t), Ld(e, zt()), e.callbackNode != null && e.callbackNode === l ? jd.bind(null, e) : null);
        }
        function Qd(e, t) {
            if (ti()) return null;
            Rd(e, t, !0);
        }
        function P0() {
            V0(function() {
                (be & 6) !== 0 ? qi(Mf, z0) : kd();
            });
        }
        function Nc() {
            return en === 0 && (en = Bf()), en;
        }
        function Kd(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pu("" + e);
        }
        function Gd(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function q0(e, t, l, n, a) {
            if (t === "submit" && l && l.stateNode === a) {
                var i = Kd((a[at] || null).action), d = n.submitter;
                d && (t = (t = d[at] || null) ? Kd(t.formAction) : d.getAttribute("formAction"), t !== null && (i = t, d = null));
                var m = new gu("action", "action", null, n, a);
                e.push({
                    event: m,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (en !== 0) {
                                        var g = d ? Gd(a, d) : new FormData(a);
                                        Xr(l, {
                                            pending: !0,
                                            data: g,
                                            method: a.method,
                                            action: i
                                        }, null, g);
                                    }
                                } else typeof i == "function" && (m.preventDefault(), g = d ? Gd(a, d) : new FormData(a), Xr(l, {
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
            var Mc = dr[xc], H0 = Mc.toLowerCase(), k0 = Mc[0].toUpperCase() + Mc.slice(1);
            Dt(H0, "on" + k0);
        }
        Dt(Ro, "onAnimationEnd"), Dt(To, "onAnimationIteration"), Dt(Ao, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(l0, "onTransitionRun"), Dt(n0, "onTransitionStart"), Dt(a0, "onTransitionCancel"), Dt(Oo, "onTransitionEnd"), sn("onMouseEnter", [
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
        ]), Hl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Hl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Hl("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), Hl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Hl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Hl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var wa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), L0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wa));
        function Yd(e, t) {
            t = (t & 4) !== 0;
            for(var l = 0; l < e.length; l++){
                var n = e[l], a = n.event;
                n = n.listeners;
                e: {
                    var i = void 0;
                    if (t) for(var d = n.length - 1; 0 <= d; d--){
                        var m = n[d], g = m.instance, x = m.currentTarget;
                        if (m = m.listener, g !== i && a.isPropagationStopped()) break e;
                        i = m, a.currentTarget = x;
                        try {
                            i(a);
                        } catch (U) {
                            Gu(U);
                        }
                        a.currentTarget = null, i = g;
                    }
                    else for(d = 0; d < n.length; d++){
                        if (m = n[d], g = m.instance, x = m.currentTarget, m = m.listener, g !== i && a.isPropagationStopped()) break e;
                        i = m, a.currentTarget = x;
                        try {
                            i(a);
                        } catch (U) {
                            Gu(U);
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
            l.has(n) || (Vd(t, e, 2, !1), l.add(n));
        }
        function Cc(e, t, l) {
            var n = 0;
            t && (n |= 4), Vd(l, e, n, t);
        }
        var ai = "_reactListening" + Math.random().toString(36).slice(2);
        function Dc(e) {
            if (!e[ai]) {
                e[ai] = !0, Hf.forEach(function(l) {
                    l !== "selectionchange" && (L0.has(l) || Cc(l, !1, e), Cc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[ai] || (t[ai] = !0, Cc("selectionchange", !1, t));
            }
        }
        function Vd(e, t, l, n) {
            switch(yh(t)){
                case 2:
                    var a = h1;
                    break;
                case 8:
                    a = p1;
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
                        if (d = cn(m), d === null) return;
                        if (g = d.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                            n = i = d;
                            continue e;
                        }
                        m = m.parentNode;
                    }
                }
                n = n.return;
            }
            Ff(function() {
                var x = i, U = Wi(l), H = [];
                e: {
                    var C = No.get(e);
                    if (C !== void 0) {
                        var D = gu, ae = e;
                        switch(e){
                            case "keypress":
                                if (yu(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                D = Um;
                                break;
                            case "focusin":
                                ae = "focus", D = nr;
                                break;
                            case "focusout":
                                ae = "blur", D = nr;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                D = nr;
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
                                D = to;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                D = _m;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                D = qm;
                                break;
                            case Ro:
                            case To:
                            case Ao:
                                D = Am;
                                break;
                            case Oo:
                                D = km;
                                break;
                            case "scroll":
                            case "scrollend":
                                D = Sm;
                                break;
                            case "wheel":
                                D = jm;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                D = Nm;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                D = no;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                D = Km;
                        }
                        var te = (t & 4) !== 0, Te = !te && (e === "scroll" || e === "scrollend"), A = te ? C !== null ? C + "Capture" : null : C;
                        te = [];
                        for(var _ = x, N; _ !== null;){
                            var q = _;
                            if (N = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || N === null || A === null || (q = Fn(_, A), q != null && te.push(Ua(_, q, N))), Te) break;
                            _ = _.return;
                        }
                        0 < te.length && (C = new D(C, ae, null, l, U), H.push({
                            event: C,
                            listeners: te
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (C = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", C && l !== $i && (ae = l.relatedTarget || l.fromElement) && (cn(ae) || ae[rn])) break e;
                        if ((D || C) && (C = U.window === U ? U : (C = U.ownerDocument) ? C.defaultView || C.parentWindow : window, D ? (ae = l.relatedTarget || l.toElement, D = x, ae = ae ? cn(ae) : null, ae !== null && (Te = s(ae), te = ae.tag, ae !== Te || te !== 5 && te !== 27 && te !== 6) && (ae = null)) : (D = null, ae = x), D !== ae)) {
                            if (te = to, q = "onMouseLeave", A = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (te = no, q = "onPointerLeave", A = "onPointerEnter", _ = "pointer"), Te = D == null ? C : Wn(D), N = ae == null ? C : Wn(ae), C = new te(q, _ + "leave", D, l, U), C.target = Te, C.relatedTarget = N, q = null, cn(U) === x && (te = new te(A, _ + "enter", ae, l, U), te.target = N, te.relatedTarget = Te, q = te), Te = q, D && ae) t: {
                                for(te = D, A = ae, _ = 0, N = te; N; N = Qn(N))_++;
                                for(N = 0, q = A; q; q = Qn(q))N++;
                                for(; 0 < _ - N;)te = Qn(te), _--;
                                for(; 0 < N - _;)A = Qn(A), N--;
                                for(; _--;){
                                    if (te === A || A !== null && te === A.alternate) break t;
                                    te = Qn(te), A = Qn(A);
                                }
                                te = null;
                            }
                            else te = null;
                            D !== null && Xd(H, C, D, te, !1), ae !== null && Te !== null && Xd(H, Te, ae, te, !0);
                        }
                    }
                    e: {
                        if (C = x ? Wn(x) : window, D = C.nodeName && C.nodeName.toLowerCase(), D === "select" || D === "input" && C.type === "file") var J = so;
                        else if (fo(C)) if (ho) J = Im;
                        else {
                            J = Wm;
                            var oe = $m;
                        }
                        else D = C.nodeName, !D || D.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? x && Ji(x.elementType) && (J = so) : J = Fm;
                        if (J && (J = J(e, x))) {
                            oo(H, J, l, U);
                            break e;
                        }
                        oe && oe(e, C, x), e === "focusout" && x && C.type === "number" && x.memoizedProps.value != null && Zi(C, "number", C.value);
                    }
                    switch(oe = x ? Wn(x) : window, e){
                        case "focusin":
                            (fo(oe) || oe.contentEditable === "true") && (gn = oe, fr = x, ia = null);
                            break;
                        case "focusout":
                            ia = fr = gn = null;
                            break;
                        case "mousedown":
                            or = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            or = !1, Eo(H, l, U);
                            break;
                        case "selectionchange":
                            if (t0) break;
                        case "keydown":
                        case "keyup":
                            Eo(H, l, U);
                    }
                    var W;
                    if (ur) e: {
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
                    else vn ? ro(e, l) && (le = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (le = "onCompositionStart");
                    le && (ao && l.locale !== "ko" && (vn || le !== "onCompositionStart" ? le === "onCompositionEnd" && vn && (W = If()) : (ol = U, er = "value" in ol ? ol.value : ol.textContent, vn = !0)), oe = ui(x, le), 0 < oe.length && (le = new lo(le, e, null, l, U), H.push({
                        event: le,
                        listeners: oe
                    }), W ? le.data = W : (W = co(l), W !== null && (le.data = W)))), (W = Ym ? Vm(e, l) : Xm(e, l)) && (le = ui(x, "onBeforeInput"), 0 < le.length && (oe = new lo("onBeforeInput", "beforeinput", null, l, U), H.push({
                        event: oe,
                        listeners: le
                    }), oe.data = W)), q0(H, e, x, l, U);
                }
                Yd(H, t);
            });
        }
        function Ua(e, t, l) {
            return {
                instance: e,
                listener: t,
                currentTarget: l
            };
        }
        function ui(e, t) {
            for(var l = t + "Capture", n = []; e !== null;){
                var a = e, i = a.stateNode;
                if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = Fn(e, l), a != null && n.unshift(Ua(e, a, i)), a = Fn(e, t), a != null && n.push(Ua(e, a, i))), e.tag === 3) return n;
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
        function Xd(e, t, l, n, a) {
            for(var i = t._reactName, d = []; l !== null && l !== n;){
                var m = l, g = m.alternate, x = m.stateNode;
                if (m = m.tag, g !== null && g === n) break;
                m !== 5 && m !== 26 && m !== 27 || x === null || (g = x, a ? (x = Fn(l, i), x != null && d.unshift(Ua(l, x, g))) : a || (x = Fn(l, i), x != null && d.push(Ua(l, x, g)))), l = l.return;
            }
            d.length !== 0 && e.push({
                event: t,
                listeners: d
            });
        }
        var j0 = /\r\n?/g, Q0 = /\u0000|\uFFFD/g;
        function Zd(e) {
            return (typeof e == "string" ? e : "" + e).replace(j0, `
`).replace(Q0, "");
        }
        function Jd(e, t) {
            return t = Zd(t), Zd(e) === t;
        }
        function ii() {}
        function Re(e, t, l, n, a, i) {
            switch(l){
                case "children":
                    typeof n == "string" ? t === "body" || t === "textarea" && n === "" || pn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && pn(e, "" + n);
                    break;
                case "className":
                    su(e, "class", n);
                    break;
                case "tabIndex":
                    su(e, "tabindex", n);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    su(e, l, n);
                    break;
                case "style":
                    $f(e, n, i);
                    break;
                case "data":
                    if (t !== "object") {
                        su(e, "data", n);
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
                    n = pu("" + n), e.setAttribute(l, n);
                    break;
                case "action":
                case "formAction":
                    if (typeof n == "function") {
                        e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof i == "function" && (l === "formAction" ? (t !== "input" && Re(e, t, "name", a.name, a, null), Re(e, t, "formEncType", a.formEncType, a, null), Re(e, t, "formMethod", a.formMethod, a, null), Re(e, t, "formTarget", a.formTarget, a, null)) : (Re(e, t, "encType", a.encType, a, null), Re(e, t, "method", a.method, a, null), Re(e, t, "target", a.target, a, null)));
                    if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                        e.removeAttribute(l);
                        break;
                    }
                    n = pu("" + n), e.setAttribute(l, n);
                    break;
                case "onClick":
                    n != null && (e.onclick = ii);
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
                    l = pu("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
                    de("beforetoggle", e), de("toggle", e), ou(e, "popover", n);
                    break;
                case "xlinkActuate":
                    Qt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
                    break;
                case "xlinkArcrole":
                    Qt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
                    break;
                case "xlinkRole":
                    Qt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
                    break;
                case "xlinkShow":
                    Qt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
                    break;
                case "xlinkTitle":
                    Qt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
                    break;
                case "xlinkType":
                    Qt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
                    break;
                case "xmlBase":
                    Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
                    break;
                case "xmlLang":
                    Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
                    break;
                case "xmlSpace":
                    Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
                    break;
                case "is":
                    ou(e, "is", n);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = gm.get(l) || l, ou(e, l, n));
            }
        }
        function wc(e, t, l, n, a, i) {
            switch(l){
                case "style":
                    $f(e, n, i);
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
                    typeof n == "string" ? pn(e, n) : (typeof n == "number" || typeof n == "bigint") && pn(e, "" + n);
                    break;
                case "onScroll":
                    n != null && de("scroll", e);
                    break;
                case "onScrollEnd":
                    n != null && de("scrollend", e);
                    break;
                case "onClick":
                    n != null && (e.onclick = ii);
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
                    if (!kf.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[at] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
                            typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
                            break e;
                        }
                        l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : ou(e, l, n);
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
                                Re(e, t, i, d, l, null);
                        }
                    }
                    a && Re(e, t, "srcSet", l.srcSet, l, null), n && Re(e, t, "src", l.src, l, null);
                    return;
                case "input":
                    de("invalid", e);
                    var m = i = d = a = null, g = null, x = null;
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
                                x = U;
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
                                Re(e, t, n, U, l, null);
                        }
                    }
                    Vf(e, i, m, g, x, d, a, !1), du(e);
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
                            Re(e, t, a, m, l, null);
                    }
                    t = i, l = d, e.multiple = !!n, t != null ? hn(e, !!n, t, !1) : l != null && hn(e, !!n, l, !0);
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
                            Re(e, t, d, m, l, null);
                    }
                    Zf(e, n, a, i), du(e);
                    return;
                case "option":
                    for(g in l)if (l.hasOwnProperty(g) && (n = l[g], n != null)) switch(g){
                        case "selected":
                            e.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default:
                            Re(e, t, g, n, l, null);
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
                    for(n = 0; n < wa.length; n++)de(wa[n], e);
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
                            throw Error(f(137, t));
                        default:
                            Re(e, t, x, n, l, null);
                    }
                    return;
                default:
                    if (Ji(t)) {
                        for(U in l)l.hasOwnProperty(U) && (n = l[U], n !== void 0 && wc(e, t, U, n, l, void 0));
                        return;
                    }
            }
            for(m in l)l.hasOwnProperty(m) && (n = l[m], n != null && Re(e, t, m, n, l, null));
        }
        function K0(e, t, l, n) {
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
                    var a = null, i = null, d = null, m = null, g = null, x = null, U = null;
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
                                n.hasOwnProperty(D) || Re(e, t, D, null, n, H);
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
                                U = D;
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
                                D !== H && Re(e, t, C, D, n, H);
                        }
                    }
                    Xi(e, d, m, g, x, U, i, a);
                    return;
                case "select":
                    D = d = m = C = null;
                    for(i in l)if (g = l[i], l.hasOwnProperty(i) && g != null) switch(i){
                        case "value":
                            break;
                        case "multiple":
                            D = g;
                        default:
                            n.hasOwnProperty(i) || Re(e, t, i, null, n, g);
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
                            i !== g && Re(e, t, a, i, n, g);
                    }
                    t = m, l = d, n = D, C != null ? hn(e, !!l, C, !1) : !!n != !!l && (t != null ? hn(e, !!l, t, !0) : hn(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    D = C = null;
                    for(m in l)if (a = l[m], l.hasOwnProperty(m) && a != null && !n.hasOwnProperty(m)) switch(m){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Re(e, t, m, null, n, a);
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
                            a !== i && Re(e, t, d, a, n, i);
                    }
                    Xf(e, C, D);
                    return;
                case "option":
                    for(var ae in l)if (C = l[ae], l.hasOwnProperty(ae) && C != null && !n.hasOwnProperty(ae)) switch(ae){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Re(e, t, ae, null, n, C);
                    }
                    for(g in n)if (C = n[g], D = l[g], n.hasOwnProperty(g) && C !== D && (C != null || D != null)) switch(g){
                        case "selected":
                            e.selected = C && typeof C != "function" && typeof C != "symbol";
                            break;
                        default:
                            Re(e, t, g, C, n, D);
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
                    for(var te in l)C = l[te], l.hasOwnProperty(te) && C != null && !n.hasOwnProperty(te) && Re(e, t, te, null, n, C);
                    for(x in n)if (C = n[x], D = l[x], n.hasOwnProperty(x) && C !== D && (C != null || D != null)) switch(x){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (C != null) throw Error(f(137, t));
                            break;
                        default:
                            Re(e, t, x, C, n, D);
                    }
                    return;
                default:
                    if (Ji(t)) {
                        for(var Te in l)C = l[Te], l.hasOwnProperty(Te) && C !== void 0 && !n.hasOwnProperty(Te) && wc(e, t, Te, void 0, n, C);
                        for(U in n)C = n[U], D = l[U], !n.hasOwnProperty(U) || C === D || C === void 0 && D === void 0 || wc(e, t, U, C, n, D);
                        return;
                    }
            }
            for(var A in l)C = l[A], l.hasOwnProperty(A) && C != null && !n.hasOwnProperty(A) && Re(e, t, A, null, n, C);
            for(H in n)C = n[H], D = l[H], !n.hasOwnProperty(H) || C === D || C == null && D == null || Re(e, t, H, C, n, D);
        }
        var Uc = null, zc = null;
        function ri(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function $d(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function Wd(e, t) {
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
        function G0() {
            var e = window.event;
            return e && e.type === "popstate" ? e === qc ? !1 : (qc = e, !0) : (qc = null, !1);
        }
        var Fd = typeof setTimeout == "function" ? setTimeout : void 0, Y0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Id = typeof Promise == "function" ? Promise : void 0, V0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Id < "u" ? function(e) {
            return Id.resolve(null).then(e).catch(X0);
        } : Fd;
        function X0(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Ol(e) {
            return e === "head";
        }
        function eh(e, t) {
            var l = t, n = 0, a = 0;
            do {
                var i = l.nextSibling;
                if (e.removeChild(l), i && i.nodeType === 8) if (l = i.data, l === "/$") {
                    if (0 < n && 8 > n) {
                        l = n;
                        var d = e.ownerDocument;
                        if (l & 1 && za(d.documentElement), l & 2 && za(d.body), l & 4) for(l = d.head, za(l), d = l.firstChild; d;){
                            var m = d.nextSibling, g = d.nodeName;
                            d[$n] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && d.rel.toLowerCase() === "stylesheet" || l.removeChild(d), d = m;
                        }
                    }
                    if (a === 0) {
                        e.removeChild(i), Ka(t);
                        return;
                    }
                    a--;
                } else l === "$" || l === "$?" || l === "$!" ? a++ : n = l.charCodeAt(0) - 48;
                else n = 0;
                l = i;
            }while (l);
            Ka(t);
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
        function Z0(e, t, l, n) {
            for(; e.nodeType === 1;){
                var a = l;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (n) {
                    if (!e[$n]) switch(t){
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
                if (e = wt(e.nextSibling), e === null) break;
            }
            return null;
        }
        function J0(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = wt(e.nextSibling), e === null)) return null;
            return e;
        }
        function kc(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function $0(e, t) {
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
        var Lc = null;
        function th(e) {
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
        function lh(e, t, l) {
            switch(t = ri(l), e){
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
        function za(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            Ki(e);
        }
        var Mt = new Map, nh = new Set;
        function ci(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var ll = Y.d;
        Y.d = {
            f: W0,
            r: F0,
            D: I0,
            C: e1,
            L: t1,
            m: l1,
            X: a1,
            S: n1,
            M: u1
        };
        function W0() {
            var e = ll.f(), t = Iu();
            return e || t;
        }
        function F0(e) {
            var t = fn(e);
            t !== null && t.tag === 5 && t.type === "form" ? Rs(t) : ll.r(e);
        }
        var Kn = typeof document > "u" ? null : document;
        function ah(e, t, l) {
            var n = Kn;
            if (n && typeof t == "string" && t) {
                var a = _t(t);
                a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), nh.has(a) || (nh.add(a), e = {
                    rel: e,
                    crossOrigin: l,
                    href: t
                }, n.querySelector(a) === null && (t = n.createElement("link"), Je(t, "link", e), Qe(t), n.head.appendChild(t)));
            }
        }
        function I0(e) {
            ll.D(e), ah("dns-prefetch", e, null);
        }
        function e1(e, t) {
            ll.C(e, t), ah("preconnect", e, t);
        }
        function t1(e, t, l) {
            ll.L(e, t, l);
            var n = Kn;
            if (n && e && t) {
                var a = 'link[rel="preload"][as="' + _t(t) + '"]';
                t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + _t(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + _t(l.imageSizes) + '"]')) : a += '[href="' + _t(e) + '"]';
                var i = a;
                switch(t){
                    case "style":
                        i = Gn(e);
                        break;
                    case "script":
                        i = Yn(e);
                }
                Mt.has(i) || (e = S({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), Mt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Pa(i)) || t === "script" && n.querySelector(qa(i)) || (t = n.createElement("link"), Je(t, "link", e), Qe(t), n.head.appendChild(t)));
            }
        }
        function l1(e, t) {
            ll.m(e, t);
            var l = Kn;
            if (l && e) {
                var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + _t(n) + '"][href="' + _t(e) + '"]', i = a;
                switch(n){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        i = Yn(e);
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
                    n = l.createElement("link"), Je(n, "link", e), Qe(n), l.head.appendChild(n);
                }
            }
        }
        function n1(e, t, l) {
            ll.S(e, t, l);
            var n = Kn;
            if (n && e) {
                var a = on(n).hoistableStyles, i = Gn(e);
                t = t || "default";
                var d = a.get(i);
                if (!d) {
                    var m = {
                        loading: 0,
                        preload: null
                    };
                    if (d = n.querySelector(Pa(i))) m.loading = 5;
                    else {
                        e = S({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = Mt.get(i)) && jc(e, l);
                        var g = d = n.createElement("link");
                        Qe(g), Je(g, "link", e), g._p = new Promise(function(x, U) {
                            g.onload = x, g.onerror = U;
                        }), g.addEventListener("load", function() {
                            m.loading |= 1;
                        }), g.addEventListener("error", function() {
                            m.loading |= 2;
                        }), m.loading |= 4, fi(d, t, n);
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
        function a1(e, t) {
            ll.X(e, t);
            var l = Kn;
            if (l && e) {
                var n = on(l).hoistableScripts, a = Yn(e), i = n.get(a);
                i || (i = l.querySelector(qa(a)), i || (e = S({
                    src: e,
                    async: !0
                }, t), (t = Mt.get(a)) && Qc(e, t), i = l.createElement("script"), Qe(i), Je(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function u1(e, t) {
            ll.M(e, t);
            var l = Kn;
            if (l && e) {
                var n = on(l).hoistableScripts, a = Yn(e), i = n.get(a);
                i || (i = l.querySelector(qa(a)), i || (e = S({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Mt.get(a)) && Qc(e, t), i = l.createElement("script"), Qe(i), Je(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function uh(e, t, l, n) {
            var a = (a = ie.current) ? ci(a) : null;
            if (!a) throw Error(f(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Gn(l.href), l = on(a).hoistableStyles, n = l.get(t), n || (n = {
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
                        var i = on(a).hoistableStyles, d = i.get(e);
                        if (d || (a = a.ownerDocument || a, d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, i.set(e, d), (i = a.querySelector(Pa(e))) && !i._p && (d.instance = i, d.state.loading = 5), Mt.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, Mt.set(e, l), i || i1(a, e, l, d.state))), t && n === null) throw Error(f(528, ""));
                        return d;
                    }
                    if (t && n !== null) throw Error(f(529, ""));
                    return null;
                case "script":
                    return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Yn(l), l = on(a).hoistableScripts, n = l.get(t), n || (n = {
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
        function Gn(e) {
            return 'href="' + _t(e) + '"';
        }
        function Pa(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function ih(e) {
            return S({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function i1(e, t, l, n) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
                return n.loading |= 1;
            }), t.addEventListener("error", function() {
                return n.loading |= 2;
            }), Je(t, "link", l), Qe(t), e.head.appendChild(t));
        }
        function Yn(e) {
            return '[src="' + _t(e) + '"]';
        }
        function qa(e) {
            return "script[async]" + e;
        }
        function rh(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var n = e.querySelector('style[data-href~="' + _t(l.href) + '"]');
                    if (n) return t.instance = n, Qe(n), n;
                    var a = S({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return n = (e.ownerDocument || e).createElement("style"), Qe(n), Je(n, "style", a), fi(n, l.precedence, e), t.instance = n;
                case "stylesheet":
                    a = Gn(l.href);
                    var i = e.querySelector(Pa(a));
                    if (i) return t.state.loading |= 4, t.instance = i, Qe(i), i;
                    n = ih(l), (a = Mt.get(a)) && jc(n, a), i = (e.ownerDocument || e).createElement("link"), Qe(i);
                    var d = i;
                    return d._p = new Promise(function(m, g) {
                        d.onload = m, d.onerror = g;
                    }), Je(i, "link", n), t.state.loading |= 4, fi(i, l.precedence, e), t.instance = i;
                case "script":
                    return i = Yn(l.src), (a = e.querySelector(qa(i))) ? (t.instance = a, Qe(a), a) : (n = l, (a = Mt.get(i)) && (n = S({}, l), Qc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Qe(a), Je(a, "link", n), e.head.appendChild(a), t.instance = a);
                case "void":
                    return null;
                default:
                    throw Error(f(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, fi(n, l.precedence, e));
            return t.instance;
        }
        function fi(e, t, l) {
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
        var oi = null;
        function ch(e, t, l) {
            if (oi === null) {
                var n = new Map, a = oi = new Map;
                a.set(l, n);
            } else a = oi, n = a.get(l), n || (n = new Map, a.set(l, n));
            if (n.has(e)) return n;
            for(n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++){
                var i = l[a];
                if (!(i[$n] || i[Ie] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
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
        function fh(e, t, l) {
            e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
        }
        function r1(e, t, l) {
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
        function oh(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var Ha = null;
        function c1() {}
        function f1(e, t, l) {
            if (Ha === null) throw Error(f(475));
            var n = Ha;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var a = Gn(l.href), i = e.querySelector(Pa(a));
                    if (i) {
                        e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = si.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = i, Qe(i);
                        return;
                    }
                    i = e.ownerDocument || e, l = ih(l), (a = Mt.get(a)) && jc(l, a), i = i.createElement("link"), Qe(i);
                    var d = i;
                    d._p = new Promise(function(m, g) {
                        d.onload = m, d.onerror = g;
                    }), Je(i, "link", l), t.instance = i;
                }
                n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = si.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function o1() {
            if (Ha === null) throw Error(f(475));
            var e = Ha;
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
        function si() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Kc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var di = null;
        function Kc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, di = new Map, t.forEach(s1, e), di = null, si.call(e));
        }
        function s1(e, t) {
            if (!(t.state.loading & 4)) {
                var l = di.get(e);
                if (l) var n = l.get(null);
                else {
                    l = new Map, di.set(e, l);
                    for(var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++){
                        var d = a[i];
                        (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (l.set(d.dataset.precedence, d), n = d);
                    }
                    n && l.set(null, n);
                }
                a = t.instance, d = a.getAttribute("data-precedence"), i = l.get(d) || n, i === n && l.set(null, a), l.set(d, a), this.count++, n = si.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
            }
        }
        var ka = {
            $$typeof: k,
            Provider: null,
            Consumer: null,
            _currentValue: ne,
            _currentValue2: ne,
            _threadCount: 0
        };
        function d1(e, t, l, n, a, i, d, m) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ki(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ki(0), this.hiddenUpdates = ki(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = new Map;
        }
        function sh(e, t, l, n, a, i, d, m, g, x, U, H) {
            return e = new d1(e, t, l, d, m, g, x, H), t = 1, i === !0 && (t |= 24), i = mt(3, null, null, t), e.current = i, i.stateNode = e, t = Tr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: t
            }, xr(i), e;
        }
        function dh(e) {
            return e ? (e = _n, e) : _n;
        }
        function hh(e, t, l, n, a, i) {
            a = dh(a), n.context === null ? n.context = a : n.pendingContext = a, n = hl(t), n.payload = {
                element: l
            }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = pl(e, n, t), l !== null && (St(l, e, t), ma(l, e, t));
        }
        function ph(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var l = e.retryLane;
                e.retryLane = l !== 0 && l < t ? l : t;
            }
        }
        function Gc(e, t) {
            ph(e, t), (e = e.alternate) && ph(e, t);
        }
        function mh(e) {
            if (e.tag === 13) {
                var t = En(e, 67108864);
                t !== null && St(t, e, 67108864), Gc(e, 67108864);
            }
        }
        var hi = !0;
        function h1(e, t, l, n) {
            var a = z.T;
            z.T = null;
            var i = Y.p;
            try {
                Y.p = 2, Yc(e, t, l, n);
            } finally{
                Y.p = i, z.T = a;
            }
        }
        function p1(e, t, l, n) {
            var a = z.T;
            z.T = null;
            var i = Y.p;
            try {
                Y.p = 8, Yc(e, t, l, n);
            } finally{
                Y.p = i, z.T = a;
            }
        }
        function Yc(e, t, l, n) {
            if (hi) {
                var a = Vc(n);
                if (a === null) Bc(e, t, n, pi, l), vh(e, n);
                else if (y1(a, e, t, l, n)) n.stopPropagation();
                else if (vh(e, n), t & 4 && -1 < m1.indexOf(e)) {
                    for(; a !== null;){
                        var i = fn(a);
                        if (i !== null) switch(i.tag){
                            case 3:
                                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                                    var d = ql(i.pendingLanes);
                                    if (d !== 0) {
                                        var m = i;
                                        for(m.pendingLanes |= 2, m.entangledLanes |= 2; d;){
                                            var g = 1 << 31 - ht(d);
                                            m.entanglements[1] |= g, d &= ~g;
                                        }
                                        Lt(i), (be & 6) === 0 && (Wu = zt() + 500, Ba(0));
                                    }
                                }
                                break;
                            case 13:
                                m = En(i, 2), m !== null && St(m, i, 2), Iu(), Gc(i, 2);
                        }
                        if (i = Vc(n), i === null && Bc(e, t, n, pi, l), i === a) break;
                        a = i;
                    }
                    a !== null && n.stopPropagation();
                } else Bc(e, t, n, null, l);
            }
        }
        function Vc(e) {
            return e = Wi(e), Xc(e);
        }
        var pi = null;
        function Xc(e) {
            if (pi = null, e = cn(e), e !== null) {
                var t = s(e);
                if (t === null) e = null;
                else {
                    var l = t.tag;
                    if (l === 13) {
                        if (e = p(t), e !== null) return e;
                        e = null;
                    } else if (l === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null;
                    } else t !== e && (e = null);
                }
            }
            return pi = e, null;
        }
        function yh(e) {
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
                    switch(em()){
                        case Mf:
                            return 2;
                        case Cf:
                            return 8;
                        case iu:
                        case tm:
                            return 32;
                        case Df:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Zc = !1, Nl = null, xl = null, Ml = null, La = new Map, ja = new Map, Cl = [], m1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function vh(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    Nl = null;
                    break;
                case "dragenter":
                case "dragleave":
                    xl = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Ml = null;
                    break;
                case "pointerover":
                case "pointerout":
                    La.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    ja.delete(t.pointerId);
            }
        }
        function Qa(e, t, l, n, a, i) {
            return e === null || e.nativeEvent !== i ? (e = {
                blockedOn: t,
                domEventName: l,
                eventSystemFlags: n,
                nativeEvent: i,
                targetContainers: [
                    a
                ]
            }, t !== null && (t = fn(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
        }
        function y1(e, t, l, n, a) {
            switch(t){
                case "focusin":
                    return Nl = Qa(Nl, e, t, l, n, a), !0;
                case "dragenter":
                    return xl = Qa(xl, e, t, l, n, a), !0;
                case "mouseover":
                    return Ml = Qa(Ml, e, t, l, n, a), !0;
                case "pointerover":
                    var i = a.pointerId;
                    return La.set(i, Qa(La.get(i) || null, e, t, l, n, a)), !0;
                case "gotpointercapture":
                    return i = a.pointerId, ja.set(i, Qa(ja.get(i) || null, e, t, l, n, a)), !0;
            }
            return !1;
        }
        function gh(e) {
            var t = cn(e.target);
            if (t !== null) {
                var l = s(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = p(l), t !== null) {
                            e.blockedOn = t, fm(e.priority, function() {
                                if (l.tag === 13) {
                                    var n = bt();
                                    n = Li(n);
                                    var a = En(l, n);
                                    a !== null && St(a, l, n), Gc(l, n);
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
        function mi(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var l = Vc(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var n = new l.constructor(l.type, l);
                    $i = n, l.target.dispatchEvent(n), $i = null;
                } else return t = fn(l), t !== null && mh(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function bh(e, t, l) {
            mi(e) && l.delete(t);
        }
        function v1() {
            Zc = !1, Nl !== null && mi(Nl) && (Nl = null), xl !== null && mi(xl) && (xl = null), Ml !== null && mi(Ml) && (Ml = null), La.forEach(bh), ja.forEach(bh);
        }
        function yi(e, t) {
            e.blockedOn === t && (e.blockedOn = null, Zc || (Zc = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, v1)));
        }
        var vi = null;
        function Sh(e) {
            vi !== e && (vi = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
                vi === e && (vi = null);
                for(var t = 0; t < e.length; t += 3){
                    var l = e[t], n = e[t + 1], a = e[t + 2];
                    if (typeof n != "function") {
                        if (Xc(n || l) === null) continue;
                        break;
                    }
                    var i = fn(l);
                    i !== null && (e.splice(t, 3), t -= 3, Xr(i, {
                        pending: !0,
                        data: a,
                        method: l.method,
                        action: n
                    }, n, a));
                }
            }));
        }
        function Ka(e) {
            function t(g) {
                return yi(g, e);
            }
            Nl !== null && yi(Nl, e), xl !== null && yi(xl, e), Ml !== null && yi(Ml, e), La.forEach(t), ja.forEach(t);
            for(var l = 0; l < Cl.length; l++){
                var n = Cl[l];
                n.blockedOn === e && (n.blockedOn = null);
            }
            for(; 0 < Cl.length && (l = Cl[0], l.blockedOn === null);)gh(l), l.blockedOn === null && Cl.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(n = 0; n < l.length; n += 3){
                var a = l[n], i = l[n + 1], d = a[at] || null;
                if (typeof i == "function") d || Sh(l);
                else if (d) {
                    var m = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (a = i, d = i[at] || null) m = d.formAction;
                        else if (Xc(a) !== null) continue;
                    } else m = d.action;
                    typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), Sh(l);
                }
            }
        }
        function Jc(e) {
            this._internalRoot = e;
        }
        gi.prototype.render = Jc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(f(409));
            var l = t.current, n = bt();
            hh(l, n, e, t, null, null);
        }, gi.prototype.unmount = Jc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                hh(e.current, 2, null, e, null, null), Iu(), t[rn] = null;
            }
        };
        function gi(e) {
            this._internalRoot = e;
        }
        gi.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Pf();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Cl.length && t !== 0 && t < Cl[l].priority; l++);
                Cl.splice(l, 0, e), l === 0 && gh(e);
            }
        };
        var Eh = r.version;
        if (Eh !== "19.1.0") throw Error(f(527, Eh, "19.1.0"));
        Y.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
            return e = h(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var g1 = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: z,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!bi.isDisabled && bi.supportsFiber) try {
                Xn = bi.inject(g1), dt = bi;
            } catch  {}
        }
        return Ya.createRoot = function(e, t) {
            if (!o(e)) throw Error(f(299));
            var l = !1, n = "", a = qs, i = Hs, d = ks, m = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (m = t.unstable_transitionCallbacks)), t = sh(e, 1, !1, null, null, l, n, a, i, d, m, null), e[rn] = t.current, Dc(e), new Jc(t);
        }, Ya.hydrateRoot = function(e, t, l) {
            if (!o(e)) throw Error(f(299));
            var n = !1, a = "", i = qs, d = Hs, m = ks, g = null, x = null;
            return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks), l.formState !== void 0 && (x = l.formState)), t = sh(e, 1, !0, t, l ?? null, n, a, i, d, m, g, x), t.context = dh(null), l = t.current, n = bt(), n = Li(n), a = hl(n), a.callback = null, pl(l, a, n), l = n, t.current.lanes = l, Jn(t, l), Lt(t), e[rn] = t.current, Dc(e), new gi(t);
        }, Ya.version = "19.1.0", Ya;
    }
    var Dh;
    function x1() {
        if (Dh) return Fc.exports;
        Dh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), Fc.exports = N1(), Fc.exports;
    }
    var M1 = x1(), lf = {
        exports: {}
    }, nf = {};
    var Bh;
    function C1() {
        if (Bh) return nf;
        Bh = 1;
        var u = Bi();
        function r(h, v) {
            return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
        }
        var c = typeof Object.is == "function" ? Object.is : r, f = u.useSyncExternalStore, o = u.useRef, s = u.useEffect, p = u.useMemo, y = u.useDebugValue;
        return nf.useSyncExternalStoreWithSelector = function(h, v, S, R, b) {
            var O = o(null);
            if (O.current === null) {
                var M = {
                    hasValue: !1,
                    value: null
                };
                O.current = M;
            } else M = O.current;
            O = p(function() {
                function P(Q) {
                    if (!w) {
                        if (w = !0, j = Q, Q = R(Q), b !== void 0 && M.hasValue) {
                            var F = M.value;
                            if (b(F, Q)) return k = F;
                        }
                        return k = Q;
                    }
                    if (F = k, c(j, Q)) return F;
                    var Z = R(Q);
                    return b !== void 0 && b(F, Z) ? (j = Q, F) : (j = Q, k = Z);
                }
                var w = !1, j, k, V = S === void 0 ? null : S;
                return [
                    function() {
                        return P(v());
                    },
                    V === null ? void 0 : function() {
                        return P(V());
                    }
                ];
            }, [
                v,
                S,
                R,
                b
            ]);
            var B = f(h, O[0], O[1]);
            return s(function() {
                M.hasValue = !0, M.value = B;
            }, [
                B
            ]), y(B), B;
        }, nf;
    }
    var wh;
    function D1() {
        return wh || (wh = 1, lf.exports = C1()), lf.exports;
    }
    var B1 = D1();
    function w1(u) {
        u();
    }
    function U1() {
        let u = null, r = null;
        return {
            clear () {
                u = null, r = null;
            },
            notify () {
                w1(()=>{
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
    var Uh = {
        notify () {},
        get: ()=>[]
    };
    function z1(u, r) {
        let c, f = Uh, o = 0, s = !1;
        function p(B) {
            S();
            const P = f.subscribe(B);
            let w = !1;
            return ()=>{
                w || (w = !0, P(), R());
            };
        }
        function y() {
            f.notify();
        }
        function h() {
            M.onStateChange && M.onStateChange();
        }
        function v() {
            return s;
        }
        function S() {
            o++, c || (c = u.subscribe(h), f = U1());
        }
        function R() {
            o--, c && o === 0 && (c(), c = void 0, f.clear(), f = Uh);
        }
        function b() {
            s || (s = !0, S());
        }
        function O() {
            s && (s = !1, R());
        }
        const M = {
            addNestedSub: p,
            notifyNestedSubs: y,
            handleChangeWrapper: h,
            isSubscribed: v,
            trySubscribe: b,
            tryUnsubscribe: O,
            getListeners: ()=>f
        };
        return M;
    }
    var P1 = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", q1 = P1(), H1 = ()=>typeof navigator < "u" && navigator.product === "ReactNative", k1 = H1(), L1 = ()=>q1 || k1 ? T.useLayoutEffect : T.useEffect, j1 = L1(), Q1 = Symbol.for("react-redux-context"), K1 = typeof globalThis < "u" ? globalThis : {};
    function G1() {
        if (!T.createContext) return {};
        const u = K1[Q1] ??= new Map;
        let r = u.get(T.createContext);
        return r || (r = T.createContext(null), u.set(T.createContext, r)), r;
    }
    var zl = G1();
    function Y1(u) {
        const { children: r, context: c, serverState: f, store: o } = u, s = T.useMemo(()=>{
            const h = z1(o);
            return {
                store: o,
                subscription: h,
                getServerState: f ? ()=>f : void 0
            };
        }, [
            o,
            f
        ]), p = T.useMemo(()=>o.getState(), [
            o
        ]);
        j1(()=>{
            const { subscription: h } = s;
            return h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), p !== o.getState() && h.notifyNestedSubs(), ()=>{
                h.tryUnsubscribe(), h.onStateChange = void 0;
            };
        }, [
            s,
            p
        ]);
        const y = c || zl;
        return T.createElement(y.Provider, {
            value: s
        }, r);
    }
    var V1 = Y1;
    function gf(u = zl) {
        return function() {
            return T.useContext(u);
        };
    }
    var ip = gf();
    function rp(u = zl) {
        const r = u === zl ? ip : gf(u), c = ()=>{
            const { store: f } = r();
            return f;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    var X1 = rp();
    function Z1(u = zl) {
        const r = u === zl ? X1 : rp(u), c = ()=>r().dispatch;
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    let J1;
    Cb = Z1();
    J1 = (u, r)=>u === r;
    function $1(u = zl) {
        const r = u === zl ? ip : gf(u), c = (f, o = {})=>{
            const { equalityFn: s = J1 } = typeof o == "function" ? {
                equalityFn: o
            } : o, p = r(), { store: y, subscription: h, getServerState: v } = p;
            T.useRef(!0);
            const S = T.useCallback({
                [f.name] (b) {
                    return f(b);
                }
            }[f.name], [
                f
            ]), R = B1.useSyncExternalStoreWithSelector(h.addNestedSub, y.getState, v || y.getState, S, s);
            return T.useDebugValue(R), R;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    Db = $1();
    function $e(u) {
        return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var W1 = typeof Symbol == "function" && Symbol.observable || "@@observable", zh = W1, af = ()=>Math.random().toString(36).substring(7).split("").join("."), F1 = {
        INIT: `@@redux/INIT${af()}`,
        REPLACE: `@@redux/REPLACE${af()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${af()}`
    }, Mi = F1;
    function cp(u) {
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
        let f = u, o = r, s = new Map, p = s, y = 0, h = !1;
        function v() {
            p === s && (p = new Map, s.forEach((P, w)=>{
                p.set(w, P);
            }));
        }
        function S() {
            if (h) throw new Error($e(3));
            return o;
        }
        function R(P) {
            if (typeof P != "function") throw new Error($e(4));
            if (h) throw new Error($e(5));
            let w = !0;
            v();
            const j = y++;
            return p.set(j, P), function() {
                if (w) {
                    if (h) throw new Error($e(6));
                    w = !1, v(), p.delete(j), s = null;
                }
            };
        }
        function b(P) {
            if (!cp(P)) throw new Error($e(7));
            if (typeof P.type > "u") throw new Error($e(8));
            if (typeof P.type != "string") throw new Error($e(17));
            if (h) throw new Error($e(9));
            try {
                h = !0, o = f(o, P);
            } finally{
                h = !1;
            }
            return (s = p).forEach((j)=>{
                j();
            }), P;
        }
        function O(P) {
            if (typeof P != "function") throw new Error($e(10));
            f = P, b({
                type: Mi.REPLACE
            });
        }
        function M() {
            const P = R;
            return {
                subscribe (w) {
                    if (typeof w != "object" || w === null) throw new Error($e(11));
                    function j() {
                        const V = w;
                        V.next && V.next(S());
                    }
                    return j(), {
                        unsubscribe: P(j)
                    };
                },
                [zh] () {
                    return this;
                }
            };
        }
        return b({
            type: Mi.INIT
        }), {
            dispatch: b,
            subscribe: R,
            getState: S,
            replaceReducer: O,
            [zh]: M
        };
    }
    function I1(u) {
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
    function fp(u) {
        const r = Object.keys(u), c = {};
        for(let s = 0; s < r.length; s++){
            const p = r[s];
            typeof u[p] == "function" && (c[p] = u[p]);
        }
        const f = Object.keys(c);
        let o;
        try {
            I1(c);
        } catch (s) {
            o = s;
        }
        return function(p = {}, y) {
            if (o) throw o;
            let h = !1;
            const v = {};
            for(let S = 0; S < f.length; S++){
                const R = f[S], b = c[R], O = p[R], M = b(O, y);
                if (typeof M > "u") throw y && y.type, new Error($e(14));
                v[R] = M, h = h || M !== O;
            }
            return h = h || f.length !== Object.keys(p).length, h ? v : p;
        };
    }
    function Ci(...u) {
        return u.length === 0 ? (r)=>r : u.length === 1 ? u[0] : u.reduce((r, c)=>(...f)=>r(c(...f)));
    }
    function ey(...u) {
        return (r)=>(c, f)=>{
                const o = r(c, f);
                let s = ()=>{
                    throw new Error($e(15));
                };
                const p = {
                    getState: o.getState,
                    dispatch: (h, ...v)=>s(h, ...v)
                }, y = u.map((h)=>h(p));
                return s = Ci(...y)(o.dispatch), {
                    ...o,
                    dispatch: s
                };
            };
    }
    function op(u) {
        return ({ dispatch: c, getState: f })=>(o)=>(s)=>typeof s == "function" ? s(c, f, u) : o(s);
    }
    var ty = op(), ly = op, ny = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Ci : Ci.apply(null, arguments);
    }, sp = class $a extends Array {
        constructor(...r){
            super(...r), Object.setPrototypeOf(this, $a.prototype);
        }
        static get [Symbol.species]() {
            return $a;
        }
        concat(...r) {
            return super.concat.apply(this, r);
        }
        prepend(...r) {
            return r.length === 1 && Array.isArray(r[0]) ? new $a(...r[0].concat(this)) : new $a(...r.concat(this));
        }
    };
    function ay(u) {
        return typeof u == "boolean";
    }
    var uy = ()=>function(r) {
            const { thunk: c = !0, immutableCheck: f = !0, serializableCheck: o = !0, actionCreatorCheck: s = !0 } = r ?? {};
            let p = new sp;
            return c && (ay(c) ? p.push(ty) : p.push(ly(c.extraArgument))), p;
        }, iy = "RTK_autoBatch", Ph = (u)=>(r)=>{
            setTimeout(r, u);
        }, ry = (u = {
        type: "raf"
    })=>(r)=>(...c)=>{
                const f = r(...c);
                let o = !0, s = !1, p = !1;
                const y = new Set, h = u.type === "tick" ? queueMicrotask : u.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Ph(10) : u.type === "callback" ? u.queueNotification : Ph(u.timeout), v = ()=>{
                    p = !1, s && (s = !1, y.forEach((S)=>S()));
                };
                return Object.assign({}, f, {
                    subscribe (S) {
                        const R = ()=>o && S(), b = f.subscribe(R);
                        return y.add(S), ()=>{
                            b(), y.delete(S);
                        };
                    },
                    dispatch (S) {
                        try {
                            return o = !S?.meta?.[iy], s = !o, s && (p || (p = !0, h(v))), f.dispatch(S);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, cy = (u)=>function(c) {
            const { autoBatch: f = !0 } = c ?? {};
            let o = new sp(u);
            return f && o.push(ry(typeof f == "object" ? f : void 0)), o;
        };
    function fy(u) {
        const r = uy(), { reducer: c = void 0, middleware: f, devTools: o = !0, preloadedState: s = void 0, enhancers: p = void 0 } = u || {};
        let y;
        if (typeof c == "function") y = c;
        else if (cp(c)) y = fp(c);
        else throw new Error(oy(1));
        let h;
        typeof f == "function" ? h = f(r) : h = r();
        let v = Ci;
        o && (v = ny({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const S = ey(...h), R = cy(S);
        let b = typeof p == "function" ? p(R) : R();
        const O = v(...b);
        return bf(y, s, O);
    }
    function oy(u) {
        return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Sf = "persist:", dp = "persist/FLUSH", Ef = "persist/REHYDRATE", hp = "persist/PAUSE", pp = "persist/PERSIST", mp = "persist/PURGE", yp = "persist/REGISTER", sy = -1;
    function Ai(u) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ai = function(c) {
            return typeof c;
        } : Ai = function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        }, Ai(u);
    }
    function qh(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function dy(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? qh(c, !0).forEach(function(f) {
                hy(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : qh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function hy(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    function py(u, r, c, f) {
        f.debug;
        var o = dy({}, c);
        return u && Ai(u) === "object" && Object.keys(u).forEach(function(s) {
            s !== "_persist" && r[s] === c[s] && (o[s] = u[s]);
        }), o;
    }
    function my(u) {
        var r = u.blacklist || null, c = u.whitelist || null, f = u.transforms || [], o = u.throttle || 0, s = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Sf).concat(u.key), p = u.storage, y;
        u.serialize === !1 ? y = function(Q) {
            return Q;
        } : typeof u.serialize == "function" ? y = u.serialize : y = yy;
        var h = u.writeFailHandler || null, v = {}, S = {}, R = [], b = null, O = null, M = function(Q) {
            Object.keys(Q).forEach(function(F) {
                w(F) && v[F] !== Q[F] && R.indexOf(F) === -1 && R.push(F);
            }), Object.keys(v).forEach(function(F) {
                Q[F] === void 0 && w(F) && R.indexOf(F) === -1 && v[F] !== void 0 && R.push(F);
            }), b === null && (b = setInterval(B, o)), v = Q;
        };
        function B() {
            if (R.length === 0) {
                b && clearInterval(b), b = null;
                return;
            }
            var V = R.shift(), Q = f.reduce(function(F, Z) {
                return Z.in(F, V, v);
            }, v[V]);
            if (Q !== void 0) try {
                S[V] = y(Q);
            } catch (F) {
                console.error("redux-persist/createPersistoid: error serializing state", F);
            }
            else delete S[V];
            R.length === 0 && P();
        }
        function P() {
            Object.keys(S).forEach(function(V) {
                v[V] === void 0 && delete S[V];
            }), O = p.setItem(s, y(S)).catch(j);
        }
        function w(V) {
            return !(c && c.indexOf(V) === -1 && V !== "_persist" || r && r.indexOf(V) !== -1);
        }
        function j(V) {
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
    function yy(u) {
        return JSON.stringify(u);
    }
    function vy(u) {
        var r = u.transforms || [], c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Sf).concat(u.key), f = u.storage;
        u.debug;
        var o;
        return u.deserialize === !1 ? o = function(p) {
            return p;
        } : typeof u.deserialize == "function" ? o = u.deserialize : o = gy, f.getItem(c).then(function(s) {
            if (s) try {
                var p = {}, y = o(s);
                return Object.keys(y).forEach(function(h) {
                    p[h] = r.reduceRight(function(v, S) {
                        return S.out(v, h, y);
                    }, o(y[h]));
                }), p;
            } catch (h) {
                throw h;
            }
            else return;
        });
    }
    function gy(u) {
        return JSON.parse(u);
    }
    function by(u) {
        var r = u.storage, c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : Sf).concat(u.key);
        return r.removeItem(c, Sy);
    }
    function Sy(u) {}
    function Hh(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function nl(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Hh(c, !0).forEach(function(f) {
                Ey(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Hh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function Ey(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    function _y(u, r) {
        if (u == null) return {};
        var c = Ry(u, r), f, o;
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(u);
            for(o = 0; o < s.length; o++)f = s[o], !(r.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(u, f) && (c[f] = u[f]);
        }
        return c;
    }
    function Ry(u, r) {
        if (u == null) return {};
        var c = {}, f = Object.keys(u), o, s;
        for(s = 0; s < f.length; s++)o = f[s], !(r.indexOf(o) >= 0) && (c[o] = u[o]);
        return c;
    }
    var Ty = 5e3;
    function Ay(u, r) {
        var c = u.version !== void 0 ? u.version : sy;
        u.debug;
        var f = u.stateReconciler === void 0 ? py : u.stateReconciler, o = u.getStoredState || vy, s = u.timeout !== void 0 ? u.timeout : Ty, p = null, y = !1, h = !0, v = function(R) {
            return R._persist.rehydrated && p && !h && p.update(R), R;
        };
        return function(S, R) {
            var b = S || {}, O = b._persist, M = _y(b, [
                "_persist"
            ]), B = M;
            if (R.type === pp) {
                var P = !1, w = function($, I) {
                    P || (R.rehydrate(u.key, $, I), P = !0);
                };
                if (s && setTimeout(function() {
                    !P && w(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(u.key, '"')));
                }, s), h = !1, p || (p = my(u)), O) return nl({}, r(B, R), {
                    _persist: O
                });
                if (typeof R.rehydrate != "function" || typeof R.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return R.register(u.key), o(u).then(function(Z) {
                    var $ = u.migrate || function(I, he) {
                        return Promise.resolve(I);
                    };
                    $(Z, c).then(function(I) {
                        w(I);
                    }, function(I) {
                        w(void 0, I);
                    });
                }, function(Z) {
                    w(void 0, Z);
                }), nl({}, r(B, R), {
                    _persist: {
                        version: c,
                        rehydrated: !1
                    }
                });
            } else {
                if (R.type === mp) return y = !0, R.result(by(u)), nl({}, r(B, R), {
                    _persist: O
                });
                if (R.type === dp) return R.result(p && p.flush()), nl({}, r(B, R), {
                    _persist: O
                });
                if (R.type === hp) h = !0;
                else if (R.type === Ef) {
                    if (y) return nl({}, B, {
                        _persist: nl({}, O, {
                            rehydrated: !0
                        })
                    });
                    if (R.key === u.key) {
                        var j = r(B, R), k = R.payload, V = f !== !1 && k !== void 0 ? f(k, S, j, u) : j, Q = nl({}, V, {
                            _persist: nl({}, O, {
                                rehydrated: !0
                            })
                        });
                        return v(Q);
                    }
                }
            }
            if (!O) return r(S, R);
            var F = r(B, R);
            return F === B ? S : v(nl({}, F, {
                _persist: O
            }));
        };
    }
    function kh(u) {
        return xy(u) || Ny(u) || Oy();
    }
    function Oy() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function Ny(u) {
        if (Symbol.iterator in Object(u) || Object.prototype.toString.call(u) === "[object Arguments]") return Array.from(u);
    }
    function xy(u) {
        if (Array.isArray(u)) {
            for(var r = 0, c = new Array(u.length); r < u.length; r++)c[r] = u[r];
            return c;
        }
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
    function df(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Lh(c, !0).forEach(function(f) {
                My(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Lh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function My(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    var vp = {
        registry: [],
        bootstrapped: !1
    }, Cy = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : vp, c = arguments.length > 1 ? arguments[1] : void 0;
        switch(c.type){
            case yp:
                return df({}, r, {
                    registry: [].concat(kh(r.registry), [
                        c.key
                    ])
                });
            case Ef:
                var f = r.registry.indexOf(c.key), o = kh(r.registry);
                return o.splice(f, 1), df({}, r, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return r;
        }
    };
    function Dy(u, r, c) {
        var f = bf(Cy, vp, void 0), o = function(h) {
            f.dispatch({
                type: yp,
                key: h
            });
        }, s = function(h, v, S) {
            var R = {
                type: Ef,
                payload: v,
                err: S,
                key: h
            };
            u.dispatch(R), f.dispatch(R);
        }, p = df({}, f, {
            purge: function() {
                var h = [];
                return u.dispatch({
                    type: mp,
                    result: function(S) {
                        h.push(S);
                    }
                }), Promise.all(h);
            },
            flush: function() {
                var h = [];
                return u.dispatch({
                    type: dp,
                    result: function(S) {
                        h.push(S);
                    }
                }), Promise.all(h);
            },
            pause: function() {
                u.dispatch({
                    type: hp
                });
            },
            persist: function() {
                u.dispatch({
                    type: pp,
                    register: o,
                    rehydrate: s
                });
            }
        });
        return p.persist(), p;
    }
    var Va = {}, Si = {}, Ei = {}, jh;
    function By() {
        if (jh) return Ei;
        jh = 1, Ei.__esModule = !0, Ei.default = o;
        function u(s) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? u = function(y) {
                return typeof y;
            } : u = function(y) {
                return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
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
                var p = self[s], y = "redux-persist ".concat(s, " test");
                p.setItem(y, "test"), p.getItem(y), p.removeItem(y);
            } catch  {
                return !1;
            }
            return !0;
        }
        function o(s) {
            var p = "".concat(s, "Storage");
            return f(p) ? self[p] : c;
        }
        return Ei;
    }
    var Qh;
    function wy() {
        if (Qh) return Si;
        Qh = 1, Si.__esModule = !0, Si.default = c;
        var u = r(By());
        function r(f) {
            return f && f.__esModule ? f : {
                default: f
            };
        }
        function c(f) {
            var o = (0, u.default)(f);
            return {
                getItem: function(p) {
                    return new Promise(function(y, h) {
                        y(o.getItem(p));
                    });
                },
                setItem: function(p, y) {
                    return new Promise(function(h, v) {
                        h(o.setItem(p, y));
                    });
                },
                removeItem: function(p) {
                    return new Promise(function(y, h) {
                        y(o.removeItem(p));
                    });
                }
            };
        }
        return Si;
    }
    var Kh;
    function Uy() {
        if (Kh) return Va;
        Kh = 1, Va.__esModule = !0, Va.default = void 0;
        var u = r(wy());
        function r(f) {
            return f && f.__esModule ? f : {
                default: f
            };
        }
        var c = (0, u.default)("local");
        return Va.default = c, Va;
    }
    var zy = Uy();
    const Py = up(zy);
    const lt = "w", Ct = "b", Ve = "p", hf = "n", Oi = "b", Wa = "r", Ul = "q", je = "k", uf = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
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
            const { color: f, piece: o, from: s, to: p, flags: y, captured: h, promotion: v } = c, S = We(s), R = We(p);
            this.color = f, this.piece = o, this.from = S, this.to = R, this.san = r._moveToSan(c, r._moves({
                legal: !0
            })), this.lan = S + R, this.before = r.fen(), r._makeMove(c), this.after = r.fen(), r._undoMove(), this.flags = "";
            for(const b in ce)ce[b] & y && (this.flags += tn[b]);
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
    }, pf = {
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
    }, Hy = {
        ...pf,
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
    }, Gh = {
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
    }, ky = [
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
    ], Ly = [
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
    }, Qy = "pnbrqkPNBRQK", Yh = [
        hf,
        Oi,
        Wa,
        Ul
    ], Ky = 7, Gy = 6, Yy = 1, Vy = 0, Ri = {
        [je]: ce.KSIDE_CASTLE,
        [Ul]: ce.QSIDE_CASTLE
    }, Bl = {
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
    }, Xy = {
        b: Yy,
        w: Gy
    }, Zy = [
        "1-0",
        "0-1",
        "1/2-1/2",
        "*"
    ];
    function ln(u) {
        return u >> 4;
    }
    function eu(u) {
        return u & 15;
    }
    function gp(u) {
        return "0123456789".indexOf(u) !== -1;
    }
    function We(u) {
        const r = eu(u), c = ln(u);
        return "abcdefgh".substring(r, r + 1) + "87654321".substring(c, c + 1);
    }
    function Xa(u) {
        return u === lt ? Ct : lt;
    }
    function Jy(u) {
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
        for(let p = 0; p < o.length; p++){
            let y = 0, h = !1;
            for(let v = 0; v < o[p].length; v++)if (gp(o[p][v])) {
                if (h) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                y += parseInt(o[p][v], 10), h = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(o[p][v])) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (invalid piece)"
                };
                y += 1, h = !1;
            }
            if (y !== 8) return {
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
        for (const { color: p, regex: y } of s){
            if (!y.test(r[0])) return {
                ok: !1,
                error: `Invalid FEN: missing ${p} king`
            };
            if ((r[0].match(y) || []).length > 1) return {
                ok: !1,
                error: `Invalid FEN: too many ${p} kings`
            };
        }
        return Array.from(o[0] + o[7]).some((p)=>p.toUpperCase() === "P") ? {
            ok: !1,
            error: "Invalid FEN: some pawns are on the edge rows"
        } : {
            ok: !0
        };
    }
    function $y(u, r) {
        const c = u.from, f = u.to, o = u.piece;
        let s = 0, p = 0, y = 0;
        for(let h = 0, v = r.length; h < v; h++){
            const S = r[h].from, R = r[h].to, b = r[h].piece;
            o === b && c !== S && f === R && (s++, ln(c) === ln(S) && p++, eu(c) === eu(S) && y++);
        }
        return s > 0 ? p > 0 && y > 0 ? We(c) : y > 0 ? We(c).charAt(1) : We(c).charAt(0) : "";
    }
    function wl(u, r, c, f, o, s = void 0, p = ce.NORMAL) {
        const y = ln(f);
        if (o === Ve && (y === Ky || y === Vy)) for(let h = 0; h < Yh.length; h++){
            const v = Yh[h];
            u.push({
                color: r,
                from: c,
                to: f,
                piece: o,
                captured: s,
                promotion: v,
                flags: p | ce.PROMOTION
            });
        }
        else u.push({
            color: r,
            from: c,
            to: f,
            piece: o,
            captured: s,
            flags: p
        });
    }
    function Vh(u) {
        let r = u.charAt(0);
        return r >= "a" && r <= "h" ? u.match(/[a-h]\d.*[a-h]\d/) ? void 0 : Ve : (r = r.toLowerCase(), r === "o" ? je : r);
    }
    function cf(u) {
        return u.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function ff(u) {
        return u.split(" ").slice(0, 4).join(" ");
    }
    _f = class {
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
                ...Hy
            }, this._positionCount = {}, this._header.SetUp = null, this._header.FEN = null;
        }
        load(r, { skipValidation: c = !1, preserveHeaders: f = !1 } = {}) {
            let o = r.split(/\s+/);
            if (o.length >= 2 && o.length < 6) {
                const y = [
                    "-",
                    "-",
                    "0",
                    "1"
                ];
                r = o.concat(y.slice(-(6 - o.length))).join(" ");
            }
            if (o = r.split(/\s+/), !c) {
                const { ok: y, error: h } = Jy(r);
                if (!y) throw new Error(h);
            }
            const s = o[0];
            let p = 0;
            this.clear({
                preserveHeaders: f
            });
            for(let y = 0; y < s.length; y++){
                const h = s.charAt(y);
                if (h === "/") p += 8;
                else if (gp(h)) p += parseInt(h, 10);
                else {
                    const v = h < "a" ? lt : Ct;
                    this._put({
                        type: h.toLowerCase(),
                        color: v
                    }, We(p)), p++;
                }
            }
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= ce.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= ce.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= ce.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= ce.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? ft : ue[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(r), this._incPositionCount(r);
        }
        fen() {
            let r = 0, c = "";
            for(let s = ue.a8; s <= ue.h1; s++){
                if (this._board[s]) {
                    r > 0 && (c += r, r = 0);
                    const { color: p, type: y } = this._board[s];
                    c += p === lt ? y.toUpperCase() : y.toLowerCase();
                } else r++;
                s + 1 & 136 && (r > 0 && (c += r), s !== ue.h1 && (c += "/"), r = 0, s += 8);
            }
            let f = "";
            this._castling[lt] & ce.KSIDE_CASTLE && (f += "K"), this._castling[lt] & ce.QSIDE_CASTLE && (f += "Q"), this._castling[Ct] & ce.KSIDE_CASTLE && (f += "k"), this._castling[Ct] & ce.QSIDE_CASTLE && (f += "q"), f = f || "-";
            let o = "-";
            if (this._epSquare !== ft) {
                const s = this._epSquare + (this._turn === lt ? 16 : -16), p = [
                    s + 1,
                    s - 1
                ];
                for (const y of p){
                    if (y & 136) continue;
                    const h = this._turn;
                    if (this._board[y]?.color === h && this._board[y]?.type === Ve) {
                        this._makeMove({
                            color: h,
                            from: y,
                            to: this._epSquare,
                            piece: Ve,
                            captured: Ve,
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
                !this._board[f] || this._board[f]?.color !== r.color || this._board[f].color === r.color && this._board[f].type === r.type && c.push(We(f));
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
            if (Qy.indexOf(r.toLowerCase()) === -1 || !(f in ue)) return !1;
            const o = ue[f];
            if (r == je && !(this._kings[c] == ft || this._kings[c] == o)) return !1;
            const s = this._board[o];
            return s && s.type === je && (this._kings[s.color] = ft), this._board[o] = {
                type: r,
                color: c
            }, r === je && (this._kings[c] = o), !0;
        }
        remove(r) {
            const c = this.get(r);
            return delete this._board[ue[r]], c && c.type === je && (this._kings[c.color] = ft), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), c;
        }
        _updateCastlingRights() {
            const r = this._board[ue.e1]?.type === je && this._board[ue.e1]?.color === lt, c = this._board[ue.e8]?.type === je && this._board[ue.e8]?.color === Ct;
            (!r || this._board[ue.a1]?.type !== Wa || this._board[ue.a1]?.color !== lt) && (this._castling.w &= -65), (!r || this._board[ue.h1]?.type !== Wa || this._board[ue.h1]?.color !== lt) && (this._castling.w &= -33), (!c || this._board[ue.a8]?.type !== Wa || this._board[ue.a8]?.color !== Ct) && (this._castling.b &= -65), (!c || this._board[ue.h8]?.type !== Wa || this._board[ue.h8]?.color !== Ct) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === ft) return;
            const r = this._epSquare + (this._turn === lt ? -16 : 16), c = this._epSquare + (this._turn === lt ? 16 : -16), f = [
                c + 1,
                c - 1
            ];
            if (this._board[r] !== null || this._board[this._epSquare] !== null || this._board[c]?.color !== Xa(this._turn) || this._board[c]?.type !== Ve) {
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
                const p = this._board[s], y = s - c;
                if (y === 0) continue;
                const h = y + 119;
                if (ky[h] & jy[p.type]) {
                    if (p.type === Ve) {
                        if (y > 0 && p.color === lt || y <= 0 && p.color === Ct) if (f) o.push(We(s));
                        else return !0;
                        continue;
                    }
                    if (p.type === "n" || p.type === "k") if (f) {
                        o.push(We(s));
                        continue;
                    } else return !0;
                    const v = Ly[h];
                    let S = s + v, R = !1;
                    for(; S !== c;){
                        if (this._board[S] != null) {
                            R = !0;
                            break;
                        }
                        S += v;
                    }
                    if (!R) if (f) {
                        o.push(We(s));
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
            return c === -1 ? !1 : this._attacked(Xa(r), c);
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
                const p = this._board[s];
                p && (r[p.type] = p.type in r ? r[p.type] + 1 : 1, p.type === Oi && c.push(o), f++);
            }
            if (f === 2) return !0;
            if (f === 3 && (r[Oi] === 1 || r[hf] === 1)) return !0;
            if (f === r[Oi] + 2) {
                let s = 0;
                const p = c.length;
                for(let y = 0; y < p; y++)s += c[y];
                if (s === 0 || s === p) return !0;
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
            const o = f ? f.toLowerCase() : void 0, s = c?.toLowerCase(), p = [], y = this._turn, h = Xa(y);
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
                if (M === Ve) {
                    if (s && s !== M) continue;
                    B = O + rf[y][0], this._board[B] || (wl(p, y, O, B, Ve), B = O + rf[y][1], Xy[y] === ln(O) && !this._board[B] && wl(p, y, O, B, Ve, void 0, ce.BIG_PAWN));
                    for(let P = 2; P < 4; P++)B = O + rf[y][P], !(B & 136) && (this._board[B]?.color === h ? wl(p, y, O, B, Ve, this._board[B].type, ce.CAPTURE) : B === this._epSquare && wl(p, y, O, B, Ve, Ve, ce.EP_CAPTURE));
                } else {
                    if (s && s !== M) continue;
                    for(let P = 0, w = Gh[M].length; P < w; P++){
                        const j = Gh[M][P];
                        for(B = O; B += j, !(B & 136);){
                            if (!this._board[B]) wl(p, y, O, B, M);
                            else {
                                if (this._board[B].color === y) break;
                                wl(p, y, O, B, M, this._board[B].type, ce.CAPTURE);
                                break;
                            }
                            if (M === hf || M === je) break;
                        }
                    }
                }
            }
            if ((s === void 0 || s === je) && (!R || S === this._kings[y])) {
                if (this._castling[y] & ce.KSIDE_CASTLE) {
                    const O = this._kings[y], M = O + 2;
                    !this._board[O + 1] && !this._board[M] && !this._attacked(h, this._kings[y]) && !this._attacked(h, O + 1) && !this._attacked(h, M) && wl(p, y, this._kings[y], M, je, void 0, ce.KSIDE_CASTLE);
                }
                if (this._castling[y] & ce.QSIDE_CASTLE) {
                    const O = this._kings[y], M = O - 2;
                    !this._board[O - 1] && !this._board[O - 2] && !this._board[O - 3] && !this._attacked(h, this._kings[y]) && !this._attacked(h, O - 1) && !this._attacked(h, M) && wl(p, y, this._kings[y], M, je, void 0, ce.QSIDE_CASTLE);
                }
            }
            if (!r || this._kings[y] === -1) return p;
            const b = [];
            for(let O = 0, M = p.length; O < M; O++)this._makeMove(p[O]), this._isKingAttacked(y) || b.push(p[O]), this._undoMove();
            return b;
        }
        move(r, { strict: c = !1 } = {}) {
            let f = null;
            if (typeof r == "string") f = this._moveFromSan(r, c);
            else if (typeof r == "object") {
                const s = this._moves();
                for(let p = 0, y = s.length; p < y; p++)if (r.from === We(s[p].from) && r.to === We(s[p].to) && (!("promotion" in s[p]) || r.promotion === s[p].promotion)) {
                    f = s[p];
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
            const c = this._turn, f = Xa(c);
            if (this._push(r), this._board[r.to] = this._board[r.from], delete this._board[r.from], r.flags & ce.EP_CAPTURE && (this._turn === Ct ? delete this._board[r.to - 16] : delete this._board[r.to + 16]), r.promotion && (this._board[r.to] = {
                type: r.promotion,
                color: c
            }), this._board[r.to].type === je) {
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
                for(let o = 0, s = Bl[c].length; o < s; o++)if (r.from === Bl[c][o].square && this._castling[c] & Bl[c][o].flag) {
                    this._castling[c] ^= Bl[c][o].flag;
                    break;
                }
            }
            if (this._castling[f]) {
                for(let o = 0, s = Bl[f].length; o < s; o++)if (r.to === Bl[f][o].square && this._castling[f] & Bl[f][o].flag) {
                    this._castling[f] ^= Bl[f][o].flag;
                    break;
                }
            }
            r.flags & ce.BIG_PAWN ? c === Ct ? this._epSquare = r.to - 16 : this._epSquare = r.to + 16 : this._epSquare = ft, r.piece === Ve ? this._halfMoves = 0 : r.flags & (ce.CAPTURE | ce.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, c === Ct && this._moveNumber++, this._turn = f;
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
            const f = this._turn, o = Xa(f);
            if (this._board[c.from] = this._board[c.to], this._board[c.from].type = c.piece, delete this._board[c.to], c.captured) if (c.flags & ce.EP_CAPTURE) {
                let s;
                f === Ct ? s = c.to - 16 : s = c.to + 16, this._board[s] = {
                    type: Ve,
                    color: o
                };
            } else this._board[c.to] = {
                type: c.captured,
                color: o
            };
            if (c.flags & (ce.KSIDE_CASTLE | ce.QSIDE_CASTLE)) {
                let s, p;
                c.flags & ce.KSIDE_CASTLE ? (s = c.to + 1, p = c.to - 1) : (s = c.to - 2, p = c.to + 1), this._board[s] = this._board[p], delete this._board[p];
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
                const O = this._comments[this.fen()];
                if (typeof O < "u") {
                    const M = b.length > 0 ? " " : "";
                    b = `${b}${M}{${O}}`;
                }
                return b;
            }, p = [];
            for(; this._history.length > 0;)p.push(this._undoMove());
            const y = [];
            let h = "";
            for(p.length === 0 && y.push(s("")); p.length > 0;){
                h = s(h);
                const b = p.pop();
                if (!b) break;
                if (!this._history.length && b.color === "b") {
                    const O = `${this._moveNumber}. ...`;
                    h = h ? `${h} ${O}` : O;
                } else b.color === "w" && (h.length && y.push(h), h = this._moveNumber + ".");
                h = h + " " + this._moveToSan(b, this._moves({
                    legal: !0
                })), this._makeMove(b);
            }
            if (h.length && y.push(s(h)), y.push(this._header.Result || "*"), c === 0) return f.join("") + y.join(" ");
            const v = function() {
                return f.length > 0 && f[f.length - 1] === " " ? (f.pop(), !0) : !1;
            }, S = function(b, O) {
                for (const M of O.split(" "))if (M) {
                    if (b + M.length > c) {
                        for(; v();)b--;
                        f.push(r), b = 0;
                    }
                    f.push(M), b += M.length, f.push(" "), b++;
                }
                return v() && b--, b;
            };
            let R = 0;
            for(let b = 0; b < y.length; b++){
                if (R + y[b].length > c && y[b].includes("{")) {
                    R = S(R, y[b]);
                    continue;
                }
                R + y[b].length > c && b !== 0 ? (f[f.length - 1] === " " && f.pop(), f.push(r), R = 0) : b !== 0 && (f.push(" "), R++), f.push(y[b]), R += y[b].length;
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
                const V = {}, Q = k.split(new RegExp(o(f)));
                let F = "", Z = "";
                for(let $ = 0; $ < Q.length; $++){
                    const I = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    F = Q[$].replace(I, "$1"), Z = Q[$].replace(I, "$2"), F.trim().length > 0 && (V[F] = Z);
                }
                return V;
            }
            r = r.trim();
            const y = new RegExp("^(\\[((?:" + o(f) + ")|.)*\\])((?:\\s*" + o(f) + "){2}|(?:\\s*" + o(f) + ")*$)").exec(r), h = y && y.length >= 2 ? y[1] : "";
            this.reset();
            const v = s(h);
            let S = "";
            for(const k in v)k.toLowerCase() === "fen" && (S = v[k]), this.header(k, v[k]);
            if (!c) S && this.load(S, {
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
                return k = k.replace(new RegExp(o(f), "g"), " "), `{${R(k.slice(1, k.length - 1))}}`;
            }, M = function(k) {
                if (k.startsWith("{") && k.endsWith("}")) return b(k.slice(1, k.length - 1));
            };
            let B = r.replace(h, "").replace(new RegExp(`({[^}]*})+?|;([^${o(f)}]*)`, "g"), function(k, V, Q) {
                return V !== void 0 ? O(V) : " " + O(`{${Q.slice(1)}}`);
            }).replace(new RegExp(o(f), "g"), " ");
            const P = /(\([^()]+\))+?/g;
            for(; P.test(B);)B = B.replace(P, "");
            B = B.replace(/\d+\.(\.\.)?/g, ""), B = B.replace(/\.\.\./g, ""), B = B.replace(/\$\d+/g, "");
            let w = B.trim().split(new RegExp(/\s+/));
            w = w.filter((k)=>k !== "");
            let j = "";
            for(let k = 0; k < w.length; k++){
                const V = M(w[k]);
                if (V !== void 0) {
                    this._comments[this.fen()] = V;
                    continue;
                }
                const Q = this._moveFromSan(w[k], c);
                if (Q == null) if (Zy.indexOf(w[k]) > -1) j = w[k];
                else throw new Error(`Invalid move in PGN: ${w[k]}`);
                else j = "", this._makeMove(Q), this._incPositionCount(this.fen());
            }
            j && Object.keys(this._header).length && this._header.Result !== j && this.setHeader("Result", j);
        }
        _moveToSan(r, c) {
            let f = "";
            if (r.flags & ce.KSIDE_CASTLE) f = "O-O";
            else if (r.flags & ce.QSIDE_CASTLE) f = "O-O-O";
            else {
                if (r.piece !== Ve) {
                    const o = $y(r, c);
                    f += r.piece.toUpperCase() + o;
                }
                r.flags & (ce.CAPTURE | ce.EP_CAPTURE) && (r.piece === Ve && (f += We(r.from)[0]), f += "x"), f += We(r.to), r.promotion && (f += "=" + r.promotion.toUpperCase());
            }
            return this._makeMove(r), this.isCheck() && (this.isCheckmate() ? f += "#" : f += "+"), this._undoMove(), f;
        }
        _moveFromSan(r, c = !1) {
            const f = cf(r);
            let o = Vh(f), s = this._moves({
                legal: !0,
                piece: o
            });
            for(let b = 0, O = s.length; b < O; b++)if (f === cf(this._moveToSan(s[b], s))) return s[b];
            if (c) return null;
            let p, y, h, v, S, R = !1;
            if (y = f.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), y ? (p = y[1], h = y[2], v = y[3], S = y[4], h.length == 1 && (R = !0)) : (y = f.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), y && (p = y[1], h = y[2], v = y[3], S = y[4], h.length == 1 && (R = !0))), o = Vh(f), s = this._moves({
                legal: !0,
                piece: p || o
            }), !v) return null;
            for(let b = 0, O = s.length; b < O; b++)if (h) {
                if ((!p || p.toLowerCase() == s[b].piece) && ue[h] == s[b].from && ue[v] == s[b].to && (!S || S.toLowerCase() == s[b].promotion)) return s[b];
                if (R) {
                    const M = We(s[b].from);
                    if ((!p || p.toLowerCase() == s[b].piece) && ue[v] == s[b].to && (h == M[0] || h == M[1]) && (!S || S.toLowerCase() == s[b].promotion)) return s[b];
                }
            } else if (f === cf(this._moveToSan(s[b], s)).replace("x", "")) return s[b];
            return null;
        }
        ascii() {
            let r = `   +------------------------+
`;
            for(let c = ue.a8; c <= ue.h1; c++){
                if (eu(c) === 0 && (r += " " + "87654321"[ln(c)] + " |"), this._board[c]) {
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
            for(let s = 0, p = c.length; s < p; s++)this._makeMove(c[s]), this._isKingAttacked(o) || (r - 1 > 0 ? f += this.perft(r - 1) : f++), this._undoMove();
            return f;
        }
        turn() {
            return this._turn;
        }
        board() {
            const r = [];
            let c = [];
            for(let f = ue.a8; f <= ue.h1; f++)this._board[f] == null ? c.push(null) : c.push({
                square: We(f),
                type: this._board[f].type,
                color: this._board[f].color
            }), f + 1 & 136 && (r.push(c), c = [], f += 8);
            return r;
        }
        squareColor(r) {
            if (r in ue) {
                const c = ue[r];
                return (ln(c) + eu(c)) % 2 === 0 ? "light" : "dark";
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
                je,
                Ul
            ])c[o] !== void 0 && (c[o] ? this._castling[r] |= Ri[o] : this._castling[r] &= ~Ri[o]);
            this._updateCastlingRights();
            const f = this.getCastlingRights(r);
            return (c[je] === void 0 || c[je] === f[je]) && (c[Ul] === void 0 || c[Ul] === f[Ul]);
        }
        getCastlingRights(r) {
            return {
                [je]: (this._castling[r] & Ri[je]) !== 0,
                [Ul]: (this._castling[r] & Ri[Ul]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let bp, Sp, Wy, Ep, Fy, Iy, ev, Xh, tv, _p, Rp, Tp, lv, nv, Ap, Op, Np, xp, Rf, Mp, av, uv, iv, rv, cv, fv, ov, sv, dv, hv, pv, mv, yv, vv, gv, bv, Sv, Cp, Ev, Zh, _v, Rv, Tv, Av, Ov, Nv, xv;
    bp = "MOVE_PIECE";
    Sp = "RESET_GAME";
    Wy = "LOAD_GAME";
    Ep = "SET_GAME_OVER";
    Fy = "SET_TIMER_DURATION";
    Bb = (u)=>({
            type: bp,
            payload: u
        });
    wb = (u)=>({
            type: Sp,
            payload: u
        });
    Ub = (u, r)=>({
            type: Ep,
            payload: {
                isGameOver: u,
                gameResult: r
            }
        });
    ge = {
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
        BOARD_PIECE: "boardPiece",
        PALLETE_PIECE: "palletePiece",
        ERASER_ID: "p-g-eraser"
    };
    Iy = [
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
    ev = [
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
    Xh = {
        fen: ge.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: ge.TIMER_DURATION
    };
    tv = (u = Xh, r)=>{
        switch(r.type){
            case bp:
                try {
                    const c = new _f(u.fen), f = c.move({
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
            case Sp:
                return {
                    ...Xh,
                    moveHistory: [],
                    timerDuration: r.payload
                };
            case Wy:
                return {
                    ...u,
                    fen: r.payload.fen,
                    moveHistory: r.payload.moveHistory || []
                };
            case Ep:
                return {
                    ...u,
                    isGameOver: r.payload.isGameOver,
                    gameResult: r.payload.gameResult
                };
            case Fy:
                return {
                    ...u,
                    timerDuration: r.payload
                };
            default:
                return u;
        }
    };
    _p = "FLIP_BOARD";
    Rp = "SET_THEME";
    Tp = "SET_SOUND";
    zb = ()=>({
            type: _p
        });
    Pb = (u)=>({
            type: Rp,
            payload: u
        });
    qb = (u)=>({
            type: Tp,
            payload: u
        });
    lv = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    nv = (u = lv, r)=>{
        switch(r.type){
            case _p:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case Rp:
                return {
                    ...u,
                    theme: r.payload
                };
            case Tp:
                return {
                    ...u,
                    enableSound: r.payload
                };
            default:
                return u;
        }
    };
    Ap = "NEXT";
    Op = "PREV";
    Np = "START_POS";
    xp = "FINAL_POS";
    Rf = "LOAD_PGN";
    Mp = "JUMP_TO_MOVE";
    av = "TOGGLE_ENGINE";
    uv = "DISABLE_ENGINE";
    Hb = ()=>({
            type: Np
        });
    kb = ()=>({
            type: Op
        });
    Lb = ()=>({
            type: Ap
        });
    jb = ()=>({
            type: xp
        });
    Qb = ({ finalPos: u, moves: r, fens: c, fromToSquares: f, termination: o, result: s, blackPlayerName: p, whitePlayerName: y })=>({
            type: Rf,
            payload: {
                finalPos: u,
                moves: r,
                fens: c,
                fromToSquares: f,
                termination: o,
                result: s,
                blackPlayerName: p,
                whitePlayerName: y
            }
        });
    Kb = (u)=>({
            type: Mp,
            payload: u
        });
    iv = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    rv = (u = iv, r)=>{
        switch(r.type){
            case Ap:
                return u.currentMoveIndex === u.fenLength - 1 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex + 1
                };
            case Op:
                return u.currentMoveIndex === 0 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex - 1
                };
            case Np:
                return {
                    ...u,
                    currentMoveIndex: 0
                };
            case xp:
                return {
                    ...u,
                    currentMoveIndex: u.fenLength - 1
                };
            case Mp:
                return {
                    ...u,
                    currentMoveIndex: r.payload
                };
            case Rf:
                return {
                    ...u,
                    finalFen: r.payload.finalPos,
                    fenLength: r.payload.fens.length,
                    currentMoveIndex: 0
                };
            case av:
                return {
                    ...u,
                    engineEnabled: !u.engineEnabled
                };
            case uv:
                return {
                    ...u,
                    engineEnabled: !1
                };
            default:
                return u;
        }
    };
    cv = {
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
    fv = (u = cv, r)=>{
        switch(r.type){
            case Rf:
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
    ov = "TOGGLE_ENGINE";
    sv = "SET_MULTIPV";
    dv = "SET_MAX_DEPTH";
    hv = "SET_AUTO_STOP_TIME";
    pv = {
        enabled: !1,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    mv = (u = pv, r)=>{
        switch(r.type){
            case ov:
                return {
                    ...u,
                    enabled: !u.enabled
                };
            case sv:
                return {
                    ...u,
                    multiPV: r.payload
                };
            case dv:
                return {
                    ...u,
                    maxDepth: r.payload
                };
            case hv:
                return {
                    ...u,
                    autoStopTime: r.payload
                };
            default:
                return u;
        }
    };
    yv = "RESET_BOARD";
    vv = "CLEAR_BOARD";
    gv = "SET_BOARD_WITH_FEN";
    bv = "PUT_PIECE";
    Sv = "MOVE_PIECE";
    Cp = (u)=>{
        const r = new _f;
        return r.load(u), r.board().map((o, s)=>o.map((p, y)=>({
                    id: p ? p.square : `${"abcdefgh"[y]}${8 - s}`,
                    piece: p ? {
                        type: p.type,
                        color: p.color
                    } : null
                })));
    };
    Ev = (u)=>u.split(" ")?.[1];
    Zh = {
        board: [
            ...Iy
        ],
        currentFen: ge.START_FEN,
        selectedPalettePiece: null,
        isFlipped: !1,
        playerToMove: ge.WHITE,
        castlingFlags: {
            K: !0,
            Q: !0,
            k: !0,
            q: !0
        }
    };
    _v = {
        board: [
            ...ev
        ],
        currentFen: ge.CLEAR_FEN,
        selectedPalettePiece: null,
        isFlipped: !1,
        playerToMove: ge.WHITE,
        castlingFlags: {
            K: !0,
            Q: !0,
            k: !0,
            q: !0
        }
    };
    Rv = (u = Zh, r)=>{
        switch(r.type){
            case yv:
                return Zh;
            case vv:
                return _v;
            case gv:
                return {
                    ...u,
                    board: [
                        ...Cp(r.payload.fen)
                    ],
                    playerToMove: Ev(r.payload.fen)
                };
            case bv:
                return {
                    ...u,
                    board: Tv(u.board, r.payload.id, r.payload.type)
                };
            case Sv:
                return {
                    ...u,
                    board: Av(u.board, r.payload.sourceSquareId, r.payload.destSquareId)
                };
            default:
                return u;
        }
    };
    Tv = (u, r, c)=>u.map((f)=>f.map((o)=>{
                if (o.id == r) return {
                    ...o,
                    piece: c
                };
            }));
    Av = (u, r, c)=>{
        let f = null;
        return u.map((o)=>o.map((s)=>{
                if (s.id == r) return f = s.piece, {
                    ...s,
                    type: null
                };
                if (s.id == c) return {
                    ...s,
                    type: f ?? s.piece
                };
            }));
    };
    Ov = fp({
        game: tv,
        settings: nv,
        analysis: rv,
        pgn: fv,
        engine: mv,
        boardeditor: Rv
    });
    Nv = {
        key: "root",
        storage: Py,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    xv = Ay(Nv, Ov);
    Dp = fy({
        reducer: xv,
        middleware: (u)=>u({
                serializableCheck: {
                    ignoredActions: [
                        "persist/PERSIST"
                    ]
                }
            })
    });
    Dy(Dp);
    const Mv = "modulepreload", Cv = function(u) {
        return "/chess-frontend/" + u;
    }, Jh = {}, Bp = function(r, c, f) {
        let o = Promise.resolve();
        if (c && c.length > 0) {
            document.getElementsByTagName("link");
            const p = document.querySelector("meta[property=csp-nonce]"), y = p?.nonce || p?.getAttribute("nonce");
            o = Promise.allSettled(c.map((h)=>{
                if (h = Cv(h), h in Jh) return;
                Jh[h] = !0;
                const v = h.endsWith(".css"), S = v ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${h}"]${S}`)) return;
                const R = document.createElement("link");
                if (R.rel = v ? "stylesheet" : Mv, v || (R.as = "script"), R.crossOrigin = "", R.href = h, y && R.setAttribute("nonce", y), document.head.appendChild(R), v) return new Promise((b, O)=>{
                    R.addEventListener("load", b), R.addEventListener("error", ()=>O(new Error(`Unable to preload CSS for ${h}`)));
                });
            }));
        }
        function s(p) {
            const y = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (y.payload = p, window.dispatchEvent(y), !y.defaultPrevented) throw p;
        }
        return o.then((p)=>{
            for (const y of p || [])y.status === "rejected" && s(y.reason);
            return r().catch(s);
        });
    };
    var Za = {}, $h;
    function Dv() {
        if ($h) return Za;
        $h = 1, Object.defineProperty(Za, "__esModule", {
            value: !0
        }), Za.parse = p, Za.serialize = v;
        const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, f = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, s = (()=>{
            const b = function() {};
            return b.prototype = Object.create(null), b;
        })();
        function p(b, O) {
            const M = new s, B = b.length;
            if (B < 2) return M;
            const P = O?.decode || S;
            let w = 0;
            do {
                const j = b.indexOf("=", w);
                if (j === -1) break;
                const k = b.indexOf(";", w), V = k === -1 ? B : k;
                if (j > V) {
                    w = b.lastIndexOf(";", j - 1) + 1;
                    continue;
                }
                const Q = y(b, w, j), F = h(b, j, Q), Z = b.slice(Q, F);
                if (M[Z] === void 0) {
                    let $ = y(b, j + 1, V), I = h(b, V, $);
                    const he = P(b.slice($, I));
                    M[Z] = he;
                }
                w = V + 1;
            }while (w < B);
            return M;
        }
        function y(b, O, M) {
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
            const P = B(O);
            if (!r.test(P)) throw new TypeError(`argument val is invalid: ${O}`);
            let w = b + "=" + P;
            if (!M) return w;
            if (M.maxAge !== void 0) {
                if (!Number.isInteger(M.maxAge)) throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);
                w += "; Max-Age=" + M.maxAge;
            }
            if (M.domain) {
                if (!c.test(M.domain)) throw new TypeError(`option domain is invalid: ${M.domain}`);
                w += "; Domain=" + M.domain;
            }
            if (M.path) {
                if (!f.test(M.path)) throw new TypeError(`option path is invalid: ${M.path}`);
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
        return Za;
    }
    Dv();
    var Wh = "popstate";
    function Bv(u = {}) {
        function r(o, s) {
            let { pathname: p = "/", search: y = "", hash: h = "" } = an(o.location.hash.substring(1));
            return !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p), mf("", {
                pathname: p,
                search: y,
                hash: h
            }, s.state && s.state.usr || null, s.state && s.state.key || "default");
        }
        function c(o, s) {
            let p = o.document.querySelector("base"), y = "";
            if (p && p.getAttribute("href")) {
                let h = o.location.href, v = h.indexOf("#");
                y = v === -1 ? h : h.slice(0, v);
            }
            return y + "#" + (typeof s == "string" ? s : tu(s));
        }
        function f(o, s) {
            Ut(o.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`);
        }
        return Uv(r, c, f, u);
    }
    function Be(u, r) {
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
    function wv() {
        return Math.random().toString(36).substring(2, 10);
    }
    function Fh(u, r) {
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
            ...typeof r == "string" ? an(r) : r,
            state: c,
            key: r && r.key || f || wv()
        };
    }
    function tu({ pathname: u = "/", search: r = "", hash: c = "" }) {
        return r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r), c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c), u;
    }
    function an(u) {
        let r = {};
        if (u) {
            let c = u.indexOf("#");
            c >= 0 && (r.hash = u.substring(c), u = u.substring(0, c));
            let f = u.indexOf("?");
            f >= 0 && (r.search = u.substring(f), u = u.substring(0, f)), u && (r.pathname = u);
        }
        return r;
    }
    function Uv(u, r, c, f = {}) {
        let { window: o = document.defaultView, v5Compat: s = !1 } = f, p = o.history, y = "POP", h = null, v = S();
        v == null && (v = 0, p.replaceState({
            ...p.state,
            idx: v
        }, ""));
        function S() {
            return (p.state || {
                idx: null
            }).idx;
        }
        function R() {
            y = "POP";
            let P = S(), w = P == null ? null : P - v;
            v = P, h && h({
                action: y,
                location: B.location,
                delta: w
            });
        }
        function b(P, w) {
            y = "PUSH";
            let j = mf(B.location, P, w);
            c && c(j, P), v = S() + 1;
            let k = Fh(j, v), V = B.createHref(j);
            try {
                p.pushState(k, "", V);
            } catch (Q) {
                if (Q instanceof DOMException && Q.name === "DataCloneError") throw Q;
                o.location.assign(V);
            }
            s && h && h({
                action: y,
                location: B.location,
                delta: 1
            });
        }
        function O(P, w) {
            y = "REPLACE";
            let j = mf(B.location, P, w);
            c && c(j, P), v = S();
            let k = Fh(j, v), V = B.createHref(j);
            p.replaceState(k, "", V), s && h && h({
                action: y,
                location: B.location,
                delta: 0
            });
        }
        function M(P) {
            let w = o.location.origin !== "null" ? o.location.origin : o.location.href, j = typeof P == "string" ? P : tu(P);
            return j = j.replace(/ $/, "%20"), Be(w, `No window.location.(origin|href) available to create URL for href: ${j}`), new URL(j, w);
        }
        let B = {
            get action () {
                return y;
            },
            get location () {
                return u(o, p);
            },
            listen (P) {
                if (h) throw new Error("A history only accepts one active listener");
                return o.addEventListener(Wh, R), h = P, ()=>{
                    o.removeEventListener(Wh, R), h = null;
                };
            },
            createHref (P) {
                return r(o, P);
            },
            createURL: M,
            encodeLocation (P) {
                let w = M(P);
                return {
                    pathname: w.pathname,
                    search: w.search,
                    hash: w.hash
                };
            },
            push: b,
            replace: O,
            go (P) {
                return p.go(P);
            }
        };
        return B;
    }
    function wp(u, r, c = "/") {
        return zv(u, r, c, !1);
    }
    function zv(u, r, c, f) {
        let o = typeof r == "string" ? an(r) : r, s = ul(o.pathname || "/", c);
        if (s == null) return null;
        let p = Up(u);
        Pv(p);
        let y = null;
        for(let h = 0; y == null && h < p.length; ++h){
            let v = Xv(s);
            y = Yv(p[h], v, f);
        }
        return y;
    }
    function Up(u, r = [], c = [], f = "") {
        let o = (s, p, y)=>{
            let h = {
                relativePath: y === void 0 ? s.path || "" : y,
                caseSensitive: s.caseSensitive === !0,
                childrenIndex: p,
                route: s
            };
            h.relativePath.startsWith("/") && (Be(h.relativePath.startsWith(f), `Absolute route path "${h.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(f.length));
            let v = al([
                f,
                h.relativePath
            ]), S = c.concat(h);
            s.children && s.children.length > 0 && (Be(s.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`), Up(s.children, r, S, v)), !(s.path == null && !s.index) && r.push({
                path: v,
                score: Kv(v, s.index),
                routesMeta: S
            });
        };
        return u.forEach((s, p)=>{
            if (s.path === "" || !s.path?.includes("?")) o(s, p);
            else for (let y of zp(s.path))o(s, p, y);
        }), r;
    }
    function zp(u) {
        let r = u.split("/");
        if (r.length === 0) return [];
        let [c, ...f] = r, o = c.endsWith("?"), s = c.replace(/\?$/, "");
        if (f.length === 0) return o ? [
            s,
            ""
        ] : [
            s
        ];
        let p = zp(f.join("/")), y = [];
        return y.push(...p.map((h)=>h === "" ? s : [
                s,
                h
            ].join("/"))), o && y.push(...p), y.map((h)=>u.startsWith("/") && h === "" ? "/" : h);
    }
    function Pv(u) {
        u.sort((r, c)=>r.score !== c.score ? c.score - r.score : Gv(r.routesMeta.map((f)=>f.childrenIndex), c.routesMeta.map((f)=>f.childrenIndex)));
    }
    var qv = /^:[\w-]+$/, Hv = 3, kv = 2, Lv = 1, jv = 10, Qv = -2, Ih = (u)=>u === "*";
    function Kv(u, r) {
        let c = u.split("/"), f = c.length;
        return c.some(Ih) && (f += Qv), r && (f += kv), c.filter((o)=>!Ih(o)).reduce((o, s)=>o + (qv.test(s) ? Hv : s === "" ? Lv : jv), f);
    }
    function Gv(u, r) {
        return u.length === r.length && u.slice(0, -1).every((f, o)=>f === r[o]) ? u[u.length - 1] - r[r.length - 1] : 0;
    }
    function Yv(u, r, c = !1) {
        let { routesMeta: f } = u, o = {}, s = "/", p = [];
        for(let y = 0; y < f.length; ++y){
            let h = f[y], v = y === f.length - 1, S = s === "/" ? r : r.slice(s.length) || "/", R = Di({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: v
            }, S), b = h.route;
            if (!R && v && c && !f[f.length - 1].route.index && (R = Di({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: !1
            }, S)), !R) return null;
            Object.assign(o, R.params), p.push({
                params: o,
                pathname: al([
                    s,
                    R.pathname
                ]),
                pathnameBase: Wv(al([
                    s,
                    R.pathnameBase
                ])),
                route: b
            }), R.pathnameBase !== "/" && (s = al([
                s,
                R.pathnameBase
            ]));
        }
        return p;
    }
    function Di(u, r) {
        typeof u == "string" && (u = {
            path: u,
            caseSensitive: !1,
            end: !0
        });
        let [c, f] = Vv(u.path, u.caseSensitive, u.end), o = r.match(c);
        if (!o) return null;
        let s = o[0], p = s.replace(/(.)\/+$/, "$1"), y = o.slice(1);
        return {
            params: f.reduce((v, { paramName: S, isOptional: R }, b)=>{
                if (S === "*") {
                    let M = y[b] || "";
                    p = s.slice(0, s.length - M.length).replace(/(.)\/+$/, "$1");
                }
                const O = y[b];
                return R && !O ? v[S] = void 0 : v[S] = (O || "").replace(/%2F/g, "/"), v;
            }, {}),
            pathname: s,
            pathnameBase: p,
            pattern: u
        };
    }
    function Vv(u, r = !1, c = !0) {
        Ut(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`);
        let f = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (p, y, h)=>(f.push({
                paramName: y,
                isOptional: h != null
            }), h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return u.endsWith("*") ? (f.push({
            paramName: "*"
        }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [
            new RegExp(o, r ? void 0 : "i"),
            f
        ];
    }
    function Xv(u) {
        try {
            return u.split("/").map((r)=>decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
        } catch (r) {
            return Ut(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), u;
        }
    }
    function ul(u, r) {
        if (r === "/") return u;
        if (!u.toLowerCase().startsWith(r.toLowerCase())) return null;
        let c = r.endsWith("/") ? r.length - 1 : r.length, f = u.charAt(c);
        return f && f !== "/" ? null : u.slice(c) || "/";
    }
    function Zv(u, r = "/") {
        let { pathname: c, search: f = "", hash: o = "" } = typeof u == "string" ? an(u) : u;
        return {
            pathname: c ? c.startsWith("/") ? c : Jv(c, r) : r,
            search: Fv(f),
            hash: Iv(o)
        };
    }
    function Jv(u, r) {
        let c = r.replace(/\/+$/, "").split("/");
        return u.split("/").forEach((o)=>{
            o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
        }), c.length > 1 ? c.join("/") : "/";
    }
    function of(u, r, c, f) {
        return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function $v(u) {
        return u.filter((r, c)=>c === 0 || r.route.path && r.route.path.length > 0);
    }
    function Pp(u) {
        let r = $v(u);
        return r.map((c, f)=>f === r.length - 1 ? c.pathname : c.pathnameBase);
    }
    function qp(u, r, c, f = !1) {
        let o;
        typeof u == "string" ? o = an(u) : (o = {
            ...u
        }, Be(!o.pathname || !o.pathname.includes("?"), of("?", "pathname", "search", o)), Be(!o.pathname || !o.pathname.includes("#"), of("#", "pathname", "hash", o)), Be(!o.search || !o.search.includes("#"), of("#", "search", "hash", o)));
        let s = u === "" || o.pathname === "", p = s ? "/" : o.pathname, y;
        if (p == null) y = c;
        else {
            let R = r.length - 1;
            if (!f && p.startsWith("..")) {
                let b = p.split("/");
                for(; b[0] === "..";)b.shift(), R -= 1;
                o.pathname = b.join("/");
            }
            y = R >= 0 ? r[R] : "/";
        }
        let h = Zv(o, y), v = p && p !== "/" && p.endsWith("/"), S = (s || p === ".") && c.endsWith("/");
        return !h.pathname.endsWith("/") && (v || S) && (h.pathname += "/"), h;
    }
    var al = (u)=>u.join("/").replace(/\/\/+/g, "/"), Wv = (u)=>u.replace(/\/+$/, "").replace(/^\/*/, "/"), Fv = (u)=>!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, Iv = (u)=>!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
    function eg(u) {
        return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
    }
    var Hp = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(Hp);
    var tg = [
        "GET",
        ...Hp
    ];
    new Set(tg);
    var Vn = T.createContext(null);
    Vn.displayName = "DataRouter";
    var wi = T.createContext(null);
    wi.displayName = "DataRouterState";
    var kp = T.createContext({
        isTransitioning: !1
    });
    kp.displayName = "ViewTransition";
    var lg = T.createContext(new Map);
    lg.displayName = "Fetchers";
    var ng = T.createContext(null);
    ng.displayName = "Await";
    var jt = T.createContext(null);
    jt.displayName = "Navigation";
    var lu = T.createContext(null);
    lu.displayName = "Location";
    var il = T.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    il.displayName = "Route";
    var Tf = T.createContext(null);
    Tf.displayName = "RouteError";
    function ag(u, { relative: r } = {}) {
        Be(nu(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: c, navigator: f } = T.useContext(jt), { hash: o, pathname: s, search: p } = au(u, {
            relative: r
        }), y = s;
        return c !== "/" && (y = s === "/" ? c : al([
            c,
            s
        ])), f.createHref({
            pathname: y,
            search: p,
            hash: o
        });
    }
    function nu() {
        return T.useContext(lu) != null;
    }
    function un() {
        return Be(nu(), "useLocation() may be used only in the context of a <Router> component."), T.useContext(lu).location;
    }
    var Lp = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function jp(u) {
        T.useContext(jt).static || T.useLayoutEffect(u);
    }
    function ug() {
        let { isDataRoute: u } = T.useContext(il);
        return u ? gg() : ig();
    }
    function ig() {
        Be(nu(), "useNavigate() may be used only in the context of a <Router> component.");
        let u = T.useContext(Vn), { basename: r, navigator: c } = T.useContext(jt), { matches: f } = T.useContext(il), { pathname: o } = un(), s = JSON.stringify(Pp(f)), p = T.useRef(!1);
        return jp(()=>{
            p.current = !0;
        }), T.useCallback((h, v = {})=>{
            if (Ut(p.current, Lp), !p.current) return;
            if (typeof h == "number") {
                c.go(h);
                return;
            }
            let S = qp(h, JSON.parse(s), o, v.relative === "path");
            u == null && r !== "/" && (S.pathname = S.pathname === "/" ? r : al([
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
    T.createContext(null);
    function au(u, { relative: r } = {}) {
        let { matches: c } = T.useContext(il), { pathname: f } = un(), o = JSON.stringify(Pp(c));
        return T.useMemo(()=>qp(u, JSON.parse(o), f, r === "path"), [
            u,
            o,
            f,
            r
        ]);
    }
    function rg(u, r) {
        return Qp(u, r);
    }
    function Qp(u, r, c, f) {
        Be(nu(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: s } = T.useContext(jt), { matches: p } = T.useContext(il), y = p[p.length - 1], h = y ? y.params : {}, v = y ? y.pathname : "/", S = y ? y.pathnameBase : "/", R = y && y.route;
        {
            let j = R && R.path || "";
            Kp(v, !R || j.endsWith("*") || j.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j === "/" ? "*" : `${j}/*`}">.`);
        }
        let b = un(), O;
        if (r) {
            let j = typeof r == "string" ? an(r) : r;
            Be(S === "/" || j.pathname?.startsWith(S), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${j.pathname}" was given in the \`location\` prop.`), O = j;
        } else O = b;
        let M = O.pathname || "/", B = M;
        if (S !== "/") {
            let j = S.replace(/^\//, "").split("/");
            B = "/" + M.replace(/^\//, "").split("/").slice(j.length).join("/");
        }
        let P = !s && c && c.matches && c.matches.length > 0 ? c.matches : wp(u, {
            pathname: B
        });
        Ut(R || P != null, `No routes matched location "${O.pathname}${O.search}${O.hash}" `), Ut(P == null || P[P.length - 1].route.element !== void 0 || P[P.length - 1].route.Component !== void 0 || P[P.length - 1].route.lazy !== void 0, `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let w = dg(P && P.map((j)=>Object.assign({}, j, {
                params: Object.assign({}, h, j.params),
                pathname: al([
                    S,
                    o.encodeLocation ? o.encodeLocation(j.pathname).pathname : j.pathname
                ]),
                pathnameBase: j.pathnameBase === "/" ? S : al([
                    S,
                    o.encodeLocation ? o.encodeLocation(j.pathnameBase).pathname : j.pathnameBase
                ])
            })), p, c, f);
        return r && w ? T.createElement(lu.Provider, {
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
    function cg() {
        let u = vg(), r = eg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, f = "rgba(200,200,200, 0.5)", o = {
            padding: "0.5rem",
            backgroundColor: f
        }, s = {
            padding: "2px 4px",
            backgroundColor: f
        }, p = null;
        return console.error("Error handled by React Router default ErrorBoundary:", u), p = T.createElement(T.Fragment, null, T.createElement("p", null, "💿 Hey developer 👋"), T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", T.createElement("code", {
            style: s
        }, "ErrorBoundary"), " or", " ", T.createElement("code", {
            style: s
        }, "errorElement"), " prop on your route.")), T.createElement(T.Fragment, null, T.createElement("h2", null, "Unexpected Application Error!"), T.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), c ? T.createElement("pre", {
            style: o
        }, c) : null, p);
    }
    var fg = T.createElement(cg, null), og = class extends T.Component {
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
            return this.state.error !== void 0 ? T.createElement(il.Provider, {
                value: this.props.routeContext
            }, T.createElement(Tf.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function sg({ routeContext: u, match: r, children: c }) {
        let f = T.useContext(Vn);
        return f && f.static && f.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = r.route.id), T.createElement(il.Provider, {
            value: u
        }, c);
    }
    function dg(u, r = [], c = null, f = null) {
        if (u == null) {
            if (!c) return null;
            if (c.errors) u = c.matches;
            else if (r.length === 0 && !c.initialized && c.matches.length > 0) u = c.matches;
            else return null;
        }
        let o = u, s = c?.errors;
        if (s != null) {
            let h = o.findIndex((v)=>v.route.id && s?.[v.route.id] !== void 0);
            Be(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`), o = o.slice(0, Math.min(o.length, h + 1));
        }
        let p = !1, y = -1;
        if (c) for(let h = 0; h < o.length; h++){
            let v = o[h];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (y = h), v.route.id) {
                let { loaderData: S, errors: R } = c, b = v.route.loader && !S.hasOwnProperty(v.route.id) && (!R || R[v.route.id] === void 0);
                if (v.route.lazy || b) {
                    p = !0, y >= 0 ? o = o.slice(0, y + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((h, v, S)=>{
            let R, b = !1, O = null, M = null;
            c && (R = s && v.route.id ? s[v.route.id] : void 0, O = v.route.errorElement || fg, p && (y < 0 && S === 0 ? (Kp("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), b = !0, M = null) : y === S && (b = !0, M = v.route.hydrateFallbackElement || null)));
            let B = r.concat(o.slice(0, S + 1)), P = ()=>{
                let w;
                return R ? w = O : b ? w = M : v.route.Component ? w = T.createElement(v.route.Component, null) : v.route.element ? w = v.route.element : w = h, T.createElement(sg, {
                    match: v,
                    routeContext: {
                        outlet: h,
                        matches: B,
                        isDataRoute: c != null
                    },
                    children: w
                });
            };
            return c && (v.route.ErrorBoundary || v.route.errorElement || S === 0) ? T.createElement(og, {
                location: c.location,
                revalidation: c.revalidation,
                component: O,
                error: R,
                children: P(),
                routeContext: {
                    outlet: null,
                    matches: B,
                    isDataRoute: !0
                }
            }) : P();
        }, null);
    }
    function Af(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function hg(u) {
        let r = T.useContext(Vn);
        return Be(r, Af(u)), r;
    }
    function pg(u) {
        let r = T.useContext(wi);
        return Be(r, Af(u)), r;
    }
    function mg(u) {
        let r = T.useContext(il);
        return Be(r, Af(u)), r;
    }
    function Of(u) {
        let r = mg(u), c = r.matches[r.matches.length - 1];
        return Be(c.route.id, `${u} can only be used on routes that contain a unique "id"`), c.route.id;
    }
    function yg() {
        return Of("useRouteId");
    }
    function vg() {
        let u = T.useContext(Tf), r = pg("useRouteError"), c = Of("useRouteError");
        return u !== void 0 ? u : r.errors?.[c];
    }
    function gg() {
        let { router: u } = hg("useNavigate"), r = Of("useNavigate"), c = T.useRef(!1);
        return jp(()=>{
            c.current = !0;
        }), T.useCallback(async (o, s = {})=>{
            Ut(c.current, Lp), c.current && (typeof o == "number" ? u.navigate(o) : await u.navigate(o, {
                fromRouteId: r,
                ...s
            }));
        }, [
            u,
            r
        ]);
    }
    var ep = {};
    function Kp(u, r, c) {
        !r && !ep[u] && (ep[u] = !0, Ut(!1, c));
    }
    T.memo(bg);
    function bg({ routes: u, future: r, state: c }) {
        return Qp(u, void 0, c, r);
    }
    function Fa(u) {
        Be(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function Sg({ basename: u = "/", children: r = null, location: c, navigationType: f = "POP", navigator: o, static: s = !1 }) {
        Be(!nu(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let p = u.replace(/^\/*/, "/"), y = T.useMemo(()=>({
                basename: p,
                navigator: o,
                static: s,
                future: {}
            }), [
            p,
            o,
            s
        ]);
        typeof c == "string" && (c = an(c));
        let { pathname: h = "/", search: v = "", hash: S = "", state: R = null, key: b = "default" } = c, O = T.useMemo(()=>{
            let M = ul(h, p);
            return M == null ? null : {
                location: {
                    pathname: M,
                    search: v,
                    hash: S,
                    state: R,
                    key: b
                },
                navigationType: f
            };
        }, [
            p,
            h,
            v,
            S,
            R,
            b,
            f
        ]);
        return Ut(O != null, `<Router basename="${p}"> is not able to match the URL "${h}${v}${S}" because it does not start with the basename, so the <Router> won't render anything.`), O == null ? null : T.createElement(jt.Provider, {
            value: y
        }, T.createElement(lu.Provider, {
            children: r,
            value: O
        }));
    }
    function Eg({ children: u, location: r }) {
        return rg(yf(u), r);
    }
    function yf(u, r = []) {
        let c = [];
        return T.Children.forEach(u, (f, o)=>{
            if (!T.isValidElement(f)) return;
            let s = [
                ...r,
                o
            ];
            if (f.type === T.Fragment) {
                c.push.apply(c, yf(f.props.children, s));
                return;
            }
            Be(f.type === Fa, `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Be(!f.props.index || !f.props.children, "An index route cannot have child routes.");
            let p = {
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
            f.props.children && (p.children = yf(f.props.children, s)), c.push(p);
        }), c;
    }
    var Ni = "get", xi = "application/x-www-form-urlencoded";
    function Ui(u) {
        return u != null && typeof u.tagName == "string";
    }
    function _g(u) {
        return Ui(u) && u.tagName.toLowerCase() === "button";
    }
    function Rg(u) {
        return Ui(u) && u.tagName.toLowerCase() === "form";
    }
    function Tg(u) {
        return Ui(u) && u.tagName.toLowerCase() === "input";
    }
    function Ag(u) {
        return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
    }
    function Og(u, r) {
        return u.button === 0 && (!r || r === "_self") && !Ag(u);
    }
    var Ti = null;
    function Ng() {
        if (Ti === null) try {
            new FormData(document.createElement("form"), 0), Ti = !1;
        } catch  {
            Ti = !0;
        }
        return Ti;
    }
    var xg = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function sf(u) {
        return u != null && !xg.has(u) ? (Ut(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xi}"`), null) : u;
    }
    function Mg(u, r) {
        let c, f, o, s, p;
        if (Rg(u)) {
            let y = u.getAttribute("action");
            f = y ? ul(y, r) : null, c = u.getAttribute("method") || Ni, o = sf(u.getAttribute("enctype")) || xi, s = new FormData(u);
        } else if (_g(u) || Tg(u) && (u.type === "submit" || u.type === "image")) {
            let y = u.form;
            if (y == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let h = u.getAttribute("formaction") || y.getAttribute("action");
            if (f = h ? ul(h, r) : null, c = u.getAttribute("formmethod") || y.getAttribute("method") || Ni, o = sf(u.getAttribute("formenctype")) || sf(y.getAttribute("enctype")) || xi, s = new FormData(y, u), !Ng()) {
                let { name: v, type: S, value: R } = u;
                if (S === "image") {
                    let b = v ? `${v}.` : "";
                    s.append(`${b}x`, "0"), s.append(`${b}y`, "0");
                } else v && s.append(v, R);
            }
        } else {
            if (Ui(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            c = Ni, f = null, o = xi, p = u;
        }
        return s && o === "text/plain" && (p = s, s = void 0), {
            action: f,
            method: c.toLowerCase(),
            encType: o,
            formData: s,
            body: p
        };
    }
    function Nf(u, r) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(r);
    }
    async function Cg(u, r) {
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
    function Dg(u) {
        return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
    }
    async function Bg(u, r, c) {
        let f = await Promise.all(u.map(async (o)=>{
            let s = r.routes[o.route.id];
            if (s) {
                let p = await Cg(s, c);
                return p.links ? p.links() : [];
            }
            return [];
        }));
        return Pg(f.flat(1).filter(Dg).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function tp(u, r, c, f, o, s) {
        let p = (h, v)=>c[v] ? h.route.id !== c[v].route.id : !0, y = (h, v)=>c[v].pathname !== h.pathname || c[v].route.path?.endsWith("*") && c[v].params["*"] !== h.params["*"];
        return s === "assets" ? r.filter((h, v)=>p(h, v) || y(h, v)) : s === "data" ? r.filter((h, v)=>{
            let S = f.routes[h.route.id];
            if (!S || !S.hasLoader) return !1;
            if (p(h, v) || y(h, v)) return !0;
            if (h.route.shouldRevalidate) {
                let R = h.route.shouldRevalidate({
                    currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                    currentParams: c[0]?.params || {},
                    nextUrl: new URL(u, window.origin),
                    nextParams: h.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof R == "boolean") return R;
            }
            return !0;
        }) : [];
    }
    function wg(u, r, { includeHydrateFallback: c } = {}) {
        return Ug(u.map((f)=>{
            let o = r.routes[f.route.id];
            if (!o) return [];
            let s = [
                o.module
            ];
            return o.clientActionModule && (s = s.concat(o.clientActionModule)), o.clientLoaderModule && (s = s.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (s = s.concat(o.hydrateFallbackModule)), o.imports && (s = s.concat(o.imports)), s;
        }).flat(1));
    }
    function Ug(u) {
        return [
            ...new Set(u)
        ];
    }
    function zg(u) {
        let r = {}, c = Object.keys(u).sort();
        for (let f of c)r[f] = u[f];
        return r;
    }
    function Pg(u, r) {
        let c = new Set;
        return new Set(r), u.reduce((f, o)=>{
            let s = JSON.stringify(zg(o));
            return c.has(s) || (c.add(s), f.push({
                key: s,
                link: o
            })), f;
        }, []);
    }
    function qg(u, r) {
        let c = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
        return c.pathname === "/" ? c.pathname = "_root.data" : r && ul(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
    }
    function Gp() {
        let u = T.useContext(Vn);
        return Nf(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
    }
    function Hg() {
        let u = T.useContext(wi);
        return Nf(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
    }
    var xf = T.createContext(void 0);
    xf.displayName = "FrameworkContext";
    function Yp() {
        let u = T.useContext(xf);
        return Nf(u, "You must render this element inside a <HydratedRouter> element"), u;
    }
    function kg(u, r) {
        let c = T.useContext(xf), [f, o] = T.useState(!1), [s, p] = T.useState(!1), { onFocus: y, onBlur: h, onMouseEnter: v, onMouseLeave: S, onTouchStart: R } = r, b = T.useRef(null);
        T.useEffect(()=>{
            if (u === "render" && p(!0), u === "viewport") {
                let B = (w)=>{
                    w.forEach((j)=>{
                        p(j.isIntersecting);
                    });
                }, P = new IntersectionObserver(B, {
                    threshold: .5
                });
                return b.current && P.observe(b.current), ()=>{
                    P.disconnect();
                };
            }
        }, [
            u
        ]), T.useEffect(()=>{
            if (f) {
                let B = setTimeout(()=>{
                    p(!0);
                }, 100);
                return ()=>{
                    clearTimeout(B);
                };
            }
        }, [
            f
        ]);
        let O = ()=>{
            o(!0);
        }, M = ()=>{
            o(!1), p(!1);
        };
        return c ? u !== "intent" ? [
            s,
            b,
            {}
        ] : [
            s,
            b,
            {
                onFocus: Ja(y, O),
                onBlur: Ja(h, M),
                onMouseEnter: Ja(v, O),
                onMouseLeave: Ja(S, M),
                onTouchStart: Ja(R, O)
            }
        ] : [
            !1,
            b,
            {}
        ];
    }
    function Ja(u, r) {
        return (c)=>{
            u && u(c), c.defaultPrevented || r(c);
        };
    }
    function Lg({ page: u, ...r }) {
        let { router: c } = Gp(), f = T.useMemo(()=>wp(c.routes, u, c.basename), [
            c.routes,
            u,
            c.basename
        ]);
        return f ? T.createElement(Qg, {
            page: u,
            matches: f,
            ...r
        }) : null;
    }
    function jg(u) {
        let { manifest: r, routeModules: c } = Yp(), [f, o] = T.useState([]);
        return T.useEffect(()=>{
            let s = !1;
            return Bg(u, r, c).then((p)=>{
                s || o(p);
            }), ()=>{
                s = !0;
            };
        }, [
            u,
            r,
            c
        ]), f;
    }
    function Qg({ page: u, matches: r, ...c }) {
        let f = un(), { manifest: o, routeModules: s } = Yp(), { basename: p } = Gp(), { loaderData: y, matches: h } = Hg(), v = T.useMemo(()=>tp(u, r, h, o, f, "data"), [
            u,
            r,
            h,
            o,
            f
        ]), S = T.useMemo(()=>tp(u, r, h, o, f, "assets"), [
            u,
            r,
            h,
            o,
            f
        ]), R = T.useMemo(()=>{
            if (u === f.pathname + f.search + f.hash) return [];
            let M = new Set, B = !1;
            if (r.forEach((w)=>{
                let j = o.routes[w.route.id];
                !j || !j.hasLoader || (!v.some((k)=>k.route.id === w.route.id) && w.route.id in y && s[w.route.id]?.shouldRevalidate || j.hasClientLoader ? B = !0 : M.add(w.route.id));
            }), M.size === 0) return [];
            let P = qg(u, p);
            return B && M.size > 0 && P.searchParams.set("_routes", r.filter((w)=>M.has(w.route.id)).map((w)=>w.route.id).join(",")), [
                P.pathname + P.search
            ];
        }, [
            p,
            y,
            f,
            o,
            v,
            r,
            u,
            s
        ]), b = T.useMemo(()=>wg(S, o), [
            S,
            o
        ]), O = jg(S);
        return T.createElement(T.Fragment, null, R.map((M)=>T.createElement("link", {
                key: M,
                rel: "prefetch",
                as: "fetch",
                href: M,
                ...c
            })), b.map((M)=>T.createElement("link", {
                key: M,
                rel: "modulepreload",
                href: M,
                ...c
            })), O.map(({ key: M, link: B })=>T.createElement("link", {
                key: M,
                ...B
            })));
    }
    function Kg(...u) {
        return (r)=>{
            u.forEach((c)=>{
                typeof c == "function" ? c(r) : c != null && (c.current = r);
            });
        };
    }
    var Vp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        Vp && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function Gg({ basename: u, children: r, window: c }) {
        let f = T.useRef();
        f.current == null && (f.current = Bv({
            window: c,
            v5Compat: !0
        }));
        let o = f.current, [s, p] = T.useState({
            action: o.action,
            location: o.location
        }), y = T.useCallback((h)=>{
            T.startTransition(()=>p(h));
        }, [
            p
        ]);
        return T.useLayoutEffect(()=>o.listen(y), [
            o,
            y
        ]), T.createElement(Sg, {
            basename: u,
            children: r,
            location: s.location,
            navigationType: s.action,
            navigator: o
        });
    }
    var Xp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ia = T.forwardRef(function({ onClick: r, discover: c = "render", prefetch: f = "none", relative: o, reloadDocument: s, replace: p, state: y, target: h, to: v, preventScrollReset: S, viewTransition: R, ...b }, O) {
        let { basename: M } = T.useContext(jt), B = typeof v == "string" && Xp.test(v), P, w = !1;
        if (typeof v == "string" && B && (P = v, Vp)) try {
            let I = new URL(window.location.href), he = v.startsWith("//") ? new URL(I.protocol + v) : new URL(v), Ee = ul(he.pathname, M);
            he.origin === I.origin && Ee != null ? v = Ee + he.search + he.hash : w = !0;
        } catch  {
            Ut(!1, `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let j = ag(v, {
            relative: o
        }), [k, V, Q] = kg(f, b), F = Zg(v, {
            replace: p,
            state: y,
            target: h,
            preventScrollReset: S,
            relative: o,
            viewTransition: R
        });
        function Z(I) {
            r && r(I), I.defaultPrevented || F(I);
        }
        let $ = T.createElement("a", {
            ...b,
            ...Q,
            href: P || j,
            onClick: w || s ? r : Z,
            ref: Kg(O, V),
            target: h,
            "data-discover": !B && c === "render" ? "true" : void 0
        });
        return k && !B ? T.createElement(T.Fragment, null, $, T.createElement(Lg, {
            page: j
        })) : $;
    });
    Ia.displayName = "Link";
    var Yg = T.forwardRef(function({ "aria-current": r = "page", caseSensitive: c = !1, className: f = "", end: o = !1, style: s, to: p, viewTransition: y, children: h, ...v }, S) {
        let R = au(p, {
            relative: v.relative
        }), b = un(), O = T.useContext(wi), { navigator: M, basename: B } = T.useContext(jt), P = O != null && Ig(R) && y === !0, w = M.encodeLocation ? M.encodeLocation(R).pathname : R.pathname, j = b.pathname, k = O && O.navigation && O.navigation.location ? O.navigation.location.pathname : null;
        c || (j = j.toLowerCase(), k = k ? k.toLowerCase() : null, w = w.toLowerCase()), k && B && (k = ul(k, B) || k);
        const V = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
        let Q = j === w || !o && j.startsWith(w) && j.charAt(V) === "/", F = k != null && (k === w || !o && k.startsWith(w) && k.charAt(w.length) === "/"), Z = {
            isActive: Q,
            isPending: F,
            isTransitioning: P
        }, $ = Q ? r : void 0, I;
        typeof f == "function" ? I = f(Z) : I = [
            f,
            Q ? "active" : null,
            F ? "pending" : null,
            P ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let he = typeof s == "function" ? s(Z) : s;
        return T.createElement(Ia, {
            ...v,
            "aria-current": $,
            className: I,
            ref: S,
            style: he,
            to: p,
            viewTransition: y
        }, typeof h == "function" ? h(Z) : h);
    });
    Yg.displayName = "NavLink";
    var Vg = T.forwardRef(({ discover: u = "render", fetcherKey: r, navigate: c, reloadDocument: f, replace: o, state: s, method: p = Ni, action: y, onSubmit: h, relative: v, preventScrollReset: S, viewTransition: R, ...b }, O)=>{
        let M = Wg(), B = Fg(y, {
            relative: v
        }), P = p.toLowerCase() === "get" ? "get" : "post", w = typeof y == "string" && Xp.test(y), j = (k)=>{
            if (h && h(k), k.defaultPrevented) return;
            k.preventDefault();
            let V = k.nativeEvent.submitter, Q = V?.getAttribute("formmethod") || p;
            M(V || k.currentTarget, {
                fetcherKey: r,
                method: Q,
                navigate: c,
                replace: o,
                state: s,
                relative: v,
                preventScrollReset: S,
                viewTransition: R
            });
        };
        return T.createElement("form", {
            ref: O,
            method: P,
            action: B,
            onSubmit: f ? h : j,
            ...b,
            "data-discover": !w && u === "render" ? "true" : void 0
        });
    });
    Vg.displayName = "Form";
    function Xg(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Zp(u) {
        let r = T.useContext(Vn);
        return Be(r, Xg(u)), r;
    }
    function Zg(u, { target: r, replace: c, state: f, preventScrollReset: o, relative: s, viewTransition: p } = {}) {
        let y = ug(), h = un(), v = au(u, {
            relative: s
        });
        return T.useCallback((S)=>{
            if (Og(S, r)) {
                S.preventDefault();
                let R = c !== void 0 ? c : tu(h) === tu(v);
                y(u, {
                    replace: R,
                    state: f,
                    preventScrollReset: o,
                    relative: s,
                    viewTransition: p
                });
            }
        }, [
            h,
            y,
            v,
            c,
            f,
            r,
            u,
            o,
            s,
            p
        ]);
    }
    var Jg = 0, $g = ()=>`__${String(++Jg)}__`;
    function Wg() {
        let { router: u } = Zp("useSubmit"), { basename: r } = T.useContext(jt), c = yg();
        return T.useCallback(async (f, o = {})=>{
            let { action: s, method: p, encType: y, formData: h, body: v } = Mg(f, r);
            if (o.navigate === !1) {
                let S = o.fetcherKey || $g();
                await u.fetch(S, c, o.action || s, {
                    preventScrollReset: o.preventScrollReset,
                    formData: h,
                    body: v,
                    formMethod: o.method || p,
                    formEncType: o.encType || y,
                    flushSync: o.flushSync
                });
            } else await u.navigate(o.action || s, {
                preventScrollReset: o.preventScrollReset,
                formData: h,
                body: v,
                formMethod: o.method || p,
                formEncType: o.encType || y,
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
    function Fg(u, { relative: r } = {}) {
        let { basename: c } = T.useContext(jt), f = T.useContext(il);
        Be(f, "useFormAction must be used inside a RouteContext");
        let [o] = f.matches.slice(-1), s = {
            ...au(u || ".", {
                relative: r
            })
        }, p = un();
        if (u == null) {
            s.search = p.search;
            let y = new URLSearchParams(s.search), h = y.getAll("index");
            if (h.some((S)=>S === "")) {
                y.delete("index"), h.filter((R)=>R).forEach((R)=>y.append("index", R));
                let S = y.toString();
                s.search = S ? `?${S}` : "";
            }
        }
        return (!u || u === ".") && o.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (s.pathname = s.pathname === "/" ? c : al([
            c,
            s.pathname
        ])), tu(s);
    }
    function Ig(u, r = {}) {
        let c = T.useContext(kp);
        Be(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: f } = Zp("useViewTransitionState"), o = au(u, {
            relative: r.relative
        });
        if (!c.isTransitioning) return !1;
        let s = ul(c.currentLocation.pathname, f) || c.currentLocation.pathname, p = ul(c.nextLocation.pathname, f) || c.nextLocation.pathname;
        return Di(o.pathname, p) != null || Di(o.pathname, s) != null;
    }
    new TextEncoder;
    const eb = T.createContext(), tb = ({ children: u })=>{
        const r = (S, R)=>{
            const b = localStorage.getItem(S);
            return b !== null ? JSON.parse(b) : R;
        }, [c, f] = T.useState(()=>r(ge.THEME_KEY, ge.THEME)), [o, s] = T.useState(()=>r(ge.ENABLE_SOUND_KEY, ge.ENABLE_SOUND)), [p, y] = T.useState(()=>r(ge.TIMER_DURATION_KEY, ge.TIMER_DURATION)), [h, v] = T.useState(()=>r(ge.IS_FLIPPED_KEY, ge.IS_FLIPPED));
        return T.useEffect(()=>localStorage.setItem(ge.THEME_KEY, JSON.stringify(c)), [
            c
        ]), T.useEffect(()=>localStorage.setItem(ge.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), T.useEffect(()=>localStorage.setItem(ge.TIMER_DURATION_KEY, JSON.stringify(p)), [
            p
        ]), T.useEffect(()=>localStorage.setItem(ge.IS_FLIPPED_KEY, JSON.stringify(h)), [
            h
        ]), K.jsx(eb.Provider, {
            value: {
                theme: c,
                setTheme: f,
                enableSound: o,
                setEnableSound: s,
                timerDuration: p,
                setTimerDuration: y,
                isFlipped: h,
                setIsFlipped: v
            },
            children: u
        });
    };
    lb = function(u, r = "lite", c = 8e3) {
        const f = T.useRef(null), o = T.useRef(null), s = T.useRef(null), p = T.useRef(null), y = T.useRef(!1), h = T.useRef([]), v = T.useRef(!0), S = T.useRef(!1), R = T.useRef(!1), b = T.useCallback(()=>{
            if (!(S.current || !f.current)) {
                for(S.current = !0; h.current.length > 0;){
                    const Z = h.current.findIndex((I)=>I.type === "stop"), $ = Z >= 0 ? h.current.splice(Z, 1)[0] : h.current.shift();
                    $ && f.current.postMessage($.cmd);
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
            f.current || (r === "lite" ? f.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : f.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), f.current.postMessage("uci"), console.log("Initializing worker ..."), f.current.onmessage = (Z)=>{
                const $ = Z.data;
                if (u && u($), typeof $ == "string") {
                    if ($ === "readyok" || $.startsWith("bestmove")) v.current = !0;
                    else if ($.startsWith("info") && $.includes("score")) {
                        const I = $.match(/score (cp|mate) (-?\d+)/);
                        if (I) {
                            const he = I[1], Ee = parseInt(I[2], 10), Ae = he === "cp" ? Ee / 100 : Ee > 0 ? 10 : -10;
                            o.current && (o.current(Ae), o.current = null);
                        }
                    }
                }
            }, f.current.onerror = (Z)=>{
                console.error("Error with Stockfish worker:", Z);
            });
        }, [
            u,
            r
        ]), B = T.useCallback(()=>{
            f.current && f.current.terminate(), r === "lite" ? f.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : f.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), f.current.postMessage("uci"), console.log("Intialising worker ..."), f.current.onmessage = (Z)=>{
                const $ = Z.data;
                if (u && u($), typeof $ == "string") {
                    if ($ === "readyok" || $.startsWith("bestmove")) v.current = !0;
                    else if ($.startsWith("info") && $.includes("score")) {
                        const I = $.match(/score (cp|mate) (-?\d+)/);
                        if (I) {
                            const he = I[1], Ee = parseInt(I[2], 10), Ae = he === "cp" ? Ee / 100 : Ee > 0 ? 10 : -10;
                            o.current && (o.current(Ae), o.current = null);
                        }
                    }
                }
            }, f.current.onerror = (Z)=>{
                console.error("Error with Stockfish worker:", Z);
            };
        }, [
            u,
            r
        ]), P = T.useCallback((Z)=>{
            f.current && O("normal", Z);
        }, []), w = T.useCallback((Z)=>{
            Z.forEach(($)=>{
                O("normal", `setoption name ${$.name} value ${$.value}`);
            });
        }, [
            P
        ]), j = T.useCallback((Z, $ = [])=>{
            let I = `position fen ${Z}`;
            if ($.length > 0) {
                const he = $.join(" ");
                I += ` moves ${he}`;
            }
            O("normal", I);
        }, [
            P
        ]), k = T.useCallback((Z)=>{
            console.log("Attempt stopSearch..", Z), f.current && (console.log("try stopSearch ...", Z), y.current && (console.log("Interrupting current search...", Z), O("stop", "stop"), y.current = !1, s.current && (clearTimeout(s.current), s.current = null)));
        }, []), V = T.useCallback((Z)=>{
            if (!R.current) {
                console.warn("Engine disabled. Search not started.");
                return;
            }
            f.current || (console.log("Starting engine on demand..."), M()), clearTimeout(s.current), k("pre startSearch"), p.current && clearTimeout(p.current), p.current = setTimeout(()=>{
                y.current = !0, O("normal", `position fen ${Z}`), O("normal", "go infinite"), s.current = setTimeout(()=>{
                    k("startSearch timer expire");
                }, c);
            }, 50);
        }, [
            c,
            k
        ]), Q = T.useCallback(()=>{
            f.current && (f.current.terminate(), f.current = null), y.current = !1, v.current = !0, s.current && (clearTimeout(s.current), s.current = null);
        }, []), F = T.useCallback((Z)=>{
            Z ? console.log("Permission granted: engine allowed to start if needed") : (console.log("Permission revoked: stopping engine"), k("permission revoked"), Q());
        }, [
            k,
            Q
        ]);
        return T.useEffect(()=>()=>{
                Q();
            }, []), {
            initEngine: B,
            setOptions: w,
            setFen: j,
            startSearch: V,
            stopSearch: k,
            terminateEngine: Q,
            syncEnabledState: F
        };
    };
    let Jp, nb, ub;
    Jp = T.createContext();
    Gb = ()=>T.useContext(Jp);
    nb = ({ children: u })=>{
        const r = T.useRef(null), c = T.useCallback((s)=>{
            r.current && r.current(s);
        }, []), f = lb(c), o = T.useCallback((s)=>{
            r.current = s;
        }, []);
        return K.jsx(Jp.Provider, {
            value: {
                ...f,
                setOnMessage: o
            },
            children: u
        });
    };
    ab = ()=>{
        const [u, r] = T.useState(document.body.classList.contains("dark-theme")), c = ()=>{
            document.body.classList.toggle("dark-theme"), r(!u);
        }, f = ()=>{
            const s = new Date().getHours();
            return s < 6 || s > 18;
        };
        return T.useEffect(()=>{
            f() != u && c();
        }, []), K.jsx("button", {
            onClick: c,
            className: "theme-toggle-btn",
            children: u ? "☀️" : "🌙"
        });
    };
    ub = ({ labelText: u, toggle: r, handleToggle: c })=>K.jsxs("div", {
            className: "toggle-container",
            children: [
                K.jsx("span", {
                    className: "toggle-label",
                    children: u
                }),
                K.jsxs("label", {
                    className: "switch",
                    children: [
                        K.jsx("input", {
                            type: "checkbox",
                            checked: r,
                            onChange: c
                        }),
                        K.jsx("span", {
                            className: "slider"
                        })
                    ]
                })
            ]
        });
    function ib({ playerToMove: u, setPlayerToMove: r }) {
        const c = (f)=>{
            r(f);
        };
        return K.jsxs("div", {
            className: "move-toggle",
            children: [
                K.jsx("button", {
                    className: `move-option ${u === "w" ? "active" : ""}`,
                    onClick: ()=>c("w"),
                    children: "White"
                }),
                K.jsx("button", {
                    className: `move-option ${u === "b" ? "active" : ""}`,
                    onClick: ()=>c("b"),
                    children: "Black"
                })
            ]
        });
    }
    const rb = nn.memo(({ onSubmit: u })=>{
        const [r, c] = T.useState(!1), [f, o] = T.useState(""), s = ()=>c(!0), p = ()=>{
            c(!1), o("");
        }, y = (v)=>{
            v.target.classList.contains("fen-popup-overlay") && p();
        }, h = (v)=>{
            v.preventDefault(), u(f), p();
        };
        return K.jsxs(K.Fragment, {
            children: [
                K.jsx("button", {
                    className: "action-button",
                    onClick: s,
                    children: "Set FEN"
                }),
                r && K.jsx("div", {
                    className: "fen-popup-overlay",
                    onClick: y,
                    children: K.jsxs("div", {
                        className: "fen-popup",
                        children: [
                            K.jsx("h5", {
                                children: "Setup board from FEN "
                            }),
                            K.jsx("button", {
                                className: "fen-close",
                                onClick: p,
                                children: "×"
                            }),
                            K.jsxs("form", {
                                onSubmit: h,
                                className: "fen-input-form",
                                children: [
                                    K.jsx("input", {
                                        type: "text",
                                        value: f,
                                        onChange: (v)=>o(v.target.value),
                                        placeholder: "Enter FEN",
                                        className: "fen-input"
                                    }),
                                    K.jsx("div", {
                                        className: "fen-actions",
                                        children: K.jsx("button", {
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
    }), vf = new Set, $p = {
        current: ""
    };
    function cb(u) {
        $p.current = u, vf.forEach((r)=>r(u));
    }
    function fb() {
        const [u, r] = T.useState($p.current);
        return T.useEffect(()=>{
            const c = (f)=>r(f);
            return vf.add(c), ()=>vf.delete(c);
        }, []), u;
    }
    const ob = nn.memo(({ isValid: u })=>{
        const r = fb(), c = ()=>{
            navigator.clipboard.writeText(r), alert("FEN copied to clipboard!");
        };
        return console.log("FEN Display Box: ", r), K.jsxs("div", {
            className: "fen-container",
            children: [
                K.jsx("div", {
                    id: "fen-display",
                    className: "fen-display",
                    children: r
                }),
                u ? K.jsx("div", {
                    className: "circle-tick",
                    children: "✔"
                }) : K.jsx("div", {
                    className: "circle-cross",
                    children: "✖"
                }),
                K.jsx("button", {
                    onClick: c,
                    className: "copy-button",
                    children: K.jsxs("svg", {
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
                            K.jsx("rect", {
                                x: "3",
                                y: "3",
                                width: "14",
                                height: "14",
                                rx: "2",
                                ry: "2",
                                fill: "#f5f5f5",
                                stroke: "#333333"
                            }),
                            K.jsx("rect", {
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
    }), sb = nn.memo(({ messages: u, isValid: r })=>K.jsxs("div", {
            className: "notice-board",
            children: [
                K.jsxs("div", {
                    className: `notice-header ${r ? "legal" : "isIllegal"}`,
                    children: [
                        "Board setup is ",
                        r ? "" : "not",
                        " valid."
                    ]
                }),
                u.map((c)=>c.text != null && c.text !== "" && K.jsx("div", {
                        className: `message ${c.type}`,
                        children: c.text
                    }, c.text))
            ]
        })), db = (u)=>{
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
        let s = 0, p = 0;
        const y = new Map([]);
        for(let b = 0; b < 8; b++){
            const O = o[b];
            let M = 0;
            for(let B = 0; B < O.length; B++){
                const P = Number(O[B]);
                switch(M += isNaN(P) ? 1 : P, O[B]){
                    case "k":
                        b === 0 && M === 5 && y.set("e8", O[B]), s += 1;
                        break;
                    case "K":
                        b === 7 && M === 5 && y.set("e1", O[B]), p += 1;
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
                        b === 0 && B === 0 ? y.set("a8", O[B]) : b === 0 && B === O.length - 1 && y.set("h8", O[B]);
                        break;
                    case "R":
                        b === 7 && B === 0 ? y.set("a1", O[B]) : b === 7 && B === O.length - 1 && y.set("h1", O[B]);
                        break;
                }
            }
        }
        if (s !== 1) return {
            isValid: !1,
            msg: "There should be exactly one black king."
        };
        if (p !== 1) return {
            isValid: !1,
            msg: "There should be exactly one white king."
        };
        for(let b = 0; b < f.length; b++)switch(f[b]){
            case "K":
                if (!y.has("e1") || y.get("e1") !== "K") return {
                    isValid: !1,
                    msg: "white castling is not possible, king is not at e1."
                };
                if (!y.has("h1") || y.get("h1") !== "R") return {
                    isValid: !1,
                    msg: "white short castling is not possible, rook is not at h1"
                };
                break;
            case "Q":
                if (!y.has("e1") || y.get("e1") !== "K") return {
                    isValid: !1,
                    msg: "white castling is not possible, king is not at e1."
                };
                if (!y.has("a1") || y.get("a1") !== "R") return {
                    isValid: !1,
                    msg: "white long castling is not possible, rook is not at a1"
                };
                break;
            case "k":
                if (!y.has("e8") || y.get("e8") !== "k") return {
                    isValid: !1,
                    msg: "black castling is not possible, king is not at e8."
                };
                if (!y.has("h8") || y.get("h8") !== "r") return {
                    isValid: !1,
                    msg: "black short castling is not possible, rook is not at h8"
                };
                break;
            case "q":
                if (!y.has("e8") || y.get("e8") !== "k") return {
                    isValid: !1,
                    msg: "black castling is not possible, king is not at e8."
                };
                if (!y.has("a8") || y.get("a8") !== "r") return {
                    isValid: !1,
                    msg: "black long castling is not possible, rook is not at a8"
                };
                break;
        }
        const h = c[1], v = hb(u);
        return new _f(v).inCheck() ? {
            isValid: !1,
            msg: `${h === "w" ? "white" : "black"} to move but ${h === "w" ? "black" : "white"} was already in check and did not defend king`
        } : {
            isValid: !0,
            msg: ""
        };
    };
    function hb(u) {
        const r = u.split(" ");
        return r[1] = r[1] === "w" ? "b" : "w", r.join(" ");
    }
    const Wp = (u, r)=>{
        u.dataTransfer.setData("text", r);
    }, pb = (u, r, c, f)=>{
        r != null && c == null && f({
            type: ge.BOARD_PIECE,
            id: `${u}-${r.color}-${r.type}`
        });
    }, mb = ({ item: u, selectedItem: r, setSelectedItem: c })=>{
        if (r == null) {
            c(u);
            return;
        }
        if (u.id === r.id) {
            c(null);
            return;
        }
        r.type === ge.BOARD_PIECE ? u.type === ge.PALLETE_PIECE && c(u) : r.type === ge.PALLETE_PIECE && u.type === r.type && c(u);
    }, lp = {
        type: ge.PALLETE_PIECE,
        id: ge.ERASER_ID
    }, yb = {
        p: "pawn",
        n: "knight",
        b: "bishop",
        r: "rook",
        q: "queen",
        k: "king"
    }, vb = nn.memo(({ selectedItem: u, setSelectedItem: r, handleDragStart: c, handlePaletteClick: f })=>{
        const o = [
            "p",
            "r",
            "n",
            "b",
            "q",
            "k"
        ];
        return K.jsxs("div", {
            className: "palette",
            children: [
                [
                    "w",
                    "b"
                ].map((s)=>o.map((p)=>K.jsx("img", {
                            id: `palette-${s}-${p}`,
                            src: `pieces/svg/${s}_${yb[p]}.svg`,
                            alt: `${s} ${p}`,
                            draggable: !0,
                            "data-type": p,
                            "data-color": s,
                            "data-square": "palette",
                            onClick: ()=>{
                                f({
                                    item: {
                                        type: ge.PALLETE_PIECE,
                                        id: `p-${s}-${p}`
                                    },
                                    selectedItem: u,
                                    setSelectedItem: r
                                });
                            },
                            onDragStart: (y)=>c(y, `palette-${s}-${p}`),
                            className: `palette-piece ${u?.type === ge.PALLETE_PIECE && u?.id === `p-${s}-${p.toLowerCase()}` ? "selected" : ""}`,
                            style: {
                                order: s == "w" ? o.indexOf(p) : o.indexOf(p) + 7
                            }
                        }, `${s}-${p}`))),
                K.jsx("img", {
                    "data-square": "palette",
                    src: "assets/eraser.svg",
                    style: {
                        order: 6
                    },
                    onClick: ()=>{
                        f({
                            item: lp,
                            selectedItem: u,
                            setSelectedItem: r
                        });
                    },
                    className: `palette-piece eraser ${u?.id === lp.id ? "selected" : ""}`
                })
            ]
        });
    }), gb = (u)=>{
        let r = "", c = 0;
        for(let f = 0; f < 8; f++)u[f].piece == null && c++, u[f].piece != null ? (c > 0 && (r += `${c}`), c = 0, r += u[f].piece.color === "w" ? u[f].piece.type?.toUpperCase() : u[f].piece.type) : f == 7 && c > 0 && (r += `${c}`);
        return r;
    }, bb = ({ board: u, playerToMove: r, halfmoveClock: c = 0, fullmoveNumber: f = 1, whiteKingSide: o, whiteQueenSide: s, blackKingSide: p, blackQueenSide: y })=>{
        const h = "-";
        let v = "";
        const S = (o ? "K" : "") + (s ? "Q" : "") + (p ? "k" : "") + (y ? "q" : "");
        if (u.length === 0) return "";
        const R = u.map((b)=>gb(b));
        return v += R.join("/"), v += ` ${r} ${S === "" ? "-" : S} ${h} ${c} ${f}`, v;
    }, Sb = (u)=>{
        u.preventDefault();
    }, Eb = ({ board: u, squareId: r, squarePiece: c, selectedItem: f, setSelectedItem: o, setBoard: s })=>{
        if (!f) {
            c != null && o({
                type: ge.BOARD_PIECE,
                id: `${r}-${c.color}-${c.type}`
            });
            return;
        }
        if (c != null && f.id === `${r}-${c.color}-${c.type}`) {
            o(null);
            return;
        }
        const p = f.id.split("-")[0], y = u.map((h)=>h.map((v)=>{
                if (v.id === r) {
                    if (f.id === ge.ERASER_ID) return {
                        ...v,
                        piece: null
                    };
                    const S = f.id.split("-");
                    return {
                        ...v,
                        piece: {
                            type: S[2],
                            color: S[1]
                        }
                    };
                } else if (f.type === ge.BOARD_PIECE && v.id === p) return o(null), {
                    ...v,
                    piece: null
                };
                return v;
            }));
        s(y);
    }, _b = (u, r, c, f)=>{
        u.preventDefault();
        const o = u.dataTransfer.getData("text"), s = document.getElementById(o), p = c.map((y)=>y.map((h)=>h.id === r ? {
                    ...h,
                    piece: {
                        type: s.dataset.type,
                        color: s.dataset.color
                    }
                } : h.id === s.dataset.square ? {
                    ...h,
                    piece: null
                } : h));
        f(p);
    }, Rb = nn.memo(({ piece: u, squareId: r, selectedItem: c, setSelectedItem: f, handleDragStart: o, handleBoardPieceClick: s })=>{
        const p = {
            p: "pawn",
            n: "knight",
            b: "bishop",
            r: "rook",
            q: "queen",
            k: "king"
        };
        return K.jsx("img", {
            className: `pieceimg ${c != null && c?.type === ge.BOARD_PIECE && c?.id === `${r}-${u.color}-${u.type}` ? "selected" : ""}`,
            id: `${r}-${u.color}-${u.type.toLowerCase()}`,
            src: `pieces/svg/${u.color}_${p[u.type]}.svg`,
            alt: `${u.color} ${u.type}`,
            draggable: !0,
            "data-type": u.type,
            "data-color": u.color,
            "data-square": r,
            onDragStart: (y)=>o(y, `${r}-${u.color}-${u.type}`),
            onClick: ()=>s(r, u, c, f)
        }, r);
    }), Tb = (u)=>{
        const r = u[0].charCodeAt(0) - 97, c = u[1].charCodeAt(0) - 49;
        return (r + c) % 2 === 0 ? "dark" : "light";
    }, Ab = nn.memo(({ showRankLabel: u, showFileLabel: r, board: c, setBoard: f, square: o, selectedItem: s, setSelectedItem: p, handleSquareClick: y, handleDrop: h, allowDrop: v, handleDragStart: S, handleBoardPieceClick: R })=>K.jsxs("div", {
            id: o.id,
            className: `square ${Tb(o.id)}`,
            onDragOver: v,
            onClick: ()=>y({
                    board: c,
                    squareId: o.id,
                    squarePiece: o.piece,
                    selectedItem: s,
                    setSelectedItem: p,
                    setBoard: f
                }),
            onDrop: (b)=>h(b, o.id, c, f),
            children: [
                u && K.jsx("div", {
                    className: "rank-label",
                    children: o.id[1]
                }),
                r && K.jsx("div", {
                    className: "file-label",
                    children: o.id[0]
                }),
                o.piece && K.jsx(Rb, {
                    piece: o.piece,
                    squareId: o.id,
                    selectedItem: s,
                    setSelectedItem: p,
                    handleDragStart: S,
                    handleBoardPieceClick: R
                })
            ]
        })), Ob = nn.memo(({ board: u, isFlipped: r, selectedItem: c, setSelectedItem: f, setBoard: o })=>{
        const s = r ? [
            ...u
        ].reverse().map((p)=>[
                ...p
            ].reverse()) : u;
        return K.jsx("div", {
            id: "chessboard",
            children: s.map((p, y)=>p.map((h, v)=>K.jsx(Ab, {
                        showRankLabel: v === 0,
                        showFileLabel: y === 7,
                        board: u,
                        setBoard: o,
                        square: h,
                        selectedItem: c,
                        setSelectedItem: f,
                        handleSquareClick: Eb,
                        handleDrop: _b,
                        allowDrop: Sb,
                        handleDragStart: Wp,
                        handleBoardPieceClick: pb
                    }, h.id)))
        });
    }), np = ()=>{
        const [u, r] = T.useState([]), [c, f] = T.useState(null), [o, s] = T.useState(!1), [p, y] = T.useState("w"), [h, v] = T.useState(!0), [S, R] = T.useState(!0), [b, O] = T.useState(!0), [M, B] = T.useState(!0), P = T.useRef(0), [w, j] = T.useState(!1), [k, V] = T.useState(""), Q = [
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
            Z();
        }, []);
        const F = ()=>{
            const he = u.map((Ee)=>Ee.map((Ae)=>({
                        ...Ae,
                        piece: null
                    })));
            f(null), r(he);
        }, Z = ()=>{
            f(null), y("w"), v(!0), R(!0), O(!0), B(!0), ap(ge.START_FEN, r);
        }, $ = T.useCallback((he)=>{
            console.log("Received FEN:", he), ap(he, r);
        }), I = T.useCallback((he = 0, Ee = 1)=>bb({
                board: u,
                playerToMove: p,
                whiteKingSide: h,
                whiteQueenSide: S,
                blackKingSide: b,
                blackQueenSide: M,
                halfmoveClock: he,
                fullmoveNumber: Ee
            }), [
            u,
            p,
            h,
            S,
            b,
            M
        ]);
        return P.current += 1, T.useEffect(()=>{
            const he = I(), { isValid: Ee, msg: Ae } = db(he);
            j((ot)=>ot !== Ee ? Ee : ot), V((ot)=>ot !== Ae ? Ae : ot), cb(he), console.log("BoardEditor useEffect", u, he);
        }, [
            I,
            u
        ]), K.jsxs("div", {
            className: "main-container",
            children: [
                K.jsx("div", {
                    className: "top-container",
                    children: K.jsxs("nav", {
                        className: "top-bar",
                        children: [
                            K.jsx("button", {
                                onClick: F,
                                className: "action-button",
                                children: "Clear"
                            }),
                            K.jsx("button", {
                                onClick: Z,
                                className: "action-button",
                                children: "Reset"
                            }),
                            K.jsx("button", {
                                onClick: ()=>{
                                    s(!o);
                                },
                                className: "action-button",
                                children: "Flip"
                            }),
                            K.jsx(rb, {
                                onSubmit: $
                            }),
                            K.jsx(ab, {})
                        ]
                    })
                }),
                K.jsxs("div", {
                    className: "middle-container",
                    children: [
                        K.jsx("div", {
                            className: "left-menu-bar"
                        }),
                        K.jsxs("div", {
                            className: "fen-chessboard-container",
                            children: [
                                K.jsx(ob, {
                                    isValid: w
                                }),
                                K.jsxs("div", {
                                    className: "chessboard-container",
                                    children: [
                                        K.jsx(Ob, {
                                            board: u,
                                            isFlipped: o,
                                            selectedItem: c,
                                            setSelectedItem: f,
                                            setBoard: r
                                        }),
                                        K.jsx(vb, {
                                            selectedItem: c,
                                            setSelectedItem: f,
                                            handleDragStart: Wp,
                                            handlePaletteClick: mb
                                        }),
                                        K.jsxs("div", {
                                            className: "castling",
                                            children: [
                                                K.jsxs("div", {
                                                    className: "toggle-container",
                                                    children: [
                                                        K.jsx("span", {
                                                            children: "To Move : "
                                                        }),
                                                        K.jsx(ib, {
                                                            playerToMove: p,
                                                            setPlayerToMove: y
                                                        })
                                                    ]
                                                }),
                                                Q.map(({ label: he, state: Ee, setState: Ae })=>K.jsx(ub, {
                                                        labelText: he,
                                                        toggle: Ee,
                                                        handleToggle: ()=>{
                                                            Ae(!Ee);
                                                        }
                                                    }, he)),
                                                K.jsx(sb, {
                                                    messages: [
                                                        {
                                                            type: w ? "ok" : "error",
                                                            text: k
                                                        }
                                                    ],
                                                    isValid: w
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
    }, ap = (u, r)=>{
        r(Cp(u));
    }, Nb = T.lazy(()=>Bp(()=>import("./ChessGame-LaH3Vnol.js"), __vite__mapDeps([0,1,2,3]))), xb = T.lazy(()=>Bp(()=>import("./AnalysisGame-BimwLmGh.js"), __vite__mapDeps([4,1,2,5]))), Mb = ()=>K.jsx(tb, {
            children: K.jsxs(Gg, {
                children: [
                    K.jsxs("nav", {
                        className: "routes",
                        children: [
                            K.jsx(Ia, {
                                to: "/boardeditor",
                                className: "action-button no-decoration",
                                children: "Board Editor"
                            }),
                            K.jsx(Ia, {
                                to: "/analysis",
                                className: "action-button no-decoration",
                                children: "Analyse Game"
                            }),
                            K.jsx(Ia, {
                                to: "/gameplay",
                                className: "action-button no-decoration",
                                children: "Play Game"
                            })
                        ]
                    }),
                    K.jsx(T.Suspense, {
                        fallback: K.jsx("div", {
                            className: "loading-screen",
                            children: "Loading..."
                        }),
                        children: K.jsxs(Eg, {
                            children: [
                                K.jsx(Fa, {
                                    path: "/analysis",
                                    element: K.jsx(nb, {
                                        children: K.jsx(xb, {})
                                    })
                                }),
                                K.jsx(Fa, {
                                    path: "/gameplay",
                                    element: K.jsx(Nb, {})
                                }),
                                K.jsx(Fa, {
                                    path: "/boardeditor",
                                    element: K.jsx(np, {})
                                }),
                                K.jsx(Fa, {
                                    path: "*",
                                    element: K.jsx(np, {})
                                }),
                                " "
                            ]
                        })
                    })
                ]
            })
        });
    M1.createRoot(document.getElementById("root")).render(K.jsx(V1, {
        store: Dp,
        children: K.jsx(Mb, {})
    }));
})();
export { _f as C, ab as D, nn as R, Db as a, wb as b, ge as c, Hb as d, jb as e, zb as f, Kb as g, lb as h, Gb as i, K as j, up as k, Qb as l, Bb as m, Lb as n, Dp as o, kb as p, Pb as q, T as r, Ub as s, qb as t, Cb as u, __tla };
