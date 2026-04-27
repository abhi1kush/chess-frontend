const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AnalysisGame-BiOucV85.js","assets/AnalysisGame-DEatZNR2.css"])))=>i.map(i=>d[i]);
let fp, rb, fb, A, db, Sp, Sb, ob, cm, gb, hb, tt, vb, mb, yb, lt, bb, Hp, pb, mm, sb, cb;
let __tla = (async ()=>{
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);
        new MutationObserver((o)=>{
            for (const d of o)if (d.type === "childList") for (const y of d.addedNodes)y.tagName === "LINK" && y.rel === "modulepreload" && f(y);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function c(o) {
            const d = {};
            return o.integrity && (d.integrity = o.integrity), o.referrerPolicy && (d.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? d.credentials = "include" : o.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d;
        }
        function f(o) {
            if (o.ep) return;
            o.ep = !0;
            const d = c(o);
            fetch(o.href, d);
        }
    })();
    cm = function(u) {
        return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
    };
    var Xc = {
        exports: {}
    }, Ga = {};
    var gh;
    function fm() {
        if (gh) return Ga;
        gh = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
        function c(f, o, d) {
            var y = null;
            if (d !== void 0 && (y = "" + d), o.key !== void 0 && (y = "" + o.key), "key" in o) {
                d = {};
                for(var v in o)v !== "key" && (d[v] = o[v]);
            } else d = o;
            return o = d.ref, {
                $$typeof: u,
                type: f,
                key: y,
                ref: o !== void 0 ? o : null,
                props: d
            };
        }
        return Ga.Fragment = r, Ga.jsx = c, Ga.jsxs = c, Ga;
    }
    var bh;
    function om() {
        return bh || (bh = 1, Xc.exports = fm()), Xc.exports;
    }
    let Vc, ne;
    tt = om();
    Vc = {
        exports: {}
    };
    ne = {};
    var Sh;
    function sm() {
        if (Sh) return ne;
        Sh = 1;
        var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), y = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), R = Symbol.iterator;
        function b(S) {
            return S === null || typeof S != "object" ? null : (S = R && S[R] || S["@@iterator"], typeof S == "function" ? S : null);
        }
        var M = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, D = Object.assign, H = {};
        function L(S, q, X) {
            this.props = S, this.context = q, this.refs = H, this.updater = X || M;
        }
        L.prototype.isReactComponent = {}, L.prototype.setState = function(S, q) {
            if (typeof S != "object" && typeof S != "function" && S != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, S, q, "setState");
        }, L.prototype.forceUpdate = function(S) {
            this.updater.enqueueForceUpdate(this, S, "forceUpdate");
        };
        function z() {}
        z.prototype = L.prototype;
        function K(S, q, X) {
            this.props = S, this.context = q, this.refs = H, this.updater = X || M;
        }
        var w = K.prototype = new z;
        w.constructor = K, D(w, L.prototype), w.isPureReactComponent = !0;
        var V = Array.isArray, Y = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, W = Object.prototype.hasOwnProperty;
        function ce(S, q, X, k, J, ie) {
            return X = ie.ref, {
                $$typeof: u,
                type: S,
                key: q,
                ref: X !== void 0 ? X : null,
                props: ie
            };
        }
        function pe(S, q) {
            return ce(S.type, q, void 0, void 0, void 0, S.props);
        }
        function fe(S) {
            return typeof S == "object" && S !== null && S.$$typeof === u;
        }
        function Ne(S) {
            var q = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + S.replace(/[=:]/g, function(X) {
                return q[X];
            });
        }
        var at = /\/+/g;
        function Ue(S, q) {
            return typeof S == "object" && S !== null && S.key != null ? Ne("" + S.key) : q.toString(36);
        }
        function Yt() {}
        function kt(S) {
            switch(S.status){
                case "fulfilled":
                    return S.value;
                case "rejected":
                    throw S.reason;
                default:
                    switch(typeof S.status == "string" ? S.then(Yt, Yt) : (S.status = "pending", S.then(function(q) {
                        S.status === "pending" && (S.status = "fulfilled", S.value = q);
                    }, function(q) {
                        S.status === "pending" && (S.status = "rejected", S.reason = q);
                    })), S.status){
                        case "fulfilled":
                            return S.value;
                        case "rejected":
                            throw S.reason;
                    }
            }
            throw S;
        }
        function Le(S, q, X, k, J) {
            var ie = typeof S;
            (ie === "undefined" || ie === "boolean") && (S = null);
            var te = !1;
            if (S === null) te = !0;
            else switch(ie){
                case "bigint":
                case "string":
                case "number":
                    te = !0;
                    break;
                case "object":
                    switch(S.$$typeof){
                        case u:
                        case r:
                            te = !0;
                            break;
                        case E:
                            return te = S._init, Le(te(S._payload), q, X, k, J);
                    }
            }
            if (te) return J = J(S), te = k === "" ? "." + Ue(S, 0) : k, V(J) ? (X = "", te != null && (X = te.replace(at, "$&/") + "/"), Le(J, q, X, "", function(xt) {
                return xt;
            })) : J != null && (fe(J) && (J = pe(J, X + (J.key == null || S && S.key === J.key ? "" : ("" + J.key).replace(at, "$&/") + "/") + te)), q.push(J)), 1;
            te = 0;
            var Qe = k === "" ? "." : k + ":";
            if (V(S)) for(var be = 0; be < S.length; be++)k = S[be], ie = Qe + Ue(k, be), te += Le(k, q, X, ie, J);
            else if (be = b(S), typeof be == "function") for(S = be.call(S), be = 0; !(k = S.next()).done;)k = k.value, ie = Qe + Ue(k, be++), te += Le(k, q, X, ie, J);
            else if (ie === "object") {
                if (typeof S.then == "function") return Le(kt(S), q, X, k, J);
                throw q = String(S), Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.");
            }
            return te;
        }
        function B(S, q, X) {
            if (S == null) return S;
            var k = [], J = 0;
            return Le(S, k, "", "", function(ie) {
                return q.call(X, ie, J++);
            }), k;
        }
        function j(S) {
            if (S._status === -1) {
                var q = S._result;
                q = q(), q.then(function(X) {
                    (S._status === 0 || S._status === -1) && (S._status = 1, S._result = X);
                }, function(X) {
                    (S._status === 0 || S._status === -1) && (S._status = 2, S._result = X);
                }), S._status === -1 && (S._status = 0, S._result = q);
            }
            if (S._status === 1) return S._result.default;
            throw S._result;
        }
        var G = typeof reportError == "function" ? reportError : function(S) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var q = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
                    error: S
                });
                if (!window.dispatchEvent(q)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", S);
                return;
            }
            console.error(S);
        };
        function oe() {}
        return ne.Children = {
            map: B,
            forEach: function(S, q, X) {
                B(S, function() {
                    q.apply(this, arguments);
                }, X);
            },
            count: function(S) {
                var q = 0;
                return B(S, function() {
                    q++;
                }), q;
            },
            toArray: function(S) {
                return B(S, function(q) {
                    return q;
                }) || [];
            },
            only: function(S) {
                if (!fe(S)) throw Error("React.Children.only expected to receive a single React element child.");
                return S;
            }
        }, ne.Component = L, ne.Fragment = c, ne.Profiler = o, ne.PureComponent = K, ne.StrictMode = f, ne.Suspense = p, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y, ne.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(S) {
                return Y.H.useMemoCache(S);
            }
        }, ne.cache = function(S) {
            return function() {
                return S.apply(null, arguments);
            };
        }, ne.cloneElement = function(S, q, X) {
            if (S == null) throw Error("The argument must be a React element, but you passed " + S + ".");
            var k = D({}, S.props), J = S.key, ie = void 0;
            if (q != null) for(te in q.ref !== void 0 && (ie = void 0), q.key !== void 0 && (J = "" + q.key), q)!W.call(q, te) || te === "key" || te === "__self" || te === "__source" || te === "ref" && q.ref === void 0 || (k[te] = q[te]);
            var te = arguments.length - 2;
            if (te === 1) k.children = X;
            else if (1 < te) {
                for(var Qe = Array(te), be = 0; be < te; be++)Qe[be] = arguments[be + 2];
                k.children = Qe;
            }
            return ce(S.type, J, void 0, void 0, ie, k);
        }, ne.createContext = function(S) {
            return S = {
                $$typeof: y,
                _currentValue: S,
                _currentValue2: S,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, S.Provider = S, S.Consumer = {
                $$typeof: d,
                _context: S
            }, S;
        }, ne.createElement = function(S, q, X) {
            var k, J = {}, ie = null;
            if (q != null) for(k in q.key !== void 0 && (ie = "" + q.key), q)W.call(q, k) && k !== "key" && k !== "__self" && k !== "__source" && (J[k] = q[k]);
            var te = arguments.length - 2;
            if (te === 1) J.children = X;
            else if (1 < te) {
                for(var Qe = Array(te), be = 0; be < te; be++)Qe[be] = arguments[be + 2];
                J.children = Qe;
            }
            if (S && S.defaultProps) for(k in te = S.defaultProps, te)J[k] === void 0 && (J[k] = te[k]);
            return ce(S, ie, void 0, void 0, null, J);
        }, ne.createRef = function() {
            return {
                current: null
            };
        }, ne.forwardRef = function(S) {
            return {
                $$typeof: v,
                render: S
            };
        }, ne.isValidElement = fe, ne.lazy = function(S) {
            return {
                $$typeof: E,
                _payload: {
                    _status: -1,
                    _result: S
                },
                _init: j
            };
        }, ne.memo = function(S, q) {
            return {
                $$typeof: m,
                type: S,
                compare: q === void 0 ? null : q
            };
        }, ne.startTransition = function(S) {
            var q = Y.T, X = {};
            Y.T = X;
            try {
                var k = S(), J = Y.S;
                J !== null && J(X, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then(oe, G);
            } catch (ie) {
                G(ie);
            } finally{
                Y.T = q;
            }
        }, ne.unstable_useCacheRefresh = function() {
            return Y.H.useCacheRefresh();
        }, ne.use = function(S) {
            return Y.H.use(S);
        }, ne.useActionState = function(S, q, X) {
            return Y.H.useActionState(S, q, X);
        }, ne.useCallback = function(S, q) {
            return Y.H.useCallback(S, q);
        }, ne.useContext = function(S) {
            return Y.H.useContext(S);
        }, ne.useDebugValue = function() {}, ne.useDeferredValue = function(S, q) {
            return Y.H.useDeferredValue(S, q);
        }, ne.useEffect = function(S, q, X) {
            var k = Y.H;
            if (typeof X == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return k.useEffect(S, q);
        }, ne.useId = function() {
            return Y.H.useId();
        }, ne.useImperativeHandle = function(S, q, X) {
            return Y.H.useImperativeHandle(S, q, X);
        }, ne.useInsertionEffect = function(S, q) {
            return Y.H.useInsertionEffect(S, q);
        }, ne.useLayoutEffect = function(S, q) {
            return Y.H.useLayoutEffect(S, q);
        }, ne.useMemo = function(S, q) {
            return Y.H.useMemo(S, q);
        }, ne.useOptimistic = function(S, q) {
            return Y.H.useOptimistic(S, q);
        }, ne.useReducer = function(S, q, X) {
            return Y.H.useReducer(S, q, X);
        }, ne.useRef = function(S) {
            return Y.H.useRef(S);
        }, ne.useState = function(S) {
            return Y.H.useState(S);
        }, ne.useSyncExternalStore = function(S, q, X) {
            return Y.H.useSyncExternalStore(S, q, X);
        }, ne.useTransition = function() {
            return Y.H.useTransition();
        }, ne.version = "19.1.0", ne;
    }
    var Eh;
    function Di() {
        return Eh || (Eh = 1, Vc.exports = sm()), Vc.exports;
    }
    A = Di();
    rb = cm(A);
    var Zc = {
        exports: {}
    }, Xa = {}, Jc = {
        exports: {}
    }, $c = {};
    var _h;
    function dm() {
        return _h || (_h = 1, function(u) {
            function r(B, j) {
                var G = B.length;
                B.push(j);
                e: for(; 0 < G;){
                    var oe = G - 1 >>> 1, S = B[oe];
                    if (0 < o(S, j)) B[oe] = j, B[G] = S, G = oe;
                    else break e;
                }
            }
            function c(B) {
                return B.length === 0 ? null : B[0];
            }
            function f(B) {
                if (B.length === 0) return null;
                var j = B[0], G = B.pop();
                if (G !== j) {
                    B[0] = G;
                    e: for(var oe = 0, S = B.length, q = S >>> 1; oe < q;){
                        var X = 2 * (oe + 1) - 1, k = B[X], J = X + 1, ie = B[J];
                        if (0 > o(k, G)) J < S && 0 > o(ie, k) ? (B[oe] = ie, B[J] = G, oe = J) : (B[oe] = k, B[X] = G, oe = X);
                        else if (J < S && 0 > o(ie, G)) B[oe] = ie, B[J] = G, oe = J;
                        else break e;
                    }
                }
                return j;
            }
            function o(B, j) {
                var G = B.sortIndex - j.sortIndex;
                return G !== 0 ? G : B.id - j.id;
            }
            if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var d = performance;
                u.unstable_now = function() {
                    return d.now();
                };
            } else {
                var y = Date, v = y.now();
                u.unstable_now = function() {
                    return y.now() - v;
                };
            }
            var p = [], m = [], E = 1, R = null, b = 3, M = !1, D = !1, H = !1, L = !1, z = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, w = typeof setImmediate < "u" ? setImmediate : null;
            function V(B) {
                for(var j = c(m); j !== null;){
                    if (j.callback === null) f(m);
                    else if (j.startTime <= B) f(m), j.sortIndex = j.expirationTime, r(p, j);
                    else break;
                    j = c(m);
                }
            }
            function Y(B) {
                if (H = !1, V(B), !D) if (c(p) !== null) D = !0, W || (W = !0, Ue());
                else {
                    var j = c(m);
                    j !== null && Le(Y, j.startTime - B);
                }
            }
            var W = !1, ce = -1, pe = 5, fe = -1;
            function Ne() {
                return L ? !0 : !(u.unstable_now() - fe < pe);
            }
            function at() {
                if (L = !1, W) {
                    var B = u.unstable_now();
                    fe = B;
                    var j = !0;
                    try {
                        e: {
                            D = !1, H && (H = !1, K(ce), ce = -1), M = !0;
                            var G = b;
                            try {
                                t: {
                                    for(V(B), R = c(p); R !== null && !(R.expirationTime > B && Ne());){
                                        var oe = R.callback;
                                        if (typeof oe == "function") {
                                            R.callback = null, b = R.priorityLevel;
                                            var S = oe(R.expirationTime <= B);
                                            if (B = u.unstable_now(), typeof S == "function") {
                                                R.callback = S, V(B), j = !0;
                                                break t;
                                            }
                                            R === c(p) && f(p), V(B);
                                        } else f(p);
                                        R = c(p);
                                    }
                                    if (R !== null) j = !0;
                                    else {
                                        var q = c(m);
                                        q !== null && Le(Y, q.startTime - B), j = !1;
                                    }
                                }
                                break e;
                            } finally{
                                R = null, b = G, M = !1;
                            }
                            j = void 0;
                        }
                    } finally{
                        j ? Ue() : W = !1;
                    }
                }
            }
            var Ue;
            if (typeof w == "function") Ue = function() {
                w(at);
            };
            else if (typeof MessageChannel < "u") {
                var Yt = new MessageChannel, kt = Yt.port2;
                Yt.port1.onmessage = at, Ue = function() {
                    kt.postMessage(null);
                };
            } else Ue = function() {
                z(at, 0);
            };
            function Le(B, j) {
                ce = z(function() {
                    B(u.unstable_now());
                }, j);
            }
            u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(B) {
                B.callback = null;
            }, u.unstable_forceFrameRate = function(B) {
                0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pe = 0 < B ? Math.floor(1e3 / B) : 5;
            }, u.unstable_getCurrentPriorityLevel = function() {
                return b;
            }, u.unstable_next = function(B) {
                switch(b){
                    case 1:
                    case 2:
                    case 3:
                        var j = 3;
                        break;
                    default:
                        j = b;
                }
                var G = b;
                b = j;
                try {
                    return B();
                } finally{
                    b = G;
                }
            }, u.unstable_requestPaint = function() {
                L = !0;
            }, u.unstable_runWithPriority = function(B, j) {
                switch(B){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        B = 3;
                }
                var G = b;
                b = B;
                try {
                    return j();
                } finally{
                    b = G;
                }
            }, u.unstable_scheduleCallback = function(B, j, G) {
                var oe = u.unstable_now();
                switch(typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? oe + G : oe) : G = oe, B){
                    case 1:
                        var S = -1;
                        break;
                    case 2:
                        S = 250;
                        break;
                    case 5:
                        S = 1073741823;
                        break;
                    case 4:
                        S = 1e4;
                        break;
                    default:
                        S = 5e3;
                }
                return S = G + S, B = {
                    id: E++,
                    callback: j,
                    priorityLevel: B,
                    startTime: G,
                    expirationTime: S,
                    sortIndex: -1
                }, G > oe ? (B.sortIndex = G, r(m, B), c(p) === null && B === c(m) && (H ? (K(ce), ce = -1) : H = !0, Le(Y, G - oe))) : (B.sortIndex = S, r(p, B), D || M || (D = !0, W || (W = !0, Ue()))), B;
            }, u.unstable_shouldYield = Ne, u.unstable_wrapCallback = function(B) {
                var j = b;
                return function() {
                    var G = b;
                    b = j;
                    try {
                        return B.apply(this, arguments);
                    } finally{
                        b = G;
                    }
                };
            };
        }($c)), $c;
    }
    var Rh;
    function hm() {
        return Rh || (Rh = 1, Jc.exports = dm()), Jc.exports;
    }
    var Wc = {
        exports: {}
    }, Ie = {};
    var Th;
    function pm() {
        if (Th) return Ie;
        Th = 1;
        var u = Di();
        function r(p) {
            var m = "https://react.dev/errors/" + p;
            if (1 < arguments.length) {
                m += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var E = 2; E < arguments.length; E++)m += "&args[]=" + encodeURIComponent(arguments[E]);
            }
            return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
        function d(p, m, E) {
            var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: R == null ? null : "" + R,
                children: p,
                containerInfo: m,
                implementation: E
            };
        }
        var y = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function v(p, m) {
            if (p === "font") return "";
            if (typeof m == "string") return m === "use-credentials" ? m : "";
        }
        return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Ie.createPortal = function(p, m) {
            var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(r(299));
            return d(p, m, null, E);
        }, Ie.flushSync = function(p) {
            var m = y.T, E = f.p;
            try {
                if (y.T = null, f.p = 2, p) return p();
            } finally{
                y.T = m, f.p = E, f.d.f();
            }
        }, Ie.preconnect = function(p, m) {
            typeof p == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, f.d.C(p, m));
        }, Ie.prefetchDNS = function(p) {
            typeof p == "string" && f.d.D(p);
        }, Ie.preinit = function(p, m) {
            if (typeof p == "string" && m && typeof m.as == "string") {
                var E = m.as, R = v(E, m.crossOrigin), b = typeof m.integrity == "string" ? m.integrity : void 0, M = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
                E === "style" ? f.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                    crossOrigin: R,
                    integrity: b,
                    fetchPriority: M
                }) : E === "script" && f.d.X(p, {
                    crossOrigin: R,
                    integrity: b,
                    fetchPriority: M,
                    nonce: typeof m.nonce == "string" ? m.nonce : void 0
                });
            }
        }, Ie.preinitModule = function(p, m) {
            if (typeof p == "string") if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var E = v(m.as, m.crossOrigin);
                    f.d.M(p, {
                        crossOrigin: E,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    });
                }
            } else m == null && f.d.M(p);
        }, Ie.preload = function(p, m) {
            if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
                var E = m.as, R = v(E, m.crossOrigin);
                f.d.L(p, E, {
                    crossOrigin: R,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                    nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                    type: typeof m.type == "string" ? m.type : void 0,
                    fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                    referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                    imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                    imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                    media: typeof m.media == "string" ? m.media : void 0
                });
            }
        }, Ie.preloadModule = function(p, m) {
            if (typeof p == "string") if (m) {
                var E = v(m.as, m.crossOrigin);
                f.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: E,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                });
            } else f.d.m(p);
        }, Ie.requestFormReset = function(p) {
            f.d.r(p);
        }, Ie.unstable_batchedUpdates = function(p, m) {
            return p(m);
        }, Ie.useFormState = function(p, m, E) {
            return y.H.useFormState(p, m, E);
        }, Ie.useFormStatus = function() {
            return y.H.useHostTransitionStatus();
        }, Ie.version = "19.1.0", Ie;
    }
    var Ah;
    mm = function() {
        if (Ah) return Wc.exports;
        Ah = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), Wc.exports = pm(), Wc.exports;
    };
    var Oh;
    function ym() {
        if (Oh) return Xa;
        Oh = 1;
        var u = hm(), r = Di(), c = mm();
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
        function v(e) {
            if (d(e) !== e) throw Error(f(188));
        }
        function p(e) {
            var t = e.alternate;
            if (!t) {
                if (t = d(e), t === null) throw Error(f(188));
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
                        if (i === l) return v(a), e;
                        if (i === n) return v(a), t;
                        i = i.sibling;
                    }
                    throw Error(f(188));
                }
                if (l.return !== n.return) l = a, n = i;
                else {
                    for(var s = !1, h = a.child; h;){
                        if (h === l) {
                            s = !0, l = a, n = i;
                            break;
                        }
                        if (h === n) {
                            s = !0, n = a, l = i;
                            break;
                        }
                        h = h.sibling;
                    }
                    if (!s) {
                        for(h = i.child; h;){
                            if (h === l) {
                                s = !0, l = i, n = a;
                                break;
                            }
                            if (h === n) {
                                s = !0, n = i, l = a;
                                break;
                            }
                            h = h.sibling;
                        }
                        if (!s) throw Error(f(189));
                    }
                }
                if (l.alternate !== n) throw Error(f(190));
            }
            if (l.tag !== 3) throw Error(f(188));
            return l.stateNode.current === l ? e : t;
        }
        function m(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e;
            for(e = e.child; e !== null;){
                if (t = m(e), t !== null) return t;
                e = e.sibling;
            }
            return null;
        }
        var E = Object.assign, R = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), K = Symbol.for("react.consumer"), w = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), Ne = Symbol.for("react.memo_cache_sentinel"), at = Symbol.iterator;
        function Ue(e) {
            return e === null || typeof e != "object" ? null : (e = at && e[at] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var Yt = Symbol.for("react.client.reference");
        function kt(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === Yt ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case D:
                    return "Fragment";
                case L:
                    return "Profiler";
                case H:
                    return "StrictMode";
                case Y:
                    return "Suspense";
                case W:
                    return "SuspenseList";
                case fe:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case M:
                    return "Portal";
                case w:
                    return (e.displayName || "Context") + ".Provider";
                case K:
                    return (e._context.displayName || "Context") + ".Consumer";
                case V:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case ce:
                    return t = e.displayName || null, t !== null ? t : kt(e.type) || "Memo";
                case pe:
                    t = e._payload, e = e._init;
                    try {
                        return kt(e(t));
                    } catch  {}
            }
            return null;
        }
        var Le = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, oe = [], S = -1;
        function q(e) {
            return {
                current: e
            };
        }
        function X(e) {
            0 > S || (e.current = oe[S], oe[S] = null, S--);
        }
        function k(e, t) {
            S++, oe[S] = e.current, e.current = t;
        }
        var J = q(null), ie = q(null), te = q(null), Qe = q(null);
        function be(e, t) {
            switch(k(te, t), k(ie, e), k(J, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? Xd(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = Xd(t), e = Vd(t, e);
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
            X(J), k(J, e);
        }
        function xt() {
            X(J), X(ie), X(te);
        }
        function fl(e) {
            e.memoizedState !== null && k(Qe, e);
            var t = J.current, l = Vd(t, e.type);
            t !== l && (k(ie, e), k(J, l));
        }
        function nu(e) {
            ie.current === e && (X(J), X(ie)), Qe.current === e && (X(Qe), Qa._currentValue = G);
        }
        var Bi = Object.prototype.hasOwnProperty, Ui = u.unstable_scheduleCallback, zi = u.unstable_cancelCallback, Qp = u.unstable_shouldYield, Kp = u.unstable_requestPaint, Pt = u.unstable_now, jp = u.unstable_getCurrentPriorityLevel, Af = u.unstable_ImmediatePriority, Of = u.unstable_UserBlockingPriority, au = u.unstable_NormalPriority, Yp = u.unstable_LowPriority, Nf = u.unstable_IdlePriority, kp = u.log, Gp = u.unstable_setDisableYieldValue, Zn = null, st = null;
        function ol(e) {
            if (typeof kp == "function" && Gp(e), st && typeof st.setStrictMode == "function") try {
                st.setStrictMode(Zn, e);
            } catch  {}
        }
        var dt = Math.clz32 ? Math.clz32 : Zp, Xp = Math.log, Vp = Math.LN2;
        function Zp(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (Xp(e) / Vp | 0) | 0;
        }
        var uu = 256, iu = 4194304;
        function Ll(e) {
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
        function ru(e, t, l) {
            var n = e.pendingLanes;
            if (n === 0) return 0;
            var a = 0, i = e.suspendedLanes, s = e.pingedLanes;
            e = e.warmLanes;
            var h = n & 134217727;
            return h !== 0 ? (n = h & ~i, n !== 0 ? a = Ll(n) : (s &= h, s !== 0 ? a = Ll(s) : l || (l = h & ~e, l !== 0 && (a = Ll(l))))) : (h = n & ~i, h !== 0 ? a = Ll(h) : s !== 0 ? a = Ll(s) : l || (l = n & ~e, l !== 0 && (a = Ll(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
        }
        function Jn(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function Jp(e, t) {
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
        function Mf() {
            var e = uu;
            return uu <<= 1, (uu & 4194048) === 0 && (uu = 256), e;
        }
        function Df() {
            var e = iu;
            return iu <<= 1, (iu & 62914560) === 0 && (iu = 4194304), e;
        }
        function qi(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function $n(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function $p(e, t, l, n, a, i) {
            var s = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var h = e.entanglements, g = e.expirationTimes, N = e.hiddenUpdates;
            for(l = s & ~l; 0 < l;){
                var U = 31 - dt(l), Q = 1 << U;
                h[U] = 0, g[U] = -1;
                var C = N[U];
                if (C !== null) for(N[U] = null, U = 0; U < C.length; U++){
                    var x = C[U];
                    x !== null && (x.lane &= -536870913);
                }
                l &= ~Q;
            }
            n !== 0 && Cf(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
        }
        function Cf(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var n = 31 - dt(t);
            e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
        }
        function xf(e, t) {
            var l = e.entangledLanes |= t;
            for(e = e.entanglements; l;){
                var n = 31 - dt(l), a = 1 << n;
                a & t | e[n] & t && (e[n] |= t), l &= ~a;
            }
        }
        function Pi(e) {
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
        function wi(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function Bf() {
            var e = j.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : dh(e.type));
        }
        function Wp(e, t) {
            var l = j.p;
            try {
                return j.p = e, t();
            } finally{
                j.p = l;
            }
        }
        var sl = Math.random().toString(36).slice(2), We = "__reactFiber$" + sl, ut = "__reactProps$" + sl, rn = "__reactContainer$" + sl, Hi = "__reactEvents$" + sl, Fp = "__reactListeners$" + sl, Ip = "__reactHandles$" + sl, Uf = "__reactResources$" + sl, Wn = "__reactMarker$" + sl;
        function Li(e) {
            delete e[We], delete e[ut], delete e[Hi], delete e[Fp], delete e[Ip];
        }
        function cn(e) {
            var t = e[We];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[rn] || l[We]) {
                    if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = Wd(e); e !== null;){
                        if (l = e[We]) return l;
                        e = Wd(e);
                    }
                    return t;
                }
                e = l, l = e.parentNode;
            }
            return null;
        }
        function fn(e) {
            if (e = e[We] || e[rn]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function Fn(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(f(33));
        }
        function on(e) {
            var t = e[Uf];
            return t || (t = e[Uf] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function Ke(e) {
            e[Wn] = !0;
        }
        var zf = new Set, qf = {};
        function Ql(e, t) {
            sn(e, t), sn(e + "Capture", t);
        }
        function sn(e, t) {
            for(qf[e] = t, e = 0; e < t.length; e++)zf.add(t[e]);
        }
        var e0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Pf = {}, wf = {};
        function t0(e) {
            return Bi.call(wf, e) ? !0 : Bi.call(Pf, e) ? !1 : e0.test(e) ? wf[e] = !0 : (Pf[e] = !0, !1);
        }
        function cu(e, t, l) {
            if (t0(t)) if (l === null) e.removeAttribute(t);
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
        function fu(e, t, l) {
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
        var Qi, Hf;
        function dn(e) {
            if (Qi === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Qi = t && t[1] || "", Hf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Qi + e + Hf;
        }
        var Ki = !1;
        function ji(e, t) {
            if (!e || Ki) return "";
            Ki = !0;
            var l = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var n = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var Q = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(Q.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(Q, []);
                                    } catch (x) {
                                        var C = x;
                                    }
                                    Reflect.construct(e, [], Q);
                                } else {
                                    try {
                                        Q.call();
                                    } catch (x) {
                                        C = x;
                                    }
                                    e.call(Q.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (x) {
                                    C = x;
                                }
                                (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {});
                            }
                        } catch (x) {
                            if (x && C && typeof x.stack == "string") return [
                                x.stack,
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
                var i = n.DetermineComponentFrameRoot(), s = i[0], h = i[1];
                if (s && h) {
                    var g = s.split(`
`), N = h.split(`
`);
                    for(a = n = 0; n < g.length && !g[n].includes("DetermineComponentFrameRoot");)n++;
                    for(; a < N.length && !N[a].includes("DetermineComponentFrameRoot");)a++;
                    if (n === g.length || a === N.length) for(n = g.length - 1, a = N.length - 1; 1 <= n && 0 <= a && g[n] !== N[a];)a--;
                    for(; 1 <= n && 0 <= a; n--, a--)if (g[n] !== N[a]) {
                        if (n !== 1 || a !== 1) do if (n--, a--, 0 > a || g[n] !== N[a]) {
                            var U = `
` + g[n].replace(" at new ", " at ");
                            return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U;
                        }
                        while (1 <= n && 0 <= a);
                        break;
                    }
                }
            } finally{
                Ki = !1, Error.prepareStackTrace = l;
            }
            return (l = e ? e.displayName || e.name : "") ? dn(l) : "";
        }
        function l0(e) {
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
                    return ji(e.type, !1);
                case 11:
                    return ji(e.type.render, !1);
                case 1:
                    return ji(e.type, !0);
                case 31:
                    return dn("Activity");
                default:
                    return "";
            }
        }
        function Lf(e) {
            try {
                var t = "";
                do t += l0(e), e = e.return;
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
        function Qf(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function n0(e) {
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
        function ou(e) {
            e._valueTracker || (e._valueTracker = n0(e));
        }
        function Kf(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), n = "";
            return e && (n = Qf(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
        }
        function su(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var a0 = /[\n"\\]/g;
        function Et(e) {
            return e.replace(a0, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Yi(e, t, l, n, a, i, s, h) {
            e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? ki(e, s, St(t)) : l != null ? ki(e, s, St(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + St(h) : e.removeAttribute("name");
        }
        function jf(e, t, l, n, a, i, s, h) {
            if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
                if (!(i !== "submit" && i !== "reset" || t != null)) return;
                l = l != null ? "" + St(l) : "", t = t != null ? "" + St(t) : l, h || t === e.value || (e.value = t), e.defaultValue = t;
            }
            n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = h ? e.checked : !!n, e.defaultChecked = !!n, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s);
        }
        function ki(e, t, l) {
            t === "number" && su(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
        }
        function hn(e, t, l, n) {
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
        function Yf(e, t, l) {
            if (t != null && (t = "" + St(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + St(l) : "";
        }
        function kf(e, t, l, n) {
            if (t == null) {
                if (n != null) {
                    if (l != null) throw Error(f(92));
                    if (Le(n)) {
                        if (1 < n.length) throw Error(f(93));
                        n = n[0];
                    }
                    l = n;
                }
                l == null && (l = ""), t = l;
            }
            l = St(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n);
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
        var u0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Gf(e, t, l) {
            var n = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || u0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function Xf(e, t, l) {
            if (t != null && typeof t != "object") throw Error(f(62));
            if (e = e.style, l != null) {
                for(var n in l)!l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
                for(var a in t)n = t[a], t.hasOwnProperty(a) && l[a] !== n && Gf(e, a, n);
            } else for(var i in t)t.hasOwnProperty(i) && Gf(e, i, t[i]);
        }
        function Gi(e) {
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
        var i0 = new Map([
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
        ]), r0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function du(e) {
            return r0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        var Xi = null;
        function Vi(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var mn = null, yn = null;
        function Vf(e) {
            var t = fn(e);
            if (t && (e = t.stateNode)) {
                var l = e[ut] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (Yi(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var n = l[t];
                                if (n !== e && n.form === e.form) {
                                    var a = n[ut] || null;
                                    if (!a) throw Error(f(90));
                                    Yi(n, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)n = l[t], n.form === e.form && Kf(n);
                        }
                        break e;
                    case "textarea":
                        Yf(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && hn(e, !!l.multiple, t, !1);
                }
            }
        }
        var Zi = !1;
        function Zf(e, t, l) {
            if (Zi) return e(t, l);
            Zi = !0;
            try {
                var n = e(t);
                return n;
            } finally{
                if (Zi = !1, (mn !== null || yn !== null) && (Wu(), mn && (t = mn, e = yn, yn = mn = null, Vf(t), e))) for(t = 0; t < e.length; t++)Vf(e[t]);
            }
        }
        function In(e, t) {
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
            if (l && typeof l != "function") throw Error(f(231, t, typeof l));
            return l;
        }
        var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ji = !1;
        if (Xt) try {
            var ea = {};
            Object.defineProperty(ea, "passive", {
                get: function() {
                    Ji = !0;
                }
            }), window.addEventListener("test", ea, ea), window.removeEventListener("test", ea, ea);
        } catch  {
            Ji = !1;
        }
        var dl = null, $i = null, hu = null;
        function Jf() {
            if (hu) return hu;
            var e, t = $i, l = t.length, n, a = "value" in dl ? dl.value : dl.textContent, i = a.length;
            for(e = 0; e < l && t[e] === a[e]; e++);
            var s = l - e;
            for(n = 1; n <= s && t[l - n] === a[i - n]; n++);
            return hu = a.slice(e, 1 < n ? 1 - n : void 0);
        }
        function pu(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function mu() {
            return !0;
        }
        function $f() {
            return !1;
        }
        function it(e) {
            function t(l, n, a, i, s) {
                this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = s, this.currentTarget = null;
                for(var h in e)e.hasOwnProperty(h) && (l = e[h], this[h] = l ? l(i) : i[h]);
                return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? mu : $f, this.isPropagationStopped = $f, this;
            }
            return E(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = mu);
                },
                stopPropagation: function() {
                    var l = this.nativeEvent;
                    l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = mu);
                },
                persist: function() {},
                isPersistent: mu
            }), t;
        }
        var Kl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, yu = it(Kl), ta = E({}, Kl, {
            view: 0,
            detail: 0
        }), c0 = it(ta), Wi, Fi, la, vu = E({}, ta, {
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
            getModifierState: er,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== la && (la && e.type === "mousemove" ? (Wi = e.screenX - la.screenX, Fi = e.screenY - la.screenY) : Fi = Wi = 0, la = e), Wi);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Fi;
            }
        }), Wf = it(vu), f0 = E({}, vu, {
            dataTransfer: 0
        }), o0 = it(f0), s0 = E({}, ta, {
            relatedTarget: 0
        }), Ii = it(s0), d0 = E({}, Kl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), h0 = it(d0), p0 = E({}, Kl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), m0 = it(p0), y0 = E({}, Kl, {
            data: 0
        }), Ff = it(y0), v0 = {
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
        }, g0 = {
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
        }, b0 = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function S0(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = b0[e]) ? !!t[e] : !1;
        }
        function er() {
            return S0;
        }
        var E0 = E({}, ta, {
            key: function(e) {
                if (e.key) {
                    var t = v0[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = pu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? g0[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: er,
            charCode: function(e) {
                return e.type === "keypress" ? pu(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? pu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), _0 = it(E0), R0 = E({}, vu, {
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
        }), If = it(R0), T0 = E({}, ta, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: er
        }), A0 = it(T0), O0 = E({}, Kl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), N0 = it(O0), M0 = E({}, vu, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), D0 = it(M0), C0 = E({}, Kl, {
            newState: 0,
            oldState: 0
        }), x0 = it(C0), B0 = [
            9,
            13,
            27,
            32
        ], tr = Xt && "CompositionEvent" in window, na = null;
        Xt && "documentMode" in document && (na = document.documentMode);
        var U0 = Xt && "TextEvent" in window && !na, eo = Xt && (!tr || na && 8 < na && 11 >= na), to = " ", lo = !1;
        function no(e, t) {
            switch(e){
                case "keyup":
                    return B0.indexOf(t.keyCode) !== -1;
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
        function ao(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var vn = !1;
        function z0(e, t) {
            switch(e){
                case "compositionend":
                    return ao(t);
                case "keypress":
                    return t.which !== 32 ? null : (lo = !0, to);
                case "textInput":
                    return e = t.data, e === to && lo ? null : e;
                default:
                    return null;
            }
        }
        function q0(e, t) {
            if (vn) return e === "compositionend" || !tr && no(e, t) ? (e = Jf(), hu = $i = dl = null, vn = !1, e) : null;
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
                    return eo && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var P0 = {
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
        function uo(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!P0[e.type] : t === "textarea";
        }
        function io(e, t, l, n) {
            mn ? yn ? yn.push(n) : yn = [
                n
            ] : mn = n, t = ni(t, "onChange"), 0 < t.length && (l = new yu("onChange", "change", null, l, n), e.push({
                event: l,
                listeners: t
            }));
        }
        var aa = null, ua = null;
        function w0(e) {
            Kd(e, 0);
        }
        function gu(e) {
            var t = Fn(e);
            if (Kf(t)) return e;
        }
        function ro(e, t) {
            if (e === "change") return t;
        }
        var co = !1;
        if (Xt) {
            var lr;
            if (Xt) {
                var nr = "oninput" in document;
                if (!nr) {
                    var fo = document.createElement("div");
                    fo.setAttribute("oninput", "return;"), nr = typeof fo.oninput == "function";
                }
                lr = nr;
            } else lr = !1;
            co = lr && (!document.documentMode || 9 < document.documentMode);
        }
        function oo() {
            aa && (aa.detachEvent("onpropertychange", so), ua = aa = null);
        }
        function so(e) {
            if (e.propertyName === "value" && gu(ua)) {
                var t = [];
                io(t, ua, e, Vi(e)), Zf(w0, t);
            }
        }
        function H0(e, t, l) {
            e === "focusin" ? (oo(), aa = t, ua = l, aa.attachEvent("onpropertychange", so)) : e === "focusout" && oo();
        }
        function L0(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return gu(ua);
        }
        function Q0(e, t) {
            if (e === "click") return gu(t);
        }
        function K0(e, t) {
            if (e === "input" || e === "change") return gu(t);
        }
        function j0(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var ht = typeof Object.is == "function" ? Object.is : j0;
        function ia(e, t) {
            if (ht(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), n = Object.keys(t);
            if (l.length !== n.length) return !1;
            for(n = 0; n < l.length; n++){
                var a = l[n];
                if (!Bi.call(t, a) || !ht(e[a], t[a])) return !1;
            }
            return !0;
        }
        function ho(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function po(e, t) {
            var l = ho(e);
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
                l = ho(l);
            }
        }
        function mo(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function yo(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = su(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var l = typeof t.contentWindow.location.href == "string";
                } catch  {
                    l = !1;
                }
                if (l) e = t.contentWindow;
                else break;
                t = su(e.document);
            }
            return t;
        }
        function ar(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var Y0 = Xt && "documentMode" in document && 11 >= document.documentMode, gn = null, ur = null, ra = null, ir = !1;
        function vo(e, t, l) {
            var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            ir || gn == null || gn !== su(n) || (n = gn, "selectionStart" in n && ar(n) ? n = {
                start: n.selectionStart,
                end: n.selectionEnd
            } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
                anchorNode: n.anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
            }), ra && ia(ra, n) || (ra = n, n = ni(ur, "onSelect"), 0 < n.length && (t = new yu("onSelect", "select", null, t, l), e.push({
                event: t,
                listeners: n
            }), t.target = gn)));
        }
        function jl(e, t) {
            var l = {};
            return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
        }
        var bn = {
            animationend: jl("Animation", "AnimationEnd"),
            animationiteration: jl("Animation", "AnimationIteration"),
            animationstart: jl("Animation", "AnimationStart"),
            transitionrun: jl("Transition", "TransitionRun"),
            transitionstart: jl("Transition", "TransitionStart"),
            transitioncancel: jl("Transition", "TransitionCancel"),
            transitionend: jl("Transition", "TransitionEnd")
        }, rr = {}, go = {};
        Xt && (go = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
        function Yl(e) {
            if (rr[e]) return rr[e];
            if (!bn[e]) return e;
            var t = bn[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in go) return rr[e] = t[l];
            return e;
        }
        var bo = Yl("animationend"), So = Yl("animationiteration"), Eo = Yl("animationstart"), k0 = Yl("transitionrun"), G0 = Yl("transitionstart"), X0 = Yl("transitioncancel"), _o = Yl("transitionend"), Ro = new Map, cr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        cr.push("scrollEnd");
        function Bt(e, t) {
            Ro.set(e, t), Ql(t, [
                e
            ]);
        }
        var To = new WeakMap;
        function _t(e, t) {
            if (typeof e == "object" && e !== null) {
                var l = To.get(e);
                return l !== void 0 ? l : (t = {
                    value: e,
                    source: t,
                    stack: Lf(t)
                }, To.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Lf(t)
            };
        }
        var Rt = [], Sn = 0, fr = 0;
        function bu() {
            for(var e = Sn, t = fr = Sn = 0; t < e;){
                var l = Rt[t];
                Rt[t++] = null;
                var n = Rt[t];
                Rt[t++] = null;
                var a = Rt[t];
                Rt[t++] = null;
                var i = Rt[t];
                if (Rt[t++] = null, n !== null && a !== null) {
                    var s = n.pending;
                    s === null ? a.next = a : (a.next = s.next, s.next = a), n.pending = a;
                }
                i !== 0 && Ao(l, a, i);
            }
        }
        function Su(e, t, l, n) {
            Rt[Sn++] = e, Rt[Sn++] = t, Rt[Sn++] = l, Rt[Sn++] = n, fr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
        }
        function or(e, t, l, n) {
            return Su(e, t, l, n), Eu(e);
        }
        function En(e, t) {
            return Su(e, null, null, t), Eu(e);
        }
        function Ao(e, t, l) {
            e.lanes |= l;
            var n = e.alternate;
            n !== null && (n.lanes |= l);
            for(var a = !1, i = e.return; i !== null;)i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
            return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - dt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [
                t
            ] : n.push(t), t.lane = l | 536870912), i) : null;
        }
        function Eu(e) {
            if (50 < Ba) throw Ba = 0, yc = null, Error(f(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var _n = {};
        function V0(e, t, l, n) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function pt(e, t, l, n) {
            return new V0(e, t, l, n);
        }
        function sr(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function Vt(e, t) {
            var l = e.alternate;
            return l === null ? (l = pt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
        }
        function Oo(e, t) {
            e.flags &= 65011714;
            var l = e.alternate;
            return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function _u(e, t, l, n, a, i) {
            var s = 0;
            if (n = e, typeof e == "function") sr(e) && (s = 1);
            else if (typeof e == "string") s = J1(e, l, J.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case fe:
                    return e = pt(31, l, t, a), e.elementType = fe, e.lanes = i, e;
                case D:
                    return kl(l.children, a, i, t);
                case H:
                    s = 8, a |= 24;
                    break;
                case L:
                    return e = pt(12, l, t, a | 2), e.elementType = L, e.lanes = i, e;
                case Y:
                    return e = pt(13, l, t, a), e.elementType = Y, e.lanes = i, e;
                case W:
                    return e = pt(19, l, t, a), e.elementType = W, e.lanes = i, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case z:
                        case w:
                            s = 10;
                            break e;
                        case K:
                            s = 9;
                            break e;
                        case V:
                            s = 11;
                            break e;
                        case ce:
                            s = 14;
                            break e;
                        case pe:
                            s = 16, n = null;
                            break e;
                    }
                    s = 29, l = Error(f(130, e === null ? "null" : typeof e, "")), n = null;
            }
            return t = pt(s, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
        }
        function kl(e, t, l, n) {
            return e = pt(7, e, n, t), e.lanes = l, e;
        }
        function dr(e, t, l) {
            return e = pt(6, e, null, t), e.lanes = l, e;
        }
        function hr(e, t, l) {
            return t = pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var Rn = [], Tn = 0, Ru = null, Tu = 0, Tt = [], At = 0, Gl = null, Zt = 1, Jt = "";
        function Xl(e, t) {
            Rn[Tn++] = Tu, Rn[Tn++] = Ru, Ru = e, Tu = t;
        }
        function No(e, t, l) {
            Tt[At++] = Zt, Tt[At++] = Jt, Tt[At++] = Gl, Gl = e;
            var n = Zt;
            e = Jt;
            var a = 32 - dt(n) - 1;
            n &= ~(1 << a), l += 1;
            var i = 32 - dt(t) + a;
            if (30 < i) {
                var s = a - a % 5;
                i = (n & (1 << s) - 1).toString(32), n >>= s, a -= s, Zt = 1 << 32 - dt(t) + a | l << a | n, Jt = i + e;
            } else Zt = 1 << i | l << a | n, Jt = e;
        }
        function pr(e) {
            e.return !== null && (Xl(e, 1), No(e, 1, 0));
        }
        function mr(e) {
            for(; e === Ru;)Ru = Rn[--Tn], Rn[Tn] = null, Tu = Rn[--Tn], Rn[Tn] = null;
            for(; e === Gl;)Gl = Tt[--At], Tt[At] = null, Jt = Tt[--At], Tt[At] = null, Zt = Tt[--At], Tt[At] = null;
        }
        var nt = null, De = null, ye = !1, Vl = null, wt = !1, yr = Error(f(519));
        function Zl(e) {
            var t = Error(f(418, ""));
            throw oa(_t(t, e)), yr;
        }
        function Mo(e) {
            var t = e.stateNode, l = e.type, n = e.memoizedProps;
            switch(t[We] = e, t[ut] = n, l){
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
                    de("invalid", t), jf(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0), ou(t);
                    break;
                case "select":
                    de("invalid", t);
                    break;
                case "textarea":
                    de("invalid", t), kf(t, n.value, n.defaultValue, n.children), ou(t);
            }
            l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || Gd(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = ai), t = !0) : t = !1, t || Zl(e);
        }
        function Do(e) {
            for(nt = e.return; nt;)switch(nt.tag){
                case 5:
                case 13:
                    wt = !1;
                    return;
                case 27:
                case 3:
                    wt = !0;
                    return;
                default:
                    nt = nt.return;
            }
        }
        function ca(e) {
            if (e !== nt) return !1;
            if (!ye) return Do(e), ye = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Bc(e.type, e.memoizedProps)), l = !l), l && De && Zl(e), Do(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
                e: {
                    for(e = e.nextSibling, t = 0; e;){
                        if (e.nodeType === 8) if (l = e.data, l === "/$") {
                            if (t === 0) {
                                De = zt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else l !== "$" && l !== "$!" && l !== "$?" || t++;
                        e = e.nextSibling;
                    }
                    De = null;
                }
            } else t === 27 ? (t = De, Ml(e.type) ? (e = Pc, Pc = null, De = e) : De = t) : De = nt ? zt(e.stateNode.nextSibling) : null;
            return !0;
        }
        function fa() {
            De = nt = null, ye = !1;
        }
        function Co() {
            var e = Vl;
            return e !== null && (ft === null ? ft = e : ft.push.apply(ft, e), Vl = null), e;
        }
        function oa(e) {
            Vl === null ? Vl = [
                e
            ] : Vl.push(e);
        }
        var vr = q(null), Jl = null, $t = null;
        function hl(e, t, l) {
            k(vr, t._currentValue), t._currentValue = l;
        }
        function Wt(e) {
            e._currentValue = vr.current, X(vr);
        }
        function gr(e, t, l) {
            for(; e !== null;){
                var n = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
                e = e.return;
            }
        }
        function br(e, t, l, n) {
            var a = e.child;
            for(a !== null && (a.return = e); a !== null;){
                var i = a.dependencies;
                if (i !== null) {
                    var s = a.child;
                    i = i.firstContext;
                    e: for(; i !== null;){
                        var h = i;
                        i = a;
                        for(var g = 0; g < t.length; g++)if (h.context === t[g]) {
                            i.lanes |= l, h = i.alternate, h !== null && (h.lanes |= l), gr(i.return, l, e), n || (s = null);
                            break e;
                        }
                        i = h.next;
                    }
                } else if (a.tag === 18) {
                    if (s = a.return, s === null) throw Error(f(341));
                    s.lanes |= l, i = s.alternate, i !== null && (i.lanes |= l), gr(s, l, e), s = null;
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
        function sa(e, t, l, n) {
            e = null;
            for(var a = t, i = !1; a !== null;){
                if (!i) {
                    if ((a.flags & 524288) !== 0) i = !0;
                    else if ((a.flags & 262144) !== 0) break;
                }
                if (a.tag === 10) {
                    var s = a.alternate;
                    if (s === null) throw Error(f(387));
                    if (s = s.memoizedProps, s !== null) {
                        var h = a.type;
                        ht(a.pendingProps.value, s.value) || (e !== null ? e.push(h) : e = [
                            h
                        ]);
                    }
                } else if (a === Qe.current) {
                    if (s = a.alternate, s === null) throw Error(f(387));
                    s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Qa) : e = [
                        Qa
                    ]);
                }
                a = a.return;
            }
            e !== null && br(t, e, l, n), t.flags |= 262144;
        }
        function Au(e) {
            for(e = e.firstContext; e !== null;){
                if (!ht(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function $l(e) {
            Jl = e, $t = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function Fe(e) {
            return xo(Jl, e);
        }
        function Ou(e, t) {
            return Jl === null && $l(e), xo(e, t);
        }
        function xo(e, t) {
            var l = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, $t === null) {
                if (e === null) throw Error(f(308));
                $t = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else $t = $t.next = t;
            return l;
        }
        var Z0 = typeof AbortController < "u" ? AbortController : function() {
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
        }, J0 = u.unstable_scheduleCallback, $0 = u.unstable_NormalPriority, Pe = {
            $$typeof: w,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Sr() {
            return {
                controller: new Z0,
                data: new Map,
                refCount: 0
            };
        }
        function da(e) {
            e.refCount--, e.refCount === 0 && J0($0, function() {
                e.controller.abort();
            });
        }
        var ha = null, Er = 0, An = 0, On = null;
        function W0(e, t) {
            if (ha === null) {
                var l = ha = [];
                Er = 0, An = Rc(), On = {
                    status: "pending",
                    value: void 0,
                    then: function(n) {
                        l.push(n);
                    }
                };
            }
            return Er++, t.then(Bo, Bo), t;
        }
        function Bo() {
            if (--Er === 0 && ha !== null) {
                On !== null && (On.status = "fulfilled");
                var e = ha;
                ha = null, An = 0, On = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function F0(e, t) {
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
        var Uo = B.S;
        B.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && W0(e, t), Uo !== null && Uo(e, t);
        };
        var Wl = q(null);
        function _r() {
            var e = Wl.current;
            return e !== null ? e : Te.pooledCache;
        }
        function Nu(e, t) {
            t === null ? k(Wl, Wl.current) : k(Wl, t.pool);
        }
        function zo() {
            var e = _r();
            return e === null ? null : {
                parent: Pe._currentValue,
                pool: e
            };
        }
        var pa = Error(f(460)), qo = Error(f(474)), Mu = Error(f(542)), Rr = {
            then: function() {}
        };
        function Po(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function Du() {}
        function wo(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Du, Du), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Lo(e), e;
                default:
                    if (typeof t.status == "string") t.then(Du, Du);
                    else {
                        if (e = Te, e !== null && 100 < e.shellSuspendCounter) throw Error(f(482));
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
                    throw ma = t, pa;
            }
        }
        var ma = null;
        function Ho() {
            if (ma === null) throw Error(f(459));
            var e = ma;
            return ma = null, e;
        }
        function Lo(e) {
            if (e === pa || e === Mu) throw Error(f(483));
        }
        var pl = !1;
        function Tr(e) {
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
        function Ar(e, t) {
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
            if (n = n.shared, (ve & 2) !== 0) {
                var a = n.pending;
                return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Eu(e), Ao(e, null, l), t;
            }
            return Su(e, n, t, l), Eu(e);
        }
        function ya(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, xf(e, l);
            }
        }
        function Or(e, t) {
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
        var Nr = !1;
        function va() {
            if (Nr) {
                var e = On;
                if (e !== null) throw e;
            }
        }
        function ga(e, t, l, n) {
            Nr = !1;
            var a = e.updateQueue;
            pl = !1;
            var i = a.firstBaseUpdate, s = a.lastBaseUpdate, h = a.shared.pending;
            if (h !== null) {
                a.shared.pending = null;
                var g = h, N = g.next;
                g.next = null, s === null ? i = N : s.next = N, s = g;
                var U = e.alternate;
                U !== null && (U = U.updateQueue, h = U.lastBaseUpdate, h !== s && (h === null ? U.firstBaseUpdate = N : h.next = N, U.lastBaseUpdate = g));
            }
            if (i !== null) {
                var Q = a.baseState;
                s = 0, U = N = g = null, h = i;
                do {
                    var C = h.lane & -536870913, x = C !== h.lane;
                    if (x ? (he & C) === C : (n & C) === C) {
                        C !== 0 && C === An && (Nr = !0), U !== null && (U = U.next = {
                            lane: 0,
                            tag: h.tag,
                            payload: h.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var ee = e, F = h;
                            C = t;
                            var _e = l;
                            switch(F.tag){
                                case 1:
                                    if (ee = F.payload, typeof ee == "function") {
                                        Q = ee.call(_e, Q, C);
                                        break e;
                                    }
                                    Q = ee;
                                    break e;
                                case 3:
                                    ee.flags = ee.flags & -65537 | 128;
                                case 0:
                                    if (ee = F.payload, C = typeof ee == "function" ? ee.call(_e, Q, C) : ee, C == null) break e;
                                    Q = E({}, Q, C);
                                    break e;
                                case 2:
                                    pl = !0;
                            }
                        }
                        C = h.callback, C !== null && (e.flags |= 64, x && (e.flags |= 8192), x = a.callbacks, x === null ? a.callbacks = [
                            C
                        ] : x.push(C));
                    } else x = {
                        lane: C,
                        tag: h.tag,
                        payload: h.payload,
                        callback: h.callback,
                        next: null
                    }, U === null ? (N = U = x, g = Q) : U = U.next = x, s |= C;
                    if (h = h.next, h === null) {
                        if (h = a.shared.pending, h === null) break;
                        x = h, h = x.next, x.next = null, a.lastBaseUpdate = x, a.shared.pending = null;
                    }
                }while (!0);
                U === null && (g = Q), a.baseState = g, a.firstBaseUpdate = N, a.lastBaseUpdate = U, i === null && (a.shared.lanes = 0), Tl |= s, e.lanes = s, e.memoizedState = Q;
            }
        }
        function Qo(e, t) {
            if (typeof e != "function") throw Error(f(191, e));
            e.call(t);
        }
        function Ko(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)Qo(l[e], t);
        }
        var Nn = q(null), Cu = q(0);
        function jo(e, t) {
            e = al, k(Cu, e), k(Nn, t), al = e | t.baseLanes;
        }
        function Mr() {
            k(Cu, al), k(Nn, Nn.current);
        }
        function Dr() {
            al = Cu.current, X(Nn), X(Cu);
        }
        var vl = 0, ue = null, Se = null, ze = null, xu = !1, Mn = !1, Fl = !1, Bu = 0, ba = 0, Dn = null, I0 = 0;
        function xe() {
            throw Error(f(321));
        }
        function Cr(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!ht(e[l], t[l])) return !1;
            return !0;
        }
        function xr(e, t, l, n, a, i) {
            return vl = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e === null || e.memoizedState === null ? As : Os, Fl = !1, i = l(n, a), Fl = !1, Mn && (i = ko(t, l, n, a)), Yo(e), i;
        }
        function Yo(e) {
            B.H = Hu;
            var t = Se !== null && Se.next !== null;
            if (vl = 0, ze = Se = ue = null, xu = !1, ba = 0, Dn = null, t) throw Error(f(300));
            e === null || je || (e = e.dependencies, e !== null && Au(e) && (je = !0));
        }
        function ko(e, t, l, n) {
            ue = e;
            var a = 0;
            do {
                if (Mn && (Dn = null), ba = 0, Mn = !1, 25 <= a) throw Error(f(301));
                if (a += 1, ze = Se = null, e.updateQueue != null) {
                    var i = e.updateQueue;
                    i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
                }
                B.H = i1, i = t(l, n);
            }while (Mn);
            return i;
        }
        function e1() {
            var e = B.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? Sa(t) : t, e = e.useState()[0], (Se !== null ? Se.memoizedState : null) !== e && (ue.flags |= 1024), t;
        }
        function Br() {
            var e = Bu !== 0;
            return Bu = 0, e;
        }
        function Ur(e, t, l) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
        }
        function zr(e) {
            if (xu) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                xu = !1;
            }
            vl = 0, ze = Se = ue = null, Mn = !1, ba = Bu = 0, Dn = null;
        }
        function rt() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return ze === null ? ue.memoizedState = ze = e : ze = ze.next = e, ze;
        }
        function qe() {
            if (Se === null) {
                var e = ue.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = Se.next;
            var t = ze === null ? ue.memoizedState : ze.next;
            if (t !== null) ze = t, Se = e;
            else {
                if (e === null) throw ue.alternate === null ? Error(f(467)) : Error(f(310));
                Se = e, e = {
                    memoizedState: Se.memoizedState,
                    baseState: Se.baseState,
                    baseQueue: Se.baseQueue,
                    queue: Se.queue,
                    next: null
                }, ze === null ? ue.memoizedState = ze = e : ze = ze.next = e;
            }
            return ze;
        }
        function qr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function Sa(e) {
            var t = ba;
            return ba += 1, Dn === null && (Dn = []), e = wo(Dn, e, t), t = ue, (ze === null ? t.memoizedState : ze.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? As : Os), e;
        }
        function Uu(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return Sa(e);
                if (e.$$typeof === w) return Fe(e);
            }
            throw Error(f(438, String(e)));
        }
        function Pr(e) {
            var t = null, l = ue.updateQueue;
            if (l !== null && (t = l.memoCache), t == null) {
                var n = ue.alternate;
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
            }), l === null && (l = qr(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), n = 0; n < e; n++)l[n] = Ne;
            return t.index++, l;
        }
        function Ft(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function zu(e) {
            var t = qe();
            return wr(t, Se, e);
        }
        function wr(e, t, l) {
            var n = e.queue;
            if (n === null) throw Error(f(311));
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
                var h = s = null, g = null, N = t, U = !1;
                do {
                    var Q = N.lane & -536870913;
                    if (Q !== N.lane ? (he & Q) === Q : (vl & Q) === Q) {
                        var C = N.revertLane;
                        if (C === 0) g !== null && (g = g.next = {
                            lane: 0,
                            revertLane: 0,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        }), Q === An && (U = !0);
                        else if ((vl & C) === C) {
                            N = N.next, C === An && (U = !0);
                            continue;
                        } else Q = {
                            lane: 0,
                            revertLane: N.revertLane,
                            action: N.action,
                            hasEagerState: N.hasEagerState,
                            eagerState: N.eagerState,
                            next: null
                        }, g === null ? (h = g = Q, s = i) : g = g.next = Q, ue.lanes |= C, Tl |= C;
                        Q = N.action, Fl && l(i, Q), i = N.hasEagerState ? N.eagerState : l(i, Q);
                    } else C = {
                        lane: Q,
                        revertLane: N.revertLane,
                        action: N.action,
                        hasEagerState: N.hasEagerState,
                        eagerState: N.eagerState,
                        next: null
                    }, g === null ? (h = g = C, s = i) : g = g.next = C, ue.lanes |= Q, Tl |= Q;
                    N = N.next;
                }while (N !== null && N !== t);
                if (g === null ? s = i : g.next = h, !ht(i, e.memoizedState) && (je = !0, U && (l = On, l !== null))) throw l;
                e.memoizedState = i, e.baseState = s, e.baseQueue = g, n.lastRenderedState = i;
            }
            return a === null && (n.lanes = 0), [
                e.memoizedState,
                n.dispatch
            ];
        }
        function Hr(e) {
            var t = qe(), l = t.queue;
            if (l === null) throw Error(f(311));
            l.lastRenderedReducer = e;
            var n = l.dispatch, a = l.pending, i = t.memoizedState;
            if (a !== null) {
                l.pending = null;
                var s = a = a.next;
                do i = e(i, s.action), s = s.next;
                while (s !== a);
                ht(i, t.memoizedState) || (je = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
            }
            return [
                i,
                n
            ];
        }
        function Go(e, t, l) {
            var n = ue, a = qe(), i = ye;
            if (i) {
                if (l === void 0) throw Error(f(407));
                l = l();
            } else l = t();
            var s = !ht((Se || a).memoizedState, l);
            s && (a.memoizedState = l, je = !0), a = a.queue;
            var h = Zo.bind(null, n, a, e);
            if (Ea(2048, 8, h, [
                e
            ]), a.getSnapshot !== t || s || ze !== null && ze.memoizedState.tag & 1) {
                if (n.flags |= 2048, Cn(9, qu(), Vo.bind(null, n, a, l, t), null), Te === null) throw Error(f(349));
                i || (vl & 124) !== 0 || Xo(n, t, l);
            }
            return l;
        }
        function Xo(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = ue.updateQueue, t === null ? (t = qr(), ue.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function Vo(e, t, l, n) {
            t.value = l, t.getSnapshot = n, Jo(t) && $o(e);
        }
        function Zo(e, t, l) {
            return l(function() {
                Jo(t) && $o(e);
            });
        }
        function Jo(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !ht(e, l);
            } catch  {
                return !0;
            }
        }
        function $o(e) {
            var t = En(e, 2);
            t !== null && bt(t, e, 2);
        }
        function Lr(e) {
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
        function Wo(e, t, l, n) {
            return e.baseState = l, wr(e, Se, typeof n == "function" ? n : Ft);
        }
        function t1(e, t, l, n, a) {
            if (wu(e)) throw Error(f(485));
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
                B.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, Fo(t, i)) : (i.next = l.next, t.pending = l.next = i);
            }
        }
        function Fo(e, t) {
            var l = t.action, n = t.payload, a = e.state;
            if (t.isTransition) {
                var i = B.T, s = {};
                B.T = s;
                try {
                    var h = l(a, n), g = B.S;
                    g !== null && g(s, h), Io(e, t, h);
                } catch (N) {
                    Qr(e, t, N);
                } finally{
                    B.T = i;
                }
            } else try {
                i = l(a, n), Io(e, t, i);
            } catch (N) {
                Qr(e, t, N);
            }
        }
        function Io(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(n) {
                es(e, t, n);
            }, function(n) {
                return Qr(e, t, n);
            }) : es(e, t, l);
        }
        function es(e, t, l) {
            t.status = "fulfilled", t.value = l, ts(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Fo(e, l)));
        }
        function Qr(e, t, l) {
            var n = e.pending;
            if (e.pending = null, n !== null) {
                n = n.next;
                do t.status = "rejected", t.reason = l, ts(t), t = t.next;
                while (t !== n);
            }
            e.action = null;
        }
        function ts(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function ls(e, t) {
            return t;
        }
        function ns(e, t) {
            if (ye) {
                var l = Te.formState;
                if (l !== null) {
                    e: {
                        var n = ue;
                        if (ye) {
                            if (De) {
                                t: {
                                    for(var a = De, i = wt; a.nodeType !== 8;){
                                        if (!i) {
                                            a = null;
                                            break t;
                                        }
                                        if (a = zt(a.nextSibling), a === null) {
                                            a = null;
                                            break t;
                                        }
                                    }
                                    i = a.data, a = i === "F!" || i === "F" ? a : null;
                                }
                                if (a) {
                                    De = zt(a.nextSibling), n = a.data === "F!";
                                    break e;
                                }
                            }
                            Zl(n);
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
                lastRenderedReducer: ls,
                lastRenderedState: t
            }, l.queue = n, l = _s.bind(null, ue, n), n.dispatch = l, n = Lr(!1), i = Gr.bind(null, ue, !1, n.queue), n = rt(), a = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, n.queue = a, l = t1.bind(null, ue, a, i, l), a.dispatch = l, n.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function as(e) {
            var t = qe();
            return us(t, Se, e);
        }
        function us(e, t, l) {
            if (t = wr(e, t, ls)[0], e = zu(Ft)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var n = Sa(t);
            } catch (s) {
                throw s === pa ? Mu : s;
            }
            else n = t;
            t = qe();
            var a = t.queue, i = a.dispatch;
            return l !== t.memoizedState && (ue.flags |= 2048, Cn(9, qu(), l1.bind(null, a, l), null)), [
                n,
                i,
                e
            ];
        }
        function l1(e, t) {
            e.action = t;
        }
        function is(e) {
            var t = qe(), l = Se;
            if (l !== null) return us(t, l, e);
            qe(), t = t.memoizedState, l = qe();
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
            }, t = ue.updateQueue, t === null && (t = qr(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
        }
        function qu() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function rs() {
            return qe().memoizedState;
        }
        function Pu(e, t, l, n) {
            var a = rt();
            n = n === void 0 ? null : n, ue.flags |= e, a.memoizedState = Cn(1 | t, qu(), l, n);
        }
        function Ea(e, t, l, n) {
            var a = qe();
            n = n === void 0 ? null : n;
            var i = a.memoizedState.inst;
            Se !== null && n !== null && Cr(n, Se.memoizedState.deps) ? a.memoizedState = Cn(t, i, l, n) : (ue.flags |= e, a.memoizedState = Cn(1 | t, i, l, n));
        }
        function cs(e, t) {
            Pu(8390656, 8, e, t);
        }
        function fs(e, t) {
            Ea(2048, 8, e, t);
        }
        function os(e, t) {
            return Ea(4, 2, e, t);
        }
        function ss(e, t) {
            return Ea(4, 4, e, t);
        }
        function ds(e, t) {
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
        function hs(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, Ea(4, 4, ds.bind(null, t, e), l);
        }
        function Kr() {}
        function ps(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            return t !== null && Cr(t, n[1]) ? n[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function ms(e, t) {
            var l = qe();
            t = t === void 0 ? null : t;
            var n = l.memoizedState;
            if (t !== null && Cr(t, n[1])) return n[0];
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
        function jr(e, t, l) {
            return l === void 0 || (vl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = gd(), ue.lanes |= e, Tl |= e, l);
        }
        function ys(e, t, l, n) {
            return ht(l, t) ? l : Nn.current !== null ? (e = jr(e, l, n), ht(e, t) || (je = !0), e) : (vl & 42) === 0 ? (je = !0, e.memoizedState = l) : (e = gd(), ue.lanes |= e, Tl |= e, t);
        }
        function vs(e, t, l, n, a) {
            var i = j.p;
            j.p = i !== 0 && 8 > i ? i : 8;
            var s = B.T, h = {};
            B.T = h, Gr(e, !1, t, l);
            try {
                var g = a(), N = B.S;
                if (N !== null && N(h, g), g !== null && typeof g == "object" && typeof g.then == "function") {
                    var U = F0(g, n);
                    _a(e, t, U, gt(e));
                } else _a(e, t, n, gt(e));
            } catch (Q) {
                _a(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: Q
                }, gt());
            } finally{
                j.p = i, B.T = s;
            }
        }
        function n1() {}
        function Yr(e, t, l, n) {
            if (e.tag !== 5) throw Error(f(476));
            var a = gs(e).queue;
            vs(e, a, t, G, l === null ? n1 : function() {
                return bs(e), l(n);
            });
        }
        function gs(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: G,
                baseState: G,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ft,
                    lastRenderedState: G
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
        function bs(e) {
            var t = gs(e).next.queue;
            _a(e, t, {}, gt());
        }
        function kr() {
            return Fe(Qa);
        }
        function Ss() {
            return qe().memoizedState;
        }
        function Es() {
            return qe().memoizedState;
        }
        function a1(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = gt();
                        e = ml(l);
                        var n = yl(t, e, l);
                        n !== null && (bt(n, t, l), ya(n, t, l)), t = {
                            cache: Sr()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function u1(e, t, l) {
            var n = gt();
            l = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, wu(e) ? Rs(t, l) : (l = or(e, t, l, n), l !== null && (bt(l, e, n), Ts(l, t, n)));
        }
        function _s(e, t, l) {
            var n = gt();
            _a(e, t, l, n);
        }
        function _a(e, t, l, n) {
            var a = {
                lane: n,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (wu(e)) Rs(t, a);
            else {
                var i = e.alternate;
                if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
                    var s = t.lastRenderedState, h = i(s, l);
                    if (a.hasEagerState = !0, a.eagerState = h, ht(h, s)) return Su(e, t, a, 0), Te === null && bu(), !1;
                } catch  {} finally{}
                if (l = or(e, t, a, n), l !== null) return bt(l, e, n), Ts(l, t, n), !0;
            }
            return !1;
        }
        function Gr(e, t, l, n) {
            if (n = {
                lane: 2,
                revertLane: Rc(),
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, wu(e)) {
                if (t) throw Error(f(479));
            } else t = or(e, l, n, 2), t !== null && bt(t, e, 2);
        }
        function wu(e) {
            var t = e.alternate;
            return e === ue || t !== null && t === ue;
        }
        function Rs(e, t) {
            Mn = xu = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function Ts(e, t, l) {
            if ((l & 4194048) !== 0) {
                var n = t.lanes;
                n &= e.pendingLanes, l |= n, t.lanes = l, xf(e, l);
            }
        }
        var Hu = {
            readContext: Fe,
            use: Uu,
            useCallback: xe,
            useContext: xe,
            useEffect: xe,
            useImperativeHandle: xe,
            useLayoutEffect: xe,
            useInsertionEffect: xe,
            useMemo: xe,
            useReducer: xe,
            useRef: xe,
            useState: xe,
            useDebugValue: xe,
            useDeferredValue: xe,
            useTransition: xe,
            useSyncExternalStore: xe,
            useId: xe,
            useHostTransitionStatus: xe,
            useFormState: xe,
            useActionState: xe,
            useOptimistic: xe,
            useMemoCache: xe,
            useCacheRefresh: xe
        }, As = {
            readContext: Fe,
            use: Uu,
            useCallback: function(e, t) {
                return rt().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: Fe,
            useEffect: cs,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, Pu(4194308, 4, ds.bind(null, t, e), l);
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
                }, n.queue = e, e = e.dispatch = u1.bind(null, ue, e), [
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
                e = Lr(e);
                var t = e.queue, l = _s.bind(null, ue, t);
                return t.dispatch = l, [
                    e.memoizedState,
                    l
                ];
            },
            useDebugValue: Kr,
            useDeferredValue: function(e, t) {
                var l = rt();
                return jr(l, e, t);
            },
            useTransition: function() {
                var e = Lr(!1);
                return e = vs.bind(null, ue, e.queue, !0, !1), rt().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, l) {
                var n = ue, a = rt();
                if (ye) {
                    if (l === void 0) throw Error(f(407));
                    l = l();
                } else {
                    if (l = t(), Te === null) throw Error(f(349));
                    (he & 124) !== 0 || Xo(n, t, l);
                }
                a.memoizedState = l;
                var i = {
                    value: l,
                    getSnapshot: t
                };
                return a.queue = i, cs(Zo.bind(null, n, i, e), [
                    e
                ]), n.flags |= 2048, Cn(9, qu(), Vo.bind(null, n, i, l, t), null), l;
            },
            useId: function() {
                var e = rt(), t = Te.identifierPrefix;
                if (ye) {
                    var l = Jt, n = Zt;
                    l = (n & ~(1 << 32 - dt(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Bu++, 0 < l && (t += "H" + l.toString(32)), t += "»";
                } else l = I0++, t = "«" + t + "r" + l.toString(32) + "»";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: kr,
            useFormState: ns,
            useActionState: ns,
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
                return t.queue = l, t = Gr.bind(null, ue, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Pr,
            useCacheRefresh: function() {
                return rt().memoizedState = a1.bind(null, ue);
            }
        }, Os = {
            readContext: Fe,
            use: Uu,
            useCallback: ps,
            useContext: Fe,
            useEffect: fs,
            useImperativeHandle: hs,
            useInsertionEffect: os,
            useLayoutEffect: ss,
            useMemo: ms,
            useReducer: zu,
            useRef: rs,
            useState: function() {
                return zu(Ft);
            },
            useDebugValue: Kr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return ys(l, Se.memoizedState, e, t);
            },
            useTransition: function() {
                var e = zu(Ft)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Sa(e),
                    t
                ];
            },
            useSyncExternalStore: Go,
            useId: Ss,
            useHostTransitionStatus: kr,
            useFormState: as,
            useActionState: as,
            useOptimistic: function(e, t) {
                var l = qe();
                return Wo(l, Se, e, t);
            },
            useMemoCache: Pr,
            useCacheRefresh: Es
        }, i1 = {
            readContext: Fe,
            use: Uu,
            useCallback: ps,
            useContext: Fe,
            useEffect: fs,
            useImperativeHandle: hs,
            useInsertionEffect: os,
            useLayoutEffect: ss,
            useMemo: ms,
            useReducer: Hr,
            useRef: rs,
            useState: function() {
                return Hr(Ft);
            },
            useDebugValue: Kr,
            useDeferredValue: function(e, t) {
                var l = qe();
                return Se === null ? jr(l, e, t) : ys(l, Se.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Hr(Ft)[0], t = qe().memoizedState;
                return [
                    typeof e == "boolean" ? e : Sa(e),
                    t
                ];
            },
            useSyncExternalStore: Go,
            useId: Ss,
            useHostTransitionStatus: kr,
            useFormState: is,
            useActionState: is,
            useOptimistic: function(e, t) {
                var l = qe();
                return Se !== null ? Wo(l, Se, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: Pr,
            useCacheRefresh: Es
        }, xn = null, Ra = 0;
        function Lu(e) {
            var t = Ra;
            return Ra += 1, xn === null && (xn = []), wo(xn, e, t);
        }
        function Ta(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Qu(e, t) {
            throw t.$$typeof === R ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Ns(e) {
            var t = e._init;
            return t(e._payload);
        }
        function Ms(e) {
            function t(T, _) {
                if (e) {
                    var O = T.deletions;
                    O === null ? (T.deletions = [
                        _
                    ], T.flags |= 16) : O.push(_);
                }
            }
            function l(T, _) {
                if (!e) return null;
                for(; _ !== null;)t(T, _), _ = _.sibling;
                return null;
            }
            function n(T) {
                for(var _ = new Map; T !== null;)T.key !== null ? _.set(T.key, T) : _.set(T.index, T), T = T.sibling;
                return _;
            }
            function a(T, _) {
                return T = Vt(T, _), T.index = 0, T.sibling = null, T;
            }
            function i(T, _, O) {
                return T.index = O, e ? (O = T.alternate, O !== null ? (O = O.index, O < _ ? (T.flags |= 67108866, _) : O) : (T.flags |= 67108866, _)) : (T.flags |= 1048576, _);
            }
            function s(T) {
                return e && T.alternate === null && (T.flags |= 67108866), T;
            }
            function h(T, _, O, P) {
                return _ === null || _.tag !== 6 ? (_ = dr(O, T.mode, P), _.return = T, _) : (_ = a(_, O), _.return = T, _);
            }
            function g(T, _, O, P) {
                var Z = O.type;
                return Z === D ? U(T, _, O.props.children, P, O.key) : _ !== null && (_.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === pe && Ns(Z) === _.type) ? (_ = a(_, O.props), Ta(_, O), _.return = T, _) : (_ = _u(O.type, O.key, O.props, null, T.mode, P), Ta(_, O), _.return = T, _);
            }
            function N(T, _, O, P) {
                return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== O.containerInfo || _.stateNode.implementation !== O.implementation ? (_ = hr(O, T.mode, P), _.return = T, _) : (_ = a(_, O.children || []), _.return = T, _);
            }
            function U(T, _, O, P, Z) {
                return _ === null || _.tag !== 7 ? (_ = kl(O, T.mode, P, Z), _.return = T, _) : (_ = a(_, O), _.return = T, _);
            }
            function Q(T, _, O) {
                if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return _ = dr("" + _, T.mode, O), _.return = T, _;
                if (typeof _ == "object" && _ !== null) {
                    switch(_.$$typeof){
                        case b:
                            return O = _u(_.type, _.key, _.props, null, T.mode, O), Ta(O, _), O.return = T, O;
                        case M:
                            return _ = hr(_, T.mode, O), _.return = T, _;
                        case pe:
                            var P = _._init;
                            return _ = P(_._payload), Q(T, _, O);
                    }
                    if (Le(_) || Ue(_)) return _ = kl(_, T.mode, O, null), _.return = T, _;
                    if (typeof _.then == "function") return Q(T, Lu(_), O);
                    if (_.$$typeof === w) return Q(T, Ou(T, _), O);
                    Qu(T, _);
                }
                return null;
            }
            function C(T, _, O, P) {
                var Z = _ !== null ? _.key : null;
                if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return Z !== null ? null : h(T, _, "" + O, P);
                if (typeof O == "object" && O !== null) {
                    switch(O.$$typeof){
                        case b:
                            return O.key === Z ? g(T, _, O, P) : null;
                        case M:
                            return O.key === Z ? N(T, _, O, P) : null;
                        case pe:
                            return Z = O._init, O = Z(O._payload), C(T, _, O, P);
                    }
                    if (Le(O) || Ue(O)) return Z !== null ? null : U(T, _, O, P, null);
                    if (typeof O.then == "function") return C(T, _, Lu(O), P);
                    if (O.$$typeof === w) return C(T, _, Ou(T, O), P);
                    Qu(T, O);
                }
                return null;
            }
            function x(T, _, O, P, Z) {
                if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint") return T = T.get(O) || null, h(_, T, "" + P, Z);
                if (typeof P == "object" && P !== null) {
                    switch(P.$$typeof){
                        case b:
                            return T = T.get(P.key === null ? O : P.key) || null, g(_, T, P, Z);
                        case M:
                            return T = T.get(P.key === null ? O : P.key) || null, N(_, T, P, Z);
                        case pe:
                            var re = P._init;
                            return P = re(P._payload), x(T, _, O, P, Z);
                    }
                    if (Le(P) || Ue(P)) return T = T.get(O) || null, U(_, T, P, Z, null);
                    if (typeof P.then == "function") return x(T, _, O, Lu(P), Z);
                    if (P.$$typeof === w) return x(T, _, O, Ou(_, P), Z);
                    Qu(_, P);
                }
                return null;
            }
            function ee(T, _, O, P) {
                for(var Z = null, re = null, $ = _, I = _ = 0, ke = null; $ !== null && I < O.length; I++){
                    $.index > I ? (ke = $, $ = null) : ke = $.sibling;
                    var me = C(T, $, O[I], P);
                    if (me === null) {
                        $ === null && ($ = ke);
                        break;
                    }
                    e && $ && me.alternate === null && t(T, $), _ = i(me, _, I), re === null ? Z = me : re.sibling = me, re = me, $ = ke;
                }
                if (I === O.length) return l(T, $), ye && Xl(T, I), Z;
                if ($ === null) {
                    for(; I < O.length; I++)$ = Q(T, O[I], P), $ !== null && (_ = i($, _, I), re === null ? Z = $ : re.sibling = $, re = $);
                    return ye && Xl(T, I), Z;
                }
                for($ = n($); I < O.length; I++)ke = x($, T, I, O[I], P), ke !== null && (e && ke.alternate !== null && $.delete(ke.key === null ? I : ke.key), _ = i(ke, _, I), re === null ? Z = ke : re.sibling = ke, re = ke);
                return e && $.forEach(function(Ul) {
                    return t(T, Ul);
                }), ye && Xl(T, I), Z;
            }
            function F(T, _, O, P) {
                if (O == null) throw Error(f(151));
                for(var Z = null, re = null, $ = _, I = _ = 0, ke = null, me = O.next(); $ !== null && !me.done; I++, me = O.next()){
                    $.index > I ? (ke = $, $ = null) : ke = $.sibling;
                    var Ul = C(T, $, me.value, P);
                    if (Ul === null) {
                        $ === null && ($ = ke);
                        break;
                    }
                    e && $ && Ul.alternate === null && t(T, $), _ = i(Ul, _, I), re === null ? Z = Ul : re.sibling = Ul, re = Ul, $ = ke;
                }
                if (me.done) return l(T, $), ye && Xl(T, I), Z;
                if ($ === null) {
                    for(; !me.done; I++, me = O.next())me = Q(T, me.value, P), me !== null && (_ = i(me, _, I), re === null ? Z = me : re.sibling = me, re = me);
                    return ye && Xl(T, I), Z;
                }
                for($ = n($); !me.done; I++, me = O.next())me = x($, T, I, me.value, P), me !== null && (e && me.alternate !== null && $.delete(me.key === null ? I : me.key), _ = i(me, _, I), re === null ? Z = me : re.sibling = me, re = me);
                return e && $.forEach(function(rm) {
                    return t(T, rm);
                }), ye && Xl(T, I), Z;
            }
            function _e(T, _, O, P) {
                if (typeof O == "object" && O !== null && O.type === D && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
                    switch(O.$$typeof){
                        case b:
                            e: {
                                for(var Z = O.key; _ !== null;){
                                    if (_.key === Z) {
                                        if (Z = O.type, Z === D) {
                                            if (_.tag === 7) {
                                                l(T, _.sibling), P = a(_, O.props.children), P.return = T, T = P;
                                                break e;
                                            }
                                        } else if (_.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === pe && Ns(Z) === _.type) {
                                            l(T, _.sibling), P = a(_, O.props), Ta(P, O), P.return = T, T = P;
                                            break e;
                                        }
                                        l(T, _);
                                        break;
                                    } else t(T, _);
                                    _ = _.sibling;
                                }
                                O.type === D ? (P = kl(O.props.children, T.mode, P, O.key), P.return = T, T = P) : (P = _u(O.type, O.key, O.props, null, T.mode, P), Ta(P, O), P.return = T, T = P);
                            }
                            return s(T);
                        case M:
                            e: {
                                for(Z = O.key; _ !== null;){
                                    if (_.key === Z) if (_.tag === 4 && _.stateNode.containerInfo === O.containerInfo && _.stateNode.implementation === O.implementation) {
                                        l(T, _.sibling), P = a(_, O.children || []), P.return = T, T = P;
                                        break e;
                                    } else {
                                        l(T, _);
                                        break;
                                    }
                                    else t(T, _);
                                    _ = _.sibling;
                                }
                                P = hr(O, T.mode, P), P.return = T, T = P;
                            }
                            return s(T);
                        case pe:
                            return Z = O._init, O = Z(O._payload), _e(T, _, O, P);
                    }
                    if (Le(O)) return ee(T, _, O, P);
                    if (Ue(O)) {
                        if (Z = Ue(O), typeof Z != "function") throw Error(f(150));
                        return O = Z.call(O), F(T, _, O, P);
                    }
                    if (typeof O.then == "function") return _e(T, _, Lu(O), P);
                    if (O.$$typeof === w) return _e(T, _, Ou(T, O), P);
                    Qu(T, O);
                }
                return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, _ !== null && _.tag === 6 ? (l(T, _.sibling), P = a(_, O), P.return = T, T = P) : (l(T, _), P = dr(O, T.mode, P), P.return = T, T = P), s(T)) : l(T, _);
            }
            return function(T, _, O, P) {
                try {
                    Ra = 0;
                    var Z = _e(T, _, O, P);
                    return xn = null, Z;
                } catch ($) {
                    if ($ === pa || $ === Mu) throw $;
                    var re = pt(29, $, null, T.mode);
                    return re.lanes = P, re.return = T, re;
                } finally{}
            };
        }
        var Bn = Ms(!0), Ds = Ms(!1), Ot = q(null), Ht = null;
        function gl(e) {
            var t = e.alternate;
            k(we, we.current & 1), k(Ot, e), Ht === null && (t === null || Nn.current !== null || t.memoizedState !== null) && (Ht = e);
        }
        function Cs(e) {
            if (e.tag === 22) {
                if (k(we, we.current), k(Ot, e), Ht === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (Ht = e);
                }
            } else bl();
        }
        function bl() {
            k(we, we.current), k(Ot, Ot.current);
        }
        function It(e) {
            X(Ot), Ht === e && (Ht = null), X(we);
        }
        var we = q(0);
        function Ku(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var l = t.memoizedState;
                    if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || qc(l))) return t;
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
        function Xr(e, t, l, n) {
            t = e.memoizedState, l = l(n, t), l = l == null ? t : E({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var Vr = {
            enqueueSetState: function(e, t, l) {
                e = e._reactInternals;
                var n = gt(), a = ml(n);
                a.payload = t, l != null && (a.callback = l), t = yl(e, a, n), t !== null && (bt(t, e, n), ya(t, e, n));
            },
            enqueueReplaceState: function(e, t, l) {
                e = e._reactInternals;
                var n = gt(), a = ml(n);
                a.tag = 1, a.payload = t, l != null && (a.callback = l), t = yl(e, a, n), t !== null && (bt(t, e, n), ya(t, e, n));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var l = gt(), n = ml(l);
                n.tag = 2, t != null && (n.callback = t), t = yl(e, n, l), t !== null && (bt(t, e, l), ya(t, e, l));
            }
        };
        function xs(e, t, l, n, a, i, s) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ia(l, n) || !ia(a, i) : !0;
        }
        function Bs(e, t, l, n) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Vr.enqueueReplaceState(t, t.state, null);
        }
        function Il(e, t) {
            var l = t;
            if ("ref" in t) {
                l = {};
                for(var n in t)n !== "ref" && (l[n] = t[n]);
            }
            if (e = e.defaultProps) {
                l === t && (l = E({}, l));
                for(var a in e)l[a] === void 0 && (l[a] = e[a]);
            }
            return l;
        }
        var ju = typeof reportError == "function" ? reportError : function(e) {
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
        function Us(e) {
            ju(e);
        }
        function zs(e) {
            console.error(e);
        }
        function qs(e) {
            ju(e);
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
        function Ps(e, t, l) {
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
        function Zr(e, t, l) {
            return l = ml(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Yu(e, t);
            }, l;
        }
        function ws(e) {
            return e = ml(e), e.tag = 3, e;
        }
        function Hs(e, t, l, n) {
            var a = l.type.getDerivedStateFromError;
            if (typeof a == "function") {
                var i = n.value;
                e.payload = function() {
                    return a(i);
                }, e.callback = function() {
                    Ps(t, l, n);
                };
            }
            var s = l.stateNode;
            s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
                Ps(t, l, n), typeof a != "function" && (Al === null ? Al = new Set([
                    this
                ]) : Al.add(this));
                var h = n.stack;
                this.componentDidCatch(n.value, {
                    componentStack: h !== null ? h : ""
                });
            });
        }
        function r1(e, t, l, n, a) {
            if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
                if (t = l.alternate, t !== null && sa(t, l, a, !0), l = Ot.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return Ht === null ? gc() : l.alternate === null && Ce === 0 && (Ce = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Rr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
                                n
                            ]) : t.add(n), Sc(e, n, a)), !1;
                        case 22:
                            return l.flags |= 65536, n === Rr ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    n
                                ])
                            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([
                                n
                            ]) : l.add(n)), Sc(e, n, a)), !1;
                    }
                    throw Error(f(435, l.tag));
                }
                return Sc(e, n, a), gc(), !1;
            }
            if (ye) return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== yr && (e = Error(f(422), {
                cause: n
            }), oa(_t(e, l)))) : (n !== yr && (t = Error(f(423), {
                cause: n
            }), oa(_t(t, l))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = Zr(e.stateNode, n, a), Or(e, a), Ce !== 4 && (Ce = 2)), !1;
            var i = Error(f(520), {
                cause: n
            });
            if (i = _t(i, l), xa === null ? xa = [
                i
            ] : xa.push(i), Ce !== 4 && (Ce = 2), t === null) return !0;
            n = _t(n, l), l = t;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, e = a & -a, l.lanes |= e, e = Zr(l.stateNode, n, e), Or(l, e), !1;
                    case 1:
                        if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Al === null || !Al.has(i)))) return l.flags |= 65536, a &= -a, l.lanes |= a, a = ws(a), Hs(a, e, l, n), Or(l, a), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Ls = Error(f(461)), je = !1;
        function Xe(e, t, l, n) {
            t.child = e === null ? Ds(t, null, l, n) : Bn(t, e.child, l, n);
        }
        function Qs(e, t, l, n, a) {
            l = l.render;
            var i = t.ref;
            if ("ref" in n) {
                var s = {};
                for(var h in n)h !== "ref" && (s[h] = n[h]);
            } else s = n;
            return $l(t), n = xr(e, t, l, s, i, a), h = Br(), e !== null && !je ? (Ur(e, t, a), el(e, t, a)) : (ye && h && pr(t), t.flags |= 1, Xe(e, t, n, a), t.child);
        }
        function Ks(e, t, l, n, a) {
            if (e === null) {
                var i = l.type;
                return typeof i == "function" && !sr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, js(e, t, i, n, a)) : (e = _u(l.type, null, n, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (i = e.child, !lc(e, a)) {
                var s = i.memoizedProps;
                if (l = l.compare, l = l !== null ? l : ia, l(s, n) && e.ref === t.ref) return el(e, t, a);
            }
            return t.flags |= 1, e = Vt(i, n), e.ref = t.ref, e.return = t, t.child = e;
        }
        function js(e, t, l, n, a) {
            if (e !== null) {
                var i = e.memoizedProps;
                if (ia(i, n) && e.ref === t.ref) if (je = !1, t.pendingProps = n = i, lc(e, a)) (e.flags & 131072) !== 0 && (je = !0);
                else return t.lanes = e.lanes, el(e, t, a);
            }
            return Jr(e, t, l, n, a);
        }
        function Ys(e, t, l) {
            var n = t.pendingProps, a = n.children, i = e !== null ? e.memoizedState : null;
            if (n.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (n = i !== null ? i.baseLanes | l : l, e !== null) {
                        for(a = t.child = e.child, i = 0; a !== null;)i = i | a.lanes | a.childLanes, a = a.sibling;
                        t.childLanes = i & ~n;
                    } else t.childLanes = 0, t.child = null;
                    return ks(e, t, n, l);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && Nu(t, i !== null ? i.cachePool : null), i !== null ? jo(t, i) : Mr(), Cs(t);
                else return t.lanes = t.childLanes = 536870912, ks(e, t, i !== null ? i.baseLanes | l : l, l);
            } else i !== null ? (Nu(t, i.cachePool), jo(t, i), bl(), t.memoizedState = null) : (e !== null && Nu(t, null), Mr(), bl());
            return Xe(e, t, a, l), t.child;
        }
        function ks(e, t, l, n) {
            var a = _r();
            return a = a === null ? null : {
                parent: Pe._currentValue,
                pool: a
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: a
            }, e !== null && Nu(t, null), Mr(), Cs(t), e !== null && sa(e, t, n, !0), null;
        }
        function ku(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(f(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function Jr(e, t, l, n, a) {
            return $l(t), l = xr(e, t, l, n, void 0, a), n = Br(), e !== null && !je ? (Ur(e, t, a), el(e, t, a)) : (ye && n && pr(t), t.flags |= 1, Xe(e, t, l, a), t.child);
        }
        function Gs(e, t, l, n, a, i) {
            return $l(t), t.updateQueue = null, l = ko(t, n, l, a), Yo(e), n = Br(), e !== null && !je ? (Ur(e, t, i), el(e, t, i)) : (ye && n && pr(t), t.flags |= 1, Xe(e, t, l, i), t.child);
        }
        function Xs(e, t, l, n, a) {
            if ($l(t), t.stateNode === null) {
                var i = _n, s = l.contextType;
                typeof s == "object" && s !== null && (i = Fe(s)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Vr, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Tr(t), s = l.contextType, i.context = typeof s == "object" && s !== null ? Fe(s) : _n, i.state = t.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (Xr(t, l, s, n), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && Vr.enqueueReplaceState(i, i.state, null), ga(t, n, i, a), va(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
            } else if (e === null) {
                i = t.stateNode;
                var h = t.memoizedProps, g = Il(l, h);
                i.props = g;
                var N = i.context, U = l.contextType;
                s = _n, typeof U == "object" && U !== null && (s = Fe(U));
                var Q = l.getDerivedStateFromProps;
                U = typeof Q == "function" || typeof i.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, U || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (h || N !== s) && Bs(t, i, n, s), pl = !1;
                var C = t.memoizedState;
                i.state = C, ga(t, n, i, a), va(), N = t.memoizedState, h || C !== N || pl ? (typeof Q == "function" && (Xr(t, l, Q, n), N = t.memoizedState), (g = pl || xs(t, l, g, n, C, N, s)) ? (U || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = N), i.props = n, i.state = N, i.context = s, n = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
            } else {
                i = t.stateNode, Ar(e, t), s = t.memoizedProps, U = Il(l, s), i.props = U, Q = t.pendingProps, C = i.context, N = l.contextType, g = _n, typeof N == "object" && N !== null && (g = Fe(N)), h = l.getDerivedStateFromProps, (N = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== Q || C !== g) && Bs(t, i, n, g), pl = !1, C = t.memoizedState, i.state = C, ga(t, n, i, a), va();
                var x = t.memoizedState;
                s !== Q || C !== x || pl || e !== null && e.dependencies !== null && Au(e.dependencies) ? (typeof h == "function" && (Xr(t, l, h, n), x = t.memoizedState), (U = pl || xs(t, l, U, n, C, x, g) || e !== null && e.dependencies !== null && Au(e.dependencies)) ? (N || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, x, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, x, g)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = x), i.props = n, i.state = x, i.context = g, n = U) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), n = !1);
            }
            return i = n, ku(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = Bn(t, e.child, null, a), t.child = Bn(t, null, l, a)) : Xe(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = el(e, t, a), e;
        }
        function Vs(e, t, l, n) {
            return fa(), t.flags |= 256, Xe(e, t, l, n), t.child;
        }
        var $r = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function Wr(e) {
            return {
                baseLanes: e,
                cachePool: zo()
            };
        }
        function Fr(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Nt), e;
        }
        function Zs(e, t, l) {
            var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, s;
            if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (we.current & 2) !== 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (ye) {
                    if (a ? gl(t) : bl(), ye) {
                        var h = De, g;
                        if (g = h) {
                            e: {
                                for(g = h, h = wt; g.nodeType !== 8;){
                                    if (!h) {
                                        h = null;
                                        break e;
                                    }
                                    if (g = zt(g.nextSibling), g === null) {
                                        h = null;
                                        break e;
                                    }
                                }
                                h = g;
                            }
                            h !== null ? (t.memoizedState = {
                                dehydrated: h,
                                treeContext: Gl !== null ? {
                                    id: Zt,
                                    overflow: Jt
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, g = pt(18, null, null, 0), g.stateNode = h, g.return = t, t.child = g, nt = t, De = null, g = !0) : g = !1;
                        }
                        g || Zl(t);
                    }
                    if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null)) return qc(h) ? t.lanes = 32 : t.lanes = 536870912, null;
                    It(t);
                }
                return h = n.children, n = n.fallback, a ? (bl(), a = t.mode, h = Gu({
                    mode: "hidden",
                    children: h
                }, a), n = kl(n, a, l, null), h.return = t, n.return = t, h.sibling = n, t.child = h, a = t.child, a.memoizedState = Wr(l), a.childLanes = Fr(e, s, l), t.memoizedState = $r, n) : (gl(t), Ir(t, h));
            }
            if (g = e.memoizedState, g !== null && (h = g.dehydrated, h !== null)) {
                if (i) t.flags & 256 ? (gl(t), t.flags &= -257, t = ec(e, t, l)) : t.memoizedState !== null ? (bl(), t.child = e.child, t.flags |= 128, t = null) : (bl(), a = n.fallback, h = t.mode, n = Gu({
                    mode: "visible",
                    children: n.children
                }, h), a = kl(a, h, l, null), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, Bn(t, e.child, null, l), n = t.child, n.memoizedState = Wr(l), n.childLanes = Fr(e, s, l), t.memoizedState = $r, t = a);
                else if (gl(t), qc(h)) {
                    if (s = h.nextSibling && h.nextSibling.dataset, s) var N = s.dgst;
                    s = N, n = Error(f(419)), n.stack = "", n.digest = s, oa({
                        value: n,
                        source: null,
                        stack: null
                    }), t = ec(e, t, l);
                } else if (je || sa(e, t, l, !1), s = (l & e.childLanes) !== 0, je || s) {
                    if (s = Te, s !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : Pi(n), n = (n & (s.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== g.retryLane)) throw g.retryLane = n, En(e, n), bt(s, e, n), Ls;
                    h.data === "$?" || gc(), t = ec(e, t, l);
                } else h.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, De = zt(h.nextSibling), nt = t, ye = !0, Vl = null, wt = !1, e !== null && (Tt[At++] = Zt, Tt[At++] = Jt, Tt[At++] = Gl, Zt = e.id, Jt = e.overflow, Gl = t), t = Ir(t, n.children), t.flags |= 4096);
                return t;
            }
            return a ? (bl(), a = n.fallback, h = t.mode, g = e.child, N = g.sibling, n = Vt(g, {
                mode: "hidden",
                children: n.children
            }), n.subtreeFlags = g.subtreeFlags & 65011712, N !== null ? a = Vt(N, a) : (a = kl(a, h, l, null), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, h = e.child.memoizedState, h === null ? h = Wr(l) : (g = h.cachePool, g !== null ? (N = Pe._currentValue, g = g.parent !== N ? {
                parent: N,
                pool: N
            } : g) : g = zo(), h = {
                baseLanes: h.baseLanes | l,
                cachePool: g
            }), a.memoizedState = h, a.childLanes = Fr(e, s, l), t.memoizedState = $r, n) : (gl(t), l = e.child, e = l.sibling, l = Vt(l, {
                mode: "visible",
                children: n.children
            }), l.return = t, l.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [
                e
            ], t.flags |= 16) : s.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function Ir(e, t) {
            return t = Gu({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Gu(e, t) {
            return e = pt(22, e, null, t), e.lanes = 0, e.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, e;
        }
        function ec(e, t, l) {
            return Bn(t, e.child, null, l), e = Ir(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function Js(e, t, l) {
            e.lanes |= t;
            var n = e.alternate;
            n !== null && (n.lanes |= t), gr(e.return, t, l);
        }
        function tc(e, t, l, n, a) {
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
        function $s(e, t, l) {
            var n = t.pendingProps, a = n.revealOrder, i = n.tail;
            if (Xe(e, t, n.children, l), n = we.current, (n & 2) !== 0) n = n & 1 | 2, t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                    if (e.tag === 13) e.memoizedState !== null && Js(e, l, t);
                    else if (e.tag === 19) Js(e, l, t);
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
            switch(k(we, n), a){
                case "forwards":
                    for(l = t.child, a = null; l !== null;)e = l.alternate, e !== null && Ku(e) === null && (a = l), l = l.sibling;
                    l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), tc(t, !1, a, l, i);
                    break;
                case "backwards":
                    for(l = null, a = t.child, t.child = null; a !== null;){
                        if (e = a.alternate, e !== null && Ku(e) === null) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = l, l = a, a = e;
                    }
                    tc(t, !0, l, null, i);
                    break;
                case "together":
                    tc(t, !1, null, null, void 0);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function el(e, t, l) {
            if (e !== null && (t.dependencies = e.dependencies), Tl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
                if (sa(e, t, l, !1), (l & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(f(153));
            if (t.child !== null) {
                for(e = t.child, l = Vt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = Vt(e, e.pendingProps), l.return = t;
                l.sibling = null;
            }
            return t.child;
        }
        function lc(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Au(e)));
        }
        function c1(e, t, l) {
            switch(t.tag){
                case 3:
                    be(t, t.stateNode.containerInfo), hl(t, Pe, e.memoizedState.cache), fa();
                    break;
                case 27:
                case 5:
                    fl(t);
                    break;
                case 4:
                    be(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    hl(t, t.type, t.memoizedProps.value);
                    break;
                case 13:
                    var n = t.memoizedState;
                    if (n !== null) return n.dehydrated !== null ? (gl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Zs(e, t, l) : (gl(t), e = el(e, t, l), e !== null ? e.sibling : null);
                    gl(t);
                    break;
                case 19:
                    var a = (e.flags & 128) !== 0;
                    if (n = (l & t.childLanes) !== 0, n || (sa(e, t, l, !1), n = (l & t.childLanes) !== 0), a) {
                        if (n) return $s(e, t, l);
                        t.flags |= 128;
                    }
                    if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), k(we, we.current), n) break;
                    return null;
                case 22:
                case 23:
                    return t.lanes = 0, Ys(e, t, l);
                case 24:
                    hl(t, Pe, e.memoizedState.cache);
            }
            return el(e, t, l);
        }
        function Ws(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) je = !0;
            else {
                if (!lc(e, l) && (t.flags & 128) === 0) return je = !1, c1(e, t, l);
                je = (e.flags & 131072) !== 0;
            }
            else je = !1, ye && (t.flags & 1048576) !== 0 && No(t, Tu, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        e = t.pendingProps;
                        var n = t.elementType, a = n._init;
                        if (n = a(n._payload), t.type = n, typeof n == "function") sr(n) ? (e = Il(n, e), t.tag = 1, t = Xs(null, t, n, e, l)) : (t.tag = 0, t = Jr(null, t, n, e, l));
                        else {
                            if (n != null) {
                                if (a = n.$$typeof, a === V) {
                                    t.tag = 11, t = Qs(null, t, n, e, l);
                                    break e;
                                } else if (a === ce) {
                                    t.tag = 14, t = Ks(null, t, n, e, l);
                                    break e;
                                }
                            }
                            throw t = kt(n) || n, Error(f(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return Jr(e, t, t.type, t.pendingProps, l);
                case 1:
                    return n = t.type, a = Il(n, t.pendingProps), Xs(e, t, n, a, l);
                case 3:
                    e: {
                        if (be(t, t.stateNode.containerInfo), e === null) throw Error(f(387));
                        n = t.pendingProps;
                        var i = t.memoizedState;
                        a = i.element, Ar(e, t), ga(t, n, null, l);
                        var s = t.memoizedState;
                        if (n = s.cache, hl(t, Pe, n), n !== i.cache && br(t, [
                            Pe
                        ], l, !0), va(), n = s.element, i.isDehydrated) if (i = {
                            element: n,
                            isDehydrated: !1,
                            cache: s.cache
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                            t = Vs(e, t, n, l);
                            break e;
                        } else if (n !== a) {
                            a = _t(Error(f(424)), t), oa(a), t = Vs(e, t, n, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(De = zt(e.firstChild), nt = t, ye = !0, Vl = null, wt = !0, l = Ds(t, null, n, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (fa(), n === a) {
                                t = el(e, t, l);
                                break e;
                            }
                            Xe(e, t, n, l);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return ku(e, t), e === null ? (l = th(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ye || (l = t.type, e = t.pendingProps, n = ui(te.current).createElement(l), n[We] = t, n[ut] = e, Ze(n, l, e), Ke(n), t.stateNode = n) : t.memoizedState = th(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return fl(t), e === null && ye && (n = t.stateNode = Fd(t.type, t.pendingProps, te.current), nt = t, wt = !0, a = De, Ml(t.type) ? (Pc = a, De = zt(n.firstChild)) : De = a), Xe(e, t, t.pendingProps.children, l), ku(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && ye && ((a = n = De) && (n = P1(n, t.type, t.pendingProps, wt), n !== null ? (t.stateNode = n, nt = t, De = zt(n.firstChild), wt = !1, a = !0) : a = !1), a || Zl(t)), fl(t), a = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, n = i.children, Bc(a, i) ? n = null : s !== null && Bc(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = xr(e, t, e1, null, null, l), Qa._currentValue = a), ku(e, t), Xe(e, t, n, l), t.child;
                case 6:
                    return e === null && ye && ((e = l = De) && (l = w1(l, t.pendingProps, wt), l !== null ? (t.stateNode = l, nt = t, De = null, e = !0) : e = !1), e || Zl(t)), null;
                case 13:
                    return Zs(e, t, l);
                case 4:
                    return be(t, t.stateNode.containerInfo), n = t.pendingProps, e === null ? t.child = Bn(t, null, n, l) : Xe(e, t, n, l), t.child;
                case 11:
                    return Qs(e, t, t.type, t.pendingProps, l);
                case 7:
                    return Xe(e, t, t.pendingProps, l), t.child;
                case 8:
                    return Xe(e, t, t.pendingProps.children, l), t.child;
                case 12:
                    return Xe(e, t, t.pendingProps.children, l), t.child;
                case 10:
                    return n = t.pendingProps, hl(t, t.type, n.value), Xe(e, t, n.children, l), t.child;
                case 9:
                    return a = t.type._context, n = t.pendingProps.children, $l(t), a = Fe(a), n = n(a), t.flags |= 1, Xe(e, t, n, l), t.child;
                case 14:
                    return Ks(e, t, t.type, t.pendingProps, l);
                case 15:
                    return js(e, t, t.type, t.pendingProps, l);
                case 19:
                    return $s(e, t, l);
                case 31:
                    return n = t.pendingProps, l = t.mode, n = {
                        mode: n.mode,
                        children: n.children
                    }, e === null ? (l = Gu(n, l), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Vt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
                case 22:
                    return Ys(e, t, l);
                case 24:
                    return $l(t), n = Fe(Pe), e === null ? (a = _r(), a === null && (a = Te, i = Sr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = {
                        parent: n,
                        cache: a
                    }, Tr(t), hl(t, Pe, a)) : ((e.lanes & l) !== 0 && (Ar(e, t), ga(t, null, null, l), va()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = {
                        parent: n,
                        cache: n
                    }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), hl(t, Pe, n)) : (n = i.cache, hl(t, Pe, n), n !== a.cache && br(t, [
                        Pe
                    ], l, !0))), Xe(e, t, t.pendingProps.children, l), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(f(156, t.tag));
        }
        function tl(e) {
            e.flags |= 4;
        }
        function Fs(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !ih(t)) {
                if (t = Ot.current, t !== null && ((he & 4194048) === he ? Ht !== null : (he & 62914560) !== he && (he & 536870912) === 0 || t !== Ht)) throw ma = Rr, qo;
                e.flags |= 8192;
            }
        }
        function Xu(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Df() : 536870912, e.lanes |= t, Pn |= t);
        }
        function Aa(e, t) {
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
        function Me(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
            if (t) for(var a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
            else for(a = e.child; a !== null;)l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
            return e.subtreeFlags |= n, e.childLanes = l, t;
        }
        function f1(e, t, l) {
            var n = t.pendingProps;
            switch(mr(t), t.tag){
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
                    return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Wt(Pe), xt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (ca(t) ? tl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Co())), Me(t), null;
                case 26:
                    return l = t.memoizedState, e === null ? (tl(t), l !== null ? (Me(t), Fs(t, l)) : (Me(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (tl(t), Me(t), Fs(t, l)) : (Me(t), t.flags &= -16777217) : (e.memoizedProps !== n && tl(t), Me(t), t.flags &= -16777217), null;
                case 27:
                    nu(t), l = te.current;
                    var a = t.type;
                    if (e !== null && t.stateNode != null) e.memoizedProps !== n && tl(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(f(166));
                            return Me(t), null;
                        }
                        e = J.current, ca(t) ? Mo(t) : (e = Fd(a, n, l), t.stateNode = e, tl(t));
                    }
                    return Me(t), null;
                case 5:
                    if (nu(t), l = t.type, e !== null && t.stateNode != null) e.memoizedProps !== n && tl(t);
                    else {
                        if (!n) {
                            if (t.stateNode === null) throw Error(f(166));
                            return Me(t), null;
                        }
                        if (e = J.current, ca(t)) Mo(t);
                        else {
                            switch(a = ui(te.current), e){
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
                            e[We] = t, e[ut] = n;
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
                            e: switch(Ze(e, l, n), l){
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
                            e && tl(t);
                        }
                    }
                    return Me(t), t.flags &= -16777217, null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== n && tl(t);
                    else {
                        if (typeof n != "string" && t.stateNode === null) throw Error(f(166));
                        if (e = te.current, ca(t)) {
                            if (e = t.stateNode, l = t.memoizedProps, n = null, a = nt, a !== null) switch(a.tag){
                                case 27:
                                case 5:
                                    n = a.memoizedProps;
                            }
                            e[We] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Gd(e.nodeValue, l)), e || Zl(t);
                        } else e = ui(e).createTextNode(n), e[We] = t, t.stateNode = e;
                    }
                    return Me(t), null;
                case 13:
                    if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (a = ca(t), n !== null && n.dehydrated !== null) {
                            if (e === null) {
                                if (!a) throw Error(f(318));
                                if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(f(317));
                                a[We] = t;
                            } else fa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Me(t), a = !1;
                        } else a = Co(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
                        if (!a) return t.flags & 256 ? (It(t), t) : (It(t), null);
                    }
                    if (It(t), (t.flags & 128) !== 0) return t.lanes = l, t;
                    if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
                        n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
                        var i = null;
                        n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048);
                    }
                    return l !== e && l && (t.child.flags |= 8192), Xu(t, t.updateQueue), Me(t), null;
                case 4:
                    return xt(), e === null && Nc(t.stateNode.containerInfo), Me(t), null;
                case 10:
                    return Wt(t.type), Me(t), null;
                case 19:
                    if (X(we), a = t.memoizedState, a === null) return Me(t), null;
                    if (n = (t.flags & 128) !== 0, i = a.rendering, i === null) if (n) Aa(a, !1);
                    else {
                        if (Ce !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (i = Ku(e), i !== null) {
                                for(t.flags |= 128, Aa(a, !1), e = i.updateQueue, t.updateQueue = e, Xu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)Oo(l, e), l = l.sibling;
                                return k(we, we.current & 1 | 2), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && Pt() > Ju && (t.flags |= 128, n = !0, Aa(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!n) if (e = Ku(i), e !== null) {
                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Xu(t, e), Aa(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ye) return Me(t), null;
                        } else 2 * Pt() - a.renderingStartTime > Ju && l !== 536870912 && (t.flags |= 128, n = !0, Aa(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
                    }
                    return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Pt(), t.sibling = null, e = we.current, k(we, n ? e & 1 | 2 : e & 1), t) : (Me(t), null);
                case 22:
                case 23:
                    return It(t), Dr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), l = t.updateQueue, l !== null && Xu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && X(Wl), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Wt(Pe), Me(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(f(156, t.tag));
        }
        function o1(e, t) {
            switch(mr(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Wt(Pe), xt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return nu(t), null;
                case 13:
                    if (It(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(f(340));
                        fa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return X(we), null;
                case 4:
                    return xt(), null;
                case 10:
                    return Wt(t.type), null;
                case 22:
                case 23:
                    return It(t), Dr(), e !== null && X(Wl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Wt(Pe), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function Is(e, t) {
            switch(mr(t), t.tag){
                case 3:
                    Wt(Pe), xt();
                    break;
                case 26:
                case 27:
                case 5:
                    nu(t);
                    break;
                case 4:
                    xt();
                    break;
                case 13:
                    It(t);
                    break;
                case 19:
                    X(we);
                    break;
                case 10:
                    Wt(t.type);
                    break;
                case 22:
                case 23:
                    It(t), Dr(), e !== null && X(Wl);
                    break;
                case 24:
                    Wt(Pe);
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
                            var i = l.create, s = l.inst;
                            n = i(), s.destroy = n;
                        }
                        l = l.next;
                    }while (l !== a);
                }
            } catch (h) {
                Re(t, t.return, h);
            }
        }
        function Sl(e, t, l) {
            try {
                var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
                if (a !== null) {
                    var i = a.next;
                    n = i;
                    do {
                        if ((n.tag & e) === e) {
                            var s = n.inst, h = s.destroy;
                            if (h !== void 0) {
                                s.destroy = void 0, a = t;
                                var g = l, N = h;
                                try {
                                    N();
                                } catch (U) {
                                    Re(a, g, U);
                                }
                            }
                        }
                        n = n.next;
                    }while (n !== i);
                }
            } catch (U) {
                Re(t, t.return, U);
            }
        }
        function ed(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    Ko(t, l);
                } catch (n) {
                    Re(e, e.return, n);
                }
            }
        }
        function td(e, t, l) {
            l.props = Il(e.type, e.memoizedProps), l.state = e.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (n) {
                Re(e, t, n);
            }
        }
        function Na(e, t) {
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
        function Lt(e, t) {
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
        function ld(e) {
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
        function nc(e, t, l) {
            try {
                var n = e.stateNode;
                x1(n, e.type, l, t), n[ut] = t;
            } catch (a) {
                Re(e, e.return, a);
            }
        }
        function nd(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ml(e.type) || e.tag === 4;
        }
        function ac(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || nd(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && Ml(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function uc(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ai));
            else if (n !== 4 && (n === 27 && Ml(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(uc(e, t, l), e = e.sibling; e !== null;)uc(e, t, l), e = e.sibling;
        }
        function Vu(e, t, l) {
            var n = e.tag;
            if (n === 5 || n === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (n !== 4 && (n === 27 && Ml(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(Vu(e, t, l), e = e.sibling; e !== null;)Vu(e, t, l), e = e.sibling;
        }
        function ad(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var n = e.type, a = t.attributes; a.length;)t.removeAttributeNode(a[0]);
                Ze(t, n, l), t[We] = e, t[ut] = l;
            } catch (i) {
                Re(e, e.return, i);
            }
        }
        var ll = !1, Be = !1, ic = !1, ud = typeof WeakSet == "function" ? WeakSet : Set, Ye = null;
        function s1(e, t) {
            if (e = e.containerInfo, Cc = si, e = yo(e), ar(e)) {
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
                        var s = 0, h = -1, g = -1, N = 0, U = 0, Q = e, C = null;
                        t: for(;;){
                            for(var x; Q !== l || a !== 0 && Q.nodeType !== 3 || (h = s + a), Q !== i || n !== 0 && Q.nodeType !== 3 || (g = s + n), Q.nodeType === 3 && (s += Q.nodeValue.length), (x = Q.firstChild) !== null;)C = Q, Q = x;
                            for(;;){
                                if (Q === e) break t;
                                if (C === l && ++N === a && (h = s), C === i && ++U === n && (g = s), (x = Q.nextSibling) !== null) break;
                                Q = C, C = Q.parentNode;
                            }
                            Q = x;
                        }
                        l = h === -1 || g === -1 ? null : {
                            start: h,
                            end: g
                        };
                    } else l = null;
                }
                l = l || {
                    start: 0,
                    end: 0
                };
            } else l = null;
            for(xc = {
                focusedElem: e,
                selectionRange: l
            }, si = !1, Ye = t; Ye !== null;)if (t = Ye, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Ye = e;
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
                                var ee = Il(l.type, a, l.elementType === l.type);
                                e = n.getSnapshotBeforeUpdate(ee, i), n.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (F) {
                                Re(l, l.return, F);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) zc(e);
                            else if (l === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    zc(e);
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
                    e.return = t.return, Ye = e;
                    break;
                }
                Ye = t.return;
            }
        }
        function id(e, t, l) {
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
                    } catch (s) {
                        Re(l, l.return, s);
                    }
                    else {
                        var a = Il(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (s) {
                            Re(l, l.return, s);
                        }
                    }
                    n & 64 && ed(l), n & 512 && Na(l, l.return);
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
                            Ko(e, t);
                        } catch (s) {
                            Re(l, l.return, s);
                        }
                    }
                    break;
                case 27:
                    t === null && n & 4 && ad(l);
                case 26:
                case 5:
                    El(e, l), t === null && n & 4 && ld(l), n & 512 && Na(l, l.return);
                    break;
                case 12:
                    El(e, l);
                    break;
                case 13:
                    El(e, l), n & 4 && fd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = S1.bind(null, l), H1(e, l))));
                    break;
                case 22:
                    if (n = l.memoizedState !== null || ll, !n) {
                        t = t !== null && t.memoizedState !== null || Be, a = ll;
                        var i = Be;
                        ll = n, (Be = t) && !i ? _l(e, l, (l.subtreeFlags & 8772) !== 0) : El(e, l), ll = a, Be = i;
                    }
                    break;
                case 30:
                    break;
                default:
                    El(e, l);
            }
        }
        function rd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, rd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Li(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var Ae = null, ct = !1;
        function nl(e, t, l) {
            for(l = l.child; l !== null;)cd(e, t, l), l = l.sibling;
        }
        function cd(e, t, l) {
            if (st && typeof st.onCommitFiberUnmount == "function") try {
                st.onCommitFiberUnmount(Zn, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    Be || Lt(l, t), nl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    Be || Lt(l, t);
                    var n = Ae, a = ct;
                    Ml(l.type) && (Ae = l.stateNode, ct = !1), nl(e, t, l), Pa(l.stateNode), Ae = n, ct = a;
                    break;
                case 5:
                    Be || Lt(l, t);
                case 6:
                    if (n = Ae, a = ct, Ae = null, nl(e, t, l), Ae = n, ct = a, Ae !== null) if (ct) try {
                        (Ae.nodeType === 9 ? Ae.body : Ae.nodeName === "HTML" ? Ae.ownerDocument.body : Ae).removeChild(l.stateNode);
                    } catch (i) {
                        Re(l, t, i);
                    }
                    else try {
                        Ae.removeChild(l.stateNode);
                    } catch (i) {
                        Re(l, t, i);
                    }
                    break;
                case 18:
                    Ae !== null && (ct ? (e = Ae, $d(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), ka(e)) : $d(Ae, l.stateNode));
                    break;
                case 4:
                    n = Ae, a = ct, Ae = l.stateNode.containerInfo, ct = !0, nl(e, t, l), Ae = n, ct = a;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Be || Sl(2, l, t), Be || Sl(4, l, t), nl(e, t, l);
                    break;
                case 1:
                    Be || (Lt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && td(l, t, n)), nl(e, t, l);
                    break;
                case 21:
                    nl(e, t, l);
                    break;
                case 22:
                    Be = (n = Be) || l.memoizedState !== null, nl(e, t, l), Be = n;
                    break;
                default:
                    nl(e, t, l);
            }
        }
        function fd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                ka(e);
            } catch (l) {
                Re(t, t.return, l);
            }
        }
        function d1(e) {
            switch(e.tag){
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new ud), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ud), t;
                default:
                    throw Error(f(435, e.tag));
            }
        }
        function rc(e, t) {
            var l = d1(e);
            t.forEach(function(n) {
                var a = E1.bind(null, e, n);
                l.has(n) || (l.add(n), n.then(a, a));
            });
        }
        function mt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var n = 0; n < l.length; n++){
                var a = l[n], i = e, s = t, h = s;
                e: for(; h !== null;){
                    switch(h.tag){
                        case 27:
                            if (Ml(h.type)) {
                                Ae = h.stateNode, ct = !1;
                                break e;
                            }
                            break;
                        case 5:
                            Ae = h.stateNode, ct = !1;
                            break e;
                        case 3:
                        case 4:
                            Ae = h.stateNode.containerInfo, ct = !0;
                            break e;
                    }
                    h = h.return;
                }
                if (Ae === null) throw Error(f(160));
                cd(i, s, a), Ae = null, ct = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
            }
            if (t.subtreeFlags & 13878) for(t = t.child; t !== null;)od(t, e), t = t.sibling;
        }
        var Ut = null;
        function od(e, t) {
            var l = e.alternate, n = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    mt(t, e), yt(e), n & 4 && (Sl(3, e, e.return), Oa(3, e), Sl(5, e, e.return));
                    break;
                case 1:
                    mt(t, e), yt(e), n & 512 && (Be || l === null || Lt(l, l.return)), n & 64 && ll && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
                    break;
                case 26:
                    var a = Ut;
                    if (mt(t, e), yt(e), n & 512 && (Be || l === null || Lt(l, l.return)), n & 4) {
                        var i = l !== null ? l.memoizedState : null;
                        if (n = e.memoizedState, l === null) if (n === null) if (e.stateNode === null) {
                            e: {
                                n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                                t: switch(n){
                                    case "title":
                                        i = a.getElementsByTagName("title")[0], (!i || i[Wn] || i[We] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(i, a.querySelector("head > title"))), Ze(i, n, l), i[We] = e, Ke(i), n = i;
                                        break e;
                                    case "link":
                                        var s = ah("link", "href", a).get(n + (l.href || ""));
                                        if (s) {
                                            for(var h = 0; h < s.length; h++)if (i = s[h], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                s.splice(h, 1);
                                                break t;
                                            }
                                        }
                                        i = a.createElement(n), Ze(i, n, l), a.head.appendChild(i);
                                        break;
                                    case "meta":
                                        if (s = ah("meta", "content", a).get(n + (l.content || ""))) {
                                            for(h = 0; h < s.length; h++)if (i = s[h], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                s.splice(h, 1);
                                                break t;
                                            }
                                        }
                                        i = a.createElement(n), Ze(i, n, l), a.head.appendChild(i);
                                        break;
                                    default:
                                        throw Error(f(468, n));
                                }
                                i[We] = e, Ke(i), n = i;
                            }
                            e.stateNode = n;
                        } else uh(a, e.type, e.stateNode);
                        else e.stateNode = nh(a, n, e.memoizedProps);
                        else i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? uh(a, e.type, e.stateNode) : nh(a, n, e.memoizedProps)) : n === null && e.stateNode !== null && nc(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    mt(t, e), yt(e), n & 512 && (Be || l === null || Lt(l, l.return)), l !== null && n & 4 && nc(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (mt(t, e), yt(e), n & 512 && (Be || l === null || Lt(l, l.return)), e.flags & 32) {
                        a = e.stateNode;
                        try {
                            pn(a, "");
                        } catch (x) {
                            Re(e, e.return, x);
                        }
                    }
                    n & 4 && e.stateNode != null && (a = e.memoizedProps, nc(e, a, l !== null ? l.memoizedProps : a)), n & 1024 && (ic = !0);
                    break;
                case 6:
                    if (mt(t, e), yt(e), n & 4) {
                        if (e.stateNode === null) throw Error(f(162));
                        n = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = n;
                        } catch (x) {
                            Re(e, e.return, x);
                        }
                    }
                    break;
                case 3:
                    if (ci = null, a = Ut, Ut = ii(t.containerInfo), mt(t, e), Ut = a, yt(e), n & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        ka(t.containerInfo);
                    } catch (x) {
                        Re(e, e.return, x);
                    }
                    ic && (ic = !1, sd(e));
                    break;
                case 4:
                    n = Ut, Ut = ii(e.stateNode.containerInfo), mt(t, e), yt(e), Ut = n;
                    break;
                case 12:
                    mt(t, e), yt(e);
                    break;
                case 13:
                    mt(t, e), yt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (hc = Pt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, rc(e, n)));
                    break;
                case 22:
                    a = e.memoizedState !== null;
                    var g = l !== null && l.memoizedState !== null, N = ll, U = Be;
                    if (ll = N || a, Be = U || g, mt(t, e), Be = U, ll = N, yt(e), n & 8192) e: for(t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || g || ll || Be || en(e)), l = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                g = l = t;
                                try {
                                    if (i = g.stateNode, a) s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                                    else {
                                        h = g.stateNode;
                                        var Q = g.memoizedProps.style, C = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                                        h.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                                    }
                                } catch (x) {
                                    Re(g, g.return, x);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                g = t;
                                try {
                                    g.stateNode.nodeValue = a ? "" : g.memoizedProps;
                                } catch (x) {
                                    Re(g, g.return, x);
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
                    n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, rc(e, l))));
                    break;
                case 19:
                    mt(t, e), yt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, rc(e, n)));
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
                        if (nd(n)) {
                            l = n;
                            break;
                        }
                        n = n.return;
                    }
                    if (l == null) throw Error(f(160));
                    switch(l.tag){
                        case 27:
                            var a = l.stateNode, i = ac(e);
                            Vu(e, i, a);
                            break;
                        case 5:
                            var s = l.stateNode;
                            l.flags & 32 && (pn(s, ""), l.flags &= -33);
                            var h = ac(e);
                            Vu(e, h, s);
                            break;
                        case 3:
                        case 4:
                            var g = l.stateNode.containerInfo, N = ac(e);
                            uc(e, N, g);
                            break;
                        default:
                            throw Error(f(161));
                    }
                } catch (U) {
                    Re(e, e.return, U);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function sd(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                sd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function El(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)id(e, t.alternate, t), t = t.sibling;
        }
        function en(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        Sl(4, t, t.return), en(t);
                        break;
                    case 1:
                        Lt(t, t.return);
                        var l = t.stateNode;
                        typeof l.componentWillUnmount == "function" && td(t, t.return, l), en(t);
                        break;
                    case 27:
                        Pa(t.stateNode);
                    case 26:
                    case 5:
                        Lt(t, t.return), en(t);
                        break;
                    case 22:
                        t.memoizedState === null && en(t);
                        break;
                    case 30:
                        en(t);
                        break;
                    default:
                        en(t);
                }
                e = e.sibling;
            }
        }
        function _l(e, t, l) {
            for(l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var n = t.alternate, a = e, i = t, s = i.flags;
                switch(i.tag){
                    case 0:
                    case 11:
                    case 15:
                        _l(a, i, l), Oa(4, i);
                        break;
                    case 1:
                        if (_l(a, i, l), n = i, a = n.stateNode, typeof a.componentDidMount == "function") try {
                            a.componentDidMount();
                        } catch (N) {
                            Re(n, n.return, N);
                        }
                        if (n = i, a = n.updateQueue, a !== null) {
                            var h = n.stateNode;
                            try {
                                var g = a.shared.hiddenCallbacks;
                                if (g !== null) for(a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++)Qo(g[a], h);
                            } catch (N) {
                                Re(n, n.return, N);
                            }
                        }
                        l && s & 64 && ed(i), Na(i, i.return);
                        break;
                    case 27:
                        ad(i);
                    case 26:
                    case 5:
                        _l(a, i, l), l && n === null && s & 4 && ld(i), Na(i, i.return);
                        break;
                    case 12:
                        _l(a, i, l);
                        break;
                    case 13:
                        _l(a, i, l), l && s & 4 && fd(a, i);
                        break;
                    case 22:
                        i.memoizedState === null && _l(a, i, l), Na(i, i.return);
                        break;
                    case 30:
                        break;
                    default:
                        _l(a, i, l);
                }
                t = t.sibling;
            }
        }
        function cc(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && da(l));
        }
        function fc(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && da(e));
        }
        function Qt(e, t, l, n) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)dd(e, t, l, n), t = t.sibling;
        }
        function dd(e, t, l, n) {
            var a = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    Qt(e, t, l, n), a & 2048 && Oa(9, t);
                    break;
                case 1:
                    Qt(e, t, l, n);
                    break;
                case 3:
                    Qt(e, t, l, n), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && da(e)));
                    break;
                case 12:
                    if (a & 2048) {
                        Qt(e, t, l, n), e = t.stateNode;
                        try {
                            var i = t.memoizedProps, s = i.id, h = i.onPostCommit;
                            typeof h == "function" && h(s, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (g) {
                            Re(t, t.return, g);
                        }
                    } else Qt(e, t, l, n);
                    break;
                case 13:
                    Qt(e, t, l, n);
                    break;
                case 23:
                    break;
                case 22:
                    i = t.stateNode, s = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Qt(e, t, l, n) : Ma(e, t) : i._visibility & 2 ? Qt(e, t, l, n) : (i._visibility |= 2, Un(e, t, l, n, (t.subtreeFlags & 10256) !== 0)), a & 2048 && cc(s, t);
                    break;
                case 24:
                    Qt(e, t, l, n), a & 2048 && fc(t.alternate, t);
                    break;
                default:
                    Qt(e, t, l, n);
            }
        }
        function Un(e, t, l, n, a) {
            for(a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;){
                var i = e, s = t, h = l, g = n, N = s.flags;
                switch(s.tag){
                    case 0:
                    case 11:
                    case 15:
                        Un(i, s, h, g, a), Oa(8, s);
                        break;
                    case 23:
                        break;
                    case 22:
                        var U = s.stateNode;
                        s.memoizedState !== null ? U._visibility & 2 ? Un(i, s, h, g, a) : Ma(i, s) : (U._visibility |= 2, Un(i, s, h, g, a)), a && N & 2048 && cc(s.alternate, s);
                        break;
                    case 24:
                        Un(i, s, h, g, a), a && N & 2048 && fc(s.alternate, s);
                        break;
                    default:
                        Un(i, s, h, g, a);
                }
                t = t.sibling;
            }
        }
        function Ma(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var l = e, n = t, a = n.flags;
                switch(n.tag){
                    case 22:
                        Ma(l, n), a & 2048 && cc(n.alternate, n);
                        break;
                    case 24:
                        Ma(l, n), a & 2048 && fc(n.alternate, n);
                        break;
                    default:
                        Ma(l, n);
                }
                t = t.sibling;
            }
        }
        var Da = 8192;
        function zn(e) {
            if (e.subtreeFlags & Da) for(e = e.child; e !== null;)hd(e), e = e.sibling;
        }
        function hd(e) {
            switch(e.tag){
                case 26:
                    zn(e), e.flags & Da && e.memoizedState !== null && W1(Ut, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    zn(e);
                    break;
                case 3:
                case 4:
                    var t = Ut;
                    Ut = ii(e.stateNode.containerInfo), zn(e), Ut = t;
                    break;
                case 22:
                    e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Da, Da = 16777216, zn(e), Da = t) : zn(e));
                    break;
                default:
                    zn(e);
            }
        }
        function pd(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function Ca(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ye = n, yd(n, e);
                }
                pd(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)md(e), e = e.sibling;
        }
        function md(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    Ca(e), e.flags & 2048 && Sl(9, e, e.return);
                    break;
                case 3:
                    Ca(e);
                    break;
                case 12:
                    Ca(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Zu(e)) : Ca(e);
                    break;
                default:
                    Ca(e);
            }
        }
        function Zu(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var n = t[l];
                    Ye = n, yd(n, e);
                }
                pd(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        Sl(8, t, t.return), Zu(t);
                        break;
                    case 22:
                        l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Zu(t));
                        break;
                    default:
                        Zu(t);
                }
                e = e.sibling;
            }
        }
        function yd(e, t) {
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
                        da(l.memoizedState.cache);
                }
                if (n = l.child, n !== null) n.return = l, Ye = n;
                else e: for(l = e; Ye !== null;){
                    n = Ye;
                    var a = n.sibling, i = n.return;
                    if (rd(n), n === l) {
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
        var h1 = {
            getCacheForType: function(e) {
                var t = Fe(Pe), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            }
        }, p1 = typeof WeakMap == "function" ? WeakMap : Map, ve = 0, Te = null, se = null, he = 0, ge = 0, vt = null, Rl = !1, qn = !1, oc = !1, al = 0, Ce = 0, Tl = 0, tn = 0, sc = 0, Nt = 0, Pn = 0, xa = null, ft = null, dc = !1, hc = 0, Ju = 1 / 0, $u = null, Al = null, Ve = 0, Ol = null, wn = null, Hn = 0, pc = 0, mc = null, vd = null, Ba = 0, yc = null;
        function gt() {
            if ((ve & 2) !== 0 && he !== 0) return he & -he;
            if (B.T !== null) {
                var e = An;
                return e !== 0 ? e : Rc();
            }
            return Bf();
        }
        function gd() {
            Nt === 0 && (Nt = (he & 536870912) === 0 || ye ? Mf() : 536870912);
            var e = Ot.current;
            return e !== null && (e.flags |= 32), Nt;
        }
        function bt(e, t, l) {
            (e === Te && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) && (Ln(e, 0), Nl(e, he, Nt, !1)), $n(e, l), ((ve & 2) === 0 || e !== Te) && (e === Te && ((ve & 2) === 0 && (tn |= l), Ce === 4 && Nl(e, he, Nt, !1)), Kt(e));
        }
        function bd(e, t, l) {
            if ((ve & 6) !== 0) throw Error(f(327));
            var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Jn(e, t), a = n ? v1(e, t) : bc(e, t, !0), i = n;
            do {
                if (a === 0) {
                    qn && !n && Nl(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, i && !m1(l)) {
                        a = bc(e, t, !1), i = !1;
                        continue;
                    }
                    if (a === 2) {
                        if (i = t, e.errorRecoveryDisabledLanes & i) var s = 0;
                        else s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
                        if (s !== 0) {
                            t = s;
                            e: {
                                var h = e;
                                a = xa;
                                var g = h.current.memoizedState.isDehydrated;
                                if (g && (Ln(h, s).flags |= 256), s = bc(h, s, !1), s !== 2) {
                                    if (oc && !g) {
                                        h.errorRecoveryDisabledLanes |= i, tn |= i, a = 4;
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
                        Ln(e, 0), Nl(e, t, 0, !0);
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
                                Nl(n, t, Nt, !Rl);
                                break e;
                            case 2:
                                ft = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(f(329));
                        }
                        if ((t & 62914560) === t && (a = hc + 300 - Pt(), 10 < a)) {
                            if (Nl(n, t, Nt, !Rl), ru(n, 0, !0) !== 0) break e;
                            n.timeoutHandle = Zd(Sd.bind(null, n, l, ft, $u, dc, t, Nt, tn, Pn, Rl, i, 2, -0, 0), a);
                            break e;
                        }
                        Sd(n, l, ft, $u, dc, t, Nt, tn, Pn, Rl, i, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            Kt(e);
        }
        function Sd(e, t, l, n, a, i, s, h, g, N, U, Q, C, x) {
            if (e.timeoutHandle = -1, Q = t.subtreeFlags, (Q & 8192 || (Q & 16785408) === 16785408) && (La = {
                stylesheets: null,
                count: 0,
                unsuspend: $1
            }, hd(t), Q = F1(), Q !== null)) {
                e.cancelPendingCommit = Q(Nd.bind(null, e, t, i, l, n, a, s, h, g, U, 1, C, x)), Nl(e, i, s, !N);
                return;
            }
            Nd(e, t, i, l, n, a, s, h, g);
        }
        function m1(e) {
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
        function Nl(e, t, l, n) {
            t &= ~sc, t &= ~tn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
            for(var a = t; 0 < a;){
                var i = 31 - dt(a), s = 1 << i;
                n[i] = -1, a &= ~s;
            }
            l !== 0 && Cf(e, l, t);
        }
        function Wu() {
            return (ve & 6) === 0 ? (Ua(0), !1) : !0;
        }
        function vc() {
            if (se !== null) {
                if (ge === 0) var e = se.return;
                else e = se, $t = Jl = null, zr(e), xn = null, Ra = 0, e = se;
                for(; e !== null;)Is(e.alternate, e), e = e.return;
                se = null;
            }
        }
        function Ln(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, U1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), vc(), Te = e, se = l = Vt(e.current, null), he = t, ge = 0, vt = null, Rl = !1, qn = Jn(e, t), oc = !1, Pn = Nt = sc = tn = Tl = Ce = 0, ft = xa = null, dc = !1, (t & 8) !== 0 && (t |= t & 32);
            var n = e.entangledLanes;
            if (n !== 0) for(e = e.entanglements, n &= t; 0 < n;){
                var a = 31 - dt(n), i = 1 << a;
                t |= e[a], n &= ~i;
            }
            return al = t, bu(), l;
        }
        function Ed(e, t) {
            ue = null, B.H = Hu, t === pa || t === Mu ? (t = Ho(), ge = 3) : t === qo ? (t = Ho(), ge = 4) : ge = t === Ls ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, vt = t, se === null && (Ce = 1, Yu(e, _t(t, e.current)));
        }
        function _d() {
            var e = B.H;
            return B.H = Hu, e === null ? Hu : e;
        }
        function Rd() {
            var e = B.A;
            return B.A = h1, e;
        }
        function gc() {
            Ce = 4, Rl || (he & 4194048) !== he && Ot.current !== null || (qn = !0), (Tl & 134217727) === 0 && (tn & 134217727) === 0 || Te === null || Nl(Te, he, Nt, !1);
        }
        function bc(e, t, l) {
            var n = ve;
            ve |= 2;
            var a = _d(), i = Rd();
            (Te !== e || he !== t) && ($u = null, Ln(e, t)), t = !1;
            var s = Ce;
            e: do try {
                if (ge !== 0 && se !== null) {
                    var h = se, g = vt;
                    switch(ge){
                        case 8:
                            vc(), s = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Ot.current === null && (t = !0);
                            var N = ge;
                            if (ge = 0, vt = null, Qn(e, h, g, N), l && qn) {
                                s = 0;
                                break e;
                            }
                            break;
                        default:
                            N = ge, ge = 0, vt = null, Qn(e, h, g, N);
                    }
                }
                y1(), s = Ce;
                break;
            } catch (U) {
                Ed(e, U);
            }
            while (!0);
            return t && e.shellSuspendCounter++, $t = Jl = null, ve = n, B.H = a, B.A = i, se === null && (Te = null, he = 0, bu()), s;
        }
        function y1() {
            for(; se !== null;)Td(se);
        }
        function v1(e, t) {
            var l = ve;
            ve |= 2;
            var n = _d(), a = Rd();
            Te !== e || he !== t ? ($u = null, Ju = Pt() + 500, Ln(e, t)) : qn = Jn(e, t);
            e: do try {
                if (ge !== 0 && se !== null) {
                    t = se;
                    var i = vt;
                    t: switch(ge){
                        case 1:
                            ge = 0, vt = null, Qn(e, t, i, 1);
                            break;
                        case 2:
                        case 9:
                            if (Po(i)) {
                                ge = 0, vt = null, Ad(t);
                                break;
                            }
                            t = function() {
                                ge !== 2 && ge !== 9 || Te !== e || (ge = 7), Kt(e);
                            }, i.then(t, t);
                            break e;
                        case 3:
                            ge = 7;
                            break e;
                        case 4:
                            ge = 5;
                            break e;
                        case 7:
                            Po(i) ? (ge = 0, vt = null, Ad(t)) : (ge = 0, vt = null, Qn(e, t, i, 7));
                            break;
                        case 5:
                            var s = null;
                            switch(se.tag){
                                case 26:
                                    s = se.memoizedState;
                                case 5:
                                case 27:
                                    var h = se;
                                    if (!s || ih(s)) {
                                        ge = 0, vt = null;
                                        var g = h.sibling;
                                        if (g !== null) se = g;
                                        else {
                                            var N = h.return;
                                            N !== null ? (se = N, Fu(N)) : se = null;
                                        }
                                        break t;
                                    }
                            }
                            ge = 0, vt = null, Qn(e, t, i, 5);
                            break;
                        case 6:
                            ge = 0, vt = null, Qn(e, t, i, 6);
                            break;
                        case 8:
                            vc(), Ce = 6;
                            break e;
                        default:
                            throw Error(f(462));
                    }
                }
                g1();
                break;
            } catch (U) {
                Ed(e, U);
            }
            while (!0);
            return $t = Jl = null, B.H = n, B.A = a, ve = l, se !== null ? 0 : (Te = null, he = 0, bu(), Ce);
        }
        function g1() {
            for(; se !== null && !Qp();)Td(se);
        }
        function Td(e) {
            var t = Ws(e.alternate, e, al);
            e.memoizedProps = e.pendingProps, t === null ? Fu(e) : se = t;
        }
        function Ad(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Gs(l, t, t.pendingProps, t.type, void 0, he);
                    break;
                case 11:
                    t = Gs(l, t, t.pendingProps, t.type.render, t.ref, he);
                    break;
                case 5:
                    zr(t);
                default:
                    Is(l, t), t = se = Oo(t, al), t = Ws(l, t, al);
            }
            e.memoizedProps = e.pendingProps, t === null ? Fu(e) : se = t;
        }
        function Qn(e, t, l, n) {
            $t = Jl = null, zr(t), xn = null, Ra = 0;
            var a = t.return;
            try {
                if (r1(e, a, t, l, he)) {
                    Ce = 1, Yu(e, _t(l, e.current)), se = null;
                    return;
                }
            } catch (i) {
                if (a !== null) throw se = a, i;
                Ce = 1, Yu(e, _t(l, e.current)), se = null;
                return;
            }
            t.flags & 32768 ? (ye || n === 1 ? e = !0 : qn || (he & 536870912) !== 0 ? e = !1 : (Rl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ot.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Od(t, e)) : Fu(t);
        }
        function Fu(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    Od(t, Rl);
                    return;
                }
                e = t.return;
                var l = f1(t.alternate, t, al);
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
            Ce === 0 && (Ce = 5);
        }
        function Od(e, t) {
            do {
                var l = o1(e.alternate, e);
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
            Ce = 6, se = null;
        }
        function Nd(e, t, l, n, a, i, s, h, g) {
            e.cancelPendingCommit = null;
            do Iu();
            while (Ve !== 0);
            if ((ve & 6) !== 0) throw Error(f(327));
            if (t !== null) {
                if (t === e.current) throw Error(f(177));
                if (i = t.lanes | t.childLanes, i |= fr, $p(e, l, i, s, h, g), e === Te && (se = Te = null, he = 0), wn = t, Ol = e, Hn = l, pc = i, mc = a, vd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, _1(au, function() {
                    return Bd(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
                    n = B.T, B.T = null, a = j.p, j.p = 2, s = ve, ve |= 4;
                    try {
                        s1(e, t, l);
                    } finally{
                        ve = s, j.p = a, B.T = n;
                    }
                }
                Ve = 1, Md(), Dd(), Cd();
            }
        }
        function Md() {
            if (Ve === 1) {
                Ve = 0;
                var e = Ol, t = wn, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = B.T, B.T = null;
                    var n = j.p;
                    j.p = 2;
                    var a = ve;
                    ve |= 4;
                    try {
                        od(t, e);
                        var i = xc, s = yo(e.containerInfo), h = i.focusedElem, g = i.selectionRange;
                        if (s !== h && h && h.ownerDocument && mo(h.ownerDocument.documentElement, h)) {
                            if (g !== null && ar(h)) {
                                var N = g.start, U = g.end;
                                if (U === void 0 && (U = N), "selectionStart" in h) h.selectionStart = N, h.selectionEnd = Math.min(U, h.value.length);
                                else {
                                    var Q = h.ownerDocument || document, C = Q && Q.defaultView || window;
                                    if (C.getSelection) {
                                        var x = C.getSelection(), ee = h.textContent.length, F = Math.min(g.start, ee), _e = g.end === void 0 ? F : Math.min(g.end, ee);
                                        !x.extend && F > _e && (s = _e, _e = F, F = s);
                                        var T = po(h, F), _ = po(h, _e);
                                        if (T && _ && (x.rangeCount !== 1 || x.anchorNode !== T.node || x.anchorOffset !== T.offset || x.focusNode !== _.node || x.focusOffset !== _.offset)) {
                                            var O = Q.createRange();
                                            O.setStart(T.node, T.offset), x.removeAllRanges(), F > _e ? (x.addRange(O), x.extend(_.node, _.offset)) : (O.setEnd(_.node, _.offset), x.addRange(O));
                                        }
                                    }
                                }
                            }
                            for(Q = [], x = h; x = x.parentNode;)x.nodeType === 1 && Q.push({
                                element: x,
                                left: x.scrollLeft,
                                top: x.scrollTop
                            });
                            for(typeof h.focus == "function" && h.focus(), h = 0; h < Q.length; h++){
                                var P = Q[h];
                                P.element.scrollLeft = P.left, P.element.scrollTop = P.top;
                            }
                        }
                        si = !!Cc, xc = Cc = null;
                    } finally{
                        ve = a, j.p = n, B.T = l;
                    }
                }
                e.current = t, Ve = 2;
            }
        }
        function Dd() {
            if (Ve === 2) {
                Ve = 0;
                var e = Ol, t = wn, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = B.T, B.T = null;
                    var n = j.p;
                    j.p = 2;
                    var a = ve;
                    ve |= 4;
                    try {
                        id(e, t.alternate, t);
                    } finally{
                        ve = a, j.p = n, B.T = l;
                    }
                }
                Ve = 3;
            }
        }
        function Cd() {
            if (Ve === 4 || Ve === 3) {
                Ve = 0, Kp();
                var e = Ol, t = wn, l = Hn, n = vd;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ve = 5 : (Ve = 0, wn = Ol = null, xd(e, e.pendingLanes));
                var a = e.pendingLanes;
                if (a === 0 && (Al = null), wi(l), t = t.stateNode, st && typeof st.onCommitFiberRoot == "function") try {
                    st.onCommitFiberRoot(Zn, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (n !== null) {
                    t = B.T, a = j.p, j.p = 2, B.T = null;
                    try {
                        for(var i = e.onRecoverableError, s = 0; s < n.length; s++){
                            var h = n[s];
                            i(h.value, {
                                componentStack: h.stack
                            });
                        }
                    } finally{
                        B.T = t, j.p = a;
                    }
                }
                (Hn & 3) !== 0 && Iu(), Kt(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === yc ? Ba++ : (Ba = 0, yc = e) : Ba = 0, Ua(0);
            }
        }
        function xd(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, da(t)));
        }
        function Iu(e) {
            return Md(), Dd(), Cd(), Bd();
        }
        function Bd() {
            if (Ve !== 5) return !1;
            var e = Ol, t = pc;
            pc = 0;
            var l = wi(Hn), n = B.T, a = j.p;
            try {
                j.p = 32 > l ? 32 : l, B.T = null, l = mc, mc = null;
                var i = Ol, s = Hn;
                if (Ve = 0, wn = Ol = null, Hn = 0, (ve & 6) !== 0) throw Error(f(331));
                var h = ve;
                if (ve |= 4, md(i.current), dd(i, i.current, s, l), ve = h, Ua(0, !1), st && typeof st.onPostCommitFiberRoot == "function") try {
                    st.onPostCommitFiberRoot(Zn, i);
                } catch  {}
                return !0;
            } finally{
                j.p = a, B.T = n, xd(e, t);
            }
        }
        function Ud(e, t, l) {
            t = _t(l, t), t = Zr(e.stateNode, t, 2), e = yl(e, t, 2), e !== null && ($n(e, 2), Kt(e));
        }
        function Re(e, t, l) {
            if (e.tag === 3) Ud(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    Ud(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var n = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Al === null || !Al.has(n))) {
                        e = _t(l, e), l = ws(2), n = yl(t, l, 2), n !== null && (Hs(l, n, t, e), $n(n, 2), Kt(n));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function Sc(e, t, l) {
            var n = e.pingCache;
            if (n === null) {
                n = e.pingCache = new p1;
                var a = new Set;
                n.set(t, a);
            } else a = n.get(t), a === void 0 && (a = new Set, n.set(t, a));
            a.has(l) || (oc = !0, a.add(l), e = b1.bind(null, e, t, l), t.then(e, e));
        }
        function b1(e, t, l) {
            var n = e.pingCache;
            n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Te === e && (he & l) === l && (Ce === 4 || Ce === 3 && (he & 62914560) === he && 300 > Pt() - hc ? (ve & 2) === 0 && Ln(e, 0) : sc |= l, Pn === he && (Pn = 0)), Kt(e);
        }
        function zd(e, t) {
            t === 0 && (t = Df()), e = En(e, t), e !== null && ($n(e, t), Kt(e));
        }
        function S1(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), zd(e, l);
        }
        function E1(e, t) {
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
            n !== null && n.delete(t), zd(e, l);
        }
        function _1(e, t) {
            return Ui(e, t);
        }
        var ei = null, Kn = null, Ec = !1, ti = !1, _c = !1, ln = 0;
        function Kt(e) {
            e !== Kn && e.next === null && (Kn === null ? ei = Kn = e : Kn = Kn.next = e), ti = !0, Ec || (Ec = !0, T1());
        }
        function Ua(e, t) {
            if (!_c && ti) {
                _c = !0;
                do for(var l = !1, n = ei; n !== null;){
                    if (e !== 0) {
                        var a = n.pendingLanes;
                        if (a === 0) var i = 0;
                        else {
                            var s = n.suspendedLanes, h = n.pingedLanes;
                            i = (1 << 31 - dt(42 | e) + 1) - 1, i &= a & ~(s & ~h), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
                        }
                        i !== 0 && (l = !0, Hd(n, i));
                    } else i = he, i = ru(n, n === Te ? i : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== -1), (i & 3) === 0 || Jn(n, i) || (l = !0, Hd(n, i));
                    n = n.next;
                }
                while (l);
                _c = !1;
            }
        }
        function R1() {
            qd();
        }
        function qd() {
            ti = Ec = !1;
            var e = 0;
            ln !== 0 && (B1() && (e = ln), ln = 0);
            for(var t = Pt(), l = null, n = ei; n !== null;){
                var a = n.next, i = Pd(n, t);
                i === 0 ? (n.next = null, l === null ? ei = a : l.next = a, a === null && (Kn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ti = !0)), n = a;
            }
            Ua(e);
        }
        function Pd(e, t) {
            for(var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;){
                var s = 31 - dt(i), h = 1 << s, g = a[s];
                g === -1 ? ((h & l) === 0 || (h & n) !== 0) && (a[s] = Jp(h, t)) : g <= t && (e.expiredLanes |= h), i &= ~h;
            }
            if (t = Te, l = he, l = ru(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n = e.callbackNode, l === 0 || e === t && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) return n !== null && n !== null && zi(n), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || Jn(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(n !== null && zi(n), wi(l)){
                    case 2:
                    case 8:
                        l = Of;
                        break;
                    case 32:
                        l = au;
                        break;
                    case 268435456:
                        l = Nf;
                        break;
                    default:
                        l = au;
                }
                return n = wd.bind(null, e), l = Ui(l, n), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return n !== null && n !== null && zi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function wd(e, t) {
            if (Ve !== 0 && Ve !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (Iu() && e.callbackNode !== l) return null;
            var n = he;
            return n = ru(e, e === Te ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), n === 0 ? null : (bd(e, n, t), Pd(e, Pt()), e.callbackNode != null && e.callbackNode === l ? wd.bind(null, e) : null);
        }
        function Hd(e, t) {
            if (Iu()) return null;
            bd(e, t, !0);
        }
        function T1() {
            z1(function() {
                (ve & 6) !== 0 ? Ui(Af, R1) : qd();
            });
        }
        function Rc() {
            return ln === 0 && (ln = Mf()), ln;
        }
        function Ld(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : du("" + e);
        }
        function Qd(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function A1(e, t, l, n, a) {
            if (t === "submit" && l && l.stateNode === a) {
                var i = Ld((a[ut] || null).action), s = n.submitter;
                s && (t = (t = s[ut] || null) ? Ld(t.formAction) : s.getAttribute("formAction"), t !== null && (i = t, s = null));
                var h = new yu("action", "action", null, n, a);
                e.push({
                    event: h,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (n.defaultPrevented) {
                                    if (ln !== 0) {
                                        var g = s ? Qd(a, s) : new FormData(a);
                                        Yr(l, {
                                            pending: !0,
                                            data: g,
                                            method: a.method,
                                            action: i
                                        }, null, g);
                                    }
                                } else typeof i == "function" && (h.preventDefault(), g = s ? Qd(a, s) : new FormData(a), Yr(l, {
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
        for(var Tc = 0; Tc < cr.length; Tc++){
            var Ac = cr[Tc], O1 = Ac.toLowerCase(), N1 = Ac[0].toUpperCase() + Ac.slice(1);
            Bt(O1, "on" + N1);
        }
        Bt(bo, "onAnimationEnd"), Bt(So, "onAnimationIteration"), Bt(Eo, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(k0, "onTransitionRun"), Bt(G0, "onTransitionStart"), Bt(X0, "onTransitionCancel"), Bt(_o, "onTransitionEnd"), sn("onMouseEnter", [
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
        ]), Ql("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ql("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ql("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), Ql("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ql("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ql("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), M1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(za));
        function Kd(e, t) {
            t = (t & 4) !== 0;
            for(var l = 0; l < e.length; l++){
                var n = e[l], a = n.event;
                n = n.listeners;
                e: {
                    var i = void 0;
                    if (t) for(var s = n.length - 1; 0 <= s; s--){
                        var h = n[s], g = h.instance, N = h.currentTarget;
                        if (h = h.listener, g !== i && a.isPropagationStopped()) break e;
                        i = h, a.currentTarget = N;
                        try {
                            i(a);
                        } catch (U) {
                            ju(U);
                        }
                        a.currentTarget = null, i = g;
                    }
                    else for(s = 0; s < n.length; s++){
                        if (h = n[s], g = h.instance, N = h.currentTarget, h = h.listener, g !== i && a.isPropagationStopped()) break e;
                        i = h, a.currentTarget = N;
                        try {
                            i(a);
                        } catch (U) {
                            ju(U);
                        }
                        a.currentTarget = null, i = g;
                    }
                }
            }
        }
        function de(e, t) {
            var l = t[Hi];
            l === void 0 && (l = t[Hi] = new Set);
            var n = e + "__bubble";
            l.has(n) || (jd(t, e, 2, !1), l.add(n));
        }
        function Oc(e, t, l) {
            var n = 0;
            t && (n |= 4), jd(l, e, n, t);
        }
        var li = "_reactListening" + Math.random().toString(36).slice(2);
        function Nc(e) {
            if (!e[li]) {
                e[li] = !0, zf.forEach(function(l) {
                    l !== "selectionchange" && (M1.has(l) || Oc(l, !1, e), Oc(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[li] || (t[li] = !0, Oc("selectionchange", !1, t));
            }
        }
        function jd(e, t, l, n) {
            switch(dh(t)){
                case 2:
                    var a = tm;
                    break;
                case 8:
                    a = lm;
                    break;
                default:
                    a = Kc;
            }
            l = a.bind(null, t, l, e), a = void 0, !Ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
                capture: !0,
                passive: a
            }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
                passive: a
            }) : e.addEventListener(t, l, !1);
        }
        function Mc(e, t, l, n, a) {
            var i = n;
            if ((t & 1) === 0 && (t & 2) === 0 && n !== null) e: for(;;){
                if (n === null) return;
                var s = n.tag;
                if (s === 3 || s === 4) {
                    var h = n.stateNode.containerInfo;
                    if (h === a) break;
                    if (s === 4) for(s = n.return; s !== null;){
                        var g = s.tag;
                        if ((g === 3 || g === 4) && s.stateNode.containerInfo === a) return;
                        s = s.return;
                    }
                    for(; h !== null;){
                        if (s = cn(h), s === null) return;
                        if (g = s.tag, g === 5 || g === 6 || g === 26 || g === 27) {
                            n = i = s;
                            continue e;
                        }
                        h = h.parentNode;
                    }
                }
                n = n.return;
            }
            Zf(function() {
                var N = i, U = Vi(l), Q = [];
                e: {
                    var C = Ro.get(e);
                    if (C !== void 0) {
                        var x = yu, ee = e;
                        switch(e){
                            case "keypress":
                                if (pu(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                x = _0;
                                break;
                            case "focusin":
                                ee = "focus", x = Ii;
                                break;
                            case "focusout":
                                ee = "blur", x = Ii;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                x = Ii;
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
                                x = Wf;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                x = o0;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                x = A0;
                                break;
                            case bo:
                            case So:
                            case Eo:
                                x = h0;
                                break;
                            case _o:
                                x = N0;
                                break;
                            case "scroll":
                            case "scrollend":
                                x = c0;
                                break;
                            case "wheel":
                                x = D0;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                x = m0;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                x = If;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                x = x0;
                        }
                        var F = (t & 4) !== 0, _e = !F && (e === "scroll" || e === "scrollend"), T = F ? C !== null ? C + "Capture" : null : C;
                        F = [];
                        for(var _ = N, O; _ !== null;){
                            var P = _;
                            if (O = P.stateNode, P = P.tag, P !== 5 && P !== 26 && P !== 27 || O === null || T === null || (P = In(_, T), P != null && F.push(qa(_, P, O))), _e) break;
                            _ = _.return;
                        }
                        0 < F.length && (C = new x(C, ee, null, l, U), Q.push({
                            event: C,
                            listeners: F
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (C = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", C && l !== Xi && (ee = l.relatedTarget || l.fromElement) && (cn(ee) || ee[rn])) break e;
                        if ((x || C) && (C = U.window === U ? U : (C = U.ownerDocument) ? C.defaultView || C.parentWindow : window, x ? (ee = l.relatedTarget || l.toElement, x = N, ee = ee ? cn(ee) : null, ee !== null && (_e = d(ee), F = ee.tag, ee !== _e || F !== 5 && F !== 27 && F !== 6) && (ee = null)) : (x = null, ee = N), x !== ee)) {
                            if (F = Wf, P = "onMouseLeave", T = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (F = If, P = "onPointerLeave", T = "onPointerEnter", _ = "pointer"), _e = x == null ? C : Fn(x), O = ee == null ? C : Fn(ee), C = new F(P, _ + "leave", x, l, U), C.target = _e, C.relatedTarget = O, P = null, cn(U) === N && (F = new F(T, _ + "enter", ee, l, U), F.target = O, F.relatedTarget = _e, P = F), _e = P, x && ee) t: {
                                for(F = x, T = ee, _ = 0, O = F; O; O = jn(O))_++;
                                for(O = 0, P = T; P; P = jn(P))O++;
                                for(; 0 < _ - O;)F = jn(F), _--;
                                for(; 0 < O - _;)T = jn(T), O--;
                                for(; _--;){
                                    if (F === T || T !== null && F === T.alternate) break t;
                                    F = jn(F), T = jn(T);
                                }
                                F = null;
                            }
                            else F = null;
                            x !== null && Yd(Q, C, x, F, !1), ee !== null && _e !== null && Yd(Q, _e, ee, F, !0);
                        }
                    }
                    e: {
                        if (C = N ? Fn(N) : window, x = C.nodeName && C.nodeName.toLowerCase(), x === "select" || x === "input" && C.type === "file") var Z = ro;
                        else if (uo(C)) if (co) Z = K0;
                        else {
                            Z = L0;
                            var re = H0;
                        }
                        else x = C.nodeName, !x || x.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? N && Gi(N.elementType) && (Z = ro) : Z = Q0;
                        if (Z && (Z = Z(e, N))) {
                            io(Q, Z, l, U);
                            break e;
                        }
                        re && re(e, C, N), e === "focusout" && N && C.type === "number" && N.memoizedProps.value != null && ki(C, "number", C.value);
                    }
                    switch(re = N ? Fn(N) : window, e){
                        case "focusin":
                            (uo(re) || re.contentEditable === "true") && (gn = re, ur = N, ra = null);
                            break;
                        case "focusout":
                            ra = ur = gn = null;
                            break;
                        case "mousedown":
                            ir = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            ir = !1, vo(Q, l, U);
                            break;
                        case "selectionchange":
                            if (Y0) break;
                        case "keydown":
                        case "keyup":
                            vo(Q, l, U);
                    }
                    var $;
                    if (tr) e: {
                        switch(e){
                            case "compositionstart":
                                var I = "onCompositionStart";
                                break e;
                            case "compositionend":
                                I = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                I = "onCompositionUpdate";
                                break e;
                        }
                        I = void 0;
                    }
                    else vn ? no(e, l) && (I = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (I = "onCompositionStart");
                    I && (eo && l.locale !== "ko" && (vn || I !== "onCompositionStart" ? I === "onCompositionEnd" && vn && ($ = Jf()) : (dl = U, $i = "value" in dl ? dl.value : dl.textContent, vn = !0)), re = ni(N, I), 0 < re.length && (I = new Ff(I, e, null, l, U), Q.push({
                        event: I,
                        listeners: re
                    }), $ ? I.data = $ : ($ = ao(l), $ !== null && (I.data = $)))), ($ = U0 ? z0(e, l) : q0(e, l)) && (I = ni(N, "onBeforeInput"), 0 < I.length && (re = new Ff("onBeforeInput", "beforeinput", null, l, U), Q.push({
                        event: re,
                        listeners: I
                    }), re.data = $)), A1(Q, e, N, l, U);
                }
                Kd(Q, t);
            });
        }
        function qa(e, t, l) {
            return {
                instance: e,
                listener: t,
                currentTarget: l
            };
        }
        function ni(e, t) {
            for(var l = t + "Capture", n = []; e !== null;){
                var a = e, i = a.stateNode;
                if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = In(e, l), a != null && n.unshift(qa(e, a, i)), a = In(e, t), a != null && n.push(qa(e, a, i))), e.tag === 3) return n;
                e = e.return;
            }
            return [];
        }
        function jn(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function Yd(e, t, l, n, a) {
            for(var i = t._reactName, s = []; l !== null && l !== n;){
                var h = l, g = h.alternate, N = h.stateNode;
                if (h = h.tag, g !== null && g === n) break;
                h !== 5 && h !== 26 && h !== 27 || N === null || (g = N, a ? (N = In(l, i), N != null && s.unshift(qa(l, N, g))) : a || (N = In(l, i), N != null && s.push(qa(l, N, g)))), l = l.return;
            }
            s.length !== 0 && e.push({
                event: t,
                listeners: s
            });
        }
        var D1 = /\r\n?/g, C1 = /\u0000|\uFFFD/g;
        function kd(e) {
            return (typeof e == "string" ? e : "" + e).replace(D1, `
`).replace(C1, "");
        }
        function Gd(e, t) {
            return t = kd(t), kd(e) === t;
        }
        function ai() {}
        function Ee(e, t, l, n, a, i) {
            switch(l){
                case "children":
                    typeof n == "string" ? t === "body" || t === "textarea" && n === "" || pn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && pn(e, "" + n);
                    break;
                case "className":
                    fu(e, "class", n);
                    break;
                case "tabIndex":
                    fu(e, "tabindex", n);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    fu(e, l, n);
                    break;
                case "style":
                    Xf(e, n, i);
                    break;
                case "data":
                    if (t !== "object") {
                        fu(e, "data", n);
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
                    n = du("" + n), e.setAttribute(l, n);
                    break;
                case "action":
                case "formAction":
                    if (typeof n == "function") {
                        e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof i == "function" && (l === "formAction" ? (t !== "input" && Ee(e, t, "name", a.name, a, null), Ee(e, t, "formEncType", a.formEncType, a, null), Ee(e, t, "formMethod", a.formMethod, a, null), Ee(e, t, "formTarget", a.formTarget, a, null)) : (Ee(e, t, "encType", a.encType, a, null), Ee(e, t, "method", a.method, a, null), Ee(e, t, "target", a.target, a, null)));
                    if (n == null || typeof n == "symbol" || typeof n == "boolean") {
                        e.removeAttribute(l);
                        break;
                    }
                    n = du("" + n), e.setAttribute(l, n);
                    break;
                case "onClick":
                    n != null && (e.onclick = ai);
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
                    l = du("" + n), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
                    de("beforetoggle", e), de("toggle", e), cu(e, "popover", n);
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
                    cu(e, "is", n);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = i0.get(l) || l, cu(e, l, n));
            }
        }
        function Dc(e, t, l, n, a, i) {
            switch(l){
                case "style":
                    Xf(e, n, i);
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
                    n != null && (e.onclick = ai);
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
                    if (!qf.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[ut] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
                            typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
                            break e;
                        }
                        l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : cu(e, l, n);
                    }
            }
        }
        function Ze(e, t, l) {
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
                                throw Error(f(137, t));
                            default:
                                Ee(e, t, i, s, l, null);
                        }
                    }
                    a && Ee(e, t, "srcSet", l.srcSet, l, null), n && Ee(e, t, "src", l.src, l, null);
                    return;
                case "input":
                    de("invalid", e);
                    var h = i = s = a = null, g = null, N = null;
                    for(n in l)if (l.hasOwnProperty(n)) {
                        var U = l[n];
                        if (U != null) switch(n){
                            case "name":
                                a = U;
                                break;
                            case "type":
                                s = U;
                                break;
                            case "checked":
                                g = U;
                                break;
                            case "defaultChecked":
                                N = U;
                                break;
                            case "value":
                                i = U;
                                break;
                            case "defaultValue":
                                h = U;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (U != null) throw Error(f(137, t));
                                break;
                            default:
                                Ee(e, t, n, U, l, null);
                        }
                    }
                    jf(e, i, h, g, N, s, a, !1), ou(e);
                    return;
                case "select":
                    de("invalid", e), n = s = i = null;
                    for(a in l)if (l.hasOwnProperty(a) && (h = l[a], h != null)) switch(a){
                        case "value":
                            i = h;
                            break;
                        case "defaultValue":
                            s = h;
                            break;
                        case "multiple":
                            n = h;
                        default:
                            Ee(e, t, a, h, l, null);
                    }
                    t = i, l = s, e.multiple = !!n, t != null ? hn(e, !!n, t, !1) : l != null && hn(e, !!n, l, !0);
                    return;
                case "textarea":
                    de("invalid", e), i = a = n = null;
                    for(s in l)if (l.hasOwnProperty(s) && (h = l[s], h != null)) switch(s){
                        case "value":
                            n = h;
                            break;
                        case "defaultValue":
                            a = h;
                            break;
                        case "children":
                            i = h;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (h != null) throw Error(f(91));
                            break;
                        default:
                            Ee(e, t, s, h, l, null);
                    }
                    kf(e, n, a, i), ou(e);
                    return;
                case "option":
                    for(g in l)if (l.hasOwnProperty(g) && (n = l[g], n != null)) switch(g){
                        case "selected":
                            e.selected = n && typeof n != "function" && typeof n != "symbol";
                            break;
                        default:
                            Ee(e, t, g, n, l, null);
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
                    for(N in l)if (l.hasOwnProperty(N) && (n = l[N], n != null)) switch(N){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(f(137, t));
                        default:
                            Ee(e, t, N, n, l, null);
                    }
                    return;
                default:
                    if (Gi(t)) {
                        for(U in l)l.hasOwnProperty(U) && (n = l[U], n !== void 0 && Dc(e, t, U, n, l, void 0));
                        return;
                    }
            }
            for(h in l)l.hasOwnProperty(h) && (n = l[h], n != null && Ee(e, t, h, n, l, null));
        }
        function x1(e, t, l, n) {
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
                    var a = null, i = null, s = null, h = null, g = null, N = null, U = null;
                    for(x in l){
                        var Q = l[x];
                        if (l.hasOwnProperty(x) && Q != null) switch(x){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                g = Q;
                            default:
                                n.hasOwnProperty(x) || Ee(e, t, x, null, n, Q);
                        }
                    }
                    for(var C in n){
                        var x = n[C];
                        if (Q = l[C], n.hasOwnProperty(C) && (x != null || Q != null)) switch(C){
                            case "type":
                                i = x;
                                break;
                            case "name":
                                a = x;
                                break;
                            case "checked":
                                N = x;
                                break;
                            case "defaultChecked":
                                U = x;
                                break;
                            case "value":
                                s = x;
                                break;
                            case "defaultValue":
                                h = x;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (x != null) throw Error(f(137, t));
                                break;
                            default:
                                x !== Q && Ee(e, t, C, x, n, Q);
                        }
                    }
                    Yi(e, s, h, g, N, U, i, a);
                    return;
                case "select":
                    x = s = h = C = null;
                    for(i in l)if (g = l[i], l.hasOwnProperty(i) && g != null) switch(i){
                        case "value":
                            break;
                        case "multiple":
                            x = g;
                        default:
                            n.hasOwnProperty(i) || Ee(e, t, i, null, n, g);
                    }
                    for(a in n)if (i = n[a], g = l[a], n.hasOwnProperty(a) && (i != null || g != null)) switch(a){
                        case "value":
                            C = i;
                            break;
                        case "defaultValue":
                            h = i;
                            break;
                        case "multiple":
                            s = i;
                        default:
                            i !== g && Ee(e, t, a, i, n, g);
                    }
                    t = h, l = s, n = x, C != null ? hn(e, !!l, C, !1) : !!n != !!l && (t != null ? hn(e, !!l, t, !0) : hn(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    x = C = null;
                    for(h in l)if (a = l[h], l.hasOwnProperty(h) && a != null && !n.hasOwnProperty(h)) switch(h){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Ee(e, t, h, null, n, a);
                    }
                    for(s in n)if (a = n[s], i = l[s], n.hasOwnProperty(s) && (a != null || i != null)) switch(s){
                        case "value":
                            C = a;
                            break;
                        case "defaultValue":
                            x = a;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (a != null) throw Error(f(91));
                            break;
                        default:
                            a !== i && Ee(e, t, s, a, n, i);
                    }
                    Yf(e, C, x);
                    return;
                case "option":
                    for(var ee in l)if (C = l[ee], l.hasOwnProperty(ee) && C != null && !n.hasOwnProperty(ee)) switch(ee){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Ee(e, t, ee, null, n, C);
                    }
                    for(g in n)if (C = n[g], x = l[g], n.hasOwnProperty(g) && C !== x && (C != null || x != null)) switch(g){
                        case "selected":
                            e.selected = C && typeof C != "function" && typeof C != "symbol";
                            break;
                        default:
                            Ee(e, t, g, C, n, x);
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
                    for(var F in l)C = l[F], l.hasOwnProperty(F) && C != null && !n.hasOwnProperty(F) && Ee(e, t, F, null, n, C);
                    for(N in n)if (C = n[N], x = l[N], n.hasOwnProperty(N) && C !== x && (C != null || x != null)) switch(N){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (C != null) throw Error(f(137, t));
                            break;
                        default:
                            Ee(e, t, N, C, n, x);
                    }
                    return;
                default:
                    if (Gi(t)) {
                        for(var _e in l)C = l[_e], l.hasOwnProperty(_e) && C !== void 0 && !n.hasOwnProperty(_e) && Dc(e, t, _e, void 0, n, C);
                        for(U in n)C = n[U], x = l[U], !n.hasOwnProperty(U) || C === x || C === void 0 && x === void 0 || Dc(e, t, U, C, n, x);
                        return;
                    }
            }
            for(var T in l)C = l[T], l.hasOwnProperty(T) && C != null && !n.hasOwnProperty(T) && Ee(e, t, T, null, n, C);
            for(Q in n)C = n[Q], x = l[Q], !n.hasOwnProperty(Q) || C === x || C == null && x == null || Ee(e, t, Q, C, n, x);
        }
        var Cc = null, xc = null;
        function ui(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function Xd(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function Vd(e, t) {
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
        function Bc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var Uc = null;
        function B1() {
            var e = window.event;
            return e && e.type === "popstate" ? e === Uc ? !1 : (Uc = e, !0) : (Uc = null, !1);
        }
        var Zd = typeof setTimeout == "function" ? setTimeout : void 0, U1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Jd = typeof Promise == "function" ? Promise : void 0, z1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jd < "u" ? function(e) {
            return Jd.resolve(null).then(e).catch(q1);
        } : Zd;
        function q1(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function Ml(e) {
            return e === "head";
        }
        function $d(e, t) {
            var l = t, n = 0, a = 0;
            do {
                var i = l.nextSibling;
                if (e.removeChild(l), i && i.nodeType === 8) if (l = i.data, l === "/$") {
                    if (0 < n && 8 > n) {
                        l = n;
                        var s = e.ownerDocument;
                        if (l & 1 && Pa(s.documentElement), l & 2 && Pa(s.body), l & 4) for(l = s.head, Pa(l), s = l.firstChild; s;){
                            var h = s.nextSibling, g = s.nodeName;
                            s[Wn] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && s.rel.toLowerCase() === "stylesheet" || l.removeChild(s), s = h;
                        }
                    }
                    if (a === 0) {
                        e.removeChild(i), ka(t);
                        return;
                    }
                    a--;
                } else l === "$" || l === "$?" || l === "$!" ? a++ : n = l.charCodeAt(0) - 48;
                else n = 0;
                l = i;
            }while (l);
            ka(t);
        }
        function zc(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var l = t;
                switch(t = t.nextSibling, l.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        zc(l), Li(l);
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
        function P1(e, t, l, n) {
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
                if (e = zt(e.nextSibling), e === null) break;
            }
            return null;
        }
        function w1(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = zt(e.nextSibling), e === null)) return null;
            return e;
        }
        function qc(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
        }
        function H1(e, t) {
            var l = e.ownerDocument;
            if (e.data !== "$?" || l.readyState === "complete") t();
            else {
                var n = function() {
                    t(), l.removeEventListener("DOMContentLoaded", n);
                };
                l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
            }
        }
        function zt(e) {
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
        var Pc = null;
        function Wd(e) {
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
        function Fd(e, t, l) {
            switch(t = ui(l), e){
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
        function Pa(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            Li(e);
        }
        var Mt = new Map, Id = new Set;
        function ii(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var ul = j.d;
        j.d = {
            f: L1,
            r: Q1,
            D: K1,
            C: j1,
            L: Y1,
            m: k1,
            X: X1,
            S: G1,
            M: V1
        };
        function L1() {
            var e = ul.f(), t = Wu();
            return e || t;
        }
        function Q1(e) {
            var t = fn(e);
            t !== null && t.tag === 5 && t.type === "form" ? bs(t) : ul.r(e);
        }
        var Yn = typeof document > "u" ? null : document;
        function eh(e, t, l) {
            var n = Yn;
            if (n && typeof t == "string" && t) {
                var a = Et(t);
                a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Id.has(a) || (Id.add(a), e = {
                    rel: e,
                    crossOrigin: l,
                    href: t
                }, n.querySelector(a) === null && (t = n.createElement("link"), Ze(t, "link", e), Ke(t), n.head.appendChild(t)));
            }
        }
        function K1(e) {
            ul.D(e), eh("dns-prefetch", e, null);
        }
        function j1(e, t) {
            ul.C(e, t), eh("preconnect", e, t);
        }
        function Y1(e, t, l) {
            ul.L(e, t, l);
            var n = Yn;
            if (n && e && t) {
                var a = 'link[rel="preload"][as="' + Et(t) + '"]';
                t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Et(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Et(l.imageSizes) + '"]')) : a += '[href="' + Et(e) + '"]';
                var i = a;
                switch(t){
                    case "style":
                        i = kn(e);
                        break;
                    case "script":
                        i = Gn(e);
                }
                Mt.has(i) || (e = E({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), Mt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(wa(i)) || t === "script" && n.querySelector(Ha(i)) || (t = n.createElement("link"), Ze(t, "link", e), Ke(t), n.head.appendChild(t)));
            }
        }
        function k1(e, t) {
            ul.m(e, t);
            var l = Yn;
            if (l && e) {
                var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Et(n) + '"][href="' + Et(e) + '"]', i = a;
                switch(n){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        i = Gn(e);
                }
                if (!Mt.has(i) && (e = E({
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
                            if (l.querySelector(Ha(i))) return;
                    }
                    n = l.createElement("link"), Ze(n, "link", e), Ke(n), l.head.appendChild(n);
                }
            }
        }
        function G1(e, t, l) {
            ul.S(e, t, l);
            var n = Yn;
            if (n && e) {
                var a = on(n).hoistableStyles, i = kn(e);
                t = t || "default";
                var s = a.get(i);
                if (!s) {
                    var h = {
                        loading: 0,
                        preload: null
                    };
                    if (s = n.querySelector(wa(i))) h.loading = 5;
                    else {
                        e = E({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = Mt.get(i)) && wc(e, l);
                        var g = s = n.createElement("link");
                        Ke(g), Ze(g, "link", e), g._p = new Promise(function(N, U) {
                            g.onload = N, g.onerror = U;
                        }), g.addEventListener("load", function() {
                            h.loading |= 1;
                        }), g.addEventListener("error", function() {
                            h.loading |= 2;
                        }), h.loading |= 4, ri(s, t, n);
                    }
                    s = {
                        type: "stylesheet",
                        instance: s,
                        count: 1,
                        state: h
                    }, a.set(i, s);
                }
            }
        }
        function X1(e, t) {
            ul.X(e, t);
            var l = Yn;
            if (l && e) {
                var n = on(l).hoistableScripts, a = Gn(e), i = n.get(a);
                i || (i = l.querySelector(Ha(a)), i || (e = E({
                    src: e,
                    async: !0
                }, t), (t = Mt.get(a)) && Hc(e, t), i = l.createElement("script"), Ke(i), Ze(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function V1(e, t) {
            ul.M(e, t);
            var l = Yn;
            if (l && e) {
                var n = on(l).hoistableScripts, a = Gn(e), i = n.get(a);
                i || (i = l.querySelector(Ha(a)), i || (e = E({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Mt.get(a)) && Hc(e, t), i = l.createElement("script"), Ke(i), Ze(i, "link", e), l.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, n.set(a, i));
            }
        }
        function th(e, t, l, n) {
            var a = (a = te.current) ? ii(a) : null;
            if (!a) throw Error(f(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (t = kn(l.href), l = on(a).hoistableStyles, n = l.get(t), n || (n = {
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
                        e = kn(l.href);
                        var i = on(a).hoistableStyles, s = i.get(e);
                        if (s || (a = a.ownerDocument || a, s = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, i.set(e, s), (i = a.querySelector(wa(e))) && !i._p && (s.instance = i, s.state.loading = 5), Mt.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, Mt.set(e, l), i || Z1(a, e, l, s.state))), t && n === null) throw Error(f(528, ""));
                        return s;
                    }
                    if (t && n !== null) throw Error(f(529, ""));
                    return null;
                case "script":
                    return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Gn(l), l = on(a).hoistableScripts, n = l.get(t), n || (n = {
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
        function kn(e) {
            return 'href="' + Et(e) + '"';
        }
        function wa(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function lh(e) {
            return E({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function Z1(e, t, l, n) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
                return n.loading |= 1;
            }), t.addEventListener("error", function() {
                return n.loading |= 2;
            }), Ze(t, "link", l), Ke(t), e.head.appendChild(t));
        }
        function Gn(e) {
            return '[src="' + Et(e) + '"]';
        }
        function Ha(e) {
            return "script[async]" + e;
        }
        function nh(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var n = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
                    if (n) return t.instance = n, Ke(n), n;
                    var a = E({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return n = (e.ownerDocument || e).createElement("style"), Ke(n), Ze(n, "style", a), ri(n, l.precedence, e), t.instance = n;
                case "stylesheet":
                    a = kn(l.href);
                    var i = e.querySelector(wa(a));
                    if (i) return t.state.loading |= 4, t.instance = i, Ke(i), i;
                    n = lh(l), (a = Mt.get(a)) && wc(n, a), i = (e.ownerDocument || e).createElement("link"), Ke(i);
                    var s = i;
                    return s._p = new Promise(function(h, g) {
                        s.onload = h, s.onerror = g;
                    }), Ze(i, "link", n), t.state.loading |= 4, ri(i, l.precedence, e), t.instance = i;
                case "script":
                    return i = Gn(l.src), (a = e.querySelector(Ha(i))) ? (t.instance = a, Ke(a), a) : (n = l, (a = Mt.get(i)) && (n = E({}, l), Hc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ke(a), Ze(a, "link", n), e.head.appendChild(a), t.instance = a);
                case "void":
                    return null;
                default:
                    throw Error(f(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, ri(n, l.precedence, e));
            return t.instance;
        }
        function ri(e, t, l) {
            for(var n = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = n.length ? n[n.length - 1] : null, i = a, s = 0; s < n.length; s++){
                var h = n[s];
                if (h.dataset.precedence === t) i = h;
                else if (i !== a) break;
            }
            i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
        }
        function wc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Hc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var ci = null;
        function ah(e, t, l) {
            if (ci === null) {
                var n = new Map, a = ci = new Map;
                a.set(l, n);
            } else a = ci, n = a.get(l), n || (n = new Map, a.set(l, n));
            if (n.has(e)) return n;
            for(n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++){
                var i = l[a];
                if (!(i[Wn] || i[We] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var s = i.getAttribute(t) || "";
                    s = e + s;
                    var h = n.get(s);
                    h ? h.push(i) : n.set(s, [
                        i
                    ]);
                }
            }
            return n;
        }
        function uh(e, t, l) {
            e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
        }
        function J1(e, t, l) {
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
        function ih(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        var La = null;
        function $1() {}
        function W1(e, t, l) {
            if (La === null) throw Error(f(475));
            var n = La;
            if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var a = kn(l.href), i = e.querySelector(wa(a));
                    if (i) {
                        e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = fi.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = i, Ke(i);
                        return;
                    }
                    i = e.ownerDocument || e, l = lh(l), (a = Mt.get(a)) && wc(l, a), i = i.createElement("link"), Ke(i);
                    var s = i;
                    s._p = new Promise(function(h, g) {
                        s.onload = h, s.onerror = g;
                    }), Ze(i, "link", l), t.instance = i;
                }
                n.stylesheets === null && (n.stylesheets = new Map), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = fi.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
            }
        }
        function F1() {
            if (La === null) throw Error(f(475));
            var e = La;
            return e.stylesheets && e.count === 0 && Lc(e, e.stylesheets), 0 < e.count ? function(t) {
                var l = setTimeout(function() {
                    if (e.stylesheets && Lc(e, e.stylesheets), e.unsuspend) {
                        var n = e.unsuspend;
                        e.unsuspend = null, n();
                    }
                }, 6e4);
                return e.unsuspend = t, function() {
                    e.unsuspend = null, clearTimeout(l);
                };
            } : null;
        }
        function fi() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Lc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var oi = null;
        function Lc(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, oi = new Map, t.forEach(I1, e), oi = null, fi.call(e));
        }
        function I1(e, t) {
            if (!(t.state.loading & 4)) {
                var l = oi.get(e);
                if (l) var n = l.get(null);
                else {
                    l = new Map, oi.set(e, l);
                    for(var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++){
                        var s = a[i];
                        (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), n = s);
                    }
                    n && l.set(null, n);
                }
                a = t.instance, s = a.getAttribute("data-precedence"), i = l.get(s) || n, i === n && l.set(null, a), l.set(s, a), this.count++, n = fi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
            }
        }
        var Qa = {
            $$typeof: w,
            Provider: null,
            Consumer: null,
            _currentValue: G,
            _currentValue2: G,
            _threadCount: 0
        };
        function em(e, t, l, n, a, i, s, h) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = qi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qi(0), this.hiddenUpdates = qi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = new Map;
        }
        function rh(e, t, l, n, a, i, s, h, g, N, U, Q) {
            return e = new em(e, t, l, s, h, g, N, Q), t = 1, i === !0 && (t |= 24), i = pt(3, null, null, t), e.current = i, i.stateNode = e, t = Sr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
                element: n,
                isDehydrated: l,
                cache: t
            }, Tr(i), e;
        }
        function ch(e) {
            return e ? (e = _n, e) : _n;
        }
        function fh(e, t, l, n, a, i) {
            a = ch(a), n.context === null ? n.context = a : n.pendingContext = a, n = ml(t), n.payload = {
                element: l
            }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = yl(e, n, t), l !== null && (bt(l, e, t), ya(l, e, t));
        }
        function oh(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var l = e.retryLane;
                e.retryLane = l !== 0 && l < t ? l : t;
            }
        }
        function Qc(e, t) {
            oh(e, t), (e = e.alternate) && oh(e, t);
        }
        function sh(e) {
            if (e.tag === 13) {
                var t = En(e, 67108864);
                t !== null && bt(t, e, 67108864), Qc(e, 67108864);
            }
        }
        var si = !0;
        function tm(e, t, l, n) {
            var a = B.T;
            B.T = null;
            var i = j.p;
            try {
                j.p = 2, Kc(e, t, l, n);
            } finally{
                j.p = i, B.T = a;
            }
        }
        function lm(e, t, l, n) {
            var a = B.T;
            B.T = null;
            var i = j.p;
            try {
                j.p = 8, Kc(e, t, l, n);
            } finally{
                j.p = i, B.T = a;
            }
        }
        function Kc(e, t, l, n) {
            if (si) {
                var a = jc(n);
                if (a === null) Mc(e, t, n, di, l), hh(e, n);
                else if (am(a, e, t, l, n)) n.stopPropagation();
                else if (hh(e, n), t & 4 && -1 < nm.indexOf(e)) {
                    for(; a !== null;){
                        var i = fn(a);
                        if (i !== null) switch(i.tag){
                            case 3:
                                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                                    var s = Ll(i.pendingLanes);
                                    if (s !== 0) {
                                        var h = i;
                                        for(h.pendingLanes |= 2, h.entangledLanes |= 2; s;){
                                            var g = 1 << 31 - dt(s);
                                            h.entanglements[1] |= g, s &= ~g;
                                        }
                                        Kt(i), (ve & 6) === 0 && (Ju = Pt() + 500, Ua(0));
                                    }
                                }
                                break;
                            case 13:
                                h = En(i, 2), h !== null && bt(h, i, 2), Wu(), Qc(i, 2);
                        }
                        if (i = jc(n), i === null && Mc(e, t, n, di, l), i === a) break;
                        a = i;
                    }
                    a !== null && n.stopPropagation();
                } else Mc(e, t, n, null, l);
            }
        }
        function jc(e) {
            return e = Vi(e), Yc(e);
        }
        var di = null;
        function Yc(e) {
            if (di = null, e = cn(e), e !== null) {
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
            return di = e, null;
        }
        function dh(e) {
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
                    switch(jp()){
                        case Af:
                            return 2;
                        case Of:
                            return 8;
                        case au:
                        case Yp:
                            return 32;
                        case Nf:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var kc = !1, Dl = null, Cl = null, xl = null, Ka = new Map, ja = new Map, Bl = [], nm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function hh(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    Dl = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Cl = null;
                    break;
                case "mouseover":
                case "mouseout":
                    xl = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Ka.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    ja.delete(t.pointerId);
            }
        }
        function Ya(e, t, l, n, a, i) {
            return e === null || e.nativeEvent !== i ? (e = {
                blockedOn: t,
                domEventName: l,
                eventSystemFlags: n,
                nativeEvent: i,
                targetContainers: [
                    a
                ]
            }, t !== null && (t = fn(t), t !== null && sh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
        }
        function am(e, t, l, n, a) {
            switch(t){
                case "focusin":
                    return Dl = Ya(Dl, e, t, l, n, a), !0;
                case "dragenter":
                    return Cl = Ya(Cl, e, t, l, n, a), !0;
                case "mouseover":
                    return xl = Ya(xl, e, t, l, n, a), !0;
                case "pointerover":
                    var i = a.pointerId;
                    return Ka.set(i, Ya(Ka.get(i) || null, e, t, l, n, a)), !0;
                case "gotpointercapture":
                    return i = a.pointerId, ja.set(i, Ya(ja.get(i) || null, e, t, l, n, a)), !0;
            }
            return !1;
        }
        function ph(e) {
            var t = cn(e.target);
            if (t !== null) {
                var l = d(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = y(l), t !== null) {
                            e.blockedOn = t, Wp(e.priority, function() {
                                if (l.tag === 13) {
                                    var n = gt();
                                    n = Pi(n);
                                    var a = En(l, n);
                                    a !== null && bt(a, l, n), Qc(l, n);
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
        function hi(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var l = jc(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var n = new l.constructor(l.type, l);
                    Xi = n, l.target.dispatchEvent(n), Xi = null;
                } else return t = fn(l), t !== null && sh(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function mh(e, t, l) {
            hi(e) && l.delete(t);
        }
        function um() {
            kc = !1, Dl !== null && hi(Dl) && (Dl = null), Cl !== null && hi(Cl) && (Cl = null), xl !== null && hi(xl) && (xl = null), Ka.forEach(mh), ja.forEach(mh);
        }
        function pi(e, t) {
            e.blockedOn === t && (e.blockedOn = null, kc || (kc = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, um)));
        }
        var mi = null;
        function yh(e) {
            mi !== e && (mi = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function() {
                mi === e && (mi = null);
                for(var t = 0; t < e.length; t += 3){
                    var l = e[t], n = e[t + 1], a = e[t + 2];
                    if (typeof n != "function") {
                        if (Yc(n || l) === null) continue;
                        break;
                    }
                    var i = fn(l);
                    i !== null && (e.splice(t, 3), t -= 3, Yr(i, {
                        pending: !0,
                        data: a,
                        method: l.method,
                        action: n
                    }, n, a));
                }
            }));
        }
        function ka(e) {
            function t(g) {
                return pi(g, e);
            }
            Dl !== null && pi(Dl, e), Cl !== null && pi(Cl, e), xl !== null && pi(xl, e), Ka.forEach(t), ja.forEach(t);
            for(var l = 0; l < Bl.length; l++){
                var n = Bl[l];
                n.blockedOn === e && (n.blockedOn = null);
            }
            for(; 0 < Bl.length && (l = Bl[0], l.blockedOn === null);)ph(l), l.blockedOn === null && Bl.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(n = 0; n < l.length; n += 3){
                var a = l[n], i = l[n + 1], s = a[ut] || null;
                if (typeof i == "function") s || yh(l);
                else if (s) {
                    var h = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (a = i, s = i[ut] || null) h = s.formAction;
                        else if (Yc(a) !== null) continue;
                    } else h = s.action;
                    typeof h == "function" ? l[n + 1] = h : (l.splice(n, 3), n -= 3), yh(l);
                }
            }
        }
        function Gc(e) {
            this._internalRoot = e;
        }
        yi.prototype.render = Gc.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(f(409));
            var l = t.current, n = gt();
            fh(l, n, e, t, null, null);
        }, yi.prototype.unmount = Gc.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fh(e.current, 2, null, e, null, null), Wu(), t[rn] = null;
            }
        };
        function yi(e) {
            this._internalRoot = e;
        }
        yi.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Bf();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < Bl.length && t !== 0 && t < Bl[l].priority; l++);
                Bl.splice(l, 0, e), l === 0 && ph(e);
            }
        };
        var vh = r.version;
        if (vh !== "19.1.0") throw Error(f(527, vh, "19.1.0"));
        j.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
            return e = p(t), e = e !== null ? m(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var im = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: B,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!vi.isDisabled && vi.supportsFiber) try {
                Zn = vi.inject(im), st = vi;
            } catch  {}
        }
        return Xa.createRoot = function(e, t) {
            if (!o(e)) throw Error(f(299));
            var l = !1, n = "", a = Us, i = zs, s = qs, h = null;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = rh(e, 1, !1, null, null, l, n, a, i, s, h, null), e[rn] = t.current, Nc(e), new Gc(t);
        }, Xa.hydrateRoot = function(e, t, l) {
            if (!o(e)) throw Error(f(299));
            var n = !1, a = "", i = Us, s = zs, h = qs, g = null, N = null;
            return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (g = l.unstable_transitionCallbacks), l.formState !== void 0 && (N = l.formState)), t = rh(e, 1, !0, t, l ?? null, n, a, i, s, h, g, N), t.context = ch(null), l = t.current, n = gt(), n = Pi(n), a = ml(n), a.callback = null, yl(l, a, n), l = n, t.current.lanes = l, $n(t, l), Kt(t), e[rn] = t.current, Nc(e), new yi(t);
        }, Xa.version = "19.1.0", Xa;
    }
    var Nh;
    function vm() {
        if (Nh) return Zc.exports;
        Nh = 1;
        function u() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
            } catch (r) {
                console.error(r);
            }
        }
        return u(), Zc.exports = ym(), Zc.exports;
    }
    var gm = vm(), Fc = {
        exports: {}
    }, Ic = {};
    var Mh;
    function bm() {
        if (Mh) return Ic;
        Mh = 1;
        var u = Di();
        function r(p, m) {
            return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
        }
        var c = typeof Object.is == "function" ? Object.is : r, f = u.useSyncExternalStore, o = u.useRef, d = u.useEffect, y = u.useMemo, v = u.useDebugValue;
        return Ic.useSyncExternalStoreWithSelector = function(p, m, E, R, b) {
            var M = o(null);
            if (M.current === null) {
                var D = {
                    hasValue: !1,
                    value: null
                };
                M.current = D;
            } else D = M.current;
            M = y(function() {
                function L(Y) {
                    if (!z) {
                        if (z = !0, K = Y, Y = R(Y), b !== void 0 && D.hasValue) {
                            var W = D.value;
                            if (b(W, Y)) return w = W;
                        }
                        return w = Y;
                    }
                    if (W = w, c(K, Y)) return W;
                    var ce = R(Y);
                    return b !== void 0 && b(W, ce) ? (K = Y, W) : (K = Y, w = ce);
                }
                var z = !1, K, w, V = E === void 0 ? null : E;
                return [
                    function() {
                        return L(m());
                    },
                    V === null ? void 0 : function() {
                        return L(V());
                    }
                ];
            }, [
                m,
                E,
                R,
                b
            ]);
            var H = f(p, M[0], M[1]);
            return d(function() {
                D.hasValue = !0, D.value = H;
            }, [
                H
            ]), v(H), H;
        }, Ic;
    }
    var Dh;
    function Sm() {
        return Dh || (Dh = 1, Fc.exports = bm()), Fc.exports;
    }
    var Em = Sm();
    function _m(u) {
        u();
    }
    function Rm() {
        let u = null, r = null;
        return {
            clear () {
                u = null, r = null;
            },
            notify () {
                _m(()=>{
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
    var Ch = {
        notify () {},
        get: ()=>[]
    };
    function Tm(u, r) {
        let c, f = Ch, o = 0, d = !1;
        function y(H) {
            E();
            const L = f.subscribe(H);
            let z = !1;
            return ()=>{
                z || (z = !0, L(), R());
            };
        }
        function v() {
            f.notify();
        }
        function p() {
            D.onStateChange && D.onStateChange();
        }
        function m() {
            return d;
        }
        function E() {
            o++, c || (c = u.subscribe(p), f = Rm());
        }
        function R() {
            o--, c && o === 0 && (c(), c = void 0, f.clear(), f = Ch);
        }
        function b() {
            d || (d = !0, E());
        }
        function M() {
            d && (d = !1, R());
        }
        const D = {
            addNestedSub: y,
            notifyNestedSubs: v,
            handleChangeWrapper: p,
            isSubscribed: m,
            trySubscribe: b,
            tryUnsubscribe: M,
            getListeners: ()=>f
        };
        return D;
    }
    var Am = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Om = Am(), Nm = ()=>typeof navigator < "u" && navigator.product === "ReactNative", Mm = Nm(), Dm = ()=>Om || Mm ? A.useLayoutEffect : A.useEffect, Cm = Dm(), xm = Symbol.for("react-redux-context"), Bm = typeof globalThis < "u" ? globalThis : {};
    function Um() {
        if (!A.createContext) return {};
        const u = Bm[xm] ??= new Map;
        let r = u.get(A.createContext);
        return r || (r = A.createContext(null), u.set(A.createContext, r)), r;
    }
    var wl = Um();
    function zm(u) {
        const { children: r, context: c, serverState: f, store: o } = u, d = A.useMemo(()=>{
            const p = Tm(o);
            return {
                store: o,
                subscription: p,
                getServerState: f ? ()=>f : void 0
            };
        }, [
            o,
            f
        ]), y = A.useMemo(()=>o.getState(), [
            o
        ]);
        Cm(()=>{
            const { subscription: p } = d;
            return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), y !== o.getState() && p.notifyNestedSubs(), ()=>{
                p.tryUnsubscribe(), p.onStateChange = void 0;
            };
        }, [
            d,
            y
        ]);
        const v = c || wl;
        return A.createElement(v.Provider, {
            value: d
        }, r);
    }
    var qm = zm;
    function hf(u = wl) {
        return function() {
            return A.useContext(u);
        };
    }
    var $h = hf();
    function Wh(u = wl) {
        const r = u === wl ? $h : hf(u), c = ()=>{
            const { store: f } = r();
            return f;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    var Pm = Wh();
    function wm(u = wl) {
        const r = u === wl ? Pm : Wh(u), c = ()=>r().dispatch;
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    let Hm;
    cb = wm();
    Hm = (u, r)=>u === r;
    function Lm(u = wl) {
        const r = u === wl ? $h : hf(u), c = (f, o = {})=>{
            const { equalityFn: d = Hm } = typeof o == "function" ? {
                equalityFn: o
            } : o, y = r(), { store: v, subscription: p, getServerState: m } = y;
            A.useRef(!0);
            const E = A.useCallback({
                [f.name] (b) {
                    return f(b);
                }
            }[f.name], [
                f
            ]), R = Em.useSyncExternalStoreWithSelector(p.addNestedSub, v.getState, m || v.getState, E, d);
            return A.useDebugValue(R), R;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    fb = Lm();
    function Je(u) {
        return `Minified Redux error #${u}; visit https://redux.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Qm = typeof Symbol == "function" && Symbol.observable || "@@observable", xh = Qm, ef = ()=>Math.random().toString(36).substring(7).split("").join("."), Km = {
        INIT: `@@redux/INIT${ef()}`,
        REPLACE: `@@redux/REPLACE${ef()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${ef()}`
    }, Oi = Km;
    function Fh(u) {
        if (typeof u != "object" || u === null) return !1;
        let r = u;
        for(; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(u) === r || Object.getPrototypeOf(u) === null;
    }
    function pf(u, r, c) {
        if (typeof u != "function") throw new Error(Je(2));
        if (typeof r == "function" && typeof c == "function" || typeof c == "function" && typeof arguments[3] == "function") throw new Error(Je(0));
        if (typeof r == "function" && typeof c > "u" && (c = r, r = void 0), typeof c < "u") {
            if (typeof c != "function") throw new Error(Je(1));
            return c(pf)(u, r);
        }
        let f = u, o = r, d = new Map, y = d, v = 0, p = !1;
        function m() {
            y === d && (y = new Map, d.forEach((L, z)=>{
                y.set(z, L);
            }));
        }
        function E() {
            if (p) throw new Error(Je(3));
            return o;
        }
        function R(L) {
            if (typeof L != "function") throw new Error(Je(4));
            if (p) throw new Error(Je(5));
            let z = !0;
            m();
            const K = v++;
            return y.set(K, L), function() {
                if (z) {
                    if (p) throw new Error(Je(6));
                    z = !1, m(), y.delete(K), d = null;
                }
            };
        }
        function b(L) {
            if (!Fh(L)) throw new Error(Je(7));
            if (typeof L.type > "u") throw new Error(Je(8));
            if (typeof L.type != "string") throw new Error(Je(17));
            if (p) throw new Error(Je(9));
            try {
                p = !0, o = f(o, L);
            } finally{
                p = !1;
            }
            return (d = y).forEach((K)=>{
                K();
            }), L;
        }
        function M(L) {
            if (typeof L != "function") throw new Error(Je(10));
            f = L, b({
                type: Oi.REPLACE
            });
        }
        function D() {
            const L = R;
            return {
                subscribe (z) {
                    if (typeof z != "object" || z === null) throw new Error(Je(11));
                    function K() {
                        const V = z;
                        V.next && V.next(E());
                    }
                    return K(), {
                        unsubscribe: L(K)
                    };
                },
                [xh] () {
                    return this;
                }
            };
        }
        return b({
            type: Oi.INIT
        }), {
            dispatch: b,
            subscribe: R,
            getState: E,
            replaceReducer: M,
            [xh]: D
        };
    }
    function jm(u) {
        Object.keys(u).forEach((r)=>{
            const c = u[r];
            if (typeof c(void 0, {
                type: Oi.INIT
            }) > "u") throw new Error(Je(12));
            if (typeof c(void 0, {
                type: Oi.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(Je(13));
        });
    }
    function Ih(u) {
        const r = Object.keys(u), c = {};
        for(let d = 0; d < r.length; d++){
            const y = r[d];
            typeof u[y] == "function" && (c[y] = u[y]);
        }
        const f = Object.keys(c);
        let o;
        try {
            jm(c);
        } catch (d) {
            o = d;
        }
        return function(y = {}, v) {
            if (o) throw o;
            let p = !1;
            const m = {};
            for(let E = 0; E < f.length; E++){
                const R = f[E], b = c[R], M = y[R], D = b(M, v);
                if (typeof D > "u") throw v && v.type, new Error(Je(14));
                m[R] = D, p = p || D !== M;
            }
            return p = p || f.length !== Object.keys(y).length, p ? m : y;
        };
    }
    function Ni(...u) {
        return u.length === 0 ? (r)=>r : u.length === 1 ? u[0] : u.reduce((r, c)=>(...f)=>r(c(...f)));
    }
    function Ym(...u) {
        return (r)=>(c, f)=>{
                const o = r(c, f);
                let d = ()=>{
                    throw new Error(Je(15));
                };
                const y = {
                    getState: o.getState,
                    dispatch: (p, ...m)=>d(p, ...m)
                }, v = u.map((p)=>p(y));
                return d = Ni(...v)(o.dispatch), {
                    ...o,
                    dispatch: d
                };
            };
    }
    function ep(u) {
        return ({ dispatch: c, getState: f })=>(o)=>(d)=>typeof d == "function" ? d(c, f, u) : o(d);
    }
    var km = ep(), Gm = ep, Xm = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Ni : Ni.apply(null, arguments);
    }, tp = class $a extends Array {
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
    function Vm(u) {
        return typeof u == "boolean";
    }
    var Zm = ()=>function(r) {
            const { thunk: c = !0, immutableCheck: f = !0, serializableCheck: o = !0, actionCreatorCheck: d = !0 } = r ?? {};
            let y = new tp;
            return c && (Vm(c) ? y.push(km) : y.push(Gm(c.extraArgument))), y;
        }, Jm = "RTK_autoBatch", Bh = (u)=>(r)=>{
            setTimeout(r, u);
        }, $m = (u = {
        type: "raf"
    })=>(r)=>(...c)=>{
                const f = r(...c);
                let o = !0, d = !1, y = !1;
                const v = new Set, p = u.type === "tick" ? queueMicrotask : u.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Bh(10) : u.type === "callback" ? u.queueNotification : Bh(u.timeout), m = ()=>{
                    y = !1, d && (d = !1, v.forEach((E)=>E()));
                };
                return Object.assign({}, f, {
                    subscribe (E) {
                        const R = ()=>o && E(), b = f.subscribe(R);
                        return v.add(E), ()=>{
                            b(), v.delete(E);
                        };
                    },
                    dispatch (E) {
                        try {
                            return o = !E?.meta?.[Jm], d = !o, d && (y || (y = !0, p(m))), f.dispatch(E);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, Wm = (u)=>function(c) {
            const { autoBatch: f = !0 } = c ?? {};
            let o = new tp(u);
            return f && o.push($m(typeof f == "object" ? f : void 0)), o;
        };
    function Fm(u) {
        const r = Zm(), { reducer: c = void 0, middleware: f, devTools: o = !0, preloadedState: d = void 0, enhancers: y = void 0 } = u || {};
        let v;
        if (typeof c == "function") v = c;
        else if (Fh(c)) v = Ih(c);
        else throw new Error(Im(1));
        let p;
        typeof f == "function" ? p = f(r) : p = r();
        let m = Ni;
        o && (m = Xm({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const E = Ym(...p), R = Wm(E);
        let b = typeof y == "function" ? y(R) : R();
        const M = m(...b);
        return pf(v, d, M);
    }
    function Im(u) {
        return `Minified Redux Toolkit error #${u}; visit https://redux-toolkit.js.org/Errors?code=${u} for the full message or use the non-minified dev environment for full errors. `;
    }
    var mf = "persist:", lp = "persist/FLUSH", yf = "persist/REHYDRATE", np = "persist/PAUSE", ap = "persist/PERSIST", up = "persist/PURGE", ip = "persist/REGISTER", ey = -1;
    function Ei(u) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ei = function(c) {
            return typeof c;
        } : Ei = function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        }, Ei(u);
    }
    function Uh(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function ty(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Uh(c, !0).forEach(function(f) {
                ly(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Uh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function ly(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    function ny(u, r, c, f) {
        f.debug;
        var o = ty({}, c);
        return u && Ei(u) === "object" && Object.keys(u).forEach(function(d) {
            d !== "_persist" && r[d] === c[d] && (o[d] = u[d]);
        }), o;
    }
    function ay(u) {
        var r = u.blacklist || null, c = u.whitelist || null, f = u.transforms || [], o = u.throttle || 0, d = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : mf).concat(u.key), y = u.storage, v;
        u.serialize === !1 ? v = function(Y) {
            return Y;
        } : typeof u.serialize == "function" ? v = u.serialize : v = uy;
        var p = u.writeFailHandler || null, m = {}, E = {}, R = [], b = null, M = null, D = function(Y) {
            Object.keys(Y).forEach(function(W) {
                z(W) && m[W] !== Y[W] && R.indexOf(W) === -1 && R.push(W);
            }), Object.keys(m).forEach(function(W) {
                Y[W] === void 0 && z(W) && R.indexOf(W) === -1 && m[W] !== void 0 && R.push(W);
            }), b === null && (b = setInterval(H, o)), m = Y;
        };
        function H() {
            if (R.length === 0) {
                b && clearInterval(b), b = null;
                return;
            }
            var V = R.shift(), Y = f.reduce(function(W, ce) {
                return ce.in(W, V, m);
            }, m[V]);
            if (Y !== void 0) try {
                E[V] = v(Y);
            } catch (W) {
                console.error("redux-persist/createPersistoid: error serializing state", W);
            }
            else delete E[V];
            R.length === 0 && L();
        }
        function L() {
            Object.keys(E).forEach(function(V) {
                m[V] === void 0 && delete E[V];
            }), M = y.setItem(d, v(E)).catch(K);
        }
        function z(V) {
            return !(c && c.indexOf(V) === -1 && V !== "_persist" || r && r.indexOf(V) !== -1);
        }
        function K(V) {
            p && p(V);
        }
        var w = function() {
            for(; R.length !== 0;)H();
            return M || Promise.resolve();
        };
        return {
            update: D,
            flush: w
        };
    }
    function uy(u) {
        return JSON.stringify(u);
    }
    function iy(u) {
        var r = u.transforms || [], c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : mf).concat(u.key), f = u.storage;
        u.debug;
        var o;
        return u.deserialize === !1 ? o = function(y) {
            return y;
        } : typeof u.deserialize == "function" ? o = u.deserialize : o = ry, f.getItem(c).then(function(d) {
            if (d) try {
                var y = {}, v = o(d);
                return Object.keys(v).forEach(function(p) {
                    y[p] = r.reduceRight(function(m, E) {
                        return E.out(m, p, v);
                    }, o(v[p]));
                }), y;
            } catch (p) {
                throw p;
            }
            else return;
        });
    }
    function ry(u) {
        return JSON.parse(u);
    }
    function cy(u) {
        var r = u.storage, c = "".concat(u.keyPrefix !== void 0 ? u.keyPrefix : mf).concat(u.key);
        return r.removeItem(c, fy);
    }
    function fy(u) {}
    function zh(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function il(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? zh(c, !0).forEach(function(f) {
                oy(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : zh(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function oy(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    function sy(u, r) {
        if (u == null) return {};
        var c = dy(u, r), f, o;
        if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(u);
            for(o = 0; o < d.length; o++)f = d[o], !(r.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(u, f) && (c[f] = u[f]);
        }
        return c;
    }
    function dy(u, r) {
        if (u == null) return {};
        var c = {}, f = Object.keys(u), o, d;
        for(d = 0; d < f.length; d++)o = f[d], !(r.indexOf(o) >= 0) && (c[o] = u[o]);
        return c;
    }
    var hy = 5e3;
    function py(u, r) {
        var c = u.version !== void 0 ? u.version : ey;
        u.debug;
        var f = u.stateReconciler === void 0 ? ny : u.stateReconciler, o = u.getStoredState || iy, d = u.timeout !== void 0 ? u.timeout : hy, y = null, v = !1, p = !0, m = function(R) {
            return R._persist.rehydrated && y && !p && y.update(R), R;
        };
        return function(E, R) {
            var b = E || {}, M = b._persist, D = sy(b, [
                "_persist"
            ]), H = D;
            if (R.type === ap) {
                var L = !1, z = function(pe, fe) {
                    L || (R.rehydrate(u.key, pe, fe), L = !0);
                };
                if (d && setTimeout(function() {
                    !L && z(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(u.key, '"')));
                }, d), p = !1, y || (y = ay(u)), M) return il({}, r(H, R), {
                    _persist: M
                });
                if (typeof R.rehydrate != "function" || typeof R.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return R.register(u.key), o(u).then(function(ce) {
                    var pe = u.migrate || function(fe, Ne) {
                        return Promise.resolve(fe);
                    };
                    pe(ce, c).then(function(fe) {
                        z(fe);
                    }, function(fe) {
                        z(void 0, fe);
                    });
                }, function(ce) {
                    z(void 0, ce);
                }), il({}, r(H, R), {
                    _persist: {
                        version: c,
                        rehydrated: !1
                    }
                });
            } else {
                if (R.type === up) return v = !0, R.result(cy(u)), il({}, r(H, R), {
                    _persist: M
                });
                if (R.type === lp) return R.result(y && y.flush()), il({}, r(H, R), {
                    _persist: M
                });
                if (R.type === np) p = !0;
                else if (R.type === yf) {
                    if (v) return il({}, H, {
                        _persist: il({}, M, {
                            rehydrated: !0
                        })
                    });
                    if (R.key === u.key) {
                        var K = r(H, R), w = R.payload, V = f !== !1 && w !== void 0 ? f(w, E, K, u) : K, Y = il({}, V, {
                            _persist: il({}, M, {
                                rehydrated: !0
                            })
                        });
                        return m(Y);
                    }
                }
            }
            if (!M) return r(E, R);
            var W = r(H, R);
            return W === H ? E : m(il({}, W, {
                _persist: M
            }));
        };
    }
    function qh(u) {
        return vy(u) || yy(u) || my();
    }
    function my() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function yy(u) {
        if (Symbol.iterator in Object(u) || Object.prototype.toString.call(u) === "[object Arguments]") return Array.from(u);
    }
    function vy(u) {
        if (Array.isArray(u)) {
            for(var r = 0, c = new Array(u.length); r < u.length; r++)c[r] = u[r];
            return c;
        }
    }
    function Ph(u, r) {
        var c = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(u, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function cf(u) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? Ph(c, !0).forEach(function(f) {
                gy(u, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(c)) : Ph(c).forEach(function(f) {
                Object.defineProperty(u, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return u;
    }
    function gy(u, r, c) {
        return r in u ? Object.defineProperty(u, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : u[r] = c, u;
    }
    var rp = {
        registry: [],
        bootstrapped: !1
    }, by = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rp, c = arguments.length > 1 ? arguments[1] : void 0;
        switch(c.type){
            case ip:
                return cf({}, r, {
                    registry: [].concat(qh(r.registry), [
                        c.key
                    ])
                });
            case yf:
                var f = r.registry.indexOf(c.key), o = qh(r.registry);
                return o.splice(f, 1), cf({}, r, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return r;
        }
    };
    function Sy(u, r, c) {
        var f = pf(by, rp, void 0), o = function(p) {
            f.dispatch({
                type: ip,
                key: p
            });
        }, d = function(p, m, E) {
            var R = {
                type: yf,
                payload: m,
                err: E,
                key: p
            };
            u.dispatch(R), f.dispatch(R);
        }, y = cf({}, f, {
            purge: function() {
                var p = [];
                return u.dispatch({
                    type: up,
                    result: function(E) {
                        p.push(E);
                    }
                }), Promise.all(p);
            },
            flush: function() {
                var p = [];
                return u.dispatch({
                    type: lp,
                    result: function(E) {
                        p.push(E);
                    }
                }), Promise.all(p);
            },
            pause: function() {
                u.dispatch({
                    type: np
                });
            },
            persist: function() {
                u.dispatch({
                    type: ap,
                    register: o,
                    rehydrate: d
                });
            }
        });
        return y.persist(), y;
    }
    const et = "w", Dt = "b", Ge = "p", ff = "n", _i = "b", Wa = "r", Pl = "q", He = "k", tf = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    class gi {
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
            const { color: f, piece: o, from: d, to: y, flags: v, captured: p, promotion: m } = c, E = $e(d), R = $e(y);
            this.color = f, this.piece = o, this.from = E, this.to = R, this.san = r._moveToSan(c, r._moves({
                legal: !0
            })), this.lan = E + R, this.before = r.fen(), r._makeMove(c), this.after = r.fen(), r._undoMove(), this.flags = "";
            for(const b in ae)ae[b] & v && (this.flags += nn[b]);
            p && (this.captured = p), m && (this.promotion = m, this.lan += m);
        }
        isCapture() {
            return this.flags.indexOf(nn.CAPTURE) > -1;
        }
        isPromotion() {
            return this.flags.indexOf(nn.PROMOTION) > -1;
        }
        isEnPassant() {
            return this.flags.indexOf(nn.EP_CAPTURE) > -1;
        }
        isKingsideCastle() {
            return this.flags.indexOf(nn.KSIDE_CASTLE) > -1;
        }
        isQueensideCastle() {
            return this.flags.indexOf(nn.QSIDE_CASTLE) > -1;
        }
        isBigPawn() {
            return this.flags.indexOf(nn.BIG_PAWN) > -1;
        }
    }
    const ot = -1, nn = {
        NORMAL: "n",
        CAPTURE: "c",
        BIG_PAWN: "b",
        EP_CAPTURE: "e",
        PROMOTION: "p",
        KSIDE_CASTLE: "k",
        QSIDE_CASTLE: "q"
    }, ae = {
        NORMAL: 1,
        CAPTURE: 2,
        BIG_PAWN: 4,
        EP_CAPTURE: 8,
        PROMOTION: 16,
        KSIDE_CASTLE: 32,
        QSIDE_CASTLE: 64
    }, of = {
        Event: "?",
        Site: "?",
        Date: "????.??.??",
        Round: "?",
        White: "?",
        Black: "?",
        Result: "*"
    }, Ey = {
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
    }, _y = {
        ...of,
        ...Ey
    }, le = {
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
    }, lf = {
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
    }, wh = {
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
    }, Ry = [
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
    ], Ty = [
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
    ], Ay = {
        p: 1,
        n: 2,
        b: 4,
        r: 8,
        q: 16,
        k: 32
    }, Oy = "pnbrqkPNBRQK", Hh = [
        ff,
        _i,
        Wa,
        Pl
    ], Ny = 7, My = 6, Dy = 1, Cy = 0, bi = {
        [He]: ae.KSIDE_CASTLE,
        [Pl]: ae.QSIDE_CASTLE
    }, zl = {
        w: [
            {
                square: le.a1,
                flag: ae.QSIDE_CASTLE
            },
            {
                square: le.h1,
                flag: ae.KSIDE_CASTLE
            }
        ],
        b: [
            {
                square: le.a8,
                flag: ae.QSIDE_CASTLE
            },
            {
                square: le.h8,
                flag: ae.KSIDE_CASTLE
            }
        ]
    }, xy = {
        b: Dy,
        w: My
    }, By = [
        "1-0",
        "0-1",
        "1/2-1/2",
        "*"
    ];
    function an(u) {
        return u >> 4;
    }
    function Ia(u) {
        return u & 15;
    }
    function cp(u) {
        return "0123456789".indexOf(u) !== -1;
    }
    function $e(u) {
        const r = Ia(u), c = an(u);
        return "abcdefgh".substring(r, r + 1) + "87654321".substring(c, c + 1);
    }
    function Va(u) {
        return u === et ? Dt : et;
    }
    function Uy(u) {
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
            let v = 0, p = !1;
            for(let m = 0; m < o[y].length; m++)if (cp(o[y][m])) {
                if (p) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (consecutive number)"
                };
                v += parseInt(o[y][m], 10), p = !0;
            } else {
                if (!/^[prnbqkPRNBQK]$/.test(o[y][m])) return {
                    ok: !1,
                    error: "Invalid FEN: piece data is invalid (invalid piece)"
                };
                v += 1, p = !1;
            }
            if (v !== 8) return {
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
        for (const { color: y, regex: v } of d){
            if (!v.test(r[0])) return {
                ok: !1,
                error: `Invalid FEN: missing ${y} king`
            };
            if ((r[0].match(v) || []).length > 1) return {
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
    function zy(u, r) {
        const c = u.from, f = u.to, o = u.piece;
        let d = 0, y = 0, v = 0;
        for(let p = 0, m = r.length; p < m; p++){
            const E = r[p].from, R = r[p].to, b = r[p].piece;
            o === b && c !== E && f === R && (d++, an(c) === an(E) && y++, Ia(c) === Ia(E) && v++);
        }
        return d > 0 ? y > 0 && v > 0 ? $e(c) : v > 0 ? $e(c).charAt(1) : $e(c).charAt(0) : "";
    }
    function ql(u, r, c, f, o, d = void 0, y = ae.NORMAL) {
        const v = an(f);
        if (o === Ge && (v === Ny || v === Cy)) for(let p = 0; p < Hh.length; p++){
            const m = Hh[p];
            u.push({
                color: r,
                from: c,
                to: f,
                piece: o,
                captured: d,
                promotion: m,
                flags: y | ae.PROMOTION
            });
        }
        else u.push({
            color: r,
            from: c,
            to: f,
            piece: o,
            captured: d,
            flags: y
        });
    }
    function Lh(u) {
        let r = u.charAt(0);
        return r >= "a" && r <= "h" ? u.match(/[a-h]\d.*[a-h]\d/) ? void 0 : Ge : (r = r.toLowerCase(), r === "o" ? He : r);
    }
    function nf(u) {
        return u.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function af(u) {
        return u.split(" ").slice(0, 4).join(" ");
    }
    fp = class {
        _board = new Array(128);
        _turn = et;
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
        constructor(r = tf, { skipValidation: c = !1 } = {}){
            this.load(r, {
                skipValidation: c
            });
        }
        clear({ preserveHeaders: r = !1 } = {}) {
            this._board = new Array(128), this._kings = {
                w: ot,
                b: ot
            }, this._turn = et, this._castling = {
                w: 0,
                b: 0
            }, this._epSquare = ot, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = r ? this._header : {
                ..._y
            }, this._positionCount = {}, this._header.SetUp = null, this._header.FEN = null;
        }
        load(r, { skipValidation: c = !1, preserveHeaders: f = !1 } = {}) {
            let o = r.split(/\s+/);
            if (o.length >= 2 && o.length < 6) {
                const v = [
                    "-",
                    "-",
                    "0",
                    "1"
                ];
                r = o.concat(v.slice(-(6 - o.length))).join(" ");
            }
            if (o = r.split(/\s+/), !c) {
                const { ok: v, error: p } = Uy(r);
                if (!v) throw new Error(p);
            }
            const d = o[0];
            let y = 0;
            this.clear({
                preserveHeaders: f
            });
            for(let v = 0; v < d.length; v++){
                const p = d.charAt(v);
                if (p === "/") y += 8;
                else if (cp(p)) y += parseInt(p, 10);
                else {
                    const m = p < "a" ? et : Dt;
                    this._put({
                        type: p.toLowerCase(),
                        color: m
                    }, $e(y)), y++;
                }
            }
            this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= ae.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= ae.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= ae.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= ae.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? ot : le[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(r), this._incPositionCount(r);
        }
        fen() {
            let r = 0, c = "";
            for(let d = le.a8; d <= le.h1; d++){
                if (this._board[d]) {
                    r > 0 && (c += r, r = 0);
                    const { color: y, type: v } = this._board[d];
                    c += y === et ? v.toUpperCase() : v.toLowerCase();
                } else r++;
                d + 1 & 136 && (r > 0 && (c += r), d !== le.h1 && (c += "/"), r = 0, d += 8);
            }
            let f = "";
            this._castling[et] & ae.KSIDE_CASTLE && (f += "K"), this._castling[et] & ae.QSIDE_CASTLE && (f += "Q"), this._castling[Dt] & ae.KSIDE_CASTLE && (f += "k"), this._castling[Dt] & ae.QSIDE_CASTLE && (f += "q"), f = f || "-";
            let o = "-";
            if (this._epSquare !== ot) {
                const d = this._epSquare + (this._turn === et ? 16 : -16), y = [
                    d + 1,
                    d - 1
                ];
                for (const v of y){
                    if (v & 136) continue;
                    const p = this._turn;
                    if (this._board[v]?.color === p && this._board[v]?.type === Ge) {
                        this._makeMove({
                            color: p,
                            from: v,
                            to: this._epSquare,
                            piece: Ge,
                            captured: Ge,
                            flags: ae.EP_CAPTURE
                        });
                        const m = !this._isKingAttacked(p);
                        if (this._undoMove(), m) {
                            o = $e(this._epSquare);
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
            this._history.length > 0 || (r !== tf ? (this._header.SetUp = "1", this._header.FEN = r) : (this._header.SetUp = null, this._header.FEN = null));
        }
        reset() {
            this.load(tf);
        }
        get(r) {
            return this._board[le[r]];
        }
        findPiece(r) {
            const c = [];
            for(let f = le.a8; f <= le.h1; f++){
                if (f & 136) {
                    f += 7;
                    continue;
                }
                !this._board[f] || this._board[f]?.color !== r.color || this._board[f].color === r.color && this._board[f].type === r.type && c.push($e(f));
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
            if (Oy.indexOf(r.toLowerCase()) === -1 || !(f in le)) return !1;
            const o = le[f];
            if (r == He && !(this._kings[c] == ot || this._kings[c] == o)) return !1;
            const d = this._board[o];
            return d && d.type === He && (this._kings[d.color] = ot), this._board[o] = {
                type: r,
                color: c
            }, r === He && (this._kings[c] = o), !0;
        }
        remove(r) {
            const c = this.get(r);
            return delete this._board[le[r]], c && c.type === He && (this._kings[c.color] = ot), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), c;
        }
        _updateCastlingRights() {
            const r = this._board[le.e1]?.type === He && this._board[le.e1]?.color === et, c = this._board[le.e8]?.type === He && this._board[le.e8]?.color === Dt;
            (!r || this._board[le.a1]?.type !== Wa || this._board[le.a1]?.color !== et) && (this._castling.w &= -65), (!r || this._board[le.h1]?.type !== Wa || this._board[le.h1]?.color !== et) && (this._castling.w &= -33), (!c || this._board[le.a8]?.type !== Wa || this._board[le.a8]?.color !== Dt) && (this._castling.b &= -65), (!c || this._board[le.h8]?.type !== Wa || this._board[le.h8]?.color !== Dt) && (this._castling.b &= -33);
        }
        _updateEnPassantSquare() {
            if (this._epSquare === ot) return;
            const r = this._epSquare + (this._turn === et ? -16 : 16), c = this._epSquare + (this._turn === et ? 16 : -16), f = [
                c + 1,
                c - 1
            ];
            if (this._board[r] !== null || this._board[this._epSquare] !== null || this._board[c]?.color !== Va(this._turn) || this._board[c]?.type !== Ge) {
                this._epSquare = ot;
                return;
            }
            const o = (d)=>!(d & 136) && this._board[d]?.color === this._turn && this._board[d]?.type === Ge;
            f.some(o) || (this._epSquare = ot);
        }
        _attacked(r, c, f) {
            const o = [];
            for(let d = le.a8; d <= le.h1; d++){
                if (d & 136) {
                    d += 7;
                    continue;
                }
                if (this._board[d] === void 0 || this._board[d].color !== r) continue;
                const y = this._board[d], v = d - c;
                if (v === 0) continue;
                const p = v + 119;
                if (Ry[p] & Ay[y.type]) {
                    if (y.type === Ge) {
                        if (v > 0 && y.color === et || v <= 0 && y.color === Dt) if (f) o.push($e(d));
                        else return !0;
                        continue;
                    }
                    if (y.type === "n" || y.type === "k") if (f) {
                        o.push($e(d));
                        continue;
                    } else return !0;
                    const m = Ty[p];
                    let E = d + m, R = !1;
                    for(; E !== c;){
                        if (this._board[E] != null) {
                            R = !0;
                            break;
                        }
                        E += m;
                    }
                    if (!R) if (f) {
                        o.push($e(d));
                        continue;
                    } else return !0;
                }
            }
            return f ? o : !1;
        }
        attackers(r, c) {
            return c ? this._attacked(c, le[r], !0) : this._attacked(this._turn, le[r], !0);
        }
        _isKingAttacked(r) {
            const c = this._kings[r];
            return c === -1 ? !1 : this._attacked(Va(r), c);
        }
        isAttacked(r, c) {
            return this._attacked(c, le[r]);
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
            for(let d = le.a8; d <= le.h1; d++){
                if (o = (o + 1) % 2, d & 136) {
                    d += 7;
                    continue;
                }
                const y = this._board[d];
                y && (r[y.type] = y.type in r ? r[y.type] + 1 : 1, y.type === _i && c.push(o), f++);
            }
            if (f === 2) return !0;
            if (f === 3 && (r[_i] === 1 || r[ff] === 1)) return !0;
            if (f === r[_i] + 2) {
                let d = 0;
                const y = c.length;
                for(let v = 0; v < y; v++)d += c[v];
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
        moves({ verbose: r = !1, square: c = void 0, piece: f = void 0 } = {}) {
            const o = this._moves({
                square: c,
                piece: f
            });
            return r ? o.map((d)=>new gi(this, d)) : o.map((d)=>this._moveToSan(d, o));
        }
        _moves({ legal: r = !0, piece: c = void 0, square: f = void 0 } = {}) {
            const o = f ? f.toLowerCase() : void 0, d = c?.toLowerCase(), y = [], v = this._turn, p = Va(v);
            let m = le.a8, E = le.h1, R = !1;
            if (o) if (o in le) m = E = le[o], R = !0;
            else return [];
            for(let M = m; M <= E; M++){
                if (M & 136) {
                    M += 7;
                    continue;
                }
                if (!this._board[M] || this._board[M].color === p) continue;
                const { type: D } = this._board[M];
                let H;
                if (D === Ge) {
                    if (d && d !== D) continue;
                    H = M + lf[v][0], this._board[H] || (ql(y, v, M, H, Ge), H = M + lf[v][1], xy[v] === an(M) && !this._board[H] && ql(y, v, M, H, Ge, void 0, ae.BIG_PAWN));
                    for(let L = 2; L < 4; L++)H = M + lf[v][L], !(H & 136) && (this._board[H]?.color === p ? ql(y, v, M, H, Ge, this._board[H].type, ae.CAPTURE) : H === this._epSquare && ql(y, v, M, H, Ge, Ge, ae.EP_CAPTURE));
                } else {
                    if (d && d !== D) continue;
                    for(let L = 0, z = wh[D].length; L < z; L++){
                        const K = wh[D][L];
                        for(H = M; H += K, !(H & 136);){
                            if (!this._board[H]) ql(y, v, M, H, D);
                            else {
                                if (this._board[H].color === v) break;
                                ql(y, v, M, H, D, this._board[H].type, ae.CAPTURE);
                                break;
                            }
                            if (D === ff || D === He) break;
                        }
                    }
                }
            }
            if ((d === void 0 || d === He) && (!R || E === this._kings[v])) {
                if (this._castling[v] & ae.KSIDE_CASTLE) {
                    const M = this._kings[v], D = M + 2;
                    !this._board[M + 1] && !this._board[D] && !this._attacked(p, this._kings[v]) && !this._attacked(p, M + 1) && !this._attacked(p, D) && ql(y, v, this._kings[v], D, He, void 0, ae.KSIDE_CASTLE);
                }
                if (this._castling[v] & ae.QSIDE_CASTLE) {
                    const M = this._kings[v], D = M - 2;
                    !this._board[M - 1] && !this._board[M - 2] && !this._board[M - 3] && !this._attacked(p, this._kings[v]) && !this._attacked(p, M - 1) && !this._attacked(p, D) && ql(y, v, this._kings[v], D, He, void 0, ae.QSIDE_CASTLE);
                }
            }
            if (!r || this._kings[v] === -1) return y;
            const b = [];
            for(let M = 0, D = y.length; M < D; M++)this._makeMove(y[M]), this._isKingAttacked(v) || b.push(y[M]), this._undoMove();
            return b;
        }
        move(r, { strict: c = !1 } = {}) {
            let f = null;
            if (typeof r == "string") f = this._moveFromSan(r, c);
            else if (typeof r == "object") {
                const d = this._moves();
                for(let y = 0, v = d.length; y < v; y++)if (r.from === $e(d[y].from) && r.to === $e(d[y].to) && (!("promotion" in d[y]) || r.promotion === d[y].promotion)) {
                    f = d[y];
                    break;
                }
            }
            if (!f) throw typeof r == "string" ? new Error(`Invalid move: ${r}`) : new Error(`Invalid move: ${JSON.stringify(r)}`);
            const o = new gi(this, f);
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
            const c = this._turn, f = Va(c);
            if (this._push(r), this._board[r.to] = this._board[r.from], delete this._board[r.from], r.flags & ae.EP_CAPTURE && (this._turn === Dt ? delete this._board[r.to - 16] : delete this._board[r.to + 16]), r.promotion && (this._board[r.to] = {
                type: r.promotion,
                color: c
            }), this._board[r.to].type === He) {
                if (this._kings[c] = r.to, r.flags & ae.KSIDE_CASTLE) {
                    const o = r.to - 1, d = r.to + 1;
                    this._board[o] = this._board[d], delete this._board[d];
                } else if (r.flags & ae.QSIDE_CASTLE) {
                    const o = r.to + 1, d = r.to - 2;
                    this._board[o] = this._board[d], delete this._board[d];
                }
                this._castling[c] = 0;
            }
            if (this._castling[c]) {
                for(let o = 0, d = zl[c].length; o < d; o++)if (r.from === zl[c][o].square && this._castling[c] & zl[c][o].flag) {
                    this._castling[c] ^= zl[c][o].flag;
                    break;
                }
            }
            if (this._castling[f]) {
                for(let o = 0, d = zl[f].length; o < d; o++)if (r.to === zl[f][o].square && this._castling[f] & zl[f][o].flag) {
                    this._castling[f] ^= zl[f][o].flag;
                    break;
                }
            }
            r.flags & ae.BIG_PAWN ? c === Dt ? this._epSquare = r.to - 16 : this._epSquare = r.to + 16 : this._epSquare = ot, r.piece === Ge ? this._halfMoves = 0 : r.flags & (ae.CAPTURE | ae.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, c === Dt && this._moveNumber++, this._turn = f;
        }
        undo() {
            const r = this._undoMove();
            if (r) {
                const c = new gi(this, r);
                return this._decPositionCount(c.after), c;
            }
            return null;
        }
        _undoMove() {
            const r = this._history.pop();
            if (r === void 0) return null;
            const c = r.move;
            this._kings = r.kings, this._turn = r.turn, this._castling = r.castling, this._epSquare = r.epSquare, this._halfMoves = r.halfMoves, this._moveNumber = r.moveNumber;
            const f = this._turn, o = Va(f);
            if (this._board[c.from] = this._board[c.to], this._board[c.from].type = c.piece, delete this._board[c.to], c.captured) if (c.flags & ae.EP_CAPTURE) {
                let d;
                f === Dt ? d = c.to - 16 : d = c.to + 16, this._board[d] = {
                    type: Ge,
                    color: o
                };
            } else this._board[c.to] = {
                type: c.captured,
                color: o
            };
            if (c.flags & (ae.KSIDE_CASTLE | ae.QSIDE_CASTLE)) {
                let d, y;
                c.flags & ae.KSIDE_CASTLE ? (d = c.to + 1, y = c.to - 1) : (d = c.to - 2, y = c.to + 1), this._board[d] = this._board[y], delete this._board[y];
            }
            return c;
        }
        pgn({ newline: r = `
`, maxWidth: c = 0 } = {}) {
            const f = [];
            let o = !1;
            for(const b in this._header)this._header[b] && f.push(`[${b} "${this._header[b]}"]` + r), o = !0;
            o && this._history.length && f.push(r);
            const d = (b)=>{
                const M = this._comments[this.fen()];
                if (typeof M < "u") {
                    const D = b.length > 0 ? " " : "";
                    b = `${b}${D}{${M}}`;
                }
                return b;
            }, y = [];
            for(; this._history.length > 0;)y.push(this._undoMove());
            const v = [];
            let p = "";
            for(y.length === 0 && v.push(d("")); y.length > 0;){
                p = d(p);
                const b = y.pop();
                if (!b) break;
                if (!this._history.length && b.color === "b") {
                    const M = `${this._moveNumber}. ...`;
                    p = p ? `${p} ${M}` : M;
                } else b.color === "w" && (p.length && v.push(p), p = this._moveNumber + ".");
                p = p + " " + this._moveToSan(b, this._moves({
                    legal: !0
                })), this._makeMove(b);
            }
            if (p.length && v.push(d(p)), v.push(this._header.Result || "*"), c === 0) return f.join("") + v.join(" ");
            const m = function() {
                return f.length > 0 && f[f.length - 1] === " " ? (f.pop(), !0) : !1;
            }, E = function(b, M) {
                for (const D of M.split(" "))if (D) {
                    if (b + D.length > c) {
                        for(; m();)b--;
                        f.push(r), b = 0;
                    }
                    f.push(D), b += D.length, f.push(" "), b++;
                }
                return m() && b--, b;
            };
            let R = 0;
            for(let b = 0; b < v.length; b++){
                if (R + v[b].length > c && v[b].includes("{")) {
                    R = E(R, v[b]);
                    continue;
                }
                R + v[b].length > c && b !== 0 ? (f[f.length - 1] === " " && f.pop(), f.push(r), R = 0) : b !== 0 && (f.push(" "), R++), f.push(v[b]), R += v[b].length;
            }
            return f.join("");
        }
        header(...r) {
            for(let c = 0; c < r.length; c += 2)typeof r[c] == "string" && typeof r[c + 1] == "string" && (this._header[r[c]] = r[c + 1]);
            return this._header;
        }
        setHeader(r, c) {
            return this._header[r] = c ?? of[r] ?? null, this.getHeaders();
        }
        removeHeader(r) {
            return r in this._header ? (this._header[r] = of[r] || null, !0) : !1;
        }
        getHeaders() {
            const r = {};
            for (const [c, f] of Object.entries(this._header))f !== null && (r[c] = f);
            return r;
        }
        loadPgn(r, { strict: c = !1, newlineChar: f = `\r?
` } = {}) {
            function o(w) {
                return w.replace(/\\/g, "\\");
            }
            function d(w) {
                const V = {}, Y = w.split(new RegExp(o(f)));
                let W = "", ce = "";
                for(let pe = 0; pe < Y.length; pe++){
                    const fe = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
                    W = Y[pe].replace(fe, "$1"), ce = Y[pe].replace(fe, "$2"), W.trim().length > 0 && (V[W] = ce);
                }
                return V;
            }
            r = r.trim();
            const v = new RegExp("^(\\[((?:" + o(f) + ")|.)*\\])((?:\\s*" + o(f) + "){2}|(?:\\s*" + o(f) + ")*$)").exec(r), p = v && v.length >= 2 ? v[1] : "";
            this.reset();
            const m = d(p);
            let E = "";
            for(const w in m)w.toLowerCase() === "fen" && (E = m[w]), this.header(w, m[w]);
            if (!c) E && this.load(E, {
                preserveHeaders: !0
            });
            else if (m.SetUp === "1") {
                if (!("FEN" in m)) throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
                this.load(m.FEN, {
                    preserveHeaders: !0
                });
            }
            function R(w) {
                return Array.from(w).map(function(V) {
                    return V.charCodeAt(0) < 128 ? V.charCodeAt(0).toString(16) : encodeURIComponent(V).replace(/%/g, "").toLowerCase();
                }).join("");
            }
            function b(w) {
                return w.length == 0 ? "" : decodeURIComponent("%" + (w.match(/.{1,2}/g) || []).join("%"));
            }
            const M = function(w) {
                return w = w.replace(new RegExp(o(f), "g"), " "), `{${R(w.slice(1, w.length - 1))}}`;
            }, D = function(w) {
                if (w.startsWith("{") && w.endsWith("}")) return b(w.slice(1, w.length - 1));
            };
            let H = r.replace(p, "").replace(new RegExp(`({[^}]*})+?|;([^${o(f)}]*)`, "g"), function(w, V, Y) {
                return V !== void 0 ? M(V) : " " + M(`{${Y.slice(1)}}`);
            }).replace(new RegExp(o(f), "g"), " ");
            const L = /(\([^()]+\))+?/g;
            for(; L.test(H);)H = H.replace(L, "");
            H = H.replace(/\d+\.(\.\.)?/g, ""), H = H.replace(/\.\.\./g, ""), H = H.replace(/\$\d+/g, "");
            let z = H.trim().split(new RegExp(/\s+/));
            z = z.filter((w)=>w !== "");
            let K = "";
            for(let w = 0; w < z.length; w++){
                const V = D(z[w]);
                if (V !== void 0) {
                    this._comments[this.fen()] = V;
                    continue;
                }
                const Y = this._moveFromSan(z[w], c);
                if (Y == null) if (By.indexOf(z[w]) > -1) K = z[w];
                else throw new Error(`Invalid move in PGN: ${z[w]}`);
                else K = "", this._makeMove(Y), this._incPositionCount(this.fen());
            }
            K && Object.keys(this._header).length && this._header.Result !== K && this.setHeader("Result", K);
        }
        _moveToSan(r, c) {
            let f = "";
            if (r.flags & ae.KSIDE_CASTLE) f = "O-O";
            else if (r.flags & ae.QSIDE_CASTLE) f = "O-O-O";
            else {
                if (r.piece !== Ge) {
                    const o = zy(r, c);
                    f += r.piece.toUpperCase() + o;
                }
                r.flags & (ae.CAPTURE | ae.EP_CAPTURE) && (r.piece === Ge && (f += $e(r.from)[0]), f += "x"), f += $e(r.to), r.promotion && (f += "=" + r.promotion.toUpperCase());
            }
            return this._makeMove(r), this.isCheck() && (this.isCheckmate() ? f += "#" : f += "+"), this._undoMove(), f;
        }
        _moveFromSan(r, c = !1) {
            const f = nf(r);
            let o = Lh(f), d = this._moves({
                legal: !0,
                piece: o
            });
            for(let b = 0, M = d.length; b < M; b++)if (f === nf(this._moveToSan(d[b], d))) return d[b];
            if (c) return null;
            let y, v, p, m, E, R = !1;
            if (v = f.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/), v ? (y = v[1], p = v[2], m = v[3], E = v[4], p.length == 1 && (R = !0)) : (v = f.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), v && (y = v[1], p = v[2], m = v[3], E = v[4], p.length == 1 && (R = !0))), o = Lh(f), d = this._moves({
                legal: !0,
                piece: y || o
            }), !m) return null;
            for(let b = 0, M = d.length; b < M; b++)if (p) {
                if ((!y || y.toLowerCase() == d[b].piece) && le[p] == d[b].from && le[m] == d[b].to && (!E || E.toLowerCase() == d[b].promotion)) return d[b];
                if (R) {
                    const D = $e(d[b].from);
                    if ((!y || y.toLowerCase() == d[b].piece) && le[m] == d[b].to && (p == D[0] || p == D[1]) && (!E || E.toLowerCase() == d[b].promotion)) return d[b];
                }
            } else if (f === nf(this._moveToSan(d[b], d)).replace("x", "")) return d[b];
            return null;
        }
        ascii() {
            let r = `   +------------------------+
`;
            for(let c = le.a8; c <= le.h1; c++){
                if (Ia(c) === 0 && (r += " " + "87654321"[an(c)] + " |"), this._board[c]) {
                    const f = this._board[c].type, d = this._board[c].color === et ? f.toUpperCase() : f.toLowerCase();
                    r += " " + d + " ";
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
            for(let d = 0, y = c.length; d < y; d++)this._makeMove(c[d]), this._isKingAttacked(o) || (r - 1 > 0 ? f += this.perft(r - 1) : f++), this._undoMove();
            return f;
        }
        turn() {
            return this._turn;
        }
        board() {
            const r = [];
            let c = [];
            for(let f = le.a8; f <= le.h1; f++)this._board[f] == null ? c.push(null) : c.push({
                square: $e(f),
                type: this._board[f].type,
                color: this._board[f].color
            }), f + 1 & 136 && (r.push(c), c = [], f += 8);
            return r;
        }
        squareColor(r) {
            if (r in le) {
                const c = le[r];
                return (an(c) + Ia(c)) % 2 === 0 ? "light" : "dark";
            }
            return null;
        }
        history({ verbose: r = !1 } = {}) {
            const c = [], f = [];
            for(; this._history.length > 0;)c.push(this._undoMove());
            for(;;){
                const o = c.pop();
                if (!o) break;
                r ? f.push(new gi(this, o)) : f.push(this._moveToSan(o, this._moves())), this._makeMove(o);
            }
            return f;
        }
        _getPositionCount(r) {
            const c = af(r);
            return this._positionCount[c] || 0;
        }
        _incPositionCount(r) {
            const c = af(r);
            this._positionCount[c] === void 0 && (this._positionCount[c] = 0), this._positionCount[c] += 1;
        }
        _decPositionCount(r) {
            const c = af(r);
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
                He,
                Pl
            ])c[o] !== void 0 && (c[o] ? this._castling[r] |= bi[o] : this._castling[r] &= ~bi[o]);
            this._updateCastlingRights();
            const f = this.getCastlingRights(r);
            return (c[He] === void 0 || c[He] === f[He]) && (c[Pl] === void 0 || c[Pl] === f[Pl]);
        }
        getCastlingRights(r) {
            return {
                [He]: (this._castling[r] & bi[He]) !== 0,
                [Pl]: (this._castling[r] & bi[Pl]) !== 0
            };
        }
        moveNumber() {
            return this._moveNumber;
        }
    };
    let qy, Py, wy, Hy, Ly, Qy, op, Qh, Ky, sp, dp, hp, jy, Yy, pp, mp, ky, Gy, yp, vp, vf, gp, Xy, Vy, Zy, Jy;
    qy = "MOVE_PIECE";
    Py = "RESET_GAME";
    wy = "LOAD_GAME";
    Hy = "SET_GAME_OVER";
    Ly = "SET_TIMER_DURATION";
    lt = {
        TIMER_DURATION: 60 * 3,
        THEME: "classic",
        ENABLE_SOUND: !0,
        IS_FLIPPED: !1,
        THEME_KEY: "theme",
        ENABLE_SOUND_KEY: "enableSound",
        TIMER_DURATION_KEY: "timerDuration",
        IS_FLIPPED_KEY: "isFlipped",
        START_FEN: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        WHITE: "w"
    };
    Qy = {
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
    op = {
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
    Qh = {
        fen: lt.START_FEN,
        isWhiteTurn: !0,
        moveHistory: [],
        lastMove: null,
        isGameOver: !1,
        gameResult: "",
        timerDuration: lt.TIMER_DURATION
    };
    Ky = (u = Qh, r)=>{
        switch(r.type){
            case qy:
                try {
                    const c = new fp(u.fen), f = c.move({
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
                } catch  {
                    return u;
                }
            case Py:
                return {
                    ...Qh,
                    moveHistory: [],
                    timerDuration: r.payload
                };
            case wy:
                return {
                    ...u,
                    fen: r.payload.fen,
                    moveHistory: r.payload.moveHistory || []
                };
            case Hy:
                return {
                    ...u,
                    isGameOver: r.payload.isGameOver,
                    gameResult: r.payload.gameResult
                };
            case Ly:
                return {
                    ...u,
                    timerDuration: r.payload
                };
            default:
                return u;
        }
    };
    sp = "FLIP_BOARD";
    dp = "SET_THEME";
    hp = "SET_SOUND";
    ob = ()=>({
            type: sp
        });
    sb = (u)=>({
            type: dp,
            payload: u
        });
    db = (u)=>({
            type: hp,
            payload: u
        });
    jy = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0
    };
    Yy = (u = jy, r)=>{
        switch(r.type){
            case sp:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case dp:
                return {
                    ...u,
                    theme: r.payload
                };
            case hp:
                return {
                    ...u,
                    enableSound: r.payload
                };
            default:
                return u;
        }
    };
    pp = "SET_PGN_ANALYSIS_AT_INDEX";
    mp = "SET_REVIEW_ANALYSIS_COMPLETE";
    ky = "NEXT";
    Gy = "PREV";
    yp = "START_POS";
    vp = "FINAL_POS";
    vf = "LOAD_PGN";
    gp = "JUMP_TO_MOVE";
    Xy = "TOGGLE_ENGINE";
    Vy = "DISABLE_ENGINE";
    hb = ()=>({
            type: yp
        });
    pb = ()=>({
            type: vp
        });
    mb = ({ finalPos: u, moves: r, fens: c, fromToSquares: f, termination: o, result: d, blackPlayerName: y, whitePlayerName: v })=>({
            type: vf,
            payload: {
                finalPos: u,
                moves: r,
                fens: c,
                fromToSquares: f,
                termination: o,
                result: d,
                blackPlayerName: y,
                whitePlayerName: v
            }
        });
    yb = (u)=>({
            type: gp,
            payload: u
        });
    vb = (u)=>({
            type: pp,
            payload: u
        });
    gb = (u)=>({
            type: mp,
            payload: u
        });
    Zy = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    Jy = (u = Zy, r)=>{
        switch(r.type){
            case ky:
                return u.currentMoveIndex === u.fenLength - 1 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex + 1
                };
            case Gy:
                return u.currentMoveIndex === 0 ? u : {
                    ...u,
                    currentMoveIndex: u.currentMoveIndex - 1
                };
            case yp:
                return {
                    ...u,
                    currentMoveIndex: 0
                };
            case vp:
                return {
                    ...u,
                    currentMoveIndex: u.fenLength - 1
                };
            case gp:
                return {
                    ...u,
                    currentMoveIndex: r.payload
                };
            case vf:
                return {
                    ...u,
                    finalFen: r.payload.finalPos,
                    fenLength: r.payload.fens.length,
                    currentMoveIndex: 0
                };
            case Xy:
                return {
                    ...u,
                    engineEnabled: !u.engineEnabled
                };
            case Vy:
                return {
                    ...u,
                    engineEnabled: !1
                };
            default:
                return u;
        }
    };
    function bp(u) {
        return Array.from({
            length: u
        }, ()=>({
                evalScore: null,
                bestMove: "",
                moveClassification: null
            }));
    }
    let $y, Wy, Fy, Iy, ev, tv, lv, nv, av, uv, iv, rv, cv, fv, ov, sv, dv, hv, pv, mv, yv, Kh, vv, gv, bv, Sv, Ev, _v;
    $y = {
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
        analysisData: bp(72),
        reviewAnalysisComplete: !1
    };
    Wy = (u = $y, r)=>{
        switch(r.type){
            case vf:
                return {
                    ...u,
                    finalFen: r.payload.finalPos,
                    moves: r.payload.moves,
                    fens: r.payload.fens,
                    analysisData: bp(r.payload.fens.length),
                    reviewAnalysisComplete: !1,
                    fromToSquares: r.payload.fromToSquares,
                    termination: r.payload.termination,
                    result: r.payload.result,
                    blackPlayerName: r.payload.blackPlayerName,
                    whitePlayerName: r.payload.whitePlayerName
                };
            case mp:
                return {
                    ...u,
                    reviewAnalysisComplete: !!r.payload
                };
            case pp:
                {
                    const { index: c, evalScore: f, bestMove: o, moveClassification: d } = r.payload;
                    if (!u.analysisData || c < 0 || c >= u.analysisData.length) return u;
                    const y = u.analysisData.map((v, p)=>p === c ? {
                            evalScore: f,
                            bestMove: o ?? "",
                            moveClassification: d !== void 0 ? d : v.moveClassification ?? null
                        } : v);
                    return {
                        ...u,
                        analysisData: y
                    };
                }
            default:
                return u;
        }
    };
    Fy = "TOGGLE_ENGINE";
    Iy = "SET_MULTIPV";
    ev = "SET_MAX_DEPTH";
    tv = "SET_AUTO_STOP_TIME";
    lv = {
        enabled: !0,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    nv = (u = lv, r)=>{
        switch(r.type){
            case Fy:
                return {
                    ...u,
                    enabled: !u.enabled
                };
            case Iy:
                return {
                    ...u,
                    multiPV: r.payload
                };
            case ev:
                return {
                    ...u,
                    maxDepth: r.payload
                };
            case tv:
                return {
                    ...u,
                    autoStopTime: r.payload
                };
            default:
                return u;
        }
    };
    av = "RESET_BOARD";
    uv = "CLEAR_BOARD";
    iv = "FLIP_BOARD";
    rv = "SET_BOARD_WITH_FEN";
    cv = "PUT_PIECE";
    fv = "REMOVE_PIECE";
    ov = "MOVE_BOARD_PIECE";
    sv = "TOGGLE_CASTLING_PIECE";
    dv = "SET_PLAYER_TO_MOVE";
    hv = "SET_SELECTED_ITEM";
    pv = "DESELECT_ITEM";
    mv = (u)=>{
        const r = op;
        try {
            const c = new fp;
            c.load(u);
            const f = c.board();
            for(let o = 0; o < 8; o++)for(let d = 0; d < 8; d++){
                const y = f[o][d], v = `${"abcdefgh"[d]}${8 - o}`;
                r[v] = y ? {
                    type: y.type,
                    color: y.color
                } : null;
            }
        } catch (c) {
            console.error("FenToBoard error", c, u);
        }
        return r;
    };
    yv = (u)=>u.split(" ")?.[1] === "w" ? "w" : "b";
    Kh = {
        board: {
            ...Qy
        },
        selectedItem: null,
        isFlipped: !1,
        playerToMove: lt.WHITE,
        castlingFlags: {
            K: !0,
            Q: !0,
            k: !0,
            q: !0
        }
    };
    vv = {
        board: {
            ...op
        },
        selectedItem: null,
        isFlipped: !1,
        playerToMove: lt.WHITE,
        castlingFlags: {
            K: !1,
            Q: !1,
            k: !1,
            q: !1
        }
    };
    gv = (u = Kh, r)=>{
        switch(r.type){
            case iv:
                return {
                    ...u,
                    isFlipped: !u.isFlipped
                };
            case av:
                return Kh;
            case uv:
                return vv;
            case rv:
                return {
                    ...u,
                    board: {
                        ...mv(r.payload.fen)
                    },
                    playerToMove: yv(r.payload.fen)
                };
            case cv:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [r.payload.squareId]: r.payload.piece
                    }
                };
            case ov:
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
            case fv:
                return {
                    ...u,
                    board: {
                        ...u.board,
                        [r.payload.squareId]: null
                    }
                };
            case sv:
                return {
                    ...u,
                    castlingFlags: {
                        ...u.castlingFlags,
                        [r.payload.flag]: !u.castlingFlags[r.payload.flag]
                    }
                };
            case dv:
                return {
                    ...u,
                    playerToMove: r.payload.color
                };
            case hv:
                return {
                    ...u,
                    selectedItem: r.payload.item ?? null
                };
            case pv:
                return {
                    ...u,
                    selectedItem: null
                };
            default:
                return u;
        }
    };
    bv = Ih({
        game: Ky,
        settings: Yy,
        analysis: Jy,
        pgn: Wy,
        engine: nv,
        boardeditor: gv
    });
    Sv = {
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
                } catch (f) {
                    console.error("Failed to remove item from storage:", f), c();
                }
            }),
        removeItem: (u)=>new Promise((r)=>{
                try {
                    localStorage.removeItem(u), r();
                } catch (c) {
                    console.error("Failed to remove item from storage:", c), r();
                }
            })
    };
    Ev = {
        key: "root",
        storage: Sv,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    _v = py(Ev, bv);
    Sp = Fm({
        reducer: _v,
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
    Sy(Sp);
    const Rv = "modulepreload", Tv = function(u) {
        return "/chess-frontend/" + u;
    }, jh = {}, Av = function(r, c, f) {
        let o = Promise.resolve();
        if (c && c.length > 0) {
            document.getElementsByTagName("link");
            const y = document.querySelector("meta[property=csp-nonce]"), v = y?.nonce || y?.getAttribute("nonce");
            o = Promise.allSettled(c.map((p)=>{
                if (p = Tv(p), p in jh) return;
                jh[p] = !0;
                const m = p.endsWith(".css"), E = m ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${p}"]${E}`)) return;
                const R = document.createElement("link");
                if (R.rel = m ? "stylesheet" : Rv, m || (R.as = "script"), R.crossOrigin = "", R.href = p, v && R.setAttribute("nonce", v), document.head.appendChild(R), m) return new Promise((b, M)=>{
                    R.addEventListener("load", b), R.addEventListener("error", ()=>M(new Error(`Unable to preload CSS for ${p}`)));
                });
            }));
        }
        function d(y) {
            const v = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (v.payload = y, window.dispatchEvent(v), !v.defaultPrevented) throw y;
        }
        return o.then((y)=>{
            for (const v of y || [])v.status === "rejected" && d(v.reason);
            return r().catch(d);
        });
    };
    var Za = {}, Yh;
    function Ov() {
        if (Yh) return Za;
        Yh = 1, Object.defineProperty(Za, "__esModule", {
            value: !0
        }), Za.parse = y, Za.serialize = m;
        const u = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, f = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, d = (()=>{
            const b = function() {};
            return b.prototype = Object.create(null), b;
        })();
        function y(b, M) {
            const D = new d, H = b.length;
            if (H < 2) return D;
            const L = M?.decode || E;
            let z = 0;
            do {
                const K = b.indexOf("=", z);
                if (K === -1) break;
                const w = b.indexOf(";", z), V = w === -1 ? H : w;
                if (K > V) {
                    z = b.lastIndexOf(";", K - 1) + 1;
                    continue;
                }
                const Y = v(b, z, K), W = p(b, K, Y), ce = b.slice(Y, W);
                if (D[ce] === void 0) {
                    let pe = v(b, K + 1, V), fe = p(b, V, pe);
                    const Ne = L(b.slice(pe, fe));
                    D[ce] = Ne;
                }
                z = V + 1;
            }while (z < H);
            return D;
        }
        function v(b, M, D) {
            do {
                const H = b.charCodeAt(M);
                if (H !== 32 && H !== 9) return M;
            }while (++M < D);
            return D;
        }
        function p(b, M, D) {
            for(; M > D;){
                const H = b.charCodeAt(--M);
                if (H !== 32 && H !== 9) return M + 1;
            }
            return D;
        }
        function m(b, M, D) {
            const H = D?.encode || encodeURIComponent;
            if (!u.test(b)) throw new TypeError(`argument name is invalid: ${b}`);
            const L = H(M);
            if (!r.test(L)) throw new TypeError(`argument val is invalid: ${M}`);
            let z = b + "=" + L;
            if (!D) return z;
            if (D.maxAge !== void 0) {
                if (!Number.isInteger(D.maxAge)) throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);
                z += "; Max-Age=" + D.maxAge;
            }
            if (D.domain) {
                if (!c.test(D.domain)) throw new TypeError(`option domain is invalid: ${D.domain}`);
                z += "; Domain=" + D.domain;
            }
            if (D.path) {
                if (!f.test(D.path)) throw new TypeError(`option path is invalid: ${D.path}`);
                z += "; Path=" + D.path;
            }
            if (D.expires) {
                if (!R(D.expires) || !Number.isFinite(D.expires.valueOf())) throw new TypeError(`option expires is invalid: ${D.expires}`);
                z += "; Expires=" + D.expires.toUTCString();
            }
            if (D.httpOnly && (z += "; HttpOnly"), D.secure && (z += "; Secure"), D.partitioned && (z += "; Partitioned"), D.priority) switch(typeof D.priority == "string" ? D.priority.toLowerCase() : void 0){
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
                    throw new TypeError(`option priority is invalid: ${D.priority}`);
            }
            if (D.sameSite) switch(typeof D.sameSite == "string" ? D.sameSite.toLowerCase() : D.sameSite){
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
                    throw new TypeError(`option sameSite is invalid: ${D.sameSite}`);
            }
            return z;
        }
        function E(b) {
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
    Ov();
    var kh = "popstate";
    function Nv(u = {}) {
        function r(o, d) {
            let { pathname: y = "/", search: v = "", hash: p = "" } = un(o.location.hash.substring(1));
            return !y.startsWith("/") && !y.startsWith(".") && (y = "/" + y), sf("", {
                pathname: y,
                search: v,
                hash: p
            }, d.state && d.state.usr || null, d.state && d.state.key || "default");
        }
        function c(o, d) {
            let y = o.document.querySelector("base"), v = "";
            if (y && y.getAttribute("href")) {
                let p = o.location.href, m = p.indexOf("#");
                v = m === -1 ? p : p.slice(0, m);
            }
            return v + "#" + (typeof d == "string" ? d : eu(d));
        }
        function f(o, d) {
            Ct(o.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`);
        }
        return Dv(r, c, f, u);
    }
    function Oe(u, r) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(r);
    }
    function Ct(u, r) {
        if (!u) {
            typeof console < "u" && console.warn(r);
            try {
                throw new Error(r);
            } catch  {}
        }
    }
    function Mv() {
        return Math.random().toString(36).substring(2, 10);
    }
    function Gh(u, r) {
        return {
            usr: u.state,
            key: u.key,
            idx: r
        };
    }
    function sf(u, r, c = null, f) {
        return {
            pathname: typeof u == "string" ? u : u.pathname,
            search: "",
            hash: "",
            ...typeof r == "string" ? un(r) : r,
            state: c,
            key: r && r.key || f || Mv()
        };
    }
    function eu({ pathname: u = "/", search: r = "", hash: c = "" }) {
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
    function Dv(u, r, c, f = {}) {
        let { window: o = document.defaultView, v5Compat: d = !1 } = f, y = o.history, v = "POP", p = null, m = E();
        m == null && (m = 0, y.replaceState({
            ...y.state,
            idx: m
        }, ""));
        function E() {
            return (y.state || {
                idx: null
            }).idx;
        }
        function R() {
            v = "POP";
            let L = E(), z = L == null ? null : L - m;
            m = L, p && p({
                action: v,
                location: H.location,
                delta: z
            });
        }
        function b(L, z) {
            v = "PUSH";
            let K = sf(H.location, L, z);
            c && c(K, L), m = E() + 1;
            let w = Gh(K, m), V = H.createHref(K);
            try {
                y.pushState(w, "", V);
            } catch (Y) {
                if (Y instanceof DOMException && Y.name === "DataCloneError") throw Y;
                o.location.assign(V);
            }
            d && p && p({
                action: v,
                location: H.location,
                delta: 1
            });
        }
        function M(L, z) {
            v = "REPLACE";
            let K = sf(H.location, L, z);
            c && c(K, L), m = E();
            let w = Gh(K, m), V = H.createHref(K);
            y.replaceState(w, "", V), d && p && p({
                action: v,
                location: H.location,
                delta: 0
            });
        }
        function D(L) {
            let z = o.location.origin !== "null" ? o.location.origin : o.location.href, K = typeof L == "string" ? L : eu(L);
            return K = K.replace(/ $/, "%20"), Oe(z, `No window.location.(origin|href) available to create URL for href: ${K}`), new URL(K, z);
        }
        let H = {
            get action () {
                return v;
            },
            get location () {
                return u(o, y);
            },
            listen (L) {
                if (p) throw new Error("A history only accepts one active listener");
                return o.addEventListener(kh, R), p = L, ()=>{
                    o.removeEventListener(kh, R), p = null;
                };
            },
            createHref (L) {
                return r(o, L);
            },
            createURL: D,
            encodeLocation (L) {
                let z = D(L);
                return {
                    pathname: z.pathname,
                    search: z.search,
                    hash: z.hash
                };
            },
            push: b,
            replace: M,
            go (L) {
                return y.go(L);
            }
        };
        return H;
    }
    function Ep(u, r, c = "/") {
        return Cv(u, r, c, !1);
    }
    function Cv(u, r, c, f) {
        let o = typeof r == "string" ? un(r) : r, d = cl(o.pathname || "/", c);
        if (d == null) return null;
        let y = _p(u);
        xv(y);
        let v = null;
        for(let p = 0; v == null && p < y.length; ++p){
            let m = jv(d);
            v = Qv(y[p], m, f);
        }
        return v;
    }
    function _p(u, r = [], c = [], f = "") {
        let o = (d, y, v)=>{
            let p = {
                relativePath: v === void 0 ? d.path || "" : v,
                caseSensitive: d.caseSensitive === !0,
                childrenIndex: y,
                route: d
            };
            p.relativePath.startsWith("/") && (Oe(p.relativePath.startsWith(f), `Absolute route path "${p.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), p.relativePath = p.relativePath.slice(f.length));
            let m = rl([
                f,
                p.relativePath
            ]), E = c.concat(p);
            d.children && d.children.length > 0 && (Oe(d.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${m}".`), _p(d.children, r, E, m)), !(d.path == null && !d.index) && r.push({
                path: m,
                score: Hv(m, d.index),
                routesMeta: E
            });
        };
        return u.forEach((d, y)=>{
            if (d.path === "" || !d.path?.includes("?")) o(d, y);
            else for (let v of Rp(d.path))o(d, y, v);
        }), r;
    }
    function Rp(u) {
        let r = u.split("/");
        if (r.length === 0) return [];
        let [c, ...f] = r, o = c.endsWith("?"), d = c.replace(/\?$/, "");
        if (f.length === 0) return o ? [
            d,
            ""
        ] : [
            d
        ];
        let y = Rp(f.join("/")), v = [];
        return v.push(...y.map((p)=>p === "" ? d : [
                d,
                p
            ].join("/"))), o && v.push(...y), v.map((p)=>u.startsWith("/") && p === "" ? "/" : p);
    }
    function xv(u) {
        u.sort((r, c)=>r.score !== c.score ? c.score - r.score : Lv(r.routesMeta.map((f)=>f.childrenIndex), c.routesMeta.map((f)=>f.childrenIndex)));
    }
    var Bv = /^:[\w-]+$/, Uv = 3, zv = 2, qv = 1, Pv = 10, wv = -2, Xh = (u)=>u === "*";
    function Hv(u, r) {
        let c = u.split("/"), f = c.length;
        return c.some(Xh) && (f += wv), r && (f += zv), c.filter((o)=>!Xh(o)).reduce((o, d)=>o + (Bv.test(d) ? Uv : d === "" ? qv : Pv), f);
    }
    function Lv(u, r) {
        return u.length === r.length && u.slice(0, -1).every((f, o)=>f === r[o]) ? u[u.length - 1] - r[r.length - 1] : 0;
    }
    function Qv(u, r, c = !1) {
        let { routesMeta: f } = u, o = {}, d = "/", y = [];
        for(let v = 0; v < f.length; ++v){
            let p = f[v], m = v === f.length - 1, E = d === "/" ? r : r.slice(d.length) || "/", R = Mi({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: m
            }, E), b = p.route;
            if (!R && m && c && !f[f.length - 1].route.index && (R = Mi({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: !1
            }, E)), !R) return null;
            Object.assign(o, R.params), y.push({
                params: o,
                pathname: rl([
                    d,
                    R.pathname
                ]),
                pathnameBase: Xv(rl([
                    d,
                    R.pathnameBase
                ])),
                route: b
            }), R.pathnameBase !== "/" && (d = rl([
                d,
                R.pathnameBase
            ]));
        }
        return y;
    }
    function Mi(u, r) {
        typeof u == "string" && (u = {
            path: u,
            caseSensitive: !1,
            end: !0
        });
        let [c, f] = Kv(u.path, u.caseSensitive, u.end), o = r.match(c);
        if (!o) return null;
        let d = o[0], y = d.replace(/(.)\/+$/, "$1"), v = o.slice(1);
        return {
            params: f.reduce((m, { paramName: E, isOptional: R }, b)=>{
                if (E === "*") {
                    let D = v[b] || "";
                    y = d.slice(0, d.length - D.length).replace(/(.)\/+$/, "$1");
                }
                const M = v[b];
                return R && !M ? m[E] = void 0 : m[E] = (M || "").replace(/%2F/g, "/"), m;
            }, {}),
            pathname: d,
            pathnameBase: y,
            pattern: u
        };
    }
    function Kv(u, r = !1, c = !0) {
        Ct(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`);
        let f = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (y, v, p)=>(f.push({
                paramName: v,
                isOptional: p != null
            }), p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return u.endsWith("*") ? (f.push({
            paramName: "*"
        }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [
            new RegExp(o, r ? void 0 : "i"),
            f
        ];
    }
    function jv(u) {
        try {
            return u.split("/").map((r)=>decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
        } catch (r) {
            return Ct(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), u;
        }
    }
    function cl(u, r) {
        if (r === "/") return u;
        if (!u.toLowerCase().startsWith(r.toLowerCase())) return null;
        let c = r.endsWith("/") ? r.length - 1 : r.length, f = u.charAt(c);
        return f && f !== "/" ? null : u.slice(c) || "/";
    }
    function Yv(u, r = "/") {
        let { pathname: c, search: f = "", hash: o = "" } = typeof u == "string" ? un(u) : u;
        return {
            pathname: c ? c.startsWith("/") ? c : kv(c, r) : r,
            search: Vv(f),
            hash: Zv(o)
        };
    }
    function kv(u, r) {
        let c = r.replace(/\/+$/, "").split("/");
        return u.split("/").forEach((o)=>{
            o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
        }), c.length > 1 ? c.join("/") : "/";
    }
    function uf(u, r, c, f) {
        return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function Gv(u) {
        return u.filter((r, c)=>c === 0 || r.route.path && r.route.path.length > 0);
    }
    function gf(u) {
        let r = Gv(u);
        return r.map((c, f)=>f === r.length - 1 ? c.pathname : c.pathnameBase);
    }
    function bf(u, r, c, f = !1) {
        let o;
        typeof u == "string" ? o = un(u) : (o = {
            ...u
        }, Oe(!o.pathname || !o.pathname.includes("?"), uf("?", "pathname", "search", o)), Oe(!o.pathname || !o.pathname.includes("#"), uf("#", "pathname", "hash", o)), Oe(!o.search || !o.search.includes("#"), uf("#", "search", "hash", o)));
        let d = u === "" || o.pathname === "", y = d ? "/" : o.pathname, v;
        if (y == null) v = c;
        else {
            let R = r.length - 1;
            if (!f && y.startsWith("..")) {
                let b = y.split("/");
                for(; b[0] === "..";)b.shift(), R -= 1;
                o.pathname = b.join("/");
            }
            v = R >= 0 ? r[R] : "/";
        }
        let p = Yv(o, v), m = y && y !== "/" && y.endsWith("/"), E = (d || y === ".") && c.endsWith("/");
        return !p.pathname.endsWith("/") && (m || E) && (p.pathname += "/"), p;
    }
    var rl = (u)=>u.join("/").replace(/\/\/+/g, "/"), Xv = (u)=>u.replace(/\/+$/, "").replace(/^\/*/, "/"), Vv = (u)=>!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, Zv = (u)=>!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u;
    function Jv(u) {
        return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
    }
    var Tp = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(Tp);
    var $v = [
        "GET",
        ...Tp
    ];
    new Set($v);
    var Xn = A.createContext(null);
    Xn.displayName = "DataRouter";
    var Ci = A.createContext(null);
    Ci.displayName = "DataRouterState";
    var Ap = A.createContext({
        isTransitioning: !1
    });
    Ap.displayName = "ViewTransition";
    var Wv = A.createContext(new Map);
    Wv.displayName = "Fetchers";
    var Fv = A.createContext(null);
    Fv.displayName = "Await";
    var qt = A.createContext(null);
    qt.displayName = "Navigation";
    var tu = A.createContext(null);
    tu.displayName = "Location";
    var jt = A.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    jt.displayName = "Route";
    var Sf = A.createContext(null);
    Sf.displayName = "RouteError";
    function Iv(u, { relative: r } = {}) {
        Oe(Vn(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: c, navigator: f } = A.useContext(qt), { hash: o, pathname: d, search: y } = lu(u, {
            relative: r
        }), v = d;
        return c !== "/" && (v = d === "/" ? c : rl([
            c,
            d
        ])), f.createHref({
            pathname: v,
            search: y,
            hash: o
        });
    }
    function Vn() {
        return A.useContext(tu) != null;
    }
    function Hl() {
        return Oe(Vn(), "useLocation() may be used only in the context of a <Router> component."), A.useContext(tu).location;
    }
    var Op = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function Np(u) {
        A.useContext(qt).static || A.useLayoutEffect(u);
    }
    function Mp() {
        let { isDataRoute: u } = A.useContext(jt);
        return u ? dg() : eg();
    }
    function eg() {
        Oe(Vn(), "useNavigate() may be used only in the context of a <Router> component.");
        let u = A.useContext(Xn), { basename: r, navigator: c } = A.useContext(qt), { matches: f } = A.useContext(jt), { pathname: o } = Hl(), d = JSON.stringify(gf(f)), y = A.useRef(!1);
        return Np(()=>{
            y.current = !0;
        }), A.useCallback((p, m = {})=>{
            if (Ct(y.current, Op), !y.current) return;
            if (typeof p == "number") {
                c.go(p);
                return;
            }
            let E = bf(p, JSON.parse(d), o, m.relative === "path");
            u == null && r !== "/" && (E.pathname = E.pathname === "/" ? r : rl([
                r,
                E.pathname
            ])), (m.replace ? c.replace : c.push)(E, m.state, m);
        }, [
            r,
            c,
            d,
            o,
            u
        ]);
    }
    A.createContext(null);
    function lu(u, { relative: r } = {}) {
        let { matches: c } = A.useContext(jt), { pathname: f } = Hl(), o = JSON.stringify(gf(c));
        return A.useMemo(()=>bf(u, JSON.parse(o), f, r === "path"), [
            u,
            o,
            f,
            r
        ]);
    }
    function tg(u, r) {
        return Dp(u, r);
    }
    function Dp(u, r, c, f) {
        Oe(Vn(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: d } = A.useContext(qt), { matches: y } = A.useContext(jt), v = y[y.length - 1], p = v ? v.params : {}, m = v ? v.pathname : "/", E = v ? v.pathnameBase : "/", R = v && v.route;
        {
            let K = R && R.path || "";
            Cp(m, !R || K.endsWith("*") || K.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K === "/" ? "*" : `${K}/*`}">.`);
        }
        let b = Hl(), M;
        if (r) {
            let K = typeof r == "string" ? un(r) : r;
            Oe(E === "/" || K.pathname?.startsWith(E), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${K.pathname}" was given in the \`location\` prop.`), M = K;
        } else M = b;
        let D = M.pathname || "/", H = D;
        if (E !== "/") {
            let K = E.replace(/^\//, "").split("/");
            H = "/" + D.replace(/^\//, "").split("/").slice(K.length).join("/");
        }
        let L = !d && c && c.matches && c.matches.length > 0 ? c.matches : Ep(u, {
            pathname: H
        });
        Ct(R || L != null, `No routes matched location "${M.pathname}${M.search}${M.hash}" `), Ct(L == null || L[L.length - 1].route.element !== void 0 || L[L.length - 1].route.Component !== void 0 || L[L.length - 1].route.lazy !== void 0, `Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let z = ig(L && L.map((K)=>Object.assign({}, K, {
                params: Object.assign({}, p, K.params),
                pathname: rl([
                    E,
                    o.encodeLocation ? o.encodeLocation(K.pathname).pathname : K.pathname
                ]),
                pathnameBase: K.pathnameBase === "/" ? E : rl([
                    E,
                    o.encodeLocation ? o.encodeLocation(K.pathnameBase).pathname : K.pathnameBase
                ])
            })), y, c, f);
        return r && z ? A.createElement(tu.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    ...M
                },
                navigationType: "POP"
            }
        }, z) : z;
    }
    function lg() {
        let u = sg(), r = Jv(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, f = "rgba(200,200,200, 0.5)", o = {
            padding: "0.5rem",
            backgroundColor: f
        }, d = {
            padding: "2px 4px",
            backgroundColor: f
        }, y = null;
        return console.error("Error handled by React Router default ErrorBoundary:", u), y = A.createElement(A.Fragment, null, A.createElement("p", null, "💿 Hey developer 👋"), A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", A.createElement("code", {
            style: d
        }, "ErrorBoundary"), " or", " ", A.createElement("code", {
            style: d
        }, "errorElement"), " prop on your route.")), A.createElement(A.Fragment, null, A.createElement("h2", null, "Unexpected Application Error!"), A.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), c ? A.createElement("pre", {
            style: o
        }, c) : null, y);
    }
    var ng = A.createElement(lg, null), ag = class extends A.Component {
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
            return this.state.error !== void 0 ? A.createElement(jt.Provider, {
                value: this.props.routeContext
            }, A.createElement(Sf.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function ug({ routeContext: u, match: r, children: c }) {
        let f = A.useContext(Xn);
        return f && f.static && f.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = r.route.id), A.createElement(jt.Provider, {
            value: u
        }, c);
    }
    function ig(u, r = [], c = null, f = null) {
        if (u == null) {
            if (!c) return null;
            if (c.errors) u = c.matches;
            else if (r.length === 0 && !c.initialized && c.matches.length > 0) u = c.matches;
            else return null;
        }
        let o = u, d = c?.errors;
        if (d != null) {
            let p = o.findIndex((m)=>m.route.id && d?.[m.route.id] !== void 0);
            Oe(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`), o = o.slice(0, Math.min(o.length, p + 1));
        }
        let y = !1, v = -1;
        if (c) for(let p = 0; p < o.length; p++){
            let m = o[p];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (v = p), m.route.id) {
                let { loaderData: E, errors: R } = c, b = m.route.loader && !E.hasOwnProperty(m.route.id) && (!R || R[m.route.id] === void 0);
                if (m.route.lazy || b) {
                    y = !0, v >= 0 ? o = o.slice(0, v + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((p, m, E)=>{
            let R, b = !1, M = null, D = null;
            c && (R = d && m.route.id ? d[m.route.id] : void 0, M = m.route.errorElement || ng, y && (v < 0 && E === 0 ? (Cp("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), b = !0, D = null) : v === E && (b = !0, D = m.route.hydrateFallbackElement || null)));
            let H = r.concat(o.slice(0, E + 1)), L = ()=>{
                let z;
                return R ? z = M : b ? z = D : m.route.Component ? z = A.createElement(m.route.Component, null) : m.route.element ? z = m.route.element : z = p, A.createElement(ug, {
                    match: m,
                    routeContext: {
                        outlet: p,
                        matches: H,
                        isDataRoute: c != null
                    },
                    children: z
                });
            };
            return c && (m.route.ErrorBoundary || m.route.errorElement || E === 0) ? A.createElement(ag, {
                location: c.location,
                revalidation: c.revalidation,
                component: M,
                error: R,
                children: L(),
                routeContext: {
                    outlet: null,
                    matches: H,
                    isDataRoute: !0
                }
            }) : L();
        }, null);
    }
    function Ef(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function rg(u) {
        let r = A.useContext(Xn);
        return Oe(r, Ef(u)), r;
    }
    function cg(u) {
        let r = A.useContext(Ci);
        return Oe(r, Ef(u)), r;
    }
    function fg(u) {
        let r = A.useContext(jt);
        return Oe(r, Ef(u)), r;
    }
    function _f(u) {
        let r = fg(u), c = r.matches[r.matches.length - 1];
        return Oe(c.route.id, `${u} can only be used on routes that contain a unique "id"`), c.route.id;
    }
    function og() {
        return _f("useRouteId");
    }
    function sg() {
        let u = A.useContext(Sf), r = cg("useRouteError"), c = _f("useRouteError");
        return u !== void 0 ? u : r.errors?.[c];
    }
    function dg() {
        let { router: u } = rg("useNavigate"), r = _f("useNavigate"), c = A.useRef(!1);
        return Np(()=>{
            c.current = !0;
        }), A.useCallback(async (o, d = {})=>{
            Ct(c.current, Op), c.current && (typeof o == "number" ? u.navigate(o) : await u.navigate(o, {
                fromRouteId: r,
                ...d
            }));
        }, [
            u,
            r
        ]);
    }
    var Vh = {};
    function Cp(u, r, c) {
        !r && !Vh[u] && (Vh[u] = !0, Ct(!1, c));
    }
    A.memo(hg);
    function hg({ routes: u, future: r, state: c }) {
        return Dp(u, void 0, c, r);
    }
    function Zh({ to: u, replace: r, state: c, relative: f }) {
        Oe(Vn(), "<Navigate> may be used only in the context of a <Router> component.");
        let { static: o } = A.useContext(qt);
        Ct(!o, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
        let { matches: d } = A.useContext(jt), { pathname: y } = Hl(), v = Mp(), p = bf(u, gf(d), y, f === "path"), m = JSON.stringify(p);
        return A.useEffect(()=>{
            v(JSON.parse(m), {
                replace: r,
                state: c,
                relative: f
            });
        }, [
            v,
            m,
            f,
            r,
            c
        ]), null;
    }
    function Ri(u) {
        Oe(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function pg({ basename: u = "/", children: r = null, location: c, navigationType: f = "POP", navigator: o, static: d = !1 }) {
        Oe(!Vn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let y = u.replace(/^\/*/, "/"), v = A.useMemo(()=>({
                basename: y,
                navigator: o,
                static: d,
                future: {}
            }), [
            y,
            o,
            d
        ]);
        typeof c == "string" && (c = un(c));
        let { pathname: p = "/", search: m = "", hash: E = "", state: R = null, key: b = "default" } = c, M = A.useMemo(()=>{
            let D = cl(p, y);
            return D == null ? null : {
                location: {
                    pathname: D,
                    search: m,
                    hash: E,
                    state: R,
                    key: b
                },
                navigationType: f
            };
        }, [
            y,
            p,
            m,
            E,
            R,
            b,
            f
        ]);
        return Ct(M != null, `<Router basename="${y}"> is not able to match the URL "${p}${m}${E}" because it does not start with the basename, so the <Router> won't render anything.`), M == null ? null : A.createElement(qt.Provider, {
            value: v
        }, A.createElement(tu.Provider, {
            children: r,
            value: M
        }));
    }
    function mg({ children: u, location: r }) {
        return tg(df(u), r);
    }
    function df(u, r = []) {
        let c = [];
        return A.Children.forEach(u, (f, o)=>{
            if (!A.isValidElement(f)) return;
            let d = [
                ...r,
                o
            ];
            if (f.type === A.Fragment) {
                c.push.apply(c, df(f.props.children, d));
                return;
            }
            Oe(f.type === Ri, `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Oe(!f.props.index || !f.props.children, "An index route cannot have child routes.");
            let y = {
                id: f.props.id || d.join("-"),
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
            f.props.children && (y.children = df(f.props.children, d)), c.push(y);
        }), c;
    }
    var Ti = "get", Ai = "application/x-www-form-urlencoded";
    function xi(u) {
        return u != null && typeof u.tagName == "string";
    }
    function yg(u) {
        return xi(u) && u.tagName.toLowerCase() === "button";
    }
    function vg(u) {
        return xi(u) && u.tagName.toLowerCase() === "form";
    }
    function gg(u) {
        return xi(u) && u.tagName.toLowerCase() === "input";
    }
    function bg(u) {
        return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
    }
    function Sg(u, r) {
        return u.button === 0 && (!r || r === "_self") && !bg(u);
    }
    var Si = null;
    function Eg() {
        if (Si === null) try {
            new FormData(document.createElement("form"), 0), Si = !1;
        } catch  {
            Si = !0;
        }
        return Si;
    }
    var _g = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function rf(u) {
        return u != null && !_g.has(u) ? (Ct(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ai}"`), null) : u;
    }
    function Rg(u, r) {
        let c, f, o, d, y;
        if (vg(u)) {
            let v = u.getAttribute("action");
            f = v ? cl(v, r) : null, c = u.getAttribute("method") || Ti, o = rf(u.getAttribute("enctype")) || Ai, d = new FormData(u);
        } else if (yg(u) || gg(u) && (u.type === "submit" || u.type === "image")) {
            let v = u.form;
            if (v == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let p = u.getAttribute("formaction") || v.getAttribute("action");
            if (f = p ? cl(p, r) : null, c = u.getAttribute("formmethod") || v.getAttribute("method") || Ti, o = rf(u.getAttribute("formenctype")) || rf(v.getAttribute("enctype")) || Ai, d = new FormData(v, u), !Eg()) {
                let { name: m, type: E, value: R } = u;
                if (E === "image") {
                    let b = m ? `${m}.` : "";
                    d.append(`${b}x`, "0"), d.append(`${b}y`, "0");
                } else m && d.append(m, R);
            }
        } else {
            if (xi(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            c = Ti, f = null, o = Ai, y = u;
        }
        return d && o === "text/plain" && (y = d, d = void 0), {
            action: f,
            method: c.toLowerCase(),
            encType: o,
            formData: d,
            body: y
        };
    }
    function Rf(u, r) {
        if (u === !1 || u === null || typeof u > "u") throw new Error(r);
    }
    async function Tg(u, r) {
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
    function Ag(u) {
        return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
    }
    async function Og(u, r, c) {
        let f = await Promise.all(u.map(async (o)=>{
            let d = r.routes[o.route.id];
            if (d) {
                let y = await Tg(d, c);
                return y.links ? y.links() : [];
            }
            return [];
        }));
        return Cg(f.flat(1).filter(Ag).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function Jh(u, r, c, f, o, d) {
        let y = (p, m)=>c[m] ? p.route.id !== c[m].route.id : !0, v = (p, m)=>c[m].pathname !== p.pathname || c[m].route.path?.endsWith("*") && c[m].params["*"] !== p.params["*"];
        return d === "assets" ? r.filter((p, m)=>y(p, m) || v(p, m)) : d === "data" ? r.filter((p, m)=>{
            let E = f.routes[p.route.id];
            if (!E || !E.hasLoader) return !1;
            if (y(p, m) || v(p, m)) return !0;
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
    function Ng(u, r, { includeHydrateFallback: c } = {}) {
        return Mg(u.map((f)=>{
            let o = r.routes[f.route.id];
            if (!o) return [];
            let d = [
                o.module
            ];
            return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
        }).flat(1));
    }
    function Mg(u) {
        return [
            ...new Set(u)
        ];
    }
    function Dg(u) {
        let r = {}, c = Object.keys(u).sort();
        for (let f of c)r[f] = u[f];
        return r;
    }
    function Cg(u, r) {
        let c = new Set;
        return new Set(r), u.reduce((f, o)=>{
            let d = JSON.stringify(Dg(o));
            return c.has(d) || (c.add(d), f.push({
                key: d,
                link: o
            })), f;
        }, []);
    }
    function xg(u, r) {
        let c = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u;
        return c.pathname === "/" ? c.pathname = "_root.data" : r && cl(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
    }
    function xp() {
        let u = A.useContext(Xn);
        return Rf(u, "You must render this element inside a <DataRouterContext.Provider> element"), u;
    }
    function Bg() {
        let u = A.useContext(Ci);
        return Rf(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u;
    }
    var Tf = A.createContext(void 0);
    Tf.displayName = "FrameworkContext";
    function Bp() {
        let u = A.useContext(Tf);
        return Rf(u, "You must render this element inside a <HydratedRouter> element"), u;
    }
    function Ug(u, r) {
        let c = A.useContext(Tf), [f, o] = A.useState(!1), [d, y] = A.useState(!1), { onFocus: v, onBlur: p, onMouseEnter: m, onMouseLeave: E, onTouchStart: R } = r, b = A.useRef(null);
        A.useEffect(()=>{
            if (u === "render" && y(!0), u === "viewport") {
                let H = (z)=>{
                    z.forEach((K)=>{
                        y(K.isIntersecting);
                    });
                }, L = new IntersectionObserver(H, {
                    threshold: .5
                });
                return b.current && L.observe(b.current), ()=>{
                    L.disconnect();
                };
            }
        }, [
            u
        ]), A.useEffect(()=>{
            if (f) {
                let H = setTimeout(()=>{
                    y(!0);
                }, 100);
                return ()=>{
                    clearTimeout(H);
                };
            }
        }, [
            f
        ]);
        let M = ()=>{
            o(!0);
        }, D = ()=>{
            o(!1), y(!1);
        };
        return c ? u !== "intent" ? [
            d,
            b,
            {}
        ] : [
            d,
            b,
            {
                onFocus: Ja(v, M),
                onBlur: Ja(p, D),
                onMouseEnter: Ja(m, M),
                onMouseLeave: Ja(E, D),
                onTouchStart: Ja(R, M)
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
    function zg({ page: u, ...r }) {
        let { router: c } = xp(), f = A.useMemo(()=>Ep(c.routes, u, c.basename), [
            c.routes,
            u,
            c.basename
        ]);
        return f ? A.createElement(Pg, {
            page: u,
            matches: f,
            ...r
        }) : null;
    }
    function qg(u) {
        let { manifest: r, routeModules: c } = Bp(), [f, o] = A.useState([]);
        return A.useEffect(()=>{
            let d = !1;
            return Og(u, r, c).then((y)=>{
                d || o(y);
            }), ()=>{
                d = !0;
            };
        }, [
            u,
            r,
            c
        ]), f;
    }
    function Pg({ page: u, matches: r, ...c }) {
        let f = Hl(), { manifest: o, routeModules: d } = Bp(), { basename: y } = xp(), { loaderData: v, matches: p } = Bg(), m = A.useMemo(()=>Jh(u, r, p, o, f, "data"), [
            u,
            r,
            p,
            o,
            f
        ]), E = A.useMemo(()=>Jh(u, r, p, o, f, "assets"), [
            u,
            r,
            p,
            o,
            f
        ]), R = A.useMemo(()=>{
            if (u === f.pathname + f.search + f.hash) return [];
            let D = new Set, H = !1;
            if (r.forEach((z)=>{
                let K = o.routes[z.route.id];
                !K || !K.hasLoader || (!m.some((w)=>w.route.id === z.route.id) && z.route.id in v && d[z.route.id]?.shouldRevalidate || K.hasClientLoader ? H = !0 : D.add(z.route.id));
            }), D.size === 0) return [];
            let L = xg(u, y);
            return H && D.size > 0 && L.searchParams.set("_routes", r.filter((z)=>D.has(z.route.id)).map((z)=>z.route.id).join(",")), [
                L.pathname + L.search
            ];
        }, [
            y,
            v,
            f,
            o,
            m,
            r,
            u,
            d
        ]), b = A.useMemo(()=>Ng(E, o), [
            E,
            o
        ]), M = qg(E);
        return A.createElement(A.Fragment, null, R.map((D)=>A.createElement("link", {
                key: D,
                rel: "prefetch",
                as: "fetch",
                href: D,
                ...c
            })), b.map((D)=>A.createElement("link", {
                key: D,
                rel: "modulepreload",
                href: D,
                ...c
            })), M.map(({ key: D, link: H })=>A.createElement("link", {
                key: D,
                ...H
            })));
    }
    function wg(...u) {
        return (r)=>{
            u.forEach((c)=>{
                typeof c == "function" ? c(r) : c != null && (c.current = r);
            });
        };
    }
    var Up = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        Up && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function Hg({ basename: u, children: r, window: c }) {
        let f = A.useRef();
        f.current == null && (f.current = Nv({
            window: c,
            v5Compat: !0
        }));
        let o = f.current, [d, y] = A.useState({
            action: o.action,
            location: o.location
        }), v = A.useCallback((p)=>{
            A.startTransition(()=>y(p));
        }, [
            y
        ]);
        return A.useLayoutEffect(()=>o.listen(v), [
            o,
            v
        ]), A.createElement(pg, {
            basename: u,
            children: r,
            location: d.location,
            navigationType: d.action,
            navigator: o
        });
    }
    var zp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, qp = A.forwardRef(function({ onClick: r, discover: c = "render", prefetch: f = "none", relative: o, reloadDocument: d, replace: y, state: v, target: p, to: m, preventScrollReset: E, viewTransition: R, ...b }, M) {
        let { basename: D } = A.useContext(qt), H = typeof m == "string" && zp.test(m), L, z = !1;
        if (typeof m == "string" && H && (L = m, Up)) try {
            let fe = new URL(window.location.href), Ne = m.startsWith("//") ? new URL(fe.protocol + m) : new URL(m), at = cl(Ne.pathname, D);
            Ne.origin === fe.origin && at != null ? m = at + Ne.search + Ne.hash : z = !0;
        } catch  {
            Ct(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let K = Iv(m, {
            relative: o
        }), [w, V, Y] = Ug(f, b), W = jg(m, {
            replace: y,
            state: v,
            target: p,
            preventScrollReset: E,
            relative: o,
            viewTransition: R
        });
        function ce(fe) {
            r && r(fe), fe.defaultPrevented || W(fe);
        }
        let pe = A.createElement("a", {
            ...b,
            ...Y,
            href: L || K,
            onClick: z || d ? r : ce,
            ref: wg(M, V),
            target: p,
            "data-discover": !H && c === "render" ? "true" : void 0
        });
        return w && !H ? A.createElement(A.Fragment, null, pe, A.createElement(zg, {
            page: K
        })) : pe;
    });
    qp.displayName = "Link";
    var Lg = A.forwardRef(function({ "aria-current": r = "page", caseSensitive: c = !1, className: f = "", end: o = !1, style: d, to: y, viewTransition: v, children: p, ...m }, E) {
        let R = lu(y, {
            relative: m.relative
        }), b = Hl(), M = A.useContext(Ci), { navigator: D, basename: H } = A.useContext(qt), L = M != null && Vg(R) && v === !0, z = D.encodeLocation ? D.encodeLocation(R).pathname : R.pathname, K = b.pathname, w = M && M.navigation && M.navigation.location ? M.navigation.location.pathname : null;
        c || (K = K.toLowerCase(), w = w ? w.toLowerCase() : null, z = z.toLowerCase()), w && H && (w = cl(w, H) || w);
        const V = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
        let Y = K === z || !o && K.startsWith(z) && K.charAt(V) === "/", W = w != null && (w === z || !o && w.startsWith(z) && w.charAt(z.length) === "/"), ce = {
            isActive: Y,
            isPending: W,
            isTransitioning: L
        }, pe = Y ? r : void 0, fe;
        typeof f == "function" ? fe = f(ce) : fe = [
            f,
            Y ? "active" : null,
            W ? "pending" : null,
            L ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let Ne = typeof d == "function" ? d(ce) : d;
        return A.createElement(qp, {
            ...m,
            "aria-current": pe,
            className: fe,
            ref: E,
            style: Ne,
            to: y,
            viewTransition: v
        }, typeof p == "function" ? p(ce) : p);
    });
    Lg.displayName = "NavLink";
    var Qg = A.forwardRef(({ discover: u = "render", fetcherKey: r, navigate: c, reloadDocument: f, replace: o, state: d, method: y = Ti, action: v, onSubmit: p, relative: m, preventScrollReset: E, viewTransition: R, ...b }, M)=>{
        let D = Gg(), H = Xg(v, {
            relative: m
        }), L = y.toLowerCase() === "get" ? "get" : "post", z = typeof v == "string" && zp.test(v), K = (w)=>{
            if (p && p(w), w.defaultPrevented) return;
            w.preventDefault();
            let V = w.nativeEvent.submitter, Y = V?.getAttribute("formmethod") || y;
            D(V || w.currentTarget, {
                fetcherKey: r,
                method: Y,
                navigate: c,
                replace: o,
                state: d,
                relative: m,
                preventScrollReset: E,
                viewTransition: R
            });
        };
        return A.createElement("form", {
            ref: M,
            method: L,
            action: H,
            onSubmit: f ? p : K,
            ...b,
            "data-discover": !z && u === "render" ? "true" : void 0
        });
    });
    Qg.displayName = "Form";
    function Kg(u) {
        return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Pp(u) {
        let r = A.useContext(Xn);
        return Oe(r, Kg(u)), r;
    }
    function jg(u, { target: r, replace: c, state: f, preventScrollReset: o, relative: d, viewTransition: y } = {}) {
        let v = Mp(), p = Hl(), m = lu(u, {
            relative: d
        });
        return A.useCallback((E)=>{
            if (Sg(E, r)) {
                E.preventDefault();
                let R = c !== void 0 ? c : eu(p) === eu(m);
                v(u, {
                    replace: R,
                    state: f,
                    preventScrollReset: o,
                    relative: d,
                    viewTransition: y
                });
            }
        }, [
            p,
            v,
            m,
            c,
            f,
            r,
            u,
            o,
            d,
            y
        ]);
    }
    var Yg = 0, kg = ()=>`__${String(++Yg)}__`;
    function Gg() {
        let { router: u } = Pp("useSubmit"), { basename: r } = A.useContext(qt), c = og();
        return A.useCallback(async (f, o = {})=>{
            let { action: d, method: y, encType: v, formData: p, body: m } = Rg(f, r);
            if (o.navigate === !1) {
                let E = o.fetcherKey || kg();
                await u.fetch(E, c, o.action || d, {
                    preventScrollReset: o.preventScrollReset,
                    formData: p,
                    body: m,
                    formMethod: o.method || y,
                    formEncType: o.encType || v,
                    flushSync: o.flushSync
                });
            } else await u.navigate(o.action || d, {
                preventScrollReset: o.preventScrollReset,
                formData: p,
                body: m,
                formMethod: o.method || y,
                formEncType: o.encType || v,
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
    function Xg(u, { relative: r } = {}) {
        let { basename: c } = A.useContext(qt), f = A.useContext(jt);
        Oe(f, "useFormAction must be used inside a RouteContext");
        let [o] = f.matches.slice(-1), d = {
            ...lu(u || ".", {
                relative: r
            })
        }, y = Hl();
        if (u == null) {
            d.search = y.search;
            let v = new URLSearchParams(d.search), p = v.getAll("index");
            if (p.some((E)=>E === "")) {
                v.delete("index"), p.filter((R)=>R).forEach((R)=>v.append("index", R));
                let E = v.toString();
                d.search = E ? `?${E}` : "";
            }
        }
        return (!u || u === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (d.pathname = d.pathname === "/" ? c : rl([
            c,
            d.pathname
        ])), eu(d);
    }
    function Vg(u, r = {}) {
        let c = A.useContext(Ap);
        Oe(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: f } = Pp("useViewTransitionState"), o = lu(u, {
            relative: r.relative
        });
        if (!c.isTransitioning) return !1;
        let d = cl(c.currentLocation.pathname, f) || c.currentLocation.pathname, y = cl(c.nextLocation.pathname, f) || c.nextLocation.pathname;
        return Mi(o.pathname, y) != null || Mi(o.pathname, d) != null;
    }
    new TextEncoder;
    let Zg, Jg, wp, $g;
    Zg = A.createContext();
    Jg = ({ children: u })=>{
        const r = (E, R)=>{
            try {
                const b = localStorage.getItem(E);
                if (b == null) return R;
                const M = JSON.parse(b);
                return M !== void 0 ? M : R;
            } catch  {
                return R;
            }
        }, [c, f] = A.useState(()=>r(lt.THEME_KEY, lt.THEME)), [o, d] = A.useState(()=>r(lt.ENABLE_SOUND_KEY, lt.ENABLE_SOUND)), [y, v] = A.useState(()=>r(lt.TIMER_DURATION_KEY, lt.TIMER_DURATION)), [p, m] = A.useState(()=>r(lt.IS_FLIPPED_KEY, lt.IS_FLIPPED));
        return A.useEffect(()=>localStorage.setItem(lt.THEME_KEY, JSON.stringify(c)), [
            c
        ]), A.useEffect(()=>localStorage.setItem(lt.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), A.useEffect(()=>localStorage.setItem(lt.TIMER_DURATION_KEY, JSON.stringify(y)), [
            y
        ]), A.useEffect(()=>localStorage.setItem(lt.IS_FLIPPED_KEY, JSON.stringify(p)), [
            p
        ]), tt.jsx(Zg.Provider, {
            value: {
                theme: c,
                setTheme: f,
                enableSound: o,
                setEnableSound: d,
                timerDuration: y,
                setTimerDuration: v,
                isFlipped: p,
                setIsFlipped: m
            },
            children: u
        });
    };
    wp = (u, r)=>r.split(" ")[1] === "w" ? u : -u;
    bb = (u, r, c, f, o)=>{
        if (typeof u == "string") {
            if (u.startsWith("info") && u.includes("score")) {
                const d = u.match(/score (cp|mate) (-?\d+)/);
                if (d) {
                    const v = d[1], p = parseInt(d[2], 10);
                    let m = 0;
                    v === "cp" ? m = p / 100 : v === "mate" && (m = p > 0 ? 10 : -10);
                    const E = wp(m, f);
                    r(E);
                }
                const y = u.match(/ pv (.+)/);
                y && c(y[1]);
            }
            u.startsWith("bestmove");
        }
    };
    $g = 400;
    function Wg(u, r) {
        const c = Hp(r);
        if (!c || !u.has(c)) return;
        const f = u.get(c);
        return u.delete(c), u.set(c, f), f;
    }
    function Fg(u, r, c, f = $g) {
        const o = Hp(r);
        if (o) for(u.has(o) && u.delete(o), u.set(o, c); u.size > f;){
            const d = u.keys().next().value;
            u.delete(d);
        }
    }
    Hp = function(u) {
        return u == null || typeof u != "string" ? "" : u.trim().replace(/\s+/g, " ");
    };
    const Ig = "/chess-frontend/stockfish/stockfish-17-lite-single.js";
    function Fa(u) {
        return u == null ? [] : typeof u == "string" ? u.split(/\r?\n/).map((r)=>r.trim()).filter(Boolean) : typeof ArrayBuffer < "u" && u instanceof ArrayBuffer ? Fa(new TextDecoder().decode(u)) : ArrayBuffer.isView && ArrayBuffer.isView(u) ? Fa(new TextDecoder().decode(u)) : Array.isArray(u) ? u.flatMap((r)=>Fa(r)) : typeof u == "object" && u !== null && typeof u.data == "string" ? Fa(u.data) : [
            String(u).trim()
        ].filter(Boolean);
    }
    function eb(u) {
        const r = u.match(/\bscore\s+(cp|mate)\s+(-?\d+)/i);
        if (!r) return null;
        const c = r[1].toLowerCase(), f = parseInt(r[2], 10);
        return Number.isNaN(f) ? null : c === "cp" ? f / 100 : f > 0 ? 10 : -10;
    }
    function tb(u) {
        typeof requestIdleCallback < "u" ? requestIdleCallback(u, {
            timeout: 48
        }) : queueMicrotask(u);
    }
    function lb(u, r = "lite", c = 8e3, f = {}) {
        const o = A.useRef(f);
        o.current = f;
        const d = A.useRef(null), y = A.useRef(null), v = A.useRef(null), p = A.useRef(!1), m = A.useRef([]), E = A.useRef(!1), R = A.useRef(!1), b = A.useRef(null), M = A.useRef(null), D = A.useRef(!1), H = A.useRef(!1), L = A.useRef(null), z = A.useRef(new Map), K = A.useCallback(()=>{
            if (!(E.current || !d.current)) {
                for(E.current = !0; m.current.length > 0;){
                    const j = m.current.findIndex((oe)=>oe.type === "stop"), G = j >= 0 ? m.current.splice(j, 1)[0] : m.current.shift();
                    G && d.current.postMessage(G.cmd);
                }
                E.current = !1;
            }
        }, []), w = A.useCallback((j, G)=>{
            m.current.push({
                type: j,
                cmd: G
            }), K();
        }, [
            K
        ]), V = A.useCallback((j)=>{
            j.onmessage = (G)=>{
                tb(()=>{
                    const oe = Fa(G.data);
                    for (const S of oe){
                        if (S === "uciok" && (D.current = !0, o.current.onUciReady?.(), w("normal", "isready")), S === "readyok") {
                            H.current = !0, o.current.onReadyOk?.();
                            const X = L.current;
                            X && (L.current = null, X());
                        }
                        const q = b.current;
                        if (q) {
                            if (S.startsWith("info") && /\bscore\b/i.test(S)) {
                                const X = eb(S);
                                X != null && (M.current = wp(X, q.fen));
                            }
                            if (S.startsWith("bestmove")) {
                                const k = S.trim().split(/\s+/)[1], J = k && k !== "(none)" ? k : "", ie = M.current, te = ie != null && Number.isFinite(ie) ? ie : 0;
                                if (q.depths && q.depthIndex < q.depths.length - 1) {
                                    q.depthIndex += 1;
                                    const be = q.depths[q.depthIndex];
                                    M.current = null, w("stop", "stop"), p.current = !1, w("normal", "setoption name MultiPV value 1"), w("normal", `position fen ${q.fen}`), w("normal", `go depth ${be}`);
                                    continue;
                                }
                                clearTimeout(q.timeoutId), b.current = null;
                                const Qe = {
                                    evalScore: te,
                                    bestMoveUci: J
                                };
                                Fg(z.current, q.fen, Qe), q.resolve(Qe);
                            }
                        }
                        u && u(S);
                    }
                });
            }, j.onerror = (G)=>{
                if (console.error("Error with Stockfish worker:", G), b.current) {
                    clearTimeout(b.current.timeoutId);
                    const oe = G?.message || (typeof G == "string" ? G : "Stockfish worker error");
                    b.current.reject(new Error(oe)), b.current = null;
                }
            };
        }, [
            u,
            w
        ]), Y = A.useCallback(()=>{
            d.current || (D.current = !1, H.current = !1, r === "lite" ? d.current = new Worker(Ig) : d.current = new Worker(new URL("/chess-frontend/assets/stockfishWorker-DpVJx5wv.js", import.meta.url), {
                type: "classic"
            }), V(d.current), d.current.postMessage("uci"));
        }, [
            V,
            r
        ]), W = A.useCallback(()=>{
            Y();
        }, [
            Y
        ]), ce = A.useCallback(()=>{
            Y();
        }, [
            Y
        ]);
        A.useCallback((j)=>{
            d.current && w("normal", j);
        }, [
            w
        ]);
        const pe = A.useCallback((j)=>{
            j.forEach((G)=>{
                w("normal", `setoption name ${G.name} value ${G.value}`);
            });
        }, [
            w
        ]), fe = A.useCallback((j, G = [])=>{
            let oe = `position fen ${j}`;
            if (G.length > 0) {
                const S = G.join(" ");
                oe += ` moves ${S}`;
            }
            w("normal", oe);
        }, [
            w
        ]), Ne = A.useCallback((j)=>{
            d.current && p.current && (w("stop", "stop"), p.current = !1, y.current && (clearTimeout(y.current), y.current = null));
        }, [
            w
        ]), at = A.useCallback((j)=>{
            R.current && (d.current || Y(), clearTimeout(y.current), Ne("pre startSearch"), v.current && clearTimeout(v.current), v.current = setTimeout(()=>{
                p.current = !0, w("normal", `position fen ${j}`), w("normal", "go infinite"), y.current = setTimeout(()=>{
                    Ne("startSearch timer expire");
                }, c);
            }, 50));
        }, [
            c,
            Ne,
            w,
            Y
        ]), Ue = A.useCallback(()=>{
            D.current = !1, H.current = !1, L.current = null, b.current && (clearTimeout(b.current.timeoutId), b.current.reject(new Error("Engine terminated")), b.current = null), d.current && (d.current.terminate(), d.current = null), p.current = !1, y.current && (clearTimeout(y.current), y.current = null);
        }, []), Yt = A.useCallback((j)=>{
            R.current = j, j || (b.current && (clearTimeout(b.current.timeoutId), b.current.reject(new Error("Engine disabled")), b.current = null), Ne("permission revoked"));
        }, [
            Ne
        ]), kt = 8, Le = 12e4, B = A.useCallback((j, G = {})=>{
            if (!(G.skipCache === !0) && j) {
                const k = Wg(z.current, j);
                if (k) return Promise.resolve(k);
            }
            const S = Array.isArray(G.progressiveDepths) && G.progressiveDepths.length > 0 ? G.progressiveDepths.map((k)=>Math.min(24, Math.max(1, k))) : null, q = typeof G.depth == "number" && G.depth > 0 ? Math.min(24, G.depth) : kt, X = typeof G.timeoutMs == "number" && G.timeoutMs > 0 ? G.timeoutMs : Le;
            return new Promise((k, J)=>{
                if (!R.current) {
                    J(new Error("Engine disabled"));
                    return;
                }
                if (b.current) {
                    const fl = b.current;
                    clearTimeout(fl.timeoutId), fl.reject(new Error("Superseded")), b.current = null;
                }
                if (L.current = null, d.current || Y(), !d.current) {
                    J(new Error("Worker unavailable"));
                    return;
                }
                M.current = null;
                const ie = setTimeout(()=>{
                    if (b.current) {
                        const fl = b.current;
                        b.current = null, fl.reject(new Error("Quick analyze timeout"));
                    }
                }, X), Qe = (S || [
                    q
                ])[0];
                b.current = {
                    resolve: k,
                    reject: J,
                    fen: j,
                    timeoutId: ie,
                    depths: S || null,
                    depthIndex: 0
                };
                const be = ()=>{
                    w("stop", "stop"), p.current = !1, w("normal", "setoption name MultiPV value 1"), w("normal", `position fen ${j}`), w("normal", `go depth ${Qe}`);
                }, xt = ()=>{
                    setTimeout(be, 50);
                };
                D.current && H.current ? xt() : L.current = xt;
            });
        }, [
            w,
            Y
        ]);
        return A.useEffect(()=>()=>{
                b.current && (clearTimeout(b.current.timeoutId), b.current.reject(new Error("Unmounted")), b.current = null), Ue();
            }, [
            Ue
        ]), {
            initEngine: W,
            preloadEngine: ce,
            setOptions: pe,
            setFen: fe,
            startSearch: at,
            stopSearch: Ne,
            terminateEngine: Ue,
            syncEnabledState: Yt,
            quickAnalyzeFen: B
        };
    }
    let Lp, nb, ab, ub;
    Lp = A.createContext();
    Sb = ()=>A.useContext(Lp);
    nb = ({ children: u })=>{
        const r = A.useRef(null), [c, f] = A.useState(!1), [o, d] = A.useState(!1), y = A.useCallback((R)=>{
            r.current && r.current(R);
        }, []), v = lb(y, "lite", 8e3, {
            onUciReady: ()=>f(!0),
            onReadyOk: ()=>d(!0)
        }), { preloadEngine: p } = v;
        A.useEffect(()=>{
            p();
        }, [
            p
        ]);
        const m = A.useMemo(()=>o ? 100 : c ? 66 : 33, [
            c,
            o
        ]), E = A.useCallback((R)=>{
            r.current = R;
        }, []);
        return tt.jsx(Lp.Provider, {
            value: {
                ...v,
                setOnMessage: E,
                engineUciOk: c,
                engineReadyOk: o,
                engineWarmupPercent: m
            },
            children: u
        });
    };
    ab = A.lazy(()=>Av(()=>import("./AnalysisGame-BiOucV85.js"), __vite__mapDeps([0,1])));
    ub = ()=>tt.jsx(Jg, {
            children: tt.jsx(nb, {
                children: tt.jsx(Hg, {
                    children: tt.jsx(A.Suspense, {
                        fallback: tt.jsx("div", {
                            className: "loading-screen",
                            children: "Loading..."
                        }),
                        children: tt.jsxs(mg, {
                            children: [
                                tt.jsx(Ri, {
                                    path: "/",
                                    element: tt.jsx(Zh, {
                                        to: "/analysis",
                                        replace: !0
                                    })
                                }),
                                tt.jsx(Ri, {
                                    path: "/analysis",
                                    element: tt.jsx(ab, {})
                                }),
                                tt.jsx(Ri, {
                                    path: "*",
                                    element: tt.jsx(Zh, {
                                        to: "/analysis",
                                        replace: !0
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        });
    function ib() {
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
    ib();
    gm.createRoot(document.getElementById("root")).render(tt.jsx(qm, {
        store: Sp,
        children: tt.jsx(ub, {})
    }));
})();
export { fp as C, rb as R, fb as a, A as b, db as c, Sp as d, Sb as e, ob as f, cm as g, gb as h, hb as i, tt as j, vb as k, mb as l, yb as m, lt as n, bb as o, Hp as p, pb as q, mm as r, sb as s, cb as u, __tla };
