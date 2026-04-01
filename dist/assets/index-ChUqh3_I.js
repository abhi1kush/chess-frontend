const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChessGame-D_FMYT0P.js","assets/Settings-DOtldTu3.js","assets/Settings-DS8xGtQf.css","assets/ChessGame-DhAK7FyC.css","assets/AnalysisGame-CYbrSzam.js","assets/AnalysisGame-D3T61-kv.css"])))=>i.map(i=>d[i]);
let wi, Cb, c2, nn, an, m2, _e, S2, T2, v2, A2, xb, Mb, H, q1, R2, p2, _2, a2, E2, Vp, A, y2, g2, Xn, b2;
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
    q1 = function(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
    };
    var Fc = {
        exports: {}
    }, Va = {};
    var Ah;
    function j1() {
        if (Ah) return Va;
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
        return Va.Fragment = i, Va.jsx = c, Va.jsxs = c, Va;
    }
    var Oh;
    function H1() {
        return Oh || (Oh = 1, Fc.exports = j1()), Fc.exports;
    }
    let Wc, re;
    H = H1();
    Wc = {
        exports: {}
    };
    re = {};
    var Nh;
    function k1() {
        if (Nh) return re;
        Nh = 1;
        var u = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), m = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.iterator;
        function b(_) {
            return _ === null || typeof _ != "object" ? null : (_ = E && _[E] || _["@@iterator"], typeof _ == "function" ? _ : null);
        }
        var T = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, N = Object.assign, C = {};
        function z(_, Q, Z) {
            this.props = _, this.context = Q, this.refs = C, this.updater = Z || T;
        }
        z.prototype.isReactComponent = {}, z.prototype.setState = function(_, Q) {
            if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, _, Q, "setState");
        }, z.prototype.forceUpdate = function(_) {
            this.updater.enqueueForceUpdate(this, _, "forceUpdate");
        };
        function w() {}
        w.prototype = z.prototype;
        function L(_, Q, Z) {
            this.props = _, this.context = Q, this.refs = C, this.updater = Z || T;
        }
        var k = L.prototype = new w;
        k.constructor = L, N(k, z.prototype), k.isPureReactComponent = !0;
        var G = Array.isArray, K = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, J = Object.prototype.hasOwnProperty;
        function V(_, Q, Z, Y, ee, pe) {
            return Z = pe.ref, {
                $$typeof: u,
                type: _,
                key: Q,
                ref: Z !== void 0 ? Z : null,
                props: pe
            };
        }
        function F(_, Q) {
            return V(_.type, Q, void 0, void 0, void 0, _.props);
        }
        function I(_) {
            return typeof _ == "object" && _ !== null && _.$$typeof === u;
        }
        function Ce(_) {
            var Q = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + _.replace(/[=:]/g, function(Z) {
                return Q[Z];
            });
        }
        var Le = /\/+/g;
        function Ue(_, Q) {
            return typeof _ == "object" && _ !== null && _.key != null ? Ce("" + _.key) : Q.toString(36);
        }
        function Ul() {}
        function Pl(_) {
            switch(_.status){
                case "fulfilled":
                    return _.value;
                case "rejected":
                    throw _.reason;
                default:
                    switch(typeof _.status == "string" ? _.then(Ul, Ul) : (_.status = "pending", _.then(function(Q) {
                        _.status === "pending" && (_.status = "fulfilled", _.value = Q);
                    }, function(Q) {
                        _.status === "pending" && (_.status = "rejected", _.reason = Q);
                    })), _.status){
                        case "fulfilled":
                            return _.value;
                        case "rejected":
                            throw _.reason;
                    }
            }
            throw _;
        }
        function We(_, Q, Z, Y, ee) {
            var pe = typeof _;
            (pe === "undefined" || pe === "boolean") && (_ = null);
            var ie = !1;
            if (_ === null) ie = !0;
            else switch(pe){
                case "bigint":
                case "string":
                case "number":
                    ie = !0;
                    break;
                case "object":
                    switch(_.$$typeof){
                        case u:
                        case i:
                            ie = !0;
                            break;
                        case g:
                            return ie = _._init, We(ie(_._payload), Q, Z, Y, ee);
                    }
            }
            if (ie) return ee = ee(_), ie = Y === "" ? "." + Ue(_, 0) : Y, G(ee) ? (Z = "", ie != null && (Z = ie.replace(Le, "$&/") + "/"), We(ee, Q, Z, "", function(il) {
                return il;
            })) : ee != null && (I(ee) && (ee = F(ee, Z + (ee.key == null || _ && _.key === ee.key ? "" : ("" + ee.key).replace(Le, "$&/") + "/") + ie)), Q.push(ee)), 1;
            ie = 0;
            var ot = Y === "" ? "." : Y + ":";
            if (G(_)) for(var Oe = 0; Oe < _.length; Oe++)Y = _[Oe], pe = ot + Ue(Y, Oe), ie += We(Y, Q, Z, pe, ee);
            else if (Oe = b(_), typeof Oe == "function") for(_ = Oe.call(_), Oe = 0; !(Y = _.next()).done;)Y = Y.value, pe = ot + Ue(Y, Oe++), ie += We(Y, Q, Z, pe, ee);
            else if (pe === "object") {
                if (typeof _.then == "function") return We(Pl(_), Q, Z, Y, ee);
                throw Q = String(_), Error("Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead.");
            }
            return ie;
        }
        function P(_, Q, Z) {
            if (_ == null) return _;
            var Y = [], ee = 0;
            return We(_, Y, "", "", function(pe) {
                return Q.call(Z, pe, ee++);
            }), Y;
        }
        function X(_) {
            if (_._status === -1) {
                var Q = _._result;
                Q = Q(), Q.then(function(Z) {
                    (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Z);
                }, function(Z) {
                    (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Z);
                }), _._status === -1 && (_._status = 0, _._result = Q);
            }
            if (_._status === 1) return _._result.default;
            throw _._result;
        }
        var ne = typeof reportError == "function" ? reportError : function(_) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var Q = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof _ == "object" && _ !== null && typeof _.message == "string" ? String(_.message) : String(_),
                    error: _
                });
                if (!window.dispatchEvent(Q)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", _);
                return;
            }
            console.error(_);
        };
        function Te() {}
        return re.Children = {
            map: P,
            forEach: function(_, Q, Z) {
                P(_, function() {
                    Q.apply(this, arguments);
                }, Z);
            },
            count: function(_) {
                var Q = 0;
                return P(_, function() {
                    Q++;
                }), Q;
            },
            toArray: function(_) {
                return P(_, function(Q) {
                    return Q;
                }) || [];
            },
            only: function(_) {
                if (!I(_)) throw Error("React.Children.only expected to receive a single React element child.");
                return _;
            }
        }, re.Component = z, re.Fragment = c, re.Profiler = o, re.PureComponent = L, re.StrictMode = s, re.Suspense = h, re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, re.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(_) {
                return K.H.useMemoCache(_);
            }
        }, re.cache = function(_) {
            return function() {
                return _.apply(null, arguments);
            };
        }, re.cloneElement = function(_, Q, Z) {
            if (_ == null) throw Error("The argument must be a React element, but you passed " + _ + ".");
            var Y = N({}, _.props), ee = _.key, pe = void 0;
            if (Q != null) for(ie in Q.ref !== void 0 && (pe = void 0), Q.key !== void 0 && (ee = "" + Q.key), Q)!J.call(Q, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && Q.ref === void 0 || (Y[ie] = Q[ie]);
            var ie = arguments.length - 2;
            if (ie === 1) Y.children = Z;
            else if (1 < ie) {
                for(var ot = Array(ie), Oe = 0; Oe < ie; Oe++)ot[Oe] = arguments[Oe + 2];
                Y.children = ot;
            }
            return V(_.type, ee, void 0, void 0, pe, Y);
        }, re.createContext = function(_) {
            return _ = {
                $$typeof: m,
                _currentValue: _,
                _currentValue2: _,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, _.Provider = _, _.Consumer = {
                $$typeof: f,
                _context: _
            }, _;
        }, re.createElement = function(_, Q, Z) {
            var Y, ee = {}, pe = null;
            if (Q != null) for(Y in Q.key !== void 0 && (pe = "" + Q.key), Q)J.call(Q, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (ee[Y] = Q[Y]);
            var ie = arguments.length - 2;
            if (ie === 1) ee.children = Z;
            else if (1 < ie) {
                for(var ot = Array(ie), Oe = 0; Oe < ie; Oe++)ot[Oe] = arguments[Oe + 2];
                ee.children = ot;
            }
            if (_ && _.defaultProps) for(Y in ie = _.defaultProps, ie)ee[Y] === void 0 && (ee[Y] = ie[Y]);
            return V(_, pe, void 0, void 0, null, ee);
        }, re.createRef = function() {
            return {
                current: null
            };
        }, re.forwardRef = function(_) {
            return {
                $$typeof: p,
                render: _
            };
        }, re.isValidElement = I, re.lazy = function(_) {
            return {
                $$typeof: g,
                _payload: {
                    _status: -1,
                    _result: _
                },
                _init: X
            };
        }, re.memo = function(_, Q) {
            return {
                $$typeof: v,
                type: _,
                compare: Q === void 0 ? null : Q
            };
        }, re.startTransition = function(_) {
            var Q = K.T, Z = {};
            K.T = Z;
            try {
                var Y = _(), ee = K.S;
                ee !== null && ee(Z, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Te, ne);
            } catch (pe) {
                ne(pe);
            } finally{
                K.T = Q;
            }
        }, re.unstable_useCacheRefresh = function() {
            return K.H.useCacheRefresh();
        }, re.use = function(_) {
            return K.H.use(_);
        }, re.useActionState = function(_, Q, Z) {
            return K.H.useActionState(_, Q, Z);
        }, re.useCallback = function(_, Q) {
            return K.H.useCallback(_, Q);
        }, re.useContext = function(_) {
            return K.H.useContext(_);
        }, re.useDebugValue = function() {}, re.useDeferredValue = function(_, Q) {
            return K.H.useDeferredValue(_, Q);
        }, re.useEffect = function(_, Q, Z) {
            var Y = K.H;
            if (typeof Z == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return Y.useEffect(_, Q);
        }, re.useId = function() {
            return K.H.useId();
        }, re.useImperativeHandle = function(_, Q, Z) {
            return K.H.useImperativeHandle(_, Q, Z);
        }, re.useInsertionEffect = function(_, Q) {
            return K.H.useInsertionEffect(_, Q);
        }, re.useLayoutEffect = function(_, Q) {
            return K.H.useLayoutEffect(_, Q);
        }, re.useMemo = function(_, Q) {
            return K.H.useMemo(_, Q);
        }, re.useOptimistic = function(_, Q) {
            return K.H.useOptimistic(_, Q);
        }, re.useReducer = function(_, Q, Z) {
            return K.H.useReducer(_, Q, Z);
        }, re.useRef = function(_) {
            return K.H.useRef(_);
        }, re.useState = function(_) {
            return K.H.useState(_);
        }, re.useSyncExternalStore = function(_, Q, Z) {
            return K.H.useSyncExternalStore(_, Q, Z);
        }, re.useTransition = function() {
            return K.H.useTransition();
        }, re.version = "19.1.0", re;
    }
    var xh;
    function Bi() {
        return xh || (xh = 1, Wc.exports = k1()), Wc.exports;
    }
    A = Bi();
    nn = q1(A);
    var Ic = {
        exports: {}
    }, Xa = {}, es = {
        exports: {}
    }, ts = {};
    var Mh;
    function L1() {
        return Mh || (Mh = 1, function(u) {
            function i(P, X) {
                var ne = P.length;
                P.push(X);
                e: for(; 0 < ne;){
                    var Te = ne - 1 >>> 1, _ = P[Te];
                    if (0 < o(_, X)) P[Te] = X, P[ne] = _, ne = Te;
                    else break e;
                }
            }
            function c(P) {
                return P.length === 0 ? null : P[0];
            }
            function s(P) {
                if (P.length === 0) return null;
                var X = P[0], ne = P.pop();
                if (ne !== X) {
                    P[0] = ne;
                    e: for(var Te = 0, _ = P.length, Q = _ >>> 1; Te < Q;){
                        var Z = 2 * (Te + 1) - 1, Y = P[Z], ee = Z + 1, pe = P[ee];
                        if (0 > o(Y, ne)) ee < _ && 0 > o(pe, Y) ? (P[Te] = pe, P[ee] = ne, Te = ee) : (P[Te] = Y, P[Z] = ne, Te = Z);
                        else if (ee < _ && 0 > o(pe, ne)) P[Te] = pe, P[ee] = ne, Te = ee;
                        else break e;
                    }
                }
                return X;
            }
            function o(P, X) {
                var ne = P.sortIndex - X.sortIndex;
                return ne !== 0 ? ne : P.id - X.id;
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
            var h = [], v = [], g = 1, E = null, b = 3, T = !1, N = !1, C = !1, z = !1, w = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
            function G(P) {
                for(var X = c(v); X !== null;){
                    if (X.callback === null) s(v);
                    else if (X.startTime <= P) s(v), X.sortIndex = X.expirationTime, i(h, X);
                    else break;
                    X = c(v);
                }
            }
            function K(P) {
                if (C = !1, G(P), !N) if (c(h) !== null) N = !0, J || (J = !0, Ue());
                else {
                    var X = c(v);
                    X !== null && We(K, X.startTime - P);
                }
            }
            var J = !1, V = -1, F = 5, I = -1;
            function Ce() {
                return z ? !0 : !(u.unstable_now() - I < F);
            }
            function Le() {
                if (z = !1, J) {
                    var P = u.unstable_now();
                    I = P;
                    var X = !0;
                    try {
                        e: {
                            N = !1, C && (C = !1, L(V), V = -1), T = !0;
                            var ne = b;
                            try {
                                t: {
                                    for(G(P), E = c(h); E !== null && !(E.expirationTime > P && Ce());){
                                        var Te = E.callback;
                                        if (typeof Te == "function") {
                                            E.callback = null, b = E.priorityLevel;
                                            var _ = Te(E.expirationTime <= P);
                                            if (P = u.unstable_now(), typeof _ == "function") {
                                                E.callback = _, G(P), X = !0;
                                                break t;
                                            }
                                            E === c(h) && s(h), G(P);
                                        } else s(h);
                                        E = c(h);
                                    }
                                    if (E !== null) X = !0;
                                    else {
                                        var Q = c(v);
                                        Q !== null && We(K, Q.startTime - P), X = !1;
                                    }
                                }
                                break e;
                            } finally{
                                E = null, b = ne, T = !1;
                            }
                            X = void 0;
                        }
                    } finally{
                        X ? Ue() : J = !1;
                    }
                }
            }
            var Ue;
            if (typeof k == "function") Ue = function() {
                k(Le);
            };
            else if (typeof MessageChannel < "u") {
                var Ul = new MessageChannel, Pl = Ul.port2;
                Ul.port1.onmessage = Le, Ue = function() {
                    Pl.postMessage(null);
                };
            } else Ue = function() {
                w(Le, 0);
            };
            function We(P, X) {
                V = w(function() {
                    P(u.unstable_now());
                }, X);
            }
            u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(P) {
                P.callback = null;
            }, u.unstable_forceFrameRate = function(P) {
                0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < P ? Math.floor(1e3 / P) : 5;
            }, u.unstable_getCurrentPriorityLevel = function() {
                return b;
            }, u.unstable_next = function(P) {
                switch(b){
                    case 1:
                    case 2:
                    case 3:
                        var X = 3;
                        break;
                    default:
                        X = b;
                }
                var ne = b;
                b = X;
                try {
                    return P();
                } finally{
                    b = ne;
                }
            }, u.unstable_requestPaint = function() {
                z = !0;
            }, u.unstable_runWithPriority = function(P, X) {
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
                var ne = b;
                b = P;
                try {
                    return X();
                } finally{
                    b = ne;
                }
            }, u.unstable_scheduleCallback = function(P, X, ne) {
                var Te = u.unstable_now();
                switch(typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? Te + ne : Te) : ne = Te, P){
                    case 1:
                        var _ = -1;
                        break;
                    case 2:
                        _ = 250;
                        break;
                    case 5:
                        _ = 1073741823;
                        break;
                    case 4:
                        _ = 1e4;
                        break;
                    default:
                        _ = 5e3;
                }
                return _ = ne + _, P = {
                    id: g++,
                    callback: X,
                    priorityLevel: P,
                    startTime: ne,
                    expirationTime: _,
                    sortIndex: -1
                }, ne > Te ? (P.sortIndex = ne, i(v, P), c(h) === null && P === c(v) && (C ? (L(V), V = -1) : C = !0, We(K, ne - Te))) : (P.sortIndex = _, i(h, P), N || T || (N = !0, J || (J = !0, Ue()))), P;
            }, u.unstable_shouldYield = Ce, u.unstable_wrapCallback = function(P) {
                var X = b;
                return function() {
                    var ne = b;
                    b = X;
                    try {
                        return P.apply(this, arguments);
                    } finally{
                        b = ne;
                    }
                };
            };
        }(ts)), ts;
    }
    var Ch;
    function Q1() {
        return Ch || (Ch = 1, es.exports = L1()), es.exports;
    }
    var ls = {
        exports: {}
    }, tt = {};
    var Dh;
    function K1() {
        if (Dh) return tt;
        Dh = 1;
        var u = Bi();
        function i(h) {
            var v = "https://react.dev/errors/" + h;
            if (1 < arguments.length) {
                v += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var g = 2; g < arguments.length; g++)v += "&args[]=" + encodeURIComponent(arguments[g]);
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
        function f(h, v, g) {
            var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: E == null ? null : "" + E,
                children: h,
                containerInfo: v,
                implementation: g
            };
        }
        var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function p(h, v) {
            if (h === "font") return "";
            if (typeof v == "string") return v === "use-credentials" ? v : "";
        }
        return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, tt.createPortal = function(h, v) {
            var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(i(299));
            return f(h, v, null, g);
        }, tt.flushSync = function(h) {
            var v = m.T, g = s.p;
            try {
                if (m.T = null, s.p = 2, h) return h();
            } finally{
                m.T = v, s.p = g, s.d.f();
            }
        }, tt.preconnect = function(h, v) {
            typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, s.d.C(h, v));
        }, tt.prefetchDNS = function(h) {
            typeof h == "string" && s.d.D(h);
        }, tt.preinit = function(h, v) {
            if (typeof h == "string" && v && typeof v.as == "string") {
                var g = v.as, E = p(g, v.crossOrigin), b = typeof v.integrity == "string" ? v.integrity : void 0, T = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
                g === "style" ? s.d.S(h, typeof v.precedence == "string" ? v.precedence : void 0, {
                    crossOrigin: E,
                    integrity: b,
                    fetchPriority: T
                }) : g === "script" && s.d.X(h, {
                    crossOrigin: E,
                    integrity: b,
                    fetchPriority: T,
                    nonce: typeof v.nonce == "string" ? v.nonce : void 0
                });
            }
        }, tt.preinitModule = function(h, v) {
            if (typeof h == "string") if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var g = p(v.as, v.crossOrigin);
                    s.d.M(h, {
                        crossOrigin: g,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    });
                }
            } else v == null && s.d.M(h);
        }, tt.preload = function(h, v) {
            if (typeof h == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
                var g = v.as, E = p(g, v.crossOrigin);
                s.d.L(h, g, {
                    crossOrigin: E,
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
                var g = p(v.as, v.crossOrigin);
                s.d.m(h, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: g,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                });
            } else s.d.m(h);
        }, tt.requestFormReset = function(h) {
            s.d.r(h);
        }, tt.unstable_batchedUpdates = function(h, v) {
            return h(v);
        }, tt.useFormState = function(h, v, g) {
            return m.H.useFormState(h, v, g);
        }, tt.useFormStatus = function() {
            return m.H.useHostTransitionStatus();
        }, tt.version = "19.1.0", tt;
    }
    var Bh;
    function G1() {
        if (Bh) return ls.exports;
        Bh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (i) {
                console.error(i);
            }
        }
        return u(), ls.exports = K1(), ls.exports;
    }
    var wh;
    function Y1() {
        if (wh) return Xa;
        wh = 1;
        var u = Q1(), i = Bi(), c = G1();
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
        var g = Object.assign, E = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), L = Symbol.for("react.consumer"), k = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), Ce = Symbol.for("react.memo_cache_sentinel"), Le = Symbol.iterator;
        function Ue(e) {
            return e === null || typeof e != "object" ? null : (e = Le && e[Le] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var Ul = Symbol.for("react.client.reference");
        function Pl(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === Ul ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case N:
                    return "Fragment";
                case z:
                    return "Profiler";
                case C:
                    return "StrictMode";
                case K:
                    return "Suspense";
                case J:
                    return "SuspenseList";
                case I:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case T:
                    return "Portal";
                case k:
                    return (e.displayName || "Context") + ".Provider";
                case L:
                    return (e._context.displayName || "Context") + ".Consumer";
                case G:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case V:
                    return t = e.displayName || null, t !== null ? t : Pl(e.type) || "Memo";
                case F:
                    t = e._payload, e = e._init;
                    try {
                        return Pl(e(t));
                    } catch  {}
            }
            return null;
        }
        var We = Array.isArray, P = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Te = [], _ = -1;
        function Q(e) {
            return {
                current: e
            };
        }
        function Z(e) {
            0 > _ || (e.current = Te[_], Te[_] = null, _--);
        }
        function Y(e, t) {
            _++, Te[_] = e.current, e.current = t;
        }
        var ee = Q(null), pe = Q(null), ie = Q(null), ot = Q(null);
        function Oe(e, t) {
            switch(Y(ie, t), Y(pe, e), Y(ee, null), t.nodeType){
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
            Z(ee), Y(ee, e);
        }
        function il() {
            Z(ee), Z(pe), Z(ie);
        }
        function Pi(e) {
            e.memoizedState !== null && Y(ot, e);
            var t = ee.current, l = eh(t, e.type);
            t !== l && (Y(pe, e), Y(ee, l));
        }
        function iu(e) {
            pe.current === e && (Z(ee), Z(pe)), ot.current === e && (Z(ot), La._currentValue = ne);
        }
        var qi = Object.prototype.hasOwnProperty, ji = u.unstable_scheduleCallback, Hi = u.unstable_cancelCallback, mm = u.unstable_shouldYield, ym = u.unstable_requestPaint, zt = u.unstable_now, vm = u.unstable_getCurrentPriorityLevel, Ds = u.unstable_ImmediatePriority, Bs = u.unstable_UserBlockingPriority, ru = u.unstable_NormalPriority, gm = u.unstable_LowPriority, ws = u.unstable_IdlePriority, bm = u.log, Sm = u.unstable_setDisableYieldValue, $n = null, ft = null;
        function rl(e) {
            if (typeof bm == "function" && Sm(e), ft && typeof ft.setStrictMode == "function") try {
                ft.setStrictMode($n, e);
            } catch  {}
        }
        var dt = Math.clz32 ? Math.clz32 : Tm, Em = Math.log, _m = Math.LN2;
        function Tm(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Em(e) / _m | 0) | 0;
        }
        var cu = 256, su = 4194304;
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
            var a = 0, r = e.suspendedLanes, d = e.pingedLanes;
            e = e.warmLanes;
            var y = n & 134217727;
            return y !== 0 ? (n = y & ~r, n !== 0 ? a = ql(n) : (d &= y, d !== 0 ? a = ql(d) : l || (l = y & ~e, l !== 0 && (a = ql(l))))) : (y = n & ~r, y !== 0 ? a = ql(y) : d !== 0 ? a = ql(d) : l || (l = n & ~e, l !== 0 && (a = ql(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & r) === 0 && (r = a & -a, l = t & -t, r >= l || r === 32 && (l & 4194048) !== 0) ? t : a;
        }
        function Jn(e, t) {
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
        function zs() {
            var e = cu;
            return cu <<= 1, (cu & 4194048) === 0 && (cu = 256), e;
        }
        function Us() {
            var e = su;
            return su <<= 1, (su & 62914560) === 0 && (su = 4194304), e;
        }
        function ki(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Fn(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Am(e, t, l, n, a, r) {
            var d = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var y = e.entanglements, S = e.expirationTimes, M = e.hiddenUpdates;
            for(l = d & ~l; 0 < l;){
                var U = 31 - dt(l), j = 1 << U;
                y[U] = 0, S[U] = -1;
                var D = M[U];
                if (D !== null) for(M[U] = null, U = 0; U < D.length; U++){
                    var B = D[U];
                    B !== null && (B.lane &= -536870913);
                }
                l &= ~j;
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
        function Qi(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function js() {
            var e = X.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : bh(e.type));
        }
        function Om(e, t) {
            var l = X.p;
            try {
                return X.p = e, t();
            } finally{
                X.p = l;
            }
        }
        var cl = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + cl, at = "__reactProps$" + cl, cn = "__reactContainer$" + cl, Ki = "__reactEvents$" + cl, Nm = "__reactListeners$" + cl, xm = "__reactHandles$" + cl, Hs = "__reactResources$" + cl, Wn = "__reactMarker$" + cl;
        function Gi(e) {
            delete e[Ie], delete e[at], delete e[Ki], delete e[Nm], delete e[xm];
        }
        function sn(e) {
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
            throw Error(s(33));
        }
        function fn(e) {
            var t = e[Hs];
            return t || (t = e[Hs] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Qe(e) {
            e[Wn] = !0;
        }
        var ks = new Set, Ls = {};
        function jl(e, t) {
            dn(e, t), dn(e + "Capture", t);
        }
        function dn(e, t) {
            for(Ls[e] = t, e = 0; e < t.length; e++)ks.add(t[e]);
        }
        var Mm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Qs = {}, Ks = {};
        function Cm(e) {
            return qi.call(Ks, e) ? !0 : qi.call(Qs, e) ? !1 : Mm.test(e) ? Ks[e] = !0 : (Qs[e] = !0, !1);
        }
        function fu(e, t, l) {
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
        function Lt(e, t, l, n) {
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
        var Yi, Gs;
        function hn(e) {
            if (Yi === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Yi = t && t[1] || "", Gs = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Yi + e + Gs;
        }
        var Vi = !1;
        function Xi(e, t) {
            if (!e || Vi) return "";
            Vi = !0;
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
                            var U = `
` + S[n].replace(" at new ", " at ");
                            return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U;
                        }
                        while (1 <= n && 0 <= a);
                        break;
                    }
                }
            } finally{
                Vi = !1, Error.prepareStackTrace = l;
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
                    return Xi(e.type, !1);
                case 11:
                    return Xi(e.type.render, !1);
                case 1:
                    return Xi(e.type, !0);
                case 31:
                    return hn("Activity");
                default:
                    return "";
            }
        }
        function Ys(e) {
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
        function Vs(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Bm(e) {
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
        function hu(e) {
            e._valueTracker || (e._valueTracker = Bm(e));
        }
        function Xs(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), n = "";
            return e && (n = Vs(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
        }
        function pu(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var wm = /[\n"\\]/g;
        function Et(e) {
            return e.replace(wm, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Zi(e, t, l, n, a, r, d, y) {
            e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? $i(e, d, St(t)) : l != null ? $i(e, d, St(l)) : n != null && e.removeAttribute("value"), a == null && r != null && (e.defaultChecked = !!r), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.name = "" + St(y) : e.removeAttribute("name");
        }
        function Zs(e, t, l, n, a, r, d, y) {
            if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || l != null) {
                if (!(r !== "submit" && r !== "reset" || t != null)) return;
                l = l != null ? "" + St(l) : "", t = t != null ? "" + St(t) : l, y || t === e.value || (e.value = t), e.defaultValue = t;
            }
            n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = y ? e.checked : !!n, e.defaultChecked = !!n, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d);
        }
        function $i(e, t, l) {
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
                    if (We(n)) {
                        if (1 < n.length) throw Error(s(93));
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
        var zm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Fs(e, t, l) {
            var n = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || zm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function Ws(e, t, l) {
            if (t != null && typeof t != "object") throw Error(s(62));
            if (e = e.style, l != null) {
                for(var n in l)!l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
                for(var a in t)n = t[a], t.hasOwnProperty(a) && l[a] !== n && Fs(e, a, n);
            } else for(var r in t)t.hasOwnProperty(r) && Fs(e, r, t[r]);
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
        var Um = new Map([
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
        function mu(e) {
            return Pm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Fi = null;
        function Wi(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var yn = null, vn = null;
        function Is(e) {
            var t = on(e);
            if (t && (e = t.stateNode)) {
                var l = e[at] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (Zi(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var n = l[t];
                                if (n !== e && n.form === e.form) {
                                    var a = n[at] || null;
                                    if (!a) throw Error(s(90));
                                    Zi(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)n = l[t], n.form === e.form && Xs(n);
                        }
                        break e;
                    case "textarea":
                        $s(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && pn(e, !!l.multiple, t, !1);
                }
            }
        }
        var Ii = !1;
        function eo(e, t, l) {
            if (Ii) return e(t, l);
            Ii = !0;
            try {
                var n = e(t);
                return n;
            } finally{
                if (Ii = !1, (yn !== null || vn !== null) && (ei(), yn && (t = yn, e = vn, vn = yn = null, Is(t), e))) for(t = 0; t < e.length; t++)Is(e[t]);
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
            if (l && typeof l != "function") throw Error(s(231, t, typeof l));
            return l;
        }
        var Qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), er = !1;
        if (Qt) try {
            var ta = {};
            Object.defineProperty(ta, "passive", {
                get: function() {
                    er = !0;
                }
            }), window.addEventListener("test", ta, ta), window.removeEventListener("test", ta, ta);
        } catch  {
            er = !1;
        }
        var sl = null, tr = null, yu = null;
        function to() {
            if (yu) return yu;
            var e, t = tr, l = t.length, n, a = "value" in sl ? sl.value : sl.textContent, r = a.length;
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
        function lo() {
            return !1;
        }
        function ut(e) {
            function t(l, n, a, r, d) {
                this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = r, this.target = d, this.currentTarget = null;
                for(var y in e)e.hasOwnProperty(y) && (l = e[y], this[y] = l ? l(r) : r[y]);
                return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? gu : lo, this.isPropagationStopped = lo, this;
            }
            return g(t.prototype, {
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
        }, bu = ut(Hl), la = g({}, Hl, {
            view: 0,
            detail: 0
        }), qm = ut(la), lr, nr, na, Su = g({}, la, {
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
            getModifierState: ur,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== na && (na && e.type === "mousemove" ? (lr = e.screenX - na.screenX, nr = e.screenY - na.screenY) : nr = lr = 0, na = e), lr);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : nr;
            }
        }), no = ut(Su), jm = g({}, Su, {
            dataTransfer: 0
        }), Hm = ut(jm), km = g({}, la, {
            relatedTarget: 0
        }), ar = ut(km), Lm = g({}, Hl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Qm = ut(Lm), Km = g({}, Hl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Gm = ut(Km), Ym = g({}, Hl, {
            data: 0
        }), ao = ut(Ym), Vm = {
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
        function $m(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Zm[e]) ? !!t[e] : !1;
        }
        function ur() {
            return $m;
        }
        var Jm = g({}, la, {
            key: function(e) {
                if (e.key) {
                    var t = Vm[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = vu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xm[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ur,
            charCode: function(e) {
                return e.type === "keypress" ? vu(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), Fm = ut(Jm), Wm = g({}, Su, {
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
        }), uo = ut(Wm), Im = g({}, la, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ur
        }), e0 = ut(Im), t0 = g({}, Hl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), l0 = ut(t0), n0 = g({}, Su, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), a0 = ut(n0), u0 = g({}, Hl, {
            newState: 0,
            oldState: 0
        }), i0 = ut(u0), r0 = [
            9,
            13,
            27,
            32
        ], ir = Qt && "CompositionEvent" in window, aa = null;
        Qt && "documentMode" in document && (aa = document.documentMode);
        var c0 = Qt && "TextEvent" in window && !aa, io = Qt && (!ir || aa && 8 < aa && 11 >= aa), ro = " ", co = !1;
        function so(e, t) {
            switch(e){
                case "keyup":
                    return r0.indexOf(t.keyCode) !== -1;
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
        function s0(e, t) {
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
        function o0(e, t) {
            if (gn) return e === "compositionend" || !ir && so(e, t) ? (e = to(), yu = tr = sl = null, gn = !1, e) : null;
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
        var f0 = {
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
            return t === "input" ? !!f0[e.type] : t === "textarea";
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
        function d0(e) {
            Zd(e, 0);
        }
        function Eu(e) {
            var t = In(e);
            if (Xs(t)) return e;
        }
        function po(e, t) {
            if (e === "change") return t;
        }
        var mo = !1;
        if (Qt) {
            var rr;
            if (Qt) {
                var cr = "oninput" in document;
                if (!cr) {
                    var yo = document.createElement("div");
                    yo.setAttribute("oninput", "return;"), cr = typeof yo.oninput == "function";
                }
                rr = cr;
            } else rr = !1;
            mo = rr && (!document.documentMode || 9 < document.documentMode);
        }
        function vo() {
            ua && (ua.detachEvent("onpropertychange", go), ia = ua = null);
        }
        function go(e) {
            if (e.propertyName === "value" && Eu(ia)) {
                var t = [];
                ho(t, ia, e, Wi(e)), eo(d0, t);
            }
        }
        function h0(e, t, l) {
            e === "focusin" ? (vo(), ua = t, ia = l, ua.attachEvent("onpropertychange", go)) : e === "focusout" && vo();
        }
        function p0(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return Eu(ia);
        }
        function m0(e, t) {
            if (e === "click") return Eu(t);
        }
        function y0(e, t) {
            if (e === "input" || e === "change") return Eu(t);
        }
        function v0(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var ht = typeof Object.is == "function" ? Object.is : v0;
        function ra(e, t) {
            if (ht(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), n = Object.keys(t);
            if (l.length !== n.length) return !1;
            for(n = 0; n < l.length; n++){
                var a = l[n];
                if (!qi.call(t, a) || !ht(e[a], t[a])) return !1;
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
        function sr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var g0 = Qt && "documentMode" in document && 11 >= document.documentMode, bn = null, or = null, ca = null, fr = !1;
        function To(e, t, l) {
            var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            fr || bn == null || bn !== pu(n) || (n = bn, "selectionStart" in n && sr(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), ca && ra(ca, n) || (ca = n, n = ii(or, "onSelect"), 0 < n.length && (t = new bu("onSelect", "select", null, t, l), e.push({
                event: t,
                listeners: n
            }), t.target = bn)));
        }
        function kl(e, t) {
            var l = {};
            return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
        }
        var Sn = {
            animationend: kl("Animation", "AnimationEnd"),
            animationiteration: kl("Animation", "AnimationIteration"),
            animationstart: kl("Animation", "AnimationStart"),
            transitionrun: kl("Transition", "TransitionRun"),
            transitionstart: kl("Transition", "TransitionStart"),
            transitioncancel: kl("Transition", "TransitionCancel"),
            transitionend: kl("Transition", "TransitionEnd")
        }, dr = {}, Ro = {};
        Qt && (Ro = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
        function Ll(e) {
            if (dr[e]) return dr[e];
            if (!Sn[e]) return e;
            var t = Sn[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in Ro) return dr[e] = t[l];
            return e;
        }
        var Ao = Ll("animationend"), Oo = Ll("animationiteration"), No = Ll("animationstart"), b0 = Ll("transitionrun"), S0 = Ll("transitionstart"), E0 = Ll("transitioncancel"), xo = Ll("transitionend"), Mo = new Map, hr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        hr.push("scrollEnd");
        function Ct(e, t) {
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
                    stack: Ys(t)
                }, Co.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Ys(t)
            };
        }
        var Tt = [], En = 0, pr = 0;
        function _u() {
            for(var e = En, t = pr = En = 0; t < e;){
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
        function Tu(e, t, l, n) {
            Tt[En++] = e, Tt[En++] = t, Tt[En++] = l, Tt[En++] = n, pr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
        }
        function mr(e, t, l, n) {
            return Tu(e, t, l, n), Ru(e);
        }
        function _n(e, t) {
            return Tu(e, null, null, t), Ru(e);
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
        function Ru(e) {
            if (50 < wa) throw wa = 0, Ec = null, Error(s(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var Tn = {};
        function _0(e, t, l, n) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function pt(e, t, l, n) {
            return new _0(e, t, l, n);
        }
        function yr(e) {
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
        function Au(e, t, l, n, a, r) {
            var d = 0;
            if (n = e, typeof e == "function") yr(e) && (d = 1);
            else if (typeof e == "string") d = R1(e, l, ee.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case I:
                    return e = pt(31, l, t, a), e.elementType = I, e.lanes = r, e;
                case N:
                    return Ql(l.children, a, r, t);
                case C:
                    d = 8, a |= 24;
                    break;
                case z:
                    return e = pt(12, l, t, a | 2), e.elementType = z, e.lanes = r, e;
                case K:
                    return e = pt(13, l, t, a), e.elementType = K, e.lanes = r, e;
                case J:
                    return e = pt(19, l, t, a), e.elementType = J, e.lanes = r, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case w:
                        case k:
                            d = 10;
                            break e;
                        case L:
                            d = 9;
                            break e;
                        case G:
                            d = 11;
                            break e;
                        case V:
                            d = 14;
                            break e;
                        case F:
                            d = 16, n = null;
                            break e;
                    }
                    d = 29, l = Error(s(130, e === null ? "null" : typeof e, "")), n = null;
            }
            return t = pt(d, l, t, a), t.elementType = e, t.type = n, t.lanes = r, t;
        }
        function Ql(e, t, l, n) {
            return e = pt(7, e, n, t), e.lanes = l, e;
        }
        function vr(e, t, l) {
            return e = pt(6, e, null, t), e.lanes = l, e;
        }
        function gr(e, t, l) {
            return t = pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var Rn = [], An = 0, Ou = null, Nu = 0, Rt = [], At = 0, Kl = null, Gt = 1, Yt = "";
        function Gl(e, t) {
            Rn[An++] = Nu, Rn[An++] = Ou, Ou = e, Nu = t;
        }
        function wo(e, t, l) {
            Rt[At++] = Gt, Rt[At++] = Yt, Rt[At++] = Kl, Kl = e;
            var n = Gt;
            e = Yt;
            var a = 32 - dt(n) - 1;
            n &= ~(1 << a), l += 1;
            var r = 32 - dt(t) + a;
            if (30 < r) {
                var d = a - a % 5;
                r = (n & (1 << d) - 1).toString(32), n >>= d, a -= d, Gt = 1 << 32 - dt(t) + a | l << a | n, Yt = r + e;
            } else Gt = 1 << r | l << a | n, Yt = e;
        }
        function br(e) {
            e.return !== null && (Gl(e, 1), wo(e, 1, 0));
        }
        function Sr(e) {
            for(; e === Ou;)Ou = Rn[--An], Rn[An] = null, Nu = Rn[--An], Rn[An] = null;
            for(; e === Kl;)Kl = Rt[--At], Rt[At] = null, Yt = Rt[--At], Rt[At] = null, Gt = Rt[--At], Rt[At] = null;
        }
        var nt = null, De = null, ye = !1, Yl = null, Ut = !1, Er = Error(s(519));
        function Vl(e) {
            var t = Error(s(418, ""));
            throw fa(_t(t, e)), Er;
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
                    de("invalid", t), Zs(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), hu(t);
                    break;
                case "select":
                    de("invalid", t);
                    break;
                case "textarea":
                    de("invalid", t), Js(t, n.value, n.defaultValue, n.children), hu(t);
            }
            l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Wd(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = ri), t = !0) : t = !1, t || Vl(e);
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
        function sa(e) {
            if (e !== nt) return !1;
            if (!ye) return Uo(e), ye = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || qc(e.type, e.memoizedProps)), l = !l), l && De && Vl(e), Uo(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
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
        function fa(e) {
            Yl === null ? Yl = [
                e
            ] : Yl.push(e);
        }
        var _r = Q(null), Xl = null, Vt = null;
        function ol(e, t, l) {
            Y(_r, t._currentValue), t._currentValue = l;
        }
        function Xt(e) {
            e._currentValue = _r.current, Z(_r);
        }
        function Tr(e, t, l) {
            for(; e !== null;){
                var n = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
                e = e.return;
            }
        }
        function Rr(e, t, l, n) {
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
                            r.lanes |= l, y = r.alternate, y !== null && (y.lanes |= l), Tr(r.return, l, e), n || (d = null);
                            break e;
                        }
                        r = y.next;
                    }
                } else if (a.tag === 18) {
                    if (d = a.return, d === null) throw Error(s(341));
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
                    if (d === null) throw Error(s(387));
                    if (d = d.memoizedProps, d !== null) {
                        var y = a.type;
                        ht(a.pendingProps.value, d.value) || (e !== null ? e.push(y) : e = [
                            y
                        ]);
                    }
                } else if (a === ot.current) {
                    if (d = a.alternate, d === null) throw Error(s(387));
                    d.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(La) : e = [
                        La
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
                if (e === null) throw Error(s(308));
                Vt = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else Vt = Vt.next = t;
            return l;
        }
        var T0 = typeof AbortController < "u" ? AbortController : function() {
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
        }, R0 = u.unstable_scheduleCallback, A0 = u.unstable_NormalPriority, je = {
            $$typeof: k,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Ar() {
            return {
                controller: new T0,
                data: new Map,
                refCount: 0
            };
        }
        function ha(e) {
            e.refCount--, e.refCount === 0 && R0(A0, function() {
                e.controller.abort();
            });
        }
        var pa = null, Or = 0, On = 0, Nn = null;
        function O0(e, t) {
            if (pa === null) {
                var l = pa = [];
                Or = 0, On = xc(), Nn = {
                    status: "pending",
                    value: void 0,
                    then: function(n) {
                        l.push(n);
                    }
                };
            }
            return Or++, t.then(jo, jo), t;
        }
        function jo() {
            if (--Or === 0 && pa !== null) {
                Nn !== null && (Nn.status = "fulfilled");
                var e = pa;
                pa = null, On = 0, Nn = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function N0(e, t) {
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
        var Ho = P.S;
        P.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && O0(e, t), Ho !== null && Ho(e, t);
        };
        var $l = Q(null);
        function Nr() {
            var e = $l.current;
            return e !== null ? e : Ae.pooledCache;
        }
        function Cu(e, t) {
            t === null ? Y($l, $l.current) : Y($l, t.pool);
        }
        function ko() {
            var e = Nr();
            return e === null ? null : {
                parent: je._currentValue,
                pool: e
            };
        }
        var ma = Error(s(460)), Lo = Error(s(474)), Du = Error(s(542)), xr = {
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
                        if (e = Ae, e !== null && 100 < e.shellSuspendCounter) throw Error(s(482));
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
            if (ya === null) throw Error(s(459));
            var e = ya;
            return ya = null, e;
        }
        function Yo(e) {
            if (e === ma || e === Du) throw Error(s(483));
        }
        var fl = !1;
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
        function Cr(e, t) {
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
                return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Ru(e), Do(e, null, l), t;
            }
            return Tu(e, n, t, l), Ru(e);
        }
        function va(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, qs(e, l);
            }
        }
        function Dr(e, t) {
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
        var Br = !1;
        function ga() {
            if (Br) {
                var e = Nn;
                if (e !== null) throw e;
            }
        }
        function ba(e, t, l, n) {
            Br = !1;
            var a = e.updateQueue;
            fl = !1;
            var r = a.firstBaseUpdate, d = a.lastBaseUpdate, y = a.shared.pending;
            if (y !== null) {
                a.shared.pending = null;
                var S = y, M = S.next;
                S.next = null, d === null ? r = M : d.next = M, d = S;
                var U = e.alternate;
                U !== null && (U = U.updateQueue, y = U.lastBaseUpdate, y !== d && (y === null ? U.firstBaseUpdate = M : y.next = M, U.lastBaseUpdate = S));
            }
            if (r !== null) {
                var j = a.baseState;
                d = 0, U = M = S = null, y = r;
                do {
                    var D = y.lane & -536870913, B = D !== y.lane;
                    if (B ? (he & D) === D : (n & D) === D) {
                        D !== 0 && D === On && (Br = !0), U !== null && (U = U.next = {
                            lane: 0,
                            tag: y.tag,
                            payload: y.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var ae = e, te = y;
                            D = t;
                            var Ee = l;
                            switch(te.tag){
                                case 1:
                                    if (ae = te.payload, typeof ae == "function") {
                                        j = ae.call(Ee, j, D);
                                        break e;
                                    }
                                    j = ae;
                                    break e;
                                case 3:
                                    ae.flags = ae.flags & -65537 | 128;
                                case 0:
                                    if (ae = te.payload, D = typeof ae == "function" ? ae.call(Ee, j, D) : ae, D == null) break e;
                                    j = g({}, j, D);
                                    break e;
                                case 2:
                                    fl = !0;
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
                    }, U === null ? (M = U = B, S = j) : U = U.next = B, d |= D;
                    if (y = y.next, y === null) {
                        if (y = a.shared.pending, y === null) break;
                        B = y, y = B.next, B.next = null, a.lastBaseUpdate = B, a.shared.pending = null;
                    }
                }while (!0);
                U === null && (S = j), a.baseState = S, a.firstBaseUpdate = M, a.lastBaseUpdate = U, r === null && (a.shared.lanes = 0), El |= d, e.lanes = d, e.memoizedState = j;
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
        var xn = Q(null), wu = Q(0);
        function Zo(e, t) {
            e = el, Y(wu, e), Y(xn, t), el = e | t.baseLanes;
        }
        function wr() {
            Y(wu, el), Y(xn, xn.current);
        }
        function zr() {
            el = wu.current, Z(xn), Z(wu);
        }
        var pl = 0, se = null, be = null, Pe = null, zu = !1, Mn = !1, Jl = !1, Uu = 0, Sa = 0, Cn = null, x0 = 0;
        function we() {
            throw Error(s(321));
        }
        function Ur(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!ht(e[l], t[l])) return !1;
            return !0;
        }
        function Pr(e, t, l, n, a, r) {
            return pl = r, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? Bf : wf, Jl = !1, r = l(n, a), Jl = !1, Mn && (r = Jo(t, l, n, a)), $o(e), r;
        }
        function $o(e) {
            P.H = Lu;
            var t = be !== null && be.next !== null;
            if (pl = 0, Pe = be = se = null, zu = !1, Sa = 0, Cn = null, t) throw Error(s(300));
            e === null || Ke || (e = e.dependencies, e !== null && xu(e) && (Ke = !0));
        }
        function Jo(e, t, l, n) {
            se = e;
            var a = 0;
            do {
                if (Mn && (Cn = null), Sa = 0, Mn = !1, 25 <= a) throw Error(s(301));
                if (a += 1, Pe = be = null, e.updateQueue != null) {
                    var r = e.updateQueue;
                    r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
                }
                P.H = U0, r = t(l, n);
            }while (Mn);
            return r;
        }
        function M0() {
            var e = P.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? Ea(t) : t, e = e.useState()[0], (be !== null ? be.memoizedState : null) !== e && (se.flags |= 1024), t;
        }
        function qr() {
            var e = Uu !== 0;
            return Uu = 0, e;
        }
        function jr(e, t, l) {
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
            pl = 0, Pe = be = se = null, Mn = !1, Sa = Uu = 0, Cn = null;
        }
        function it() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Pe === null ? se.memoizedState = Pe = e : Pe = Pe.next = e, Pe;
        }
        function qe() {
            if (be === null) {
                var e = se.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = be.next;
            var t = Pe === null ? se.memoizedState : Pe.next;
            if (t !== null) Pe = t, be = e;
            else {
                if (e === null) throw se.alternate === null ? Error(s(467)) : Error(s(310));
                be = e, e = {
                    memoizedState: be.memoizedState,
                    baseState: be.baseState,
                    baseQueue: be.baseQueue,
                    queue: be.queue,
                    next: null
                }, Pe === null ? se.memoizedState = Pe = e : Pe = Pe.next = e;
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
            return Sa += 1, Cn === null && (Cn = []), e = Ko(Cn, e, t), t = se, (Pe === null ? t.memoizedState : Pe.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? Bf : wf), e;
        }
        function Pu(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return Ea(e);
                if (e.$$typeof === k) return et(e);
            }
            throw Error(s(438, String(e)));
        }
        function Lr(e) {
            var t = null, l = se.updateQueue;
            if (l !== null && (t = l.memoCache), t == null) {
                var n = se.alternate;
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
            }), l === null && (l = kr(), se.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), n = 0; n < e; n++)l[n] = Ce;
            return t.index++, l;
        }
        function Zt(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function qu(e) {
            var t = qe();
            return Qr(t, be, e);
        }
        function Qr(e, t, l) {
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
                var y = d = null, S = null, M = t, U = !1;
                do {
                    var j = M.lane & -536870913;
                    if (j !== M.lane ? (he & j) === j : (pl & j) === j) {
                        var D = M.revertLane;
                        if (D === 0) S !== null && (S = S.next = {
                            lane: 0,
                            revertLane: 0,
                            action: M.action,
                            hasEagerState: M.hasEagerState,
                            eagerState: M.eagerState,
                            next: null
                        }), j === On && (U = !0);
                        else if ((pl & D) === D) {
                            M = M.next, D === On && (U = !0);
                            continue;
                        } else j = {
                            lane: 0,
                            revertLane: M.revertLane,
                            action: M.action,
                            hasEagerState: M.hasEagerState,
                            eagerState: M.eagerState,
                            next: null
                        }, S === null ? (y = S = j, d = r) : S = S.next = j, se.lanes |= D, El |= D;
                        j = M.action, Jl && l(r, j), r = M.hasEagerState ? M.eagerState : l(r, j);
                    } else D = {
                        lane: j,
                        revertLane: M.revertLane,
                        action: M.action,
                        hasEagerState: M.hasEagerState,
                        eagerState: M.eagerState,
                        next: null
                    }, S === null ? (y = S = D, d = r) : S = S.next = D, se.lanes |= j, El |= j;
                    M = M.next;
                }while (M !== null && M !== t);
                if (S === null ? d = r : S.next = y, !ht(r, e.memoizedState) && (Ke = !0, U && (l = Nn, l !== null))) throw l;
                e.memoizedState = r, e.baseState = d, e.baseQueue = S, n.lastRenderedState = r;
            }
            return a === null && (n.lanes = 0), [
                e.memoizedState,
                n.dispatch
            ];
        }
        function Kr(e) {
            var t = qe(), l = t.queue;
            if (l === null) throw Error(s(311));
            l.lastRenderedReducer = e;
            var n = l.dispatch, a = l.pending, r = t.memoizedState;
            if (a !== null) {
                l.pending = null;
                var d = a = a.next;
                do r = e(r, d.action), d = d.next;
                while (d !== a);
                ht(r, t.memoizedState) || (Ke = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), l.lastRenderedState = r;
            }
            return [
                r,
                n
            ];
        }
        function Fo(e, t, l) {
            var n = se, a = qe(), r = ye;
            if (r) {
                if (l === void 0) throw Error(s(407));
                l = l();
            } else l = t();
            var d = !ht((be || a).memoizedState, l);
            d && (a.memoizedState = l, Ke = !0), a = a.queue;
            var y = ef.bind(null, n, a, e);
            if (_a(2048, 8, y, [
                e
            ]), a.getSnapshot !== t || d || Pe !== null && Pe.memoizedState.tag & 1) {
                if (n.flags |= 2048, Dn(9, ju(), Io.bind(null, n, a, l, t), null), Ae === null) throw Error(s(349));
                r || (pl & 124) !== 0 || Wo(n, t, l);
            }
            return l;
        }
        function Wo(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = se.updateQueue, t === null ? (t = kr(), se.updateQueue = t, t.stores = [
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
            var t = _n(e, 2);
            t !== null && bt(t, e, 2);
        }
        function Gr(e) {
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
        function nf(e, t, l, n) {
            return e.baseState = l, Qr(e, be, typeof n == "function" ? n : Zt);
        }
        function C0(e, t, l, n, a) {
            if (ku(e)) throw Error(s(485));
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
                    var y = l(a, n), S = P.S;
                    S !== null && S(d, y), uf(e, t, y);
                } catch (M) {
                    Yr(e, t, M);
                } finally{
                    P.T = r;
                }
            } else try {
                r = l(a, n), uf(e, t, r);
            } catch (M) {
                Yr(e, t, M);
            }
        }
        function uf(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
                rf(e, t, n);
            }, function(n) {
                return Yr(e, t, n);
            }) : rf(e, t, l);
        }
        function rf(e, t, l) {
            t.status = "fulfilled", t.value = l, cf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, af(e, l)));
        }
        function Yr(e, t, l) {
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
            if (ye) {
                var l = Ae.formState;
                if (l !== null) {
                    e: {
                        var n = se;
                        if (ye) {
                            if (De) {
                                t: {
                                    for(var a = De, r = Ut; a.nodeType !== 8;){
                                        if (!r) {
                                            a = null;
                                            break t;
                                        }
                                        if (a = Bt(a.nextSibling), a === null) {
                                            a = null;
                                            break t;
                                        }
                                    }
                                    r = a.data, a = r === "F!" || r === "F" ? a : null;
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
                lastRenderedReducer: sf,
                lastRenderedState: t
            }, l.queue = n, l = Mf.bind(null, se, n), n.dispatch = l, n = Gr(!1), r = Jr.bind(null, se, !1, n.queue), n = it(), a = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, n.queue = a, l = C0.bind(null, se, a, r, l), a.dispatch = l, n.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function ff(e) {
            var t = qe();
            return df(t, be, e);
        }
        function df(e, t, l) {
            if (t = Qr(e, t, sf)[0], e = qu(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var n = Ea(t);
            } catch (d) {
                throw d === ma ? Du : d;
            }
            else n = t;
            t = qe();
            var a = t.queue, r = a.dispatch;
            return l !== t.memoizedState && (se.flags |= 2048, Dn(9, ju(), D0.bind(null, a, l), null)), [
                n,
                r,
                e
            ];
        }
        function D0(e, t) {
            e.action = t;
        }
        function hf(e) {
            var t = qe(), l = be;
            if (l !== null) return df(t, l, e);
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
            }, t = se.updateQueue, t === null && (t = kr(), se.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
        }
        function ju() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function pf() {
            return qe().memoizedState;
        }
        function Hu(e, t, l, n) {
            var a = it();
            n = n === void 0 ? null : n, se.flags |= e, a.memoizedState = Dn(1 | t, ju(), l, n);
        }
        function _a(e, t, l, n) {
            var a = qe();
            n = n === void 0 ? null : n;
            var r = a.memoizedState.inst;
            be !== null && n !== null && Ur(n, be.memoizedState.deps) ? a.memoizedState = Dn(t, r, l, n) : (se.flags |= e, a.memoizedState = Dn(1 | t, r, l, n));
        }
        function mf(e, t) {
            Hu(8390656, 8, e, t);
        }
        function yf(e, t) {
            _a(2048, 8, e, t);
        }
        function vf(e, t) {
            return _a(4, 2, e, t);
        }
        function gf(e, t) {
            return _a(4, 4, e, t);
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
            ]) : null, _a(4, 4, bf.bind(null, t, e), l);
        }
        function Vr() {}
        function Ef(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            return t !== null && Ur(t, n[1]) ? n[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function _f(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            if (t !== null && Ur(t, n[1])) return n[0];
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
        function Xr(e, t, l) {
            return l === void 0 || (pl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = Ad(), se.lanes |= e, El |= e, l);
        }
        function Tf(e, t, l, n) {
            return ht(l, t) ? l : xn.current !== null ? (e = Xr(e, l, n), ht(e, t) || (Ke = !0), e) : (pl & 42) === 0 ? (Ke = !0, e.memoizedState = l) : (e = Ad(), se.lanes |= e, El |= e, t);
        }
        function Rf(e, t, l, n, a) {
            var r = X.p;
            X.p = r !== 0 && 8 > r ? r : 8;
            var d = P.T, y = {};
            P.T = y, Jr(e, !1, t, l);
            try {
                var S = a(), M = P.S;
                if (M !== null && M(y, S), S !== null && typeof S == "object" && typeof S.then == "function") {
                    var U = N0(S, n);
                    Ta(e, t, U, gt(e));
                } else Ta(e, t, n, gt(e));
            } catch (j) {
                Ta(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: j
                }, gt());
            } finally{
                X.p = r, P.T = d;
            }
        }
        function B0() {}
        function Zr(e, t, l, n) {
            if (e.tag !== 5) throw Error(s(476));
            var a = Af(e).queue;
            Rf(e, a, t, ne, l === null ? B0 : function() {
                return Of(e), l(n);
            });
        }
        function Af(e) {
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
                    lastRenderedReducer: Zt,
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
                    lastRenderedReducer: Zt,
                    lastRenderedState: l
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function Of(e) {
            var t = Af(e).next.queue;
            Ta(e, t, {}, gt());
        }
        function $r() {
            return et(La);
        }
        function Nf() {
            return qe().memoizedState;
        }
        function xf() {
            return qe().memoizedState;
        }
        function w0(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = gt();
                        e = dl(l);
                        var n = hl(t, e, l);
                        n !== null && (bt(n, t, l), va(n, t, l)), t = {
                            cache: Ar()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function z0(e, t, l) {
            var n = gt();
            l = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ku(e) ? Cf(t, l) : (l = mr(e, t, l, n), l !== null && (bt(l, e, n), Df(l, t, n)));
        }
        function Mf(e, t, l) {
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
            if (ku(e)) Cf(t, a);
            else {
                var r = e.alternate;
                if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null)) try {
                    var d = t.lastRenderedState, y = r(d, l);
                    if (a.hasEagerState = !0, a.eagerState = y, ht(y, d)) return Tu(e, t, a, 0), Ae === null && _u(), !1;
                } catch  {} finally{}
                if (l = mr(e, t, a, n), l !== null) return bt(l, e, n), Df(l, t, n), !0;
            }
            return !1;
        }
        function Jr(e, t, l, n) {
            if (n = {
                lane: 2,
                revertLane: xc(),
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, ku(e)) {
                if (t) throw Error(s(479));
            } else t = mr(e, l, n, 2), t !== null && bt(t, e, 2);
        }
        function ku(e) {
            var t = e.alternate;
            return e === se || t !== null && t === se;
        }
        function Cf(e, t) {
            Mn = zu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function Df(e, t, l) {
            if ((l & 4194048) !== 0) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, qs(e, l);
            }
        }
        var Lu = {
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
        }, Bf = {
            readContext: et,
            use: Pu,
            useCallback: function(e, t) {
                return it().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: et,
            useEffect: mf,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, Hu(4194308, 4, bf.bind(null, t, e), l);
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
                }, n.queue = e, e = e.dispatch = z0.bind(null, se, e), [
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
                e = Gr(e);
                var t = e.queue, l = Mf.bind(null, se, t);
                return t.dispatch = l, [
                    e.memoizedState,
                    l
                ];
            },
            useDebugValue: Vr,
            useDeferredValue: function(e, t) {
                var l = it();
                return Xr(l, e, t);
            },
            useTransition: function() {
                var e = Gr(!1);
                return e = Rf.bind(null, se, e.queue, !0, !1), it().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, l) {
                var n = se, a = it();
                if (ye) {
                    if (l === void 0) throw Error(s(407));
                    l = l();
                } else {
                    if (l = t(), Ae === null) throw Error(s(349));
                    (he & 124) !== 0 || Wo(n, t, l);
                }
                a.memoizedState = l;
                var r = {
                    value: l,
                    getSnapshot: t
                };
                return a.queue = r, mf(ef.bind(null, n, r, e), [
                    e
                ]), n.flags |= 2048, Dn(9, ju(), Io.bind(null, n, r, l, t), null), l;
            },
            useId: function() {
                var e = it(), t = Ae.identifierPrefix;
                if (ye) {
                    var l = Yt, n = Gt;
                    l = (n & ~(1 << 32 - dt(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Uu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = x0++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: $r,
            useFormState: of,
            useActionState: of,
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
                return t.queue = l, t = Jr.bind(null, se, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Lr,
            useCacheRefresh: function() {
                return it().memoizedState = w0.bind(null, se);
            }
        }, wf = {
            readContext: et,
            use: Pu,
            useCallback: Ef,
            useContext: et,
            useEffect: yf,
            useImperativeHandle: Sf,
            useInsertionEffect: vf,
            useLayoutEffect: gf,
            useMemo: _f,
            useReducer: qu,
            useRef: pf,
            useState: function() {
                return qu(Zt);
            },
            useDebugValue: Vr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return Tf(l, be.memoizedState, e, t);
            },
            useTransition: function() {
                var e = qu(Zt)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: Fo,
            useId: Nf,
            useHostTransitionStatus: $r,
            useFormState: ff,
            useActionState: ff,
            useOptimistic: function(e, t) {
                var l = qe();
                return nf(l, be, e, t);
            },
            useMemoCache: Lr,
            useCacheRefresh: xf
        }, U0 = {
            readContext: et,
            use: Pu,
            useCallback: Ef,
            useContext: et,
            useEffect: yf,
            useImperativeHandle: Sf,
            useInsertionEffect: vf,
            useLayoutEffect: gf,
            useMemo: _f,
            useReducer: Kr,
            useRef: pf,
            useState: function() {
                return Kr(Zt);
            },
            useDebugValue: Vr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return be === null ? Xr(l, e, t) : Tf(l, be.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Kr(Zt)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Ea(e),
                    t
                ];
            },
            useSyncExternalStore: Fo,
            useId: Nf,
            useHostTransitionStatus: $r,
            useFormState: hf,
            useActionState: hf,
            useOptimistic: function(e, t) {
                var l = qe();
                return be !== null ? nf(l, be, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: Lr,
            useCacheRefresh: xf
        }, Bn = null, Ra = 0;
        function Qu(e) {
            var t = Ra;
            return Ra += 1, Bn === null && (Bn = []), Ko(Bn, e, t);
        }
        function Aa(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Ku(e, t) {
            throw t.$$typeof === E ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function zf(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Uf(e) {
            function t(O, R) {
                if (e) {
                    var x = O.deletions;
                    x === null ? (O.deletions = [
                        R
                    ], O.flags |= 16) : x.push(R);
                }
            }
            function l(O, R) {
                if (!e) return null;
                for(; R !== null;)t(O, R), R = R.sibling;
                return null;
            }
            function n(O) {
                for(var R = new Map; O !== null;)O.key !== null ? R.set(O.key, O) : R.set(O.index, O), O = O.sibling;
                return R;
            }
            function a(O, R) {
                return O = Kt(O, R), O.index = 0, O.sibling = null, O;
            }
            function r(O, R, x) {
                return O.index = x, e ? (x = O.alternate, x !== null ? (x = x.index, x < R ? (O.flags |= 67108866, R) : x) : (O.flags |= 67108866, R)) : (O.flags |= 1048576, R);
            }
            function d(O) {
                return e && O.alternate === null && (O.flags |= 67108866), O;
            }
            function y(O, R, x, q) {
                return R === null || R.tag !== 6 ? (R = vr(x, O.mode, q), R.return = O, R) : (R = a(R, x), R.return = O, R);
            }
            function S(O, R, x, q) {
                var $ = x.type;
                return $ === N ? U(O, R, x.props.children, q, x.key) : R !== null && (R.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === F && zf($) === R.type) ? (R = a(R, x.props), Aa(R, x), R.return = O, R) : (R = Au(x.type, x.key, x.props, null, O.mode, q), Aa(R, x), R.return = O, R);
            }
            function M(O, R, x, q) {
                return R === null || R.tag !== 4 || R.stateNode.containerInfo !== x.containerInfo || R.stateNode.implementation !== x.implementation ? (R = gr(x, O.mode, q), R.return = O, R) : (R = a(R, x.children || []), R.return = O, R);
            }
            function U(O, R, x, q, $) {
                return R === null || R.tag !== 7 ? (R = Ql(x, O.mode, q, $), R.return = O, R) : (R = a(R, x), R.return = O, R);
            }
            function j(O, R, x) {
                if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return R = vr("" + R, O.mode, x), R.return = O, R;
                if (typeof R == "object" && R !== null) {
                    switch(R.$$typeof){
                        case b:
                            return x = Au(R.type, R.key, R.props, null, O.mode, x), Aa(x, R), x.return = O, x;
                        case T:
                            return R = gr(R, O.mode, x), R.return = O, R;
                        case F:
                            var q = R._init;
                            return R = q(R._payload), j(O, R, x);
                    }
                    if (We(R) || Ue(R)) return R = Ql(R, O.mode, x, null), R.return = O, R;
                    if (typeof R.then == "function") return j(O, Qu(R), x);
                    if (R.$$typeof === k) return j(O, Mu(O, R), x);
                    Ku(O, R);
                }
                return null;
            }
            function D(O, R, x, q) {
                var $ = R !== null ? R.key : null;
                if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return $ !== null ? null : y(O, R, "" + x, q);
                if (typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case b:
                            return x.key === $ ? S(O, R, x, q) : null;
                        case T:
                            return x.key === $ ? M(O, R, x, q) : null;
                        case F:
                            return $ = x._init, x = $(x._payload), D(O, R, x, q);
                    }
                    if (We(x) || Ue(x)) return $ !== null ? null : U(O, R, x, q, null);
                    if (typeof x.then == "function") return D(O, R, Qu(x), q);
                    if (x.$$typeof === k) return D(O, R, Mu(O, x), q);
                    Ku(O, x);
                }
                return null;
            }
            function B(O, R, x, q, $) {
                if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return O = O.get(x) || null, y(R, O, "" + q, $);
                if (typeof q == "object" && q !== null) {
                    switch(q.$$typeof){
                        case b:
                            return O = O.get(q.key === null ? x : q.key) || null, S(R, O, q, $);
                        case T:
                            return O = O.get(q.key === null ? x : q.key) || null, M(R, O, q, $);
                        case F:
                            var oe = q._init;
                            return q = oe(q._payload), B(O, R, x, q, $);
                    }
                    if (We(q) || Ue(q)) return O = O.get(x) || null, U(R, O, q, $, null);
                    if (typeof q.then == "function") return B(O, R, x, Qu(q), $);
                    if (q.$$typeof === k) return B(O, R, x, Mu(R, q), $);
                    Ku(R, q);
                }
                return null;
            }
            function ae(O, R, x, q) {
                for(var $ = null, oe = null, W = R, le = R = 0, Ye = null; W !== null && le < x.length; le++){
                    W.index > le ? (Ye = W, W = null) : Ye = W.sibling;
                    var me = D(O, W, x[le], q);
                    if (me === null) {
                        W === null && (W = Ye);
                        break;
                    }
                    e && W && me.alternate === null && t(O, W), R = r(me, R, le), oe === null ? $ = me : oe.sibling = me, oe = me, W = Ye;
                }
                if (le === x.length) return l(O, W), ye && Gl(O, le), $;
                if (W === null) {
                    for(; le < x.length; le++)W = j(O, x[le], q), W !== null && (R = r(W, R, le), oe === null ? $ = W : oe.sibling = W, oe = W);
                    return ye && Gl(O, le), $;
                }
                for(W = n(W); le < x.length; le++)Ye = B(W, O, le, x[le], q), Ye !== null && (e && Ye.alternate !== null && W.delete(Ye.key === null ? le : Ye.key), R = r(Ye, R, le), oe === null ? $ = Ye : oe.sibling = Ye, oe = Ye);
                return e && W.forEach(function(Cl) {
                    return t(O, Cl);
                }), ye && Gl(O, le), $;
            }
            function te(O, R, x, q) {
                if (x == null) throw Error(s(151));
                for(var $ = null, oe = null, W = R, le = R = 0, Ye = null, me = x.next(); W !== null && !me.done; le++, me = x.next()){
                    W.index > le ? (Ye = W, W = null) : Ye = W.sibling;
                    var Cl = D(O, W, me.value, q);
                    if (Cl === null) {
                        W === null && (W = Ye);
                        break;
                    }
                    e && W && Cl.alternate === null && t(O, W), R = r(Cl, R, le), oe === null ? $ = Cl : oe.sibling = Cl, oe = Cl, W = Ye;
                }
                if (me.done) return l(O, W), ye && Gl(O, le), $;
                if (W === null) {
                    for(; !me.done; le++, me = x.next())me = j(O, me.value, q), me !== null && (R = r(me, R, le), oe === null ? $ = me : oe.sibling = me, oe = me);
                    return ye && Gl(O, le), $;
                }
                for(W = n(W); !me.done; le++, me = x.next())me = B(W, O, le, me.value, q), me !== null && (e && me.alternate !== null && W.delete(me.key === null ? le : me.key), R = r(me, R, le), oe === null ? $ = me : oe.sibling = me, oe = me);
                return e && W.forEach(function(P1) {
                    return t(O, P1);
                }), ye && Gl(O, le), $;
            }
            function Ee(O, R, x, q) {
                if (typeof x == "object" && x !== null && x.type === N && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
                    switch(x.$$typeof){
                        case b:
                            e: {
                                for(var $ = x.key; R !== null;){
                                    if (R.key === $) {
                                        if ($ = x.type, $ === N) {
                                            if (R.tag === 7) {
                                                l(O, R.sibling), q = a(R, x.props.children), q.return = O, O = q;
                                                break e;
                                            }
                                        } else if (R.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === F && zf($) === R.type) {
                                            l(O, R.sibling), q = a(R, x.props), Aa(q, x), q.return = O, O = q;
                                            break e;
                                        }
                                        l(O, R);
                                        break;
                                    } else t(O, R);
                                    R = R.sibling;
                                }
                                x.type === N ? (q = Ql(x.props.children, O.mode, q, x.key), q.return = O, O = q) : (q = Au(x.type, x.key, x.props, null, O.mode, q), Aa(q, x), q.return = O, O = q);
                            }
                            return d(O);
                        case T:
                            e: {
                                for($ = x.key; R !== null;){
                                    if (R.key === $) if (R.tag === 4 && R.stateNode.containerInfo === x.containerInfo && R.stateNode.implementation === x.implementation) {
                                        l(O, R.sibling), q = a(R, x.children || []), q.return = O, O = q;
                                        break e;
                                    } else {
                                        l(O, R);
                                        break;
                                    }
                                    else t(O, R);
                                    R = R.sibling;
                                }
                                q = gr(x, O.mode, q), q.return = O, O = q;
                            }
                            return d(O);
                        case F:
                            return $ = x._init, x = $(x._payload), Ee(O, R, x, q);
                    }
                    if (We(x)) return ae(O, R, x, q);
                    if (Ue(x)) {
                        if ($ = Ue(x), typeof $ != "function") throw Error(s(150));
                        return x = $.call(x), te(O, R, x, q);
                    }
                    if (typeof x.then == "function") return Ee(O, R, Qu(x), q);
                    if (x.$$typeof === k) return Ee(O, R, Mu(O, x), q);
                    Ku(O, x);
                }
                return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, R !== null && R.tag === 6 ? (l(O, R.sibling), q = a(R, x), q.return = O, O = q) : (l(O, R), q = vr(x, O.mode, q), q.return = O, O = q), d(O)) : l(O, R);
            }
            return function(O, R, x, q) {
                try {
                    Ra = 0;
                    var $ = Ee(O, R, x, q);
                    return Bn = null, $;
                } catch (W) {
                    if (W === ma || W === Du) throw W;
                    var oe = pt(29, W, null, O.mode);
                    return oe.lanes = q, oe.return = O, oe;
                } finally{}
            };
        }
        var wn = Uf(!0), Pf = Uf(!1), Ot = Q(null), Pt = null;
        function ml(e) {
            var t = e.alternate;
            Y(He, He.current & 1), Y(Ot, e), Pt === null && (t === null || xn.current !== null || t.memoizedState !== null) && (Pt = e);
        }
        function qf(e) {
            if (e.tag === 22) {
                if (Y(He, He.current), Y(Ot, e), Pt === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (Pt = e);
                }
            } else yl();
        }
        function yl() {
            Y(He, He.current), Y(Ot, Ot.current);
        }
        function $t(e) {
            Z(Ot), Pt === e && (Pt = null), Z(He);
        }
        var He = Q(0);
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
        function Fr(e, t, l, n) {
            t = e.memoizedState, l = l(n, t), l = l == null ? t : g({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var Wr = {
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
        function jf(e, t, l, n, a, r, d) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, r, d) : t.prototype && t.prototype.isPureReactComponent ? !ra(l, n) || !ra(a, r) : !0;
        }
        function Hf(e, t, l, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Wr.enqueueReplaceState(t, t.state, null);
        }
        function Fl(e, t) {
            var l = t;
            if ("ref" in t) {
                l = {};
                for(var n in t)n !== "ref" && (l[n] = t[n]);
            }
            if (e = e.defaultProps) {
                l === t && (l = g({}, l));
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
        function kf(e) {
            Yu(e);
        }
        function Lf(e) {
            console.error(e);
        }
        function Qf(e) {
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
        function Ir(e, t, l) {
            return l = dl(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Vu(e, t);
            }, l;
        }
        function Gf(e) {
            return e = dl(e), e.tag = 3, e;
        }
        function Yf(e, t, l, n) {
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
                Kf(t, l, n), typeof a != "function" && (_l === null ? _l = new Set([
                    this
                ]) : _l.add(this));
                var y = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: y !== null ? y : ""
                });
            });
        }
        function P0(e, t, l, n, a) {
            if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (t = l.alternate, t !== null && da(t, l, a, !0), l = Ot.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return Pt === null ? Tc() : l.alternate === null && Be === 0 && (Be = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === xr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
                                n
                            ]) : t.add(n), Ac(e, n, a)), !1;
                        case 22:
                            return l.flags |= 65536, n === xr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    n
                                ])
                            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([
                                n
                            ]) : l.add(n)), Ac(e, n, a)), !1;
                    }
                    throw Error(s(435, l.tag));
                }
                return Ac(e, n, a), Tc(), !1;
            }
            if (ye) return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Er && (e = Error(s(422), {
                cause: n
            }), fa(_t(e, l)))) : (n !== Er && (t = Error(s(423), {
                cause: n
            }), fa(_t(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = Ir(e.stateNode, n, a), Dr(e, a), Be !== 4 && (Be = 2)), !1;
            var r = Error(s(520), {
                cause: n
            });
            if (r = _t(r, l), Ba === null ? Ba = [
                r
            ] : Ba.push(r), Be !== 4 && (Be = 2), t === null) return !0;
            n = _t(n, l), l = t;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, e = a & -a, l.lanes |= e, e = Ir(l.stateNode, n, e), Dr(l, e), !1;
                    case 1:
                        if (t = l.type, r = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (_l === null || !_l.has(r)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = Gf(a), Yf(a, e, l, n), Dr(l, a), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Vf = Error(s(461)), Ke = !1;
        function Xe(e, t, l, n) {
            t.child = e === null ? Pf(t, null, l, n) : wn(t, e.child, l, n);
        }
        function Xf(e, t, l, n, a) {
            l = l.render;
            var r = t.ref;
            if ("ref" in n) {
                var d = {};
                for(var y in n)y !== "ref" && (d[y] = n[y]);
            } else d = n;
            return Zl(t), n = Pr(e, t, l, d, r, a), y = qr(), e !== null && !Ke ? (jr(e, t, a), Jt(e, t, a)) : (ye && y && br(t), t.flags |= 1, Xe(e, t, n, a), t.child);
        }
        function Zf(e, t, l, n, a) {
            if (e === null) {
                var r = l.type;
                return typeof r == "function" && !yr(r) && r.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = r, $f(e, t, r, n, a)) : (e = Au(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (r = e.child, !rc(e, a)) {
                var d = r.memoizedProps;
                if (l = l.compare, l = l !== null ? l : ra, l(d, n) && e.ref === t.ref) return Jt(e, t, a);
            }
            return t.flags |= 1, e = Kt(r, n), e.ref = t.ref, e.return = t, t.child = e;
        }
        function $f(e, t, l, n, a) {
            if (e !== null) {
                var r = e.memoizedProps;
                if (ra(r, n) && e.ref === t.ref) if (Ke = !1, t.pendingProps = n = r, rc(e, a)) (e.flags & 131072) !== 0 && (Ke = !0);
                else return t.lanes = e.lanes, Jt(e, t, a);
            }
            return ec(e, t, l, n, a);
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
                }, e !== null && Cu(t, r !== null ? r.cachePool : null), r !== null ? Zo(t, r) : wr(), qf(t);
                else return t.lanes = t.childLanes = 536870912, Ff(e, t, r !== null ? r.baseLanes | l : l, l);
            } else r !== null ? (Cu(t, r.cachePool), Zo(t, r), yl(), t.memoizedState = null) : (e !== null && Cu(t, null), wr(), yl());
            return Xe(e, t, a, l), t.child;
        }
        function Ff(e, t, l, n) {
            var a = Nr();
            return a = a === null ? null : {
                parent: je._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: a
            }, e !== null && Cu(t, null), wr(), qf(t), e !== null && da(e, t, n, !0), null;
        }
        function Xu(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(s(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function ec(e, t, l, n, a) {
            return Zl(t), l = Pr(e, t, l, n, void 0, a), n = qr(), e !== null && !Ke ? (jr(e, t, a), Jt(e, t, a)) : (ye && n && br(t), t.flags |= 1, Xe(e, t, l, a), t.child);
        }
        function Wf(e, t, l, n, a, r) {
            return Zl(t), t.updateQueue = null, l = Jo(t, n, l, a), $o(e), n = qr(), e !== null && !Ke ? (jr(e, t, r), Jt(e, t, r)) : (ye && n && br(t), t.flags |= 1, Xe(e, t, l, r), t.child);
        }
        function If(e, t, l, n, a) {
            if (Zl(t), t.stateNode === null) {
                var r = Tn, d = l.contextType;
                typeof d == "object" && d !== null && (r = et(d)), r = new l(n, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Wr, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = n, r.state = t.memoizedState, r.refs = {}, Mr(t), d = l.contextType, r.context = typeof d == "object" && d !== null ? et(d) : Tn, r.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && (Fr(t, l, d, n), r.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (d = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), d !== r.state && Wr.enqueueReplaceState(r, r.state, null), ba(t, n, r, a), ga(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
            } else if (e === null) {
                r = t.stateNode;
                var y = t.memoizedProps, S = Fl(l, y);
                r.props = S;
                var M = r.context, U = l.contextType;
                d = Tn, typeof U == "object" && U !== null && (d = et(U));
                var j = l.getDerivedStateFromProps;
                U = typeof j == "function" || typeof r.getSnapshotBeforeUpdate == "function", y = t.pendingProps !== y, U || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y || M !== d) && Hf(t, r, n, d), fl = !1;
                var D = t.memoizedState;
                r.state = D, ba(t, n, r, a), ga(), M = t.memoizedState, y || D !== M || fl ? (typeof j == "function" && (Fr(t, l, j, n), M = t.memoizedState), (S = fl || jf(t, l, S, n, D, M, d)) ? (U || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = M), r.props = n, r.state = M, r.context = d, n = S) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
            } else {
                r = t.stateNode, Cr(e, t), d = t.memoizedProps, U = Fl(l, d), r.props = U, j = t.pendingProps, D = r.context, M = l.contextType, S = Tn, typeof M == "object" && M !== null && (S = et(M)), y = l.getDerivedStateFromProps, (M = typeof y == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (d !== j || D !== S) && Hf(t, r, n, S), fl = !1, D = t.memoizedState, r.state = D, ba(t, n, r, a), ga();
                var B = t.memoizedState;
                d !== j || D !== B || fl || e !== null && e.dependencies !== null && xu(e.dependencies) ? (typeof y == "function" && (Fr(t, l, y, n), B = t.memoizedState), (U = fl || jf(t, l, U, n, D, B, S) || e !== null && e.dependencies !== null && xu(e.dependencies)) ? (M || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(n, B, S), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(n, B, S)), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = B), r.props = n, r.state = B, r.context = S, n = U) : (typeof r.componentDidUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), n = !1);
            }
            return r = n, Xu(e, t), n = (t.flags & 128) !== 0, r || n ? (r = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && n ? (t.child = wn(t, e.child, null, a), t.child = wn(t, null, l, a)) : Xe(e, t, l, a), t.memoizedState = r.state, e = t.child) : e = Jt(e, t, a), e;
        }
        function ed(e, t, l, n) {
            return oa(), t.flags |= 256, Xe(e, t, l, n), t.child;
        }
        var tc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function lc(e) {
            return {
                baseLanes: e,
                cachePool: ko()
            };
        }
        function nc(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Nt), e;
        }
        function td(e, t, l) {
            var n = t.pendingProps, a = !1, r = (t.flags & 128) !== 0, d;
            if ((d = r) || (d = e !== null && e.memoizedState === null ? !1 : (He.current & 2) !== 0), d && (a = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (ye) {
                    if (a ? ml(t) : yl(), ye) {
                        var y = De, S;
                        if (S = y) {
                            e: {
                                for(S = y, y = Ut; S.nodeType !== 8;){
                                    if (!y) {
                                        y = null;
                                        break e;
                                    }
                                    if (S = Bt(S.nextSibling), S === null) {
                                        y = null;
                                        break e;
                                    }
                                }
                                y = S;
                            }
                            y !== null ? (t.memoizedState = {
                                dehydrated: y,
                                treeContext: Kl !== null ? {
                                    id: Gt,
                                    overflow: Yt
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, S = pt(18, null, null, 0), S.stateNode = y, S.return = t, t.child = S, nt = t, De = null, S = !0) : S = !1;
                        }
                        S || Vl(t);
                    }
                    if (y = t.memoizedState, y !== null && (y = y.dehydrated, y !== null)) return kc(y) ? t.lanes = 32 : t.lanes = 536870912, null;
                    $t(t);
                }
                return y = n.children, n = n.fallback, a ? (yl(), a = t.mode, y = Zu({
                    mode: "hidden",
                    children: y
                }, a), n = Ql(n, a, l, null), y.return = t, n.return = t, y.sibling = n, t.child = y, a = t.child, a.memoizedState = lc(l), a.childLanes = nc(e, d, l), t.memoizedState = tc, n) : (ml(t), ac(t, y));
            }
            if (S = e.memoizedState, S !== null && (y = S.dehydrated, y !== null)) {
                if (r) t.flags & 256 ? (ml(t), t.flags &= -257, t = uc(e, t, l)) : t.memoizedState !== null ? (yl(), t.child = e.child, t.flags |= 128, t = null) : (yl(), a = n.fallback, y = t.mode, n = Zu({
                    mode: "visible",
                    children: n.children
                }, y), a = Ql(a, y, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, wn(t, e.child, null, l), n = t.child, n.memoizedState = lc(l), n.childLanes = nc(e, d, l), t.memoizedState = tc, t = a);
                else if (ml(t), kc(y)) {
                    if (d = y.nextSibling && y.nextSibling.dataset, d) var M = d.dgst;
                    d = M, n = Error(s(419)), n.stack = "", n.digest = d, fa({
                        value: n,
                        source: null,
                        stack: null
                    }), t = uc(e, t, l);
                } else if (Ke || da(e, t, l, !1), d = (l & e.childLanes) !== 0, Ke || d) {
                    if (d = Ae, d !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : Li(n), n = (n & (d.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== S.retryLane)) throw S.retryLane = n, _n(e, n), bt(d, e, n), Vf;
                    y.data === "$?" || Tc(), t = uc(e, t, l);
                } else y.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, De = Bt(y.nextSibling), nt = t, ye = !0, Yl = null, Ut = !1, e !== null && (Rt[At++] = Gt, Rt[At++] = Yt, Rt[At++] = Kl, Gt = e.id, Yt = e.overflow, Kl = t), t = ac(t, n.children), t.flags |= 4096);
                return t;
            }
            return a ? (yl(), a = n.fallback, y = t.mode, S = e.child, M = S.sibling, n = Kt(S, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = S.subtreeFlags & 65011712, M !== null ? a = Kt(M, a) : (a = Ql(a, y, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, y = e.child.memoizedState, y === null ? y = lc(l) : (S = y.cachePool, S !== null ? (M = je._currentValue, S = S.parent !== M ? {
                parent: M,
                pool: M
            } : S) : S = ko(), y = {
                baseLanes: y.baseLanes | l,
                cachePool: S
            }), a.memoizedState = y, a.childLanes = nc(e, d, l), t.memoizedState = tc, n) : (ml(t), l = e.child, e = l.sibling, l = Kt(l, {
                mode: "visible",
                children: n.children
            }), l.return = t, l.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [
                e
            ], t.flags |= 16) : d.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function ac(e, t) {
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
        function uc(e, t, l) {
            return wn(t, e.child, null, l), e = ac(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function ld(e, t, l) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), Tr(e.return, t, l);
        }
        function ic(e, t, l, n, a) {
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
            if (Xe(e, t, n.children, l), n = He.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
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
            switch(Y(He, n), a){
                case "forwards":
                    for(l = t.child, a = null; l !== null;)e = l.alternate, e !== null && Gu(e) === null && (a = l), l = l.sibling;
                    l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), ic(t, !1, a, l, r);
                    break;
                case "backwards":
                    for(l = null, a = t.child, t.child = null; a !== null;){
                        if (e = a.alternate, e !== null && Gu(e) === null) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = l, l = a, a = e;
                    }
                    ic(t, !0, l, null, r);
                    break;
                case "together":
                    ic(t, !1, null, null, void 0);
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
            if (e !== null && t.child !== e.child) throw Error(s(153));
            if (t.child !== null) {
                for(e = t.child, l = Kt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = Kt(e, e.pendingProps), l.return = t;
                l.sibling = null;
            }
            return t.child;
        }
        function rc(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && xu(e)));
        }
        function q0(e, t, l) {
            switch(t.tag){
                case 3:
                    Oe(t, t.stateNode.containerInfo), ol(t, je, e.memoizedState.cache), oa();
                    break;
                case 27:
                case 5:
                    Pi(t);
                    break;
                case 4:
                    Oe(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    ol(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var n = t.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (ml(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? td(e, t, l) : (ml(t), e = Jt(e, t, l), e !== null ? e.sibling : null);
                    ml(t);
                    break;
                case 19:
                    var a = (e.flags & 128) !== 0;
                    if (n = (l & t.childLanes) !== 0, n || (da(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                        if (n) return nd(e, t, l);
                        t.flags |= 128;
                    }
                    if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Y(He, He.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Jf(e, t, l);
                case 24:
                    ol(t, je, e.memoizedState.cache);
            }
            return Jt(e, t, l);
        }
        function ad(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) Ke = !0;
            else {
                if (!rc(e, l) && (t.flags & 128) === 0) return Ke = !1, q0(e, t, l);
                Ke = (e.flags & 131072) !== 0;
            }
            else Ke = !1, ye && (t.flags & 1048576) !== 0 && wo(t, Nu, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var n = t.elementType, a = n._init;
                        if (n = a(n._payload), t.type = n, typeof n == "function") yr(n) ? (e = Fl(n, e), t.tag = 1, t = If(null, t, n, e, l)) : (t.tag = 0, t = ec(null, t, n, e, l));
                        else {
                            if (n != null) {
                                if (a = n.$$typeof, a === G) {
                                    t.tag = 11, t = Xf(null, t, n, e, l);
                                    break e;
                                } else if (a === V) {
                                    t.tag = 14, t = Zf(null, t, n, e, l);
                                    break e;
                                }
                            }
                            throw t = Pl(n) || n, Error(s(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return ec(e, t, t.type, t.pendingProps, l);
                case 1:
                    return n = t.type, a = Fl(n, t.pendingProps), If(e, t, n, a, l);
                case 3:
                    e: {
                        if (Oe(t, t.stateNode.containerInfo), e === null) throw Error(s(387));
                        n = t.pendingProps;
                        var r = t.memoizedState;
                        a = r.element, Cr(e, t), ba(t, n, null, l);
                        var d = t.memoizedState;
                        if (n = d.cache, ol(t, je, n), n !== r.cache && Rr(t, [
                            je
                        ], l, !0), ga(), n = d.element, r.isDehydrated) if (r = {
                            element: n,
                            isDehydrated: !1,
                            cache: d.cache
                        }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
                            t = ed(e, t, n, l);
                            break e;
                        } else if (n !== a) {
                            a = _t(Error(s(424)), t), fa(a), t = ed(e, t, n, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(De = Bt(e.firstChild), nt = t, ye = !0, Yl = null, Ut = !0, l = Pf(t, null, n, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
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
                    return Xu(e, t), e === null ? (l = ch(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ye || (l = t.type, e = t.pendingProps, n = ci(ie.current).createElement(l), n[Ie] = t, n[at] = e, $e(n, l, e), Qe(n), t.stateNode = n) : t.memoizedState = ch(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return Pi(t), e === null && ye && (n = t.stateNode = uh(t.type, t.pendingProps, ie.current), nt = t, Ut = !0, a = De, Al(t.type) ? (Lc = a, De = Bt(n.firstChild)) : De = a), Xe(e, t, t.pendingProps.children, l), Xu(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && ye && ((a = n = De) && (n = f1(n, t.type, t.pendingProps, Ut), n !== null ? (t.stateNode = n, nt = t, De = Bt(n.firstChild), Ut = !1, a = !0) : a = !1), a || Vl(t)), Pi(t), a = t.type, r = t.pendingProps, d = e !== null ? e.memoizedProps : null, n = r.children, qc(a, r) ? n = null : d !== null && qc(a, d) && (t.flags |= 32), t.memoizedState !== null && (a = Pr(e, t, M0, null, null, l), La._currentValue = a), Xu(e, t), Xe(e, t, n, l), t.child;
                case 6:
                    return e === null && ye && ((e = l = De) && (l = d1(l, t.pendingProps, Ut), l !== null ? (t.stateNode = l, nt = t, De = null, e = !0) : e = !1), e || Vl(t)), null;
                case 13:
                    return td(e, t, l);
                case 4:
                    return Oe(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = wn(t, null, n, l) : Xe(e, t, n, l), t.child;
                case 11:
                    return Xf(e, t, t.type, t.pendingProps, l);
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
                    return Zf(e, t, t.type, t.pendingProps, l);
                case 15:
                    return $f(e, t, t.type, t.pendingProps, l);
                case 19:
                    return nd(e, t, l);
                case 31:
                    return n = t.pendingProps, l = t.mode, n = {
                        mode: n.mode,
                        children: n.children
                    }, e === null ? (l = Zu(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Kt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return Jf(e, t, l);
                case 24:
                    return Zl(t), n = et(je), e === null ? (a = Nr(), a === null && (a = Ae, r = Ar(), a.pooledCache = r, r.refCount++, r !== null && (a.pooledCacheLanes |= l), a = r), t.memoizedState = {
                        parent: n,
                        cache: a
                    }, Mr(t), ol(t, je, a)) : ((e.lanes & l) !== 0 && (Cr(e, t), ba(t, null, null, l), ga()), a = e.memoizedState, r = t.memoizedState, a.parent !== n ? (a = {
                        parent: n,
                        cache: n
                    }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ol(t, je, n)) : (n = r.cache, ol(t, je, n), n !== a.cache && Rr(t, [
                        je
                    ], l, !0))), Xe(e, t, t.pendingProps.children, l), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(s(156, t.tag));
        }
        function Ft(e) {
            e.flags |= 4;
        }
        function ud(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !hh(t)) {
                if (t = Ot.current, t !== null && ((he & 4194048) === he ? Pt !== null : (he & 62914560) !== he && (he & 536870912) === 0 || t !== Pt)) throw ya = xr, Lo;
                e.flags |= 8192;
            }
        }
        function $u(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Us() : 536870912, e.lanes |= t, qn |= t);
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
        function j0(e, t, l) {
            var n = t.pendingProps;
            switch(Sr(t), t.tag){
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
                    return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Xt(je), il(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (sa(t) ? Ft(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Po())), xe(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (Ft(t), l !== null ? (xe(t), ud(t, l)) : (xe(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Ft(t), xe(t), ud(t, l)) : (xe(t), t.flags &= -16777217) : (e.memoizedProps !== n && Ft(t), xe(t), t.flags &= -16777217), null;
                case 27:
                    iu(t), l = ie.current;
                    var a = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(s(166));
                            return xe(t), null;
                        }
                        e = ee.current, sa(t) ? zo(t) : (e = uh(a, n, l), t.stateNode = e, Ft(t));
                    }
                    return xe(t), null;
                case 5:
                    if (iu(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && Ft(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(s(166));
                            return xe(t), null;
                        }
                        if (e = ee.current, sa(t)) zo(t);
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
                        if (typeof n != "string" && t.stateNode === null) throw Error(s(166));
                        if (e = ie.current, sa(t)) {
                            if (e = t.stateNode, l = t.memoizedProps, n = null, a = nt, a !== null) switch(a.tag){
                                case 27:
                                case 5:
                                    n = a.memoizedProps;
                            }
                            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Wd(e.nodeValue, l)), e || Vl(t);
                        } else e = ci(e).createTextNode(n), e[Ie] = t, t.stateNode = e;
                    }
                    return xe(t), null;
                case 13:
                    if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (a = sa(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!a) throw Error(s(318));
                                if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
                                a[Ie] = t;
                            } else oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            xe(t), a = !1;
                        } else a = Po(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                        if (!a) return t.flags & 256 ? ($t(t), t) : ($t(t), null);
                    }
                    if ($t(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                        n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                        var r = null;
                        n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== a && (n.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), $u(t, t.updateQueue), xe(t), null;
                case 4:
                    return il(), e === null && Bc(t.stateNode.containerInfo), xe(t), null;
                case 10:
                    return Xt(t.type), xe(t), null;
                case 19:
                    if (Z(He), a = t.memoizedState, a === null) return xe(t), null;
                    if (n = (t.flags & 128) !== 0, r = a.rendering, r === null) if (n) Oa(a, !1);
                    else {
                        if (Be !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (r = Gu(e), r !== null) {
                                for(t.flags |= 128, Oa(a, !1), e = r.updateQueue, t.updateQueue = e, $u(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)Bo(l, e), l = l.sibling;
                                return Y(He, He.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && zt() > Wu && (t.flags |= 128, n = !0, Oa(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!n) if (e = Gu(r), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, $u(t, e), Oa(a, !0), a.tail === null && a.tailMode === "hidden" && !r.alternate && !ye) return xe(t), null;
                        } else 2 * zt() - a.renderingStartTime > Wu && l !== 536870912 && (t.flags |= 128, n = !0, Oa(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (r.sibling = t.child, t.child = r) : (e = a.last, e !== null ? e.sibling = r : t.child = r, a.last = r);
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = zt(), t.sibling = null, e = He.current, Y(He, n ? e & 1 | 2 : e & 1), t) : (xe(t), null);
                case 22:
                case 23:
                    return $t(t), zr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), l = t.updateQueue, l !== null && $u(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && Z($l), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Xt(je), xe(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(s(156, t.tag));
        }
        function H0(e, t) {
            switch(Sr(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Xt(je), il(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return iu(t), null;
                case 13:
                    if ($t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(s(340));
                        oa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return Z(He), null;
                case 4:
                    return il(), null;
                case 10:
                    return Xt(t.type), null;
                case 22:
                case 23:
                    return $t(t), zr(), e !== null && Z($l), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Xt(je), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function id(e, t) {
            switch(Sr(t), t.tag){
                case 3:
                    Xt(je), il();
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
                    $t(t);
                    break;
                case 19:
                    Z(He);
                    break;
                case 10:
                    Xt(t.type);
                    break;
                case 22:
                case 23:
                    $t(t), zr(), e !== null && Z($l);
                    break;
                case 24:
                    Xt(je);
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
                Re(t, t.return, y);
            }
        }
        function vl(e, t, l) {
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
                                } catch (U) {
                                    Re(a, S, U);
                                }
                            }
                        }
                        n = n.next;
                    }while (n !== r);
                }
            } catch (U) {
                Re(t, t.return, U);
            }
        }
        function rd(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    Xo(t, l);
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
                Re(e, e.return, a);
            }
        }
        function cc(e, t, l) {
            try {
                var n = e.stateNode;
                i1(n, e.type, l, t), n[at] = t;
            } catch (a) {
                Re(e, e.return, a);
            }
        }
        function od(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Al(e.type) || e.tag === 4;
        }
        function sc(e) {
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
        function oc(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ri));
            else if (n !== 4 && (n === 27 && Al(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(oc(e, t, l), e = e.sibling; e !== null;)oc(e, t, l), e = e.sibling;
        }
        function Ju(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (n !== 4 && (n === 27 && Al(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(Ju(e, t, l), e = e.sibling; e !== null;)Ju(e, t, l), e = e.sibling;
        }
        function fd(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var n = e.type, a = t.attributes; a.length;)t.removeAttributeNode(a[0]);
                $e(t, n, l), t[Ie] = e, t[at] = l;
            } catch (r) {
                Re(e, e.return, r);
            }
        }
        var Wt = !1, ze = !1, fc = !1, dd = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
        function k0(e, t) {
            if (e = e.containerInfo, Uc = pi, e = _o(e), sr(e)) {
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
                        var d = 0, y = -1, S = -1, M = 0, U = 0, j = e, D = null;
                        t: for(;;){
                            for(var B; j !== l || a !== 0 && j.nodeType !== 3 || (y = d + a), j !== r || n !== 0 && j.nodeType !== 3 || (S = d + n), j.nodeType === 3 && (d += j.nodeValue.length), (B = j.firstChild) !== null;)D = j, j = B;
                            for(;;){
                                if (j === e) break t;
                                if (D === l && ++M === a && (y = d), D === r && ++U === n && (S = d), (B = j.nextSibling) !== null) break;
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
            for(Pc = {
                focusedElem: e,
                selectionRange: l
            }, pi = !1, Ge = t; Ge !== null;)if (t = Ge, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ge = e;
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
                                var ae = Fl(l.type, a, l.elementType === l.type);
                                e = n.getSnapshotBeforeUpdate(ae, r), n.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (te) {
                                Re(l, l.return, te);
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
                            Xo(e, t);
                        } catch (d) {
                            Re(l, l.return, d);
                        }
                    }
                    break;
                case 27:
                    t === null && n & 4 && fd(l);
                case 26:
                case 5:
                    gl(e, l), t === null && n & 4 && sd(l), n & 512 && xa(l, l.return);
                    break;
                case 12:
                    gl(e, l);
                    break;
                case 13:
                    gl(e, l), n & 4 && yd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = $0.bind(null, l), h1(e, l))));
                    break;
                case 22:
                    if (n = l.memoizedState !== null || Wt, !n) {
                        t = t !== null && t.memoizedState !== null || ze, a = Wt;
                        var r = ze;
                        Wt = n, (ze = t) && !r ? bl(e, l, (l.subtreeFlags & 8772) !== 0) : gl(e, l), Wt = a, ze = r;
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
            t !== null && (e.alternate = null, pd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Gi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Ne = null, rt = !1;
        function It(e, t, l) {
            for(l = l.child; l !== null;)md(e, t, l), l = l.sibling;
        }
        function md(e, t, l) {
            if (ft && typeof ft.onCommitFiberUnmount == "function") try {
                ft.onCommitFiberUnmount($n, l);
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
                    } catch (r) {
                        Re(l, t, r);
                    }
                    else try {
                        Ne.removeChild(l.stateNode);
                    } catch (r) {
                        Re(l, t, r);
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
                    ze || vl(2, l, t), ze || vl(4, l, t), It(e, t, l);
                    break;
                case 1:
                    ze || (qt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && cd(l, t, n)), It(e, t, l);
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
        function yd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Ya(e);
            } catch (l) {
                Re(t, t.return, l);
            }
        }
        function L0(e) {
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
        function dc(e, t) {
            var l = L0(e);
            t.forEach(function(n) {
                var a = J0.bind(null, e, n);
                l.has(n) || (l.add(n), n.then(a, a));
            });
        }
        function mt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var n = 0; n < l.length; n++){
                var a = l[n], r = e, d = t, y = d;
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
                if (Ne === null) throw Error(s(160));
                md(r, d, a), Ne = null, rt = !1, r = a.alternate, r !== null && (r.return = null), a.return = null;
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
                    mt(t, e), yt(e), n & 512 && (ze || l === null || qt(l, l.return)), n & 64 && Wt && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                    break;
                case 26:
                    var a = Dt;
                    if (mt(t, e), yt(e), n & 512 && (ze || l === null || qt(l, l.return)), n & 4) {
                        var r = l !== null ? l.memoizedState : null;
                        if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
                            e: {
                                n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                                t: switch(n){
                                    case "title":
                                        r = a.getElementsByTagName("title")[0], (!r || r[Wn] || r[Ie] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(n), a.head.insertBefore(r, a.querySelector("head > title"))), $e(r, n, l), r[Ie] = e, Qe(r), n = r;
                                        break e;
                                    case "link":
                                        var d = fh("link", "href", a).get(n + (l.href || ""));
                                        if (d) {
                                            for(var y = 0; y < d.length; y++)if (r = d[y], r.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && r.getAttribute("rel") === (l.rel == null ? null : l.rel) && r.getAttribute("title") === (l.title == null ? null : l.title) && r.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                d.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        r = a.createElement(n), $e(r, n, l), a.head.appendChild(r);
                                        break;
                                    case "meta":
                                        if (d = fh("meta", "content", a).get(n + (l.content || ""))) {
                                            for(y = 0; y < d.length; y++)if (r = d[y], r.getAttribute("content") === (l.content == null ? null : "" + l.content) && r.getAttribute("name") === (l.name == null ? null : l.name) && r.getAttribute("property") === (l.property == null ? null : l.property) && r.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && r.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                d.splice(y, 1);
                                                break t;
                                            }
                                        }
                                        r = a.createElement(n), $e(r, n, l), a.head.appendChild(r);
                                        break;
                                    default:
                                        throw Error(s(468, n));
                                }
                                r[Ie] = e, Qe(r), n = r;
                            }
                            e.stateNode = n;
                        } else dh(a, e.type, e.stateNode);
                        else e.stateNode = oh(a, n, e.memoizedProps);
                        else r !== n ? (r === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : r.count--, n === null ? dh(a, e.type, e.stateNode) : oh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && cc(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    mt(t, e), yt(e), n & 512 && (ze || l === null || qt(l, l.return)), l !== null && n & 4 && cc(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (mt(t, e), yt(e), n & 512 && (ze || l === null || qt(l, l.return)), e.flags & 32) {
                        a = e.stateNode;
                        try {
                            mn(a, "");
                        } catch (B) {
                            Re(e, e.return, B);
                        }
                    }
                    n & 4 && e.stateNode != null && (a = e.memoizedProps, cc(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (fc = !0);
                    break;
                case 6:
                    if (mt(t, e), yt(e), n & 4) {
                        if (e.stateNode === null) throw Error(s(162));
                        n = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = n;
                        } catch (B) {
                            Re(e, e.return, B);
                        }
                    }
                    break;
                case 3:
                    if (fi = null, a = Dt, Dt = si(t.containerInfo), mt(t, e), Dt = a, yt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Ya(t.containerInfo);
                    } catch (B) {
                        Re(e, e.return, B);
                    }
                    fc && (fc = !1, gd(e));
                    break;
                case 4:
                    n = Dt, Dt = si(e.stateNode.containerInfo), mt(t, e), yt(e), Dt = n;
                    break;
                case 12:
                    mt(t, e), yt(e);
                    break;
                case 13:
                    mt(t, e), yt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (gc = zt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, dc(e, n)));
                    break;
                case 22:
                    a = e.memoizedState !== null;
                    var S = l !== null && l.memoizedState !== null, M = Wt, U = ze;
                    if (Wt = M || a, ze = U || S, mt(t, e), ze = U, Wt = M, yt(e), n & 8192) e: for(t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || S || Wt || ze || Wl(e)), l = null, t = e;;){
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
                                    Re(S, S.return, B);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                S = t;
                                try {
                                    S.stateNode.nodeValue = a ? "" : S.memoizedProps;
                                } catch (B) {
                                    Re(S, S.return, B);
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
                    n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, dc(e, l))));
                    break;
                case 19:
                    mt(t, e), yt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, dc(e, n)));
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
                            var a = l.stateNode, r = sc(e);
                            Ju(e, r, a);
                            break;
                        case 5:
                            var d = l.stateNode;
                            l.flags & 32 && (mn(d, ""), l.flags &= -33);
                            var y = sc(e);
                            Ju(e, y, d);
                            break;
                        case 3:
                        case 4:
                            var S = l.stateNode.containerInfo, M = sc(e);
                            oc(e, M, S);
                            break;
                        default:
                            throw Error(s(161));
                    }
                } catch (U) {
                    Re(e, e.return, U);
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
                var n = t.alternate, a = e, r = t, d = r.flags;
                switch(r.tag){
                    case 0:
                    case 11:
                    case 15:
                        bl(a, r, l), Na(4, r);
                        break;
                    case 1:
                        if (bl(a, r, l), n = r, a = n.stateNode, typeof a.componentDidMount == "function") try {
                            a.componentDidMount();
                        } catch (M) {
                            Re(n, n.return, M);
                        }
                        if (n = r, a = n.updateQueue, a !== null) {
                            var y = n.stateNode;
                            try {
                                var S = a.shared.hiddenCallbacks;
                                if (S !== null) for(a.shared.hiddenCallbacks = null, a = 0; a < S.length; a++)Vo(S[a], y);
                            } catch (M) {
                                Re(n, n.return, M);
                            }
                        }
                        l && d & 64 && rd(r), xa(r, r.return);
                        break;
                    case 27:
                        fd(r);
                    case 26:
                    case 5:
                        bl(a, r, l), l && n === null && d & 4 && sd(r), xa(r, r.return);
                        break;
                    case 12:
                        bl(a, r, l);
                        break;
                    case 13:
                        bl(a, r, l), l && d & 4 && yd(a, r);
                        break;
                    case 22:
                        r.memoizedState === null && bl(a, r, l), xa(r, r.return);
                        break;
                    case 30:
                        break;
                    default:
                        bl(a, r, l);
                }
                t = t.sibling;
            }
        }
        function hc(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ha(l));
        }
        function pc(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ha(e));
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
                    jt(e, t, l, n), a & 2048 && Na(9, t);
                    break;
                case 1:
                    jt(e, t, l, n);
                    break;
                case 3:
                    jt(e, t, l, n), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ha(e)));
                    break;
                case 12:
                    if (a & 2048) {
                        jt(e, t, l, n), e = t.stateNode;
                        try {
                            var r = t.memoizedProps, d = r.id, y = r.onPostCommit;
                            typeof y == "function" && y(d, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (S) {
                            Re(t, t.return, S);
                        }
                    } else jt(e, t, l, n);
                    break;
                case 13:
                    jt(e, t, l, n);
                    break;
                case 23:
                    break;
                case 22:
                    r = t.stateNode, d = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? jt(e, t, l, n) : Ma(e, t) : r._visibility & 2 ? jt(e, t, l, n) : (r._visibility |= 2, zn(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && hc(d, t);
                    break;
                case 24:
                    jt(e, t, l, n), a & 2048 && pc(t.alternate, t);
                    break;
                default:
                    jt(e, t, l, n);
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
                        var U = d.stateNode;
                        d.memoizedState !== null ? U._visibility & 2 ? zn(r, d, y, S, a) : Ma(r, d) : (U._visibility |= 2, zn(r, d, y, S, a)), a && M & 2048 && hc(d.alternate, d);
                        break;
                    case 24:
                        zn(r, d, y, S, a), a && M & 2048 && pc(d.alternate, d);
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
                        Ma(l, n), a & 2048 && hc(n.alternate, n);
                        break;
                    case 24:
                        Ma(l, n), a & 2048 && pc(n.alternate, n);
                        break;
                    default:
                        Ma(l, n);
                }
                t = t.sibling;
            }
        }
        var Ca = 8192;
        function Un(e) {
            if (e.subtreeFlags & Ca) for(e = e.child; e !== null;)Sd(e), e = e.sibling;
        }
        function Sd(e) {
            switch(e.tag){
                case 26:
                    Un(e), e.flags & Ca && e.memoizedState !== null && O1(Dt, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    Un(e);
                    break;
                case 3:
                case 4:
                    var t = Dt;
                    Dt = si(e.stateNode.containerInfo), Un(e), Dt = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ca, Ca = 16777216, Un(e), Ca = t) : Un(e));
                    break;
                default:
                    Un(e);
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
                    Ge = n, Td(n, e);
                }
                Ed(e);
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
        var Q0 = {
            getCacheForType: function(e) {
                var t = et(je), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, K0 = typeof WeakMap == "function" ? WeakMap : Map, ve = 0, Ae = null, fe = null, he = 0, ge = 0, vt = null, Sl = !1, Pn = !1, mc = !1, el = 0, Be = 0, El = 0, Il = 0, yc = 0, Nt = 0, qn = 0, Ba = null, ct = null, vc = !1, gc = 0, Wu = 1 / 0, Iu = null, _l = null, Ze = 0, Tl = null, jn = null, Hn = 0, bc = 0, Sc = null, Rd = null, wa = 0, Ec = null;
        function gt() {
            if ((ve & 2) !== 0 && he !== 0) return he & -he;
            if (P.T !== null) {
                var e = On;
                return e !== 0 ? e : xc();
            }
            return js();
        }
        function Ad() {
            Nt === 0 && (Nt = (he & 536870912) === 0 || ye ? zs() : 536870912);
            var e = Ot.current;
            return e !== null && (e.flags |= 32), Nt;
        }
        function bt(e, t, l) {
            (e === Ae && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) && (kn(e, 0), Rl(e, he, Nt, !1)), Fn(e, l), ((ve & 2) === 0 || e !== Ae) && (e === Ae && ((ve & 2) === 0 && (Il |= l), Be === 4 && Rl(e, he, Nt, !1)), Ht(e));
        }
        function Od(e, t, l) {
            if ((ve & 6) !== 0) throw Error(s(327));
            var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Jn(e, t), a = n ? V0(e, t) : Rc(e, t, !0), r = n;
            do {
                if (a === 0) {
                    Pn && !n && Rl(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, r && !G0(l)) {
                        a = Rc(e, t, !1), r = !1;
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
                                if (S && (kn(y, d).flags |= 256), d = Rc(y, d, !1), d !== 2) {
                                    if (mc && !S) {
                                        y.errorRecoveryDisabledLanes |= r, Il |= r, a = 4;
                                        break e;
                                    }
                                    r = ct, ct = a, r !== null && (ct === null ? ct = r : ct.push.apply(ct, r));
                                }
                                a = d;
                            }
                            if (r = !1, a !== 2) continue;
                        }
                    }
                    if (a === 1) {
                        kn(e, 0), Rl(e, t, 0, !0);
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
                                Rl(n, t, Nt, !Sl);
                                break e;
                            case 2:
                                ct = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(s(329));
                        }
                        if ((t & 62914560) === t && (a = gc + 300 - zt(), 10 < a)) {
                            if (Rl(n, t, Nt, !Sl), ou(n, 0, !0) !== 0) break e;
                            n.timeoutHandle = th(Nd.bind(null, n, l, ct, Iu, vc, t, Nt, Il, qn, Sl, r, 2, -0, 0), a);
                            break e;
                        }
                        Nd(n, l, ct, Iu, vc, t, Nt, Il, qn, Sl, r, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            Ht(e);
        }
        function Nd(e, t, l, n, a, r, d, y, S, M, U, j, D, B) {
            if (e.timeoutHandle = -1, j = t.subtreeFlags, (j & 8192 || (j & 16785408) === 16785408) && (ka = {
                stylesheets: null,
                count: 0,
                unsuspend: A1
            }, Sd(t), j = N1(), j !== null)) {
                e.cancelPendingCommit = j(zd.bind(null, e, t, r, l, n, a, d, y, S, U, 1, D, B)), Rl(e, r, d, !M);
                return;
            }
            zd(e, t, r, l, n, a, d, y, S);
        }
        function G0(e) {
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
        function Rl(e, t, l, n) {
            t &= ~yc, t &= ~Il, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
            for(var a = t; 0 < a;){
                var r = 31 - dt(a), d = 1 << r;
                n[r] = -1, a &= ~d;
            }
            l !== 0 && Ps(e, l, t);
        }
        function ei() {
            return (ve & 6) === 0 ? (za(0), !1) : !0;
        }
        function _c() {
            if (fe !== null) {
                if (ge === 0) var e = fe.return;
                else e = fe, Vt = Xl = null, Hr(e), Bn = null, Ra = 0, e = fe;
                for(; e !== null;)id(e.alternate, e), e = e.return;
                fe = null;
            }
        }
        function kn(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, c1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), _c(), Ae = e, fe = l = Kt(e.current, null), he = t, ge = 0, vt = null, Sl = !1, Pn = Jn(e, t), mc = !1, qn = Nt = yc = Il = El = Be = 0, ct = Ba = null, vc = !1, (t & 8) !== 0 && (t |= t & 32);
            var n = e.entangledLanes;
            if (n !== 0) for(e = e.entanglements, n &= t; 0 < n;){
                var a = 31 - dt(n), r = 1 << a;
                t |= e[a], n &= ~r;
            }
            return el = t, _u(), l;
        }
        function xd(e, t) {
            se = null, P.H = Lu, t === ma || t === Du ? (t = Go(), ge = 3) : t === Lo ? (t = Go(), ge = 4) : ge = t === Vf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, vt = t, fe === null && (Be = 1, Vu(e, _t(t, e.current)));
        }
        function Md() {
            var e = P.H;
            return P.H = Lu, e === null ? Lu : e;
        }
        function Cd() {
            var e = P.A;
            return P.A = Q0, e;
        }
        function Tc() {
            Be = 4, Sl || (he & 4194048) !== he && Ot.current !== null || (Pn = !0), (El & 134217727) === 0 && (Il & 134217727) === 0 || Ae === null || Rl(Ae, he, Nt, !1);
        }
        function Rc(e, t, l) {
            var n = ve;
            ve |= 2;
            var a = Md(), r = Cd();
            (Ae !== e || he !== t) && (Iu = null, kn(e, t)), t = !1;
            var d = Be;
            e: do try {
                if (ge !== 0 && fe !== null) {
                    var y = fe, S = vt;
                    switch(ge){
                        case 8:
                            _c(), d = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ot.current === null && (t = !0);
                            var M = ge;
                            if (ge = 0, vt = null, Ln(e, y, S, M), l && Pn) {
                                d = 0;
                                break e;
                            }
                            break;
                        default:
                            M = ge, ge = 0, vt = null, Ln(e, y, S, M);
                    }
                }
                Y0(), d = Be;
                break;
            } catch (U) {
                xd(e, U);
            }
            while (!0);
            return t && e.shellSuspendCounter++, Vt = Xl = null, ve = n, P.H = a, P.A = r, fe === null && (Ae = null, he = 0, _u()), d;
        }
        function Y0() {
            for(; fe !== null;)Dd(fe);
        }
        function V0(e, t) {
            var l = ve;
            ve |= 2;
            var n = Md(), a = Cd();
            Ae !== e || he !== t ? (Iu = null, Wu = zt() + 500, kn(e, t)) : Pn = Jn(e, t);
            e: do try {
                if (ge !== 0 && fe !== null) {
                    t = fe;
                    var r = vt;
                    t: switch(ge){
                        case 1:
                            ge = 0, vt = null, Ln(e, t, r, 1);
                            break;
                        case 2:
                        case 9:
                            if (Qo(r)) {
                                ge = 0, vt = null, Bd(t);
                                break;
                            }
                            t = function() {
                                ge !== 2 && ge !== 9 || Ae !== e || (ge = 7), Ht(e);
                            }, r.then(t, t);
                            break e;
                        case 3:
                            ge = 7;
                            break e;
                        case 4:
                            ge = 5;
                            break e;
                        case 7:
                            Qo(r) ? (ge = 0, vt = null, Bd(t)) : (ge = 0, vt = null, Ln(e, t, r, 7));
                            break;
                        case 5:
                            var d = null;
                            switch(fe.tag){
                                case 26:
                                    d = fe.memoizedState;
                                case 5:
                                case 27:
                                    var y = fe;
                                    if (!d || hh(d)) {
                                        ge = 0, vt = null;
                                        var S = y.sibling;
                                        if (S !== null) fe = S;
                                        else {
                                            var M = y.return;
                                            M !== null ? (fe = M, ti(M)) : fe = null;
                                        }
                                        break t;
                                    }
                            }
                            ge = 0, vt = null, Ln(e, t, r, 5);
                            break;
                        case 6:
                            ge = 0, vt = null, Ln(e, t, r, 6);
                            break;
                        case 8:
                            _c(), Be = 6;
                            break e;
                        default:
                            throw Error(s(462));
                    }
                }
                X0();
                break;
            } catch (U) {
                xd(e, U);
            }
            while (!0);
            return Vt = Xl = null, P.H = n, P.A = a, ve = l, fe !== null ? 0 : (Ae = null, he = 0, _u(), Be);
        }
        function X0() {
            for(; fe !== null && !mm();)Dd(fe);
        }
        function Dd(e) {
            var t = ad(e.alternate, e, el);
            e.memoizedProps = e.pendingProps, t === null ? ti(e) : fe = t;
        }
        function Bd(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Wf(l, t, t.pendingProps, t.type, void 0, he);
                    break;
                case 11:
                    t = Wf(l, t, t.pendingProps, t.type.render, t.ref, he);
                    break;
                case 5:
                    Hr(t);
                default:
                    id(l, t), t = fe = Bo(t, el), t = ad(l, t, el);
            }
            e.memoizedProps = e.pendingProps, t === null ? ti(e) : fe = t;
        }
        function Ln(e, t, l, n) {
            Vt = Xl = null, Hr(t), Bn = null, Ra = 0;
            var a = t.return;
            try {
                if (P0(e, a, t, l, he)) {
                    Be = 1, Vu(e, _t(l, e.current)), fe = null;
                    return;
                }
            } catch (r) {
                if (a !== null) throw fe = a, r;
                Be = 1, Vu(e, _t(l, e.current)), fe = null;
                return;
            }
            t.flags & 32768 ? (ye || n === 1 ? e = !0 : Pn || (he & 536870912) !== 0 ? e = !1 : (Sl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ot.current, n !== null && n.tag === 13 && (n.flags |= 16384))), wd(t, e)) : ti(t);
        }
        function ti(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    wd(t, Sl);
                    return;
                }
                e = t.return;
                var l = j0(t.alternate, t, el);
                if (l !== null) {
                    fe = l;
                    return;
                }
                if (t = t.sibling, t !== null) {
                    fe = t;
                    return;
                }
                fe = t = e;
            }while (t !== null);
            Be === 0 && (Be = 5);
        }
        function wd(e, t) {
            do {
                var l = H0(e.alternate, e);
                if (l !== null) {
                    l.flags &= 32767, fe = l;
                    return;
                }
                if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
                    fe = e;
                    return;
                }
                fe = e = l;
            }while (e !== null);
            Be = 6, fe = null;
        }
        function zd(e, t, l, n, a, r, d, y, S) {
            e.cancelPendingCommit = null;
            do li();
            while (Ze !== 0);
            if ((ve & 6) !== 0) throw Error(s(327));
            if (t !== null) {
                if (t === e.current) throw Error(s(177));
                if (r = t.lanes | t.childLanes, r |= pr, Am(e, l, r, d, y, S), e === Ae && (fe = Ae = null, he = 0), jn = t, Tl = e, Hn = l, bc = r, Sc = a, Rd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, F0(ru, function() {
                    return Hd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                    n = P.T, P.T = null, a = X.p, X.p = 2, d = ve, ve |= 4;
                    try {
                        k0(e, t, l);
                    } finally{
                        ve = d, X.p = a, P.T = n;
                    }
                }
                Ze = 1, Ud(), Pd(), qd();
            }
        }
        function Ud() {
            if (Ze === 1) {
                Ze = 0;
                var e = Tl, t = jn, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = P.T, P.T = null;
                    var n = X.p;
                    X.p = 2;
                    var a = ve;
                    ve |= 4;
                    try {
                        vd(t, e);
                        var r = Pc, d = _o(e.containerInfo), y = r.focusedElem, S = r.selectionRange;
                        if (d !== y && y && y.ownerDocument && Eo(y.ownerDocument.documentElement, y)) {
                            if (S !== null && sr(y)) {
                                var M = S.start, U = S.end;
                                if (U === void 0 && (U = M), "selectionStart" in y) y.selectionStart = M, y.selectionEnd = Math.min(U, y.value.length);
                                else {
                                    var j = y.ownerDocument || document, D = j && j.defaultView || window;
                                    if (D.getSelection) {
                                        var B = D.getSelection(), ae = y.textContent.length, te = Math.min(S.start, ae), Ee = S.end === void 0 ? te : Math.min(S.end, ae);
                                        !B.extend && te > Ee && (d = Ee, Ee = te, te = d);
                                        var O = So(y, te), R = So(y, Ee);
                                        if (O && R && (B.rangeCount !== 1 || B.anchorNode !== O.node || B.anchorOffset !== O.offset || B.focusNode !== R.node || B.focusOffset !== R.offset)) {
                                            var x = j.createRange();
                                            x.setStart(O.node, O.offset), B.removeAllRanges(), te > Ee ? (B.addRange(x), B.extend(R.node, R.offset)) : (x.setEnd(R.node, R.offset), B.addRange(x));
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
                        pi = !!Uc, Pc = Uc = null;
                    } finally{
                        ve = a, X.p = n, P.T = l;
                    }
                }
                e.current = t, Ze = 2;
            }
        }
        function Pd() {
            if (Ze === 2) {
                Ze = 0;
                var e = Tl, t = jn, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = P.T, P.T = null;
                    var n = X.p;
                    X.p = 2;
                    var a = ve;
                    ve |= 4;
                    try {
                        hd(e, t.alternate, t);
                    } finally{
                        ve = a, X.p = n, P.T = l;
                    }
                }
                Ze = 3;
            }
        }
        function qd() {
            if (Ze === 4 || Ze === 3) {
                Ze = 0, ym();
                var e = Tl, t = jn, l = Hn, n = Rd;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ze = 5 : (Ze = 0, jn = Tl = null, jd(e, e.pendingLanes));
                var a = e.pendingLanes;
                if (a === 0 && (_l = null), Qi(l), t = t.stateNode, ft && typeof ft.onCommitFiberRoot == "function") try {
                    ft.onCommitFiberRoot($n, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (n !== null) {
                    t = P.T, a = X.p, X.p = 2, P.T = null;
                    try {
                        for(var r = e.onRecoverableError, d = 0; d < n.length; d++){
                            var y = n[d];
                            r(y.value, {
                                componentStack: y.stack
                            });
                        }
                    } finally{
                        P.T = t, X.p = a;
                    }
                }
                (Hn & 3) !== 0 && li(), Ht(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === Ec ? wa++ : (wa = 0, Ec = e) : wa = 0, za(0);
            }
        }
        function jd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ha(t)));
        }
        function li(e) {
            return Ud(), Pd(), qd(), Hd();
        }
        function Hd() {
            if (Ze !== 5) return !1;
            var e = Tl, t = bc;
            bc = 0;
            var l = Qi(Hn), n = P.T, a = X.p;
            try {
                X.p = 32 > l ? 32 : l, P.T = null, l = Sc, Sc = null;
                var r = Tl, d = Hn;
                if (Ze = 0, jn = Tl = null, Hn = 0, (ve & 6) !== 0) throw Error(s(331));
                var y = ve;
                if (ve |= 4, _d(r.current), bd(r, r.current, d, l), ve = y, za(0, !1), ft && typeof ft.onPostCommitFiberRoot == "function") try {
                    ft.onPostCommitFiberRoot($n, r);
                } catch  {}
                return !0;
            } finally{
                X.p = a, P.T = n, jd(e, t);
            }
        }
        function kd(e, t, l) {
            t = _t(l, t), t = Ir(e.stateNode, t, 2), e = hl(e, t, 2), e !== null && (Fn(e, 2), Ht(e));
        }
        function Re(e, t, l) {
            if (e.tag === 3) kd(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    kd(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (_l === null || !_l.has(n))) {
                        e = _t(l, e), l = Gf(2), n = hl(t, l, 2), n !== null && (Yf(l, n, t, e), Fn(n, 2), Ht(n));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Ac(e, t, l) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new K0;
                var a = new Set;
                n.set(t, a);
            } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
            a.has(l) || (mc = !0, a.add(l), e = Z0.bind(null, e, t, l), t.then(e, e));
        }
        function Z0(e, t, l) {
            var n = e.pingCache;
            n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ae === e && (he & l) === l && (Be === 4 || Be === 3 && (he & 62914560) === he && 300 > zt() - gc ? (ve & 2) === 0 && kn(e, 0) : yc |= l, qn === he && (qn = 0)), Ht(e);
        }
        function Ld(e, t) {
            t === 0 && (t = Us()), e = _n(e, t), e !== null && (Fn(e, t), Ht(e));
        }
        function $0(e) {
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
                    throw Error(s(314));
            }
            n !== null && n.delete(t), Ld(e, l);
        }
        function F0(e, t) {
            return ji(e, t);
        }
        var ni = null, Qn = null, Oc = !1, ai = !1, Nc = !1, en = 0;
        function Ht(e) {
            e !== Qn && e.next === null && (Qn === null ? ni = Qn = e : Qn = Qn.next = e), ai = !0, Oc || (Oc = !0, I0());
        }
        function za(e, t) {
            if (!Nc && ai) {
                Nc = !0;
                do for(var l = !1, n = ni; n !== null;){
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var r = 0;
                        else {
                            var d = n.suspendedLanes, y = n.pingedLanes;
                            r = (1 << 31 - dt(42 | e) + 1) - 1, r &= a & ~(d & ~y), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
                        }
                        r !== 0 && (l = !0, Yd(n, r));
                    } else r = he, r = ou(n, n === Ae ? r : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (r & 3) === 0 || Jn(n, r) || (l = !0, Yd(n, r));
                    n = n.next;
                }
                while (l);
                Nc = !1;
            }
        }
        function W0() {
            Qd();
        }
        function Qd() {
            ai = Oc = !1;
            var e = 0;
            en !== 0 && (r1() && (e = en), en = 0);
            for(var t = zt(), l = null, n = ni; n !== null;){
                var a = n.next, r = Kd(n, t);
                r === 0 ? (n.next = null, l === null ? ni = a : l.next = a, a === null && (Qn = l)) : (l = n, (e !== 0 || (r & 3) !== 0) && (ai = !0)), n = a;
            }
            za(e);
        }
        function Kd(e, t) {
            for(var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r;){
                var d = 31 - dt(r), y = 1 << d, S = a[d];
                S === -1 ? ((y & l) === 0 || (y & n) !== 0) && (a[d] = Rm(y, t)) : S <= t && (e.expiredLanes |= y), r &= ~y;
            }
            if (t = Ae, l = he, l = ou(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && Hi(n), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || Jn(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(n !== null && Hi(n), Qi(l)){
                    case 2:
                    case 8:
                        l = Bs;
                        break;
                    case 32:
                        l = ru;
                        break;
                    case 268435456:
                        l = ws;
                        break;
                    default:
                        l = ru;
                }
                return n = Gd.bind(null, e), l = ji(l, n), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return n !== null && n !== null && Hi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Gd(e, t) {
            if (Ze !== 0 && Ze !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (li() && e.callbackNode !== l) return null;
            var n = he;
            return n = ou(e, e === Ae ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (Od(e, n, t), Kd(e, zt()), e.callbackNode != null && e.callbackNode === l ? Gd.bind(null, e) : null);
        }
        function Yd(e, t) {
            if (li()) return null;
            Od(e, t, !0);
        }
        function I0() {
            s1(function() {
                (ve & 6) !== 0 ? ji(Ds, W0) : Qd();
            });
        }
        function xc() {
            return en === 0 && (en = zs()), en;
        }
        function Vd(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mu("" + e);
        }
        function Xd(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function e1(e, t, l, n, a) {
            if (t === "submit" && l && l.stateNode === a) {
                var r = Vd((a[at] || null).action), d = n.submitter;
                d && (t = (t = d[at] || null) ? Vd(t.formAction) : d.getAttribute("formAction"), t !== null && (r = t, d = null));
                var y = new bu("action", "action", null, n, a);
                e.push({
                    event: y,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (en !== 0) {
                                        var S = d ? Xd(a, d) : new FormData(a);
                                        Zr(l, {
                                            pending: !0,
                                            data: S,
                                            method: a.method,
                                            action: r
                                        }, null, S);
                                    }
                                } else typeof r == "function" && (y.preventDefault(), S = d ? Xd(a, d) : new FormData(a), Zr(l, {
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
        for(var Mc = 0; Mc < hr.length; Mc++){
            var Cc = hr[Mc], t1 = Cc.toLowerCase(), l1 = Cc[0].toUpperCase() + Cc.slice(1);
            Ct(t1, "on" + l1);
        }
        Ct(Ao, "onAnimationEnd"), Ct(Oo, "onAnimationIteration"), Ct(No, "onAnimationStart"), Ct("dblclick", "onDoubleClick"), Ct("focusin", "onFocus"), Ct("focusout", "onBlur"), Ct(b0, "onTransitionRun"), Ct(S0, "onTransitionStart"), Ct(E0, "onTransitionCancel"), Ct(xo, "onTransitionEnd"), dn("onMouseEnter", [
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
        var Ua = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), n1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ua));
        function Zd(e, t) {
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
                        } catch (U) {
                            Yu(U);
                        }
                        a.currentTarget = null, r = S;
                    }
                    else for(d = 0; d < n.length; d++){
                        if (y = n[d], S = y.instance, M = y.currentTarget, y = y.listener, S !== r && a.isPropagationStopped()) break e;
                        r = y, a.currentTarget = M;
                        try {
                            r(a);
                        } catch (U) {
                            Yu(U);
                        }
                        a.currentTarget = null, r = S;
                    }
                }
            }
        }
        function de(e, t) {
            var l = t[Ki];
            l === void 0 && (l = t[Ki] = new Set);
            var n = e + "__bubble";
            l.has(n) || ($d(t, e, 2, !1), l.add(n));
        }
        function Dc(e, t, l) {
            var n = 0;
            t && (n |= 4), $d(l, e, n, t);
        }
        var ui = "_reactListening" + Math.random().toString(36).slice(2);
        function Bc(e) {
            if (!e[ui]) {
                e[ui] = !0, ks.forEach(function(l) {
                    l !== "selectionchange" && (n1.has(l) || Dc(l, !1, e), Dc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[ui] || (t[ui] = !0, Dc("selectionchange", !1, t));
            }
        }
        function $d(e, t, l, n) {
            switch(bh(t)){
                case 2:
                    var a = C1;
                    break;
                case 8:
                    a = D1;
                    break;
                default:
                    a = Vc;
            }
            l = a.bind(null, t, l, e), a = void 0, !er || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
                capture: !0,
                passive: a
            }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
                passive: a
            }) : e.addEventListener(t, l, !1);
        }
        function wc(e, t, l, n, a) {
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
            eo(function() {
                var M = r, U = Wi(l), j = [];
                e: {
                    var D = Mo.get(e);
                    if (D !== void 0) {
                        var B = bu, ae = e;
                        switch(e){
                            case "keypress":
                                if (vu(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                B = Fm;
                                break;
                            case "focusin":
                                ae = "focus", B = ar;
                                break;
                            case "focusout":
                                ae = "blur", B = ar;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                B = ar;
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
                                B = e0;
                                break;
                            case Ao:
                            case Oo:
                            case No:
                                B = Qm;
                                break;
                            case xo:
                                B = l0;
                                break;
                            case "scroll":
                            case "scrollend":
                                B = qm;
                                break;
                            case "wheel":
                                B = a0;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                B = Gm;
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
                                B = i0;
                        }
                        var te = (t & 4) !== 0, Ee = !te && (e === "scroll" || e === "scrollend"), O = te ? D !== null ? D + "Capture" : null : D;
                        te = [];
                        for(var R = M, x; R !== null;){
                            var q = R;
                            if (x = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || x === null || O === null || (q = ea(R, O), q != null && te.push(Pa(R, q, x))), Ee) break;
                            R = R.return;
                        }
                        0 < te.length && (D = new B(D, ae, null, l, U), j.push({
                            event: D,
                            listeners: te
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (D = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", D && l !== Fi && (ae = l.relatedTarget || l.fromElement) && (sn(ae) || ae[cn])) break e;
                        if ((B || D) && (D = U.window === U ? U : (D = U.ownerDocument) ? D.defaultView || D.parentWindow : window, B ? (ae = l.relatedTarget || l.toElement, B = M, ae = ae ? sn(ae) : null, ae !== null && (Ee = f(ae), te = ae.tag, ae !== Ee || te !== 5 && te !== 27 && te !== 6) && (ae = null)) : (B = null, ae = M), B !== ae)) {
                            if (te = no, q = "onMouseLeave", O = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (te = uo, q = "onPointerLeave", O = "onPointerEnter", R = "pointer"), Ee = B == null ? D : In(B), x = ae == null ? D : In(ae), D = new te(q, R + "leave", B, l, U), D.target = Ee, D.relatedTarget = x, q = null, sn(U) === M && (te = new te(O, R + "enter", ae, l, U), te.target = x, te.relatedTarget = Ee, q = te), Ee = q, B && ae) t: {
                                for(te = B, O = ae, R = 0, x = te; x; x = Kn(x))R++;
                                for(x = 0, q = O; q; q = Kn(q))x++;
                                for(; 0 < R - x;)te = Kn(te), R--;
                                for(; 0 < x - R;)O = Kn(O), x--;
                                for(; R--;){
                                    if (te === O || O !== null && te === O.alternate) break t;
                                    te = Kn(te), O = Kn(O);
                                }
                                te = null;
                            }
                            else te = null;
                            B !== null && Jd(j, D, B, te, !1), ae !== null && Ee !== null && Jd(j, Ee, ae, te, !0);
                        }
                    }
                    e: {
                        if (D = M ? In(M) : window, B = D.nodeName && D.nodeName.toLowerCase(), B === "select" || B === "input" && D.type === "file") var $ = po;
                        else if (fo(D)) if (mo) $ = y0;
                        else {
                            $ = p0;
                            var oe = h0;
                        }
                        else B = D.nodeName, !B || B.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? M && Ji(M.elementType) && ($ = po) : $ = m0;
                        if ($ && ($ = $(e, M))) {
                            ho(j, $, l, U);
                            break e;
                        }
                        oe && oe(e, D, M), e === "focusout" && M && D.type === "number" && M.memoizedProps.value != null && $i(D, "number", D.value);
                    }
                    switch(oe = M ? In(M) : window, e){
                        case "focusin":
                            (fo(oe) || oe.contentEditable === "true") && (bn = oe, or = M, ca = null);
                            break;
                        case "focusout":
                            ca = or = bn = null;
                            break;
                        case "mousedown":
                            fr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            fr = !1, To(j, l, U);
                            break;
                        case "selectionchange":
                            if (g0) break;
                        case "keydown":
                        case "keyup":
                            To(j, l, U);
                    }
                    var W;
                    if (ir) e: {
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
                    else gn ? so(e, l) && (le = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (le = "onCompositionStart");
                    le && (io && l.locale !== "ko" && (gn || le !== "onCompositionStart" ? le === "onCompositionEnd" && gn && (W = to()) : (sl = U, tr = "value" in sl ? sl.value : sl.textContent, gn = !0)), oe = ii(M, le), 0 < oe.length && (le = new ao(le, e, null, l, U), j.push({
                        event: le,
                        listeners: oe
                    }), W ? le.data = W : (W = oo(l), W !== null && (le.data = W)))), (W = c0 ? s0(e, l) : o0(e, l)) && (le = ii(M, "onBeforeInput"), 0 < le.length && (oe = new ao("onBeforeInput", "beforeinput", null, l, U), j.push({
                        event: oe,
                        listeners: le
                    }), oe.data = W)), e1(j, e, M, l, U);
                }
                Zd(j, t);
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
        function Kn(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function Jd(e, t, l, n, a) {
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
        var a1 = /\r\n?/g, u1 = /\u0000|\uFFFD/g;
        function Fd(e) {
            return (typeof e == "string" ? e : "" + e).replace(a1, `
`).replace(u1, "");
        }
        function Wd(e, t) {
            return t = Fd(t), Fd(e) === t;
        }
        function ri() {}
        function Se(e, t, l, n, a, r) {
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
                    Ws(e, n, r);
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
                    } else typeof r == "function" && (l === "formAction" ? (t !== "input" && Se(e, t, "name", a.name, a, null), Se(e, t, "formEncType", a.formEncType, a, null), Se(e, t, "formMethod", a.formMethod, a, null), Se(e, t, "formTarget", a.formTarget, a, null)) : (Se(e, t, "encType", a.encType, a, null), Se(e, t, "method", a.method, a, null), Se(e, t, "target", a.target, a, null)));
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
                    de("beforetoggle", e), de("toggle", e), fu(e, "popover", n);
                    break;
                case "xlinkActuate":
                    Lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
                    break;
                case "xlinkArcrole":
                    Lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
                    break;
                case "xlinkRole":
                    Lt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
                    break;
                case "xlinkShow":
                    Lt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
                    break;
                case "xlinkTitle":
                    Lt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
                    break;
                case "xlinkType":
                    Lt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
                    break;
                case "xmlBase":
                    Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
                    break;
                case "xmlLang":
                    Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
                    break;
                case "xmlSpace":
                    Lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
                    break;
                case "is":
                    fu(e, "is", n);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Um.get(l) || l, fu(e, l, n));
            }
        }
        function zc(e, t, l, n, a, r) {
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
                    if (!Ls.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), r = e[at] || null, r = r != null ? r[l] : null, typeof r == "function" && e.removeEventListener(t, r, a), typeof n == "function")) {
                            typeof r != "function" && r !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
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
                                Se(e, t, r, d, l, null);
                        }
                    }
                    a && Se(e, t, "srcSet", l.srcSet, l, null), n && Se(e, t, "src", l.src, l, null);
                    return;
                case "input":
                    de("invalid", e);
                    var y = r = d = a = null, S = null, M = null;
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
                                S = U;
                                break;
                            case "defaultChecked":
                                M = U;
                                break;
                            case "value":
                                r = U;
                                break;
                            case "defaultValue":
                                y = U;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (U != null) throw Error(s(137, t));
                                break;
                            default:
                                Se(e, t, n, U, l, null);
                        }
                    }
                    Zs(e, r, y, S, M, d, a, !1), hu(e);
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
                            Se(e, t, a, y, l, null);
                    }
                    t = r, l = d, e.multiple = !!n, t != null ? pn(e, !!n, t, !1) : l != null && pn(e, !!n, l, !0);
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
                            if (y != null) throw Error(s(91));
                            break;
                        default:
                            Se(e, t, d, y, l, null);
                    }
                    Js(e, n, a, r), hu(e);
                    return;
                case "option":
                    for(S in l)if (l.hasOwnProperty(S) && (n = l[S], n != null)) switch(S){
                        case "selected":
                            e.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default:
                            Se(e, t, S, n, l, null);
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
                            throw Error(s(137, t));
                        default:
                            Se(e, t, M, n, l, null);
                    }
                    return;
                default:
                    if (Ji(t)) {
                        for(U in l)l.hasOwnProperty(U) && (n = l[U], n !== void 0 && zc(e, t, U, n, l, void 0));
                        return;
                    }
            }
            for(y in l)l.hasOwnProperty(y) && (n = l[y], n != null && Se(e, t, y, n, l, null));
        }
        function i1(e, t, l, n) {
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
                    var a = null, r = null, d = null, y = null, S = null, M = null, U = null;
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
                                n.hasOwnProperty(B) || Se(e, t, B, null, n, j);
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
                                if (B != null) throw Error(s(137, t));
                                break;
                            default:
                                B !== j && Se(e, t, D, B, n, j);
                        }
                    }
                    Zi(e, d, y, S, M, U, r, a);
                    return;
                case "select":
                    B = d = y = D = null;
                    for(r in l)if (S = l[r], l.hasOwnProperty(r) && S != null) switch(r){
                        case "value":
                            break;
                        case "multiple":
                            B = S;
                        default:
                            n.hasOwnProperty(r) || Se(e, t, r, null, n, S);
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
                            r !== S && Se(e, t, a, r, n, S);
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
                            Se(e, t, y, null, n, a);
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
                            a !== r && Se(e, t, d, a, n, r);
                    }
                    $s(e, D, B);
                    return;
                case "option":
                    for(var ae in l)if (D = l[ae], l.hasOwnProperty(ae) && D != null && !n.hasOwnProperty(ae)) switch(ae){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Se(e, t, ae, null, n, D);
                    }
                    for(S in n)if (D = n[S], B = l[S], n.hasOwnProperty(S) && D !== B && (D != null || B != null)) switch(S){
                        case "selected":
                            e.selected = D && typeof D != "function" && typeof D != "symbol";
                            break;
                        default:
                            Se(e, t, S, D, n, B);
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
                    for(var te in l)D = l[te], l.hasOwnProperty(te) && D != null && !n.hasOwnProperty(te) && Se(e, t, te, null, n, D);
                    for(M in n)if (D = n[M], B = l[M], n.hasOwnProperty(M) && D !== B && (D != null || B != null)) switch(M){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (D != null) throw Error(s(137, t));
                            break;
                        default:
                            Se(e, t, M, D, n, B);
                    }
                    return;
                default:
                    if (Ji(t)) {
                        for(var Ee in l)D = l[Ee], l.hasOwnProperty(Ee) && D !== void 0 && !n.hasOwnProperty(Ee) && zc(e, t, Ee, void 0, n, D);
                        for(U in n)D = n[U], B = l[U], !n.hasOwnProperty(U) || D === B || D === void 0 && B === void 0 || zc(e, t, U, D, n, B);
                        return;
                    }
            }
            for(var O in l)D = l[O], l.hasOwnProperty(O) && D != null && !n.hasOwnProperty(O) && Se(e, t, O, null, n, D);
            for(j in n)D = n[j], B = l[j], !n.hasOwnProperty(j) || D === B || D == null && B == null || Se(e, t, j, D, n, B);
        }
        var Uc = null, Pc = null;
        function ci(e) {
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
        function qc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var jc = null;
        function r1() {
            var e = window.event;
            return e && e.type === "popstate" ? e === jc ? !1 : (jc = e, !0) : (jc = null, !1);
        }
        var th = typeof setTimeout == "function" ? setTimeout : void 0, c1 = typeof clearTimeout == "function" ? clearTimeout : void 0, lh = typeof Promise == "function" ? Promise : void 0, s1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof lh < "u" ? function(e) {
            return lh.resolve(null).then(e).catch(o1);
        } : th;
        function o1(e) {
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
        function f1(e, t, l, n) {
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
                if (e = Bt(e.nextSibling), e === null) break;
            }
            return null;
        }
        function d1(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
            return e;
        }
        function kc(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function h1(e, t) {
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
            switch(t = ci(l), e){
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
        var xt = new Map, ih = new Set;
        function si(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var tl = X.d;
        X.d = {
            f: p1,
            r: m1,
            D: y1,
            C: v1,
            L: g1,
            m: b1,
            X: E1,
            S: S1,
            M: _1
        };
        function p1() {
            var e = tl.f(), t = ei();
            return e || t;
        }
        function m1(e) {
            var t = on(e);
            t !== null && t.tag === 5 && t.type === "form" ? Of(t) : tl.r(e);
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
                }, n.querySelector(a) === null && (t = n.createElement("link"), $e(t, "link", e), Qe(t), n.head.appendChild(t)));
            }
        }
        function y1(e) {
            tl.D(e), rh("dns-prefetch", e, null);
        }
        function v1(e, t) {
            tl.C(e, t), rh("preconnect", e, t);
        }
        function g1(e, t, l) {
            tl.L(e, t, l);
            var n = Gn;
            if (n && e && t) {
                var a = 'link[rel="preload"][as="' + Et(t) + '"]';
                t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Et(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Et(l.imageSizes) + '"]')) : a += '[href="' + Et(e) + '"]';
                var r = a;
                switch(t){
                    case "style":
                        r = Yn(e);
                        break;
                    case "script":
                        r = Vn(e);
                }
                xt.has(r) || (e = g({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), xt.set(r, e), n.querySelector(a) !== null || t === "style" && n.querySelector(ja(r)) || t === "script" && n.querySelector(Ha(r)) || (t = n.createElement("link"), $e(t, "link", e), Qe(t), n.head.appendChild(t)));
            }
        }
        function b1(e, t) {
            tl.m(e, t);
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
                        r = Vn(e);
                }
                if (!xt.has(r) && (e = g({
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
                    n = l.createElement("link"), $e(n, "link", e), Qe(n), l.head.appendChild(n);
                }
            }
        }
        function S1(e, t, l) {
            tl.S(e, t, l);
            var n = Gn;
            if (n && e) {
                var a = fn(n).hoistableStyles, r = Yn(e);
                t = t || "default";
                var d = a.get(r);
                if (!d) {
                    var y = {
                        loading: 0,
                        preload: null
                    };
                    if (d = n.querySelector(ja(r))) y.loading = 5;
                    else {
                        e = g({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = xt.get(r)) && Qc(e, l);
                        var S = d = n.createElement("link");
                        Qe(S), $e(S, "link", e), S._p = new Promise(function(M, U) {
                            S.onload = M, S.onerror = U;
                        }), S.addEventListener("load", function() {
                            y.loading |= 1;
                        }), S.addEventListener("error", function() {
                            y.loading |= 2;
                        }), y.loading |= 4, oi(d, t, n);
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
        function E1(e, t) {
            tl.X(e, t);
            var l = Gn;
            if (l && e) {
                var n = fn(l).hoistableScripts, a = Vn(e), r = n.get(a);
                r || (r = l.querySelector(Ha(a)), r || (e = g({
                    src: e,
                    async: !0
                }, t), (t = xt.get(a)) && Kc(e, t), r = l.createElement("script"), Qe(r), $e(r, "link", e), l.head.appendChild(r)), r = {
                    type: "script",
                    instance: r,
                    count: 1,
                    state: null
                }, n.set(a, r));
            }
        }
        function _1(e, t) {
            tl.M(e, t);
            var l = Gn;
            if (l && e) {
                var n = fn(l).hoistableScripts, a = Vn(e), r = n.get(a);
                r || (r = l.querySelector(Ha(a)), r || (e = g({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = xt.get(a)) && Kc(e, t), r = l.createElement("script"), Qe(r), $e(r, "link", e), l.head.appendChild(r)), r = {
                    type: "script",
                    instance: r,
                    count: 1,
                    state: null
                }, n.set(a, r));
            }
        }
        function ch(e, t, l, n) {
            var a = (a = ie.current) ? si(a) : null;
            if (!a) throw Error(s(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Yn(l.href), l = fn(a).hoistableStyles, n = l.get(t), n || (n = {
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
                        var r = fn(a).hoistableStyles, d = r.get(e);
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
                        }, xt.set(e, l), r || T1(a, e, l, d.state))), t && n === null) throw Error(s(528, ""));
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
        function Yn(e) {
            return 'href="' + Et(e) + '"';
        }
        function ja(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function sh(e) {
            return g({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function T1(e, t, l, n) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
                return n.loading |= 1;
            }), t.addEventListener("error", function() {
                return n.loading |= 2;
            }), $e(t, "link", l), Qe(t), e.head.appendChild(t));
        }
        function Vn(e) {
            return '[src="' + Et(e) + '"]';
        }
        function Ha(e) {
            return "script[async]" + e;
        }
        function oh(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var n = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
                    if (n) return t.instance = n, Qe(n), n;
                    var a = g({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return n = (e.ownerDocument || e).createElement("style"), Qe(n), $e(n, "style", a), oi(n, l.precedence, e), t.instance = n;
                case "stylesheet":
                    a = Yn(l.href);
                    var r = e.querySelector(ja(a));
                    if (r) return t.state.loading |= 4, t.instance = r, Qe(r), r;
                    n = sh(l), (a = xt.get(a)) && Qc(n, a), r = (e.ownerDocument || e).createElement("link"), Qe(r);
                    var d = r;
                    return d._p = new Promise(function(y, S) {
                        d.onload = y, d.onerror = S;
                    }), $e(r, "link", n), t.state.loading |= 4, oi(r, l.precedence, e), t.instance = r;
                case "script":
                    return r = Vn(l.src), (a = e.querySelector(Ha(r))) ? (t.instance = a, Qe(a), a) : (n = l, (a = xt.get(r)) && (n = g({}, l), Kc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Qe(a), $e(a, "link", n), e.head.appendChild(a), t.instance = a);
                case "void":
                    return null;
                default:
                    throw Error(s(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, oi(n, l.precedence, e));
            return t.instance;
        }
        function oi(e, t, l) {
            for(var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, r = a, d = 0; d < n.length; d++){
                var y = n[d];
                if (y.dataset.precedence === t) r = y;
                else if (r !== a) break;
            }
            r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
        }
        function Qc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Kc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var fi = null;
        function fh(e, t, l) {
            if (fi === null) {
                var n = new Map, a = fi = new Map;
                a.set(l, n);
            } else a = fi, n = a.get(l), n || (n = new Map, a.set(l, n));
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
        function dh(e, t, l) {
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
        function hh(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var ka = null;
        function A1() {}
        function O1(e, t, l) {
            if (ka === null) throw Error(s(475));
            var n = ka;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var a = Yn(l.href), r = e.querySelector(ja(a));
                    if (r) {
                        e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = di.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = r, Qe(r);
                        return;
                    }
                    r = e.ownerDocument || e, l = sh(l), (a = xt.get(a)) && Qc(l, a), r = r.createElement("link"), Qe(r);
                    var d = r;
                    d._p = new Promise(function(y, S) {
                        d.onload = y, d.onerror = S;
                    }), $e(r, "link", l), t.instance = r;
                }
                n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = di.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function N1() {
            if (ka === null) throw Error(s(475));
            var e = ka;
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
        function di() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Gc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var hi = null;
        function Gc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, hi = new Map, t.forEach(x1, e), hi = null, di.call(e));
        }
        function x1(e, t) {
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
            $$typeof: k,
            Provider: null,
            Consumer: null,
            _currentValue: ne,
            _currentValue2: ne,
            _threadCount: 0
        };
        function M1(e, t, l, n, a, r, d, y) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ki(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ki(0), this.hiddenUpdates = ki(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = r, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = new Map;
        }
        function ph(e, t, l, n, a, r, d, y, S, M, U, j) {
            return e = new M1(e, t, l, d, y, S, M, j), t = 1, r === !0 && (t |= 24), r = pt(3, null, null, t), e.current = r, r.stateNode = e, t = Ar(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: t
            }, Mr(r), e;
        }
        function mh(e) {
            return e ? (e = Tn, e) : Tn;
        }
        function yh(e, t, l, n, a, r) {
            a = mh(a), n.context === null ? n.context = a : n.pendingContext = a, n = dl(t), n.payload = {
                element: l
            }, r = r === void 0 ? null : r, r !== null && (n.callback = r), l = hl(e, n, t), l !== null && (bt(l, e, t), va(l, e, t));
        }
        function vh(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var l = e.retryLane;
                e.retryLane = l !== 0 && l < t ? l : t;
            }
        }
        function Yc(e, t) {
            vh(e, t), (e = e.alternate) && vh(e, t);
        }
        function gh(e) {
            if (e.tag === 13) {
                var t = _n(e, 67108864);
                t !== null && bt(t, e, 67108864), Yc(e, 67108864);
            }
        }
        var pi = !0;
        function C1(e, t, l, n) {
            var a = P.T;
            P.T = null;
            var r = X.p;
            try {
                X.p = 2, Vc(e, t, l, n);
            } finally{
                X.p = r, P.T = a;
            }
        }
        function D1(e, t, l, n) {
            var a = P.T;
            P.T = null;
            var r = X.p;
            try {
                X.p = 8, Vc(e, t, l, n);
            } finally{
                X.p = r, P.T = a;
            }
        }
        function Vc(e, t, l, n) {
            if (pi) {
                var a = Xc(n);
                if (a === null) wc(e, t, n, mi, l), Sh(e, n);
                else if (w1(a, e, t, l, n)) n.stopPropagation();
                else if (Sh(e, n), t & 4 && -1 < B1.indexOf(e)) {
                    for(; a !== null;){
                        var r = on(a);
                        if (r !== null) switch(r.tag){
                            case 3:
                                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                                    var d = ql(r.pendingLanes);
                                    if (d !== 0) {
                                        var y = r;
                                        for(y.pendingLanes |= 2, y.entangledLanes |= 2; d;){
                                            var S = 1 << 31 - dt(d);
                                            y.entanglements[1] |= S, d &= ~S;
                                        }
                                        Ht(r), (ve & 6) === 0 && (Wu = zt() + 500, za(0));
                                    }
                                }
                                break;
                            case 13:
                                y = _n(r, 2), y !== null && bt(y, r, 2), ei(), Yc(r, 2);
                        }
                        if (r = Xc(n), r === null && wc(e, t, n, mi, l), r === a) break;
                        a = r;
                    }
                    a !== null && n.stopPropagation();
                } else wc(e, t, n, null, l);
            }
        }
        function Xc(e) {
            return e = Wi(e), Zc(e);
        }
        var mi = null;
        function Zc(e) {
            if (mi = null, e = sn(e), e !== null) {
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
            return mi = e, null;
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
                        case Ds:
                            return 2;
                        case Bs:
                            return 8;
                        case ru:
                        case gm:
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
        var $c = !1, Ol = null, Nl = null, xl = null, Qa = new Map, Ka = new Map, Ml = [], B1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
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
        function Ga(e, t, l, n, a, r) {
            return e === null || e.nativeEvent !== r ? (e = {
                blockedOn: t,
                domEventName: l,
                eventSystemFlags: n,
                nativeEvent: r,
                targetContainers: [
                    a
                ]
            }, t !== null && (t = on(t), t !== null && gh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
        }
        function w1(e, t, l, n, a) {
            switch(t){
                case "focusin":
                    return Ol = Ga(Ol, e, t, l, n, a), !0;
                case "dragenter":
                    return Nl = Ga(Nl, e, t, l, n, a), !0;
                case "mouseover":
                    return xl = Ga(xl, e, t, l, n, a), !0;
                case "pointerover":
                    var r = a.pointerId;
                    return Qa.set(r, Ga(Qa.get(r) || null, e, t, l, n, a)), !0;
                case "gotpointercapture":
                    return r = a.pointerId, Ka.set(r, Ga(Ka.get(r) || null, e, t, l, n, a)), !0;
            }
            return !1;
        }
        function Eh(e) {
            var t = sn(e.target);
            if (t !== null) {
                var l = f(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = m(l), t !== null) {
                            e.blockedOn = t, Om(e.priority, function() {
                                if (l.tag === 13) {
                                    var n = gt();
                                    n = Li(n);
                                    var a = _n(l, n);
                                    a !== null && bt(a, l, n), Yc(l, n);
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
                var l = Xc(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var n = new l.constructor(l.type, l);
                    Fi = n, l.target.dispatchEvent(n), Fi = null;
                } else return t = on(l), t !== null && gh(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function _h(e, t, l) {
            yi(e) && l.delete(t);
        }
        function z1() {
            $c = !1, Ol !== null && yi(Ol) && (Ol = null), Nl !== null && yi(Nl) && (Nl = null), xl !== null && yi(xl) && (xl = null), Qa.forEach(_h), Ka.forEach(_h);
        }
        function vi(e, t) {
            e.blockedOn === t && (e.blockedOn = null, $c || ($c = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, z1)));
        }
        var gi = null;
        function Th(e) {
            gi !== e && (gi = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
                gi === e && (gi = null);
                for(var t = 0; t < e.length; t += 3){
                    var l = e[t], n = e[t + 1], a = e[t + 2];
                    if (typeof n != "function") {
                        if (Zc(n || l) === null) continue;
                        break;
                    }
                    var r = on(l);
                    r !== null && (e.splice(t, 3), t -= 3, Zr(r, {
                        pending: !0,
                        data: a,
                        method: l.method,
                        action: n
                    }, n, a));
                }
            }));
        }
        function Ya(e) {
            function t(S) {
                return vi(S, e);
            }
            Ol !== null && vi(Ol, e), Nl !== null && vi(Nl, e), xl !== null && vi(xl, e), Qa.forEach(t), Ka.forEach(t);
            for(var l = 0; l < Ml.length; l++){
                var n = Ml[l];
                n.blockedOn === e && (n.blockedOn = null);
            }
            for(; 0 < Ml.length && (l = Ml[0], l.blockedOn === null);)Eh(l), l.blockedOn === null && Ml.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(n = 0; n < l.length; n += 3){
                var a = l[n], r = l[n + 1], d = a[at] || null;
                if (typeof r == "function") d || Th(l);
                else if (d) {
                    var y = null;
                    if (r && r.hasAttribute("formAction")) {
                        if (a = r, d = r[at] || null) y = d.formAction;
                        else if (Zc(a) !== null) continue;
                    } else y = d.action;
                    typeof y == "function" ? l[n + 1] = y : (l.splice(n, 3), n -= 3), Th(l);
                }
            }
        }
        function Jc(e) {
            this._internalRoot = e;
        }
        bi.prototype.render = Jc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(s(409));
            var l = t.current, n = gt();
            yh(l, n, e, t, null, null);
        }, bi.prototype.unmount = Jc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                yh(e.current, 2, null, e, null, null), ei(), t[cn] = null;
            }
        };
        function bi(e) {
            this._internalRoot = e;
        }
        bi.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = js();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Ml.length && t !== 0 && t < Ml[l].priority; l++);
                Ml.splice(l, 0, e), l === 0 && Eh(e);
            }
        };
        var Rh = i.version;
        if (Rh !== "19.1.0") throw Error(s(527, Rh, "19.1.0"));
        X.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
            return e = h(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var U1 = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: P,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Si.isDisabled && Si.supportsFiber) try {
                $n = Si.inject(U1), ft = Si;
            } catch  {}
        }
        return Xa.createRoot = function(e, t) {
            if (!o(e)) throw Error(s(299));
            var l = !1, n = "", a = kf, r = Lf, d = Qf, y = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (y = t.unstable_transitionCallbacks)), t = ph(e, 1, !1, null, null, l, n, a, r, d, y, null), e[cn] = t.current, Bc(e), new Jc(t);
        }, Xa.hydrateRoot = function(e, t, l) {
            if (!o(e)) throw Error(s(299));
            var n = !1, a = "", r = kf, d = Lf, y = Qf, S = null, M = null;
            return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (r = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (y = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (S = l.unstable_transitionCallbacks), l.formState !== void 0 && (M = l.formState)), t = ph(e, 1, !0, t, l ?? null, n, a, r, d, y, S, M), t.context = mh(null), l = t.current, n = gt(), n = Li(n), a = dl(n), a.callback = null, hl(l, a, n), l = n, t.current.lanes = l, Fn(t, l), Ht(t), e[cn] = t.current, Bc(e), new bi(t);
        }, Xa.version = "19.1.0", Xa;
    }
    var zh;
    function V1() {
        if (zh) return Ic.exports;
        zh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (i) {
                console.error(i);
            }
        }
        return u(), Ic.exports = Y1(), Ic.exports;
    }
    var X1 = V1(), ns = {
        exports: {}
    }, as = {};
    var Uh;
    function Z1() {
        if (Uh) return as;
        Uh = 1;
        var u = Bi();
        function i(h, v) {
            return h === v && (h !== 0 || 1 / h === 1 / v) || h !== h && v !== v;
        }
        var c = typeof Object.is == "function" ? Object.is : i, s = u.useSyncExternalStore, o = u.useRef, f = u.useEffect, m = u.useMemo, p = u.useDebugValue;
        return as.useSyncExternalStoreWithSelector = function(h, v, g, E, b) {
            var T = o(null);
            if (T.current === null) {
                var N = {
                    hasValue: !1,
                    value: null
                };
                T.current = N;
            } else N = T.current;
            T = m(function() {
                function z(K) {
                    if (!w) {
                        if (w = !0, L = K, K = E(K), b !== void 0 && N.hasValue) {
                            var J = N.value;
                            if (b(J, K)) return k = J;
                        }
                        return k = K;
                    }
                    if (J = k, c(L, K)) return J;
                    var V = E(K);
                    return b !== void 0 && b(J, V) ? (L = K, J) : (L = K, k = V);
                }
                var w = !1, L, k, G = g === void 0 ? null : g;
                return [
                    function() {
                        return z(v());
                    },
                    G === null ? void 0 : function() {
                        return z(G());
                    }
                ];
            }, [
                v,
                g,
                E,
                b
            ]);
            var C = s(h, T[0], T[1]);
            return f(function() {
                N.hasValue = !0, N.value = C;
            }, [
                C
            ]), p(C), C;
        }, as;
    }
    var Ph;
    function $1() {
        return Ph || (Ph = 1, ns.exports = Z1()), ns.exports;
    }
    var J1 = $1();
    function F1(u) {
        u();
    }
    function W1() {
        let u = null, i = null;
        return {
            clear () {
                u = null, i = null;
            },
            notify () {
                F1(()=>{
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
    function I1(u, i) {
        let c, s = qh, o = 0, f = !1;
        function m(C) {
            g();
            const z = s.subscribe(C);
            let w = !1;
            return ()=>{
                w || (w = !0, z(), E());
            };
        }
        function p() {
            s.notify();
        }
        function h() {
            N.onStateChange && N.onStateChange();
        }
        function v() {
            return f;
        }
        function g() {
            o++, c || (c = u.subscribe(h), s = W1());
        }
        function E() {
            o--, c && o === 0 && (c(), c = void 0, s.clear(), s = qh);
        }
        function b() {
            f || (f = !0, g());
        }
        function T() {
            f && (f = !1, E());
        }
        const N = {
            addNestedSub: m,
            notifyNestedSubs: p,
            handleChangeWrapper: h,
            isSubscribed: v,
            trySubscribe: b,
            tryUnsubscribe: T,
            getListeners: ()=>s
        };
        return N;
    }
    var ey = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ty = ey(), ly = ()=>typeof navigator < "u" && navigator.product === "ReactNative", ny = ly(), ay = ()=>ty || ny ? A.useLayoutEffect : A.useEffect, uy = ay(), iy = Symbol.for("react-redux-context"), ry = typeof globalThis < "u" ? globalThis : {};
    function cy() {
        if (!A.createContext) return {};
        const u = ry[iy] ??= new Map;
        let i = u.get(A.createContext);
        return i || (i = A.createContext(null), u.set(A.createContext, i)), i;
    }
    var zl = cy();
    function sy(u) {
        const { children: i, context: c, serverState: s, store: o } = u, f = A.useMemo(()=>{
            const h = I1(o);
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
        uy(()=>{
            const { subscription: h } = f;
            return h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), m !== o.getState() && h.notifyNestedSubs(), ()=>{
                h.tryUnsubscribe(), h.onStateChange = void 0;
            };
        }, [
            f,
            m
        ]);
        const p = c || zl;
        return A.createElement(p.Provider, {
            value: f
        }, i);
    }
    var oy = sy;
    function bs(u = zl) {
        return function() {
            return A.useContext(u);
        };
    }
    var cp = bs();
    function sp(u = zl) {
        const i = u === zl ? cp : bs(u), c = ()=>{
            const { store: s } = i();
            return s;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    var fy = sp();
    function dy(u = zl) {
        const i = u === zl ? fy : sp(u), c = ()=>i().dispatch;
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    let hy;
    Xn = dy();
    hy = (u, i)=>u === i;
    function py(u = zl) {
        const i = u === zl ? cp : bs(u), c = (s, o = {})=>{
            const { equalityFn: f = hy } = typeof o == "function" ? {
                equalityFn: o
            } : o, m = i(), { store: p, subscription: h, getServerState: v } = m;
            A.useRef(!0);
            const g = A.useCallback({
                [s.name] (b) {
                    return s(b);
                }
            }[s.name], [
                s
            ]), E = J1.useSyncExternalStoreWithSelector(h.addNestedSub, p.getState, v || p.getState, g, f);
            return A.useDebugValue(E), E;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    an = py();
    function Je(u) {
        return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var my = typeof Symbol == "function" && Symbol.observable || "@@observable", jh = my, us = ()=>Math.random().toString(36).substring(7).split("").join("."), yy = {
        INIT: `@@redux/INIT${us()}`,
        REPLACE: `@@redux/REPLACE${us()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${us()}`
    }, Mi = yy;
    function op(u) {
        if (typeof u != "object" || u === null) return !1;
        let i = u;
        for(; Object.getPrototypeOf(i) !== null;)i = Object.getPrototypeOf(i);
        return Object.getPrototypeOf(u) === i || Object.getPrototypeOf(u) === null;
    }
    function Ss(u, i, c) {
        if (typeof u != "function") throw new Error(Je(2));
        if (typeof i == "function" && typeof c == "function" || typeof c == "function" && typeof arguments[3] == "function") throw new Error(Je(0));
        if (typeof i == "function" && typeof c > "u" && (c = i, i = void 0), typeof c < "u") {
            if (typeof c != "function") throw new Error(Je(1));
            return c(Ss)(u, i);
        }
        let s = u, o = i, f = new Map, m = f, p = 0, h = !1;
        function v() {
            m === f && (m = new Map, f.forEach((z, w)=>{
                m.set(w, z);
            }));
        }
        function g() {
            if (h) throw new Error(Je(3));
            return o;
        }
        function E(z) {
            if (typeof z != "function") throw new Error(Je(4));
            if (h) throw new Error(Je(5));
            let w = !0;
            v();
            const L = p++;
            return m.set(L, z), function() {
                if (w) {
                    if (h) throw new Error(Je(6));
                    w = !1, v(), m.delete(L), f = null;
                }
            };
        }
        function b(z) {
            if (!op(z)) throw new Error(Je(7));
            if (typeof z.type > "u") throw new Error(Je(8));
            if (typeof z.type != "string") throw new Error(Je(17));
            if (h) throw new Error(Je(9));
            try {
                h = !0, o = s(o, z);
            } finally{
                h = !1;
            }
            return (f = m).forEach((L)=>{
                L();
            }), z;
        }
        function T(z) {
            if (typeof z != "function") throw new Error(Je(10));
            s = z, b({
                type: Mi.REPLACE
            });
        }
        function N() {
            const z = E;
            return {
                subscribe (w) {
                    if (typeof w != "object" || w === null) throw new Error(Je(11));
                    function L() {
                        const G = w;
                        G.next && G.next(g());
                    }
                    return L(), {
                        unsubscribe: z(L)
                    };
                },
                [jh] () {
                    return this;
                }
            };
        }
        return b({
            type: Mi.INIT
        }), {
            dispatch: b,
            subscribe: E,
            getState: g,
            replaceReducer: T,
            [jh]: N
        };
    }
    function vy(u) {
        Object.keys(u).forEach((i)=>{
            const c = u[i];
            if (typeof c(void 0, {
                type: Mi.INIT
            }) > "u") throw new Error(Je(12));
            if (typeof c(void 0, {
                type: Mi.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(Je(13));
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
            vy(c);
        } catch (f) {
            o = f;
        }
        return function(m = {}, p) {
            if (o) throw o;
            let h = !1;
            const v = {};
            for(let g = 0; g < s.length; g++){
                const E = s[g], b = c[E], T = m[E], N = b(T, p);
                if (typeof N > "u") throw p && p.type, new Error(Je(14));
                v[E] = N, h = h || N !== T;
            }
            return h = h || s.length !== Object.keys(m).length, h ? v : m;
        };
    }
    function Ci(...u) {
        return u.length === 0 ? (i)=>i : u.length === 1 ? u[0] : u.reduce((i, c)=>(...s)=>i(c(...s)));
    }
    function gy(...u) {
        return (i)=>(c, s)=>{
                const o = i(c, s);
                let f = ()=>{
                    throw new Error(Je(15));
                };
                const m = {
                    getState: o.getState,
                    dispatch: (h, ...v)=>f(h, ...v)
                }, p = u.map((h)=>h(m));
                return f = Ci(...p)(o.dispatch), {
                    ...o,
                    dispatch: f
                };
            };
    }
    function by(u, i = `expected a function, instead received ${typeof u}`) {
        if (typeof u != "function") throw new TypeError(i);
    }
    function Sy(u, i = `expected an object, instead received ${typeof u}`) {
        if (typeof u != "object") throw new TypeError(i);
    }
    function Ey(u, i = "expected all items to be functions, instead received the following types: ") {
        if (!u.every((c)=>typeof c == "function")) {
            const c = u.map((s)=>typeof s == "function" ? `function ${s.name || "unnamed"}()` : typeof s).join(", ");
            throw new TypeError(`${i}[${c}]`);
        }
    }
    var Hh = (u)=>Array.isArray(u) ? u : [
            u
        ];
    function _y(u) {
        const i = Array.isArray(u[0]) ? u[0] : u;
        return Ey(i, "createSelector expects all input-selectors to be functions, but received the following types: "), i;
    }
    function Ty(u, i) {
        const c = [], { length: s } = u;
        for(let o = 0; o < s; o++)c.push(u[o].apply(null, i));
        return c;
    }
    var Ry = class {
        constructor(u){
            this.value = u;
        }
        deref() {
            return this.value;
        }
    }, Ay = typeof WeakRef < "u" ? WeakRef : Ry, Oy = 0, kh = 1;
    function Ei() {
        return {
            s: Oy,
            v: void 0,
            o: null,
            p: null
        };
    }
    function dp(u, i = {}) {
        let c = Ei();
        const { resultEqualityCheck: s } = i;
        let o, f = 0;
        function m() {
            let p = c;
            const { length: h } = arguments;
            for(let E = 0, b = h; E < b; E++){
                const T = arguments[E];
                if (typeof T == "function" || typeof T == "object" && T !== null) {
                    let N = p.o;
                    N === null && (p.o = N = new WeakMap);
                    const C = N.get(T);
                    C === void 0 ? (p = Ei(), N.set(T, p)) : p = C;
                } else {
                    let N = p.p;
                    N === null && (p.p = N = new Map);
                    const C = N.get(T);
                    C === void 0 ? (p = Ei(), N.set(T, p)) : p = C;
                }
            }
            const v = p;
            let g;
            if (p.s === kh) g = p.v;
            else if (g = u.apply(null, arguments), f++, s) {
                const E = o?.deref?.() ?? o;
                E != null && s(E, g) && (g = E, f !== 0 && f--), o = typeof g == "object" && g !== null || typeof g == "function" ? new Ay(g) : g;
            }
            return v.s = kh, v.v = g, g;
        }
        return m.clearCache = ()=>{
            c = Ei(), m.resetResultsCount();
        }, m.resultsCount = ()=>f, m.resetResultsCount = ()=>{
            f = 0;
        }, m;
    }
    function Ny(u, ...i) {
        const c = typeof u == "function" ? {
            memoize: u,
            memoizeOptions: i
        } : u, s = (...o)=>{
            let f = 0, m = 0, p, h = {}, v = o.pop();
            typeof v == "object" && (h = v, v = o.pop()), by(v, `createSelector expects an output function after the inputs, but received: [${typeof v}]`);
            const g = {
                ...c,
                ...h
            }, { memoize: E, memoizeOptions: b = [], argsMemoize: T = dp, argsMemoizeOptions: N = [] } = g, C = Hh(b), z = Hh(N), w = _y(o), L = E(function() {
                return f++, v.apply(null, arguments);
            }, ...C), k = T(function() {
                m++;
                const K = Ty(w, arguments);
                return p = L.apply(null, K), p;
            }, ...z);
            return Object.assign(k, {
                resultFunc: v,
                memoizedResultFunc: L,
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
                memoize: E,
                argsMemoize: T
            });
        };
        return Object.assign(s, {
            withTypes: ()=>s
        }), s;
    }
    var Es = Ny(dp), xy = Object.assign((u, i = Es)=>{
        Sy(u, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof u}`);
        const c = Object.keys(u), s = c.map((f)=>u[f]);
        return i(s, (...f)=>f.reduce((m, p, h)=>(m[c[h]] = p, m), {}));
    }, {
        withTypes: ()=>xy
    });
    function hp(u) {
        return ({ dispatch: c, getState: s })=>(o)=>(f)=>typeof f == "function" ? f(c, s, u) : o(f);
    }
    var My = hp(), Cy = hp, Dy = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Ci : Ci.apply(null, arguments);
    }, pp = class Fa extends Array {
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
    function By(u) {
        return typeof u == "boolean";
    }
    var wy = ()=>function(i) {
            const { thunk: c = !0, immutableCheck: s = !0, serializableCheck: o = !0, actionCreatorCheck: f = !0 } = i ?? {};
            let m = new pp;
            return c && (By(c) ? m.push(My) : m.push(Cy(c.extraArgument))), m;
        }, zy = "RTK_autoBatch", Lh = (u)=>(i)=>{
            setTimeout(i, u);
        }, Uy = (u = {
        type: "raf"
    })=>(i)=>(...c)=>{
                const s = i(...c);
                let o = !0, f = !1, m = !1;
                const p = new Set, h = u.type === "tick" ? queueMicrotask : u.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Lh(10) : u.type === "callback" ? u.queueNotification : Lh(u.timeout), v = ()=>{
                    m = !1, f && (f = !1, p.forEach((g)=>g()));
                };
                return Object.assign({}, s, {
                    subscribe (g) {
                        const E = ()=>o && g(), b = s.subscribe(E);
                        return p.add(g), ()=>{
                            b(), p.delete(g);
                        };
                    },
                    dispatch (g) {
                        try {
                            return o = !g?.meta?.[zy], f = !o, f && (m || (m = !0, h(v))), s.dispatch(g);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, Py = (u)=>function(c) {
            const { autoBatch: s = !0 } = c ?? {};
            let o = new pp(u);
            return s && o.push(Uy(typeof s == "object" ? s : void 0)), o;
        };
    function qy(u) {
        const i = wy(), { reducer: c = void 0, middleware: s, devTools: o = !0, preloadedState: f = void 0, enhancers: m = void 0 } = u || {};
        let p;
        if (typeof c == "function") p = c;
        else if (op(c)) p = fp(c);
        else throw new Error(jy(1));
        let h;
        typeof s == "function" ? h = s(i) : h = i();
        let v = Ci;
        o && (v = Dy({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const g = gy(...h), E = Py(g);
        let b = typeof m == "function" ? m(E) : E();
        const T = v(...b);
        return Ss(p, f, T);
    }
    function jy(u) {
        return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var _s = "persist:", mp = "persist/FLUSH", Ts = "persist/REHYDRATE", yp = "persist/PAUSE", vp = "persist/PERSIST", gp = "persist/PURGE", bp = "persist/REGISTER", Hy = -1;
    function Ai(u) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ai = function(c) {
            return typeof c;
        } : Ai = function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        }, Ai(u);
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
    function ky(u) {
        for(var i = 1; i < arguments.length; i++){
            var c = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Qh(c, !0).forEach(function(s) {
                Ly(u, s, c[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Qh(c).forEach(function(s) {
                Object.defineProperty(u, s, Object.getOwnPropertyDescriptor(c, s));
            });
        }
        return u;
    }
    function Ly(u, i, c) {
        return i in u ? Object.defineProperty(u, i, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = c, u;
    }
    function Qy(u, i, c, s) {
        s.debug;
        var o = ky({}, c);
        return u && Ai(u) === "object" && Object.keys(u).forEach(function(f) {
            f !== "_persist" && i[f] === c[f] && (o[f] = u[f]);
        }), o;
    }
    function Ky(u) {
        var i = u.blacklist || null, c = u.whitelist || null, s = u.transforms || [], o = u.throttle || 0, f = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : _s).concat(u.key), m = u.storage, p;
        u.serialize === !1 ? p = function(K) {
            return K;
        } : typeof u.serialize == "function" ? p = u.serialize : p = Gy;
        var h = u.writeFailHandler || null, v = {}, g = {}, E = [], b = null, T = null, N = function(K) {
            Object.keys(K).forEach(function(J) {
                w(J) && v[J] !== K[J] && E.indexOf(J) === -1 && E.push(J);
            }), Object.keys(v).forEach(function(J) {
                K[J] === void 0 && w(J) && E.indexOf(J) === -1 && v[J] !== void 0 && E.push(J);
            }), b === null && (b = setInterval(C, o)), v = K;
        };
        function C() {
            if (E.length === 0) {
                b && clearInterval(b), b = null;
                return;
            }
            var G = E.shift(), K = s.reduce(function(J, V) {
                return V.in(J, G, v);
            }, v[G]);
            if (K !== void 0) try {
                g[G] = p(K);
            } catch (J) {
                console.error("redux-persist/createPersistoid: error serializing state", J);
            }
            else delete g[G];
            E.length === 0 && z();
        }
        function z() {
            Object.keys(g).forEach(function(G) {
                v[G] === void 0 && delete g[G];
            }), T = m.setItem(f, p(g)).catch(L);
        }
        function w(G) {
            return !(c && c.indexOf(G) === -1 && G !== "_persist" || i && i.indexOf(G) !== -1);
        }
        function L(G) {
            h && h(G);
        }
        var k = function() {
            for(; E.length !== 0;)C();
            return T || Promise.resolve();
        };
        return {
            update: N,
            flush: k
        };
    }
    function Gy(u) {
        return JSON.stringify(u);
    }
    function Yy(u) {
        var i = u.transforms || [], c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : _s).concat(u.key), s = u.storage;
        u.debug;
        var o;
        return u.deserialize === !1 ? o = function(m) {
            return m;
        } : typeof u.deserialize == "function" ? o = u.deserialize : o = Vy, s.getItem(c).then(function(f) {
            if (f) try {
                var m = {}, p = o(f);
                return Object.keys(p).forEach(function(h) {
                    m[h] = i.reduceRight(function(v, g) {
                        return g.out(v, h, p);
                    }, o(p[h]));
                }), m;
            } catch (h) {
                throw h;
            }
            else return;
        });
    }
    function Vy(u) {
        return JSON.parse(u);
    }
    function Xy(u) {
        var i = u.storage, c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : _s).concat(u.key);
        return i.removeItem(c, Zy);
    }
    function Zy(u) {}
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
    function ll(u) {
        for(var i = 1; i < arguments.length; i++){
            var c = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Kh(c, !0).forEach(function(s) {
                $y(u, s, c[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Kh(c).forEach(function(s) {
                Object.defineProperty(u, s, Object.getOwnPropertyDescriptor(c, s));
            });
        }
        return u;
    }
    function $y(u, i, c) {
        return i in u ? Object.defineProperty(u, i, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[i] = c, u;
    }
    function Jy(u, i) {
        if (u == null) return {};
        var c = Fy(u, i), s, o;
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            for(o = 0; o < f.length; o++)s = f[o], !(i.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(u, s) && (c[s] = u[s]);
        }
        return c;
    }
    function Fy(u, i) {
        if (u == null) return {};
        var c = {}, s = Object.keys(u), o, f;
        for(f = 0; f < s.length; f++)o = s[f], !(i.indexOf(o) >= 0) && (c[o] = u[o]);
        return c;
    }
    var Wy = 5e3;
    function Iy(u, i) {
        var c = u.version !== void 0 ? u.version : Hy;
        u.debug;
        var s = u.stateReconciler === void 0 ? Qy : u.stateReconciler, o = u.getStoredState || Yy, f = u.timeout !== void 0 ? u.timeout : Wy, m = null, p = !1, h = !0, v = function(E) {
            return E._persist.rehydrated && m && !h && m.update(E), E;
        };
        return function(g, E) {
            var b = g || {}, T = b._persist, N = Jy(b, [
                "_persist"
            ]), C = N;
            if (E.type === vp) {
                var z = !1, w = function(F, I) {
                    z || (E.rehydrate(u.key, F, I), z = !0);
                };
                if (f && setTimeout(function() {
                    !z && w(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(u.key, '"')));
                }, f), h = !1, m || (m = Ky(u)), T) return ll({}, i(C, E), {
                    _persist: T
                });
                if (typeof E.rehydrate != "function" || typeof E.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return E.register(u.key), o(u).then(function(V) {
                    var F = u.migrate || function(I, Ce) {
                        return Promise.resolve(I);
                    };
                    F(V, c).then(function(I) {
                        w(I);
                    }, function(I) {
                        w(void 0, I);
                    });
                }, function(V) {
                    w(void 0, V);
                }), ll({}, i(C, E), {
                    _persist: {
                        version: c,
                        rehydrated: !1
                    }
                });
            } else {
                if (E.type === gp) return p = !0, E.result(Xy(u)), ll({}, i(C, E), {
                    _persist: T
                });
                if (E.type === mp) return E.result(m && m.flush()), ll({}, i(C, E), {
                    _persist: T
                });
                if (E.type === yp) h = !0;
                else if (E.type === Ts) {
                    if (p) return ll({}, C, {
                        _persist: ll({}, T, {
                            rehydrated: !0
                        })
                    });
                    if (E.key === u.key) {
                        var L = i(C, E), k = E.payload, G = s !== !1 && k !== void 0 ? s(k, g, L, u) : L, K = ll({}, G, {
                            _persist: ll({}, T, {
                                rehydrated: !0
                            })
                        });
                        return v(K);
                    }
                }
            }
            if (!T) return i(g, E);
            var J = i(C, E);
            return J === C ? g : v(ll({}, J, {
                _persist: T
            }));
        };
    }
    function Gh(u) {
        return lv(u) || tv(u) || ev();
    }
    function ev() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function tv(u) {
        if (Symbol.iterator in Object(u) || Object.prototype.toString.call(u) === "[object Arguments]") return Array.from(u);
    }
    function lv(u) {
        if (Array.isArray(u)) {
            for(var i = 0, c = new Array(u.length); i < u.length; i++)c[i] = u[i];
            return c;
        }
    }
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
    function hs(u) {
        for(var i = 1; i < arguments.length; i++){
            var c = arguments[i] != null ? arguments[i] : {};
            i % 2 ? Yh(c, !0).forEach(function(s) {
                nv(u, s, c[s]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Yh(c).forEach(function(s) {
                Object.defineProperty(u, s, Object.getOwnPropertyDescriptor(c, s));
            });
        }
        return u;
    }
    function nv(u, i, c) {
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
    }, av = function() {
        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Sp, c = arguments.length > 1 ? arguments[1] : void 0;
        switch(c.type){
            case bp:
                return hs({}, i, {
                    registry: [].concat(Gh(i.registry), [
                        c.key
                    ])
                });
            case Ts:
                var s = i.registry.indexOf(c.key), o = Gh(i.registry);
                return o.splice(s, 1), hs({}, i, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return i;
        }
    };
    function uv(u, i, c) {
        var s = Ss(av, Sp, void 0), o = function(h) {
            s.dispatch({
                type: bp,
                key: h
            });
        }, f = function(h, v, g) {
            var E = {
                type: Ts,
                payload: v,
                err: g,
                key: h
            };
            u.dispatch(E), s.dispatch(E);
        }, m = hs({}, s, {
            purge: function() {
                var h = [];
                return u.dispatch({
                    type: gp,
                    result: function(g) {
                        h.push(g);
                    }
                }), Promise.all(h);
            },
            flush: function() {
                var h = [];
                return u.dispatch({
                    type: mp,
                    result: function(g) {
                        h.push(g);
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
    const lt = "w", Mt = "b", Ve = "p", ps = "n", Oi = "b", Wa = "r", wl = "q", ke = "k", is = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
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
        constructor(i, c){
            const { color: s, piece: o, from: f, to: m, flags: p, captured: h, promotion: v } = c, g = Fe(f), E = Fe(m);
            this.color = s, this.piece = o, this.from = g, this.to = E, this.san = i._moveToSan(c, i._moves({
                legal: !0
            })), this.lan = g + E, this.before = i.fen(), i._makeMove(c), this.after = i.fen(), i._undoMove(), this.flags = "";
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
    const st = -1, tn = {
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
    }, ms = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, iv = {
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
    }, rv = {
        ...ms,
        ...iv
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
    }, rs = {
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
    }, cv = [
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
    ], sv = [
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
    ], ov = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, fv = "pnbrqkPNBRQK", Xh = [
        ps,
        Oi,
        Wa,
        wl
    ], dv = 7, hv = 6, pv = 1, mv = 0, Ti = {
        [ke]: ce.KSIDE_CASTLE,
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
    }, yv = {
        b: pv,
        w: hv
    }, vv = [
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
    function Ep(u) {
        return "0123456789".indexOf(u) !== -1;
    }
    function Fe(u) {
        const i = tu(u), c = ln(u);
        return "abcdefgh".substring(i, i + 1) + "87654321".substring(c, c + 1);
    }
    function Za(u) {
        return u === lt ? Mt : lt;
    }
    function gv(u) {
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
            for(let v = 0; v < o[m].length; v++)if (Ep(o[m][v])) {
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
    function bv(u, i) {
        const c = u.from, s = u.to, o = u.piece;
        let f = 0, m = 0, p = 0;
        for(let h = 0, v = i.length; h < v; h++){
            const g = i[h].from, E = i[h].to, b = i[h].piece;
            o === b && c !== g && s === E && (f++, ln(c) === ln(g) && m++, tu(c) === tu(g) && p++);
        }
        return f > 0 ? m > 0 && p > 0 ? Fe(c) : p > 0 ? Fe(c).charAt(1) : Fe(c).charAt(0) : "";
    }
    function Bl(u, i, c, s, o, f = void 0, m = ce.NORMAL) {
        const p = ln(s);
        if (o === Ve && (p === dv || p === mv)) for(let h = 0; h < Xh.length; h++){
            const v = Xh[h];
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
    function Zh(u) {
        let i = u.charAt(0);
        return i >= "a" && i <= "h" ? u.match(/[a-h]\d.*[a-h]\d/) ? void 0 : Ve : (i = i.toLowerCase(), i === "o" ? ke : i);
    }
    function cs(u) {
        return u.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function ss(u) {
        return u.split(" ").slice(0, 4).join(" ");
    }
    wi = class {
        _board = new Array(128);
        _turn = lt;
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
        constructor(i = is, { skipValidation: c = !1 } = {}){
            this.load(i, {
                skipValidation: c
            });
        }
        clear({ preserveHeaders: i = !1 } = {}) {
            this._board = new Array(128), this._kings = {
                w: st,
                b: st
            }, this._turn = lt, this._castling = {
                w: 0,
                b: 0
            }, this._epSquare = st, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = i ? this._header : {
                ...rv
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
                const { ok: p, error: h } = gv(i);
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
                    const v = h < "a" ? lt : Mt;
                    this._put({
                        type: h.toLowerCase(),
                        color: v
                    }, Fe(m)), m++;
                }
            }
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= ce.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= ce.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= ce.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= ce.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? st : ue[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(i), this._incPositionCount(i);
        }
        fen() {
            let i = 0, c = "";
            for(let f = ue.a8; f <= ue.h1; f++){
                if (this._board[f]) {
                    i > 0 && (c += i, i = 0);
                    const { color: m, type: p } = this._board[f];
                    c += m === lt ? p.toUpperCase() : p.toLowerCase();
                } else i++;
                f + 1 & 136 && (i > 0 && (c += i), f !== ue.h1 && (c += "/"), i = 0, f += 8);
            }
            let s = "";
            this._castling[lt] & ce.KSIDE_CASTLE && (s += "K"), this._castling[lt] & ce.QSIDE_CASTLE && (s += "Q"), this._castling[Mt] & ce.KSIDE_CASTLE && (s += "k"), this._castling[Mt] & ce.QSIDE_CASTLE && (s += "q"), s = s || "-";
            let o = "-";
            if (this._epSquare !== st) {
                const f = this._epSquare + (this._turn === lt ? 16 : -16), m = [
                    f + 1,
                    f - 1
                ];
                for (const p of m){
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
                s,
                o,
                this._halfMoves,
                this._moveNumber
            ].join(" ");
        }
        _updateSetup(i) {
            this._history.length > 0 || (i !== is ? (this._header.SetUp = "1", this._header.FEN = i) : (this._header.SetUp = null, this._header.FEN = null));
        }
        reset() {
            this.load(is);
        }
        get(i) {
            return this._board[ue[i]];
        }
        findPiece(i) {
            const c = [];
            for(let s = ue.a8; s <= ue.h1; s++){
                if (s & 136) {
                    s += 7;
                    continue;
                }
                !this._board[s] || this._board[s]?.color !== i.color || this._board[s].color === i.color && this._board[s].type === i.type && c.push(Fe(s));
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
            if (fv.indexOf(i.toLowerCase()) === -1 || !(s in ue)) return !1;
            const o = ue[s];
            if (i == ke && !(this._kings[c] == st || this._kings[c] == o)) return !1;
            const f = this._board[o];
            return f && f.type === ke && (this._kings[f.color] = st), this._board[o] = {
                type: i,
                color: c
            }, i === ke && (this._kings[c] = o), !0;
        }
        remove(i) {
            const c = this.get(i);
            return delete this._board[ue[i]], c && c.type === ke && (this._kings[c.color] = st), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), c;
        }
        _updateCastlingRights() {
            const i = this._board[ue.e1]?.type === ke && this._board[ue.e1]?.color === lt, c = this._board[ue.e8]?.type === ke && this._board[ue.e8]?.color === Mt;
            (!i || this._board[ue.a1]?.type !== Wa || this._board[ue.a1]?.color !== lt) && (this._castling.w &= -65), (!i || this._board[ue.h1]?.type !== Wa || this._board[ue.h1]?.color !== lt) && (this._castling.w &= -33), (!c || this._board[ue.a8]?.type !== Wa || this._board[ue.a8]?.color !== Mt) && (this._castling.b &= -65), (!c || this._board[ue.h8]?.type !== Wa || this._board[ue.h8]?.color !== Mt) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === st) return;
            const i = this._epSquare + (this._turn === lt ? -16 : 16), c = this._epSquare + (this._turn === lt ? 16 : -16), s = [
                c + 1,
                c - 1
            ];
            if (this._board[i] !== null || this._board[this._epSquare] !== null || this._board[c]?.color !== Za(this._turn) || this._board[c]?.type !== Ve) {
                this._epSquare = st;
                return;
            }
            const o = (f)=>!(f & 136) && this._board[f]?.color === this._turn && this._board[f]?.type === Ve;
            s.some(o) || (this._epSquare = st);
        }
        _attacked(i, c, s) {
            const o = [];
            for(let f = ue.a8; f <= ue.h1; f++){
                if (f & 136) {
                    f += 7;
                    continue;
                }
                if (this._board[f] === void 0 || this._board[f].color !== i) continue;
                const m = this._board[f], p = f - c;
                if (p === 0) continue;
                const h = p + 119;
                if (cv[h] & ov[m.type]) {
                    if (m.type === Ve) {
                        if (p > 0 && m.color === lt || p <= 0 && m.color === Mt) if (s) o.push(Fe(f));
                        else return !0;
                        continue;
                    }
                    if (m.type === "n" || m.type === "k") if (s) {
                        o.push(Fe(f));
                        continue;
                    } else return !0;
                    const v = sv[h];
                    let g = f + v, E = !1;
                    for(; g !== c;){
                        if (this._board[g] != null) {
                            E = !0;
                            break;
                        }
                        g += v;
                    }
                    if (!E) if (s) {
                        o.push(Fe(f));
                        continue;
                    } else return !0;
                }
            }
            return s ? o : !1;
        }
        attackers(i, c) {
            return c ? this._attacked(c, ue[i], !0) : this._attacked(this._turn, ue[i], !0);
        }
        _isKingAttacked(i) {
            const c = this._kings[i];
            return c === -1 ? !1 : this._attacked(Za(i), c);
        }
        isAttacked(i, c) {
            return this._attacked(c, ue[i]);
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
            for(let f = ue.a8; f <= ue.h1; f++){
                if (o = (o + 1) % 2, f & 136) {
                    f += 7;
                    continue;
                }
                const m = this._board[f];
                m && (i[m.type] = m.type in i ? i[m.type] + 1 : 1, m.type === Oi && c.push(o), s++);
            }
            if (s === 2) return !0;
            if (s === 3 && (i[Oi] === 1 || i[ps] === 1)) return !0;
            if (s === i[Oi] + 2) {
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
            return i ? o.map((f)=>new _i(this, f)) : o.map((f)=>this._moveToSan(f, o));
        }
        _moves({ legal: i = !0, piece: c = void 0, square: s = void 0 } = {}) {
            const o = s ? s.toLowerCase() : void 0, f = c?.toLowerCase(), m = [], p = this._turn, h = Za(p);
            let v = ue.a8, g = ue.h1, E = !1;
            if (o) if (o in ue) v = g = ue[o], E = !0;
            else return [];
            for(let T = v; T <= g; T++){
                if (T & 136) {
                    T += 7;
                    continue;
                }
                if (!this._board[T] || this._board[T].color === h) continue;
                const { type: N } = this._board[T];
                let C;
                if (N === Ve) {
                    if (f && f !== N) continue;
                    C = T + rs[p][0], this._board[C] || (Bl(m, p, T, C, Ve), C = T + rs[p][1], yv[p] === ln(T) && !this._board[C] && Bl(m, p, T, C, Ve, void 0, ce.BIG_PAWN));
                    for(let z = 2; z < 4; z++)C = T + rs[p][z], !(C & 136) && (this._board[C]?.color === h ? Bl(m, p, T, C, Ve, this._board[C].type, ce.CAPTURE) : C === this._epSquare && Bl(m, p, T, C, Ve, Ve, ce.EP_CAPTURE));
                } else {
                    if (f && f !== N) continue;
                    for(let z = 0, w = Vh[N].length; z < w; z++){
                        const L = Vh[N][z];
                        for(C = T; C += L, !(C & 136);){
                            if (!this._board[C]) Bl(m, p, T, C, N);
                            else {
                                if (this._board[C].color === p) break;
                                Bl(m, p, T, C, N, this._board[C].type, ce.CAPTURE);
                                break;
                            }
                            if (N === ps || N === ke) break;
                        }
                    }
                }
            }
            if ((f === void 0 || f === ke) && (!E || g === this._kings[p])) {
                if (this._castling[p] & ce.KSIDE_CASTLE) {
                    const T = this._kings[p], N = T + 2;
                    !this._board[T + 1] && !this._board[N] && !this._attacked(h, this._kings[p]) && !this._attacked(h, T + 1) && !this._attacked(h, N) && Bl(m, p, this._kings[p], N, ke, void 0, ce.KSIDE_CASTLE);
                }
                if (this._castling[p] & ce.QSIDE_CASTLE) {
                    const T = this._kings[p], N = T - 2;
                    !this._board[T - 1] && !this._board[T - 2] && !this._board[T - 3] && !this._attacked(h, this._kings[p]) && !this._attacked(h, T - 1) && !this._attacked(h, N) && Bl(m, p, this._kings[p], N, ke, void 0, ce.QSIDE_CASTLE);
                }
            }
            if (!i || this._kings[p] === -1) return m;
            const b = [];
            for(let T = 0, N = m.length; T < N; T++)this._makeMove(m[T]), this._isKingAttacked(p) || b.push(m[T]), this._undoMove();
            return b;
        }
        move(i, { strict: c = !1 } = {}) {
            let s = null;
            if (typeof i == "string") s = this._moveFromSan(i, c);
            else if (typeof i == "object") {
                const f = this._moves();
                for(let m = 0, p = f.length; m < p; m++)if (i.from === Fe(f[m].from) && i.to === Fe(f[m].to) && (!("promotion" in f[m]) || i.promotion === f[m].promotion)) {
                    s = f[m];
                    break;
                }
            }
            if (!s) throw typeof i == "string" ? new Error(`Invalid move: ${i}`) : new Error(`Invalid move: ${JSON.stringify(i)}`);
            const o = new _i(this, s);
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
            if (this._push(i), this._board[i.to] = this._board[i.from], delete this._board[i.from], i.flags & ce.EP_CAPTURE && (this._turn === Mt ? delete this._board[i.to - 16] : delete this._board[i.to + 16]), i.promotion && (this._board[i.to] = {
                type: i.promotion,
                color: c
            }), this._board[i.to].type === ke) {
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
                for(let o = 0, f = Dl[c].length; o < f; o++)if (i.from === Dl[c][o].square && this._castling[c] & Dl[c][o].flag) {
                    this._castling[c] ^= Dl[c][o].flag;
                    break;
                }
            }
            if (this._castling[s]) {
                for(let o = 0, f = Dl[s].length; o < f; o++)if (i.to === Dl[s][o].square && this._castling[s] & Dl[s][o].flag) {
                    this._castling[s] ^= Dl[s][o].flag;
                    break;
                }
            }
            i.flags & ce.BIG_PAWN ? c === Mt ? this._epSquare = i.to - 16 : this._epSquare = i.to + 16 : this._epSquare = st, i.piece === Ve ? this._halfMoves = 0 : i.flags & (ce.CAPTURE | ce.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, c === Mt && this._moveNumber++, this._turn = s;
        }
        undo() {
            const i = this._undoMove();
            if (i) {
                const c = new _i(this, i);
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
                s === Mt ? f = c.to - 16 : f = c.to + 16, this._board[f] = {
                    type: Ve,
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
            for(const b in this._header)this._header[b] && s.push(`[${b} "${this._header[b]}"]` + i), o = !0;
            o && this._history.length && s.push(i);
            const f = (b)=>{
                const T = this._comments[this.fen()];
                if (typeof T < "u") {
                    const N = b.length > 0 ? " " : "";
                    b = `${b}${N}{${T}}`;
                }
                return b;
            }, m = [];
            for(; this._history.length > 0;)m.push(this._undoMove());
            const p = [];
            let h = "";
            for(m.length === 0 && p.push(f("")); m.length > 0;){
                h = f(h);
                const b = m.pop();
                if (!b) break;
                if (!this._history.length && b.color === "b") {
                    const T = `${this._moveNumber}. ...`;
                    h = h ? `${h} ${T}` : T;
                } else b.color === "w" && (h.length && p.push(h), h = this._moveNumber + ".");
                h = h + " " + this._moveToSan(b, this._moves({
                    legal: !0
                })), this._makeMove(b);
            }
            if (h.length && p.push(f(h)), p.push(this._header.Result || "*"), c === 0) return s.join("") + p.join(" ");
            const v = function() {
                return s.length > 0 && s[s.length - 1] === " " ? (s.pop(), !0) : !1;
            }, g = function(b, T) {
                for (const N of T.split(" "))if (N) {
                    if (b + N.length > c) {
                        for(; v();)b--;
                        s.push(i), b = 0;
                    }
                    s.push(N), b += N.length, s.push(" "), b++;
                }
                return v() && b--, b;
            };
            let E = 0;
            for(let b = 0; b < p.length; b++){
                if (E + p[b].length > c && p[b].includes("{")) {
                    E = g(E, p[b]);
                    continue;
                }
                E + p[b].length > c && b !== 0 ? (s[s.length - 1] === " " && s.pop(), s.push(i), E = 0) : b !== 0 && (s.push(" "), E++), s.push(p[b]), E += p[b].length;
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
            function o(k) {
                return k.replace(/\\/g, "\\");
            }
            function f(k) {
                const G = {}, K = k.split(new RegExp(o(s)));
                let J = "", V = "";
                for(let F = 0; F < K.length; F++){
                    const I = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    J = K[F].replace(I, "$1"), V = K[F].replace(I, "$2"), J.trim().length > 0 && (G[J] = V);
                }
                return G;
            }
            i = i.trim();
            const p = new RegExp("^(\\[((?:" + o(s) + ")|.)*\\])((?:\\s*" + o(s) + "){2}|(?:\\s*" + o(s) + ")*$)").exec(i), h = p && p.length >= 2 ? p[1] : "";
            this.reset();
            const v = f(h);
            let g = "";
            for(const k in v)k.toLowerCase() === "fen" && (g = v[k]), this.header(k, v[k]);
            if (!c) g && this.load(g, {
                preserveHeaders: !0
            });
            else if (v.SetUp === "1") {
                if (!("FEN" in v)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
                this.load(v.FEN, {
                    preserveHeaders: !0
                });
            }
            function E(k) {
                return Array.from(k).map(function(G) {
                    return G.charCodeAt(0) < 128 ? G.charCodeAt(0).toString(16) : encodeURIComponent(G).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function b(k) {
                return k.length == 0 ? "" : decodeURIComponent("%" + (k.match(/.{1,2}/g) || []).join("%"));
            }
            const T = function(k) {
                return k = k.replace(new RegExp(o(s), "g"), " "), `{${E(k.slice(1, k.length - 1))}}`;
            }, N = function(k) {
                if (k.startsWith("{") && k.endsWith("}")) return b(k.slice(1, k.length - 1));
            };
            let C = i.replace(h, "").replace(new RegExp(`({[^}]*})+?|;([^${o(s)}]*)`, "g"), function(k, G, K) {
                return G !== void 0 ? T(G) : " " + T(`{${K.slice(1)}}`);
            }).replace(new RegExp(o(s), "g"), " ");
            const z = /(\([^()]+\))+?/g;
            for(; z.test(C);)C = C.replace(z, "");
            C = C.replace(/\d+\.(\.\.)?/g, ""), C = C.replace(/\.\.\./g, ""), C = C.replace(/\$\d+/g, "");
            let w = C.trim().split(new RegExp(/\s+/));
            w = w.filter((k)=>k !== "");
            let L = "";
            for(let k = 0; k < w.length; k++){
                const G = N(w[k]);
                if (G !== void 0) {
                    this._comments[this.fen()] = G;
                    continue;
                }
                const K = this._moveFromSan(w[k], c);
                if (K == null) if (vv.indexOf(w[k]) > -1) L = w[k];
                else throw new Error(`Invalid move in PGN: ${w[k]}`);
                else L = "", this._makeMove(K), this._incPositionCount(this.fen());
            }
            L && Object.keys(this._header).length && this._header.Result !== L && this.setHeader("Result", L);
        }
        _moveToSan(i, c) {
            let s = "";
            if (i.flags & ce.KSIDE_CASTLE) s = "O-O";
            else if (i.flags & ce.QSIDE_CASTLE) s = "O-O-O";
            else {
                if (i.piece !== Ve) {
                    const o = bv(i, c);
                    s += i.piece.toUpperCase() + o;
                }
                i.flags & (ce.CAPTURE | ce.EP_CAPTURE) && (i.piece === Ve && (s += Fe(i.from)[0]), s += "x"), s += Fe(i.to), i.promotion && (s += "=" + i.promotion.toUpperCase());
            }
            return this._makeMove(i), this.isCheck() && (this.isCheckmate() ? s += "#" : s += "+"), this._undoMove(), s;
        }
        _moveFromSan(i, c = !1) {
            const s = cs(i);
            let o = Zh(s), f = this._moves({
                legal: !0,
                piece: o
            });
            for(let b = 0, T = f.length; b < T; b++)if (s === cs(this._moveToSan(f[b], f))) return f[b];
            if (c) return null;
            let m, p, h, v, g, E = !1;
            if (p = s.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), p ? (m = p[1], h = p[2], v = p[3], g = p[4], h.length == 1 && (E = !0)) : (p = s.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), p && (m = p[1], h = p[2], v = p[3], g = p[4], h.length == 1 && (E = !0))), o = Zh(s), f = this._moves({
                legal: !0,
                piece: m || o
            }), !v) return null;
            for(let b = 0, T = f.length; b < T; b++)if (h) {
                if ((!m || m.toLowerCase() == f[b].piece) && ue[h] == f[b].from && ue[v] == f[b].to && (!g || g.toLowerCase() == f[b].promotion)) return f[b];
                if (E) {
                    const N = Fe(f[b].from);
                    if ((!m || m.toLowerCase() == f[b].piece) && ue[v] == f[b].to && (h == N[0] || h == N[1]) && (!g || g.toLowerCase() == f[b].promotion)) return f[b];
                }
            } else if (s === cs(this._moveToSan(f[b], f)).replace("x", "")) return f[b];
            return null;
        }
        ascii() {
            let i = `   +------------------------+
`;
            for(let c = ue.a8; c <= ue.h1; c++){
                if (tu(c) === 0 && (i += " " + "87654321"[ln(c)] + " |"), this._board[c]) {
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
            for(let s = ue.a8; s <= ue.h1; s++)this._board[s] == null ? c.push(null) : c.push({
                square: Fe(s),
                type: this._board[s].type,
                color: this._board[s].color
            }), s + 1 & 136 && (i.push(c), c = [], s += 8);
            return i;
        }
        squareColor(i) {
            if (i in ue) {
                const c = ue[i];
                return (ln(c) + tu(c)) % 2 === 0 ? "light" : "dark";
            }
            return null;
        }
        history({ verbose: i = !1 } = {}) {
            const c = [], s = [];
            for(; this._history.length > 0;)c.push(this._undoMove());
            for(;;){
                const o = c.pop();
                if (!o) break;
                i ? s.push(new _i(this, o)) : s.push(this._moveToSan(o, this._moves())), this._makeMove(o);
            }
            return s;
        }
        _getPositionCount(i) {
            const c = ss(i);
            return this._positionCount[c] || 0;
        }
        _incPositionCount(i) {
            const c = ss(i);
            this._positionCount[c] === void 0 && (this._positionCount[c] = 0), this._positionCount[c] += 1;
        }
        _decPositionCount(i) {
            const c = ss(i);
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
                ke,
                wl
            ])c[o] !== void 0 && (c[o] ? this._castling[i] |= Ti[o] : this._castling[i] &= ~Ti[o]);
            this._updateCastlingRights();
            const s = this.getCastlingRights(i);
            return (c[ke] === void 0 || c[ke] === s[ke]) && (c[wl] === void 0 || c[wl] === s[wl]);
        }
        getCastlingRights(i) {
            return {
                [ke]: (this._castling[i] & Ti[ke]) !== 0,
                [wl]: (this._castling[i] & Ti[wl]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let _p, Tp, Sv, Rp, Ev, Ap, _v, Tv, Op, $h, Rv, Np, xp, Mp, Av, Ov, Cp, Dp, Bp, wp, Rs, zp, Nv, xv, Mv, Cv, Dv, Bv, wv, zv, Uv, Pv, qv, jv, Up, Pp, qp, jp, Hp, kp, Lp, Qp, Kp, Gp, Yp, As, Jh, Fh, Hv, kv, Lv, Qv, Kv, Gv, Yv, Vv, Xv, Zv, Wh, $v, Jv, Fv, Wv, Iv, eg;
    _p = "MOVE_PIECE";
    Tp = "RESET_GAME";
    Sv = "LOAD_GAME";
    Rp = "SET_GAME_OVER";
    Ev = "SET_TIMER_DURATION";
    p2 = (u)=>({
            type: _p,
            payload: u
        });
    m2 = (u)=>({
            type: Tp,
            payload: u
        });
    y2 = (u, i)=>({
            type: Rp,
            payload: {
                isGameOver: u,
                gameResult: i
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
    _v = [
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
    Tv = {
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
        fen: _e.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: _e.TIMER_DURATION
    };
    Rv = (u = $h, i)=>{
        switch(i.type){
            case _p:
                try {
                    const c = new wi(u.fen), s = c.move({
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
            case Sv:
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
            case Ev:
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
    v2 = ()=>({
            type: Np
        });
    g2 = (u)=>({
            type: xp,
            payload: u
        });
    b2 = (u)=>({
            type: Mp,
            payload: u
        });
    Av = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    Ov = (u = Av, i)=>{
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
    Cp = "NEXT";
    Dp = "PREV";
    Bp = "START_POS";
    wp = "FINAL_POS";
    Rs = "LOAD_PGN";
    zp = "JUMP_TO_MOVE";
    Nv = "TOGGLE_ENGINE";
    xv = "DISABLE_ENGINE";
    S2 = ()=>({
            type: Bp
        });
    E2 = ()=>({
            type: Dp
        });
    _2 = ()=>({
            type: Cp
        });
    T2 = ()=>({
            type: wp
        });
    R2 = ({ finalPos: u, moves: i, fens: c, fromToSquares: s, termination: o, result: f, blackPlayerName: m, whitePlayerName: p })=>({
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
    A2 = (u)=>({
            type: zp,
            payload: u
        });
    Mv = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    Cv = (u = Mv, i)=>{
        switch(i.type){
            case Cp:
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
            case zp:
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
            case Nv:
                return {
                    ...u,
                    engineEnabled: !u.engineEnabled
                };
            case xv:
                return {
                    ...u,
                    engineEnabled: !1
                };
            default:
                return u;
        }
    };
    Dv = {
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
    Bv = (u = Dv, i)=>{
        switch(i.type){
            case Rs:
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
    wv = "TOGGLE_ENGINE";
    zv = "SET_MULTIPV";
    Uv = "SET_MAX_DEPTH";
    Pv = "SET_AUTO_STOP_TIME";
    qv = {
        enabled: !1,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    jv = (u = qv, i)=>{
        switch(i.type){
            case wv:
                return {
                    ...u,
                    enabled: !u.enabled
                };
            case zv:
                return {
                    ...u,
                    multiPV: i.payload
                };
            case Uv:
                return {
                    ...u,
                    maxDepth: i.payload
                };
            case Pv:
                return {
                    ...u,
                    autoStopTime: i.payload
                };
            default:
                return u;
        }
    };
    Up = "RESET_BOARD";
    Pp = "CLEAR_BOARD";
    qp = "FLIP_BOARD";
    jp = "SET_BOARD_WITH_FEN";
    Hp = "PUT_PIECE";
    kp = "REMOVE_PIECE";
    Lp = "MOVE_BOARD_PIECE";
    Qp = "TOGGLE_CASTLING_PIECE";
    Kp = "SET_PLAYER_TO_MOVE";
    Gp = "SET_SELECTED_ITEM";
    Yp = "DESELECT_ITEM";
    As = (u)=>({
            type: Gp,
            payload: {
                item: u
            }
        });
    Jh = ()=>({
            type: Yp
        });
    Fh = (u)=>({
            type: Kp,
            payload: {
                color: u
            }
        });
    Hv = ()=>({
            type: Up
        });
    kv = ()=>({
            type: Pp
        });
    Lv = ()=>({
            type: qp
        });
    Qv = (u)=>({
            type: jp,
            payload: {
                fen: u
            }
        });
    Kv = (u, i)=>({
            type: Hp,
            payload: {
                squareId: u,
                piece: i
            }
        });
    Gv = (u)=>({
            type: kp,
            payload: {
                squareId: u
            }
        });
    Yv = (u, i)=>({
            type: Lp,
            payload: {
                sourceSquareId: u,
                destSquareId: i
            }
        });
    Vv = (u)=>({
            type: Qp,
            payload: {
                flag: u
            }
        });
    Xv = (u)=>{
        const i = Op;
        try {
            const c = new wi;
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
    Zv = (u)=>u.split(" ")?.[1] === "w" ? "w" : "b";
    Wh = {
        board: {
            ...Tv
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
    $v = {
        board: {
            ...Op
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
    Jv = (u = Wh, i)=>{
        switch(i.type){
            case qp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case Up:
                return Wh;
            case Pp:
                return $v;
            case jp:
                return {
                    ...u,
                    board: {
                        ...Xv(i.payload.fen)
                    },
                    playerToMove: Zv(i.payload.fen)
                };
            case Hp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [i.payload.squareId]: i.payload.piece
                    }
                };
            case Lp:
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
            case kp:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [i.payload.squareId]: null
                    }
                };
            case Qp:
                return {
                    ...u,
                    castlingFlags: {
                        ...u.castlingFlags,
                        [i.payload.flag]: !u.castlingFlags[i.payload.flag]
                    }
                };
            case Kp:
                return {
                    ...u,
                    playerToMove: i.payload.color
                };
            case Gp:
                return {
                    ...u,
                    selectedItem: i.payload.item ?? null
                };
            case Yp:
                return {
                    ...u,
                    selectedItem: null
                };
            default:
                return u;
        }
    };
    Fv = fp({
        game: Rv,
        settings: Ov,
        analysis: Cv,
        pgn: Bv,
        engine: jv,
        boardeditor: Jv
    });
    Wv = {
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
    Iv = {
        key: "root",
        storage: Wv,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    eg = Iy(Iv, Fv);
    Vp = qy({
        reducer: eg,
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
    uv(Vp);
    const tg = "modulepreload", lg = function(u) {
        return "/chess-frontend/" + u;
    }, Ih = {}, Xp = function(i, c, s) {
        let o = Promise.resolve();
        if (c && c.length > 0) {
            document.getElementsByTagName("link");
            const m = document.querySelector("meta[property=csp-nonce]"), p = m?.nonce || m?.getAttribute("nonce");
            o = Promise.allSettled(c.map((h)=>{
                if (h = lg(h), h in Ih) return;
                Ih[h] = !0;
                const v = h.endsWith(".css"), g = v ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${h}"]${g}`)) return;
                const E = document.createElement("link");
                if (E.rel = v ? "stylesheet" : tg, v || (E.as = "script"), E.crossOrigin = "", E.href = h, p && E.setAttribute("nonce", p), document.head.appendChild(E), v) return new Promise((b, T)=>{
                    E.addEventListener("load", b), E.addEventListener("error", ()=>T(new Error(`Unable to preload CSS for ${h}`)));
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
    var $a = {}, ep;
    function ng() {
        if (ep) return $a;
        ep = 1, Object.defineProperty($a, "__esModule", {
            value: !0
        }), $a.parse = m, $a.serialize = v;
        const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, i = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, s = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, f = (()=>{
            const b = function() {};
            return b.prototype = Object.create(null), b;
        })();
        function m(b, T) {
            const N = new f, C = b.length;
            if (C < 2) return N;
            const z = T?.decode || g;
            let w = 0;
            do {
                const L = b.indexOf("=", w);
                if (L === -1) break;
                const k = b.indexOf(";", w), G = k === -1 ? C : k;
                if (L > G) {
                    w = b.lastIndexOf(";", L - 1) + 1;
                    continue;
                }
                const K = p(b, w, L), J = h(b, L, K), V = b.slice(K, J);
                if (N[V] === void 0) {
                    let F = p(b, L + 1, G), I = h(b, G, F);
                    const Ce = z(b.slice(F, I));
                    N[V] = Ce;
                }
                w = G + 1;
            }while (w < C);
            return N;
        }
        function p(b, T, N) {
            do {
                const C = b.charCodeAt(T);
                if (C !== 32 && C !== 9) return T;
            }while (++T < N);
            return N;
        }
        function h(b, T, N) {
            for(; T > N;){
                const C = b.charCodeAt(--T);
                if (C !== 32 && C !== 9) return T + 1;
            }
            return N;
        }
        function v(b, T, N) {
            const C = N?.encode || encodeURIComponent;
            if (!u.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
            const z = C(T);
            if (!i.test(z)) throw new TypeError(`argument val is invalid: ${T}`);
            let w = b + "=" + z;
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
                if (!E(N.expires) || !Number.isFinite(N.expires.valueOf())) throw new TypeError(`option expires is invalid: ${N.expires}`);
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
        function g(b) {
            if (b.indexOf("%") === -1) return b;
            try {
                return decodeURIComponent(b);
            } catch  {
                return b;
            }
        }
        function E(b) {
            return o.call(b) === "[object Date]";
        }
        return $a;
    }
    ng();
    var tp = "popstate";
    function ag(u = {}) {
        function i(o, f) {
            let { pathname: m = "/", search: p = "", hash: h = "" } = un(o.location.hash.substring(1));
            return !m.startsWith("/") && !m.startsWith(".") && (m = "/" + m), ys("", {
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
            return p + "#" + (typeof f == "string" ? f : lu(f));
        }
        function s(o, f) {
            wt(o.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`);
        }
        return ig(i, c, s, u);
    }
    function Me(u, i) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(i);
    }
    function wt(u, i) {
        if (!u) {
            typeof console < "u" && console.warn(i);
            try {
                throw new Error(i);
            } catch  {}
        }
    }
    function ug() {
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
            ...typeof i == "string" ? un(i) : i,
            state: c,
            key: i && i.key || s || ug()
        };
    }
    function lu({ pathname: u = "/", search: i = "", hash: c = "" }) {
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
    function ig(u, i, c, s = {}) {
        let { window: o = document.defaultView, v5Compat: f = !1 } = s, m = o.history, p = "POP", h = null, v = g();
        v == null && (v = 0, m.replaceState({
            ...m.state,
            idx: v
        }, ""));
        function g() {
            return (m.state || {
                idx: null
            }).idx;
        }
        function E() {
            p = "POP";
            let z = g(), w = z == null ? null : z - v;
            v = z, h && h({
                action: p,
                location: C.location,
                delta: w
            });
        }
        function b(z, w) {
            p = "PUSH";
            let L = ys(C.location, z, w);
            c && c(L, z), v = g() + 1;
            let k = lp(L, v), G = C.createHref(L);
            try {
                m.pushState(k, "", G);
            } catch (K) {
                if (K instanceof DOMException && K.name === "DataCloneError") throw K;
                o.location.assign(G);
            }
            f && h && h({
                action: p,
                location: C.location,
                delta: 1
            });
        }
        function T(z, w) {
            p = "REPLACE";
            let L = ys(C.location, z, w);
            c && c(L, z), v = g();
            let k = lp(L, v), G = C.createHref(L);
            m.replaceState(k, "", G), f && h && h({
                action: p,
                location: C.location,
                delta: 0
            });
        }
        function N(z) {
            let w = o.location.origin !== "null" ? o.location.origin : o.location.href, L = typeof z == "string" ? z : lu(z);
            return L = L.replace(/ $/, "%20"), Me(w, `No window.location.(origin|href) available to create URL for href: ${L}`), new URL(L, w);
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
                return o.addEventListener(tp, E), h = z, ()=>{
                    o.removeEventListener(tp, E), h = null;
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
            push: b,
            replace: T,
            go (z) {
                return m.go(z);
            }
        };
        return C;
    }
    function Zp(u, i, c = "/") {
        return rg(u, i, c, !1);
    }
    function rg(u, i, c, s) {
        let o = typeof i == "string" ? un(i) : i, f = al(o.pathname || "/", c);
        if (f == null) return null;
        let m = $p(u);
        cg(m);
        let p = null;
        for(let h = 0; p == null && h < m.length; ++h){
            let v = bg(f);
            p = vg(m[h], v, s);
        }
        return p;
    }
    function $p(u, i = [], c = [], s = "") {
        let o = (f, m, p)=>{
            let h = {
                relativePath: p === void 0 ? f.path || "" : p,
                caseSensitive: f.caseSensitive === !0,
                childrenIndex: m,
                route: f
            };
            h.relativePath.startsWith("/") && (Me(h.relativePath.startsWith(s), `Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(s.length));
            let v = nl([
                s,
                h.relativePath
            ]), g = c.concat(h);
            f.children && f.children.length > 0 && (Me(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`), $p(f.children, i, g, v)), !(f.path == null && !f.index) && i.push({
                path: v,
                score: mg(v, f.index),
                routesMeta: g
            });
        };
        return u.forEach((f, m)=>{
            if (f.path === "" || !f.path?.includes("?")) o(f, m);
            else for (let p of Jp(f.path))o(f, m, p);
        }), i;
    }
    function Jp(u) {
        let i = u.split("/");
        if (i.length === 0) return [];
        let [c, ...s] = i, o = c.endsWith("?"), f = c.replace(/\?$/, "");
        if (s.length === 0) return o ? [
            f,
            ""
        ] : [
            f
        ];
        let m = Jp(s.join("/")), p = [];
        return p.push(...m.map((h)=>h === "" ? f : [
                f,
                h
            ].join("/"))), o && p.push(...m), p.map((h)=>u.startsWith("/") && h === "" ? "/" : h);
    }
    function cg(u) {
        u.sort((i, c)=>i.score !== c.score ? c.score - i.score : yg(i.routesMeta.map((s)=>s.childrenIndex), c.routesMeta.map((s)=>s.childrenIndex)));
    }
    var sg = /^:[\w-]+$/, og = 3, fg = 2, dg = 1, hg = 10, pg = -2, np = (u)=>u === "*";
    function mg(u, i) {
        let c = u.split("/"), s = c.length;
        return c.some(np) && (s += pg), i && (s += fg), c.filter((o)=>!np(o)).reduce((o, f)=>o + (sg.test(f) ? og : f === "" ? dg : hg), s);
    }
    function yg(u, i) {
        return u.length === i.length && u.slice(0, -1).every((s, o)=>s === i[o]) ? u[u.length - 1] - i[i.length - 1] : 0;
    }
    function vg(u, i, c = !1) {
        let { routesMeta: s } = u, o = {}, f = "/", m = [];
        for(let p = 0; p < s.length; ++p){
            let h = s[p], v = p === s.length - 1, g = f === "/" ? i : i.slice(f.length) || "/", E = Di({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: v
            }, g), b = h.route;
            if (!E && v && c && !s[s.length - 1].route.index && (E = Di({
                path: h.relativePath,
                caseSensitive: h.caseSensitive,
                end: !1
            }, g)), !E) return null;
            Object.assign(o, E.params), m.push({
                params: o,
                pathname: nl([
                    f,
                    E.pathname
                ]),
                pathnameBase: Tg(nl([
                    f,
                    E.pathnameBase
                ])),
                route: b
            }), E.pathnameBase !== "/" && (f = nl([
                f,
                E.pathnameBase
            ]));
        }
        return m;
    }
    function Di(u, i) {
        typeof u == "string" && (u = {
            path: u,
            caseSensitive: !1,
            end: !0
        });
        let [c, s] = gg(u.path, u.caseSensitive, u.end), o = i.match(c);
        if (!o) return null;
        let f = o[0], m = f.replace(/(.)\/+$/, "$1"), p = o.slice(1);
        return {
            params: s.reduce((v, { paramName: g, isOptional: E }, b)=>{
                if (g === "*") {
                    let N = p[b] || "";
                    m = f.slice(0, f.length - N.length).replace(/(.)\/+$/, "$1");
                }
                const T = p[b];
                return E && !T ? v[g] = void 0 : v[g] = (T || "").replace(/%2F/g, "/"), v;
            }, {}),
            pathname: f,
            pathnameBase: m,
            pattern: u
        };
    }
    function gg(u, i = !1, c = !0) {
        wt(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`);
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
    function bg(u) {
        try {
            return u.split("/").map((i)=>decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
        } catch (i) {
            return wt(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`), u;
        }
    }
    function al(u, i) {
        if (i === "/") return u;
        if (!u.toLowerCase().startsWith(i.toLowerCase())) return null;
        let c = i.endsWith("/") ? i.length - 1 : i.length, s = u.charAt(c);
        return s && s !== "/" ? null : u.slice(c) || "/";
    }
    function Sg(u, i = "/") {
        let { pathname: c, search: s = "", hash: o = "" } = typeof u == "string" ? un(u) : u;
        return {
            pathname: c ? c.startsWith("/") ? c : Eg(c, i) : i,
            search: Rg(s),
            hash: Ag(o)
        };
    }
    function Eg(u, i) {
        let c = i.replace(/\/+$/, "").split("/");
        return u.split("/").forEach((o)=>{
            o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
        }), c.length > 1 ? c.join("/") : "/";
    }
    function os(u, i, c, s) {
        return `Cannot include a '${u}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function _g(u) {
        return u.filter((i, c)=>c === 0 || i.route.path && i.route.path.length > 0);
    }
    function Fp(u) {
        let i = _g(u);
        return i.map((c, s)=>s === i.length - 1 ? c.pathname : c.pathnameBase);
    }
    function Wp(u, i, c, s = !1) {
        let o;
        typeof u == "string" ? o = un(u) : (o = {
            ...u
        }, Me(!o.pathname || !o.pathname.includes("?"), os("?", "pathname", "search", o)), Me(!o.pathname || !o.pathname.includes("#"), os("#", "pathname", "hash", o)), Me(!o.search || !o.search.includes("#"), os("#", "search", "hash", o)));
        let f = u === "" || o.pathname === "", m = f ? "/" : o.pathname, p;
        if (m == null) p = c;
        else {
            let E = i.length - 1;
            if (!s && m.startsWith("..")) {
                let b = m.split("/");
                for(; b[0] === "..";)b.shift(), E -= 1;
                o.pathname = b.join("/");
            }
            p = E >= 0 ? i[E] : "/";
        }
        let h = Sg(o, p), v = m && m !== "/" && m.endsWith("/"), g = (f || m === ".") && c.endsWith("/");
        return !h.pathname.endsWith("/") && (v || g) && (h.pathname += "/"), h;
    }
    var nl = (u)=>u.join("/").replace(/\/\/+/g, "/"), Tg = (u)=>u.replace(/\/+$/, "").replace(/^\/*/, "/"), Rg = (u)=>!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, Ag = (u)=>!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
    function Og(u) {
        return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
    }
    var Ip = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(Ip);
    var Ng = [
        "GET",
        ...Ip
    ];
    new Set(Ng);
    var Zn = A.createContext(null);
    Zn.displayName = "DataRouter";
    var zi = A.createContext(null);
    zi.displayName = "DataRouterState";
    var em = A.createContext({
        isTransitioning: !1
    });
    em.displayName = "ViewTransition";
    var xg = A.createContext(new Map);
    xg.displayName = "Fetchers";
    var Mg = A.createContext(null);
    Mg.displayName = "Await";
    var kt = A.createContext(null);
    kt.displayName = "Navigation";
    var nu = A.createContext(null);
    nu.displayName = "Location";
    var ul = A.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    ul.displayName = "Route";
    var Os = A.createContext(null);
    Os.displayName = "RouteError";
    function Cg(u, { relative: i } = {}) {
        Me(au(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: c, navigator: s } = A.useContext(kt), { hash: o, pathname: f, search: m } = uu(u, {
            relative: i
        }), p = f;
        return c !== "/" && (p = f === "/" ? c : nl([
            c,
            f
        ])), s.createHref({
            pathname: p,
            search: m,
            hash: o
        });
    }
    function au() {
        return A.useContext(nu) != null;
    }
    function rn() {
        return Me(au(), "useLocation() may be used only in the context of a <Router> component."), A.useContext(nu).location;
    }
    var tm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function lm(u) {
        A.useContext(kt).static || A.useLayoutEffect(u);
    }
    function Dg() {
        let { isDataRoute: u } = A.useContext(ul);
        return u ? Gg() : Bg();
    }
    function Bg() {
        Me(au(), "useNavigate() may be used only in the context of a <Router> component.");
        let u = A.useContext(Zn), { basename: i, navigator: c } = A.useContext(kt), { matches: s } = A.useContext(ul), { pathname: o } = rn(), f = JSON.stringify(Fp(s)), m = A.useRef(!1);
        return lm(()=>{
            m.current = !0;
        }), A.useCallback((h, v = {})=>{
            if (wt(m.current, tm), !m.current) return;
            if (typeof h == "number") {
                c.go(h);
                return;
            }
            let g = Wp(h, JSON.parse(f), o, v.relative === "path");
            u == null && i !== "/" && (g.pathname = g.pathname === "/" ? i : nl([
                i,
                g.pathname
            ])), (v.replace ? c.replace : c.push)(g, v.state, v);
        }, [
            i,
            c,
            f,
            o,
            u
        ]);
    }
    A.createContext(null);
    function uu(u, { relative: i } = {}) {
        let { matches: c } = A.useContext(ul), { pathname: s } = rn(), o = JSON.stringify(Fp(c));
        return A.useMemo(()=>Wp(u, JSON.parse(o), s, i === "path"), [
            u,
            o,
            s,
            i
        ]);
    }
    function wg(u, i) {
        return nm(u, i);
    }
    function nm(u, i, c, s) {
        Me(au(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: f } = A.useContext(kt), { matches: m } = A.useContext(ul), p = m[m.length - 1], h = p ? p.params : {}, v = p ? p.pathname : "/", g = p ? p.pathnameBase : "/", E = p && p.route;
        {
            let L = E && E.path || "";
            am(v, !E || L.endsWith("*") || L.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`);
        }
        let b = rn(), T;
        if (i) {
            let L = typeof i == "string" ? un(i) : i;
            Me(g === "/" || L.pathname?.startsWith(g), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`), T = L;
        } else T = b;
        let N = T.pathname || "/", C = N;
        if (g !== "/") {
            let L = g.replace(/^\//, "").split("/");
            C = "/" + N.replace(/^\//, "").split("/").slice(L.length).join("/");
        }
        let z = !f && c && c.matches && c.matches.length > 0 ? c.matches : Zp(u, {
            pathname: C
        });
        wt(E || z != null, `No routes matched location "${T.pathname}${T.search}${T.hash}" `), wt(z == null || z[z.length - 1].route.element !== void 0 || z[z.length - 1].route.Component !== void 0 || z[z.length - 1].route.lazy !== void 0, `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let w = jg(z && z.map((L)=>Object.assign({}, L, {
                params: Object.assign({}, h, L.params),
                pathname: nl([
                    g,
                    o.encodeLocation ? o.encodeLocation(L.pathname).pathname : L.pathname
                ]),
                pathnameBase: L.pathnameBase === "/" ? g : nl([
                    g,
                    o.encodeLocation ? o.encodeLocation(L.pathnameBase).pathname : L.pathnameBase
                ])
            })), m, c, s);
        return i && w ? A.createElement(nu.Provider, {
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
        }, w) : w;
    }
    function zg() {
        let u = Kg(), i = Og(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, s = "rgba(200,200,200, 0.5)", o = {
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
    var Ug = A.createElement(zg, null), Pg = class extends A.Component {
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
            return this.state.error !== void 0 ? A.createElement(ul.Provider, {
                value: this.props.routeContext
            }, A.createElement(Os.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function qg({ routeContext: u, match: i, children: c }) {
        let s = A.useContext(Zn);
        return s && s.static && s.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = i.route.id), A.createElement(ul.Provider, {
            value: u
        }, c);
    }
    function jg(u, i = [], c = null, s = null) {
        if (u == null) {
            if (!c) return null;
            if (c.errors) u = c.matches;
            else if (i.length === 0 && !c.initialized && c.matches.length > 0) u = c.matches;
            else return null;
        }
        let o = u, f = c?.errors;
        if (f != null) {
            let h = o.findIndex((v)=>v.route.id && f?.[v.route.id] !== void 0);
            Me(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`), o = o.slice(0, Math.min(o.length, h + 1));
        }
        let m = !1, p = -1;
        if (c) for(let h = 0; h < o.length; h++){
            let v = o[h];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (p = h), v.route.id) {
                let { loaderData: g, errors: E } = c, b = v.route.loader && !g.hasOwnProperty(v.route.id) && (!E || E[v.route.id] === void 0);
                if (v.route.lazy || b) {
                    m = !0, p >= 0 ? o = o.slice(0, p + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((h, v, g)=>{
            let E, b = !1, T = null, N = null;
            c && (E = f && v.route.id ? f[v.route.id] : void 0, T = v.route.errorElement || Ug, m && (p < 0 && g === 0 ? (am("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), b = !0, N = null) : p === g && (b = !0, N = v.route.hydrateFallbackElement || null)));
            let C = i.concat(o.slice(0, g + 1)), z = ()=>{
                let w;
                return E ? w = T : b ? w = N : v.route.Component ? w = A.createElement(v.route.Component, null) : v.route.element ? w = v.route.element : w = h, A.createElement(qg, {
                    match: v,
                    routeContext: {
                        outlet: h,
                        matches: C,
                        isDataRoute: c != null
                    },
                    children: w
                });
            };
            return c && (v.route.ErrorBoundary || v.route.errorElement || g === 0) ? A.createElement(Pg, {
                location: c.location,
                revalidation: c.revalidation,
                component: T,
                error: E,
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
    function Hg(u) {
        let i = A.useContext(Zn);
        return Me(i, Ns(u)), i;
    }
    function kg(u) {
        let i = A.useContext(zi);
        return Me(i, Ns(u)), i;
    }
    function Lg(u) {
        let i = A.useContext(ul);
        return Me(i, Ns(u)), i;
    }
    function xs(u) {
        let i = Lg(u), c = i.matches[i.matches.length - 1];
        return Me(c.route.id, `${u} can only be used on routes that contain a unique "id"`), c.route.id;
    }
    function Qg() {
        return xs("useRouteId");
    }
    function Kg() {
        let u = A.useContext(Os), i = kg("useRouteError"), c = xs("useRouteError");
        return u !== void 0 ? u : i.errors?.[c];
    }
    function Gg() {
        let { router: u } = Hg("useNavigate"), i = xs("useNavigate"), c = A.useRef(!1);
        return lm(()=>{
            c.current = !0;
        }), A.useCallback(async (o, f = {})=>{
            wt(c.current, tm), c.current && (typeof o == "number" ? u.navigate(o) : await u.navigate(o, {
                fromRouteId: i,
                ...f
            }));
        }, [
            u,
            i
        ]);
    }
    var ap = {};
    function am(u, i, c) {
        !i && !ap[u] && (ap[u] = !0, wt(!1, c));
    }
    A.memo(Yg);
    function Yg({ routes: u, future: i, state: c }) {
        return nm(u, void 0, c, i);
    }
    function Ia(u) {
        Me(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function Vg({ basename: u = "/", children: i = null, location: c, navigationType: s = "POP", navigator: o, static: f = !1 }) {
        Me(!au(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
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
        let { pathname: h = "/", search: v = "", hash: g = "", state: E = null, key: b = "default" } = c, T = A.useMemo(()=>{
            let N = al(h, m);
            return N == null ? null : {
                location: {
                    pathname: N,
                    search: v,
                    hash: g,
                    state: E,
                    key: b
                },
                navigationType: s
            };
        }, [
            m,
            h,
            v,
            g,
            E,
            b,
            s
        ]);
        return wt(T != null, `<Router basename="${m}"> is not able to match the URL "${h}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`), T == null ? null : A.createElement(kt.Provider, {
            value: p
        }, A.createElement(nu.Provider, {
            children: i,
            value: T
        }));
    }
    function Xg({ children: u, location: i }) {
        return wg(vs(u), i);
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
            Me(s.type === Ia, `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Me(!s.props.index || !s.props.children, "An index route cannot have child routes.");
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
    var Ni = "get", xi = "application/x-www-form-urlencoded";
    function Ui(u) {
        return u != null && typeof u.tagName == "string";
    }
    function Zg(u) {
        return Ui(u) && u.tagName.toLowerCase() === "button";
    }
    function $g(u) {
        return Ui(u) && u.tagName.toLowerCase() === "form";
    }
    function Jg(u) {
        return Ui(u) && u.tagName.toLowerCase() === "input";
    }
    function Fg(u) {
        return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
    }
    function Wg(u, i) {
        return u.button === 0 && (!i || i === "_self") && !Fg(u);
    }
    var Ri = null;
    function Ig() {
        if (Ri === null) try {
            new FormData(document.createElement("form"), 0), Ri = !1;
        } catch  {
            Ri = !0;
        }
        return Ri;
    }
    var eb = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function fs(u) {
        return u != null && !eb.has(u) ? (wt(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xi}"`), null) : u;
    }
    function tb(u, i) {
        let c, s, o, f, m;
        if ($g(u)) {
            let p = u.getAttribute("action");
            s = p ? al(p, i) : null, c = u.getAttribute("method") || Ni, o = fs(u.getAttribute("enctype")) || xi, f = new FormData(u);
        } else if (Zg(u) || Jg(u) && (u.type === "submit" || u.type === "image")) {
            let p = u.form;
            if (p == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let h = u.getAttribute("formaction") || p.getAttribute("action");
            if (s = h ? al(h, i) : null, c = u.getAttribute("formmethod") || p.getAttribute("method") || Ni, o = fs(u.getAttribute("formenctype")) || fs(p.getAttribute("enctype")) || xi, f = new FormData(p, u), !Ig()) {
                let { name: v, type: g, value: E } = u;
                if (g === "image") {
                    let b = v ? `${v}.` : "";
                    f.append(`${b}x`, "0"), f.append(`${b}y`, "0");
                } else v && f.append(v, E);
            }
        } else {
            if (Ui(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            c = Ni, s = null, o = xi, m = u;
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
    async function lb(u, i) {
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
    function nb(u) {
        return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
    }
    async function ab(u, i, c) {
        let s = await Promise.all(u.map(async (o)=>{
            let f = i.routes[o.route.id];
            if (f) {
                let m = await lb(f, c);
                return m.links ? m.links() : [];
            }
            return [];
        }));
        return cb(s.flat(1).filter(nb).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function up(u, i, c, s, o, f) {
        let m = (h, v)=>c[v] ? h.route.id !== c[v].route.id : !0, p = (h, v)=>c[v].pathname !== h.pathname || c[v].route.path?.endsWith("*") && c[v].params["*"] !== h.params["*"];
        return f === "assets" ? i.filter((h, v)=>m(h, v) || p(h, v)) : f === "data" ? i.filter((h, v)=>{
            let g = s.routes[h.route.id];
            if (!g || !g.hasLoader) return !1;
            if (m(h, v) || p(h, v)) return !0;
            if (h.route.shouldRevalidate) {
                let E = h.route.shouldRevalidate({
                    currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                    currentParams: c[0]?.params || {},
                    nextUrl: new URL(u, window.origin),
                    nextParams: h.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof E == "boolean") return E;
            }
            return !0;
        }) : [];
    }
    function ub(u, i, { includeHydrateFallback: c } = {}) {
        return ib(u.map((s)=>{
            let o = i.routes[s.route.id];
            if (!o) return [];
            let f = [
                o.module
            ];
            return o.clientActionModule && (f = f.concat(o.clientActionModule)), o.clientLoaderModule && (f = f.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (f = f.concat(o.hydrateFallbackModule)), o.imports && (f = f.concat(o.imports)), f;
        }).flat(1));
    }
    function ib(u) {
        return [
            ...new Set(u)
        ];
    }
    function rb(u) {
        let i = {}, c = Object.keys(u).sort();
        for (let s of c)i[s] = u[s];
        return i;
    }
    function cb(u, i) {
        let c = new Set;
        return new Set(i), u.reduce((s, o)=>{
            let f = JSON.stringify(rb(o));
            return c.has(f) || (c.add(f), s.push({
                key: f,
                link: o
            })), s;
        }, []);
    }
    function sb(u, i) {
        let c = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
        return c.pathname === "/" ? c.pathname = "_root.data" : i && al(c.pathname, i) === "/" ? c.pathname = `${i.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
    }
    function um() {
        let u = A.useContext(Zn);
        return Ms(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
    }
    function ob() {
        let u = A.useContext(zi);
        return Ms(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
    }
    var Cs = A.createContext(void 0);
    Cs.displayName = "FrameworkContext";
    function im() {
        let u = A.useContext(Cs);
        return Ms(u, "You must render this element inside a <HydratedRouter> element"), u;
    }
    function fb(u, i) {
        let c = A.useContext(Cs), [s, o] = A.useState(!1), [f, m] = A.useState(!1), { onFocus: p, onBlur: h, onMouseEnter: v, onMouseLeave: g, onTouchStart: E } = i, b = A.useRef(null);
        A.useEffect(()=>{
            if (u === "render" && m(!0), u === "viewport") {
                let C = (w)=>{
                    w.forEach((L)=>{
                        m(L.isIntersecting);
                    });
                }, z = new IntersectionObserver(C, {
                    threshold: .5
                });
                return b.current && z.observe(b.current), ()=>{
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
        let T = ()=>{
            o(!0);
        }, N = ()=>{
            o(!1), m(!1);
        };
        return c ? u !== "intent" ? [
            f,
            b,
            {}
        ] : [
            f,
            b,
            {
                onFocus: Ja(p, T),
                onBlur: Ja(h, N),
                onMouseEnter: Ja(v, T),
                onMouseLeave: Ja(g, N),
                onTouchStart: Ja(E, T)
            }
        ] : [
            !1,
            b,
            {}
        ];
    }
    function Ja(u, i) {
        return (c)=>{
            u && u(c), c.defaultPrevented || i(c);
        };
    }
    function db({ page: u, ...i }) {
        let { router: c } = um(), s = A.useMemo(()=>Zp(c.routes, u, c.basename), [
            c.routes,
            u,
            c.basename
        ]);
        return s ? A.createElement(pb, {
            page: u,
            matches: s,
            ...i
        }) : null;
    }
    function hb(u) {
        let { manifest: i, routeModules: c } = im(), [s, o] = A.useState([]);
        return A.useEffect(()=>{
            let f = !1;
            return ab(u, i, c).then((m)=>{
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
    function pb({ page: u, matches: i, ...c }) {
        let s = rn(), { manifest: o, routeModules: f } = im(), { basename: m } = um(), { loaderData: p, matches: h } = ob(), v = A.useMemo(()=>up(u, i, h, o, s, "data"), [
            u,
            i,
            h,
            o,
            s
        ]), g = A.useMemo(()=>up(u, i, h, o, s, "assets"), [
            u,
            i,
            h,
            o,
            s
        ]), E = A.useMemo(()=>{
            if (u === s.pathname + s.search + s.hash) return [];
            let N = new Set, C = !1;
            if (i.forEach((w)=>{
                let L = o.routes[w.route.id];
                !L || !L.hasLoader || (!v.some((k)=>k.route.id === w.route.id) && w.route.id in p && f[w.route.id]?.shouldRevalidate || L.hasClientLoader ? C = !0 : N.add(w.route.id));
            }), N.size === 0) return [];
            let z = sb(u, m);
            return C && N.size > 0 && z.searchParams.set("_routes", i.filter((w)=>N.has(w.route.id)).map((w)=>w.route.id).join(",")), [
                z.pathname + z.search
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
        ]), b = A.useMemo(()=>ub(g, o), [
            g,
            o
        ]), T = hb(g);
        return A.createElement(A.Fragment, null, E.map((N)=>A.createElement("link", {
                key: N,
                rel: "prefetch",
                as: "fetch",
                href: N,
                ...c
            })), b.map((N)=>A.createElement("link", {
                key: N,
                rel: "modulepreload",
                href: N,
                ...c
            })), T.map(({ key: N, link: C })=>A.createElement("link", {
                key: N,
                ...C
            })));
    }
    function mb(...u) {
        return (i)=>{
            u.forEach((c)=>{
                typeof c == "function" ? c(i) : c != null && (c.current = i);
            });
        };
    }
    var rm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        rm && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function yb({ basename: u, children: i, window: c }) {
        let s = A.useRef();
        s.current == null && (s.current = ag({
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
        ]), A.createElement(Vg, {
            basename: u,
            children: i,
            location: f.location,
            navigationType: f.action,
            navigator: o
        });
    }
    var cm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, eu = A.forwardRef(function({ onClick: i, discover: c = "render", prefetch: s = "none", relative: o, reloadDocument: f, replace: m, state: p, target: h, to: v, preventScrollReset: g, viewTransition: E, ...b }, T) {
        let { basename: N } = A.useContext(kt), C = typeof v == "string" && cm.test(v), z, w = !1;
        if (typeof v == "string" && C && (z = v, rm)) try {
            let I = new URL(window.location.href), Ce = v.startsWith("//") ? new URL(I.protocol + v) : new URL(v), Le = al(Ce.pathname, N);
            Ce.origin === I.origin && Le != null ? v = Le + Ce.search + Ce.hash : w = !0;
        } catch  {
            wt(!1, `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let L = Cg(v, {
            relative: o
        }), [k, G, K] = fb(s, b), J = Sb(v, {
            replace: m,
            state: p,
            target: h,
            preventScrollReset: g,
            relative: o,
            viewTransition: E
        });
        function V(I) {
            i && i(I), I.defaultPrevented || J(I);
        }
        let F = A.createElement("a", {
            ...b,
            ...K,
            href: z || L,
            onClick: w || f ? i : V,
            ref: mb(T, G),
            target: h,
            "data-discover": !C && c === "render" ? "true" : void 0
        });
        return k && !C ? A.createElement(A.Fragment, null, F, A.createElement(db, {
            page: L
        })) : F;
    });
    eu.displayName = "Link";
    var vb = A.forwardRef(function({ "aria-current": i = "page", caseSensitive: c = !1, className: s = "", end: o = !1, style: f, to: m, viewTransition: p, children: h, ...v }, g) {
        let E = uu(m, {
            relative: v.relative
        }), b = rn(), T = A.useContext(zi), { navigator: N, basename: C } = A.useContext(kt), z = T != null && Ab(E) && p === !0, w = N.encodeLocation ? N.encodeLocation(E).pathname : E.pathname, L = b.pathname, k = T && T.navigation && T.navigation.location ? T.navigation.location.pathname : null;
        c || (L = L.toLowerCase(), k = k ? k.toLowerCase() : null, w = w.toLowerCase()), k && C && (k = al(k, C) || k);
        const G = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
        let K = L === w || !o && L.startsWith(w) && L.charAt(G) === "/", J = k != null && (k === w || !o && k.startsWith(w) && k.charAt(w.length) === "/"), V = {
            isActive: K,
            isPending: J,
            isTransitioning: z
        }, F = K ? i : void 0, I;
        typeof s == "function" ? I = s(V) : I = [
            s,
            K ? "active" : null,
            J ? "pending" : null,
            z ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let Ce = typeof f == "function" ? f(V) : f;
        return A.createElement(eu, {
            ...v,
            "aria-current": F,
            className: I,
            ref: g,
            style: Ce,
            to: m,
            viewTransition: p
        }, typeof h == "function" ? h(V) : h);
    });
    vb.displayName = "NavLink";
    var gb = A.forwardRef(({ discover: u = "render", fetcherKey: i, navigate: c, reloadDocument: s, replace: o, state: f, method: m = Ni, action: p, onSubmit: h, relative: v, preventScrollReset: g, viewTransition: E, ...b }, T)=>{
        let N = Tb(), C = Rb(p, {
            relative: v
        }), z = m.toLowerCase() === "get" ? "get" : "post", w = typeof p == "string" && cm.test(p), L = (k)=>{
            if (h && h(k), k.defaultPrevented) return;
            k.preventDefault();
            let G = k.nativeEvent.submitter, K = G?.getAttribute("formmethod") || m;
            N(G || k.currentTarget, {
                fetcherKey: i,
                method: K,
                navigate: c,
                replace: o,
                state: f,
                relative: v,
                preventScrollReset: g,
                viewTransition: E
            });
        };
        return A.createElement("form", {
            ref: T,
            method: z,
            action: C,
            onSubmit: s ? h : L,
            ...b,
            "data-discover": !w && u === "render" ? "true" : void 0
        });
    });
    gb.displayName = "Form";
    function bb(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function sm(u) {
        let i = A.useContext(Zn);
        return Me(i, bb(u)), i;
    }
    function Sb(u, { target: i, replace: c, state: s, preventScrollReset: o, relative: f, viewTransition: m } = {}) {
        let p = Dg(), h = rn(), v = uu(u, {
            relative: f
        });
        return A.useCallback((g)=>{
            if (Wg(g, i)) {
                g.preventDefault();
                let E = c !== void 0 ? c : lu(h) === lu(v);
                p(u, {
                    replace: E,
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
    var Eb = 0, _b = ()=>`__${String(++Eb)}__`;
    function Tb() {
        let { router: u } = sm("useSubmit"), { basename: i } = A.useContext(kt), c = Qg();
        return A.useCallback(async (s, o = {})=>{
            let { action: f, method: m, encType: p, formData: h, body: v } = tb(s, i);
            if (o.navigate === !1) {
                let g = o.fetcherKey || _b();
                await u.fetch(g, c, o.action || f, {
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
    function Rb(u, { relative: i } = {}) {
        let { basename: c } = A.useContext(kt), s = A.useContext(ul);
        Me(s, "useFormAction must be used inside a RouteContext");
        let [o] = s.matches.slice(-1), f = {
            ...uu(u || ".", {
                relative: i
            })
        }, m = rn();
        if (u == null) {
            f.search = m.search;
            let p = new URLSearchParams(f.search), h = p.getAll("index");
            if (h.some((g)=>g === "")) {
                p.delete("index"), h.filter((E)=>E).forEach((E)=>p.append("index", E));
                let g = p.toString();
                f.search = g ? `?${g}` : "";
            }
        }
        return (!u || u === ".") && o.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (f.pathname = f.pathname === "/" ? c : nl([
            c,
            f.pathname
        ])), lu(f);
    }
    function Ab(u, i = {}) {
        let c = A.useContext(em);
        Me(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: s } = sm("useViewTransitionState"), o = uu(u, {
            relative: i.relative
        });
        if (!c.isTransitioning) return !1;
        let f = al(c.currentLocation.pathname, s) || c.currentLocation.pathname, m = al(c.nextLocation.pathname, s) || c.nextLocation.pathname;
        return Di(o.pathname, m) != null || Di(o.pathname, f) != null;
    }
    new TextEncoder;
    const Ob = A.createContext(), Nb = ({ children: u })=>{
        const i = (g, E)=>{
            try {
                const b = localStorage.getItem(g);
                if (b == null) return E;
                const T = JSON.parse(b);
                return T !== void 0 ? T : E;
            } catch  {
                return E;
            }
        }, [c, s] = A.useState(()=>i(_e.THEME_KEY, _e.THEME)), [o, f] = A.useState(()=>i(_e.ENABLE_SOUND_KEY, _e.ENABLE_SOUND)), [m, p] = A.useState(()=>i(_e.TIMER_DURATION_KEY, _e.TIMER_DURATION)), [h, v] = A.useState(()=>i(_e.IS_FLIPPED_KEY, _e.IS_FLIPPED));
        return A.useEffect(()=>localStorage.setItem(_e.THEME_KEY, JSON.stringify(c)), [
            c
        ]), A.useEffect(()=>localStorage.setItem(_e.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), A.useEffect(()=>localStorage.setItem(_e.TIMER_DURATION_KEY, JSON.stringify(m)), [
            m
        ]), A.useEffect(()=>localStorage.setItem(_e.IS_FLIPPED_KEY, JSON.stringify(h)), [
            h
        ]), H.jsx(Ob.Provider, {
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
    xb = function(u, i = "lite", c = 8e3) {
        const s = A.useRef(null), o = A.useRef(null), f = A.useRef(null), m = A.useRef(null), p = A.useRef(!1), h = A.useRef([]), v = A.useRef(!0), g = A.useRef(!1), E = A.useRef(!1), b = A.useCallback(()=>{
            if (!(g.current || !s.current)) {
                for(g.current = !0; h.current.length > 0;){
                    const V = h.current.findIndex((I)=>I.type === "stop"), F = V >= 0 ? h.current.splice(V, 1)[0] : h.current.shift();
                    F && s.current.postMessage(F.cmd);
                }
                g.current = !1;
            }
        }, []), T = A.useCallback((V, F)=>{
            h.current.push({
                type: V,
                cmd: F
            }), b();
        }, [
            b
        ]), N = A.useCallback(()=>{
            s.current || (i === "lite" ? s.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : s.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), s.current.postMessage("uci"), console.log("Initializing worker ..."), s.current.onmessage = (V)=>{
                const F = V.data;
                if (u && u(F), typeof F == "string") {
                    if (F === "readyok" || F.startsWith("bestmove")) v.current = !0;
                    else if (F.startsWith("info") && F.includes("score")) {
                        const I = F.match(/score (cp|mate) (-?\d+)/);
                        if (I) {
                            const Ce = I[1], Le = parseInt(I[2], 10), Ue = Ce === "cp" ? Le / 100 : Le > 0 ? 10 : -10;
                            o.current && (o.current(Ue), o.current = null);
                        }
                    }
                }
            }, s.current.onerror = (V)=>{
                console.error("Error with Stockfish worker:", V);
            });
        }, [
            u,
            i
        ]), C = A.useCallback(()=>{
            s.current && s.current.terminate(), i === "lite" ? s.current = new Worker("/chess-frontend/stockfish/stockfish-17-lite-single.js") : s.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), s.current.postMessage("uci"), s.current.onmessage = (V)=>{
                const F = V.data;
                if (u && u(F), typeof F == "string") {
                    if (F === "readyok" || F.startsWith("bestmove")) v.current = !0;
                    else if (F.startsWith("info") && F.includes("score")) {
                        const I = F.match(/score (cp|mate) (-?\d+)/);
                        if (I) {
                            const Ce = I[1], Le = parseInt(I[2], 10), Ue = Ce === "cp" ? Le / 100 : Le > 0 ? 10 : -10;
                            o.current && (o.current(Ue), o.current = null);
                        }
                    }
                }
            }, s.current.onerror = (V)=>{
                console.error("Error with Stockfish worker:", V);
            };
        }, [
            u,
            i
        ]), z = A.useCallback((V)=>{
            s.current && T("normal", V);
        }, []), w = A.useCallback((V)=>{
            V.forEach((F)=>{
                T("normal", `setoption name ${F.name} value ${F.value}`);
            });
        }, [
            z
        ]), L = A.useCallback((V, F = [])=>{
            let I = `position fen ${V}`;
            if (F.length > 0) {
                const Ce = F.join(" ");
                I += ` moves ${Ce}`;
            }
            T("normal", I);
        }, [
            z
        ]), k = A.useCallback((V)=>{
            s.current && p.current && (T("stop", "stop"), p.current = !1, f.current && (clearTimeout(f.current), f.current = null));
        }, []), G = A.useCallback((V)=>{
            if (!E.current) {
                console.warn("Engine disabled. Search not started.");
                return;
            }
            s.current || N(), clearTimeout(f.current), k("pre startSearch"), m.current && clearTimeout(m.current), m.current = setTimeout(()=>{
                p.current = !0, T("normal", `position fen ${V}`), T("normal", "go infinite"), f.current = setTimeout(()=>{
                    k("startSearch timer expire");
                }, c);
            }, 50);
        }, [
            c,
            k
        ]), K = A.useCallback(()=>{
            s.current && (s.current.terminate(), s.current = null), p.current = !1, v.current = !0, f.current && (clearTimeout(f.current), f.current = null);
        }, []), J = A.useCallback((V)=>{
            E.current = V, V || (k("permission revoked"), K());
        }, [
            k,
            K
        ]);
        return A.useEffect(()=>()=>{
                K();
            }, []), {
            initEngine: C,
            setOptions: w,
            setFen: L,
            startSearch: G,
            stopSearch: k,
            terminateEngine: K,
            syncEnabledState: J
        };
    };
    let om, ds, Db, gs, fm;
    om = A.createContext();
    Mb = ()=>A.useContext(om);
    ds = ({ children: u })=>{
        const i = A.useRef(null), c = A.useCallback((f)=>{
            i.current && i.current(f);
        }, []), s = xb(c), o = A.useCallback((f)=>{
            i.current = f;
        }, []);
        return H.jsx(om.Provider, {
            value: {
                ...s,
                setOnMessage: o
            },
            children: u
        });
    };
    Cb = ()=>{
        const [u, i] = A.useState(document.body.classList.contains("dark-theme")), c = ()=>{
            document.body.classList.toggle("dark-theme"), i(!u);
        }, s = ()=>{
            const f = new Date().getHours();
            return f < 6 || f > 18;
        };
        return A.useEffect(()=>{
            s() != u && c();
        }, []), H.jsx("button", {
            onClick: c,
            className: "theme-toggle-btn",
            children: u ? "☀️" : "🌙"
        });
    };
    Db = nn.memo(({ onSubmit: u })=>{
        const [i, c] = A.useState(!1), [s, o] = A.useState(""), f = ()=>c(!0), m = ()=>{
            c(!1), o("");
        }, p = (v)=>{
            v.target.classList.contains("fen-popup-overlay") && m();
        }, h = (v)=>{
            v.preventDefault(), u(s), m();
        };
        return H.jsxs(H.Fragment, {
            children: [
                H.jsx("button", {
                    className: "action-button",
                    onClick: f,
                    children: "Set FEN"
                }),
                i && H.jsx("div", {
                    className: "fen-popup-overlay",
                    onClick: p,
                    children: H.jsxs("div", {
                        className: "fen-popup",
                        children: [
                            H.jsx("h5", {
                                children: "Setup board from FEN "
                            }),
                            H.jsx("button", {
                                className: "fen-close",
                                onClick: m,
                                children: "×"
                            }),
                            H.jsxs("form", {
                                onSubmit: h,
                                className: "fen-input-form",
                                children: [
                                    H.jsx("input", {
                                        type: "text",
                                        value: s,
                                        onChange: (v)=>o(v.target.value),
                                        placeholder: "Enter FEN",
                                        className: "fen-input"
                                    }),
                                    H.jsx("div", {
                                        className: "fen-actions",
                                        children: H.jsx("button", {
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
    fm = {
        current: ""
    };
    function Bb(u) {
        fm.current = u, gs.forEach((i)=>i(u));
    }
    function wb() {
        const [u, i] = A.useState(fm.current);
        return A.useEffect(()=>{
            const c = (s)=>i(s);
            return gs.add(c), ()=>{
                gs.delete(c);
            };
        }, []), u;
    }
    function zb({ component: u, message: i }) {
        const [c, s] = A.useState(!1), o = ()=>{
            s(!0), setTimeout(()=>s(!1), 2e3);
        };
        return H.jsxs("div", {
            className: "toast-wrapper",
            children: [
                H.jsx("button", {
                    onClick: o,
                    className: "toast-button",
                    children: u
                }),
                c && H.jsx("div", {
                    className: "toast-message",
                    children: i
                })
            ]
        });
    }
    const Ub = nn.memo(({ isValid: u, fenErrorMsg: i })=>{
        const c = wb(), s = ()=>{
            navigator.clipboard.writeText(c), alert("FEN copied to clipboard!");
        };
        return H.jsxs("div", {
            className: "fen-container",
            children: [
                H.jsx("div", {
                    id: "fen-display",
                    className: "fen-display",
                    children: c
                }),
                u ? H.jsx("div", {
                    className: "circle-tick",
                    children: "✔"
                }) : H.jsx(zb, {
                    component: H.jsx("div", {
                        className: "circle-cross",
                        children: "✖"
                    }),
                    message: i
                }),
                H.jsx("button", {
                    onClick: s,
                    className: "copy-button",
                    children: H.jsxs("svg", {
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
                            H.jsx("rect", {
                                x: "3",
                                y: "3",
                                width: "14",
                                height: "14",
                                rx: "2",
                                ry: "2",
                                fill: "#f5f5f5",
                                stroke: "#333333"
                            }),
                            H.jsx("rect", {
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
    }), Pb = (u)=>{
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
        for(let b = 0; b < 8; b++){
            const T = o[b];
            let N = 0;
            for(let C = 0; C < T.length; C++){
                const z = Number(T[C]);
                switch(N += isNaN(z) ? 1 : z, T[C]){
                    case "k":
                        b === 0 && N === 5 && p.set("e8", T[C]), f += 1;
                        break;
                    case "K":
                        b === 7 && N === 5 && p.set("e1", T[C]), m += 1;
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
                        b === 0 && C === 0 ? p.set("a8", T[C]) : b === 0 && C === T.length - 1 && p.set("h8", T[C]);
                        break;
                    case "R":
                        b === 7 && C === 0 ? p.set("a1", T[C]) : b === 7 && C === T.length - 1 && p.set("h1", T[C]);
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
        for(let b = 0; b < s.length; b++)switch(s[b]){
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
        const h = c[1], v = qb(u);
        return new wi(v).inCheck() ? {
            isValid: !1,
            msg: `${h === "w" ? "white" : "black"} to move but ${h === "w" ? "black" : "white"} was already in check and did not defend king`
        } : {
            isValid: !0,
            msg: ""
        };
    };
    function qb(u) {
        const i = u.split(" ");
        return i[1] = i[1] === "w" ? "b" : "w", i.join(" ");
    }
    const dm = (u, i)=>{
        u.dataTransfer.setData("text", i);
    }, jb = (u, i, c, s)=>{
        i != null && c == null && s({
            category: _e.BOARD_PIECE,
            id: `${u}-${i.color}-${i.type}`,
            chessPiece: i
        });
    }, Hb = ({ newSelectedItem: u, selectedItem: i, setSelectedItem: c })=>{
        if (i == null) {
            c(u);
            return;
        }
        if (u.id === i.id) {
            c(null);
            return;
        }
        i.category === _e.BOARD_PIECE ? u.category === _e.PALLETE_ITEM && c(u) : i.category === _e.PALLETE_ITEM && u.category === _e.PALLETE_ITEM && c(u);
    }, ip = {
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
    }, Lb = nn.memo(({ handleDragStart: u, handlePaletteClick: i })=>{
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
            f(As(p));
        };
        return H.jsxs("div", {
            className: "palette",
            children: [
                s.map((p)=>c.map((h)=>H.jsx("img", {
                            id: `palette-${p}-${h}`,
                            src: `pieces/svg/${p}_${kb[h]}.svg`,
                            alt: `${p} ${h}`,
                            draggable: !0,
                            "data-type": h,
                            "data-color": p,
                            "data-square": "palette",
                            onClick: ()=>{
                                i({
                                    newSelectedItem: {
                                        category: _e.PALLETE_ITEM,
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
                H.jsx("img", {
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
    }), Qb = (u, i)=>{
        let c = "", s = 0;
        for(let o = 0; o < 8; o++){
            const f = u[i[o]];
            f == null && s++, f != null ? (s > 0 && (c += `${s}`), s = 0, c += f.color === "w" ? f.type?.toUpperCase() : f.type) : o == 7 && s > 0 && (c += `${s}`);
        }
        return c;
    }, Kb = ({ board: u, playerToMove: i, halfmoveClock: c = 0, fullmoveNumber: s = 1, whiteKingSide: o, whiteQueenSide: f, blackKingSide: m, blackQueenSide: p })=>{
        const h = "-";
        let v = "";
        const g = (o ? "K" : "") + (f ? "Q" : "") + (m ? "k" : "") + (p ? "q" : ""), E = Ap.map((b)=>Qb(u, b));
        return v += E.join("/"), v += ` ${i} ${g === "" ? "-" : g} ${h} ${c} ${s}`, v;
    }, Gb = (u)=>{
        u.preventDefault();
    }, Yb = ({ squareId: u, squarePiece: i, selectedItem: c, setSelectedItem: s, removePiece: o, putPiece: f, makeMove: m })=>{
        if (!c) {
            i != null && s({
                category: _e.BOARD_PIECE,
                id: `${u}-${i.color}-${i.type}`,
                chessPiece: i
            });
            return;
        }
        if (i != null && c.id === `${u}-${i.color}-${i.type}`) {
            s(null);
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
            f(u, c.chessPiece);
            return;
        }
        if (c.category === _e.BOARD_PIECE) {
            const p = c.id.split("-")[0];
            m(p, u), s(null);
        }
    }, Vb = (u, i, c)=>{
        u.preventDefault();
        const s = u.dataTransfer.getData("text"), o = document.getElementById(s);
        if (!o) return;
        const f = o.dataset.square;
        c(f, i);
    }, Xb = nn.memo(({ piece: u, squareId: i, handleDragStart: c, handleBoardPieceClick: s })=>{
        const o = an((h)=>h.boardeditor.selectedItem), f = Xn();
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
        return H.jsx("img", {
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
    }), Zb = (u)=>{
        const i = u[0].charCodeAt(0) - 97, c = u[1].charCodeAt(0) - 49;
        return (i + c) % 2 === 0 ? "dark" : "light";
    }, $b = nn.memo(({ showRankLabel: u, showFileLabel: i, squareId: c, squarePiece: s, handleSquareClick: o, handleDrop: f, allowDrop: m, handleDragStart: p, handleBoardPieceClick: h })=>{
        const v = an((C)=>C.boardeditor.selectedItem), g = Xn(), E = (C)=>{
            g(As(C));
        }, b = (C)=>{
            g(Gv(C));
        }, T = (C, z)=>{
            g(Kv(C, z));
        }, N = (C, z)=>{
            g(Yv(C, z));
        };
        return H.jsxs("div", {
            id: c,
            className: `square ${Zb(c)}`,
            onDragOver: m,
            onClick: ()=>o({
                    squareId: c,
                    squarePiece: s,
                    selectedItem: v,
                    setSelectedItem: E,
                    removePiece: b,
                    putPiece: T,
                    makeMove: N
                }),
            onDrop: (C)=>f(C, c, N),
            children: [
                u && H.jsx("div", {
                    className: "rank-label",
                    children: c[1]
                }),
                i && H.jsx("div", {
                    className: "file-label",
                    children: c[0]
                }),
                s && H.jsx(Xb, {
                    piece: s,
                    squareId: c,
                    handleDragStart: p,
                    handleBoardPieceClick: h
                })
            ]
        });
    }), Jb = nn.memo(({ isFlipped: u })=>{
        const i = u ? _v : Ap, c = an((s)=>s.boardeditor.board);
        return H.jsx("div", {
            id: "chessboard",
            children: i.map((s, o)=>s.map((f, m)=>H.jsx($b, {
                        showRankLabel: m === 0,
                        showFileLabel: o === 7,
                        squareId: f,
                        squarePiece: c[f],
                        handleSquareClick: Yb,
                        handleDrop: Vb,
                        allowDrop: Gb,
                        handleDragStart: dm,
                        handleBoardPieceClick: jb
                    }, f)))
        });
    }), Fb = ({ labelText: u, toggle: i, handleToggle: c })=>H.jsxs("div", {
            className: "toggle-container",
            children: [
                H.jsx("span", {
                    className: "toggle-label",
                    children: u
                }),
                H.jsxs("label", {
                    className: "switch",
                    children: [
                        H.jsx("input", {
                            type: "checkbox",
                            checked: i,
                            onChange: c
                        }),
                        H.jsx("span", {
                            className: "slider"
                        })
                    ]
                })
            ]
        }), hm = (u)=>u.boardeditor, Wb = Es([
        hm
    ], (u)=>({
            board: u.board,
            isFlipped: u.isFlipped,
            playerToMove: u.playerToMove,
            castlingFlags: u.castlingFlags
        })), pm = Es([
        hm
    ], (u)=>({
            playerToMove: u.playerToMove,
            castlingFlags: u.castlingFlags
        }));
    function Ib() {
        const { playerToMove: u, castlingFlags: i } = an(pm), c = Xn();
        return H.jsxs("div", {
            className: "move-toggle",
            children: [
                H.jsx("button", {
                    className: `move-option ${u === "w" ? "active" : ""}`,
                    onClick: ()=>c(Fh("w")),
                    children: "White"
                }),
                H.jsx("button", {
                    className: `move-option ${u === "b" ? "active" : ""}`,
                    onClick: ()=>c(Fh("b")),
                    children: "Black"
                })
            ]
        });
    }
    const e2 = nn.memo(({ messages: u, isValid: i })=>H.jsxs("div", {
            className: "notice-board",
            children: [
                H.jsxs("div", {
                    className: `notice-header ${i ? "legal" : "isIllegal"}`,
                    children: [
                        "Board setup is ",
                        i ? "" : "not",
                        " valid."
                    ]
                }),
                u.map((c)=>c.text != null && c.text !== "" && H.jsx("div", {
                        className: `message ${c.type}`,
                        children: c.text
                    }, c.text))
            ]
        })), t2 = ({ isValidFen: u, fenErrorMsg: i })=>{
        const { playerToMove: c, castlingFlags: s } = an(pm), o = Xn(), f = [
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
        return H.jsxs("div", {
            className: "castling",
            children: [
                H.jsxs("div", {
                    className: "toggle-container",
                    children: [
                        H.jsx("span", {
                            children: "To Move : "
                        }),
                        H.jsx(Ib, {})
                    ]
                }),
                f.map(({ flag: m, label: p, state: h })=>H.jsx(Fb, {
                        labelText: p,
                        toggle: h,
                        handleToggle: ()=>{
                            o(Vv(m));
                        }
                    }, p)),
                H.jsx(e2, {
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
    function l2(u) {
        return u == null || Number.isNaN(u) ? "—" : `${u >= 0 ? "+" : ""}${u.toFixed(2)}`;
    }
    let n2, u2, i2;
    n2 = (u, i)=>i.split(" ")[1] === "w" ? u : -u;
    a2 = (u, i, c, s, o)=>{
        if (typeof u == "string") {
            if (u.startsWith("info") && u.includes("score")) {
                const f = u.match(/score (cp|mate) (-?\d+)/);
                if (f) {
                    const p = f[1], h = parseInt(f[2], 10);
                    let v = 0;
                    p === "cp" ? v = h / 100 : p === "mate" && (v = h > 0 ? 10 : -10);
                    const g = n2(v, s);
                    i(g);
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
    u2 = [
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
    ];
    i2 = 8200;
    function r2(u, i) {
        const [c, s] = A.useState(null), [o, f] = A.useState(""), [m, p] = A.useState(""), [h, v] = A.useState(!1), [g, E] = A.useState(""), b = A.useRef(""), T = A.useRef(null), { initEngine: N, setOptions: C, startSearch: z, stopSearch: w, setOnMessage: L, syncEnabledState: k } = Mb(), G = A.useCallback((V)=>{
            typeof V == "string" && a2(V, s, f, b.current, p);
        }, []);
        A.useEffect(()=>{
            try {
                b.current = i();
            } catch  {}
        }, [
            i
        ]);
        const K = A.useCallback(()=>{
            T.current && (clearTimeout(T.current), T.current = null), v(!1), w("board editor analyse stop");
        }, [
            w
        ]), J = A.useCallback(()=>{
            if (!u) {
                E("Fix the position before analysing.");
                return;
            }
            const V = i();
            b.current = V, E(""), s(null), f(""), p(""), v(!0), T.current && (clearTimeout(T.current), T.current = null), w("board editor analyse restart"), k(!0), N(), C(u2), L(G), z(V), T.current = setTimeout(()=>{
                v(!1), w("board editor analyse complete"), T.current = null;
            }, i2);
        }, [
            u,
            i,
            w,
            k,
            N,
            C,
            L,
            G,
            z
        ]);
        return A.useEffect(()=>()=>{
                T.current && clearTimeout(T.current), w("board editor unmount"), k(!1);
            }, [
            w,
            k
        ]), {
            evalScore: c,
            bestLine: o,
            bestMoveUci: m,
            isAnalyzing: h,
            analysisError: g,
            handleAnalyse: J,
            handleStopAnalysis: K,
            fenRef: b
        };
    }
    c2 = ({ isFlipped: u, evalScore: i })=>{
        const c = (s)=>{
            const f = s == null || Number.isNaN(s) ? 0 : s;
            return (Math.max(-10, Math.min(f, 10)) + 10) / (2 * 10) * 100;
        };
        return H.jsx("div", {
            className: `eval-bar eval-container ${u ? "flipped" : ""}`,
            children: H.jsx("div", {
                className: "white-bar",
                style: {
                    height: `${c(i)}%`
                }
            })
        });
    };
    function s2(u, i) {
        if (!i || i.length < 4) return i;
        try {
            const c = new wi(u), s = i.slice(0, 2), o = i.slice(2, 4), f = i.length > 4 ? i[4] : void 0, m = c.move({
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
        const { board: u, isFlipped: i, playerToMove: c, castlingFlags: s } = an(Wb), [o, f] = A.useState(!1), [m, p] = A.useState(""), h = Xn(), v = ()=>{
            h(Jh()), h(kv());
        }, g = ()=>{
            h(Jh()), h(Hv());
        }, E = A.useCallback((J)=>{
            h(Qv(J));
        }, [
            h
        ]), b = A.useCallback((J = 0, V = 1)=>Kb({
                board: u,
                playerToMove: c,
                whiteKingSide: s.K,
                whiteQueenSide: s.Q,
                blackKingSide: s.k,
                blackQueenSide: s.q,
                halfmoveClock: J,
                fullmoveNumber: V
            }), [
            u,
            c,
            s.K,
            s.k,
            s.Q,
            s.q
        ]);
        A.useEffect(()=>{
            g();
        }, []), A.useEffect(()=>{
            const J = b(), { isValid: V, msg: F } = Pb(J);
            f((I)=>I !== V ? V : I), p((I)=>I !== F ? F : I), Bb(J);
        }, [
            b,
            u
        ]);
        const { evalScore: T, bestLine: N, bestMoveUci: C, isAnalyzing: z, analysisError: w, handleAnalyse: L, handleStopAnalysis: k, fenRef: G } = r2(o, b), K = C ? s2(G.current, C) : "";
        return H.jsxs("div", {
            className: "main-container board-editor-page",
            children: [
                H.jsx("div", {
                    className: "top-container",
                    children: H.jsxs("nav", {
                        className: "top-bar",
                        children: [
                            H.jsx("button", {
                                onClick: v,
                                className: "action-button",
                                children: "Clear"
                            }),
                            H.jsx("button", {
                                onClick: g,
                                className: "action-button",
                                children: "Reset"
                            }),
                            H.jsx("button", {
                                onClick: ()=>{
                                    h(Lv());
                                },
                                className: "action-button",
                                children: "Flip"
                            }),
                            H.jsx(Db, {
                                onSubmit: E
                            }),
                            H.jsx("button", {
                                type: "button",
                                onClick: L,
                                disabled: !o || z,
                                className: "action-button",
                                title: o ? "Run engine on current position" : "Position must be legal",
                                children: z ? "Analysing…" : "Analyse"
                            }),
                            H.jsx("button", {
                                type: "button",
                                onClick: k,
                                disabled: !z,
                                className: "action-button",
                                title: "Stop engine",
                                children: "Stop"
                            }),
                            H.jsx(Cb, {})
                        ]
                    })
                }),
                H.jsxs("aside", {
                    className: "board-editor-analysis-shell",
                    "aria-label": "Engine analysis",
                    children: [
                        w ? H.jsx("div", {
                            className: "board-editor-analysis-error",
                            role: "alert",
                            children: w
                        }) : null,
                        H.jsxs("div", {
                            className: "board-editor-analysis-panel",
                            "aria-live": "polite",
                            children: [
                                H.jsxs("div", {
                                    className: "board-editor-analysis-row",
                                    children: [
                                        H.jsx("span", {
                                            className: "board-editor-analysis-label",
                                            children: "Eval (White)"
                                        }),
                                        H.jsx("span", {
                                            className: "board-editor-analysis-value",
                                            children: T != null ? l2(T) : "—"
                                        })
                                    ]
                                }),
                                H.jsxs("div", {
                                    className: "board-editor-analysis-row",
                                    children: [
                                        H.jsx("span", {
                                            className: "board-editor-analysis-label",
                                            children: "Best move"
                                        }),
                                        H.jsx("span", {
                                            className: "board-editor-analysis-value",
                                            children: K || C || "—"
                                        })
                                    ]
                                }),
                                H.jsxs("div", {
                                    className: "board-editor-analysis-row board-editor-analysis-pv",
                                    children: [
                                        H.jsx("span", {
                                            className: "board-editor-analysis-label",
                                            children: "Principal variation"
                                        }),
                                        H.jsx("span", {
                                            className: "board-editor-analysis-value",
                                            children: N || "—"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                H.jsxs("div", {
                    className: "middle-container",
                    children: [
                        H.jsx("div", {
                            className: "left-menu-bar"
                        }),
                        H.jsxs("div", {
                            className: "fen-chessboard-container",
                            children: [
                                H.jsx(Ub, {
                                    isValid: o,
                                    fenErrorMsg: m
                                }),
                                H.jsxs("div", {
                                    className: "board-editor-evalbar-board-row",
                                    children: [
                                        H.jsx("div", {
                                            className: "board-editor-evalbar-wrap",
                                            "aria-hidden": !0,
                                            children: H.jsx(c2, {
                                                isFlipped: i,
                                                evalScore: T
                                            })
                                        }),
                                        H.jsxs("div", {
                                            className: "chessboard-container",
                                            children: [
                                                H.jsx(Jb, {
                                                    isFlipped: i
                                                }),
                                                H.jsx(Lb, {
                                                    handleDragStart: dm,
                                                    handlePaletteClick: Hb
                                                }),
                                                H.jsx(t2, {
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
    }, o2 = A.lazy(()=>Xp(()=>import("./ChessGame-D_FMYT0P.js"), __vite__mapDeps([0,1,2,3]))), f2 = A.lazy(()=>Xp(()=>import("./AnalysisGame-CYbrSzam.js"), __vite__mapDeps([4,1,2,5]))), d2 = ()=>H.jsx(Nb, {
            children: H.jsxs(yb, {
                children: [
                    H.jsxs("nav", {
                        className: "routes",
                        children: [
                            H.jsx(eu, {
                                to: "/boardeditor",
                                className: "action-button no-decoration",
                                children: "Chess Position Editor"
                            }),
                            H.jsx(eu, {
                                to: "/analysis",
                                className: "action-button no-decoration",
                                children: "Analyse Game"
                            }),
                            H.jsx(eu, {
                                to: "/gameplay",
                                className: "action-button no-decoration",
                                children: "Play Game"
                            })
                        ]
                    }),
                    H.jsx(A.Suspense, {
                        fallback: H.jsx("div", {
                            className: "loading-screen",
                            children: "Loading..."
                        }),
                        children: H.jsxs(Xg, {
                            children: [
                                H.jsx(Ia, {
                                    path: "/analysis",
                                    element: H.jsx(ds, {
                                        children: H.jsx(f2, {})
                                    })
                                }),
                                H.jsx(Ia, {
                                    path: "/gameplay",
                                    element: H.jsx(o2, {})
                                }),
                                H.jsx(Ia, {
                                    path: "/boardeditor",
                                    element: H.jsx(ds, {
                                        children: H.jsx(rp, {})
                                    })
                                }),
                                H.jsx(Ia, {
                                    path: "*",
                                    element: H.jsx(ds, {
                                        children: H.jsx(rp, {})
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    function h2() {
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
    h2();
    X1.createRoot(document.getElementById("root")).render(H.jsx(oy, {
        store: Vp,
        children: H.jsx(d2, {})
    }));
})();
export { wi as C, Cb as D, c2 as E, nn as R, an as a, m2 as b, _e as c, S2 as d, T2 as e, v2 as f, A2 as g, xb as h, Mb as i, H as j, q1 as k, R2 as l, p2 as m, _2 as n, a2 as o, E2 as p, Vp as q, A as r, y2 as s, g2 as t, Xn as u, b2 as v, __tla };
