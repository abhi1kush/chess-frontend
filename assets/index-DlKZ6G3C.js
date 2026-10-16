const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/event-6g3cnCrr.js","assets/core-BatWupLY.js","assets/AnalysisPage-yYYjgxQ8.js","assets/AnalysisPage-CT0eWTNi.css"])))=>i.map(i=>d[i]);
let Ee, gg, N, v1, Tg, Eg, Rg, Sg, Wd, Bg, jc, Ht, xg, Mg, Ag, pp, Ng, Dg, _g, Vy, Og, zg, bg;
let __tla = (async ()=>{
    (function() {
        const r = document.createElement("link").relList;
        if (r && r.supports && r.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);
        new MutationObserver((o)=>{
            for (const d of o)if (d.type === "childList") for (const v of d.addedNodes)v.tagName === "LINK" && v.rel === "modulepreload" && f(v);
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
    function Ly(i) {
        return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
    }
    var Mc = {
        exports: {}
    }, zn = {};
    var $h;
    function Qy() {
        if ($h) return zn;
        $h = 1;
        var i = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
        function c(f, o, d) {
            var v = null;
            if (d !== void 0 && (v = "" + d), o.key !== void 0 && (v = "" + o.key), "key" in o) {
                d = {};
                for(var g in o)g !== "key" && (d[g] = o[g]);
            } else d = o;
            return o = d.ref, {
                $$typeof: i,
                type: f,
                key: v,
                ref: o !== void 0 ? o : null,
                props: d
            };
        }
        return zn.Fragment = r, zn.jsx = c, zn.jsxs = c, zn;
    }
    var Wh;
    function Yy() {
        return Wh || (Wh = 1, Mc.exports = Qy()), Mc.exports;
    }
    let Nc, Bn, Dc, xc;
    Ht = Yy();
    Nc = {
        exports: {}
    };
    Bn = {};
    Dc = {
        exports: {}
    };
    xc = {};
    var Fh;
    function Gy() {
        return Fh || (Fh = 1, function(i) {
            function r(B, G) {
                var F = B.length;
                B.push(G);
                t: for(; 0 < F;){
                    var gt = F - 1 >>> 1, b = B[gt];
                    if (0 < o(b, G)) B[gt] = G, B[F] = b, F = gt;
                    else break t;
                }
            }
            function c(B) {
                return B.length === 0 ? null : B[0];
            }
            function f(B) {
                if (B.length === 0) return null;
                var G = B[0], F = B.pop();
                if (F !== G) {
                    B[0] = F;
                    t: for(var gt = 0, b = B.length, C = b >>> 1; gt < C;){
                        var K = 2 * (gt + 1) - 1, Y = B[K], J = K + 1, st = B[J];
                        if (0 > o(Y, F)) J < b && 0 > o(st, Y) ? (B[gt] = st, B[J] = F, gt = J) : (B[gt] = Y, B[K] = F, gt = K);
                        else if (J < b && 0 > o(st, F)) B[gt] = st, B[J] = F, gt = J;
                        else break t;
                    }
                }
                return G;
            }
            function o(B, G) {
                var F = B.sortIndex - G.sortIndex;
                return F !== 0 ? F : B.id - G.id;
            }
            if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var d = performance;
                i.unstable_now = function() {
                    return d.now();
                };
            } else {
                var v = Date, g = v.now();
                i.unstable_now = function() {
                    return v.now() - g;
                };
            }
            var p = [], m = [], E = 1, O = null, D = 3, q = !1, x = !1, Q = !1, H = !1, P = typeof setTimeout == "function" ? setTimeout : null, L = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
            function Z(B) {
                for(var G = c(m); G !== null;){
                    if (G.callback === null) f(m);
                    else if (G.startTime <= B) f(m), G.sortIndex = G.expirationTime, r(p, G);
                    else break;
                    G = c(m);
                }
            }
            function j(B) {
                if (Q = !1, Z(B), !x) if (c(p) !== null) x = !0, tt || (tt = !0, Kt());
                else {
                    var G = c(m);
                    G !== null && Xt(j, G.startTime - B);
                }
            }
            var tt = !1, ct = -1, Et = 5, ft = -1;
            function jt() {
                return H ? !0 : !(i.unstable_now() - ft < Et);
            }
            function oe() {
                if (H = !1, tt) {
                    var B = i.unstable_now();
                    ft = B;
                    var G = !0;
                    try {
                        t: {
                            x = !1, Q && (Q = !1, L(ct), ct = -1), q = !0;
                            var F = D;
                            try {
                                e: {
                                    for(Z(B), O = c(p); O !== null && !(O.expirationTime > B && jt());){
                                        var gt = O.callback;
                                        if (typeof gt == "function") {
                                            O.callback = null, D = O.priorityLevel;
                                            var b = gt(O.expirationTime <= B);
                                            if (B = i.unstable_now(), typeof b == "function") {
                                                O.callback = b, Z(B), G = !0;
                                                break e;
                                            }
                                            O === c(p) && f(p), Z(B);
                                        } else f(p);
                                        O = c(p);
                                    }
                                    if (O !== null) G = !0;
                                    else {
                                        var C = c(m);
                                        C !== null && Xt(j, C.startTime - B), G = !1;
                                    }
                                }
                                break t;
                            } finally{
                                O = null, D = F, q = !1;
                            }
                            G = void 0;
                        }
                    } finally{
                        G ? Kt() : tt = !1;
                    }
                }
            }
            var Kt;
            if (typeof V == "function") Kt = function() {
                V(oe);
            };
            else if (typeof MessageChannel < "u") {
                var Al = new MessageChannel, _l = Al.port2;
                Al.port1.onmessage = oe, Kt = function() {
                    _l.postMessage(null);
                };
            } else Kt = function() {
                P(oe, 0);
            };
            function Xt(B, G) {
                ct = P(function() {
                    B(i.unstable_now());
                }, G);
            }
            i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(B) {
                B.callback = null;
            }, i.unstable_forceFrameRate = function(B) {
                0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Et = 0 < B ? Math.floor(1e3 / B) : 5;
            }, i.unstable_getCurrentPriorityLevel = function() {
                return D;
            }, i.unstable_next = function(B) {
                switch(D){
                    case 1:
                    case 2:
                    case 3:
                        var G = 3;
                        break;
                    default:
                        G = D;
                }
                var F = D;
                D = G;
                try {
                    return B();
                } finally{
                    D = F;
                }
            }, i.unstable_requestPaint = function() {
                H = !0;
            }, i.unstable_runWithPriority = function(B, G) {
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
                var F = D;
                D = B;
                try {
                    return G();
                } finally{
                    D = F;
                }
            }, i.unstable_scheduleCallback = function(B, G, F) {
                var gt = i.unstable_now();
                switch(typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? gt + F : gt) : F = gt, B){
                    case 1:
                        var b = -1;
                        break;
                    case 2:
                        b = 250;
                        break;
                    case 5:
                        b = 1073741823;
                        break;
                    case 4:
                        b = 1e4;
                        break;
                    default:
                        b = 5e3;
                }
                return b = F + b, B = {
                    id: E++,
                    callback: G,
                    priorityLevel: B,
                    startTime: F,
                    expirationTime: b,
                    sortIndex: -1
                }, F > gt ? (B.sortIndex = F, r(m, B), c(p) === null && B === c(m) && (Q ? (L(ct), ct = -1) : Q = !0, Xt(j, F - gt))) : (B.sortIndex = b, r(p, B), x || q || (x = !0, tt || (tt = !0, Kt()))), B;
            }, i.unstable_shouldYield = jt, i.unstable_wrapCallback = function(B) {
                var G = D;
                return function() {
                    var F = D;
                    D = G;
                    try {
                        return B.apply(this, arguments);
                    } finally{
                        D = F;
                    }
                };
            };
        }(xc)), xc;
    }
    var Ih;
    function jy() {
        return Ih || (Ih = 1, Dc.exports = Gy()), Dc.exports;
    }
    var zc = {
        exports: {}
    }, lt = {};
    var td;
    function Ky() {
        if (td) return lt;
        td = 1;
        var i = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), v = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), O = Symbol.iterator;
        function D(b) {
            return b === null || typeof b != "object" ? null : (b = O && b[O] || b["@@iterator"], typeof b == "function" ? b : null);
        }
        var q = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, x = Object.assign, Q = {};
        function H(b, C, K) {
            this.props = b, this.context = C, this.refs = Q, this.updater = K || q;
        }
        H.prototype.isReactComponent = {}, H.prototype.setState = function(b, C) {
            if (typeof b != "object" && typeof b != "function" && b != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, b, C, "setState");
        }, H.prototype.forceUpdate = function(b) {
            this.updater.enqueueForceUpdate(this, b, "forceUpdate");
        };
        function P() {}
        P.prototype = H.prototype;
        function L(b, C, K) {
            this.props = b, this.context = C, this.refs = Q, this.updater = K || q;
        }
        var V = L.prototype = new P;
        V.constructor = L, x(V, H.prototype), V.isPureReactComponent = !0;
        var Z = Array.isArray, j = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        }, tt = Object.prototype.hasOwnProperty;
        function ct(b, C, K, Y, J, st) {
            return K = st.ref, {
                $$typeof: i,
                type: b,
                key: C,
                ref: K !== void 0 ? K : null,
                props: st
            };
        }
        function Et(b, C) {
            return ct(b.type, C, void 0, void 0, void 0, b.props);
        }
        function ft(b) {
            return typeof b == "object" && b !== null && b.$$typeof === i;
        }
        function jt(b) {
            var C = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + b.replace(/[=:]/g, function(K) {
                return C[K];
            });
        }
        var oe = /\/+/g;
        function Kt(b, C) {
            return typeof b == "object" && b !== null && b.key != null ? jt("" + b.key) : C.toString(36);
        }
        function Al() {}
        function _l(b) {
            switch(b.status){
                case "fulfilled":
                    return b.value;
                case "rejected":
                    throw b.reason;
                default:
                    switch(typeof b.status == "string" ? b.then(Al, Al) : (b.status = "pending", b.then(function(C) {
                        b.status === "pending" && (b.status = "fulfilled", b.value = C);
                    }, function(C) {
                        b.status === "pending" && (b.status = "rejected", b.reason = C);
                    })), b.status){
                        case "fulfilled":
                            return b.value;
                        case "rejected":
                            throw b.reason;
                    }
            }
            throw b;
        }
        function Xt(b, C, K, Y, J) {
            var st = typeof b;
            (st === "undefined" || st === "boolean") && (b = null);
            var et = !1;
            if (b === null) et = !0;
            else switch(st){
                case "bigint":
                case "string":
                case "number":
                    et = !0;
                    break;
                case "object":
                    switch(b.$$typeof){
                        case i:
                        case r:
                            et = !0;
                            break;
                        case E:
                            return et = b._init, Xt(et(b._payload), C, K, Y, J);
                    }
            }
            if (et) return J = J(b), et = Y === "" ? "." + Kt(b, 0) : Y, Z(J) ? (K = "", et != null && (K = et.replace(oe, "$&/") + "/"), Xt(J, C, K, "", function(Ie) {
                return Ie;
            })) : J != null && (ft(J) && (J = Et(J, K + (J.key == null || b && b.key === J.key ? "" : ("" + J.key).replace(oe, "$&/") + "/") + et)), C.push(J)), 1;
            et = 0;
            var ee = Y === "" ? "." : Y + ":";
            if (Z(b)) for(var Rt = 0; Rt < b.length; Rt++)Y = b[Rt], st = ee + Kt(Y, Rt), et += Xt(Y, C, K, st, J);
            else if (Rt = D(b), typeof Rt == "function") for(b = Rt.call(b), Rt = 0; !(Y = b.next()).done;)Y = Y.value, st = ee + Kt(Y, Rt++), et += Xt(Y, C, K, st, J);
            else if (st === "object") {
                if (typeof b.then == "function") return Xt(_l(b), C, K, Y, J);
                throw C = String(b), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
            }
            return et;
        }
        function B(b, C, K) {
            if (b == null) return b;
            var Y = [], J = 0;
            return Xt(b, Y, "", "", function(st) {
                return C.call(K, st, J++);
            }), Y;
        }
        function G(b) {
            if (b._status === -1) {
                var C = b._result;
                C = C(), C.then(function(K) {
                    (b._status === 0 || b._status === -1) && (b._status = 1, b._result = K);
                }, function(K) {
                    (b._status === 0 || b._status === -1) && (b._status = 2, b._result = K);
                }), b._status === -1 && (b._status = 0, b._result = C);
            }
            if (b._status === 1) return b._result.default;
            throw b._result;
        }
        var F = typeof reportError == "function" ? reportError : function(b) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var C = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
                    error: b
                });
                if (!window.dispatchEvent(C)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", b);
                return;
            }
            console.error(b);
        };
        function gt() {}
        return lt.Children = {
            map: B,
            forEach: function(b, C, K) {
                B(b, function() {
                    C.apply(this, arguments);
                }, K);
            },
            count: function(b) {
                var C = 0;
                return B(b, function() {
                    C++;
                }), C;
            },
            toArray: function(b) {
                return B(b, function(C) {
                    return C;
                }) || [];
            },
            only: function(b) {
                if (!ft(b)) throw Error("React.Children.only expected to receive a single React element child.");
                return b;
            }
        }, lt.Component = H, lt.Fragment = c, lt.Profiler = o, lt.PureComponent = L, lt.StrictMode = f, lt.Suspense = p, lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, lt.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(b) {
                return j.H.useMemoCache(b);
            }
        }, lt.cache = function(b) {
            return function() {
                return b.apply(null, arguments);
            };
        }, lt.cloneElement = function(b, C, K) {
            if (b == null) throw Error("The argument must be a React element, but you passed " + b + ".");
            var Y = x({}, b.props), J = b.key, st = void 0;
            if (C != null) for(et in C.ref !== void 0 && (st = void 0), C.key !== void 0 && (J = "" + C.key), C)!tt.call(C, et) || et === "key" || et === "__self" || et === "__source" || et === "ref" && C.ref === void 0 || (Y[et] = C[et]);
            var et = arguments.length - 2;
            if (et === 1) Y.children = K;
            else if (1 < et) {
                for(var ee = Array(et), Rt = 0; Rt < et; Rt++)ee[Rt] = arguments[Rt + 2];
                Y.children = ee;
            }
            return ct(b.type, J, void 0, void 0, st, Y);
        }, lt.createContext = function(b) {
            return b = {
                $$typeof: v,
                _currentValue: b,
                _currentValue2: b,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, b.Provider = b, b.Consumer = {
                $$typeof: d,
                _context: b
            }, b;
        }, lt.createElement = function(b, C, K) {
            var Y, J = {}, st = null;
            if (C != null) for(Y in C.key !== void 0 && (st = "" + C.key), C)tt.call(C, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (J[Y] = C[Y]);
            var et = arguments.length - 2;
            if (et === 1) J.children = K;
            else if (1 < et) {
                for(var ee = Array(et), Rt = 0; Rt < et; Rt++)ee[Rt] = arguments[Rt + 2];
                J.children = ee;
            }
            if (b && b.defaultProps) for(Y in et = b.defaultProps, et)J[Y] === void 0 && (J[Y] = et[Y]);
            return ct(b, st, void 0, void 0, null, J);
        }, lt.createRef = function() {
            return {
                current: null
            };
        }, lt.forwardRef = function(b) {
            return {
                $$typeof: g,
                render: b
            };
        }, lt.isValidElement = ft, lt.lazy = function(b) {
            return {
                $$typeof: E,
                _payload: {
                    _status: -1,
                    _result: b
                },
                _init: G
            };
        }, lt.memo = function(b, C) {
            return {
                $$typeof: m,
                type: b,
                compare: C === void 0 ? null : C
            };
        }, lt.startTransition = function(b) {
            var C = j.T, K = {};
            j.T = K;
            try {
                var Y = b(), J = j.S;
                J !== null && J(K, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(gt, F);
            } catch (st) {
                F(st);
            } finally{
                j.T = C;
            }
        }, lt.unstable_useCacheRefresh = function() {
            return j.H.useCacheRefresh();
        }, lt.use = function(b) {
            return j.H.use(b);
        }, lt.useActionState = function(b, C, K) {
            return j.H.useActionState(b, C, K);
        }, lt.useCallback = function(b, C) {
            return j.H.useCallback(b, C);
        }, lt.useContext = function(b) {
            return j.H.useContext(b);
        }, lt.useDebugValue = function() {}, lt.useDeferredValue = function(b, C) {
            return j.H.useDeferredValue(b, C);
        }, lt.useEffect = function(b, C, K) {
            var Y = j.H;
            if (typeof K == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
            return Y.useEffect(b, C);
        }, lt.useId = function() {
            return j.H.useId();
        }, lt.useImperativeHandle = function(b, C, K) {
            return j.H.useImperativeHandle(b, C, K);
        }, lt.useInsertionEffect = function(b, C) {
            return j.H.useInsertionEffect(b, C);
        }, lt.useLayoutEffect = function(b, C) {
            return j.H.useLayoutEffect(b, C);
        }, lt.useMemo = function(b, C) {
            return j.H.useMemo(b, C);
        }, lt.useOptimistic = function(b, C) {
            return j.H.useOptimistic(b, C);
        }, lt.useReducer = function(b, C, K) {
            return j.H.useReducer(b, C, K);
        }, lt.useRef = function(b) {
            return j.H.useRef(b);
        }, lt.useState = function(b) {
            return j.H.useState(b);
        }, lt.useSyncExternalStore = function(b, C, K) {
            return j.H.useSyncExternalStore(b, C, K);
        }, lt.useTransition = function() {
            return j.H.useTransition();
        }, lt.version = "19.1.0", lt;
    }
    var ed;
    function fi() {
        return ed || (ed = 1, zc.exports = Ky()), zc.exports;
    }
    var Bc = {
        exports: {}
    }, Zt = {};
    var ld;
    function Xy() {
        if (ld) return Zt;
        ld = 1;
        var i = fi();
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
            var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: O == null ? null : "" + O,
                children: p,
                containerInfo: m,
                implementation: E
            };
        }
        var v = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function g(p, m) {
            if (p === "font") return "";
            if (typeof m == "string") return m === "use-credentials" ? m : "";
        }
        return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Zt.createPortal = function(p, m) {
            var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11) throw Error(r(299));
            return d(p, m, null, E);
        }, Zt.flushSync = function(p) {
            var m = v.T, E = f.p;
            try {
                if (v.T = null, f.p = 2, p) return p();
            } finally{
                v.T = m, f.p = E, f.d.f();
            }
        }, Zt.preconnect = function(p, m) {
            typeof p == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, f.d.C(p, m));
        }, Zt.prefetchDNS = function(p) {
            typeof p == "string" && f.d.D(p);
        }, Zt.preinit = function(p, m) {
            if (typeof p == "string" && m && typeof m.as == "string") {
                var E = m.as, O = g(E, m.crossOrigin), D = typeof m.integrity == "string" ? m.integrity : void 0, q = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
                E === "style" ? f.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                    crossOrigin: O,
                    integrity: D,
                    fetchPriority: q
                }) : E === "script" && f.d.X(p, {
                    crossOrigin: O,
                    integrity: D,
                    fetchPriority: q,
                    nonce: typeof m.nonce == "string" ? m.nonce : void 0
                });
            }
        }, Zt.preinitModule = function(p, m) {
            if (typeof p == "string") if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var E = g(m.as, m.crossOrigin);
                    f.d.M(p, {
                        crossOrigin: E,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    });
                }
            } else m == null && f.d.M(p);
        }, Zt.preload = function(p, m) {
            if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
                var E = m.as, O = g(E, m.crossOrigin);
                f.d.L(p, E, {
                    crossOrigin: O,
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
        }, Zt.preloadModule = function(p, m) {
            if (typeof p == "string") if (m) {
                var E = g(m.as, m.crossOrigin);
                f.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: E,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                });
            } else f.d.m(p);
        }, Zt.requestFormReset = function(p) {
            f.d.r(p);
        }, Zt.unstable_batchedUpdates = function(p, m) {
            return p(m);
        }, Zt.useFormState = function(p, m, E) {
            return v.H.useFormState(p, m, E);
        }, Zt.useFormStatus = function() {
            return v.H.useHostTransitionStatus();
        }, Zt.version = "19.1.0", Zt;
    }
    var ad;
    Vy = function() {
        if (ad) return Bc.exports;
        ad = 1;
        function i() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (r) {
                console.error(r);
            }
        }
        return i(), Bc.exports = Xy(), Bc.exports;
    };
    var nd;
    function ky() {
        if (nd) return Bn;
        nd = 1;
        var i = jy(), r = fi(), c = Vy();
        function f(t) {
            var e = "https://react.dev/errors/" + t;
            if (1 < arguments.length) {
                e += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var l = 2; l < arguments.length; l++)e += "&args[]=" + encodeURIComponent(arguments[l]);
            }
            return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function o(t) {
            return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
        }
        function d(t) {
            var e = t, l = t;
            if (t.alternate) for(; e.return;)e = e.return;
            else {
                t = e;
                do e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
                while (t);
            }
            return e.tag === 3 ? l : null;
        }
        function v(t) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
            }
            return null;
        }
        function g(t) {
            if (d(t) !== t) throw Error(f(188));
        }
        function p(t) {
            var e = t.alternate;
            if (!e) {
                if (e = d(t), e === null) throw Error(f(188));
                return e !== t ? null : t;
            }
            for(var l = t, a = e;;){
                var n = l.return;
                if (n === null) break;
                var u = n.alternate;
                if (u === null) {
                    if (a = n.return, a !== null) {
                        l = a;
                        continue;
                    }
                    break;
                }
                if (n.child === u.child) {
                    for(u = n.child; u;){
                        if (u === l) return g(n), t;
                        if (u === a) return g(n), e;
                        u = u.sibling;
                    }
                    throw Error(f(188));
                }
                if (l.return !== a.return) l = n, a = u;
                else {
                    for(var s = !1, h = n.child; h;){
                        if (h === l) {
                            s = !0, l = n, a = u;
                            break;
                        }
                        if (h === a) {
                            s = !0, a = n, l = u;
                            break;
                        }
                        h = h.sibling;
                    }
                    if (!s) {
                        for(h = u.child; h;){
                            if (h === l) {
                                s = !0, l = u, a = n;
                                break;
                            }
                            if (h === a) {
                                s = !0, a = u, l = n;
                                break;
                            }
                            h = h.sibling;
                        }
                        if (!s) throw Error(f(189));
                    }
                }
                if (l.alternate !== a) throw Error(f(190));
            }
            if (l.tag !== 3) throw Error(f(188));
            return l.stateNode.current === l ? t : e;
        }
        function m(t) {
            var e = t.tag;
            if (e === 5 || e === 26 || e === 27 || e === 6) return t;
            for(t = t.child; t !== null;){
                if (e = m(t), e !== null) return e;
                t = t.sibling;
            }
            return null;
        }
        var E = Object.assign, O = Symbol.for("react.element"), D = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), Q = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), L = Symbol.for("react.consumer"), V = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), ct = Symbol.for("react.memo"), Et = Symbol.for("react.lazy"), ft = Symbol.for("react.activity"), jt = Symbol.for("react.memo_cache_sentinel"), oe = Symbol.iterator;
        function Kt(t) {
            return t === null || typeof t != "object" ? null : (t = oe && t[oe] || t["@@iterator"], typeof t == "function" ? t : null);
        }
        var Al = Symbol.for("react.client.reference");
        function _l(t) {
            if (t == null) return null;
            if (typeof t == "function") return t.$$typeof === Al ? null : t.displayName || t.name || null;
            if (typeof t == "string") return t;
            switch(t){
                case x:
                    return "Fragment";
                case H:
                    return "Profiler";
                case Q:
                    return "StrictMode";
                case j:
                    return "Suspense";
                case tt:
                    return "SuspenseList";
                case ft:
                    return "Activity";
            }
            if (typeof t == "object") switch(t.$$typeof){
                case q:
                    return "Portal";
                case V:
                    return (t.displayName || "Context") + ".Provider";
                case L:
                    return (t._context.displayName || "Context") + ".Consumer";
                case Z:
                    var e = t.render;
                    return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
                case ct:
                    return e = t.displayName || null, e !== null ? e : _l(t.type) || "Memo";
                case Et:
                    e = t._payload, t = t._init;
                    try {
                        return _l(t(e));
                    } catch  {}
            }
            return null;
        }
        var Xt = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, gt = [], b = -1;
        function C(t) {
            return {
                current: t
            };
        }
        function K(t) {
            0 > b || (t.current = gt[b], gt[b] = null, b--);
        }
        function Y(t, e) {
            b++, gt[b] = t.current, t.current = e;
        }
        var J = C(null), st = C(null), et = C(null), ee = C(null);
        function Rt(t, e) {
            switch(Y(et, e), Y(st, t), Y(J, null), e.nodeType){
                case 9:
                case 11:
                    t = (t = e.documentElement) && (t = t.namespaceURI) ? Oh(t) : 0;
                    break;
                default:
                    if (t = e.tagName, e = e.namespaceURI) e = Oh(e), t = Ah(e, t);
                    else switch(t){
                        case "svg":
                            t = 1;
                            break;
                        case "math":
                            t = 2;
                            break;
                        default:
                            t = 0;
                    }
            }
            K(J), Y(J, t);
        }
        function Ie() {
            K(J), K(st), K(et);
        }
        function hi(t) {
            t.memoizedState !== null && Y(ee, t);
            var e = J.current, l = Ah(e, t.type);
            e !== l && (Y(st, t), Y(J, l));
        }
        function Qn(t) {
            st.current === t && (K(J), K(st)), ee.current === t && (K(ee), _n._currentValue = F);
        }
        var di = Object.prototype.hasOwnProperty, pi = i.unstable_scheduleCallback, mi = i.unstable_cancelCallback, vp = i.unstable_shouldYield, gp = i.unstable_requestPaint, Me = i.unstable_now, bp = i.unstable_getCurrentPriorityLevel, lf = i.unstable_ImmediatePriority, af = i.unstable_UserBlockingPriority, Yn = i.unstable_NormalPriority, Sp = i.unstable_LowPriority, nf = i.unstable_IdlePriority, Ep = i.log, Rp = i.unstable_setDisableYieldValue, Ua = null, le = null;
        function tl(t) {
            if (typeof Ep == "function" && Rp(t), le && typeof le.setStrictMode == "function") try {
                le.setStrictMode(Ua, t);
            } catch  {}
        }
        var ae = Math.clz32 ? Math.clz32 : Ap, Tp = Math.log, Op = Math.LN2;
        function Ap(t) {
            return t >>>= 0, t === 0 ? 32 : 31 - (Tp(t) / Op | 0) | 0;
        }
        var Gn = 256, jn = 4194304;
        function Ml(t) {
            var e = t & 42;
            if (e !== 0) return e;
            switch(t & -t){
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
                    return t & 4194048;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return t & 62914560;
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
                    return t;
            }
        }
        function Kn(t, e, l) {
            var a = t.pendingLanes;
            if (a === 0) return 0;
            var n = 0, u = t.suspendedLanes, s = t.pingedLanes;
            t = t.warmLanes;
            var h = a & 134217727;
            return h !== 0 ? (a = h & ~u, a !== 0 ? n = Ml(a) : (s &= h, s !== 0 ? n = Ml(s) : l || (l = h & ~t, l !== 0 && (n = Ml(l))))) : (h = a & ~u, h !== 0 ? n = Ml(h) : s !== 0 ? n = Ml(s) : l || (l = a & ~t, l !== 0 && (n = Ml(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
        }
        function wa(t, e) {
            return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
        }
        function _p(t, e) {
            switch(t){
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                    return e + 250;
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
                    return e + 5e3;
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
        function uf() {
            var t = Gn;
            return Gn <<= 1, (Gn & 4194048) === 0 && (Gn = 256), t;
        }
        function rf() {
            var t = jn;
            return jn <<= 1, (jn & 62914560) === 0 && (jn = 4194304), t;
        }
        function yi(t) {
            for(var e = [], l = 0; 31 > l; l++)e.push(t);
            return e;
        }
        function Pa(t, e) {
            t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
        }
        function Mp(t, e, l, a, n, u) {
            var s = t.pendingLanes;
            t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
            var h = t.entanglements, y = t.expirationTimes, A = t.hiddenUpdates;
            for(l = s & ~l; 0 < l;){
                var z = 31 - ae(l), w = 1 << z;
                h[z] = 0, y[z] = -1;
                var _ = A[z];
                if (_ !== null) for(A[z] = null, z = 0; z < _.length; z++){
                    var M = _[z];
                    M !== null && (M.lane &= -536870913);
                }
                l &= ~w;
            }
            a !== 0 && cf(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(s & ~e));
        }
        function cf(t, e, l) {
            t.pendingLanes |= e, t.suspendedLanes &= ~e;
            var a = 31 - ae(e);
            t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 4194090;
        }
        function ff(t, e) {
            var l = t.entangledLanes |= e;
            for(t = t.entanglements; l;){
                var a = 31 - ae(l), n = 1 << a;
                n & e | t[a] & e && (t[a] |= e), l &= ~n;
            }
        }
        function vi(t) {
            switch(t){
                case 2:
                    t = 1;
                    break;
                case 8:
                    t = 4;
                    break;
                case 32:
                    t = 16;
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
                    t = 128;
                    break;
                case 268435456:
                    t = 134217728;
                    break;
                default:
                    t = 0;
            }
            return t;
        }
        function gi(t) {
            return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function sf() {
            var t = G.p;
            return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Kh(t.type));
        }
        function Np(t, e) {
            var l = G.p;
            try {
                return G.p = t, e();
            } finally{
                G.p = l;
            }
        }
        var el = Math.random().toString(36).slice(2), Vt = "__reactFiber$" + el, $t = "__reactProps$" + el, Vl = "__reactContainer$" + el, bi = "__reactEvents$" + el, Dp = "__reactListeners$" + el, xp = "__reactHandles$" + el, of = "__reactResources$" + el, qa = "__reactMarker$" + el;
        function Si(t) {
            delete t[Vt], delete t[$t], delete t[bi], delete t[Dp], delete t[xp];
        }
        function kl(t) {
            var e = t[Vt];
            if (e) return e;
            for(var l = t.parentNode; l;){
                if (e = l[Vl] || l[Vt]) {
                    if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for(t = Dh(t); t !== null;){
                        if (l = t[Vt]) return l;
                        t = Dh(t);
                    }
                    return e;
                }
                t = l, l = t.parentNode;
            }
            return null;
        }
        function Zl(t) {
            if (t = t[Vt] || t[Vl]) {
                var e = t.tag;
                if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t;
            }
            return null;
        }
        function Ca(t) {
            var e = t.tag;
            if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
            throw Error(f(33));
        }
        function Jl(t) {
            var e = t[of];
            return e || (e = t[of] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), e;
        }
        function wt(t) {
            t[qa] = !0;
        }
        var hf = new Set, df = {};
        function Nl(t, e) {
            $l(t, e), $l(t + "Capture", e);
        }
        function $l(t, e) {
            for(df[t] = e, t = 0; t < e.length; t++)hf.add(e[t]);
        }
        var zp = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), pf = {}, mf = {};
        function Bp(t) {
            return di.call(mf, t) ? !0 : di.call(pf, t) ? !1 : zp.test(t) ? mf[t] = !0 : (pf[t] = !0, !1);
        }
        function Xn(t, e, l) {
            if (Bp(e)) if (l === null) t.removeAttribute(e);
            else {
                switch(typeof l){
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(e);
                        return;
                    case "boolean":
                        var a = e.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            t.removeAttribute(e);
                            return;
                        }
                }
                t.setAttribute(e, "" + l);
            }
        }
        function Vn(t, e, l) {
            if (l === null) t.removeAttribute(e);
            else {
                switch(typeof l){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        t.removeAttribute(e);
                        return;
                }
                t.setAttribute(e, "" + l);
            }
        }
        function we(t, e, l, a) {
            if (a === null) t.removeAttribute(l);
            else {
                switch(typeof a){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        t.removeAttribute(l);
                        return;
                }
                t.setAttributeNS(e, l, "" + a);
            }
        }
        var Ei, yf;
        function Wl(t) {
            if (Ei === void 0) try {
                throw Error();
            } catch (l) {
                var e = l.stack.trim().match(/\n( *(at )?)/);
                Ei = e && e[1] || "", yf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + Ei + t + yf;
        }
        var Ri = !1;
        function Ti(t, e) {
            if (!t || Ri) return "";
            Ri = !0;
            var l = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var a = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (e) {
                                var w = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(w.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(w, []);
                                    } catch (M) {
                                        var _ = M;
                                    }
                                    Reflect.construct(t, [], w);
                                } else {
                                    try {
                                        w.call();
                                    } catch (M) {
                                        _ = M;
                                    }
                                    t.call(w.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (M) {
                                    _ = M;
                                }
                                (w = t()) && typeof w.catch == "function" && w.catch(function() {});
                            }
                        } catch (M) {
                            if (M && _ && typeof M.stack == "string") return [
                                M.stack,
                                _.stack
                            ];
                        }
                        return [
                            null,
                            null
                        ];
                    }
                };
                a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
                n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var u = a.DetermineComponentFrameRoot(), s = u[0], h = u[1];
                if (s && h) {
                    var y = s.split(`
`), A = h.split(`
`);
                    for(n = a = 0; a < y.length && !y[a].includes("DetermineComponentFrameRoot");)a++;
                    for(; n < A.length && !A[n].includes("DetermineComponentFrameRoot");)n++;
                    if (a === y.length || n === A.length) for(a = y.length - 1, n = A.length - 1; 1 <= a && 0 <= n && y[a] !== A[n];)n--;
                    for(; 1 <= a && 0 <= n; a--, n--)if (y[a] !== A[n]) {
                        if (a !== 1 || n !== 1) do if (a--, n--, 0 > n || y[a] !== A[n]) {
                            var z = `
` + y[a].replace(" at new ", " at ");
                            return t.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", t.displayName)), z;
                        }
                        while (1 <= a && 0 <= n);
                        break;
                    }
                }
            } finally{
                Ri = !1, Error.prepareStackTrace = l;
            }
            return (l = t ? t.displayName || t.name : "") ? Wl(l) : "";
        }
        function Up(t) {
            switch(t.tag){
                case 26:
                case 27:
                case 5:
                    return Wl(t.type);
                case 16:
                    return Wl("Lazy");
                case 13:
                    return Wl("Suspense");
                case 19:
                    return Wl("SuspenseList");
                case 0:
                case 15:
                    return Ti(t.type, !1);
                case 11:
                    return Ti(t.type.render, !1);
                case 1:
                    return Ti(t.type, !0);
                case 31:
                    return Wl("Activity");
                default:
                    return "";
            }
        }
        function vf(t) {
            try {
                var e = "";
                do e += Up(t), t = t.return;
                while (t);
                return e;
            } catch (l) {
                return `
Error generating stack: ` + l.message + `
` + l.stack;
            }
        }
        function he(t) {
            switch(typeof t){
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return t;
                case "object":
                    return t;
                default:
                    return "";
            }
        }
        function gf(t) {
            var e = t.type;
            return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
        }
        function wp(t) {
            var e = gf(t) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e), a = "" + t[e];
            if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
                var n = l.get, u = l.set;
                return Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function() {
                        return n.call(this);
                    },
                    set: function(s) {
                        a = "" + s, u.call(this, s);
                    }
                }), Object.defineProperty(t, e, {
                    enumerable: l.enumerable
                }), {
                    getValue: function() {
                        return a;
                    },
                    setValue: function(s) {
                        a = "" + s;
                    },
                    stopTracking: function() {
                        t._valueTracker = null, delete t[e];
                    }
                };
            }
        }
        function kn(t) {
            t._valueTracker || (t._valueTracker = wp(t));
        }
        function bf(t) {
            if (!t) return !1;
            var e = t._valueTracker;
            if (!e) return !0;
            var l = e.getValue(), a = "";
            return t && (a = gf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
        }
        function Zn(t) {
            if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
            try {
                return t.activeElement || t.body;
            } catch  {
                return t.body;
            }
        }
        var Pp = /[\n"\\]/g;
        function de(t) {
            return t.replace(Pp, function(e) {
                return "\\" + e.charCodeAt(0).toString(16) + " ";
            });
        }
        function Oi(t, e, l, a, n, u, s, h) {
            t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + he(e)) : t.value !== "" + he(e) && (t.value = "" + he(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? Ai(t, s, he(e)) : l != null ? Ai(t, s, he(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + he(h) : t.removeAttribute("name");
        }
        function Sf(t, e, l, a, n, u, s, h) {
            if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
                if (!(u !== "submit" && u !== "reset" || e != null)) return;
                l = l != null ? "" + he(l) : "", e = e != null ? "" + he(e) : l, h || e === t.value || (t.value = e), t.defaultValue = e;
            }
            a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = h ? t.checked : !!a, t.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s);
        }
        function Ai(t, e, l) {
            e === "number" && Zn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
        }
        function Fl(t, e, l, a) {
            if (t = t.options, e) {
                e = {};
                for(var n = 0; n < l.length; n++)e["$" + l[n]] = !0;
                for(l = 0; l < t.length; l++)n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
            } else {
                for(l = "" + he(l), e = null, n = 0; n < t.length; n++){
                    if (t[n].value === l) {
                        t[n].selected = !0, a && (t[n].defaultSelected = !0);
                        return;
                    }
                    e !== null || t[n].disabled || (e = t[n]);
                }
                e !== null && (e.selected = !0);
            }
        }
        function Ef(t, e, l) {
            if (e != null && (e = "" + he(e), e !== t.value && (t.value = e), l == null)) {
                t.defaultValue !== e && (t.defaultValue = e);
                return;
            }
            t.defaultValue = l != null ? "" + he(l) : "";
        }
        function Rf(t, e, l, a) {
            if (e == null) {
                if (a != null) {
                    if (l != null) throw Error(f(92));
                    if (Xt(a)) {
                        if (1 < a.length) throw Error(f(93));
                        a = a[0];
                    }
                    l = a;
                }
                l == null && (l = ""), e = l;
            }
            l = he(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a);
        }
        function Il(t, e) {
            if (e) {
                var l = t.firstChild;
                if (l && l === t.lastChild && l.nodeType === 3) {
                    l.nodeValue = e;
                    return;
                }
            }
            t.textContent = e;
        }
        var qp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Tf(t, e, l) {
            var a = e.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || qp.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
        }
        function Of(t, e, l) {
            if (e != null && typeof e != "object") throw Error(f(62));
            if (t = t.style, l != null) {
                for(var a in l)!l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
                for(var n in e)a = e[n], e.hasOwnProperty(n) && l[n] !== a && Tf(t, n, a);
            } else for(var u in e)e.hasOwnProperty(u) && Tf(t, u, e[u]);
        }
        function _i(t) {
            if (t.indexOf("-") === -1) return !1;
            switch(t){
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
        var Cp = new Map([
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
        ]), Hp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Jn(t) {
            return Hp.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
        }
        var Mi = null;
        function Ni(t) {
            return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
        }
        var ta = null, ea = null;
        function Af(t) {
            var e = Zl(t);
            if (e && (t = e.stateNode)) {
                var l = t[$t] || null;
                t: switch(t = e.stateNode, e.type){
                    case "input":
                        if (Oi(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
                            for(l = t; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + de("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++){
                                var a = l[e];
                                if (a !== t && a.form === t.form) {
                                    var n = a[$t] || null;
                                    if (!n) throw Error(f(90));
                                    Oi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                                }
                            }
                            for(e = 0; e < l.length; e++)a = l[e], a.form === t.form && bf(a);
                        }
                        break t;
                    case "textarea":
                        Ef(t, l.value, l.defaultValue);
                        break t;
                    case "select":
                        e = l.value, e != null && Fl(t, !!l.multiple, e, !1);
                }
            }
        }
        var Di = !1;
        function _f(t, e, l) {
            if (Di) return t(e, l);
            Di = !0;
            try {
                var a = t(e);
                return a;
            } finally{
                if (Di = !1, (ta !== null || ea !== null) && (wu(), ta && (e = ta, t = ea, ea = ta = null, Af(e), t))) for(e = 0; e < t.length; e++)Af(t[e]);
            }
        }
        function Ha(t, e) {
            var l = t.stateNode;
            if (l === null) return null;
            var a = l[$t] || null;
            if (a === null) return null;
            l = a[e];
            t: switch(e){
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
                    (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
                    break t;
                default:
                    t = !1;
            }
            if (t) return null;
            if (l && typeof l != "function") throw Error(f(231, e, typeof l));
            return l;
        }
        var Pe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xi = !1;
        if (Pe) try {
            var La = {};
            Object.defineProperty(La, "passive", {
                get: function() {
                    xi = !0;
                }
            }), window.addEventListener("test", La, La), window.removeEventListener("test", La, La);
        } catch  {
            xi = !1;
        }
        var ll = null, zi = null, $n = null;
        function Mf() {
            if ($n) return $n;
            var t, e = zi, l = e.length, a, n = "value" in ll ? ll.value : ll.textContent, u = n.length;
            for(t = 0; t < l && e[t] === n[t]; t++);
            var s = l - t;
            for(a = 1; a <= s && e[l - a] === n[u - a]; a++);
            return $n = n.slice(t, 1 < a ? 1 - a : void 0);
        }
        function Wn(t) {
            var e = t.keyCode;
            return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
        }
        function Fn() {
            return !0;
        }
        function Nf() {
            return !1;
        }
        function Wt(t) {
            function e(l, a, n, u, s) {
                this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = s, this.currentTarget = null;
                for(var h in t)t.hasOwnProperty(h) && (l = t[h], this[h] = l ? l(u) : u[h]);
                return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Fn : Nf, this.isPropagationStopped = Nf, this;
            }
            return E(e.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Fn);
                },
                stopPropagation: function() {
                    var l = this.nativeEvent;
                    l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Fn);
                },
                persist: function() {},
                isPersistent: Fn
            }), e;
        }
        var Dl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(t) {
                return t.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, In = Wt(Dl), Qa = E({}, Dl, {
            view: 0,
            detail: 0
        }), Lp = Wt(Qa), Bi, Ui, Ya, tu = E({}, Qa, {
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
            getModifierState: Pi,
            button: 0,
            buttons: 0,
            relatedTarget: function(t) {
                return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
            },
            movementX: function(t) {
                return "movementX" in t ? t.movementX : (t !== Ya && (Ya && t.type === "mousemove" ? (Bi = t.screenX - Ya.screenX, Ui = t.screenY - Ya.screenY) : Ui = Bi = 0, Ya = t), Bi);
            },
            movementY: function(t) {
                return "movementY" in t ? t.movementY : Ui;
            }
        }), Df = Wt(tu), Qp = E({}, tu, {
            dataTransfer: 0
        }), Yp = Wt(Qp), Gp = E({}, Qa, {
            relatedTarget: 0
        }), wi = Wt(Gp), jp = E({}, Dl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Kp = Wt(jp), Xp = E({}, Dl, {
            clipboardData: function(t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData;
            }
        }), Vp = Wt(Xp), kp = E({}, Dl, {
            data: 0
        }), xf = Wt(kp), Zp = {
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
        }, Jp = {
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
        }, $p = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function Wp(t) {
            var e = this.nativeEvent;
            return e.getModifierState ? e.getModifierState(t) : (t = $p[t]) ? !!e[t] : !1;
        }
        function Pi() {
            return Wp;
        }
        var Fp = E({}, Qa, {
            key: function(t) {
                if (t.key) {
                    var e = Zp[t.key] || t.key;
                    if (e !== "Unidentified") return e;
                }
                return t.type === "keypress" ? (t = Wn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Jp[t.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Pi,
            charCode: function(t) {
                return t.type === "keypress" ? Wn(t) : 0;
            },
            keyCode: function(t) {
                return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
            },
            which: function(t) {
                return t.type === "keypress" ? Wn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
            }
        }), Ip = Wt(Fp), tm = E({}, tu, {
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
        }), zf = Wt(tm), em = E({}, Qa, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Pi
        }), lm = Wt(em), am = E({}, Dl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), nm = Wt(am), um = E({}, tu, {
            deltaX: function(t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
            },
            deltaY: function(t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), im = Wt(um), rm = E({}, Dl, {
            newState: 0,
            oldState: 0
        }), cm = Wt(rm), fm = [
            9,
            13,
            27,
            32
        ], qi = Pe && "CompositionEvent" in window, Ga = null;
        Pe && "documentMode" in document && (Ga = document.documentMode);
        var sm = Pe && "TextEvent" in window && !Ga, Bf = Pe && (!qi || Ga && 8 < Ga && 11 >= Ga), Uf = " ", wf = !1;
        function Pf(t, e) {
            switch(t){
                case "keyup":
                    return fm.indexOf(e.keyCode) !== -1;
                case "keydown":
                    return e.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function qf(t) {
            return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
        }
        var la = !1;
        function om(t, e) {
            switch(t){
                case "compositionend":
                    return qf(e);
                case "keypress":
                    return e.which !== 32 ? null : (wf = !0, Uf);
                case "textInput":
                    return t = e.data, t === Uf && wf ? null : t;
                default:
                    return null;
            }
        }
        function hm(t, e) {
            if (la) return t === "compositionend" || !qi && Pf(t, e) ? (t = Mf(), $n = zi = ll = null, la = !1, t) : null;
            switch(t){
                case "paste":
                    return null;
                case "keypress":
                    if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                        if (e.char && 1 < e.char.length) return e.char;
                        if (e.which) return String.fromCharCode(e.which);
                    }
                    return null;
                case "compositionend":
                    return Bf && e.locale !== "ko" ? null : e.data;
                default:
                    return null;
            }
        }
        var dm = {
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
        function Cf(t) {
            var e = t && t.nodeName && t.nodeName.toLowerCase();
            return e === "input" ? !!dm[t.type] : e === "textarea";
        }
        function Hf(t, e, l, a) {
            ta ? ea ? ea.push(a) : ea = [
                a
            ] : ta = a, e = Qu(e, "onChange"), 0 < e.length && (l = new In("onChange", "change", null, l, a), t.push({
                event: l,
                listeners: e
            }));
        }
        var ja = null, Ka = null;
        function pm(t) {
            bh(t, 0);
        }
        function eu(t) {
            var e = Ca(t);
            if (bf(e)) return t;
        }
        function Lf(t, e) {
            if (t === "change") return e;
        }
        var Qf = !1;
        if (Pe) {
            var Ci;
            if (Pe) {
                var Hi = "oninput" in document;
                if (!Hi) {
                    var Yf = document.createElement("div");
                    Yf.setAttribute("oninput", "return;"), Hi = typeof Yf.oninput == "function";
                }
                Ci = Hi;
            } else Ci = !1;
            Qf = Ci && (!document.documentMode || 9 < document.documentMode);
        }
        function Gf() {
            ja && (ja.detachEvent("onpropertychange", jf), Ka = ja = null);
        }
        function jf(t) {
            if (t.propertyName === "value" && eu(Ka)) {
                var e = [];
                Hf(e, Ka, t, Ni(t)), _f(pm, e);
            }
        }
        function mm(t, e, l) {
            t === "focusin" ? (Gf(), ja = e, Ka = l, ja.attachEvent("onpropertychange", jf)) : t === "focusout" && Gf();
        }
        function ym(t) {
            if (t === "selectionchange" || t === "keyup" || t === "keydown") return eu(Ka);
        }
        function vm(t, e) {
            if (t === "click") return eu(e);
        }
        function gm(t, e) {
            if (t === "input" || t === "change") return eu(e);
        }
        function bm(t, e) {
            return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
        }
        var ne = typeof Object.is == "function" ? Object.is : bm;
        function Xa(t, e) {
            if (ne(t, e)) return !0;
            if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
            var l = Object.keys(t), a = Object.keys(e);
            if (l.length !== a.length) return !1;
            for(a = 0; a < l.length; a++){
                var n = l[a];
                if (!di.call(e, n) || !ne(t[n], e[n])) return !1;
            }
            return !0;
        }
        function Kf(t) {
            for(; t && t.firstChild;)t = t.firstChild;
            return t;
        }
        function Xf(t, e) {
            var l = Kf(t);
            t = 0;
            for(var a; l;){
                if (l.nodeType === 3) {
                    if (a = t + l.textContent.length, t <= e && a >= e) return {
                        node: l,
                        offset: e - t
                    };
                    t = a;
                }
                t: {
                    for(; l;){
                        if (l.nextSibling) {
                            l = l.nextSibling;
                            break t;
                        }
                        l = l.parentNode;
                    }
                    l = void 0;
                }
                l = Kf(l);
            }
        }
        function Vf(t, e) {
            return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Vf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
        }
        function kf(t) {
            t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
            for(var e = Zn(t.document); e instanceof t.HTMLIFrameElement;){
                try {
                    var l = typeof e.contentWindow.location.href == "string";
                } catch  {
                    l = !1;
                }
                if (l) t = e.contentWindow;
                else break;
                e = Zn(t.document);
            }
            return e;
        }
        function Li(t) {
            var e = t && t.nodeName && t.nodeName.toLowerCase();
            return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
        }
        var Sm = Pe && "documentMode" in document && 11 >= document.documentMode, aa = null, Qi = null, Va = null, Yi = !1;
        function Zf(t, e, l) {
            var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            Yi || aa == null || aa !== Zn(a) || (a = aa, "selectionStart" in a && Li(a) ? a = {
                start: a.selectionStart,
                end: a.selectionEnd
            } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
                anchorNode: a.anchorNode,
                anchorOffset: a.anchorOffset,
                focusNode: a.focusNode,
                focusOffset: a.focusOffset
            }), Va && Xa(Va, a) || (Va = a, a = Qu(Qi, "onSelect"), 0 < a.length && (e = new In("onSelect", "select", null, e, l), t.push({
                event: e,
                listeners: a
            }), e.target = aa)));
        }
        function xl(t, e) {
            var l = {};
            return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
        }
        var na = {
            animationend: xl("Animation", "AnimationEnd"),
            animationiteration: xl("Animation", "AnimationIteration"),
            animationstart: xl("Animation", "AnimationStart"),
            transitionrun: xl("Transition", "TransitionRun"),
            transitionstart: xl("Transition", "TransitionStart"),
            transitioncancel: xl("Transition", "TransitionCancel"),
            transitionend: xl("Transition", "TransitionEnd")
        }, Gi = {}, Jf = {};
        Pe && (Jf = document.createElement("div").style, "AnimationEvent" in window || (delete na.animationend.animation, delete na.animationiteration.animation, delete na.animationstart.animation), "TransitionEvent" in window || delete na.transitionend.transition);
        function zl(t) {
            if (Gi[t]) return Gi[t];
            if (!na[t]) return t;
            var e = na[t], l;
            for(l in e)if (e.hasOwnProperty(l) && l in Jf) return Gi[t] = e[l];
            return t;
        }
        var $f = zl("animationend"), Wf = zl("animationiteration"), Ff = zl("animationstart"), Em = zl("transitionrun"), Rm = zl("transitionstart"), Tm = zl("transitioncancel"), If = zl("transitionend"), ts = new Map, ji = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        ji.push("scrollEnd");
        function Te(t, e) {
            ts.set(t, e), Nl(e, [
                t
            ]);
        }
        var es = new WeakMap;
        function pe(t, e) {
            if (typeof t == "object" && t !== null) {
                var l = es.get(t);
                return l !== void 0 ? l : (e = {
                    value: t,
                    source: e,
                    stack: vf(e)
                }, es.set(t, e), e);
            }
            return {
                value: t,
                source: e,
                stack: vf(e)
            };
        }
        var me = [], ua = 0, Ki = 0;
        function lu() {
            for(var t = ua, e = Ki = ua = 0; e < t;){
                var l = me[e];
                me[e++] = null;
                var a = me[e];
                me[e++] = null;
                var n = me[e];
                me[e++] = null;
                var u = me[e];
                if (me[e++] = null, a !== null && n !== null) {
                    var s = a.pending;
                    s === null ? n.next = n : (n.next = s.next, s.next = n), a.pending = n;
                }
                u !== 0 && ls(l, n, u);
            }
        }
        function au(t, e, l, a) {
            me[ua++] = t, me[ua++] = e, me[ua++] = l, me[ua++] = a, Ki |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
        }
        function Xi(t, e, l, a) {
            return au(t, e, l, a), nu(t);
        }
        function ia(t, e) {
            return au(t, null, null, e), nu(t);
        }
        function ls(t, e, l) {
            t.lanes |= l;
            var a = t.alternate;
            a !== null && (a.lanes |= l);
            for(var n = !1, u = t.return; u !== null;)u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
            return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ae(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [
                e
            ] : a.push(e), e.lane = l | 536870912), u) : null;
        }
        function nu(t) {
            if (50 < gn) throw gn = 0, Wr = null, Error(f(185));
            for(var e = t.return; e !== null;)t = e, e = t.return;
            return t.tag === 3 ? t.stateNode : null;
        }
        var ra = {};
        function Om(t, e, l, a) {
            this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function ue(t, e, l, a) {
            return new Om(t, e, l, a);
        }
        function Vi(t) {
            return t = t.prototype, !(!t || !t.isReactComponent);
        }
        function qe(t, e) {
            var l = t.alternate;
            return l === null ? (l = ue(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
            }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
        }
        function as(t, e) {
            t.flags &= 65011714;
            var l = t.alternate;
            return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
            }), t;
        }
        function uu(t, e, l, a, n, u) {
            var s = 0;
            if (a = t, typeof t == "function") Vi(t) && (s = 1);
            else if (typeof t == "string") s = _y(t, l, J.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
            else t: switch(t){
                case ft:
                    return t = ue(31, l, e, n), t.elementType = ft, t.lanes = u, t;
                case x:
                    return Bl(l.children, n, u, e);
                case Q:
                    s = 8, n |= 24;
                    break;
                case H:
                    return t = ue(12, l, e, n | 2), t.elementType = H, t.lanes = u, t;
                case j:
                    return t = ue(13, l, e, n), t.elementType = j, t.lanes = u, t;
                case tt:
                    return t = ue(19, l, e, n), t.elementType = tt, t.lanes = u, t;
                default:
                    if (typeof t == "object" && t !== null) switch(t.$$typeof){
                        case P:
                        case V:
                            s = 10;
                            break t;
                        case L:
                            s = 9;
                            break t;
                        case Z:
                            s = 11;
                            break t;
                        case ct:
                            s = 14;
                            break t;
                        case Et:
                            s = 16, a = null;
                            break t;
                    }
                    s = 29, l = Error(f(130, t === null ? "null" : typeof t, "")), a = null;
            }
            return e = ue(s, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
        }
        function Bl(t, e, l, a) {
            return t = ue(7, t, a, e), t.lanes = l, t;
        }
        function ki(t, e, l) {
            return t = ue(6, t, null, e), t.lanes = l, t;
        }
        function Zi(t, e, l) {
            return e = ue(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
                containerInfo: t.containerInfo,
                pendingChildren: null,
                implementation: t.implementation
            }, e;
        }
        var ca = [], fa = 0, iu = null, ru = 0, ye = [], ve = 0, Ul = null, Ce = 1, He = "";
        function wl(t, e) {
            ca[fa++] = ru, ca[fa++] = iu, iu = t, ru = e;
        }
        function ns(t, e, l) {
            ye[ve++] = Ce, ye[ve++] = He, ye[ve++] = Ul, Ul = t;
            var a = Ce;
            t = He;
            var n = 32 - ae(a) - 1;
            a &= ~(1 << n), l += 1;
            var u = 32 - ae(e) + n;
            if (30 < u) {
                var s = n - n % 5;
                u = (a & (1 << s) - 1).toString(32), a >>= s, n -= s, Ce = 1 << 32 - ae(e) + n | l << n | a, He = u + t;
            } else Ce = 1 << u | l << n | a, He = t;
        }
        function Ji(t) {
            t.return !== null && (wl(t, 1), ns(t, 1, 0));
        }
        function $i(t) {
            for(; t === iu;)iu = ca[--fa], ca[fa] = null, ru = ca[--fa], ca[fa] = null;
            for(; t === Ul;)Ul = ye[--ve], ye[ve] = null, He = ye[--ve], ye[ve] = null, Ce = ye[--ve], ye[ve] = null;
        }
        var Jt = null, _t = null, ht = !1, Pl = null, Ne = !1, Wi = Error(f(519));
        function ql(t) {
            var e = Error(f(418, ""));
            throw Ja(pe(e, t)), Wi;
        }
        function us(t) {
            var e = t.stateNode, l = t.type, a = t.memoizedProps;
            switch(e[Vt] = t, e[$t] = a, l){
                case "dialog":
                    it("cancel", e), it("close", e);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    it("load", e);
                    break;
                case "video":
                case "audio":
                    for(l = 0; l < Sn.length; l++)it(Sn[l], e);
                    break;
                case "source":
                    it("error", e);
                    break;
                case "img":
                case "image":
                case "link":
                    it("error", e), it("load", e);
                    break;
                case "details":
                    it("toggle", e);
                    break;
                case "input":
                    it("invalid", e), Sf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), kn(e);
                    break;
                case "select":
                    it("invalid", e);
                    break;
                case "textarea":
                    it("invalid", e), Rf(e, a.value, a.defaultValue, a.children), kn(e);
            }
            l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || Th(e.textContent, l) ? (a.popover != null && (it("beforetoggle", e), it("toggle", e)), a.onScroll != null && it("scroll", e), a.onScrollEnd != null && it("scrollend", e), a.onClick != null && (e.onclick = Yu), e = !0) : e = !1, e || ql(t);
        }
        function is(t) {
            for(Jt = t.return; Jt;)switch(Jt.tag){
                case 5:
                case 13:
                    Ne = !1;
                    return;
                case 27:
                case 3:
                    Ne = !0;
                    return;
                default:
                    Jt = Jt.return;
            }
        }
        function ka(t) {
            if (t !== Jt) return !1;
            if (!ht) return is(t), ht = !0, !1;
            var e = t.tag, l;
            if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || dc(t.type, t.memoizedProps)), l = !l), l && _t && ql(t), is(t), e === 13) {
                if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
                t: {
                    for(t = t.nextSibling, e = 0; t;){
                        if (t.nodeType === 8) if (l = t.data, l === "/$") {
                            if (e === 0) {
                                _t = Ae(t.nextSibling);
                                break t;
                            }
                            e--;
                        } else l !== "$" && l !== "$!" && l !== "$?" || e++;
                        t = t.nextSibling;
                    }
                    _t = null;
                }
            } else e === 27 ? (e = _t, gl(t.type) ? (t = vc, vc = null, _t = t) : _t = e) : _t = Jt ? Ae(t.stateNode.nextSibling) : null;
            return !0;
        }
        function Za() {
            _t = Jt = null, ht = !1;
        }
        function rs() {
            var t = Pl;
            return t !== null && (te === null ? te = t : te.push.apply(te, t), Pl = null), t;
        }
        function Ja(t) {
            Pl === null ? Pl = [
                t
            ] : Pl.push(t);
        }
        var Fi = C(null), Cl = null, Le = null;
        function al(t, e, l) {
            Y(Fi, e._currentValue), e._currentValue = l;
        }
        function Qe(t) {
            t._currentValue = Fi.current, K(Fi);
        }
        function Ii(t, e, l) {
            for(; t !== null;){
                var a = t.alternate;
                if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
                t = t.return;
            }
        }
        function tr(t, e, l, a) {
            var n = t.child;
            for(n !== null && (n.return = t); n !== null;){
                var u = n.dependencies;
                if (u !== null) {
                    var s = n.child;
                    u = u.firstContext;
                    t: for(; u !== null;){
                        var h = u;
                        u = n;
                        for(var y = 0; y < e.length; y++)if (h.context === e[y]) {
                            u.lanes |= l, h = u.alternate, h !== null && (h.lanes |= l), Ii(u.return, l, t), a || (s = null);
                            break t;
                        }
                        u = h.next;
                    }
                } else if (n.tag === 18) {
                    if (s = n.return, s === null) throw Error(f(341));
                    s.lanes |= l, u = s.alternate, u !== null && (u.lanes |= l), Ii(s, l, t), s = null;
                } else s = n.child;
                if (s !== null) s.return = n;
                else for(s = n; s !== null;){
                    if (s === t) {
                        s = null;
                        break;
                    }
                    if (n = s.sibling, n !== null) {
                        n.return = s.return, s = n;
                        break;
                    }
                    s = s.return;
                }
                n = s;
            }
        }
        function $a(t, e, l, a) {
            t = null;
            for(var n = e, u = !1; n !== null;){
                if (!u) {
                    if ((n.flags & 524288) !== 0) u = !0;
                    else if ((n.flags & 262144) !== 0) break;
                }
                if (n.tag === 10) {
                    var s = n.alternate;
                    if (s === null) throw Error(f(387));
                    if (s = s.memoizedProps, s !== null) {
                        var h = n.type;
                        ne(n.pendingProps.value, s.value) || (t !== null ? t.push(h) : t = [
                            h
                        ]);
                    }
                } else if (n === ee.current) {
                    if (s = n.alternate, s === null) throw Error(f(387));
                    s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(_n) : t = [
                        _n
                    ]);
                }
                n = n.return;
            }
            t !== null && tr(e, t, l, a), e.flags |= 262144;
        }
        function cu(t) {
            for(t = t.firstContext; t !== null;){
                if (!ne(t.context._currentValue, t.memoizedValue)) return !0;
                t = t.next;
            }
            return !1;
        }
        function Hl(t) {
            Cl = t, Le = null, t = t.dependencies, t !== null && (t.firstContext = null);
        }
        function kt(t) {
            return cs(Cl, t);
        }
        function fu(t, e) {
            return Cl === null && Hl(t), cs(t, e);
        }
        function cs(t, e) {
            var l = e._currentValue;
            if (e = {
                context: e,
                memoizedValue: l,
                next: null
            }, Le === null) {
                if (t === null) throw Error(f(308));
                Le = e, t.dependencies = {
                    lanes: 0,
                    firstContext: e
                }, t.flags |= 524288;
            } else Le = Le.next = e;
            return l;
        }
        var Am = typeof AbortController < "u" ? AbortController : function() {
            var t = [], e = this.signal = {
                aborted: !1,
                addEventListener: function(l, a) {
                    t.push(a);
                }
            };
            this.abort = function() {
                e.aborted = !0, t.forEach(function(l) {
                    return l();
                });
            };
        }, _m = i.unstable_scheduleCallback, Mm = i.unstable_NormalPriority, Bt = {
            $$typeof: V,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function er() {
            return {
                controller: new Am,
                data: new Map,
                refCount: 0
            };
        }
        function Wa(t) {
            t.refCount--, t.refCount === 0 && _m(Mm, function() {
                t.controller.abort();
            });
        }
        var Fa = null, lr = 0, sa = 0, oa = null;
        function Nm(t, e) {
            if (Fa === null) {
                var l = Fa = [];
                lr = 0, sa = nc(), oa = {
                    status: "pending",
                    value: void 0,
                    then: function(a) {
                        l.push(a);
                    }
                };
            }
            return lr++, e.then(fs, fs), e;
        }
        function fs() {
            if (--lr === 0 && Fa !== null) {
                oa !== null && (oa.status = "fulfilled");
                var t = Fa;
                Fa = null, sa = 0, oa = null;
                for(var e = 0; e < t.length; e++)(0, t[e])();
            }
        }
        function Dm(t, e) {
            var l = [], a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(n) {
                    l.push(n);
                }
            };
            return t.then(function() {
                a.status = "fulfilled", a.value = e;
                for(var n = 0; n < l.length; n++)(0, l[n])(e);
            }, function(n) {
                for(a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)(0, l[n])(void 0);
            }), a;
        }
        var ss = B.S;
        B.S = function(t, e) {
            typeof e == "object" && e !== null && typeof e.then == "function" && Nm(t, e), ss !== null && ss(t, e);
        };
        var Ll = C(null);
        function ar() {
            var t = Ll.current;
            return t !== null ? t : St.pooledCache;
        }
        function su(t, e) {
            e === null ? Y(Ll, Ll.current) : Y(Ll, e.pool);
        }
        function os() {
            var t = ar();
            return t === null ? null : {
                parent: Bt._currentValue,
                pool: t
            };
        }
        var Ia = Error(f(460)), hs = Error(f(474)), ou = Error(f(542)), nr = {
            then: function() {}
        };
        function ds(t) {
            return t = t.status, t === "fulfilled" || t === "rejected";
        }
        function hu() {}
        function ps(t, e, l) {
            switch(l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(hu, hu), e = l), e.status){
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw t = e.reason, ys(t), t;
                default:
                    if (typeof e.status == "string") e.then(hu, hu);
                    else {
                        if (t = St, t !== null && 100 < t.shellSuspendCounter) throw Error(f(482));
                        t = e, t.status = "pending", t.then(function(a) {
                            if (e.status === "pending") {
                                var n = e;
                                n.status = "fulfilled", n.value = a;
                            }
                        }, function(a) {
                            if (e.status === "pending") {
                                var n = e;
                                n.status = "rejected", n.reason = a;
                            }
                        });
                    }
                    switch(e.status){
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw t = e.reason, ys(t), t;
                    }
                    throw tn = e, Ia;
            }
        }
        var tn = null;
        function ms() {
            if (tn === null) throw Error(f(459));
            var t = tn;
            return tn = null, t;
        }
        function ys(t) {
            if (t === Ia || t === ou) throw Error(f(483));
        }
        var nl = !1;
        function ur(t) {
            t.updateQueue = {
                baseState: t.memoizedState,
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
        function ir(t, e) {
            t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                callbacks: null
            });
        }
        function ul(t) {
            return {
                lane: t,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function il(t, e, l) {
            var a = t.updateQueue;
            if (a === null) return null;
            if (a = a.shared, (dt & 2) !== 0) {
                var n = a.pending;
                return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = nu(t), ls(t, null, l), e;
            }
            return au(t, a, e, l), nu(t);
        }
        function en(t, e, l) {
            if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
                var a = e.lanes;
                a &= t.pendingLanes, l |= a, e.lanes = l, ff(t, l);
            }
        }
        function rr(t, e) {
            var l = t.updateQueue, a = t.alternate;
            if (a !== null && (a = a.updateQueue, l === a)) {
                var n = null, u = null;
                if (l = l.firstBaseUpdate, l !== null) {
                    do {
                        var s = {
                            lane: l.lane,
                            tag: l.tag,
                            payload: l.payload,
                            callback: null,
                            next: null
                        };
                        u === null ? n = u = s : u = u.next = s, l = l.next;
                    }while (l !== null);
                    u === null ? n = u = e : u = u.next = e;
                } else n = u = e;
                l = {
                    baseState: a.baseState,
                    firstBaseUpdate: n,
                    lastBaseUpdate: u,
                    shared: a.shared,
                    callbacks: a.callbacks
                }, t.updateQueue = l;
                return;
            }
            t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
        }
        var cr = !1;
        function ln() {
            if (cr) {
                var t = oa;
                if (t !== null) throw t;
            }
        }
        function an(t, e, l, a) {
            cr = !1;
            var n = t.updateQueue;
            nl = !1;
            var u = n.firstBaseUpdate, s = n.lastBaseUpdate, h = n.shared.pending;
            if (h !== null) {
                n.shared.pending = null;
                var y = h, A = y.next;
                y.next = null, s === null ? u = A : s.next = A, s = y;
                var z = t.alternate;
                z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== s && (h === null ? z.firstBaseUpdate = A : h.next = A, z.lastBaseUpdate = y));
            }
            if (u !== null) {
                var w = n.baseState;
                s = 0, z = A = y = null, h = u;
                do {
                    var _ = h.lane & -536870913, M = _ !== h.lane;
                    if (M ? (rt & _) === _ : (a & _) === _) {
                        _ !== 0 && _ === sa && (cr = !0), z !== null && (z = z.next = {
                            lane: 0,
                            tag: h.tag,
                            payload: h.payload,
                            callback: null,
                            next: null
                        });
                        t: {
                            var I = t, $ = h;
                            _ = e;
                            var vt = l;
                            switch($.tag){
                                case 1:
                                    if (I = $.payload, typeof I == "function") {
                                        w = I.call(vt, w, _);
                                        break t;
                                    }
                                    w = I;
                                    break t;
                                case 3:
                                    I.flags = I.flags & -65537 | 128;
                                case 0:
                                    if (I = $.payload, _ = typeof I == "function" ? I.call(vt, w, _) : I, _ == null) break t;
                                    w = E({}, w, _);
                                    break t;
                                case 2:
                                    nl = !0;
                            }
                        }
                        _ = h.callback, _ !== null && (t.flags |= 64, M && (t.flags |= 8192), M = n.callbacks, M === null ? n.callbacks = [
                            _
                        ] : M.push(_));
                    } else M = {
                        lane: _,
                        tag: h.tag,
                        payload: h.payload,
                        callback: h.callback,
                        next: null
                    }, z === null ? (A = z = M, y = w) : z = z.next = M, s |= _;
                    if (h = h.next, h === null) {
                        if (h = n.shared.pending, h === null) break;
                        M = h, h = M.next, M.next = null, n.lastBaseUpdate = M, n.shared.pending = null;
                    }
                }while (!0);
                z === null && (y = w), n.baseState = y, n.firstBaseUpdate = A, n.lastBaseUpdate = z, u === null && (n.shared.lanes = 0), pl |= s, t.lanes = s, t.memoizedState = w;
            }
        }
        function vs(t, e) {
            if (typeof t != "function") throw Error(f(191, t));
            t.call(e);
        }
        function gs(t, e) {
            var l = t.callbacks;
            if (l !== null) for(t.callbacks = null, t = 0; t < l.length; t++)vs(l[t], e);
        }
        var ha = C(null), du = C(0);
        function bs(t, e) {
            t = ke, Y(du, t), Y(ha, e), ke = t | e.baseLanes;
        }
        function fr() {
            Y(du, ke), Y(ha, ha.current);
        }
        function sr() {
            ke = du.current, K(ha), K(du);
        }
        var rl = 0, at = null, mt = null, xt = null, pu = !1, da = !1, Ql = !1, mu = 0, nn = 0, pa = null, xm = 0;
        function Nt() {
            throw Error(f(321));
        }
        function or(t, e) {
            if (e === null) return !1;
            for(var l = 0; l < e.length && l < t.length; l++)if (!ne(t[l], e[l])) return !1;
            return !0;
        }
        function hr(t, e, l, a, n, u) {
            return rl = u, at = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, B.H = t === null || t.memoizedState === null ? lo : ao, Ql = !1, u = l(a, n), Ql = !1, da && (u = Es(e, l, a, n)), Ss(t), u;
        }
        function Ss(t) {
            B.H = Eu;
            var e = mt !== null && mt.next !== null;
            if (rl = 0, xt = mt = at = null, pu = !1, nn = 0, pa = null, e) throw Error(f(300));
            t === null || Pt || (t = t.dependencies, t !== null && cu(t) && (Pt = !0));
        }
        function Es(t, e, l, a) {
            at = t;
            var n = 0;
            do {
                if (da && (pa = null), nn = 0, da = !1, 25 <= n) throw Error(f(301));
                if (n += 1, xt = mt = null, t.updateQueue != null) {
                    var u = t.updateQueue;
                    u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
                }
                B.H = Cm, u = e(l, a);
            }while (da);
            return u;
        }
        function zm() {
            var t = B.H, e = t.useState()[0];
            return e = typeof e.then == "function" ? un(e) : e, t = t.useState()[0], (mt !== null ? mt.memoizedState : null) !== t && (at.flags |= 1024), e;
        }
        function dr() {
            var t = mu !== 0;
            return mu = 0, t;
        }
        function pr(t, e, l) {
            e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
        }
        function mr(t) {
            if (pu) {
                for(t = t.memoizedState; t !== null;){
                    var e = t.queue;
                    e !== null && (e.pending = null), t = t.next;
                }
                pu = !1;
            }
            rl = 0, xt = mt = at = null, da = !1, nn = mu = 0, pa = null;
        }
        function Ft() {
            var t = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return xt === null ? at.memoizedState = xt = t : xt = xt.next = t, xt;
        }
        function zt() {
            if (mt === null) {
                var t = at.alternate;
                t = t !== null ? t.memoizedState : null;
            } else t = mt.next;
            var e = xt === null ? at.memoizedState : xt.next;
            if (e !== null) xt = e, mt = t;
            else {
                if (t === null) throw at.alternate === null ? Error(f(467)) : Error(f(310));
                mt = t, t = {
                    memoizedState: mt.memoizedState,
                    baseState: mt.baseState,
                    baseQueue: mt.baseQueue,
                    queue: mt.queue,
                    next: null
                }, xt === null ? at.memoizedState = xt = t : xt = xt.next = t;
            }
            return xt;
        }
        function yr() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function un(t) {
            var e = nn;
            return nn += 1, pa === null && (pa = []), t = ps(pa, t, e), e = at, (xt === null ? e.memoizedState : xt.next) === null && (e = e.alternate, B.H = e === null || e.memoizedState === null ? lo : ao), t;
        }
        function yu(t) {
            if (t !== null && typeof t == "object") {
                if (typeof t.then == "function") return un(t);
                if (t.$$typeof === V) return kt(t);
            }
            throw Error(f(438, String(t)));
        }
        function vr(t) {
            var e = null, l = at.updateQueue;
            if (l !== null && (e = l.memoCache), e == null) {
                var a = at.alternate;
                a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
                    data: a.data.map(function(n) {
                        return n.slice();
                    }),
                    index: 0
                })));
            }
            if (e == null && (e = {
                data: [],
                index: 0
            }), l === null && (l = yr(), at.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for(l = e.data[e.index] = Array(t), a = 0; a < t; a++)l[a] = jt;
            return e.index++, l;
        }
        function Ye(t, e) {
            return typeof e == "function" ? e(t) : e;
        }
        function vu(t) {
            var e = zt();
            return gr(e, mt, t);
        }
        function gr(t, e, l) {
            var a = t.queue;
            if (a === null) throw Error(f(311));
            a.lastRenderedReducer = l;
            var n = t.baseQueue, u = a.pending;
            if (u !== null) {
                if (n !== null) {
                    var s = n.next;
                    n.next = u.next, u.next = s;
                }
                e.baseQueue = n = u, a.pending = null;
            }
            if (u = t.baseState, n === null) t.memoizedState = u;
            else {
                e = n.next;
                var h = s = null, y = null, A = e, z = !1;
                do {
                    var w = A.lane & -536870913;
                    if (w !== A.lane ? (rt & w) === w : (rl & w) === w) {
                        var _ = A.revertLane;
                        if (_ === 0) y !== null && (y = y.next = {
                            lane: 0,
                            revertLane: 0,
                            action: A.action,
                            hasEagerState: A.hasEagerState,
                            eagerState: A.eagerState,
                            next: null
                        }), w === sa && (z = !0);
                        else if ((rl & _) === _) {
                            A = A.next, _ === sa && (z = !0);
                            continue;
                        } else w = {
                            lane: 0,
                            revertLane: A.revertLane,
                            action: A.action,
                            hasEagerState: A.hasEagerState,
                            eagerState: A.eagerState,
                            next: null
                        }, y === null ? (h = y = w, s = u) : y = y.next = w, at.lanes |= _, pl |= _;
                        w = A.action, Ql && l(u, w), u = A.hasEagerState ? A.eagerState : l(u, w);
                    } else _ = {
                        lane: w,
                        revertLane: A.revertLane,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    }, y === null ? (h = y = _, s = u) : y = y.next = _, at.lanes |= w, pl |= w;
                    A = A.next;
                }while (A !== null && A !== e);
                if (y === null ? s = u : y.next = h, !ne(u, t.memoizedState) && (Pt = !0, z && (l = oa, l !== null))) throw l;
                t.memoizedState = u, t.baseState = s, t.baseQueue = y, a.lastRenderedState = u;
            }
            return n === null && (a.lanes = 0), [
                t.memoizedState,
                a.dispatch
            ];
        }
        function br(t) {
            var e = zt(), l = e.queue;
            if (l === null) throw Error(f(311));
            l.lastRenderedReducer = t;
            var a = l.dispatch, n = l.pending, u = e.memoizedState;
            if (n !== null) {
                l.pending = null;
                var s = n = n.next;
                do u = t(u, s.action), s = s.next;
                while (s !== n);
                ne(u, e.memoizedState) || (Pt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
            }
            return [
                u,
                a
            ];
        }
        function Rs(t, e, l) {
            var a = at, n = zt(), u = ht;
            if (u) {
                if (l === void 0) throw Error(f(407));
                l = l();
            } else l = e();
            var s = !ne((mt || n).memoizedState, l);
            s && (n.memoizedState = l, Pt = !0), n = n.queue;
            var h = As.bind(null, a, n, t);
            if (rn(2048, 8, h, [
                t
            ]), n.getSnapshot !== e || s || xt !== null && xt.memoizedState.tag & 1) {
                if (a.flags |= 2048, ma(9, gu(), Os.bind(null, a, n, l, e), null), St === null) throw Error(f(349));
                u || (rl & 124) !== 0 || Ts(a, e, l);
            }
            return l;
        }
        function Ts(t, e, l) {
            t.flags |= 16384, t = {
                getSnapshot: e,
                value: l
            }, e = at.updateQueue, e === null ? (e = yr(), at.updateQueue = e, e.stores = [
                t
            ]) : (l = e.stores, l === null ? e.stores = [
                t
            ] : l.push(t));
        }
        function Os(t, e, l, a) {
            e.value = l, e.getSnapshot = a, _s(e) && Ms(t);
        }
        function As(t, e, l) {
            return l(function() {
                _s(e) && Ms(t);
            });
        }
        function _s(t) {
            var e = t.getSnapshot;
            t = t.value;
            try {
                var l = e();
                return !ne(t, l);
            } catch  {
                return !0;
            }
        }
        function Ms(t) {
            var e = ia(t, 2);
            e !== null && se(e, t, 2);
        }
        function Sr(t) {
            var e = Ft();
            if (typeof t == "function") {
                var l = t;
                if (t = l(), Ql) {
                    tl(!0);
                    try {
                        l();
                    } finally{
                        tl(!1);
                    }
                }
            }
            return e.memoizedState = e.baseState = t, e.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ye,
                lastRenderedState: t
            }, e;
        }
        function Ns(t, e, l, a) {
            return t.baseState = l, gr(t, mt, typeof a == "function" ? a : Ye);
        }
        function Bm(t, e, l, a, n) {
            if (Su(t)) throw Error(f(485));
            if (t = e.action, t !== null) {
                var u = {
                    payload: n,
                    action: t,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(s) {
                        u.listeners.push(s);
                    }
                };
                B.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, Ds(e, u)) : (u.next = l.next, e.pending = l.next = u);
            }
        }
        function Ds(t, e) {
            var l = e.action, a = e.payload, n = t.state;
            if (e.isTransition) {
                var u = B.T, s = {};
                B.T = s;
                try {
                    var h = l(n, a), y = B.S;
                    y !== null && y(s, h), xs(t, e, h);
                } catch (A) {
                    Er(t, e, A);
                } finally{
                    B.T = u;
                }
            } else try {
                u = l(n, a), xs(t, e, u);
            } catch (A) {
                Er(t, e, A);
            }
        }
        function xs(t, e, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
                zs(t, e, a);
            }, function(a) {
                return Er(t, e, a);
            }) : zs(t, e, l);
        }
        function zs(t, e, l) {
            e.status = "fulfilled", e.value = l, Bs(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Ds(t, l)));
        }
        function Er(t, e, l) {
            var a = t.pending;
            if (t.pending = null, a !== null) {
                a = a.next;
                do e.status = "rejected", e.reason = l, Bs(e), e = e.next;
                while (e !== a);
            }
            t.action = null;
        }
        function Bs(t) {
            t = t.listeners;
            for(var e = 0; e < t.length; e++)(0, t[e])();
        }
        function Us(t, e) {
            return e;
        }
        function ws(t, e) {
            if (ht) {
                var l = St.formState;
                if (l !== null) {
                    t: {
                        var a = at;
                        if (ht) {
                            if (_t) {
                                e: {
                                    for(var n = _t, u = Ne; n.nodeType !== 8;){
                                        if (!u) {
                                            n = null;
                                            break e;
                                        }
                                        if (n = Ae(n.nextSibling), n === null) {
                                            n = null;
                                            break e;
                                        }
                                    }
                                    u = n.data, n = u === "F!" || u === "F" ? n : null;
                                }
                                if (n) {
                                    _t = Ae(n.nextSibling), a = n.data === "F!";
                                    break t;
                                }
                            }
                            ql(a);
                        }
                        a = !1;
                    }
                    a && (e = l[0]);
                }
            }
            return l = Ft(), l.memoizedState = l.baseState = e, a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Us,
                lastRenderedState: e
            }, l.queue = a, l = Is.bind(null, at, a), a.dispatch = l, a = Sr(!1), u = _r.bind(null, at, !1, a.queue), a = Ft(), n = {
                state: e,
                dispatch: null,
                action: t,
                pending: null
            }, a.queue = n, l = Bm.bind(null, at, n, u, l), n.dispatch = l, a.memoizedState = t, [
                e,
                l,
                !1
            ];
        }
        function Ps(t) {
            var e = zt();
            return qs(e, mt, t);
        }
        function qs(t, e, l) {
            if (e = gr(t, e, Us)[0], t = vu(Ye)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
                var a = un(e);
            } catch (s) {
                throw s === Ia ? ou : s;
            }
            else a = e;
            e = zt();
            var n = e.queue, u = n.dispatch;
            return l !== e.memoizedState && (at.flags |= 2048, ma(9, gu(), Um.bind(null, n, l), null)), [
                a,
                u,
                t
            ];
        }
        function Um(t, e) {
            t.action = e;
        }
        function Cs(t) {
            var e = zt(), l = mt;
            if (l !== null) return qs(e, l, t);
            zt(), e = e.memoizedState, l = zt();
            var a = l.queue.dispatch;
            return l.memoizedState = t, [
                e,
                a,
                !1
            ];
        }
        function ma(t, e, l, a) {
            return t = {
                tag: t,
                create: l,
                deps: a,
                inst: e,
                next: null
            }, e = at.updateQueue, e === null && (e = yr(), at.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
        }
        function gu() {
            return {
                destroy: void 0,
                resource: void 0
            };
        }
        function Hs() {
            return zt().memoizedState;
        }
        function bu(t, e, l, a) {
            var n = Ft();
            a = a === void 0 ? null : a, at.flags |= t, n.memoizedState = ma(1 | e, gu(), l, a);
        }
        function rn(t, e, l, a) {
            var n = zt();
            a = a === void 0 ? null : a;
            var u = n.memoizedState.inst;
            mt !== null && a !== null && or(a, mt.memoizedState.deps) ? n.memoizedState = ma(e, u, l, a) : (at.flags |= t, n.memoizedState = ma(1 | e, u, l, a));
        }
        function Ls(t, e) {
            bu(8390656, 8, t, e);
        }
        function Qs(t, e) {
            rn(2048, 8, t, e);
        }
        function Ys(t, e) {
            return rn(4, 2, t, e);
        }
        function Gs(t, e) {
            return rn(4, 4, t, e);
        }
        function js(t, e) {
            if (typeof e == "function") {
                t = t();
                var l = e(t);
                return function() {
                    typeof l == "function" ? l() : e(null);
                };
            }
            if (e != null) return t = t(), e.current = t, function() {
                e.current = null;
            };
        }
        function Ks(t, e, l) {
            l = l != null ? l.concat([
                t
            ]) : null, rn(4, 4, js.bind(null, e, t), l);
        }
        function Rr() {}
        function Xs(t, e) {
            var l = zt();
            e = e === void 0 ? null : e;
            var a = l.memoizedState;
            return e !== null && or(e, a[1]) ? a[0] : (l.memoizedState = [
                t,
                e
            ], t);
        }
        function Vs(t, e) {
            var l = zt();
            e = e === void 0 ? null : e;
            var a = l.memoizedState;
            if (e !== null && or(e, a[1])) return a[0];
            if (a = t(), Ql) {
                tl(!0);
                try {
                    t();
                } finally{
                    tl(!1);
                }
            }
            return l.memoizedState = [
                a,
                e
            ], a;
        }
        function Tr(t, e, l) {
            return l === void 0 || (rl & 1073741824) !== 0 ? t.memoizedState = e : (t.memoizedState = l, t = $o(), at.lanes |= t, pl |= t, l);
        }
        function ks(t, e, l, a) {
            return ne(l, e) ? l : ha.current !== null ? (t = Tr(t, l, a), ne(t, e) || (Pt = !0), t) : (rl & 42) === 0 ? (Pt = !0, t.memoizedState = l) : (t = $o(), at.lanes |= t, pl |= t, e);
        }
        function Zs(t, e, l, a, n) {
            var u = G.p;
            G.p = u !== 0 && 8 > u ? u : 8;
            var s = B.T, h = {};
            B.T = h, _r(t, !1, e, l);
            try {
                var y = n(), A = B.S;
                if (A !== null && A(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
                    var z = Dm(y, a);
                    cn(t, e, z, fe(t));
                } else cn(t, e, a, fe(t));
            } catch (w) {
                cn(t, e, {
                    then: function() {},
                    status: "rejected",
                    reason: w
                }, fe());
            } finally{
                G.p = u, B.T = s;
            }
        }
        function wm() {}
        function Or(t, e, l, a) {
            if (t.tag !== 5) throw Error(f(476));
            var n = Js(t).queue;
            Zs(t, n, e, F, l === null ? wm : function() {
                return $s(t), l(a);
            });
        }
        function Js(t) {
            var e = t.memoizedState;
            if (e !== null) return e;
            e = {
                memoizedState: F,
                baseState: F,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ye,
                    lastRenderedState: F
                },
                next: null
            };
            var l = {};
            return e.next = {
                memoizedState: l,
                baseState: l,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ye,
                    lastRenderedState: l
                },
                next: null
            }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
        }
        function $s(t) {
            var e = Js(t).next.queue;
            cn(t, e, {}, fe());
        }
        function Ar() {
            return kt(_n);
        }
        function Ws() {
            return zt().memoizedState;
        }
        function Fs() {
            return zt().memoizedState;
        }
        function Pm(t) {
            for(var e = t.return; e !== null;){
                switch(e.tag){
                    case 24:
                    case 3:
                        var l = fe();
                        t = ul(l);
                        var a = il(e, t, l);
                        a !== null && (se(a, e, l), en(a, e, l)), e = {
                            cache: er()
                        }, t.payload = e;
                        return;
                }
                e = e.return;
            }
        }
        function qm(t, e, l) {
            var a = fe();
            l = {
                lane: a,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Su(t) ? to(e, l) : (l = Xi(t, e, l, a), l !== null && (se(l, t, a), eo(l, e, a)));
        }
        function Is(t, e, l) {
            var a = fe();
            cn(t, e, l, a);
        }
        function cn(t, e, l, a) {
            var n = {
                lane: a,
                revertLane: 0,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Su(t)) to(e, n);
            else {
                var u = t.alternate;
                if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
                    var s = e.lastRenderedState, h = u(s, l);
                    if (n.hasEagerState = !0, n.eagerState = h, ne(h, s)) return au(t, e, n, 0), St === null && lu(), !1;
                } catch  {} finally{}
                if (l = Xi(t, e, n, a), l !== null) return se(l, t, a), eo(l, e, a), !0;
            }
            return !1;
        }
        function _r(t, e, l, a) {
            if (a = {
                lane: 2,
                revertLane: nc(),
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Su(t)) {
                if (e) throw Error(f(479));
            } else e = Xi(t, l, a, 2), e !== null && se(e, t, 2);
        }
        function Su(t) {
            var e = t.alternate;
            return t === at || e !== null && e === at;
        }
        function to(t, e) {
            da = pu = !0;
            var l = t.pending;
            l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
        }
        function eo(t, e, l) {
            if ((l & 4194048) !== 0) {
                var a = e.lanes;
                a &= t.pendingLanes, l |= a, e.lanes = l, ff(t, l);
            }
        }
        var Eu = {
            readContext: kt,
            use: yu,
            useCallback: Nt,
            useContext: Nt,
            useEffect: Nt,
            useImperativeHandle: Nt,
            useLayoutEffect: Nt,
            useInsertionEffect: Nt,
            useMemo: Nt,
            useReducer: Nt,
            useRef: Nt,
            useState: Nt,
            useDebugValue: Nt,
            useDeferredValue: Nt,
            useTransition: Nt,
            useSyncExternalStore: Nt,
            useId: Nt,
            useHostTransitionStatus: Nt,
            useFormState: Nt,
            useActionState: Nt,
            useOptimistic: Nt,
            useMemoCache: Nt,
            useCacheRefresh: Nt
        }, lo = {
            readContext: kt,
            use: yu,
            useCallback: function(t, e) {
                return Ft().memoizedState = [
                    t,
                    e === void 0 ? null : e
                ], t;
            },
            useContext: kt,
            useEffect: Ls,
            useImperativeHandle: function(t, e, l) {
                l = l != null ? l.concat([
                    t
                ]) : null, bu(4194308, 4, js.bind(null, e, t), l);
            },
            useLayoutEffect: function(t, e) {
                return bu(4194308, 4, t, e);
            },
            useInsertionEffect: function(t, e) {
                bu(4, 2, t, e);
            },
            useMemo: function(t, e) {
                var l = Ft();
                e = e === void 0 ? null : e;
                var a = t();
                if (Ql) {
                    tl(!0);
                    try {
                        t();
                    } finally{
                        tl(!1);
                    }
                }
                return l.memoizedState = [
                    a,
                    e
                ], a;
            },
            useReducer: function(t, e, l) {
                var a = Ft();
                if (l !== void 0) {
                    var n = l(e);
                    if (Ql) {
                        tl(!0);
                        try {
                            l(e);
                        } finally{
                            tl(!1);
                        }
                    }
                } else n = e;
                return a.memoizedState = a.baseState = n, t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: n
                }, a.queue = t, t = t.dispatch = qm.bind(null, at, t), [
                    a.memoizedState,
                    t
                ];
            },
            useRef: function(t) {
                var e = Ft();
                return t = {
                    current: t
                }, e.memoizedState = t;
            },
            useState: function(t) {
                t = Sr(t);
                var e = t.queue, l = Is.bind(null, at, e);
                return e.dispatch = l, [
                    t.memoizedState,
                    l
                ];
            },
            useDebugValue: Rr,
            useDeferredValue: function(t, e) {
                var l = Ft();
                return Tr(l, t, e);
            },
            useTransition: function() {
                var t = Sr(!1);
                return t = Zs.bind(null, at, t.queue, !0, !1), Ft().memoizedState = t, [
                    !1,
                    t
                ];
            },
            useSyncExternalStore: function(t, e, l) {
                var a = at, n = Ft();
                if (ht) {
                    if (l === void 0) throw Error(f(407));
                    l = l();
                } else {
                    if (l = e(), St === null) throw Error(f(349));
                    (rt & 124) !== 0 || Ts(a, e, l);
                }
                n.memoizedState = l;
                var u = {
                    value: l,
                    getSnapshot: e
                };
                return n.queue = u, Ls(As.bind(null, a, u, t), [
                    t
                ]), a.flags |= 2048, ma(9, gu(), Os.bind(null, a, u, l, e), null), l;
            },
            useId: function() {
                var t = Ft(), e = St.identifierPrefix;
                if (ht) {
                    var l = He, a = Ce;
                    l = (a & ~(1 << 32 - ae(a) - 1)).toString(32) + l, e = "«" + e + "R" + l, l = mu++, 0 < l && (e += "H" + l.toString(32)), e += "»";
                } else l = xm++, e = "«" + e + "r" + l.toString(32) + "»";
                return t.memoizedState = e;
            },
            useHostTransitionStatus: Ar,
            useFormState: ws,
            useActionState: ws,
            useOptimistic: function(t) {
                var e = Ft();
                e.memoizedState = e.baseState = t;
                var l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return e.queue = l, e = _r.bind(null, at, !0, l), l.dispatch = e, [
                    t,
                    e
                ];
            },
            useMemoCache: vr,
            useCacheRefresh: function() {
                return Ft().memoizedState = Pm.bind(null, at);
            }
        }, ao = {
            readContext: kt,
            use: yu,
            useCallback: Xs,
            useContext: kt,
            useEffect: Qs,
            useImperativeHandle: Ks,
            useInsertionEffect: Ys,
            useLayoutEffect: Gs,
            useMemo: Vs,
            useReducer: vu,
            useRef: Hs,
            useState: function() {
                return vu(Ye);
            },
            useDebugValue: Rr,
            useDeferredValue: function(t, e) {
                var l = zt();
                return ks(l, mt.memoizedState, t, e);
            },
            useTransition: function() {
                var t = vu(Ye)[0], e = zt().memoizedState;
                return [
                    typeof t == "boolean" ? t : un(t),
                    e
                ];
            },
            useSyncExternalStore: Rs,
            useId: Ws,
            useHostTransitionStatus: Ar,
            useFormState: Ps,
            useActionState: Ps,
            useOptimistic: function(t, e) {
                var l = zt();
                return Ns(l, mt, t, e);
            },
            useMemoCache: vr,
            useCacheRefresh: Fs
        }, Cm = {
            readContext: kt,
            use: yu,
            useCallback: Xs,
            useContext: kt,
            useEffect: Qs,
            useImperativeHandle: Ks,
            useInsertionEffect: Ys,
            useLayoutEffect: Gs,
            useMemo: Vs,
            useReducer: br,
            useRef: Hs,
            useState: function() {
                return br(Ye);
            },
            useDebugValue: Rr,
            useDeferredValue: function(t, e) {
                var l = zt();
                return mt === null ? Tr(l, t, e) : ks(l, mt.memoizedState, t, e);
            },
            useTransition: function() {
                var t = br(Ye)[0], e = zt().memoizedState;
                return [
                    typeof t == "boolean" ? t : un(t),
                    e
                ];
            },
            useSyncExternalStore: Rs,
            useId: Ws,
            useHostTransitionStatus: Ar,
            useFormState: Cs,
            useActionState: Cs,
            useOptimistic: function(t, e) {
                var l = zt();
                return mt !== null ? Ns(l, mt, t, e) : (l.baseState = t, [
                    t,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: vr,
            useCacheRefresh: Fs
        }, ya = null, fn = 0;
        function Ru(t) {
            var e = fn;
            return fn += 1, ya === null && (ya = []), ps(ya, t, e);
        }
        function sn(t, e) {
            e = e.props.ref, t.ref = e !== void 0 ? e : null;
        }
        function Tu(t, e) {
            throw e.$$typeof === O ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(f(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
        }
        function no(t) {
            var e = t._init;
            return e(t._payload);
        }
        function uo(t) {
            function e(R, S) {
                if (t) {
                    var T = R.deletions;
                    T === null ? (R.deletions = [
                        S
                    ], R.flags |= 16) : T.push(S);
                }
            }
            function l(R, S) {
                if (!t) return null;
                for(; S !== null;)e(R, S), S = S.sibling;
                return null;
            }
            function a(R) {
                for(var S = new Map; R !== null;)R.key !== null ? S.set(R.key, R) : S.set(R.index, R), R = R.sibling;
                return S;
            }
            function n(R, S) {
                return R = qe(R, S), R.index = 0, R.sibling = null, R;
            }
            function u(R, S, T) {
                return R.index = T, t ? (T = R.alternate, T !== null ? (T = T.index, T < S ? (R.flags |= 67108866, S) : T) : (R.flags |= 67108866, S)) : (R.flags |= 1048576, S);
            }
            function s(R) {
                return t && R.alternate === null && (R.flags |= 67108866), R;
            }
            function h(R, S, T, U) {
                return S === null || S.tag !== 6 ? (S = ki(T, R.mode, U), S.return = R, S) : (S = n(S, T), S.return = R, S);
            }
            function y(R, S, T, U) {
                var X = T.type;
                return X === x ? z(R, S, T.props.children, U, T.key) : S !== null && (S.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Et && no(X) === S.type) ? (S = n(S, T.props), sn(S, T), S.return = R, S) : (S = uu(T.type, T.key, T.props, null, R.mode, U), sn(S, T), S.return = R, S);
            }
            function A(R, S, T, U) {
                return S === null || S.tag !== 4 || S.stateNode.containerInfo !== T.containerInfo || S.stateNode.implementation !== T.implementation ? (S = Zi(T, R.mode, U), S.return = R, S) : (S = n(S, T.children || []), S.return = R, S);
            }
            function z(R, S, T, U, X) {
                return S === null || S.tag !== 7 ? (S = Bl(T, R.mode, U, X), S.return = R, S) : (S = n(S, T), S.return = R, S);
            }
            function w(R, S, T) {
                if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return S = ki("" + S, R.mode, T), S.return = R, S;
                if (typeof S == "object" && S !== null) {
                    switch(S.$$typeof){
                        case D:
                            return T = uu(S.type, S.key, S.props, null, R.mode, T), sn(T, S), T.return = R, T;
                        case q:
                            return S = Zi(S, R.mode, T), S.return = R, S;
                        case Et:
                            var U = S._init;
                            return S = U(S._payload), w(R, S, T);
                    }
                    if (Xt(S) || Kt(S)) return S = Bl(S, R.mode, T, null), S.return = R, S;
                    if (typeof S.then == "function") return w(R, Ru(S), T);
                    if (S.$$typeof === V) return w(R, fu(R, S), T);
                    Tu(R, S);
                }
                return null;
            }
            function _(R, S, T, U) {
                var X = S !== null ? S.key : null;
                if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return X !== null ? null : h(R, S, "" + T, U);
                if (typeof T == "object" && T !== null) {
                    switch(T.$$typeof){
                        case D:
                            return T.key === X ? y(R, S, T, U) : null;
                        case q:
                            return T.key === X ? A(R, S, T, U) : null;
                        case Et:
                            return X = T._init, T = X(T._payload), _(R, S, T, U);
                    }
                    if (Xt(T) || Kt(T)) return X !== null ? null : z(R, S, T, U, null);
                    if (typeof T.then == "function") return _(R, S, Ru(T), U);
                    if (T.$$typeof === V) return _(R, S, fu(R, T), U);
                    Tu(R, T);
                }
                return null;
            }
            function M(R, S, T, U, X) {
                if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return R = R.get(T) || null, h(S, R, "" + U, X);
                if (typeof U == "object" && U !== null) {
                    switch(U.$$typeof){
                        case D:
                            return R = R.get(U.key === null ? T : U.key) || null, y(S, R, U, X);
                        case q:
                            return R = R.get(U.key === null ? T : U.key) || null, A(S, R, U, X);
                        case Et:
                            var nt = U._init;
                            return U = nt(U._payload), M(R, S, T, U, X);
                    }
                    if (Xt(U) || Kt(U)) return R = R.get(T) || null, z(S, R, U, X, null);
                    if (typeof U.then == "function") return M(R, S, T, Ru(U), X);
                    if (U.$$typeof === V) return M(R, S, T, fu(S, U), X);
                    Tu(S, U);
                }
                return null;
            }
            function I(R, S, T, U) {
                for(var X = null, nt = null, k = S, W = S = 0, Ct = null; k !== null && W < T.length; W++){
                    k.index > W ? (Ct = k, k = null) : Ct = k.sibling;
                    var ot = _(R, k, T[W], U);
                    if (ot === null) {
                        k === null && (k = Ct);
                        break;
                    }
                    t && k && ot.alternate === null && e(R, k), S = u(ot, S, W), nt === null ? X = ot : nt.sibling = ot, nt = ot, k = Ct;
                }
                if (W === T.length) return l(R, k), ht && wl(R, W), X;
                if (k === null) {
                    for(; W < T.length; W++)k = w(R, T[W], U), k !== null && (S = u(k, S, W), nt === null ? X = k : nt.sibling = k, nt = k);
                    return ht && wl(R, W), X;
                }
                for(k = a(k); W < T.length; W++)Ct = M(k, R, W, T[W], U), Ct !== null && (t && Ct.alternate !== null && k.delete(Ct.key === null ? W : Ct.key), S = u(Ct, S, W), nt === null ? X = Ct : nt.sibling = Ct, nt = Ct);
                return t && k.forEach(function(Tl) {
                    return e(R, Tl);
                }), ht && wl(R, W), X;
            }
            function $(R, S, T, U) {
                if (T == null) throw Error(f(151));
                for(var X = null, nt = null, k = S, W = S = 0, Ct = null, ot = T.next(); k !== null && !ot.done; W++, ot = T.next()){
                    k.index > W ? (Ct = k, k = null) : Ct = k.sibling;
                    var Tl = _(R, k, ot.value, U);
                    if (Tl === null) {
                        k === null && (k = Ct);
                        break;
                    }
                    t && k && Tl.alternate === null && e(R, k), S = u(Tl, S, W), nt === null ? X = Tl : nt.sibling = Tl, nt = Tl, k = Ct;
                }
                if (ot.done) return l(R, k), ht && wl(R, W), X;
                if (k === null) {
                    for(; !ot.done; W++, ot = T.next())ot = w(R, ot.value, U), ot !== null && (S = u(ot, S, W), nt === null ? X = ot : nt.sibling = ot, nt = ot);
                    return ht && wl(R, W), X;
                }
                for(k = a(k); !ot.done; W++, ot = T.next())ot = M(k, R, W, ot.value, U), ot !== null && (t && ot.alternate !== null && k.delete(ot.key === null ? W : ot.key), S = u(ot, S, W), nt === null ? X = ot : nt.sibling = ot, nt = ot);
                return t && k.forEach(function(Hy) {
                    return e(R, Hy);
                }), ht && wl(R, W), X;
            }
            function vt(R, S, T, U) {
                if (typeof T == "object" && T !== null && T.type === x && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
                    switch(T.$$typeof){
                        case D:
                            t: {
                                for(var X = T.key; S !== null;){
                                    if (S.key === X) {
                                        if (X = T.type, X === x) {
                                            if (S.tag === 7) {
                                                l(R, S.sibling), U = n(S, T.props.children), U.return = R, R = U;
                                                break t;
                                            }
                                        } else if (S.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Et && no(X) === S.type) {
                                            l(R, S.sibling), U = n(S, T.props), sn(U, T), U.return = R, R = U;
                                            break t;
                                        }
                                        l(R, S);
                                        break;
                                    } else e(R, S);
                                    S = S.sibling;
                                }
                                T.type === x ? (U = Bl(T.props.children, R.mode, U, T.key), U.return = R, R = U) : (U = uu(T.type, T.key, T.props, null, R.mode, U), sn(U, T), U.return = R, R = U);
                            }
                            return s(R);
                        case q:
                            t: {
                                for(X = T.key; S !== null;){
                                    if (S.key === X) if (S.tag === 4 && S.stateNode.containerInfo === T.containerInfo && S.stateNode.implementation === T.implementation) {
                                        l(R, S.sibling), U = n(S, T.children || []), U.return = R, R = U;
                                        break t;
                                    } else {
                                        l(R, S);
                                        break;
                                    }
                                    else e(R, S);
                                    S = S.sibling;
                                }
                                U = Zi(T, R.mode, U), U.return = R, R = U;
                            }
                            return s(R);
                        case Et:
                            return X = T._init, T = X(T._payload), vt(R, S, T, U);
                    }
                    if (Xt(T)) return I(R, S, T, U);
                    if (Kt(T)) {
                        if (X = Kt(T), typeof X != "function") throw Error(f(150));
                        return T = X.call(T), $(R, S, T, U);
                    }
                    if (typeof T.then == "function") return vt(R, S, Ru(T), U);
                    if (T.$$typeof === V) return vt(R, S, fu(R, T), U);
                    Tu(R, T);
                }
                return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, S !== null && S.tag === 6 ? (l(R, S.sibling), U = n(S, T), U.return = R, R = U) : (l(R, S), U = ki(T, R.mode, U), U.return = R, R = U), s(R)) : l(R, S);
            }
            return function(R, S, T, U) {
                try {
                    fn = 0;
                    var X = vt(R, S, T, U);
                    return ya = null, X;
                } catch (k) {
                    if (k === Ia || k === ou) throw k;
                    var nt = ue(29, k, null, R.mode);
                    return nt.lanes = U, nt.return = R, nt;
                } finally{}
            };
        }
        var va = uo(!0), io = uo(!1), ge = C(null), De = null;
        function cl(t) {
            var e = t.alternate;
            Y(Ut, Ut.current & 1), Y(ge, t), De === null && (e === null || ha.current !== null || e.memoizedState !== null) && (De = t);
        }
        function ro(t) {
            if (t.tag === 22) {
                if (Y(Ut, Ut.current), Y(ge, t), De === null) {
                    var e = t.alternate;
                    e !== null && e.memoizedState !== null && (De = t);
                }
            } else fl();
        }
        function fl() {
            Y(Ut, Ut.current), Y(ge, ge.current);
        }
        function Ge(t) {
            K(ge), De === t && (De = null), K(Ut);
        }
        var Ut = C(0);
        function Ou(t) {
            for(var e = t; e !== null;){
                if (e.tag === 13) {
                    var l = e.memoizedState;
                    if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || yc(l))) return e;
                } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                    if ((e.flags & 128) !== 0) return e;
                } else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === t) break;
                for(; e.sibling === null;){
                    if (e.return === null || e.return === t) return null;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            return null;
        }
        function Mr(t, e, l, a) {
            e = t.memoizedState, l = l(a, e), l = l == null ? e : E({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
        }
        var Nr = {
            enqueueSetState: function(t, e, l) {
                t = t._reactInternals;
                var a = fe(), n = ul(a);
                n.payload = e, l != null && (n.callback = l), e = il(t, n, a), e !== null && (se(e, t, a), en(e, t, a));
            },
            enqueueReplaceState: function(t, e, l) {
                t = t._reactInternals;
                var a = fe(), n = ul(a);
                n.tag = 1, n.payload = e, l != null && (n.callback = l), e = il(t, n, a), e !== null && (se(e, t, a), en(e, t, a));
            },
            enqueueForceUpdate: function(t, e) {
                t = t._reactInternals;
                var l = fe(), a = ul(l);
                a.tag = 2, e != null && (a.callback = e), e = il(t, a, l), e !== null && (se(e, t, l), en(e, t, l));
            }
        };
        function co(t, e, l, a, n, u, s) {
            return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, s) : e.prototype && e.prototype.isPureReactComponent ? !Xa(l, a) || !Xa(n, u) : !0;
        }
        function fo(t, e, l, a) {
            t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Nr.enqueueReplaceState(e, e.state, null);
        }
        function Yl(t, e) {
            var l = e;
            if ("ref" in e) {
                l = {};
                for(var a in e)a !== "ref" && (l[a] = e[a]);
            }
            if (t = t.defaultProps) {
                l === e && (l = E({}, l));
                for(var n in t)l[n] === void 0 && (l[n] = t[n]);
            }
            return l;
        }
        var Au = typeof reportError == "function" ? reportError : function(t) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var e = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                    error: t
                });
                if (!window.dispatchEvent(e)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", t);
                return;
            }
            console.error(t);
        };
        function so(t) {
            Au(t);
        }
        function oo(t) {
            console.error(t);
        }
        function ho(t) {
            Au(t);
        }
        function _u(t, e) {
            try {
                var l = t.onUncaughtError;
                l(e.value, {
                    componentStack: e.stack
                });
            } catch (a) {
                setTimeout(function() {
                    throw a;
                });
            }
        }
        function po(t, e, l) {
            try {
                var a = t.onCaughtError;
                a(l.value, {
                    componentStack: l.stack,
                    errorBoundary: e.tag === 1 ? e.stateNode : null
                });
            } catch (n) {
                setTimeout(function() {
                    throw n;
                });
            }
        }
        function Dr(t, e, l) {
            return l = ul(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                _u(t, e);
            }, l;
        }
        function mo(t) {
            return t = ul(t), t.tag = 3, t;
        }
        function yo(t, e, l, a) {
            var n = l.type.getDerivedStateFromError;
            if (typeof n == "function") {
                var u = a.value;
                t.payload = function() {
                    return n(u);
                }, t.callback = function() {
                    po(e, l, a);
                };
            }
            var s = l.stateNode;
            s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
                po(e, l, a), typeof n != "function" && (ml === null ? ml = new Set([
                    this
                ]) : ml.add(this));
                var h = a.stack;
                this.componentDidCatch(a.value, {
                    componentStack: h !== null ? h : ""
                });
            });
        }
        function Hm(t, e, l, a, n) {
            if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                if (e = l.alternate, e !== null && $a(e, l, n, !0), l = ge.current, l !== null) {
                    switch(l.tag){
                        case 13:
                            return De === null ? Ir() : l.alternate === null && Mt === 0 && (Mt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === nr ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = new Set([
                                a
                            ]) : e.add(a), ec(t, a, n)), !1;
                        case 22:
                            return l.flags |= 65536, a === nr ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    a
                                ])
                            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = new Set([
                                a
                            ]) : l.add(a)), ec(t, a, n)), !1;
                    }
                    throw Error(f(435, l.tag));
                }
                return ec(t, a, n), Ir(), !1;
            }
            if (ht) return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Wi && (t = Error(f(422), {
                cause: a
            }), Ja(pe(t, l)))) : (a !== Wi && (e = Error(f(423), {
                cause: a
            }), Ja(pe(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = pe(a, l), n = Dr(t.stateNode, a, n), rr(t, n), Mt !== 4 && (Mt = 2)), !1;
            var u = Error(f(520), {
                cause: a
            });
            if (u = pe(u, l), vn === null ? vn = [
                u
            ] : vn.push(u), Mt !== 4 && (Mt = 2), e === null) return !0;
            a = pe(a, l), l = e;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Dr(l.stateNode, a, t), rr(l, t), !1;
                    case 1:
                        if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ml === null || !ml.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = mo(n), yo(n, t, l, a), rr(l, n), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var vo = Error(f(461)), Pt = !1;
        function Lt(t, e, l, a) {
            e.child = t === null ? io(e, null, l, a) : va(e, t.child, l, a);
        }
        function go(t, e, l, a, n) {
            l = l.render;
            var u = e.ref;
            if ("ref" in a) {
                var s = {};
                for(var h in a)h !== "ref" && (s[h] = a[h]);
            } else s = a;
            return Hl(e), a = hr(t, e, l, s, u, n), h = dr(), t !== null && !Pt ? (pr(t, e, n), je(t, e, n)) : (ht && h && Ji(e), e.flags |= 1, Lt(t, e, a, n), e.child);
        }
        function bo(t, e, l, a, n) {
            if (t === null) {
                var u = l.type;
                return typeof u == "function" && !Vi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, So(t, e, u, a, n)) : (t = uu(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
            }
            if (u = t.child, !Cr(t, n)) {
                var s = u.memoizedProps;
                if (l = l.compare, l = l !== null ? l : Xa, l(s, a) && t.ref === e.ref) return je(t, e, n);
            }
            return e.flags |= 1, t = qe(u, a), t.ref = e.ref, t.return = e, e.child = t;
        }
        function So(t, e, l, a, n) {
            if (t !== null) {
                var u = t.memoizedProps;
                if (Xa(u, a) && t.ref === e.ref) if (Pt = !1, e.pendingProps = a = u, Cr(t, n)) (t.flags & 131072) !== 0 && (Pt = !0);
                else return e.lanes = t.lanes, je(t, e, n);
            }
            return xr(t, e, l, a, n);
        }
        function Eo(t, e, l) {
            var a = e.pendingProps, n = a.children, u = t !== null ? t.memoizedState : null;
            if (a.mode === "hidden") {
                if ((e.flags & 128) !== 0) {
                    if (a = u !== null ? u.baseLanes | l : l, t !== null) {
                        for(n = e.child = t.child, u = 0; n !== null;)u = u | n.lanes | n.childLanes, n = n.sibling;
                        e.childLanes = u & ~a;
                    } else e.childLanes = 0, e.child = null;
                    return Ro(t, e, a, l);
                }
                if ((l & 536870912) !== 0) e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, t !== null && su(e, u !== null ? u.cachePool : null), u !== null ? bs(e, u) : fr(), ro(e);
                else return e.lanes = e.childLanes = 536870912, Ro(t, e, u !== null ? u.baseLanes | l : l, l);
            } else u !== null ? (su(e, u.cachePool), bs(e, u), fl(), e.memoizedState = null) : (t !== null && su(e, null), fr(), fl());
            return Lt(t, e, n, l), e.child;
        }
        function Ro(t, e, l, a) {
            var n = ar();
            return n = n === null ? null : {
                parent: Bt._currentValue,
                pool: n
            }, e.memoizedState = {
                baseLanes: l,
                cachePool: n
            }, t !== null && su(e, null), fr(), ro(e), t !== null && $a(t, e, a, !0), null;
        }
        function Mu(t, e) {
            var l = e.ref;
            if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(f(284));
                (t === null || t.ref !== l) && (e.flags |= 4194816);
            }
        }
        function xr(t, e, l, a, n) {
            return Hl(e), l = hr(t, e, l, a, void 0, n), a = dr(), t !== null && !Pt ? (pr(t, e, n), je(t, e, n)) : (ht && a && Ji(e), e.flags |= 1, Lt(t, e, l, n), e.child);
        }
        function To(t, e, l, a, n, u) {
            return Hl(e), e.updateQueue = null, l = Es(e, a, l, n), Ss(t), a = dr(), t !== null && !Pt ? (pr(t, e, u), je(t, e, u)) : (ht && a && Ji(e), e.flags |= 1, Lt(t, e, l, u), e.child);
        }
        function Oo(t, e, l, a, n) {
            if (Hl(e), e.stateNode === null) {
                var u = ra, s = l.contextType;
                typeof s == "object" && s !== null && (u = kt(s)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Nr, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, ur(e), s = l.contextType, u.context = typeof s == "object" && s !== null ? kt(s) : ra, u.state = e.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (Mr(e, l, s, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && Nr.enqueueReplaceState(u, u.state, null), an(e, a, u, n), ln(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
            } else if (t === null) {
                u = e.stateNode;
                var h = e.memoizedProps, y = Yl(l, h);
                u.props = y;
                var A = u.context, z = l.contextType;
                s = ra, typeof z == "object" && z !== null && (s = kt(z));
                var w = l.getDerivedStateFromProps;
                z = typeof w == "function" || typeof u.getSnapshotBeforeUpdate == "function", h = e.pendingProps !== h, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || A !== s) && fo(e, u, a, s), nl = !1;
                var _ = e.memoizedState;
                u.state = _, an(e, a, u, n), ln(), A = e.memoizedState, h || _ !== A || nl ? (typeof w == "function" && (Mr(e, l, w, a), A = e.memoizedState), (y = nl || co(e, l, y, a, _, A, s)) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = A), u.props = a, u.state = A, u.context = s, a = y) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
            } else {
                u = e.stateNode, ir(t, e), s = e.memoizedProps, z = Yl(l, s), u.props = z, w = e.pendingProps, _ = u.context, A = l.contextType, y = ra, typeof A == "object" && A !== null && (y = kt(A)), h = l.getDerivedStateFromProps, (A = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== w || _ !== y) && fo(e, u, a, y), nl = !1, _ = e.memoizedState, u.state = _, an(e, a, u, n), ln();
                var M = e.memoizedState;
                s !== w || _ !== M || nl || t !== null && t.dependencies !== null && cu(t.dependencies) ? (typeof h == "function" && (Mr(e, l, h, a), M = e.memoizedState), (z = nl || co(e, l, z, a, _, M, y) || t !== null && t.dependencies !== null && cu(t.dependencies)) ? (A || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, y), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, M, y)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = M), u.props = a, u.state = M, u.context = y, a = z) : (typeof u.componentDidUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), a = !1);
            }
            return u = a, Mu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = va(e, t.child, null, n), e.child = va(e, null, l, n)) : Lt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = je(t, e, n), t;
        }
        function Ao(t, e, l, a) {
            return Za(), e.flags |= 256, Lt(t, e, l, a), e.child;
        }
        var zr = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function Br(t) {
            return {
                baseLanes: t,
                cachePool: os()
            };
        }
        function Ur(t, e, l) {
            return t = t !== null ? t.childLanes & ~l : 0, e && (t |= be), t;
        }
        function _o(t, e, l) {
            var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, s;
            if ((s = u) || (s = t !== null && t.memoizedState === null ? !1 : (Ut.current & 2) !== 0), s && (n = !0, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
                if (ht) {
                    if (n ? cl(e) : fl(), ht) {
                        var h = _t, y;
                        if (y = h) {
                            t: {
                                for(y = h, h = Ne; y.nodeType !== 8;){
                                    if (!h) {
                                        h = null;
                                        break t;
                                    }
                                    if (y = Ae(y.nextSibling), y === null) {
                                        h = null;
                                        break t;
                                    }
                                }
                                h = y;
                            }
                            h !== null ? (e.memoizedState = {
                                dehydrated: h,
                                treeContext: Ul !== null ? {
                                    id: Ce,
                                    overflow: He
                                } : null,
                                retryLane: 536870912,
                                hydrationErrors: null
                            }, y = ue(18, null, null, 0), y.stateNode = h, y.return = e, e.child = y, Jt = e, _t = null, y = !0) : y = !1;
                        }
                        y || ql(e);
                    }
                    if (h = e.memoizedState, h !== null && (h = h.dehydrated, h !== null)) return yc(h) ? e.lanes = 32 : e.lanes = 536870912, null;
                    Ge(e);
                }
                return h = a.children, a = a.fallback, n ? (fl(), n = e.mode, h = Nu({
                    mode: "hidden",
                    children: h
                }, n), a = Bl(a, n, l, null), h.return = e, a.return = e, h.sibling = a, e.child = h, n = e.child, n.memoizedState = Br(l), n.childLanes = Ur(t, s, l), e.memoizedState = zr, a) : (cl(e), wr(e, h));
            }
            if (y = t.memoizedState, y !== null && (h = y.dehydrated, h !== null)) {
                if (u) e.flags & 256 ? (cl(e), e.flags &= -257, e = Pr(t, e, l)) : e.memoizedState !== null ? (fl(), e.child = t.child, e.flags |= 128, e = null) : (fl(), n = a.fallback, h = e.mode, a = Nu({
                    mode: "visible",
                    children: a.children
                }, h), n = Bl(n, h, l, null), n.flags |= 2, a.return = e, n.return = e, a.sibling = n, e.child = a, va(e, t.child, null, l), a = e.child, a.memoizedState = Br(l), a.childLanes = Ur(t, s, l), e.memoizedState = zr, e = n);
                else if (cl(e), yc(h)) {
                    if (s = h.nextSibling && h.nextSibling.dataset, s) var A = s.dgst;
                    s = A, a = Error(f(419)), a.stack = "", a.digest = s, Ja({
                        value: a,
                        source: null,
                        stack: null
                    }), e = Pr(t, e, l);
                } else if (Pt || $a(t, e, l, !1), s = (l & t.childLanes) !== 0, Pt || s) {
                    if (s = St, s !== null && (a = l & -l, a = (a & 42) !== 0 ? 1 : vi(a), a = (a & (s.suspendedLanes | l)) !== 0 ? 0 : a, a !== 0 && a !== y.retryLane)) throw y.retryLane = a, ia(t, a), se(s, t, a), vo;
                    h.data === "$?" || Ir(), e = Pr(t, e, l);
                } else h.data === "$?" ? (e.flags |= 192, e.child = t.child, e = null) : (t = y.treeContext, _t = Ae(h.nextSibling), Jt = e, ht = !0, Pl = null, Ne = !1, t !== null && (ye[ve++] = Ce, ye[ve++] = He, ye[ve++] = Ul, Ce = t.id, He = t.overflow, Ul = e), e = wr(e, a.children), e.flags |= 4096);
                return e;
            }
            return n ? (fl(), n = a.fallback, h = e.mode, y = t.child, A = y.sibling, a = qe(y, {
                mode: "hidden",
                children: a.children
            }), a.subtreeFlags = y.subtreeFlags & 65011712, A !== null ? n = qe(A, n) : (n = Bl(n, h, l, null), n.flags |= 2), n.return = e, a.return = e, a.sibling = n, e.child = a, a = n, n = e.child, h = t.child.memoizedState, h === null ? h = Br(l) : (y = h.cachePool, y !== null ? (A = Bt._currentValue, y = y.parent !== A ? {
                parent: A,
                pool: A
            } : y) : y = os(), h = {
                baseLanes: h.baseLanes | l,
                cachePool: y
            }), n.memoizedState = h, n.childLanes = Ur(t, s, l), e.memoizedState = zr, a) : (cl(e), l = t.child, t = l.sibling, l = qe(l, {
                mode: "visible",
                children: a.children
            }), l.return = e, l.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [
                t
            ], e.flags |= 16) : s.push(t)), e.child = l, e.memoizedState = null, l);
        }
        function wr(t, e) {
            return e = Nu({
                mode: "visible",
                children: e
            }, t.mode), e.return = t, t.child = e;
        }
        function Nu(t, e) {
            return t = ue(22, t, null, e), t.lanes = 0, t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }, t;
        }
        function Pr(t, e, l) {
            return va(e, t.child, null, l), t = wr(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
        }
        function Mo(t, e, l) {
            t.lanes |= e;
            var a = t.alternate;
            a !== null && (a.lanes |= e), Ii(t.return, e, l);
        }
        function qr(t, e, l, a, n) {
            var u = t.memoizedState;
            u === null ? t.memoizedState = {
                isBackwards: e,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: l,
                tailMode: n
            } : (u.isBackwards = e, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = l, u.tailMode = n);
        }
        function No(t, e, l) {
            var a = e.pendingProps, n = a.revealOrder, u = a.tail;
            if (Lt(t, e, a.children, l), a = Ut.current, (a & 2) !== 0) a = a & 1 | 2, e.flags |= 128;
            else {
                if (t !== null && (t.flags & 128) !== 0) t: for(t = e.child; t !== null;){
                    if (t.tag === 13) t.memoizedState !== null && Mo(t, l, e);
                    else if (t.tag === 19) Mo(t, l, e);
                    else if (t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue;
                    }
                    if (t === e) break t;
                    for(; t.sibling === null;){
                        if (t.return === null || t.return === e) break t;
                        t = t.return;
                    }
                    t.sibling.return = t.return, t = t.sibling;
                }
                a &= 1;
            }
            switch(Y(Ut, a), n){
                case "forwards":
                    for(l = e.child, n = null; l !== null;)t = l.alternate, t !== null && Ou(t) === null && (n = l), l = l.sibling;
                    l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), qr(e, !1, n, l, u);
                    break;
                case "backwards":
                    for(l = null, n = e.child, e.child = null; n !== null;){
                        if (t = n.alternate, t !== null && Ou(t) === null) {
                            e.child = n;
                            break;
                        }
                        t = n.sibling, n.sibling = l, l = n, n = t;
                    }
                    qr(e, !0, l, null, u);
                    break;
                case "together":
                    qr(e, !1, null, null, void 0);
                    break;
                default:
                    e.memoizedState = null;
            }
            return e.child;
        }
        function je(t, e, l) {
            if (t !== null && (e.dependencies = t.dependencies), pl |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
                if ($a(t, e, l, !1), (l & e.childLanes) === 0) return null;
            } else return null;
            if (t !== null && e.child !== t.child) throw Error(f(153));
            if (e.child !== null) {
                for(t = e.child, l = qe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null;)t = t.sibling, l = l.sibling = qe(t, t.pendingProps), l.return = e;
                l.sibling = null;
            }
            return e.child;
        }
        function Cr(t, e) {
            return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && cu(t)));
        }
        function Lm(t, e, l) {
            switch(e.tag){
                case 3:
                    Rt(e, e.stateNode.containerInfo), al(e, Bt, t.memoizedState.cache), Za();
                    break;
                case 27:
                case 5:
                    hi(e);
                    break;
                case 4:
                    Rt(e, e.stateNode.containerInfo);
                    break;
                case 10:
                    al(e, e.type, e.memoizedProps.value);
                    break;
                case 13:
                    var a = e.memoizedState;
                    if (a !== null) return a.dehydrated !== null ? (cl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? _o(t, e, l) : (cl(e), t = je(t, e, l), t !== null ? t.sibling : null);
                    cl(e);
                    break;
                case 19:
                    var n = (t.flags & 128) !== 0;
                    if (a = (l & e.childLanes) !== 0, a || ($a(t, e, l, !1), a = (l & e.childLanes) !== 0), n) {
                        if (a) return No(t, e, l);
                        e.flags |= 128;
                    }
                    if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Y(Ut, Ut.current), a) break;
                    return null;
                case 22:
                case 23:
                    return e.lanes = 0, Eo(t, e, l);
                case 24:
                    al(e, Bt, t.memoizedState.cache);
            }
            return je(t, e, l);
        }
        function Do(t, e, l) {
            if (t !== null) if (t.memoizedProps !== e.pendingProps) Pt = !0;
            else {
                if (!Cr(t, l) && (e.flags & 128) === 0) return Pt = !1, Lm(t, e, l);
                Pt = (t.flags & 131072) !== 0;
            }
            else Pt = !1, ht && (e.flags & 1048576) !== 0 && ns(e, ru, e.index);
            switch(e.lanes = 0, e.tag){
                case 16:
                    t: {
                        t = e.pendingProps;
                        var a = e.elementType, n = a._init;
                        if (a = n(a._payload), e.type = a, typeof a == "function") Vi(a) ? (t = Yl(a, t), e.tag = 1, e = Oo(null, e, a, t, l)) : (e.tag = 0, e = xr(null, e, a, t, l));
                        else {
                            if (a != null) {
                                if (n = a.$$typeof, n === Z) {
                                    e.tag = 11, e = go(null, e, a, t, l);
                                    break t;
                                } else if (n === ct) {
                                    e.tag = 14, e = bo(null, e, a, t, l);
                                    break t;
                                }
                            }
                            throw e = _l(a) || a, Error(f(306, e, ""));
                        }
                    }
                    return e;
                case 0:
                    return xr(t, e, e.type, e.pendingProps, l);
                case 1:
                    return a = e.type, n = Yl(a, e.pendingProps), Oo(t, e, a, n, l);
                case 3:
                    t: {
                        if (Rt(e, e.stateNode.containerInfo), t === null) throw Error(f(387));
                        a = e.pendingProps;
                        var u = e.memoizedState;
                        n = u.element, ir(t, e), an(e, a, null, l);
                        var s = e.memoizedState;
                        if (a = s.cache, al(e, Bt, a), a !== u.cache && tr(e, [
                            Bt
                        ], l, !0), ln(), a = s.element, u.isDehydrated) if (u = {
                            element: a,
                            isDehydrated: !1,
                            cache: s.cache
                        }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
                            e = Ao(t, e, a, l);
                            break t;
                        } else if (a !== n) {
                            n = pe(Error(f(424)), e), Ja(n), e = Ao(t, e, a, l);
                            break t;
                        } else {
                            switch(t = e.stateNode.containerInfo, t.nodeType){
                                case 9:
                                    t = t.body;
                                    break;
                                default:
                                    t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
                            }
                            for(_t = Ae(t.firstChild), Jt = e, ht = !0, Pl = null, Ne = !0, l = io(e, null, a, l), e.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (Za(), a === n) {
                                e = je(t, e, l);
                                break t;
                            }
                            Lt(t, e, a, l);
                        }
                        e = e.child;
                    }
                    return e;
                case 26:
                    return Mu(t, e), t === null ? (l = Uh(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : ht || (l = e.type, t = e.pendingProps, a = Gu(et.current).createElement(l), a[Vt] = e, a[$t] = t, Yt(a, l, t), wt(a), e.stateNode = a) : e.memoizedState = Uh(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
                case 27:
                    return hi(e), t === null && ht && (a = e.stateNode = xh(e.type, e.pendingProps, et.current), Jt = e, Ne = !0, n = _t, gl(e.type) ? (vc = n, _t = Ae(a.firstChild)) : _t = n), Lt(t, e, e.pendingProps.children, l), Mu(t, e), t === null && (e.flags |= 4194304), e.child;
                case 5:
                    return t === null && ht && ((n = a = _t) && (a = dy(a, e.type, e.pendingProps, Ne), a !== null ? (e.stateNode = a, Jt = e, _t = Ae(a.firstChild), Ne = !1, n = !0) : n = !1), n || ql(e)), hi(e), n = e.type, u = e.pendingProps, s = t !== null ? t.memoizedProps : null, a = u.children, dc(n, u) ? a = null : s !== null && dc(n, s) && (e.flags |= 32), e.memoizedState !== null && (n = hr(t, e, zm, null, null, l), _n._currentValue = n), Mu(t, e), Lt(t, e, a, l), e.child;
                case 6:
                    return t === null && ht && ((t = l = _t) && (l = py(l, e.pendingProps, Ne), l !== null ? (e.stateNode = l, Jt = e, _t = null, t = !0) : t = !1), t || ql(e)), null;
                case 13:
                    return _o(t, e, l);
                case 4:
                    return Rt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = va(e, null, a, l) : Lt(t, e, a, l), e.child;
                case 11:
                    return go(t, e, e.type, e.pendingProps, l);
                case 7:
                    return Lt(t, e, e.pendingProps, l), e.child;
                case 8:
                    return Lt(t, e, e.pendingProps.children, l), e.child;
                case 12:
                    return Lt(t, e, e.pendingProps.children, l), e.child;
                case 10:
                    return a = e.pendingProps, al(e, e.type, a.value), Lt(t, e, a.children, l), e.child;
                case 9:
                    return n = e.type._context, a = e.pendingProps.children, Hl(e), n = kt(n), a = a(n), e.flags |= 1, Lt(t, e, a, l), e.child;
                case 14:
                    return bo(t, e, e.type, e.pendingProps, l);
                case 15:
                    return So(t, e, e.type, e.pendingProps, l);
                case 19:
                    return No(t, e, l);
                case 31:
                    return a = e.pendingProps, l = e.mode, a = {
                        mode: a.mode,
                        children: a.children
                    }, t === null ? (l = Nu(a, l), l.ref = e.ref, e.child = l, l.return = e, e = l) : (l = qe(t.child, a), l.ref = e.ref, e.child = l, l.return = e, e = l), e;
                case 22:
                    return Eo(t, e, l);
                case 24:
                    return Hl(e), a = kt(Bt), t === null ? (n = ar(), n === null && (n = St, u = er(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
                        parent: a,
                        cache: n
                    }, ur(e), al(e, Bt, n)) : ((t.lanes & l) !== 0 && (ir(t, e), an(e, null, null, l), ln()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
                        parent: a,
                        cache: a
                    }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), al(e, Bt, a)) : (a = u.cache, al(e, Bt, a), a !== n.cache && tr(e, [
                        Bt
                    ], l, !0))), Lt(t, e, e.pendingProps.children, l), e.child;
                case 29:
                    throw e.pendingProps;
            }
            throw Error(f(156, e.tag));
        }
        function Ke(t) {
            t.flags |= 4;
        }
        function xo(t, e) {
            if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
            else if (t.flags |= 16777216, !Hh(e)) {
                if (e = ge.current, e !== null && ((rt & 4194048) === rt ? De !== null : (rt & 62914560) !== rt && (rt & 536870912) === 0 || e !== De)) throw tn = nr, hs;
                t.flags |= 8192;
            }
        }
        function Du(t, e) {
            e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? rf() : 536870912, t.lanes |= e, Ea |= e);
        }
        function on(t, e) {
            if (!ht) switch(t.tailMode){
                case "hidden":
                    e = t.tail;
                    for(var l = null; e !== null;)e.alternate !== null && (l = e), e = e.sibling;
                    l === null ? t.tail = null : l.sibling = null;
                    break;
                case "collapsed":
                    l = t.tail;
                    for(var a = null; l !== null;)l.alternate !== null && (a = l), l = l.sibling;
                    a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
            }
        }
        function At(t) {
            var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
            if (e) for(var n = t.child; n !== null;)l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
            else for(n = t.child; n !== null;)l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
            return t.subtreeFlags |= a, t.childLanes = l, e;
        }
        function Qm(t, e, l) {
            var a = e.pendingProps;
            switch($i(e), e.tag){
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
                    return At(e), null;
                case 1:
                    return At(e), null;
                case 3:
                    return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Qe(Bt), Ie(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ka(e) ? Ke(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, rs())), At(e), null;
                case 26:
                    return l = e.memoizedState, t === null ? (Ke(e), l !== null ? (At(e), xo(e, l)) : (At(e), e.flags &= -16777217)) : l ? l !== t.memoizedState ? (Ke(e), At(e), xo(e, l)) : (At(e), e.flags &= -16777217) : (t.memoizedProps !== a && Ke(e), At(e), e.flags &= -16777217), null;
                case 27:
                    Qn(e), l = et.current;
                    var n = e.type;
                    if (t !== null && e.stateNode != null) t.memoizedProps !== a && Ke(e);
                    else {
                        if (!a) {
                            if (e.stateNode === null) throw Error(f(166));
                            return At(e), null;
                        }
                        t = J.current, ka(e) ? us(e) : (t = xh(n, a, l), e.stateNode = t, Ke(e));
                    }
                    return At(e), null;
                case 5:
                    if (Qn(e), l = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Ke(e);
                    else {
                        if (!a) {
                            if (e.stateNode === null) throw Error(f(166));
                            return At(e), null;
                        }
                        if (t = J.current, ka(e)) us(e);
                        else {
                            switch(n = Gu(et.current), t){
                                case 1:
                                    t = n.createElementNS("http://www.w3.org/2000/svg", l);
                                    break;
                                case 2:
                                    t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                    break;
                                default:
                                    switch(l){
                                        case "svg":
                                            t = n.createElementNS("http://www.w3.org/2000/svg", l);
                                            break;
                                        case "math":
                                            t = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                                            break;
                                        case "script":
                                            t = n.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                                            break;
                                        case "select":
                                            t = typeof a.is == "string" ? n.createElement("select", {
                                                is: a.is
                                            }) : n.createElement("select"), a.multiple ? t.multiple = !0 : a.size && (t.size = a.size);
                                            break;
                                        default:
                                            t = typeof a.is == "string" ? n.createElement(l, {
                                                is: a.is
                                            }) : n.createElement(l);
                                    }
                            }
                            t[Vt] = e, t[$t] = a;
                            t: for(n = e.child; n !== null;){
                                if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
                                else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                                    n.child.return = n, n = n.child;
                                    continue;
                                }
                                if (n === e) break t;
                                for(; n.sibling === null;){
                                    if (n.return === null || n.return === e) break t;
                                    n = n.return;
                                }
                                n.sibling.return = n.return, n = n.sibling;
                            }
                            e.stateNode = t;
                            t: switch(Yt(t, l, a), l){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    t = !!a.autoFocus;
                                    break t;
                                case "img":
                                    t = !0;
                                    break t;
                                default:
                                    t = !1;
                            }
                            t && Ke(e);
                        }
                    }
                    return At(e), e.flags &= -16777217, null;
                case 6:
                    if (t && e.stateNode != null) t.memoizedProps !== a && Ke(e);
                    else {
                        if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
                        if (t = et.current, ka(e)) {
                            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Jt, n !== null) switch(n.tag){
                                case 27:
                                case 5:
                                    a = n.memoizedProps;
                            }
                            t[Vt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Th(t.nodeValue, l)), t || ql(e);
                        } else t = Gu(t).createTextNode(a), t[Vt] = e, e.stateNode = t;
                    }
                    return At(e), null;
                case 13:
                    if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                        if (n = ka(e), a !== null && a.dehydrated !== null) {
                            if (t === null) {
                                if (!n) throw Error(f(318));
                                if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
                                n[Vt] = e;
                            } else Za(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
                            At(e), n = !1;
                        } else n = rs(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
                        if (!n) return e.flags & 256 ? (Ge(e), e) : (Ge(e), null);
                    }
                    if (Ge(e), (e.flags & 128) !== 0) return e.lanes = l, e;
                    if (l = a !== null, t = t !== null && t.memoizedState !== null, l) {
                        a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
                        var u = null;
                        a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048);
                    }
                    return l !== t && l && (e.child.flags |= 8192), Du(e, e.updateQueue), At(e), null;
                case 4:
                    return Ie(), t === null && cc(e.stateNode.containerInfo), At(e), null;
                case 10:
                    return Qe(e.type), At(e), null;
                case 19:
                    if (K(Ut), n = e.memoizedState, n === null) return At(e), null;
                    if (a = (e.flags & 128) !== 0, u = n.rendering, u === null) if (a) on(n, !1);
                    else {
                        if (Mt !== 0 || t !== null && (t.flags & 128) !== 0) for(t = e.child; t !== null;){
                            if (u = Ou(t), u !== null) {
                                for(e.flags |= 128, on(n, !1), t = u.updateQueue, e.updateQueue = t, Du(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null;)as(l, t), l = l.sibling;
                                return Y(Ut, Ut.current & 1 | 2), e.child;
                            }
                            t = t.sibling;
                        }
                        n.tail !== null && Me() > Bu && (e.flags |= 128, a = !0, on(n, !1), e.lanes = 4194304);
                    }
                    else {
                        if (!a) if (t = Ou(u), t !== null) {
                            if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, Du(e, t), on(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !ht) return At(e), null;
                        } else 2 * Me() - n.renderingStartTime > Bu && l !== 536870912 && (e.flags |= 128, a = !0, on(n, !1), e.lanes = 4194304);
                        n.isBackwards ? (u.sibling = e.child, e.child = u) : (t = n.last, t !== null ? t.sibling = u : e.child = u, n.last = u);
                    }
                    return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = Me(), e.sibling = null, t = Ut.current, Y(Ut, a ? t & 1 | 2 : t & 1), e) : (At(e), null);
                case 22:
                case 23:
                    return Ge(e), sr(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (At(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : At(e), l = e.updateQueue, l !== null && Du(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && K(Ll), null;
                case 24:
                    return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Qe(Bt), At(e), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(f(156, e.tag));
        }
        function Ym(t, e) {
            switch($i(e), e.tag){
                case 1:
                    return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
                case 3:
                    return Qe(Bt), Ie(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
                case 26:
                case 27:
                case 5:
                    return Qn(e), null;
                case 13:
                    if (Ge(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
                        if (e.alternate === null) throw Error(f(340));
                        Za();
                    }
                    return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
                case 19:
                    return K(Ut), null;
                case 4:
                    return Ie(), null;
                case 10:
                    return Qe(e.type), null;
                case 22:
                case 23:
                    return Ge(e), sr(), t !== null && K(Ll), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
                case 24:
                    return Qe(Bt), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function zo(t, e) {
            switch($i(e), e.tag){
                case 3:
                    Qe(Bt), Ie();
                    break;
                case 26:
                case 27:
                case 5:
                    Qn(e);
                    break;
                case 4:
                    Ie();
                    break;
                case 13:
                    Ge(e);
                    break;
                case 19:
                    K(Ut);
                    break;
                case 10:
                    Qe(e.type);
                    break;
                case 22:
                case 23:
                    Ge(e), sr(), t !== null && K(Ll);
                    break;
                case 24:
                    Qe(Bt);
            }
        }
        function hn(t, e) {
            try {
                var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
                if (a !== null) {
                    var n = a.next;
                    l = n;
                    do {
                        if ((l.tag & t) === t) {
                            a = void 0;
                            var u = l.create, s = l.inst;
                            a = u(), s.destroy = a;
                        }
                        l = l.next;
                    }while (l !== n);
                }
            } catch (h) {
                bt(e, e.return, h);
            }
        }
        function sl(t, e, l) {
            try {
                var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
                if (n !== null) {
                    var u = n.next;
                    a = u;
                    do {
                        if ((a.tag & t) === t) {
                            var s = a.inst, h = s.destroy;
                            if (h !== void 0) {
                                s.destroy = void 0, n = e;
                                var y = l, A = h;
                                try {
                                    A();
                                } catch (z) {
                                    bt(n, y, z);
                                }
                            }
                        }
                        a = a.next;
                    }while (a !== u);
                }
            } catch (z) {
                bt(e, e.return, z);
            }
        }
        function Bo(t) {
            var e = t.updateQueue;
            if (e !== null) {
                var l = t.stateNode;
                try {
                    gs(e, l);
                } catch (a) {
                    bt(t, t.return, a);
                }
            }
        }
        function Uo(t, e, l) {
            l.props = Yl(t.type, t.memoizedProps), l.state = t.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (a) {
                bt(t, e, a);
            }
        }
        function dn(t, e) {
            try {
                var l = t.ref;
                if (l !== null) {
                    switch(t.tag){
                        case 26:
                        case 27:
                        case 5:
                            var a = t.stateNode;
                            break;
                        case 30:
                            a = t.stateNode;
                            break;
                        default:
                            a = t.stateNode;
                    }
                    typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
                }
            } catch (n) {
                bt(t, e, n);
            }
        }
        function xe(t, e) {
            var l = t.ref, a = t.refCleanup;
            if (l !== null) if (typeof a == "function") try {
                a();
            } catch (n) {
                bt(t, e, n);
            } finally{
                t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
            }
            else if (typeof l == "function") try {
                l(null);
            } catch (n) {
                bt(t, e, n);
            }
            else l.current = null;
        }
        function wo(t) {
            var e = t.type, l = t.memoizedProps, a = t.stateNode;
            try {
                t: switch(e){
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l.autoFocus && a.focus();
                        break t;
                    case "img":
                        l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
                }
            } catch (n) {
                bt(t, t.return, n);
            }
        }
        function Hr(t, e, l) {
            try {
                var a = t.stateNode;
                cy(a, t.type, l, e), a[$t] = e;
            } catch (n) {
                bt(t, t.return, n);
            }
        }
        function Po(t) {
            return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && gl(t.type) || t.tag === 4;
        }
        function Lr(t) {
            t: for(;;){
                for(; t.sibling === null;){
                    if (t.return === null || Po(t.return)) return null;
                    t = t.return;
                }
                for(t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;){
                    if (t.tag === 27 && gl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
                    t.child.return = t, t = t.child;
                }
                if (!(t.flags & 2)) return t.stateNode;
            }
        }
        function Qr(t, e, l) {
            var a = t.tag;
            if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Yu));
            else if (a !== 4 && (a === 27 && gl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for(Qr(t, e, l), t = t.sibling; t !== null;)Qr(t, e, l), t = t.sibling;
        }
        function xu(t, e, l) {
            var a = t.tag;
            if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
            else if (a !== 4 && (a === 27 && gl(t.type) && (l = t.stateNode), t = t.child, t !== null)) for(xu(t, e, l), t = t.sibling; t !== null;)xu(t, e, l), t = t.sibling;
        }
        function qo(t) {
            var e = t.stateNode, l = t.memoizedProps;
            try {
                for(var a = t.type, n = e.attributes; n.length;)e.removeAttributeNode(n[0]);
                Yt(e, a, l), e[Vt] = t, e[$t] = l;
            } catch (u) {
                bt(t, t.return, u);
            }
        }
        var Xe = !1, Dt = !1, Yr = !1, Co = typeof WeakSet == "function" ? WeakSet : Set, qt = null;
        function Gm(t, e) {
            if (t = t.containerInfo, oc = Zu, t = kf(t), Li(t)) {
                if ("selectionStart" in t) var l = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
                else t: {
                    l = (l = t.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset, u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType, u.nodeType;
                        } catch  {
                            l = null;
                            break t;
                        }
                        var s = 0, h = -1, y = -1, A = 0, z = 0, w = t, _ = null;
                        e: for(;;){
                            for(var M; w !== l || n !== 0 && w.nodeType !== 3 || (h = s + n), w !== u || a !== 0 && w.nodeType !== 3 || (y = s + a), w.nodeType === 3 && (s += w.nodeValue.length), (M = w.firstChild) !== null;)_ = w, w = M;
                            for(;;){
                                if (w === t) break e;
                                if (_ === l && ++A === n && (h = s), _ === u && ++z === a && (y = s), (M = w.nextSibling) !== null) break;
                                w = _, _ = w.parentNode;
                            }
                            w = M;
                        }
                        l = h === -1 || y === -1 ? null : {
                            start: h,
                            end: y
                        };
                    } else l = null;
                }
                l = l || {
                    start: 0,
                    end: 0
                };
            } else l = null;
            for(hc = {
                focusedElem: t,
                selectionRange: l
            }, Zu = !1, qt = e; qt !== null;)if (e = qt, t = e.child, (e.subtreeFlags & 1024) !== 0 && t !== null) t.return = e, qt = t;
            else for(; qt !== null;){
                switch(e = qt, u = e.alternate, t = e.flags, e.tag){
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && u !== null) {
                            t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                            try {
                                var I = Yl(l.type, n, l.elementType === l.type);
                                t = a.getSnapshotBeforeUpdate(I, u), a.__reactInternalSnapshotBeforeUpdate = t;
                            } catch ($) {
                                bt(l, l.return, $);
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) mc(t);
                            else if (l === 1) switch(t.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    mc(t);
                                    break;
                                default:
                                    t.textContent = "";
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
                        if ((t & 1024) !== 0) throw Error(f(163));
                }
                if (t = e.sibling, t !== null) {
                    t.return = e.return, qt = t;
                    break;
                }
                qt = e.return;
            }
        }
        function Ho(t, e, l) {
            var a = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    ol(t, l), a & 4 && hn(5, l);
                    break;
                case 1:
                    if (ol(t, l), a & 4) if (t = l.stateNode, e === null) try {
                        t.componentDidMount();
                    } catch (s) {
                        bt(l, l.return, s);
                    }
                    else {
                        var n = Yl(l.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
                        } catch (s) {
                            bt(l, l.return, s);
                        }
                    }
                    a & 64 && Bo(l), a & 512 && dn(l, l.return);
                    break;
                case 3:
                    if (ol(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
                        if (e = null, l.child !== null) switch(l.child.tag){
                            case 27:
                            case 5:
                                e = l.child.stateNode;
                                break;
                            case 1:
                                e = l.child.stateNode;
                        }
                        try {
                            gs(t, e);
                        } catch (s) {
                            bt(l, l.return, s);
                        }
                    }
                    break;
                case 27:
                    e === null && a & 4 && qo(l);
                case 26:
                case 5:
                    ol(t, l), e === null && a & 4 && wo(l), a & 512 && dn(l, l.return);
                    break;
                case 12:
                    ol(t, l);
                    break;
                case 13:
                    ol(t, l), a & 4 && Yo(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Wm.bind(null, l), my(t, l))));
                    break;
                case 22:
                    if (a = l.memoizedState !== null || Xe, !a) {
                        e = e !== null && e.memoizedState !== null || Dt, n = Xe;
                        var u = Dt;
                        Xe = a, (Dt = e) && !u ? hl(t, l, (l.subtreeFlags & 8772) !== 0) : ol(t, l), Xe = n, Dt = u;
                    }
                    break;
                case 30:
                    break;
                default:
                    ol(t, l);
            }
        }
        function Lo(t) {
            var e = t.alternate;
            e !== null && (t.alternate = null, Lo(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Si(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
        }
        var Tt = null, It = !1;
        function Ve(t, e, l) {
            for(l = l.child; l !== null;)Qo(t, e, l), l = l.sibling;
        }
        function Qo(t, e, l) {
            if (le && typeof le.onCommitFiberUnmount == "function") try {
                le.onCommitFiberUnmount(Ua, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    Dt || xe(l, e), Ve(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    Dt || xe(l, e);
                    var a = Tt, n = It;
                    gl(l.type) && (Tt = l.stateNode, It = !1), Ve(t, e, l), Rn(l.stateNode), Tt = a, It = n;
                    break;
                case 5:
                    Dt || xe(l, e);
                case 6:
                    if (a = Tt, n = It, Tt = null, Ve(t, e, l), Tt = a, It = n, Tt !== null) if (It) try {
                        (Tt.nodeType === 9 ? Tt.body : Tt.nodeName === "HTML" ? Tt.ownerDocument.body : Tt).removeChild(l.stateNode);
                    } catch (u) {
                        bt(l, e, u);
                    }
                    else try {
                        Tt.removeChild(l.stateNode);
                    } catch (u) {
                        bt(l, e, u);
                    }
                    break;
                case 18:
                    Tt !== null && (It ? (t = Tt, Nh(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), xn(t)) : Nh(Tt, l.stateNode));
                    break;
                case 4:
                    a = Tt, n = It, Tt = l.stateNode.containerInfo, It = !0, Ve(t, e, l), Tt = a, It = n;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    Dt || sl(2, l, e), Dt || sl(4, l, e), Ve(t, e, l);
                    break;
                case 1:
                    Dt || (xe(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Uo(l, e, a)), Ve(t, e, l);
                    break;
                case 21:
                    Ve(t, e, l);
                    break;
                case 22:
                    Dt = (a = Dt) || l.memoizedState !== null, Ve(t, e, l), Dt = a;
                    break;
                default:
                    Ve(t, e, l);
            }
        }
        function Yo(t, e) {
            if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
                xn(t);
            } catch (l) {
                bt(e, e.return, l);
            }
        }
        function jm(t) {
            switch(t.tag){
                case 13:
                case 19:
                    var e = t.stateNode;
                    return e === null && (e = t.stateNode = new Co), e;
                case 22:
                    return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Co), e;
                default:
                    throw Error(f(435, t.tag));
            }
        }
        function Gr(t, e) {
            var l = jm(t);
            e.forEach(function(a) {
                var n = Fm.bind(null, t, a);
                l.has(a) || (l.add(a), a.then(n, n));
            });
        }
        function ie(t, e) {
            var l = e.deletions;
            if (l !== null) for(var a = 0; a < l.length; a++){
                var n = l[a], u = t, s = e, h = s;
                t: for(; h !== null;){
                    switch(h.tag){
                        case 27:
                            if (gl(h.type)) {
                                Tt = h.stateNode, It = !1;
                                break t;
                            }
                            break;
                        case 5:
                            Tt = h.stateNode, It = !1;
                            break t;
                        case 3:
                        case 4:
                            Tt = h.stateNode.containerInfo, It = !0;
                            break t;
                    }
                    h = h.return;
                }
                if (Tt === null) throw Error(f(160));
                Qo(u, s, n), Tt = null, It = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
            }
            if (e.subtreeFlags & 13878) for(e = e.child; e !== null;)Go(e, t), e = e.sibling;
        }
        var Oe = null;
        function Go(t, e) {
            var l = t.alternate, a = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    ie(e, t), re(t), a & 4 && (sl(3, t, t.return), hn(3, t), sl(5, t, t.return));
                    break;
                case 1:
                    ie(e, t), re(t), a & 512 && (Dt || l === null || xe(l, l.return)), a & 64 && Xe && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
                    break;
                case 26:
                    var n = Oe;
                    if (ie(e, t), re(t), a & 512 && (Dt || l === null || xe(l, l.return)), a & 4) {
                        var u = l !== null ? l.memoizedState : null;
                        if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
                            t: {
                                a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                                e: switch(a){
                                    case "title":
                                        u = n.getElementsByTagName("title")[0], (!u || u[qa] || u[Vt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Yt(u, a, l), u[Vt] = t, wt(u), a = u;
                                        break t;
                                    case "link":
                                        var s = qh("link", "href", n).get(a + (l.href || ""));
                                        if (s) {
                                            for(var h = 0; h < s.length; h++)if (u = s[h], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                s.splice(h, 1);
                                                break e;
                                            }
                                        }
                                        u = n.createElement(a), Yt(u, a, l), n.head.appendChild(u);
                                        break;
                                    case "meta":
                                        if (s = qh("meta", "content", n).get(a + (l.content || ""))) {
                                            for(h = 0; h < s.length; h++)if (u = s[h], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                s.splice(h, 1);
                                                break e;
                                            }
                                        }
                                        u = n.createElement(a), Yt(u, a, l), n.head.appendChild(u);
                                        break;
                                    default:
                                        throw Error(f(468, a));
                                }
                                u[Vt] = t, wt(u), a = u;
                            }
                            t.stateNode = a;
                        } else Ch(n, t.type, t.stateNode);
                        else t.stateNode = Ph(n, a, t.memoizedProps);
                        else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Ch(n, t.type, t.stateNode) : Ph(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && Hr(t, t.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    ie(e, t), re(t), a & 512 && (Dt || l === null || xe(l, l.return)), l !== null && a & 4 && Hr(t, t.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (ie(e, t), re(t), a & 512 && (Dt || l === null || xe(l, l.return)), t.flags & 32) {
                        n = t.stateNode;
                        try {
                            Il(n, "");
                        } catch (M) {
                            bt(t, t.return, M);
                        }
                    }
                    a & 4 && t.stateNode != null && (n = t.memoizedProps, Hr(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Yr = !0);
                    break;
                case 6:
                    if (ie(e, t), re(t), a & 4) {
                        if (t.stateNode === null) throw Error(f(162));
                        a = t.memoizedProps, l = t.stateNode;
                        try {
                            l.nodeValue = a;
                        } catch (M) {
                            bt(t, t.return, M);
                        }
                    }
                    break;
                case 3:
                    if (Xu = null, n = Oe, Oe = ju(e.containerInfo), ie(e, t), Oe = n, re(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        xn(e.containerInfo);
                    } catch (M) {
                        bt(t, t.return, M);
                    }
                    Yr && (Yr = !1, jo(t));
                    break;
                case 4:
                    a = Oe, Oe = ju(t.stateNode.containerInfo), ie(e, t), re(t), Oe = a;
                    break;
                case 12:
                    ie(e, t), re(t);
                    break;
                case 13:
                    ie(e, t), re(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Zr = Me()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Gr(t, a)));
                    break;
                case 22:
                    n = t.memoizedState !== null;
                    var y = l !== null && l.memoizedState !== null, A = Xe, z = Dt;
                    if (Xe = A || n, Dt = z || y, ie(e, t), Dt = z, Xe = A, re(t), a & 8192) t: for(e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || y || Xe || Dt || Gl(t)), l = null, e = t;;){
                        if (e.tag === 5 || e.tag === 26) {
                            if (l === null) {
                                y = l = e;
                                try {
                                    if (u = y.stateNode, n) s = u.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                                    else {
                                        h = y.stateNode;
                                        var w = y.memoizedProps.style, _ = w != null && w.hasOwnProperty("display") ? w.display : null;
                                        h.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                                    }
                                } catch (M) {
                                    bt(y, y.return, M);
                                }
                            }
                        } else if (e.tag === 6) {
                            if (l === null) {
                                y = e;
                                try {
                                    y.stateNode.nodeValue = n ? "" : y.memoizedProps;
                                } catch (M) {
                                    bt(y, y.return, M);
                                }
                            }
                        } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                            e.child.return = e, e = e.child;
                            continue;
                        }
                        if (e === t) break t;
                        for(; e.sibling === null;){
                            if (e.return === null || e.return === t) break t;
                            l === e && (l = null), e = e.return;
                        }
                        l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
                    }
                    a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Gr(t, l))));
                    break;
                case 19:
                    ie(e, t), re(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Gr(t, a)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    ie(e, t), re(t);
            }
        }
        function re(t) {
            var e = t.flags;
            if (e & 2) {
                try {
                    for(var l, a = t.return; a !== null;){
                        if (Po(a)) {
                            l = a;
                            break;
                        }
                        a = a.return;
                    }
                    if (l == null) throw Error(f(160));
                    switch(l.tag){
                        case 27:
                            var n = l.stateNode, u = Lr(t);
                            xu(t, u, n);
                            break;
                        case 5:
                            var s = l.stateNode;
                            l.flags & 32 && (Il(s, ""), l.flags &= -33);
                            var h = Lr(t);
                            xu(t, h, s);
                            break;
                        case 3:
                        case 4:
                            var y = l.stateNode.containerInfo, A = Lr(t);
                            Qr(t, A, y);
                            break;
                        default:
                            throw Error(f(161));
                    }
                } catch (z) {
                    bt(t, t.return, z);
                }
                t.flags &= -3;
            }
            e & 4096 && (t.flags &= -4097);
        }
        function jo(t) {
            if (t.subtreeFlags & 1024) for(t = t.child; t !== null;){
                var e = t;
                jo(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
            }
        }
        function ol(t, e) {
            if (e.subtreeFlags & 8772) for(e = e.child; e !== null;)Ho(t, e.alternate, e), e = e.sibling;
        }
        function Gl(t) {
            for(t = t.child; t !== null;){
                var e = t;
                switch(e.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        sl(4, e, e.return), Gl(e);
                        break;
                    case 1:
                        xe(e, e.return);
                        var l = e.stateNode;
                        typeof l.componentWillUnmount == "function" && Uo(e, e.return, l), Gl(e);
                        break;
                    case 27:
                        Rn(e.stateNode);
                    case 26:
                    case 5:
                        xe(e, e.return), Gl(e);
                        break;
                    case 22:
                        e.memoizedState === null && Gl(e);
                        break;
                    case 30:
                        Gl(e);
                        break;
                    default:
                        Gl(e);
                }
                t = t.sibling;
            }
        }
        function hl(t, e, l) {
            for(l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;){
                var a = e.alternate, n = t, u = e, s = u.flags;
                switch(u.tag){
                    case 0:
                    case 11:
                    case 15:
                        hl(n, u, l), hn(4, u);
                        break;
                    case 1:
                        if (hl(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
                            n.componentDidMount();
                        } catch (A) {
                            bt(a, a.return, A);
                        }
                        if (a = u, n = a.updateQueue, n !== null) {
                            var h = a.stateNode;
                            try {
                                var y = n.shared.hiddenCallbacks;
                                if (y !== null) for(n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++)vs(y[n], h);
                            } catch (A) {
                                bt(a, a.return, A);
                            }
                        }
                        l && s & 64 && Bo(u), dn(u, u.return);
                        break;
                    case 27:
                        qo(u);
                    case 26:
                    case 5:
                        hl(n, u, l), l && a === null && s & 4 && wo(u), dn(u, u.return);
                        break;
                    case 12:
                        hl(n, u, l);
                        break;
                    case 13:
                        hl(n, u, l), l && s & 4 && Yo(n, u);
                        break;
                    case 22:
                        u.memoizedState === null && hl(n, u, l), dn(u, u.return);
                        break;
                    case 30:
                        break;
                    default:
                        hl(n, u, l);
                }
                e = e.sibling;
            }
        }
        function jr(t, e) {
            var l = null;
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Wa(l));
        }
        function Kr(t, e) {
            t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Wa(t));
        }
        function ze(t, e, l, a) {
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)Ko(t, e, l, a), e = e.sibling;
        }
        function Ko(t, e, l, a) {
            var n = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    ze(t, e, l, a), n & 2048 && hn(9, e);
                    break;
                case 1:
                    ze(t, e, l, a);
                    break;
                case 3:
                    ze(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Wa(t)));
                    break;
                case 12:
                    if (n & 2048) {
                        ze(t, e, l, a), t = e.stateNode;
                        try {
                            var u = e.memoizedProps, s = u.id, h = u.onPostCommit;
                            typeof h == "function" && h(s, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
                        } catch (y) {
                            bt(e, e.return, y);
                        }
                    } else ze(t, e, l, a);
                    break;
                case 13:
                    ze(t, e, l, a);
                    break;
                case 23:
                    break;
                case 22:
                    u = e.stateNode, s = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? ze(t, e, l, a) : pn(t, e) : u._visibility & 2 ? ze(t, e, l, a) : (u._visibility |= 2, ga(t, e, l, a, (e.subtreeFlags & 10256) !== 0)), n & 2048 && jr(s, e);
                    break;
                case 24:
                    ze(t, e, l, a), n & 2048 && Kr(e.alternate, e);
                    break;
                default:
                    ze(t, e, l, a);
            }
        }
        function ga(t, e, l, a, n) {
            for(n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null;){
                var u = t, s = e, h = l, y = a, A = s.flags;
                switch(s.tag){
                    case 0:
                    case 11:
                    case 15:
                        ga(u, s, h, y, n), hn(8, s);
                        break;
                    case 23:
                        break;
                    case 22:
                        var z = s.stateNode;
                        s.memoizedState !== null ? z._visibility & 2 ? ga(u, s, h, y, n) : pn(u, s) : (z._visibility |= 2, ga(u, s, h, y, n)), n && A & 2048 && jr(s.alternate, s);
                        break;
                    case 24:
                        ga(u, s, h, y, n), n && A & 2048 && Kr(s.alternate, s);
                        break;
                    default:
                        ga(u, s, h, y, n);
                }
                e = e.sibling;
            }
        }
        function pn(t, e) {
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;){
                var l = t, a = e, n = a.flags;
                switch(a.tag){
                    case 22:
                        pn(l, a), n & 2048 && jr(a.alternate, a);
                        break;
                    case 24:
                        pn(l, a), n & 2048 && Kr(a.alternate, a);
                        break;
                    default:
                        pn(l, a);
                }
                e = e.sibling;
            }
        }
        var mn = 8192;
        function ba(t) {
            if (t.subtreeFlags & mn) for(t = t.child; t !== null;)Xo(t), t = t.sibling;
        }
        function Xo(t) {
            switch(t.tag){
                case 26:
                    ba(t), t.flags & mn && t.memoizedState !== null && Ny(Oe, t.memoizedState, t.memoizedProps);
                    break;
                case 5:
                    ba(t);
                    break;
                case 3:
                case 4:
                    var e = Oe;
                    Oe = ju(t.stateNode.containerInfo), ba(t), Oe = e;
                    break;
                case 22:
                    t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = mn, mn = 16777216, ba(t), mn = e) : ba(t));
                    break;
                default:
                    ba(t);
            }
        }
        function Vo(t) {
            var e = t.alternate;
            if (e !== null && (t = e.child, t !== null)) {
                e.child = null;
                do e = t.sibling, t.sibling = null, t = e;
                while (t !== null);
            }
        }
        function yn(t) {
            var e = t.deletions;
            if ((t.flags & 16) !== 0) {
                if (e !== null) for(var l = 0; l < e.length; l++){
                    var a = e[l];
                    qt = a, Zo(a, t);
                }
                Vo(t);
            }
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)ko(t), t = t.sibling;
        }
        function ko(t) {
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    yn(t), t.flags & 2048 && sl(9, t, t.return);
                    break;
                case 3:
                    yn(t);
                    break;
                case 12:
                    yn(t);
                    break;
                case 22:
                    var e = t.stateNode;
                    t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, zu(t)) : yn(t);
                    break;
                default:
                    yn(t);
            }
        }
        function zu(t) {
            var e = t.deletions;
            if ((t.flags & 16) !== 0) {
                if (e !== null) for(var l = 0; l < e.length; l++){
                    var a = e[l];
                    qt = a, Zo(a, t);
                }
                Vo(t);
            }
            for(t = t.child; t !== null;){
                switch(e = t, e.tag){
                    case 0:
                    case 11:
                    case 15:
                        sl(8, e, e.return), zu(e);
                        break;
                    case 22:
                        l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, zu(e));
                        break;
                    default:
                        zu(e);
                }
                t = t.sibling;
            }
        }
        function Zo(t, e) {
            for(; qt !== null;){
                var l = qt;
                switch(l.tag){
                    case 0:
                    case 11:
                    case 15:
                        sl(8, l, e);
                        break;
                    case 23:
                    case 22:
                        if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                            var a = l.memoizedState.cachePool.pool;
                            a != null && a.refCount++;
                        }
                        break;
                    case 24:
                        Wa(l.memoizedState.cache);
                }
                if (a = l.child, a !== null) a.return = l, qt = a;
                else t: for(l = t; qt !== null;){
                    a = qt;
                    var n = a.sibling, u = a.return;
                    if (Lo(a), a === l) {
                        qt = null;
                        break t;
                    }
                    if (n !== null) {
                        n.return = u, qt = n;
                        break t;
                    }
                    qt = u;
                }
            }
        }
        var Km = {
            getCacheForType: function(t) {
                var e = kt(Bt), l = e.data.get(t);
                return l === void 0 && (l = t(), e.data.set(t, l)), l;
            }
        }, Xm = typeof WeakMap == "function" ? WeakMap : Map, dt = 0, St = null, ut = null, rt = 0, pt = 0, ce = null, dl = !1, Sa = !1, Xr = !1, ke = 0, Mt = 0, pl = 0, jl = 0, Vr = 0, be = 0, Ea = 0, vn = null, te = null, kr = !1, Zr = 0, Bu = 1 / 0, Uu = null, ml = null, Qt = 0, yl = null, Ra = null, Ta = 0, Jr = 0, $r = null, Jo = null, gn = 0, Wr = null;
        function fe() {
            if ((dt & 2) !== 0 && rt !== 0) return rt & -rt;
            if (B.T !== null) {
                var t = sa;
                return t !== 0 ? t : nc();
            }
            return sf();
        }
        function $o() {
            be === 0 && (be = (rt & 536870912) === 0 || ht ? uf() : 536870912);
            var t = ge.current;
            return t !== null && (t.flags |= 32), be;
        }
        function se(t, e, l) {
            (t === St && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null) && (Oa(t, 0), vl(t, rt, be, !1)), Pa(t, l), ((dt & 2) === 0 || t !== St) && (t === St && ((dt & 2) === 0 && (jl |= l), Mt === 4 && vl(t, rt, be, !1)), Be(t));
        }
        function Wo(t, e, l) {
            if ((dt & 6) !== 0) throw Error(f(327));
            var a = !l && (e & 124) === 0 && (e & t.expiredLanes) === 0 || wa(t, e), n = a ? Zm(t, e) : tc(t, e, !0), u = a;
            do {
                if (n === 0) {
                    Sa && !a && vl(t, e, 0, !1);
                    break;
                } else {
                    if (l = t.current.alternate, u && !Vm(l)) {
                        n = tc(t, e, !1), u = !1;
                        continue;
                    }
                    if (n === 2) {
                        if (u = e, t.errorRecoveryDisabledLanes & u) var s = 0;
                        else s = t.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
                        if (s !== 0) {
                            e = s;
                            t: {
                                var h = t;
                                n = vn;
                                var y = h.current.memoizedState.isDehydrated;
                                if (y && (Oa(h, s).flags |= 256), s = tc(h, s, !1), s !== 2) {
                                    if (Xr && !y) {
                                        h.errorRecoveryDisabledLanes |= u, jl |= u, n = 4;
                                        break t;
                                    }
                                    u = te, te = n, u !== null && (te === null ? te = u : te.push.apply(te, u));
                                }
                                n = s;
                            }
                            if (u = !1, n !== 2) continue;
                        }
                    }
                    if (n === 1) {
                        Oa(t, 0), vl(t, e, 0, !0);
                        break;
                    }
                    t: {
                        switch(a = t, u = n, u){
                            case 0:
                            case 1:
                                throw Error(f(345));
                            case 4:
                                if ((e & 4194048) !== e) break;
                            case 6:
                                vl(a, e, be, !dl);
                                break t;
                            case 2:
                                te = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(f(329));
                        }
                        if ((e & 62914560) === e && (n = Zr + 300 - Me(), 10 < n)) {
                            if (vl(a, e, be, !dl), Kn(a, 0, !0) !== 0) break t;
                            a.timeoutHandle = _h(Fo.bind(null, a, l, te, Uu, kr, e, be, jl, Ea, dl, u, 2, -0, 0), n);
                            break t;
                        }
                        Fo(a, l, te, Uu, kr, e, be, jl, Ea, dl, u, 0, -0, 0);
                    }
                }
                break;
            }while (!0);
            Be(t);
        }
        function Fo(t, e, l, a, n, u, s, h, y, A, z, w, _, M) {
            if (t.timeoutHandle = -1, w = e.subtreeFlags, (w & 8192 || (w & 16785408) === 16785408) && (An = {
                stylesheets: null,
                count: 0,
                unsuspend: My
            }, Xo(e), w = Dy(), w !== null)) {
                t.cancelPendingCommit = w(uh.bind(null, t, e, u, l, a, n, s, h, y, z, 1, _, M)), vl(t, u, s, !A);
                return;
            }
            uh(t, e, u, l, a, n, s, h, y);
        }
        function Vm(t) {
            for(var e = t;;){
                var l = e.tag;
                if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for(var a = 0; a < l.length; a++){
                    var n = l[a], u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!ne(u(), n)) return !1;
                    } catch  {
                        return !1;
                    }
                }
                if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
                else {
                    if (e === t) break;
                    for(; e.sibling === null;){
                        if (e.return === null || e.return === t) return !0;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            }
            return !0;
        }
        function vl(t, e, l, a) {
            e &= ~Vr, e &= ~jl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
            for(var n = e; 0 < n;){
                var u = 31 - ae(n), s = 1 << u;
                a[u] = -1, n &= ~s;
            }
            l !== 0 && cf(t, l, e);
        }
        function wu() {
            return (dt & 6) === 0 ? (bn(0), !1) : !0;
        }
        function Fr() {
            if (ut !== null) {
                if (pt === 0) var t = ut.return;
                else t = ut, Le = Cl = null, mr(t), ya = null, fn = 0, t = ut;
                for(; t !== null;)zo(t.alternate, t), t = t.return;
                ut = null;
            }
        }
        function Oa(t, e) {
            var l = t.timeoutHandle;
            l !== -1 && (t.timeoutHandle = -1, sy(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), Fr(), St = t, ut = l = qe(t.current, null), rt = e, pt = 0, ce = null, dl = !1, Sa = wa(t, e), Xr = !1, Ea = be = Vr = jl = pl = Mt = 0, te = vn = null, kr = !1, (e & 8) !== 0 && (e |= e & 32);
            var a = t.entangledLanes;
            if (a !== 0) for(t = t.entanglements, a &= e; 0 < a;){
                var n = 31 - ae(a), u = 1 << n;
                e |= t[n], a &= ~u;
            }
            return ke = e, lu(), l;
        }
        function Io(t, e) {
            at = null, B.H = Eu, e === Ia || e === ou ? (e = ms(), pt = 3) : e === hs ? (e = ms(), pt = 4) : pt = e === vo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ce = e, ut === null && (Mt = 1, _u(t, pe(e, t.current)));
        }
        function th() {
            var t = B.H;
            return B.H = Eu, t === null ? Eu : t;
        }
        function eh() {
            var t = B.A;
            return B.A = Km, t;
        }
        function Ir() {
            Mt = 4, dl || (rt & 4194048) !== rt && ge.current !== null || (Sa = !0), (pl & 134217727) === 0 && (jl & 134217727) === 0 || St === null || vl(St, rt, be, !1);
        }
        function tc(t, e, l) {
            var a = dt;
            dt |= 2;
            var n = th(), u = eh();
            (St !== t || rt !== e) && (Uu = null, Oa(t, e)), e = !1;
            var s = Mt;
            t: do try {
                if (pt !== 0 && ut !== null) {
                    var h = ut, y = ce;
                    switch(pt){
                        case 8:
                            Fr(), s = 6;
                            break t;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            ge.current === null && (e = !0);
                            var A = pt;
                            if (pt = 0, ce = null, Aa(t, h, y, A), l && Sa) {
                                s = 0;
                                break t;
                            }
                            break;
                        default:
                            A = pt, pt = 0, ce = null, Aa(t, h, y, A);
                    }
                }
                km(), s = Mt;
                break;
            } catch (z) {
                Io(t, z);
            }
            while (!0);
            return e && t.shellSuspendCounter++, Le = Cl = null, dt = a, B.H = n, B.A = u, ut === null && (St = null, rt = 0, lu()), s;
        }
        function km() {
            for(; ut !== null;)lh(ut);
        }
        function Zm(t, e) {
            var l = dt;
            dt |= 2;
            var a = th(), n = eh();
            St !== t || rt !== e ? (Uu = null, Bu = Me() + 500, Oa(t, e)) : Sa = wa(t, e);
            t: do try {
                if (pt !== 0 && ut !== null) {
                    e = ut;
                    var u = ce;
                    e: switch(pt){
                        case 1:
                            pt = 0, ce = null, Aa(t, e, u, 1);
                            break;
                        case 2:
                        case 9:
                            if (ds(u)) {
                                pt = 0, ce = null, ah(e);
                                break;
                            }
                            e = function() {
                                pt !== 2 && pt !== 9 || St !== t || (pt = 7), Be(t);
                            }, u.then(e, e);
                            break t;
                        case 3:
                            pt = 7;
                            break t;
                        case 4:
                            pt = 5;
                            break t;
                        case 7:
                            ds(u) ? (pt = 0, ce = null, ah(e)) : (pt = 0, ce = null, Aa(t, e, u, 7));
                            break;
                        case 5:
                            var s = null;
                            switch(ut.tag){
                                case 26:
                                    s = ut.memoizedState;
                                case 5:
                                case 27:
                                    var h = ut;
                                    if (!s || Hh(s)) {
                                        pt = 0, ce = null;
                                        var y = h.sibling;
                                        if (y !== null) ut = y;
                                        else {
                                            var A = h.return;
                                            A !== null ? (ut = A, Pu(A)) : ut = null;
                                        }
                                        break e;
                                    }
                            }
                            pt = 0, ce = null, Aa(t, e, u, 5);
                            break;
                        case 6:
                            pt = 0, ce = null, Aa(t, e, u, 6);
                            break;
                        case 8:
                            Fr(), Mt = 6;
                            break t;
                        default:
                            throw Error(f(462));
                    }
                }
                Jm();
                break;
            } catch (z) {
                Io(t, z);
            }
            while (!0);
            return Le = Cl = null, B.H = a, B.A = n, dt = l, ut !== null ? 0 : (St = null, rt = 0, lu(), Mt);
        }
        function Jm() {
            for(; ut !== null && !vp();)lh(ut);
        }
        function lh(t) {
            var e = Do(t.alternate, t, ke);
            t.memoizedProps = t.pendingProps, e === null ? Pu(t) : ut = e;
        }
        function ah(t) {
            var e = t, l = e.alternate;
            switch(e.tag){
                case 15:
                case 0:
                    e = To(l, e, e.pendingProps, e.type, void 0, rt);
                    break;
                case 11:
                    e = To(l, e, e.pendingProps, e.type.render, e.ref, rt);
                    break;
                case 5:
                    mr(e);
                default:
                    zo(l, e), e = ut = as(e, ke), e = Do(l, e, ke);
            }
            t.memoizedProps = t.pendingProps, e === null ? Pu(t) : ut = e;
        }
        function Aa(t, e, l, a) {
            Le = Cl = null, mr(e), ya = null, fn = 0;
            var n = e.return;
            try {
                if (Hm(t, n, e, l, rt)) {
                    Mt = 1, _u(t, pe(l, t.current)), ut = null;
                    return;
                }
            } catch (u) {
                if (n !== null) throw ut = n, u;
                Mt = 1, _u(t, pe(l, t.current)), ut = null;
                return;
            }
            e.flags & 32768 ? (ht || a === 1 ? t = !0 : Sa || (rt & 536870912) !== 0 ? t = !1 : (dl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current, a !== null && a.tag === 13 && (a.flags |= 16384))), nh(e, t)) : Pu(e);
        }
        function Pu(t) {
            var e = t;
            do {
                if ((e.flags & 32768) !== 0) {
                    nh(e, dl);
                    return;
                }
                t = e.return;
                var l = Qm(e.alternate, e, ke);
                if (l !== null) {
                    ut = l;
                    return;
                }
                if (e = e.sibling, e !== null) {
                    ut = e;
                    return;
                }
                ut = e = t;
            }while (e !== null);
            Mt === 0 && (Mt = 5);
        }
        function nh(t, e) {
            do {
                var l = Ym(t.alternate, t);
                if (l !== null) {
                    l.flags &= 32767, ut = l;
                    return;
                }
                if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
                    ut = t;
                    return;
                }
                ut = t = l;
            }while (t !== null);
            Mt = 6, ut = null;
        }
        function uh(t, e, l, a, n, u, s, h, y) {
            t.cancelPendingCommit = null;
            do qu();
            while (Qt !== 0);
            if ((dt & 6) !== 0) throw Error(f(327));
            if (e !== null) {
                if (e === t.current) throw Error(f(177));
                if (u = e.lanes | e.childLanes, u |= Ki, Mp(t, l, u, s, h, y), t === St && (ut = St = null, rt = 0), Ra = e, yl = t, Ta = l, Jr = u, $r = n, Jo = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Im(Yn, function() {
                    return sh(), null;
                })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
                    a = B.T, B.T = null, n = G.p, G.p = 2, s = dt, dt |= 4;
                    try {
                        Gm(t, e, l);
                    } finally{
                        dt = s, G.p = n, B.T = a;
                    }
                }
                Qt = 1, ih(), rh(), ch();
            }
        }
        function ih() {
            if (Qt === 1) {
                Qt = 0;
                var t = yl, e = Ra, l = (e.flags & 13878) !== 0;
                if ((e.subtreeFlags & 13878) !== 0 || l) {
                    l = B.T, B.T = null;
                    var a = G.p;
                    G.p = 2;
                    var n = dt;
                    dt |= 4;
                    try {
                        Go(e, t);
                        var u = hc, s = kf(t.containerInfo), h = u.focusedElem, y = u.selectionRange;
                        if (s !== h && h && h.ownerDocument && Vf(h.ownerDocument.documentElement, h)) {
                            if (y !== null && Li(h)) {
                                var A = y.start, z = y.end;
                                if (z === void 0 && (z = A), "selectionStart" in h) h.selectionStart = A, h.selectionEnd = Math.min(z, h.value.length);
                                else {
                                    var w = h.ownerDocument || document, _ = w && w.defaultView || window;
                                    if (_.getSelection) {
                                        var M = _.getSelection(), I = h.textContent.length, $ = Math.min(y.start, I), vt = y.end === void 0 ? $ : Math.min(y.end, I);
                                        !M.extend && $ > vt && (s = vt, vt = $, $ = s);
                                        var R = Xf(h, $), S = Xf(h, vt);
                                        if (R && S && (M.rangeCount !== 1 || M.anchorNode !== R.node || M.anchorOffset !== R.offset || M.focusNode !== S.node || M.focusOffset !== S.offset)) {
                                            var T = w.createRange();
                                            T.setStart(R.node, R.offset), M.removeAllRanges(), $ > vt ? (M.addRange(T), M.extend(S.node, S.offset)) : (T.setEnd(S.node, S.offset), M.addRange(T));
                                        }
                                    }
                                }
                            }
                            for(w = [], M = h; M = M.parentNode;)M.nodeType === 1 && w.push({
                                element: M,
                                left: M.scrollLeft,
                                top: M.scrollTop
                            });
                            for(typeof h.focus == "function" && h.focus(), h = 0; h < w.length; h++){
                                var U = w[h];
                                U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
                            }
                        }
                        Zu = !!oc, hc = oc = null;
                    } finally{
                        dt = n, G.p = a, B.T = l;
                    }
                }
                t.current = e, Qt = 2;
            }
        }
        function rh() {
            if (Qt === 2) {
                Qt = 0;
                var t = yl, e = Ra, l = (e.flags & 8772) !== 0;
                if ((e.subtreeFlags & 8772) !== 0 || l) {
                    l = B.T, B.T = null;
                    var a = G.p;
                    G.p = 2;
                    var n = dt;
                    dt |= 4;
                    try {
                        Ho(t, e.alternate, e);
                    } finally{
                        dt = n, G.p = a, B.T = l;
                    }
                }
                Qt = 3;
            }
        }
        function ch() {
            if (Qt === 4 || Qt === 3) {
                Qt = 0, gp();
                var t = yl, e = Ra, l = Ta, a = Jo;
                (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Qt = 5 : (Qt = 0, Ra = yl = null, fh(t, t.pendingLanes));
                var n = t.pendingLanes;
                if (n === 0 && (ml = null), gi(l), e = e.stateNode, le && typeof le.onCommitFiberRoot == "function") try {
                    le.onCommitFiberRoot(Ua, e, void 0, (e.current.flags & 128) === 128);
                } catch  {}
                if (a !== null) {
                    e = B.T, n = G.p, G.p = 2, B.T = null;
                    try {
                        for(var u = t.onRecoverableError, s = 0; s < a.length; s++){
                            var h = a[s];
                            u(h.value, {
                                componentStack: h.stack
                            });
                        }
                    } finally{
                        B.T = e, G.p = n;
                    }
                }
                (Ta & 3) !== 0 && qu(), Be(t), n = t.pendingLanes, (l & 4194090) !== 0 && (n & 42) !== 0 ? t === Wr ? gn++ : (gn = 0, Wr = t) : gn = 0, bn(0);
            }
        }
        function fh(t, e) {
            (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Wa(e)));
        }
        function qu(t) {
            return ih(), rh(), ch(), sh();
        }
        function sh() {
            if (Qt !== 5) return !1;
            var t = yl, e = Jr;
            Jr = 0;
            var l = gi(Ta), a = B.T, n = G.p;
            try {
                G.p = 32 > l ? 32 : l, B.T = null, l = $r, $r = null;
                var u = yl, s = Ta;
                if (Qt = 0, Ra = yl = null, Ta = 0, (dt & 6) !== 0) throw Error(f(331));
                var h = dt;
                if (dt |= 4, ko(u.current), Ko(u, u.current, s, l), dt = h, bn(0, !1), le && typeof le.onPostCommitFiberRoot == "function") try {
                    le.onPostCommitFiberRoot(Ua, u);
                } catch  {}
                return !0;
            } finally{
                G.p = n, B.T = a, fh(t, e);
            }
        }
        function oh(t, e, l) {
            e = pe(l, e), e = Dr(t.stateNode, e, 2), t = il(t, e, 2), t !== null && (Pa(t, 2), Be(t));
        }
        function bt(t, e, l) {
            if (t.tag === 3) oh(t, t, l);
            else for(; e !== null;){
                if (e.tag === 3) {
                    oh(e, t, l);
                    break;
                } else if (e.tag === 1) {
                    var a = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ml === null || !ml.has(a))) {
                        t = pe(l, t), l = mo(2), a = il(e, l, 2), a !== null && (yo(l, a, e, t), Pa(a, 2), Be(a));
                        break;
                    }
                }
                e = e.return;
            }
        }
        function ec(t, e, l) {
            var a = t.pingCache;
            if (a === null) {
                a = t.pingCache = new Xm;
                var n = new Set;
                a.set(e, n);
            } else n = a.get(e), n === void 0 && (n = new Set, a.set(e, n));
            n.has(l) || (Xr = !0, n.add(l), t = $m.bind(null, t, e, l), e.then(t, t));
        }
        function $m(t, e, l) {
            var a = t.pingCache;
            a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, St === t && (rt & l) === l && (Mt === 4 || Mt === 3 && (rt & 62914560) === rt && 300 > Me() - Zr ? (dt & 2) === 0 && Oa(t, 0) : Vr |= l, Ea === rt && (Ea = 0)), Be(t);
        }
        function hh(t, e) {
            e === 0 && (e = rf()), t = ia(t, e), t !== null && (Pa(t, e), Be(t));
        }
        function Wm(t) {
            var e = t.memoizedState, l = 0;
            e !== null && (l = e.retryLane), hh(t, l);
        }
        function Fm(t, e) {
            var l = 0;
            switch(t.tag){
                case 13:
                    var a = t.stateNode, n = t.memoizedState;
                    n !== null && (l = n.retryLane);
                    break;
                case 19:
                    a = t.stateNode;
                    break;
                case 22:
                    a = t.stateNode._retryCache;
                    break;
                default:
                    throw Error(f(314));
            }
            a !== null && a.delete(e), hh(t, l);
        }
        function Im(t, e) {
            return pi(t, e);
        }
        var Cu = null, _a = null, lc = !1, Hu = !1, ac = !1, Kl = 0;
        function Be(t) {
            t !== _a && t.next === null && (_a === null ? Cu = _a = t : _a = _a.next = t), Hu = !0, lc || (lc = !0, ey());
        }
        function bn(t, e) {
            if (!ac && Hu) {
                ac = !0;
                do for(var l = !1, a = Cu; a !== null;){
                    if (t !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0) var u = 0;
                        else {
                            var s = a.suspendedLanes, h = a.pingedLanes;
                            u = (1 << 31 - ae(42 | t) + 1) - 1, u &= n & ~(s & ~h), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
                        }
                        u !== 0 && (l = !0, yh(a, u));
                    } else u = rt, u = Kn(a, a === St ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || wa(a, u) || (l = !0, yh(a, u));
                    a = a.next;
                }
                while (l);
                ac = !1;
            }
        }
        function ty() {
            dh();
        }
        function dh() {
            Hu = lc = !1;
            var t = 0;
            Kl !== 0 && (fy() && (t = Kl), Kl = 0);
            for(var e = Me(), l = null, a = Cu; a !== null;){
                var n = a.next, u = ph(a, e);
                u === 0 ? (a.next = null, l === null ? Cu = n : l.next = n, n === null && (_a = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Hu = !0)), a = n;
            }
            bn(t);
        }
        function ph(t, e) {
            for(var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u;){
                var s = 31 - ae(u), h = 1 << s, y = n[s];
                y === -1 ? ((h & l) === 0 || (h & a) !== 0) && (n[s] = _p(h, e)) : y <= e && (t.expiredLanes |= h), u &= ~h;
            }
            if (e = St, l = rt, l = Kn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (pt === 2 || pt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && mi(a), t.callbackNode = null, t.callbackPriority = 0;
            if ((l & 3) === 0 || wa(t, l)) {
                if (e = l & -l, e === t.callbackPriority) return e;
                switch(a !== null && mi(a), gi(l)){
                    case 2:
                    case 8:
                        l = af;
                        break;
                    case 32:
                        l = Yn;
                        break;
                    case 268435456:
                        l = nf;
                        break;
                    default:
                        l = Yn;
                }
                return a = mh.bind(null, t), l = pi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
            }
            return a !== null && a !== null && mi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
        }
        function mh(t, e) {
            if (Qt !== 0 && Qt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
            var l = t.callbackNode;
            if (qu() && t.callbackNode !== l) return null;
            var a = rt;
            return a = Kn(t, t === St ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Wo(t, a, e), ph(t, Me()), t.callbackNode != null && t.callbackNode === l ? mh.bind(null, t) : null);
        }
        function yh(t, e) {
            if (qu()) return null;
            Wo(t, e, !0);
        }
        function ey() {
            oy(function() {
                (dt & 6) !== 0 ? pi(lf, ty) : dh();
            });
        }
        function nc() {
            return Kl === 0 && (Kl = uf()), Kl;
        }
        function vh(t) {
            return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Jn("" + t);
        }
        function gh(t, e) {
            var l = e.ownerDocument.createElement("input");
            return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
        }
        function ly(t, e, l, a, n) {
            if (e === "submit" && l && l.stateNode === n) {
                var u = vh((n[$t] || null).action), s = a.submitter;
                s && (e = (e = s[$t] || null) ? vh(e.formAction) : s.getAttribute("formAction"), e !== null && (u = e, s = null));
                var h = new In("action", "action", null, a, n);
                t.push({
                    event: h,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (a.defaultPrevented) {
                                    if (Kl !== 0) {
                                        var y = s ? gh(n, s) : new FormData(n);
                                        Or(l, {
                                            pending: !0,
                                            data: y,
                                            method: n.method,
                                            action: u
                                        }, null, y);
                                    }
                                } else typeof u == "function" && (h.preventDefault(), y = s ? gh(n, s) : new FormData(n), Or(l, {
                                    pending: !0,
                                    data: y,
                                    method: n.method,
                                    action: u
                                }, u, y));
                            },
                            currentTarget: n
                        }
                    ]
                });
            }
        }
        for(var uc = 0; uc < ji.length; uc++){
            var ic = ji[uc], ay = ic.toLowerCase(), ny = ic[0].toUpperCase() + ic.slice(1);
            Te(ay, "on" + ny);
        }
        Te($f, "onAnimationEnd"), Te(Wf, "onAnimationIteration"), Te(Ff, "onAnimationStart"), Te("dblclick", "onDoubleClick"), Te("focusin", "onFocus"), Te("focusout", "onBlur"), Te(Em, "onTransitionRun"), Te(Rm, "onTransitionStart"), Te(Tm, "onTransitionCancel"), Te(If, "onTransitionEnd"), $l("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), $l("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), $l("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), $l("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), Nl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Nl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Nl("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), Nl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Nl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Nl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), uy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));
        function bh(t, e) {
            e = (e & 4) !== 0;
            for(var l = 0; l < t.length; l++){
                var a = t[l], n = a.event;
                a = a.listeners;
                t: {
                    var u = void 0;
                    if (e) for(var s = a.length - 1; 0 <= s; s--){
                        var h = a[s], y = h.instance, A = h.currentTarget;
                        if (h = h.listener, y !== u && n.isPropagationStopped()) break t;
                        u = h, n.currentTarget = A;
                        try {
                            u(n);
                        } catch (z) {
                            Au(z);
                        }
                        n.currentTarget = null, u = y;
                    }
                    else for(s = 0; s < a.length; s++){
                        if (h = a[s], y = h.instance, A = h.currentTarget, h = h.listener, y !== u && n.isPropagationStopped()) break t;
                        u = h, n.currentTarget = A;
                        try {
                            u(n);
                        } catch (z) {
                            Au(z);
                        }
                        n.currentTarget = null, u = y;
                    }
                }
            }
        }
        function it(t, e) {
            var l = e[bi];
            l === void 0 && (l = e[bi] = new Set);
            var a = t + "__bubble";
            l.has(a) || (Sh(e, t, 2, !1), l.add(a));
        }
        function rc(t, e, l) {
            var a = 0;
            e && (a |= 4), Sh(l, t, a, e);
        }
        var Lu = "_reactListening" + Math.random().toString(36).slice(2);
        function cc(t) {
            if (!t[Lu]) {
                t[Lu] = !0, hf.forEach(function(l) {
                    l !== "selectionchange" && (uy.has(l) || rc(l, !1, t), rc(l, !0, t));
                });
                var e = t.nodeType === 9 ? t : t.ownerDocument;
                e === null || e[Lu] || (e[Lu] = !0, rc("selectionchange", !1, e));
            }
        }
        function Sh(t, e, l, a) {
            switch(Kh(e)){
                case 2:
                    var n = By;
                    break;
                case 8:
                    n = Uy;
                    break;
                default:
                    n = Rc;
            }
            l = n.bind(null, e, l, t), n = void 0, !xi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
                capture: !0,
                passive: n
            }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
                passive: n
            }) : t.addEventListener(e, l, !1);
        }
        function fc(t, e, l, a, n) {
            var u = a;
            if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for(;;){
                if (a === null) return;
                var s = a.tag;
                if (s === 3 || s === 4) {
                    var h = a.stateNode.containerInfo;
                    if (h === n) break;
                    if (s === 4) for(s = a.return; s !== null;){
                        var y = s.tag;
                        if ((y === 3 || y === 4) && s.stateNode.containerInfo === n) return;
                        s = s.return;
                    }
                    for(; h !== null;){
                        if (s = kl(h), s === null) return;
                        if (y = s.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                            a = u = s;
                            continue t;
                        }
                        h = h.parentNode;
                    }
                }
                a = a.return;
            }
            _f(function() {
                var A = u, z = Ni(l), w = [];
                t: {
                    var _ = ts.get(t);
                    if (_ !== void 0) {
                        var M = In, I = t;
                        switch(t){
                            case "keypress":
                                if (Wn(l) === 0) break t;
                            case "keydown":
                            case "keyup":
                                M = Ip;
                                break;
                            case "focusin":
                                I = "focus", M = wi;
                                break;
                            case "focusout":
                                I = "blur", M = wi;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                M = wi;
                                break;
                            case "click":
                                if (l.button === 2) break t;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                M = Df;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                M = Yp;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                M = lm;
                                break;
                            case $f:
                            case Wf:
                            case Ff:
                                M = Kp;
                                break;
                            case If:
                                M = nm;
                                break;
                            case "scroll":
                            case "scrollend":
                                M = Lp;
                                break;
                            case "wheel":
                                M = im;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                M = Vp;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                M = zf;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                M = cm;
                        }
                        var $ = (e & 4) !== 0, vt = !$ && (t === "scroll" || t === "scrollend"), R = $ ? _ !== null ? _ + "Capture" : null : _;
                        $ = [];
                        for(var S = A, T; S !== null;){
                            var U = S;
                            if (T = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || T === null || R === null || (U = Ha(S, R), U != null && $.push(En(S, U, T))), vt) break;
                            S = S.return;
                        }
                        0 < $.length && (_ = new M(_, I, null, l, z), w.push({
                            event: _,
                            listeners: $
                        }));
                    }
                }
                if ((e & 7) === 0) {
                    t: {
                        if (_ = t === "mouseover" || t === "pointerover", M = t === "mouseout" || t === "pointerout", _ && l !== Mi && (I = l.relatedTarget || l.fromElement) && (kl(I) || I[Vl])) break t;
                        if ((M || _) && (_ = z.window === z ? z : (_ = z.ownerDocument) ? _.defaultView || _.parentWindow : window, M ? (I = l.relatedTarget || l.toElement, M = A, I = I ? kl(I) : null, I !== null && (vt = d(I), $ = I.tag, I !== vt || $ !== 5 && $ !== 27 && $ !== 6) && (I = null)) : (M = null, I = A), M !== I)) {
                            if ($ = Df, U = "onMouseLeave", R = "onMouseEnter", S = "mouse", (t === "pointerout" || t === "pointerover") && ($ = zf, U = "onPointerLeave", R = "onPointerEnter", S = "pointer"), vt = M == null ? _ : Ca(M), T = I == null ? _ : Ca(I), _ = new $(U, S + "leave", M, l, z), _.target = vt, _.relatedTarget = T, U = null, kl(z) === A && ($ = new $(R, S + "enter", I, l, z), $.target = T, $.relatedTarget = vt, U = $), vt = U, M && I) e: {
                                for($ = M, R = I, S = 0, T = $; T; T = Ma(T))S++;
                                for(T = 0, U = R; U; U = Ma(U))T++;
                                for(; 0 < S - T;)$ = Ma($), S--;
                                for(; 0 < T - S;)R = Ma(R), T--;
                                for(; S--;){
                                    if ($ === R || R !== null && $ === R.alternate) break e;
                                    $ = Ma($), R = Ma(R);
                                }
                                $ = null;
                            }
                            else $ = null;
                            M !== null && Eh(w, _, M, $, !1), I !== null && vt !== null && Eh(w, vt, I, $, !0);
                        }
                    }
                    t: {
                        if (_ = A ? Ca(A) : window, M = _.nodeName && _.nodeName.toLowerCase(), M === "select" || M === "input" && _.type === "file") var X = Lf;
                        else if (Cf(_)) if (Qf) X = gm;
                        else {
                            X = ym;
                            var nt = mm;
                        }
                        else M = _.nodeName, !M || M.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? A && _i(A.elementType) && (X = Lf) : X = vm;
                        if (X && (X = X(t, A))) {
                            Hf(w, X, l, z);
                            break t;
                        }
                        nt && nt(t, _, A), t === "focusout" && A && _.type === "number" && A.memoizedProps.value != null && Ai(_, "number", _.value);
                    }
                    switch(nt = A ? Ca(A) : window, t){
                        case "focusin":
                            (Cf(nt) || nt.contentEditable === "true") && (aa = nt, Qi = A, Va = null);
                            break;
                        case "focusout":
                            Va = Qi = aa = null;
                            break;
                        case "mousedown":
                            Yi = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            Yi = !1, Zf(w, l, z);
                            break;
                        case "selectionchange":
                            if (Sm) break;
                        case "keydown":
                        case "keyup":
                            Zf(w, l, z);
                    }
                    var k;
                    if (qi) t: {
                        switch(t){
                            case "compositionstart":
                                var W = "onCompositionStart";
                                break t;
                            case "compositionend":
                                W = "onCompositionEnd";
                                break t;
                            case "compositionupdate":
                                W = "onCompositionUpdate";
                                break t;
                        }
                        W = void 0;
                    }
                    else la ? Pf(t, l) && (W = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (W = "onCompositionStart");
                    W && (Bf && l.locale !== "ko" && (la || W !== "onCompositionStart" ? W === "onCompositionEnd" && la && (k = Mf()) : (ll = z, zi = "value" in ll ? ll.value : ll.textContent, la = !0)), nt = Qu(A, W), 0 < nt.length && (W = new xf(W, t, null, l, z), w.push({
                        event: W,
                        listeners: nt
                    }), k ? W.data = k : (k = qf(l), k !== null && (W.data = k)))), (k = sm ? om(t, l) : hm(t, l)) && (W = Qu(A, "onBeforeInput"), 0 < W.length && (nt = new xf("onBeforeInput", "beforeinput", null, l, z), w.push({
                        event: nt,
                        listeners: W
                    }), nt.data = k)), ly(w, t, A, l, z);
                }
                bh(w, e);
            });
        }
        function En(t, e, l) {
            return {
                instance: t,
                listener: e,
                currentTarget: l
            };
        }
        function Qu(t, e) {
            for(var l = e + "Capture", a = []; t !== null;){
                var n = t, u = n.stateNode;
                if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ha(t, l), n != null && a.unshift(En(t, n, u)), n = Ha(t, e), n != null && a.push(En(t, n, u))), t.tag === 3) return a;
                t = t.return;
            }
            return [];
        }
        function Ma(t) {
            if (t === null) return null;
            do t = t.return;
            while (t && t.tag !== 5 && t.tag !== 27);
            return t || null;
        }
        function Eh(t, e, l, a, n) {
            for(var u = e._reactName, s = []; l !== null && l !== a;){
                var h = l, y = h.alternate, A = h.stateNode;
                if (h = h.tag, y !== null && y === a) break;
                h !== 5 && h !== 26 && h !== 27 || A === null || (y = A, n ? (A = Ha(l, u), A != null && s.unshift(En(l, A, y))) : n || (A = Ha(l, u), A != null && s.push(En(l, A, y)))), l = l.return;
            }
            s.length !== 0 && t.push({
                event: e,
                listeners: s
            });
        }
        var iy = /\r\n?/g, ry = /\u0000|\uFFFD/g;
        function Rh(t) {
            return (typeof t == "string" ? t : "" + t).replace(iy, `
`).replace(ry, "");
        }
        function Th(t, e) {
            return e = Rh(e), Rh(t) === e;
        }
        function Yu() {}
        function yt(t, e, l, a, n, u) {
            switch(l){
                case "children":
                    typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Il(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Il(t, "" + a);
                    break;
                case "className":
                    Vn(t, "class", a);
                    break;
                case "tabIndex":
                    Vn(t, "tabindex", a);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    Vn(t, l, a);
                    break;
                case "style":
                    Of(t, a, u);
                    break;
                case "data":
                    if (e !== "object") {
                        Vn(t, "data", a);
                        break;
                    }
                case "src":
                case "href":
                    if (a === "" && (e !== "a" || l !== "href")) {
                        t.removeAttribute(l);
                        break;
                    }
                    if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                        t.removeAttribute(l);
                        break;
                    }
                    a = Jn("" + a), t.setAttribute(l, a);
                    break;
                case "action":
                case "formAction":
                    if (typeof a == "function") {
                        t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof u == "function" && (l === "formAction" ? (e !== "input" && yt(t, e, "name", n.name, n, null), yt(t, e, "formEncType", n.formEncType, n, null), yt(t, e, "formMethod", n.formMethod, n, null), yt(t, e, "formTarget", n.formTarget, n, null)) : (yt(t, e, "encType", n.encType, n, null), yt(t, e, "method", n.method, n, null), yt(t, e, "target", n.target, n, null)));
                    if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                        t.removeAttribute(l);
                        break;
                    }
                    a = Jn("" + a), t.setAttribute(l, a);
                    break;
                case "onClick":
                    a != null && (t.onclick = Yu);
                    break;
                case "onScroll":
                    a != null && it("scroll", t);
                    break;
                case "onScrollEnd":
                    a != null && it("scrollend", t);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
                        if (l = a.__html, l != null) {
                            if (n.children != null) throw Error(f(60));
                            t.innerHTML = l;
                        }
                    }
                    break;
                case "multiple":
                    t.multiple = a && typeof a != "function" && typeof a != "symbol";
                    break;
                case "muted":
                    t.muted = a && typeof a != "function" && typeof a != "symbol";
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
                    if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                        t.removeAttribute("xlink:href");
                        break;
                    }
                    l = Jn("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
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
                    a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
                    break;
                case "capture":
                case "download":
                    a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
                    break;
                case "rowSpan":
                case "start":
                    a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
                    break;
                case "popover":
                    it("beforetoggle", t), it("toggle", t), Xn(t, "popover", a);
                    break;
                case "xlinkActuate":
                    we(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                    break;
                case "xlinkArcrole":
                    we(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                    break;
                case "xlinkRole":
                    we(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
                    break;
                case "xlinkShow":
                    we(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
                    break;
                case "xlinkTitle":
                    we(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
                    break;
                case "xlinkType":
                    we(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
                    break;
                case "xmlBase":
                    we(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                    break;
                case "xmlLang":
                    we(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                    break;
                case "xmlSpace":
                    we(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                    break;
                case "is":
                    Xn(t, "is", a);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Cp.get(l) || l, Xn(t, l, a));
            }
        }
        function sc(t, e, l, a, n, u) {
            switch(l){
                case "style":
                    Of(t, a, u);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
                        if (l = a.__html, l != null) {
                            if (n.children != null) throw Error(f(60));
                            t.innerHTML = l;
                        }
                    }
                    break;
                case "children":
                    typeof a == "string" ? Il(t, a) : (typeof a == "number" || typeof a == "bigint") && Il(t, "" + a);
                    break;
                case "onScroll":
                    a != null && it("scroll", t);
                    break;
                case "onScrollEnd":
                    a != null && it("scrollend", t);
                    break;
                case "onClick":
                    a != null && (t.onclick = Yu);
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
                    if (!df.hasOwnProperty(l)) t: {
                        if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[$t] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
                            typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
                            break t;
                        }
                        l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Xn(t, l, a);
                    }
            }
        }
        function Yt(t, e, l) {
            switch(e){
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
                    it("error", t), it("load", t);
                    var a = !1, n = !1, u;
                    for(u in l)if (l.hasOwnProperty(u)) {
                        var s = l[u];
                        if (s != null) switch(u){
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                n = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(f(137, e));
                            default:
                                yt(t, e, u, s, l, null);
                        }
                    }
                    n && yt(t, e, "srcSet", l.srcSet, l, null), a && yt(t, e, "src", l.src, l, null);
                    return;
                case "input":
                    it("invalid", t);
                    var h = u = s = n = null, y = null, A = null;
                    for(a in l)if (l.hasOwnProperty(a)) {
                        var z = l[a];
                        if (z != null) switch(a){
                            case "name":
                                n = z;
                                break;
                            case "type":
                                s = z;
                                break;
                            case "checked":
                                y = z;
                                break;
                            case "defaultChecked":
                                A = z;
                                break;
                            case "value":
                                u = z;
                                break;
                            case "defaultValue":
                                h = z;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (z != null) throw Error(f(137, e));
                                break;
                            default:
                                yt(t, e, a, z, l, null);
                        }
                    }
                    Sf(t, u, h, y, A, s, n, !1), kn(t);
                    return;
                case "select":
                    it("invalid", t), a = s = u = null;
                    for(n in l)if (l.hasOwnProperty(n) && (h = l[n], h != null)) switch(n){
                        case "value":
                            u = h;
                            break;
                        case "defaultValue":
                            s = h;
                            break;
                        case "multiple":
                            a = h;
                        default:
                            yt(t, e, n, h, l, null);
                    }
                    e = u, l = s, t.multiple = !!a, e != null ? Fl(t, !!a, e, !1) : l != null && Fl(t, !!a, l, !0);
                    return;
                case "textarea":
                    it("invalid", t), u = n = a = null;
                    for(s in l)if (l.hasOwnProperty(s) && (h = l[s], h != null)) switch(s){
                        case "value":
                            a = h;
                            break;
                        case "defaultValue":
                            n = h;
                            break;
                        case "children":
                            u = h;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (h != null) throw Error(f(91));
                            break;
                        default:
                            yt(t, e, s, h, l, null);
                    }
                    Rf(t, a, n, u), kn(t);
                    return;
                case "option":
                    for(y in l)if (l.hasOwnProperty(y) && (a = l[y], a != null)) switch(y){
                        case "selected":
                            t.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            yt(t, e, y, a, l, null);
                    }
                    return;
                case "dialog":
                    it("beforetoggle", t), it("toggle", t), it("cancel", t), it("close", t);
                    break;
                case "iframe":
                case "object":
                    it("load", t);
                    break;
                case "video":
                case "audio":
                    for(a = 0; a < Sn.length; a++)it(Sn[a], t);
                    break;
                case "image":
                    it("error", t), it("load", t);
                    break;
                case "details":
                    it("toggle", t);
                    break;
                case "embed":
                case "source":
                case "link":
                    it("error", t), it("load", t);
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
                    for(A in l)if (l.hasOwnProperty(A) && (a = l[A], a != null)) switch(A){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(f(137, e));
                        default:
                            yt(t, e, A, a, l, null);
                    }
                    return;
                default:
                    if (_i(e)) {
                        for(z in l)l.hasOwnProperty(z) && (a = l[z], a !== void 0 && sc(t, e, z, a, l, void 0));
                        return;
                    }
            }
            for(h in l)l.hasOwnProperty(h) && (a = l[h], a != null && yt(t, e, h, a, l, null));
        }
        function cy(t, e, l, a) {
            switch(e){
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
                    var n = null, u = null, s = null, h = null, y = null, A = null, z = null;
                    for(M in l){
                        var w = l[M];
                        if (l.hasOwnProperty(M) && w != null) switch(M){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                y = w;
                            default:
                                a.hasOwnProperty(M) || yt(t, e, M, null, a, w);
                        }
                    }
                    for(var _ in a){
                        var M = a[_];
                        if (w = l[_], a.hasOwnProperty(_) && (M != null || w != null)) switch(_){
                            case "type":
                                u = M;
                                break;
                            case "name":
                                n = M;
                                break;
                            case "checked":
                                A = M;
                                break;
                            case "defaultChecked":
                                z = M;
                                break;
                            case "value":
                                s = M;
                                break;
                            case "defaultValue":
                                h = M;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (M != null) throw Error(f(137, e));
                                break;
                            default:
                                M !== w && yt(t, e, _, M, a, w);
                        }
                    }
                    Oi(t, s, h, y, A, z, u, n);
                    return;
                case "select":
                    M = s = h = _ = null;
                    for(u in l)if (y = l[u], l.hasOwnProperty(u) && y != null) switch(u){
                        case "value":
                            break;
                        case "multiple":
                            M = y;
                        default:
                            a.hasOwnProperty(u) || yt(t, e, u, null, a, y);
                    }
                    for(n in a)if (u = a[n], y = l[n], a.hasOwnProperty(n) && (u != null || y != null)) switch(n){
                        case "value":
                            _ = u;
                            break;
                        case "defaultValue":
                            h = u;
                            break;
                        case "multiple":
                            s = u;
                        default:
                            u !== y && yt(t, e, n, u, a, y);
                    }
                    e = h, l = s, a = M, _ != null ? Fl(t, !!l, _, !1) : !!a != !!l && (e != null ? Fl(t, !!l, e, !0) : Fl(t, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    M = _ = null;
                    for(h in l)if (n = l[h], l.hasOwnProperty(h) && n != null && !a.hasOwnProperty(h)) switch(h){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            yt(t, e, h, null, a, n);
                    }
                    for(s in a)if (n = a[s], u = l[s], a.hasOwnProperty(s) && (n != null || u != null)) switch(s){
                        case "value":
                            _ = n;
                            break;
                        case "defaultValue":
                            M = n;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (n != null) throw Error(f(91));
                            break;
                        default:
                            n !== u && yt(t, e, s, n, a, u);
                    }
                    Ef(t, _, M);
                    return;
                case "option":
                    for(var I in l)if (_ = l[I], l.hasOwnProperty(I) && _ != null && !a.hasOwnProperty(I)) switch(I){
                        case "selected":
                            t.selected = !1;
                            break;
                        default:
                            yt(t, e, I, null, a, _);
                    }
                    for(y in a)if (_ = a[y], M = l[y], a.hasOwnProperty(y) && _ !== M && (_ != null || M != null)) switch(y){
                        case "selected":
                            t.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                            break;
                        default:
                            yt(t, e, y, _, a, M);
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
                    for(var $ in l)_ = l[$], l.hasOwnProperty($) && _ != null && !a.hasOwnProperty($) && yt(t, e, $, null, a, _);
                    for(A in a)if (_ = a[A], M = l[A], a.hasOwnProperty(A) && _ !== M && (_ != null || M != null)) switch(A){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (_ != null) throw Error(f(137, e));
                            break;
                        default:
                            yt(t, e, A, _, a, M);
                    }
                    return;
                default:
                    if (_i(e)) {
                        for(var vt in l)_ = l[vt], l.hasOwnProperty(vt) && _ !== void 0 && !a.hasOwnProperty(vt) && sc(t, e, vt, void 0, a, _);
                        for(z in a)_ = a[z], M = l[z], !a.hasOwnProperty(z) || _ === M || _ === void 0 && M === void 0 || sc(t, e, z, _, a, M);
                        return;
                    }
            }
            for(var R in l)_ = l[R], l.hasOwnProperty(R) && _ != null && !a.hasOwnProperty(R) && yt(t, e, R, null, a, _);
            for(w in a)_ = a[w], M = l[w], !a.hasOwnProperty(w) || _ === M || _ == null && M == null || yt(t, e, w, _, a, M);
        }
        var oc = null, hc = null;
        function Gu(t) {
            return t.nodeType === 9 ? t : t.ownerDocument;
        }
        function Oh(t) {
            switch(t){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function Ah(t, e) {
            if (t === 0) switch(e){
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
            return t === 1 && e === "foreignObject" ? 0 : t;
        }
        function dc(t, e) {
            return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
        }
        var pc = null;
        function fy() {
            var t = window.event;
            return t && t.type === "popstate" ? t === pc ? !1 : (pc = t, !0) : (pc = null, !1);
        }
        var _h = typeof setTimeout == "function" ? setTimeout : void 0, sy = typeof clearTimeout == "function" ? clearTimeout : void 0, Mh = typeof Promise == "function" ? Promise : void 0, oy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mh < "u" ? function(t) {
            return Mh.resolve(null).then(t).catch(hy);
        } : _h;
        function hy(t) {
            setTimeout(function() {
                throw t;
            });
        }
        function gl(t) {
            return t === "head";
        }
        function Nh(t, e) {
            var l = e, a = 0, n = 0;
            do {
                var u = l.nextSibling;
                if (t.removeChild(l), u && u.nodeType === 8) if (l = u.data, l === "/$") {
                    if (0 < a && 8 > a) {
                        l = a;
                        var s = t.ownerDocument;
                        if (l & 1 && Rn(s.documentElement), l & 2 && Rn(s.body), l & 4) for(l = s.head, Rn(l), s = l.firstChild; s;){
                            var h = s.nextSibling, y = s.nodeName;
                            s[qa] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && s.rel.toLowerCase() === "stylesheet" || l.removeChild(s), s = h;
                        }
                    }
                    if (n === 0) {
                        t.removeChild(u), xn(e);
                        return;
                    }
                    n--;
                } else l === "$" || l === "$?" || l === "$!" ? n++ : a = l.charCodeAt(0) - 48;
                else a = 0;
                l = u;
            }while (l);
            xn(e);
        }
        function mc(t) {
            var e = t.firstChild;
            for(e && e.nodeType === 10 && (e = e.nextSibling); e;){
                var l = e;
                switch(e = e.nextSibling, l.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        mc(l), Si(l);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if (l.rel.toLowerCase() === "stylesheet") continue;
                }
                t.removeChild(l);
            }
        }
        function dy(t, e, l, a) {
            for(; t.nodeType === 1;){
                var n = l;
                if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                    if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
                } else if (a) {
                    if (!t[qa]) switch(e){
                        case "meta":
                            if (!t.hasAttribute("itemprop")) break;
                            return t;
                        case "link":
                            if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
                            if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title)) break;
                            return t;
                        case "style":
                            if (t.hasAttribute("data-precedence")) break;
                            return t;
                        case "script":
                            if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
                            return t;
                        default:
                            return t;
                    }
                } else if (e === "input" && t.type === "hidden") {
                    var u = n.name == null ? null : "" + n.name;
                    if (n.type === "hidden" && t.getAttribute("name") === u) return t;
                } else return t;
                if (t = Ae(t.nextSibling), t === null) break;
            }
            return null;
        }
        function py(t, e, l) {
            if (e === "") return null;
            for(; t.nodeType !== 3;)if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ae(t.nextSibling), t === null)) return null;
            return t;
        }
        function yc(t) {
            return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
        }
        function my(t, e) {
            var l = t.ownerDocument;
            if (t.data !== "$?" || l.readyState === "complete") e();
            else {
                var a = function() {
                    e(), l.removeEventListener("DOMContentLoaded", a);
                };
                l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
            }
        }
        function Ae(t) {
            for(; t != null; t = t.nextSibling){
                var e = t.nodeType;
                if (e === 1 || e === 3) break;
                if (e === 8) {
                    if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F") break;
                    if (e === "/$") return null;
                }
            }
            return t;
        }
        var vc = null;
        function Dh(t) {
            t = t.previousSibling;
            for(var e = 0; t;){
                if (t.nodeType === 8) {
                    var l = t.data;
                    if (l === "$" || l === "$!" || l === "$?") {
                        if (e === 0) return t;
                        e--;
                    } else l === "/$" && e++;
                }
                t = t.previousSibling;
            }
            return null;
        }
        function xh(t, e, l) {
            switch(e = Gu(l), t){
                case "html":
                    if (t = e.documentElement, !t) throw Error(f(452));
                    return t;
                case "head":
                    if (t = e.head, !t) throw Error(f(453));
                    return t;
                case "body":
                    if (t = e.body, !t) throw Error(f(454));
                    return t;
                default:
                    throw Error(f(451));
            }
        }
        function Rn(t) {
            for(var e = t.attributes; e.length;)t.removeAttributeNode(e[0]);
            Si(t);
        }
        var Se = new Map, zh = new Set;
        function ju(t) {
            return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
        }
        var Ze = G.d;
        G.d = {
            f: yy,
            r: vy,
            D: gy,
            C: by,
            L: Sy,
            m: Ey,
            X: Ty,
            S: Ry,
            M: Oy
        };
        function yy() {
            var t = Ze.f(), e = wu();
            return t || e;
        }
        function vy(t) {
            var e = Zl(t);
            e !== null && e.tag === 5 && e.type === "form" ? $s(e) : Ze.r(t);
        }
        var Na = typeof document > "u" ? null : document;
        function Bh(t, e, l) {
            var a = Na;
            if (a && typeof e == "string" && e) {
                var n = de(e);
                n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), zh.has(n) || (zh.add(n), t = {
                    rel: t,
                    crossOrigin: l,
                    href: e
                }, a.querySelector(n) === null && (e = a.createElement("link"), Yt(e, "link", t), wt(e), a.head.appendChild(e)));
            }
        }
        function gy(t) {
            Ze.D(t), Bh("dns-prefetch", t, null);
        }
        function by(t, e) {
            Ze.C(t, e), Bh("preconnect", t, e);
        }
        function Sy(t, e, l) {
            Ze.L(t, e, l);
            var a = Na;
            if (a && t && e) {
                var n = 'link[rel="preload"][as="' + de(e) + '"]';
                e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + de(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + de(l.imageSizes) + '"]')) : n += '[href="' + de(t) + '"]';
                var u = n;
                switch(e){
                    case "style":
                        u = Da(t);
                        break;
                    case "script":
                        u = xa(t);
                }
                Se.has(u) || (t = E({
                    rel: "preload",
                    href: e === "image" && l && l.imageSrcSet ? void 0 : t,
                    as: e
                }, l), Se.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Tn(u)) || e === "script" && a.querySelector(On(u)) || (e = a.createElement("link"), Yt(e, "link", t), wt(e), a.head.appendChild(e)));
            }
        }
        function Ey(t, e) {
            Ze.m(t, e);
            var l = Na;
            if (l && t) {
                var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + de(a) + '"][href="' + de(t) + '"]', u = n;
                switch(a){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        u = xa(t);
                }
                if (!Se.has(u) && (t = E({
                    rel: "modulepreload",
                    href: t
                }, e), Se.set(u, t), l.querySelector(n) === null)) {
                    switch(a){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (l.querySelector(On(u))) return;
                    }
                    a = l.createElement("link"), Yt(a, "link", t), wt(a), l.head.appendChild(a);
                }
            }
        }
        function Ry(t, e, l) {
            Ze.S(t, e, l);
            var a = Na;
            if (a && t) {
                var n = Jl(a).hoistableStyles, u = Da(t);
                e = e || "default";
                var s = n.get(u);
                if (!s) {
                    var h = {
                        loading: 0,
                        preload: null
                    };
                    if (s = a.querySelector(Tn(u))) h.loading = 5;
                    else {
                        t = E({
                            rel: "stylesheet",
                            href: t,
                            "data-precedence": e
                        }, l), (l = Se.get(u)) && gc(t, l);
                        var y = s = a.createElement("link");
                        wt(y), Yt(y, "link", t), y._p = new Promise(function(A, z) {
                            y.onload = A, y.onerror = z;
                        }), y.addEventListener("load", function() {
                            h.loading |= 1;
                        }), y.addEventListener("error", function() {
                            h.loading |= 2;
                        }), h.loading |= 4, Ku(s, e, a);
                    }
                    s = {
                        type: "stylesheet",
                        instance: s,
                        count: 1,
                        state: h
                    }, n.set(u, s);
                }
            }
        }
        function Ty(t, e) {
            Ze.X(t, e);
            var l = Na;
            if (l && t) {
                var a = Jl(l).hoistableScripts, n = xa(t), u = a.get(n);
                u || (u = l.querySelector(On(n)), u || (t = E({
                    src: t,
                    async: !0
                }, e), (e = Se.get(n)) && bc(t, e), u = l.createElement("script"), wt(u), Yt(u, "link", t), l.head.appendChild(u)), u = {
                    type: "script",
                    instance: u,
                    count: 1,
                    state: null
                }, a.set(n, u));
            }
        }
        function Oy(t, e) {
            Ze.M(t, e);
            var l = Na;
            if (l && t) {
                var a = Jl(l).hoistableScripts, n = xa(t), u = a.get(n);
                u || (u = l.querySelector(On(n)), u || (t = E({
                    src: t,
                    async: !0,
                    type: "module"
                }, e), (e = Se.get(n)) && bc(t, e), u = l.createElement("script"), wt(u), Yt(u, "link", t), l.head.appendChild(u)), u = {
                    type: "script",
                    instance: u,
                    count: 1,
                    state: null
                }, a.set(n, u));
            }
        }
        function Uh(t, e, l, a) {
            var n = (n = et.current) ? ju(n) : null;
            if (!n) throw Error(f(446));
            switch(t){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Da(l.href), l = Jl(n).hoistableStyles, a = l.get(e), a || (a = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, l.set(e, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                        t = Da(l.href);
                        var u = Jl(n).hoistableStyles, s = u.get(t);
                        if (s || (n = n.ownerDocument || n, s = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, u.set(t, s), (u = n.querySelector(Tn(t))) && !u._p && (s.instance = u, s.state.loading = 5), Se.has(t) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, Se.set(t, l), u || Ay(n, t, l, s.state))), e && a === null) throw Error(f(528, ""));
                        return s;
                    }
                    if (e && a !== null) throw Error(f(529, ""));
                    return null;
                case "script":
                    return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = xa(l), l = Jl(n).hoistableScripts, a = l.get(e), a || (a = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, l.set(e, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(f(444, t));
            }
        }
        function Da(t) {
            return 'href="' + de(t) + '"';
        }
        function Tn(t) {
            return 'link[rel="stylesheet"][' + t + "]";
        }
        function wh(t) {
            return E({}, t, {
                "data-precedence": t.precedence,
                precedence: null
            });
        }
        function Ay(t, e, l, a) {
            t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
                return a.loading |= 1;
            }), e.addEventListener("error", function() {
                return a.loading |= 2;
            }), Yt(e, "link", l), wt(e), t.head.appendChild(e));
        }
        function xa(t) {
            return '[src="' + de(t) + '"]';
        }
        function On(t) {
            return "script[async]" + t;
        }
        function Ph(t, e, l) {
            if (e.count++, e.instance === null) switch(e.type){
                case "style":
                    var a = t.querySelector('style[data-href~="' + de(l.href) + '"]');
                    if (a) return e.instance = a, wt(a), a;
                    var n = E({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return a = (t.ownerDocument || t).createElement("style"), wt(a), Yt(a, "style", n), Ku(a, l.precedence, t), e.instance = a;
                case "stylesheet":
                    n = Da(l.href);
                    var u = t.querySelector(Tn(n));
                    if (u) return e.state.loading |= 4, e.instance = u, wt(u), u;
                    a = wh(l), (n = Se.get(n)) && gc(a, n), u = (t.ownerDocument || t).createElement("link"), wt(u);
                    var s = u;
                    return s._p = new Promise(function(h, y) {
                        s.onload = h, s.onerror = y;
                    }), Yt(u, "link", a), e.state.loading |= 4, Ku(u, l.precedence, t), e.instance = u;
                case "script":
                    return u = xa(l.src), (n = t.querySelector(On(u))) ? (e.instance = n, wt(n), n) : (a = l, (n = Se.get(u)) && (a = E({}, l), bc(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), wt(n), Yt(n, "link", a), t.head.appendChild(n), e.instance = n);
                case "void":
                    return null;
                default:
                    throw Error(f(443, e.type));
            }
            else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Ku(a, l.precedence, t));
            return e.instance;
        }
        function Ku(t, e, l) {
            for(var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, s = 0; s < a.length; s++){
                var h = a[s];
                if (h.dataset.precedence === e) u = h;
                else if (u !== n) break;
            }
            u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
        }
        function gc(t, e) {
            t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
        }
        function bc(t, e) {
            t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
        }
        var Xu = null;
        function qh(t, e, l) {
            if (Xu === null) {
                var a = new Map, n = Xu = new Map;
                n.set(l, a);
            } else n = Xu, a = n.get(l), a || (a = new Map, n.set(l, a));
            if (a.has(t)) return a;
            for(a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++){
                var u = l[n];
                if (!(u[qa] || u[Vt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var s = u.getAttribute(e) || "";
                    s = t + s;
                    var h = a.get(s);
                    h ? h.push(u) : a.set(s, [
                        u
                    ]);
                }
            }
            return a;
        }
        function Ch(t, e, l) {
            t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
        }
        function _y(t, e, l) {
            if (l === 1 || e.itemProp != null) return !1;
            switch(t){
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
                    return !0;
                case "link":
                    if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
                    switch(e.rel){
                        case "stylesheet":
                            return t = e.disabled, typeof e.precedence == "string" && t == null;
                        default:
                            return !0;
                    }
                case "script":
                    if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0;
            }
            return !1;
        }
        function Hh(t) {
            return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
        }
        var An = null;
        function My() {}
        function Ny(t, e, l) {
            if (An === null) throw Error(f(475));
            var a = An;
            if (e.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (e.state.loading & 4) === 0) {
                if (e.instance === null) {
                    var n = Da(l.href), u = t.querySelector(Tn(n));
                    if (u) {
                        t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (a.count++, a = Vu.bind(a), t.then(a, a)), e.state.loading |= 4, e.instance = u, wt(u);
                        return;
                    }
                    u = t.ownerDocument || t, l = wh(l), (n = Se.get(n)) && gc(l, n), u = u.createElement("link"), wt(u);
                    var s = u;
                    s._p = new Promise(function(h, y) {
                        s.onload = h, s.onerror = y;
                    }), Yt(u, "link", l), e.instance = u;
                }
                a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (a.count++, e = Vu.bind(a), t.addEventListener("load", e), t.addEventListener("error", e));
            }
        }
        function Dy() {
            if (An === null) throw Error(f(475));
            var t = An;
            return t.stylesheets && t.count === 0 && Sc(t, t.stylesheets), 0 < t.count ? function(e) {
                var l = setTimeout(function() {
                    if (t.stylesheets && Sc(t, t.stylesheets), t.unsuspend) {
                        var a = t.unsuspend;
                        t.unsuspend = null, a();
                    }
                }, 6e4);
                return t.unsuspend = e, function() {
                    t.unsuspend = null, clearTimeout(l);
                };
            } : null;
        }
        function Vu() {
            if (this.count--, this.count === 0) {
                if (this.stylesheets) Sc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var t = this.unsuspend;
                    this.unsuspend = null, t();
                }
            }
        }
        var ku = null;
        function Sc(t, e) {
            t.stylesheets = null, t.unsuspend !== null && (t.count++, ku = new Map, e.forEach(xy, t), ku = null, Vu.call(t));
        }
        function xy(t, e) {
            if (!(e.state.loading & 4)) {
                var l = ku.get(t);
                if (l) var a = l.get(null);
                else {
                    l = new Map, ku.set(t, l);
                    for(var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++){
                        var s = n[u];
                        (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), a = s);
                    }
                    a && l.set(null, a);
                }
                n = e.instance, s = n.getAttribute("data-precedence"), u = l.get(s) || a, u === a && l.set(null, n), l.set(s, n), this.count++, a = Vu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
            }
        }
        var _n = {
            $$typeof: V,
            Provider: null,
            Consumer: null,
            _currentValue: F,
            _currentValue2: F,
            _threadCount: 0
        };
        function zy(t, e, l, a, n, u, s, h) {
            this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yi(0), this.hiddenUpdates = yi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = new Map;
        }
        function Lh(t, e, l, a, n, u, s, h, y, A, z, w) {
            return t = new zy(t, e, l, s, h, y, A, w), e = 1, u === !0 && (e |= 24), u = ue(3, null, null, e), t.current = u, u.stateNode = t, e = er(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
                element: a,
                isDehydrated: l,
                cache: e
            }, ur(u), t;
        }
        function Qh(t) {
            return t ? (t = ra, t) : ra;
        }
        function Yh(t, e, l, a, n, u) {
            n = Qh(n), a.context === null ? a.context = n : a.pendingContext = n, a = ul(e), a.payload = {
                element: l
            }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = il(t, a, e), l !== null && (se(l, t, e), en(l, t, e));
        }
        function Gh(t, e) {
            if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
                var l = t.retryLane;
                t.retryLane = l !== 0 && l < e ? l : e;
            }
        }
        function Ec(t, e) {
            Gh(t, e), (t = t.alternate) && Gh(t, e);
        }
        function jh(t) {
            if (t.tag === 13) {
                var e = ia(t, 67108864);
                e !== null && se(e, t, 67108864), Ec(t, 67108864);
            }
        }
        var Zu = !0;
        function By(t, e, l, a) {
            var n = B.T;
            B.T = null;
            var u = G.p;
            try {
                G.p = 2, Rc(t, e, l, a);
            } finally{
                G.p = u, B.T = n;
            }
        }
        function Uy(t, e, l, a) {
            var n = B.T;
            B.T = null;
            var u = G.p;
            try {
                G.p = 8, Rc(t, e, l, a);
            } finally{
                G.p = u, B.T = n;
            }
        }
        function Rc(t, e, l, a) {
            if (Zu) {
                var n = Tc(a);
                if (n === null) fc(t, e, a, Ju, l), Xh(t, a);
                else if (Py(n, t, e, l, a)) a.stopPropagation();
                else if (Xh(t, a), e & 4 && -1 < wy.indexOf(t)) {
                    for(; n !== null;){
                        var u = Zl(n);
                        if (u !== null) switch(u.tag){
                            case 3:
                                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                    var s = Ml(u.pendingLanes);
                                    if (s !== 0) {
                                        var h = u;
                                        for(h.pendingLanes |= 2, h.entangledLanes |= 2; s;){
                                            var y = 1 << 31 - ae(s);
                                            h.entanglements[1] |= y, s &= ~y;
                                        }
                                        Be(u), (dt & 6) === 0 && (Bu = Me() + 500, bn(0));
                                    }
                                }
                                break;
                            case 13:
                                h = ia(u, 2), h !== null && se(h, u, 2), wu(), Ec(u, 2);
                        }
                        if (u = Tc(a), u === null && fc(t, e, a, Ju, l), u === n) break;
                        n = u;
                    }
                    n !== null && a.stopPropagation();
                } else fc(t, e, a, null, l);
            }
        }
        function Tc(t) {
            return t = Ni(t), Oc(t);
        }
        var Ju = null;
        function Oc(t) {
            if (Ju = null, t = kl(t), t !== null) {
                var e = d(t);
                if (e === null) t = null;
                else {
                    var l = e.tag;
                    if (l === 13) {
                        if (t = v(e), t !== null) return t;
                        t = null;
                    } else if (l === 3) {
                        if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
                        t = null;
                    } else e !== t && (t = null);
                }
            }
            return Ju = t, null;
        }
        function Kh(t) {
            switch(t){
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
                    switch(bp()){
                        case lf:
                            return 2;
                        case af:
                            return 8;
                        case Yn:
                        case Sp:
                            return 32;
                        case nf:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var Ac = !1, bl = null, Sl = null, El = null, Mn = new Map, Nn = new Map, Rl = [], wy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function Xh(t, e) {
            switch(t){
                case "focusin":
                case "focusout":
                    bl = null;
                    break;
                case "dragenter":
                case "dragleave":
                    Sl = null;
                    break;
                case "mouseover":
                case "mouseout":
                    El = null;
                    break;
                case "pointerover":
                case "pointerout":
                    Mn.delete(e.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Nn.delete(e.pointerId);
            }
        }
        function Dn(t, e, l, a, n, u) {
            return t === null || t.nativeEvent !== u ? (t = {
                blockedOn: e,
                domEventName: l,
                eventSystemFlags: a,
                nativeEvent: u,
                targetContainers: [
                    n
                ]
            }, e !== null && (e = Zl(e), e !== null && jh(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
        }
        function Py(t, e, l, a, n) {
            switch(e){
                case "focusin":
                    return bl = Dn(bl, t, e, l, a, n), !0;
                case "dragenter":
                    return Sl = Dn(Sl, t, e, l, a, n), !0;
                case "mouseover":
                    return El = Dn(El, t, e, l, a, n), !0;
                case "pointerover":
                    var u = n.pointerId;
                    return Mn.set(u, Dn(Mn.get(u) || null, t, e, l, a, n)), !0;
                case "gotpointercapture":
                    return u = n.pointerId, Nn.set(u, Dn(Nn.get(u) || null, t, e, l, a, n)), !0;
            }
            return !1;
        }
        function Vh(t) {
            var e = kl(t.target);
            if (e !== null) {
                var l = d(e);
                if (l !== null) {
                    if (e = l.tag, e === 13) {
                        if (e = v(l), e !== null) {
                            t.blockedOn = e, Np(t.priority, function() {
                                if (l.tag === 13) {
                                    var a = fe();
                                    a = vi(a);
                                    var n = ia(l, a);
                                    n !== null && se(n, l, a), Ec(l, a);
                                }
                            });
                            return;
                        }
                    } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                        t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            t.blockedOn = null;
        }
        function $u(t) {
            if (t.blockedOn !== null) return !1;
            for(var e = t.targetContainers; 0 < e.length;){
                var l = Tc(t.nativeEvent);
                if (l === null) {
                    l = t.nativeEvent;
                    var a = new l.constructor(l.type, l);
                    Mi = a, l.target.dispatchEvent(a), Mi = null;
                } else return e = Zl(l), e !== null && jh(e), t.blockedOn = l, !1;
                e.shift();
            }
            return !0;
        }
        function kh(t, e, l) {
            $u(t) && l.delete(e);
        }
        function qy() {
            Ac = !1, bl !== null && $u(bl) && (bl = null), Sl !== null && $u(Sl) && (Sl = null), El !== null && $u(El) && (El = null), Mn.forEach(kh), Nn.forEach(kh);
        }
        function Wu(t, e) {
            t.blockedOn === e && (t.blockedOn = null, Ac || (Ac = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, qy)));
        }
        var Fu = null;
        function Zh(t) {
            Fu !== t && (Fu = t, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
                Fu === t && (Fu = null);
                for(var e = 0; e < t.length; e += 3){
                    var l = t[e], a = t[e + 1], n = t[e + 2];
                    if (typeof a != "function") {
                        if (Oc(a || l) === null) continue;
                        break;
                    }
                    var u = Zl(l);
                    u !== null && (t.splice(e, 3), e -= 3, Or(u, {
                        pending: !0,
                        data: n,
                        method: l.method,
                        action: a
                    }, a, n));
                }
            }));
        }
        function xn(t) {
            function e(y) {
                return Wu(y, t);
            }
            bl !== null && Wu(bl, t), Sl !== null && Wu(Sl, t), El !== null && Wu(El, t), Mn.forEach(e), Nn.forEach(e);
            for(var l = 0; l < Rl.length; l++){
                var a = Rl[l];
                a.blockedOn === t && (a.blockedOn = null);
            }
            for(; 0 < Rl.length && (l = Rl[0], l.blockedOn === null);)Vh(l), l.blockedOn === null && Rl.shift();
            if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for(a = 0; a < l.length; a += 3){
                var n = l[a], u = l[a + 1], s = n[$t] || null;
                if (typeof u == "function") s || Zh(l);
                else if (s) {
                    var h = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u, s = u[$t] || null) h = s.formAction;
                        else if (Oc(n) !== null) continue;
                    } else h = s.action;
                    typeof h == "function" ? l[a + 1] = h : (l.splice(a, 3), a -= 3), Zh(l);
                }
            }
        }
        function _c(t) {
            this._internalRoot = t;
        }
        Iu.prototype.render = _c.prototype.render = function(t) {
            var e = this._internalRoot;
            if (e === null) throw Error(f(409));
            var l = e.current, a = fe();
            Yh(l, a, t, e, null, null);
        }, Iu.prototype.unmount = _c.prototype.unmount = function() {
            var t = this._internalRoot;
            if (t !== null) {
                this._internalRoot = null;
                var e = t.containerInfo;
                Yh(t.current, 2, null, t, null, null), wu(), e[Vl] = null;
            }
        };
        function Iu(t) {
            this._internalRoot = t;
        }
        Iu.prototype.unstable_scheduleHydration = function(t) {
            if (t) {
                var e = sf();
                t = {
                    blockedOn: null,
                    target: t,
                    priority: e
                };
                for(var l = 0; l < Rl.length && e !== 0 && e < Rl[l].priority; l++);
                Rl.splice(l, 0, t), l === 0 && Vh(t);
            }
        };
        var Jh = r.version;
        if (Jh !== "19.1.0") throw Error(f(527, Jh, "19.1.0"));
        G.findDOMNode = function(t) {
            var e = t._reactInternals;
            if (e === void 0) throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
            return t = p(e), t = t !== null ? m(t) : null, t = t === null ? null : t.stateNode, t;
        };
        var Cy = {
            bundleType: 0,
            version: "19.1.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: B,
            reconcilerVersion: "19.1.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!ti.isDisabled && ti.supportsFiber) try {
                Ua = ti.inject(Cy), le = ti;
            } catch  {}
        }
        return Bn.createRoot = function(t, e) {
            if (!o(t)) throw Error(f(299));
            var l = !1, a = "", n = so, u = oo, s = ho, h = null;
            return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (h = e.unstable_transitionCallbacks)), e = Lh(t, 1, !1, null, null, l, a, n, u, s, h, null), t[Vl] = e.current, cc(t), new _c(e);
        }, Bn.hydrateRoot = function(t, e, l) {
            if (!o(t)) throw Error(f(299));
            var a = !1, n = "", u = so, s = oo, h = ho, y = null, A = null;
            return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (y = l.unstable_transitionCallbacks), l.formState !== void 0 && (A = l.formState)), e = Lh(t, 1, !0, e, l ?? null, a, n, u, s, h, y, A), e.context = Qh(null), l = e.current, a = fe(), a = vi(a), n = ul(a), n.callback = null, il(l, n, a), l = a, e.current.lanes = l, Pa(e, l), Be(e), t[Vl] = e.current, cc(t), new Iu(e);
        }, Bn.version = "19.1.0", Bn;
    }
    var ud;
    function Zy() {
        if (ud) return Nc.exports;
        ud = 1;
        function i() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
            } catch (r) {
                console.error(r);
            }
        }
        return i(), Nc.exports = ky(), Nc.exports;
    }
    let Jy;
    Jy = Zy();
    N = fi();
    gg = Ly(N);
    var Uc = {
        exports: {}
    }, wc = {};
    var id;
    function $y() {
        if (id) return wc;
        id = 1;
        var i = fi();
        function r(p, m) {
            return p === m && (p !== 0 || 1 / p === 1 / m) || p !== p && m !== m;
        }
        var c = typeof Object.is == "function" ? Object.is : r, f = i.useSyncExternalStore, o = i.useRef, d = i.useEffect, v = i.useMemo, g = i.useDebugValue;
        return wc.useSyncExternalStoreWithSelector = function(p, m, E, O, D) {
            var q = o(null);
            if (q.current === null) {
                var x = {
                    hasValue: !1,
                    value: null
                };
                q.current = x;
            } else x = q.current;
            q = v(function() {
                function H(j) {
                    if (!P) {
                        if (P = !0, L = j, j = O(j), D !== void 0 && x.hasValue) {
                            var tt = x.value;
                            if (D(tt, j)) return V = tt;
                        }
                        return V = j;
                    }
                    if (tt = V, c(L, j)) return tt;
                    var ct = O(j);
                    return D !== void 0 && D(tt, ct) ? (L = j, tt) : (L = j, V = ct);
                }
                var P = !1, L, V, Z = E === void 0 ? null : E;
                return [
                    function() {
                        return H(m());
                    },
                    Z === null ? void 0 : function() {
                        return H(Z());
                    }
                ];
            }, [
                m,
                E,
                O,
                D
            ]);
            var Q = f(p, q[0], q[1]);
            return d(function() {
                x.hasValue = !0, x.value = Q;
            }, [
                Q
            ]), g(Q), Q;
        }, wc;
    }
    var rd;
    function Wy() {
        return rd || (rd = 1, Uc.exports = $y()), Uc.exports;
    }
    var Fy = Wy();
    function Iy(i) {
        i();
    }
    function t1() {
        let i = null, r = null;
        return {
            clear () {
                i = null, r = null;
            },
            notify () {
                Iy(()=>{
                    let c = i;
                    for(; c;)c.callback(), c = c.next;
                });
            },
            get () {
                const c = [];
                let f = i;
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
                return o.prev ? o.prev.next = o : i = o, function() {
                    !f || i === null || (f = !1, o.next ? o.next.prev = o.prev : r = o.prev, o.prev ? o.prev.next = o.next : i = o.next);
                };
            }
        };
    }
    var cd = {
        notify () {},
        get: ()=>[]
    };
    function e1(i, r) {
        let c, f = cd, o = 0, d = !1;
        function v(Q) {
            E();
            const H = f.subscribe(Q);
            let P = !1;
            return ()=>{
                P || (P = !0, H(), O());
            };
        }
        function g() {
            f.notify();
        }
        function p() {
            x.onStateChange && x.onStateChange();
        }
        function m() {
            return d;
        }
        function E() {
            o++, c || (c = i.subscribe(p), f = t1());
        }
        function O() {
            o--, c && o === 0 && (c(), c = void 0, f.clear(), f = cd);
        }
        function D() {
            d || (d = !0, E());
        }
        function q() {
            d && (d = !1, O());
        }
        const x = {
            addNestedSub: v,
            notifyNestedSubs: g,
            handleChangeWrapper: p,
            isSubscribed: m,
            trySubscribe: D,
            tryUnsubscribe: q,
            getListeners: ()=>f
        };
        return x;
    }
    var l1 = ()=>typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", a1 = l1(), n1 = ()=>typeof navigator < "u" && navigator.product === "ReactNative", u1 = n1(), i1 = ()=>a1 || u1 ? N.useLayoutEffect : N.useEffect, r1 = i1(), c1 = Symbol.for("react-redux-context"), f1 = typeof globalThis < "u" ? globalThis : {};
    function s1() {
        if (!N.createContext) return {};
        const i = f1[c1] ??= new Map;
        let r = i.get(N.createContext);
        return r || (r = N.createContext(null), i.set(N.createContext, r)), r;
    }
    var Ol = s1();
    function o1(i) {
        const { children: r, context: c, serverState: f, store: o } = i, d = N.useMemo(()=>{
            const p = e1(o);
            return {
                store: o,
                subscription: p,
                getServerState: f ? ()=>f : void 0
            };
        }, [
            o,
            f
        ]), v = N.useMemo(()=>o.getState(), [
            o
        ]);
        r1(()=>{
            const { subscription: p } = d;
            return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), v !== o.getState() && p.notifyNestedSubs(), ()=>{
                p.tryUnsubscribe(), p.onStateChange = void 0;
            };
        }, [
            d,
            v
        ]);
        const g = c || Ol;
        return N.createElement(g.Provider, {
            value: d
        }, r);
    }
    var h1 = o1;
    function Kc(i = Ol) {
        return function() {
            return N.useContext(i);
        };
    }
    var Md = Kc();
    function Nd(i = Ol) {
        const r = i === Ol ? Md : Kc(i), c = ()=>{
            const { store: f } = r();
            return f;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    var d1 = Nd();
    function p1(i = Ol) {
        const r = i === Ol ? d1 : Nd(i), c = ()=>r().dispatch;
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    let m1;
    bg = p1();
    m1 = (i, r)=>i === r;
    function y1(i = Ol) {
        const r = i === Ol ? Md : Kc(i), c = (f, o = {})=>{
            const { equalityFn: d = m1 } = typeof o == "function" ? {
                equalityFn: o
            } : o, v = r(), { store: g, subscription: p, getServerState: m } = v;
            N.useRef(!0);
            const E = N.useCallback({
                [f.name] (D) {
                    return f(D);
                }
            }[f.name], [
                f
            ]), O = Fy.useSyncExternalStoreWithSelector(p.addNestedSub, g.getState, m || g.getState, E, d);
            return N.useDebugValue(O), O;
        };
        return Object.assign(c, {
            withTypes: ()=>c
        }), c;
    }
    v1 = y1();
    function Gt(i) {
        return `Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
    }
    var g1 = typeof Symbol == "function" && Symbol.observable || "@@observable", fd = g1, Pc = ()=>Math.random().toString(36).substring(7).split("").join("."), b1 = {
        INIT: `@@redux/INIT${Pc()}`,
        REPLACE: `@@redux/REPLACE${Pc()}`,
        PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${Pc()}`
    }, ii = b1;
    function Dd(i) {
        if (typeof i != "object" || i === null) return !1;
        let r = i;
        for(; Object.getPrototypeOf(r) !== null;)r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(i) === r || Object.getPrototypeOf(i) === null;
    }
    function Xc(i, r, c) {
        if (typeof i != "function") throw new Error(Gt(2));
        if (typeof r == "function" && typeof c == "function" || typeof c == "function" && typeof arguments[3] == "function") throw new Error(Gt(0));
        if (typeof r == "function" && typeof c > "u" && (c = r, r = void 0), typeof c < "u") {
            if (typeof c != "function") throw new Error(Gt(1));
            return c(Xc)(i, r);
        }
        let f = i, o = r, d = new Map, v = d, g = 0, p = !1;
        function m() {
            v === d && (v = new Map, d.forEach((H, P)=>{
                v.set(P, H);
            }));
        }
        function E() {
            if (p) throw new Error(Gt(3));
            return o;
        }
        function O(H) {
            if (typeof H != "function") throw new Error(Gt(4));
            if (p) throw new Error(Gt(5));
            let P = !0;
            m();
            const L = g++;
            return v.set(L, H), function() {
                if (P) {
                    if (p) throw new Error(Gt(6));
                    P = !1, m(), v.delete(L), d = null;
                }
            };
        }
        function D(H) {
            if (!Dd(H)) throw new Error(Gt(7));
            if (typeof H.type > "u") throw new Error(Gt(8));
            if (typeof H.type != "string") throw new Error(Gt(17));
            if (p) throw new Error(Gt(9));
            try {
                p = !0, o = f(o, H);
            } finally{
                p = !1;
            }
            return (d = v).forEach((L)=>{
                L();
            }), H;
        }
        function q(H) {
            if (typeof H != "function") throw new Error(Gt(10));
            f = H, D({
                type: ii.REPLACE
            });
        }
        function x() {
            const H = O;
            return {
                subscribe (P) {
                    if (typeof P != "object" || P === null) throw new Error(Gt(11));
                    function L() {
                        const Z = P;
                        Z.next && Z.next(E());
                    }
                    return L(), {
                        unsubscribe: H(L)
                    };
                },
                [fd] () {
                    return this;
                }
            };
        }
        return D({
            type: ii.INIT
        }), {
            dispatch: D,
            subscribe: O,
            getState: E,
            replaceReducer: q,
            [fd]: x
        };
    }
    function S1(i) {
        Object.keys(i).forEach((r)=>{
            const c = i[r];
            if (typeof c(void 0, {
                type: ii.INIT
            }) > "u") throw new Error(Gt(12));
            if (typeof c(void 0, {
                type: ii.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(Gt(13));
        });
    }
    function xd(i) {
        const r = Object.keys(i), c = {};
        for(let d = 0; d < r.length; d++){
            const v = r[d];
            typeof i[v] == "function" && (c[v] = i[v]);
        }
        const f = Object.keys(c);
        let o;
        try {
            S1(c);
        } catch (d) {
            o = d;
        }
        return function(v = {}, g) {
            if (o) throw o;
            let p = !1;
            const m = {};
            for(let E = 0; E < f.length; E++){
                const O = f[E], D = c[O], q = v[O], x = D(q, g);
                if (typeof x > "u") throw g && g.type, new Error(Gt(14));
                m[O] = x, p = p || x !== q;
            }
            return p = p || f.length !== Object.keys(v).length, p ? m : v;
        };
    }
    function ri(...i) {
        return i.length === 0 ? (r)=>r : i.length === 1 ? i[0] : i.reduce((r, c)=>(...f)=>r(c(...f)));
    }
    function E1(...i) {
        return (r)=>(c, f)=>{
                const o = r(c, f);
                let d = ()=>{
                    throw new Error(Gt(15));
                };
                const v = {
                    getState: o.getState,
                    dispatch: (p, ...m)=>d(p, ...m)
                }, g = i.map((p)=>p(v));
                return d = ri(...g)(o.dispatch), {
                    ...o,
                    dispatch: d
                };
            };
    }
    function zd(i) {
        return ({ dispatch: c, getState: f })=>(o)=>(d)=>typeof d == "function" ? d(c, f, i) : o(d);
    }
    var R1 = zd(), T1 = zd, O1 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? ri : ri.apply(null, arguments);
    }, Bd = class Pn extends Array {
        constructor(...r){
            super(...r), Object.setPrototypeOf(this, Pn.prototype);
        }
        static get [Symbol.species]() {
            return Pn;
        }
        concat(...r) {
            return super.concat.apply(this, r);
        }
        prepend(...r) {
            return r.length === 1 && Array.isArray(r[0]) ? new Pn(...r[0].concat(this)) : new Pn(...r.concat(this));
        }
    };
    function A1(i) {
        return typeof i == "boolean";
    }
    var _1 = ()=>function(r) {
            const { thunk: c = !0, immutableCheck: f = !0, serializableCheck: o = !0, actionCreatorCheck: d = !0 } = r ?? {};
            let v = new Bd;
            return c && (A1(c) ? v.push(R1) : v.push(T1(c.extraArgument))), v;
        }, M1 = "RTK_autoBatch", sd = (i)=>(r)=>{
            setTimeout(r, i);
        }, N1 = (i = {
        type: "raf"
    })=>(r)=>(...c)=>{
                const f = r(...c);
                let o = !0, d = !1, v = !1;
                const g = new Set, p = i.type === "tick" ? queueMicrotask : i.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : sd(10) : i.type === "callback" ? i.queueNotification : sd(i.timeout), m = ()=>{
                    v = !1, d && (d = !1, g.forEach((E)=>E()));
                };
                return Object.assign({}, f, {
                    subscribe (E) {
                        const O = ()=>o && E(), D = f.subscribe(O);
                        return g.add(E), ()=>{
                            D(), g.delete(E);
                        };
                    },
                    dispatch (E) {
                        try {
                            return o = !E?.meta?.[M1], d = !o, d && (v || (v = !0, p(m))), f.dispatch(E);
                        } finally{
                            o = !0;
                        }
                    }
                });
            }, D1 = (i)=>function(c) {
            const { autoBatch: f = !0 } = c ?? {};
            let o = new Bd(i);
            return f && o.push(N1(typeof f == "object" ? f : void 0)), o;
        };
    function x1(i) {
        const r = _1(), { reducer: c = void 0, middleware: f, devTools: o = !0, preloadedState: d = void 0, enhancers: v = void 0 } = i || {};
        let g;
        if (typeof c == "function") g = c;
        else if (Dd(c)) g = xd(c);
        else throw new Error(z1(1));
        let p;
        typeof f == "function" ? p = f(r) : p = r();
        let m = ri;
        o && (m = O1({
            trace: !1,
            ...typeof o == "object" && o
        }));
        const E = E1(...p), O = D1(E);
        let D = typeof v == "function" ? v(O) : O();
        const q = m(...D);
        return Xc(g, d, q);
    }
    function z1(i) {
        return `Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
    }
    var Vc = "persist:", Ud = "persist/FLUSH", kc = "persist/REHYDRATE", wd = "persist/PAUSE", Pd = "persist/PERSIST", qd = "persist/PURGE", Cd = "persist/REGISTER", B1 = -1;
    function li(i) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? li = function(c) {
            return typeof c;
        } : li = function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
        }, li(i);
    }
    function od(i, r) {
        var c = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(i);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function U1(i) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? od(c, !0).forEach(function(f) {
                w1(i, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c)) : od(c).forEach(function(f) {
                Object.defineProperty(i, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return i;
    }
    function w1(i, r, c) {
        return r in i ? Object.defineProperty(i, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[r] = c, i;
    }
    function P1(i, r, c, f) {
        f.debug;
        var o = U1({}, c);
        return i && li(i) === "object" && Object.keys(i).forEach(function(d) {
            d !== "_persist" && r[d] === c[d] && (o[d] = i[d]);
        }), o;
    }
    function q1(i) {
        var r = i.blacklist || null, c = i.whitelist || null, f = i.transforms || [], o = i.throttle || 0, d = "".concat(i.keyPrefix !== void 0 ? i.keyPrefix : Vc).concat(i.key), v = i.storage, g;
        i.serialize === !1 ? g = function(j) {
            return j;
        } : typeof i.serialize == "function" ? g = i.serialize : g = C1;
        var p = i.writeFailHandler || null, m = {}, E = {}, O = [], D = null, q = null, x = function(j) {
            Object.keys(j).forEach(function(tt) {
                P(tt) && m[tt] !== j[tt] && O.indexOf(tt) === -1 && O.push(tt);
            }), Object.keys(m).forEach(function(tt) {
                j[tt] === void 0 && P(tt) && O.indexOf(tt) === -1 && m[tt] !== void 0 && O.push(tt);
            }), D === null && (D = setInterval(Q, o)), m = j;
        };
        function Q() {
            if (O.length === 0) {
                D && clearInterval(D), D = null;
                return;
            }
            var Z = O.shift(), j = f.reduce(function(tt, ct) {
                return ct.in(tt, Z, m);
            }, m[Z]);
            if (j !== void 0) try {
                E[Z] = g(j);
            } catch (tt) {
                console.error("redux-persist/createPersistoid: error serializing state", tt);
            }
            else delete E[Z];
            O.length === 0 && H();
        }
        function H() {
            Object.keys(E).forEach(function(Z) {
                m[Z] === void 0 && delete E[Z];
            }), q = v.setItem(d, g(E)).catch(L);
        }
        function P(Z) {
            return !(c && c.indexOf(Z) === -1 && Z !== "_persist" || r && r.indexOf(Z) !== -1);
        }
        function L(Z) {
            p && p(Z);
        }
        var V = function() {
            for(; O.length !== 0;)Q();
            return q || Promise.resolve();
        };
        return {
            update: x,
            flush: V
        };
    }
    function C1(i) {
        return JSON.stringify(i);
    }
    function H1(i) {
        var r = i.transforms || [], c = "".concat(i.keyPrefix !== void 0 ? i.keyPrefix : Vc).concat(i.key), f = i.storage;
        i.debug;
        var o;
        return i.deserialize === !1 ? o = function(v) {
            return v;
        } : typeof i.deserialize == "function" ? o = i.deserialize : o = L1, f.getItem(c).then(function(d) {
            if (d) try {
                var v = {}, g = o(d);
                return Object.keys(g).forEach(function(p) {
                    v[p] = r.reduceRight(function(m, E) {
                        return E.out(m, p, g);
                    }, o(g[p]));
                }), v;
            } catch (p) {
                throw p;
            }
            else return;
        });
    }
    function L1(i) {
        return JSON.parse(i);
    }
    function Q1(i) {
        var r = i.storage, c = "".concat(i.keyPrefix !== void 0 ? i.keyPrefix : Vc).concat(i.key);
        return r.removeItem(c, Y1);
    }
    function Y1(i) {}
    function hd(i, r) {
        var c = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(i);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function Je(i) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? hd(c, !0).forEach(function(f) {
                G1(i, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c)) : hd(c).forEach(function(f) {
                Object.defineProperty(i, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return i;
    }
    function G1(i, r, c) {
        return r in i ? Object.defineProperty(i, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[r] = c, i;
    }
    function j1(i, r) {
        if (i == null) return {};
        var c = K1(i, r), f, o;
        if (Object.getOwnPropertySymbols) {
            var d = Object.getOwnPropertySymbols(i);
            for(o = 0; o < d.length; o++)f = d[o], !(r.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(i, f) && (c[f] = i[f]);
        }
        return c;
    }
    function K1(i, r) {
        if (i == null) return {};
        var c = {}, f = Object.keys(i), o, d;
        for(d = 0; d < f.length; d++)o = f[d], !(r.indexOf(o) >= 0) && (c[o] = i[o]);
        return c;
    }
    var X1 = 5e3;
    function V1(i, r) {
        var c = i.version !== void 0 ? i.version : B1;
        i.debug;
        var f = i.stateReconciler === void 0 ? P1 : i.stateReconciler, o = i.getStoredState || H1, d = i.timeout !== void 0 ? i.timeout : X1, v = null, g = !1, p = !0, m = function(O) {
            return O._persist.rehydrated && v && !p && v.update(O), O;
        };
        return function(E, O) {
            var D = E || {}, q = D._persist, x = j1(D, [
                "_persist"
            ]), Q = x;
            if (O.type === Pd) {
                var H = !1, P = function(Et, ft) {
                    H || (O.rehydrate(i.key, Et, ft), H = !0);
                };
                if (d && setTimeout(function() {
                    !H && P(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(i.key, '"')));
                }, d), p = !1, v || (v = q1(i)), q) return Je({}, r(Q, O), {
                    _persist: q
                });
                if (typeof O.rehydrate != "function" || typeof O.register != "function") throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                return O.register(i.key), o(i).then(function(ct) {
                    var Et = i.migrate || function(ft, jt) {
                        return Promise.resolve(ft);
                    };
                    Et(ct, c).then(function(ft) {
                        P(ft);
                    }, function(ft) {
                        P(void 0, ft);
                    });
                }, function(ct) {
                    P(void 0, ct);
                }), Je({}, r(Q, O), {
                    _persist: {
                        version: c,
                        rehydrated: !1
                    }
                });
            } else {
                if (O.type === qd) return g = !0, O.result(Q1(i)), Je({}, r(Q, O), {
                    _persist: q
                });
                if (O.type === Ud) return O.result(v && v.flush()), Je({}, r(Q, O), {
                    _persist: q
                });
                if (O.type === wd) p = !0;
                else if (O.type === kc) {
                    if (g) return Je({}, Q, {
                        _persist: Je({}, q, {
                            rehydrated: !0
                        })
                    });
                    if (O.key === i.key) {
                        var L = r(Q, O), V = O.payload, Z = f !== !1 && V !== void 0 ? f(V, E, L, i) : L, j = Je({}, Z, {
                            _persist: Je({}, q, {
                                rehydrated: !0
                            })
                        });
                        return m(j);
                    }
                }
            }
            if (!q) return r(E, O);
            var tt = r(Q, O);
            return tt === Q ? E : m(Je({}, tt, {
                _persist: q
            }));
        };
    }
    function dd(i) {
        return J1(i) || Z1(i) || k1();
    }
    function k1() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function Z1(i) {
        if (Symbol.iterator in Object(i) || Object.prototype.toString.call(i) === "[object Arguments]") return Array.from(i);
    }
    function J1(i) {
        if (Array.isArray(i)) {
            for(var r = 0, c = new Array(i.length); r < i.length; r++)c[r] = i[r];
            return c;
        }
    }
    function pd(i, r) {
        var c = Object.keys(i);
        if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(i);
            r && (f = f.filter(function(o) {
                return Object.getOwnPropertyDescriptor(i, o).enumerable;
            })), c.push.apply(c, f);
        }
        return c;
    }
    function Lc(i) {
        for(var r = 1; r < arguments.length; r++){
            var c = arguments[r] != null ? arguments[r] : {};
            r % 2 ? pd(c, !0).forEach(function(f) {
                $1(i, f, c[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c)) : pd(c).forEach(function(f) {
                Object.defineProperty(i, f, Object.getOwnPropertyDescriptor(c, f));
            });
        }
        return i;
    }
    function $1(i, r, c) {
        return r in i ? Object.defineProperty(i, r, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : i[r] = c, i;
    }
    var Hd = {
        registry: [],
        bootstrapped: !1
    }, W1 = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Hd, c = arguments.length > 1 ? arguments[1] : void 0;
        switch(c.type){
            case Cd:
                return Lc({}, r, {
                    registry: [].concat(dd(r.registry), [
                        c.key
                    ])
                });
            case kc:
                var f = r.registry.indexOf(c.key), o = dd(r.registry);
                return o.splice(f, 1), Lc({}, r, {
                    registry: o,
                    bootstrapped: o.length === 0
                });
            default:
                return r;
        }
    };
    function F1(i, r, c) {
        var f = Xc(W1, Hd, void 0), o = function(p) {
            f.dispatch({
                type: Cd,
                key: p
            });
        }, d = function(p, m, E) {
            var O = {
                type: kc,
                payload: m,
                err: E,
                key: p
            };
            i.dispatch(O), f.dispatch(O);
        }, v = Lc({}, f, {
            purge: function() {
                var p = [];
                return i.dispatch({
                    type: qd,
                    result: function(E) {
                        p.push(E);
                    }
                }), Promise.all(p);
            },
            flush: function() {
                var p = [];
                return i.dispatch({
                    type: Ud,
                    result: function(E) {
                        p.push(E);
                    }
                }), Promise.all(p);
            },
            pause: function() {
                i.dispatch({
                    type: wd
                });
            },
            persist: function() {
                i.dispatch({
                    type: Pd,
                    register: o,
                    rehydrate: d
                });
            }
        });
        return v.persist(), v;
    }
    let Ld, Qd, Yd, Gd, jd, I1, tv, Kd, Xd, ev, lv, Vd, kd, Zc, Zd, av, nv, uv, iv;
    Ld = "FLIP_BOARD";
    Qd = "SET_THEME";
    Yd = "SET_SOUND";
    Gd = "SET_PLAY_MOVES_DURING_REVIEW";
    jd = "SET_ENGINE_KIND";
    Sg = ()=>({
            type: Ld
        });
    Eg = (i)=>({
            type: Qd,
            payload: i
        });
    Rg = (i)=>({
            type: Yd,
            payload: i
        });
    Tg = (i)=>({
            type: Gd,
            payload: i
        });
    Og = (i)=>({
            type: jd,
            payload: i
        });
    I1 = {
        isFlipped: !1,
        theme: "default",
        enableSound: !0,
        playMovesDuringReview: !0,
        engineKind: "stockfish-native"
    };
    tv = (i = I1, r)=>{
        switch(r.type){
            case Ld:
                return {
                    ...i,
                    isFlipped: !i.isFlipped
                };
            case Qd:
                return {
                    ...i,
                    theme: r.payload
                };
            case Yd:
                return {
                    ...i,
                    enableSound: r.payload
                };
            case Gd:
                return {
                    ...i,
                    playMovesDuringReview: r.payload
                };
            case jd:
                return {
                    ...i,
                    engineKind: r.payload === "stockfish-lite" ? "stockfish-lite" : "stockfish-native"
                };
            default:
                return i;
        }
    };
    Kd = "SET_PGN_ANALYSIS_AT_INDEX";
    Xd = "SET_REVIEW_ANALYSIS_COMPLETE";
    ev = "NEXT";
    lv = "PREV";
    Vd = "START_POS";
    kd = "FINAL_POS";
    Zc = "LOAD_PGN";
    Zd = "JUMP_TO_MOVE";
    av = "TOGGLE_ENGINE";
    nv = "DISABLE_ENGINE";
    Ag = ()=>({
            type: Vd
        });
    _g = ()=>({
            type: kd
        });
    Mg = ({ finalPos: i, moves: r, fens: c, fromToSquares: f, termination: o, result: d, blackPlayerName: v, whitePlayerName: g })=>({
            type: Zc,
            payload: {
                finalPos: i,
                moves: r,
                fens: c,
                fromToSquares: f,
                termination: o,
                result: d,
                blackPlayerName: v,
                whitePlayerName: g
            }
        });
    Ng = (i)=>({
            type: Kd,
            payload: i
        });
    Dg = (i)=>({
            type: Zd,
            payload: i
        });
    xg = (i)=>({
            type: Xd,
            payload: i
        });
    uv = {
        finalFen: "5rk1/1P3Bp1/R6p/8/6P1/2B1rQ2/2K3P1/6q1 b - - 0 36",
        fenArrayLength: 72,
        currentMoveIndex: 0,
        engineEnabled: !1
    };
    iv = (i = uv, r)=>{
        switch(r.type){
            case ev:
                return i.currentMoveIndex === i.fenArrayLength - 1 ? i : {
                    ...i,
                    currentMoveIndex: i.currentMoveIndex + 1
                };
            case lv:
                return i.currentMoveIndex === 0 ? i : {
                    ...i,
                    currentMoveIndex: i.currentMoveIndex - 1
                };
            case Vd:
                return {
                    ...i,
                    currentMoveIndex: 0
                };
            case kd:
                return {
                    ...i,
                    currentMoveIndex: i.fenArrayLength - 1
                };
            case Zd:
                return {
                    ...i,
                    currentMoveIndex: r.payload
                };
            case Zc:
                return {
                    ...i,
                    finalFen: r.payload.finalPos,
                    fenArrayLength: r.payload.fens.length,
                    currentMoveIndex: 0
                };
            case av:
                return {
                    ...i,
                    engineEnabled: !i.engineEnabled
                };
            case nv:
                return {
                    ...i,
                    engineEnabled: !1
                };
            default:
                return i;
        }
    };
    function Jd(i) {
        return Array.from({
            length: i
        }, ()=>({
                evalScore: null,
                bestMove: "",
                moveClassification: null
            }));
    }
    let rv, cv, $d, fv, sv, ov, hv, dv, pv, mv, yv, vv;
    rv = {
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
        analysisData: Jd(72),
        reviewAnalysisComplete: !1
    };
    cv = (i = rv, r)=>{
        switch(r.type){
            case Zc:
                return {
                    ...i,
                    finalFen: r.payload.finalPos,
                    moves: r.payload.moves,
                    fens: r.payload.fens,
                    analysisData: Jd(r.payload.fens.length),
                    reviewAnalysisComplete: !1,
                    fromToSquares: r.payload.fromToSquares,
                    termination: r.payload.termination,
                    result: r.payload.result,
                    blackPlayerName: r.payload.blackPlayerName,
                    whitePlayerName: r.payload.whitePlayerName
                };
            case Xd:
                return {
                    ...i,
                    reviewAnalysisComplete: !!r.payload
                };
            case Kd:
                {
                    const { index: c, evalScore: f, bestMove: o, moveClassification: d } = r.payload;
                    if (!i.analysisData || c < 0 || c >= i.analysisData.length) return i;
                    const v = i.analysisData.map((g, p)=>p === c ? {
                            evalScore: f,
                            bestMove: o ?? "",
                            moveClassification: d ?? g.moveClassification ?? null
                        } : g);
                    return {
                        ...i,
                        analysisData: v
                    };
                }
            default:
                return i;
        }
    };
    $d = "TOGGLE_ENGINE";
    fv = "SET_MULTIPV";
    sv = "SET_MAX_DEPTH";
    ov = "SET_AUTO_STOP_TIME";
    zg = ()=>({
            type: $d
        });
    hv = {
        enabled: !0,
        multiPV: 1,
        maxDepth: 20,
        autoStopTime: 8e3
    };
    dv = (i = hv, r)=>{
        switch(r.type){
            case $d:
                return {
                    ...i,
                    enabled: !i.enabled
                };
            case fv:
                return {
                    ...i,
                    multiPV: r.payload
                };
            case sv:
                return {
                    ...i,
                    maxDepth: r.payload
                };
            case ov:
                return {
                    ...i,
                    autoStopTime: r.payload
                };
            default:
                return i;
        }
    };
    pv = xd({
        settings: tv,
        analysis: iv,
        pgn: cv,
        engine: dv
    });
    mv = {
        getItem: (i)=>new Promise((r)=>{
                try {
                    const c = localStorage.getItem(i);
                    if (c == null) {
                        r(null);
                        return;
                    }
                    JSON.parse(c), r(c);
                } catch  {
                    r(null);
                }
            }),
        setItem: (i, r)=>new Promise((c)=>{
                try {
                    localStorage.setItem(i, JSON.stringify(r)), c();
                } catch (f) {
                    console.error("Failed to remove item from storage:", f), c();
                }
            }),
        removeItem: (i)=>new Promise((r)=>{
                try {
                    localStorage.removeItem(i), r();
                } catch (c) {
                    console.error("Failed to remove item from storage:", c), r();
                }
            })
    };
    yv = {
        key: "root",
        storage: mv,
        whitelist: [
            "game",
            "settings",
            "analysis",
            "pgn"
        ]
    };
    vv = V1(yv, pv);
    Wd = x1({
        reducer: vv,
        middleware: (i)=>i({
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
    F1(Wd);
    var Un = {}, md;
    function gv() {
        if (md) return Un;
        md = 1, Object.defineProperty(Un, "__esModule", {
            value: !0
        }), Un.parse = v, Un.serialize = m;
        const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, c = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, f = /^[\u0020-\u003A\u003D-\u007E]*$/, o = Object.prototype.toString, d = (()=>{
            const D = function() {};
            return D.prototype = Object.create(null), D;
        })();
        function v(D, q) {
            const x = new d, Q = D.length;
            if (Q < 2) return x;
            const H = q?.decode || E;
            let P = 0;
            do {
                const L = D.indexOf("=", P);
                if (L === -1) break;
                const V = D.indexOf(";", P), Z = V === -1 ? Q : V;
                if (L > Z) {
                    P = D.lastIndexOf(";", L - 1) + 1;
                    continue;
                }
                const j = g(D, P, L), tt = p(D, L, j), ct = D.slice(j, tt);
                if (x[ct] === void 0) {
                    let Et = g(D, L + 1, Z), ft = p(D, Z, Et);
                    const jt = H(D.slice(Et, ft));
                    x[ct] = jt;
                }
                P = Z + 1;
            }while (P < Q);
            return x;
        }
        function g(D, q, x) {
            do {
                const Q = D.charCodeAt(q);
                if (Q !== 32 && Q !== 9) return q;
            }while (++q < x);
            return x;
        }
        function p(D, q, x) {
            for(; q > x;){
                const Q = D.charCodeAt(--q);
                if (Q !== 32 && Q !== 9) return q + 1;
            }
            return x;
        }
        function m(D, q, x) {
            const Q = x?.encode || encodeURIComponent;
            if (!i.test(D)) throw new TypeError(`argument name is invalid: ${D}`);
            const H = Q(q);
            if (!r.test(H)) throw new TypeError(`argument val is invalid: ${q}`);
            let P = D + "=" + H;
            if (!x) return P;
            if (x.maxAge !== void 0) {
                if (!Number.isInteger(x.maxAge)) throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
                P += "; Max-Age=" + x.maxAge;
            }
            if (x.domain) {
                if (!c.test(x.domain)) throw new TypeError(`option domain is invalid: ${x.domain}`);
                P += "; Domain=" + x.domain;
            }
            if (x.path) {
                if (!f.test(x.path)) throw new TypeError(`option path is invalid: ${x.path}`);
                P += "; Path=" + x.path;
            }
            if (x.expires) {
                if (!O(x.expires) || !Number.isFinite(x.expires.valueOf())) throw new TypeError(`option expires is invalid: ${x.expires}`);
                P += "; Expires=" + x.expires.toUTCString();
            }
            if (x.httpOnly && (P += "; HttpOnly"), x.secure && (P += "; Secure"), x.partitioned && (P += "; Partitioned"), x.priority) switch(typeof x.priority == "string" ? x.priority.toLowerCase() : void 0){
                case "low":
                    P += "; Priority=Low";
                    break;
                case "medium":
                    P += "; Priority=Medium";
                    break;
                case "high":
                    P += "; Priority=High";
                    break;
                default:
                    throw new TypeError(`option priority is invalid: ${x.priority}`);
            }
            if (x.sameSite) switch(typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite){
                case !0:
                case "strict":
                    P += "; SameSite=Strict";
                    break;
                case "lax":
                    P += "; SameSite=Lax";
                    break;
                case "none":
                    P += "; SameSite=None";
                    break;
                default:
                    throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
            }
            return P;
        }
        function E(D) {
            if (D.indexOf("%") === -1) return D;
            try {
                return decodeURIComponent(D);
            } catch  {
                return D;
            }
        }
        function O(D) {
            return o.call(D) === "[object Date]";
        }
        return Un;
    }
    gv();
    var yd = "popstate";
    function bv(i = {}) {
        function r(o, d) {
            let { pathname: v = "/", search: g = "", hash: p = "" } = Xl(o.location.hash.substring(1));
            return !v.startsWith("/") && !v.startsWith(".") && (v = "/" + v), Qc("", {
                pathname: v,
                search: g,
                hash: p
            }, d.state && d.state.usr || null, d.state && d.state.key || "default");
        }
        function c(o, d) {
            let v = o.document.querySelector("base"), g = "";
            if (v && v.getAttribute("href")) {
                let p = o.location.href, m = p.indexOf("#");
                g = m === -1 ? p : p.slice(0, m);
            }
            return g + "#" + (typeof d == "string" ? d : Cn(d));
        }
        function f(o, d) {
            Re(o.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`);
        }
        return Ev(r, c, f, i);
    }
    function Ot(i, r) {
        if (i === !1 || i === null || typeof i > "u") throw new Error(r);
    }
    function Re(i, r) {
        if (!i) {
            typeof console < "u" && console.warn(r);
            try {
                throw new Error(r);
            } catch  {}
        }
    }
    function Sv() {
        return Math.random().toString(36).substring(2, 10);
    }
    function vd(i, r) {
        return {
            usr: i.state,
            key: i.key,
            idx: r
        };
    }
    function Qc(i, r, c = null, f) {
        return {
            pathname: typeof i == "string" ? i : i.pathname,
            search: "",
            hash: "",
            ...typeof r == "string" ? Xl(r) : r,
            state: c,
            key: r && r.key || f || Sv()
        };
    }
    function Cn({ pathname: i = "/", search: r = "", hash: c = "" }) {
        return r && r !== "?" && (i += r.charAt(0) === "?" ? r : "?" + r), c && c !== "#" && (i += c.charAt(0) === "#" ? c : "#" + c), i;
    }
    function Xl(i) {
        let r = {};
        if (i) {
            let c = i.indexOf("#");
            c >= 0 && (r.hash = i.substring(c), i = i.substring(0, c));
            let f = i.indexOf("?");
            f >= 0 && (r.search = i.substring(f), i = i.substring(0, f)), i && (r.pathname = i);
        }
        return r;
    }
    function Ev(i, r, c, f = {}) {
        let { window: o = document.defaultView, v5Compat: d = !1 } = f, v = o.history, g = "POP", p = null, m = E();
        m == null && (m = 0, v.replaceState({
            ...v.state,
            idx: m
        }, ""));
        function E() {
            return (v.state || {
                idx: null
            }).idx;
        }
        function O() {
            g = "POP";
            let H = E(), P = H == null ? null : H - m;
            m = H, p && p({
                action: g,
                location: Q.location,
                delta: P
            });
        }
        function D(H, P) {
            g = "PUSH";
            let L = Qc(Q.location, H, P);
            c && c(L, H), m = E() + 1;
            let V = vd(L, m), Z = Q.createHref(L);
            try {
                v.pushState(V, "", Z);
            } catch (j) {
                if (j instanceof DOMException && j.name === "DataCloneError") throw j;
                o.location.assign(Z);
            }
            d && p && p({
                action: g,
                location: Q.location,
                delta: 1
            });
        }
        function q(H, P) {
            g = "REPLACE";
            let L = Qc(Q.location, H, P);
            c && c(L, H), m = E();
            let V = vd(L, m), Z = Q.createHref(L);
            v.replaceState(V, "", Z), d && p && p({
                action: g,
                location: Q.location,
                delta: 0
            });
        }
        function x(H) {
            let P = o.location.origin !== "null" ? o.location.origin : o.location.href, L = typeof H == "string" ? H : Cn(H);
            return L = L.replace(/ $/, "%20"), Ot(P, `No window.location.(origin|href) available to create URL for href: ${L}`), new URL(L, P);
        }
        let Q = {
            get action () {
                return g;
            },
            get location () {
                return i(o, v);
            },
            listen (H) {
                if (p) throw new Error("A history only accepts one active listener");
                return o.addEventListener(yd, O), p = H, ()=>{
                    o.removeEventListener(yd, O), p = null;
                };
            },
            createHref (H) {
                return r(o, H);
            },
            createURL: x,
            encodeLocation (H) {
                let P = x(H);
                return {
                    pathname: P.pathname,
                    search: P.search,
                    hash: P.hash
                };
            },
            push: D,
            replace: q,
            go (H) {
                return v.go(H);
            }
        };
        return Q;
    }
    function Fd(i, r, c = "/") {
        return Rv(i, r, c, !1);
    }
    function Rv(i, r, c, f) {
        let o = typeof r == "string" ? Xl(r) : r, d = We(o.pathname || "/", c);
        if (d == null) return null;
        let v = Id(i);
        Tv(v);
        let g = null;
        for(let p = 0; g == null && p < v.length; ++p){
            let m = wv(d);
            g = Bv(v[p], m, f);
        }
        return g;
    }
    function Id(i, r = [], c = [], f = "") {
        let o = (d, v, g)=>{
            let p = {
                relativePath: g === void 0 ? d.path || "" : g,
                caseSensitive: d.caseSensitive === !0,
                childrenIndex: v,
                route: d
            };
            p.relativePath.startsWith("/") && (Ot(p.relativePath.startsWith(f), `Absolute route path "${p.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), p.relativePath = p.relativePath.slice(f.length));
            let m = $e([
                f,
                p.relativePath
            ]), E = c.concat(p);
            d.children && d.children.length > 0 && (Ot(d.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${m}".`), Id(d.children, r, E, m)), !(d.path == null && !d.index) && r.push({
                path: m,
                score: xv(m, d.index),
                routesMeta: E
            });
        };
        return i.forEach((d, v)=>{
            if (d.path === "" || !d.path?.includes("?")) o(d, v);
            else for (let g of tp(d.path))o(d, v, g);
        }), r;
    }
    function tp(i) {
        let r = i.split("/");
        if (r.length === 0) return [];
        let [c, ...f] = r, o = c.endsWith("?"), d = c.replace(/\?$/, "");
        if (f.length === 0) return o ? [
            d,
            ""
        ] : [
            d
        ];
        let v = tp(f.join("/")), g = [];
        return g.push(...v.map((p)=>p === "" ? d : [
                d,
                p
            ].join("/"))), o && g.push(...v), g.map((p)=>i.startsWith("/") && p === "" ? "/" : p);
    }
    function Tv(i) {
        i.sort((r, c)=>r.score !== c.score ? c.score - r.score : zv(r.routesMeta.map((f)=>f.childrenIndex), c.routesMeta.map((f)=>f.childrenIndex)));
    }
    var Ov = /^:[\w-]+$/, Av = 3, _v = 2, Mv = 1, Nv = 10, Dv = -2, gd = (i)=>i === "*";
    function xv(i, r) {
        let c = i.split("/"), f = c.length;
        return c.some(gd) && (f += Dv), r && (f += _v), c.filter((o)=>!gd(o)).reduce((o, d)=>o + (Ov.test(d) ? Av : d === "" ? Mv : Nv), f);
    }
    function zv(i, r) {
        return i.length === r.length && i.slice(0, -1).every((f, o)=>f === r[o]) ? i[i.length - 1] - r[r.length - 1] : 0;
    }
    function Bv(i, r, c = !1) {
        let { routesMeta: f } = i, o = {}, d = "/", v = [];
        for(let g = 0; g < f.length; ++g){
            let p = f[g], m = g === f.length - 1, E = d === "/" ? r : r.slice(d.length) || "/", O = ci({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: m
            }, E), D = p.route;
            if (!O && m && c && !f[f.length - 1].route.index && (O = ci({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: !1
            }, E)), !O) return null;
            Object.assign(o, O.params), v.push({
                params: o,
                pathname: $e([
                    d,
                    O.pathname
                ]),
                pathnameBase: Hv($e([
                    d,
                    O.pathnameBase
                ])),
                route: D
            }), O.pathnameBase !== "/" && (d = $e([
                d,
                O.pathnameBase
            ]));
        }
        return v;
    }
    function ci(i, r) {
        typeof i == "string" && (i = {
            path: i,
            caseSensitive: !1,
            end: !0
        });
        let [c, f] = Uv(i.path, i.caseSensitive, i.end), o = r.match(c);
        if (!o) return null;
        let d = o[0], v = d.replace(/(.)\/+$/, "$1"), g = o.slice(1);
        return {
            params: f.reduce((m, { paramName: E, isOptional: O }, D)=>{
                if (E === "*") {
                    let x = g[D] || "";
                    v = d.slice(0, d.length - x.length).replace(/(.)\/+$/, "$1");
                }
                const q = g[D];
                return O && !q ? m[E] = void 0 : m[E] = (q || "").replace(/%2F/g, "/"), m;
            }, {}),
            pathname: d,
            pathnameBase: v,
            pattern: i
        };
    }
    function Uv(i, r = !1, c = !0) {
        Re(i === "*" || !i.endsWith("*") || i.endsWith("/*"), `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`);
        let f = [], o = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (v, g, p)=>(f.push({
                paramName: g,
                isOptional: p != null
            }), p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return i.endsWith("*") ? (f.push({
            paramName: "*"
        }), o += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : i !== "" && i !== "/" && (o += "(?:(?=\\/|$))"), [
            new RegExp(o, r ? void 0 : "i"),
            f
        ];
    }
    function wv(i) {
        try {
            return i.split("/").map((r)=>decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
        } catch (r) {
            return Re(!1, `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), i;
        }
    }
    function We(i, r) {
        if (r === "/") return i;
        if (!i.toLowerCase().startsWith(r.toLowerCase())) return null;
        let c = r.endsWith("/") ? r.length - 1 : r.length, f = i.charAt(c);
        return f && f !== "/" ? null : i.slice(c) || "/";
    }
    function Pv(i, r = "/") {
        let { pathname: c, search: f = "", hash: o = "" } = typeof i == "string" ? Xl(i) : i;
        return {
            pathname: c ? c.startsWith("/") ? c : qv(c, r) : r,
            search: Lv(f),
            hash: Qv(o)
        };
    }
    function qv(i, r) {
        let c = r.replace(/\/+$/, "").split("/");
        return i.split("/").forEach((o)=>{
            o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
        }), c.length > 1 ? c.join("/") : "/";
    }
    function qc(i, r, c, f) {
        return `Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(f)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
    }
    function Cv(i) {
        return i.filter((r, c)=>c === 0 || r.route.path && r.route.path.length > 0);
    }
    function Jc(i) {
        let r = Cv(i);
        return r.map((c, f)=>f === r.length - 1 ? c.pathname : c.pathnameBase);
    }
    function $c(i, r, c, f = !1) {
        let o;
        typeof i == "string" ? o = Xl(i) : (o = {
            ...i
        }, Ot(!o.pathname || !o.pathname.includes("?"), qc("?", "pathname", "search", o)), Ot(!o.pathname || !o.pathname.includes("#"), qc("#", "pathname", "hash", o)), Ot(!o.search || !o.search.includes("#"), qc("#", "search", "hash", o)));
        let d = i === "" || o.pathname === "", v = d ? "/" : o.pathname, g;
        if (v == null) g = c;
        else {
            let O = r.length - 1;
            if (!f && v.startsWith("..")) {
                let D = v.split("/");
                for(; D[0] === "..";)D.shift(), O -= 1;
                o.pathname = D.join("/");
            }
            g = O >= 0 ? r[O] : "/";
        }
        let p = Pv(o, g), m = v && v !== "/" && v.endsWith("/"), E = (d || v === ".") && c.endsWith("/");
        return !p.pathname.endsWith("/") && (m || E) && (p.pathname += "/"), p;
    }
    var $e = (i)=>i.join("/").replace(/\/\/+/g, "/"), Hv = (i)=>i.replace(/\/+$/, "").replace(/^\/*/, "/"), Lv = (i)=>!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, Qv = (i)=>!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i;
    function Yv(i) {
        return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
    }
    var ep = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ];
    new Set(ep);
    var Gv = [
        "GET",
        ...ep
    ];
    new Set(Gv);
    var za = N.createContext(null);
    za.displayName = "DataRouter";
    var si = N.createContext(null);
    si.displayName = "DataRouterState";
    var lp = N.createContext({
        isTransitioning: !1
    });
    lp.displayName = "ViewTransition";
    var jv = N.createContext(new Map);
    jv.displayName = "Fetchers";
    var Kv = N.createContext(null);
    Kv.displayName = "Await";
    var _e = N.createContext(null);
    _e.displayName = "Navigation";
    var Hn = N.createContext(null);
    Hn.displayName = "Location";
    var Ue = N.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    });
    Ue.displayName = "Route";
    var Wc = N.createContext(null);
    Wc.displayName = "RouteError";
    function Xv(i, { relative: r } = {}) {
        Ot(Ba(), "useHref() may be used only in the context of a <Router> component.");
        let { basename: c, navigator: f } = N.useContext(_e), { hash: o, pathname: d, search: v } = Ln(i, {
            relative: r
        }), g = d;
        return c !== "/" && (g = d === "/" ? c : $e([
            c,
            d
        ])), f.createHref({
            pathname: g,
            search: v,
            hash: o
        });
    }
    function Ba() {
        return N.useContext(Hn) != null;
    }
    function Fe() {
        return Ot(Ba(), "useLocation() may be used only in the context of a <Router> component."), N.useContext(Hn).location;
    }
    var ap = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
    function np(i) {
        N.useContext(_e).static || N.useLayoutEffect(i);
    }
    function up() {
        let { isDataRoute: i } = N.useContext(Ue);
        return i ? n0() : Vv();
    }
    function Vv() {
        Ot(Ba(), "useNavigate() may be used only in the context of a <Router> component.");
        let i = N.useContext(za), { basename: r, navigator: c } = N.useContext(_e), { matches: f } = N.useContext(Ue), { pathname: o } = Fe(), d = JSON.stringify(Jc(f)), v = N.useRef(!1);
        return np(()=>{
            v.current = !0;
        }), N.useCallback((p, m = {})=>{
            if (Re(v.current, ap), !v.current) return;
            if (typeof p == "number") {
                c.go(p);
                return;
            }
            let E = $c(p, JSON.parse(d), o, m.relative === "path");
            i == null && r !== "/" && (E.pathname = E.pathname === "/" ? r : $e([
                r,
                E.pathname
            ])), (m.replace ? c.replace : c.push)(E, m.state, m);
        }, [
            r,
            c,
            d,
            o,
            i
        ]);
    }
    N.createContext(null);
    function Ln(i, { relative: r } = {}) {
        let { matches: c } = N.useContext(Ue), { pathname: f } = Fe(), o = JSON.stringify(Jc(c));
        return N.useMemo(()=>$c(i, JSON.parse(o), f, r === "path"), [
            i,
            o,
            f,
            r
        ]);
    }
    function kv(i, r) {
        return ip(i, r);
    }
    function ip(i, r, c, f) {
        Ot(Ba(), "useRoutes() may be used only in the context of a <Router> component.");
        let { navigator: o, static: d } = N.useContext(_e), { matches: v } = N.useContext(Ue), g = v[v.length - 1], p = g ? g.params : {}, m = g ? g.pathname : "/", E = g ? g.pathnameBase : "/", O = g && g.route;
        {
            let L = O && O.path || "";
            rp(m, !O || L.endsWith("*") || L.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`);
        }
        let D = Fe(), q;
        if (r) {
            let L = typeof r == "string" ? Xl(r) : r;
            Ot(E === "/" || L.pathname?.startsWith(E), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${L.pathname}" was given in the \`location\` prop.`), q = L;
        } else q = D;
        let x = q.pathname || "/", Q = x;
        if (E !== "/") {
            let L = E.replace(/^\//, "").split("/");
            Q = "/" + x.replace(/^\//, "").split("/").slice(L.length).join("/");
        }
        let H = !d && c && c.matches && c.matches.length > 0 ? c.matches : Fd(i, {
            pathname: Q
        });
        Re(O || H != null, `No routes matched location "${q.pathname}${q.search}${q.hash}" `), Re(H == null || H[H.length - 1].route.element !== void 0 || H[H.length - 1].route.Component !== void 0 || H[H.length - 1].route.lazy !== void 0, `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
        let P = Fv(H && H.map((L)=>Object.assign({}, L, {
                params: Object.assign({}, p, L.params),
                pathname: $e([
                    E,
                    o.encodeLocation ? o.encodeLocation(L.pathname).pathname : L.pathname
                ]),
                pathnameBase: L.pathnameBase === "/" ? E : $e([
                    E,
                    o.encodeLocation ? o.encodeLocation(L.pathnameBase).pathname : L.pathnameBase
                ])
            })), v, c, f);
        return r && P ? N.createElement(Hn.Provider, {
            value: {
                location: {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                    ...q
                },
                navigationType: "POP"
            }
        }, P) : P;
    }
    function Zv() {
        let i = a0(), r = Yv(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i), c = i instanceof Error ? i.stack : null, f = "rgba(200,200,200, 0.5)", o = {
            padding: "0.5rem",
            backgroundColor: f
        }, d = {
            padding: "2px 4px",
            backgroundColor: f
        }, v = null;
        return console.error("Error handled by React Router default ErrorBoundary:", i), v = N.createElement(N.Fragment, null, N.createElement("p", null, "💿 Hey developer 👋"), N.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", N.createElement("code", {
            style: d
        }, "ErrorBoundary"), " or", " ", N.createElement("code", {
            style: d
        }, "errorElement"), " prop on your route.")), N.createElement(N.Fragment, null, N.createElement("h2", null, "Unexpected Application Error!"), N.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, r), c ? N.createElement("pre", {
            style: o
        }, c) : null, v);
    }
    var Jv = N.createElement(Zv, null), $v = class extends N.Component {
        constructor(i){
            super(i), this.state = {
                location: i.location,
                revalidation: i.revalidation,
                error: i.error
            };
        }
        static getDerivedStateFromError(i) {
            return {
                error: i
            };
        }
        static getDerivedStateFromProps(i, r) {
            return r.location !== i.location || r.revalidation !== "idle" && i.revalidation === "idle" ? {
                error: i.error,
                location: i.location,
                revalidation: i.revalidation
            } : {
                error: i.error !== void 0 ? i.error : r.error,
                location: r.location,
                revalidation: i.revalidation || r.revalidation
            };
        }
        componentDidCatch(i, r) {
            console.error("React Router caught the following error during render", i, r);
        }
        render() {
            return this.state.error !== void 0 ? N.createElement(Ue.Provider, {
                value: this.props.routeContext
            }, N.createElement(Wc.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    };
    function Wv({ routeContext: i, match: r, children: c }) {
        let f = N.useContext(za);
        return f && f.static && f.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (f.staticContext._deepestRenderedBoundaryId = r.route.id), N.createElement(Ue.Provider, {
            value: i
        }, c);
    }
    function Fv(i, r = [], c = null, f = null) {
        if (i == null) {
            if (!c) return null;
            if (c.errors) i = c.matches;
            else if (r.length === 0 && !c.initialized && c.matches.length > 0) i = c.matches;
            else return null;
        }
        let o = i, d = c?.errors;
        if (d != null) {
            let p = o.findIndex((m)=>m.route.id && d?.[m.route.id] !== void 0);
            Ot(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`), o = o.slice(0, Math.min(o.length, p + 1));
        }
        let v = !1, g = -1;
        if (c) for(let p = 0; p < o.length; p++){
            let m = o[p];
            if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (g = p), m.route.id) {
                let { loaderData: E, errors: O } = c, D = m.route.loader && !E.hasOwnProperty(m.route.id) && (!O || O[m.route.id] === void 0);
                if (m.route.lazy || D) {
                    v = !0, g >= 0 ? o = o.slice(0, g + 1) : o = [
                        o[0]
                    ];
                    break;
                }
            }
        }
        return o.reduceRight((p, m, E)=>{
            let O, D = !1, q = null, x = null;
            c && (O = d && m.route.id ? d[m.route.id] : void 0, q = m.route.errorElement || Jv, v && (g < 0 && E === 0 ? (rp("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), D = !0, x = null) : g === E && (D = !0, x = m.route.hydrateFallbackElement || null)));
            let Q = r.concat(o.slice(0, E + 1)), H = ()=>{
                let P;
                return O ? P = q : D ? P = x : m.route.Component ? P = N.createElement(m.route.Component, null) : m.route.element ? P = m.route.element : P = p, N.createElement(Wv, {
                    match: m,
                    routeContext: {
                        outlet: p,
                        matches: Q,
                        isDataRoute: c != null
                    },
                    children: P
                });
            };
            return c && (m.route.ErrorBoundary || m.route.errorElement || E === 0) ? N.createElement($v, {
                location: c.location,
                revalidation: c.revalidation,
                component: q,
                error: O,
                children: H(),
                routeContext: {
                    outlet: null,
                    matches: Q,
                    isDataRoute: !0
                }
            }) : H();
        }, null);
    }
    function Fc(i) {
        return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function Iv(i) {
        let r = N.useContext(za);
        return Ot(r, Fc(i)), r;
    }
    function t0(i) {
        let r = N.useContext(si);
        return Ot(r, Fc(i)), r;
    }
    function e0(i) {
        let r = N.useContext(Ue);
        return Ot(r, Fc(i)), r;
    }
    function Ic(i) {
        let r = e0(i), c = r.matches[r.matches.length - 1];
        return Ot(c.route.id, `${i} can only be used on routes that contain a unique "id"`), c.route.id;
    }
    function l0() {
        return Ic("useRouteId");
    }
    function a0() {
        let i = N.useContext(Wc), r = t0("useRouteError"), c = Ic("useRouteError");
        return i !== void 0 ? i : r.errors?.[c];
    }
    function n0() {
        let { router: i } = Iv("useNavigate"), r = Ic("useNavigate"), c = N.useRef(!1);
        return np(()=>{
            c.current = !0;
        }), N.useCallback(async (o, d = {})=>{
            Re(c.current, ap), c.current && (typeof o == "number" ? i.navigate(o) : await i.navigate(o, {
                fromRouteId: r,
                ...d
            }));
        }, [
            i,
            r
        ]);
    }
    var bd = {};
    function rp(i, r, c) {
        !r && !bd[i] && (bd[i] = !0, Re(!1, c));
    }
    N.memo(u0);
    function u0({ routes: i, future: r, state: c }) {
        return ip(i, void 0, c, r);
    }
    function Sd({ to: i, replace: r, state: c, relative: f }) {
        Ot(Ba(), "<Navigate> may be used only in the context of a <Router> component.");
        let { static: o } = N.useContext(_e);
        Re(!o, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
        let { matches: d } = N.useContext(Ue), { pathname: v } = Fe(), g = up(), p = $c(i, Jc(d), v, f === "path"), m = JSON.stringify(p);
        return N.useEffect(()=>{
            g(JSON.parse(m), {
                replace: r,
                state: c,
                relative: f
            });
        }, [
            g,
            m,
            f,
            r,
            c
        ]), null;
    }
    function ai(i) {
        Ot(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
    }
    function i0({ basename: i = "/", children: r = null, location: c, navigationType: f = "POP", navigator: o, static: d = !1 }) {
        Ot(!Ba(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
        let v = i.replace(/^\/*/, "/"), g = N.useMemo(()=>({
                basename: v,
                navigator: o,
                static: d,
                future: {}
            }), [
            v,
            o,
            d
        ]);
        typeof c == "string" && (c = Xl(c));
        let { pathname: p = "/", search: m = "", hash: E = "", state: O = null, key: D = "default" } = c, q = N.useMemo(()=>{
            let x = We(p, v);
            return x == null ? null : {
                location: {
                    pathname: x,
                    search: m,
                    hash: E,
                    state: O,
                    key: D
                },
                navigationType: f
            };
        }, [
            v,
            p,
            m,
            E,
            O,
            D,
            f
        ]);
        return Re(q != null, `<Router basename="${v}"> is not able to match the URL "${p}${m}${E}" because it does not start with the basename, so the <Router> won't render anything.`), q == null ? null : N.createElement(_e.Provider, {
            value: g
        }, N.createElement(Hn.Provider, {
            children: r,
            value: q
        }));
    }
    function r0({ children: i, location: r }) {
        return kv(Yc(i), r);
    }
    function Yc(i, r = []) {
        let c = [];
        return N.Children.forEach(i, (f, o)=>{
            if (!N.isValidElement(f)) return;
            let d = [
                ...r,
                o
            ];
            if (f.type === N.Fragment) {
                c.push.apply(c, Yc(f.props.children, d));
                return;
            }
            Ot(f.type === ai, `[${typeof f.type == "string" ? f.type : f.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Ot(!f.props.index || !f.props.children, "An index route cannot have child routes.");
            let v = {
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
            f.props.children && (v.children = Yc(f.props.children, d)), c.push(v);
        }), c;
    }
    var ni = "get", ui = "application/x-www-form-urlencoded";
    function oi(i) {
        return i != null && typeof i.tagName == "string";
    }
    function c0(i) {
        return oi(i) && i.tagName.toLowerCase() === "button";
    }
    function f0(i) {
        return oi(i) && i.tagName.toLowerCase() === "form";
    }
    function s0(i) {
        return oi(i) && i.tagName.toLowerCase() === "input";
    }
    function o0(i) {
        return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
    }
    function h0(i, r) {
        return i.button === 0 && (!r || r === "_self") && !o0(i);
    }
    var ei = null;
    function d0() {
        if (ei === null) try {
            new FormData(document.createElement("form"), 0), ei = !1;
        } catch  {
            ei = !0;
        }
        return ei;
    }
    var p0 = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain"
    ]);
    function Cc(i) {
        return i != null && !p0.has(i) ? (Re(!1, `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ui}"`), null) : i;
    }
    function m0(i, r) {
        let c, f, o, d, v;
        if (f0(i)) {
            let g = i.getAttribute("action");
            f = g ? We(g, r) : null, c = i.getAttribute("method") || ni, o = Cc(i.getAttribute("enctype")) || ui, d = new FormData(i);
        } else if (c0(i) || s0(i) && (i.type === "submit" || i.type === "image")) {
            let g = i.form;
            if (g == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
            let p = i.getAttribute("formaction") || g.getAttribute("action");
            if (f = p ? We(p, r) : null, c = i.getAttribute("formmethod") || g.getAttribute("method") || ni, o = Cc(i.getAttribute("formenctype")) || Cc(g.getAttribute("enctype")) || ui, d = new FormData(g, i), !d0()) {
                let { name: m, type: E, value: O } = i;
                if (E === "image") {
                    let D = m ? `${m}.` : "";
                    d.append(`${D}x`, "0"), d.append(`${D}y`, "0");
                } else m && d.append(m, O);
            }
        } else {
            if (oi(i)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
            c = ni, f = null, o = ui, v = i;
        }
        return d && o === "text/plain" && (v = d, d = void 0), {
            action: f,
            method: c.toLowerCase(),
            encType: o,
            formData: d,
            body: v
        };
    }
    function tf(i, r) {
        if (i === !1 || i === null || typeof i > "u") throw new Error(r);
    }
    async function y0(i, r) {
        if (i.id in r) return r[i.id];
        try {
            let c = await import(i.module).then(async (m)=>{
                await m.__tla;
                return m;
            });
            return r[i.id] = c, c;
        } catch (c) {
            return console.error(`Error loading route module \`${i.module}\`, reloading page...`), console.error(c), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(()=>{});
        }
    }
    function v0(i) {
        return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string";
    }
    async function g0(i, r, c) {
        let f = await Promise.all(i.map(async (o)=>{
            let d = r.routes[o.route.id];
            if (d) {
                let v = await y0(d, c);
                return v.links ? v.links() : [];
            }
            return [];
        }));
        return R0(f.flat(1).filter(v0).filter((o)=>o.rel === "stylesheet" || o.rel === "preload").map((o)=>o.rel === "stylesheet" ? {
                ...o,
                rel: "prefetch",
                as: "style"
            } : {
                ...o,
                rel: "prefetch"
            }));
    }
    function Ed(i, r, c, f, o, d) {
        let v = (p, m)=>c[m] ? p.route.id !== c[m].route.id : !0, g = (p, m)=>c[m].pathname !== p.pathname || c[m].route.path?.endsWith("*") && c[m].params["*"] !== p.params["*"];
        return d === "assets" ? r.filter((p, m)=>v(p, m) || g(p, m)) : d === "data" ? r.filter((p, m)=>{
            let E = f.routes[p.route.id];
            if (!E || !E.hasLoader) return !1;
            if (v(p, m) || g(p, m)) return !0;
            if (p.route.shouldRevalidate) {
                let O = p.route.shouldRevalidate({
                    currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                    currentParams: c[0]?.params || {},
                    nextUrl: new URL(i, window.origin),
                    nextParams: p.params,
                    defaultShouldRevalidate: !0
                });
                if (typeof O == "boolean") return O;
            }
            return !0;
        }) : [];
    }
    function b0(i, r, { includeHydrateFallback: c } = {}) {
        return S0(i.map((f)=>{
            let o = r.routes[f.route.id];
            if (!o) return [];
            let d = [
                o.module
            ];
            return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
        }).flat(1));
    }
    function S0(i) {
        return [
            ...new Set(i)
        ];
    }
    function E0(i) {
        let r = {}, c = Object.keys(i).sort();
        for (let f of c)r[f] = i[f];
        return r;
    }
    function R0(i, r) {
        let c = new Set;
        return new Set(r), i.reduce((f, o)=>{
            let d = JSON.stringify(E0(o));
            return c.has(d) || (c.add(d), f.push({
                key: d,
                link: o
            })), f;
        }, []);
    }
    function T0(i, r) {
        let c = typeof i == "string" ? new URL(i, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : i;
        return c.pathname === "/" ? c.pathname = "_root.data" : r && We(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.data` : c.pathname = `${c.pathname.replace(/\/$/, "")}.data`, c;
    }
    function cp() {
        let i = N.useContext(za);
        return tf(i, "You must render this element inside a <DataRouterContext.Provider> element"), i;
    }
    function O0() {
        let i = N.useContext(si);
        return tf(i, "You must render this element inside a <DataRouterStateContext.Provider> element"), i;
    }
    var ef = N.createContext(void 0);
    ef.displayName = "FrameworkContext";
    function fp() {
        let i = N.useContext(ef);
        return tf(i, "You must render this element inside a <HydratedRouter> element"), i;
    }
    function A0(i, r) {
        let c = N.useContext(ef), [f, o] = N.useState(!1), [d, v] = N.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: m, onMouseLeave: E, onTouchStart: O } = r, D = N.useRef(null);
        N.useEffect(()=>{
            if (i === "render" && v(!0), i === "viewport") {
                let Q = (P)=>{
                    P.forEach((L)=>{
                        v(L.isIntersecting);
                    });
                }, H = new IntersectionObserver(Q, {
                    threshold: .5
                });
                return D.current && H.observe(D.current), ()=>{
                    H.disconnect();
                };
            }
        }, [
            i
        ]), N.useEffect(()=>{
            if (f) {
                let Q = setTimeout(()=>{
                    v(!0);
                }, 100);
                return ()=>{
                    clearTimeout(Q);
                };
            }
        }, [
            f
        ]);
        let q = ()=>{
            o(!0);
        }, x = ()=>{
            o(!1), v(!1);
        };
        return c ? i !== "intent" ? [
            d,
            D,
            {}
        ] : [
            d,
            D,
            {
                onFocus: wn(g, q),
                onBlur: wn(p, x),
                onMouseEnter: wn(m, q),
                onMouseLeave: wn(E, x),
                onTouchStart: wn(O, q)
            }
        ] : [
            !1,
            D,
            {}
        ];
    }
    function wn(i, r) {
        return (c)=>{
            i && i(c), c.defaultPrevented || r(c);
        };
    }
    function _0({ page: i, ...r }) {
        let { router: c } = cp(), f = N.useMemo(()=>Fd(c.routes, i, c.basename), [
            c.routes,
            i,
            c.basename
        ]);
        return f ? N.createElement(N0, {
            page: i,
            matches: f,
            ...r
        }) : null;
    }
    function M0(i) {
        let { manifest: r, routeModules: c } = fp(), [f, o] = N.useState([]);
        return N.useEffect(()=>{
            let d = !1;
            return g0(i, r, c).then((v)=>{
                d || o(v);
            }), ()=>{
                d = !0;
            };
        }, [
            i,
            r,
            c
        ]), f;
    }
    function N0({ page: i, matches: r, ...c }) {
        let f = Fe(), { manifest: o, routeModules: d } = fp(), { basename: v } = cp(), { loaderData: g, matches: p } = O0(), m = N.useMemo(()=>Ed(i, r, p, o, f, "data"), [
            i,
            r,
            p,
            o,
            f
        ]), E = N.useMemo(()=>Ed(i, r, p, o, f, "assets"), [
            i,
            r,
            p,
            o,
            f
        ]), O = N.useMemo(()=>{
            if (i === f.pathname + f.search + f.hash) return [];
            let x = new Set, Q = !1;
            if (r.forEach((P)=>{
                let L = o.routes[P.route.id];
                !L || !L.hasLoader || (!m.some((V)=>V.route.id === P.route.id) && P.route.id in g && d[P.route.id]?.shouldRevalidate || L.hasClientLoader ? Q = !0 : x.add(P.route.id));
            }), x.size === 0) return [];
            let H = T0(i, v);
            return Q && x.size > 0 && H.searchParams.set("_routes", r.filter((P)=>x.has(P.route.id)).map((P)=>P.route.id).join(",")), [
                H.pathname + H.search
            ];
        }, [
            v,
            g,
            f,
            o,
            m,
            r,
            i,
            d
        ]), D = N.useMemo(()=>b0(E, o), [
            E,
            o
        ]), q = M0(E);
        return N.createElement(N.Fragment, null, O.map((x)=>N.createElement("link", {
                key: x,
                rel: "prefetch",
                as: "fetch",
                href: x,
                ...c
            })), D.map((x)=>N.createElement("link", {
                key: x,
                rel: "modulepreload",
                href: x,
                ...c
            })), q.map(({ key: x, link: Q })=>N.createElement("link", {
                key: x,
                ...Q
            })));
    }
    function D0(...i) {
        return (r)=>{
            i.forEach((c)=>{
                typeof c == "function" ? c(r) : c != null && (c.current = r);
            });
        };
    }
    var sp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    try {
        sp && (window.__reactRouterVersion = "7.5.0");
    } catch  {}
    function x0({ basename: i, children: r, window: c }) {
        let f = N.useRef();
        f.current == null && (f.current = bv({
            window: c,
            v5Compat: !0
        }));
        let o = f.current, [d, v] = N.useState({
            action: o.action,
            location: o.location
        }), g = N.useCallback((p)=>{
            N.startTransition(()=>v(p));
        }, [
            v
        ]);
        return N.useLayoutEffect(()=>o.listen(g), [
            o,
            g
        ]), N.createElement(i0, {
            basename: i,
            children: r,
            location: d.location,
            navigationType: d.action,
            navigator: o
        });
    }
    var op = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, hp = N.forwardRef(function({ onClick: r, discover: c = "render", prefetch: f = "none", relative: o, reloadDocument: d, replace: v, state: g, target: p, to: m, preventScrollReset: E, viewTransition: O, ...D }, q) {
        let { basename: x } = N.useContext(_e), Q = typeof m == "string" && op.test(m), H, P = !1;
        if (typeof m == "string" && Q && (H = m, sp)) try {
            let ft = new URL(window.location.href), jt = m.startsWith("//") ? new URL(ft.protocol + m) : new URL(m), oe = We(jt.pathname, x);
            jt.origin === ft.origin && oe != null ? m = oe + jt.search + jt.hash : P = !0;
        } catch  {
            Re(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
        }
        let L = Xv(m, {
            relative: o
        }), [V, Z, j] = A0(f, D), tt = w0(m, {
            replace: v,
            state: g,
            target: p,
            preventScrollReset: E,
            relative: o,
            viewTransition: O
        });
        function ct(ft) {
            r && r(ft), ft.defaultPrevented || tt(ft);
        }
        let Et = N.createElement("a", {
            ...D,
            ...j,
            href: H || L,
            onClick: P || d ? r : ct,
            ref: D0(q, Z),
            target: p,
            "data-discover": !Q && c === "render" ? "true" : void 0
        });
        return V && !Q ? N.createElement(N.Fragment, null, Et, N.createElement(_0, {
            page: L
        })) : Et;
    });
    hp.displayName = "Link";
    var z0 = N.forwardRef(function({ "aria-current": r = "page", caseSensitive: c = !1, className: f = "", end: o = !1, style: d, to: v, viewTransition: g, children: p, ...m }, E) {
        let O = Ln(v, {
            relative: m.relative
        }), D = Fe(), q = N.useContext(si), { navigator: x, basename: Q } = N.useContext(_e), H = q != null && L0(O) && g === !0, P = x.encodeLocation ? x.encodeLocation(O).pathname : O.pathname, L = D.pathname, V = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
        c || (L = L.toLowerCase(), V = V ? V.toLowerCase() : null, P = P.toLowerCase()), V && Q && (V = We(V, Q) || V);
        const Z = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
        let j = L === P || !o && L.startsWith(P) && L.charAt(Z) === "/", tt = V != null && (V === P || !o && V.startsWith(P) && V.charAt(P.length) === "/"), ct = {
            isActive: j,
            isPending: tt,
            isTransitioning: H
        }, Et = j ? r : void 0, ft;
        typeof f == "function" ? ft = f(ct) : ft = [
            f,
            j ? "active" : null,
            tt ? "pending" : null,
            H ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let jt = typeof d == "function" ? d(ct) : d;
        return N.createElement(hp, {
            ...m,
            "aria-current": Et,
            className: ft,
            ref: E,
            style: jt,
            to: v,
            viewTransition: g
        }, typeof p == "function" ? p(ct) : p);
    });
    z0.displayName = "NavLink";
    var B0 = N.forwardRef(({ discover: i = "render", fetcherKey: r, navigate: c, reloadDocument: f, replace: o, state: d, method: v = ni, action: g, onSubmit: p, relative: m, preventScrollReset: E, viewTransition: O, ...D }, q)=>{
        let x = C0(), Q = H0(g, {
            relative: m
        }), H = v.toLowerCase() === "get" ? "get" : "post", P = typeof g == "string" && op.test(g), L = (V)=>{
            if (p && p(V), V.defaultPrevented) return;
            V.preventDefault();
            let Z = V.nativeEvent.submitter, j = Z?.getAttribute("formmethod") || v;
            x(Z || V.currentTarget, {
                fetcherKey: r,
                method: j,
                navigate: c,
                replace: o,
                state: d,
                relative: m,
                preventScrollReset: E,
                viewTransition: O
            });
        };
        return N.createElement("form", {
            ref: q,
            method: H,
            action: Q,
            onSubmit: f ? p : L,
            ...D,
            "data-discover": !P && i === "render" ? "true" : void 0
        });
    });
    B0.displayName = "Form";
    function U0(i) {
        return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
    }
    function dp(i) {
        let r = N.useContext(za);
        return Ot(r, U0(i)), r;
    }
    function w0(i, { target: r, replace: c, state: f, preventScrollReset: o, relative: d, viewTransition: v } = {}) {
        let g = up(), p = Fe(), m = Ln(i, {
            relative: d
        });
        return N.useCallback((E)=>{
            if (h0(E, r)) {
                E.preventDefault();
                let O = c !== void 0 ? c : Cn(p) === Cn(m);
                g(i, {
                    replace: O,
                    state: f,
                    preventScrollReset: o,
                    relative: d,
                    viewTransition: v
                });
            }
        }, [
            p,
            g,
            m,
            c,
            f,
            r,
            i,
            o,
            d,
            v
        ]);
    }
    var P0 = 0, q0 = ()=>`__${String(++P0)}__`;
    function C0() {
        let { router: i } = dp("useSubmit"), { basename: r } = N.useContext(_e), c = l0();
        return N.useCallback(async (f, o = {})=>{
            let { action: d, method: v, encType: g, formData: p, body: m } = m0(f, r);
            if (o.navigate === !1) {
                let E = o.fetcherKey || q0();
                await i.fetch(E, c, o.action || d, {
                    preventScrollReset: o.preventScrollReset,
                    formData: p,
                    body: m,
                    formMethod: o.method || v,
                    formEncType: o.encType || g,
                    flushSync: o.flushSync
                });
            } else await i.navigate(o.action || d, {
                preventScrollReset: o.preventScrollReset,
                formData: p,
                body: m,
                formMethod: o.method || v,
                formEncType: o.encType || g,
                replace: o.replace,
                state: o.state,
                fromRouteId: c,
                flushSync: o.flushSync,
                viewTransition: o.viewTransition
            });
        }, [
            i,
            r,
            c
        ]);
    }
    function H0(i, { relative: r } = {}) {
        let { basename: c } = N.useContext(_e), f = N.useContext(Ue);
        Ot(f, "useFormAction must be used inside a RouteContext");
        let [o] = f.matches.slice(-1), d = {
            ...Ln(i || ".", {
                relative: r
            })
        }, v = Fe();
        if (i == null) {
            d.search = v.search;
            let g = new URLSearchParams(d.search), p = g.getAll("index");
            if (p.some((E)=>E === "")) {
                g.delete("index"), p.filter((O)=>O).forEach((O)=>g.append("index", O));
                let E = g.toString();
                d.search = E ? `?${E}` : "";
            }
        }
        return (!i || i === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (d.pathname = d.pathname === "/" ? c : $e([
            c,
            d.pathname
        ])), Cn(d);
    }
    function L0(i, r = {}) {
        let c = N.useContext(lp);
        Ot(c != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
        let { basename: f } = dp("useViewTransitionState"), o = Ln(i, {
            relative: r.relative
        });
        if (!c.isTransitioning) return !1;
        let d = We(c.currentLocation.pathname, f) || c.currentLocation.pathname, v = We(c.nextLocation.pathname, f) || c.nextLocation.pathname;
        return ci(o.pathname, v) != null || ci(o.pathname, d) != null;
    }
    new TextEncoder;
    let Q0, Y0, Rd, G0;
    Ee = {
        TIMER_DURATION: 60 * 3,
        THEME: "classic",
        ENABLE_SOUND: !0,
        IS_FLIPPED: !1,
        THEME_KEY: "theme",
        ENABLE_SOUND_KEY: "enableSound",
        TIMER_DURATION_KEY: "timerDuration",
        IS_FLIPPED_KEY: "isFlipped",
        START_FEN: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    };
    Q0 = N.createContext(void 0);
    Y0 = ({ children: i })=>{
        const r = (O, D)=>{
            try {
                const q = localStorage.getItem(O);
                if (q == null) return D;
                const x = JSON.parse(q);
                return x !== void 0 ? x : D;
            } catch  {
                return D;
            }
        }, [c, f] = N.useState(()=>r(Ee.THEME_KEY, Ee.THEME)), [o, d] = N.useState(()=>r(Ee.ENABLE_SOUND_KEY, Ee.ENABLE_SOUND)), [v, g] = N.useState(()=>r(Ee.TIMER_DURATION_KEY, Ee.TIMER_DURATION)), [p, m] = N.useState(()=>r(Ee.IS_FLIPPED_KEY, Ee.IS_FLIPPED));
        N.useEffect(()=>localStorage.setItem(Ee.THEME_KEY, JSON.stringify(c)), [
            c
        ]), N.useEffect(()=>localStorage.setItem(Ee.ENABLE_SOUND_KEY, JSON.stringify(o)), [
            o
        ]), N.useEffect(()=>localStorage.setItem(Ee.TIMER_DURATION_KEY, JSON.stringify(v)), [
            v
        ]), N.useEffect(()=>localStorage.setItem(Ee.IS_FLIPPED_KEY, JSON.stringify(p)), [
            p
        ]);
        const E = N.useMemo(()=>({
                theme: c,
                setTheme: f,
                enableSound: o,
                setEnableSound: d,
                timerDuration: v,
                setTimerDuration: g,
                isFlipped: p,
                setIsFlipped: m
            }), [
            c,
            o,
            v,
            p
        ]);
        return Ht.jsx(Q0.Provider, {
            value: E,
            children: i
        });
    };
    Rd = (i, r)=>r.split(" ")[1] === "w" ? i : -i;
    G0 = 400;
    function j0(i, r) {
        const c = pp(r);
        if (!c || !i.has(c)) return;
        const f = i.get(c);
        if (f !== void 0) return i.delete(c), i.set(c, f), f;
    }
    function K0(i, r, c, f = G0) {
        const o = pp(r);
        if (o) {
            for(i.has(o) && i.delete(o); i.size > f;){
                const d = i.keys().next().value;
                d !== void 0 && i.delete(d);
            }
            i.set(o, c);
        }
    }
    pp = function(i) {
        return i == null || typeof i != "string" ? "" : i.trim().replace(/\s+/g, " ");
    };
    class X0 {
        constructor(r, c){
            this.post = r, this.canSend = c, this.queue = [], this.running = !1;
        }
        enqueue(r, c) {
            this.queue.push({
                type: r,
                cmd: c
            }), this.process();
        }
        process() {
            if (!(this.running || !this.canSend())) {
                for(this.running = !0; this.queue.length > 0;){
                    const r = this.queue.findIndex((f)=>f.type === "stop"), c = r >= 0 ? this.queue.splice(r, 1)[0] : this.queue.shift();
                    c && this.post(c.cmd);
                }
                this.running = !1;
            }
        }
        clear() {
            this.queue = [], this.running = !1;
        }
    }
    function qn(i) {
        if (i == null) return [];
        if (typeof i == "string") return i.split(/\r?\n/).map((c)=>c.trim()).filter(Boolean);
        if (typeof ArrayBuffer < "u" && i instanceof ArrayBuffer) return qn(new TextDecoder().decode(i));
        if (ArrayBuffer.isView && ArrayBuffer.isView(i)) return qn(new TextDecoder().decode(i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength)));
        if (Array.isArray(i)) {
            const c = [];
            for (const f of i)c.push(...qn(f));
            return c;
        }
        if (typeof i == "object" && i !== null && "data" in i && typeof i.data == "string") return qn(i.data);
        const r = String(i).trim();
        return r ? [
            r
        ] : [];
    }
    function V0(i) {
        const r = i.match(/\bscore\s+(cp|mate)\s+(-?\d+)/i);
        if (!r) return null;
        const c = r[1].toLowerCase(), f = parseInt(r[2], 10);
        return Number.isNaN(f) ? null : c === "cp" ? {
            pawns: f / 100,
            mate: null
        } : {
            pawns: f > 0 ? 10 : -10,
            mate: f
        };
    }
    function k0(i) {
        const r = i.match(/\bpv\s+(.+)/i);
        return r ? r[1].trim().split(/\s+/).filter(Boolean) : null;
    }
    function Z0(i) {
        const r = i.match(/\bmultipv\s+(\d+)/i);
        if (!r) return null;
        const c = parseInt(r[1], 10);
        return Number.isNaN(c) ? null : c;
    }
    function J0(i) {
        const r = i.match(/\bdepth\s+(\d+)/i);
        if (!r) return null;
        const c = parseInt(r[1], 10);
        return Number.isNaN(c) ? null : c;
    }
    function Td(i) {
        if (!i.startsWith("bestmove")) return null;
        const c = i.trim().split(/\s+/)[1];
        return !c || c === "(none)" ? "" : c;
    }
    const $0 = [
        8,
        12,
        16,
        20,
        24
    ], W0 = 3e4, F0 = 16, I0 = 12e4;
    function tg(i) {
        typeof requestIdleCallback < "u" ? requestIdleCallback(i, {
            timeout: 48
        }) : queueMicrotask(i);
    }
    class Hc {
        constructor(r, c = {}, f = "stockfish-lite"){
            this.transport = r, this.kind = f, this.listeners = new Set, this.analyzeCache = new Map, this.status = "idle", this.warmupPercent = 33, this.ready = !1, this.enabled = !1, this.uciReady = !1, this.readyOk = !1, this.searching = !1, this.liveFen = "", this.lastEvalPawns = null, this.lastMate = null, this.lastSecondEvalPawns = null, this.lastSecondMate = null, this.lastPvUci = [], this.stopTimeout = null, this.searchTimeout = null, this.pending = null, this.readyWait = null, this.lastMultiPv = null, this.workGen = 0, this.config = {
                ...c
            }, this.autoStopMs = c.autoStopMs ?? 8e3, this.queue = new X0((o)=>this.transport.post(o), ()=>this.transport.isStarted), this.transport.onMessage((o)=>this.handleRaw(o)), this.transport.onError((o)=>this.handleWorkerError(o));
        }
        subscribe(r) {
            return this.listeners.add(r), r(this.statusEvent()), ()=>{
                this.listeners.delete(r);
            };
        }
        getStatus() {
            return this.status;
        }
        start() {
            this.transport.isStarted || (this.uciReady = !1, this.readyOk = !1, this.ready = !1, this.setStatus("loading", 33), this.transport.start(), this.queue.process(), this.transport.post("uci"));
        }
        dispose() {
            this.uciReady = !1, this.readyOk = !1, this.ready = !1, this.cancelWork(new Error("Engine terminated")), this.transport.terminate(), this.lastMultiPv = null, this.queue.clear(), this.setStatus("idle", 33);
        }
        setEnabled(r) {
            this.enabled = r, r || this.cancelWork(new Error("Engine disabled"));
        }
        configure(r) {
            this.config = {
                ...this.config,
                ...r
            }, typeof r.autoStopMs == "number" && r.autoStopMs > 0 && (this.autoStopMs = r.autoStopMs), r.threads != null && this.queue.enqueue("normal", `setoption name Threads value ${r.threads}`), r.hashMb != null && this.queue.enqueue("normal", `setoption name Hash value ${r.hashMb}`), r.multiPv != null && this.lastMultiPv !== r.multiPv && (this.queue.enqueue("normal", `setoption name MultiPV value ${r.multiPv}`), this.lastMultiPv = r.multiPv);
        }
        getRecommendedConfig() {
            return {
                threads: this.config.threads ?? 1,
                hashMb: this.config.hashMb ?? 16,
                multiPv: this.config.multiPv ?? 1,
                autoStopMs: this.autoStopMs
            };
        }
        getKind() {
            return this.kind;
        }
        startLiveAnalysis(r) {
            this.enabled && (this.cancelWork(new Error("Live analysis started")), this.transport.isStarted || this.start(), this.liveFen = r, this.searchTimeout = setTimeout(()=>{
                this.searching = !0, this.setStatus("searching", this.warmupPercent), this.queue.enqueue("normal", `position fen ${r}`), this.queue.enqueue("normal", "go infinite"), this.stopTimeout = setTimeout(()=>{
                    this.stopLiveAnalysis();
                }, this.autoStopMs);
            }, 50));
        }
        stopLiveAnalysis() {
            this.pending?.kind === "position" && (this.workGen += 1, this.rejectPending(new Error("Stopped"))), !(!this.transport.isStarted || !this.searching) && (this.queue.enqueue("stop", "stop"), this.searching = !1, this.readyOk && this.setStatus("ready", 100), this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null));
        }
        analyzePosition(r, c = {}) {
            if (!(c.skipCache === !0) && r) {
                const g = j0(this.analyzeCache, r);
                if (g) return Promise.resolve(g);
            }
            const o = (Array.isArray(c.progressiveDepths) && c.progressiveDepths.length > 0 ? c.progressiveDepths : $0).map((g)=>Math.min(24, Math.max(1, g))), d = typeof c.timeoutMs == "number" && c.timeoutMs > 0 ? c.timeoutMs : W0, v = this.beginWork();
            return this.liveFen = r, new Promise((g, p)=>{
                if (!this.enabled) {
                    p(new Error("Engine disabled"));
                    return;
                }
                if (this.transport.isStarted || this.start(), !this.transport.isStarted) {
                    p(new Error("Worker unavailable"));
                    return;
                }
                const m = setTimeout(()=>{
                    if (this.pending && this.pending.gen === v) {
                        const E = this.snapshotPending(this.pending);
                        this.pending = null, this.searching = !1, g(E);
                    }
                }, d);
                this.pending = {
                    kind: "position",
                    resolve: g,
                    reject: p,
                    fen: r,
                    timeoutId: m,
                    depths: o,
                    depthIndex: 0,
                    gen: v
                }, this.lastEvalPawns = null, this.lastMate = null, this.lastSecondEvalPawns = null, this.lastSecondMate = null, this.lastPvUci = [], this.handshake(v).then(()=>{
                    this.workGen !== v || !this.pending || this.pending.gen !== v || this.sendGo(this.pending);
                }).catch(p);
            });
        }
        async reviewGame(r, c = {}, f) {
            if (!this.enabled) throw new Error("Engine disabled");
            if (!r.length) return;
            const o = Math.min(24, Math.max(1, typeof c.depth == "number" && c.depth > 0 ? c.depth : F0)), d = typeof c.timeoutMsPerPly == "number" && c.timeoutMsPerPly > 0 ? c.timeoutMsPerPly : I0, v = this.beginWork();
            if (this.transport.isStarted || this.start(), !this.transport.isStarted) throw new Error("Worker unavailable");
            if (await this.handshake(v), this.workGen !== v) throw new Error("Review cancelled");
            for(let g = 0; g < r.length; g++){
                if (this.workGen !== v) throw new Error("Review cancelled");
                const p = await this.searchFixedDepth(r[g], o, v, d);
                if (this.workGen !== v) throw new Error("Review cancelled");
                await f?.(g, p);
            }
        }
        searchFixedDepth(r, c, f, o) {
            return new Promise((d, v)=>{
                if (this.workGen !== f) {
                    v(new Error("Review cancelled"));
                    return;
                }
                const g = setTimeout(()=>{
                    this.pending && this.pending.gen === f && (this.pending = null, this.searching = !1, v(new Error("Review ply timeout")));
                }, o);
                this.pending = {
                    kind: "review",
                    resolve: d,
                    reject: v,
                    fen: r,
                    timeoutId: g,
                    depths: [
                        c
                    ],
                    depthIndex: 0,
                    gen: f
                }, this.lastEvalPawns = null, this.lastMate = null, this.lastSecondEvalPawns = null, this.lastSecondMate = null, this.lastPvUci = [], this.sendGo(this.pending);
            });
        }
        beginWork() {
            return this.workGen += 1, this.rejectPending(new Error("Superseded")), this.readyWait && (this.readyWait.reject(new Error("Superseded")), this.readyWait = null), this.stopLiveAnalysis(), this.clearTimers(), this.searching = !1, this.workGen;
        }
        cancelWork(r) {
            this.workGen += 1, this.rejectPending(r), this.readyWait && (this.readyWait.reject(r), this.readyWait = null), this.stopLiveAnalysis(), this.clearTimers(), this.searching = !1;
        }
        handshake(r) {
            return new Promise((c, f)=>{
                if (this.workGen !== r) {
                    f(new Error("Cancelled"));
                    return;
                }
                this.readyWait = {
                    gen: r,
                    resolve: c,
                    reject: f
                }, this.uciReady && this.readyOk && (this.queue.enqueue("stop", "stop"), this.queue.enqueue("normal", "isready"));
            });
        }
        handleRaw(r) {
            const c = qn(r), f = ()=>{
                for (const o of c)this.handleLine(o);
            };
            if (this.pending || this.readyWait) {
                f();
                return;
            }
            tg(f);
        }
        handleLine(r) {
            if (r === "uciok" && (this.uciReady = !0, this.setStatus("loading", 66), this.applyEngineOptions(), this.queue.enqueue("normal", "isready")), r === "readyok" && (this.readyOk = !0, this.ready = !0, this.setStatus(this.searching ? "searching" : "ready", 100), this.readyWait && this.readyWait.gen === this.workGen)) {
                const d = this.readyWait;
                this.readyWait = null, d.resolve();
                return;
            }
            const c = this.pending?.fen ?? this.liveFen;
            if (r.startsWith("info")) {
                const d = V0(r), v = k0(r), g = J0(r), p = {
                    fen: c
                }, m = d && !/\b(lowerbound|upperbound)\b/i.test(r), E = Z0(r) ?? 1;
                if (m && d && !this.readyWait) {
                    const O = c ? Rd(d.pawns, c) : d.pawns, D = d.mate == null ? null : c ? Rd(d.mate, c) : d.mate;
                    E <= 1 ? (p.eval = {
                        pawns: O,
                        mate: D
                    }, this.lastEvalPawns = O, this.lastMate = D) : E === 2 && (p.secondEval = {
                        pawns: O,
                        mate: D
                    }, this.lastSecondEvalPawns = O, this.lastSecondMate = D);
                }
                v && (p.pvUci = v, p.bestMoveUci = v[0], this.lastPvUci = v), g != null && (p.depth = g), !this.readyWait && this.pending?.kind === "position" && (p.eval || p.pvUci || p.depth != null) && this.emit({
                    type: "info",
                    info: p
                });
            }
            const f = this.pending;
            if (f && r.startsWith("bestmove")) {
                if (this.readyWait || f.gen !== this.workGen) return;
                const d = Td(r) ?? this.lastPvUci[0] ?? "";
                if (f.kind === "position" && f.depthIndex < f.depths.length - 1) {
                    f.depthIndex += 1, this.queue.enqueue("normal", `go depth ${f.depths[f.depthIndex]}`);
                    return;
                }
                clearTimeout(f.timeoutId), this.pending = null, this.searching = !1;
                const v = this.finishInfo(f.fen, d, f.depths[f.depthIndex]);
                f.kind === "position" && (K0(this.analyzeCache, f.fen, v), this.emit({
                    type: "bestMove",
                    fen: f.fen,
                    bestMoveUci: v.bestMoveUci ?? ""
                })), f.resolve(v), this.setStatus("ready", 100);
                return;
            }
            const o = Td(r);
            o != null && !this.pending && this.emit({
                type: "bestMove",
                fen: c,
                bestMoveUci: o
            });
        }
        applyEngineOptions() {
            this.config.threads != null && this.queue.enqueue("normal", `setoption name Threads value ${this.config.threads}`), this.config.hashMb != null && this.queue.enqueue("normal", `setoption name Hash value ${this.config.hashMb}`), this.config.multiPv != null && this.lastMultiPv !== this.config.multiPv && (this.queue.enqueue("normal", `setoption name MultiPV value ${this.config.multiPv}`), this.lastMultiPv = this.config.multiPv);
        }
        sendGo(r) {
            const c = r.kind === "review" ? 2 : 1;
            this.lastMultiPv !== c && (this.queue.enqueue("normal", `setoption name MultiPV value ${c}`), this.lastMultiPv = c);
            const f = r.depths[r.depthIndex];
            this.searching = !0, this.setStatus("searching", this.warmupPercent), this.queue.enqueue("normal", `position fen ${r.fen}`), this.queue.enqueue("normal", `go depth ${f}`);
        }
        snapshotPending(r) {
            return this.finishInfo(r.fen, this.lastPvUci[0] ?? "", r.depths[r.depthIndex]);
        }
        finishInfo(r, c, f) {
            const o = this.lastEvalPawns != null && Number.isFinite(this.lastEvalPawns) ? this.lastEvalPawns : 0, d = this.lastSecondEvalPawns != null && Number.isFinite(this.lastSecondEvalPawns) ? {
                pawns: this.lastSecondEvalPawns,
                mate: this.lastSecondMate
            } : void 0;
            return {
                fen: r,
                eval: {
                    pawns: o,
                    mate: this.lastMate
                },
                secondEval: d,
                bestMoveUci: c,
                pvUci: this.lastPvUci.length ? this.lastPvUci : c ? [
                    c
                ] : [],
                depth: f
            };
        }
        handleWorkerError(r) {
            console.error("Error with engine worker:", r), this.cancelWork(r), this.setStatus("error", this.warmupPercent), this.emit({
                type: "error",
                error: r
            });
        }
        rejectPending(r) {
            const c = this.pending;
            c && (clearTimeout(c.timeoutId), c.reject(r), this.pending = null);
        }
        clearTimers() {
            this.stopTimeout && (clearTimeout(this.stopTimeout), this.stopTimeout = null), this.searchTimeout && (clearTimeout(this.searchTimeout), this.searchTimeout = null);
        }
        setStatus(r, c) {
            this.status = r, this.warmupPercent = c, this.emit(this.statusEvent());
        }
        statusEvent() {
            return {
                type: "status",
                status: this.status,
                warmupPercent: this.warmupPercent,
                ready: this.ready
            };
        }
        emit(r) {
            this.listeners.forEach((c)=>c(r));
        }
    }
    class Od {
        constructor(r){
            this.createWorker = r, this.worker = null, this.messageHandler = null, this.errorHandler = null;
        }
        get isStarted() {
            return this.worker != null;
        }
        start() {
            this.worker || (this.worker = this.createWorker(), this.worker.onmessage = (r)=>{
                this.messageHandler?.(r.data);
            }, this.worker.onerror = (r)=>{
                this.errorHandler?.(new Error(r.message || "Engine worker error"));
            });
        }
        post(r) {
            this.worker?.postMessage(r);
        }
        onMessage(r) {
            this.messageHandler = r;
        }
        onError(r) {
            this.errorHandler = r;
        }
        terminate() {
            this.worker?.terminate(), this.worker = null;
        }
    }
    const eg = "modulepreload", lg = function(i) {
        return "/chess-frontend/" + i;
    }, Ad = {}, Gc = function(r, c, f) {
        let o = Promise.resolve();
        if (c && c.length > 0) {
            document.getElementsByTagName("link");
            const v = document.querySelector("meta[property=csp-nonce]"), g = v?.nonce || v?.getAttribute("nonce");
            o = Promise.allSettled(c.map((p)=>{
                if (p = lg(p), p in Ad) return;
                Ad[p] = !0;
                const m = p.endsWith(".css"), E = m ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${p}"]${E}`)) return;
                const O = document.createElement("link");
                if (O.rel = m ? "stylesheet" : eg, m || (O.as = "script"), O.crossOrigin = "", O.href = p, g && O.setAttribute("nonce", g), document.head.appendChild(O), m) return new Promise((D, q)=>{
                    O.addEventListener("load", D), O.addEventListener("error", ()=>q(new Error(`Unable to preload CSS for ${p}`)));
                });
            }));
        }
        function d(v) {
            const g = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (g.payload = v, window.dispatchEvent(g), !g.defaultPrevented) throw v;
        }
        return o.then((v)=>{
            for (const g of v || [])g.status === "rejected" && d(g.reason);
            return r().catch(d);
        });
    };
    async function ag() {
        const [{ invoke: i }, { listen: r }] = await Promise.all([
            Gc(()=>import("./core-BatWupLY.js"), []),
            Gc(()=>import("./event-6g3cnCrr.js"), __vite__mapDeps([0,1]))
        ]);
        return {
            invoke: i,
            listen: r
        };
    }
    class ng {
        constructor(){
            this.started = !1, this.ready = !1, this.booting = null, this.pending = [], this.messageHandler = null, this.errorHandler = null, this.unlisten = null, this.api = null;
        }
        get isStarted() {
            return this.started;
        }
        start() {
            this.started || this.booting || (this.started = !0, this.booting = this.boot().catch((r)=>{
                this.started = !1, this.booting = null;
                const c = r instanceof Error ? r : new Error(String(r));
                this.errorHandler?.(c);
            }));
        }
        post(r) {
            if (!this.ready || !this.api) {
                this.pending.push(r);
                return;
            }
            this.api.invoke("stockfish_write", {
                line: r
            }).catch((c)=>{
                const f = c instanceof Error ? c : new Error(String(c));
                this.errorHandler?.(f);
            });
        }
        onMessage(r) {
            this.messageHandler = r;
        }
        onError(r) {
            this.errorHandler = r;
        }
        terminate() {
            this.started = !1, this.ready = !1, this.booting = null, this.pending = [], this.unlisten?.(), this.unlisten = null, this.api && this.api.invoke("stockfish_stop"), this.api = null;
        }
        async boot() {
            const r = await ag();
            this.api = r, this.unlisten = await r.listen("stockfish-output", (o)=>{
                this.messageHandler?.(o.payload);
            });
            const c = await r.invoke("stockfish_start");
            console.log(`[engine] native Stockfish process: ${c}`), this.ready = !0, this.booting = null;
            const f = this.pending.splice(0, this.pending.length);
            for (const o of f)await r.invoke("stockfish_write", {
                line: o
            });
        }
    }
    const ug = {
        BASE_URL: "/chess-frontend/"
    }, ig = ug, rg = ig?.BASE_URL, cg = `${rg}stockfish/stockfish-17-lite-single.js`;
    jc = function() {
        return typeof window < "u" && "__TAURI_INTERNALS__" in window;
    };
    function fg() {
        const i = typeof navigator < "u" && navigator.hardwareConcurrency || 4;
        return Math.max(2, Math.min(8, i - 1));
    }
    function sg(i) {
        return jc() ? i === "stockfish-lite" ? "stockfish-lite" : "stockfish-native" : "stockfish-lite";
    }
    function _d(i, r = {}) {
        let c = i ?? (jc() ? "stockfish-native" : "stockfish-lite");
        return c === "stockfish-native" && !jc() && (c = "stockfish-lite"), c === "stockfish-native" ? new Hc(new ng, {
            threads: fg(),
            hashMb: 128,
            multiPv: 1,
            autoStopMs: 8e3,
            ...r
        }, "stockfish-native") : c === "stockfish-full" ? new Hc(new Od(()=>new Worker(new URL("/chess-frontend/assets/stockfishWorker-NAseIZ4c.js", import.meta.url), {
                type: "classic"
            })), r, "stockfish-full") : new Hc(new Od(()=>new Worker(cg)), {
            threads: 1,
            hashMb: 16,
            multiPv: 1,
            autoStopMs: 8e3,
            ...r
        }, "stockfish-lite");
    }
    let mp, og, hg;
    mp = N.createContext(void 0);
    Bg = ()=>{
        const i = N.useContext(mp);
        if (!i) throw new Error("useChessEngineContext must be used inside EngineProvider");
        return i;
    };
    og = ({ children: i, kind: r })=>{
        const c = v1((x)=>x.settings.engineKind), f = r ?? sg(c), o = N.useRef(null);
        o.current || (o.current = _d(f, {
            autoStopMs: 8e3
        }));
        const [d, v] = N.useState(o.current), [g, p] = N.useState(d.getStatus()), [m, E] = N.useState(!1), [O, D] = N.useState(33);
        N.useEffect(()=>{
            let x = o.current;
            (!x || x.getKind() !== f) && (x?.dispose(), x = _d(f, {
                autoStopMs: 8e3
            }), o.current = x, v(x), p(x.getStatus()), E(!1), D(33));
            const Q = x.subscribe((L)=>{
                L.type === "status" && (p(L.status), E(L.ready), D(L.warmupPercent));
            }), H = ()=>{
                const L = x.getRecommendedConfig();
                console.log(`[engine] using ${x.getKind()} (${L.threads ?? 1} threads, ${L.hashMb ?? 16}MB hash)`), x.start();
            };
            let P;
            if (typeof window < "u" && typeof window.requestIdleCallback == "function") {
                const L = window.requestIdleCallback(H, {
                    timeout: 1200
                });
                P = ()=>{
                    window.cancelIdleCallback?.(L);
                };
            } else {
                const L = setTimeout(H, 900);
                P = ()=>clearTimeout(L);
            }
            return ()=>{
                P?.(), Q();
            };
        }, [
            f
        ]), N.useEffect(()=>()=>{
                o.current?.dispose(), o.current = null;
            }, []);
        const q = N.useMemo(()=>({
                engine: d,
                engineReadyOk: m,
                engineWarmupPercent: O,
                engineStatus: g
            }), [
            d,
            m,
            O,
            g
        ]);
        return Ht.jsx(mp.Provider, {
            value: q,
            children: i
        });
    };
    hg = N.lazy(()=>Gc(()=>import("./AnalysisPage-yYYjgxQ8.js"), __vite__mapDeps([2,3])));
    function dg() {
        return Ht.jsx(N.Suspense, {
            fallback: Ht.jsx("div", {
                className: "loading-screen",
                children: "Loading..."
            }),
            children: Ht.jsxs(r0, {
                children: [
                    Ht.jsx(ai, {
                        path: "/",
                        element: Ht.jsx(Sd, {
                            to: "/analysis",
                            replace: !0
                        })
                    }),
                    Ht.jsx(ai, {
                        path: "/analysis",
                        element: Ht.jsx(hg, {})
                    }),
                    Ht.jsx(ai, {
                        path: "*",
                        element: Ht.jsx(Sd, {
                            to: "/analysis",
                            replace: !0
                        })
                    })
                ]
            })
        });
    }
    const pg = "G-KZRHN2TP97", mg = ()=>{
        const i = Fe();
        return N.useEffect(()=>{
            if (typeof window.gtag != "function") return;
            const r = `${i.pathname}${i.search}${i.hash}`;
            window.gtag("event", "page_view", {
                page_path: r,
                page_location: window.location.href,
                send_to: pg
            });
        }, [
            i
        ]), null;
    }, yg = ()=>Ht.jsx(Y0, {
            children: Ht.jsx(og, {
                children: Ht.jsxs(x0, {
                    children: [
                        Ht.jsx(mg, {}),
                        Ht.jsx(dg, {})
                    ]
                })
            })
        });
    function vg() {
        [
            "theme",
            "enableSound",
            "timerDuration",
            "isFlipped",
            "persist:root"
        ].forEach((r)=>{
            try {
                const c = localStorage.getItem(r);
                c !== null && JSON.parse(c);
            } catch  {
                localStorage.removeItem(r);
            }
        });
    }
    vg();
    const yp = document.getElementById("root");
    if (!yp) throw new Error("Root element with id 'root' not found");
    Jy.createRoot(yp).render(Ht.jsx(h1, {
        store: Wd,
        children: Ht.jsx(yg, {})
    }));
})();
export { Ee as C, gg as R, N as a, v1 as b, Tg as c, Eg as d, Rg as e, Sg as f, Wd as g, Bg as h, jc as i, Ht as j, xg as k, Mg as l, Ag as m, pp as n, Ng as o, Dg as p, _g as q, Vy as r, Og as s, zg as t, bg as u, __tla };
